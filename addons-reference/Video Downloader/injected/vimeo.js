var Pe = Object.create;
var ge = Object.defineProperty;
var Ne = Object.getOwnPropertyDescriptor;
var Fe = Object.getOwnPropertyNames;
var Ce = Object.getPrototypeOf,
  Ue = Object.prototype.hasOwnProperty;
var pe = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
var ke = (i, r, t, e) => {
  if ((r && typeof r == "object") || typeof r == "function")
    for (let n of Fe(r))
      !Ue.call(i, n) &&
        n !== t &&
        ge(i, n, {
          get: () => r[n],
          enumerable: !(e = Ne(r, n)) || e.enumerable,
        });
  return i;
};
var he = (i, r, t) => (
  (t = i != null ? Pe(Ce(i)) : {}),
  ke(
    r || !i || !i.__esModule
      ? ge(t, "default", { value: i, enumerable: !0 })
      : t,
    i,
  )
);
var Te = pe(($t, be) => {
  var W;
  typeof window < "u"
    ? (W = window)
    : typeof global < "u"
      ? (W = global)
      : typeof self < "u"
        ? (W = self)
        : (W = {});
  be.exports = W;
});
var Oe = pe((ce, Re) => {
  (function (i, r) {
    if (typeof define == "function" && define.amd)
      define("webextension-polyfill", ["module"], r);
    else if (typeof ce < "u") r(Re);
    else {
      var t = { exports: {} };
      (r(t), (i.browser = t.exports));
    }
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ce,
    function (i) {
      "use strict";
      if (
        !(
          globalThis.chrome &&
          globalThis.chrome.runtime &&
          globalThis.chrome.runtime.id
        )
      )
        throw new Error(
          "This script should only be loaded in a browser extension.",
        );
      if (
        globalThis.browser &&
        globalThis.browser.runtime &&
        globalThis.browser.runtime.id
      )
        i.exports = globalThis.browser;
      else {
        let r = "The message port closed before a response was received.",
          t = (e) => {
            let n = {
              alarms: {
                clear: { minArgs: 0, maxArgs: 1 },
                clearAll: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
              },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 },
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: {
                remove: { minArgs: 1, maxArgs: 1 },
                removeAll: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              cookies: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 1, maxArgs: 1 },
                getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
              devtools: {
                inspectedWindow: {
                  eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                },
                panels: {
                  create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                  elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                },
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              extension: {
                isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
              },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
              },
              i18n: {
                detectLanguage: { minArgs: 1, maxArgs: 1 },
                getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
              },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getSelf: { minArgs: 0, maxArgs: 0 },
                setEnabled: { minArgs: 2, maxArgs: 2 },
                uninstallSelf: { minArgs: 0, maxArgs: 1 },
              },
              notifications: {
                clear: { minArgs: 1, maxArgs: 1 },
                create: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              permissions: {
                contains: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                request: { minArgs: 1, maxArgs: 1 },
              },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 },
              },
              sessions: {
                getDevices: { minArgs: 0, maxArgs: 1 },
                getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                restore: { minArgs: 0, maxArgs: 1 },
              },
              storage: {
                local: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                managed: {
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                },
                sync: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 },
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: {
                getAllFrames: { minArgs: 1, maxArgs: 1 },
                getFrame: { minArgs: 1, maxArgs: 1 },
              },
              webRequest: {
                handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
              },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
            };
            if (Object.keys(n).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill",
              );
            class a extends WeakMap {
              constructor(c, g = void 0) {
                (super(g), (this.createItem = c));
              }
              get(c) {
                return (
                  this.has(c) || this.set(c, this.createItem(c)),
                  super.get(c)
                );
              }
            }
            let u = (m) =>
                m && typeof m == "object" && typeof m.then == "function",
              l =
                (m, c) =>
                (...g) => {
                  e.runtime.lastError
                    ? m.reject(new Error(e.runtime.lastError.message))
                    : c.singleCallbackArg ||
                        (g.length <= 1 && c.singleCallbackArg !== !1)
                      ? m.resolve(g[0])
                      : m.resolve(g);
                },
              f = (m) => (m == 1 ? "argument" : "arguments"),
              o = (m, c) =>
                function (_, ...I) {
                  if (I.length < c.minArgs)
                    throw new Error(
                      `Expected at least ${c.minArgs} ${f(c.minArgs)} for ${m}(), got ${I.length}`,
                    );
                  if (I.length > c.maxArgs)
                    throw new Error(
                      `Expected at most ${c.maxArgs} ${f(c.maxArgs)} for ${m}(), got ${I.length}`,
                    );
                  return new Promise((M, N) => {
                    if (c.fallbackToNoCallback)
                      try {
                        _[m](...I, l({ resolve: M, reject: N }, c));
                      } catch (A) {
                        (console.warn(
                          `${m} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          A,
                        ),
                          _[m](...I),
                          (c.fallbackToNoCallback = !1),
                          (c.noCallback = !0),
                          M());
                      }
                    else
                      c.noCallback
                        ? (_[m](...I), M())
                        : _[m](...I, l({ resolve: M, reject: N }, c));
                  });
                },
              h = (m, c, g) =>
                new Proxy(c, {
                  apply(_, I, M) {
                    return g.call(I, m, ...M);
                  },
                }),
              y = Function.call.bind(Object.prototype.hasOwnProperty),
              b = (m, c = {}, g = {}) => {
                let _ = Object.create(null),
                  I = {
                    has(N, A) {
                      return A in m || A in _;
                    },
                    get(N, A, F) {
                      if (A in _) return _[A];
                      if (!(A in m)) return;
                      let S = m[A];
                      if (typeof S == "function")
                        if (typeof c[A] == "function") S = h(m, m[A], c[A]);
                        else if (y(g, A)) {
                          let B = o(A, g[A]);
                          S = h(m, m[A], B);
                        } else S = S.bind(m);
                      else if (
                        typeof S == "object" &&
                        S !== null &&
                        (y(c, A) || y(g, A))
                      )
                        S = b(S, c[A], g[A]);
                      else if (y(g, "*")) S = b(S, c[A], g["*"]);
                      else
                        return (
                          Object.defineProperty(_, A, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return m[A];
                            },
                            set(B) {
                              m[A] = B;
                            },
                          }),
                          S
                        );
                      return ((_[A] = S), S);
                    },
                    set(N, A, F, S) {
                      return (A in _ ? (_[A] = F) : (m[A] = F), !0);
                    },
                    defineProperty(N, A, F) {
                      return Reflect.defineProperty(_, A, F);
                    },
                    deleteProperty(N, A) {
                      return Reflect.deleteProperty(_, A);
                    },
                  },
                  M = Object.create(m);
                return new Proxy(M, I);
              },
              x = (m) => ({
                addListener(c, g, ..._) {
                  c.addListener(m.get(g), ..._);
                },
                hasListener(c, g) {
                  return c.hasListener(m.get(g));
                },
                removeListener(c, g) {
                  c.removeListener(m.get(g));
                },
              }),
              v = new a((m) =>
                typeof m != "function"
                  ? m
                  : function (g) {
                      let _ = b(
                        g,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } },
                      );
                      m(_);
                    },
              ),
              s = new a((m) =>
                typeof m != "function"
                  ? m
                  : function (g, _, I) {
                      let M = !1,
                        N,
                        A = new Promise((z) => {
                          N = function (C) {
                            ((M = !0), z(C));
                          };
                        }),
                        F;
                      try {
                        F = m(g, _, N);
                      } catch (z) {
                        F = Promise.reject(z);
                      }
                      let S = F !== !0 && u(F);
                      if (F !== !0 && !S && !M) return !1;
                      let B = (z) => {
                        z.then(
                          (C) => {
                            I(C);
                          },
                          (C) => {
                            let re;
                            (C &&
                            (C instanceof Error || typeof C.message == "string")
                              ? (re = C.message)
                              : (re = "An unexpected error occurred"),
                              I({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: re,
                              }));
                          },
                        ).catch((C) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            C,
                          );
                        });
                      };
                      return (B(S ? F : A), !0);
                    },
              ),
              D = ({ reject: m, resolve: c }, g) => {
                e.runtime.lastError
                  ? e.runtime.lastError.message === r
                    ? c()
                    : m(new Error(e.runtime.lastError.message))
                  : g && g.__mozWebExtensionPolyfillReject__
                    ? m(new Error(g.message))
                    : c(g);
              },
              T = (m, c, g, ..._) => {
                if (_.length < c.minArgs)
                  throw new Error(
                    `Expected at least ${c.minArgs} ${f(c.minArgs)} for ${m}(), got ${_.length}`,
                  );
                if (_.length > c.maxArgs)
                  throw new Error(
                    `Expected at most ${c.maxArgs} ${f(c.maxArgs)} for ${m}(), got ${_.length}`,
                  );
                return new Promise((I, M) => {
                  let N = D.bind(null, { resolve: I, reject: M });
                  (_.push(N), g.sendMessage(..._));
                });
              },
              p = {
                devtools: { network: { onRequestFinished: x(v) } },
                runtime: {
                  onMessage: x(s),
                  onMessageExternal: x(s),
                  sendMessage: T.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: T.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              d = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (n.privacy = {
                network: { "*": d },
                services: { "*": d },
                websites: { "*": d },
              }),
              b(e, p, n)
            );
          };
        i.exports = t(chrome);
      }
    },
  );
});
function k(i) {
  var r = String(i);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(i);
    } catch {}
  return r;
}
var Xe = (function () {
    function i() {}
    return (
      (i.prototype.isSome = function () {
        return !1;
      }),
      (i.prototype.isNone = function () {
        return !0;
      }),
      (i.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (i.prototype.unwrapOr = function (r) {
        return r;
      }),
      (i.prototype.expect = function (r) {
        throw new Error("".concat(r));
      }),
      (i.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (i.prototype.map = function (r) {
        return this;
      }),
      (i.prototype.mapOr = function (r, t) {
        return r;
      }),
      (i.prototype.mapOrElse = function (r, t) {
        return r();
      }),
      (i.prototype.or = function (r) {
        return r;
      }),
      (i.prototype.orElse = function (r) {
        return r();
      }),
      (i.prototype.andThen = function (r) {
        return this;
      }),
      (i.prototype.toResult = function (r) {
        return w(r);
      }),
      (i.prototype.toString = function () {
        return "None";
      }),
      (i.prototype.toAsyncOption = function () {
        return new H(E);
      }),
      i
    );
  })(),
  E = new Xe();
Object.freeze(E);
var Ve = (function () {
    function i(r) {
      if (!(this instanceof i)) return new i(r);
      this.value = r;
    }
    return (
      (i.prototype.isSome = function () {
        return !0;
      }),
      (i.prototype.isNone = function () {
        return !1;
      }),
      (i.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (i.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (i.prototype.expect = function (r) {
        return this.value;
      }),
      (i.prototype.unwrap = function () {
        return this.value;
      }),
      (i.prototype.map = function (r) {
        return R(r(this.value));
      }),
      (i.prototype.mapOr = function (r, t) {
        return t(this.value);
      }),
      (i.prototype.mapOrElse = function (r, t) {
        return t(this.value);
      }),
      (i.prototype.or = function (r) {
        return this;
      }),
      (i.prototype.orElse = function (r) {
        return this;
      }),
      (i.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (i.prototype.toResult = function (r) {
        return P(this.value);
      }),
      (i.prototype.toAsyncOption = function () {
        return new H(this);
      }),
      (i.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (i.prototype.toString = function () {
        return "Some(".concat(k(this.value), ")");
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })(),
  R = Ve,
  j;
(function (i) {
  function r() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    for (var u = [], l = 0, f = n; l < f.length; l++) {
      var o = f[l];
      if (o.isSome()) u.push(o.value);
      else return o;
    }
    return R(u);
  }
  i.all = r;
  function t() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    for (var u = 0, l = n; u < l.length; u++) {
      var f = l[u];
      if (f.isSome()) return f;
    }
    return E;
  }
  i.any = t;
  function e(n) {
    return n instanceof R || n === E;
  }
  i.isOption = e;
})(j || (j = {}));
var $ = function (i, r, t) {
    if (t || arguments.length === 2)
      for (var e = 0, n = r.length, a; e < n; e++)
        (a || !(e in r)) &&
          (a || (a = Array.prototype.slice.call(r, 0, e)), (a[e] = r[e]));
    return i.concat(a || Array.prototype.slice.call(r));
  },
  Le = (function () {
    function i(r) {
      if (!(this instanceof i)) return new i(r);
      this.error = r;
      var t = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (t && t.length > 0 && t[0].includes("ErrImpl") && t.shift(),
        (this._stack = t.join(`
`)));
    }
    return (
      (i.prototype.isOk = function () {
        return !1;
      }),
      (i.prototype.isErr = function () {
        return !0;
      }),
      (i.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (i.prototype.else = function (r) {
        return r;
      }),
      (i.prototype.unwrapOr = function (r) {
        return r;
      }),
      (i.prototype.expect = function (r) {
        throw new Error(
          ""
            .concat(r, " - Error: ")
            .concat(
              k(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (i.prototype.expectErr = function (r) {
        return this.error;
      }),
      (i.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              k(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (i.prototype.unwrapErr = function () {
        return this.error;
      }),
      (i.prototype.map = function (r) {
        return this;
      }),
      (i.prototype.andThen = function (r) {
        return this;
      }),
      (i.prototype.mapErr = function (r) {
        return new w(r(this.error));
      }),
      (i.prototype.mapOr = function (r, t) {
        return r;
      }),
      (i.prototype.mapOrElse = function (r, t) {
        return r(this.error);
      }),
      (i.prototype.or = function (r) {
        return r;
      }),
      (i.prototype.orElse = function (r) {
        return r(this.error);
      }),
      (i.prototype.toOption = function () {
        return E;
      }),
      (i.prototype.toString = function () {
        return "Err(".concat(k(this.error), ")");
      }),
      Object.defineProperty(i.prototype, "stack", {
        get: function () {
          return ""
            .concat(
              this,
              `
`,
            )
            .concat(this._stack);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (i.prototype.toAsyncResult = function () {
        return new q(this);
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })();
var w = Le,
  Be = (function () {
    function i(r) {
      if (!(this instanceof i)) return new i(r);
      this.value = r;
    }
    return (
      (i.prototype.isOk = function () {
        return !0;
      }),
      (i.prototype.isErr = function () {
        return !1;
      }),
      (i.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (i.prototype.else = function (r) {
        return this.value;
      }),
      (i.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (i.prototype.expect = function (r) {
        return this.value;
      }),
      (i.prototype.expectErr = function (r) {
        throw new Error(r);
      }),
      (i.prototype.unwrap = function () {
        return this.value;
      }),
      (i.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(k(this.value)), {
          cause: this.value,
        });
      }),
      (i.prototype.map = function (r) {
        return new P(r(this.value));
      }),
      (i.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (i.prototype.mapErr = function (r) {
        return this;
      }),
      (i.prototype.mapOr = function (r, t) {
        return t(this.value);
      }),
      (i.prototype.mapOrElse = function (r, t) {
        return t(this.value);
      }),
      (i.prototype.or = function (r) {
        return this;
      }),
      (i.prototype.orElse = function (r) {
        return this;
      }),
      (i.prototype.toOption = function () {
        return R(this.value);
      }),
      (i.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (i.prototype.toString = function () {
        return "Ok(".concat(k(this.value), ")");
      }),
      (i.prototype.toAsyncResult = function () {
        return new q(this);
      }),
      (i.EMPTY = new i(void 0)),
      i
    );
  })();
var P = Be,
  K;
(function (i) {
  function r(l) {
    for (var f = [], o = 1; o < arguments.length; o++) f[o - 1] = arguments[o];
    for (
      var h = l === void 0 ? [] : Array.isArray(l) ? l : $([l], f, !0),
        y = [],
        b = 0,
        x = h;
      b < x.length;
      b++
    ) {
      var v = x[b];
      if (v.isOk()) y.push(v.value);
      else return v;
    }
    return new P(y);
  }
  i.all = r;
  function t(l) {
    for (var f = [], o = 1; o < arguments.length; o++) f[o - 1] = arguments[o];
    for (
      var h = l === void 0 ? [] : Array.isArray(l) ? l : $([l], f, !0),
        y = [],
        b = 0,
        x = h;
      b < x.length;
      b++
    ) {
      var v = x[b];
      if (v.isOk()) return v;
      y.push(v.error);
    }
    return new w(y);
  }
  i.any = t;
  function e(l) {
    try {
      return new P(l());
    } catch (f) {
      return new w(f);
    }
  }
  i.wrap = e;
  function n(l) {
    try {
      return l()
        .then(function (f) {
          return new P(f);
        })
        .catch(function (f) {
          return new w(f);
        });
    } catch (f) {
      return Promise.resolve(new w(f));
    }
  }
  i.wrapAsync = n;
  function a(l) {
    return l.reduce(
      function (f, o) {
        var h = f[0],
          y = f[1];
        return o.isOk()
          ? [$($([], h, !0), [o.value], !1), y]
          : [h, $($([], y, !0), [o.error], !1)];
      },
      [[], []],
    );
  }
  i.partition = a;
  function u(l) {
    return l instanceof w || l instanceof P;
  }
  i.isResult = u;
})(K || (K = {}));
var Q = function (i, r, t, e) {
    function n(a) {
      return a instanceof t
        ? a
        : new t(function (u) {
            u(a);
          });
    }
    return new (t || (t = Promise))(function (a, u) {
      function l(h) {
        try {
          o(e.next(h));
        } catch (y) {
          u(y);
        }
      }
      function f(h) {
        try {
          o(e.throw(h));
        } catch (y) {
          u(y);
        }
      }
      function o(h) {
        h.done ? a(h.value) : n(h.value).then(l, f);
      }
      o((e = e.apply(i, r || [])).next());
    });
  },
  J = function (i, r) {
    var t = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      e,
      n,
      a,
      u;
    return (
      (u = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (u[Symbol.iterator] = function () {
          return this;
        }),
      u
    );
    function l(o) {
      return function (h) {
        return f([o, h]);
      };
    }
    function f(o) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; u && ((u = 0), o[0] && (t = 0)), t; )
        try {
          if (
            ((e = 1),
            n &&
              (a =
                o[0] & 2
                  ? n.return
                  : o[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, o[1])).done)
          )
            return a;
          switch (((n = 0), a && (o = [o[0] & 2, a.value]), o[0])) {
            case 0:
            case 1:
              a = o;
              break;
            case 4:
              return (t.label++, { value: o[1], done: !1 });
            case 5:
              (t.label++, (n = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((a = t.trys),
                !(a = a.length > 0 && a[a.length - 1]) &&
                  (o[0] === 6 || o[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < a[1]) {
                ((t.label = a[1]), (a = o));
                break;
              }
              if (a && t.label < a[2]) {
                ((t.label = a[2]), t.ops.push(o));
                break;
              }
              (a[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          o = r.call(i, t);
        } catch (h) {
          ((o = [6, h]), (n = 0));
        } finally {
          e = a = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  q = (function () {
    function i(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (i.prototype.andThen = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return Q(t, void 0, void 0, function () {
            var n;
            return J(this, function (a) {
              return e.isErr()
                ? [2, e]
                : ((n = r(e.value)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return Q(t, void 0, void 0, function () {
            var n;
            return J(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isErr() ? [2, e] : ((n = P), [4, r(e.value)]);
                case 1:
                  return [2, n.apply(void 0, [a.sent()])];
              }
            });
          });
        });
      }),
      (i.prototype.mapErr = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return Q(t, void 0, void 0, function () {
            var n;
            return J(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isOk() ? [2, e] : ((n = w), [4, r(e.error)]);
                case 1:
                  return [2, n.apply(void 0, [a.sent()])];
              }
            });
          });
        });
      }),
      (i.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (i.prototype.orElse = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return Q(t, void 0, void 0, function () {
            var n;
            return J(this, function (a) {
              return e.isOk()
                ? [2, e]
                : ((n = r(e.error)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.toOption = function () {
        return new H(
          this.promise.then(function (r) {
            return r.toOption();
          }),
        );
      }),
      (i.prototype.thenInternal = function (r) {
        return new i(this.promise.then(r));
      }),
      i
    );
  })();
var ie = function (i, r, t, e) {
    function n(a) {
      return a instanceof t
        ? a
        : new t(function (u) {
            u(a);
          });
    }
    return new (t || (t = Promise))(function (a, u) {
      function l(h) {
        try {
          o(e.next(h));
        } catch (y) {
          u(y);
        }
      }
      function f(h) {
        try {
          o(e.throw(h));
        } catch (y) {
          u(y);
        }
      }
      function o(h) {
        h.done ? a(h.value) : n(h.value).then(l, f);
      }
      o((e = e.apply(i, r || [])).next());
    });
  },
  ne = function (i, r) {
    var t = {
        label: 0,
        sent: function () {
          if (a[0] & 1) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      e,
      n,
      a,
      u;
    return (
      (u = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (u[Symbol.iterator] = function () {
          return this;
        }),
      u
    );
    function l(o) {
      return function (h) {
        return f([o, h]);
      };
    }
    function f(o) {
      if (e) throw new TypeError("Generator is already executing.");
      for (; u && ((u = 0), o[0] && (t = 0)), t; )
        try {
          if (
            ((e = 1),
            n &&
              (a =
                o[0] & 2
                  ? n.return
                  : o[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
              !(a = a.call(n, o[1])).done)
          )
            return a;
          switch (((n = 0), a && (o = [o[0] & 2, a.value]), o[0])) {
            case 0:
            case 1:
              a = o;
              break;
            case 4:
              return (t.label++, { value: o[1], done: !1 });
            case 5:
              (t.label++, (n = o[1]), (o = [0]));
              continue;
            case 7:
              ((o = t.ops.pop()), t.trys.pop());
              continue;
            default:
              if (
                ((a = t.trys),
                !(a = a.length > 0 && a[a.length - 1]) &&
                  (o[0] === 6 || o[0] === 2))
              ) {
                t = 0;
                continue;
              }
              if (o[0] === 3 && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                t.label = o[1];
                break;
              }
              if (o[0] === 6 && t.label < a[1]) {
                ((t.label = a[1]), (a = o));
                break;
              }
              if (a && t.label < a[2]) {
                ((t.label = a[2]), t.ops.push(o));
                break;
              }
              (a[2] && t.ops.pop(), t.trys.pop());
              continue;
          }
          o = r.call(i, t);
        } catch (h) {
          ((o = [6, h]), (n = 0));
        } finally {
          e = a = 0;
        }
      if (o[0] & 5) throw o[1];
      return { value: o[0] ? o[1] : void 0, done: !0 };
    }
  },
  H = (function () {
    function i(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (i.prototype.andThen = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ie(t, void 0, void 0, function () {
            var n;
            return ne(this, function (a) {
              return e.isNone()
                ? [2, e]
                : ((n = r(e.value)), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.map = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ie(t, void 0, void 0, function () {
            var n;
            return ne(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.isNone() ? [2, e] : ((n = R), [4, r(e.value)]);
                case 1:
                  return [2, n.apply(void 0, [a.sent()])];
              }
            });
          });
        });
      }),
      (i.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (i.prototype.orElse = function (r) {
        var t = this;
        return this.thenInternal(function (e) {
          return ie(t, void 0, void 0, function () {
            var n;
            return ne(this, function (a) {
              return e.isSome()
                ? [2, e]
                : ((n = r()), [2, n instanceof i ? n.promise : n]);
            });
          });
        });
      }),
      (i.prototype.toResult = function (r) {
        return new q(
          this.promise.then(function (t) {
            return t.toResult(r);
          }),
        );
      }),
      (i.prototype.thenInternal = function (r) {
        return new i(this.promise.then(r));
      }),
      i
    );
  })();
function ae(i, r) {
  let t = new URLSearchParams();
  for (let [e, n] of i) t.set(e, n);
  for (let [e, n] of r) t.set(e, n);
  return t.toString();
}
function V(i, r) {
  try {
    if (i) return R(new URL(i, r));
  } catch {}
  return E;
}
function U(i) {
  if (typeof i == "string") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i == "number") return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i == "boolean")
    return { __serde_tag: "primitive", __serde_val: i };
  if (typeof i > "u") return { __serde_tag: "primitive", __serde_val: i };
  if (i == null) return { __serde_tag: "primitive", __serde_val: i };
  if (Array.isArray(i))
    return { __serde_tag: "array", __serde_val: i.map((r) => U(r)) };
  if (i instanceof URL) return { __serde_tag: "url", __serde_val: i.href };
  if (i instanceof Headers) {
    let r = [];
    return (
      i.forEach((t, e) => {
        r.push([e, t]);
      }),
      { __serde_tag: "headers", __serde_val: r }
    );
  } else {
    if (i instanceof Set)
      return { __serde_tag: "set", __serde_val: [...i.values()].map(U) };
    if (i instanceof Map)
      return {
        __serde_tag: "map",
        __serde_val: [...i.entries()].map(([r, t]) => [U(r), U(t)]),
      };
    if (i instanceof RegExp)
      return { __serde_tag: "regex", __serde_val: [i.source, i.flags] };
    if (j.isOption(i))
      return i.isSome()
        ? { __serde_tag: "some", __serde_val: U(i.value) }
        : { __serde_tag: "none" };
    if (K.isResult(i))
      return i.isOk()
        ? { __serde_tag: "ok", __serde_val: U(i.value) }
        : { __serde_tag: "err", __serde_val: U(i.error) };
    if (typeof i == "object") {
      let r = {};
      for (let [t, e] of Object.entries(i)) r[t] = U(e);
      return { __serde_tag: "object", __serde_val: r };
    } else throw new Error("Unreachable");
  }
}
var $e = ["mp4", "webm", "mkv"],
  Ge = ["mp3", "m4a", "ogg"],
  ze = [...$e, ...Ge];
var He = [
  { mime_reg: /avc1.*/i, demuxer: "mp4", codec: "H264" },
  {
    mime_reg: /(hvc1|hev1|hevc|h265|h\.265).*/i,
    demuxer: "mp4",
    codec: "H265",
  },
  { mime_reg: /mp4v\.20.*/i, demuxer: "mp4", codec: "MP4V" },
  { mime_reg: /av0?1.*/i, demuxer: "webm", codec: "AV1" },
  { mime_reg: /vp0?8.*/i, demuxer: "webm", codec: "VP8" },
  { mime_reg: /vp0?9.*/i, demuxer: "webm", codec: "VP9" },
];
function ye(i) {
  for (let r of He) if (r.mime_reg.test(i)) return R(r.demuxer);
  return E;
}
function We(i, r) {
  let a = i.size.map((o) => o.height).unwrapOr(0),
    u = r.size.map((o) => o.height).unwrapOr(0),
    l = i.bitrate.unwrapOr(0),
    f = r.bitrate.unwrapOr(0);
  return a > u ? -1 : a < u ? 1 : l > f ? -1 : l < f ? 1 : 0;
}
function Ae(i) {
  return [...i.values()].sort((r, t) => We(r.quality, t.quality));
}
function _e(i) {
  return i.length > 0;
}
var Z = (function () {
  function i() {
    this.listeners = {};
  }
  var r = i.prototype;
  return (
    (r.on = function (e, n) {
      (this.listeners[e] || (this.listeners[e] = []),
        this.listeners[e].push(n));
    }),
    (r.off = function (e, n) {
      if (!this.listeners[e]) return !1;
      var a = this.listeners[e].indexOf(n);
      return (
        (this.listeners[e] = this.listeners[e].slice(0)),
        this.listeners[e].splice(a, 1),
        a > -1
      );
    }),
    (r.trigger = function (e) {
      var n = this.listeners[e];
      if (n)
        if (arguments.length === 2)
          for (var a = n.length, u = 0; u < a; ++u)
            n[u].call(this, arguments[1]);
        else
          for (
            var l = Array.prototype.slice.call(arguments, 1),
              f = n.length,
              o = 0;
            o < f;
            ++o
          )
            n[o].apply(this, l);
    }),
    (r.dispose = function () {
      this.listeners = {};
    }),
    (r.pipe = function (e) {
      this.on("data", function (n) {
        e.push(n);
      });
    }),
    i
  );
})();
function L() {
  return (
    (L = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var e in t) ({}).hasOwnProperty.call(t, e) && (i[e] = t[e]);
          }
          return i;
        }),
    L.apply(null, arguments)
  );
}
var se = he(Te()),
  je = function (r) {
    return se.default.atob
      ? se.default.atob(r)
      : Buffer.from(r, "base64").toString("binary");
  };
function oe(i) {
  for (var r = je(i), t = new Uint8Array(r.length), e = 0; e < r.length; e++)
    t[e] = r.charCodeAt(e);
  return t;
}
var me = class extends Z {
    constructor() {
      (super(), (this.buffer = ""));
    }
    push(r) {
      let t;
      for (
        this.buffer += r,
          t = this.buffer.indexOf(`
`);
        t > -1;
        t = this.buffer.indexOf(`
`)
      )
        (this.trigger("data", this.buffer.substring(0, t)),
          (this.buffer = this.buffer.substring(t + 1)));
    }
  },
  Ke = "	",
  ue = function (i) {
    let r = /([0-9.]*)?@?([0-9.]*)?/.exec(i || ""),
      t = {};
    return (
      r[1] && (t.length = parseInt(r[1], 10)),
      r[2] && (t.offset = parseInt(r[2], 10)),
      t
    );
  },
  Qe = function () {
    let t = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
    return new RegExp("(?:^|,)(" + t + ")");
  },
  O = function (i) {
    let r = {};
    if (!i) return r;
    let t = i.split(Qe()),
      e = t.length,
      n;
    for (; e--; )
      t[e] !== "" &&
        ((n = /([^=]*)=(.*)/.exec(t[e]).slice(1)),
        (n[0] = n[0].replace(/^\s+|\s+$/g, "")),
        (n[1] = n[1].replace(/^\s+|\s+$/g, "")),
        (n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1")),
        (r[n[0]] = n[1]));
    return r;
  },
  Ee = (i) => {
    let r = i.split("x"),
      t = {};
    return (
      r[0] && (t.width = parseInt(r[0], 10)),
      r[1] && (t.height = parseInt(r[1], 10)),
      t
    );
  },
  de = class extends Z {
    constructor() {
      (super(), (this.customParsers = []), (this.tagMappers = []));
    }
    push(r) {
      let t, e;
      if (((r = r.trim()), r.length === 0)) return;
      if (r[0] !== "#") {
        this.trigger("data", { type: "uri", uri: r });
        return;
      }
      this.tagMappers
        .reduce(
          (a, u) => {
            let l = u(r);
            return l === r ? a : a.concat([l]);
          },
          [r],
        )
        .forEach((a) => {
          for (let u = 0; u < this.customParsers.length; u++)
            if (this.customParsers[u].call(this, a)) return;
          if (a.indexOf("#EXT") !== 0) {
            this.trigger("data", { type: "comment", text: a.slice(1) });
            return;
          }
          if (((a = a.replace("\r", "")), (t = /^#EXTM3U/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "m3u" });
            return;
          }
          if (((t = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "inf" }),
              t[1] && (e.duration = parseFloat(t[1])),
              t[2] && (e.title = t[2]),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "targetduration" }),
              t[1] && (e.duration = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-VERSION:([0-9.]*)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "version" }),
              t[1] && (e.version = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "media-sequence" }),
              t[1] && (e.number = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (
            ((t = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(a)), t)
          ) {
            ((e = { type: "tag", tagType: "discontinuity-sequence" }),
              t[1] && (e.number = parseInt(t[1], 10)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "playlist-type" }),
              t[1] && (e.playlistType = t[1]),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-BYTERANGE:(.*)?$/.exec(a)), t)) {
            ((e = L(ue(t[1]), { type: "tag", tagType: "byterange" })),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "allow-cache" }),
              t[1] && (e.allowed = !/NO/.test(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MAP:(.*)$/.exec(a)), t)) {
            if (((e = { type: "tag", tagType: "map" }), t[1])) {
              let u = O(t[1]);
              (u.URI && (e.uri = u.URI),
                u.BYTERANGE && (e.byterange = ue(u.BYTERANGE)));
            }
            this.trigger("data", e);
            return;
          }
          if (((t = /^#EXT-X-STREAM-INF:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "stream-inf" }),
              t[1] &&
                ((e.attributes = O(t[1])),
                e.attributes.RESOLUTION &&
                  (e.attributes.RESOLUTION = Ee(e.attributes.RESOLUTION)),
                e.attributes.BANDWIDTH &&
                  (e.attributes.BANDWIDTH = parseInt(
                    e.attributes.BANDWIDTH,
                    10,
                  )),
                e.attributes["FRAME-RATE"] &&
                  (e.attributes["FRAME-RATE"] = parseFloat(
                    e.attributes["FRAME-RATE"],
                  )),
                e.attributes["PROGRAM-ID"] &&
                  (e.attributes["PROGRAM-ID"] = parseInt(
                    e.attributes["PROGRAM-ID"],
                    10,
                  ))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-MEDIA:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "media" }),
              t[1] && (e.attributes = O(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-ENDLIST/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "endlist" });
            return;
          }
          if (((t = /^#EXT-X-DISCONTINUITY/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "discontinuity" });
            return;
          }
          if (((t = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "program-date-time" }),
              t[1] &&
                ((e.dateTimeString = t[1]),
                (e.dateTimeObject = new Date(t[1]))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-KEY:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "key" }),
              t[1] &&
                ((e.attributes = O(t[1])),
                e.attributes.IV &&
                  (e.attributes.IV.substring(0, 2).toLowerCase() === "0x" &&
                    (e.attributes.IV = e.attributes.IV.substring(2)),
                  (e.attributes.IV = e.attributes.IV.match(/.{8}/g)),
                  (e.attributes.IV[0] = parseInt(e.attributes.IV[0], 16)),
                  (e.attributes.IV[1] = parseInt(e.attributes.IV[1], 16)),
                  (e.attributes.IV[2] = parseInt(e.attributes.IV[2], 16)),
                  (e.attributes.IV[3] = parseInt(e.attributes.IV[3], 16)),
                  (e.attributes.IV = new Uint32Array(e.attributes.IV)))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-START:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "start" }),
              t[1] &&
                ((e.attributes = O(t[1])),
                (e.attributes["TIME-OFFSET"] = parseFloat(
                  e.attributes["TIME-OFFSET"],
                )),
                (e.attributes.PRECISE = /YES/.test(e.attributes.PRECISE))),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "cue-out-cont" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-OUT:(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "cue-out" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "cue-in" }),
              t[1] ? (e.data = t[1]) : (e.data = ""),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-SKIP:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "skip" }),
              (e.attributes = O(t[1])),
              e.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                (e.attributes["SKIPPED-SEGMENTS"] = parseInt(
                  e.attributes["SKIPPED-SEGMENTS"],
                  10,
                )),
              e.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
                (e.attributes["RECENTLY-REMOVED-DATERANGES"] =
                  e.attributes["RECENTLY-REMOVED-DATERANGES"].split(Ke)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PART:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "part" }),
              (e.attributes = O(t[1])),
              ["DURATION"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) &&
                  (e.attributes[u] = parseFloat(e.attributes[u]));
              }),
              ["INDEPENDENT", "GAP"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) &&
                  (e.attributes[u] = /YES/.test(e.attributes[u]));
              }),
              e.attributes.hasOwnProperty("BYTERANGE") &&
                (e.attributes.byterange = ue(e.attributes.BYTERANGE)),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "server-control" }),
              (e.attributes = O(t[1])),
              ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(
                function (u) {
                  e.attributes.hasOwnProperty(u) &&
                    (e.attributes[u] = parseFloat(e.attributes[u]));
                },
              ),
              ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) &&
                  (e.attributes[u] = /YES/.test(e.attributes[u]));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PART-INF:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "part-inf" }),
              (e.attributes = O(t[1])),
              ["PART-TARGET"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) &&
                  (e.attributes[u] = parseFloat(e.attributes[u]));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "preload-hint" }),
              (e.attributes = O(t[1])),
              ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (u) {
                if (e.attributes.hasOwnProperty(u)) {
                  e.attributes[u] = parseInt(e.attributes[u], 10);
                  let l = u === "BYTERANGE-LENGTH" ? "length" : "offset";
                  ((e.attributes.byterange = e.attributes.byterange || {}),
                    (e.attributes.byterange[l] = e.attributes[u]),
                    delete e.attributes[u]);
                }
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "rendition-report" }),
              (e.attributes = O(t[1])),
              ["LAST-MSN", "LAST-PART"].forEach(function (u) {
                e.attributes.hasOwnProperty(u) &&
                  (e.attributes[u] = parseInt(e.attributes[u], 10));
              }),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-DATERANGE:(.*)$/.exec(a)), t && t[1])) {
            ((e = { type: "tag", tagType: "daterange" }),
              (e.attributes = O(t[1])),
              ["ID", "CLASS"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) &&
                  (e.attributes[l] = String(e.attributes[l]));
              }),
              ["START-DATE", "END-DATE"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) &&
                  (e.attributes[l] = new Date(e.attributes[l]));
              }),
              ["DURATION", "PLANNED-DURATION"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) &&
                  (e.attributes[l] = parseFloat(e.attributes[l]));
              }),
              ["END-ON-NEXT"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) &&
                  (e.attributes[l] = /YES/i.test(e.attributes[l]));
              }),
              ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function (l) {
                e.attributes.hasOwnProperty(l) &&
                  (e.attributes[l] = e.attributes[l].toString(16));
              }));
            let u = /^X-([A-Z]+-)+[A-Z]+$/;
            for (let l in e.attributes) {
              if (!u.test(l)) continue;
              let f = /[0-9A-Fa-f]{6}/g.test(e.attributes[l]),
                o = /^\d+(\.\d+)?$/.test(e.attributes[l]);
              e.attributes[l] = f
                ? e.attributes[l].toString(16)
                : o
                  ? parseFloat(e.attributes[l])
                  : String(e.attributes[l]);
            }
            this.trigger("data", e);
            return;
          }
          if (((t = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(a)), t)) {
            this.trigger("data", {
              type: "tag",
              tagType: "independent-segments",
            });
            return;
          }
          if (((t = /^#EXT-X-I-FRAMES-ONLY/.exec(a)), t)) {
            this.trigger("data", { type: "tag", tagType: "i-frames-only" });
            return;
          }
          if (((t = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "content-steering" }),
              (e.attributes = O(t[1])),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "i-frame-playlist" }),
              (e.attributes = O(t[1])),
              e.attributes.URI && (e.uri = e.attributes.URI),
              e.attributes.BANDWIDTH &&
                (e.attributes.BANDWIDTH = parseInt(e.attributes.BANDWIDTH, 10)),
              e.attributes.RESOLUTION &&
                (e.attributes.RESOLUTION = Ee(e.attributes.RESOLUTION)),
              e.attributes["AVERAGE-BANDWIDTH"] &&
                (e.attributes["AVERAGE-BANDWIDTH"] = parseInt(
                  e.attributes["AVERAGE-BANDWIDTH"],
                  10,
                )),
              e.attributes["FRAME-RATE"] &&
                (e.attributes["FRAME-RATE"] = parseFloat(
                  e.attributes["FRAME-RATE"],
                )),
              this.trigger("data", e));
            return;
          }
          if (((t = /^#EXT-X-DEFINE:(.*)$/.exec(a)), t)) {
            ((e = { type: "tag", tagType: "define" }),
              (e.attributes = O(t[1])),
              this.trigger("data", e));
            return;
          }
          this.trigger("data", { type: "tag", data: a.slice(4) });
        });
    }
    addParser({ expression: r, customType: t, dataParser: e, segment: n }) {
      (typeof e != "function" && (e = (a) => a),
        this.customParsers.push((a) => {
          if (r.exec(a))
            return (
              this.trigger("data", {
                type: "custom",
                data: e(a),
                customType: t,
                segment: n,
              }),
              !0
            );
        }));
    }
    addTagMapper({ expression: r, map: t }) {
      let e = (n) => (r.test(n) ? t(n) : n);
      this.tagMappers.push(e);
    }
  },
  Je = (i) => i.toLowerCase().replace(/-(\w)/g, (r) => r[1].toUpperCase()),
  X = function (i) {
    let r = {};
    return (
      Object.keys(i).forEach(function (t) {
        r[Je(t)] = i[t];
      }),
      r
    );
  },
  le = function (i) {
    let { serverControl: r, targetDuration: t, partTargetDuration: e } = i;
    if (!r) return;
    let n = "#EXT-X-SERVER-CONTROL",
      a = "holdBack",
      u = "partHoldBack",
      l = t && t * 3,
      f = e && e * 2;
    (t &&
      !r.hasOwnProperty(a) &&
      ((r[a] = l),
      this.trigger("info", {
        message: `${n} defaulting HOLD-BACK to targetDuration * 3 (${l}).`,
      })),
      l &&
        r[a] < l &&
        (this.trigger("warn", {
          message: `${n} clamping HOLD-BACK (${r[a]}) to targetDuration * 3 (${l})`,
        }),
        (r[a] = l)),
      e &&
        !r.hasOwnProperty(u) &&
        ((r[u] = e * 3),
        this.trigger("info", {
          message: `${n} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${r[u]}).`,
        })),
      e &&
        r[u] < f &&
        (this.trigger("warn", {
          message: `${n} clamping PART-HOLD-BACK (${r[u]}) to partTargetDuration * 2 (${f}).`,
        }),
        (r[u] = f)));
  },
  Y = class extends Z {
    constructor(r = {}) {
      (super(),
        (this.lineStream = new me()),
        (this.parseStream = new de()),
        this.lineStream.pipe(this.parseStream),
        (this.mainDefinitions = r.mainDefinitions || {}),
        (this.params = new URL(r.uri, "https://a.com").searchParams),
        (this.lastProgramDateTime = null));
      let t = this,
        e = [],
        n = {},
        a,
        u,
        l = !1,
        f = function () {},
        o = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        h = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        y = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        iFramePlaylists: [],
        segments: [],
      };
      let b = 0,
        x = 0,
        v = {};
      (this.on("end", () => {
        n.uri ||
          (!n.parts && !n.preloadHints) ||
          (!n.map && a && (n.map = a),
          !n.key && u && (n.key = u),
          !n.timeline && typeof y == "number" && (n.timeline = y),
          (this.manifest.preloadSegment = n));
      }),
        this.parseStream.on("data", function (s) {
          let D, T;
          if (t.manifest.definitions) {
            for (let p in t.manifest.definitions)
              if (
                (s.uri &&
                  (s.uri = s.uri.replace(`{$${p}}`, t.manifest.definitions[p])),
                s.attributes)
              )
                for (let d in s.attributes)
                  typeof s.attributes[d] == "string" &&
                    (s.attributes[d] = s.attributes[d].replace(
                      `{$${p}}`,
                      t.manifest.definitions[p],
                    ));
          }
          ({
            tag() {
              (
                ({
                  version() {
                    s.version && (this.manifest.version = s.version);
                  },
                  "allow-cache"() {
                    ((this.manifest.allowCache = s.allowed),
                      "allowed" in s ||
                        (this.trigger("info", {
                          message: "defaulting allowCache to YES",
                        }),
                        (this.manifest.allowCache = !0)));
                  },
                  byterange() {
                    let p = {};
                    ("length" in s &&
                      ((n.byterange = p),
                      (p.length = s.length),
                      "offset" in s || (s.offset = b)),
                      "offset" in s &&
                        ((n.byterange = p), (p.offset = s.offset)),
                      (b = p.offset + p.length));
                  },
                  endlist() {
                    this.manifest.endList = !0;
                  },
                  inf() {
                    ("mediaSequence" in this.manifest ||
                      ((this.manifest.mediaSequence = 0),
                      this.trigger("info", {
                        message: "defaulting media sequence to zero",
                      })),
                      "discontinuitySequence" in this.manifest ||
                        ((this.manifest.discontinuitySequence = 0),
                        this.trigger("info", {
                          message: "defaulting discontinuity sequence to zero",
                        })),
                      s.title && (n.title = s.title),
                      s.duration > 0 && (n.duration = s.duration),
                      s.duration === 0 &&
                        ((n.duration = 0.01),
                        this.trigger("info", {
                          message:
                            "updating zero segment duration to a small value",
                        })),
                      (this.manifest.segments = e));
                  },
                  key() {
                    if (!s.attributes) {
                      this.trigger("warn", {
                        message:
                          "ignoring key declaration without attribute list",
                      });
                      return;
                    }
                    if (s.attributes.METHOD === "NONE") {
                      u = null;
                      return;
                    }
                    if (!s.attributes.URI) {
                      this.trigger("warn", {
                        message: "ignoring key declaration without URI",
                      });
                      return;
                    }
                    if (
                      s.attributes.KEYFORMAT ===
                      "com.apple.streamingkeydelivery"
                    ) {
                      ((this.manifest.contentProtection =
                        this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.apple.fps.1_0"] =
                          { attributes: s.attributes }));
                      return;
                    }
                    if (s.attributes.KEYFORMAT === "com.microsoft.playready") {
                      ((this.manifest.contentProtection =
                        this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection[
                          "com.microsoft.playready"
                        ] = { uri: s.attributes.URI }));
                      return;
                    }
                    if (s.attributes.KEYFORMAT === h) {
                      if (
                        [
                          "SAMPLE-AES",
                          "SAMPLE-AES-CTR",
                          "SAMPLE-AES-CENC",
                        ].indexOf(s.attributes.METHOD) === -1
                      ) {
                        this.trigger("warn", {
                          message: "invalid key method provided for Widevine",
                        });
                        return;
                      }
                      if (
                        (s.attributes.METHOD === "SAMPLE-AES-CENC" &&
                          this.trigger("warn", {
                            message:
                              "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead",
                          }),
                        s.attributes.URI.substring(0, 23) !==
                          "data:text/plain;base64,")
                      ) {
                        this.trigger("warn", {
                          message: "invalid key URI provided for Widevine",
                        });
                        return;
                      }
                      if (
                        !(
                          s.attributes.KEYID &&
                          s.attributes.KEYID.substring(0, 2) === "0x"
                        )
                      ) {
                        this.trigger("warn", {
                          message: "invalid key ID provided for Widevine",
                        });
                        return;
                      }
                      ((this.manifest.contentProtection =
                        this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.widevine.alpha"] =
                          {
                            attributes: {
                              schemeIdUri: s.attributes.KEYFORMAT,
                              keyId: s.attributes.KEYID.substring(2),
                            },
                            pssh: oe(s.attributes.URI.split(",")[1]),
                          }));
                      return;
                    }
                    (s.attributes.METHOD ||
                      this.trigger("warn", {
                        message: "defaulting key method to AES-128",
                      }),
                      (u = {
                        method: s.attributes.METHOD || "AES-128",
                        uri: s.attributes.URI,
                      }),
                      typeof s.attributes.IV < "u" && (u.iv = s.attributes.IV));
                  },
                  "media-sequence"() {
                    if (!isFinite(s.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid media sequence: " + s.number,
                      });
                      return;
                    }
                    this.manifest.mediaSequence = s.number;
                  },
                  "discontinuity-sequence"() {
                    if (!isFinite(s.number)) {
                      this.trigger("warn", {
                        message:
                          "ignoring invalid discontinuity sequence: " +
                          s.number,
                      });
                      return;
                    }
                    ((this.manifest.discontinuitySequence = s.number),
                      (y = s.number));
                  },
                  "playlist-type"() {
                    if (!/VOD|EVENT/.test(s.playlistType)) {
                      this.trigger("warn", {
                        message:
                          "ignoring unknown playlist type: " + s.playlist,
                      });
                      return;
                    }
                    this.manifest.playlistType = s.playlistType;
                  },
                  map() {
                    ((a = {}),
                      s.uri && (a.uri = s.uri),
                      s.byterange && (a.byterange = s.byterange),
                      u && (a.key = u));
                  },
                  "stream-inf"() {
                    if (
                      ((this.manifest.playlists = e),
                      (this.manifest.mediaGroups =
                        this.manifest.mediaGroups || o),
                      !s.attributes)
                    ) {
                      this.trigger("warn", {
                        message: "ignoring empty stream-inf attributes",
                      });
                      return;
                    }
                    (n.attributes || (n.attributes = {}),
                      L(n.attributes, s.attributes));
                  },
                  media() {
                    if (
                      ((this.manifest.mediaGroups =
                        this.manifest.mediaGroups || o),
                      !(
                        s.attributes &&
                        s.attributes.TYPE &&
                        s.attributes["GROUP-ID"] &&
                        s.attributes.NAME
                      ))
                    ) {
                      this.trigger("warn", {
                        message: "ignoring incomplete or missing media group",
                      });
                      return;
                    }
                    let p = this.manifest.mediaGroups[s.attributes.TYPE];
                    ((p[s.attributes["GROUP-ID"]] =
                      p[s.attributes["GROUP-ID"]] || {}),
                      (D = p[s.attributes["GROUP-ID"]]),
                      (T = { default: /yes/i.test(s.attributes.DEFAULT) }),
                      T.default
                        ? (T.autoselect = !0)
                        : (T.autoselect = /yes/i.test(s.attributes.AUTOSELECT)),
                      s.attributes.LANGUAGE &&
                        (T.language = s.attributes.LANGUAGE),
                      s.attributes.URI && (T.uri = s.attributes.URI),
                      s.attributes["INSTREAM-ID"] &&
                        (T.instreamId = s.attributes["INSTREAM-ID"]),
                      s.attributes.CHARACTERISTICS &&
                        (T.characteristics = s.attributes.CHARACTERISTICS),
                      s.attributes.FORCED &&
                        (T.forced = /yes/i.test(s.attributes.FORCED)),
                      (D[s.attributes.NAME] = T));
                  },
                  discontinuity() {
                    ((y += 1),
                      (n.discontinuity = !0),
                      this.manifest.discontinuityStarts.push(e.length));
                  },
                  "program-date-time"() {
                    (typeof this.manifest.dateTimeString > "u" &&
                      ((this.manifest.dateTimeString = s.dateTimeString),
                      (this.manifest.dateTimeObject = s.dateTimeObject)),
                      (n.dateTimeString = s.dateTimeString),
                      (n.dateTimeObject = s.dateTimeObject));
                    let { lastProgramDateTime: p } = this;
                    ((this.lastProgramDateTime = new Date(
                      s.dateTimeString,
                    ).getTime()),
                      p === null &&
                        this.manifest.segments.reduceRight(
                          (d, m) => (
                            (m.programDateTime = d - m.duration * 1e3),
                            m.programDateTime
                          ),
                          this.lastProgramDateTime,
                        ));
                  },
                  targetduration() {
                    if (!isFinite(s.duration) || s.duration < 0) {
                      this.trigger("warn", {
                        message:
                          "ignoring invalid target duration: " + s.duration,
                      });
                      return;
                    }
                    ((this.manifest.targetDuration = s.duration),
                      le.call(this, this.manifest));
                  },
                  start() {
                    if (!s.attributes || isNaN(s.attributes["TIME-OFFSET"])) {
                      this.trigger("warn", {
                        message:
                          "ignoring start declaration without appropriate attribute list",
                      });
                      return;
                    }
                    this.manifest.start = {
                      timeOffset: s.attributes["TIME-OFFSET"],
                      precise: s.attributes.PRECISE,
                    };
                  },
                  "cue-out"() {
                    n.cueOut = s.data;
                  },
                  "cue-out-cont"() {
                    n.cueOutCont = s.data;
                  },
                  "cue-in"() {
                    n.cueIn = s.data;
                  },
                  skip() {
                    ((this.manifest.skip = X(s.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-SKIP",
                        s.attributes,
                        ["SKIPPED-SEGMENTS"],
                      ));
                  },
                  part() {
                    l = !0;
                    let p = this.manifest.segments.length,
                      d = X(s.attributes);
                    ((n.parts = n.parts || []),
                      n.parts.push(d),
                      d.byterange &&
                        (d.byterange.hasOwnProperty("offset") ||
                          (d.byterange.offset = x),
                        (x = d.byterange.offset + d.byterange.length)));
                    let m = n.parts.length - 1;
                    (this.warnOnMissingAttributes_(
                      `#EXT-X-PART #${m} for segment #${p}`,
                      s.attributes,
                      ["URI", "DURATION"],
                    ),
                      this.manifest.renditionReports &&
                        this.manifest.renditionReports.forEach((c, g) => {
                          c.hasOwnProperty("lastPart") ||
                            this.trigger("warn", {
                              message: `#EXT-X-RENDITION-REPORT #${g} lacks required attribute(s): LAST-PART`,
                            });
                        }));
                  },
                  "server-control"() {
                    let p = (this.manifest.serverControl = X(s.attributes));
                    (p.hasOwnProperty("canBlockReload") ||
                      ((p.canBlockReload = !1),
                      this.trigger("info", {
                        message:
                          "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                      })),
                      le.call(this, this.manifest),
                      p.canSkipDateranges &&
                        !p.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        }));
                  },
                  "preload-hint"() {
                    let p = this.manifest.segments.length,
                      d = X(s.attributes),
                      m = d.type && d.type === "PART";
                    ((n.preloadHints = n.preloadHints || []),
                      n.preloadHints.push(d),
                      d.byterange &&
                        (d.byterange.hasOwnProperty("offset") ||
                          ((d.byterange.offset = m ? x : 0),
                          m && (x = d.byterange.offset + d.byterange.length))));
                    let c = n.preloadHints.length - 1;
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${c} for segment #${p}`,
                        s.attributes,
                        ["TYPE", "URI"],
                      ),
                      !!d.type)
                    )
                      for (let g = 0; g < n.preloadHints.length - 1; g++) {
                        let _ = n.preloadHints[g];
                        _.type &&
                          _.type === d.type &&
                          this.trigger("warn", {
                            message: `#EXT-X-PRELOAD-HINT #${c} for segment #${p} has the same TYPE ${d.type} as preload hint #${g}`,
                          });
                      }
                  },
                  "rendition-report"() {
                    let p = X(s.attributes);
                    ((this.manifest.renditionReports =
                      this.manifest.renditionReports || []),
                      this.manifest.renditionReports.push(p));
                    let d = this.manifest.renditionReports.length - 1,
                      m = ["LAST-MSN", "URI"];
                    (l && m.push("LAST-PART"),
                      this.warnOnMissingAttributes_(
                        `#EXT-X-RENDITION-REPORT #${d}`,
                        s.attributes,
                        m,
                      ));
                  },
                  "part-inf"() {
                    ((this.manifest.partInf = X(s.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-PART-INF",
                        s.attributes,
                        ["PART-TARGET"],
                      ),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration =
                          this.manifest.partInf.partTarget),
                      le.call(this, this.manifest));
                  },
                  daterange() {
                    this.manifest.dateRanges.push(X(s.attributes));
                    let p = this.manifest.dateRanges.length - 1;
                    this.warnOnMissingAttributes_(
                      `#EXT-X-DATERANGE #${p}`,
                      s.attributes,
                      ["ID", "START-DATE"],
                    );
                    let d = this.manifest.dateRanges[p];
                    (d.endDate &&
                      d.startDate &&
                      new Date(d.endDate) < new Date(d.startDate) &&
                      this.trigger("warn", {
                        message:
                          "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE",
                      }),
                      d.duration &&
                        d.duration < 0 &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE DURATION must not be negative",
                        }),
                      d.plannedDuration &&
                        d.plannedDuration < 0 &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE PLANNED-DURATION must not be negative",
                        }));
                    let m = !!d.endOnNext;
                    if (
                      (m &&
                        !d.class &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute",
                        }),
                      m &&
                        (d.duration || d.endDate) &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes",
                        }),
                      d.duration && d.endDate)
                    ) {
                      let g = d.startDate.getTime() + d.duration * 1e3;
                      this.manifest.dateRanges[p].endDate = new Date(g);
                    }
                    if (!v[d.id]) v[d.id] = d;
                    else {
                      for (let g in v[d.id])
                        if (
                          d[g] &&
                          JSON.stringify(v[d.id][g]) !== JSON.stringify(d[g])
                        ) {
                          this.trigger("warn", {
                            message:
                              "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values",
                          });
                          break;
                        }
                      let c = this.manifest.dateRanges.findIndex(
                        (g) => g.id === d.id,
                      );
                      ((this.manifest.dateRanges[c] = L(
                        this.manifest.dateRanges[c],
                        d,
                      )),
                        (v[d.id] = L(v[d.id], d)),
                        this.manifest.dateRanges.pop());
                    }
                  },
                  "independent-segments"() {
                    this.manifest.independentSegments = !0;
                  },
                  "i-frames-only"() {
                    ((this.manifest.iFramesOnly = !0),
                      this.requiredCompatibilityversion(
                        this.manifest.version,
                        4,
                      ));
                  },
                  "content-steering"() {
                    ((this.manifest.contentSteering = X(s.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-CONTENT-STEERING",
                        s.attributes,
                        ["SERVER-URI"],
                      ));
                  },
                  define() {
                    this.manifest.definitions = this.manifest.definitions || {};
                    let p = (d, m) => {
                      if (d in this.manifest.definitions) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: Duplicate name ${d}`,
                        });
                        return;
                      }
                      this.manifest.definitions[d] = m;
                    };
                    if ("QUERYPARAM" in s.attributes) {
                      if ("NAME" in s.attributes || "IMPORT" in s.attributes) {
                        this.trigger("error", {
                          message: "EXT-X-DEFINE: Invalid attributes",
                        });
                        return;
                      }
                      let d = this.params.get(s.attributes.QUERYPARAM);
                      if (!d) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No query param ${s.attributes.QUERYPARAM}`,
                        });
                        return;
                      }
                      p(s.attributes.QUERYPARAM, decodeURIComponent(d));
                      return;
                    }
                    if ("NAME" in s.attributes) {
                      if ("IMPORT" in s.attributes) {
                        this.trigger("error", {
                          message: "EXT-X-DEFINE: Invalid attributes",
                        });
                        return;
                      }
                      if (
                        !("VALUE" in s.attributes) ||
                        typeof s.attributes.VALUE != "string"
                      ) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value for ${s.attributes.NAME}`,
                        });
                        return;
                      }
                      p(s.attributes.NAME, s.attributes.VALUE);
                      return;
                    }
                    if ("IMPORT" in s.attributes) {
                      if (!this.mainDefinitions[s.attributes.IMPORT]) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value ${s.attributes.IMPORT} to import, or IMPORT used on main playlist`,
                        });
                        return;
                      }
                      p(
                        s.attributes.IMPORT,
                        this.mainDefinitions[s.attributes.IMPORT],
                      );
                      return;
                    }
                    this.trigger("error", {
                      message: "EXT-X-DEFINE: No attribute",
                    });
                  },
                  "i-frame-playlist"() {
                    (this.manifest.iFramePlaylists.push({
                      attributes: s.attributes,
                      uri: s.uri,
                      timeline: y,
                    }),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-I-FRAME-STREAM-INF",
                        s.attributes,
                        ["BANDWIDTH", "URI"],
                      ));
                  },
                })[s.tagType] || f
              ).call(t);
            },
            uri() {
              ((n.uri = s.uri),
                e.push(n),
                this.manifest.targetDuration &&
                  !("duration" in n) &&
                  (this.trigger("warn", {
                    message:
                      "defaulting segment duration to the target duration",
                  }),
                  (n.duration = this.manifest.targetDuration)),
                u && (n.key = u),
                (n.timeline = y),
                a && (n.map = a),
                (x = 0),
                this.lastProgramDateTime !== null &&
                  ((n.programDateTime = this.lastProgramDateTime),
                  (this.lastProgramDateTime += n.duration * 1e3)),
                (n = {}));
            },
            comment() {},
            custom() {
              s.segment
                ? ((n.custom = n.custom || {}),
                  (n.custom[s.customType] = s.data))
                : ((this.manifest.custom = this.manifest.custom || {}),
                  (this.manifest.custom[s.customType] = s.data));
            },
          })[s.type].call(t);
        }));
    }
    requiredCompatibilityversion(r, t) {
      (r < t || !r) &&
        this.trigger("warn", {
          message: `manifest must be at least version ${t}`,
        });
    }
    warnOnMissingAttributes_(r, t, e) {
      let n = [];
      (e.forEach(function (a) {
        t.hasOwnProperty(a) || n.push(a);
      }),
        n.length &&
          this.trigger("warn", {
            message: `${r} lacks required attribute(s): ${n.join(", ")}`,
          }));
    }
    push(r) {
      this.lineStream.push(r);
    }
    end() {
      (this.lineStream.push(`
`),
        this.manifest.dateRanges.length &&
          this.lastProgramDateTime === null &&
          this.trigger("warn", {
            message:
              "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag",
          }),
        (this.lastProgramDateTime = null),
        this.trigger("end"));
    }
    addParser(r) {
      this.parseStream.addParser(r);
    }
    addTagMapper(r) {
      this.parseStream.addTagMapper(r);
    }
  };
var Ze = new Set([
  "com.microsoft.playready",
  "com.apple.streamingkeydelivery",
  "com.widevine.alpha",
]);
function ve(i) {
  return Object.keys(i).some((r) => Ze.has(r));
}
function et(i) {
  let r;
  try {
    let n = new Y();
    (n.push(i), n.end(), (r = n.manifest));
  } catch {}
  if (!r) return w("parse error");
  let t = r.segments;
  return !Array.isArray(t) || t.length == 0
    ? w("not a valid m3u8")
    : t.every((n) => {
          let u = n.uri.split(/[?#]/)[0];
          return u
            ? u
                .substring(u.lastIndexOf(".") + 1)
                .toLowerCase()
                .match(/vtt|srt|webvtt|ttml/)
            : !1;
        })
      ? w("subtitle playlist")
      : P(r);
}
function tt(i) {
  let r = new Date(new Date().getTime() - 6e5);
  return !i.dateTimeObject && !i.programDateTime
    ? !1
    : typeof i.dateTimeObject == "object"
      ? i.dateTimeObject > r
      : typeof i.programDateTime == "number"
        ? i.programDateTime > r.getTime()
        : !1;
}
function rt(i) {
  if (
    !Array.isArray(i.segments) ||
    i.segments.some((e) => typeof e.duration != "number")
  )
    return "unknown";
  let r = i.segments[i.segments.length - 1];
  return r && tt(r)
    ? "live"
    : i.segments.reduce(
        (e, n) => (typeof n.duration == "number" && (e += n.duration), e),
        0,
      );
}
async function xe(i, r, t, e = !1, n = !1) {
  let a;
  try {
    let o = new Y();
    (o.push(i), o.end(), (a = o.manifest));
  } catch {}
  if (!a) return w("parse error");
  if (!a.playlists) return w("Not a master M3U8");
  let u = a.playlists,
    l = a.mediaGroups.AUDIO ?? {},
    f = [];
  for (let o of u) {
    if (typeof o.uri != "string") continue;
    let h = "mp4";
    if (o.attributes.CODECS) {
      let T = ye(o.attributes.CODECS);
      if (T.isNone()) continue;
      h = T.value;
    }
    if (
      (!("FRAME-RATE" in o.attributes) && "RESOLUTION" in o.attributes,
      o.attributes["VIDEO-RANGE"] && o.attributes["VIDEO-RANGE"] == "PQ")
    )
      continue;
    let y = V(o.uri, r.href);
    if (y.isNone()) continue;
    let b = E;
    if (o.attributes.AUDIO) {
      let T = l[o.attributes.AUDIO];
      if (T) {
        for (let p of Object.values(T))
          if (
            (p.uri && (b = V(p.uri, r.href)),
            (t.isSome() && p.language && t.value.includes(p.language)) ||
              p.default)
          )
            break;
      }
    }
    let x = E,
      v = E;
    (o.attributes.RESOLUTION &&
      (x = R({
        height: o.attributes.RESOLUTION.height,
        width: o.attributes.RESOLUTION.width,
      })),
      o.attributes.BANDWIDTH && (v = R(o.attributes.BANDWIDTH)));
    let s = { size: x, bitrate: v },
      D = y.value;
    if (
      (e
        ? (D.search = ae(D.searchParams, r.searchParams))
        : n && (D.search = ""),
      b.isSome())
    ) {
      let T = b.value;
      (e
        ? (T.search = ae(D.searchParams, r.searchParams))
        : n && (T.search = ""),
        f.push({ demuxer: h, quality: s, av: { video: D, audio: T } }));
    } else f.push({ demuxer: h, quality: s, av: { video: D, audio: !1 } });
  }
  return ((f = Ae(f)), _e(f) ? P(f) : w("Empty playlist"));
}
async function Se(i) {
  let r = i[0].av.video || i[0].av.audio;
  try {
    let e = await (await fetch(r, { signal: AbortSignal.timeout(5e3) })).text(),
      n = et(e);
    if (n.isOk()) {
      let a = rt(n.value),
        u = it(n.value);
      return { duration: a, has_drm: u };
    }
  } catch {
    console.warn(
      "request timeout while calculating duration & checking for DRM",
    );
  }
  return { duration: "unknown", has_drm: !1 };
}
function it(i) {
  return i.contentProtection ? ve(i.contentProtection) : !1;
}
function ee(i, r = 0) {
  let t = 3735928559 ^ r,
    e = 1103547991 ^ r;
  for (let n = 0, a; n < i.length; n++)
    ((a = i.charCodeAt(n)),
      (t = Math.imul(t ^ a, 2654435761)),
      (e = Math.imul(e ^ a, 1597334677)));
  return (
    (t = Math.imul(t ^ (t >>> 16), 2246822507)),
    (t ^= Math.imul(e ^ (e >>> 13), 3266489909)),
    (e = Math.imul(e ^ (e >>> 16), 2246822507)),
    (e ^= Math.imul(t ^ (t >>> 13), 3266489909)),
    4294967296 * (2097151 & e) + (t >>> 0)
  );
}
var nt = /(?<![a-z0-9])(\d{5,})/i;
function te(i) {
  let r = i.match(nt);
  if (r && r.length > 0) return r[0];
}
var mr = new BroadcastChannel("worker_service");
var G = {
  FromInjectedToService: 0,
  FromContentToService: 1,
  FromServiceToWorker: 2,
  FromWorkerToService: 3,
  FromUntrustedInjectedToTrusted: 4,
  FromTrustedInjectedToUntrusted: 5,
  FromServiceToContent: 6,
  FromServiceToInjected: 7,
  FromServiceToService: 8,
};
var fe = new BroadcastChannel(`injected-${ee(window.location.href)}`);
function we(i) {
  let r = G.FromTrustedInjectedToUntrusted;
  fe.postMessage({ msg: i, channel: r });
}
function Ie(i) {
  let r = (t) => {
    let e = t.data.msg;
    t.data.channel == G.FromUntrustedInjectedToTrusted && i(e);
  };
  return (
    fe.addEventListener("message", r),
    () => {
      fe.removeEventListener("message", r);
    }
  );
}
var De = he(Oe(), 1);
async function st(i, r) {
  await De.default.runtime.sendMessage({ msg: i, channel: r });
}
function Me(i) {
  let r = G.FromInjectedToService;
  st(i, r);
}
(async () => {
  function i(t) {
    let e = document.createElement("iframe");
    ((e.id = "cb"),
      (e.width = "1080"),
      (e.src = `https://player.vimeo.com/video/${t}`),
      e.setAttribute("hidden", "true"),
      document.body.appendChild(e));
  }
  if (!window.location.href.startsWith("https://player.vimeo.com/video")) {
    let t = te(window.location.href);
    if ((t && i(t), window.location.href.includes("channels"))) {
      let e = function () {
          return [...document.querySelectorAll("div[data-fallback-url]")].map(
            (l) => l.getAttribute("data-fallback-url"),
          );
        },
        n = function (l) {
          for (let f of l) ((t = te(f)), t && i(t));
        };
      n(e());
      let a = new MutationObserver(() => {
          n(e());
        }),
        u = document.querySelector("#channel_clip_container");
      u &&
        a.observe(u, {
          attributes: !0,
          childList: !0,
          attributeFilter: ["data-fallback-url"],
        });
    }
    return;
  }
  let r = te(window.location.href);
  if (r) {
    let t = await new Promise((h) => {
        let y = Ie((b) => {
          b.name == "vimeo_on_config" && (h(b.data.config), y());
        });
        we({ name: "vimeo_request_config", data: null });
      }),
      e = E,
      n = t.video?.thumbs?.base;
    (n || (n = t.video?.thumbnail_url), n && (e = V(n)));
    let a = E,
      u = t.video?.title;
    u && (a = R(u));
    let l = E,
      f = t.request?.files?.hls?.cdns,
      o = t.request?.files?.hls?.default_cdn;
    if ((f && o in f && (l = V(f[o].url)), l.isSome())) {
      let h = l.value,
        y = await fetch(h);
      if (y.ok) {
        let b = await y.text(),
          x = await xe(b, h, E);
        if (x.isOk()) {
          let v = x.value,
            { duration: s } = await Se(v),
            D = {
              master_url: h,
              is_youtube: !1,
              prefered_entry: E,
              initiator: V(window.location.href),
              hash: `media_hash_${ee(r)}`,
              sent_headers: new Headers(),
              thumbnail_url: e,
              filename: E,
              title: a,
              type: "m3u8_playlist",
              playlist: v,
              duration: s,
              discovery_timestamp_ms: Date.now(),
              has_drm: !1,
              cache: "default",
            };
          Me({ name: "on_media", data: { media: U(D) } });
        }
      }
    }
  }
})();
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)
*/
