define(["vue"],function(Vue){
var exports = {};
(function(){
"use strict";
var ՐՏ_1, ՐՏ_2, ՐՏ_5, ՐՏ_6, ՐՏ_7;
function ՐՏ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.__base__ = parent;
    child.prototype.constructor = child;
}
function ՐՏ_in(val, arr) {
    if (typeof arr.indexOf === "function") {
        return arr.indexOf(val) !== -1;
    } else if (typeof arr.has === "function") {
        return arr.has(val);
    }
    return arr.hasOwnProperty(val);
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
function ՐՏ_type(obj) {
    return obj && obj.constructor && obj.constructor.name ? obj.constructor.name : Object.prototype.toString.call(obj).slice(8, -1);
}
function ՐՏ_eq(a, b) {
    var ՐՏitr8, ՐՏidx8;
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
        ՐՏitr8 = ՐՏ_Iterable(a);
        for (ՐՏidx8 = 0; ՐՏidx8 < ՐՏitr8.length; ՐՏidx8++) {
            i = ՐՏitr8[ՐՏidx8];
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
var ՐՏ_modules = {};
ՐՏ_modules["asset.rs_vue"] = {};
ՐՏ_modules["asset.store2"] = {};
ՐՏ_modules["asset.common"] = {};
ՐՏ_modules["asset"] = {};
ՐՏ_modules["api.shop"] = {};
ՐՏ_modules["api"] = {};
ՐՏ_modules["store.cart"] = {};
ՐՏ_modules["store.products"] = {};
ՐՏ_modules["store.root"] = {};
ՐՏ_modules["store"] = {};
ՐՏ_modules["components.shopping_cart"] = {};
ՐՏ_modules["components.prod_list"] = {};
ՐՏ_modules["components"] = {};

(function(){
    var __name__ = "asset.rs_vue";
    function print_log() {
        var args = [].slice.call(arguments, 0);
        if (window.ENV && window.ENV.debug) {
            console.log.apply(console, arguments);
        }
    }
    function unpack_name_fun_opt(f_reg_as) {
        function unpacker(reg_as, name_fun_opt, opt) {
            var self, arg1type, name;
            if (!name_fun_opt) {
                throw new Error("Attempt to call V_Collector @decorator with empty `()`");
            }
            self = this;
            arg1type = ՐՏ_type(name_fun_opt);
            if (arg1type.startsWith("Fun")) {
                name = name_fun_opt.__name__ || name_fun_opt.name;
                return f_reg_as.call(self, reg_as, name, name_fun_opt);
            } else {
                return function(f) {
                    var name;
                    if (arg1type.startsWith("Str")) {
                        name = name_fun_opt;
                        if (opt) {
                            opt.handler = f;
                        } else {
                            opt = f;
                        }
                    } else {
                        opt = name_fun_opt;
                        name = f.__name__ || f.name;
                        opt.handler = f;
                    }
                    return f_reg_as.call(self, reg_as, name, opt);
                };
            }
        }
        return unpacker;
    }
    var V_collector = (ՐՏ_1 = class V_collector {
        constructor () {
            var self = this;
            self._methods = null;
            self._computed = null;
            self._watch = null;
            self._filters = null;
            self._directives = null;
            self._getters = null;
            self._mutations = null;
            self._actions = null;
        }
        _reg_as (reg_as, name, fun_opt) {
            var self = this;
            print_log("reg " + reg_as + " " + name + " self: ", self);
            if (!self[reg_as]) {
                self[reg_as] = {};
            }
            self[reg_as][name] = fun_opt;
            return fun_opt.handler ? fun_opt.handler : fun_opt;
        }
        meth (name_or_fun) {
            var self = this;
            return self._reg_as("_methods", name_or_fun);
        }
        computed (name_or_fun) {
            var self = this;
            return self._reg_as("_computed", name_or_fun);
        }
        filter (name_or_fun) {
            var self = this;
            return self._reg_as("_filters", name_or_fun);
        }
        directive (name_or_fun) {
            var self = this;
            return self._reg_as("_directives", name_or_fun);
        }
        watch (name_or_fun, opt) {
            var self = this;
            return self._reg_as("_watch", name_or_fun, opt);
        }
        getter (name_or_fun) {
            var self = this;
            return self._reg_as("_getters", name_or_fun);
        }
        mutation (name_or_fun) {
            var self = this;
            return self._reg_as("_mutations", name_or_fun);
        }
        action (name_or_fun) {
            var self = this;
            return self._reg_as("_actions", name_or_fun);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_1.prototype, {
            _reg_as: {
                enumerable: false, 
                writable: true, 
                value: unpack_name_fun_opt(ՐՏ_1.prototype._reg_as)
            }
        });
        ;
    })(), ՐՏ_1);
    class RS_vue {
        constructor (v_collector) {
            var ՐՏitr1, ՐՏidx1, ՐՏitr2, ՐՏidx2, ՐՏitr3, ՐՏidx3;
            var self = this;
            var it, sym, _name, k, self_keys, v_spec, tmp;
            self.props = {};
            self.data = self._init_data;
            self.delimiters = [ "{{", "}}" ];
            if (v_collector) {
                self.methods = v_collector._methods;
                self.computed = v_collector._computed;
                self.directives = v_collector._directives;
                self.filters = v_collector._filters;
                self.watch = v_collector._watch;
                ՐՏitr1 = ՐՏ_Iterable([ [ "~", "_mutations" ], [ "*", "_actions" ] ]);
                for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
                    it = ՐՏitr1[ՐՏidx1];
                    [sym, _name] = it;
                    if (v_collector[_name]) {
                        if (!self.map_store) {
                            self.map_store = {};
                        }
                        ՐՏitr2 = ՐՏ_Iterable(v_collector[_name]);
                        for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
                            k = ՐՏitr2[ՐՏidx2];
                            self.map_store[k] = sym;
                            self.methods[k] = v_collector[_name][k];
                        }
                    }
                }
            }
            self_keys = Object.keys(self);
            ՐՏitr3 = ՐՏ_Iterable([ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "activated", "deactivated", "beforeDestroy", "destroyed" ]);
            for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
                v_spec = ՐՏitr3[ՐՏidx3];
                if (!(ՐՏ_in(v_spec, self_keys)) && (tmp = self.__proto__[v_spec])) {
                    self[v_spec] = tmp;
                }
            }
        }
        _init_data () {
            var self = this;
            throw ReferenceError("Not implemented");
        }
    }
    ՐՏ_modules["asset.rs_vue"]["print_log"] = print_log;

    ՐՏ_modules["asset.rs_vue"]["unpack_name_fun_opt"] = unpack_name_fun_opt;

    ՐՏ_modules["asset.rs_vue"]["V_collector"] = V_collector;

    ՐՏ_modules["asset.rs_vue"]["RS_vue"] = RS_vue;
})();

(function(){
    var __name__ = "asset.store2";
    function print_log() {
        var args = [].slice.call(arguments, 0);
        if (window.ENV && window.ENV.debug) {
            console.log.apply(console, arguments);
        }
    }
    function make_prop_chain(path, prefix, splitter) {
        prefix = prefix || "";
        if (!Array.isArray(path)) {
            splitter = splitter || ".";
            path = path.split(splitter).filter(function(v) {
                return v;
            });
        }
        return path.reduce(function(p, v) {
            return p + prefix + "." + v;
        }, "");
    }
    function make_prop_getter(prop_chain) {
        var me, ret;
        me = make_prop_getter;
        if (!(ret = me._memo[prop_chain])) {
            ret = me._memo[prop_chain] = new Function("obj", "{return obj" + prop_chain + "}");
        }
        return ret;
    }
    make_prop_getter._memo = {};
    function split_modgetter_rest(store, path) {
        var self, mod_rest, modgetter;
        self = store;
        mod_rest = /(^(\/[\w$]+)+)((\.[^.]+)+)$/.exec(path);
        if (!mod_rest) {
            return [ function() {
                return self;
            }, path ];
        } else {
            modgetter = make_prop_getter(make_prop_chain(mod_rest[1].slice(1), ".modules", "/"));
        }
        return [ modgetter, mod_rest[3].slice(1) ];
    }
    class RS_state_api {
        mount (istate, vgetters_node, path) {
            var ՐՏitr4, ՐՏidx4;
            var self = this;
            var name;
            self.path = path;
            self.istate = istate;
            self.vgetters = vgetters_node;
            istate.set(self.init_state);
            if (self.raw_getters) {
                ՐՏitr4 = ՐՏ_Iterable(self.raw_getters);
                for (ՐՏidx4 = 0; ՐՏidx4 < ՐՏitr4.length; ՐՏidx4++) {
                    name = ՐՏitr4[ՐՏidx4];
                    self.unwatchers[name] = self.mount_getter(name, self.raw_getters[name]);
                }
            }
        }
        constructor (vc, state, root_or_vue) {
            var self = this;
            var vm, istate, vgetters;
            self.path = null;
            self.istate = null;
            self.vgetters = null;
            self.init_state = state;
            self.raw_getters = vc._getters;
            self.mutations = vc._mutations;
            self.computed = {};
            self.unwatchers = {};
            if (root_or_vue instanceof RS_state_api) {
                self.root = root_or_vue;
                vm = self.vm = self.root.vm;
            } else {
                self.root = null;
                vm = self.vm = new root_or_vue({
                    data: {
                        state: null,
                        getters: {}
                    }
                });
                istate = {
                    get: function() {
                        return vm.state;
                    },
                    set: function(v) {
                        vm.state = v;
                    }
                };
                vgetters = vm.getters;
                self.mount(istate, vgetters, []);
            }
        }
        get state () {
            var self = this;
            return self.istate.get();
        }
        mount_getter (name, getter, nodes) {
            var self = this;
            var vm, vgetters_node, computed, get_state, _getter, raw_get_cb, get_cb, is_cached, opt, watcher;
            vm = self.vm;
            vgetters_node = nodes ? nodes.vgetters : self.vgetters;
            computed = nodes ? nodes.computed : self.computed;
            get_state = self.istate.get;
            _getter = {
                value: null
            };
            if (!(getter instanceof Function)) {
                raw_get_cb = getter.get;
                if (getter.set) {
                    _getter.set = getter.set;
                }
            } else {
                raw_get_cb = getter;
            }
            get_cb = function() {
                return raw_get_cb.call(self, get_state(), computed, vm.state, self.root && self.root.computed);
            };
            is_cached = false;
            _getter.get = function() {
                if (!is_cached) {
                    _getter.value = get_cb();
                    is_cached = true;
                }
                return _getter.value;
            };
            vm.$set(vgetters_node, name, _getter);
            _getter = vgetters_node[name];
            opt = {
                enumerable: true,
                configurable: true,
                get: _getter.get
            };
            Object.defineProperty(computed, name, opt);
            watcher = function(v) {
                _getter.value = v;
            };
            return vm.$watch(get_cb, watcher);
        }
        commit (mutation) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var h;
            print_log("mutation: ", mutation);
            print_log("\tpayload: ", payload);
            if (h = self.mutations[mutation]) {
                return h.apply(self, payload);
            } else {
                throw new Error("unknown mutation: " + mutation);
            }
        }
        $del () {
            var self = this;
            self.vm.$delete.apply(self.vm, arguments);
        }
        $set () {
            var self = this;
            self.vm.$set.apply(self.vm, arguments);
        }
        check_spath (path, return_prop) {
            var self = this;
            return self._check_path(self.state, path, return_prop);
        }
        check_gpath (path, return_prop) {
            var self = this;
            return self._check_path(self.vgetters, path, return_prop);
        }
        _check_path (obj, path, return_prop) {
            var self = this;
            var ret, last_prnt;
            path = path.split(".");
            if (path.length === 1) {
                ret = obj.hasOwnProperty(path[0]);
                if (ret && return_prop) {
                    ret = obj;
                }
                return ret;
            }
            try {
                last_prnt = path.slice(0, -1).reduce(function(s, name) {
                    return s[name];
                }, obj);
            } catch (ՐՏ_Exception) {
                if (ՐՏ_Exception instanceof TypeError) {
                    return false;
                } else {
                    throw ՐՏ_Exception;
                }
            }
            ret = last_prnt.hasOwnProperty(path[path.length-1]);
            if (ret && return_prop) {
                ret = last_prnt[path[path.length-1]];
            }
            return ret;
        }
        _get (path) {
            var self = this;
            return make_prop_getter(make_prop_chain(path))(self.state);
        }
        get (path) {
            var self = this;
            if (self.computed.hasOwnProperty(path)) {
                return self.computed[path];
            } else {
                return self._get(path);
            }
        }
        set_mutation (h, as_name) {
            var self = this;
            as_name = as_name || h.__name__ || h.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of new mutation: " + h);
            }
            if (ՐՏ_in(as_name, self.mutations)) {
            } else if (self.hasOwnProperty(as_name)) {
                throw new Error("Bad mutation name: " + as_name);
            }
            self.mutations[as_name] = self[as_name] = h;
        }
    }
    class RS_store {
        constructor () {
            var self = this;
            if (!self.vue) {
                throw ReferenceError("You should first call Vue.use(Your_Store)");
            }
            self.dispatch_bound = self.dispatch.bind(self);
            self.commit_bound = self.commit.bind(self);
            self.$bus = {
                $on: function(e, cb) {
                    return self.$on(e, cb);
                },
                $off: function(e, cb) {
                    self.$off(e, cb);
                },
                $emit: function() {
                    var args = [].slice.call(arguments, 0);
                    self.$emit(...args);
                }
            };
        }
        mount_module (mod_obj, path, mod_name, vgetters_node) {
            var self = this;
            var path_arr, as_name, state_api, path_node, rpath_node, parent_node_getter, root_api, istate;
            path_arr = path.split(".");
            if (path_arr.length === 1) {
                path = "";
                as_name = path_arr[0];
            } else {
                as_name = path_arr[path_arr.length-1];
                path = path_arr.slice(0, -1).join(".");
            }
            state_api = self.state_api;
            as_name = as_name || mod_obj.__name__ || mod_obj.constructor && mod_obj.constructor.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of module: " + mod_obj);
            }
            if (path && !(path_node = state_api.check_spath(path, true))) {
                throw new Error("can`t mount module under path `" + path + "`, it doesn`t exist");
            }
            path_node = path_node || state_api.vm.state;
            if (!self.modules) {
                self.modules = {};
            }
            state_api.$set(path_node, as_name, null);
            rpath_node = state_api.path.concat(path_arr.slice(0, -1));
            parent_node_getter = make_prop_getter(make_prop_chain(rpath_node));
            root_api = (self.root || self).state_api;
            istate = {
                get: function() {
                    return parent_node_getter(root_api.state)[as_name];
                },
                set: function(v) {
                    parent_node_getter(root_api.state)[as_name] = v;
                }
            };
            vgetters_node = vgetters_node || state_api.vgetters;
            mod_name = mod_name || as_name;
            if (vgetters_node.hasOwnProperty(mod_name)) {
                throw new Error("can`t mount module to vgetters under name `" + mod_name + "`,  name already exists");
            }
            state_api.$set(vgetters_node, mod_name, {});
            mod_obj.mount_state(istate, vgetters_node[mod_name], rpath_node.concat(as_name));
            self.modules[mod_name] = mod_obj;
        }
        mount_state () {
            var self = this;
            var args = [].slice.call(arguments, 0);
            var s;
            (s = self.state_api).mount.apply(s, args);
        }
        _get (path) {
            var self = this;
            var mod, rest;
            [mod, rest] = split_modgetter_rest(self, path);
            return mod(self).state_api._get(rest);
        }
        get (path) {
            var self = this;
            var mod, rest;
            [mod, rest] = split_modgetter_rest(self, path);
            return mod(self).state_api.get(rest);
        }
        getter_factory (path) {
            var self = this;
            var argtype, modgetter, rest, getter;
            argtype = ՐՏ_type(path);
            if (argtype[0] === "S") {
                [modgetter, rest] = split_modgetter_rest(self, path);
            } else if (argtype[0] === "F") {
                modgetter = arguments[0];
                rest = arguments[1];
            } else {
                throw new Error("Wrong args: ", arguments);
            }
            getter = make_prop_getter(make_prop_chain(rest));
            return function() {
                var mod;
                mod = modgetter(self);
                if (mod.state_api.vgetters.hasOwnProperty(rest)) {
                    return mod.state_api.vgetters[rest];
                } else {
                    return function() {
                        return getter(mod.state_api.state);
                    };
                }
            };
        }
        handler_factory (path) {
            var self = this;
            var modgetter, rest, mutation, action;
            [modgetter, rest] = split_modgetter_rest(self, path);
            if (rest.endsWith("~")) {
                mutation = rest.slice(0, -1);
                return function() {
                    var args = [].slice.call(arguments, 0);
                    modgetter(self).state_api.commit(mutation, ...args);
                };
            } else if (rest.endsWith("*")) {
                action = rest.slice(0, -1);
                return function() {
                    var args = [].slice.call(arguments, 0);
                    return modgetter(self)._dispatch(action, ...args);
                };
            } else {
                return self.getter_factory(modgetter, rest);
            }
        }
        $on (e, cb) {
            var self = this;
            self.state_api.vm.$on(e, cb);
            return function() {
                self.$off(e, cb);
            };
        }
        $off (e, cb) {
            var self = this;
            self.state_api.vm.$off(e, cb);
        }
        $emit () {
            var self = this;
            self.state_api.vm.$emit.apply(self.state_api.vm, arguments);
        }
        commit (mutation) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var modgetter;
            [modgetter, mutation] = split_modgetter_rest(self, mutation);
            return modgetter(self).state_api.commit(mutation, ...payload);
        }
        _dispatch (action) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var p;
            print_log("action: ", action);
            print_log("\tpayload: ", payload);
            if (!self.actions || !(ՐՏ_in(action, self.actions))) {
                throw new Error("unknown action: " + action);
            }
            p = self[action].apply(self, payload);
            if (!(p instanceof Promise)) {
                p = Promise.resolve(p);
            }
            return p;
        }
        dispatch (action) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var modgetter, mod;
            [modgetter, action] = split_modgetter_rest(self, action);
            mod = modgetter(self);
            return mod._dispatch(action, ...payload);
        }
        set_action (h, as_name) {
            var self = this;
            as_name = as_name || h.__name__ || h.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of new action: " + h);
            }
            if (ՐՏ_in(as_name, self.actions)) {
            } else if (self.hasOwnProperty(as_name)) {
                throw new Error("Bad action name: " + as_name);
            }
            self.actions[as_name] = self[as_name] = h;
        }
        static before_create () {
            var ՐՏitr5, ՐՏidx5, ՐՏitr7, ՐՏidx7;
            var map_store, is_mutation_re, is_action_re, $opts, $map_opts, self, injectors, opt, k, map_to, map_from, map_to_split, map_to_meth, store_meth, modgetter, rest, store_mod, handler, action, mutation;
            map_store = "map_store";
            is_mutation_re = /(.+)~$/;
            is_action_re = /(.+)\*$/;
            $opts = this.$options;
            $map_opts = $opts[map_store] || $opts.propsData && $opts.propsData[map_store];
            self = $opts.store || $opts.parent && $opts.parent.$store;
            if (self) {
                this.$store = self;
            }
            if (!$map_opts) {
                return;
            }
            if (!self) {
                throw new Error("Store is not found");
            }
            injectors = {
                "*": function(f) {
                    return function() {
                        f.call(this, self.dispatch_bound, ...arguments);
                    };
                },
                "~": function(f) {
                    return function() {
                        f.call(this, self.commit_bound, ...arguments);
                    };
                }
            };
            ՐՏitr5 = ՐՏ_Iterable([ "methods", "computed" ]);
            for (ՐՏidx5 = 0; ՐՏidx5 < ՐՏitr5.length; ՐՏidx5++) {
                opt = ՐՏitr5[ՐՏidx5];
                $opts[opt] = Object.assign({}, $opts[opt]);
            }
            if (Array.isArray($map_opts)) {
                $map_opts = (function() {
                    var ՐՏidx6, ՐՏitr6 = ՐՏ_Iterable($map_opts), ՐՏres = {}, k;
                    for (ՐՏidx6 = 0; ՐՏidx6 < ՐՏitr6.length; ՐՏidx6++) {
                        k = ՐՏitr6[ՐՏidx6];
                        ՐՏres[k] = k;
                    }
                    return ՐՏres;
                })();
            }
            ՐՏitr7 = ՐՏ_Iterable($map_opts);
            for (ՐՏidx7 = 0; ՐՏidx7 < ՐՏitr7.length; ՐՏidx7++) {
                map_to = ՐՏitr7[ՐՏidx7];
                map_from = $map_opts[map_to];
                if (ՐՏ_in(map_from, [ "*", "~" ])) {
                    if (!$opts.methods[map_to]) {
                        throw ReferenceError("Can`t map " + map_from + " to non-existing method: " + map_to);
                    }
                    $opts.methods[map_to] = injectors[map_from]($opts.methods[map_to]);
                } else if (ՐՏ_type(map_from).startsWith("Fun") && (map_to_split = /(.+?)(\*|~)$/.exec(map_to))) {
                    map_to_meth = map_to_split[1];
                    store_meth = map_to_split[2];
                    $opts.methods[map_to_meth] = injectors[store_meth](map_from);
                } else {
                    [modgetter, rest] = split_modgetter_rest(self, map_from);
                    store_mod = modgetter(self);
                    if (rest === "$bus") {
                        $opts["computed"][map_to] = function() {
                            return modgetter(self).$bus;
                        };
                        continue;
                    }
                    handler = self.handler_factory(map_from);
                    if (action = is_action_re.exec(rest)) {
                        action = action[1];
                        if (!(ՐՏ_in(action, store_mod.actions))) {
                            throw ReferenceError("unknown action in `map_store`: " + map_from);
                        }
                        if ($opts["methods"][map_to]) {
                            $opts["methods"][map_to] = function(h, store_h) {
                                return function() {
                                    return h.call(this, store_h, ...arguments);
                                };
                            }($opts["methods"][map_to], handler);
                        } else {
                            $opts["methods"][map_to] = handler;
                        }
                    } else if (mutation = is_mutation_re.exec(rest)) {
                        mutation = mutation[1];
                        if (!(ՐՏ_in(mutation, store_mod.state_api.mutations))) {
                            throw ReferenceError("unknown mutation in `map_store`: " + map_from);
                        }
                        if ($opts["methods"][map_to]) {
                            $opts["methods"][map_to] = function(h, store_h) {
                                return function() {
                                    return h.call(this, store_h, ...arguments);
                                };
                            }($opts["methods"][map_to], handler);
                        } else {
                            $opts["methods"][map_to] = handler;
                        }
                    } else if (store_mod.state_api.check_gpath(rest) || store_mod.state_api.check_spath(rest)) {
                        $opts["computed"][map_to] = handler();
                    } else {
                        throw ReferenceError("Can`t map `" + map_from + "` to `" + map_to + "`");
                    }
                }
            }
        }
        static beforeDestroy () {
            var self;
            self = this;
            if (self.bus_cleanup && self.bus_cleanup.length) {
                print_log("bus_cleanup", self.bus_cleanup);
                self.bus_cleanup.forEach(function(off) {
                    off();
                });
            }
        }
        static install (Vue, opt) {
            RS_store.prototype.vue = Vue;
            Vue.mixin({
                beforeCreate: RS_store.before_create,
                beforeDestroy: RS_store.beforeDestroy
            });
        }
    }
    ՐՏ_modules["asset.store2"]["print_log"] = print_log;

    ՐՏ_modules["asset.store2"]["make_prop_chain"] = make_prop_chain;

    ՐՏ_modules["asset.store2"]["make_prop_getter"] = make_prop_getter;

    ՐՏ_modules["asset.store2"]["split_modgetter_rest"] = split_modgetter_rest;

    ՐՏ_modules["asset.store2"]["RS_state_api"] = RS_state_api;

    ՐՏ_modules["asset.store2"]["RS_store"] = RS_store;
})();

(function(){
    var __name__ = "asset.common";
    class Merge_call {
        set_key (a) {
            var self = this;
            self.cmd = "set_key";
            self.args = a;
            return self;
        }
        merge (a) {
            var self = this;
            self.cmd = "merge";
            self.args = a;
            return self;
        }
    }
    function asyncer(fun) {
        var merge_call, ret;
        merge_call = {};
        function wrap(ctx) {
            function pret(ok, err) {
                function inner(f, opt) {
                    var ret_v, ret_throw, merge_key, v, p;
                    if (opt) {
                        ret_v = opt.ret_v;
                        ret_throw = opt.ret_throw;
                        merge_key = opt.merge_key;
                    }
                    function _err(e, merge_key) {
                        err(e);
                        if (merge_key) {
                            merge_call[merge_key].map(function(cb) {
                                cb.err(e);
                            });
                            delete merge_call[merge_key];
                        }
                    }
                    if (ret_throw) {
                        v = ret_throw;
                    } else {
                        try {
                            f = f || fun.apply(ctx.self, ctx.args);
                            v = f.next(ret_v);
                        } catch (ՐՏ_Exception) {
                            var e = ՐՏ_Exception;
                            _err(e, merge_key);
                            return;
                        }
                    }
                    if (v.value instanceof Merge_call) {
                        if (v.value.cmd === "get_keys") {
                            Promise.resolve(Object.keys(merge_call)).then(function(ret_v) {
                                inner(f, {
                                    ret_v: ret_v,
                                    merge_key: merge_key
                                });
                            });
                        } else if (v.value.cmd === "merge") {
                            if (p = merge_call[v.value.args]) {
                                p.push({
                                    ok: function(v) {
                                        ok(v);
                                    },
                                    err: function(v) {
                                        err(v);
                                    }
                                });
                                return;
                            } else {
                                merge_key = v.value.args;
                                merge_call[merge_key] = [];
                                Promise.resolve(null).then(function(ret_v) {
                                    inner(f, {
                                        ret_v: ret_v,
                                        merge_key: merge_key
                                    });
                                });
                            }
                        } else {
                            Promise.resolve(null).then(function(ret_v) {
                                inner(f, {
                                    ret_v: ret_v,
                                    merge_key: merge_key
                                });
                            });
                        }
                    } else if (!v.done) {
                        if (v.value instanceof Promise) {
                            v.value.then(function(ret_v) {
                                inner(f, {
                                    ret_v: ret_v,
                                    merge_key: merge_key
                                });
                            }, function(e) {
                                var v;
                                try {
                                    v = f.throw(e);
                                } catch (ՐՏ_Exception) {
                                    var e = ՐՏ_Exception;
                                    _err(e, merge_key);
                                    return;
                                }
                                inner(f, {
                                    ret_throw: v,
                                    merge_key: merge_key
                                });
                            });
                        } else {
                            Promise.resolve(v.value).then(function(ret_v) {
                                inner(f, {
                                    ret_v: ret_v,
                                    merge_key: merge_key
                                });
                            });
                        }
                    } else {
                        ok(v.value);
                        if (merge_key) {
                            merge_call[merge_key].map(function(cb) {
                                cb.ok(v.value);
                            });
                            delete merge_call[merge_key];
                        }
                    }
                }
                inner();
            }
            return pret;
        }
        ret = function() {
            var ctx, p;
            ctx = {
                self: this,
                args: arguments
            };
            p = new Promise(wrap(ctx));
            return p;
        };
        ret.__name__ = fun.__name__ || fun.name;
        return ret;
    }
    function upload_text() {
        function prom(ok, err) {
            var el, ret;
            el = document.createElement("input");
            el.setAttribute("type", "file");
            el.setAttribute("multiple", true);
            el.style.display = "none";
            document.body.appendChild(el);
            ret = [];
            el.onchange = function() {
                var done, i, fr;
                done = el.files.length;
                for (i = 0; i < el.files.length; i++) {
                    fr = new FileReader();
                    fr._filename_ = el.files[i].name;
                    fr.onloadend = function(s) {
                        ret.push({
                            name: s.target._filename_,
                            value: s.target.result
                        });
                        --done;
                        if (done === 0) {
                            ok(ret);
                        }
                    };
                    fr.readAsText(el.files[i]);
                }
            };
            el.click();
            document.body.removeChild(el);
        }
        return new Promise(prom);
    }
    function download(s, filename, mime) {
        var blob, el_data, el;
        blob = new Blob([ s ], {
            type: mime || "text/plain;charset=utf-8;"
        });
        el_data = window.URL.createObjectURL(blob);
        el = document.createElement("a");
        el.setAttribute("href", el_data);
        el.setAttribute("download", filename);
        el.style.display = "none";
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
        window.URL.revokeObjectURL(blob);
    }
    function SF(text, props) {
        function replacer(str_, p) {
            var t, p_chain;
            if (t = /^("|')(.+?)("|')$/.exec(p)) {
                return props[t[2]];
            }
            if ((p_chain = p.split(".")) && p_chain.length > 1) {
                return p_chain.reduce(function(it, p) {
                    return it[p];
                }, props);
            }
            return props[p];
        }
        return text.replace(/\$\{ *(.+?) *\}/g, replacer);
    }
    function make_drag_listener(catcher, debounce) {
        var ctx;
        ctx = {
            catcher: catcher,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vc: null,
            debounce: debounce || 50,
            move_done: null
        };
        function mousemove(e) {
            function process_move() {
                ctx.dx = e.clientX - ctx.x0;
                ctx.dy = e.clientY - ctx.y0;
                ctx.catcher.call(null, "drag_move", e, {
                    dx: ctx.dx,
                    dy: ctx.dy,
                    vc: ctx.vc
                });
                ctx.move_done = true;
            }
            e.stopPropagation();
            e.preventDefault();
            if (ctx.move_done === null) {
                process_move();
            } else if (ctx.move_done) {
                ctx.move_done = false;
                setTimeout(process_move, ctx.debounce);
            }
        }
        function mouseup(e) {
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
            e.stopPropagation();
            e.preventDefault();
            ctx.catcher.call(null, "drag_stop", e, {
                dx: ctx.dx,
                dy: ctx.dy,
                vc: ctx.vc
            });
        }
        function mousedn(e) {
            ctx.vc = this;
            ctx.x0 = e.clientX;
            ctx.y0 = e.clientY;
            if (!ctx.catcher) {
                ctx.catcher = function(what, e, args) {
                    ctx.vc.$emit(what, e, args);
                };
            }
            document.addEventListener("mousemove", mousemove, false);
            document.addEventListener("mouseup", mouseup, false);
            e.stopPropagation();
            e.preventDefault();
            ctx.catcher.call(null, "drag_start", e, {
                x0: ctx.x0,
                y0: ctx.y0,
                vc: ctx.vc
            });
        }
        return mousedn;
    }
    function blur_click_listener(el, cb) {
        var ret, blur;
        ret = {};
        blur = false;
        function doc_click_cap(e) {
            blur = true;
            setTimeout(function() {
                blur && cb(e);
            }, 0);
        }
        function el_click(e) {
            blur = false;
        }
        ret.start = function() {
            document.addEventListener("click", doc_click_cap, true);
            el.addEventListener("click", el_click, true);
        };
        ret.stop = function() {
            document.removeEventListener("click", doc_click_cap, true);
            el.removeEventListener("click", el_click, true);
        };
        return ret;
    }
    ՐՏ_modules["asset.common"]["Merge_call"] = Merge_call;

    ՐՏ_modules["asset.common"]["asyncer"] = asyncer;

    ՐՏ_modules["asset.common"]["upload_text"] = upload_text;

    ՐՏ_modules["asset.common"]["download"] = download;

    ՐՏ_modules["asset.common"]["SF"] = SF;

    ՐՏ_modules["asset.common"]["make_drag_listener"] = make_drag_listener;

    ՐՏ_modules["asset.common"]["blur_click_listener"] = blur_click_listener;
})();

(function(){
    var __name__ = "asset";

    ՐՏ_modules["asset"]["rs_vue"] = ՐՏ_modules["asset.rs_vue"];

    ՐՏ_modules["asset"]["store2"] = ՐՏ_modules["asset.store2"];

    ՐՏ_modules["asset"]["common"] = ՐՏ_modules["asset.common"];
    function q() {
    }
    ՐՏ_modules["asset"]["q"] = q;
})();

(function(){
    var __name__ = "api.shop";
    var PRODUCTS;
    PRODUCTS = [ {
        "id": 1,
        "title": "iPad 4 Mini",
        "price": 500.01,
        "inventory": 2
    }, {
        "id": 2,
        "title": "H&M T-Shirt White",
        "price": 10.99,
        "inventory": 10
    }, {
        "id": 3,
        "title": "Charli XCX - Sucker CD",
        "price": 19.99,
        "inventory": 5
    } ];
    class Shop_err extends Error {
        constructor (code, msg) {
            super();
            var self = this;
            self.code = code;
            self.message = msg;
        }
    }
    function get_products() {
        function call(ok, err) {
            setTimeout(function() {
                ok(PRODUCTS);
            }, 100);
        }
        return new Promise(call);
    }
    function buy_products(products) {
        function call(ok, err) {
            setTimeout(function() {
                Math.random() > .5 || navigator.userAgent.indexOf("PhantomJS") > -1 ? ok() : err(new Shop_err(0, "Out of service"));
            }, 100);
        }
        return new Promise(call);
    }
    ՐՏ_modules["api.shop"]["PRODUCTS"] = PRODUCTS;

    ՐՏ_modules["api.shop"]["Shop_err"] = Shop_err;

    ՐՏ_modules["api.shop"]["get_products"] = get_products;

    ՐՏ_modules["api.shop"]["buy_products"] = buy_products;
})();

(function(){
    var __name__ = "api";

    ՐՏ_modules["api"]["shop"] = ՐՏ_modules["api.shop"];
})();

(function(){
    var __name__ = "store.cart";
    var Shop_err, vc;
    var shop = ՐՏ_modules["api.shop"];
    
    var asyncer = ՐՏ_modules["asset.common"].asyncer;
    
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    
    var RS_store = ՐՏ_modules["asset.store2"].RS_store;
    var RS_state_api = ՐՏ_modules["asset.store2"].RS_state_api;
    
    Shop_err = shop.Shop_err;
    function default_state() {
        var ret;
        ret = {
            items: [],
            checkout: {
                status: null,
                msg: ""
            }
        };
        return ret;
    }
    vc = new V_collector();
    var State = (ՐՏ_2 = class State extends RS_state_api {
        products (state, getters, root_state) {
            var self = this;
            return state.items.map(function(it) {
                var product;
                product = root_state.products.all.find(function(product) {
                    var ՐՏ_3, ՐՏ_4;
                    return ((ՐՏ_3 = product.id) === (ՐՏ_4 = it.id) || typeof ՐՏ_3 === "object" && ՐՏ_eq(ՐՏ_3, ՐՏ_4));
                });
                return {
                    title: product.title,
                    price: product.price,
                    quantity: it.quantity
                };
            });
        }
        total_price (state, getters) {
            var self = this;
            return getters.products.reduce(function(total, product) {
                return total + product.price * product.quantity;
            }, 0);
        }
        push_product_to_cart (product) {
            var self = this;
            self.state.items.push({
                id: product.id,
                quantity: 1
            });
        }
        inc_item_quantity (product) {
            var self = this;
            var item;
            item = self.state.items.find(function(it) {
                return it.id === product.id;
            });
            ++item.quantity;
        }
        set_cart_items (items) {
            var self = this;
            self.state.items = items;
        }
        set_checkout (checkout) {
            var self = this;
            self.state.checkout = checkout;
        }
        set_checkout_status (status) {
            var self = this;
            self.state.checkout.status = status;
            if (!status) {
                self.state.checkout.msg = "";
            }
        }
    }, (function(){
        Object.defineProperties(ՐՏ_2.prototype, {
            products: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_2.prototype.products)
            },
            total_price: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_2.prototype.total_price)
            },
            push_product_to_cart: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_2.prototype.push_product_to_cart)
            },
            inc_item_quantity: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_2.prototype.inc_item_quantity)
            },
            set_cart_items: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_2.prototype.set_cart_items)
            },
            set_checkout: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_2.prototype.set_checkout)
            },
            set_checkout_status: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_2.prototype.set_checkout_status)
            }
        });
        ;
    })(), ՐՏ_2);
    var Store = (ՐՏ_5 = class Store extends RS_store {
        constructor (root) {
            super();
            var self = this;
            self.root = root;
            self.state_api = new State(vc, default_state(), self.root.state_api);
            self.actions = vc._actions;
        }
        *checkout (products) {
            var self = this;
            var state, saved_cart_items;
            state = self.state_api.state;
            saved_cart_items = state.items.slice(0);
            self.commit("set_checkout_status", null);
            self.commit("set_cart_items", []);
            try {
                yield shop.buy_products(products);
            } catch (ՐՏ_Exception) {
                if (ՐՏ_Exception instanceof Shop_err) {
                    var err = ՐՏ_Exception;
                    self.commit("set_checkout", {
                        status: "failed",
                        msg: err.message
                    });
                    self.commit("set_cart_items", saved_cart_items);
                    return;
                } else {
                    throw ՐՏ_Exception;
                }
            }
            self.commit("set_checkout_status", "successful");
        }
        add_product_to_cart (product) {
            var self = this;
            var state, cart_item;
            state = self.state_api.state;
            self.commit("set_checkout_status", null);
            if (product.inventory > 0) {
                cart_item = state.items.find(function(it) {
                    return it.id === product.id;
                });
            }
            if (!cart_item) {
                self.commit("push_product_to_cart", {
                    id: product.id
                });
            } else {
                self.commit("inc_item_quantity", cart_item);
            }
            self.root.commit("/products.dec_product_inventory", {
                id: product.id
            });
        }
    }, (function(){
        Object.defineProperties(ՐՏ_5.prototype, {
            checkout: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_5.prototype.checkout))
            },
            add_product_to_cart: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_5.prototype.add_product_to_cart)
            }
        });
        ;
    })(), ՐՏ_5);
    if (__name__ === "__main__") {
    }
    ՐՏ_modules["store.cart"]["Shop_err"] = Shop_err;

    ՐՏ_modules["store.cart"]["vc"] = vc;

    ՐՏ_modules["store.cart"]["default_state"] = default_state;

    ՐՏ_modules["store.cart"]["State"] = State;

    ՐՏ_modules["store.cart"]["Store"] = Store;
})();

(function(){
    var __name__ = "store.products";
    var vc;
    var asyncer = ՐՏ_modules["asset.common"].asyncer;
    
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    
    var RS_store = ՐՏ_modules["asset.store2"].RS_store;
    var RS_state_api = ՐՏ_modules["asset.store2"].RS_state_api;
    
    var shop = ՐՏ_modules["api.shop"];
    
    function default_state() {
        var ret;
        ret = {
            all: []
        };
        return ret;
    }
    vc = new V_collector();
    var State = (ՐՏ_6 = class State extends RS_state_api {
        set_products (products) {
            var self = this;
            self.state.all = products;
        }
        dec_product_inventory (product) {
            var self = this;
            product = self.state.all.find(function(it) {
                return it.id === product.id;
            });
            --product.inventory;
        }
    }, (function(){
        Object.defineProperties(ՐՏ_6.prototype, {
            set_products: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_6.prototype.set_products)
            },
            dec_product_inventory: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_6.prototype.dec_product_inventory)
            }
        });
        ;
    })(), ՐՏ_6);
    var Store = (ՐՏ_7 = class Store extends RS_store {
        constructor (root) {
            super();
            var self = this;
            self.root = root;
            self.state_api = new State(vc, default_state(), self.root.state_api);
            self.actions = vc._actions;
        }
        *get_all_products () {
            var self = this;
            var products;
            try {
                products = yield shop.get_products();
            } catch (ՐՏ_Exception) {
                console.log("failed get_all_products");
                return;
            }
            self.commit("set_products", products);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_7.prototype, {
            get_all_products: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_7.prototype.get_all_products))
            }
        });
        ;
    })(), ՐՏ_7);
    if (__name__ === "__main__") {
    }
    ՐՏ_modules["store.products"]["vc"] = vc;

    ՐՏ_modules["store.products"]["default_state"] = default_state;

    ՐՏ_modules["store.products"]["State"] = State;

    ՐՏ_modules["store.products"]["Store"] = Store;
})();

(function(){
    var __name__ = "store.root";
    var vc;
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    
    var RS_store = ՐՏ_modules["asset.store2"].RS_store;
    var RS_state_api = ՐՏ_modules["asset.store2"].RS_state_api;
    
    var cart = ՐՏ_modules["store.cart"];
    var products = ՐՏ_modules["store.products"];
    
    function default_state() {
        var ret;
        ret = {
            cart: null,
            products: null
        };
        return ret;
    }
    vc = new V_collector();
    class State extends RS_state_api {
    }
    class Store extends RS_store {
        constructor () {
            super();
            var self = this;
            self.state_api = new State(vc, default_state(), self.vue);
            self.actions = vc._actions;
            self.mount_module(new cart.Store(self), "cart");
            self.mount_module(new products.Store(self), "products");
        }
    }
    if (__name__ === "__main__") {
    }
    ՐՏ_modules["store.root"]["vc"] = vc;

    ՐՏ_modules["store.root"]["default_state"] = default_state;

    ՐՏ_modules["store.root"]["State"] = State;

    ՐՏ_modules["store.root"]["Store"] = Store;
})();

(function(){
    var __name__ = "store";

    ՐՏ_modules["store"]["cart"] = ՐՏ_modules["store.cart"];

    ՐՏ_modules["store"]["products"] = ՐՏ_modules["store.products"];

    ՐՏ_modules["store"]["root"] = ՐՏ_modules["store.root"];
})();

(function(){
    var __name__ = "components.shopping_cart";
    var templ, vc;
    templ = '\n<div  class = "cart">\n    <h2>Your Cart</h2>\n    <p  v-show = "!products.length">\n        <i>Please add some products to cart.</i>\n    </p>\n    <ul>\n        <li  v-for = "product in products" :key = "product.id">\n            {{ product.title }} - {{ product.price  }} x {{ product.quantity }}\n        </li>\n    </ul>\n    <p>Total: {{ total  }}</p>\n    <p><button  :disabled = "!products.length" @click = "checkout(products)">Checkout</button></p>\n    <p  v-show = "checkout_info.status">\n        Checkout {{ checkout_info.status }}\n        <template  v-if = \'checkout_info.msg\'>({{checkout_info.msg}}).</template>\n    </p>\n</div>\n';
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    
    vc = new V_collector();
    class Shopping_cart extends RS_vue {
        constructor () {
            super(vc);
            var self = this;
            self.template = templ;
            self.map_store = {
                checkout_info: "/cart.checkout",
                products: "/cart.products",
                total: "/cart.total_price",
                checkout: "/cart.checkout*"
            };
        }
        _init_data () {
            var self = this;
            var ret;
            ret = {};
            return ret;
        }
    }
    function make() {
        return new Shopping_cart();
    }
    ՐՏ_modules["components.shopping_cart"]["templ"] = templ;

    ՐՏ_modules["components.shopping_cart"]["vc"] = vc;

    ՐՏ_modules["components.shopping_cart"]["Shopping_cart"] = Shopping_cart;

    ՐՏ_modules["components.shopping_cart"]["make"] = make;
})();

(function(){
    var __name__ = "components.prod_list";
    var templ, vc;
    templ = '\n<ul>\n    <li  v-for = "product in products" :key = "product.id">\n        {{ product.title }} - {{ product.price  }}\n        <br><button  :disabled = "!product.inventory" @click = "add_product_to_cart(product)">Add to cart</button></br>\n    </li>\n</ul>\n';
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    
    vc = new V_collector();
    class Prod_list extends RS_vue {
        constructor () {
            super(vc);
            var self = this;
            self.template = templ;
            self.map_store = {
                products: "/products.all",
                get_all_products: "/products.get_all_products*",
                add_product_to_cart: "/cart.add_product_to_cart*"
            };
        }
        _init_data () {
            var self = this;
            var ret;
            ret = {};
            return ret;
        }
        created () {
            var self = this;
            self.get_all_products();
        }
    }
    function make() {
        return new Prod_list();
    }
    ՐՏ_modules["components.prod_list"]["templ"] = templ;

    ՐՏ_modules["components.prod_list"]["vc"] = vc;

    ՐՏ_modules["components.prod_list"]["Prod_list"] = Prod_list;

    ՐՏ_modules["components.prod_list"]["make"] = make;
})();

(function(){
    var __name__ = "components";

    ՐՏ_modules["components"]["shopping_cart"] = ՐՏ_modules["components.shopping_cart"];

    ՐՏ_modules["components"]["prod_list"] = ՐՏ_modules["components.prod_list"];
})();

(function(){

    var __name__ = "__main__";

    var app_templ, vc;
    app_templ = '\n<div  id = "app">\n    <h1>Shopping Cart Example</h1>\n    <hr/>\n    <h2>Products</h2>\n    <prod_list></prod_list>\n    <shopping_cart></shopping_cart>\n</div>\n';
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    
    var Store = ՐՏ_modules["store.root"].Store;
    
    var shopping_cart = ՐՏ_modules["components"].shopping_cart;
    var prod_list = ՐՏ_modules["components"].prod_list;
    
    Vue.use(Store);
    window.store = new Store(rs_req);
    vc = new V_collector();
    class App extends RS_vue {
        constructor () {
            super(vc);
            var self = this;
            self.store = store;
            self.template = app_templ;
            self.components = {
                shopping_cart: shopping_cart.make(),
                prod_list: prod_list.make()
            };
        }
        _init_data () {
            var self = this;
            return {};
        }
    }
    exports.start = function(el) {
        var app;
        app = new App();
        window.app = new Vue(app);
        window.app.$mount(el || "#app");
    };
})();
})();

return exports;})