var Su = Object.create;
var jn = Object.defineProperty;
var Iu = Object.getOwnPropertyDescriptor;
var Au = Object.getOwnPropertyNames;
var Du = Object.getPrototypeOf,
  ju = Object.prototype.hasOwnProperty;
var Pu = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports),
  fe = (e, n) => {
    for (var r in n) jn(e, r, { get: n[r], enumerable: !0 });
  },
  Ou = (e, n, r, i) => {
    if ((n && typeof n == "object") || typeof n == "function")
      for (let t of Au(n))
        !ju.call(e, t) &&
          t !== r &&
          jn(e, t, {
            get: () => n[t],
            enumerable: !(i = Iu(n, t)) || i.enumerable,
          });
    return e;
  };
var Nu = (e, n, r) => (
  (r = e != null ? Su(Du(e)) : {}),
  Ou(
    n || !e || !e.__esModule
      ? jn(r, "default", { value: e, enumerable: !0 })
      : r,
    e,
  )
);
var za = Pu((Nn, $a) => {
  (function (e, n) {
    if (typeof define == "function" && define.amd)
      define("webextension-polyfill", ["module"], n);
    else if (typeof Nn < "u") n($a);
    else {
      var r = { exports: {} };
      (n(r), (e.browser = r.exports));
    }
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Nn,
    function (e) {
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
        e.exports = globalThis.browser;
      else {
        let n = "The message port closed before a response was received.",
          r = (i) => {
            let t = {
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
            if (Object.keys(t).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill",
              );
            class o extends WeakMap {
              constructor(x, A = void 0) {
                (super(A), (this.createItem = x));
              }
              get(x) {
                return (
                  this.has(x) || this.set(x, this.createItem(x)),
                  super.get(x)
                );
              }
            }
            let a = (g) =>
                g && typeof g == "object" && typeof g.then == "function",
              s =
                (g, x) =>
                (...A) => {
                  i.runtime.lastError
                    ? g.reject(new Error(i.runtime.lastError.message))
                    : x.singleCallbackArg ||
                        (A.length <= 1 && x.singleCallbackArg !== !1)
                      ? g.resolve(A[0])
                      : g.resolve(A);
                },
              l = (g) => (g == 1 ? "argument" : "arguments"),
              u = (g, x) =>
                function (P, ...Z) {
                  if (Z.length < x.minArgs)
                    throw new Error(
                      `Expected at least ${x.minArgs} ${l(x.minArgs)} for ${g}(), got ${Z.length}`,
                    );
                  if (Z.length > x.maxArgs)
                    throw new Error(
                      `Expected at most ${x.maxArgs} ${l(x.maxArgs)} for ${g}(), got ${Z.length}`,
                    );
                  return new Promise((M, B) => {
                    if (x.fallbackToNoCallback)
                      try {
                        P[g](...Z, s({ resolve: M, reject: B }, x));
                      } catch (j) {
                        (console.warn(
                          `${g} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          j,
                        ),
                          P[g](...Z),
                          (x.fallbackToNoCallback = !1),
                          (x.noCallback = !0),
                          M());
                      }
                    else
                      x.noCallback
                        ? (P[g](...Z), M())
                        : P[g](...Z, s({ resolve: M, reject: B }, x));
                  });
                },
              m = (g, x, A) =>
                new Proxy(x, {
                  apply(P, Z, M) {
                    return A.call(Z, g, ...M);
                  },
                }),
              p = Function.call.bind(Object.prototype.hasOwnProperty),
              f = (g, x = {}, A = {}) => {
                let P = Object.create(null),
                  Z = {
                    has(B, j) {
                      return j in g || j in P;
                    },
                    get(B, j, W) {
                      if (j in P) return P[j];
                      if (!(j in g)) return;
                      let R = g[j];
                      if (typeof R == "function")
                        if (typeof x[j] == "function") R = m(g, g[j], x[j]);
                        else if (p(A, j)) {
                          let $e = u(j, A[j]);
                          R = m(g, g[j], $e);
                        } else R = R.bind(g);
                      else if (
                        typeof R == "object" &&
                        R !== null &&
                        (p(x, j) || p(A, j))
                      )
                        R = f(R, x[j], A[j]);
                      else if (p(A, "*")) R = f(R, x[j], A["*"]);
                      else
                        return (
                          Object.defineProperty(P, j, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return g[j];
                            },
                            set($e) {
                              g[j] = $e;
                            },
                          }),
                          R
                        );
                      return ((P[j] = R), R);
                    },
                    set(B, j, W, R) {
                      return (j in P ? (P[j] = W) : (g[j] = W), !0);
                    },
                    defineProperty(B, j, W) {
                      return Reflect.defineProperty(P, j, W);
                    },
                    deleteProperty(B, j) {
                      return Reflect.deleteProperty(P, j);
                    },
                  },
                  M = Object.create(g);
                return new Proxy(M, Z);
              },
              d = (g) => ({
                addListener(x, A, ...P) {
                  x.addListener(g.get(A), ...P);
                },
                hasListener(x, A) {
                  return x.hasListener(g.get(A));
                },
                removeListener(x, A) {
                  x.removeListener(g.get(A));
                },
              }),
              v = new o((g) =>
                typeof g != "function"
                  ? g
                  : function (A) {
                      let P = f(
                        A,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } },
                      );
                      g(P);
                    },
              ),
              k = new o((g) =>
                typeof g != "function"
                  ? g
                  : function (A, P, Z) {
                      let M = !1,
                        B,
                        j = new Promise((Ue) => {
                          B = function (Y) {
                            ((M = !0), Ue(Y));
                          };
                        }),
                        W;
                      try {
                        W = g(A, P, B);
                      } catch (Ue) {
                        W = Promise.reject(Ue);
                      }
                      let R = W !== !0 && a(W);
                      if (W !== !0 && !R && !M) return !1;
                      let $e = (Ue) => {
                        Ue.then(
                          (Y) => {
                            Z(Y);
                          },
                          (Y) => {
                            let Dn;
                            (Y &&
                            (Y instanceof Error || typeof Y.message == "string")
                              ? (Dn = Y.message)
                              : (Dn = "An unexpected error occurred"),
                              Z({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: Dn,
                              }));
                          },
                        ).catch((Y) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            Y,
                          );
                        });
                      };
                      return ($e(R ? W : j), !0);
                    },
              ),
              w = ({ reject: g, resolve: x }, A) => {
                i.runtime.lastError
                  ? i.runtime.lastError.message === n
                    ? x()
                    : g(new Error(i.runtime.lastError.message))
                  : A && A.__mozWebExtensionPolyfillReject__
                    ? g(new Error(A.message))
                    : x(A);
              },
              $ = (g, x, A, ...P) => {
                if (P.length < x.minArgs)
                  throw new Error(
                    `Expected at least ${x.minArgs} ${l(x.minArgs)} for ${g}(), got ${P.length}`,
                  );
                if (P.length > x.maxArgs)
                  throw new Error(
                    `Expected at most ${x.maxArgs} ${l(x.maxArgs)} for ${g}(), got ${P.length}`,
                  );
                return new Promise((Z, M) => {
                  let B = w.bind(null, { resolve: Z, reject: M });
                  (P.push(B), A.sendMessage(...P));
                });
              },
              S = {
                devtools: { network: { onRequestFinished: d(v) } },
                runtime: {
                  onMessage: d(k),
                  onMessageExternal: d(k),
                  sendMessage: $.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: $.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              I = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (t.privacy = {
                network: { "*": I },
                services: { "*": I },
                websites: { "*": I },
              }),
              f(i, S, t)
            );
          };
        e.exports = r(chrome);
      }
    },
  );
});
function ge(e) {
  e.removeAttribute("hidden");
}
function te(e) {
  e.setAttribute("hidden", "true");
}
function K(e, n) {
  n ? ge(e) : n === !1 ? te(e) : e.hasAttribute("hidden") ? ge(e) : te(e);
}
function ce(e) {
  var n = String(e);
  if (n === "[object Object]")
    try {
      n = JSON.stringify(e);
    } catch {}
  return n;
}
var Tu = (function () {
    function e() {}
    return (
      (e.prototype.isSome = function () {
        return !1;
      }),
      (e.prototype.isNone = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.unwrapOr = function (n) {
        return n;
      }),
      (e.prototype.expect = function (n) {
        throw new Error("".concat(n));
      }),
      (e.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (e.prototype.map = function (n) {
        return this;
      }),
      (e.prototype.mapOr = function (n, r) {
        return n;
      }),
      (e.prototype.mapOrElse = function (n, r) {
        return n();
      }),
      (e.prototype.or = function (n) {
        return n;
      }),
      (e.prototype.orElse = function (n) {
        return n();
      }),
      (e.prototype.andThen = function (n) {
        return this;
      }),
      (e.prototype.toResult = function (n) {
        return J(n);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ze(ne);
      }),
      e
    );
  })(),
  ne = new Tu();
Object.freeze(ne);
var Uu = (function () {
    function e(n) {
      if (!(this instanceof e)) return new e(n);
      this.value = n;
    }
    return (
      (e.prototype.isSome = function () {
        return !0;
      }),
      (e.prototype.isNone = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var n = Object(this.value);
        return Symbol.iterator in n
          ? n[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.unwrapOr = function (n) {
        return this.value;
      }),
      (e.prototype.expect = function (n) {
        return this.value;
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.map = function (n) {
        return de(n(this.value));
      }),
      (e.prototype.mapOr = function (n, r) {
        return r(this.value);
      }),
      (e.prototype.mapOrElse = function (n, r) {
        return r(this.value);
      }),
      (e.prototype.or = function (n) {
        return this;
      }),
      (e.prototype.orElse = function (n) {
        return this;
      }),
      (e.prototype.andThen = function (n) {
        return n(this.value);
      }),
      (e.prototype.toResult = function (n) {
        return re(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ze(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(ce(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  de = Uu,
  wa;
(function (e) {
  function n() {
    for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
    for (var a = [], s = 0, l = t; s < l.length; s++) {
      var u = l[s];
      if (u.isSome()) a.push(u.value);
      else return u;
    }
    return de(a);
  }
  e.all = n;
  function r() {
    for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
    for (var a = 0, s = t; a < s.length; a++) {
      var l = s[a];
      if (l.isSome()) return l;
    }
    return ne;
  }
  e.any = r;
  function i(t) {
    return t instanceof de || t === ne;
  }
  e.isOption = i;
})(wa || (wa = {}));
var ze = function (e, n, r) {
    if (r || arguments.length === 2)
      for (var i = 0, t = n.length, o; i < t; i++)
        (o || !(i in n)) &&
          (o || (o = Array.prototype.slice.call(n, 0, i)), (o[i] = n[i]));
    return e.concat(o || Array.prototype.slice.call(n));
  },
  Zu = (function () {
    function e(n) {
      if (!(this instanceof e)) return new e(n);
      this.error = n;
      var r = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (r && r.length > 0 && r[0].includes("ErrImpl") && r.shift(),
        (this._stack = r.join(`
`)));
    }
    return (
      (e.prototype.isOk = function () {
        return !1;
      }),
      (e.prototype.isErr = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.else = function (n) {
        return n;
      }),
      (e.prototype.unwrapOr = function (n) {
        return n;
      }),
      (e.prototype.expect = function (n) {
        throw new Error(
          ""
            .concat(n, " - Error: ")
            .concat(
              ce(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.expectErr = function (n) {
        return this.error;
      }),
      (e.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              ce(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.unwrapErr = function () {
        return this.error;
      }),
      (e.prototype.map = function (n) {
        return this;
      }),
      (e.prototype.andThen = function (n) {
        return this;
      }),
      (e.prototype.mapErr = function (n) {
        return new J(n(this.error));
      }),
      (e.prototype.mapOr = function (n, r) {
        return n;
      }),
      (e.prototype.mapOrElse = function (n, r) {
        return n(this.error);
      }),
      (e.prototype.or = function (n) {
        return n;
      }),
      (e.prototype.orElse = function (n) {
        return n(this.error);
      }),
      (e.prototype.toOption = function () {
        return ne;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(ce(this.error), ")");
      }),
      Object.defineProperty(e.prototype, "stack", {
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
      (e.prototype.toAsyncResult = function () {
        return new Ce(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var J = Zu,
  Cu = (function () {
    function e(n) {
      if (!(this instanceof e)) return new e(n);
      this.value = n;
    }
    return (
      (e.prototype.isOk = function () {
        return !0;
      }),
      (e.prototype.isErr = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var n = Object(this.value);
        return Symbol.iterator in n
          ? n[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.else = function (n) {
        return this.value;
      }),
      (e.prototype.unwrapOr = function (n) {
        return this.value;
      }),
      (e.prototype.expect = function (n) {
        return this.value;
      }),
      (e.prototype.expectErr = function (n) {
        throw new Error(n);
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(ce(this.value)), {
          cause: this.value,
        });
      }),
      (e.prototype.map = function (n) {
        return new re(n(this.value));
      }),
      (e.prototype.andThen = function (n) {
        return n(this.value);
      }),
      (e.prototype.mapErr = function (n) {
        return this;
      }),
      (e.prototype.mapOr = function (n, r) {
        return r(this.value);
      }),
      (e.prototype.mapOrElse = function (n, r) {
        return r(this.value);
      }),
      (e.prototype.or = function (n) {
        return this;
      }),
      (e.prototype.orElse = function (n) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return de(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(ce(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new Ce(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var re = Cu,
  ka;
(function (e) {
  function n(s) {
    for (var l = [], u = 1; u < arguments.length; u++) l[u - 1] = arguments[u];
    for (
      var m = s === void 0 ? [] : Array.isArray(s) ? s : ze([s], l, !0),
        p = [],
        f = 0,
        d = m;
      f < d.length;
      f++
    ) {
      var v = d[f];
      if (v.isOk()) p.push(v.value);
      else return v;
    }
    return new re(p);
  }
  e.all = n;
  function r(s) {
    for (var l = [], u = 1; u < arguments.length; u++) l[u - 1] = arguments[u];
    for (
      var m = s === void 0 ? [] : Array.isArray(s) ? s : ze([s], l, !0),
        p = [],
        f = 0,
        d = m;
      f < d.length;
      f++
    ) {
      var v = d[f];
      if (v.isOk()) return v;
      p.push(v.error);
    }
    return new J(p);
  }
  e.any = r;
  function i(s) {
    try {
      return new re(s());
    } catch (l) {
      return new J(l);
    }
  }
  e.wrap = i;
  function t(s) {
    try {
      return s()
        .then(function (l) {
          return new re(l);
        })
        .catch(function (l) {
          return new J(l);
        });
    } catch (l) {
      return Promise.resolve(new J(l));
    }
  }
  e.wrapAsync = t;
  function o(s) {
    return s.reduce(
      function (l, u) {
        var m = l[0],
          p = l[1];
        return u.isOk()
          ? [ze(ze([], m, !0), [u.value], !1), p]
          : [m, ze(ze([], p, !0), [u.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = o;
  function a(s) {
    return s instanceof J || s instanceof re;
  }
  e.isResult = a;
})(ka || (ka = {}));
var xt = function (e, n, r, i) {
    function t(o) {
      return o instanceof r
        ? o
        : new r(function (a) {
            a(o);
          });
    }
    return new (r || (r = Promise))(function (o, a) {
      function s(m) {
        try {
          u(i.next(m));
        } catch (p) {
          a(p);
        }
      }
      function l(m) {
        try {
          u(i.throw(m));
        } catch (p) {
          a(p);
        }
      }
      function u(m) {
        m.done ? o(m.value) : t(m.value).then(s, l);
      }
      u((i = i.apply(e, n || [])).next());
    });
  },
  $t = function (e, n) {
    var r = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      i,
      t,
      o,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(u) {
      return function (m) {
        return l([u, m]);
      };
    }
    function l(u) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), u[0] && (r = 0)), r; )
        try {
          if (
            ((i = 1),
            t &&
              (o =
                u[0] & 2
                  ? t.return
                  : u[0]
                    ? t.throw || ((o = t.return) && o.call(t), 0)
                    : t.next) &&
              !(o = o.call(t, u[1])).done)
          )
            return o;
          switch (((t = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
            case 0:
            case 1:
              o = u;
              break;
            case 4:
              return (r.label++, { value: u[1], done: !1 });
            case 5:
              (r.label++, (t = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((o = r.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (u[0] === 6 || u[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                r.label = u[1];
                break;
              }
              if (u[0] === 6 && r.label < o[1]) {
                ((r.label = o[1]), (o = u));
                break;
              }
              if (o && r.label < o[2]) {
                ((r.label = o[2]), r.ops.push(u));
                break;
              }
              (o[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          u = n.call(e, r);
        } catch (m) {
          ((u = [6, m]), (t = 0));
        } finally {
          i = o = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Ce = (function () {
    function e(n) {
      this.promise = Promise.resolve(n);
    }
    return (
      (e.prototype.andThen = function (n) {
        var r = this;
        return this.thenInternal(function (i) {
          return xt(r, void 0, void 0, function () {
            var t;
            return $t(this, function (o) {
              return i.isErr()
                ? [2, i]
                : ((t = n(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (n) {
        var r = this;
        return this.thenInternal(function (i) {
          return xt(r, void 0, void 0, function () {
            var t;
            return $t(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isErr() ? [2, i] : ((t = re), [4, n(i.value)]);
                case 1:
                  return [2, t.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (n) {
        var r = this;
        return this.thenInternal(function (i) {
          return xt(r, void 0, void 0, function () {
            var t;
            return $t(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isOk() ? [2, i] : ((t = J), [4, n(i.error)]);
                case 1:
                  return [2, t.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (n) {
        return this.orElse(function () {
          return n;
        });
      }),
      (e.prototype.orElse = function (n) {
        var r = this;
        return this.thenInternal(function (i) {
          return xt(r, void 0, void 0, function () {
            var t;
            return $t(this, function (o) {
              return i.isOk()
                ? [2, i]
                : ((t = n(i.error)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new Ze(
          this.promise.then(function (n) {
            return n.toOption();
          }),
        );
      }),
      (e.prototype.thenInternal = function (n) {
        return new e(this.promise.then(n));
      }),
      e
    );
  })();
var Pn = function (e, n, r, i) {
    function t(o) {
      return o instanceof r
        ? o
        : new r(function (a) {
            a(o);
          });
    }
    return new (r || (r = Promise))(function (o, a) {
      function s(m) {
        try {
          u(i.next(m));
        } catch (p) {
          a(p);
        }
      }
      function l(m) {
        try {
          u(i.throw(m));
        } catch (p) {
          a(p);
        }
      }
      function u(m) {
        m.done ? o(m.value) : t(m.value).then(s, l);
      }
      u((i = i.apply(e, n || [])).next());
    });
  },
  On = function (e, n) {
    var r = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      i,
      t,
      o,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(u) {
      return function (m) {
        return l([u, m]);
      };
    }
    function l(u) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), u[0] && (r = 0)), r; )
        try {
          if (
            ((i = 1),
            t &&
              (o =
                u[0] & 2
                  ? t.return
                  : u[0]
                    ? t.throw || ((o = t.return) && o.call(t), 0)
                    : t.next) &&
              !(o = o.call(t, u[1])).done)
          )
            return o;
          switch (((t = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
            case 0:
            case 1:
              o = u;
              break;
            case 4:
              return (r.label++, { value: u[1], done: !1 });
            case 5:
              (r.label++, (t = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((o = r.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (u[0] === 6 || u[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                r.label = u[1];
                break;
              }
              if (u[0] === 6 && r.label < o[1]) {
                ((r.label = o[1]), (o = u));
                break;
              }
              if (o && r.label < o[2]) {
                ((r.label = o[2]), r.ops.push(u));
                break;
              }
              (o[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          u = n.call(e, r);
        } catch (m) {
          ((u = [6, m]), (t = 0));
        } finally {
          i = o = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Ze = (function () {
    function e(n) {
      this.promise = Promise.resolve(n);
    }
    return (
      (e.prototype.andThen = function (n) {
        var r = this;
        return this.thenInternal(function (i) {
          return Pn(r, void 0, void 0, function () {
            var t;
            return On(this, function (o) {
              return i.isNone()
                ? [2, i]
                : ((t = n(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (n) {
        var r = this;
        return this.thenInternal(function (i) {
          return Pn(r, void 0, void 0, function () {
            var t;
            return On(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isNone() ? [2, i] : ((t = de), [4, n(i.value)]);
                case 1:
                  return [2, t.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (n) {
        return this.orElse(function () {
          return n;
        });
      }),
      (e.prototype.orElse = function (n) {
        var r = this;
        return this.thenInternal(function (i) {
          return Pn(r, void 0, void 0, function () {
            var t;
            return On(this, function (o) {
              return i.isSome()
                ? [2, i]
                : ((t = n()), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (n) {
        return new Ce(
          this.promise.then(function (r) {
            return r.toResult(n);
          }),
        );
      }),
      (e.prototype.thenInternal = function (n) {
        return new e(this.promise.then(n));
      }),
      e
    );
  })();
var Ru = ["mp4", "webm", "mkv"],
  Vu = ["mp3", "m4a", "ogg"],
  Lu = [...Ru, ...Vu];
function Mu(e, n) {
  let o = e.size.map((u) => u.height).unwrapOr(0),
    a = n.size.map((u) => u.height).unwrapOr(0),
    s = e.bitrate.unwrapOr(0),
    l = n.bitrate.unwrapOr(0);
  return o > a ? -1 : o < a ? 1 : s > l ? -1 : s < l ? 1 : 0;
}
function xa(e, n, r) {
  if (e.is_youtube && n.is_youtube)
    return e.discovery_timestamp_ms > n.discovery_timestamp_ms ? -1 : 1;
  if (e.is_youtube && !n.is_youtube) return -1;
  if (!e.is_youtube && n.is_youtube) return 1;
  if (e.type != n.type) {
    if (e.type == "mpd_playlist") return -1;
    if (n.type == "mpd_playlist") return 1;
    if (e.type == "m3u8_playlist") return -1;
    if (n.type == "m3u8_playlist") return 1;
  }
  if (e.type == "m3u8_playlist" && n.type == "m3u8_playlist") {
    if (typeof e.duration == "number" && n.duration === "live") return -1;
    if (typeof n.duration == "number" && e.duration === "live") return 1;
  }
  if (r.isSome()) {
    let a = r.value.hostname.split(".").slice(-2).join("."),
      s = e.initiator.map((u) => u.hostname).unwrapOr("noop"),
      l = n.initiator.map((u) => u.hostname).unwrapOr("noop");
    if (s != l) {
      let u = s.split(".").slice(-2).join("."),
        m = l.split(".").slice(-2).join(".");
      if (u == a) return -1;
      if (m == a) return 1;
    }
  }
  if (e.type == n.type) {
    let a = n.discovery_timestamp_ms - e.discovery_timestamp_ms;
    if (Math.abs(a) > 4e3)
      return n.discovery_timestamp_ms > e.discovery_timestamp_ms ? 1 : -1;
  }
  if (e.type == "m3u8_playlist" && n.type == "m3u8_playlist") {
    if (
      e.duration != n.duration &&
      typeof e.duration == "number" &&
      typeof n.duration == "number"
    ) {
      if (e.duration > n.duration) return -1;
      if (e.duration < n.duration) return 1;
    }
    let a = e.playlist[0].quality,
      s = n.playlist[0].quality;
    return Mu(a, s);
  }
  if (
    e.type == "http" &&
    n.type == "http" &&
    e.size.isSome() &&
    n.size.isSome()
  ) {
    let a = e.size.value,
      s = n.size.value;
    if (a > s) return -1;
    if (s > a) return 1;
  }
  return 0;
}
var $u = Nu(za(), 1);
var G = {};
fe(G, {
  $brand: () => zt,
  $input: () => Ko,
  $output: () => Fo,
  NEVER: () => Ad,
  ZodAny: () => Ls,
  ZodArray: () => Hs,
  ZodBase64: () => ia,
  ZodBase64URL: () => aa,
  ZodBigInt: () => wt,
  ZodBigIntFormat: () => la,
  ZodBoolean: () => bt,
  ZodCIDRv4: () => ra,
  ZodCIDRv6: () => oa,
  ZodCUID: () => Yi,
  ZodCUID2: () => Ji,
  ZodCatch: () => cu,
  ZodCustom: () => In,
  ZodDate: () => $n,
  ZodDefault: () => ou,
  ZodDiscriminatedUnion: () => Bs,
  ZodE164: () => sa,
  ZodEmail: () => Wi,
  ZodEmoji: () => Ki,
  ZodEnum: () => vt,
  ZodError: () => xc,
  ZodFile: () => tu,
  ZodGUID: () => hn,
  ZodIPv4: () => ta,
  ZodIPv6: () => na,
  ZodISODate: () => mn,
  ZodISODateTime: () => _n,
  ZodISODuration: () => fn,
  ZodISOTime: () => pn,
  ZodIntersection: () => Ws,
  ZodIssueCode: () => Sd,
  ZodJWT: () => ua,
  ZodKSUID: () => ea,
  ZodLazy: () => gu,
  ZodLiteral: () => Qs,
  ZodMap: () => Ys,
  ZodNaN: () => _u,
  ZodNanoID: () => Gi,
  ZodNever: () => Ms,
  ZodNonOptional: () => ga,
  ZodNull: () => Rs,
  ZodNullable: () => ru,
  ZodNumber: () => yt,
  ZodNumberFormat: () => Te,
  ZodObject: () => zn,
  ZodOptional: () => fa,
  ZodPipe: () => ha,
  ZodPrefault: () => au,
  ZodPromise: () => vu,
  ZodReadonly: () => mu,
  ZodRealError: () => Ee,
  ZodRecord: () => ma,
  ZodSet: () => Js,
  ZodString: () => kn,
  ZodStringFormat: () => E,
  ZodSuccess: () => lu,
  ZodSymbol: () => Zs,
  ZodTemplateLiteral: () => fu,
  ZodTransform: () => nu,
  ZodTuple: () => Ks,
  ZodType: () => D,
  ZodULID: () => Xi,
  ZodURL: () => Fi,
  ZodUUID: () => le,
  ZodUndefined: () => Cs,
  ZodUnion: () => _a,
  ZodUnknown: () => ca,
  ZodVoid: () => qs,
  ZodXID: () => Qi,
  _ZodString: () => Bi,
  _default: () => iu,
  any: () => nd,
  array: () => da,
  base64: () => qc,
  base64url: () => Hc,
  bigint: () => Jc,
  boolean: () => Us,
  catch: () => du,
  check: () => yu,
  cidrv4: () => Lc,
  cidrv6: () => Mc,
  clone: () => q,
  coerce: () => va,
  config: () => U,
  core: () => ue,
  cuid: () => Ec,
  cuid2: () => Tc,
  custom: () => wd,
  date: () => od,
  discriminatedUnion: () => ld,
  e164: () => Bc,
  email: () => zc,
  emoji: () => Oc,
  endsWith: () => ct,
  enum: () => Xs,
  file: () => fd,
  flattenError: () => Ge,
  float32: () => Fc,
  float64: () => Kc,
  formatError: () => Ye,
  function: () => Ni,
  getErrorMap: () => jd,
  globalRegistry: () => Q,
  gt: () => ae,
  gte: () => L,
  guid: () => Sc,
  includes: () => ut,
  instanceof: () => kd,
  int: () => Hi,
  int32: () => Gc,
  int64: () => Xc,
  intersection: () => Fs,
  ipv4: () => Rc,
  ipv6: () => Vc,
  iso: () => gn,
  json: () => $d,
  jwt: () => Wc,
  keyof: () => id,
  ksuid: () => Cc,
  lazy: () => hu,
  length: () => Ne,
  literal: () => eu,
  locales: () => nt,
  looseObject: () => ud,
  lowercase: () => at,
  lt: () => ie,
  lte: () => F,
  map: () => _d,
  maxLength: () => Oe,
  maxSize: () => Pe,
  mime: () => dt,
  minLength: () => pe,
  minSize: () => xe,
  multipleOf: () => ke,
  nan: () => vd,
  nanoid: () => Nc,
  nativeEnum: () => pd,
  negative: () => $i,
  never: () => xn,
  nonnegative: () => Si,
  nonoptional: () => uu,
  nonpositive: () => zi,
  normalize: () => _t,
  null: () => Vs,
  nullable: () => bn,
  nullish: () => gd,
  number: () => Ts,
  object: () => ad,
  optional: () => yn,
  overwrite: () => se,
  parse: () => Ri,
  parseAsync: () => Vi,
  partialRecord: () => dd,
  pipe: () => wn,
  positive: () => xi,
  prefault: () => su,
  preprocess: () => zd,
  prettifyError: () => Wn,
  promise: () => bd,
  property: () => Ii,
  readonly: () => pu,
  record: () => Gs,
  refine: () => bu,
  regex: () => it,
  regexes: () => be,
  registry: () => Mt,
  safeParse: () => Li,
  safeParseAsync: () => Mi,
  set: () => md,
  setErrorMap: () => Dd,
  size: () => ot,
  startsWith: () => lt,
  strictObject: () => sd,
  string: () => qi,
  stringbool: () => xd,
  success: () => hd,
  superRefine: () => wu,
  symbol: () => ed,
  templateLiteral: () => yd,
  toJSONSchema: () => Ei,
  toLowerCase: () => pt,
  toUpperCase: () => ft,
  transform: () => pa,
  treeifyError: () => Bn,
  trim: () => mt,
  tuple: () => cd,
  uint32: () => Yc,
  uint64: () => Qc,
  ulid: () => Uc,
  undefined: () => td,
  union: () => Sn,
  unknown: () => vn,
  uppercase: () => st,
  url: () => Pc,
  uuid: () => Ic,
  uuidv4: () => Ac,
  uuidv6: () => Dc,
  uuidv7: () => jc,
  void: () => rd,
  xid: () => Zc,
});
var ue = {};
fe(ue, {
  $ZodAny: () => bo,
  $ZodArray: () => et,
  $ZodAsyncError: () => X,
  $ZodBase64: () => co,
  $ZodBase64URL: () => _o,
  $ZodBigInt: () => Rt,
  $ZodBigIntFormat: () => go,
  $ZodBoolean: () => Qe,
  $ZodCIDRv4: () => so,
  $ZodCIDRv6: () => uo,
  $ZodCUID: () => Yr,
  $ZodCUID2: () => Jr,
  $ZodCatch: () => Vo,
  $ZodCheck: () => T,
  $ZodCheckBigIntFormat: () => Sr,
  $ZodCheckEndsWith: () => Cr,
  $ZodCheckGreaterThan: () => Tt,
  $ZodCheckIncludes: () => Ur,
  $ZodCheckLengthEquals: () => Or,
  $ZodCheckLessThan: () => Et,
  $ZodCheckLowerCase: () => Er,
  $ZodCheckMaxLength: () => jr,
  $ZodCheckMaxSize: () => Ir,
  $ZodCheckMimeType: () => Vr,
  $ZodCheckMinLength: () => Pr,
  $ZodCheckMinSize: () => Ar,
  $ZodCheckMultipleOf: () => $r,
  $ZodCheckNumberFormat: () => zr,
  $ZodCheckOverwrite: () => Lr,
  $ZodCheckProperty: () => Rr,
  $ZodCheckRegex: () => Nr,
  $ZodCheckSizeEquals: () => Dr,
  $ZodCheckStartsWith: () => Zr,
  $ZodCheckStringFormat: () => Ae,
  $ZodCheckUpperCase: () => Tr,
  $ZodCustom: () => Wo,
  $ZodDate: () => xo,
  $ZodDefault: () => Uo,
  $ZodDiscriminatedUnion: () => zo,
  $ZodE164: () => mo,
  $ZodEmail: () => Wr,
  $ZodEmoji: () => Kr,
  $ZodEnum: () => jo,
  $ZodError: () => Ke,
  $ZodFile: () => Oo,
  $ZodFunction: () => dn,
  $ZodGUID: () => Hr,
  $ZodIPv4: () => io,
  $ZodIPv6: () => ao,
  $ZodISODate: () => no,
  $ZodISODateTime: () => to,
  $ZodISODuration: () => oo,
  $ZodISOTime: () => ro,
  $ZodIntersection: () => So,
  $ZodJWT: () => po,
  $ZodKSUID: () => eo,
  $ZodLazy: () => Bo,
  $ZodLiteral: () => Po,
  $ZodMap: () => Ao,
  $ZodNaN: () => Lo,
  $ZodNanoID: () => Gr,
  $ZodNever: () => wo,
  $ZodNonOptional: () => Co,
  $ZodNull: () => yo,
  $ZodNullable: () => To,
  $ZodNumber: () => Ct,
  $ZodNumberFormat: () => fo,
  $ZodObject: () => $o,
  $ZodOptional: () => Eo,
  $ZodPipe: () => tt,
  $ZodPrefault: () => Zo,
  $ZodPromise: () => Ho,
  $ZodReadonly: () => Mo,
  $ZodRealError: () => Ie,
  $ZodRecord: () => Io,
  $ZodRegistry: () => De,
  $ZodSet: () => Do,
  $ZodString: () => Xe,
  $ZodStringFormat: () => N,
  $ZodSuccess: () => Ro,
  $ZodSymbol: () => ho,
  $ZodTemplateLiteral: () => qo,
  $ZodTransform: () => No,
  $ZodTuple: () => we,
  $ZodType: () => z,
  $ZodULID: () => Xr,
  $ZodURL: () => Fr,
  $ZodUUID: () => Br,
  $ZodUndefined: () => vo,
  $ZodUnion: () => Vt,
  $ZodUnknown: () => me,
  $ZodVoid: () => ko,
  $ZodXID: () => Qr,
  $brand: () => zt,
  $constructor: () => c,
  $input: () => Ko,
  $output: () => Fo,
  Doc: () => Je,
  JSONSchema: () => Os,
  JSONSchemaGenerator: () => ht,
  _any: () => hi,
  _array: () => gt,
  _base64: () => sn,
  _base64url: () => un,
  _bigint: () => ci,
  _boolean: () => ui,
  _catch: () => gc,
  _cidrv4: () => on,
  _cidrv6: () => an,
  _coercedBigint: () => di,
  _coercedBoolean: () => li,
  _coercedDate: () => wi,
  _coercedNumber: () => ni,
  _coercedString: () => Yo,
  _cuid: () => Jt,
  _cuid2: () => Xt,
  _custom: () => ji,
  _date: () => bi,
  _default: () => mc,
  _discriminatedUnion: () => nc,
  _e164: () => ln,
  _email: () => qt,
  _emoji: () => Gt,
  _endsWith: () => ct,
  _enum: () => sc,
  _file: () => Di,
  _float32: () => oi,
  _float64: () => ii,
  _gt: () => ae,
  _gte: () => L,
  _guid: () => rt,
  _includes: () => ut,
  _int: () => ri,
  _int32: () => ai,
  _int64: () => _i,
  _intersection: () => rc,
  _ipv4: () => nn,
  _ipv6: () => rn,
  _isoDate: () => Xo,
  _isoDateTime: () => Jo,
  _isoDuration: () => ei,
  _isoTime: () => Qo,
  _jwt: () => cn,
  _ksuid: () => tn,
  _lazy: () => bc,
  _length: () => Ne,
  _literal: () => lc,
  _lowercase: () => at,
  _lt: () => ie,
  _lte: () => F,
  _map: () => ic,
  _max: () => F,
  _maxLength: () => Oe,
  _maxSize: () => Pe,
  _mime: () => dt,
  _min: () => L,
  _minLength: () => pe,
  _minSize: () => xe,
  _multipleOf: () => ke,
  _nan: () => ki,
  _nanoid: () => Yt,
  _nativeEnum: () => uc,
  _negative: () => $i,
  _never: () => vi,
  _nonnegative: () => Si,
  _nonoptional: () => pc,
  _nonpositive: () => zi,
  _normalize: () => _t,
  _null: () => gi,
  _nullable: () => _c,
  _number: () => ti,
  _optional: () => dc,
  _overwrite: () => se,
  _parse: () => It,
  _parseAsync: () => Dt,
  _pipe: () => hc,
  _positive: () => xi,
  _promise: () => wc,
  _property: () => Ii,
  _readonly: () => vc,
  _record: () => oc,
  _refine: () => Pi,
  _regex: () => it,
  _safeParse: () => Pt,
  _safeParseAsync: () => Ot,
  _set: () => ac,
  _size: () => ot,
  _startsWith: () => lt,
  _string: () => Go,
  _stringbool: () => Oi,
  _success: () => fc,
  _symbol: () => pi,
  _templateLiteral: () => yc,
  _toLowerCase: () => pt,
  _toUpperCase: () => ft,
  _transform: () => cc,
  _trim: () => mt,
  _tuple: () => Ai,
  _uint32: () => si,
  _uint64: () => mi,
  _ulid: () => Qt,
  _undefined: () => fi,
  _union: () => tc,
  _unknown: () => je,
  _uppercase: () => st,
  _url: () => Kt,
  _uuid: () => Ht,
  _uuidv4: () => Bt,
  _uuidv6: () => Wt,
  _uuidv7: () => Ft,
  _void: () => yi,
  _xid: () => en,
  clone: () => q,
  config: () => U,
  flattenError: () => Ge,
  formatError: () => Ye,
  function: () => Ni,
  globalConfig: () => Re,
  globalRegistry: () => Q,
  isValidBase64: () => lo,
  isValidBase64URL: () => Ba,
  isValidJWT: () => Wa,
  locales: () => nt,
  parse: () => At,
  parseAsync: () => jt,
  prettifyError: () => Wn,
  regexes: () => be,
  registry: () => Mt,
  safeParse: () => Fn,
  safeParseAsync: () => Kn,
  toDotPath: () => Ia,
  toJSONSchema: () => Ei,
  treeifyError: () => Bn,
  util: () => y,
  version: () => Mr,
});
function c(e, n, r) {
  function i(s, l) {
    var u;
    (Object.defineProperty(s, "_zod", { value: s._zod ?? {}, enumerable: !1 }),
      (u = s._zod).traits ?? (u.traits = new Set()),
      s._zod.traits.add(e),
      n(s, l));
    for (let m in a.prototype)
      m in s || Object.defineProperty(s, m, { value: a.prototype[m].bind(s) });
    ((s._zod.constr = a), (s._zod.def = l));
  }
  let t = r?.Parent ?? Object;
  class o extends t {}
  Object.defineProperty(o, "name", { value: e });
  function a(s) {
    var l;
    let u = r?.Parent ? new o() : this;
    (i(u, s), (l = u._zod).deferred ?? (l.deferred = []));
    for (let m of u._zod.deferred) m();
    return u;
  }
  return (
    Object.defineProperty(a, "init", { value: i }),
    Object.defineProperty(a, Symbol.hasInstance, {
      value: (s) =>
        r?.Parent && s instanceof r.Parent ? !0 : s?._zod?.traits?.has(e),
    }),
    Object.defineProperty(a, "name", { value: e }),
    a
  );
}
var zt = Symbol("zod_brand"),
  X = class extends Error {
    constructor() {
      super(
        "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
      );
    }
  },
  Re = {};
function U(e) {
  return (e && Object.assign(Re, e), Re);
}
var y = {};
fe(y, {
  BIGINT_FORMAT_RANGES: () => qn,
  Class: () => Tn,
  NUMBER_FORMAT_RANGES: () => Mn,
  aborted: () => ve,
  allowsEval: () => Rn,
  assert: () => Fu,
  assertEqual: () => qu,
  assertIs: () => Bu,
  assertNever: () => Wu,
  assertNotEqual: () => Hu,
  assignProp: () => Cn,
  cached: () => Me,
  cleanEnum: () => il,
  cleanRegex: () => qe,
  clone: () => q,
  createTransparentProxy: () => Xu,
  defineLazy: () => O,
  esc: () => he,
  escapeRegex: () => oe,
  extend: () => tl,
  finalizeIssue: () => H,
  floatSafeRemainder: () => Zn,
  getElementAtPath: () => Ku,
  getEnumValues: () => Le,
  getLengthableOrigin: () => Fe,
  getParsedType: () => Ju,
  getSizableOrigin: () => We,
  isObject: () => Se,
  isPlainObject: () => He,
  issue: () => Hn,
  joinValues: () => _,
  jsonStringifyReplacer: () => Un,
  merge: () => nl,
  normalizeParams: () => h,
  nullish: () => _e,
  numKeys: () => Yu,
  omit: () => el,
  optionalKeys: () => Ln,
  partial: () => rl,
  pick: () => Qu,
  prefixIssues: () => V,
  primitiveTypes: () => Vn,
  promiseAllObject: () => Gu,
  propertyKeyTypes: () => Be,
  randomString: () => St,
  required: () => ol,
  stringifyPrimitive: () => b,
  unwrapMessage: () => Ve,
});
function qu(e) {
  return e;
}
function Hu(e) {
  return e;
}
function Bu(e) {}
function Wu(e) {
  throw new Error();
}
function Fu(e) {}
function Le(e) {
  let n = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, t]) => n.indexOf(+i) === -1)
    .map(([i, t]) => t);
}
function _(e, n = "|") {
  return e.map((r) => b(r)).join(n);
}
function Un(e, n) {
  return typeof n == "bigint" ? n.toString() : n;
}
function Me(e) {
  return {
    get value() {
      {
        let r = e();
        return (Object.defineProperty(this, "value", { value: r }), r);
      }
      throw new Error("cached value already set");
    },
  };
}
function _e(e) {
  return e == null;
}
function qe(e) {
  let n = e.startsWith("^") ? 1 : 0,
    r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(n, r);
}
function Zn(e, n) {
  let r = (e.toString().split(".")[1] || "").length,
    i = (n.toString().split(".")[1] || "").length,
    t = r > i ? r : i,
    o = Number.parseInt(e.toFixed(t).replace(".", "")),
    a = Number.parseInt(n.toFixed(t).replace(".", ""));
  return (o % a) / 10 ** t;
}
function O(e, n, r) {
  Object.defineProperty(e, n, {
    get() {
      {
        let t = r();
        return ((e[n] = t), t);
      }
      throw new Error("cached value already set");
    },
    set(t) {
      Object.defineProperty(e, n, { value: t });
    },
    configurable: !0,
  });
}
function Cn(e, n, r) {
  Object.defineProperty(e, n, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function Ku(e, n) {
  return n ? n.reduce((r, i) => r?.[i], e) : e;
}
function Gu(e) {
  let n = Object.keys(e),
    r = n.map((i) => e[i]);
  return Promise.all(r).then((i) => {
    let t = {};
    for (let o = 0; o < n.length; o++) t[n[o]] = i[o];
    return t;
  });
}
function St(e = 10) {
  let n = "abcdefghijklmnopqrstuvwxyz",
    r = "";
  for (let i = 0; i < e; i++) r += n[Math.floor(Math.random() * n.length)];
  return r;
}
function he(e) {
  return JSON.stringify(e);
}
function Se(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var Rn = Me(() => {
  try {
    let e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function He(e) {
  if (Se(e) === !1) return !1;
  let n = e.constructor;
  if (n === void 0) return !0;
  let r = n.prototype;
  return !(
    Se(r) === !1 ||
    Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1
  );
}
function Yu(e) {
  let n = 0;
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && n++;
  return n;
}
var Ju = (e) => {
    let n = typeof e;
    switch (n) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(e) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        return Array.isArray(e)
          ? "array"
          : e === null
            ? "null"
            : e.then &&
                typeof e.then == "function" &&
                e.catch &&
                typeof e.catch == "function"
              ? "promise"
              : typeof Map < "u" && e instanceof Map
                ? "map"
                : typeof Set < "u" && e instanceof Set
                  ? "set"
                  : typeof Date < "u" && e instanceof Date
                    ? "date"
                    : typeof File < "u" && e instanceof File
                      ? "file"
                      : "object";
      default:
        throw new Error(`Unknown data type: ${n}`);
    }
  },
  Be = new Set(["string", "number", "symbol"]),
  Vn = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
  ]);
function oe(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function q(e, n, r) {
  let i = new e._zod.constr(n ?? e._zod.def);
  return ((!n || r?.parent) && (i._zod.parent = e), i);
}
function h(e) {
  let n = e;
  if (!n) return {};
  if (typeof n == "string") return { error: () => n };
  if (n?.message !== void 0) {
    if (n?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    n.error = n.message;
  }
  return (
    delete n.message,
    typeof n.error == "string" ? { ...n, error: () => n.error } : n
  );
}
function Xu(e) {
  let n;
  return new Proxy(
    {},
    {
      get(r, i, t) {
        return (n ?? (n = e()), Reflect.get(n, i, t));
      },
      set(r, i, t, o) {
        return (n ?? (n = e()), Reflect.set(n, i, t, o));
      },
      has(r, i) {
        return (n ?? (n = e()), Reflect.has(n, i));
      },
      deleteProperty(r, i) {
        return (n ?? (n = e()), Reflect.deleteProperty(n, i));
      },
      ownKeys(r) {
        return (n ?? (n = e()), Reflect.ownKeys(n));
      },
      getOwnPropertyDescriptor(r, i) {
        return (n ?? (n = e()), Reflect.getOwnPropertyDescriptor(n, i));
      },
      defineProperty(r, i, t) {
        return (n ?? (n = e()), Reflect.defineProperty(n, i, t));
      },
    },
  );
}
function b(e) {
  return typeof e == "bigint"
    ? e.toString() + "n"
    : typeof e == "string"
      ? `"${e}"`
      : `${e}`;
}
function Ln(e) {
  return Object.keys(e).filter(
    (n) => e[n]._zod.optin === "optional" && e[n]._zod.optout === "optional",
  );
}
var Mn = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  qn = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Qu(e, n) {
  let r = {},
    i = e._zod.def;
  for (let t in n) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    n[t] && (r[t] = i.shape[t]);
  }
  return q(e, { ...e._zod.def, shape: r, checks: [] });
}
function el(e, n) {
  let r = { ...e._zod.def.shape },
    i = e._zod.def;
  for (let t in n) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    n[t] && delete r[t];
  }
  return q(e, { ...e._zod.def, shape: r, checks: [] });
}
function tl(e, n) {
  let r = {
    ...e._zod.def,
    get shape() {
      let i = { ...e._zod.def.shape, ...n };
      return (Cn(this, "shape", i), i);
    },
    checks: [],
  };
  return q(e, r);
}
function nl(e, n) {
  return q(e, {
    ...e._zod.def,
    get shape() {
      let r = { ...e._zod.def.shape, ...n._zod.def.shape };
      return (Cn(this, "shape", r), r);
    },
    catchall: n._zod.def.catchall,
    checks: [],
  });
}
function rl(e, n, r) {
  let i = n._zod.def.shape,
    t = { ...i };
  if (r)
    for (let o in r) {
      if (!(o in i)) throw new Error(`Unrecognized key: "${o}"`);
      r[o] && (t[o] = e ? new e({ type: "optional", innerType: i[o] }) : i[o]);
    }
  else
    for (let o in i)
      t[o] = e ? new e({ type: "optional", innerType: i[o] }) : i[o];
  return q(n, { ...n._zod.def, shape: t, checks: [] });
}
function ol(e, n, r) {
  let i = n._zod.def.shape,
    t = { ...i };
  if (r)
    for (let o in r) {
      if (!(o in t)) throw new Error(`Unrecognized key: "${o}"`);
      r[o] && (t[o] = new e({ type: "nonoptional", innerType: i[o] }));
    }
  else for (let o in i) t[o] = new e({ type: "nonoptional", innerType: i[o] });
  return q(n, { ...n._zod.def, shape: t, checks: [] });
}
function ve(e, n = 0) {
  for (let r = n; r < e.issues.length; r++)
    if (e.issues[r].continue !== !0) return !0;
  return !1;
}
function V(e, n) {
  return n.map((r) => {
    var i;
    return ((i = r).path ?? (i.path = []), r.path.unshift(e), r);
  });
}
function Ve(e) {
  return typeof e == "string" ? e : e?.message;
}
function H(e, n, r) {
  let i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let t =
      Ve(e.inst?._zod.def?.error?.(e)) ??
      Ve(n?.error?.(e)) ??
      Ve(r.customError?.(e)) ??
      Ve(r.localeError?.(e)) ??
      "Invalid input";
    i.message = t;
  }
  return (
    delete i.inst,
    delete i.continue,
    n?.reportInput || delete i.input,
    i
  );
}
function We(e) {
  return e instanceof Set
    ? "set"
    : e instanceof Map
      ? "map"
      : e instanceof File
        ? "file"
        : "unknown";
}
function Fe(e) {
  return Array.isArray(e)
    ? "array"
    : typeof e == "string"
      ? "string"
      : "unknown";
}
function Hn(...e) {
  let [n, r, i] = e;
  return typeof n == "string"
    ? { message: n, code: "custom", input: r, inst: i }
    : { ...n };
}
function il(e) {
  return Object.entries(e)
    .filter(([n, r]) => Number.isNaN(Number.parseInt(n, 10)))
    .map((n) => n[1]);
}
var Tn = class {
  constructor(...n) {}
};
var Sa = (e, n) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: n, enumerable: !1 }),
      Object.defineProperty(e, "message", {
        get() {
          return JSON.stringify(n, Un, 2);
        },
        enumerable: !0,
      }));
  },
  Ke = c("$ZodError", Sa),
  Ie = c("$ZodError", Sa, { Parent: Error });
function Ge(e, n = (r) => r.message) {
  let r = {},
    i = [];
  for (let t of e.issues)
    t.path.length > 0
      ? ((r[t.path[0]] = r[t.path[0]] || []), r[t.path[0]].push(n(t)))
      : i.push(n(t));
  return { formErrors: i, fieldErrors: r };
}
function Ye(e, n) {
  let r =
      n ||
      function (o) {
        return o.message;
      },
    i = { _errors: [] },
    t = (o) => {
      for (let a of o.issues)
        if (a.code === "invalid_union" && a.errors.length)
          a.errors.map((s) => t({ issues: s }));
        else if (a.code === "invalid_key") t({ issues: a.issues });
        else if (a.code === "invalid_element") t({ issues: a.issues });
        else if (a.path.length === 0) i._errors.push(r(a));
        else {
          let s = i,
            l = 0;
          for (; l < a.path.length; ) {
            let u = a.path[l];
            (l === a.path.length - 1
              ? ((s[u] = s[u] || { _errors: [] }), s[u]._errors.push(r(a)))
              : (s[u] = s[u] || { _errors: [] }),
              (s = s[u]),
              l++);
          }
        }
    };
  return (t(e), i);
}
function Bn(e, n) {
  let r =
      n ||
      function (o) {
        return o.message;
      },
    i = { errors: [] },
    t = (o, a = []) => {
      var s, l;
      for (let u of o.issues)
        if (u.code === "invalid_union" && u.errors.length)
          u.errors.map((m) => t({ issues: m }, u.path));
        else if (u.code === "invalid_key") t({ issues: u.issues }, u.path);
        else if (u.code === "invalid_element") t({ issues: u.issues }, u.path);
        else {
          let m = [...a, ...u.path];
          if (m.length === 0) {
            i.errors.push(r(u));
            continue;
          }
          let p = i,
            f = 0;
          for (; f < m.length; ) {
            let d = m[f],
              v = f === m.length - 1;
            (typeof d == "string"
              ? (p.properties ?? (p.properties = {}),
                (s = p.properties)[d] ?? (s[d] = { errors: [] }),
                (p = p.properties[d]))
              : (p.items ?? (p.items = []),
                (l = p.items)[d] ?? (l[d] = { errors: [] }),
                (p = p.items[d])),
              v && p.errors.push(r(u)),
              f++);
          }
        }
    };
  return (t(e), i);
}
function Ia(e) {
  let n = [];
  for (let r of e)
    typeof r == "number"
      ? n.push(`[${r}]`)
      : typeof r == "symbol"
        ? n.push(`[${JSON.stringify(String(r))}]`)
        : /[^\w$]/.test(r)
          ? n.push(`[${JSON.stringify(r)}]`)
          : (n.length && n.push("."), n.push(r));
  return n.join("");
}
function Wn(e) {
  let n = [],
    r = [...e.issues].sort((i, t) => i.path.length - t.path.length);
  for (let i of r)
    (n.push(`\u2716 ${i.message}`),
      i.path?.length && n.push(`  \u2192 at ${Ia(i.path)}`));
  return n.join(`
`);
}
var It = (e) => (n, r, i, t) => {
    let o = i ? Object.assign(i, { async: !1 }) : { async: !1 },
      a = n._zod.run({ value: r, issues: [] }, o);
    if (a instanceof Promise) throw new X();
    if (a.issues.length) {
      let s = new (t?.Err ?? e)(a.issues.map((l) => H(l, o, U())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  At = It(Ie),
  Dt = (e) => async (n, r, i, t) => {
    let o = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      a = n._zod.run({ value: r, issues: [] }, o);
    if ((a instanceof Promise && (a = await a), a.issues.length)) {
      let s = new (t?.Err ?? e)(a.issues.map((l) => H(l, o, U())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  jt = Dt(Ie),
  Pt = (e) => (n, r, i) => {
    let t = i ? { ...i, async: !1 } : { async: !1 },
      o = n._zod.run({ value: r, issues: [] }, t);
    if (o instanceof Promise) throw new X();
    return o.issues.length
      ? { success: !1, error: new (e ?? Ke)(o.issues.map((a) => H(a, t, U()))) }
      : { success: !0, data: o.value };
  },
  Fn = Pt(Ie),
  Ot = (e) => async (n, r, i) => {
    let t = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      o = n._zod.run({ value: r, issues: [] }, t);
    return (
      o instanceof Promise && (o = await o),
      o.issues.length
        ? { success: !1, error: new e(o.issues.map((a) => H(a, t, U()))) }
        : { success: !0, data: o.value }
    );
  },
  Kn = Ot(Ie);
var be = {};
fe(be, {
  _emoji: () => Aa,
  base64: () => lr,
  base64url: () => Nt,
  bigint: () => gr,
  boolean: () => yr,
  browserEmail: () => pl,
  cidrv4: () => sr,
  cidrv6: () => ur,
  cuid: () => Gn,
  cuid2: () => Yn,
  date: () => _r,
  datetime: () => pr,
  domain: () => fl,
  duration: () => tr,
  e164: () => dr,
  email: () => rr,
  emoji: () => or,
  extendedDuration: () => sl,
  guid: () => nr,
  hostname: () => cr,
  html5Email: () => dl,
  integer: () => hr,
  ipv4: () => ir,
  ipv6: () => ar,
  ksuid: () => Qn,
  lowercase: () => kr,
  nanoid: () => er,
  null: () => br,
  number: () => vr,
  rfc5322Email: () => _l,
  string: () => fr,
  time: () => mr,
  ulid: () => Jn,
  undefined: () => wr,
  unicodeEmail: () => ml,
  uppercase: () => xr,
  uuid: () => ye,
  uuid4: () => ul,
  uuid6: () => ll,
  uuid7: () => cl,
  xid: () => Xn,
});
var Gn = /^[cC][^\s-]{8,}$/,
  Yn = /^[0-9a-z]+$/,
  Jn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  Xn = /^[0-9a-vA-V]{20}$/,
  Qn = /^[A-Za-z0-9]{27}$/,
  er = /^[a-zA-Z0-9_-]{21}$/,
  tr =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  sl =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  nr =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  ye = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
  ul = ye(4),
  ll = ye(6),
  cl = ye(7),
  rr =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  dl =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  _l =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ml = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  pl =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Aa = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function or() {
  return new RegExp(Aa, "u");
}
var ir =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ar =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  sr =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  ur =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  lr =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  Nt = /^[A-Za-z0-9_-]*$/,
  cr = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  fl = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  dr = /^\+(?:[0-9]){6,14}[0-9]$/,
  Da =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  _r = new RegExp(`^${Da}$`);
function ja(e) {
  let n = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (n = `${n}\\.\\d{${e.precision}}`)
      : e.precision == null && (n = `${n}(\\.\\d+)?`),
    n
  );
}
function mr(e) {
  return new RegExp(`^${ja(e)}$`);
}
function pr(e) {
  let n = `${Da}T${ja(e)}`,
    r = [];
  return (
    r.push(e.local ? "Z?" : "Z"),
    e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (n = `${n}(${r.join("|")})`),
    new RegExp(`^${n}$`)
  );
}
var fr = (e) => {
    let n = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${n}$`);
  },
  gr = /^\d+n?$/,
  hr = /^\d+$/,
  vr = /^-?\d+(?:\.\d+)?/i,
  yr = /true|false/i,
  br = /null/i;
var wr = /undefined/i;
var kr = /^[^A-Z]*$/,
  xr = /^[^a-z]*$/;
var T = c("$ZodCheck", (e, n) => {
    var r;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = n),
      (r = e._zod).onattach ?? (r.onattach = []));
  }),
  Oa = { number: "number", bigint: "bigint", object: "date" },
  Et = c("$ZodCheckLessThan", (e, n) => {
    T.init(e, n);
    let r = Oa[typeof n.value];
    (e._zod.onattach.push((i) => {
      let t = i._zod.bag,
        o =
          (n.inclusive ? t.maximum : t.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      n.value < o &&
        (n.inclusive ? (t.maximum = n.value) : (t.exclusiveMaximum = n.value));
    }),
      (e._zod.check = (i) => {
        (n.inclusive ? i.value <= n.value : i.value < n.value) ||
          i.issues.push({
            origin: r,
            code: "too_big",
            maximum: n.value,
            input: i.value,
            inclusive: n.inclusive,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  Tt = c("$ZodCheckGreaterThan", (e, n) => {
    T.init(e, n);
    let r = Oa[typeof n.value];
    (e._zod.onattach.push((i) => {
      let t = i._zod.bag,
        o =
          (n.inclusive ? t.minimum : t.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      n.value > o &&
        (n.inclusive ? (t.minimum = n.value) : (t.exclusiveMinimum = n.value));
    }),
      (e._zod.check = (i) => {
        (n.inclusive ? i.value >= n.value : i.value > n.value) ||
          i.issues.push({
            origin: r,
            code: "too_small",
            minimum: n.value,
            input: i.value,
            inclusive: n.inclusive,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  $r = c("$ZodCheckMultipleOf", (e, n) => {
    (T.init(e, n),
      e._zod.onattach.push((r) => {
        var i;
        (i = r._zod.bag).multipleOf ?? (i.multipleOf = n.value);
      }),
      (e._zod.check = (r) => {
        if (typeof r.value != typeof n.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof r.value == "bigint"
          ? r.value % n.value === BigInt(0)
          : Zn(r.value, n.value) === 0) ||
          r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: n.value,
            input: r.value,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  zr = c("$ZodCheckNumberFormat", (e, n) => {
    (T.init(e, n), (n.format = n.format || "float64"));
    let r = n.format?.includes("int"),
      i = r ? "int" : "number",
      [t, o] = Mn[n.format];
    (e._zod.onattach.push((a) => {
      let s = a._zod.bag;
      ((s.format = n.format),
        (s.minimum = t),
        (s.maximum = o),
        r && (s.pattern = hr));
    }),
      (e._zod.check = (a) => {
        let s = a.value;
        if (r) {
          if (!Number.isInteger(s)) {
            a.issues.push({
              expected: i,
              format: n.format,
              code: "invalid_type",
              input: s,
              inst: e,
            });
            return;
          }
          if (!Number.isSafeInteger(s)) {
            s > 0
              ? a.issues.push({
                  input: s,
                  code: "too_big",
                  maximum: Number.MAX_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !n.abort,
                })
              : a.issues.push({
                  input: s,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !n.abort,
                });
            return;
          }
        }
        (s < t &&
          a.issues.push({
            origin: "number",
            input: s,
            code: "too_small",
            minimum: t,
            inclusive: !0,
            inst: e,
            continue: !n.abort,
          }),
          s > o &&
            a.issues.push({
              origin: "number",
              input: s,
              code: "too_big",
              maximum: o,
              inst: e,
            }));
      }));
  }),
  Sr = c("$ZodCheckBigIntFormat", (e, n) => {
    T.init(e, n);
    let [r, i] = qn[n.format];
    (e._zod.onattach.push((t) => {
      let o = t._zod.bag;
      ((o.format = n.format), (o.minimum = r), (o.maximum = i));
    }),
      (e._zod.check = (t) => {
        let o = t.value;
        (o < r &&
          t.issues.push({
            origin: "bigint",
            input: o,
            code: "too_small",
            minimum: r,
            inclusive: !0,
            inst: e,
            continue: !n.abort,
          }),
          o > i &&
            t.issues.push({
              origin: "bigint",
              input: o,
              code: "too_big",
              maximum: i,
              inst: e,
            }));
      }));
  }),
  Ir = c("$ZodCheckMaxSize", (e, n) => {
    (T.init(e, n),
      (e._zod.when = (r) => {
        let i = r.value;
        return !_e(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        n.maximum < i && (r._zod.bag.maximum = n.maximum);
      }),
      (e._zod.check = (r) => {
        let i = r.value;
        i.size <= n.maximum ||
          r.issues.push({
            origin: We(i),
            code: "too_big",
            maximum: n.maximum,
            input: i,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  Ar = c("$ZodCheckMinSize", (e, n) => {
    (T.init(e, n),
      (e._zod.when = (r) => {
        let i = r.value;
        return !_e(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        n.minimum > i && (r._zod.bag.minimum = n.minimum);
      }),
      (e._zod.check = (r) => {
        let i = r.value;
        i.size >= n.minimum ||
          r.issues.push({
            origin: We(i),
            code: "too_small",
            minimum: n.minimum,
            input: i,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  Dr = c("$ZodCheckSizeEquals", (e, n) => {
    (T.init(e, n),
      (e._zod.when = (r) => {
        let i = r.value;
        return !_e(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag;
        ((i.minimum = n.size), (i.maximum = n.size), (i.size = n.size));
      }),
      (e._zod.check = (r) => {
        let i = r.value,
          t = i.size;
        if (t === n.size) return;
        let o = t > n.size;
        r.issues.push({
          origin: We(i),
          ...(o
            ? { code: "too_big", maximum: n.size }
            : { code: "too_small", minimum: n.size }),
          input: r.value,
          inst: e,
          continue: !n.abort,
        });
      }));
  }),
  jr = c("$ZodCheckMaxLength", (e, n) => {
    (T.init(e, n),
      (e._zod.when = (r) => {
        let i = r.value;
        return !_e(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        n.maximum < i && (r._zod.bag.maximum = n.maximum);
      }),
      (e._zod.check = (r) => {
        let i = r.value;
        if (i.length <= n.maximum) return;
        let o = Fe(i);
        r.issues.push({
          origin: o,
          code: "too_big",
          maximum: n.maximum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !n.abort,
        });
      }));
  }),
  Pr = c("$ZodCheckMinLength", (e, n) => {
    (T.init(e, n),
      (e._zod.when = (r) => {
        let i = r.value;
        return !_e(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        n.minimum > i && (r._zod.bag.minimum = n.minimum);
      }),
      (e._zod.check = (r) => {
        let i = r.value;
        if (i.length >= n.minimum) return;
        let o = Fe(i);
        r.issues.push({
          origin: o,
          code: "too_small",
          minimum: n.minimum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !n.abort,
        });
      }));
  }),
  Or = c("$ZodCheckLengthEquals", (e, n) => {
    (T.init(e, n),
      (e._zod.when = (r) => {
        let i = r.value;
        return !_e(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag;
        ((i.minimum = n.length), (i.maximum = n.length), (i.length = n.length));
      }),
      (e._zod.check = (r) => {
        let i = r.value,
          t = i.length;
        if (t === n.length) return;
        let o = Fe(i),
          a = t > n.length;
        r.issues.push({
          origin: o,
          ...(a
            ? { code: "too_big", maximum: n.length }
            : { code: "too_small", minimum: n.length }),
          input: r.value,
          inst: e,
          continue: !n.abort,
        });
      }));
  }),
  Ae = c("$ZodCheckStringFormat", (e, n) => {
    var r;
    (T.init(e, n),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        ((t.format = n.format),
          n.pattern &&
            (t.patterns ?? (t.patterns = new Set()),
            t.patterns.add(n.pattern)));
      }),
      (r = e._zod).check ??
        (r.check = (i) => {
          if (!n.pattern) throw new Error("Not implemented.");
          ((n.pattern.lastIndex = 0),
            !n.pattern.test(i.value) &&
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: n.format,
                input: i.value,
                ...(n.pattern ? { pattern: n.pattern.toString() } : {}),
                inst: e,
                continue: !n.abort,
              }));
        }));
  }),
  Nr = c("$ZodCheckRegex", (e, n) => {
    (Ae.init(e, n),
      (e._zod.check = (r) => {
        ((n.pattern.lastIndex = 0),
          !n.pattern.test(r.value) &&
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: r.value,
              pattern: n.pattern.toString(),
              inst: e,
              continue: !n.abort,
            }));
      }));
  }),
  Er = c("$ZodCheckLowerCase", (e, n) => {
    (n.pattern ?? (n.pattern = kr), Ae.init(e, n));
  }),
  Tr = c("$ZodCheckUpperCase", (e, n) => {
    (n.pattern ?? (n.pattern = xr), Ae.init(e, n));
  }),
  Ur = c("$ZodCheckIncludes", (e, n) => {
    T.init(e, n);
    let r = oe(n.includes),
      i = new RegExp(
        typeof n.position == "number" ? `^.{${n.position}}${r}` : r,
      );
    ((n.pattern = i),
      e._zod.onattach.push((t) => {
        let o = t._zod.bag;
        (o.patterns ?? (o.patterns = new Set()), o.patterns.add(i));
      }),
      (e._zod.check = (t) => {
        t.value.includes(n.includes, n.position) ||
          t.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: n.includes,
            input: t.value,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  Zr = c("$ZodCheckStartsWith", (e, n) => {
    T.init(e, n);
    let r = new RegExp(`^${oe(n.prefix)}.*`);
    (n.pattern ?? (n.pattern = r),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(r));
      }),
      (e._zod.check = (i) => {
        i.value.startsWith(n.prefix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: n.prefix,
            input: i.value,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  Cr = c("$ZodCheckEndsWith", (e, n) => {
    T.init(e, n);
    let r = new RegExp(`.*${oe(n.suffix)}$`);
    (n.pattern ?? (n.pattern = r),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(r));
      }),
      (e._zod.check = (i) => {
        i.value.endsWith(n.suffix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: n.suffix,
            input: i.value,
            inst: e,
            continue: !n.abort,
          });
      }));
  });
function Pa(e, n, r) {
  e.issues.length && n.issues.push(...V(r, e.issues));
}
var Rr = c("$ZodCheckProperty", (e, n) => {
    (T.init(e, n),
      (e._zod.check = (r) => {
        let i = n.schema._zod.run(
          { value: r.value[n.property], issues: [] },
          {},
        );
        if (i instanceof Promise) return i.then((t) => Pa(t, r, n.property));
        Pa(i, r, n.property);
      }));
  }),
  Vr = c("$ZodCheckMimeType", (e, n) => {
    T.init(e, n);
    let r = new Set(n.mime);
    (e._zod.onattach.push((i) => {
      i._zod.bag.mime = n.mime;
    }),
      (e._zod.check = (i) => {
        r.has(i.value.type) ||
          i.issues.push({
            code: "invalid_value",
            values: n.mime,
            input: i.value.type,
            path: ["type"],
            inst: e,
          });
      }));
  }),
  Lr = c("$ZodCheckOverwrite", (e, n) => {
    (T.init(e, n),
      (e._zod.check = (r) => {
        r.value = n.tx(r.value);
      }));
  });
var Je = class {
  constructor(n = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = n));
  }
  indented(n) {
    ((this.indent += 1), n(this), (this.indent -= 1));
  }
  write(n) {
    if (typeof n == "function") {
      (n(this, { execution: "sync" }), n(this, { execution: "async" }));
      return;
    }
    let i = n
        .split(
          `
`,
        )
        .filter((a) => a),
      t = Math.min(...i.map((a) => a.length - a.trimStart().length)),
      o = i.map((a) => a.slice(t)).map((a) => " ".repeat(this.indent * 2) + a);
    for (let a of o) this.content.push(a);
  }
  compile() {
    let n = Function,
      r = this?.args,
      t = [...(this?.content ?? [""]).map((o) => `  ${o}`)];
    return new n(
      ...r,
      t.join(`
`),
    );
  }
};
var Mr = { major: 4, minor: 0, patch: 0 };
var z = c("$ZodType", (e, n) => {
    var r;
    (e ?? (e = {}),
      (e._zod.id = n.type + "_" + St(10)),
      (e._zod.def = n),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Mr));
    let i = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (let t of i) for (let o of t._zod.onattach) o(e);
    if (i.length === 0)
      ((r = e._zod).deferred ?? (r.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let t = (o, a, s) => {
        let l = ve(o),
          u;
        for (let m of a) {
          if (m._zod.when) {
            if (!m._zod.when(o)) continue;
          } else if (l) continue;
          let p = o.issues.length,
            f = m._zod.check(o);
          if (f instanceof Promise && s?.async === !1) throw new X();
          if (u || f instanceof Promise)
            u = (u ?? Promise.resolve()).then(async () => {
              (await f, o.issues.length !== p && (l || (l = ve(o, p))));
            });
          else {
            if (o.issues.length === p) continue;
            l || (l = ve(o, p));
          }
        }
        return u ? u.then(() => o) : o;
      };
      e._zod.run = (o, a) => {
        let s = e._zod.parse(o, a);
        if (s instanceof Promise) {
          if (a.async === !1) throw new X();
          return s.then((l) => t(l, i, a));
        }
        return t(s, i, a);
      };
    }
    e["~standard"] = {
      validate: (t) => {
        try {
          let o = Fn(e, t);
          return o.success ? { value: o.data } : { issues: o.error?.issues };
        } catch {
          return Kn(e, t).then((a) =>
            a.success ? { value: a.data } : { issues: a.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  Xe = c("$ZodString", (e, n) => {
    (z.init(e, n),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? fr(e._zod.bag)),
      (e._zod.parse = (r, i) => {
        if (n.coerce)
          try {
            r.value = String(r.value);
          } catch {}
        return (
          typeof r.value == "string" ||
            r.issues.push({
              expected: "string",
              code: "invalid_type",
              input: r.value,
              inst: e,
            }),
          r
        );
      }));
  }),
  N = c("$ZodStringFormat", (e, n) => {
    (Ae.init(e, n), Xe.init(e, n));
  }),
  Hr = c("$ZodGUID", (e, n) => {
    (n.pattern ?? (n.pattern = nr), N.init(e, n));
  }),
  Br = c("$ZodUUID", (e, n) => {
    if (n.version) {
      let i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        n.version
      ];
      if (i === void 0) throw new Error(`Invalid UUID version: "${n.version}"`);
      n.pattern ?? (n.pattern = ye(i));
    } else n.pattern ?? (n.pattern = ye());
    N.init(e, n);
  }),
  Wr = c("$ZodEmail", (e, n) => {
    (n.pattern ?? (n.pattern = rr), N.init(e, n));
  }),
  Fr = c("$ZodURL", (e, n) => {
    (N.init(e, n),
      (e._zod.check = (r) => {
        try {
          let i = new URL(r.value);
          (n.hostname &&
            ((n.hostname.lastIndex = 0),
            n.hostname.test(i.hostname) ||
              r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: cr.source,
                input: r.value,
                inst: e,
                continue: !n.abort,
              })),
            n.protocol &&
              ((n.protocol.lastIndex = 0),
              n.protocol.test(
                i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol,
              ) ||
                r.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: n.protocol.source,
                  input: r.value,
                  inst: e,
                  continue: !n.abort,
                })));
          return;
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            input: r.value,
            inst: e,
            continue: !n.abort,
          });
        }
      }));
  }),
  Kr = c("$ZodEmoji", (e, n) => {
    (n.pattern ?? (n.pattern = or()), N.init(e, n));
  }),
  Gr = c("$ZodNanoID", (e, n) => {
    (n.pattern ?? (n.pattern = er), N.init(e, n));
  }),
  Yr = c("$ZodCUID", (e, n) => {
    (n.pattern ?? (n.pattern = Gn), N.init(e, n));
  }),
  Jr = c("$ZodCUID2", (e, n) => {
    (n.pattern ?? (n.pattern = Yn), N.init(e, n));
  }),
  Xr = c("$ZodULID", (e, n) => {
    (n.pattern ?? (n.pattern = Jn), N.init(e, n));
  }),
  Qr = c("$ZodXID", (e, n) => {
    (n.pattern ?? (n.pattern = Xn), N.init(e, n));
  }),
  eo = c("$ZodKSUID", (e, n) => {
    (n.pattern ?? (n.pattern = Qn), N.init(e, n));
  }),
  to = c("$ZodISODateTime", (e, n) => {
    (n.pattern ?? (n.pattern = pr(n)), N.init(e, n));
  }),
  no = c("$ZodISODate", (e, n) => {
    (n.pattern ?? (n.pattern = _r), N.init(e, n));
  }),
  ro = c("$ZodISOTime", (e, n) => {
    (n.pattern ?? (n.pattern = mr(n)), N.init(e, n));
  }),
  oo = c("$ZodISODuration", (e, n) => {
    (n.pattern ?? (n.pattern = tr), N.init(e, n));
  }),
  io = c("$ZodIPv4", (e, n) => {
    (n.pattern ?? (n.pattern = ir),
      N.init(e, n),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag;
        i.format = "ipv4";
      }));
  }),
  ao = c("$ZodIPv6", (e, n) => {
    (n.pattern ?? (n.pattern = ar),
      N.init(e, n),
      e._zod.onattach.push((r) => {
        let i = r._zod.bag;
        i.format = "ipv6";
      }),
      (e._zod.check = (r) => {
        try {
          new URL(`http://[${r.value}]`);
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: r.value,
            inst: e,
            continue: !n.abort,
          });
        }
      }));
  }),
  so = c("$ZodCIDRv4", (e, n) => {
    (n.pattern ?? (n.pattern = sr), N.init(e, n));
  }),
  uo = c("$ZodCIDRv6", (e, n) => {
    (n.pattern ?? (n.pattern = ur),
      N.init(e, n),
      (e._zod.check = (r) => {
        let [i, t] = r.value.split("/");
        try {
          if (!t) throw new Error();
          let o = Number(t);
          if (`${o}` !== t) throw new Error();
          if (o < 0 || o > 128) throw new Error();
          new URL(`http://[${i}]`);
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: r.value,
            inst: e,
            continue: !n.abort,
          });
        }
      }));
  });
function lo(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var co = c("$ZodBase64", (e, n) => {
  (n.pattern ?? (n.pattern = lr),
    N.init(e, n),
    e._zod.onattach.push((r) => {
      r._zod.bag.contentEncoding = "base64";
    }),
    (e._zod.check = (r) => {
      lo(r.value) ||
        r.issues.push({
          code: "invalid_format",
          format: "base64",
          input: r.value,
          inst: e,
          continue: !n.abort,
        });
    }));
});
function Ba(e) {
  if (!Nt.test(e)) return !1;
  let n = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    r = n.padEnd(Math.ceil(n.length / 4) * 4, "=");
  return lo(r);
}
var _o = c("$ZodBase64URL", (e, n) => {
    (n.pattern ?? (n.pattern = Nt),
      N.init(e, n),
      e._zod.onattach.push((r) => {
        r._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (r) => {
        Ba(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  mo = c("$ZodE164", (e, n) => {
    (n.pattern ?? (n.pattern = dr), N.init(e, n));
  });
function Wa(e, n = null) {
  try {
    let r = e.split(".");
    if (r.length !== 3) return !1;
    let [i] = r,
      t = JSON.parse(atob(i));
    return !(
      ("typ" in t && t?.typ !== "JWT") ||
      !t.alg ||
      (n && (!("alg" in t) || t.alg !== n))
    );
  } catch {
    return !1;
  }
}
var po = c("$ZodJWT", (e, n) => {
    (N.init(e, n),
      (e._zod.check = (r) => {
        Wa(r.value, n.alg) ||
          r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: e,
            continue: !n.abort,
          });
      }));
  }),
  Ct = c("$ZodNumber", (e, n) => {
    (z.init(e, n),
      (e._zod.pattern = e._zod.bag.pattern ?? vr),
      (e._zod.parse = (r, i) => {
        if (n.coerce)
          try {
            r.value = Number(r.value);
          } catch {}
        let t = r.value;
        if (typeof t == "number" && !Number.isNaN(t) && Number.isFinite(t))
          return r;
        let o =
          typeof t == "number"
            ? Number.isNaN(t)
              ? "NaN"
              : Number.isFinite(t)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: t,
            inst: e,
            ...(o ? { received: o } : {}),
          }),
          r
        );
      }));
  }),
  fo = c("$ZodNumber", (e, n) => {
    (zr.init(e, n), Ct.init(e, n));
  }),
  Qe = c("$ZodBoolean", (e, n) => {
    (z.init(e, n),
      (e._zod.pattern = yr),
      (e._zod.parse = (r, i) => {
        if (n.coerce)
          try {
            r.value = !!r.value;
          } catch {}
        let t = r.value;
        return (
          typeof t == "boolean" ||
            r.issues.push({
              expected: "boolean",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          r
        );
      }));
  }),
  Rt = c("$ZodBigInt", (e, n) => {
    (z.init(e, n),
      (e._zod.pattern = gr),
      (e._zod.parse = (r, i) => {
        if (n.coerce)
          try {
            r.value = BigInt(r.value);
          } catch {}
        let { value: t } = r;
        return (
          typeof t == "bigint" ||
            r.issues.push({
              expected: "bigint",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          r
        );
      }));
  }),
  go = c("$ZodBigInt", (e, n) => {
    (Sr.init(e, n), Rt.init(e, n));
  }),
  ho = c("$ZodSymbol", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        let { value: t } = r;
        return (
          typeof t == "symbol" ||
            r.issues.push({
              expected: "symbol",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          r
        );
      }));
  }),
  vo = c("$ZodUndefined", (e, n) => {
    (z.init(e, n),
      (e._zod.pattern = wr),
      (e._zod.values = new Set([void 0])),
      (e._zod.parse = (r, i) => {
        let { value: t } = r;
        return (
          typeof t > "u" ||
            r.issues.push({
              expected: "undefined",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          r
        );
      }));
  }),
  yo = c("$ZodNull", (e, n) => {
    (z.init(e, n),
      (e._zod.pattern = br),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (r, i) => {
        let { value: t } = r;
        return (
          t === null ||
            r.issues.push({
              expected: "null",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          r
        );
      }));
  }),
  bo = c("$ZodAny", (e, n) => {
    (z.init(e, n), (e._zod.parse = (r) => r));
  }),
  me = c("$ZodUnknown", (e, n) => {
    (z.init(e, n), (e._zod.parse = (r) => r));
  }),
  wo = c("$ZodNever", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => (
        r.issues.push({
          expected: "never",
          code: "invalid_type",
          input: r.value,
          inst: e,
        }),
        r
      )));
  }),
  ko = c("$ZodVoid", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        let { value: t } = r;
        return (
          typeof t > "u" ||
            r.issues.push({
              expected: "void",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          r
        );
      }));
  }),
  xo = c("$ZodDate", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        if (n.coerce)
          try {
            r.value = new Date(r.value);
          } catch {}
        let t = r.value,
          o = t instanceof Date;
        return (
          (o && !Number.isNaN(t.getTime())) ||
            r.issues.push({
              expected: "date",
              code: "invalid_type",
              input: t,
              ...(o ? { received: "Invalid Date" } : {}),
              inst: e,
            }),
          r
        );
      }));
  });
function Ea(e, n, r) {
  (e.issues.length && n.issues.push(...V(r, e.issues)), (n.value[r] = e.value));
}
var et = c("$ZodArray", (e, n) => {
  (z.init(e, n),
    (e._zod.parse = (r, i) => {
      let t = r.value;
      if (!Array.isArray(t))
        return (
          r.issues.push({
            expected: "array",
            code: "invalid_type",
            input: t,
            inst: e,
          }),
          r
        );
      r.value = Array(t.length);
      let o = [];
      for (let a = 0; a < t.length; a++) {
        let s = t[a],
          l = n.element._zod.run({ value: s, issues: [] }, i);
        l instanceof Promise ? o.push(l.then((u) => Ea(u, r, a))) : Ea(l, r, a);
      }
      return o.length ? Promise.all(o).then(() => r) : r;
    }));
});
function Ut(e, n, r) {
  (e.issues.length && n.issues.push(...V(r, e.issues)), (n.value[r] = e.value));
}
function Ta(e, n, r, i) {
  e.issues.length
    ? i[r] === void 0
      ? r in i
        ? (n.value[r] = void 0)
        : (n.value[r] = e.value)
      : n.issues.push(...V(r, e.issues))
    : e.value === void 0
      ? r in i && (n.value[r] = void 0)
      : (n.value[r] = e.value);
}
var $o = c("$ZodObject", (e, n) => {
  z.init(e, n);
  let r = Me(() => {
    let p = Object.keys(n.shape);
    for (let d of p)
      if (!(n.shape[d] instanceof z))
        throw new Error(`Invalid element at key "${d}": expected a Zod schema`);
    let f = Ln(n.shape);
    return {
      shape: n.shape,
      keys: p,
      keySet: new Set(p),
      numKeys: p.length,
      optionalKeys: new Set(f),
    };
  });
  O(e._zod, "propValues", () => {
    let p = n.shape,
      f = {};
    for (let d in p) {
      let v = p[d]._zod;
      if (v.values) {
        f[d] ?? (f[d] = new Set());
        for (let k of v.values) f[d].add(k);
      }
    }
    return f;
  });
  let i = (p) => {
      let f = new Je(["shape", "payload", "ctx"]),
        { keys: d, optionalKeys: v } = r.value,
        k = (S) => {
          let I = he(S);
          return `shape[${I}]._zod.run({ value: input[${I}], issues: [] }, ctx)`;
        };
      f.write("const input = payload.value;");
      let w = Object.create(null);
      for (let S of d) w[S] = St(15);
      f.write("const newResult = {}");
      for (let S of d)
        if (v.has(S)) {
          let I = w[S];
          f.write(`const ${I} = ${k(S)};`);
          let g = he(S);
          f.write(`
        if (${I}.issues.length) {
          if (input[${g}] === undefined) {
            if (${g} in input) {
              newResult[${g}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${I}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${g}, ...iss.path] : [${g}],
              }))
            );
          }
        } else if (${I}.value === undefined) {
          if (${g} in input) newResult[${g}] = undefined;
        } else {
          newResult[${g}] = ${I}.value;
        }
        `);
        } else {
          let I = w[S];
          (f.write(`const ${I} = ${k(S)};`),
            f.write(`
          if (${I}.issues.length) payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${he(S)}, ...iss.path] : [${he(S)}]
          })));`),
            f.write(`newResult[${he(S)}] = ${I}.value`));
        }
      (f.write("payload.value = newResult;"), f.write("return payload;"));
      let $ = f.compile();
      return (S, I) => $(p, S, I);
    },
    t,
    o = Se,
    a = !Re.jitless,
    l = a && Rn.value,
    { catchall: u } = n,
    m;
  e._zod.parse = (p, f) => {
    m ?? (m = r.value);
    let d = p.value;
    if (!o(d))
      return (
        p.issues.push({
          expected: "object",
          code: "invalid_type",
          input: d,
          inst: e,
        }),
        p
      );
    let v = [];
    if (a && l && f?.async === !1 && f.jitless !== !0)
      (t || (t = i(n.shape)), (p = t(p, f)));
    else {
      p.value = {};
      let I = m.shape;
      for (let g of m.keys) {
        let x = I[g],
          A = x._zod.run({ value: d[g], issues: [] }, f),
          P = x._zod.optin === "optional" && x._zod.optout === "optional";
        A instanceof Promise
          ? v.push(A.then((Z) => (P ? Ta(Z, p, g, d) : Ut(Z, p, g))))
          : P
            ? Ta(A, p, g, d)
            : Ut(A, p, g);
      }
    }
    if (!u) return v.length ? Promise.all(v).then(() => p) : p;
    let k = [],
      w = m.keySet,
      $ = u._zod,
      S = $.def.type;
    for (let I of Object.keys(d)) {
      if (w.has(I)) continue;
      if (S === "never") {
        k.push(I);
        continue;
      }
      let g = $.run({ value: d[I], issues: [] }, f);
      g instanceof Promise ? v.push(g.then((x) => Ut(x, p, I))) : Ut(g, p, I);
    }
    return (
      k.length &&
        p.issues.push({
          code: "unrecognized_keys",
          keys: k,
          input: d,
          inst: e,
        }),
      v.length ? Promise.all(v).then(() => p) : p
    );
  };
});
function Ua(e, n, r, i) {
  for (let t of e) if (t.issues.length === 0) return ((n.value = t.value), n);
  return (
    n.issues.push({
      code: "invalid_union",
      input: n.value,
      inst: r,
      errors: e.map((t) => t.issues.map((o) => H(o, i, U()))),
    }),
    n
  );
}
var Vt = c("$ZodUnion", (e, n) => {
    (z.init(e, n),
      O(e._zod, "values", () => {
        if (n.options.every((r) => r._zod.values))
          return new Set(n.options.flatMap((r) => Array.from(r._zod.values)));
      }),
      O(e._zod, "pattern", () => {
        if (n.options.every((r) => r._zod.pattern)) {
          let r = n.options.map((i) => i._zod.pattern);
          return new RegExp(`^(${r.map((i) => qe(i.source)).join("|")})$`);
        }
      }),
      (e._zod.parse = (r, i) => {
        let t = !1,
          o = [];
        for (let a of n.options) {
          let s = a._zod.run({ value: r.value, issues: [] }, i);
          if (s instanceof Promise) (o.push(s), (t = !0));
          else {
            if (s.issues.length === 0) return s;
            o.push(s);
          }
        }
        return t ? Promise.all(o).then((a) => Ua(a, r, e, i)) : Ua(o, r, e, i);
      }));
  }),
  zo = c("$ZodDiscriminatedUnion", (e, n) => {
    Vt.init(e, n);
    let r = e._zod.parse;
    O(e._zod, "propValues", () => {
      let t = {};
      for (let o of n.options) {
        let a = o._zod.propValues;
        if (!a || Object.keys(a).length === 0)
          throw new Error(
            `Invalid discriminated union option at index "${n.options.indexOf(o)}"`,
          );
        for (let [s, l] of Object.entries(a)) {
          t[s] || (t[s] = new Set());
          for (let u of l) t[s].add(u);
        }
      }
      return t;
    });
    let i = Me(() => {
      let t = n.options,
        o = new Map();
      for (let a of t) {
        let s = a._zod.propValues[n.discriminator];
        if (!s || s.size === 0)
          throw new Error(
            `Invalid discriminated union option at index "${n.options.indexOf(a)}"`,
          );
        for (let l of s) {
          if (o.has(l))
            throw new Error(`Duplicate discriminator value "${String(l)}"`);
          o.set(l, a);
        }
      }
      return o;
    });
    e._zod.parse = (t, o) => {
      let a = t.value;
      if (!Se(a))
        return (
          t.issues.push({
            code: "invalid_type",
            expected: "object",
            input: a,
            inst: e,
          }),
          t
        );
      let s = i.value.get(a?.[n.discriminator]);
      return s
        ? s._zod.run(t, o)
        : n.unionFallback
          ? r(t, o)
          : (t.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              input: a,
              path: [n.discriminator],
              inst: e,
            }),
            t);
    };
  }),
  So = c("$ZodIntersection", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        let { value: t } = r,
          o = n.left._zod.run({ value: t, issues: [] }, i),
          a = n.right._zod.run({ value: t, issues: [] }, i);
        return o instanceof Promise || a instanceof Promise
          ? Promise.all([o, a]).then(([l, u]) => Za(r, l, u))
          : Za(r, o, a);
      }));
  });
function qr(e, n) {
  if (e === n) return { valid: !0, data: e };
  if (e instanceof Date && n instanceof Date && +e == +n)
    return { valid: !0, data: e };
  if (He(e) && He(n)) {
    let r = Object.keys(n),
      i = Object.keys(e).filter((o) => r.indexOf(o) !== -1),
      t = { ...e, ...n };
    for (let o of i) {
      let a = qr(e[o], n[o]);
      if (!a.valid)
        return { valid: !1, mergeErrorPath: [o, ...a.mergeErrorPath] };
      t[o] = a.data;
    }
    return { valid: !0, data: t };
  }
  if (Array.isArray(e) && Array.isArray(n)) {
    if (e.length !== n.length) return { valid: !1, mergeErrorPath: [] };
    let r = [];
    for (let i = 0; i < e.length; i++) {
      let t = e[i],
        o = n[i],
        a = qr(t, o);
      if (!a.valid)
        return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Za(e, n, r) {
  if (
    (n.issues.length && e.issues.push(...n.issues),
    r.issues.length && e.issues.push(...r.issues),
    ve(e))
  )
    return e;
  let i = qr(n.value, r.value);
  if (!i.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`,
    );
  return ((e.value = i.data), e);
}
var we = c("$ZodTuple", (e, n) => {
  z.init(e, n);
  let r = n.items,
    i =
      r.length - [...r].reverse().findIndex((t) => t._zod.optin !== "optional");
  e._zod.parse = (t, o) => {
    let a = t.value;
    if (!Array.isArray(a))
      return (
        t.issues.push({
          input: a,
          inst: e,
          expected: "tuple",
          code: "invalid_type",
        }),
        t
      );
    t.value = [];
    let s = [];
    if (!n.rest) {
      let u = a.length > r.length,
        m = a.length < i - 1;
      if (u || m)
        return (
          t.issues.push({
            input: a,
            inst: e,
            origin: "array",
            ...(u
              ? { code: "too_big", maximum: r.length }
              : { code: "too_small", minimum: r.length }),
          }),
          t
        );
    }
    let l = -1;
    for (let u of r) {
      if ((l++, l >= a.length && l >= i)) continue;
      let m = u._zod.run({ value: a[l], issues: [] }, o);
      m instanceof Promise ? s.push(m.then((p) => Zt(p, t, l))) : Zt(m, t, l);
    }
    if (n.rest) {
      let u = a.slice(r.length);
      for (let m of u) {
        l++;
        let p = n.rest._zod.run({ value: m, issues: [] }, o);
        p instanceof Promise ? s.push(p.then((f) => Zt(f, t, l))) : Zt(p, t, l);
      }
    }
    return s.length ? Promise.all(s).then(() => t) : t;
  };
});
function Zt(e, n, r) {
  (e.issues.length && n.issues.push(...V(r, e.issues)), (n.value[r] = e.value));
}
var Io = c("$ZodRecord", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        let t = r.value;
        if (!He(t))
          return (
            r.issues.push({
              expected: "record",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
            r
          );
        let o = [];
        if (n.keyType._zod.values) {
          let a = n.keyType._zod.values;
          r.value = {};
          for (let l of a)
            if (
              typeof l == "string" ||
              typeof l == "number" ||
              typeof l == "symbol"
            ) {
              let u = n.valueType._zod.run({ value: t[l], issues: [] }, i);
              u instanceof Promise
                ? o.push(
                    u.then((m) => {
                      (m.issues.length && r.issues.push(...V(l, m.issues)),
                        (r.value[l] = m.value));
                    }),
                  )
                : (u.issues.length && r.issues.push(...V(l, u.issues)),
                  (r.value[l] = u.value));
            }
          let s;
          for (let l in t) a.has(l) || ((s = s ?? []), s.push(l));
          s &&
            s.length > 0 &&
            r.issues.push({
              code: "unrecognized_keys",
              input: t,
              inst: e,
              keys: s,
            });
        } else {
          r.value = {};
          for (let a of Reflect.ownKeys(t)) {
            if (a === "__proto__") continue;
            let s = n.keyType._zod.run({ value: a, issues: [] }, i);
            if (s instanceof Promise)
              throw new Error(
                "Async schemas not supported in object keys currently",
              );
            if (s.issues.length) {
              (r.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: s.issues.map((u) => H(u, i, U())),
                input: a,
                path: [a],
                inst: e,
              }),
                (r.value[s.value] = s.value));
              continue;
            }
            let l = n.valueType._zod.run({ value: t[a], issues: [] }, i);
            l instanceof Promise
              ? o.push(
                  l.then((u) => {
                    (u.issues.length && r.issues.push(...V(a, u.issues)),
                      (r.value[s.value] = u.value));
                  }),
                )
              : (l.issues.length && r.issues.push(...V(a, l.issues)),
                (r.value[s.value] = l.value));
          }
        }
        return o.length ? Promise.all(o).then(() => r) : r;
      }));
  }),
  Ao = c("$ZodMap", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        let t = r.value;
        if (!(t instanceof Map))
          return (
            r.issues.push({
              expected: "map",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
            r
          );
        let o = [];
        r.value = new Map();
        for (let [a, s] of t) {
          let l = n.keyType._zod.run({ value: a, issues: [] }, i),
            u = n.valueType._zod.run({ value: s, issues: [] }, i);
          l instanceof Promise || u instanceof Promise
            ? o.push(
                Promise.all([l, u]).then(([m, p]) => {
                  Ca(m, p, r, a, t, e, i);
                }),
              )
            : Ca(l, u, r, a, t, e, i);
        }
        return o.length ? Promise.all(o).then(() => r) : r;
      }));
  });
function Ca(e, n, r, i, t, o, a) {
  (e.issues.length &&
    (Be.has(typeof i)
      ? r.issues.push(...V(i, e.issues))
      : r.issues.push({
          origin: "map",
          code: "invalid_key",
          input: t,
          inst: o,
          issues: e.issues.map((s) => H(s, a, U())),
        })),
    n.issues.length &&
      (Be.has(typeof i)
        ? r.issues.push(...V(i, n.issues))
        : r.issues.push({
            origin: "map",
            code: "invalid_element",
            input: t,
            inst: o,
            key: i,
            issues: n.issues.map((s) => H(s, a, U())),
          })),
    r.value.set(e.value, n.value));
}
var Do = c("$ZodSet", (e, n) => {
  (z.init(e, n),
    (e._zod.parse = (r, i) => {
      let t = r.value;
      if (!(t instanceof Set))
        return (
          r.issues.push({
            input: t,
            inst: e,
            expected: "set",
            code: "invalid_type",
          }),
          r
        );
      let o = [];
      r.value = new Set();
      for (let a of t) {
        let s = n.valueType._zod.run({ value: a, issues: [] }, i);
        s instanceof Promise ? o.push(s.then((l) => Ra(l, r))) : Ra(s, r);
      }
      return o.length ? Promise.all(o).then(() => r) : r;
    }));
});
function Ra(e, n) {
  (e.issues.length && n.issues.push(...e.issues), n.value.add(e.value));
}
var jo = c("$ZodEnum", (e, n) => {
    z.init(e, n);
    let r = Le(n.entries);
    ((e._zod.values = new Set(r)),
      (e._zod.pattern = new RegExp(
        `^(${r
          .filter((i) => Be.has(typeof i))
          .map((i) => (typeof i == "string" ? oe(i) : i.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (i, t) => {
        let o = i.value;
        return (
          e._zod.values.has(o) ||
            i.issues.push({
              code: "invalid_value",
              values: r,
              input: o,
              inst: e,
            }),
          i
        );
      }));
  }),
  Po = c("$ZodLiteral", (e, n) => {
    (z.init(e, n),
      (e._zod.values = new Set(n.values)),
      (e._zod.pattern = new RegExp(
        `^(${n.values.map((r) => (typeof r == "string" ? oe(r) : r ? r.toString() : String(r))).join("|")})$`,
      )),
      (e._zod.parse = (r, i) => {
        let t = r.value;
        return (
          e._zod.values.has(t) ||
            r.issues.push({
              code: "invalid_value",
              values: n.values,
              input: t,
              inst: e,
            }),
          r
        );
      }));
  }),
  Oo = c("$ZodFile", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        let t = r.value;
        return (
          t instanceof File ||
            r.issues.push({
              expected: "file",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          r
        );
      }));
  }),
  No = c("$ZodTransform", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        let t = n.transform(r.value, r);
        if (i.async)
          return (t instanceof Promise ? t : Promise.resolve(t)).then(
            (a) => ((r.value = a), r),
          );
        if (t instanceof Promise) throw new X();
        return ((r.value = t), r);
      }));
  }),
  Eo = c("$ZodOptional", (e, n) => {
    (z.init(e, n),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      O(e._zod, "values", () =>
        n.innerType._zod.values
          ? new Set([...n.innerType._zod.values, void 0])
          : void 0,
      ),
      O(e._zod, "pattern", () => {
        let r = n.innerType._zod.pattern;
        return r ? new RegExp(`^(${qe(r.source)})?$`) : void 0;
      }),
      (e._zod.parse = (r, i) =>
        r.value === void 0 ? r : n.innerType._zod.run(r, i)));
  }),
  To = c("$ZodNullable", (e, n) => {
    (z.init(e, n),
      O(e._zod, "optin", () => n.innerType._zod.optin),
      O(e._zod, "optout", () => n.innerType._zod.optout),
      O(e._zod, "pattern", () => {
        let r = n.innerType._zod.pattern;
        return r ? new RegExp(`^(${qe(r.source)}|null)$`) : void 0;
      }),
      O(e._zod, "values", () =>
        n.innerType._zod.values
          ? new Set([...n.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (r, i) =>
        r.value === null ? r : n.innerType._zod.run(r, i)));
  }),
  Uo = c("$ZodDefault", (e, n) => {
    (z.init(e, n),
      (e._zod.optin = "optional"),
      O(e._zod, "values", () => n.innerType._zod.values),
      (e._zod.parse = (r, i) => {
        if (r.value === void 0) return ((r.value = n.defaultValue), r);
        let t = n.innerType._zod.run(r, i);
        return t instanceof Promise ? t.then((o) => Va(o, n)) : Va(t, n);
      }));
  });
function Va(e, n) {
  return (e.value === void 0 && (e.value = n.defaultValue), e);
}
var Zo = c("$ZodPrefault", (e, n) => {
    (z.init(e, n),
      (e._zod.optin = "optional"),
      O(e._zod, "values", () => n.innerType._zod.values),
      (e._zod.parse = (r, i) => (
        r.value === void 0 && (r.value = n.defaultValue),
        n.innerType._zod.run(r, i)
      )));
  }),
  Co = c("$ZodNonOptional", (e, n) => {
    (z.init(e, n),
      O(e._zod, "values", () => {
        let r = n.innerType._zod.values;
        return r ? new Set([...r].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (r, i) => {
        let t = n.innerType._zod.run(r, i);
        return t instanceof Promise ? t.then((o) => La(o, e)) : La(t, e);
      }));
  });
function La(e, n) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: n,
      }),
    e
  );
}
var Ro = c("$ZodSuccess", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => {
        let t = n.innerType._zod.run(r, i);
        return t instanceof Promise
          ? t.then((o) => ((r.value = o.issues.length === 0), r))
          : ((r.value = t.issues.length === 0), r);
      }));
  }),
  Vo = c("$ZodCatch", (e, n) => {
    (z.init(e, n),
      O(e._zod, "optin", () => n.innerType._zod.optin),
      O(e._zod, "optout", () => n.innerType._zod.optout),
      O(e._zod, "values", () => n.innerType._zod.values),
      (e._zod.parse = (r, i) => {
        let t = n.innerType._zod.run(r, i);
        return t instanceof Promise
          ? t.then(
              (o) => (
                (r.value = o.value),
                o.issues.length &&
                  ((r.value = n.catchValue({
                    ...r,
                    error: { issues: o.issues.map((a) => H(a, i, U())) },
                    input: r.value,
                  })),
                  (r.issues = [])),
                r
              ),
            )
          : ((r.value = t.value),
            t.issues.length &&
              ((r.value = n.catchValue({
                ...r,
                error: { issues: t.issues.map((o) => H(o, i, U())) },
                input: r.value,
              })),
              (r.issues = [])),
            r);
      }));
  }),
  Lo = c("$ZodNaN", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) => (
        (typeof r.value != "number" || !Number.isNaN(r.value)) &&
          r.issues.push({
            input: r.value,
            inst: e,
            expected: "nan",
            code: "invalid_type",
          }),
        r
      )));
  }),
  tt = c("$ZodPipe", (e, n) => {
    (z.init(e, n),
      O(e._zod, "values", () => n.in._zod.values),
      O(e._zod, "optin", () => n.in._zod.optin),
      O(e._zod, "optout", () => n.out._zod.optout),
      (e._zod.parse = (r, i) => {
        let t = n.in._zod.run(r, i);
        return t instanceof Promise ? t.then((o) => Ma(o, n, i)) : Ma(t, n, i);
      }));
  });
function Ma(e, n, r) {
  return ve(e) ? e : n.out._zod.run({ value: e.value, issues: e.issues }, r);
}
var Mo = c("$ZodReadonly", (e, n) => {
  (z.init(e, n),
    O(e._zod, "propValues", () => n.innerType._zod.propValues),
    O(e._zod, "optin", () => n.innerType._zod.optin),
    O(e._zod, "optout", () => n.innerType._zod.optout),
    (e._zod.parse = (r, i) => {
      let t = n.innerType._zod.run(r, i);
      return t instanceof Promise ? t.then(qa) : qa(t);
    }));
});
function qa(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var qo = c("$ZodTemplateLiteral", (e, n) => {
    z.init(e, n);
    let r = [];
    for (let i of n.parts)
      if (i instanceof z) {
        if (!i._zod.pattern)
          throw new Error(
            `Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`,
          );
        let t =
          i._zod.pattern instanceof RegExp
            ? i._zod.pattern.source
            : i._zod.pattern;
        if (!t)
          throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        let o = t.startsWith("^") ? 1 : 0,
          a = t.endsWith("$") ? t.length - 1 : t.length;
        r.push(t.slice(o, a));
      } else if (i === null || Vn.has(typeof i)) r.push(oe(`${i}`));
      else throw new Error(`Invalid template literal part: ${i}`);
    ((e._zod.pattern = new RegExp(`^${r.join("")}$`)),
      (e._zod.parse = (i, t) =>
        typeof i.value != "string"
          ? (i.issues.push({
              input: i.value,
              inst: e,
              expected: "template_literal",
              code: "invalid_type",
            }),
            i)
          : ((e._zod.pattern.lastIndex = 0),
            e._zod.pattern.test(i.value) ||
              i.issues.push({
                input: i.value,
                inst: e,
                code: "invalid_format",
                format: "template_literal",
                pattern: e._zod.pattern.source,
              }),
            i)));
  }),
  Ho = c("$ZodPromise", (e, n) => {
    (z.init(e, n),
      (e._zod.parse = (r, i) =>
        Promise.resolve(r.value).then((t) =>
          n.innerType._zod.run({ value: t, issues: [] }, i),
        )));
  }),
  Bo = c("$ZodLazy", (e, n) => {
    (z.init(e, n),
      O(e._zod, "innerType", () => n.getter()),
      O(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
      O(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
      O(e._zod, "optin", () => e._zod.innerType._zod.optin),
      O(e._zod, "optout", () => e._zod.innerType._zod.optout),
      (e._zod.parse = (r, i) => e._zod.innerType._zod.run(r, i)));
  }),
  Wo = c("$ZodCustom", (e, n) => {
    (T.init(e, n),
      z.init(e, n),
      (e._zod.parse = (r, i) => r),
      (e._zod.check = (r) => {
        let i = r.value,
          t = n.fn(i);
        if (t instanceof Promise) return t.then((o) => Ha(o, r, i, e));
        Ha(t, r, i, e);
      }));
  });
function Ha(e, n, r, i) {
  if (!e) {
    let t = {
      code: "custom",
      input: r,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (t.params = i._zod.def.params), n.issues.push(Hn(t)));
  }
}
var nt = {};
fe(nt, {
  ar: () => Ka,
  az: () => Ga,
  be: () => Ja,
  ca: () => Xa,
  cs: () => Qa,
  de: () => es,
  en: () => Lt,
  es: () => ts,
  fa: () => ns,
  fi: () => rs,
  fr: () => os,
  frCA: () => is,
  he: () => as,
  hu: () => ss,
  id: () => us,
  it: () => ls,
  ja: () => cs,
  kh: () => ds,
  ko: () => _s,
  mk: () => ms,
  ms: () => ps,
  nl: () => fs,
  no: () => gs,
  ota: () => hs,
  pl: () => vs,
  pt: () => ys,
  ru: () => ws,
  sl: () => ks,
  sv: () => xs,
  ta: () => $s,
  th: () => zs,
  tr: () => Ss,
  ua: () => Is,
  ur: () => As,
  vi: () => Ds,
  zhCN: () => js,
  zhTW: () => Ps,
});
var gl = () => {
  let e = {
    string: {
      unit: "\u062D\u0631\u0641",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    file: {
      unit: "\u0628\u0627\u064A\u062A",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    array: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    set: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0645\u062F\u062E\u0644",
      email:
        "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      url: "\u0631\u0627\u0628\u0637",
      emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
      ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
      cidrv4:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
      cidrv6:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
      base64:
        "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
      base64url:
        "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
      json_string:
        "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
      e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
      jwt: "JWT",
      template_literal: "\u0645\u062F\u062E\u0644",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${t.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${b(t.values[0])}`
          : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"}`
          : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${t.minimum.toString()} ${a.unit}`
          : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${t.prefix}"`
          : o.format === "ends_with"
            ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${o.suffix}"`
            : o.format === "includes"
              ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${o.includes}"`
              : o.format === "regex"
                ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${o.pattern}`
                : `${i[o.format] ?? t.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${t.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${t.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${t.keys.length > 1 ? "\u0629" : ""}: ${_(t.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function Ka() {
  return { localeError: gl() };
}
var hl = () => {
  let e = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${t.expected}, daxil olan ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${b(t.values[0])}`
          : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${o}${t.maximum.toString()} ${a.unit ?? "element"}`
          : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${o}${t.minimum.toString()} ${a.unit}`
          : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Yanl\u0131\u015F m\u0259tn: "${o.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
          : o.format === "ends_with"
            ? `Yanl\u0131\u015F m\u0259tn: "${o.suffix}" il\u0259 bitm\u0259lidir`
            : o.format === "includes"
              ? `Yanl\u0131\u015F m\u0259tn: "${o.includes}" daxil olmal\u0131d\u0131r`
              : o.format === "regex"
                ? `Yanl\u0131\u015F m\u0259tn: ${o.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                : `Yanl\u0131\u015F ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${t.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${t.keys.length > 1 ? "lar" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${t.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
};
function Ga() {
  return { localeError: hl() };
}
function Ya(e, n, r, i) {
  let t = Math.abs(e),
    o = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : o === 1 ? n : o >= 2 && o <= 4 ? r : i;
}
var vl = () => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u043B\u0456\u043A";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0456\u045E";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0443\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0430\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0447\u0430\u0441",
      duration:
        "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
      cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
      base64url:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
      json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
      e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0443\u0432\u043E\u0434",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${t.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${b(t.values[0])}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        if (a) {
          let s = Number(t.maximum),
            l = Ya(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${o}${t.maximum.toString()} ${l}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        if (a) {
          let s = Number(t.minimum),
            l = Ya(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${o}${t.minimum.toString()} ${l}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${t.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${t.origin}`;
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
};
function Ja() {
  return { localeError: vl() };
}
var yl = () => {
  let e = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "entrada",
      email: "adre\xE7a electr\xF2nica",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "durada ISO",
      ipv4: "adre\xE7a IPv4",
      ipv6: "adre\xE7a IPv6",
      cidrv4: "rang IPv4",
      cidrv6: "rang IPv6",
      base64: "cadena codificada en base64",
      base64url: "cadena codificada en base64url",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Tipus inv\xE0lid: s'esperava ${t.expected}, s'ha rebut ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Valor inv\xE0lid: s'esperava ${b(t.values[0])}`
          : `Opci\xF3 inv\xE0lida: s'esperava una de ${_(t.values, " o ")}`;
      case "too_big": {
        let o = t.inclusive ? "com a m\xE0xim" : "menys de",
          a = n(t.origin);
        return a
          ? `Massa gran: s'esperava que ${t.origin ?? "el valor"} contingu\xE9s ${o} ${t.maximum.toString()} ${a.unit ?? "elements"}`
          : `Massa gran: s'esperava que ${t.origin ?? "el valor"} fos ${o} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? "com a m\xEDnim" : "m\xE9s de",
          a = n(t.origin);
        return a
          ? `Massa petit: s'esperava que ${t.origin} contingu\xE9s ${o} ${t.minimum.toString()} ${a.unit}`
          : `Massa petit: s'esperava que ${t.origin} fos ${o} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Format inv\xE0lid: ha de comen\xE7ar amb "${o.prefix}"`
          : o.format === "ends_with"
            ? `Format inv\xE0lid: ha d'acabar amb "${o.suffix}"`
            : o.format === "includes"
              ? `Format inv\xE0lid: ha d'incloure "${o.includes}"`
              : o.format === "regex"
                ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${o.pattern}`
                : `Format inv\xE0lid per a ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Clau${t.keys.length > 1 ? "s" : ""} no reconeguda${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      case "invalid_element":
        return `Element inv\xE0lid a ${t.origin}`;
      default:
        return "Entrada inv\xE0lida";
    }
  };
};
function Xa() {
  return { localeError: yl() };
}
var bl = () => {
  let e = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u010D\xEDslo";
        case "string":
          return "\u0159et\u011Bzec";
        case "boolean":
          return "boolean";
        case "bigint":
          return "bigint";
        case "function":
          return "funkce";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
        case "object": {
          if (Array.isArray(t)) return "pole";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "regul\xE1rn\xED v\xFDraz",
      email: "e-mailov\xE1 adresa",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "datum a \u010Das ve form\xE1tu ISO",
      date: "datum ve form\xE1tu ISO",
      time: "\u010Das ve form\xE1tu ISO",
      duration: "doba trv\xE1n\xED ISO",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "rozsah IPv4",
      cidrv6: "rozsah IPv6",
      base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
      base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
      json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
      e164: "\u010D\xEDslo E.164",
      jwt: "JWT",
      template_literal: "vstup",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${t.expected}, obdr\u017Eeno ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${b(t.values[0])}`
          : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${o}${t.maximum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${o}${t.minimum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${o.prefix}"`
          : o.format === "ends_with"
            ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${o.suffix}"`
            : o.format === "includes"
              ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${o.includes}"`
              : o.format === "regex"
                ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${o.pattern}`
                : `Neplatn\xFD form\xE1t ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${t.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${t.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${t.origin}`;
      default:
        return "Neplatn\xFD vstup";
    }
  };
};
function Qa() {
  return { localeError: bl() };
}
var wl = () => {
  let e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "Zahl";
        case "object": {
          if (Array.isArray(t)) return "Array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "Eingabe",
      email: "E-Mail-Adresse",
      url: "URL",
      emoji: "Emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-Datum und -Uhrzeit",
      date: "ISO-Datum",
      time: "ISO-Uhrzeit",
      duration: "ISO-Dauer",
      ipv4: "IPv4-Adresse",
      ipv6: "IPv6-Adresse",
      cidrv4: "IPv4-Bereich",
      cidrv6: "IPv6-Bereich",
      base64: "Base64-codierter String",
      base64url: "Base64-URL-codierter String",
      json_string: "JSON-String",
      e164: "E.164-Nummer",
      jwt: "JWT",
      template_literal: "Eingabe",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ung\xFCltige Eingabe: erwartet ${t.expected}, erhalten ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ung\xFCltige Eingabe: erwartet ${b(t.values[0])}`
          : `Ung\xFCltige Option: erwartet eine von ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${o}${t.maximum.toString()} ${a.unit ?? "Elemente"} hat`
          : `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${o}${t.maximum.toString()} ist`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Zu klein: erwartet, dass ${t.origin} ${o}${t.minimum.toString()} ${a.unit} hat`
          : `Zu klein: erwartet, dass ${t.origin} ${o}${t.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Ung\xFCltiger String: muss mit "${o.prefix}" beginnen`
          : o.format === "ends_with"
            ? `Ung\xFCltiger String: muss mit "${o.suffix}" enden`
            : o.format === "includes"
              ? `Ung\xFCltiger String: muss "${o.includes}" enthalten`
              : o.format === "regex"
                ? `Ung\xFCltiger String: muss dem Muster ${o.pattern} entsprechen`
                : `Ung\xFCltig: ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${t.divisor} sein`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${t.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${t.origin}`;
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
};
function es() {
  return { localeError: wl() };
}
var kl = (e) => {
    let n = typeof e;
    switch (n) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return n;
  },
  xl = () => {
    let e = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
    };
    function n(i) {
      return e[i] ?? null;
    }
    let r = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
    return (i) => {
      switch (i.code) {
        case "invalid_type":
          return `Invalid input: expected ${i.expected}, received ${kl(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Invalid input: expected ${b(i.values[0])}`
            : `Invalid option: expected one of ${_(i.values, "|")}`;
        case "too_big": {
          let t = i.inclusive ? "<=" : "<",
            o = n(i.origin);
          return o
            ? `Too big: expected ${i.origin ?? "value"} to have ${t}${i.maximum.toString()} ${o.unit ?? "elements"}`
            : `Too big: expected ${i.origin ?? "value"} to be ${t}${i.maximum.toString()}`;
        }
        case "too_small": {
          let t = i.inclusive ? ">=" : ">",
            o = n(i.origin);
          return o
            ? `Too small: expected ${i.origin} to have ${t}${i.minimum.toString()} ${o.unit}`
            : `Too small: expected ${i.origin} to be ${t}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let t = i;
          return t.format === "starts_with"
            ? `Invalid string: must start with "${t.prefix}"`
            : t.format === "ends_with"
              ? `Invalid string: must end with "${t.suffix}"`
              : t.format === "includes"
                ? `Invalid string: must include "${t.includes}"`
                : t.format === "regex"
                  ? `Invalid string: must match pattern ${t.pattern}`
                  : `Invalid ${r[t.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${i.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${_(i.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${i.origin}`;
        case "invalid_union":
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${i.origin}`;
        default:
          return "Invalid input";
      }
    };
  };
function Lt() {
  return { localeError: xl() };
}
var $l = () => {
  let e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(t)) return "arreglo";
          if (t === null) return "nulo";
          if (Object.getPrototypeOf(t) !== Object.prototype)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "entrada",
      email: "direcci\xF3n de correo electr\xF3nico",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "fecha y hora ISO",
      date: "fecha ISO",
      time: "hora ISO",
      duration: "duraci\xF3n ISO",
      ipv4: "direcci\xF3n IPv4",
      ipv6: "direcci\xF3n IPv6",
      cidrv4: "rango IPv4",
      cidrv6: "rango IPv6",
      base64: "cadena codificada en base64",
      base64url: "URL codificada en base64",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entrada inv\xE1lida: se esperaba ${t.expected}, recibido ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entrada inv\xE1lida: se esperaba ${b(t.values[0])}`
          : `Opci\xF3n inv\xE1lida: se esperaba una de ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Demasiado grande: se esperaba que ${t.origin ?? "valor"} tuviera ${o}${t.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Demasiado grande: se esperaba que ${t.origin ?? "valor"} fuera ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Demasiado peque\xF1o: se esperaba que ${t.origin} tuviera ${o}${t.minimum.toString()} ${a.unit}`
          : `Demasiado peque\xF1o: se esperaba que ${t.origin} fuera ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Cadena inv\xE1lida: debe comenzar con "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cadena inv\xE1lida: debe terminar en "${o.suffix}"`
            : o.format === "includes"
              ? `Cadena inv\xE1lida: debe incluir "${o.includes}"`
              : o.format === "regex"
                ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${o.pattern}`
                : `Inv\xE1lido ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Llave${t.keys.length > 1 ? "s" : ""} desconocida${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${t.origin}`;
      default:
        return "Entrada inv\xE1lida";
    }
  };
};
function ts() {
  return { localeError: $l() };
}
var zl = () => {
  let e = {
    string: {
      unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    file: {
      unit: "\u0628\u0627\u06CC\u062A",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    array: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    set: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0639\u062F\u062F";
        case "object": {
          if (Array.isArray(t)) return "\u0622\u0631\u0627\u06CC\u0647";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0648\u0631\u0648\u062F\u06CC",
      email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
      url: "URL",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
      time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      duration:
        "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      ipv4: "IPv4 \u0622\u062F\u0631\u0633",
      ipv6: "IPv6 \u0622\u062F\u0631\u0633",
      cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
      cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
      base64: "base64-encoded \u0631\u0634\u062A\u0647",
      base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
      json_string: "JSON \u0631\u0634\u062A\u0647",
      e164: "E.164 \u0639\u062F\u062F",
      jwt: "JWT",
      template_literal: "\u0648\u0631\u0648\u062F\u06CC",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${t.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${r(t.input)} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${b(t.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
          : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${_(t.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} ${a.unit} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
          : o.format === "ends_with"
            ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
            : o.format === "includes"
              ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${o.includes}" \u0628\u0627\u0634\u062F`
              : o.format === "regex"
                ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${o.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                : `${i[o.format] ?? t.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${t.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${t.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${t.origin}`;
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${t.origin}`;
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
};
function ns() {
  return { localeError: zl() };
}
var Sl = () => {
  let e = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "s\xE4\xE4nn\xF6llinen lauseke",
      email: "s\xE4hk\xF6postiosoite",
      url: "URL-osoite",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-aikaleima",
      date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
      time: "ISO-aika",
      duration: "ISO-kesto",
      ipv4: "IPv4-osoite",
      ipv6: "IPv6-osoite",
      cidrv4: "IPv4-alue",
      cidrv6: "IPv6-alue",
      base64: "base64-koodattu merkkijono",
      base64url: "base64url-koodattu merkkijono",
      json_string: "JSON-merkkijono",
      e164: "E.164-luku",
      jwt: "JWT",
      template_literal: "templaattimerkkijono",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${t.expected}, oli ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${b(t.values[0])}`
          : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Liian suuri: ${a.subject} t\xE4ytyy olla ${o}${t.maximum.toString()} ${a.unit}`.trim()
          : `Liian suuri: arvon t\xE4ytyy olla ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Liian pieni: ${a.subject} t\xE4ytyy olla ${o}${t.minimum.toString()} ${a.unit}`.trim()
          : `Liian pieni: arvon t\xE4ytyy olla ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${o.prefix}"`
          : o.format === "ends_with"
            ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${o.suffix}"`
            : o.format === "includes"
              ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${o.includes}"`
              : o.format === "regex"
                ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${o.pattern}`
                : `Virheellinen ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${t.divisor} monikerta`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen sy\xF6te";
    }
  };
};
function rs() {
  return { localeError: Sl() };
}
var Il = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "nombre";
        case "object": {
          if (Array.isArray(t)) return "tableau";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "entr\xE9e",
      email: "adresse e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date et heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : ${t.expected} attendu, ${r(t.input)} re\xE7u`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entr\xE9e invalide : ${b(t.values[0])} attendu`
          : `Option invalide : une valeur parmi ${_(t.values, "|")} attendue`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Trop grand : ${t.origin ?? "valeur"} doit ${a.verb} ${o}${t.maximum.toString()} ${a.unit ?? "\xE9l\xE9ment(s)"}`
          : `Trop grand : ${t.origin ?? "valeur"} doit \xEAtre ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Trop petit : ${t.origin} doit ${a.verb} ${o}${t.minimum.toString()} ${a.unit}`
          : `Trop petit : ${t.origin} doit \xEAtre ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
            : o.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
              : o.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${o.pattern}`
                : `${i[o.format] ?? t.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${t.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${t.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function os() {
  return { localeError: Il() };
}
var Al = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "entr\xE9e",
      email: "adresse courriel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date-heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : attendu ${t.expected}, re\xE7u ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entr\xE9e invalide : attendu ${b(t.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "\u2264" : "<",
          a = n(t.origin);
        return a
          ? `Trop grand : attendu que ${t.origin ?? "la valeur"} ait ${o}${t.maximum.toString()} ${a.unit}`
          : `Trop grand : attendu que ${t.origin ?? "la valeur"} soit ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? "\u2265" : ">",
          a = n(t.origin);
        return a
          ? `Trop petit : attendu que ${t.origin} ait ${o}${t.minimum.toString()} ${a.unit}`
          : `Trop petit : attendu que ${t.origin} soit ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
            : o.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
              : o.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au motif ${o.pattern}`
                : `${i[o.format] ?? t.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${t.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${t.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function is() {
  return { localeError: Al() };
}
var Dl = () => {
  let e = {
    string: {
      unit: "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    file: {
      unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    array: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    set: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u05E7\u05DC\u05D8",
      email:
        "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
      url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
      emoji: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
      date: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
      time: "\u05D6\u05DE\u05DF ISO",
      duration: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
      ipv4: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
      ipv6: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
      cidrv4: "\u05D8\u05D5\u05D5\u05D7 IPv4",
      cidrv6: "\u05D8\u05D5\u05D5\u05D7 IPv6",
      base64:
        "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
      base64url:
        "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
      json_string: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
      e164: "\u05DE\u05E1\u05E4\u05E8 E.164",
      jwt: "JWT",
      template_literal: "\u05E7\u05DC\u05D8",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${t.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${b(t.values[0])}`
          : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05D0\u05D7\u05EA \u05DE\u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA  ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${t.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${t.maximum.toString()} ${a.unit ?? "elements"}`
          : `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${t.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${t.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${t.minimum.toString()} ${a.unit}`
          : `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${t.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1"${o.prefix}"`
          : o.format === "ends_with"
            ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${o.suffix}"`
            : o.format === "includes"
              ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${o.includes}"`
              : o.format === "regex"
                ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${o.pattern}`
                : `${i[o.format] ?? t.format} \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${t.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${t.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${t.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u05DE\u05E4\u05EA\u05D7 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${t.origin}`;
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element":
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${t.origin}`;
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
};
function as() {
  return { localeError: Dl() };
}
var jl = () => {
  let e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "sz\xE1m";
        case "object": {
          if (Array.isArray(t)) return "t\xF6mb";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "bemenet",
      email: "email c\xEDm",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO id\u0151b\xE9lyeg",
      date: "ISO d\xE1tum",
      time: "ISO id\u0151",
      duration: "ISO id\u0151intervallum",
      ipv4: "IPv4 c\xEDm",
      ipv6: "IPv6 c\xEDm",
      cidrv4: "IPv4 tartom\xE1ny",
      cidrv6: "IPv6 tartom\xE1ny",
      base64: "base64-k\xF3dolt string",
      base64url: "base64url-k\xF3dolt string",
      json_string: "JSON string",
      e164: "E.164 sz\xE1m",
      jwt: "JWT",
      template_literal: "bemenet",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${t.expected}, a kapott \xE9rt\xE9k ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${b(t.values[0])}`
          : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `T\xFAl nagy: ${t.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${o}${t.maximum.toString()} ${a.unit ?? "elem"}`
          : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${t.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} m\xE9rete t\xFAl kicsi ${o}${t.minimum.toString()} ${a.unit}`
          : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} t\xFAl kicsi ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\xC9rv\xE9nytelen string: "${o.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
          : o.format === "ends_with"
            ? `\xC9rv\xE9nytelen string: "${o.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
            : o.format === "includes"
              ? `\xC9rv\xE9nytelen string: "${o.includes}" \xE9rt\xE9ket kell tartalmaznia`
              : o.format === "regex"
                ? `\xC9rv\xE9nytelen string: ${o.pattern} mint\xE1nak kell megfelelnie`
                : `\xC9rv\xE9nytelen ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${t.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${t.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${t.origin}`;
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
};
function ss() {
  return { localeError: jl() };
}
var Pl = () => {
  let e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "alamat email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tanggal dan waktu format ISO",
      date: "tanggal format ISO",
      time: "jam format ISO",
      duration: "durasi format ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "rentang alamat IPv4",
      cidrv6: "rentang alamat IPv6",
      base64: "string dengan enkode base64",
      base64url: "string dengan enkode base64url",
      json_string: "string JSON",
      e164: "angka E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${t.expected}, diterima ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input tidak valid: diharapkan ${b(t.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Terlalu besar: diharapkan ${t.origin ?? "value"} memiliki ${o}${t.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: diharapkan ${t.origin ?? "value"} menjadi ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Terlalu kecil: diharapkan ${t.origin} memiliki ${o}${t.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: diharapkan ${t.origin} menjadi ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `String tidak valid: harus dimulai dengan "${o.prefix}"`
          : o.format === "ends_with"
            ? `String tidak valid: harus berakhir dengan "${o.suffix}"`
            : o.format === "includes"
              ? `String tidak valid: harus menyertakan "${o.includes}"`
              : o.format === "regex"
                ? `String tidak valid: harus sesuai pola ${o.pattern}`
                : `${i[o.format] ?? t.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${t.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${t.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${t.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function us() {
  return { localeError: Pl() };
}
var Ol = () => {
  let e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "numero";
        case "object": {
          if (Array.isArray(t)) return "vettore";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "indirizzo email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e ora ISO",
      date: "data ISO",
      time: "ora ISO",
      duration: "durata ISO",
      ipv4: "indirizzo IPv4",
      ipv6: "indirizzo IPv6",
      cidrv4: "intervallo IPv4",
      cidrv6: "intervallo IPv6",
      base64: "stringa codificata in base64",
      base64url: "URL codificata in base64",
      json_string: "stringa JSON",
      e164: "numero E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input non valido: atteso ${t.expected}, ricevuto ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input non valido: atteso ${b(t.values[0])}`
          : `Opzione non valida: atteso uno tra ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Troppo grande: ${t.origin ?? "valore"} deve avere ${o}${t.maximum.toString()} ${a.unit ?? "elementi"}`
          : `Troppo grande: ${t.origin ?? "valore"} deve essere ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Troppo piccolo: ${t.origin} deve avere ${o}${t.minimum.toString()} ${a.unit}`
          : `Troppo piccolo: ${t.origin} deve essere ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Stringa non valida: deve iniziare con "${o.prefix}"`
          : o.format === "ends_with"
            ? `Stringa non valida: deve terminare con "${o.suffix}"`
            : o.format === "includes"
              ? `Stringa non valida: deve includere "${o.includes}"`
              : o.format === "regex"
                ? `Stringa non valida: deve corrispondere al pattern ${o.pattern}`
                : `Invalid ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${t.divisor}`;
      case "unrecognized_keys":
        return `Chiav${t.keys.length > 1 ? "i" : "e"} non riconosciut${t.keys.length > 1 ? "e" : "a"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${t.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${t.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function ls() {
  return { localeError: Ol() };
}
var Nl = () => {
  let e = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u6570\u5024";
        case "object": {
          if (Array.isArray(t)) return "\u914D\u5217";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u5165\u529B\u5024",
      email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
      url: "URL",
      emoji: "\u7D75\u6587\u5B57",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u6642",
      date: "ISO\u65E5\u4ED8",
      time: "ISO\u6642\u523B",
      duration: "ISO\u671F\u9593",
      ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
      ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
      cidrv4: "IPv4\u7BC4\u56F2",
      cidrv6: "IPv6\u7BC4\u56F2",
      base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      json_string: "JSON\u6587\u5B57\u5217",
      e164: "E.164\u756A\u53F7",
      jwt: "JWT",
      template_literal: "\u5165\u529B\u5024",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u7121\u52B9\u306A\u5165\u529B: ${t.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${r(t.input)}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u7121\u52B9\u306A\u5165\u529B: ${b(t.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u9078\u629E: ${_(t.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${a.unit ?? "\u8981\u7D20"}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${a.unit}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : o.format === "ends_with"
            ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
            : o.format === "includes"
              ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : o.format === "regex"
                ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${o.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                : `\u7121\u52B9\u306A${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${t.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${t.keys.length > 1 ? "\u7FA4" : ""}: ${_(t.keys, "\u3001")}`;
      case "invalid_key":
        return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
};
function cs() {
  return { localeError: Nl() };
}
var El = () => {
  let e = {
    string: {
      unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    file: {
      unit: "\u1794\u17C3",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    array: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    set: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t)
            ? "\u1798\u17B7\u1793\u1798\u17C2\u1793\u1787\u17B6\u179B\u17C1\u1781 (NaN)"
            : "\u179B\u17C1\u1781";
        case "object": {
          if (Array.isArray(t)) return "\u17A2\u17B6\u179A\u17C1 (Array)";
          if (t === null)
            return "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
      email:
        "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
      url: "URL",
      emoji:
        "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
      date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
      time: "\u1798\u17C9\u17C4\u1784 ISO",
      duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
      ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      cidrv4:
        "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      cidrv6:
        "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      base64:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
      base64url:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
      json_string:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
      e164: "\u179B\u17C1\u1781 E.164",
      jwt: "JWT",
      template_literal:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${b(t.values[0])}`
          : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${t.maximum.toString()} ${a.unit ?? "\u1792\u17B6\u178F\u17BB"}`
          : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${o} ${t.minimum.toString()} ${a.unit}`
          : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${o} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${o.suffix}"`
            : o.format === "includes"
              ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${o.includes}"`
              : o.format === "regex"
                ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${o.pattern}`
                : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${t.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
};
function ds() {
  return { localeError: El() };
}
var Tl = () => {
  let e = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\uC785\uB825",
      email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
      url: "URL",
      emoji: "\uC774\uBAA8\uC9C0",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
      date: "ISO \uB0A0\uC9DC",
      time: "ISO \uC2DC\uAC04",
      duration: "ISO \uAE30\uAC04",
      ipv4: "IPv4 \uC8FC\uC18C",
      ipv6: "IPv6 \uC8FC\uC18C",
      cidrv4: "IPv4 \uBC94\uC704",
      cidrv6: "IPv6 \uBC94\uC704",
      base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      json_string: "JSON \uBB38\uC790\uC5F4",
      e164: "E.164 \uBC88\uD638",
      jwt: "JWT",
      template_literal: "\uC785\uB825",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${t.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${r(t.input)}\uC785\uB2C8\uB2E4`;
      case "invalid_value":
        return t.values.length === 1
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${b(t.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC635\uC158: ${_(t.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let o = t.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
          a =
            o === "\uBBF8\uB9CC"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = n(t.origin),
          l = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()}${l} ${o}${a}`
          : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()} ${o}${a}`;
      }
      case "too_small": {
        let o = t.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
          a =
            o === "\uC774\uC0C1"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = n(t.origin),
          l = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()}${l} ${o}${a}`
          : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()} ${o}${a}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
          : o.format === "ends_with"
            ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
            : o.format === "includes"
              ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
              : o.format === "regex"
                ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${o.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                : `\uC798\uBABB\uB41C ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${t.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${t.origin}`;
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${t.origin}`;
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
};
function _s() {
  return { localeError: Tl() };
}
var Ul = () => {
  let e = {
    string: {
      unit: "\u0437\u043D\u0430\u0446\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    file: {
      unit: "\u0431\u0430\u0458\u0442\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    array: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    set: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0431\u0440\u043E\u0458";
        case "object": {
          if (Array.isArray(t)) return "\u043D\u0438\u0437\u0430";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0432\u043D\u0435\u0441",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u045F\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
      date: "ISO \u0434\u0430\u0442\u0443\u043C",
      time: "ISO \u0432\u0440\u0435\u043C\u0435",
      duration:
        "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
      cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
      cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
      base64:
        "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      base64url:
        "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      json_string: "JSON \u043D\u0438\u0437\u0430",
      e164: "E.164 \u0431\u0440\u043E\u0458",
      jwt: "JWT",
      template_literal: "\u0432\u043D\u0435\u0441",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Invalid input: expected ${b(t.values[0])}`
          : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${o}${t.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0438\u043C\u0430 ${o}${t.minimum.toString()} ${a.unit}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${o.pattern}`
                : `Invalid ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${t.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${t.origin}`;
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
};
function ms() {
  return { localeError: Ul() };
}
var Zl = () => {
  let e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "nombor";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "alamat e-mel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tarikh masa ISO",
      date: "tarikh ISO",
      time: "masa ISO",
      duration: "tempoh ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "julat IPv4",
      cidrv6: "julat IPv6",
      base64: "string dikodkan base64",
      base64url: "string dikodkan base64url",
      json_string: "string JSON",
      e164: "nombor E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${t.expected}, diterima ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input tidak sah: dijangka ${b(t.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Terlalu besar: dijangka ${t.origin ?? "nilai"} ${a.verb} ${o}${t.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: dijangka ${t.origin ?? "nilai"} adalah ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Terlalu kecil: dijangka ${t.origin} ${a.verb} ${o}${t.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: dijangka ${t.origin} adalah ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `String tidak sah: mesti bermula dengan "${o.prefix}"`
          : o.format === "ends_with"
            ? `String tidak sah: mesti berakhir dengan "${o.suffix}"`
            : o.format === "includes"
              ? `String tidak sah: mesti mengandungi "${o.includes}"`
              : o.format === "regex"
                ? `String tidak sah: mesti sepadan dengan corak ${o.pattern}`
                : `${i[o.format] ?? t.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${t.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${t.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${t.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function ps() {
  return { localeError: Zl() };
}
var Cl = () => {
  let e = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "getal";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "invoer",
      email: "emailadres",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum en tijd",
      date: "ISO datum",
      time: "ISO tijd",
      duration: "ISO duur",
      ipv4: "IPv4-adres",
      ipv6: "IPv6-adres",
      cidrv4: "IPv4-bereik",
      cidrv6: "IPv6-bereik",
      base64: "base64-gecodeerde tekst",
      base64url: "base64 URL-gecodeerde tekst",
      json_string: "JSON string",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "invoer",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${t.expected}, ontving ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ongeldige invoer: verwacht ${b(t.values[0])}`
          : `Ongeldige optie: verwacht \xE9\xE9n van ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Te lang: verwacht dat ${t.origin ?? "waarde"} ${o}${t.maximum.toString()} ${a.unit ?? "elementen"} bevat`
          : `Te lang: verwacht dat ${t.origin ?? "waarde"} ${o}${t.maximum.toString()} is`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Te kort: verwacht dat ${t.origin} ${o}${t.minimum.toString()} ${a.unit} bevat`
          : `Te kort: verwacht dat ${t.origin} ${o}${t.minimum.toString()} is`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Ongeldige tekst: moet met "${o.prefix}" beginnen`
          : o.format === "ends_with"
            ? `Ongeldige tekst: moet op "${o.suffix}" eindigen`
            : o.format === "includes"
              ? `Ongeldige tekst: moet "${o.includes}" bevatten`
              : o.format === "regex"
                ? `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}`
                : `Ongeldig: ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${t.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${t.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function fs() {
  return { localeError: Cl() };
}
var Rl = () => {
  let e = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "tall";
        case "object": {
          if (Array.isArray(t)) return "liste";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "input",
      email: "e-postadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkeslett",
      date: "ISO-dato",
      time: "ISO-klokkeslett",
      duration: "ISO-varighet",
      ipv4: "IPv4-omr\xE5de",
      ipv6: "IPv6-omr\xE5de",
      cidrv4: "IPv4-spekter",
      cidrv6: "IPv6-spekter",
      base64: "base64-enkodet streng",
      base64url: "base64url-enkodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${t.expected}, fikk ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ugyldig verdi: forventet ${b(t.values[0])}`
          : `Ugyldig valg: forventet en av ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${o}${t.maximum.toString()} ${a.unit ?? "elementer"}`
          : `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `For lite(n): forventet ${t.origin} til \xE5 ha ${o}${t.minimum.toString()} ${a.unit}`
          : `For lite(n): forventet ${t.origin} til \xE5 ha ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Ugyldig streng: m\xE5 starte med "${o.prefix}"`
          : o.format === "ends_with"
            ? `Ugyldig streng: m\xE5 ende med "${o.suffix}"`
            : o.format === "includes"
              ? `Ugyldig streng: m\xE5 inneholde "${o.includes}"`
              : o.format === "regex"
                ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${o.pattern}`
                : `Ugyldig ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${t.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${t.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function gs() {
  return { localeError: Rl() };
}
var Vl = () => {
  let e = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "numara";
        case "object": {
          if (Array.isArray(t)) return "saf";
          if (t === null) return "gayb";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "giren",
      email: "epostag\xE2h",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO heng\xE2m\u0131",
      date: "ISO tarihi",
      time: "ISO zaman\u0131",
      duration: "ISO m\xFCddeti",
      ipv4: "IPv4 ni\u015F\xE2n\u0131",
      ipv6: "IPv6 ni\u015F\xE2n\u0131",
      cidrv4: "IPv4 menzili",
      cidrv6: "IPv6 menzili",
      base64: "base64-\u015Fifreli metin",
      base64url: "base64url-\u015Fifreli metin",
      json_string: "JSON metin",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "giren",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `F\xE2sit giren: umulan ${t.expected}, al\u0131nan ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `F\xE2sit giren: umulan ${b(t.values[0])}`
          : `F\xE2sit tercih: m\xFBteberler ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${o}${t.maximum.toString()} ${a.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
          : `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${o}${t.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${o}${t.minimum.toString()} ${a.unit} sahip olmal\u0131yd\u0131.`
          : `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${o}${t.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `F\xE2sit metin: "${o.prefix}" ile ba\u015Flamal\u0131.`
          : o.format === "ends_with"
            ? `F\xE2sit metin: "${o.suffix}" ile bitmeli.`
            : o.format === "includes"
              ? `F\xE2sit metin: "${o.includes}" ihtiv\xE2 etmeli.`
              : o.format === "regex"
                ? `F\xE2sit metin: ${o.pattern} nak\u015F\u0131na uymal\u0131.`
                : `F\xE2sit ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${t.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${t.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
};
function hs() {
  return { localeError: Vl() };
}
var Ll = () => {
  let e = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "liczba";
        case "object": {
          if (Array.isArray(t)) return "tablica";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "wyra\u017Cenie",
      email: "adres email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i godzina w formacie ISO",
      date: "data w formacie ISO",
      time: "godzina w formacie ISO",
      duration: "czas trwania ISO",
      ipv4: "adres IPv4",
      ipv6: "adres IPv6",
      cidrv4: "zakres IPv4",
      cidrv6: "zakres IPv6",
      base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
      base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
      json_string: "ci\u0105g znak\xF3w w formacie JSON",
      e164: "liczba E.164",
      jwt: "JWT",
      template_literal: "wej\u015Bcie",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${t.expected}, otrzymano ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${b(t.values[0])}`
          : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${t.maximum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${t.minimum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${o.prefix}"`
          : o.format === "ends_with"
            ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${o.suffix}"`
            : o.format === "includes"
              ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${o.includes}"`
              : o.format === "regex"
                ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${o.pattern}`
                : `Nieprawid\u0142ow(y/a/e) ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${t.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${t.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${t.origin}`;
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
};
function vs() {
  return { localeError: Ll() };
}
var Ml = () => {
  let e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "nulo";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "padr\xE3o",
      email: "endere\xE7o de e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "dura\xE7\xE3o ISO",
      ipv4: "endere\xE7o IPv4",
      ipv6: "endere\xE7o IPv6",
      cidrv4: "faixa de IPv4",
      cidrv6: "faixa de IPv6",
      base64: "texto codificado em base64",
      base64url: "URL codificada em base64",
      json_string: "texto JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Tipo inv\xE1lido: esperado ${t.expected}, recebido ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entrada inv\xE1lida: esperado ${b(t.values[0])}`
          : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Muito grande: esperado que ${t.origin ?? "valor"} tivesse ${o}${t.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Muito grande: esperado que ${t.origin ?? "valor"} fosse ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Muito pequeno: esperado que ${t.origin} tivesse ${o}${t.minimum.toString()} ${a.unit}`
          : `Muito pequeno: esperado que ${t.origin} fosse ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Texto inv\xE1lido: deve come\xE7ar com "${o.prefix}"`
          : o.format === "ends_with"
            ? `Texto inv\xE1lido: deve terminar com "${o.suffix}"`
            : o.format === "includes"
              ? `Texto inv\xE1lido: deve incluir "${o.includes}"`
              : o.format === "regex"
                ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${o.pattern}`
                : `${i[o.format] ?? t.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Chave${t.keys.length > 1 ? "s" : ""} desconhecida${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${t.origin}`;
      default:
        return "Campo inv\xE1lido";
    }
  };
};
function ys() {
  return { localeError: Ml() };
}
function bs(e, n, r, i) {
  let t = Math.abs(e),
    o = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : o === 1 ? n : o >= 2 && o <= 4 ? r : i;
}
var ql = () => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0441\u0438\u0432";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0432\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0435\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0432\u0440\u0435\u043C\u044F",
      duration:
        "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
      cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
      base64url:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
      json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0432\u0432\u043E\u0434",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${t.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${b(t.values[0])}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        if (a) {
          let s = Number(t.maximum),
            l = bs(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${t.maximum.toString()} ${l}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        if (a) {
          let s = Number(t.minimum),
            l = bs(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${t.minimum.toString()} ${l}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${t.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0438" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${t.origin}`;
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
};
function ws() {
  return { localeError: ql() };
}
var Hl = () => {
  let e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0161tevilo";
        case "object": {
          if (Array.isArray(t)) return "tabela";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "vnos",
      email: "e-po\u0161tni naslov",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum in \u010Das",
      date: "ISO datum",
      time: "ISO \u010Das",
      duration: "ISO trajanje",
      ipv4: "IPv4 naslov",
      ipv6: "IPv6 naslov",
      cidrv4: "obseg IPv4",
      cidrv6: "obseg IPv6",
      base64: "base64 kodiran niz",
      base64url: "base64url kodiran niz",
      json_string: "JSON niz",
      e164: "E.164 \u0161tevilka",
      jwt: "JWT",
      template_literal: "vnos",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Neveljaven vnos: pri\u010Dakovano ${t.expected}, prejeto ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Neveljaven vnos: pri\u010Dakovano ${b(t.values[0])}`
          : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} imelo ${o}${t.maximum.toString()} ${a.unit ?? "elementov"}`
          : `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Premajhno: pri\u010Dakovano, da bo ${t.origin} imelo ${o}${t.minimum.toString()} ${a.unit}`
          : `Premajhno: pri\u010Dakovano, da bo ${t.origin} ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Neveljaven niz: mora se za\u010Deti z "${o.prefix}"`
          : o.format === "ends_with"
            ? `Neveljaven niz: mora se kon\u010Dati z "${o.suffix}"`
            : o.format === "includes"
              ? `Neveljaven niz: mora vsebovati "${o.includes}"`
              : o.format === "regex"
                ? `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}`
                : `Neveljaven ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${t.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${t.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${t.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${t.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function ks() {
  return { localeError: Hl() };
}
var Bl = () => {
  let e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "antal";
        case "object": {
          if (Array.isArray(t)) return "lista";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "regulj\xE4rt uttryck",
      email: "e-postadress",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datum och tid",
      date: "ISO-datum",
      time: "ISO-tid",
      duration: "ISO-varaktighet",
      ipv4: "IPv4-intervall",
      ipv6: "IPv6-intervall",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodad str\xE4ng",
      base64url: "base64url-kodad str\xE4ng",
      json_string: "JSON-str\xE4ng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "mall-literal",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${t.expected}, fick ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${b(t.values[0])}`
          : `Ogiltigt val: f\xF6rv\xE4ntade en av ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.maximum.toString()} ${a.unit ?? "element"}`
          : `F\xF6r stor(t): f\xF6rv\xE4ntat ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.minimum.toString()} ${a.unit}`
          : `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${o.prefix}"`
          : o.format === "ends_with"
            ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${o.suffix}"`
            : o.format === "includes"
              ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${o.includes}"`
              : o.format === "regex"
                ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${o.pattern}"`
                : `Ogiltig(t) ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${t.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${t.origin ?? "v\xE4rdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function xs() {
  return { localeError: Bl() };
}
var Wl = () => {
  let e = {
    string: {
      unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    file: {
      unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    array: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    set: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t)
            ? "\u0B8E\u0BA3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BA4\u0BC1"
            : "\u0B8E\u0BA3\u0BCD";
        case "object": {
          if (Array.isArray(t)) return "\u0B85\u0BA3\u0BBF";
          if (t === null) return "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
      email:
        "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
      time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
      ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
      e164: "E.164 \u0B8E\u0BA3\u0BCD",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${b(t.values[0])}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_(t.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${t.maximum.toString()} ${a.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${t.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${o}${t.minimum.toString()} ${a.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${o}${t.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : o.format === "ends_with"
            ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
            : o.format === "includes"
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : o.format === "regex"
                ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${o.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${t.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${t.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
};
function $s() {
  return { localeError: Wl() };
}
var Fl = () => {
  let e = {
    string: {
      unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    file: {
      unit: "\u0E44\u0E1A\u0E15\u0E4C",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    array: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    set: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t)
            ? "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (NaN)"
            : "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02";
        case "object": {
          if (Array.isArray(t))
            return "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)";
          if (t === null)
            return "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
      email:
        "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
      url: "URL",
      emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
      time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      duration:
        "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
      ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
      cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
      cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
      base64:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
      base64url:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
      json_string:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
      e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
      jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
      template_literal:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${t.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${b(t.values[0])}`
          : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive
            ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
            : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
          a = n(t.origin);
        return a
          ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.maximum.toString()} ${a.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
          : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive
            ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
            : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
          a = n(t.origin);
        return a
          ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.minimum.toString()} ${a.unit}`
          : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${o.suffix}"`
            : o.format === "includes"
              ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${o.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
              : o.format === "regex"
                ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${o.pattern}`
                : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${t.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
};
function zs() {
  return { localeError: Fl() };
}
var Kl = (e) => {
    let n = typeof e;
    switch (n) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return n;
  },
  Gl = () => {
    let e = {
      string: { unit: "karakter", verb: "olmal\u0131" },
      file: { unit: "bayt", verb: "olmal\u0131" },
      array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    };
    function n(i) {
      return e[i] ?? null;
    }
    let r = {
      regex: "girdi",
      email: "e-posta adresi",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO tarih ve saat",
      date: "ISO tarih",
      time: "ISO saat",
      duration: "ISO s\xFCre",
      ipv4: "IPv4 adresi",
      ipv6: "IPv6 adresi",
      cidrv4: "IPv4 aral\u0131\u011F\u0131",
      cidrv6: "IPv6 aral\u0131\u011F\u0131",
      base64: "base64 ile \u015Fifrelenmi\u015F metin",
      base64url: "base64url ile \u015Fifrelenmi\u015F metin",
      json_string: "JSON dizesi",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "\u015Eablon dizesi",
    };
    return (i) => {
      switch (i.code) {
        case "invalid_type":
          return `Ge\xE7ersiz de\u011Fer: beklenen ${i.expected}, al\u0131nan ${Kl(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Ge\xE7ersiz de\u011Fer: beklenen ${b(i.values[0])}`
            : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${_(i.values, "|")}`;
        case "too_big": {
          let t = i.inclusive ? "<=" : "<",
            o = n(i.origin);
          return o
            ? `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${t}${i.maximum.toString()} ${o.unit ?? "\xF6\u011Fe"}`
            : `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${t}${i.maximum.toString()}`;
        }
        case "too_small": {
          let t = i.inclusive ? ">=" : ">",
            o = n(i.origin);
          return o
            ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${t}${i.minimum.toString()} ${o.unit}`
            : `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${t}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let t = i;
          return t.format === "starts_with"
            ? `Ge\xE7ersiz metin: "${t.prefix}" ile ba\u015Flamal\u0131`
            : t.format === "ends_with"
              ? `Ge\xE7ersiz metin: "${t.suffix}" ile bitmeli`
              : t.format === "includes"
                ? `Ge\xE7ersiz metin: "${t.includes}" i\xE7ermeli`
                : t.format === "regex"
                  ? `Ge\xE7ersiz metin: ${t.pattern} desenine uymal\u0131`
                  : `Ge\xE7ersiz ${r[t.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Ge\xE7ersiz say\u0131: ${i.divisor} ile tam b\xF6l\xFCnebilmeli`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${_(i.keys, ", ")}`;
        case "invalid_key":
          return `${i.origin} i\xE7inde ge\xE7ersiz anahtar`;
        case "invalid_union":
          return "Ge\xE7ersiz de\u011Fer";
        case "invalid_element":
          return `${i.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
        default:
          return "Ge\xE7ersiz de\u011Fer";
      }
    };
  };
function Ss() {
  return { localeError: Gl() };
}
var Yl = () => {
  let e = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0438\u0432";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
      date: "\u0434\u0430\u0442\u0430 ISO",
      time: "\u0447\u0430\u0441 ISO",
      duration:
        "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
      ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
      ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
      cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
      cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
      base64:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
      base64url:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
      json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal:
        "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${t.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${b(t.values[0])}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${a.verb} ${o}${t.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} ${a.verb} ${o}${t.minimum.toString()} ${a.unit}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} \u0431\u0443\u0434\u0435 ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0456" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${t.origin}`;
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
};
function Is() {
  return { localeError: Yl() };
}
var Jl = () => {
  let e = {
    string: {
      unit: "\u062D\u0631\u0648\u0641",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    file: {
      unit: "\u0628\u0627\u0626\u0679\u0633",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    array: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    set: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627",
    },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0646\u0645\u0628\u0631";
        case "object": {
          if (Array.isArray(t)) return "\u0622\u0631\u06D2";
          if (t === null) return "\u0646\u0644";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0627\u0646 \u067E\u0679",
      email:
        "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      uuidv4:
        "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
      uuidv6:
        "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
      nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
      ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
      xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
      ksuid:
        "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      datetime:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
      date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
      time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
      duration:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
      ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      cidrv4:
        "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
      cidrv6:
        "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
      base64:
        "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      base64url:
        "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      json_string:
        "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
      e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
      jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
      template_literal: "\u0627\u0646 \u067E\u0679",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${t.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${r(t.input)} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${b(t.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
          : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${_(t.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${o}${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${o}${t.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u06D2 ${o}${t.minimum.toString()} ${a.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u0627 ${o}${t.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
          : o.format === "ends_with"
            ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
            : o.format === "includes"
              ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
              : o.format === "regex"
                ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${o.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                : `\u063A\u0644\u0637 ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${t.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${t.keys.length > 1 ? "\u0632" : ""}: ${_(t.keys, "\u060C ")}`;
      case "invalid_key":
        return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
};
function As() {
  return { localeError: Jl() };
}
var Xl = () => {
  let e = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "s\u1ED1";
        case "object": {
          if (Array.isArray(t)) return "m\u1EA3ng";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u0111\u1EA7u v\xE0o",
      email: "\u0111\u1ECBa ch\u1EC9 email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ng\xE0y gi\u1EDD ISO",
      date: "ng\xE0y ISO",
      time: "gi\u1EDD ISO",
      duration: "kho\u1EA3ng th\u1EDDi gian ISO",
      ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
      ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
      cidrv4: "d\u1EA3i IPv4",
      cidrv6: "d\u1EA3i IPv6",
      base64: "chu\u1ED7i m\xE3 h\xF3a base64",
      base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
      json_string: "chu\u1ED7i JSON",
      e164: "s\u1ED1 E.164",
      jwt: "JWT",
      template_literal: "\u0111\u1EA7u v\xE0o",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${t.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${b(t.values[0])}`
          : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${a.verb} ${o}${t.maximum.toString()} ${a.unit ?? "ph\u1EA7n t\u1EED"}`
          : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${a.verb} ${o}${t.minimum.toString()} ${a.unit}`
          : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${o.prefix}"`
          : o.format === "ends_with"
            ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${o.suffix}"`
            : o.format === "includes"
              ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${o.includes}"`
              : o.format === "regex"
                ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${o.pattern}`
                : `${i[o.format] ?? t.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${t.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
};
function Ds() {
  return { localeError: Xl() };
}
var Ql = () => {
  let e = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "\u975E\u6570\u5B57(NaN)" : "\u6570\u5B57";
        case "object": {
          if (Array.isArray(t)) return "\u6570\u7EC4";
          if (t === null) return "\u7A7A\u503C(null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u8F93\u5165",
      email: "\u7535\u5B50\u90AE\u4EF6",
      url: "URL",
      emoji: "\u8868\u60C5\u7B26\u53F7",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u671F\u65F6\u95F4",
      date: "ISO\u65E5\u671F",
      time: "ISO\u65F6\u95F4",
      duration: "ISO\u65F6\u957F",
      ipv4: "IPv4\u5730\u5740",
      ipv6: "IPv6\u5730\u5740",
      cidrv4: "IPv4\u7F51\u6BB5",
      cidrv6: "IPv6\u7F51\u6BB5",
      base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
      base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
      json_string: "JSON\u5B57\u7B26\u4E32",
      e164: "E.164\u53F7\u7801",
      jwt: "JWT",
      template_literal: "\u8F93\u5165",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${t.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${b(t.values[0])}`
          : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${o}${t.maximum.toString()} ${a.unit ?? "\u4E2A\u5143\u7D20"}`
          : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${o}${t.minimum.toString()} ${a.unit}`
          : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.prefix}" \u5F00\u5934`
          : o.format === "ends_with"
            ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.suffix}" \u7ED3\u5C3E`
            : o.format === "includes"
              ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${o.includes}"`
              : o.format === "regex"
                ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${o.pattern}`
                : `\u65E0\u6548${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${t.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${t.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
};
function js() {
  return { localeError: Ql() };
}
var ec = () => {
  let e = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
  };
  function n(t) {
    return e[t] ?? null;
  }
  let r = (t) => {
      let o = typeof t;
      switch (o) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return o;
    },
    i = {
      regex: "\u8F38\u5165",
      email: "\u90F5\u4EF6\u5730\u5740",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u65E5\u671F\u6642\u9593",
      date: "ISO \u65E5\u671F",
      time: "ISO \u6642\u9593",
      duration: "ISO \u671F\u9593",
      ipv4: "IPv4 \u4F4D\u5740",
      ipv6: "IPv6 \u4F4D\u5740",
      cidrv4: "IPv4 \u7BC4\u570D",
      cidrv6: "IPv6 \u7BC4\u570D",
      base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
      base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
      json_string: "JSON \u5B57\u4E32",
      e164: "E.164 \u6578\u503C",
      jwt: "JWT",
      template_literal: "\u8F38\u5165",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${t.expected}\uFF0C\u4F46\u6536\u5230 ${r(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${b(t.values[0])}`
          : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${_(t.values, "|")}`;
      case "too_big": {
        let o = t.inclusive ? "<=" : "<",
          a = n(t.origin);
        return a
          ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${o}${t.maximum.toString()} ${a.unit ?? "\u500B\u5143\u7D20"}`
          : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${o}${t.maximum.toString()}`;
      }
      case "too_small": {
        let o = t.inclusive ? ">=" : ">",
          a = n(t.origin);
        return a
          ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${o}${t.minimum.toString()} ${a.unit}`
          : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${o}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = t;
        return o.format === "starts_with"
          ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.prefix}" \u958B\u982D`
          : o.format === "ends_with"
            ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.suffix}" \u7D50\u5C3E`
            : o.format === "includes"
              ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${o.includes}"`
              : o.format === "regex"
                ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${o.pattern}`
                : `\u7121\u6548\u7684 ${i[o.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${t.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${t.keys.length > 1 ? "\u5011" : ""}\uFF1A${_(t.keys, "\u3001")}`;
      case "invalid_key":
        return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
};
function Ps() {
  return { localeError: ec() };
}
var Fo = Symbol("ZodOutput"),
  Ko = Symbol("ZodInput"),
  De = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(n, ...r) {
      let i = r[0];
      if ((this._map.set(n, i), i && typeof i == "object" && "id" in i)) {
        if (this._idmap.has(i.id))
          throw new Error(`ID ${i.id} already exists in the registry`);
        this._idmap.set(i.id, n);
      }
      return this;
    }
    remove(n) {
      return (this._map.delete(n), this);
    }
    get(n) {
      let r = n._zod.parent;
      if (r) {
        let i = { ...(this.get(r) ?? {}) };
        return (delete i.id, { ...i, ...this._map.get(n) });
      }
      return this._map.get(n);
    }
    has(n) {
      return this._map.has(n);
    }
  };
function Mt() {
  return new De();
}
var Q = Mt();
function Go(e, n) {
  return new e({ type: "string", ...h(n) });
}
function Yo(e, n) {
  return new e({ type: "string", coerce: !0, ...h(n) });
}
function qt(e, n) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function rt(e, n) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function Ht(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function Bt(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...h(n),
  });
}
function Wt(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...h(n),
  });
}
function Ft(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...h(n),
  });
}
function Kt(e, n) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function Gt(e, n) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function Yt(e, n) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function Jt(e, n) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function Xt(e, n) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function Qt(e, n) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function en(e, n) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function tn(e, n) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function nn(e, n) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function rn(e, n) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function on(e, n) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function an(e, n) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function sn(e, n) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function un(e, n) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function ln(e, n) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function cn(e, n) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...h(n),
  });
}
function Jo(e, n) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...h(n),
  });
}
function Xo(e, n) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...h(n),
  });
}
function Qo(e, n) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...h(n),
  });
}
function ei(e, n) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...h(n),
  });
}
function ti(e, n) {
  return new e({ type: "number", checks: [], ...h(n) });
}
function ni(e, n) {
  return new e({ type: "number", coerce: !0, checks: [], ...h(n) });
}
function ri(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...h(n),
  });
}
function oi(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...h(n),
  });
}
function ii(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...h(n),
  });
}
function ai(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...h(n),
  });
}
function si(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...h(n),
  });
}
function ui(e, n) {
  return new e({ type: "boolean", ...h(n) });
}
function li(e, n) {
  return new e({ type: "boolean", coerce: !0, ...h(n) });
}
function ci(e, n) {
  return new e({ type: "bigint", ...h(n) });
}
function di(e, n) {
  return new e({ type: "bigint", coerce: !0, ...h(n) });
}
function _i(e, n) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...h(n),
  });
}
function mi(e, n) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...h(n),
  });
}
function pi(e, n) {
  return new e({ type: "symbol", ...h(n) });
}
function fi(e, n) {
  return new e({ type: "undefined", ...h(n) });
}
function gi(e, n) {
  return new e({ type: "null", ...h(n) });
}
function hi(e) {
  return new e({ type: "any" });
}
function je(e) {
  return new e({ type: "unknown" });
}
function vi(e, n) {
  return new e({ type: "never", ...h(n) });
}
function yi(e, n) {
  return new e({ type: "void", ...h(n) });
}
function bi(e, n) {
  return new e({ type: "date", ...h(n) });
}
function wi(e, n) {
  return new e({ type: "date", coerce: !0, ...h(n) });
}
function ki(e, n) {
  return new e({ type: "nan", ...h(n) });
}
function ie(e, n) {
  return new Et({ check: "less_than", ...h(n), value: e, inclusive: !1 });
}
function F(e, n) {
  return new Et({ check: "less_than", ...h(n), value: e, inclusive: !0 });
}
function ae(e, n) {
  return new Tt({ check: "greater_than", ...h(n), value: e, inclusive: !1 });
}
function L(e, n) {
  return new Tt({ check: "greater_than", ...h(n), value: e, inclusive: !0 });
}
function xi(e) {
  return ae(0, e);
}
function $i(e) {
  return ie(0, e);
}
function zi(e) {
  return F(0, e);
}
function Si(e) {
  return L(0, e);
}
function ke(e, n) {
  return new $r({ check: "multiple_of", ...h(n), value: e });
}
function Pe(e, n) {
  return new Ir({ check: "max_size", ...h(n), maximum: e });
}
function xe(e, n) {
  return new Ar({ check: "min_size", ...h(n), minimum: e });
}
function ot(e, n) {
  return new Dr({ check: "size_equals", ...h(n), size: e });
}
function Oe(e, n) {
  return new jr({ check: "max_length", ...h(n), maximum: e });
}
function pe(e, n) {
  return new Pr({ check: "min_length", ...h(n), minimum: e });
}
function Ne(e, n) {
  return new Or({ check: "length_equals", ...h(n), length: e });
}
function it(e, n) {
  return new Nr({
    check: "string_format",
    format: "regex",
    ...h(n),
    pattern: e,
  });
}
function at(e) {
  return new Er({ check: "string_format", format: "lowercase", ...h(e) });
}
function st(e) {
  return new Tr({ check: "string_format", format: "uppercase", ...h(e) });
}
function ut(e, n) {
  return new Ur({
    check: "string_format",
    format: "includes",
    ...h(n),
    includes: e,
  });
}
function lt(e, n) {
  return new Zr({
    check: "string_format",
    format: "starts_with",
    ...h(n),
    prefix: e,
  });
}
function ct(e, n) {
  return new Cr({
    check: "string_format",
    format: "ends_with",
    ...h(n),
    suffix: e,
  });
}
function Ii(e, n, r) {
  return new Rr({ check: "property", property: e, schema: n, ...h(r) });
}
function dt(e, n) {
  return new Vr({ check: "mime_type", mime: e, ...h(n) });
}
function se(e) {
  return new Lr({ check: "overwrite", tx: e });
}
function _t(e) {
  return se((n) => n.normalize(e));
}
function mt() {
  return se((e) => e.trim());
}
function pt() {
  return se((e) => e.toLowerCase());
}
function ft() {
  return se((e) => e.toUpperCase());
}
function gt(e, n, r) {
  return new e({ type: "array", element: n, ...h(r) });
}
function tc(e, n, r) {
  return new e({ type: "union", options: n, ...h(r) });
}
function nc(e, n, r, i) {
  return new e({ type: "union", options: r, discriminator: n, ...h(i) });
}
function rc(e, n, r) {
  return new e({ type: "intersection", left: n, right: r });
}
function Ai(e, n, r, i) {
  let t = r instanceof z,
    o = t ? i : r,
    a = t ? r : null;
  return new e({ type: "tuple", items: n, rest: a, ...h(o) });
}
function oc(e, n, r, i) {
  return new e({ type: "record", keyType: n, valueType: r, ...h(i) });
}
function ic(e, n, r, i) {
  return new e({ type: "map", keyType: n, valueType: r, ...h(i) });
}
function ac(e, n, r) {
  return new e({ type: "set", valueType: n, ...h(r) });
}
function sc(e, n, r) {
  let i = Array.isArray(n) ? Object.fromEntries(n.map((t) => [t, t])) : n;
  return new e({ type: "enum", entries: i, ...h(r) });
}
function uc(e, n, r) {
  return new e({ type: "enum", entries: n, ...h(r) });
}
function lc(e, n, r) {
  return new e({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...h(r),
  });
}
function Di(e, n) {
  return new e({ type: "file", ...h(n) });
}
function cc(e, n) {
  return new e({ type: "transform", transform: n });
}
function dc(e, n) {
  return new e({ type: "optional", innerType: n });
}
function _c(e, n) {
  return new e({ type: "nullable", innerType: n });
}
function mc(e, n, r) {
  return new e({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    },
  });
}
function pc(e, n, r) {
  return new e({ type: "nonoptional", innerType: n, ...h(r) });
}
function fc(e, n) {
  return new e({ type: "success", innerType: n });
}
function gc(e, n, r) {
  return new e({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r,
  });
}
function hc(e, n, r) {
  return new e({ type: "pipe", in: n, out: r });
}
function vc(e, n) {
  return new e({ type: "readonly", innerType: n });
}
function yc(e, n, r) {
  return new e({ type: "template_literal", parts: n, ...h(r) });
}
function bc(e, n) {
  return new e({ type: "lazy", getter: n });
}
function wc(e, n) {
  return new e({ type: "promise", innerType: n });
}
function ji(e, n, r) {
  let i = h(r);
  return (
    i.abort ?? (i.abort = !0),
    new e({ type: "custom", check: "custom", fn: n, ...i })
  );
}
function Pi(e, n, r) {
  return new e({ type: "custom", check: "custom", fn: n, ...h(r) });
}
function Oi(e, n) {
  let { case: r, error: i, truthy: t, falsy: o } = h(n),
    a = new Set(t ?? ["true", "1", "yes", "on", "y", "enabled"]),
    s = new Set(o ?? ["false", "0", "no", "off", "n", "disabled"]),
    l = e.Pipe ?? tt,
    u = e.Boolean ?? Qe,
    m = e.Unknown ?? me,
    p = new m({
      type: "unknown",
      checks: [
        {
          _zod: {
            check: (f) => {
              if (typeof f.value == "string") {
                let d = f.value;
                (r !== "sensitive" && (d = d.toLowerCase()),
                  a.has(d)
                    ? (f.value = !0)
                    : s.has(d)
                      ? (f.value = !1)
                      : f.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...a, ...s],
                          input: f.value,
                          inst: p,
                        }));
              } else
                f.issues.push({
                  code: "invalid_type",
                  expected: "string",
                  input: f.value,
                });
            },
            def: { check: "custom" },
            onattach: [],
          },
        },
      ],
      error: i,
    });
  return new l({
    type: "pipe",
    in: p,
    out: new u({ type: "boolean", error: i }),
    error: i,
  });
}
var dn = class {
  constructor(n) {
    ((this._def = n), (this.def = n));
  }
  implement(n) {
    if (typeof n != "function")
      throw new Error("implement() must be called with a function");
    let r = (...i) => {
      let t = this._def.input
        ? At(this._def.input, i, void 0, { callee: r })
        : i;
      if (!Array.isArray(t))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema.",
        );
      let o = n(...t);
      return this._def.output
        ? At(this._def.output, o, void 0, { callee: r })
        : o;
    };
    return r;
  }
  implementAsync(n) {
    if (typeof n != "function")
      throw new Error("implement() must be called with a function");
    let r = async (...i) => {
      let t = this._def.input
        ? await jt(this._def.input, i, void 0, { callee: r })
        : i;
      if (!Array.isArray(t))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema.",
        );
      let o = await n(...t);
      return this._def.output
        ? jt(this._def.output, o, void 0, { callee: r })
        : o;
    };
    return r;
  }
  input(...n) {
    let r = this.constructor;
    return Array.isArray(n[0])
      ? new r({
          type: "function",
          input: new we({ type: "tuple", items: n[0], rest: n[1] }),
          output: this._def.output,
        })
      : new r({ type: "function", input: n[0], output: this._def.output });
  }
  output(n) {
    let r = this.constructor;
    return new r({ type: "function", input: this._def.input, output: n });
  }
};
function Ni(e) {
  return new dn({
    type: "function",
    input: Array.isArray(e?.input)
      ? Ai(we, e?.input)
      : (e?.input ?? gt(et, je(me))),
    output: e?.output ?? je(me),
  });
}
var ht = class {
  constructor(n) {
    ((this.counter = 0),
      (this.metadataRegistry = n?.metadata ?? Q),
      (this.target = n?.target ?? "draft-2020-12"),
      (this.unrepresentable = n?.unrepresentable ?? "throw"),
      (this.override = n?.override ?? (() => {})),
      (this.io = n?.io ?? "output"),
      (this.seen = new Map()));
  }
  process(n, r = { path: [], schemaPath: [] }) {
    var i;
    let t = n._zod.def,
      o = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      a = this.seen.get(n);
    if (a)
      return (
        a.count++,
        r.schemaPath.includes(n) && (a.cycle = r.path),
        a.schema
      );
    let s = { schema: {}, count: 1, cycle: void 0 };
    (this.seen.set(n, s),
      n._zod.toJSONSchema && (s.schema = n._zod.toJSONSchema()));
    let l = { ...r, schemaPath: [...r.schemaPath, n], path: r.path },
      u = n._zod.parent;
    if (u) ((s.ref = u), this.process(u, l), (this.seen.get(u).isParent = !0));
    else {
      let f = s.schema;
      switch (t.type) {
        case "string": {
          let d = f;
          d.type = "string";
          let {
            minimum: v,
            maximum: k,
            format: w,
            patterns: $,
            contentEncoding: S,
          } = n._zod.bag;
          if (
            (typeof v == "number" && (d.minLength = v),
            typeof k == "number" && (d.maxLength = k),
            w && ((d.format = o[w] ?? w), d.format === "" && delete d.format),
            S && (d.contentEncoding = S),
            $ && $.size > 0)
          ) {
            let I = [...$];
            I.length === 1
              ? (d.pattern = I[0].source)
              : I.length > 1 &&
                (s.schema.allOf = [
                  ...I.map((g) => ({
                    ...(this.target === "draft-7" ? { type: "string" } : {}),
                    pattern: g.source,
                  })),
                ]);
          }
          break;
        }
        case "number": {
          let d = f,
            {
              minimum: v,
              maximum: k,
              format: w,
              multipleOf: $,
              exclusiveMaximum: S,
              exclusiveMinimum: I,
            } = n._zod.bag;
          (typeof w == "string" && w.includes("int")
            ? (d.type = "integer")
            : (d.type = "number"),
            typeof I == "number" && (d.exclusiveMinimum = I),
            typeof v == "number" &&
              ((d.minimum = v),
              typeof I == "number" &&
                (I >= v ? delete d.minimum : delete d.exclusiveMinimum)),
            typeof S == "number" && (d.exclusiveMaximum = S),
            typeof k == "number" &&
              ((d.maximum = k),
              typeof S == "number" &&
                (S <= k ? delete d.maximum : delete d.exclusiveMaximum)),
            typeof $ == "number" && (d.multipleOf = $));
          break;
        }
        case "boolean": {
          let d = f;
          d.type = "boolean";
          break;
        }
        case "bigint": {
          if (this.unrepresentable === "throw")
            throw new Error("BigInt cannot be represented in JSON Schema");
          break;
        }
        case "symbol": {
          if (this.unrepresentable === "throw")
            throw new Error("Symbols cannot be represented in JSON Schema");
          break;
        }
        case "undefined": {
          let d = f;
          d.type = "null";
          break;
        }
        case "null": {
          f.type = "null";
          break;
        }
        case "any":
          break;
        case "unknown":
          break;
        case "never": {
          f.not = {};
          break;
        }
        case "void": {
          if (this.unrepresentable === "throw")
            throw new Error("Void cannot be represented in JSON Schema");
          break;
        }
        case "date": {
          if (this.unrepresentable === "throw")
            throw new Error("Date cannot be represented in JSON Schema");
          break;
        }
        case "array": {
          let d = f,
            { minimum: v, maximum: k } = n._zod.bag;
          (typeof v == "number" && (d.minItems = v),
            typeof k == "number" && (d.maxItems = k),
            (d.type = "array"),
            (d.items = this.process(t.element, {
              ...l,
              path: [...l.path, "items"],
            })));
          break;
        }
        case "object": {
          let d = f;
          ((d.type = "object"), (d.properties = {}));
          let v = t.shape;
          for (let $ in v)
            d.properties[$] = this.process(v[$], {
              ...l,
              path: [...l.path, "properties", $],
            });
          let k = new Set(Object.keys(v)),
            w = new Set(
              [...k].filter(($) => {
                let S = t.shape[$]._zod;
                return this.io === "input"
                  ? S.optin === void 0
                  : S.optout === void 0;
              }),
            );
          (w.size > 0 && (d.required = Array.from(w)),
            t.catchall?._zod.def.type === "never"
              ? (d.additionalProperties = !1)
              : t.catchall
                ? t.catchall &&
                  (d.additionalProperties = this.process(t.catchall, {
                    ...l,
                    path: [...l.path, "additionalProperties"],
                  }))
                : this.io === "output" && (d.additionalProperties = !1));
          break;
        }
        case "union": {
          let d = f;
          d.anyOf = t.options.map((v, k) =>
            this.process(v, { ...l, path: [...l.path, "anyOf", k] }),
          );
          break;
        }
        case "intersection": {
          let d = f,
            v = this.process(t.left, { ...l, path: [...l.path, "allOf", 0] }),
            k = this.process(t.right, { ...l, path: [...l.path, "allOf", 1] }),
            w = (S) => "allOf" in S && Object.keys(S).length === 1,
            $ = [...(w(v) ? v.allOf : [v]), ...(w(k) ? k.allOf : [k])];
          d.allOf = $;
          break;
        }
        case "tuple": {
          let d = f;
          d.type = "array";
          let v = t.items.map(($, S) =>
            this.process($, { ...l, path: [...l.path, "prefixItems", S] }),
          );
          if (
            (this.target === "draft-2020-12"
              ? (d.prefixItems = v)
              : (d.items = v),
            t.rest)
          ) {
            let $ = this.process(t.rest, { ...l, path: [...l.path, "items"] });
            this.target === "draft-2020-12"
              ? (d.items = $)
              : (d.additionalItems = $);
          }
          t.rest &&
            (d.items = this.process(t.rest, {
              ...l,
              path: [...l.path, "items"],
            }));
          let { minimum: k, maximum: w } = n._zod.bag;
          (typeof k == "number" && (d.minItems = k),
            typeof w == "number" && (d.maxItems = w));
          break;
        }
        case "record": {
          let d = f;
          ((d.type = "object"),
            (d.propertyNames = this.process(t.keyType, {
              ...l,
              path: [...l.path, "propertyNames"],
            })),
            (d.additionalProperties = this.process(t.valueType, {
              ...l,
              path: [...l.path, "additionalProperties"],
            })));
          break;
        }
        case "map": {
          if (this.unrepresentable === "throw")
            throw new Error("Map cannot be represented in JSON Schema");
          break;
        }
        case "set": {
          if (this.unrepresentable === "throw")
            throw new Error("Set cannot be represented in JSON Schema");
          break;
        }
        case "enum": {
          let d = f,
            v = Le(t.entries);
          (v.every((k) => typeof k == "number") && (d.type = "number"),
            v.every((k) => typeof k == "string") && (d.type = "string"),
            (d.enum = v));
          break;
        }
        case "literal": {
          let d = f,
            v = [];
          for (let k of t.values)
            if (k === void 0) {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "Literal `undefined` cannot be represented in JSON Schema",
                );
            } else if (typeof k == "bigint") {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "BigInt literals cannot be represented in JSON Schema",
                );
              v.push(Number(k));
            } else v.push(k);
          if (v.length !== 0)
            if (v.length === 1) {
              let k = v[0];
              ((d.type = k === null ? "null" : typeof k), (d.const = k));
            } else
              (v.every((k) => typeof k == "number") && (d.type = "number"),
                v.every((k) => typeof k == "string") && (d.type = "string"),
                v.every((k) => typeof k == "boolean") && (d.type = "string"),
                v.every((k) => k === null) && (d.type = "null"),
                (d.enum = v));
          break;
        }
        case "file": {
          let d = f,
            v = { type: "string", format: "binary", contentEncoding: "binary" },
            { minimum: k, maximum: w, mime: $ } = n._zod.bag;
          (k !== void 0 && (v.minLength = k),
            w !== void 0 && (v.maxLength = w),
            $
              ? $.length === 1
                ? ((v.contentMediaType = $[0]), Object.assign(d, v))
                : (d.anyOf = $.map((S) => ({ ...v, contentMediaType: S })))
              : Object.assign(d, v));
          break;
        }
        case "transform": {
          if (this.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
          break;
        }
        case "nullable": {
          let d = this.process(t.innerType, l);
          f.anyOf = [d, { type: "null" }];
          break;
        }
        case "nonoptional": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "success": {
          let d = f;
          d.type = "boolean";
          break;
        }
        case "default": {
          (this.process(t.innerType, l),
            (s.ref = t.innerType),
            (f.default = t.defaultValue));
          break;
        }
        case "prefault": {
          (this.process(t.innerType, l),
            (s.ref = t.innerType),
            this.io === "input" && (f._prefault = t.defaultValue));
          break;
        }
        case "catch": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          let d;
          try {
            d = t.catchValue(void 0);
          } catch {
            throw new Error(
              "Dynamic catch values are not supported in JSON Schema",
            );
          }
          f.default = d;
          break;
        }
        case "nan": {
          if (this.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
          break;
        }
        case "template_literal": {
          let d = f,
            v = n._zod.pattern;
          if (!v) throw new Error("Pattern not found in template literal");
          ((d.type = "string"), (d.pattern = v.source));
          break;
        }
        case "pipe": {
          let d =
            this.io === "input"
              ? t.in._zod.def.type === "transform"
                ? t.out
                : t.in
              : t.out;
          (this.process(d, l), (s.ref = d));
          break;
        }
        case "readonly": {
          (this.process(t.innerType, l),
            (s.ref = t.innerType),
            (f.readOnly = !0));
          break;
        }
        case "promise": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "optional": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "lazy": {
          let d = n._zod.innerType;
          (this.process(d, l), (s.ref = d));
          break;
        }
        case "custom": {
          if (this.unrepresentable === "throw")
            throw new Error(
              "Custom types cannot be represented in JSON Schema",
            );
          break;
        }
        default:
      }
    }
    let m = this.metadataRegistry.get(n);
    return (
      m && Object.assign(s.schema, m),
      this.io === "input" &&
        C(n) &&
        (delete s.schema.examples, delete s.schema.default),
      this.io === "input" &&
        s.schema._prefault &&
        ((i = s.schema).default ?? (i.default = s.schema._prefault)),
      delete s.schema._prefault,
      this.seen.get(n).schema
    );
  }
  emit(n, r) {
    let i = {
        cycles: r?.cycles ?? "ref",
        reused: r?.reused ?? "inline",
        external: r?.external ?? void 0,
      },
      t = this.seen.get(n);
    if (!t) throw new Error("Unprocessed schema. This is a bug in Zod.");
    let o = (m) => {
        let p = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (i.external) {
          let k = i.external.registry.get(m[0])?.id;
          if (k) return { ref: i.external.uri(k) };
          let w = m[1].defId ?? m[1].schema.id ?? `schema${this.counter++}`;
          return (
            (m[1].defId = w),
            { defId: w, ref: `${i.external.uri("__shared")}#/${p}/${w}` }
          );
        }
        if (m[1] === t) return { ref: "#" };
        let d = `#/${p}/`,
          v = m[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: v, ref: d + v };
      },
      a = (m) => {
        if (m[1].schema.$ref) return;
        let p = m[1],
          { ref: f, defId: d } = o(m);
        ((p.def = { ...p.schema }), d && (p.defId = d));
        let v = p.schema;
        for (let k in v) delete v[k];
        v.$ref = f;
      };
    for (let m of this.seen.entries()) {
      let p = m[1];
      if (n === m[0]) {
        a(m);
        continue;
      }
      if (i.external) {
        let d = i.external.registry.get(m[0])?.id;
        if (n !== m[0] && d) {
          a(m);
          continue;
        }
      }
      if (this.metadataRegistry.get(m[0])?.id) {
        a(m);
        continue;
      }
      if (p.cycle) {
        if (i.cycles === "throw")
          throw new Error(`Cycle detected: #/${p.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        i.cycles === "ref" && a(m);
        continue;
      }
      if (p.count > 1 && i.reused === "ref") {
        a(m);
        continue;
      }
    }
    let s = (m, p) => {
      let f = this.seen.get(m),
        d = f.def ?? f.schema,
        v = { ...d };
      if (f.ref === null) return;
      let k = f.ref;
      if (((f.ref = null), k)) {
        s(k, p);
        let w = this.seen.get(k).schema;
        w.$ref && p.target === "draft-7"
          ? ((d.allOf = d.allOf ?? []), d.allOf.push(w))
          : (Object.assign(d, w), Object.assign(d, v));
      }
      f.isParent || this.override({ zodSchema: m, jsonSchema: d });
    };
    for (let m of [...this.seen.entries()].reverse())
      s(m[0], { target: this.target });
    let l = {};
    (this.target === "draft-2020-12"
      ? (l.$schema = "https://json-schema.org/draft/2020-12/schema")
      : this.target === "draft-7"
        ? (l.$schema = "http://json-schema.org/draft-07/schema#")
        : console.warn(`Invalid target: ${this.target}`),
      Object.assign(l, t.def));
    let u = i.external?.defs ?? {};
    for (let m of this.seen.entries()) {
      let p = m[1];
      p.def && p.defId && (u[p.defId] = p.def);
    }
    !i.external &&
      Object.keys(u).length > 0 &&
      (this.target === "draft-2020-12" ? (l.$defs = u) : (l.definitions = u));
    try {
      return JSON.parse(JSON.stringify(l));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function Ei(e, n) {
  if (e instanceof De) {
    let i = new ht(n),
      t = {};
    for (let s of e._idmap.entries()) {
      let [l, u] = s;
      i.process(u);
    }
    let o = {},
      a = { registry: e, uri: n?.uri || ((s) => s), defs: t };
    for (let s of e._idmap.entries()) {
      let [l, u] = s;
      o[l] = i.emit(u, { ...n, external: a });
    }
    if (Object.keys(t).length > 0) {
      let s = i.target === "draft-2020-12" ? "$defs" : "definitions";
      o.__shared = { [s]: t };
    }
    return { schemas: o };
  }
  let r = new ht(n);
  return (r.process(e), r.emit(e, n));
}
function C(e, n) {
  let r = n ?? { seen: new Set() };
  if (r.seen.has(e)) return !1;
  r.seen.add(e);
  let t = e._zod.def;
  switch (t.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return C(t.element, r);
    case "object": {
      for (let o in t.shape) if (C(t.shape[o], r)) return !0;
      return !1;
    }
    case "union": {
      for (let o of t.options) if (C(o, r)) return !0;
      return !1;
    }
    case "intersection":
      return C(t.left, r) || C(t.right, r);
    case "tuple": {
      for (let o of t.items) if (C(o, r)) return !0;
      return !!(t.rest && C(t.rest, r));
    }
    case "record":
      return C(t.keyType, r) || C(t.valueType, r);
    case "map":
      return C(t.keyType, r) || C(t.valueType, r);
    case "set":
      return C(t.valueType, r);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return C(t.innerType, r);
    case "lazy":
      return C(t.getter(), r);
    case "default":
      return C(t.innerType, r);
    case "prefault":
      return C(t.innerType, r);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return C(t.in, r) || C(t.out, r);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${t.type}`);
}
var Os = {};
var gn = {};
fe(gn, {
  ZodISODate: () => mn,
  ZodISODateTime: () => _n,
  ZodISODuration: () => fn,
  ZodISOTime: () => pn,
  date: () => Ui,
  datetime: () => Ti,
  duration: () => Ci,
  time: () => Zi,
});
var _n = c("ZodISODateTime", (e, n) => {
  (to.init(e, n), E.init(e, n));
});
function Ti(e) {
  return Jo(_n, e);
}
var mn = c("ZodISODate", (e, n) => {
  (no.init(e, n), E.init(e, n));
});
function Ui(e) {
  return Xo(mn, e);
}
var pn = c("ZodISOTime", (e, n) => {
  (ro.init(e, n), E.init(e, n));
});
function Zi(e) {
  return Qo(pn, e);
}
var fn = c("ZodISODuration", (e, n) => {
  (oo.init(e, n), E.init(e, n));
});
function Ci(e) {
  return ei(fn, e);
}
var Es = (e, n) => {
    (Ke.init(e, n),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (r) => Ye(e, r) },
        flatten: { value: (r) => Ge(e, r) },
        addIssue: { value: (r) => e.issues.push(r) },
        addIssues: { value: (r) => e.issues.push(...r) },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  xc = c("ZodError", Es),
  Ee = c("ZodError", Es, { Parent: Error });
var Ri = It(Ee),
  Vi = Dt(Ee),
  Li = Pt(Ee),
  Mi = Ot(Ee);
var D = c(
    "ZodType",
    (e, n) => (
      z.init(e, n),
      (e.def = n),
      Object.defineProperty(e, "_def", { value: n }),
      (e.check = (...r) =>
        e.clone({
          ...n,
          checks: [
            ...(n.checks ?? []),
            ...r.map((i) =>
              typeof i == "function"
                ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } }
                : i,
            ),
          ],
        })),
      (e.clone = (r, i) => q(e, r, i)),
      (e.brand = () => e),
      (e.register = (r, i) => (r.add(e, i), e)),
      (e.parse = (r, i) => Ri(e, r, i, { callee: e.parse })),
      (e.safeParse = (r, i) => Li(e, r, i)),
      (e.parseAsync = async (r, i) => Vi(e, r, i, { callee: e.parseAsync })),
      (e.safeParseAsync = async (r, i) => Mi(e, r, i)),
      (e.spa = e.safeParseAsync),
      (e.refine = (r, i) => e.check(bu(r, i))),
      (e.superRefine = (r) => e.check(wu(r))),
      (e.overwrite = (r) => e.check(se(r))),
      (e.optional = () => yn(e)),
      (e.nullable = () => bn(e)),
      (e.nullish = () => yn(bn(e))),
      (e.nonoptional = (r) => uu(e, r)),
      (e.array = () => da(e)),
      (e.or = (r) => Sn([e, r])),
      (e.and = (r) => Fs(e, r)),
      (e.transform = (r) => wn(e, pa(r))),
      (e.default = (r) => iu(e, r)),
      (e.prefault = (r) => su(e, r)),
      (e.catch = (r) => du(e, r)),
      (e.pipe = (r) => wn(e, r)),
      (e.readonly = () => pu(e)),
      (e.describe = (r) => {
        let i = e.clone();
        return (Q.add(i, { description: r }), i);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return Q.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...r) => {
        if (r.length === 0) return Q.get(e);
        let i = e.clone();
        return (Q.add(i, r[0]), i);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  Bi = c("_ZodString", (e, n) => {
    (Xe.init(e, n), D.init(e, n));
    let r = e._zod.bag;
    ((e.format = r.format ?? null),
      (e.minLength = r.minimum ?? null),
      (e.maxLength = r.maximum ?? null),
      (e.regex = (...i) => e.check(it(...i))),
      (e.includes = (...i) => e.check(ut(...i))),
      (e.startsWith = (...i) => e.check(lt(...i))),
      (e.endsWith = (...i) => e.check(ct(...i))),
      (e.min = (...i) => e.check(pe(...i))),
      (e.max = (...i) => e.check(Oe(...i))),
      (e.length = (...i) => e.check(Ne(...i))),
      (e.nonempty = (...i) => e.check(pe(1, ...i))),
      (e.lowercase = (i) => e.check(at(i))),
      (e.uppercase = (i) => e.check(st(i))),
      (e.trim = () => e.check(mt())),
      (e.normalize = (...i) => e.check(_t(...i))),
      (e.toLowerCase = () => e.check(pt())),
      (e.toUpperCase = () => e.check(ft())));
  }),
  kn = c("ZodString", (e, n) => {
    (Xe.init(e, n),
      Bi.init(e, n),
      (e.email = (r) => e.check(qt(Wi, r))),
      (e.url = (r) => e.check(Kt(Fi, r))),
      (e.jwt = (r) => e.check(cn(ua, r))),
      (e.emoji = (r) => e.check(Gt(Ki, r))),
      (e.guid = (r) => e.check(rt(hn, r))),
      (e.uuid = (r) => e.check(Ht(le, r))),
      (e.uuidv4 = (r) => e.check(Bt(le, r))),
      (e.uuidv6 = (r) => e.check(Wt(le, r))),
      (e.uuidv7 = (r) => e.check(Ft(le, r))),
      (e.nanoid = (r) => e.check(Yt(Gi, r))),
      (e.guid = (r) => e.check(rt(hn, r))),
      (e.cuid = (r) => e.check(Jt(Yi, r))),
      (e.cuid2 = (r) => e.check(Xt(Ji, r))),
      (e.ulid = (r) => e.check(Qt(Xi, r))),
      (e.base64 = (r) => e.check(sn(ia, r))),
      (e.base64url = (r) => e.check(un(aa, r))),
      (e.xid = (r) => e.check(en(Qi, r))),
      (e.ksuid = (r) => e.check(tn(ea, r))),
      (e.ipv4 = (r) => e.check(nn(ta, r))),
      (e.ipv6 = (r) => e.check(rn(na, r))),
      (e.cidrv4 = (r) => e.check(on(ra, r))),
      (e.cidrv6 = (r) => e.check(an(oa, r))),
      (e.e164 = (r) => e.check(ln(sa, r))),
      (e.datetime = (r) => e.check(Ti(r))),
      (e.date = (r) => e.check(Ui(r))),
      (e.time = (r) => e.check(Zi(r))),
      (e.duration = (r) => e.check(Ci(r))));
  });
function qi(e) {
  return Go(kn, e);
}
var E = c("ZodStringFormat", (e, n) => {
    (N.init(e, n), Bi.init(e, n));
  }),
  Wi = c("ZodEmail", (e, n) => {
    (Wr.init(e, n), E.init(e, n));
  });
function zc(e) {
  return qt(Wi, e);
}
var hn = c("ZodGUID", (e, n) => {
  (Hr.init(e, n), E.init(e, n));
});
function Sc(e) {
  return rt(hn, e);
}
var le = c("ZodUUID", (e, n) => {
  (Br.init(e, n), E.init(e, n));
});
function Ic(e) {
  return Ht(le, e);
}
function Ac(e) {
  return Bt(le, e);
}
function Dc(e) {
  return Wt(le, e);
}
function jc(e) {
  return Ft(le, e);
}
var Fi = c("ZodURL", (e, n) => {
  (Fr.init(e, n), E.init(e, n));
});
function Pc(e) {
  return Kt(Fi, e);
}
var Ki = c("ZodEmoji", (e, n) => {
  (Kr.init(e, n), E.init(e, n));
});
function Oc(e) {
  return Gt(Ki, e);
}
var Gi = c("ZodNanoID", (e, n) => {
  (Gr.init(e, n), E.init(e, n));
});
function Nc(e) {
  return Yt(Gi, e);
}
var Yi = c("ZodCUID", (e, n) => {
  (Yr.init(e, n), E.init(e, n));
});
function Ec(e) {
  return Jt(Yi, e);
}
var Ji = c("ZodCUID2", (e, n) => {
  (Jr.init(e, n), E.init(e, n));
});
function Tc(e) {
  return Xt(Ji, e);
}
var Xi = c("ZodULID", (e, n) => {
  (Xr.init(e, n), E.init(e, n));
});
function Uc(e) {
  return Qt(Xi, e);
}
var Qi = c("ZodXID", (e, n) => {
  (Qr.init(e, n), E.init(e, n));
});
function Zc(e) {
  return en(Qi, e);
}
var ea = c("ZodKSUID", (e, n) => {
  (eo.init(e, n), E.init(e, n));
});
function Cc(e) {
  return tn(ea, e);
}
var ta = c("ZodIPv4", (e, n) => {
  (io.init(e, n), E.init(e, n));
});
function Rc(e) {
  return nn(ta, e);
}
var na = c("ZodIPv6", (e, n) => {
  (ao.init(e, n), E.init(e, n));
});
function Vc(e) {
  return rn(na, e);
}
var ra = c("ZodCIDRv4", (e, n) => {
  (so.init(e, n), E.init(e, n));
});
function Lc(e) {
  return on(ra, e);
}
var oa = c("ZodCIDRv6", (e, n) => {
  (uo.init(e, n), E.init(e, n));
});
function Mc(e) {
  return an(oa, e);
}
var ia = c("ZodBase64", (e, n) => {
  (co.init(e, n), E.init(e, n));
});
function qc(e) {
  return sn(ia, e);
}
var aa = c("ZodBase64URL", (e, n) => {
  (_o.init(e, n), E.init(e, n));
});
function Hc(e) {
  return un(aa, e);
}
var sa = c("ZodE164", (e, n) => {
  (mo.init(e, n), E.init(e, n));
});
function Bc(e) {
  return ln(sa, e);
}
var ua = c("ZodJWT", (e, n) => {
  (po.init(e, n), E.init(e, n));
});
function Wc(e) {
  return cn(ua, e);
}
var yt = c("ZodNumber", (e, n) => {
  (Ct.init(e, n),
    D.init(e, n),
    (e.gt = (i, t) => e.check(ae(i, t))),
    (e.gte = (i, t) => e.check(L(i, t))),
    (e.min = (i, t) => e.check(L(i, t))),
    (e.lt = (i, t) => e.check(ie(i, t))),
    (e.lte = (i, t) => e.check(F(i, t))),
    (e.max = (i, t) => e.check(F(i, t))),
    (e.int = (i) => e.check(Hi(i))),
    (e.safe = (i) => e.check(Hi(i))),
    (e.positive = (i) => e.check(ae(0, i))),
    (e.nonnegative = (i) => e.check(L(0, i))),
    (e.negative = (i) => e.check(ie(0, i))),
    (e.nonpositive = (i) => e.check(F(0, i))),
    (e.multipleOf = (i, t) => e.check(ke(i, t))),
    (e.step = (i, t) => e.check(ke(i, t))),
    (e.finite = () => e));
  let r = e._zod.bag;
  ((e.minValue =
    Math.max(
      r.minimum ?? Number.NEGATIVE_INFINITY,
      r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
    ) ?? null),
    (e.maxValue =
      Math.min(
        r.maximum ?? Number.POSITIVE_INFINITY,
        r.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
      ) ?? null),
    (e.isInt =
      (r.format ?? "").includes("int") ||
      Number.isSafeInteger(r.multipleOf ?? 0.5)),
    (e.isFinite = !0),
    (e.format = r.format ?? null));
});
function Ts(e) {
  return ti(yt, e);
}
var Te = c("ZodNumberFormat", (e, n) => {
  (fo.init(e, n), yt.init(e, n));
});
function Hi(e) {
  return ri(Te, e);
}
function Fc(e) {
  return oi(Te, e);
}
function Kc(e) {
  return ii(Te, e);
}
function Gc(e) {
  return ai(Te, e);
}
function Yc(e) {
  return si(Te, e);
}
var bt = c("ZodBoolean", (e, n) => {
  (Qe.init(e, n), D.init(e, n));
});
function Us(e) {
  return ui(bt, e);
}
var wt = c("ZodBigInt", (e, n) => {
  (Rt.init(e, n),
    D.init(e, n),
    (e.gte = (i, t) => e.check(L(i, t))),
    (e.min = (i, t) => e.check(L(i, t))),
    (e.gt = (i, t) => e.check(ae(i, t))),
    (e.gte = (i, t) => e.check(L(i, t))),
    (e.min = (i, t) => e.check(L(i, t))),
    (e.lt = (i, t) => e.check(ie(i, t))),
    (e.lte = (i, t) => e.check(F(i, t))),
    (e.max = (i, t) => e.check(F(i, t))),
    (e.positive = (i) => e.check(ae(BigInt(0), i))),
    (e.negative = (i) => e.check(ie(BigInt(0), i))),
    (e.nonpositive = (i) => e.check(F(BigInt(0), i))),
    (e.nonnegative = (i) => e.check(L(BigInt(0), i))),
    (e.multipleOf = (i, t) => e.check(ke(i, t))));
  let r = e._zod.bag;
  ((e.minValue = r.minimum ?? null),
    (e.maxValue = r.maximum ?? null),
    (e.format = r.format ?? null));
});
function Jc(e) {
  return ci(wt, e);
}
var la = c("ZodBigIntFormat", (e, n) => {
  (go.init(e, n), wt.init(e, n));
});
function Xc(e) {
  return _i(la, e);
}
function Qc(e) {
  return mi(la, e);
}
var Zs = c("ZodSymbol", (e, n) => {
  (ho.init(e, n), D.init(e, n));
});
function ed(e) {
  return pi(Zs, e);
}
var Cs = c("ZodUndefined", (e, n) => {
  (vo.init(e, n), D.init(e, n));
});
function td(e) {
  return fi(Cs, e);
}
var Rs = c("ZodNull", (e, n) => {
  (yo.init(e, n), D.init(e, n));
});
function Vs(e) {
  return gi(Rs, e);
}
var Ls = c("ZodAny", (e, n) => {
  (bo.init(e, n), D.init(e, n));
});
function nd() {
  return hi(Ls);
}
var ca = c("ZodUnknown", (e, n) => {
  (me.init(e, n), D.init(e, n));
});
function vn() {
  return je(ca);
}
var Ms = c("ZodNever", (e, n) => {
  (wo.init(e, n), D.init(e, n));
});
function xn(e) {
  return vi(Ms, e);
}
var qs = c("ZodVoid", (e, n) => {
  (ko.init(e, n), D.init(e, n));
});
function rd(e) {
  return yi(qs, e);
}
var $n = c("ZodDate", (e, n) => {
  (xo.init(e, n),
    D.init(e, n),
    (e.min = (i, t) => e.check(L(i, t))),
    (e.max = (i, t) => e.check(F(i, t))));
  let r = e._zod.bag;
  ((e.minDate = r.minimum ? new Date(r.minimum) : null),
    (e.maxDate = r.maximum ? new Date(r.maximum) : null));
});
function od(e) {
  return bi($n, e);
}
var Hs = c("ZodArray", (e, n) => {
  (et.init(e, n),
    D.init(e, n),
    (e.element = n.element),
    (e.min = (r, i) => e.check(pe(r, i))),
    (e.nonempty = (r) => e.check(pe(1, r))),
    (e.max = (r, i) => e.check(Oe(r, i))),
    (e.length = (r, i) => e.check(Ne(r, i))),
    (e.unwrap = () => e.element));
});
function da(e, n) {
  return gt(Hs, e, n);
}
function id(e) {
  let n = e._zod.def.shape;
  return eu(Object.keys(n));
}
var zn = c("ZodObject", (e, n) => {
  ($o.init(e, n),
    D.init(e, n),
    y.defineLazy(e, "shape", () =>
      Object.fromEntries(Object.entries(e._zod.def.shape)),
    ),
    (e.keyof = () => Xs(Object.keys(e._zod.def.shape))),
    (e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: vn() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: vn() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: xn() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (r) => y.extend(e, r)),
    (e.merge = (r) => y.merge(e, r)),
    (e.pick = (r) => y.pick(e, r)),
    (e.omit = (r) => y.omit(e, r)),
    (e.partial = (...r) => y.partial(fa, e, r[0])),
    (e.required = (...r) => y.required(ga, e, r[0])));
});
function ad(e, n) {
  let r = {
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    ...y.normalizeParams(n),
  };
  return new zn(r);
}
function sd(e, n) {
  return new zn({
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: xn(),
    ...y.normalizeParams(n),
  });
}
function ud(e, n) {
  return new zn({
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: vn(),
    ...y.normalizeParams(n),
  });
}
var _a = c("ZodUnion", (e, n) => {
  (Vt.init(e, n), D.init(e, n), (e.options = n.options));
});
function Sn(e, n) {
  return new _a({ type: "union", options: e, ...y.normalizeParams(n) });
}
var Bs = c("ZodDiscriminatedUnion", (e, n) => {
  (_a.init(e, n), zo.init(e, n));
});
function ld(e, n, r) {
  return new Bs({
    type: "union",
    options: n,
    discriminator: e,
    ...y.normalizeParams(r),
  });
}
var Ws = c("ZodIntersection", (e, n) => {
  (So.init(e, n), D.init(e, n));
});
function Fs(e, n) {
  return new Ws({ type: "intersection", left: e, right: n });
}
var Ks = c("ZodTuple", (e, n) => {
  (we.init(e, n),
    D.init(e, n),
    (e.rest = (r) => e.clone({ ...e._zod.def, rest: r })));
});
function cd(e, n, r) {
  let i = n instanceof z,
    t = i ? r : n,
    o = i ? n : null;
  return new Ks({ type: "tuple", items: e, rest: o, ...y.normalizeParams(t) });
}
var ma = c("ZodRecord", (e, n) => {
  (Io.init(e, n),
    D.init(e, n),
    (e.keyType = n.keyType),
    (e.valueType = n.valueType));
});
function Gs(e, n, r) {
  return new ma({
    type: "record",
    keyType: e,
    valueType: n,
    ...y.normalizeParams(r),
  });
}
function dd(e, n, r) {
  return new ma({
    type: "record",
    keyType: Sn([e, xn()]),
    valueType: n,
    ...y.normalizeParams(r),
  });
}
var Ys = c("ZodMap", (e, n) => {
  (Ao.init(e, n),
    D.init(e, n),
    (e.keyType = n.keyType),
    (e.valueType = n.valueType));
});
function _d(e, n, r) {
  return new Ys({
    type: "map",
    keyType: e,
    valueType: n,
    ...y.normalizeParams(r),
  });
}
var Js = c("ZodSet", (e, n) => {
  (Do.init(e, n),
    D.init(e, n),
    (e.min = (...r) => e.check(xe(...r))),
    (e.nonempty = (r) => e.check(xe(1, r))),
    (e.max = (...r) => e.check(Pe(...r))),
    (e.size = (...r) => e.check(ot(...r))));
});
function md(e, n) {
  return new Js({ type: "set", valueType: e, ...y.normalizeParams(n) });
}
var vt = c("ZodEnum", (e, n) => {
  (jo.init(e, n),
    D.init(e, n),
    (e.enum = n.entries),
    (e.options = Object.values(n.entries)));
  let r = new Set(Object.keys(n.entries));
  ((e.extract = (i, t) => {
    let o = {};
    for (let a of i)
      if (r.has(a)) o[a] = n.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new vt({ ...n, checks: [], ...y.normalizeParams(t), entries: o });
  }),
    (e.exclude = (i, t) => {
      let o = { ...n.entries };
      for (let a of i)
        if (r.has(a)) delete o[a];
        else throw new Error(`Key ${a} not found in enum`);
      return new vt({ ...n, checks: [], ...y.normalizeParams(t), entries: o });
    }));
});
function Xs(e, n) {
  let r = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new vt({ type: "enum", entries: r, ...y.normalizeParams(n) });
}
function pd(e, n) {
  return new vt({ type: "enum", entries: e, ...y.normalizeParams(n) });
}
var Qs = c("ZodLiteral", (e, n) => {
  (Po.init(e, n),
    D.init(e, n),
    (e.values = new Set(n.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (n.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return n.values[0];
      },
    }));
});
function eu(e, n) {
  return new Qs({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...y.normalizeParams(n),
  });
}
var tu = c("ZodFile", (e, n) => {
  (Oo.init(e, n),
    D.init(e, n),
    (e.min = (r, i) => e.check(xe(r, i))),
    (e.max = (r, i) => e.check(Pe(r, i))),
    (e.mime = (r, i) => e.check(dt(Array.isArray(r) ? r : [r], i))));
});
function fd(e) {
  return Di(tu, e);
}
var nu = c("ZodTransform", (e, n) => {
  (No.init(e, n),
    D.init(e, n),
    (e._zod.parse = (r, i) => {
      r.addIssue = (o) => {
        if (typeof o == "string") r.issues.push(y.issue(o, r.value, n));
        else {
          let a = o;
          (a.fatal && (a.continue = !1),
            a.code ?? (a.code = "custom"),
            a.input ?? (a.input = r.value),
            a.inst ?? (a.inst = e),
            a.continue ?? (a.continue = !0),
            r.issues.push(y.issue(a)));
        }
      };
      let t = n.transform(r.value, r);
      return t instanceof Promise
        ? t.then((o) => ((r.value = o), r))
        : ((r.value = t), r);
    }));
});
function pa(e) {
  return new nu({ type: "transform", transform: e });
}
var fa = c("ZodOptional", (e, n) => {
  (Eo.init(e, n), D.init(e, n), (e.unwrap = () => e._zod.def.innerType));
});
function yn(e) {
  return new fa({ type: "optional", innerType: e });
}
var ru = c("ZodNullable", (e, n) => {
  (To.init(e, n), D.init(e, n), (e.unwrap = () => e._zod.def.innerType));
});
function bn(e) {
  return new ru({ type: "nullable", innerType: e });
}
function gd(e) {
  return yn(bn(e));
}
var ou = c("ZodDefault", (e, n) => {
  (Uo.init(e, n),
    D.init(e, n),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function iu(e, n) {
  return new ou({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : n;
    },
  });
}
var au = c("ZodPrefault", (e, n) => {
  (Zo.init(e, n), D.init(e, n), (e.unwrap = () => e._zod.def.innerType));
});
function su(e, n) {
  return new au({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : n;
    },
  });
}
var ga = c("ZodNonOptional", (e, n) => {
  (Co.init(e, n), D.init(e, n), (e.unwrap = () => e._zod.def.innerType));
});
function uu(e, n) {
  return new ga({ type: "nonoptional", innerType: e, ...y.normalizeParams(n) });
}
var lu = c("ZodSuccess", (e, n) => {
  (Ro.init(e, n), D.init(e, n), (e.unwrap = () => e._zod.def.innerType));
});
function hd(e) {
  return new lu({ type: "success", innerType: e });
}
var cu = c("ZodCatch", (e, n) => {
  (Vo.init(e, n),
    D.init(e, n),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function du(e, n) {
  return new cu({
    type: "catch",
    innerType: e,
    catchValue: typeof n == "function" ? n : () => n,
  });
}
var _u = c("ZodNaN", (e, n) => {
  (Lo.init(e, n), D.init(e, n));
});
function vd(e) {
  return ki(_u, e);
}
var ha = c("ZodPipe", (e, n) => {
  (tt.init(e, n), D.init(e, n), (e.in = n.in), (e.out = n.out));
});
function wn(e, n) {
  return new ha({ type: "pipe", in: e, out: n });
}
var mu = c("ZodReadonly", (e, n) => {
  (Mo.init(e, n), D.init(e, n));
});
function pu(e) {
  return new mu({ type: "readonly", innerType: e });
}
var fu = c("ZodTemplateLiteral", (e, n) => {
  (qo.init(e, n), D.init(e, n));
});
function yd(e, n) {
  return new fu({
    type: "template_literal",
    parts: e,
    ...y.normalizeParams(n),
  });
}
var gu = c("ZodLazy", (e, n) => {
  (Bo.init(e, n), D.init(e, n), (e.unwrap = () => e._zod.def.getter()));
});
function hu(e) {
  return new gu({ type: "lazy", getter: e });
}
var vu = c("ZodPromise", (e, n) => {
  (Ho.init(e, n), D.init(e, n), (e.unwrap = () => e._zod.def.innerType));
});
function bd(e) {
  return new vu({ type: "promise", innerType: e });
}
var In = c("ZodCustom", (e, n) => {
  (Wo.init(e, n), D.init(e, n));
});
function yu(e, n) {
  let r = new T({ check: "custom", ...y.normalizeParams(n) });
  return ((r._zod.check = e), r);
}
function wd(e, n) {
  return ji(In, e ?? (() => !0), n);
}
function bu(e, n = {}) {
  return Pi(In, e, n);
}
function wu(e, n) {
  let r = yu(
    (i) => (
      (i.addIssue = (t) => {
        if (typeof t == "string")
          i.issues.push(y.issue(t, i.value, r._zod.def));
        else {
          let o = t;
          (o.fatal && (o.continue = !1),
            o.code ?? (o.code = "custom"),
            o.input ?? (o.input = i.value),
            o.inst ?? (o.inst = r),
            o.continue ?? (o.continue = !r._zod.def.abort),
            i.issues.push(y.issue(o)));
        }
      }),
      e(i.value, i)
    ),
    n,
  );
  return r;
}
function kd(e, n = { error: `Input not instance of ${e.name}` }) {
  let r = new In({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...y.normalizeParams(n),
  });
  return ((r._zod.bag.Class = e), r);
}
var xd = (...e) => Oi({ Pipe: ha, Boolean: bt, Unknown: ca }, ...e);
function $d(e) {
  let n = hu(() => Sn([qi(e), Ts(), Us(), Vs(), da(n), Gs(qi(), n)]));
  return n;
}
function zd(e, n) {
  return wn(pa(e), n);
}
var Sd = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
  },
  Id = Object.freeze({ status: "aborted" }),
  Ad = Id;
function Dd(e) {
  U({ customError: e });
}
function jd() {
  return U().customError;
}
var va = {};
fe(va, {
  bigint: () => Ed,
  boolean: () => Nd,
  date: () => Td,
  number: () => Od,
  string: () => Pd,
});
function Pd(e) {
  return Yo(kn, e);
}
function Od(e) {
  return ni(yt, e);
}
function Nd(e) {
  return li(bt, e);
}
function Ed(e) {
  return di(wt, e);
}
function Td(e) {
  return wi($n, e);
}
U(Lt());
var kt = "google";
var Ap = kt != "mozilla",
  ku = kt == "mozilla";
var Dp = atob(
  "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
);
var ee = "https://v10.downloadhelper.net:443",
  jp = `${ee}/v2/entitlements/validate`,
  Pp = `${ee}/v2/entitlements/activate`,
  Op = `${ee}/v2/entitlements/migrate`,
  Np = `${ee}/v2/reports`,
  Ep = `${ee}/issue`,
  Tp = `${ee}/premium`,
  Up = `${ee}/manage-subscription`,
  Zp = `${ee}/welcome/${kt}`,
  Cp = `${ee}/changelog/${kt}`,
  Rp = `${ee}/goodbye/${kt}`;
ku && G.config({ jitless: !0 });
var xu = [
    "ar",
    "bg",
    "ca",
    "co",
    "cs",
    "da",
    "de",
    "dsb",
    "el",
    "en",
    "es",
    "fr",
    "hsb",
    "hu",
    "id",
    "is",
    "it",
    "ja",
    "ko",
    "nb",
    "nl",
    "pl",
    "pt-BR",
    "ro",
    "ru",
    "sk",
    "sl",
    "sv",
    "tr",
    "uk",
    "zh-CN",
    "zh-TW",
  ],
  An = [
    "appDesc",
    "restore_purchase_button",
    "get_premium_button",
    "back",
    "rm_notifications_all",
    "waiting_for_media",
    "nomedia_title",
    "nomedia_description",
    "nomedia_reload_button",
    "nomedia_reload_button_tooltip",
    "show_nomedia_button",
    "show_nomedia_button_tooltip",
    "setting_button_tooltip",
    "history_button_tooltip",
    "show_all_history_button",
    "complete_title",
    "hide_complete_button",
    "translate_button_tooltip",
    "help_button_tooltip",
    "open_source_tab_button_tooltip",
    "retry_download_button_tooltip",
    "delete_file_button_tooltip",
    "download_directory_button_tooltip",
    "clear_downloaded_tooltip",
    "show_in_popup_button_tooltip",
    "show_in_sidebar_button_tooltip",
    "video_not_playing_button_tooltip",
    "play",
    "warn_drm_tooltip",
    "version_title",
    "account_title",
    "one_hundred_downloads_title",
    "leave_review_description",
    "leave_review_button",
    "account_status",
    "account_status_premium",
    "free_account",
    "copy_to_clipboard",
    "my_account_button",
    "download_title",
    "show_notification",
    "max_parallel_downloads",
    "saveas_detected_warning",
    "change_saveas_setting",
    "download_directory_title",
    "download_directory_description",
    "change_browser_download_directory",
    "bad_download_subdirectory_warning",
    "download_subdirectory",
    "private_browsing_title",
    "private_browsing_warning",
    "private_browsing_notifications",
    "private_browsing_button",
    "throttle_youtube",
    "prefer_original_audio",
    "prefer_hls",
    "settings_history_title",
    "transient_history_description",
    "history_limit",
    "appearance_title",
    "theme_title",
    "theme_light",
    "theme_dark",
    "theme_system",
    "popup_size_title",
    "popup_size_small",
    "popup_size_medium",
    "popup_size_big",
    "panel_position_title",
    "use_popup",
    "use_sidebar",
    "behavior_title",
    "controls_title",
    "show_in_context_menu",
    "restart_addon",
    "reset_settings",
    "prefered_quality",
    "prefered_quality_highest",
    "prefered_quality_1080p",
    "prefered_quality_720p",
    "prefer_mkv",
    "preview_mode_title",
    "preview_mode_none",
    "preview_mode_video",
    "preview_mode_image",
    "history_title",
    "history_warning",
    "history_warning_2",
    "enable_history",
    "clear_history",
    "disable_history",
    "no_downloads_yet",
    "download_failed",
    "download_failed_description",
    "download_interrupted",
    "download_interrupted_description",
    "download_with_drm_failed_description",
    "no_youtube",
    "no_youtube_description",
    "no_youtube_description_2",
    "premium_required",
    "premium_yt_required_description",
    "premium_hls_required_description",
    "premium_all_required_description",
    "youtube_too_many_downloads",
    "youtube_too_many_downloads_description",
    "stop",
    "cancel",
    "copy_url",
    "always_copy_url",
    "download_button",
    "download_as_button_and_menu",
    "rename_short",
    "always_download_as_menu",
    "download_audio_button",
    "download_audio_and_video_menu",
    "download_audio_only_menu",
    "audio_only_for_this_website",
    "details",
    "report",
    "reporting",
    "reported_thankyou",
    "not_playing_title",
    "not_playing_broken_title",
    "not_playing_broken_description",
    "not_playing_broken_solution_title",
    "not_playing_broken_solution_windows_1",
    "not_playing_broken_solution_mac_1",
    "not_playing_broken_solution_2",
    "not_playing_default_player",
    "not_playing_default_player_solution_windows",
    "not_playing_default_player_solution_mac",
  ],
  ya = [
    "back",
    "header_help",
    "header_ask_question",
    "activate_title",
    "activate_pending",
    "activate_success",
    "activate_error",
    "activate_no_addon_found",
    "activate_no_method_found",
    "activate_help_me",
    "issue_title",
    "issue_submit",
    "issue_thank_you",
    "issue_enter_email",
    "issue_email_sent",
    "issue_or_digit",
    "issue_just_digit",
    "issue_i_have_a_code",
    "issue_i_have_a_key",
    "issue_key",
    "landing_text1",
    "landing_text2",
    "landing_text3",
    "landing_text4",
    "landing_install_for_google",
    "landing_install_for_mozilla",
    "landing_install_for_microsoft",
    "landing_feature1_title",
    "landing_feature1_description",
    "landing_feature2_title",
    "landing_feature2_description",
    "landing_feature3_title",
    "landing_feature3_description",
    "landing_feature4_title",
    "landing_feature4_description",
    "premium_hero1",
    "premium_hero2",
    "premium_hero3",
    "welcome_text",
    "welcome_pin_message",
  ];
var Fp = new Set(xu),
  Ud = G.enum(An),
  Zd = G.enum(ya),
  Kp = G.map(Ud, G.string()),
  Gp = G.map(Zd, G.string()),
  Yp = new Set(An);
function Rd(e) {
  return e
    ? e
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;")
    : "";
}
function ba(e, n, r) {
  let i = () => (console.error(`Requesting unknown i18n string ${e}`), e);
  n = n.map((o) => o.toString()).map(Rd);
  let t = r.get(e);
  if (t) {
    let o = 1;
    for (let a = 0; a < n.length; a++) t = t.replace(`$${o}`, n[a]);
  }
  try {
    return (t || (t = $u.default.i18n.getMessage(e, n)), t || i());
  } catch {
    return i();
  }
}
function of(e, n, r) {
  (document.documentElement.setAttribute("theme", n.ui_theme),
    document.documentElement.setAttribute("popup_size", n.popup_size),
    r.debug.onRender(),
    K(r.box_nomedia, !n.hide_nomedia_box),
    K(r.button_show_nomedia, n.hide_nomedia_box),
    r.button_show_dir.classList.toggle(
      "has_downloaded",
      e.transient_history.length > 0,
    ),
    r.button_show_history_2.classList.toggle(
      "has_downloaded",
      n.downloaded.size > 0,
    ));
  {
    let w = !1,
      $ = new Map(),
      S = [],
      I = e.notifications.size >= 2;
    K(r.button_rm_all_notifications, I);
    for (let g of r.notification_container.children)
      e.notifications.has(g.id) ? $.set(g.id, g) : S.push(g);
    S.forEach((g) => g.remove());
    for (let [g, x] of e.notifications.entries()) {
      let A = $.get(g);
      A ||
        ((A = document.createElement("com-notification")),
        (A.id = g),
        r.notification_container.appendChild(A),
        A.setNotification(x, n.custom_strings.addon),
        (w = !0));
    }
    w && r.main.scroll({ top: 0 });
  }
  let i = ne,
    t = new Map();
  if (e.current_win_tab.tab_id.isSome()) {
    let w = e.current_win_tab.tab_id.value,
      $ = e.discovered.get(w);
    $ && ((i = $.meta), (t = $.media));
  }
  let o = new Map(),
    a = new Map();
  for (let w of e.downloading.values())
    t.has(w.media.hash) ? o.set(w.media.hash, w) : a.set(w.media.hash, w);
  let s = new Map();
  for (let w of e.transient_history)
    t.has(w.media_hash) && s.set(w.media_hash, w);
  let l = new Map(),
    u = [];
  for (let w of r.media_container.children) {
    if (w.nodeName != "COM-MEDIA") continue;
    let $ = w.id;
    !t.has($) && !a.has($) ? u.push(w) : l.set($, w);
  }
  u.forEach((w) => w.remove());
  let m = i.andThen((w) => w.url),
    p = [...t.values()].sort((w, $) => xa(w, $, m)),
    f = 0,
    d = (w, $, S, I) => {
      let g = l.get(w.hash);
      (g
        ? g.metaMightHaveChanged($)
        : ((g = document.createElement("com-media")),
          (g.id = w.hash),
          r.media_container.appendChild(g),
          g.init(w, $, n)),
        I
          ? g.isDownloaded(I, n.custom_strings.addon)
          : S
            ? g.isDownloading(S, n.custom_strings.addon)
            : g.isDiscovered(),
        (g.style.order = f.toString()),
        f++);
    },
    v = document.querySelector("#loading");
  if (i.isSome() && t.size > 0) {
    te(v);
    for (let w of p) {
      let $ = o.get(w.hash),
        S = s.get(w.hash);
      d(w, i.value, $, S);
    }
  } else ge(v);
  for (let w of a.values()) {
    let $ = w.media;
    d($, w.meta, w, void 0);
  }
  let k = e.transient_history.slice(-10);
  (K(r.downloaded, n.show_transient_history && k.length > 0),
    zu(n, k, r.downloaded_container));
}
function af(e, n) {
  let r = e.history_days == 0,
    i = e.downloaded.size == 0;
  (K(n.box_history_disabled, r),
    K(n.box_history_empty, !r && i),
    K(n.box_history_controls, !r),
    K(n.downloaded_container, !i && !r),
    document.documentElement.setAttribute("theme", e.ui_theme));
  let t = (l, u) =>
      l.origin_url && u.test(l.origin_url) ? !0 : u.test(l.path),
    o = n.input_filter.value,
    a = o.length == 0 ? null : new RegExp(o, "i"),
    s = [...e.downloaded.values()];
  ((s = s
    .filter((l) => !a || t(l, a))
    .sort((l, u) => l.download_timestamp - u.download_timestamp)),
    zu(e, s, n.downloaded_container));
}
function zu(e, n, r) {
  let i = new Map(n.map((a) => [a.downloaded_id, a])),
    t = new Map(),
    o = [];
  for (let a of r.children) i.get(a.id) ? t.set(a.id, a) : o.push(a);
  o.forEach((a) => a.remove());
  for (let a of n) {
    let s = t.get(a.downloaded_id);
    s ||
      ((s = document.createElement("com-media-downloaded")),
      (s.id = a.downloaded_id),
      r.appendChild(s),
      s.init(e.custom_strings.addon),
      s.setDownloaded(a, void 0, e.custom_strings.addon),
      (s.style.order = Math.round(a.download_timestamp / 1e3).toString()));
  }
}
function sf(e, n, r) {
  if (
    (K(r.s_section_suspecting_saveas, e.suspecting_saveas),
    (r.s_checkbox_youtube_throttle.checked = n.youtube_throttle),
    (r.s_checkbox_youtube_audio_original.checked =
      n.youtube_audio_strategy == "original"),
    (r.s_checkbox_youtube_prefer_hls.checked = n.youtube_prefer_hls),
    (r.s_input_concurrent_downloads.value =
      n.max_concurrent_downloads.toString()),
    (r.s_checkbox_show_desktop_notifications.checked =
      n.show_desktop_notifications),
    (r.s_checkbox_show_desktop_notifications_private.checked =
      n.show_desktop_notifications_private),
    (r.s_prefered_quality_highest.checked = n.prefered_quality === null),
    (r.s_prefered_quality_1080p.checked = n.prefered_quality === 1080),
    (r.s_prefered_quality_720p.checked = n.prefered_quality === 720),
    (r.s_checkbox_always_download_as_mkv.checked =
      n.prefered_av_muxer == "mkv"),
    (r.s_preview_mode_none.checked = n.preview_mode == "none"),
    (r.s_preview_mode_video.checked = n.preview_mode == "video"),
    (r.s_preview_mode_image.checked = n.preview_mode == "image"),
    (r.s_theme_light.checked = n.ui_theme == "light"),
    (r.s_theme_dark.checked = n.ui_theme == "dark"),
    (r.s_theme_system.checked = n.ui_theme == "system"),
    (r.s_popup_size_small.checked = n.popup_size == "small"),
    (r.s_popup_size_medium.checked = n.popup_size == "medium"),
    (r.s_popup_size_big.checked = n.popup_size == "big"),
    (r.s_dock_popup.checked = n.dockmode == "popup"),
    (r.s_dock_sidebar.checked = n.dockmode == "sidebar"),
    (r.s_checkbox_transient_history.checked = n.show_transient_history),
    (r.s_checkbox_history.checked = n.history_days > 0),
    n.history_days == 0
      ? (te(r.s_input_history.parentElement), (r.s_input_history.value = "30"))
      : (ge(r.s_input_history.parentElement),
        (r.s_input_history.value = n.history_days.toString())),
    (r.s_checkbox_context_menu.checked = n.use_context_menu),
    (r.s_input_subdirectory.value = n.download_directory),
    n.jwt)
  ) {
    let i = n.jwt;
    ((r.s_span_jwt_status.textContent = ba(
      "account_status_premium",
      [i.store],
      n.custom_strings.addon,
    )),
      K(r.s_button_my_account, i.entitlement_type == "SUBSCRIPTION"),
      te(r.s_button_get_premium),
      te(r.s_button_restore_purchase));
  } else
    ((r.s_span_jwt_status.textContent = ba(
      "free_account",
      [],
      n.custom_strings.addon,
    )),
      te(r.s_button_my_account),
      ge(r.s_button_get_premium),
      ge(r.s_button_restore_purchase));
  n.dont_ask_for_user_review && te(r.s_p_leave_review);
}
export { af as RenderHistoryPage, of as RenderPanel, sf as RenderSettings };
