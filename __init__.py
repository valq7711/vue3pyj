import os, re
from py4web import (HTTP, URL, Translator, __version__, abort, action,
                    redirect, request, response)
from py4web.core import (DAL, Fixture, Reloader, Session, dumps, error_logger,
                         safely)
from pydal.validators import CRYPT
from . import fs2json

__static_version__ = '1.0.3'

session = Session()

class Logged(Fixture):
    def __init__(self, session):
        self.__prerequisites__ = [session]
        self.session = session

    def on_request(self, context):
        user = self.session.get("user")
        if not user or not user.get("id"):
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
    return dict(user=valid, app='v3p')

@action('logout', method='POST')
@action.uses(session)
def logout():
    session['user'] = None
    return dict()

@action('index')
@action.uses('index.html')
def index():
    return dict(web23py='web3py',
                title = 'Vue3pyj',
                static_version ='',
                app_root = URL().rstrip('/')
    )

APPS_FOLDER = os.environ['PY4WEB_APPS_FOLDER']

@action('app_list')
@session_secured
def app_list():
    return dict(app_list = [app for app in next(os.walk(APPS_FOLDER))[1] if not app.startswith('__')])

@action('get_fs/<w23p_app>')
@session_secured
def get_fs(w23p_app = None):
    app_rex  = re.compile('^[a-z_][a-z_0-9]*$', flags = re.I)
    if not (w23p_app and app_rex.match(w23p_app)):
        return dict()

    file_mask = re.compile('(.+?(?!\.min))\.(js|py|css|html|vuepy|pyj)$', flags= re.I)
    dir_list = {
        'controllers':'*',
        'static': {
            'js': {},
            'css': '*',
            'components': '*',
        },
        'modules':'*',
        'models':'*',
        'views':'*',
        'templates':'*',
        'vuepy':'*',
        #'RapydScript':{'src':'*', 'test':'*'},
        #'RapydScript':'*',
    }
    app_folder = os.path.join(APPS_FOLDER, w23p_app)
    ret = fs2json.dir_to_fs(app_folder, dir_list, file_mask)
    return ret

@action('create_dir', method = 'POST')
@session_secured
def create_dir():
    w23p_app = request.json.get('w23p_app')
    dir_path = request.json.get('dir_path')
    if os.path.isabs(dir_path):
        dir_path = os.path.relpath(dir_path, '/')
    dir_path = os.path.join(APPS_FOLDER, w23p_app, dir_path)
    os.mkdir(dir_path)
    return dict(new_dir = dir_path)



@action('write_file', method = 'POST')
@session_secured
def write_file():
    fdata = { k:request.forms.get(k) for k in request.forms}
    fdata['content'] =  request.files['content'].file
    w23p_app = fdata.get('w23p_app', None)
    app_folder = os.path.join(APPS_FOLDER, w23p_app) if w23p_app else os.path.normpath(request.folder)
    ret = fs2json.write_file(fdata, app_folder)
    return dict(ret)

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
@action('reload/<name>')
@session_secured
def reload(name = None):
    """reloads installed apps"""
    Reloader.import_app(name) if name else Reloader.import_apps()
    return dict(flash = 'Done!')

@action('css_themes')
def css_themes():
    app_folder = os.path.dirname(__file__)
    pth = os.path
    css_dir = pth.join(app_folder, 'static/js/codemirror/theme')
    ret = []
    for nm in os.listdir(css_dir):
        if nm.endswith('.css') and pth.isfile(pth.join(css_dir, nm)):
            ret.append(nm[:-4])
    return dict(themes = ret)

@action('compile_py', method = 'POST')
@session_secured
def compile_py():
    fp = request.json.get('fp')
    w23p_app = request.json.get('w23p_app')
    code = request.json.get('code')

    fp = fp[0] == '/' and fp[1:] or fp
    fp = os.path.join(APPS_FOLDER, w23p_app, fp)
    if not os.path.isfile(fp):
        #raise HTTP(404, web2py_error =  '`%s` not found' % fp)
        abort(404, '`%s` not found' % fp)
    if not fp.endswith('.py'):
        raise abort(400, '`%s` is not python file' % fp)

    code_raw = code if code is not None else fs2json.safe_read(fp)
    code = code_raw.rstrip().replace('\r\n', '\n') + '\n'
    highlight = None
    import _ast
    error = None
    try:
        compile(code, fp, "exec", _ast.PyCF_ONLY_AST)
    except Exception as e:
        # offset calculation is only used for textarea (start/stop)
        start = sum([len(line) + 1 for l, line
                     in enumerate(code_raw.split("\n"))
                     if l < e.lineno - 1])
        if e.text and e.offset:
            offset = e.offset - (len(e.text) - len(
                e.text.splitlines()[-1]))
        else:
            offset = 0
        highlight = {'start': start, 'end': start +
                     offset + 1, 'lineno': e.lineno, 'offset': offset}
        try:
            ex_name = e.__class__.__name__
        except:
            ex_name = 'unknown exception!'
        error = dict(line = e.lineno, col = offset, message = ex_name)
    return dict(err = error )

