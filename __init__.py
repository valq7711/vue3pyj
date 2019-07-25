import os
try:
    from py4web import action, request, DAL, Field, Session, Cache, user_in
except ImportError:
    from web3py import action, request, DAL, Field, Session, Cache, user_in

from . import fs2json

# define session and cache objects
session = Session(secret='some secret')
cache = Cache(size=1000)

# define database and tables
#db = DAL('sqlite://storage.db', folder=os.path.join(os.path.dirname(__file__), 'databases'))
#db.define_table('todo', Field('info'))

@action('index')         # the function below is exposed as a GET action
@action.uses('index.html')          # we use the template index.html to render it
def index():
    return dict(web23py='web3py', title = 'Vue3pyj')

APPS_FOLDER = os.path.normpath(os.path.dirname(os.path.dirname( __file__)))

@action('app_list')
def app_list():
    return dict(app_list = next(os.walk(APPS_FOLDER))[1])


@action('get_fs/<w23p_app>')
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
def write_file():
    fdata = request.json.get('fdata')
    w23p_app = fdata.get('w23p_app')
    app_folder = os.path.join(APPS_FOLDER, w23p_app) if w23p_app else os.path.normpath(request.folder)
    ret = fs2json.write_file(fdata, app_folder)
    return dict(ret)


@action('del_file', method = 'POST')
def del_file():
    app_folder = os.path.dirname(__file__)
    fdata = request.json.get('fdata')
    w23p_app = fdata.get('w23p_app')
    app_folder = os.path.join(APPS_FOLDER, w23p_app) if w23p_app else os.path.normpath(app_folder)
    ret = fs2json.del_file(fdata, app_folder)
    return dict(ret)




