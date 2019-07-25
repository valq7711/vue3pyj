# Vue3pyj -  webIDE for web3py (aka py4web) 
## Installation
0. Just clone or download and unpack this repo into `web3py/applications/vue3pyj` folder (you can choose another name)
1. Go to http://127.0.0.1:8000/vue3pyj/index and do something awesome!
## Known issues 
- Rapydscript output js-files could be quite large (it bundles all imported modules in a single file), so it's better to set `bottle.BaseRequest.MEMFILE_MAX  = 1024 * 1024 * 2` - this fix should be placed into web3py/core.py at the beginnig, (after `abort = bottle.abort` for example)

