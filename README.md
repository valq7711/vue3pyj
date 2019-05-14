# Vue3pyj -  webIDE for web3py 
## Known issues 
- Rapydscript output js-files could be quite large (it bundle all imported modules in a single file), so it's better to set `bottle.BaseRequest.MEMFILE_MAX  = 1024 * 1024 * 2`
