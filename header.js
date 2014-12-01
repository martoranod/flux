/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

var flux = Object.create();

(function (window, undefined) {

    var PI = Math.PI;
    var PIx2 = PI * 2;
    var DEF_COLOR = '#777';
    var DEF_LINE_CAP = 'butt';
    var DEF_JOIN_STYLE = 'mitter';
    var DEF_MITTER_LIMIT = 10;

    function ceil(n) {
        return n % 1 ? (n > 0 ? n + 1 : n) | 0 : n;
    }

    function floor(n) {
        return n % 1 ? (n > 0 ? n : n - 1) | 0 : n;
    }

    function abs(n) {
        return 0 > n ? -n : n;
    }

    function round(n) {
        return (0 > n ? -0.5 : 0.5) + n | 0;
    }

    function max(a, b) {
        return a < b ? b : a;
    }

    function min(a, b) {
        return a < b ? a : b;
    }

    function clamp(n, min, max) {
        return n < min ? min : n > max ? max : n;
    }

    function randomFrom(min, max) {
        return Math.random() * (max - min) + min;
    }

    //function sign(x) {
    //    return x > 0 ? 1 : x < 0 ? -1 : 0;
    //}

    function extend(_super_, extension) {
        var base = function () {};
        base.prototype = new _super_();
        base = new base();
        for (var property in extension) {
            base[property] = extension[property];
        }
        base._super_ = _super_;
        return base;
    }

    function deepCopyArray(array) {
        return array instanceof Array ? JSON.parse(JSON.stringify(array)) : null;
    }
