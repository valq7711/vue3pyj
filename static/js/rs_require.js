(function(){
"use strict";
function ՐՏ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.__base__ = parent;
    child.prototype.constructor = child;
}
function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    if (Set && iterable.constructor === Set) {
        return Array.from(iterable);
    }
    return Object.keys(iterable);
}
function range(start, stop, step) {
    var length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function ՐՏ_eq(a, b) {
    var ՐՏitr1, ՐՏidx1;
    var i;
    if (a === b) {
        return true;
    }
    if (a === void 0 || b === void 0 || a === null || b === null) {
        return false;
    }
    if (a.constructor !== b.constructor) {
        return false;
    }
    if (Array.isArray(a)) {
        if (a.length !== b.length) {
            return false;
        }
        for (i = 0; i < a.length; i++) {
            if (!ՐՏ_eq(a[i], b[i])) {
                return false;
            }
        }
        return true;
    } else if (a.constructor === Object) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        ՐՏitr1 = ՐՏ_Iterable(a);
        for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
            i = ՐՏitr1[ՐՏidx1];
            if (!ՐՏ_eq(a[i], b[i])) {
                return false;
            }
        }
        return true;
    } else if (Set && a.constructor === Set || Map && a.constructor === Map) {
        if (a.size !== b.size) {
            return false;
        }
        for (i of a) {
            if (!b.has(i)) {
                return false;
            }
        }
        return true;
    } else if (a.constructor === Date) {
        return a.getTime() === b.getTime();
    } else if (typeof a.__eq__ === "function") {
        return a.__eq__(b);
    }
    return false;
}

(function(){

    var __name__ = "__main__";

    var RS_REQ, VERSION;
    RS_REQ = "amd";
    VERSION = "1.0.0";
    function log_error(e) {
        if (window.ENV && window.ENV.debug) {
            console.log(e);
        }
    }
    function parse_imports(args) {
        var path;
        path = [];
        args.forEach(function(it) {
            var from_, imports, pack, p, alias, tmp;
            if (typeof it === "string") {
                path.push(it);
            } else {
                it = Object.assign({}, it);
                from_ = /(.*?)\/?$/.exec(it["from"] || "")[1];
                from_ = from_ && from_ + "/";
                delete it["from"];
                if (it["import"] && Array.isArray(it["import"])) {
                    it["import"].forEach(function(p) {
                        p = p.startsWith("/") ? p : from_ + p;
                        path.push(p);
                    });
                } else {
                    imports = it["import"] || it;
                    pack = {};
                    p = "";
                    for (p in imports) {
                        alias = imports[p];
                        if (alias === "") {
                            tmp = p.split("/");
                            alias = tmp[tmp.length-1];
                        } else if (alias === "*") {
                            alias = p;
                        }
                        p = p.startsWith("/") ? p : from_ + p;
                        pack[p] = alias;
                    }
                    path.push(pack);
                }
            }
        });
        return path;
    }
    class Module {
        static __init_class__ (import_amd) {
            this.prototype.import_amd = import_amd;
        }
        constructor (def_args, path) {
            var self = this;
            var raw_deps;
            self.loaded = false;
            self.ok_err = null;
            self.path = path || "";
            self.id = typeof def_args[0] === "string" ? def_args.shift() : "";
            raw_deps = !def_args[0].call ? def_args.shift() : [];
            self.init = def_args[0];
            self.import_amd(raw_deps, self.path).then(self.run.bind(self)).catch(function(e) {
                log_error(e);
                if (self.ok_err) {
                    self.ok_err.err(e);
                    throw e;
                } else {
                    if (window.onerror) {
                        window.onerror(e.message, null, null, null, e);
                    }
                    throw e;
                }
            });
        }
        on_load_script (ok_err) {
            var self = this;
            self.ok_err = ok_err;
            if (self.loaded) {
                ok_err.ok(self.exports);
            }
        }
        run (deps) {
            var self = this;
            var exports, _exports;
            exports = null;
            deps = Array.isArray(deps) ? deps.map(function(dep) {
                if (dep === "exports") {
                    exports = {};
                    return exports;
                }
                return dep;
            }) : [ deps ];
            _exports = self.init.apply(null, deps);
            self.exports = exports || _exports;
            self.loaded = true;
            if (self.ok_err) {
                self.ok_err.ok(self.exports);
            }
        }
    }
    class RS_require {
        constructor () {
            var self = this;
            var CS, base_src, define, rs_req;
            CS = document.currentScript;
            base_src = CS.dataset.main && CS.dataset.main.split("/") || CS.src.split("/");
            self.config = {
                base_url: base_src.slice(0, -1).join("/"),
                map: {},
                path: {}
            };
            self.modules = {};
            self._modules = [];
            define = window.define = self.define.bind(self);
            define.amd = {};
            Module.__init_class__(self.import_amd.bind(self));
            rs_req = function(requester) {
                return {
                    "version": VERSION,
                    "import": function(args) {
                        return self.import_amd(args, requester);
                    },
                    "config": function(cfg) {
                        Object.assign(self.config, cfg);
                    }
                };
            };
            self.mount_module(RS_REQ, rs_req);
            if (CS.dataset.main) {
                self.import_amd(CS.dataset.main, RS_REQ);
            }
        }
        resolve_path (requester, path) {
            var self = this;
            var map_, is_url, url, base, _path;
            map_ = self.config.map.call ? self.config.map : function(k) {
                return self.config.map[k];
            };
            is_url = /^https?:\/{2}/;
            if (is_url.test(path)) {
                path = map_(path, requester) || path;
                return [ path, path ];
            }
            if (path.startsWith("/")) {
                path = map_(path, requester) || path;
                url = window.location.origin + path;
                return [ path, url ];
            }
            base = requester.split("/");
            base = base.slice(0, -1);
            if (path.startsWith("./")) {
                path = base.join("/") + path.slice(1);
            } else if (path.startsWith("../")) {
                while (true) {
                    base = base.slice(0, -1);
                    path = path.slice(3);
                    if (!path.startsWith("../")) {
                        break;
                    }
                }
                base = base.join("/");
                path = (base && base + "/") + path;
            }
            path = map_(path, requester) || path;
            if (is_url.test(path)) {
                return [ path, path ];
            }
            _path = path.split("/");
            if (_path.length >= 2 && (base = self.config.path[_path[0]]) !== (void 0)) {
                return [ path, (base && base + "/") + _path.slice(1).join("/") ];
            }
            base = self.config.base_url;
            return [ path, (base && base + "/") + path ];
        }
        mount_module (as_name, mod) {
            var self = this;
            self.modules[as_name] = {
                exports: mod,
                loaded: true,
                req_chain: []
            };
        }
        define (mod_id, req_list, cb) {
            var self = this;
            var cs;
            function make_mod(path) {
                var mod;
                mod = new Module([ mod_id, req_list, cb ], path);
                self._modules.push(mod);
                return mod;
            }
            if ((cs = document.currentScript) && cs.dataset.rs_req) {
                self.make_mod = make_mod;
            } else {
                make_mod();
            }
        }
        on_load_script (path, ok_err) {
            var self = this;
            var mod;
            if (self.make_mod) {
                mod = self.make_mod(path);
                self.make_mod = null;
                mod.on_load_script(ok_err);
            }
        }
        on_error (name, requester, e) {
            var self = this;
            console.log("error on load: ", name, requester);
        }
        import_amd (import_args, requester) {
            var self = this;
            var as_one_pack, imps, p;
            as_one_pack = false;
            if (typeof import_args === "string") {
                return self._import_amd(import_args, requester);
            } else if (!Array.isArray(import_args)) {
                as_one_pack = true;
                import_args = [ import_args ];
            }
            imps = parse_imports(import_args);
            p = [];
            imps.forEach(function(it) {
                var _pack, path;
                if (typeof it === "string") {
                    if (it === "exports") {
                        p.push(Promise.resolve("exports"));
                    } else {
                        p.push(self._import_amd(it, requester));
                    }
                } else {
                    function pack_maker(it) {
                        return function(_pack) {
                            var pack, i, path;
                            pack = {};
                            i = 0;
                            path = "";
                            for (path in it) {
                                pack[it[path]] = _pack[i];
                                ++i;
                            }
                            return pack;
                        };
                    }
                    _pack = [];
                    path = "";
                    for (path in it) {
                        _pack.push(self._import_amd(path, requester));
                    }
                    p.push(Promise.all(_pack).then(pack_maker(it)).catch(function(e) {
                        var err;
                        log_error(e);
                        if (e instanceof Error) {
                            throw e;
                        } else {
                            if (typeof e === "string") {
                                err = new Error(e);
                            } else {
                                err = new Error("unknown error");
                                Object.assign(err, e);
                            }
                            throw err;
                        }
                    }));
                }
            });
            return as_one_pack ? p[0] : Promise.all(p);
        }
        _import_amd (name, requester) {
            var self = this;
            var src, mod, exp, ok_err, s, p, req_chain;
            if (name === RS_REQ) {
                return Promise.resolve(self.modules[name].exports(requester));
            }
            [name, src] = self.resolve_path(requester, name);
            if (mod = self.modules[name]) {
                if (!mod.loaded) {
                    if (mod.req_chain.find(function(it) {
                        return it === name;
                    })) {
                        throw new Error("Circular dependency: " + name + " and " + requester);
                    }
                    mod.req_chain.push(requester);
                }
                exp = mod.exports;
                return exp instanceof Promise ? exp : Promise.resolve(exp);
            }
            ok_err = {};
            s = document.createElement("script");
            s.src = src + ".js";
            s.async = true;
            s.onerror = function(e) {
                self.on_error(name, requester, e);
                ok_err.err("loading error: " + s.src);
            };
            s.dataset.rs_req = true;
            p = new Promise(function(ok, err) {
                ok_err = {
                    ok: ok,
                    err: err
                };
            });
            s.onload = function() {
                self.on_load_script(name, ok_err);
            };
            document.head.appendChild(s);
            p.then(function(exports) {
                var mod;
                if (mod = self.modules[name]) {
                    mod.loaded = true;
                    mod.exports = exports;
                } else {
                    throw new Error("load_stack seems corrupted");
                }
            }).catch(function(e) {
                log_error(e);
                ok_err.err(e);
            });
            req_chain = requester ? [ requester ] : [];
            self.modules[name] = {
                req_chain: req_chain,
                exports: p,
                loaded: false
            };
            return p;
        }
    }
    new RS_require();
})();
})();
