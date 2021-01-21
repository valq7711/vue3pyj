(function(){
"use strict";
var ՐՏ_1, ՐՏ_14, ՐՏ_15, ՐՏ_19, ՐՏ_81, ՐՏ_82, ՐՏ_83, ՐՏ_84, ՐՏ_87, ՐՏ_88, ՐՏ_92, ՐՏ_93, ՐՏ_98, ՐՏ_101, ՐՏ_104;
function enumerate(item) {
    var arr, iter, i;
    arr = [];
    iter = ՐՏ_Iterable(item);
    for (i = 0; i < iter.length; i++) {
        arr[arr.length] = [ i, item[i] ];
    }
    return arr;
}
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
function len(obj) {
    var tmp;
    if (obj.constructor === [].constructor || obj.constructor === "".constructor || (tmp = Array.prototype.slice.call(obj)).length) {
        return (tmp || obj).length;
    }
    if (Set && obj.constructor === Set) {
        return obj.size;
    }
    return Object.keys(obj).length;
}
function ՐՏ_print() {
    if (typeof console === "object") {
        console.log.apply(console, arguments);
    }
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
    var ՐՏitr75, ՐՏidx75;
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
        ՐՏitr75 = ՐՏ_Iterable(a);
        for (ՐՏidx75 = 0; ՐՏidx75 < ՐՏitr75.length; ՐՏidx75++) {
            i = ՐՏitr75[ՐՏidx75];
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
class KeyError extends Error {
    constructor (message) {
        super();
        var self = this;
        self.name = "KeyError";
        self.message = message;
    }
}
function ՐՏ_def_modules() {
    var modules;
    modules = {};
    function mounter(mod_id) {
        var rs_mod_id, rs_mod;
        rs_mod_id = "ՐՏ:" + mod_id;
        rs_mod = modules[rs_mod_id] = {
            "body": null,
            "exports": null
        };
        rs_mod["export"] = function(prop, get, set) {
            if (!rs_mod["exports"]) {
                rs_mod["exports"] = {};
            }
            Object.defineProperty(rs_mod["exports"], prop, {
                configurable: true,
                enumerable: true,
                get: get,
                set: set
            });
        };
        Object.defineProperty(modules, mod_id, {
            enumerable: true,
            get: function() {
                var mod;
                return (mod = modules[rs_mod_id])["exports"] || mod["body"]();
            },
            set: function(v) {
                modules[rs_mod_id]["exports"] = v;
            }
        });
        return rs_mod;
    }
    Object.defineProperty(modules, "ՐՏ_def", {
        configurable: false,
        enumerable: false,
        value: mounter
    });
    return modules;
}
var ՐՏ_modules = ՐՏ_def_modules();
ՐՏ_modules.ՐՏ_def("asset.fs_path");
ՐՏ_modules.ՐՏ_def("asset.fs");
ՐՏ_modules.ՐՏ_def("asset.mechanic");
ՐՏ_modules.ՐՏ_def("asset.rs_vue");
ՐՏ_modules.ՐՏ_def("asset.common");
ՐՏ_modules.ՐՏ_def("asset.rs_getter");
ՐՏ_modules.ՐՏ_def("asset.store3");
ՐՏ_modules.ՐՏ_def("asset.html_ml");
ՐՏ_modules.ՐՏ_def("asset.vuepy_parser");
ՐՏ_modules.ՐՏ_def("rapydscript_web");
ՐՏ_modules.ՐՏ_def("asset.vuepy_compiler");
ՐՏ_modules.ՐՏ_def("asset.vuepy_output");
ՐՏ_modules.ՐՏ_def("asset.cm_vuepy");
ՐՏ_modules.ՐՏ_def("asset.cm_rapydscript");
ՐՏ_modules.ՐՏ_def("asset");
ՐՏ_modules.ՐՏ_def("load_js");
ՐՏ_modules.ՐՏ_def("Vue");
ՐՏ_modules.ՐՏ_def("click_out");
ՐՏ_modules.ՐՏ_def("components.app_selector");
ՐՏ_modules.ՐՏ_def("components.login");
ՐՏ_modules.ՐՏ_def("components.error");
ՐՏ_modules.ՐՏ_def("components.folder_content");
ՐՏ_modules.ՐՏ_def("components.editor");
ՐՏ_modules.ՐՏ_def("components.modal");
ՐՏ_modules.ՐՏ_def("components.search_view");
ՐՏ_modules.ՐՏ_def("components");
ՐՏ_modules.ՐՏ_def("components.base_layout");
ՐՏ_modules.ՐՏ_def("components.flash");
ՐՏ_modules.ՐՏ_def("components.dropdown");
ՐՏ_modules.ՐՏ_def("components.navbar");
ՐՏ_modules.ՐՏ_def("components.navbar_item");
ՐՏ_modules.ՐՏ_def("store.editor");
ՐՏ_modules.ՐՏ_def("store.explorer");
ՐՏ_modules.ՐՏ_def("server");
ՐՏ_modules.ՐՏ_def("app_menu");
ՐՏ_modules.ՐՏ_def("axios");
ՐՏ_modules.ՐՏ_def("CodeMirror");
ՐՏ_modules.ՐՏ_def("store.root");
ՐՏ_modules.ՐՏ_def("store");
ՐՏ_modules.ՐՏ_def("app");

ՐՏ_modules["ՐՏ:asset.fs_path"].body = function(){
    var __name__ = "asset.fs_path";

    var RE_FP_INFO;
    RE_FP_INFO = /^((.*?\/)?([^\/]+?))(\.([^\.]+))?$/;
    function is_valid_name(name) {
        return /^(\.\w|\w)(\w|\.)*/.test(name);
    }
    function to_arr(path) {
        var ՐՏitr1, ՐՏidx1;
        var dirs, beg, d;
        if (path === "" || path === "/") {
            return [ "" ];
        }
        dirs = path.split("/");
        if (dirs[dirs.length-1] === "") {
            dirs = dirs.slice(0, -1);
        }
        beg = dirs[0] === "" ? 1 : 0;
        ՐՏitr1 = ՐՏ_Iterable(dirs.slice(beg));
        for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
            d = ՐՏitr1[ՐՏidx1];
            if (!(d === ".." || is_valid_name(d))) {
                throw new Error("Bad path: " + path);
            }
        }
        return dirs;
    }
    function path_arr_resolve(arr, allow_out_root) {
        var ՐՏitr2, ՐՏidx2;
        var i, ret, path_start, it;
        i = 0;
        ret = [];
        path_start = 0;
        ՐՏitr2 = ՐՏ_Iterable(arr);
        for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
            it = ՐՏitr2[ՐՏidx2];
            if (it === "") {
                ret[0] = "";
                i = 1;
                path_start = 1;
                continue;
            } else if (it === "..") {
                --i;
                if (i >= path_start) {
                    continue;
                } else if (!allow_out_root) {
                    throw new Error("Out of root dir");
                } else {
                    ret.unshift("..");
                    ++path_start;
                    i += 2;
                    continue;
                }
            }
            ret[i] = it;
            ++i;
        }
        return ret.slice(0, i);
    }
    function path_join() {
        var ՐՏitr3, ՐՏidx3;
        var arr, p_str;
        arr = [];
        ՐՏitr3 = ՐՏ_Iterable(arguments);
        for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
            p_str = ՐՏitr3[ՐՏidx3];
            if (p_str) {
                Array.prototype.push.apply(arr, to_arr(p_str));
            }
        }
        return path_arr_resolve(arr).join("/");
    }
    function rel_path_join() {
        var ՐՏitr4, ՐՏidx4;
        var arr, p_str;
        arr = [];
        ՐՏitr4 = ՐՏ_Iterable(arguments);
        for (ՐՏidx4 = 0; ՐՏidx4 < ՐՏitr4.length; ՐՏidx4++) {
            p_str = ՐՏitr4[ՐՏidx4];
            if (p_str) {
                Array.prototype.push.apply(arr, to_arr(p_str));
            }
        }
        return path_arr_resolve(arr, true).join("/");
    }
    function path_split(pth) {
        var fp_info, ret;
        fp_info = RE_FP_INFO.exec(pth);
        ret = {
            fpath_no_ext: fp_info[1],
            dir: fp_info[2],
            fname_no_ext: fp_info[3],
            ext: fp_info[5]
        };
        ret.tail = ret.fname = ret.ext ? ret.fname_no_ext + "." + ret.ext : ret.fname_no_ext;
        return ret;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.fs_path"];
    ՐՏ_mod.export("RE_FP_INFO", function(){return RE_FP_INFO;}, function(ՐՏ_v){if (typeof RE_FP_INFO !== "undefined") {RE_FP_INFO = ՐՏ_v;};});
    ՐՏ_mod.export("is_valid_name", function(){return is_valid_name;}, function(ՐՏ_v){if (typeof is_valid_name !== "undefined") {is_valid_name = ՐՏ_v;};});
    ՐՏ_mod.export("to_arr", function(){return to_arr;}, function(ՐՏ_v){if (typeof to_arr !== "undefined") {to_arr = ՐՏ_v;};});
    ՐՏ_mod.export("path_arr_resolve", function(){return path_arr_resolve;}, function(ՐՏ_v){if (typeof path_arr_resolve !== "undefined") {path_arr_resolve = ՐՏ_v;};});
    ՐՏ_mod.export("path_join", function(){return path_join;}, function(ՐՏ_v){if (typeof path_join !== "undefined") {path_join = ՐՏ_v;};});
    ՐՏ_mod.export("rel_path_join", function(){return rel_path_join;}, function(ՐՏ_v){if (typeof rel_path_join !== "undefined") {rel_path_join = ՐՏ_v;};});
    ՐՏ_mod.export("path_split", function(){return path_split;}, function(ՐՏ_v){if (typeof path_split !== "undefined") {path_split = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.fs"].body = function(){
    var __name__ = "asset.fs";

    var fs_path = ՐՏ_modules["asset.fs_path"];
    class FS_local_keeper {
        constructor (name, zip) {
            var self = this;
            self.name = name;
            self.zip = zip;
        }
        save (fs_obj) {
            var self = this;
            function prom(ok, err) {
                function store_handler(data) {
                    window.localStorage.setItem(self.name, data);
                    ok("done");
                }
                self.zip.file("fs_store", fs_obj.dumps());
                self.zip.generateAsync({
                    type: "string",
                    compression: "DEFLATE",
                    compressionOptions: {
                        level: 9
                    }
                }).then(store_handler);
            }
            return new Promise(prom);
        }
        load (fs_obj) {
            var self = this;
            function prom(ok, err) {
                var fzip;
                function reader(zip) {
                    zip.file("fs_store").async("string").then(function(s) {
                        fs_obj.loads(s);
                        ok("done");
                    });
                }
                fzip = window.localStorage.getItem(self.name);
                if (fzip) {
                    self.zip.loadAsync(fzip).then(reader);
                } else {
                    err();
                }
            }
            return new Promise(prom);
        }
    }
    var FS = (ՐՏ_1 = class FS {
        clear_content () {
            var self = this;
            self.files = {};
            self.dirs = {};
            self.last_id = 0;
            self._reset_map_type_();
        }
        constructor () {
            var self = this;
            self.files = {};
            self.dirs = {};
            self.dirs[0] = {
                id: 0,
                name: "",
                parent: null,
                content: []
            };
            self.last_id = 0;
            self.cwd_id = 0;
            self.map_type = {};
            self._reset_map_type_();
            self._listeners = {
                write_file: [],
                del_file: [],
                create_dir: []
            };
            self.fs_path = fs_path;
        }
        _doubles_in_dir_content () {
            var ՐՏitr5, ՐՏidx5, ՐՏitr6, ՐՏidx6;
            var self = this;
            var errors, dir_id, dir, tmp, it_id;
            errors = [];
            ՐՏitr5 = ՐՏ_Iterable(self.dirs);
            for (ՐՏidx5 = 0; ՐՏidx5 < ՐՏitr5.length; ՐՏidx5++) {
                dir_id = ՐՏitr5[ՐՏidx5];
                dir = self.dirs[dir_id];
                tmp = {};
                ՐՏitr6 = ՐՏ_Iterable(dir.content);
                for (ՐՏidx6 = 0; ՐՏidx6 < ՐՏitr6.length; ՐՏidx6++) {
                    it_id = ՐՏitr6[ՐՏidx6];
                    if (tmp[it_id]) {
                        errors.push({
                            dir_id: dir_id
                        });
                    }
                    tmp[it_id] = true;
                }
            }
            return errors.length ? errors : null;
        }
        _consistency_errors () {
            var ՐՏitr7, ՐՏidx7, ՐՏitr8, ՐՏidx8, ՐՏ_2, ՐՏitr9, ՐՏidx9;
            var self = this;
            var errors, dir_id, dir, it_id, it, f_id, f, parent_dir;
            errors = [];
            ՐՏitr7 = ՐՏ_Iterable(self.dirs);
            for (ՐՏidx7 = 0; ՐՏidx7 < ՐՏitr7.length; ՐՏidx7++) {
                dir_id = ՐՏitr7[ՐՏidx7];
                dir = self.dirs[dir_id];
                ՐՏitr8 = ՐՏ_Iterable(dir.content);
                for (ՐՏidx8 = 0; ՐՏidx8 < ՐՏitr8.length; ՐՏidx8++) {
                    it_id = ՐՏitr8[ՐՏidx8];
                    it = self.get_info(it_id);
                    if (((ՐՏ_2 = it.parent) !== dir_id && (typeof ՐՏ_2 !== "object" || !ՐՏ_eq(ՐՏ_2, dir_id)))) {
                        errors.push({
                            dir_id: dir_id,
                            it_id: it_id
                        });
                    }
                }
            }
            ՐՏitr9 = ՐՏ_Iterable(self.files);
            for (ՐՏidx9 = 0; ՐՏidx9 < ՐՏitr9.length; ՐՏidx9++) {
                f_id = ՐՏitr9[ՐՏidx9];
                f = self.files[f_id];
                parent_dir = self.dirs[f.parent];
                if (ՐՏ_in(!f_id, parent_dir.content)) {
                    errors.push({
                        dir_id: parent_dir.id,
                        f_id: f_id
                    });
                }
            }
            return errors.length ? errors : null;
        }
        _reset_map_type_ () {
            var self = this;
            self.map_type[self.FILE] = self.files;
            self.map_type[self.DIR] = self.dirs;
        }
        loads (s) {
            var self = this;
            var obj;
            obj = s;
            if (ՐՏ_type(obj) !== "String") {
                obj = JSON.stringify(obj);
            }
            obj = JSON.parse(obj);
            self.files = obj.files;
            self.dirs = obj.dirs;
            self.last_id = obj.last_id;
            self._reset_map_type_();
        }
        dumps () {
            var self = this;
            var data;
            data = {
                files: self.files,
                dirs: self.dirs,
                last_id: self.last_id
            };
            return JSON.stringify(data);
        }
        _create_id () {
            var self = this;
            var id;
            id = new Date().valueOf();
            while (id <= self.last_id) {
                id = new Date().valueOf();
            }
            self.last_id = id;
            return id.toString();
        }
        _name_to_id (name, parent_id, scope) {
            var ՐՏitr10, ՐՏidx10, ՐՏ_3;
            var self = this;
            var f_d, id;
            f_d = typeof scope === "string" ? self[scope] : scope;
            ՐՏitr10 = ՐՏ_Iterable(self.dirs[parent_id].content);
            for (ՐՏidx10 = 0; ՐՏidx10 < ՐՏitr10.length; ՐՏidx10++) {
                id = ՐՏitr10[ՐՏidx10];
                if (f_d[id] && ((ՐՏ_3 = f_d[id].name) === name || typeof ՐՏ_3 === "object" && ՐՏ_eq(ՐՏ_3, name))) {
                    return id;
                }
            }
            return false;
        }
        _create_zombie_dir (name, parent_id) {
            var self = this;
            var parent_dir, dir_id;
            parent_id = parent_id.toString();
            parent_dir = self.dirs[parent_id];
            if (!parent_dir) {
                throw new Error("Bad parent_id: " + parent_id);
            }
            if (self._name_to_id(name, parent_id, "dirs")) {
                throw new Error("Dir already exists: " + name);
            }
            dir_id = self._create_id();
            self.dirs[dir_id] = {
                id: dir_id,
                name: name,
                parent: parent_id,
                content: []
            };
            return dir_id;
        }
        is_valid_name (name) {
            var self = this;
            return fs_path.is_valid_name(name);
        }
        to_arr (path) {
            var self = this;
            return fs_path.to_arr(path);
        }
        get_type (id) {
            var self = this;
            if (self.files[id]) {
                return self.FILE;
            }
            if (self.dirs[id]) {
                return self.DIR;
            }
            throw new Error("Bad id: " + id);
        }
        create_dir (name, parent_id) {
            var self = this;
            var ps, dir_id, parent_dir;
            if (parent_id === void 0) {
                ps = fs_path.path_split(name);
                parent_id = self.id_by_path(ps.dir);
                name = ps.tail;
            } else {
                parent_id = parent_id.toString();
            }
            if (!self.dirs[parent_id]) {
                throw new Error("Bad dir_id: " + parent_id);
            }
            dir_id = self._create_zombie_dir(name, parent_id);
            parent_dir = self.dirs[parent_id];
            parent_dir.content.push(dir_id);
            self.emit("create_dir", dir_id);
            return dir_id;
        }
        create_path (path) {
            var ՐՏitr11, ՐՏidx11;
            var self = this;
            var dirs, i, prnt_id, dir_name, dir_id;
            dirs = self.to_arr(path);
            if (!dirs || dirs[0] !== "") {
                throw new Error("bad path: " + path);
                return;
            }
            dirs = dirs.slice(1);
            i = 0;
            prnt_id = "0";
            ՐՏitr11 = ՐՏ_Iterable(dirs);
            for (ՐՏidx11 = 0; ՐՏidx11 < ՐՏitr11.length; ՐՏidx11++) {
                dir_name = ՐՏitr11[ՐՏidx11];
                dir_id = self._name_to_id(dir_name, prnt_id, "dirs");
                if (dir_id) {
                    ++i;
                    prnt_id = dir_id;
                } else {
                    break;
                }
            }
            while (dirs[i]) {
                dir_id = self._create_id();
                self.dirs[dir_id] = {
                    id: dir_id,
                    name: dirs[i],
                    parent: prnt_id,
                    content: []
                };
                self.dirs[prnt_id].content.push(dir_id);
                prnt_id = dir_id;
                ++i;
            }
            return dir_id;
        }
        create_file (name, dir_id, content) {
            var ՐՏ_4;
            var self = this;
            var ps, id, dt;
            if (dir_id === void 0) {
                ps = fs_path.path_split(name);
                dir_id = self.id_by_path(ps.dir);
                name = ps.fname;
            } else {
                dir_id = dir_id.toString();
            }
            if (!self.dirs[dir_id]) {
                throw new Error("Bad dir_id: " + dir_id);
            }
            if (self._name_to_id(name, dir_id, "files")) {
                throw new Error("File already exists: " + name);
            }
            id = self._create_id();
            dt = new Date().valueOf();
            self.files[id] = {
                id: id,
                name: name,
                parent: dir_id,
                content: "",
                ctime: dt,
                mtime: dt
            };
            self.dirs[dir_id].content.push(id);
            if ((content !== (ՐՏ_4 = void 0) && (typeof content !== "object" || !ՐՏ_eq(content, ՐՏ_4)))) {
                self.write_file(id, content);
            }
            return id;
        }
        del_any (id) {
            var self = this;
            if (self.dirs[id]) {
                self.del_dir(id);
            } else if (self.files[id]) {
                self.del_file(id);
            } else {
                throw new Error("Bad id: " + id);
            }
        }
        del_file (id) {
            var self = this;
            var f, pdir, idx;
            f = self.files[id];
            if (!f) {
                throw new Error("Bad file_id: " + id);
            }
            self.emit("del_file", id);
            pdir = self.dirs[f.parent];
            idx = pdir.content.indexOf(id);
            pdir.content.splice(idx, 1);
            delete self.files[id];
        }
        del_dir (id, force_del) {
            var ՐՏitr12, ՐՏidx12;
            var self = this;
            var d, child_id, pdir, idx;
            d = self.dirs[id];
            if (!d) {
                throw new Error("Bad dir_id: " + id);
            } else if (d.content.length && !force_del) {
                throw new Error("Dir is not empty: " + id);
            }
            ՐՏitr12 = ՐՏ_Iterable(d.content.slice(0));
            for (ՐՏidx12 = 0; ՐՏidx12 < ՐՏitr12.length; ՐՏidx12++) {
                child_id = ՐՏitr12[ՐՏidx12];
                if (self.files[child_id]) {
                    self.del_file(child_id);
                } else {
                    self.del_dir(child_id, force_del);
                }
            }
            pdir = self.dirs[d.parent];
            idx = pdir.content.indexOf(id);
            pdir.content.splice(idx, 1);
            delete self.dirs[id];
        }
        copy_file (src, dst) {
            var ՐՏitr13, ՐՏidx13;
            var self = this;
            var d, f_id;
            src = self.files[src];
            dst = self.dirs[dst];
            ՐՏitr13 = ՐՏ_Iterable([ src, dst ]);
            for (ՐՏidx13 = 0; ՐՏidx13 < ՐՏitr13.length; ՐՏidx13++) {
                d = ՐՏitr13[ՐՏidx13];
                if (!d) {
                    throw new Error("Bad dir_id: " + id);
                }
            }
            f_id = self.create_file(src.name, dst.id);
            self.write_file(f_id, src.content, src.mtime);
            return f_id;
        }
        copy_dir (src, dst) {
            var ՐՏitr14, ՐՏidx14, ՐՏitr15, ՐՏidx15, ՐՏ_5, ՐՏ_6;
            var self = this;
            var d, src_content, dir_id, id;
            src = self.dirs[src];
            dst = self.dirs[dst];
            ՐՏitr14 = ՐՏ_Iterable([ src, dst ]);
            for (ՐՏidx14 = 0; ՐՏidx14 < ՐՏitr14.length; ՐՏidx14++) {
                d = ՐՏitr14[ՐՏidx14];
                if (!d) {
                    throw new Error("Bad dir_id: " + id);
                }
            }
            src_content = src.content.slice(0);
            dir_id = self._create_zombie_dir(src.name, dst.id);
            ՐՏitr15 = ՐՏ_Iterable(src_content);
            for (ՐՏidx15 = 0; ՐՏidx15 < ՐՏitr15.length; ՐՏidx15++) {
                id = ՐՏitr15[ՐՏidx15];
                if (((ՐՏ_5 = self.get_type(id)) === (ՐՏ_6 = self.DIR) || typeof ՐՏ_5 === "object" && ՐՏ_eq(ՐՏ_5, ՐՏ_6))) {
                    self.copy_dir(id, dir_id);
                } else {
                    self.copy_file(id, dir_id);
                }
            }
            dst.content.push(dir_id);
            return dir_id;
        }
        copy_any (src, dst) {
            var self = this;
            if (self.files[src]) {
                return self.copy_file(src, dst);
            } else if (self.dirs[src]) {
                return self.copy_dir(src, dst);
            }
            throw new Error("Bad src_id: " + id);
        }
        move (id, dst_dir_id) {
            var ՐՏ_7, ՐՏ_8, ՐՏ_9;
            var self = this;
            var dst_dir, it, up_dir_id, cur_parent_dir, idx;
            dst_dir = self.dirs[dst_dir_id];
            if (!dst_dir) {
                throw new Error("Bad dst_dir_id: " + dst_dir_id);
            }
            it = self.get_info(id, true);
            if (self._name_to_id(it.name, dst_dir_id, self.map_type[it.type])) {
                throw new Error("Dir or file already exists in dst_dir: " + it.name);
            }
            if (((ՐՏ_7 = it.type) === (ՐՏ_8 = self.DIR) || typeof ՐՏ_7 === "object" && ՐՏ_eq(ՐՏ_7, ՐՏ_8))) {
                up_dir_id = dst_dir.id;
                while (up_dir_id) {
                    if ((up_dir_id === id || typeof up_dir_id === "object" && ՐՏ_eq(up_dir_id, id))) {
                        throw new Error("Can`t move dir into its child");
                    }
                    up_dir_id = self.dirs[up_dir_id].parent;
                }
            }
            cur_parent_dir = self.dirs[it.parent];
            idx = cur_parent_dir.content.indexOf(it.id);
            if ((idx === (ՐՏ_9 = -1) || typeof idx === "object" && ՐՏ_eq(idx, ՐՏ_9))) {
                throw new Error("Unexpected error");
            }
            cur_parent_dir.content.splice(idx, 1);
            dst_dir.content.push(it.id);
            it.obj.parent = dst_dir.id;
        }
        rename (id, new_name) {
            var self = this;
            var it;
            it = self.get_info(id, true);
            if (self._name_to_id(new_name, it.parent, self.map_type[it.type])) {
                throw new Error("Dir or file already exists in dst_dir: " + it.name);
            }
            it.obj.name = new_name;
        }
        get_info (id, with_obj) {
            var ՐՏ_10;
            var self = this;
            var type, obj, ret;
            type = self.get_type(id);
            obj = self.map_type[type][id];
            if (!obj) {
                throw new Error("Bad id: " + id);
            }
            ret = {
                id: id,
                name: obj.name,
                parent: obj.parent,
                type: type,
                mtime: obj.mtime,
                ctime: obj.ctime
            };
            if ((type === (ՐՏ_10 = self.FILE) || typeof type === "object" && ՐՏ_eq(type, ՐՏ_10))) {
                ret.md5_hash = obj.md5_hash;
            }
            if (with_obj) {
                ret.obj = obj;
            }
            return ret;
        }
        write_file (fid, content, mtime) {
            var self = this;
            var f;
            if (!(f = self.files[fid])) {
                throw new Error("Bad id: " + fid);
            }
            f.content = content;
            f.mtime = mtime || new Date().valueOf();
            self.emit("write_file", fid);
        }
        on (event, listener) {
            var self = this;
            if (!self._listeners[event]) {
                throw new Error("unknown event: " + event);
            }
            self._listeners[event].push(listener);
            return function() {
                self.off(event, listener);
            };
        }
        off (event, listener) {
            var ՐՏ_11;
            var self = this;
            var lst, idx;
            if (!(lst = self._listeners[event])) {
                throw new Error("unknown event: " + event);
            }
            idx = lst.indexOf(listener);
            if ((idx !== (ՐՏ_11 = -1) && (typeof idx !== "object" || !ՐՏ_eq(idx, ՐՏ_11)))) {
                lst.splice(idx, 1);
            }
        }
        emit (e) {
            var ՐՏitr16, ՐՏidx16;
            var self = this;
            var args = [].slice.call(arguments, 1);
            var listeners, listener;
            if (!(listeners = self._listeners[e])) {
                throw new Error("unknown event: " + e);
            }
            ՐՏitr16 = ՐՏ_Iterable(listeners);
            for (ՐՏidx16 = 0; ՐՏidx16 < ՐՏitr16.length; ՐՏidx16++) {
                listener = ՐՏitr16[ՐՏidx16];
                listener.apply(null, args);
            }
        }
        get_file_path (fid) {
            var self = this;
            var f, parent, ret;
            f = self.files[fid];
            if (!f) {
                throw new Error("Bad file_id: " + fid);
            }
            parent = self.dirs[f.parent];
            ret = [];
            while (parent) {
                ret.push({
                    id: parent.id,
                    name: parent.name
                });
                parent = self.dirs[parent.parent];
            }
            ret.reverse();
            return ret;
        }
        list_dir (dir_id) {
            var ՐՏitr17, ՐՏidx17;
            var self = this;
            var ret, id;
            if (!self.dirs[dir_id]) {
                throw new Error("Bad dir_id: " + dir_id);
            }
            ret = [];
            ՐՏitr17 = ՐՏ_Iterable(self.dirs[dir_id].content);
            for (ՐՏidx17 = 0; ՐՏidx17 < ՐՏitr17.length; ՐՏidx17++) {
                id = ՐՏitr17[ՐՏidx17];
                ret.push(id);
            }
            return ret;
        }
        path_arr_resolve (arr) {
            var self = this;
            return fs_path.path_arr_resolve(arr);
        }
        path_join () {
            var self = this;
            return fs_path.path_join.apply(null, arguments);
        }
        id_by_path (path) {
            var ՐՏitr19, ՐՏidx19;
            var self = this;
            var arr_pth, prnt_id, dir_id, not_found, name, id;
            function find_id(name, parent_id) {
                var ՐՏitr18, ՐՏidx18, ՐՏ_12;
                var id, it;
                ՐՏitr18 = ՐՏ_Iterable(self.dirs[parent_id].content);
                for (ՐՏidx18 = 0; ՐՏidx18 < ՐՏitr18.length; ՐՏidx18++) {
                    id = ՐՏitr18[ՐՏidx18];
                    it = self.dirs[id] || self.files[id];
                    if (((ՐՏ_12 = it.name) === name || typeof ՐՏ_12 === "object" && ՐՏ_eq(ՐՏ_12, name))) {
                        return id;
                    }
                }
                return false;
            }
            if (!path) {
                throw new Error("Unexpected path " + path);
            }
            arr_pth = self.to_arr(path);
            if (!arr_pth || ՐՏ_in(!arr_pth[0], [ "", "root" ])) {
                throw new Error("bad path: " + path);
            }
            if (!arr_pth[1]) {
                return 0;
            }
            arr_pth = arr_pth.slice(1);
            prnt_id = 0;
            dir_id = 0;
            not_found = false;
            ՐՏitr19 = ՐՏ_Iterable(arr_pth);
            for (ՐՏidx19 = 0; ՐՏidx19 < ՐՏitr19.length; ՐՏidx19++) {
                name = ՐՏitr19[ՐՏidx19];
                id = find_id(name, prnt_id);
                if (id) {
                    prnt_id = id;
                } else {
                    not_found = true;
                    break;
                }
            }
            if (not_found) {
                return null;
            }
            return id;
        }
        path_by_id (id, root_alias) {
            var self = this;
            var ret, parent_id, parent_info;
            root_alias = root_alias || "";
            ret = {
                ids: [],
                infos: [],
                _path: [],
                path: ""
            };
            id = id.toString();
            ret.ids.push(id);
            ret.infos.push(self.get_info(id));
            ret._path.push(ret.infos[0].name);
            parent_id = ret.infos[0].parent;
            while (parent_id) {
                ret.ids.push(parent_id);
                parent_info = self.get_info(parent_id);
                ret.infos.push(parent_info);
                ret._path.push(parent_info.name);
                parent_id = self.dirs[parent_id].parent;
            }
            ret.ids.reverse();
            ret.infos.reverse();
            ret._path.reverse();
            if (root_alias) {
                ret.infos[0].name = root_alias;
                ret._path[0] = root_alias;
            }
            ret.path = ret._path.join("/");
            return ret;
        }
    }, (function(){
        var FILE = "file";
        var DIR = "dir";
        Object.defineProperties(ՐՏ_1.prototype, {
            FILE: {
                enumerable: true, 
                writable: true, 
                value: FILE

            },
            DIR: {
                enumerable: true, 
                writable: true, 
                value: DIR

            }
        });
    })(), ՐՏ_1);
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.fs"];
    ՐՏ_mod.export("FS_local_keeper", function(){return FS_local_keeper;}, function(ՐՏ_v){if (typeof FS_local_keeper !== "undefined") {FS_local_keeper = ՐՏ_v;};});
    ՐՏ_mod.export("FS", function(){return FS;}, function(ՐՏ_v){if (typeof FS !== "undefined") {FS = ՐՏ_v;};});
    ՐՏ_mod.export("fs_path", function(){return fs_path;}, function(ՐՏ_v){if (typeof fs_path !== "undefined") {fs_path = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.mechanic"].body = function(){
    var __name__ = "asset.mechanic";

    var RS_MODULES;
    RS_MODULES = ՐՏ_modules;
    function module(mod_id) {
        if (mod_id) {
            return RS_MODULES[mod_id];
        }
        function all_() {
            var ret;
            ret = {};
            for (var k in RS_MODULES) {
                if (!k.startsWith("ՐՏ:")) {
                    ret[k] = RS_MODULES[k];
                }
            }
            return ret;
        }
        function keys() {
            var ret;
            ret = [];
            for (var k in RS_MODULES) {
                if (!k.startsWith("ՐՏ:")) {
                    ret.push(k);
                }
            }
            return ret;
        }
        return {
            "all": all_,
            keys: keys
        };
    }
    function module_spec(mod_id) {
        if (mod_id) {
            return RS_MODULES["ՐՏ:" + mod_id];
        }
        return {
            "all": function() {
                var ret;
                ret = {};
                module().keys().forEach(function(k) {
                    ret[k] = module_spec(k);
                });
                return ret;
            },
            "undefined": function() {
                var ret;
                ret = {};
                module().keys().forEach(function(k) {
                    var ms;
                    ms = module_spec(k);
                    if (!(ms.exports || ms.body)) {
                        ret[k] = ms;
                    }
                });
                return ret;
            },
            "defined": function() {
                var ret;
                ret = {};
                module().keys().forEach(function(k) {
                    var ms;
                    ms = module_spec(k);
                    if (ms.exports || ms.body) {
                        ret[k] = ms;
                    }
                });
                return ret;
            }
        };
    }
    function create_module(mod_name, pack_id) {
        var mod_id, pack, rs_mod_id;
        mod_id = pack_id ? pack_id + "." + mod_name : mod_name;
        if (module_spec(mod_id)) {
            throw new KeyError("Module exists: " + mod_id);
        }
        if (pack_id) {
            pack = module_spec(pack_id);
            if (!pack) {
                throw new KeyError("Package doesn't exists: " + pack_id);
            }
        } else {
            pack = null;
        }
        RS_MODULES.ՐՏ_def_mod(mod_id);
        if (pack) {
            rs_mod_id = "ՐՏ:" + mod_id;
            pack.export(mod_name, function() {
                return RS_MODULES[rs_mod_id].exports;
            }, function(v) {
                replace_module(mod_id, v);
            });
        }
    }
    function replace_module(mod_id, new_exp) {
        var ՐՏitr20, ՐՏidx20;
        var mod_spec, exp, p;
        if (!(mod_spec = module_spec(mod_id))) {
            throw new KeyError("Module doesn't exist: " + mod_id);
        }
        ՐՏitr20 = ՐՏ_Iterable(exp = mod_spec.exports);
        for (ՐՏidx20 = 0; ՐՏidx20 < ՐՏitr20.length; ՐՏidx20++) {
            p = ՐՏitr20[ՐՏidx20];
            delete exp[p];
        }
        Object.defineProperties(exp, Object.getOwnPropertyDescriptors(new_exp));
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.mechanic"];
    ՐՏ_mod.export("RS_MODULES", function(){return RS_MODULES;}, function(ՐՏ_v){if (typeof RS_MODULES !== "undefined") {RS_MODULES = ՐՏ_v;};});
    ՐՏ_mod.export("module", function(){return module;}, function(ՐՏ_v){if (typeof module !== "undefined") {module = ՐՏ_v;};});
    ՐՏ_mod.export("module_spec", function(){return module_spec;}, function(ՐՏ_v){if (typeof module_spec !== "undefined") {module_spec = ՐՏ_v;};});
    ՐՏ_mod.export("create_module", function(){return create_module;}, function(ՐՏ_v){if (typeof create_module !== "undefined") {create_module = ՐՏ_v;};});
    ՐՏ_mod.export("replace_module", function(){return replace_module;}, function(ՐՏ_v){if (typeof replace_module !== "undefined") {replace_module = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.rs_vue"].body = function(){
    var __name__ = "asset.rs_vue";

    function is_hook(name) {
        return [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "activated", "deactivated", "beforeDestroy", "destroyed", "render" ].includes(name);
    }
    function is_special(name) {
        return /^(_.+|constructor)$/.test(name);
    }
    class RS_vue {
        constructor (v_collector, name) {
            var ՐՏ_13, ՐՏitr21, ՐՏidx21, ՐՏitr22, ՐՏidx22, ՐՏitr23, ՐՏidx23;
            var self = this;
            var tmp, it, sym, _name, k, methods, meth;
            if (name) {
                self.name = (ՐՏ_13 = name.split("."))[ՐՏ_13.length-1];
            }
            self.props = {};
            if (tmp = self.data || self._init_data) {
                self.data = tmp;
            }
            self.methods = {};
            if (v_collector) {
                self.computed = v_collector._computed;
                self.directives = v_collector._directives;
                self.filters = v_collector._filters;
                self.watch = v_collector._watch;
                Object.assign(self.methods, v_collector._methods);
                ՐՏitr21 = ՐՏ_Iterable([ [ "~", "_mutations" ], [ "*", "_actions" ] ]);
                for (ՐՏidx21 = 0; ՐՏidx21 < ՐՏitr21.length; ՐՏidx21++) {
                    it = ՐՏitr21[ՐՏidx21];
                    [sym, _name] = it;
                    if (v_collector[_name]) {
                        if (!self.map_store) {
                            self.map_store = {};
                        }
                        ՐՏitr22 = ՐՏ_Iterable(v_collector[_name]);
                        for (ՐՏidx22 = 0; ՐՏidx22 < ՐՏitr22.length; ՐՏidx22++) {
                            k = ՐՏitr22[ՐՏidx22];
                            self.map_store[k] = sym;
                            self.methods[k] = v_collector[_name][k];
                        }
                    }
                }
            }
            methods = Object.getOwnPropertyDescriptors(self.__proto__);
            ՐՏitr23 = ՐՏ_Iterable(methods);
            for (ՐՏidx23 = 0; ՐՏidx23 < ՐՏitr23.length; ՐՏidx23++) {
                meth = ՐՏitr23[ՐՏidx23];
                if (is_special(meth) || v_collector && v_collector.__collected__[meth]) {
                    continue;
                }
                if (is_hook(meth)) {
                    self[meth] = methods[meth].value;
                } else {
                    self.methods[meth] = methods[meth].value;
                }
            }
        }
    }
    function unpack_name_fun_opt(f_reg_as) {
        function unpacker(reg_as, name_fun_opt, opt) {
            var self, arg1type, name;
            self = this;
            if (!name_fun_opt) {
                if (reg_as === "_getters") {
                    return function(f) {
                        var name;
                        name = f.__name__ || f.name;
                        return f_reg_as.call(self, reg_as, name, f());
                    };
                } else {
                    throw new Error("Attempt to call V_Collector @decorator with empty `()`");
                }
            }
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
    var V_collector = (ՐՏ_14 = class V_collector {
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
            self.__collected__ = {};
        }
        _reg_as (reg_as, name, fun_opt) {
            var self = this;
            if (!self[reg_as]) {
                self[reg_as] = {};
            }
            self[reg_as][name] = fun_opt;
            self.__collected__[name] = true;
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
        model (name_or_fun) {
            var self = this;
            return self._reg_as("_getters")(name_or_fun);
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
        Object.defineProperties(ՐՏ_14.prototype, {
            _reg_as: {
                enumerable: false, 
                writable: true, 
                value: unpack_name_fun_opt(ՐՏ_14.prototype._reg_as)
            }
        });
    })(), ՐՏ_14);
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.rs_vue"];
    ՐՏ_mod.export("is_hook", function(){return is_hook;}, function(ՐՏ_v){if (typeof is_hook !== "undefined") {is_hook = ՐՏ_v;};});
    ՐՏ_mod.export("is_special", function(){return is_special;}, function(ՐՏ_v){if (typeof is_special !== "undefined") {is_special = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    ՐՏ_mod.export("unpack_name_fun_opt", function(){return unpack_name_fun_opt;}, function(ՐՏ_v){if (typeof unpack_name_fun_opt !== "undefined") {unpack_name_fun_opt = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.common"].body = function(){
    var __name__ = "asset.common";

    function to_pascal(txt) {
        var single_word, ret;
        single_word = true;
        function clearAndUpper(text) {
            if (single_word) {
                single_word = text[0] !== "_";
            }
            return text.replace(/_/, "").toUpperCase();
        }
        ret = txt.replace(/((^[^_])|(_\w))/g, clearAndUpper);
        if (single_word) {
            ret = "X" + ret;
        }
        return ret;
    }
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
        var ret, blur, last_id, listen;
        ret = {};
        blur = {};
        last_id = 0;
        listen = false;
        function doc_click_cap(e) {
            var id;
            ++last_id;
            id = last_id;
            blur[last_id] = true;
            setTimeout(function() {
                var _blur;
                _blur = blur[id];
                delete blur[id];
                _blur && cb(e);
            }, 0);
        }
        function el_click(e) {
            blur[last_id] = false;
        }
        ret.start = function() {
            if (listen) {
                return;
            }
            document.addEventListener("click", doc_click_cap, true);
            el.addEventListener("click", el_click, true);
            listen = true;
        };
        ret.stop = function() {
            if (!listen) {
                return;
            }
            document.removeEventListener("click", doc_click_cap, true);
            el.removeEventListener("click", el_click, true);
            listen = false;
        };
        return ret;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.common"];
    ՐՏ_mod.export("to_pascal", function(){return to_pascal;}, function(ՐՏ_v){if (typeof to_pascal !== "undefined") {to_pascal = ՐՏ_v;};});
    ՐՏ_mod.export("Merge_call", function(){return Merge_call;}, function(ՐՏ_v){if (typeof Merge_call !== "undefined") {Merge_call = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("upload_text", function(){return upload_text;}, function(ՐՏ_v){if (typeof upload_text !== "undefined") {upload_text = ՐՏ_v;};});
    ՐՏ_mod.export("download", function(){return download;}, function(ՐՏ_v){if (typeof download !== "undefined") {download = ՐՏ_v;};});
    ՐՏ_mod.export("SF", function(){return SF;}, function(ՐՏ_v){if (typeof SF !== "undefined") {SF = ՐՏ_v;};});
    ՐՏ_mod.export("make_drag_listener", function(){return make_drag_listener;}, function(ՐՏ_v){if (typeof make_drag_listener !== "undefined") {make_drag_listener = ՐՏ_v;};});
    ՐՏ_mod.export("blur_click_listener", function(){return blur_click_listener;}, function(ՐՏ_v){if (typeof blur_click_listener !== "undefined") {blur_click_listener = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.rs_getter"].body = function(){
    var __name__ = "asset.rs_getter";

    function make_ref(src, props, target) {
        var ՐՏitr24, ՐՏidx24;
        var ret, opt, src_getter, isArr, p, map_from, getter;
        ret = target || {};
        opt = {};
        src_getter = function(n) {
            return function() {
                return src[n];
            };
        };
        isArr = Array.isArray(props);
        ՐՏitr24 = ՐՏ_Iterable(props);
        for (ՐՏidx24 = 0; ՐՏidx24 < ՐՏitr24.length; ՐՏidx24++) {
            p = ՐՏitr24[ՐՏidx24];
            getter = isArr || !(map_from = props[p]) || map_from === "." ? src_getter(p) : ՐՏ_type(map_from) === "String" ? src_getter(map_from) : map_from;
            opt[p] = {
                configurable: false,
                enumerable: true,
                get: getter
            };
        }
        Object.defineProperties(ret, opt);
        return ret;
    }
    class RS_getter {
        static __set_vm__ (vm) {
            this.prototype.$vm = vm;
        }
        constructor (name, getter, vtriggers, vm) {
            var self = this;
            self.name = name;
            self.getter = getter;
            self.vtriggers = vtriggers;
            self.vm = vm || self.$vm;
            self.value = null;
            self.unwatch = null;
            self.dirty = true;
            self.run_getter = false;
            self._getter_notified = false;
            self._triggers = null;
        }
        wrapped_getter () {
            var self = this;
            var v;
            self._triggers.watcher;
            self.dirty = true;
            if (!self.run_getter) {
                return true;
            }
            v = self.value = self.getter.call(null);
            self.dirty = false;
            self.run_getter = false;
            return v;
        }
        watcher () {
            var self = this;
            if (!self._notified) {
                self._triggers.getter ^= 1;
                self._notified = true;
                self.vm.$nextTick(function() {
                    self._notified = false;
                });
            }
        }
        unmount () {
            var self = this;
            self.unwatch();
        }
        mount () {
            var self = this;
            if (self.unwatch) {
                throw new Error(self.name + " is already mounted!");
            }
            self.vm.$set(self.vtriggers, self.name, {
                watcher: 0,
                getter: 0
            });
            self._triggers = self.vtriggers[self.name];
            self.unwatch = self.vm.$watch(self.wrapped_getter.bind(self), self.watcher.bind(self), {
                sync: true
            });
            return self;
        }
        get () {
            var self = this;
            if (!self.unwatch) {
                throw new Error("Unmounted getter: " + self.name);
            }
            self._triggers.getter;
            if (self.dirty) {
                self._triggers.watcher ^= 1;
                self.run_getter = true;
                self._triggers.watcher ^= 1;
            }
            return self.value;
        }
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.rs_getter"];
    ՐՏ_mod.export("make_ref", function(){return make_ref;}, function(ՐՏ_v){if (typeof make_ref !== "undefined") {make_ref = ՐՏ_v;};});
    ՐՏ_mod.export("RS_getter", function(){return RS_getter;}, function(ՐՏ_v){if (typeof RS_getter !== "undefined") {RS_getter = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.store3"].body = function(){
    var __name__ = "asset.store3";

    var RS_getter = ՐՏ_modules["asset.rs_getter"].RS_getter;var make_ref = ՐՏ_modules["asset.rs_getter"].make_ref;
    "\n# how modules state and computed mounted in the parent\nstate_api:\n    state {\n        mod_foo_state:{\n            submod_foo_state:{...}\n            foo_propA:...,\n            foo_propB:...,\n        },\n        mod_bar_state:{...}\n    }\n\n    computed:{\n        # `self` holds own getters\n        self: {\n            getterA\n            getterB\n        }\n        # submodules getters\n        mod_foo_computed:{\n            submod_foo_computed:{self:{...}, ...}\n            foo_getterA:...,\n            foo_getterB:...,\n        },\n        mod_bar_computed:{...},\n    }\n";
    class Getter extends RS_getter {
    }
    function print_log() {
        var args = [].slice.call(arguments, 0);
        if (window.ENV && window.ENV.debug) {
            console.log.apply(console, arguments);
        }
    }
    function to_hash(v) {
        var ret;
        if (Array.isArray(v)) {
            ret = {};
            v.forEach(function(it) {
                ret[it] = it;
            });
        } else {
            ret = v;
        }
        return ret;
    }
    function make_prop_chain(path, splitter, prefix) {
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
    function check_path(obj, path, return_prop) {
        var p, ret, last_prnt;
        if (!Array.isArray(path)) {
            path = path.split(".");
        }
        if (path.length === 1) {
            p = path[0];
            ret = obj.hasOwnProperty(p);
            if (ret && return_prop) {
                ret = obj[p];
            }
            return ret;
        }
        try {
            last_prnt = make_prop_getter(path.slice(0, -1).join("."))(obj);
        } catch (ՐՏ_Exception) {
            if (ՐՏ_Exception instanceof TypeError) {
                return false;
            } else {
                throw ՐՏ_Exception;
            }
        }
        ret = last_prnt && last_prnt.hasOwnProperty(path[path.length-1]);
        if (ret && return_prop) {
            ret = last_prnt[path[path.length-1]];
        }
        return ret;
    }
    function make_prop_getter(prop_chain) {
        var sym0, me, ret;
        if (prop_chain) {
            sym0 = prop_chain[0];
            if (sym0 !== "." && sym0 !== "[") {
                prop_chain = "." + prop_chain;
            }
        }
        me = make_prop_getter;
        if (!(ret = me._memo[prop_chain])) {
            ret = me._memo[prop_chain] = new Function("obj", "{return obj" + prop_chain + "}");
        }
        return ret;
    }
    make_prop_getter._memo = {};
    var split_modgetter_rest = (ՐՏ_15 = function split_modgetter_rest(path) {
        var mod_rest, mod_path, is_relative, modgetter, _modgetter;
        if (path[0] === "$") {
            if (path[1] === ".") {
                return [ function(mod) {
                    return mod.root || mod;
                }, path.slice(2) ];
            } else if (path[1] === "/") {
                path = path.slice(1);
            }
        }
        mod_rest = /(^\.?(\/[\w$]+)+)((\.[^.]+)+)$/.exec(path);
        if (!mod_rest) {
            return [ function(mod) {
                return mod;
            }, path ];
        } else {
            mod_path = mod_rest[1];
            if (mod_path[0] === ".") {
                is_relative = true;
                mod_path = mod_path.slice(2);
            } else {
                is_relative = false;
                mod_path = mod_path.slice(1);
            }
            modgetter = make_prop_getter(".modules" + make_prop_chain(mod_path, "/") + ".self");
            if (!is_relative) {
                _modgetter = modgetter;
                modgetter = function(mod) {
                    return _modgetter(mod.root || mod);
                };
            }
        }
        return [ modgetter, mod_rest[3].slice(1) ];
    }, Object.defineProperty(ՐՏ_15, "__doc__", {
        value: '"foo.some"  - module prop path\n"./foo/bar.baz" - relative path\n"/foo/bar.baz" - root path\n"$/foo/bar.baz" - also root path\n"$.bar" - root prop'
    }), ՐՏ_15);
    class RS_store {
        mount (istate, vtriggers_node, computed_node, path) {
            var ՐՏitr25, ՐՏidx25, ՐՏitr26, ՐՏidx26;
            var self = this;
            var map_getters, k, g, opt, raw_getters, name;
            if (!self.is_root) {
                make_ref(self.root, {
                    "_vm": "_vm"
                }, self);
            }
            self._path = path;
            self._istate = istate;
            self._vtriggers = vtriggers_node;
            self.computed = computed_node;
            istate.set(self._init_state);
            delete self._init_state;
            if (self.map_getters) {
                map_getters = self.map_getters;
                ՐՏitr25 = ՐՏ_Iterable(map_getters);
                for (ՐՏidx25 = 0; ՐՏidx25 < ՐՏitr25.length; ՐՏidx25++) {
                    k = ՐՏitr25[ՐՏidx25];
                    g = self.getter_factory(map_getters[k]);
                    opt = {
                        enumerable: true,
                        configurable: true,
                        get: g.get,
                        set: g.set
                    };
                    Object.defineProperty(self.computed.self, k, opt);
                }
            }
            if (raw_getters = self._raw_getters) {
                ՐՏitr26 = ՐՏ_Iterable(raw_getters);
                for (ՐՏidx26 = 0; ՐՏidx26 < ՐՏitr26.length; ՐՏidx26++) {
                    name = ՐՏitr26[ՐՏidx26];
                    self._mounted_getters[name] = self.mount_getter(name, raw_getters[name]);
                }
            }
            self.__mount_helpers__();
        }
        constructor (state, vc, processor) {
            var self = this;
            var vopt, vm, istate, vtriggers, computed;
            self.is_root = !!processor.root;
            if (self.is_root && !self.vue) {
                throw ReferenceError("You should first call Vue.use(Your_Store)");
            }
            self._unwatchers = [];
            self._init_state = state.call ? state() : state;
            self.processor = processor;
            self._path = null;
            self.root = null;
            self.modules = {};
            self._vm = null;
            self._istate = null;
            self._vtriggers = null;
            self._last_sp_id = 0;
            self._mutations = vc._mutations;
            self._actions = vc._actions;
            self._raw_getters = vc._getters;
            self._mounted_getters = {};
            self._2way_getters = {};
            self.computed = null;
            self.map_getters = processor.map_getters;
            self.dispatch = self.dispatch.bind(self);
            self.commit = self.commit.bind(self);
            self.processor.commit = self.commit;
            self.processor.dispatch = self.dispatch;
            self.processor.get = self.get.bind(self);
            self.processor._get = self._get.bind(self);
            self.processor.$set = self.$set.bind(self);
            self.processor.$del = self.$del.bind(self);
            make_ref(self, [ "state", "$state", "$bus", "$on", "$off", "$emit", "$watch" ], self.processor);
            if (self.is_root) {
                self.__handlers_memo__ = {};
                vopt = {};
                vopt.data = {
                    state: null,
                    triggers: {
                        self: {}
                    },
                    rspace: {}
                };
                vm = self._vm = new self.vue(vopt);
                istate = {
                    get: function() {
                        return vm.state;
                    },
                    set: function(v) {
                        vm.state = v;
                    }
                };
                vtriggers = vm.triggers;
                computed = {
                    "self": {}
                };
                Getter.__set_vm__(self._vm);
                self.mount(istate, vtriggers, computed, []);
                if (self.processor.modules) {
                    self.mount_modules(self.processor.modules);
                }
                if (self.processor._mounted) {
                    self.processor._mounted();
                }
            } else {
            }
        }
        mount_getter (name, user_getter) {
            var self = this;
            var vtriggers_self, raw_getter, raw_setter, getter, opt;
            vtriggers_self = self._vtriggers.self;
            if (user_getter instanceof Function) {
                raw_getter = user_getter;
            } else {
                raw_getter = user_getter.get;
                raw_setter = user_getter.set;
            }
            function wrapped_getter() {
                return raw_getter.call(self.processor, self.state, self.computed, self.$state, self.$computed);
            }
            getter = new Getter(name, wrapped_getter, vtriggers_self).mount();
            opt = {
                enumerable: true,
                configurable: true,
                get: getter.get.bind(getter),
                set: function() {
                    throw new Error(`Getter '${name}' isn't 2way`);
                }
            };
            if (raw_setter) {
                opt.set = function(v) {
                    raw_setter.call(self.processor, v, self.state, self.computed, self.$state, self.$computed);
                    self._2way_getters[name] = true;
                };
            }
            Object.defineProperty(self.computed.self, name, opt);
            return getter;
        }
        $del () {
            var self = this;
            self._vm.$delete.apply(self._vm, arguments);
        }
        $set () {
            var self = this;
            return self._vm.$set.apply(self._vm, arguments);
        }
        check_spath (path, return_prop) {
            var self = this;
            return check_path(self.state, path, return_prop);
        }
        check_gpath (path, return_prop) {
            var self = this;
            return check_path(self.computed.self, path, return_prop);
        }
        get state () {
            var self = this;
            return self._istate.get();
        }
        get $state () {
            var self = this;
            return (self.root || self)._istate.get();
        }
        get $computed () {
            var self = this;
            return (self.root || self).computed;
        }
        _$get (path) {
            var self = this;
            return make_prop_getter(path)(self.state);
        }
        $get (path) {
            var self = this;
            var c;
            if ((c = self.computed.self).hasOwnProperty(path)) {
                return c[path];
            } else {
                return self._$get(path);
            }
        }
        get $vm () {
            var self = this;
            return self._vm;
        }
        mount_modules (modules) {
            var ՐՏitr27, ՐՏidx27;
            var self = this;
            var k, m;
            ՐՏitr27 = ՐՏ_Iterable(modules);
            for (ՐՏidx27 = 0; ՐՏidx27 < ՐՏitr27.length; ՐՏidx27++) {
                k = ՐՏitr27[ՐՏidx27];
                m = modules[k];
                self.mount_module(m.Store && new m.Store(self.root || self) || m, k);
            }
        }
        mount_module (mod_obj, path, mod_name) {
            var ՐՏitr28, ՐՏidx28;
            var self = this;
            var path_arr, as_name, path_node, rpath_node, parent_node_getter, istate, vtriggers, inject, provide, props, p;
            path = path || "";
            if (path) {
                path_arr = path.split(".");
                if (path_arr.length === 1) {
                    path = "";
                    as_name = path_arr[0];
                } else {
                    as_name = path_arr[path_arr.length-1];
                    path = path_arr.slice(0, -1).join(".");
                }
            }
            as_name = as_name || mod_obj.__name__ || mod_obj.constructor && mod_obj.constructor.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of module: " + mod_obj);
            }
            if (path && !(path_node = self.check_spath(path, true))) {
                throw new Error("can`t mount module under path `" + path + "`, it doesn`t exist");
            }
            path_node = path_node || self.state;
            self.$set(path_node, as_name, null);
            rpath_node = self._path.concat(path_arr ? path_arr.slice(0, -1) : []);
            parent_node_getter = make_prop_getter(make_prop_chain(rpath_node));
            istate = {
                get: function() {
                    return parent_node_getter(self.$state)[as_name];
                },
                set: function(v) {
                    parent_node_getter(self.$state)[as_name] = v;
                },
                $parent_node: function() {
                    return parent_node_getter(self.$state);
                },
                $self_name: as_name
            };
            vtriggers = self._vtriggers;
            mod_name = mod_name || as_name;
            if (vtriggers.hasOwnProperty(mod_name)) {
                throw new Error("can`t mount module to _vtriggers under name `" + mod_name + "`,  name already exists");
            }
            self.$set(vtriggers, mod_name, {
                self: {}
            });
            self.$set(self.computed, mod_name, {
                self: {}
            });
            mod_obj._path = rpath_node.concat(as_name);
            mod_obj.root = self.root || self;
            mod_obj.mount(istate, vtriggers[mod_name], self.computed[mod_name], mod_obj._path);
            if (mod_obj.processor.modules) {
                mod_obj.mount_modules(mod_obj.processor.modules);
            }
            self.modules[mod_name] = Object.assign({
                self: mod_obj
            }, mod_obj.modules);
            if (inject = to_hash(mod_obj.processor.inject)) {
                provide = self.processor.provide;
                props = {};
                ՐՏitr28 = ՐՏ_Iterable(inject);
                for (ՐՏidx28 = 0; ՐՏidx28 < ՐՏitr28.length; ՐՏidx28++) {
                    p = ՐՏitr28[ՐՏidx28];
                    const to_ = p;
                    const from_ = inject[to_];
                    props[to_] = {
                        enumerable: false,
                        configurable: true,
                        get: function() {
                            return provide[from_];
                        }
                    };
                }
                Object.defineProperties(mod_obj.processor, props);
            }
            if (mod_obj.processor._mounted) {
                mod_obj.processor._mounted();
            }
        }
        _get (path) {
            var self = this;
            var mod, rest;
            [mod, rest] = split_modgetter_rest(path);
            return mod(self)._$get(rest);
        }
        get (path) {
            var self = this;
            var mod, rest;
            [mod, rest] = split_modgetter_rest(path);
            return mod(self).$get(rest);
        }
        getter_factory (path) {
            var self = this;
            var rpath, rmod, h;
            rpath = self.get_rpath(path);
            rmod = self.root || self;
            if (!(h = rmod.__handlers_memo__[rpath])) {
                h = rmod.__handlers_memo__[rpath] = rmod._getter_factory(rpath);
            }
            return h;
        }
        _getter_factory (rpath) {
            var self = this;
            var argtype, modgetter, rest, _getter;
            if (self.root) {
                throw new Error("this function is for staff only");
            }
            argtype = ՐՏ_type(rpath);
            if (argtype[0] === "S") {
                [modgetter, rest] = split_modgetter_rest(rpath);
            } else if (argtype[0] === "F") {
                modgetter = arguments[0];
                rest = arguments[1];
            } else {
                throw new Error("Wrong args: ", arguments);
            }
            _getter = make_prop_getter(rest);
            function getter() {
                var mod, c;
                mod = modgetter(self);
                if ((c = mod.computed.self).hasOwnProperty(rest)) {
                    return c[rest];
                } else {
                    return _getter(mod.state);
                }
            }
            function setter(v) {
                var mod, c, desc;
                mod = modgetter(self);
                c = mod.computed.self;
                if (desc = Object.getOwnPropertyDescriptor(c, rest)) {
                    if (desc.set) {
                        c[rest] = v;
                    } else {
                        throw new Error(`Getter '${rpath}' isn't 2way`);
                    }
                } else {
                    throw new Error(`Getter '${rpath}' doesn't exist`);
                }
            }
            getter.get = getter;
            getter.set = setter;
            getter.get_set = {
                get: getter,
                set: setter
            };
            return getter;
        }
        get_rpath (path_str) {
            var self = this;
            var is_root, path;
            is_root = self.is_root;
            path = path_str || "";
            if (ՐՏ_in(path[0], [ "/", "$" ])) {
                return path;
            } else if (path[0] === ".") {
                if (is_root) {
                    return path.slice(1);
                }
                path = path.slice(1);
            } else if (path) {
                if (is_root) {
                    return path;
                }
                path = "." + path;
            }
            return "/" + (self._path || []).join("/") + path;
        }
        handler_factory (path) {
            var self = this;
            var rpath, rmod, h;
            rpath = self.get_rpath(path);
            rmod = self.root || self;
            if (!(h = rmod.__handlers_memo__[rpath])) {
                h = rmod.__handlers_memo__[rpath] = rmod._handler_factory(rpath);
            }
            return h;
        }
        _handler_factory (rpath) {
            var self = this;
            var modgetter, rest, mutation, action;
            if (self.root) {
                throw new Error("this function is for staff only");
            }
            [modgetter, rest] = split_modgetter_rest(rpath);
            if (rest.endsWith("~")) {
                mutation = rest.slice(0, -1);
                return function() {
                    var args = [].slice.call(arguments, 0);
                    modgetter(self)._commit(mutation, ...args);
                };
            } else if (rest.endsWith("=")) {
                return function() {
                    var args = [].slice.call(arguments, 0);
                    return modgetter(self)._commit(rest, ...args);
                };
            } else if (rest.endsWith("*")) {
                action = rest.slice(0, -1);
                return function() {
                    var args = [].slice.call(arguments, 0);
                    return modgetter(self)._dispatch(action, ...args);
                };
            } else {
                return self._getter_factory(modgetter, rest);
            }
        }
        _commit (mutation) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var h, path_arr, parent, child;
            print_log("mutation: ", mutation);
            print_log("\tpayload: ", payload);
            if (h = self._mutations[mutation]) {
                return h.apply(self.processor, payload);
            } else if (mutation[mutation.length-1] === "=") {
                path_arr = mutation.slice(0, -1).split(".");
                if (path_arr.length === 1) {
                    if (self._2way_getters[path_arr[0]]) {
                        self.computed.self[path_arr[0]] = payload[0];
                        return payload[0];
                    } else {
                        parent = self.state;
                    }
                    child = path_arr[0];
                } else if (parent = self.check_spath(path_arr.slice(0, -1), true)) {
                    child = path_arr[0];
                }
                if (parent) {
                    return self.$set(parent, child, payload[0]);
                }
            }
            throw new Error("unknown mutation: " + mutation);
        }
        commit (mutation) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var modgetter;
            [modgetter, mutation] = split_modgetter_rest(mutation);
            return modgetter(self)._commit(mutation, ...payload);
        }
        _dispatch (action) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var $action, p;
            print_log("action: ", action);
            print_log("\tpayload: ", payload);
            if (!(self._actions && ($action = self._actions[action]))) {
                throw new Error("unknown action: " + action);
            }
            p = $action.apply(self.processor, payload);
            if (!(p instanceof Promise)) {
                p = Promise.resolve(p);
            }
            return p;
        }
        dispatch (action) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var modgetter, mod;
            [modgetter, action] = split_modgetter_rest(action);
            mod = modgetter(self);
            return mod._dispatch(action, ...payload);
        }
        set_mutation (h, as_name) {
            var self = this;
            as_name = as_name || h.__name__ || h.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of new mutation: " + h);
            }
            if (ՐՏ_in(as_name, self._mutations)) {
            } else if (self.hasOwnProperty(as_name)) {
                throw new Error("Bad mutation name: " + as_name);
            }
            self._mutations[as_name] = self[as_name] = h;
        }
        set_action (h, as_name) {
            var self = this;
            as_name = as_name || h.__name__ || h.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of new action: " + h);
            }
            if (ՐՏ_in(as_name, self._actions)) {
            } else if (self.hasOwnProperty(as_name)) {
                throw new Error("Bad action name: " + as_name);
            }
            self._actions[as_name] = self[as_name] = h;
        }
        __mount_helpers__ () {
            var ՐՏitr29, ՐՏidx29, ՐՏitr30, ՐՏidx30;
            var self = this;
            var k;
            if (self.is_root) {
                self.$watch = function() {
                    var args = [].slice.call(arguments, 0);
                    var off;
                    off = self._vm.$watch(...args);
                    self._unwatchers.push(off);
                    return off;
                };
                self.$bus = {
                    $on: function(e, cb) {
                        self._vm.$on(e, cb);
                        return function() {
                            self.$bus.$off(e, cb);
                        };
                    },
                    $off: function(e, cb) {
                        self._vm.$off(e, cb);
                    },
                    $emit: function() {
                        self._vm.$emit.apply(self._vm, arguments);
                    }
                };
            } else {
                ՐՏitr29 = ՐՏ_Iterable([ "$watch", "$bus" ]);
                for (ՐՏidx29 = 0; ՐՏidx29 < ՐՏitr29.length; ՐՏidx29++) {
                    k = ՐՏitr29[ՐՏidx29];
                    self[k] = self.root[k];
                }
            }
            ՐՏitr30 = ՐՏ_Iterable(self.$bus);
            for (ՐՏidx30 = 0; ՐՏidx30 < ՐՏitr30.length; ՐՏidx30++) {
                k = ՐՏitr30[ՐՏidx30];
                self[k] = self.$bus[k];
            }
        }
        static _map_opt ($store, $map_opts, $opts, copy_opt) {
            var ՐՏitr32, ՐՏidx32, ՐՏitr33, ՐՏidx33;
            var is_mutation_re, is_action_re, injectors, k, opt, map_to, map_from, map_to_split, map_to_meth, store_meth, modgetter, rest, store_mod, handler, action, mutation;
            is_mutation_re = /(.+)(~|=)$/;
            is_action_re = /(.+)\*$/;
            if (!$map_opts) {
                return;
            }
            injectors = {
                "*": function(f) {
                    return function() {
                        f.call(this, $store.dispatch, ...arguments);
                    };
                },
                "~": function(f) {
                    return function() {
                        f.call(this, $store.commit, ...arguments);
                    };
                }
            };
            if (Array.isArray($map_opts)) {
                $map_opts = (function() {
                    var ՐՏidx31, ՐՏitr31 = ՐՏ_Iterable($map_opts), ՐՏres = {}, k;
                    for (ՐՏidx31 = 0; ՐՏidx31 < ՐՏitr31.length; ՐՏidx31++) {
                        k = ՐՏitr31[ՐՏidx31];
                        ՐՏres[k] = k;
                    }
                    return ՐՏres;
                })();
            }
            if (copy_opt) {
                ՐՏitr32 = ՐՏ_Iterable([ "methods", "computed" ]);
                for (ՐՏidx32 = 0; ՐՏidx32 < ՐՏitr32.length; ՐՏidx32++) {
                    opt = ՐՏitr32[ՐՏidx32];
                    $opts[opt] = Object.assign({}, $opts[opt]);
                }
            }
            ՐՏitr33 = ՐՏ_Iterable($map_opts);
            for (ՐՏidx33 = 0; ՐՏidx33 < ՐՏitr33.length; ՐՏidx33++) {
                map_to = ՐՏitr33[ՐՏidx33];
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
                    [modgetter, rest] = split_modgetter_rest(map_from);
                    store_mod = modgetter($store);
                    if (rest === "$bus") {
                        $opts["computed"][map_to] = function() {
                            return modgetter($store).$bus;
                        };
                        continue;
                    }
                    handler = $store.handler_factory(map_from);
                    if (action = is_action_re.exec(rest)) {
                        action = action[1];
                        if (!(store_mod._actions && ՐՏ_in(action, store_mod._actions))) {
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
                        if (mutation[2] === "=") {
                            if (!store_mod.check_spath(mutation[1])) {
                                throw ReferenceError("unknown mutation in `map_store`: " + map_from);
                            }
                        } else {
                            mutation = mutation[1];
                            if (!(ՐՏ_in(mutation, store_mod._mutations))) {
                                throw ReferenceError("unknown mutation in `map_store`: " + map_from);
                            }
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
                    } else if (rest[rest.length-1] === "=") {
                        rest = rest.slice(0, -1);
                        if (store_mod.check_spath(rest)) {
                            $opts["methods"][map_to] = handler.get_set;
                        }
                    } else if (store_mod.check_gpath(rest) || store_mod.check_spath(rest)) {
                        $opts["computed"][map_to] = handler.get_set;
                    } else {
                        throw ReferenceError("Can`t map `" + map_from + "` to `" + map_to + "`");
                    }
                }
            }
        }
        static before_create () {
            var map_store, is_mutation_re, is_action_re, $opts, $map_opts, store;
            map_store = "map_store";
            is_mutation_re = /(.+)(~|=)$/;
            is_action_re = /(.+)\*$/;
            $opts = this.$options;
            $map_opts = $opts[map_store] || $opts.propsData && $opts.propsData[map_store];
            store = $opts.store || $opts.parent && $opts.parent.$store;
            if (store) {
                this.$store = store;
            }
            if (!$map_opts) {
                return;
            }
            if (!store) {
                throw new Error("Store is not found");
            }
            RS_store._map_opt(store, $map_opts, $opts, true);
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
        $get_space (data, id) {
            var self = this;
            var root, vm, node;
            root = self.root || self;
            vm = root._vm;
            if (!id) {
                ++root._last_sp_id;
                id = "_#" + root._last_sp_id;
                if (vm.rspace.hasOwnProperty(id)) {
                    throw new Error(`autogenerated id = ${id} already exists!`);
                }
            }
            vm.$set(vm.rspace, id, {
                data: data || {},
                triggers: {}
            });
            node = vm.rspace[id];
            return {
                data: node.data,
                triggers: node.triggers,
                id: id
            };
        }
        $free_space (id) {
            var self = this;
            var vm;
            vm = self._vm;
            vm.$delete(vm.rspace, id);
        }
        $unwatch_all () {
            var ՐՏitr34, ՐՏidx34, ՐՏitr35, ՐՏidx35;
            var self = this;
            var mgetters, name, off;
            mgetters = self._mounted_getters;
            if (!mgetters) {
                return;
            }
            ՐՏitr34 = ՐՏ_Iterable(self.modules || []);
            for (ՐՏidx34 = 0; ՐՏidx34 < ՐՏitr34.length; ՐՏidx34++) {
                name = ՐՏitr34[ՐՏidx34];
                self.modules[name].self.$unwatch_all();
            }
            Object.keys(mgetters).forEach(function(k) {
                mgetters[k].unmount();
            });
            delete self._mounted_getters;
            ՐՏitr35 = ՐՏ_Iterable(self._unwatchers);
            for (ՐՏidx35 = 0; ՐՏidx35 < ՐՏitr35.length; ՐՏidx35++) {
                off = ՐՏitr35[ՐՏidx35];
                off();
            }
            delete self._unwatchers;
        }
        $destroy () {
            var ՐՏitr36, ՐՏidx36;
            var self = this;
            var name, node;
            self.$unwatch_all();
            ՐՏitr36 = ՐՏ_Iterable(self.modules || []);
            for (ՐՏidx36 = 0; ՐՏidx36 < ՐՏitr36.length; ՐՏidx36++) {
                name = ՐՏitr36[ՐՏidx36];
                self.modules[name].self.$destroy();
                self.$del(self._vtriggers, name);
                delete self.modules[name];
            }
            self.$del(self._vtriggers, "self");
            delete self._vtriggers;
            if (!self.is_root) {
                node = self._istate.$parent_node();
                name = self._istate.$self_name;
                self.$del(node, name);
            } else {
                self._vm.$destroy;
            }
            delete self.computed;
        }
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.store3"];
    ՐՏ_mod.export("Getter", function(){return Getter;}, function(ՐՏ_v){if (typeof Getter !== "undefined") {Getter = ՐՏ_v;};});
    ՐՏ_mod.export("print_log", function(){return print_log;}, function(ՐՏ_v){if (typeof print_log !== "undefined") {print_log = ՐՏ_v;};});
    ՐՏ_mod.export("to_hash", function(){return to_hash;}, function(ՐՏ_v){if (typeof to_hash !== "undefined") {to_hash = ՐՏ_v;};});
    ՐՏ_mod.export("make_prop_chain", function(){return make_prop_chain;}, function(ՐՏ_v){if (typeof make_prop_chain !== "undefined") {make_prop_chain = ՐՏ_v;};});
    ՐՏ_mod.export("check_path", function(){return check_path;}, function(ՐՏ_v){if (typeof check_path !== "undefined") {check_path = ՐՏ_v;};});
    ՐՏ_mod.export("make_prop_getter", function(){return make_prop_getter;}, function(ՐՏ_v){if (typeof make_prop_getter !== "undefined") {make_prop_getter = ՐՏ_v;};});
    ՐՏ_mod.export("split_modgetter_rest", function(){return split_modgetter_rest;}, function(ՐՏ_v){if (typeof split_modgetter_rest !== "undefined") {split_modgetter_rest = ՐՏ_v;};});
    ՐՏ_mod.export("RS_store", function(){return RS_store;}, function(ՐՏ_v){if (typeof RS_store !== "undefined") {RS_store = ՐՏ_v;};});
    ՐՏ_mod.export("make_ref", function(){return make_ref;}, function(ՐՏ_v){if (typeof make_ref !== "undefined") {make_ref = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.html_ml"].body = function(){
    var __name__ = "asset.html_ml";

    function markup() {
        return "\n<!doctype>- *\n<!DOCTYPE>- *\n<a>+ *\n<abbr> *\n<acronym> *\n<address> *\n<applet> *\n<area> *\n<article> *\n<aside> *\n<audio> *\n<b> *\n<base> *\n<basefont> *\n<bdi> *\n<bdo> *\n<big> *\n<blockquote> *\n<body> *\n<br> *\n<button> *\n<canvas>+ *\n<caption> *\n<center> *\n<cite> *\n<code> *\n<col> *\n<colgroup> *\n<command> *\n<datalist> *\n<dd> *\n<del> *\n<details> *\n<dfn> *\n<div>+ *\n<dl> *\n<dt> *\n<em> *\n<embed> *\n<fieldset> *\n<figcaption> *\n<figure> *\n<font> *\n<footer> *\n<form> *\n<frame> *\n<frameset> *\n<h1> *\n<h2> *\n<h3> *\n<h4> *\n<h5> *\n<h6> *\n<head> *\n<header> *\n<hgroup> *\n<hr> *\n<html> *\n<i>+ *\n<iframe>+ *\n<img> *\n<input> *\n<ins> *\n<kbd> *\n<keygen> *\n<label>+ *\n<legend> *\n<li> *\n<link> *\n<map> *\n<mark> *\n<menu> *\n<meta> *\n<meter> *\n<nav> *\n<noscript> *\n<object> *\n<ol> *\n<optgroup> *\n<option> *\n<output> *\n<p> *\n<param> *\n<pre> *\n<progress> *\n<q> *\n<rp> *\n<rt> *\n<ruby> *\n<s> *\n<samp> *\n<script>+ *\n<section> *\n<select> *\n<small> *\n<source> *\n<span> *\n<strike> *\n<strong> *\n<style> *\n<sub> *\n<summary> *\n<sup> *\n<svg> *\n<table> *\n<tbody> *\n<td> *\n<textarea>+ *\n<tfoot> *\n<th> *\n<thead> *\n<time> *\n<title> *\n<tr> *\n<track> *\n<tt> *\n<u> *\n<ul>+ *\n<var> *\n<video> *\n<wbr> *\n<template>+ *\n<component>+ *\n<slot>+ *\n<collapser>+ *\n<rubber-wrapper>+ *\n<grip>+ *\n<link_hor_grip>+ *\n<grip_one>+ *\n<transition>+ *\n<input_option>+ *\n<option_select>+ *\n<input_bool>+ *\n<tree_view>+ *\n<vl_form>+ *\n<input_file>+ *\n<input_file_img>+ *\n<toolbar>+ *\n<*>+ *\n";
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.html_ml"];
    ՐՏ_mod.export("markup", function(){return markup;}, function(ՐՏ_v){if (typeof markup !== "undefined") {markup = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.vuepy_parser"].body = function(){
    var __name__ = "asset.vuepy_parser";

    var _rml_test_str_;
    function strip_quotes(s) {
        if (s[0] === "'" || s[0] === '"') {
            return s.slice(1, -1);
        }
        return s;
    }
    function attrs2hash(attr_list) {
        var ret;
        ret = {};
        attr_list.forEach(function(it) {
            ret[it.name] = it;
        });
        return ret;
    }
    function attrs_assign(attrs_base, attrs_extra) {
        var ՐՏitr37, ՐՏidx37;
        var attrs_hash, ret, k;
        if (!(attrs_base && len(attrs_base))) {
            return attrs_extra.slice(0);
        } else if (!(attrs_extra && len(attrs_extra))) {
            return attrs_base.slice(0);
        }
        attrs_hash = Object.assign(attrs2hash(attrs_base), attrs2hash(attrs_extra));
        ret = [];
        ՐՏitr37 = ՐՏ_Iterable(attrs_hash);
        for (ՐՏidx37 = 0; ՐՏidx37 < ՐՏitr37.length; ՐՏidx37++) {
            k = ՐՏitr37[ՐՏidx37];
            ret.push(attrs_hash[k]);
        }
        return ret;
    }
    class ParserError extends Error {
        constructor (message, line, col, pos, is_eof) {
            super();
            var self = this;
            self.message = message;
            self.line = line;
            self.col = col;
            self.pos = pos;
            self.stack = new Error().stack;
            self.is_eof = is_eof;
        }
    }
    class OutputError extends Error {
        constructor (message, line, col, pos) {
            super();
            var self = this;
            var lcp;
            self.message = message;
            if (ՐՏ_type(line) === "Array") {
                lcp = line;
                line = lcp[0];
                col = lcp[1];
                pos = lcp[2];
            }
            self.line = line;
            self.col = col;
            self.pos = pos;
            self.stack = new Error().stack;
        }
    }
    class Stream {
        constructor (src) {
            var self = this;
            self.RE = /(( *).*)(\n|$)/g;
            self.src = src;
            self.line = 0;
            self.col = 0;
            self.string = null;
            self._string = "";
            self.indent = 0;
            self.is_last_line = false;
            self.start_line_pos = 0;
        }
        pos () {
            var self = this;
            return self.start_line_pos + self.col;
        }
        eof () {
            var self = this;
            return self.is_last_line && self.eol();
        }
        next_line () {
            var self = this;
            var ret;
            while (!((ret = self._next_line()) && ret.trim() || self.eof())) {
                self.eat_space();
            }
            return ret;
        }
        _next_line () {
            var self = this;
            var ret;
            if (self.is_last_line) {
                return null;
            }
            self.start_line_pos += self._string.length;
            ret = self.RE.exec(self.src);
            self._string = ret[0];
            self.indent = ret[2].length;
            self.string = ret[1];
            self.is_last_line = !ret[3];
            ++self.line;
            self.col = 0;
            return ret[1];
        }
        match (m, eat) {
            var self = this;
            var ret;
            if (ՐՏ_type(m) === "String") {
                m = new RegExp("^" + m);
            }
            ret = m.exec(self.string.slice(self.col));
            if (ret && eat) {
                self.col += ret[0].length;
            }
            return ret;
        }
        eol () {
            var self = this;
            return self.col >= self.string.length;
        }
        sol () {
            var self = this;
            return self.col === 0;
        }
        eat_space () {
            var self = this;
            var ret;
            ret = self.match(/^ */, true);
            return ret && ret[0];
        }
        peek () {
            var self = this;
            return self.string.charAt(self.col);
        }
        eat (ch) {
            var self = this;
            var _ch;
            if (!ch) {
                return false;
            }
            _ch = self.string.charAt(self.col);
            if ((_ch === ch || typeof _ch === "object" && ՐՏ_eq(_ch, ch))) {
                ++self.col;
                return true;
            }
            return false;
        }
        next () {
            var self = this;
            var _ch;
            _ch = self.string.charAt(self.col);
            if (_ch) {
                ++self.col;
                return _ch;
            }
            return null;
        }
        eat_to_end () {
            var self = this;
            var ret;
            ret = self.string.slice(self.col);
            self.col = self.string.length;
            return ret;
        }
        rest () {
            var self = this;
            return self.src.slice(self.pos());
        }
    }
    class Parser {
        constructor () {
            var self = this;
            self.src = null;
            self.indent_len = null;
            self.cur_level = 0;
            self.stream = null;
            self.chunk_tbl = null;
            self.templ_tbl = null;
            self.var_tbl = null;
            self.compile_requires = null;
        }
        raise_err (msg) {
            var self = this;
            var S;
            S = self.stream;
            throw new ParserError(msg, S.line, S.col, S.pos(), S.eof());
        }
        eol_or_comment_expect () {
            var self = this;
            if (!self.stream.match(/^\s*(#.*)?$/, true)) {
                self.raise_err("Expected end of the line");
            }
        }
        eol_expect () {
            var self = this;
            if (!self.stream.match(/^\s*$/, true)) {
                self.raise_err("Expected end of the line");
            }
        }
        expect (m, err) {
            var self = this;
            var ret;
            if (!(ret = self.stream.match(m, true))) {
                self.raise_err("Expected: " + (err || m));
            }
            return ret;
        }
        read_string (quote, force_strip) {
            var self = this;
            var S, q, quote_map, m, strip, ret, cur, ln, s;
            S = self.stream;
            if (q = S.match(/^(''''''|""""""|(''(?!')|""(?!")))/, true)) {
                return q[2] || "";
            }
            quote_map = {
                "'": new RegExp("^('''(?!')|'(?!'))"),
                '"': new RegExp('^("""(?!")|"(?!"))')
            };
            quote = S.match(quote_map[quote], true)[0];
            if (quote.length === 3) {
                m = /^([^\\']|\\('{1,3}|.)|'{1,2}(?!'))*/;
                strip = true;
            } else {
                strip = force_strip || false;
                m = /^([^\\']|\\('|.))*/;
            }
            if (quote[0] !== "'") {
                m = new RegExp(m.source.replace(/'/g, '"'));
            }
            ret = [];
            cur = "";
            while (true) {
                if (S.eol()) {
                    ln = S._next_line();
                    if (ln === null) {
                        break;
                    }
                    if (!ln.trim()) {
                        S.eat_space();
                        ret.push(ln);
                        continue;
                    }
                }
                s = S.match(m, true);
                ret.push(s[0]);
                if (!S.eol()) {
                    break;
                }
            }
            self.expect(quote);
            ret = ret.join("\n").replace(new RegExp("\\\\" + quote, "g"), quote).replace(new RegExp("\\\\\\\\" + quote, "g"), "\\" + quote);
            if (!strip) {
                ret = quote[0] + ret + quote[0];
            }
            return ret;
        }
        read_var_def () {
            var self = this;
            var S, q;
            S = self.stream;
            if (q = S.match(/^('|")/)) {
                return self.read_string(q[1]);
            } else {
                return S.eat_to_end();
            }
        }
        parse_tag () {
            var self = this;
            var ret, S, paren_or_colon, eof, attr, comma_or_paren;
            function read_attr() {
                var ret, q;
                ret = {
                    name: null,
                    value: null,
                    type: null
                };
                ret.name = self.expect(/^[\w:`~!@#$%^&*\.\-+{[\]}]+/, "Attr name was expected")[0];
                if (S.match(/^\s*=\s*/, true)) {
                    if (q = S.match(/^('|")/)) {
                        ret.value = self.read_string(q[1]);
                        ret.type = "string";
                    } else if (S.match(/^\$/, true)) {
                        ret.value = "$" + self.expect(/^\w+/, "variable name")[0];
                        ret.type = "var_ref";
                    } else {
                        self.raise_err("Unexpected attribute value (expected 'string' or $variable)");
                    }
                }
                return ret;
            }
            ret = {
                name: null,
                attrs: []
            };
            S = self.stream;
            S.eat_space();
            ret.name = self.expect(/^[\w\-]+/, "Invalid tag name")[0];
            S.eat_space();
            paren_or_colon = self.expect(/^(\(|:)/, "Paren or colon was expected")[1];
            if (paren_or_colon === ":") {
                return ret;
            }
            if (!S.match(/^\s*\)/, true)) {
                function eat_space_comment() {
                    S.eat_space();
                    while (!S.eof() && (S.eol() || S.match(/^(\\\s*|#.*)$/, true))) {
                        S.next_line();
                    }
                    S.eat_space();
                }
                while (!(eof = S.eof())) {
                    eat_space_comment();
                    attr = read_attr();
                    if (attr.name.startsWith("%")) {
                        ret[attr.name] = attr.value === null ? true : strip_quotes(attr.value);
                    } else {
                        ret.attrs.push(attr);
                    }
                    eat_space_comment();
                    comma_or_paren = self.expect(/^\s*(,\s*\)|\)|,)/, "Paren or comma was expected")[1];
                    if (comma_or_paren[comma_or_paren.length-1] === ")") {
                        break;
                    } else if (comma_or_paren[0] === ",") {
                        eat_space_comment();
                        if (S.match(/^\)/, true)) {
                            break;
                        }
                    }
                }
                if (eof) {
                    self.raise_err("Unexpected EOF");
                }
            }
            self.expect(/^\s*:/, "Colon was expected");
            if (!len(ret.attrs)) {
                ret.attrs = null;
            }
            return ret;
        }
        read_verbatim (re_stop) {
            var self = this;
            var S, barier_level, ret, re_indent, eof, empty_line;
            S = self.stream;
            barier_level = self.cur_level;
            ret = [];
            re_indent = new RegExp("^\\s{" + barier_level * self.indent_len + "}");
            while (!(eof = S.eof())) {
                if (empty_line = S.match(/^\s*$/, true)) {
                    ret.push(empty_line[0]);
                    S._next_line();
                    continue;
                }
                if (!S.match(re_indent, true) || re_stop && S.match(re_stop, true)) {
                    break;
                }
                ret.push(S.eat_to_end());
                S._next_line();
            }
            return ret.join("\n");
        }
        tokenize () {
            var self = this;
            var S, start_end, ret, q, var_name;
            S = self.stream;
            start_end = {
                s: [ S.line, S.col, S.pos() ],
                e: null
            };
            if (S.match(/^\s*#/, true)) {
                ret = {
                    _type: "comment",
                    value: S.eat_to_end()
                };
            } else if (q = S.match(/^('|")/)) {
                ret = {
                    _type: "string",
                    value: self.read_string(q[1])
                };
            } else if (S.match(/^\s*\$/, true)) {
                if (var_name = S.match(/^(\w+)\s*=\s*/, true)) {
                    ret = {
                        _type: "var_def",
                        name: "$" + var_name[1],
                        value: self.read_var_def()
                    };
                } else if (var_name = S.match(/^(\w+)/, true)) {
                    ret = {
                        _type: "var_ref",
                        name: "$" + var_name[1]
                    };
                } else {
                    self.raise_err("Unexpected syntax");
                }
            } else if (S.match(/^\s*def\s+/, true)) {
                ret = Object.assign({
                    _type: "def"
                }, self.parse_tag());
            } else if (S.match(/^\s*v-def\s+/, true)) {
                ret = Object.assign({
                    _type: "v-def"
                }, self.parse_tag());
            } else if (S.match(/^\s*\+{3}/, true)) {
                ret = {
                    _type: "beg",
                    value: "+++"
                };
            } else if (S.match(/^\s*---/, true)) {
                ret = {
                    _type: "end",
                    value: "---"
                };
            } else {
                ret = Object.assign({
                    _type: "tag"
                }, self.parse_tag());
            }
            start_end.e = [ S.line, S.col, S.pos() ];
            ret._pos = start_end;
            return ret;
        }
        dedent (node, to_level) {
            var self = this;
            while (true) {
                if (node.scope_level <= to_level) {
                    break;
                }
                node = node.parent;
            }
            return node;
        }
        walk_up (node, up_level) {
            var self = this;
            if (up_level === 0) {
                return node;
            }
            up_level = up_level < 0 ? -up_level : up_level;
            while (up_level) {
                node = node.parent;
                --up_level;
            }
            return node;
        }
        parse (rml) {
            var ՐՏ_16, ՐՏ_17;
            var self = this;
            var parent, main, child_nodes, S, sol, dlt, chunk, compiler, token, node;
            self.src = rml;
            self.stream = new Stream(rml);
            self._init_indent_len();
            self.chunk_tbl = {
                "v-pyj": {
                    "%tag": "script",
                    "%verbatim": true
                },
                "v-css": {
                    "%tag": "css",
                    "%verbatim": true
                }
            };
            self.templ_tbl = {};
            self.var_tbl = {};
            self.compile_requires = [];
            main = parent = {
                _type: "main",
                child_nodes: [],
                scope_level: 0,
                scoped_by: "indent"
            };
            child_nodes = parent.child_nodes;
            S = self.stream;
            S.next_line();
            function push_scope(node, scoped_by, scope_level) {
                if (self.allow_child(node)) {
                    if (!node.child_nodes) {
                        node.child_nodes = [];
                    }
                    child_nodes = node.child_nodes;
                    if (scoped_by) {
                        node.scoped_by = scoped_by;
                        node.scope_level = scope_level;
                    }
                    parent = node;
                } else {
                    self.raise_err("Element `" + (node.name || node._type) + "` couldn`t have a child");
                }
            }
            while (!S.eof()) {
                if (S.eol()) {
                    S.next_line();
                }
                sol = S.sol();
                if (sol) {
                    dlt = self.hold_indent();
                    if (dlt === 1) {
                        push_scope(node, "indent", self.cur_level);
                        chunk = self.chunk_tbl[node.name];
                        compiler = node["%compiler"] || chunk && chunk["%compiler"];
                        if (compiler) {
                            self.compile_requires.push({
                                node: node,
                                compiler: compiler
                            });
                        }
                        if (node["%verbatim"] || chunk && chunk["%verbatim"]) {
                            node.child_nodes = [ self.read_verbatim() ];
                            continue;
                        }
                    } else if (dlt < 0 || dlt === 0 && node && node._inline) {
                        parent = self.dedent(parent, self.cur_level);
                        child_nodes = parent.child_nodes;
                    }
                }
                S.eat_space();
                if (S.eol()) {
                    continue;
                }
                token = self.tokenize();
                token._inline = !sol;
                if (token._inline && token._type !== "comment") {
                    push_scope(node);
                }
                if (token._type === "beg") {
                    if (!sol) {
                        self.raise_err("Unexpected placement of `+++`");
                    }
                    self.eol_or_comment_expect();
                    chunk = self.chunk_tbl[node.name];
                    compiler = node["%compiler"] || chunk && chunk["%compiler"];
                    if (compiler) {
                        self.compile_requires.push({
                            node: node,
                            compiler: compiler
                        });
                    }
                    if (node["%verbatim"] || chunk && chunk["%verbatim"]) {
                        S._next_line();
                        node.child_nodes = [ self.read_verbatim(/^---\s*#*.*$/) ];
                        node.scoped_by = "beg_end";
                        node.scope_level = self.cur_level;
                    } else {
                        push_scope(node, "beg_end", self.cur_level);
                    }
                } else if (token._type === "end") {
                    if (!sol || ((ՐՏ_16 = parent.scope_level) !== (ՐՏ_17 = self.cur_level) && (typeof ՐՏ_16 !== "object" || !ՐՏ_eq(ՐՏ_16, ՐՏ_17)))) {
                        self.raise_err("Unexpected placement of `---`");
                    }
                    if (parent.scoped_by !== "beg_end") {
                        self.raise_err("Mismatched end block `---`");
                    }
                    parent = self.walk_up(parent, 1);
                    child_nodes = parent.child_nodes;
                } else if (token._type === "comment") {
                    token.parent = parent;
                    if (!token._inline) {
                        child_nodes.push(token);
                        node = token;
                    } else if (node._type === "tag") {
                        token.parent = node;
                        node.child_nodes = [ token ];
                    } else {
                        child_nodes.push(token);
                    }
                } else if (token._type === "string") {
                    token.parent = parent;
                    child_nodes.push(token);
                    node = token;
                } else if (token._type === "def") {
                    if (!sol) {
                        self.raise_err("`def` block should be at new line");
                    }
                    token.parent = parent;
                    node = self.chunk_tbl[token.name] = token;
                } else if (token._type === "v-def") {
                    if (!(sol && parent._type === "main")) {
                        self.raise_err("`v-def` block should be at new line and in the main scope");
                    }
                    token.parent = parent;
                    node = self.templ_tbl[token.name] = token;
                } else if (token._type === "var_def") {
                    if (!sol) {
                        self.raise_err("Variable definition should be at new line");
                    }
                    token.parent = parent;
                    node = self.var_tbl[token.name] = token.value;
                    node = token;
                } else if (token._type === "var_ref") {
                    token.parent = parent;
                    child_nodes.push(token);
                    node = token;
                } else if (token._type === "tag") {
                    token.parent = parent;
                    child_nodes.push(token);
                    node = token;
                } else {
                    self.raise_err("Unexpected syntax");
                }
            }
            return [main.child_nodes, self.var_tbl, self.chunk_tbl, self.compile_requires, self.templ_tbl];
        }
        _init_indent_len () {
            var self = this;
            self.indent_len = 4;
        }
        hold_indent () {
            var self = this;
            var ind_len, level, dlt_level;
            ind_len = self.stream.indent;
            if (ind_len % self.indent_len) {
                self.raise_err("Inconsistent indentation");
            }
            level = ind_len / self.indent_len || 0;
            dlt_level = level - self.cur_level;
            if (dlt_level > 1) {
                self.raise_err("Inconsistent indentation");
            }
            self.cur_level = level;
            return dlt_level;
        }
        allow_child (node) {
            var self = this;
            if (node._type === "main" || node._type === "v-def" || node._type === "def" && !node["%tag"]) {
                return true;
            }
            if (node._type === "tag" && (!self.chunk_tbl[node.name] || self.chunk_tbl[node.name]["%tag"])) {
                return true;
            }
            return false;
        }
    }
    class RML_compiler {
        constructor (markup, opt) {
            var self = this;
            self.markup = markup;
            self.compilers = opt.compilers || {};
            self.save_v_pyj = opt.save_v_pyj || function() {
                return;
            };
        }
        print_attrs (attrs, vars, tag_pos, ind) {
            var ՐՏitr38, ՐՏidx38;
            var self = this;
            var num_attrs, ret, pref, it, name, val;
            vars = vars || null;
            if (!(attrs && (num_attrs = len(attrs)))) {
                return "";
            }
            ret = [ " " ];
            pref = !ind || num_attrs <= 5 ? "" : "\n" + ind;
            ՐՏitr38 = ՐՏ_Iterable(attrs);
            for (ՐՏidx38 = 0; ՐՏidx38 < ՐՏitr38.length; ՐՏidx38++) {
                it = ՐՏitr38[ՐՏidx38];
                name = it.name;
                val = it.value;
                if (vars) {
                    name = self.mount_vars(name, vars, tag_pos);
                    val = self.mount_vars(val, vars, tag_pos);
                }
                ret.push(pref + name);
                if (ՐՏ_type(val) === "String") {
                    ret.push("= " + val);
                }
            }
            return ret.join(" ");
        }
        mount_vars (s, vars_rbl, tag_pos) {
            var self = this;
            var ret;
            function replacer(p0, p1, p2) {
                var v, s;
                v = vars_rbl[p2] || null;
                if (v === null) {
                    throw new OutputError("No var named `" + p2 + "`", tag_pos);
                }
                s = p1 + (vars_rbl[p2] || p2);
                return s;
            }
            if (!s) {
                return s;
            }
            ret = s.replace(/(^|(?!\\)\W)(\$\w+)/gm, replacer);
            return ret.replace(/\\\$/g, "$");
        }
        print_tag (tag, ind, vars, chunks, stack) {
            var ՐՏitr39, ՐՏidx39, ՐՏitr40, ՐՏidx40;
            var self = this;
            var ret, child_inline, name, close_tag, is_verbatim, is_alias, is_chunk, child_nodes, start_content, child_ind, tag_prop, close_meth, i, t, has_child, content;
            ind = ind || "";
            vars = vars && vars instanceof Object && Object.keys(vars).length && vars || null;
            chunks = chunks || null;
            stack = stack || [];
            ret = tag._inline ? "" : "\n" + ind;
            if (tag._type === "comment") {
                return "";
            }
            if (tag._type === "string") {
                ret += strip_quotes(tag.value);
                return ret;
            }
            if (tag._type === "var_ref") {
                ret += self.mount_vars(tag.name, vars, tag._pos.s);
                return ret;
            }
            child_inline = tag.child_nodes && tag.child_nodes[0] && tag.child_nodes[0]._inline;
            name = tag.name;
            if (vars) {
                name = self.mount_vars(name, vars, tag._pos.s);
            }
            close_tag = {};
            is_verbatim = tag["%verbatim"];
            if (chunks && chunks[name]) {
                if (chunks[name]["%tag"]) {
                    is_alias = true;
                    is_verbatim = is_verbatim || chunks[name]["%verbatim"];
                } else {
                    is_chunk = true;
                }
            }
            if (is_chunk) {
                if (ՐՏ_in(name, stack)) {
                    throw new OutputError("Circular reference detected in chunk `" + name + "`", tag._pos.s[0], tag._pos.s[1], tag._pos.s[2]);
                }
                stack.push(name);
                child_nodes = chunks[name].child_nodes;
                ret = [];
                start_content = "";
                child_ind = ind;
                close_tag[false] = "";
                close_tag[true] = "";
            } else {
                if (is_alias) {
                    name = chunks[name]["%tag"];
                    tag.attrs = attrs_assign(chunks[tag.name].attrs, tag.attrs);
                }
                child_nodes = tag.child_nodes;
                child_ind = ind + (child_inline ? "" : "    ");
                start_content = ">";
                ret = [ tag._inline ? "" : "\n" + ind, "<", name, self.print_attrs(tag.attrs, vars, tag._pos.s, tag._inline ? null : ind + "    ") ];
                tag_prop = self.markup[name] || self.markup["*"];
                close_meth = null;
                if (tag_prop) {
                    close_meth = tag_prop.close_meth;
                    if (!close_meth) {
                        close_tag[false] = "/>";
                        close_tag[true] = (child_inline ? "" : "\n" + ind) + "</" + name + ">";
                    } else if (close_meth === "+") {
                        close_tag[false] = "></" + name + ">";
                        close_tag[true] = (child_inline ? "" : "\n" + ind) + "</" + name + ">";
                    } else if (close_meth === "-") {
                        close_tag[false] = ">";
                        close_tag[true] = ">";
                    }
                } else {
                    throw new OutputError("Invalid tag: " + name);
                }
            }
            if (child_nodes) {
                i = 0;
                ՐՏitr39 = ՐՏ_Iterable(child_nodes);
                for (ՐՏidx39 = 0; ՐՏidx39 < ՐՏitr39.length; ՐՏidx39++) {
                    t = ՐՏitr39[ՐՏidx39];
                    if (t._type !== "comment") {
                        break;
                    }
                    ++i;
                }
                child_nodes = child_nodes.slice(i);
                has_child = !!len(child_nodes);
            } else {
                has_child = false;
            }
            if (has_child) {
                ret.push(start_content);
                if (is_verbatim) {
                    content = child_nodes[0].split("\n");
                    ret.push("\n" + child_ind);
                    ret.push(content.join("\n" + child_ind));
                } else {
                    ՐՏitr40 = ՐՏ_Iterable(child_nodes);
                    for (ՐՏidx40 = 0; ՐՏidx40 < ՐՏitr40.length; ՐՏidx40++) {
                        t = ՐՏitr40[ՐՏidx40];
                        ret.push(self.print_tag(t, child_ind, vars, chunks, stack));
                    }
                }
            }
            ret.push(close_tag[has_child]);
            if (is_chunk) {
                stack.pop();
            }
            return ret.join("");
        }
        pre_compile (src) {
            var ՐՏitr41, ՐՏidx41, ՐՏitr42, ՐՏidx42;
            var self = this;
            var p, content, vars, chunks, nodes_to_compile, templ_tbl, out_v_pyj, v_pyj_tag, v_pyj_script, templ_name, rml_templ, node, templ_str, templ_str_len, templ_str_lines_num, out_v_pyj_str, v_css_tag, out_v_css, v_css_str, store_in, ret;
            p = new Parser();
            [content, vars, chunks, nodes_to_compile, templ_tbl] = p.parse(src);
            out_v_pyj = [];
            v_pyj_tag = content.find(function(it) {
                return it.name === "v-pyj";
            });
            if (v_pyj_tag && v_pyj_tag.child_nodes && (v_pyj_script = v_pyj_tag.child_nodes[0])) {
                ՐՏitr41 = ՐՏ_Iterable(templ_tbl);
                for (ՐՏidx41 = 0; ՐՏidx41 < ՐՏitr41.length; ՐՏidx41++) {
                    templ_name = ՐՏitr41[ՐՏidx41];
                    rml_templ = templ_tbl[templ_name];
                    out_v_pyj.push(templ_name + '= """');
                    ՐՏitr42 = ՐՏ_Iterable(rml_templ.child_nodes);
                    for (ՐՏidx42 = 0; ՐՏidx42 < ՐՏitr42.length; ՐՏidx42++) {
                        node = ՐՏitr42[ՐՏidx42];
                        out_v_pyj.push(self.print_tag(node, null, vars, chunks));
                    }
                    out_v_pyj.push('\n"""\n\n');
                }
                templ_str = out_v_pyj.join("");
                templ_str_len = len(templ_str);
                templ_str_lines_num = len(templ_str.split("\n"));
                v_pyj_tag._lines_delta = -templ_str_lines_num + 1;
                v_pyj_tag._pos_delta = -templ_str_len;
                out_v_pyj_str = templ_str + v_pyj_script;
            }
            v_css_tag = content.find(function(it) {
                return it.name === "v-css";
            });
            out_v_css = null;
            if (v_css_tag && v_css_tag.child_nodes && (v_css_str = v_css_tag.child_nodes[0])) {
                store_in = null;
                if (v_css_tag.attrs && len(v_css_tag.attrs)) {
                    if (v_css_tag.attrs[0].name === "store_in") {
                        store_in = strip_quotes(v_css_tag.attrs[0].value);
                    } else {
                        throw new OutputError("v-css: expected `store_in` instead of " + v_css_tag.attrs[0].name, v_css_tag._pos.s);
                    }
                }
                out_v_css = {
                    css: v_css_str,
                    store_in: store_in
                };
            }
            ret = {
                v_css: out_v_css,
                v_pyj: out_v_pyj_str,
                nodes_to_compile: nodes_to_compile,
                raise_err_at: null,
                compile_v_pyj: null,
                make_html: null
            };
            ret.raise_err_at = function(node, compiler_err) {
                var err, node_line, indentation;
                err = ՐՏ_type(compiler_err) === "String" ? new Error(compiler_err) : compiler_err;
                node_line = node._pos.s[0] + (node.scoped_by === "beg_end" ? 1 : 0);
                indentation = node.scope_level * p.indent_len;
                err.line = err.line || 0;
                err.pos = (err.pos || 0) + indentation * err.line + node._pos.e[2] + (node._pos_delta || 0);
                err.line += node_line + (node._lines_delta || 0);
                err.col = indentation + (err.col || 0);
                throw err;
            };
            ret.compile_v_pyj = function(compiler) {
                if (!v_pyj_script) {
                    return;
                }
                try {
                    return compiler(ret.v_pyj);
                } catch (ՐՏ_Exception) {
                    var err = ՐՏ_Exception;
                    if (err.filename) {
                        throw err;
                    } else {
                        ret.raise_err_at(v_pyj_tag, err);
                    }
                }
            };
            ret.raise_v_pyj_err = function(err) {
                ret.raise_err_at(v_pyj_tag, err);
            };
            ret.make_html = function() {
                var ՐՏitr43, ՐՏidx43;
                var out_html, tag;
                out_html = [];
                ՐՏitr43 = ՐՏ_Iterable(content);
                for (ՐՏidx43 = 0; ՐՏidx43 < ՐՏitr43.length; ՐՏidx43++) {
                    tag = ՐՏitr43[ՐՏidx43];
                    if (ՐՏ_in(tag.name, [ "v-pyj", "v-css" ])) {
                        continue;
                    }
                    out_html.push(self.print_tag(tag, null, vars, chunks));
                }
                return out_html.join("");
            };
            return ret;
        }
        compile (src) {
            var ՐՏitr44, ՐՏidx44;
            var self = this;
            var prec, it, compiler;
            prec = self.pre_compile(src);
            if (prec.v_pyj) {
                self.save_v_pyj(prec.v_pyj);
            }
            if (prec.nodes_to_compile) {
                ՐՏitr44 = ՐՏ_Iterable(prec.nodes_to_compile);
                for (ՐՏidx44 = 0; ՐՏidx44 < ՐՏitr44.length; ՐՏidx44++) {
                    it = ՐՏitr44[ՐՏidx44];
                    if (compiler = self.compilers[it.compiler]) {
                        try {
                            it.node.child_nodes[0] = compiler(it.node.child_nodes[0]);
                        } catch (ՐՏ_Exception) {
                            var err = ՐՏ_Exception;
                            prec.raise_err_at(it.node, err);
                        }
                    } else {
                        prec.raise_err_at(it.node, new Error("Compiler `" + it.compiler + "` is not set"));
                    }
                }
            }
            return prec.make_html();
        }
    }
    _rml_test_str_ = "\ndef RS(%tag = script, %verbatim,  type = \"text/js\" ):\n$asd = DDDDDD\ndef tt():\n    div(d=\"df dfsdf\\\" g\"):\n        span(in_tt = 'qq'):\n            RS():\n                'sdfsdfsdsdfsdf sdf '\n                {function();\n                    dsfsdf;\n                    e = /\\$.+/.exec('sdfsdf')\n                }\n                 fsdfsd\n\n!DOCTYPE(html):\ndiv():\n    tt():\n    RS(some = 'wer1'):\n    span(as = '$asd', g= '\\$event'):\n        ul:\n            li:\n                i(class = 'sdsd'):\n            li:\n\ndef qq():\n    div():\n        qq1():\n        # dfsdf\n        'hi from qq-chunk'\ndef qq1():\n    #qq1():\n    div():\n        'hi from qq1-chunk'\n    span(name = 'qq1-chunk'):\n        'sdfsdf'\ndiv:\n    RS:\n        'adasd'\n        'sdasd'\nsvg:\n    qq1():\neditable(f = 'sdfsdf', @click = 'sdfdf()'):\nRS:\n\n";
    function load_markup(markup) {
        var ՐՏitr45, ՐՏidx45;
        var html_tags, line, tag;
        html_tags = {};
        function read_line(ln) {
            var r;
            r = /^<\s*([^\s]+)\s*>\s*([+-]?)/.exec(ln);
            return {
                "tag": r[1],
                "close_meth": r[2]
            };
        }
        ՐՏitr45 = ՐՏ_Iterable(markup.split("\n"));
        for (ՐՏidx45 = 0; ՐՏidx45 < ՐՏitr45.length; ՐՏidx45++) {
            line = ՐՏitr45[ՐՏidx45];
            line = line.split("#")[0].trimRight();
            if (!line.trim()) {
                continue;
            } else {
                tag = read_line(line);
                html_tags[tag.tag] = tag;
            }
        }
        return html_tags;
    }
    var html_ml = ՐՏ_modules["asset.html_ml"];
    function compile(rml_s, opt) {
        var markup, compiler, ret;
        markup = html_ml.markup();
        compiler = new RML_compiler(load_markup(markup), opt);
        ret = compiler.compile(rml_s);
        return ret;
    }
    function pre_compile(rml_s) {
        var markup, compiler, ret;
        markup = html_ml.markup();
        compiler = new RML_compiler(load_markup(markup), {});
        ret = compiler.pre_compile(rml_s);
        return ret;
    }
    function main() {
        return compile(_rml_test_str_);
    }
    if (__name__ === "__main__") {
        main();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.vuepy_parser"];
    ՐՏ_mod.export("_rml_test_str_", function(){return _rml_test_str_;}, function(ՐՏ_v){if (typeof _rml_test_str_ !== "undefined") {_rml_test_str_ = ՐՏ_v;};});
    ՐՏ_mod.export("strip_quotes", function(){return strip_quotes;}, function(ՐՏ_v){if (typeof strip_quotes !== "undefined") {strip_quotes = ՐՏ_v;};});
    ՐՏ_mod.export("attrs2hash", function(){return attrs2hash;}, function(ՐՏ_v){if (typeof attrs2hash !== "undefined") {attrs2hash = ՐՏ_v;};});
    ՐՏ_mod.export("attrs_assign", function(){return attrs_assign;}, function(ՐՏ_v){if (typeof attrs_assign !== "undefined") {attrs_assign = ՐՏ_v;};});
    ՐՏ_mod.export("ParserError", function(){return ParserError;}, function(ՐՏ_v){if (typeof ParserError !== "undefined") {ParserError = ՐՏ_v;};});
    ՐՏ_mod.export("OutputError", function(){return OutputError;}, function(ՐՏ_v){if (typeof OutputError !== "undefined") {OutputError = ՐՏ_v;};});
    ՐՏ_mod.export("Stream", function(){return Stream;}, function(ՐՏ_v){if (typeof Stream !== "undefined") {Stream = ՐՏ_v;};});
    ՐՏ_mod.export("Parser", function(){return Parser;}, function(ՐՏ_v){if (typeof Parser !== "undefined") {Parser = ՐՏ_v;};});
    ՐՏ_mod.export("RML_compiler", function(){return RML_compiler;}, function(ՐՏ_v){if (typeof RML_compiler !== "undefined") {RML_compiler = ՐՏ_v;};});
    ՐՏ_mod.export("load_markup", function(){return load_markup;}, function(ՐՏ_v){if (typeof load_markup !== "undefined") {load_markup = ՐՏ_v;};});
    ՐՏ_mod.export("compile", function(){return compile;}, function(ՐՏ_v){if (typeof compile !== "undefined") {compile = ՐՏ_v;};});
    ՐՏ_mod.export("pre_compile", function(){return pre_compile;}, function(ՐՏ_v){if (typeof pre_compile !== "undefined") {pre_compile = ՐՏ_v;};});
    ՐՏ_mod.export("main", function(){return main;}, function(ՐՏ_v){if (typeof main !== "undefined") {main = ՐՏ_v;};});
    ՐՏ_mod.export("html_ml", function(){return html_ml;}, function(ՐՏ_v){if (typeof html_ml !== "undefined") {html_ml = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.vuepy_compiler"].body = function(){
    var __name__ = "asset.vuepy_compiler";

    var RS_IMPORT_DIRS, PYJ_CACHE, CSS_CACHE, re_split_ext, re_split_pth, VUEPY_PREC_CACHE;
    var rapydscript_web = ՐՏ_modules["rapydscript_web"];
    var pre_compile = ՐՏ_modules["asset.vuepy_parser"].pre_compile;
    RS_IMPORT_DIRS = [ "root/vuepy" ];
    PYJ_CACHE = null;
    CSS_CACHE = null;
    re_split_ext = /^(.*)\.([^\.]+)$/;
    re_split_pth = /^(.*)\/([^\/]+)$/;
    VUEPY_PREC_CACHE = [];
    function clear_cache() {
        PYJ_CACHE = {};
        CSS_CACHE = {};
        VUEPY_PREC_CACHE = {};
    }
    function vuepy_precompile(s, fp_no_ext) {
        var ՐՏ_18;
        var prec;
        try {
            prec = pre_compile(s);
        } catch (ՐՏ_Exception) {
            var e = ՐՏ_Exception;
            e.filename = fp_no_ext + ".vuepy";
            throw e;
        }
        if (prec.v_pyj) {
            PYJ_CACHE[fp_no_ext + ".pyj"] = prec.v_pyj;
        }
        if (prec.v_css) {
            prec.v_css.store_in = prec.v_css.store_in || (ՐՏ_18 = fp_no_ext.split("/"))[ՐՏ_18.length-1] + ".css";
            prec.v_css.stored_by = fp_no_ext.split("/").slice(2).join("/") + ".vuepy";
            if (!CSS_CACHE[prec.v_css.store_in]) {
                CSS_CACHE[prec.v_css.store_in] = {};
            }
            CSS_CACHE[prec.v_css.store_in][prec.v_css.stored_by] = prec.v_css.css;
        }
        VUEPY_PREC_CACHE[fp_no_ext] = prec;
        return prec;
    }
    function make_file_reader(fs) {
        class Read_ex extends Error {
            constructor () {
                super();
                var self = this;
                self.code = "ENOENT";
            }
        }
        function read_file(fp) {
            var fp_no_ext, fp_vuepy, fid, prec, ret;
            if (PYJ_CACHE && PYJ_CACHE[fp]) {
                return PYJ_CACHE[fp];
            }
            fp_no_ext = re_split_ext.exec(fp)[1];
            fp_vuepy = fp_no_ext + ".vuepy";
            ՐՏ_print("try import vuepy: ", fp_vuepy);
            if (fid = fs.id_by_path(fp_vuepy)) {
                prec = vuepy_precompile(fs.files[fid].content, fp_no_ext);
                if (prec.v_pyj) {
                    ret = prec.v_pyj;
                } else {
                    throw new Error("Found `" + fp_vuepy + "`, but there is no `v-pyj` in it, so nothing to import!");
                }
            } else {
                fid = fs.id_by_path(fp);
                ՐՏ_print("try import: ", fp);
                if (!fid) {
                    throw new Read_ex();
                }
                ret = fs.files[fid].content;
            }
            return ret;
        }
        return read_file;
    }
    function vuepy_compile(s, fp, fs, opt) {
        var ՐՏitr46, ՐՏidx46;
        var defs, fid, fp_no_ext, prec, v_js, it, compiler, css_frags;
        clear_cache();
        defs = {
            compilers: {
                "rapydscript": function(s) {
                    return _rs_compile(s, fp, fs);
                }
            }
        };
        opt = Object.assign({}, defs, opt);
        if (!s) {
            fid = fs.id_by_path(fp);
            if (!fid) {
                throw new Error("File `" + fp + "` not found ");
            }
            s = fs.files[fid].content;
        }
        fp_no_ext = re_split_ext.exec(fp)[1];
        prec = vuepy_precompile(s, fp_no_ext);
        if (prec.v_pyj) {
            v_js = prec.compile_v_pyj(opt.compilers["rapydscript"]);
        }
        delete VUEPY_PREC_CACHE[fp_no_ext];
        if (prec.nodes_to_compile) {
            ՐՏitr46 = ՐՏ_Iterable(prec.nodes_to_compile);
            for (ՐՏidx46 = 0; ՐՏidx46 < ՐՏitr46.length; ՐՏidx46++) {
                it = ՐՏitr46[ՐՏidx46];
                if (compiler = opt.compilers[it.compiler]) {
                    try {
                        it.node.child_nodes[0] = compiler(it.node.child_nodes[0]);
                    } catch (ՐՏ_Exception) {
                        var err = ՐՏ_Exception;
                        clear_cache();
                        prec.raise_err_at(it.node, err);
                    }
                } else {
                    prec.raise_err_at(it.node, new Error("Compiler `" + it.compiler + "` is not set"));
                }
            }
        }
        css_frags = len(Object.keys(CSS_CACHE)) && CSS_CACHE || null;
        clear_cache();
        return {
            src: fp,
            "html": prec.make_html(),
            "pyj": prec.v_pyj,
            "js": v_js,
            "css": css_frags
        };
    }
    function make_amd_wrapper(pyj_s) {
        var is_amd_mod, mod_as_names, out_pyj_s, wrapper;
        is_amd_mod = false;
        function get_amd_imports(pyj_s) {
            var out, out_pyj_s;
            out = [];
            function replacer(s, mod_as_names) {
                var ՐՏitr47, ՐՏidx47;
                var mod_as_name, mod, name;
                is_amd_mod = true;
                mod_as_names = mod_as_names.split(/ *, */);
                ՐՏitr47 = ՐՏ_Iterable(mod_as_names);
                for (ՐՏidx47 = 0; ՐՏidx47 < ՐՏitr47.length; ՐՏidx47++) {
                    mod_as_name = ՐՏitr47[ՐՏidx47];
                    mod_as_name = mod_as_name.split(/ +as +/);
                    mod = mod_as_name[0];
                    name = mod_as_name[1] || mod;
                    out.push({
                        mod: mod.trim(),
                        name: name.trim()
                    });
                }
                return "";
            }
            out_pyj_s = pyj_s.replace(/^import_amd +(.*?)(#.*)?\n/gm, replacer);
            return [ out, out_pyj_s ];
        }
        [mod_as_names, out_pyj_s] = get_amd_imports(pyj_s);
        function make_wrapper(mod_as_names) {
            function wrapper(js_s) {
                var ՐՏitr48, ՐՏidx48;
                var imports_arr, imports_as, mod_as_name;
                imports_arr = [];
                imports_as = [];
                ՐՏitr48 = ՐՏ_Iterable(mod_as_names);
                for (ՐՏidx48 = 0; ՐՏidx48 < ՐՏitr48.length; ՐՏidx48++) {
                    mod_as_name = ՐՏitr48[ՐՏidx48];
                    imports_arr.push('"' + mod_as_name.mod + "" + '"');
                    imports_as.push(mod_as_name.name);
                }
                return "define([" + imports_arr.join(",") + "]," + "function(" + imports_as.join(",") + "){\nvar exports = {};\n" + js_s + "\nreturn exports;})";
            }
            return wrapper;
        }
        wrapper = is_amd_mod ? make_wrapper(mod_as_names) : function(js_s) {
            return js_s;
        };
        return [ wrapper, out_pyj_s ];
    }
    function rs_compile(s, fp, fs, opt) {
        clear_cache();
        return {
            "js": _rs_compile(s, fp, fs, opt),
            src: fp
        };
    }
    function _rs_compile(s, fp, fs, opt) {
        var me, compiler, main_loop, defs, amd_wrapper, pyj_s, ret;
        me = _rs_compile;
        compiler = rapydscript_web;
        if (me.running) {
            compiler = compiler.factory();
        } else {
            main_loop = me.running = true;
        }
        defs = {
            basedir: fp.split("/").slice(0, -1).join("/"),
            readfile: make_file_reader(fs),
            es6: true,
            beautify: true,
            import_dirs: RS_IMPORT_DIRS
        };
        opt = Object.assign({}, defs, opt);
        try {
            s = s || opt.readfile(fp);
            [amd_wrapper, pyj_s] = make_amd_wrapper(s);
            ret = compiler.compile(pyj_s, opt);
            ret = amd_wrapper(ret);
        } catch (ՐՏ_Exception) {
            var err = ՐՏ_Exception;
            if (!err.filename) {
                err.filename = fp;
            }
            me.running = false;
            maybe_vuepy_error(err);
            throw err;
        }
        if (main_loop) {
            me.running = false;
        }
        return ret;
    }
    function maybe_vuepy_error(err) {
        var err_fp_no_ext, vuepy_prec;
        err_fp_no_ext = err.filename && err.filename.split(/\.[^.]+$/)[0];
        if (err_fp_no_ext && (vuepy_prec = VUEPY_PREC_CACHE[err_fp_no_ext])) {
            err.filename = err_fp_no_ext + ".vuepy";
            vuepy_prec.raise_v_pyj_err(err);
        }
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.vuepy_compiler"];
    ՐՏ_mod.export("RS_IMPORT_DIRS", function(){return RS_IMPORT_DIRS;}, function(ՐՏ_v){if (typeof RS_IMPORT_DIRS !== "undefined") {RS_IMPORT_DIRS = ՐՏ_v;};});
    ՐՏ_mod.export("PYJ_CACHE", function(){return PYJ_CACHE;}, function(ՐՏ_v){if (typeof PYJ_CACHE !== "undefined") {PYJ_CACHE = ՐՏ_v;};});
    ՐՏ_mod.export("CSS_CACHE", function(){return CSS_CACHE;}, function(ՐՏ_v){if (typeof CSS_CACHE !== "undefined") {CSS_CACHE = ՐՏ_v;};});
    ՐՏ_mod.export("re_split_ext", function(){return re_split_ext;}, function(ՐՏ_v){if (typeof re_split_ext !== "undefined") {re_split_ext = ՐՏ_v;};});
    ՐՏ_mod.export("re_split_pth", function(){return re_split_pth;}, function(ՐՏ_v){if (typeof re_split_pth !== "undefined") {re_split_pth = ՐՏ_v;};});
    ՐՏ_mod.export("VUEPY_PREC_CACHE", function(){return VUEPY_PREC_CACHE;}, function(ՐՏ_v){if (typeof VUEPY_PREC_CACHE !== "undefined") {VUEPY_PREC_CACHE = ՐՏ_v;};});
    ՐՏ_mod.export("clear_cache", function(){return clear_cache;}, function(ՐՏ_v){if (typeof clear_cache !== "undefined") {clear_cache = ՐՏ_v;};});
    ՐՏ_mod.export("vuepy_precompile", function(){return vuepy_precompile;}, function(ՐՏ_v){if (typeof vuepy_precompile !== "undefined") {vuepy_precompile = ՐՏ_v;};});
    ՐՏ_mod.export("make_file_reader", function(){return make_file_reader;}, function(ՐՏ_v){if (typeof make_file_reader !== "undefined") {make_file_reader = ՐՏ_v;};});
    ՐՏ_mod.export("vuepy_compile", function(){return vuepy_compile;}, function(ՐՏ_v){if (typeof vuepy_compile !== "undefined") {vuepy_compile = ՐՏ_v;};});
    ՐՏ_mod.export("make_amd_wrapper", function(){return make_amd_wrapper;}, function(ՐՏ_v){if (typeof make_amd_wrapper !== "undefined") {make_amd_wrapper = ՐՏ_v;};});
    ՐՏ_mod.export("rs_compile", function(){return rs_compile;}, function(ՐՏ_v){if (typeof rs_compile !== "undefined") {rs_compile = ՐՏ_v;};});
    ՐՏ_mod.export("_rs_compile", function(){return _rs_compile;}, function(ՐՏ_v){if (typeof _rs_compile !== "undefined") {_rs_compile = ՐՏ_v;};});
    ՐՏ_mod.export("maybe_vuepy_error", function(){return maybe_vuepy_error;}, function(ՐՏ_v){if (typeof maybe_vuepy_error !== "undefined") {maybe_vuepy_error = ՐՏ_v;};});
    ՐՏ_mod.export("rapydscript_web", function(){return rapydscript_web;}, function(ՐՏ_v){if (typeof rapydscript_web !== "undefined") {rapydscript_web = ՐՏ_v;};});
    ՐՏ_mod.export("pre_compile", function(){return pre_compile;}, function(ՐՏ_v){if (typeof pre_compile !== "undefined") {pre_compile = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.vuepy_output"].body = function(){
    var __name__ = "asset.vuepy_output";

    var fs_path = ՐՏ_modules["asset.fs_path"];
    "\noutput_path_map = {\n    'html': def(pth): return '/templates/' +                 pth.split(///).filter(def(x): return x and x != 'root';)[1:].join('/') + '.html';,\n    'js': '/static/js/',\n    'css': '/static/css/',\n }\n";
    function update_css(css, frags_to_update) {
        var ՐՏitr49, ՐՏidx49;
        var stored_frags, css_head, updated_frags, out, stored_by, section;
        function parse_css(css) {
            var re_splitter, frags, stored_frags, i, stored_by, content;
            re_splitter = /(\n?^ *\/\* *-+ *< *([^\s>]+) *> *-+ *\*\/ *$\n?)/m;
            frags = css.split(re_splitter);
            stored_frags = {
                "_css_head_": frags[0] || ""
            };
            if (len(frags) > 1) {
                i = 2;
                while (i < len(frags)) {
                    stored_by = frags[i];
                    content = frags[i + 1];
                    stored_frags[stored_by] = content || "";
                    i += 3;
                }
            }
            return stored_frags;
        }
        stored_frags = parse_css(css);
        css_head = stored_frags._css_head_;
        delete stored_frags._css_head_;
        updated_frags = Object.assign({}, stored_frags, frags_to_update);
        out = [];
        ՐՏitr49 = ՐՏ_Iterable(updated_frags);
        for (ՐՏidx49 = 0; ՐՏidx49 < ՐՏitr49.length; ՐՏidx49++) {
            stored_by = ՐՏitr49[ՐՏidx49];
            section = "\n/*---------< " + stored_by + " >-------------*/\n";
            out.push(section + updated_frags[stored_by]);
        }
        return css_head + out.join("");
    }
    var store_css = (ՐՏ_19 = function store_css(css_to_store, opath, fs) {
        var ՐՏitr50, ՐՏidx50;
        var opath_id, css_file, fp, fid, css_s;
        opath_id = fs.id_by_path(opath);
        ՐՏitr50 = ՐՏ_Iterable(css_to_store);
        for (ՐՏidx50 = 0; ՐՏidx50 < ՐՏitr50.length; ՐՏidx50++) {
            css_file = ՐՏitr50[ՐՏidx50];
            fp = fs.path_join(opath, css_file);
            fid = fs.id_by_path(fp);
            if (!fid) {
                fid = fs.create_file(css_file, opath_id);
            }
            css_s = update_css(fs.files[fid].content, css_to_store[css_file]);
            fs.write_file(fid, css_s);
        }
    }, Object.defineProperty(ՐՏ_19, "__doc__", {
        value: "css_to_store is a hash:\n    'a.css' :\n        'foo.vuepy': \"a { color: black } ...\"\n        'bar.vuepy': \"div.error { color: red } ...\"\n        ...\n    ..."
    }), ՐՏ_19);
    function output(compiled, fs, output_path_map) {
        var ՐՏitr51, ՐՏidx51;
        var fp, ps, ext, ofp, opath, fid;
        fp = compiled.src;
        ps = fs_path.path_split(fp);
        ՐՏitr51 = ՐՏ_Iterable(compiled);
        for (ՐՏidx51 = 0; ՐՏidx51 < ՐՏitr51.length; ՐՏidx51++) {
            ext = ՐՏitr51[ՐՏidx51];
            if (ext === "src" || !compiled[ext]) {
                continue;
            }
            ofp = null;
            if (opath = output_path_map[ext]) {
                if (opath instanceof Function) {
                    ofp = opath = opath(ps.fpath_no_ext, ext);
                }
            }
            if (ext === "css") {
                store_css(compiled[ext], opath || ps.dir, fs);
            } else {
                if (!ofp) {
                    ofp = fs.path_join(opath || ps.dir, ps.fname_no_ext + "." + ext);
                }
                fid = fs.id_by_path(ofp);
                if (!fid) {
                    fid = fs.create_file(ofp);
                }
                fs.write_file(fid, compiled[ext]);
            }
        }
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.vuepy_output"];
    ՐՏ_mod.export("update_css", function(){return update_css;}, function(ՐՏ_v){if (typeof update_css !== "undefined") {update_css = ՐՏ_v;};});
    ՐՏ_mod.export("store_css", function(){return store_css;}, function(ՐՏ_v){if (typeof store_css !== "undefined") {store_css = ՐՏ_v;};});
    ՐՏ_mod.export("output", function(){return output;}, function(ՐՏ_v){if (typeof output !== "undefined") {output = ՐՏ_v;};});
    ՐՏ_mod.export("fs_path", function(){return fs_path;}, function(ՐՏ_v){if (typeof fs_path !== "undefined") {fs_path = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.cm_vuepy"].body = function(){
    var __name__ = "asset.cm_vuepy";

    var MODE_NAME, CodeMirror;
    MODE_NAME = "vuepy";
    CodeMirror = null;
    function reg_mode(CM) {
        CodeMirror = CM;
        CM.defineMode(MODE_NAME, def_mode, "rapydscript");
    }
    function arr2hash(arr) {
        var ret;
        ret = {};
        arr.forEach(function(it) {
            ret[it] = true;
        });
        return ret;
    }
    function wordRegexp(words) {
        return new RegExp("^((" + words.join(")|(") + "))\\b");
    }
    function def_mode(conf, parserConf) {
        var ERRORCLASS, punc, stringPrefixes, tripleOperators, doubleOperators, singleOperators, wordOperators, identifiers, indentUnit, hangingIndent, _keywords, _builtins, keywords, builtins, rml_mode, external;
        ERRORCLASS = "error";
        punc = parserConf.punctuation || /^[\(\)\[\]\{\}@,:`;\.\\]/;
        stringPrefixes = /^'{3}|"{3}|['"]/i;
        tripleOperators = parserConf.tripleOperators || /^((\/\/=)|(>>=)|(<<=)|(\*\*=))/;
        doubleOperators = parserConf.doubleOperators || /^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(\/\/)|(\*\*)|(\+=)|(\-=)|(\*=)|(%=)|(\/=)|(&=)|(\|=)|(\^=))/;
        singleOperators = parserConf.singleOperators || /^[\+\-\*\/%&|\^~<>!=\?]/;
        wordOperators = wordRegexp([ "in" ]);
        identifiers = parserConf.identifiers || new RegExp("^[_A-Za-z$][_A-Za-z0-9$-]*");
        indentUnit = conf.indentUnit;
        hangingIndent = parserConf.hangingIndent || indentUnit;
        _keywords = "def v-def v-for v-model v-show ref is key component v-if v-else v-else-if v-html v-text v-on v-bind template slot props".split(" ");
        _builtins = "$event arguments true false null undefined".split(" ");
        if (parserConf.extra_keywords) {
            _keywords = _keywords.concat(parserConf.extra_keywords);
        }
        if (parserConf.extra_builtins) {
            _builtins = _builtins.concat(parserConf.extra_builtins);
        }
        keywords = arr2hash(_keywords);
        builtins = arr2hash(_builtins);
        CodeMirror.registerHelper("hintWords", MODE_NAME, _keywords.concat(_builtins));
        class RML_mode {
            constructor () {
                var self = this;
                self.ST_KEYS = Object.keys(self.start_state());
            }
            start_state (basecolumn) {
                var self = this;
                return {
                    tokenize: self.token_base,
                    scopes: [ {
                        offset: basecolumn || 0,
                        type: "tag",
                        tag_props: null,
                        align: null,
                        sub_type: null,
                        tag_name: null,
                        tag_style: null
                    } ],
                    lastStyle: null,
                    lastToken: null,
                    dedent: 0,
                    indent: null,
                    js_str_expect: false,
                    js_str_type: null,
                    def_tags: null,
                    tag_name: null,
                    tag_spec_attrs: null,
                    tag_style: null,
                    local_state: null,
                    local_mode: null
                };
            }
            load_state (state) {
                var self = this;
                Object.assign(self, state);
            }
            update_state (state) {
                var self = this;
                self.ST_KEYS.forEach(function(k) {
                    state[k] = self[k];
                });
            }
            copy_state (state) {
                var self = this;
                var ret;
                ret = {};
                self.ST_KEYS.forEach(function(k) {
                    var v, _;
                    v = state[k];
                    if (Array.isArray(v)) {
                        ret[k] = v.slice(0);
                    } else if (v instanceof Object && !(v instanceof Function)) {
                        ret[k] = (function() {
                            var ՐՏidx52, ՐՏitr52 = ՐՏ_Iterable(v), ՐՏres = {}, _;
                            for (ՐՏidx52 = 0; ՐՏidx52 < ՐՏitr52.length; ՐՏidx52++) {
                                _ = ՐՏitr52[ՐՏidx52];
                                ՐՏres[_] = v[_];
                            }
                            return ՐՏres;
                        })();
                    } else {
                        ret[k] = v;
                    }
                });
                if (ret.local_mode) {
                    ret.local_state = CodeMirror.copyState(ret.local_mode, ret.local_state);
                }
                return ret;
            }
            dedent_process (stream) {
                var ՐՏ_20, ՐՏ_21, ՐՏ_22, ՐՏ_23, ՐՏ_24;
                var self = this;
                var indented;
                indented = stream.indentation();
                while ((ՐՏ_20 = self.scopes)[ՐՏ_20.length-1].offset > indented) {
                    if (!/^tag(_inline)?$/.test((ՐՏ_21 = self.scopes)[ՐՏ_21.length-1].type)) {
                        return {
                            error: true
                        };
                    }
                    self.scopes.pop();
                    while ((ՐՏ_22 = self.scopes)[ՐՏ_22.length-1].type === "tag_inline") {
                        self.scopes.pop();
                    }
                }
                return {
                    error: ((ՐՏ_23 = (ՐՏ_24 = self.scopes)[ՐՏ_24.length-1].offset) !== indented && (typeof ՐՏ_23 !== "object" || !ՐՏ_eq(ՐՏ_23, indented)))
                };
            }
            token_re (stream) {
                var self = this;
                var escaped, inSet, next;
                escaped = false;
                inSet = false;
                while (next = stream.next()) {
                    if (!escaped) {
                        if (next === "/" && !inSet) {
                            return;
                        }
                        if (next === "[") {
                            inSet = true;
                        } else if (inSet && next === "]") {
                            inSet = false;
                        }
                    }
                    escaped = !escaped && next === "\\";
                }
            }
            token_base (stream) {
                var ՐՏ_25, ՐՏ_26, ՐՏ_27, ՐՏ_28;
                var self = this;
                var sol, indent, scope_offset, line_offset, style;
                sol = stream.sol();
                if (sol) {
                    indent = self.indent = stream.indentation();
                    if (/^tag(_inline)?$/.test((ՐՏ_25 = self.scopes)[ՐՏ_25.length-1].type)) {
                        scope_offset = (ՐՏ_26 = self.scopes)[ՐՏ_26.length-1].offset;
                        if (stream.eatSpace()) {
                            line_offset = indent;
                            if (line_offset > scope_offset) {
                                self.push_scope(stream, "tag");
                            } else if (line_offset < scope_offset && self.dedent_process(stream).error) {
                                stream.skipToEnd();
                                return ERRORCLASS;
                            } else if ((ՐՏ_27 = self.scopes)[ՐՏ_27.length-1].type === "tag_inline") {
                                while ((ՐՏ_28 = self.scopes)[ՐՏ_28.length-1].type === "tag_inline") {
                                    self.scopes.pop();
                                }
                            }
                            return null;
                        } else {
                            style = self.token_baseInner(stream);
                            if (scope_offset > 0 && self.dedent_process(stream).error) {
                                style += " " + ERRORCLASS;
                            }
                            return style;
                        }
                    }
                }
                return self.token_baseInner(stream);
            }
            token_baseInner (stream) {
                var ՐՏ_29, ՐՏ_30, ՐՏ_31;
                var self = this;
                var ch, quote, w;
                if (stream.eatSpace()) {
                    return null;
                }
                ch = stream.peek();
                if (ch === "#") {
                    stream.skipToEnd();
                    return "comment";
                }
                if (stream.match(/^[0-9\.]/, false)) {
                    if (stream.match(/^\d*\.\d+(e[\+\-]?\d+)?/i) || stream.match(/^\d+\.\d*/) || stream.match(/^\.\d+/)) {
                        stream.eat(/J/i);
                        return "number";
                    }
                    if (stream.match(/^0x[0-9a-f]+/i) || stream.match(/^0b[01]+L?/i) || stream.match(/^0o[0-7]+L?/i) || stream.match(/^[0-9]\d*(e[\+\-]?\d+)?(L|J)?/i)) {
                        return "number";
                    }
                }
                if (quote = stream.match(stringPrefixes)) {
                    quote = quote[0];
                    if (self.js_str_expect) {
                        self.js_str_expect = false;
                        if (self.lastToken !== "=") {
                            return ERRORCLASS;
                        }
                        self.js_str_type = quote;
                        self.push_scope(stream, quote);
                        return "punctuation js_string_qte";
                    } else if ((ՐՏ_29 = self.scopes)[ՐՏ_29.length-1].type === quote) {
                        self.scopes.pop();
                        self.js_str_type = null;
                        return "punctuation js_string_qte";
                    } else {
                        if (self.js_str_type === quote) {
                            return ERRORCLASS;
                        }
                        self.tokenize = self.token_string_factory(stream.current());
                        return self.tokenize(stream);
                    }
                }
                if (stream.match(tripleOperators) || stream.match(doubleOperators) || stream.match(wordOperators)) {
                    return "operator";
                }
                if (stream.eat("/")) {
                    if (!self.lastToken || self.lastStyle === "operator" || /^([\[{\(:=,'"]|in)$/.test(self.lastToken)) {
                        self.token_re(stream);
                        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
                        return "string-2";
                    } else {
                        return "operator";
                    }
                }
                if (stream.match(singleOperators)) {
                    return "operator";
                }
                if (stream.match(punc)) {
                    return "punctuation";
                }
                if (w = stream.match(identifiers)) {
                    w = w[0];
                    if (keywords[w]) {
                        return "keyword";
                    }
                    if (builtins[w]) {
                        return "builtin";
                    }
                    if (/^(this)\b/.test(w)) {
                        return "variable-2";
                    } else {
                        if ((ՐՏ_30 = self.scopes)[ՐՏ_30.length-1].type.startsWith("tag")) {
                            return self.lastToken === "def" ? "def" : "tag";
                        }
                        if ((ՐՏ_31 = self.scopes)[ՐՏ_31.length-1].sub_type === "attr") {
                            return "attribute";
                        }
                        return "variable";
                    }
                }
                stream.next();
                return ERRORCLASS;
            }
            token_string_factory (delimiter) {
                var self = this;
                var singleline, OUTCLASS;
                singleline = delimiter.length === 1;
                OUTCLASS = "string";
                function token_string(stream) {
                    while (!stream.eol()) {
                        stream.eatWhile(/[^'"\\]/);
                        if (stream.eat("\\")) {
                            stream.next();
                            if (singleline && stream.eol()) {
                                return OUTCLASS;
                            }
                        } else if (stream.match(delimiter)) {
                            self.tokenize = self.token_base;
                            return OUTCLASS;
                        } else {
                            stream.eat(/['"]/);
                        }
                    }
                    if (singleline) {
                        if (parserConf.singleLineStringErrors) {
                            return ERRORCLASS;
                        } else {
                            self.tokenize = self.token_base;
                        }
                    }
                    return OUTCLASS;
                }
                token_string.isString = true;
                return token_string;
            }
            push_scope (stream, type) {
                var ՐՏ_32, ՐՏ_33, ՐՏ_34, ՐՏ_35, ՐՏ_36, ՐՏ_37, ՐՏ_38;
                var self = this;
                var offset, align, sub_type, tag_props, tag_name, tag_style;
                offset = 0;
                align = null;
                sub_type = null;
                tag_props = null;
                tag_name = null;
                tag_style = null;
                if (type === "tag") {
                    while ((ՐՏ_32 = self.scopes)[ՐՏ_32.length-1].type !== "tag") {
                        self.scopes.pop();
                    }
                    offset = (ՐՏ_33 = self.scopes)[ՐՏ_33.length-1].offset + indentUnit;
                    if (self.tag_spec_attrs) {
                        tag_props = self.tag_spec_attrs;
                        self.tag_spec_attrs = null;
                    }
                    tag_name = self.tag_name;
                    tag_style = self.tag_style;
                } else if (type === "tag_inline") {
                    while (!(ՐՏ_34 = self.scopes)[ՐՏ_34.length-1].type.startsWith("tag")) {
                        self.scopes.pop();
                    }
                    offset = (ՐՏ_35 = self.scopes)[ՐՏ_35.length-1].offset;
                } else if (/^('|")/.test(type)) {
                } else if (type.endsWith("---")) {
                    offset = (ՐՏ_36 = self.scopes)[ՐՏ_36.length-1].offset;
                } else {
                    if (!stream.match(/^(\s|#.*)*$/, false)) {
                        align = stream.column() + 1;
                    }
                    offset = (ՐՏ_37 = self.scopes)[ՐՏ_37.length-1].offset + hangingIndent;
                    sub_type = (ՐՏ_38 = self.scopes)[ՐՏ_38.length-1].type.startsWith("tag") ? "attr" : null;
                }
                self.scopes.push({
                    offset: offset,
                    type: type,
                    align: align,
                    tag_props: tag_props,
                    sub_type: sub_type,
                    tag_name: tag_name,
                    tag_style: tag_style
                });
            }
            token_lexer (stream) {
                var ՐՏ_39, ՐՏ_40, ՐՏ_41, ՐՏ_42, ՐՏ_43, ՐՏ_44;
                var self = this;
                var style, current, scope, def_tag_attrs, re_attr, attr_value, delimiter_index;
                style = self.tokenize(stream);
                current = stream.current();
                if (current === ".") {
                    style = stream.match(identifiers, false) ? null : ERRORCLASS;
                    if ((style === (ՐՏ_39 = null) || typeof style === "object" && ՐՏ_eq(style, ՐՏ_39)) && self.lastStyle === "meta") {
                        style = "meta";
                    }
                    return style;
                }
                if (current === "@") {
                    self.js_str_expect = true;
                    return stream.match(identifiers, false) ? "meta" : ERRORCLASS;
                }
                if ((style === "variable" || style === "builtin") && self.lastStyle === "meta") {
                    style = "meta";
                }
                scope = (ՐՏ_40 = self.scopes)[ՐՏ_40.length-1];
                if (scope.type.startsWith("tag")) {
                    if (style === "def" || style === "tag") {
                        self.tag_name = current;
                        self.tag_style = style;
                        if (style === "tag" && (def_tag_attrs = self.def_tags ? self.def_tags[current] : null)) {
                            self.tag_spec_attrs = Object.assign({}, def_tag_attrs);
                        }
                        if (ՐՏ_in(self.tag_name, [ "v-pyj", "v-css" ])) {
                            style = "keyword";
                        }
                    } else if (current === ":") {
                        if (stream.match(/^(\s|#.*)*$/, false)) {
                            self.push_scope(stream, "tag");
                        } else {
                            self.push_scope(stream, "tag_inline");
                        }
                    }
                } else if (scope.sub_type === "attr") {
                    if (current === ":" && /^(,|\(|v-bind)$/.test(self.lastToken) || /^(v-for|v-if|v-show|v-else-if)$/.test(self.lastToken)) {
                        self.js_str_expect = true;
                    } else if (style === "attribute" && (self.lastToken === "%" || current === "type")) {
                        re_attr = /^\s*=\s*('|")([^'"]+)\1/;
                        attr_value = stream.match(re_attr, false);
                        attr_value = attr_value ? attr_value[2] : true;
                        if (self.tag_style === "def") {
                            if (!self.def_tags) {
                                self.def_tags = {};
                            }
                            if (!self.def_tags[self.tag_name]) {
                                self.def_tags[self.tag_name] = {};
                            }
                            self.def_tags[self.tag_name][current] = attr_value;
                        } else {
                            self.tag_spec_attrs = self.tag_spec_attrs || {};
                            self.tag_spec_attrs[current] = attr_value;
                        }
                    }
                }
                if (style && style.startsWith("punctuation")) {
                    delimiter_index = current.length === 1 ? "[({".indexOf(current) : -1;
                    if ((delimiter_index !== (ՐՏ_41 = -1) && (typeof delimiter_index !== "object" || !ՐՏ_eq(delimiter_index, ՐՏ_41)))) {
                        self.push_scope(stream, "])}"[delimiter_index]);
                    } else {
                        delimiter_index = "])}".indexOf(current);
                        if ((delimiter_index !== (ՐՏ_42 = -1) && (typeof delimiter_index !== "object" || !ՐՏ_eq(delimiter_index, ՐՏ_42)))) {
                            if (((ՐՏ_43 = (ՐՏ_44 = self.scopes)[ՐՏ_44.length-1].type) === current || typeof ՐՏ_43 === "object" && ՐՏ_eq(ՐՏ_43, current))) {
                                self.scopes.pop();
                            } else {
                                return ERRORCLASS;
                            }
                        }
                    }
                }
                return style;
            }
        }
        rml_mode = new RML_mode();
        function start_state(basecolumn) {
            return rml_mode.start_state(basecolumn);
        }
        function token(stream, state) {
            var ՐՏ_45, ՐՏ_46, ՐՏ_47, ՐՏ_48;
            var scope, r, local_state, mode_name, mode, style, current;
            scope = (ՐՏ_45 = state.scopes)[ՐՏ_45.length-1];
            if (stream.sol()) {
                if (stream.match(/^\s*$/)) {
                    return null;
                }
                function get_mode() {
                    if (scope.tag_name === "v-pyj" || scope.type === "tag" && scope.tag_props && scope.tag_props.compiler) {
                        return "rapydscript";
                    }
                    if (ՐՏ_in(scope.tag_name, [ "v-css", "style" ])) {
                        return "css";
                    }
                    if (scope.tag_name === "script" || scope.type === "tag" && scope.tag_props && scope.tag_props.type === "text/javascript") {
                        return "javascript";
                    }
                }
                r = null;
                if (!(local_state = state.local_state) && (mode_name = get_mode())) {
                    if (stream.indentation() >= scope.offset || ((ՐՏ_46 = scope.offset - indentUnit) === (ՐՏ_47 = stream.indentation()) || typeof ՐՏ_46 === "object" && ՐՏ_eq(ՐՏ_46, ՐՏ_47)) && (r = stream.match(/^(\s*)\+{3}(\s|#.*)*$/))) {
                        mode = CodeMirror.getMode(conf, mode_name);
                        state.local_state = CodeMirror.startState(mode, stream.indentation());
                        state.local_mode = mode;
                    }
                    if (r) {
                        rml_mode.load_state(state);
                        rml_mode.push_scope(stream, r[1] + "---");
                        rml_mode.update_state(state);
                        return "operator";
                    }
                } else if (local_state && !(local_state.tokenize && local_state.tokenize.isString) && (scope.type === "tag" && stream.indentation() < scope.offset || scope.type.endsWith("---") && (r = stream.match(new RegExp("^" + scope.type + "(\\s*|#.*)*$"))))) {
                    state.local_state = null;
                    state.local_mode = null;
                    if (r) {
                        state.scopes.pop();
                        return "operator";
                    }
                }
            }
            if (state.local_mode) {
                return state.local_mode.token(stream, state.local_state);
            }
            rml_mode.load_state(state);
            style = rml_mode.token_lexer(stream);
            if (style) {
                rml_mode.lastStyle = style;
            }
            current = stream.current();
            if (current && style) {
                rml_mode.lastToken = current;
            }
            if (stream.eol() && ՐՏ_in((ՐՏ_48 = rml_mode.scopes)[ՐՏ_48.length-1].type, [ '"', "'" ])) {
                rml_mode.scopes.pop();
                style = ERRORCLASS;
            }
            rml_mode.update_state(state);
            return style;
        }
        function indent(state, textAfter) {
            var ՐՏ_49, ՐՏ_50, ՐՏ_51, ՐՏ_52, ՐՏ_53, ՐՏ_54, ՐՏ_55, ՐՏ_56;
            var scope, closing;
            if (state.local_mode) {
                if (state.local_mode.indent) {
                    return state.local_mode.indent(state.local_state, textAfter);
                } else {
                    return CodeMirror.Pass;
                }
            }
            if (((ՐՏ_49 = state.tokenize) !== (ՐՏ_50 = rml_mode.token_base) && (typeof ՐՏ_49 !== "object" || !ՐՏ_eq(ՐՏ_49, ՐՏ_50)))) {
                return state.tokenize && state.tokenize.isString ? CodeMirror.Pass : 0;
            }
            scope = (ՐՏ_51 = state.scopes)[ՐՏ_51.length-1];
            if (scope.type === '"' || scope.type === "'") {
                return CodeMirror.Pass;
            }
            closing = textAfter && ((ՐՏ_52 = textAfter.charAt(0)) === (ՐՏ_53 = scope.type) || typeof ՐՏ_52 === "object" && ՐՏ_eq(ՐՏ_52, ՐՏ_53));
            if (((ՐՏ_54 = scope.align) !== (ՐՏ_55 = null) && (typeof ՐՏ_54 !== "object" || !ՐՏ_eq(ՐՏ_54, ՐՏ_55)))) {
                return scope.align - (closing && state.lastToken !== "," ? 1 : 0);
            } else if (closing && state.scopes.length > 1) {
                return (ՐՏ_56 = state.scopes)[ՐՏ_56.length-2].offset;
            } else {
                return scope.offset;
            }
        }
        external = {
            startState: start_state,
            token: token,
            indent: indent,
            lineComment: "#",
            fold: "indent",
            electricInput: /^\s*[\}\]\)]$/,
            copyState: function(state) {
                return rml_mode.copy_state(state);
            },
            innerMode: function(state) {
                if (state.local_state) {
                    return {
                        state: state.local_state,
                        mode: state.local_mode
                    };
                } else {
                    return null;
                }
            }
        };
        return external;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.cm_vuepy"];
    ՐՏ_mod.export("MODE_NAME", function(){return MODE_NAME;}, function(ՐՏ_v){if (typeof MODE_NAME !== "undefined") {MODE_NAME = ՐՏ_v;};});
    ՐՏ_mod.export("CodeMirror", function(){return CodeMirror;}, function(ՐՏ_v){if (typeof CodeMirror !== "undefined") {CodeMirror = ՐՏ_v;};});
    ՐՏ_mod.export("reg_mode", function(){return reg_mode;}, function(ՐՏ_v){if (typeof reg_mode !== "undefined") {reg_mode = ՐՏ_v;};});
    ՐՏ_mod.export("arr2hash", function(){return arr2hash;}, function(ՐՏ_v){if (typeof arr2hash !== "undefined") {arr2hash = ՐՏ_v;};});
    ՐՏ_mod.export("wordRegexp", function(){return wordRegexp;}, function(ՐՏ_v){if (typeof wordRegexp !== "undefined") {wordRegexp = ՐՏ_v;};});
    ՐՏ_mod.export("def_mode", function(){return def_mode;}, function(ՐՏ_v){if (typeof def_mode !== "undefined") {def_mode = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.cm_rapydscript"].body = function(){
    var __name__ = "asset.cm_rapydscript";

    var MODE_NAME, CodeMirror;
    MODE_NAME = "rapydscript";
    CodeMirror = null;
    function reg_mode(CM) {
        CodeMirror = CM;
        CM.defineMode(MODE_NAME, def_mode);
    }
    function arr2hash(arr) {
        var ret;
        ret = {};
        arr.forEach(function(it) {
            ret[it] = true;
        });
        return ret;
    }
    function wordRegexp(words) {
        return new RegExp("^((" + words.join(")|(") + "))\\b");
    }
    function def_mode(conf, parserConf) {
        var ERRORCLASS, punc, tripleOperators, doubleOperators, singleOperators, wordOperators, identifiers, indentUnit, hangingIndent, stringPrefixes, commonKeywords, commonBuiltins, py2, py3, _keywords, _builtins, keywords, builtins, rs_mode, external;
        ERRORCLASS = "error";
        punc = parserConf.punctuation || /^[\(\)\[\]\{\}@,:`;\.\\]/;
        tripleOperators = parserConf.tripleOperators || /^((\/\/=)|(>>=)|(<<=)|(\*\*=))/;
        doubleOperators = parserConf.doubleOperators || /^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(\/\/)|(\*\*)|(\+=)|(\-=)|(\*=)|(%=)|(\/=)|(&=)|(\|=)|(\^=))/;
        singleOperators = parserConf.singleOperators || /^[\+\-\*\/%&|\^~<>!=\?]/;
        wordOperators = wordRegexp([ "and", "or", "not", "is", "in", "del" ]);
        identifiers = parserConf.identifiers || new RegExp("^[_A-Za-z$][_A-Za-z0-9$]*");
        indentUnit = conf.indentUnit;
        hangingIndent = parserConf.hangingIndent || indentUnit;
        stringPrefixes = new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
        commonKeywords = [ "as", "assert", "break", "class", "continue", "def", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "async" ];
        commonBuiltins = [ "abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__" ];
        py2 = {
            builtins: [ "apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None" ],
            keywords: [ "exec", "print" ]
        };
        py3 = {
            builtins: [ "ascii", "bytes", "exec", "print" ],
            keywords: [ "nonlocal", "False", "True", "None" ]
        };
        _keywords = commonKeywords.concat(py2.keywords);
        _builtins = commonBuiltins.concat(py2.builtins);
        _keywords = _keywords.concat(py3.keywords);
        _builtins = _builtins.concat(py3.builtins);
        if (parserConf.extra_keywords) {
            _keywords = _keywords.concat(parserConf.extra_keywords);
        }
        if (parserConf.extra_builtins) {
            _builtins = _builtins.concat(parserConf.extra_builtins);
        }
        keywords = arr2hash(_keywords);
        builtins = arr2hash(_builtins);
        CodeMirror.registerHelper("hintWords", MODE_NAME, _keywords.concat(_builtins));
        class RS_mode {
            start_state (basecolumn) {
                var self = this;
                return {
                    tokenize: self.token_base,
                    scopes: [ {
                        offset: basecolumn || 0,
                        type: "py",
                        align: null,
                        inline: null
                    } ],
                    lastStyle: null,
                    lastToken: null,
                    lastPunc: null,
                    dedent: 0,
                    indent: null,
                    is_glueLine: false,
                    block_expect: false
                };
            }
            load_state (state) {
                var self = this;
                Object.assign(self, state);
            }
            update_state (state) {
                var self = this;
                var st_keys;
                st_keys = Object.keys(self.start_state());
                st_keys.forEach(function(k) {
                    state[k] = self[k];
                });
            }
            dedent_process (stream) {
                var ՐՏ_57;
                var self = this;
                var indented, scopes;
                indented = stream.indentation();
                scopes = self.scopes;
                while (scopes[scopes.length-1].offset > indented && scopes[scopes.length-1].type === "py") {
                    scopes.pop();
                }
                return {
                    error: scopes.type === "py" && ((ՐՏ_57 = scopes[scopes.length-1].offset) !== indented && (typeof ՐՏ_57 !== "object" || !ՐՏ_eq(ՐՏ_57, indented)))
                };
            }
            token_re (stream) {
                var self = this;
                var escaped, inSet, next;
                escaped = false;
                inSet = false;
                while (next = stream.next()) {
                    if (!escaped) {
                        if (next === "/" && !inSet) {
                            return;
                        }
                        if (next === "[") {
                            inSet = true;
                        } else if (inSet && next === "]") {
                            inSet = false;
                        }
                    }
                    escaped = !escaped && next === "\\";
                }
            }
            token_base (stream) {
                var ՐՏ_58, ՐՏ_59;
                var self = this;
                var sol, block_expect, indent, scope_offset, line_offset;
                sol = stream.sol() && !self.is_glueLine;
                if (sol) {
                    block_expect = self.block_expect;
                    self.block_expect = false;
                    indent = self.indent = stream.indentation();
                    scope_offset = (ՐՏ_58 = self.scopes)[ՐՏ_58.length-1].offset;
                    line_offset = indent;
                    if (line_offset > scope_offset && block_expect) {
                        self.push_scope(stream, "py", line_offset);
                    } else if ((ՐՏ_59 = self.scopes)[ՐՏ_59.length-1].type === "py" && line_offset < scope_offset && self.dedent_process(stream).error) {
                        stream.skipToEnd();
                        return ERRORCLASS;
                    }
                }
                return self.token_baseInner(stream);
            }
            token_baseInner (stream) {
                var self = this;
                var ch, w, addClass;
                if (stream.eatSpace()) {
                    return null;
                }
                ch = stream.peek();
                if (ch === "#") {
                    stream.skipToEnd();
                    return "comment";
                }
                if (stream.match(/^[0-9\.]/, false)) {
                    if (stream.match(/^\d*\.\d+(e[\+\-]?\d+)?/i) || stream.match(/^\d+\.\d*/) || stream.match(/^\.\d+/)) {
                        stream.eat(/J/i);
                        return "number";
                    }
                    if (stream.match(/^0x[0-9a-f]+/i) || stream.match(/^0b[01]+L?/i) || stream.match(/^0o[0-7]+L?/i) || stream.match(/^[0-9]\d*(e[\+\-]?\d+)?(L|J)?/i)) {
                        return "number";
                    }
                }
                if (stream.match(stringPrefixes)) {
                    self.tokenize = self.token_string_factory(stream.current());
                    return self.tokenize(stream);
                }
                if (stream.match(tripleOperators) || stream.match(doubleOperators) || stream.match(wordOperators)) {
                    return "operator";
                }
                if (stream.eat("/")) {
                    if (!self.lastToken || self.lastStyle === "operator" || ՐՏ_in(self.lastToken, [ "return", "if", "elif", "while", "in" ]) || /^[\[{\(:=,]$/.test(self.lastToken)) {
                        self.token_re(stream);
                        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
                        return "string-2";
                    } else {
                        return "operator";
                    }
                }
                if (stream.match(singleOperators)) {
                    return "operator";
                }
                if (stream.match(punc)) {
                    return "punctuation";
                }
                if (w = stream.match(identifiers)) {
                    w = w[0];
                    if (keywords[w] || /^(get|set)$/.test(w) && stream.match(/ +[_A-Za-z$]/, false)) {
                        return "keyword";
                    }
                    if (builtins[w]) {
                        return "builtin";
                    }
                    if (/^(self|cls)\b/.test(w)) {
                        return "variable-2";
                    } else {
                        addClass = w.startsWith("$") ? " variable-buck" : "";
                        return (/^(def|class|get|set)$/.test(self.lastToken) ? "def" : "variable") + addClass;
                    }
                }
                stream.next();
                return ERRORCLASS;
            }
            token_string_factory (delimiter) {
                var self = this;
                var singleline, OUTCLASS;
                while ("rub".indexOf(delimiter.charAt(0).toLowerCase()) >= 0) {
                    delimiter = delimiter.substr(1);
                }
                singleline = delimiter.length === 1;
                OUTCLASS = "string";
                function token_string(stream) {
                    while (!stream.eol()) {
                        stream.eatWhile(/[^'"\\]/);
                        if (stream.eat("\\")) {
                            stream.next();
                            if (singleline && stream.eol()) {
                                return OUTCLASS;
                            }
                        } else if (stream.match(delimiter)) {
                            self.tokenize = self.token_base;
                            return OUTCLASS;
                        } else {
                            stream.eat(/['"]/);
                        }
                    }
                    if (singleline) {
                        if (parserConf.singleLineStringErrors) {
                            return ERRORCLASS;
                        } else {
                            self.tokenize = self.token_base;
                        }
                    }
                    return OUTCLASS;
                }
                token_string.isString = true;
                return token_string;
            }
            push_scope (stream, type, line_offset) {
                var ՐՏ_60, ՐՏ_61, ՐՏ_62, ՐՏ_63;
                var self = this;
                var offset, align, inline, tmp;
                offset = 0;
                align = null;
                inline = false;
                if (type !== ")" && (ՐՏ_60 = self.scopes)[ՐՏ_60.length-1].type === "def") {
                    self.scopes.pop();
                }
                if (type === "py") {
                    offset = line_offset;
                    self.block_expect = false;
                } else if (type === "def") {
                    tmp = (ՐՏ_61 = self.scopes)[ՐՏ_61.length-1];
                    offset = tmp.offset || 0;
                    align = tmp.align;
                } else {
                    if (!stream.match(/^(\s|#.*)*$/, false)) {
                        offset = (ՐՏ_62 = self.scopes)[ՐՏ_62.length-1].offset;
                        inline = true;
                    } else {
                        offset = (ՐՏ_63 = self.scopes)[ՐՏ_63.length-1].offset + hangingIndent;
                    }
                }
                self.scopes.push({
                    offset: offset,
                    type: type,
                    align: align,
                    inline: inline
                });
            }
            token_lexer (stream) {
                var ՐՏ_64, ՐՏ_65, ՐՏ_66, ՐՏ_67, ՐՏ_68, ՐՏ_69, ՐՏ_70, ՐՏ_71, ՐՏ_72, ՐՏ_73, ՐՏ_74;
                var self = this;
                var style, current, eol, delimiter_index;
                style = self.tokenize(stream);
                current = stream.current();
                self.is_glueLine = false;
                eol = stream.eol();
                if (!eol) {
                    if (current === "def" && (ՐՏ_64 = self.scopes)[ՐՏ_64.length-1].type !== "py") {
                        self.push_scope(stream, "def");
                        return style;
                    }
                } else if (current !== "(" && (ՐՏ_65 = self.scopes)[ՐՏ_65.length-1].type === "def") {
                    self.scopes.pop();
                    self.block_expect = false;
                }
                if (current === ".") {
                    style = stream.match(identifiers, false) ? null : ERRORCLASS;
                    if ((style === (ՐՏ_66 = null) || typeof style === "object" && ՐՏ_eq(style, ՐՏ_66)) && self.lastStyle === "meta") {
                        style = "meta";
                    }
                    return style;
                }
                if (current === "@") {
                    return stream.match(identifiers, false) ? "meta" : ERRORCLASS;
                }
                if ((style === "variable" || style === "builtin") && self.lastStyle === "meta") {
                    style = "meta";
                }
                if ((ՐՏ_67 = self.scopes)[ՐՏ_67.length-1].type === "py" && (current === "pass" || current === "return")) {
                    ++self.dedent;
                }
                if (current === ":") {
                    if (stream.match(/^(\s|#.*)*$/, false)) {
                        self.block_expect = self.block_expect || (ՐՏ_68 = self.scopes)[ՐՏ_68.length-1].type === "py";
                    }
                } else {
                    delimiter_index = current.length === 1 ? "[({".indexOf(current) : -1;
                    if ((delimiter_index !== (ՐՏ_69 = -1) && (typeof delimiter_index !== "object" || !ՐՏ_eq(delimiter_index, ՐՏ_69)))) {
                        self.push_scope(stream, "])}"[delimiter_index]);
                    } else {
                        delimiter_index = "])}".indexOf(current);
                        if ((delimiter_index !== (ՐՏ_70 = -1) && (typeof delimiter_index !== "object" || !ՐՏ_eq(delimiter_index, ՐՏ_70)))) {
                            if (((ՐՏ_71 = (ՐՏ_72 = self.scopes)[ՐՏ_72.length-1].type) === current || typeof ՐՏ_71 === "object" && ՐՏ_eq(ՐՏ_71, current))) {
                                self.scopes.pop();
                                if (current === ")" && (ՐՏ_73 = self.scopes)[ՐՏ_73.length-1].type === "def") {
                                    self.scopes.pop();
                                    if (!eol) {
                                        self.block_expect = true;
                                    }
                                }
                            } else {
                                return ERRORCLASS;
                            }
                        }
                    }
                }
                if (self.dedent > 0 && eol && !self.is_glueLine && (ՐՏ_74 = self.scopes)[ՐՏ_74.length-1].type === "py") {
                    if (self.scopes.length > 1) {
                        self.scopes.pop();
                    }
                    --self.dedent;
                }
                if (style === "punctuation" && current === "\\") {
                    if (eol) {
                        self.is_glueLine = true;
                    } else {
                        stream.skipToEnd();
                        style = ERRORCLASS;
                    }
                }
                return style;
            }
        }
        rs_mode = new RS_mode();
        function start_state(basecol) {
            return rs_mode.start_state(basecol);
        }
        function token(stream, state) {
            var ՐՏ_75;
            var style, current;
            rs_mode.load_state(state);
            style = rs_mode.token_lexer(stream);
            if (!rs_mode.is_glueLine) {
                if (style) {
                    rs_mode.lastStyle = style;
                }
                current = stream.current();
                if (current && style) {
                    rs_mode.lastToken = current;
                }
                if (stream.eol() && (ՐՏ_75 = rs_mode.scopes)[ՐՏ_75.length-1].type === ":") {
                    rs_mode.scopes.pop();
                    style = ERRORCLASS;
                }
            }
            rs_mode.update_state(state);
            return style;
        }
        function indent(state, textAfter) {
            var ՐՏ_76, ՐՏ_77, ՐՏ_78, ՐՏ_79, ՐՏ_80;
            var scope, closing, n, add_offset, slen;
            rs_mode.load_state(state);
            if (rs_mode.tokenize && ((ՐՏ_76 = rs_mode.tokenize) !== (ՐՏ_77 = rs_mode.token_base) && (typeof ՐՏ_76 !== "object" || !ՐՏ_eq(ՐՏ_76, ՐՏ_77)))) {
                return rs_mode.tokenize.isString ? CodeMirror.Pass : 0;
            }
            scope = (ՐՏ_78 = rs_mode.scopes)[ՐՏ_78.length-1];
            closing = textAfter && ((ՐՏ_79 = textAfter.charAt(0)) === (ՐՏ_80 = scope.type) || typeof ՐՏ_79 === "object" && ՐՏ_eq(ՐՏ_79, ՐՏ_80));
            if (rs_mode.block_expect) {
                if (!closing) {
                    n = 1;
                    add_offset = indentUnit;
                } else if (rs_mode.scopes.length > 1) {
                    n = 2;
                    add_offset = 0;
                }
                slen = rs_mode.scopes.length;
                while (n < slen && rs_mode.scopes[slen - n].inline) {
                    ++n;
                }
                return rs_mode.scopes[slen - n].offset + add_offset;
            } else if (closing && rs_mode.scopes.length > 1) {
                n = 2;
                slen = rs_mode.scopes.length;
                while (n < slen && rs_mode.scopes[slen - n].inline) {
                    ++n;
                }
                return rs_mode.scopes[slen - n].offset;
            } else {
                return scope.inline ? scope.offset + indentUnit : scope.offset;
            }
        }
        external = {
            startState: start_state,
            token: token,
            indent: indent,
            lineComment: "#",
            fold: "indent",
            electricInput: /^\s*[\}\]\)]$/
        };
        return external;
        '\n        words = def(str): return str.split(" ");\n\n\n        CodeMirror.defineMIME("text/x-cython", {\n            name: "python",\n            extra_keywords: words("by cdef cimport cpdef ctypedef enum except"+\n                              "extern gil include nogil property public"+\n                              "readonly struct union DEF IF ELIF ELSE")\n\n    ';
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.cm_rapydscript"];
    ՐՏ_mod.export("MODE_NAME", function(){return MODE_NAME;}, function(ՐՏ_v){if (typeof MODE_NAME !== "undefined") {MODE_NAME = ՐՏ_v;};});
    ՐՏ_mod.export("CodeMirror", function(){return CodeMirror;}, function(ՐՏ_v){if (typeof CodeMirror !== "undefined") {CodeMirror = ՐՏ_v;};});
    ՐՏ_mod.export("reg_mode", function(){return reg_mode;}, function(ՐՏ_v){if (typeof reg_mode !== "undefined") {reg_mode = ՐՏ_v;};});
    ՐՏ_mod.export("arr2hash", function(){return arr2hash;}, function(ՐՏ_v){if (typeof arr2hash !== "undefined") {arr2hash = ՐՏ_v;};});
    ՐՏ_mod.export("wordRegexp", function(){return wordRegexp;}, function(ՐՏ_v){if (typeof wordRegexp !== "undefined") {wordRegexp = ՐՏ_v;};});
    ՐՏ_mod.export("def_mode", function(){return def_mode;}, function(ՐՏ_v){if (typeof def_mode !== "undefined") {def_mode = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset"].body = function(){
    var __name__ = "asset";

    ՐՏ_modules["ՐՏ:asset"].export("fs_path", function(){return ՐՏ_modules["asset.fs_path"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("fs", function(){return ՐՏ_modules["asset.fs"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("mechanic", function(){return ՐՏ_modules["asset.mechanic"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("rs_vue", function(){return ՐՏ_modules["asset.rs_vue"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("common", function(){return ՐՏ_modules["asset.common"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("rs_getter", function(){return ՐՏ_modules["asset.rs_getter"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("store3", function(){return ՐՏ_modules["asset.store3"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("html_ml", function(){return ՐՏ_modules["asset.html_ml"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("vuepy_parser", function(){return ՐՏ_modules["asset.vuepy_parser"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("vuepy_compiler", function(){return ՐՏ_modules["asset.vuepy_compiler"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("vuepy_output", function(){return ՐՏ_modules["asset.vuepy_output"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("cm_vuepy", function(){return ՐՏ_modules["asset.cm_vuepy"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("cm_rapydscript", function(){return ՐՏ_modules["asset.cm_rapydscript"];}, function(){throw new Error("use Object.defineProperty!");});
    var fs = ՐՏ_modules["asset.fs"];var fs_path = ՐՏ_modules["asset.fs_path"];
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset"];
    ՐՏ_mod.export("fs", function(){return fs;}, function(ՐՏ_v){if (typeof fs !== "undefined") {fs = ՐՏ_v;};});
    ՐՏ_mod.export("fs_path", function(){return fs_path;}, function(ՐՏ_v){if (typeof fs_path !== "undefined") {fs_path = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:load_js"].body = function(){
    var __name__ = "load_js";

    function load(amd) {
        var mods;
        mods = [ "codemirror/lib/codemirror", "codemirror/mode/python/python", "codemirror/mode/javascript/javascript", "codemirror/mode/css/css", "codemirror/mode/xml/xml", "codemirror/mode/htmlmixed/htmlmixed", "codemirror/addon/hint/show-hint", "codemirror/addon/hint/javascript-hint", "codemirror/addon/hint/anyword-hint", "codemirror/addon/mode/simple", "codemirror/addon/edit/matchbrackets", "codemirror/addon/dialog/dialog", "codemirror/addon/search/searchcursor", "codemirror/addon/search/search", "codemirror/keymap/vim" ];
        return amd.import(mods);
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:load_js"];
    ՐՏ_mod.export("load", function(){return load;}, function(ՐՏ_v){if (typeof load !== "undefined") {load = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:click_out"].body = function(){
    var __name__ = "click_out";

    var handleOutsideClick, opt;
    handleOutsideClick = null;
    opt = {
        bind: function bind(el, binding, vnode) {
            var self = this;
            handleOutsideClick = function(e) {
                var handler, exclude, clickedOnExcludedEl, refName, excludedEl;
                handler = binding.value.handler;
                exclude = binding.value.exclude;
                clickedOnExcludedEl = false;
                for (var i=0;i++;i<exclude.length) {
                    refName = exclude[i];
                    excludedEl = vnode.context.$refs[refName];
                    if (clickedOnExcludedEl = excludedEl.contains(e.target)) {
                        break;
                    }
                }
                if (!(el.contains(e.target) || clickedOnExcludedEl)) {
                    vnode.context[handler]();
                }
            };
            document.addEventListener("click", handleOutsideClick);
            document.addEventListener("touchstart", handleOutsideClick);
        },
        unbind: function unbind() {
            var self = this;
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        }
    };
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:click_out"];
    ՐՏ_mod.export("handleOutsideClick", function(){return handleOutsideClick;}, function(ՐՏ_v){if (typeof handleOutsideClick !== "undefined") {handleOutsideClick = ՐՏ_v;};});
    ՐՏ_mod.export("opt", function(){return opt;}, function(ՐՏ_v){if (typeof opt !== "undefined") {opt = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.app_selector"].body = function(){
    var __name__ = "components.app_selector";

    var templ, vc;
    templ = "\n<XModal>\n    <template  v-slot:title>\n        Select an app to edit\n    </template>\n    <template  v-slot:body>\n        <div  v-for = 'app in app_list' class = 'field'>\n            <button  :class = \"app == cur_app ? 'is-primary' : null\" class = 'button is-fullwidth has-text-left' @click = '$emit(\"close\", app)'>{{app}}</button>\n        </div>\n    </template>\n    <template  v-slot:footer>\n        <div  class = 'container buttons is-right'>\n            <button  class = 'button is-primary' @click = '$emit(\"close\", \"cancel\")'>Cancel</button>\n        </div>\n    </template>\n</XModal>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    vc = new V_collector();
    class App_selector extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ;
            self.map_store = {};
            self.props = {
                app_list: Array,
                cur_app: String
            };
        }
    }
    function make() {
        return new App_selector();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.app_selector"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("App_selector", function(){return App_selector;}, function(ՐՏ_v){if (typeof App_selector !== "undefined") {App_selector = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.login"].body = function(){
    var __name__ = "components.login";

    var templ_login, vc;
    templ_login = "\n<XModal  :can_cancel = 'false' max_width = '300px'>\n    <template  v-slot:title>\n        Login\n    </template>\n    <template  v-slot:body>\n        <form  ref = 'frm' method = 'post' @submit.prevent.stop>\n            <div  class = 'field'>\n                <p  class = 'control has-icons-left'>\n                    <input  name = 'password' class = 'input' type = 'password' placeholder = 'password' @keydown.enter = \"ok\"/>\n                    <span  class = \"icon is-small is-left\">\n                        <i  class = \"fas fa-lock\"></i>\n                    </span>\n                </p>\n            </div>\n        </form>\n    </template>\n    <template  v-slot:footer>\n        <div  class = 'container buttons is-right'>\n            <button  class = 'button is-primary' @click.stop.prevent = 'ok'>OK</button>\n        </div>\n    </template>\n</XModal>\n";
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    var asyncer = ՐՏ_modules["asset.common"].asyncer;
    vc = new V_collector();
    var Login = (ՐՏ_81 = class Login extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ_login;
            self.map_store = {
                "login": "login*",
                "is_logged": "is_logged",
                "flash": "flash~"
            };
        }
        ok () {
            var self = this;
            setTimeout(function() {
                self.async_ok();
            }, 0);
        }
        *async_ok () {
            var self = this;
            yield self.login(new FormData(self.$refs.frm));
            if (self.is_logged) {
                self.flash("Hi!", "ok");
                self.$emit("close");
            } else {
                self.flash("invalid password", "error");
            }
        }
    }, (function(){
        Object.defineProperties(ՐՏ_81.prototype, {
            async_ok: {
                enumerable: false, 
                writable: true, 
                value: asyncer(ՐՏ_81.prototype.async_ok)
            }
        });
    })(), ՐՏ_81);
    function make() {
        return new Login();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.login"];
    ՐՏ_mod.export("templ_login", function(){return templ_login;}, function(ՐՏ_v){if (typeof templ_login !== "undefined") {templ_login = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Login", function(){return Login;}, function(ՐՏ_v){if (typeof Login !== "undefined") {Login = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.error"].body = function(){
    var __name__ = "components.error";

    var templ, vc;
    templ = "\n<div  style = 'white-space:nowrap;' @click.stop = 'open_file'>\n    <template  v-if = 'err'>\n        <div>\n            {{err.message}}\n        </div>\n        <div  style = 'cursor:pointer; text-align:right;'>\n            {{err_lc.filename}}: [{{err_lc.line}}:{{err_lc.col}}]\n            <button  class = 'button'>\n                <i  class = 'fa fa-bug'></i>\n            </button>\n        </div>\n    </template>\n</div>\n";
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    vc = new V_collector();
    var CError = (ՐՏ_82 = class CError extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ;
            self.map_store = {
                err: "compile_error",
                open: "/editor.open*",
                set_cursor: "/editor.set_cursor*"
            };
        }
        _init_data () {
            var self = this;
            var ret;
            ret = {};
            return ret;
        }
        err_lc () {
            var self = this;
            return self.err.readfile_error || self.err;
        }
        open_file () {
            var self = this;
            self.open(self.err_lc.filename, "w0");
            self.set_cursor(self.err_lc.line - 1, self.err_lc.col);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_82.prototype, {
            err_lc: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_82.prototype.err_lc)
            },
            open_file: {
                enumerable: false, 
                writable: true, 
                value: vc.meth(ՐՏ_82.prototype.open_file)
            }
        });
    })(), ՐՏ_82);
    function make() {
        return new CError();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.error"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("CError", function(){return CError;}, function(ՐՏ_v){if (typeof CError !== "undefined") {CError = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.folder_content"].body = function(){
    var __name__ = "components.folder_content";

    var templ_folder_content, vc;
    templ_folder_content = "\n<div  class = 'panel'>\n    <div  class = 'panel-block'>\n        <nav  class = \"breadcrumb\">\n            <ul>\n                <li  v-for = 'dir in path' @click.stop = 'change_dir(dir.id)'><a><span  class = 'tag is-medium'>{{dir.name}}</span></a></li>\n                <li><a><div  class = 'field is-grouped'>\n                    <div  class = 'field has-addons' style = 'margin-bottom:inherit;'>\n                        <p  class = 'control'><input  ref = 'new' style = 'width:180px;' class = 'input' :value = 'save_as && save_as.name' placeholder = 'newfile.py'/></p>\n                        <p  class = 'control mr-2'>\n                            <button  v-if = 'save_as' class = 'button is-info' @click.stop = \"(action('save_as', {name: $refs.new.value, content: save_as.content}))\">Save</button>\n                            <button  v-else class = 'button is-info' @click.stop = \"(action('create', $refs.new.value))\">Create</button>\n                        </p>\n                    </div>\n                    <p  class = 'control'><button  class = 'button is-primary' @click.stop = \"action('upload')\">Upload</button></p>\n                </div></a></li>\n            </ul>\n        </nav>\n    </div>\n    <div  class = 'panel-block'>\n        <div  class = 'buttons'>\n            <button  v-for = 'it in actions' class = 'button' @click.stop = 'it.disabled || action(it.name)' :disabled = 'it.disabled' :class = \"'is-' + (it.status ? it.status: 'primary' )\">\n                {{it.label}}\n                <span  v-if = 'selected_cnt(it.name)>0' class = 'badge'>{{selected_cnt(it.name)}}</span>\n            </button>\n            <button  v-if = \"selected_cnt('paste')>0\" class = 'button is-primary' @click.stop = \"action('clear_basket')\">Clear clipboard</button>\n        </div>\n    </div>\n    <div  class = 'panel-block is-block'>\n        <div>\n            <table  class = 'table is-narrow' style = 'width:100%;'>\n                <thead>\n                    <tr  style = 'background-color:whitesmoke;'>\n                        <th  v-for = 'fld, idx in fields' :colspan = 'idx == 0 ? 2 : 1'>{{fld.label}}</th>\n                        <th  v-if = 'row_actions'>actions</th>\n                    </tr>\n                    <tr  class = 'tr0'>\n                        <th  style = 'width:45px;'/>\n                        <th  v-for = 'fld in fields' :style = \"{width: (fld.width || 'initial')}\"/>\n                        <th  v-if = 'row_actions' style = 'min-width:80px;'/>\n                    </tr>\n                </thead>\n            </table>\n        </div>\n        <div  class = 'block' style = 'max-height: 65vh; overflow:auto;'>\n            <table  class = 'table  is-narrow' style = 'width:100%;'>\n                <thead>\n                    <tr  class = 'tr0'>\n                        <th  style = 'width:45px;'/>\n                        <th  v-for = 'fld in fields' :style = \"{width: (fld.width || 'initial')}\"/>\n                        <th  v-if = 'row_actions' style = 'min-width:80px;'/>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr  v-for = 'row in rows_c' @click.stop = 'toggle_select(row.id)' :key = 'row.id' :class = '{\"is-selected\": selected[row.id]}'>\n                        <td><i  class = 'clickable' :class = 'row._icon_.class' :style = 'row._icon_.style' @click.stop = 'click(row.id)'></i></td>\n                        <td  v-for = 'fld, idx in fields'>\n                            <span  v-if = 'idx==0' class = 'clickable' @click.stop = 'click(row.id)'>{{row[fld.name]}}</span>\n                            <span  v-else>{{row[fld.name]}}</span>\n                        </td>\n                        <td  v-if = 'row_actions'>\n                            <span  v-for = 'ract in row_actions(row)' style = 'margin-right:3px;'>\n                                <i  class = 'clickable' :class = 'ract.icon.class' :style = 'ract.icon.style' @click.stop = 'action(ract.name, row.id)'></i>\n                            </span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var blur_click_listener = ՐՏ_modules["asset.common"].blur_click_listener;
    function it_by_path(obj, path) {
        var cur;
        if (!(path instanceof Array)) {
            path = path.split(".");
        }
        cur = obj;
        path.forEach(function(p) {
            cur = cur[p];
        });
        return cur;
    }
    vc = new V_collector();
    var Folder_content = (ՐՏ_83 = class Folder_content extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ_folder_content;
            self.map_store = {
                type_field: "/explorer.type_field",
                fields: "/explorer.fields",
                rows: "/explorer.list_dir",
                sort_by: "/explorer.sort_by",
                selected: "/explorer.selected",
                path: "/explorer.path_arr",
                save_as: "/explorer.save_as",
                row_actions: "/explorer.row_actions",
                toggle_select: "/explorer.toggle_select~",
                change_dir: "/explorer.set_dir~",
                click: "/explorer.click_item*",
                action: "/explorer.doit*",
                basket: "/explorer.basket",
                shown: "show_explorer"
            };
        }
        _init_data () {
            var self = this;
            var ret;
            ret = {
                actions: [ {
                    name: "copy",
                    label: "Copy"
                }, {
                    name: "cut",
                    label: "Cut",
                    disabled: true
                }, {
                    name: "paste",
                    label: "Paste"
                }, {
                    name: "del",
                    label: "Del",
                    status: "danger"
                } ]
            };
            return ret;
        }
        toggle_select (mut, rid) {
            var self = this;
            var r;
            r = self.rows.find(function(it) {
                return it.id === rid;
            });
            if (r[self.type_field] === "file") {
                mut(rid);
            }
        }
        selected_cnt (act) {
            var self = this;
            if (act === "del") {
                return Object.keys(self.selected).length;
            } else if (act === "paste") {
                return self.basket.length - 1;
            }
        }
        rows_c () {
            var ՐՏitr53, ՐՏidx53, ՐՏitr54, ՐՏidx54;
            var self = this;
            var type_icon, type_field, rows_sorted, sort_by, ret, row, rec, fld;
            type_icon = {
                file: {
                    class: "far fa-file",
                    style: "color: gray"
                },
                dir: {
                    class: "fa fa-folder",
                    style: "color: gray"
                }
            };
            type_field = self.type_field || "type";
            rows_sorted = self.rows.slice(0);
            sort_by = self.sort_by || self.fields[0].name;
            rows_sorted.sort(function(a, b) {
                var a_type, b_type, ret;
                a_type = it_by_path(a, type_field);
                b_type = it_by_path(b, type_field);
                ret = a_type > b_type ? 1 : a_type < b_type ? -1 : 0;
                if (!ret) {
                    a = a[sort_by];
                    b = b[sort_by];
                    ret = a > b ? 1 : a < b ? -1 : 0;
                }
                return ret;
            });
            ret = [];
            ՐՏitr53 = ՐՏ_Iterable(rows_sorted);
            for (ՐՏidx53 = 0; ՐՏidx53 < ՐՏitr53.length; ՐՏidx53++) {
                row = ՐՏitr53[ՐՏidx53];
                rec = {
                    id: row.id
                };
                ՐՏitr54 = ՐՏ_Iterable(self.fields);
                for (ՐՏidx54 = 0; ՐՏidx54 < ՐՏitr54.length; ՐՏidx54++) {
                    fld = ՐՏitr54[ՐՏidx54];
                    rec[fld.name] = it_by_path(row, fld.name);
                    if (fld.formatter) {
                        rec[fld.name] = fld.formatter(rec[fld.name], row);
                    }
                }
                rec._icon_ = type_icon[row[type_field]];
                ret.push(rec);
            }
            return ret;
        }
        shown (n) {
            var self = this;
            if (n) {
                self.listener.start();
            } else {
                self.listener.stop();
            }
        }
        mounted () {
            var self = this;
            self.listener = blur_click_listener(self.$el, function(e) {
                self.$emit("blur", e);
            });
        }
        beforeDestroy () {
            var self = this;
            self.listener.stop();
        }
    }, (function(){
        Object.defineProperties(ՐՏ_83.prototype, {
            toggle_select: {
                enumerable: false, 
                writable: true, 
                value: vc.meth(ՐՏ_83.prototype.toggle_select)
            },
            selected_cnt: {
                enumerable: false, 
                writable: true, 
                value: vc.meth(ՐՏ_83.prototype.selected_cnt)
            },
            rows_c: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_83.prototype.rows_c)
            },
            shown: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_83.prototype.shown)
            }
        });
    })(), ՐՏ_83);
    function make() {
        return new Folder_content();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.folder_content"];
    ՐՏ_mod.export("templ_folder_content", function(){return templ_folder_content;}, function(ՐՏ_v){if (typeof templ_folder_content !== "undefined") {templ_folder_content = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("it_by_path", function(){return it_by_path;}, function(ՐՏ_v){if (typeof it_by_path !== "undefined") {it_by_path = ՐՏ_v;};});
    ՐՏ_mod.export("Folder_content", function(){return Folder_content;}, function(ՐՏ_v){if (typeof Folder_content !== "undefined") {Folder_content = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("blur_click_listener", function(){return blur_click_listener;}, function(ՐՏ_v){if (typeof blur_click_listener !== "undefined") {blur_click_listener = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.editor"].body = function(){
    var __name__ = "components.editor";

    var templ_editor, vc;
    templ_editor = "\n<div>\n    <div  v-if = '!doc_num' class = 'hero'>\n        <div  class = 'hero-body'>\n            <div  class = 'container  has-text-centered'>\n                <img  :src = \"$root.v3p_static + '/vue3pyj_art.png'\"/>\n            </div>\n        </div>\n    </div>\n    <div  v-show = 'doc_num' class = 'editor-grid'>\n        <div>\n            <div  class = 'tabs is-boxed mt-1 mb-0 active-has-shadow'>\n                <ul>\n                    <li  v-for = 'doc, doc_k, idx in doc_infos' :key = 'doc_k' :class = \"{'is-active': doc_num == doc_k}\">\n                        <a  @click = '(!$event.v3p_close && (swap_doc(doc_k), edit_focus()))'>\n                            <span>\n                                {{doc.name}}\n                            </span>\n                            <span  class = 'icon' @click = '($event.v3p_close = true, close(doc_k))'>\n                                <i  class = 'fa fa-times' :style = '{color: doc.is_saved ? null : \"red\"}' :title = 'doc.is_saved ? null : \"not saved\"'></i>\n                            </span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div>\n            <div  class = 'level has-shadow py-1'>\n                <div  class = 'level-left ml-3'>\n                    <div  class = 'level-item'>\n                        <span  class = 'has-text-weight-bold' style = 'min-width:200px;'>{{doc_num && doc_info.name || \"\"}}</span>\n                    </div>\n                    <div  class = 'level-item'>\n                        <span  style = 'min-width:150px;'>ln: {{cursor.line+1}} col: {{cursor.ch}}</span>\n                    </div>\n                    <div  class = 'level-item'>\n                        <button  class = 'button' :class = \"{'is-primary': vim_mode}\" @click = 'toggle_vim()' title = 'toggle Vim-mode [Alt-v]'>Vim</button>\n                    </div>\n                </div>\n                <div  class = 'level-right mr-3'>\n                    <div  class = 'level-item'>\n                        <button  class = 'button' @click = \"open_dir\">\n                            {{doc_dir}}\n                        </button>\n                        <span  class = 'pl-2' @click = \"open_dir\">/ {{doc_info && doc_info.name}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div  style = 'overflow:auto;'>\n            <div  class = 'editor-window'>\n                <div  ref = 'cm_el' style = 'height:100%;'></div>\n            </div>\n        </div>\n        <div>\n            <div  style = 'height:45px;'>\n                <div  v-if = 'error' @click = 'go_error' style = 'cursor:pointer;'>\n                    <div>\n                        File: {{error.filename}}\n                    </div>\n                    <template  v-if = 'error.readfile_error'>\n                        {{error.message}} {{error.readfile_error.line}}:{{error.readfile_error.col}}\n                    </template>\n                    <template  v-else>\n                        {{error.message}} {{error.line}}:{{error.col}}\n                    </template>\n                    <div>{{error.stack}}</div>\n                </div>\n                <div  v-else>ok</div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    vc = new V_collector();
    var Editor = (ՐՏ_84 = class Editor extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ_editor;
            self.map_store = {
                push_cmd: "push_cmd~",
                get_fs: "get_fs",
                windows: "/editor.windows",
                doc_infos: "/editor.doc_infos",
                set_active_window: "/editor.set_active_window~",
                mount_cm: "/editor.mount_cm*",
                swap_doc: "/editor.swap_doc*",
                close: "/editor.close*",
                web23py: "web23py",
                vim_mode: "/editor.vim_mode",
                toggle_vim: "/editor.toggle_vim*",
                toggle_explorer: "toggle_explorer~",
                set_dir: "/explorer.set_dir~"
            };
        }
        data () {
            var self = this;
            var ret;
            self.console = console;
            ret = {
                cursor: {
                    line: 0,
                    ch: 0
                },
                error: null
            };
            return ret;
        }
        open_dir () {
            var self = this;
            self.set_dir(self.doc_info.parent);
            location.hash = "#cmd:toggle_explorer";
        }
        w23p_ver () {
            var self = this;
            return /^.+(\d)/.exec(self.web23py)[1];
        }
        doc_num () {
            var self = this;
            return self.windows.w0 && self.windows.w0.doc_num;
        }
        doc_info () {
            var self = this;
            return self.doc_num && self.doc_infos[self.doc_num];
        }
        doc_dir () {
            var self = this;
            var fs;
            if (!self.doc_info) {
                return;
            }
            fs = self.get_fs();
            return fs.path_by_id(self.doc_info.parent).path;
        }
        mounted () {
            var self = this;
            function clean_up(cm) {
                self.cm = cm;
                self.set_active_window("w0");
                self.$refs.cm_el.children[0].style.lineHeight = "1.5";
                cm.on("cursorActivity", function() {
                    self.cursor_move();
                });
                cm.setSize("100%", "100%");
            }
            self.mount_cm(self.$refs.cm_el, "w0").then(clean_up);
        }
        edit_focus () {
            var self = this;
            self.$nextTick(function() {
                self.cm && self.cm.focus();
            });
        }
        cursor_move () {
            var self = this;
            self.cursor = self.cm.getCursor();
        }
        doc_num_watch (to_doc, cur_doc) {
            var self = this;
            self.$nextTick(function() {
                self.cm.refresh();
                self.cursor_move();
                self.edit_focus();
            });
        }
        go_error () {
            var ՐՏ_85, ՐՏ_86;
            var self = this;
            var err;
            err = self.error.readfile_error || self.error;
            if (!err || ((ՐՏ_85 = err.line) === (ՐՏ_86 = void 0) || typeof ՐՏ_85 === "object" && ՐՏ_eq(ՐՏ_85, ՐՏ_86))) {
                return;
            }
            self.cm.focus();
            self.cm.doc.setCursor(err.line - 1, err.col);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_84.prototype, {
            w23p_ver: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_84.prototype.w23p_ver)
            },
            doc_num: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_84.prototype.doc_num)
            },
            doc_info: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_84.prototype.doc_info)
            },
            doc_dir: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_84.prototype.doc_dir)
            },
            edit_focus: {
                enumerable: false, 
                writable: true, 
                value: vc.meth(ՐՏ_84.prototype.edit_focus)
            },
            cursor_move: {
                enumerable: false, 
                writable: true, 
                value: vc.meth(ՐՏ_84.prototype.cursor_move)
            },
            doc_num_watch: {
                enumerable: false, 
                writable: true, 
                value: vc.watch("doc_num")(ՐՏ_84.prototype.doc_num_watch)
            },
            go_error: {
                enumerable: false, 
                writable: true, 
                value: vc.meth(ՐՏ_84.prototype.go_error)
            }
        });
    })(), ՐՏ_84);
    function make() {
        return new Editor();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.editor"];
    ՐՏ_mod.export("templ_editor", function(){return templ_editor;}, function(ՐՏ_v){if (typeof templ_editor !== "undefined") {templ_editor = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Editor", function(){return Editor;}, function(ՐՏ_v){if (typeof Editor !== "undefined") {Editor = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.modal"].body = function(){
    var __name__ = "components.modal";

    var templ, templ_dialog, vc, vc0, vc1, dialog;
    templ = '\n<div  class = "modal" :class = "{\'is-active\': is_active}">\n    <div  class = "modal-background" @click = "can_cancel$ && close(\'ui\')"></div>\n    <div  class = "modal-card" :style = "{\'max-height\': max_height$, \'max-width\': max_width$}">\n        <header  class = "modal-card-head">\n            <p  class = "modal-card-title">\n                <slot  name = \'title\'></slot>\n            </p>\n            <button  v-if = \'can_cancel$\' class = "delete" aria-label = "close" @click.stop = "close(\'ui\')"/>\n        </header>\n        <section  class = "modal-card-body">\n            <slot  name = \'body\'></slot>\n        </section>\n        <footer  class = "modal-card-foot">\n            <slot  name = \'footer\'></slot>\n        </footer>\n    </div>\n</div>\n';
    templ_dialog = "\n<XModal  :can_cancel = 'true' :max_width = 'max_width' :max_height = 'max_height' @close = \"$emit('close')\">\n    <template  v-slot:title>\n        {{title}}\n    </template>\n    <template  v-slot:body>\n        <div  class = 'media'>\n            <div  class = 'media-left' :class = \"'has-text-' + status\">\n                <i  :class = \"'fa fa-' + icon + ' fa-3x'\"></i>\n            </div>\n            <div  class = 'media-content'>\n                {{message}}\n            </div>\n        </div>\n    </template>\n    <template  v-slot:footer>\n        <div  class = 'container buttons is-right'>\n            <button  class = 'button' :class = \"'is-' + status\" @click.stop.prevent = \"$emit('ok')\">{{ok_text}}</button>\n            <button  v-if = \"type == 'confirm'\" class = 'button' @click.stop.prevent = \"$emit('cancel')\">{{cancel_text}}</button>\n        </div>\n    </template>\n</XModal>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var Vue = ՐՏ_modules["Vue"];
    vc0 = vc = new V_collector();
    class Dialog extends RS_vue {
        constructor () {
            super(vc0, "XDialog");
            var self = this;
            self.props = {
                can_cancel: {
                    type: Boolean,
                    default: true
                },
                max_height: {
                    type: String,
                    default: "600px"
                },
                max_width: {
                    type: String,
                    default: "300px"
                },
                type: {
                    type: String
                },
                ok_text: {
                    type: String,
                    default: "OK"
                },
                cancel_text: {
                    type: String,
                    default: "Cancel"
                },
                title: {
                    type: String,
                    default: "Confirmation"
                },
                message: String,
                icon: {
                    type: String,
                    default: "exclamation-circle"
                },
                status: {
                    type: String,
                    default: "warning"
                }
            };
            self.template = templ_dialog;
        }
    }
    vc1 = vc = new V_collector();
    var Modal = (ՐՏ_87 = class Modal extends RS_vue {
        constructor () {
            super(vc1, __name__);
            var self = this;
            self.props = {
                can_cancel: {
                    type: Boolean,
                    default: true
                },
                max_height: String,
                max_width: String
            };
            self.template = templ;
        }
        data () {
            var ՐՏitr55, ՐՏidx55;
            var self = this;
            var data, open_props, props_keys, k;
            data = {
                is_active: false,
                can_cancel$: self.can_cancel,
                max_height$: self.max_height,
                max_width$: self.max_width
            };
            if (open_props = self.$parent.$options.modal_props) {
                props_keys = Object.keys(self.$options.props);
                ՐՏitr55 = ՐՏ_Iterable(Object.keys(open_props));
                for (ՐՏidx55 = 0; ՐՏidx55 < ՐՏitr55.length; ՐՏidx55++) {
                    k = ՐՏitr55[ՐՏidx55];
                    if (ՐՏ_in(k, props_keys)) {
                        data[k + "$"] = open_props[k];
                    }
                }
            }
            return data;
        }
        is_active (n, o) {
            var self = this;
            var p;
            if (!n) {
                p = self.$parent;
                p.$el.parentNode.removeChild(p.$el);
                p.$destroy();
            }
        }
        mounted () {
            var self = this;
            self.is_active = true;
            self.$parent.$modal = self;
        }
        close (ui) {
            var self = this;
            if (ui) {
                self.$emit("close");
            }
            self.is_active = false;
        }
    }, (function(){
        Object.defineProperties(ՐՏ_87.prototype, {
            is_active: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_87.prototype.is_active)
            }
        });
    })(), ՐՏ_87);
    dialog = Vue.extend(new Dialog());
    function make() {
        return new Modal();
    }
    function open(parent, opt) {
        var ՐՏitr56, ՐՏidx56;
        var propsData, cmp, vcmp, vm, is_dia, el, res, p, e;
        propsData = opt.props;
        if (cmp = opt.component) {
            vcmp = Vue.extend(cmp);
            vm = new vcmp({
                parent: parent,
                propsData: propsData
            });
            vm.$options.modal_props = opt;
            is_dia = false;
        } else {
            vm = new dialog({
                parent: parent,
                propsData: propsData
            });
            is_dia = true;
        }
        el = document.body.appendChild(document.createElement("div"));
        vm.$mount(el);
        if (!is_dia) {
            return vm;
        }
        res = null;
        p = new Promise(function(resolve) {
            res = resolve;
        });
        ՐՏitr56 = ՐՏ_Iterable([ "ok", "cancel", "close" ]);
        for (ՐՏidx56 = 0; ՐՏidx56 < ՐՏitr56.length; ՐՏidx56++) {
            e = ՐՏitr56[ՐՏidx56];
            const ce = e;
            vm.$on(ce, function() {
                res(ce === "close" ? "cancel" : ce);
                if (ce !== "close") {
                    setTimeout(function() {
                        vm.$modal.close();
                    }, 0);
                }
            });
        }
        return p;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.modal"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("templ_dialog", function(){return templ_dialog;}, function(ՐՏ_v){if (typeof templ_dialog !== "undefined") {templ_dialog = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("vc0", function(){return vc0;}, function(ՐՏ_v){if (typeof vc0 !== "undefined") {vc0 = ՐՏ_v;};});
    ՐՏ_mod.export("vc1", function(){return vc1;}, function(ՐՏ_v){if (typeof vc1 !== "undefined") {vc1 = ՐՏ_v;};});
    ՐՏ_mod.export("dialog", function(){return dialog;}, function(ՐՏ_v){if (typeof dialog !== "undefined") {dialog = ՐՏ_v;};});
    ՐՏ_mod.export("Dialog", function(){return Dialog;}, function(ՐՏ_v){if (typeof Dialog !== "undefined") {Dialog = ՐՏ_v;};});
    ՐՏ_mod.export("Modal", function(){return Modal;}, function(ՐՏ_v){if (typeof Modal !== "undefined") {Modal = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("open", function(){return open;}, function(ՐՏ_v){if (typeof open !== "undefined") {open = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("Vue", function(){return Vue;}, function(ՐՏ_v){if (typeof Vue !== "undefined") {Vue = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.search_view"].body = function(){
    var __name__ = "components.search_view";

    var templ, vc;
    templ = "\n<div  class = 'panel'>\n    <div  class = 'panel-heading'>\n        <div  class = 'level'>\n            <div  class = 'level-left'>\n                <div  class = 'level-item'>\n                    <div  class = 'field is-grouped'>\n                        <p  class = 'control' v-for = \"ext in ['PY', 'PYJ','VUEPY', 'JS', 'CSS', 'HTML']\">\n                            <button  class = 'button' :class = \"{'is-primary': search_filters.get(ext)}\" @click = 'search_filters.toggle(ext)'>{{ext}}</button>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div  class = 'level-right ml-2'>\n                <div  class = 'level-item'>\n                    <button  class = 'delete' @click = 'activator.set(false)'/>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div  class = 'panel-block'>\n        <div  class = 'panel is-shadowless' style = 'max-height:300px; overflow:auto; width:100%'>\n            <a  class = 'panel-block px-3' v-for = \"it, idx in result\" :key = 'idx' style = 'width:100%;'>\n                <div  class = 'container' @click = 'open(it.id)'>\n                    <div  class = 'level'>\n                        <div  class = 'level-left'>\n                            <div  class = 'level-item'>\n                                <strong  :style = \"{'color': it.color}\">{{it.fname}}</strong>\n                            </div>\n                        </div>\n                        <div  class = 'level-right ml-2'>\n                            <div  class = 'level-item'>\n                                {{it.dir}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n";
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    vc = new V_collector();
    var Search_view = (ՐՏ_88 = class Search_view extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ;
            self.map_store = {
                set_search: "search=",
                search_result: "search_result",
                search_filters: "search_filters",
                open: "/editor.open_by_id_in_active_window*"
            };
            self.props = {
                activator: Object
            };
        }
        result () {
            var ՐՏitr57, ՐՏidx57, ՐՏ_89, ՐՏ_90, ՐՏ_91;
            var self = this;
            var map_color, ret, i, it, rec;
            map_color = {
                "py": "blue",
                "pyj": "green",
                "js": "darkviolet",
                "css": "darkcyan",
                "html": "darkorange"
            };
            ret = [];
            i = 0;
            ՐՏitr57 = ՐՏ_Iterable(enumerate(self.search_result));
            for (ՐՏidx57 = 0; ՐՏidx57 < ՐՏitr57.length; ՐՏidx57++) {
                [i, it] = ՐՏitr57[ՐՏidx57];
                it = it[1];
                rec = {
                    id: (ՐՏ_89 = it.ids)[ՐՏ_89.length-1]
                };
                rec.idx = i;
                rec.fname = (ՐՏ_90 = it._path)[ՐՏ_90.length-1];
                rec.dir = it._path.slice(0, -1).join("/") || "/";
                rec.ext = (ՐՏ_91 = rec.fname.split("."))[ՐՏ_91.length-1] || "";
                rec.color = map_color[rec.ext] || "black";
                ret.push(rec);
            }
            ret = ret.sort(function(a, b) {
                var ret;
                if (a.ext === b.ext) {
                    ret = a.fname === b.fname ? 0 : a.fname > b.fname ? 1 : -1;
                } else {
                    ret = a.ext > b.ext ? 1 : -1;
                }
                return ret;
            });
            return ret;
        }
    }, (function(){
        Object.defineProperties(ՐՏ_88.prototype, {
            result: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_88.prototype.result)
            }
        });
    })(), ՐՏ_88);
    function make() {
        return new Search_view();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.search_view"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Search_view", function(){return Search_view;}, function(ՐՏ_v){if (typeof Search_view !== "undefined") {Search_view = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components"].body = function(){
    var __name__ = "components";

    ՐՏ_modules["ՐՏ:components"].export("app_selector", function(){return ՐՏ_modules["components.app_selector"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("login", function(){return ՐՏ_modules["components.login"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("error", function(){return ՐՏ_modules["components.error"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("folder_content", function(){return ՐՏ_modules["components.folder_content"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("editor", function(){return ՐՏ_modules["components.editor"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("modal", function(){return ՐՏ_modules["components.modal"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("search_view", function(){return ՐՏ_modules["components.search_view"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("base_layout", function(){return ՐՏ_modules["components.base_layout"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("flash", function(){return ՐՏ_modules["components.flash"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("dropdown", function(){return ՐՏ_modules["components.dropdown"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("navbar", function(){return ՐՏ_modules["components.navbar"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("navbar_item", function(){return ՐՏ_modules["components.navbar_item"];}, function(){throw new Error("use Object.defineProperty!");});

    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components"];
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.base_layout"].body = function(){
    var __name__ = "components.base_layout";

    var templ, modal_demo, vc;
    templ = "\n<div  data-vc = 'layout'>\n    <XNavbar  :fixed_top = 'true' class = 'is-dark lift' :menus = 'menus'>\n        <template  v-slot:brand><NavbarItem><img  :src = \"$root.v3p_static + '/vue3pyj_logo.png'\" class = 'metalic-btn' style = 'border-radius:6px; padding:3px' alt = \"vue3pyj\"/></NavbarItem></template>\n        <template  v-slot:search>\n            <NavbarItem  :dropdown = 'true' :arrowless = 'true' :use_activator = 'true' :panel = 'true'>\n                <template  v-slot:label = \"{activator}\">\n                    <div  class = 'field has-addons'>\n                        <p  class = 'control'>\n                            <input  ref = 'search' class = 'input' type = 'text' placeholder = \"Global search\" @keyup.enter = 'search(activator)'/>\n                        </p>\n                        <p  class = 'control'>\n                            <button  class = 'button is-info' @click.stop = 'search(activator)'>\n                                <i  class = 'fa fa-search'></i>\n                            </button>\n                        </p>\n                    </div>\n                </template>\n                <template  v-slot:default = \"{activator}\">\n                    <SearchView  :activator = 'activator'></SearchView>\n                </template>\n            </NavbarItem>\n        </template>\n        <template  v-slot:flash = \"{side}\">\n            <NavbarItem  ref = 'flash' :dropdown = 'true' :hoverable = 'true' :side = \"side\">\n                <template  v-slot:label>\n                    <i  class = 'fa fa-bullhorn fa-flip-horizontal'></i>\n                </template>\n                <NavbarItem  class = 'px-3'>\n                    <div  class = 'notification py-1' :class = \"'is-'+flash_status\">\n                        <template  v-if = 'flash.component'>\n                            <component  :is = 'flash.component' v-bind = 'flash.cargs'></component>\n                        </template>\n                        <template  v-else>\n                            {{flash.msg}}\n                        </template>\n                    </div>\n                </NavbarItem>\n            </NavbarItem>\n        </template>\n    </XNavbar>\n    <main>\n        <slot></slot>\n    </main>\n</div>\n";
    modal_demo = "\n<XModal>\n    <template  v-slot:title>\n        title\n    </template>\n    <template  v-slot:body>\n        body\n    </template>\n    <template  v-slot:footer>\n        <button  class = 'button' @click = \"$emit('ok')\">ok</button>\n        <button  class = 'button' @click = \"$emit('cancel')\">cancel</button>\n    </template>\n</XModal>\n";
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    var modal = ՐՏ_modules["components.modal"];var search_view = ՐՏ_modules["components.search_view"];
    function install_cmd_router(push_cmd) {
        function parse_cmd(s) {
            var cmd_args, cmd, raw_args, args;
            s = decodeURIComponent(s);
            cmd_args = /(^\w+)(\(.+)?/.exec(s);
            if (!(cmd = cmd_args[1])) {
                return;
            }
            if ((raw_args = cmd_args[2]) && !(args = /^\((.*?)\)$/.exec(raw_args))) {
                throw new Error("bad command args: " + raw_args);
            }
            args = args && args[1].trim() ? JSON.parse("[" + args[1] + "]") : [];
            return [ cmd, args ];
        }
        function cmd_router(e) {
            var hash, cmd_args;
            if ((hash = location.hash) && hash.startsWith("#cmd:")) {
                cmd_args = parse_cmd(hash.slice(5));
                if (cmd_args) {
                    push_cmd(cmd_args[0], cmd_args[1]);
                }
                location.hash = "";
            }
        }
        window.addEventListener("hashchange", cmd_router);
    }
    vc = new V_collector();
    var Layout = (ՐՏ_92 = class Layout extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ;
            self.components = {
                "SearchView": search_view.make()
            };
            self.map_store = {
                push_cmd: "push_cmd~",
                flash: "flash",
                is_busy: "is_busy",
                menus: "menus",
                modal_state: "modal_state",
                close_modal: "close_modal*",
                set_search: "search=",
                search_result: "search_result",
                search_filters: "search_filters"
            };
            self.modal = null;
        }
        search (activator) {
            var self = this;
            var v;
            v = self.$refs.search.value;
            self.set_search(v);
            activator.set(true);
        }
        flash_status () {
            var self = this;
            var map_status;
            map_status = {
                ok: "success",
                err: "danger",
                error: "danger",
                warn: "warning"
            };
            return map_status[self.flash.status];
        }
        flash_watcher () {
            var self = this;
            var opt;
            opt = {
                duration: 2e3,
                message: self.flash.msg,
                status: self.flash_status,
                component: self.flash.component,
                props: self.flash.cargs,
                basket: self.$refs.flash
            };
            self.$flash(opt);
        }
        modal_handler (v, n) {
            var self = this;
            var modal_state, component, props;
            if (v) {
                modal_state = self.modal_state;
                component = modal_state.inner_component;
                if (ՐՏ_in(component, [ "XConfirm", "XDialog" ])) {
                    props = Object.assign({
                        type: component
                    }, self.modal_state.inner_args);
                    modal.open(self, {
                        props: props
                    }).then(function() {
                        var args = [].slice.call(arguments, 0);
                        self.close_modal(...args);
                    });
                } else {
                    if (ՐՏ_type(component) === "String") {
                        component = self.constructor.component(component);
                    }
                    self.modal = modal.open(self, {
                        props: self.modal_state.inner_args,
                        component: component,
                        can_cancel: modal_state.cancelable
                    });
                    self.modal.$on("close", function() {
                        var args = [].slice.call(arguments, 0);
                        self.close_modal(...args);
                    });
                }
            } else {
                if (self.modal && self.modal.$modal.is_active) {
                    self.modal.$modal.close();
                }
                self.modal = null;
            }
        }
        created () {
            var self = this;
            install_cmd_router(self.push_cmd);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_92.prototype, {
            flash_status: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_92.prototype.flash_status)
            },
            flash_watcher: {
                enumerable: false, 
                writable: true, 
                value: vc.watch("flash.trigger")(ՐՏ_92.prototype.flash_watcher)
            },
            modal_handler: {
                enumerable: false, 
                writable: true, 
                value: vc.watch("modal_state.is_active")(ՐՏ_92.prototype.modal_handler)
            }
        });
    })(), ՐՏ_92);
    function make() {
        return new Layout();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.base_layout"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("modal_demo", function(){return modal_demo;}, function(ՐՏ_v){if (typeof modal_demo !== "undefined") {modal_demo = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("install_cmd_router", function(){return install_cmd_router;}, function(ՐՏ_v){if (typeof install_cmd_router !== "undefined") {install_cmd_router = ՐՏ_v;};});
    ՐՏ_mod.export("Layout", function(){return Layout;}, function(ՐՏ_v){if (typeof Layout !== "undefined") {Layout = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    ՐՏ_mod.export("modal", function(){return modal;}, function(ՐՏ_v){if (typeof modal !== "undefined") {modal = ՐՏ_v;};});
    ՐՏ_mod.export("search_view", function(){return search_view;}, function(ՐՏ_v){if (typeof search_view !== "undefined") {search_view = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.flash"].body = function(){
    var __name__ = "components.flash";

    var templ, notify, vc, fcmp;
    templ = "\n<div  style = 'z-index:50;position:fixed;top:0;left:0;right:0;'>\n<transition  name = 'trn' @before-leave = 'leave' @after-leave = \"$emit('kill')\">\n    <div  ref = 'el' v-if = 'is_active' class = \"notification flash-tr\" :class = \"'is-' + status\">\n        <button  class = 'delete' @click = \"$emit('close')\"/>\n        <div  v-if = 'message' v-html = 'message'></div>\n        <slot  v-else></slot>\n    </div>\n</transition></div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var Vue = ՐՏ_modules["Vue"];
    notify = Vue.extend({
        name: "XNotify",
        template: templ,
        props: {
            message: String,
            status: String,
            basket: Object
        },
        data: function() {
            return {
                is_active: false
            };
        },
        mounted: function mounted() {
            var self = this;
            self.is_active = true;
        },
        methods: {
            leave: function leave(el, done) {
                var self = this;
                var basket_el, pos, top, right;
                if (self.basket) {
                    basket_el = self.basket.$el || self.basket;
                    pos = basket_el.getBoundingClientRect();
                    top = pos.height / 2;
                    right = window.innerWidth - pos.right + pos.width / 2 - self.$refs.el.clientWidth / 2;
                    requestAnimationFrame(function() {
                        el.style.transformOrigin = "top";
                        el.style.top = top + "px";
                        el.style.right = right + "px";
                        el.style.transform = "scale(0.1)";
                    });
                } else {
                    el.style.right = "-300px";
                }
            }
        }
    });
    vc = new V_collector();
    class Flash extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.props = {
                component: [ Object, String ],
                message: String,
                status: {
                    type: String,
                    default: "info"
                },
                duration: {
                    type: Number,
                    default: 500
                },
                props: Object,
                basket: Object
            };
        }
        render (h) {
            var self = this;
            var notify_props, cmp;
            notify_props = {
                message: self.message,
                status: self.status,
                basket: self.basket
            };
            if (self.component) {
                cmp = h(self.component, {
                    props: self.props
                });
            }
            return h(notify, {
                props: notify_props,
                on: {
                    "close": function() {
                        self.kill();
                    },
                    "kill": function() {
                        self.kill();
                    }
                }
            }, [ cmp ]);
        }
        kill (dur) {
            var self = this;
            var prnt;
            if (self._isDestroyed) {
                return;
            }
            if (self.kill_tm) {
                clearTimeout(self.kill_tm);
                self.kill_tm = null;
            }
            if (dur === void 0) {
                if (prnt = self.$el.parentNode) {
                    prnt.removeChild(self.$el);
                }
                self.$destroy();
                return;
            }
            self.kill_tm = setTimeout(function() {
                self.$children[0].is_active = false;
            }, dur);
        }
        mounted () {
            var self = this;
            self.kill(self.duration);
        }
    }
    function make() {
        return new Flash();
    }
    fcmp = Vue.extend(new Flash());
    function open(opt, parent) {
        var vm, el;
        parent = parent || this;
        vm = new fcmp({
            parent: parent,
            propsData: opt
        });
        el = document.body.appendChild(document.createElement("div"));
        vm.$mount(el);
        return vm;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.flash"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("notify", function(){return notify;}, function(ՐՏ_v){if (typeof notify !== "undefined") {notify = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("fcmp", function(){return fcmp;}, function(ՐՏ_v){if (typeof fcmp !== "undefined") {fcmp = ՐՏ_v;};});
    ՐՏ_mod.export("Flash", function(){return Flash;}, function(ՐՏ_v){if (typeof Flash !== "undefined") {Flash = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("open", function(){return open;}, function(ՐՏ_v){if (typeof open !== "undefined") {open = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("Vue", function(){return Vue;}, function(ՐՏ_v){if (typeof Vue !== "undefined") {Vue = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.dropdown"].body = function(){
    var __name__ = "components.dropdown";

    var templ, vc;
    templ = '\n<div  class = "dropdown" :class = "{\'is-active\':is_active}">\n    <div  class = "dropdown-trigger" @click = \'is_active = !is_active\'>\n        <button  class = "button" aria-haspopup = "true" aria-controls = "dropdown-menu">\n            <span>{{label}}</span>\n            <span  class = "icon is-small">\n                <i  class = "fas fa-angle-down" aria-hidden = "true"></i>\n            </span>\n        </button>\n    </div>\n    <div  class = "dropdown-menu" role = "menu">\n        <div  class = "dropdown-content">\n            <slot></slot>\n        </div>\n    </div>\n</div>\n';
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    vc = new V_collector();
    class Dropdown extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ;
            self.props = {
                label: String
            };
            self.data = function() {
                return {
                    is_active: false
                };
            };
        }
    }
    function make() {
        return new Dropdown();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.dropdown"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Dropdown", function(){return Dropdown;}, function(ՐՏ_v){if (typeof Dropdown !== "undefined") {Dropdown = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.navbar"].body = function(){
    var __name__ = "components.navbar";

    var templ, vc;
    templ = "\n<nav  class = \"navbar\" :class = \"{'is-fixed-top': fixed_top}\">\n    <div  class = 'container'>\n        <div  class = 'navbar-brand'>\n            <slot  name = 'brand'></slot>\n            <a  class = \"navbar-burger burger\" @click = 'is_active = !is_active'>\n                <span  v-for = 'i in 3' aria-hidden = \"true\"/>\n            </a>\n        </div>\n        <div  class = \"navbar-menu\" :class = \"{'is-active':is_active}\">\n            <template  v-for = \"side in ['left', 'right']\">\n                <div  :class = \"'navbar-' + (side == 'left' ? 'start' : 'end')\">\n                    <template  v-for = \"item in menus[side]\">\n                        <template  v-if = \"item.slot\">\n                            <slot  :name = 'item.slot' v-bind:side = 'side'></slot>\n                        </template>\n                        <template  v-else>\n                            <NavbarItem  \n                                :side = 'side' \n                                :href = \"item.href || null\" \n                                v-on = \"item.on || null\" \n                                v-bind = \"item.attrs || null\" \n                                :title = \"item.title || null\" \n                                :dropdown = '!!item.subitems'>\n                                <template  v-slot:label>\n                                    <template  v-if = \"get_slot(item.label)\"><slot  :name = 'get_slot(item.label ,)' v-bind:side = 'side'></slot></template>\n                                    <template  v-else-if = \"item.html\">\n                                        <component  :is = \"to_component(item.html)\"></component>\n                                    </template>\n                                    <template  v-else><strong>{{item.label}}</strong></template>\n                                </template>\n                                <NavbarItem  \n                                    v-for = 'subitem, idx in item.subitems' \n                                    :side = 'side' \n                                    :href = \"subitem.href || null\" \n                                    v-on = \"subitem.on || null\" \n                                    v-bind = \"subitem.attrs || null\" \n                                    :title = \"subitem.title || null\" \n                                    :key = 'idx'><template  v-slot:label>\n                                    <template  v-if = \"subitem.slot\"><slot  :name = 'subitem.slot' v-bind:side = 'side'></slot></template>\n                                    <template  v-else-if = \"subitem.html\">\n                                        <component  :is = \"to_component(subitem.html)\"></component>\n                                    </template>\n                                    <template  v-else><strong>{{subitem.label}}</strong></template>\n                                </template></NavbarItem>\n                            </NavbarItem>\n                        </template>\n                    </template>\n                </div>\n            </template>\n        </div>\n    </div>\n</nav>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    vc = new V_collector();
    class Navbar extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.template = templ;
            self.props = {
                fixed_top: Boolean,
                menus: Object
            };
        }
        data () {
            var self = this;
            return {
                is_active: false
            };
        }
        to_component (a) {
            var self = this;
            if (typeof a === "string") {
                return {
                    template: a
                };
            }
            return a;
        }
        get_slot (label) {
            var self = this;
            return label && label.split(":")[1];
        }
        beforeMount () {
            var self = this;
            if (self.fixed_top) {
                document.body.style.paddingTop = "50px";
            }
        }
    }
    function make() {
        return new Navbar();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.navbar"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Navbar", function(){return Navbar;}, function(ՐՏ_v){if (typeof Navbar !== "undefined") {Navbar = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.navbar_item"].body = function(){
    var __name__ = "components.navbar_item";

    var vc;
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var click_out = ՐՏ_modules["click_out"];
    vc = new V_collector();
    class Navbar_item extends RS_vue {
        constructor () {
            super(vc, __name__);
            var self = this;
            self.props = {
                hoverable: Boolean,
                dropdown: Boolean,
                href: String,
                side: String,
                arrowless: Boolean,
                use_activator: {
                    type: Boolean,
                    default: false
                },
                panel: Boolean
            };
        }
        data () {
            var self = this;
            return {
                is_active: false
            };
        }
        hide () {
            var self = this;
            self.is_active = false;
        }
        render (h) {
            var self = this;
            var activator, class_, child, dropdown_data, data;
            if (self.dropdown) {
                activator = {
                    set: function(v) {
                        self.is_active = v;
                    },
                    get: function() {
                        return self.is_active;
                    }
                };
                class_ = [ "navbar-item has-dropdown", {
                    "is-hoverable": self.hoverable,
                    "is-active": self.is_active
                } ];
                child = [];
                child.push(h("a", {
                    "class": {
                        "navbar-link": true,
                        "is-arrowless": self.arrowless
                    },
                    attrs: {
                        href: self.href
                    },
                    on: {
                        click: function click(e) {
                            var ctx = this;
                            self.$emit("click", e);
                        }
                    }
                }, this.$scopedSlots.label({
                    activator: activator
                })));
                dropdown_data = {
                    "class": {
                        "navbar-dropdown": true,
                        "is-right": self.side === "right",
                        "py-0": self.panel
                    }
                };
                if (self.panel) {
                    dropdown_data.style = {
                        "border-radius": "6px"
                    };
                }
                child.push(h("div", dropdown_data, self.$scopedSlots.default({
                    activator: activator
                })));
                data = {
                    "class": class_
                };
                if (!self.hoverable) {
                    if (!self.use_activator) {
                        data.on = {
                            click: function click() {
                                var ctx = this;
                                self.is_active = !self.is_active;
                            }
                        };
                    }
                    data.directives = [];
                    data.directives.push({
                        name: "blur-click",
                        value: {
                            exclude: [ "me" ],
                            handler: "hide"
                        }
                    });
                    data.ref = "me";
                }
                return h("div", data, child);
            } else {
                return h("a", {
                    "class": "navbar-item",
                    attrs: {
                        href: self.href
                    },
                    on: {
                        click: function click(e) {
                            var ctx = this;
                            self.$emit("click", e);
                        }
                    }
                }, self.$slots.label || self.$slots.default);
            }
        }
    }
    function make() {
        return new Navbar_item();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.navbar_item"];
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Navbar_item", function(){return Navbar_item;}, function(ՐՏ_v){if (typeof Navbar_item !== "undefined") {Navbar_item = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("click_out", function(){return click_out;}, function(ՐՏ_v){if (typeof click_out !== "undefined") {click_out = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:store.editor"].body = function(){
    var __name__ = "store.editor";

    var EDITOR_DEFSTATE, vc, store;
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var RS_store = ՐՏ_modules["asset.store3"].RS_store;
    var asyncer = ՐՏ_modules["asset.common"].asyncer;
    var cm_vuepy = ՐՏ_modules["asset.cm_vuepy"];var cm_rapydscript = ՐՏ_modules["asset.cm_rapydscript"];
    function window_state() {
        var ret;
        ret = {
            doc_num: null,
            width: 960,
            get_cm: null
        };
        return ret;
    }
    EDITOR_DEFSTATE = {
        doc_infos: {},
        last_doc_num: 0,
        vim_mode: false,
        active_window: null,
        windows: {}
    };
    vc = new V_collector();
    var Editor = (ՐՏ_93 = class Editor {
        constructor () {
            var self = this;
            self.inject = {
                api: "api",
                flash: "$flash",
                start_modal: "$start_modal"
            };
            self.cm_docs = {};
            self.cm_windows = {};
        }
        _mounted () {
            var self = this;
            self.init_cm();
            function on_changed(doc_num, cm_doc) {
                if (!on_changed.handlers) {
                    on_changed.handlers = {};
                    on_changed.tm = {};
                }
                if (on_changed.handlers[doc_num]) {
                    clearTimeout(on_changed.tm[doc_num]);
                } else {
                    on_changed.handlers[doc_num] = function() {
                        var is_saved;
                        is_saved = cm_doc.isClean(self.get("doc_infos")[doc_num].change_gen);
                        self.commit("toggle_doc_saved", doc_num, is_saved);
                        delete on_changed.handlers[doc_num];
                    };
                }
                on_changed.tm[doc_num] = setTimeout(on_changed.handlers[doc_num], 250);
            }
            self.$on("doc_changed", on_changed);
            self.$on("save", function(cm) {
                var doc_num;
                doc_num = self.doc_num_by_cm_doc(cm.doc);
                self.dispatch("save", doc_num);
            });
            self.$on("save_as", function(cm) {
                var doc_num, content, save_as;
                doc_num = self.doc_num_by_cm_doc(cm.doc);
                content = cm.doc.getValue();
                save_as = {
                    name: self.get("doc_infos")[doc_num].name,
                    content: content
                };
                self.commit("/explorer.save_as", save_as);
                self.commit("$.toggle_explorer", true);
            });
            self.$on("compile", function() {
                self.dispatch("compile_active_doc", false);
            });
            self.$on("open", function() {
                self.commit("$.toggle_explorer");
            });
            self.$on("close", function() {
                self.dispatch("close", self.get("active_doc_num"));
            });
        }
        init_cm () {
            var self = this;
            var CM, defkeys;
            CM = self.api.CM;
            CM.defaults.indentUnit = 4;
            defkeys = CM.defaults.extraKeys = {};
            defkeys["Ctrl-Space"] = "autocomplete";
            defkeys["Ctrl-Enter"] = function(cm) {
                cm.showHint({
                    hint: CM.hint.anyword
                });
            };
            defkeys["Tab"] = "indentMore";
            defkeys["Shift-Tab"] = "indentLess";
            defkeys["Ctrl-O"] = function(cm) {
                self.$emit("open");
            };
            defkeys["Ctrl-S"] = function(cm) {
                self.$emit("save", cm);
            };
            defkeys["Ctrl-Alt-S"] = function(cm) {
                self.$emit("save_as", cm);
            };
            defkeys["Ctrl-D"] = function(cm) {
                self.$emit("close");
            };
            defkeys["Shift-Ctrl-C"] = function(cm) {
                self.$emit("new");
            };
            defkeys["Ctrl-F9"] = function(cm) {
                self.$emit("compile");
            };
            defkeys["Alt-V"] = function(cm) {
                self.dispatch("toggle_vim");
            };
            CM.commands.save = function(cm) {
                self.$emit("save", cm);
            };
            cm_rapydscript.reg_mode(CM);
            cm_vuepy.reg_mode(CM);
        }
        mount_cm (el, win_id, opt) {
            var self = this;
            var def_opt, cm;
            def_opt = {
                mode: "python",
                lineNumbers: true,
                showCursorWhenSelecting: true,
                matchBrackets: true,
                foldGutter: true,
                gutters: [ "CodeMirror-linenumbers", "CodeMirror-foldgutter" ]
            };
            opt = Object.assign(def_opt, opt || {});
            cm = self.cm_windows[win_id] = self.api.CM(el, opt);
            self.commit("add_window", win_id, {
                get_cm: function() {
                    return cm;
                }
            });
            return cm;
        }
        add_window (win_id, st) {
            var self = this;
            st = Object.assign(window_state(), st);
            self.$set(self.state.windows, win_id, st);
        }
        set_active_window (win_id) {
            var self = this;
            self.state.active_window = win_id;
        }
        open (doc_info) {
            var self = this;
            var doc_num;
            doc_num = "#" + (++self.state.last_doc_num);
            self.$set(self.state.doc_infos, doc_num, doc_info);
            return doc_num;
        }
        set_doc_info (doc_num, doc_info) {
            var self = this;
            self.$set(self.state.doc_infos, doc_num, doc_info);
        }
        set_doc_change_gen (doc_num, gen) {
            var self = this;
            self.state.doc_infos[doc_num].change_gen = gen;
        }
        toggle_doc_saved (doc_num, onoff) {
            var self = this;
            var is_saved, ret;
            is_saved = self.state.doc_infos[doc_num].is_saved;
            ret = self.state.doc_infos[doc_num].is_saved = onoff === void 0 ? !is_saved : onoff;
        }
        close (doc_num) {
            var self = this;
            self.$del(self.state.doc_infos, doc_num);
        }
        swap_doc (doc_num, win_id) {
            var self = this;
            var w, old;
            old = (w = self.state.windows[win_id]).doc_num;
            w.doc_num = doc_num;
            return old;
        }
        toggle_vim (onoff) {
            var self = this;
            var ret;
            ret = self.state.vim_mode = onoff === void 0 ? !self.state.vim_mode : onoff;
            return ret;
        }
        set_error (doc_num, error) {
            var self = this;
            self.$set(self.state.doc_infos[doc_num], "error", error || null);
        }
        clear_error (doc_num) {
            var self = this;
            self.$set(self.state.doc_infos[doc_num], "error", null);
        }
        active_doc_num () {
            var self = this;
            var aw;
            aw = self.state.windows[self.state.active_window];
            return aw && aw.doc_num;
        }
        trim_space (doc_num) {
            var self = this;
            var cm_doc, do_replace, cm;
            cm_doc = self.cm_docs[doc_num];
            do_replace = function() {
                var cursor;
                cursor = cm_doc.getSearchCursor(/\s+?$/);
                while (cursor.findNext()) {
                    cursor.replace("");
                }
            };
            cm = cm_doc.getEditor();
            if (cm) {
                cm.operation(do_replace);
            } else {
                do_replace();
            }
        }
        reload (doc_num_or_fid) {
            var self = this;
            var fs, doc_num, fid, cm_doc, cursor;
            fs = self.api.fs;
            doc_num = doc_num_or_fid;
            if (doc_num[0] === "#") {
                fid = self.get("doc_infos")[doc_num].id;
            } else {
                fid = doc_num;
                doc_num = self.doc_num_by_fid(fid);
                if (!doc_num) {
                    return;
                }
            }
            cm_doc = self.cm_docs[doc_num];
            cursor = cm_doc.getCursor();
            cm_doc.setValue(fs.files[fid].content);
            cm_doc.setCursor(cursor);
            self.commit("set_doc_change_gen", doc_num, cm_doc.changeGeneration());
            self.commit("toggle_doc_saved", doc_num, true);
        }
        *save_all () {
            var ՐՏitr58, ՐՏidx58;
            var self = this;
            var k;
            ՐՏitr58 = ՐՏ_Iterable(self.get("doc_infos"));
            for (ՐՏidx58 = 0; ՐՏidx58 < ՐՏitr58.length; ՐՏidx58++) {
                k = ՐՏitr58[ՐՏidx58];
                yield self.dispatch("save", k);
            }
        }
        *save (doc_num) {
            var self = this;
            var fs, cm_doc, content, fid;
            yield self.dispatch("trim_space", doc_num);
            fs = self.api.fs;
            cm_doc = self.cm_docs[doc_num];
            content = cm_doc.getValue();
            fid = self.get("doc_infos")[doc_num].id;
            fs.write_file(fid, content);
            self.commit("set_doc_change_gen", doc_num, cm_doc.changeGeneration());
            self.commit("toggle_doc_saved", doc_num, true);
        }
        *close_all () {
            var ՐՏitr59, ՐՏidx59;
            var self = this;
            var all_closed, k, maybe_canceled;
            all_closed = true;
            ՐՏitr59 = ՐՏ_Iterable(self.get("doc_infos"));
            for (ՐՏidx59 = 0; ՐՏidx59 < ՐՏitr59.length; ՐՏidx59++) {
                k = ՐՏitr59[ՐՏidx59];
                maybe_canceled = yield self.dispatch("close", k);
                if (maybe_canceled === "cancel") {
                    all_closed = false;
                }
            }
            return all_closed;
        }
        *$close (doc_num) {
            var ՐՏitr60, ՐՏidx60;
            var self = this;
            var doc_info, ok_cancel, aw, cur_doc_num, isfound, next_doc_k, prev_doc_k, _prev_doc_k, doc_k;
            doc_info = self.get("doc_infos")[doc_num];
            if (!doc_info.is_saved) {
                ok_cancel = yield self.start_modal("XConfirm", {
                    message: doc_info.name + " is not saved! Do you want to continue?"
                });
                if (ok_cancel === "cancel") {
                    return "cancel";
                }
            }
            aw = self.get("active_window");
            cur_doc_num = self.get("windows")[aw].doc_num;
            if ((cur_doc_num !== doc_num && (typeof cur_doc_num !== "object" || !ՐՏ_eq(cur_doc_num, doc_num)))) {
                delete self.cm_docs[doc_num];
                self.commit("close", doc_num);
                return;
            }
            isfound = false;
            next_doc_k = null;
            prev_doc_k = null;
            _prev_doc_k = null;
            ՐՏitr60 = ՐՏ_Iterable(self.cm_docs);
            for (ՐՏidx60 = 0; ՐՏidx60 < ՐՏitr60.length; ՐՏidx60++) {
                doc_k = ՐՏitr60[ՐՏidx60];
                if (isfound) {
                    next_doc_k = doc_k;
                    break;
                }
                if ((doc_k === cur_doc_num || typeof doc_k === "object" && ՐՏ_eq(doc_k, cur_doc_num))) {
                    isfound = true;
                    prev_doc_k = _prev_doc_k;
                }
                _prev_doc_k = doc_k;
            }
            self.dispatch("swap_doc", next_doc_k || prev_doc_k || null);
            delete self.cm_docs[doc_num];
            self.commit("close", doc_num);
        }
        $open (fp, win_id) {
            var self = this;
            var fs, fid;
            fs = self.api.fs;
            fid = fs.id_by_path(fp);
            return self.dispatch("open_by_id", fid, win_id);
        }
        open_by_id_in_active_window (fid) {
            var self = this;
            return self.dispatch("open_by_id", fid, self.get("active_window"));
        }
        open_by_id (fid, win_id, as_doc_num) {
            var ՐՏ_94;
            var self = this;
            var fs, info, content, doc_num;
            fs = self.api.fs;
            info = fs.get_info(fid, true);
            content = info.obj.content;
            delete info.obj;
            info.is_saved = true;
            if (!(info.type === "file")) {
                throw new Error("bad path");
            }
            function create_cm_doc(doc_num, content, ftype) {
                var doc;
                doc = self.cm_docs[doc_num] = self.api.CM.Doc(content, ftype);
                doc.on("change", function(cm_doc, ch_obj) {
                    self.$emit("doc_changed", doc_num, cm_doc, ch_obj);
                });
                info.change_gen = doc.changeGeneration();
            }
            if (as_doc_num) {
                create_cm_doc(as_doc_num, content, self.map_ftype(info.name));
                doc_num = as_doc_num;
                self.commit("set_doc_info", doc_num, info);
            } else {
                doc_num = self.doc_num_by_fid(fid);
                if (!doc_num) {
                    doc_num = self.commit("open", info);
                    create_cm_doc(doc_num, content, self.map_ftype(info.name));
                }
            }
            if (win_id && (as_doc_num || ((ՐՏ_94 = self.get("windows")[win_id].doc_num) !== doc_num && (typeof ՐՏ_94 !== "object" || !ՐՏ_eq(ՐՏ_94, doc_num))))) {
                self.cm_windows[win_id].swapDoc(self.cm_docs[doc_num]);
                self.cm_windows[win_id].focus();
                self.commit("swap_doc", doc_num, win_id);
            }
            return doc_num;
        }
        $swap_doc (doc_num, win_id) {
            var ՐՏ_95;
            var self = this;
            win_id = win_id || self.get("active_window");
            if (((ՐՏ_95 = self.get("windows")[win_id].doc_num) !== doc_num && (typeof ՐՏ_95 !== "object" || !ՐՏ_eq(ՐՏ_95, doc_num)))) {
                if (doc_num) {
                    self.cm_windows[win_id].swapDoc(self.cm_docs[doc_num]);
                    self.cm_windows[win_id].focus();
                }
                return self.commit("swap_doc", doc_num, win_id);
            }
            return doc_num;
        }
        $toggle_vim (onoff) {
            var ՐՏitr61, ՐՏidx61;
            var self = this;
            var mode, k;
            onoff = self.commit("toggle_vim", onoff);
            mode = onoff ? "vim" : "default";
            ՐՏitr61 = ՐՏ_Iterable(self.cm_windows);
            for (ՐՏidx61 = 0; ՐՏidx61 < ՐՏitr61.length; ՐՏidx61++) {
                k = ՐՏitr61[ՐՏidx61];
                self.cm_windows[k].setOption("keyMap", mode);
            }
        }
        set_cursor (ln, col, doc_num) {
            var self = this;
            var dn;
            dn = doc_num || self.get("active_doc_num");
            self.cm_docs[dn].setCursor(ln, col);
            if (!doc_num) {
                self.cm_windows[self.get("active_window")].focus();
            }
        }
        compile_active_doc (compile_only) {
            var self = this;
            var doc_num, s, finfo, fp, ftype;
            doc_num = self.get("active_doc_num");
            if (!doc_num) {
                return;
            }
            s = self.cm_docs[doc_num].getValue();
            finfo = self.get("doc_infos")[doc_num];
            fp = self.api.fs.path_by_id(finfo.id).path;
            ftype = self.map_ftype(fp);
            function post_proc(r) {
                if (r.error) {
                    self.flash({
                        component: "XError"
                    }, "error");
                } else {
                    self.flash("ok", "ok");
                }
            }
            self.dispatch("$.compile", ftype, s, fp, compile_only).then(post_proc);
        }
        map_ftype (fp) {
            var ՐՏ_96;
            var self = this;
            var map_type, ext;
            map_type = {};
            map_type["py"] = "python";
            map_type["pyj"] = "rapydscript";
            map_type["vuepy"] = "vuepy";
            map_type["js"] = "javascript";
            map_type["css"] = "css";
            map_type["html"] = {
                name: "htmlmixed",
                tags: {
                    script: [ [ "type", /^text\/(x-)?python$/, "text/x-python" ], [ null, null, "javascript" ] ]
                }
            };
            ext = (ՐՏ_96 = fp.split("."))[ՐՏ_96.length-1];
            return map_type[ext];
        }
        doc_num_by_fid (file_id) {
            var ՐՏitr62, ՐՏidx62, ՐՏ_97;
            var self = this;
            var docs, doc_num;
            if (!file_id) {
                return false;
            }
            docs = self.get("doc_infos");
            ՐՏitr62 = ՐՏ_Iterable(docs);
            for (ՐՏidx62 = 0; ՐՏidx62 < ՐՏitr62.length; ՐՏidx62++) {
                doc_num = ՐՏitr62[ՐՏidx62];
                if (((ՐՏ_97 = docs[doc_num].id) === file_id || typeof ՐՏ_97 === "object" && ՐՏ_eq(ՐՏ_97, file_id))) {
                    return doc_num;
                }
            }
            return false;
        }
        doc_num_by_cm_doc (cm_doc) {
            var ՐՏitr63, ՐՏidx63;
            var self = this;
            var doc_num;
            ՐՏitr63 = ՐՏ_Iterable(self.cm_docs);
            for (ՐՏidx63 = 0; ՐՏidx63 < ՐՏitr63.length; ՐՏidx63++) {
                doc_num = ՐՏitr63[ՐՏidx63];
                if (self.cm_docs[doc_num] === cm_doc) {
                    return doc_num;
                }
            }
            return false;
        }
    }, (function(){
        Object.defineProperties(ՐՏ_93.prototype, {
            mount_cm: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_93.prototype.mount_cm)
            },
            add_window: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.add_window)
            },
            set_active_window: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.set_active_window)
            },
            open: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.open)
            },
            set_doc_info: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.set_doc_info)
            },
            set_doc_change_gen: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.set_doc_change_gen)
            },
            toggle_doc_saved: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.toggle_doc_saved)
            },
            close: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.close)
            },
            swap_doc: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.swap_doc)
            },
            toggle_vim: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.toggle_vim)
            },
            set_error: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.set_error)
            },
            clear_error: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_93.prototype.clear_error)
            },
            active_doc_num: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_93.prototype.active_doc_num)
            },
            trim_space: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_93.prototype.trim_space)
            },
            reload: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_93.prototype.reload)
            },
            save_all: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_93.prototype.save_all))
            },
            save: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_93.prototype.save))
            },
            close_all: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_93.prototype.close_all))
            },
            $close: {
                enumerable: false, 
                writable: true, 
                value: vc.action("close")(asyncer(ՐՏ_93.prototype.$close))
            },
            $open: {
                enumerable: false, 
                writable: true, 
                value: vc.action("open")(ՐՏ_93.prototype.$open)
            },
            open_by_id_in_active_window: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_93.prototype.open_by_id_in_active_window)
            },
            open_by_id: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_93.prototype.open_by_id)
            },
            $swap_doc: {
                enumerable: false, 
                writable: true, 
                value: vc.action("swap_doc")(ՐՏ_93.prototype.$swap_doc)
            },
            $toggle_vim: {
                enumerable: false, 
                writable: true, 
                value: vc.action("toggle_vim")(ՐՏ_93.prototype.$toggle_vim)
            },
            set_cursor: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_93.prototype.set_cursor)
            },
            compile_active_doc: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_93.prototype.compile_active_doc)
            }
        });
    })(), ՐՏ_93);
    store = new RS_store(EDITOR_DEFSTATE, vc, new Editor());
    if (__name__ === "__main__") {
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:store.editor"];
    ՐՏ_mod.export("EDITOR_DEFSTATE", function(){return EDITOR_DEFSTATE;}, function(ՐՏ_v){if (typeof EDITOR_DEFSTATE !== "undefined") {EDITOR_DEFSTATE = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("store", function(){return store;}, function(ՐՏ_v){if (typeof store !== "undefined") {store = ՐՏ_v;};});
    ՐՏ_mod.export("window_state", function(){return window_state;}, function(ՐՏ_v){if (typeof window_state !== "undefined") {window_state = ՐՏ_v;};});
    ՐՏ_mod.export("Editor", function(){return Editor;}, function(ՐՏ_v){if (typeof Editor !== "undefined") {Editor = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("RS_store", function(){return RS_store;}, function(ՐՏ_v){if (typeof RS_store !== "undefined") {RS_store = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("cm_vuepy", function(){return cm_vuepy;}, function(ՐՏ_v){if (typeof cm_vuepy !== "undefined") {cm_vuepy = ՐՏ_v;};});
    ՐՏ_mod.export("cm_rapydscript", function(){return cm_rapydscript;}, function(ՐՏ_v){if (typeof cm_rapydscript !== "undefined") {cm_rapydscript = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:store.explorer"].body = function(){
    var __name__ = "store.explorer";

    var DEFSTATE, vc, store;
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var RS_store = ՐՏ_modules["asset.store3"].RS_store;
    var asyncer = ՐՏ_modules["asset.common"].asyncer;
    var common = ՐՏ_modules["asset.common"];
    DEFSTATE = {
        fields: [ {
            name: "name",
            label: "Name",
            width: "250px"
        }, {
            name: "type",
            label: "Type",
            width: "60px"
        }, {
            name: "mtime",
            label: "Last Changed",
            width: "200px",
            formatter: function(d) {
                return d ? new Date(d).toLocaleString() : "";
            }
        } ],
        dir_id: 0,
        selected: {},
        save_as: null,
        type_field: "type",
        sort_by: "name",
        toggle_refresh: false,
        basket: []
    };
    function catch_error(f) {
        function inner() {
            var args = [].slice.call(arguments, 0);
            var self, ret;
            self = this;
            try {
                ret = f.apply(self, args);
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                self.flash(err.toString(), "error");
                return;
            }
            if (ret instanceof Promise) {
                ret.catch(function(err) {
                    self.flash(err.toString(), "error");
                });
            }
            return ret;
        }
        inner.__name__ = f.__name__ || f.name;
        return inner;
    }
    vc = new V_collector();
    var Explorer = (ՐՏ_98 = class Explorer {
        constructor () {
            var self = this;
            self.inject = {
                api: "api",
                start_modal: "$start_modal",
                flash: "$flash"
            };
            self.map_getters = {
                get_fs: "$.get_fs"
            };
        }
        save_as (save_as) {
            var self = this;
            self.state.save_as = save_as;
        }
        set_basket (basket) {
            var self = this;
            self.state.basket = basket;
        }
        set_dir (dir_id) {
            var self = this;
            self.state.dir_id = dir_id;
            self.commit("clear_selected");
        }
        path_arr (st, c) {
            var self = this;
            var fs, ret;
            fs = c.self.get_fs();
            ret = fs.path_by_id(st.dir_id).infos;
            ret[0].name = "root";
            return ret;
        }
        toggle_select (rid) {
            var self = this;
            var selected;
            selected = self.state.selected;
            self.$set(selected, rid, !selected[rid]);
            if (!selected[rid]) {
                self.$del(selected, rid);
            }
        }
        clear_selected () {
            var self = this;
            self.state.selected = {};
        }
        fix_basket () {
            var ՐՏ_99, ՐՏ_100;
            var self = this;
            var fs, basket, b;
            fs = self.get("get_fs")();
            basket = self.state.basket;
            b = basket.slice(1).filter(function(it) {
                return fs.files[it] || fs.dirs[it];
            });
            if (((ՐՏ_99 = b.length) !== (ՐՏ_100 = basket.length - 1) && (typeof ՐՏ_99 !== "object" || !ՐՏ_eq(ՐՏ_99, ՐՏ_100)))) {
                b.unshift(basket[0]);
                self.commit("set_basket", b);
            }
        }
        path (st, c) {
            var self = this;
            var it;
            return (function() {
                var ՐՏidx64, ՐՏitr64 = ՐՏ_Iterable(c.self.path_arr), ՐՏres = [], it;
                for (ՐՏidx64 = 0; ՐՏidx64 < ՐՏitr64.length; ՐՏidx64++) {
                    it = ՐՏitr64[ՐՏidx64];
                    ՐՏres.push(it.name);
                }
                return ՐՏres;
            })().join("/");
        }
        list_dir (st, c) {
            var ՐՏitr65, ՐՏidx65;
            var self = this;
            var fs, ret, ids, id;
            fs = c.self.get_fs();
            ret = [];
            ids = fs.list_dir(st.dir_id);
            ՐՏitr65 = ՐՏ_Iterable(ids);
            for (ՐՏidx65 = 0; ՐՏidx65 < ՐՏitr65.length; ՐՏidx65++) {
                id = ՐՏitr65[ՐՏidx65];
                ret.push(fs.get_info(id));
            }
            return ret;
        }
        row_actions (st, c) {
            var self = this;
            function inner(r) {
                var ret;
                ret = [];
                if (r.type === "file") {
                    ret.push({
                        name: "row_download",
                        icon: {
                            class: "fa fa-download",
                            style: "color: gray"
                        }
                    });
                }
                return ret;
            }
            return inner;
        }
        click_item (id) {
            var self = this;
            var fs, save_as, win_id;
            fs = self.api.fs;
            if (fs.dirs[id]) {
                self.commit("set_dir", id);
            } else if (save_as = self.get("save_as")) {
                save_as.name = fs.get_info(id).name;
                self.commit("save_as", save_as);
            } else {
                win_id = self.get("/editor.active_window");
                self.dispatch("/editor.open_by_id", id, win_id);
                self.commit("$.toggle_explorer", false);
            }
        }
        *doit (a, payload) {
            var ՐՏitr67, ՐՏidx67, ՐՏitr68, ՐՏidx68, ՐՏitr69, ՐՏidx69, ՐՏitr70, ՐՏidx70;
            var self = this;
            var fs, cur_dir, selected, fl, fid, adoc, ok_cancel, id, basket;
            fs = self.api.fs;
            cur_dir = self.get("dir_id");
            selected = self.get("selected");
            if (a === "row_download") {
                if (fl = fs.files[payload]) {
                    common.download(fl.content, fl.name);
                }
            } else if (a === "upload") {
                function save_files(files) {
                    var ՐՏitr66, ՐՏidx66;
                    var f, fid;
                    ՐՏitr66 = ՐՏ_Iterable(files);
                    for (ՐՏidx66 = 0; ՐՏidx66 < ՐՏitr66.length; ՐՏidx66++) {
                        f = ՐՏitr66[ՐՏidx66];
                        fid = fs.create_file(f.name, cur_dir);
                        fs.write_file(fid, f.value);
                    }
                    self.$emit("fs_changed");
                }
                common.upload_text().then(save_files);
            } else if (a === "save_as") {
                fid = fs.create_file(payload.name, cur_dir);
                fs.write_file(fid, payload.content);
                self.commit("save_as", null);
                adoc = self.get("/editor.active_doc_num");
                self.dispatch("/editor.open_by_id", fid, self.get("/editor.active_window"), adoc);
                self.$emit("fs_changed");
                self.commit("$.toggle_explorer", false);
            } else if (a === "create") {
                if (!payload) {
                    return;
                }
                if (payload.endsWith("/")) {
                    fs.create_dir(payload.slice(0, -1), cur_dir);
                } else {
                    fs.create_file(payload, cur_dir, "");
                }
                self.$emit("fs_changed");
            } else if (a === "del") {
                ok_cancel = yield self.start_modal("XConfirm", {
                    message: "You want to delete some files, are you sure?",
                    status: "danger"
                });
                if (ok_cancel === "cancel") {
                    return;
                }
                ՐՏitr67 = ՐՏ_Iterable(selected);
                for (ՐՏidx67 = 0; ՐՏidx67 < ՐՏitr67.length; ՐՏidx67++) {
                    id = ՐՏitr67[ՐՏidx67];
                    if (selected[id]) {
                        fs.del_any(id);
                    }
                }
                self.commit("clear_selected");
                self.commit("fix_basket");
                self.$emit("fs_changed");
            } else if (ՐՏ_in(a, [ "cut", "copy" ])) {
                basket = [ a ];
                ՐՏitr68 = ՐՏ_Iterable(selected);
                for (ՐՏidx68 = 0; ՐՏidx68 < ՐՏitr68.length; ՐՏidx68++) {
                    id = ՐՏitr68[ՐՏidx68];
                    if (selected[id]) {
                        basket.push(id);
                    }
                }
                self.commit("set_basket", basket);
            } else if (a === "paste") {
                basket = self.get("basket");
                if (basket[0] === "copy") {
                    ՐՏitr69 = ՐՏ_Iterable(basket.slice(1));
                    for (ՐՏidx69 = 0; ՐՏidx69 < ՐՏitr69.length; ՐՏidx69++) {
                        id = ՐՏitr69[ՐՏidx69];
                        fs.copy_any(id, cur_dir);
                    }
                } else if (basket[0] === "cut") {
                    ՐՏitr70 = ՐՏ_Iterable(basket.slice(1));
                    for (ՐՏidx70 = 0; ՐՏidx70 < ՐՏitr70.length; ՐՏidx70++) {
                        id = ՐՏitr70[ՐՏidx70];
                        fs.move(id, cur_dir);
                    }
                }
                self.commit("set_basket", []);
                self.$emit("fs_changed");
            } else if (a === "clear_basket") {
                self.commit("set_basket", []);
            }
            ՐՏ_print(a, payload);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_98.prototype, {
            save_as: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_98.prototype.save_as)
            },
            set_basket: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_98.prototype.set_basket)
            },
            set_dir: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_98.prototype.set_dir)
            },
            path_arr: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_98.prototype.path_arr)
            },
            toggle_select: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_98.prototype.toggle_select)
            },
            clear_selected: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_98.prototype.clear_selected)
            },
            fix_basket: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_98.prototype.fix_basket)
            },
            path: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_98.prototype.path)
            },
            list_dir: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_98.prototype.list_dir)
            },
            row_actions: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_98.prototype.row_actions)
            },
            click_item: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_98.prototype.click_item)
            },
            doit: {
                enumerable: false, 
                writable: true, 
                value: vc.action(catch_error(asyncer(ՐՏ_98.prototype.doit)))
            }
        });
    })(), ՐՏ_98);
    store = new RS_store(DEFSTATE, vc, new Explorer());
    if (__name__ === "__main__") {
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:store.explorer"];
    ՐՏ_mod.export("DEFSTATE", function(){return DEFSTATE;}, function(ՐՏ_v){if (typeof DEFSTATE !== "undefined") {DEFSTATE = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("store", function(){return store;}, function(ՐՏ_v){if (typeof store !== "undefined") {store = ՐՏ_v;};});
    ՐՏ_mod.export("catch_error", function(){return catch_error;}, function(ՐՏ_v){if (typeof catch_error !== "undefined") {catch_error = ՐՏ_v;};});
    ՐՏ_mod.export("Explorer", function(){return Explorer;}, function(ՐՏ_v){if (typeof Explorer !== "undefined") {Explorer = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("RS_store", function(){return RS_store;}, function(ՐՏ_v){if (typeof RS_store !== "undefined") {RS_store = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("common", function(){return common;}, function(ՐՏ_v){if (typeof common !== "undefined") {common = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:server"].body = function(){
    var __name__ = "server";

    class API {
        constructor (axios, baseURL, bus, login) {
            var self = this;
            self.login = login;
            self.bus = bus;
            self.baseURL = baseURL;
            self.srv = axios.create({
                baseURL: baseURL,
                timeout: 6e4,
                withCredentials: true
            });
            self.last_resp = "";
            self.last_error = "";
        }
        call (meth, f, args, vars) {
            var self = this;
            var ret;
            args = args || [];
            if (meth === "get") {
                if (Array.isArray(args)) {
                    args.unshift(f);
                    f = args.join("/");
                    args = void 0;
                    if (vars && !vars.params) {
                        vars = {
                            params: vars
                        };
                    }
                } else if (!args.params) {
                    args = {
                        params: args
                    };
                }
            }
            ret = self.srv[meth](f, args).then(function(r) {
                self.done(r);
                return r;
            }, function(r) {
                return self.raise_error(r, {
                    meth: meth,
                    f: f,
                    args: args
                });
            });
            return ret;
        }
        get (f, args) {
            var self = this;
            return self.call("get", f, args);
        }
        post (f, args) {
            var self = this;
            return self.call("post", f, args);
        }
        done (resp) {
            var self = this;
            self.last_resp = resp;
            if (self.bus) {
                self.bus.$emit("server", {
                    event: "done",
                    emitter: self,
                    data: resp.data
                });
            }
        }
        raise_error (err, opt) {
            var self = this;
            if (err.response.status === 403 && self.login) {
                return self.login().then(function() {
                    return self.srv[opt.meth](opt.f, opt.args);
                });
            }
            self.last_error = err;
            if (self.bus) {
                self.bus.$emit("server", {
                    event: "error",
                    emitter: self,
                    data: err
                });
            }
            return Promise.reject(err);
        }
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:server"];
    ՐՏ_mod.export("API", function(){return API;}, function(ՐՏ_v){if (typeof API !== "undefined") {API = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:app_menu"].body = function(){
    var __name__ = "app_menu";

    function get_menu(web23py) {
        var user, ret;
        user = {
            html: '<i title="Logout" class = "fa fa-sign-out-alt"></i>',
            href: "#cmd:logout",
            name: "logout"
        };
        ret = {
            left: [ {
                html: '<i class = "fa fa-power-off nav-app-selector"></i>',
                href: "#cmd:select_app",
                title: "select app to edit"
            }, {
                html: {
                    template: '<button class = "button metalic-btn">{{$store.state.w23p_app}}</button>'
                },
                href: "#cmd:toggle_explorer"
            }, {
                label: "Save",
                href: "#cmd:save"
            }, {
                label: "Compile",
                href: "#cmd:compile"
            }, {
                label: "Editor",
                subitems: [ {
                    label: "Close all",
                    href: "#cmd:close_all"
                }, {
                    label: "Save all & close",
                    href: "#cmd:save_all_close"
                } ]
            }, {
                html: '<i title="reload current app into vue3pyj" class = "fa fa-sync" style = "color:#ecb700;"></i>',
                href: "#cmd:reload"
            }, {
                slot: "search"
            } ],
            right: [ {
                slot: "flash"
            } ]
        };
        if (web23py === "web2py") {
            ret.right.push({
                label: "Errors",
                href: "../../admin/default/errors/${w23p_app}",
                attrs: {
                    target: "_blank",
                    rel: "noopener"
                }
            });
        } else {
            ret.right.push({
                label: "Reload",
                href: "#cmd:reload_app",
                attrs: {
                    hoverable: true
                },
                subitems: [ {
                    label: "Reload Apps",
                    href: "#cmd:reload_apps"
                } ]
            });
        }
        ret.right.push(user);
        return ret;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:app_menu"];
    ՐՏ_mod.export("get_menu", function(){return get_menu;}, function(ՐՏ_v){if (typeof get_menu !== "undefined") {get_menu = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:store.root"].body = function(){
    var __name__ = "store.root";

    var vc;
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var RS_store = ՐՏ_modules["asset.store3"].RS_store;
    var asyncer = ՐՏ_modules["asset.common"].asyncer;
    var FS = ՐՏ_modules["asset.fs"].FS;
    var vuepy_compile = ՐՏ_modules["asset.vuepy_compiler"].vuepy_compile;var rs_compile = ՐՏ_modules["asset.vuepy_compiler"].rs_compile;
    var vuepy_output = ՐՏ_modules["asset.vuepy_output"];
    var editor = ՐՏ_modules["store.editor"];var explorer = ՐՏ_modules["store.explorer"];
    var server = ՐՏ_modules["server"];
    var app_menu = ՐՏ_modules["app_menu"];
    var axios = ՐՏ_modules["axios"];
    var CodeMirror = ՐՏ_modules["CodeMirror"];
    var Vue = ՐՏ_modules["Vue"];
    Vue.use(RS_store);
    function path_map(web23py) {
        var ret;
        ret = {
            html_dir: {
                "web2py": "/views",
                "web3py": "/templates"
            },
            "js": "/static/js/",
            "css": "/static/css/",
            html: function html(pth) {
                var self = this;
                pth = pth.split("/");
                pth[0] === "root" || !pth[0] && pth.shift();
                pth[0] = ret.html_dir[web23py];
                return pth.join("/") + ".html";
            }
        };
        return ret;
    }
    function default_state() {
        var ret;
        ret = {
            is_logged: false,
            ctask: null,
            flash: {
                msg: "Hi",
                status: "",
                component: null,
                cargs: null,
                trigger: 0
            },
            is_busy: true,
            menus: null,
            web23py: null,
            w23p_app: null,
            w23p_app_list: null,
            get_fs: null,
            get_CM: null,
            show_explorer: false,
            compile_error: null,
            modal_state: {
                is_active: false,
                inner_component: null,
                inner_args: null,
                promise: null,
                promise_ok: null
            },
            search: null,
            search_filters: {
                "py": true,
                "pyj": true,
                "vuepy": true
            }
        };
        return ret;
    }
    vc = new V_collector();
    var Root = (ՐՏ_101 = class Root {
        _mounted () {
            var self = this;
            var web23py, fs_refresher;
            web23py = self.params.web23py;
            self.state.web23py = web23py;
            self.state.menus = app_menu.get_menu(web23py);
            self.state.get_fs = function() {
                return self.api.fs;
            };
            self.state.get_CM = function() {
                return self.api.CM;
            };
            fs_refresher = function() {
                self.state.get_fs = function() {
                    return self.api.fs;
                };
            };
            self.$on("fs_restored", fs_refresher);
            self.$on("fs_changed", fs_refresher);
            self.$watch("state.show_explorer", function(n, o) {
                if (!n) {
                    self.commit("/explorer.save_as", null);
                }
            });
            self.$on("server", self.on_server.bind(self));
            self.install_fs_listeners();
            self.cmd_stack = [];
        }
        constructor (params) {
            var ՐՏ_102;
            var self = this;
            var web23py, self_app, api_baseURL;
            self.root = true;
            self.params = params;
            web23py = params.web23py;
            self_app = params.app_root;
            self.modules = {
                "editor": editor.store,
                "explorer": explorer.store
            };
            self.api = {};
            api_baseURL = web23py === "web3py" ? self_app : self_app + "/default/api";
            self.api.server = new server.API(axios, api_baseURL, self.$bus, function() {
                return self.dispatch("start_modal", "XLogin");
            });
            self.api.fs = new FS();
            self.api.CM = CodeMirror;
            self.output_path_map = path_map(web23py);
            self.provide = (ՐՏ_102 = {
                api: self.api,
                $flash: self.$flash.bind(self),
                $start_modal: self.$start_modal.bind(self)
            }, (function(){
                Object.defineProperties(ՐՏ_102, {
                    $router: {
                        enumerable: true, 
                        configurable: true, 
                        get: function $router() {
                            var _ = this;
                            return self.$router;
                        }
                    },
                    $route: {
                        enumerable: true, 
                        configurable: true, 
                        get: function $route() {
                            var _ = this;
                            return self.$route;
                        }
                    }
                });
            })(), ՐՏ_102);
        }
        on_server (a) {
            var self = this;
            var r, w2p_err, msg;
            if (a.event === "error") {
                w2p_err = (r = a.data.response) && r.headers.web2py_error || "";
                self.$flash(`server error: ${a.data.message} ${w2p_err}`, "error");
            } else {
                msg = a.data.flash;
                if (msg) {
                    self.$flash(msg, "ok");
                }
            }
        }
        *process_file (cmd, fid) {
            var ՐՏitr71, ՐՏidx71;
            var self = this;
            var fs, fdata, content, frm_data, k, post_data, resp, e;
            fs = self.api.fs;
            fdata = fs.get_info(fid, true);
            fdata.path = fs.path_by_id(fid).path;
            content = fdata.obj.content;
            delete fdata.obj;
            fdata.w23p_app = self.get("w23p_app");
            if (cmd === "write_file") {
                frm_data = new FormData();
                ՐՏitr71 = ՐՏ_Iterable(Object.keys(fdata));
                for (ՐՏidx71 = 0; ՐՏidx71 < ՐՏitr71.length; ՐՏidx71++) {
                    k = ՐՏitr71[ՐՏidx71];
                    frm_data.append(k, fdata[k]);
                }
                frm_data.append("content", new Blob([ content ], {
                    type: "text/plain"
                }));
                post_data = frm_data;
            } else if (cmd === "del_file") {
                post_data = {
                    fdata: fdata
                };
            } else {
                throw new Error("unknown command: " + cmd);
            }
            try {
                resp = yield self.api.server.post(cmd, post_data);
                ՐՏ_print("server_resp: ", resp.data);
                if (cmd === "write_file" && resp.data.md5_hash && !resp.data.error) {
                    fs.files[fid].md5_hash = resp.data.md5_hash;
                }
                if (e = resp.data.error) {
                    self.$flash("Server error: " + e, "error");
                }
            } catch (ՐՏ_Exception) {
                var e = ՐՏ_Exception;
                self.$flash("Server error: " + e.message, "error");
            }
        }
        install_fs_listeners () {
            var self = this;
            self.api.fs.on("write_file", function(fid) {
                self.process_file("write_file", fid);
            });
            self.api.fs.on("del_file", function(fid) {
                self.process_file("del_file", fid);
            });
            self.api.fs.on("create_dir", asyncer(function*(did) {
                var fs, dir_path, data, resp, e;
                fs = self.api.fs;
                dir_path = fs.path_by_id(did).path;
                data = {
                    w23p_app: self.get("w23p_app"),
                    dir_path: dir_path
                };
                try {
                    resp = yield self.api.server.post("create_dir", data);
                    ՐՏ_print("server_resp: ", resp.data);
                    e = resp.data.error;
                    if (e) {
                        self.$flash("Server error: " + e, "error");
                    }
                } catch (ՐՏ_Exception) {
                    var e = ՐՏ_Exception;
                    self.$flash("Server error: " + e.message, "error");
                }
            }));
        }
        search_filters () {
            var self = this;
            return {
                get: function(f) {
                    return self._get("search_filters")[f.toLowerCase()];
                },
                toggle: function(f, v) {
                    self.commit("toggle_search_filter", f, v);
                }
            };
        }
        toggle_search_filter (f, v) {
            var self = this;
            var tmp;
            f = f.toLowerCase();
            tmp = self.state.search_filters;
            v = v === void 0 ? !tmp[f] : v;
            self.$set(tmp, f, v);
        }
        cmd_stack () {
            var self = this;
            return self.cmd_stack;
        }
        push_cmd (name, args, if_not) {
            var self = this;
            var tm, tm_id, tm_off;
            if (if_not && self.cmd_stack.find(function(it) {
                return it[0] === name;
            })) {
                return;
            }
            tm = function() {
                var idx;
                idx = self.cmd_stack.findIndex(function(it) {
                    return it[1] === tm_off;
                });
                self.cmd_stack.splice(idx, 1);
                self.dispatch("run", name, args);
            };
            tm_id = setTimeout(tm, 0);
            tm_off = function() {
                var idx;
                idx = self.cmd_stack.findIndex(function(it) {
                    return it[1] === tm_off;
                });
                clearTimeout(tm_id);
                self.cmd_stack.splice(idx, 1);
            };
            self.cmd_stack.push([ name, tm_off ]);
        }
        set_modal_inner (inner, args) {
            var self = this;
            self.state.modal_state.inner_component = inner;
            self.state.modal_state.inner_args = args;
        }
        compile_error (err) {
            var self = this;
            self.state.compile_error = err;
        }
        set_modal_promise (p) {
            var self = this;
            self.state.modal_state.promise = p;
        }
        set_modal_promise_ok (ok) {
            var self = this;
            self.state.modal_state.promise_ok = ok;
        }
        toggle_modal (onoff) {
            var self = this;
            onoff = onoff === void 0 ? !self.state.modal_state.is_active : onoff;
            self.state.modal_state.is_active = onoff;
        }
        toggle_busy (onoff) {
            var self = this;
            onoff = onoff === void 0 ? !self.state.is_busy : onoff;
            self.state.is_busy = onoff;
        }
        toggle_explorer (onoff) {
            var self = this;
            onoff = onoff === void 0 ? !self.state.show_explorer : onoff;
            self.state.show_explorer = onoff;
        }
        set_w23p_app (w23p_app) {
            var self = this;
            self.state.w23p_app = w23p_app;
        }
        flash (msg, status) {
            var self = this;
            if (ՐՏ_type(msg) === "String") {
                self.state.flash.msg = msg;
                self.state.flash.component = null;
                self.state.flash.cargs = null;
            } else {
                self.state.flash.component = msg.component;
                self.state.flash.cargs = msg.cargs;
                self.state.flash.msg = null;
            }
            self.state.flash.status = status;
            ++self.state.flash.trigger;
            self.$emit("flash", msg, status);
        }
        search_result () {
            var ՐՏitr72, ՐՏidx72, ՐՏ_103;
            var self = this;
            var s, r, fs, ret, fext, fid, obj, ext;
            self.get("get_fs");
            if (!(s = self.get("search"))) {
                return [];
            }
            r = new RegExp(s, "gm");
            fs = self.api.fs;
            ret = [];
            fext = self._get("search_filters");
            fext = Object.keys(fext).filter(function(it) {
                return fext[it.toLowerCase()];
            });
            ՐՏitr72 = ՐՏ_Iterable(fs.files);
            for (ՐՏidx72 = 0; ՐՏidx72 < ՐՏitr72.length; ՐՏidx72++) {
                fid = ՐՏitr72[ՐՏidx72];
                obj = fs.files[fid];
                ext = (ՐՏ_103 = obj.name.split("."))[ՐՏ_103.length-1];
                if (ՐՏ_in(ext, fext)) {
                    if (r.test(obj.content)) {
                        ret.push([ fid, fs.path_by_id(fid) ]);
                    }
                }
            }
            return ret;
        }
        *try_connect () {
            var self = this;
            try {
                self.commit("is_logged=", (yield self.api.server.get("try_connect")) && true);
                return true;
            } catch (ՐՏ_Exception) {
                return false;
            }
        }
        *login (data) {
            var self = this;
            var pwd;
            pwd = data.get("password");
            self.commit("is_logged=", (yield self.api.server.post("login", {
                password: pwd
            })).data.user);
        }
        *logout () {
            var self = this;
            self.commit("toggle_busy", true);
            yield self.api.server.post("logout");
            self.commit("toggle_busy", false);
            self.commit("is_logged=", false);
            self.dispatch("start_modal", "XLogin");
        }
        *w23p_app_list () {
            var self = this;
            self.commit("w23p_app_list=", (yield self.api.server.get("app_list")).data.app_list);
        }
        *run (cmd, args) {
            var self = this;
            var adoc_num;
            adoc_num = self.get("/editor.active_doc_num");
            if (cmd === "toggle_explorer") {
                self.commit("toggle_explorer");
            } else if (cmd === "reload") {
                self.dispatch("reload_current");
            } else if (cmd === "select_app") {
                self.dispatch("select_app");
            } else if (cmd === "compile") {
                if (adoc_num) {
                    self.dispatch("/editor.compile_active_doc");
                }
            } else if (cmd === "save") {
                if (adoc_num) {
                    self.dispatch("/editor.save", adoc_num);
                    self.$flash("Done!", "ok");
                }
            } else if (cmd === "save_all_close") {
                yield self.dispatch("/editor.save_all");
                yield self.dispatch("/editor.close_all");
            } else if (cmd === "close_all") {
                self.dispatch("/editor.close_all");
            } else if (cmd === "logout") {
                self.dispatch("logout");
            } else if (cmd === "reload_apps") {
                self.dispatch("reload_apps");
            } else if (cmd === "reload_app") {
                self.dispatch("reload_apps", self.get("w23p_app"));
            }
        }
        *reload_current () {
            var self = this;
            if (!(yield self.dispatch("/editor.close_all"))) {
                return;
            }
            self.commit("/explorer.set_dir", 0);
            yield self.dispatch("load_fs_from_srv", "<reload>");
            self.$flash("Done", "ok");
        }
        *load_fs_from_srv (w23p_app) {
            var self = this;
            var fs, ret;
            if (w23p_app === "<reload>") {
                w23p_app = self.get("w23p_app");
            }
            fs = self.api.fs;
            self.commit("toggle_busy", true);
            try {
                ret = (yield self.api.server.get("get_fs", [ w23p_app ]));
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
            }
            self.dispatch("load_fs", ret.data, w23p_app);
            self.commit("toggle_busy", false);
            return ret;
        }
        load_fs (data, w23p_app) {
            var self = this;
            self.api.fs.loads(data);
            self.commit("set_w23p_app", w23p_app);
            self.$emit("fs_restored", w23p_app);
        }
        start_modal (inner, args) {
            var self = this;
            var resolver, ret;
            resolver = function(ok, err) {
                self.commit("set_modal_promise_ok", ok);
            };
            ret = new Promise(resolver);
            self.commit("set_modal_inner", inner, args);
            self.commit("set_modal_promise", ret);
            self.commit("toggle_modal", true);
            return ret;
        }
        close_modal () {
            var self = this;
            var args = [].slice.call(arguments, 0);
            var ok;
            ok = self.get("modal_state").promise_ok;
            self.commit("toggle_modal", false);
            self.commit("set_modal_inner", null, null);
            self.commit("set_modal_promise", null);
            self.commit("set_modal_promise_ok", null);
            ok.apply(null, args);
        }
        *select_app () {
            var self = this;
            var app;
            self.commit("toggle_busy", true);
            yield self.dispatch("w23p_app_list");
            self.commit("toggle_busy", false);
            app = yield self.dispatch("start_modal", "AppSelector", {
                app_list: self.get("w23p_app_list"),
                cur_app: self.get("w23p_app")
            });
            if (app === "cancel") {
                return;
            }
            if (!(yield self.dispatch("/editor.close_all"))) {
                return;
            }
            self.commit("/explorer.set_dir", 0);
            return self.dispatch("load_fs_from_srv", app);
        }
        reload_apps (app_name) {
            var self = this;
            var args;
            args = [];
            if (app_name) {
                args.push(app_name);
            }
            self.api.server.get("reload", args).then(function() {
                self.$flash("Done!", "ok");
            });
        }
        *compile_py (code, fp) {
            var self = this;
            var resp, data, err;
            resp = yield self.api.server.post("compile_py", {
                w23p_app: self.get("w23p_app"),
                code: code,
                fp: fp
            });
            data = resp.data;
            err = data.err && Object.assign(new Error(), data.err);
            if (err) {
                err.filename = fp;
                throw err;
            }
            return code;
        }
        *compile (compiler, s, fp, compile_only) {
            var self = this;
            var c_map, compiled, fs, off, fid;
            c_map = {
                "vuepy": vuepy_compile,
                "rs": rs_compile,
                "rapydscript": rs_compile,
                "python": function(s, fp) {
                    return self.compile_py(s, fp);
                }
            };
            if (!c_map[compiler]) {
                self.$flash("Can`t compile " + fp, "warn");
                return;
            }
            try {
                compiled = yield c_map[compiler](s, fp, self.api.fs);
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                if (err.response) {
                    throw err;
                }
                self.commit("compile_error", err);
                return {
                    error: err
                };
            }
            self.commit("compile_error", null);
            if (!compile_only) {
                fs = self.api.fs;
                off = fs.on("write_file", function(fid) {
                    self.dispatch("/editor.reload", fid);
                });
                if (compiler === "python") {
                    fid = fs.id_by_path(fp);
                    fs.write_file(fid, compiled);
                } else {
                    vuepy_output.output(compiled, self.api.fs, self.output_path_map);
                }
                off();
                self.$emit("fs_changed");
            }
            return compiled;
        }
        $flash () {
            var self = this;
            var args = [].slice.call(arguments, 0);
            return self.commit("flash", ...args);
        }
        $start_modal () {
            var self = this;
            var args = [].slice.call(arguments, 0);
            return self.dispatch("start_modal", ...args);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_101.prototype, {
            process_file: {
                enumerable: false, 
                writable: true, 
                value: asyncer(ՐՏ_101.prototype.process_file)
            },
            search_filters: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_101.prototype.search_filters)
            },
            toggle_search_filter: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.toggle_search_filter)
            },
            cmd_stack: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_101.prototype.cmd_stack)
            },
            push_cmd: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.push_cmd)
            },
            set_modal_inner: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.set_modal_inner)
            },
            compile_error: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.compile_error)
            },
            set_modal_promise: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.set_modal_promise)
            },
            set_modal_promise_ok: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.set_modal_promise_ok)
            },
            toggle_modal: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.toggle_modal)
            },
            toggle_busy: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.toggle_busy)
            },
            toggle_explorer: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.toggle_explorer)
            },
            set_w23p_app: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.set_w23p_app)
            },
            flash: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_101.prototype.flash)
            },
            search_result: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_101.prototype.search_result)
            },
            try_connect: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.try_connect))
            },
            login: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.login))
            },
            logout: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.logout))
            },
            w23p_app_list: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.w23p_app_list))
            },
            run: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.run))
            },
            reload_current: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.reload_current))
            },
            load_fs_from_srv: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.load_fs_from_srv))
            },
            load_fs: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_101.prototype.load_fs)
            },
            start_modal: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_101.prototype.start_modal)
            },
            close_modal: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_101.prototype.close_modal)
            },
            select_app: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.select_app))
            },
            reload_apps: {
                enumerable: false, 
                writable: true, 
                value: vc.action(ՐՏ_101.prototype.reload_apps)
            },
            compile_py: {
                enumerable: false, 
                writable: true, 
                value: asyncer(ՐՏ_101.prototype.compile_py)
            },
            compile: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_101.prototype.compile))
            }
        });
    })(), ՐՏ_101);
    function make(params) {
        return new RS_store(default_state(), vc, new Root(params));
    }
    if (__name__ === "__main__") {
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:store.root"];
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("path_map", function(){return path_map;}, function(ՐՏ_v){if (typeof path_map !== "undefined") {path_map = ՐՏ_v;};});
    ՐՏ_mod.export("default_state", function(){return default_state;}, function(ՐՏ_v){if (typeof default_state !== "undefined") {default_state = ՐՏ_v;};});
    ՐՏ_mod.export("Root", function(){return Root;}, function(ՐՏ_v){if (typeof Root !== "undefined") {Root = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("RS_store", function(){return RS_store;}, function(ՐՏ_v){if (typeof RS_store !== "undefined") {RS_store = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("FS", function(){return FS;}, function(ՐՏ_v){if (typeof FS !== "undefined") {FS = ՐՏ_v;};});
    ՐՏ_mod.export("rs_compile", function(){return rs_compile;}, function(ՐՏ_v){if (typeof rs_compile !== "undefined") {rs_compile = ՐՏ_v;};});
    ՐՏ_mod.export("vuepy_output", function(){return vuepy_output;}, function(ՐՏ_v){if (typeof vuepy_output !== "undefined") {vuepy_output = ՐՏ_v;};});
    ՐՏ_mod.export("editor", function(){return editor;}, function(ՐՏ_v){if (typeof editor !== "undefined") {editor = ՐՏ_v;};});
    ՐՏ_mod.export("explorer", function(){return explorer;}, function(ՐՏ_v){if (typeof explorer !== "undefined") {explorer = ՐՏ_v;};});
    ՐՏ_mod.export("server", function(){return server;}, function(ՐՏ_v){if (typeof server !== "undefined") {server = ՐՏ_v;};});
    ՐՏ_mod.export("app_menu", function(){return app_menu;}, function(ՐՏ_v){if (typeof app_menu !== "undefined") {app_menu = ՐՏ_v;};});
    ՐՏ_mod.export("axios", function(){return axios;}, function(ՐՏ_v){if (typeof axios !== "undefined") {axios = ՐՏ_v;};});
    ՐՏ_mod.export("CodeMirror", function(){return CodeMirror;}, function(ՐՏ_v){if (typeof CodeMirror !== "undefined") {CodeMirror = ՐՏ_v;};});
    ՐՏ_mod.export("Vue", function(){return Vue;}, function(ՐՏ_v){if (typeof Vue !== "undefined") {Vue = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:store"].body = function(){
    var __name__ = "store";

    ՐՏ_modules["ՐՏ:store"].export("editor", function(){return ՐՏ_modules["store.editor"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:store"].export("explorer", function(){return ՐՏ_modules["store.explorer"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:store"].export("root", function(){return ՐՏ_modules["store.root"];}, function(){throw new Error("use Object.defineProperty!");});

    var ՐՏ_mod = ՐՏ_modules["ՐՏ:store"];
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:app"].body = function(){
    var __name__ = "app";

    var app_templ, vc;
    app_templ = "\n<div  style = 'position:fixed; top:50px; bottom: 5px; left:5px; right:5px;'>\n    <BaseLayout  ref = 'layout'>\n        <div  style = 'width:100%; padding: 0 10px;'>\n            <div  v-if = 'show_explorer' class = 'explorer' style = 'position:absolute;'>\n                <FolderContent  v-blurClick = '{exclude: [], handler: \"hide_explorer\"}'></FolderContent>\n            </div>\n            <div  class = 'work-grid'>\n                <XEditor  class = 'px-1' :style = \"{'grid-column-start': 1, 'grid-column-end': 4}\"></XEditor>\n            </div>\n        </div>\n    </BaseLayout>\n</div>\n";
    var Vue = ՐՏ_modules["Vue"];
    var click_out = ՐՏ_modules["click_out"];
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var common = ՐՏ_modules["asset.common"];
    var components = ՐՏ_modules["components"];
    var make_store = ՐՏ_modules["store.root"].make;
    Vue.directive("blurClick", click_out.opt);
    function reg_components() {
        var ՐՏitr73, ՐՏidx73;
        var cname, c;
        ՐՏitr73 = ՐՏ_Iterable(components);
        for (ՐՏidx73 = 0; ՐՏidx73 < ՐՏitr73.length; ՐՏidx73++) {
            cname = ՐՏitr73[ՐՏidx73];
            c = components[cname].make();
            c.name = common.to_pascal(c.name);
            Vue.component(c.name, c);
        }
    }
    reg_components();
    Vue.prototype.$flash = components.flash.open;
    Vue.prototype.$v_modal = components.modal.open;
    Vue.prototype.$busy = function(v) {
        return (this.$root || this).toggle_busy(v);
    };
    vc = new V_collector();
    var App = (ՐՏ_104 = class App extends RS_vue {
        constructor (params) {
            var store;
            store = window.store = make_store(params);
            super(vc);
            var self = this;
            self.params = params;
            self.store = store;
            self.template = app_templ;
            self.map_store = {
                push_cmd: "push_cmd~",
                try_connect: "try_connect*",
                show_explorer: "show_explorer",
                w23p_app: "w23p_app",
                is_logged: "is_logged",
                toggle_explorer: "toggle_explorer~",
                search_result: "search_result",
                is_busy: "is_busy",
                toggle_busy: "toggle_busy~"
            };
        }
        created () {
            var self = this;
            var params;
            params = self.$options.params;
            self.v3p_url = params.app_root;
            self.v3p_static = params.app_static;
            self.v3p_busy_el = null;
            self.v3p_busy_tm_id = null;
        }
        busy (on) {
            var self = this;
            if (on) {
                if (self.v3p_busy_el || self.v3p_busy_tm_id) {
                    return;
                }
                function show_busy() {
                    var el;
                    el = document.createElement("div");
                    el.className = "busy";
                    document.body.appendChild(el);
                    setTimeout(function() {
                        el.className += " busy-active";
                    }, 0);
                    self.v3p_busy_el = el;
                    self.v3p_busy_tm_id = null;
                }
                self.v3p_busy_tm_id = setTimeout(show_busy, 200);
            } else {
                if (self.v3p_busy_tm_id) {
                    clearTimeout(self.v3p_busy_tm_id);
                    self.v3p_busy_tm_id = null;
                } else if (self.v3p_busy_el) {
                    document.body.removeChild(self.v3p_busy_el);
                    self.v3p_busy_el = null;
                }
            }
        }
        is_busy (v) {
            var self = this;
            self.busy(v);
        }
        hide_explorer (e) {
            var self = this;
            location.hash = "#cmd:toggle_explorer";
        }
        *mounted () {
            var self = this;
            var app2edit;
            self.$busy(false);
            while (!self.is_logged) {
                yield self.try_connect();
            }
            self.$busy(true);
            yield store.dispatch("w23p_app_list");
            while (!self.w23p_app) {
                app2edit = yield store.dispatch("start_modal", "AppSelector", {
                    app_list: store.get("w23p_app_list")
                });
                if (app2edit !== "cancel") {
                    yield store.dispatch("load_fs_from_srv", app2edit);
                }
            }
        }
    }, (function(){
        Object.defineProperties(ՐՏ_104.prototype, {
            is_busy: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_104.prototype.is_busy)
            },
            mounted: {
                enumerable: false, 
                writable: true, 
                value: common.asyncer(ՐՏ_104.prototype.mounted)
            }
        });
    })(), ՐՏ_104);
    function start(el, params) {
        var app;
        app = new App(params);
        window.app = new Vue(app);
        window.app.$mount(el || "#app");
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:app"];
    ՐՏ_mod.export("app_templ", function(){return app_templ;}, function(ՐՏ_v){if (typeof app_templ !== "undefined") {app_templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("reg_components", function(){return reg_components;}, function(ՐՏ_v){if (typeof reg_components !== "undefined") {reg_components = ՐՏ_v;};});
    ՐՏ_mod.export("App", function(){return App;}, function(ՐՏ_v){if (typeof App !== "undefined") {App = ՐՏ_v;};});
    ՐՏ_mod.export("start", function(){return start;}, function(ՐՏ_v){if (typeof start !== "undefined") {start = ՐՏ_v;};});
    ՐՏ_mod.export("Vue", function(){return Vue;}, function(ՐՏ_v){if (typeof Vue !== "undefined") {Vue = ՐՏ_v;};});
    ՐՏ_mod.export("click_out", function(){return click_out;}, function(ՐՏ_v){if (typeof click_out !== "undefined") {click_out = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("common", function(){return common;}, function(ՐՏ_v){if (typeof common !== "undefined") {common = ՐՏ_v;};});
    ՐՏ_mod.export("components", function(){return components;}, function(ՐՏ_v){if (typeof components !== "undefined") {components = ՐՏ_v;};});
    ՐՏ_mod.export("make_store", function(){return make_store;}, function(ՐՏ_v){if (typeof make_store !== "undefined") {make_store = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

(function(){

    var __name__ = "__main__";

    var deps, deps_keys, deps_keys_mapped;
    var mechanic = ՐՏ_modules["asset.mechanic"];
    deps = mechanic.module_spec().undefined();
    deps_keys = Object.keys(deps);
    deps_keys_mapped = deps_keys.map(function(mod_name) {
        var map;
        map = {
            Vue: "vue",
            CodeMirror: "codemirror/lib/codemirror",
            axios: "axios.min"
        };
        return map[mod_name] || mod_name;
    });
    define([ "amd" ].concat(deps_keys_mapped), function(amd) {
        var ՐՏitr74, ՐՏidx74;
        var args = [].slice.call(arguments, 1);
        var i, dep_key, params;
        ՐՏitr74 = ՐՏ_Iterable(enumerate(deps_keys));
        for (ՐՏidx74 = 0; ՐՏidx74 < ՐՏitr74.length; ՐՏidx74++) {
            [i, dep_key] = ՐՏitr74[ՐՏidx74];
            mechanic.module_spec(dep_key).exports = args[i];
        }
        params = document.getElementsByTagName("meta")[0].dataset;
        window.ENV = {
            debug: true
        };
        var load_js = ՐՏ_modules["load_js"];
        load_js.load(amd).then(function() {
            var app = ՐՏ_modules["app"];
            app.start("#app", params);
        }).catch(function(e) {
            throw e;
        });
        window.onbeforeunload = function() {
            return "hi!";
        };
    });
})();
})();
