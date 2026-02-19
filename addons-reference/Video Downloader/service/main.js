var Yg = Object.create;
var ya = Object.defineProperty;
var ey = Object.getOwnPropertyDescriptor;
var ty = Object.getOwnPropertyNames;
var ry = Object.getPrototypeOf,
  ny = Object.prototype.hasOwnProperty;
var at = (e, t) => () => (e && (t = e((e = 0))), t);
var Et = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Ke = (e, t) => {
    for (var n in t) ya(e, n, { get: t[n], enumerable: !0 });
  },
  iy = (e, t, n, i) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let r of ty(t))
        !ny.call(e, r) &&
          r !== n &&
          ya(e, r, {
            get: () => t[r],
            enumerable: !(i = ey(t, r)) || i.enumerable,
          });
    return e;
  };
var _e = (e, t, n) => (
  (n = e != null ? Yg(ry(e)) : {}),
  iy(
    t || !e || !e.__esModule
      ? ya(n, "default", { value: e, enumerable: !0 })
      : n,
    e,
  )
);
var Ae = Et((va, em) => {
  (function (e, t) {
    if (typeof define == "function" && define.amd)
      define("webextension-polyfill", ["module"], t);
    else if (typeof va < "u") t(em);
    else {
      var n = { exports: {} };
      (t(n), (e.browser = n.exports));
    }
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : va,
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
        let t = "The message port closed before a response was received.",
          n = (i) => {
            let r = {
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
            if (Object.keys(r).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill",
              );
            class o extends WeakMap {
              constructor(T, C = void 0) {
                (super(C), (this.createItem = T));
              }
              get(T) {
                return (
                  this.has(T) || this.set(T, this.createItem(T)),
                  super.get(T)
                );
              }
            }
            let a = (b) =>
                b && typeof b == "object" && typeof b.then == "function",
              s =
                (b, T) =>
                (...C) => {
                  i.runtime.lastError
                    ? b.reject(new Error(i.runtime.lastError.message))
                    : T.singleCallbackArg ||
                        (C.length <= 1 && T.singleCallbackArg !== !1)
                      ? b.resolve(C[0])
                      : b.resolve(C);
                },
              u = (b) => (b == 1 ? "argument" : "arguments"),
              l = (b, T) =>
                function (I, ...j) {
                  if (j.length < T.minArgs)
                    throw new Error(
                      `Expected at least ${T.minArgs} ${u(T.minArgs)} for ${b}(), got ${j.length}`,
                    );
                  if (j.length > T.maxArgs)
                    throw new Error(
                      `Expected at most ${T.maxArgs} ${u(T.maxArgs)} for ${b}(), got ${j.length}`,
                    );
                  return new Promise((F, W) => {
                    if (T.fallbackToNoCallback)
                      try {
                        I[b](...j, s({ resolve: F, reject: W }, T));
                      } catch (M) {
                        (console.warn(
                          `${b} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          M,
                        ),
                          I[b](...j),
                          (T.fallbackToNoCallback = !1),
                          (T.noCallback = !0),
                          F());
                      }
                    else
                      T.noCallback
                        ? (I[b](...j), F())
                        : I[b](...j, s({ resolve: F, reject: W }, T));
                  });
                },
              c = (b, T, C) =>
                new Proxy(T, {
                  apply(I, j, F) {
                    return C.call(j, b, ...F);
                  },
                }),
              d = Function.call.bind(Object.prototype.hasOwnProperty),
              f = (b, T = {}, C = {}) => {
                let I = Object.create(null),
                  j = {
                    has(W, M) {
                      return M in b || M in I;
                    },
                    get(W, M, oe) {
                      if (M in I) return I[M];
                      if (!(M in b)) return;
                      let te = b[M];
                      if (typeof te == "function")
                        if (typeof T[M] == "function") te = c(b, b[M], T[M]);
                        else if (d(C, M)) {
                          let ue = l(M, C[M]);
                          te = c(b, b[M], ue);
                        } else te = te.bind(b);
                      else if (
                        typeof te == "object" &&
                        te !== null &&
                        (d(T, M) || d(C, M))
                      )
                        te = f(te, T[M], C[M]);
                      else if (d(C, "*")) te = f(te, T[M], C["*"]);
                      else
                        return (
                          Object.defineProperty(I, M, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return b[M];
                            },
                            set(ue) {
                              b[M] = ue;
                            },
                          }),
                          te
                        );
                      return ((I[M] = te), te);
                    },
                    set(W, M, oe, te) {
                      return (M in I ? (I[M] = oe) : (b[M] = oe), !0);
                    },
                    defineProperty(W, M, oe) {
                      return Reflect.defineProperty(I, M, oe);
                    },
                    deleteProperty(W, M) {
                      return Reflect.deleteProperty(I, M);
                    },
                  },
                  F = Object.create(b);
                return new Proxy(F, j);
              },
              _ = (b) => ({
                addListener(T, C, ...I) {
                  T.addListener(b.get(C), ...I);
                },
                hasListener(T, C) {
                  return T.hasListener(b.get(C));
                },
                removeListener(T, C) {
                  T.removeListener(b.get(C));
                },
              }),
              g = new o((b) =>
                typeof b != "function"
                  ? b
                  : function (C) {
                      let I = f(
                        C,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } },
                      );
                      b(I);
                    },
              ),
              m = new o((b) =>
                typeof b != "function"
                  ? b
                  : function (C, I, j) {
                      let F = !1,
                        W,
                        M = new Promise((Pe) => {
                          W = function (G) {
                            ((F = !0), Pe(G));
                          };
                        }),
                        oe;
                      try {
                        oe = b(C, I, W);
                      } catch (Pe) {
                        oe = Promise.reject(Pe);
                      }
                      let te = oe !== !0 && a(oe);
                      if (oe !== !0 && !te && !F) return !1;
                      let ue = (Pe) => {
                        Pe.then(
                          (G) => {
                            j(G);
                          },
                          (G) => {
                            let K;
                            (G &&
                            (G instanceof Error || typeof G.message == "string")
                              ? (K = G.message)
                              : (K = "An unexpected error occurred"),
                              j({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: K,
                              }));
                          },
                        ).catch((G) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            G,
                          );
                        });
                      };
                      return (ue(te ? oe : M), !0);
                    },
              ),
              A = ({ reject: b, resolve: T }, C) => {
                i.runtime.lastError
                  ? i.runtime.lastError.message === t
                    ? T()
                    : b(new Error(i.runtime.lastError.message))
                  : C && C.__mozWebExtensionPolyfillReject__
                    ? b(new Error(C.message))
                    : T(C);
              },
              D = (b, T, C, ...I) => {
                if (I.length < T.minArgs)
                  throw new Error(
                    `Expected at least ${T.minArgs} ${u(T.minArgs)} for ${b}(), got ${I.length}`,
                  );
                if (I.length > T.maxArgs)
                  throw new Error(
                    `Expected at most ${T.maxArgs} ${u(T.maxArgs)} for ${b}(), got ${I.length}`,
                  );
                return new Promise((j, F) => {
                  let W = A.bind(null, { resolve: j, reject: F });
                  (I.push(W), C.sendMessage(...I));
                });
              },
              S = {
                devtools: { network: { onRequestFinished: _(g) } },
                runtime: {
                  onMessage: _(m),
                  onMessageExternal: _(m),
                  sendMessage: D.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: D.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              v = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (r.privacy = {
                network: { "*": v },
                services: { "*": v },
                websites: { "*": v },
              }),
              f(i, S, r)
            );
          };
        e.exports = n(chrome);
      }
    },
  );
});
function im() {
  return ly;
}
var Qe,
  Ee,
  Fe,
  _i,
  tm,
  rm,
  nm,
  ly,
  Xe,
  om,
  am,
  Sa,
  oA,
  aA,
  sA,
  uA,
  sm,
  um,
  lm,
  cm,
  ze = at(() => {
    "use strict";
    ((Qe = "google"),
      (Ee = Qe != "mozilla"),
      (Fe = Qe == "mozilla"),
      (_i = !1),
      (tm = !1),
      (rm = !1),
      (nm = !1),
      (ly = atob(
        "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
      )));
    ((Xe = "https://v10.downloadhelper.net:443"),
      (om = `${Xe}/v2/entitlements/validate`),
      (am = `${Xe}/v2/entitlements/activate`),
      (Sa = `${Xe}/v2/entitlements/migrate`),
      (oA = `${Xe}/v2/reports`),
      (aA = `${Xe}/issue`),
      (sA = `${Xe}/premium`),
      (uA = `${Xe}/manage-subscription`),
      (sm = `${Xe}/welcome/${Qe}`),
      (um = `${Xe}/changelog/${Qe}`),
      (lm = `${Xe}/goodbye/${Qe}`),
      (cm = {
        google:
          "https://chromewebstore.google.com/detail/video-downloadhelper/lmjnegcaeklhafolokijcfjliaokphfk",
        mozilla:
          "https://addons.mozilla.org/en-US/firefox/addon/video-downloadhelper/",
        microsoft:
          "https://microsoftedge.microsoft.com/addons/detail/video-downloadhelper/jmkaglaafmhbcpleggkmaliipiilhldn",
      }));
  });
function st(e, t = 0) {
  let n = 3735928559 ^ t,
    i = 1103547991 ^ t;
  for (let r = 0, o; r < e.length; r++)
    ((o = e.charCodeAt(r)),
      (n = Math.imul(n ^ o, 2654435761)),
      (i = Math.imul(i ^ o, 1597334677)));
  return (
    (n = Math.imul(n ^ (n >>> 16), 2246822507)),
    (n ^= Math.imul(i ^ (i >>> 13), 3266489909)),
    (i = Math.imul(i ^ (i >>> 16), 2246822507)),
    (i ^= Math.imul(n ^ (n >>> 13), 3266489909)),
    4294967296 * (2097151 & i) + (n >>> 0)
  );
}
var fi = at(() => {
  "use strict";
});
function hi() {
  let e = st(dm.runtime.id);
  return (
    rm ||
    e == 8817291756503653 ||
    e == 5044528540900328 ||
    e == 5254041105675766 ||
    e == 0xe4646f42568d6
  );
}
var dm,
  xa = at(() => {
    "use strict";
    ze();
    fi();
    dm = _e(Ae(), 1);
  });
var cy = {};
var mm,
  Ea,
  pm = at(() => {
    "use strict";
    ze();
    xa();
    mm = "/download_worker/main.js";
    hi() &&
      (Ee
        ? (Ea = chrome.runtime.getURL(mm))
        : (Ea = browser.runtime.getURL(mm)),
      new Worker(Ea, { type: "module" }));
  });
var Ei = Et((MA, xm) => {
  var Wr;
  typeof window < "u"
    ? (Wr = window)
    : typeof global < "u"
      ? (Wr = global)
      : typeof self < "u"
        ? (Wr = self)
        : (Wr = {});
  xm.exports = Wr;
});
var en = Et((_r) => {
  "use strict";
  function ev(e, t, n) {
    if (
      (n === void 0 && (n = Array.prototype), e && typeof n.find == "function")
    )
      return n.find.call(e, t);
    for (var i = 0; i < e.length; i++)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        var r = e[i];
        if (t.call(void 0, r, i, e)) return r;
      }
  }
  function Wa(e, t) {
    return (
      t === void 0 && (t = Object),
      t && typeof t.freeze == "function" ? t.freeze(e) : e
    );
  }
  function tv(e, t) {
    if (e === null || typeof e != "object")
      throw new TypeError("target is not an object");
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }
  var Km = Wa({
      HTML: "text/html",
      isHTML: function (e) {
        return e === Km.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml",
    }),
    Xm = Wa({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function (e) {
        return e === Xm.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/",
    });
  _r.assign = tv;
  _r.find = ev;
  _r.freeze = Wa;
  _r.MIME_TYPE = Km;
  _r.NAMESPACE = Xm;
});
var os = Et((Pt) => {
  var ap = en(),
    Ye = ap.find,
    tn = ap.NAMESPACE;
  function rv(e) {
    return e !== "";
  }
  function nv(e) {
    return e ? e.split(/[\t\n\f\r ]+/).filter(rv) : [];
  }
  function iv(e, t) {
    return (e.hasOwnProperty(t) || (e[t] = !0), e);
  }
  function Ym(e) {
    if (!e) return [];
    var t = nv(e);
    return Object.keys(t.reduce(iv, {}));
  }
  function ov(e) {
    return function (t) {
      return e && e.indexOf(t) !== -1;
    };
  }
  function nn(e, t) {
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  }
  function Oe(e, t) {
    var n = e.prototype;
    if (!(n instanceof t)) {
      let r = function () {};
      var i = r;
      ((r.prototype = t.prototype),
        (r = new r()),
        nn(n, r),
        (e.prototype = n = r));
    }
    n.constructor != e &&
      (typeof e != "function" && console.error("unknown Class:" + e),
      (n.constructor = e));
  }
  var Re = {},
    Je = (Re.ELEMENT_NODE = 1),
    hr = (Re.ATTRIBUTE_NODE = 2),
    Fi = (Re.TEXT_NODE = 3),
    sp = (Re.CDATA_SECTION_NODE = 4),
    up = (Re.ENTITY_REFERENCE_NODE = 5),
    av = (Re.ENTITY_NODE = 6),
    lp = (Re.PROCESSING_INSTRUCTION_NODE = 7),
    cp = (Re.COMMENT_NODE = 8),
    dp = (Re.DOCUMENT_NODE = 9),
    mp = (Re.DOCUMENT_TYPE_NODE = 10),
    _t = (Re.DOCUMENT_FRAGMENT_NODE = 11),
    sv = (Re.NOTATION_NODE = 12),
    De = {},
    ge = {},
    o0 = (De.INDEX_SIZE_ERR = ((ge[1] = "Index size error"), 1)),
    a0 = (De.DOMSTRING_SIZE_ERR = ((ge[2] = "DOMString size error"), 2)),
    Ne = (De.HIERARCHY_REQUEST_ERR = ((ge[3] = "Hierarchy request error"), 3)),
    s0 = (De.WRONG_DOCUMENT_ERR = ((ge[4] = "Wrong document"), 4)),
    u0 = (De.INVALID_CHARACTER_ERR = ((ge[5] = "Invalid character"), 5)),
    l0 = (De.NO_DATA_ALLOWED_ERR = ((ge[6] = "No data allowed"), 6)),
    c0 = (De.NO_MODIFICATION_ALLOWED_ERR =
      ((ge[7] = "No modification allowed"), 7)),
    pp = (De.NOT_FOUND_ERR = ((ge[8] = "Not found"), 8)),
    d0 = (De.NOT_SUPPORTED_ERR = ((ge[9] = "Not supported"), 9)),
    ep = (De.INUSE_ATTRIBUTE_ERR = ((ge[10] = "Attribute in use"), 10)),
    m0 = (De.INVALID_STATE_ERR = ((ge[11] = "Invalid state"), 11)),
    p0 = (De.SYNTAX_ERR = ((ge[12] = "Syntax error"), 12)),
    _0 = (De.INVALID_MODIFICATION_ERR =
      ((ge[13] = "Invalid modification"), 13)),
    f0 = (De.NAMESPACE_ERR = ((ge[14] = "Invalid namespace"), 14)),
    h0 = (De.INVALID_ACCESS_ERR = ((ge[15] = "Invalid access"), 15));
  function le(e, t) {
    if (t instanceof Error) var n = t;
    else
      ((n = this),
        Error.call(this, ge[e]),
        (this.message = ge[e]),
        Error.captureStackTrace && Error.captureStackTrace(this, le));
    return ((n.code = e), t && (this.message = this.message + ": " + t), n);
  }
  le.prototype = Error.prototype;
  nn(De, le);
  function pt() {}
  pt.prototype = {
    length: 0,
    item: function (e) {
      return e >= 0 && e < this.length ? this[e] : null;
    },
    toString: function (e, t) {
      for (var n = [], i = 0; i < this.length; i++) fr(this[i], n, e, t);
      return n.join("");
    },
    filter: function (e) {
      return Array.prototype.filter.call(this, e);
    },
    indexOf: function (e) {
      return Array.prototype.indexOf.call(this, e);
    },
  };
  function gr(e, t) {
    ((this._node = e), (this._refresh = t), Ka(this));
  }
  function Ka(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc !== t) {
      var n = e._refresh(e._node);
      if ((Dp(e, "length", n.length), !e.$$length || n.length < e.$$length))
        for (var i = n.length; i in e; i++)
          Object.prototype.hasOwnProperty.call(e, i) && delete e[i];
      (nn(n, e), (e._inc = t));
    }
  }
  gr.prototype.item = function (e) {
    return (Ka(this), this[e] || null);
  };
  Oe(gr, pt);
  function Li() {}
  function _p(e, t) {
    for (var n = e.length; n--; ) if (e[n] === t) return n;
  }
  function tp(e, t, n, i) {
    if ((i ? (t[_p(t, i)] = n) : (t[t.length++] = n), e)) {
      n.ownerElement = e;
      var r = e.ownerDocument;
      r && (i && gp(r, e, i), uv(r, e, n));
    }
  }
  function rp(e, t, n) {
    var i = _p(t, n);
    if (i >= 0) {
      for (var r = t.length - 1; i < r; ) t[i] = t[++i];
      if (((t.length = r), e)) {
        var o = e.ownerDocument;
        o && (gp(o, e, n), (n.ownerElement = null));
      }
    } else throw new le(pp, new Error(e.tagName + "@" + n));
  }
  Li.prototype = {
    length: 0,
    item: pt.prototype.item,
    getNamedItem: function (e) {
      for (var t = this.length; t--; ) {
        var n = this[t];
        if (n.nodeName == e) return n;
      }
    },
    setNamedItem: function (e) {
      var t = e.ownerElement;
      if (t && t != this._ownerElement) throw new le(ep);
      var n = this.getNamedItem(e.nodeName);
      return (tp(this._ownerElement, this, e, n), n);
    },
    setNamedItemNS: function (e) {
      var t = e.ownerElement,
        n;
      if (t && t != this._ownerElement) throw new le(ep);
      return (
        (n = this.getNamedItemNS(e.namespaceURI, e.localName)),
        tp(this._ownerElement, this, e, n),
        n
      );
    },
    removeNamedItem: function (e) {
      var t = this.getNamedItem(e);
      return (rp(this._ownerElement, this, t), t);
    },
    removeNamedItemNS: function (e, t) {
      var n = this.getNamedItemNS(e, t);
      return (rp(this._ownerElement, this, n), n);
    },
    getNamedItemNS: function (e, t) {
      for (var n = this.length; n--; ) {
        var i = this[n];
        if (i.localName == t && i.namespaceURI == e) return i;
      }
      return null;
    },
  };
  function fp() {}
  fp.prototype = {
    hasFeature: function (e, t) {
      return !0;
    },
    createDocument: function (e, t, n) {
      var i = new on();
      if (
        ((i.implementation = this),
        (i.childNodes = new pt()),
        (i.doctype = n || null),
        n && i.appendChild(n),
        t)
      ) {
        var r = i.createElementNS(e, t);
        i.appendChild(r);
      }
      return i;
    },
    createDocumentType: function (e, t, n) {
      var i = new qi();
      return (
        (i.name = e),
        (i.nodeName = e),
        (i.publicId = t || ""),
        (i.systemId = n || ""),
        i
      );
    },
  };
  function Y() {}
  Y.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function (e, t) {
      return Bi(this, e, t);
    },
    replaceChild: function (e, t) {
      (Bi(this, e, t, vp), t && this.removeChild(t));
    },
    removeChild: function (e) {
      return yp(this, e);
    },
    appendChild: function (e) {
      return this.insertBefore(e, null);
    },
    hasChildNodes: function () {
      return this.firstChild != null;
    },
    cloneNode: function (e) {
      return Ja(this.ownerDocument || this, this, e);
    },
    normalize: function () {
      for (var e = this.firstChild; e; ) {
        var t = e.nextSibling;
        t && t.nodeType == Fi && e.nodeType == Fi
          ? (this.removeChild(t), e.appendData(t.data))
          : (e.normalize(), (e = t));
      }
    },
    isSupported: function (e, t) {
      return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function () {
      return this.attributes.length > 0;
    },
    lookupPrefix: function (e) {
      for (var t = this; t; ) {
        var n = t._nsMap;
        if (n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i) && n[i] === e)
              return i;
        }
        t = t.nodeType == hr ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (e) {
      for (var t = this; t; ) {
        var n = t._nsMap;
        if (n && Object.prototype.hasOwnProperty.call(n, e)) return n[e];
        t = t.nodeType == hr ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (e) {
      var t = this.lookupPrefix(e);
      return t == null;
    },
  };
  function hp(e) {
    return (
      (e == "<" && "&lt;") ||
      (e == ">" && "&gt;") ||
      (e == "&" && "&amp;") ||
      (e == '"' && "&quot;") ||
      "&#" + e.charCodeAt() + ";"
    );
  }
  nn(Re, Y);
  nn(Re, Y.prototype);
  function rn(e, t) {
    if (t(e)) return !0;
    if ((e = e.firstChild))
      do if (rn(e, t)) return !0;
      while ((e = e.nextSibling));
  }
  function on() {
    this.ownerDocument = this;
  }
  function uv(e, t, n) {
    e && e._inc++;
    var i = n.namespaceURI;
    i === tn.XMLNS && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
  }
  function gp(e, t, n, i) {
    e && e._inc++;
    var r = n.namespaceURI;
    r === tn.XMLNS && delete t._nsMap[n.prefix ? n.localName : ""];
  }
  function Xa(e, t, n) {
    if (e && e._inc) {
      e._inc++;
      var i = t.childNodes;
      if (n) i[i.length++] = n;
      else {
        for (var r = t.firstChild, o = 0; r; )
          ((i[o++] = r), (r = r.nextSibling));
        ((i.length = o), delete i[i.length]);
      }
    }
  }
  function yp(e, t) {
    var n = t.previousSibling,
      i = t.nextSibling;
    return (
      n ? (n.nextSibling = i) : (e.firstChild = i),
      i ? (i.previousSibling = n) : (e.lastChild = n),
      (t.parentNode = null),
      (t.previousSibling = null),
      (t.nextSibling = null),
      Xa(e.ownerDocument, e),
      t
    );
  }
  function lv(e) {
    return (
      e &&
      (e.nodeType === Y.DOCUMENT_NODE ||
        e.nodeType === Y.DOCUMENT_FRAGMENT_NODE ||
        e.nodeType === Y.ELEMENT_NODE)
    );
  }
  function cv(e) {
    return (
      e &&
      (et(e) ||
        Ya(e) ||
        ft(e) ||
        e.nodeType === Y.DOCUMENT_FRAGMENT_NODE ||
        e.nodeType === Y.COMMENT_NODE ||
        e.nodeType === Y.PROCESSING_INSTRUCTION_NODE)
    );
  }
  function ft(e) {
    return e && e.nodeType === Y.DOCUMENT_TYPE_NODE;
  }
  function et(e) {
    return e && e.nodeType === Y.ELEMENT_NODE;
  }
  function Ya(e) {
    return e && e.nodeType === Y.TEXT_NODE;
  }
  function np(e, t) {
    var n = e.childNodes || [];
    if (Ye(n, et) || ft(t)) return !1;
    var i = Ye(n, ft);
    return !(t && i && n.indexOf(i) > n.indexOf(t));
  }
  function ip(e, t) {
    var n = e.childNodes || [];
    function i(o) {
      return et(o) && o !== t;
    }
    if (Ye(n, i)) return !1;
    var r = Ye(n, ft);
    return !(t && r && n.indexOf(r) > n.indexOf(t));
  }
  function dv(e, t, n) {
    if (!lv(e)) throw new le(Ne, "Unexpected parent node type " + e.nodeType);
    if (n && n.parentNode !== e) throw new le(pp, "child not in parent");
    if (!cv(t) || (ft(t) && e.nodeType !== Y.DOCUMENT_NODE))
      throw new le(
        Ne,
        "Unexpected node type " +
          t.nodeType +
          " for parent node type " +
          e.nodeType,
      );
  }
  function mv(e, t, n) {
    var i = e.childNodes || [],
      r = t.childNodes || [];
    if (t.nodeType === Y.DOCUMENT_FRAGMENT_NODE) {
      var o = r.filter(et);
      if (o.length > 1 || Ye(r, Ya))
        throw new le(Ne, "More than one element or text in fragment");
      if (o.length === 1 && !np(e, n))
        throw new le(
          Ne,
          "Element in fragment can not be inserted before doctype",
        );
    }
    if (et(t) && !np(e, n))
      throw new le(Ne, "Only one element can be added and only after doctype");
    if (ft(t)) {
      if (Ye(i, ft)) throw new le(Ne, "Only one doctype is allowed");
      var a = Ye(i, et);
      if (n && i.indexOf(a) < i.indexOf(n))
        throw new le(Ne, "Doctype can only be inserted before an element");
      if (!n && a)
        throw new le(
          Ne,
          "Doctype can not be appended since element is present",
        );
    }
  }
  function vp(e, t, n) {
    var i = e.childNodes || [],
      r = t.childNodes || [];
    if (t.nodeType === Y.DOCUMENT_FRAGMENT_NODE) {
      var o = r.filter(et);
      if (o.length > 1 || Ye(r, Ya))
        throw new le(Ne, "More than one element or text in fragment");
      if (o.length === 1 && !ip(e, n))
        throw new le(
          Ne,
          "Element in fragment can not be inserted before doctype",
        );
    }
    if (et(t) && !ip(e, n))
      throw new le(Ne, "Only one element can be added and only after doctype");
    if (ft(t)) {
      let u = function (l) {
        return ft(l) && l !== n;
      };
      var s = u;
      if (Ye(i, u)) throw new le(Ne, "Only one doctype is allowed");
      var a = Ye(i, et);
      if (n && i.indexOf(a) < i.indexOf(n))
        throw new le(Ne, "Doctype can only be inserted before an element");
    }
  }
  function Bi(e, t, n, i) {
    (dv(e, t, n), e.nodeType === Y.DOCUMENT_NODE && (i || mv)(e, t, n));
    var r = t.parentNode;
    if ((r && r.removeChild(t), t.nodeType === _t)) {
      var o = t.firstChild;
      if (o == null) return t;
      var a = t.lastChild;
    } else o = a = t;
    var s = n ? n.previousSibling : e.lastChild;
    ((o.previousSibling = s),
      (a.nextSibling = n),
      s ? (s.nextSibling = o) : (e.firstChild = o),
      n == null ? (e.lastChild = a) : (n.previousSibling = a));
    do o.parentNode = e;
    while (o !== a && (o = o.nextSibling));
    return (
      Xa(e.ownerDocument || e, e),
      t.nodeType == _t && (t.firstChild = t.lastChild = null),
      t
    );
  }
  function pv(e, t) {
    return (
      t.parentNode && t.parentNode.removeChild(t),
      (t.parentNode = e),
      (t.previousSibling = e.lastChild),
      (t.nextSibling = null),
      t.previousSibling
        ? (t.previousSibling.nextSibling = t)
        : (e.firstChild = t),
      (e.lastChild = t),
      Xa(e.ownerDocument, e, t),
      t
    );
  }
  on.prototype = {
    nodeName: "#document",
    nodeType: dp,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (e, t) {
      if (e.nodeType == _t) {
        for (var n = e.firstChild; n; ) {
          var i = n.nextSibling;
          (this.insertBefore(n, t), (n = i));
        }
        return e;
      }
      return (
        Bi(this, e, t),
        (e.ownerDocument = this),
        this.documentElement === null &&
          e.nodeType === Je &&
          (this.documentElement = e),
        e
      );
    },
    removeChild: function (e) {
      return (
        this.documentElement == e && (this.documentElement = null),
        yp(this, e)
      );
    },
    replaceChild: function (e, t) {
      (Bi(this, e, t, vp),
        (e.ownerDocument = this),
        t && this.removeChild(t),
        et(e) && (this.documentElement = e));
    },
    importNode: function (e, t) {
      return Ap(this, e, t);
    },
    getElementById: function (e) {
      var t = null;
      return (
        rn(this.documentElement, function (n) {
          if (n.nodeType == Je && n.getAttribute("id") == e)
            return ((t = n), !0);
        }),
        t
      );
    },
    getElementsByClassName: function (e) {
      var t = Ym(e);
      return new gr(this, function (n) {
        var i = [];
        return (
          t.length > 0 &&
            rn(n.documentElement, function (r) {
              if (r !== n && r.nodeType === Je) {
                var o = r.getAttribute("class");
                if (o) {
                  var a = e === o;
                  if (!a) {
                    var s = Ym(o);
                    a = t.every(ov(s));
                  }
                  a && i.push(r);
                }
              }
            }),
          i
        );
      });
    },
    createElement: function (e) {
      var t = new qt();
      ((t.ownerDocument = this),
        (t.nodeName = e),
        (t.tagName = e),
        (t.localName = e),
        (t.childNodes = new pt()));
      var n = (t.attributes = new Li());
      return ((n._ownerElement = t), t);
    },
    createDocumentFragment: function () {
      var e = new Hi();
      return ((e.ownerDocument = this), (e.childNodes = new pt()), e);
    },
    createTextNode: function (e) {
      var t = new es();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createComment: function (e) {
      var t = new ts();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createCDATASection: function (e) {
      var t = new rs();
      return ((t.ownerDocument = this), t.appendData(e), t);
    },
    createProcessingInstruction: function (e, t) {
      var n = new is();
      return (
        (n.ownerDocument = this),
        (n.tagName = n.nodeName = n.target = e),
        (n.nodeValue = n.data = t),
        n
      );
    },
    createAttribute: function (e) {
      var t = new Vi();
      return (
        (t.ownerDocument = this),
        (t.name = e),
        (t.nodeName = e),
        (t.localName = e),
        (t.specified = !0),
        t
      );
    },
    createEntityReference: function (e) {
      var t = new ns();
      return ((t.ownerDocument = this), (t.nodeName = e), t);
    },
    createElementNS: function (e, t) {
      var n = new qt(),
        i = t.split(":"),
        r = (n.attributes = new Li());
      return (
        (n.childNodes = new pt()),
        (n.ownerDocument = this),
        (n.nodeName = t),
        (n.tagName = t),
        (n.namespaceURI = e),
        i.length == 2
          ? ((n.prefix = i[0]), (n.localName = i[1]))
          : (n.localName = t),
        (r._ownerElement = n),
        n
      );
    },
    createAttributeNS: function (e, t) {
      var n = new Vi(),
        i = t.split(":");
      return (
        (n.ownerDocument = this),
        (n.nodeName = t),
        (n.name = t),
        (n.namespaceURI = e),
        (n.specified = !0),
        i.length == 2
          ? ((n.prefix = i[0]), (n.localName = i[1]))
          : (n.localName = t),
        n
      );
    },
  };
  Oe(on, Y);
  function qt() {
    this._nsMap = {};
  }
  qt.prototype = {
    nodeType: Je,
    hasAttribute: function (e) {
      return this.getAttributeNode(e) != null;
    },
    getAttribute: function (e) {
      var t = this.getAttributeNode(e);
      return (t && t.value) || "";
    },
    getAttributeNode: function (e) {
      return this.attributes.getNamedItem(e);
    },
    setAttribute: function (e, t) {
      var n = this.ownerDocument.createAttribute(e);
      ((n.value = n.nodeValue = "" + t), this.setAttributeNode(n));
    },
    removeAttribute: function (e) {
      var t = this.getAttributeNode(e);
      t && this.removeAttributeNode(t);
    },
    appendChild: function (e) {
      return e.nodeType === _t ? this.insertBefore(e, null) : pv(this, e);
    },
    setAttributeNode: function (e) {
      return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function (e) {
      return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function (e) {
      return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function (e, t) {
      var n = this.getAttributeNodeNS(e, t);
      n && this.removeAttributeNode(n);
    },
    hasAttributeNS: function (e, t) {
      return this.getAttributeNodeNS(e, t) != null;
    },
    getAttributeNS: function (e, t) {
      var n = this.getAttributeNodeNS(e, t);
      return (n && n.value) || "";
    },
    setAttributeNS: function (e, t, n) {
      var i = this.ownerDocument.createAttributeNS(e, t);
      ((i.value = i.nodeValue = "" + n), this.setAttributeNode(i));
    },
    getAttributeNodeNS: function (e, t) {
      return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function (e) {
      return new gr(this, function (t) {
        var n = [];
        return (
          rn(t, function (i) {
            i !== t &&
              i.nodeType == Je &&
              (e === "*" || i.tagName == e) &&
              n.push(i);
          }),
          n
        );
      });
    },
    getElementsByTagNameNS: function (e, t) {
      return new gr(this, function (n) {
        var i = [];
        return (
          rn(n, function (r) {
            r !== n &&
              r.nodeType === Je &&
              (e === "*" || r.namespaceURI === e) &&
              (t === "*" || r.localName == t) &&
              i.push(r);
          }),
          i
        );
      });
    },
  };
  on.prototype.getElementsByTagName = qt.prototype.getElementsByTagName;
  on.prototype.getElementsByTagNameNS = qt.prototype.getElementsByTagNameNS;
  Oe(qt, Y);
  function Vi() {}
  Vi.prototype.nodeType = hr;
  Oe(Vi, Y);
  function an() {}
  an.prototype = {
    data: "",
    substringData: function (e, t) {
      return this.data.substring(e, e + t);
    },
    appendData: function (e) {
      ((e = this.data + e),
        (this.nodeValue = this.data = e),
        (this.length = e.length));
    },
    insertData: function (e, t) {
      this.replaceData(e, 0, t);
    },
    appendChild: function (e) {
      throw new Error(ge[Ne]);
    },
    deleteData: function (e, t) {
      this.replaceData(e, t, "");
    },
    replaceData: function (e, t, n) {
      var i = this.data.substring(0, e),
        r = this.data.substring(e + t);
      ((n = i + n + r),
        (this.nodeValue = this.data = n),
        (this.length = n.length));
    },
  };
  Oe(an, Y);
  function es() {}
  es.prototype = {
    nodeName: "#text",
    nodeType: Fi,
    splitText: function (e) {
      var t = this.data,
        n = t.substring(e);
      ((t = t.substring(0, e)),
        (this.data = this.nodeValue = t),
        (this.length = t.length));
      var i = this.ownerDocument.createTextNode(n);
      return (
        this.parentNode && this.parentNode.insertBefore(i, this.nextSibling),
        i
      );
    },
  };
  Oe(es, an);
  function ts() {}
  ts.prototype = { nodeName: "#comment", nodeType: cp };
  Oe(ts, an);
  function rs() {}
  rs.prototype = { nodeName: "#cdata-section", nodeType: sp };
  Oe(rs, an);
  function qi() {}
  qi.prototype.nodeType = mp;
  Oe(qi, Y);
  function bp() {}
  bp.prototype.nodeType = sv;
  Oe(bp, Y);
  function wp() {}
  wp.prototype.nodeType = av;
  Oe(wp, Y);
  function ns() {}
  ns.prototype.nodeType = up;
  Oe(ns, Y);
  function Hi() {}
  Hi.prototype.nodeName = "#document-fragment";
  Hi.prototype.nodeType = _t;
  Oe(Hi, Y);
  function is() {}
  is.prototype.nodeType = lp;
  Oe(is, Y);
  function Sp() {}
  Sp.prototype.serializeToString = function (e, t, n) {
    return xp.call(e, t, n);
  };
  Y.prototype.toString = xp;
  function xp(e, t) {
    var n = [],
      i = (this.nodeType == 9 && this.documentElement) || this,
      r = i.prefix,
      o = i.namespaceURI;
    if (o && r == null) {
      var r = i.lookupPrefix(o);
      if (r == null) var a = [{ namespace: o, prefix: null }];
    }
    return (fr(this, n, e, t, a), n.join(""));
  }
  function op(e, t, n) {
    var i = e.prefix || "",
      r = e.namespaceURI;
    if (!r || (i === "xml" && r === tn.XML) || r === tn.XMLNS) return !1;
    for (var o = n.length; o--; ) {
      var a = n[o];
      if (a.prefix === i) return a.namespace !== r;
    }
    return !0;
  }
  function Qa(e, t, n) {
    e.push(" ", t, '="', n.replace(/[<>&"\t\n\r]/g, hp), '"');
  }
  function fr(e, t, n, i, r) {
    if ((r || (r = []), i))
      if (((e = i(e)), e)) {
        if (typeof e == "string") {
          t.push(e);
          return;
        }
      } else return;
    switch (e.nodeType) {
      case Je:
        var o = e.attributes,
          a = o.length,
          D = e.firstChild,
          s = e.tagName;
        n = tn.isHTML(e.namespaceURI) || n;
        var u = s;
        if (!n && !e.prefix && e.namespaceURI) {
          for (var l, c = 0; c < o.length; c++)
            if (o.item(c).name === "xmlns") {
              l = o.item(c).value;
              break;
            }
          if (!l)
            for (var d = r.length - 1; d >= 0; d--) {
              var f = r[d];
              if (f.prefix === "" && f.namespace === e.namespaceURI) {
                l = f.namespace;
                break;
              }
            }
          if (l !== e.namespaceURI)
            for (var d = r.length - 1; d >= 0; d--) {
              var f = r[d];
              if (f.namespace === e.namespaceURI) {
                f.prefix && (u = f.prefix + ":" + s);
                break;
              }
            }
        }
        t.push("<", u);
        for (var _ = 0; _ < a; _++) {
          var g = o.item(_);
          g.prefix == "xmlns"
            ? r.push({ prefix: g.localName, namespace: g.value })
            : g.nodeName == "xmlns" &&
              r.push({ prefix: "", namespace: g.value });
        }
        for (var _ = 0; _ < a; _++) {
          var g = o.item(_);
          if (op(g, n, r)) {
            var m = g.prefix || "",
              A = g.namespaceURI;
            (Qa(t, m ? "xmlns:" + m : "xmlns", A),
              r.push({ prefix: m, namespace: A }));
          }
          fr(g, t, n, i, r);
        }
        if (s === u && op(e, n, r)) {
          var m = e.prefix || "",
            A = e.namespaceURI;
          (Qa(t, m ? "xmlns:" + m : "xmlns", A),
            r.push({ prefix: m, namespace: A }));
        }
        if (D || (n && !/^(?:meta|link|img|br|hr|input)$/i.test(s))) {
          if ((t.push(">"), n && /^script$/i.test(s)))
            for (; D; )
              (D.data ? t.push(D.data) : fr(D, t, n, i, r.slice()),
                (D = D.nextSibling));
          else for (; D; ) (fr(D, t, n, i, r.slice()), (D = D.nextSibling));
          t.push("</", u, ">");
        } else t.push("/>");
        return;
      case dp:
      case _t:
        for (var D = e.firstChild; D; )
          (fr(D, t, n, i, r.slice()), (D = D.nextSibling));
        return;
      case hr:
        return Qa(t, e.name, e.value);
      case Fi:
        return t.push(e.data.replace(/[<&>]/g, hp));
      case sp:
        return t.push("<![CDATA[", e.data, "]]>");
      case cp:
        return t.push("<!--", e.data, "-->");
      case mp:
        var S = e.publicId,
          v = e.systemId;
        if ((t.push("<!DOCTYPE ", e.name), S))
          (t.push(" PUBLIC ", S), v && v != "." && t.push(" ", v), t.push(">"));
        else if (v && v != ".") t.push(" SYSTEM ", v, ">");
        else {
          var b = e.internalSubset;
          (b && t.push(" [", b, "]"), t.push(">"));
        }
        return;
      case lp:
        return t.push("<?", e.target, " ", e.data, "?>");
      case up:
        return t.push("&", e.nodeName, ";");
      default:
        t.push("??", e.nodeName);
    }
  }
  function Ap(e, t, n) {
    var i;
    switch (t.nodeType) {
      case Je:
        ((i = t.cloneNode(!1)), (i.ownerDocument = e));
      case _t:
        break;
      case hr:
        n = !0;
        break;
    }
    if (
      (i || (i = t.cloneNode(!1)),
      (i.ownerDocument = e),
      (i.parentNode = null),
      n)
    )
      for (var r = t.firstChild; r; )
        (i.appendChild(Ap(e, r, n)), (r = r.nextSibling));
    return i;
  }
  function Ja(e, t, n) {
    var i = new t.constructor();
    for (var r in t)
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        var o = t[r];
        typeof o != "object" && o != i[r] && (i[r] = o);
      }
    switch (
      (t.childNodes && (i.childNodes = new pt()),
      (i.ownerDocument = e),
      i.nodeType)
    ) {
      case Je:
        var a = t.attributes,
          s = (i.attributes = new Li()),
          u = a.length;
        s._ownerElement = i;
        for (var l = 0; l < u; l++) i.setAttributeNode(Ja(e, a.item(l), !0));
        break;
      case hr:
        n = !0;
    }
    if (n)
      for (var c = t.firstChild; c; )
        (i.appendChild(Ja(e, c, n)), (c = c.nextSibling));
    return i;
  }
  function Dp(e, t, n) {
    e[t] = n;
  }
  try {
    if (Object.defineProperty) {
      let e = function (t) {
        switch (t.nodeType) {
          case Je:
          case _t:
            var n = [];
            for (t = t.firstChild; t; )
              (t.nodeType !== 7 && t.nodeType !== 8 && n.push(e(t)),
                (t = t.nextSibling));
            return n.join("");
          default:
            return t.nodeValue;
        }
      };
      ((_v = e),
        Object.defineProperty(gr.prototype, "length", {
          get: function () {
            return (Ka(this), this.$$length);
          },
        }),
        Object.defineProperty(Y.prototype, "textContent", {
          get: function () {
            return e(this);
          },
          set: function (t) {
            switch (this.nodeType) {
              case Je:
              case _t:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (t || String(t)) &&
                  this.appendChild(this.ownerDocument.createTextNode(t));
                break;
              default:
                ((this.data = t), (this.value = t), (this.nodeValue = t));
            }
          },
        }),
        (Dp = function (t, n, i) {
          t["$$" + n] = i;
        }));
    }
  } catch {}
  var _v;
  Pt.DocumentType = qi;
  Pt.DOMException = le;
  Pt.DOMImplementation = fp;
  Pt.Element = qt;
  Pt.Node = Y;
  Pt.NodeList = pt;
  Pt.XMLSerializer = Sp;
});
var Tp = Et((sn) => {
  "use strict";
  var Ep = en().freeze;
  sn.XML_ENTITIES = Ep({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' });
  sn.HTML_ENTITIES = Ep({
    Aacute: "\xC1",
    aacute: "\xE1",
    Abreve: "\u0102",
    abreve: "\u0103",
    ac: "\u223E",
    acd: "\u223F",
    acE: "\u223E\u0333",
    Acirc: "\xC2",
    acirc: "\xE2",
    acute: "\xB4",
    Acy: "\u0410",
    acy: "\u0430",
    AElig: "\xC6",
    aelig: "\xE6",
    af: "\u2061",
    Afr: "\u{1D504}",
    afr: "\u{1D51E}",
    Agrave: "\xC0",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03B1",
    Amacr: "\u0100",
    amacr: "\u0101",
    amalg: "\u2A3F",
    AMP: "&",
    amp: "&",
    And: "\u2A53",
    and: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    ange: "\u29A4",
    angle: "\u2220",
    angmsd: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angst: "\xC5",
    angzarr: "\u237C",
    Aogon: "\u0104",
    aogon: "\u0105",
    Aopf: "\u{1D538}",
    aopf: "\u{1D552}",
    ap: "\u2248",
    apacir: "\u2A6F",
    apE: "\u2A70",
    ape: "\u224A",
    apid: "\u224B",
    apos: "'",
    ApplyFunction: "\u2061",
    approx: "\u2248",
    approxeq: "\u224A",
    Aring: "\xC5",
    aring: "\xE5",
    Ascr: "\u{1D49C}",
    ascr: "\u{1D4B6}",
    Assign: "\u2254",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224D",
    Atilde: "\xC3",
    atilde: "\xE3",
    Auml: "\xC4",
    auml: "\xE4",
    awconint: "\u2233",
    awint: "\u2A11",
    backcong: "\u224C",
    backepsilon: "\u03F6",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    Backslash: "\u2216",
    Barv: "\u2AE7",
    barvee: "\u22BD",
    Barwed: "\u2306",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrk: "\u23B5",
    bbrktbrk: "\u23B6",
    bcong: "\u224C",
    Bcy: "\u0411",
    bcy: "\u0431",
    bdquo: "\u201E",
    becaus: "\u2235",
    Because: "\u2235",
    because: "\u2235",
    bemptyv: "\u29B0",
    bepsi: "\u03F6",
    bernou: "\u212C",
    Bernoullis: "\u212C",
    Beta: "\u0392",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    Bfr: "\u{1D505}",
    bfr: "\u{1D51F}",
    bigcap: "\u22C2",
    bigcirc: "\u25EF",
    bigcup: "\u22C3",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    bigvee: "\u22C1",
    bigwedge: "\u22C0",
    bkarow: "\u290D",
    blacklozenge: "\u29EB",
    blacksquare: "\u25AA",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    blacktriangleright: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bNot: "\u2AED",
    bnot: "\u2310",
    Bopf: "\u{1D539}",
    bopf: "\u{1D553}",
    bot: "\u22A5",
    bottom: "\u22A5",
    bowtie: "\u22C8",
    boxbox: "\u29C9",
    boxDL: "\u2557",
    boxDl: "\u2556",
    boxdL: "\u2555",
    boxdl: "\u2510",
    boxDR: "\u2554",
    boxDr: "\u2553",
    boxdR: "\u2552",
    boxdr: "\u250C",
    boxH: "\u2550",
    boxh: "\u2500",
    boxHD: "\u2566",
    boxHd: "\u2564",
    boxhD: "\u2565",
    boxhd: "\u252C",
    boxHU: "\u2569",
    boxHu: "\u2567",
    boxhU: "\u2568",
    boxhu: "\u2534",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxUL: "\u255D",
    boxUl: "\u255C",
    boxuL: "\u255B",
    boxul: "\u2518",
    boxUR: "\u255A",
    boxUr: "\u2559",
    boxuR: "\u2558",
    boxur: "\u2514",
    boxV: "\u2551",
    boxv: "\u2502",
    boxVH: "\u256C",
    boxVh: "\u256B",
    boxvH: "\u256A",
    boxvh: "\u253C",
    boxVL: "\u2563",
    boxVl: "\u2562",
    boxvL: "\u2561",
    boxvl: "\u2524",
    boxVR: "\u2560",
    boxVr: "\u255F",
    boxvR: "\u255E",
    boxvr: "\u251C",
    bprime: "\u2035",
    Breve: "\u02D8",
    breve: "\u02D8",
    brvbar: "\xA6",
    Bscr: "\u212C",
    bscr: "\u{1D4B7}",
    bsemi: "\u204F",
    bsim: "\u223D",
    bsime: "\u22CD",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224E",
    bumpE: "\u2AAE",
    bumpe: "\u224F",
    Bumpeq: "\u224E",
    bumpeq: "\u224F",
    Cacute: "\u0106",
    cacute: "\u0107",
    Cap: "\u22D2",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    CapitalDifferentialD: "\u2145",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    caron: "\u02C7",
    Cayleys: "\u212D",
    ccaps: "\u2A4D",
    Ccaron: "\u010C",
    ccaron: "\u010D",
    Ccedil: "\xC7",
    ccedil: "\xE7",
    Ccirc: "\u0108",
    ccirc: "\u0109",
    Cconint: "\u2230",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    Cdot: "\u010A",
    cdot: "\u010B",
    cedil: "\xB8",
    Cedilla: "\xB8",
    cemptyv: "\u29B2",
    cent: "\xA2",
    CenterDot: "\xB7",
    centerdot: "\xB7",
    Cfr: "\u212D",
    cfr: "\u{1D520}",
    CHcy: "\u0427",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    Chi: "\u03A7",
    chi: "\u03C7",
    cir: "\u25CB",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    CircleDot: "\u2299",
    circledR: "\xAE",
    circledS: "\u24C8",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    cirE: "\u29C3",
    cire: "\u2257",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    CloseCurlyQuote: "\u2019",
    clubs: "\u2663",
    clubsuit: "\u2663",
    Colon: "\u2237",
    colon: ":",
    Colone: "\u2A74",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2A6D",
    Congruent: "\u2261",
    Conint: "\u222F",
    conint: "\u222E",
    ContourIntegral: "\u222E",
    Copf: "\u2102",
    copf: "\u{1D554}",
    coprod: "\u2210",
    Coproduct: "\u2210",
    COPY: "\xA9",
    copy: "\xA9",
    copysr: "\u2117",
    CounterClockwiseContourIntegral: "\u2233",
    crarr: "\u21B5",
    Cross: "\u2A2F",
    cross: "\u2717",
    Cscr: "\u{1D49E}",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cularrp: "\u293D",
    Cup: "\u22D3",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    CupCap: "\u224D",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curarrm: "\u293C",
    curlyeqprec: "\u22DE",
    curlyeqsucc: "\u22DF",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    curren: "\xA4",
    curvearrowleft: "\u21B6",
    curvearrowright: "\u21B7",
    cuvee: "\u22CE",
    cuwed: "\u22CF",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232D",
    Dagger: "\u2021",
    dagger: "\u2020",
    daleth: "\u2138",
    Darr: "\u21A1",
    dArr: "\u21D3",
    darr: "\u2193",
    dash: "\u2010",
    Dashv: "\u2AE4",
    dashv: "\u22A3",
    dbkarow: "\u290F",
    dblac: "\u02DD",
    Dcaron: "\u010E",
    dcaron: "\u010F",
    Dcy: "\u0414",
    dcy: "\u0434",
    DD: "\u2145",
    dd: "\u2146",
    ddagger: "\u2021",
    ddarr: "\u21CA",
    DDotrahd: "\u2911",
    ddotseq: "\u2A77",
    deg: "\xB0",
    Del: "\u2207",
    Delta: "\u0394",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    Dfr: "\u{1D507}",
    dfr: "\u{1D521}",
    dHar: "\u2965",
    dharl: "\u21C3",
    dharr: "\u21C2",
    DiacriticalAcute: "\xB4",
    DiacriticalDot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02DC",
    diam: "\u22C4",
    Diamond: "\u22C4",
    diamond: "\u22C4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xA8",
    DifferentialD: "\u2146",
    digamma: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    DJcy: "\u0402",
    djcy: "\u0452",
    dlcorn: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    Dopf: "\u{1D53B}",
    dopf: "\u{1D555}",
    Dot: "\xA8",
    dot: "\u02D9",
    DotDot: "\u20DC",
    doteq: "\u2250",
    doteqdot: "\u2251",
    DotEqual: "\u2250",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    doublebarwedge: "\u2306",
    DoubleContourIntegral: "\u222F",
    DoubleDot: "\xA8",
    DoubleDownArrow: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    DoubleLeftTee: "\u2AE4",
    DoubleLongLeftArrow: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    DoubleRightArrow: "\u21D2",
    DoubleRightTee: "\u22A8",
    DoubleUpArrow: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    DoubleVerticalBar: "\u2225",
    DownArrow: "\u2193",
    Downarrow: "\u21D3",
    downarrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    DownBreve: "\u0311",
    downdownarrows: "\u21CA",
    downharpoonleft: "\u21C3",
    downharpoonright: "\u21C2",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    DownTeeArrow: "\u21A7",
    drbkarow: "\u2910",
    drcorn: "\u231F",
    drcrop: "\u230C",
    Dscr: "\u{1D49F}",
    dscr: "\u{1D4B9}",
    DScy: "\u0405",
    dscy: "\u0455",
    dsol: "\u29F6",
    Dstrok: "\u0110",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    dtrif: "\u25BE",
    duarr: "\u21F5",
    duhar: "\u296F",
    dwangle: "\u29A6",
    DZcy: "\u040F",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    Eacute: "\xC9",
    eacute: "\xE9",
    easter: "\u2A6E",
    Ecaron: "\u011A",
    ecaron: "\u011B",
    ecir: "\u2256",
    Ecirc: "\xCA",
    ecirc: "\xEA",
    ecolon: "\u2255",
    Ecy: "\u042D",
    ecy: "\u044D",
    eDDot: "\u2A77",
    Edot: "\u0116",
    eDot: "\u2251",
    edot: "\u0117",
    ee: "\u2147",
    efDot: "\u2252",
    Efr: "\u{1D508}",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    Egrave: "\xC8",
    egrave: "\xE8",
    egs: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    Element: "\u2208",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    elsdot: "\u2A97",
    Emacr: "\u0112",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    EmptySmallSquare: "\u25FB",
    emptyv: "\u2205",
    EmptyVerySmallSquare: "\u25AB",
    emsp: "\u2003",
    emsp13: "\u2004",
    emsp14: "\u2005",
    ENG: "\u014A",
    eng: "\u014B",
    ensp: "\u2002",
    Eogon: "\u0118",
    eogon: "\u0119",
    Eopf: "\u{1D53C}",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    Epsilon: "\u0395",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2A96",
    eqslantless: "\u2A95",
    Equal: "\u2A75",
    equals: "=",
    EqualTilde: "\u2242",
    equest: "\u225F",
    Equilibrium: "\u21CC",
    equiv: "\u2261",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erarr: "\u2971",
    erDot: "\u2253",
    Escr: "\u2130",
    escr: "\u212F",
    esdot: "\u2250",
    Esim: "\u2A73",
    esim: "\u2242",
    Eta: "\u0397",
    eta: "\u03B7",
    ETH: "\xD0",
    eth: "\xF0",
    Euml: "\xCB",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    exist: "\u2203",
    Exists: "\u2203",
    expectation: "\u2130",
    ExponentialE: "\u2147",
    exponentiale: "\u2147",
    fallingdotseq: "\u2252",
    Fcy: "\u0424",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    Ffr: "\u{1D509}",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    Fopf: "\u{1D53D}",
    fopf: "\u{1D557}",
    ForAll: "\u2200",
    forall: "\u2200",
    fork: "\u22D4",
    forkv: "\u2AD9",
    Fouriertrf: "\u2131",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    Fscr: "\u2131",
    fscr: "\u{1D4BB}",
    gacute: "\u01F5",
    Gamma: "\u0393",
    gamma: "\u03B3",
    Gammad: "\u03DC",
    gammad: "\u03DD",
    gap: "\u2A86",
    Gbreve: "\u011E",
    gbreve: "\u011F",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    gcirc: "\u011D",
    Gcy: "\u0413",
    gcy: "\u0433",
    Gdot: "\u0120",
    gdot: "\u0121",
    gE: "\u2267",
    ge: "\u2265",
    gEl: "\u2A8C",
    gel: "\u22DB",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    Gfr: "\u{1D50A}",
    gfr: "\u{1D524}",
    Gg: "\u22D9",
    gg: "\u226B",
    ggg: "\u22D9",
    gimel: "\u2137",
    GJcy: "\u0403",
    gjcy: "\u0453",
    gl: "\u2277",
    gla: "\u2AA5",
    glE: "\u2A92",
    glj: "\u2AA4",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gnE: "\u2269",
    gne: "\u2A88",
    gneq: "\u2A88",
    gneqq: "\u2269",
    gnsim: "\u22E7",
    Gopf: "\u{1D53E}",
    gopf: "\u{1D558}",
    grave: "`",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Gscr: "\u{1D4A2}",
    gscr: "\u210A",
    gsim: "\u2273",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    Gt: "\u226B",
    GT: ">",
    gt: ">",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrapprox: "\u2A86",
    gtrarr: "\u2978",
    gtrdot: "\u22D7",
    gtreqless: "\u22DB",
    gtreqqless: "\u2A8C",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    Hacek: "\u02C7",
    hairsp: "\u200A",
    half: "\xBD",
    hamilt: "\u210B",
    HARDcy: "\u042A",
    hardcy: "\u044A",
    hArr: "\u21D4",
    harr: "\u2194",
    harrcir: "\u2948",
    harrw: "\u21AD",
    Hat: "^",
    hbar: "\u210F",
    Hcirc: "\u0124",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22B9",
    Hfr: "\u210C",
    hfr: "\u{1D525}",
    HilbertSpace: "\u210B",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    Hopf: "\u210D",
    hopf: "\u{1D559}",
    horbar: "\u2015",
    HorizontalLine: "\u2500",
    Hscr: "\u210B",
    hscr: "\u{1D4BD}",
    hslash: "\u210F",
    Hstrok: "\u0126",
    hstrok: "\u0127",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    hybull: "\u2043",
    hyphen: "\u2010",
    Iacute: "\xCD",
    iacute: "\xED",
    ic: "\u2063",
    Icirc: "\xCE",
    icirc: "\xEE",
    Icy: "\u0418",
    icy: "\u0438",
    Idot: "\u0130",
    IEcy: "\u0415",
    iecy: "\u0435",
    iexcl: "\xA1",
    iff: "\u21D4",
    Ifr: "\u2111",
    ifr: "\u{1D526}",
    Igrave: "\xCC",
    igrave: "\xEC",
    ii: "\u2148",
    iiiint: "\u2A0C",
    iiint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    IJlig: "\u0132",
    ijlig: "\u0133",
    Im: "\u2111",
    Imacr: "\u012A",
    imacr: "\u012B",
    image: "\u2111",
    ImaginaryI: "\u2148",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    Implies: "\u21D2",
    in: "\u2208",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    inodot: "\u0131",
    Int: "\u222C",
    int: "\u222B",
    intcal: "\u22BA",
    integers: "\u2124",
    Integral: "\u222B",
    intercal: "\u22BA",
    Intersection: "\u22C2",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    IOcy: "\u0401",
    iocy: "\u0451",
    Iogon: "\u012E",
    iogon: "\u012F",
    Iopf: "\u{1D540}",
    iopf: "\u{1D55A}",
    Iota: "\u0399",
    iota: "\u03B9",
    iprod: "\u2A3C",
    iquest: "\xBF",
    Iscr: "\u2110",
    iscr: "\u{1D4BE}",
    isin: "\u2208",
    isindot: "\u22F5",
    isinE: "\u22F9",
    isins: "\u22F4",
    isinsv: "\u22F3",
    isinv: "\u2208",
    it: "\u2062",
    Itilde: "\u0128",
    itilde: "\u0129",
    Iukcy: "\u0406",
    iukcy: "\u0456",
    Iuml: "\xCF",
    iuml: "\xEF",
    Jcirc: "\u0134",
    jcirc: "\u0135",
    Jcy: "\u0419",
    jcy: "\u0439",
    Jfr: "\u{1D50D}",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    Jopf: "\u{1D541}",
    jopf: "\u{1D55B}",
    Jscr: "\u{1D4A5}",
    jscr: "\u{1D4BF}",
    Jsercy: "\u0408",
    jsercy: "\u0458",
    Jukcy: "\u0404",
    jukcy: "\u0454",
    Kappa: "\u039A",
    kappa: "\u03BA",
    kappav: "\u03F0",
    Kcedil: "\u0136",
    kcedil: "\u0137",
    Kcy: "\u041A",
    kcy: "\u043A",
    Kfr: "\u{1D50E}",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    KHcy: "\u0425",
    khcy: "\u0445",
    KJcy: "\u040C",
    kjcy: "\u045C",
    Kopf: "\u{1D542}",
    kopf: "\u{1D55C}",
    Kscr: "\u{1D4A6}",
    kscr: "\u{1D4C0}",
    lAarr: "\u21DA",
    Lacute: "\u0139",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lagran: "\u2112",
    Lambda: "\u039B",
    lambda: "\u03BB",
    Lang: "\u27EA",
    lang: "\u27E8",
    langd: "\u2991",
    langle: "\u27E8",
    lap: "\u2A85",
    Laplacetrf: "\u2112",
    laquo: "\xAB",
    Larr: "\u219E",
    lArr: "\u21D0",
    larr: "\u2190",
    larrb: "\u21E4",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrhk: "\u21A9",
    larrlp: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    lat: "\u2AAB",
    lAtail: "\u291B",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lBarr: "\u290E",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    Lcaron: "\u013D",
    lcaron: "\u013E",
    Lcedil: "\u013B",
    lcedil: "\u013C",
    lceil: "\u2308",
    lcub: "{",
    Lcy: "\u041B",
    lcy: "\u043B",
    ldca: "\u2936",
    ldquo: "\u201C",
    ldquor: "\u201E",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    lE: "\u2266",
    le: "\u2264",
    LeftAngleBracket: "\u27E8",
    LeftArrow: "\u2190",
    Leftarrow: "\u21D0",
    leftarrow: "\u2190",
    LeftArrowBar: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    leftarrowtail: "\u21A2",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    leftharpoondown: "\u21BD",
    leftharpoonup: "\u21BC",
    leftleftarrows: "\u21C7",
    LeftRightArrow: "\u2194",
    Leftrightarrow: "\u21D4",
    leftrightarrow: "\u2194",
    leftrightarrows: "\u21C6",
    leftrightharpoons: "\u21CB",
    leftrightsquigarrow: "\u21AD",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    LeftTeeArrow: "\u21A4",
    LeftTeeVector: "\u295A",
    leftthreetimes: "\u22CB",
    LeftTriangle: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    LeftVectorBar: "\u2952",
    lEg: "\u2A8B",
    leg: "\u22DA",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessapprox: "\u2A85",
    lessdot: "\u22D6",
    lesseqgtr: "\u22DA",
    lesseqqgtr: "\u2A8B",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    LessLess: "\u2AA1",
    lesssim: "\u2272",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    lfisht: "\u297C",
    lfloor: "\u230A",
    Lfr: "\u{1D50F}",
    lfr: "\u{1D529}",
    lg: "\u2276",
    lgE: "\u2A91",
    lHar: "\u2962",
    lhard: "\u21BD",
    lharu: "\u21BC",
    lharul: "\u296A",
    lhblk: "\u2584",
    LJcy: "\u0409",
    ljcy: "\u0459",
    Ll: "\u22D8",
    ll: "\u226A",
    llarr: "\u21C7",
    llcorner: "\u231E",
    Lleftarrow: "\u21DA",
    llhard: "\u296B",
    lltri: "\u25FA",
    Lmidot: "\u013F",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lnE: "\u2268",
    lne: "\u2A87",
    lneq: "\u2A87",
    lneqq: "\u2268",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    lobrk: "\u27E6",
    LongLeftArrow: "\u27F5",
    Longleftarrow: "\u27F8",
    longleftarrow: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    Longleftrightarrow: "\u27FA",
    longleftrightarrow: "\u27F7",
    longmapsto: "\u27FC",
    LongRightArrow: "\u27F6",
    Longrightarrow: "\u27F9",
    longrightarrow: "\u27F6",
    looparrowleft: "\u21AB",
    looparrowright: "\u21AC",
    lopar: "\u2985",
    Lopf: "\u{1D543}",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    lowbar: "_",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lozf: "\u29EB",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21C6",
    lrcorner: "\u231F",
    lrhar: "\u21CB",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    Lscr: "\u2112",
    lscr: "\u{1D4C1}",
    Lsh: "\u21B0",
    lsh: "\u21B0",
    lsim: "\u2272",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201A",
    Lstrok: "\u0141",
    lstrok: "\u0142",
    Lt: "\u226A",
    LT: "<",
    lt: "<",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltdot: "\u22D6",
    lthree: "\u22CB",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltri: "\u25C3",
    ltrie: "\u22B4",
    ltrif: "\u25C2",
    ltrPar: "\u2996",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    macr: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    Map: "\u2905",
    map: "\u21A6",
    mapsto: "\u21A6",
    mapstodown: "\u21A7",
    mapstoleft: "\u21A4",
    mapstoup: "\u21A5",
    marker: "\u25AE",
    mcomma: "\u2A29",
    Mcy: "\u041C",
    mcy: "\u043C",
    mdash: "\u2014",
    mDDot: "\u223A",
    measuredangle: "\u2221",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mfr: "\u{1D510}",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xB5",
    mid: "\u2223",
    midast: "*",
    midcir: "\u2AF0",
    middot: "\xB7",
    minus: "\u2212",
    minusb: "\u229F",
    minusd: "\u2238",
    minusdu: "\u2A2A",
    MinusPlus: "\u2213",
    mlcp: "\u2ADB",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22A7",
    Mopf: "\u{1D544}",
    mopf: "\u{1D55E}",
    mp: "\u2213",
    Mscr: "\u2133",
    mscr: "\u{1D4C2}",
    mstpos: "\u223E",
    Mu: "\u039C",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nabla: "\u2207",
    Nacute: "\u0143",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    nap: "\u2249",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natur: "\u266E",
    natural: "\u266E",
    naturals: "\u2115",
    nbsp: "\xA0",
    nbump: "\u224E\u0338",
    nbumpe: "\u224F\u0338",
    ncap: "\u2A43",
    Ncaron: "\u0147",
    ncaron: "\u0148",
    Ncedil: "\u0145",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    Ncy: "\u041D",
    ncy: "\u043D",
    ndash: "\u2013",
    ne: "\u2260",
    nearhk: "\u2924",
    neArr: "\u21D7",
    nearr: "\u2197",
    nearrow: "\u2197",
    nedot: "\u2250\u0338",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NewLine: `
`,
    nexist: "\u2204",
    nexists: "\u2204",
    Nfr: "\u{1D511}",
    nfr: "\u{1D52B}",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    nGg: "\u22D9\u0338",
    ngsim: "\u2275",
    nGt: "\u226B\u20D2",
    ngt: "\u226F",
    ngtr: "\u226F",
    nGtv: "\u226B\u0338",
    nhArr: "\u21CE",
    nharr: "\u21AE",
    nhpar: "\u2AF2",
    ni: "\u220B",
    nis: "\u22FC",
    nisd: "\u22FA",
    niv: "\u220B",
    NJcy: "\u040A",
    njcy: "\u045A",
    nlArr: "\u21CD",
    nlarr: "\u219A",
    nldr: "\u2025",
    nlE: "\u2266\u0338",
    nle: "\u2270",
    nLeftarrow: "\u21CD",
    nleftarrow: "\u219A",
    nLeftrightarrow: "\u21CE",
    nleftrightarrow: "\u21AE",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    nless: "\u226E",
    nLl: "\u22D8\u0338",
    nlsim: "\u2274",
    nLt: "\u226A\u20D2",
    nlt: "\u226E",
    nltri: "\u22EA",
    nltrie: "\u22EC",
    nLtv: "\u226A\u0338",
    nmid: "\u2224",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    Nopf: "\u2115",
    nopf: "\u{1D55F}",
    Not: "\u2AEC",
    not: "\xAC",
    NotCongruent: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    notin: "\u2209",
    notindot: "\u22F5\u0338",
    notinE: "\u22F9\u0338",
    notinva: "\u2209",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    notni: "\u220C",
    notniva: "\u220C",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    NotReverseElement: "\u220C",
    NotRightTriangle: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    NotSubset: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    npar: "\u2226",
    nparallel: "\u2226",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    npr: "\u2280",
    nprcue: "\u22E0",
    npre: "\u2AAF\u0338",
    nprec: "\u2280",
    npreceq: "\u2AAF\u0338",
    nrArr: "\u21CF",
    nrarr: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nRightarrow: "\u21CF",
    nrightarrow: "\u219B",
    nrtri: "\u22EB",
    nrtrie: "\u22ED",
    nsc: "\u2281",
    nsccue: "\u22E1",
    nsce: "\u2AB0\u0338",
    Nscr: "\u{1D4A9}",
    nscr: "\u{1D4C3}",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22E2",
    nsqsupe: "\u22E3",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20D2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2AC5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2AB0\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20D2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2AC6\u0338",
    ntgl: "\u2279",
    Ntilde: "\xD1",
    ntilde: "\xF1",
    ntlg: "\u2278",
    ntriangleleft: "\u22EA",
    ntrianglelefteq: "\u22EC",
    ntriangleright: "\u22EB",
    ntrianglerighteq: "\u22ED",
    Nu: "\u039D",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvap: "\u224D\u20D2",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nvDash: "\u22AD",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvHarr: "\u2904",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwarhk: "\u2923",
    nwArr: "\u21D6",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    Oacute: "\xD3",
    oacute: "\xF3",
    oast: "\u229B",
    ocir: "\u229A",
    Ocirc: "\xD4",
    ocirc: "\xF4",
    Ocy: "\u041E",
    ocy: "\u043E",
    odash: "\u229D",
    Odblac: "\u0150",
    odblac: "\u0151",
    odiv: "\u2A38",
    odot: "\u2299",
    odsold: "\u29BC",
    OElig: "\u0152",
    oelig: "\u0153",
    ofcir: "\u29BF",
    Ofr: "\u{1D512}",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    Ograve: "\xD2",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    ohm: "\u03A9",
    oint: "\u222E",
    olarr: "\u21BA",
    olcir: "\u29BE",
    olcross: "\u29BB",
    oline: "\u203E",
    olt: "\u29C0",
    Omacr: "\u014C",
    omacr: "\u014D",
    Omega: "\u03A9",
    omega: "\u03C9",
    Omicron: "\u039F",
    omicron: "\u03BF",
    omid: "\u29B6",
    ominus: "\u2296",
    Oopf: "\u{1D546}",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    OpenCurlyDoubleQuote: "\u201C",
    OpenCurlyQuote: "\u2018",
    operp: "\u29B9",
    oplus: "\u2295",
    Or: "\u2A54",
    or: "\u2228",
    orarr: "\u21BB",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oS: "\u24C8",
    Oscr: "\u{1D4AA}",
    oscr: "\u2134",
    Oslash: "\xD8",
    oslash: "\xF8",
    osol: "\u2298",
    Otilde: "\xD5",
    otilde: "\xF5",
    Otimes: "\u2A37",
    otimes: "\u2297",
    otimesas: "\u2A36",
    Ouml: "\xD6",
    ouml: "\xF6",
    ovbar: "\u233D",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    OverParenthesis: "\u23DC",
    par: "\u2225",
    para: "\xB6",
    parallel: "\u2225",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    part: "\u2202",
    PartialD: "\u2202",
    Pcy: "\u041F",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22A5",
    pertenk: "\u2031",
    Pfr: "\u{1D513}",
    pfr: "\u{1D52D}",
    Phi: "\u03A6",
    phi: "\u03C6",
    phiv: "\u03D5",
    phmmat: "\u2133",
    phone: "\u260E",
    Pi: "\u03A0",
    pi: "\u03C0",
    pitchfork: "\u22D4",
    piv: "\u03D6",
    planck: "\u210F",
    planckh: "\u210E",
    plankv: "\u210F",
    plus: "+",
    plusacir: "\u2A23",
    plusb: "\u229E",
    pluscir: "\u2A22",
    plusdo: "\u2214",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    PlusMinus: "\xB1",
    plusmn: "\xB1",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pm: "\xB1",
    Poincareplane: "\u210C",
    pointint: "\u2A15",
    Popf: "\u2119",
    popf: "\u{1D561}",
    pound: "\xA3",
    Pr: "\u2ABB",
    pr: "\u227A",
    prap: "\u2AB7",
    prcue: "\u227C",
    prE: "\u2AB3",
    pre: "\u2AAF",
    prec: "\u227A",
    precapprox: "\u2AB7",
    preccurlyeq: "\u227C",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    preceq: "\u2AAF",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    precsim: "\u227E",
    Prime: "\u2033",
    prime: "\u2032",
    primes: "\u2119",
    prnap: "\u2AB9",
    prnE: "\u2AB5",
    prnsim: "\u22E8",
    prod: "\u220F",
    Product: "\u220F",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221D",
    Proportion: "\u2237",
    Proportional: "\u221D",
    propto: "\u221D",
    prsim: "\u227E",
    prurel: "\u22B0",
    Pscr: "\u{1D4AB}",
    pscr: "\u{1D4C5}",
    Psi: "\u03A8",
    psi: "\u03C8",
    puncsp: "\u2008",
    Qfr: "\u{1D514}",
    qfr: "\u{1D52E}",
    qint: "\u2A0C",
    Qopf: "\u211A",
    qopf: "\u{1D562}",
    qprime: "\u2057",
    Qscr: "\u{1D4AC}",
    qscr: "\u{1D4C6}",
    quaternions: "\u210D",
    quatint: "\u2A16",
    quest: "?",
    questeq: "\u225F",
    QUOT: '"',
    quot: '"',
    rAarr: "\u21DB",
    race: "\u223D\u0331",
    Racute: "\u0154",
    racute: "\u0155",
    radic: "\u221A",
    raemptyv: "\u29B3",
    Rang: "\u27EB",
    rang: "\u27E9",
    rangd: "\u2992",
    range: "\u29A5",
    rangle: "\u27E9",
    raquo: "\xBB",
    Rarr: "\u21A0",
    rArr: "\u21D2",
    rarr: "\u2192",
    rarrap: "\u2975",
    rarrb: "\u21E5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrhk: "\u21AA",
    rarrlp: "\u21AC",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    Rarrtl: "\u2916",
    rarrtl: "\u21A3",
    rarrw: "\u219D",
    rAtail: "\u291C",
    ratail: "\u291A",
    ratio: "\u2236",
    rationals: "\u211A",
    RBarr: "\u2910",
    rBarr: "\u290F",
    rbarr: "\u290D",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    Rcaron: "\u0158",
    rcaron: "\u0159",
    Rcedil: "\u0156",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    Rcy: "\u0420",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201D",
    rdquor: "\u201D",
    rdsh: "\u21B3",
    Re: "\u211C",
    real: "\u211C",
    realine: "\u211B",
    realpart: "\u211C",
    reals: "\u211D",
    rect: "\u25AD",
    REG: "\xAE",
    reg: "\xAE",
    ReverseElement: "\u220B",
    ReverseEquilibrium: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    rfisht: "\u297D",
    rfloor: "\u230B",
    Rfr: "\u211C",
    rfr: "\u{1D52F}",
    rHar: "\u2964",
    rhard: "\u21C1",
    rharu: "\u21C0",
    rharul: "\u296C",
    Rho: "\u03A1",
    rho: "\u03C1",
    rhov: "\u03F1",
    RightAngleBracket: "\u27E9",
    RightArrow: "\u2192",
    Rightarrow: "\u21D2",
    rightarrow: "\u2192",
    RightArrowBar: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    rightarrowtail: "\u21A3",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    rightharpoondown: "\u21C1",
    rightharpoonup: "\u21C0",
    rightleftarrows: "\u21C4",
    rightleftharpoons: "\u21CC",
    rightrightarrows: "\u21C9",
    rightsquigarrow: "\u219D",
    RightTee: "\u22A2",
    RightTeeArrow: "\u21A6",
    RightTeeVector: "\u295B",
    rightthreetimes: "\u22CC",
    RightTriangle: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    RightVectorBar: "\u2953",
    ring: "\u02DA",
    risingdotseq: "\u2253",
    rlarr: "\u21C4",
    rlhar: "\u21CC",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    robrk: "\u27E7",
    ropar: "\u2986",
    Ropf: "\u211D",
    ropf: "\u{1D563}",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    RoundImplies: "\u2970",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rrarr: "\u21C9",
    Rrightarrow: "\u21DB",
    rsaquo: "\u203A",
    Rscr: "\u211B",
    rscr: "\u{1D4C7}",
    Rsh: "\u21B1",
    rsh: "\u21B1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22CC",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    rtrie: "\u22B5",
    rtrif: "\u25B8",
    rtriltri: "\u29CE",
    RuleDelayed: "\u29F4",
    ruluhar: "\u2968",
    rx: "\u211E",
    Sacute: "\u015A",
    sacute: "\u015B",
    sbquo: "\u201A",
    Sc: "\u2ABC",
    sc: "\u227B",
    scap: "\u2AB8",
    Scaron: "\u0160",
    scaron: "\u0161",
    sccue: "\u227D",
    scE: "\u2AB4",
    sce: "\u2AB0",
    Scedil: "\u015E",
    scedil: "\u015F",
    Scirc: "\u015C",
    scirc: "\u015D",
    scnap: "\u2ABA",
    scnE: "\u2AB6",
    scnsim: "\u22E9",
    scpolint: "\u2A13",
    scsim: "\u227F",
    Scy: "\u0421",
    scy: "\u0441",
    sdot: "\u22C5",
    sdotb: "\u22A1",
    sdote: "\u2A66",
    searhk: "\u2925",
    seArr: "\u21D8",
    searr: "\u2198",
    searrow: "\u2198",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    Sfr: "\u{1D516}",
    sfr: "\u{1D530}",
    sfrown: "\u2322",
    sharp: "\u266F",
    SHCHcy: "\u0429",
    shchcy: "\u0449",
    SHcy: "\u0428",
    shcy: "\u0448",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    shy: "\xAD",
    Sigma: "\u03A3",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    sim: "\u223C",
    simdot: "\u2A6A",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    slarr: "\u2190",
    SmallCircle: "\u2218",
    smallsetminus: "\u2216",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    SOFTcy: "\u042C",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    Sopf: "\u{1D54A}",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\uFE00",
    sqcup: "\u2294",
    sqcups: "\u2294\uFE00",
    Sqrt: "\u221A",
    sqsub: "\u228F",
    sqsube: "\u2291",
    sqsubset: "\u228F",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    squ: "\u25A1",
    Square: "\u25A1",
    square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    squarf: "\u25AA",
    squf: "\u25AA",
    srarr: "\u2192",
    Sscr: "\u{1D4AE}",
    sscr: "\u{1D4C8}",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22C6",
    Star: "\u22C6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03F5",
    straightphi: "\u03D5",
    strns: "\xAF",
    Sub: "\u22D0",
    sub: "\u2282",
    subdot: "\u2ABD",
    subE: "\u2AC5",
    sube: "\u2286",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subne: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    Subset: "\u22D0",
    subset: "\u2282",
    subseteq: "\u2286",
    subseteqq: "\u2AC5",
    SubsetEqual: "\u2286",
    subsetneq: "\u228A",
    subsetneqq: "\u2ACB",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    succ: "\u227B",
    succapprox: "\u2AB8",
    succcurlyeq: "\u227D",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    succeq: "\u2AB0",
    succnapprox: "\u2ABA",
    succneqq: "\u2AB6",
    succnsim: "\u22E9",
    succsim: "\u227F",
    SuchThat: "\u220B",
    Sum: "\u2211",
    sum: "\u2211",
    sung: "\u266A",
    Sup: "\u22D1",
    sup: "\u2283",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supE: "\u2AC6",
    supe: "\u2287",
    supedot: "\u2AC4",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supne: "\u228B",
    supplus: "\u2AC0",
    Supset: "\u22D1",
    supset: "\u2283",
    supseteq: "\u2287",
    supseteqq: "\u2AC6",
    supsetneq: "\u228B",
    supsetneqq: "\u2ACC",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swarhk: "\u2926",
    swArr: "\u21D9",
    swarr: "\u2199",
    swarrow: "\u2199",
    swnwar: "\u292A",
    szlig: "\xDF",
    Tab: "	",
    target: "\u2316",
    Tau: "\u03A4",
    tau: "\u03C4",
    tbrk: "\u23B4",
    Tcaron: "\u0164",
    tcaron: "\u0165",
    Tcedil: "\u0162",
    tcedil: "\u0163",
    Tcy: "\u0422",
    tcy: "\u0442",
    tdot: "\u20DB",
    telrec: "\u2315",
    Tfr: "\u{1D517}",
    tfr: "\u{1D531}",
    there4: "\u2234",
    Therefore: "\u2234",
    therefore: "\u2234",
    Theta: "\u0398",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    thickapprox: "\u2248",
    thicksim: "\u223C",
    ThickSpace: "\u205F\u200A",
    thinsp: "\u2009",
    ThinSpace: "\u2009",
    thkap: "\u2248",
    thksim: "\u223C",
    THORN: "\xDE",
    thorn: "\xFE",
    Tilde: "\u223C",
    tilde: "\u02DC",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    times: "\xD7",
    timesb: "\u22A0",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    tint: "\u222D",
    toea: "\u2928",
    top: "\u22A4",
    topbot: "\u2336",
    topcir: "\u2AF1",
    Topf: "\u{1D54B}",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tosa: "\u2929",
    tprime: "\u2034",
    TRADE: "\u2122",
    trade: "\u2122",
    triangle: "\u25B5",
    triangledown: "\u25BF",
    triangleleft: "\u25C3",
    trianglelefteq: "\u22B4",
    triangleq: "\u225C",
    triangleright: "\u25B9",
    trianglerighteq: "\u22B5",
    tridot: "\u25EC",
    trie: "\u225C",
    triminus: "\u2A3A",
    TripleDot: "\u20DB",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    Tscr: "\u{1D4AF}",
    tscr: "\u{1D4C9}",
    TScy: "\u0426",
    tscy: "\u0446",
    TSHcy: "\u040B",
    tshcy: "\u045B",
    Tstrok: "\u0166",
    tstrok: "\u0167",
    twixt: "\u226C",
    twoheadleftarrow: "\u219E",
    twoheadrightarrow: "\u21A0",
    Uacute: "\xDA",
    uacute: "\xFA",
    Uarr: "\u219F",
    uArr: "\u21D1",
    uarr: "\u2191",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    ubrcy: "\u045E",
    Ubreve: "\u016C",
    ubreve: "\u016D",
    Ucirc: "\xDB",
    ucirc: "\xFB",
    Ucy: "\u0423",
    ucy: "\u0443",
    udarr: "\u21C5",
    Udblac: "\u0170",
    udblac: "\u0171",
    udhar: "\u296E",
    ufisht: "\u297E",
    Ufr: "\u{1D518}",
    ufr: "\u{1D532}",
    Ugrave: "\xD9",
    ugrave: "\xF9",
    uHar: "\u2963",
    uharl: "\u21BF",
    uharr: "\u21BE",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    Umacr: "\u016A",
    umacr: "\u016B",
    uml: "\xA8",
    UnderBar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    Uogon: "\u0172",
    uogon: "\u0173",
    Uopf: "\u{1D54C}",
    uopf: "\u{1D566}",
    UpArrow: "\u2191",
    Uparrow: "\u21D1",
    uparrow: "\u2191",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    UpDownArrow: "\u2195",
    Updownarrow: "\u21D5",
    updownarrow: "\u2195",
    UpEquilibrium: "\u296E",
    upharpoonleft: "\u21BF",
    upharpoonright: "\u21BE",
    uplus: "\u228E",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    Upsi: "\u03D2",
    upsi: "\u03C5",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    upsilon: "\u03C5",
    UpTee: "\u22A5",
    UpTeeArrow: "\u21A5",
    upuparrows: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    Uring: "\u016E",
    uring: "\u016F",
    urtri: "\u25F9",
    Uscr: "\u{1D4B0}",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    Utilde: "\u0168",
    utilde: "\u0169",
    utri: "\u25B5",
    utrif: "\u25B4",
    uuarr: "\u21C8",
    Uuml: "\xDC",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vangrt: "\u299C",
    varepsilon: "\u03F5",
    varkappa: "\u03F0",
    varnothing: "\u2205",
    varphi: "\u03D5",
    varpi: "\u03D6",
    varpropto: "\u221D",
    vArr: "\u21D5",
    varr: "\u2195",
    varrho: "\u03F1",
    varsigma: "\u03C2",
    varsubsetneq: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vartheta: "\u03D1",
    vartriangleleft: "\u22B2",
    vartriangleright: "\u22B3",
    Vbar: "\u2AEB",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    Vcy: "\u0412",
    vcy: "\u0432",
    VDash: "\u22AB",
    Vdash: "\u22A9",
    vDash: "\u22A8",
    vdash: "\u22A2",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    vee: "\u2228",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    Verbar: "\u2016",
    verbar: "|",
    Vert: "\u2016",
    vert: "|",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200A",
    Vfr: "\u{1D519}",
    vfr: "\u{1D533}",
    vltri: "\u22B2",
    vnsub: "\u2282\u20D2",
    vnsup: "\u2283\u20D2",
    Vopf: "\u{1D54D}",
    vopf: "\u{1D567}",
    vprop: "\u221D",
    vrtri: "\u22B3",
    Vscr: "\u{1D4B1}",
    vscr: "\u{1D4CB}",
    vsubnE: "\u2ACB\uFE00",
    vsubne: "\u228A\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vsupne: "\u228B\uFE00",
    Vvdash: "\u22AA",
    vzigzag: "\u299A",
    Wcirc: "\u0174",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    Wedge: "\u22C0",
    wedge: "\u2227",
    wedgeq: "\u2259",
    weierp: "\u2118",
    Wfr: "\u{1D51A}",
    wfr: "\u{1D534}",
    Wopf: "\u{1D54E}",
    wopf: "\u{1D568}",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    Wscr: "\u{1D4B2}",
    wscr: "\u{1D4CC}",
    xcap: "\u22C2",
    xcirc: "\u25EF",
    xcup: "\u22C3",
    xdtri: "\u25BD",
    Xfr: "\u{1D51B}",
    xfr: "\u{1D535}",
    xhArr: "\u27FA",
    xharr: "\u27F7",
    Xi: "\u039E",
    xi: "\u03BE",
    xlArr: "\u27F8",
    xlarr: "\u27F5",
    xmap: "\u27FC",
    xnis: "\u22FB",
    xodot: "\u2A00",
    Xopf: "\u{1D54F}",
    xopf: "\u{1D569}",
    xoplus: "\u2A01",
    xotime: "\u2A02",
    xrArr: "\u27F9",
    xrarr: "\u27F6",
    Xscr: "\u{1D4B3}",
    xscr: "\u{1D4CD}",
    xsqcup: "\u2A06",
    xuplus: "\u2A04",
    xutri: "\u25B3",
    xvee: "\u22C1",
    xwedge: "\u22C0",
    Yacute: "\xDD",
    yacute: "\xFD",
    YAcy: "\u042F",
    yacy: "\u044F",
    Ycirc: "\u0176",
    ycirc: "\u0177",
    Ycy: "\u042B",
    ycy: "\u044B",
    yen: "\xA5",
    Yfr: "\u{1D51C}",
    yfr: "\u{1D536}",
    YIcy: "\u0407",
    yicy: "\u0457",
    Yopf: "\u{1D550}",
    yopf: "\u{1D56A}",
    Yscr: "\u{1D4B4}",
    yscr: "\u{1D4CE}",
    YUcy: "\u042E",
    yucy: "\u044E",
    Yuml: "\u0178",
    yuml: "\xFF",
    Zacute: "\u0179",
    zacute: "\u017A",
    Zcaron: "\u017D",
    zcaron: "\u017E",
    Zcy: "\u0417",
    zcy: "\u0437",
    Zdot: "\u017B",
    zdot: "\u017C",
    zeetrf: "\u2128",
    ZeroWidthSpace: "\u200B",
    Zeta: "\u0396",
    zeta: "\u03B6",
    Zfr: "\u2128",
    zfr: "\u{1D537}",
    ZHcy: "\u0416",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    Zopf: "\u2124",
    zopf: "\u{1D56B}",
    Zscr: "\u{1D4B5}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C",
  });
  sn.entityMap = sn.HTML_ENTITIES;
});
var Rp = Et((ss) => {
  var dn = en().NAMESPACE,
    as =
      /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    kp = new RegExp(
      "[\\-\\.0-9" +
        as.source.slice(1, -1) +
        "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]",
    ),
    Ip = new RegExp(
      "^" + as.source + kp.source + "*(?::" + as.source + kp.source + "*)?$",
    ),
    un = 0,
    zt = 1,
    yr = 2,
    ln = 3,
    vr = 4,
    br = 5,
    cn = 6,
    Zi = 7;
  function wr(e, t) {
    ((this.message = e),
      (this.locator = t),
      Error.captureStackTrace && Error.captureStackTrace(this, wr));
  }
  wr.prototype = new Error();
  wr.prototype.name = wr.name;
  function zp() {}
  zp.prototype = {
    parse: function (e, t, n) {
      var i = this.domBuilder;
      (i.startDocument(),
        Np(t, (t = {})),
        fv(e, t, n, i, this.errorHandler),
        i.endDocument());
    },
  };
  function fv(e, t, n, i, r) {
    function o(G) {
      if (G > 65535) {
        G -= 65536;
        var K = 55296 + (G >> 10),
          ui = 56320 + (G & 1023);
        return String.fromCharCode(K, ui);
      } else return String.fromCharCode(G);
    }
    function a(G) {
      var K = G.slice(1, -1);
      return Object.hasOwnProperty.call(n, K)
        ? n[K]
        : K.charAt(0) === "#"
          ? o(parseInt(K.substr(1).replace("x", "0x")))
          : (r.error("entity not found:" + G), G);
    }
    function s(G) {
      if (G > m) {
        var K = e.substring(m, G).replace(/&#?\w+;/g, a);
        (f && u(m), i.characters(K, 0, G - m), (m = G));
      }
    }
    function u(G, K) {
      for (; G >= c && (K = d.exec(e)); )
        ((l = K.index), (c = l + K[0].length), f.lineNumber++);
      f.columnNumber = G - l + 1;
    }
    for (
      var l = 0,
        c = 0,
        d = /.*(?:\r\n?|\n)|.*$/g,
        f = i.locator,
        _ = [{ currentNSMap: t }],
        g = {},
        m = 0;
      ;
    ) {
      try {
        var A = e.indexOf("<", m);
        if (A < 0) {
          if (!e.substr(m).match(/^\s*$/)) {
            var D = i.doc,
              S = D.createTextNode(e.substr(m));
            (D.appendChild(S), (i.currentElement = S));
          }
          return;
        }
        switch ((A > m && s(A), e.charAt(A + 1))) {
          case "/":
            var M = e.indexOf(">", A + 3),
              v = e.substring(A + 2, M).replace(/[ \t\n\r]+$/g, ""),
              b = _.pop();
            M < 0
              ? ((v = e.substring(A + 2).replace(/[\s<].*/, "")),
                r.error("end tag name: " + v + " is not complete:" + b.tagName),
                (M = A + 1 + v.length))
              : v.match(/\s</) &&
                ((v = v.replace(/[\s<].*/, "")),
                r.error("end tag name: " + v + " maybe not complete"),
                (M = A + 1 + v.length));
            var T = b.localNSMap,
              C = b.tagName == v,
              I =
                C || (b.tagName && b.tagName.toLowerCase() == v.toLowerCase());
            if (I) {
              if ((i.endElement(b.uri, b.localName, v), T))
                for (var j in T)
                  Object.prototype.hasOwnProperty.call(T, j) &&
                    i.endPrefixMapping(j);
              C ||
                r.fatalError(
                  "end tag name: " +
                    v +
                    " is not match the current start tagName:" +
                    b.tagName,
                );
            } else _.push(b);
            M++;
            break;
          case "?":
            (f && u(A), (M = bv(e, A, i)));
            break;
          case "!":
            (f && u(A), (M = vv(e, A, i, r)));
            break;
          default:
            f && u(A);
            var F = new Op(),
              W = _[_.length - 1].currentNSMap,
              M = hv(e, A, F, W, a, r),
              oe = F.length;
            if (
              (!F.closed &&
                yv(e, M, F.tagName, g) &&
                ((F.closed = !0),
                n.nbsp || r.warning("unclosed xml attribute")),
              f && oe)
            ) {
              for (var te = $p(f, {}), ue = 0; ue < oe; ue++) {
                var Pe = F[ue];
                (u(Pe.offset), (Pe.locator = $p(f, {})));
              }
              ((i.locator = te), Pp(F, i, W) && _.push(F), (i.locator = f));
            } else Pp(F, i, W) && _.push(F);
            dn.isHTML(F.uri) && !F.closed
              ? (M = gv(e, M, F.tagName, a, i))
              : M++;
        }
      } catch (G) {
        if (G instanceof wr) throw G;
        (r.error("element parse error: " + G), (M = -1));
      }
      M > m ? (m = M) : s(Math.max(A, m) + 1);
    }
  }
  function $p(e, t) {
    return (
      (t.lineNumber = e.lineNumber),
      (t.columnNumber = e.columnNumber),
      t
    );
  }
  function hv(e, t, n, i, r, o) {
    function a(_, g, m) {
      (n.attributeNames.hasOwnProperty(_) &&
        o.fatalError("Attribute " + _ + " redefined"),
        n.addValue(_, g.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, r), m));
    }
    for (var s, u, l = ++t, c = un; ; ) {
      var d = e.charAt(l);
      switch (d) {
        case "=":
          if (c === zt) ((s = e.slice(t, l)), (c = ln));
          else if (c === yr) c = ln;
          else throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (c === ln || c === zt)
            if (
              (c === zt &&
                (o.warning('attribute value must after "="'),
                (s = e.slice(t, l))),
              (t = l + 1),
              (l = e.indexOf(d, t)),
              l > 0)
            )
              ((u = e.slice(t, l)), a(s, u, t - 1), (c = br));
            else throw new Error("attribute value no end '" + d + "' match");
          else if (c == vr)
            ((u = e.slice(t, l)),
              a(s, u, t),
              o.warning('attribute "' + s + '" missed start quot(' + d + ")!!"),
              (t = l + 1),
              (c = br));
          else throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (c) {
            case un:
              n.setTagName(e.slice(t, l));
            case br:
            case cn:
            case Zi:
              ((c = Zi), (n.closed = !0));
            case vr:
            case zt:
              break;
            case yr:
              n.closed = !0;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return (
            o.error("unexpected end of input"),
            c == un && n.setTagName(e.slice(t, l)),
            l
          );
        case ">":
          switch (c) {
            case un:
              n.setTagName(e.slice(t, l));
            case br:
            case cn:
            case Zi:
              break;
            case vr:
            case zt:
              ((u = e.slice(t, l)),
                u.slice(-1) === "/" && ((n.closed = !0), (u = u.slice(0, -1))));
            case yr:
              (c === yr && (u = s),
                c == vr
                  ? (o.warning('attribute "' + u + '" missed quot(")!'),
                    a(s, u, t))
                  : ((!dn.isHTML(i[""]) ||
                      !u.match(/^(?:disabled|checked|selected)$/i)) &&
                      o.warning(
                        'attribute "' +
                          u +
                          '" missed value!! "' +
                          u +
                          '" instead!!',
                      ),
                    a(u, u, t)));
              break;
            case ln:
              throw new Error("attribute value missed!!");
          }
          return l;
        case "\x80":
          d = " ";
        default:
          if (d <= " ")
            switch (c) {
              case un:
                (n.setTagName(e.slice(t, l)), (c = cn));
                break;
              case zt:
                ((s = e.slice(t, l)), (c = yr));
                break;
              case vr:
                var u = e.slice(t, l);
                (o.warning('attribute "' + u + '" missed quot(")!!'),
                  a(s, u, t));
              case br:
                c = cn;
                break;
            }
          else
            switch (c) {
              case yr:
                var f = n.tagName;
                ((!dn.isHTML(i[""]) ||
                  !s.match(/^(?:disabled|checked|selected)$/i)) &&
                  o.warning(
                    'attribute "' +
                      s +
                      '" missed value!! "' +
                      s +
                      '" instead2!!',
                  ),
                  a(s, s, t),
                  (t = l),
                  (c = zt));
                break;
              case br:
                o.warning('attribute space is required"' + s + '"!!');
              case cn:
                ((c = zt), (t = l));
                break;
              case ln:
                ((c = vr), (t = l));
                break;
              case Zi:
                throw new Error(
                  "elements closed character '/' and '>' must be connected to",
                );
            }
      }
      l++;
    }
  }
  function Pp(e, t, n) {
    for (var i = e.tagName, r = null, d = e.length; d--; ) {
      var o = e[d],
        a = o.qName,
        s = o.value,
        f = a.indexOf(":");
      if (f > 0)
        var u = (o.prefix = a.slice(0, f)),
          l = a.slice(f + 1),
          c = u === "xmlns" && l;
      else ((l = a), (u = null), (c = a === "xmlns" && ""));
      ((o.localName = l),
        c !== !1 &&
          (r == null && ((r = {}), Np(n, (n = {}))),
          (n[c] = r[c] = s),
          (o.uri = dn.XMLNS),
          t.startPrefixMapping(c, s)));
    }
    for (var d = e.length; d--; ) {
      o = e[d];
      var u = o.prefix;
      u &&
        (u === "xml" && (o.uri = dn.XML),
        u !== "xmlns" && (o.uri = n[u || ""]));
    }
    var f = i.indexOf(":");
    f > 0
      ? ((u = e.prefix = i.slice(0, f)), (l = e.localName = i.slice(f + 1)))
      : ((u = null), (l = e.localName = i));
    var _ = (e.uri = n[u || ""]);
    if ((t.startElement(_, l, i, e), e.closed)) {
      if ((t.endElement(_, l, i), r))
        for (u in r)
          Object.prototype.hasOwnProperty.call(r, u) && t.endPrefixMapping(u);
    } else return ((e.currentNSMap = n), (e.localNSMap = r), !0);
  }
  function gv(e, t, n, i, r) {
    if (/^(?:script|textarea)$/i.test(n)) {
      var o = e.indexOf("</" + n + ">", t),
        a = e.substring(t + 1, o);
      if (/[&<]/.test(a))
        return /^script$/i.test(n)
          ? (r.characters(a, 0, a.length), o)
          : ((a = a.replace(/&#?\w+;/g, i)), r.characters(a, 0, a.length), o);
    }
    return t + 1;
  }
  function yv(e, t, n, i) {
    var r = i[n];
    return (
      r == null &&
        ((r = e.lastIndexOf("</" + n + ">")),
        r < t && (r = e.lastIndexOf("</" + n)),
        (i[n] = r)),
      r < t
    );
  }
  function Np(e, t) {
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  }
  function vv(e, t, n, i) {
    var r = e.charAt(t + 2);
    switch (r) {
      case "-":
        if (e.charAt(t + 3) === "-") {
          var o = e.indexOf("-->", t + 4);
          return o > t
            ? (n.comment(e, t + 4, o - t - 4), o + 3)
            : (i.error("Unclosed comment"), -1);
        } else return -1;
      default:
        if (e.substr(t + 3, 6) == "CDATA[") {
          var o = e.indexOf("]]>", t + 9);
          return (
            n.startCDATA(),
            n.characters(e, t + 9, o - t - 9),
            n.endCDATA(),
            o + 3
          );
        }
        var a = wv(e, t),
          s = a.length;
        if (s > 1 && /!doctype/i.test(a[0][0])) {
          var u = a[1][0],
            l = !1,
            c = !1;
          s > 3 &&
            (/^public$/i.test(a[2][0])
              ? ((l = a[3][0]), (c = s > 4 && a[4][0]))
              : /^system$/i.test(a[2][0]) && (c = a[3][0]));
          var d = a[s - 1];
          return (n.startDTD(u, l, c), n.endDTD(), d.index + d[0].length);
        }
    }
    return -1;
  }
  function bv(e, t, n) {
    var i = e.indexOf("?>", t);
    if (i) {
      var r = e.substring(t, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      if (r) {
        var o = r[0].length;
        return (n.processingInstruction(r[1], r[2]), i + 2);
      } else return -1;
    }
    return -1;
  }
  function Op() {
    this.attributeNames = {};
  }
  Op.prototype = {
    setTagName: function (e) {
      if (!Ip.test(e)) throw new Error("invalid tagName:" + e);
      this.tagName = e;
    },
    addValue: function (e, t, n) {
      if (!Ip.test(e)) throw new Error("invalid attribute:" + e);
      ((this.attributeNames[e] = this.length),
        (this[this.length++] = { qName: e, value: t, offset: n }));
    },
    length: 0,
    getLocalName: function (e) {
      return this[e].localName;
    },
    getLocator: function (e) {
      return this[e].locator;
    },
    getQName: function (e) {
      return this[e].qName;
    },
    getURI: function (e) {
      return this[e].uri;
    },
    getValue: function (e) {
      return this[e].value;
    },
  };
  function wv(e, t) {
    var n,
      i = [],
      r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (r.lastIndex = t, r.exec(e); (n = r.exec(e)); )
      if ((i.push(n), n[1])) return i;
  }
  ss.XMLReader = zp;
  ss.ParseError = wr;
});
var Bp = Et((Wi) => {
  var Sv = en(),
    xv = os(),
    Cp = Tp(),
    jp = Rp(),
    Av = xv.DOMImplementation,
    Mp = Sv.NAMESPACE,
    Dv = jp.ParseError,
    Ev = jp.XMLReader;
  function Fp(e) {
    return e
      .replace(
        /\r[\n\u0085]/g,
        `
`,
      )
      .replace(
        /[\r\u0085\u2028]/g,
        `
`,
      );
  }
  function Lp(e) {
    this.options = e || { locator: {} };
  }
  Lp.prototype.parseFromString = function (e, t) {
    var n = this.options,
      i = new Ev(),
      r = n.domBuilder || new mn(),
      o = n.errorHandler,
      a = n.locator,
      s = n.xmlns || {},
      u = /\/x?html?$/.test(t),
      l = u ? Cp.HTML_ENTITIES : Cp.XML_ENTITIES;
    (a && r.setDocumentLocator(a),
      (i.errorHandler = Tv(o, r, a)),
      (i.domBuilder = n.domBuilder || r),
      u && (s[""] = Mp.HTML),
      (s.xml = s.xml || Mp.XML));
    var c = n.normalizeLineEndings || Fp;
    return (
      e && typeof e == "string"
        ? i.parse(c(e), s, l)
        : i.errorHandler.error("invalid doc source"),
      r.doc
    );
  };
  function Tv(e, t, n) {
    if (!e) {
      if (t instanceof mn) return t;
      e = t;
    }
    var i = {},
      r = e instanceof Function;
    n = n || {};
    function o(a) {
      var s = e[a];
      (!s &&
        r &&
        (s =
          e.length == 2
            ? function (u) {
                e(a, u);
              }
            : e),
        (i[a] =
          (s &&
            function (u) {
              s("[xmldom " + a + "]	" + u + us(n));
            }) ||
          function () {}));
    }
    return (o("warning"), o("error"), o("fatalError"), i);
  }
  function mn() {
    this.cdata = !1;
  }
  function Sr(e, t) {
    ((t.lineNumber = e.lineNumber), (t.columnNumber = e.columnNumber));
  }
  mn.prototype = {
    startDocument: function () {
      ((this.doc = new Av().createDocument(null, null, null)),
        this.locator && (this.doc.documentURI = this.locator.systemId));
    },
    startElement: function (e, t, n, i) {
      var r = this.doc,
        o = r.createElementNS(e, n || t),
        a = i.length;
      (Gi(this, o),
        (this.currentElement = o),
        this.locator && Sr(this.locator, o));
      for (var s = 0; s < a; s++) {
        var e = i.getURI(s),
          u = i.getValue(s),
          n = i.getQName(s),
          l = r.createAttributeNS(e, n);
        (this.locator && Sr(i.getLocator(s), l),
          (l.value = l.nodeValue = u),
          o.setAttributeNode(l));
      }
    },
    endElement: function (e, t, n) {
      var i = this.currentElement,
        r = i.tagName;
      this.currentElement = i.parentNode;
    },
    startPrefixMapping: function (e, t) {},
    endPrefixMapping: function (e) {},
    processingInstruction: function (e, t) {
      var n = this.doc.createProcessingInstruction(e, t);
      (this.locator && Sr(this.locator, n), Gi(this, n));
    },
    ignorableWhitespace: function (e, t, n) {},
    characters: function (e, t, n) {
      if (((e = Up.apply(this, arguments)), e)) {
        if (this.cdata) var i = this.doc.createCDATASection(e);
        else var i = this.doc.createTextNode(e);
        (this.currentElement
          ? this.currentElement.appendChild(i)
          : /^\s*$/.test(e) && this.doc.appendChild(i),
          this.locator && Sr(this.locator, i));
      }
    },
    skippedEntity: function (e) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (e) {
      (this.locator = e) && (e.lineNumber = 0);
    },
    comment: function (e, t, n) {
      e = Up.apply(this, arguments);
      var i = this.doc.createComment(e);
      (this.locator && Sr(this.locator, i), Gi(this, i));
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (e, t, n) {
      var i = this.doc.implementation;
      if (i && i.createDocumentType) {
        var r = i.createDocumentType(e, t, n);
        (this.locator && Sr(this.locator, r),
          Gi(this, r),
          (this.doc.doctype = r));
      }
    },
    warning: function (e) {
      console.warn("[xmldom warning]	" + e, us(this.locator));
    },
    error: function (e) {
      console.error("[xmldom error]	" + e, us(this.locator));
    },
    fatalError: function (e) {
      throw new Dv(e, this.locator);
    },
  };
  function us(e) {
    if (e)
      return (
        `
@` +
        (e.systemId || "") +
        "#[line:" +
        e.lineNumber +
        ",col:" +
        e.columnNumber +
        "]"
      );
  }
  function Up(e, t, n) {
    return typeof e == "string"
      ? e.substr(t, n)
      : e.length >= t + n || t
        ? new java.lang.String(e, t, n) + ""
        : e;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
    /\w+/g,
    function (e) {
      mn.prototype[e] = function () {
        return null;
      };
    },
  );
  function Gi(e, t) {
    e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
  }
  Wi.__DOMHandler = mn;
  Wi.normalizeLineEndings = Fp;
  Wi.DOMParser = Lp;
});
var qp = Et((Qi) => {
  var Vp = os();
  Qi.DOMImplementation = Vp.DOMImplementation;
  Qi.XMLSerializer = Vp.XMLSerializer;
  Qi.DOMParser = Bp().DOMParser;
});
var tr,
  ud,
  na,
  rr,
  ti,
  ia = at(() => {
    ((tr = {
      JS_EVAL_TYPE_GLOBAL: 0,
      JS_EVAL_TYPE_MODULE: 1,
      JS_EVAL_TYPE_DIRECT: 2,
      JS_EVAL_TYPE_INDIRECT: 3,
      JS_EVAL_TYPE_MASK: 3,
      JS_EVAL_FLAG_STRICT: 8,
      JS_EVAL_FLAG_STRIP: 16,
      JS_EVAL_FLAG_COMPILE_ONLY: 32,
      JS_EVAL_FLAG_BACKTRACE_BARRIER: 64,
    }),
      (ud = {
        BaseObjects: 1,
        Date: 2,
        Eval: 4,
        StringNormalize: 8,
        RegExp: 16,
        RegExpCompiler: 32,
        JSON: 64,
        Proxy: 128,
        MapSet: 256,
        TypedArrays: 512,
        Promise: 1024,
        BigInt: 2048,
        BigFloat: 4096,
        BigDecimal: 8192,
        OperatorOverloading: 16384,
        BignumExt: 32768,
      }),
      (na = { Pending: 0, Fulfilled: 1, Rejected: 2 }),
      (rr = {
        JS_GPN_STRING_MASK: 1,
        JS_GPN_SYMBOL_MASK: 2,
        JS_GPN_PRIVATE_MASK: 4,
        JS_GPN_ENUM_ONLY: 16,
        JS_GPN_SET_ENUM: 32,
        QTS_GPN_NUMBER_MASK: 64,
        QTS_STANDARD_COMPLIANT_NUMBER: 128,
      }),
      (ti = { IsStrictlyEqual: 0, IsSameValue: 1, IsSameValueZero: 2 }));
  });
function ri(...e) {
  pd && console.log("quickjs-emscripten:", ...e);
}
function* Zh(e) {
  return yield e;
}
function H2(e) {
  return Zh(fd(e));
}
function Ch(e, t) {
  return (...n) => {
    let i = t.call(e, _d, ...n);
    return fd(i);
  };
}
function Z2(e, t) {
  let n = t.call(e, _d);
  return fd(n);
}
function fd(e) {
  function t(n) {
    return n.done
      ? n.value
      : n.value instanceof Promise
        ? n.value.then(
            (i) => t(e.next(i)),
            (i) => t(e.throw(i)),
          )
        : t(e.next(n.value));
  }
  return t(e.next());
}
function ld(e, t) {
  let n;
  try {
    e.dispose();
  } catch (i) {
    n = i;
  }
  if (t && n)
    throw (
      Object.assign(t, {
        message: `${t.message}
 Then, failed to dispose scope: ${n.message}`,
        disposeError: n,
      }),
      t
    );
  if (t || n) throw t || n;
}
function G2(e) {
  let t = e ? Array.from(e) : [];
  function n() {
    return t.forEach((r) => (r.alive ? r.dispose() : void 0));
  }
  function i() {
    return t.some((r) => r.alive);
  }
  return (
    Object.defineProperty(t, md, {
      configurable: !0,
      enumerable: !1,
      value: n,
    }),
    Object.defineProperty(t, "dispose", {
      configurable: !0,
      enumerable: !1,
      value: n,
    }),
    Object.defineProperty(t, "alive", {
      configurable: !0,
      enumerable: !1,
      get: i,
    }),
    t
  );
}
function aa(e) {
  return !!(
    e &&
    (typeof e == "object" || typeof e == "function") &&
    "alive" in e &&
    typeof e.alive == "boolean" &&
    "dispose" in e &&
    typeof e.dispose == "function"
  );
}
function K2(e) {
  if (!e) return 0;
  let t = 0;
  for (let [n, i] of Object.entries(e)) {
    if (!(n in ud)) throw new Vh(n);
    i && (t |= ud[n]);
  }
  return t;
}
function X2(e) {
  if (typeof e == "number") return e;
  if (e === void 0) return 0;
  let { type: t, strict: n, strip: i, compileOnly: r, backtraceBarrier: o } = e,
    a = 0;
  return (
    t === "global" && (a |= tr.JS_EVAL_TYPE_GLOBAL),
    t === "module" && (a |= tr.JS_EVAL_TYPE_MODULE),
    n && (a |= tr.JS_EVAL_FLAG_STRICT),
    i && (a |= tr.JS_EVAL_FLAG_STRIP),
    r && (a |= tr.JS_EVAL_FLAG_COMPILE_ONLY),
    o && (a |= tr.JS_EVAL_FLAG_BACKTRACE_BARRIER),
    a
  );
}
function Y2(e) {
  if (typeof e == "number") return e;
  if (e === void 0) return 0;
  let {
      strings: t,
      symbols: n,
      quickjsPrivate: i,
      onlyEnumerable: r,
      numbers: o,
      numbersAsStrings: a,
    } = e,
    s = 0;
  return (
    t && (s |= rr.JS_GPN_STRING_MASK),
    n && (s |= rr.JS_GPN_SYMBOL_MASK),
    i && (s |= rr.JS_GPN_PRIVATE_MASK),
    r && (s |= rr.JS_GPN_ENUM_ONLY),
    o && (s |= rr.QTS_GPN_NUMBER_MASK),
    a && (s |= rr.QTS_STANDARD_COMPLIANT_NUMBER),
    s
  );
}
function ex(...e) {
  let t = [];
  for (let n of e) n !== void 0 && (t = t.concat(n));
  return t;
}
function yd(e, t) {
  (t.interruptHandler && e.setInterruptHandler(t.interruptHandler),
    t.maxStackSizeBytes !== void 0 && e.setMaxStackSize(t.maxStackSizeBytes),
    t.memoryLimitBytes !== void 0 && e.setMemoryLimit(t.memoryLimitBytes));
}
function vd(e, t) {
  (t.moduleLoader && e.setModuleLoader(t.moduleLoader),
    t.shouldInterrupt && e.setInterruptHandler(t.shouldInterrupt),
    t.memoryLimitBytes !== void 0 && e.setMemoryLimit(t.memoryLimitBytes),
    t.maxStackSizeBytes !== void 0 && e.setMaxStackSize(t.maxStackSizeBytes));
}
var F2,
  L2,
  pd,
  B2,
  cd,
  jh,
  dd,
  Fh,
  Lh,
  Bh,
  V2,
  q2,
  Vh,
  qh,
  Hh,
  _d,
  Mt,
  md,
  Mh,
  $e,
  nr,
  Uh,
  nt,
  hd,
  W2,
  Q2,
  Ur,
  J2,
  Qh,
  hI,
  gI,
  tx,
  rx,
  nx,
  ix,
  ox,
  gd,
  Jh,
  Kh = at(() => {
    ia();
    ia();
    ((F2 = Object.defineProperty),
      (L2 = (e, t) => {
        for (var n in t) F2(e, n, { get: t[n], enumerable: !0 });
      }),
      (pd = !1));
    B2 = {};
    L2(B2, {
      QuickJSAsyncifyError: () => Lh,
      QuickJSAsyncifySuspended: () => Bh,
      QuickJSEmptyGetOwnPropertyNames: () => Hh,
      QuickJSEmscriptenModuleError: () => q2,
      QuickJSMemoryLeakDetected: () => V2,
      QuickJSNotImplemented: () => Fh,
      QuickJSPromisePending: () => qh,
      QuickJSUnknownIntrinsic: () => Vh,
      QuickJSUnwrapError: () => cd,
      QuickJSUseAfterFree: () => dd,
      QuickJSWrongOwner: () => jh,
    });
    ((cd = class extends Error {
      constructor(e, t) {
        let n =
          typeof e == "object" && e && "message" in e
            ? String(e.message)
            : String(e);
        (super(n),
          (this.cause = e),
          (this.context = t),
          (this.name = "QuickJSUnwrapError"));
      }
    }),
      (jh = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSWrongOwner"));
        }
      }),
      (dd = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSUseAfterFree"));
        }
      }),
      (Fh = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSNotImplemented"));
        }
      }),
      (Lh = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSAsyncifyError"));
        }
      }),
      (Bh = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSAsyncifySuspended"));
        }
      }),
      (V2 = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSMemoryLeakDetected"));
        }
      }),
      (q2 = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSEmscriptenModuleError"));
        }
      }),
      (Vh = class extends TypeError {
        constructor() {
          (super(...arguments), (this.name = "QuickJSUnknownIntrinsic"));
        }
      }),
      (qh = class extends Error {
        constructor() {
          (super(...arguments), (this.name = "QuickJSPromisePending"));
        }
      }),
      (Hh = class extends Error {
        constructor() {
          (super(...arguments),
            (this.name = "QuickJSEmptyGetOwnPropertyNames"));
        }
      }));
    _d = Zh;
    _d.of = H2;
    ((Mt = class {
      [Symbol.dispose]() {
        return this.dispose();
      }
    }),
      (md = Symbol.dispose ?? Symbol.for("Symbol.dispose")),
      (Mh = Mt.prototype));
    Mh[md] ||
      (Mh[md] = function () {
        return this.dispose();
      });
    (($e = class Gh extends Mt {
      constructor(t, n, i, r) {
        (super(),
          (this._value = t),
          (this.copier = n),
          (this.disposer = i),
          (this._owner = r),
          (this._alive = !0),
          (this._constructorStack = pd
            ? new Error("Lifetime constructed").stack
            : void 0));
      }
      get alive() {
        return this._alive;
      }
      get value() {
        return (this.assertAlive(), this._value);
      }
      get owner() {
        return this._owner;
      }
      get dupable() {
        return !!this.copier;
      }
      dup() {
        if ((this.assertAlive(), !this.copier))
          throw new Error("Non-dupable lifetime");
        return new Gh(
          this.copier(this._value),
          this.copier,
          this.disposer,
          this._owner,
        );
      }
      consume(t) {
        this.assertAlive();
        let n = t(this);
        return (this.dispose(), n);
      }
      map(t) {
        return (this.assertAlive(), t(this));
      }
      tap(t) {
        return (t(this), this);
      }
      dispose() {
        (this.assertAlive(),
          this.disposer && this.disposer(this._value),
          (this._alive = !1));
      }
      assertAlive() {
        if (!this.alive)
          throw this._constructorStack
            ? new dd(`Lifetime not alive
${this._constructorStack}
Lifetime used`)
            : new dd("Lifetime not alive");
      }
    }),
      (nr = class extends $e {
        constructor(e, t) {
          super(e, void 0, void 0, t);
        }
        get dupable() {
          return !0;
        }
        dup() {
          return this;
        }
        dispose() {}
      }),
      (Uh = class extends $e {
        constructor(e, t, n, i) {
          super(e, t, n, i);
        }
        dispose() {
          this._alive = !1;
        }
      }));
    nt = class oa extends Mt {
      constructor() {
        (super(...arguments),
          (this._disposables = new $e(new Set())),
          (this.manage = (t) => (this._disposables.value.add(t), t)));
      }
      static withScope(t) {
        let n = new oa(),
          i;
        try {
          return t(n);
        } catch (r) {
          throw ((i = r), r);
        } finally {
          ld(n, i);
        }
      }
      static withScopeMaybeAsync(t, n) {
        return Z2(void 0, function* (i) {
          let r = new oa(),
            o;
          try {
            return yield* i.of(n.call(t, i, r));
          } catch (a) {
            throw ((o = a), a);
          } finally {
            ld(r, o);
          }
        });
      }
      static async withScopeAsync(t) {
        let n = new oa(),
          i;
        try {
          return await t(n);
        } catch (r) {
          throw ((i = r), r);
        } finally {
          ld(n, i);
        }
      }
      get alive() {
        return this._disposables.alive;
      }
      dispose() {
        let t = Array.from(this._disposables.value.values()).reverse();
        for (let n of t) n.alive && n.dispose();
        this._disposables.dispose();
      }
    };
    ((hd = class Wh extends Mt {
      static success(t) {
        return new W2(t);
      }
      static fail(t, n) {
        return new Q2(t, n);
      }
      static is(t) {
        return t instanceof Wh;
      }
    }),
      (W2 = class extends hd {
        constructor(e) {
          (super(), (this.value = e));
        }
        get alive() {
          return aa(this.value) ? this.value.alive : !0;
        }
        dispose() {
          aa(this.value) && this.value.dispose();
        }
        unwrap() {
          return this.value;
        }
        unwrapOr(e) {
          return this.value;
        }
      }),
      (Q2 = class extends hd {
        constructor(e, t) {
          (super(), (this.error = e), (this.onUnwrap = t));
        }
        get alive() {
          return aa(this.error) ? this.error.alive : !0;
        }
        dispose() {
          aa(this.error) && this.error.dispose();
        }
        unwrap() {
          throw (this.onUnwrap(this), this.error);
        }
        unwrapOr(e) {
          return e;
        }
      }),
      (Ur = hd),
      (J2 = class extends Mt {
        constructor(e) {
          (super(),
            (this.resolve = (t) => {
              this.resolveHandle.alive &&
                (this.context
                  .unwrapResult(
                    this.context.callFunction(
                      this.resolveHandle,
                      this.context.undefined,
                      t || this.context.undefined,
                    ),
                  )
                  .dispose(),
                this.disposeResolvers(),
                this.onSettled());
            }),
            (this.reject = (t) => {
              this.rejectHandle.alive &&
                (this.context
                  .unwrapResult(
                    this.context.callFunction(
                      this.rejectHandle,
                      this.context.undefined,
                      t || this.context.undefined,
                    ),
                  )
                  .dispose(),
                this.disposeResolvers(),
                this.onSettled());
            }),
            (this.dispose = () => {
              (this.handle.alive && this.handle.dispose(),
                this.disposeResolvers());
            }),
            (this.context = e.context),
            (this.owner = e.context.runtime),
            (this.handle = e.promiseHandle),
            (this.settled = new Promise((t) => {
              this.onSettled = t;
            })),
            (this.resolveHandle = e.resolveHandle),
            (this.rejectHandle = e.rejectHandle));
        }
        get alive() {
          return (
            this.handle.alive ||
            this.resolveHandle.alive ||
            this.rejectHandle.alive
          );
        }
        disposeResolvers() {
          (this.resolveHandle.alive && this.resolveHandle.dispose(),
            this.rejectHandle.alive && this.rejectHandle.dispose());
        }
      }),
      (Qh = class {
        constructor(e) {
          this.module = e;
        }
        toPointerArray(e) {
          let t = new Int32Array(e.map((r) => r.value)),
            n = t.length * t.BYTES_PER_ELEMENT,
            i = this.module._malloc(n);
          return (
            new Uint8Array(this.module.HEAPU8.buffer, i, n).set(
              new Uint8Array(t.buffer),
            ),
            new $e(i, void 0, (r) => this.module._free(r))
          );
        }
        newTypedArray(e, t) {
          let n = new e(new Array(t).fill(0)),
            i = n.length * n.BYTES_PER_ELEMENT,
            r = this.module._malloc(i),
            o = new e(this.module.HEAPU8.buffer, r, t);
          return (
            o.set(n),
            new $e({ typedArray: o, ptr: r }, void 0, (a) =>
              this.module._free(a.ptr),
            )
          );
        }
        newMutablePointerArray(e) {
          return this.newTypedArray(Int32Array, e);
        }
        newHeapCharPointer(e) {
          let t = this.module.lengthBytesUTF8(e),
            n = t + 1,
            i = this.module._malloc(n);
          return (
            this.module.stringToUTF8(e, i, n),
            new $e({ ptr: i, strlen: t }, void 0, (r) =>
              this.module._free(r.ptr),
            )
          );
        }
        newHeapBufferPointer(e) {
          let t = e.byteLength,
            n = this.module._malloc(t);
          return (
            this.module.HEAPU8.set(e, n),
            new $e({ pointer: n, numBytes: t }, void 0, (i) =>
              this.module._free(i.pointer),
            )
          );
        }
        consumeHeapCharPointer(e) {
          let t = this.module.UTF8ToString(e);
          return (this.module._free(e), t);
        }
      }),
      (hI = Symbol("Unstable")),
      (gI = Object.freeze({
        BaseObjects: !0,
        Date: !0,
        Eval: !0,
        StringNormalize: !0,
        RegExp: !0,
        JSON: !0,
        Proxy: !0,
        MapSet: !0,
        TypedArrays: !0,
        Promise: !0,
      })));
    ((tx = class extends Mt {
      constructor(e, t) {
        (super(),
          (this.handle = e),
          (this.context = t),
          (this._isDone = !1),
          (this.owner = t.runtime));
      }
      [Symbol.iterator]() {
        return this;
      }
      next(e) {
        if (!this.alive || this._isDone) return { done: !0, value: void 0 };
        let t =
          this._next ??
          (this._next = this.context.getProp(this.handle, "next"));
        return this.callIteratorMethod(t, e);
      }
      return(e) {
        if (!this.alive) return { done: !0, value: void 0 };
        let t = this.context.getProp(this.handle, "return");
        if (t === this.context.undefined && e === void 0)
          return (this.dispose(), { done: !0, value: void 0 });
        let n = this.callIteratorMethod(t, e);
        return (t.dispose(), this.dispose(), n);
      }
      throw(e) {
        if (!this.alive) return { done: !0, value: void 0 };
        let t = e instanceof $e ? e : this.context.newError(e),
          n = this.context.getProp(this.handle, "throw"),
          i = this.callIteratorMethod(n, e);
        return (t.alive && t.dispose(), n.dispose(), this.dispose(), i);
      }
      get alive() {
        return this.handle.alive;
      }
      dispose() {
        ((this._isDone = !0), this.handle.dispose(), this._next?.dispose());
      }
      callIteratorMethod(e, t) {
        let n = t
          ? this.context.callFunction(e, this.handle, t)
          : this.context.callFunction(e, this.handle);
        if (n.error) return (this.dispose(), { value: n });
        let i = this.context
          .getProp(n.value, "done")
          .consume((o) => this.context.dump(o));
        if (i)
          return (
            n.value.dispose(),
            this.dispose(),
            { done: i, value: void 0 }
          );
        let r = this.context.getProp(n.value, "value");
        return (n.value.dispose(), { value: Ur.success(r), done: i });
      }
    }),
      (rx = class extends Qh {
        constructor(e) {
          (super(e.module),
            (this.scope = new nt()),
            (this.copyJSValue = (t) =>
              this.ffi.QTS_DupValuePointer(this.ctx.value, t)),
            (this.freeJSValue = (t) => {
              this.ffi.QTS_FreeValuePointer(this.ctx.value, t);
            }),
            e.ownedLifetimes?.forEach((t) => this.scope.manage(t)),
            (this.owner = e.owner),
            (this.module = e.module),
            (this.ffi = e.ffi),
            (this.rt = e.rt),
            (this.ctx = this.scope.manage(e.ctx)));
        }
        get alive() {
          return this.scope.alive;
        }
        dispose() {
          return this.scope.dispose();
        }
        [Symbol.dispose]() {
          return this.dispose();
        }
        manage(e) {
          return this.scope.manage(e);
        }
        consumeJSCharPointer(e) {
          let t = this.module.UTF8ToString(e);
          return (this.ffi.QTS_FreeCString(this.ctx.value, e), t);
        }
        heapValueHandle(e) {
          return new $e(e, this.copyJSValue, this.freeJSValue, this.owner);
        }
        staticHeapValueHandle(e) {
          return (this.manage(this.heapValueHandle(e)), new nr(e, this.owner));
        }
      }),
      (nx = class extends Mt {
        constructor(e) {
          (super(),
            (this._undefined = void 0),
            (this._null = void 0),
            (this._false = void 0),
            (this._true = void 0),
            (this._global = void 0),
            (this._BigInt = void 0),
            (this._Symbol = void 0),
            (this._SymbolIterator = void 0),
            (this._SymbolAsyncIterator = void 0),
            (this.fnNextId = -32768),
            (this.fnMaps = new Map()),
            (this.cToHostCallbacks = {
              callFunction: (t, n, i, r, o) => {
                if (t !== this.ctx.value)
                  throw new Error(
                    "QuickJSContext instance received C -> JS call with mismatched ctx",
                  );
                let a = this.getFunction(o);
                if (!a)
                  throw new Error(
                    `QuickJSContext had no callback with id ${o}`,
                  );
                return nt.withScopeMaybeAsync(this, function* (s, u) {
                  let l = u.manage(
                      new Uh(
                        n,
                        this.memory.copyJSValue,
                        this.memory.freeJSValue,
                        this.runtime,
                      ),
                    ),
                    c = new Array(i);
                  for (let d = 0; d < i; d++) {
                    let f = this.ffi.QTS_ArgvGetJSValueConstPointer(r, d);
                    c[d] = u.manage(
                      new Uh(
                        f,
                        this.memory.copyJSValue,
                        this.memory.freeJSValue,
                        this.runtime,
                      ),
                    );
                  }
                  try {
                    let d = yield* s(a.apply(l, c));
                    if (d) {
                      if ("error" in d && d.error)
                        throw (
                          this.runtime.debugLog("throw error", d.error),
                          d.error
                        );
                      let f = u.manage(d instanceof $e ? d : d.value);
                      return this.ffi.QTS_DupValuePointer(
                        this.ctx.value,
                        f.value,
                      );
                    }
                    return 0;
                  } catch (d) {
                    return this.errorToHandle(d).consume((f) =>
                      this.ffi.QTS_Throw(this.ctx.value, f.value),
                    );
                  }
                });
              },
            }),
            (this.runtime = e.runtime),
            (this.module = e.module),
            (this.ffi = e.ffi),
            (this.rt = e.rt),
            (this.ctx = e.ctx),
            (this.memory = new rx({ ...e, owner: this.runtime })),
            e.callbacks.setContextCallbacks(
              this.ctx.value,
              this.cToHostCallbacks,
            ),
            (this.dump = this.dump.bind(this)),
            (this.getString = this.getString.bind(this)),
            (this.getNumber = this.getNumber.bind(this)),
            (this.resolvePromise = this.resolvePromise.bind(this)),
            (this.uint32Out = this.memory.manage(
              this.memory.newTypedArray(Uint32Array, 1),
            )));
        }
        get alive() {
          return this.memory.alive;
        }
        dispose() {
          this.memory.dispose();
        }
        get undefined() {
          if (this._undefined) return this._undefined;
          let e = this.ffi.QTS_GetUndefined();
          return (this._undefined = new nr(e));
        }
        get null() {
          if (this._null) return this._null;
          let e = this.ffi.QTS_GetNull();
          return (this._null = new nr(e));
        }
        get true() {
          if (this._true) return this._true;
          let e = this.ffi.QTS_GetTrue();
          return (this._true = new nr(e));
        }
        get false() {
          if (this._false) return this._false;
          let e = this.ffi.QTS_GetFalse();
          return (this._false = new nr(e));
        }
        get global() {
          if (this._global) return this._global;
          let e = this.ffi.QTS_GetGlobalObject(this.ctx.value);
          return (
            (this._global = this.memory.staticHeapValueHandle(e)),
            this._global
          );
        }
        newNumber(e) {
          return this.memory.heapValueHandle(
            this.ffi.QTS_NewFloat64(this.ctx.value, e),
          );
        }
        newString(e) {
          let t = this.memory
            .newHeapCharPointer(e)
            .consume((n) =>
              this.ffi.QTS_NewString(this.ctx.value, n.value.ptr),
            );
          return this.memory.heapValueHandle(t);
        }
        newUniqueSymbol(e) {
          let t = (typeof e == "symbol" ? e.description : e) ?? "",
            n = this.memory
              .newHeapCharPointer(t)
              .consume((i) =>
                this.ffi.QTS_NewSymbol(this.ctx.value, i.value.ptr, 0),
              );
          return this.memory.heapValueHandle(n);
        }
        newSymbolFor(e) {
          let t = (typeof e == "symbol" ? e.description : e) ?? "",
            n = this.memory
              .newHeapCharPointer(t)
              .consume((i) =>
                this.ffi.QTS_NewSymbol(this.ctx.value, i.value.ptr, 1),
              );
          return this.memory.heapValueHandle(n);
        }
        getWellKnownSymbol(e) {
          return (
            this._Symbol ??
              (this._Symbol = this.memory.manage(
                this.getProp(this.global, "Symbol"),
              )),
            this.getProp(this._Symbol, e)
          );
        }
        newBigInt(e) {
          if (!this._BigInt) {
            let i = this.getProp(this.global, "BigInt");
            (this.memory.manage(i),
              (this._BigInt = new nr(i.value, this.runtime)));
          }
          let t = this._BigInt,
            n = String(e);
          return this.newString(n).consume((i) =>
            this.unwrapResult(this.callFunction(t, this.undefined, i)),
          );
        }
        newObject(e) {
          e && this.runtime.assertOwned(e);
          let t = e
            ? this.ffi.QTS_NewObjectProto(this.ctx.value, e.value)
            : this.ffi.QTS_NewObject(this.ctx.value);
          return this.memory.heapValueHandle(t);
        }
        newArray() {
          let e = this.ffi.QTS_NewArray(this.ctx.value);
          return this.memory.heapValueHandle(e);
        }
        newArrayBuffer(e) {
          let t = new Uint8Array(e),
            n = this.memory.newHeapBufferPointer(t),
            i = this.ffi.QTS_NewArrayBuffer(
              this.ctx.value,
              n.value.pointer,
              t.length,
            );
          return this.memory.heapValueHandle(i);
        }
        newPromise(e) {
          let t = nt.withScope((n) => {
            let i = n.manage(this.memory.newMutablePointerArray(2)),
              r = this.ffi.QTS_NewPromiseCapability(
                this.ctx.value,
                i.value.ptr,
              ),
              o = this.memory.heapValueHandle(r),
              [a, s] = Array.from(i.value.typedArray).map((u) =>
                this.memory.heapValueHandle(u),
              );
            return new J2({
              context: this,
              promiseHandle: o,
              resolveHandle: a,
              rejectHandle: s,
            });
          });
          return (
            e && typeof e == "function" && (e = new Promise(e)),
            e &&
              Promise.resolve(e).then(t.resolve, (n) =>
                n instanceof $e
                  ? t.reject(n)
                  : this.newError(n).consume(t.reject),
              ),
            t
          );
        }
        newFunction(e, t) {
          let n = ++this.fnNextId;
          return (
            this.setFunction(n, t),
            this.memory.heapValueHandle(
              this.ffi.QTS_NewFunction(this.ctx.value, n, e),
            )
          );
        }
        newError(e) {
          let t = this.memory.heapValueHandle(
            this.ffi.QTS_NewError(this.ctx.value),
          );
          return (
            e && typeof e == "object"
              ? (e.name !== void 0 &&
                  this.newString(e.name).consume((n) =>
                    this.setProp(t, "name", n),
                  ),
                e.message !== void 0 &&
                  this.newString(e.message).consume((n) =>
                    this.setProp(t, "message", n),
                  ))
              : typeof e == "string"
                ? this.newString(e).consume((n) =>
                    this.setProp(t, "message", n),
                  )
                : e !== void 0 &&
                  this.newString(String(e)).consume((n) =>
                    this.setProp(t, "message", n),
                  ),
            t
          );
        }
        typeof(e) {
          return (
            this.runtime.assertOwned(e),
            this.memory.consumeHeapCharPointer(
              this.ffi.QTS_Typeof(this.ctx.value, e.value),
            )
          );
        }
        getNumber(e) {
          return (
            this.runtime.assertOwned(e),
            this.ffi.QTS_GetFloat64(this.ctx.value, e.value)
          );
        }
        getString(e) {
          return (
            this.runtime.assertOwned(e),
            this.memory.consumeJSCharPointer(
              this.ffi.QTS_GetString(this.ctx.value, e.value),
            )
          );
        }
        getSymbol(e) {
          this.runtime.assertOwned(e);
          let t = this.memory.consumeJSCharPointer(
            this.ffi.QTS_GetSymbolDescriptionOrKey(this.ctx.value, e.value),
          );
          return this.ffi.QTS_IsGlobalSymbol(this.ctx.value, e.value)
            ? Symbol.for(t)
            : Symbol(t);
        }
        getBigInt(e) {
          this.runtime.assertOwned(e);
          let t = this.getString(e);
          return BigInt(t);
        }
        getArrayBuffer(e) {
          this.runtime.assertOwned(e);
          let t = this.ffi.QTS_GetArrayBufferLength(this.ctx.value, e.value),
            n = this.ffi.QTS_GetArrayBuffer(this.ctx.value, e.value);
          if (!n)
            throw new Error("Couldn't allocate memory to get ArrayBuffer");
          return new $e(this.module.HEAPU8.subarray(n, n + t), void 0, () =>
            this.module._free(n),
          );
        }
        getPromiseState(e) {
          this.runtime.assertOwned(e);
          let t = this.ffi.QTS_PromiseState(this.ctx.value, e.value);
          if (t < 0) return { type: "fulfilled", value: e, notAPromise: !0 };
          if (t === na.Pending)
            return {
              type: "pending",
              get error() {
                return new qh("Cannot unwrap a pending promise");
              },
            };
          let n = this.ffi.QTS_PromiseResult(this.ctx.value, e.value),
            i = this.memory.heapValueHandle(n);
          if (t === na.Fulfilled) return { type: "fulfilled", value: i };
          if (t === na.Rejected) return { type: "rejected", error: i };
          throw (i.dispose(), new Error(`Unknown JSPromiseStateEnum: ${t}`));
        }
        resolvePromise(e) {
          this.runtime.assertOwned(e);
          let t = nt.withScope((n) => {
            let i = n.manage(this.getProp(this.global, "Promise")),
              r = n.manage(this.getProp(i, "resolve"));
            return this.callFunction(r, i, e);
          });
          return t.error
            ? Promise.resolve(t)
            : new Promise((n) => {
                nt.withScope((i) => {
                  let r = i.manage(
                      this.newFunction("resolve", (u) => {
                        n(this.success(u && u.dup()));
                      }),
                    ),
                    o = i.manage(
                      this.newFunction("reject", (u) => {
                        n(this.fail(u && u.dup()));
                      }),
                    ),
                    a = i.manage(t.value),
                    s = i.manage(this.getProp(a, "then"));
                  this.callFunction(s, a, r, o).unwrap().dispose();
                });
              });
        }
        isEqual(e, t, n = ti.IsStrictlyEqual) {
          if (e === t) return !0;
          (this.runtime.assertOwned(e), this.runtime.assertOwned(t));
          let i = this.ffi.QTS_IsEqual(this.ctx.value, e.value, t.value, n);
          if (i === -1) throw new Fh("WASM variant does not expose equality");
          return !!i;
        }
        eq(e, t) {
          return this.isEqual(e, t, ti.IsStrictlyEqual);
        }
        sameValue(e, t) {
          return this.isEqual(e, t, ti.IsSameValue);
        }
        sameValueZero(e, t) {
          return this.isEqual(e, t, ti.IsSameValueZero);
        }
        getProp(e, t) {
          this.runtime.assertOwned(e);
          let n;
          return (
            typeof t == "number" && t >= 0
              ? (n = this.ffi.QTS_GetPropNumber(this.ctx.value, e.value, t))
              : (n = this.borrowPropertyKey(t).consume((i) =>
                  this.ffi.QTS_GetProp(this.ctx.value, e.value, i.value),
                )),
            this.memory.heapValueHandle(n)
          );
        }
        getLength(e) {
          if (
            (this.runtime.assertOwned(e),
            !(
              this.ffi.QTS_GetLength(
                this.ctx.value,
                this.uint32Out.value.ptr,
                e.value,
              ) < 0
            ))
          )
            return this.uint32Out.value.typedArray[0];
        }
        getOwnPropertyNames(e, t = { strings: !0, numbersAsStrings: !0 }) {
          (this.runtime.assertOwned(e), e.value);
          let n = Y2(t);
          if (n === 0)
            throw new Hh("No options set, will return an empty array");
          return nt.withScope((i) => {
            let r = i.manage(this.memory.newMutablePointerArray(1)),
              o = this.ffi.QTS_GetOwnPropertyNames(
                this.ctx.value,
                r.value.ptr,
                this.uint32Out.value.ptr,
                e.value,
                n,
              );
            if (o) return this.fail(this.memory.heapValueHandle(o));
            let a = this.uint32Out.value.typedArray[0],
              s = r.value.typedArray[0],
              u = new Uint32Array(this.module.HEAP8.buffer, s, a),
              l = Array.from(u).map((c) => this.memory.heapValueHandle(c));
            return (
              this.ffi.QTS_FreeVoidPointer(this.ctx.value, s),
              this.success(G2(l))
            );
          });
        }
        getIterator(e) {
          let t =
            this._SymbolIterator ??
            (this._SymbolIterator = this.memory.manage(
              this.getWellKnownSymbol("iterator"),
            ));
          return nt.withScope((n) => {
            let i = n.manage(this.getProp(e, t)),
              r = this.callFunction(i, e);
            return r.error ? r : this.success(new tx(r.value, this));
          });
        }
        setProp(e, t, n) {
          (this.runtime.assertOwned(e),
            this.borrowPropertyKey(t).consume((i) =>
              this.ffi.QTS_SetProp(this.ctx.value, e.value, i.value, n.value),
            ));
        }
        defineProp(e, t, n) {
          (this.runtime.assertOwned(e),
            nt.withScope((i) => {
              let r = i.manage(this.borrowPropertyKey(t)),
                o = n.value || this.undefined,
                a = !!n.configurable,
                s = !!n.enumerable,
                u = !!n.value,
                l = n.get
                  ? i.manage(this.newFunction(n.get.name, n.get))
                  : this.undefined,
                c = n.set
                  ? i.manage(this.newFunction(n.set.name, n.set))
                  : this.undefined;
              this.ffi.QTS_DefineProp(
                this.ctx.value,
                e.value,
                r.value,
                o.value,
                l.value,
                c.value,
                a,
                s,
                u,
              );
            }));
        }
        callFunction(e, t, ...n) {
          this.runtime.assertOwned(e);
          let i,
            r = n[0];
          r === void 0 || Array.isArray(r) ? (i = r ?? []) : (i = n);
          let o = this.memory
              .toPointerArray(i)
              .consume((s) =>
                this.ffi.QTS_Call(
                  this.ctx.value,
                  e.value,
                  t.value,
                  i.length,
                  s.value,
                ),
              ),
            a = this.ffi.QTS_ResolveException(this.ctx.value, o);
          return a
            ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, o),
              this.fail(this.memory.heapValueHandle(a)))
            : this.success(this.memory.heapValueHandle(o));
        }
        callMethod(e, t, n = []) {
          return this.getProp(e, t).consume((i) => this.callFunction(i, e, n));
        }
        evalCode(e, t = "eval.js", n) {
          let i = n === void 0 ? 1 : 0,
            r = X2(n),
            o = this.memory
              .newHeapCharPointer(e)
              .consume((s) =>
                this.ffi.QTS_Eval(
                  this.ctx.value,
                  s.value.ptr,
                  s.value.strlen,
                  t,
                  i,
                  r,
                ),
              ),
            a = this.ffi.QTS_ResolveException(this.ctx.value, o);
          return a
            ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, o),
              this.fail(this.memory.heapValueHandle(a)))
            : this.success(this.memory.heapValueHandle(o));
        }
        throw(e) {
          return this.errorToHandle(e).consume((t) =>
            this.ffi.QTS_Throw(this.ctx.value, t.value),
          );
        }
        borrowPropertyKey(e) {
          return typeof e == "number"
            ? this.newNumber(e)
            : typeof e == "string"
              ? this.newString(e)
              : new nr(e.value, this.runtime);
        }
        getMemory(e) {
          if (e === this.rt.value) return this.memory;
          throw new Error(
            "Private API. Cannot get memory from a different runtime",
          );
        }
        dump(e) {
          this.runtime.assertOwned(e);
          let t = this.typeof(e);
          if (t === "string") return this.getString(e);
          if (t === "number") return this.getNumber(e);
          if (t === "bigint") return this.getBigInt(e);
          if (t === "undefined") return;
          if (t === "symbol") return this.getSymbol(e);
          let n = this.getPromiseState(e);
          if (n.type === "fulfilled" && !n.notAPromise)
            return (
              e.dispose(),
              { type: n.type, value: n.value.consume(this.dump) }
            );
          if (n.type === "pending") return (e.dispose(), { type: n.type });
          if (n.type === "rejected")
            return (
              e.dispose(),
              { type: n.type, error: n.error.consume(this.dump) }
            );
          let i = this.memory.consumeJSCharPointer(
            this.ffi.QTS_Dump(this.ctx.value, e.value),
          );
          try {
            return JSON.parse(i);
          } catch {
            return i;
          }
        }
        unwrapResult(e) {
          if (e.error) {
            let t = "context" in e.error ? e.error.context : this,
              n = e.error.consume((i) => this.dump(i));
            if (n && typeof n == "object" && typeof n.message == "string") {
              let { message: i, name: r, stack: o, ...a } = n,
                s = new cd(n, t);
              (typeof r == "string" && (s.name = n.name), (s.message = i));
              let u = s.stack;
              throw (
                typeof o == "string" &&
                  (s.stack = `${r}: ${i}
${n.stack}Host: ${u}`),
                Object.assign(s, a),
                s
              );
            }
            throw new cd(n);
          }
          return e.value;
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return this.alive
            ? `${this.constructor.name} { ctx: ${this.ctx.value} rt: ${this.rt.value} }`
            : `${this.constructor.name} { disposed }`;
        }
        getFunction(e) {
          let t = e >> 8,
            n = this.fnMaps.get(t);
          if (n) return n.get(e);
        }
        setFunction(e, t) {
          let n = e >> 8,
            i = this.fnMaps.get(n);
          return (i || ((i = new Map()), this.fnMaps.set(n, i)), i.set(e, t));
        }
        errorToHandle(e) {
          return e instanceof $e ? e : this.newError(e);
        }
        encodeBinaryJSON(e) {
          let t = this.ffi.QTS_bjson_encode(this.ctx.value, e.value);
          return this.memory.heapValueHandle(t);
        }
        decodeBinaryJSON(e) {
          let t = this.ffi.QTS_bjson_decode(this.ctx.value, e.value);
          return this.memory.heapValueHandle(t);
        }
        success(e) {
          return Ur.success(e);
        }
        fail(e) {
          return Ur.fail(e, (t) => this.unwrapResult(t));
        }
      }),
      (ix = class extends Mt {
        constructor(e) {
          (super(),
            (this.scope = new nt()),
            (this.contextMap = new Map()),
            (this._debugMode = !1),
            (this.cToHostCallbacks = {
              shouldInterrupt: (t) => {
                if (t !== this.rt.value)
                  throw new Error(
                    "QuickJSContext instance received C -> JS interrupt with mismatched rt",
                  );
                let n = this.interruptHandler;
                if (!n)
                  throw new Error("QuickJSContext had no interrupt handler");
                return n(this) ? 1 : 0;
              },
              loadModuleSource: Ch(this, function* (t, n, i, r) {
                let o = this.moduleLoader;
                if (!o) throw new Error("Runtime has no module loader");
                if (n !== this.rt.value)
                  throw new Error("Runtime pointer mismatch");
                let a =
                  this.contextMap.get(i) ??
                  this.newContext({ contextPointer: i });
                try {
                  let s = yield* t(o(r, a));
                  if (typeof s == "object" && "error" in s && s.error)
                    throw (
                      this.debugLog(
                        "cToHostLoadModule: loader returned error",
                        s.error,
                      ),
                      s.error
                    );
                  let u = typeof s == "string" ? s : "value" in s ? s.value : s;
                  return this.memory.newHeapCharPointer(u).value.ptr;
                } catch (s) {
                  return (
                    this.debugLog("cToHostLoadModule: caught error", s),
                    a.throw(s),
                    0
                  );
                }
              }),
              normalizeModule: Ch(this, function* (t, n, i, r, o) {
                let a = this.moduleNormalizer;
                if (!a) throw new Error("Runtime has no module normalizer");
                if (n !== this.rt.value)
                  throw new Error("Runtime pointer mismatch");
                let s =
                  this.contextMap.get(i) ??
                  this.newContext({ contextPointer: i });
                try {
                  let u = yield* t(a(r, o, s));
                  if (typeof u == "object" && "error" in u && u.error)
                    throw (
                      this.debugLog(
                        "cToHostNormalizeModule: normalizer returned error",
                        u.error,
                      ),
                      u.error
                    );
                  let l = typeof u == "string" ? u : u.value;
                  return s.getMemory(this.rt.value).newHeapCharPointer(l).value
                    .ptr;
                } catch (u) {
                  return (
                    this.debugLog("normalizeModule: caught error", u),
                    s.throw(u),
                    0
                  );
                }
              }),
            }),
            e.ownedLifetimes?.forEach((t) => this.scope.manage(t)),
            (this.module = e.module),
            (this.memory = new Qh(this.module)),
            (this.ffi = e.ffi),
            (this.rt = e.rt),
            (this.callbacks = e.callbacks),
            this.scope.manage(this.rt),
            this.callbacks.setRuntimeCallbacks(
              this.rt.value,
              this.cToHostCallbacks,
            ),
            (this.executePendingJobs = this.executePendingJobs.bind(this)),
            pd && this.setDebugMode(!0));
        }
        get alive() {
          return this.scope.alive;
        }
        dispose() {
          return this.scope.dispose();
        }
        newContext(e = {}) {
          let t = K2(e.intrinsics),
            n = new $e(
              e.contextPointer || this.ffi.QTS_NewContext(this.rt.value, t),
              void 0,
              (r) => {
                (this.contextMap.delete(r),
                  this.callbacks.deleteContext(r),
                  this.ffi.QTS_FreeContext(r));
              },
            ),
            i = new nx({
              module: this.module,
              ctx: n,
              ffi: this.ffi,
              rt: this.rt,
              ownedLifetimes: e.ownedLifetimes,
              runtime: this,
              callbacks: this.callbacks,
            });
          return (this.contextMap.set(n.value, i), i);
        }
        setModuleLoader(e, t) {
          ((this.moduleLoader = e),
            (this.moduleNormalizer = t),
            this.ffi.QTS_RuntimeEnableModuleLoader(
              this.rt.value,
              this.moduleNormalizer ? 1 : 0,
            ));
        }
        removeModuleLoader() {
          ((this.moduleLoader = void 0),
            this.ffi.QTS_RuntimeDisableModuleLoader(this.rt.value));
        }
        hasPendingJob() {
          return !!this.ffi.QTS_IsJobPending(this.rt.value);
        }
        setInterruptHandler(e) {
          let t = this.interruptHandler;
          ((this.interruptHandler = e),
            t || this.ffi.QTS_RuntimeEnableInterruptHandler(this.rt.value));
        }
        removeInterruptHandler() {
          this.interruptHandler &&
            (this.ffi.QTS_RuntimeDisableInterruptHandler(this.rt.value),
            (this.interruptHandler = void 0));
        }
        executePendingJobs(e = -1) {
          let t = this.memory.newMutablePointerArray(1),
            n = this.ffi.QTS_ExecutePendingJob(
              this.rt.value,
              e ?? -1,
              t.value.ptr,
            ),
            i = t.value.typedArray[0];
          if ((t.dispose(), i === 0))
            return (
              this.ffi.QTS_FreeValuePointerRuntime(this.rt.value, n),
              Ur.success(0)
            );
          let r =
              this.contextMap.get(i) ?? this.newContext({ contextPointer: i }),
            o = r.getMemory(this.rt.value).heapValueHandle(n);
          if (r.typeof(o) === "number") {
            let a = r.getNumber(o);
            return (o.dispose(), Ur.success(a));
          } else {
            let a = Object.assign(o, { context: r });
            return Ur.fail(a, (s) => r.unwrapResult(s));
          }
        }
        setMemoryLimit(e) {
          if (e < 0 && e !== -1)
            throw new Error(
              "Cannot set memory limit to negative number. To unset, pass -1",
            );
          this.ffi.QTS_RuntimeSetMemoryLimit(this.rt.value, e);
        }
        computeMemoryUsage() {
          let e = this.getSystemContext().getMemory(this.rt.value);
          return e.heapValueHandle(
            this.ffi.QTS_RuntimeComputeMemoryUsage(this.rt.value, e.ctx.value),
          );
        }
        dumpMemoryUsage() {
          return this.memory.consumeHeapCharPointer(
            this.ffi.QTS_RuntimeDumpMemoryUsage(this.rt.value),
          );
        }
        setMaxStackSize(e) {
          if (e < 0)
            throw new Error(
              "Cannot set memory limit to negative number. To unset, pass 0.",
            );
          this.ffi.QTS_RuntimeSetMaxStackSize(this.rt.value, e);
        }
        assertOwned(e) {
          if (e.owner && e.owner.rt !== this.rt)
            throw new jh(
              `Handle is not owned by this runtime: ${e.owner.rt.value} != ${this.rt.value}`,
            );
        }
        setDebugMode(e) {
          ((this._debugMode = e),
            this.ffi.DEBUG &&
              this.rt.alive &&
              this.ffi.QTS_SetDebugLogEnabled(this.rt.value, e ? 1 : 0));
        }
        isDebugMode() {
          return this._debugMode;
        }
        debugLog(...e) {
          this._debugMode && console.log("quickjs-emscripten:", ...e);
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return this.alive
            ? `${this.constructor.name} { rt: ${this.rt.value} }`
            : `${this.constructor.name} { disposed }`;
        }
        getSystemContext() {
          return (
            this.context ||
              (this.context = this.scope.manage(this.newContext())),
            this.context
          );
        }
      }),
      (ox = class {
        constructor(e) {
          ((this.callFunction = e.callFunction),
            (this.shouldInterrupt = e.shouldInterrupt),
            (this.loadModuleSource = e.loadModuleSource),
            (this.normalizeModule = e.normalizeModule));
        }
      }),
      (gd = class {
        constructor(e) {
          ((this.contextCallbacks = new Map()),
            (this.runtimeCallbacks = new Map()),
            (this.suspendedCount = 0),
            (this.cToHostCallbacks = new ox({
              callFunction: (t, n, i, r, o, a) =>
                this.handleAsyncify(t, () => {
                  try {
                    let s = this.contextCallbacks.get(n);
                    if (!s)
                      throw new Error(
                        `QuickJSContext(ctx = ${n}) not found for C function call "${a}"`,
                      );
                    return s.callFunction(n, i, r, o, a);
                  } catch (s) {
                    return (
                      console.error("[C to host error: returning null]", s),
                      0
                    );
                  }
                }),
              shouldInterrupt: (t, n) =>
                this.handleAsyncify(t, () => {
                  try {
                    let i = this.runtimeCallbacks.get(n);
                    if (!i)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) not found for C interrupt`,
                      );
                    return i.shouldInterrupt(n);
                  } catch (i) {
                    return (
                      console.error(
                        "[C to host interrupt: returning error]",
                        i,
                      ),
                      1
                    );
                  }
                }),
              loadModuleSource: (t, n, i, r) =>
                this.handleAsyncify(t, () => {
                  try {
                    let o = this.runtimeCallbacks.get(n);
                    if (!o)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) not found for C module loader`,
                      );
                    let a = o.loadModuleSource;
                    if (!a)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) does not support module loading`,
                      );
                    return a(n, i, r);
                  } catch (o) {
                    return (
                      console.error(
                        "[C to host module loader error: returning null]",
                        o,
                      ),
                      0
                    );
                  }
                }),
              normalizeModule: (t, n, i, r, o) =>
                this.handleAsyncify(t, () => {
                  try {
                    let a = this.runtimeCallbacks.get(n);
                    if (!a)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) not found for C module loader`,
                      );
                    let s = a.normalizeModule;
                    if (!s)
                      throw new Error(
                        `QuickJSRuntime(rt = ${n}) does not support module loading`,
                      );
                    return s(n, i, r, o);
                  } catch (a) {
                    return (
                      console.error(
                        "[C to host module loader error: returning null]",
                        a,
                      ),
                      0
                    );
                  }
                }),
            })),
            (this.module = e),
            (this.module.callbacks = this.cToHostCallbacks));
        }
        setRuntimeCallbacks(e, t) {
          this.runtimeCallbacks.set(e, t);
        }
        deleteRuntime(e) {
          this.runtimeCallbacks.delete(e);
        }
        setContextCallbacks(e, t) {
          this.contextCallbacks.set(e, t);
        }
        deleteContext(e) {
          this.contextCallbacks.delete(e);
        }
        handleAsyncify(e, t) {
          if (e)
            return e.handleSleep((i) => {
              try {
                let r = t();
                if (!(r instanceof Promise)) {
                  (ri("asyncify.handleSleep: not suspending:", r), i(r));
                  return;
                }
                if (this.suspended)
                  throw new Lh(`Already suspended at: ${this.suspended.stack}
Attempted to suspend at:`);
                ((this.suspended = new Bh(`(${this.suspendedCount++})`)),
                  ri("asyncify.handleSleep: suspending:", this.suspended),
                  r.then(
                    (o) => {
                      ((this.suspended = void 0),
                        ri("asyncify.handleSleep: resolved:", o),
                        i(o));
                    },
                    (o) => {
                      (ri("asyncify.handleSleep: rejected:", o),
                        console.error(
                          "QuickJS: cannot handle error in suspended function",
                          o,
                        ),
                        (this.suspended = void 0));
                    },
                  ));
              } catch (r) {
                throw (
                  ri("asyncify.handleSleep: error:", r),
                  (this.suspended = void 0),
                  r
                );
              }
            });
          let n = t();
          if (n instanceof Promise)
            throw new Error(
              "Promise return value not supported in non-asyncify context.",
            );
          return n;
        }
      }));
    Jh = class {
      constructor(e, t) {
        ((this.module = e), (this.ffi = t), (this.callbacks = new gd(e)));
      }
      newRuntime(e = {}) {
        let t = new $e(this.ffi.QTS_NewRuntime(), void 0, (i) => {
            (this.callbacks.deleteRuntime(i), this.ffi.QTS_FreeRuntime(i));
          }),
          n = new ix({
            module: this.module,
            callbacks: this.callbacks,
            ffi: this.ffi,
            rt: t,
          });
        return (
          yd(n, e),
          e.moduleLoader && n.setModuleLoader(e.moduleLoader),
          n
        );
      }
      newContext(e = {}) {
        let t = this.newRuntime(),
          n = t.newContext({ ...e, ownedLifetimes: ex(t, e.ownedLifetimes) });
        return ((t.context = n), n);
      }
      evalCode(e, t = {}) {
        return nt.withScope((n) => {
          let i = n.manage(this.newContext());
          vd(i.runtime, t);
          let r = i.evalCode(e, "eval.js");
          if (
            (t.memoryLimitBytes !== void 0 && i.runtime.setMemoryLimit(-1),
            r.error)
          )
            throw i.dump(n.manage(r.error));
          return i.dump(n.manage(r.value));
        });
      }
      getWasmMemory() {
        let e = this.module
          .quickjsEmscriptenInit?.(() => {})
          ?.getWasmMemory?.();
        if (!e)
          throw new Error(
            "Variant does not support getting WebAssembly.Memory",
          );
        return e;
      }
      getFFI() {
        return this.ffi;
      }
    };
  });
var Xh = {};
Ke(Xh, {
  QuickJSModuleCallbacks: () => gd,
  QuickJSWASMModule: () => Jh,
  applyBaseRuntimeOptions: () => yd,
  applyModuleEvalRuntimeOptions: () => vd,
});
var Yh = at(() => {
  Kh();
});
var tg = {};
Ke(tg, { QuickJSFFI: () => ax });
var ax,
  rg = at(() => {
    ax = class {
      constructor(e) {
        ((this.module = e),
          (this.DEBUG = !1),
          (this.QTS_Throw = this.module.cwrap("QTS_Throw", "number", [
            "number",
            "number",
          ])),
          (this.QTS_NewError = this.module.cwrap("QTS_NewError", "number", [
            "number",
          ])),
          (this.QTS_RuntimeSetMemoryLimit = this.module.cwrap(
            "QTS_RuntimeSetMemoryLimit",
            null,
            ["number", "number"],
          )),
          (this.QTS_RuntimeComputeMemoryUsage = this.module.cwrap(
            "QTS_RuntimeComputeMemoryUsage",
            "number",
            ["number", "number"],
          )),
          (this.QTS_RuntimeDumpMemoryUsage = this.module.cwrap(
            "QTS_RuntimeDumpMemoryUsage",
            "number",
            ["number"],
          )),
          (this.QTS_RecoverableLeakCheck = this.module.cwrap(
            "QTS_RecoverableLeakCheck",
            "number",
            [],
          )),
          (this.QTS_BuildIsSanitizeLeak = this.module.cwrap(
            "QTS_BuildIsSanitizeLeak",
            "number",
            [],
          )),
          (this.QTS_RuntimeSetMaxStackSize = this.module.cwrap(
            "QTS_RuntimeSetMaxStackSize",
            null,
            ["number", "number"],
          )),
          (this.QTS_GetUndefined = this.module.cwrap(
            "QTS_GetUndefined",
            "number",
            [],
          )),
          (this.QTS_GetNull = this.module.cwrap("QTS_GetNull", "number", [])),
          (this.QTS_GetFalse = this.module.cwrap("QTS_GetFalse", "number", [])),
          (this.QTS_GetTrue = this.module.cwrap("QTS_GetTrue", "number", [])),
          (this.QTS_NewRuntime = this.module.cwrap(
            "QTS_NewRuntime",
            "number",
            [],
          )),
          (this.QTS_FreeRuntime = this.module.cwrap("QTS_FreeRuntime", null, [
            "number",
          ])),
          (this.QTS_NewContext = this.module.cwrap("QTS_NewContext", "number", [
            "number",
            "number",
          ])),
          (this.QTS_FreeContext = this.module.cwrap("QTS_FreeContext", null, [
            "number",
          ])),
          (this.QTS_FreeValuePointer = this.module.cwrap(
            "QTS_FreeValuePointer",
            null,
            ["number", "number"],
          )),
          (this.QTS_FreeValuePointerRuntime = this.module.cwrap(
            "QTS_FreeValuePointerRuntime",
            null,
            ["number", "number"],
          )),
          (this.QTS_FreeVoidPointer = this.module.cwrap(
            "QTS_FreeVoidPointer",
            null,
            ["number", "number"],
          )),
          (this.QTS_FreeCString = this.module.cwrap("QTS_FreeCString", null, [
            "number",
            "number",
          ])),
          (this.QTS_DupValuePointer = this.module.cwrap(
            "QTS_DupValuePointer",
            "number",
            ["number", "number"],
          )),
          (this.QTS_NewObject = this.module.cwrap("QTS_NewObject", "number", [
            "number",
          ])),
          (this.QTS_NewObjectProto = this.module.cwrap(
            "QTS_NewObjectProto",
            "number",
            ["number", "number"],
          )),
          (this.QTS_NewArray = this.module.cwrap("QTS_NewArray", "number", [
            "number",
          ])),
          (this.QTS_NewArrayBuffer = this.module.cwrap(
            "QTS_NewArrayBuffer",
            "number",
            ["number", "number", "number"],
          )),
          (this.QTS_NewFloat64 = this.module.cwrap("QTS_NewFloat64", "number", [
            "number",
            "number",
          ])),
          (this.QTS_GetFloat64 = this.module.cwrap("QTS_GetFloat64", "number", [
            "number",
            "number",
          ])),
          (this.QTS_NewString = this.module.cwrap("QTS_NewString", "number", [
            "number",
            "number",
          ])),
          (this.QTS_GetString = this.module.cwrap("QTS_GetString", "number", [
            "number",
            "number",
          ])),
          (this.QTS_GetArrayBuffer = this.module.cwrap(
            "QTS_GetArrayBuffer",
            "number",
            ["number", "number"],
          )),
          (this.QTS_GetArrayBufferLength = this.module.cwrap(
            "QTS_GetArrayBufferLength",
            "number",
            ["number", "number"],
          )),
          (this.QTS_NewSymbol = this.module.cwrap("QTS_NewSymbol", "number", [
            "number",
            "number",
            "number",
          ])),
          (this.QTS_GetSymbolDescriptionOrKey = this.module.cwrap(
            "QTS_GetSymbolDescriptionOrKey",
            "number",
            ["number", "number"],
          )),
          (this.QTS_IsGlobalSymbol = this.module.cwrap(
            "QTS_IsGlobalSymbol",
            "number",
            ["number", "number"],
          )),
          (this.QTS_IsJobPending = this.module.cwrap(
            "QTS_IsJobPending",
            "number",
            ["number"],
          )),
          (this.QTS_ExecutePendingJob = this.module.cwrap(
            "QTS_ExecutePendingJob",
            "number",
            ["number", "number", "number"],
          )),
          (this.QTS_GetProp = this.module.cwrap("QTS_GetProp", "number", [
            "number",
            "number",
            "number",
          ])),
          (this.QTS_GetPropNumber = this.module.cwrap(
            "QTS_GetPropNumber",
            "number",
            ["number", "number", "number"],
          )),
          (this.QTS_SetProp = this.module.cwrap("QTS_SetProp", null, [
            "number",
            "number",
            "number",
            "number",
          ])),
          (this.QTS_DefineProp = this.module.cwrap("QTS_DefineProp", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "boolean",
            "boolean",
            "boolean",
          ])),
          (this.QTS_GetOwnPropertyNames = this.module.cwrap(
            "QTS_GetOwnPropertyNames",
            "number",
            ["number", "number", "number", "number", "number"],
          )),
          (this.QTS_Call = this.module.cwrap("QTS_Call", "number", [
            "number",
            "number",
            "number",
            "number",
            "number",
          ])),
          (this.QTS_ResolveException = this.module.cwrap(
            "QTS_ResolveException",
            "number",
            ["number", "number"],
          )),
          (this.QTS_Dump = this.module.cwrap("QTS_Dump", "number", [
            "number",
            "number",
          ])),
          (this.QTS_Eval = this.module.cwrap("QTS_Eval", "number", [
            "number",
            "number",
            "number",
            "string",
            "number",
            "number",
          ])),
          (this.QTS_GetModuleNamespace = this.module.cwrap(
            "QTS_GetModuleNamespace",
            "number",
            ["number", "number"],
          )),
          (this.QTS_Typeof = this.module.cwrap("QTS_Typeof", "number", [
            "number",
            "number",
          ])),
          (this.QTS_GetLength = this.module.cwrap("QTS_GetLength", "number", [
            "number",
            "number",
            "number",
          ])),
          (this.QTS_IsEqual = this.module.cwrap("QTS_IsEqual", "number", [
            "number",
            "number",
            "number",
            "number",
          ])),
          (this.QTS_GetGlobalObject = this.module.cwrap(
            "QTS_GetGlobalObject",
            "number",
            ["number"],
          )),
          (this.QTS_NewPromiseCapability = this.module.cwrap(
            "QTS_NewPromiseCapability",
            "number",
            ["number", "number"],
          )),
          (this.QTS_PromiseState = this.module.cwrap(
            "QTS_PromiseState",
            "number",
            ["number", "number"],
          )),
          (this.QTS_PromiseResult = this.module.cwrap(
            "QTS_PromiseResult",
            "number",
            ["number", "number"],
          )),
          (this.QTS_TestStringArg = this.module.cwrap(
            "QTS_TestStringArg",
            null,
            ["string"],
          )),
          (this.QTS_GetDebugLogEnabled = this.module.cwrap(
            "QTS_GetDebugLogEnabled",
            "number",
            ["number"],
          )),
          (this.QTS_SetDebugLogEnabled = this.module.cwrap(
            "QTS_SetDebugLogEnabled",
            null,
            ["number", "number"],
          )),
          (this.QTS_BuildIsDebug = this.module.cwrap(
            "QTS_BuildIsDebug",
            "number",
            [],
          )),
          (this.QTS_BuildIsAsyncify = this.module.cwrap(
            "QTS_BuildIsAsyncify",
            "number",
            [],
          )),
          (this.QTS_NewFunction = this.module.cwrap(
            "QTS_NewFunction",
            "number",
            ["number", "number", "string"],
          )),
          (this.QTS_ArgvGetJSValueConstPointer = this.module.cwrap(
            "QTS_ArgvGetJSValueConstPointer",
            "number",
            ["number", "number"],
          )),
          (this.QTS_RuntimeEnableInterruptHandler = this.module.cwrap(
            "QTS_RuntimeEnableInterruptHandler",
            null,
            ["number"],
          )),
          (this.QTS_RuntimeDisableInterruptHandler = this.module.cwrap(
            "QTS_RuntimeDisableInterruptHandler",
            null,
            ["number"],
          )),
          (this.QTS_RuntimeEnableModuleLoader = this.module.cwrap(
            "QTS_RuntimeEnableModuleLoader",
            null,
            ["number", "number"],
          )),
          (this.QTS_RuntimeDisableModuleLoader = this.module.cwrap(
            "QTS_RuntimeDisableModuleLoader",
            null,
            ["number"],
          )),
          (this.QTS_bjson_encode = this.module.cwrap(
            "QTS_bjson_encode",
            "number",
            ["number", "number"],
          )),
          (this.QTS_bjson_decode = this.module.cwrap(
            "QTS_bjson_decode",
            "number",
            ["number", "number"],
          )));
      }
    };
  });
var ng = {};
Ke(ng, { default: () => ux });
var sx,
  ux,
  ig = at(() => {
    ((sx = (() => {
      var e = import.meta.url;
      return function (t = {}) {
        var n,
          i = t,
          r,
          o,
          a = new Promise((p, h) => {
            ((r = p), (o = h));
          }),
          s = typeof window == "object",
          u = typeof importScripts == "function";
        function l(p) {
          p = { log: p || function () {} };
          for (let h of l.Ia) h(p);
          return (i.quickJSEmscriptenExtensions = p);
        }
        ((l.Ia = []),
          (i.quickjsEmscriptenInit = l),
          l.Ia.push((p) => {
            p.getWasmMemory = function () {
              return S;
            };
          }));
        var c = Object.assign({}, i),
          d = "./this.program",
          f = "",
          _,
          g;
        (s || u) &&
          (u
            ? (f = self.location.href)
            : typeof document < "u" &&
              document.currentScript &&
              (f = document.currentScript.src),
          e && (f = e),
          f.startsWith("blob:")
            ? (f = "")
            : (f = f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
          u &&
            (g = (p) => {
              var h = new XMLHttpRequest();
              return (
                h.open("GET", p, !1),
                (h.responseType = "arraybuffer"),
                h.send(null),
                new Uint8Array(h.response)
              );
            }),
          (_ = (p) =>
            fetch(p, { credentials: "same-origin" }).then((h) =>
              h.ok
                ? h.arrayBuffer()
                : Promise.reject(Error(h.status + " : " + h.url)),
            )));
        var m = i.print || console.log.bind(console),
          A = i.printErr || console.error.bind(console);
        (Object.assign(i, c), (c = null), i.thisProgram && (d = i.thisProgram));
        var D = i.wasmBinary,
          S,
          v = !1,
          b,
          T,
          C,
          I,
          j;
        function F() {
          var p = S.buffer;
          ((i.HEAP8 = T = new Int8Array(p)),
            (i.HEAP16 = new Int16Array(p)),
            (i.HEAPU8 = C = new Uint8Array(p)),
            (i.HEAPU16 = new Uint16Array(p)),
            (i.HEAP32 = I = new Int32Array(p)),
            (i.HEAPU32 = j = new Uint32Array(p)),
            (i.HEAPF32 = new Float32Array(p)),
            (i.HEAPF64 = new Float64Array(p)));
        }
        (i.wasmMemory
          ? (S = i.wasmMemory)
          : (S = new WebAssembly.Memory({
              initial: (i.INITIAL_MEMORY || 16777216) / 65536,
              maximum: 32768,
            })),
          F());
        var W = [],
          M = [],
          oe = [];
        function te() {
          var p = i.preRun.shift();
          W.unshift(p);
        }
        var ue = 0,
          Pe = null,
          G = null;
        function K(p) {
          throw (
            i.onAbort?.(p),
            (p = "Aborted(" + p + ")"),
            A(p),
            (v = !0),
            (b = 1),
            (p = new WebAssembly.RuntimeError(
              p + ". Build with -sASSERTIONS for more info.",
            )),
            o(p),
            p
          );
        }
        var ui = (p) => p.startsWith("data:application/octet-stream;base64,"),
          da;
        function Fd(p) {
          if (p == da && D) return new Uint8Array(D);
          if (g) return g(p);
          throw "both async and sync fetching of the wasm failed";
        }
        function Hg(p) {
          return D
            ? Promise.resolve().then(() => Fd(p))
            : _(p).then(
                (h) => new Uint8Array(h),
                () => Fd(p),
              );
        }
        function Ld(p, h, w) {
          return Hg(p)
            .then(($) => WebAssembly.instantiate($, h))
            .then(w, ($) => {
              (A(`failed to asynchronously prepare wasm: ${$}`), K($));
            });
        }
        function Zg(p, h) {
          var w = da;
          return D ||
            typeof WebAssembly.instantiateStreaming != "function" ||
            ui(w) ||
            typeof fetch != "function"
            ? Ld(w, p, h)
            : fetch(w, { credentials: "same-origin" }).then(($) =>
                WebAssembly.instantiateStreaming($, p).then(h, function (L) {
                  return (
                    A(`wasm streaming compile failed: ${L}`),
                    A("falling back to ArrayBuffer instantiation"),
                    Ld(w, p, h)
                  );
                }),
              );
        }
        function Bd(p) {
          ((this.name = "ExitStatus"),
            (this.message = `Program terminated with exit(${p})`),
            (this.status = p));
        }
        var ma = (p) => {
            for (; 0 < p.length; ) p.shift()(i);
          },
          pa = i.noExitRuntime || !0,
          Vd = typeof TextDecoder < "u" ? new TextDecoder() : void 0,
          ot = (p, h, w) => {
            var $ = h + w;
            for (w = h; p[w] && !(w >= $); ) ++w;
            if (16 < w - h && p.buffer && Vd)
              return Vd.decode(p.subarray(h, w));
            for ($ = ""; h < w; ) {
              var L = p[h++];
              if (L & 128) {
                var J = p[h++] & 63;
                if ((L & 224) == 192)
                  $ += String.fromCharCode(((L & 31) << 6) | J);
                else {
                  var X = p[h++] & 63;
                  ((L =
                    (L & 240) == 224
                      ? ((L & 15) << 12) | (J << 6) | X
                      : ((L & 7) << 18) | (J << 12) | (X << 6) | (p[h++] & 63)),
                    65536 > L
                      ? ($ += String.fromCharCode(L))
                      : ((L -= 65536),
                        ($ += String.fromCharCode(
                          55296 | (L >> 10),
                          56320 | (L & 1023),
                        ))));
                }
              } else $ += String.fromCharCode(L);
            }
            return $;
          },
          Gg = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
          Wg = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          qr = {},
          qd = (p) => {
            if (!(p instanceof Bd || p == "unwind")) throw p;
          },
          _a = 0,
          Hd = (p) => {
            throw (
              (b = p),
              pa || 0 < _a || (i.onExit?.(p), (v = !0)),
              new Bd(p)
            );
          },
          Qg = (p) => {
            if (!v)
              try {
                if ((p(), !(pa || 0 < _a)))
                  try {
                    ((b = p = b), Hd(p));
                  } catch (h) {
                    qd(h);
                  }
              } catch (h) {
                qd(h);
              }
          },
          Zd;
        Zd = () => performance.now();
        var ar = (p, h, w) => {
            var $ = C;
            if (!(0 < w)) return 0;
            var L = h;
            w = h + w - 1;
            for (var J = 0; J < p.length; ++J) {
              var X = p.charCodeAt(J);
              if (55296 <= X && 57343 >= X) {
                var be = p.charCodeAt(++J);
                X = (65536 + ((X & 1023) << 10)) | (be & 1023);
              }
              if (127 >= X) {
                if (h >= w) break;
                $[h++] = X;
              } else {
                if (2047 >= X) {
                  if (h + 1 >= w) break;
                  $[h++] = 192 | (X >> 6);
                } else {
                  if (65535 >= X) {
                    if (h + 2 >= w) break;
                    $[h++] = 224 | (X >> 12);
                  } else {
                    if (h + 3 >= w) break;
                    (($[h++] = 240 | (X >> 18)),
                      ($[h++] = 128 | ((X >> 12) & 63)));
                  }
                  $[h++] = 128 | ((X >> 6) & 63);
                }
                $[h++] = 128 | (X & 63);
              }
            }
            return (($[h] = 0), h - L);
          },
          fa = {},
          Gd = () => {
            if (!ha) {
              var p = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (
                      (typeof navigator == "object" &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  _: d || "./this.program",
                },
                h;
              for (h in fa) fa[h] === void 0 ? delete p[h] : (p[h] = fa[h]);
              var w = [];
              for (h in p) w.push(`${h}=${p[h]}`);
              ha = w;
            }
            return ha;
          },
          ha,
          Jg = [null, [], []],
          Wd = (p) => {
            for (var h = 0, w = 0; w < p.length; ++w) {
              var $ = p.charCodeAt(w);
              127 >= $
                ? h++
                : 2047 >= $
                  ? (h += 2)
                  : 55296 <= $ && 57343 >= $
                    ? ((h += 4), ++w)
                    : (h += 3);
            }
            return h;
          },
          Kg = (p, h, w, $) => {
            var L = {
              string: (we) => {
                var Ge = 0;
                if (we != null && we !== 0) {
                  Ge = Wd(we) + 1;
                  var Yd = ga(Ge);
                  (ar(we, Yd, Ge), (Ge = Yd));
                }
                return Ge;
              },
              array: (we) => {
                var Ge = ga(we.length);
                return (T.set(we, Ge), Ge);
              },
            };
            p = i["_" + p];
            var J = [],
              X = 0;
            if ($)
              for (var be = 0; be < $.length; be++) {
                var Dt = L[w[be]];
                Dt
                  ? (X === 0 && (X = Kd()), (J[be] = Dt($[be])))
                  : (J[be] = $[be]);
              }
            return (
              (w = p(...J)),
              (w = (function (we) {
                return (
                  X !== 0 && Jd(X),
                  h === "string"
                    ? we
                      ? ot(C, we)
                      : ""
                    : h === "boolean"
                      ? !!we
                      : we
                );
              })(w))
            );
          },
          Xg = {
            b: (p, h, w, $) => {
              K(
                `Assertion failed: ${p ? ot(C, p) : ""}, at: ` +
                  [
                    h ? (h ? ot(C, h) : "") : "unknown filename",
                    w,
                    $ ? ($ ? ot(C, $) : "") : "unknown function",
                  ],
              );
            },
            q: () => {
              K("");
            },
            n: () => {
              ((pa = !1), (_a = 0));
            },
            j: function (p, h, w) {
              ((p = new Date(
                1e3 *
                  ((h + 2097152) >>> 0 < 4194305 - !!p
                    ? (p >>> 0) + 4294967296 * h
                    : NaN),
              )),
                (I[w >> 2] = p.getSeconds()),
                (I[(w + 4) >> 2] = p.getMinutes()),
                (I[(w + 8) >> 2] = p.getHours()),
                (I[(w + 12) >> 2] = p.getDate()),
                (I[(w + 16) >> 2] = p.getMonth()),
                (I[(w + 20) >> 2] = p.getFullYear() - 1900),
                (I[(w + 24) >> 2] = p.getDay()),
                (h = p.getFullYear()),
                (I[(w + 28) >> 2] =
                  ((h % 4 !== 0 || (h % 100 === 0 && h % 400 !== 0) ? Wg : Gg)[
                    p.getMonth()
                  ] +
                    p.getDate() -
                    1) |
                  0),
                (I[(w + 36) >> 2] = -(60 * p.getTimezoneOffset())),
                (h = new Date(p.getFullYear(), 6, 1).getTimezoneOffset()));
              var $ = new Date(p.getFullYear(), 0, 1).getTimezoneOffset();
              I[(w + 32) >> 2] =
                (h != $ && p.getTimezoneOffset() == Math.min($, h)) | 0;
            },
            l: (p, h) => {
              if ((qr[p] && (clearTimeout(qr[p].id), delete qr[p]), !h))
                return 0;
              var w = setTimeout(() => {
                (delete qr[p], Qg(() => Qd(p, Zd())));
              }, h);
              return ((qr[p] = { id: w, Na: h }), 0);
            },
            o: (p, h, w, $) => {
              var L = new Date().getFullYear(),
                J = new Date(L, 0, 1).getTimezoneOffset();
              ((L = new Date(L, 6, 1).getTimezoneOffset()),
                (j[p >> 2] = 60 * Math.max(J, L)),
                (I[h >> 2] = +(J != L)),
                (h = (X) => {
                  var be = Math.abs(X);
                  return `UTC${0 <= X ? "-" : "+"}${String(Math.floor(be / 60)).padStart(2, "0")}${String(be % 60).padStart(2, "0")}`;
                }),
                (p = h(J)),
                (h = h(L)),
                L < J
                  ? (ar(p, w, 17), ar(h, $, 17))
                  : (ar(p, $, 17), ar(h, w, 17)));
            },
            p: () => Date.now(),
            m: (p) => {
              var h = C.length;
              if (((p >>>= 0), 2147483648 < p)) return !1;
              for (var w = 1; 4 >= w; w *= 2) {
                var $ = h * (1 + 0.2 / w);
                $ = Math.min($, p + 100663296);
                e: {
                  $ =
                    (Math.min(
                      2147483648,
                      65536 * Math.ceil(Math.max(p, $) / 65536),
                    ) -
                      S.buffer.byteLength +
                      65535) /
                    65536;
                  try {
                    (S.grow($), F());
                    var L = 1;
                    break e;
                  } catch {}
                  L = void 0;
                }
                if (L) return !0;
              }
              return !1;
            },
            f: (p, h) => {
              var w = 0;
              return (
                Gd().forEach(($, L) => {
                  var J = h + w;
                  for (L = j[(p + 4 * L) >> 2] = J, J = 0; J < $.length; ++J)
                    T[L++] = $.charCodeAt(J);
                  ((T[L] = 0), (w += $.length + 1));
                }),
                0
              );
            },
            g: (p, h) => {
              var w = Gd();
              j[p >> 2] = w.length;
              var $ = 0;
              return (
                w.forEach((L) => ($ += L.length + 1)),
                (j[h >> 2] = $),
                0
              );
            },
            e: () => 52,
            k: function () {
              return 70;
            },
            d: (p, h, w, $) => {
              for (var L = 0, J = 0; J < w; J++) {
                var X = j[h >> 2],
                  be = j[(h + 4) >> 2];
                h += 8;
                for (var Dt = 0; Dt < be; Dt++) {
                  var we = C[X + Dt],
                    Ge = Jg[p];
                  we === 0 || we === 10
                    ? ((p === 1 ? m : A)(ot(Ge, 0)), (Ge.length = 0))
                    : Ge.push(we);
                }
                L += be;
              }
              return ((j[$ >> 2] = L), 0);
            },
            a: S,
            c: Hd,
            s: function (p, h, w, $, L) {
              return i.callbacks.callFunction(void 0, p, h, w, $, L);
            },
            r: function (p) {
              return i.callbacks.shouldInterrupt(void 0, p);
            },
            i: function (p, h, w) {
              return (
                (w = w ? ot(C, w) : ""),
                i.callbacks.loadModuleSource(void 0, p, h, w)
              );
            },
            h: function (p, h, w, $) {
              return (
                (w = w ? ot(C, w) : ""),
                ($ = $ ? ot(C, $) : ""),
                i.callbacks.normalizeModule(void 0, p, h, w, $)
              );
            },
          },
          O = (function () {
            function p(w) {
              return (
                (O = w.exports),
                M.unshift(O.t),
                ue--,
                i.monitorRunDependencies?.(ue),
                ue == 0 &&
                  (Pe !== null && (clearInterval(Pe), (Pe = null)),
                  G && ((w = G), (G = null), w())),
                O
              );
            }
            var h = { a: Xg };
            if ((ue++, i.monitorRunDependencies?.(ue), i.instantiateWasm))
              try {
                return i.instantiateWasm(h, p);
              } catch (w) {
                (A(`Module.instantiateWasm callback failed with error: ${w}`),
                  o(w));
              }
            return (
              (da ||= i.locateFile
                ? ui("emscripten-module.wasm")
                  ? "emscripten-module.wasm"
                  : i.locateFile
                    ? i.locateFile("emscripten-module.wasm", f)
                    : f + "emscripten-module.wasm"
                : new URL("emscripten-module.wasm", import.meta.url).href),
              Zg(h, function (w) {
                p(w.instance);
              }).catch(o),
              {}
            );
          })();
        ((i._malloc = (p) => (i._malloc = O.u)(p)),
          (i._QTS_Throw = (p, h) => (i._QTS_Throw = O.v)(p, h)),
          (i._QTS_NewError = (p) => (i._QTS_NewError = O.w)(p)),
          (i._QTS_RuntimeSetMemoryLimit = (p, h) =>
            (i._QTS_RuntimeSetMemoryLimit = O.x)(p, h)),
          (i._QTS_RuntimeComputeMemoryUsage = (p, h) =>
            (i._QTS_RuntimeComputeMemoryUsage = O.y)(p, h)),
          (i._QTS_RuntimeDumpMemoryUsage = (p) =>
            (i._QTS_RuntimeDumpMemoryUsage = O.z)(p)),
          (i._QTS_RecoverableLeakCheck = () =>
            (i._QTS_RecoverableLeakCheck = O.A)()),
          (i._QTS_BuildIsSanitizeLeak = () =>
            (i._QTS_BuildIsSanitizeLeak = O.B)()),
          (i._QTS_RuntimeSetMaxStackSize = (p, h) =>
            (i._QTS_RuntimeSetMaxStackSize = O.C)(p, h)),
          (i._QTS_GetUndefined = () => (i._QTS_GetUndefined = O.D)()),
          (i._QTS_GetNull = () => (i._QTS_GetNull = O.E)()),
          (i._QTS_GetFalse = () => (i._QTS_GetFalse = O.F)()),
          (i._QTS_GetTrue = () => (i._QTS_GetTrue = O.G)()),
          (i._QTS_NewRuntime = () => (i._QTS_NewRuntime = O.H)()),
          (i._QTS_FreeRuntime = (p) => (i._QTS_FreeRuntime = O.I)(p)),
          (i._free = (p) => (i._free = O.J)(p)),
          (i._QTS_NewContext = (p, h) => (i._QTS_NewContext = O.K)(p, h)),
          (i._QTS_FreeContext = (p) => (i._QTS_FreeContext = O.L)(p)),
          (i._QTS_FreeValuePointer = (p, h) =>
            (i._QTS_FreeValuePointer = O.M)(p, h)),
          (i._QTS_FreeValuePointerRuntime = (p, h) =>
            (i._QTS_FreeValuePointerRuntime = O.N)(p, h)),
          (i._QTS_FreeVoidPointer = (p, h) =>
            (i._QTS_FreeVoidPointer = O.O)(p, h)),
          (i._QTS_FreeCString = (p, h) => (i._QTS_FreeCString = O.P)(p, h)),
          (i._QTS_DupValuePointer = (p, h) =>
            (i._QTS_DupValuePointer = O.Q)(p, h)),
          (i._QTS_NewObject = (p) => (i._QTS_NewObject = O.R)(p)),
          (i._QTS_NewObjectProto = (p, h) =>
            (i._QTS_NewObjectProto = O.S)(p, h)),
          (i._QTS_NewArray = (p) => (i._QTS_NewArray = O.T)(p)),
          (i._QTS_NewArrayBuffer = (p, h, w) =>
            (i._QTS_NewArrayBuffer = O.U)(p, h, w)),
          (i._QTS_NewFloat64 = (p, h) => (i._QTS_NewFloat64 = O.V)(p, h)),
          (i._QTS_GetFloat64 = (p, h) => (i._QTS_GetFloat64 = O.W)(p, h)),
          (i._QTS_NewString = (p, h) => (i._QTS_NewString = O.X)(p, h)),
          (i._QTS_GetString = (p, h) => (i._QTS_GetString = O.Y)(p, h)),
          (i._QTS_GetArrayBuffer = (p, h) =>
            (i._QTS_GetArrayBuffer = O.Z)(p, h)),
          (i._QTS_GetArrayBufferLength = (p, h) =>
            (i._QTS_GetArrayBufferLength = O._)(p, h)),
          (i._QTS_NewSymbol = (p, h, w) => (i._QTS_NewSymbol = O.$)(p, h, w)),
          (i._QTS_GetSymbolDescriptionOrKey = (p, h) =>
            (i._QTS_GetSymbolDescriptionOrKey = O.aa)(p, h)),
          (i._QTS_IsGlobalSymbol = (p, h) =>
            (i._QTS_IsGlobalSymbol = O.ba)(p, h)),
          (i._QTS_IsJobPending = (p) => (i._QTS_IsJobPending = O.ca)(p)),
          (i._QTS_ExecutePendingJob = (p, h, w) =>
            (i._QTS_ExecutePendingJob = O.da)(p, h, w)),
          (i._QTS_GetProp = (p, h, w) => (i._QTS_GetProp = O.ea)(p, h, w)),
          (i._QTS_GetPropNumber = (p, h, w) =>
            (i._QTS_GetPropNumber = O.fa)(p, h, w)),
          (i._QTS_SetProp = (p, h, w, $) =>
            (i._QTS_SetProp = O.ga)(p, h, w, $)),
          (i._QTS_DefineProp = (p, h, w, $, L, J, X, be, Dt) =>
            (i._QTS_DefineProp = O.ha)(p, h, w, $, L, J, X, be, Dt)),
          (i._QTS_GetOwnPropertyNames = (p, h, w, $, L) =>
            (i._QTS_GetOwnPropertyNames = O.ia)(p, h, w, $, L)),
          (i._QTS_Call = (p, h, w, $, L) =>
            (i._QTS_Call = O.ja)(p, h, w, $, L)),
          (i._QTS_ResolveException = (p, h) =>
            (i._QTS_ResolveException = O.ka)(p, h)),
          (i._QTS_Dump = (p, h) => (i._QTS_Dump = O.la)(p, h)),
          (i._QTS_Eval = (p, h, w, $, L, J) =>
            (i._QTS_Eval = O.ma)(p, h, w, $, L, J)),
          (i._QTS_GetModuleNamespace = (p, h) =>
            (i._QTS_GetModuleNamespace = O.na)(p, h)),
          (i._QTS_Typeof = (p, h) => (i._QTS_Typeof = O.oa)(p, h)),
          (i._QTS_GetLength = (p, h, w) => (i._QTS_GetLength = O.pa)(p, h, w)),
          (i._QTS_IsEqual = (p, h, w, $) =>
            (i._QTS_IsEqual = O.qa)(p, h, w, $)),
          (i._QTS_GetGlobalObject = (p) => (i._QTS_GetGlobalObject = O.ra)(p)),
          (i._QTS_NewPromiseCapability = (p, h) =>
            (i._QTS_NewPromiseCapability = O.sa)(p, h)),
          (i._QTS_PromiseState = (p, h) => (i._QTS_PromiseState = O.ta)(p, h)),
          (i._QTS_PromiseResult = (p, h) =>
            (i._QTS_PromiseResult = O.ua)(p, h)),
          (i._QTS_TestStringArg = (p) => (i._QTS_TestStringArg = O.va)(p)),
          (i._QTS_GetDebugLogEnabled = (p) =>
            (i._QTS_GetDebugLogEnabled = O.wa)(p)),
          (i._QTS_SetDebugLogEnabled = (p, h) =>
            (i._QTS_SetDebugLogEnabled = O.xa)(p, h)),
          (i._QTS_BuildIsDebug = () => (i._QTS_BuildIsDebug = O.ya)()),
          (i._QTS_BuildIsAsyncify = () => (i._QTS_BuildIsAsyncify = O.za)()),
          (i._QTS_NewFunction = (p, h, w) =>
            (i._QTS_NewFunction = O.Aa)(p, h, w)),
          (i._QTS_ArgvGetJSValueConstPointer = (p, h) =>
            (i._QTS_ArgvGetJSValueConstPointer = O.Ba)(p, h)),
          (i._QTS_RuntimeEnableInterruptHandler = (p) =>
            (i._QTS_RuntimeEnableInterruptHandler = O.Ca)(p)),
          (i._QTS_RuntimeDisableInterruptHandler = (p) =>
            (i._QTS_RuntimeDisableInterruptHandler = O.Da)(p)),
          (i._QTS_RuntimeEnableModuleLoader = (p, h) =>
            (i._QTS_RuntimeEnableModuleLoader = O.Ea)(p, h)),
          (i._QTS_RuntimeDisableModuleLoader = (p) =>
            (i._QTS_RuntimeDisableModuleLoader = O.Fa)(p)),
          (i._QTS_bjson_encode = (p, h) => (i._QTS_bjson_encode = O.Ga)(p, h)),
          (i._QTS_bjson_decode = (p, h) => (i._QTS_bjson_decode = O.Ha)(p, h)));
        var Qd = (p, h) => (Qd = O.Ja)(p, h),
          Jd = (p) => (Jd = O.Ka)(p),
          ga = (p) => (ga = O.La)(p),
          Kd = () => (Kd = O.Ma)();
        ((i.cwrap = (p, h, w, $) => {
          var L = !w || w.every((J) => J === "number" || J === "boolean");
          return h !== "string" && L && !$
            ? i["_" + p]
            : (...J) => Kg(p, h, w, J);
        }),
          (i.UTF8ToString = (p, h) => (p ? ot(C, p, h) : "")),
          (i.stringToUTF8 = (p, h, w) => ar(p, h, w)),
          (i.lengthBytesUTF8 = Wd));
        var li;
        G = function p() {
          (li || Xd(), li || (G = p));
        };
        function Xd() {
          function p() {
            if (!li && ((li = !0), (i.calledRun = !0), !v)) {
              if ((ma(M), r(i), i.onRuntimeInitialized?.(), i.postRun))
                for (
                  typeof i.postRun == "function" && (i.postRun = [i.postRun]);
                  i.postRun.length;
                ) {
                  var h = i.postRun.shift();
                  oe.unshift(h);
                }
              ma(oe);
            }
          }
          if (!(0 < ue)) {
            if (i.preRun)
              for (
                typeof i.preRun == "function" && (i.preRun = [i.preRun]);
                i.preRun.length;
              )
                te();
            (ma(W),
              0 < ue ||
                (i.setStatus
                  ? (i.setStatus("Running..."),
                    setTimeout(function () {
                      (setTimeout(function () {
                        i.setStatus("");
                      }, 1),
                        p());
                    }, 1))
                  : p()));
          }
        }
        if (i.preInit)
          for (
            typeof i.preInit == "function" && (i.preInit = [i.preInit]);
            0 < i.preInit.length;
          )
            i.preInit.pop()();
        return (Xd(), (n = a), n);
      };
    })()),
      (ux = sx));
  });
var q = _e(Ae(), 1);
function Tt(e) {
  var t = String(e);
  if (t === "[object Object]")
    try {
      t = JSON.stringify(e);
    } catch {}
  return t;
}
var oy = (function () {
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
      (e.prototype.unwrapOr = function (t) {
        return t;
      }),
      (e.prototype.expect = function (t) {
        throw new Error("".concat(t));
      }),
      (e.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (e.prototype.map = function (t) {
        return this;
      }),
      (e.prototype.mapOr = function (t, n) {
        return t;
      }),
      (e.prototype.mapOrElse = function (t, n) {
        return t();
      }),
      (e.prototype.or = function (t) {
        return t;
      }),
      (e.prototype.orElse = function (t) {
        return t();
      }),
      (e.prototype.andThen = function (t) {
        return this;
      }),
      (e.prototype.toResult = function (t) {
        return R(t);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new Hr(z);
      }),
      e
    );
  })(),
  z = new oy();
Object.freeze(z);
var ay = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.isSome = function () {
        return !0;
      }),
      (e.prototype.isNone = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var t = Object(this.value);
        return Symbol.iterator in t
          ? t[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.unwrapOr = function (t) {
        return this.value;
      }),
      (e.prototype.expect = function (t) {
        return this.value;
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.map = function (t) {
        return B(t(this.value));
      }),
      (e.prototype.mapOr = function (t, n) {
        return n(this.value);
      }),
      (e.prototype.mapOrElse = function (t, n) {
        return n(this.value);
      }),
      (e.prototype.or = function (t) {
        return this;
      }),
      (e.prototype.orElse = function (t) {
        return this;
      }),
      (e.prototype.andThen = function (t) {
        return t(this.value);
      }),
      (e.prototype.toResult = function (t) {
        return U(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new Hr(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(Tt(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  B = ay,
  ci;
(function (e) {
  function t() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    for (var a = [], s = 0, u = r; s < u.length; s++) {
      var l = u[s];
      if (l.isSome()) a.push(l.value);
      else return l;
    }
    return B(a);
  }
  e.all = t;
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    for (var a = 0, s = r; a < s.length; a++) {
      var u = s[a];
      if (u.isSome()) return u;
    }
    return z;
  }
  e.any = n;
  function i(r) {
    return r instanceof B || r === z;
  }
  e.isOption = i;
})(ci || (ci = {}));
var sr = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var i = 0, r = t.length, o; i < r; i++)
        (o || !(i in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, i)), (o[i] = t[i]));
    return e.concat(o || Array.prototype.slice.call(t));
  },
  sy = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.error = t;
      var n = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (n && n.length > 0 && n[0].includes("ErrImpl") && n.shift(),
        (this._stack = n.join(`
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
      (e.prototype.else = function (t) {
        return t;
      }),
      (e.prototype.unwrapOr = function (t) {
        return t;
      }),
      (e.prototype.expect = function (t) {
        throw new Error(
          ""
            .concat(t, " - Error: ")
            .concat(
              Tt(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.expectErr = function (t) {
        return this.error;
      }),
      (e.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              Tt(this.error),
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
      (e.prototype.map = function (t) {
        return this;
      }),
      (e.prototype.andThen = function (t) {
        return this;
      }),
      (e.prototype.mapErr = function (t) {
        return new R(t(this.error));
      }),
      (e.prototype.mapOr = function (t, n) {
        return t;
      }),
      (e.prototype.mapOrElse = function (t, n) {
        return t(this.error);
      }),
      (e.prototype.or = function (t) {
        return t;
      }),
      (e.prototype.orElse = function (t) {
        return t(this.error);
      }),
      (e.prototype.toOption = function () {
        return z;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(Tt(this.error), ")");
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
        return new Zr(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var R = sy,
  uy = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      this.value = t;
    }
    return (
      (e.prototype.isOk = function () {
        return !0;
      }),
      (e.prototype.isErr = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var t = Object(this.value);
        return Symbol.iterator in t
          ? t[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.else = function (t) {
        return this.value;
      }),
      (e.prototype.unwrapOr = function (t) {
        return this.value;
      }),
      (e.prototype.expect = function (t) {
        return this.value;
      }),
      (e.prototype.expectErr = function (t) {
        throw new Error(t);
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(Tt(this.value)), {
          cause: this.value,
        });
      }),
      (e.prototype.map = function (t) {
        return new U(t(this.value));
      }),
      (e.prototype.andThen = function (t) {
        return t(this.value);
      }),
      (e.prototype.mapErr = function (t) {
        return this;
      }),
      (e.prototype.mapOr = function (t, n) {
        return n(this.value);
      }),
      (e.prototype.mapOrElse = function (t, n) {
        return n(this.value);
      }),
      (e.prototype.or = function (t) {
        return this;
      }),
      (e.prototype.orElse = function (t) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return B(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(Tt(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new Zr(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var U = uy,
  di;
(function (e) {
  function t(s) {
    for (var u = [], l = 1; l < arguments.length; l++) u[l - 1] = arguments[l];
    for (
      var c = s === void 0 ? [] : Array.isArray(s) ? s : sr([s], u, !0),
        d = [],
        f = 0,
        _ = c;
      f < _.length;
      f++
    ) {
      var g = _[f];
      if (g.isOk()) d.push(g.value);
      else return g;
    }
    return new U(d);
  }
  e.all = t;
  function n(s) {
    for (var u = [], l = 1; l < arguments.length; l++) u[l - 1] = arguments[l];
    for (
      var c = s === void 0 ? [] : Array.isArray(s) ? s : sr([s], u, !0),
        d = [],
        f = 0,
        _ = c;
      f < _.length;
      f++
    ) {
      var g = _[f];
      if (g.isOk()) return g;
      d.push(g.error);
    }
    return new R(d);
  }
  e.any = n;
  function i(s) {
    try {
      return new U(s());
    } catch (u) {
      return new R(u);
    }
  }
  e.wrap = i;
  function r(s) {
    try {
      return s()
        .then(function (u) {
          return new U(u);
        })
        .catch(function (u) {
          return new R(u);
        });
    } catch (u) {
      return Promise.resolve(new R(u));
    }
  }
  e.wrapAsync = r;
  function o(s) {
    return s.reduce(
      function (u, l) {
        var c = u[0],
          d = u[1];
        return l.isOk()
          ? [sr(sr([], c, !0), [l.value], !1), d]
          : [c, sr(sr([], d, !0), [l.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = o;
  function a(s) {
    return s instanceof R || s instanceof U;
  }
  e.isResult = a;
})(di || (di = {}));
var mi = function (e, t, n, i) {
    function r(o) {
      return o instanceof n
        ? o
        : new n(function (a) {
            a(o);
          });
    }
    return new (n || (n = Promise))(function (o, a) {
      function s(c) {
        try {
          l(i.next(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        try {
          l(i.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        c.done ? o(c.value) : r(c.value).then(s, u);
      }
      l((i = i.apply(e, t || [])).next());
    });
  },
  pi = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      i,
      r,
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
    function s(l) {
      return function (c) {
        return u([l, c]);
      };
    }
    function u(l) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), l[0] && (n = 0)), n; )
        try {
          if (
            ((i = 1),
            r &&
              (o =
                l[0] & 2
                  ? r.return
                  : l[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
              !(o = o.call(r, l[1])).done)
          )
            return o;
          switch (((r = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              return (n.label++, { value: l[1], done: !1 });
            case 5:
              (n.label++, (r = l[1]), (l = [0]));
              continue;
            case 7:
              ((l = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((o = n.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (l[0] === 6 || l[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                n.label = l[1];
                break;
              }
              if (l[0] === 6 && n.label < o[1]) {
                ((n.label = o[1]), (o = l));
                break;
              }
              if (o && n.label < o[2]) {
                ((n.label = o[2]), n.ops.push(l));
                break;
              }
              (o[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          l = t.call(e, n);
        } catch (c) {
          ((l = [6, c]), (r = 0));
        } finally {
          i = o = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  },
  Zr = (function () {
    function e(t) {
      this.promise = Promise.resolve(t);
    }
    return (
      (e.prototype.andThen = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return mi(n, void 0, void 0, function () {
            var r;
            return pi(this, function (o) {
              return i.isErr()
                ? [2, i]
                : ((r = t(i.value)), [2, r instanceof e ? r.promise : r]);
            });
          });
        });
      }),
      (e.prototype.map = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return mi(n, void 0, void 0, function () {
            var r;
            return pi(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isErr() ? [2, i] : ((r = U), [4, t(i.value)]);
                case 1:
                  return [2, r.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return mi(n, void 0, void 0, function () {
            var r;
            return pi(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isOk() ? [2, i] : ((r = R), [4, t(i.error)]);
                case 1:
                  return [2, r.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (t) {
        return this.orElse(function () {
          return t;
        });
      }),
      (e.prototype.orElse = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return mi(n, void 0, void 0, function () {
            var r;
            return pi(this, function (o) {
              return i.isOk()
                ? [2, i]
                : ((r = t(i.error)), [2, r instanceof e ? r.promise : r]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new Hr(
          this.promise.then(function (t) {
            return t.toOption();
          }),
        );
      }),
      (e.prototype.thenInternal = function (t) {
        return new e(this.promise.then(t));
      }),
      e
    );
  })();
var ba = function (e, t, n, i) {
    function r(o) {
      return o instanceof n
        ? o
        : new n(function (a) {
            a(o);
          });
    }
    return new (n || (n = Promise))(function (o, a) {
      function s(c) {
        try {
          l(i.next(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        try {
          l(i.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        c.done ? o(c.value) : r(c.value).then(s, u);
      }
      l((i = i.apply(e, t || [])).next());
    });
  },
  wa = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      i,
      r,
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
    function s(l) {
      return function (c) {
        return u([l, c]);
      };
    }
    function u(l) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), l[0] && (n = 0)), n; )
        try {
          if (
            ((i = 1),
            r &&
              (o =
                l[0] & 2
                  ? r.return
                  : l[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
              !(o = o.call(r, l[1])).done)
          )
            return o;
          switch (((r = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              return (n.label++, { value: l[1], done: !1 });
            case 5:
              (n.label++, (r = l[1]), (l = [0]));
              continue;
            case 7:
              ((l = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((o = n.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (l[0] === 6 || l[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                n.label = l[1];
                break;
              }
              if (l[0] === 6 && n.label < o[1]) {
                ((n.label = o[1]), (o = l));
                break;
              }
              if (o && n.label < o[2]) {
                ((n.label = o[2]), n.ops.push(l));
                break;
              }
              (o[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          l = t.call(e, n);
        } catch (c) {
          ((l = [6, c]), (r = 0));
        } finally {
          i = o = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  },
  Hr = (function () {
    function e(t) {
      this.promise = Promise.resolve(t);
    }
    return (
      (e.prototype.andThen = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return ba(n, void 0, void 0, function () {
            var r;
            return wa(this, function (o) {
              return i.isNone()
                ? [2, i]
                : ((r = t(i.value)), [2, r instanceof e ? r.promise : r]);
            });
          });
        });
      }),
      (e.prototype.map = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return ba(n, void 0, void 0, function () {
            var r;
            return wa(this, function (o) {
              switch (o.label) {
                case 0:
                  return i.isNone() ? [2, i] : ((r = B), [4, t(i.value)]);
                case 1:
                  return [2, r.apply(void 0, [o.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (t) {
        return this.orElse(function () {
          return t;
        });
      }),
      (e.prototype.orElse = function (t) {
        var n = this;
        return this.thenInternal(function (i) {
          return ba(n, void 0, void 0, function () {
            var r;
            return wa(this, function (o) {
              return i.isSome()
                ? [2, i]
                : ((r = t()), [2, r instanceof e ? r.promise : r]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (t) {
        return new Zr(
          this.promise.then(function (n) {
            return n.toResult(t);
          }),
        );
      }),
      (e.prototype.thenInternal = function (t) {
        return new e(this.promise.then(t));
      }),
      e
    );
  })();
function Se(e) {
  if (e.__serde_tag == "primitive") return e.__serde_val;
  if (e.__serde_tag == "object") {
    let t = {};
    for (let [n, i] of Object.entries(e.__serde_val)) {
      let r = i;
      t[n] = Se(r);
    }
    return t;
  } else {
    if (e.__serde_tag == "map")
      return new Map(e.__serde_val.map(([t, n]) => [Se(t), Se(n)]));
    if (e.__serde_tag == "set") return new Set(e.__serde_val.map(Se));
    if (e.__serde_tag == "url") return new URL(e.__serde_val);
    if (e.__serde_tag == "array") return e.__serde_val.map(Se);
    if (e.__serde_tag == "headers") return new Headers(e.__serde_val);
    if (e.__serde_tag == "regex")
      return new RegExp(e.__serde_val[0], e.__serde_val[1]);
    if (e.__serde_tag == "some") return B(Se(e.__serde_val));
    if (e.__serde_tag == "none") return z;
    if (e.__serde_tag == "ok") return U(Se(e.__serde_val));
    if (e.__serde_tag == "err") return R(Se(e.__serde_val));
    throw new Error("Unreachable");
  }
}
function ie(e) {
  if (typeof e == "string") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "number") return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e == "boolean")
    return { __serde_tag: "primitive", __serde_val: e };
  if (typeof e > "u") return { __serde_tag: "primitive", __serde_val: e };
  if (e == null) return { __serde_tag: "primitive", __serde_val: e };
  if (Array.isArray(e))
    return { __serde_tag: "array", __serde_val: e.map((t) => ie(t)) };
  if (e instanceof URL) return { __serde_tag: "url", __serde_val: e.href };
  if (e instanceof Headers) {
    let t = [];
    return (
      e.forEach((n, i) => {
        t.push([i, n]);
      }),
      { __serde_tag: "headers", __serde_val: t }
    );
  } else {
    if (e instanceof Set)
      return { __serde_tag: "set", __serde_val: [...e.values()].map(ie) };
    if (e instanceof Map)
      return {
        __serde_tag: "map",
        __serde_val: [...e.entries()].map(([t, n]) => [ie(t), ie(n)]),
      };
    if (e instanceof RegExp)
      return { __serde_tag: "regex", __serde_val: [e.source, e.flags] };
    if (ci.isOption(e))
      return e.isSome()
        ? { __serde_tag: "some", __serde_val: ie(e.value) }
        : { __serde_tag: "none" };
    if (di.isResult(e))
      return e.isOk()
        ? { __serde_tag: "ok", __serde_val: ie(e.value) }
        : { __serde_tag: "err", __serde_val: ie(e.error) };
    if (typeof e == "object") {
      let t = {};
      for (let [n, i] of Object.entries(e)) t[n] = ie(i);
      return { __serde_tag: "object", __serde_val: t };
    } else throw new Error("Unreachable");
  }
}
function je(e) {
  return Se(ie(e));
}
var $t = _e(Ae(), 1);
ze();
xa();
var Aa = new BroadcastChannel("worker_service");
function ur(e) {
  let t = kt.FromServiceToWorker;
  Aa.postMessage({ msg: e, channel: t });
}
function Ut(e) {
  let t = (n) => {
    let i = n.data.msg;
    n.data.channel == kt.FromWorkerToService && e(i);
  };
  return (
    Aa.addEventListener("message", t),
    () => {
      Aa.removeEventListener("message", t);
    }
  );
}
var kt = {
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
var _m = !1;
async function dy() {
  if (!Ee) {
    _m || ((_m = !0), await Promise.resolve().then(() => (pm(), cy)));
    return;
  }
  try {
    await chrome.offscreen.createDocument({
      url: "/factory/factory.html",
      reasons: [chrome.offscreen.Reason.WORKERS],
      justification: "Needed to create workers",
    });
  } catch (e) {
    if (
      (e instanceof Error ? e.message : e) !==
      "Only a single offscreen document may be created."
    )
      throw e;
  }
}
async function gi() {
  (await dy(),
    await new Promise((e, t) => {
      let n = setTimeout(() => {
          hi() && t("Timed out waiting for the worker to start");
        }, 1e4),
        i = Ut((r) => {
          r.name == "is_ready_success" && (clearTimeout(n), e(), i());
        });
      ur({ name: "is_ready", data: null });
    }));
}
ze();
function Ta(e, t) {
  let n = new URLSearchParams();
  for (let [i, r] of e) n.set(i, r);
  for (let [i, r] of t) n.set(i, r);
  return n.toString();
}
function xe(e, t) {
  try {
    if (e) return B(new URL(e, t));
  } catch {}
  return z;
}
function Le(e) {
  return e && e > 0 ? B(e) : z;
}
function ka(e) {
  return e && e > 0 ? B(e) : z;
}
var fm = ["mp4", "webm", "mkv"],
  hm = ["mp3", "m4a", "ogg"],
  Ia = [...fm, ...hm];
function gm(e) {
  return Ia.includes(e);
}
function Gr(e) {
  return fm.includes(e);
}
function jt(e) {
  return hm.includes(e);
}
function yi(e, t) {
  return Gr(e) ? ut(e, t) : my(e);
}
function my(e) {
  if (e == "mp3") return "mp3";
  if (e == "m4a") return "mp3";
  if (e == "ogg") return "mp3";
  throw new Error("Unreachable");
}
function ut(e, t) {
  if (e == "mp4") return t;
  if (e == "webm") return "mkv";
  if (e == "mkv") return "mkv";
  throw new Error("Unreachable");
}
var py = [
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
  ],
  _y = [
    { mime_reg: /(aac|mp4a.40).*/i, demuxer: "m4a", codec: "AAC" },
    { mime_reg: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i, demuxer: "mp3", codec: "MP3" },
    { mime_reg: /(opus|(mp4a\.ad.*))/i, demuxer: "ogg", codec: "Opus" },
    { mime_reg: /vorbis/i, demuxer: "ogg", codec: "Vorbis" },
  ];
function vi(e) {
  for (let t of py) if (t.mime_reg.test(e)) return B(t.demuxer);
  return z;
}
function ym(e) {
  for (let t of _y) if (t.mime_reg.test(e)) return B(t.demuxer);
  return z;
}
var vm = [
    { regex: /(?:x-)?(?:pn-)?wave?/i, audio: "wav", video: "wav" },
    { regex: /(?:x-)?3gpp2?/i, audio: "mp3", video: "3gpp" },
    { regex: /(?:x-)?flac/i, audio: "flac", video: "flac" },
    { regex: /(?:x-)?flv/i, audio: "mp3", video: "flv" },
    { regex: /(?:x-)?m4a/i, audio: "m4a", video: "m4a" },
    { regex: /(?:x-)?m4v/i, audio: "mp3", video: "m4v" },
    { regex: /(?:x-)?matroska/i, audio: "mp3", video: "mkv" },
    { regex: /(?:x-)?mov/i, audio: "mp3", video: "mov" },
    { regex: /(?:x-)?mp2t/i, audio: "mp3", video: "mp2t" },
    { regex: /(?:x-)?mp4/i, audio: "mp3", video: "mp4" },
    { regex: /(?:x-)?mpeg/i, audio: "mp3", video: "mpeg" },
    { regex: /(?:x-)?mts/i, audio: "mp3", video: "mt2s" },
    { regex: /(?:x-)?msvideo/i, audio: "avi", video: "avi" },
    { regex: /(?:x-)?og./i, audio: "oga", video: "ogv" },
    { regex: /(?:x-)?webm/i, audio: "oga", video: "webm" },
    { regex: /(?:x-)?mkv/i, audio: "mp3", video: "mkv" },
    { regex: /(?:x-)?vorbis/i, audio: "oga", video: "ogv" },
  ],
  fy = new Set([
    "3g2",
    "3gp",
    "aac",
    "ac3",
    "aiff",
    "amr",
    "ape",
    "asf",
    "au",
    "avi",
    "divx",
    "dts",
    "dv",
    "f4v",
    "flac",
    "flv",
    "h264",
    "m2t",
    "m2ts",
    "m2v",
    "m4a",
    "m4v",
    "mka",
    "mkv",
    "mov",
    "mp2",
    "mp3",
    "mp4",
    "mpe",
    "mpeg",
    "mpg",
    "mpv",
    "mts",
    "mxf",
    "oga",
    "ogg",
    "ogm",
    "ogv",
    "opus",
    "qt",
    "ra",
    "rm",
    "rmvb",
    "snd",
    "ts",
    "vob",
    "voc",
    "wav",
    "webm",
    "wma",
    "wmv",
    "wv",
    "y4m",
  ]);
function bm(e) {
  return fy.has(e);
}
function hy(e, t) {
  let o = e.size.map((l) => l.height).unwrapOr(0),
    a = t.size.map((l) => l.height).unwrapOr(0),
    s = e.bitrate.unwrapOr(0),
    u = t.bitrate.unwrapOr(0);
  return o > a ? -1 : o < a ? 1 : s > u ? -1 : s < u ? 1 : 0;
}
function wi(e, t) {
  if (e.prefered_entry.isSome() && e.playlist[e.prefered_entry.value])
    return e.prefered_entry.value;
  if (t)
    for (let n of Ia) {
      let i = 0;
      for (let { quality: r, demuxer: o } of e.playlist) {
        if (n == o && r.size.isSome() && r.size.value.height == t) return i;
        i++;
      }
    }
  else return 0;
  return 0;
}
function Si(e) {
  let t = e.playlist.find(
      (i) => i.quality.size.isSome() && i.quality.size.value.height == 480,
    ),
    n = e.playlist.find(
      (i) => i.quality.size.isSome() && i.quality.size.value.height == 260,
    );
  return t || n || e.playlist[e.playlist.length - 1];
}
function xi(e) {
  return [...e.values()].sort((t, n) => hy(t.quality, n.quality));
}
function Ai(e) {
  return e.length > 0;
}
function wm() {
  return {
    current_win_tab: { tab_id: z, win_id: z },
    notifications: new Map(),
    discovered: new Map(),
    downloading: new Map(),
    transient_history: [],
    suspecting_saveas: !1,
  };
}
var Di = (function () {
  function e() {
    this.listeners = {};
  }
  var t = e.prototype;
  return (
    (t.on = function (i, r) {
      (this.listeners[i] || (this.listeners[i] = []),
        this.listeners[i].push(r));
    }),
    (t.off = function (i, r) {
      if (!this.listeners[i]) return !1;
      var o = this.listeners[i].indexOf(r);
      return (
        (this.listeners[i] = this.listeners[i].slice(0)),
        this.listeners[i].splice(o, 1),
        o > -1
      );
    }),
    (t.trigger = function (i) {
      var r = this.listeners[i];
      if (r)
        if (arguments.length === 2)
          for (var o = r.length, a = 0; a < o; ++a)
            r[a].call(this, arguments[1]);
        else
          for (
            var s = Array.prototype.slice.call(arguments, 1),
              u = r.length,
              l = 0;
            l < u;
            ++l
          )
            r[l].apply(this, s);
    }),
    (t.dispose = function () {
      this.listeners = {};
    }),
    (t.pipe = function (i) {
      this.on("data", function (r) {
        i.push(r);
      });
    }),
    e
  );
})();
function Ft() {
  return (
    (Ft = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    Ft.apply(null, arguments)
  );
}
var $a = _e(Ei()),
  gy = function (t) {
    return $a.default.atob
      ? $a.default.atob(t)
      : Buffer.from(t, "base64").toString("binary");
  };
function Qr(e) {
  for (var t = gy(e), n = new Uint8Array(t.length), i = 0; i < t.length; i++)
    n[i] = t.charCodeAt(i);
  return n;
}
var Na = class extends Di {
    constructor() {
      (super(), (this.buffer = ""));
    }
    push(t) {
      let n;
      for (
        this.buffer += t,
          n = this.buffer.indexOf(`
`);
        n > -1;
        n = this.buffer.indexOf(`
`)
      )
        (this.trigger("data", this.buffer.substring(0, n)),
          (this.buffer = this.buffer.substring(n + 1)));
    }
  },
  yy = "	",
  Pa = function (e) {
    let t = /([0-9.]*)?@?([0-9.]*)?/.exec(e || ""),
      n = {};
    return (
      t[1] && (n.length = parseInt(t[1], 10)),
      t[2] && (n.offset = parseInt(t[2], 10)),
      n
    );
  },
  vy = function () {
    let n = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
    return new RegExp("(?:^|,)(" + n + ")");
  },
  Te = function (e) {
    let t = {};
    if (!e) return t;
    let n = e.split(vy()),
      i = n.length,
      r;
    for (; i--; )
      n[i] !== "" &&
        ((r = /([^=]*)=(.*)/.exec(n[i]).slice(1)),
        (r[0] = r[0].replace(/^\s+|\s+$/g, "")),
        (r[1] = r[1].replace(/^\s+|\s+$/g, "")),
        (r[1] = r[1].replace(/^['"](.*)['"]$/g, "$1")),
        (t[r[0]] = r[1]));
    return t;
  },
  Am = (e) => {
    let t = e.split("x"),
      n = {};
    return (
      t[0] && (n.width = parseInt(t[0], 10)),
      t[1] && (n.height = parseInt(t[1], 10)),
      n
    );
  },
  Oa = class extends Di {
    constructor() {
      (super(), (this.customParsers = []), (this.tagMappers = []));
    }
    push(t) {
      let n, i;
      if (((t = t.trim()), t.length === 0)) return;
      if (t[0] !== "#") {
        this.trigger("data", { type: "uri", uri: t });
        return;
      }
      this.tagMappers
        .reduce(
          (o, a) => {
            let s = a(t);
            return s === t ? o : o.concat([s]);
          },
          [t],
        )
        .forEach((o) => {
          for (let a = 0; a < this.customParsers.length; a++)
            if (this.customParsers[a].call(this, o)) return;
          if (o.indexOf("#EXT") !== 0) {
            this.trigger("data", { type: "comment", text: o.slice(1) });
            return;
          }
          if (((o = o.replace("\r", "")), (n = /^#EXTM3U/.exec(o)), n)) {
            this.trigger("data", { type: "tag", tagType: "m3u" });
            return;
          }
          if (((n = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "inf" }),
              n[1] && (i.duration = parseFloat(n[1])),
              n[2] && (i.title = n[2]),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "targetduration" }),
              n[1] && (i.duration = parseInt(n[1], 10)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-VERSION:([0-9.]*)?/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "version" }),
              n[1] && (i.version = parseInt(n[1], 10)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "media-sequence" }),
              n[1] && (i.number = parseInt(n[1], 10)),
              this.trigger("data", i));
            return;
          }
          if (
            ((n = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(o)), n)
          ) {
            ((i = { type: "tag", tagType: "discontinuity-sequence" }),
              n[1] && (i.number = parseInt(n[1], 10)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "playlist-type" }),
              n[1] && (i.playlistType = n[1]),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-BYTERANGE:(.*)?$/.exec(o)), n)) {
            ((i = Ft(Pa(n[1]), { type: "tag", tagType: "byterange" })),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "allow-cache" }),
              n[1] && (i.allowed = !/NO/.test(n[1])),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-MAP:(.*)$/.exec(o)), n)) {
            if (((i = { type: "tag", tagType: "map" }), n[1])) {
              let a = Te(n[1]);
              (a.URI && (i.uri = a.URI),
                a.BYTERANGE && (i.byterange = Pa(a.BYTERANGE)));
            }
            this.trigger("data", i);
            return;
          }
          if (((n = /^#EXT-X-STREAM-INF:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "stream-inf" }),
              n[1] &&
                ((i.attributes = Te(n[1])),
                i.attributes.RESOLUTION &&
                  (i.attributes.RESOLUTION = Am(i.attributes.RESOLUTION)),
                i.attributes.BANDWIDTH &&
                  (i.attributes.BANDWIDTH = parseInt(
                    i.attributes.BANDWIDTH,
                    10,
                  )),
                i.attributes["FRAME-RATE"] &&
                  (i.attributes["FRAME-RATE"] = parseFloat(
                    i.attributes["FRAME-RATE"],
                  )),
                i.attributes["PROGRAM-ID"] &&
                  (i.attributes["PROGRAM-ID"] = parseInt(
                    i.attributes["PROGRAM-ID"],
                    10,
                  ))),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-MEDIA:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "media" }),
              n[1] && (i.attributes = Te(n[1])),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-ENDLIST/.exec(o)), n)) {
            this.trigger("data", { type: "tag", tagType: "endlist" });
            return;
          }
          if (((n = /^#EXT-X-DISCONTINUITY/.exec(o)), n)) {
            this.trigger("data", { type: "tag", tagType: "discontinuity" });
            return;
          }
          if (((n = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "program-date-time" }),
              n[1] &&
                ((i.dateTimeString = n[1]),
                (i.dateTimeObject = new Date(n[1]))),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-KEY:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "key" }),
              n[1] &&
                ((i.attributes = Te(n[1])),
                i.attributes.IV &&
                  (i.attributes.IV.substring(0, 2).toLowerCase() === "0x" &&
                    (i.attributes.IV = i.attributes.IV.substring(2)),
                  (i.attributes.IV = i.attributes.IV.match(/.{8}/g)),
                  (i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16)),
                  (i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16)),
                  (i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16)),
                  (i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16)),
                  (i.attributes.IV = new Uint32Array(i.attributes.IV)))),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-START:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "start" }),
              n[1] &&
                ((i.attributes = Te(n[1])),
                (i.attributes["TIME-OFFSET"] = parseFloat(
                  i.attributes["TIME-OFFSET"],
                )),
                (i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE))),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "cue-out-cont" }),
              n[1] ? (i.data = n[1]) : (i.data = ""),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-CUE-OUT:(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "cue-out" }),
              n[1] ? (i.data = n[1]) : (i.data = ""),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-CUE-IN:?(.*)?$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "cue-in" }),
              n[1] ? (i.data = n[1]) : (i.data = ""),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-SKIP:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "skip" }),
              (i.attributes = Te(n[1])),
              i.attributes.hasOwnProperty("SKIPPED-SEGMENTS") &&
                (i.attributes["SKIPPED-SEGMENTS"] = parseInt(
                  i.attributes["SKIPPED-SEGMENTS"],
                  10,
                )),
              i.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") &&
                (i.attributes["RECENTLY-REMOVED-DATERANGES"] =
                  i.attributes["RECENTLY-REMOVED-DATERANGES"].split(yy)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-PART:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "part" }),
              (i.attributes = Te(n[1])),
              ["DURATION"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = parseFloat(i.attributes[a]));
              }),
              ["INDEPENDENT", "GAP"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = /YES/.test(i.attributes[a]));
              }),
              i.attributes.hasOwnProperty("BYTERANGE") &&
                (i.attributes.byterange = Pa(i.attributes.BYTERANGE)),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "server-control" }),
              (i.attributes = Te(n[1])),
              ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(
                function (a) {
                  i.attributes.hasOwnProperty(a) &&
                    (i.attributes[a] = parseFloat(i.attributes[a]));
                },
              ),
              ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = /YES/.test(i.attributes[a]));
              }),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-PART-INF:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "part-inf" }),
              (i.attributes = Te(n[1])),
              ["PART-TARGET"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = parseFloat(i.attributes[a]));
              }),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "preload-hint" }),
              (i.attributes = Te(n[1])),
              ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (a) {
                if (i.attributes.hasOwnProperty(a)) {
                  i.attributes[a] = parseInt(i.attributes[a], 10);
                  let s = a === "BYTERANGE-LENGTH" ? "length" : "offset";
                  ((i.attributes.byterange = i.attributes.byterange || {}),
                    (i.attributes.byterange[s] = i.attributes[a]),
                    delete i.attributes[a]);
                }
              }),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "rendition-report" }),
              (i.attributes = Te(n[1])),
              ["LAST-MSN", "LAST-PART"].forEach(function (a) {
                i.attributes.hasOwnProperty(a) &&
                  (i.attributes[a] = parseInt(i.attributes[a], 10));
              }),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-DATERANGE:(.*)$/.exec(o)), n && n[1])) {
            ((i = { type: "tag", tagType: "daterange" }),
              (i.attributes = Te(n[1])),
              ["ID", "CLASS"].forEach(function (s) {
                i.attributes.hasOwnProperty(s) &&
                  (i.attributes[s] = String(i.attributes[s]));
              }),
              ["START-DATE", "END-DATE"].forEach(function (s) {
                i.attributes.hasOwnProperty(s) &&
                  (i.attributes[s] = new Date(i.attributes[s]));
              }),
              ["DURATION", "PLANNED-DURATION"].forEach(function (s) {
                i.attributes.hasOwnProperty(s) &&
                  (i.attributes[s] = parseFloat(i.attributes[s]));
              }),
              ["END-ON-NEXT"].forEach(function (s) {
                i.attributes.hasOwnProperty(s) &&
                  (i.attributes[s] = /YES/i.test(i.attributes[s]));
              }),
              ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function (s) {
                i.attributes.hasOwnProperty(s) &&
                  (i.attributes[s] = i.attributes[s].toString(16));
              }));
            let a = /^X-([A-Z]+-)+[A-Z]+$/;
            for (let s in i.attributes) {
              if (!a.test(s)) continue;
              let u = /[0-9A-Fa-f]{6}/g.test(i.attributes[s]),
                l = /^\d+(\.\d+)?$/.test(i.attributes[s]);
              i.attributes[s] = u
                ? i.attributes[s].toString(16)
                : l
                  ? parseFloat(i.attributes[s])
                  : String(i.attributes[s]);
            }
            this.trigger("data", i);
            return;
          }
          if (((n = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(o)), n)) {
            this.trigger("data", {
              type: "tag",
              tagType: "independent-segments",
            });
            return;
          }
          if (((n = /^#EXT-X-I-FRAMES-ONLY/.exec(o)), n)) {
            this.trigger("data", { type: "tag", tagType: "i-frames-only" });
            return;
          }
          if (((n = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "content-steering" }),
              (i.attributes = Te(n[1])),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "i-frame-playlist" }),
              (i.attributes = Te(n[1])),
              i.attributes.URI && (i.uri = i.attributes.URI),
              i.attributes.BANDWIDTH &&
                (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)),
              i.attributes.RESOLUTION &&
                (i.attributes.RESOLUTION = Am(i.attributes.RESOLUTION)),
              i.attributes["AVERAGE-BANDWIDTH"] &&
                (i.attributes["AVERAGE-BANDWIDTH"] = parseInt(
                  i.attributes["AVERAGE-BANDWIDTH"],
                  10,
                )),
              i.attributes["FRAME-RATE"] &&
                (i.attributes["FRAME-RATE"] = parseFloat(
                  i.attributes["FRAME-RATE"],
                )),
              this.trigger("data", i));
            return;
          }
          if (((n = /^#EXT-X-DEFINE:(.*)$/.exec(o)), n)) {
            ((i = { type: "tag", tagType: "define" }),
              (i.attributes = Te(n[1])),
              this.trigger("data", i));
            return;
          }
          this.trigger("data", { type: "tag", data: o.slice(4) });
        });
    }
    addParser({ expression: t, customType: n, dataParser: i, segment: r }) {
      (typeof i != "function" && (i = (o) => o),
        this.customParsers.push((o) => {
          if (t.exec(o))
            return (
              this.trigger("data", {
                type: "custom",
                data: i(o),
                customType: n,
                segment: r,
              }),
              !0
            );
        }));
    }
    addTagMapper({ expression: t, map: n }) {
      let i = (r) => (t.test(r) ? n(r) : r);
      this.tagMappers.push(i);
    }
  },
  by = (e) => e.toLowerCase().replace(/-(\w)/g, (t) => t[1].toUpperCase()),
  It = function (e) {
    let t = {};
    return (
      Object.keys(e).forEach(function (n) {
        t[by(n)] = e[n];
      }),
      t
    );
  },
  za = function (e) {
    let { serverControl: t, targetDuration: n, partTargetDuration: i } = e;
    if (!t) return;
    let r = "#EXT-X-SERVER-CONTROL",
      o = "holdBack",
      a = "partHoldBack",
      s = n && n * 3,
      u = i && i * 2;
    (n &&
      !t.hasOwnProperty(o) &&
      ((t[o] = s),
      this.trigger("info", {
        message: `${r} defaulting HOLD-BACK to targetDuration * 3 (${s}).`,
      })),
      s &&
        t[o] < s &&
        (this.trigger("warn", {
          message: `${r} clamping HOLD-BACK (${t[o]}) to targetDuration * 3 (${s})`,
        }),
        (t[o] = s)),
      i &&
        !t.hasOwnProperty(a) &&
        ((t[a] = i * 3),
        this.trigger("info", {
          message: `${r} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t[a]}).`,
        })),
      i &&
        t[a] < u &&
        (this.trigger("warn", {
          message: `${r} clamping PART-HOLD-BACK (${t[a]}) to partTargetDuration * 2 (${u}).`,
        }),
        (t[a] = u)));
  },
  Jr = class extends Di {
    constructor(t = {}) {
      (super(),
        (this.lineStream = new Na()),
        (this.parseStream = new Oa()),
        this.lineStream.pipe(this.parseStream),
        (this.mainDefinitions = t.mainDefinitions || {}),
        (this.params = new URL(t.uri, "https://a.com").searchParams),
        (this.lastProgramDateTime = null));
      let n = this,
        i = [],
        r = {},
        o,
        a,
        s = !1,
        u = function () {},
        l = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} },
        c = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
        d = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        iFramePlaylists: [],
        segments: [],
      };
      let f = 0,
        _ = 0,
        g = {};
      (this.on("end", () => {
        r.uri ||
          (!r.parts && !r.preloadHints) ||
          (!r.map && o && (r.map = o),
          !r.key && a && (r.key = a),
          !r.timeline && typeof d == "number" && (r.timeline = d),
          (this.manifest.preloadSegment = r));
      }),
        this.parseStream.on("data", function (m) {
          let A, D;
          if (n.manifest.definitions) {
            for (let S in n.manifest.definitions)
              if (
                (m.uri &&
                  (m.uri = m.uri.replace(`{$${S}}`, n.manifest.definitions[S])),
                m.attributes)
              )
                for (let v in m.attributes)
                  typeof m.attributes[v] == "string" &&
                    (m.attributes[v] = m.attributes[v].replace(
                      `{$${S}}`,
                      n.manifest.definitions[S],
                    ));
          }
          ({
            tag() {
              (
                ({
                  version() {
                    m.version && (this.manifest.version = m.version);
                  },
                  "allow-cache"() {
                    ((this.manifest.allowCache = m.allowed),
                      "allowed" in m ||
                        (this.trigger("info", {
                          message: "defaulting allowCache to YES",
                        }),
                        (this.manifest.allowCache = !0)));
                  },
                  byterange() {
                    let S = {};
                    ("length" in m &&
                      ((r.byterange = S),
                      (S.length = m.length),
                      "offset" in m || (m.offset = f)),
                      "offset" in m &&
                        ((r.byterange = S), (S.offset = m.offset)),
                      (f = S.offset + S.length));
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
                      m.title && (r.title = m.title),
                      m.duration > 0 && (r.duration = m.duration),
                      m.duration === 0 &&
                        ((r.duration = 0.01),
                        this.trigger("info", {
                          message:
                            "updating zero segment duration to a small value",
                        })),
                      (this.manifest.segments = i));
                  },
                  key() {
                    if (!m.attributes) {
                      this.trigger("warn", {
                        message:
                          "ignoring key declaration without attribute list",
                      });
                      return;
                    }
                    if (m.attributes.METHOD === "NONE") {
                      a = null;
                      return;
                    }
                    if (!m.attributes.URI) {
                      this.trigger("warn", {
                        message: "ignoring key declaration without URI",
                      });
                      return;
                    }
                    if (
                      m.attributes.KEYFORMAT ===
                      "com.apple.streamingkeydelivery"
                    ) {
                      ((this.manifest.contentProtection =
                        this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection["com.apple.fps.1_0"] =
                          { attributes: m.attributes }));
                      return;
                    }
                    if (m.attributes.KEYFORMAT === "com.microsoft.playready") {
                      ((this.manifest.contentProtection =
                        this.manifest.contentProtection || {}),
                        (this.manifest.contentProtection[
                          "com.microsoft.playready"
                        ] = { uri: m.attributes.URI }));
                      return;
                    }
                    if (m.attributes.KEYFORMAT === c) {
                      if (
                        [
                          "SAMPLE-AES",
                          "SAMPLE-AES-CTR",
                          "SAMPLE-AES-CENC",
                        ].indexOf(m.attributes.METHOD) === -1
                      ) {
                        this.trigger("warn", {
                          message: "invalid key method provided for Widevine",
                        });
                        return;
                      }
                      if (
                        (m.attributes.METHOD === "SAMPLE-AES-CENC" &&
                          this.trigger("warn", {
                            message:
                              "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead",
                          }),
                        m.attributes.URI.substring(0, 23) !==
                          "data:text/plain;base64,")
                      ) {
                        this.trigger("warn", {
                          message: "invalid key URI provided for Widevine",
                        });
                        return;
                      }
                      if (
                        !(
                          m.attributes.KEYID &&
                          m.attributes.KEYID.substring(0, 2) === "0x"
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
                              schemeIdUri: m.attributes.KEYFORMAT,
                              keyId: m.attributes.KEYID.substring(2),
                            },
                            pssh: Qr(m.attributes.URI.split(",")[1]),
                          }));
                      return;
                    }
                    (m.attributes.METHOD ||
                      this.trigger("warn", {
                        message: "defaulting key method to AES-128",
                      }),
                      (a = {
                        method: m.attributes.METHOD || "AES-128",
                        uri: m.attributes.URI,
                      }),
                      typeof m.attributes.IV < "u" && (a.iv = m.attributes.IV));
                  },
                  "media-sequence"() {
                    if (!isFinite(m.number)) {
                      this.trigger("warn", {
                        message: "ignoring invalid media sequence: " + m.number,
                      });
                      return;
                    }
                    this.manifest.mediaSequence = m.number;
                  },
                  "discontinuity-sequence"() {
                    if (!isFinite(m.number)) {
                      this.trigger("warn", {
                        message:
                          "ignoring invalid discontinuity sequence: " +
                          m.number,
                      });
                      return;
                    }
                    ((this.manifest.discontinuitySequence = m.number),
                      (d = m.number));
                  },
                  "playlist-type"() {
                    if (!/VOD|EVENT/.test(m.playlistType)) {
                      this.trigger("warn", {
                        message:
                          "ignoring unknown playlist type: " + m.playlist,
                      });
                      return;
                    }
                    this.manifest.playlistType = m.playlistType;
                  },
                  map() {
                    ((o = {}),
                      m.uri && (o.uri = m.uri),
                      m.byterange && (o.byterange = m.byterange),
                      a && (o.key = a));
                  },
                  "stream-inf"() {
                    if (
                      ((this.manifest.playlists = i),
                      (this.manifest.mediaGroups =
                        this.manifest.mediaGroups || l),
                      !m.attributes)
                    ) {
                      this.trigger("warn", {
                        message: "ignoring empty stream-inf attributes",
                      });
                      return;
                    }
                    (r.attributes || (r.attributes = {}),
                      Ft(r.attributes, m.attributes));
                  },
                  media() {
                    if (
                      ((this.manifest.mediaGroups =
                        this.manifest.mediaGroups || l),
                      !(
                        m.attributes &&
                        m.attributes.TYPE &&
                        m.attributes["GROUP-ID"] &&
                        m.attributes.NAME
                      ))
                    ) {
                      this.trigger("warn", {
                        message: "ignoring incomplete or missing media group",
                      });
                      return;
                    }
                    let S = this.manifest.mediaGroups[m.attributes.TYPE];
                    ((S[m.attributes["GROUP-ID"]] =
                      S[m.attributes["GROUP-ID"]] || {}),
                      (A = S[m.attributes["GROUP-ID"]]),
                      (D = { default: /yes/i.test(m.attributes.DEFAULT) }),
                      D.default
                        ? (D.autoselect = !0)
                        : (D.autoselect = /yes/i.test(m.attributes.AUTOSELECT)),
                      m.attributes.LANGUAGE &&
                        (D.language = m.attributes.LANGUAGE),
                      m.attributes.URI && (D.uri = m.attributes.URI),
                      m.attributes["INSTREAM-ID"] &&
                        (D.instreamId = m.attributes["INSTREAM-ID"]),
                      m.attributes.CHARACTERISTICS &&
                        (D.characteristics = m.attributes.CHARACTERISTICS),
                      m.attributes.FORCED &&
                        (D.forced = /yes/i.test(m.attributes.FORCED)),
                      (A[m.attributes.NAME] = D));
                  },
                  discontinuity() {
                    ((d += 1),
                      (r.discontinuity = !0),
                      this.manifest.discontinuityStarts.push(i.length));
                  },
                  "program-date-time"() {
                    (typeof this.manifest.dateTimeString > "u" &&
                      ((this.manifest.dateTimeString = m.dateTimeString),
                      (this.manifest.dateTimeObject = m.dateTimeObject)),
                      (r.dateTimeString = m.dateTimeString),
                      (r.dateTimeObject = m.dateTimeObject));
                    let { lastProgramDateTime: S } = this;
                    ((this.lastProgramDateTime = new Date(
                      m.dateTimeString,
                    ).getTime()),
                      S === null &&
                        this.manifest.segments.reduceRight(
                          (v, b) => (
                            (b.programDateTime = v - b.duration * 1e3),
                            b.programDateTime
                          ),
                          this.lastProgramDateTime,
                        ));
                  },
                  targetduration() {
                    if (!isFinite(m.duration) || m.duration < 0) {
                      this.trigger("warn", {
                        message:
                          "ignoring invalid target duration: " + m.duration,
                      });
                      return;
                    }
                    ((this.manifest.targetDuration = m.duration),
                      za.call(this, this.manifest));
                  },
                  start() {
                    if (!m.attributes || isNaN(m.attributes["TIME-OFFSET"])) {
                      this.trigger("warn", {
                        message:
                          "ignoring start declaration without appropriate attribute list",
                      });
                      return;
                    }
                    this.manifest.start = {
                      timeOffset: m.attributes["TIME-OFFSET"],
                      precise: m.attributes.PRECISE,
                    };
                  },
                  "cue-out"() {
                    r.cueOut = m.data;
                  },
                  "cue-out-cont"() {
                    r.cueOutCont = m.data;
                  },
                  "cue-in"() {
                    r.cueIn = m.data;
                  },
                  skip() {
                    ((this.manifest.skip = It(m.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-SKIP",
                        m.attributes,
                        ["SKIPPED-SEGMENTS"],
                      ));
                  },
                  part() {
                    s = !0;
                    let S = this.manifest.segments.length,
                      v = It(m.attributes);
                    ((r.parts = r.parts || []),
                      r.parts.push(v),
                      v.byterange &&
                        (v.byterange.hasOwnProperty("offset") ||
                          (v.byterange.offset = _),
                        (_ = v.byterange.offset + v.byterange.length)));
                    let b = r.parts.length - 1;
                    (this.warnOnMissingAttributes_(
                      `#EXT-X-PART #${b} for segment #${S}`,
                      m.attributes,
                      ["URI", "DURATION"],
                    ),
                      this.manifest.renditionReports &&
                        this.manifest.renditionReports.forEach((T, C) => {
                          T.hasOwnProperty("lastPart") ||
                            this.trigger("warn", {
                              message: `#EXT-X-RENDITION-REPORT #${C} lacks required attribute(s): LAST-PART`,
                            });
                        }));
                  },
                  "server-control"() {
                    let S = (this.manifest.serverControl = It(m.attributes));
                    (S.hasOwnProperty("canBlockReload") ||
                      ((S.canBlockReload = !1),
                      this.trigger("info", {
                        message:
                          "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false",
                      })),
                      za.call(this, this.manifest),
                      S.canSkipDateranges &&
                        !S.hasOwnProperty("canSkipUntil") &&
                        this.trigger("warn", {
                          message:
                            "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set",
                        }));
                  },
                  "preload-hint"() {
                    let S = this.manifest.segments.length,
                      v = It(m.attributes),
                      b = v.type && v.type === "PART";
                    ((r.preloadHints = r.preloadHints || []),
                      r.preloadHints.push(v),
                      v.byterange &&
                        (v.byterange.hasOwnProperty("offset") ||
                          ((v.byterange.offset = b ? _ : 0),
                          b && (_ = v.byterange.offset + v.byterange.length))));
                    let T = r.preloadHints.length - 1;
                    if (
                      (this.warnOnMissingAttributes_(
                        `#EXT-X-PRELOAD-HINT #${T} for segment #${S}`,
                        m.attributes,
                        ["TYPE", "URI"],
                      ),
                      !!v.type)
                    )
                      for (let C = 0; C < r.preloadHints.length - 1; C++) {
                        let I = r.preloadHints[C];
                        I.type &&
                          I.type === v.type &&
                          this.trigger("warn", {
                            message: `#EXT-X-PRELOAD-HINT #${T} for segment #${S} has the same TYPE ${v.type} as preload hint #${C}`,
                          });
                      }
                  },
                  "rendition-report"() {
                    let S = It(m.attributes);
                    ((this.manifest.renditionReports =
                      this.manifest.renditionReports || []),
                      this.manifest.renditionReports.push(S));
                    let v = this.manifest.renditionReports.length - 1,
                      b = ["LAST-MSN", "URI"];
                    (s && b.push("LAST-PART"),
                      this.warnOnMissingAttributes_(
                        `#EXT-X-RENDITION-REPORT #${v}`,
                        m.attributes,
                        b,
                      ));
                  },
                  "part-inf"() {
                    ((this.manifest.partInf = It(m.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-PART-INF",
                        m.attributes,
                        ["PART-TARGET"],
                      ),
                      this.manifest.partInf.partTarget &&
                        (this.manifest.partTargetDuration =
                          this.manifest.partInf.partTarget),
                      za.call(this, this.manifest));
                  },
                  daterange() {
                    this.manifest.dateRanges.push(It(m.attributes));
                    let S = this.manifest.dateRanges.length - 1;
                    this.warnOnMissingAttributes_(
                      `#EXT-X-DATERANGE #${S}`,
                      m.attributes,
                      ["ID", "START-DATE"],
                    );
                    let v = this.manifest.dateRanges[S];
                    (v.endDate &&
                      v.startDate &&
                      new Date(v.endDate) < new Date(v.startDate) &&
                      this.trigger("warn", {
                        message:
                          "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE",
                      }),
                      v.duration &&
                        v.duration < 0 &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE DURATION must not be negative",
                        }),
                      v.plannedDuration &&
                        v.plannedDuration < 0 &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE PLANNED-DURATION must not be negative",
                        }));
                    let b = !!v.endOnNext;
                    if (
                      (b &&
                        !v.class &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute",
                        }),
                      b &&
                        (v.duration || v.endDate) &&
                        this.trigger("warn", {
                          message:
                            "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes",
                        }),
                      v.duration && v.endDate)
                    ) {
                      let C = v.startDate.getTime() + v.duration * 1e3;
                      this.manifest.dateRanges[S].endDate = new Date(C);
                    }
                    if (!g[v.id]) g[v.id] = v;
                    else {
                      for (let C in g[v.id])
                        if (
                          v[C] &&
                          JSON.stringify(g[v.id][C]) !== JSON.stringify(v[C])
                        ) {
                          this.trigger("warn", {
                            message:
                              "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values",
                          });
                          break;
                        }
                      let T = this.manifest.dateRanges.findIndex(
                        (C) => C.id === v.id,
                      );
                      ((this.manifest.dateRanges[T] = Ft(
                        this.manifest.dateRanges[T],
                        v,
                      )),
                        (g[v.id] = Ft(g[v.id], v)),
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
                    ((this.manifest.contentSteering = It(m.attributes)),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-CONTENT-STEERING",
                        m.attributes,
                        ["SERVER-URI"],
                      ));
                  },
                  define() {
                    this.manifest.definitions = this.manifest.definitions || {};
                    let S = (v, b) => {
                      if (v in this.manifest.definitions) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: Duplicate name ${v}`,
                        });
                        return;
                      }
                      this.manifest.definitions[v] = b;
                    };
                    if ("QUERYPARAM" in m.attributes) {
                      if ("NAME" in m.attributes || "IMPORT" in m.attributes) {
                        this.trigger("error", {
                          message: "EXT-X-DEFINE: Invalid attributes",
                        });
                        return;
                      }
                      let v = this.params.get(m.attributes.QUERYPARAM);
                      if (!v) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No query param ${m.attributes.QUERYPARAM}`,
                        });
                        return;
                      }
                      S(m.attributes.QUERYPARAM, decodeURIComponent(v));
                      return;
                    }
                    if ("NAME" in m.attributes) {
                      if ("IMPORT" in m.attributes) {
                        this.trigger("error", {
                          message: "EXT-X-DEFINE: Invalid attributes",
                        });
                        return;
                      }
                      if (
                        !("VALUE" in m.attributes) ||
                        typeof m.attributes.VALUE != "string"
                      ) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value for ${m.attributes.NAME}`,
                        });
                        return;
                      }
                      S(m.attributes.NAME, m.attributes.VALUE);
                      return;
                    }
                    if ("IMPORT" in m.attributes) {
                      if (!this.mainDefinitions[m.attributes.IMPORT]) {
                        this.trigger("error", {
                          message: `EXT-X-DEFINE: No value ${m.attributes.IMPORT} to import, or IMPORT used on main playlist`,
                        });
                        return;
                      }
                      S(
                        m.attributes.IMPORT,
                        this.mainDefinitions[m.attributes.IMPORT],
                      );
                      return;
                    }
                    this.trigger("error", {
                      message: "EXT-X-DEFINE: No attribute",
                    });
                  },
                  "i-frame-playlist"() {
                    (this.manifest.iFramePlaylists.push({
                      attributes: m.attributes,
                      uri: m.uri,
                      timeline: d,
                    }),
                      this.warnOnMissingAttributes_(
                        "#EXT-X-I-FRAME-STREAM-INF",
                        m.attributes,
                        ["BANDWIDTH", "URI"],
                      ));
                  },
                })[m.tagType] || u
              ).call(n);
            },
            uri() {
              ((r.uri = m.uri),
                i.push(r),
                this.manifest.targetDuration &&
                  !("duration" in r) &&
                  (this.trigger("warn", {
                    message:
                      "defaulting segment duration to the target duration",
                  }),
                  (r.duration = this.manifest.targetDuration)),
                a && (r.key = a),
                (r.timeline = d),
                o && (r.map = o),
                (_ = 0),
                this.lastProgramDateTime !== null &&
                  ((r.programDateTime = this.lastProgramDateTime),
                  (this.lastProgramDateTime += r.duration * 1e3)),
                (r = {}));
            },
            comment() {},
            custom() {
              m.segment
                ? ((r.custom = r.custom || {}),
                  (r.custom[m.customType] = m.data))
                : ((this.manifest.custom = this.manifest.custom || {}),
                  (this.manifest.custom[m.customType] = m.data));
            },
          })[m.type].call(n);
        }));
    }
    requiredCompatibilityversion(t, n) {
      (t < n || !t) &&
        this.trigger("warn", {
          message: `manifest must be at least version ${n}`,
        });
    }
    warnOnMissingAttributes_(t, n, i) {
      let r = [];
      (i.forEach(function (o) {
        n.hasOwnProperty(o) || r.push(o);
      }),
        r.length &&
          this.trigger("warn", {
            message: `${t} lacks required attribute(s): ${r.join(", ")}`,
          }));
    }
    push(t) {
      this.lineStream.push(t);
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
    addParser(t) {
      this.parseStream.addParser(t);
    }
    addTagMapper(t) {
      this.parseStream.addTagMapper(t);
    }
  };
var wy = new Set([
  "com.microsoft.playready",
  "com.apple.streamingkeydelivery",
  "com.widevine.alpha",
]);
function Ti(e) {
  return Object.keys(e).some((t) => wy.has(t));
}
function lr(e) {
  let t;
  try {
    let r = new Jr();
    (r.push(e), r.end(), (t = r.manifest));
  } catch {}
  if (!t) return R("parse error");
  let n = t.segments;
  return !Array.isArray(n) || n.length == 0
    ? R("not a valid m3u8")
    : n.every((r) => {
          let a = r.uri.split(/[?#]/)[0];
          return a
            ? a
                .substring(a.lastIndexOf(".") + 1)
                .toLowerCase()
                .match(/vtt|srt|webvtt|ttml/)
            : !1;
        })
      ? R("subtitle playlist")
      : U(t);
}
function Sy(e) {
  let t = new Date(new Date().getTime() - 6e5);
  return !e.dateTimeObject && !e.programDateTime
    ? !1
    : typeof e.dateTimeObject == "object"
      ? e.dateTimeObject > t
      : typeof e.programDateTime == "number"
        ? e.programDateTime > t.getTime()
        : !1;
}
function ki(e) {
  if (
    !Array.isArray(e.segments) ||
    e.segments.some((i) => typeof i.duration != "number")
  )
    return "unknown";
  let t = e.segments[e.segments.length - 1];
  return t && Sy(t)
    ? "live"
    : e.segments.reduce(
        (i, r) => (typeof r.duration == "number" && (i += r.duration), i),
        0,
      );
}
async function Dm(e, t, n, i = !1, r = !1) {
  let o;
  try {
    let l = new Jr();
    (l.push(e), l.end(), (o = l.manifest));
  } catch {}
  if (!o) return R("parse error");
  if (!o.playlists) return R("Not a master M3U8");
  let a = o.playlists,
    s = o.mediaGroups.AUDIO ?? {},
    u = [];
  for (let l of a) {
    if (typeof l.uri != "string") continue;
    let c = "mp4";
    if (l.attributes.CODECS) {
      let D = vi(l.attributes.CODECS);
      if (D.isNone()) continue;
      c = D.value;
    }
    if (
      (!("FRAME-RATE" in l.attributes) && "RESOLUTION" in l.attributes,
      l.attributes["VIDEO-RANGE"] && l.attributes["VIDEO-RANGE"] == "PQ")
    )
      continue;
    let d = xe(l.uri, t.href);
    if (d.isNone()) continue;
    let f = z;
    if (l.attributes.AUDIO) {
      let D = s[l.attributes.AUDIO];
      if (D) {
        for (let S of Object.values(D))
          if (
            (S.uri && (f = xe(S.uri, t.href)),
            (n.isSome() && S.language && n.value.includes(S.language)) ||
              S.default)
          )
            break;
      }
    }
    let _ = z,
      g = z;
    (l.attributes.RESOLUTION &&
      (_ = B({
        height: l.attributes.RESOLUTION.height,
        width: l.attributes.RESOLUTION.width,
      })),
      l.attributes.BANDWIDTH && (g = B(l.attributes.BANDWIDTH)));
    let m = { size: _, bitrate: g },
      A = d.value;
    if (
      (i
        ? (A.search = Ta(A.searchParams, t.searchParams))
        : r && (A.search = ""),
      f.isSome())
    ) {
      let D = f.value;
      (i
        ? (D.search = Ta(A.searchParams, t.searchParams))
        : r && (D.search = ""),
        u.push({ demuxer: c, quality: m, av: { video: A, audio: D } }));
    } else u.push({ demuxer: c, quality: m, av: { video: A, audio: !1 } });
  }
  return ((u = xi(u)), Ai(u) ? U(u) : R("Empty playlist"));
}
function Ii(e) {
  return e.contentProtection ? Ti(e.contentProtection) : !1;
}
var Ra = _e(Ae(), 1),
  Em = [/^Sec-/i, /^Cookie$/i, /^Date$/i, /^Origin$/i, /^Referer$/i],
  Tm = [
    /Range/i,
    /^Proxy-/i,
    /^User-Agent$/i,
    /^Accept-Charset$/i,
    /^Accept-Encoding$/i,
    /^Access-Control-Request-Headers$/i,
    /^Access-Control-Request-Method$/i,
    /^Connection$/i,
    /^Content-Length$/i,
    /^DNT$/i,
    /^Expect$/i,
    /^Keep-Alive$/i,
    /^Permissions-Policy$/i,
    /^TE$/i,
    /^Trailer$/i,
    /^Transfer-Encoding$/i,
    /^Upgrade$/i,
    /^Via$/i,
    /^Host/i,
  ],
  xy = 750;
function $i(e) {
  return new URL(".", e).href + "*";
}
async function km(e) {
  let t = $i(e.url);
  return await Ca([t], e.headers);
}
async function Im(e) {
  let t = $m(e.headers);
  if (t.entries().next().done) return U([]);
  e.will_use_jsfetch ? Pm(e.headers) : Ma(e.headers);
  let n = e.will_use_jsfetch ? e.headers : t,
    i = [];
  (i.push(e.url),
    e.strategy == "m3u8_audio_video_two_sources" && i.push(e.url_audio));
  let r = [],
    o = new Set();
  for (let s of i) {
    let u = new URL(".", s).href + "*",
      l = await Pi([u], n);
    r = [...r, ...l];
    let c;
    try {
      c = await fetch(s, { headers: e.headers });
    } catch (m) {
      return (
        console.warn(
          `Unable to fetch m3u8 for creating headers. Continuing anyways. Error: ${m}`,
        ),
        U(r)
      );
    }
    if (!c.ok)
      return (
        console.warn(
          `Unable to fetch m3u8 for creating headers. Continuing anyways. Received status: ${c.statusText}`,
        ),
        U(r)
      );
    if (!c.body)
      return (
        console.warn(
          "Unable to fetch m3u8 for creating headers. No body. Continuing anyways.",
        ),
        U(r)
      );
    let d = await c.text(),
      f = lr(d);
    if (f.isErr())
      return (
        console.warn(
          `Error when parsing manifest to create headers. Continuing anyways. Error: ${f.error}`,
        ),
        U(r)
      );
    let _ = f.value;
    if (!Array.isArray(_.segments))
      return (
        console.warn(
          `Expected segments array when parsing m3u8: ${s}. Continuing anyways`,
        ),
        U(r)
      );
    if (!_.segments || _.segments.length == 0) return U(r);
    let g = xy / i.length;
    for (let m of _.segments) {
      let A = m.uri;
      if (A) {
        let v = new URL(A, s),
          b = $i(v);
        if ((o.add(b), o.size >= g)) break;
      }
      let D = m.map;
      if (D && "uri" in D) {
        let v = D.uri,
          b = new URL(v, s),
          T = $i(b);
        if (o.size < g && (o.add(T), o.size >= g)) break;
      }
      let S = m.key;
      if (S && "uri" in S) {
        let v = S.uri,
          b = new URL(v, s),
          T = $i(b);
        if (o.size < g && (o.add(T), o.size >= g)) break;
      }
    }
  }
  let a = [];
  return ((a = await Pi([...o], n)), U([...r, ...a]));
}
async function Ca(e, t) {
  return (Pm(t), Pi(e, t));
}
async function Lt(e, t) {
  let n = $m(t);
  return Pi(e, n);
}
async function Pi(e, t) {
  let n = [];
  if (
    (t.forEach((o, a) => {
      n.push({ operation: "set", header: a, value: o });
    }),
    n.length == 0)
  )
    return [];
  let i = [],
    r = [];
  for (let o of e) {
    let a = Math.ceil(Math.random() * 1e8);
    i.push(a);
    let s = {
      id: a,
      priority: 1,
      action: { type: "modifyHeaders", requestHeaders: n },
      condition: { urlFilter: o, resourceTypes: ["xmlhttprequest"] },
    };
    r.push(s);
  }
  try {
    await Ra.default.declarativeNetRequest.updateSessionRules({ addRules: r });
  } catch (o) {
    return (
      console.error("Error setting headers for urls"),
      console.error(o.toString()),
      []
    );
  }
  return i;
}
async function Bt(e) {
  if (e.length)
    try {
      await Ra.default.declarativeNetRequest.updateSessionRules({
        removeRuleIds: e,
      });
    } catch (t) {
      console.error(`Error when removing header rules: ${t.toString()}`);
    }
}
function $m(e) {
  let t = new Headers();
  return (
    e.forEach((n, i) => {
      for (let r of Em) i.match(r) && t.set(i, n);
    }),
    t
  );
}
function Pm(e) {
  let t = [];
  for (let n of e.keys())
    for (let i of Tm)
      if (n.match(i)) {
        t.push(n);
        break;
      }
  for (let n of t) e.delete(n);
}
function Ma(e) {
  let t = [];
  for (let n of e.keys()) {
    for (let i of Tm)
      if (n.match(i)) {
        t.push(n);
        break;
      }
    for (let i of Em)
      if (n.match(i)) {
        t.push(n);
        break;
      }
  }
  for (let n of t) e.delete(n);
}
function Ua(e) {
  return e.user_abort
    ? "User abort"
    : e.e4XX_5XX_failure
      ? `HTTP error. Status: ${e.status}.`
      : e.percentage_incomplete
        ? "Incomplete percentage."
        : `Error. ${e.message}.`;
}
function zi() {
  return {
    user_abort: !0,
    e4XX_5XX_failure: !1,
    other_failure: !1,
    percentage_incomplete: !1,
  };
}
var Um = _e(Ae(), 1),
  Ba = _e(Ae(), 1);
function Ay(e, t) {
  let n = e.slice(0, t).split(/\r\n|\n|\r/g);
  return [n.length, n.pop().length + 1];
}
function Dy(e, t, n) {
  let i = e.split(/\r\n|\n|\r/g),
    r = "",
    o = (Math.log10(t + 1) | 0) + 1;
  for (let a = t - 1; a <= t + 1; a++) {
    let s = i[a - 1];
    s &&
      ((r += a.toString().padEnd(o, " ")),
      (r += ":  "),
      (r += s),
      (r += `
`),
      a === t &&
        ((r += " ".repeat(o + n + 2)),
        (r += `^
`)));
  }
  return r;
}
var H = class extends Error {
  line;
  column;
  codeblock;
  constructor(t, n) {
    let [i, r] = Ay(n.toml, n.ptr),
      o = Dy(n.toml, i, r);
    (super(
      `Invalid TOML document: ${t}

${o}`,
      n,
    ),
      (this.line = i),
      (this.column = r),
      (this.codeblock = o));
  }
};
function cr(e, t = 0, n = e.length) {
  let i = e.indexOf(
    `
`,
    t,
  );
  return (e[i - 1] === "\r" && i--, i <= n ? i : -1);
}
function Kr(e, t) {
  for (let n = t; n < e.length; n++) {
    let i = e[n];
    if (
      i ===
      `
`
    )
      return n;
    if (
      i === "\r" &&
      e[n + 1] ===
        `
`
    )
      return n + 1;
    if ((i < " " && i !== "	") || i === "\x7F")
      throw new H("control characters are not allowed in comments", {
        toml: e,
        ptr: t,
      });
  }
  return e.length;
}
function Be(e, t, n, i) {
  let r;
  for (
    ;
    (r = e[t]) === " " ||
    r === "	" ||
    (!n &&
      (r ===
        `
` ||
        (r === "\r" &&
          e[t + 1] ===
            `
`)));
  )
    t++;
  return i || r !== "#" ? t : Be(e, Kr(e, t), n);
}
function ja(e, t, n, i, r = !1) {
  if (!i) return ((t = cr(e, t)), t < 0 ? e.length : t);
  for (let o = t; o < e.length; o++) {
    let a = e[o];
    if (a === "#") o = cr(e, o);
    else {
      if (a === n) return o + 1;
      if (
        a === i ||
        (r &&
          (a ===
            `
` ||
            (a === "\r" &&
              e[o + 1] ===
                `
`)))
      )
        return o;
    }
  }
  throw new H("cannot find end of structure", { toml: e, ptr: t });
}
function Ni(e, t) {
  let n = e[t],
    i = n === e[t + 1] && e[t + 1] === e[t + 2] ? e.slice(t, t + 3) : n;
  t += i.length - 1;
  do t = e.indexOf(i, ++t);
  while (
    t > -1 &&
    n !== "'" &&
    e[t - 1] === "\\" &&
    (e[t - 2] !== "\\" || e[t - 3] === "\\")
  );
  return (
    t > -1 &&
      ((t += i.length), i.length > 1 && (e[t] === n && t++, e[t] === n && t++)),
    t
  );
}
var Ey =
    /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}:\d{2}(?:\.\d+)?)?(Z|[-+]\d{2}:\d{2})?$/i,
  Xr = class e extends Date {
    #t = !1;
    #r = !1;
    #e = null;
    constructor(t) {
      let n = !0,
        i = !0,
        r = "Z";
      if (typeof t == "string") {
        let o = t.match(Ey);
        o
          ? (o[1] || ((n = !1), (t = `0000-01-01T${t}`)),
            (i = !!o[2]),
            i && t[10] === " " && (t = t.replace(" ", "T")),
            o[2] && +o[2] > 23
              ? (t = "")
              : ((r = o[3] || null),
                (t = t.toUpperCase()),
                !r && i && (t += "Z")))
          : (t = "");
      }
      (super(t),
        isNaN(this.getTime()) || ((this.#t = n), (this.#r = i), (this.#e = r)));
    }
    isDateTime() {
      return this.#t && this.#r;
    }
    isLocal() {
      return !this.#t || !this.#r || !this.#e;
    }
    isDate() {
      return this.#t && !this.#r;
    }
    isTime() {
      return this.#r && !this.#t;
    }
    isValid() {
      return this.#t || this.#r;
    }
    toISOString() {
      let t = super.toISOString();
      if (this.isDate()) return t.slice(0, 10);
      if (this.isTime()) return t.slice(11, 23);
      if (this.#e === null) return t.slice(0, -1);
      if (this.#e === "Z") return t;
      let n = +this.#e.slice(1, 3) * 60 + +this.#e.slice(4, 6);
      return (
        (n = this.#e[0] === "-" ? n : -n),
        new Date(this.getTime() - n * 6e4).toISOString().slice(0, -1) + this.#e
      );
    }
    static wrapAsOffsetDateTime(t, n = "Z") {
      let i = new e(t);
      return ((i.#e = n), i);
    }
    static wrapAsLocalDateTime(t) {
      let n = new e(t);
      return ((n.#e = null), n);
    }
    static wrapAsLocalDate(t) {
      let n = new e(t);
      return ((n.#r = !1), (n.#e = null), n);
    }
    static wrapAsLocalTime(t) {
      let n = new e(t);
      return ((n.#t = !1), (n.#e = null), n);
    }
  };
var Ty = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
  ky = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
  Iy = /^[+-]?0[0-9_]/,
  $y = /^[0-9a-f]{4,8}$/i,
  zm = {
    b: "\b",
    t: "	",
    n: `
`,
    f: "\f",
    r: "\r",
    '"': '"',
    "\\": "\\",
  };
function Oi(e, t = 0, n = e.length) {
  let i = e[t] === "'",
    r = e[t++] === e[t] && e[t] === e[t + 1];
  r &&
    ((n -= 2),
    e[(t += 2)] === "\r" && t++,
    e[t] ===
      `
` && t++);
  let o = 0,
    a,
    s = "",
    u = t;
  for (; t < n - 1; ) {
    let l = e[t++];
    if (
      l ===
        `
` ||
      (l === "\r" &&
        e[t] ===
          `
`)
    ) {
      if (!r)
        throw new H("newlines are not allowed in strings", {
          toml: e,
          ptr: t - 1,
        });
    } else if ((l < " " && l !== "	") || l === "\x7F")
      throw new H("control characters are not allowed in strings", {
        toml: e,
        ptr: t - 1,
      });
    if (a) {
      if (((a = !1), l === "u" || l === "U")) {
        let c = e.slice(t, (t += l === "u" ? 4 : 8));
        if (!$y.test(c))
          throw new H("invalid unicode escape", { toml: e, ptr: o });
        try {
          s += String.fromCodePoint(parseInt(c, 16));
        } catch {
          throw new H("invalid unicode escape", { toml: e, ptr: o });
        }
      } else if (
        r &&
        (l ===
          `
` ||
          l === " " ||
          l === "	" ||
          l === "\r")
      ) {
        if (
          ((t = Be(e, t - 1, !0)),
          e[t] !==
            `
` && e[t] !== "\r")
        )
          throw new H(
            "invalid escape: only line-ending whitespace may be escaped",
            { toml: e, ptr: o },
          );
        t = Be(e, t);
      } else if (l in zm) s += zm[l];
      else throw new H("unrecognized escape sequence", { toml: e, ptr: o });
      u = t;
    } else !i && l === "\\" && ((o = t - 1), (a = !0), (s += e.slice(u, o)));
  }
  return s + e.slice(u, n - 1);
}
function Nm(e, t, n, i) {
  if (e === "true") return !0;
  if (e === "false") return !1;
  if (e === "-inf") return -1 / 0;
  if (e === "inf" || e === "+inf") return 1 / 0;
  if (e === "nan" || e === "+nan" || e === "-nan") return NaN;
  if (e === "-0") return i ? 0n : 0;
  let r = Ty.test(e);
  if (r || ky.test(e)) {
    if (Iy.test(e))
      throw new H("leading zeroes are not allowed", { toml: t, ptr: n });
    e = e.replace(/_/g, "");
    let a = +e;
    if (isNaN(a)) throw new H("invalid number", { toml: t, ptr: n });
    if (r) {
      if ((r = !Number.isSafeInteger(a)) && !i)
        throw new H("integer value cannot be represented losslessly", {
          toml: t,
          ptr: n,
        });
      (r || i === !0) && (a = BigInt(e));
    }
    return a;
  }
  let o = new Xr(e);
  if (!o.isValid()) throw new H("invalid value", { toml: t, ptr: n });
  return o;
}
function Py(e, t, n, i) {
  let r = e.slice(t, n),
    o = r.indexOf("#");
  o > -1 && (Kr(e, o), (r = r.slice(0, o)));
  let a = r.trimEnd();
  if (!i) {
    let s = r.indexOf(
      `
`,
      a.length,
    );
    if (s > -1)
      throw new H("newlines are not allowed in inline tables", {
        toml: e,
        ptr: t + s,
      });
  }
  return [a, o];
}
function Yr(e, t, n, i, r) {
  if (i === 0)
    throw new H("document contains excessively nested structures. aborting.", {
      toml: e,
      ptr: t,
    });
  let o = e[t];
  if (o === "[" || o === "{") {
    let [u, l] = o === "[" ? Rm(e, t, i, r) : Om(e, t, i, r),
      c = n ? ja(e, l, ",", n) : l;
    if (l - c && n === "}") {
      let d = cr(e, l, c);
      if (d > -1)
        throw new H("newlines are not allowed in inline tables", {
          toml: e,
          ptr: d,
        });
    }
    return [u, c];
  }
  let a;
  if (o === '"' || o === "'") {
    a = Ni(e, t);
    let u = Oi(e, t, a);
    if (n) {
      if (
        ((a = Be(e, a, n !== "]")),
        e[a] &&
          e[a] !== "," &&
          e[a] !== n &&
          e[a] !==
            `
` &&
          e[a] !== "\r")
      )
        throw new H("unexpected character encountered", { toml: e, ptr: a });
      a += +(e[a] === ",");
    }
    return [u, a];
  }
  a = ja(e, t, ",", n);
  let s = Py(e, t, a - +(e[a - 1] === ","), n === "]");
  if (!s[0])
    throw new H("incomplete key-value declaration: no value specified", {
      toml: e,
      ptr: t,
    });
  return (
    n && s[1] > -1 && ((a = Be(e, t + s[1])), (a += +(e[a] === ","))),
    [Nm(s[0], e, t, r), a]
  );
}
var zy = /^[a-zA-Z0-9-_]+[ \t]*$/;
function Ri(e, t, n = "=") {
  let i = t - 1,
    r = [],
    o = e.indexOf(n, t);
  if (o < 0)
    throw new H("incomplete key-value: cannot find end of key", {
      toml: e,
      ptr: t,
    });
  do {
    let a = e[(t = ++i)];
    if (a !== " " && a !== "	")
      if (a === '"' || a === "'") {
        if (a === e[t + 1] && a === e[t + 2])
          throw new H("multiline strings are not allowed in keys", {
            toml: e,
            ptr: t,
          });
        let s = Ni(e, t);
        if (s < 0)
          throw new H("unfinished string encountered", { toml: e, ptr: t });
        i = e.indexOf(".", s);
        let u = e.slice(s, i < 0 || i > o ? o : i),
          l = cr(u);
        if (l > -1)
          throw new H("newlines are not allowed in keys", {
            toml: e,
            ptr: t + i + l,
          });
        if (u.trimStart())
          throw new H("found extra tokens after the string part", {
            toml: e,
            ptr: s,
          });
        if (o < s && ((o = e.indexOf(n, s)), o < 0))
          throw new H("incomplete key-value: cannot find end of key", {
            toml: e,
            ptr: t,
          });
        r.push(Oi(e, t, s));
      } else {
        i = e.indexOf(".", t);
        let s = e.slice(t, i < 0 || i > o ? o : i);
        if (!zy.test(s))
          throw new H(
            "only letter, numbers, dashes and underscores are allowed in keys",
            { toml: e, ptr: t },
          );
        r.push(s.trimEnd());
      }
  } while (i + 1 && i < o);
  return [r, Be(e, o + 1, !0, !0)];
}
function Om(e, t, n, i) {
  let r = {},
    o = new Set(),
    a,
    s = 0;
  for (t++; (a = e[t++]) !== "}" && a; ) {
    let u = { toml: e, ptr: t - 1 };
    if (
      a ===
      `
`
    )
      throw new H("newlines are not allowed in inline tables", u);
    if (a === "#") throw new H("inline tables cannot contain comments", u);
    if (a === ",") throw new H("expected key-value, found comma", u);
    if (a !== " " && a !== "	") {
      let l,
        c = r,
        d = !1,
        [f, _] = Ri(e, t - 1);
      for (let A = 0; A < f.length; A++) {
        if (
          (A && (c = d ? c[l] : (c[l] = {})),
          (l = f[A]),
          (d = Object.hasOwn(c, l)) && (typeof c[l] != "object" || o.has(c[l])))
        )
          throw new H("trying to redefine an already defined value", {
            toml: e,
            ptr: t,
          });
        !d &&
          l === "__proto__" &&
          Object.defineProperty(c, l, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
          });
      }
      if (d)
        throw new H("trying to redefine an already defined value", {
          toml: e,
          ptr: t,
        });
      let [g, m] = Yr(e, _, "}", n - 1, i);
      (o.add(g), (c[l] = g), (t = m), (s = e[t - 1] === "," ? t - 1 : 0));
    }
  }
  if (s)
    throw new H("trailing commas are not allowed in inline tables", {
      toml: e,
      ptr: s,
    });
  if (!a) throw new H("unfinished table encountered", { toml: e, ptr: t });
  return [r, t];
}
function Rm(e, t, n, i) {
  let r = [],
    o;
  for (t++; (o = e[t++]) !== "]" && o; ) {
    if (o === ",")
      throw new H("expected value, found comma", { toml: e, ptr: t - 1 });
    if (o === "#") t = Kr(e, t);
    else if (
      o !== " " &&
      o !== "	" &&
      o !==
        `
` &&
      o !== "\r"
    ) {
      let a = Yr(e, t - 1, "]", n - 1, i);
      (r.push(a[0]), (t = a[1]));
    }
  }
  if (!o) throw new H("unfinished array encountered", { toml: e, ptr: t });
  return [r, t];
}
function Cm(e, t, n, i) {
  let r = t,
    o = n,
    a,
    s = !1,
    u;
  for (let l = 0; l < e.length; l++) {
    if (l) {
      if (
        ((r = s ? r[a] : (r[a] = {})),
        (o = (u = o[a]).c),
        i === 0 && (u.t === 1 || u.t === 2))
      )
        return null;
      if (u.t === 2) {
        let c = r.length - 1;
        ((r = r[c]), (o = o[c].c));
      }
    }
    if (((a = e[l]), (s = Object.hasOwn(r, a)) && o[a]?.t === 0 && o[a]?.d))
      return null;
    s ||
      (a === "__proto__" &&
        (Object.defineProperty(r, a, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        Object.defineProperty(o, a, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })),
      (o[a] = { t: l < e.length - 1 && i === 2 ? 3 : i, d: !1, i: 0, c: {} }));
  }
  if (
    ((u = o[a]),
    (u.t !== i && !(i === 1 && u.t === 3)) ||
      (i === 2 &&
        (u.d || ((u.d = !0), (r[a] = [])),
        r[a].push((r = {})),
        (u.c[u.i++] = u = { t: 1, d: !1, i: 0, c: {} })),
      u.d))
  )
    return null;
  if (((u.d = !0), i === 1)) r = s ? r[a] : (r[a] = {});
  else if (i === 0 && s) return null;
  return [a, r, u.c];
}
function Fa(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
  let i = {},
    r = {},
    o = i,
    a = r;
  for (let s = Be(e, 0); s < e.length; ) {
    if (e[s] === "[") {
      let u = e[++s] === "[",
        l = Ri(e, (s += +u), "]");
      if (u) {
        if (e[l[1] - 1] !== "]")
          throw new H("expected end of table declaration", {
            toml: e,
            ptr: l[1] - 1,
          });
        l[1]++;
      }
      let c = Cm(l[0], i, r, u ? 2 : 1);
      if (!c)
        throw new H("trying to redefine an already defined table or value", {
          toml: e,
          ptr: s,
        });
      ((a = c[2]), (o = c[1]), (s = l[1]));
    } else {
      let u = Ri(e, s),
        l = Cm(u[0], o, a, 0);
      if (!l)
        throw new H("trying to redefine an already defined table or value", {
          toml: e,
          ptr: s,
        });
      let c = Yr(e, u[1], void 0, t, n);
      ((l[1][l[0]] = c[0]), (s = c[1]));
    }
    if (
      ((s = Be(e, s, !0)),
      e[s] &&
        e[s] !==
          `
` &&
        e[s] !== "\r")
    )
      throw new H(
        "each key-value declaration must be followed by an end-of-line",
        { toml: e, ptr: s },
      );
    s = Be(e, s);
  }
  return i;
}
var Oy = (e, t) => typeof e[t] == "string";
function lt(e) {
  try {
    if (Oy(e, "__serializer_tag")) {
      if (e.__serializer_tag === "primitive") return U(e.__serializer_value);
      if (e.__serializer_tag === "regex") {
        let i = new RegExp(e.__serializer_value);
        return U(i);
      } else if (e.__serializer_tag === "array") {
        let i = [];
        for (let r of e.__serializer_value) {
          let o = lt(r);
          if (o.isErr()) return o;
          i.push(o.unwrap());
        }
        return U(i);
      } else if (e.__serializer_tag === "map") {
        let i = [];
        for (let r of e.__serializer_value) {
          let o = lt(r);
          if (o.isErr()) return o;
          i.push(o.unwrap());
        }
        return U(new Map(i));
      } else if (e.__serializer_tag === "set") {
        let i = [];
        for (let r of e.__serializer_value) {
          let o = lt(r);
          if (o.isErr()) return o;
          i.push(o.unwrap());
        }
        return U(new Set(i));
      } else if (e.__serializer_tag === "result_ok") {
        let i = e.__serializer_value,
          r = lt(i);
        return r.isErr() ? r : U(U(r.unwrap()));
      } else if (e.__serializer_tag === "result_err") {
        let i = e.__serializer_value,
          r = lt(i);
        return r.isErr() ? r : U(R(r.unwrap()));
      } else if (e.__serializer_tag === "option_some") {
        let i = e.__serializer_value,
          r = lt(i);
        return r.isErr() ? r : U(B(r.unwrap()));
      } else if (e.__serializer_tag === "option_none") return U(z);
    }
    let t = typeof e;
    if (
      t === "string" ||
      t === "number" ||
      t === "boolean" ||
      t === "undefined" ||
      Array.isArray(e) ||
      e == null
    )
      return R("This object was not serialized with Serialize");
    let n = {};
    for (let i of Object.keys(e))
      if (typeof i == "string") {
        let r = lt(e[i]);
        if (r.isErr()) return r;
        n[i] = r.unwrap();
      }
    return U(n);
  } catch {
    return R("Failed to inspect object. Not JSON?");
  }
}
var Vt = "";
function Mm(e, t) {
  return e + t;
}
async function jm(e, t, n, i, r) {
  if (n.isSome()) {
    for (let o of t)
      if (n.value.href.includes(o.url)) {
        let a = null;
        if (o.selector) {
          let u = o.selector;
          try {
            let l = { tabId: r };
            a =
              (
                await Ba.default.scripting.executeScript({
                  target: l,
                  world: Ba.default.scripting.ExecutionWorld.MAIN,
                  args: [u],
                  func: (d) => {
                    let f = document.querySelector(d);
                    return f?.content || f?.textContent;
                  },
                })
              )[0]?.result || null;
          } catch {}
        }
        let s = [];
        if (o.replace)
          for (let u of o.replace) {
            let l = u.to,
              c = u.from;
            try {
              c = new RegExp(c, "gi");
            } catch {}
            s.push({ from: c, to: l });
          }
        return {
          template: o.template,
          selector: a,
          max_length: o.max_length || e.max_length,
          replace: s,
          subdir: Mm(i, o.subdir || Vt),
          force_doc_title: o.force_doc_title === !0,
        };
      }
  }
  return {
    template: e.template,
    selector: null,
    max_length: e.max_length,
    subdir: i,
    force_doc_title: e.force_doc_title === !0,
    replace: [],
  };
}
function Cy(e) {
  let t = 0,
    n = [];
  for (let i of e) {
    if ((t++, typeof i != "object")) return R(`invalid rule object ${t}`);
    if (!("template" in i) || typeof i.template != "string")
      return R(`"template = \u2026" is missing or invalid in rule ${t}`);
    if (!("url" in i) || typeof i.url != "string")
      return R(`"url = \u2026" is missing or invalid in rule ${t}`);
    let r = {
      max_length: null,
      selector: null,
      template: i.template,
      url: i.url,
      force_doc_title: i.force_doc_title === !0,
    };
    if (
      "max_length" in i &&
      (typeof i.max_length != "number" || i.max_length < 1)
    )
      return R(`"max_length = \u2026" invalid in rule ${t}`);
    if (((r.max_length = i.max_length || null), "selector" in i)) {
      if (typeof i.selector != "string" || i.selector.length == 0)
        return R(`"selectors = \u2026" is not a valid string in rule ${t}`);
      r.selector = i.selector;
    }
    if (typeof i.directory == "string") {
      let o = My(i.directory);
      if (o.isOk()) r.subdir = o.value;
      else return o;
    }
    if ("replace" in i)
      if (Array.isArray(i.replace))
        for (let o of i.replace) {
          if (typeof o != "object") return R("invalid replace value");
          if (((r.replace = []), "from" in o && typeof o.from == "string"))
            if ("to" in o && typeof o.to == "string")
              r.replace.push({ to: o.to, from: o.from });
            else
              return R(
                '"replace" is missing "to" field, or "to" field is not a string',
              );
          else
            return R(
              '"replace" is missing "from" field, or "from" field is not a string',
            );
        }
      else return R('"replace" is not an array');
    n.push(r);
  }
  return U(n);
}
function My(e) {
  if (e == "") return U(Vt);
  (e.startsWith("/") && (e = e.slice(1)),
    e.endsWith("/") && (e = e.slice(0, -1)));
  let t = e.split("/");
  for (let i of t)
    if (ct(i) != i)
      return R(
        'This not a valid path. Avoid special characters. Use "/" between directories.',
      );
  let n = t.join("/") + "/";
  return n.length > 255 ? R("Path too long") : U(n);
}
function Fm(e) {
  let t;
  try {
    t = Fa(e);
  } catch {
    return R("Invalid syntax");
  }
  if (typeof t.max_length != "number" || t.max_length < 1)
    return R("Default `max_length` value invalid or missing");
  if (typeof t.template != "string" || t.template.length == 0)
    return R("Default `template` value invalid or missing");
  let n = {
    max_length: t.max_length,
    template: t.template,
    force_doc_title: t.force_doc_title === !0,
  };
  return Array.isArray(t.rule)
    ? Cy(t.rule).map((r) => ({ default_: n, rules: r }))
    : U({ default_: n, rules: [] });
}
function dr() {
  return { default_: { max_length: 64, template: "%title" }, rules: [] };
}
function ct(e) {
  let t = e
    .trim()
    .normalize("NFC")
    .replace(/^\.+/gu, "")
    .replace(/[^\p{L}\p{N}\p{M}\-\s_\.]/gu, "")
    .replace(/-+/gu, "-")
    .replace(/\s+/gu, " ")
    .replace(/^(\s|-)+/gu, "")
    .substring(0, 190)
    .replace(/(\s|-)+$/gu, "");
  return t.length == 0 ? "no-name" : t;
}
function mr(e, t) {
  let {
      template: n,
      selector: i,
      max_length: r,
      replace: o,
      subdir: a,
    } = t.smartnaming_rule,
    s,
    u;
  if (
    ((s = e.title
      .or(t.title)
      .or(e.filename)
      .map((d) => d.trim())
      .unwrapOr(void 0)),
    t.url.isSome())
  ) {
    let d = t.url.value.host.split(".").slice(-2);
    (d.pop(), (u = d[0]));
  }
  let l = n,
    c = (d, f) => {
      f
        ? (l = l.replace(d, f))
        : ((l = l.replace(` ${d}`, "")),
          (l = l.replace(`-${d}`, "")),
          (l = l.replace(`_${d}`, "")),
          (l = l.replace(`${d}`, "")));
    };
  (c("%title", s),
    c("%hostname", u),
    c("%selector", i),
    (l = l || s || u || ""),
    (l = ct(l).substring(0, r)));
  for (let d of o) l = l.replaceAll(d.from, d.to);
  return ((l = ct(l).substring(0, r)), { basename: l, subdir: a });
}
async function Lm() {
  let e = dr(),
    t = await Um.storage.local.get("smartnaming");
  if (typeof t.smartnaming == "object") {
    let n = lt(t.smartnaming);
    if (n.isOk())
      for (let [i, r] of n.value.entries())
        if (i == "*")
          ((e.default_.max_length = r.max_length),
            (e.default_.template = r.template));
        else {
          let o = {
            max_length: r.max_length,
            url: i,
            selector: null,
            template: r.template,
          };
          (r.selector && (o.selector = r.selector), e.rules.push(o));
        }
  }
  return e;
}
var jy = [
    "m3u8_video_preview",
    "m3u8_audio_only",
    "m3u8_audio_video_one_source",
    "m3u8_audio_video_two_sources",
  ],
  Fy = ["mpd_audio_video_one_source", "mpd_audio_only", "mpd_video_preview"];
function Bm(e) {
  return jy.includes(e.strategy);
}
function Vm(e) {
  return Fy.includes(e.strategy);
}
function qm(e) {
  let t = `download_${crypto.randomUUID()}`,
    n = "unused",
    i = Vt;
  if (e.type == "m3u8_playlist") {
    let r = Si(e);
    if (jt(r.demuxer) || r.av.video == !1) return z;
    let o = ut(r.demuxer, "mp4"),
      a = {
        download_id: t,
        headers: je(e.sent_headers),
        good_basename: n,
        muxer: o,
        subdir: i,
        will_use_jsfetch: !1,
        save_as: !1,
        strategy: "m3u8_video_preview",
        url: r.av.video,
        extension: o,
        is_youtube: e.is_youtube,
        throttle: !1,
        cache: e.cache,
      };
    return B(a);
  } else if (e.type == "youtube_format") {
    let r = Si(e);
    if (jt(r.demuxer) || r.av.video == !1) return z;
    let o = ut(r.demuxer, "mp4"),
      a = {
        download_id: t,
        headers: je(e.sent_headers),
        good_basename: n,
        muxer: o,
        subdir: i,
        will_use_jsfetch: !1,
        save_as: !1,
        strategy: "youtube_video_preview",
        url: r.av.video.url,
        content_length: r.av.video.content_length,
        extension: o,
        is_youtube: e.is_youtube,
        throttle: !1,
        cache: e.cache,
      };
    return B(a);
  } else if (e.type == "m3u8") {
    if (jt(e.demuxer)) return z;
    let r = ut(e.demuxer, "mp4"),
      o = {
        download_id: t,
        headers: je(e.sent_headers),
        good_basename: n,
        muxer: r,
        subdir: i,
        will_use_jsfetch: !1,
        save_as: !1,
        strategy: "m3u8_video_preview",
        url: e.url,
        extension: r,
        is_youtube: e.is_youtube,
        throttle: !1,
        cache: e.cache,
      };
    return B(o);
  } else if (e.type == "mpd_playlist") {
    let r = Si(e);
    if (jt(r.demuxer)) return z;
    let o = ut(r.demuxer, "mp4"),
      a = {
        download_id: t,
        headers: je(e.sent_headers),
        good_basename: n,
        muxer: o,
        subdir: i,
        entry: r.index,
        duration: e.duration,
        will_use_jsfetch: !0,
        save_as: !1,
        strategy: "mpd_video_preview",
        url: e.master_url,
        extension: o,
        is_youtube: e.is_youtube,
        throttle: !1,
        cache: e.cache,
      };
    return B(a);
  } else if (e.type == "http") {
    let r = {
      download_id: t,
      headers: je(e.sent_headers),
      good_basename: n,
      subdir: i,
      muxer: "mp4",
      will_use_jsfetch: !0,
      size: e.size,
      save_as: !1,
      strategy: "http_video_preview_jsfetch",
      url: e.url,
      extension: "mp4",
      is_youtube: e.is_youtube,
      throttle: !1,
      cache: e.cache,
    };
    return B(r);
  } else throw new Error("Unreachable");
}
function Ly(e, t, n, i, r, o, a, s) {
  r = ct(r);
  let u = `download_${crypto.randomUUID()}`,
    l = je(e.sent_headers),
    c = e.playlist[a].index;
  return t || jt(e.playlist[a].demuxer)
    ? {
        download_id: u,
        headers: l,
        good_basename: r,
        subdir: o,
        save_as: n,
        will_use_jsfetch: !0,
        muxer: "mp3",
        strategy: "mpd_audio_only",
        url: e.master_url,
        entry: c,
        duration: e.duration,
        extension: "mp3",
        is_youtube: e.is_youtube,
        throttle: s,
        cache: e.cache,
      }
    : {
        download_id: u,
        headers: l,
        good_basename: r,
        subdir: o,
        save_as: n,
        will_use_jsfetch: !0,
        muxer: i,
        strategy: "mpd_audio_video_one_source",
        url: e.master_url,
        entry: c,
        duration: e.duration,
        extension: i,
        is_youtube: e.is_youtube,
        throttle: s,
        cache: e.cache,
      };
}
function By(e, t, n, i, r, o, a, s) {
  r = ct(r);
  let u = `download_${crypto.randomUUID()}`,
    l = e.playlist[a],
    c = je(e.sent_headers);
  if (l.av.video == !1)
    return {
      download_id: u,
      headers: c,
      good_basename: r,
      subdir: o,
      save_as: n,
      will_use_jsfetch: !1,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: l.av.audio.url,
      content_length: l.av.audio.content_length,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: s,
      cache: e.cache,
    };
  if (t)
    return l.av.audio
      ? {
          download_id: u,
          headers: c,
          good_basename: r,
          subdir: o,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: l.av.audio.url,
          content_length: l.av.audio.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: c,
          good_basename: r,
          subdir: o,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: l.av.video.url,
          content_length: l.av.video.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  {
    let d = l.demuxer,
      f = ut(d, i);
    return l.av.audio
      ? {
          download_id: u,
          headers: c,
          good_basename: r,
          subdir: o,
          muxer: f,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_two_sources",
          url: l.av.video.url,
          content_length: l.av.video.content_length,
          url_audio: l.av.audio.url,
          audio_content_length: l.av.audio.content_length,
          extension: f,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: c,
          good_basename: r,
          subdir: o,
          muxer: f,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_one_source",
          url: l.av.video.url,
          content_length: l.av.video.content_length,
          extension: f,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  }
}
function Vy(e, t, n, i, r, o, a, s) {
  r = ct(r);
  let u = `download_${crypto.randomUUID()}`,
    l = e.playlist[a],
    c = je(e.sent_headers),
    d = e.duration;
  if (l.av.video == !1)
    return {
      download_id: u,
      headers: c,
      good_basename: r,
      subdir: o,
      duration: d,
      save_as: n,
      will_use_jsfetch: !1,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: l.av.audio,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: s,
      cache: e.cache,
    };
  if (t)
    return l.av.audio
      ? {
          download_id: u,
          headers: c,
          good_basename: r,
          subdir: o,
          duration: d,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: l.av.audio,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: c,
          good_basename: r,
          subdir: o,
          duration: d,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: l.av.video,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  {
    let f = l.demuxer,
      _ = ut(f, i);
    return l.av.audio
      ? {
          download_id: u,
          headers: c,
          good_basename: r,
          subdir: o,
          muxer: _,
          duration: d,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_two_sources",
          url: l.av.video,
          url_audio: l.av.audio,
          extension: _,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        }
      : {
          download_id: u,
          headers: c,
          good_basename: r,
          subdir: o,
          muxer: _,
          duration: d,
          save_as: n,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_one_source",
          url: l.av.video,
          extension: _,
          is_youtube: e.is_youtube,
          throttle: s,
          cache: e.cache,
        };
  }
}
function qy(e, t, n, i, r, o, a) {
  r = ct(r);
  let s = `download_${crypto.randomUUID()}`,
    u = je(e.sent_headers),
    l = e.url,
    c = e.duration;
  if (t || jt(e.demuxer))
    return {
      save_as: n,
      subdir: o,
      duration: c,
      will_use_jsfetch: !1,
      download_id: s,
      headers: u,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: l,
      good_basename: r,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: a,
      cache: e.cache,
    };
  {
    let d = ut(e.demuxer, i);
    return {
      download_id: s,
      headers: u,
      subdir: o,
      duration: c,
      will_use_jsfetch: !1,
      save_as: n,
      strategy: "m3u8_audio_video_one_source",
      muxer: d,
      url: l,
      good_basename: r,
      extension: d,
      is_youtube: e.is_youtube,
      throttle: a,
      cache: e.cache,
    };
  }
}
function Hy(e, t, n, i, r, o, a) {
  r = ct(r);
  let s = `download_${crypto.randomUUID()}`,
    u = e.extension == "flv" && e.size.isNone(),
    l =
      (e.libav_demuxer.isSome() &&
        Gr(e.libav_demuxer.value) &&
        e.supports_byte_ranges) ||
      u;
  if (t)
    return {
      save_as: n,
      download_id: s,
      subdir: o,
      will_use_jsfetch: !0,
      headers: je(e.sent_headers),
      strategy: "http_strip_audio_jsfetch",
      url: e.url,
      good_basename: r,
      muxer: "mp3",
      extension: "mp3",
      is_youtube: e.is_youtube,
      size: e.size,
      throttle: a,
      cache: e.cache,
    };
  if (l) {
    let c,
      d = "";
    return (
      e.libav_demuxer.isSome()
        ? ((c = yi(e.libav_demuxer.value, i)), (d = c))
        : ((c = i), (d = i)),
      {
        save_as: n,
        download_id: s,
        subdir: o,
        will_use_jsfetch: !0,
        headers: je(e.sent_headers),
        strategy: "http_audio_video_one_source_jsfetch",
        url: e.url,
        good_basename: r,
        muxer: c,
        extension: d,
        size: e.size,
        is_youtube: e.is_youtube,
        throttle: a,
        cache: e.cache,
      }
    );
  } else
    return {
      save_as: n,
      download_id: s,
      subdir: o,
      will_use_jsfetch: !1,
      headers: je(e.sent_headers),
      strategy: "http_audio_video_one_source",
      url: e.url,
      good_basename: r,
      size: e.size,
      extension: e.extension,
      is_youtube: e.is_youtube,
      throttle: a,
      cache: e.cache,
    };
}
function dt(e, t, n, i, r, o, a, s) {
  if (e.type == "http") return Hy(e, t, n, i, r, o, s);
  if (e.type == "m3u8") return qy(e, t, n, i, r, o, s);
  if (e.type == "m3u8_playlist") return Vy(e, t, n, i, r, o, a, s);
  if (e.type == "youtube_format") {
    if (typeof a == "number") return By(e, t, n, i, r, o, a, s);
    throw "Missing playlist_entry";
  } else if (e.type == "mpd_playlist") {
    if (typeof a == "number") return Ly(e, t, n, i, r, o, a, s);
    throw "Missing playlist_entry";
  } else throw new Error("Unreachable");
}
var Zy = ["loom.com"],
  Gy = ["pandavideo.com"],
  Wy = ["soundcloud.com"];
function Ci(e) {
  return Zy.some((t) => e.href.includes(t));
}
function Va(e) {
  return Gy.some((t) => e.href.includes(t));
}
function Hm(e) {
  return Wy.some((t) => e.href.includes(t));
}
function Zm(e, t) {
  return e.isNone()
    ? !1
    : e.value.host == "turkision.com" && t.match(/\.mpd/i) != null;
}
var Qy = chrome.runtime.id,
  Mi = new Map();
function Jy() {
  Ee &&
    (chrome.downloads.onDeterminingFilename.hasListener(qa) ||
      chrome.downloads.onDeterminingFilename.addListener(qa));
}
function Ky() {
  Ee &&
    Mi.size == 0 &&
    chrome.downloads.onDeterminingFilename.removeListener(qa);
}
function qa(e, t) {
  if (e.byExtensionId !== Qy) {
    t();
    return;
  }
  let n = Mi.get(e.finalUrl);
  if (!n) {
    t();
    return;
  }
  (Mi.delete(e.finalUrl), t({ filename: n, conflictAction: "uniquify" }));
}
async function Xy(e) {
  let t = await $t.default.downloads.search({ id: e });
  if (!t.length) return R({ details: "Error downloading file, ID not found." });
  let n = t[0];
  return n.error
    ? R({ details: n.error })
    : n.state == "interrupted"
      ? R({ details: "Download was interrupted." })
      : n.state == "complete"
        ? U(n.filename)
        : new Promise((i) => {
            function r(a) {
              a.id === n.id &&
                (a.error
                  ? (o(),
                    a.error.current
                      ? i(R({ interrupt_reason: a.error.current }))
                      : i(R({ details: "Unknown download error" })))
                  : a.state && a.state.current === "interrupted"
                    ? (o(),
                      $t.default.downloads.search({ id: e }).then((s) => {
                        s[0] && s[0].error
                          ? i(R({ interrupt_reason: s[0].error }))
                          : i(R({ details: "Download was interrupted." }));
                      }))
                    : a.state &&
                      a.state.current === "complete" &&
                      (o(),
                      $t.default.downloads.search({ id: e }).then((s) => {
                        s[0]
                          ? i(U(s[0].filename))
                          : i(
                              R({
                                details:
                                  "Download completed but file details not found.",
                              }),
                            );
                      })));
            }
            let o = () => $t.default.downloads.onChanged.removeListener(r);
            ($t.default.downloads.onChanged.addListener(r),
              $t.default.downloads.search({ id: e }).then((a) => {
                a[0] &&
                  (a[0].state == "complete"
                    ? (o(), i(U(a[0].filename)))
                    : a[0].state == "interrupted" &&
                      (o(),
                      a[0].error
                        ? i(R({ interrupt_reason: a[0].error }))
                        : i(R({ details: "Download interrupted." }))));
              }));
          });
}
async function Ha(e) {
  await gi();
  let t = [];
  if (e.url.protocol != "data:")
    if (Bm(e)) {
      let i = Ci(e.url);
      e.will_use_jsfetch = !i;
      let r = await Im(e);
      if (r.isErr()) return r;
      t = r.value;
    } else
      Vm(e)
        ? (t = await km(e))
        : e.will_use_jsfetch
          ? (t = await Ca([e.url.href], e.headers))
          : (t = await Lt([e.url.href], e.headers));
  (Ma(e.headers), ur({ name: "download", data: { download_args: ie(e) } }));
  let n = await new Promise((i) => {
    let r = Ut((o) => {
      (o.name == "download_error" &&
        o.data.download_id == e.download_id &&
        (r(), i(R(o.data.error))),
        o.name == "download_result" &&
          o.data.download_id == e.download_id &&
          (r(), i(U(o.data))));
    });
  });
  return (await Bt(t), n);
}
async function Za(e, t) {
  try {
    let n = await t.queueTask(() => Ha(e), e.download_id, e.is_youtube);
    if (n.isErr()) return R({ details: n.error });
    if (n.value.aborted_no_partial)
      return U({
        aborted_no_partial: !0,
        ending_reason: n.value.ending_reason,
      });
    let {
      internal_filename: i,
      internal_bloburl: r,
      ending_reason: o,
    } = n.value;
    if (!r) throw new Error("No blob provided");
    let a = e.subdir + e.good_basename + "." + e.extension,
      s = {
        url: r,
        conflictAction: "uniquify",
        filename: a,
        saveAs: e.save_as,
      };
    Ee && Mi.set(r, a);
    let u = Date.now(),
      l,
      c;
    try {
      (Jy(),
        (c = await $t.default.downloads.download(s)),
        (l = await Xy(c)),
        Ky());
    } catch (_) {
      if (_?.message === "Download canceled by the user")
        l = R({ interrupt_reason: "USER_CANCELED" });
      else throw _;
    }
    let d = Date.now() - u;
    if (
      (await (await navigator.storage.getDirectory()).removeEntry(i),
      ur({ name: "revoke_blob_url", data: { blob_url: r } }),
      l.isErr())
    ) {
      let _ = l.error;
      return _.interrupt_reason == "USER_CANCELED"
        ? U({ aborted_no_partial: !0, ending_reason: zi() })
        : (_.details, l);
    }
    return l.map((_) => ({
      ending_reason: o,
      browser_downloads_duration_ms: d,
      aborted_no_partial: !1,
      browser_download_id: c,
      path: _,
    }));
  } catch (n) {
    return (console.error(n), R({ details: n.toString() }));
  }
}
function Gm(e) {
  ur({ name: "abort_download", data: { download_id: e } });
}
fi();
var ps = _e(Ae(), 1);
ze();
var Ui = [];
function mt(e) {
  for (let t of Ui) t(e);
}
function Wm(e) {
  return (
    Ui.push(e),
    () => {
      Ui = Ui.filter((t) => t != e);
    }
  );
}
var pr = _e(Ei()),
  Qm = "https://example.com",
  Yy = function (t, n) {
    if (/^[a-z]+:/i.test(n)) return n;
    /^data:/.test(t) &&
      (t = (pr.default.location && pr.default.location.href) || "");
    var i = /^\/\//.test(t),
      r = !pr.default.location && !/\/\//i.test(t);
    t = new pr.default.URL(t, pr.default.location || Qm);
    var o = new URL(n, t);
    return r
      ? o.href.slice(Qm.length)
      : i
        ? o.href.slice(o.protocol.length)
        : o.href;
  },
  ji = Yy;
var ke = _e(Ei());
var Jm = function (t, n, i) {
  n.forEach(function (r) {
    for (var o in t.mediaGroups[r])
      for (var a in t.mediaGroups[r][o]) {
        var s = t.mediaGroups[r][o][a];
        i(s, r, o, a);
      }
  });
};
var Xp = _e(qp());
var Hp = (e) => !!e && typeof e == "object",
  ye = (...e) =>
    e.reduce(
      (t, n) => (
        typeof n != "object" ||
          Object.keys(n).forEach((i) => {
            Array.isArray(t[i]) && Array.isArray(n[i])
              ? (t[i] = t[i].concat(n[i]))
              : Hp(t[i]) && Hp(n[i])
                ? (t[i] = ye(t[i], n[i]))
                : (t[i] = n[i]);
          }),
        t
      ),
      {},
    ),
  Yp = (e) => Object.keys(e).map((t) => e[t]),
  kv = (e, t) => {
    let n = [];
    for (let i = e; i < t; i++) n.push(i);
    return n;
  },
  Ar = (e) => e.reduce((t, n) => t.concat(n), []),
  e_ = (e) => {
    if (!e.length) return [];
    let t = [];
    for (let n = 0; n < e.length; n++) t.push(e[n]);
    return t;
  },
  Iv = (e, t) => e.reduce((n, i, r) => (i[t] && n.push(r), n), []),
  $v = (e, t) =>
    Yp(
      e.reduce(
        (n, i) => (
          i.forEach((r) => {
            n[t(r)] = r;
          }),
          n
        ),
        {},
      ),
    ),
  pn = {
    INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
    INVALID_NUMBER_OF_CONTENT_STEERING: "INVALID_NUMBER_OF_CONTENT_STEERING",
    DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
    DASH_INVALID_XML: "DASH_INVALID_XML",
    NO_BASE_URL: "NO_BASE_URL",
    MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
    SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
    UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME",
  },
  _n = ({
    baseUrl: e = "",
    source: t = "",
    range: n = "",
    indexRange: i = "",
  }) => {
    let r = { uri: t, resolvedUri: ji(e || "", t) };
    if (n || i) {
      let a = (n || i).split("-"),
        s = ke.default.BigInt ? ke.default.BigInt(a[0]) : parseInt(a[0], 10),
        u = ke.default.BigInt ? ke.default.BigInt(a[1]) : parseInt(a[1], 10);
      (s < Number.MAX_SAFE_INTEGER && typeof s == "bigint" && (s = Number(s)),
        u < Number.MAX_SAFE_INTEGER && typeof u == "bigint" && (u = Number(u)));
      let l;
      (typeof u == "bigint" || typeof s == "bigint"
        ? (l =
            ke.default.BigInt(u) - ke.default.BigInt(s) + ke.default.BigInt(1))
        : (l = u - s + 1),
        typeof l == "bigint" && l < Number.MAX_SAFE_INTEGER && (l = Number(l)),
        (r.byterange = { length: l, offset: s }));
    }
    return r;
  },
  Pv = (e) => {
    let t;
    return (
      typeof e.offset == "bigint" || typeof e.length == "bigint"
        ? (t =
            ke.default.BigInt(e.offset) +
            ke.default.BigInt(e.length) -
            ke.default.BigInt(1))
        : (t = e.offset + e.length - 1),
      `${e.offset}-${t}`
    );
  },
  Zp = (e) => (
    e && typeof e != "number" && (e = parseInt(e, 10)),
    isNaN(e) ? null : e
  ),
  zv = {
    static(e) {
      let {
          duration: t,
          timescale: n = 1,
          sourceDuration: i,
          periodDuration: r,
        } = e,
        o = Zp(e.endNumber),
        a = t / n;
      return typeof o == "number"
        ? { start: 0, end: o }
        : typeof r == "number"
          ? { start: 0, end: r / a }
          : { start: 0, end: i / a };
    },
    dynamic(e) {
      let {
          NOW: t,
          clientOffset: n,
          availabilityStartTime: i,
          timescale: r = 1,
          duration: o,
          periodStart: a = 0,
          minimumUpdatePeriod: s = 0,
          timeShiftBufferDepth: u = 1 / 0,
        } = e,
        l = Zp(e.endNumber),
        c = (t + n) / 1e3,
        d = i + a,
        _ = c + s - d,
        g = Math.ceil((_ * r) / o),
        m = Math.floor(((c - d - u) * r) / o),
        A = Math.floor(((c - d) * r) / o);
      return {
        start: Math.max(0, m),
        end: typeof l == "number" ? l : Math.min(g, A),
      };
    },
  },
  Nv = (e) => (t) => {
    let {
      duration: n,
      timescale: i = 1,
      periodStart: r,
      startNumber: o = 1,
    } = e;
    return { number: o + t, duration: n / i, timeline: r, time: t * n };
  },
  cs = (e) => {
    let {
        type: t,
        duration: n,
        timescale: i = 1,
        periodDuration: r,
        sourceDuration: o,
      } = e,
      { start: a, end: s } = zv[t](e),
      u = kv(a, s).map(Nv(e));
    if (t === "static") {
      let l = u.length - 1,
        c = typeof r == "number" ? r : o;
      u[l].duration = c - (n / i) * l;
    }
    return u;
  },
  t_ = (e) => {
    let {
      baseUrl: t,
      initialization: n = {},
      sourceDuration: i,
      indexRange: r = "",
      periodStart: o,
      presentationTime: a,
      number: s = 0,
      duration: u,
    } = e;
    if (!t) throw new Error(pn.NO_BASE_URL);
    let l = _n({ baseUrl: t, source: n.sourceURL, range: n.range }),
      c = _n({ baseUrl: t, source: t, indexRange: r });
    if (((c.map = l), u)) {
      let d = cs(e);
      d.length && ((c.duration = d[0].duration), (c.timeline = d[0].timeline));
    } else i && ((c.duration = i), (c.timeline = o));
    return ((c.presentationTime = a || o), (c.number = s), [c]);
  },
  Ov = (e, t, n) => {
    let i = e.sidx.map ? e.sidx.map : null,
      r = e.sidx.duration,
      o = e.timeline || 0,
      a = e.sidx.byterange,
      s = a.offset + a.length,
      u = t.timescale,
      l = t.references.filter((A) => A.referenceType !== 1),
      c = [],
      d = e.endList ? "static" : "dynamic",
      f = e.sidx.timeline,
      _ = f,
      g = e.mediaSequence || 0,
      m;
    typeof t.firstOffset == "bigint"
      ? (m = ke.default.BigInt(s) + t.firstOffset)
      : (m = s + t.firstOffset);
    for (let A = 0; A < l.length; A++) {
      let D = t.references[A],
        S = D.referencedSize,
        v = D.subsegmentDuration,
        b;
      typeof m == "bigint"
        ? (b = m + ke.default.BigInt(S) - ke.default.BigInt(1))
        : (b = m + S - 1);
      let T = `${m}-${b}`,
        I = t_({
          baseUrl: n,
          timescale: u,
          timeline: o,
          periodStart: f,
          presentationTime: _,
          number: g,
          duration: v,
          sourceDuration: r,
          indexRange: T,
          type: d,
        })[0];
      (i && (I.map = i),
        c.push(I),
        typeof m == "bigint" ? (m += ke.default.BigInt(S)) : (m += S),
        (_ += v / u),
        g++);
    }
    return ((e.segments = c), e);
  },
  Rv = ["AUDIO", "SUBTITLES"],
  Cv = 1 / 60,
  r_ = (e) =>
    $v(e, ({ timeline: t }) => t).sort((t, n) =>
      t.timeline > n.timeline ? 1 : -1,
    ),
  Mv = (e, t) => {
    for (let n = 0; n < e.length; n++)
      if (e[n].attributes.NAME === t) return e[n];
    return null;
  },
  Gp = (e) => {
    let t = [];
    return (
      Jm(e, Rv, (n, i, r, o) => {
        t = t.concat(n.playlists || []);
      }),
      t
    );
  },
  Wp = ({ playlist: e, mediaSequence: t }) => {
    ((e.mediaSequence = t),
      e.segments.forEach((n, i) => {
        n.number = e.mediaSequence + i;
      }));
  },
  Uv = ({ oldPlaylists: e, newPlaylists: t, timelineStarts: n }) => {
    t.forEach((i) => {
      i.discontinuitySequence = n.findIndex(function ({ timeline: u }) {
        return u === i.timeline;
      });
      let r = Mv(e, i.attributes.NAME);
      if (!r || i.sidx) return;
      let o = i.segments[0],
        a = r.segments.findIndex(function (u) {
          return Math.abs(u.presentationTime - o.presentationTime) < Cv;
        });
      if (a === -1) {
        (Wp({
          playlist: i,
          mediaSequence: r.mediaSequence + r.segments.length,
        }),
          (i.segments[0].discontinuity = !0),
          i.discontinuityStarts.unshift(0),
          ((!r.segments.length && i.timeline > r.timeline) ||
            (r.segments.length &&
              i.timeline > r.segments[r.segments.length - 1].timeline)) &&
            i.discontinuitySequence--);
        return;
      }
      (r.segments[a].discontinuity &&
        !o.discontinuity &&
        ((o.discontinuity = !0),
        i.discontinuityStarts.unshift(0),
        i.discontinuitySequence--),
        Wp({ playlist: i, mediaSequence: r.segments[a].number }));
    });
  },
  jv = ({ oldManifest: e, newManifest: t }) => {
    let n = e.playlists.concat(Gp(e)),
      i = t.playlists.concat(Gp(t));
    return (
      (t.timelineStarts = r_([e.timelineStarts, t.timelineStarts])),
      Uv({
        oldPlaylists: n,
        newPlaylists: i,
        timelineStarts: t.timelineStarts,
      }),
      t
    );
  },
  Fv = (e) => e && e.uri + "-" + Pv(e.byterange),
  ls = (e) => {
    let t = e.reduce(function (i, r) {
        return (
          i[r.attributes.baseUrl] || (i[r.attributes.baseUrl] = []),
          i[r.attributes.baseUrl].push(r),
          i
        );
      }, {}),
      n = [];
    return (
      Object.values(t).forEach((i) => {
        let r = Yp(
          i.reduce((o, a) => {
            let s = a.attributes.id + (a.attributes.lang || "");
            return (
              o[s]
                ? (a.segments &&
                    (a.segments[0] && (a.segments[0].discontinuity = !0),
                    o[s].segments.push(...a.segments)),
                  a.attributes.contentProtection &&
                    (o[s].attributes.contentProtection =
                      a.attributes.contentProtection))
                : ((o[s] = a), (o[s].attributes.timelineStarts = [])),
              o[s].attributes.timelineStarts.push({
                start: a.attributes.periodStart,
                timeline: a.attributes.periodStart,
              }),
              o
            );
          }, {}),
        );
        n = n.concat(r);
      }),
      n.map(
        (i) => (
          (i.discontinuityStarts = Iv(i.segments || [], "discontinuity")),
          i
        ),
      )
    );
  },
  ds = (e, t) => {
    let n = Fv(e.sidx),
      i = n && t[n] && t[n].sidx;
    return (i && Ov(e, i, e.sidx.resolvedUri), e);
  },
  Lv = (e, t = {}) => {
    if (!Object.keys(t).length) return e;
    for (let n in e) e[n] = ds(e[n], t);
    return e;
  },
  Bv = (
    {
      attributes: e,
      segments: t,
      sidx: n,
      mediaSequence: i,
      discontinuitySequence: r,
      discontinuityStarts: o,
    },
    a,
  ) => {
    let s = {
      attributes: {
        NAME: e.id,
        BANDWIDTH: e.bandwidth,
        CODECS: e.codecs,
        "PROGRAM-ID": 1,
      },
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      discontinuitySequence: r,
      discontinuityStarts: o,
      timelineStarts: e.timelineStarts,
      mediaSequence: i,
      segments: t,
    };
    return (
      e.contentProtection && (s.contentProtection = e.contentProtection),
      e.serviceLocation && (s.attributes.serviceLocation = e.serviceLocation),
      n && (s.sidx = n),
      a && ((s.attributes.AUDIO = "audio"), (s.attributes.SUBTITLES = "subs")),
      s
    );
  },
  Vv = ({
    attributes: e,
    segments: t,
    mediaSequence: n,
    discontinuityStarts: i,
    discontinuitySequence: r,
  }) => {
    typeof t > "u" &&
      ((t = [
        {
          uri: e.baseUrl,
          timeline: e.periodStart,
          resolvedUri: e.baseUrl || "",
          duration: e.sourceDuration,
          number: 0,
        },
      ]),
      (e.duration = e.sourceDuration));
    let o = { NAME: e.id, BANDWIDTH: e.bandwidth, "PROGRAM-ID": 1 };
    e.codecs && (o.CODECS = e.codecs);
    let a = {
      attributes: o,
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      timelineStarts: e.timelineStarts,
      discontinuityStarts: i,
      discontinuitySequence: r,
      mediaSequence: n,
      segments: t,
    };
    return (
      e.serviceLocation && (a.attributes.serviceLocation = e.serviceLocation),
      a
    );
  },
  qv = (e, t = {}, n = !1) => {
    let i,
      r = e.reduce((o, a) => {
        let s = (a.attributes.role && a.attributes.role.value) || "",
          u = a.attributes.lang || "",
          l = a.attributes.label || "main";
        if (u && !a.attributes.label) {
          let d = s ? ` (${s})` : "";
          l = `${a.attributes.lang}${d}`;
        }
        o[l] ||
          (o[l] = {
            language: u,
            autoselect: !0,
            default: s === "main",
            playlists: [],
            uri: "",
          });
        let c = ds(Bv(a, n), t);
        return (
          o[l].playlists.push(c),
          typeof i > "u" && s === "main" && ((i = a), (i.default = !0)),
          o
        );
      }, {});
    if (!i) {
      let o = Object.keys(r)[0];
      r[o].default = !0;
    }
    return r;
  },
  Hv = (e, t = {}) =>
    e.reduce((n, i) => {
      let r = i.attributes.label || i.attributes.lang || "text",
        o = i.attributes.lang || "und";
      return (
        n[r] ||
          (n[r] = {
            language: o,
            default: !1,
            autoselect: !1,
            playlists: [],
            uri: "",
          }),
        n[r].playlists.push(ds(Vv(i), t)),
        n
      );
    }, {}),
  Zv = (e) =>
    e.reduce(
      (t, n) => (
        n &&
          n.forEach((i) => {
            let { channel: r, language: o } = i;
            ((t[o] = {
              autoselect: !1,
              default: !1,
              instreamId: r,
              language: o,
            }),
              i.hasOwnProperty("aspectRatio") &&
                (t[o].aspectRatio = i.aspectRatio),
              i.hasOwnProperty("easyReader") &&
                (t[o].easyReader = i.easyReader),
              i.hasOwnProperty("3D") && (t[o]["3D"] = i["3D"]));
          }),
        t
      ),
      {},
    ),
  Gv = ({ attributes: e, segments: t, sidx: n, discontinuityStarts: i }) => {
    let r = {
      attributes: {
        NAME: e.id,
        AUDIO: "audio",
        SUBTITLES: "subs",
        RESOLUTION: { width: e.width, height: e.height },
        CODECS: e.codecs,
        BANDWIDTH: e.bandwidth,
        "PROGRAM-ID": 1,
      },
      uri: "",
      endList: e.type === "static",
      timeline: e.periodStart,
      resolvedUri: e.baseUrl || "",
      targetDuration: e.duration,
      discontinuityStarts: i,
      timelineStarts: e.timelineStarts,
      segments: t,
    };
    return (
      e.frameRate && (r.attributes["FRAME-RATE"] = e.frameRate),
      e.contentProtection && (r.contentProtection = e.contentProtection),
      e.serviceLocation && (r.attributes.serviceLocation = e.serviceLocation),
      n && (r.sidx = n),
      r
    );
  },
  Wv = ({ attributes: e }) =>
    e.mimeType === "video/mp4" ||
    e.mimeType === "video/webm" ||
    e.contentType === "video",
  Qv = ({ attributes: e }) =>
    e.mimeType === "audio/mp4" ||
    e.mimeType === "audio/webm" ||
    e.contentType === "audio",
  Jv = ({ attributes: e }) =>
    e.mimeType === "text/vtt" || e.contentType === "text",
  Kv = (e, t) => {
    e.forEach((n) => {
      ((n.mediaSequence = 0),
        (n.discontinuitySequence = t.findIndex(function ({ timeline: i }) {
          return i === n.timeline;
        })),
        n.segments &&
          n.segments.forEach((i, r) => {
            i.number = r;
          }));
    });
  },
  Qp = (e) =>
    e
      ? Object.keys(e).reduce((t, n) => {
          let i = e[n];
          return t.concat(i.playlists);
        }, [])
      : [],
  Xv = ({
    dashPlaylists: e,
    locations: t,
    contentSteering: n,
    sidxMapping: i = {},
    previousManifest: r,
    eventStream: o,
  }) => {
    if (!e.length) return {};
    let {
        sourceDuration: a,
        type: s,
        suggestedPresentationDelay: u,
        minimumUpdatePeriod: l,
      } = e[0].attributes,
      c = ls(e.filter(Wv)).map(Gv),
      d = ls(e.filter(Qv)),
      f = ls(e.filter(Jv)),
      _ = e.map((b) => b.attributes.captionServices).filter(Boolean),
      g = {
        allowCache: !0,
        discontinuityStarts: [],
        segments: [],
        endList: !0,
        mediaGroups: {
          AUDIO: {},
          VIDEO: {},
          "CLOSED-CAPTIONS": {},
          SUBTITLES: {},
        },
        uri: "",
        duration: a,
        playlists: Lv(c, i),
      };
    (l >= 0 && (g.minimumUpdatePeriod = l * 1e3),
      t && (g.locations = t),
      n && (g.contentSteering = n),
      s === "dynamic" && (g.suggestedPresentationDelay = u),
      o && o.length > 0 && (g.eventStream = o));
    let m = g.playlists.length === 0,
      A = d.length ? qv(d, i, m) : null,
      D = f.length ? Hv(f, i) : null,
      S = c.concat(Qp(A), Qp(D)),
      v = S.map(({ timelineStarts: b }) => b);
    return (
      (g.timelineStarts = r_(v)),
      Kv(S, g.timelineStarts),
      A && (g.mediaGroups.AUDIO.audio = A),
      D && (g.mediaGroups.SUBTITLES.subs = D),
      _.length && (g.mediaGroups["CLOSED-CAPTIONS"].cc = Zv(_)),
      r ? jv({ oldManifest: r, newManifest: g }) : g
    );
  },
  Yv = (e, t, n) => {
    let {
        NOW: i,
        clientOffset: r,
        availabilityStartTime: o,
        timescale: a = 1,
        periodStart: s = 0,
        minimumUpdatePeriod: u = 0,
      } = e,
      l = (i + r) / 1e3,
      c = o + s,
      f = l + u - c;
    return Math.ceil((f * a - t) / n);
  },
  n_ = (e, t) => {
    let {
        type: n,
        minimumUpdatePeriod: i = 0,
        media: r = "",
        sourceDuration: o,
        timescale: a = 1,
        startNumber: s = 1,
        periodStart: u,
      } = e,
      l = [],
      c = -1;
    for (let d = 0; d < t.length; d++) {
      let f = t[d],
        _ = f.d,
        g = f.r || 0,
        m = f.t || 0;
      (c < 0 && (c = m), m && m > c && (c = m));
      let A;
      if (g < 0) {
        let v = d + 1;
        v === t.length
          ? n === "dynamic" && i > 0 && r.indexOf("$Number$") > 0
            ? (A = Yv(e, c, _))
            : (A = (o * a - c) / _)
          : (A = (t[v].t - c) / _);
      } else A = g + 1;
      let D = s + l.length + A,
        S = s + l.length;
      for (; S < D; )
        (l.push({ number: S, duration: _ / a, time: c, timeline: u }),
          (c += _),
          S++);
    }
    return l;
  },
  eb = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
  tb = (e) => (t, n, i, r) => {
    if (t === "$$") return "$";
    if (typeof e[n] > "u") return t;
    let o = "" + e[n];
    return n === "RepresentationID" ||
      (i ? (r = parseInt(r, 10)) : (r = 1), o.length >= r)
      ? o
      : `${new Array(r - o.length + 1).join("0")}${o}`;
  },
  Jp = (e, t) => e.replace(eb, tb(t)),
  rb = (e, t) =>
    !e.duration && !t
      ? [
          {
            number: e.startNumber || 1,
            duration: e.sourceDuration,
            time: 0,
            timeline: e.periodStart,
          },
        ]
      : e.duration
        ? cs(e)
        : n_(e, t),
  nb = (e, t) => {
    let n = { RepresentationID: e.id, Bandwidth: e.bandwidth || 0 },
      { initialization: i = { sourceURL: "", range: "" } } = e,
      r = _n({
        baseUrl: e.baseUrl,
        source: Jp(i.sourceURL, n),
        range: i.range,
      });
    return rb(e, t).map((a) => {
      ((n.Number = a.number), (n.Time = a.time));
      let s = Jp(e.media || "", n),
        u = e.timescale || 1,
        l = e.presentationTimeOffset || 0,
        c = e.periodStart + (a.time - l) / u;
      return {
        uri: s,
        timeline: a.timeline,
        duration: a.duration,
        resolvedUri: ji(e.baseUrl || "", s),
        map: r,
        number: a.number,
        presentationTime: c,
      };
    });
  },
  ib = (e, t) => {
    let { baseUrl: n, initialization: i = {} } = e,
      r = _n({ baseUrl: n, source: i.sourceURL, range: i.range }),
      o = _n({ baseUrl: n, source: t.media, range: t.mediaRange });
    return ((o.map = r), o);
  },
  ob = (e, t) => {
    let { duration: n, segmentUrls: i = [], periodStart: r } = e;
    if ((!n && !t) || (n && t)) throw new Error(pn.SEGMENT_TIME_UNSPECIFIED);
    let o = i.map((u) => ib(e, u)),
      a;
    return (
      n && (a = cs(e)),
      t && (a = n_(e, t)),
      a
        .map((u, l) => {
          if (o[l]) {
            let c = o[l],
              d = e.timescale || 1,
              f = e.presentationTimeOffset || 0;
            return (
              (c.timeline = u.timeline),
              (c.duration = u.duration),
              (c.number = u.number),
              (c.presentationTime = r + (u.time - f) / d),
              c
            );
          }
        })
        .filter((u) => u)
    );
  },
  ab = ({ attributes: e, segmentInfo: t }) => {
    let n, i;
    t.template
      ? ((i = nb), (n = ye(e, t.template)))
      : t.base
        ? ((i = t_), (n = ye(e, t.base)))
        : t.list && ((i = ob), (n = ye(e, t.list)));
    let r = { attributes: e };
    if (!i) return r;
    let o = i(n, t.segmentTimeline);
    if (n.duration) {
      let { duration: a, timescale: s = 1 } = n;
      n.duration = a / s;
    } else
      o.length
        ? (n.duration = o.reduce(
            (a, s) => Math.max(a, Math.ceil(s.duration)),
            0,
          ))
        : (n.duration = 0);
    return (
      (r.attributes = n),
      (r.segments = o),
      t.base && n.indexRange && ((r.sidx = o[0]), (r.segments = [])),
      r
    );
  },
  sb = (e) => e.map(ab),
  ae = (e, t) => e_(e.childNodes).filter(({ tagName: n }) => n === t),
  fn = (e) => e.textContent.trim(),
  ub = (e) => parseFloat(e.split("/").reduce((t, n) => t / n)),
  xr = (e) => {
    let s =
      /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(
        e,
      );
    if (!s) return 0;
    let [u, l, c, d, f, _] = s.slice(1);
    return (
      parseFloat(u || 0) * 31536e3 +
      parseFloat(l || 0) * 2592e3 +
      parseFloat(c || 0) * 86400 +
      parseFloat(d || 0) * 3600 +
      parseFloat(f || 0) * 60 +
      parseFloat(_ || 0)
    );
  },
  lb = (e) => (
    /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"),
    Date.parse(e)
  ),
  Kp = {
    mediaPresentationDuration(e) {
      return xr(e);
    },
    availabilityStartTime(e) {
      return lb(e) / 1e3;
    },
    minimumUpdatePeriod(e) {
      return xr(e);
    },
    suggestedPresentationDelay(e) {
      return xr(e);
    },
    type(e) {
      return e;
    },
    timeShiftBufferDepth(e) {
      return xr(e);
    },
    start(e) {
      return xr(e);
    },
    width(e) {
      return parseInt(e, 10);
    },
    height(e) {
      return parseInt(e, 10);
    },
    bandwidth(e) {
      return parseInt(e, 10);
    },
    frameRate(e) {
      return ub(e);
    },
    startNumber(e) {
      return parseInt(e, 10);
    },
    timescale(e) {
      return parseInt(e, 10);
    },
    presentationTimeOffset(e) {
      return parseInt(e, 10);
    },
    duration(e) {
      let t = parseInt(e, 10);
      return isNaN(t) ? xr(e) : t;
    },
    d(e) {
      return parseInt(e, 10);
    },
    t(e) {
      return parseInt(e, 10);
    },
    r(e) {
      return parseInt(e, 10);
    },
    presentationTime(e) {
      return parseInt(e, 10);
    },
    DEFAULT(e) {
      return e;
    },
  },
  fe = (e) =>
    e && e.attributes
      ? e_(e.attributes).reduce((t, n) => {
          let i = Kp[n.name] || Kp.DEFAULT;
          return ((t[n.name] = i(n.value)), t);
        }, {})
      : {},
  cb = {
    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
    "urn:mpeg:dash:mp4protection:2011": "mp4protection",
  },
  Ji = (e, t) =>
    t.length
      ? Ar(
          e.map(function (n) {
            return t.map(function (i) {
              let r = fn(i),
                o = ji(n.baseUrl, r),
                a = ye(fe(i), { baseUrl: o });
              return (
                o !== r &&
                  !a.serviceLocation &&
                  n.serviceLocation &&
                  (a.serviceLocation = n.serviceLocation),
                a
              );
            });
          }),
        )
      : e,
  ms = (e) => {
    let t = ae(e, "SegmentTemplate")[0],
      n = ae(e, "SegmentList")[0],
      i = n && ae(n, "SegmentURL").map((d) => ye({ tag: "SegmentURL" }, fe(d))),
      r = ae(e, "SegmentBase")[0],
      o = n || t,
      a = o && ae(o, "SegmentTimeline")[0],
      s = n || r || t,
      u = s && ae(s, "Initialization")[0],
      l = t && fe(t);
    l && u
      ? (l.initialization = u && fe(u))
      : l &&
        l.initialization &&
        (l.initialization = { sourceURL: l.initialization });
    let c = {
      template: l,
      segmentTimeline: a && ae(a, "S").map((d) => fe(d)),
      list: n && ye(fe(n), { segmentUrls: i, initialization: fe(u) }),
      base: r && ye(fe(r), { initialization: fe(u) }),
    };
    return (
      Object.keys(c).forEach((d) => {
        c[d] || delete c[d];
      }),
      c
    );
  },
  db = (e, t, n) => (i) => {
    let r = ae(i, "BaseURL"),
      o = Ji(t, r),
      a = ye(e, fe(i)),
      s = ms(i);
    return o.map((u) => ({ segmentInfo: ye(n, s), attributes: ye(a, u) }));
  },
  mb = (e) =>
    e.reduce((t, n) => {
      let i = fe(n);
      i.schemeIdUri && (i.schemeIdUri = i.schemeIdUri.toLowerCase());
      let r = cb[i.schemeIdUri];
      if (r) {
        t[r] = { attributes: i };
        let o = ae(n, "cenc:pssh")[0];
        if (o) {
          let a = fn(o);
          t[r].pssh = a && Qr(a);
        }
      }
      return t;
    }, {}),
  pb = (e) => {
    if (e.schemeIdUri === "urn:scte:dash:cc:cea-608:2015")
      return (typeof e.value != "string" ? [] : e.value.split(";")).map((n) => {
        let i, r;
        return (
          (r = n),
          /^CC\d=/.test(n)
            ? ([i, r] = n.split("="))
            : /^CC\d$/.test(n) && (i = n),
          { channel: i, language: r }
        );
      });
    if (e.schemeIdUri === "urn:scte:dash:cc:cea-708:2015")
      return (typeof e.value != "string" ? [] : e.value.split(";")).map((n) => {
        let i = {
          channel: void 0,
          language: void 0,
          aspectRatio: 1,
          easyReader: 0,
          "3D": 0,
        };
        if (/=/.test(n)) {
          let [r, o = ""] = n.split("=");
          ((i.channel = r),
            (i.language = n),
            o.split(",").forEach((a) => {
              let [s, u] = a.split(":");
              s === "lang"
                ? (i.language = u)
                : s === "er"
                  ? (i.easyReader = Number(u))
                  : s === "war"
                    ? (i.aspectRatio = Number(u))
                    : s === "3D" && (i["3D"] = Number(u));
            }));
        } else i.language = n;
        return (i.channel && (i.channel = "SERVICE" + i.channel), i);
      });
  },
  _b = (e) =>
    Ar(
      ae(e.node, "EventStream").map((t) => {
        let n = fe(t),
          i = n.schemeIdUri;
        return ae(t, "Event").map((r) => {
          let o = fe(r),
            a = o.presentationTime || 0,
            s = n.timescale || 1,
            u = o.duration || 0,
            l = a / s + e.attributes.start;
          return {
            schemeIdUri: i,
            value: n.value,
            id: o.id,
            start: l,
            end: l + u / s,
            messageData: fn(r) || o.messageData,
            contentEncoding: n.contentEncoding,
            presentationTimeOffset: n.presentationTimeOffset || 0,
          };
        });
      }),
    ),
  fb = (e, t, n) => (i) => {
    let r = fe(i),
      o = Ji(t, ae(i, "BaseURL")),
      a = ae(i, "Role")[0],
      s = { role: fe(a) },
      u = ye(e, r, s),
      l = ae(i, "Accessibility")[0],
      c = pb(fe(l));
    c && (u = ye(u, { captionServices: c }));
    let d = ae(i, "Label")[0];
    if (d && d.childNodes.length) {
      let A = d.childNodes[0].nodeValue.trim();
      u = ye(u, { label: A });
    }
    let f = mb(ae(i, "ContentProtection"));
    Object.keys(f).length && (u = ye(u, { contentProtection: f }));
    let _ = ms(i),
      g = ae(i, "Representation"),
      m = ye(n, _);
    return Ar(g.map(db(u, o, m)));
  },
  hb = (e, t) => (n, i) => {
    let r = Ji(t, ae(n.node, "BaseURL")),
      o = ye(e, { periodStart: n.attributes.start });
    typeof n.attributes.duration == "number" &&
      (o.periodDuration = n.attributes.duration);
    let a = ae(n.node, "AdaptationSet"),
      s = ms(n.node);
    return Ar(a.map(fb(o, r, s)));
  },
  gb = (e, t) => {
    if (
      (e.length > 1 &&
        t({
          type: "warn",
          message:
            "The MPD manifest should contain no more than one ContentSteering tag",
        }),
      !e.length)
    )
      return null;
    let n = ye({ serverURL: fn(e[0]) }, fe(e[0]));
    return ((n.queryBeforeStart = n.queryBeforeStart === "true"), n);
  },
  yb = ({ attributes: e, priorPeriodAttributes: t, mpdType: n }) =>
    typeof e.start == "number"
      ? e.start
      : t && typeof t.start == "number" && typeof t.duration == "number"
        ? t.start + t.duration
        : !t && n === "static"
          ? 0
          : null,
  vb = (e, t = {}) => {
    let {
        manifestUri: n = "",
        NOW: i = Date.now(),
        clientOffset: r = 0,
        eventHandler: o = function () {},
      } = t,
      a = ae(e, "Period");
    if (!a.length) throw new Error(pn.INVALID_NUMBER_OF_PERIOD);
    let s = ae(e, "Location"),
      u = fe(e),
      l = Ji([{ baseUrl: n }], ae(e, "BaseURL")),
      c = ae(e, "ContentSteering");
    ((u.type = u.type || "static"),
      (u.sourceDuration = u.mediaPresentationDuration || 0),
      (u.NOW = i),
      (u.clientOffset = r),
      s.length && (u.locations = s.map(fn)));
    let d = [];
    return (
      a.forEach((f, _) => {
        let g = fe(f),
          m = d[_ - 1];
        ((g.start = yb({
          attributes: g,
          priorPeriodAttributes: m ? m.attributes : null,
          mpdType: u.type,
        })),
          d.push({ node: f, attributes: g }));
      }),
      {
        locations: u.locations,
        contentSteeringInfo: gb(c, o),
        representationInfo: Ar(d.map(hb(u, l))),
        eventStream: Ar(d.map(_b)),
      }
    );
  },
  bb = (e) => {
    if (e === "") throw new Error(pn.DASH_EMPTY_MANIFEST);
    let t = new Xp.DOMParser(),
      n,
      i;
    try {
      ((n = t.parseFromString(e, "application/xml")),
        (i =
          n && n.documentElement.tagName === "MPD" ? n.documentElement : null));
    } catch {}
    if (!i || (i && i.getElementsByTagName("parsererror").length > 0))
      throw new Error(pn.DASH_INVALID_XML);
    return i;
  };
var i_ = (e, t = {}) => {
  let n = vb(bb(e), t),
    i = sb(n.representationInfo);
  return Xv({
    dashPlaylists: i,
    locations: n.locations,
    contentSteering: n.contentSteeringInfo,
    sidxMapping: t.sidxMapping,
    previousManifest: t.previousManifest,
    eventStream: n.eventStream,
  });
};
function wb(e) {
  for (let t in e) {
    let n = e[t];
    for (let i in n) {
      let r = n[i];
      if ("playlists" in r) return B(r.playlists);
    }
  }
  return z;
}
function o_(e) {
  try {
    return Sb(e);
  } catch (t) {
    return R(`Error parsing MPD: ${t}`);
  }
}
function Sb(e) {
  let t = i_(e),
    n = t.duration || "unknown",
    i = xb(t),
    r = [],
    o = t.playlists;
  if (o.length == 0) {
    let s = wb(t.mediaGroups.AUDIO);
    s.isSome() && (o = s.value);
  }
  let a = 0;
  for (let s of o) {
    if (!s.attributes.CODECS) continue;
    let u = vi(s.attributes.CODECS);
    if (u.isNone() && ((u = ym(s.attributes.CODECS)), u.isNone())) continue;
    let l = z;
    s.attributes.RESOLUTION &&
      s.attributes.RESOLUTION.width &&
      s.attributes.RESOLUTION.height &&
      (l = B({
        width: s.attributes.RESOLUTION.width,
        height: s.attributes.RESOLUTION.height,
      }));
    let c;
    s.attributes.BANDWIDTH
      ? (c = { bitrate: B(s.attributes.BANDWIDTH), size: l })
      : (c = { bitrate: z, size: l });
    let d = { quality: c, demuxer: u.value, index: a };
    (r.push(d), a++);
  }
  return ((r = xi(r)), Ai(r) ? U([r, n, i]) : R("No playlists"));
}
function xb(e) {
  for (let t of e.playlists)
    if (t.contentProtection && Ti(t.contentProtection)) return !0;
  return !1;
}
async function a_(e, t) {
  let n = e[0].av.video || e[0].av.audio;
  try {
    let i = await Lt([n.href], t),
      r = await fetch(n, { headers: t, signal: AbortSignal.timeout(5e3) });
    await Bt(i);
    let o = await r.text(),
      a = lr(o);
    if (a.isOk()) {
      let s = ki(a.value),
        u = Ii(a.value);
      return { duration: s, has_drm: u };
    }
  } catch {
    console.warn(
      "request timeout while calculating duration & checking for DRM",
    );
  }
  return { duration: "unknown", has_drm: !1 };
}
var Ab = new Set([
  "youtube.com",
  "vimeo.com",
  "instagram.com",
  "ok.ru",
  "vk.com",
  "vk.ru",
  "vkvideo.ru",
  "canva.com",
  "iq.com",
]);
function _s(e, t) {
  let n = new Headers(),
    i = e.get(t);
  if (i) for (let { name: r, value: o } of i[1]) o && n.append(r, o);
  return n;
}
async function s_(e, t, n) {
  let i = _s(e, n.requestId),
    r = xe(t);
  if (r.isNone()) return;
  let o = r.value;
  Va(o) && (o.search = "");
  let a = await Lt([o.href], i),
    s = await fetch(o, { headers: i });
  if ((Bt(a), !s.ok)) return;
  let u = await s.text(),
    l = await Dm(u, o, z, Ci(o), Va(o)),
    c = Le(n.tabId),
    d = xe(n.initiator || n.originUrl);
  if (l.isOk()) {
    let f = l.value,
      { duration: _, has_drm: g } = await a_(f, i);
    mt({
      name: "on_media",
      data: {
        tab_id: c,
        media: {
          master_url: o,
          is_youtube: !1,
          prefered_entry: z,
          duration: _,
          initiator: d,
          hash: `media_hash_${st(u + o.href)}`,
          sent_headers: i,
          thumbnail_url: z,
          title: z,
          filename: z,
          type: "m3u8_playlist",
          playlist: f,
          discovery_timestamp_ms: Date.now(),
          has_drm: g,
          cache: "default",
        },
      },
    });
  } else {
    let f = lr(u);
    if (f.isOk()) {
      let _ = ki(f.value),
        g = !1;
      (d.isSome() && (g = Hm(d.value)),
        mt({
          name: "on_media",
          data: {
            tab_id: c,
            media: {
              is_youtube: !1,
              has_drm: Ii(f.value),
              duration: _,
              initiator: d,
              hash: `media_hash_${st(u + o.href)}`,
              sent_headers: i,
              thumbnail_url: z,
              title: z,
              filename: z,
              type: "m3u8",
              url: o,
              demuxer: g ? "mp3" : "mp4",
              discovery_timestamp_ms: Date.now(),
              cache: "default",
            },
          },
        }));
    }
  }
}
async function Db(e, t, n, i) {
  let r = _s(t, i.requestId),
    o = xe(n);
  if (o.isNone()) return;
  let a = o.value,
    s = await Lt([a.href], r),
    u = await fetch(a, { headers: r });
  if ((Bt(s), !u.ok)) return;
  let l = await u.text(),
    c = o_(l);
  if (c.isErr()) {
    console.log(c.error);
    return;
  }
  let d = Le(i.tabId),
    f = xe(i.initiator || i.originUrl);
  f.isSome() && e.set(f.value.href, Date.now());
  let [_, g, m] = c.value;
  mt({
    name: "on_media",
    data: {
      tab_id: d,
      media: {
        master_url: a,
        has_drm: m,
        is_youtube: !1,
        prefered_entry: z,
        duration: g,
        initiator: f,
        hash: `media_hash_${st(l)}`,
        sent_headers: r,
        thumbnail_url: z,
        title: z,
        filename: z,
        type: "mpd_playlist",
        playlist: _,
        discovery_timestamp_ms: Date.now(),
        cache: "default",
      },
    },
  });
}
function l_(e) {
  let t = e.split(";");
  if (
    (t[0] && (e = t[0].trim().toLowerCase()),
    (t = e.split("/")),
    !t[0] || !t[1])
  )
    return z;
  let n = t[0] == "audio" ? "audio" : "video";
  for (let i of vm) {
    let { regex: r } = i;
    if (r.test(t[1])) return B(i[n]);
  }
  return z;
}
function u_(e) {
  if (e) {
    let t = e.match(/^(.*)\.([^\.]+)$/);
    if (t && t[1] && t[2])
      return B({ basename: t[1], extension_lowercase: t[2].toLowerCase() });
  }
  return z;
}
function Eb(e, t, n) {
  let i, r;
  if ((n.isSome() && (i = n.value.pathname.split("/").pop()), e)) {
    let d = e.match(
      /filename\*=(?:UTF-8'')?['"]?([^'";]*)['"]?|filename=['"]?([^'";]*)['"]?/i,
    );
    d && (d[1] ? (r = decodeURIComponent(d[1])) : d[2] && (r = d[2]));
  }
  let o = [],
    a = u_(i),
    s = u_(r);
  if ((a.isSome() && o.push(a.value), s.isSome() && o.push(s.value), t)) {
    let d = l_(t);
    d.isSome() && o.push({ basename: void 0, extension_lowercase: d.value });
  }
  let u = z,
    l,
    c = z;
  for (let d of o) {
    let { basename: f, extension_lowercase: _ } = d;
    bm(_) && ((l = _), f && (c = B(f)));
  }
  return (
    l && gm(l) && ((u = B(l)), Gr(u.value) && (l = yi(u.value, "mp4"))),
    l || ((l = "mp4"), (u = z)),
    [u, l, c]
  );
}
function Tb(e, t, n, i) {
  let r = xe(i.url);
  if (r.isNone()) return;
  let o,
    a = n.get("content-length"),
    s = n.get("content-range");
  if (
    (typeof s == "string" && (a = s.split("/")?.[1] || a),
    a && ((o = parseInt(a)), !isNaN(o) && o < 5e5))
  )
    return;
  let u = xe(i.initiator || i.originUrl);
  if (u.isSome() && e.has(u.value.href) && (!o || o < 2e7)) return;
  let l = _s(t, i.requestId),
    c = z;
  if (a) {
    let m = parseInt(a);
    isNaN(m) || (c = B(m));
  }
  let d = n.get("accept-ranges") == "bytes" || n.has("content-range"),
    [f, _, g] = Eb(n.get("content-disposition"), n.get("content-type"), r);
  mt({
    name: "on_media",
    data: {
      tab_id: Le(i.tabId),
      media: {
        is_youtube: !1,
        size: c,
        initiator: u,
        hash: `media_hash_${st(r.value.href)}`,
        sent_headers: l,
        thumbnail_url: z,
        title: z,
        filename: g,
        url: r.value,
        type: "http",
        libav_demuxer: f,
        extension: _,
        discovery_timestamp_ms: Date.now(),
        supports_byte_ranges: d,
        has_drm: !1,
        cache: "default",
      },
    },
  });
}
function kb(e, t, n) {
  if (n.statusCode < 200 || n.statusCode > 299) return;
  let i = xe(n.initiator || n.originUrl);
  if (i.isSome()) {
    if (
      /^(moz|chrome)-extension/.test(i.value.href) ||
      !i.value.href.startsWith("http")
    )
      return;
    let u = i.value.hostname.split(".").slice(-2).join(".");
    if (Ab.has(u)) return;
  }
  if (n.tabId <= 0 && (i.isNone() || !i.value.href.startsWith("http"))) return;
  let r = xe(n.url);
  if (r.isSome() && r.value.pathname.match(/\.ts$|\.m4s$|\.m2ts$/i)) return;
  let o = new Headers();
  if (n.responseHeaders) {
    for (let { name: u, value: l } of n.responseHeaders)
      if (l)
        try {
          o.append(u, l);
        } catch {
          console.warn("Failed to add header. Invalid header?", u, l);
        }
  }
  let a = o.get("content-type");
  if (
    n.type == "xmlhttprequest" ||
    n.type == "other" ||
    n.type == "main_frame"
  ) {
    let u = a?.match(/mpegurl/i),
      l = n.url.match(/hls|m3u8/i),
      c = n.url.match(/\/api\/playlist\/master\//);
    if (u || l || c) {
      s_(t, n.url, n);
      return;
    }
    if (Zm(i, n.url)) {
      let d = n.url.replace(".mpd", ".m3u8");
      s_(t, d, n);
      return;
    }
    if (n.url.match(/\.mpd/i)) {
      Db(e, t, n.url, n);
      return;
    }
  }
  let s = a ? l_(a) : z;
  if (n.type == "media" || s.isSome()) {
    Tb(e, t, o, n);
    return;
  }
}
function c_() {
  let e = new Map(),
    t = new Map(),
    n = ["xmlhttprequest", "media", "main_frame", "sub_frame", "other"],
    i = ["<all_urls>"];
  {
    let r = Ee ? ["requestHeaders", "extraHeaders"] : ["requestHeaders"];
    ps.default.webRequest.onSendHeaders.addListener(
      (a) => {
        a.requestHeaders && e.set(a.requestId, [a.timeStamp, a.requestHeaders]);
      },
      { urls: i, types: n },
      r,
    );
    let o = 600 * 1e3;
    setInterval(() => {
      let a = Date.now();
      for (let [s, [u]] of e.entries()) a - u > o && e.delete(s);
      for (let [s, u] of t.entries()) a - u > o && t.delete(s);
    }, o);
  }
  {
    let r = Ee ? ["responseHeaders", "extraHeaders"] : ["responseHeaders"];
    ps.default.webRequest.onResponseStarted.addListener(
      (o) => {
        kb(t, e, o);
      },
      { urls: i, types: n },
      r,
    );
  }
}
var d_ = _e(Ae(), 1);
async function m_(e, t) {
  let n = (a) => {
      let s = [
          { sel: "#vp-preview", attr: "data-thumb" },
          { sel: "meta[property='og:image:secure_url']", attr: "content" },
          { sel: "meta[property='og:image']", attr: "content" },
          { sel: "link[as='image']", attr: "href" },
          { sel: "link[rel='thumbnail']", attr: "href" },
          { sel: "link[rel='image_src']", attr: "href" },
          { sel: "meta[property='twitter:image']", attr: "content" },
          { sel: "video", attr: "poster" },
        ],
        u = null;
      for (let d of s) {
        let f = [...document.querySelectorAll(d.sel)];
        for (let _ of f) {
          let g = _.getAttribute(d.attr);
          typeof g == "string" && (u = g);
        }
      }
      let l = document.querySelector("meta[property='og:title']"),
        c;
      return (
        a ? (c = document.title) : (c = l?.content || document.title),
        { thumbnail_res: u, title_res: c }
      );
    },
    i = await d_.default.scripting.executeScript({
      target: { tabId: e },
      injectImmediately: !0,
      args: [t],
      func: n,
    }),
    r = z;
  typeof i?.[0]?.result?.thumbnail_res == "string" &&
    (r = xe(i[0].result.thumbnail_res));
  let o = z;
  return (
    typeof i?.[0]?.result?.title_res == "string" &&
      i[0].result.title_res &&
      (o = B(i[0].result.title_res)),
    { thumbnail: r, title: o }
  );
}
var Dr = _e(Ae(), 1);
async function p_() {
  let t = (await Dr.default.tabs.query({ currentWindow: !0, active: !0 }))[0];
  return t
    ? { tab_id: Le(t.id), win_id: ka(t.windowId) }
    : { tab_id: z, win_id: z };
}
function __(e) {
  let t = async (n, i) => {
    if (i) {
      let r;
      try {
        r = await Dr.default.tabs.get(i);
      } catch {}
      if (r) {
        let o = r.url || r.pendingUrl;
        if (o && o.startsWith("chrome-extension")) return;
        let a = Le(i);
        if (a.isSome()) {
          let s = ka(n);
          e({ win_id: s, tab_id: a });
        }
      }
    }
  };
  (Dr.default.tabs.onActivated.addListener(async (n) => {
    t(n.windowId, n.tabId);
  }),
    Dr.default.windows.onFocusChanged.addListener(async () => {
      let n = await Dr.default.tabs.query({
        lastFocusedWindow: !0,
        active: !0,
      });
      t(n[0]?.windowId, n[0]?.id);
    }));
}
var Ht = _e(Ae(), 1);
async function Ib(e, t) {
  await Ht.default.runtime.sendMessage({ msg: e, channel: t });
}
async function $b(e, t, n) {
  await Ht.default.tabs.sendMessage(e, { msg: t, channel: n });
}
async function hn(e) {
  let t = kt.FromServiceToContent;
  try {
    return (await Ib(e, t), !0);
  } catch {
    return !1;
  }
}
function Zt(e, t) {
  let n = kt.FromServiceToInjected;
  $b(e, t, n);
}
function f_(e) {
  let t = (n, i) => {
    n.channel == kt.FromInjectedToService && e(n.msg, i);
  };
  return (
    Ht.default.runtime.onMessage.addListener(t),
    () => {
      Ht.default.runtime.onMessage.removeListener(t);
    }
  );
}
function Er(e) {
  let t = async (n, i) => {
    n.channel == kt.FromContentToService && (await e(n.msg, i));
  };
  return (
    Ht.default.runtime.onMessage.addListener(t),
    () => {
      Ht.default.runtime.onMessage.removeListener(t);
    }
  );
}
var Tr = new Map();
async function h_(e) {
  Er(async (t) => {
    if (t.name == "request_preview") {
      let n = t.data.tab_id,
        i = t.data.media_hash,
        r = e().discovered.get(n)?.media.get(i),
        o = () => {
          (Tr.delete(a),
            hn({ name: "on_no_preview", data: { media_hash: i } }));
        };
      if (!r || (r.type == "http" && !r.supports_byte_ranges)) {
        o();
        return;
      }
      let a = `${n}_${i}`,
        s = Tr.get(a);
      if (s) {
        s.filename.isSome() &&
          hn({
            name: "on_preview_available",
            data: { tab_id: n, media_hash: i, filename: s.filename.value },
          });
        return;
      }
      let u = qm(r);
      if (u.isNone()) {
        (console.error("Couln't build download args for preview"), o());
        return;
      }
      let l = u.value;
      Tr.set(a, { tab_id: n, media_hash: i, filename: z });
      let c = await Ha(l);
      if (c.isOk() && !c.value.aborted_no_partial) {
        let d = c.value.internal_filename;
        (Tr.set(a, { tab_id: n, media_hash: i, filename: B(d) }),
          hn({
            name: "on_preview_available",
            data: { tab_id: n, media_hash: i, filename: d },
          }));
      } else
        (c.isErr() && console.error(`Error while build preview: ${c.error}`),
          o());
    }
  });
}
function g_(e) {
  setInterval(async () => {
    let t = await navigator.storage.getDirectory(),
      n = (r) => {
        let o = `${r.tab_id}_${r.media_hash}`;
        r.filename.isSome() && (t.removeEntry(r.filename.value), Tr.delete(o));
      },
      i = await hn({ name: "ping", data: null });
    for (let r of Tr.values()) {
      let o = e().current_win_tab.tab_id;
      i && o.isSome() ? r.tab_id != o.value && n(r) : n(r);
    }
  }, 2e4);
}
var Ct = _e(Ae(), 1);
ze();
ze();
var er = _e(Ae(), 1);
var E = {};
Ke(E, {
  $brand: () => Ki,
  $input: () => Il,
  $output: () => kl,
  NEVER: () => h2,
  ZodAny: () => Of,
  ZodArray: () => Mf,
  ZodBase64: () => Fc,
  ZodBase64URL: () => Lc,
  ZodBigInt: () => Yn,
  ZodBigIntFormat: () => qc,
  ZodBoolean: () => Xn,
  ZodCIDRv4: () => Uc,
  ZodCIDRv6: () => jc,
  ZodCUID: () => Pc,
  ZodCUID2: () => zc,
  ZodCatch: () => nh,
  ZodCustom: () => Yo,
  ZodDate: () => Jo,
  ZodDefault: () => Kf,
  ZodDiscriminatedUnion: () => Uf,
  ZodE164: () => Bc,
  ZodEmail: () => Tc,
  ZodEmoji: () => Ic,
  ZodEnum: () => Jn,
  ZodError: () => dS,
  ZodFile: () => Wf,
  ZodGUID: () => Vo,
  ZodIPv4: () => Cc,
  ZodIPv6: () => Mc,
  ZodISODate: () => jo,
  ZodISODateTime: () => Uo,
  ZodISODuration: () => Lo,
  ZodISOTime: () => Fo,
  ZodIntersection: () => jf,
  ZodIssueCode: () => _2,
  ZodJWT: () => Vc,
  ZodKSUID: () => Rc,
  ZodLazy: () => lh,
  ZodLiteral: () => Zf,
  ZodMap: () => Vf,
  ZodNaN: () => oh,
  ZodNanoID: () => $c,
  ZodNever: () => Rf,
  ZodNonOptional: () => Kc,
  ZodNull: () => zf,
  ZodNullable: () => Jf,
  ZodNumber: () => Kn,
  ZodNumberFormat: () => Mr,
  ZodObject: () => Ko,
  ZodOptional: () => Jc,
  ZodPipe: () => Xc,
  ZodPrefault: () => Yf,
  ZodPromise: () => dh,
  ZodReadonly: () => ah,
  ZodRealError: () => Cr,
  ZodRecord: () => Wc,
  ZodSet: () => qf,
  ZodString: () => Wo,
  ZodStringFormat: () => ne,
  ZodSuccess: () => rh,
  ZodSymbol: () => $f,
  ZodTemplateLiteral: () => uh,
  ZodTransform: () => Qf,
  ZodTuple: () => Lf,
  ZodType: () => Q,
  ZodULID: () => Nc,
  ZodURL: () => kc,
  ZodUUID: () => wt,
  ZodUndefined: () => Pf,
  ZodUnion: () => Gc,
  ZodUnknown: () => Hc,
  ZodVoid: () => Cf,
  ZodXID: () => Oc,
  _ZodString: () => Ec,
  _default: () => Xf,
  any: () => qS,
  array: () => Zc,
  base64: () => PS,
  base64url: () => zS,
  bigint: () => jS,
  boolean: () => If,
  catch: () => ih,
  check: () => mh,
  cidrv4: () => IS,
  cidrv6: () => $S,
  clone: () => Ve,
  coerce: () => Yc,
  config: () => ce,
  core: () => bt,
  cuid: () => SS,
  cuid2: () => xS,
  custom: () => l2,
  date: () => ZS,
  discriminatedUnion: () => KS,
  e164: () => NS,
  email: () => pS,
  emoji: () => bS,
  endsWith: () => Bn,
  enum: () => Hf,
  file: () => n2,
  flattenError: () => Tn,
  float32: () => RS,
  float64: () => CS,
  formatError: () => kn,
  function: () => _c,
  getErrorMap: () => y2,
  globalRegistry: () => rt,
  gt: () => yt,
  gte: () => Me,
  guid: () => _S,
  includes: () => Fn,
  instanceof: () => c2,
  int: () => Dc,
  int32: () => MS,
  int64: () => FS,
  intersection: () => Ff,
  ipv4: () => TS,
  ipv6: () => kS,
  iso: () => Bo,
  json: () => m2,
  jwt: () => OS,
  keyof: () => GS,
  ksuid: () => ES,
  lazy: () => ch,
  length: () => Rr,
  literal: () => Gf,
  locales: () => On,
  looseObject: () => JS,
  lowercase: () => Un,
  lt: () => gt,
  lte: () => We,
  map: () => e2,
  maxLength: () => Or,
  maxSize: () => Nr,
  mime: () => Vn,
  minLength: () => Rt,
  minSize: () => Yt,
  multipleOf: () => Xt,
  nan: () => a2,
  nanoid: () => wS,
  nativeEnum: () => r2,
  negative: () => oc,
  never: () => Qo,
  nonnegative: () => sc,
  nonoptional: () => th,
  nonpositive: () => ac,
  normalize: () => qn,
  null: () => Nf,
  nullable: () => Zo,
  nullish: () => i2,
  number: () => kf,
  object: () => WS,
  optional: () => Ho,
  overwrite: () => vt,
  parse: () => bc,
  parseAsync: () => wc,
  partialRecord: () => YS,
  pipe: () => Go,
  positive: () => ic,
  prefault: () => eh,
  preprocess: () => p2,
  prettifyError: () => ks,
  promise: () => u2,
  property: () => uc,
  readonly: () => sh,
  record: () => Bf,
  refine: () => ph,
  regex: () => Mn,
  regexes: () => Jt,
  registry: () => fo,
  safeParse: () => Sc,
  safeParseAsync: () => xc,
  set: () => t2,
  setErrorMap: () => g2,
  size: () => Cn,
  startsWith: () => Ln,
  strictObject: () => QS,
  string: () => Ac,
  stringbool: () => d2,
  success: () => o2,
  superRefine: () => _h,
  symbol: () => BS,
  templateLiteral: () => s2,
  toJSONSchema: () => fc,
  toLowerCase: () => Zn,
  toUpperCase: () => Gn,
  transform: () => Qc,
  treeifyError: () => Ts,
  trim: () => Hn,
  tuple: () => XS,
  uint32: () => US,
  uint64: () => LS,
  ulid: () => AS,
  undefined: () => VS,
  union: () => Xo,
  unknown: () => qo,
  uppercase: () => jn,
  url: () => vS,
  uuid: () => fS,
  uuidv4: () => hS,
  uuidv6: () => gS,
  uuidv7: () => yS,
  void: () => HS,
  xid: () => DS,
});
var bt = {};
Ke(bt, {
  $ZodAny: () => tl,
  $ZodArray: () => zn,
  $ZodAsyncError: () => tt,
  $ZodBase64: () => Zu,
  $ZodBase64URL: () => Gu,
  $ZodBigInt: () => mo,
  $ZodBigIntFormat: () => Ku,
  $ZodBoolean: () => Pn,
  $ZodCIDRv4: () => Vu,
  $ZodCIDRv6: () => qu,
  $ZodCUID: () => zu,
  $ZodCUID2: () => Nu,
  $ZodCatch: () => wl,
  $ZodCheck: () => se,
  $ZodCheckBigIntFormat: () => uu,
  $ZodCheckEndsWith: () => bu,
  $ZodCheckGreaterThan: () => so,
  $ZodCheckIncludes: () => yu,
  $ZodCheckLengthEquals: () => _u,
  $ZodCheckLessThan: () => ao,
  $ZodCheckLowerCase: () => hu,
  $ZodCheckMaxLength: () => mu,
  $ZodCheckMaxSize: () => lu,
  $ZodCheckMimeType: () => Su,
  $ZodCheckMinLength: () => pu,
  $ZodCheckMinSize: () => cu,
  $ZodCheckMultipleOf: () => au,
  $ZodCheckNumberFormat: () => su,
  $ZodCheckOverwrite: () => xu,
  $ZodCheckProperty: () => wu,
  $ZodCheckRegex: () => fu,
  $ZodCheckSizeEquals: () => du,
  $ZodCheckStartsWith: () => vu,
  $ZodCheckStringFormat: () => $r,
  $ZodCheckUpperCase: () => gu,
  $ZodCustom: () => Tl,
  $ZodDate: () => il,
  $ZodDefault: () => gl,
  $ZodDiscriminatedUnion: () => al,
  $ZodE164: () => Wu,
  $ZodEmail: () => ku,
  $ZodEmoji: () => $u,
  $ZodEnum: () => dl,
  $ZodError: () => En,
  $ZodFile: () => pl,
  $ZodFunction: () => Mo,
  $ZodGUID: () => Eu,
  $ZodIPv4: () => Lu,
  $ZodIPv6: () => Bu,
  $ZodISODate: () => Uu,
  $ZodISODateTime: () => Mu,
  $ZodISODuration: () => Fu,
  $ZodISOTime: () => ju,
  $ZodIntersection: () => sl,
  $ZodJWT: () => Qu,
  $ZodKSUID: () => Cu,
  $ZodLazy: () => El,
  $ZodLiteral: () => ml,
  $ZodMap: () => ll,
  $ZodNaN: () => Sl,
  $ZodNanoID: () => Pu,
  $ZodNever: () => rl,
  $ZodNonOptional: () => vl,
  $ZodNull: () => el,
  $ZodNullable: () => hl,
  $ZodNumber: () => co,
  $ZodNumberFormat: () => Ju,
  $ZodObject: () => ol,
  $ZodOptional: () => fl,
  $ZodPipe: () => Nn,
  $ZodPrefault: () => yl,
  $ZodPromise: () => Dl,
  $ZodReadonly: () => xl,
  $ZodRealError: () => Ir,
  $ZodRecord: () => ul,
  $ZodRegistry: () => Pr,
  $ZodSet: () => cl,
  $ZodString: () => $n,
  $ZodStringFormat: () => re,
  $ZodSuccess: () => bl,
  $ZodSymbol: () => Xu,
  $ZodTemplateLiteral: () => Al,
  $ZodTransform: () => _l,
  $ZodTuple: () => Kt,
  $ZodType: () => V,
  $ZodULID: () => Ou,
  $ZodURL: () => Iu,
  $ZodUUID: () => Tu,
  $ZodUndefined: () => Yu,
  $ZodUnion: () => po,
  $ZodUnknown: () => Ot,
  $ZodVoid: () => nl,
  $ZodXID: () => Ru,
  $brand: () => Ki,
  $constructor: () => y,
  $input: () => Il,
  $output: () => kl,
  Doc: () => In,
  JSONSchema: () => Df,
  JSONSchemaGenerator: () => Qn,
  _any: () => Xl,
  _array: () => Wn,
  _base64: () => No,
  _base64url: () => Oo,
  _bigint: () => Hl,
  _boolean: () => Vl,
  _catch: () => iS,
  _cidrv4: () => Po,
  _cidrv6: () => zo,
  _coercedBigint: () => Zl,
  _coercedBoolean: () => ql,
  _coercedDate: () => rc,
  _coercedNumber: () => Ml,
  _coercedString: () => Pl,
  _cuid: () => Ao,
  _cuid2: () => Do,
  _custom: () => dc,
  _date: () => tc,
  _default: () => tS,
  _discriminatedUnion: () => qw,
  _e164: () => Ro,
  _email: () => ho,
  _emoji: () => So,
  _endsWith: () => Bn,
  _enum: () => Qw,
  _file: () => cc,
  _float32: () => jl,
  _float64: () => Fl,
  _gt: () => yt,
  _gte: () => Me,
  _guid: () => Rn,
  _includes: () => Fn,
  _int: () => Ul,
  _int32: () => Ll,
  _int64: () => Gl,
  _intersection: () => Hw,
  _ipv4: () => Io,
  _ipv6: () => $o,
  _isoDate: () => Nl,
  _isoDateTime: () => zl,
  _isoDuration: () => Rl,
  _isoTime: () => Ol,
  _jwt: () => Co,
  _ksuid: () => ko,
  _lazy: () => uS,
  _length: () => Rr,
  _literal: () => Kw,
  _lowercase: () => Un,
  _lt: () => gt,
  _lte: () => We,
  _map: () => Gw,
  _max: () => We,
  _maxLength: () => Or,
  _maxSize: () => Nr,
  _mime: () => Vn,
  _min: () => Me,
  _minLength: () => Rt,
  _minSize: () => Yt,
  _multipleOf: () => Xt,
  _nan: () => nc,
  _nanoid: () => xo,
  _nativeEnum: () => Jw,
  _negative: () => oc,
  _never: () => Yl,
  _nonnegative: () => sc,
  _nonoptional: () => rS,
  _nonpositive: () => ac,
  _normalize: () => qn,
  _null: () => Kl,
  _nullable: () => eS,
  _number: () => Cl,
  _optional: () => Yw,
  _overwrite: () => vt,
  _parse: () => Yi,
  _parseAsync: () => to,
  _pipe: () => oS,
  _positive: () => ic,
  _promise: () => lS,
  _property: () => uc,
  _readonly: () => aS,
  _record: () => Zw,
  _refine: () => mc,
  _regex: () => Mn,
  _safeParse: () => no,
  _safeParseAsync: () => io,
  _set: () => Ww,
  _size: () => Cn,
  _startsWith: () => Ln,
  _string: () => $l,
  _stringbool: () => pc,
  _success: () => nS,
  _symbol: () => Ql,
  _templateLiteral: () => sS,
  _toLowerCase: () => Zn,
  _toUpperCase: () => Gn,
  _transform: () => Xw,
  _trim: () => Hn,
  _tuple: () => lc,
  _uint32: () => Bl,
  _uint64: () => Wl,
  _ulid: () => Eo,
  _undefined: () => Jl,
  _union: () => Vw,
  _unknown: () => zr,
  _uppercase: () => jn,
  _url: () => wo,
  _uuid: () => go,
  _uuidv4: () => yo,
  _uuidv6: () => vo,
  _uuidv7: () => bo,
  _void: () => ec,
  _xid: () => To,
  clone: () => Ve,
  config: () => ce,
  flattenError: () => Tn,
  formatError: () => kn,
  function: () => _c,
  globalConfig: () => gn,
  globalRegistry: () => rt,
  isValidBase64: () => Hu,
  isValidBase64URL: () => M_,
  isValidJWT: () => U_,
  locales: () => On,
  parse: () => eo,
  parseAsync: () => ro,
  prettifyError: () => ks,
  regexes: () => Jt,
  registry: () => fo,
  safeParse: () => Is,
  safeParseAsync: () => $s,
  toDotPath: () => v_,
  toJSONSchema: () => fc,
  treeifyError: () => Ts,
  util: () => P,
  version: () => Au,
});
function y(e, t, n) {
  function i(s, u) {
    var l;
    (Object.defineProperty(s, "_zod", { value: s._zod ?? {}, enumerable: !1 }),
      (l = s._zod).traits ?? (l.traits = new Set()),
      s._zod.traits.add(e),
      t(s, u));
    for (let c in a.prototype)
      c in s || Object.defineProperty(s, c, { value: a.prototype[c].bind(s) });
    ((s._zod.constr = a), (s._zod.def = u));
  }
  let r = n?.Parent ?? Object;
  class o extends r {}
  Object.defineProperty(o, "name", { value: e });
  function a(s) {
    var u;
    let l = n?.Parent ? new o() : this;
    (i(l, s), (u = l._zod).deferred ?? (u.deferred = []));
    for (let c of l._zod.deferred) c();
    return l;
  }
  return (
    Object.defineProperty(a, "init", { value: i }),
    Object.defineProperty(a, Symbol.hasInstance, {
      value: (s) =>
        n?.Parent && s instanceof n.Parent ? !0 : s?._zod?.traits?.has(e),
    }),
    Object.defineProperty(a, "name", { value: e }),
    a
  );
}
var Ki = Symbol("zod_brand"),
  tt = class extends Error {
    constructor() {
      super(
        "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
      );
    }
  },
  gn = {};
function ce(e) {
  return (e && Object.assign(gn, e), gn);
}
var P = {};
Ke(P, {
  BIGINT_FORMAT_RANGES: () => Ds,
  Class: () => gs,
  NUMBER_FORMAT_RANGES: () => As,
  aborted: () => Wt,
  allowsEval: () => ws,
  assert: () => Rb,
  assertEqual: () => Pb,
  assertIs: () => Nb,
  assertNever: () => Ob,
  assertNotEqual: () => zb,
  assignProp: () => bs,
  cached: () => bn,
  cleanEnum: () => Gb,
  cleanRegex: () => wn,
  clone: () => Ve,
  createTransparentProxy: () => Fb,
  defineLazy: () => ee,
  esc: () => Gt,
  escapeRegex: () => ht,
  extend: () => Vb,
  finalizeIssue: () => qe,
  floatSafeRemainder: () => vs,
  getElementAtPath: () => Cb,
  getEnumValues: () => vn,
  getLengthableOrigin: () => Dn,
  getParsedType: () => jb,
  getSizableOrigin: () => An,
  isObject: () => kr,
  isPlainObject: () => Sn,
  issue: () => Es,
  joinValues: () => x,
  jsonStringifyReplacer: () => ys,
  merge: () => qb,
  normalizeParams: () => k,
  nullish: () => Nt,
  numKeys: () => Ub,
  omit: () => Bb,
  optionalKeys: () => xs,
  partial: () => Hb,
  pick: () => Lb,
  prefixIssues: () => Ce,
  primitiveTypes: () => Ss,
  promiseAllObject: () => Mb,
  propertyKeyTypes: () => xn,
  randomString: () => Xi,
  required: () => Zb,
  stringifyPrimitive: () => N,
  unwrapMessage: () => yn,
});
function Pb(e) {
  return e;
}
function zb(e) {
  return e;
}
function Nb(e) {}
function Ob(e) {
  throw new Error();
}
function Rb(e) {}
function vn(e) {
  let t = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, r]) => t.indexOf(+i) === -1)
    .map(([i, r]) => r);
}
function x(e, t = "|") {
  return e.map((n) => N(n)).join(t);
}
function ys(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function bn(e) {
  return {
    get value() {
      {
        let n = e();
        return (Object.defineProperty(this, "value", { value: n }), n);
      }
      throw new Error("cached value already set");
    },
  };
}
function Nt(e) {
  return e == null;
}
function wn(e) {
  let t = e.startsWith("^") ? 1 : 0,
    n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function vs(e, t) {
  let n = (e.toString().split(".")[1] || "").length,
    i = (t.toString().split(".")[1] || "").length,
    r = n > i ? n : i,
    o = Number.parseInt(e.toFixed(r).replace(".", "")),
    a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return (o % a) / 10 ** r;
}
function ee(e, t, n) {
  Object.defineProperty(e, t, {
    get() {
      {
        let r = n();
        return ((e[t] = r), r);
      }
      throw new Error("cached value already set");
    },
    set(r) {
      Object.defineProperty(e, t, { value: r });
    },
    configurable: !0,
  });
}
function bs(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function Cb(e, t) {
  return t ? t.reduce((n, i) => n?.[i], e) : e;
}
function Mb(e) {
  let t = Object.keys(e),
    n = t.map((i) => e[i]);
  return Promise.all(n).then((i) => {
    let r = {};
    for (let o = 0; o < t.length; o++) r[t[o]] = i[o];
    return r;
  });
}
function Xi(e = 10) {
  let t = "abcdefghijklmnopqrstuvwxyz",
    n = "";
  for (let i = 0; i < e; i++) n += t[Math.floor(Math.random() * t.length)];
  return n;
}
function Gt(e) {
  return JSON.stringify(e);
}
function kr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var ws = bn(() => {
  try {
    let e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function Sn(e) {
  if (kr(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    kr(n) === !1 ||
    Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1
  );
}
function Ub(e) {
  let t = 0;
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
var jb = (e) => {
    let t = typeof e;
    switch (t) {
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
        throw new Error(`Unknown data type: ${t}`);
    }
  },
  xn = new Set(["string", "number", "symbol"]),
  Ss = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
  ]);
function ht(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ve(e, t, n) {
  let i = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (i._zod.parent = e), i);
}
function k(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == "string") return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == "string" ? { ...t, error: () => t.error } : t
  );
}
function Fb(e) {
  let t;
  return new Proxy(
    {},
    {
      get(n, i, r) {
        return (t ?? (t = e()), Reflect.get(t, i, r));
      },
      set(n, i, r, o) {
        return (t ?? (t = e()), Reflect.set(t, i, r, o));
      },
      has(n, i) {
        return (t ?? (t = e()), Reflect.has(t, i));
      },
      deleteProperty(n, i) {
        return (t ?? (t = e()), Reflect.deleteProperty(t, i));
      },
      ownKeys(n) {
        return (t ?? (t = e()), Reflect.ownKeys(t));
      },
      getOwnPropertyDescriptor(n, i) {
        return (t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, i));
      },
      defineProperty(n, i, r) {
        return (t ?? (t = e()), Reflect.defineProperty(t, i, r));
      },
    },
  );
}
function N(e) {
  return typeof e == "bigint"
    ? e.toString() + "n"
    : typeof e == "string"
      ? `"${e}"`
      : `${e}`;
}
function xs(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional",
  );
}
var As = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  Ds = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Lb(e, t) {
  let n = {},
    i = e._zod.def;
  for (let r in t) {
    if (!(r in i.shape)) throw new Error(`Unrecognized key: "${r}"`);
    t[r] && (n[r] = i.shape[r]);
  }
  return Ve(e, { ...e._zod.def, shape: n, checks: [] });
}
function Bb(e, t) {
  let n = { ...e._zod.def.shape },
    i = e._zod.def;
  for (let r in t) {
    if (!(r in i.shape)) throw new Error(`Unrecognized key: "${r}"`);
    t[r] && delete n[r];
  }
  return Ve(e, { ...e._zod.def, shape: n, checks: [] });
}
function Vb(e, t) {
  let n = {
    ...e._zod.def,
    get shape() {
      let i = { ...e._zod.def.shape, ...t };
      return (bs(this, "shape", i), i);
    },
    checks: [],
  };
  return Ve(e, n);
}
function qb(e, t) {
  return Ve(e, {
    ...e._zod.def,
    get shape() {
      let n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return (bs(this, "shape", n), n);
    },
    catchall: t._zod.def.catchall,
    checks: [],
  });
}
function Hb(e, t, n) {
  let i = t._zod.def.shape,
    r = { ...i };
  if (n)
    for (let o in n) {
      if (!(o in i)) throw new Error(`Unrecognized key: "${o}"`);
      n[o] && (r[o] = e ? new e({ type: "optional", innerType: i[o] }) : i[o]);
    }
  else
    for (let o in i)
      r[o] = e ? new e({ type: "optional", innerType: i[o] }) : i[o];
  return Ve(t, { ...t._zod.def, shape: r, checks: [] });
}
function Zb(e, t, n) {
  let i = t._zod.def.shape,
    r = { ...i };
  if (n)
    for (let o in n) {
      if (!(o in r)) throw new Error(`Unrecognized key: "${o}"`);
      n[o] && (r[o] = new e({ type: "nonoptional", innerType: i[o] }));
    }
  else for (let o in i) r[o] = new e({ type: "nonoptional", innerType: i[o] });
  return Ve(t, { ...t._zod.def, shape: r, checks: [] });
}
function Wt(e, t = 0) {
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n].continue !== !0) return !0;
  return !1;
}
function Ce(e, t) {
  return t.map((n) => {
    var i;
    return ((i = n).path ?? (i.path = []), n.path.unshift(e), n);
  });
}
function yn(e) {
  return typeof e == "string" ? e : e?.message;
}
function qe(e, t, n) {
  let i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let r =
      yn(e.inst?._zod.def?.error?.(e)) ??
      yn(t?.error?.(e)) ??
      yn(n.customError?.(e)) ??
      yn(n.localeError?.(e)) ??
      "Invalid input";
    i.message = r;
  }
  return (
    delete i.inst,
    delete i.continue,
    t?.reportInput || delete i.input,
    i
  );
}
function An(e) {
  return e instanceof Set
    ? "set"
    : e instanceof Map
      ? "map"
      : e instanceof File
        ? "file"
        : "unknown";
}
function Dn(e) {
  return Array.isArray(e)
    ? "array"
    : typeof e == "string"
      ? "string"
      : "unknown";
}
function Es(...e) {
  let [t, n, i] = e;
  return typeof t == "string"
    ? { message: t, code: "custom", input: n, inst: i }
    : { ...t };
}
function Gb(e) {
  return Object.entries(e)
    .filter(([t, n]) => Number.isNaN(Number.parseInt(t, 10)))
    .map((t) => t[1]);
}
var gs = class {
  constructor(...t) {}
};
var y_ = (e, t) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
      Object.defineProperty(e, "message", {
        get() {
          return JSON.stringify(t, ys, 2);
        },
        enumerable: !0,
      }));
  },
  En = y("$ZodError", y_),
  Ir = y("$ZodError", y_, { Parent: Error });
function Tn(e, t = (n) => n.message) {
  let n = {},
    i = [];
  for (let r of e.issues)
    r.path.length > 0
      ? ((n[r.path[0]] = n[r.path[0]] || []), n[r.path[0]].push(t(r)))
      : i.push(t(r));
  return { formErrors: i, fieldErrors: n };
}
function kn(e, t) {
  let n =
      t ||
      function (o) {
        return o.message;
      },
    i = { _errors: [] },
    r = (o) => {
      for (let a of o.issues)
        if (a.code === "invalid_union" && a.errors.length)
          a.errors.map((s) => r({ issues: s }));
        else if (a.code === "invalid_key") r({ issues: a.issues });
        else if (a.code === "invalid_element") r({ issues: a.issues });
        else if (a.path.length === 0) i._errors.push(n(a));
        else {
          let s = i,
            u = 0;
          for (; u < a.path.length; ) {
            let l = a.path[u];
            (u === a.path.length - 1
              ? ((s[l] = s[l] || { _errors: [] }), s[l]._errors.push(n(a)))
              : (s[l] = s[l] || { _errors: [] }),
              (s = s[l]),
              u++);
          }
        }
    };
  return (r(e), i);
}
function Ts(e, t) {
  let n =
      t ||
      function (o) {
        return o.message;
      },
    i = { errors: [] },
    r = (o, a = []) => {
      var s, u;
      for (let l of o.issues)
        if (l.code === "invalid_union" && l.errors.length)
          l.errors.map((c) => r({ issues: c }, l.path));
        else if (l.code === "invalid_key") r({ issues: l.issues }, l.path);
        else if (l.code === "invalid_element") r({ issues: l.issues }, l.path);
        else {
          let c = [...a, ...l.path];
          if (c.length === 0) {
            i.errors.push(n(l));
            continue;
          }
          let d = i,
            f = 0;
          for (; f < c.length; ) {
            let _ = c[f],
              g = f === c.length - 1;
            (typeof _ == "string"
              ? (d.properties ?? (d.properties = {}),
                (s = d.properties)[_] ?? (s[_] = { errors: [] }),
                (d = d.properties[_]))
              : (d.items ?? (d.items = []),
                (u = d.items)[_] ?? (u[_] = { errors: [] }),
                (d = d.items[_])),
              g && d.errors.push(n(l)),
              f++);
          }
        }
    };
  return (r(e), i);
}
function v_(e) {
  let t = [];
  for (let n of e)
    typeof n == "number"
      ? t.push(`[${n}]`)
      : typeof n == "symbol"
        ? t.push(`[${JSON.stringify(String(n))}]`)
        : /[^\w$]/.test(n)
          ? t.push(`[${JSON.stringify(n)}]`)
          : (t.length && t.push("."), t.push(n));
  return t.join("");
}
function ks(e) {
  let t = [],
    n = [...e.issues].sort((i, r) => i.path.length - r.path.length);
  for (let i of n)
    (t.push(`\u2716 ${i.message}`),
      i.path?.length && t.push(`  \u2192 at ${v_(i.path)}`));
  return t.join(`
`);
}
var Yi = (e) => (t, n, i, r) => {
    let o = i ? Object.assign(i, { async: !1 }) : { async: !1 },
      a = t._zod.run({ value: n, issues: [] }, o);
    if (a instanceof Promise) throw new tt();
    if (a.issues.length) {
      let s = new (r?.Err ?? e)(a.issues.map((u) => qe(u, o, ce())));
      throw (Error.captureStackTrace(s, r?.callee), s);
    }
    return a.value;
  },
  eo = Yi(Ir),
  to = (e) => async (t, n, i, r) => {
    let o = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      a = t._zod.run({ value: n, issues: [] }, o);
    if ((a instanceof Promise && (a = await a), a.issues.length)) {
      let s = new (r?.Err ?? e)(a.issues.map((u) => qe(u, o, ce())));
      throw (Error.captureStackTrace(s, r?.callee), s);
    }
    return a.value;
  },
  ro = to(Ir),
  no = (e) => (t, n, i) => {
    let r = i ? { ...i, async: !1 } : { async: !1 },
      o = t._zod.run({ value: n, issues: [] }, r);
    if (o instanceof Promise) throw new tt();
    return o.issues.length
      ? {
          success: !1,
          error: new (e ?? En)(o.issues.map((a) => qe(a, r, ce()))),
        }
      : { success: !0, data: o.value };
  },
  Is = no(Ir),
  io = (e) => async (t, n, i) => {
    let r = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      o = t._zod.run({ value: n, issues: [] }, r);
    return (
      o instanceof Promise && (o = await o),
      o.issues.length
        ? { success: !1, error: new e(o.issues.map((a) => qe(a, r, ce()))) }
        : { success: !0, data: o.value }
    );
  },
  $s = io(Ir);
var Jt = {};
Ke(Jt, {
  _emoji: () => b_,
  base64: () => Hs,
  base64url: () => oo,
  bigint: () => Xs,
  boolean: () => tu,
  browserEmail: () => rw,
  cidrv4: () => Vs,
  cidrv6: () => qs,
  cuid: () => Ps,
  cuid2: () => zs,
  date: () => Ws,
  datetime: () => Js,
  domain: () => nw,
  duration: () => Ms,
  e164: () => Gs,
  email: () => js,
  emoji: () => Fs,
  extendedDuration: () => Qb,
  guid: () => Us,
  hostname: () => Zs,
  html5Email: () => Yb,
  integer: () => Ys,
  ipv4: () => Ls,
  ipv6: () => Bs,
  ksuid: () => Rs,
  lowercase: () => iu,
  nanoid: () => Cs,
  null: () => ru,
  number: () => eu,
  rfc5322Email: () => ew,
  string: () => Ks,
  time: () => Qs,
  ulid: () => Ns,
  undefined: () => nu,
  unicodeEmail: () => tw,
  uppercase: () => ou,
  uuid: () => Qt,
  uuid4: () => Jb,
  uuid6: () => Kb,
  uuid7: () => Xb,
  xid: () => Os,
});
var Ps = /^[cC][^\s-]{8,}$/,
  zs = /^[0-9a-z]+$/,
  Ns = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  Os = /^[0-9a-vA-V]{20}$/,
  Rs = /^[A-Za-z0-9]{27}$/,
  Cs = /^[a-zA-Z0-9_-]{21}$/,
  Ms =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  Qb =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Us =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  Qt = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
  Jb = Qt(4),
  Kb = Qt(6),
  Xb = Qt(7),
  js =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  Yb =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  ew =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  tw = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  rw =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  b_ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Fs() {
  return new RegExp(b_, "u");
}
var Ls =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Bs =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  Vs =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  qs =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Hs =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  oo = /^[A-Za-z0-9_-]*$/,
  Zs = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  nw = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  Gs = /^\+(?:[0-9]){6,14}[0-9]$/,
  w_ =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  Ws = new RegExp(`^${w_}$`);
function S_(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function Qs(e) {
  return new RegExp(`^${S_(e)}$`);
}
function Js(e) {
  let t = `${w_}T${S_(e)}`,
    n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
var Ks = (e) => {
    let t = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  },
  Xs = /^\d+n?$/,
  Ys = /^\d+$/,
  eu = /^-?\d+(?:\.\d+)?/i,
  tu = /true|false/i,
  ru = /null/i;
var nu = /undefined/i;
var iu = /^[^A-Z]*$/,
  ou = /^[^a-z]*$/;
var se = y("$ZodCheck", (e, t) => {
    var n;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = t),
      (n = e._zod).onattach ?? (n.onattach = []));
  }),
  A_ = { number: "number", bigint: "bigint", object: "date" },
  ao = y("$ZodCheckLessThan", (e, t) => {
    se.init(e, t);
    let n = A_[typeof t.value];
    (e._zod.onattach.push((i) => {
      let r = i._zod.bag,
        o =
          (t.inclusive ? r.maximum : r.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      t.value < o &&
        (t.inclusive ? (r.maximum = t.value) : (r.exclusiveMaximum = t.value));
    }),
      (e._zod.check = (i) => {
        (t.inclusive ? i.value <= t.value : i.value < t.value) ||
          i.issues.push({
            origin: n,
            code: "too_big",
            maximum: t.value,
            input: i.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  so = y("$ZodCheckGreaterThan", (e, t) => {
    se.init(e, t);
    let n = A_[typeof t.value];
    (e._zod.onattach.push((i) => {
      let r = i._zod.bag,
        o =
          (t.inclusive ? r.minimum : r.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      t.value > o &&
        (t.inclusive ? (r.minimum = t.value) : (r.exclusiveMinimum = t.value));
    }),
      (e._zod.check = (i) => {
        (t.inclusive ? i.value >= t.value : i.value > t.value) ||
          i.issues.push({
            origin: n,
            code: "too_small",
            minimum: t.value,
            input: i.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  au = y("$ZodCheckMultipleOf", (e, t) => {
    (se.init(e, t),
      e._zod.onattach.push((n) => {
        var i;
        (i = n._zod.bag).multipleOf ?? (i.multipleOf = t.value);
      }),
      (e._zod.check = (n) => {
        if (typeof n.value != typeof t.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof n.value == "bigint"
          ? n.value % t.value === BigInt(0)
          : vs(n.value, t.value) === 0) ||
          n.issues.push({
            origin: typeof n.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  su = y("$ZodCheckNumberFormat", (e, t) => {
    (se.init(e, t), (t.format = t.format || "float64"));
    let n = t.format?.includes("int"),
      i = n ? "int" : "number",
      [r, o] = As[t.format];
    (e._zod.onattach.push((a) => {
      let s = a._zod.bag;
      ((s.format = t.format),
        (s.minimum = r),
        (s.maximum = o),
        n && (s.pattern = Ys));
    }),
      (e._zod.check = (a) => {
        let s = a.value;
        if (n) {
          if (!Number.isInteger(s)) {
            a.issues.push({
              expected: i,
              format: t.format,
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
                  continue: !t.abort,
                })
              : a.issues.push({
                  input: s,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !t.abort,
                });
            return;
          }
        }
        (s < r &&
          a.issues.push({
            origin: "number",
            input: s,
            code: "too_small",
            minimum: r,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
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
  uu = y("$ZodCheckBigIntFormat", (e, t) => {
    se.init(e, t);
    let [n, i] = Ds[t.format];
    (e._zod.onattach.push((r) => {
      let o = r._zod.bag;
      ((o.format = t.format), (o.minimum = n), (o.maximum = i));
    }),
      (e._zod.check = (r) => {
        let o = r.value;
        (o < n &&
          r.issues.push({
            origin: "bigint",
            input: o,
            code: "too_small",
            minimum: n,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }),
          o > i &&
            r.issues.push({
              origin: "bigint",
              input: o,
              code: "too_big",
              maximum: i,
              inst: e,
            }));
      }));
  }),
  lu = y("$ZodCheckMaxSize", (e, t) => {
    (se.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !Nt(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < i && (n._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (n) => {
        let i = n.value;
        i.size <= t.maximum ||
          n.issues.push({
            origin: An(i),
            code: "too_big",
            maximum: t.maximum,
            input: i,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  cu = y("$ZodCheckMinSize", (e, t) => {
    (se.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !Nt(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > i && (n._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (n) => {
        let i = n.value;
        i.size >= t.minimum ||
          n.issues.push({
            origin: An(i),
            code: "too_small",
            minimum: t.minimum,
            input: i,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  du = y("$ZodCheckSizeEquals", (e, t) => {
    (se.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !Nt(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        ((i.minimum = t.size), (i.maximum = t.size), (i.size = t.size));
      }),
      (e._zod.check = (n) => {
        let i = n.value,
          r = i.size;
        if (r === t.size) return;
        let o = r > t.size;
        n.issues.push({
          origin: An(i),
          ...(o
            ? { code: "too_big", maximum: t.size }
            : { code: "too_small", minimum: t.size }),
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  mu = y("$ZodCheckMaxLength", (e, t) => {
    (se.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !Nt(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < i && (n._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (n) => {
        let i = n.value;
        if (i.length <= t.maximum) return;
        let o = Dn(i);
        n.issues.push({
          origin: o,
          code: "too_big",
          maximum: t.maximum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  pu = y("$ZodCheckMinLength", (e, t) => {
    (se.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !Nt(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > i && (n._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (n) => {
        let i = n.value;
        if (i.length >= t.minimum) return;
        let o = Dn(i);
        n.issues.push({
          origin: o,
          code: "too_small",
          minimum: t.minimum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  _u = y("$ZodCheckLengthEquals", (e, t) => {
    (se.init(e, t),
      (e._zod.when = (n) => {
        let i = n.value;
        return !Nt(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        ((i.minimum = t.length), (i.maximum = t.length), (i.length = t.length));
      }),
      (e._zod.check = (n) => {
        let i = n.value,
          r = i.length;
        if (r === t.length) return;
        let o = Dn(i),
          a = r > t.length;
        n.issues.push({
          origin: o,
          ...(a
            ? { code: "too_big", maximum: t.length }
            : { code: "too_small", minimum: t.length }),
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  $r = y("$ZodCheckStringFormat", (e, t) => {
    var n;
    (se.init(e, t),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        ((r.format = t.format),
          t.pattern &&
            (r.patterns ?? (r.patterns = new Set()),
            r.patterns.add(t.pattern)));
      }),
      (n = e._zod).check ??
        (n.check = (i) => {
          if (!t.pattern) throw new Error("Not implemented.");
          ((t.pattern.lastIndex = 0),
            !t.pattern.test(i.value) &&
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: t.format,
                input: i.value,
                ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                inst: e,
                continue: !t.abort,
              }));
        }));
  }),
  fu = y("$ZodCheckRegex", (e, t) => {
    ($r.init(e, t),
      (e._zod.check = (n) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(n.value) &&
            n.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: n.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  hu = y("$ZodCheckLowerCase", (e, t) => {
    (t.pattern ?? (t.pattern = iu), $r.init(e, t));
  }),
  gu = y("$ZodCheckUpperCase", (e, t) => {
    (t.pattern ?? (t.pattern = ou), $r.init(e, t));
  }),
  yu = y("$ZodCheckIncludes", (e, t) => {
    se.init(e, t);
    let n = ht(t.includes),
      i = new RegExp(
        typeof t.position == "number" ? `^.{${t.position}}${n}` : n,
      );
    ((t.pattern = i),
      e._zod.onattach.push((r) => {
        let o = r._zod.bag;
        (o.patterns ?? (o.patterns = new Set()), o.patterns.add(i));
      }),
      (e._zod.check = (r) => {
        r.value.includes(t.includes, t.position) ||
          r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: t.includes,
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  vu = y("$ZodCheckStartsWith", (e, t) => {
    se.init(e, t);
    let n = new RegExp(`^${ht(t.prefix)}.*`);
    (t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        (r.patterns ?? (r.patterns = new Set()), r.patterns.add(n));
      }),
      (e._zod.check = (i) => {
        i.value.startsWith(t.prefix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: t.prefix,
            input: i.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  bu = y("$ZodCheckEndsWith", (e, t) => {
    se.init(e, t);
    let n = new RegExp(`.*${ht(t.suffix)}$`);
    (t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        (r.patterns ?? (r.patterns = new Set()), r.patterns.add(n));
      }),
      (e._zod.check = (i) => {
        i.value.endsWith(t.suffix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: t.suffix,
            input: i.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  });
function x_(e, t, n) {
  e.issues.length && t.issues.push(...Ce(n, e.issues));
}
var wu = y("$ZodCheckProperty", (e, t) => {
    (se.init(e, t),
      (e._zod.check = (n) => {
        let i = t.schema._zod.run(
          { value: n.value[t.property], issues: [] },
          {},
        );
        if (i instanceof Promise) return i.then((r) => x_(r, n, t.property));
        x_(i, n, t.property);
      }));
  }),
  Su = y("$ZodCheckMimeType", (e, t) => {
    se.init(e, t);
    let n = new Set(t.mime);
    (e._zod.onattach.push((i) => {
      i._zod.bag.mime = t.mime;
    }),
      (e._zod.check = (i) => {
        n.has(i.value.type) ||
          i.issues.push({
            code: "invalid_value",
            values: t.mime,
            input: i.value.type,
            path: ["type"],
            inst: e,
          });
      }));
  }),
  xu = y("$ZodCheckOverwrite", (e, t) => {
    (se.init(e, t),
      (e._zod.check = (n) => {
        n.value = t.tx(n.value);
      }));
  });
var In = class {
  constructor(t = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = t));
  }
  indented(t) {
    ((this.indent += 1), t(this), (this.indent -= 1));
  }
  write(t) {
    if (typeof t == "function") {
      (t(this, { execution: "sync" }), t(this, { execution: "async" }));
      return;
    }
    let i = t
        .split(
          `
`,
        )
        .filter((a) => a),
      r = Math.min(...i.map((a) => a.length - a.trimStart().length)),
      o = i.map((a) => a.slice(r)).map((a) => " ".repeat(this.indent * 2) + a);
    for (let a of o) this.content.push(a);
  }
  compile() {
    let t = Function,
      n = this?.args,
      r = [...(this?.content ?? [""]).map((o) => `  ${o}`)];
    return new t(
      ...n,
      r.join(`
`),
    );
  }
};
var Au = { major: 4, minor: 0, patch: 0 };
var V = y("$ZodType", (e, t) => {
    var n;
    (e ?? (e = {}),
      (e._zod.id = t.type + "_" + Xi(10)),
      (e._zod.def = t),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Au));
    let i = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (let r of i) for (let o of r._zod.onattach) o(e);
    if (i.length === 0)
      ((n = e._zod).deferred ?? (n.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let r = (o, a, s) => {
        let u = Wt(o),
          l;
        for (let c of a) {
          if (c._zod.when) {
            if (!c._zod.when(o)) continue;
          } else if (u) continue;
          let d = o.issues.length,
            f = c._zod.check(o);
          if (f instanceof Promise && s?.async === !1) throw new tt();
          if (l || f instanceof Promise)
            l = (l ?? Promise.resolve()).then(async () => {
              (await f, o.issues.length !== d && (u || (u = Wt(o, d))));
            });
          else {
            if (o.issues.length === d) continue;
            u || (u = Wt(o, d));
          }
        }
        return l ? l.then(() => o) : o;
      };
      e._zod.run = (o, a) => {
        let s = e._zod.parse(o, a);
        if (s instanceof Promise) {
          if (a.async === !1) throw new tt();
          return s.then((u) => r(u, i, a));
        }
        return r(s, i, a);
      };
    }
    e["~standard"] = {
      validate: (r) => {
        try {
          let o = Is(e, r);
          return o.success ? { value: o.data } : { issues: o.error?.issues };
        } catch {
          return $s(e, r).then((a) =>
            a.success ? { value: a.data } : { issues: a.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  $n = y("$ZodString", (e, t) => {
    (V.init(e, t),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? Ks(e._zod.bag)),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = String(n.value);
          } catch {}
        return (
          typeof n.value == "string" ||
            n.issues.push({
              expected: "string",
              code: "invalid_type",
              input: n.value,
              inst: e,
            }),
          n
        );
      }));
  }),
  re = y("$ZodStringFormat", (e, t) => {
    ($r.init(e, t), $n.init(e, t));
  }),
  Eu = y("$ZodGUID", (e, t) => {
    (t.pattern ?? (t.pattern = Us), re.init(e, t));
  }),
  Tu = y("$ZodUUID", (e, t) => {
    if (t.version) {
      let i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (i === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = Qt(i));
    } else t.pattern ?? (t.pattern = Qt());
    re.init(e, t);
  }),
  ku = y("$ZodEmail", (e, t) => {
    (t.pattern ?? (t.pattern = js), re.init(e, t));
  }),
  Iu = y("$ZodURL", (e, t) => {
    (re.init(e, t),
      (e._zod.check = (n) => {
        try {
          let i = new URL(n.value);
          (t.hostname &&
            ((t.hostname.lastIndex = 0),
            t.hostname.test(i.hostname) ||
              n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: Zs.source,
                input: n.value,
                inst: e,
                continue: !t.abort,
              })),
            t.protocol &&
              ((t.protocol.lastIndex = 0),
              t.protocol.test(
                i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol,
              ) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: t.protocol.source,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                })));
          return;
        } catch {
          n.issues.push({
            code: "invalid_format",
            format: "url",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  $u = y("$ZodEmoji", (e, t) => {
    (t.pattern ?? (t.pattern = Fs()), re.init(e, t));
  }),
  Pu = y("$ZodNanoID", (e, t) => {
    (t.pattern ?? (t.pattern = Cs), re.init(e, t));
  }),
  zu = y("$ZodCUID", (e, t) => {
    (t.pattern ?? (t.pattern = Ps), re.init(e, t));
  }),
  Nu = y("$ZodCUID2", (e, t) => {
    (t.pattern ?? (t.pattern = zs), re.init(e, t));
  }),
  Ou = y("$ZodULID", (e, t) => {
    (t.pattern ?? (t.pattern = Ns), re.init(e, t));
  }),
  Ru = y("$ZodXID", (e, t) => {
    (t.pattern ?? (t.pattern = Os), re.init(e, t));
  }),
  Cu = y("$ZodKSUID", (e, t) => {
    (t.pattern ?? (t.pattern = Rs), re.init(e, t));
  }),
  Mu = y("$ZodISODateTime", (e, t) => {
    (t.pattern ?? (t.pattern = Js(t)), re.init(e, t));
  }),
  Uu = y("$ZodISODate", (e, t) => {
    (t.pattern ?? (t.pattern = Ws), re.init(e, t));
  }),
  ju = y("$ZodISOTime", (e, t) => {
    (t.pattern ?? (t.pattern = Qs(t)), re.init(e, t));
  }),
  Fu = y("$ZodISODuration", (e, t) => {
    (t.pattern ?? (t.pattern = Ms), re.init(e, t));
  }),
  Lu = y("$ZodIPv4", (e, t) => {
    (t.pattern ?? (t.pattern = Ls),
      re.init(e, t),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        i.format = "ipv4";
      }));
  }),
  Bu = y("$ZodIPv6", (e, t) => {
    (t.pattern ?? (t.pattern = Bs),
      re.init(e, t),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        i.format = "ipv6";
      }),
      (e._zod.check = (n) => {
        try {
          new URL(`http://[${n.value}]`);
        } catch {
          n.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  Vu = y("$ZodCIDRv4", (e, t) => {
    (t.pattern ?? (t.pattern = Vs), re.init(e, t));
  }),
  qu = y("$ZodCIDRv6", (e, t) => {
    (t.pattern ?? (t.pattern = qs),
      re.init(e, t),
      (e._zod.check = (n) => {
        let [i, r] = n.value.split("/");
        try {
          if (!r) throw new Error();
          let o = Number(r);
          if (`${o}` !== r) throw new Error();
          if (o < 0 || o > 128) throw new Error();
          new URL(`http://[${i}]`);
        } catch {
          n.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  });
function Hu(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var Zu = y("$ZodBase64", (e, t) => {
  (t.pattern ?? (t.pattern = Hs),
    re.init(e, t),
    e._zod.onattach.push((n) => {
      n._zod.bag.contentEncoding = "base64";
    }),
    (e._zod.check = (n) => {
      Hu(n.value) ||
        n.issues.push({
          code: "invalid_format",
          format: "base64",
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function M_(e) {
  if (!oo.test(e)) return !1;
  let t = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Hu(n);
}
var Gu = y("$ZodBase64URL", (e, t) => {
    (t.pattern ?? (t.pattern = oo),
      re.init(e, t),
      e._zod.onattach.push((n) => {
        n._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (n) => {
        M_(n.value) ||
          n.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Wu = y("$ZodE164", (e, t) => {
    (t.pattern ?? (t.pattern = Gs), re.init(e, t));
  });
function U_(e, t = null) {
  try {
    let n = e.split(".");
    if (n.length !== 3) return !1;
    let [i] = n,
      r = JSON.parse(atob(i));
    return !(
      ("typ" in r && r?.typ !== "JWT") ||
      !r.alg ||
      (t && (!("alg" in r) || r.alg !== t))
    );
  } catch {
    return !1;
  }
}
var Qu = y("$ZodJWT", (e, t) => {
    (re.init(e, t),
      (e._zod.check = (n) => {
        U_(n.value, t.alg) ||
          n.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  co = y("$ZodNumber", (e, t) => {
    (V.init(e, t),
      (e._zod.pattern = e._zod.bag.pattern ?? eu),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = Number(n.value);
          } catch {}
        let r = n.value;
        if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r))
          return n;
        let o =
          typeof r == "number"
            ? Number.isNaN(r)
              ? "NaN"
              : Number.isFinite(r)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          n.issues.push({
            expected: "number",
            code: "invalid_type",
            input: r,
            inst: e,
            ...(o ? { received: o } : {}),
          }),
          n
        );
      }));
  }),
  Ju = y("$ZodNumber", (e, t) => {
    (su.init(e, t), co.init(e, t));
  }),
  Pn = y("$ZodBoolean", (e, t) => {
    (V.init(e, t),
      (e._zod.pattern = tu),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = !!n.value;
          } catch {}
        let r = n.value;
        return (
          typeof r == "boolean" ||
            n.issues.push({
              expected: "boolean",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  mo = y("$ZodBigInt", (e, t) => {
    (V.init(e, t),
      (e._zod.pattern = Xs),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = BigInt(n.value);
          } catch {}
        let { value: r } = n;
        return (
          typeof r == "bigint" ||
            n.issues.push({
              expected: "bigint",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  Ku = y("$ZodBigInt", (e, t) => {
    (uu.init(e, t), mo.init(e, t));
  }),
  Xu = y("$ZodSymbol", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        let { value: r } = n;
        return (
          typeof r == "symbol" ||
            n.issues.push({
              expected: "symbol",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  Yu = y("$ZodUndefined", (e, t) => {
    (V.init(e, t),
      (e._zod.pattern = nu),
      (e._zod.values = new Set([void 0])),
      (e._zod.parse = (n, i) => {
        let { value: r } = n;
        return (
          typeof r > "u" ||
            n.issues.push({
              expected: "undefined",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  el = y("$ZodNull", (e, t) => {
    (V.init(e, t),
      (e._zod.pattern = ru),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (n, i) => {
        let { value: r } = n;
        return (
          r === null ||
            n.issues.push({
              expected: "null",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  tl = y("$ZodAny", (e, t) => {
    (V.init(e, t), (e._zod.parse = (n) => n));
  }),
  Ot = y("$ZodUnknown", (e, t) => {
    (V.init(e, t), (e._zod.parse = (n) => n));
  }),
  rl = y("$ZodNever", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => (
        n.issues.push({
          expected: "never",
          code: "invalid_type",
          input: n.value,
          inst: e,
        }),
        n
      )));
  }),
  nl = y("$ZodVoid", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        let { value: r } = n;
        return (
          typeof r > "u" ||
            n.issues.push({
              expected: "void",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  il = y("$ZodDate", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = new Date(n.value);
          } catch {}
        let r = n.value,
          o = r instanceof Date;
        return (
          (o && !Number.isNaN(r.getTime())) ||
            n.issues.push({
              expected: "date",
              code: "invalid_type",
              input: r,
              ...(o ? { received: "Invalid Date" } : {}),
              inst: e,
            }),
          n
        );
      }));
  });
function E_(e, t, n) {
  (e.issues.length && t.issues.push(...Ce(n, e.issues)),
    (t.value[n] = e.value));
}
var zn = y("$ZodArray", (e, t) => {
  (V.init(e, t),
    (e._zod.parse = (n, i) => {
      let r = n.value;
      if (!Array.isArray(r))
        return (
          n.issues.push({
            expected: "array",
            code: "invalid_type",
            input: r,
            inst: e,
          }),
          n
        );
      n.value = Array(r.length);
      let o = [];
      for (let a = 0; a < r.length; a++) {
        let s = r[a],
          u = t.element._zod.run({ value: s, issues: [] }, i);
        u instanceof Promise ? o.push(u.then((l) => E_(l, n, a))) : E_(u, n, a);
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    }));
});
function uo(e, t, n) {
  (e.issues.length && t.issues.push(...Ce(n, e.issues)),
    (t.value[n] = e.value));
}
function T_(e, t, n, i) {
  e.issues.length
    ? i[n] === void 0
      ? n in i
        ? (t.value[n] = void 0)
        : (t.value[n] = e.value)
      : t.issues.push(...Ce(n, e.issues))
    : e.value === void 0
      ? n in i && (t.value[n] = void 0)
      : (t.value[n] = e.value);
}
var ol = y("$ZodObject", (e, t) => {
  V.init(e, t);
  let n = bn(() => {
    let d = Object.keys(t.shape);
    for (let _ of d)
      if (!(t.shape[_] instanceof V))
        throw new Error(`Invalid element at key "${_}": expected a Zod schema`);
    let f = xs(t.shape);
    return {
      shape: t.shape,
      keys: d,
      keySet: new Set(d),
      numKeys: d.length,
      optionalKeys: new Set(f),
    };
  });
  ee(e._zod, "propValues", () => {
    let d = t.shape,
      f = {};
    for (let _ in d) {
      let g = d[_]._zod;
      if (g.values) {
        f[_] ?? (f[_] = new Set());
        for (let m of g.values) f[_].add(m);
      }
    }
    return f;
  });
  let i = (d) => {
      let f = new In(["shape", "payload", "ctx"]),
        { keys: _, optionalKeys: g } = n.value,
        m = (S) => {
          let v = Gt(S);
          return `shape[${v}]._zod.run({ value: input[${v}], issues: [] }, ctx)`;
        };
      f.write("const input = payload.value;");
      let A = Object.create(null);
      for (let S of _) A[S] = Xi(15);
      f.write("const newResult = {}");
      for (let S of _)
        if (g.has(S)) {
          let v = A[S];
          f.write(`const ${v} = ${m(S)};`);
          let b = Gt(S);
          f.write(`
        if (${v}.issues.length) {
          if (input[${b}] === undefined) {
            if (${b} in input) {
              newResult[${b}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${v}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${b}, ...iss.path] : [${b}],
              }))
            );
          }
        } else if (${v}.value === undefined) {
          if (${b} in input) newResult[${b}] = undefined;
        } else {
          newResult[${b}] = ${v}.value;
        }
        `);
        } else {
          let v = A[S];
          (f.write(`const ${v} = ${m(S)};`),
            f.write(`
          if (${v}.issues.length) payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Gt(S)}, ...iss.path] : [${Gt(S)}]
          })));`),
            f.write(`newResult[${Gt(S)}] = ${v}.value`));
        }
      (f.write("payload.value = newResult;"), f.write("return payload;"));
      let D = f.compile();
      return (S, v) => D(d, S, v);
    },
    r,
    o = kr,
    a = !gn.jitless,
    u = a && ws.value,
    { catchall: l } = t,
    c;
  e._zod.parse = (d, f) => {
    c ?? (c = n.value);
    let _ = d.value;
    if (!o(_))
      return (
        d.issues.push({
          expected: "object",
          code: "invalid_type",
          input: _,
          inst: e,
        }),
        d
      );
    let g = [];
    if (a && u && f?.async === !1 && f.jitless !== !0)
      (r || (r = i(t.shape)), (d = r(d, f)));
    else {
      d.value = {};
      let v = c.shape;
      for (let b of c.keys) {
        let T = v[b],
          C = T._zod.run({ value: _[b], issues: [] }, f),
          I = T._zod.optin === "optional" && T._zod.optout === "optional";
        C instanceof Promise
          ? g.push(C.then((j) => (I ? T_(j, d, b, _) : uo(j, d, b))))
          : I
            ? T_(C, d, b, _)
            : uo(C, d, b);
      }
    }
    if (!l) return g.length ? Promise.all(g).then(() => d) : d;
    let m = [],
      A = c.keySet,
      D = l._zod,
      S = D.def.type;
    for (let v of Object.keys(_)) {
      if (A.has(v)) continue;
      if (S === "never") {
        m.push(v);
        continue;
      }
      let b = D.run({ value: _[v], issues: [] }, f);
      b instanceof Promise ? g.push(b.then((T) => uo(T, d, v))) : uo(b, d, v);
    }
    return (
      m.length &&
        d.issues.push({
          code: "unrecognized_keys",
          keys: m,
          input: _,
          inst: e,
        }),
      g.length ? Promise.all(g).then(() => d) : d
    );
  };
});
function k_(e, t, n, i) {
  for (let r of e) if (r.issues.length === 0) return ((t.value = r.value), t);
  return (
    t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: n,
      errors: e.map((r) => r.issues.map((o) => qe(o, i, ce()))),
    }),
    t
  );
}
var po = y("$ZodUnion", (e, t) => {
    (V.init(e, t),
      ee(e._zod, "values", () => {
        if (t.options.every((n) => n._zod.values))
          return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
      }),
      ee(e._zod, "pattern", () => {
        if (t.options.every((n) => n._zod.pattern)) {
          let n = t.options.map((i) => i._zod.pattern);
          return new RegExp(`^(${n.map((i) => wn(i.source)).join("|")})$`);
        }
      }),
      (e._zod.parse = (n, i) => {
        let r = !1,
          o = [];
        for (let a of t.options) {
          let s = a._zod.run({ value: n.value, issues: [] }, i);
          if (s instanceof Promise) (o.push(s), (r = !0));
          else {
            if (s.issues.length === 0) return s;
            o.push(s);
          }
        }
        return r ? Promise.all(o).then((a) => k_(a, n, e, i)) : k_(o, n, e, i);
      }));
  }),
  al = y("$ZodDiscriminatedUnion", (e, t) => {
    po.init(e, t);
    let n = e._zod.parse;
    ee(e._zod, "propValues", () => {
      let r = {};
      for (let o of t.options) {
        let a = o._zod.propValues;
        if (!a || Object.keys(a).length === 0)
          throw new Error(
            `Invalid discriminated union option at index "${t.options.indexOf(o)}"`,
          );
        for (let [s, u] of Object.entries(a)) {
          r[s] || (r[s] = new Set());
          for (let l of u) r[s].add(l);
        }
      }
      return r;
    });
    let i = bn(() => {
      let r = t.options,
        o = new Map();
      for (let a of r) {
        let s = a._zod.propValues[t.discriminator];
        if (!s || s.size === 0)
          throw new Error(
            `Invalid discriminated union option at index "${t.options.indexOf(a)}"`,
          );
        for (let u of s) {
          if (o.has(u))
            throw new Error(`Duplicate discriminator value "${String(u)}"`);
          o.set(u, a);
        }
      }
      return o;
    });
    e._zod.parse = (r, o) => {
      let a = r.value;
      if (!kr(a))
        return (
          r.issues.push({
            code: "invalid_type",
            expected: "object",
            input: a,
            inst: e,
          }),
          r
        );
      let s = i.value.get(a?.[t.discriminator]);
      return s
        ? s._zod.run(r, o)
        : t.unionFallback
          ? n(r, o)
          : (r.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              input: a,
              path: [t.discriminator],
              inst: e,
            }),
            r);
    };
  }),
  sl = y("$ZodIntersection", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        let { value: r } = n,
          o = t.left._zod.run({ value: r, issues: [] }, i),
          a = t.right._zod.run({ value: r, issues: [] }, i);
        return o instanceof Promise || a instanceof Promise
          ? Promise.all([o, a]).then(([u, l]) => I_(n, u, l))
          : I_(n, o, a);
      }));
  });
function Du(e, t) {
  if (e === t) return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Sn(e) && Sn(t)) {
    let n = Object.keys(t),
      i = Object.keys(e).filter((o) => n.indexOf(o) !== -1),
      r = { ...e, ...t };
    for (let o of i) {
      let a = Du(e[o], t[o]);
      if (!a.valid)
        return { valid: !1, mergeErrorPath: [o, ...a.mergeErrorPath] };
      r[o] = a.data;
    }
    return { valid: !0, data: r };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    let n = [];
    for (let i = 0; i < e.length; i++) {
      let r = e[i],
        o = t[i],
        a = Du(r, o);
      if (!a.valid)
        return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
      n.push(a.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function I_(e, t, n) {
  if (
    (t.issues.length && e.issues.push(...t.issues),
    n.issues.length && e.issues.push(...n.issues),
    Wt(e))
  )
    return e;
  let i = Du(t.value, n.value);
  if (!i.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`,
    );
  return ((e.value = i.data), e);
}
var Kt = y("$ZodTuple", (e, t) => {
  V.init(e, t);
  let n = t.items,
    i =
      n.length - [...n].reverse().findIndex((r) => r._zod.optin !== "optional");
  e._zod.parse = (r, o) => {
    let a = r.value;
    if (!Array.isArray(a))
      return (
        r.issues.push({
          input: a,
          inst: e,
          expected: "tuple",
          code: "invalid_type",
        }),
        r
      );
    r.value = [];
    let s = [];
    if (!t.rest) {
      let l = a.length > n.length,
        c = a.length < i - 1;
      if (l || c)
        return (
          r.issues.push({
            input: a,
            inst: e,
            origin: "array",
            ...(l
              ? { code: "too_big", maximum: n.length }
              : { code: "too_small", minimum: n.length }),
          }),
          r
        );
    }
    let u = -1;
    for (let l of n) {
      if ((u++, u >= a.length && u >= i)) continue;
      let c = l._zod.run({ value: a[u], issues: [] }, o);
      c instanceof Promise ? s.push(c.then((d) => lo(d, r, u))) : lo(c, r, u);
    }
    if (t.rest) {
      let l = a.slice(n.length);
      for (let c of l) {
        u++;
        let d = t.rest._zod.run({ value: c, issues: [] }, o);
        d instanceof Promise ? s.push(d.then((f) => lo(f, r, u))) : lo(d, r, u);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function lo(e, t, n) {
  (e.issues.length && t.issues.push(...Ce(n, e.issues)),
    (t.value[n] = e.value));
}
var ul = y("$ZodRecord", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (!Sn(r))
          return (
            n.issues.push({
              expected: "record",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
            n
          );
        let o = [];
        if (t.keyType._zod.values) {
          let a = t.keyType._zod.values;
          n.value = {};
          for (let u of a)
            if (
              typeof u == "string" ||
              typeof u == "number" ||
              typeof u == "symbol"
            ) {
              let l = t.valueType._zod.run({ value: r[u], issues: [] }, i);
              l instanceof Promise
                ? o.push(
                    l.then((c) => {
                      (c.issues.length && n.issues.push(...Ce(u, c.issues)),
                        (n.value[u] = c.value));
                    }),
                  )
                : (l.issues.length && n.issues.push(...Ce(u, l.issues)),
                  (n.value[u] = l.value));
            }
          let s;
          for (let u in r) a.has(u) || ((s = s ?? []), s.push(u));
          s &&
            s.length > 0 &&
            n.issues.push({
              code: "unrecognized_keys",
              input: r,
              inst: e,
              keys: s,
            });
        } else {
          n.value = {};
          for (let a of Reflect.ownKeys(r)) {
            if (a === "__proto__") continue;
            let s = t.keyType._zod.run({ value: a, issues: [] }, i);
            if (s instanceof Promise)
              throw new Error(
                "Async schemas not supported in object keys currently",
              );
            if (s.issues.length) {
              (n.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: s.issues.map((l) => qe(l, i, ce())),
                input: a,
                path: [a],
                inst: e,
              }),
                (n.value[s.value] = s.value));
              continue;
            }
            let u = t.valueType._zod.run({ value: r[a], issues: [] }, i);
            u instanceof Promise
              ? o.push(
                  u.then((l) => {
                    (l.issues.length && n.issues.push(...Ce(a, l.issues)),
                      (n.value[s.value] = l.value));
                  }),
                )
              : (u.issues.length && n.issues.push(...Ce(a, u.issues)),
                (n.value[s.value] = u.value));
          }
        }
        return o.length ? Promise.all(o).then(() => n) : n;
      }));
  }),
  ll = y("$ZodMap", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (!(r instanceof Map))
          return (
            n.issues.push({
              expected: "map",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
            n
          );
        let o = [];
        n.value = new Map();
        for (let [a, s] of r) {
          let u = t.keyType._zod.run({ value: a, issues: [] }, i),
            l = t.valueType._zod.run({ value: s, issues: [] }, i);
          u instanceof Promise || l instanceof Promise
            ? o.push(
                Promise.all([u, l]).then(([c, d]) => {
                  $_(c, d, n, a, r, e, i);
                }),
              )
            : $_(u, l, n, a, r, e, i);
        }
        return o.length ? Promise.all(o).then(() => n) : n;
      }));
  });
function $_(e, t, n, i, r, o, a) {
  (e.issues.length &&
    (xn.has(typeof i)
      ? n.issues.push(...Ce(i, e.issues))
      : n.issues.push({
          origin: "map",
          code: "invalid_key",
          input: r,
          inst: o,
          issues: e.issues.map((s) => qe(s, a, ce())),
        })),
    t.issues.length &&
      (xn.has(typeof i)
        ? n.issues.push(...Ce(i, t.issues))
        : n.issues.push({
            origin: "map",
            code: "invalid_element",
            input: r,
            inst: o,
            key: i,
            issues: t.issues.map((s) => qe(s, a, ce())),
          })),
    n.value.set(e.value, t.value));
}
var cl = y("$ZodSet", (e, t) => {
  (V.init(e, t),
    (e._zod.parse = (n, i) => {
      let r = n.value;
      if (!(r instanceof Set))
        return (
          n.issues.push({
            input: r,
            inst: e,
            expected: "set",
            code: "invalid_type",
          }),
          n
        );
      let o = [];
      n.value = new Set();
      for (let a of r) {
        let s = t.valueType._zod.run({ value: a, issues: [] }, i);
        s instanceof Promise ? o.push(s.then((u) => P_(u, n))) : P_(s, n);
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    }));
});
function P_(e, t) {
  (e.issues.length && t.issues.push(...e.issues), t.value.add(e.value));
}
var dl = y("$ZodEnum", (e, t) => {
    V.init(e, t);
    let n = vn(t.entries);
    ((e._zod.values = new Set(n)),
      (e._zod.pattern = new RegExp(
        `^(${n
          .filter((i) => xn.has(typeof i))
          .map((i) => (typeof i == "string" ? ht(i) : i.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (i, r) => {
        let o = i.value;
        return (
          e._zod.values.has(o) ||
            i.issues.push({
              code: "invalid_value",
              values: n,
              input: o,
              inst: e,
            }),
          i
        );
      }));
  }),
  ml = y("$ZodLiteral", (e, t) => {
    (V.init(e, t),
      (e._zod.values = new Set(t.values)),
      (e._zod.pattern = new RegExp(
        `^(${t.values.map((n) => (typeof n == "string" ? ht(n) : n ? n.toString() : String(n))).join("|")})$`,
      )),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        return (
          e._zod.values.has(r) ||
            n.issues.push({
              code: "invalid_value",
              values: t.values,
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  pl = y("$ZodFile", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        return (
          r instanceof File ||
            n.issues.push({
              expected: "file",
              code: "invalid_type",
              input: r,
              inst: e,
            }),
          n
        );
      }));
  }),
  _l = y("$ZodTransform", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = t.transform(n.value, n);
        if (i.async)
          return (r instanceof Promise ? r : Promise.resolve(r)).then(
            (a) => ((n.value = a), n),
          );
        if (r instanceof Promise) throw new tt();
        return ((n.value = r), n);
      }));
  }),
  fl = y("$ZodOptional", (e, t) => {
    (V.init(e, t),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      ee(e._zod, "values", () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, void 0])
          : void 0,
      ),
      ee(e._zod, "pattern", () => {
        let n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${wn(n.source)})?$`) : void 0;
      }),
      (e._zod.parse = (n, i) =>
        n.value === void 0 ? n : t.innerType._zod.run(n, i)));
  }),
  hl = y("$ZodNullable", (e, t) => {
    (V.init(e, t),
      ee(e._zod, "optin", () => t.innerType._zod.optin),
      ee(e._zod, "optout", () => t.innerType._zod.optout),
      ee(e._zod, "pattern", () => {
        let n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${wn(n.source)}|null)$`) : void 0;
      }),
      ee(e._zod, "values", () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (n, i) =>
        n.value === null ? n : t.innerType._zod.run(n, i)));
  }),
  gl = y("$ZodDefault", (e, t) => {
    (V.init(e, t),
      (e._zod.optin = "optional"),
      ee(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => {
        if (n.value === void 0) return ((n.value = t.defaultValue), n);
        let r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((o) => z_(o, t)) : z_(r, t);
      }));
  });
function z_(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
var yl = y("$ZodPrefault", (e, t) => {
    (V.init(e, t),
      (e._zod.optin = "optional"),
      ee(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => (
        n.value === void 0 && (n.value = t.defaultValue),
        t.innerType._zod.run(n, i)
      )));
  }),
  vl = y("$ZodNonOptional", (e, t) => {
    (V.init(e, t),
      ee(e._zod, "values", () => {
        let n = t.innerType._zod.values;
        return n ? new Set([...n].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (n, i) => {
        let r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((o) => N_(o, e)) : N_(r, e);
      }));
  });
function N_(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: t,
      }),
    e
  );
}
var bl = y("$ZodSuccess", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = t.innerType._zod.run(n, i);
        return r instanceof Promise
          ? r.then((o) => ((n.value = o.issues.length === 0), n))
          : ((n.value = r.issues.length === 0), n);
      }));
  }),
  wl = y("$ZodCatch", (e, t) => {
    (V.init(e, t),
      ee(e._zod, "optin", () => t.innerType._zod.optin),
      ee(e._zod, "optout", () => t.innerType._zod.optout),
      ee(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => {
        let r = t.innerType._zod.run(n, i);
        return r instanceof Promise
          ? r.then(
              (o) => (
                (n.value = o.value),
                o.issues.length &&
                  ((n.value = t.catchValue({
                    ...n,
                    error: { issues: o.issues.map((a) => qe(a, i, ce())) },
                    input: n.value,
                  })),
                  (n.issues = [])),
                n
              ),
            )
          : ((n.value = r.value),
            r.issues.length &&
              ((n.value = t.catchValue({
                ...n,
                error: { issues: r.issues.map((o) => qe(o, i, ce())) },
                input: n.value,
              })),
              (n.issues = [])),
            n);
      }));
  }),
  Sl = y("$ZodNaN", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) => (
        (typeof n.value != "number" || !Number.isNaN(n.value)) &&
          n.issues.push({
            input: n.value,
            inst: e,
            expected: "nan",
            code: "invalid_type",
          }),
        n
      )));
  }),
  Nn = y("$ZodPipe", (e, t) => {
    (V.init(e, t),
      ee(e._zod, "values", () => t.in._zod.values),
      ee(e._zod, "optin", () => t.in._zod.optin),
      ee(e._zod, "optout", () => t.out._zod.optout),
      (e._zod.parse = (n, i) => {
        let r = t.in._zod.run(n, i);
        return r instanceof Promise ? r.then((o) => O_(o, t, i)) : O_(r, t, i);
      }));
  });
function O_(e, t, n) {
  return Wt(e) ? e : t.out._zod.run({ value: e.value, issues: e.issues }, n);
}
var xl = y("$ZodReadonly", (e, t) => {
  (V.init(e, t),
    ee(e._zod, "propValues", () => t.innerType._zod.propValues),
    ee(e._zod, "optin", () => t.innerType._zod.optin),
    ee(e._zod, "optout", () => t.innerType._zod.optout),
    (e._zod.parse = (n, i) => {
      let r = t.innerType._zod.run(n, i);
      return r instanceof Promise ? r.then(R_) : R_(r);
    }));
});
function R_(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var Al = y("$ZodTemplateLiteral", (e, t) => {
    V.init(e, t);
    let n = [];
    for (let i of t.parts)
      if (i instanceof V) {
        if (!i._zod.pattern)
          throw new Error(
            `Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`,
          );
        let r =
          i._zod.pattern instanceof RegExp
            ? i._zod.pattern.source
            : i._zod.pattern;
        if (!r)
          throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        let o = r.startsWith("^") ? 1 : 0,
          a = r.endsWith("$") ? r.length - 1 : r.length;
        n.push(r.slice(o, a));
      } else if (i === null || Ss.has(typeof i)) n.push(ht(`${i}`));
      else throw new Error(`Invalid template literal part: ${i}`);
    ((e._zod.pattern = new RegExp(`^${n.join("")}$`)),
      (e._zod.parse = (i, r) =>
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
  Dl = y("$ZodPromise", (e, t) => {
    (V.init(e, t),
      (e._zod.parse = (n, i) =>
        Promise.resolve(n.value).then((r) =>
          t.innerType._zod.run({ value: r, issues: [] }, i),
        )));
  }),
  El = y("$ZodLazy", (e, t) => {
    (V.init(e, t),
      ee(e._zod, "innerType", () => t.getter()),
      ee(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
      ee(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
      ee(e._zod, "optin", () => e._zod.innerType._zod.optin),
      ee(e._zod, "optout", () => e._zod.innerType._zod.optout),
      (e._zod.parse = (n, i) => e._zod.innerType._zod.run(n, i)));
  }),
  Tl = y("$ZodCustom", (e, t) => {
    (se.init(e, t),
      V.init(e, t),
      (e._zod.parse = (n, i) => n),
      (e._zod.check = (n) => {
        let i = n.value,
          r = t.fn(i);
        if (r instanceof Promise) return r.then((o) => C_(o, n, i, e));
        C_(r, n, i, e);
      }));
  });
function C_(e, t, n, i) {
  if (!e) {
    let r = {
      code: "custom",
      input: n,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (r.params = i._zod.def.params), t.issues.push(Es(r)));
  }
}
var On = {};
Ke(On, {
  ar: () => F_,
  az: () => L_,
  be: () => V_,
  ca: () => q_,
  cs: () => H_,
  de: () => Z_,
  en: () => _o,
  es: () => G_,
  fa: () => W_,
  fi: () => Q_,
  fr: () => J_,
  frCA: () => K_,
  he: () => X_,
  hu: () => Y_,
  id: () => ef,
  it: () => tf,
  ja: () => rf,
  kh: () => nf,
  ko: () => of,
  mk: () => af,
  ms: () => sf,
  nl: () => uf,
  no: () => lf,
  ota: () => cf,
  pl: () => df,
  pt: () => mf,
  ru: () => _f,
  sl: () => ff,
  sv: () => hf,
  ta: () => gf,
  th: () => yf,
  tr: () => vf,
  ua: () => bf,
  ur: () => wf,
  vi: () => Sf,
  zhCN: () => xf,
  zhTW: () => Af,
});
var iw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${r.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${N(r.values[0])}`
          : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${r.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"}`
          : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${r.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${r.minimum.toString()} ${a.unit}`
          : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${r.prefix}"`
          : o.format === "ends_with"
            ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${o.suffix}"`
            : o.format === "includes"
              ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${o.includes}"`
              : o.format === "regex"
                ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${o.pattern}`
                : `${i[o.format] ?? r.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${r.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${r.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${r.keys.length > 1 ? "\u0629" : ""}: ${x(r.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function F_() {
  return { localeError: iw() };
}
var ow = () => {
  let e = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${r.expected}, daxil olan ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${N(r.values[0])}`
          : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${o}${r.maximum.toString()} ${a.unit ?? "element"}`
          : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${o}${r.minimum.toString()} ${a.unit}`
          : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Yanl\u0131\u015F m\u0259tn: "${o.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
          : o.format === "ends_with"
            ? `Yanl\u0131\u015F m\u0259tn: "${o.suffix}" il\u0259 bitm\u0259lidir`
            : o.format === "includes"
              ? `Yanl\u0131\u015F m\u0259tn: "${o.includes}" daxil olmal\u0131d\u0131r`
              : o.format === "regex"
                ? `Yanl\u0131\u015F m\u0259tn: ${o.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                : `Yanl\u0131\u015F ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${r.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${r.keys.length > 1 ? "lar" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${r.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
};
function L_() {
  return { localeError: ow() };
}
function B_(e, t, n, i) {
  let r = Math.abs(e),
    o = r % 10,
    a = r % 100;
  return a >= 11 && a <= 19 ? i : o === 1 ? t : o >= 2 && o <= 4 ? n : i;
}
var aw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u043B\u0456\u043A";
        case "object": {
          if (Array.isArray(r)) return "\u043C\u0430\u0441\u0456\u045E";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${r.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${N(r.values[0])}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        if (a) {
          let s = Number(r.maximum),
            u = B_(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${o}${r.maximum.toString()} ${u}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        if (a) {
          let s = Number(r.minimum),
            u = B_(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${o}${r.minimum.toString()} ${u}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${r.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${r.origin}`;
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
};
function V_() {
  return { localeError: aw() };
}
var sw = () => {
  let e = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Tipus inv\xE0lid: s'esperava ${r.expected}, s'ha rebut ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Valor inv\xE0lid: s'esperava ${N(r.values[0])}`
          : `Opci\xF3 inv\xE0lida: s'esperava una de ${x(r.values, " o ")}`;
      case "too_big": {
        let o = r.inclusive ? "com a m\xE0xim" : "menys de",
          a = t(r.origin);
        return a
          ? `Massa gran: s'esperava que ${r.origin ?? "el valor"} contingu\xE9s ${o} ${r.maximum.toString()} ${a.unit ?? "elements"}`
          : `Massa gran: s'esperava que ${r.origin ?? "el valor"} fos ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? "com a m\xEDnim" : "m\xE9s de",
          a = t(r.origin);
        return a
          ? `Massa petit: s'esperava que ${r.origin} contingu\xE9s ${o} ${r.minimum.toString()} ${a.unit}`
          : `Massa petit: s'esperava que ${r.origin} fos ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Format inv\xE0lid: ha de comen\xE7ar amb "${o.prefix}"`
          : o.format === "ends_with"
            ? `Format inv\xE0lid: ha d'acabar amb "${o.suffix}"`
            : o.format === "includes"
              ? `Format inv\xE0lid: ha d'incloure "${o.includes}"`
              : o.format === "regex"
                ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${o.pattern}`
                : `Format inv\xE0lid per a ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Clau${r.keys.length > 1 ? "s" : ""} no reconeguda${r.keys.length > 1 ? "s" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      case "invalid_element":
        return `Element inv\xE0lid a ${r.origin}`;
      default:
        return "Entrada inv\xE0lida";
    }
  };
};
function q_() {
  return { localeError: sw() };
}
var uw = () => {
  let e = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u010D\xEDslo";
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
          if (Array.isArray(r)) return "pole";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${r.expected}, obdr\u017Eeno ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${N(r.values[0])}`
          : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${o}${r.maximum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${o}${r.minimum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${o.prefix}"`
          : o.format === "ends_with"
            ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${o.suffix}"`
            : o.format === "includes"
              ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${o.includes}"`
              : o.format === "regex"
                ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${o.pattern}`
                : `Neplatn\xFD form\xE1t ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${r.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${r.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${r.origin}`;
      default:
        return "Neplatn\xFD vstup";
    }
  };
};
function H_() {
  return { localeError: uw() };
}
var lw = () => {
  let e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "Zahl";
        case "object": {
          if (Array.isArray(r)) return "Array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ung\xFCltige Eingabe: erwartet ${r.expected}, erhalten ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Ung\xFCltige Eingabe: erwartet ${N(r.values[0])}`
          : `Ung\xFCltige Option: erwartet eine von ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${o}${r.maximum.toString()} ${a.unit ?? "Elemente"} hat`
          : `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${o}${r.maximum.toString()} ist`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Zu klein: erwartet, dass ${r.origin} ${o}${r.minimum.toString()} ${a.unit} hat`
          : `Zu klein: erwartet, dass ${r.origin} ${o}${r.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Ung\xFCltiger String: muss mit "${o.prefix}" beginnen`
          : o.format === "ends_with"
            ? `Ung\xFCltiger String: muss mit "${o.suffix}" enden`
            : o.format === "includes"
              ? `Ung\xFCltiger String: muss "${o.includes}" enthalten`
              : o.format === "regex"
                ? `Ung\xFCltiger String: muss dem Muster ${o.pattern} entsprechen`
                : `Ung\xFCltig: ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${r.divisor} sein`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${r.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${r.origin}`;
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
};
function Z_() {
  return { localeError: lw() };
}
var cw = (e) => {
    let t = typeof e;
    switch (t) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return t;
  },
  dw = () => {
    let e = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
    };
    function t(i) {
      return e[i] ?? null;
    }
    let n = {
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
          return `Invalid input: expected ${i.expected}, received ${cw(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Invalid input: expected ${N(i.values[0])}`
            : `Invalid option: expected one of ${x(i.values, "|")}`;
        case "too_big": {
          let r = i.inclusive ? "<=" : "<",
            o = t(i.origin);
          return o
            ? `Too big: expected ${i.origin ?? "value"} to have ${r}${i.maximum.toString()} ${o.unit ?? "elements"}`
            : `Too big: expected ${i.origin ?? "value"} to be ${r}${i.maximum.toString()}`;
        }
        case "too_small": {
          let r = i.inclusive ? ">=" : ">",
            o = t(i.origin);
          return o
            ? `Too small: expected ${i.origin} to have ${r}${i.minimum.toString()} ${o.unit}`
            : `Too small: expected ${i.origin} to be ${r}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let r = i;
          return r.format === "starts_with"
            ? `Invalid string: must start with "${r.prefix}"`
            : r.format === "ends_with"
              ? `Invalid string: must end with "${r.suffix}"`
              : r.format === "includes"
                ? `Invalid string: must include "${r.includes}"`
                : r.format === "regex"
                  ? `Invalid string: must match pattern ${r.pattern}`
                  : `Invalid ${n[r.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${i.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${x(i.keys, ", ")}`;
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
function _o() {
  return { localeError: dw() };
}
var mw = () => {
  let e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(r)) return "arreglo";
          if (r === null) return "nulo";
          if (Object.getPrototypeOf(r) !== Object.prototype)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entrada inv\xE1lida: se esperaba ${r.expected}, recibido ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Entrada inv\xE1lida: se esperaba ${N(r.values[0])}`
          : `Opci\xF3n inv\xE1lida: se esperaba una de ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Demasiado grande: se esperaba que ${r.origin ?? "valor"} tuviera ${o}${r.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Demasiado grande: se esperaba que ${r.origin ?? "valor"} fuera ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Demasiado peque\xF1o: se esperaba que ${r.origin} tuviera ${o}${r.minimum.toString()} ${a.unit}`
          : `Demasiado peque\xF1o: se esperaba que ${r.origin} fuera ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Cadena inv\xE1lida: debe comenzar con "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cadena inv\xE1lida: debe terminar en "${o.suffix}"`
            : o.format === "includes"
              ? `Cadena inv\xE1lida: debe incluir "${o.includes}"`
              : o.format === "regex"
                ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${o.pattern}`
                : `Inv\xE1lido ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${r.divisor}`;
      case "unrecognized_keys":
        return `Llave${r.keys.length > 1 ? "s" : ""} desconocida${r.keys.length > 1 ? "s" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${r.origin}`;
      default:
        return "Entrada inv\xE1lida";
    }
  };
};
function G_() {
  return { localeError: mw() };
}
var pw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0639\u062F\u062F";
        case "object": {
          if (Array.isArray(r)) return "\u0622\u0631\u0627\u06CC\u0647";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${r.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${n(r.input)} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${N(r.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
          : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${x(r.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${r.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${r.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} ${a.unit} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
          : o.format === "ends_with"
            ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
            : o.format === "includes"
              ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${o.includes}" \u0628\u0627\u0634\u062F`
              : o.format === "regex"
                ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${o.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                : `${i[o.format] ?? r.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${r.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${r.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${r.origin}`;
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${r.origin}`;
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
};
function W_() {
  return { localeError: pw() };
}
var _w = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${r.expected}, oli ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${N(r.values[0])}`
          : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Liian suuri: ${a.subject} t\xE4ytyy olla ${o}${r.maximum.toString()} ${a.unit}`.trim()
          : `Liian suuri: arvon t\xE4ytyy olla ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Liian pieni: ${a.subject} t\xE4ytyy olla ${o}${r.minimum.toString()} ${a.unit}`.trim()
          : `Liian pieni: arvon t\xE4ytyy olla ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${o.prefix}"`
          : o.format === "ends_with"
            ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${o.suffix}"`
            : o.format === "includes"
              ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${o.includes}"`
              : o.format === "regex"
                ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${o.pattern}`
                : `Virheellinen ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${r.divisor} monikerta`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${x(r.keys, ", ")}`;
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
function Q_() {
  return { localeError: _w() };
}
var fw = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "nombre";
        case "object": {
          if (Array.isArray(r)) return "tableau";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : ${r.expected} attendu, ${n(r.input)} re\xE7u`;
      case "invalid_value":
        return r.values.length === 1
          ? `Entr\xE9e invalide : ${N(r.values[0])} attendu`
          : `Option invalide : une valeur parmi ${x(r.values, "|")} attendue`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Trop grand : ${r.origin ?? "valeur"} doit ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "\xE9l\xE9ment(s)"}`
          : `Trop grand : ${r.origin ?? "valeur"} doit \xEAtre ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Trop petit : ${r.origin} doit ${a.verb} ${o}${r.minimum.toString()} ${a.unit}`
          : `Trop petit : ${r.origin} doit \xEAtre ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
            : o.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
              : o.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${o.pattern}`
                : `${i[o.format] ?? r.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${r.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${r.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function J_() {
  return { localeError: fw() };
}
var hw = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : attendu ${r.expected}, re\xE7u ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Entr\xE9e invalide : attendu ${N(r.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "\u2264" : "<",
          a = t(r.origin);
        return a
          ? `Trop grand : attendu que ${r.origin ?? "la valeur"} ait ${o}${r.maximum.toString()} ${a.unit}`
          : `Trop grand : attendu que ${r.origin ?? "la valeur"} soit ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? "\u2265" : ">",
          a = t(r.origin);
        return a
          ? `Trop petit : attendu que ${r.origin} ait ${o}${r.minimum.toString()} ${a.unit}`
          : `Trop petit : attendu que ${r.origin} soit ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
          : o.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
            : o.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
              : o.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au motif ${o.pattern}`
                : `${i[o.format] ?? r.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${r.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${r.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function K_() {
  return { localeError: hw() };
}
var gw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${r.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${N(r.values[0])}`
          : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05D0\u05D7\u05EA \u05DE\u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA  ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${r.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.maximum.toString()} ${a.unit ?? "elements"}`
          : `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${r.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${r.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.minimum.toString()} ${a.unit}`
          : `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${r.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1"${o.prefix}"`
          : o.format === "ends_with"
            ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${o.suffix}"`
            : o.format === "includes"
              ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${o.includes}"`
              : o.format === "regex"
                ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${o.pattern}`
                : `${i[o.format] ?? r.format} \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${r.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${r.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${r.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\u05DE\u05E4\u05EA\u05D7 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r.origin}`;
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element":
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r.origin}`;
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
};
function X_() {
  return { localeError: gw() };
}
var yw = () => {
  let e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "sz\xE1m";
        case "object": {
          if (Array.isArray(r)) return "t\xF6mb";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${r.expected}, a kapott \xE9rt\xE9k ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${N(r.values[0])}`
          : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `T\xFAl nagy: ${r.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${o}${r.maximum.toString()} ${a.unit ?? "elem"}`
          : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${r.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} m\xE9rete t\xFAl kicsi ${o}${r.minimum.toString()} ${a.unit}`
          : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} t\xFAl kicsi ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\xC9rv\xE9nytelen string: "${o.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
          : o.format === "ends_with"
            ? `\xC9rv\xE9nytelen string: "${o.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
            : o.format === "includes"
              ? `\xC9rv\xE9nytelen string: "${o.includes}" \xE9rt\xE9ket kell tartalmaznia`
              : o.format === "regex"
                ? `\xC9rv\xE9nytelen string: ${o.pattern} mint\xE1nak kell megfelelnie`
                : `\xC9rv\xE9nytelen ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${r.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${r.keys.length > 1 ? "s" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${r.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${r.origin}`;
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
};
function Y_() {
  return { localeError: yw() };
}
var vw = () => {
  let e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${r.expected}, diterima ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Input tidak valid: diharapkan ${N(r.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Terlalu besar: diharapkan ${r.origin ?? "value"} memiliki ${o}${r.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: diharapkan ${r.origin ?? "value"} menjadi ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Terlalu kecil: diharapkan ${r.origin} memiliki ${o}${r.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: diharapkan ${r.origin} menjadi ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `String tidak valid: harus dimulai dengan "${o.prefix}"`
          : o.format === "ends_with"
            ? `String tidak valid: harus berakhir dengan "${o.suffix}"`
            : o.format === "includes"
              ? `String tidak valid: harus menyertakan "${o.includes}"`
              : o.format === "regex"
                ? `String tidak valid: harus sesuai pola ${o.pattern}`
                : `${i[o.format] ?? r.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${r.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${r.keys.length > 1 ? "s" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${r.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${r.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function ef() {
  return { localeError: vw() };
}
var bw = () => {
  let e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "numero";
        case "object": {
          if (Array.isArray(r)) return "vettore";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input non valido: atteso ${r.expected}, ricevuto ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Input non valido: atteso ${N(r.values[0])}`
          : `Opzione non valida: atteso uno tra ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Troppo grande: ${r.origin ?? "valore"} deve avere ${o}${r.maximum.toString()} ${a.unit ?? "elementi"}`
          : `Troppo grande: ${r.origin ?? "valore"} deve essere ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Troppo piccolo: ${r.origin} deve avere ${o}${r.minimum.toString()} ${a.unit}`
          : `Troppo piccolo: ${r.origin} deve essere ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Stringa non valida: deve iniziare con "${o.prefix}"`
          : o.format === "ends_with"
            ? `Stringa non valida: deve terminare con "${o.suffix}"`
            : o.format === "includes"
              ? `Stringa non valida: deve includere "${o.includes}"`
              : o.format === "regex"
                ? `Stringa non valida: deve corrispondere al pattern ${o.pattern}`
                : `Invalid ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${r.divisor}`;
      case "unrecognized_keys":
        return `Chiav${r.keys.length > 1 ? "i" : "e"} non riconosciut${r.keys.length > 1 ? "e" : "a"}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${r.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${r.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function tf() {
  return { localeError: bw() };
}
var ww = () => {
  let e = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u6570\u5024";
        case "object": {
          if (Array.isArray(r)) return "\u914D\u5217";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u7121\u52B9\u306A\u5165\u529B: ${r.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${n(r.input)}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u7121\u52B9\u306A\u5165\u529B: ${N(r.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u9078\u629E: ${x(r.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${r.origin ?? "\u5024"}\u306F${r.maximum.toString()}${a.unit ?? "\u8981\u7D20"}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5927\u304D\u3059\u304E\u308B\u5024: ${r.origin ?? "\u5024"}\u306F${r.maximum.toString()}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${r.origin}\u306F${r.minimum.toString()}${a.unit}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${r.origin}\u306F${r.minimum.toString()}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : o.format === "ends_with"
            ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
            : o.format === "includes"
              ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : o.format === "regex"
                ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${o.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                : `\u7121\u52B9\u306A${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${r.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${r.keys.length > 1 ? "\u7FA4" : ""}: ${x(r.keys, "\u3001")}`;
      case "invalid_key":
        return `${r.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${r.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
};
function rf() {
  return { localeError: ww() };
}
var Sw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r)
            ? "\u1798\u17B7\u1793\u1798\u17C2\u1793\u1787\u17B6\u179B\u17C1\u1781 (NaN)"
            : "\u179B\u17C1\u1781";
        case "object": {
          if (Array.isArray(r)) return "\u17A2\u17B6\u179A\u17C1 (Array)";
          if (r === null)
            return "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${N(r.values[0])}`
          : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${r.maximum.toString()} ${a.unit ?? "\u1792\u17B6\u178F\u17BB"}`
          : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin} ${o} ${r.minimum.toString()} ${a.unit}`
          : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin} ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${o.suffix}"`
            : o.format === "includes"
              ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${o.includes}"`
              : o.format === "regex"
                ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${o.pattern}`
                : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${r.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${r.origin}`;
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${r.origin}`;
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
};
function nf() {
  return { localeError: Sw() };
}
var xw = () => {
  let e = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${r.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${n(r.input)}\uC785\uB2C8\uB2E4`;
      case "invalid_value":
        return r.values.length === 1
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${N(r.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC635\uC158: ${x(r.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let o = r.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
          a =
            o === "\uBBF8\uB9CC"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = t(r.origin),
          u = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()}${u} ${o}${a}`
          : `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()} ${o}${a}`;
      }
      case "too_small": {
        let o = r.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
          a =
            o === "\uC774\uC0C1"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = t(r.origin),
          u = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()}${u} ${o}${a}`
          : `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()} ${o}${a}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
          : o.format === "ends_with"
            ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
            : o.format === "includes"
              ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
              : o.format === "regex"
                ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${o.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                : `\uC798\uBABB\uB41C ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${r.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${r.origin}`;
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${r.origin}`;
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
};
function of() {
  return { localeError: xw() };
}
var Aw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0431\u0440\u043E\u0458";
        case "object": {
          if (Array.isArray(r)) return "\u043D\u0438\u0437\u0430";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Invalid input: expected ${N(r.values[0])}`
          : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${o}${r.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin} \u0434\u0430 \u0438\u043C\u0430 ${o}${r.minimum.toString()} ${a.unit}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${o.pattern}`
                : `Invalid ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${r.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${r.origin}`;
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
};
function af() {
  return { localeError: Aw() };
}
var Dw = () => {
  let e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "nombor";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${r.expected}, diterima ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Input tidak sah: dijangka ${N(r.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Terlalu besar: dijangka ${r.origin ?? "nilai"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: dijangka ${r.origin ?? "nilai"} adalah ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Terlalu kecil: dijangka ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: dijangka ${r.origin} adalah ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `String tidak sah: mesti bermula dengan "${o.prefix}"`
          : o.format === "ends_with"
            ? `String tidak sah: mesti berakhir dengan "${o.suffix}"`
            : o.format === "includes"
              ? `String tidak sah: mesti mengandungi "${o.includes}"`
              : o.format === "regex"
                ? `String tidak sah: mesti sepadan dengan corak ${o.pattern}`
                : `${i[o.format] ?? r.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${r.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${r.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${r.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function sf() {
  return { localeError: Dw() };
}
var Ew = () => {
  let e = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "getal";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${r.expected}, ontving ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Ongeldige invoer: verwacht ${N(r.values[0])}`
          : `Ongeldige optie: verwacht \xE9\xE9n van ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Te lang: verwacht dat ${r.origin ?? "waarde"} ${o}${r.maximum.toString()} ${a.unit ?? "elementen"} bevat`
          : `Te lang: verwacht dat ${r.origin ?? "waarde"} ${o}${r.maximum.toString()} is`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Te kort: verwacht dat ${r.origin} ${o}${r.minimum.toString()} ${a.unit} bevat`
          : `Te kort: verwacht dat ${r.origin} ${o}${r.minimum.toString()} is`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Ongeldige tekst: moet met "${o.prefix}" beginnen`
          : o.format === "ends_with"
            ? `Ongeldige tekst: moet op "${o.suffix}" eindigen`
            : o.format === "includes"
              ? `Ongeldige tekst: moet "${o.includes}" bevatten`
              : o.format === "regex"
                ? `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}`
                : `Ongeldig: ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${r.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${r.keys.length > 1 ? "s" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${r.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${r.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function uf() {
  return { localeError: Ew() };
}
var Tw = () => {
  let e = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "tall";
        case "object": {
          if (Array.isArray(r)) return "liste";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${r.expected}, fikk ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Ugyldig verdi: forventet ${N(r.values[0])}`
          : `Ugyldig valg: forventet en av ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${o}${r.maximum.toString()} ${a.unit ?? "elementer"}`
          : `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `For lite(n): forventet ${r.origin} til \xE5 ha ${o}${r.minimum.toString()} ${a.unit}`
          : `For lite(n): forventet ${r.origin} til \xE5 ha ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Ugyldig streng: m\xE5 starte med "${o.prefix}"`
          : o.format === "ends_with"
            ? `Ugyldig streng: m\xE5 ende med "${o.suffix}"`
            : o.format === "includes"
              ? `Ugyldig streng: m\xE5 inneholde "${o.includes}"`
              : o.format === "regex"
                ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${o.pattern}`
                : `Ugyldig ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${r.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${r.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function lf() {
  return { localeError: Tw() };
}
var kw = () => {
  let e = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "numara";
        case "object": {
          if (Array.isArray(r)) return "saf";
          if (r === null) return "gayb";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `F\xE2sit giren: umulan ${r.expected}, al\u0131nan ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `F\xE2sit giren: umulan ${N(r.values[0])}`
          : `F\xE2sit tercih: m\xFBteberler ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${o}${r.maximum.toString()} ${a.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
          : `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${o}${r.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${o}${r.minimum.toString()} ${a.unit} sahip olmal\u0131yd\u0131.`
          : `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${o}${r.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `F\xE2sit metin: "${o.prefix}" ile ba\u015Flamal\u0131.`
          : o.format === "ends_with"
            ? `F\xE2sit metin: "${o.suffix}" ile bitmeli.`
            : o.format === "includes"
              ? `F\xE2sit metin: "${o.includes}" ihtiv\xE2 etmeli.`
              : o.format === "regex"
                ? `F\xE2sit metin: ${o.pattern} nak\u015F\u0131na uymal\u0131.`
                : `F\xE2sit ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${r.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${r.keys.length > 1 ? "s" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${r.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
};
function cf() {
  return { localeError: kw() };
}
var Iw = () => {
  let e = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "liczba";
        case "object": {
          if (Array.isArray(r)) return "tablica";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${r.expected}, otrzymano ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${N(r.values[0])}`
          : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${r.maximum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${r.minimum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${o.prefix}"`
          : o.format === "ends_with"
            ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${o.suffix}"`
            : o.format === "includes"
              ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${o.includes}"`
              : o.format === "regex"
                ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${o.pattern}`
                : `Nieprawid\u0142ow(y/a/e) ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${r.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${r.keys.length > 1 ? "s" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${r.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${r.origin}`;
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
};
function df() {
  return { localeError: Iw() };
}
var $w = () => {
  let e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "nulo";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Tipo inv\xE1lido: esperado ${r.expected}, recebido ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Entrada inv\xE1lida: esperado ${N(r.values[0])}`
          : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Muito grande: esperado que ${r.origin ?? "valor"} tivesse ${o}${r.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Muito grande: esperado que ${r.origin ?? "valor"} fosse ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Muito pequeno: esperado que ${r.origin} tivesse ${o}${r.minimum.toString()} ${a.unit}`
          : `Muito pequeno: esperado que ${r.origin} fosse ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Texto inv\xE1lido: deve come\xE7ar com "${o.prefix}"`
          : o.format === "ends_with"
            ? `Texto inv\xE1lido: deve terminar com "${o.suffix}"`
            : o.format === "includes"
              ? `Texto inv\xE1lido: deve incluir "${o.includes}"`
              : o.format === "regex"
                ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${o.pattern}`
                : `${i[o.format] ?? r.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${r.divisor}`;
      case "unrecognized_keys":
        return `Chave${r.keys.length > 1 ? "s" : ""} desconhecida${r.keys.length > 1 ? "s" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${r.origin}`;
      default:
        return "Campo inv\xE1lido";
    }
  };
};
function mf() {
  return { localeError: $w() };
}
function pf(e, t, n, i) {
  let r = Math.abs(e),
    o = r % 10,
    a = r % 100;
  return a >= 11 && a <= 19 ? i : o === 1 ? t : o >= 2 && o <= 4 ? n : i;
}
var Pw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(r)) return "\u043C\u0430\u0441\u0441\u0438\u0432";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${r.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${N(r.values[0])}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        if (a) {
          let s = Number(r.maximum),
            u = pf(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${r.maximum.toString()} ${u}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        if (a) {
          let s = Number(r.minimum),
            u = pf(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${r.minimum.toString()} ${u}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin} \u0431\u0443\u0434\u0435\u0442 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${r.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u0438" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${r.origin}`;
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
};
function _f() {
  return { localeError: Pw() };
}
var zw = () => {
  let e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0161tevilo";
        case "object": {
          if (Array.isArray(r)) return "tabela";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Neveljaven vnos: pri\u010Dakovano ${r.expected}, prejeto ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Neveljaven vnos: pri\u010Dakovano ${N(r.values[0])}`
          : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} imelo ${o}${r.maximum.toString()} ${a.unit ?? "elementov"}`
          : `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Premajhno: pri\u010Dakovano, da bo ${r.origin} imelo ${o}${r.minimum.toString()} ${a.unit}`
          : `Premajhno: pri\u010Dakovano, da bo ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Neveljaven niz: mora se za\u010Deti z "${o.prefix}"`
          : o.format === "ends_with"
            ? `Neveljaven niz: mora se kon\u010Dati z "${o.suffix}"`
            : o.format === "includes"
              ? `Neveljaven niz: mora vsebovati "${o.includes}"`
              : o.format === "regex"
                ? `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}`
                : `Neveljaven ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${r.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${r.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${r.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${r.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function ff() {
  return { localeError: zw() };
}
var Nw = () => {
  let e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "antal";
        case "object": {
          if (Array.isArray(r)) return "lista";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${r.expected}, fick ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${N(r.values[0])}`
          : `Ogiltigt val: f\xF6rv\xE4ntade en av ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.maximum.toString()} ${a.unit ?? "element"}`
          : `F\xF6r stor(t): f\xF6rv\xE4ntat ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.minimum.toString()} ${a.unit}`
          : `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${o.prefix}"`
          : o.format === "ends_with"
            ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${o.suffix}"`
            : o.format === "includes"
              ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${o.includes}"`
              : o.format === "regex"
                ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${o.pattern}"`
                : `Ogiltig(t) ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${r.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${r.origin ?? "v\xE4rdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function hf() {
  return { localeError: Nw() };
}
var Ow = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r)
            ? "\u0B8E\u0BA3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BA4\u0BC1"
            : "\u0B8E\u0BA3\u0BCD";
        case "object": {
          if (Array.isArray(r)) return "\u0B85\u0BA3\u0BBF";
          if (r === null) return "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${N(r.values[0])}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${x(r.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${r.maximum.toString()} ${a.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${r.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin} ${o}${r.minimum.toString()} ${a.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin} ${o}${r.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : o.format === "ends_with"
            ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
            : o.format === "includes"
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : o.format === "regex"
                ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${o.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${r.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${r.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${r.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
};
function gf() {
  return { localeError: Ow() };
}
var Rw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r)
            ? "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (NaN)"
            : "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02";
        case "object": {
          if (Array.isArray(r))
            return "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)";
          if (r === null)
            return "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${r.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${N(r.values[0])}`
          : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive
            ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
            : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
          a = t(r.origin);
        return a
          ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.maximum.toString()} ${a.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
          : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive
            ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
            : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
          a = t(r.origin);
        return a
          ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.minimum.toString()} ${a.unit}`
          : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${o.suffix}"`
            : o.format === "includes"
              ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${o.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
              : o.format === "regex"
                ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${o.pattern}`
                : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${r.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${r.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${r.origin}`;
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
};
function yf() {
  return { localeError: Rw() };
}
var Cw = (e) => {
    let t = typeof e;
    switch (t) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return t;
  },
  Mw = () => {
    let e = {
      string: { unit: "karakter", verb: "olmal\u0131" },
      file: { unit: "bayt", verb: "olmal\u0131" },
      array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    };
    function t(i) {
      return e[i] ?? null;
    }
    let n = {
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
          return `Ge\xE7ersiz de\u011Fer: beklenen ${i.expected}, al\u0131nan ${Cw(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Ge\xE7ersiz de\u011Fer: beklenen ${N(i.values[0])}`
            : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${x(i.values, "|")}`;
        case "too_big": {
          let r = i.inclusive ? "<=" : "<",
            o = t(i.origin);
          return o
            ? `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${r}${i.maximum.toString()} ${o.unit ?? "\xF6\u011Fe"}`
            : `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${r}${i.maximum.toString()}`;
        }
        case "too_small": {
          let r = i.inclusive ? ">=" : ">",
            o = t(i.origin);
          return o
            ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${r}${i.minimum.toString()} ${o.unit}`
            : `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${r}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let r = i;
          return r.format === "starts_with"
            ? `Ge\xE7ersiz metin: "${r.prefix}" ile ba\u015Flamal\u0131`
            : r.format === "ends_with"
              ? `Ge\xE7ersiz metin: "${r.suffix}" ile bitmeli`
              : r.format === "includes"
                ? `Ge\xE7ersiz metin: "${r.includes}" i\xE7ermeli`
                : r.format === "regex"
                  ? `Ge\xE7ersiz metin: ${r.pattern} desenine uymal\u0131`
                  : `Ge\xE7ersiz ${n[r.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Ge\xE7ersiz say\u0131: ${i.divisor} ile tam b\xF6l\xFCnebilmeli`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${x(i.keys, ", ")}`;
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
function vf() {
  return { localeError: Mw() };
}
var Uw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(r)) return "\u043C\u0430\u0441\u0438\u0432";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${r.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${N(r.values[0])}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin} \u0431\u0443\u0434\u0435 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${o.prefix}"`
          : o.format === "ends_with"
            ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${o.suffix}"`
            : o.format === "includes"
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${o.includes}"`
              : o.format === "regex"
                ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u0456" : ""}: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${r.origin}`;
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
};
function bf() {
  return { localeError: Uw() };
}
var jw = () => {
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
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "\u0646\u0645\u0628\u0631";
        case "object": {
          if (Array.isArray(r)) return "\u0622\u0631\u06D2";
          if (r === null) return "\u0646\u0644";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${r.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${n(r.input)} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${N(r.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
          : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${x(r.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${r.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${o}${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${r.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${o}${r.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${r.origin} \u06A9\u06D2 ${o}${r.minimum.toString()} ${a.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${r.origin} \u06A9\u0627 ${o}${r.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
          : o.format === "ends_with"
            ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
            : o.format === "includes"
              ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
              : o.format === "regex"
                ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${o.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                : `\u063A\u0644\u0637 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${r.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${r.keys.length > 1 ? "\u0632" : ""}: ${x(r.keys, "\u060C ")}`;
      case "invalid_key":
        return `${r.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${r.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
};
function wf() {
  return { localeError: jw() };
}
var Fw = () => {
  let e = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "s\u1ED1";
        case "object": {
          if (Array.isArray(r)) return "m\u1EA3ng";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${r.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${N(r.values[0])}`
          : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "ph\u1EA7n t\u1EED"}`
          : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}`
          : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${o.prefix}"`
          : o.format === "ends_with"
            ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${o.suffix}"`
            : o.format === "includes"
              ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${o.includes}"`
              : o.format === "regex"
                ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${o.pattern}`
                : `${i[o.format] ?? r.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${r.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
};
function Sf() {
  return { localeError: Fw() };
}
var Lw = () => {
  let e = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "\u975E\u6570\u5B57(NaN)" : "\u6570\u5B57";
        case "object": {
          if (Array.isArray(r)) return "\u6570\u7EC4";
          if (r === null) return "\u7A7A\u503C(null)";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${r.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${N(r.values[0])}`
          : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${r.origin ?? "\u503C"} ${o}${r.maximum.toString()} ${a.unit ?? "\u4E2A\u5143\u7D20"}`
          : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${r.origin ?? "\u503C"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${r.origin} ${o}${r.minimum.toString()} ${a.unit}`
          : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.prefix}" \u5F00\u5934`
          : o.format === "ends_with"
            ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.suffix}" \u7ED3\u5C3E`
            : o.format === "includes"
              ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${o.includes}"`
              : o.format === "regex"
                ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${o.pattern}`
                : `\u65E0\u6548${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${r.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${x(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${r.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
};
function xf() {
  return { localeError: Lw() };
}
var Bw = () => {
  let e = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
  };
  function t(r) {
    return e[r] ?? null;
  }
  let n = (r) => {
      let o = typeof r;
      switch (o) {
        case "number":
          return Number.isNaN(r) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(r)) return "array";
          if (r === null) return "null";
          if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
            return r.constructor.name;
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
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${r.expected}\uFF0C\u4F46\u6536\u5230 ${n(r.input)}`;
      case "invalid_value":
        return r.values.length === 1
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${N(r.values[0])}`
          : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${x(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<",
          a = t(r.origin);
        return a
          ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${o}${r.maximum.toString()} ${a.unit ?? "\u500B\u5143\u7D20"}`
          : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">",
          a = t(r.origin);
        return a
          ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${o}${r.minimum.toString()} ${a.unit}`
          : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with"
          ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.prefix}" \u958B\u982D`
          : o.format === "ends_with"
            ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.suffix}" \u7D50\u5C3E`
            : o.format === "includes"
              ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${o.includes}"`
              : o.format === "regex"
                ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${o.pattern}`
                : `\u7121\u6548\u7684 ${i[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${r.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${r.keys.length > 1 ? "\u5011" : ""}\uFF1A${x(r.keys, "\u3001")}`;
      case "invalid_key":
        return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
};
function Af() {
  return { localeError: Bw() };
}
var kl = Symbol("ZodOutput"),
  Il = Symbol("ZodInput"),
  Pr = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(t, ...n) {
      let i = n[0];
      if ((this._map.set(t, i), i && typeof i == "object" && "id" in i)) {
        if (this._idmap.has(i.id))
          throw new Error(`ID ${i.id} already exists in the registry`);
        this._idmap.set(i.id, t);
      }
      return this;
    }
    remove(t) {
      return (this._map.delete(t), this);
    }
    get(t) {
      let n = t._zod.parent;
      if (n) {
        let i = { ...(this.get(n) ?? {}) };
        return (delete i.id, { ...i, ...this._map.get(t) });
      }
      return this._map.get(t);
    }
    has(t) {
      return this._map.has(t);
    }
  };
function fo() {
  return new Pr();
}
var rt = fo();
function $l(e, t) {
  return new e({ type: "string", ...k(t) });
}
function Pl(e, t) {
  return new e({ type: "string", coerce: !0, ...k(t) });
}
function ho(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Rn(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function go(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function yo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...k(t),
  });
}
function vo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...k(t),
  });
}
function bo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...k(t),
  });
}
function wo(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function So(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function xo(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ao(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Do(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Eo(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function To(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ko(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Io(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function $o(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Po(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function zo(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function No(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Oo(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ro(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Co(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function zl(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...k(t),
  });
}
function Nl(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...k(t),
  });
}
function Ol(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...k(t),
  });
}
function Rl(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...k(t),
  });
}
function Cl(e, t) {
  return new e({ type: "number", checks: [], ...k(t) });
}
function Ml(e, t) {
  return new e({ type: "number", coerce: !0, checks: [], ...k(t) });
}
function Ul(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...k(t),
  });
}
function jl(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...k(t),
  });
}
function Fl(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...k(t),
  });
}
function Ll(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...k(t),
  });
}
function Bl(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...k(t),
  });
}
function Vl(e, t) {
  return new e({ type: "boolean", ...k(t) });
}
function ql(e, t) {
  return new e({ type: "boolean", coerce: !0, ...k(t) });
}
function Hl(e, t) {
  return new e({ type: "bigint", ...k(t) });
}
function Zl(e, t) {
  return new e({ type: "bigint", coerce: !0, ...k(t) });
}
function Gl(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...k(t),
  });
}
function Wl(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...k(t),
  });
}
function Ql(e, t) {
  return new e({ type: "symbol", ...k(t) });
}
function Jl(e, t) {
  return new e({ type: "undefined", ...k(t) });
}
function Kl(e, t) {
  return new e({ type: "null", ...k(t) });
}
function Xl(e) {
  return new e({ type: "any" });
}
function zr(e) {
  return new e({ type: "unknown" });
}
function Yl(e, t) {
  return new e({ type: "never", ...k(t) });
}
function ec(e, t) {
  return new e({ type: "void", ...k(t) });
}
function tc(e, t) {
  return new e({ type: "date", ...k(t) });
}
function rc(e, t) {
  return new e({ type: "date", coerce: !0, ...k(t) });
}
function nc(e, t) {
  return new e({ type: "nan", ...k(t) });
}
function gt(e, t) {
  return new ao({ check: "less_than", ...k(t), value: e, inclusive: !1 });
}
function We(e, t) {
  return new ao({ check: "less_than", ...k(t), value: e, inclusive: !0 });
}
function yt(e, t) {
  return new so({ check: "greater_than", ...k(t), value: e, inclusive: !1 });
}
function Me(e, t) {
  return new so({ check: "greater_than", ...k(t), value: e, inclusive: !0 });
}
function ic(e) {
  return yt(0, e);
}
function oc(e) {
  return gt(0, e);
}
function ac(e) {
  return We(0, e);
}
function sc(e) {
  return Me(0, e);
}
function Xt(e, t) {
  return new au({ check: "multiple_of", ...k(t), value: e });
}
function Nr(e, t) {
  return new lu({ check: "max_size", ...k(t), maximum: e });
}
function Yt(e, t) {
  return new cu({ check: "min_size", ...k(t), minimum: e });
}
function Cn(e, t) {
  return new du({ check: "size_equals", ...k(t), size: e });
}
function Or(e, t) {
  return new mu({ check: "max_length", ...k(t), maximum: e });
}
function Rt(e, t) {
  return new pu({ check: "min_length", ...k(t), minimum: e });
}
function Rr(e, t) {
  return new _u({ check: "length_equals", ...k(t), length: e });
}
function Mn(e, t) {
  return new fu({
    check: "string_format",
    format: "regex",
    ...k(t),
    pattern: e,
  });
}
function Un(e) {
  return new hu({ check: "string_format", format: "lowercase", ...k(e) });
}
function jn(e) {
  return new gu({ check: "string_format", format: "uppercase", ...k(e) });
}
function Fn(e, t) {
  return new yu({
    check: "string_format",
    format: "includes",
    ...k(t),
    includes: e,
  });
}
function Ln(e, t) {
  return new vu({
    check: "string_format",
    format: "starts_with",
    ...k(t),
    prefix: e,
  });
}
function Bn(e, t) {
  return new bu({
    check: "string_format",
    format: "ends_with",
    ...k(t),
    suffix: e,
  });
}
function uc(e, t, n) {
  return new wu({ check: "property", property: e, schema: t, ...k(n) });
}
function Vn(e, t) {
  return new Su({ check: "mime_type", mime: e, ...k(t) });
}
function vt(e) {
  return new xu({ check: "overwrite", tx: e });
}
function qn(e) {
  return vt((t) => t.normalize(e));
}
function Hn() {
  return vt((e) => e.trim());
}
function Zn() {
  return vt((e) => e.toLowerCase());
}
function Gn() {
  return vt((e) => e.toUpperCase());
}
function Wn(e, t, n) {
  return new e({ type: "array", element: t, ...k(n) });
}
function Vw(e, t, n) {
  return new e({ type: "union", options: t, ...k(n) });
}
function qw(e, t, n, i) {
  return new e({ type: "union", options: n, discriminator: t, ...k(i) });
}
function Hw(e, t, n) {
  return new e({ type: "intersection", left: t, right: n });
}
function lc(e, t, n, i) {
  let r = n instanceof V,
    o = r ? i : n,
    a = r ? n : null;
  return new e({ type: "tuple", items: t, rest: a, ...k(o) });
}
function Zw(e, t, n, i) {
  return new e({ type: "record", keyType: t, valueType: n, ...k(i) });
}
function Gw(e, t, n, i) {
  return new e({ type: "map", keyType: t, valueType: n, ...k(i) });
}
function Ww(e, t, n) {
  return new e({ type: "set", valueType: t, ...k(n) });
}
function Qw(e, t, n) {
  let i = Array.isArray(t) ? Object.fromEntries(t.map((r) => [r, r])) : t;
  return new e({ type: "enum", entries: i, ...k(n) });
}
function Jw(e, t, n) {
  return new e({ type: "enum", entries: t, ...k(n) });
}
function Kw(e, t, n) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...k(n),
  });
}
function cc(e, t) {
  return new e({ type: "file", ...k(t) });
}
function Xw(e, t) {
  return new e({ type: "transform", transform: t });
}
function Yw(e, t) {
  return new e({ type: "optional", innerType: t });
}
function eS(e, t) {
  return new e({ type: "nullable", innerType: t });
}
function tS(e, t, n) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof n == "function" ? n() : n;
    },
  });
}
function rS(e, t, n) {
  return new e({ type: "nonoptional", innerType: t, ...k(n) });
}
function nS(e, t) {
  return new e({ type: "success", innerType: t });
}
function iS(e, t, n) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof n == "function" ? n : () => n,
  });
}
function oS(e, t, n) {
  return new e({ type: "pipe", in: t, out: n });
}
function aS(e, t) {
  return new e({ type: "readonly", innerType: t });
}
function sS(e, t, n) {
  return new e({ type: "template_literal", parts: t, ...k(n) });
}
function uS(e, t) {
  return new e({ type: "lazy", getter: t });
}
function lS(e, t) {
  return new e({ type: "promise", innerType: t });
}
function dc(e, t, n) {
  let i = k(n);
  return (
    i.abort ?? (i.abort = !0),
    new e({ type: "custom", check: "custom", fn: t, ...i })
  );
}
function mc(e, t, n) {
  return new e({ type: "custom", check: "custom", fn: t, ...k(n) });
}
function pc(e, t) {
  let { case: n, error: i, truthy: r, falsy: o } = k(t),
    a = new Set(r ?? ["true", "1", "yes", "on", "y", "enabled"]),
    s = new Set(o ?? ["false", "0", "no", "off", "n", "disabled"]),
    u = e.Pipe ?? Nn,
    l = e.Boolean ?? Pn,
    c = e.Unknown ?? Ot,
    d = new c({
      type: "unknown",
      checks: [
        {
          _zod: {
            check: (f) => {
              if (typeof f.value == "string") {
                let _ = f.value;
                (n !== "sensitive" && (_ = _.toLowerCase()),
                  a.has(_)
                    ? (f.value = !0)
                    : s.has(_)
                      ? (f.value = !1)
                      : f.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...a, ...s],
                          input: f.value,
                          inst: d,
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
  return new u({
    type: "pipe",
    in: d,
    out: new l({ type: "boolean", error: i }),
    error: i,
  });
}
var Mo = class {
  constructor(t) {
    ((this._def = t), (this.def = t));
  }
  implement(t) {
    if (typeof t != "function")
      throw new Error("implement() must be called with a function");
    let n = (...i) => {
      let r = this._def.input
        ? eo(this._def.input, i, void 0, { callee: n })
        : i;
      if (!Array.isArray(r))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema.",
        );
      let o = t(...r);
      return this._def.output
        ? eo(this._def.output, o, void 0, { callee: n })
        : o;
    };
    return n;
  }
  implementAsync(t) {
    if (typeof t != "function")
      throw new Error("implement() must be called with a function");
    let n = async (...i) => {
      let r = this._def.input
        ? await ro(this._def.input, i, void 0, { callee: n })
        : i;
      if (!Array.isArray(r))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema.",
        );
      let o = await t(...r);
      return this._def.output
        ? ro(this._def.output, o, void 0, { callee: n })
        : o;
    };
    return n;
  }
  input(...t) {
    let n = this.constructor;
    return Array.isArray(t[0])
      ? new n({
          type: "function",
          input: new Kt({ type: "tuple", items: t[0], rest: t[1] }),
          output: this._def.output,
        })
      : new n({ type: "function", input: t[0], output: this._def.output });
  }
  output(t) {
    let n = this.constructor;
    return new n({ type: "function", input: this._def.input, output: t });
  }
};
function _c(e) {
  return new Mo({
    type: "function",
    input: Array.isArray(e?.input)
      ? lc(Kt, e?.input)
      : (e?.input ?? Wn(zn, zr(Ot))),
    output: e?.output ?? zr(Ot),
  });
}
var Qn = class {
  constructor(t) {
    ((this.counter = 0),
      (this.metadataRegistry = t?.metadata ?? rt),
      (this.target = t?.target ?? "draft-2020-12"),
      (this.unrepresentable = t?.unrepresentable ?? "throw"),
      (this.override = t?.override ?? (() => {})),
      (this.io = t?.io ?? "output"),
      (this.seen = new Map()));
  }
  process(t, n = { path: [], schemaPath: [] }) {
    var i;
    let r = t._zod.def,
      o = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      a = this.seen.get(t);
    if (a)
      return (
        a.count++,
        n.schemaPath.includes(t) && (a.cycle = n.path),
        a.schema
      );
    let s = { schema: {}, count: 1, cycle: void 0 };
    (this.seen.set(t, s),
      t._zod.toJSONSchema && (s.schema = t._zod.toJSONSchema()));
    let u = { ...n, schemaPath: [...n.schemaPath, t], path: n.path },
      l = t._zod.parent;
    if (l) ((s.ref = l), this.process(l, u), (this.seen.get(l).isParent = !0));
    else {
      let f = s.schema;
      switch (r.type) {
        case "string": {
          let _ = f;
          _.type = "string";
          let {
            minimum: g,
            maximum: m,
            format: A,
            patterns: D,
            contentEncoding: S,
          } = t._zod.bag;
          if (
            (typeof g == "number" && (_.minLength = g),
            typeof m == "number" && (_.maxLength = m),
            A && ((_.format = o[A] ?? A), _.format === "" && delete _.format),
            S && (_.contentEncoding = S),
            D && D.size > 0)
          ) {
            let v = [...D];
            v.length === 1
              ? (_.pattern = v[0].source)
              : v.length > 1 &&
                (s.schema.allOf = [
                  ...v.map((b) => ({
                    ...(this.target === "draft-7" ? { type: "string" } : {}),
                    pattern: b.source,
                  })),
                ]);
          }
          break;
        }
        case "number": {
          let _ = f,
            {
              minimum: g,
              maximum: m,
              format: A,
              multipleOf: D,
              exclusiveMaximum: S,
              exclusiveMinimum: v,
            } = t._zod.bag;
          (typeof A == "string" && A.includes("int")
            ? (_.type = "integer")
            : (_.type = "number"),
            typeof v == "number" && (_.exclusiveMinimum = v),
            typeof g == "number" &&
              ((_.minimum = g),
              typeof v == "number" &&
                (v >= g ? delete _.minimum : delete _.exclusiveMinimum)),
            typeof S == "number" && (_.exclusiveMaximum = S),
            typeof m == "number" &&
              ((_.maximum = m),
              typeof S == "number" &&
                (S <= m ? delete _.maximum : delete _.exclusiveMaximum)),
            typeof D == "number" && (_.multipleOf = D));
          break;
        }
        case "boolean": {
          let _ = f;
          _.type = "boolean";
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
          let _ = f;
          _.type = "null";
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
          let _ = f,
            { minimum: g, maximum: m } = t._zod.bag;
          (typeof g == "number" && (_.minItems = g),
            typeof m == "number" && (_.maxItems = m),
            (_.type = "array"),
            (_.items = this.process(r.element, {
              ...u,
              path: [...u.path, "items"],
            })));
          break;
        }
        case "object": {
          let _ = f;
          ((_.type = "object"), (_.properties = {}));
          let g = r.shape;
          for (let D in g)
            _.properties[D] = this.process(g[D], {
              ...u,
              path: [...u.path, "properties", D],
            });
          let m = new Set(Object.keys(g)),
            A = new Set(
              [...m].filter((D) => {
                let S = r.shape[D]._zod;
                return this.io === "input"
                  ? S.optin === void 0
                  : S.optout === void 0;
              }),
            );
          (A.size > 0 && (_.required = Array.from(A)),
            r.catchall?._zod.def.type === "never"
              ? (_.additionalProperties = !1)
              : r.catchall
                ? r.catchall &&
                  (_.additionalProperties = this.process(r.catchall, {
                    ...u,
                    path: [...u.path, "additionalProperties"],
                  }))
                : this.io === "output" && (_.additionalProperties = !1));
          break;
        }
        case "union": {
          let _ = f;
          _.anyOf = r.options.map((g, m) =>
            this.process(g, { ...u, path: [...u.path, "anyOf", m] }),
          );
          break;
        }
        case "intersection": {
          let _ = f,
            g = this.process(r.left, { ...u, path: [...u.path, "allOf", 0] }),
            m = this.process(r.right, { ...u, path: [...u.path, "allOf", 1] }),
            A = (S) => "allOf" in S && Object.keys(S).length === 1,
            D = [...(A(g) ? g.allOf : [g]), ...(A(m) ? m.allOf : [m])];
          _.allOf = D;
          break;
        }
        case "tuple": {
          let _ = f;
          _.type = "array";
          let g = r.items.map((D, S) =>
            this.process(D, { ...u, path: [...u.path, "prefixItems", S] }),
          );
          if (
            (this.target === "draft-2020-12"
              ? (_.prefixItems = g)
              : (_.items = g),
            r.rest)
          ) {
            let D = this.process(r.rest, { ...u, path: [...u.path, "items"] });
            this.target === "draft-2020-12"
              ? (_.items = D)
              : (_.additionalItems = D);
          }
          r.rest &&
            (_.items = this.process(r.rest, {
              ...u,
              path: [...u.path, "items"],
            }));
          let { minimum: m, maximum: A } = t._zod.bag;
          (typeof m == "number" && (_.minItems = m),
            typeof A == "number" && (_.maxItems = A));
          break;
        }
        case "record": {
          let _ = f;
          ((_.type = "object"),
            (_.propertyNames = this.process(r.keyType, {
              ...u,
              path: [...u.path, "propertyNames"],
            })),
            (_.additionalProperties = this.process(r.valueType, {
              ...u,
              path: [...u.path, "additionalProperties"],
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
          let _ = f,
            g = vn(r.entries);
          (g.every((m) => typeof m == "number") && (_.type = "number"),
            g.every((m) => typeof m == "string") && (_.type = "string"),
            (_.enum = g));
          break;
        }
        case "literal": {
          let _ = f,
            g = [];
          for (let m of r.values)
            if (m === void 0) {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "Literal `undefined` cannot be represented in JSON Schema",
                );
            } else if (typeof m == "bigint") {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "BigInt literals cannot be represented in JSON Schema",
                );
              g.push(Number(m));
            } else g.push(m);
          if (g.length !== 0)
            if (g.length === 1) {
              let m = g[0];
              ((_.type = m === null ? "null" : typeof m), (_.const = m));
            } else
              (g.every((m) => typeof m == "number") && (_.type = "number"),
                g.every((m) => typeof m == "string") && (_.type = "string"),
                g.every((m) => typeof m == "boolean") && (_.type = "string"),
                g.every((m) => m === null) && (_.type = "null"),
                (_.enum = g));
          break;
        }
        case "file": {
          let _ = f,
            g = { type: "string", format: "binary", contentEncoding: "binary" },
            { minimum: m, maximum: A, mime: D } = t._zod.bag;
          (m !== void 0 && (g.minLength = m),
            A !== void 0 && (g.maxLength = A),
            D
              ? D.length === 1
                ? ((g.contentMediaType = D[0]), Object.assign(_, g))
                : (_.anyOf = D.map((S) => ({ ...g, contentMediaType: S })))
              : Object.assign(_, g));
          break;
        }
        case "transform": {
          if (this.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
          break;
        }
        case "nullable": {
          let _ = this.process(r.innerType, u);
          f.anyOf = [_, { type: "null" }];
          break;
        }
        case "nonoptional": {
          (this.process(r.innerType, u), (s.ref = r.innerType));
          break;
        }
        case "success": {
          let _ = f;
          _.type = "boolean";
          break;
        }
        case "default": {
          (this.process(r.innerType, u),
            (s.ref = r.innerType),
            (f.default = r.defaultValue));
          break;
        }
        case "prefault": {
          (this.process(r.innerType, u),
            (s.ref = r.innerType),
            this.io === "input" && (f._prefault = r.defaultValue));
          break;
        }
        case "catch": {
          (this.process(r.innerType, u), (s.ref = r.innerType));
          let _;
          try {
            _ = r.catchValue(void 0);
          } catch {
            throw new Error(
              "Dynamic catch values are not supported in JSON Schema",
            );
          }
          f.default = _;
          break;
        }
        case "nan": {
          if (this.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
          break;
        }
        case "template_literal": {
          let _ = f,
            g = t._zod.pattern;
          if (!g) throw new Error("Pattern not found in template literal");
          ((_.type = "string"), (_.pattern = g.source));
          break;
        }
        case "pipe": {
          let _ =
            this.io === "input"
              ? r.in._zod.def.type === "transform"
                ? r.out
                : r.in
              : r.out;
          (this.process(_, u), (s.ref = _));
          break;
        }
        case "readonly": {
          (this.process(r.innerType, u),
            (s.ref = r.innerType),
            (f.readOnly = !0));
          break;
        }
        case "promise": {
          (this.process(r.innerType, u), (s.ref = r.innerType));
          break;
        }
        case "optional": {
          (this.process(r.innerType, u), (s.ref = r.innerType));
          break;
        }
        case "lazy": {
          let _ = t._zod.innerType;
          (this.process(_, u), (s.ref = _));
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
    let c = this.metadataRegistry.get(t);
    return (
      c && Object.assign(s.schema, c),
      this.io === "input" &&
        he(t) &&
        (delete s.schema.examples, delete s.schema.default),
      this.io === "input" &&
        s.schema._prefault &&
        ((i = s.schema).default ?? (i.default = s.schema._prefault)),
      delete s.schema._prefault,
      this.seen.get(t).schema
    );
  }
  emit(t, n) {
    let i = {
        cycles: n?.cycles ?? "ref",
        reused: n?.reused ?? "inline",
        external: n?.external ?? void 0,
      },
      r = this.seen.get(t);
    if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
    let o = (c) => {
        let d = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (i.external) {
          let m = i.external.registry.get(c[0])?.id;
          if (m) return { ref: i.external.uri(m) };
          let A = c[1].defId ?? c[1].schema.id ?? `schema${this.counter++}`;
          return (
            (c[1].defId = A),
            { defId: A, ref: `${i.external.uri("__shared")}#/${d}/${A}` }
          );
        }
        if (c[1] === r) return { ref: "#" };
        let _ = `#/${d}/`,
          g = c[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: g, ref: _ + g };
      },
      a = (c) => {
        if (c[1].schema.$ref) return;
        let d = c[1],
          { ref: f, defId: _ } = o(c);
        ((d.def = { ...d.schema }), _ && (d.defId = _));
        let g = d.schema;
        for (let m in g) delete g[m];
        g.$ref = f;
      };
    for (let c of this.seen.entries()) {
      let d = c[1];
      if (t === c[0]) {
        a(c);
        continue;
      }
      if (i.external) {
        let _ = i.external.registry.get(c[0])?.id;
        if (t !== c[0] && _) {
          a(c);
          continue;
        }
      }
      if (this.metadataRegistry.get(c[0])?.id) {
        a(c);
        continue;
      }
      if (d.cycle) {
        if (i.cycles === "throw")
          throw new Error(`Cycle detected: #/${d.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        i.cycles === "ref" && a(c);
        continue;
      }
      if (d.count > 1 && i.reused === "ref") {
        a(c);
        continue;
      }
    }
    let s = (c, d) => {
      let f = this.seen.get(c),
        _ = f.def ?? f.schema,
        g = { ..._ };
      if (f.ref === null) return;
      let m = f.ref;
      if (((f.ref = null), m)) {
        s(m, d);
        let A = this.seen.get(m).schema;
        A.$ref && d.target === "draft-7"
          ? ((_.allOf = _.allOf ?? []), _.allOf.push(A))
          : (Object.assign(_, A), Object.assign(_, g));
      }
      f.isParent || this.override({ zodSchema: c, jsonSchema: _ });
    };
    for (let c of [...this.seen.entries()].reverse())
      s(c[0], { target: this.target });
    let u = {};
    (this.target === "draft-2020-12"
      ? (u.$schema = "https://json-schema.org/draft/2020-12/schema")
      : this.target === "draft-7"
        ? (u.$schema = "http://json-schema.org/draft-07/schema#")
        : console.warn(`Invalid target: ${this.target}`),
      Object.assign(u, r.def));
    let l = i.external?.defs ?? {};
    for (let c of this.seen.entries()) {
      let d = c[1];
      d.def && d.defId && (l[d.defId] = d.def);
    }
    !i.external &&
      Object.keys(l).length > 0 &&
      (this.target === "draft-2020-12" ? (u.$defs = l) : (u.definitions = l));
    try {
      return JSON.parse(JSON.stringify(u));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function fc(e, t) {
  if (e instanceof Pr) {
    let i = new Qn(t),
      r = {};
    for (let s of e._idmap.entries()) {
      let [u, l] = s;
      i.process(l);
    }
    let o = {},
      a = { registry: e, uri: t?.uri || ((s) => s), defs: r };
    for (let s of e._idmap.entries()) {
      let [u, l] = s;
      o[u] = i.emit(l, { ...t, external: a });
    }
    if (Object.keys(r).length > 0) {
      let s = i.target === "draft-2020-12" ? "$defs" : "definitions";
      o.__shared = { [s]: r };
    }
    return { schemas: o };
  }
  let n = new Qn(t);
  return (n.process(e), n.emit(e, t));
}
function he(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  switch (r.type) {
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
      return he(r.element, n);
    case "object": {
      for (let o in r.shape) if (he(r.shape[o], n)) return !0;
      return !1;
    }
    case "union": {
      for (let o of r.options) if (he(o, n)) return !0;
      return !1;
    }
    case "intersection":
      return he(r.left, n) || he(r.right, n);
    case "tuple": {
      for (let o of r.items) if (he(o, n)) return !0;
      return !!(r.rest && he(r.rest, n));
    }
    case "record":
      return he(r.keyType, n) || he(r.valueType, n);
    case "map":
      return he(r.keyType, n) || he(r.valueType, n);
    case "set":
      return he(r.valueType, n);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return he(r.innerType, n);
    case "lazy":
      return he(r.getter(), n);
    case "default":
      return he(r.innerType, n);
    case "prefault":
      return he(r.innerType, n);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return he(r.in, n) || he(r.out, n);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${r.type}`);
}
var Df = {};
var Bo = {};
Ke(Bo, {
  ZodISODate: () => jo,
  ZodISODateTime: () => Uo,
  ZodISODuration: () => Lo,
  ZodISOTime: () => Fo,
  date: () => gc,
  datetime: () => hc,
  duration: () => vc,
  time: () => yc,
});
var Uo = y("ZodISODateTime", (e, t) => {
  (Mu.init(e, t), ne.init(e, t));
});
function hc(e) {
  return zl(Uo, e);
}
var jo = y("ZodISODate", (e, t) => {
  (Uu.init(e, t), ne.init(e, t));
});
function gc(e) {
  return Nl(jo, e);
}
var Fo = y("ZodISOTime", (e, t) => {
  (ju.init(e, t), ne.init(e, t));
});
function yc(e) {
  return Ol(Fo, e);
}
var Lo = y("ZodISODuration", (e, t) => {
  (Fu.init(e, t), ne.init(e, t));
});
function vc(e) {
  return Rl(Lo, e);
}
var Tf = (e, t) => {
    (En.init(e, t),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (n) => kn(e, n) },
        flatten: { value: (n) => Tn(e, n) },
        addIssue: { value: (n) => e.issues.push(n) },
        addIssues: { value: (n) => e.issues.push(...n) },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  dS = y("ZodError", Tf),
  Cr = y("ZodError", Tf, { Parent: Error });
var bc = Yi(Cr),
  wc = to(Cr),
  Sc = no(Cr),
  xc = io(Cr);
var Q = y(
    "ZodType",
    (e, t) => (
      V.init(e, t),
      (e.def = t),
      Object.defineProperty(e, "_def", { value: t }),
      (e.check = (...n) =>
        e.clone({
          ...t,
          checks: [
            ...(t.checks ?? []),
            ...n.map((i) =>
              typeof i == "function"
                ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } }
                : i,
            ),
          ],
        })),
      (e.clone = (n, i) => Ve(e, n, i)),
      (e.brand = () => e),
      (e.register = (n, i) => (n.add(e, i), e)),
      (e.parse = (n, i) => bc(e, n, i, { callee: e.parse })),
      (e.safeParse = (n, i) => Sc(e, n, i)),
      (e.parseAsync = async (n, i) => wc(e, n, i, { callee: e.parseAsync })),
      (e.safeParseAsync = async (n, i) => xc(e, n, i)),
      (e.spa = e.safeParseAsync),
      (e.refine = (n, i) => e.check(ph(n, i))),
      (e.superRefine = (n) => e.check(_h(n))),
      (e.overwrite = (n) => e.check(vt(n))),
      (e.optional = () => Ho(e)),
      (e.nullable = () => Zo(e)),
      (e.nullish = () => Ho(Zo(e))),
      (e.nonoptional = (n) => th(e, n)),
      (e.array = () => Zc(e)),
      (e.or = (n) => Xo([e, n])),
      (e.and = (n) => Ff(e, n)),
      (e.transform = (n) => Go(e, Qc(n))),
      (e.default = (n) => Xf(e, n)),
      (e.prefault = (n) => eh(e, n)),
      (e.catch = (n) => ih(e, n)),
      (e.pipe = (n) => Go(e, n)),
      (e.readonly = () => sh(e)),
      (e.describe = (n) => {
        let i = e.clone();
        return (rt.add(i, { description: n }), i);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return rt.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...n) => {
        if (n.length === 0) return rt.get(e);
        let i = e.clone();
        return (rt.add(i, n[0]), i);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  Ec = y("_ZodString", (e, t) => {
    ($n.init(e, t), Q.init(e, t));
    let n = e._zod.bag;
    ((e.format = n.format ?? null),
      (e.minLength = n.minimum ?? null),
      (e.maxLength = n.maximum ?? null),
      (e.regex = (...i) => e.check(Mn(...i))),
      (e.includes = (...i) => e.check(Fn(...i))),
      (e.startsWith = (...i) => e.check(Ln(...i))),
      (e.endsWith = (...i) => e.check(Bn(...i))),
      (e.min = (...i) => e.check(Rt(...i))),
      (e.max = (...i) => e.check(Or(...i))),
      (e.length = (...i) => e.check(Rr(...i))),
      (e.nonempty = (...i) => e.check(Rt(1, ...i))),
      (e.lowercase = (i) => e.check(Un(i))),
      (e.uppercase = (i) => e.check(jn(i))),
      (e.trim = () => e.check(Hn())),
      (e.normalize = (...i) => e.check(qn(...i))),
      (e.toLowerCase = () => e.check(Zn())),
      (e.toUpperCase = () => e.check(Gn())));
  }),
  Wo = y("ZodString", (e, t) => {
    ($n.init(e, t),
      Ec.init(e, t),
      (e.email = (n) => e.check(ho(Tc, n))),
      (e.url = (n) => e.check(wo(kc, n))),
      (e.jwt = (n) => e.check(Co(Vc, n))),
      (e.emoji = (n) => e.check(So(Ic, n))),
      (e.guid = (n) => e.check(Rn(Vo, n))),
      (e.uuid = (n) => e.check(go(wt, n))),
      (e.uuidv4 = (n) => e.check(yo(wt, n))),
      (e.uuidv6 = (n) => e.check(vo(wt, n))),
      (e.uuidv7 = (n) => e.check(bo(wt, n))),
      (e.nanoid = (n) => e.check(xo($c, n))),
      (e.guid = (n) => e.check(Rn(Vo, n))),
      (e.cuid = (n) => e.check(Ao(Pc, n))),
      (e.cuid2 = (n) => e.check(Do(zc, n))),
      (e.ulid = (n) => e.check(Eo(Nc, n))),
      (e.base64 = (n) => e.check(No(Fc, n))),
      (e.base64url = (n) => e.check(Oo(Lc, n))),
      (e.xid = (n) => e.check(To(Oc, n))),
      (e.ksuid = (n) => e.check(ko(Rc, n))),
      (e.ipv4 = (n) => e.check(Io(Cc, n))),
      (e.ipv6 = (n) => e.check($o(Mc, n))),
      (e.cidrv4 = (n) => e.check(Po(Uc, n))),
      (e.cidrv6 = (n) => e.check(zo(jc, n))),
      (e.e164 = (n) => e.check(Ro(Bc, n))),
      (e.datetime = (n) => e.check(hc(n))),
      (e.date = (n) => e.check(gc(n))),
      (e.time = (n) => e.check(yc(n))),
      (e.duration = (n) => e.check(vc(n))));
  });
function Ac(e) {
  return $l(Wo, e);
}
var ne = y("ZodStringFormat", (e, t) => {
    (re.init(e, t), Ec.init(e, t));
  }),
  Tc = y("ZodEmail", (e, t) => {
    (ku.init(e, t), ne.init(e, t));
  });
function pS(e) {
  return ho(Tc, e);
}
var Vo = y("ZodGUID", (e, t) => {
  (Eu.init(e, t), ne.init(e, t));
});
function _S(e) {
  return Rn(Vo, e);
}
var wt = y("ZodUUID", (e, t) => {
  (Tu.init(e, t), ne.init(e, t));
});
function fS(e) {
  return go(wt, e);
}
function hS(e) {
  return yo(wt, e);
}
function gS(e) {
  return vo(wt, e);
}
function yS(e) {
  return bo(wt, e);
}
var kc = y("ZodURL", (e, t) => {
  (Iu.init(e, t), ne.init(e, t));
});
function vS(e) {
  return wo(kc, e);
}
var Ic = y("ZodEmoji", (e, t) => {
  ($u.init(e, t), ne.init(e, t));
});
function bS(e) {
  return So(Ic, e);
}
var $c = y("ZodNanoID", (e, t) => {
  (Pu.init(e, t), ne.init(e, t));
});
function wS(e) {
  return xo($c, e);
}
var Pc = y("ZodCUID", (e, t) => {
  (zu.init(e, t), ne.init(e, t));
});
function SS(e) {
  return Ao(Pc, e);
}
var zc = y("ZodCUID2", (e, t) => {
  (Nu.init(e, t), ne.init(e, t));
});
function xS(e) {
  return Do(zc, e);
}
var Nc = y("ZodULID", (e, t) => {
  (Ou.init(e, t), ne.init(e, t));
});
function AS(e) {
  return Eo(Nc, e);
}
var Oc = y("ZodXID", (e, t) => {
  (Ru.init(e, t), ne.init(e, t));
});
function DS(e) {
  return To(Oc, e);
}
var Rc = y("ZodKSUID", (e, t) => {
  (Cu.init(e, t), ne.init(e, t));
});
function ES(e) {
  return ko(Rc, e);
}
var Cc = y("ZodIPv4", (e, t) => {
  (Lu.init(e, t), ne.init(e, t));
});
function TS(e) {
  return Io(Cc, e);
}
var Mc = y("ZodIPv6", (e, t) => {
  (Bu.init(e, t), ne.init(e, t));
});
function kS(e) {
  return $o(Mc, e);
}
var Uc = y("ZodCIDRv4", (e, t) => {
  (Vu.init(e, t), ne.init(e, t));
});
function IS(e) {
  return Po(Uc, e);
}
var jc = y("ZodCIDRv6", (e, t) => {
  (qu.init(e, t), ne.init(e, t));
});
function $S(e) {
  return zo(jc, e);
}
var Fc = y("ZodBase64", (e, t) => {
  (Zu.init(e, t), ne.init(e, t));
});
function PS(e) {
  return No(Fc, e);
}
var Lc = y("ZodBase64URL", (e, t) => {
  (Gu.init(e, t), ne.init(e, t));
});
function zS(e) {
  return Oo(Lc, e);
}
var Bc = y("ZodE164", (e, t) => {
  (Wu.init(e, t), ne.init(e, t));
});
function NS(e) {
  return Ro(Bc, e);
}
var Vc = y("ZodJWT", (e, t) => {
  (Qu.init(e, t), ne.init(e, t));
});
function OS(e) {
  return Co(Vc, e);
}
var Kn = y("ZodNumber", (e, t) => {
  (co.init(e, t),
    Q.init(e, t),
    (e.gt = (i, r) => e.check(yt(i, r))),
    (e.gte = (i, r) => e.check(Me(i, r))),
    (e.min = (i, r) => e.check(Me(i, r))),
    (e.lt = (i, r) => e.check(gt(i, r))),
    (e.lte = (i, r) => e.check(We(i, r))),
    (e.max = (i, r) => e.check(We(i, r))),
    (e.int = (i) => e.check(Dc(i))),
    (e.safe = (i) => e.check(Dc(i))),
    (e.positive = (i) => e.check(yt(0, i))),
    (e.nonnegative = (i) => e.check(Me(0, i))),
    (e.negative = (i) => e.check(gt(0, i))),
    (e.nonpositive = (i) => e.check(We(0, i))),
    (e.multipleOf = (i, r) => e.check(Xt(i, r))),
    (e.step = (i, r) => e.check(Xt(i, r))),
    (e.finite = () => e));
  let n = e._zod.bag;
  ((e.minValue =
    Math.max(
      n.minimum ?? Number.NEGATIVE_INFINITY,
      n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
    ) ?? null),
    (e.maxValue =
      Math.min(
        n.maximum ?? Number.POSITIVE_INFINITY,
        n.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
      ) ?? null),
    (e.isInt =
      (n.format ?? "").includes("int") ||
      Number.isSafeInteger(n.multipleOf ?? 0.5)),
    (e.isFinite = !0),
    (e.format = n.format ?? null));
});
function kf(e) {
  return Cl(Kn, e);
}
var Mr = y("ZodNumberFormat", (e, t) => {
  (Ju.init(e, t), Kn.init(e, t));
});
function Dc(e) {
  return Ul(Mr, e);
}
function RS(e) {
  return jl(Mr, e);
}
function CS(e) {
  return Fl(Mr, e);
}
function MS(e) {
  return Ll(Mr, e);
}
function US(e) {
  return Bl(Mr, e);
}
var Xn = y("ZodBoolean", (e, t) => {
  (Pn.init(e, t), Q.init(e, t));
});
function If(e) {
  return Vl(Xn, e);
}
var Yn = y("ZodBigInt", (e, t) => {
  (mo.init(e, t),
    Q.init(e, t),
    (e.gte = (i, r) => e.check(Me(i, r))),
    (e.min = (i, r) => e.check(Me(i, r))),
    (e.gt = (i, r) => e.check(yt(i, r))),
    (e.gte = (i, r) => e.check(Me(i, r))),
    (e.min = (i, r) => e.check(Me(i, r))),
    (e.lt = (i, r) => e.check(gt(i, r))),
    (e.lte = (i, r) => e.check(We(i, r))),
    (e.max = (i, r) => e.check(We(i, r))),
    (e.positive = (i) => e.check(yt(BigInt(0), i))),
    (e.negative = (i) => e.check(gt(BigInt(0), i))),
    (e.nonpositive = (i) => e.check(We(BigInt(0), i))),
    (e.nonnegative = (i) => e.check(Me(BigInt(0), i))),
    (e.multipleOf = (i, r) => e.check(Xt(i, r))));
  let n = e._zod.bag;
  ((e.minValue = n.minimum ?? null),
    (e.maxValue = n.maximum ?? null),
    (e.format = n.format ?? null));
});
function jS(e) {
  return Hl(Yn, e);
}
var qc = y("ZodBigIntFormat", (e, t) => {
  (Ku.init(e, t), Yn.init(e, t));
});
function FS(e) {
  return Gl(qc, e);
}
function LS(e) {
  return Wl(qc, e);
}
var $f = y("ZodSymbol", (e, t) => {
  (Xu.init(e, t), Q.init(e, t));
});
function BS(e) {
  return Ql($f, e);
}
var Pf = y("ZodUndefined", (e, t) => {
  (Yu.init(e, t), Q.init(e, t));
});
function VS(e) {
  return Jl(Pf, e);
}
var zf = y("ZodNull", (e, t) => {
  (el.init(e, t), Q.init(e, t));
});
function Nf(e) {
  return Kl(zf, e);
}
var Of = y("ZodAny", (e, t) => {
  (tl.init(e, t), Q.init(e, t));
});
function qS() {
  return Xl(Of);
}
var Hc = y("ZodUnknown", (e, t) => {
  (Ot.init(e, t), Q.init(e, t));
});
function qo() {
  return zr(Hc);
}
var Rf = y("ZodNever", (e, t) => {
  (rl.init(e, t), Q.init(e, t));
});
function Qo(e) {
  return Yl(Rf, e);
}
var Cf = y("ZodVoid", (e, t) => {
  (nl.init(e, t), Q.init(e, t));
});
function HS(e) {
  return ec(Cf, e);
}
var Jo = y("ZodDate", (e, t) => {
  (il.init(e, t),
    Q.init(e, t),
    (e.min = (i, r) => e.check(Me(i, r))),
    (e.max = (i, r) => e.check(We(i, r))));
  let n = e._zod.bag;
  ((e.minDate = n.minimum ? new Date(n.minimum) : null),
    (e.maxDate = n.maximum ? new Date(n.maximum) : null));
});
function ZS(e) {
  return tc(Jo, e);
}
var Mf = y("ZodArray", (e, t) => {
  (zn.init(e, t),
    Q.init(e, t),
    (e.element = t.element),
    (e.min = (n, i) => e.check(Rt(n, i))),
    (e.nonempty = (n) => e.check(Rt(1, n))),
    (e.max = (n, i) => e.check(Or(n, i))),
    (e.length = (n, i) => e.check(Rr(n, i))),
    (e.unwrap = () => e.element));
});
function Zc(e, t) {
  return Wn(Mf, e, t);
}
function GS(e) {
  let t = e._zod.def.shape;
  return Gf(Object.keys(t));
}
var Ko = y("ZodObject", (e, t) => {
  (ol.init(e, t),
    Q.init(e, t),
    P.defineLazy(e, "shape", () =>
      Object.fromEntries(Object.entries(e._zod.def.shape)),
    ),
    (e.keyof = () => Hf(Object.keys(e._zod.def.shape))),
    (e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: qo() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: qo() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: Qo() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (n) => P.extend(e, n)),
    (e.merge = (n) => P.merge(e, n)),
    (e.pick = (n) => P.pick(e, n)),
    (e.omit = (n) => P.omit(e, n)),
    (e.partial = (...n) => P.partial(Jc, e, n[0])),
    (e.required = (...n) => P.required(Kc, e, n[0])));
});
function WS(e, t) {
  let n = {
    type: "object",
    get shape() {
      return (P.assignProp(this, "shape", { ...e }), this.shape);
    },
    ...P.normalizeParams(t),
  };
  return new Ko(n);
}
function QS(e, t) {
  return new Ko({
    type: "object",
    get shape() {
      return (P.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: Qo(),
    ...P.normalizeParams(t),
  });
}
function JS(e, t) {
  return new Ko({
    type: "object",
    get shape() {
      return (P.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: qo(),
    ...P.normalizeParams(t),
  });
}
var Gc = y("ZodUnion", (e, t) => {
  (po.init(e, t), Q.init(e, t), (e.options = t.options));
});
function Xo(e, t) {
  return new Gc({ type: "union", options: e, ...P.normalizeParams(t) });
}
var Uf = y("ZodDiscriminatedUnion", (e, t) => {
  (Gc.init(e, t), al.init(e, t));
});
function KS(e, t, n) {
  return new Uf({
    type: "union",
    options: t,
    discriminator: e,
    ...P.normalizeParams(n),
  });
}
var jf = y("ZodIntersection", (e, t) => {
  (sl.init(e, t), Q.init(e, t));
});
function Ff(e, t) {
  return new jf({ type: "intersection", left: e, right: t });
}
var Lf = y("ZodTuple", (e, t) => {
  (Kt.init(e, t),
    Q.init(e, t),
    (e.rest = (n) => e.clone({ ...e._zod.def, rest: n })));
});
function XS(e, t, n) {
  let i = t instanceof V,
    r = i ? n : t,
    o = i ? t : null;
  return new Lf({ type: "tuple", items: e, rest: o, ...P.normalizeParams(r) });
}
var Wc = y("ZodRecord", (e, t) => {
  (ul.init(e, t),
    Q.init(e, t),
    (e.keyType = t.keyType),
    (e.valueType = t.valueType));
});
function Bf(e, t, n) {
  return new Wc({
    type: "record",
    keyType: e,
    valueType: t,
    ...P.normalizeParams(n),
  });
}
function YS(e, t, n) {
  return new Wc({
    type: "record",
    keyType: Xo([e, Qo()]),
    valueType: t,
    ...P.normalizeParams(n),
  });
}
var Vf = y("ZodMap", (e, t) => {
  (ll.init(e, t),
    Q.init(e, t),
    (e.keyType = t.keyType),
    (e.valueType = t.valueType));
});
function e2(e, t, n) {
  return new Vf({
    type: "map",
    keyType: e,
    valueType: t,
    ...P.normalizeParams(n),
  });
}
var qf = y("ZodSet", (e, t) => {
  (cl.init(e, t),
    Q.init(e, t),
    (e.min = (...n) => e.check(Yt(...n))),
    (e.nonempty = (n) => e.check(Yt(1, n))),
    (e.max = (...n) => e.check(Nr(...n))),
    (e.size = (...n) => e.check(Cn(...n))));
});
function t2(e, t) {
  return new qf({ type: "set", valueType: e, ...P.normalizeParams(t) });
}
var Jn = y("ZodEnum", (e, t) => {
  (dl.init(e, t),
    Q.init(e, t),
    (e.enum = t.entries),
    (e.options = Object.values(t.entries)));
  let n = new Set(Object.keys(t.entries));
  ((e.extract = (i, r) => {
    let o = {};
    for (let a of i)
      if (n.has(a)) o[a] = t.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new Jn({ ...t, checks: [], ...P.normalizeParams(r), entries: o });
  }),
    (e.exclude = (i, r) => {
      let o = { ...t.entries };
      for (let a of i)
        if (n.has(a)) delete o[a];
        else throw new Error(`Key ${a} not found in enum`);
      return new Jn({ ...t, checks: [], ...P.normalizeParams(r), entries: o });
    }));
});
function Hf(e, t) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new Jn({ type: "enum", entries: n, ...P.normalizeParams(t) });
}
function r2(e, t) {
  return new Jn({ type: "enum", entries: e, ...P.normalizeParams(t) });
}
var Zf = y("ZodLiteral", (e, t) => {
  (ml.init(e, t),
    Q.init(e, t),
    (e.values = new Set(t.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (t.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return t.values[0];
      },
    }));
});
function Gf(e, t) {
  return new Zf({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...P.normalizeParams(t),
  });
}
var Wf = y("ZodFile", (e, t) => {
  (pl.init(e, t),
    Q.init(e, t),
    (e.min = (n, i) => e.check(Yt(n, i))),
    (e.max = (n, i) => e.check(Nr(n, i))),
    (e.mime = (n, i) => e.check(Vn(Array.isArray(n) ? n : [n], i))));
});
function n2(e) {
  return cc(Wf, e);
}
var Qf = y("ZodTransform", (e, t) => {
  (_l.init(e, t),
    Q.init(e, t),
    (e._zod.parse = (n, i) => {
      n.addIssue = (o) => {
        if (typeof o == "string") n.issues.push(P.issue(o, n.value, t));
        else {
          let a = o;
          (a.fatal && (a.continue = !1),
            a.code ?? (a.code = "custom"),
            a.input ?? (a.input = n.value),
            a.inst ?? (a.inst = e),
            a.continue ?? (a.continue = !0),
            n.issues.push(P.issue(a)));
        }
      };
      let r = t.transform(n.value, n);
      return r instanceof Promise
        ? r.then((o) => ((n.value = o), n))
        : ((n.value = r), n);
    }));
});
function Qc(e) {
  return new Qf({ type: "transform", transform: e });
}
var Jc = y("ZodOptional", (e, t) => {
  (fl.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Ho(e) {
  return new Jc({ type: "optional", innerType: e });
}
var Jf = y("ZodNullable", (e, t) => {
  (hl.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Zo(e) {
  return new Jf({ type: "nullable", innerType: e });
}
function i2(e) {
  return Ho(Zo(e));
}
var Kf = y("ZodDefault", (e, t) => {
  (gl.init(e, t),
    Q.init(e, t),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function Xf(e, t) {
  return new Kf({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : t;
    },
  });
}
var Yf = y("ZodPrefault", (e, t) => {
  (yl.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function eh(e, t) {
  return new Yf({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : t;
    },
  });
}
var Kc = y("ZodNonOptional", (e, t) => {
  (vl.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function th(e, t) {
  return new Kc({ type: "nonoptional", innerType: e, ...P.normalizeParams(t) });
}
var rh = y("ZodSuccess", (e, t) => {
  (bl.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function o2(e) {
  return new rh({ type: "success", innerType: e });
}
var nh = y("ZodCatch", (e, t) => {
  (wl.init(e, t),
    Q.init(e, t),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function ih(e, t) {
  return new nh({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t,
  });
}
var oh = y("ZodNaN", (e, t) => {
  (Sl.init(e, t), Q.init(e, t));
});
function a2(e) {
  return nc(oh, e);
}
var Xc = y("ZodPipe", (e, t) => {
  (Nn.init(e, t), Q.init(e, t), (e.in = t.in), (e.out = t.out));
});
function Go(e, t) {
  return new Xc({ type: "pipe", in: e, out: t });
}
var ah = y("ZodReadonly", (e, t) => {
  (xl.init(e, t), Q.init(e, t));
});
function sh(e) {
  return new ah({ type: "readonly", innerType: e });
}
var uh = y("ZodTemplateLiteral", (e, t) => {
  (Al.init(e, t), Q.init(e, t));
});
function s2(e, t) {
  return new uh({
    type: "template_literal",
    parts: e,
    ...P.normalizeParams(t),
  });
}
var lh = y("ZodLazy", (e, t) => {
  (El.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.getter()));
});
function ch(e) {
  return new lh({ type: "lazy", getter: e });
}
var dh = y("ZodPromise", (e, t) => {
  (Dl.init(e, t), Q.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function u2(e) {
  return new dh({ type: "promise", innerType: e });
}
var Yo = y("ZodCustom", (e, t) => {
  (Tl.init(e, t), Q.init(e, t));
});
function mh(e, t) {
  let n = new se({ check: "custom", ...P.normalizeParams(t) });
  return ((n._zod.check = e), n);
}
function l2(e, t) {
  return dc(Yo, e ?? (() => !0), t);
}
function ph(e, t = {}) {
  return mc(Yo, e, t);
}
function _h(e, t) {
  let n = mh(
    (i) => (
      (i.addIssue = (r) => {
        if (typeof r == "string")
          i.issues.push(P.issue(r, i.value, n._zod.def));
        else {
          let o = r;
          (o.fatal && (o.continue = !1),
            o.code ?? (o.code = "custom"),
            o.input ?? (o.input = i.value),
            o.inst ?? (o.inst = n),
            o.continue ?? (o.continue = !n._zod.def.abort),
            i.issues.push(P.issue(o)));
        }
      }),
      e(i.value, i)
    ),
    t,
  );
  return n;
}
function c2(e, t = { error: `Input not instance of ${e.name}` }) {
  let n = new Yo({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...P.normalizeParams(t),
  });
  return ((n._zod.bag.Class = e), n);
}
var d2 = (...e) => pc({ Pipe: Xc, Boolean: Xn, Unknown: Hc }, ...e);
function m2(e) {
  let t = ch(() => Xo([Ac(e), kf(), If(), Nf(), Zc(t), Bf(Ac(), t)]));
  return t;
}
function p2(e, t) {
  return Go(Qc(e), t);
}
var _2 = {
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
  f2 = Object.freeze({ status: "aborted" }),
  h2 = f2;
function g2(e) {
  ce({ customError: e });
}
function y2() {
  return ce().customError;
}
var Yc = {};
Ke(Yc, {
  bigint: () => S2,
  boolean: () => w2,
  date: () => x2,
  number: () => b2,
  string: () => v2,
});
function v2(e) {
  return Pl(Wo, e);
}
function b2(e) {
  return Ml(Kn, e);
}
function w2(e) {
  return ql(Xn, e);
}
function S2(e) {
  return Zl(Yn, e);
}
function x2(e) {
  return rc(Jo, e);
}
ce(_o());
ze();
Fe && E.config({ jitless: !0 });
var fh = [
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
  ea = [
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
  ed = [
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
var Lk = new Set(fh),
  A2 = E.enum(ea),
  D2 = E.enum(ed),
  hh = E.map(A2, E.string()),
  gh = E.map(D2, E.string()),
  Bk = new Set(ea);
var vh = E.templateLiteral(["ded_", E.string()]),
  T2 = E.templateLiteral(["media_hash_", E.number()]),
  yh = E.enum(["download", "download_as", "download_audio", "copy"]),
  k2 = E.enum(["popup", "sidebar"]),
  rd = E.string().brand("directorypath"),
  I2 = E.strictObject({
    downloaded_id: vh,
    media_hash: T2,
    path: E.string(),
    browser_download_id: E.number(),
    download_timestamp: E.number(),
    origin_url: E.nullable(E.url()),
    origin_favicon_url: E.nullable(E.url()),
    has_drm: E.boolean(),
    subdir: E.optional(rd),
  }),
  $2 = E.enum(["SUBSCRIPTION", "LIFETIME", "GOLDEN"]),
  nd = E.object({
    iat: E.optional(E.number()),
    user_id: E.number(),
    store: E.string().max(256),
    jti: E.string().max(512),
    valid_until: E.number(),
    exp: E.number(),
    developer: E.boolean().optional(),
    entitlement_type: $2.optional(),
  }),
  P2 = nd.extend({ raw: E.string() }),
  z2 = E.enum(["original", "user_language"]),
  N2 = E.enum(["none", "video", "image"]),
  O2 = E.enum(["system", "light", "dark"]),
  R2 = E.enum(["big", "medium", "small"]),
  C2 = E.strictObject({
    max_length: E.number(),
    template: E.string(),
    force_doc_title: E.optional(E.boolean()),
  }),
  M2 = E.strictObject({
    template: E.string(),
    url: E.string(),
    max_length: E.nullable(E.number()),
    selector: E.nullable(E.string()),
    subdir: E.optional(rd),
    force_doc_title: E.optional(E.boolean()),
    replace: E.optional(
      E.array(E.strictObject({ from: E.string(), to: E.string() })),
    ),
  }),
  td = E.strictObject({
    version: E.number(),
    default_action: yh,
    default_action_per_hostname: E.map(E.string(), yh),
    downloaded: E.map(vh, I2),
    jwt: E.nullable(P2),
    lsd: E.number(),
    dockmode: k2,
    download_directory: rd,
    youtube_throttle: E.boolean(),
    youtube_audio_strategy: z2,
    youtube_prefer_hls: E.boolean(),
    max_concurrent_downloads: E.number(),
    show_desktop_notifications: E.boolean(),
    show_desktop_notifications_private: E.boolean(),
    history_days: E.number(),
    show_transient_history: E.boolean(),
    ui_theme: O2,
    use_context_menu: E.boolean(),
    dont_ask_for_user_review: E.boolean(),
    successful_downloads_count: E.number(),
    prefered_quality: E.nullable(E.number()),
    prefered_av_muxer: E.enum(["mp4", "mkv"]),
    hide_nomedia_box: E.boolean(),
    popup_size: R2,
    smartnaming: E.strictObject({
      source: E.nullable(E.string()),
      compiled: E.strictObject({ default_: C2, rules: E.array(M2) }),
    }),
    preview_mode: N2,
    last_migration_request: E.number(),
    custom_strings: E.strictObject({ web: gh, addon: hh }),
  }),
  Zk = td.readonly();
function bh(e) {
  let t = od();
  if (e && typeof e == "object")
    for (let n of Object.keys(td.shape)) {
      let i = td.shape[n];
      if (n in e) {
        let r = e[n],
          o = i.safeParse(r);
        if (o.success) t[n] = o.data;
        else {
          for (let a of o.error.issues)
            (console.warn("Zod issue"),
              console.warn(a.path.join(".")),
              console.warn(a.message));
          (console.warn(o.error.issues),
            console.warn(o.error.type),
            console.warn(o.error.message),
            console.warn(
              `Failed to import past persitent state field: ${n}. Fallback to default. Value was:`,
              r,
            ));
        }
      }
    }
  return t;
}
var id = 1710169438e3;
function od() {
  return {
    version: 1,
    default_action_per_hostname: new Map(),
    downloaded: new Map(),
    jwt: null,
    lsd: id,
    default_action: "download",
    hide_nomedia_box: !0,
    dont_ask_for_user_review: !1,
    dockmode: "popup",
    download_directory: Vt,
    youtube_throttle: !0,
    youtube_audio_strategy: "original",
    youtube_prefer_hls: !0,
    max_concurrent_downloads: 6,
    show_desktop_notifications: !0,
    show_desktop_notifications_private: !1,
    history_days: 0,
    show_transient_history: !0,
    ui_theme: "system",
    use_context_menu: !0,
    prefered_quality: 1080,
    prefered_av_muxer: "mp4",
    popup_size: "medium",
    successful_downloads_count: 0,
    smartnaming: { source: null, compiled: dr() },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: { addon: new Map(), web: new Map() },
  };
}
var ta = "global_session_state",
  ra = "global_persistent_state",
  Sh = "session";
async function xh(e) {
  let t = ie(e);
  return er.storage[Sh].set({ [ta]: t });
}
async function Ah(e) {
  let t = ie(e);
  return er.storage.local.set({ [ra]: t });
}
async function Dh() {
  let e = await er.storage[Sh].get(ta);
  if (ta in e) {
    let t = e[ta];
    return Se(t);
  } else return wm();
}
async function Eh() {
  let e = await er.storage.local.get(ra);
  if (ra in e) {
    let n = e[ra];
    return bh(Se(n));
  }
  let t = od();
  {
    let n = await er.storage.local.get();
    (typeof n.concurrent_downloads_max == "number" &&
      (t.max_concurrent_downloads = n.concurrent_downloads_max),
      typeof n.show_success_notification == "boolean" &&
        (t.show_desktop_notifications = n.show_success_notification),
      typeof n.show_success_notification_for_icognito == "boolean" &&
        (t.show_desktop_notifications =
          n.show_success_notification_for_icognito),
      typeof n.show_context_menu == "boolean" &&
        (t.use_context_menu = n.show_context_menu),
      typeof n.use_sidebar == "boolean" && (t.dockmode = "sidebar"),
      typeof n.theme == "string" &&
        (n.theme == "light" || n.theme == "dark" || n.theme == "system") &&
        (t.ui_theme = n.theme),
      typeof n.record_download_history == "boolean" &&
        n.record_download_history == !0 &&
        typeof n.history_limit_in_days == "number" &&
        (t.history_days = n.history_limit_in_days),
      typeof n.default_action == "string" &&
        (n.default_action == "copy" && (t.default_action = "copy"),
        n.default_action == "download_audio" &&
          (t.default_action = "download_audio")),
      typeof n.never_show_successfull_dl_message == "boolean" &&
        (t.dont_ask_for_user_review = n.never_show_successfull_dl_message),
      (t.smartnaming.compiled = await Lm()),
      await er.storage.local.remove([
        "user_sidebar",
        "concurrent_downloads_max",
        "show_success_notification",
        "show_success_notification_for_icognito",
        "show_context_menu",
        "theme",
        "record_download_history",
        "history_limit_in_days",
        "default_action",
        "never_show_successfull_dl_message",
      ]));
  }
  return t;
}
async function Th(e) {
  ((globalThis._session_state = await Dh()),
    (globalThis._session_state_write_timeout = z),
    (globalThis._session_state_write_callback = e));
}
async function kh(e) {
  ((globalThis._persistent_state = await Eh()),
    (globalThis._persistent_state_write_timeout = z),
    (globalThis._persistent_state_write_callback = e));
}
function Ie(e) {
  let t = e(globalThis._session_state);
  return (
    globalThis._session_state_write_timeout.isNone() &&
      (globalThis._session_state_write_timeout = B(setTimeout(Ih, 500))),
    t
  );
}
function Ue(e) {
  let t = e(globalThis._session_state);
  return (Ih(), t);
}
function de() {
  return globalThis._session_state;
}
function Ih() {
  xh(de());
  try {
    globalThis._session_state_write_callback();
  } catch (e) {
    console.error(e);
  }
  globalThis._session_state_write_timeout.isSome() &&
    (clearTimeout(globalThis._session_state_write_timeout.value),
    (globalThis._session_state_write_timeout = z));
}
function pe(e) {
  let t = e(globalThis._persistent_state);
  return (
    globalThis._persistent_state_write_timeout.isNone() &&
      (globalThis._persistent_state_write_timeout = B(setTimeout($h, 500))),
    t
  );
}
function ve(e) {
  let t = e(globalThis._persistent_state);
  return ($h(), t);
}
function Z() {
  return globalThis._persistent_state;
}
function $h() {
  Ah(Z());
  try {
    globalThis._persistent_state_write_callback();
  } catch (e) {
    console.error(e);
  }
  globalThis._persistent_state_write_timeout.isSome() &&
    (clearTimeout(globalThis._persistent_state_write_timeout.value),
    (globalThis._persistent_state_write_timeout = z));
}
function sd() {
  Ct.default.sidebarAction.toggle();
}
async function j2(e, t) {
  if ((Ph(e), pe((n) => (n.dockmode = e)), !Fe))
    if (e == "popup")
      try {
        t.isSome()
          ? chrome.action.openPopup({ windowId: t.value })
          : chrome.action.openPopup();
      } catch {}
    else
      e == "sidebar" &&
        t.isSome() &&
        chrome.sidePanel?.open({ windowId: t.value });
}
function Ph(e) {
  Fe
    ? e == "sidebar"
      ? (Ct.default.action.onClicked.addListener(sd),
        Ct.default.action.setPopup({ popup: null }))
      : e == "popup"
        ? (Ct.default.action.onClicked.removeListener(sd),
          Ct.default.action.setPopup({ popup: "/content/popup.html" }))
        : e == "window" &&
          (Ct.default.action.onClicked.removeListener(sd),
          Ct.default.action.setPopup({ popup: null }))
    : chrome.sidePanel
      ? e == "sidebar"
        ? (chrome.sidePanel.setOptions({ enabled: !0 }),
          chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: !0 }),
          chrome.action.setPopup({ popup: "" }))
        : e == "popup" &&
          (chrome.sidePanel.setOptions({ enabled: !1 }),
          chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: !1 }),
          chrome.action.setPopup({
            popup: chrome.runtime.getURL("/content/popup.html"),
          }))
      : chrome.action.setPopup({
          popup: chrome.runtime.getURL("/content/popup.html"),
        });
}
async function zh() {
  (Ph(Z().dockmode),
    Er(async (e) => {
      if (e.name == "redock") {
        let t = de().current_win_tab.win_id;
        await j2(e.data.mode, t);
      }
    }));
}
var Nh = _e(Ae(), 1);
async function Oh(e, t) {
  return t.has_drm
    ? !0
    : ((
        await Nh.default.scripting.executeScript({
          target: { tabId: e },
          func: () => {
            let i = [...document.querySelectorAll("video")];
            for (let r of i) if (r.mediaKeys instanceof MediaKeys) return !0;
            return !1;
          },
        })
      )[0]?.result ?? !1);
}
ze();
function Rh(e, t) {
  if (e.current_win_tab.tab_id.isSome()) {
    let n = e.current_win_tab.tab_id.value,
      i = e.discovered.get(n);
    if (i && i.meta.isSome()) {
      let r = i.meta.value,
        o = i.media.values().next()?.value;
      if (o) {
        let a = r.default_action == "download_as",
          s = r.default_action == "download_audio",
          { basename: u, subdir: l } = mr(o, r),
          c,
          d = o.is_youtube && t.youtube_throttle;
        if (
          o.type == "m3u8_playlist" ||
          o.type == "youtube_format" ||
          o.type == "mpd_playlist"
        ) {
          let f = wi(o, t.prefered_quality);
          c = dt(o, s, a, t.prefered_av_muxer, u, l, f, d);
        } else c = dt(o, s, a, t.prefered_av_muxer, u, l, void 0, d);
        r.default_action == "copy"
          ? Fe
            ? navigator.clipboard.writeText(c.url.href)
            : browser.scripting.executeScript({
                target: { tabId: r.tab_id },
                func: (f) => navigator.clipboard.writeText(f),
                args: [c.url.href],
              })
          : mt({
              name: "do_download",
              data: { download_args: ie(c), meta: ie(r), media: ie(o) },
            });
      }
    }
  }
}
var ei = class {
  constructor(t, n, i) {
    this._running = 0;
    this._ytRunning = 0;
    this._ytDelay = 0;
    this._lastYtTaskTimestamp = 0;
    this._schedulePending = !1;
    this._queue = [];
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("capacity must be a positive finite number");
    if (n <= 0 || !Number.isFinite(n))
      throw new Error("youtube capacity must be a positive finite number");
    if (t < n)
      throw new Error("youtube capacity must be inferior or equal to capacity");
    ((this._ytDelay = i), (this._totalCapacity = t), (this._ytCapacity = n));
  }
  getStats() {
    return {
      capacity: this._totalCapacity,
      ytCapacity: this._ytCapacity,
      running: this._running,
      ytRunning: this._ytRunning,
      pending: this._queue.length,
    };
  }
  queueTask(t, n, i) {
    return new Promise((r, o) => {
      let a = { id: n, is_youtube: i, reject: o, resolve: r, task: t };
      (this._queue.push(a), this._schedule());
    });
  }
  cancelPendingTask(t) {
    let n = this._queue.findIndex((i) => i.id === t);
    if (n >= 0) {
      let [i] = this._queue.splice(n, 1);
      return (
        i?.resolve(
          U({ download_id: t, aborted_no_partial: !0, ending_reason: zi() }),
        ),
        !0
      );
    } else return !1;
  }
  setTotalCapacity(t) {
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("capacity must be a positive finite number");
    if (t < this._ytCapacity)
      throw new Error("capacity must be superior or equal to youtube capacity");
    ((this._totalCapacity = t), this._schedule());
  }
  setYoutubeCapacity(t) {
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("youtube capacity must be a positive finite number");
    if (t > this._totalCapacity)
      throw new Error(
        "youtube capacity must be lower or equal to the total capacity",
      );
    ((this._ytCapacity = t), this._schedule());
  }
  _schedule() {
    for (; this._running < this._totalCapacity; ) {
      let t,
        n = -1,
        i = Date.now() - this._lastYtTaskTimestamp,
        r = this._ytCapacity > 1,
        o = this._ytRunning < this._ytCapacity && (r || i > this._ytDelay);
      for (let [a, s] of this._queue.entries())
        if (!s.is_youtube || o) {
          ((t = s), (n = a));
          break;
        }
      if (!t || n < 0) {
        this._queue.some((a) => a.is_youtube) &&
          !this._schedulePending &&
          ((this._schedulePending = !0),
          setTimeout(() => {
            ((this._schedulePending = !1), this._schedule());
          }, 1e3));
        break;
      }
      (this._queue.splice(n, 1),
        this._running++,
        t.is_youtube && this._ytRunning++,
        t
          .task()
          .then((a) => {
            t.resolve(a);
          })
          .catch((a) => {
            t.reject(a);
          })
          .finally(() => {
            (this._running--,
              t.is_youtube &&
                ((this._lastYtTaskTimestamp = Date.now()), this._ytRunning--),
              this._schedule());
          }));
    }
  }
};
ia();
async function eg(e) {
  let t = bd(await e),
    [n, i, { QuickJSWASMModule: r }] = await Promise.all([
      t.importModuleLoader().then(bd),
      t.importFFI(),
      Promise.resolve()
        .then(() => (Yh(), Xh))
        .then(bd),
    ]),
    o = await n();
  o.type = "sync";
  let a = new i(o);
  return new r(o, a);
}
function bd(e) {
  return e && "default" in e && e.default
    ? e.default && "default" in e.default && e.default.default
      ? e.default.default
      : e.default
    : e;
}
var lx = {
    type: "sync",
    importFFI: () =>
      Promise.resolve()
        .then(() => (rg(), tg))
        .then((e) => e.QuickJSFFI),
    importModuleLoader: () =>
      Promise.resolve()
        .then(() => (ig(), ng))
        .then((e) => e.default),
  },
  ni = lx;
async function wd(e = ni) {
  return eg(e);
}
function og(e) {
  return e &&
    typeof e == "object" &&
    "a" in e &&
    "b" in e &&
    "c" in e &&
    "d" in e
    ? typeof e.a == "number" &&
        typeof e.b == "number" &&
        typeof e.c == "number" &&
        typeof e.d == "number"
    : !1;
}
function Sd(e) {
  let t = e.split(".").map((n) => parseInt(n));
  return t.length != 4
    ? z
    : t.some(isNaN)
      ? z
      : B({ a: t[0], b: t[1], c: t[2], d: t[3] });
}
function ag(e, t) {
  let n = (i) =>
    i.a * Math.pow(10, 15) +
    i.b * Math.pow(10, 10) +
    i.c * Math.pow(10, 5) +
    i.d;
  return n(e) > n(t);
}
ze();
var sg = _e(Ae(), 1);
ze();
async function ug() {
  if (tm) return !1;
  let e = await sg.default.runtime.getPlatformInfo();
  return e.os == "linux" || e.os == "openbsd";
}
ze();
ze();
var jr = new TextEncoder(),
  St = new TextDecoder(),
  c1 = 2 ** 32;
function lg(...e) {
  let t = e.reduce((r, { length: o }) => r + o, 0),
    n = new Uint8Array(t),
    i = 0;
  for (let r of e) (n.set(r, i), (i += r.length));
  return n;
}
function cg(e) {
  if (Uint8Array.fromBase64) return Uint8Array.fromBase64(e);
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
  return n;
}
function Fr(e) {
  if (Uint8Array.fromBase64)
    return Uint8Array.fromBase64(typeof e == "string" ? e : St.decode(e), {
      alphabet: "base64url",
    });
  let t = e;
  (t instanceof Uint8Array && (t = St.decode(t)),
    (t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "")));
  try {
    return cg(t);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}
var xt = class extends Error {
    static code = "ERR_JOSE_GENERIC";
    code = "ERR_JOSE_GENERIC";
    constructor(t, n) {
      (super(t, n),
        (this.name = this.constructor.name),
        Error.captureStackTrace?.(this, this.constructor));
    }
  },
  He = class extends xt {
    static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    claim;
    reason;
    payload;
    constructor(t, n, i = "unspecified", r = "unspecified") {
      (super(t, { cause: { claim: i, reason: r, payload: n } }),
        (this.claim = i),
        (this.reason = r),
        (this.payload = n));
    }
  },
  ii = class extends xt {
    static code = "ERR_JWT_EXPIRED";
    code = "ERR_JWT_EXPIRED";
    claim;
    reason;
    payload;
    constructor(t, n, i = "unspecified", r = "unspecified") {
      (super(t, { cause: { claim: i, reason: r, payload: n } }),
        (this.claim = i),
        (this.reason = r),
        (this.payload = n));
    }
  },
  sa = class extends xt {
    static code = "ERR_JOSE_ALG_NOT_ALLOWED";
    code = "ERR_JOSE_ALG_NOT_ALLOWED";
  },
  Ze = class extends xt {
    static code = "ERR_JOSE_NOT_SUPPORTED";
    code = "ERR_JOSE_NOT_SUPPORTED";
  };
var me = class extends xt {
    static code = "ERR_JWS_INVALID";
    code = "ERR_JWS_INVALID";
  },
  Lr = class extends xt {
    static code = "ERR_JWT_INVALID";
    code = "ERR_JWT_INVALID";
  };
var ua = class extends xt {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(t = "signature verification failed", n) {
    super(t, n);
  }
};
function At(e, t = "algorithm.name") {
  return new TypeError(
    `CryptoKey does not support this operation, its ${t} must be ${e}`,
  );
}
function oi(e, t) {
  return e.name === t;
}
function xd(e) {
  return parseInt(e.name.slice(4), 10);
}
function px(e) {
  switch (e) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function _x(e, t) {
  if (t && !e.usages.includes(t))
    throw new TypeError(
      `CryptoKey does not support this operation, its usages must include ${t}.`,
    );
}
function dg(e, t, n) {
  switch (t) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!oi(e.algorithm, "HMAC")) throw At("HMAC");
      let i = parseInt(t.slice(2), 10);
      if (xd(e.algorithm.hash) !== i) throw At(`SHA-${i}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!oi(e.algorithm, "RSASSA-PKCS1-v1_5")) throw At("RSASSA-PKCS1-v1_5");
      let i = parseInt(t.slice(2), 10);
      if (xd(e.algorithm.hash) !== i) throw At(`SHA-${i}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!oi(e.algorithm, "RSA-PSS")) throw At("RSA-PSS");
      let i = parseInt(t.slice(2), 10);
      if (xd(e.algorithm.hash) !== i) throw At(`SHA-${i}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA": {
      if (!oi(e.algorithm, "Ed25519")) throw At("Ed25519");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!oi(e.algorithm, "ECDSA")) throw At("ECDSA");
      let i = px(t);
      if (e.algorithm.namedCurve !== i) throw At(i, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  _x(e, n);
}
function mg(e, t, ...n) {
  if (((n = n.filter(Boolean)), n.length > 2)) {
    let i = n.pop();
    e += `one of type ${n.join(", ")}, or ${i}.`;
  } else
    n.length === 2
      ? (e += `one of type ${n[0]} or ${n[1]}.`)
      : (e += `of type ${n[0]}.`);
  return (
    t == null
      ? (e += ` Received ${t}`)
      : typeof t == "function" && t.name
        ? (e += ` Received function ${t.name}`)
        : typeof t == "object" &&
          t != null &&
          t.constructor?.name &&
          (e += ` Received an instance of ${t.constructor.name}`),
    e
  );
}
var pg = (e, ...t) => mg("Key must be ", e, ...t);
function Ad(e, t, ...n) {
  return mg(`Key for the ${e} algorithm must be `, t, ...n);
}
function Dd(e) {
  return e?.[Symbol.toStringTag] === "CryptoKey";
}
function Ed(e) {
  return e?.[Symbol.toStringTag] === "KeyObject";
}
var Td = (e) => Dd(e) || Ed(e);
var _g = (...e) => {
  let t = e.filter(Boolean);
  if (t.length === 0 || t.length === 1) return !0;
  let n;
  for (let i of t) {
    let r = Object.keys(i);
    if (!n || n.size === 0) {
      n = new Set(r);
      continue;
    }
    for (let o of r) {
      if (n.has(o)) return !1;
      n.add(o);
    }
  }
  return !0;
};
function fx(e) {
  return typeof e == "object" && e !== null;
}
var ir = (e) => {
  if (!fx(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
};
var fg = (e, t) => {
  if (e.startsWith("RS") || e.startsWith("PS")) {
    let { modulusLength: n } = t.algorithm;
    if (typeof n != "number" || n < 2048)
      throw new TypeError(
        `${e} requires key modulusLength to be 2048 bits or larger`,
      );
  }
};
var la = (e, t, n = 0) => {
    n === 0 && (t.unshift(t.length), t.unshift(6));
    let i = e.indexOf(t[0], n);
    if (i === -1) return !1;
    let r = e.subarray(i, i + t.length);
    return r.length !== t.length
      ? !1
      : r.every((o, a) => o === t[a]) || la(e, t, i + 1);
  },
  hx = (e) => {
    switch (!0) {
      case la(e, [42, 134, 72, 206, 61, 3, 1, 7]):
        return "P-256";
      case la(e, [43, 129, 4, 0, 34]):
        return "P-384";
      case la(e, [43, 129, 4, 0, 35]):
        return "P-521";
      default:
        return;
    }
  },
  gx = async (e, t, n, i, r) => {
    let o,
      a,
      s = new Uint8Array(
        atob(n.replace(e, ""))
          .split("")
          .map((l) => l.charCodeAt(0)),
      ),
      u = t === "spki";
    switch (i) {
      case "PS256":
      case "PS384":
      case "PS512":
        ((o = { name: "RSA-PSS", hash: `SHA-${i.slice(-3)}` }),
          (a = u ? ["verify"] : ["sign"]));
        break;
      case "RS256":
      case "RS384":
      case "RS512":
        ((o = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${i.slice(-3)}` }),
          (a = u ? ["verify"] : ["sign"]));
        break;
      case "RSA-OAEP":
      case "RSA-OAEP-256":
      case "RSA-OAEP-384":
      case "RSA-OAEP-512":
        ((o = {
          name: "RSA-OAEP",
          hash: `SHA-${parseInt(i.slice(-3), 10) || 1}`,
        }),
          (a = u ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"]));
        break;
      case "ES256":
        ((o = { name: "ECDSA", namedCurve: "P-256" }),
          (a = u ? ["verify"] : ["sign"]));
        break;
      case "ES384":
        ((o = { name: "ECDSA", namedCurve: "P-384" }),
          (a = u ? ["verify"] : ["sign"]));
        break;
      case "ES512":
        ((o = { name: "ECDSA", namedCurve: "P-521" }),
          (a = u ? ["verify"] : ["sign"]));
        break;
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW": {
        let l = hx(s);
        ((o = l?.startsWith("P-")
          ? { name: "ECDH", namedCurve: l }
          : { name: "X25519" }),
          (a = u ? [] : ["deriveBits"]));
        break;
      }
      case "Ed25519":
      case "EdDSA":
        ((o = { name: "Ed25519" }), (a = u ? ["verify"] : ["sign"]));
        break;
      default:
        throw new Ze('Invalid or unsupported "alg" (Algorithm) value');
    }
    return crypto.subtle.importKey(t, s, o, r?.extractable ?? !!u, a);
  };
var hg = (e, t, n) =>
  gx(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, n);
function yx(e) {
  let t, n;
  switch (e.kty) {
    case "RSA": {
      switch (e.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          ((t = { name: "RSA-PSS", hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          ((t = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          ((t = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`,
          }),
            (n = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"]));
          break;
        default:
          throw new Ze(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value',
          );
      }
      break;
    }
    case "EC": {
      switch (e.alg) {
        case "ES256":
          ((t = { name: "ECDSA", namedCurve: "P-256" }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "ES384":
          ((t = { name: "ECDSA", namedCurve: "P-384" }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "ES512":
          ((t = { name: "ECDSA", namedCurve: "P-521" }),
            (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          ((t = { name: "ECDH", namedCurve: e.crv }),
            (n = e.d ? ["deriveBits"] : []));
          break;
        default:
          throw new Ze(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value',
          );
      }
      break;
    }
    case "OKP": {
      switch (e.alg) {
        case "Ed25519":
        case "EdDSA":
          ((t = { name: "Ed25519" }), (n = e.d ? ["sign"] : ["verify"]));
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          ((t = { name: e.crv }), (n = e.d ? ["deriveBits"] : []));
          break;
        default:
          throw new Ze(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value',
          );
      }
      break;
    }
    default:
      throw new Ze(
        'Invalid or unsupported JWK "kty" (Key Type) Parameter value',
      );
  }
  return { algorithm: t, keyUsages: n };
}
var gg = async (e) => {
  if (!e.alg)
    throw new TypeError(
      '"alg" argument is required when "jwk.alg" is not present',
    );
  let { algorithm: t, keyUsages: n } = yx(e),
    i = { ...e };
  return (
    delete i.alg,
    delete i.use,
    crypto.subtle.importKey("jwk", i, t, e.ext ?? !e.d, e.key_ops ?? n)
  );
};
async function kd(e, t, n) {
  if (typeof e != "string" || e.indexOf("-----BEGIN PUBLIC KEY-----") !== 0)
    throw new TypeError('"spki" must be SPKI formatted string');
  return hg(e, t, n);
}
var yg = (e, t, n, i, r) => {
  if (r.crit !== void 0 && i?.crit === void 0)
    throw new e(
      '"crit" (Critical) Header Parameter MUST be integrity protected',
    );
  if (!i || i.crit === void 0) return new Set();
  if (
    !Array.isArray(i.crit) ||
    i.crit.length === 0 ||
    i.crit.some((a) => typeof a != "string" || a.length === 0)
  )
    throw new e(
      '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present',
    );
  let o;
  n !== void 0
    ? (o = new Map([...Object.entries(n), ...t.entries()]))
    : (o = t);
  for (let a of i.crit) {
    if (!o.has(a))
      throw new Ze(`Extension Header Parameter "${a}" is not recognized`);
    if (r[a] === void 0)
      throw new e(`Extension Header Parameter "${a}" is missing`);
    if (o.get(a) && i[a] === void 0)
      throw new e(
        `Extension Header Parameter "${a}" MUST be integrity protected`,
      );
  }
  return new Set(i.crit);
};
var vg = (e, t) => {
  if (
    t !== void 0 &&
    (!Array.isArray(t) || t.some((n) => typeof n != "string"))
  )
    throw new TypeError(`"${e}" option must be an array of strings`);
  if (t) return new Set(t);
};
function ai(e) {
  return ir(e) && typeof e.kty == "string";
}
function bg(e) {
  return e.kty !== "oct" && typeof e.d == "string";
}
function wg(e) {
  return e.kty !== "oct" && typeof e.d > "u";
}
function Sg(e) {
  return e.kty === "oct" && typeof e.k == "string";
}
var Br,
  xg = async (e, t, n, i = !1) => {
    Br ||= new WeakMap();
    let r = Br.get(e);
    if (r?.[n]) return r[n];
    let o = await gg({ ...t, alg: n });
    return (i && Object.freeze(e), r ? (r[n] = o) : Br.set(e, { [n]: o }), o);
  },
  bx = (e, t) => {
    Br ||= new WeakMap();
    let n = Br.get(e);
    if (n?.[t]) return n[t];
    let i = e.type === "public",
      r = !!i,
      o;
    if (e.asymmetricKeyType === "x25519") {
      switch (t) {
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          break;
        default:
          throw new TypeError(
            "given KeyObject instance cannot be used for this algorithm",
          );
      }
      o = e.toCryptoKey(e.asymmetricKeyType, r, i ? [] : ["deriveBits"]);
    }
    if (e.asymmetricKeyType === "ed25519") {
      if (t !== "EdDSA" && t !== "Ed25519")
        throw new TypeError(
          "given KeyObject instance cannot be used for this algorithm",
        );
      o = e.toCryptoKey(e.asymmetricKeyType, r, [i ? "verify" : "sign"]);
    }
    if (e.asymmetricKeyType === "rsa") {
      let a;
      switch (t) {
        case "RSA-OAEP":
          a = "SHA-1";
          break;
        case "RS256":
        case "PS256":
        case "RSA-OAEP-256":
          a = "SHA-256";
          break;
        case "RS384":
        case "PS384":
        case "RSA-OAEP-384":
          a = "SHA-384";
          break;
        case "RS512":
        case "PS512":
        case "RSA-OAEP-512":
          a = "SHA-512";
          break;
        default:
          throw new TypeError(
            "given KeyObject instance cannot be used for this algorithm",
          );
      }
      if (t.startsWith("RSA-OAEP"))
        return e.toCryptoKey(
          { name: "RSA-OAEP", hash: a },
          r,
          i ? ["encrypt"] : ["decrypt"],
        );
      o = e.toCryptoKey(
        { name: t.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5", hash: a },
        r,
        [i ? "verify" : "sign"],
      );
    }
    if (e.asymmetricKeyType === "ec") {
      let s = new Map([
        ["prime256v1", "P-256"],
        ["secp384r1", "P-384"],
        ["secp521r1", "P-521"],
      ]).get(e.asymmetricKeyDetails?.namedCurve);
      if (!s)
        throw new TypeError(
          "given KeyObject instance cannot be used for this algorithm",
        );
      (t === "ES256" &&
        s === "P-256" &&
        (o = e.toCryptoKey({ name: "ECDSA", namedCurve: s }, r, [
          i ? "verify" : "sign",
        ])),
        t === "ES384" &&
          s === "P-384" &&
          (o = e.toCryptoKey({ name: "ECDSA", namedCurve: s }, r, [
            i ? "verify" : "sign",
          ])),
        t === "ES512" &&
          s === "P-521" &&
          (o = e.toCryptoKey({ name: "ECDSA", namedCurve: s }, r, [
            i ? "verify" : "sign",
          ])),
        t.startsWith("ECDH-ES") &&
          (o = e.toCryptoKey(
            { name: "ECDH", namedCurve: s },
            r,
            i ? [] : ["deriveBits"],
          )));
    }
    if (!o)
      throw new TypeError(
        "given KeyObject instance cannot be used for this algorithm",
      );
    return (n ? (n[t] = o) : Br.set(e, { [t]: o }), o);
  },
  Ag = async (e, t) => {
    if (e instanceof Uint8Array || Dd(e)) return e;
    if (Ed(e)) {
      if (e.type === "secret") return e.export();
      if ("toCryptoKey" in e && typeof e.toCryptoKey == "function")
        try {
          return bx(e, t);
        } catch (i) {
          if (i instanceof TypeError) throw i;
        }
      let n = e.export({ format: "jwk" });
      return xg(e, n, t);
    }
    if (ai(e)) return e.k ? Fr(e.k) : xg(e, e, t, !0);
    throw new Error("unreachable");
  };
var Vr = (e) => e?.[Symbol.toStringTag],
  Id = (e, t, n) => {
    if (t.use !== void 0) {
      let i;
      switch (n) {
        case "sign":
        case "verify":
          i = "sig";
          break;
        case "encrypt":
        case "decrypt":
          i = "enc";
          break;
      }
      if (t.use !== i)
        throw new TypeError(
          `Invalid key for this operation, its "use" must be "${i}" when present`,
        );
    }
    if (t.alg !== void 0 && t.alg !== e)
      throw new TypeError(
        `Invalid key for this operation, its "alg" must be "${e}" when present`,
      );
    if (Array.isArray(t.key_ops)) {
      let i;
      switch (!0) {
        case n === "sign" || n === "verify":
        case e === "dir":
        case e.includes("CBC-HS"):
          i = n;
          break;
        case e.startsWith("PBES2"):
          i = "deriveBits";
          break;
        case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e):
          !e.includes("GCM") && e.endsWith("KW")
            ? (i = n === "encrypt" ? "wrapKey" : "unwrapKey")
            : (i = n);
          break;
        case n === "encrypt" && e.startsWith("RSA"):
          i = "wrapKey";
          break;
        case n === "decrypt":
          i = e.startsWith("RSA") ? "unwrapKey" : "deriveBits";
          break;
      }
      if (i && t.key_ops?.includes?.(i) === !1)
        throw new TypeError(
          `Invalid key for this operation, its "key_ops" must include "${i}" when present`,
        );
    }
    return !0;
  },
  wx = (e, t, n) => {
    if (!(t instanceof Uint8Array)) {
      if (ai(t)) {
        if (Sg(t) && Id(e, t, n)) return;
        throw new TypeError(
          'JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present',
        );
      }
      if (!Td(t))
        throw new TypeError(
          Ad(e, t, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"),
        );
      if (t.type !== "secret")
        throw new TypeError(
          `${Vr(t)} instances for symmetric algorithms must be of type "secret"`,
        );
    }
  },
  Sx = (e, t, n) => {
    if (ai(t))
      switch (n) {
        case "decrypt":
        case "sign":
          if (bg(t) && Id(e, t, n)) return;
          throw new TypeError(
            "JSON Web Key for this operation be a private JWK",
          );
        case "encrypt":
        case "verify":
          if (wg(t) && Id(e, t, n)) return;
          throw new TypeError(
            "JSON Web Key for this operation be a public JWK",
          );
      }
    if (!Td(t))
      throw new TypeError(Ad(e, t, "CryptoKey", "KeyObject", "JSON Web Key"));
    if (t.type === "secret")
      throw new TypeError(
        `${Vr(t)} instances for asymmetric algorithms must not be of type "secret"`,
      );
    if (t.type === "public")
      switch (n) {
        case "sign":
          throw new TypeError(
            `${Vr(t)} instances for asymmetric algorithm signing must be of type "private"`,
          );
        case "decrypt":
          throw new TypeError(
            `${Vr(t)} instances for asymmetric algorithm decryption must be of type "private"`,
          );
        default:
          break;
      }
    if (t.type === "private")
      switch (n) {
        case "verify":
          throw new TypeError(
            `${Vr(t)} instances for asymmetric algorithm verifying must be of type "public"`,
          );
        case "encrypt":
          throw new TypeError(
            `${Vr(t)} instances for asymmetric algorithm encryption must be of type "public"`,
          );
        default:
          break;
      }
  },
  Dg = (e, t, n) => {
    e.startsWith("HS") ||
    e === "dir" ||
    e.startsWith("PBES2") ||
    /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(e) ||
    /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(e)
      ? wx(e, t, n)
      : Sx(e, t, n);
  };
var Eg = (e, t) => {
  let n = `SHA-${e.slice(-3)}`;
  switch (e) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash: n, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return {
        hash: n,
        name: "RSA-PSS",
        saltLength: parseInt(e.slice(-3), 10) >> 3,
      };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash: n, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash: n, name: "ECDSA", namedCurve: t.namedCurve };
    case "Ed25519":
    case "EdDSA":
      return { name: "Ed25519" };
    default:
      throw new Ze(
        `alg ${e} is not supported either by JOSE or your javascript runtime`,
      );
  }
};
var Tg = async (e, t, n) => {
  if (t instanceof Uint8Array) {
    if (!e.startsWith("HS"))
      throw new TypeError(pg(t, "CryptoKey", "KeyObject", "JSON Web Key"));
    return crypto.subtle.importKey(
      "raw",
      t,
      { hash: `SHA-${e.slice(-3)}`, name: "HMAC" },
      !1,
      [n],
    );
  }
  return (dg(t, e, n), t);
};
var kg = async (e, t, n, i) => {
  let r = await Tg(e, t, "verify");
  fg(e, r);
  let o = Eg(e, r.algorithm);
  try {
    return await crypto.subtle.verify(o, r, n, i);
  } catch {
    return !1;
  }
};
async function Ig(e, t, n) {
  if (!ir(e)) throw new me("Flattened JWS must be an object");
  if (e.protected === void 0 && e.header === void 0)
    throw new me(
      'Flattened JWS must have either of the "protected" or "header" members',
    );
  if (e.protected !== void 0 && typeof e.protected != "string")
    throw new me("JWS Protected Header incorrect type");
  if (e.payload === void 0) throw new me("JWS Payload missing");
  if (typeof e.signature != "string")
    throw new me("JWS Signature missing or incorrect type");
  if (e.header !== void 0 && !ir(e.header))
    throw new me("JWS Unprotected Header incorrect type");
  let i = {};
  if (e.protected)
    try {
      let A = Fr(e.protected);
      i = JSON.parse(St.decode(A));
    } catch {
      throw new me("JWS Protected Header is invalid");
    }
  if (!_g(i, e.header))
    throw new me(
      "JWS Protected and JWS Unprotected Header Parameter names must be disjoint",
    );
  let r = { ...i, ...e.header },
    o = yg(me, new Map([["b64", !0]]), n?.crit, i, r),
    a = !0;
  if (o.has("b64") && ((a = i.b64), typeof a != "boolean"))
    throw new me(
      'The "b64" (base64url-encode payload) Header Parameter must be a boolean',
    );
  let { alg: s } = r;
  if (typeof s != "string" || !s)
    throw new me('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  let u = n && vg("algorithms", n.algorithms);
  if (u && !u.has(s))
    throw new sa('"alg" (Algorithm) Header Parameter value not allowed');
  if (a) {
    if (typeof e.payload != "string")
      throw new me("JWS Payload must be a string");
  } else if (typeof e.payload != "string" && !(e.payload instanceof Uint8Array))
    throw new me("JWS Payload must be a string or an Uint8Array instance");
  let l = !1;
  (typeof t == "function" && ((t = await t(i, e)), (l = !0)),
    Dg(s, t, "verify"));
  let c = lg(
      jr.encode(e.protected ?? ""),
      jr.encode("."),
      typeof e.payload == "string" ? jr.encode(e.payload) : e.payload,
    ),
    d;
  try {
    d = Fr(e.signature);
  } catch {
    throw new me("Failed to base64url decode the signature");
  }
  let f = await Ag(t, s);
  if (!(await kg(s, f, d, c))) throw new ua();
  let g;
  if (a)
    try {
      g = Fr(e.payload);
    } catch {
      throw new me("Failed to base64url decode the payload");
    }
  else
    typeof e.payload == "string" ? (g = jr.encode(e.payload)) : (g = e.payload);
  let m = { payload: g };
  return (
    e.protected !== void 0 && (m.protectedHeader = i),
    e.header !== void 0 && (m.unprotectedHeader = e.header),
    l ? { ...m, key: f } : m
  );
}
async function $g(e, t, n) {
  if ((e instanceof Uint8Array && (e = St.decode(e)), typeof e != "string"))
    throw new me("Compact JWS must be a string or Uint8Array");
  let { 0: i, 1: r, 2: o, length: a } = e.split(".");
  if (a !== 3) throw new me("Invalid Compact JWS");
  let s = await Ig({ payload: r, protected: i, signature: o }, t, n),
    u = { payload: s.payload, protectedHeader: s.protectedHeader };
  return typeof t == "function" ? { ...u, key: s.key } : u;
}
var Pg = (e) => Math.floor(e.getTime() / 1e3);
var xx =
    /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,
  $d = (e) => {
    let t = xx.exec(e);
    if (!t || (t[4] && t[1])) throw new TypeError("Invalid time period format");
    let n = parseFloat(t[2]),
      i = t[3].toLowerCase(),
      r;
    switch (i) {
      case "sec":
      case "secs":
      case "second":
      case "seconds":
      case "s":
        r = Math.round(n);
        break;
      case "minute":
      case "minutes":
      case "min":
      case "mins":
      case "m":
        r = Math.round(n * 60);
        break;
      case "hour":
      case "hours":
      case "hr":
      case "hrs":
      case "h":
        r = Math.round(n * 3600);
        break;
      case "day":
      case "days":
      case "d":
        r = Math.round(n * 86400);
        break;
      case "week":
      case "weeks":
      case "w":
        r = Math.round(n * 604800);
        break;
      default:
        r = Math.round(n * 31557600);
        break;
    }
    return t[1] === "-" || t[4] === "ago" ? -r : r;
  };
var zg = (e) => e.toLowerCase().replace(/^application\//, ""),
  Ax = (e, t) =>
    typeof e == "string"
      ? t.includes(e)
      : Array.isArray(e)
        ? t.some(Set.prototype.has.bind(new Set(e)))
        : !1;
function Ng(e, t, n = {}) {
  let i;
  try {
    i = JSON.parse(St.decode(t));
  } catch {}
  if (!ir(i)) throw new Lr("JWT Claims Set must be a top-level JSON object");
  let { typ: r } = n;
  if (r && (typeof e.typ != "string" || zg(e.typ) !== zg(r)))
    throw new He('unexpected "typ" JWT header value', i, "typ", "check_failed");
  let {
      requiredClaims: o = [],
      issuer: a,
      subject: s,
      audience: u,
      maxTokenAge: l,
    } = n,
    c = [...o];
  (l !== void 0 && c.push("iat"),
    u !== void 0 && c.push("aud"),
    s !== void 0 && c.push("sub"),
    a !== void 0 && c.push("iss"));
  for (let g of new Set(c.reverse()))
    if (!(g in i))
      throw new He(`missing required "${g}" claim`, i, g, "missing");
  if (a && !(Array.isArray(a) ? a : [a]).includes(i.iss))
    throw new He('unexpected "iss" claim value', i, "iss", "check_failed");
  if (s && i.sub !== s)
    throw new He('unexpected "sub" claim value', i, "sub", "check_failed");
  if (u && !Ax(i.aud, typeof u == "string" ? [u] : u))
    throw new He('unexpected "aud" claim value', i, "aud", "check_failed");
  let d;
  switch (typeof n.clockTolerance) {
    case "string":
      d = $d(n.clockTolerance);
      break;
    case "number":
      d = n.clockTolerance;
      break;
    case "undefined":
      d = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  let { currentDate: f } = n,
    _ = Pg(f || new Date());
  if ((i.iat !== void 0 || l) && typeof i.iat != "number")
    throw new He('"iat" claim must be a number', i, "iat", "invalid");
  if (i.nbf !== void 0) {
    if (typeof i.nbf != "number")
      throw new He('"nbf" claim must be a number', i, "nbf", "invalid");
    if (i.nbf > _ + d)
      throw new He(
        '"nbf" claim timestamp check failed',
        i,
        "nbf",
        "check_failed",
      );
  }
  if (i.exp !== void 0) {
    if (typeof i.exp != "number")
      throw new He('"exp" claim must be a number', i, "exp", "invalid");
    if (i.exp <= _ - d)
      throw new ii(
        '"exp" claim timestamp check failed',
        i,
        "exp",
        "check_failed",
      );
  }
  if (l) {
    let g = _ - i.iat,
      m = typeof l == "number" ? l : $d(l);
    if (g - d > m)
      throw new ii(
        '"iat" claim timestamp check failed (too far in the past)',
        i,
        "iat",
        "check_failed",
      );
    if (g < 0 - d)
      throw new He(
        '"iat" claim timestamp check failed (it should be in the past)',
        i,
        "iat",
        "check_failed",
      );
  }
  return i;
}
async function Pd(e, t, n) {
  let i = await $g(e, t, n);
  if (i.protectedHeader.crit?.includes("b64") && i.protectedHeader.b64 === !1)
    throw new Lr("JWTs MUST NOT use unencoded payload");
  let o = {
    payload: Ng(i.protectedHeader, i.payload, n),
    protectedHeader: i.protectedHeader,
  };
  return typeof t == "function" ? { ...o, key: i.key } : o;
}
var Og = 3,
  Ex = [1e3, 3e3, 5e3],
  Tx = 14400 * 60 * 1e3,
  kx = 4320 * 60 * 1e3,
  Nd = Qe.toUpperCase();
async function Cg(e) {
  try {
    let t = await Rd(Sa, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: e, store: Nd }),
      signal: AbortSignal.timeout(15e3),
    });
    return Ug(t);
  } catch (t) {
    return R(`Migration failed. Network error: ${t}`);
  }
}
async function Mg(e) {
  if (!e || !e.value)
    return R(
      "Activation failed. No token, v9 key, or checkout session id present.",
    );
  try {
    let t = e.method == "key" ? Sa : am,
      n = await Rd(t, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [e.method]: e.value, store: Nd }),
        signal: AbortSignal.timeout(15e3),
      });
    return Ug(n).then((i) =>
      i.isErr() ? i : i.value == "valid" ? U.EMPTY : R("Not a valid license"),
    );
  } catch (t) {
    return R(`Activation failed: ${t}.`);
  }
}
async function Ug(e) {
  try {
    if (e.isErr())
      return e.error.status && e.error.status == 403
        ? U("not_valid")
        : R(e.error.message);
    let t = e.value;
    if (!t.ok) {
      let o = `Received status ${t.status} from activation API.`,
        a = await t.json();
      return (a.message && (o += " " + a.message), R(o));
    }
    let n = await t.json();
    if (!n.jwt)
      return R(
        "Activation failed for an unknown reason (No JWT in activation response).",
      );
    let i = await Od(n.jwt);
    if (!i.valid)
      return R("Activation failed for an unknown reason (not valid).");
    if (!i.jwt || !i.jwt.raw)
      return R("Activation failed for an unknown reason (not jwt).");
    let r = i.jwt;
    return (pe((o) => (o.jwt = r)), U("valid"));
  } catch (t) {
    return R(`Activation failed: ${t}.`);
  }
}
async function jg(e) {
  if (_i) return !0;
  if (!e) return !1;
  let t = await Od(e);
  if (!t.valid && t.can_refresh && t.jwt) return (await Rg(t.jwt)).valid;
  if (!t.valid || !t.jwt) return !1;
  let n = t.jwt,
    i = new Date(),
    r = new Date(n.exp * 1e3),
    o = new Date(n.valid_until * 1e3),
    a = Math.abs(o.getTime() - i.getTime()),
    s = Math.abs(r.getTime() - i.getTime());
  return ((a <= kx || s <= Tx) && (await Rg(n)), !0);
}
function Ix(e) {
  let t = new Date();
  return new Date(e.valid_until * 1e3) > t;
}
function zd(e) {
  let t = new Date();
  return new Date(e.exp * 1e3) > t;
}
async function Od(e) {
  try {
    let t = await kd(im(), "ES256"),
      n = (await Pd(e, t)).payload,
      i = nd.safeParse(n);
    if (!i.success)
      return (
        console.error(`Error validating JWT: ${i.error}`),
        { valid: !1, can_refresh: !1 }
      );
    let r = i.data,
      o = Ix(r),
      a = r.store === Nd || r.store === "ALL",
      s = o && a,
      u = zd(r);
    return { jwt: { ...i.data, raw: e }, valid: s, can_refresh: u };
  } catch (t) {
    return (
      console.error(`Error validating jwt: ${t}`),
      console.error(`${e}`),
      { valid: !1, can_refresh: !1 }
    );
  }
}
async function Rg(e) {
  try {
    let t = await Rd(om, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jwt: e.raw }),
      signal: AbortSignal.timeout(15e3),
    });
    if (t.isErr()) return { valid: !1, can_refresh: zd(e) };
    let i = await t.value.json(),
      r = await Od(i.jwt),
      o = r.jwt;
    return (r.valid && o && pe((a) => (a.jwt = o)), r);
  } catch (t) {
    return (
      console.error("Refresh request failed:", t),
      { valid: !1, can_refresh: zd(e) }
    );
  }
}
async function Rd(e, t) {
  let n = `Unknown error fetching ${e}`;
  for (let i = 0; i < Og + 1; ++i) {
    try {
      let r = await fetch(e, t);
      if (r.ok) return U(r);
      if (r.status < 500) return R({ status: r.status, message: r.statusText });
      n = `Request to ${e} failed with code: ${r.status}`;
    } catch (r) {
      r instanceof DOMException && r.name === "AbortError"
        ? (n = `Request to ${e} timed out`)
        : (n = `Request to ${e} failed: ${r}`);
    }
    (console.error(n),
      i < Og && (await new Promise((r) => setTimeout(r, Ex[i]))));
  }
  return R({ message: n });
}
var it = _e(Ae(), 1);
var Md = 12;
function Cd(e) {
  return new Promise((t) => it.default.contextMenus.create(e, t));
}
async function Fg() {
  let e = it.default.runtime.getManifest();
  (await it.default.contextMenus.removeAll(),
    await Cd({ contexts: ["all"], id: "vdh-top", title: e.name }),
    await Cd({
      contexts: ["all"],
      id: "vdh-sub-header",
      enabled: !1,
      title: "Download:",
      parentId: "vdh-top",
    }));
  let t = new Map();
  for (let n = 0; n < Md; n++) {
    let i = `vdh-sub-${n}`;
    (t.set(i, z),
      await Cd({
        contexts: ["all"],
        id: i,
        title: "n/a",
        parentId: "vdh-top",
      }));
  }
  return (
    it.default.contextMenus.onClicked.addListener((n) => {
      let i = n.menuItemId,
        r = t.get(i);
      r && r.isSome() && mt(r.value);
    }),
    t
  );
}
async function Lg(e) {
  let t = e.use_context_menu;
  it.default.contextMenus.update("vdh-top", { visible: t });
}
function Bg(e, t, n) {
  let i = [];
  if (e.current_win_tab.tab_id.isSome()) {
    let r = e.current_win_tab.tab_id.value,
      o = e.discovered.get(r);
    if (o && o.meta.isSome()) {
      let a = o.meta.value,
        s = 0;
      for (let u of o.media.values()) {
        if (s >= Md) break;
        let { basename: l, subdir: c } = mr(u, a),
          d,
          f = u.is_youtube && t.youtube_throttle;
        if (
          u.type == "m3u8_playlist" ||
          u.type == "youtube_format" ||
          u.type == "mpd_playlist"
        ) {
          let m = wi(u, t.prefered_quality);
          d = dt(u, !1, !1, t.prefered_av_muxer, l, c, m, f);
        } else d = dt(u, !1, !1, t.prefered_av_muxer, l, c, void 0, f);
        let _ = {
            name: "do_download",
            data: { download_args: ie(d), meta: ie(a), media: ie(u) },
          },
          g = `vdh-sub-${s}`;
        (n.set(g, B(_)),
          i.push({ title: `${l}.${d.extension}`, visible: !0 }),
          s++);
      }
    }
  }
  i.length > 0
    ? it.default.contextMenus.update("vdh-sub-header", { title: "Download:" })
    : it.default.contextMenus.update("vdh-sub-header", { title: "No Media" });
  for (let r = 0; r < Md; r++) {
    let o = i[r];
    o
      ? it.default.contextMenus.update(`vdh-sub-${r}`, o)
      : it.default.contextMenus.update(`vdh-sub-${r}`, { visible: !1 });
  }
}
fi();
function or(e, t) {
  Ue((n) => n.notifications.set(e, t));
}
function zx() {
  let e = de();
  if (e.current_win_tab.tab_id.isSome()) {
    let t = e.discovered.get(e.current_win_tab.tab_id.value);
    t && t.media.size > 0
      ? q.default.action.setIcon({ path: "/bitmaps/logo-128-color.png" })
      : q.default.action.setIcon({ path: "/bitmaps/logo-128-grey.png" });
  }
  e.notifications.size > 0
    ? (q.default.action.setBadgeText({ text: e.notifications.size.toString() }),
      q.default.action.setBadgeBackgroundColor({ color: [255, 0, 0, 190] }),
      q.default.action.setBadgeTextColor({ color: "white" }))
    : e.downloading.size > 0
      ? (q.default.action.setBadgeText({ text: e.downloading.size.toString() }),
        q.default.action.setBadgeBackgroundColor({ color: "#0284c7" }),
        q.default.action.setBadgeTextColor({ color: "white" }))
      : q.default.action.setBadgeText({ text: "" });
}
function qg(e) {
  let t,
    n = Z();
  return (
    e.isSome() && (t = n.default_action_per_hostname.get(e.value.hostname)),
    t || (t = n.default_action),
    t
  );
}
async function si(e) {
  if (!de().discovered.get(e)) return;
  let t;
  try {
    t = await q.default.tabs.get(e);
  } catch {
    console.warn("CreateMetaForTab: couldn't find the tab");
    return;
  }
  if (!de().discovered.get(e)) return;
  let i = xe(t.favIconUrl),
    r = xe(t.url);
  if (r.isSome() && r.value.protocol === "chrome") return;
  let o = qg(r),
    { download_directory: a } = Z(),
    { default_: s, rules: u } = Z().smartnaming.compiled,
    l = await jm(s, u, r, a, e),
    c = await m_(e, l.force_doc_title),
    d = {
      incognito: t.incognito,
      tab_id: e,
      title: c.title,
      thumbnail_url: c.thumbnail,
      favicon_url: i,
      url: r,
      default_action: o,
      smartnaming_rule: l,
    };
  Ie((f) => {
    let _ = f.discovered.get(e);
    _ && (_.meta = B(d));
  });
}
function Nx(e, t) {
  if (
    (e.type == "http" || e.type == "m3u8") &&
    [...t.values()].filter((n) => n.type == e.type).length > 10
  )
    return !1;
  if (e.type == "m3u8")
    for (let n of [...t.values()].filter((i) => i.type == "m3u8_playlist"))
      for (let i of n.playlist) {
        let r = i.av;
        if (
          (r.audio && e.url.href == r.audio.href) ||
          (r.video && e.url.href == r.video.href)
        )
          return !1;
      }
  return !0;
}
function Ox(e, t) {
  if ((t.set(e.hash, e), e.type == "m3u8_playlist")) {
    let n = new Set();
    for (let { av: i } of e.playlist)
      (i.audio && n.add(i.audio.href), i.video && n.add(i.video.href));
    for (let [i, r] of t.entries())
      r.type == "m3u8" && n.has(r.url.href) && t.delete(i);
  }
  if (e.type == "mpd_playlist")
    for (let [n, i] of t.entries()) {
      if (i.type != "http") continue;
      let r =
          i.initiator.isSome() &&
          e.initiator.isSome() &&
          i.initiator.value.href == e.initiator.value.href,
        o = i.size.isSome() && i.size.value > 2e7;
      r && !o && t.delete(n);
    }
}
function ca(e) {
  let t = Date.now(),
    n = e * 24 * 60 * 60 * 1e3,
    i = [...Z().downloaded.entries()],
    r = i.filter(([, a]) => t - a.download_timestamp < n),
    o = i.filter(([, a]) => t - a.download_timestamp >= n).map(([, a]) => a);
  pe((a) => {
    a.downloaded = new Map(
      r.sort(([s, u], [l, c]) => c.download_timestamp - u.download_timestamp),
    );
  });
  for (let a of o) q.default.downloads.erase({ id: a.browser_download_id });
}
function jd(e, t) {
  for (let [n, i] of e)
    ("browser_download_id" in t &&
      i.browser_download_id == t.browser_download_id &&
      e.delete(n),
      "media_hash" in t && i.media_hash == t.media_hash && e.delete(n));
}
async function Ud(e, t) {
  let n = de().discovered.get(t);
  (n
    ? n.media.has(e.hash) ||
      (Nx(e, n.media) &&
        Ie((i) => {
          let r = i.discovered.get(t);
          Ox(e, r.media);
        }))
    : Ie((i) =>
        i.discovered.set(t, { meta: z, media: new Map([[e.hash, e]]) }),
      ),
    si(t));
}
{
  {
    let e = ["xmlhttprequest", "media", "other"],
      t = ["<all_urls>"];
    (q.default.webRequest.onSendHeaders.addListener(() => {}, {
      types: e,
      urls: t,
    }),
      q.default.webRequest.onResponseStarted.addListener(() => {}, {
        types: e,
        urls: t,
      }),
      q.default.action.onClicked.addListener(() => {}),
      q.default.windows.onFocusChanged.addListener(() => {}),
      q.default.tabs.onRemoved.addListener(() => {}),
      q.default.tabs.onUpdated.addListener(() => {}),
      q.default.tabs.onActivated.addListener(() => {}),
      q.default.runtime.onMessage.addListener(() => {}),
      q.default.downloads.onChanged.addListener(() => {}),
      q.default.downloads.onErased.addListener(() => {}),
      q.default.webNavigation.onBeforeNavigate.addListener(() => {}),
      q.default.webNavigation.onDOMContentLoaded.addListener(() => {}));
  }
  q.default.runtime.onInstalled.addListener(async (e) => {
    let t = e.reason == "install",
      n = e.reason == "update",
      i = q.default.runtime.getManifest(),
      r = Sd(i.version);
    if (r.isNone()) {
      console.error("Can't parse version");
      return;
    }
    if (t)
      (q.default.tabs.create({ url: sm }),
        q.default.storage.local.set({ first_version_installed: r.value }));
    else if (n && e.previousVersion) {
      let o = Sd(e.previousVersion);
      if (o.isNone()) {
        console.error("Can't parse version");
        return;
      }
      let a = r.value.a != o.value.a,
        s = r.value.b != o.value.b;
      (a || s) && q.default.tabs.create({ url: um });
    }
  });
}
async function Vg(e, t, n) {
  let i = Se(e.data.download_args),
    r = Se(e.data.media),
    o = Se(e.data.meta);
  {
    for (let I of de().downloading.values()) if (I.media.hash == r.hash) return;
    for (let I of de().transient_history) if (I.media_hash == r.hash) return;
  }
  let a = 7200 * 1e3,
    s = Date.now(),
    u = r.type == "http",
    l = r.is_youtube,
    c = Z().lsd,
    d = s - c;
  if (l && Qe == "google" && !nm) {
    or("notification_no_youtube", { type: "no_youtube" });
    return;
  }
  let f = await ug(),
    _ = d > a;
  if (!(f || t || _)) {
    {
      let I = !1,
        j = await q.default.storage.local.get("first_version_installed");
      if (j && og(j.first_version_installed)) {
        let F = { a: 10, b: 0, c: 271, d: 0 };
        I = ag(j.first_version_installed, F);
      }
      if (Qe == "microsoft" && I) {
        or("notification_limit", { type: "limit_all" });
        return;
      }
    }
    if (Ee && !u) {
      or("notification_limit", { type: "limit_hls" });
      return;
    }
    if (Fe && l) {
      or("notification_limit", { type: "limit_youtube" });
      return;
    }
  }
  if (r.has_drm) {
    let I = {
      media_type: r.type,
      has_drm: r.has_drm,
      type: "download_error",
      timestamp: s,
      url: o.url.unwrapOr(null),
      favicon: o.favicon_url.unwrapOr(null),
      details: "",
    };
    or(`notification_${crypto.randomUUID()}`, I);
    return;
  }
  let g = Oh(o.tab_id, r);
  Ue((I) => {
    I.downloading.set(i.download_id, {
      bitrate: 0,
      status: "queuing",
      download_args: i,
      media: r,
      meta: o,
    });
  });
  let m,
    A = () => clearInterval(m),
    D = () => {
      let I = Date.now(),
        j = 0;
      m = setInterval(() => {
        Ie((F) => {
          let W = F.downloading.get(i.download_id);
          if (W.status == "downloading") {
            let M = Date.now(),
              oe = W.fetched_bytes_count - j,
              te = M - I;
            ((I = M),
              (W.bitrate = (1e3 * oe) / te),
              (j = W.fetched_bytes_count));
          }
        });
      }, 2e3);
    },
    S = !1,
    v = () => {
      if (!S && ((S = !0), !Fe || l)) {
        let I = s,
          j = Z().lsd;
        I > j && (j < id + 2 ? pe((F) => F.lsd++) : pe((F) => (F.lsd = I)));
      }
    },
    b = Ut((I) => {
      if (
        I.name == "download_progress" &&
        I.data.download_id == i.download_id
      ) {
        m || D();
        let j = I.data.progress;
        j.status == "finalizing"
          ? Ue((F) => {
              let W = F.downloading.get(i.download_id);
              W.status = j.status;
            })
          : Ie((F) => {
              let W = F.downloading.get(i.download_id);
              (W.status != "finalizing" &&
                ((W.status = j.status),
                W.status == "downloading" &&
                  j.status == "downloading" &&
                  ((W.percent = j.percent),
                  (W.fetched_bytes_count = j.fetched_bytes_count),
                  (W.output_duration_s = j.output_duration_s))),
                W.status == "downloading" && W.fetched_bytes_count > 0 && v());
            });
      }
    }),
    T = await Za(i, n);
  (b(), A());
  let C = await g;
  Ue((I) => {
    I.downloading.delete(i.download_id);
    let j = {
      max_concurrent_download: Z().max_concurrent_downloads,
      strategy: i.strategy,
      download_args_url: i.url.href,
      jsf: i.will_use_jsfetch,
    };
    if (T.isOk() && !T.value.aborted_no_partial) {
      (Ee &&
        !i.save_as &&
        T.value.browser_downloads_duration_ms &&
        T.value.browser_downloads_duration_ms > 5e3 &&
        (I.suspecting_saveas = !0),
        v());
      let { path: F, browser_download_id: W, ending_reason: M } = T.value;
      Z().show_desktop_notifications &&
        (!o.incognito || Z().show_desktop_notifications_private) &&
        q.default.notifications.create(i.download_id, {
          type: "basic",
          title: "Download complete",
          iconUrl: q.default.runtime.getURL("/bitmaps/logo-128-color.png"),
          message: F,
        });
      let oe = `ded_${crypto.randomUUID()}`,
        te = {
          has_drm: C,
          downloaded_id: oe,
          path: F,
          browser_download_id: W,
          media_hash: r.hash,
          download_timestamp: Date.now(),
          origin_url: o.url.isSome() ? o.url.value.href : null,
          origin_favicon_url: o.favicon_url.isSome()
            ? o.favicon_url.value.href
            : null,
          subdir: i.save_as ? void 0 : i.subdir,
        };
      Z().history_days > 0 &&
        pe((K) => {
          (jd(K.downloaded, { media_hash: r.hash }), K.downloaded.set(oe, te));
        });
      let ue = 99;
      if (
        (I.transient_history.push(te),
        I.transient_history.length > ue &&
          I.transient_history.splice(0, I.transient_history.length - ue),
        M != "end_of_file" && !M.user_abort)
      )
        if (l && M.e4XX_5XX_failure && M.status == 403)
          I.notifications.set("notification_youtube_403", {
            type: "youtube_403",
            timestamp: s,
            url: o.url.unwrapOr(null),
          });
        else {
          j.ending_reason = Ua(M);
          let K = {
            type: "download_interrupted",
            timestamp: s,
            url: o.url.unwrapOr(null),
            favicon: o.favicon_url.unwrapOr(null),
            media_type: r.type,
            details: JSON.stringify(j),
          };
          I.notifications.set(`notification_${crypto.randomUUID()}`, K);
        }
      pe((K) => K.successful_downloads_count++);
      let { successful_downloads_count: Pe, dont_ask_for_user_review: G } = Z();
      Pe == 100 &&
        !G &&
        Ie((K) => {
          K.notifications.set("notification_one_hundred_downloads", {
            type: "one_hundred_downloads",
          });
        });
    } else if (T.isOk()) {
      let { ending_reason: F } = T.value;
      if (F != "end_of_file" && !F.user_abort)
        if (l && F.e4XX_5XX_failure && F.status == 403)
          I.notifications.set("notification_youtube_403", {
            type: "youtube_403",
            timestamp: s,
            url: o.url.unwrapOr(null),
          });
        else {
          j.ending_reason = Ua(F);
          let W = {
            has_drm: C,
            type: "download_error",
            timestamp: s,
            url: o.url.unwrapOr(null),
            favicon: o.favicon_url.unwrapOr(null),
            media_type: r.type,
            details: JSON.stringify(j),
          };
          I.notifications.set(`notification_${crypto.randomUUID()}`, W);
        }
    } else {
      T.error.details && (j.error = T.error.details);
      let F = {
        media_type: r.type,
        has_drm: C,
        type: "download_error",
        timestamp: s,
        url: o.url.unwrapOr(null),
        favicon: o.favicon_url.unwrapOr(null),
        details: JSON.stringify(j),
      };
      (T.error.interrupt_reason &&
        (F.interrupt_reason = T.error.interrupt_reason),
        I.notifications.set(`notification_${crypto.randomUUID()}`, F));
    }
  });
}
var Rx = async () => {
  (console.log("service::start - ", new Date()),
    q.default.runtime.setUninstallURL(lm));
  try {
    let n = await navigator.storage.getDirectory();
    for await (let i of n.keys())
      (console.warn(`main::purging ${i}`), await n.removeEntry(i));
  } catch (n) {
    console.error("main::purging failed", n);
  }
  let e = await Fg();
  (await Th(() => {
    (zx(), Bg(de(), Z(), e));
  }),
    await kh(() => {
      Lg(Z());
    }),
    Ue((n) => {
      (n.downloading.size > 0 && console.warn("Downloadings during startup."),
        n.downloading.clear());
    }));
  let t;
  {
    let n = Z().jwt;
    if (n != null) t = jg(n.raw);
    else if (_i) t = Promise.resolve(!0);
    else {
      let i = await q.default.storage.local.get("license");
      if (
        typeof i?.license?.key == "string" &&
        i.license.status == "accepted"
      ) {
        let r = Date.now();
        if (r - Z().last_migration_request > 600 * 1e3) {
          pe((s) => (s.last_migration_request = r));
          let a = Cg(i.license.key);
          ((t = a.then((s) => s.isOk())),
            a.then((s) => {
              s.isOk() && q.default.storage.local.remove("license");
            }));
        }
      }
    }
  }
  zh();
  {
    let n = await p_();
    (Ie((i) => (i.current_win_tab = n)),
      __((i) => {
        Ue((r) => (r.current_win_tab = i));
      }));
  }
  {
    {
      let n = (i) => {
        let r = Le(i.tabId);
        i.frameId == 0 &&
          r.isSome() &&
          de().discovered.has(r.value) &&
          Ie((o) => o.discovered.delete(r.value));
      };
      (q.default.webNavigation.onBeforeNavigate.addListener(n),
        q.default.tabs.onRemoved.addListener((i) =>
          n({ tabId: i, frameId: 0 }),
        ));
    }
    (q.default.tabs.onUpdated.addListener(async (n) => {
      let i = Le(n);
      i.isSome() && si(i.value);
    }),
      q.default.webNavigation.onDOMContentLoaded.addListener(async (n) => {
        if (n.frameId == 0) {
          let i = Le(n.tabId);
          i.isSome() && si(i.value);
        }
      }));
  }
  q.default.downloads.onErased.addListener((n) => {
    (pe((i) => {
      jd(i.downloaded, { browser_download_id: n });
    }),
      Ie((i) => {
        i.transient_history = i.transient_history.filter(
          (r) => r.browser_download_id != n,
        );
      }));
  });
  {
    let n;
    f_(async (a, s) => {
      let u = Le(s.tab?.id);
      if (a.name == "on_media") {
        let l = Se(a.data.media);
        u.isSome() && Ud(l, u.value);
      } else if (a.name == "on_activate_addon") {
        if (u.isNone()) {
          console.error("Tried to activate from an invalid tab.");
          return;
        }
        let l = await t,
          c = u.value,
          d = a.data.key,
          f = await Mg(d);
        ((t = Promise.resolve(l || f.isOk())),
          l || f.isOk()
            ? (Zt(c, { name: "on_activate_addon_success", data: null }),
              Ue((_) => {
                _.notifications.delete("notification_limit");
              }))
            : (Zt(c, { name: "on_activate_addon_failure", data: f.error }),
              Ee && or("notification_limit", { type: "limit_hls" }),
              Fe && or("notification_limit", { type: "limit_youtube" })));
      } else if (a.name == "qjs") {
        if (u.isNone()) {
          console.error("Invalid tab.");
          return;
        }
        if (!n)
          try {
            n = await wd(ni);
          } catch (d) {
            (console.error("qjs load failed", d),
              Zt(u.value, {
                name: "qjs_result",
                data: JSON.stringify({
                  error: "qjs load failed",
                  uid: a.data.uid,
                }),
              }));
            return;
          }
        let l = n.newContext(),
          c = l.evalCode(a.data.code);
        if (c.error) {
          let d = l.dump(c.error),
            f = `${d.name}: ${d.message}`;
          (c.error.dispose(),
            Zt(u.value, {
              name: "qjs_result",
              data: JSON.stringify({ error: f, uid: a.data.uid }),
            }));
        } else {
          let d = l.dump(c.value);
          c.value.dispose();
          try {
            let f = JSON.stringify({ success: d, uid: a.data.uid });
            Zt(u.value, { name: "qjs_result", data: f });
          } catch {
            Zt(u.value, {
              name: "qjs_result",
              data: JSON.stringify({ error: "not json", uid: a.data.uid }),
            });
          }
        }
        l.dispose();
      }
    });
    let i = Z().max_concurrent_downloads,
      r = Z().youtube_throttle ? 1 : i,
      o = new ei(i, r, 6e3);
    (Wm(async (a) => {
      if (a.name == "do_download") await Vg(a, await t, o);
      else if (a.name == "on_media") {
        let { tab_id: s, media: u } = a.data;
        if (s.isSome()) Ud(u, s.value);
        else if (u.initiator.isSome()) {
          let l = u.initiator.value,
            c = await q.default.tabs.query({ url: l.href });
          (c.length == 0 &&
            (c = await q.default.tabs.query({ url: l.origin + "/*" })),
            c.length == 0 && console.warn("Orphan media"));
          for (let d of c) {
            let f = Le(d.id);
            f.isNone() || Ud(u, f.value);
          }
        }
      }
    }),
      Er(async (a, s) => {
        if (a.name == "abort_download")
          (Ue((u) => {
            let l = u.downloading.get(a.data.download_id);
            l.status = "finalizing";
          }),
            o.cancelPendingTask(a.data.download_id) || Gm(a.data.download_id));
        else if (a.name == "rm_notification")
          Ue((u) => u.notifications.delete(a.data.notification_id));
        else if (a.name == "rm_notifications_all")
          Ue((u) => u.notifications.clear());
        else if (a.name == "set_default_action")
          (pe((u) => {
            let l = a.data.hostname,
              c = a.data.action;
            (u.default_action_per_hostname.delete(l),
              c == "download_audio"
                ? u.default_action_per_hostname.set(l, c)
                : (u.default_action = c));
          }),
            Ie((u) => {
              for (let l of u.discovered.values())
                if (l.meta.isSome()) {
                  let c = l.meta.value;
                  ((c = { ...c, default_action: qg(c.url) }), (l.meta = B(c)));
                }
            }));
        else if (a.name == "dismiss_media")
          Ue((u) => {
            let l = u.discovered.get(a.data.tab_id);
            l && l.media.delete(a.data.media_hash);
          });
        else if (a.name == "rm_download") {
          try {
            await q.default.downloads.removeFile(a.data.browser_download_id);
          } catch {}
          (await q.default.downloads.erase({ id: a.data.browser_download_id }),
            pe((u) => {
              jd(u.downloaded, {
                browser_download_id: a.data.browser_download_id,
              });
            }),
            Ie((u) => {
              u.transient_history = u.transient_history.filter(
                (l) => l.browser_download_id != a.data.browser_download_id,
              );
            }));
        } else if (a.name == "retry_download") {
          let u = `media_hash_${st(crypto.randomUUID())}`;
          Ie((l) => {
            let c = l.discovered
              .get(a.data.tab_id)
              ?.media.get(a.data.media_hash);
            c &&
              l.discovered
                .get(a.data.tab_id)
                ?.media.set(u, { ...c, cache: "reload", hash: u });
          });
        } else if (a.name == "update_media_prefered_entry")
          Ie((u) => {
            if (u.current_win_tab.tab_id.isSome()) {
              let l = u.discovered
                .get(u.current_win_tab.tab_id.value)
                ?.media.get(a.data.media_hash);
              l &&
                "playlist" in l &&
                (l.prefered_entry = B(a.data.playlist_index));
            }
          });
        else if (a.name == "do_download") Vg(a, await t, o);
        else if (a.name == "clear-history") ca(0);
        else if (a.name == "mut-settings")
          if ("youtube_audio_strategy" in a.data) {
            let u = a.data.youtube_audio_strategy;
            Z().youtube_audio_strategy != u &&
              ve((l) => (l.youtube_audio_strategy = u));
          } else if ("hide_nomedia_box" in a.data) {
            let u = a.data.hide_nomedia_box;
            Z().hide_nomedia_box != u && ve((l) => (l.hide_nomedia_box = u));
          } else if ("youtube_prefer_hls" in a.data) {
            let u = a.data.youtube_prefer_hls;
            Z().youtube_prefer_hls != u &&
              ve((l) => (l.youtube_prefer_hls = u));
          } else if ("max_concurrent_downloads" in a.data) {
            let u = a.data.max_concurrent_downloads;
            Z().max_concurrent_downloads != u &&
              (o.setTotalCapacity(u),
              Z().youtube_throttle
                ? o.setYoutubeCapacity(1)
                : o.setYoutubeCapacity(u),
              ve((l) => (l.max_concurrent_downloads = u)));
          } else if ("show_desktop_notifications" in a.data) {
            let u = a.data.show_desktop_notifications;
            Z().show_desktop_notifications != u &&
              ve((l) => (l.show_desktop_notifications = u));
          } else if ("prefered_quality" in a.data) {
            let u = a.data.prefered_quality;
            Z().prefered_quality != u && ve((l) => (l.prefered_quality = u));
          } else if ("always_download_as_mkv" in a.data)
            a.data.always_download_as_mkv
              ? ve((l) => (l.prefered_av_muxer = "mkv"))
              : ve((l) => (l.prefered_av_muxer = "mp4"));
          else if ("preview_mode" in a.data) {
            let u = a.data.preview_mode;
            Z().preview_mode != u && ve((l) => (l.preview_mode = u));
          } else if ("show_desktop_notifications_private" in a.data) {
            let u = a.data.show_desktop_notifications_private;
            Z().show_desktop_notifications_private != u &&
              ve((l) => (l.show_desktop_notifications_private = u));
          } else if ("show_transient_history" in a.data) {
            let u = a.data.show_transient_history;
            (Z().show_transient_history != u &&
              ve((l) => (l.show_transient_history = u)),
              ca(Z().history_days));
          } else if ("history_days" in a.data) {
            let u = a.data.history_days;
            (Z().history_days != u && ve((l) => (l.history_days = u)),
              ca(Z().history_days));
          } else if ("ui_theme" in a.data) {
            let u = a.data.ui_theme;
            Z().ui_theme != u && ve((l) => (l.ui_theme = u));
          } else if ("popup_size" in a.data) {
            let u = a.data.popup_size;
            Z().popup_size != u && ve((l) => (l.popup_size = u));
          } else if ("youtube_throttle" in a.data) {
            let u = a.data.youtube_throttle;
            Z().youtube_throttle != u &&
              (u
                ? o.setYoutubeCapacity(1)
                : o.setYoutubeCapacity(Z().max_concurrent_downloads),
              ve((l) => (l.youtube_throttle = u)));
          } else if ("use_context_menu" in a.data) {
            let u = a.data.use_context_menu;
            Z().use_context_menu != u && ve((l) => (l.use_context_menu = u));
          } else if ("download_directory" in a.data) {
            let u = a.data.download_directory;
            Z().download_directory != u &&
              ve((c) => (c.download_directory = u));
            let l = de().current_win_tab.tab_id;
            l.isSome() && si(l.value);
          } else a.data;
        else if (a.name == "show-review-page")
          (q.default.tabs.create({ url: cm[Qe] }),
            pe((u) => (u.dont_ask_for_user_review = !0)),
            Ue((u) =>
              u.notifications.delete("notification_one_hundred_downloads"),
            ));
        else if (a.name != "request_preview")
          if (a.name == "rm-custom-strings")
            pe((u) => {
              (u.custom_strings.web.clear(), u.custom_strings.addon.clear());
            });
          else if (a.name == "update-custom-web-string")
            pe((u) => {
              u.custom_strings.web.set(a.data.key, a.data.value);
            });
          else if (a.name == "update-custom-addon-string")
            pe((u) => {
              u.custom_strings.addon.set(a.data.key, a.data.value);
            });
          else if (a.name == "reset-suspicious-saveas")
            Ie((u) => {
              u.suspecting_saveas = !1;
            });
          else if (a.name == "update-smartnaming") {
            let u = a.data;
            pe((c) => {
              if (((c.smartnaming.source = u), !u))
                c.smartnaming.compiled = dr();
              else {
                let d = Fm(u);
                d.isOk()
                  ? (c.smartnaming.compiled = d.value)
                  : (c.smartnaming.compiled = dr());
              }
            });
            let l = de().current_win_tab.tab_id;
            l.isSome() && si(l.value);
          } else
            a.name == "redock" ||
              (a.name == "clear-completed" &&
                Ue((u) => {
                  for (let l of u.transient_history)
                    for (let c of u.discovered.values())
                      c.media.delete(l.media_hash);
                  u.transient_history = [];
                }));
      }));
  }
  (c_(),
    h_(de),
    g_(de),
    ca(Z().history_days),
    q.default.commands.onCommand.addListener(async (n) => {
      n == "default-action" && Rh(de(), Z());
    }),
    console.log("service::end"));
};
Rx();
!1;
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)

smol-toml/dist/error.js:
smol-toml/dist/util.js:
smol-toml/dist/date.js:
smol-toml/dist/primitive.js:
smol-toml/dist/extract.js:
smol-toml/dist/struct.js:
smol-toml/dist/parse.js:
smol-toml/dist/stringify.js:
smol-toml/dist/index.js:
  (*!
   * Copyright (c) Squirrel Chat et al., All rights reserved.
   * SPDX-License-Identifier: BSD-3-Clause
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   *    list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the
   *    documentation and/or other materials provided with the distribution.
   * 3. Neither the name of the copyright holder nor the names of its contributors
   *    may be used to endorse or promote products derived from this software without
   *    specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
   * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
   * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
   * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
   * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *)

mpd-parser/dist/mpd-parser.es.js:
  (*! @name mpd-parser @version 1.3.1 @license Apache-2.0 *)
*/
