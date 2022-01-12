! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
    "use strict";

    function t() {
        return fn.apply(null, arguments)
    }

    function e(t) {
        fn = t
    }

    function i(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function n(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function s(t) {
        var e;
        for (e in t) return !1;
        return !0
    }

    function r(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function a(t, e) {
        var i, n = [];
        for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
        return n
    }

    function o(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function l(t, e) {
        for (var i in e) o(e, i) && (t[i] = e[i]);
        return o(e, "toString") && (t.toString = e.toString), o(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function u(t, e, i, n) {
        return me(t, e, i, n, !0).utc()
    }

    function h() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }

    function d(t) {
        return null == t._pf && (t._pf = h()), t._pf
    }

    function c(t) {
        if (null == t._isValid) {
            var e = d(t),
                i = pn.call(e.parsedDateParts, function(t) {
                    return null != t
                }),
                n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
            if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
            t._isValid = n
        }
        return t._isValid
    }

    function f(t) {
        var e = u(NaN);
        return null != t ? l(d(e), t) : d(e).userInvalidated = !0, e
    }

    function p(t) {
        return void 0 === t
    }

    function _(t, e) {
        var i, n, s;
        if (p(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), p(e._i) || (t._i = e._i), p(e._f) || (t._f = e._f), p(e._l) || (t._l = e._l), p(e._strict) || (t._strict = e._strict), p(e._tzm) || (t._tzm = e._tzm), p(e._isUTC) || (t._isUTC = e._isUTC), p(e._offset) || (t._offset = e._offset), p(e._pf) || (t._pf = d(e)), p(e._locale) || (t._locale = e._locale), _n.length > 0)
            for (i in _n) n = _n[i], s = e[n], p(s) || (t[n] = s);
        return t
    }

    function m(e) {
        _(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), mn === !1 && (mn = !0, t.updateOffset(this), mn = !1)
    }

    function g(t) {
        return t instanceof m || null != t && null != t._isAMomentObject
    }

    function y(t) {
        return 0 > t ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function v(t) {
        var e = +t,
            i = 0;
        return 0 !== e && isFinite(e) && (i = y(e)), i
    }

    function w(t, e, i) {
        var n, s = Math.min(t.length, e.length),
            r = Math.abs(t.length - e.length),
            a = 0;
        for (n = 0; s > n; n++)(i && t[n] !== e[n] || !i && v(t[n]) !== v(e[n])) && a++;
        return a + r
    }

    function b(e) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function T(e, i) {
        var n = !0;
        return l(function() {
            if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                for (var s, r = [], a = 0; a < arguments.length; a++) {
                    if (s = "", "object" == typeof arguments[a]) {
                        s += "\n[" + a + "] ";
                        for (var o in arguments[0]) s += o + ": " + arguments[0][o] + ", ";
                        s = s.slice(0, -2)
                    } else s = arguments[a];
                    r.push(s)
                }
                b(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1
            }
            return i.apply(this, arguments)
        }, i)
    }

    function x(e, i) {
        null != t.deprecationHandler && t.deprecationHandler(e, i), gn[e] || (b(i), gn[e] = !0)
    }

    function S(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function k(t) {
        var e, i;
        for (i in t) e = t[i], S(e) ? this[i] = e : this["_" + i] = e;
        this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function P(t, e) {
        var i, s = l({}, t);
        for (i in e) o(e, i) && (n(t[i]) && n(e[i]) ? (s[i] = {}, l(s[i], t[i]), l(s[i], e[i])) : null != e[i] ? s[i] = e[i] : delete s[i]);
        for (i in t) o(t, i) && !o(e, i) && n(t[i]) && (s[i] = l({}, s[i]));
        return s
    }

    function M(t) {
        null != t && this.set(t)
    }

    function D(t, e, i) {
        var n = this._calendar[t] || this._calendar.sameElse;
        return S(n) ? n.call(e, i) : n
    }

    function O(t) {
        var e = this._longDateFormat[t],
            i = this._longDateFormat[t.toUpperCase()];
        return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }

    function C() {
        return this._invalidDate
    }

    function Y(t) {
        return this._ordinal.replace("%d", t)
    }

    function R(t, e, i, n) {
        var s = this._relativeTime[i];
        return S(s) ? s(t, e, i, n) : s.replace(/%d/i, t)
    }

    function j(t, e) {
        var i = this._relativeTime[t > 0 ? "future" : "past"];
        return S(i) ? i(e) : i.replace(/%s/i, e)
    }

    function L(t, e) {
        var i = t.toLowerCase();
        Pn[i] = Pn[i + "s"] = Pn[e] = t
    }

    function A(t) {
        return "string" == typeof t ? Pn[t] || Pn[t.toLowerCase()] : void 0
    }

    function I(t) {
        var e, i, n = {};
        for (i in t) o(t, i) && (e = A(i), e && (n[e] = t[i]));
        return n
    }

    function z(t, e) {
        Mn[t] = e
    }

    function Q(t) {
        var e = [];
        for (var i in t) e.push({
            unit: i,
            priority: Mn[i]
        });
        return e.sort(function(t, e) {
            return t.priority - e.priority
        }), e
    }

    function F(e, i) {
        return function(n) {
            return null != n ? (G(this, e, n), t.updateOffset(this, i), this) : W(this, e)
        }
    }

    function W(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function G(t, e, i) {
        t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i)
    }

    function N(t) {
        return t = A(t), S(this[t]) ? this[t]() : this
    }

    function U(t, e) {
        if ("object" == typeof t) {
            t = I(t);
            for (var i = Q(t), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit])
        } else if (t = A(t), S(this[t])) return this[t](e);
        return this
    }

    function E(t, e, i) {
        var n = "" + Math.abs(t),
            s = e - n.length,
            r = t >= 0;
        return (r ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
    }

    function H(t, e, i, n) {
        var s = n;
        "string" == typeof n && (s = function() {
            return this[n]()
        }), t && (Yn[t] = s), e && (Yn[e[0]] = function() {
            return E(s.apply(this, arguments), e[1], e[2])
        }), i && (Yn[i] = function() {
            return this.localeData().ordinal(s.apply(this, arguments), t)
        })
    }

    function V(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function $(t) {
        var e, i, n = t.match(Dn);
        for (e = 0, i = n.length; i > e; e++) Yn[n[e]] ? n[e] = Yn[n[e]] : n[e] = V(n[e]);
        return function(e) {
            var s, r = "";
            for (s = 0; i > s; s++) r += n[s] instanceof Function ? n[s].call(e, t) : n[s];
            return r
        }
    }

    function X(t, e) {
        return t.isValid() ? (e = q(e, t.localeData()), Cn[e] = Cn[e] || $(e), Cn[e](t)) : t.localeData().invalidDate()
    }

    function q(t, e) {
        function i(t) {
            return e.longDateFormat(t) || t
        }
        var n = 5;
        for (On.lastIndex = 0; n >= 0 && On.test(t);) t = t.replace(On, i), On.lastIndex = 0, n -= 1;
        return t
    }

    function B(t, e, i) {
        qn[t] = S(e) ? e : function(t) {
            return t && i ? i : e
        }
    }

    function Z(t, e) {
        return o(qn, t) ? qn[t](e._strict, e._locale) : new RegExp(J(t))
    }

    function J(t) {
        return K(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, s) {
            return e || i || n || s
        }))
    }

    function K(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function tt(t, e) {
        var i, n = e;
        for ("string" == typeof t && (t = [t]), "number" == typeof e && (n = function(t, i) {
                i[e] = v(t)
            }), i = 0; i < t.length; i++) Bn[t[i]] = n
    }

    function et(t, e) {
        tt(t, function(t, i, n, s) {
            n._w = n._w || {}, e(t, n._w, n, s)
        })
    }

    function it(t, e, i) {
        null != e && o(Bn, t) && Bn[t](e, i._a, i, t)
    }

    function nt(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function st(t, e) {
        return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || as).test(e) ? "format" : "standalone"][t.month()] : this._months
    }

    function rt(t, e) {
        return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[as.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
    }

    function at(t, e, i) {
        var n, s, r, a = t.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; 12 > n; ++n) r = u([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
        return i ? "MMM" === e ? (s = vn.call(this._shortMonthsParse, a), -1 !== s ? s : null) : (s = vn.call(this._longMonthsParse, a), -1 !== s ? s : null) : "MMM" === e ? (s = vn.call(this._shortMonthsParse, a), -1 !== s ? s : (s = vn.call(this._longMonthsParse, a), -1 !== s ? s : null)) : (s = vn.call(this._longMonthsParse, a), -1 !== s ? s : (s = vn.call(this._shortMonthsParse, a), -1 !== s ? s : null))
    }

    function ot(t, e, i) {
        var n, s, r;
        if (this._monthsParseExact) return at.call(this, t, e, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; 12 > n; n++) {
            if (s = u([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
            if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
            if (!i && this._monthsParse[n].test(t)) return n
        }
    }

    function lt(t, e) {
        var i;
        if (!t.isValid()) return t;
        if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = v(e);
            else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
        return i = Math.min(t.date(), nt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
    }

    function ut(e) {
        return null != e ? (lt(this, e), t.updateOffset(this, !0), this) : W(this, "Month")
    }

    function ht() {
        return nt(this.year(), this.month())
    }

    function dt(t) {
        return this._monthsParseExact ? (o(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = us), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function ct(t) {
        return this._monthsParseExact ? (o(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = hs), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }

    function ft() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, i, n = [],
            s = [],
            r = [];
        for (e = 0; 12 > e; e++) i = u([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
        for (n.sort(t), s.sort(t), r.sort(t), e = 0; 12 > e; e++) n[e] = K(n[e]), s[e] = K(s[e]);
        for (e = 0; 24 > e; e++) r[e] = K(r[e]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
    }

    function pt(t) {
        return _t(t) ? 366 : 365
    }

    function _t(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function mt() {
        return _t(this.year())
    }

    function gt(t, e, i, n, s, r, a) {
        var o = new Date(t, e, i, n, s, r, a);
        return 100 > t && t >= 0 && isFinite(o.getFullYear()) && o.setFullYear(t), o
    }

    function yt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function vt(t, e, i) {
        var n = 7 + e - i,
            s = (7 + yt(t, 0, n).getUTCDay() - e) % 7;
        return -s + n - 1
    }

    function wt(t, e, i, n, s) {
        var r, a, o = (7 + i - n) % 7,
            l = vt(t, n, s),
            u = 1 + 7 * (e - 1) + o + l;
        return 0 >= u ? (r = t - 1, a = pt(r) + u) : u > pt(t) ? (r = t + 1, a = u - pt(t)) : (r = t, a = u), {
            year: r,
            dayOfYear: a
        }
    }

    function bt(t, e, i) {
        var n, s, r = vt(t.year(), e, i),
            a = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
        return 1 > a ? (s = t.year() - 1, n = a + Tt(s, e, i)) : a > Tt(t.year(), e, i) ? (n = a - Tt(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = a), {
            week: n,
            year: s
        }
    }

    function Tt(t, e, i) {
        var n = vt(t, e, i),
            s = vt(t + 1, e, i);
        return (pt(t) - n + s) / 7
    }

    function xt(t) {
        return bt(t, this._week.dow, this._week.doy).week
    }

    function St() {
        return this._week.dow
    }

    function kt() {
        return this._week.doy
    }

    function Pt(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Mt(t) {
        var e = bt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Dt(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
    }

    function Ot(t, e) {
        return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
    }

    function Ct(t, e) {
        return t ? i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
    }

    function Yt(t) {
        return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }

    function Rt(t) {
        return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }

    function jt(t, e, i) {
        var n, s, r, a = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; 7 > n; ++n) r = u([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
        return i ? "dddd" === e ? (s = vn.call(this._weekdaysParse, a), -1 !== s ? s : null) : "ddd" === e ? (s = vn.call(this._shortWeekdaysParse, a), -1 !== s ? s : null) : (s = vn.call(this._minWeekdaysParse, a), -1 !== s ? s : null) : "dddd" === e ? (s = vn.call(this._weekdaysParse, a), -1 !== s ? s : (s = vn.call(this._shortWeekdaysParse, a), -1 !== s ? s : (s = vn.call(this._minWeekdaysParse, a), -1 !== s ? s : null))) : "ddd" === e ? (s = vn.call(this._shortWeekdaysParse, a), -1 !== s ? s : (s = vn.call(this._weekdaysParse, a), -1 !== s ? s : (s = vn.call(this._minWeekdaysParse, a), -1 !== s ? s : null))) : (s = vn.call(this._minWeekdaysParse, a), -1 !== s ? s : (s = vn.call(this._weekdaysParse, a), -1 !== s ? s : (s = vn.call(this._shortWeekdaysParse, a), -1 !== s ? s : null)))
    }

    function Lt(t, e, i) {
        var n, s, r;
        if (this._weekdaysParseExact) return jt.call(this, t, e, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; 7 > n; n++) {
            if (s = u([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
            if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
            if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
            if (!i && this._weekdaysParse[n].test(t)) return n
        }
    }

    function At(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = Dt(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function It(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function zt(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
            var e = Ot(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7)
        }
        return this.day() || 7
    }

    function Qt(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = ms), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Ft(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = gs), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Wt(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ys), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Gt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, i, n, s, r, a = [],
            o = [],
            l = [],
            h = [];
        for (e = 0; 7 > e; e++) i = u([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), a.push(n), o.push(s), l.push(r), h.push(n), h.push(s), h.push(r);
        for (a.sort(t), o.sort(t), l.sort(t), h.sort(t), e = 0; 7 > e; e++) o[e] = K(o[e]), l[e] = K(l[e]), h[e] = K(h[e]);
        this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }

    function Nt() {
        return this.hours() % 12 || 12
    }

    function Ut() {
        return this.hours() || 24
    }

    function Et(t, e) {
        H(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function Ht(t, e) {
        return e._meridiemParse
    }

    function Vt(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function $t(t, e, i) {
        return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    }

    function Xt(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function qt(t) {
        for (var e, i, n, s, r = 0; r < t.length;) {
            for (s = Xt(t[r]).split("-"), e = s.length, i = Xt(t[r + 1]), i = i ? i.split("-") : null; e > 0;) {
                if (n = Bt(s.slice(0, e).join("-"))) return n;
                if (i && i.length >= e && w(s, i, !0) >= e - 1) break;
                e--
            }
            r++
        }
        return null
    }

    function Bt(t) {
        var e = null;
        if (!xs[t] && "undefined" != typeof module && module && module.exports) try {
            e = vs._abbr, require("./locale/" + t), Zt(e)
        } catch (i) {}
        return xs[t]
    }

    function Zt(t, e) {
        var i;
        return t && (i = p(e) ? te(t) : Jt(t, e), i && (vs = i)), vs._abbr
    }

    function Jt(t, e) {
        if (null !== e) {
            var i = Ts;
            return e.abbr = t, null != xs[t] ? (x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = xs[t]._config) : null != e.parentLocale && (null != xs[e.parentLocale] ? i = xs[e.parentLocale]._config : x("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), xs[t] = new M(P(i, e)), Zt(t), xs[t]
        }
        return delete xs[t], null
    }

    function Kt(t, e) {
        if (null != e) {
            var i, n = Ts;
            null != xs[t] && (n = xs[t]._config), e = P(n, e), i = new M(e), i.parentLocale = xs[t], xs[t] = i, Zt(t)
        } else null != xs[t] && (null != xs[t].parentLocale ? xs[t] = xs[t].parentLocale : null != xs[t] && delete xs[t]);
        return xs[t]
    }

    function te(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return vs;
        if (!i(t)) {
            if (e = Bt(t)) return e;
            t = [t]
        }
        return qt(t)
    }

    function ee() {
        return yn(xs)
    }

    function ie(t) {
        var e, i = t._a;
        return i && -2 === d(t).overflow && (e = i[Jn] < 0 || i[Jn] > 11 ? Jn : i[Kn] < 1 || i[Kn] > nt(i[Zn], i[Jn]) ? Kn : i[ts] < 0 || i[ts] > 24 || 24 === i[ts] && (0 !== i[es] || 0 !== i[is] || 0 !== i[ns]) ? ts : i[es] < 0 || i[es] > 59 ? es : i[is] < 0 || i[is] > 59 ? is : i[ns] < 0 || i[ns] > 999 ? ns : -1, d(t)._overflowDayOfYear && (Zn > e || e > Kn) && (e = Kn), d(t)._overflowWeeks && -1 === e && (e = ss), d(t)._overflowWeekday && -1 === e && (e = rs), d(t).overflow = e), t
    }

    function ne(t) {
        var e, i, n, s, r, a, o = t._i,
            l = Ss.exec(o) || ks.exec(o);
        if (l) {
            for (d(t).iso = !0, e = 0, i = Ms.length; i > e; e++)
                if (Ms[e][1].exec(l[1])) {
                    s = Ms[e][0], n = Ms[e][2] !== !1;
                    break
                } if (null == s) return void(t._isValid = !1);
            if (l[3]) {
                for (e = 0, i = Ds.length; i > e; e++)
                    if (Ds[e][1].exec(l[3])) {
                        r = (l[2] || " ") + Ds[e][0];
                        break
                    } if (null == r) return void(t._isValid = !1)
            }
            if (!n && null != r) return void(t._isValid = !1);
            if (l[4]) {
                if (!Ps.exec(l[4])) return void(t._isValid = !1);
                a = "Z"
            }
            t._f = s + (r || "") + (a || ""), ue(t)
        } else t._isValid = !1
    }

    function se(e) {
        var i = Os.exec(e._i);
        return null !== i ? void(e._d = new Date(+i[1])) : (ne(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
    }

    function re(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function ae(e) {
        var i = new Date(t.now());
        return e._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
    }

    function oe(t) {
        var e, i, n, s, r = [];
        if (!t._d) {
            for (n = ae(t), t._w && null == t._a[Kn] && null == t._a[Jn] && le(t), t._dayOfYear && (s = re(t._a[Zn], n[Zn]), t._dayOfYear > pt(s) && (d(t)._overflowDayOfYear = !0), i = yt(s, 0, t._dayOfYear), t._a[Jn] = i.getUTCMonth(), t._a[Kn] = i.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = r[e] = n[e];
            for (; 7 > e; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[ts] && 0 === t._a[es] && 0 === t._a[is] && 0 === t._a[ns] && (t._nextDay = !0, t._a[ts] = 0), t._d = (t._useUTC ? yt : gt).apply(null, r), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[ts] = 24)
        }
    }

    function le(t) {
        var e, i, n, s, r, a, o, l;
        e = t._w, null != e.GG || null != e.W || null != e.E ? (r = 1, a = 4, i = re(e.GG, t._a[Zn], bt(ge(), 1, 4).year), n = re(e.W, 1), s = re(e.E, 1), (1 > s || s > 7) && (l = !0)) : (r = t._locale._week.dow, a = t._locale._week.doy, i = re(e.gg, t._a[Zn], bt(ge(), r, a).year), n = re(e.w, 1), null != e.d ? (s = e.d, (0 > s || s > 6) && (l = !0)) : null != e.e ? (s = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : s = r), 1 > n || n > Tt(i, r, a) ? d(t)._overflowWeeks = !0 : null != l ? d(t)._overflowWeekday = !0 : (o = wt(i, n, s, r, a), t._a[Zn] = o.year, t._dayOfYear = o.dayOfYear)
    }

    function ue(e) {
        if (e._f === t.ISO_8601) return void ne(e);
        e._a = [], d(e).empty = !0;
        var i, n, s, r, a, o = "" + e._i,
            l = o.length,
            u = 0;
        for (s = q(e._f, e._locale).match(Dn) || [], i = 0; i < s.length; i++) r = s[i], n = (o.match(Z(r, e)) || [])[0], n && (a = o.substr(0, o.indexOf(n)), a.length > 0 && d(e).unusedInput.push(a), o = o.slice(o.indexOf(n) + n.length), u += n.length), Yn[r] ? (n ? d(e).empty = !1 : d(e).unusedTokens.push(r), it(r, n, e)) : e._strict && !n && d(e).unusedTokens.push(r);
        d(e).charsLeftOver = l - u, o.length > 0 && d(e).unusedInput.push(o), e._a[ts] <= 12 && d(e).bigHour === !0 && e._a[ts] > 0 && (d(e).bigHour = void 0), d(e).parsedDateParts = e._a.slice(0), d(e).meridiem = e._meridiem, e._a[ts] = he(e._locale, e._a[ts], e._meridiem), oe(e), ie(e)
    }

    function he(t, e, i) {
        var n;
        return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? (n = t.isPM(i), n && 12 > e && (e += 12), n || 12 !== e || (e = 0), e) : e
    }

    function de(t) {
        var e, i, n, s, r;
        if (0 === t._f.length) return d(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (s = 0; s < t._f.length; s++) r = 0, e = _({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], ue(e), c(e) && (r += d(e).charsLeftOver, r += 10 * d(e).unusedTokens.length, d(e).score = r, (null == n || n > r) && (n = r, i = e));
        l(t, i || e)
    }

    function ce(t) {
        if (!t._d) {
            var e = I(t._i);
            t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                return t && parseInt(t, 10)
            }), oe(t)
        }
    }

    function fe(t) {
        var e = new m(ie(pe(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function pe(t) {
        var e = t._i,
            n = t._f;
        return t._locale = t._locale || te(t._l), null === e || void 0 === n && "" === e ? f({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), g(e) ? new m(ie(e)) : (i(n) ? de(t) : r(e) ? t._d = e : n ? ue(t) : _e(t), c(t) || (t._d = null), t))
    }

    function _e(e) {
        var n = e._i;
        void 0 === n ? e._d = new Date(t.now()) : r(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? se(e) : i(n) ? (e._a = a(n.slice(0), function(t) {
            return parseInt(t, 10)
        }), oe(e)) : "object" == typeof n ? ce(e) : "number" == typeof n ? e._d = new Date(n) : t.createFromInputFallback(e)
    }

    function me(t, e, r, a, o) {
        var l = {};
        return "boolean" == typeof r && (a = r, r = void 0), (n(t) && s(t) || i(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = r, l._i = t, l._f = e, l._strict = a, fe(l)
    }

    function ge(t, e, i, n) {
        return me(t, e, i, n, !1)
    }

    function ye(t, e) {
        var n, s;
        if (1 === e.length && i(e[0]) && (e = e[0]), !e.length) return ge();
        for (n = e[0], s = 1; s < e.length; ++s)(!e[s].isValid() || e[s][t](n)) && (n = e[s]);
        return n
    }

    function ve() {
        var t = [].slice.call(arguments, 0);
        return ye("isBefore", t)
    }

    function we() {
        var t = [].slice.call(arguments, 0);
        return ye("isAfter", t)
    }

    function be(t) {
        var e = I(t),
            i = e.year || 0,
            n = e.quarter || 0,
            s = e.month || 0,
            r = e.week || 0,
            a = e.day || 0,
            o = e.hour || 0,
            l = e.minute || 0,
            u = e.second || 0,
            h = e.millisecond || 0;
        this._milliseconds = +h + 1e3 * u + 6e4 * l + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = te(), this._bubble()
    }

    function Te(t) {
        return t instanceof be
    }

    function xe(t) {
        return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function Se(t, e) {
        H(t, 0, 0, function() {
            var t = this.utcOffset(),
                i = "+";
            return 0 > t && (t = -t, i = "-"), i + E(~~(t / 60), 2) + e + E(~~t % 60, 2)
        })
    }

    function ke(t, e) {
        var i = (e || "").match(t) || [],
            n = i[i.length - 1] || [],
            s = (n + "").match(js) || ["-", 0, 0],
            r = +(60 * s[1]) + v(s[2]);
        return "+" === s[0] ? r : -r
    }

    function Pe(e, i) {
        var n, s;
        return i._isUTC ? (n = i.clone(), s = (g(e) || r(e) ? e.valueOf() : ge(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), t.updateOffset(n, !1), n) : ge(e).local()
    }

    function Me(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function De(e, i) {
        var n, s = this._offset || 0;
        return this.isValid() ? null != e ? ("string" == typeof e ? e = ke(Vn, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && i && (n = Me(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), s !== e && (!i || this._changeInProgress ? Ee(this, Fe(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : Me(this) : null != e ? this : NaN
    }

    function Oe(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function Ce(t) {
        return this.utcOffset(0, t)
    }

    function Ye(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Me(this), "m")), this
    }

    function Re() {
        if (this._tzm) this.utcOffset(this._tzm);
        else if ("string" == typeof this._i) {
            var t = ke(Hn, this._i);
            0 === t ? this.utcOffset(0, !0) : this.utcOffset(ke(Hn, this._i))
        }
        return this
    }

    function je(t) {
        return this.isValid() ? (t = t ? ge(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1
    }

    function Le() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ae() {
        if (!p(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (_(t, this), t = pe(t), t._a) {
            var e = t._isUTC ? u(t._a) : ge(t._a);
            this._isDSTShifted = this.isValid() && w(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Ie() {
        return this.isValid() ? !this._isUTC : !1
    }

    function ze() {
        return this.isValid() ? this._isUTC : !1
    }

    function Qe() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function Fe(t, e) {
        var i, n, s, r = t,
            a = null;
        return Te(t) ? r = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (a = Ls.exec(t)) ? (i = "-" === a[1] ? -1 : 1, r = {
            y: 0,
            d: v(a[Kn]) * i,
            h: v(a[ts]) * i,
            m: v(a[es]) * i,
            s: v(a[is]) * i,
            ms: v(xe(1e3 * a[ns])) * i
        }) : (a = As.exec(t)) ? (i = "-" === a[1] ? -1 : 1, r = {
            y: We(a[2], i),
            M: We(a[3], i),
            w: We(a[4], i),
            d: We(a[5], i),
            h: We(a[6], i),
            m: We(a[7], i),
            s: We(a[8], i)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = Ne(ge(r.from), ge(r.to)), r = {}, r.ms = s.milliseconds, r.M = s.months), n = new be(r), Te(t) && o(t, "_locale") && (n._locale = t._locale), n
    }

    function We(t, e) {
        var i = t && parseFloat(t.replace(",", "."));
        return (isNaN(i) ? 0 : i) * e
    }

    function Ge(t, e) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
    }

    function Ne(t, e) {
        var i;
        return t.isValid() && e.isValid() ? (e = Pe(e, t), t.isBefore(e) ? i = Ge(t, e) : (i = Ge(e, t), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Ue(t, e) {
        return function(i, n) {
            var s, r;
            return null === n || isNaN(+n) || (x(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = i, i = n, n = r), i = "string" == typeof i ? +i : i, s = Fe(i, n), Ee(this, s, t), this
        }
    }

    function Ee(e, i, n, s) {
        var r = i._milliseconds,
            a = xe(i._days),
            o = xe(i._months);
        e.isValid() && (s = null == s ? !0 : s, r && e._d.setTime(e._d.valueOf() + r * n), a && G(e, "Date", W(e, "Date") + a * n), o && lt(e, W(e, "Month") + o * n), s && t.updateOffset(e, a || o))
    }

    function He(t, e) {
        var i = t.diff(e, "days", !0);
        return -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse"
    }

    function Ve(e, i) {
        var n = e || ge(),
            s = Pe(n, this).startOf("day"),
            r = t.calendarFormat(this, s) || "sameElse",
            a = i && (S(i[r]) ? i[r].call(this, n) : i[r]);
        return this.format(a || this.localeData().calendar(r, this, ge(n)))
    }

    function $e() {
        return new m(this)
    }

    function Xe(t, e) {
        var i = g(t) ? t : ge(t);
        return this.isValid() && i.isValid() ? (e = A(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf()) : !1
    }

    function qe(t, e) {
        var i = g(t) ? t : ge(t);
        return this.isValid() && i.isValid() ? (e = A(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf()) : !1
    }

    function Be(t, e, i, n) {
        return n = n || "()", ("(" === n[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
    }

    function Ze(t, e) {
        var i, n = g(t) ? t : ge(t);
        return this.isValid() && n.isValid() ? (e = A(e || "millisecond"), "millisecond" === e ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf())) : !1
    }

    function Je(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }

    function Ke(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }

    function ti(t, e, i) {
        var n, s, r, a;
        return this.isValid() ? (n = Pe(t, this), n.isValid() ? (s = 6e4 * (n.utcOffset() - this.utcOffset()), e = A(e), "year" === e || "month" === e || "quarter" === e ? (a = ei(this, n), "quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (r = this - n, a = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - s) / 864e5 : "week" === e ? (r - s) / 6048e5 : r), i ? a : y(a)) : NaN) : NaN
    }

    function ei(t, e) {
        var i, n, s = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            r = t.clone().add(s, "months");
        return 0 > e - r ? (i = t.clone().add(s - 1, "months"), n = (e - r) / (r - i)) : (i = t.clone().add(s + 1, "months"), n = (e - r) / (i - r)), -(s + n) || 0
    }

    function ii() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ni() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? S(Date.prototype.toISOString) ? this.toDate().toISOString() : X(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function si(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = X(this, e);
        return this.localeData().postformat(i)
    }

    function ri(t, e) {
        return this.isValid() && (g(t) && t.isValid() || ge(t).isValid()) ? Fe({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function ai(t) {
        return this.from(ge(), t)
    }

    function oi(t, e) {
        return this.isValid() && (g(t) && t.isValid() || ge(t).isValid()) ? Fe({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function li(t) {
        return this.to(ge(), t)
    }

    function ui(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = te(t), null != e && (this._locale = e), this)
    }

    function hi() {
        return this._locale
    }

    function di(t) {
        switch (t = A(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function ci(t) {
        return t = A(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }

    function fi() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function pi() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function _i() {
        return new Date(this.valueOf())
    }

    function mi() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function gi() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function yi() {
        return this.isValid() ? this.toISOString() : null
    }

    function vi() {
        return c(this)
    }

    function wi() {
        return l({}, d(this))
    }

    function bi() {
        return d(this).overflow
    }

    function Ti() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function xi(t, e) {
        H(0, [t, t.length], 0, e)
    }

    function Si(t) {
        return Di.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function ki(t) {
        return Di.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Pi() {
        return Tt(this.year(), 1, 4)
    }

    function Mi() {
        var t = this.localeData()._week;
        return Tt(this.year(), t.dow, t.doy)
    }

    function Di(t, e, i, n, s) {
        var r;
        return null == t ? bt(this, n, s).year : (r = Tt(t, n, s), e > r && (e = r), Oi.call(this, t, e, i, n, s))
    }

    function Oi(t, e, i, n, s) {
        var r = wt(t, e, i, n, s),
            a = yt(r.year, 0, r.dayOfYear);
        return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
    }

    function Ci(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function Yi(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function Ri(t, e) {
        e[ns] = v(1e3 * ("0." + t))
    }

    function ji() {
        return this._isUTC ? "UTC" : ""
    }

    function Li() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Ai(t) {
        return ge(1e3 * t)
    }

    function Ii() {
        return ge.apply(null, arguments).parseZone()
    }

    function zi(t) {
        return t
    }

    function Qi(t, e, i, n) {
        var s = te(),
            r = u().set(n, e);
        return s[i](r, t)
    }

    function Fi(t, e, i) {
        if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return Qi(t, e, i, "month");
        var n, s = [];
        for (n = 0; 12 > n; n++) s[n] = Qi(t, n, i, "month");
        return s
    }

    function Wi(t, e, i, n) {
        "boolean" == typeof t ? ("number" == typeof e && (i = e, e = void 0), e = e || "") : (e = t, i = e, t = !1, "number" == typeof e && (i = e, e = void 0), e = e || "");
        var s = te(),
            r = t ? s._week.dow : 0;
        if (null != i) return Qi(e, (i + r) % 7, n, "day");
        var a, o = [];
        for (a = 0; 7 > a; a++) o[a] = Qi(e, (a + r) % 7, n, "day");
        return o
    }

    function Gi(t, e) {
        return Fi(t, e, "months")
    }

    function Ni(t, e) {
        return Fi(t, e, "monthsShort")
    }

    function Ui(t, e, i) {
        return Wi(t, e, i, "weekdays")
    }

    function Ei(t, e, i) {
        return Wi(t, e, i, "weekdaysShort")
    }

    function Hi(t, e, i) {
        return Wi(t, e, i, "weekdaysMin");
    }

    function Vi() {
        var t = this._data;
        return this._milliseconds = $s(this._milliseconds), this._days = $s(this._days), this._months = $s(this._months), t.milliseconds = $s(t.milliseconds), t.seconds = $s(t.seconds), t.minutes = $s(t.minutes), t.hours = $s(t.hours), t.months = $s(t.months), t.years = $s(t.years), this
    }

    function $i(t, e, i, n) {
        var s = Fe(e, i);
        return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble()
    }

    function Xi(t, e) {
        return $i(this, t, e, 1)
    }

    function qi(t, e) {
        return $i(this, t, e, -1)
    }

    function Bi(t) {
        return 0 > t ? Math.floor(t) : Math.ceil(t)
    }

    function Zi() {
        var t, e, i, n, s, r = this._milliseconds,
            a = this._days,
            o = this._months,
            l = this._data;
        return r >= 0 && a >= 0 && o >= 0 || 0 >= r && 0 >= a && 0 >= o || (r += 864e5 * Bi(Ki(o) + a), a = 0, o = 0), l.milliseconds = r % 1e3, t = y(r / 1e3), l.seconds = t % 60, e = y(t / 60), l.minutes = e % 60, i = y(e / 60), l.hours = i % 24, a += y(i / 24), s = y(Ji(a)), o += s, a -= Bi(Ki(s)), n = y(o / 12), o %= 12, l.days = a, l.months = o, l.years = n, this
    }

    function Ji(t) {
        return 4800 * t / 146097
    }

    function Ki(t) {
        return 146097 * t / 4800
    }

    function tn(t) {
        var e, i, n = this._milliseconds;
        if (t = A(t), "month" === t || "year" === t) return e = this._days + n / 864e5, i = this._months + Ji(e), "month" === t ? i : i / 12;
        switch (e = this._days + Math.round(Ki(this._months)), t) {
            case "week":
                return e / 7 + n / 6048e5;
            case "day":
                return e + n / 864e5;
            case "hour":
                return 24 * e + n / 36e5;
            case "minute":
                return 1440 * e + n / 6e4;
            case "second":
                return 86400 * e + n / 1e3;
            case "millisecond":
                return Math.floor(864e5 * e) + n;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function en() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12)
    }

    function nn(t) {
        return function() {
            return this.as(t)
        }
    }

    function sn(t) {
        return t = A(t), this[t + "s"]()
    }

    function rn(t) {
        return function() {
            return this._data[t]
        }
    }

    function an() {
        return y(this.days() / 7)
    }

    function on(t, e, i, n, s) {
        return s.relativeTime(e || 1, !!i, t, n)
    }

    function ln(t, e, i) {
        var n = Fe(t).abs(),
            s = ur(n.as("s")),
            r = ur(n.as("m")),
            a = ur(n.as("h")),
            o = ur(n.as("d")),
            l = ur(n.as("M")),
            u = ur(n.as("y")),
            h = s < hr.s && ["s", s] || 1 >= r && ["m"] || r < hr.m && ["mm", r] || 1 >= a && ["h"] || a < hr.h && ["hh", a] || 1 >= o && ["d"] || o < hr.d && ["dd", o] || 1 >= l && ["M"] || l < hr.M && ["MM", l] || 1 >= u && ["y"] || ["yy", u];
        return h[2] = e, h[3] = +t > 0, h[4] = i, on.apply(null, h)
    }

    function un(t) {
        return void 0 === t ? ur : "function" == typeof t ? (ur = t, !0) : !1
    }

    function hn(t, e) {
        return void 0 === hr[t] ? !1 : void 0 === e ? hr[t] : (hr[t] = e, !0)
    }

    function dn(t) {
        var e = this.localeData(),
            i = ln(this, !t, e);
        return t && (i = e.pastFuture(+this, i)), e.postformat(i)
    }

    function cn() {
        var t, e, i, n = dr(this._milliseconds) / 1e3,
            s = dr(this._days),
            r = dr(this._months);
        t = y(n / 60), e = y(t / 60), n %= 60, t %= 60, i = y(r / 12), r %= 12;
        var a = i,
            o = r,
            l = s,
            u = e,
            h = t,
            d = n,
            c = this.asSeconds();
        return c ? (0 > c ? "-" : "") + "P" + (a ? a + "Y" : "") + (o ? o + "M" : "") + (l ? l + "D" : "") + (u || h || d ? "T" : "") + (u ? u + "H" : "") + (h ? h + "M" : "") + (d ? d + "S" : "") : "P0D"
    }
    var fn, pn;
    pn = Array.prototype.some ? Array.prototype.some : function(t) {
        for (var e = Object(this), i = e.length >>> 0, n = 0; i > n; n++)
            if (n in e && t.call(this, e[n], n, e)) return !0;
        return !1
    };
    var _n = t.momentProperties = [],
        mn = !1,
        gn = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
    var yn;
    yn = Object.keys ? Object.keys : function(t) {
        var e, i = [];
        for (e in t) o(t, e) && i.push(e);
        return i
    };
    var vn, wn = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        bn = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Tn = "Invalid date",
        xn = "%d",
        Sn = /\d{1,2}/,
        kn = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Pn = {},
        Mn = {},
        Dn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        On = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Cn = {},
        Yn = {},
        Rn = /\d/,
        jn = /\d\d/,
        Ln = /\d{3}/,
        An = /\d{4}/,
        In = /[+-]?\d{6}/,
        zn = /\d\d?/,
        Qn = /\d\d\d\d?/,
        Fn = /\d\d\d\d\d\d?/,
        Wn = /\d{1,3}/,
        Gn = /\d{1,4}/,
        Nn = /[+-]?\d{1,6}/,
        Un = /\d+/,
        En = /[+-]?\d+/,
        Hn = /Z|[+-]\d\d:?\d\d/gi,
        Vn = /Z|[+-]\d\d(?::?\d\d)?/gi,
        $n = /[+-]?\d+(\.\d{1,3})?/,
        Xn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        qn = {},
        Bn = {},
        Zn = 0,
        Jn = 1,
        Kn = 2,
        ts = 3,
        es = 4,
        is = 5,
        ns = 6,
        ss = 7,
        rs = 8;
    vn = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
        var e;
        for (e = 0; e < this.length; ++e)
            if (this[e] === t) return e;
        return -1
    }, H("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), H("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t)
    }), H("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t)
    }), L("month", "M"), z("month", 8), B("M", zn), B("MM", zn, jn), B("MMM", function(t, e) {
        return e.monthsShortRegex(t)
    }), B("MMMM", function(t, e) {
        return e.monthsRegex(t)
    }), tt(["M", "MM"], function(t, e) {
        e[Jn] = v(t) - 1
    }), tt(["MMM", "MMMM"], function(t, e, i, n) {
        var s = i._locale.monthsParse(t, n, i._strict);
        null != s ? e[Jn] = s : d(i).invalidMonth = t
    });
    var as = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        os = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ls = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        us = Xn,
        hs = Xn;
    H("Y", 0, 0, function() {
        var t = this.year();
        return 9999 >= t ? "" + t : "+" + t
    }), H(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), z("year", 1), B("Y", En), B("YY", zn, jn), B("YYYY", Gn, An), B("YYYYY", Nn, In), B("YYYYYY", Nn, In), tt(["YYYYY", "YYYYYY"], Zn), tt("YYYY", function(e, i) {
        i[Zn] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
    }), tt("YY", function(e, i) {
        i[Zn] = t.parseTwoDigitYear(e)
    }), tt("Y", function(t, e) {
        e[Zn] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function(t) {
        return v(t) + (v(t) > 68 ? 1900 : 2e3)
    };
    var ds = F("FullYear", !0);
    H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), z("week", 5), z("isoWeek", 5), B("w", zn), B("ww", zn, jn), B("W", zn), B("WW", zn, jn), et(["w", "ww", "W", "WW"], function(t, e, i, n) {
        e[n.substr(0, 1)] = v(t)
    });
    var cs = {
        dow: 0,
        doy: 6
    };
    H("d", 0, "do", "day"), H("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t)
    }), H("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t)
    }), H("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t)
    }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), z("day", 11), z("weekday", 11), z("isoWeekday", 11), B("d", zn), B("e", zn), B("E", zn), B("dd", function(t, e) {
        return e.weekdaysMinRegex(t)
    }), B("ddd", function(t, e) {
        return e.weekdaysShortRegex(t)
    }), B("dddd", function(t, e) {
        return e.weekdaysRegex(t)
    }), et(["dd", "ddd", "dddd"], function(t, e, i, n) {
        var s = i._locale.weekdaysParse(t, n, i._strict);
        null != s ? e.d = s : d(i).invalidWeekday = t
    }), et(["d", "e", "E"], function(t, e, i, n) {
        e[n] = v(t)
    });
    var fs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        ps = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        _s = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        ms = Xn,
        gs = Xn,
        ys = Xn;
    H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, Nt), H("k", ["kk", 2], 0, Ut), H("hmm", 0, 0, function() {
        return "" + Nt.apply(this) + E(this.minutes(), 2)
    }), H("hmmss", 0, 0, function() {
        return "" + Nt.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
    }), H("Hmm", 0, 0, function() {
        return "" + this.hours() + E(this.minutes(), 2)
    }), H("Hmmss", 0, 0, function() {
        return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
    }), Et("a", !0), Et("A", !1), L("hour", "h"), z("hour", 13), B("a", Ht), B("A", Ht), B("H", zn), B("h", zn), B("HH", zn, jn), B("hh", zn, jn), B("hmm", Qn), B("hmmss", Fn), B("Hmm", Qn), B("Hmmss", Fn), tt(["H", "HH"], ts), tt(["a", "A"], function(t, e, i) {
        i._isPm = i._locale.isPM(t), i._meridiem = t
    }), tt(["h", "hh"], function(t, e, i) {
        e[ts] = v(t), d(i).bigHour = !0
    }), tt("hmm", function(t, e, i) {
        var n = t.length - 2;
        e[ts] = v(t.substr(0, n)), e[es] = v(t.substr(n)), d(i).bigHour = !0
    }), tt("hmmss", function(t, e, i) {
        var n = t.length - 4,
            s = t.length - 2;
        e[ts] = v(t.substr(0, n)), e[es] = v(t.substr(n, 2)), e[is] = v(t.substr(s)), d(i).bigHour = !0
    }), tt("Hmm", function(t, e) {
        var i = t.length - 2;
        e[ts] = v(t.substr(0, i)), e[es] = v(t.substr(i))
    }), tt("Hmmss", function(t, e) {
        var i = t.length - 4,
            n = t.length - 2;
        e[ts] = v(t.substr(0, i)), e[es] = v(t.substr(i, 2)), e[is] = v(t.substr(n))
    });
    var vs, ws = /[ap]\.?m?\.?/i,
        bs = F("Hours", !0),
        Ts = {
            calendar: wn,
            longDateFormat: bn,
            invalidDate: Tn,
            ordinal: xn,
            ordinalParse: Sn,
            relativeTime: kn,
            months: os,
            monthsShort: ls,
            week: cs,
            weekdays: fs,
            weekdaysMin: _s,
            weekdaysShort: ps,
            meridiemParse: ws
        },
        xs = {},
        Ss = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        ks = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Ps = /Z|[+-]\d\d(?::?\d\d)?/,
        Ms = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Ds = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Os = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = T("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), t.ISO_8601 = function() {};
    var Cs = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = ge.apply(null, arguments);
            return this.isValid() && t.isValid() ? this > t ? this : t : f()
        }),
        Ys = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = ge.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : f()
        }),
        Rs = function() {
            return Date.now ? Date.now() : +new Date
        };
    Se("Z", ":"), Se("ZZ", ""), B("Z", Vn), B("ZZ", Vn), tt(["Z", "ZZ"], function(t, e, i) {
        i._useUTC = !0, i._tzm = ke(Vn, t)
    });
    var js = /([\+\-]|\d\d)/gi;
    t.updateOffset = function() {};
    var Ls = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        As = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Fe.fn = be.prototype;
    var Is = Ue(1, "add"),
        zs = Ue(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Qs = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    H(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), H(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), xi("gggg", "weekYear"), xi("ggggg", "weekYear"), xi("GGGG", "isoWeekYear"), xi("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), z("weekYear", 1), z("isoWeekYear", 1), B("G", En), B("g", En), B("GG", zn, jn), B("gg", zn, jn), B("GGGG", Gn, An), B("gggg", Gn, An), B("GGGGG", Nn, In), B("ggggg", Nn, In), et(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) {
        e[n.substr(0, 2)] = v(t)
    }), et(["gg", "GG"], function(e, i, n, s) {
        i[s] = t.parseTwoDigitYear(e)
    }), H("Q", 0, "Qo", "quarter"), L("quarter", "Q"), z("quarter", 7), B("Q", Rn), tt("Q", function(t, e) {
        e[Jn] = 3 * (v(t) - 1)
    }), H("D", ["DD", 2], "Do", "date"), L("date", "D"), z("date", 9), B("D", zn), B("DD", zn, jn), B("Do", function(t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }), tt(["D", "DD"], Kn), tt("Do", function(t, e) {
        e[Kn] = v(t.match(zn)[0], 10)
    });
    var Fs = F("Date", !0);
    H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), z("dayOfYear", 4), B("DDD", Wn), B("DDDD", Ln), tt(["DDD", "DDDD"], function(t, e, i) {
        i._dayOfYear = v(t)
    }), H("m", ["mm", 2], 0, "minute"), L("minute", "m"), z("minute", 14), B("m", zn), B("mm", zn, jn), tt(["m", "mm"], es);
    var Ws = F("Minutes", !1);
    H("s", ["ss", 2], 0, "second"), L("second", "s"), z("second", 15), B("s", zn), B("ss", zn, jn), tt(["s", "ss"], is);
    var Gs = F("Seconds", !1);
    H("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), H(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), H(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), H(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), H(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), H(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), H(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), L("millisecond", "ms"), z("millisecond", 16), B("S", Wn, Rn), B("SS", Wn, jn), B("SSS", Wn, Ln);
    var Ns;
    for (Ns = "SSSS"; Ns.length <= 9; Ns += "S") B(Ns, Un);
    for (Ns = "S"; Ns.length <= 9; Ns += "S") tt(Ns, Ri);
    var Us = F("Milliseconds", !1);
    H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
    var Es = m.prototype;
    Es.add = Is, Es.calendar = Ve, Es.clone = $e, Es.diff = ti, Es.endOf = ci, Es.format = si, Es.from = ri, Es.fromNow = ai, Es.to = oi, Es.toNow = li, Es.get = N, Es.invalidAt = bi, Es.isAfter = Xe, Es.isBefore = qe, Es.isBetween = Be, Es.isSame = Ze, Es.isSameOrAfter = Je, Es.isSameOrBefore = Ke, Es.isValid = vi, Es.lang = Qs, Es.locale = ui, Es.localeData = hi, Es.max = Ys, Es.min = Cs, Es.parsingFlags = wi, Es.set = U, Es.startOf = di, Es.subtract = zs, Es.toArray = mi, Es.toObject = gi, Es.toDate = _i, Es.toISOString = ni, Es.toJSON = yi, Es.toString = ii, Es.unix = pi, Es.valueOf = fi, Es.creationData = Ti, Es.year = ds, Es.isLeapYear = mt, Es.weekYear = Si, Es.isoWeekYear = ki, Es.quarter = Es.quarters = Ci, Es.month = ut, Es.daysInMonth = ht, Es.week = Es.weeks = Pt, Es.isoWeek = Es.isoWeeks = Mt, Es.weeksInYear = Mi, Es.isoWeeksInYear = Pi, Es.date = Fs, Es.day = Es.days = At, Es.weekday = It, Es.isoWeekday = zt, Es.dayOfYear = Yi, Es.hour = Es.hours = bs, Es.minute = Es.minutes = Ws, Es.second = Es.seconds = Gs, Es.millisecond = Es.milliseconds = Us, Es.utcOffset = De, Es.utc = Ce, Es.local = Ye, Es.parseZone = Re, Es.hasAlignedHourOffset = je, Es.isDST = Le, Es.isLocal = Ie, Es.isUtcOffset = ze, Es.isUtc = Qe, Es.isUTC = Qe, Es.zoneAbbr = ji, Es.zoneName = Li, Es.dates = T("dates accessor is deprecated. Use date instead.", Fs), Es.months = T("months accessor is deprecated. Use month instead", ut), Es.years = T("years accessor is deprecated. Use year instead", ds), Es.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Oe), Es.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ae);
    var Hs = Es,
        Vs = M.prototype;
    Vs.calendar = D, Vs.longDateFormat = O, Vs.invalidDate = C, Vs.ordinal = Y, Vs.preparse = zi, Vs.postformat = zi, Vs.relativeTime = R, Vs.pastFuture = j, Vs.set = k, Vs.months = st, Vs.monthsShort = rt, Vs.monthsParse = ot, Vs.monthsRegex = ct, Vs.monthsShortRegex = dt, Vs.week = xt, Vs.firstDayOfYear = kt, Vs.firstDayOfWeek = St, Vs.weekdays = Ct, Vs.weekdaysMin = Rt, Vs.weekdaysShort = Yt, Vs.weekdaysParse = Lt, Vs.weekdaysRegex = Qt, Vs.weekdaysShortRegex = Ft, Vs.weekdaysMinRegex = Wt, Vs.isPM = Vt, Vs.meridiem = $t, Zt("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10,
                i = 1 === v(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + i
        }
    }), t.lang = T("moment.lang is deprecated. Use moment.locale instead.", Zt), t.langData = T("moment.langData is deprecated. Use moment.localeData instead.", te);
    var $s = Math.abs,
        Xs = nn("ms"),
        qs = nn("s"),
        Bs = nn("m"),
        Zs = nn("h"),
        Js = nn("d"),
        Ks = nn("w"),
        tr = nn("M"),
        er = nn("y"),
        ir = rn("milliseconds"),
        nr = rn("seconds"),
        sr = rn("minutes"),
        rr = rn("hours"),
        ar = rn("days"),
        or = rn("months"),
        lr = rn("years"),
        ur = Math.round,
        hr = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        dr = Math.abs,
        cr = be.prototype;
    cr.abs = Vi, cr.add = Xi, cr.subtract = qi, cr.as = tn, cr.asMilliseconds = Xs, cr.asSeconds = qs, cr.asMinutes = Bs, cr.asHours = Zs, cr.asDays = Js, cr.asWeeks = Ks, cr.asMonths = tr, cr.asYears = er, cr.valueOf = en, cr._bubble = Zi, cr.get = sn, cr.milliseconds = ir, cr.seconds = nr, cr.minutes = sr, cr.hours = rr, cr.days = ar, cr.weeks = an, cr.months = or, cr.years = lr, cr.humanize = dn, cr.toISOString = cn, cr.toString = cn, cr.toJSON = cn, cr.locale = ui, cr.localeData = hi, cr.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", cn), cr.lang = Qs, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), B("x", En), B("X", $n), tt("X", function(t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10))
    }), tt("x", function(t, e, i) {
        i._d = new Date(v(t))
    }), t.version = "2.15.2", e(ge), t.fn = Hs, t.min = ve, t.max = we, t.now = Rs, t.utc = u, t.unix = Ai, t.months = Gi, t.isDate = r, t.locale = Zt, t.invalid = f, t.duration = Fe, t.isMoment = g, t.weekdays = Ui, t.parseZone = Ii, t.localeData = te, t.isDuration = Te, t.monthsShort = Ni, t.weekdaysMin = Hi, t.defineLocale = Jt, t.updateLocale = Kt, t.locales = ee, t.weekdaysShort = Ei, t.normalizeUnits = A, t.relativeTimeRounding = un, t.relativeTimeThreshold = hn, t.calendarFormat = He, t.prototype = Hs;
    var fr = t;
    return fr
});
! function() {
    "use strict";

    function e(e) {
        e.fn.swiper = function(a) {
            var s;
            return e(this).each(function() {
                var e = new t(this, a);
                s || (s = e)
            }), s
        }
    }
    var a, t = function(e, s) {
        function r(e) {
            return Math.floor(e)
        }

        function i() {
            y.autoplayTimeoutId = setTimeout(function() {
                y.params.loop ? (y.fixLoop(), y._slideNext(), y.emit("onAutoplay", y)) : y.isEnd ? s.autoplayStopOnLast ? y.stopAutoplay() : (y._slideTo(0), y.emit("onAutoplay", y)) : (y._slideNext(), y.emit("onAutoplay", y))
            }, y.params.autoplay)
        }

        function n(e, t) {
            var s = a(e.target);
            if (!s.is(t))
                if ("string" == typeof t) s = s.parents(t);
                else if (t.nodeType) {
                var r;
                return s.parents().each(function(e, a) {
                    a === t && (r = t)
                }), r ? t : void 0
            }
            if (0 !== s.length) return s[0]
        }

        function o(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                s = new t(function(e) {
                    e.forEach(function(e) {
                        y.onResize(!0), y.emit("onObserverUpdate", y, e)
                    })
                });
            s.observe(e, {
                attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                childList: "undefined" == typeof a.childList ? !0 : a.childList,
                characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
            }), y.observers.push(s)
        }

        function l(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!y.params.allowSwipeToNext && (y.isHorizontal() && 39 === a || !y.isHorizontal() && 40 === a)) return !1;
            if (!y.params.allowSwipeToPrev && (y.isHorizontal() && 37 === a || !y.isHorizontal() && 38 === a)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (y.container.parents(".swiper-slide").length > 0 && 0 === y.container.parents(".swiper-slide-active").length) return;
                    var s = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        r = window.innerWidth,
                        i = window.innerHeight,
                        n = y.container.offset();
                    y.rtl && (n.left = n.left - y.container[0].scrollLeft);
                    for (var o = [
                            [n.left, n.top],
                            [n.left + y.width, n.top],
                            [n.left, n.top + y.height],
                            [n.left + y.width, n.top + y.height]
                        ], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= s.left && p[0] <= s.left + r && p[1] >= s.top && p[1] <= s.top + i && (t = !0)
                    }
                    if (!t) return
                }
                y.isHorizontal() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !y.rtl || 37 === a && y.rtl) && y.slideNext(), (37 === a && !y.rtl || 39 === a && y.rtl) && y.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && y.slideNext(), 38 === a && y.slidePrev())
            }
        }

        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = y.mousewheel.event,
                t = 0,
                s = y.rtl ? -1 : 1;
            if ("mousewheel" === a)
                if (y.params.mousewheelForceToAxis)
                    if (y.isHorizontal()) {
                        if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                        t = e.wheelDeltaX * s
                    } else {
                        if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                        t = e.wheelDeltaY
                    }
            else t = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * s : -e.wheelDeltaY;
            else if ("DOMMouseScroll" === a) t = -e.detail;
            else if ("wheel" === a)
                if (y.params.mousewheelForceToAxis)
                    if (y.isHorizontal()) {
                        if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                        t = -e.deltaX * s
                    } else {
                        if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                        t = -e.deltaY
                    }
            else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * s : -e.deltaY;
            if (0 !== t) {
                if (y.params.mousewheelInvert && (t = -t), y.params.freeMode) {
                    var r = y.getWrapperTranslate() + t * y.params.mousewheelSensitivity,
                        i = y.isBeginning,
                        n = y.isEnd;
                    if (r >= y.minTranslate() && (r = y.minTranslate()), r <= y.maxTranslate() && (r = y.maxTranslate()), y.setWrapperTransition(0), y.setWrapperTranslate(r), y.updateProgress(), y.updateActiveIndex(), (!i && y.isBeginning || !n && y.isEnd) && y.updateClasses(), y.params.freeModeSticky ? (clearTimeout(y.mousewheel.timeout), y.mousewheel.timeout = setTimeout(function() {
                            y.slideReset()
                        }, 300)) : y.params.lazyLoading && y.lazy && y.lazy.load(), 0 === r || r === y.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - y.mousewheel.lastScrollTime > 60)
                        if (0 > t)
                            if (y.isEnd && !y.params.loop || y.animating) {
                                if (y.params.mousewheelReleaseOnEdges) return !0
                            } else y.slideNext();
                    else if (y.isBeginning && !y.params.loop || y.animating) {
                        if (y.params.mousewheelReleaseOnEdges) return !0
                    } else y.slidePrev();
                    y.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return y.params.autoplay && y.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function d(e, t) {
            e = a(e);
            var s, r, i, n = y.rtl ? -1 : 1;
            s = e.attr("data-swiper-parallax") || "0", r = e.attr("data-swiper-parallax-x"), i = e.attr("data-swiper-parallax-y"), r || i ? (r = r || "0", i = i || "0") : y.isHorizontal() ? (r = s, i = "0") : (i = s, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t * n + "%" : r * t * n + "px", i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", e.transform("translate3d(" + r + ", " + i + ",0px)")
        }

        function u(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof t)) return new t(e, s);
        var c = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                hashnav: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            m = s && s.virtualTranslate;
        s = s || {};
        var f = {};
        for (var g in s)
            if ("object" != typeof s[g] || null === s[g] || (s[g].nodeType || s[g] === window || s[g] === document || "undefined" != typeof Dom7 && s[g] instanceof Dom7 || "undefined" != typeof jQuery && s[g] instanceof jQuery)) f[g] = s[g];
            else {
                f[g] = {};
                for (var h in s[g]) f[g][h] = s[g][h]
            } for (var v in c)
            if ("undefined" == typeof s[v]) s[v] = c[v];
            else if ("object" == typeof s[v])
            for (var w in c[v]) "undefined" == typeof s[v][w] && (s[v][w] = c[v][w]);
        var y = this;
        if (y.params = s, y.originalParams = f, y.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (y.$ = a, y.currentBreakpoint = void 0, y.getActiveBreakpoint = function() {
                if (!y.params.breakpoints) return !1;
                var e, a = !1,
                    t = [];
                for (e in y.params.breakpoints) y.params.breakpoints.hasOwnProperty(e) && t.push(e);
                t.sort(function(e, a) {
                    return parseInt(e, 10) > parseInt(a, 10)
                });
                for (var s = 0; s < t.length; s++) e = t[s], e >= window.innerWidth && !a && (a = e);
                return a || "max"
            }, y.setBreakpoint = function() {
                var e = y.getActiveBreakpoint();
                if (e && y.currentBreakpoint !== e) {
                    var a = e in y.params.breakpoints ? y.params.breakpoints[e] : y.originalParams,
                        t = y.params.loop && a.slidesPerView !== y.params.slidesPerView;
                    for (var s in a) y.params[s] = a[s];
                    y.currentBreakpoint = e, t && y.destroyLoop && y.reLoop(!0)
                }
            }, y.params.breakpoints && y.setBreakpoint(), y.container = a(e), 0 !== y.container.length)) {
            if (y.container.length > 1) {
                var b = [];
                return y.container.each(function() {
                    b.push(new t(this, s))
                }), b
            }
            y.container[0].swiper = y, y.container.data("swiper", y), y.classNames.push("swiper-container-" + y.params.direction), y.params.freeMode && y.classNames.push("swiper-container-free-mode"), y.support.flexbox || (y.classNames.push("swiper-container-no-flexbox"), y.params.slidesPerColumn = 1), y.params.autoHeight && y.classNames.push("swiper-container-autoheight"), (y.params.parallax || y.params.watchSlidesVisibility) && (y.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(y.params.effect) >= 0 && (y.support.transforms3d ? (y.params.watchSlidesProgress = !0, y.classNames.push("swiper-container-3d")) : y.params.effect = "slide"), "slide" !== y.params.effect && y.classNames.push("swiper-container-" + y.params.effect), "cube" === y.params.effect && (y.params.resistanceRatio = 0, y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.centeredSlides = !1, y.params.spaceBetween = 0, y.params.virtualTranslate = !0, y.params.setWrapperSize = !1), ("fade" === y.params.effect || "flip" === y.params.effect) && (y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.watchSlidesProgress = !0, y.params.spaceBetween = 0, y.params.setWrapperSize = !1, "undefined" == typeof m && (y.params.virtualTranslate = !0)), y.params.grabCursor && y.support.touch && (y.params.grabCursor = !1), y.wrapper = y.container.children("." + y.params.wrapperClass), y.params.pagination && (y.paginationContainer = a(y.params.pagination), y.params.uniqueNavElements && "string" == typeof y.params.pagination && y.paginationContainer.length > 1 && 1 === y.container.find(y.params.pagination).length && (y.paginationContainer = y.container.find(y.params.pagination)), "bullets" === y.params.paginationType && y.params.paginationClickable ? y.paginationContainer.addClass("swiper-pagination-clickable") : y.params.paginationClickable = !1, y.paginationContainer.addClass("swiper-pagination-" + y.params.paginationType)), (y.params.nextButton || y.params.prevButton) && (y.params.nextButton && (y.nextButton = a(y.params.nextButton), y.params.uniqueNavElements && "string" == typeof y.params.nextButton && y.nextButton.length > 1 && 1 === y.container.find(y.params.nextButton).length && (y.nextButton = y.container.find(y.params.nextButton))), y.params.prevButton && (y.prevButton = a(y.params.prevButton), y.params.uniqueNavElements && "string" == typeof y.params.prevButton && y.prevButton.length > 1 && 1 === y.container.find(y.params.prevButton).length && (y.prevButton = y.container.find(y.params.prevButton)))), y.isHorizontal = function() {
                return "horizontal" === y.params.direction
            }, y.rtl = y.isHorizontal() && ("rtl" === y.container[0].dir.toLowerCase() || "rtl" === y.container.css("direction")), y.rtl && y.classNames.push("swiper-container-rtl"), y.rtl && (y.wrongRTL = "-webkit-box" === y.wrapper.css("display")), y.params.slidesPerColumn > 1 && y.classNames.push("swiper-container-multirow"), y.device.android && y.classNames.push("swiper-container-android"), y.container.addClass(y.classNames.join(" ")), y.translate = 0, y.progress = 0, y.velocity = 0, y.lockSwipeToNext = function() {
                y.params.allowSwipeToNext = !1
            }, y.lockSwipeToPrev = function() {
                y.params.allowSwipeToPrev = !1
            }, y.lockSwipes = function() {
                y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !1
            }, y.unlockSwipeToNext = function() {
                y.params.allowSwipeToNext = !0
            }, y.unlockSwipeToPrev = function() {
                y.params.allowSwipeToPrev = !0
            }, y.unlockSwipes = function() {
                y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !0
            }, y.params.grabCursor && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grab", y.container[0].style.cursor = "-moz-grab", y.container[0].style.cursor = "grab"), y.imagesToLoad = [], y.imagesLoaded = 0, y.loadImage = function(e, a, t, s, r) {
                function i() {
                    r && r()
                }
                var n;
                e.complete && s ? i() : a ? (n = new window.Image, n.onload = i, n.onerror = i, t && (n.srcset = t), a && (n.src = a)) : i()
            }, y.preloadImages = function() {
                function e() {
                    "undefined" != typeof y && null !== y && (void 0 !== y.imagesLoaded && y.imagesLoaded++, y.imagesLoaded === y.imagesToLoad.length && (y.params.updateOnImagesReady && y.update(), y.emit("onImagesReady", y)))
                }
                y.imagesToLoad = y.container.find("img");
                for (var a = 0; a < y.imagesToLoad.length; a++) y.loadImage(y.imagesToLoad[a], y.imagesToLoad[a].currentSrc || y.imagesToLoad[a].getAttribute("src"), y.imagesToLoad[a].srcset || y.imagesToLoad[a].getAttribute("srcset"), !0, e)
            }, y.autoplayTimeoutId = void 0, y.autoplaying = !1, y.autoplayPaused = !1, y.startAutoplay = function() {
                return "undefined" != typeof y.autoplayTimeoutId ? !1 : y.params.autoplay ? y.autoplaying ? !1 : (y.autoplaying = !0, y.emit("onAutoplayStart", y), void i()) : !1
            }, y.stopAutoplay = function(e) {
                y.autoplayTimeoutId && (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplaying = !1, y.autoplayTimeoutId = void 0, y.emit("onAutoplayStop", y))
            }, y.pauseAutoplay = function(e) {
                y.autoplayPaused || (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplayPaused = !0, 0 === e ? (y.autoplayPaused = !1, i()) : y.wrapper.transitionEnd(function() {
                    y && (y.autoplayPaused = !1, y.autoplaying ? i() : y.stopAutoplay())
                }))
            }, y.minTranslate = function() {
                return -y.snapGrid[0]
            }, y.maxTranslate = function() {
                return -y.snapGrid[y.snapGrid.length - 1]
            }, y.updateAutoHeight = function() {
                var e = y.slides.eq(y.activeIndex)[0];
                if ("undefined" != typeof e) {
                    var a = e.offsetHeight;
                    a && y.wrapper.css("height", a + "px")
                }
            }, y.updateContainerSize = function() {
                var e, a;
                e = "undefined" != typeof y.params.width ? y.params.width : y.container[0].clientWidth, a = "undefined" != typeof y.params.height ? y.params.height : y.container[0].clientHeight, 0 === e && y.isHorizontal() || 0 === a && !y.isHorizontal() || (e = e - parseInt(y.container.css("padding-left"), 10) - parseInt(y.container.css("padding-right"), 10), a = a - parseInt(y.container.css("padding-top"), 10) - parseInt(y.container.css("padding-bottom"), 10), y.width = e, y.height = a, y.size = y.isHorizontal() ? y.width : y.height)
            }, y.updateSlidesSize = function() {
                y.slides = y.wrapper.children("." + y.params.slideClass), y.snapGrid = [], y.slidesGrid = [], y.slidesSizesGrid = [];
                var e, a = y.params.spaceBetween,
                    t = -y.params.slidesOffsetBefore,
                    s = 0,
                    i = 0;
                if ("undefined" != typeof y.size) {
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * y.size), y.virtualSize = -a, y.rtl ? y.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : y.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var n;
                    y.params.slidesPerColumn > 1 && (n = Math.floor(y.slides.length / y.params.slidesPerColumn) === y.slides.length / y.params.slidesPerColumn ? y.slides.length : Math.ceil(y.slides.length / y.params.slidesPerColumn) * y.params.slidesPerColumn, "auto" !== y.params.slidesPerView && "row" === y.params.slidesPerColumnFill && (n = Math.max(n, y.params.slidesPerView * y.params.slidesPerColumn)));
                    var o, l = y.params.slidesPerColumn,
                        p = n / l,
                        d = p - (y.params.slidesPerColumn * p - y.slides.length);
                    for (e = 0; e < y.slides.length; e++) {
                        o = 0;
                        var u = y.slides.eq(e);
                        if (y.params.slidesPerColumn > 1) {
                            var c, m, f;
                            "column" === y.params.slidesPerColumnFill ? (m = Math.floor(e / l), f = e - m * l, (m > d || m === d && f === l - 1) && ++f >= l && (f = 0, m++), c = m + f * n / l, u.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (f = Math.floor(e / p), m = e - f * p), u.css({
                                "margin-top": 0 !== f && y.params.spaceBetween && y.params.spaceBetween + "px"
                            }).attr("data-swiper-column", m).attr("data-swiper-row", f)
                        }
                        "none" !== u.css("display") && ("auto" === y.params.slidesPerView ? (o = y.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), y.params.roundLengths && (o = r(o))) : (o = (y.size - (y.params.slidesPerView - 1) * a) / y.params.slidesPerView, y.params.roundLengths && (o = r(o)), y.isHorizontal() ? y.slides[e].style.width = o + "px" : y.slides[e].style.height = o + "px"), y.slides[e].swiperSlideSize = o, y.slidesSizesGrid.push(o), y.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === e && (t = t - y.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % y.params.slidesPerGroup === 0 && y.snapGrid.push(t), y.slidesGrid.push(t)) : (i % y.params.slidesPerGroup === 0 && y.snapGrid.push(t), y.slidesGrid.push(t), t = t + o + a), y.virtualSize += o + a, s = o, i++)
                    }
                    y.virtualSize = Math.max(y.virtualSize, y.size) + y.params.slidesOffsetAfter;
                    var g;
                    if (y.rtl && y.wrongRTL && ("slide" === y.params.effect || "coverflow" === y.params.effect) && y.wrapper.css({
                            width: y.virtualSize + y.params.spaceBetween + "px"
                        }), (!y.support.flexbox || y.params.setWrapperSize) && (y.isHorizontal() ? y.wrapper.css({
                            width: y.virtualSize + y.params.spaceBetween + "px"
                        }) : y.wrapper.css({
                            height: y.virtualSize + y.params.spaceBetween + "px"
                        })), y.params.slidesPerColumn > 1 && (y.virtualSize = (o + y.params.spaceBetween) * n, y.virtualSize = Math.ceil(y.virtualSize / y.params.slidesPerColumn) - y.params.spaceBetween, y.wrapper.css({
                            width: y.virtualSize + y.params.spaceBetween + "px"
                        }), y.params.centeredSlides)) {
                        for (g = [], e = 0; e < y.snapGrid.length; e++) y.snapGrid[e] < y.virtualSize + y.snapGrid[0] && g.push(y.snapGrid[e]);
                        y.snapGrid = g
                    }
                    if (!y.params.centeredSlides) {
                        for (g = [], e = 0; e < y.snapGrid.length; e++) y.snapGrid[e] <= y.virtualSize - y.size && g.push(y.snapGrid[e]);
                        y.snapGrid = g, Math.floor(y.virtualSize - y.size) - Math.floor(y.snapGrid[y.snapGrid.length - 1]) > 1 && y.snapGrid.push(y.virtualSize - y.size)
                    }
                    0 === y.snapGrid.length && (y.snapGrid = [0]), 0 !== y.params.spaceBetween && (y.isHorizontal() ? y.rtl ? y.slides.css({
                        marginLeft: a + "px"
                    }) : y.slides.css({
                        marginRight: a + "px"
                    }) : y.slides.css({
                        marginBottom: a + "px"
                    })), y.params.watchSlidesProgress && y.updateSlidesOffset()
                }
            }, y.updateSlidesOffset = function() {
                for (var e = 0; e < y.slides.length; e++) y.slides[e].swiperSlideOffset = y.isHorizontal() ? y.slides[e].offsetLeft : y.slides[e].offsetTop
            }, y.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = y.translate || 0), 0 !== y.slides.length) {
                    "undefined" == typeof y.slides[0].swiperSlideOffset && y.updateSlidesOffset();
                    var a = -e;
                    y.rtl && (a = e), y.slides.removeClass(y.params.slideVisibleClass);
                    for (var t = 0; t < y.slides.length; t++) {
                        var s = y.slides[t],
                            r = (a - s.swiperSlideOffset) / (s.swiperSlideSize + y.params.spaceBetween);
                        if (y.params.watchSlidesVisibility) {
                            var i = -(a - s.swiperSlideOffset),
                                n = i + y.slidesSizesGrid[t],
                                o = i >= 0 && i < y.size || n > 0 && n <= y.size || 0 >= i && n >= y.size;
                            o && y.slides.eq(t).addClass(y.params.slideVisibleClass)
                        }
                        s.progress = y.rtl ? -r : r
                    }
                }
            }, y.updateProgress = function(e) {
                "undefined" == typeof e && (e = y.translate || 0);
                var a = y.maxTranslate() - y.minTranslate(),
                    t = y.isBeginning,
                    s = y.isEnd;
                0 === a ? (y.progress = 0, y.isBeginning = y.isEnd = !0) : (y.progress = (e - y.minTranslate()) / a, y.isBeginning = y.progress <= 0, y.isEnd = y.progress >= 1), y.isBeginning && !t && y.emit("onReachBeginning", y), y.isEnd && !s && y.emit("onReachEnd", y), y.params.watchSlidesProgress && y.updateSlidesProgress(e), y.emit("onProgress", y, y.progress)
            }, y.updateActiveIndex = function() {
                var e, a, t, s = y.rtl ? y.translate : -y.translate;
                for (a = 0; a < y.slidesGrid.length; a++) "undefined" != typeof y.slidesGrid[a + 1] ? s >= y.slidesGrid[a] && s < y.slidesGrid[a + 1] - (y.slidesGrid[a + 1] - y.slidesGrid[a]) / 2 ? e = a : s >= y.slidesGrid[a] && s < y.slidesGrid[a + 1] && (e = a + 1) : s >= y.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / y.params.slidesPerGroup), t >= y.snapGrid.length && (t = y.snapGrid.length - 1), e !== y.activeIndex && (y.snapIndex = t, y.previousIndex = y.activeIndex, y.activeIndex = e, y.updateClasses())
            }, y.updateClasses = function() {
                y.slides.removeClass(y.params.slideActiveClass + " " + y.params.slideNextClass + " " + y.params.slidePrevClass);
                var e = y.slides.eq(y.activeIndex);
                e.addClass(y.params.slideActiveClass);
                var t = e.next("." + y.params.slideClass).addClass(y.params.slideNextClass);
                y.params.loop && 0 === t.length && y.slides.eq(0).addClass(y.params.slideNextClass);
                var s = e.prev("." + y.params.slideClass).addClass(y.params.slidePrevClass);
                if (y.params.loop && 0 === s.length && y.slides.eq(-1).addClass(y.params.slidePrevClass), y.paginationContainer && y.paginationContainer.length > 0) {
                    var r, i = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length;
                    if (y.params.loop ? (r = Math.ceil((y.activeIndex - y.loopedSlides) / y.params.slidesPerGroup), r > y.slides.length - 1 - 2 * y.loopedSlides && (r -= y.slides.length - 2 * y.loopedSlides), r > i - 1 && (r -= i), 0 > r && "bullets" !== y.params.paginationType && (r = i + r)) : r = "undefined" != typeof y.snapIndex ? y.snapIndex : y.activeIndex || 0, "bullets" === y.params.paginationType && y.bullets && y.bullets.length > 0 && (y.bullets.removeClass(y.params.bulletActiveClass), y.paginationContainer.length > 1 ? y.bullets.each(function() {
                            a(this).index() === r && a(this).addClass(y.params.bulletActiveClass)
                        }) : y.bullets.eq(r).addClass(y.params.bulletActiveClass)), "fraction" === y.params.paginationType && (y.paginationContainer.find("." + y.params.paginationCurrentClass).text(r + 1), y.paginationContainer.find("." + y.params.paginationTotalClass).text(i)), "progress" === y.params.paginationType) {
                        var n = (r + 1) / i,
                            o = n,
                            l = 1;
                        y.isHorizontal() || (l = n, o = 1), y.paginationContainer.find("." + y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")").transition(y.params.speed)
                    }
                    "custom" === y.params.paginationType && y.params.paginationCustomRender && (y.paginationContainer.html(y.params.paginationCustomRender(y, r + 1, i)), y.emit("onPaginationRendered", y, y.paginationContainer[0]))
                }
                y.params.loop || (y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.isBeginning ? (y.prevButton.addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(y.prevButton)) : (y.prevButton.removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(y.prevButton))), y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.isEnd ? (y.nextButton.addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(y.nextButton)) : (y.nextButton.removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(y.nextButton))))
            }, y.updatePagination = function() {
                if (y.params.pagination && y.paginationContainer && y.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === y.params.paginationType) {
                        for (var a = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length, t = 0; a > t; t++) e += y.params.paginationBulletRender ? y.params.paginationBulletRender(t, y.params.bulletClass) : "<" + y.params.paginationElement + ' class="' + y.params.bulletClass + '"></' + y.params.paginationElement + ">";
                        y.paginationContainer.html(e), y.bullets = y.paginationContainer.find("." + y.params.bulletClass), y.params.paginationClickable && y.params.a11y && y.a11y && y.a11y.initPagination()
                    }
                    "fraction" === y.params.paginationType && (e = y.params.paginationFractionRender ? y.params.paginationFractionRender(y, y.params.paginationCurrentClass, y.params.paginationTotalClass) : '<span class="' + y.params.paginationCurrentClass + '"></span> / <span class="' + y.params.paginationTotalClass + '"></span>', y.paginationContainer.html(e)), "progress" === y.params.paginationType && (e = y.params.paginationProgressRender ? y.params.paginationProgressRender(y, y.params.paginationProgressbarClass) : '<span class="' + y.params.paginationProgressbarClass + '"></span>', y.paginationContainer.html(e)), "custom" !== y.params.paginationType && y.emit("onPaginationRendered", y, y.paginationContainer[0])
                }
            }, y.update = function(e) {
                function a() {
                    s = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate()), y.setWrapperTranslate(s), y.updateActiveIndex(), y.updateClasses()
                }
                if (y.updateContainerSize(), y.updateSlidesSize(), y.updateProgress(), y.updatePagination(), y.updateClasses(), y.params.scrollbar && y.scrollbar && y.scrollbar.set(), e) {
                    var t, s;
                    y.controller && y.controller.spline && (y.controller.spline = void 0), y.params.freeMode ? (a(), y.params.autoHeight && y.updateAutoHeight()) : (t = ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0), t || a())
                } else y.params.autoHeight && y.updateAutoHeight()
            }, y.onResize = function(e) {
                y.params.breakpoints && y.setBreakpoint();
                var a = y.params.allowSwipeToPrev,
                    t = y.params.allowSwipeToNext;
                y.params.allowSwipeToPrev = y.params.allowSwipeToNext = !0, y.updateContainerSize(), y.updateSlidesSize(), ("auto" === y.params.slidesPerView || y.params.freeMode || e) && y.updatePagination(), y.params.scrollbar && y.scrollbar && y.scrollbar.set(), y.controller && y.controller.spline && (y.controller.spline = void 0);
                var s = !1;
                if (y.params.freeMode) {
                    var r = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate());
                    y.setWrapperTranslate(r), y.updateActiveIndex(), y.updateClasses(), y.params.autoHeight && y.updateAutoHeight()
                } else y.updateClasses(), s = ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0);
                y.params.lazyLoading && !s && y.lazy && y.lazy.load(), y.params.allowSwipeToPrev = a, y.params.allowSwipeToNext = t
            };
            var x = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? x = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (x = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), y.touchEvents = {
                start: y.support.touch || !y.params.simulateTouch ? "touchstart" : x[0],
                move: y.support.touch || !y.params.simulateTouch ? "touchmove" : x[1],
                end: y.support.touch || !y.params.simulateTouch ? "touchend" : x[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === y.params.touchEventsTarget ? y.container : y.wrapper).addClass("swiper-wp8-" + y.params.direction), y.initEvents = function(e) {
                var a = e ? "off" : "on",
                    t = e ? "removeEventListener" : "addEventListener",
                    r = "container" === y.params.touchEventsTarget ? y.container[0] : y.wrapper[0],
                    i = y.support.touch ? r : document,
                    n = y.params.nested ? !0 : !1;
                y.browser.ie ? (r[t](y.touchEvents.start, y.onTouchStart, !1), i[t](y.touchEvents.move, y.onTouchMove, n), i[t](y.touchEvents.end, y.onTouchEnd, !1)) : (y.support.touch && (r[t](y.touchEvents.start, y.onTouchStart, !1), r[t](y.touchEvents.move, y.onTouchMove, n), r[t](y.touchEvents.end, y.onTouchEnd, !1)), !s.simulateTouch || y.device.ios || y.device.android || (r[t]("mousedown", y.onTouchStart, !1), document[t]("mousemove", y.onTouchMove, n), document[t]("mouseup", y.onTouchEnd, !1))), window[t]("resize", y.onResize), y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.nextButton[a]("click", y.onClickNext), y.params.a11y && y.a11y && y.nextButton[a]("keydown", y.a11y.onEnterKey)), y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.prevButton[a]("click", y.onClickPrev), y.params.a11y && y.a11y && y.prevButton[a]("keydown", y.a11y.onEnterKey)), y.params.pagination && y.params.paginationClickable && (y.paginationContainer[a]("click", "." + y.params.bulletClass, y.onClickIndex), y.params.a11y && y.a11y && y.paginationContainer[a]("keydown", "." + y.params.bulletClass, y.a11y.onEnterKey)), (y.params.preventClicks || y.params.preventClicksPropagation) && r[t]("click", y.preventClicks, !0)
            }, y.attachEvents = function() {
                y.initEvents()
            }, y.detachEvents = function() {
                y.initEvents(!0)
            }, y.allowClick = !0, y.preventClicks = function(e) {
                y.allowClick || (y.params.preventClicks && e.preventDefault(), y.params.preventClicksPropagation && y.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, y.onClickNext = function(e) {
                e.preventDefault(), (!y.isEnd || y.params.loop) && y.slideNext()
            }, y.onClickPrev = function(e) {
                e.preventDefault(), (!y.isBeginning || y.params.loop) && y.slidePrev()
            }, y.onClickIndex = function(e) {
                e.preventDefault();
                var t = a(this).index() * y.params.slidesPerGroup;
                y.params.loop && (t += y.loopedSlides), y.slideTo(t)
            }, y.updateClickedSlide = function(e) {
                var t = n(e, "." + y.params.slideClass),
                    s = !1;
                if (t)
                    for (var r = 0; r < y.slides.length; r++) y.slides[r] === t && (s = !0);
                if (!t || !s) return y.clickedSlide = void 0, void(y.clickedIndex = void 0);
                if (y.clickedSlide = t, y.clickedIndex = a(t).index(), y.params.slideToClickedSlide && void 0 !== y.clickedIndex && y.clickedIndex !== y.activeIndex) {
                    var i, o = y.clickedIndex;
                    if (y.params.loop) {
                        if (y.animating) return;
                        i = a(y.clickedSlide).attr("data-swiper-slide-index"), y.params.centeredSlides ? o < y.loopedSlides - y.params.slidesPerView / 2 || o > y.slides.length - y.loopedSlides + y.params.slidesPerView / 2 ? (y.fixLoop(), o = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            y.slideTo(o)
                        }, 0)) : y.slideTo(o) : o > y.slides.length - y.params.slidesPerView ? (y.fixLoop(), o = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            y.slideTo(o)
                        }, 0)) : y.slideTo(o)
                    } else y.slideTo(o)
                }
            };
            var T, S, C, z, M, P, I, k, E, B, D = "input, select, textarea, button",
                L = Date.now(),
                H = [];
            y.animating = !1, y.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var G, A;
            if (y.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), G = "touchstart" === e.type, G || !("which" in e) || 3 !== e.which) {
                        if (y.params.noSwiping && n(e, "." + y.params.noSwipingClass)) return void(y.allowClick = !0);
                        if (!y.params.swipeHandler || n(e, y.params.swipeHandler)) {
                            var t = y.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                s = y.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(y.device.ios && y.params.iOSEdgeSwipeDetection && t <= y.params.iOSEdgeSwipeThreshold)) {
                                if (T = !0, S = !1, C = !0, M = void 0, A = void 0, y.touches.startX = t, y.touches.startY = s, z = Date.now(), y.allowClick = !0, y.updateContainerSize(), y.swipeDirection = void 0, y.params.threshold > 0 && (k = !1), "touchstart" !== e.type) {
                                    var r = !0;
                                    a(e.target).is(D) && (r = !1), document.activeElement && a(document.activeElement).is(D) && document.activeElement.blur(), r && e.preventDefault()
                                }
                                y.emit("onTouchStart", y, e)
                            }
                        }
                    }
                }, y.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), !G || "mousemove" !== e.type) {
                        if (e.preventedByNestedSwiper) return y.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(y.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                        if (y.params.onlyExternal) return y.allowClick = !1, void(T && (y.touches.startX = y.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, y.touches.startY = y.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, z = Date.now()));
                        if (G && document.activeElement && e.target === document.activeElement && a(e.target).is(D)) return S = !0, void(y.allowClick = !1);
                        if (C && y.emit("onTouchMove", y, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (y.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, y.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof M) {
                                var t = 180 * Math.atan2(Math.abs(y.touches.currentY - y.touches.startY), Math.abs(y.touches.currentX - y.touches.startX)) / Math.PI;
                                M = y.isHorizontal() ? t > y.params.touchAngle : 90 - t > y.params.touchAngle
                            }
                            if (M && y.emit("onTouchMoveOpposite", y, e), "undefined" == typeof A && y.browser.ieTouch && (y.touches.currentX !== y.touches.startX || y.touches.currentY !== y.touches.startY) && (A = !0), T) {
                                if (M) return void(T = !1);
                                if (A || !y.browser.ieTouch) {
                                    y.allowClick = !1, y.emit("onSliderMove", y, e), e.preventDefault(), y.params.touchMoveStopPropagation && !y.params.nested && e.stopPropagation(), S || (s.loop && y.fixLoop(), I = y.getWrapperTranslate(), y.setWrapperTransition(0), y.animating && y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), y.params.autoplay && y.autoplaying && (y.params.autoplayDisableOnInteraction ? y.stopAutoplay() : y.pauseAutoplay()), B = !1, y.params.grabCursor && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grabbing", y.container[0].style.cursor = "-moz-grabbin", y.container[0].style.cursor = "grabbing")), S = !0;
                                    var r = y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY;
                                    r *= y.params.touchRatio, y.rtl && (r = -r), y.swipeDirection = r > 0 ? "prev" : "next", P = r + I;
                                    var i = !0;
                                    if (r > 0 && P > y.minTranslate() ? (i = !1, y.params.resistance && (P = y.minTranslate() - 1 + Math.pow(-y.minTranslate() + I + r, y.params.resistanceRatio))) : 0 > r && P < y.maxTranslate() && (i = !1, y.params.resistance && (P = y.maxTranslate() + 1 - Math.pow(y.maxTranslate() - I - r, y.params.resistanceRatio))),
                                        i && (e.preventedByNestedSwiper = !0), !y.params.allowSwipeToNext && "next" === y.swipeDirection && I > P && (P = I), !y.params.allowSwipeToPrev && "prev" === y.swipeDirection && P > I && (P = I), y.params.followFinger) {
                                        if (y.params.threshold > 0) {
                                            if (!(Math.abs(r) > y.params.threshold || k)) return void(P = I);
                                            if (!k) return k = !0, y.touches.startX = y.touches.currentX, y.touches.startY = y.touches.currentY, P = I, void(y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY)
                                        }(y.params.freeMode || y.params.watchSlidesProgress) && y.updateActiveIndex(), y.params.freeMode && (0 === H.length && H.push({
                                            position: y.touches[y.isHorizontal() ? "startX" : "startY"],
                                            time: z
                                        }), H.push({
                                            position: y.touches[y.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), y.updateProgress(P), y.setWrapperTranslate(P)
                                    }
                                }
                            }
                        }
                    }
                }, y.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), C && y.emit("onTouchEnd", y, e), C = !1, T) {
                        y.params.grabCursor && S && T && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grab", y.container[0].style.cursor = "-moz-grab", y.container[0].style.cursor = "grab");
                        var t = Date.now(),
                            s = t - z;
                        if (y.allowClick && (y.updateClickedSlide(e), y.emit("onTap", y, e), 300 > s && t - L > 300 && (E && clearTimeout(E), E = setTimeout(function() {
                                y && (y.params.paginationHide && y.paginationContainer.length > 0 && !a(e.target).hasClass(y.params.bulletClass) && y.paginationContainer.toggleClass(y.params.paginationHiddenClass), y.emit("onClick", y, e))
                            }, 300)), 300 > s && 300 > t - L && (E && clearTimeout(E), y.emit("onDoubleTap", y, e))), L = Date.now(), setTimeout(function() {
                                y && (y.allowClick = !0)
                            }, 0), !T || !S || !y.swipeDirection || 0 === y.touches.diff || P === I) return void(T = S = !1);
                        T = S = !1;
                        var r;
                        if (r = y.params.followFinger ? y.rtl ? y.translate : -y.translate : -P, y.params.freeMode) {
                            if (r < -y.minTranslate()) return void y.slideTo(y.activeIndex);
                            if (r > -y.maxTranslate()) return void(y.slides.length < y.snapGrid.length ? y.slideTo(y.snapGrid.length - 1) : y.slideTo(y.slides.length - 1));
                            if (y.params.freeModeMomentum) {
                                if (H.length > 1) {
                                    var i = H.pop(),
                                        n = H.pop(),
                                        o = i.position - n.position,
                                        l = i.time - n.time;
                                    y.velocity = o / l, y.velocity = y.velocity / 2, Math.abs(y.velocity) < y.params.freeModeMinimumVelocity && (y.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (y.velocity = 0)
                                } else y.velocity = 0;
                                H.length = 0;
                                var p = 1e3 * y.params.freeModeMomentumRatio,
                                    d = y.velocity * p,
                                    u = y.translate + d;
                                y.rtl && (u = -u);
                                var c, m = !1,
                                    f = 20 * Math.abs(y.velocity) * y.params.freeModeMomentumBounceRatio;
                                if (u < y.maxTranslate()) y.params.freeModeMomentumBounce ? (u + y.maxTranslate() < -f && (u = y.maxTranslate() - f), c = y.maxTranslate(), m = !0, B = !0) : u = y.maxTranslate();
                                else if (u > y.minTranslate()) y.params.freeModeMomentumBounce ? (u - y.minTranslate() > f && (u = y.minTranslate() + f), c = y.minTranslate(), m = !0, B = !0) : u = y.minTranslate();
                                else if (y.params.freeModeSticky) {
                                    var g, h = 0;
                                    for (h = 0; h < y.snapGrid.length; h += 1)
                                        if (y.snapGrid[h] > -u) {
                                            g = h;
                                            break
                                        } u = Math.abs(y.snapGrid[g] - u) < Math.abs(y.snapGrid[g - 1] - u) || "next" === y.swipeDirection ? y.snapGrid[g] : y.snapGrid[g - 1], y.rtl || (u = -u)
                                }
                                if (0 !== y.velocity) p = y.rtl ? Math.abs((-u - y.translate) / y.velocity) : Math.abs((u - y.translate) / y.velocity);
                                else if (y.params.freeModeSticky) return void y.slideReset();
                                y.params.freeModeMomentumBounce && m ? (y.updateProgress(c), y.setWrapperTransition(p), y.setWrapperTranslate(u), y.onTransitionStart(), y.animating = !0, y.wrapper.transitionEnd(function() {
                                    y && B && (y.emit("onMomentumBounce", y), y.setWrapperTransition(y.params.speed), y.setWrapperTranslate(c), y.wrapper.transitionEnd(function() {
                                        y && y.onTransitionEnd()
                                    }))
                                })) : y.velocity ? (y.updateProgress(u), y.setWrapperTransition(p), y.setWrapperTranslate(u), y.onTransitionStart(), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function() {
                                    y && y.onTransitionEnd()
                                }))) : y.updateProgress(u), y.updateActiveIndex()
                            }
                            return void((!y.params.freeModeMomentum || s >= y.params.longSwipesMs) && (y.updateProgress(), y.updateActiveIndex()))
                        }
                        var v, w = 0,
                            b = y.slidesSizesGrid[0];
                        for (v = 0; v < y.slidesGrid.length; v += y.params.slidesPerGroup) "undefined" != typeof y.slidesGrid[v + y.params.slidesPerGroup] ? r >= y.slidesGrid[v] && r < y.slidesGrid[v + y.params.slidesPerGroup] && (w = v, b = y.slidesGrid[v + y.params.slidesPerGroup] - y.slidesGrid[v]) : r >= y.slidesGrid[v] && (w = v, b = y.slidesGrid[y.slidesGrid.length - 1] - y.slidesGrid[y.slidesGrid.length - 2]);
                        var x = (r - y.slidesGrid[w]) / b;
                        if (s > y.params.longSwipesMs) {
                            if (!y.params.longSwipes) return void y.slideTo(y.activeIndex);
                            "next" === y.swipeDirection && (x >= y.params.longSwipesRatio ? y.slideTo(w + y.params.slidesPerGroup) : y.slideTo(w)), "prev" === y.swipeDirection && (x > 1 - y.params.longSwipesRatio ? y.slideTo(w + y.params.slidesPerGroup) : y.slideTo(w))
                        } else {
                            if (!y.params.shortSwipes) return void y.slideTo(y.activeIndex);
                            "next" === y.swipeDirection && y.slideTo(w + y.params.slidesPerGroup), "prev" === y.swipeDirection && y.slideTo(w)
                        }
                    }
                }, y._slideTo = function(e, a) {
                    return y.slideTo(e, a, !0, !0)
                }, y.slideTo = function(e, a, t, s) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), y.snapIndex = Math.floor(e / y.params.slidesPerGroup), y.snapIndex >= y.snapGrid.length && (y.snapIndex = y.snapGrid.length - 1);
                    var r = -y.snapGrid[y.snapIndex];
                    y.params.autoplay && y.autoplaying && (s || !y.params.autoplayDisableOnInteraction ? y.pauseAutoplay(a) : y.stopAutoplay()), y.updateProgress(r);
                    for (var i = 0; i < y.slidesGrid.length; i++) - Math.floor(100 * r) >= Math.floor(100 * y.slidesGrid[i]) && (e = i);
                    return !y.params.allowSwipeToNext && r < y.translate && r < y.minTranslate() ? !1 : !y.params.allowSwipeToPrev && r > y.translate && r > y.maxTranslate() && (y.activeIndex || 0) !== e ? !1 : ("undefined" == typeof a && (a = y.params.speed), y.previousIndex = y.activeIndex || 0, y.activeIndex = e, y.rtl && -r === y.translate || !y.rtl && r === y.translate ? (y.params.autoHeight && y.updateAutoHeight(), y.updateClasses(), "slide" !== y.params.effect && y.setWrapperTranslate(r), !1) : (y.updateClasses(), y.onTransitionStart(t), 0 === a ? (y.setWrapperTranslate(r), y.setWrapperTransition(0), y.onTransitionEnd(t)) : (y.setWrapperTranslate(r), y.setWrapperTransition(a), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function() {
                        y && y.onTransitionEnd(t)
                    }))), !0))
                }, y.onTransitionStart = function(e) {
                    "undefined" == typeof e && (e = !0), y.params.autoHeight && y.updateAutoHeight(), y.lazy && y.lazy.onTransitionStart(), e && (y.emit("onTransitionStart", y), y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeStart", y), y.activeIndex > y.previousIndex ? y.emit("onSlideNextStart", y) : y.emit("onSlidePrevStart", y)))
                }, y.onTransitionEnd = function(e) {
                    y.animating = !1, y.setWrapperTransition(0), "undefined" == typeof e && (e = !0), y.lazy && y.lazy.onTransitionEnd(), e && (y.emit("onTransitionEnd", y), y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeEnd", y), y.activeIndex > y.previousIndex ? y.emit("onSlideNextEnd", y) : y.emit("onSlidePrevEnd", y))), y.params.hashnav && y.hashnav && y.hashnav.setHash()
                }, y.slideNext = function(e, a, t) {
                    if (y.params.loop) {
                        if (y.animating) return !1;
                        y.fixLoop();
                        y.container[0].clientLeft;
                        return y.slideTo(y.activeIndex + y.params.slidesPerGroup, a, e, t)
                    }
                    return y.slideTo(y.activeIndex + y.params.slidesPerGroup, a, e, t)
                }, y._slideNext = function(e) {
                    return y.slideNext(!0, e, !0)
                }, y.slidePrev = function(e, a, t) {
                    if (y.params.loop) {
                        if (y.animating) return !1;
                        y.fixLoop();
                        y.container[0].clientLeft;
                        return y.slideTo(y.activeIndex - 1, a, e, t)
                    }
                    return y.slideTo(y.activeIndex - 1, a, e, t)
                }, y._slidePrev = function(e) {
                    return y.slidePrev(!0, e, !0)
                }, y.slideReset = function(e, a, t) {
                    return y.slideTo(y.activeIndex, a, e)
                }, y.setWrapperTransition = function(e, a) {
                    y.wrapper.transition(e), "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTransition(e), y.params.parallax && y.parallax && y.parallax.setTransition(e), y.params.scrollbar && y.scrollbar && y.scrollbar.setTransition(e), y.params.control && y.controller && y.controller.setTransition(e, a), y.emit("onSetTransition", y, e)
                }, y.setWrapperTranslate = function(e, a, t) {
                    var s = 0,
                        i = 0,
                        n = 0;
                    y.isHorizontal() ? s = y.rtl ? -e : e : i = e, y.params.roundLengths && (s = r(s), i = r(i)), y.params.virtualTranslate || (y.support.transforms3d ? y.wrapper.transform("translate3d(" + s + "px, " + i + "px, " + n + "px)") : y.wrapper.transform("translate(" + s + "px, " + i + "px)")), y.translate = y.isHorizontal() ? s : i;
                    var o, l = y.maxTranslate() - y.minTranslate();
                    o = 0 === l ? 0 : (e - y.minTranslate()) / l, o !== y.progress && y.updateProgress(e), a && y.updateActiveIndex(), "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTranslate(y.translate), y.params.parallax && y.parallax && y.parallax.setTranslate(y.translate), y.params.scrollbar && y.scrollbar && y.scrollbar.setTranslate(y.translate), y.params.control && y.controller && y.controller.setTranslate(y.translate, t), y.emit("onSetTranslate", y, y.translate)
                }, y.getTranslate = function(e, a) {
                    var t, s, r, i;
                    return "undefined" == typeof a && (a = "x"), y.params.virtualTranslate ? y.rtl ? -y.translate : y.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), i = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), y.rtl && s && (s = -s), s || 0)
                }, y.getWrapperTranslate = function(e) {
                    return "undefined" == typeof e && (e = y.isHorizontal() ? "x" : "y"), y.getTranslate(y.wrapper[0], e)
                }, y.observers = [], y.initObservers = function() {
                    if (y.params.observeParents)
                        for (var e = y.container.parents(), a = 0; a < e.length; a++) o(e[a]);
                    o(y.container[0], {
                        childList: !1
                    }), o(y.wrapper[0], {
                        attributes: !1
                    })
                }, y.disconnectObservers = function() {
                    for (var e = 0; e < y.observers.length; e++) y.observers[e].disconnect();
                    y.observers = []
                }, y.createLoop = function() {
                    y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove();
                    var e = y.wrapper.children("." + y.params.slideClass);
                    "auto" !== y.params.slidesPerView || y.params.loopedSlides || (y.params.loopedSlides = e.length), y.loopedSlides = parseInt(y.params.loopedSlides || y.params.slidesPerView, 10), y.loopedSlides = y.loopedSlides + y.params.loopAdditionalSlides, y.loopedSlides > e.length && (y.loopedSlides = e.length);
                    var t, s = [],
                        r = [];
                    for (e.each(function(t, i) {
                            var n = a(this);
                            t < y.loopedSlides && r.push(i), t < e.length && t >= e.length - y.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
                        }), t = 0; t < r.length; t++) y.wrapper.append(a(r[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass));
                    for (t = s.length - 1; t >= 0; t--) y.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass))
                }, y.destroyLoop = function() {
                    y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove(), y.slides.removeAttr("data-swiper-slide-index")
                }, y.reLoop = function(e) {
                    var a = y.activeIndex - y.loopedSlides;
                    y.destroyLoop(), y.createLoop(), y.updateSlidesSize(), e && y.slideTo(a + y.loopedSlides, 0, !1)
                }, y.fixLoop = function() {
                    var e;
                    y.activeIndex < y.loopedSlides ? (e = y.slides.length - 3 * y.loopedSlides + y.activeIndex, e += y.loopedSlides, y.slideTo(e, 0, !1, !0)) : ("auto" === y.params.slidesPerView && y.activeIndex >= 2 * y.loopedSlides || y.activeIndex > y.slides.length - 2 * y.params.slidesPerView) && (e = -y.slides.length + y.activeIndex + y.loopedSlides, e += y.loopedSlides, y.slideTo(e, 0, !1, !0))
                }, y.appendSlide = function(e) {
                    if (y.params.loop && y.destroyLoop(), "object" == typeof e && e.length)
                        for (var a = 0; a < e.length; a++) e[a] && y.wrapper.append(e[a]);
                    else y.wrapper.append(e);
                    y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0)
                }, y.prependSlide = function(e) {
                    y.params.loop && y.destroyLoop();
                    var a = y.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var t = 0; t < e.length; t++) e[t] && y.wrapper.prepend(e[t]);
                        a = y.activeIndex + e.length
                    } else y.wrapper.prepend(e);
                    y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0), y.slideTo(a, 0, !1)
                }, y.removeSlide = function(e) {
                    y.params.loop && (y.destroyLoop(), y.slides = y.wrapper.children("." + y.params.slideClass));
                    var a, t = y.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var s = 0; s < e.length; s++) a = e[s], y.slides[a] && y.slides.eq(a).remove(), t > a && t--;
                        t = Math.max(t, 0)
                    } else a = e, y.slides[a] && y.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
                    y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0), y.params.loop ? y.slideTo(t + y.loopedSlides, 0, !1) : y.slideTo(t, 0, !1)
                }, y.removeAllSlides = function() {
                    for (var e = [], a = 0; a < y.slides.length; a++) e.push(a);
                    y.removeSlide(e)
                }, y.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < y.slides.length; e++) {
                                var a = y.slides.eq(e),
                                    t = a[0].swiperSlideOffset,
                                    s = -t;
                                y.params.virtualTranslate || (s -= y.translate);
                                var r = 0;
                                y.isHorizontal() || (r = s, s = 0);
                                var i = y.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({
                                    opacity: i
                                }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (y.slides.transition(e), y.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                y.slides.transitionEnd(function() {
                                    if (!a && y) {
                                        a = !0, y.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) y.wrapper.trigger(e[t])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var e = 0; e < y.slides.length; e++) {
                                var t = y.slides.eq(e),
                                    s = t[0].progress;
                                y.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));
                                var r = t[0].swiperSlideOffset,
                                    i = -180 * s,
                                    n = i,
                                    o = 0,
                                    l = -r,
                                    p = 0;
                                if (y.isHorizontal() ? y.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + y.slides.length, y.params.flip.slideShadows) {
                                    var d = y.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                        u = y.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                    0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0))
                                }
                                t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                            }
                        },
                        setTransition: function(e) {
                            if (y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), y.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                y.slides.eq(y.activeIndex).transitionEnd(function() {
                                    if (!t && y && a(this).hasClass(y.params.slideActiveClass)) {
                                        t = !0, y.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < e.length; s++) y.wrapper.trigger(e[s])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, t = 0;
                            y.params.cube.shadow && (y.isHorizontal() ? (e = y.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), y.wrapper.append(e)), e.css({
                                height: y.width + "px"
                            })) : (e = y.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), y.container.append(e))));
                            for (var s = 0; s < y.slides.length; s++) {
                                var r = y.slides.eq(s),
                                    i = 90 * s,
                                    n = Math.floor(i / 360);
                                y.rtl && (i = -i, n = Math.floor(-i / 360));
                                var o = Math.max(Math.min(r[0].progress, 1), -1),
                                    l = 0,
                                    p = 0,
                                    d = 0;
                                s % 4 === 0 ? (l = 4 * -n * y.size, d = 0) : (s - 1) % 4 === 0 ? (l = 0, d = 4 * -n * y.size) : (s - 2) % 4 === 0 ? (l = y.size + 4 * n * y.size, d = y.size) : (s - 3) % 4 === 0 && (l = -y.size, d = 3 * y.size + 4 * y.size * n), y.rtl && (l = -l), y.isHorizontal() || (p = l, l = 0);
                                var u = "rotateX(" + (y.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (y.isHorizontal() ? i : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                                if (1 >= o && o > -1 && (t = 90 * s + 90 * o, y.rtl && (t = 90 * -s - 90 * o)), r.transform(u), y.params.cube.slideShadows) {
                                    var c = y.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                        m = y.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), r.append(c)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (y.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + y.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + y.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + y.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + y.size / 2 + "px"
                                }), y.params.cube.shadow)
                                if (y.isHorizontal()) e.transform("translate3d(0px, " + (y.width / 2 + y.params.cube.shadowOffset) + "px, " + -y.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + y.params.cube.shadowScale + ")");
                                else {
                                    var f = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                        g = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                        h = y.params.cube.shadowScale,
                                        v = y.params.cube.shadowScale / g,
                                        w = y.params.cube.shadowOffset;
                                    e.transform("scale3d(" + h + ", 1, " + v + ") translate3d(0px, " + (y.height / 2 + w) + "px, " + -y.height / 2 / v + "px) rotateX(-90deg)")
                                } var b = y.isSafari || y.isUiWebView ? -y.size / 2 : 0;
                            y.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (y.isHorizontal() ? 0 : t) + "deg) rotateY(" + (y.isHorizontal() ? -t : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), y.params.cube.shadow && !y.isHorizontal() && y.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = y.translate, t = y.isHorizontal() ? -e + y.width / 2 : -e + y.height / 2, s = y.isHorizontal() ? y.params.coverflow.rotate : -y.params.coverflow.rotate, r = y.params.coverflow.depth, i = 0, n = y.slides.length; n > i; i++) {
                                var o = y.slides.eq(i),
                                    l = y.slidesSizesGrid[i],
                                    p = o[0].swiperSlideOffset,
                                    d = (t - p - l / 2) / l * y.params.coverflow.modifier,
                                    u = y.isHorizontal() ? s * d : 0,
                                    c = y.isHorizontal() ? 0 : s * d,
                                    m = -r * Math.abs(d),
                                    f = y.isHorizontal() ? 0 : y.params.coverflow.stretch * d,
                                    g = y.isHorizontal() ? y.params.coverflow.stretch * d : 0;
                                Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);
                                var h = "translate3d(" + g + "px," + f + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                                if (o.transform(h), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, y.params.coverflow.slideShadows) {
                                    var v = y.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                        w = y.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                    0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                                }
                            }
                            if (y.browser.ie) {
                                var b = y.wrapper[0].style;
                                b.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, y.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, t) {
                        if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== y.slides.length)) {
                            var s = y.slides.eq(e),
                                r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            !s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || (r = r.add(s[0])), 0 !== r.length && r.each(function() {
                                var e = a(this);
                                e.addClass("swiper-lazy-loading");
                                var r = e.attr("data-background"),
                                    i = e.attr("data-src"),
                                    n = e.attr("data-srcset");
                                y.loadImage(e[0], i || r, n, !1, function() {
                                    if (r ? (e.css("background-image", 'url("' + r + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), i && (e.attr("src", i), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), s.find(".swiper-lazy-preloader, .preloader").remove(), y.params.loop && t) {
                                        var a = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(y.params.slideDuplicateClass)) {
                                            var o = y.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + y.params.slideDuplicateClass + ")");
                                            y.lazy.loadImageInSlide(o.index(), !1)
                                        } else {
                                            var l = y.wrapper.children("." + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                            y.lazy.loadImageInSlide(l.index(), !1)
                                        }
                                    }
                                    y.emit("onLazyImageReady", y, s[0], e[0])
                                }), y.emit("onLazyImageLoad", y, s[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e;
                        if (y.params.watchSlidesVisibility) y.wrapper.children("." + y.params.slideVisibleClass).each(function() {
                            y.lazy.loadImageInSlide(a(this).index())
                        });
                        else if (y.params.slidesPerView > 1)
                            for (e = y.activeIndex; e < y.activeIndex + y.params.slidesPerView; e++) y.slides[e] && y.lazy.loadImageInSlide(e);
                        else y.lazy.loadImageInSlide(y.activeIndex);
                        if (y.params.lazyLoadingInPrevNext)
                            if (y.params.slidesPerView > 1 || y.params.lazyLoadingInPrevNextAmount && y.params.lazyLoadingInPrevNextAmount > 1) {
                                var t = y.params.lazyLoadingInPrevNextAmount,
                                    s = y.params.slidesPerView,
                                    r = Math.min(y.activeIndex + s + Math.max(t, s), y.slides.length),
                                    i = Math.max(y.activeIndex - Math.max(s, t), 0);
                                for (e = y.activeIndex + y.params.slidesPerView; r > e; e++) y.slides[e] && y.lazy.loadImageInSlide(e);
                                for (e = i; e < y.activeIndex; e++) y.slides[e] && y.lazy.loadImageInSlide(e)
                            } else {
                                var n = y.wrapper.children("." + y.params.slideNextClass);
                                n.length > 0 && y.lazy.loadImageInSlide(n.index());
                                var o = y.wrapper.children("." + y.params.slidePrevClass);
                                o.length > 0 && y.lazy.loadImageInSlide(o.index())
                            }
                    },
                    onTransitionStart: function() {
                        y.params.lazyLoading && (y.params.lazyLoadingOnTransitionStart || !y.params.lazyLoadingOnTransitionStart && !y.lazy.initialImageLoaded) && y.lazy.load()
                    },
                    onTransitionEnd: function() {
                        y.params.lazyLoading && !y.params.lazyLoadingOnTransitionStart && y.lazy.load()
                    }
                }, y.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var a = y.scrollbar,
                            t = y.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                            s = t - a.track.offset()[y.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
                            r = -y.minTranslate() * a.moveDivider,
                            i = -y.maxTranslate() * a.moveDivider;
                        r > s ? s = r : s > i && (s = i), s = -s / a.moveDivider, y.updateProgress(s), y.setWrapperTranslate(s, !0)
                    },
                    dragStart: function(e) {
                        var a = y.scrollbar;
                        a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), y.params.scrollbarHide && a.track.css("opacity", 1), y.wrapper.transition(100), a.drag.transition(100), y.emit("onScrollbarDragStart", y)
                    },
                    dragMove: function(e) {
                        var a = y.scrollbar;
                        a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), y.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), y.emit("onScrollbarDragMove", y))
                    },
                    dragEnd: function(e) {
                        var a = y.scrollbar;
                        a.isTouched && (a.isTouched = !1, y.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function() {
                            a.track.css("opacity", 0), a.track.transition(400)
                        }, 1e3)), y.emit("onScrollbarDragEnd", y), y.params.scrollbarSnapOnRelease && y.slideReset())
                    },
                    enableDraggable: function() {
                        var e = y.scrollbar,
                            t = y.support.touch ? e.track : document;
                        a(e.track).on(y.touchEvents.start, e.dragStart), a(t).on(y.touchEvents.move, e.dragMove), a(t).on(y.touchEvents.end, e.dragEnd)
                    },
                    disableDraggable: function() {
                        var e = y.scrollbar,
                            t = y.support.touch ? e.track : document;
                        a(e.track).off(y.touchEvents.start, e.dragStart), a(t).off(y.touchEvents.move, e.dragMove), a(t).off(y.touchEvents.end, e.dragEnd)
                    },
                    set: function() {
                        if (y.params.scrollbar) {
                            var e = y.scrollbar;
                            e.track = a(y.params.scrollbar), y.params.uniqueNavElements && "string" == typeof y.params.scrollbar && e.track.length > 1 && 1 === y.container.find(y.params.scrollbar).length && (e.track = y.container.find(y.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = y.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = y.size / y.virtualSize, e.moveDivider = e.divider * (e.trackSize / y.size), e.dragSize = e.trackSize * e.divider, y.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", y.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (y.params.scrollbar) {
                            var e, a = y.scrollbar,
                                t = (y.translate || 0, a.dragSize);
                            e = (a.trackSize - a.dragSize) * y.progress, y.rtl && y.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), y.isHorizontal() ? (y.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (y.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), y.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                                a.track[0].style.opacity = 0, a.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        y.params.scrollbar && y.scrollbar.drag.transition(e)
                    }
                }, y.controller = {
                    LinearSpline: function(e, a) {
                        this.x = e, this.y = a, this.lastIndex = e.length - 1;
                        var t, s;
                        this.x.length;
                        this.interpolate = function(e) {
                            return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                        };
                        var r = function() {
                            var e, a, t;
                            return function(s, r) {
                                for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= r ? a = t : e = t;
                                return e
                            }
                        }()
                    },
                    getInterpolateFunction: function(e) {
                        y.controller.spline || (y.controller.spline = y.params.loop ? new y.controller.LinearSpline(y.slidesGrid, e.slidesGrid) : new y.controller.LinearSpline(y.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, a) {
                        function s(a) {
                            e = a.rtl && "horizontal" === a.params.direction ? -y.translate : y.translate, "slide" === y.params.controlBy && (y.controller.getInterpolateFunction(a), i = -y.controller.spline.interpolate(-e)), i && "container" !== y.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (y.maxTranslate() - y.minTranslate()), i = (e - y.minTranslate()) * r + a.minTranslate()), y.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, y), a.updateActiveIndex()
                        }
                        var r, i, n = y.params.control;
                        if (y.isArray(n))
                            for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && s(n[o]);
                        else n instanceof t && a !== n && s(n)
                    },
                    setTransition: function(e, a) {
                        function s(a) {
                            a.setWrapperTransition(e, y), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                                i && (a.params.loop && "slide" === y.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                            }))
                        }
                        var r, i = y.params.control;
                        if (y.isArray(i))
                            for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && s(i[r]);
                        else i instanceof t && a !== i && s(i)
                    }
                }, y.hashnav = {
                    init: function() {
                        if (y.params.hashnav) {
                            y.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var a = 0, t = 0, s = y.slides.length; s > t; t++) {
                                    var r = y.slides.eq(t),
                                        i = r.attr("data-hash");
                                    if (i === e && !r.hasClass(y.params.slideDuplicateClass)) {
                                        var n = r.index();
                                        y.slideTo(n, a, y.params.runCallbacksOnInit, !0)
                                    }
                                }
                        }
                    },
                    setHash: function() {
                        y.hashnav.initialized && y.params.hashnav && (document.location.hash = y.slides.eq(y.activeIndex).attr("data-hash") || "")
                    }
                }, y.disableKeyboardControl = function() {
                    y.params.keyboardControl = !1, a(document).off("keydown", l)
                }, y.enableKeyboardControl = function() {
                    y.params.keyboardControl = !0, a(document).on("keydown", l)
                }, y.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, y.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"), y.mousewheel.event = "wheel"
                } catch (O) {
                    (window.WheelEvent || y.container[0] && "wheel" in y.container[0]) && (y.mousewheel.event = "wheel")
                }!y.mousewheel.event && window.WheelEvent, y.mousewheel.event || void 0 === document.onmousewheel || (y.mousewheel.event = "mousewheel"), y.mousewheel.event || (y.mousewheel.event = "DOMMouseScroll")
            }
            y.disableMousewheelControl = function() {
                return y.mousewheel.event ? (y.container.off(y.mousewheel.event, p), !0) : !1
            }, y.enableMousewheelControl = function() {
                return y.mousewheel.event ? (y.container.on(y.mousewheel.event, p), !0) : !1
            }, y.parallax = {
                setTranslate: function() {
                    y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        d(this, y.progress)
                    }), y.slides.each(function() {
                        var e = a(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            d(this, a)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = y.params.speed), y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = a(this),
                            s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.transition(s)
                    })
                }
            }, y._plugins = [];
            for (var N in y.plugins) {
                var R = y.plugins[N](y, y.params[N]);
                R && y._plugins.push(R)
            }
            return y.callPlugins = function(e) {
                for (var a = 0; a < y._plugins.length; a++) e in y._plugins[a] && y._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, y.emitterEventListeners = {}, y.emit = function(e) {
                y.params[e] && y.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (y.emitterEventListeners[e])
                    for (a = 0; a < y.emitterEventListeners[e].length; a++) y.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                y.callPlugins && y.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, y.on = function(e, a) {
                return e = u(e), y.emitterEventListeners[e] || (y.emitterEventListeners[e] = []), y.emitterEventListeners[e].push(a), y
            }, y.off = function(e, a) {
                var t;
                if (e = u(e), "undefined" == typeof a) return y.emitterEventListeners[e] = [], y;
                if (y.emitterEventListeners[e] && 0 !== y.emitterEventListeners[e].length) {
                    for (t = 0; t < y.emitterEventListeners[e].length; t++) y.emitterEventListeners[e][t] === a && y.emitterEventListeners[e].splice(t, 1);
                    return y
                }
            }, y.once = function(e, a) {
                e = u(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), y.off(e, t)
                };
                return y.on(e, t), y
            }, y.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (a(e.target).is(y.params.nextButton) ? (y.onClickNext(e), y.isEnd ? y.a11y.notify(y.params.lastSlideMessage) : y.a11y.notify(y.params.nextSlideMessage)) : a(e.target).is(y.params.prevButton) && (y.onClickPrev(e), y.isBeginning ? y.a11y.notify(y.params.firstSlideMessage) : y.a11y.notify(y.params.prevSlideMessage)), a(e.target).is("." + y.params.bulletClass) && a(e.target)[0].click())
                },
                liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = y.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function() {
                    y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.a11y.makeFocusable(y.nextButton), y.a11y.addRole(y.nextButton, "button"), y.a11y.addLabel(y.nextButton, y.params.nextSlideMessage)), y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.a11y.makeFocusable(y.prevButton), y.a11y.addRole(y.prevButton, "button"), y.a11y.addLabel(y.prevButton, y.params.prevSlideMessage)), a(y.container).append(y.a11y.liveRegion)
                },
                initPagination: function() {
                    y.params.pagination && y.params.paginationClickable && y.bullets && y.bullets.length && y.bullets.each(function() {
                        var e = a(this);
                        y.a11y.makeFocusable(e), y.a11y.addRole(e, "button"), y.a11y.addLabel(e, y.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    y.a11y.liveRegion && y.a11y.liveRegion.length > 0 && y.a11y.liveRegion.remove()
                }
            }, y.init = function() {
                y.params.loop && y.createLoop(), y.updateContainerSize(), y.updateSlidesSize(), y.updatePagination(), y.params.scrollbar && y.scrollbar && (y.scrollbar.set(), y.params.scrollbarDraggable && y.scrollbar.enableDraggable()), "slide" !== y.params.effect && y.effects[y.params.effect] && (y.params.loop || y.updateProgress(), y.effects[y.params.effect].setTranslate()), y.params.loop ? y.slideTo(y.params.initialSlide + y.loopedSlides, 0, y.params.runCallbacksOnInit) : (y.slideTo(y.params.initialSlide, 0, y.params.runCallbacksOnInit), 0 === y.params.initialSlide && (y.parallax && y.params.parallax && y.parallax.setTranslate(), y.lazy && y.params.lazyLoading && (y.lazy.load(), y.lazy.initialImageLoaded = !0))), y.attachEvents(), y.params.observer && y.support.observer && y.initObservers(), y.params.preloadImages && !y.params.lazyLoading && y.preloadImages(), y.params.autoplay && y.startAutoplay(), y.params.keyboardControl && y.enableKeyboardControl && y.enableKeyboardControl(), y.params.mousewheelControl && y.enableMousewheelControl && y.enableMousewheelControl(),
                    y.params.hashnav && y.hashnav && y.hashnav.init(), y.params.a11y && y.a11y && y.a11y.init(), y.emit("onInit", y)
            }, y.cleanupStyles = function() {
                y.container.removeClass(y.classNames.join(" ")).removeAttr("style"), y.wrapper.removeAttr("style"), y.slides && y.slides.length && y.slides.removeClass([y.params.slideVisibleClass, y.params.slideActiveClass, y.params.slideNextClass, y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), y.paginationContainer && y.paginationContainer.length && y.paginationContainer.removeClass(y.params.paginationHiddenClass), y.bullets && y.bullets.length && y.bullets.removeClass(y.params.bulletActiveClass), y.params.prevButton && a(y.params.prevButton).removeClass(y.params.buttonDisabledClass), y.params.nextButton && a(y.params.nextButton).removeClass(y.params.buttonDisabledClass), y.params.scrollbar && y.scrollbar && (y.scrollbar.track && y.scrollbar.track.length && y.scrollbar.track.removeAttr("style"), y.scrollbar.drag && y.scrollbar.drag.length && y.scrollbar.drag.removeAttr("style"))
            }, y.destroy = function(e, a) {
                y.detachEvents(), y.stopAutoplay(), y.params.scrollbar && y.scrollbar && y.params.scrollbarDraggable && y.scrollbar.disableDraggable(), y.params.loop && y.destroyLoop(), a && y.cleanupStyles(), y.disconnectObservers(), y.params.keyboardControl && y.disableKeyboardControl && y.disableKeyboardControl(), y.params.mousewheelControl && y.disableMousewheelControl && y.disableMousewheelControl(), y.params.a11y && y.a11y && y.a11y.destroy(), y.emit("onDestroy"), e !== !1 && (y = null)
            }, y.init(), y
        }
    };
    t.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: t || r || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    };
    for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && e(window[s[r]]);
    var i;
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (t = 0; t < s.length; t++) r.on(s[t], a);
        return this
    }), "transform" in i.fn || (i.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in i.fn || (i.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});

! function(t) {
    t.Package ? Materialize = {} : t.Materialize = {}
}(window), Materialize.guid = function() {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(), Materialize.elementOrParentIsFixed = function(t) {
    var e = $(t),
        i = e.add(e.parents()),
        n = !1;
    return i.each(function() {
        return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0
    }), n
};
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity;
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(e) {
    function t(e) {
        var t = e.length,
            a = r.type(e);
        return "function" === a || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var r = function(e, t) {
            return new r.fn.init(e, t)
        };
        r.isWindow = function(e) {
            return null != e && e == e.window
        }, r.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
        }, r.isArray = Array.isArray || function(e) {
            return "array" === r.type(e)
        }, r.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;
            try {
                if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (a) {
                return !1
            }
            for (t in e);
            return void 0 === t || o.call(e, t)
        }, r.each = function(e, r, a) {
            var n, o = 0,
                i = e.length,
                s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
                else
                    for (o in e)
                        if (n = r.apply(e[o], a), n === !1) break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]), n === !1) break;
            return e
        }, r.data = function(e, t, n) {
            if (void 0 === n) {
                var o = e[r.expando],
                    i = o && a[o];
                if (void 0 === t) return i;
                if (i && t in i) return i[t]
            } else if (void 0 !== t) {
                var o = e[r.expando] || (e[r.expando] = ++r.uuid);
                return a[o] = a[o] || {}, a[o][t] = n, n
            }
        }, r.removeData = function(e, t) {
            var n = e[r.expando],
                o = n && a[n];
            o && r.each(t, function(e, t) {
                delete o[t]
            })
        }, r.extend = function() {
            var e, t, a, n, o, i, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                if (null != (o = arguments[l]))
                    for (n in o) e = s[n], a = o[n], s !== a && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, i = e && r.isArray(e) ? e : []) : i = e && r.isPlainObject(e) ? e : {}, s[n] = r.extend(c, i, a)) : void 0 !== a && (s[n] = a));
            return s
        }, r.queue = function(e, a, n) {
            function o(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? ! function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a];) e[n++] = t[a++];
                    return e.length = n, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) {
                a = (a || "fx") + "queue";
                var i = r.data(e, a);
                return n ? (!i || r.isArray(n) ? i = r.data(e, a, o(n)) : i.push(n), i) : i || []
            }
        }, r.dequeue = function(e, t) {
            r.each(e.nodeType ? [e] : e, function(e, a) {
                t = t || "fx";
                var n = r.queue(a, t),
                    o = n.shift();
                "inprogress" === o && (o = n.shift()), o && ("fx" === t && n.unshift("inprogress"), o.call(a, function() {
                    r.dequeue(a, t)
                }))
            })
        }, r.fn = r.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    a = this.offset(),
                    n = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : r(e).offset();
                return a.top -= parseFloat(t.style.marginTop) || 0, a.left -= parseFloat(t.style.marginLeft) || 0, e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: a.top - n.top,
                    left: a.left - n.left
                }
            }
        };
        var a = {};
        r.expando = "velocity" + (new Date).getTime(), r.uuid = 0;
        for (var n = {}, o = n.hasOwnProperty, i = n.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) n["[object " + s[l] + "]"] = s[l].toLowerCase();
        r.fn.init.prototype = r.fn, e.Velocity = {
            Utilities: r
        }
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function o(e) {
            return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
        }

        function i(e) {
            var t = f.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }

            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i
            }

            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]),
                    s = r + i * x,
                    l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }

            function g() {
                V = !0, (e != r || a != n) && p()
            }
            var m = 4,
                y = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function(t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
                };
            C.getControlPoints = function() {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function() {
                return T
            }, C
        }

        function u(e, t) {
            var r = e;
            return m.isString(e) ? b.Easings[e] || (r = !1) : r = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = b.Easings[b.defaults.easing] ? b.defaults.easing : v), r
        }

        function c(e) {
            if (e) {
                var t = (new Date).getTime(),
                    r = b.State.calls.length;
                r > 1e4 && (b.State.calls = n(b.State.calls));
                for (var o = 0; r > o; o++)
                    if (b.State.calls[o]) {
                        var s = b.State.calls[o],
                            l = s[0],
                            u = s[2],
                            d = s[3],
                            g = !!d,
                            y = null;
                        d || (d = b.State.calls[o][3] = t - 16);
                        for (var h = Math.min((t - d) / u.duration, 1), v = 0, x = l.length; x > v; v++) {
                            var P = l[v],
                                V = P.element;
                            if (i(V)) {
                                var C = !1;
                                if (u.display !== a && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        f.each(T, function(e, t) {
                                            S.setPropertyValue(V, "display", t)
                                        })
                                    }
                                    S.setPropertyValue(V, "display", u.display)
                                }
                                u.visibility !== a && "hidden" !== u.visibility && S.setPropertyValue(V, "visibility", u.visibility);
                                for (var k in P)
                                    if ("element" !== k) {
                                        var A, F = P[k],
                                            j = m.isString(F.easing) ? b.Easings[F.easing] : F.easing;
                                        if (1 === h) A = F.endValue;
                                        else {
                                            var E = F.endValue - F.startValue;
                                            if (A = F.startValue + E * j(h, u, E), !g && A === F.currentValue) continue
                                        }
                                        if (F.currentValue = A, "tween" === k) y = A;
                                        else {
                                            if (S.Hooks.registered[k]) {
                                                var H = S.Hooks.getRoot(k),
                                                    N = i(V).rootPropertyValueCache[H];
                                                N && (F.rootPropertyValue = N)
                                            }
                                            var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);
                                            S.Hooks.registered[k] && (i(V).rootPropertyValueCache[H] = S.Normalizations.registered[H] ? S.Normalizations.registered[H]("extract", null, L[1]) : L[1]), "transform" === L[0] && (C = !0)
                                        }
                                    } u.mobileHA && i(V).transformCache.translate3d === a && (i(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V)
                            }
                        }
                        u.display !== a && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], h, Math.max(0, d + u.duration - t), d, y), 1 === h && p(o)
                    }
            }
            b.State.isTicking && w(c)
        }

        function p(e, t) {
            if (!b.State.calls[e]) return !1;
            for (var r = b.State.calls[e][0], n = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && S.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && (f.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var d = !1;
                    f.each(S.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (d = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (d = !0, delete i(p).transformCache.translate3d), d && S.flushTransformCache(p), S.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n)
                } catch (g) {
                    setTimeout(function() {
                        throw g
                    }, 1)
                }
                s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && (f.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), b(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && f.dequeue(p, o.queue)
            }
            b.State.calls[e] = !1;
            for (var m = 0, y = b.State.calls.length; y > m; m++)
                if (b.State.calls[m] !== !1) {
                    l = !0;
                    break
                } l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }
        var f, d = function() {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return a
            }(),
            g = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var r, a = (new Date).getTime();
                    return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function() {
                        t(a + r)
                    }, r)
                }
            }(),
            m = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            y = !1;
        if (e.fn && e.fn.jquery ? (f = e, y = !0) : f = t.Velocity.Utilities, 8 >= d && !y) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= d) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var h = 400,
            v = "swing",
            b = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: r.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: f,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: h,
                    easing: v,
                    begin: a,
                    complete: a,
                    progress: a,
                    display: a,
                    visibility: a,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    f.data(e, "velocity", {
                        isSVG: m.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var x = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }

            function r(r, a) {
                var n = {
                        dx: r.v,
                        dv: e(r)
                    },
                    o = t(r, .5 * a, n),
                    i = t(r, .5 * a, o),
                    s = t(r, a, i),
                    l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                    u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function a(e, t, n) {
                var o, i, s, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    u = [0],
                    c = 0,
                    p = 1e-4,
                    f = .016;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, o = null !== n, o ? (c = a(e, t), i = c / n * f) : i = f; s = r(s || l, i), u.push(1 + s.x), c += 16, Math.abs(s.x) > p && Math.abs(s.v) > p;);
                return o ? function(e) {
                    return u[e * (u.length - 1) | 0]
                } : c
            }
        }();
        b.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, f.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            b.Easings[t[0]] = l.apply(null, t[1])
        });
        var S = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < S.Lists.colors.length; e++) {
                        var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (d)
                        for (r in S.Hooks.templates) {
                            a = S.Hooks.templates[r], n = a[0].split(" ");
                            var o = a[1].match(S.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), S.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                        }
                    for (r in S.Hooks.templates) {
                        a = S.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e],
                                s = e;
                            S.Hooks.registered[i] = [r, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = S.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var r = S.Hooks.registered[e];
                    if (r) {
                        var a = r[0],
                            n = r[1];
                        return t = S.Hooks.cleanRootPropertyValue(a, t), t.toString().match(S.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function(e, t, r) {
                    var a = S.Hooks.registered[e];
                    if (a) {
                        var n, o, i = a[0],
                            s = a[1];
                        return r = S.Hooks.cleanRootPropertyValue(i, r), n = r.toString().match(S.RegEx.valueSplit), n[s] = t, o = n.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var a;
                                return S.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(S.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case "inject":
                                return "rect(" + r + ")"
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var a = parseFloat(r);
                                if (!a && 0 !== a) {
                                    var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a = n ? n[1] : 0
                                }
                                return a;
                            case "inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= d) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return r;
                            case "inject":
                                return r
                        }
                    }
                },
                register: function() {
                    9 >= d || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));
                    for (var e = 0; e < S.Lists.transformsBase.length; e++) ! function() {
                        var t = S.Lists.transformsBase[e];
                        S.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case "scal":
                                        case "scale":
                                            b.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                            break;
                                        case "skew":
                                            o = !/(deg|\d)$/i.test(n);
                                            break;
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(n)
                                    }
                                    return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < S.Lists.colors.length; e++) ! function() {
                        var t = S.Lists.colors[e];
                        S.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (S.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                    else {
                                        var i, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : S.RegEx.isHex.test(n) ? i = "rgb(" + S.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;
                                case "inject":
                                    return 8 >= d ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), m.isString(b.State.prefixElement.style[n])) return b.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t, r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(r, function(e, t, r, a) {
                        return t + t + r + r + a + a
                    }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && S.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= d) l = f.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === S.getPropertyValue(e, "display") && (u = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var g;
                        g = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === d && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var m = s(e, "position");
                        ("fixed" === m || "absolute" === m && /top|left/i.test(r)) && (l = f(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (S.Hooks.registered[r]) {
                    var u = r,
                        c = S.Hooks.getRoot(u);
                    n === a && (n = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (n = S.Normalizations.registered[c]("extract", e, n)), l = S.Hooks.extractValue(u, n)
                } else if (S.Normalizations.registered[r]) {
                    var p, g;
                    p = S.Normalizations.registered[r]("name", e), "transform" !== p && (g = s(e, S.Names.prefixCheck(p)[0]), S.Values.isCSSNullValue(g) && S.Hooks.templates[r] && (g = S.Hooks.templates[r][1])), l = S.Normalizations.registered[r]("extract", e, g)
                }
                if (!/^[\d-]/.test(l))
                    if (i(e) && i(e).isSVG && S.Names.SVGAttribute(r))
                        if (/^(height|width)$/i.test(r)) try {
                            l = e.getBBox()[r]
                        } catch (m) {
                            l = 0
                        } else l = e.getAttribute(r);
                        else l = s(e, S.Names.prefixCheck(r)[0]);
                return S.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (S.Normalizations.registered[r] && "transform" === S.Normalizations.registered[r]("name", e)) S.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
                else {
                    if (S.Hooks.registered[r]) {
                        var l = r,
                            u = S.Hooks.getRoot(r);
                        n = n || S.getPropertyValue(e, u), a = S.Hooks.injectValue(l, a, n), r = u
                    }
                    if (S.Normalizations.registered[r] && (a = S.Normalizations.registered[r]("inject", e, a), r = S.Normalizations.registered[r]("name", e)), s = S.Names.prefixCheck(r)[0], 8 >= d) try {
                        e.style[s] = a
                    } catch (c) {
                        b.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                    } else i(e) && i(e).isSVG && S.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    b.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(S.getPropertyValue(e, t))
                }
                var r = "";
                if ((d || b.State.isAndroid && !b.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    f.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    f.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                S.setPropertyValue(e, "transform", r)
            }
        };
        S.Hooks.register(), S.Normalizations.register(), b.hook = function(e, t, r) {
            var n = a;
            return e = o(e), f.each(e, function(e, o) {
                if (i(o) === a && b.init(o), r === a) n === a && (n = b.CSS.getPropertyValue(o, t));
                else {
                    var s = b.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && b.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var P = function() {
            function e() {
                return s ? k.promise || null : l
            }

            function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a,
                            n = a,
                            i = a;
                        return m.isArray(e) ? (r = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? i = e[1] : (m.isString(e[1]) && !S.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), m.isFunction(r) && (r = r.call(o, V, w)), m.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i]
                    }

                    function d(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, ""
                        }), r || (r = S.Values.getUnitType(e)), [a, r]
                    }

                    function h() {
                        var e = {
                                myParent: o.parentNode || r.body,
                                position: S.getPropertyValue(o, "position"),
                                fontSize: S.getPropertyValue(o, "fontSize")
                            },
                            a = e.position === L.lastPosition && e.myParent === L.lastParent,
                            n = e.fontSize === L.lastFontSize;
                        L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                        else {
                            var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                b.CSS.setPropertyValue(u, t, "hidden")
                            }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                b.CSS.setPropertyValue(u, t, s + "%")
                            }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                    }
                    if (s.begin && 0 === V) try {
                        s.begin.call(g, g)
                    } catch (x) {
                        setTimeout(function() {
                            throw x
                        }, 1)
                    }
                    if ("scroll" === A) {
                        var P, C, T, F = /^x$/i.test(s.axis) ? "Left" : "Top",
                            j = parseFloat(s.offset) || 0;
                        s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, P = s.container["scroll" + F], T = P + f(o).position()[F.toLowerCase()] + j) : s.container = null : (P = b.State.scrollAnchor[b.State["scrollProperty" + F]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], T = f(o).offset()[F.toLowerCase()] + j), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: P,
                                currentValue: P,
                                endValue: T,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: F,
                                    alternateValue: C
                                }
                            },
                            element: o
                        }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === A) {
                        if (!i(o).tweensContainer) return void f.dequeue(o, s.queue);
                        "none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, v.easing || delete s.easing, v.duration || delete s.duration, s = f.extend({}, i(o).opts, s);
                        var E = f.extend(!0, {}, i(o).tweensContainer);
                        for (var H in E)
                            if ("element" !== H) {
                                var N = E[H].startValue;
                                E[H].startValue = E[H].currentValue = E[H].endValue, E[H].endValue = N, m.isEmptyObject(v) || (E[H].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(E[H]), o)
                            } l = E
                    } else if ("start" === A) {
                        var E;
                        i(o).tweensContainer && i(o).isAnimating === !0 && (E = i(o).tweensContainer), f.each(y, function(e, t) {
                            if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0),
                                    n = r[0],
                                    o = r[1],
                                    i = r[2];
                                if (S.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = S.Values.hexToRgb(n), u = i ? S.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [l[c]];
                                        o && f.push(o), u !== a && f.push(u[c]), y[e + s[c]] = f
                                    }
                                    delete y[e]
                                }
                            }
                        });
                        for (var z in y) {
                            var O = p(y[z]),
                                q = O[0],
                                $ = O[1],
                                M = O[2];
                            z = S.Names.camelCase(z);
                            var I = S.Hooks.getRoot(z),
                                B = !1;
                            if (i(o).isSVG || "tween" === I || S.Names.prefixCheck(I)[1] !== !1 || S.Normalizations.registered[I] !== a) {
                                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !M && 0 !== q && (M = 0), s._cacheValues && E && E[z] ? (M === a && (M = E[z].endValue + E[z].unitType), B = i(o).rootPropertyValueCache[I]) : S.Hooks.registered[z] ? M === a ? (B = S.getPropertyValue(o, I), M = S.getPropertyValue(o, z, B)) : B = S.Hooks.templates[I][1] : M === a && (M = S.getPropertyValue(o, z));
                                var W, G, Y, D = !1;
                                if (W = d(z, M), M = W[0], Y = W[1], W = d(z, q), q = W[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return D = t, ""
                                    }), G = W[1], M = parseFloat(M) || 0, q = parseFloat(q) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(z) ? (q /= 100, G = "em") : /^scale/.test(z) ? (q /= 100, G = "") : /(Red|Green|Blue)$/i.test(z) && (q = q / 100 * 255, G = "")), /[\/*]/.test(D)) G = Y;
                                else if (Y !== G && 0 !== M)
                                    if (0 === q) G = Y;
                                    else {
                                        n = n || h();
                                        var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";
                                        switch (Y) {
                                            case "%":
                                                M *= "x" === Q ? n.percentToPxWidth : n.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                M *= n[Y + "ToPx"]
                                        }
                                        switch (G) {
                                            case "%":
                                                M *= 1 / ("x" === Q ? n.percentToPxWidth : n.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                M *= 1 / n[G + "ToPx"]
                                        }
                                    } switch (D) {
                                    case "+":
                                        q = M + q;
                                        break;
                                    case "-":
                                        q = M - q;
                                        break;
                                    case "*":
                                        q = M * q;
                                        break;
                                    case "/":
                                        q = M / q
                                }
                                l[z] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: q,
                                    unitType: G,
                                    easing: $
                                }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o)
                            } else b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (S.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (b.State.calls.push([R, g, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : V++)
                }
                var n, o = this,
                    s = f.extend({}, b.defaults, v),
                    l = {};
                switch (i(o) === a && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function(e) {
                        b.velocityQueueEntryFlag = !0, i(o).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(s.delay)),
                            next: e
                        }
                    }), s.duration.toString().toLowerCase()) {
                    case "fast":
                        s.duration = 200;
                        break;
                    case "normal":
                        s.duration = h;
                        break;
                    case "slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function(t, r) {
                    return r === !0 ? (k.promise && k.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o)
            }
            var s, l, d, g, y, v, x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
            if (m.isWrapped(this) ? (s = !1, d = 0, g = this, l = this) : (s = !0, d = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = o(g)) {
                x ? (y = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (y = arguments[d], v = arguments[d + 1]);
                var w = g.length,
                    V = 0;
                if (!/^(stop|finish)$/i.test(y) && !f.isPlainObject(v)) {
                    var C = d + 1;
                    v = {};
                    for (var T = C; T < arguments.length; T++) m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? v.easing = arguments[T] : m.isFunction(arguments[T]) && (v.complete = arguments[T]) : v.duration = arguments[T]
                }
                var k = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                s && b.Promise && (k.promise = new b.Promise(function(e, t) {
                    k.resolver = e, k.rejecter = t
                }));
                var A;
                switch (y) {
                    case "scroll":
                        A = "scroll";
                        break;
                    case "reverse":
                        A = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        f.each(g, function(e, t) {
                            i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                        });
                        var F = [];
                        return f.each(b.State.calls, function(e, t) {
                            t && f.each(t[1], function(r, n) {
                                var o = v === a ? "" : v;
                                return o === !0 || t[2].queue === o || v === a && t[2].queue === !1 ? void f.each(g, function(r, a) {
                                    a === n && ((v === !0 || m.isString(v)) && (f.each(f.queue(a, m.isString(v) ? v : ""), function(e, t) {
                                        m.isFunction(t) && t(null, !0)
                                    }), f.queue(a, m.isString(v) ? v : "", [])), "stop" === y ? (i(a) && i(a).tweensContainer && o !== !1 && f.each(i(a).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), F.push(e)) : "finish" === y && (t[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === y && (f.each(F, function(e, t) {
                            p(t, !0)
                        }), k.promise && k.resolver(g)), e();
                    default:
                        if (!f.isPlainObject(y) || m.isEmptyObject(y)) {
                            if (m.isString(y) && b.Redirects[y]) {
                                var j = f.extend({}, v),
                                    E = j.duration,
                                    H = j.delay || 0;
                                return j.backwards === !0 && (g = f.extend(!0, [], g).reverse()), f.each(g, function(e, t) {
                                    parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e : m.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t, e, w)), j.drag && (j.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : h), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / w : (e + 1) / w), .75 * j.duration, 200)), b.Redirects[y].call(t, t, j || {}, e, w, g, k.promise ? k : a)
                                }), e()
                            }
                            var N = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return k.promise ? k.rejecter(new Error(N)) : console.log(N), e()
                        }
                        A = "start"
                }
                var L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    R = [];
                f.each(g, function(e, t) {
                    m.isNode(t) && n.call(t)
                });
                var z, j = f.extend({}, b.defaults, v);
                if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop)
                    for (var O = 0; z > O; O++) {
                        var q = {
                            delay: j.delay,
                            progress: j.progress
                        };
                        O === z - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), P(g, "reverse", q)
                    }
                return e()
            }
        };
        b = f.extend(P, b), b.animate = P;
        var w = t.requestAnimationFrame || g;
        return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (w = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : w = t.requestAnimationFrame || g
        }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function(e, t) {
            b.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = f.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    d = {};
                l.display === a && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        d[r] = e.style[r];
                        var a = b.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    d.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in d) e.style[t] = d[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, b(e, p, l)
            }
        }), f.each(["In", "Out"], function(e, t) {
            b.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = f.extend({}, r),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i)
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
            }
        }), b
    }(window.jQuery || window.Zepto || window, window, document)
}));

! function(t) {
    var e = {
        init: function(e) {
            var i = {
                onShow: null
            };
            return e = t.extend(i, e), this.each(function() {
                var i, n, s = t(this),
                    r = (t(window).width(), s.find("li.tab a")),
                    a = s.width(),
                    o = Math.max(a, s[0].scrollWidth) / r.length,
                    l = 0,
                    u = function(t) {
                        return a - t.position().left - t.outerWidth() - s.scrollLeft()
                    },
                    h = function(t) {
                        return t.position().left + s.scrollLeft()
                    };
                i = t(r.filter('[href="' + location.hash + '"]')), 0 === i.length && (i = t(this).find("li.tab a.active").first()), 0 === i.length && (i = t(this).find("li.tab a").first()), i.addClass("active"), l = r.index(i), 0 > l && (l = 0), void 0 !== i[0] && (n = t(i[0].hash)), s.append('<div class="indicator"></div>');
                var d = s.find(".indicator");
                s.is(":visible") && setTimeout(function() {
                    d.css({
                        right: u(i)
                    }), d.css({
                        left: h(i)
                    })
                }, 0), t(window).resize(function() {
                    a = s.width(), o = Math.max(a, s[0].scrollWidth) / r.length, 0 > l && (l = 0), 0 !== o && 0 !== a && (d.css({
                        right: u(i)
                    }), d.css({
                        left: h(i)
                    }))
                }), r.not(i).each(function() {
                    t(this.hash).hide()
                }), s.on("click", "a", function(c) {
                    if (t(this).parent().hasClass("disabled")) return void c.preventDefault();
                    if (!t(this).attr("target")) {
                        a = s.width(), o = Math.max(a, s[0].scrollWidth) / r.length, i.removeClass("active"), void 0 !== n && n.hide(), i = t(this), n = t(this.hash), r = s.find("li.tab a");
                        i.position();
                        i.addClass("active");
                        var f = l;
                        l = r.index(t(this)), 0 > l && (l = 0), void 0 !== n && (n.show(), "function" == typeof e.onShow && e.onShow.call(this, n)), l - f >= 0 ? (d.velocity({
                            right: u(i)
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), d.velocity({
                            left: h(i)
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })) : (d.velocity({
                            left: h(i)
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), d.velocity({
                            right: u(i)
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })), c.preventDefault()
                    }
                })
            })
        },
        select_tab: function(t) {
            this.find('a[href="#' + t + '"]').trigger("click")
        }
    };
    t.fn.tabs = function(i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tabs") : e.init.apply(this, arguments)
    }, t(document).ready(function() {
        t("ul.tabs").tabs()
    })
}(jQuery);
! function(t) {
    t(document).ready(function() {
        var e = t("body"),
            i = !1,
            n = 0;
        e.position();
        t(window).scroll(function() {
            var e = t(window).scrollTop(),
                s = t(".sticky").offset().top,
                r = t(".site-footer").offset().top,
                a = s - e,
                o = r - e;
            i ? a = n - e : n = s, 30 >= a && o >= 330 ? (i = !0, t(".sidebar").addClass("fixed")) : (i = !1, t(".sidebar").removeClass("fixed"))
        })
    })
}(jQuery);
! function(t) {
    t(document).ready(function() {
        function e(e) {
            var i = e.css("font-family"),
                n = e.css("font-size");
            n && s.css("font-size", n), i && s.css("font-family", i), "off" === e.attr("wrap") && s.css("overflow-wrap", "normal").css("white-space", "pre"), s.text(e.val() + "\n");
            var r = s.html().replace(/\n/g, "<br>");
            s.html(r), e.is(":visible") ? s.css("width", e.width()) : s.css("width", t(window).width() / 2), e.css("height", s.height())
        }
        Materialize.updateTextFields = function() {
            var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t(e).each(function(e, i) {
                t(i).val().length > 0 || i.autofocus || void 0 !== t(this).attr("placeholder") || t(i)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
            })
        };
        var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        t(document).on("change", i, function() {
            (0 !== t(this).val().length || void 0 !== t(this).attr("placeholder")) && t(this).siblings("label").addClass("active"), validate_field(t(this))
        }), t(document).ready(function() {
            Materialize.updateTextFields()
        }), t(document).on("reset", function(e) {
            var n = t(e.target);
            n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid"), n.find(i).each(function() {
                "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active")
            }), n.find("select.initialized").each(function() {
                var t = n.find("option[selected]").text();
                n.siblings("input.select-dropdown").val(t)
            }))
        }), t(document).on("focus", i, function() {
            t(this).siblings("label, i").addClass("active")
        }), t(document).on("blur", i, function() {
            var e = t(this);
            0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), 0 === e.val().length && e[0].validity.badInput !== !0 && void 0 !== e.attr("placeholder") && e.siblings("i").removeClass("active"), validate_field(e)
        }), window.validate_field = function(t) {
            var e = void 0 !== t.attr("length"),
                i = parseInt(t.attr("length")),
                n = t.val().length;
            0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i >= n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
        };
        var n = "input[type=radio], input[type=checkbox]";
        t(document).on("keyup.radio", n, function(e) {
            if (9 === e.which) {
                t(this).addClass("tabbed");
                var i = t(this);
                return void i.one("blur", function() {
                    t(this).removeClass("tabbed")
                })
            }
        });
        var s = t(".hiddendiv").first();
        s.length || (s = t('<div class="hiddendiv common"></div>'), t("body").append(s));
        var r = ".materialize-textarea";
        t(r).each(function() {
            var i = t(this);
            i.val().length && e(i)
        }), t("body").on("keyup keydown autoresize", r, function() {
            e(t(this))
        }), t(document).on("change", '.file-field input[type="file"]', function() {
            for (var e = t(this).closest(".file-field"), i = e.find("input.file-path"), n = t(this)[0].files, s = [], r = 0; r < n.length; r++) s.push(n[r].name);
            i.val(s.join(", ")), i.trigger("change")
        });
        var a, o = "input[type=range]",
            l = !1;
        t(o).each(function() {
            var e = t('<span class="thumb"><span class="value"></span></span>');
            t(this).after(e)
        });
        var u = ".range-field";
        t(document).on("change", o, function() {
            var e = t(this).siblings(".thumb");
            e.find(".value").html(t(this).val())
        }), t(document).on("input mousedown touchstart", o, function(e) {
            var i = t(this).siblings(".thumb"),
                n = t(this).outerWidth();
            i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(i)), i.find(".value").html(t(this).val()), l = !0, t(this).addClass("active"), i.hasClass("active") || i.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }), "input" !== e.type && (a = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left, 0 > a ? a = 0 : a > n && (a = n), i.addClass("active").css("left", a)), i.find(".value").html(t(this).val())
        }), t(document).on("mouseup touchend", u, function() {
            l = !1, t(this).removeClass("active")
        }), t(document).on("mousemove touchmove", u, function(e) {
            var i, n = t(this).children(".thumb");
            if (l) {
                n.hasClass("active") || n.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), i = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                var s = t(this).outerWidth();
                0 > i ? i = 0 : i > s && (i = s), n.addClass("active").css("left", i), n.find(".value").html(n.siblings(o).val())
            }
        }), t(document).on("mouseout touchleave", u, function() {
            if (!l) {
                var e = t(this).children(".thumb");
                e.hasClass("active") && e.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), e.removeClass("active")
            }
        })
    }), t.fn.material_select = function(e) {
        function i(t, e, i) {
            var s = t.indexOf(e),
                r = -1 === s;
            return r ? t.push(e) : t.splice(s, 1), i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"), i.find("option").eq(e).prop("selected", r), n(t, i), r
        }

        function n(t, e) {
            for (var i = "", n = 0, s = t.length; s > n; n++) {
                var r = e.find("option").eq(t[n]).text();
                i += 0 === n ? r : ", " + r
            }
            "" === i && (i = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(i)
        }
        t(this).each(function() {
            var n = t(this);
            if (!n.hasClass("browser-default")) {
                var s = n.attr("multiple") ? !0 : !1,
                    r = n.data("select-id");
                if (r && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), t("ul#select-options-" + r).remove()), "destroy" === e) return void n.data("select-id", null).removeClass("initialized");
                var a = Materialize.guid();
                n.data("select-id", a);
                var o = t('<div class="select-wrapper"></div>');
                o.addClass(n.attr("class"));
                var l = t('<ul id="select-options-' + a + '" class="dropdown-content select-dropdown ' + (s ? "multiple-select-dropdown" : "") + '"></ul>'),
                    u = n.children("option, optgroup"),
                    h = [],
                    d = !1,
                    c = n.find("option:selected").html() || n.find("option:first").html() || "",
                    f = function(e, i, n) {
                        var s = i.is(":disabled") ? "disabled " : "",
                            r = "optgroup-option" === n ? "optgroup-option " : "",
                            a = i.data("icon"),
                            o = i.attr("class");
                        if (a) {
                            var u = "";
                            return o && (u = ' class="' + o + '"'), "multiple" === n ? l.append(t('<li class="' + s + '"><img src="' + a + '"' + u + '><span><input type="checkbox"' + s + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + s + r + '"><img src="' + a + '"' + u + "><span>" + i.html() + "</span></li>")), !0
                        }
                        "multiple" === n ? l.append(t('<li class="' + s + '"><span><input type="checkbox"' + s + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + s + r + '"><span>' + i.html() + "</span></li>"))
                    };
                u.length && u.each(function() {
                    if (t(this).is("option")) s ? f(n, t(this), "multiple") : f(n, t(this));
                    else if (t(this).is("optgroup")) {
                        var e = t(this).children("option");
                        l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function() {
                            f(n, t(this), "optgroup-option")
                        })
                    }
                }), l.find("li:not(.optgroup)").each(function(r) {
                    t(this).click(function(a) {
                        if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                            var o = !0;
                            s ? (t('input[type="checkbox"]', this).prop("checked", function(t, e) {
                                return !e
                            }), o = i(h, t(this).index(), n), _.trigger("focus")) : (l.find("li").removeClass("active"), t(this).toggleClass("active"), _.val(t(this).text())), g(l, t(this)), n.find("option").eq(r).prop("selected", o), n.trigger("change"), "undefined" != typeof e && e()
                        }
                        a.stopPropagation()
                    })
                }), n.wrap(o);
                var p = t('<span class="caret">&#9660;</span>');
                n.is(":disabled") && p.addClass("disabled");
                var m = c.replace(/"/g, "&quot;"),
                    _ = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + a + '" value="' + m + '"/>');
                n.before(_), _.before(p), _.after(l), n.is(":disabled") || _.dropdown({
                    hover: !1,
                    closeOnClick: !1
                }), n.attr("tabindex") && t(_[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), _.on({
                    focus: function() {
                        if (t("ul.select-dropdown").not(l[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                            t(this).trigger("open", ["focus"]);
                            var e = t(this).val(),
                                i = l.find("li").filter(function() {
                                    return t(this).text().toLowerCase() === e.toLowerCase()
                                })[0];
                            g(l, i)
                        }
                    },
                    click: function(t) {
                        t.stopPropagation()
                    }
                }), _.on("blur", function() {
                    s || t(this).trigger("close"), l.find("li.selected").removeClass("selected")
                }), l.hover(function() {
                    d = !0
                }, function() {
                    d = !1
                }), t(window).on({
                    click: function() {
                        s && (d || _.trigger("close"))
                    }
                }), s && n.find("option:selected:not(:disabled)").each(function() {
                    var e = t(this).index();
                    i(h, e, n), l.find("li").eq(e).find(":checkbox").prop("checked", !0)
                });
                var g = function(e, i) {
                        if (i) {
                            e.find("li.selected").removeClass("selected");
                            var n = t(i);
                            n.addClass("selected"), l.scrollTo(n)
                        }
                    },
                    v = [],
                    y = function(e) {
                        if (9 == e.which) return void _.trigger("close");
                        if (40 == e.which && !l.is(":visible")) return void _.trigger("open");
                        if (13 != e.which || l.is(":visible")) {
                            e.preventDefault();
                            var i = String.fromCharCode(e.which).toLowerCase(),
                                n = [9, 13, 27, 38, 40];
                            if (i && -1 === n.indexOf(e.which)) {
                                v.push(i);
                                var r = v.join(""),
                                    a = l.find("li").filter(function() {
                                        return 0 === t(this).text().toLowerCase().indexOf(r)
                                    })[0];
                                a && g(l, a)
                            }
                            if (13 == e.which) {
                                var o = l.find("li.selected:not(.disabled)")[0];
                                o && (t(o).trigger("click"), s || _.trigger("close"))
                            }
                            40 == e.which && (a = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], g(l, a)), 27 == e.which && _.trigger("close"), 38 == e.which && (a = l.find("li.selected").prev("li:not(.disabled)")[0], a && g(l, a)), setTimeout(function() {
                                v = []
                            }, 1e3)
                        }
                    };
                _.on("keydown", y)
            }
        })
    }
}(jQuery);
jQuery(document).ready(function(t) {
    t(".mMenu").on("click", function() {
        t("#site-header").toggleClass("navOpen")
    }), t(".customizeBtn").on("click", function() {
        t(".top-menu-wrapper").hide(), t(".customize-menu").slideToggle()
    }), t(".top-menu-btn").on("click", function() {
        t(".customize-menu").hide(), t(".top-menu-wrapper").slideToggle()
    });
    var e = t(".customize-menu").find("input:checked");
    e.length > 0 && e.parent().parent().addClass("active"), t(".customize-menu").find("input").on("change", function() {
        t(".customize-menu").find(".active").removeClass("active");
        var e = t(".customize-menu").find("input:checked");
        e.length > 0 && e.parent().parent().addClass("active")
    })
});
jQuery(document).ready(function(t) {
    var e = document.createElement("audio");
    e.setAttribute("src", "/wp-content/themes/hockeyettan/assets/sounds/pling.mp3"), t.get(), e.addEventListener("load", function() {
        e.volume = .05, e.play()
    }, !0)
});
! function(t) {
    t.fn.equalHeights = function() {
        var e = 0,
            i = t(this);
        return i.each(function() {
            var i = t(this).innerHeight();
            i > e && (e = i)
        }), i.css("height", e)
    }, t("[data-equal]").each(function() {
        var e = t(this),
            i = e.data("equal");
        e.find(i).equalHeights()
    })
}(jQuery), jQuery(document).ready(function(t) {
    t(window).outerWidth(), t(window).height(), setTimeout(function() {
        t(".equal-row").each(function() {
            t(this).find(".equal").equalHeights()
        })
    }, 500);
    t(".tabs a, .gameTabs a").on("click", function() {
        setTimeout(function() {
            t(".equal-row").each(function() {
                t(this).find(".equal").height("auto"), t(this).find(".equal").equalHeights()
            })
        }, 200)
    })
}), jQuery(window).resize(function() {
    var t = jQuery;
    windowWidth = t(window).outerWidth(), windowHeight = t(window).height(), t(".equal-row").each(function() {
        t(this).find(".equal").height("auto"), t(this).find(".equal").equalHeights()
    })
});
jQuery(document).ready(function(t) {
    var e = t("p.trim").text();
    e = e.substr(0, 150) + "...", t("p.trim").text(e)
});

function windowpop(t, e, i) {
    var n, s;
    return n = window.screen.width / 2 - (e / 2 + 10), s = window.screen.height / 2 - (i / 2 + 50), window.open(t, "Window2", "status=no,height=" + i + ",width=" + e + ",resizable=yes,left=" + n + ",top=" + s + ",screenX=" + n + ",screenY=" + s + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no"), !1
}
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    s = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    r = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    l = a.isArray,
                    h = s.prototype = i.to({}, .1, {}),
                    u = [];
                s.version = "1.15.1", h.constructor = s, h.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var n, s = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || r) {
                        this._initted = !1, this._init();
                        for (var o, l = 1 / (1 - s), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, s, o, l, h, d, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === r) && y !== t && (i = !0, y > r && (s = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0 && y !== r) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !e || t || y === t ? t : r)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / v, d = this._easeType, c = this._easePower, (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === c ? h *= h : 2 === c ? h *= h * h : 3 === c ? h *= h * h * h : 4 === c && (h *= h * h * h * h), this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > this._time / v ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / v)), _ === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = _, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== _ && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || u), 0 === v && this._rawPrevTime === r && f !== r && (this._rawPrevTime = 0))
                }, s.to = function(t, e, i) {
                    return new s(t, e, i)
                }, s.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function(t, e, r, a, h, d, c) {
                    a = a || 0;
                    var f, p, _, m, g = r.delay || 0,
                        v = [],
                        y = function() {
                            r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), h.apply(c || this, d || u)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), f = t.length - 1, _ = 0; f >= _; _++) {
                        p = {};
                        for (m in r) p[m] = r[m];
                        p.delay = g, _ === f && h && (p.onComplete = y), v[_] = new s(t[_], e, p), g += a
                    }
                    return v
                }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, a, o)
                }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, a, o, l)
                }, s.delayedCall = function(t, e, i, n, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: n,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var d = function(t, e) {
                        for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), n = n.concat(d(r, e)), s = n.length), r = r._next;
                        return n
                    },
                    c = s.getAllTweens = function(e) {
                        return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, i, n, s) {
                    null == i && (i = !0), null == n && (n = !0);
                    var r, a, o, l = c(0 != s),
                        h = l.length,
                        u = i && n && s;
                    for (o = 0; h > o; o++) a = l[o], (u || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, h, u, d, c, f = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t)), l(t))
                            for (d = t.length; --d > -1;) s.killChildTweensOf(t[d], e);
                        else {
                            r = [];
                            for (u in f)
                                for (h = f[u].target.parentNode; h;) h === t && (r = r.concat(f[u].tweens)), h = h.parentNode;
                            for (c = r.length, d = 0; c > d; d++) e && r[d].totalTime(r[d].totalDuration()), r[d]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, s) {
                    i = i !== !1, n = n !== !1, s = s !== !1;
                    for (var r, a, o = c(s), l = i && n && s, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && a.paused(t)
                };
                return s.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, s.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, s.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (e = e || r, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s) i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                        l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    r = i._internals,
                    a = n._internals = {},
                    o = r.isSelector,
                    l = r.isArray,
                    h = r.lazyTweens,
                    u = r.lazyRender,
                    d = [],
                    c = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = a.pauseCallback = function(t, e, i, n) {
                        var s = t._timeline,
                            r = s._totalTime;
                        !e && this._forcingPlayhead || s._rawPrevTime === t._startTime || (s.pause(t._startTime), e && e.apply(n || s, i || d), this._forcingPlayhead && s.seek(r))
                    },
                    _ = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.15.1", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, s) {
                    var r = n.repeat && c.TweenMax || i;
                    return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
                }, m.from = function(t, e, n, s) {
                    return this.add((n.repeat && c.TweenMax || i).from(t, e, n), s)
                }, m.fromTo = function(t, e, n, s, r) {
                    var a = s.repeat && c.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, n, s), r) : this.set(t, s, r)
                }, m.staggerTo = function(t, e, s, r, a, l, h, u) {
                    var d, c = new n({
                        onComplete: l,
                        onCompleteParams: h,
                        onCompleteScope: u,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = _(t)), r = r || 0, 0 > r && (t = _(t), t.reverse(), r *= -1), d = 0; t.length > d; d++) s.startAt && (s.startAt = f(s.startAt)), c.to(t[d], e, f(s), d * r);
                    return this.add(c, a)
                }, m.staggerFrom = function(t, e, i, n, s, r, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, a, o)
                }, m.staggerFromTo = function(t, e, i, n, s, r, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, a, o, l)
                }, m.call = function(t, e, n, s) {
                    return this.add(i.delayedCall(0, t, e, n), s)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var s, r, a = new n(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, s = o._first; s;) r = s._next, e && s instanceof i && s.target === s.vars.onComplete || a.add(s, s._startTime - s._delay), s = r;
                    return o.add(a, 0), a
                }, m.add = function(s, r, a, o) {
                    var h, u, d, c, f, p;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && l(s)) {
                            for (a = a || "normal", o = o || 0, h = r, u = s.length, d = 0; u > d; d++) l(c = s[d]) && (c = new n({
                                tweens: c
                            })), this.add(c, h), "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof s) return this.addLabel(s, r);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (e.prototype.add.call(this, s, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, p = f.rawTime() > s._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, n, s) {
                    var r = i.delayedCall(0, p, ["{self}", e, n, s], this);
                    return r.data = "isPause", this.add(r, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, s) {
                    var r;
                    if (s instanceof t && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && l(s)))
                        for (r = s.length; --r > -1;) s[r] instanceof t && s[r].timeline === this && this.remove(s[r]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (r = e.indexOf("="), -1 === r) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, a, o, l, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        p = this._startTime,
                        _ = this._timeScale,
                        m = this._paused;
                    if (t >= c ? (this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = c + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = 0, this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== f && this._first || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d)), this._time >= f)
                            for (n = this._first; n && (a = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, !this._paused || m);)(n._active || f >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        this._onUpdate && (e || (h.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d))), o && (this._gc || (p === this._startTime || _ !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || d)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, s) {
                    s = s || -9999999999;
                    for (var r = [], a = this._first, o = 0; a;) s > a._startTime || (a instanceof i ? e !== !1 && (r[o++] = a) : (n !== !1 && (r[o++] = a), t !== !1 && (r = r.concat(a.getChildren(!0, e, n)), o = r.length))), a = a._next;
                    return r
                }, m.getTweensOf = function(t, e) {
                    var n, s, r = this._gc,
                        a = [],
                        o = 0;
                    for (r && this._enabled(!0, !0), n = i.getTweensOf(t), s = n.length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (a[o++] = n[s]);
                    return r && this._enabled(!1, !0), a
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                    if (e)
                        for (n in r) r[n] >= i && (r[n] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                    return s
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime, 0 > s._startTime && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), i = s._startTime + s._totalDuration / s._timeScale, i > n && (n = i), s = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    s = 1e-10,
                    r = [],
                    a = e._internals,
                    o = a.lazyTweens,
                    l = a.lazyRender,
                    h = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.15.1", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, s) {
                    return this.add(e.delayedCall(0, t, n, s), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, s, a, o = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) o[s] = i[s];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, n, o), o.onStart = function() {
                        a.target.paused(!0), a.vars.time !== a.target.time() && n === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
                    }, a
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, a, h, u, d, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._duration,
                        _ = this._time,
                        m = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        w = this._paused,
                        b = this._cycle;
                    if (t >= f ? (this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, u = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === s) && y !== t && this._first && (d = !0, y > s && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== _ || 0 === p && y !== s && (y > 0 || 0 > t && y >= 0) && !this._locked) && (u = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (d = !0), this._rawPrevTime = t) : (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : s, t = 0, this._initted || (d = !0))) : (0 === p && 0 > y && (d = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = p + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== b && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & b),
                            x = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            S = this._totalTime,
                            P = this._cycle,
                            k = this._rawPrevTime,
                            M = this._time;
                        if (this._totalTime = b * p, b > this._cycle ? T = !T : this._totalTime += p, this._time = _, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = b, this._locked = !0, _ = T ? 0 : p, this.render(_, e, 0 === p), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), x && (_ = T ? p + 1e-4 : -1e-4, this.render(_, !0, !1)), this._locked = !1, this._paused && !w) return;
                        this._time = M, this._totalTime = S, this._cycle = P, this._rawPrevTime = k
                    }
                    if (!(this._time !== _ && this._first || i || d)) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= _)
                        for (n = this._first; n && (h = n._next, !this._paused || w);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
                    else
                        for (n = this._last; n && (h = n._prev, !this._paused || w);)(n._active || _ >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
                    this._onUpdate && (e || (o.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r))), u && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (a && (o.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || r)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, s, r = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (n = 0; l > n; n++) s = a[n], s.isActive() && (r[o++] = s);
                    return r
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    s = {},
                    r = _gsScope._gsDefine.globals,
                    a = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var s = {
                                a: t
                            },
                            r = {},
                            a = {},
                            o = {
                                c: n
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            u = (i + n) / 2,
                            d = (l + h) / 2,
                            c = (h + u) / 2,
                            f = (c - d) / 8;
                        return s.b = l + (t - l) / 4, r.b = d + f, s.c = r.a = (s.b + r.b) / 2, r.c = a.a = (d + c) / 2, a.b = c - f, o.b = u + (n - u) / 4, a.c = o.a = (a.b + o.b) / 2, [s, r, a, o]
                    },
                    h = function(t, s, r, a, o) {
                        var h, u, d, c, f, p, _, m, g, v, y, w, b, T = t.length - 1,
                            x = 0,
                            S = t[0].a;
                        for (h = 0; T > h; h++) f = t[x], u = f.a, d = f.d, c = t[x + 1].d, o ? (y = e[h], w = i[h], b = .25 * (w + y) * s / (a ? .5 : n[h] || .5), p = d - (d - u) * (a ? .5 * s : 0 !== y ? b / y : 0), _ = d + (c - d) * (a ? .5 * s : 0 !== w ? b / w : 0), m = d - (p + ((_ - p) * (3 * y / (y + w) + .5) / 4 || 0))) : (p = d - .5 * (d - u) * s, _ = d + .5 * (c - d) * s, m = d - (p + _) / 2), p += m, _ += m, f.c = g = p, f.b = 0 !== h ? S : S = f.a + .6 * (f.c - f.a), f.da = d - u, f.ca = g - u, f.ba = S - u, r ? (v = l(u, S, g, d), t.splice(x, 1, v[0], v[1], v[2], v[3]), x += 4) : x++, S = _;
                        f = t[x], f.b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, r && (v = l(f.a, S, f.c, f.d), t.splice(x, 1, v[0], v[1], v[2], v[3]))
                    },
                    u = function(t, n, s, r) {
                        var o, l, h, u, d, c, f = [];
                        if (r)
                            for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof(c = t[l][n]) && "=" === c.charAt(1) && (t[l][n] = r[n] + Number(c.charAt(0) + c.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][n], 0, 0, t[-1 > o ? 0 : 1][n]), f;
                        for (l = 0; o > l; l++) h = t[l][n], u = t[l + 1][n], f[l] = new a(h, 0, 0, u), s && (d = t[l + 2][n], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (d - u) * (d - u));
                        return f[l] = new a(t[l][n], 0, 0, t[l + 1][n]), f
                    },
                    d = function(t, r, a, l, d, c) {
                        var f, p, _, m, g, v, y, w, b = {},
                            T = [],
                            x = c || t[0];
                        d = "string" == typeof d ? "," + d + "," : o, null == r && (r = 1);
                        for (p in t[0]) T.push(p);
                        if (t.length > 1) {
                            for (w = t[t.length - 1], y = !0, f = T.length; --f > -1;)
                                if (p = T[f], Math.abs(x[p] - w[p]) > .05) {
                                    y = !1;
                                    break
                                } y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, f = T.length; --f > -1;) p = T[f], s[p] = -1 !== d.indexOf("," + p + ","), b[p] = u(t, p, s[p], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!l) {
                            for (f = T.length; --f > -1;)
                                if (s[p])
                                    for (_ = b[T[f]], v = _.length - 1, m = 0; v > m; m++) g = _[m + 1].da / i[m] + _[m].da / e[m], n[m] = (n[m] || 0) + g * g;
                            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                        }
                        for (f = T.length, m = a ? 4 : 1; --f > -1;) p = T[f], _ = b[p], h(_, r, a, l, s[p]), y && (_.splice(0, m), _.splice(_.length - m, m));
                        return b
                    },
                    c = function(t, e, i) {
                        e = e || "soft";
                        var n, s, r, o, l, h, u, d, c, f, p, _ = {},
                            m = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || m + 1 > t.length) throw "invalid Bezier data";
                        for (c in t[0]) v.push(c);
                        for (h = v.length; --h > -1;) {
                            for (c = v[h], _[c] = l = [], f = 0, d = t.length, u = 0; d > u; u++) n = null == i ? t[u][c] : "string" == typeof(p = t[u][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && u > 1 && d - 1 > u && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                            for (d = f - m + 1, f = 0, u = 0; d > u; u += m) n = l[u], s = l[u + 1], r = l[u + 2], o = 2 === m ? 0 : l[u + 3], l[f++] = p = 3 === m ? new a(n, s, r, o) : new a(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                            l.length = f
                        }
                        return _
                    },
                    f = function(t, e, i) {
                        for (var n, s, r, a, o, l, h, u, d, c, f, p = 1 / i, _ = t.length; --_ > -1;)
                            for (c = t[_], r = c.a, a = c.d - r, o = c.c - r, l = c.b - r, n = s = 0, u = 1; i >= u; u++) h = p * u, d = 1 - h, n = s - (s = (h * h * a + 3 * d * (h * o + d * l)) * h), f = _ * i + u - 1, e[f] = (e[f] || 0) + n * n
                    },
                    p = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, s, r, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            u = e - 1,
                            d = [],
                            c = [];
                        for (i in t) f(t[i], a, e);
                        for (s = a.length, n = 0; s > n; n++) l += Math.sqrt(a[n]), r = n % e, c[r] = l, r === u && (h += l, r = n / e >> 0, d[r] = c, o[r] = h, l = 0, c = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: d
                        }
                    },
                    _ = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, s, r, a, o, l = e.values || [],
                                h = {},
                                u = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in u) this._props.push(n);
                            for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), o || h[n] !== l[0][n] && (o = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                var _ = p(this._beziers, this._timeRes);
                                this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), r = f.length; --r > -1;) {
                                    for (a = 0; 3 > a; a++) n = f[r][a], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = f[r][2], this._initialRotations[r] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, s, r, a, o, l, h, u, d, c = this._segCount,
                                f = this._func,
                                p = this._target,
                                _ = e !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths, d = this._curSeg,
                                    e *= this._length, s = this._li, e > this._l2 && c - 1 > s) {
                                    for (h = c - 1; h > s && e >= (this._l2 = u[++s]););
                                    this._l1 = u[s - 1], this._li = s, this._curSeg = d = this._segments[s], this._s2 = d[this._s1 = this._si = 0]
                                } else if (this._l1 > e && s > 0) {
                                    for (; s > 0 && (this._l1 = u[--s]) >= e;);
                                    0 === s && this._l1 > e ? this._l1 = 0 : s++, this._l2 = u[s], this._li = s, this._curSeg = d = this._segments[s], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                                }
                                if (i = s, e -= this._l1, s = this._si, e > this._s2 && d.length - 1 > s) {
                                    for (h = d.length - 1; h > s && e >= (this._s2 = d[++s]););
                                    this._s1 = d[s - 1], this._si = s
                                } else if (this._s1 > e && s > 0) {
                                    for (; s > 0 && (this._s1 = d[--s]) >= e;);
                                    0 === s && this._s1 > e ? this._s1 = 0 : s++, this._s2 = d[s], this._si = s
                                }
                                o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;
                            for (n = 1 - o, s = this._props.length; --s > -1;) r = this._props[s], a = this._beziers[r][i], l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._round[r] && (l = Math.round(l)), f[r] ? p[r](l) : p[r] = l;
                            if (this._autoRotate) {
                                var m, g, v, y, w, b, T, x = this._autoRotate;
                                for (s = x.length; --s > -1;) r = x[s][2], b = x[s][3] || 0, T = x[s][4] === !0 ? 1 : t, a = this._beziers[x[s][0]], m = this._beziers[x[s][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, w = m.b + (m.c - m.b) * o, v += (w - v) * o, w += (m.c + (m.d - m.c) * o - w) * o, l = _ ? Math.atan2(w - v, y - g) * T + b : this._initialRotations[s], f[r] ? p[r](l) : p[r] = l)
                            }
                        }
                    }),
                    m = _.prototype;
                _.bezierThrough = d, _.cubicToQuadratic = l, _._autoCSS = !0, _.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, _._cssRegister = function() {
                    var t = r.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            s = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, r, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new _;
                                var h, u, d, c = e.values,
                                    f = c.length - 1,
                                    p = [],
                                    m = {};
                                if (0 > f) return o;
                                for (h = 0; f >= h; h++) d = i(t, c[h], a, o, l, f !== h), p[h] = d.end;
                                for (u in e) m[u] = e[u];
                                return m.values = p, o = new s(t, "bezier", 0, 0, d.pt, 2), o.data = d, o.plugin = l, o.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != d.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != d.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), m.autoRotate && (a._transform || a._enableTransforms(!1), d.autoRotate = a._target._gsTransform), l._onInitTween(d.proxy, m, a._tween), o
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, m._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, s, r, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.15.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var u, d, c, f, p, _, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    x = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    D = function(t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    A = /,(?=[^\)]*(?:\(|$))/gi,
                    L = Math.PI / 180,
                    Y = 180 / Math.PI,
                    j = {},
                    z = document,
                    I = function(t) {
                        return z.createElementNS ? z.createElementNS("http://www.w3.org/1999/xhtml", t) : z.createElement(t)
                    },
                    F = I("div"),
                    Q = I("img"),
                    W = a._internals = {
                        _specialProps: l
                    },
                    N = navigator.userAgent,
                    E = function() {
                        var t = N.indexOf("Android"),
                            e = I("a");
                        return c = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === t || Number(N.substr(t + 8, 1)) > 3), p = c && 6 > Number(N.substr(N.indexOf("Version/") + 8, 1)), f = -1 !== N.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(N)) && (_ = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    G = function(t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    U = function(t) {
                        window.console && console.log(t)
                    },
                    H = "",
                    X = "",
                    V = function(t, e) {
                        e = e || F;
                        var i, n, s = e.style;
                        if (void 0 !== s[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                        return n >= 0 ? (X = 3 === n ? "ms" : i[n], H = "-" + X.toLowerCase() + "-", X + t) : null
                    },
                    $ = z.defaultView ? z.defaultView.getComputedStyle : function() {},
                    q = a.getStyle = function(t, e, i, n, s) {
                        var r;
                        return E || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || $(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : G(t)
                    },
                    B = W.convertToPixels = function(t, i, n, s, r) {
                        if ("px" === s || !s) return n;
                        if ("auto" === s || !n) return 0;
                        var o, l, h, u = O.test(i),
                            d = t,
                            c = F.style,
                            f = 0 > n;
                        if (f && (n = -n), "%" === s && -1 !== i.indexOf("border")) o = n / 100 * (u ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + q(t, "position") + ";line-height:0;", "%" !== s && d.appendChild) c[u ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                            else {
                                if (d = t.parentNode || z.body, l = d._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * n / 100;
                                c[u ? "width" : "height"] = n + s
                            }
                            d.appendChild(F), o = parseFloat(F[u ? "offsetWidth" : "offsetHeight"]), d.removeChild(F), u && "%" === s && a.cacheWidths !== !1 && (l = d._gsCache = d._gsCache || {}, l.time = h, l.width = 100 * (o / n)), 0 !== o || r || (o = B(t, i, n, s, !0))
                        }
                        return f ? -o : o
                    },
                    Z = W.calculateOffset = function(t, e, i) {
                        if ("absolute" !== q(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            s = q(t, "margin" + n, i);
                        return t["offset" + n] - (B(t, e, parseFloat(s), s.replace(w, "")) || 0)
                    },
                    J = function(t, e) {
                        var i, n, s = {};
                        if (e = e || $(t, null))
                            for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(k, D)] = e[i]);
                        return E || (s.opacity = G(t)), n = At(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Pt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    K = function(t, e, i, n, s) {
                        var r, a, o, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (r = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[a] || "" === e[a].replace(y, "") ? r : 0 : Z(t, a), void 0 !== h[a] && (o = new ft(h, a, h[a], o)));
                        if (n)
                            for (a in n) "className" !== a && (l[a] = n[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            s = tt[e],
                            r = s.length;
                        for (i = i || $(t, null); --r > -1;) n -= parseFloat(q(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(q(t, "border" + s[r] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(s.replace(y, ""))), n + " " + s + (i.length > 2 ? " " + i[2] : "")
                    },
                    st = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    rt = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    at = function(t, e, i, n) {
                        var s, r, a, o, l, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, r = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : Y) - (l ? 0 : e), r.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    ot = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    ht = a.parseColor = function(t) {
                        var e, i, n, s, r, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), s = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (r + 1) : a + r - a * r, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(s + 1 / 3, e, i), t[1] = lt(s, e, i), t[2] = lt(s - 1 / 3, e, i), t) : (t = t.match(m) || ot.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black
                    },
                    ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in ot) ut += "|" + h + "\\b";
                ut = RegExp(ut + ")", "gi");
                var dt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var s, r = e ? (t.match(ut) || [""])[0] : "",
                            a = t.split(r).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            u = a.length,
                            d = u > 0 ? a[0].replace(m, "") : "";
                        return u ? s = e ? function(t) {
                            var e, c, f, p;
                            if ("number" == typeof t) t += d;
                            else if (n && A.test(t)) {
                                for (p = t.replace(A, "|").split("|"), f = 0; p.length > f; f++) p[f] = s(p[f]);
                                return p.join(",")
                            }
                            if (e = (t.match(ut) || [r])[0], c = t.split(e).join("").match(v) || [], f = c.length, u > f--)
                                for (; u > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                            return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, c;
                            if ("number" == typeof t) t += d;
                            else if (n && A.test(t)) {
                                for (r = t.replace(A, "|").split("|"), c = 0; r.length > c; c++) r[c] = s(r[c]);
                                return r.join(",")
                            }
                            if (e = t.match(v) || [], c = e.length, u > c--)
                                for (; u > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                            return o + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    ct = function(t) {
                        return t = t.split(","),
                            function(e, i, n, s, r, a, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return s.parse(e, o, r, a)
                            }
                    },
                    ft = (W._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, r = this.data, a = r.proxy, o = r.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                        if (r.autoRotate && (r.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = r.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = s
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, n, s) {
                        this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
                    }),
                    pt = (W._parseToProxy = function(t, e, i, n, s, r) {
                        var a, o, l, h, u, d = n,
                            c = {},
                            f = {},
                            p = i._transform,
                            _ = j;
                        for (i._transform = null, j = e, n = u = i.parse(t, e, n, s), j = _, r && (i._transform = p, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                            if (1 >= n.type && (o = n.p, f[o] = n.s + n.c, c[o] = n.s, r || (h = new ft(n, "s", o, h, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l, f[o] = n.data[l], c[o] = n[l], r || (h = new ft(n, l, o, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: c,
                            end: f,
                            firstMPT: h,
                            pt: u
                        }
                    }, W.CSSPropTween = function(t, e, n, s, a, o, l, h, u, d, c) {
                        this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof pt || r.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === d ? n : d, this.e = void 0 === c ? n + s : c, a && (this._next = a, a._prev = this)
                    }),
                    _t = a.parseComplex = function(t, e, i, n, s, r, a, o, l, h) {
                        i = i || r || "", a = new pt(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, n), n += "";
                        var d, c, f, p, _, v, y, w, b, T, x, P, k = i.split(", ").join(",").split(" "),
                            M = n.split(", ").join(",").split(" "),
                            D = k.length,
                            O = u !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(A, ", ").split(" "), M = M.join(" ").replace(A, ", ").split(" "), D = k.length), D !== M.length && (k = (r || "").split(" "), D = k.length), a.plugin = l, a.setRatio = h, d = 0; D > d; d++)
                            if (p = k[d], _ = M[d], w = parseFloat(p), w || 0 === w) a.appendXtra("", w, st(_, w), _.replace(g, ""), O && -1 !== _.indexOf("px"), !0);
                            else if (s && ("#" === p.charAt(0) || ot[p] || S.test(p))) P = "," === _.charAt(_.length - 1) ? ")," : ")", p = ht(p), _ = ht(_), b = p.length + _.length > 6, b && !E && 0 === _[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(M[d]).join("transparent")) : (E || (b = !1), a.appendXtra(b ? "rgba(" : "rgb(", p[0], _[0] - p[0], ",", !0, !0).appendXtra("", p[1], _[1] - p[1], ",", !0).appendXtra("", p[2], _[2] - p[2], b ? "," : P, !0), b && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > _.length ? 1 : _[3]) - p, P, !1)));
                        else if (v = p.match(m)) {
                            if (y = _.match(g), !y || y.length !== v.length) return a;
                            for (f = 0, c = 0; v.length > c; c++) x = v[c], T = p.indexOf(x, f), a.appendXtra(p.substr(f, T - f), Number(x), st(y[c], x), "", O && "px" === p.substr(T + x.length, 2), 0 === c), f = T + x.length;
                            a["xs" + a.l] += p.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + p : p;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (P = a.xs0 + a.data.s, d = 1; a.l > d; d++) P += a["xs" + d] + a.data["xn" + d];
                            a.e = P + a["xs" + d]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    mt = 9;
                for (h = pt.prototype, h.l = h.pr = 0; --mt > 0;) h["xn" + mt] = 0, h["xs" + mt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, s, r) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += r && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new pt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (n || ""), a)
                };
                var gt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? V(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    vt = W._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, s, r = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], n = 0; r.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || a, s = new gt(r[n], e)
                    },
                    yt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            vt(t, {
                                parser: function(t, i, n, s, r, a, h) {
                                    var u = o.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), l[n].parse(t, i, n, s, r, a, h)) : (U("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                h = gt.prototype, h.parseComplex = function(t, e, i, n, s, r) {
                    var a, o, l, h, u, d, c = this.keyword;
                    if (this.multi && (A.test(i) || A.test(e) ? (o = e.replace(A, "|").split("|"), l = i.replace(A, "|").split("|")) : c && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (u = e.indexOf(c), d = i.indexOf(c), u !== d && (i = -1 === d ? l : o, i[a] += " " + c));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
                }, h.parse = function(t, e, i, n, r, a) {
                    return this.parseComplex(t.style, this.format(q(t, this.p, s, !1, this.dflt)), this.format(e), r, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    vt(t, {
                        parser: function(t, n, s, r, a, o) {
                            var l = new pt(t, s, 0, 0, a, 2, s, !1, i);
                            return l.plugin = o, l.setRatio = e(t, n, r._tween, s), l
                        },
                        priority: i
                    })
                };
                var wt, bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Tt = V("transform"),
                    xt = H + "transform",
                    St = V("transformOrigin"),
                    Pt = null !== V("perspective"),
                    kt = W.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Pt ? a.defaultForce3D || "auto" : !1
                    },
                    Mt = window.SVGElement,
                    Dt = function(t, e, i) {
                        var n, s = z.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(s), s
                    },
                    Ot = document.documentElement,
                    Ct = function() {
                        var t, e, i, n = _ || /Android/i.test(N) && !window.chrome;
                        return z.createElementNS && !n && (t = Dt("svg", Ot), e = Dt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Pt), Ot.removeChild(t)), n
                    }(),
                    Rt = function(t, e, i) {
                        var n = t.getBBox();
                        e = nt(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
                    },
                    At = W.getTransform = function(t, e, i, n) {
                        if (t._gsTransform && i && !n) return t._gsTransform;
                        var r, o, l, h, u, d, c, f, p, _, m = i ? t._gsTransform || new kt : new kt,
                            g = 0 > m.scaleX,
                            v = 2e-5,
                            y = 1e5,
                            w = Pt ? parseFloat(q(t, St, e, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            b = parseFloat(a.defaultTransformPerspective) || 0;
                        if (Tt ? o = q(t, xt, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(C), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), m.x || 0, m.y || 0].join(",") : ""), r = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, m.svg = !!(Mt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), m.svg && (Rt(t, q(t, St, s, !1, "50% 50%") + "", m), wt = a.useSVGTransformAttr || Ct, l = t.getAttribute("transform"), r && l && -1 !== l.indexOf("matrix") && (o = l, r = 0)), !r) {
                            for (l = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], h = l.length; --h > -1;) u = Number(l[h]), l[h] = (d = u - (u |= 0)) ? (0 | d * y + (0 > d ? -.5 : .5)) / y + u : u;
                            if (16 === l.length) {
                                var T, x, S, P, k, M = l[0],
                                    D = l[1],
                                    O = l[2],
                                    R = l[3],
                                    A = l[4],
                                    L = l[5],
                                    j = l[6],
                                    z = l[7],
                                    I = l[8],
                                    F = l[9],
                                    Q = l[10],
                                    W = l[12],
                                    N = l[13],
                                    E = l[14],
                                    G = l[11],
                                    U = Math.atan2(j, Q);
                                m.zOrigin && (E = -m.zOrigin, W = I * E - l[12], N = F * E - l[13], E = Q * E + m.zOrigin - l[14]), m.rotationX = U * Y, U && (P = Math.cos(-U), k = Math.sin(-U), T = A * P + I * k, x = L * P + F * k, S = j * P + Q * k, I = A * -k + I * P, F = L * -k + F * P, Q = j * -k + Q * P, G = z * -k + G * P, A = T, L = x, j = S), U = Math.atan2(I, Q), m.rotationY = U * Y, U && (P = Math.cos(-U), k = Math.sin(-U), T = M * P - I * k, x = D * P - F * k, S = O * P - Q * k, F = D * k + F * P, Q = O * k + Q * P, G = R * k + G * P, M = T, D = x, O = S), U = Math.atan2(D, M), m.rotation = U * Y, U && (P = Math.cos(-U), k = Math.sin(-U), M = M * P + A * k, x = D * P + L * k, L = D * -k + L * P, j = O * -k + j * P, D = x), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY += 180), m.scaleX = (0 | Math.sqrt(M * M + D * D) * y + .5) / y, m.scaleY = (0 | Math.sqrt(L * L + F * F) * y + .5) / y, m.scaleZ = (0 | Math.sqrt(j * j + Q * Q) * y + .5) / y, m.skewX = 0, m.perspective = G ? 1 / (0 > G ? -G : G) : 0, m.x = W, m.y = N, m.z = E
                            } else if (!(Pt && !n && l.length && m.x === l[4] && m.y === l[5] && (m.rotationX || m.rotationY) || void 0 !== m.x && "none" === q(t, "display", e))) {
                                var H = l.length >= 6,
                                    X = H ? l[0] : 1,
                                    V = l[1] || 0,
                                    $ = l[2] || 0,
                                    B = H ? l[3] : 1;
                                m.x = l[4] || 0, m.y = l[5] || 0, c = Math.sqrt(X * X + V * V), f = Math.sqrt(B * B + $ * $), p = X || V ? Math.atan2(V, X) * Y : m.rotation || 0, _ = $ || B ? Math.atan2($, B) * Y + p : m.skewX || 0, Math.abs(_) > 90 && 270 > Math.abs(_) && (g ? (c *= -1, _ += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (f *= -1, _ += 0 >= _ ? 180 : -180)), m.scaleX = c, m.scaleY = f, m.rotation = p, m.skewX = _, Pt && (m.rotationX = m.rotationY = m.z = 0, m.perspective = b, m.scaleZ = 1)
                            }
                            m.zOrigin = w;
                            for (h in m) v > m[h] && m[h] > -v && (m[h] = 0)
                        }
                        return i && (t._gsTransform = m), m
                    },
                    Lt = function(t) {
                        var e, i, n = this.data,
                            s = -n.rotation * L,
                            r = s + n.skewX * L,
                            a = 1e5,
                            o = (0 | Math.cos(s) * n.scaleX * a) / a,
                            l = (0 | Math.sin(s) * n.scaleX * a) / a,
                            h = (0 | Math.sin(r) * -n.scaleY * a) / a,
                            u = (0 | Math.cos(r) * n.scaleY * a) / a,
                            d = this.t.style,
                            c = this.t.currentStyle;
                        if (c) {
                            i = l, l = -h, h = -i, e = c.filter, d.filter = "";
                            var f, p, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                                T = n.x + m * n.xPercent / 100,
                                x = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (f = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, p = (n.oyp ? .01 * g * n.oy : n.oy) - g / 2, T += f - (f * o + p * l), x += p - (f * h + p * u)), v ? (f = m / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * l) + T) + ", Dy=" + (p - (f * h + p * u) + x) + ")") : y += ", sizingMethod='auto expand')", d.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(R, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && d.removeAttribute("filter")), !v) {
                                var S, P, k, M = 8 > _ ? 1 : -1;
                                for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + T), n.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + x), mt = 0; 4 > mt; mt++) P = et[mt], S = c[P], i = -1 !== S.indexOf("px") ? parseFloat(S) : B(this.t, P, parseFloat(S), S.replace(w, "")) || 0, k = i !== n[P] ? 2 > mt ? -n.ieOffsetX : -n.ieOffsetY : 2 > mt ? f - n.ieOffsetX : p - n.ieOffsetY, d[P] = (n[P] = Math.round(i - k * (0 === mt || 2 === mt ? 1 : M))) + "px"
                            }
                        }
                    },
                    Yt = W.set3DTransformRatio = function(t) {
                        var e, i, n, s, r, a, o, l, h, u, d, c, p, _, m, g, v, y, w, b, T, x = this.data,
                            S = this.t.style,
                            P = x.rotation * L,
                            k = x.scaleX,
                            M = x.scaleY,
                            D = x.scaleZ,
                            O = x.x,
                            C = x.y,
                            R = x.z,
                            A = x.perspective;
                        if (!(1 !== t && 0 !== t && x.force3D || x.force3D === !0 || x.rotationY || x.rotationX || 1 !== D || A || R)) return void jt.call(this, t);
                        if (f && (_ = 1e-4, _ > k && k > -_ && (k = D = 2e-5), _ > M && M > -_ && (M = D = 2e-5), !A || x.z || x.rotationX || x.rotationY || (A = 0)), P || x.skewX) m = e = Math.cos(P), g = s = Math.sin(P), x.skewX && (P -= x.skewX * L, m = Math.cos(P), g = Math.sin(P), "simple" === x.skewType && (v = Math.tan(x.skewX * L), v = Math.sqrt(1 + v * v), m *= v, g *= v)), i = -g, r = m;
                        else {
                            if (!(x.rotationY || x.rotationX || 1 !== D || A || x.svg)) return void(S[Tt] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + C + "px," + R + "px)" + (1 !== k || 1 !== M ? " scale(" + k + "," + M + ")" : ""));
                            e = r = 1, i = s = 0
                        }
                        h = 1, n = a = o = l = u = d = 0, c = A ? -1 / A : 0, p = x.zOrigin, _ = 1e-6, b = ",", T = "0", P = x.rotationY * L, P && (m = Math.cos(P), g = Math.sin(P), o = -g, u = c * -g, n = e * g, a = s * g, h = m, c *= m, e *= m, s *= m), P = x.rotationX * L, P && (m = Math.cos(P), g = Math.sin(P), v = i * m + n * g, y = r * m + a * g, l = h * g, d = c * g, n = i * -g + n * m, a = r * -g + a * m, h *= m, c *= m, i = v, r = y), 1 !== D && (n *= D, a *= D, h *= D, c *= D), 1 !== M && (i *= M, r *= M, l *= M, d *= M), 1 !== k && (e *= k, s *= k, o *= k, u *= k), (p || x.svg) && (p && (O += n * -p, C += a * -p, R += h * -p + p), x.svg && (O += x.xOrigin - (x.xOrigin * e + x.yOrigin * i), C += x.yOrigin - (x.xOrigin * s + x.yOrigin * r)), _ > O && O > -_ && (O = T), _ > C && C > -_ && (C = T), _ > R && R > -_ && (R = 0)), w = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", w += (_ > e && e > -_ ? T : e) + b + (_ > s && s > -_ ? T : s) + b + (_ > o && o > -_ ? T : o), w += b + (_ > u && u > -_ ? T : u) + b + (_ > i && i > -_ ? T : i) + b + (_ > r && r > -_ ? T : r), x.rotationX || x.rotationY ? (w += b + (_ > l && l > -_ ? T : l) + b + (_ > d && d > -_ ? T : d) + b + (_ > n && n > -_ ? T : n), w += b + (_ > a && a > -_ ? T : a) + b + (_ > h && h > -_ ? T : h) + b + (_ > c && c > -_ ? T : c) + b) : w += ",0,0,0,0,1,0,", w += O + b + C + b + R + b + (A ? 1 + -R / A : 1) + ")", S[Tt] = w
                    },
                    jt = W.set2DTransformRatio = function(t) {
                        var e, i, n, s, r, a, o, l, h, u, d, c = this.data,
                            f = this.t,
                            p = f.style,
                            _ = c.x,
                            m = c.y;
                        return !(c.rotationX || c.rotationY || c.z || c.force3D === !0 || "auto" === c.force3D && 1 !== t && 0 !== t) || c.svg && wt || !Pt ? (s = c.scaleX, r = c.scaleY, void(c.rotation || c.skewX || c.svg ? (e = c.rotation * L, i = e - c.skewX * L, n = 1e5, a = Math.cos(e) * s, o = Math.sin(e) * s, l = Math.sin(i) * -r, h = Math.cos(i) * r, c.svg && (_ += c.xOrigin - (c.xOrigin * a + c.yOrigin * l), m += c.yOrigin - (c.xOrigin * o + c.yOrigin * h), d = 1e-6, d > _ && _ > -d && (_ = 0), d > m && m > -d && (m = 0)), u = (0 | a * n) / n + "," + (0 | o * n) / n + "," + (0 | l * n) / n + "," + (0 | h * n) / n + "," + _ + "," + m + ")", c.svg && wt ? f.setAttribute("transform", "matrix(" + u) : p[Tt] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + u) : p[Tt] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + s + ",0,0," + r + "," + _ + "," + m + ")")) : (this.setRatio = Yt, void Yt.call(this, t))
                    };
                h = kt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = 0, h.scaleX = h.scaleY = h.scaleZ = 1, vt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, n, r, o, l) {
                        if (n._lastParsedTransform === l) return r;
                        n._lastParsedTransform = l;
                        var h, u, d, c, f, p, _, m = n._transform = At(t, s, !0, l.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = bt.length,
                            w = l,
                            b = {};
                        if ("string" == typeof w.transform && Tt) d = F.style, d[Tt] = w.transform, d.display = "block", d.position = "absolute", z.body.appendChild(F), h = At(F, null, !1), z.body.removeChild(F);
                        else if ("object" == typeof w) {
                            if (h = {
                                    scaleX: rt(null != w.scaleX ? w.scaleX : w.scale, m.scaleX),
                                    scaleY: rt(null != w.scaleY ? w.scaleY : w.scale, m.scaleY),
                                    scaleZ: rt(w.scaleZ, m.scaleZ),
                                    x: rt(w.x, m.x),
                                    y: rt(w.y, m.y),
                                    z: rt(w.z, m.z),
                                    xPercent: rt(w.xPercent, m.xPercent),
                                    yPercent: rt(w.yPercent, m.yPercent),
                                    perspective: rt(w.transformPerspective, m.perspective)
                                }, _ = w.directionalRotation, null != _)
                                if ("object" == typeof _)
                                    for (d in _) w[d] = _[d];
                                else w.rotation = _;
                            "string" == typeof w.x && -1 !== w.x.indexOf("%") && (h.x = 0, h.xPercent = rt(w.x, m.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (h.y = 0, h.yPercent = rt(w.y, m.yPercent)), h.rotation = at("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : m.rotation, m.rotation, "rotation", b), Pt && (h.rotationX = at("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", b), h.rotationY = at("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", b)), h.skewX = null == w.skewX ? m.skewX : at(w.skewX, m.skewX), h.skewY = null == w.skewY ? m.skewY : at(w.skewY, m.skewY), (u = h.skewY - m.skewY) && (h.skewX += u, h.rotation += u)
                        }
                        for (Pt && null != w.force3D && (m.force3D = w.force3D, p = !0), m.skewType = w.skewType || m.skewType || a.defaultSkewType, f = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, f || null == w.scale || (h.scaleZ = 1); --y > -1;) i = bt[y], c = h[i] - m[i], (c > v || -v > c || null != w[i] || null != j[i]) && (p = !0, r = new pt(m, i, m[i], c, r), i in b && (r.e = b[i]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                        return c = w.transformOrigin, c && m.svg && (Rt(t, nt(c), h), r = new pt(m, "xOrigin", m.xOrigin, h.xOrigin - m.xOrigin, r, -1, "transformOrigin"), r.b = m.xOrigin, r.e = r.xs0 = h.xOrigin, r = new pt(m, "yOrigin", m.yOrigin, h.yOrigin - m.yOrigin, r, -1, "transformOrigin"), r.b = m.yOrigin, r.e = r.xs0 = h.yOrigin, c = "0px 0px"), (c || Pt && f && m.zOrigin) && (Tt ? (p = !0, i = St, c = (c || q(t, i, s, !1, "50% 50%")) + "", r = new pt(g, i, 0, 0, r, -1, "transformOrigin"), r.b = g[i], r.plugin = o, Pt ? (d = m.zOrigin, c = c.split(" "), m.zOrigin = (c.length > 2 && (0 === d || "0px" !== c[2]) ? parseFloat(c[2]) : d) || 0, r.xs0 = r.e = c[0] + " " + (c[1] || "50%") + " 0px", r = new pt(m, "zOrigin", 0, 0, r, -1, r.n), r.b = d, r.xs0 = r.e = m.zOrigin) : r.xs0 = r.e = c) : nt(c + "", m)), p && (n._transformType = m.svg && wt || !f && 3 !== this._transformType ? 2 : 3), r
                    },
                    prefix: !0
                }), vt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), vt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, a) {
                        e = this.format(e);
                        var o, l, h, u, d, c, f, p, _, m, g, v, y, w, b, T, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = t.style;
                        for (_ = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; x.length > l; l++) this.p.indexOf("border") && (x[l] = V(x[l])), d = u = q(t, x[l], s, !1, "0px"), -1 !== d.indexOf(" ") && (u = d.split(" "), d = u[0], u = u[1]), c = h = o[l], f = parseFloat(d), v = d.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = n[i] || v), g !== v && (w = B(t, "borderLeft", f, v), b = B(t, "borderTop", f, v), "%" === g ? (d = 100 * (w / _) + "%", u = 100 * (b / m) + "%") : "em" === g ? (T = B(t, "borderLeft", 1, "em"), d = w / T + "em", u = b / T + "em") : (d = w + "px", u = b + "px"), y && (c = parseFloat(d) + p + g, h = parseFloat(u) + p + g)), a = _t(S, x[l], d + " " + u, c + " " + h, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: dt("0px 0px 0px 0px", !1, !0)
                }), vt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, r, a) {
                        var o, l, h, u, d, c, f = "background-position",
                            p = s || $(t, null),
                            m = this.format((p ? _ ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (c = q(t, "backgroundImage").replace(M, ""), c && "none" !== c)) {
                            for (o = m.split(" "), l = g.split(" "), Q.setAttribute("src", c), h = 2; --h > -1;) m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (d = 0 === h ? t.offsetWidth - Q.width : t.offsetHeight - Q.height, o[h] = u ? parseFloat(m) / 100 * d + "px" : 100 * (parseFloat(m) / d) + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, r, a)
                    },
                    formatter: nt
                }), vt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), vt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), vt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), vt("transformStyle", {
                    prefix: !0
                }), vt("backfaceVisibility", {
                    prefix: !0
                }), vt("userSelect", {
                    prefix: !0
                }), vt("margin", {
                    parser: ct("marginTop,marginRight,marginBottom,marginLeft")
                }), vt("padding", {
                    parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), vt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, r, a) {
                        var o, l, h;
                        return 9 > _ ? (l = t.currentStyle, h = 8 > _ ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(q(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, a)
                    }
                }), vt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), vt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, s) {
                        return s
                    }
                }), vt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, r, a) {
                        return this.parseComplex(t.style, this.format(q(t, "borderTopWidth", s, !1, "0px") + " " + q(t, "borderTopStyle", s, !1, "solid") + " " + q(t, "borderTopColor", s, !1, "#000")), this.format(e), r, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                    }
                }), vt("borderWidth", {
                    parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), vt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, s) {
                        var r = t.style,
                            a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new pt(r, a, 0, 0, s, -1, i, !1, 0, r[a], e)
                    }
                });
                var zt = function(t) {
                    var e, i = this.t,
                        n = i.filter || q(this.data, "filter") || "",
                        s = 0 | this.s + this.c * t;
                    100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !q(this.data, "filter")) : (i.filter = n.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(b, "opacity=" + s))
                };
                vt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, r, a) {
                        var o = parseFloat(q(t, "opacity", s, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === q(t, "visibility", s) && 0 !== e && (o = 0), E ? r = new pt(l, "opacity", o, e - o, r) : (r = new pt(l, "opacity", 100 * o, 100 * (e - o), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = zt), h && (r = new pt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                    }
                });
                var It = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ft = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : It(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                vt("className", {
                    parser: function(t, e, n, r, a, o, l) {
                        var h, u, d, c, f, p = t.getAttribute("class") || "",
                            _ = t.style.cssText;
                        if (a = r._classNamePT = new pt(t, n, 0, 0, a, 2), a.setRatio = Ft, a.pr = -11, i = !0, a.b = p, u = J(t, s), d = t._gsClassPT) {
                            for (c = {}, f = d.data; f;) c[f.p] = 1, f = f._next;
                            d.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), r._tween._duration && (t.setAttribute("class", a.e), h = K(t, u, J(t), l, c), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = _, a = a.xfirst = r.parse(t, h.difs, a, o)), a
                    }
                });
                var Qt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, s, r = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) r.cssText = "", s = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n],
                                l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? St : l[i].p), It(r, i);
                        s && (It(r, Tt), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (vt("clearProps", {
                        parser: function(t, e, n, s, r) {
                            return r = new pt(t, n, 0, 0, r, 2), r.setRatio = Qt, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), mt = h.length; mt--;) yt(h[mt]);
                h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, s = $(t, ""), r = this._overwriteProps;
                    var l, h, f, _, m, g, v, y, w, b = t.style;
                    if (d && "" === b.zIndex && (l = q(t, "zIndex", s), ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (_ = b.cssText, l = J(t, s), b.cssText = _ + ";" + e, l = K(t, l, J(t)).difs, !E && T.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = _), this._firstPT = h = this.parse(t, e, null), this._transformType) {
                        for (w = 3 === this._transformType, Tt ? c && (d = !0, "" === b.zIndex && (v = q(t, "zIndex", s), ("auto" === v || "" === v) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : b.zoom = 1, f = h; f && f._next;) f = f._next;
                        y = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, f), y.setRatio = w && Pt ? Yt : Tt ? jt : Lt, y.data = this._transform || At(t, s, !0), r.pop()
                    }
                    if (i) {
                        for (; h;) {
                            for (g = h._next, f = _; f && f.pr > h.pr;) f = f._next;
                            (h._prev = f ? f._prev : m) ? h._prev._next = h: _ = h, (h._next = f) ? f._prev = h : m = h, h = g
                        }
                        this._firstPT = _
                    }
                    return !0
                }, h.parse = function(t, e, i, r) {
                    var a, o, h, d, c, f, p, _, m, g, v = t.style;
                    for (a in e) f = e[a], o = l[a], o ? i = o.parse(t, f, a, this, i, r, e) : (c = q(t, a, s) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && S.test(f) ? (m || (f = ht(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = _t(v, a, c, f, !0, "transparent", i, 0, r)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = it(t, a, s), p = "px") : "left" === a || "top" === a ? (h = Z(t, a, s), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = m && "=" === f.charAt(1), g ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), _ = f.replace(w, "")) : (d = parseFloat(f), _ = m ? f.replace(w, "") : ""), "" === _ && (_ = a in n ? n[a] : p), f = d || 0 === d ? (g ? d + h : d) + _ : e[a], p !== _ && "" !== _ && (d || 0 === d) && h && (h = B(t, a, h, p), "%" === _ ? (h /= B(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === _ ? h /= B(t, a, 1, "em") : "px" !== _ && (d = B(t, a, d, _), _ = "px"), g && (d || 0 === d) && (f = d + h + _)), g && (d += h), !h && 0 !== h || !d && 0 !== d ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pt(v, a, d || h || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : U("invalid " + a + " tween value: " + e[a]) : (i = new pt(v, a, h, d - h, i, 0, a, u !== !1 && ("px" === _ || "zIndex" === a), 0, c, f), i.xs0 = _)) : i = _t(v, a, c, f, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, n, s = this._firstPT,
                        r = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = Math.round(e) : r > e && e > -r && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (n = s.l, 2 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; s.l > n; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) 2 !== s.type ? s.t[s.p] = s.e : s.setRatio(t), s = s._next
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || At(this._target, s, !0), this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Wt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new pt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Wt, n.data = this
                }, h._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, n, s, r = e;
                    if (e.autoAlpha || e.alpha) {
                        r = {};
                        for (n in e) r[n] = e[n];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
                };
                var Nt = function(t, e, i) {
                    var n, s, r, a;
                    if (t.slice)
                        for (s = t.length; --s > -1;) Nt(t[s], e, i);
                    else
                        for (n = t.childNodes, s = n.length; --s > -1;) r = n[s], a = r.type, r.style && (e.push(J(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || Nt(r, e, i)
                };
                return a.cascadeTo = function(t, i, n) {
                    var s, r, a, o = e.to(t, i, n),
                        l = [o],
                        h = [],
                        u = [],
                        d = [],
                        c = e._internals.reservedProps;
                    for (t = o._targets || o.target, Nt(t, h, d), o.render(i, !0), Nt(t, u), o.render(0, !0), o._enabled(!0), s = d.length; --s > -1;)
                        if (r = K(d[s], h[s], u[s]), r.firstMPT) {
                            r = r.difs;
                            for (a in n) c[a] && (r[a] = n[a]);
                            l.push(e.to(d[s], i, r))
                        } return l
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, n = this._tween, s = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), r = s.length, a = {}, o = n._propLookup.roundProps; --r > -1;) a[s[r]] = 1;
                    for (r = s.length; --r > -1;)
                        for (t = s[r], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(t, e) {
                    var i, n, s;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = n = t.getAttribute(i), s = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = s ? s.s + s.c : e[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, n = i.length, s = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1;) e = i[n], this._target.setAttribute(e, s[e] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, n, s, r, a, o, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), n = o[0], s = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), r = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? s + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, a = r - s, o.length && (n = o.join("_"), -1 !== n.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== n.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== n.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > h || -h > a) && (this._addTween(t, i, s, s + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope,
                    r = s.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    l = r._class,
                    h = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, n
                    },
                    u = t.register || function() {},
                    d = function(t, e, i, n) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return u(s, t), s
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, s.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    p = d("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    _ = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = _.prototype = new t;
                return m.constructor = _, m.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, _.ease = new _(.7, .7), m.config = _.config = function(t, e, i) {
                    return new _(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, m.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, s, r, a, o, l = e.taper || "none", h = [], u = 0, d = 0 | (e.points || 20), f = d, p = e.randomize !== !1, _ = e.clamp === !0, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / d * f, n = m ? m.getRatio(i) : i, "none" === l ? s = g : "out" === l ? (r = 1 - i, s = r * r * g) : "in" === l ? s = i * i * g : .5 > i ? (r = 2 * i, s = .5 * r * r * g) : (r = 2 * (1 - i), s = .5 * r * r * g), p ? n += Math.random() * s - .5 * s : f % 2 ? n += .5 * s : n -= .5 * s, _ && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[u++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new c(1, 1, null), f = d; --f > -1;) a = h[f], o = new c(a.x, a.y, o);
                    this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
                }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, m.config = function(t) {
                    return new i(t)
                }, i.ease = new i, d("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), d("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var s = l("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, r.config = function(t, e) {
                        return new s(t, e)
                    }, s
                }, d("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .45)), d("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), d("Sine", h("SineOut", function(t) {
                    return Math.sin(t * o)
                }), h("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, s, r, a, o, l = function(t) {
                    var e, n = t.split("."),
                        s = i;
                    for (e = 0; n.length > e; e++) s[n[e]] = s = s[n[e]] || {};
                    return s
                },
                h = l("com.greensock"),
                u = 1e-10,
                d = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                c = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                _ = function(n, s, r, a) {
                    this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = r;
                    var o = [];
                    this.check = function(h) {
                        for (var u, d, c, f, m = s.length, g = m; --m > -1;)(u = p[s[m]] || new _(s[m], [])).gsClass ? (o[m] = u.gsClass, g--) : h && u.sc.push(this);
                        if (0 === g && r)
                            for (d = ("com.greensock." + n).split("."), c = d.pop(), f = l(d.join("."))[c] = this.gsClass = r.apply(r, o), a && (i[c] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return f
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = f)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function(t, e, i, n) {
                    return new _(t, e, i, n)
                },
                g = h._class = function(t, e, i) {
                    return e = e || function() {}, m(t, [], function() {
                        return e
                    }, i), e
                };
            m.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                w = g("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
                }, !0),
                b = w.map = {},
                T = w.register = function(t, e, i, n) {
                    for (var s, r, a, o, l = e.split(","), u = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (r = l[u], s = n ? g("easing." + r, null, !0) : h.easing[r] || {}, a = d.length; --a > -1;) o = d[a], b[r + "." + o] = b[o + r] = s[o] = t.getRatio ? t : t[o] || new t
                };
            for (r = w.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = n.length; --s > -1;) r = n[s] + ",Power" + s, T(new w(null, null, 1, s), r, "easeOut", !0), T(new w(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), T(new w(null, null, 3, s), r, "easeInOut");
            b.linear = h.easing.Linear.easeIn, b.swing = h.easing.Quad.easeInOut;
            var x = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = x.prototype, r.addEventListener = function(t, e, i, n, s) {
                s = s || 0;
                var r, l, h = this._listeners[t],
                    u = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === u && s > r.pr && (u = l + 1);
                h.splice(u, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                }), this !== a || o || a.wake()
            }, r.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, r.dispatchEvent = function(t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for (e = s.length, i = this._eventTarget; --e > -1;) n = s[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var S = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                M = k();
            for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !S;) S = t[n[s] + "RequestAnimationFrame"], P = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, n, s, r, l, h = this,
                    d = k(),
                    f = e !== !1 && S,
                    p = 500,
                    _ = 33,
                    m = "tick",
                    g = function(t) {
                        var e, a, o = k() - M;
                        o > p && (d += o - _), M += o, h.time = (M - d) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (s = n(g)), a && h.dispatchEvent(m)
                    };
                x.call(h), h.time = h.frame = 0, h.tick = function() {
                    g(!0)
                }, h.lagSmoothing = function(t, e) {
                    p = t || 1 / u, _ = Math.min(e, p, 0)
                }, h.sleep = function() {
                    null != s && (f && P ? P(s) : clearTimeout(s), n = c, s = null, h === a && (o = !1))
                }, h.wake = function() {
                    null !== s ? h.sleep() : h.frame > 10 && (M = k() - p + 5), n = 0 === i ? c : f && S ? S : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (o = !0), g(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, void h.wake()) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
                }, h.fps(t), setTimeout(function() {
                    f && (!s || 5 > h.frame) && h.useRAF(!1)
                }, 1500)
            }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
            var D = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, G) {
                    o || a.wake();
                    var i = this.vars.useFrames ? E : G;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = D.ticker = new h.Ticker, r = D.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var O = function() {
                o && k() - M > 2e3 && a.wake(), setTimeout(O, 2e3)
            };
            O(), r.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, r._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(t, e) {
                return this._kill(t, e), this
            }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), Y.length && U())
                }
                return this
            }, r.progress = r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    o || t || a.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var C = g("core.SimpleTimeline", function(t) {
                D.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = C.prototype = new D, r.constructor = C, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function(t, e, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, r.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var R = g("TweenLite", function(e, i, n) {
                    if (D.call(this, i, n), this.render = R.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : R.selector(e) || e;
                    var s, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? N[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : N[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = d(e), this._propLookup = [], this._siblings = [], s = 0; a.length > s; s++) r = a[s], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(d(r))) : (this._siblings[s] = H(r, this, !1), 1 === l && this._siblings[s].length > 1 && V(r, this, null, 1, this._siblings[s])) : (r = a[s--] = R.selector(r), "string" == typeof r && a.splice(s + 1, 1)) : a.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = H(e, this, !1), 1 === l && this._siblings.length > 1 && V(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
                }, !0),
                A = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                L = function(t, e) {
                    var i, n = {};
                    for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            r = R.prototype = new D, r.constructor = R, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, R.version = "1.15.1", R.defaultEase = r._ease = new w(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = a, R.autoSleep = !0, R.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, R.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (R.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var Y = [],
                j = {},
                z = R._internals = {
                    isArray: f,
                    isSelector: A,
                    lazyTweens: Y
                },
                I = R._plugins = {},
                F = z.tweenLookup = {},
                Q = 0,
                W = z.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                N = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                E = D._rootFramesTimeline = new C,
                G = D._rootTimeline = new C,
                U = z.lazyRender = function() {
                    var t, e = Y.length;
                    for (j = {}; --e > -1;) t = Y[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    Y.length = 0
                };
            G._startTime = a.time, E._startTime = a.frame, G._active = E._active = !0, setTimeout(U, 1), D._updateRoot = R.render = function() {
                var t, e, i;
                if (Y.length && U(), G.render((a.time - G._startTime) * G._timeScale, !1, !1), E.render((a.frame - E._startTime) * E._timeScale, !1, !1), Y.length && U(), !(a.frame % 120)) {
                    for (i in F) {
                        for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete F[i]
                    }
                    if (i = G._first, (!i || i._paused) && R.autoSleep && !E._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", D._updateRoot);
            var H = function(t, e, i) {
                    var n, s, r = t._gsTweenID;
                    if (F[r || (t._gsTweenID = r = "t" + Q++)] || (F[r] = {
                            target: t,
                            tweens: []
                        }), e && (n = F[r].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return F[r].tweens
                },
                X = function(t, e, i, n) {
                    var s, r, a = t.vars.onOverwrite;
                    return a && (s = a(t, e, i, n)), a = R.onOverwrite, a && (r = a(t, e, i, n)), s !== !1 && r !== !1
                },
                V = function(t, e, i, n, s) {
                    var r, a, o, l;
                    if (1 === n || n >= 4) {
                        for (l = s.length, r = 0; l > r; r++)
                            if ((o = s[r]) !== e) o._gc || X(o, e) && o._enabled(!1, !1) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var h, d = e._startTime + u,
                        c = [],
                        f = 0,
                        p = 0 === e._duration;
                    for (r = s.length; --r > -1;)(o = s[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || $(e, 0, p), 0 === $(o, h, p) && (c[f++] = o)) : d >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > d && ((p || !o._initted) && 2e-10 >= d - o._startTime || (c[f++] = o)));
                    for (r = f; --r > -1;)
                        if (o = c[r], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                            if (2 !== n && !X(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        } return a
                },
                $ = function(t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                        if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return r /= s, r > e ? r - e : i && r === e || !t._initted && 2 * u > r - e ? u : (r += t.totalDuration() / t._timeScale / s) > e + u ? 0 : r - e - u
                };
            r._init = function() {
                var t, e, i, n, s, r = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!r.immediateRender,
                    h = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                    for (n in r.startAt) s[n] = r.startAt[n];
                    if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && r.lazy !== !1, s.startAt = s.delay = null, this._startAt = R.to(this.target, 0, s), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (r.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in r) W[n] && "autoCSS" !== n || (i[n] = r[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = R.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = h = h ? h instanceof w ? h : "function" == typeof h ? new w(h, r.easeParams) : b[h] || R.defaultEase : R.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && R._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(e, i, n, s) {
                var r, a, o, l, h, u;
                if (null == e) return !1;
                j[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && L(this.vars, e);
                for (r in this.vars) {
                    if (u = this.vars[r], W[r]) u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this));
                    else if (I[r] && (l = new I[r])._onInitTween(e, this.vars[r], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: r,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[r] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: r,
                        f: "function" == typeof e[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && V(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (j[e._gsTweenID] = !0), o)
            }, r.render = function(t, e, i) {
                var n, s, r, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : u);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== u) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : u)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var d = t / l,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && d >= .5) && (d = 1 - d), 3 === c && (d *= 2), 1 === f ? d *= d : 2 === f ? d *= d * d : 3 === f ? d *= d * d * d : 4 === f && (d *= d * d * d * d), this.ratio = 1 === c ? 1 - d : 2 === c ? d : .5 > t / l ? d / 2 : 1 - d / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, Y.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i),
                        e || (this._time !== o || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || y), 0 === l && this._rawPrevTime === u && a !== u && (this._rawPrevTime = 0))
                }
            }, r._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
                var n, s, r, a, o, l, h, u, d;
                if ((f(e) || A(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n]) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, u = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (R.onOverwrite || this.vars.onOverwrite)) {
                            for (r in h) o[r] && (d || (d = []), d.push(r));
                            if (!X(this, i, e, d)) return !1
                        }
                        for (r in h)(a = o[r]) && (a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), u && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
            }, r._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = H(n[i], this, !0);
                    else this._siblings = H(this.target, this, !0)
                }
                return D.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? R._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, R.to = function(t, e, i) {
                return new R(t, e, i)
            }, R.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
            }, R.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new R(t, e, n)
            }, R.delayedCall = function(t, e, i, n, s) {
                return new R(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, R.set = function(t, e) {
                return new R(t, 0, e)
            }, R.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : R.selector(t) || t;
                var i, n, s, r;
                if ((f(t) || A(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(R.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
                } else
                    for (n = H(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, R.killTweensOf = R.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = R.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var q = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = q.prototype
            }, !0);
            if (r = q.prototype, q.version = "1.10.1", q.API = 2, r._firstPT = null, r._addTween = function(t, e, i, n, s, r) {
                    var a, o;
                    return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: s || e,
                        r: r
                    }, o._next && (o._next._prev = o), o) : void 0
                }, r.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, R._onPluginEvent = function(t, e) {
                    var i, n, s, r, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, n = s; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : r) ? o._prev._next = o: s = o, (o._next = n) ? n._prev = o : r = o, o = a
                        }
                        o = e._firstPT = s
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, q.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === q.API && (I[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            q.call(this, i, n), this._overwriteProps = s || []
                        }, t.global === !0),
                        o = a.prototype = new q(i);
                    o.constructor = a, a.API = t.API;
                    for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return a.version = t.version, q.activate([a]), a
                }, n = t._gsQueue) {
                for (s = 0; n.length > s; s++) n[s]();
                for (r in p) p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t) {
        t(document).ready(function() {
            function e() {
                TweenMax.to(r, .1, {
                    scaleX: 1.2,
                    scaleY: .6,
                    ease: Quad.easeOut,
                    onComplete: function() {
                        TweenMax.to(r, .8, {
                            scale: .6,
                            ease: Elastic.easeOut,
                            easeParams: [1.1, .6]
                        }), TweenMax.to(r.children(".share-icon"), .8, {
                            scale: 1.4,
                            ease: Elastic.easeOut,
                            easeParams: [1.1, .6]
                        })
                    }
                }), s.each(function(e) {
                    var i = t(this),
                        n = e - l;
                    n >= 0 && (n += 1);
                    var s = Math.abs(n);
                    i.css({
                        zIndex: l - s
                    }), TweenMax.to(i, 1.1 * s, {
                        x: n * h,
                        scaleY: .6,
                        scaleX: 1.1,
                        ease: Elastic.easeOut,
                        easeParams: [1.01, .5]
                    }), TweenMax.to(i, .8, {
                        delay: .2 * s - .1,
                        scale: .6,
                        ease: Elastic.easeOut,
                        easeParams: [1.1, .6]
                    }), TweenMax.fromTo(i.children(".share-icon"), .2, {
                        scale: 0
                    }, {
                        delay: .2 * s - .1,
                        scale: 1,
                        ease: Quad.easeInOut
                    })
                })
            }

            function i() {
                TweenMax.to([r, r.children(".share-icon")], 1.4, {
                    delay: .1,
                    scale: 1,
                    ease: Elastic.easeOut,
                    easeParams: [1.1, .3]
                }), s.each(function(e) {
                    var i = t(this),
                        n = e - l;
                    n >= 0 && (n += 1);
                    var s = Math.abs(n);
                    i.css({
                        zIndex: s
                    }), TweenMax.to(i, .4 + .1 * (l - s), {
                        x: 0,
                        scale: .95,
                        ease: Quad.easeInOut
                    }), TweenMax.to(i.children(".share-icon"), .2, {
                        scale: 0,
                        ease: Quad.easeIn
                    })
                })
            }

            function n() {
                a = !a, a ? e() : i()
            }
            var s = t(".share-button"),
                r = t(".share-toggle-button"),
                a = !1,
                o = s.length,
                l = o / 2,
                h = 75;
            r.on("mousedown", function() {
                n()
            })
        })
    }(jQuery);
var PlayerLeaderboard = function() {
    function t() {
        jQuery(".player-leaderboards").length > 0 && (i = jQuery("#tbPlayerLeaderboardScore"), jQuery("#tbPlayerLeaderboardsSelect").on("change", e))
    }

    function e() {
        var t = jQuery("#tbPlayerLeaderboardsSelect").val();
        i.addClass("tbHidden");
        var e = jQuery("#" + t);
        e.length > 0 && (i = e, i.removeClass("tbHidden"))
    }
    var i = null;
    return {
        setup: function() {
            t()
        }
    }
}();
jQuery(document).ready(function() {
    PlayerLeaderboard.setup()
});
var GroupStandings = function() {
    function t() {
        jQuery(".group-standings").length > 0 && (i = jQuery(jQuery(".tbGroupStandingsPageMultiple").not("tbHidden")), jQuery("#tbGroupStandingSelect").on("change", e))
    }

    function e() {
        var t = jQuery("#tbGroupStandingSelect").val();
        i.addClass("tbHidden");
        var e = jQuery("#" + t);
        e.length > 0 && (i = e, i.removeClass("tbHidden")), jQuery(".equal-row").each(function() {
            jQuery(this).find(".equal").height("auto"), jQuery(this).find(".equal").equalHeights()
        })
    }
    var i = null;
    return {
        setup: function() {
            t()
        }
    }
}();
jQuery(document).ready(function() {
    GroupStandings.setup()
});
var GroupStandingsList = function() {
    function t() {
        jQuery(".group-standings").length > 0 && jQuery("#tbGroupStandingSelect").on("change", e)
    }

    function e() {
        var t = jQuery("#tbGroupStandingSelect").val();
        "tb_all_tournament_groups" === t ? jQuery(".tbGroupStandingsPageMultipleList").each(function() {
            jQuery(this).removeClass("tbHidden")
        }) : jQuery(".tbGroupStandingsPageMultipleList").each(function() {
            var e = jQuery(this).attr("id");
            e === t ? jQuery(this).removeClass("tbHidden") : jQuery(this).addClass("tbHidden")
        })
    }
    return {
        setup: function() {
            t()
        }
    }
}();
jQuery(document).ready(function(t) {
    GroupStandingsList.setup(), t(".tabToggle").on("click", function() {
        var e = t(this).attr("data-type"),
            i = t(".toggleBox");
        t(".tabToggle").removeClass("active"), t(this).addClass("active"), i.hide(), i.filter('[data-type="' + e + '"]').show()
    })
});
var PlayerPositionTypes = function() {
        return {
            All: "all_positions",
            Center: "center",
            Winger: "winger",
            Defence: "defence",
            Goalkeeper: "goalkeeper"
        }
    }(),
    Leaderboards = function() {
        return {
            Score: "score",
            Goal: "goal",
            Assist: "assist",
            Penalty: "penalty",
            SavesPercentage: "svsprc"
        }
    }(),
    PlayerLeaderboardAdv = function() {
        function t() {
            jQuery("#tbPLAdvLeaderboard").length > 0 && (jQuery("#tbPLAdvTeamSelect").length > 0 && (s = !0), jQuery("#tbPLAdvPositionSelect").on("change", e), jQuery("#tbPLAdvTeamSelect").on("change", n), jQuery("#tbPLAdvLeaderboardSelect").on("change", n))
        }

        function e() {
            var t = jQuery("#tbPLAdvPositionSelect").val();
            switch (t) {
                case PlayerPositionTypes.All:
                    i(Leaderboards.Score, !0), i(Leaderboards.Goal, !0), i(Leaderboards.Assist, !0), i(Leaderboards.Penalty, !0), i(Leaderboards.SavesPercentage, !0);
                    break;
                case PlayerPositionTypes.Center:
                case PlayerPositionTypes.Winger:
                case PlayerPositionTypes.Defence:
                    i(Leaderboards.Score, !0), i(Leaderboards.Goal, !0), i(Leaderboards.Assist, !0), i(Leaderboards.Penalty, !0), i(Leaderboards.SavesPercentage, !1);
                    break;
                case PlayerPositionTypes.Goalkeeper:
                    i(Leaderboards.Score, !1), i(Leaderboards.Goal, !1), i(Leaderboards.Assist, !1), i(Leaderboards.Penalty, !0), i(Leaderboards.SavesPercentage, !0)
            }
            if (null == jQuery("#tbPLAdvLeaderboardSelect").val())
                for (var e = jQuery("#tbPLAdvLeaderboardSelect > option"), s = 0; s < e.length; s++) {
                    var r = jQuery(e[s]);
                    if (0 == r.prop("disabled")) {
                        r.prop("selected", !0);
                        break
                    }
                }
            n()
        }

        function i(t, e) {
            var t = jQuery("#tbPLAdvLeaderboardSelect option[value='" + t + "']");
            e === !0 ? t.removeAttr("disabled") : t.attr("disabled", "disabled")
        }

        function n() {
            var t = {
                action: jQuery("#tbPLAdvLeaderboard").attr("data-action"),
                positionType: jQuery("#tbPLAdvPositionSelect").val(),
                leaderboardType: jQuery("#tbPLAdvLeaderboardSelect").val()
            };
            1 == s ? t.teamId = jQuery("#tbPLAdvTeamSelect").val() : t.teamId = jQuery("#tbPLAdvLeaderboard").attr("data-default-team-id"), jQuery.ajax({
                type: "GET",
                url: jQuery("#tbPLAdvLeaderboard").attr("data-url"),
                data: t,
                dataType: "json",
                beforeSend: function() {
                    var t = '<div class="loaderOverlay"><div class="spinner"><div class="cube1"></div><div class="cube2"></div></div></div>';
                    jQuery("#tbPLAdvContent").prepend(t), jQuery(".loaderOverlay").fadeIn()
                },
                success: function(t) {
                    jQuery("#tbPLAdvContent").empty(), jQuery("#tbPLAdvContent").append(t.output)
                },
                error: function() {
                    jQuery("#tbPLAdvContent").empty(), jQuery("#tbPLAdvContent").append("<div class='no-data'><div class='message bounceIn'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i>Misslyckades hämta data.</div></div>")
                }
            })
        }
        var s = !1;
        return {
            setup: function() {
                t()
            }
        }
    }();
jQuery(document).ready(function() {
    PlayerLeaderboardAdv.setup()
});
jQuery(document).ready(function(t) {
    t(".source").find("a").attr("target", "_blank")
});
! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("tweetlight", e) : "object" == typeof exports ? module.exports = e() : t.Tweetlight = e()
}(this, function() {
    "use strict";
    Function.prototype.hasOwnProperty("bind") || (Function.prototype.bind = function() {
        var t = this,
            e = arguments[0],
            i = Array.prototype.slice.call(arguments, 1);
        return function() {
            return t.apply(e, i.concat(Array.prototype.slice.call(arguments)))
        }
    });
    var t = function(e) {
        return this && this instanceof t ? e ? (this.endpoint = e.endpoint, this.action = e.action, this.username = e.username, this.hashtag = e.hashtag, this.nonce = e.nonce, this.container = e.container, this.counter = e.counter, this.showImageProfile = e.showImageProfile || !1, this.onComplete = e.onComplete || void 0, this.refreshRate = 12e4, void this.fetch()) : void console.log("%c Don't initialize the plugin without setting a username or without setting an html element to attach tweets", "background: red; color: white") : new t(e)
    };
    return t.prototype = {
        inject: function(t, e) {
            jQuery(t).prepend(e)
        },
        fetch: function() {
            var t = this.action ? "action=" + encodeURIComponent(this.action) : "",
                e = this.hashtag ? "&hashtag=" + encodeURIComponent(this.hashtag) : "username=" + this.username,
                i = this.counter ? "&count=" + this.counter : "",
                n = this.nonce ? "&nonce=" + this.nonce : "",
                s = this.endpoint + "?" + t + e + i + n;
            this.getJSON(s, this.loadTweets.bind(this), this.failure.bind(this))
        },
        getJSON: function(t, e, i) {
            var n = new XMLHttpRequest;
            n.open("GET", t, !0), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.setRequestHeader("Content-type", "application/json"), n.onreadystatechange = function() {
                if (4 === this.readyState)
                    if (this.status >= 200 && this.status < 300 || 304 === this.status) {
                        var t = JSON.parse(this.responseText);
                        e.call(this, t)
                    } else i.call(this, this.status + " - " + this.statusText)
            }, n.send(), n = null, this.refresh()
        },
        refresh: function() {
            var t = this;
            setTimeout(function() {
                t.fetch()
            }, this.refreshRate)
        },
        loadTweets: function(t) {
            var e = t.httpstatus;
            200 === e ? (t.statuses && (t = t.statuses), this.displayTweets(t), "function" == typeof this.onComplete && this.onComplete.call()) : this.displayError(t)
        },
        displayTweets: function(t) {
            var e, i, n, s = document.querySelector(this.container);
            for (n in t) t.hasOwnProperty(n) && t[n].text && 0 === jQuery("#tweet-" + t[n].id_str).length && (i = this.showImageProfile ? '<img class="image-profile" src="' + t[n].user.profile_image_url_https + '" alt="' + t[n].user.name + '">' : "", e = '<li id="tweet-' + t[n].id_str + '">' + i + '<div><span class="user">' + t[n].user.name + '</span><span class="tweet">' + this.twitterLinks(t[n].text) + '</span><span class="created">' + this.prettyDate(t[n].created_at) + "</span></div></li>", this.inject(s, e), jQuery(this.container).children("li").length > this.counter && jQuery(this.container).children("li").last().remove())
        },
        displayError: function(t) {
            var e = document.querySelector(this.container);
            this.inject(e, '<li class="error">' + t.errors[0].message + "</li>")
        },
        failure: function(t) {
            console.log(t)
        },
        prettyDate: function(t) {
            var e, i, n, s, r, a, o = new Date,
                l = new Date(t);
            return (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0) && (l = Date.parse(t.replace(/( \+)/, " UTC$1"))), e = o - l, i = 1e3, n = 60 * i, s = 60 * n, r = 24 * s, a = 7 * r, isNaN(e) || 0 > e ? "" : 2 * i > e ? "just now" : n > e ? Math.floor(e / i) + " seconds ago" : 2 * n > e ? "1 minute ago" : s > e ? Math.floor(e / n) + " minutes ago" : 2 * s > e ? "1 hour ago" : r > e ? Math.floor(e / s) + " hours ago" : e > r && 2 * r > e ? "yesterday" : 365 * r > e ? Math.floor(e / r) + " days ago" : "over a year ago"
        },
        twitterLinks: function(t) {
            return t = t.replace(/(https?:\/\/)([\w\-:;?&=+.%#\/]+)/gi, '<a href="$1$2">$2</a>').replace(/(^|\W)@(\w+)/g, '$1<a href="https://twitter.com/$2">@$2</a>').replace(/(^|\W)#(\w+)/g, '$1<a href="https://twitter.com/search?q=%23$2">#$2</a>')
        }
    }, t
});
jQuery(document).ready(function() {
    if (jQuery("#twitter-timeline").length > 0) {
        var t = jQuery("#twitter-timeline"),
            e = t.attr("data-hashtag"),
            i = t.attr("data-url"),
            n = t.attr("data-action"),
            s = (t.attr("data-action"), t.attr("data-nonce"));
        Tweetlight({
            hashtag: e,
            endpoint: i,
            action: n,
            nonce: s,
            container: "#twitter-timeline",
            showImageProfile: !0,
            counter: 5,
            onComplete: function() {}
        })
    }
});
var InstagramFeed = function() {
    function t() {
        var t = jQuery("#instagram-tag-timeline");
        t.length > 0 && (v = t, f = t.attr("data-tag"), p = t.attr("data-action"), _ = t.attr("data-url"), m = t.attr("data-nonce"), g = t.attr("data-count"), g = Math.max(0, g), v.append('<ul id="lightGallery"></ul>'), y = jQuery(v.children("#lightGallery")[0]), v.append('<div id="instagram-videos" style="display:none;"></div>'), w = jQuery(v.children("#instagram-videos")[0]), v.append('<div id="instagram-captions" style="display:none;"></div>'), b = jQuery(v.children("#instagram-captions")[0]), n(), e())
    }

    function e() {
        y.on("onBeforeOpen.lg", function() {
            S = !0
        }), y.on("onCloseAfter.lg", function() {
            S = !1
        })
    }

    function i() {
        setTimeout(function() {
            S ? i() : n()
        }, T)
    }

    function n() {
        var t = {
            action: p,
            nonce: m,
            tag: f
        };
        jQuery.ajax({
            type: "GET",
            url: _,
            data: t,
            dataType: "json",
            success: function(t) {
                "success" === t.status && s(t.media), i()
            },
            error: function() {
                i()
            }
        })
    }

    function s(t) {
        for (var e = 0; e < t.length && e != g; e++) {
            var i = t[e];
            0 === jQuery("#" + i.id).length && ("image" === i.type ? r(i) : a(i), o(i))
        }
        var n = l();
        if (n > g)
            for (var s = n - g, e = 0; s > e; e++) h();
        x ? (y.data("lightGallery").destroy(!0), y.lightGallery({
            preload: 0
        })) : (y.lightGallery({
            preload: 0
        }), x = !0)
    }

    function r(t) {
        y.prepend('<li class="instagram-media" id="' + t.id + '" data-media-type="image" href="' + t.image + '" data-sub-html="#caption-' + t.id + '"><img src="' + t.thumbnail + '"/></li>')
    }

    function a(t) {
        w.append('<div id="video-' + t.id + '"><video class="lg-video-object lg-html5" controls preload="none"><source src="' + t.video + '" type="video/mp4">Your browser does not support HTML5 video.</video></div>'), y.prepend('<li class="instagram-media" id="' + t.id + '" data-media-type="video" data-html="#video-' + t.id + '" data-sub-html="#caption-' + t.id + '"><img src="' + t.thumbnail + '"/></li>')
    }

    function o(t) {
        b.append('<div id="caption-' + t.id + '"><h4>' + t.user.username + "</h4><p>" + t.text + "</p></div>")
    }

    function l() {
        return y.children(".instagram-media").length
    }

    function h() {
        var t = jQuery(y).children(".instagram-media").last(),
            e = t.attr("data-media-type");
        c(t), "image" === e ? u(t) : d(t)
    }

    function u(t) {
        t.remove()
    }

    function d(t) {
        var e = t.attr("id");
        t.remove();
        var i = jQuery(jQuery(w).find("#video-" + e)[0]);
        i.remove()
    }

    function c(t) {
        var e = t.attr("id"),
            i = jQuery(jQuery(b).find("#caption-" + e)[0]);
        i.remove()
    }
    var f = "",
        p = "",
        _ = "",
        m = "",
        g = 0,
        v = null,
        y = null,
        w = null,
        b = null,
        T = 12e4,
        x = !1,
        S = !1;
    return {
        setup: function() {
            t()
        }
    }
}();
jQuery(document).ready(function() {
    InstagramFeed.setup()
});
var GameTicker = function() {
    function t() {
        if (jQuery("#gameTicker").length > 0) {
            n = jQuery("#gameTicker"), s = jQuery("#game-goals"), r = jQuery("#game-periods");
            var t = n.attr("data-game-live");
            1 == t && e()
        }
    }

    function e() {
        setTimeout(function() {
            i()
        }, a)
    }

    function i() {
        var t = {
            action: n.attr("data-action"),
            gameId: n.attr("data-game-id"),
            nonce: n.attr("data-nonce")
        };
        jQuery.ajax({
            type: "GET",
            url: n.attr("data-url"),
            data: t,
            dataType: "json",
            success: function(t) {
                "success" === t.status && (n.empty(), n.append(t.output), s.empty(), s.append(t.result.GoalsHome + " - " + t.result.GoalsGuest), r.empty(), r.append(t.result.Periods), t.gameStatus.Ended !== !0 ? e() : console.log("Game ended. Live-feed shutting down."))
            },
            error: function() {}
        })
    }
    var n = null,
        s = null,
        r = null,
        a = 2e4;
    return {
        setup: function() {
            t()
        }
    }
}();
jQuery(document).ready(function() {
    GameTicker.setup()
});
jQuery(document).ready(function(t) {
    var e = "",
        i = t("#aniimated-thumbnials");
    i.lightGallery({
        selector: "a"
    }), t(".filter-wrapper .filter").on("click", function() {
        e = t(this).data("filter"), t("#aniimated-thumbnials").data("lightGallery").destroy(!0), i.lightGallery({
            selector: e
        })
    })
});
var Teams = function() {
    function t() {
        jQuery("#tbTeamModule").length > 0 && (i = jQuery(jQuery(".tbTeams").not("tbHidden")), jQuery("#tbTeamSelect").on("change", e))
    }

    function e() {
        var t = jQuery("#tbTeamSelect").val();
        i.addClass("tbHidden");
        var e = jQuery("#" + t);
        e.length > 0 && (i = e, i.removeClass("tbHidden"))
    }
    var i = null;
    return {
        setup: function() {
            t()
        }
    }
}();
jQuery(document).ready(function() {
    Teams.setup()
});
var mIndex = 0,
    GameSlider = function() {
        function t() {
            jQuery("#gameSlider").length > 0 && (s = jQuery("#gameSlider"), r = jQuery("#gameSliderContent"), e(), i())
        }

        function e() {
            a = new Swiper(".match-swiper-container", {
                paginationClickable: !0,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                spaceBetween: 0,
                slidesPerView: 9,
                initialSlide: mIndex,
                preventClicks: !1,
                preventClicksPropagation: !1,
                grabCursor: !0,
                breakpoints: {
                    1360: {
                        slidesPerView: 8
                    },
                    1280: {
                        slidesPerView: 7
                    },
                    1200: {
                        slidesPerView: 6
                    },
                    1024: {
                        slidesPerView: 5
                    },
                    768: {
                        slidesPerView: 4
                    },
                    640: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 3
                    },
                    375: {
                        slidesPerView: 2
                    }
                }
            })
        }

        function i() {
            setTimeout(function() {
                n()
            }, o)
        }

        function n() {
            var t = {
                action: s.attr("data-action"),
                nonce: s.attr("data-nonce")
            };
            jQuery.ajax({
                type: "GET",
                url: s.attr("data-url"),
                data: t,
                dataType: "json",
                success: function(t) {
                    r.empty(), r.append(t.output), a.update(), i()
                },
                error: function() {}
            })
        }
        var s = null,
            r = null,
            a = null,
            o = 2e4;
        return {
            setup: function() {
                t()
            }
        }
    }();
jQuery(document).ready(function(t) {
    for (var e = t("#gameSliderContent").children(".swiper-slide"), i = moment().format("YYYY-MM-DD"), n = 0; n < e.length; n++) {
        var s = t(e[n]).data("date");
        if (void 0 !== s) {
            if (moment(s).isBefore(i)) continue;
            mIndex = n;
            break
        }
    }
    GameSlider.setup()
});
var hashes = window.location.hash,
    NewsInfiniteLoader = function() {
        function t(t) {
            if (n = jQuery(t), s = jQuery("#" + n.attr("data-target")), r = JSON.parse(decodeURIComponent(n.attr("data-args"))), r.offset = parseInt(r.offset), r.chunkSize = parseInt(r.chunkSize), hashes = window.location.hash, hashes.indexOf("offset") > -1)
                for (var a = hashes.split("#"), o = 0; o < a.length; o++)
                    if (a[o].indexOf("offset") > -1) {
                        var l = a[o].replace("offset=", "");
                        r.chunkSize = l, i(l)
                    } n.on("click", e)
        }

        function e() {
            i()
        }

        function i(t) {
            if (hashes = window.location.hash, hashes.indexOf("offset") > -1) {
                var e = r.offset;
                void 0 != t && (e = t), hashes.indexOf("filtered") > -1 ? window.location.hash = "#offset=" + e + "#filtered" : window.location.hash = "#offset=" + e
            } else -1 == hashes.indexOf("offset") && (hashes.indexOf("filtered") > -1 ? window.location.hash = "#offset=" + r.offset + "#filtered" : window.location.hash = "#offset=" + r.offset);
            var i = {
                action: n.attr("data-action"),
                args: r,
                nonce: n.attr("data-nonce")
            };
            jQuery.ajax({
                type: "GET",
                url: n.attr("data-url"),
                data: i,
                dataType: "json",
                beforeSend: function() {
                    var t = '<div class="spinner2"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
                    jQuery("#tbNewsInfinityLoader").addClass("loading"), jQuery("#tbNewsInfinityLoader").parent().append(t)
                },
                success: function(e) {
                    if ("success" == e.status) {
                        jQuery(".spinner2").remove(), jQuery("#tbNewsInfinityLoader").removeClass("loading"), s.append(e.output);
                        var i = parseInt(e.itemsFound);
                        void 0 != t && (r.offset = parseInt(t)), r.offset += i, i < r.chunkSize && n.remove()
                    }
                },
                error: function() {
                    s.empty(), s.append("<div class='no-data'><div class='message bounceIn'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i>Misslyckades hämta data.</div></div>")
                }
            })
        }
        var n = null,
            s = null,
            r = null;
        return {
            setup: function(e) {
                t(e)
            }
        }
    }();
jQuery(document).ready(function() {
    jQuery("#tbNewsInfinityLoader").length > 0 && NewsInfiniteLoader.setup(jQuery("#tbNewsInfinityLoader"))
});
var hashes = window.location.hash,
    NewsFilter = function() {
        function t() {
            jQuery("#tbNewsFilter").length > 0 && (o = jQuery("#tbNewsFilter"), l = jQuery("#tbNewsFilterContent"), jQuery("#tbNewsType").on("change", e), jQuery("#tbGameListTeam").on("change", i), jQuery("#tbGameListTournamentGroup").on("change", n), hashes.indexOf("filtered") > -1 && a())
        }

        function e() {
            var t = s("#tbNewsType");
            t == d && (r("#tbGameListTournamentGroup", u), r("#tbGameListTeam", h)), hashes = window.location.hash, window.location.hash = "#filtered", a()
        }

        function i() {
            var t = s("#tbNewsType");
            t == d && r("#tbNewsType", c), r("#tbGameListTournamentGroup", u), hashes = window.location.hash, window.location.hash = "#filtered", a()
        }

        function n() {
            var t = s("#tbNewsType");
            t == d && r("#tbNewsType", c), r("#tbGameListTeam", h), hashes = window.location.hash, window.location.hash = "#filtered", a()
        }

        function s(t) {
            return jQuery(t).val()
        }

        function r(t, e) {
            for (var i = jQuery(t + "> option"), n = 0; n < i.length; n++) {
                var s = jQuery(i[n]);
                if (s.val() == e) {
                    s.prop("selected", !0);
                    break
                }
            }
        }

        function a() {
            var t = {
                action: o.attr("data-action"),
                newsType: jQuery("#tbNewsType").val(),
                tournamentTeamId: jQuery("#tbGameListTeam").val(),
                tournamentGroupId: jQuery("#tbGameListTournamentGroup").val(),
                nonce: o.attr("data-nonce")
            };
            jQuery.ajax({
                type: "GET",
                url: o.attr("data-url"),
                data: t,
                dataType: "json",
                beforeSend: function() {
                    var t = '<div class="loaderOverlay"><div class="spinner"><div class="cube1"></div><div class="cube2"></div></div></div>';
                    jQuery("#ajax-news").prepend(t), jQuery(".loaderOverlay").fadeIn()
                },
                success: function(t) {
                    l.empty(), l.append(t.output), jQuery("#tbNewsInfinityLoader").length > 0 && NewsInfiniteLoader.setup(jQuery("#tbNewsInfinityLoader"))
                },
                error: function() {
                    l.empty(), l.append("<div class='no-data'><div class='message bounceIn'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i>Misslyckades hämta data.</div>")
                }
            })
        }
        var o = null,
            l = null,
            h = "team_all_teams",
            u = "tournament_group_all_tournament_groups",
            d = "hockeyettan",
            c = "all_news";
        return {
            setup: function() {
                t()
            }
        }
    }();
jQuery(document).ready(function() {
    NewsFilter.setup()
});
var GameTabs = function() {
    function t() {
        jQuery("ul.gameTabs").length > 0 && (jQuery("ul.gameTabs").tabs({
            onShow: function(t) {
                i(t)
            }
        }), e())
    }

    function e() {
        var t = jQuery("ul.gameTabs > li > .active");
        if (t.length > 0) {
            var e = jQuery(t[0]),
                i = e.attr("href"),
                s = jQuery(jQuery(i).find(".twitter")[0]);
            n(s)
        }
    }

    function i(t) {
        var e = jQuery(t).find(".twitter").eq(0);
        n(e)
    }

    function n(t) {
        var e = jQuery("#twitter-feed");
        e.detach(), t.append(e)
    }
    return {
        setup: function() {
            t()
        }
    }
}();
jQuery(document).ready(function() {
    GameTabs.setup()
});
var GameList = function() {
    function t() {
        jQuery("#tbGameList").length > 0 && (_ = jQuery("#tbGameList"), m = jQuery("#tbGameListContent"), g = jQuery("#tbGameListLoadMore"), g.on("click", n), w = parseInt(m.attr("data-count")), b = parseInt(m.attr("data-found")), jQuery("#tbGameStatus").on("change", o), jQuery("#tbGameListTeam").on("change", l), jQuery("#tbGameListTournamentGroup").on("change", h), e())
    }

    function e() {
        var t = jQuery(".game-list-item.live");
        t.length > 0 && r()
    }

    function i() {
        var t = [],
            e = jQuery(".game-list-item.live");
        if (e.length > 0)
            for (var i = 0; i < e.length; i++) {
                var n = jQuery(e[i]);
                t.push(n.attr("id"))
            }
        return t
    }

    function n() {
        0 == T && (T = !0, p(k.LoadMore))
    }

    function s() {
        a(), null !== x && (x.abort(), x = null)
    }

    function r() {
        S = setTimeout(function() {
            a(), f()
        }, P)
    }

    function a() {
        null !== S && clearTimeout(S)
    }

    function o() {
        u(), p(k.Initial)
    }

    function l() {
        u(), c("#tbGameListTournamentGroup", y), p(k.Initial)
    }

    function h() {
        u(), c("#tbGameListTeam", v), p(k.Initial)
    }

    function u() {
        w = 0, b = 0
    }

    function d() {
        w >= b ? g.addClass("tbHidden") : g.removeClass("tbHidden")
    }

    function c(t, e) {
        for (var i = jQuery(t + "> option"), n = 0; n < i.length; n++) {
            var s = jQuery(i[n]);
            if (s.val() == e) {
                s.prop("selected", !0);
                break
            }
        }
    }

    function f() {
        var t = {
            action: _.attr("data-action-refresh"),
            nonce: _.attr("data-nonce"),
            ids: i()
        };
        x = jQuery.ajax({
            type: "GET",
            url: _.attr("data-url"),
            data: t,
            dataType: "json",
            success: function(t) {
                if ("success" == t.status && t.games.length > 0) {
                    for (var i = 0; i < t.games.length; i++) {
                        var n = t.games[i],
                            r = jQuery("#" + n.id);
                        if (r.length > 0) {
                            var a = r.find(".scoreHome").first();
                            a.empty(), a.append(n.goalsHome);
                            var o = r.find(".scoreGuest").first();
                            o.empty(), o.append(n.goalsGuest);
                            var l = r.find(".periods").first();
                            l.empty(), l.append(n.periods), n.ended && r.removeClass("live")
                        }
                    }
                    s(), e()
                }
            }
        })
    }

    function p(t) {
        s();
        var i = {
            action: _.attr("data-action"),
            gameStatus: jQuery("#tbGameStatus").val(),
            tournamentTeamId: jQuery("#tbGameListTeam").val(),
            tournamentGroupId: jQuery("#tbGameListTournamentGroup").val(),
            teamid: _.attr("data-teamid"),
            nonce: _.attr("data-nonce"),
            offset: w
        };
        jQuery.ajax({
            type: "GET",
            url: _.attr("data-url"),
            data: i,
            dataType: "json",
            beforeSend: function() {
                if (t === k.Initial) {
                    var e = '<div class="loaderOverlay"><div class="spinner"><div class="cube1"></div><div class="cube2"></div></div></div>';
                    jQuery("#tbGameListContent").prepend(e), jQuery(".loaderOverlay").fadeIn()
                } else if (t === k.LoadMore) {
                    var e = '<div class="spinner2"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
                    jQuery("#tbGameListLoadMore").addClass("loading"), jQuery("#tbGameListLoadMore").parent().append(e)
                }
            },
            success: function(i) {
                t === k.LoadMore && (jQuery("#tbGameListLoadMore").removeClass("loading"), jQuery(".spinner2").remove()), b = parseInt(i.result.found), t === k.Initial ? (m.empty(), w = parseInt(i.result.count)) : (T = !1, w += parseInt(i.result.count)), d(), m.append(i.result.output), e(), jQuery('.livestream-link').lightGallery({
                    selector: 'this'
                })
            },
            error: function() {
                m.empty(), m.append("<div class='no-data'><div class='message bounceIn'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i>Misslyckades hämta data.</div>")
            }
        })
    }
    var _ = null,
        m = null,
        g = null,
        v = "team_all_teams",
        y = "tournament_group_all_tournament_groups",
        w = 0,
        b = 0,
        T = !1,
        x = null,
        S = null,
        P = 2e4,
        k = {
            Initial: 0,
            LoadMore: 1
        };
    return {
        setup: function() {
            t()
        }
    }
}();
jQuery(document).ready(function() {
    GameList.setup()
});
// var StoryTeller = function() {
//     function t() {
//         jQuery("#storyteller").length > 0 && jQuery("#storyteller-container").length > 0 && (p = jQuery("#storyteller"), _ = jQuery("#storyteller-container"), e(), i())
//     }

//     function e() {
//         w = document.createElement("audio"), w.setAttribute("src", "/wp-content/themes/hockeyettan/assets/sounds/pling.mp3"), w.volume = m.audioVolume
//     }

//     function i() {
//         var t = "";
//         t = m.stagingMode ? "http://st.tsm.impleoit.com/signalr/hubs" : "http://storyteller.swehockey.se/signalr/hubs", jQuery.connection.hub.url = t;
//         var e = jQuery.connection.SwehockeyStorytellerHub;
//         e.client.onInformationUpdate = s, e.client.onClientConnected = n, jQuery.connection.hub.start().done(r)
//     }

//     function n(t) {
//         for (var e = JSON.parse(t), i = 0; i < e.length; i++) {
//             var n = e[i],
//                 s = a(n);
//             null !== s && u(s)
//         }
//         v || o()
//     }

//     function s(t) {
//         var e = JSON.parse(t),
//             i = a(e);
//         null !== i && (u(i), v || o())
//     }

//     function r() {
//         var t = jQuery.connection.SwehockeyStorytellerHub;
//         t.server.subscribeStory(m.storytellerId, m.clubId, m.language)
//     }

//     function a(t) {
//         var e = t.Text,
//             i = t.Title,
//             n = t.IsNegative;
//         return m.excludeNegative && n ? null : '<strong>Just nu</strong><span title="' + i + '" class="fi flaticon-nav-arrow-right storyteller-span">' + e + '</span><div class="clearFloat"></div>'
//     }

//     function o() {
//         _.empty();
//         var t = d();
//         null !== t ? (v = !0, _.append(t), p.slideDown(m.slideTime, l), m.playAudio && w.play()) : v = !1
//     }

//     function l() {
//         f()
//     }

//     function h() {
//         o()
//     }

//     function u(t) {
//         g.push(t)
//     }

//     function d() {
//         return g.length > 0 ? g.shift() : null
//     }

//     function c() {
//         y = null, p.slideUp(m.slideTime, h)
//     }

//     function f() {
//         y = setTimeout(c, m.showTime)
//     }
//     var p = null,
//         _ = null,
//         m = {
//             storytellerId: 2,
//             clubId: null,
//             language: "sv",
//             stagingMode: !1,
//             excludeNegativeInfos: !0,
//             showTime: 5e3,
//             slideTime: 200,
//             audioVolume: .05,
//             playAudio: !0
//         },
//         g = [],
//         v = !1,
//         y = null,
//         w = null;
//     return {
//         setup: function() {
//             t()
//         }
//     }
// }();
// jQuery(document).ready(function() {
//     StoryTeller.setup()
// });
jQuery(document).ready(function(t) {
    new Swiper(".post-container", {
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        autoplay: 7e3,
        loop: !0,
        onSlideChangeStart: function(e) {
            var i = t(".singleSlidePost").eq(e.previousIndex).find("iframe").attr("src");
            t(".singleSlidePost").eq(e.previousIndex).find("iframe").attr("src", i)
        },
        onSlideChangeEnd: function(e) {
            t(".singleSlidePost").eq(e.activeIndex).attr("data-id");
            t(".post-list-item").removeClass("active"), t(".post-list-item").eq(e.activeIndex - 1).addClass("active")
        }
    })
});
var LazyLoader = {};
LazyLoader.timer = {}, LazyLoader.scripts = [], LazyLoader.load = function(t, e, i) {
    try {
        LazyLoader.scripts.push(t);
        var n = document.createElement("script");
        if (n.src = t, n.type = "text/javascript", e.get(0).appendChild(n), i) {
            n.onreadystatechange = function() {
                ("loaded" === n.readyState || "complete" === n.readyState) && (i(), jQuery(n).remove())
            }, n.onload = function() {
                i(), jQuery(n).remove()
            };
            try {
                ($.browser.webkit && !navigator.userAgent.match(/Version\/3/) || $.browser.opera) && (LazyLoader.timer[t] = setInterval(function() {
                    /loaded|complete/.test(document.readyState) && (clearInterval(LazyLoader.timer[t]), i())
                }, 10))
            } catch (r) {}
        }
    } catch (s) {
        alert(s)
    }
};
var xrayAd = {
    div: null,
    viewport: null,
    thresold: 200,
    elements: [],
    adBlockCount: 0,
    w: 160,
    h: 200,
    init: function() {
        this.div = $("#xrayAd"), this.div || (this.div = $("<div>", {
            id: "xrayAd",
            css: {
                position: "fixed",
                top: 10,
                left: 10,
                width: this.w,
                height: this.h,
                zIndex: 1e4,
                background: "rgba(0,0,0, 0.5)"
            }
        }), this.div.appendTo($("body")))
    },
    viewportUpdate: function() {
        this.viewport || (this.viewport = $("<div>", {
            id: "xrayAdViewport",
            css: {
                position: "absolute",
                width: this.w,
                height: 10,
                zIndex: 10001,
                background: "rgba(255,255,255, 0.3)"
            }
        }), this.viewport.appendTo(this.div)), this.viewThresoldTop || (this.viewThresoldTop = $("<div>", {
            id: "xrayAdThresold",
            css: {
                position: "absolute",
                width: this.w,
                height: 1,
                zIndex: 10002,
                background: "rgba(255,0,0, 0.5)"
            }
        }), this.viewThresoldTop.appendTo(this.div), this.viewThresoldBottom = this.viewThresoldTop.clone().appendTo(this.div)), this.bodyHeight = $(document).height(), this.bodyWidth = $(window).width();
        var t = $(window).height() / this.bodyHeight * xrayAd.h,
            e = $(window).scrollTop() / this.bodyHeight * xrayAd.h;
        if (this.viewport.css({
                height: t,
                top: e
            }), this.viewThresoldTop.css({
                top: ($(window).scrollTop() - xrayAd.thresold) / this.bodyHeight * xrayAd.h
            }), this.viewThresoldBottom.css({
                top: ($(window).scrollTop() + xrayAd.thresold) / this.bodyHeight * xrayAd.h + t - 1
            }), this.div && this.div.length) {
            var i = this.div.find(".xrayAdBlock");
            $.each(i, function(t) {
                var e = $(this),
                    i = $(xrayAd.elements[t]);
                if (e.length && i.length) {
                    var n = {};
                    if (n.off = i.offset(), n.off) {
                        n.top = n.off.top / xrayAd.bodyHeight * xrayAd.h, n.left = n.off.left / xrayAd.bodyWidth * xrayAd.w, n.w = Math.max(i.width(), 10) / xrayAd.bodyWidth * xrayAd.w, n.h = Math.max(i.height(), 10) / xrayAd.bodyHeight * xrayAd.h;
                        var r = "#FF0071";
                        r = "true" === i.data("loading") ? "orange" : r, r = "true" === i.data("loaded") ? "#00FF00" : r, e.css({
                            top: n.top,
                            left: n.left,
                            width: n.w,
                            height: n.h,
                            borderColor: r
                        })
                    }
                }
            })
        }
    },
    load: function(t, e) {
        this.thresold = e || 0, this.init();
        var i = $("<div>", {
            "class": "xrayAdBlock",
            css: {
                position: "absolute",
                background: "#ffffff",
                border: "1px solid #FF0071",
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                zIndex: 10003
            }
        });
        $.each(t, function() {
            i.clone().attr("xrayblock", "xrayAdBlock_" + xrayAd.adBlockCount++).appendTo(xrayAd.div), $(this).bind("onCompleteXray", function() {
                xrayAd.viewportUpdate()
            }), $(this).bind("onLoadXray", function() {
                xrayAd.viewportUpdate()
            }), xrayAd.elements.push(this)
        }), xrayAd.viewportUpdate(), $(window).bind("scroll", function() {
            xrayAd.viewportUpdate()
        })
    }
};
! function($) {
    $.lazyLoadAdRunning = !1, $.lazyLoadAdTimers = [], $.fn.lazyLoadAd = function(h) {
        function _debug() {
            if ("undefined" != typeof console && j.debug) {
                for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
                try {
                    console.log("LazyLoadAD |", t)
                } catch (i) {}
            }
        }
        var j = {
            threshold: 0,
            failurelimit: 1,
            forceLoad: !1,
            event: "scroll",
            viewport: window,
            placeholder: !1,
            onLoad: !1,
            onComplete: !1,
            timeout: 1500,
            debug: !1,
            xray: !1
        };
        h && $.extend(j, h), j.xray && "object" == typeof xrayAd && xrayAd.load(this, j.threshold);
        var k = this;
        return $(j.viewport).bind("checkLazyLoadAd", function() {
            var t = 0;
            k.each(function() {
                if ($.lazyLoadAdRunning) return $.lazyLoadAdTimers.runTimeOut && clearTimeout($.lazyLoadAdTimers.runTimeOut), $.lazyLoadAdTimers.runTimeOut = setTimeout(function() {
                    $(j.viewport).trigger("checkLazyLoadAd")
                }, 300), !1;
                if (j.forceLoad === !0) $(this).trigger("load");
                else if ($.belowthefold(this, j) || $.abovethetop(this, j)) {
                    if (t++ > j.failurelimit) return !1
                } else $(this).trigger("load")
            });
            var e = $.grep(k, function(t) {
                return !("true" === $(t).data("loaded") ? !0 : !1)
            });
            k = $(e)
        }), "scroll" === j.event && $(j.viewport).bind("scroll", function() {
            return 0 === k.length ? !1 : void $(j.viewport).trigger("checkLazyLoadAd")
        }), this.each(function(d, f) {
            var g = $(this);
            void 0 === g.attr("original") && g.attr("original", g.attr("src")), g.isLoaded = function() {
                return "true" === g.data("loaded") ? !0 : !1
            }, g.bind("debug", function(t, e) {
                e = e || "start", j.xray && ("start" === e ? g.trigger("onLoadXray") : "error" === e ? g.trigger("onErrorXray") : "complete" === e && g.trigger("onCompleteXray")), j.debug && ("start" === e ? g.css({
                    border: "3px solid orange"
                }) : "error" === e ? g.css({
                    border: "3px solid red"
                }) : "complete" === e && g.css({
                    border: "3px solid green"
                }))
            }), g.one("onComplete", function() {
                if (_debug("---> lazyLoadComplete"), $(g).removeAttr("original"), $.lazyLoadAdRunning = !1, g.data("loaded", "true"), g.trigger("debug", "complete"), "function" == typeof j.onComplete) try {
                    j.onComplete()
                } catch (t) {}
            }), g.stack = [], g.makinaBlock = !1, g.bind("makina_go", function() {
                if (g.makinaBlock) return !1;
                if (g.stack.length > 0) {
                    var t = g.stack.shift(),
                        e = g.find(".wrapAd");
                    e.length || (e = $('<div class="wrapAd"></div>').clone(), e.appendTo(g));
                    var i = $("<div>").clone().appendTo(e);
                    "string" == typeof t ? i.replaceWith(t) : "object" == typeof t && (t.is("script") && t.attr("src") ? (_debug("JS to load !! --> " + t.attr("src")), LazyLoader.load(t.attr("src"), g, function() {
                        g.makinaBlock = !1, _debug("JS to load !! ++> " + t.attr("src")), g.trigger("makina_go")
                    })) : i.replaceWith(t)), g.trigger("makina_go")
                } else $.lazyLoadAdTimers.loadJS && clearTimeout($.lazyLoadAdTimers.loadJS), $.lazyLoadAdTimers.loadJS = setTimeout(function() {
                    g.trigger("onComplete")
                }, j.timeout)
            }), g.bind("docWrite_direct", function(t, e) {
                var i = $(e);
                _debug("Fragment Direct Write : ", i, i.length), $.each(i, function() {
                    g.stack.push($(this))
                }), g.trigger("makina_go")
            }), g.bind("docWrite_delayed", function(t, e) {
                _debug("Fragment Delayed Write : ", e), g.numWrappers--, _debug("Fragment append : ", g.numWrappers, e), g.docHtmlCurrent += e, 0 === g.numWrappers && (e = g.docHtmlCurrent, g.docHtmlCurrent = "", setTimeout(function() {
                    g.stack.push(e), g.docHtmlCurrent = "", g.trigger("makina_go")
                }, 0))
            }), g.numWrappers = 0, g.docHtmlCurrent = "", g.bind("docWrite_overload", function() {
                document._writeOriginal = document.write, document.write = document.writeln = function() {
                    for (var t = arguments, e = "", i = 0; i < t.length; i++) e += t[i];
                    var n = "",
                        r = !1;
                    try {
                        n = $(e), r = n.is("div") || n.is("script") ? !0 : !1
                    } catch (s) {}
                    g.history[g.fragmentId] = g.history[g.fragmentId] || {}, void 0 === g.history[g.fragmentId][e] && (g.history[g.fragmentId][e] = !0, r ? g.trigger("docWrite_direct", e) : (g.numWrappers++, setTimeout(function() {
                        g.trigger("docWrite_delayed", e)
                    }, 0)))
                }
            }), g.bind("evalCode", function() {
                for (var a = [], script, regexp = /<code[^>]*>([\s\S]*?)<\/code>/gi; script = regexp.exec(g.html());) {
                    var b = script[1];
                    b = b.replace("<!--//<![CDATA[", "").replace("//]]>-->", "").replace("<!--", "").replace("//-->", ""), b = b.replace(/\&gt\;/g, ">").replace(/\&lt\;/g, "<"), a.push($.trim(b))
                }
                try {
                    a = a.length ? a.join("\n") : "", _debug("Script to eval : ", a), "" !== a && eval(a)
                } catch (e) {}
            }), g.bind("loadJS", function(t, e) {
                var i = null;
                e.src && (i = e.callback || null, e = e.src), e += -1 === e.indexOf("?") ? "?_=" + (new Date).getTime() : "&_=" + (new Date).getTime(), _debug("loadJS :: ", e), LazyLoader.load(e, g, function() {
                    _debug("loadJS COMPLETE :: " + e), i ? i() : $.lazyLoadAdTimers.loadJS = setTimeout(function() {
                        g.trigger("onComplete")
                    }, j.timeout)
                })
            }), g.one("load", function() {
                if (!g.isLoaded()) {
                    $.lazyLoadAdRunning = !0, g.data("loading", "true"), g.trigger("debug", "start");
                    var t = $(g).attr("original");
                    g.history = {}, _debug("------------------------------  Lazy Load Ad CALL ----"), _debug("Context : ", g), g.trigger("docWrite_overload"), g.trigger("evalCode"), t && g.trigger("loadJS", t)
                }
            }), "scroll" !== j.event && g.bind(j.event, function() {
                g.isLoaded() || g.trigger("load")
            })
        }), $(j.viewport).trigger("checkLazyLoadAd"), this
    }, $.belowthefold = function(t, e) {
        var i = 0;
        return i = void 0 === e.viewport || e.viewport === window ? $(window).height() + $(window).scrollTop() : $(e.viewport).offset().top + $(e.viewport).height(), i <= $(t).offset().top - e.threshold
    }, $.abovethetop = function(t, e) {
        var i = 0;
        return i = void 0 === e.viewport || e.viewport === window ? $(window).scrollTop() : $(e.viewport).offset().top, i >= $(t).offset().top + e.threshold + $(t).height()
    }
}(jQuery);