!(function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = t.document
            ? e(t, !0)
            : function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return e(t);
            })
        : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        r = n.slice,
        o = n.flat
            ? function (t) {
                return n.flat.call(t);
            }
            : function (t) {
                return n.concat.apply([], t);
            },
        a = n.push,
        s = n.indexOf,
        l = {},
        u = l.toString,
        c = l.hasOwnProperty,
        p = c.toString,
        d = p.call(Object),
        f = {},
        h = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        m = function (t) {
            return null != t && t === t.window;
        },
        g = t.document,
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function y(t, e, n) {
        var i,
            r,
            o = (n = n || g).createElement("script");
        if (((o.text = t), e)) for (i in v) (r = e[i] || (e.getAttribute && e.getAttribute(i))) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[u.call(t)] || "object" : typeof t;
    }
    var _ = "3.5.1",
        w = function (t, e) {
            return new w.fn.init(t, e);
        };
    function x(t) {
        var e = !!t && "length" in t && t.length,
            n = b(t);
        return !h(t) && !m(t) && ("array" === n || 0 === e || ("number" == typeof e && 0 < e && e - 1 in t));
    }
    (w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function () {
            return r.call(this);
        },
        get: function (t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function (t) {
            var e = w.merge(this.constructor(), t);
            return (e.prevObject = this), e;
        },
        each: function (t) {
            return w.each(this, t);
        },
        map: function (t) {
            return this.pushStack(
                w.map(this, function (e, n) {
                    return t.call(e, n, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                w.grep(this, function (t, e) {
                    return (e + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                w.grep(this, function (t, e) {
                    return e % 2;
                })
            );
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var t,
                e,
                n,
                i,
                r,
                o,
                a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++), "object" == typeof a || h(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
                if (null != (t = arguments[s]))
                    for (e in t)
                        (i = t[e]),
                            "__proto__" !== e &&
                            a !== i &&
                            (u && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                                ? ((n = a[e]), (o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}), (r = !1), (a[e] = w.extend(u, o, i)))
                                : void 0 !== i && (a[e] = i));
            return a;
        }),
        w.extend({
            expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t);
            },
            noop: function () { },
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== u.call(t) || ((e = i(t)) && ("function" != typeof (n = c.call(e, "constructor") && e.constructor) || p.call(n) !== d)));
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            globalEval: function (t, e, n) {
                y(t, { nonce: e && e.nonce }, n);
            },
            each: function (t, e) {
                var n,
                    i = 0;
                if (x(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                return t;
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (x(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n;
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : s.call(e, t, n);
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return (t.length = r), t;
            },
            grep: function (t, e, n) {
                for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
                return i;
            },
            map: function (t, e, n) {
                var i,
                    r,
                    a = 0,
                    s = [];
                if (x(t)) for (i = t.length; a < i; a++) null != (r = e(t[a], a, n)) && s.push(r);
                else for (a in t) null != (r = e(t[a], a, n)) && s.push(r);
                return o(s);
            },
            guid: 1,
            support: f,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            l["[object " + e + "]"] = e.toLowerCase();
        });
    var k = (function (t) {
        var e,
            n,
            i,
            r,
            o,
            a,
            s,
            l,
            u,
            c,
            p,
            d,
            f,
            h,
            m,
            g,
            v,
            y,
            b,
            _ = "sizzle" + 1 * new Date(),
            w = t.document,
            x = 0,
            k = 0,
            T = lt(),
            C = lt(),
            P = lt(),
            A = lt(),
            S = function (t, e) {
                return t === e && (p = !0), 0;
            },
            E = {}.hasOwnProperty,
            D = [],
            O = D.pop,
            j = D.push,
            M = D.push,
            L = D.slice,
            N = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                return -1;
            },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            q = "\\[" + B + "*(" + R + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + B + "*\\]",
            z = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            H = new RegExp(B + "+", "g"),
            F = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            I = new RegExp("^" + B + "*," + B + "*"),
            W = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            U = new RegExp(B + "|>"),
            X = new RegExp(z),
            Y = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + $ + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i"),
            },
            G = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g"),
            nt = function (t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            rt = function (t, e) {
                return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
            },
            ot = function () {
                d();
            },
            at = _t(
                function (t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            M.apply((D = L.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
        } catch (e) {
            M = {
                apply: D.length
                    ? function (t, e) {
                        j.apply(t, L.call(e));
                    }
                    : function (t, e) {
                        for (var n = t.length, i = 0; (t[n++] = e[i++]););
                        t.length = n - 1;
                    },
            };
        }
        function st(t, e, i, r) {
            var o,
                s,
                u,
                c,
                p,
                h,
                v,
                y = e && e.ownerDocument,
                w = e ? e.nodeType : 9;
            if (((i = i || []), "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))) return i;
            if (!r && (d(e), (e = e || f), m)) {
                if (11 !== w && (p = Z.exec(t)))
                    if ((o = p[1])) {
                        if (9 === w) {
                            if (!(u = e.getElementById(o))) return i;
                            if (u.id === o) return i.push(u), i;
                        } else if (y && (u = y.getElementById(o)) && b(e, u) && u.id === o) return i.push(u), i;
                    } else {
                        if (p[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = p[3]) && n.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(o)), i;
                    }
                if (n.qsa && !A[t + " "] && (!g || !g.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                    if (((v = t), (y = e), 1 === w && (U.test(t) || W.test(t)))) {
                        for (((y = (tt.test(t) && vt(e.parentNode)) || e) === e && n.scope) || ((c = e.getAttribute("id")) ? (c = c.replace(it, rt)) : e.setAttribute("id", (c = _))), s = (h = a(t)).length; s--;)
                            h[s] = (c ? "#" + c : ":scope") + " " + bt(h[s]);
                        v = h.join(",");
                    }
                    try {
                        return M.apply(i, y.querySelectorAll(v)), i;
                    } catch (e) {
                        A(t, !0);
                    } finally {
                        c === _ && e.removeAttribute("id");
                    }
                }
            }
            return l(t.replace(F, "$1"), e, i, r);
        }
        function lt() {
            var t = [];
            return function e(n, r) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], (e[n + " "] = r);
            };
        }
        function ut(t) {
            return (t[_] = !0), t;
        }
        function ct(t) {
            var e = f.createElement("fieldset");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
        }
        function pt(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e;
        }
        function dt(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling);) if (n === e) return -1;
            return t ? 1 : -1;
        }
        function ft(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function ht(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }
        function mt(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && at(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function gt(t) {
            return ut(function (e) {
                return (
                    (e = +e),
                    ut(function (n, i) {
                        for (var r, o = t([], n.length, e), a = o.length; a--;) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                    })
                );
            });
        }
        function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in ((n = st.support = {}),
            (o = st.isXML = function (t) {
                var e = t.namespaceURI,
                    n = (t.ownerDocument || t).documentElement;
                return !G.test(e || (n && n.nodeName) || "HTML");
            }),
            (d = st.setDocument = function (t) {
                var e,
                    r,
                    a = t ? t.ownerDocument || t : w;
                return (
                    a != f &&
                    9 === a.nodeType &&
                    a.documentElement &&
                    ((h = (f = a).documentElement),
                        (m = !o(f)),
                        w != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)),
                        (n.scope = ct(function (t) {
                            return h.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length;
                        })),
                        (n.attributes = ct(function (t) {
                            return (t.className = "i"), !t.getAttribute("className");
                        })),
                        (n.getElementsByTagName = ct(function (t) {
                            return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
                        })),
                        (n.getElementsByClassName = J.test(f.getElementsByClassName)),
                        (n.getById = ct(function (t) {
                            return (h.appendChild(t).id = _), !f.getElementsByName || !f.getElementsByName(_).length;
                        })),
                        n.getById
                            ? ((i.filter.ID = function (t) {
                                var e = t.replace(et, nt);
                                return function (t) {
                                    return t.getAttribute("id") === e;
                                };
                            }),
                                (i.find.ID = function (t, e) {
                                    if (void 0 !== e.getElementById && m) {
                                        var n = e.getElementById(t);
                                        return n ? [n] : [];
                                    }
                                }))
                            : ((i.filter.ID = function (t) {
                                var e = t.replace(et, nt);
                                return function (t) {
                                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return n && n.value === e;
                                };
                            }),
                                (i.find.ID = function (t, e) {
                                    if (void 0 !== e.getElementById && m) {
                                        var n,
                                            i,
                                            r,
                                            o = e.getElementById(t);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                            for (r = e.getElementsByName(t), i = 0; (o = r[i++]);) if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                        }
                                        return [];
                                    }
                                })),
                        (i.find.TAG = n.getElementsByTagName
                            ? function (t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
                            }
                            : function (t, e) {
                                var n,
                                    i = [],
                                    r = 0,
                                    o = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; (n = o[r++]);) 1 === n.nodeType && i.push(n);
                                    return i;
                                }
                                return o;
                            }),
                        (i.find.CLASS =
                            n.getElementsByClassName &&
                            function (t, e) {
                                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t);
                            }),
                        (v = []),
                        (g = []),
                        (n.qsa = J.test(f.querySelectorAll)) &&
                        (ct(function (t) {
                            var e;
                            (h.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + B + "*(?:''|\"\")"),
                                t.querySelectorAll("[selected]").length || g.push("\\[" + B + "*(?:value|" + $ + ")"),
                                t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="),
                                (e = f.createElement("input")).setAttribute("name", ""),
                                t.appendChild(e),
                                t.querySelectorAll("[name='']").length || g.push("\\[" + B + "*name" + B + "*=" + B + "*(?:''|\"\")"),
                                t.querySelectorAll(":checked").length || g.push(":checked"),
                                t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"),
                                t.querySelectorAll("\\\f"),
                                g.push("[\\r\\n\\f]");
                        }),
                            ct(function (t) {
                                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var e = f.createElement("input");
                                e.setAttribute("type", "hidden"),
                                    t.appendChild(e).setAttribute("name", "D"),
                                    t.querySelectorAll("[name=d]").length && g.push("name" + B + "*[*^$|!~]?="),
                                    2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                    (h.appendChild(t).disabled = !0),
                                    2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                    t.querySelectorAll("*,:x"),
                                    g.push(",.*:");
                            })),
                        (n.matchesSelector = J.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                        ct(function (t) {
                            (n.disconnectedMatch = y.call(t, "*")), y.call(t, "[s!='']:x"), v.push("!=", z);
                        }),
                        (g = g.length && new RegExp(g.join("|"))),
                        (v = v.length && new RegExp(v.join("|"))),
                        (e = J.test(h.compareDocumentPosition)),
                        (b =
                            e || J.test(h.contains)
                                ? function (t, e) {
                                    var n = 9 === t.nodeType ? t.documentElement : t,
                                        i = e && e.parentNode;
                                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
                                }
                                : function (t, e) {
                                    if (e) for (; (e = e.parentNode);) if (e === t) return !0;
                                    return !1;
                                }),
                        (S = e
                            ? function (t, e) {
                                if (t === e) return (p = !0), 0;
                                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return (
                                    i ||
                                    (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!n.sortDetached && e.compareDocumentPosition(t) === i)
                                        ? t == f || (t.ownerDocument == w && b(w, t))
                                            ? -1
                                            : e == f || (e.ownerDocument == w && b(w, e))
                                                ? 1
                                                : c
                                                    ? N(c, t) - N(c, e)
                                                    : 0
                                        : 4 & i
                                            ? -1
                                            : 1)
                                );
                            }
                            : function (t, e) {
                                if (t === e) return (p = !0), 0;
                                var n,
                                    i = 0,
                                    r = t.parentNode,
                                    o = e.parentNode,
                                    a = [t],
                                    s = [e];
                                if (!r || !o) return t == f ? -1 : e == f ? 1 : r ? -1 : o ? 1 : c ? N(c, t) - N(c, e) : 0;
                                if (r === o) return dt(t, e);
                                for (n = t; (n = n.parentNode);) a.unshift(n);
                                for (n = e; (n = n.parentNode);) s.unshift(n);
                                for (; a[i] === s[i];) i++;
                                return i ? dt(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0;
                            })),
                    f
                );
            }),
            (st.matches = function (t, e) {
                return st(t, null, null, e);
            }),
            (st.matchesSelector = function (t, e) {
                if ((d(t), n.matchesSelector && m && !A[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))))
                    try {
                        var i = y.call(t, e);
                        if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                    } catch (t) {
                        A(e, !0);
                    }
                return 0 < st(e, f, null, [t]).length;
            }),
            (st.contains = function (t, e) {
                return (t.ownerDocument || t) != f && d(t), b(t, e);
            }),
            (st.attr = function (t, e) {
                (t.ownerDocument || t) != f && d(t);
                var r = i.attrHandle[e.toLowerCase()],
                    o = r && E.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                return void 0 !== o ? o : n.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null;
            }),
            (st.escape = function (t) {
                return (t + "").replace(it, rt);
            }),
            (st.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (st.uniqueSort = function (t) {
                var e,
                    i = [],
                    r = 0,
                    o = 0;
                if (((p = !n.detectDuplicates), (c = !n.sortStable && t.slice(0)), t.sort(S), p)) {
                    for (; (e = t[o++]);) e === t[o] && (r = i.push(o));
                    for (; r--;) t.splice(i[r], 1);
                }
                return (c = null), t;
            }),
            (r = st.getText = function (t) {
                var e,
                    n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
                    } else if (3 === o || 4 === o) return t.nodeValue;
                } else for (; (e = t[i++]);) n += r(e);
                return n;
            }),
            ((i = st.selectors = {
                cacheLength: 50,
                createPseudo: ut,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (t) {
                        return (t[1] = t[1].replace(et, nt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function (t) {
                        return (
                            (t[1] = t[1].toLowerCase()),
                            "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && st.error(t[0]),
                            t
                        );
                    },
                    PSEUDO: function (t) {
                        var e,
                            n = !t[6] && t[2];
                        return V.CHILD.test(t[0])
                            ? null
                            : (t[3] ? (t[2] = t[4] || t[5] || "") : n && X.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t
                            ? function () {
                                return !0;
                            }
                            : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e;
                            };
                    },
                    CLASS: function (t) {
                        var e = T[t + " "];
                        return (
                            e ||
                            ((e = new RegExp("(^|" + B + ")" + t + "(" + B + "|$)")) &&
                                T(t, function (t) {
                                    return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (t, e, n) {
                        return function (i) {
                            var r = st.attr(i, t);
                            return null == r
                                ? "!=" === e
                                : !e ||
                                ((r += ""),
                                    "=" === e
                                        ? r === n
                                        : "!=" === e
                                            ? r !== n
                                            : "^=" === e
                                                ? n && 0 === r.indexOf(n)
                                                : "*=" === e
                                                    ? n && -1 < r.indexOf(n)
                                                    : "$=" === e
                                                        ? n && r.slice(-n.length) === n
                                                        : "~=" === e
                                                            ? -1 < (" " + r.replace(H, " ") + " ").indexOf(n)
                                                            : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === r
                            ? function (t) {
                                return !!t.parentNode;
                            }
                            : function (e, n, l) {
                                var u,
                                    c,
                                    p,
                                    d,
                                    f,
                                    h,
                                    m = o !== a ? "nextSibling" : "previousSibling",
                                    g = e.parentNode,
                                    v = s && e.nodeName.toLowerCase(),
                                    y = !l && !s,
                                    b = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = e; (d = d[m]);) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = m = "only" === t && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                                        for (
                                            b = (f = (u = (c = (p = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[t] || [])[0] === x && u[1]) && u[2], d = f && g.childNodes[f];
                                            (d = (++f && d && d[m]) || (b = f = 0) || h.pop());

                                        )
                                            if (1 === d.nodeType && ++b && d === e) {
                                                c[t] = [x, f, b];
                                                break;
                                            }
                                    } else if ((y && (b = f = (u = (c = (p = (d = e)[_] || (d[_] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[t] || [])[0] === x && u[1]), !1 === b))
                                        for (
                                            ;
                                            (d = (++f && d && d[m]) || (b = f = 0) || h.pop()) &&
                                            ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (p = d[_] || (d[_] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[t] = [x, b]), d !== e));

                                        );
                                    return (b -= r) === i || (b % i == 0 && 0 <= b / i);
                                }
                            };
                    },
                    PSEUDO: function (t, e) {
                        var n,
                            r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                        return r[_]
                            ? r(e)
                            : 1 < r.length
                                ? ((n = [t, t, "", e]),
                                    i.setFilters.hasOwnProperty(t.toLowerCase())
                                        ? ut(function (t, n) {
                                            for (var i, o = r(t, e), a = o.length; a--;) t[(i = N(t, o[a]))] = !(n[i] = o[a]);
                                        })
                                        : function (t) {
                                            return r(t, 0, n);
                                        })
                                : r;
                    },
                },
                pseudos: {
                    not: ut(function (t) {
                        var e = [],
                            n = [],
                            i = s(t.replace(F, "$1"));
                        return i[_]
                            ? ut(function (t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--;) (o = a[s]) && (t[s] = !(e[s] = o));
                            })
                            : function (t, r, o) {
                                return (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop();
                            };
                    }),
                    has: ut(function (t) {
                        return function (e) {
                            return 0 < st(t, e).length;
                        };
                    }),
                    contains: ut(function (t) {
                        return (
                            (t = t.replace(et, nt)),
                            function (e) {
                                return -1 < (e.textContent || r(e)).indexOf(t);
                            }
                        );
                    }),
                    lang: ut(function (t) {
                        return (
                            Y.test(t || "") || st.error("unsupported lang: " + t),
                            (t = t.replace(et, nt).toLowerCase()),
                            function (e) {
                                var n;
                                do {
                                    if ((n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id;
                    },
                    root: function (t) {
                        return t === h;
                    },
                    focus: function (t) {
                        return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: mt(!1),
                    disabled: mt(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (t) {
                        return !i.pseudos.empty(t);
                    },
                    header: function (t) {
                        return Q.test(t.nodeName);
                    },
                    input: function (t) {
                        return K.test(t.nodeName);
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && "button" === t.type) || "button" === e;
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: gt(function () {
                        return [0];
                    }),
                    last: gt(function (t, e) {
                        return [e - 1];
                    }),
                    eq: gt(function (t, e, n) {
                        return [n < 0 ? n + e : n];
                    }),
                    even: gt(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t;
                    }),
                    odd: gt(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t;
                    }),
                    lt: gt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                        return t;
                    }),
                    gt: gt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t;
                    }),
                },
            }).pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[e] = ft(e);
        for (e in { submit: !0, reset: !0 }) i.pseudos[e] = ht(e);
        function yt() { }
        function bt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i;
        }
        function _t(t, e, n) {
            var i = e.dir,
                r = e.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = k++;
            return e.first
                ? function (e, n, r) {
                    for (; (e = e[i]);) if (1 === e.nodeType || a) return t(e, n, r);
                    return !1;
                }
                : function (e, n, l) {
                    var u,
                        c,
                        p,
                        d = [x, s];
                    if (l) {
                        for (; (e = e[i]);) if ((1 === e.nodeType || a) && t(e, n, l)) return !0;
                    } else
                        for (; (e = e[i]);)
                            if (1 === e.nodeType || a)
                                if (((c = (p = e[_] || (e[_] = {}))[e.uniqueID] || (p[e.uniqueID] = {})), r && r === e.nodeName.toLowerCase())) e = e[i] || e;
                                else {
                                    if ((u = c[o]) && u[0] === x && u[1] === s) return (d[2] = u[2]);
                                    if (((c[o] = d)[2] = t(e, n, l))) return !0;
                                }
                    return !1;
                };
        }
        function wt(t) {
            return 1 < t.length
                ? function (e, n, i) {
                    for (var r = t.length; r--;) if (!t[r](e, n, i)) return !1;
                    return !0;
                }
                : t[0];
        }
        function xt(t, e, n, i, r) {
            for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++) (o = t[s]) && ((n && !n(o, i, r)) || (a.push(o), u && e.push(s)));
            return a;
        }
        function kt(t, e, n, i, r, o) {
            return (
                i && !i[_] && (i = kt(i)),
                r && !r[_] && (r = kt(r, o)),
                ut(function (o, a, s, l) {
                    var u,
                        c,
                        p,
                        d = [],
                        f = [],
                        h = a.length,
                        m =
                            o ||
                            (function (t, e, n) {
                                for (var i = 0, r = e.length; i < r; i++) st(t, e[i], n);
                                return n;
                            })(e || "*", s.nodeType ? [s] : s, []),
                        g = !t || (!o && e) ? m : xt(m, d, t, s, l),
                        v = n ? (r || (o ? t : h || i) ? [] : a) : g;
                    if ((n && n(g, v, s, l), i)) for (u = xt(v, f), i(u, [], s, l), c = u.length; c--;) (p = u[c]) && (v[f[c]] = !(g[f[c]] = p));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = v.length; c--;) (p = v[c]) && u.push((g[c] = p));
                                r(null, (v = []), u, l);
                            }
                            for (c = v.length; c--;) (p = v[c]) && -1 < (u = r ? N(o, p) : d[c]) && (o[u] = !(a[u] = p));
                        }
                    } else (v = xt(v === a ? v.splice(h, v.length) : v)), r ? r(null, a, v, l) : M.apply(a, v);
                })
            );
        }
        function Tt(t) {
            for (
                var e,
                n,
                r,
                o = t.length,
                a = i.relative[t[0].type],
                s = a || i.relative[" "],
                l = a ? 1 : 0,
                c = _t(
                    function (t) {
                        return t === e;
                    },
                    s,
                    !0
                ),
                p = _t(
                    function (t) {
                        return -1 < N(e, t);
                    },
                    s,
                    !0
                ),
                d = [
                    function (t, n, i) {
                        var r = (!a && (i || n !== u)) || ((e = n).nodeType ? c(t, n, i) : p(t, n, i));
                        return (e = null), r;
                    },
                ];
                l < o;
                l++
            )
                if ((n = i.relative[t[l].type])) d = [_t(wt(d), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
                        for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                        return kt(1 < l && wt(d), 1 < l && bt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(F, "$1"), n, l < r && Tt(t.slice(l, r)), r < o && Tt((t = t.slice(r))), r < o && bt(t));
                    }
                    d.push(n);
                }
            return wt(d);
        }
        return (
            (yt.prototype = i.filters = i.pseudos),
            (i.setFilters = new yt()),
            (a = st.tokenize = function (t, e) {
                var n,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c = C[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (s = t, l = [], u = i.preFilter; s;) {
                    for (a in ((n && !(r = I.exec(s))) || (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                        (n = !1),
                        (r = W.exec(s)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(F, " ") }), (s = s.slice(n.length))),
                        i.filter))
                        !(r = V[a].exec(s)) || (u[a] && !(r = u[a](r))) || ((n = r.shift()), o.push({ value: n, type: a, matches: r }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return e ? s.length : s ? st.error(t) : C(t, l).slice(0);
            }),
            (s = st.compile = function (t, e) {
                var n,
                    r,
                    o,
                    s,
                    l,
                    c,
                    p = [],
                    h = [],
                    g = P[t + " "];
                if (!g) {
                    for (e || (e = a(t)), n = e.length; n--;) (g = Tt(e[n]))[_] ? p.push(g) : h.push(g);
                    (g = P(
                        t,
                        ((r = h),
                            (s = 0 < (o = p).length),
                            (l = 0 < r.length),
                            (c = function (t, e, n, a, c) {
                                var p,
                                    h,
                                    g,
                                    v = 0,
                                    y = "0",
                                    b = t && [],
                                    _ = [],
                                    w = u,
                                    k = t || (l && i.find.TAG("*", c)),
                                    T = (x += null == w ? 1 : Math.random() || 0.1),
                                    C = k.length;
                                for (c && (u = e == f || e || c); y !== C && null != (p = k[y]); y++) {
                                    if (l && p) {
                                        for (h = 0, e || p.ownerDocument == f || (d(p), (n = !m)); (g = r[h++]);)
                                            if (g(p, e || f, n)) {
                                                a.push(p);
                                                break;
                                            }
                                        c && (x = T);
                                    }
                                    s && ((p = !g && p) && v--, t && b.push(p));
                                }
                                if (((v += y), s && y !== v)) {
                                    for (h = 0; (g = o[h++]);) g(b, _, e, n);
                                    if (t) {
                                        if (0 < v) for (; y--;) b[y] || _[y] || (_[y] = O.call(a));
                                        _ = xt(_);
                                    }
                                    M.apply(a, _), c && !t && 0 < _.length && 1 < v + o.length && st.uniqueSort(a);
                                }
                                return c && ((x = T), (u = w)), b;
                            }),
                            s ? ut(c) : c)
                    )).selector = t;
                }
                return g;
            }),
            (l = st.select = function (t, e, n, r) {
                var o,
                    l,
                    u,
                    c,
                    p,
                    d = "function" == typeof t && t,
                    f = !r && a((t = d.selector || t));
                if (((n = n || []), 1 === f.length)) {
                    if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                        d && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                    }
                    for (o = V.needsContext.test(t) ? 0 : l.length; o-- && ((u = l[o]), !i.relative[(c = u.type)]);)
                        if ((p = i.find[c]) && (r = p(u.matches[0].replace(et, nt), (tt.test(l[0].type) && vt(e.parentNode)) || e))) {
                            if ((l.splice(o, 1), !(t = r.length && bt(l)))) return M.apply(n, r), n;
                            break;
                        }
                }
                return (d || s(t, f))(r, e, !m, n, !e || (tt.test(t) && vt(e.parentNode)) || e), n;
            }),
            (n.sortStable = _.split("").sort(S).join("") === _),
            (n.detectDuplicates = !!p),
            d(),
            (n.sortDetached = ct(function (t) {
                return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
            })),
            ct(function (t) {
                return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
            }) ||
            pt("type|href|height|width", function (t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
            (n.attributes &&
                ct(function (t) {
                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                })) ||
            pt("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
            }),
            ct(function (t) {
                return null == t.getAttribute("disabled");
            }) ||
            pt($, function (t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
            }),
            st
        );
    })(t);
    (w.find = k), (w.expr = k.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = k.uniqueSort), (w.text = k.getText), (w.isXMLDoc = k.isXML), (w.contains = k.contains), (w.escapeSelector = k.escape);
    var T = function (t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (r && w(t).is(n)) break;
                i.push(t);
            }
        return i;
    },
        C = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
        },
        P = w.expr.match.needsContext;
    function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function E(t, e, n) {
        return h(e)
            ? w.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n;
            })
            : e.nodeType
                ? w.grep(t, function (t) {
                    return (t === e) !== n;
                })
                : "string" != typeof e
                    ? w.grep(t, function (t) {
                        return -1 < s.call(e, t) !== n;
                    })
                    : w.filter(e, t, n);
    }
    (w.filter = function (t, e, n) {
        var i = e[0];
        return (
            n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType
                ? w.find.matchesSelector(i, t)
                    ? [i]
                    : []
                : w.find.matches(
                    t,
                    w.grep(e, function (t) {
                        return 1 === t.nodeType;
                    })
                )
        );
    }),
        w.fn.extend({
            find: function (t) {
                var e,
                    n,
                    i = this.length,
                    r = this;
                if ("string" != typeof t)
                    return this.pushStack(
                        w(t).filter(function () {
                            for (e = 0; e < i; e++) if (w.contains(r[e], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, r[e], n);
                return 1 < i ? w.uniqueSort(n) : n;
            },
            filter: function (t) {
                return this.pushStack(E(this, t || [], !1));
            },
            not: function (t) {
                return this.pushStack(E(this, t || [], !0));
            },
            is: function (t) {
                return !!E(this, "string" == typeof t && P.test(t) ? w(t) : t || [], !1).length;
            },
        });
    var D,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (((n = n || D), "string" == typeof t)) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || (!i[1] && e)) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (((e = e instanceof w ? e[0] : e), w.merge(this, w.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : g, !0)), S.test(i[1]) && w.isPlainObject(e))) for (i in e) h(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this;
            }
            return (r = g.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
        }
        return t.nodeType ? ((this[0] = t), (this.length = 1), this) : h(t) ? (void 0 !== n.ready ? n.ready(t) : t(w)) : w.makeArray(t, this);
    }).prototype = w.fn),
        (D = w(g));
    var j = /^(?:parents|prev(?:Until|All))/,
        M = { children: !0, contents: !0, next: !0, prev: !0 };
    function L(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;);
        return t;
    }
    w.fn.extend({
        has: function (t) {
            var e = w(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++) if (w.contains(this, e[t])) return !0;
            });
        },
        closest: function (t, e) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof t && w(t);
            if (!P.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
        },
        index: function (t) {
            return t ? ("string" == typeof t ? s.call(w(t), this[0]) : s.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (t, e) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))));
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        },
    }),
        w.each(
            {
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                    return T(t, "parentNode");
                },
                parentsUntil: function (t, e, n) {
                    return T(t, "parentNode", n);
                },
                next: function (t) {
                    return L(t, "nextSibling");
                },
                prev: function (t) {
                    return L(t, "previousSibling");
                },
                nextAll: function (t) {
                    return T(t, "nextSibling");
                },
                prevAll: function (t) {
                    return T(t, "previousSibling");
                },
                nextUntil: function (t, e, n) {
                    return T(t, "nextSibling", n);
                },
                prevUntil: function (t, e, n) {
                    return T(t, "previousSibling", n);
                },
                siblings: function (t) {
                    return C((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return C(t.firstChild);
                },
                contents: function (t) {
                    return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (A(t, "template") && (t = t.content || t), w.merge([], t.childNodes));
                },
            },
            function (t, e) {
                w.fn[t] = function (n, i) {
                    var r = w.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), 1 < this.length && (M[t] || w.uniqueSort(r), j.test(t) && r.reverse()), this.pushStack(r);
                };
            }
        );
    var N = /[^\x20\t\r\n\f]+/g;
    function $(t) {
        return t;
    }
    function B(t) {
        throw t;
    }
    function R(t, e, n, i) {
        var r;
        try {
            t && h((r = t.promise)) ? r.call(t).done(e).fail(n) : t && h((r = t.then)) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i));
        } catch (t) {
            n.apply(void 0, [t]);
        }
    }
    (w.Callbacks = function (t) {
        var e, n;
        t =
            "string" == typeof t
                ? ((e = t),
                    (n = {}),
                    w.each(e.match(N) || [], function (t, e) {
                        n[e] = !0;
                    }),
                    n)
                : w.extend({}, t);
        var i,
            r,
            o,
            a,
            s = [],
            l = [],
            u = -1,
            c = function () {
                for (a = a || t.once, o = i = !0; l.length; u = -1) for (r = l.shift(); ++u < s.length;) !1 === s[u].apply(r[0], r[1]) && t.stopOnFalse && ((u = s.length), (r = !1));
                t.memory || (r = !1), (i = !1), a && (s = r ? [] : "");
            },
            p = {
                add: function () {
                    return (
                        s &&
                        (r && !i && ((u = s.length - 1), l.push(r)),
                            (function e(n) {
                                w.each(n, function (n, i) {
                                    h(i) ? (t.unique && p.has(i)) || s.push(i) : i && i.length && "string" !== b(i) && e(i);
                                });
                            })(arguments),
                            r && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (t, e) {
                            for (var n; -1 < (n = w.inArray(e, s, n));) s.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function (t) {
                    return t ? -1 < w.inArray(t, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = l = []), (s = r = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = l = []), r || i || (s = r = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (t, e) {
                    return a || ((e = [t, (e = e || []).slice ? e.slice() : e]), l.push(e), i || c()), this;
                },
                fire: function () {
                    return p.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return p;
    }),
        w.extend({
            Deferred: function (e) {
                var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                ],
                    i = "pending",
                    r = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (t) {
                            return r.then(null, t);
                        },
                        pipe: function () {
                            var t = arguments;
                            return w
                                .Deferred(function (e) {
                                    w.each(n, function (n, i) {
                                        var r = h(t[i[4]]) && t[i[4]];
                                        o[i[1]](function () {
                                            var t = r && r.apply(this, arguments);
                                            t && h(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments);
                                        });
                                    }),
                                        (t = null);
                                })
                                .promise();
                        },
                        then: function (e, i, r) {
                            var o = 0;
                            function a(e, n, i, r) {
                                return function () {
                                    var s = this,
                                        l = arguments,
                                        u = function () {
                                            var t, u;
                                            if (!(e < o)) {
                                                if ((t = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (u = t && ("object" == typeof t || "function" == typeof t) && t.then),
                                                    h(u)
                                                        ? r
                                                            ? u.call(t, a(o, n, $, r), a(o, n, B, r))
                                                            : (o++, u.call(t, a(o, n, $, r), a(o, n, B, r), a(o, n, $, n.notifyWith)))
                                                        : (i !== $ && ((s = void 0), (l = [t])), (r || n.resolveWith)(s, l));
                                            }
                                        },
                                        c = r
                                            ? u
                                            : function () {
                                                try {
                                                    u();
                                                } catch (t) {
                                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), o <= e + 1 && (i !== B && ((s = void 0), (l = [t])), n.rejectWith(s, l));
                                                }
                                            };
                                    e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c));
                                };
                            }
                            return w
                                .Deferred(function (t) {
                                    n[0][3].add(a(0, t, h(r) ? r : $, t.notifyWith)), n[1][3].add(a(0, t, h(e) ? e : $)), n[2][3].add(a(0, t, h(i) ? i : B));
                                })
                                .promise();
                        },
                        promise: function (t) {
                            return null != t ? w.extend(t, r) : r;
                        },
                    },
                    o = {};
                return (
                    w.each(n, function (t, e) {
                        var a = e[2],
                            s = e[5];
                        (r[e[1]] = a.add),
                            s &&
                            a.add(
                                function () {
                                    i = s;
                                },
                                n[3 - t][2].disable,
                                n[3 - t][3].disable,
                                n[0][2].lock,
                                n[0][3].lock
                            ),
                            a.add(e[3].fire),
                            (o[e[0]] = function () {
                                return o[e[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[e[0] + "With"] = a.fireWith);
                    }),
                    r.promise(o),
                    e && e.call(o, o),
                    o
                );
            },
            when: function (t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = r.call(arguments),
                    a = w.Deferred(),
                    s = function (t) {
                        return function (n) {
                            (i[t] = this), (o[t] = 1 < arguments.length ? r.call(arguments) : n), --e || a.resolveWith(i, o);
                        };
                    };
                if (e <= 1 && (R(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || h(o[n] && o[n].then))) return a.then();
                for (; n--;) R(o[n], s(n), a.reject);
                return a.promise();
            },
        });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && q.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
    }),
        (w.readyException = function (e) {
            t.setTimeout(function () {
                throw e;
            });
        });
    var z = w.Deferred();
    function H() {
        g.removeEventListener("DOMContentLoaded", H), t.removeEventListener("load", H), w.ready();
    }
    (w.fn.ready = function (t) {
        return (
            z.then(t).catch(function (t) {
                w.readyException(t);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== t && 0 < --w.readyWait) || z.resolveWith(g, [w]);
            },
        }),
        (w.ready.then = z.then),
        "complete" === g.readyState || ("loading" !== g.readyState && !g.documentElement.doScroll) ? t.setTimeout(w.ready) : (g.addEventListener("DOMContentLoaded", H), t.addEventListener("load", H));
    var F = function (t, e, n, i, r, o, a) {
        var s = 0,
            l = t.length,
            u = null == n;
        if ("object" === b(n)) for (s in ((r = !0), n)) F(t, e, s, n[s], !0, o, a);
        else if (
            void 0 !== i &&
            ((r = !0),
                h(i) || (a = !0),
                u &&
                (a
                    ? (e.call(t, i), (e = null))
                    : ((u = e),
                        (e = function (t, e, n) {
                            return u.call(w(t), n);
                        }))),
                e)
        )
            for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o;
    },
        I = /^-ms-/,
        W = /-([a-z])/g;
    function U(t, e) {
        return e.toUpperCase();
    }
    function X(t) {
        return t.replace(I, "ms-").replace(W, U);
    }
    var Y = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    function V() {
        this.expando = w.expando + V.uid++;
    }
    (V.uid = 1),
        (V.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || ((e = {}), Y(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
            },
            set: function (t, e, n) {
                var i,
                    r = this.cache(t);
                if ("string" == typeof e) r[X(e)] = n;
                else for (i in e) r[X(i)] = e[i];
                return r;
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)];
            },
            access: function (t, e, n) {
                return void 0 === e || (e && "string" == typeof e && void 0 === n) ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
            },
            remove: function (t, e) {
                var n,
                    i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in i ? [e] : e.match(N) || []).length;
                        for (; n--;) delete i[e[n]];
                    }
                    (void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !w.isEmptyObject(e);
            },
        });
    var G = new V(),
        K = new V(),
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function Z(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType)
            if (((i = "data-" + e.replace(J, "-$&").toLowerCase()), "string" == typeof (n = t.getAttribute(i)))) {
                try {
                    n = "true" === (r = n) || ("false" !== r && ("null" === r ? null : r === +r + "" ? +r : Q.test(r) ? JSON.parse(r) : r));
                } catch (t) { }
                K.set(t, e, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (t) {
            return K.hasData(t) || G.hasData(t);
        },
        data: function (t, e, n) {
            return K.access(t, e, n);
        },
        removeData: function (t, e) {
            K.remove(t, e);
        },
        _data: function (t, e, n) {
            return G.access(t, e, n);
        },
        _removeData: function (t, e) {
            G.remove(t, e);
        },
    }),
        w.fn.extend({
            data: function (t, e) {
                var n,
                    i,
                    r,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && ((r = K.get(o)), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = X(i.slice(5))), Z(o, i, r[i]));
                        G.set(o, "hasDataAttrs", !0);
                    }
                    return r;
                }
                return "object" == typeof t
                    ? this.each(function () {
                        K.set(this, t);
                    })
                    : F(
                        this,
                        function (e) {
                            var n;
                            if (o && void 0 === e) return void 0 !== (n = K.get(o, t)) || void 0 !== (n = Z(o, t)) ? n : void 0;
                            this.each(function () {
                                K.set(this, t, e);
                            });
                        },
                        null,
                        e,
                        1 < arguments.length,
                        null,
                        !0
                    );
            },
            removeData: function (t) {
                return this.each(function () {
                    K.remove(this, t);
                });
            },
        }),
        w.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return (e = (e || "fx") + "queue"), (i = G.get(t, e)), n && (!i || Array.isArray(n) ? (i = G.access(t, e, w.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = w.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = w._queueHooks(t, e);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                    ("fx" === e && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            t,
                            function () {
                                w.dequeue(t, e);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return (
                    G.get(t, n) ||
                    G.access(t, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            G.remove(t, [e + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return (
                    "string" != typeof t && ((e = t), (t = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], t)
                        : void 0 === e
                            ? this
                            : this.each(function () {
                                var n = w.queue(this, t, e);
                                w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t);
                            })
                );
            },
            dequeue: function (t) {
                return this.each(function () {
                    w.dequeue(this, t);
                });
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
                var n,
                    i = 1,
                    r = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --i || r.resolveWith(o, [o]);
                    };
                for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; a--;) (n = G.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(e);
            },
        });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        it = g.documentElement,
        rt = function (t) {
            return w.contains(t.ownerDocument, t);
        },
        ot = { composed: !0 };
    it.getRootNode &&
        (rt = function (t) {
            return w.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument;
        });
    var at = function (t, e) {
        return "none" === (t = e || t).style.display || ("" === t.style.display && rt(t) && "none" === w.css(t, "display"));
    };
    function st(t, e, n, i) {
        var r,
            o,
            a = 20,
            s = i
                ? function () {
                    return i.cur();
                }
                : function () {
                    return w.css(t, e, "");
                },
            l = s(),
            u = (n && n[3]) || (w.cssNumber[e] ? "" : "px"),
            c = t.nodeType && (w.cssNumber[e] || ("px" !== u && +l)) && et.exec(w.css(t, e));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) w.style(t, e, c + u), (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), w.style(t, e, c + u), (n = n || []);
        }
        return n && ((c = +c || +l || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = r))), r;
    }
    var lt = {};
    function ut(t, e) {
        for (var n, i, r, o, a, s, l, u = [], c = 0, p = t.length; c < p; c++)
            (i = t[c]).style &&
                ((n = i.style.display),
                    e
                        ? ("none" === n && ((u[c] = G.get(i, "display") || null), u[c] || (i.style.display = "")),
                            "" === i.style.display &&
                            at(i) &&
                            (u[c] =
                                ((l = a = o = void 0),
                                    (a = (r = i).ownerDocument),
                                    (s = r.nodeName),
                                    (l = lt[s]) || ((o = a.body.appendChild(a.createElement(s))), (l = w.css(o, "display")), o.parentNode.removeChild(o), "none" === l && (l = "block"), (lt[s] = l)))))
                        : "none" !== n && ((u[c] = "none"), G.set(i, "display", n)));
        for (c = 0; c < p; c++) null != u[c] && (t[c].style.display = u[c]);
        return t;
    }
    w.fn.extend({
        show: function () {
            return ut(this, !0);
        },
        hide: function () {
            return ut(this);
        },
        toggle: function (t) {
            return "boolean" == typeof t
                ? t
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    at(this) ? w(this).show() : w(this).hide();
                });
        },
    });
    var ct,
        pt,
        dt = /^(?:checkbox|radio)$/i,
        ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ht = /^$|^module$|\/(?:java|ecma)script/i;
    (ct = g.createDocumentFragment().appendChild(g.createElement("div"))),
        (pt = g.createElement("input")).setAttribute("type", "radio"),
        pt.setAttribute("checked", "checked"),
        pt.setAttribute("name", "t"),
        ct.appendChild(pt),
        (f.checkClone = ct.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ct.innerHTML = "<textarea>x</textarea>"),
        (f.noCloneChecked = !!ct.cloneNode(!0).lastChild.defaultValue),
        (ct.innerHTML = "<option></option>"),
        (f.option = !!ct.lastChild);
    var mt = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function gt(t, e) {
        var n;
        return (n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && A(t, e)) ? w.merge([t], n) : n;
    }
    function vt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"));
    }
    (mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead), (mt.th = mt.td), f.option || (mt.optgroup = mt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var yt = /<|&#?\w+;/;
    function bt(t, e, n, i, r) {
        for (var o, a, s, l, u, c, p = e.createDocumentFragment(), d = [], f = 0, h = t.length; f < h; f++)
            if ((o = t[f]) || 0 === o)
                if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (yt.test(o)) {
                    for (a = a || p.appendChild(e.createElement("div")), s = (ft.exec(o) || ["", ""])[1].toLowerCase(), l = mt[s] || mt._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
                    w.merge(d, a.childNodes), ((a = p.firstChild).textContent = "");
                } else d.push(e.createTextNode(o));
        for (p.textContent = "", f = 0; (o = d[f++]);)
            if (i && -1 < w.inArray(o, i)) r && r.push(o);
            else if (((u = rt(o)), (a = gt(p.appendChild(o), "script")), u && vt(a), n)) for (c = 0; (o = a[c++]);) ht.test(o.type || "") && n.push(o);
        return p;
    }
    var _t = /^key/,
        wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xt = /^([^.]*)(?:\.(.+)|)/;
    function kt() {
        return !0;
    }
    function Tt() {
        return !1;
    }
    function Ct(t, e) {
        return (
            (t ===
                (function () {
                    try {
                        return g.activeElement;
                    } catch (t) { }
                })()) ==
            ("focus" === e)
        );
    }
    function Pt(t, e, n, i, r, o) {
        var a, s;
        if ("object" == typeof e) {
            for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), e)) Pt(t, s, n, i, e[s], o);
            return t;
        }
        if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Tt;
        else if (!r) return t;
        return (
            1 === o &&
            ((a = r),
                ((r = function (t) {
                    return w().off(t), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            t.each(function () {
                w.event.add(this, e, r, i, n);
            })
        );
    }
    function At(t, e, n) {
        n
            ? (G.set(t, e, !1),
                w.event.add(t, e, {
                    namespace: !1,
                    handler: function (t) {
                        var i,
                            o,
                            a = G.get(this, e);
                        if (1 & t.isTrigger && this[e]) {
                            if (a.length) (w.event.special[e] || {}).delegateType && t.stopPropagation();
                            else if (((a = r.call(arguments)), G.set(this, e, a), (i = n(this, e)), this[e](), a !== (o = G.get(this, e)) || i ? G.set(this, e, !1) : (o = {}), a !== o))
                                return t.stopImmediatePropagation(), t.preventDefault(), o.value;
                        } else a.length && (G.set(this, e, { value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this) }), t.stopImmediatePropagation());
                    },
                }))
            : void 0 === G.get(t, e) && w.event.add(t, e, kt);
    }
    (w.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o,
                a,
                s,
                l,
                u,
                c,
                p,
                d,
                f,
                h,
                m,
                g = G.get(t);
            if (Y(t))
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && w.find.matchesSelector(it, r),
                    n.guid || (n.guid = w.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (a = g.handle) ||
                    (a = g.handle = function (e) {
                        return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0;
                    }),
                    u = (e = (e || "").match(N) || [""]).length;
                    u--;

                )
                    (f = m = (s = xt.exec(e[u]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        f &&
                        ((p = w.event.special[f] || {}),
                            (f = (r ? p.delegateType : p.bindType) || f),
                            (p = w.event.special[f] || {}),
                            (c = w.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && w.expr.match.needsContext.test(r), namespace: h.join(".") }, o)),
                            (d = l[f]) || (((d = l[f] = []).delegateCount = 0), (p.setup && !1 !== p.setup.call(t, i, h, a)) || (t.addEventListener && t.addEventListener(f, a))),
                            p.add && (p.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                            r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                            (w.event.global[f] = !0));
        },
        remove: function (t, e, n, i, r) {
            var o,
                a,
                s,
                l,
                u,
                c,
                p,
                d,
                f,
                h,
                m,
                g = G.hasData(t) && G.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(N) || [""]).length; u--;)
                    if (((f = m = (s = xt.exec(e[u]) || [])[1]), (h = (s[2] || "").split(".").sort()), f)) {
                        for (p = w.event.special[f] || {}, d = l[(f = (i ? p.delegateType : p.bindType) || f)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;)
                            (c = d[o]),
                                (!r && m !== c.origType) ||
                                (n && n.guid !== c.guid) ||
                                (s && !s.test(c.namespace)) ||
                                (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                                (d.splice(o, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(t, c));
                        a && !d.length && ((p.teardown && !1 !== p.teardown.call(t, h, g.handle)) || w.removeEvent(t, f, g.handle), delete l[f]);
                    } else for (f in l) w.event.remove(t, f + e[u], n, i, !0);
                w.isEmptyObject(l) && G.remove(t, "handle events");
            }
        },
        dispatch: function (t) {
            var e,
                n,
                i,
                r,
                o,
                a,
                s = new Array(arguments.length),
                l = w.event.fix(t),
                u = (G.get(this, "events") || Object.create(null))[l.type] || [],
                c = w.event.special[l.type] || {};
            for (s[0] = l, e = 1; e < arguments.length; e++) s[e] = arguments[e];
            if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
                for (a = w.event.handlers.call(this, l, u), e = 0; (r = a[e++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();)
                        (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                            ((l.handleObj = o), (l.data = o.data), void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result;
            }
        },
        handlers: function (t, e) {
            var n,
                i,
                r,
                o,
                a,
                s = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[(r = (i = e[n]).selector + " ")] && (a[r] = i.needsContext ? -1 < w(r, this).index(u) : w.find(r, this, null, [u]).length), a[r] && o.push(i);
                        o.length && s.push({ elem: u, handlers: o });
                    }
            return (u = this), l < e.length && s.push({ elem: u, handlers: e.slice(l) }), s;
        },
        addProp: function (t, e) {
            Object.defineProperty(w.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: h(e)
                    ? function () {
                        if (this.originalEvent) return e(this.originalEvent);
                    }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (t) {
            return t[w.expando] ? t : new w.Event(t);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && A(e, "input") && At(e, "click", kt), !1;
                },
                trigger: function (t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && A(e, "input") && At(e, "click"), !0;
                },
                _default: function (t) {
                    var e = t.target;
                    return (dt.test(e.type) && e.click && A(e, "input") && G.get(e, "click")) || A(e, "a");
                },
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                },
            },
        },
    }),
        (w.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
        }),
        (w.Event = function (t, e) {
            if (!(this instanceof w.Event)) return new w.Event(t, e);
            t && t.type
                ? ((this.originalEvent = t),
                    (this.type = t.type),
                    (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? kt : Tt),
                    (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                    (this.currentTarget = t.currentTarget),
                    (this.relatedTarget = t.relatedTarget))
                : (this.type = t),
                e && w.extend(this, e),
                (this.timeStamp = (t && t.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: Tt,
            isPropagationStopped: Tt,
            isImmediatePropagationStopped: Tt,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = kt), t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = kt), t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = kt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (t) {
                    var e = t.button;
                    return null == t.which && _t.test(t.type) ? (null != t.charCode ? t.charCode : t.keyCode) : !t.which && void 0 !== e && wt.test(t.type) ? (1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0) : t.which;
                },
            },
            w.event.addProp
        ),
        w.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            w.event.special[t] = {
                setup: function () {
                    return At(this, t, Ct), !1;
                },
                trigger: function () {
                    return At(this, t), !0;
                },
                delegateType: e,
            };
        }),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
            w.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n,
                        i = t.relatedTarget,
                        r = t.handleObj;
                    return (i && (i === this || w.contains(this, i))) || ((t.type = r.origType), (n = r.handler.apply(this, arguments)), (t.type = e)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (t, e, n, i) {
                return Pt(this, t, e, n, i);
            },
            one: function (t, e, n, i) {
                return Pt(this, t, e, n, i, 1);
            },
            off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this;
                }
                return (
                    (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                    !1 === n && (n = Tt),
                    this.each(function () {
                        w.event.remove(this, t, n, e);
                    })
                );
            },
        });
    var St = /<script|<style|<link/i,
        Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ot(t, e) {
        return (A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0]) || t;
    }
    function jt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function Mt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
    }
    function Lt(t, e) {
        var n, i, r, o, a, s;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (s = G.get(t).events)) for (r in (G.remove(e, "handle events"), s)) for (n = 0, i = s[r].length; n < i; n++) w.event.add(e, r, s[r][n]);
            K.hasData(t) && ((o = K.access(t)), (a = w.extend({}, o)), K.set(e, a));
        }
    }
    function Nt(t, e, n, i) {
        e = o(e);
        var r,
            a,
            s,
            l,
            u,
            c,
            p = 0,
            d = t.length,
            m = d - 1,
            g = e[0],
            v = h(g);
        if (v || (1 < d && "string" == typeof g && !f.checkClone && Et.test(g)))
            return t.each(function (r) {
                var o = t.eq(r);
                v && (e[0] = g.call(this, r, o.html())), Nt(o, e, n, i);
            });
        if (d && ((a = (r = bt(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === r.childNodes.length && (r = a), a || i)) {
            for (l = (s = w.map(gt(r, "script"), jt)).length; p < d; p++) (u = r), p !== m && ((u = w.clone(u, !0, !0)), l && w.merge(s, gt(u, "script"))), n.call(t[p], u, p);
            if (l)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Mt), p = 0; p < l; p++)
                    (u = s[p]),
                        ht.test(u.type || "") &&
                        !G.access(u, "globalEval") &&
                        w.contains(c, u) &&
                        (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c) : y(u.textContent.replace(Dt, ""), u, c));
        }
        return t;
    }
    function $t(t, e, n) {
        for (var i, r = e ? w.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(gt(i)), i.parentNode && (n && rt(i) && vt(gt(i, "script")), i.parentNode.removeChild(i));
        return t;
    }
    w.extend({
        htmlPrefilter: function (t) {
            return t;
        },
        clone: function (t, e, n) {
            var i,
                r,
                o,
                a,
                s,
                l,
                u,
                c = t.cloneNode(!0),
                p = rt(t);
            if (!(f.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || w.isXMLDoc(t)))
                for (a = gt(c), i = 0, r = (o = gt(t)).length; i < r; i++)
                    (s = o[i]), "input" === (u = (l = a[i]).nodeName.toLowerCase()) && dt.test(s.type) ? (l.checked = s.checked) : ("input" !== u && "textarea" !== u) || (l.defaultValue = s.defaultValue);
            if (e)
                if (n) for (o = o || gt(t), a = a || gt(c), i = 0, r = o.length; i < r; i++) Lt(o[i], a[i]);
                else Lt(t, c);
            return 0 < (a = gt(c, "script")).length && vt(a, !p && gt(t, "script")), c;
        },
        cleanData: function (t) {
            for (var e, n, i, r = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (Y(n)) {
                    if ((e = n[G.expando])) {
                        if (e.events) for (i in e.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
                        n[G.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (t) {
                return $t(this, t, !0);
            },
            remove: function (t) {
                return $t(this, t);
            },
            text: function (t) {
                return F(
                    this,
                    function (t) {
                        return void 0 === t
                            ? w.text(this)
                            : this.empty().each(function () {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                            });
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            append: function () {
                return Nt(this, arguments, function (t) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ot(this, t).appendChild(t);
                });
            },
            prepend: function () {
                return Nt(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Ot(this, t);
                        e.insertBefore(t, e.firstChild);
                    }
                });
            },
            before: function () {
                return Nt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function () {
                return Nt(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(gt(t, !1)), (t.textContent = ""));
                return this;
            },
            clone: function (t, e) {
                return (
                    (t = null != t && t),
                    (e = null == e ? t : e),
                    this.map(function () {
                        return w.clone(this, t, e);
                    })
                );
            },
            html: function (t) {
                return F(
                    this,
                    function (t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !St.test(t) && !mt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = w.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(gt(e, !1)), (e.innerHTML = t));
                                e = 0;
                            } catch (t) { }
                        }
                        e && this.empty().append(t);
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            replaceWith: function () {
                var t = [];
                return Nt(
                    this,
                    arguments,
                    function (e) {
                        var n = this.parentNode;
                        w.inArray(this, t) < 0 && (w.cleanData(gt(this)), n && n.replaceChild(e, this));
                    },
                    t
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
            w.fn[t] = function (t) {
                for (var n, i = [], r = w(t), o = r.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), w(r[s])[e](n), a.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var Bt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Rt = function (e) {
            var n = e.ownerDocument.defaultView;
            return (n && n.opener) || (n = t), n.getComputedStyle(e);
        },
        qt = function (t, e, n) {
            var i,
                r,
                o = {};
            for (r in e) (o[r] = t.style[r]), (t.style[r] = e[r]);
            for (r in ((i = n.call(t)), e)) t.style[r] = o[r];
            return i;
        },
        zt = new RegExp(nt.join("|"), "i");
    function Ht(t, e, n) {
        var i,
            r,
            o,
            a,
            s = t.style;
        return (
            (n = n || Rt(t)) &&
            ("" !== (a = n.getPropertyValue(e) || n[e]) || rt(t) || (a = w.style(t, e)),
                !f.pixelBoxStyles() && Bt.test(a) && zt.test(e) && ((i = s.width), (r = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = i), (s.minWidth = r), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function Ft(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (c) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    it.appendChild(u).appendChild(c);
                var e = t.getComputedStyle(c);
                (i = "1%" !== e.top),
                    (l = 12 === n(e.marginLeft)),
                    (c.style.right = "60%"),
                    (a = 36 === n(e.right)),
                    (r = 36 === n(e.width)),
                    (c.style.position = "absolute"),
                    (o = 12 === n(c.offsetWidth / 3)),
                    it.removeChild(u),
                    (c = null);
            }
        }
        function n(t) {
            return Math.round(parseFloat(t));
        }
        var i,
            r,
            o,
            a,
            s,
            l,
            u = g.createElement("div"),
            c = g.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
                (c.cloneNode(!0).style.backgroundClip = ""),
                (f.clearCloneStyle = "content-box" === c.style.backgroundClip),
                w.extend(f, {
                    boxSizingReliable: function () {
                        return e(), r;
                    },
                    pixelBoxStyles: function () {
                        return e(), a;
                    },
                    pixelPosition: function () {
                        return e(), i;
                    },
                    reliableMarginLeft: function () {
                        return e(), l;
                    },
                    scrollboxSize: function () {
                        return e(), o;
                    },
                    reliableTrDimensions: function () {
                        var e, n, i, r;
                        return (
                            null == s &&
                            ((e = g.createElement("table")),
                                (n = g.createElement("tr")),
                                (i = g.createElement("div")),
                                (e.style.cssText = "position:absolute;left:-11111px"),
                                (n.style.height = "1px"),
                                (i.style.height = "9px"),
                                it.appendChild(e).appendChild(n).appendChild(i),
                                (r = t.getComputedStyle(n)),
                                (s = 3 < parseInt(r.height)),
                                it.removeChild(e)),
                            s
                        );
                    },
                }));
    })();
    var It = ["Webkit", "Moz", "ms"],
        Wt = g.createElement("div").style,
        Ut = {};
    function Xt(t) {
        return (
            w.cssProps[t] ||
            Ut[t] ||
            (t in Wt
                ? t
                : (Ut[t] =
                    (function (t) {
                        for (var e = t[0].toUpperCase() + t.slice(1), n = It.length; n--;) if ((t = It[n] + e) in Wt) return t;
                    })(t) || t))
        );
    }
    var Yt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^--/,
        Gt = { position: "absolute", visibility: "hidden", display: "block" },
        Kt = { letterSpacing: "0", fontWeight: "400" };
    function Qt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function Jt(t, e, n, i, r, o) {
        var a = "width" === e ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += w.css(t, n + nt[a], !0, r)),
                i
                    ? ("content" === n && (l -= w.css(t, "padding" + nt[a], !0, r)), "margin" !== n && (l -= w.css(t, "border" + nt[a] + "Width", !0, r)))
                    : ((l += w.css(t, "padding" + nt[a], !0, r)), "padding" !== n ? (l += w.css(t, "border" + nt[a] + "Width", !0, r)) : (s += w.css(t, "border" + nt[a] + "Width", !0, r)));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - s - 0.5)) || 0), l;
    }
    function Zt(t, e, n) {
        var i = Rt(t),
            r = (!f.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, i),
            o = r,
            a = Ht(t, e, i),
            s = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Bt.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!f.boxSizingReliable() && r) || (!f.reliableTrDimensions() && A(t, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === w.css(t, "display", !1, i))) &&
            t.getClientRects().length &&
            ((r = "border-box" === w.css(t, "boxSizing", !1, i)), (o = s in t) && (a = t[s])),
            (a = parseFloat(a) || 0) + Jt(t, e, n || (r ? "border" : "content"), o, i, a) + "px"
        );
    }
    function te(t, e, n, i, r) {
        return new te.prototype.init(t, e, n, i, r);
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Ht(t, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r,
                    o,
                    a,
                    s = X(e),
                    l = Vt.test(e),
                    u = t.style;
                if ((l || (e = Xt(s)), (a = w.cssHooks[e] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : u[e];
                "string" == (o = typeof n) && (r = et.exec(n)) && r[1] && ((n = st(t, e, r)), (o = "number")),
                    null != n &&
                    n == n &&
                    ("number" !== o || l || (n += (r && r[3]) || (w.cssNumber[s] ? "" : "px")),
                        f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(t, n, i))) || (l ? u.setProperty(e, n) : (u[e] = n)));
            }
        },
        css: function (t, e, n, i) {
            var r,
                o,
                a,
                s = X(e);
            return (
                Vt.test(e) || (e = Xt(s)),
                (a = w.cssHooks[e] || w.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)),
                void 0 === r && (r = Ht(t, e, i)),
                "normal" === r && e in Kt && (r = Kt[e]),
                "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
            );
        },
    }),
        w.each(["height", "width"], function (t, e) {
            w.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n)
                        return !Yt.test(w.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                            ? Zt(t, e, i)
                            : qt(t, Gt, function () {
                                return Zt(t, e, i);
                            });
                },
                set: function (t, n, i) {
                    var r,
                        o = Rt(t),
                        a = !f.scrollboxSize() && "absolute" === o.position,
                        s = (a || i) && "border-box" === w.css(t, "boxSizing", !1, o),
                        l = i ? Jt(t, e, i, s, o) : 0;
                    return (
                        s && a && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Jt(t, e, "border", !1, o) - 0.5)),
                        l && (r = et.exec(n)) && "px" !== (r[3] || "px") && ((t.style[e] = n), (n = w.css(t, e))),
                        Qt(0, n, l)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = Ft(f.reliableMarginLeft, function (t, e) {
            if (e)
                return (
                    (parseFloat(Ht(t, "marginLeft")) ||
                        t.getBoundingClientRect().left -
                        qt(t, { marginLeft: 0 }, function () {
                            return t.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (w.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + nt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r;
                },
            }),
                "margin" !== t && (w.cssHooks[t + e].set = Qt);
        }),
        w.fn.extend({
            css: function (t, e) {
                return F(
                    this,
                    function (t, e, n) {
                        var i,
                            r,
                            o = {},
                            a = 0;
                        if (Array.isArray(e)) {
                            for (i = Rt(t), r = e.length; a < r; a++) o[e[a]] = w.css(t, e[a], !1, i);
                            return o;
                        }
                        return void 0 !== n ? w.style(t, e, n) : w.css(t, e);
                    },
                    t,
                    e,
                    1 < arguments.length
                );
            },
        }),
        (((w.Tween = te).prototype = {
            constructor: te,
            init: function (t, e, n, i, r, o) {
                (this.elem = t), (this.prop = n), (this.easing = r || w.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var t = te.propHooks[this.prop];
                return t && t.get ? t.get(this) : te.propHooks._default.get(this);
            },
            run: function (t) {
                var e,
                    n = te.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                    (this.now = (this.end - this.start) * e + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : te.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = te.prototype),
        ((te.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (t) {
                    w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (!w.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)]) ? (t.elem[t.prop] = t.now) : w.style(t.elem, t.prop, t.now + t.unit);
                },
            },
        }).scrollTop = te.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
        }),
        (w.easing = {
            linear: function (t) {
                return t;
            },
            swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = te.prototype.init),
        (w.fx.step = {});
    var ee,
        ne,
        ie,
        re,
        oe = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;
    function se() {
        ne && (!1 === g.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(se) : t.setTimeout(se, w.fx.interval), w.fx.tick());
    }
    function le() {
        return (
            t.setTimeout(function () {
                ee = void 0;
            }),
            (ee = Date.now())
        );
    }
    function ue(t, e) {
        var n,
            i = 0,
            r = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = nt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r;
    }
    function ce(t, e, n) {
        for (var i, r = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), o = 0, a = r.length; o < a; o++) if ((i = r[o].call(n, e, t))) return i;
    }
    function pe(t, e, n) {
        var i,
            r,
            o = 0,
            a = pe.prefilters.length,
            s = w.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (r) return !1;
                for (var e = ee || le(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
                return s.notifyWith(t, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u]), !1);
            },
            u = s.promise({
                elem: t,
                props: w.extend({}, e),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ee || le(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = w.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i;
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this;
                },
            }),
            c = u.props;
        for (
            (function (t, e) {
                var n, i, r, o, a;
                for (n in t)
                    if (((r = e[(i = X(n))]), (o = t[n]), Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])), n !== i && ((t[i] = o), delete t[n]), (a = w.cssHooks[i]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete t[i], o)) (n in t) || ((t[n] = o[n]), (e[n] = r));
                    else e[i] = r;
            })(c, u.opts.specialEasing);
            o < a;
            o++
        )
            if ((i = pe.prefilters[o].call(u, t, c, u.opts))) return h(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return (
            w.map(c, ce, u),
            h(u.opts.start) && u.opts.start.call(t, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            w.fx.timer(w.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
            u
        );
    }
    (w.Animation = w.extend(pe, {
        tweeners: {
            "*": [
                function (t, e) {
                    var n = this.createTween(t, e);
                    return st(n.elem, t, et.exec(e), n), n;
                },
            ],
        },
        tweener: function (t, e) {
            h(t) ? ((e = t), (t = ["*"])) : (t = t.match(N));
            for (var n, i = 0, r = t.length; i < r; i++) (n = t[i]), (pe.tweeners[n] = pe.tweeners[n] || []), pe.tweeners[n].unshift(e);
        },
        prefilters: [
            function (t, e, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    p = "width" in e || "height" in e,
                    d = this,
                    f = {},
                    h = t.style,
                    m = t.nodeType && at(t),
                    g = G.get(t, "fxshow");
                for (i in (n.queue ||
                    (null == (a = w._queueHooks(t, "fx")).unqueued &&
                        ((a.unqueued = 0),
                            (s = a.empty.fire),
                            (a.empty.fire = function () {
                                a.unqueued || s();
                            })),
                        a.unqueued++,
                        d.always(function () {
                            d.always(function () {
                                a.unqueued--, w.queue(t, "fx").length || a.empty.fire();
                            });
                        })),
                    e))
                    if (((r = e[i]), oe.test(r))) {
                        if ((delete e[i], (o = o || "toggle" === r), r === (m ? "hide" : "show"))) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            m = !0;
                        }
                        f[i] = (g && g[i]) || w.style(t, i);
                    }
                if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(f))
                    for (i in (p &&
                        1 === t.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                            null == (u = g && g.display) && (u = G.get(t, "display")),
                            "none" === (c = w.css(t, "display")) && (u ? (c = u) : (ut([t], !0), (u = t.style.display || u), (c = w.css(t, "display")), ut([t]))),
                            ("inline" === c || ("inline-block" === c && null != u)) &&
                            "none" === w.css(t, "float") &&
                            (l ||
                                (d.done(function () {
                                    h.display = u;
                                }),
                                    null == u && ((c = h.display), (u = "none" === c ? "" : c))),
                                (h.display = "inline-block"))),
                        n.overflow &&
                        ((h.overflow = "hidden"),
                            d.always(function () {
                                (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                            })),
                        (l = !1),
                        f))
                        l ||
                            (g ? "hidden" in g && (m = g.hidden) : (g = G.access(t, "fxshow", { display: u })),
                                o && (g.hidden = !m),
                                m && ut([t], !0),
                                d.done(function () {
                                    for (i in (m || ut([t]), G.remove(t, "fxshow"), f)) w.style(t, i, f[i]);
                                })),
                            (l = ce(m ? g[i] : 0, i, d)),
                            i in g || ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (t, e) {
            e ? pe.prefilters.unshift(t) : pe.prefilters.push(t);
        },
    })),
        (w.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? w.extend({}, t) : { complete: n || (!n && e) || (h(t) && t), duration: t, easing: (n && e) || (e && !h(e) && e) };
            return (
                w.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in w.fx.speeds ? (i.duration = w.fx.speeds[i.duration]) : (i.duration = w.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    h(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
                }),
                i
            );
        }),
        w.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(at).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
            },
            animate: function (t, e, n, i) {
                var r = w.isEmptyObject(t),
                    o = w.speed(e, n, i),
                    a = function () {
                        var e = pe(this, w.extend({}, t), o);
                        (r || G.get(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n);
                };
                return (
                    "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                    e && this.queue(t || "fx", []),
                    this.each(function () {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = w.timers,
                            a = G.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else for (r in a) a[r] && a[r].stop && ae.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                        (!e && n) || w.dequeue(this, t);
                    })
                );
            },
            finish: function (t) {
                return (
                    !1 !== t && (t = t || "fx"),
                    this.each(function () {
                        var e,
                            n = G.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = w.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, w.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (t, e) {
            var n = w.fn[e];
            w.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ue(e, !0), t, i, r);
            };
        }),
        w.each({ slideDown: ue("show"), slideUp: ue("hide"), slideToggle: ue("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
            w.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var t,
                e = 0,
                n = w.timers;
            for (ee = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || w.fx.stop(), (ee = void 0);
        }),
        (w.fx.timer = function (t) {
            w.timers.push(t), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            ne || ((ne = !0), se());
        }),
        (w.fx.stop = function () {
            ne = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (e, n) {
            return (
                (e = (w.fx && w.fx.speeds[e]) || e),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                    var r = t.setTimeout(n, e);
                    i.stop = function () {
                        t.clearTimeout(r);
                    };
                })
            );
        }),
        (ie = g.createElement("input")),
        (re = g.createElement("select").appendChild(g.createElement("option"))),
        (ie.type = "checkbox"),
        (f.checkOn = "" !== ie.value),
        (f.optSelected = re.selected),
        ((ie = g.createElement("input")).value = "t"),
        (ie.type = "radio"),
        (f.radioValue = "t" === ie.value);
    var de,
        fe = w.expr.attrHandle;
    w.fn.extend({
        attr: function (t, e) {
            return F(this, w.attr, t, e, 1 < arguments.length);
        },
        removeAttr: function (t) {
            return this.each(function () {
                w.removeAttr(this, t);
            });
        },
    }),
        w.extend({
            attr: function (t, e, n) {
                var i,
                    r,
                    o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === t.getAttribute
                        ? w.prop(t, e, n)
                        : ((1 === o && w.isXMLDoc(t)) || (r = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? de : void 0)),
                            void 0 !== n
                                ? null === n
                                    ? void w.removeAttr(t, e)
                                    : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                                        ? i
                                        : (t.setAttribute(e, n + ""), n)
                                : r && "get" in r && null !== (i = r.get(t, e))
                                    ? i
                                    : null == (i = w.find.attr(t, e))
                                        ? void 0
                                        : i);
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!f.radioValue && "radio" === e && A(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e;
                        }
                    },
                },
            },
            removeAttr: function (t, e) {
                var n,
                    i = 0,
                    r = e && e.match(N);
                if (r && 1 === t.nodeType) for (; (n = r[i++]);) t.removeAttribute(n);
            },
        }),
        (de = {
            set: function (t, e, n) {
                return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = fe[e] || w.find.attr;
            fe[e] = function (t, e, i) {
                var r,
                    o,
                    a = e.toLowerCase();
                return i || ((o = fe[a]), (fe[a] = r), (r = null != n(t, e, i) ? a : null), (fe[a] = o)), r;
            };
        });
    var he = /^(?:input|select|textarea|button)$/i,
        me = /^(?:a|area)$/i;
    function ge(t) {
        return (t.match(N) || []).join(" ");
    }
    function ve(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function ye(t) {
        return Array.isArray(t) ? t : ("string" == typeof t && t.match(N)) || [];
    }
    w.fn.extend({
        prop: function (t, e) {
            return F(this, w.prop, t, e, 1 < arguments.length);
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[w.propFix[t] || t];
            });
        },
    }),
        w.extend({
            prop: function (t, e, n) {
                var i,
                    r,
                    o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(t)) || ((e = w.propFix[e] || e), (r = w.propHooks[e])),
                        void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t[e] = n)) : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = w.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : he.test(t.nodeName) || (me.test(t.nodeName) && t.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        f.optSelected ||
        (w.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
        }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        }),
        w.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l = 0;
                if (h(t))
                    return this.each(function (e) {
                        w(this).addClass(t.call(this, e, ve(this)));
                    });
                if ((e = ye(t)).length)
                    for (; (n = this[l++]);)
                        if (((r = ve(n)), (i = 1 === n.nodeType && " " + ge(r) + " "))) {
                            for (a = 0; (o = e[a++]);) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = ge(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l = 0;
                if (h(t))
                    return this.each(function (e) {
                        w(this).removeClass(t.call(this, e, ve(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = ye(t)).length)
                    for (; (n = this[l++]);)
                        if (((r = ve(n)), (i = 1 === n.nodeType && " " + ge(r) + " "))) {
                            for (a = 0; (o = e[a++]);) for (; -1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                            r !== (s = ge(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i
                    ? e
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : h(t)
                        ? this.each(function (n) {
                            w(this).toggleClass(t.call(this, n, ve(this), e), e);
                        })
                        : this.each(function () {
                            var e, r, o, a;
                            if (i) for (r = 0, o = w(this), a = ye(t); (e = a[r++]);) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                            else (void 0 !== t && "boolean" !== n) || ((e = ve(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""));
                        });
            },
            hasClass: function (t) {
                var e,
                    n,
                    i = 0;
                for (e = " " + t + " "; (n = this[i++]);) if (1 === n.nodeType && -1 < (" " + ge(ve(n)) + " ").indexOf(e)) return !0;
                return !1;
            },
        });
    var be = /\r/g;
    w.fn.extend({
        val: function (t) {
            var e,
                n,
                i,
                r = this[0];
            return arguments.length
                ? ((i = h(t)),
                    this.each(function (n) {
                        var r;
                        1 === this.nodeType &&
                            (null == (r = i ? t.call(this, n, w(this).val()) : t)
                                ? (r = "")
                                : "number" == typeof r
                                    ? (r += "")
                                    : Array.isArray(r) &&
                                    (r = w.map(r, function (t) {
                                        return null == t ? "" : t + "";
                                    })),
                                ((e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value")) || (this.value = r));
                    }))
                : r
                    ? (e = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value"))
                        ? n
                        : "string" == typeof (n = r.value)
                            ? n.replace(be, "")
                            : null == n
                                ? ""
                                : n
                    : void 0;
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = w.find.attr(t, "value");
                        return null != e ? e : ge(w.text(t));
                    },
                },
                select: {
                    get: function (t) {
                        var e,
                            n,
                            i,
                            r = t.options,
                            o = t.selectedIndex,
                            a = "select-one" === t.type,
                            s = a ? null : [],
                            l = a ? o + 1 : r.length;
                        for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (((e = w(n).val()), a)) return e;
                                s.push(e);
                            }
                        return s;
                    },
                    set: function (t, e) {
                        for (var n, i, r = t.options, o = w.makeArray(e), a = r.length; a--;) ((i = r[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
                        return n || (t.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return (t.checked = -1 < w.inArray(w(t).val(), e));
                },
            }),
                f.checkOn ||
                (w.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value;
                });
        }),
        (f.focusin = "onfocusin" in t);
    var _e = /^(?:focusinfocus|focusoutblur)$/,
        we = function (t) {
            t.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (e, n, i, r) {
            var o,
                a,
                s,
                l,
                u,
                p,
                d,
                f,
                v = [i || g],
                y = c.call(e, "type") ? e.type : e,
                b = c.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((a = f = s = i = i || g),
                    3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !_e.test(y + w.event.triggered) &&
                    (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
                        (u = y.indexOf(":") < 0 && "on" + y),
                        ((e = e[w.expando] ? e : new w.Event(y, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                        (e.namespace = b.join(".")),
                        (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (e.result = void 0),
                        e.target || (e.target = i),
                        (n = null == n ? [e] : w.makeArray(n, [e])),
                        (d = w.event.special[y] || {}),
                        r || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!r && !d.noBubble && !m(i)) {
                    for (l = d.delegateType || y, _e.test(l + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (s = a);
                    s === (i.ownerDocument || g) && v.push(s.defaultView || s.parentWindow || t);
                }
                for (o = 0; (a = v[o++]) && !e.isPropagationStopped();)
                    (f = a),
                        (e.type = 1 < o ? l : d.bindType || y),
                        (p = (G.get(a, "events") || Object.create(null))[e.type] && G.get(a, "handle")) && p.apply(a, n),
                        (p = u && a[u]) && p.apply && Y(a) && ((e.result = p.apply(a, n)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = y),
                    r ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                    !Y(i) ||
                    (u &&
                        h(i[y]) &&
                        !m(i) &&
                        ((s = i[u]) && (i[u] = null),
                            (w.event.triggered = y),
                            e.isPropagationStopped() && f.addEventListener(y, we),
                            i[y](),
                            e.isPropagationStopped() && f.removeEventListener(y, we),
                            (w.event.triggered = void 0),
                            s && (i[u] = s))),
                    e.result
                );
            }
        },
        simulate: function (t, e, n) {
            var i = w.extend(new w.Event(), n, { type: t, isSimulated: !0 });
            w.event.trigger(i, null, e);
        },
    }),
        w.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    w.event.trigger(t, e, this);
                });
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return w.event.trigger(t, e, n, !0);
            },
        }),
        f.focusin ||
        w.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var n = function (t) {
                w.event.simulate(e, t.target, w.event.fix(t));
            };
            w.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this.document || this,
                        r = G.access(i, e);
                    r || i.addEventListener(t, n, !0), G.access(i, e, (r || 0) + 1);
                },
                teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                        r = G.access(i, e) - 1;
                    r ? G.access(i, e, r) : (i.removeEventListener(t, n, !0), G.remove(i, e));
                },
            };
        });
    var xe = t.location,
        ke = { guid: Date.now() },
        Te = /\?/;
    w.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + e), n;
    };
    var Ce = /\[\]$/,
        Pe = /\r?\n/g,
        Ae = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;
    function Ee(t, e, n, i) {
        var r;
        if (Array.isArray(e))
            w.each(e, function (e, r) {
                n || Ce.test(t) ? i(t, r) : Ee(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i);
            });
        else if (n || "object" !== b(e)) i(t, e);
        else for (r in e) Ee(t + "[" + r + "]", e[r], n, i);
    }
    (w.param = function (t, e) {
        var n,
            i = [],
            r = function (t, e) {
                var n = h(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !w.isPlainObject(t)))
            w.each(t, function () {
                r(this.name, this.value);
            });
        else for (n in t) Ee(n, t[n], e, r);
        return i.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = w.prop(this, "elements");
                    return t ? w.makeArray(t) : this;
                })
                    .filter(function () {
                        var t = this.type;
                        return this.name && !w(this).is(":disabled") && Se.test(this.nodeName) && !Ae.test(t) && (this.checked || !dt.test(t));
                    })
                    .map(function (t, e) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                                ? w.map(n, function (t) {
                                    return { name: e.name, value: t.replace(Pe, "\r\n") };
                                })
                                : { name: e.name, value: n.replace(Pe, "\r\n") };
                    })
                    .get();
            },
        });
    var De = /%20/g,
        Oe = /#.*$/,
        je = /([?&])_=[^&]*/,
        Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Le = /^(?:GET|HEAD)$/,
        Ne = /^\/\//,
        $e = {},
        Be = {},
        Re = "*/".concat("*"),
        qe = g.createElement("a");
    function ze(t) {
        return function (e, n) {
            "string" != typeof e && ((n = e), (e = "*"));
            var i,
                r = 0,
                o = e.toLowerCase().match(N) || [];
            if (h(n)) for (; (i = o[r++]);) "+" === i[0] ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        };
    }
    function He(t, e, n, i) {
        var r = {},
            o = t === Be;
        function a(s) {
            var l;
            return (
                (r[s] = !0),
                w.each(t[s] || [], function (t, s) {
                    var u = s(e, n, i);
                    return "string" != typeof u || o || r[u] ? (o ? !(l = u) : void 0) : (e.dataTypes.unshift(u), a(u), !1);
                }),
                l
            );
        }
        return a(e.dataTypes[0]) || (!r["*"] && a("*"));
    }
    function Fe(t, e) {
        var n,
            i,
            r = w.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && w.extend(!0, t, i), t;
    }
    (qe.href = xe.href),
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Re, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
                return e ? Fe(Fe(t, w.ajaxSettings), e) : Fe(w.ajaxSettings, t);
            },
            ajaxPrefilter: ze($e),
            ajaxTransport: ze(Be),
            ajax: function (e, n) {
                "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
                var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    p,
                    d,
                    f = w.ajaxSetup({}, n),
                    h = f.context || f,
                    m = f.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                    v = w.Deferred(),
                    y = w.Callbacks("once memory"),
                    b = f.statusCode || {},
                    _ = {},
                    x = {},
                    k = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (u) {
                                if (!a) for (a = {}; (e = Me.exec(o));) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = a[t.toLowerCase() + " "];
                            }
                            return null == e ? null : e.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return u ? o : null;
                        },
                        setRequestHeader: function (t, e) {
                            return null == u && ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t), (_[t] = e)), this;
                        },
                        overrideMimeType: function (t) {
                            return null == u && (f.mimeType = t), this;
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (u) T.always(t[T.status]);
                                else for (e in t) b[e] = [b[e], t[e]];
                            return this;
                        },
                        abort: function (t) {
                            var e = t || k;
                            return i && i.abort(e), C(0, e), this;
                        },
                    };
                if (
                    (v.promise(T),
                        (f.url = ((e || f.url || xe.href) + "").replace(Ne, xe.protocol + "//")),
                        (f.type = n.method || n.type || f.method || f.type),
                        (f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""]),
                        null == f.crossDomain)
                ) {
                    l = g.createElement("a");
                    try {
                        (l.href = f.url), (l.href = l.href), (f.crossDomain = qe.protocol + "//" + qe.host != l.protocol + "//" + l.host);
                    } catch (e) {
                        f.crossDomain = !0;
                    }
                }
                if ((f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), He($e, f, n, T), u)) return T;
                for (p in ((c = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                    (f.type = f.type.toUpperCase()),
                    (f.hasContent = !Le.test(f.type)),
                    (r = f.url.replace(Oe, "")),
                    f.hasContent
                        ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(De, "+"))
                        : ((d = f.url.slice(r.length)),
                            f.data && (f.processData || "string" == typeof f.data) && ((r += (Te.test(r) ? "&" : "?") + f.data), delete f.data),
                            !1 === f.cache && ((r = r.replace(je, "$1")), (d = (Te.test(r) ? "&" : "?") + "_=" + ke.guid++ + d)),
                            (f.url = r + d)),
                    f.ifModified && (w.lastModified[r] && T.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && T.setRequestHeader("If-None-Match", w.etag[r])),
                    ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                    T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : f.accepts["*"]),
                    f.headers))
                    T.setRequestHeader(p, f.headers[p]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || u)) return T.abort();
                if (((k = "abort"), y.add(f.complete), T.done(f.success), T.fail(f.error), (i = He(Be, f, n, T)))) {
                    if (((T.readyState = 1), c && m.trigger("ajaxSend", [T, f]), u)) return T;
                    f.async &&
                        0 < f.timeout &&
                        (s = t.setTimeout(function () {
                            T.abort("timeout");
                        }, f.timeout));
                    try {
                        (u = !1), i.send(_, C);
                    } catch (e) {
                        if (u) throw e;
                        C(-1, e);
                    }
                } else C(-1, "No Transport");
                function C(e, n, a, l) {
                    var p,
                        d,
                        g,
                        _,
                        x,
                        k = n;
                    u ||
                        ((u = !0),
                            s && t.clearTimeout(s),
                            (i = void 0),
                            (o = l || ""),
                            (T.readyState = 0 < e ? 4 : 0),
                            (p = (200 <= e && e < 300) || 304 === e),
                            a &&
                            (_ = (function (t, e, n) {
                                for (var i, r, o, a, s = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                if (i)
                                    for (r in s)
                                        if (s[r] && s[r].test(i)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (r in n) {
                                        if (!l[0] || t.converters[r + " " + l[0]]) {
                                            o = r;
                                            break;
                                        }
                                        a || (a = r);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(f, T, a)),
                            !p && -1 < w.inArray("script", f.dataTypes) && (f.converters["text script"] = function () { }),
                            (_ = (function (t, e, n, i) {
                                var r,
                                    o,
                                    a,
                                    s,
                                    l,
                                    u = {},
                                    c = t.dataTypes.slice();
                                if (c[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                                for (o = c.shift(); o;)
                                    if ((t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = o), (o = c.shift())))
                                        if ("*" === o) o = l;
                                        else if ("*" !== l && l !== o) {
                                            if (!(a = u[l + " " + o] || u["* " + o]))
                                                for (r in u)
                                                    if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                                        !0 === a ? (a = u[r]) : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                                                        break;
                                                    }
                                            if (!0 !== a)
                                                if (a && t.throws) e = a(e);
                                                else
                                                    try {
                                                        e = a(e);
                                                    } catch (t) {
                                                        return { state: "parsererror", error: a ? t : "No conversion from " + l + " to " + o };
                                                    }
                                        }
                                return { state: "success", data: e };
                            })(f, _, T, p)),
                            p
                                ? (f.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (w.lastModified[r] = x), (x = T.getResponseHeader("etag")) && (w.etag[r] = x)),
                                    204 === e || "HEAD" === f.type ? (k = "nocontent") : 304 === e ? (k = "notmodified") : ((k = _.state), (d = _.data), (p = !(g = _.error))))
                                : ((g = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                            (T.status = e),
                            (T.statusText = (n || k) + ""),
                            p ? v.resolveWith(h, [d, k, T]) : v.rejectWith(h, [T, k, g]),
                            T.statusCode(b),
                            (b = void 0),
                            c && m.trigger(p ? "ajaxSuccess" : "ajaxError", [T, f, p ? d : g]),
                            y.fireWith(h, [T, k]),
                            c && (m.trigger("ajaxComplete", [T, f]), --w.active || w.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (t, e, n) {
                return w.get(t, e, n, "json");
            },
            getScript: function (t, e) {
                return w.get(t, void 0, e, "script");
            },
        }),
        w.each(["get", "post"], function (t, e) {
            w[e] = function (t, n, i, r) {
                return h(n) && ((r = r || i), (i = n), (n = void 0)), w.ajax(w.extend({ url: t, type: e, dataType: r, data: n, success: i }, w.isPlainObject(t) && t));
            };
        }),
        w.ajaxPrefilter(function (t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
        }),
        (w._evalUrl = function (t, e, n) {
            return w.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () { } },
                dataFilter: function (t) {
                    w.globalEval(t, e, n);
                },
            });
        }),
        w.fn.extend({
            wrapAll: function (t) {
                var e;
                return (
                    this[0] &&
                    (h(t) && (t = t.call(this[0])),
                        (e = w(t, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                                return t;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (t) {
                return h(t)
                    ? this.each(function (e) {
                        w(this).wrapInner(t.call(this, e));
                    })
                    : this.each(function () {
                        var e = w(this),
                            n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t);
                    });
            },
            wrap: function (t) {
                var e = h(t);
                return this.each(function (n) {
                    w(this).wrapAll(e ? t.call(this, n) : t);
                });
            },
            unwrap: function (t) {
                return (
                    this.parent(t)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (t) {
            return !w.expr.pseudos.visible(t);
        }),
        (w.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest();
            } catch (t) { }
        });
    var Ie = { 0: 200, 1223: 204 },
        We = w.ajaxSettings.xhr();
    (f.cors = !!We && "withCredentials" in We),
        (f.ajax = We = !!We),
        w.ajaxTransport(function (e) {
            var n, i;
            if (f.cors || (We && !e.crossDomain))
                return {
                    send: function (r, o) {
                        var a,
                            s = e.xhr();
                        if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) s.setRequestHeader(a, r[a]);
                        (n = function (t) {
                            return function () {
                                n &&
                                    ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                        "abort" === t
                                            ? s.abort()
                                            : "error" === t
                                                ? "number" != typeof s.status
                                                    ? o(0, "error")
                                                    : o(s.status, s.statusText)
                                                : o(Ie[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (i = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = i)
                                : (s.onreadystatechange = function () {
                                    4 === s.readyState &&
                                        t.setTimeout(function () {
                                            n && i();
                                        });
                                }),
                            (n = n("abort"));
                        try {
                            s.send((e.hasContent && e.data) || null);
                        } catch (r) {
                            if (n) throw r;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (t) {
                    return w.globalEval(t), t;
                },
            },
        }),
        w.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
        }),
        w.ajaxTransport("script", function (t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs)
                return {
                    send: function (i, r) {
                        (e = w("<script>")
                            .attr(t.scriptAttrs || {})
                            .prop({ charset: t.scriptCharset, src: t.url })
                            .on(
                                "load error",
                                (n = function (t) {
                                    e.remove(), (n = null), t && r("error" === t.type ? 404 : 200, t.type);
                                })
                            )),
                            g.head.appendChild(e[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var Ue,
        Xe = [],
        Ye = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Xe.pop() || w.expando + "_" + ke.guid++;
            return (this[t] = !0), t;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (e, n, i) {
            var r,
                o,
                a,
                s = !1 !== e.jsonp && (Ye.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = h(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    s ? (e[s] = e[s].replace(Ye, "$1" + r)) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function () {
                        return a || w.error(r + " was not called"), a[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (o = t[r]),
                    (t[r] = function () {
                        a = arguments;
                    }),
                    i.always(function () {
                        void 0 === o ? w(t).removeProp(r) : (t[r] = o), e[r] && ((e.jsonpCallback = n.jsonpCallback), Xe.push(r)), a && h(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (f.createHTMLDocument = (((Ue = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ue.childNodes.length)),
        (w.parseHTML = function (t, e, n) {
            return "string" != typeof t
                ? []
                : ("boolean" == typeof e && ((n = e), (e = !1)),
                    e || (f.createHTMLDocument ? (((i = (e = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href), e.head.appendChild(i)) : (e = g)),
                    (o = !n && []),
                    (r = S.exec(t)) ? [e.createElement(r[1])] : ((r = bt([t], e, o)), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
            var i, r, o;
        }),
        (w.fn.load = function (t, e, n) {
            var i,
                r,
                o,
                a = this,
                s = t.indexOf(" ");
            return (
                -1 < s && ((i = ge(t.slice(s))), (t = t.slice(0, s))),
                h(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
                0 < a.length &&
                w
                    .ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                    .done(function (t) {
                        (o = arguments), a.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t);
                    })
                    .always(
                        n &&
                        function (t, e) {
                            a.each(function () {
                                n.apply(this, o || [t.responseText, e, t]);
                            });
                        }
                    ),
                this
            );
        }),
        (w.expr.pseudos.animated = function (t) {
            return w.grep(w.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (t, e, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u = w.css(t, "position"),
                    c = w(t),
                    p = {};
                "static" === u && (t.style.position = "relative"),
                    (s = c.offset()),
                    (o = w.css(t, "top")),
                    (l = w.css(t, "left")),
                    ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? ((a = (i = c.position()).top), (r = i.left)) : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                    h(e) && (e = e.call(t, n, w.extend({}, s))),
                    null != e.top && (p.top = e.top - s.top + a),
                    null != e.left && (p.left = e.left - s.left + r),
                    "using" in e ? e.using.call(t, p) : ("number" == typeof p.top && (p.top += "px"), "number" == typeof p.left && (p.left += "px"), c.css(p));
            },
        }),
        w.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                            w.offset.setOffset(this, t, e);
                        });
                var e,
                    n,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var t,
                        e,
                        n,
                        i = this[0],
                        r = { top: 0, left: 0 };
                    if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (((r = w(t).offset()).top += w.css(t, "borderTopWidth", !0)), (r.left += w.css(t, "borderLeftWidth", !0)));
                    }
                    return { top: e.top - r.top - w.css(i, "marginTop", !0), left: e.left - r.left - w.css(i, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
                    return t || it;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
            var n = "pageYOffset" === e;
            w.fn[t] = function (i) {
                return F(
                    this,
                    function (t, i, r) {
                        var o;
                        if ((m(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView), void 0 === r)) return o ? o[e] : t[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (t[i] = r);
                    },
                    t,
                    i,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (t, e) {
            w.cssHooks[e] = Ft(f.pixelPosition, function (t, n) {
                if (n) return (n = Ht(t, e)), Bt.test(n) ? w(t).position()[e] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (t, e) {
            w.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
                w.fn[i] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                    return F(
                        this,
                        function (e, n, r) {
                            var o;
                            return m(e)
                                ? 0 === i.indexOf("outer")
                                    ? e["inner" + t]
                                    : e.document.documentElement["client" + t]
                                : 9 === e.nodeType
                                    ? ((o = e.documentElement), Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t]))
                                    : void 0 === r
                                        ? w.css(e, n, s)
                                        : w.style(e, n, r, s);
                        },
                        e,
                        a ? r : void 0,
                        a
                    );
                };
            });
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            w.fn[e] = function (t) {
                return this.on(e, t);
            };
        }),
        w.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n);
            },
            unbind: function (t, e) {
                return this.off(t, null, e);
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i);
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
            },
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            },
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            w.fn[e] = function (t, n) {
                return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e);
            };
        });
    var Ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.proxy = function (t, e) {
        var n, i, o;
        if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), h(t)))
            return (
                (i = r.call(arguments, 2)),
                ((o = function () {
                    return t.apply(e || this, i.concat(r.call(arguments)));
                }).guid = t.guid = t.guid || w.guid++),
                o
            );
    }),
        (w.holdReady = function (t) {
            t ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = A),
        (w.isFunction = h),
        (w.isWindow = m),
        (w.camelCase = X),
        (w.type = b),
        (w.now = Date.now),
        (w.isNumeric = function (t) {
            var e = w.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        }),
        (w.trim = function (t) {
            return null == t ? "" : (t + "").replace(Ve, "");
        }),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return w;
        });
    var Ge = t.jQuery,
        Ke = t.$;
    return (
        (w.noConflict = function (e) {
            return t.$ === w && (t.$ = Ke), e && t.jQuery === w && (t.jQuery = Ge), w;
        }),
        void 0 === e && (t.jQuery = t.$ = w),
        w
    );
}),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = t || self).window = t.window || {}));
    })(this, function (t) {
        "use strict";
        function e(t, e) {
            (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        }
        function n(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function i(t) {
            return "string" == typeof t;
        }
        function r(t) {
            return "function" == typeof t;
        }
        function o(t) {
            return "number" == typeof t;
        }
        function a(t) {
            return void 0 === t;
        }
        function s(t) {
            return "object" == typeof t;
        }
        function l(t) {
            return !1 !== t;
        }
        function u() {
            return "undefined" != typeof window;
        }
        function c(t) {
            return r(t) || i(t);
        }
        function p(t) {
            return (ut = te(t, Ut)) && Je;
        }
        function d(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
        }
        function f(t, e) {
            return !e && console.warn(t);
        }
        function h(t, e) {
            return (t && (Ut[t] = e) && ut && (ut[t] = e)) || Ut;
        }
        function m() {
            return 0;
        }
        function g(t) {
            var e,
                n,
                i = t[0];
            if ((s(i) || r(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
                for (n = Jt.length; n-- && !Jt[n].targetTest(i););
                e = Jt[n];
            }
            for (n = t.length; n--;) (t[n] && (t[n]._gsap || (t[n]._gsap = new xe(t[n], e)))) || t.splice(n, 1);
            return t;
        }
        function v(t) {
            return t._gsap || g(oe(t))[0]._gsap;
        }
        function y(t, e) {
            var n = t[e];
            return r(n) ? t[e]() : (a(n) && t.getAttribute(e)) || n;
        }
        function b(t, e) {
            return (t = t.split(",")).forEach(e) || t;
        }
        function _(t) {
            return Math.round(1e4 * t) / 1e4;
        }
        function w(t, e) {
            for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;);
            return i < n;
        }
        function x(t, e, n) {
            var i,
                r = o(t[1]),
                a = (r ? 2 : 1) + (e < 2 ? 0 : 1),
                s = t[a];
            return r && (s.duration = t[1]), 1 === e ? ((s.runBackwards = 1), (s.immediateRender = l(s.immediateRender))) : 2 === e && ((i = t[a - 1]), (s.startAt = i), (s.immediateRender = l(s.immediateRender))), (s.parent = n), s;
        }
        function k() {
            var t,
                e,
                n = Yt.length,
                i = Yt.slice(0);
            for (Vt = {}, t = Yt.length = 0; t < n; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        }
        function T(t, e, n, i) {
            Yt.length && k(), t.render(e, n, i), Yt.length && k();
        }
        function C(t) {
            var e = parseFloat(t);
            return e || 0 === e ? e : t;
        }
        function P(t) {
            return t;
        }
        function A(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t;
        }
        function S(t, e) {
            for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
        }
        function E(t, e) {
            for (var n in e) t[n] = s(e[n]) ? E(t[n] || (t[n] = {}), e[n]) : e[n];
            return t;
        }
        function D(t, e) {
            var n,
                i = {};
            for (n in t) n in e || (i[n] = t[n]);
            return i;
        }
        function O(t, e, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = e._prev,
                o = e._next;
            r ? (r._next = o) : t[n] === e && (t[n] = o), o ? (o._prev = r) : t[i] === e && (t[i] = r), (e._dp = t), (e._next = e._prev = e.parent = null);
        }
        function j(t, e) {
            !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t), (t._act = 0);
        }
        function M(t) {
            for (var e = t; e;) (e._dirty = 1), (e = e.parent);
            return t;
        }
        function L(t) {
            return t._repeat ? ee(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
        }
        function N(t, e) {
            return (t - e._start) * e._ts + (0 < e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
        }
        function $(t, e, n) {
            if (
                (e.parent && j(e),
                    (e._start = n + e._delay),
                    (e._end = e._start + (e.totalDuration() / e._ts || 0)),
                    (function (t, e, n, i, r) {
                        void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                        var o,
                            a = t[i];
                        if (r) for (o = e[r]; a && a[r] > o;) a = a._prev;
                        a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[n]), (t[n] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = a), (e.parent = t);
                    })(t, e, "_first", "_last", t._sort ? "_start" : 0),
                    (t._recent = e)._time || (!e._dur && e._initted))
            ) {
                var i = (t.rawTime() - e._start) * e._ts;
                (!e._dur || ie(0, e.totalDuration(), i) - e._tTime > Ot) && e.render(i, !0);
            }
            if ((M(t), t._dp && t._time >= t._dur && t._ts && t._dur < t.duration())) for (var r = t; r._dp;) r.totalTime(r._tTime, !0), (r = r._dp);
            return t;
        }
        function B(t, e, n, i) {
            return Ee(t, e), t._initted ? (!n && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && pt !== de.frame ? (Yt.push(t), (t._lazy = [e, i]), 1) : void 0) : 1;
        }
        function R(t) {
            if (t instanceof Ce) return M(t);
            var e = t._repeat;
            return (t._tDur = e ? (e < 0 ? 1e12 : _(t._dur * (e + 1) + t._rDelay * e)) : t._dur), M(t.parent), t;
        }
        function q(t, e) {
            var n,
                r,
                o = t.labels,
                a = t._recent || ne,
                s = t.duration() >= Dt ? a.endTime(!1) : t._dur;
            return i(e) && (isNaN(e) || e in o)
                ? "<" === (n = e.charAt(0)) || ">" === n
                    ? ("<" === n ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0)
                    : (n = e.indexOf("=")) < 0
                        ? (e in o || (o[e] = s), o[e])
                        : ((r = +(e.charAt(n - 1) + e.substr(n + 1))), 1 < n ? q(t, e.substr(0, n - 1)) + r : s + r)
                : null == e
                    ? s
                    : +e;
        }
        function z(t, e) {
            return t || 0 === t ? e(t) : e;
        }
        function H(t) {
            return (t + "").substr((parseFloat(t) + "").length);
        }
        function F(t) {
            return t && s(t) && "length" in t && (!t.length || (t.length - 1 in t && s(t[0]))) && !t.nodeType && t !== at;
        }
        function I(t) {
            if (r(t)) return t;
            var e = s(t) ? t : { each: t },
                n = ye(e.ease),
                o = e.from || 0,
                a = parseFloat(e.base) || 0,
                l = {},
                u = 0 < o && o < 1,
                c = isNaN(o) || u,
                p = e.axis,
                d = o,
                f = o;
            return (
                i(o) ? (d = f = { center: 0.5, edges: 0.5, end: 1 }[o] || 0) : !u && c && ((d = o[0]), (f = o[1])),
                function (t, i, r) {
                    var s,
                        u,
                        h,
                        m,
                        g,
                        v,
                        y,
                        b,
                        w,
                        x = (r || e).length,
                        k = l[x];
                    if (!k) {
                        if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, Dt])[1])) {
                            for (y = -Dt; y < (y = r[w++].getBoundingClientRect().left) && w < x;);
                            w--;
                        }
                        for (k = l[x] = [], s = c ? Math.min(w, x) * d - 0.5 : o % w, u = c ? (x * f) / w - 0.5 : (o / w) | 0, b = Dt, v = y = 0; v < x; v++)
                            (h = (v % w) - s), (m = u - ((v / w) | 0)), (k[v] = g = p ? Math.abs("y" === p ? m : h) : Nt(h * h + m * m)), y < g && (y = g), g < b && (b = g);
                        (k.max = y - b),
                            (k.min = b),
                            (k.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (x < w ? x - 1 : p ? ("y" === p ? x / w : w) : Math.max(w, x / w)) || 0) * ("edges" === o ? -1 : 1)),
                            (k.b = x < 0 ? a - x : a),
                            (k.u = H(e.amount || e.each) || 0),
                            (n = n && x < 0 ? ve(n) : n);
                    }
                    return (x = (k[t] - k.min) / k.max || 0), _(k.b + (n ? n(x) : x) * k.v) + k.u;
                }
            );
        }
        function W(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (n) {
                return ~~(Math.round(parseFloat(n) / t) * t * e) / e + (o(n) ? 0 : H(n));
            };
        }
        function U(t, e) {
            var n,
                i,
                a = Rt(t);
            return (
                !a && s(t) && ((n = a = t.radius || Dt), t.values ? ((t = oe(t.values)), (i = !o(t[0])) && (n *= n)) : (t = W(t.increment))),
                z(
                    e,
                    a
                        ? r(t)
                            ? function (e) {
                                return (i = t(e)), Math.abs(i - e) <= n ? i : e;
                            }
                            : function (e) {
                                for (var r, a, s = parseFloat(i ? e.x : e), l = parseFloat(i ? e.y : 0), u = Dt, c = 0, p = t.length; p--;)
                                    (r = i ? (r = t[p].x - s) * r + (a = t[p].y - l) * a : Math.abs(t[p] - s)) < u && ((u = r), (c = p));
                                return (c = !n || u <= n ? t[c] : e), i || c === e || o(e) ? c : c + H(e);
                            }
                        : W(t)
                )
            );
        }
        function X(t, e, n, i) {
            return z(Rt(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
                return Rt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / n) * n * i) / i;
            });
        }
        function Y(t, e, n) {
            return z(n, function (n) {
                return t[~~e(n)];
            });
        }
        function V(t) {
            for (var e, n, i, r, o = 0, a = ""; ~(e = t.indexOf("random(", o));)
                (i = t.indexOf(")", e)), (r = "[" === t.charAt(e + 7)), (n = t.substr(e + 7, i - e - 7).match(r ? Wt : qt)), (a += t.substr(o, e - o) + X(r ? n : +n[0], +n[1], +n[2] || 1e-5)), (o = i + 1);
            return a + t.substr(o, t.length - o);
        }
        function G(t, e, n) {
            var i,
                r,
                o,
                a = t.labels,
                s = Dt;
            for (i in a) (r = a[i] - e) < 0 == !!n && r && s > (r = Math.abs(r)) && ((o = i), (s = r));
            return o;
        }
        function K(t) {
            return j(t), t.progress() < 1 && se(t, "onInterrupt"), t;
        }
        function Q(t, e, n) {
            return ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * le + 0.5) | 0;
        }
        function J(t, e) {
            var n,
                i,
                r,
                a,
                s,
                l,
                u,
                c,
                p,
                d,
                f = t ? (o(t) ? [t >> 16, (t >> 8) & le, t & le] : 0) : ue.black;
            if (!f) {
                if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ue[t])) f = ue[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (i = t.charAt(2)) + i + (r = t.charAt(3)) + r), (f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & le, t & le]);
                else if ("hsl" === t.substr(0, 3))
                    if (((f = d = t.match(qt)), e)) {
                        if (~t.indexOf("=")) return t.match(zt);
                    } else
                        (a = (+f[0] % 360) / 360),
                            (s = f[1] / 100),
                            (n = 2 * (l = f[2] / 100) - (i = l <= 0.5 ? l * (s + 1) : l + s - l * s)),
                            3 < f.length && (f[3] *= 1),
                            (f[0] = Q(a + 1 / 3, n, i)),
                            (f[1] = Q(a, n, i)),
                            (f[2] = Q(a - 1 / 3, n, i));
                else f = t.match(qt) || ue.transparent;
                f = f.map(Number);
            }
            return (
                e &&
                !d &&
                ((n = f[0] / le),
                    (i = f[1] / le),
                    (r = f[2] / le),
                    (l = ((u = Math.max(n, i, r)) + (c = Math.min(n, i, r))) / 2),
                    u === c ? (a = s = 0) : ((p = u - c), (s = 0.5 < l ? p / (2 - u - c) : p / (u + c)), (a = u === n ? (i - r) / p + (i < r ? 6 : 0) : u === i ? (r - n) / p + 2 : (n - i) / p + 4), (a *= 60)),
                    (f[0] = (a + 0.5) | 0),
                    (f[1] = (100 * s + 0.5) | 0),
                    (f[2] = (100 * l + 0.5) | 0)),
                f
            );
        }
        function Z(t, e) {
            var n,
                i,
                r,
                o = (t + "").match(ce),
                a = 0,
                s = "";
            if (!o) return t;
            for (n = 0; n < o.length; n++)
                (i = o[n]), (a += (r = t.substr(a, t.indexOf(i, a) - a)).length + i.length), 3 === (i = J(i, e)).length && i.push(1), (s += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")");
            return s + t.substr(a);
        }
        function tt(t) {
            var e,
                n = t.join(" ");
            (ce.lastIndex = 0), ce.test(n) && ((e = pe.test(n)), (t[0] = Z(t[0], e)), (t[1] = Z(t[1], e)));
        }
        function et(t, e, n, i) {
            void 0 === n &&
                (n = function (t) {
                    return 1 - e(1 - t);
                }),
                void 0 === i &&
                (i = function (t) {
                    return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
            var r,
                o = { easeIn: e, easeOut: n, easeInOut: i };
            return (
                b(t, function (t) {
                    for (var e in ((he[t] = Ut[t] = o), (he[(r = t.toLowerCase())] = n), o)) he[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = he[t + "." + e] = o[e];
                }),
                o
            );
        }
        function nt(t) {
            return function (e) {
                return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
            };
        }
        function it(t, e, n) {
            function i(t) {
                return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Bt((t - a) * o) + 1;
            }
            var r = 1 <= e ? e : 1,
                o = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
                a = (o / jt) * (Math.asin(1 / r) || 0),
                s =
                    "out" === t
                        ? i
                        : "in" === t
                            ? function (t) {
                                return 1 - i(1 - t);
                            }
                            : nt(i);
            return (
                (o = jt / o),
                (s.config = function (e, n) {
                    return it(t, e, n);
                }),
                s
            );
        }
        function rt(t, e) {
            function n(t) {
                return --t * t * ((e + 1) * t + e) + 1;
            }
            void 0 === e && (e = 1.70158);
            var i =
                "out" === t
                    ? n
                    : "in" === t
                        ? function (t) {
                            return 1 - n(1 - t);
                        }
                        : nt(n);
            return (
                (i.config = function (e) {
                    return rt(t, e);
                }),
                i
            );
        }
        var ot,
            at,
            st,
            lt,
            ut,
            ct,
            pt,
            dt,
            ft,
            ht,
            mt,
            gt,
            vt,
            yt,
            bt,
            _t,
            wt,
            xt,
            kt,
            Tt,
            Ct,
            Pt,
            At,
            St = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
            Et = { duration: 0.5, overwrite: !1, delay: 0 },
            Dt = 1e8,
            Ot = 1 / Dt,
            jt = 2 * Math.PI,
            Mt = jt / 4,
            Lt = 0,
            Nt = Math.sqrt,
            $t = Math.cos,
            Bt = Math.sin,
            Rt = Array.isArray,
            qt = /(?:-?\.?\d|\.)+/gi,
            zt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
            Ht = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,
            Ft = /\(([^()]+)\)/i,
            It = /[\+-]=-?[\.\d]+/,
            Wt = /[#\-+\.]*\b[a-z\d-=+%.]+/gi,
            Ut = {},
            Xt = {},
            Yt = [],
            Vt = {},
            Gt = {},
            Kt = {},
            Qt = 30,
            Jt = [],
            Zt = "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            te = function (t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            },
            ee = function (t, e) {
                return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
            },
            ne = { _start: 0, endTime: m },
            ie = function (t, e, n) {
                return n < t ? t : e < n ? e : n;
            },
            re = [].slice,
            oe = function (t, e) {
                return !i(t) || e || (!st && fe())
                    ? Rt(t)
                        ? (function (t, e, n) {
                            return (
                                void 0 === n && (n = []),
                                t.forEach(function (t) {
                                    return (i(t) && !e) || F(t) ? n.push.apply(n, oe(t)) : n.push(t);
                                }) || n
                            );
                        })(t, e)
                        : F(t)
                            ? re.call(t, 0)
                            : t
                                ? [t]
                                : []
                    : re.call(lt.querySelectorAll(t), 0);
            },
            ae = function (t, e, n, i, r) {
                var o = e - t,
                    a = i - n;
                return z(r, function (e) {
                    return n + ((e - t) / o) * a;
                });
            },
            se = function (t, e, n) {
                var i,
                    r,
                    o = t.vars,
                    a = o[e];
                if (a) return (i = o[e + "Params"]), (r = o.callbackScope || t), n && Yt.length && k(), i ? a.apply(r, i) : a.call(r);
            },
            le = 255,
            ue = {
                aqua: [0, le, le],
                lime: [0, le, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, le],
                navy: [0, 0, 128],
                white: [le, le, le],
                olive: [128, 128, 0],
                yellow: [le, le, 0],
                orange: [le, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [le, 0, 0],
                pink: [le, 192, 203],
                cyan: [0, le, le],
                transparent: [le, le, le, 0],
            },
            ce = (function () {
                var t,
                    e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (t in ue) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi");
            })(),
            pe = /hsl[a]?\(/,
            de =
                ((yt = Date.now),
                    (bt = 500),
                    (_t = 33),
                    (wt = yt()),
                    (xt = wt),
                    (Tt = kt = 1 / 60),
                    (vt = {
                        time: 0,
                        frame: 0,
                        tick: function () {
                            be(!0);
                        },
                        wake: function () {
                            ct &&
                                (!st &&
                                    u() &&
                                    ((at = st = window),
                                        (lt = at.document || {}),
                                        (Ut.gsap = Je),
                                        (at.gsapVersions || (at.gsapVersions = [])).push(Je.version),
                                        p(ut || at.GreenSockGlobals || (!at.gsap && at) || {}),
                                        (gt = at.requestAnimationFrame)),
                                    ht && vt.sleep(),
                                    (mt =
                                        gt ||
                                        function (t) {
                                            return setTimeout(t, (1e3 * (Tt - vt.time) + 1) | 0);
                                        }),
                                    (ft = 1),
                                    be(2));
                        },
                        sleep: function () {
                            (gt ? at.cancelAnimationFrame : clearTimeout)(ht), (ft = 0), (mt = m);
                        },
                        lagSmoothing: function (t, e) {
                            (bt = t || 1e8), (_t = Math.min(e, bt, 0));
                        },
                        fps: function (t) {
                            (kt = 1 / (t || 60)), (Tt = vt.time + kt);
                        },
                        add: function (t) {
                            Ct.indexOf(t) < 0 && Ct.push(t), fe();
                        },
                        remove: function (t) {
                            var e;
                            ~(e = Ct.indexOf(t)) && Ct.splice(e, 1);
                        },
                        _listeners: (Ct = []),
                    })),
            fe = function () {
                return !ft && de.wake();
            },
            he = {},
            me = /^[\d.\-M][\d.\-,\s]/,
            ge = /["']/g,
            ve = function (t) {
                return function (e) {
                    return 1 - t(1 - e);
                };
            },
            ye = function (t, e) {
                return (
                    (t &&
                        (r(t)
                            ? t
                            : he[t] ||
                            (function (t) {
                                var e = (t + "").split("("),
                                    n = he[e[0]];
                                return n && 1 < e.length && n.config
                                    ? n.config.apply(
                                        null,
                                        ~t.indexOf("{")
                                            ? [
                                                (function (t) {
                                                    for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, l = o.length; s < l; s++)
                                                        (n = o[s]), (e = s !== l - 1 ? n.lastIndexOf(",") : n.length), (i = n.substr(0, e)), (r[a] = isNaN(i) ? i.replace(ge, "").trim() : +i), (a = n.substr(e + 1).trim());
                                                    return r;
                                                })(e[1]),
                                            ]
                                            : Ft.exec(t)[1].split(",").map(C)
                                    )
                                    : he._CE && me.test(t)
                                        ? he._CE("", t)
                                        : n;
                            })(t))) ||
                    e
                );
            };
        function be(t) {
            var e,
                n,
                i = yt() - xt,
                r = !0 === t;
            bt < i && (wt += i - _t),
                (xt += i),
                (vt.time = (xt - wt) / 1e3),
                (0 < (e = vt.time - Tt) || r) && (vt.frame++, (Tt += e + (kt <= e ? 0.004 : kt - e)), (n = 1)),
                r || (ht = mt(be)),
                n &&
                Ct.forEach(function (e) {
                    return e(vt.time, i, vt.frame, t);
                });
        }
        function _e(t) {
            return t < At ? Pt * t * t : t < 0.7272727272727273 ? Pt * Math.pow(t - 1.5 / 2.75, 2) + 0.75 : t < 0.9090909090909092 ? Pt * (t -= 2.25 / 2.75) * t + 0.9375 : Pt * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
        }
        b("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
            var n = e < 5 ? e + 1 : e;
            et(
                t + ",Power" + (n - 1),
                e
                    ? function (t) {
                        return Math.pow(t, n);
                    }
                    : function (t) {
                        return t;
                    },
                function (t) {
                    return 1 - Math.pow(1 - t, n);
                },
                function (t) {
                    return t < 0.5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
                }
            );
        }),
            (he.Linear.easeNone = he.none = he.Linear.easeIn),
            et("Elastic", it("in"), it("out"), it()),
            (Pt = 7.5625),
            (At = 1 / 2.75),
            et(
                "Bounce",
                function (t) {
                    return 1 - _e(1 - t);
                },
                _e
            ),
            et("Expo", function (t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0;
            }),
            et("Circ", function (t) {
                return -(Nt(1 - t * t) - 1);
            }),
            et("Sine", function (t) {
                return 1 - $t(t * Mt);
            }),
            et("Back", rt("in"), rt("out"), rt()),
            (he.SteppedEase = he.steps = Ut.SteppedEase = {
                config: function (t, e) {
                    void 0 === t && (t = 1);
                    var n = 1 / t,
                        i = t + (e ? 0 : 1),
                        r = e ? 1 : 0;
                    return function (t) {
                        return (((i * ie(0, 0.99999999, t)) | 0) + r) * n;
                    };
                },
            }),
            (Et.ease = he["quad.out"]);
        var we,
            xe = function (t, e) {
                (this.id = Lt++), ((t._gsap = this).target = t), (this.harness = e), (this.get = e ? e.get : y), (this.set = e ? e.getSetter : qe);
            },
            ke =
                (((we = Te.prototype).delay = function (t) {
                    return t || 0 === t ? ((this._delay = t), this) : this._delay;
                }),
                    (we.duration = function (t) {
                        var e = arguments.length,
                            n = this._repeat,
                            i = 0 < n ? n * ((e ? t : this._dur) + this._rDelay) : 0;
                        return e ? this.totalDuration(n < 0 ? t : t + i) : this.totalDuration() && this._dur;
                    }),
                    (we.totalDuration = function (t) {
                        if (!arguments.length) return this._tDur;
                        var e = this._repeat,
                            n = (t || this._rDelay) && e < 0;
                        return (this._tDur = n ? 1e12 : t), (this._dur = n ? t : (t - e * this._rDelay) / (e + 1)), (this._dirty = 0), M(this.parent), this;
                    }),
                    (we.totalTime = function (t, e) {
                        if ((fe(), !arguments.length)) return this._tTime;
                        var n,
                            i = this.parent || this._dp;
                        if (i && i.smoothChildTiming && this._ts) {
                            for (n = this._start, this._start = i._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts), this._end += this._start - n, i._dirty || M(i); i.parent;)
                                i.parent._time !== i._start + (0 < i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), (i = i.parent);
                            this.parent || $(this._dp, this, this._start - this._delay);
                        }
                        return (this._tTime === t && (this._dur || e)) || (this._ts || (this._pTime = t), T(this, t, e)), this;
                    }),
                    (we.time = function (t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + L(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
                    }),
                    (we.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._tTime / this.totalDuration();
                    }),
                    (we.progress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + L(this), e) : this.duration() ? this._time / this._dur : this.ratio;
                    }),
                    (we.iteration = function (t, e) {
                        var n = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? ee(this._tTime, n) + 1 : 1;
                    }),
                    (we.timeScale = function (t) {
                        return arguments.length
                            ? null !== this._pauseTS
                                ? ((this._pauseTS = t), this)
                                : ((this._ts = t),
                                    (function (t) {
                                        for (var e = t.parent; e && e.parent;) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                                        return t;
                                    })(this.totalTime(this.parent ? N(this.parent._time, this) : this._tTime, !0)))
                            : this._ts || this._pauseTS || 0;
                    }),
                    (we.paused = function (t) {
                        var e = !this._ts;
                        return arguments.length
                            ? (e !== t &&
                                (t
                                    ? ((this._pauseTS = this._ts), (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                    : ((this._ts = this._pauseTS || 1), (this._pauseTS = null), (t = this._tTime || this._pTime), 1 === this.progress() && (this._tTime -= Ot), this.totalTime(t, !0))),
                                this)
                            : e;
                    }),
                    (we.startTime = function (t) {
                        return arguments.length ? (this.parent && this.parent._sort && $(this.parent, this, t - this._delay), this) : this._start;
                    }),
                    (we.endTime = function (t) {
                        return this._start + (l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
                    }),
                    (we.rawTime = function (t) {
                        var e = this.parent || this._dp;
                        return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? N(e.rawTime(t), this) : this._tTime) : this._tTime;
                    }),
                    (we.repeat = function (t) {
                        return arguments.length ? ((this._repeat = t), R(this)) : this._repeat;
                    }),
                    (we.repeatDelay = function (t) {
                        return arguments.length ? ((this._rDelay = t), R(this)) : this._rDelay;
                    }),
                    (we.yoyo = function (t) {
                        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                    }),
                    (we.seek = function (t, e) {
                        return this.totalTime(q(this, t), l(e));
                    }),
                    (we.restart = function (t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, l(e));
                    }),
                    (we.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                    }),
                    (we.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                    }),
                    (we.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0);
                    }),
                    (we.resume = function () {
                        return this.paused(!1);
                    }),
                    (we.reversed = function (t) {
                        var e = this._ts || this._pauseTS || 0;
                        return arguments.length ? (t !== this.reversed() && ((this[null === this._pauseTS ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1)), this.totalTime(this._tTime, !0)), this) : e < 0;
                    }),
                    (we.invalidate = function () {
                        return (this._initted = 0), this;
                    }),
                    (we.isActive = function (t) {
                        var e,
                            n = this.parent || this._dp,
                            i = this._start;
                        return !(n && !(this._ts && (this._initted || !t) && n.isActive(t) && (e = n.rawTime(!0)) >= i && e < this.endTime(!0) - Ot));
                    }),
                    (we.eventCallback = function (t, e, n) {
                        var i = this.vars;
                        return 1 < arguments.length ? (e ? ((i[t] = e), n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
                    }),
                    (we.then = function (t) {
                        var e = this;
                        return new Promise(function (n) {
                            function i() {
                                var t = e.then;
                                (e.then = null), (r = r(e)) && (r.then || r === e) && ((e._prom = r), (e.then = t)), n(r), (e.then = t);
                            }
                            var r = t || P;
                            (e._initted && 1 === e.totalProgress() && 0 <= e._ts) || (!e._tTime && e._ts < 0) ? i() : (e._prom = i);
                        });
                    }),
                    (we.kill = function () {
                        K(this);
                    }),
                    Te);
        function Te(t, e) {
            var n = t.parent || ot;
            (this.vars = t),
                (this._dur = this._tDur = +t.duration || 0),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase), R(this)),
                (this._ts = 1),
                (this.data = t.data),
                ft || de.wake(),
                n && $(n, this, e || 0 === e ? e : n._time),
                t.reversed && this.reversed(!0),
                t.paused && this.paused(!0);
        }
        A(ke.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: 0, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -Ot, _prom: 0, _pauseTS: null });
        var Ce = (function (t) {
            function n(e, n) {
                var i;
                return void 0 === e && (e = {}), ((i = t.call(this, e, n) || this).labels = {}), (i.smoothChildTiming = l(e.smoothChildTiming)), (i.autoRemoveChildren = !!e.autoRemoveChildren), (i._sort = l(e.sortChildren)), i;
            }
            e(n, t);
            var a = n.prototype;
            return (
                (a.to = function (t, e, n, i) {
                    return new Me(t, x(arguments, 0, this), q(this, o(e) ? i : n)), this;
                }),
                (a.from = function (t, e, n, i) {
                    return new Me(t, x(arguments, 1, this), q(this, o(e) ? i : n)), this;
                }),
                (a.fromTo = function (t, e, n, i, r) {
                    return new Me(t, x(arguments, 2, this), q(this, o(e) ? r : i)), this;
                }),
                (a.set = function (t, e, n) {
                    return (e.duration = 0), (e.parent = this), e.repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Me(t, e, q(this, n)), this;
                }),
                (a.call = function (t, e, n) {
                    return $(this, Me.delayedCall(0, t, e), q(this, n));
                }),
                (a.staggerTo = function (t, e, n, i, r, o, a) {
                    return (n.duration = e), (n.stagger = n.stagger || i), (n.onComplete = o), (n.onCompleteParams = a), (n.parent = this), new Me(t, n, q(this, r)), this;
                }),
                (a.staggerFrom = function (t, e, n, i, r, o, a) {
                    return (n.runBackwards = 1), (n.immediateRender = l(n.immediateRender)), this.staggerTo(t, e, n, i, r, o, a);
                }),
                (a.staggerFromTo = function (t, e, n, i, r, o, a, s) {
                    return (i.startAt = n), (i.immediateRender = l(i.immediateRender)), this.staggerTo(t, e, i, r, o, a, s);
                }),
                (a.render = function (t, e, n) {
                    var i,
                        r,
                        o,
                        a,
                        s,
                        l,
                        u,
                        c,
                        p,
                        d,
                        f,
                        h = this._time,
                        m = this._dirty ? this.totalDuration() : this._tDur,
                        g = this._dur,
                        v = m - Ot < t && 0 <= t && this !== ot ? m : t < Ot ? 0 : t,
                        y = this._zTime < 0 != t < 0 && (this._initted || !g);
                    if (v !== this._tTime || n || y) {
                        if (
                            (y && (g || (h = this._zTime), (!t && e) || (this._zTime = t)),
                                (i = v),
                                (p = this._start),
                                (l = 0 === (c = this._ts)),
                                h !== this._time && g && (i += this._time - h),
                                this._repeat &&
                                ((f = this._yoyo), (g < (i = _(v % (s = g + this._rDelay))) || m === v) && (i = g), (a = ~~(v / s)) && a === v / s && ((i = g), a--), f && 1 & a && (i = g - i), a !== (d = ee(this._tTime, s)) && !this._lock))
                        ) {
                            var b = f && 1 & d,
                                w = b === (f && 1 & a);
                            if ((a < d && (b = !b), (h = b ? 0 : g), (this._lock = 1), (this.render(h, e, !g)._lock = 0), !e && this.parent && se(this, "onRepeat"), h !== this._time || l != !this._ts)) return this;
                            if ((w && ((this._lock = 2), (h = b ? g + 1e-4 : -1e-4), this.render(h, !0)), (this._lock = 0), !this._ts && !l)) return this;
                        }
                        if (
                            (this._hasPause &&
                                !this._forcing &&
                                this._lock < 2 &&
                                (u = (function (t, e, n) {
                                    var i;
                                    if (e < n)
                                        for (i = t._first; i && i._start <= n;) {
                                            if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                            i = i._next;
                                        }
                                    else
                                        for (i = t._last; i && i._start >= n;) {
                                            if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                            i = i._prev;
                                        }
                                })(this, _(h), _(i))) &&
                                (v -= i - (i = u._start)),
                                (this._tTime = v),
                                (this._time = i),
                                (this._act = !c),
                                this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1)),
                                h || !i || e || se(this, "onStart"),
                                h <= i && 0 <= t)
                        )
                            for (r = this._first; r;) {
                                if (((o = r._next), (r._act || i >= r._start) && r._ts && u !== r)) {
                                    if (r.parent !== this) return this.render(t, e, n);
                                    if ((r.render(0 < r._ts ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || (!this._ts && !l))) {
                                        u = 0;
                                        break;
                                    }
                                }
                                r = o;
                            }
                        else {
                            r = this._last;
                            for (var x = t < 0 ? t : i; r;) {
                                if (((o = r._prev), (r._act || x <= r._end) && r._ts && u !== r)) {
                                    if (r.parent !== this) return this.render(t, e, n);
                                    if ((r.render(0 < r._ts ? (x - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (x - r._start) * r._ts, e, n), i !== this._time || (!this._ts && !l))) {
                                        u = 0;
                                        break;
                                    }
                                }
                                r = o;
                            }
                        }
                        if (u && !e && (this.pause(), (u.render(h <= i ? 0 : -Ot)._zTime = h <= i ? 1 : -1), this._ts)) return (this._start = p), this.render(t, e, n);
                        this._onUpdate && !e && se(this, "onUpdate", !0),
                            (v === m || (!v && this._ts < 0)) &&
                            ((p !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                                ((!i || m >= this.totalDuration()) &&
                                    ((!t && g) || !((v && 0 < this._ts) || (!v && this._ts < 0)) || j(this, 1), e || (t < 0 && !h) || (se(this, v === m ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()))));
                    }
                    return this;
                }),
                (a.add = function (t, e) {
                    var n = this;
                    if ((o(e) || (e = q(this, e)), !(t instanceof ke))) {
                        if (Rt(t))
                            return (
                                t.forEach(function (t) {
                                    return n.add(t, e);
                                }),
                                M(this)
                            );
                        if (i(t)) return this.addLabel(t, e);
                        if (!r(t)) return this;
                        t = Me.delayedCall(0, t);
                    }
                    return this !== t ? $(this, t, e) : this;
                }),
                (a.getChildren = function (t, e, n, i) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -Dt);
                    for (var r = [], o = this._first; o;) o._start >= i && (o instanceof Me ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), (o = o._next);
                    return r;
                }),
                (a.getById = function (t) {
                    for (var e = this.getChildren(1, 1, 1), n = e.length; n--;) if (e[n].vars.id === t) return e[n];
                }),
                (a.remove = function (t) {
                    return i(t) ? this.removeLabel(t) : r(t) ? this.killTweensOf(t) : (O(this, t), t === this._recent && (this._recent = this._last), M(this));
                }),
                (a.totalTime = function (e, n) {
                    return arguments.length
                        ? ((this._forcing = 1),
                            this.parent || this._dp || !this._ts || (this._start = de.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts)),
                            t.prototype.totalTime.call(this, e, n),
                            (this._forcing = 0),
                            this)
                        : this._tTime;
                }),
                (a.addLabel = function (t, e) {
                    return (this.labels[t] = q(this, e)), this;
                }),
                (a.removeLabel = function (t) {
                    return delete this.labels[t], this;
                }),
                (a.addPause = function (t, e, n) {
                    var i = Me.delayedCall(0, e || m, n);
                    return (i.data = "isPause"), (this._hasPause = 1), $(this, i, q(this, t));
                }),
                (a.removePause = function (t) {
                    var e = this._first;
                    for (t = q(this, t); e;) e._start === t && "isPause" === e.data && j(e), (e = e._next);
                }),
                (a.killTweensOf = function (t, e, n) {
                    for (var i = this.getTweensOf(t, n), r = i.length; r--;) Ae !== i[r] && i[r].kill(t, e);
                    return this;
                }),
                (a.getTweensOf = function (t, e) {
                    for (var n, i = [], r = oe(t), o = this._first; o;) o instanceof Me ? !w(o._targets, r) || (e && !o.isActive("started" === e)) || i.push(o) : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n), (o = o._next);
                    return i;
                }),
                (a.tweenTo = function (t, e) {
                    var n = this,
                        i = q(n, t),
                        r = e && e.startAt,
                        o = Me.to(
                            n,
                            A(
                                {
                                    ease: "none",
                                    lazy: !1,
                                    time: i,
                                    duration: Math.abs(i - (r && "time" in r ? r.time : n._time)) / n.timeScale() || Ot,
                                    onStart: function () {
                                        n.pause();
                                        var t = Math.abs(i - n._time) / n.timeScale();
                                        o._dur !== t && ((o._dur = t), o.render(o._time, !0, !0)), e && e.onStart && e.onStart.apply(o, e.onStartParams || []);
                                    },
                                },
                                e
                            )
                        );
                    return o;
                }),
                (a.tweenFromTo = function (t, e, n) {
                    return this.tweenTo(e, A({ startAt: { time: q(this, t) } }, n));
                }),
                (a.recent = function () {
                    return this._recent;
                }),
                (a.nextLabel = function (t) {
                    return void 0 === t && (t = this._time), G(this, q(this, t));
                }),
                (a.previousLabel = function (t) {
                    return void 0 === t && (t = this._time), G(this, q(this, t), 1);
                }),
                (a.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Ot);
                }),
                (a.shiftChildren = function (t, e, n) {
                    void 0 === n && (n = 0);
                    for (var i, r = this._first, o = this.labels; r;) r._start >= n && (r._start += t), (r = r._next);
                    if (e) for (i in o) o[i] >= n && (o[i] += t);
                    return M(this);
                }),
                (a.invalidate = function () {
                    var e = this._first;
                    for (this._lock = 0; e;) e.invalidate(), (e = e._next);
                    return t.prototype.invalidate.call(this);
                }),
                (a.clear = function (t) {
                    void 0 === t && (t = !0);
                    for (var e, n = this._first; n;) (e = n._next), this.remove(n), (n = e);
                    return (this._time = this._tTime = 0), t && (this.labels = {}), M(this);
                }),
                (a.totalDuration = function (t) {
                    var e,
                        n,
                        i = 0,
                        r = this,
                        o = r._last,
                        a = Dt,
                        s = r._repeat,
                        l = s * r._rDelay || 0,
                        u = s < 0;
                    if (arguments.length) return u ? r : r.timeScale(r.totalDuration() / t);
                    if (r._dirty) {
                        for (; o;)
                            (e = o._prev),
                                o._dirty && o.totalDuration(),
                                o._start > a && r._sort && o._ts && !r._lock ? ((r._lock = 1), $(r, o, o._start - o._delay), (r._lock = 0)) : (a = o._start),
                                o._start < 0 &&
                                o._ts &&
                                ((i -= o._start),
                                    ((!r.parent && !r._dp) || (r.parent && r.parent.smoothChildTiming)) && ((r._start += o._start / r._ts), (r._time -= o._start), (r._tTime -= o._start)),
                                    r.shiftChildren(-o._start, !1, -1e20),
                                    (a = 0)),
                                i < (n = o._end = o._start + o._tDur / Math.abs(o._ts || o._pauseTS || Ot)) && o._ts && (i = _(n)),
                                (o = e);
                        (r._dur = r === ot && r._time > i ? r._time : Math.min(Dt, i)),
                            (r._tDur = u && (r._dur || l) ? 1e12 : Math.min(Dt, i * (s + 1) + l)),
                            (r._end = r._start + (r._tDur / Math.abs(r._ts || r._pauseTS || Ot) || 0)),
                            (r._dirty = 0);
                    }
                    return r._tDur;
                }),
                (n.updateRoot = function (t) {
                    if ((ot._ts && (T(ot, N(t, ot)), (pt = de.frame)), de.frame >= Qt)) {
                        Qt += St.autoSleep || 120;
                        var e = ot._first;
                        if ((!e || !e._ts) && St.autoSleep && de._listeners.length < 2) {
                            for (; e && !e._ts;) e = e._next;
                            e || de.sleep();
                        }
                    }
                }),
                n
            );
        })(ke);
        function Pe(t, e, n, o, a, l) {
            var u, c, p, d;
            if (
                Gt[t] &&
                !1 !==
                (u = new Gt[t]()).init(
                    a,
                    u.rawVars
                        ? e[t]
                        : (function (t, e, n, o, a) {
                            if ((r(t) && (t = De(t, a, e, n, o)), !s(t) || (t.style && t.nodeType) || Rt(t))) return i(t) ? De(t, a, e, n, o) : t;
                            var l,
                                u = {};
                            for (l in t) u[l] = De(t[l], a, e, n, o);
                            return u;
                        })(e[t], o, a, l, n),
                    n,
                    o,
                    l
                ) &&
                ((n._pt = c = new Ye(n._pt, a, t, 0, 1, u.render, u, 0, u.priority)), n !== dt)
            )
                for (p = n._ptLookup[n._targets.indexOf(a)], d = u._props.length; d--;) p[u._props[d]] = c;
            return u;
        }
        A(Ce.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Ae,
            Se = function (t, e, n, o, a, s, l, u, c) {
                r(o) && (o = o(a || 0, t, s));
                var p,
                    f = t[e],
                    h = "get" !== n ? n : r(f) ? (c ? t[e.indexOf("set") || !r(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]()) : f,
                    m = r(f) ? (c ? Re : Be) : $e;
                if ((i(o) && (~o.indexOf("random(") && (o = V(o)), "=" === o.charAt(1) && (o = parseFloat(h) + parseFloat(o.substr(2)) * ("-" === o.charAt(0) ? -1 : 1) + (H(h) || 0))), h !== o))
                    return isNaN(h + o)
                        ? (f || e in t || d(e, o),
                            function (t, e, n, i, r, o, a) {
                                var s,
                                    l,
                                    u,
                                    c,
                                    p,
                                    d,
                                    f,
                                    h,
                                    m = new Ye(this._pt, t, e, 0, 1, Fe, null, r),
                                    g = 0,
                                    v = 0;
                                for (m.b = n, m.e = i, n += "", (f = ~(i += "").indexOf("random(")) && (i = V(i)), o && (o((h = [n, i]), t, e), (n = h[0]), (i = h[1])), l = n.match(Ht) || []; (s = Ht.exec(i));)
                                    (c = s[0]),
                                        (p = i.substring(g, s.index)),
                                        u ? (u = (u + 1) % 5) : "rgba(" === p.substr(-5) && (u = 1),
                                        c !== l[v++] &&
                                        ((d = parseFloat(l[v - 1]) || 0),
                                            (m._pt = { _next: m._pt, p: p || 1 === v ? p : ",", s: d, c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - d, m: u && u < 4 ? Math.round : 0 }),
                                            (g = Ht.lastIndex));
                                return (m.c = g < i.length ? i.substring(g, i.length) : ""), (m.fp = a), (It.test(i) || f) && (m.e = 0), (this._pt = m);
                            }.call(this, t, e, h, o, m, u || St.stringFilter, c))
                        : ((p = new Ye(this._pt, t, e, +h || 0, o - (h || 0), "boolean" == typeof f ? He : ze, 0, m)), c && (p.fp = c), l && p.modifier(l, this, t), (this._pt = p));
            },
            Ee = function t(e, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    u,
                    c,
                    p,
                    d,
                    f,
                    h,
                    m,
                    y = e.vars,
                    b = y.ease,
                    _ = y.startAt,
                    w = y.immediateRender,
                    x = y.lazy,
                    T = y.onUpdate,
                    C = y.onUpdateParams,
                    P = y.callbackScope,
                    S = y.runBackwards,
                    E = y.yoyoEase,
                    O = y.keyframes,
                    M = y.autoRevert,
                    L = e._dur,
                    N = e._startAt,
                    $ = e._targets,
                    B = e.parent,
                    R = B && "nested" === B.data ? B.parent._targets : $,
                    q = "auto" === e._overwrite,
                    z = e.timeline;
                if ((!z || (O && b) || (b = "none"), (e._ease = ye(b, Et.ease)), (e._yEase = E ? ve(ye(!0 === E ? b : E, Et.ease)) : 0), E && e._yoyo && !e._repeat && ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)), !z)) {
                    if ((N && N.render(-1, !0).kill(), _)) {
                        if ((j((e._startAt = Me.set($, A({ data: "isStart", overwrite: !1, parent: B, immediateRender: !0, lazy: l(x), startAt: null, delay: 0, onUpdate: T, onUpdateParams: C, callbackScope: P, stagger: 0 }, _)))), w))
                            if (0 < n) M || (e._startAt = 0);
                            else if (L) return;
                    } else if (S && L)
                        if (N) M || (e._startAt = 0);
                        else if ((n && (w = !1), j((e._startAt = Me.set($, te(D(y, Xt), { overwrite: !1, data: "isFromStart", lazy: w && l(x), immediateRender: w, stagger: 0, parent: B })))), w)) {
                            if (!n) return;
                        } else t(e._startAt, Ot);
                    for (i = D(y, Xt), m = (p = $[(e._pt = 0)] ? v($[0]).harness : 0) && y[p.prop], x = (L && l(x)) || (x && !L), r = 0; r < $.length; r++) {
                        if (
                            ((c = (s = $[r])._gsap || g($)[r]._gsap),
                                (e._ptLookup[r] = f = {}),
                                Vt[c.id] && k(),
                                (h = R === $ ? r : R.indexOf(s)),
                                p &&
                                !1 !== (d = new p()).init(s, m || i, e, h, R) &&
                                ((e._pt = a = new Ye(e._pt, s, d.name, 0, 1, d.render, d, 0, d.priority)),
                                    d._props.forEach(function (t) {
                                        f[t] = a;
                                    }),
                                    d.priority && (u = 1)),
                                !p || m)
                        )
                            for (o in i) Gt[o] && (d = Pe(o, i, e, h, s, R)) ? d.priority && (u = 1) : (f[o] = a = Se.call(e, s, o, "get", i[o], h, R, 0, y.stringFilter));
                        e._op && e._op[r] && e.kill(s, e._op[r]), q && e._pt && ((Ae = e), ot.killTweensOf(s, f, "started"), (Ae = 0)), e._pt && x && (Vt[c.id] = 1);
                    }
                    u && Xe(e), e._onInit && e._onInit(e);
                }
                (e._from = !z && !!y.runBackwards), (e._onUpdate = T), (e._initted = 1);
            },
            De = function (t, e, n, o, a) {
                return r(t) ? t.call(e, n, o, a) : i(t) && ~t.indexOf("random(") ? V(t) : t;
            },
            Oe = Zt + ",repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            je = (Oe + ",id,stagger,delay,duration,paused").split(","),
            Me = (function (t) {
                function r(e, i, r) {
                    var a;
                    "number" == typeof i && ((r.duration = i), (i = r), (r = null));
                    var u,
                        p,
                        d,
                        h,
                        v,
                        y,
                        b,
                        _,
                        w = (a =
                            t.call(
                                this,
                                (function (t) {
                                    var e = t.parent || ot,
                                        n = t.keyframes ? S : A;
                                    if (l(t.inherit)) for (; e;) n(t, e.vars.defaults), (e = e.parent);
                                    return t;
                                })(i),
                                r
                            ) || this).vars,
                        x = w.duration,
                        k = w.delay,
                        T = w.immediateRender,
                        C = w.stagger,
                        P = w.overwrite,
                        E = w.keyframes,
                        D = w.defaults,
                        O = Rt(e) && o(e[0]) ? [e] : oe(e);
                    if (((a._targets = O.length ? g(O) : f("GSAP target " + e + " not found. https://greensock.com", !St.nullTargetWarn) || []), (a._ptLookup = []), (a._overwrite = P), E || C || c(x) || c(k))) {
                        if (((i = a.vars), (u = a.timeline = new Ce({ data: "nested", defaults: D || {} })).kill(), (u.parent = n(a)), E))
                            A(u.vars.defaults, { ease: "none" }),
                                E.forEach(function (t) {
                                    return u.to(O, t, ">");
                                });
                        else {
                            if (((h = O.length), (b = C ? I(C) : m), s(C))) for (v in C) ~Oe.indexOf(v) && ((_ = _ || {})[v] = C[v]);
                            for (p = 0; p < h; p++) {
                                for (v in ((d = {}), i)) je.indexOf(v) < 0 && (d[v] = i[v]);
                                (d.stagger = 0),
                                    _ && te(d, _),
                                    i.yoyoEase && !i.repeat && (d.yoyoEase = i.yoyoEase),
                                    (y = O[p]),
                                    (d.duration = +De(x, n(a), p, y, O)),
                                    (d.delay = (+De(k, n(a), p, y, O) || 0) - a._delay),
                                    !C && 1 === h && d.delay && ((a._delay = k = d.delay), (a._start += k), (d.delay = 0)),
                                    u.to(y, d, b(p, y, O));
                            }
                            x = k = 0;
                        }
                        x || a.duration((x = u.duration()));
                    } else a.timeline = 0;
                    return (
                        !0 === P && ((Ae = n(a)), ot.killTweensOf(O), (Ae = 0)),
                        (T ||
                            (!x &&
                                !E &&
                                a._start === a.parent._time &&
                                l(T) &&
                                (function t(e) {
                                    return !e || (e._ts && t(e.parent));
                                })(n(a)) &&
                                "nested" !== a.parent.data)) &&
                        ((a._tTime = -Ot), a.render(Math.max(0, -k))),
                        a
                    );
                }
                e(r, t);
                var a = r.prototype;
                return (
                    (a.render = function (t, e, n) {
                        var i,
                            r,
                            o,
                            a,
                            s,
                            l,
                            u,
                            c,
                            p,
                            d = this._time,
                            f = this._tDur,
                            h = this._dur,
                            m = f - Ot < t && 0 <= t ? f : t < Ot ? 0 : t;
                        if (h) {
                            if (m !== this._tTime || !t || n || (this._startAt && this._zTime < 0 != t < 0)) {
                                if (((i = m), (c = this.timeline), this._repeat)) {
                                    if (
                                        (h < (i = _(m % (a = h + this._rDelay))) && (i = h),
                                            (o = ~~(m / a)) && o === m / a && ((i = h), o--),
                                            (l = this._yoyo && 1 & o) && ((p = this._yEase), (i = h - i)),
                                            (s = ee(this._tTime, a)),
                                            i === d && !n && this._initted)
                                    )
                                        return this;
                                    o !== s && this.vars.repeatRefresh && !this._lock && ((this._lock = n = 1), (this.render(a * o, !0).invalidate()._lock = 0));
                                }
                                if (!this._initted && B(this, i, n, e)) return (this._tTime = 0), this;
                                for (
                                    this._tTime = m,
                                    this._time = i,
                                    !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                    this.ratio = u = (p || this._ease)(i / h),
                                    this._from && (this.ratio = u = 1 - u),
                                    d || !i || e || se(this, "onStart"),
                                    r = this._pt;
                                    r;

                                )
                                    r.r(u, r.d), (r = r._next);
                                (c && c.render(t < 0 ? t : !i && l ? -Ot : c._dur * u, e, n)) || (this._startAt && (this._zTime = t)),
                                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), se(this, "onUpdate")),
                                    this._repeat && o !== s && this.vars.onRepeat && !e && this.parent && se(this, "onRepeat"),
                                    (m !== f && m) ||
                                    this._tTime !== m ||
                                    (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, n),
                                        (!t && h) || !((m && 0 < this._ts) || (!m && this._ts < 0)) || j(this, 1),
                                        e || (t < 0 && !d) || (se(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()));
                            }
                        } else
                            !(function (t, e, n, i) {
                                var r,
                                    o = t._zTime < 0 ? 0 : 1,
                                    a = e < 0 ? 0 : 1,
                                    s = t._rDelay,
                                    l = 0;
                                if (
                                    (s && t._repeat && ((l = ie(0, t._tDur, e)), ee(l, s) !== ee(t._tTime, s) && ((o = 1 - a), t.vars.repeatRefresh && t._initted && t.invalidate())),
                                        (t._initted || !B(t, e, i, n)) && (a !== o || i || t._zTime === Ot || (!e && t._zTime)))
                                ) {
                                    for (t._zTime = e || (n ? Ot : 0), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = l, n || se(t, "onStart"), r = t._pt; r;) r.r(a, r.d), (r = r._next);
                                    !a && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, i),
                                        t._onUpdate && !n && se(t, "onUpdate"),
                                        l && t._repeat && !n && t.parent && se(t, "onRepeat"),
                                        (e >= t._tDur || e < 0) && t.ratio === a && (t.ratio && j(t, 1), n || (se(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                                }
                            })(this, t, e, n);
                        return this;
                    }),
                    (a.targets = function () {
                        return this._targets;
                    }),
                    (a.invalidate = function () {
                        return (this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
                    }),
                    (a.kill = function (t, e) {
                        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))) return K(this);
                        if (this.timeline) return this.timeline.killTweensOf(t, e, Ae && !0 !== Ae.vars.overwrite), this;
                        var n,
                            r,
                            o,
                            a,
                            s,
                            l,
                            u,
                            c = this._targets,
                            p = t ? oe(t) : c,
                            d = this._ptLookup,
                            f = this._pt;
                        if (
                            (!e || "all" === e) &&
                            (function (t, e) {
                                for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];);
                                return n < 0;
                            })(c, p)
                        )
                            return K(this);
                        for (
                            n = this._op = this._op || [],
                            "all" !== e &&
                            (i(e) &&
                                ((s = {}),
                                    b(e, function (t) {
                                        return (s[t] = 1);
                                    }),
                                    (e = s)),
                                (e = (function (t, e) {
                                    var n,
                                        i,
                                        r,
                                        o,
                                        a = t[0] ? v(t[0]).harness : 0,
                                        s = a && a.aliases;
                                    if (!s) return e;
                                    for (i in ((n = te({}, e)), s)) if ((i in n)) for (r = (o = s[i].split(",")).length; r--;) n[o[r]] = n[i];
                                    return n;
                                })(c, e))),
                            u = c.length;
                            u--;

                        )
                            if (~p.indexOf(c[u]))
                                for (s in ((r = d[u]), "all" === e ? ((n[u] = e), (a = r), (o = {})) : ((o = n[u] = n[u] || {}), (a = e)), a))
                                    (l = r && r[s]) && (("kill" in l.d && !0 !== l.d.kill(s)) || O(this, l, "_pt"), delete r[s]), "all" !== o && (o[s] = 1);
                        return this._initted && !this._pt && f && K(this), this;
                    }),
                    (r.to = function (t, e, n) {
                        return new r(t, e, n);
                    }),
                    (r.from = function (t, e) {
                        return new r(t, x(arguments, 1));
                    }),
                    (r.delayedCall = function (t, e, n, i) {
                        return new r(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: i });
                    }),
                    (r.fromTo = function (t, e, n) {
                        return new r(t, x(arguments, 2));
                    }),
                    (r.set = function (t, e) {
                        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new r(t, e);
                    }),
                    (r.killTweensOf = function (t, e, n) {
                        return ot.killTweensOf(t, e, n);
                    }),
                    r
                );
            })(ke);
        function Le(t, e, n) {
            return t.setAttribute(e, n);
        }
        function Ne(t, e, n, i) {
            i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
        }
        A(Me.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
            b("staggerTo,staggerFrom,staggerFromTo", function (t) {
                Me[t] = function () {
                    var e = new Ce(),
                        n = oe(arguments);
                    return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
                };
            });
        var $e = function (t, e, n) {
            return (t[e] = n);
        },
            Be = function (t, e, n) {
                return t[e](n);
            },
            Re = function (t, e, n, i) {
                return t[e](i.fp, n);
            },
            qe = function (t, e) {
                return r(t[e]) ? Be : a(t[e]) && t.setAttribute ? Le : $e;
            },
            ze = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
            },
            He = function (t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e);
            },
            Fe = function (t, e) {
                var n = e._pt,
                    i = "";
                if (!t && e.b) i = e.b;
                else if (1 === t && e.e) i = e.e;
                else {
                    for (; n;) (i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i), (n = n._next);
                    i += e.c;
                }
                e.set(e.t, e.p, i, e);
            },
            Ie = function (t, e) {
                for (var n = e._pt; n;) n.r(t, n.d), (n = n._next);
            },
            We = function (t, e, n, i) {
                for (var r, o = this._pt; o;) (r = o._next), o.p === i && o.modifier(t, e, n), (o = r);
            },
            Ue = function (t) {
                for (var e, n, i = this._pt; i;) (n = i._next), (i.p === t && !i.op) || i.op === t ? O(this, i, "_pt") : i.dep || (e = 1), (i = n);
                return !e;
            },
            Xe = function (t) {
                for (var e, n, i, r, o = t._pt; o;) {
                    for (e = o._next, n = i; n && n.pr > o.pr;) n = n._next;
                    (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o), (o._next = n) ? (n._prev = o) : (r = o), (o = e);
                }
                t._pt = i;
            },
            Ye =
                ((Ve.prototype.modifier = function (t, e, n) {
                    (this.mSet = this.mSet || this.set), (this.set = Ne), (this.m = t), (this.mt = n), (this.tween = e);
                }),
                    Ve);
        function Ve(t, e, n, i, r, o, a, s, l) {
            (this.t = e), (this.s = i), (this.c = r), (this.p = n), (this.r = o || ze), (this.d = a || this), (this.set = s || $e), (this.pr = l || 0), (this._next = t) && (t._prev = this);
        }
        b(
            Zt + ",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",
            function (t) {
                (Xt[t] = 1), "on" === t.substr(0, 2) && (Xt[t + "Params"] = 1);
            }
        ),
            (Ut.TweenMax = Ut.TweenLite = Me),
            (Ut.TimelineLite = Ut.TimelineMax = Ce),
            (ot = new Ce({ sortChildren: !1, defaults: Et, autoRemoveChildren: !0, id: "root" })),
            (St.stringFilter = tt);
        var Ge = {
            registerPlugin: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                e.forEach(function (t) {
                    return (function (t) {
                        var e = (t = (!t.name && t.default) || t).name,
                            n = r(t),
                            i =
                                e && !n && t.init
                                    ? function () {
                                        this._props = [];
                                    }
                                    : t,
                            o = { init: m, render: Ie, add: Se, kill: Ue, modifier: We, rawVars: 0 },
                            a = { targetTest: 0, get: 0, getSetter: qe, aliases: {}, register: 0 };
                        if ((fe(), t !== i)) {
                            if (Gt[e]) return;
                            A(i, A(D(t, o), a)), te(i.prototype, te(o, D(t, a))), (Gt[(i.prop = e)] = i), t.targetTest && (Jt.push(i), (Xt[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                        }
                        h(e, i), t.register && t.register(Je, i, Ye);
                    })(t);
                });
            },
            timeline: function (t) {
                return new Ce(t);
            },
            getTweensOf: function (t, e) {
                return ot.getTweensOf(t, e);
            },
            getProperty: function (t, e, n, r) {
                i(t) && (t = oe(t)[0]);
                var o = v(t || {}).get,
                    a = n ? P : C;
                return (
                    "native" === n && (n = ""),
                    t
                        ? e
                            ? a(((Gt[e] && Gt[e].get) || o)(t, e, n, r))
                            : function (e, n, i) {
                                return a(((Gt[e] && Gt[e].get) || o)(t, e, n, i));
                            }
                        : t
                );
            },
            quickSetter: function (t, e, n) {
                if (1 < (t = oe(t)).length) {
                    var i = t.map(function (t) {
                        return Je.quickSetter(t, e, n);
                    }),
                        r = i.length;
                    return function (t) {
                        for (var e = r; e--;) i[e](t);
                    };
                }
                t = t[0] || {};
                var o = Gt[e],
                    a = v(t),
                    s = o
                        ? function (e) {
                            var i = new o();
                            (dt._pt = 0), i.init(t, n ? e + n : e, dt, 0, [t]), i.render(1, i), dt._pt && Ie(1, dt);
                        }
                        : a.set(t, e);
                return o
                    ? s
                    : function (i) {
                        return s(t, e, n ? i + n : i, a, 1);
                    };
            },
            isTweening: function (t) {
                return 0 < ot.getTweensOf(t, !0).length;
            },
            defaults: function (t) {
                return t && t.ease && (t.ease = ye(t.ease, Et.ease)), E(Et, t || {});
            },
            config: function (t) {
                return E(St, t || {});
            },
            registerEffect: function (t) {
                var e = t.name,
                    n = t.effect,
                    i = t.plugins,
                    r = t.defaults,
                    o = t.extendTimeline;
                (i || "").split(",").forEach(function (t) {
                    return t && !Gt[t] && !Ut[t] && f(e + " effect requires " + t + " plugin.");
                }),
                    (Kt[e] = function (t, e) {
                        return n(oe(t), A(e || {}, r));
                    }),
                    o &&
                    (Ce.prototype[e] = function (t, n, i) {
                        return this.add(Kt[e](t, s(n) ? n : (i = n) && {}), i);
                    });
            },
            registerEase: function (t, e) {
                he[t] = ye(e);
            },
            parseEase: function (t, e) {
                return arguments.length ? ye(t, e) : he;
            },
            getById: function (t) {
                return ot.getById(t);
            },
            exportRoot: function (t, e) {
                void 0 === t && (t = {});
                var n,
                    i,
                    r = new Ce(t);
                for (r.smoothChildTiming = l(t.smoothChildTiming), ot.remove(r), r._dp = 0, r._time = r._tTime = ot._time, n = ot._first; n;)
                    (i = n._next), (!e && !n._dur && n instanceof Me && n.vars.onComplete === n._targets[0]) || $(r, n, n._start - n._delay), (n = i);
                return $(ot, r, 0), r;
            },
            utils: {
                wrap: function t(e, n, i) {
                    var r = n - e;
                    return Rt(e)
                        ? Y(e, t(0, e.length), n)
                        : z(i, function (t) {
                            return ((r + ((t - e) % r)) % r) + e;
                        });
                },
                wrapYoyo: function t(e, n, i) {
                    var r = n - e,
                        o = 2 * r;
                    return Rt(e)
                        ? Y(e, t(0, e.length - 1), n)
                        : z(i, function (t) {
                            return e + (r < (t = (o + ((t - e) % o)) % o) ? o - t : t);
                        });
                },
                distribute: I,
                random: X,
                snap: U,
                normalize: function (t, e, n) {
                    return ae(t, e, 0, 1, n);
                },
                getUnit: H,
                clamp: function (t, e, n) {
                    return z(n, function (n) {
                        return ie(t, e, n);
                    });
                },
                splitColor: J,
                toArray: oe,
                mapRange: ae,
                pipe: function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function (t) {
                        return e.reduce(function (t, e) {
                            return e(t);
                        }, t);
                    };
                },
                unitize: function (t, e) {
                    return function (n) {
                        return t(parseFloat(n)) + (e || H(n));
                    };
                },
                interpolate: function t(e, n, r, o) {
                    var a = isNaN(e + n)
                        ? 0
                        : function (t) {
                            return (1 - t) * e + t * n;
                        };
                    if (!a) {
                        var s,
                            l,
                            u,
                            c,
                            p,
                            d = i(e),
                            f = {};
                        if ((!0 === r && (o = 1) && (r = null), d)) (e = { p: e }), (n = { p: n });
                        else if (Rt(e) && !Rt(n)) {
                            for (u = [], c = e.length, p = c - 2, l = 1; l < c; l++) u.push(t(e[l - 1], e[l]));
                            c--,
                                (a = function (t) {
                                    t *= c;
                                    var e = Math.min(p, ~~t);
                                    return u[e](t - e);
                                }),
                                (r = n);
                        } else o || (e = te(Rt(e) ? [] : {}, e));
                        if (!u) {
                            for (s in n) Se.call(f, e, s, "get", n[s]);
                            a = function (t) {
                                return Ie(t, f) || (d ? e.p : e);
                            };
                        }
                    }
                    return z(r, a);
                },
            },
            install: p,
            effects: Kt,
            ticker: de,
            updateRoot: Ce.updateRoot,
            plugins: Gt,
            globalTimeline: ot,
            core: { PropTween: Ye, globals: h, Tween: Me, Timeline: Ce, Animation: ke, getCache: v },
        };
        function Ke(t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n;
        }
        function Qe(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (t, n, r) {
                    r._onInit = function (t) {
                        var r, o;
                        if (
                            (i(n) &&
                                ((r = {}),
                                    b(n, function (t) {
                                        return (r[t] = 1);
                                    }),
                                    (n = r)),
                                e)
                        ) {
                            for (o in ((r = {}), n)) r[o] = e(n[o]);
                            n = r;
                        }
                        !(function (t, e) {
                            var n,
                                i,
                                r,
                                o = t._targets;
                            for (n in e) for (i = o.length; i--;) (r = (r = t._ptLookup[i][n]) && r.d) && (r._pt && (r = Ke(r, n)), r && r.modifier && r.modifier(e[n], t, o[i], n));
                        })(t, n);
                    };
                },
            };
        }
        b("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
            return (Ge[t] = Me[t]);
        }),
            de.add(Ce.updateRoot),
            (dt = Ge.to({}, { duration: 0 }));
        var Je =
            Ge.registerPlugin(
                {
                    name: "attr",
                    init: function (t, e, n, i, r) {
                        for (var o in e) this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o), this._props.push(o);
                    },
                },
                {
                    name: "endArray",
                    init: function (t, e) {
                        for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n]);
                    },
                },
                Qe("roundProps", W),
                Qe("modifiers"),
                Qe("snap", U)
            ) || Ge;
        function Ze(t, e) {
            return e.set(e.t, e.p, ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e);
        }
        function tn(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e);
        }
        function en(t, e) {
            return e.set(e.t, e.p, t ? ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u : e.b, e);
        }
        function nn(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        }
        function rn(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
        }
        function on(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        }
        function an(t, e, n) {
            return (t.style[e] = n);
        }
        function sn(t, e, n) {
            return t.style.setProperty(e, n);
        }
        function ln(t, e, n) {
            return (t._gsap[e] = n);
        }
        function un(t, e, n) {
            return (t._gsap.scaleX = t._gsap.scaleY = n);
        }
        function cn(t, e, n, i, r) {
            var o = t._gsap;
            (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
        }
        function pn(t, e, n, i, r) {
            var o = t._gsap;
            (o[e] = n), o.renderTransform(r, o);
        }
        function dn(t, e) {
            var n = Mn.createElementNS ? Mn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Mn.createElement(t);
            return n.style ? n : Mn.createElement(t);
        }
        function fn(t, e, n) {
            var i = getComputedStyle(t);
            return i[e] || i.getPropertyValue(e.replace(ci, "-$1").toLowerCase()) || i.getPropertyValue(e) || (!n && fn(t, yi(e) || e, 1)) || "";
        }
        function hn() {
            "undefined" == typeof window ||
                ((jn = window),
                    (Mn = jn.document),
                    (Ln = Mn.documentElement),
                    ($n = dn("div") || { style: {} }),
                    (Bn = dn("div")),
                    (mi = yi(mi)),
                    (gi = yi(gi)),
                    ($n.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                    (qn = !!yi("perspective")),
                    (Nn = 1));
        }
        function mn(t, e) {
            for (var n = e.length; n--;) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        }
        function gn(t) {
            var e;
            try {
                e = t.getBBox();
            } catch (n) {
                e = function t(e) {
                    var n,
                        i = dn("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        o = this.nextSibling,
                        a = this.style.cssText;
                    if ((Ln.appendChild(i), i.appendChild(this), (this.style.display = "block"), e))
                        try {
                            (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                        } catch (e) { }
                    else this._gsapBBox && (n = this._gsapBBox());
                    return o ? r.insertBefore(this, o) : r.appendChild(this), Ln.removeChild(i), (this.style.cssText = a), n;
                }.call(t, !0);
            }
            return !e || e.width || e.x || e.y ? e : { x: +mn(t, ["x", "cx", "x1"]) || 0, y: +mn(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
        }
        function vn(t) {
            return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !gn(t));
        }
        function yn(t, e) {
            if (e) {
                var n = t.style;
                e in ai && (e = mi), n.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), n.removeProperty(e.replace(ci, "-$1").toLowerCase())) : n.removeAttribute(e);
            }
        }
        function bn(t, e, n, i, r, o) {
            var a = new Ye(t._pt, e, n, 0, 1, o ? on : rn);
            return ((t._pt = a).b = i), (a.e = r), t._props.push(n), a;
        }
        function _n(t, e, n, i) {
            var r,
                o,
                a,
                s,
                l = parseFloat(n) || 0,
                u = (n + "").trim().substr((l + "").length) || "px",
                c = $n.style,
                p = di.test(e),
                d = "svg" === t.tagName.toLowerCase(),
                f = (d ? "client" : "offset") + (p ? "Width" : "Height"),
                h = "px" === i;
            return i === u || !l || bi[i] || bi[u]
                ? l
                : ((s = t.getCTM && vn(t)),
                    "%" === i && ai[e]
                        ? _((l / (s ? t.getBBox()[p ? "width" : "height"] : t[f])) * 100)
                        : ((c[p ? "width" : "height"] = 100 + (h ? u : i)),
                            (o = "em" === i && t.appendChild && !d ? t : t.parentNode),
                            s && (o = (t.ownerSVGElement || {}).parentNode),
                            (o && o !== Mn && o.appendChild) || (o = Mn.body),
                            (a = o._gsap) && "%" === i && a.width && p && a.time === de.time
                                ? _((l / a.width) * 100)
                                : (o.appendChild($n), (r = $n[f]), o.removeChild($n), p && "%" === i && (((a = v(o)).time = de.time), (a.width = o[f])), _(h ? (r * l) / 100 : (100 / r) * l))));
        }
        function wn(t, e, n, i) {
            var r;
            return (
                Nn || hn(),
                e in hi && "transform" !== e && ~(e = hi[e]).indexOf(",") && (e = e.split(",")[0]),
                ai[e] && "transform" !== e
                    ? ((r = Ti(t, i)), (r = "transformOrigin" !== e ? r[e] : Ci(fn(t, gi)) + r.zOrigin + "px"))
                    : ((r = t.style[e]) && "auto" !== r && !i && !~(r + "").indexOf("calc(")) || (r = fn(t, e) || y(t, e) || ("opacity" === e ? 1 : 0)),
                n ? _n(t, e, r, n) + n : r
            );
        }
        function xn(t, e, n, i) {
            var r,
                o,
                a,
                s,
                l,
                u,
                c,
                p,
                d,
                f,
                h,
                m,
                g = new Ye(this._pt, t.style, e, 0, 1, Fe),
                v = 0,
                y = 0;
            if (
                ((g.b = n),
                    (g.e = i),
                    (n += ""),
                    "auto" == (i += "") && ((t.style[e] = i), (i = fn(t, e) || i), (t.style[e] = n)),
                    tt((r = [n, i])),
                    (i = r[1]),
                    !!(u = (n = r[0]).indexOf("rgba(")) != !!(c = i.indexOf("rgba(")) && (u ? (n = n.substr(u) + " " + n.substr(0, u - 1)) : (i = i.substr(c) + " " + i.substr(0, c - 1))),
                    (a = n.match(pi) || []),
                    (i.match(pi) || []).length)
            ) {
                for (; (o = pi.exec(i));)
                    (c = o[0]),
                        (d = i.substring(v, o.index)),
                        l ? (l = (l + 1) % 5) : "rgba(" === d.substr(-5) && (l = 1),
                        c !== (u = a[y++] || "") &&
                        ((s = parseFloat(u) || 0),
                            (h = u.substr((s + "").length)),
                            (m = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) && (c = c.substr(2)),
                            (p = parseFloat(c)),
                            (f = c.substr((p + "").length)),
                            (v = pi.lastIndex - f.length),
                            f || ((f = f || St.units[e] || h), v === i.length && ((i += f), (g.e += f))),
                            h !== f && (s = _n(t, e, u, f) || 0),
                            (g._pt = { _next: g._pt, p: d || 1 === y ? d : ",", s: s, c: m ? m * p : p - s, m: l && l < 4 ? Math.round : 0 }));
                g.c = v < i.length ? i.substring(v, i.length) : "";
            } else g.r = "display" === e && "none" === i ? on : rn;
            return It.test(i) && (g.e = 0), (this._pt = g);
        }
        function kn(t) {
            var e = t.split(" "),
                n = e[0],
                i = e[1] || "50%";
            return ("top" !== n && "bottom" !== n && "left" !== i && "right" !== i) || ((t = n), (n = i), (i = t)), (e[0] = _i[n] || n), (e[1] = _i[i] || i), e.join(" ");
        }
        function Tn(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n,
                    i,
                    r,
                    o = e.t,
                    a = o.style,
                    s = e.u;
                if ("all" === s || !0 === s) (a.cssText = ""), (i = 1);
                else for (r = (s = s.split(",")).length; -1 < --r;) (n = s[r]), ai[n] && ((i = 1), (n = "transformOrigin" === n ? gi : mi)), yn(o, n);
                i && (yn(o, mi), (i = o._gsap) && (i.svg && o.removeAttribute("transform"), Ti(o, 1)));
            }
        }
        function Cn(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        }
        function Pn(t) {
            var e = fn(t, mi);
            return Cn(e) ? xi : e.substr(7).match(zt).map(_);
        }
        function An(t, e) {
            var n,
                i,
                r,
                o,
                a = t._gsap,
                s = t.style,
                l = Pn(t);
            return a.svg && t.getAttribute("transform")
                ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",")
                    ? xi
                    : l
                : (l !== xi ||
                    t.offsetParent ||
                    t === Ln ||
                    a.svg ||
                    ((r = s.display),
                        (s.display = "block"),
                        ((n = t.parentNode) && t.offsetParent) || ((o = 1), (i = t.nextSibling), Ln.appendChild(t)),
                        (l = Pn(t)),
                        r ? (s.display = r) : yn(t, "display"),
                        o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : Ln.removeChild(t))),
                    e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        }
        function Sn(t, e, n, i, r, o) {
            var a,
                s,
                l,
                u = t._gsap,
                c = r || An(t, !0),
                p = u.xOrigin || 0,
                d = u.yOrigin || 0,
                f = u.xOffset || 0,
                h = u.yOffset || 0,
                m = c[0],
                g = c[1],
                v = c[2],
                y = c[3],
                b = c[4],
                _ = c[5],
                w = e.split(" "),
                x = parseFloat(w[0]) || 0,
                k = parseFloat(w[1]) || 0;
            n
                ? c !== xi && (s = m * y - g * v) && ((l = x * (-g / s) + k * (m / s) - (m * _ - g * b) / s), (x = x * (y / s) + k * (-v / s) + (v * _ - y * b) / s), (k = l))
                : ((x = (a = gn(t)).x + (~w[0].indexOf("%") ? (x / 100) * a.width : x)), (k = a.y + (~(w[1] || w[0]).indexOf("%") ? (k / 100) * a.height : k))),
                i || (!1 !== i && u.smooth) ? ((b = x - p), (_ = k - d), (u.xOffset = f + (b * m + _ * v) - b), (u.yOffset = h + (b * g + _ * y) - _)) : (u.xOffset = u.yOffset = 0),
                (u.xOrigin = x),
                (u.yOrigin = k),
                (u.smooth = !!i),
                (u.origin = e),
                (u.originIsAbsolute = !!n),
                (t.style[gi] = "0px 0px"),
                o && (bn(o, u, "xOrigin", p, x), bn(o, u, "yOrigin", d, k), bn(o, u, "xOffset", f, u.xOffset), bn(o, u, "yOffset", h, u.yOffset));
        }
        function En(t, e, n) {
            var i = H(e);
            return _(parseFloat(e) + parseFloat(_n(t, "x", n + "px", i))) + i;
        }
        function Dn(t, e, n, r, o, a) {
            var s,
                l,
                u = 360,
                c = i(o),
                p = parseFloat(o) * (c && ~o.indexOf("rad") ? si : 1),
                d = a ? p * a : p - r,
                f = r + d + "deg";
            return (
                c && ("short" === (s = o.split("_")[1]) && (d %= u) != d % 180 && (d += d < 0 ? u : -u), "cw" === s && d < 0 ? (d = ((d + 36e9) % u) - ~~(d / u) * u) : "ccw" === s && 0 < d && (d = ((d - 36e9) % u) - ~~(d / u) * u)),
                (t._pt = l = new Ye(t._pt, e, n, r, d, tn)),
                (l.e = f),
                (l.u = "deg"),
                t._props.push(n),
                l
            );
        }
        function On(t, e, n) {
            var i,
                r,
                o,
                a,
                s,
                l,
                u,
                c = Bn.style,
                p = n._gsap;
            for (r in ((c.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;"), (c[mi] = e), Mn.body.appendChild(Bn), (i = Ti(Bn, 1)), ai))
                (o = p[r]) !== (a = i[r]) && "perspective" !== r && ((s = H(o) !== (u = H(a)) ? _n(n, r, o, u) : parseFloat(o)), (l = parseFloat(a)), (t._pt = new Ye(t._pt, p, r, s, l - s, Ze)), (t._pt.u = u), t._props.push(r));
            Mn.body.removeChild(Bn);
        }
        (Me.version = Ce.version = Je.version = "3.0.5"), (ct = 1), u() && fe();
        var jn,
            Mn,
            Ln,
            Nn,
            $n,
            Bn,
            Rn,
            qn,
            zn,
            Hn,
            Fn = he.Power0,
            In = he.Power1,
            Wn = he.Power2,
            Un = he.Power3,
            Xn = he.Power4,
            Yn = he.Linear,
            Vn = he.Quad,
            Gn = he.Cubic,
            Kn = he.Quart,
            Qn = he.Quint,
            Jn = he.Strong,
            Zn = he.Elastic,
            ti = he.Back,
            ei = he.SteppedEase,
            ni = he.Bounce,
            ii = he.Sine,
            ri = he.Expo,
            oi = he.Circ,
            ai = {},
            si = 180 / Math.PI,
            li = Math.PI / 180,
            ui = Math.atan2,
            ci = /([A-Z])/g,
            pi = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,
            di = /(?:left|right|width|margin|padding|x)/i,
            fi = /[\s,\(]\S/,
            hi = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
            mi = "transform",
            gi = mi + "Origin",
            vi = "O,Moz,ms,Ms,Webkit".split(","),
            yi = function (t, e) {
                var n = (e || $n).style,
                    i = 5;
                if (t in n) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(vi[i] + t in n););
                return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? vi[i] : "") + t;
            },
            bi = { deg: 1, rad: 1, turn: 1 },
            _i = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
            wi = {
                clearProps: function (t, e, n, i, r) {
                    if ("isFromStart" !== r.data) {
                        var o = (t._pt = new Ye(t._pt, e, n, 0, 0, Tn));
                        return (o.u = i), (o.pr = -10), (o.tween = r), t._props.push(n), 1;
                    }
                },
            },
            xi = [1, 0, 0, 1, 0, 0],
            ki = {},
            Ti = function (t, e) {
                var n = t._gsap || new xe(t);
                if ("x" in n && !e && !n.uncache) return n;
                var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    p,
                    d,
                    f,
                    h,
                    m,
                    g,
                    v,
                    y,
                    b,
                    w,
                    x,
                    k,
                    T,
                    C,
                    P,
                    A,
                    S,
                    E,
                    D,
                    O,
                    j,
                    M,
                    L = t.style,
                    N = n.scaleX < 0,
                    $ = n.xOrigin || 0,
                    B = n.yOrigin || 0,
                    R = "deg",
                    q = fn(t, gi) || "0";
                return (
                    (i = r = o = l = u = c = p = d = f = 0),
                    (a = s = 1),
                    (n.svg = !(!t.getCTM || !vn(t))),
                    (h = An(t, n.svg)),
                    n.svg && Sn(t, q, n.originIsAbsolute, !1 !== n.smooth, h),
                    h !== xi &&
                    ((y = h[0]),
                        (b = h[1]),
                        (w = h[2]),
                        (x = h[3]),
                        (i = k = h[4]),
                        (r = T = h[5]),
                        6 === h.length
                            ? ((a = Math.sqrt(y * y + b * b)), (s = Math.sqrt(x * x + w * w)), (l = y || b ? ui(b, y) * si : 0), (p = w || x ? ui(w, x) * si + l : 0), n.svg && ((i -= $ - ($ * y + B * w)), (r -= B - ($ * b + B * x))))
                            : ((M = h[6]),
                                (O = h[7]),
                                (S = h[8]),
                                (E = h[9]),
                                (D = h[10]),
                                (j = h[11]),
                                (i = h[12]),
                                (r = h[13]),
                                (o = h[14]),
                                (u = (m = ui(M, D)) * si),
                                m &&
                                ((C = k * (g = Math.cos(-m)) + S * (v = Math.sin(-m))),
                                    (P = T * g + E * v),
                                    (A = M * g + D * v),
                                    (S = k * -v + S * g),
                                    (E = T * -v + E * g),
                                    (D = M * -v + D * g),
                                    (j = O * -v + j * g),
                                    (k = C),
                                    (T = P),
                                    (M = A)),
                                (c = (m = ui(-w, D)) * si),
                                m && ((g = Math.cos(-m)), (j = x * (v = Math.sin(-m)) + j * g), (y = C = y * g - S * v), (b = P = b * g - E * v), (w = A = w * g - D * v)),
                                (l = (m = ui(b, y)) * si),
                                m && ((C = y * (g = Math.cos(m)) + b * (v = Math.sin(m))), (P = k * g + T * v), (b = b * g - y * v), (T = T * g - k * v), (y = C), (k = P)),
                                u && 359.9 < Math.abs(u) + Math.abs(l) && ((u = l = 0), (c = 180 - c)),
                                (a = _(Math.sqrt(y * y + b * b + w * w))),
                                (s = _(Math.sqrt(T * T + M * M))),
                                (m = ui(k, T)),
                                (p = 2e-4 < Math.abs(m) ? m * si : 0),
                                (f = j ? 1 / (j < 0 ? -j : j) : 0)),
                        n.svg && ((h = t.getAttribute("transform")), (n.forceCSS = t.setAttribute("transform", "") || !Cn(fn(t, mi))), h && t.setAttribute("transform", h))),
                    90 < Math.abs(p) && Math.abs(p) < 270 && (N ? ((a *= -1), (p += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((s *= -1), (p += p <= 0 ? 180 : -180))),
                    (n.x = ((n.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px"),
                    (n.y = ((n.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px"),
                    (n.z = o + "px"),
                    (n.scaleX = _(a)),
                    (n.scaleY = _(s)),
                    (n.rotation = _(l) + R),
                    (n.rotationX = _(u) + R),
                    (n.rotationY = _(c) + R),
                    (n.skewX = p + R),
                    (n.skewY = d + R),
                    (n.transformPerspective = f + "px"),
                    (n.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (L[gi] = Ci(q)),
                    (n.xOffset = n.yOffset = 0),
                    (n.force3D = St.force3D),
                    (n.renderTransform = n.svg ? Oi : qn ? Di : Pi),
                    (n.uncache = 0),
                    n
                );
            },
            Ci = function (t) {
                return (t = t.split(" "))[0] + " " + t[1];
            },
            Pi = function (t, e) {
                (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Di(t, e);
            },
            Ai = "0deg",
            Si = "0px",
            Ei = ") ",
            Di = function (t, e) {
                var n = e || this,
                    i = n.xPercent,
                    r = n.yPercent,
                    o = n.x,
                    a = n.y,
                    s = n.z,
                    l = n.rotation,
                    u = n.rotationY,
                    c = n.rotationX,
                    p = n.skewX,
                    d = n.skewY,
                    f = n.scaleX,
                    h = n.scaleY,
                    m = n.transformPerspective,
                    g = n.force3D,
                    v = n.target,
                    y = n.zOrigin,
                    b = "",
                    _ = ("auto" === g && t && 1 !== t) || !0 === g;
                if (y && (c !== Ai || u !== Ai)) {
                    var w,
                        x = parseFloat(u) * li,
                        k = Math.sin(x),
                        T = Math.cos(x);
                    (x = parseFloat(c) * li), (o = En(v, o, k * (w = Math.cos(x)) * -y)), (a = En(v, a, -Math.sin(x) * -y)), (s = En(v, s, T * w * -y + y));
                }
                (i || r) && (b = "translate(" + i + "%, " + r + "%) "),
                    (!_ && o === Si && a === Si && s === Si) || (b += s !== Si || _ ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + Ei),
                    m !== Si && (b += "perspective(" + m + Ei),
                    l !== Ai && (b += "rotate(" + l + Ei),
                    u !== Ai && (b += "rotateY(" + u + Ei),
                    c !== Ai && (b += "rotateX(" + c + Ei),
                    (p === Ai && d === Ai) || (b += "skew(" + p + ", " + d + Ei),
                    (1 === f && 1 === h) || (b += "scale(" + f + ", " + h + Ei),
                    (v.style[mi] = b || "translate(0, 0)");
            },
            Oi = function (t, e) {
                var n,
                    i,
                    r,
                    o,
                    a,
                    s = e || this,
                    l = s.xPercent,
                    u = s.yPercent,
                    c = s.x,
                    p = s.y,
                    d = s.rotation,
                    f = s.skewX,
                    h = s.skewY,
                    m = s.scaleX,
                    g = s.scaleY,
                    v = s.target,
                    y = s.xOrigin,
                    b = s.yOrigin,
                    w = s.xOffset,
                    x = s.yOffset,
                    k = s.forceCSS,
                    T = parseFloat(c),
                    C = parseFloat(p);
                (d = parseFloat(d)),
                    (f = parseFloat(f)),
                    (h = parseFloat(h)) && ((f += h = parseFloat(h)), (d += h)),
                    d || f
                        ? ((d *= li),
                            (f *= li),
                            (n = Math.cos(d) * m),
                            (i = Math.sin(d) * m),
                            (r = Math.sin(d - f) * -g),
                            (o = Math.cos(d - f) * g),
                            f && ((h *= li), (a = Math.tan(f - h)), (r *= a = Math.sqrt(1 + a * a)), (o *= a), h && ((a = Math.tan(h)), (n *= a = Math.sqrt(1 + a * a)), (i *= a))),
                            (n = _(n)),
                            (i = _(i)),
                            (r = _(r)),
                            (o = _(o)))
                        : ((n = m), (o = g), (i = r = 0)),
                    ((T && !~(c + "").indexOf("px")) || (C && !~(p + "").indexOf("px"))) && ((T = _n(v, "x", c, "px")), (C = _n(v, "y", p, "px"))),
                    (y || b || w || x) && ((T = _(T + y - (y * n + b * r) + w)), (C = _(C + b - (y * i + b * o) + x))),
                    (l || u) && ((T = _(T + (l / 100) * (a = v.getBBox()).width)), (C = _(C + (u / 100) * a.height))),
                    (a = "matrix(" + n + "," + i + "," + r + "," + o + "," + T + "," + C + ")"),
                    v.setAttribute("transform", a),
                    k && (v.style[mi] = a);
            },
            ji = {
                name: "css",
                register: hn,
                targetTest: function (t) {
                    return t.style && t.nodeType;
                },
                init: function (t, e, n, i, r) {
                    var o,
                        a,
                        s,
                        l,
                        u,
                        c,
                        p,
                        f,
                        h,
                        m,
                        g,
                        v,
                        y,
                        b,
                        _,
                        w = this._props,
                        x = t.style;
                    for (p in (Nn || hn(), e))
                        if ("autoRound" !== p && ((a = e[p]), !Gt[p] || !Pe(p, e, n, i, t, r)))
                            if (((c = wi[p]), "function" == (u = typeof a) && (u = typeof (a = a.call(n, i, t, r))), "string" === u && ~a.indexOf("random(") && (a = V(a)), c)) c(this, t, p, a, n) && (_ = 1);
                            else if ("--" === p.substr(0, 2)) this.add(x, "setProperty", getComputedStyle(t).getPropertyValue(p) + "", a + "", i, r, 0, 0, p);
                            else {
                                if (
                                    ((o = wn(t, p)),
                                        (l = parseFloat(o)),
                                        (m = "string" === u && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                                        (s = parseFloat(a)),
                                        p in hi &&
                                        ("autoAlpha" === p && (1 === l && "hidden" === wn(t, "visibility") && s && (l = 0), bn(this, x, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                                            "scale" !== p && "transform" !== p && ~(p = hi[p]).indexOf(",") && (p = p.split(",")[0])),
                                        (g = p in ai))
                                )
                                    if ((v || ((y = t._gsap), (b = !1 !== e.smoothOrigin && y.smooth), ((v = this._pt = new Ye(this._pt, x, mi, 0, 1, y.renderTransform, y, 0, -1)).dep = 1)), "scale" === p))
                                        (this._pt = new Ye(this._pt, y, "scaleY", y.scaleY, m ? m * s : s - y.scaleY)), w.push("scaleY", p), (p += "X");
                                    else {
                                        if ("transformOrigin" === p) {
                                            (a = kn(a)), y.svg ? Sn(t, a, 0, b, 0, this) : ((h = parseFloat(a.split(" ")[2])) !== y.zOrigin && bn(this, y, "zOrigin", y.zOrigin, h), bn(this, x, p, Ci(o), Ci(a)));
                                            continue;
                                        }
                                        if ("svgOrigin" === p) {
                                            Sn(t, a, 1, b, 0, this);
                                            continue;
                                        }
                                        if (p in ki) {
                                            Dn(this, y, p, l, a, m);
                                            continue;
                                        }
                                        if ("smoothOrigin" === p) {
                                            bn(this, y, "smooth", y.smooth, a);
                                            continue;
                                        }
                                        if ("force3D" === p) {
                                            y[p] = a;
                                            continue;
                                        }
                                        if ("transform" === p) {
                                            On(this, a, t);
                                            continue;
                                        }
                                    }
                                else p in x || (p = yi(p) || p);
                                if (g || ((s || 0 === s) && (l || 0 === l) && !fi.test(a) && p in x))
                                    (f = (o + "").substr((l + "").length)) !== (h = (a + "").substr((s + "").length) || (p in St.units ? St.units[p] : f)) && (l = _n(t, p, o, h)),
                                        (this._pt = new Ye(this._pt, g ? y : x, p, l, m ? m * s : s - l, "px" !== h || !1 === e.autoRound || g ? Ze : nn)),
                                        (this._pt.u = h || 0),
                                        f !== h && ((this._pt.b = o), (this._pt.r = en));
                                else if (p in x) xn.call(this, t, p, o, a);
                                else {
                                    if (!(p in t)) {
                                        d(p, a);
                                        continue;
                                    }
                                    this.add(t, p, t[p], a, i, r);
                                }
                                w.push(p);
                            }
                    _ && Xe(this);
                },
                get: wn,
                aliases: hi,
                getSetter: function (t, e, n) {
                    return e in ai && e !== gi && (t._gsap.x || wn(t, "x")) ? (n && Rn === n ? ("scale" === e ? un : ln) : (Rn = n || {}) && ("scale" === e ? cn : pn)) : t.style && !a(t.style[e]) ? an : ~e.indexOf("-") ? sn : qe(t, e);
                },
            };
        (Je.utils.checkPrefix = yi),
            (Hn = b("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (zn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
                ai[t] = 1;
            })),
            b(zn, function (t) {
                (St.units[t] = "deg"), (ki[t] = 1);
            }),
            (hi[Hn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + zn),
            b("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY", function (t) {
                var e = t.split(":");
                hi[e[1]] = Hn[e[0]];
            }),
            b("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
                St.units[t] = "px";
            }),
            Je.registerPlugin(ji);
        var Mi = Je.registerPlugin(ji) || Je;
        (t.Back = ti),
            (t.Bounce = ni),
            (t.CSSPlugin = ji),
            (t.Circ = oi),
            (t.Cubic = Gn),
            (t.Elastic = Zn),
            (t.Expo = ri),
            (t.Linear = Yn),
            (t.Power0 = Fn),
            (t.Power1 = In),
            (t.Power2 = Wn),
            (t.Power3 = Un),
            (t.Power4 = Xn),
            (t.Quad = Vn),
            (t.Quart = Kn),
            (t.Quint = Qn),
            (t.Sine = ii),
            (t.SteppedEase = ei),
            (t.Strong = Jn),
            (t.TimelineLite = Ce),
            (t.TimelineMax = Ce),
            (t.TweenLite = Me),
            (t.TweenMax = Me),
            (t.default = Mi),
            (t.gsap = Mi),
            "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", { value: !0 }) : delete t.default;
    }),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = t || self).window = t.window || {}));
    })(this, function (t) {
        "use strict";
        function e() {
            return "undefined" != typeof window;
        }
        function n() {
            return u || (e() && (u = window.gsap) && u.registerPlugin && u);
        }
        function i(t) {
            return "string" == typeof t;
        }
        function r(t, e) {
            var n = "x" === e ? "Width" : "Height",
                i = "scroll" + n,
                r = "client" + n;
            return t === p || t === d || t === f ? Math.max(d[i], f[i]) - (p["inner" + n] || d[r] || f[r]) : t[i] - t["offset" + n];
        }
        function o(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return (
                t === p && (null != t.pageXOffset ? (n = "page" + e.toUpperCase() + "Offset") : (t = null != d[n] ? d : f)),
                function () {
                    return t[n];
                }
            );
        }
        function a(t, e) {
            var n = h(t)[0].getBoundingClientRect(),
                i = !e || e === p || e === f,
                r = i ? { top: d.clientTop - (p.pageYOffset || d.scrollTop || f.scrollTop || 0), left: d.clientLeft - (p.pageXOffset || d.scrollLeft || f.scrollLeft || 0) } : e.getBoundingClientRect(),
                a = { x: n.left - r.left, y: n.top - r.top };
            return !i && e && ((a.x += o(e, "x")()), (a.y += o(e, "y")())), a;
        }
        function s(t, e, n, o) {
            return isNaN(t) ? (i(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + o : "max" === t ? r(e, n) : Math.min(r(e, n), a(t, e)[n])) : parseFloat(t);
        }
        function l() {
            (u = n()), e() && u && document.body && ((p = window), (f = document.body), (d = document.documentElement), (h = u.utils.toArray), u.config({ autoKillThreshold: 7 }), (m = u.config()), (c = 1));
        }
        var u,
            c,
            p,
            d,
            f,
            h,
            m,
            g = {
                version: "3.0.5",
                name: "scrollTo",
                rawVars: 1,
                register: function (t) {
                    (u = t), l();
                },
                init: function (t, e, n, r, a) {
                    c || l();
                    var u = this;
                    (u.isWin = t === p),
                        (u.target = t),
                        (u.tween = n),
                        "object" != typeof e ? i((e = { y: e }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = { y: e, x: e }),
                        (u.vars = e),
                        (u.autoKill = !!e.autoKill),
                        (u.getX = o(t, "x")),
                        (u.getY = o(t, "y")),
                        (u.x = u.xPrev = u.getX()),
                        (u.y = u.yPrev = u.getY()),
                        null != e.x ? (u.add(u, "x", u.x, s(e.x, t, "x", u.x) - (e.offsetX || 0), r, a, Math.round), u._props.push("scrollTo_x")) : (u.skipX = 1),
                        null != e.y ? (u.add(u, "y", u.y, s(e.y, t, "y", u.y) - (e.offsetY || 0), r, a, Math.round), u._props.push("scrollTo_y")) : (u.skipY = 1);
                },
                render: function (t, e) {
                    for (var n, i, o, a, s, l = e._pt, u = e.target, c = e.tween, d = e.autoKill, f = e.xPrev, h = e.yPrev, g = e.isWin; l;) l.r(t, l.d), (l = l._next);
                    (n = g || !e.skipX ? e.getX() : f),
                        (o = (i = g || !e.skipY ? e.getY() : h) - h),
                        (a = n - f),
                        (s = m.autoKillThreshold),
                        e.x < 0 && (e.x = 0),
                        e.y < 0 && (e.y = 0),
                        d &&
                        (!e.skipX && (s < a || a < -s) && n < r(u, "x") && (e.skipX = 1),
                            !e.skipY && (s < o || o < -s) && i < r(u, "y") && (e.skipY = 1),
                            e.skipX && e.skipY && (c.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(c, e.vars.onAutoKillParams || []))),
                        g ? p.scrollTo(e.skipX ? n : e.x, e.skipY ? i : e.y) : (e.skipY || (u.scrollTop = e.y), e.skipX || (u.scrollLeft = e.x)),
                        (e.xPrev = e.x),
                        (e.yPrev = e.y);
                },
                kill: function (t) {
                    var e = "scrollTo" === t;
                    (!e && "scrollTo_x" !== t) || (this.skipX = 1), (!e && "scrollTo_y" !== t) || (this.skipY = 1);
                },
            };
        (g.max = r),
            (g.getOffset = a),
            (g.buildGetter = o),
            n() && u.registerPlugin(g),
            (t.ScrollToPlugin = g),
            (t.default = g),
            "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", { value: !0 }) : delete t.default;
    }),
    (function (t) {
        var e,
            n,
            i = t(window),
            r = {},
            o = [],
            a = [],
            s = null,
            l = "_open",
            u = "_close",
            c = [],
            p = null,
            d = /(iPad|iPhone|iPod)/.test(navigator.userAgent),
            f = {
                _init: function (e) {
                    var n = t(e),
                        i = n.data("popupoptions");
                    (a[e.id] = !1),
                        (o[e.id] = 0),
                        n.data("popup-initialized") || (n.attr("data-popup-initialized", "true"), f._initonce(e)),
                        i.autoopen &&
                        setTimeout(function () {
                            f.show(e, 0);
                        }, 0);
                },
                _initonce: function (n) {
                    var i,
                        r,
                        o,
                        a = t(n),
                        u = t("body"),
                        c = a.data("popupoptions");
                    ((s = parseInt(u.css("margin-right"), 10)),
                        (p =
                            void 0 !== document.body.style.webkitTransition ||
                            void 0 !== document.body.style.MozTransition ||
                            void 0 !== document.body.style.msTransition ||
                            void 0 !== document.body.style.OTransition ||
                            void 0 !== document.body.style.transition),
                        c.scrolllock) &&
                        void 0 === e &&
                        ((o = (r = t('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")).children()), (e = o.innerWidth() - o.height(99).innerWidth()), r.remove());
                    if ((a.attr("id") || a.attr("id", "j-popup-" + parseInt(1e8 * Math.random(), 10)), a.addClass("popup_content"), c.background && !t("#" + n.id + "_background").length)) {
                        u.append('<div id="' + n.id + '_background" class="popup_background"></div>');
                        var h = t("#" + n.id + "_background");
                        h.css({ opacity: 0, visibility: "hidden", backgroundColor: c.color, position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }),
                            c.setzindex && !c.autozindex && h.css("z-index", "100000"),
                            c.transition && h.css("transition", c.transition);
                    }
                    u.append(n),
                        a.wrap('<div id="' + n.id + '_wrapper" class="popup_wrapper" />'),
                        (i = t("#" + n.id + "_wrapper")).css({ opacity: 0, visibility: "hidden", position: "absolute" }),
                        d && ((h = t("#" + n.id + "_background")).css("cursor", "pointer"), t(c.pagecontainer).css("cursor", "pointer")),
                        "overlay" == c.type && !c.absolute && c.background && (i.css("overflow", "auto"), (i[0].style.WebkitOverflowScrolling = "touch")),
                        a.css({ opacity: 0, visibility: "hidden", "pointer-events": "auto", display: "inline-block" }),
                        c.setzindex && !c.autozindex && i.css("z-index", "100001"),
                        c.outline || a.css("outline", "none"),
                        c.transition && (a.css("transition", c.transition), i.css("transition", c.transition)),
                        a.attr("aria-hidden", !0),
                        "overlay" == c.type &&
                        (a.css({ textAlign: "left", position: "relative", verticalAlign: "middle" }),
                            i.css({ position: "fixed", width: "100%", height: "100%", top: 0, left: 0, textAlign: "center" }),
                            i.append('<div class="popup_align" />'),
                            t(".popup_align").css({ display: "inline-block", verticalAlign: "middle", height: "100%" })),
                        a.attr("role", "dialog");
                    var m = c.openelement ? c.openelement : "." + n.id + l;
                    t(m).each(function (e, n) {
                        t(n).attr("data-popup-ordinal", e), n.id || t(n).attr("id", "open_" + parseInt(1e8 * Math.random(), 10));
                    }),
                        a.attr("aria-labelledby") || a.attr("aria-label") || a.attr("aria-labelledby", t(m).attr("id")),
                        "hover" == c.action
                            ? ((c.keepfocus = !1),
                                t(m).on("mouseenter", function () {
                                    f.show(n, t(this).data("popup-ordinal"));
                                }),
                                t(m).on("mouseleave", function () {
                                    f.hide(n);
                                }))
                            : t(document).on("click.jqp", m, function (e) {
                                e.preventDefault();
                                var i = t(this).data("popup-ordinal");
                                setTimeout(function () {
                                    f.show(n, i);
                                }, 0);
                            }),
                        c.closebutton && f.addclosebutton(n),
                        c.detach ? a.detach() : a.hide();
                },
                show: function (r, l) {
                    var u = t(r);
                    if (!u.data("popup-visible")) {
                        u.data("popup-initialized") || f._init(r), u.attr("data-popup-initialized", "true");
                        var d = t("body"),
                            m = u.data("popupoptions"),
                            g = t("#" + r.id + "_wrapper"),
                            v = t("#" + r.id + "_background");
                        if (
                            (h(r, l, m.beforeopen),
                                (a[r.id] = l),
                                setTimeout(function () {
                                    c.push(r.id);
                                }, 0),
                                m.autozindex)
                        ) {
                            for (var y = document.getElementsByTagName("*"), b = y.length, _ = 0, w = 0; w < b; w++) {
                                var x = t(y[w]).css("z-index");
                                "auto" !== x && _ < (x = parseInt(x, 10)) && (_ = x);
                            }
                            (o[r.id] = _), m.background && o[r.id] >= 0 && t("#" + r.id + "_background").css({ zIndex: o[r.id] + 1 }), o[r.id] >= 0 && g.css({ zIndex: o[r.id] + 2 });
                        }
                        m.detach ? (g.prepend(r), u.show()) : u.show(),
                            (n = setTimeout(function () {
                                g.css({ visibility: "visible", opacity: 1 }),
                                    t("html")
                                        .addClass("popup_visible")
                                        .addClass("popup_visible_" + r.id),
                                    g.addClass("popup_wrapper_visible");
                            }, 20)),
                            m.scrolllock && (d.css("overflow", "hidden"), d.height() > i.height() && d.css("margin-right", s + e)),
                            u.css({ visibility: "visible", opacity: 1 }),
                            m.background &&
                            (v.css({ visibility: "visible", opacity: m.opacity }),
                                setTimeout(function () {
                                    v.css({ opacity: m.opacity });
                                }, 0)),
                            u.data("popup-visible", !0),
                            f.reposition(r, l),
                            u.data("focusedelementbeforepopup", document.activeElement),
                            u.attr("tabindex", -1),
                            setTimeout(function () {
                                "closebutton" === m.focuselement ? t("#" + r.id + " ." + r.id + "_close:first").focus() : m.focuselement ? t(m.focuselement).focus() : (!0 === m.focuselement || m.keepfocus) && u.focus();
                            }, m.focusdelay),
                            m.keepfocus && t(m.pagecontainer).attr("aria-hidden", !0),
                            u.attr("aria-hidden", !1),
                            h(r, l, m.onopen),
                            p
                                ? g.one("transitionend", function () {
                                    h(r, l, m.opentransitionend);
                                })
                                : h(r, l, m.opentransitionend),
                            "tooltip" == m.type &&
                            t(window).on("resize." + r.id, function () {
                                f.reposition(r, l);
                            });
                    }
                },
                hide: function (e, i) {
                    var r = t.inArray(e.id, c);
                    if (-1 !== r) {
                        n && clearTimeout(n);
                        var o = t("body"),
                            l = t(e),
                            u = l.data("popupoptions"),
                            d = t("#" + e.id + "_wrapper"),
                            f = t("#" + e.id + "_background");
                        l.data("popup-visible", !1),
                            1 === c.length
                                ? t("html")
                                    .removeClass("popup_visible")
                                    .removeClass("popup_visible_" + e.id)
                                : t("html").hasClass("popup_visible_" + e.id) && t("html").removeClass("popup_visible_" + e.id),
                            c.splice(r, 1),
                            d.hasClass("popup_wrapper_visible") && d.removeClass("popup_wrapper_visible"),
                            u.keepfocus &&
                            !i &&
                            setTimeout(function () {
                                t(l.data("focusedelementbeforepopup")).is(":visible") && l.data("focusedelementbeforepopup").focus();
                            }, 0),
                            d.css({ visibility: "hidden", opacity: 0 }),
                            l.css({ visibility: "hidden", opacity: 0 }),
                            u.background && f.css({ visibility: "hidden", opacity: 0 }),
                            t(u.pagecontainer).attr("aria-hidden", !1),
                            l.attr("aria-hidden", !0),
                            h(e, a[e.id], u.onclose),
                            p && "0s" !== l.css("transition-duration")
                                ? l.one("transitionend", function () {
                                    l.data("popup-visible") || (u.detach ? l.detach() : l.hide()),
                                        u.scrolllock &&
                                        setTimeout(function () {
                                            t.grep(c, function (e) {
                                                return t("#" + e).data("popupoptions").scrolllock;
                                            }).length || o.css({ overflow: "visible", "margin-right": s });
                                        }, 10),
                                        h(e, a[e.id], u.closetransitionend);
                                })
                                : (u.detach ? l.detach() : l.hide(),
                                    u.scrolllock &&
                                    setTimeout(function () {
                                        t.grep(c, function (e) {
                                            return t("#" + e).data("popupoptions").scrolllock;
                                        }).length || o.css({ overflow: "visible", "margin-right": s });
                                    }, 10),
                                    h(e, a[e.id], u.closetransitionend)),
                            "tooltip" == u.type && t(window).off("resize." + e.id);
                    }
                },
                toggle: function (e, n) {
                    t(e).data("popup-visible")
                        ? f.hide(e)
                        : setTimeout(function () {
                            f.show(e, n);
                        }, 0);
                },
                reposition: function (e, n) {
                    var r = t(e),
                        o = r.data("popupoptions"),
                        a = t("#" + e.id + "_wrapper");
                    if (((n = n || 0), "tooltip" == o.type)) {
                        var s;
                        a.css({ position: "absolute" });
                        var l = (s = o.tooltipanchor ? t(o.tooltipanchor) : o.openelement ? t(o.openelement).filter('[data-popup-ordinal="' + n + '"]') : t("." + e.id + '_open[data-popup-ordinal="' + n + '"]')).offset() || {
                            left: 0,
                            top: 0,
                        };
                        "right" == o.horizontal
                            ? a.css("left", l.left + s.outerWidth() + o.offsetleft)
                            : "leftedge" == o.horizontal
                                ? a.css("left", l.left + o.offsetleft)
                                : "left" == o.horizontal
                                    ? a.css("right", i.width() - l.left - o.offsetleft)
                                    : "rightedge" == o.horizontal
                                        ? a.css("right", i.width() - l.left - s.outerWidth() - o.offsetleft)
                                        : a.css("left", l.left + s.outerWidth() / 2 - r.outerWidth() / 2 - parseFloat(r.css("marginLeft")) + o.offsetleft),
                            "bottom" == o.vertical
                                ? a.css("top", l.top + s.outerHeight() + o.offsettop)
                                : "bottomedge" == o.vertical
                                    ? a.css("top", l.top + s.outerHeight() - r.outerHeight() + o.offsettop)
                                    : "top" == o.vertical
                                        ? a.css("bottom", i.height() - l.top - o.offsettop)
                                        : "topedge" == o.vertical
                                            ? a.css("bottom", i.height() - l.top - r.outerHeight() - o.offsettop)
                                            : a.css("top", l.top + s.outerHeight() / 2 - r.outerHeight() / 2 - parseFloat(r.css("marginTop")) + o.offsettop);
                    } else
                        "overlay" == o.type &&
                            (o.horizontal ? a.css("text-align", o.horizontal) : a.css("text-align", "center"),
                                o.vertical ? r.css("vertical-align", o.vertical) : r.css("vertical-align", "middle"),
                                o.absolute && a.css({ position: "absolute", top: window.scrollY }),
                                o.background ||
                                (a.css({ "pointer-events": "none" }),
                                    o.absolute || m(e) || (r.css("overflow", "auto"), (r[0].style.WebkitOverflowScrolling = "touch"), r.css("max-height", "calc(100% - " + r.css("margin-top") + " - " + r.css("margin-bottom") + ")"))));
                },
                addclosebutton: function (e) {
                    var n;
                    (n = t(e).data("popupoptions").closebuttonmarkup
                        ? t(r.closebuttonmarkup).addClass(e.id + "_close")
                        : '<button class="popup_close ' + e.id + '_close" title="Close" aria-label="Close"><span aria-hidden="true">×</span></button>'),
                        t(e).data("popup-initialized") && t(e).append(n);
                },
            },
            h = function (e, n, i) {
                var r,
                    o,
                    a = t(e).data("popupoptions");
                void 0 !== a && ((r = a.openelement ? a.openelement : "." + e.id + l), (o = t(r + '[data-popup-ordinal="' + n + '"]')), "function" == typeof i && i.call(t(e), e, o));
            },
            m = function (t) {
                var e = t.getBoundingClientRect();
                return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
            };
        t(document).on("keydown", function (e) {
            if (c.length) {
                var n = c[c.length - 1],
                    i = document.getElementById(n);
                t(i).data("popupoptions").escape && 27 == e.keyCode && f.hide(i);
            }
        }),
            t(document).on("click", function (e) {
                if (c.length) {
                    var n = c[c.length - 1],
                        i = document.getElementById(n),
                        r = t(i).data("popupoptions").closeelement ? t(i).data("popupoptions").closeelement : "." + i.id + u;
                    t(e.target).closest(r).length && (e.preventDefault(), f.hide(i)),
                        t(i).data("popupoptions") &&
                        t(i).data("popupoptions").blur &&
                        !t(e.target).closest(t(i).data("popupoptions").blurignore).length &&
                        !t(e.target).closest("#" + n).length &&
                        2 !== e.which &&
                        t(e.target).is(":visible") &&
                        (t(i).data("popupoptions").background ? (f.hide(i), e.preventDefault()) : f.hide(i, !0));
                }
            }),
            t(document).on("keydown", function (e) {
                if (c.length && 9 == e.which) {
                    var n = c[c.length - 1],
                        i = document.getElementById(n);
                    if (!t(i).data("popupoptions").keepfocus) return;
                    var r = t(i)
                        .find("*")
                        .filter("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]")
                        .filter(":visible"),
                        o = t(":focus"),
                        a = r.length,
                        s = r.index(o);
                    0 === a ? (t(i).focus(), e.preventDefault()) : e.shiftKey ? 0 === s && (r.get(a - 1).focus(), e.preventDefault()) : s == a - 1 && (r.get(0).focus(), e.preventDefault());
                }
            }),
            (t.fn.popup = function (e) {
                return this.each(function () {
                    var n = t(this),
                        i = t.extend(!0, {}, t.fn.popup.defaults);
                    if ((e && "tooltip" === e.type && (i.background = !1), "object" == typeof e)) {
                        var o = t.extend({}, i, n.data("popupoptions"), e);
                        n.data("popupoptions", o), (r = n.data("popupoptions")), f._init(this);
                    } else "string" == typeof e ? (n.data("popupoptions") || (n.data("popupoptions", i), (r = n.data("popupoptions"))), f[e].call(this, this)) : (n.data("popupoptions") || (n.data("popupoptions", i), (r = n.data("popupoptions"))), f._init(this));
                });
            }),
            (t.fn.popup.destroyall = function () {
                for (var e = 0; e < c.length; e++) t("#" + c[e]).popup("hide");
                t(".popup_wrapper").remove(), t(".popup_background").remove(), t(document).off("click.jqp");
            }),
            (t.fn.popup.defaults = {
                type: "overlay",
                absolute: !1,
                autoopen: !1,
                background: !0,
                color: "black",
                opacity: "0.5",
                horizontal: "center",
                vertical: "middle",
                offsettop: 0,
                offsetleft: 0,
                escape: !0,
                blur: !0,
                blurignore: null,
                setzindex: !0,
                autozindex: !1,
                scrolllock: !1,
                closebutton: !1,
                closebuttonmarkup: null,
                keepfocus: !0,
                focuselement: null,
                focusdelay: 50,
                outline: !1,
                pagecontainer: null,
                detach: !1,
                openelement: null,
                closeelement: null,
                transition: null,
                tooltipanchor: null,
                beforeopen: null,
                onclose: null,
                onopen: null,
                opentransitionend: null,
                closetransitionend: null,
            });
    })(jQuery);
var LZString = (function () {
    function t(t, e) {
        if (!r[t]) {
            r[t] = {};
            for (var n = 0; n < t.length; n++) r[t][t.charAt(n)] = n;
        }
        return r[t][e];
    }
    var e = String.fromCharCode,
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        r = {},
        o = {
            compressToBase64: function (t) {
                if (null == t) return "";
                var e = o._compress(t, 6, function (t) {
                    return n.charAt(t);
                });
                switch (e.length % 4) {
                    default:
                    case 0:
                        return e;
                    case 1:
                        return e + "===";
                    case 2:
                        return e + "==";
                    case 3:
                        return e + "=";
                }
            },
            decompressFromBase64: function (e) {
                return null == e
                    ? ""
                    : "" == e
                        ? null
                        : o._decompress(e.length, 32, function (i) {
                            return t(n, e.charAt(i));
                        });
            },
            compressToUTF16: function (t) {
                return null == t
                    ? ""
                    : o._compress(t, 15, function (t) {
                        return e(t + 32);
                    }) + " ";
            },
            decompressFromUTF16: function (t) {
                return null == t
                    ? ""
                    : "" == t
                        ? null
                        : o._decompress(t.length, 16384, function (e) {
                            return t.charCodeAt(e) - 32;
                        });
            },
            compressToUint8Array: function (t) {
                for (var e = o.compress(t), n = new Uint8Array(2 * e.length), i = 0, r = e.length; r > i; i++) {
                    var a = e.charCodeAt(i);
                    (n[2 * i] = a >>> 8), (n[2 * i + 1] = a % 256);
                }
                return n;
            },
            decompressFromUint8Array: function (t) {
                if (null == t) return o.decompress(t);
                for (var n = new Array(t.length / 2), i = 0, r = n.length; r > i; i++) n[i] = 256 * t[2 * i] + t[2 * i + 1];
                var a = [];
                return (
                    n.forEach(function (t) {
                        a.push(e(t));
                    }),
                    o.decompress(a.join(""))
                );
            },
            compressToEncodedURIComponent: function (t) {
                return null == t
                    ? ""
                    : o._compress(t, 6, function (t) {
                        return i.charAt(t);
                    });
            },
            decompressFromEncodedURIComponent: function (e) {
                return null == e
                    ? ""
                    : "" == e
                        ? null
                        : ((e = e.replace(/ /g, "+")),
                            o._decompress(e.length, 32, function (n) {
                                return t(i, e.charAt(n));
                            }));
            },
            compress: function (t) {
                return o._compress(t, 16, function (t) {
                    return e(t);
                });
            },
            _compress: function (t, e, n) {
                if (null == t) return "";
                var i,
                    r,
                    o,
                    a = {},
                    s = {},
                    l = "",
                    u = "",
                    c = "",
                    p = 2,
                    d = 3,
                    f = 2,
                    h = [],
                    m = 0,
                    g = 0;
                for (o = 0; o < t.length; o += 1)
                    if (((l = t.charAt(o)), Object.prototype.hasOwnProperty.call(a, l) || ((a[l] = d++), (s[l] = !0)), (u = c + l), Object.prototype.hasOwnProperty.call(a, u))) c = u;
                    else {
                        if (Object.prototype.hasOwnProperty.call(s, c)) {
                            if (c.charCodeAt(0) < 256) {
                                for (i = 0; f > i; i++) (m <<= 1), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++;
                                for (r = c.charCodeAt(0), i = 0; 8 > i; i++) (m = (m << 1) | (1 & r)), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r >>= 1);
                            } else {
                                for (r = 1, i = 0; f > i; i++) (m = (m << 1) | r), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r = 0);
                                for (r = c.charCodeAt(0), i = 0; 16 > i; i++) (m = (m << 1) | (1 & r)), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r >>= 1);
                            }
                            0 == --p && ((p = Math.pow(2, f)), f++), delete s[c];
                        } else for (r = a[c], i = 0; f > i; i++) (m = (m << 1) | (1 & r)), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r >>= 1);
                        0 == --p && ((p = Math.pow(2, f)), f++), (a[u] = d++), (c = String(l));
                    }
                if ("" !== c) {
                    if (Object.prototype.hasOwnProperty.call(s, c)) {
                        if (c.charCodeAt(0) < 256) {
                            for (i = 0; f > i; i++) (m <<= 1), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++;
                            for (r = c.charCodeAt(0), i = 0; 8 > i; i++) (m = (m << 1) | (1 & r)), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r >>= 1);
                        } else {
                            for (r = 1, i = 0; f > i; i++) (m = (m << 1) | r), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r = 0);
                            for (r = c.charCodeAt(0), i = 0; 16 > i; i++) (m = (m << 1) | (1 & r)), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r >>= 1);
                        }
                        0 == --p && ((p = Math.pow(2, f)), f++), delete s[c];
                    } else for (r = a[c], i = 0; f > i; i++) (m = (m << 1) | (1 & r)), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r >>= 1);
                    0 == --p && ((p = Math.pow(2, f)), f++);
                }
                for (r = 2, i = 0; f > i; i++) (m = (m << 1) | (1 & r)), g == e - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++, (r >>= 1);
                for (; ;) {
                    if (((m <<= 1), g == e - 1)) {
                        h.push(n(m));
                        break;
                    }
                    g++;
                }
                return h.join("");
            },
            decompress: function (t) {
                return null == t
                    ? ""
                    : "" == t
                        ? null
                        : o._decompress(t.length, 32768, function (e) {
                            return t.charCodeAt(e);
                        });
            },
            _decompress: function (t, n, i) {
                var r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    p = [],
                    d = 4,
                    f = 4,
                    h = 3,
                    m = "",
                    g = [],
                    v = { val: i(0), position: n, index: 1 };
                for (r = 0; 3 > r; r += 1) p[r] = r;
                for (a = 0, l = Math.pow(2, 2), u = 1; u != l;) (s = v.val & v.position), (v.position >>= 1), 0 == v.position && ((v.position = n), (v.val = i(v.index++))), (a |= (s > 0 ? 1 : 0) * u), (u <<= 1);
                switch (a) {
                    case 0:
                        for (a = 0, l = Math.pow(2, 8), u = 1; u != l;) (s = v.val & v.position), (v.position >>= 1), 0 == v.position && ((v.position = n), (v.val = i(v.index++))), (a |= (s > 0 ? 1 : 0) * u), (u <<= 1);
                        c = e(a);
                        break;
                    case 1:
                        for (a = 0, l = Math.pow(2, 16), u = 1; u != l;) (s = v.val & v.position), (v.position >>= 1), 0 == v.position && ((v.position = n), (v.val = i(v.index++))), (a |= (s > 0 ? 1 : 0) * u), (u <<= 1);
                        c = e(a);
                        break;
                    case 2:
                        return "";
                }
                for (p[3] = c, o = c, g.push(c); ;) {
                    if (v.index > t) return "";
                    for (a = 0, l = Math.pow(2, h), u = 1; u != l;) (s = v.val & v.position), (v.position >>= 1), 0 == v.position && ((v.position = n), (v.val = i(v.index++))), (a |= (s > 0 ? 1 : 0) * u), (u <<= 1);
                    switch ((c = a)) {
                        case 0:
                            for (a = 0, l = Math.pow(2, 8), u = 1; u != l;) (s = v.val & v.position), (v.position >>= 1), 0 == v.position && ((v.position = n), (v.val = i(v.index++))), (a |= (s > 0 ? 1 : 0) * u), (u <<= 1);
                            (p[f++] = e(a)), (c = f - 1), d--;
                            break;
                        case 1:
                            for (a = 0, l = Math.pow(2, 16), u = 1; u != l;) (s = v.val & v.position), (v.position >>= 1), 0 == v.position && ((v.position = n), (v.val = i(v.index++))), (a |= (s > 0 ? 1 : 0) * u), (u <<= 1);
                            (p[f++] = e(a)), (c = f - 1), d--;
                            break;
                        case 2:
                            return g.join("");
                    }
                    if ((0 == d && ((d = Math.pow(2, h)), h++), p[c])) m = p[c];
                    else {
                        if (c !== f) return null;
                        m = o + o.charAt(0);
                    }
                    g.push(m), (p[f++] = o + m.charAt(0)), (o = m), 0 == --d && ((d = Math.pow(2, h)), h++);
                }
            },
        };
    return o;
})();
"function" == typeof define && define.amd
    ? define(function () {
        return LZString;
    })
    : "undefined" != typeof module && null != module && (module.exports = LZString),
    (function (t, e) {
        "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof exports ? e() : (e(), (t.FileSaver = {}));
    })(this, function () {
        "use strict";
        function t(t, e, n) {
            var i = new XMLHttpRequest();
            i.open("GET", t),
                (i.responseType = "blob"),
                (i.onload = function () {
                    o(i.response, e, n);
                }),
                (i.onerror = function () {
                    console.error("could not download file");
                }),
                i.send();
        }
        function e(t) {
            var e = new XMLHttpRequest();
            e.open("HEAD", t, !1);
            try {
                e.send();
            } catch (t) { }
            return 200 <= e.status && 299 >= e.status;
        }
        function n(t) {
            try {
                t.dispatchEvent(new MouseEvent("click"));
            } catch (n) {
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e);
            }
        }
        var i = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            r = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
            o =
                i.saveAs ||
                ("object" != typeof window || window !== i
                    ? function () { }
                    : "download" in HTMLAnchorElement.prototype && !r
                        ? function (r, o, a) {
                            var s = i.URL || i.webkitURL,
                                l = document.createElement("a");
                            (o = o || r.name || "download"),
                                (l.download = o),
                                (l.rel = "noopener"),
                                "string" == typeof r
                                    ? ((l.href = r), l.origin === location.origin ? n(l) : e(l.href) ? t(r, o, a) : n(l, (l.target = "_blank")))
                                    : ((l.href = s.createObjectURL(r)),
                                        setTimeout(function () {
                                            s.revokeObjectURL(l.href);
                                        }, 4e4),
                                        setTimeout(function () {
                                            n(l);
                                        }, 0));
                        }
                        : "msSaveOrOpenBlob" in navigator
                            ? function (i, r, o) {
                                if (((r = r || i.name || "download"), "string" != typeof i))
                                    navigator.msSaveOrOpenBlob(
                                        (function (t, e) {
                                            return (
                                                void 0 === e ? (e = { autoBom: !1 }) : "object" != typeof e && (console.warn("Deprecated: Expected third argument to be a object"), (e = { autoBom: !e })),
                                                e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\ufeff", t], { type: t.type }) : t
                                            );
                                        })(i, o),
                                        r
                                    );
                                else if (e(i)) t(i, r, o);
                                else {
                                    var a = document.createElement("a");
                                    (a.href = i),
                                        (a.target = "_blank"),
                                        setTimeout(function () {
                                            n(a);
                                        });
                                }
                            }
                            : function (e, n, o, a) {
                                if (((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), "string" == typeof e)) return t(e, n, o);
                                var s = "application/octet-stream" === e.type,
                                    l = /constructor/i.test(i.HTMLElement) || i.safari,
                                    u = /CriOS\/[\d]+/.test(navigator.userAgent);
                                if ((u || (s && l) || r) && "undefined" != typeof FileReader) {
                                    var c = new FileReader();
                                    (c.onloadend = function () {
                                        var t = c.result;
                                        (t = u ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;")), a ? (a.location.href = t) : (location = t), (a = null);
                                    }),
                                        c.readAsDataURL(e);
                                } else {
                                    var p = i.URL || i.webkitURL,
                                        d = p.createObjectURL(e);
                                    a ? (a.location = d) : (location.href = d),
                                        (a = null),
                                        setTimeout(function () {
                                            p.revokeObjectURL(d);
                                        }, 4e4);
                                }
                            });
        (i.saveAs = o.saveAs = o), "undefined" != typeof module && (module.exports = o);
    }),
    (function (t) {
        "use strict";
        function e(t, e) {
            return (
                (function (t) {
                    void 0 === t.imagePlaceholder ? (p.impl.options.imagePlaceholder = c.imagePlaceholder) : (p.impl.options.imagePlaceholder = t.imagePlaceholder),
                        void 0 === t.cacheBust ? (p.impl.options.cacheBust = c.cacheBust) : (p.impl.options.cacheBust = t.cacheBust);
                })((e = e || {})),
                Promise.resolve(t)
                    .then(function (t) {
                        return i(t, e.filter, !0);
                    })
                    .then(r)
                    .then(o)
                    .then(function (t) {
                        return (
                            e.bgcolor && (t.style.backgroundColor = e.bgcolor),
                            e.width && (t.style.width = e.width + "px"),
                            e.height && (t.style.height = e.height + "px"),
                            e.style &&
                            Object.keys(e.style).forEach(function (n) {
                                t.style[n] = e.style[n];
                            }),
                            t
                        );
                    })
                    .then(function (n) {
                        return (function (t, e, n) {
                            return Promise.resolve(t)
                                .then(function (t) {
                                    return t.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), new XMLSerializer().serializeToString(t);
                                })
                                .then(a.escapeXhtml)
                                .then(function (t) {
                                    return '<foreignObject x="0" y="0" width="100%" height="100%">' + t + "</foreignObject>";
                                })
                                .then(function (t) {
                                    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + n + '">' + t + "</svg>";
                                })
                                .then(function (t) {
                                    return "data:image/svg+xml;charset=utf-8," + t;
                                });
                        })(n, e.width || a.width(t), e.height || a.height(t));
                    })
            );
        }
        function n(t, n) {
            function i(t) {
                var e = document.createElement("canvas");
                if (((e.width = n.width || a.width(t)), (e.height = n.height || a.height(t)), n.bgcolor)) {
                    var i = e.getContext("2d");
                    (i.fillStyle = n.bgcolor), i.fillRect(0, 0, e.width, e.height);
                }
                return e;
            }
            return e(t, n)
                .then(a.makeImage)
                .then(a.delay(100))
                .then(function (e) {
                    var n = i(t);
                    return n.getContext("2d").drawImage(e, 0, 0), n;
                });
        }
        function i(t, e, n) {
            return n || !e || e(t)
                ? Promise.resolve(t)
                    .then(function (t) {
                        return t instanceof HTMLCanvasElement ? a.makeImage(t.toDataURL()) : t.cloneNode(!1);
                    })
                    .then(function (n) {
                        return (function (t, e, n) {
                            var r = t.childNodes;
                            return 0 === r.length
                                ? Promise.resolve(e)
                                : (function (t, e, n) {
                                    var r = Promise.resolve();
                                    return (
                                        e.forEach(function (e) {
                                            r = r
                                                .then(function () {
                                                    return i(e, n);
                                                })
                                                .then(function (e) {
                                                    e && t.appendChild(e);
                                                });
                                        }),
                                        r
                                    );
                                })(e, a.asArray(r), n).then(function () {
                                    return e;
                                });
                        })(t, n, e);
                    })
                    .then(function (e) {
                        return (function (t, e) {
                            return e instanceof Element
                                ? Promise.resolve()
                                    .then(function () {
                                        !(function (t, e) {
                                            t.cssText
                                                ? (e.cssText = t.cssText)
                                                : (function (t, e) {
                                                    a.asArray(t).forEach(function (n) {
                                                        e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n));
                                                    });
                                                })(t, e);
                                        })(window.getComputedStyle(t), e.style);
                                    })
                                    .then(function () {
                                        function n(n) {
                                            var i = window.getComputedStyle(t, n),
                                                r = i.getPropertyValue("content");
                                            if ("" !== r && "none" !== r) {
                                                var o = a.uid();
                                                e.className = e.className + " " + o;
                                                var s = document.createElement("style");
                                                s.appendChild(
                                                    (function (t, e, n) {
                                                        var i = "." + t + ":" + e,
                                                            r = n.cssText
                                                                ? (function (t) {
                                                                    var e = t.getPropertyValue("content");
                                                                    return t.cssText + " content: " + e + ";";
                                                                })(n)
                                                                : (function (t) {
                                                                    return (
                                                                        a
                                                                            .asArray(t)
                                                                            .map(function (e) {
                                                                                return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important" : "");
                                                                            })
                                                                            .join("; ") + ";"
                                                                    );
                                                                })(n);
                                                        return document.createTextNode(i + "{" + r + "}");
                                                    })(o, n, i)
                                                ),
                                                    e.appendChild(s);
                                            }
                                        }
                                        [":before", ":after"].forEach(function (t) {
                                            n(t);
                                        });
                                    })
                                    .then(function () {
                                        t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value);
                                    })
                                    .then(function () {
                                        e instanceof SVGElement &&
                                            (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                                                e instanceof SVGRectElement &&
                                                ["width", "height"].forEach(function (t) {
                                                    var n = e.getAttribute(t);
                                                    n && e.style.setProperty(t, n);
                                                }));
                                    })
                                    .then(function () {
                                        return e;
                                    })
                                : e;
                        })(t, e);
                    })
                : Promise.resolve();
        }
        function r(t) {
            return l.resolveAll().then(function (e) {
                var n = document.createElement("style");
                return t.appendChild(n), n.appendChild(document.createTextNode(e)), t;
            });
        }
        function o(t) {
            return u.inlineAll(t).then(function () {
                return t;
            });
        }
        var a = (function () {
            function t(t) {
                var e = /\.([^\.\/]*?)$/g.exec(t);
                return e ? e[1] : "";
            }
            function e(t, e) {
                var n = window.getComputedStyle(t).getPropertyValue(e);
                return parseFloat(n.replace("px", ""));
            }
            return {
                escape: function (t) {
                    return t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                },
                parseExtension: t,
                mimeType: function (e) {
                    var n = t(e).toLowerCase();
                    return (
                        (function () {
                            var t = "application/font-woff",
                                e = "image/jpeg";
                            return { woff: t, woff2: t, ttf: "application/font-truetype", eot: "application/vnd.ms-fontobject", png: "image/png", jpg: e, jpeg: e, gif: "image/gif", tiff: "image/tiff", svg: "image/svg+xml" };
                        })()[n] || ""
                    );
                },
                dataAsUrl: function (t, e) {
                    return "data:" + e + ";base64," + t;
                },
                isDataUrl: function (t) {
                    return -1 !== t.search(/^(data:)/);
                },
                canvasToBlob: function (t) {
                    return t.toBlob
                        ? new Promise(function (e) {
                            t.toBlob(e);
                        })
                        : (function (t) {
                            return new Promise(function (e) {
                                for (var n = window.atob(t.toDataURL().split(",")[1]), i = n.length, r = new Uint8Array(i), o = 0; o < i; o++) r[o] = n.charCodeAt(o);
                                e(new Blob([r], { type: "image/png" }));
                            });
                        })(t);
                },
                resolveUrl: function (t, e) {
                    var n = document.implementation.createHTMLDocument(),
                        i = n.createElement("base");
                    n.head.appendChild(i);
                    var r = n.createElement("a");
                    return n.body.appendChild(r), (i.href = e), (r.href = t), r.href;
                },
                getAndEncode: function (t) {
                    return (
                        p.impl.options.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + new Date().getTime()),
                        new Promise(function (e) {
                            function n(t) {
                                console.error(t), e("");
                            }
                            var i,
                                r = new XMLHttpRequest();
                            if (
                                ((r.onreadystatechange = function () {
                                    if (4 === r.readyState) {
                                        if (200 !== r.status) return void (i ? e(i) : n("cannot fetch resource: " + t + ", status: " + r.status));
                                        var o = new FileReader();
                                        (o.onloadend = function () {
                                            var t = o.result.split(/,/)[1];
                                            e(t);
                                        }),
                                            o.readAsDataURL(r.response);
                                    }
                                }),
                                    (r.ontimeout = function () {
                                        i ? e(i) : n("timeout of 30000ms occured while fetching resource: " + t);
                                    }),
                                    (r.responseType = "blob"),
                                    (r.timeout = 3e4),
                                    r.open("GET", t, !0),
                                    r.send(),
                                    p.impl.options.imagePlaceholder)
                            ) {
                                var o = p.impl.options.imagePlaceholder.split(/,/);
                                o && o[1] && (i = o[1]);
                            }
                        })
                    );
                },
                uid: (function () {
                    var t = 0;
                    return function () {
                        return "u" + ("0000" + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4) + t++;
                    };
                })(),
                delay: function (t) {
                    return function (e) {
                        return new Promise(function (n) {
                            setTimeout(function () {
                                n(e);
                            }, t);
                        });
                    };
                },
                asArray: function (t) {
                    for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
                    return e;
                },
                escapeXhtml: function (t) {
                    return t.replace(/#/g, "%23").replace(/\n/g, "%0A");
                },
                makeImage: function (t) {
                    return new Promise(function (e, n) {
                        var i = new Image();
                        (i.onload = function () {
                            e(i);
                        }),
                            (i.onerror = n),
                            (i.src = t);
                    });
                },
                width: function (t) {
                    var n = e(t, "border-left-width"),
                        i = e(t, "border-right-width");
                    return t.scrollWidth + n + i;
                },
                height: function (t) {
                    var n = e(t, "border-top-width"),
                        i = e(t, "border-bottom-width");
                    return t.scrollHeight + n + i;
                },
            };
        })(),
            s = (function () {
                function t(t) {
                    return -1 !== t.search(i);
                }
                function e(t) {
                    for (var e, n = []; null !== (e = i.exec(t));) n.push(e[1]);
                    return n.filter(function (t) {
                        return !a.isDataUrl(t);
                    });
                }
                function n(t, e, n, i) {
                    return Promise.resolve(e)
                        .then(function (t) {
                            return n ? a.resolveUrl(t, n) : t;
                        })
                        .then(i || a.getAndEncode)
                        .then(function (t) {
                            return a.dataAsUrl(t, a.mimeType(e));
                        })
                        .then(function (n) {
                            return t.replace(
                                (function (t) {
                                    return new RegExp("(url\\(['\"]?)(" + a.escape(t) + ")(['\"]?\\))", "g");
                                })(e),
                                "$1" + n + "$3"
                            );
                        });
                }
                var i = /url\(['"]?([^'"]+?)['"]?\)/g;
                return {
                    inlineAll: function (i, r, o) {
                        return t(i)
                            ? Promise.resolve(i)
                                .then(e)
                                .then(function (t) {
                                    var e = Promise.resolve(i);
                                    return (
                                        t.forEach(function (t) {
                                            e = e.then(function (e) {
                                                return n(e, t, r, o);
                                            });
                                        }),
                                        e
                                    );
                                })
                            : Promise.resolve(i);
                    },
                    shouldProcess: t,
                    impl: { readUrls: e, inline: n },
                };
            })(),
            l = (function () {
                function t() {
                    function t(t) {
                        return {
                            resolve: function () {
                                var e = (t.parentStyleSheet || {}).href;
                                return s.inlineAll(t.cssText, e);
                            },
                            src: function () {
                                return t.style.getPropertyValue("src");
                            },
                        };
                    }
                    return Promise.resolve(a.asArray(document.styleSheets))
                        .then(function (t) {
                            var e = [];
                            return (
                                t.forEach(function (t) {
                                    try {
                                        a.asArray(t.cssRules || []).forEach(e.push.bind(e));
                                    } catch (e) {
                                        console.log("Error while reading CSS rules from " + t.href, e.toString());
                                    }
                                }),
                                e
                            );
                        })
                        .then(function (t) {
                            return t
                                .filter(function (t) {
                                    return t.type === CSSRule.FONT_FACE_RULE;
                                })
                                .filter(function (t) {
                                    return s.shouldProcess(t.style.getPropertyValue("src"));
                                });
                        })
                        .then(function (e) {
                            return e.map(t);
                        });
                }
                return {
                    resolveAll: function () {
                        return t(document)
                            .then(function (t) {
                                return Promise.all(
                                    t.map(function (t) {
                                        return t.resolve();
                                    })
                                );
                            })
                            .then(function (t) {
                                return t.join("\n");
                            });
                    },
                    impl: { readAll: t },
                };
            })(),
            u = (function () {
                function t(t) {
                    return {
                        inline: function (e) {
                            return a.isDataUrl(t.src)
                                ? Promise.resolve()
                                : Promise.resolve(t.src)
                                    .then(e || a.getAndEncode)
                                    .then(function (e) {
                                        return a.dataAsUrl(e, a.mimeType(t.src));
                                    })
                                    .then(function (e) {
                                        return new Promise(function (n, i) {
                                            (t.onload = n), (t.onerror = i), (t.src = e);
                                        });
                                    });
                        },
                    };
                }
                return {
                    inlineAll: function e(n) {
                        return n instanceof Element
                            ? (function (t) {
                                var e = t.style.getPropertyValue("background");
                                return e
                                    ? s
                                        .inlineAll(e)
                                        .then(function (e) {
                                            t.style.setProperty("background", e, t.style.getPropertyPriority("background"));
                                        })
                                        .then(function () {
                                            return t;
                                        })
                                    : Promise.resolve(t);
                            })(n).then(function () {
                                return n instanceof HTMLImageElement
                                    ? t(n).inline()
                                    : Promise.all(
                                        a.asArray(n.childNodes).map(function (t) {
                                            return e(t);
                                        })
                                    );
                            })
                            : Promise.resolve(n);
                    },
                    impl: { newImage: t },
                };
            })(),
            c = { imagePlaceholder: void 0, cacheBust: !1 },
            p = {
                toSvg: e,
                toPng: function (t, e) {
                    return n(t, e || {}).then(function (t) {
                        return t.toDataURL();
                    });
                },
                toJpeg: function (t, e) {
                    return n(t, (e = e || {})).then(function (t) {
                        return t.toDataURL("image/jpeg", e.quality || 1);
                    });
                },
                toBlob: function (t, e) {
                    return n(t, e || {}).then(a.canvasToBlob);
                },
                toPixelData: function (t, e) {
                    return n(t, e || {}).then(function (e) {
                        return e.getContext("2d").getImageData(0, 0, a.width(t), a.height(t)).data;
                    });
                },
                impl: { fontFaces: l, images: u, util: a, inliner: s, options: {} },
            };
        "undefined" != typeof module ? (module.exports = p) : (t.domtoimage = p);
    })(this);
var _banpick = (function () {
    var t = "nekoLBPSim",
        e = "en";
    null !== typeof curLang && (e = curLang);
    var n = "assets/img/site_assets/",
        i = [
            { nid: "matthew", names: { en: "matthew", cn: "马修", tw: "馬修" }, thumbnail: "3_matthew.png" },
            { nid: "ledin", names: { en: "ledin", cn: "雷丁", tw: "雷丁" }, thumbnail: "0_ledin.png" },
            { nid: "grenier", names: { en: "grenier", cn: "格尼尔", tw: "格尼爾" }, thumbnail: "3_grenier.png" },
            { nid: "lana", names: { en: "lana", cn: "拉娜", tw: "拉娜" }, thumbnail: "0_lana.png" },
            { nid: "lewin", names: { en: "lewin", cn: "路因", tw: "路因" }, thumbnail: "2_lewin.png" },
            { nid: "dieharte", names: { en: "dieharte", cn: "迪哈尔特", tw: "迪哈爾特" }, thumbnail: "0_dieharte.png" },
            { nid: "freya", names: { en: "freya", cn: "芙蕾雅", tw: "芙蕾雅" }, thumbnail: "1_freya.png" },
            { nid: "cherie", names: { en: "cherie", cn: "雪莉", tw: "雪莉" }, thumbnail: "0_cherie.png" },
            { nid: "narm", names: { en: "narm", cn: "娜姆", tw: "娜姆" }, thumbnail: "1_narm.png" },
            { nid: "hein", names: { en: "hein", cn: "海恩", tw: "海恩" }, thumbnail: "1_hein.png" },
            { nid: "altemuller", names: { en: "altemuller", cn: "亚鲁特缪拉", tw: "亞魯特繆拉" }, thumbnail: "0_altemuller.png" },
            { nid: "sigma", names: { en: "sigma", cn: "西格玛", tw: "西格瑪" }, thumbnail: "0_sigma.png" },
            { nid: "elwin", names: { en: "elwin", cn: "艾尔文", tw: "艾爾文" }, thumbnail: "0_elwin.png" },
            { nid: "agnes", names: { en: "Agnès", cn: "亚妮艾丝", tw: "亞妮艾絲" }, thumbnail: "10_agnes.png" },
            { nid: "van", names: { en: "Van", cn: "范恩", tw: "范恩" }, thumbnail: "10_van.png" },
            { nid: "elaine", names: { en: "Elaine", cn: "艾蕾因", tw: "艾蕾因" }, thumbnail: "10_elaine.png" },
            { nid: "grenshiel", names: { en: "Grenshiel", cn: "格伦希尔", tw: "格倫希爾" }, thumbnail: "9_grenshiel.png" },
            { nid: "yoaconna", names: { en: "Yoa & Conna", cn: "琼&康娜", tw: "瓊&康娜" }, thumbnail: "9_yoaconna.png" },
            { nid: "polyal", names: { en: "Polyal", cn: "波莉阿鲁", tw: "波莉阿魯" }, thumbnail: "9_polyal.png" },
            { nid: "lugner", names: { en: "Lugner", cn: "卢古耐尔", tw: "盧古耐爾" }, thumbnail: "9_lugner.png" },
            { nid: "zion", names: { en: "Zion", cn: "席恩", tw: "席恩" }, thumbnail: "9_zion.png" },
            { nid: "riobec", names: { en: "Riobec", cn: "里奥贝克", tw: "里奧貝克" }, thumbnail: "9_riobec.png" },
            { nid: "swordoflightshadow", names: { en: "Sword of Light & Shadow", cn: "光影剑魄", tw: "光影劍魄" }, thumbnail: "9_swordoflightshadow.png" },
            { nid: "girlinshell", names: { en: "Girl in Shell", cn: "壳中少女", tw: "殼中少女" }, thumbnail: "9_girlinshell.png" },
            { nid: "lightbringer", names: { en: "Light Bringer", cn: "光佑使徒", tw: "光佑使徒" }, thumbnail: "9_lightbringer.png" },
            { nid: "adankelmo", names: { en: "Adankelmo", cn: "亚德凯摩", tw: "亞德凱摩" }, thumbnail: "9_adankelmo.png" },
            { nid: "gintoki", names: { en: "Gintoki Sakata", cn: "坂田银时", tw: "坂田銀時" }, thumbnail: "9_gintoki.png" },
            { nid: "kagura", names: { en: "Kagura", cn: "神乐", tw: "神樂" }, thumbnail: "9_kagura.png" },
            { nid: "ricky", names: { en: "Ricky", cn: "里奇", tw: "里奇" }, thumbnail: "9_ricky.png" },
            { nid: "mcclaine", names: { en: "McClaine", cn: "马库雷", tw: "馬庫雷" }, thumbnail: "9_mcclaine.png" },
            { nid: "julian", names: { en: "Julian", cn: "朱利安", tw: "朱利安" }, thumbnail: "0_julian.webp" },
            { nid: "wanderduel", names: { en: "Wandering Duelist", cn: "漂逐斗客", tw: "漂逐鬥客" }, thumbnail: "0_wanderingduelist.webp" },
            { nid: "rostam", names: { en: "Rostam", cn: "洛斯塔姆", tw: "洛斯塔姆" }, thumbnail: "0_rostam.webp" },
            { nid: "ashumere", names: { en: "Ashumere", cn: "亚莎梅尔", tw: "亞莎梅爾" }, thumbnail: "0_ashumere.webp" },
            { nid: "kaguya", names: { en: "Kaguya", cn: "辉夜", tw: "輝夜" }, thumbnail: "0_kaguya.webp" },
            { nid: "carolian", names: { en: "Carolian", cn: "卡洛莉安", tw: "卡洛莉安" }, thumbnail: "0_carolian.webp" },
            { nid: "azusa", names: { en: "Azusa", cn: "梓", tw: "梓" }, thumbnail: "0_azusa.webp" },
            { nid: "oboro", names: { en: "Oboro", cn: "胧", tw: "朧" }, thumbnail: "0_oboro.webp" },
            { nid: "alicia", names: { en: "Alicia", cn: "亚莉希雅", tw: "亞莉希雅" }, thumbnail: "0_alicia.webp" },
            { nid: "selvari", names: { en: "Selvari", cn: "塞贝莉雅", tw: "塞貝莉雅" }, thumbnail: "0_selvari.webp" },
            { nid: "isara", names: { en: "Isara", cn: "伊莎拉", tw: "伊莎拉" }, thumbnail: "1_isara.webp" },
            { nid: "theconsul", names: { en: "The Consul", cn: "月之执政官", tw: "月之執政官" }, thumbnail: "0_consul.webp" },
            { nid: "ironchancellor", names: { en: "Iron Chancellor", cn: "铁血总帅", tw: "鐵血總帥" }, thumbnail: "0_ironchancellor.webp" },
            { nid: "michelle", names: { en: "Michelle", cn: "米歇尔", tw: "米歇爾" }, thumbnail: "0_michelle.webp" },
            { nid: "gustav", names: { en: "Gustav", cn: "古斯塔夫", tw: "古斯塔夫" }, thumbnail: "0_gustav.webp" },
            { nid: "liza", names: { en: "Liza", cn: "丽莎", tw: "麗莎" }, thumbnail: "1_liza.webp" },
            { nid: "emperorlorvina", names: { en: "Emperor Lorvina", cn: "洛维奈尔大帝", tw: "洛維奈爾大帝" }, thumbnail: "0_emperor.webp" },
            { nid: "arksaint", names: { en: "Saintess of the Ark", cn: "方舟圣女", tw: "方舟聖女" }, thumbnail: "0_arksaint.webp" },
            { nid: "elma", names: { en: "Elma", cn: "艾尔玛", tw: "艾爾瑪" }, thumbnail: "0_elma.webp" },
            { nid: "kertesz", names: { en: "Kertesz", cn: "凯尔蒂斯", tw: "凱爾蒂斯" }, thumbnail: "0_kertesz.webp" },
            { nid: "wehttam", names: { en: "Wehttam", cn: "维坦", tw: "維坦" }, thumbnail: "0_wetham.webp" },
            { nid: "verner", names: { en: "Verner", cn: "维尔纳", tw: "維爾納" }, thumbnail: "0_verner.webp" },
            { nid: "mariandel", names: { en: "Mariandel", cn: "玛丽安蒂尔", tw: "瑪麗安蒂爾" }, thumbnail: "0_mariandel.webp" },
            { nid: "transcendent", names: { en: "Transcend Giz", cn: "超越之人", tw: "超越之人" }, thumbnail: "0_transcendent.webp" },
            { nid: "alpha", names: { en: "Alpha", cn: "阿尔法", tw: "阿爾法" }, thumbnail: "0_alpha.webp" },
            { nid: "christiane", names: { en: "Christiane", cn: "克里斯蒂安妮", tw: "克里斯蒂安妮" }, thumbnail: "0_christiane.png" },
            { nid: "suzette", names: { en: "Suzette", cn: "修杰特", tw: "修傑特" }, thumbnail: "0_suzette.png" },
            { nid: "mu", names: { en: "Mu (Jasmine)", cn: "茉", tw: "茉" }, thumbnail: "0_mu.png" },
            { nid: "epsilon", names: { en: "Epsilon", cn: "伊普西龙", tw: "伊普西龍" }, thumbnail: "0_epsilon.png" },
            { nid: "lucretia", names: { en: "Lucretia", cn: "卢克蕾蒂娅", tw: "盧克蕾蒂婭" }, thumbnail: "0_lucretia.png" },
            { nid: "autokrato", names: { en: "Autokrato IV", cn: "奥托克拉托四世", tw: "奧托克拉托四世" }, thumbnail: "0_autokrato.png" },
            { nid: "ryou", names: { en: "Ryou Sanada", cn: "真田辽", tw: "真田遼" }, thumbnail: "0_ryou.png" },
            { nid: "kayura", names: { en: "Lady Kayura", cn: "迦游罗", tw: "迦游罗" }, thumbnail: "0_kayura.png" },
            { nid: "touma", names: { en: "Touma Hashiba", cn: "羽柴当麻", tw: "羽柴當麻" }, thumbnail: "1_touma.png" },
            { nid: "sissiwhite", names: { en: "Sissi White", cn: "怀特·茜茜", tw: "懷特·茜茜" }, thumbnail: "0_sissiwhite.png" },
            { nid: "clord", names: { en: "Crimson Lord", cn: "红月之王", tw: "紅月之王" }, thumbnail: "0_crimsonlord.png" },
            { nid: "patsyr", names: { en: "Patsyr", cn: "帕希尔", tw: "帕希爾" }, thumbnail: "0_patsyr.png" },
            { nid: "towa", names: { en: "Towa", cn: "托娃", tw: "托娃" }, thumbnail: "0_towa.png" },
            { nid: "kreuger", names: { en: "Kreuger", cn: "邪神库鲁加", tw: "邪神庫魯加" }, thumbnail: "0_kreuger.png" },
            { nid: "vincent", names: { en: "Vincent", cn: "文森特", tw: "文森特" }, thumbnail: "0_vincent.png" },
            { nid: "wataru", names: { en: "Ikusabe Wataru", cn: "战部渡", tw: "戰部渡" }, thumbnail: "0_wataru.png" },
            { nid: "himiko", names: { en: "Shinobibe Himiko", cn: "忍部火美子", tw: "忍部火美子" }, thumbnail: "0_himiko.png" },
            { nid: "shibaraku", names: { en: "Tsurugibe Shibaraku", cn: "剑部武一郎", tw: "劍部武一郎" }, thumbnail: "1_shibaraku.png" },
            { nid: "hilda", names: { en: "Hilda", cn: "希尔达", tw: "希爾達" }, thumbnail: "0_hilda.png" },
            { nid: "werner", names: { en: "Werner", cn: "沃尔纳", tw: "沃爾納" }, thumbnail: "0_werner.png" },
            { nid: "lolijess", names: { en: "Light of Genesis", cn: "降生之光", tw: "降生之光" }, thumbnail: "0_lolijess.png" },
            { nid: "mariel", names: { en: "Mariel", cn: "玛丽埃尔", tw: "瑪麗埃爾" }, thumbnail: "0_mariel.png" },
            { nid: "rozenciel", names: { en: "Rozenciel", cn: "罗泽希尔", tw: "羅澤希爾" }, thumbnail: "0_rozenciel.png" },
            { nid: "clotaire", names: { en: "Clotaire", cn: "克洛泰尔", tw: "克洛泰爾" }, thumbnail: "0_clotaire.png" },
            { nid: "ainz", names: { en: "ainz", cn: "安兹·乌尔·恭", tw: "安茲·烏爾·恭" }, thumbnail: "0_ainz.png" },
            { nid: "aka", names: { en: "akaya", cn: "阿卡娅", tw: "阿卡婭" }, thumbnail: "0_aka.png" },
            { nid: "albedo", names: { en: "albedo", cn: "雅儿贝德", tw: "雅兒貝德" }, thumbnail: "0_albedo.png" },
            { nid: "alustriel", names: { en: "alustriel", cn: "艾拉斯卓", tw: "艾拉斯卓" }, thumbnail: "0_alustriel.png" },
            { nid: "angelina", names: { en: "angelina", cn: "安洁丽娜", tw: "安潔麗娜" }, thumbnail: "0_angelina.png" },
            { nid: "ares", names: { en: "ares", cn: "阿雷斯", tw: "阿雷斯" }, thumbnail: "0_ares.png" },
            { nid: "arianrhod", names: { en: "arianrhod", cn: "阿瑞安赫德", tw: "阿瑞安赫德" }, thumbnail: "0_arianrhod.png" },
            { nid: "ashram", names: { en: "ashram", cn: "亚修拉姆", tw: "亞修拉姆" }, thumbnail: "0_ashram.png" },
            { nid: "bernhardt", names: { en: "bernhardt", cn: "巴恩哈特", tw: "巴恩哈特" }, thumbnail: "0_bernhardt.png" },
            { nid: "betty", names: { en: "betty", cn: "贝蒂", tw: "貝蒂" }, thumbnail: "0_betty.png" },
            { nid: "bozel", names: { en: "bozel", cn: "波赞鲁", tw: "波贊魯" }, thumbnail: "0_bozel.png" },
            { nid: "brenda", names: { en: "brenda", cn: "布琳达", tw: "布琳達" }, thumbnail: "0_brenda.png" },
            { nid: "clarett", names: { en: "clarett", cn: "克拉蕾特", tw: "克拉蕾特" }, thumbnail: "0_clarett.png" },
            { nid: "deedlit", names: { en: "deedlit", cn: "蒂德莉特", tw: "蒂德莉特" }, thumbnail: "0_deedlit.png" },
            { nid: "emilia", names: { en: "emilia", cn: "艾米莉亚", tw: "艾米莉亞" }, thumbnail: "0_emilia.png" },
            { nid: "estelle", names: { en: "estelle", cn: "艾丝蒂尔", tw: "艾絲蒂爾" }, thumbnail: "0_estelle.png" },
            { nid: "florentia", names: { en: "florentia", cn: "弗洛朗蒂娅", tw: "弗洛朗蒂婭" }, thumbnail: "0_florentia.png" },
            { nid: "gerald_layla", names: { en: "gerald & layla", cn: "杰利奥鲁 & 蕾拉", tw: "傑利奧魯 & 蕾拉" }, thumbnail: "0_gerald_layla.png" },
            { nid: "gizarof", names: { en: "gizarof", cn: "基扎洛夫", tw: "基扎洛夫" }, thumbnail: "0_gizarof.png" },
            { nid: "helena", names: { en: "helena", cn: "海伦娜", tw: "海倫娜" }, thumbnail: "0_helena.png" },
            { nid: "hiei", names: { en: "hiei", cn: "飞影", tw: "飛影" }, thumbnail: "0_hiei.png" },
            { nid: "ilucia", names: { en: "ilucia", cn: "伊露希亚", tw: "伊露希亞" }, thumbnail: "0_ilucia.png" },
            { nid: "joshua", names: { en: "joshua", cn: "约修亚", tw: "約修亞" }, thumbnail: "0_joshua.png" },
            { nid: "jugler", names: { en: "jugler", cn: "古巨拉", tw: "古巨拉" }, thumbnail: "0_jugler.png" },
            { nid: "knight_of_mystery", names: { en: "knight of mystery", cn: "谜之骑士", tw: "謎之騎士" }, thumbnail: "0_knight_of_mystery.png" },
            { nid: "kurama", names: { en: "kurama", cn: "藏马", tw: "藏馬" }, thumbnail: "0_kurama.png" },
            { nid: "lambda", names: { en: "lambda", cn: "拉姆达", tw: "拉姆達" }, thumbnail: "0_lambda.png" },
            { nid: "landius", names: { en: "landius", cn: "兰迪乌斯", tw: "蘭迪烏斯" }, thumbnail: "0_landius.png" },
            { nid: "lanford", names: { en: "lanford", cn: "兰芳特", tw: "蘭芳特" }, thumbnail: "0_lanford.png" },
            { nid: "leon", names: { en: "leon", cn: "利昂", tw: "利昂" }, thumbnail: "0_leon.png" },
            { nid: "leonhardt", names: { en: "leonhardt", cn: "莱恩哈特", tw: "莱恩哈特" }, thumbnail: "0_leonhardt.png" },
            { nid: "liana", names: { en: "liana", cn: "莉亚娜", tw: "莉亞娜" }, thumbnail: "0_liana.png" },
            { nid: "licorice", names: { en: "licorice", cn: "丽可丽丝", tw: "麗可麗絲" }, thumbnail: "0_licorice.png" },
            { nid: "listell", names: { en: "listell", cn: "妮丝蒂尔", tw: "妮絲蒂爾" }, thumbnail: "0_listell.png" },
            { nid: "luna", names: { en: "luna", cn: "露娜", tw: "露娜" }, thumbnail: "0_luna.png" },
            { nid: "maiya", names: { en: "maiya", cn: "梅雅", tw: "梅雅" }, thumbnail: "0_maiya.png" },
            { nid: "noemi", names: { en: "noemi", cn: "诺埃米", tw: "諾埃米" }, thumbnail: "0_noemi.png" },
            { nid: "omega", names: { en: "omega", cn: "欧米伽", tw: "歐米伽" }, thumbnail: "0_omega.png" },
            { nid: "rachel", names: { en: "rachel", cn: "蕾伽尔", tw: "蕾伽爾" }, thumbnail: "0_rachel.png" },
            { nid: "rainforce", names: { en: "rainforce", cn: "雷因法鲁斯", tw: "雷因法魯斯" }, thumbnail: "0_rainforce.png" },
            { nid: "rean", names: { en: "rean", cn: "黎恩", tw: "黎恩" }, thumbnail: "0_rean.png" },
            { nid: "renata", names: { en: "renata", cn: "蕾娜塔", tw: "蕾娜塔" }, thumbnail: "0_renata.png" },
            { nid: "renne", names: { en: "renne", cn: "玲", tw: "玲" }, thumbnail: "0_renne.png" },
            { nid: "rosalia", names: { en: "rozalia", cn: "罗莎莉娅", tw: "羅莎莉婭" }, thumbnail: "0_rosalia.png" },
            { nid: "sage_of_yggdrasil", names: { en: "sage of yggdrasil", cn: "树之贤者", tw: "樹之賢者" }, thumbnail: "0_sage_of_yggdrasil.png" },
            { nid: "sakura", names: { en: "sakura", cn: "真宫寺樱", tw: "真宮寺櫻" }, thumbnail: "0_sakura.png" },
            { nid: "shaltear", names: { en: "shaltear", cn: "夏提雅", tw: "夏提雅" }, thumbnail: "0_shaltear.png" },
            { nid: "shelaniel", names: { en: "shelfaniel", cn: "雪露法妮尔", tw: "雪露法妮爾" }, thumbnail: "0_shelaniel.png" },
            { nid: "shilinka", names: { en: "shilinka", cn: "希琳卡", tw: "希琳卡" }, thumbnail: "0_shilinka.png" },
            { nid: "sumire", names: { en: "sumire", cn: "神崎堇", tw: "神崎堇" }, thumbnail: "0_sumire.png" },
            { nid: "tiaris", names: { en: "tiaris", cn: "蒂亚莉丝", tw: "蒂亞莉絲" }, thumbnail: "0_tiaris.png" },
            { nid: "togurobros", names: { en: "toguro bros", cn: "户愚吕兄弟", tw: "戶愚呂兄弟" }, thumbnail: "0_togurobros.png" },
            { nid: "tsubame", names: { en: "tsubame", cn: "燕", tw: "燕" }, thumbnail: "0_tsubame.png" },
            { nid: "virash", names: { en: "virash", cn: "维拉玖", tw: "维拉玖" }, thumbnail: "0_virash.png" },
            { nid: "wiler", names: { en: "wiler", cn: "威拉", tw: "威拉" }, thumbnail: "0_wiler.png" },
            { nid: "young_jessica", names: { en: "young jessica", cn: "女神化身", tw: "女神化身" }, thumbnail: "0_young_jessica.png" },
            { nid: "yulia", names: { en: "yulia", cn: "尤利娅", tw: "尤利娅" }, thumbnail: "0_yulia.png" },
            { nid: "yuusuke", names: { en: "yuusuke", cn: "浦饭幽助", tw: "浦飯幽助" }, thumbnail: "0_yuusuke.png" },
            { nid: "zerida", names: { en: "zerida", cn: "泽瑞达", tw: "澤瑞達" }, thumbnail: "0_zerida.png" },
            { nid: "alfred", names: { en: "alfred", cn: "阿尔弗雷德", tw: "阿爾弗雷德" }, thumbnail: "1_alfred.png" },
            { nid: "altina", names: { en: "altina", cn: "亚尔缇娜", tw: "亞爾緹娜" }, thumbnail: "1_altina.png" },
            { nid: "angelica", names: { en: "angelica", cn: "安杰丽卡", tw: "安傑麗卡" }, thumbnail: "1_angelica.png" },
            { nid: "chris", names: { en: "chris", cn: "克丽丝", tw: "克麗絲" }, thumbnail: "1_chris.png" },
            { nid: "egbert", names: { en: "egbert", cn: "埃格贝尔特", tw: "埃格貝爾特" }, thumbnail: "1_egbert.png" },
            { nid: "emerick", names: { en: "emerick", cn: "艾马林克", tw: "艾馬林克" }, thumbnail: "1_emerick.png" },
            { nid: "feraquea", names: { en: "feraquea", cn: "弗拉基亚", tw: "弗拉基亞" }, thumbnail: "1_feraquea.png" },
            { nid: "imelda", names: { en: "imelda", cn: "伊梅尔达", tw: "伊梅爾達" }, thumbnail: "1_imelda.png" },
            { nid: "iris", names: { en: "iris", cn: "爱丽丝", tw: "愛麗絲" }, thumbnail: "1_iris.png" },
            { nid: "kirikaze", names: { en: "kirikaze", cn: "雾风", tw: "霧風" }, thumbnail: "1_kirikaze.png" },
            { nid: "klose", names: { en: "klose", cn: "科洛丝", tw: "科洛絲" }, thumbnail: "1_klose.png" },
            { nid: "kuwabara", names: { en: "kuwabara", cn: "桑原和真", tw: "桑原和真" }, thumbnail: "1_kuwabara.png" },
            { nid: "lance", names: { en: "lance", cn: "兰斯", tw: "蘭斯" }, thumbnail: "1_lance.png" },
            { nid: "liffany", names: { en: "liffany", cn: "莉法妮", tw: "莉法妮" }, thumbnail: "1_liffany.png" },
            { nid: "melenia", names: { en: "melania", cn: "梅露帕妮", tw: "梅露帕妮" }, thumbnail: "1_melenia.png" },
            { nid: "oliver_brat", names: { en: "oliver brat", cn: "奥利佛", tw: "奧利佛" }, thumbnail: "1_oliver_brat.png" },
            { nid: "olivier", names: { en: "olivier", cn: "奥利维尔", tw: "奧利維爾" }, thumbnail: "1_olivier.png" },
            { nid: "parn", names: { en: "parn", cn: "帕恩", tw: "帕恩" }, thumbnail: "1_parn.png" },
            { nid: "pirotess", names: { en: "pirotess", cn: "比萝蒂丝", tw: "比蘿蒂絲" }, thumbnail: "1_pirotess.png" },
            { nid: "serena", names: { en: "serena", cn: "塞蕾娜", tw: "塞蕾娜" }, thumbnail: "1_serena.png" },
            { nid: "silverwolf", names: { en: "silverwolf", cn: "银狼", tw: "銀狼" }, thumbnail: "1_silverwolf.png" },
            { nid: "sonya", names: { en: "sonya", cn: "索尼娅", tw: "索尼婭" }, thumbnail: "1_sonya.png" },
            { nid: "sophia", names: { en: "sophia", cn: "索菲亚", tw: "索菲亞" }, thumbnail: "1_sophia.png" },
            { nid: "vargas", names: { en: "vargas", cn: "巴尔加斯", tw: "巴爾加斯" }, thumbnail: "1_vargas.png" },
            { nid: "varna", names: { en: "varna", cn: "法娜", tw: "法娜" }, thumbnail: "1_varna.png" },
            { nid: "aaron", names: { en: "aaron", cn: "阿伦", tw: "阿倫" }, thumbnail: "2_aaron.png" },
            { nid: "anna", names: { en: "anna", cn: "安娜", tw: "安娜" }, thumbnail: "2_anna.png" },
            { nid: "dios", names: { en: "dios", cn: "迪欧斯", tw: "迪歐斯" }, thumbnail: "2_dios.png" },
            { nid: "jessica", names: { en: "jessica", cn: "杰西卡", tw: "傑西卡" }, thumbnail: "2_jessica.png" },
            { nid: "keith", names: { en: "keith", cn: "基斯", tw: "基斯" }, thumbnail: "2_keith.png" },
            { nid: "laird", names: { en: "laird", cn: "利亚特", tw: "利亞特" }, thumbnail: "2_laird.png" },
            { nid: "lester", names: { en: "lester", cn: "利斯塔", tw: "利斯塔" }, thumbnail: "2_lester.png" },
            { nid: "leticia", names: { en: "leticia", cn: "蕾蒂西亚", tw: "蕾蒂西亞" }, thumbnail: "2_leticia.png" },
            { nid: "pierre", names: { en: "pierre", cn: "皮耶鲁", tw: "皮耶魯" }, thumbnail: "2_pierre.png" },
            { nid: "rohga", names: { en: "rohga", cn: "洛加", tw: "洛加" }, thumbnail: "2_rohga.png" },
            { nid: "scott", names: { en: "scott", cn: "斯科特", tw: "斯科特" }, thumbnail: "2_scott.png" },
            { nid: "almeda", names: { en: "almeda", cn: "艾梅达", tw: "艾梅達" }, thumbnail: "3_almeda.png" },
        ],
        r = [],
        o = !1,
        a = !1,
        s = "",
        l = 0,
        u = 0,
        c = [
            { target: 1, type: "ban", amt: 1, label: "first", text: { en: "Ban 1 unit from Player 1's Box", cn: "从P1 Ban 1 位人物", tw: "從P1 Ban 1 位人物" } },
            { target: 2, type: "ban", amt: 1, label: "first", text: { en: "Ban 1 unit from Player 2's Box", cn: "从P2 Ban 1 位人物", tw: "從P2 Ban 1 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "first", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 1, type: "ban", amt: 2, label: "second", text: { en: "Ban 2 units from Player 1's Box", cn: "从P1 Ban 2 位人物", tw: "從P1 Ban 2 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "first", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
            { target: 2, type: "ban", amt: 2, label: "second", text: { en: "Ban 2 units from Player 2's Box", cn: "从P2 Ban 2 位人物", tw: "從P2 Ban 2 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "second", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 1, type: "ban", amt: 2, label: "third", text: { en: "Ban 2 units from Player 1's Box", cn: "从P1 Ban 2 位人物", tw: "從P1 Ban 2 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "second", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
            { target: 2, type: "ban", amt: 2, label: "third", text: { en: "Ban 2 units from Player 2's Box", cn: "从P2 Ban 2 位人物", tw: "從P2 Ban 2 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "third", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 1, type: "ban", amt: 2, label: "fourth", text: { en: "Ban 2 units from Player 1", cn: "从P1 Ban 2 位人物", tw: "從P1 Ban 2 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "third", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
            { target: 2, type: "ban", amt: 2, label: "fourth", text: { en: "Ban 2 units from Player 2's Box", cn: "从P2 Ban 2 位人物", tw: "從P2 Ban 2 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "fourth", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 1, type: "ban", amt: 2, label: "fifth", text: { en: "Ban 2 units from Player 1's Box", cn: "从P1 Ban 2 位人物", tw: "從P1 Ban 2 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "fourth", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
            { target: 2, type: "ban", amt: 2, label: "fifth", text: { en: "Ban 2 units from Player 2's Box", cn: "从P2 Ban 2 位人物", tw: "從P2 Ban 2 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "fifth", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "fifth", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
        ],
        p = { en: "Please Add a box", cn: "请添加 BOX", tw: "請添加 BOX" },
        d = { en: "Please select 15 characters for your box", cn: "请为您的BOX选择15位人物", tw: "請為您的BOX選擇15位人物" },
        f = { en: "End of Ban/Pick", cn: "Ban/Pick 完结", tw: "Ban/Pick 完結" },
        h = { en: "Match Map", cn: "对峙战地", tw: "對峙戰地" };
    function m() {
        !(function () {
            if (null === localStorage.getItem(t)) localStorage.setItem(t, "[]");
            else {
                var e = localStorage.getItem(t);
                try {
                    var n = JSON.parse(e);
                    if (n && "object" == typeof n) {
                        r = n;
                        for (var i = 0; i < r.length; i++) void 0 === r[i].bid && (r[i].bid = y());
                    }
                } catch { }
            }
        })(),
            (function () {
                for (var t = "", o = 0; o < i.length; o++) {
                    var a = i[o].names[e];
                    t += '<div class="char-node" data-name="' + i[o].nid + '"><div class="img"><img src="' + n + i[o].thumbnail + '"/></div><div class="title">' + a + "</div></div>";
                }
                $("#char_selectlist").html(t),
                    $("#box_maker").popup({ opacity: 0.7, transition: "all 0.3s" }),
                    $("#panel_import").popup({ opacity: 0.7, transition: "all 0.3s" }),
                    $("#panel_export").popup({
                        opacity: 0.7,
                        transition: "all 0.3s",
                        closetransitionend: function () {
                            $("#export_datatext").val("");
                        },
                    }),
                    $("#panel_mapchoice").popup({ opacity: 0.7, transition: "all 0.3s", escape: !1, blur: !1 }),
                    b(),
                    $(".char-node").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation();
                        var e = $(".char-node.selected").length;
                        !$(this).hasClass("selected") && e < 15 ? $(this).addClass("selected") : $(this).removeClass("selected"), b();
                    }),
                    $("#box_clear").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation(), w();
                    }),
                    $("#box_save").on("click", function (t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            $("#box_name, .box-actionlink > label").removeClass("form-err"),
                            (function () {
                                for (
                                    var t = $(".char-node.selected"),
                                    e = $("#box_name")
                                        .val()
                                        .replace(/[&\/\\#,+()$~%'":*?<>{}|]/g, "")
                                        .substring(0, 20),
                                    n = [],
                                    i = 0;
                                    i < t.length;
                                    i++
                                )
                                    n.push($(t[i]).attr("data-name"));
                                if ("" == s) {
                                    var o = {};
                                    (o.name = e), (o.bid = y()), (o.units = n), r.push(o);
                                } else {
                                    var a = null;
                                    for (i = 0; i < r.length; i++) r[i].bid == s && (a = i);
                                    null != a && ((r[a].name = e), (r[a].units = n));
                                }
                                k(), w(), $("#box_maker").popup("hide");
                            })();
                    });
            })(),
            $("#box_add").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), w(), (s = ""), A(), $("#box_maker").popup("show");
            }),
            $("#box_import").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), $("#import_datatext").val(""), $("#panel_import").popup("show");
            }),
            $("#import_abox").on("click", function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    (function (t) {
                        if ("" != t) {
                            var e = LZString.decompressFromBase64(t);
                            if (null != e)
                                try {
                                    var n = JSON.parse(e);
                                    n && "object" == typeof n && void 0 !== n.name && void 0 !== n.units && Array.isArray(n.units) && (x(n, !0), $("#panel_import").popup("hide"), A(), $("#box_maker").popup("show"));
                                } catch { }
                        }
                    })($("#import_datatext").val());
            }),
            $("#box_clearp12").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), A();
            }),
            $("#box_matchp12").on("click", function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    (l = 0),
                    (u = 0),
                    _matchStats.clearTimeline(),
                    $(".bp-sim").addClass("matched"),
                    $(".bp-sim").removeClass("active end"),
                    $(".bpchar-node").removeClass("ban pick first second third fourth fifth"),
                    $("#match_mapcontent").empty(),
                    $("#panel_mapchoice").popup("show"),
                    $("#site_saveimage").hide();
            }),
            $("#site_saveimage").on("click", function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    $("#boxlist_container, .button, #match_ntext").hide(),
                    window.scrollTo(0, 0),
                    domtoimage.toBlob(document.getElementById("pickban_site")).then(function (t) {
                        saveAs(t, "langrisser-pickban.png"), $("#boxlist_container, .button, #match_ntext").show();
                    });
            }),
            $(".apexmap").on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
                var n = $(this).attr("data-type");
                $("#match_mapcontent").html("<h4>" + h[e] + '</h4><div class="cmatchmap" data-type="' + n + '"></div>'), $("#panel_mapchoice").popup("hide"), P();
            }),
            $("#box_list").on("click", ".bn-assign1", function (t) {
                var e = $(this).closest(".box-node").attr("data-bid");
                $(".bn-assign1").removeClass("toggle"), $(this).addClass("toggle"), T("p1", e), C();
            }),
            $("#box_list").on("click", ".bn-assign2", function (t) {
                var e = $(this).closest(".box-node").attr("data-bid");
                $(".bn-assign2").removeClass("toggle"), $(this).addClass("toggle"), T("p2", e), C();
            }),
            $("#box_list").on("click", ".bn-edit", function (t) {
                var e = v($(this).closest(".box-node").attr("data-bid"))[0];
                A(), x(e, !1), $("#box_maker").popup("show");
            }),
            $("#box_list").on("click", ".bn-export", function (t) {
                var e,
                    n,
                    i,
                    r = v($(this).closest(".box-node").attr("data-bid"))[0];
                (e = r), (n = JSON.stringify(e)), (i = LZString.compressToBase64(n)), $("#export_datatext").val(i), $("#panel_export").popup("show");
            }),
            $("#box_list").on("click", ".bn-delete", function (t) {
                var e = $(this).closest(".box-node").attr("data-bid");
                A(),
                    (function (t) {
                        for (var e = null, n = 0; n < r.length; n++) r[n].bid == t && (e = n);
                        null != e && r.splice(e, 1), k();
                    })(e);
            }),
            $(".bp-sim").on("click", ".bpchar-node", function (t) {
                var e = c[l];
                $(this).addClass(e.type + " " + e.label), ++u >= e.amt && ((u = 0), l++, P());
            }),
            k();
    }
    function g(t) {
        return i.filter(function (e) {
            return e.nid == t;
        });
    }
    function v(t) {
        return r.filter(function (e) {
            return e.bid == t;
        });
    }
    function y() {
        return "nlan_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    function b() {
        var t = $(".char-node.selected").length;
        15 == t
            ? ($(".char-node:not(.selected)").addClass("dim"),
                "cn" == e || "tw" == e ? $("#char_selectcount").html("以选 " + t + " 位人物") : $("#char_selectcount").html(t + " Character(s) selected."),
                $("#box_save, #box_name").removeClass("disable"))
            : 0 == t
                ? ($("#char_selectcount").html(d[e]), _())
                : ($(".char-node.dim").removeClass("dim"), "cn" == e || "tw" == e ? $("#char_selectcount").html("以选 " + t + " 位人物") : $("#char_selectcount").html(t + " Character(s) selected."), _());
    }
    function _() {
        $("#box_save, #box_name").addClass("disable");
    }
    function w() {
        $("#box_name, .box-actionlink > label").removeClass("form-err"), $(".char-node").removeClass("selected dim"), $("#box_name").val(""), b();
    }
    function x(t, e) {
        w(), (s = e ? "" : t.bid);
        for (var n = 0; n < t.units.length; n++) $('#box_maker .char-node[data-name="' + t.units[n] + '"]').addClass("selected");
        $("#box_name").val(t.name), b();
    }
    function k() {
        if (($("#box_list").empty(), $("#box_matchp12, #box_clearp12").addClass("disable"), 0 == r.length)) $(".bp-sim").empty(), $("#box_list").html(p[e]);
        else if (r.length >= 1) {
            $("#box_clearp12").removeClass("disable");
            for (var n = "", i = 0; i < r.length; i++)
                n +=
                    '<div class="box-node" data-bid="' +
                    r[i].bid +
                    '"><div class="bn-name">' +
                    r[i].name +
                    '</div><div class="bn-actions"><div class="bn-assign1 button">P1</div><div class="bn-assign2 button">P2</div><div class="bn-edit button"></div><div class="bn-export button"></div><div class="bn-delete button"></div></div></div>';
            $("#box_list").html(n);
        }
        var o;
        r.length >= 10 ? $("#box_add").addClass("disable") : $("#box_add").removeClass("disable"), (o = JSON.stringify(r)), localStorage.setItem(t, o);
    }
    function T(t, e) {
        for (var i = '<div class="bp-playerbox">', r = v(e)[0], s = 0; s < r.units.length; s++) {
            var l = g(r.units[s]);
            i += '<div class="bpchar-node" data-name="' + l[0].nid + '"><div class="img"><img src="' + n + l[0].thumbnail + '"/></div></div>';
        }
        (i += "</div>"), $("#box_" + t).html(i), $("#box_" + t).attr("data-box_name", r.name), $("#box_" + t).attr("data-box_bid", r.bid), "p1" == t && (o = !0), "p2" == t && (a = !0);
    }
    function C() {
        o && a ? $("#box_matchp12").removeClass("disable") : $("#box_matchp12").addClass("disable");
    }
    function P() {
        if (l >= c.length)
            $("#match_ntext").html(f[e]),
                $(".bp-sim").removeClass("matched active"),
                $(".bp-sim").addClass("end"),
                $("#site_saveimage").show(),
                (function () {
                    for (var t = {}, e = ["first", "second", "third", "fourth", "fifth"], n = [], i = [], r = [], o = [], a = $("#box_p1"), s = $("#box_p2"), l = 0; l < 5; l++)
                        (n[l] = S("p1", ".ban." + e[l])), (i[l] = S("p1", ".pick." + e[l])), (r[l] = S("p2", ".ban." + e[l])), (o[l] = S("p2", ".pick." + e[l]));
                    (t.p1 = { boxname: a.attr("data-box_name"), boxid: a.attr("data-box_bid"), bans: n, picks: i, remain: S("p1", ":not(.ban):not(.pick)") }),
                        (t.p2 = { boxname: s.attr("data-box_name"), boxid: s.attr("data-box_bid"), bans: r, picks: o, remain: S("p2", ":not(.ban):not(.pick)") }),
                        (t.mapid = $("#match_mapcontent .cmatchmap").attr("data-type")),
                        _matchStats.createTimeline(t);
                })();
        else {
            var t = c[l];
            $("#match_ntext").html(t.text[e]), $(".bp-sim").removeClass("active"), $("#box_p" + t.target).addClass("active");
        }
    }
    function A() {
        (l = 0),
            (u = 0),
            (o = !1),
            (a = !1),
            $("#match_ntext").empty(),
            $(".bn-assign1, .bn-assign2").removeClass("toggle"),
            $(".bp-sim").empty(),
            $(".bp-sim").removeClass("matched active"),
            $(".bp-sim").attr("data-box_name", ""),
            $(".bp-sim").attr("data-box_bid", ""),
            $("#box_matchp12").addClass("disable"),
            $("#match_mapcontent").empty(),
            $("#site_saveimage").hide(),
            _matchStats.clearTimeline();
    }
    function S(t, e) {
        for (var n = [], i = $("#box_" + t + " .bpchar-node" + e), r = 0; r < i.length; r++) n.push(i.eq(r).attr("data-name"));
        return n;
    }
    return (
        m(),
        {
            init: m,
            destroy: function () { },
            getboxes: function () {
                console.log(r);
            },
            getChar: g,
        }
    );
})(),
    _matchStats = (function () {
        function t() {
            $(".button.button-timelineec").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), $("#match_stats").toggleClass("expand");
            });
        }
        function e(t) {
            return (imglinkObj = _banpick.getChar(t)[0]), "assets/img/site_assets/" + imglinkObj.thumbnail;
        }
        return (
            t(),
            {
                init: t,
                destroy: function () { },
                createTimeline: function (t) {
                    for (var n = "", i = 1; i <= 5; i++) {
                        for (var r = "", o = "", a = "", s = "", l = 0; l < t.p1.bans[i - 1].length; l++) r += '<div class="mtl-charnode"><img src="' + e(t.p1.bans[i - 1][l]) + '"/></div>';
                        for (l = 0; l < t.p2.bans[i - 1].length; l++) o += '<div class="mtl-charnode"><img src="' + e(t.p2.bans[i - 1][l]) + '"/></div>';
                        for (l = 0; l < t.p1.picks[i - 1].length; l++) a += '<div class="mtl-charnode"><img src="' + e(t.p1.picks[i - 1][l]) + '"/></div>';
                        for (l = 0; l < t.p2.picks[i - 1].length; l++) s += '<div class="mtl-charnode"><img src="' + e(t.p2.picks[i - 1][l]) + '"/></div>';
                        (n += '<div class="mtl-group m-ban" data-seq="' + i + '">'),
                            (n += '<div class="mtl-node m-p1"><div class="mtl-label">Ban</div><div class="mtl-chars">' + r + "</div></div>"),
                            (n += '<div class="mtl-node m-p2"><div class="mtl-label">Ban</div><div class="mtl-chars">' + o + "</div></div>"),
                            (n += "</div>"),
                            (n += '<div class="mtl-group m-pick" data-seq="' + i + '">'),
                            (n += '<div class="mtl-node m-p1"><div class="mtl-label">Pick</div><div class="mtl-chars">' + a + "</div></div>"),
                            (n += '<div class="mtl-node m-p2"><div class="mtl-label">Pick</div><div class="mtl-chars">' + s + "</div></div>"),
                            (n += "</div>");
                    }
                    (n +=
                        '<div class="mtl-group m-left">        <div class="mtl-node m-p1">            <div class="mtl-chars"><div class="mtl-charnode"><img src="' +
                        e(t.p1.remain[0]) +
                        '"/></div></div>        </div>        <div class="mtl-node m-p2">            <div class="mtl-chars"><div class="mtl-charnode"><img src="' +
                        e(t.p2.remain[0]) +
                        '"/></div></div>        </div>        </div>'),
                        $("#matchstats_timeline").html(n),
                        $("#match_statscontainer").show();
                },
                clearTimeline: function () {
                    $("#match_statscontainer").hide();
                },
            }
        );
    })();
window.addEventListener("pageshow", function () {
    console.log("pageShow");
    TweenMax.to("#transition_bg", 1.4, {
        autoAlpha: 0,
        onComplete: function () {
            document.body.classList.add("init-animate"), (document.querySelector("#transition_bg").style.display = "none");
        },
    });
}),
    $(function () { });
