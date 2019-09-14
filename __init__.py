import os
<<<<<<< HEAD
from py4web import action, abort, request, DAL, Field, Cache
from py4web.core import Session, Fixture, Reloader
from pydal.validators import CRYPT
=======
try:
    from py4web import action, request, DAL, Field, Session, Cache, user_in
except ImportError:
    from web3py import action, request, DAL, Field, Session, Cache, user_in

>>>>>>> 2af088c5d784c8861869455234b4084368e344bc
from . import fs2json

# define session and cache objects
session = Session(secret='some secret')
cache = Cache(size=1000)



session = Session()

class Logged(Fixture):

    def __init__(self, session):
        self.__prerequisites__ = [session]
        self.session = session

    def on_request(self):
        user = self.session.get('user')
        if not user or not user.get('id'):
            abort(403)

session_secured = action.uses(Logged(session))

@action('login', method='POST')
@action.uses(session)
def login():
    valid = False
    password = request.json.get('password')
    password_file = os.environ.get('PY4WEB_PASSWORD_FILE')
    if password and password_file and os.path.exists(password_file):
        with open(password_file, 'r') as fp:
            encrypted_password = fp.read().strip()
            valid = CRYPT()(password)[0] == encrypted_password
    if valid:
        session['user'] = dict(id=1)
    return dict(user=valid)

@action('logout', method='POST')
@action.uses(session)
def logout():
    session['user'] = None
    return dict()



# define database and tables
#db = DAL('sqlite://storage.db', folder=os.path.join(os.path.dirname(__file__), 'databases'))
#db.define_table('todo', Field('info'))

@action('index')         # the function below is exposed as a GET action
@action.uses('index.html')          # we use the template index.html to render it
def index():
    return dict(web23py='web3py', title = 'Vue3pyj')

#APPS_FOLDER = os.path.normpath(os.path.dirname(os.path.dirname( __file__)))
APPS_FOLDER = os.environ['PY4WEB_APPS_FOLDER']

@action('app_list')
@session_secured
def app_list():
    return dict(app_list = next(os.walk(APPS_FOLDER))[1])


@action('get_fs/<w23p_app>')
@session_secured
def get_fs(w23p_app = None):
    dir_list = {
        'controllers':None,
        'static': {
            'js': None,
            'css': None,
        },
        'modules':None,
        'models':None,
        'views':None,
        'templates':None,
        'vuepy':None,
    }
    app_folder = os.path.join(APPS_FOLDER, w23p_app) if w23p_app else os.path.normpath(request.folder)
    ret = fs2json.dir_to_fs(app_folder, dir_list)
    return ret

@action('write_file', method = 'POST')
@session_secured
def write_file():
    fdata = { k:request.forms.get(k) for k in request.forms}
    fdata['content'] =  request.files['content'].file
    w23p_app = fdata.get('w23p_app', None)
    app_folder = os.path.join(APPS_FOLDER, w23p_app) if w23p_app else os.path.normpath(request.folder)
    ret = fs2json.write_file(fdata, app_folder)
    return dict(ret)

#@action('echo', method = 'POST')
def echo():
    #with open(request.files['q']).file as f:
    #    ret = f.read()

    fdata = { k:request.forms.get(k) for k in request.forms}
    fdata['q_key'] = fdata.get('q')
    return fdata

@action('del_file', method = 'POST')
@session_secured
def del_file():
    app_folder = os.path.dirname(__file__)
    fdata = request.json.get('fdata')
    w23p_app = fdata.get('w23p_app')
    app_folder = os.path.join(APPS_FOLDER, w23p_app) if w23p_app else os.path.normpath(app_folder)
    ret = fs2json.del_file(fdata, app_folder)
    return dict(ret)

@action('try_connect', method = 'GET')
@session_secured
def try_connect():
    return dict(flash='Hi!')


@action('reload')
@session_secured
def reload():
    """reloads installed apps"""
    Reloader.import_apps()
    return dict(flash = 'Done!')
