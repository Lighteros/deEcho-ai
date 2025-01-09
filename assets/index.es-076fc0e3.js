import {
  k as a1,
  m as c1,
  o as u1,
  p as h1,
  q as l1,
  s as f1,
  u as d1,
  v as p1,
  w as g1,
  x as y1,
  y as Lc,
  z as Mc,
  A as qc,
  B as zc,
  e as pr,
  t as Pi,
  h as m1,
  C as ue,
  D as v1,
  E as Nf,
  F as No,
  G as kc,
  H as Cf,
  I as b1,
  J as w1,
  K as $f,
  L as _1,
  M as Df,
  N as E1,
  j as I1,
  _ as S1,
} from "./index-2e2b0cd7.js";
import { e as sr } from "./events-5f626723.js";
function Hc(s) {
  return globalThis.Buffer != null
    ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength)
    : s;
}
function Ff(s = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Hc(globalThis.Buffer.allocUnsafe(s))
    : new Uint8Array(s);
}
function Oc(s, t) {
  t || (t = s.reduce((a, h) => a + h.length, 0));
  const r = Ff(t);
  let n = 0;
  for (const a of s) r.set(a, n), (n += a.length);
  return Hc(r);
}
const sl = {
  ...a1,
  ...c1,
  ...u1,
  ...h1,
  ...l1,
  ...f1,
  ...d1,
  ...p1,
  ...g1,
  ...y1,
};
function Uf(s, t, r, n) {
  return {
    name: s,
    prefix: t,
    encoder: { name: s, prefix: t, encode: r },
    decoder: { decode: n },
  };
}
const ol = Uf(
    "utf8",
    "u",
    (s) => "u" + new TextDecoder("utf8").decode(s),
    (s) => new TextEncoder().encode(s.substring(1))
  ),
  cc = Uf(
    "ascii",
    "a",
    (s) => {
      let t = "a";
      for (let r = 0; r < s.length; r++) t += String.fromCharCode(s[r]);
      return t;
    },
    (s) => {
      s = s.substring(1);
      const t = Ff(s.length);
      for (let r = 0; r < s.length; r++) t[r] = s.charCodeAt(r);
      return t;
    }
  ),
  jf = {
    utf8: ol,
    "utf-8": ol,
    hex: sl.base16,
    latin1: cc,
    ascii: cc,
    binary: cc,
    ...sl,
  };
function gr(s, t = "utf8") {
  const r = jf[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Hc(globalThis.Buffer.from(s, "utf-8"))
    : r.decoder.decode(`${r.prefix}${s}`);
}
function nr(s, t = "utf8") {
  const r = jf[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString(
        "utf8"
      )
    : r.encoder.encode(s).substring(1);
}
var al =
    (globalThis && globalThis.__spreadArray) ||
    function (s, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, a = t.length, h; n < a; n++)
          (h || !(n in t)) &&
            (h || (h = Array.prototype.slice.call(t, 0, n)), (h[n] = t[n]));
      return s.concat(h || Array.prototype.slice.call(t));
    },
  x1 = (function () {
    function s(t, r, n) {
      (this.name = t),
        (this.version = r),
        (this.os = n),
        (this.type = "browser");
    }
    return s;
  })(),
  P1 = (function () {
    function s(t) {
      (this.version = t),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return s;
  })(),
  O1 = (function () {
    function s(t, r, n, a) {
      (this.name = t),
        (this.version = r),
        (this.os = n),
        (this.bot = a),
        (this.type = "bot-device");
    }
    return s;
  })(),
  A1 = (function () {
    function s() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return s;
  })(),
  T1 = (function () {
    function s() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return s;
  })(),
  R1 =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  N1 =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  cl = 3,
  C1 = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", R1],
  ],
  ul = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function $1(s) {
  return s
    ? hl(s)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new T1()
    : typeof navigator < "u"
    ? hl(navigator.userAgent)
    : U1();
}
function D1(s) {
  return (
    s !== "" &&
    C1.reduce(function (t, r) {
      var n = r[0],
        a = r[1];
      if (t) return t;
      var h = a.exec(s);
      return !!h && [n, h];
    }, !1)
  );
}
function hl(s) {
  var t = D1(s);
  if (!t) return null;
  var r = t[0],
    n = t[1];
  if (r === "searchbot") return new A1();
  var a = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  a
    ? a.length < cl && (a = al(al([], a, !0), j1(cl - a.length), !0))
    : (a = []);
  var h = a.join("."),
    d = F1(s),
    w = N1.exec(s);
  return w && w[1] ? new O1(r, h, d, w[1]) : new x1(r, h, d);
}
function F1(s) {
  for (var t = 0, r = ul.length; t < r; t++) {
    var n = ul[t],
      a = n[0],
      h = n[1],
      d = h.exec(s);
    if (d) return a;
  }
  return null;
}
function U1() {
  var s = typeof process < "u" && process.version;
  return s ? new P1(process.version.slice(1)) : null;
}
function j1(s) {
  for (var t = [], r = 0; r < s; r++) t.push("0");
  return t;
}
const L1 = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe",
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe",
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe",
  },
};
var M1 = {};
(function (s) {
  const t = qc,
    r = zc,
    n = Lc,
    a = Mc,
    h = (f) => f == null,
    d = Symbol("encodeFragmentIdentifier");
  function w(f) {
    switch (f.arrayFormat) {
      case "index":
        return (m) => (b, v) => {
          const g = b.length;
          return v === void 0 ||
            (f.skipNull && v === null) ||
            (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), "[", g, "]"].join("")]
            : [...b, [A(m, f), "[", A(g, f), "]=", A(v, f)].join("")];
        };
      case "bracket":
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), "[]"].join("")]
            : [...b, [A(m, f), "[]=", A(v, f)].join("")];
      case "colon-list-separator":
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), ":list="].join("")]
            : [...b, [A(m, f), ":list=", A(v, f)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const m = f.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (v, g) =>
          g === void 0 ||
          (f.skipNull && g === null) ||
          (f.skipEmptyString && g === "")
            ? v
            : ((g = g === null ? "" : g),
              v.length === 0
                ? [[A(b, f), m, A(g, f)].join("")]
                : [[v, A(g, f)].join(f.arrayFormatSeparator)]);
      }
      default:
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, A(m, f)]
            : [...b, [A(m, f), "=", A(v, f)].join("")];
    }
  }
  function S(f) {
    let m;
    switch (f.arrayFormat) {
      case "index":
        return (b, v, g) => {
          if (
            ((m = /\[(\d*)\]$/.exec(b)), (b = b.replace(/\[\d*\]$/, "")), !m)
          ) {
            g[b] = v;
            return;
          }
          g[b] === void 0 && (g[b] = {}), (g[b][m[1]] = v);
        };
      case "bracket":
        return (b, v, g) => {
          if (((m = /(\[\])$/.exec(b)), (b = b.replace(/\[\]$/, "")), !m)) {
            g[b] = v;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [v];
            return;
          }
          g[b] = [].concat(g[b], v);
        };
      case "colon-list-separator":
        return (b, v, g) => {
          if (((m = /(:list)$/.exec(b)), (b = b.replace(/:list$/, "")), !m)) {
            g[b] = v;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [v];
            return;
          }
          g[b] = [].concat(g[b], v);
        };
      case "comma":
      case "separator":
        return (b, v, g) => {
          const R = typeof v == "string" && v.includes(f.arrayFormatSeparator),
            P =
              typeof v == "string" &&
              !R &&
              U(v, f).includes(f.arrayFormatSeparator);
          v = P ? U(v, f) : v;
          const X =
            R || P
              ? v.split(f.arrayFormatSeparator).map((se) => U(se, f))
              : v === null
              ? v
              : U(v, f);
          g[b] = X;
        };
      case "bracket-separator":
        return (b, v, g) => {
          const R = /(\[\])$/.test(b);
          if (((b = b.replace(/\[\]$/, "")), !R)) {
            g[b] = v && U(v, f);
            return;
          }
          const P =
            v === null
              ? []
              : v.split(f.arrayFormatSeparator).map((X) => U(X, f));
          if (g[b] === void 0) {
            g[b] = P;
            return;
          }
          g[b] = [].concat(g[b], P);
        };
      default:
        return (b, v, g) => {
          if (g[b] === void 0) {
            g[b] = v;
            return;
          }
          g[b] = [].concat(g[b], v);
        };
    }
  }
  function $(f) {
    if (typeof f != "string" || f.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function A(f, m) {
    return m.encode ? (m.strict ? t(f) : encodeURIComponent(f)) : f;
  }
  function U(f, m) {
    return m.decode ? r(f) : f;
  }
  function G(f) {
    return Array.isArray(f)
      ? f.sort()
      : typeof f == "object"
      ? G(Object.keys(f))
          .sort((m, b) => Number(m) - Number(b))
          .map((m) => f[m])
      : f;
  }
  function J(f) {
    const m = f.indexOf("#");
    return m !== -1 && (f = f.slice(0, m)), f;
  }
  function H(f) {
    let m = "";
    const b = f.indexOf("#");
    return b !== -1 && (m = f.slice(b)), m;
  }
  function Q(f) {
    f = J(f);
    const m = f.indexOf("?");
    return m === -1 ? "" : f.slice(m + 1);
  }
  function oe(f, m) {
    return (
      m.parseNumbers &&
      !Number.isNaN(Number(f)) &&
      typeof f == "string" &&
      f.trim() !== ""
        ? (f = Number(f))
        : m.parseBooleans &&
          f !== null &&
          (f.toLowerCase() === "true" || f.toLowerCase() === "false") &&
          (f = f.toLowerCase() === "true"),
      f
    );
  }
  function pe(f, m) {
    (m = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      m
    )),
      $(m.arrayFormatSeparator);
    const b = S(m),
      v = Object.create(null);
    if (typeof f != "string" || ((f = f.trim().replace(/^[?#&]/, "")), !f))
      return v;
    for (const g of f.split("&")) {
      if (g === "") continue;
      let [R, P] = n(m.decode ? g.replace(/\+/g, " ") : g, "=");
      (P =
        P === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(m.arrayFormat)
          ? P
          : U(P, m)),
        b(U(R, m), P, v);
    }
    for (const g of Object.keys(v)) {
      const R = v[g];
      if (typeof R == "object" && R !== null)
        for (const P of Object.keys(R)) R[P] = oe(R[P], m);
      else v[g] = oe(R, m);
    }
    return m.sort === !1
      ? v
      : (m.sort === !0
          ? Object.keys(v).sort()
          : Object.keys(v).sort(m.sort)
        ).reduce((g, R) => {
          const P = v[R];
          return (
            Boolean(P) && typeof P == "object" && !Array.isArray(P)
              ? (g[R] = G(P))
              : (g[R] = P),
            g
          );
        }, Object.create(null));
  }
  (s.extract = Q),
    (s.parse = pe),
    (s.stringify = (f, m) => {
      if (!f) return "";
      (m = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        m
      )),
        $(m.arrayFormatSeparator);
      const b = (P) =>
          (m.skipNull && h(f[P])) || (m.skipEmptyString && f[P] === ""),
        v = w(m),
        g = {};
      for (const P of Object.keys(f)) b(P) || (g[P] = f[P]);
      const R = Object.keys(g);
      return (
        m.sort !== !1 && R.sort(m.sort),
        R.map((P) => {
          const X = f[P];
          return X === void 0
            ? ""
            : X === null
            ? A(P, m)
            : Array.isArray(X)
            ? X.length === 0 && m.arrayFormat === "bracket-separator"
              ? A(P, m) + "[]"
              : X.reduce(v(P), []).join("&")
            : A(P, m) + "=" + A(X, m);
        })
          .filter((P) => P.length > 0)
          .join("&")
      );
    }),
    (s.parseUrl = (f, m) => {
      m = Object.assign({ decode: !0 }, m);
      const [b, v] = n(f, "#");
      return Object.assign(
        { url: b.split("?")[0] || "", query: pe(Q(f), m) },
        m && m.parseFragmentIdentifier && v
          ? { fragmentIdentifier: U(v, m) }
          : {}
      );
    }),
    (s.stringifyUrl = (f, m) => {
      m = Object.assign({ encode: !0, strict: !0, [d]: !0 }, m);
      const b = J(f.url).split("?")[0] || "",
        v = s.extract(f.url),
        g = s.parse(v, { sort: !1 }),
        R = Object.assign(g, f.query);
      let P = s.stringify(R, m);
      P && (P = `?${P}`);
      let X = H(f.url);
      return (
        f.fragmentIdentifier &&
          (X = `#${m[d] ? A(f.fragmentIdentifier, m) : f.fragmentIdentifier}`),
        `${b}${P}${X}`
      );
    }),
    (s.pick = (f, m, b) => {
      b = Object.assign({ parseFragmentIdentifier: !0, [d]: !1 }, b);
      const { url: v, query: g, fragmentIdentifier: R } = s.parseUrl(f, b);
      return s.stringifyUrl(
        { url: v, query: a(g, m), fragmentIdentifier: R },
        b
      );
    }),
    (s.exclude = (f, m, b) => {
      const v = Array.isArray(m) ? (g) => !m.includes(g) : (g, R) => !m(g, R);
      return s.pick(f, v, b);
    });
})(M1);
function q1(s, t = []) {
  const r = [];
  return (
    Object.keys(s).forEach((n) => {
      if (t.length && !t.includes(n)) return;
      const a = s[n];
      r.push(...a.accounts);
    }),
    r
  );
}
const z1 = {
  INVALID_METHOD: { message: "Invalid method.", code: 1001 },
  INVALID_EVENT: { message: "Invalid event.", code: 1002 },
  INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
  INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
  INVALID_SESSION_SETTLE_REQUEST: {
    message: "Invalid session settle request.",
    code: 1005,
  },
  UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
  UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
  UNAUTHORIZED_UPDATE_REQUEST: {
    message: "Unauthorized update request.",
    code: 3003,
  },
  UNAUTHORIZED_EXTEND_REQUEST: {
    message: "Unauthorized extend request.",
    code: 3004,
  },
  USER_REJECTED: { message: "User rejected.", code: 5e3 },
  USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
  USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
  USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
  UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
  UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
  UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
  UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
  UNSUPPORTED_NAMESPACE_KEY: {
    message: "Unsupported namespace key.",
    code: 5104,
  },
  USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
  SESSION_SETTLEMENT_FAILED: {
    message: "Session settlement failed.",
    code: 7e3,
  },
  WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
};
function k1(s, t) {
  const { message: r, code: n } = z1[s];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function Ac(s, t) {
  return Array.isArray(s) ? (typeof t < "u" && s.length ? s.every(t) : !0) : !1;
}
var Co = {},
  os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
function H1(s) {
  if (typeof s != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof s}`);
  try {
    return JSON.parse(s);
  } catch {
    return s;
  }
}
os.safeJsonParse = H1;
function B1(s) {
  return typeof s == "string"
    ? s
    : JSON.stringify(s, (t, r) => (typeof r > "u" ? null : r));
}
os.safeJsonStringify = B1;
var So = {},
  uc = {
    get exports() {
      return So;
    },
    set exports(s) {
      So = s;
    },
  },
  ll;
function V1() {
  return (
    ll ||
      ((ll = 1),
      (function () {
        let s;
        function t() {}
        (s = t),
          (s.prototype.getItem = function (r) {
            return this.hasOwnProperty(r) ? String(this[r]) : null;
          }),
          (s.prototype.setItem = function (r, n) {
            this[r] = String(n);
          }),
          (s.prototype.removeItem = function (r) {
            delete this[r];
          }),
          (s.prototype.clear = function () {
            const r = this;
            Object.keys(r).forEach(function (n) {
              (r[n] = void 0), delete r[n];
            });
          }),
          (s.prototype.key = function (r) {
            return (r = r || 0), Object.keys(this)[r];
          }),
          s.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          typeof pr < "u" && pr.localStorage
            ? (uc.exports = pr.localStorage)
            : typeof window < "u" && window.localStorage
            ? (uc.exports = window.localStorage)
            : (uc.exports = new t());
      })()),
    So
  );
}
var hc = {},
  Hn = {},
  fl;
function K1() {
  if (fl) return Hn;
  (fl = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn.IKeyValueStorage = void 0);
  class s {}
  return (Hn.IKeyValueStorage = s), Hn;
}
var Bn = {},
  dl;
function W1() {
  if (dl) return Bn;
  (dl = 1),
    Object.defineProperty(Bn, "__esModule", { value: !0 }),
    (Bn.parseEntry = void 0);
  const s = os;
  function t(r) {
    var n;
    return [
      r[0],
      s.safeJsonParse((n = r[1]) !== null && n !== void 0 ? n : ""),
    ];
  }
  return (Bn.parseEntry = t), Bn;
}
var pl;
function G1() {
  return (
    pl ||
      ((pl = 1),
      (function (s) {
        Object.defineProperty(s, "__esModule", { value: !0 });
        const t = Pi;
        t.__exportStar(K1(), s), t.__exportStar(W1(), s);
      })(hc)),
    hc
  );
}
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.KeyValueStorage = void 0;
const mn = Pi,
  gl = os,
  J1 = mn.__importDefault(V1()),
  Q1 = G1();
class Lf {
  constructor() {
    this.localStorage = J1.default;
  }
  getKeys() {
    return mn.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return mn.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(Q1.parseEntry);
    });
  }
  getItem(t) {
    return mn.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null) return gl.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return mn.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, gl.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return mn.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
Co.KeyValueStorage = Lf;
var Y1 = (Co.default = Lf),
  _n = {},
  Vn = {},
  lc = {},
  Kn = {};
let Ki = class {};
const X1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, IEvents: Ki },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Z1 = m1(X1);
var yl;
function eb() {
  if (yl) return Kn;
  (yl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.IHeartBeat = void 0);
  const s = Z1;
  class t extends s.IEvents {
    constructor(n) {
      super();
    }
  }
  return (Kn.IHeartBeat = t), Kn;
}
var ml;
function Mf() {
  return (
    ml ||
      ((ml = 1),
      (function (s) {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          Pi.__exportStar(eb(), s);
      })(lc)),
    lc
  );
}
var fc = {},
  Hi = {},
  vl;
function tb() {
  if (vl) return Hi;
  (vl = 1),
    Object.defineProperty(Hi, "__esModule", { value: !0 }),
    (Hi.HEARTBEAT_EVENTS = Hi.HEARTBEAT_INTERVAL = void 0);
  const s = ue;
  return (
    (Hi.HEARTBEAT_INTERVAL = s.FIVE_SECONDS),
    (Hi.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
    Hi
  );
}
var bl;
function qf() {
  return (
    bl ||
      ((bl = 1),
      (function (s) {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          Pi.__exportStar(tb(), s);
      })(fc)),
    fc
  );
}
var wl;
function rb() {
  if (wl) return Vn;
  (wl = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn.HeartBeat = void 0);
  const s = Pi,
    t = sr,
    r = ue,
    n = Mf(),
    a = qf();
  class h extends n.IHeartBeat {
    constructor(w) {
      super(w),
        (this.events = new t.EventEmitter()),
        (this.interval = a.HEARTBEAT_INTERVAL),
        (this.interval =
          (w == null ? void 0 : w.interval) || a.HEARTBEAT_INTERVAL);
    }
    static init(w) {
      return s.__awaiter(this, void 0, void 0, function* () {
        const S = new h(w);
        return yield S.init(), S;
      });
    }
    init() {
      return s.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(w, S) {
      this.events.on(w, S);
    }
    once(w, S) {
      this.events.once(w, S);
    }
    off(w, S) {
      this.events.off(w, S);
    }
    removeListener(w, S) {
      this.events.removeListener(w, S);
    }
    initialize() {
      return s.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          r.toMiliseconds(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(a.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (Vn.HeartBeat = h), Vn;
}
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  const t = Pi;
  t.__exportStar(rb(), s), t.__exportStar(Mf(), s), t.__exportStar(qf(), s);
})(_n);
var Re = {},
  dc,
  _l;
function ib() {
  if (_l) return dc;
  _l = 1;
  function s(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  dc = t;
  function t(r, n, a) {
    var h = (a && a.stringify) || s,
      d = 1;
    if (typeof r == "object" && r !== null) {
      var w = n.length + d;
      if (w === 1) return r;
      var S = new Array(w);
      S[0] = h(r);
      for (var $ = 1; $ < w; $++) S[$] = h(n[$]);
      return S.join(" ");
    }
    if (typeof r != "string") return r;
    var A = n.length;
    if (A === 0) return r;
    for (
      var U = "", G = 1 - d, J = -1, H = (r && r.length) || 0, Q = 0;
      Q < H;

    ) {
      if (r.charCodeAt(Q) === 37 && Q + 1 < H) {
        switch (((J = J > -1 ? J : 0), r.charCodeAt(Q + 1))) {
          case 100:
          case 102:
            if (G >= A || n[G] == null) break;
            J < Q && (U += r.slice(J, Q)),
              (U += Number(n[G])),
              (J = Q + 2),
              Q++;
            break;
          case 105:
            if (G >= A || n[G] == null) break;
            J < Q && (U += r.slice(J, Q)),
              (U += Math.floor(Number(n[G]))),
              (J = Q + 2),
              Q++;
            break;
          case 79:
          case 111:
          case 106:
            if (G >= A || n[G] === void 0) break;
            J < Q && (U += r.slice(J, Q));
            var oe = typeof n[G];
            if (oe === "string") {
              (U += "'" + n[G] + "'"), (J = Q + 2), Q++;
              break;
            }
            if (oe === "function") {
              (U += n[G].name || "<anonymous>"), (J = Q + 2), Q++;
              break;
            }
            (U += h(n[G])), (J = Q + 2), Q++;
            break;
          case 115:
            if (G >= A) break;
            J < Q && (U += r.slice(J, Q)),
              (U += String(n[G])),
              (J = Q + 2),
              Q++;
            break;
          case 37:
            J < Q && (U += r.slice(J, Q)), (U += "%"), (J = Q + 2), Q++, G--;
            break;
        }
        ++G;
      }
      ++Q;
    }
    return J === -1 ? r : (J < H && (U += r.slice(J)), U);
  }
  return dc;
}
var pc, El;
function nb() {
  if (El) return pc;
  El = 1;
  const s = ib();
  pc = a;
  const t = v().console || {},
    r = {
      mapHttpRequest: H,
      mapHttpResponse: H,
      wrapRequestSerializer: Q,
      wrapResponseSerializer: Q,
      wrapErrorSerializer: Q,
      req: H,
      res: H,
      err: G,
    };
  function n(g, R) {
    return Array.isArray(g)
      ? g.filter(function (X) {
          return X !== "!stdSerializers.err";
        })
      : g === !0
      ? Object.keys(R)
      : !1;
  }
  function a(g) {
    (g = g || {}), (g.browser = g.browser || {});
    const R = g.browser.transmit;
    if (R && typeof R.send != "function")
      throw Error("pino: transmit option must have a send function");
    const P = g.browser.write || t;
    g.browser.write && (g.browser.asObject = !0);
    const X = g.serializers || {},
      se = n(g.browser.serialize, X);
    let ge = g.browser.serialize;
    Array.isArray(g.browser.serialize) &&
      g.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
      (ge = !1);
    const Ne = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof P == "function" &&
      (P.error = P.fatal = P.warn = P.info = P.debug = P.trace = P),
      g.enabled === !1 && (g.level = "silent");
    const qe = g.level || "info",
      E = Object.create(P);
    E.log || (E.log = oe),
      Object.defineProperty(E, "levelVal", { get: ie }),
      Object.defineProperty(E, "level", { get: de, set: Y });
    const T = {
      transmit: R,
      serialize: se,
      asObject: g.browser.asObject,
      levels: Ne,
      timestamp: J(g),
    };
    (E.levels = a.levels),
      (E.level = qe),
      (E.setMaxListeners =
        E.getMaxListeners =
        E.emit =
        E.addListener =
        E.on =
        E.prependListener =
        E.once =
        E.prependOnceListener =
        E.removeListener =
        E.removeAllListeners =
        E.listeners =
        E.listenerCount =
        E.eventNames =
        E.write =
        E.flush =
          oe),
      (E.serializers = X),
      (E._serialize = se),
      (E._stdErrSerialize = ge),
      (E.child = V),
      R && (E._logEvent = U());
    function ie() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function de() {
      return this._level;
    }
    function Y(W) {
      if (W !== "silent" && !this.levels.values[W])
        throw Error("unknown level " + W);
      (this._level = W),
        h(T, E, "error", "log"),
        h(T, E, "fatal", "error"),
        h(T, E, "warn", "error"),
        h(T, E, "info", "log"),
        h(T, E, "debug", "log"),
        h(T, E, "trace", "log");
    }
    function V(W, Z) {
      if (!W) throw new Error("missing bindings for child Pino");
      (Z = Z || {}), se && W.serializers && (Z.serializers = W.serializers);
      const Je = Z.serializers;
      if (se && Je) {
        var He = Object.assign({}, X, Je),
          zr = g.browser.serialize === !0 ? Object.keys(He) : se;
        delete W.serializers, S([W], zr, He, this._stdErrSerialize);
      }
      function Ie(It) {
        (this._childLevel = (It._childLevel | 0) + 1),
          (this.error = $(It, W, "error")),
          (this.fatal = $(It, W, "fatal")),
          (this.warn = $(It, W, "warn")),
          (this.info = $(It, W, "info")),
          (this.debug = $(It, W, "debug")),
          (this.trace = $(It, W, "trace")),
          He && ((this.serializers = He), (this._serialize = zr)),
          R && (this._logEvent = U([].concat(It._logEvent.bindings, W)));
      }
      return (Ie.prototype = this), new Ie(this);
    }
    return E;
  }
  (a.levels = {
    values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal",
    },
  }),
    (a.stdSerializers = r),
    (a.stdTimeFunctions = Object.assign(
      {},
      { nullTime: pe, epochTime: f, unixTime: m, isoTime: b }
    ));
  function h(g, R, P, X) {
    const se = Object.getPrototypeOf(R);
    (R[P] =
      R.levelVal > R.levels.values[P]
        ? oe
        : se[P]
        ? se[P]
        : t[P] || t[X] || oe),
      d(g, R, P);
  }
  function d(g, R, P) {
    (!g.transmit && R[P] === oe) ||
      (R[P] = (function (X) {
        return function () {
          const ge = g.timestamp(),
            Ne = new Array(arguments.length),
            qe =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === t
                ? t
                : this;
          for (var E = 0; E < Ne.length; E++) Ne[E] = arguments[E];
          if (
            (g.serialize &&
              !g.asObject &&
              S(Ne, this._serialize, this.serializers, this._stdErrSerialize),
            g.asObject ? X.call(qe, w(this, P, Ne, ge)) : X.apply(qe, Ne),
            g.transmit)
          ) {
            const T = g.transmit.level || R.level,
              ie = a.levels.values[T],
              de = a.levels.values[P];
            if (de < ie) return;
            A(
              this,
              {
                ts: ge,
                methodLevel: P,
                methodValue: de,
                transmitLevel: T,
                transmitValue: a.levels.values[g.transmit.level || R.level],
                send: g.transmit.send,
                val: R.levelVal,
              },
              Ne
            );
          }
        };
      })(R[P]));
  }
  function w(g, R, P, X) {
    g._serialize && S(P, g._serialize, g.serializers, g._stdErrSerialize);
    const se = P.slice();
    let ge = se[0];
    const Ne = {};
    X && (Ne.time = X), (Ne.level = a.levels.values[R]);
    let qe = (g._childLevel | 0) + 1;
    if ((qe < 1 && (qe = 1), ge !== null && typeof ge == "object")) {
      for (; qe-- && typeof se[0] == "object"; ) Object.assign(Ne, se.shift());
      ge = se.length ? s(se.shift(), se) : void 0;
    } else typeof ge == "string" && (ge = s(se.shift(), se));
    return ge !== void 0 && (Ne.msg = ge), Ne;
  }
  function S(g, R, P, X) {
    for (const se in g)
      if (X && g[se] instanceof Error) g[se] = a.stdSerializers.err(g[se]);
      else if (typeof g[se] == "object" && !Array.isArray(g[se]))
        for (const ge in g[se])
          R && R.indexOf(ge) > -1 && ge in P && (g[se][ge] = P[ge](g[se][ge]));
  }
  function $(g, R, P) {
    return function () {
      const X = new Array(1 + arguments.length);
      X[0] = R;
      for (var se = 1; se < X.length; se++) X[se] = arguments[se - 1];
      return g[P].apply(this, X);
    };
  }
  function A(g, R, P) {
    const X = R.send,
      se = R.ts,
      ge = R.methodLevel,
      Ne = R.methodValue,
      qe = R.val,
      E = g._logEvent.bindings;
    S(
      P,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ),
      (g._logEvent.ts = se),
      (g._logEvent.messages = P.filter(function (T) {
        return E.indexOf(T) === -1;
      })),
      (g._logEvent.level.label = ge),
      (g._logEvent.level.value = Ne),
      X(ge, g._logEvent, qe),
      (g._logEvent = U(E));
  }
  function U(g) {
    return {
      ts: 0,
      messages: [],
      bindings: g || [],
      level: { label: "", value: 0 },
    };
  }
  function G(g) {
    const R = { type: g.constructor.name, msg: g.message, stack: g.stack };
    for (const P in g) R[P] === void 0 && (R[P] = g[P]);
    return R;
  }
  function J(g) {
    return typeof g.timestamp == "function"
      ? g.timestamp
      : g.timestamp === !1
      ? pe
      : f;
  }
  function H() {
    return {};
  }
  function Q(g) {
    return g;
  }
  function oe() {}
  function pe() {
    return !1;
  }
  function f() {
    return Date.now();
  }
  function m() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function v() {
    function g(R) {
      return typeof R < "u" && R;
    }
    try {
      return (
        typeof globalThis < "u" ||
          Object.defineProperty(Object.prototype, "globalThis", {
            get: function () {
              return (
                delete Object.prototype.globalThis, (this.globalThis = this)
              );
            },
            configurable: !0,
          }),
        globalThis
      );
    } catch {
      return g(self) || g(window) || g(this) || {};
    }
  }
  return pc;
}
var Bi = {},
  Il;
function zf() {
  return (
    Il ||
      ((Il = 1),
      Object.defineProperty(Bi, "__esModule", { value: !0 }),
      (Bi.PINO_CUSTOM_CONTEXT_KEY = Bi.PINO_LOGGER_DEFAULTS = void 0),
      (Bi.PINO_LOGGER_DEFAULTS = { level: "info" }),
      (Bi.PINO_CUSTOM_CONTEXT_KEY = "custom_context")),
    Bi
  );
}
var tr = {},
  Sl;
function sb() {
  if (Sl) return tr;
  (Sl = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.generateChildLogger =
      tr.formatChildLoggerContext =
      tr.getLoggerContext =
      tr.setBrowserLoggerContext =
      tr.getBrowserLoggerContext =
      tr.getDefaultLoggerOptions =
        void 0);
  const s = zf();
  function t(w) {
    return Object.assign(Object.assign({}, w), {
      level: (w == null ? void 0 : w.level) || s.PINO_LOGGER_DEFAULTS.level,
    });
  }
  tr.getDefaultLoggerOptions = t;
  function r(w, S = s.PINO_CUSTOM_CONTEXT_KEY) {
    return w[S] || "";
  }
  tr.getBrowserLoggerContext = r;
  function n(w, S, $ = s.PINO_CUSTOM_CONTEXT_KEY) {
    return (w[$] = S), w;
  }
  tr.setBrowserLoggerContext = n;
  function a(w, S = s.PINO_CUSTOM_CONTEXT_KEY) {
    let $ = "";
    return (
      typeof w.bindings > "u"
        ? ($ = r(w, S))
        : ($ = w.bindings().context || ""),
      $
    );
  }
  tr.getLoggerContext = a;
  function h(w, S, $ = s.PINO_CUSTOM_CONTEXT_KEY) {
    const A = a(w, $);
    return A.trim() ? `${A}/${S}` : S;
  }
  tr.formatChildLoggerContext = h;
  function d(w, S, $ = s.PINO_CUSTOM_CONTEXT_KEY) {
    const A = h(w, S, $),
      U = w.child({ context: A });
    return n(U, A, $);
  }
  return (tr.generateChildLogger = d), tr;
}
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), (s.pino = void 0);
  const t = Pi,
    r = t.__importDefault(nb());
  Object.defineProperty(s, "pino", {
    enumerable: !0,
    get: function () {
      return r.default;
    },
  }),
    t.__exportStar(zf(), s),
    t.__exportStar(sb(), s);
})(Re);
class ob extends Ki {
  constructor(t) {
    super(), (this.opts = t), (this.protocol = "wc"), (this.version = 2);
  }
}
let ab = class extends Ki {
  constructor(t, r) {
    super(), (this.core = t), (this.logger = r), (this.records = new Map());
  }
};
class cb {
  constructor(t, r) {
    (this.logger = t), (this.core = r);
  }
}
let ub = class extends Ki {
    constructor(t, r) {
      super(), (this.relayer = t), (this.logger = r);
    }
  },
  hb = class extends Ki {
    constructor(t) {
      super();
    }
  },
  lb = class {
    constructor(t, r, n, a) {
      (this.core = t), (this.logger = r), (this.name = n);
    }
  };
class fb extends Ki {
  constructor(t, r) {
    super(), (this.relayer = t), (this.logger = r);
  }
}
let db = class extends Ki {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r);
    }
  },
  pb = class {
    constructor(t, r) {
      (this.projectId = t), (this.logger = r);
    }
  },
  gb = class {
    constructor(t) {
      (this.opts = t), (this.protocol = "wc"), (this.version = 2);
    }
  },
  yb = class {
    constructor(t) {
      this.client = t;
    }
  };
const mb = (s) =>
    JSON.stringify(s, (t, r) =>
      typeof r == "bigint" ? r.toString() + "n" : r
    ),
  vb = (s) => {
    const t =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      r = s.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (n, a) =>
      typeof a == "string" && a.match(/^\d+n$/)
        ? BigInt(a.substring(0, a.length - 1))
        : a
    );
  };
function Bc(s) {
  if (typeof s != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof s}`);
  try {
    return vb(s);
  } catch {
    return s;
  }
}
function is(s) {
  return typeof s == "string" ? s : mb(s) || "";
}
var Vc = {},
  kf = {};
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  var t = v1,
    r = Nf;
  (s.DIGEST_LENGTH = 64), (s.BLOCK_SIZE = 128);
  var n = (function () {
    function w() {
      (this.digestLength = s.DIGEST_LENGTH),
        (this.blockSize = s.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (w.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (w.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (w.prototype.clean = function () {
        r.wipe(this._buffer),
          r.wipe(this._tempHi),
          r.wipe(this._tempLo),
          this.reset();
      }),
      (w.prototype.update = function (S, $) {
        if (($ === void 0 && ($ = S.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var A = 0;
        if (((this._bytesHashed += $), this._bufferLength > 0)) {
          for (; this._bufferLength < s.BLOCK_SIZE && $ > 0; )
            (this._buffer[this._bufferLength++] = S[A++]), $--;
          this._bufferLength === this.blockSize &&
            (h(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          $ >= this.blockSize &&
          ((A = h(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            S,
            A,
            $
          )),
          ($ %= this.blockSize));
          $ > 0;

        )
          (this._buffer[this._bufferLength++] = S[A++]), $--;
        return this;
      }),
      (w.prototype.finish = function (S) {
        if (!this._finished) {
          var $ = this._bytesHashed,
            A = this._bufferLength,
            U = ($ / 536870912) | 0,
            G = $ << 3,
            J = $ % 128 < 112 ? 128 : 256;
          this._buffer[A] = 128;
          for (var H = A + 1; H < J - 8; H++) this._buffer[H] = 0;
          t.writeUint32BE(U, this._buffer, J - 8),
            t.writeUint32BE(G, this._buffer, J - 4),
            h(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              J
            ),
            (this._finished = !0);
        }
        for (var H = 0; H < this.digestLength / 8; H++)
          t.writeUint32BE(this._stateHi[H], S, H * 8),
            t.writeUint32BE(this._stateLo[H], S, H * 8 + 4);
        return this;
      }),
      (w.prototype.digest = function () {
        var S = new Uint8Array(this.digestLength);
        return this.finish(S), S;
      }),
      (w.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (w.prototype.restoreState = function (S) {
        return (
          this._stateHi.set(S.stateHi),
          this._stateLo.set(S.stateLo),
          (this._bufferLength = S.bufferLength),
          S.buffer && this._buffer.set(S.buffer),
          (this._bytesHashed = S.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (w.prototype.cleanSavedState = function (S) {
        r.wipe(S.stateHi),
          r.wipe(S.stateLo),
          S.buffer && r.wipe(S.buffer),
          (S.bufferLength = 0),
          (S.bytesHashed = 0);
      }),
      w
    );
  })();
  s.SHA512 = n;
  var a = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function h(w, S, $, A, U, G, J) {
    for (
      var H = $[0],
        Q = $[1],
        oe = $[2],
        pe = $[3],
        f = $[4],
        m = $[5],
        b = $[6],
        v = $[7],
        g = A[0],
        R = A[1],
        P = A[2],
        X = A[3],
        se = A[4],
        ge = A[5],
        Ne = A[6],
        qe = A[7],
        E,
        T,
        ie,
        de,
        Y,
        V,
        W,
        Z;
      J >= 128;

    ) {
      for (var Je = 0; Je < 16; Je++) {
        var He = 8 * Je + G;
        (w[Je] = t.readUint32BE(U, He)), (S[Je] = t.readUint32BE(U, He + 4));
      }
      for (var Je = 0; Je < 80; Je++) {
        var zr = H,
          Ie = Q,
          It = oe,
          M = pe,
          L = f,
          F = m,
          u = b,
          O = v,
          ae = g,
          ye = R,
          _e = P,
          Ce = X,
          De = se,
          Pe = ge,
          St = Ne,
          mt = qe;
        if (
          ((E = v),
          (T = qe),
          (Y = T & 65535),
          (V = T >>> 16),
          (W = E & 65535),
          (Z = E >>> 16),
          (E =
            ((f >>> 14) | (se << (32 - 14))) ^
            ((f >>> 18) | (se << (32 - 18))) ^
            ((se >>> (41 - 32)) | (f << (32 - (41 - 32))))),
          (T =
            ((se >>> 14) | (f << (32 - 14))) ^
            ((se >>> 18) | (f << (32 - 18))) ^
            ((f >>> (41 - 32)) | (se << (32 - (41 - 32))))),
          (Y += T & 65535),
          (V += T >>> 16),
          (W += E & 65535),
          (Z += E >>> 16),
          (E = (f & m) ^ (~f & b)),
          (T = (se & ge) ^ (~se & Ne)),
          (Y += T & 65535),
          (V += T >>> 16),
          (W += E & 65535),
          (Z += E >>> 16),
          (E = a[Je * 2]),
          (T = a[Je * 2 + 1]),
          (Y += T & 65535),
          (V += T >>> 16),
          (W += E & 65535),
          (Z += E >>> 16),
          (E = w[Je % 16]),
          (T = S[Je % 16]),
          (Y += T & 65535),
          (V += T >>> 16),
          (W += E & 65535),
          (Z += E >>> 16),
          (V += Y >>> 16),
          (W += V >>> 16),
          (Z += W >>> 16),
          (ie = (W & 65535) | (Z << 16)),
          (de = (Y & 65535) | (V << 16)),
          (E = ie),
          (T = de),
          (Y = T & 65535),
          (V = T >>> 16),
          (W = E & 65535),
          (Z = E >>> 16),
          (E =
            ((H >>> 28) | (g << (32 - 28))) ^
            ((g >>> (34 - 32)) | (H << (32 - (34 - 32)))) ^
            ((g >>> (39 - 32)) | (H << (32 - (39 - 32))))),
          (T =
            ((g >>> 28) | (H << (32 - 28))) ^
            ((H >>> (34 - 32)) | (g << (32 - (34 - 32)))) ^
            ((H >>> (39 - 32)) | (g << (32 - (39 - 32))))),
          (Y += T & 65535),
          (V += T >>> 16),
          (W += E & 65535),
          (Z += E >>> 16),
          (E = (H & Q) ^ (H & oe) ^ (Q & oe)),
          (T = (g & R) ^ (g & P) ^ (R & P)),
          (Y += T & 65535),
          (V += T >>> 16),
          (W += E & 65535),
          (Z += E >>> 16),
          (V += Y >>> 16),
          (W += V >>> 16),
          (Z += W >>> 16),
          (O = (W & 65535) | (Z << 16)),
          (mt = (Y & 65535) | (V << 16)),
          (E = M),
          (T = Ce),
          (Y = T & 65535),
          (V = T >>> 16),
          (W = E & 65535),
          (Z = E >>> 16),
          (E = ie),
          (T = de),
          (Y += T & 65535),
          (V += T >>> 16),
          (W += E & 65535),
          (Z += E >>> 16),
          (V += Y >>> 16),
          (W += V >>> 16),
          (Z += W >>> 16),
          (M = (W & 65535) | (Z << 16)),
          (Ce = (Y & 65535) | (V << 16)),
          (Q = zr),
          (oe = Ie),
          (pe = It),
          (f = M),
          (m = L),
          (b = F),
          (v = u),
          (H = O),
          (R = ae),
          (P = ye),
          (X = _e),
          (se = Ce),
          (ge = De),
          (Ne = Pe),
          (qe = St),
          (g = mt),
          Je % 16 === 15)
        )
          for (var He = 0; He < 16; He++)
            (E = w[He]),
              (T = S[He]),
              (Y = T & 65535),
              (V = T >>> 16),
              (W = E & 65535),
              (Z = E >>> 16),
              (E = w[(He + 9) % 16]),
              (T = S[(He + 9) % 16]),
              (Y += T & 65535),
              (V += T >>> 16),
              (W += E & 65535),
              (Z += E >>> 16),
              (ie = w[(He + 1) % 16]),
              (de = S[(He + 1) % 16]),
              (E =
                ((ie >>> 1) | (de << (32 - 1))) ^
                ((ie >>> 8) | (de << (32 - 8))) ^
                (ie >>> 7)),
              (T =
                ((de >>> 1) | (ie << (32 - 1))) ^
                ((de >>> 8) | (ie << (32 - 8))) ^
                ((de >>> 7) | (ie << (32 - 7)))),
              (Y += T & 65535),
              (V += T >>> 16),
              (W += E & 65535),
              (Z += E >>> 16),
              (ie = w[(He + 14) % 16]),
              (de = S[(He + 14) % 16]),
              (E =
                ((ie >>> 19) | (de << (32 - 19))) ^
                ((de >>> (61 - 32)) | (ie << (32 - (61 - 32)))) ^
                (ie >>> 6)),
              (T =
                ((de >>> 19) | (ie << (32 - 19))) ^
                ((ie >>> (61 - 32)) | (de << (32 - (61 - 32)))) ^
                ((de >>> 6) | (ie << (32 - 6)))),
              (Y += T & 65535),
              (V += T >>> 16),
              (W += E & 65535),
              (Z += E >>> 16),
              (V += Y >>> 16),
              (W += V >>> 16),
              (Z += W >>> 16),
              (w[He] = (W & 65535) | (Z << 16)),
              (S[He] = (Y & 65535) | (V << 16));
      }
      (E = H),
        (T = g),
        (Y = T & 65535),
        (V = T >>> 16),
        (W = E & 65535),
        (Z = E >>> 16),
        (E = $[0]),
        (T = A[0]),
        (Y += T & 65535),
        (V += T >>> 16),
        (W += E & 65535),
        (Z += E >>> 16),
        (V += Y >>> 16),
        (W += V >>> 16),
        (Z += W >>> 16),
        ($[0] = H = (W & 65535) | (Z << 16)),
        (A[0] = g = (Y & 65535) | (V << 16)),
        (E = Q),
        (T = R),
        (Y = T & 65535),
        (V = T >>> 16),
        (W = E & 65535),
        (Z = E >>> 16),
        (E = $[1]),
        (T = A[1]),
        (Y += T & 65535),
        (V += T >>> 16),
        (W += E & 65535),
        (Z += E >>> 16),
        (V += Y >>> 16),
        (W += V >>> 16),
        (Z += W >>> 16),
        ($[1] = Q = (W & 65535) | (Z << 16)),
        (A[1] = R = (Y & 65535) | (V << 16)),
        (E = oe),
        (T = P),
        (Y = T & 65535),
        (V = T >>> 16),
        (W = E & 65535),
        (Z = E >>> 16),
        (E = $[2]),
        (T = A[2]),
        (Y += T & 65535),
        (V += T >>> 16),
        (W += E & 65535),
        (Z += E >>> 16),
        (V += Y >>> 16),
        (W += V >>> 16),
        (Z += W >>> 16),
        ($[2] = oe = (W & 65535) | (Z << 16)),
        (A[2] = P = (Y & 65535) | (V << 16)),
        (E = pe),
        (T = X),
        (Y = T & 65535),
        (V = T >>> 16),
        (W = E & 65535),
        (Z = E >>> 16),
        (E = $[3]),
        (T = A[3]),
        (Y += T & 65535),
        (V += T >>> 16),
        (W += E & 65535),
        (Z += E >>> 16),
        (V += Y >>> 16),
        (W += V >>> 16),
        (Z += W >>> 16),
        ($[3] = pe = (W & 65535) | (Z << 16)),
        (A[3] = X = (Y & 65535) | (V << 16)),
        (E = f),
        (T = se),
        (Y = T & 65535),
        (V = T >>> 16),
        (W = E & 65535),
        (Z = E >>> 16),
        (E = $[4]),
        (T = A[4]),
        (Y += T & 65535),
        (V += T >>> 16),
        (W += E & 65535),
        (Z += E >>> 16),
        (V += Y >>> 16),
        (W += V >>> 16),
        (Z += W >>> 16),
        ($[4] = f = (W & 65535) | (Z << 16)),
        (A[4] = se = (Y & 65535) | (V << 16)),
        (E = m),
        (T = ge),
        (Y = T & 65535),
        (V = T >>> 16),
        (W = E & 65535),
        (Z = E >>> 16),
        (E = $[5]),
        (T = A[5]),
        (Y += T & 65535),
        (V += T >>> 16),
        (W += E & 65535),
        (Z += E >>> 16),
        (V += Y >>> 16),
        (W += V >>> 16),
        (Z += W >>> 16),
        ($[5] = m = (W & 65535) | (Z << 16)),
        (A[5] = ge = (Y & 65535) | (V << 16)),
        (E = b),
        (T = Ne),
        (Y = T & 65535),
        (V = T >>> 16),
        (W = E & 65535),
        (Z = E >>> 16),
        (E = $[6]),
        (T = A[6]),
        (Y += T & 65535),
        (V += T >>> 16),
        (W += E & 65535),
        (Z += E >>> 16),
        (V += Y >>> 16),
        (W += V >>> 16),
        (Z += W >>> 16),
        ($[6] = b = (W & 65535) | (Z << 16)),
        (A[6] = Ne = (Y & 65535) | (V << 16)),
        (E = v),
        (T = qe),
        (Y = T & 65535),
        (V = T >>> 16),
        (W = E & 65535),
        (Z = E >>> 16),
        (E = $[7]),
        (T = A[7]),
        (Y += T & 65535),
        (V += T >>> 16),
        (W += E & 65535),
        (Z += E >>> 16),
        (V += Y >>> 16),
        (W += V >>> 16),
        (Z += W >>> 16),
        ($[7] = v = (W & 65535) | (Z << 16)),
        (A[7] = qe = (Y & 65535) | (V << 16)),
        (G += 128),
        (J -= 128);
    }
    return G;
  }
  function d(w) {
    var S = new n();
    S.update(w);
    var $ = S.digest();
    return S.clean(), $;
  }
  s.hash = d;
})(kf);
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 }),
    (s.convertSecretKeyToX25519 =
      s.convertPublicKeyToX25519 =
      s.verify =
      s.sign =
      s.extractPublicKeyFromSecretKey =
      s.generateKeyPair =
      s.generateKeyPairFromSeed =
      s.SEED_LENGTH =
      s.SECRET_KEY_LENGTH =
      s.PUBLIC_KEY_LENGTH =
      s.SIGNATURE_LENGTH =
        void 0);
  const t = No,
    r = kf,
    n = Nf;
  (s.SIGNATURE_LENGTH = 64),
    (s.PUBLIC_KEY_LENGTH = 32),
    (s.SECRET_KEY_LENGTH = 64),
    (s.SEED_LENGTH = 32);
  function a(M) {
    const L = new Float64Array(16);
    if (M) for (let F = 0; F < M.length; F++) L[F] = M[F];
    return L;
  }
  const h = new Uint8Array(32);
  h[0] = 9;
  const d = a(),
    w = a([1]),
    S = a([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    $ = a([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    A = a([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    U = a([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    G = a([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function J(M, L) {
    for (let F = 0; F < 16; F++) M[F] = L[F] | 0;
  }
  function H(M) {
    let L = 1;
    for (let F = 0; F < 16; F++) {
      let u = M[F] + L + 65535;
      (L = Math.floor(u / 65536)), (M[F] = u - L * 65536);
    }
    M[0] += L - 1 + 37 * (L - 1);
  }
  function Q(M, L, F) {
    const u = ~(F - 1);
    for (let O = 0; O < 16; O++) {
      const ae = u & (M[O] ^ L[O]);
      (M[O] ^= ae), (L[O] ^= ae);
    }
  }
  function oe(M, L) {
    const F = a(),
      u = a();
    for (let O = 0; O < 16; O++) u[O] = L[O];
    H(u), H(u), H(u);
    for (let O = 0; O < 2; O++) {
      F[0] = u[0] - 65517;
      for (let ye = 1; ye < 15; ye++)
        (F[ye] = u[ye] - 65535 - ((F[ye - 1] >> 16) & 1)), (F[ye - 1] &= 65535);
      F[15] = u[15] - 32767 - ((F[14] >> 16) & 1);
      const ae = (F[15] >> 16) & 1;
      (F[14] &= 65535), Q(u, F, 1 - ae);
    }
    for (let O = 0; O < 16; O++)
      (M[2 * O] = u[O] & 255), (M[2 * O + 1] = u[O] >> 8);
  }
  function pe(M, L) {
    let F = 0;
    for (let u = 0; u < 32; u++) F |= M[u] ^ L[u];
    return (1 & ((F - 1) >>> 8)) - 1;
  }
  function f(M, L) {
    const F = new Uint8Array(32),
      u = new Uint8Array(32);
    return oe(F, M), oe(u, L), pe(F, u);
  }
  function m(M) {
    const L = new Uint8Array(32);
    return oe(L, M), L[0] & 1;
  }
  function b(M, L) {
    for (let F = 0; F < 16; F++) M[F] = L[2 * F] + (L[2 * F + 1] << 8);
    M[15] &= 32767;
  }
  function v(M, L, F) {
    for (let u = 0; u < 16; u++) M[u] = L[u] + F[u];
  }
  function g(M, L, F) {
    for (let u = 0; u < 16; u++) M[u] = L[u] - F[u];
  }
  function R(M, L, F) {
    let u,
      O,
      ae = 0,
      ye = 0,
      _e = 0,
      Ce = 0,
      De = 0,
      Pe = 0,
      St = 0,
      mt = 0,
      st = 0,
      Ue = 0,
      Ye = 0,
      Xe = 0,
      ot = 0,
      ze = 0,
      Ze = 0,
      $e = 0,
      Be = 0,
      ut = 0,
      Le = 0,
      xt = 0,
      Dt = 0,
      kt = 0,
      Ht = 0,
      jt = 0,
      Jt = 0,
      or = 0,
      kr = 0,
      Qt = 0,
      Qr = 0,
      di = 0,
      Ti = 0,
      ht = F[0],
      rt = F[1],
      lt = F[2],
      ft = F[3],
      at = F[4],
      it = F[5],
      Pt = F[6],
      Ot = F[7],
      dt = F[8],
      At = F[9],
      pt = F[10],
      vt = F[11],
      gt = F[12],
      Qe = F[13],
      Tt = F[14],
      Rt = F[15];
    (u = L[0]),
      (ae += u * ht),
      (ye += u * rt),
      (_e += u * lt),
      (Ce += u * ft),
      (De += u * at),
      (Pe += u * it),
      (St += u * Pt),
      (mt += u * Ot),
      (st += u * dt),
      (Ue += u * At),
      (Ye += u * pt),
      (Xe += u * vt),
      (ot += u * gt),
      (ze += u * Qe),
      (Ze += u * Tt),
      ($e += u * Rt),
      (u = L[1]),
      (ye += u * ht),
      (_e += u * rt),
      (Ce += u * lt),
      (De += u * ft),
      (Pe += u * at),
      (St += u * it),
      (mt += u * Pt),
      (st += u * Ot),
      (Ue += u * dt),
      (Ye += u * At),
      (Xe += u * pt),
      (ot += u * vt),
      (ze += u * gt),
      (Ze += u * Qe),
      ($e += u * Tt),
      (Be += u * Rt),
      (u = L[2]),
      (_e += u * ht),
      (Ce += u * rt),
      (De += u * lt),
      (Pe += u * ft),
      (St += u * at),
      (mt += u * it),
      (st += u * Pt),
      (Ue += u * Ot),
      (Ye += u * dt),
      (Xe += u * At),
      (ot += u * pt),
      (ze += u * vt),
      (Ze += u * gt),
      ($e += u * Qe),
      (Be += u * Tt),
      (ut += u * Rt),
      (u = L[3]),
      (Ce += u * ht),
      (De += u * rt),
      (Pe += u * lt),
      (St += u * ft),
      (mt += u * at),
      (st += u * it),
      (Ue += u * Pt),
      (Ye += u * Ot),
      (Xe += u * dt),
      (ot += u * At),
      (ze += u * pt),
      (Ze += u * vt),
      ($e += u * gt),
      (Be += u * Qe),
      (ut += u * Tt),
      (Le += u * Rt),
      (u = L[4]),
      (De += u * ht),
      (Pe += u * rt),
      (St += u * lt),
      (mt += u * ft),
      (st += u * at),
      (Ue += u * it),
      (Ye += u * Pt),
      (Xe += u * Ot),
      (ot += u * dt),
      (ze += u * At),
      (Ze += u * pt),
      ($e += u * vt),
      (Be += u * gt),
      (ut += u * Qe),
      (Le += u * Tt),
      (xt += u * Rt),
      (u = L[5]),
      (Pe += u * ht),
      (St += u * rt),
      (mt += u * lt),
      (st += u * ft),
      (Ue += u * at),
      (Ye += u * it),
      (Xe += u * Pt),
      (ot += u * Ot),
      (ze += u * dt),
      (Ze += u * At),
      ($e += u * pt),
      (Be += u * vt),
      (ut += u * gt),
      (Le += u * Qe),
      (xt += u * Tt),
      (Dt += u * Rt),
      (u = L[6]),
      (St += u * ht),
      (mt += u * rt),
      (st += u * lt),
      (Ue += u * ft),
      (Ye += u * at),
      (Xe += u * it),
      (ot += u * Pt),
      (ze += u * Ot),
      (Ze += u * dt),
      ($e += u * At),
      (Be += u * pt),
      (ut += u * vt),
      (Le += u * gt),
      (xt += u * Qe),
      (Dt += u * Tt),
      (kt += u * Rt),
      (u = L[7]),
      (mt += u * ht),
      (st += u * rt),
      (Ue += u * lt),
      (Ye += u * ft),
      (Xe += u * at),
      (ot += u * it),
      (ze += u * Pt),
      (Ze += u * Ot),
      ($e += u * dt),
      (Be += u * At),
      (ut += u * pt),
      (Le += u * vt),
      (xt += u * gt),
      (Dt += u * Qe),
      (kt += u * Tt),
      (Ht += u * Rt),
      (u = L[8]),
      (st += u * ht),
      (Ue += u * rt),
      (Ye += u * lt),
      (Xe += u * ft),
      (ot += u * at),
      (ze += u * it),
      (Ze += u * Pt),
      ($e += u * Ot),
      (Be += u * dt),
      (ut += u * At),
      (Le += u * pt),
      (xt += u * vt),
      (Dt += u * gt),
      (kt += u * Qe),
      (Ht += u * Tt),
      (jt += u * Rt),
      (u = L[9]),
      (Ue += u * ht),
      (Ye += u * rt),
      (Xe += u * lt),
      (ot += u * ft),
      (ze += u * at),
      (Ze += u * it),
      ($e += u * Pt),
      (Be += u * Ot),
      (ut += u * dt),
      (Le += u * At),
      (xt += u * pt),
      (Dt += u * vt),
      (kt += u * gt),
      (Ht += u * Qe),
      (jt += u * Tt),
      (Jt += u * Rt),
      (u = L[10]),
      (Ye += u * ht),
      (Xe += u * rt),
      (ot += u * lt),
      (ze += u * ft),
      (Ze += u * at),
      ($e += u * it),
      (Be += u * Pt),
      (ut += u * Ot),
      (Le += u * dt),
      (xt += u * At),
      (Dt += u * pt),
      (kt += u * vt),
      (Ht += u * gt),
      (jt += u * Qe),
      (Jt += u * Tt),
      (or += u * Rt),
      (u = L[11]),
      (Xe += u * ht),
      (ot += u * rt),
      (ze += u * lt),
      (Ze += u * ft),
      ($e += u * at),
      (Be += u * it),
      (ut += u * Pt),
      (Le += u * Ot),
      (xt += u * dt),
      (Dt += u * At),
      (kt += u * pt),
      (Ht += u * vt),
      (jt += u * gt),
      (Jt += u * Qe),
      (or += u * Tt),
      (kr += u * Rt),
      (u = L[12]),
      (ot += u * ht),
      (ze += u * rt),
      (Ze += u * lt),
      ($e += u * ft),
      (Be += u * at),
      (ut += u * it),
      (Le += u * Pt),
      (xt += u * Ot),
      (Dt += u * dt),
      (kt += u * At),
      (Ht += u * pt),
      (jt += u * vt),
      (Jt += u * gt),
      (or += u * Qe),
      (kr += u * Tt),
      (Qt += u * Rt),
      (u = L[13]),
      (ze += u * ht),
      (Ze += u * rt),
      ($e += u * lt),
      (Be += u * ft),
      (ut += u * at),
      (Le += u * it),
      (xt += u * Pt),
      (Dt += u * Ot),
      (kt += u * dt),
      (Ht += u * At),
      (jt += u * pt),
      (Jt += u * vt),
      (or += u * gt),
      (kr += u * Qe),
      (Qt += u * Tt),
      (Qr += u * Rt),
      (u = L[14]),
      (Ze += u * ht),
      ($e += u * rt),
      (Be += u * lt),
      (ut += u * ft),
      (Le += u * at),
      (xt += u * it),
      (Dt += u * Pt),
      (kt += u * Ot),
      (Ht += u * dt),
      (jt += u * At),
      (Jt += u * pt),
      (or += u * vt),
      (kr += u * gt),
      (Qt += u * Qe),
      (Qr += u * Tt),
      (di += u * Rt),
      (u = L[15]),
      ($e += u * ht),
      (Be += u * rt),
      (ut += u * lt),
      (Le += u * ft),
      (xt += u * at),
      (Dt += u * it),
      (kt += u * Pt),
      (Ht += u * Ot),
      (jt += u * dt),
      (Jt += u * At),
      (or += u * pt),
      (kr += u * vt),
      (Qt += u * gt),
      (Qr += u * Qe),
      (di += u * Tt),
      (Ti += u * Rt),
      (ae += 38 * Be),
      (ye += 38 * ut),
      (_e += 38 * Le),
      (Ce += 38 * xt),
      (De += 38 * Dt),
      (Pe += 38 * kt),
      (St += 38 * Ht),
      (mt += 38 * jt),
      (st += 38 * Jt),
      (Ue += 38 * or),
      (Ye += 38 * kr),
      (Xe += 38 * Qt),
      (ot += 38 * Qr),
      (ze += 38 * di),
      (Ze += 38 * Ti),
      (O = 1),
      (u = ae + O + 65535),
      (O = Math.floor(u / 65536)),
      (ae = u - O * 65536),
      (u = ye + O + 65535),
      (O = Math.floor(u / 65536)),
      (ye = u - O * 65536),
      (u = _e + O + 65535),
      (O = Math.floor(u / 65536)),
      (_e = u - O * 65536),
      (u = Ce + O + 65535),
      (O = Math.floor(u / 65536)),
      (Ce = u - O * 65536),
      (u = De + O + 65535),
      (O = Math.floor(u / 65536)),
      (De = u - O * 65536),
      (u = Pe + O + 65535),
      (O = Math.floor(u / 65536)),
      (Pe = u - O * 65536),
      (u = St + O + 65535),
      (O = Math.floor(u / 65536)),
      (St = u - O * 65536),
      (u = mt + O + 65535),
      (O = Math.floor(u / 65536)),
      (mt = u - O * 65536),
      (u = st + O + 65535),
      (O = Math.floor(u / 65536)),
      (st = u - O * 65536),
      (u = Ue + O + 65535),
      (O = Math.floor(u / 65536)),
      (Ue = u - O * 65536),
      (u = Ye + O + 65535),
      (O = Math.floor(u / 65536)),
      (Ye = u - O * 65536),
      (u = Xe + O + 65535),
      (O = Math.floor(u / 65536)),
      (Xe = u - O * 65536),
      (u = ot + O + 65535),
      (O = Math.floor(u / 65536)),
      (ot = u - O * 65536),
      (u = ze + O + 65535),
      (O = Math.floor(u / 65536)),
      (ze = u - O * 65536),
      (u = Ze + O + 65535),
      (O = Math.floor(u / 65536)),
      (Ze = u - O * 65536),
      (u = $e + O + 65535),
      (O = Math.floor(u / 65536)),
      ($e = u - O * 65536),
      (ae += O - 1 + 37 * (O - 1)),
      (O = 1),
      (u = ae + O + 65535),
      (O = Math.floor(u / 65536)),
      (ae = u - O * 65536),
      (u = ye + O + 65535),
      (O = Math.floor(u / 65536)),
      (ye = u - O * 65536),
      (u = _e + O + 65535),
      (O = Math.floor(u / 65536)),
      (_e = u - O * 65536),
      (u = Ce + O + 65535),
      (O = Math.floor(u / 65536)),
      (Ce = u - O * 65536),
      (u = De + O + 65535),
      (O = Math.floor(u / 65536)),
      (De = u - O * 65536),
      (u = Pe + O + 65535),
      (O = Math.floor(u / 65536)),
      (Pe = u - O * 65536),
      (u = St + O + 65535),
      (O = Math.floor(u / 65536)),
      (St = u - O * 65536),
      (u = mt + O + 65535),
      (O = Math.floor(u / 65536)),
      (mt = u - O * 65536),
      (u = st + O + 65535),
      (O = Math.floor(u / 65536)),
      (st = u - O * 65536),
      (u = Ue + O + 65535),
      (O = Math.floor(u / 65536)),
      (Ue = u - O * 65536),
      (u = Ye + O + 65535),
      (O = Math.floor(u / 65536)),
      (Ye = u - O * 65536),
      (u = Xe + O + 65535),
      (O = Math.floor(u / 65536)),
      (Xe = u - O * 65536),
      (u = ot + O + 65535),
      (O = Math.floor(u / 65536)),
      (ot = u - O * 65536),
      (u = ze + O + 65535),
      (O = Math.floor(u / 65536)),
      (ze = u - O * 65536),
      (u = Ze + O + 65535),
      (O = Math.floor(u / 65536)),
      (Ze = u - O * 65536),
      (u = $e + O + 65535),
      (O = Math.floor(u / 65536)),
      ($e = u - O * 65536),
      (ae += O - 1 + 37 * (O - 1)),
      (M[0] = ae),
      (M[1] = ye),
      (M[2] = _e),
      (M[3] = Ce),
      (M[4] = De),
      (M[5] = Pe),
      (M[6] = St),
      (M[7] = mt),
      (M[8] = st),
      (M[9] = Ue),
      (M[10] = Ye),
      (M[11] = Xe),
      (M[12] = ot),
      (M[13] = ze),
      (M[14] = Ze),
      (M[15] = $e);
  }
  function P(M, L) {
    R(M, L, L);
  }
  function X(M, L) {
    const F = a();
    let u;
    for (u = 0; u < 16; u++) F[u] = L[u];
    for (u = 253; u >= 0; u--) P(F, F), u !== 2 && u !== 4 && R(F, F, L);
    for (u = 0; u < 16; u++) M[u] = F[u];
  }
  function se(M, L) {
    const F = a();
    let u;
    for (u = 0; u < 16; u++) F[u] = L[u];
    for (u = 250; u >= 0; u--) P(F, F), u !== 1 && R(F, F, L);
    for (u = 0; u < 16; u++) M[u] = F[u];
  }
  function ge(M, L) {
    const F = a(),
      u = a(),
      O = a(),
      ae = a(),
      ye = a(),
      _e = a(),
      Ce = a(),
      De = a(),
      Pe = a();
    g(F, M[1], M[0]),
      g(Pe, L[1], L[0]),
      R(F, F, Pe),
      v(u, M[0], M[1]),
      v(Pe, L[0], L[1]),
      R(u, u, Pe),
      R(O, M[3], L[3]),
      R(O, O, $),
      R(ae, M[2], L[2]),
      v(ae, ae, ae),
      g(ye, u, F),
      g(_e, ae, O),
      v(Ce, ae, O),
      v(De, u, F),
      R(M[0], ye, _e),
      R(M[1], De, Ce),
      R(M[2], Ce, _e),
      R(M[3], ye, De);
  }
  function Ne(M, L, F) {
    for (let u = 0; u < 4; u++) Q(M[u], L[u], F);
  }
  function qe(M, L) {
    const F = a(),
      u = a(),
      O = a();
    X(O, L[2]), R(F, L[0], O), R(u, L[1], O), oe(M, u), (M[31] ^= m(F) << 7);
  }
  function E(M, L, F) {
    J(M[0], d), J(M[1], w), J(M[2], w), J(M[3], d);
    for (let u = 255; u >= 0; --u) {
      const O = (F[(u / 8) | 0] >> (u & 7)) & 1;
      Ne(M, L, O), ge(L, M), ge(M, M), Ne(M, L, O);
    }
  }
  function T(M, L) {
    const F = [a(), a(), a(), a()];
    J(F[0], A), J(F[1], U), J(F[2], w), R(F[3], A, U), E(M, F, L);
  }
  function ie(M) {
    if (M.length !== s.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${s.SEED_LENGTH} bytes`);
    const L = (0, r.hash)(M);
    (L[0] &= 248), (L[31] &= 127), (L[31] |= 64);
    const F = new Uint8Array(32),
      u = [a(), a(), a(), a()];
    T(u, L), qe(F, u);
    const O = new Uint8Array(64);
    return O.set(M), O.set(F, 32), { publicKey: F, secretKey: O };
  }
  s.generateKeyPairFromSeed = ie;
  function de(M) {
    const L = (0, t.randomBytes)(32, M),
      F = ie(L);
    return (0, n.wipe)(L), F;
  }
  s.generateKeyPair = de;
  function Y(M) {
    if (M.length !== s.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${s.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(M.subarray(32));
  }
  s.extractPublicKeyFromSecretKey = Y;
  const V = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function W(M, L) {
    let F, u, O, ae;
    for (u = 63; u >= 32; --u) {
      for (F = 0, O = u - 32, ae = u - 12; O < ae; ++O)
        (L[O] += F - 16 * L[u] * V[O - (u - 32)]),
          (F = Math.floor((L[O] + 128) / 256)),
          (L[O] -= F * 256);
      (L[O] += F), (L[u] = 0);
    }
    for (F = 0, O = 0; O < 32; O++)
      (L[O] += F - (L[31] >> 4) * V[O]), (F = L[O] >> 8), (L[O] &= 255);
    for (O = 0; O < 32; O++) L[O] -= F * V[O];
    for (u = 0; u < 32; u++) (L[u + 1] += L[u] >> 8), (M[u] = L[u] & 255);
  }
  function Z(M) {
    const L = new Float64Array(64);
    for (let F = 0; F < 64; F++) L[F] = M[F];
    for (let F = 0; F < 64; F++) M[F] = 0;
    W(M, L);
  }
  function Je(M, L) {
    const F = new Float64Array(64),
      u = [a(), a(), a(), a()],
      O = (0, r.hash)(M.subarray(0, 32));
    (O[0] &= 248), (O[31] &= 127), (O[31] |= 64);
    const ae = new Uint8Array(64);
    ae.set(O.subarray(32), 32);
    const ye = new r.SHA512();
    ye.update(ae.subarray(32)), ye.update(L);
    const _e = ye.digest();
    ye.clean(),
      Z(_e),
      T(u, _e),
      qe(ae, u),
      ye.reset(),
      ye.update(ae.subarray(0, 32)),
      ye.update(M.subarray(32)),
      ye.update(L);
    const Ce = ye.digest();
    Z(Ce);
    for (let De = 0; De < 32; De++) F[De] = _e[De];
    for (let De = 0; De < 32; De++)
      for (let Pe = 0; Pe < 32; Pe++) F[De + Pe] += Ce[De] * O[Pe];
    return W(ae.subarray(32), F), ae;
  }
  s.sign = Je;
  function He(M, L) {
    const F = a(),
      u = a(),
      O = a(),
      ae = a(),
      ye = a(),
      _e = a(),
      Ce = a();
    return (
      J(M[2], w),
      b(M[1], L),
      P(O, M[1]),
      R(ae, O, S),
      g(O, O, M[2]),
      v(ae, M[2], ae),
      P(ye, ae),
      P(_e, ye),
      R(Ce, _e, ye),
      R(F, Ce, O),
      R(F, F, ae),
      se(F, F),
      R(F, F, O),
      R(F, F, ae),
      R(F, F, ae),
      R(M[0], F, ae),
      P(u, M[0]),
      R(u, u, ae),
      f(u, O) && R(M[0], M[0], G),
      P(u, M[0]),
      R(u, u, ae),
      f(u, O)
        ? -1
        : (m(M[0]) === L[31] >> 7 && g(M[0], d, M[0]), R(M[3], M[0], M[1]), 0)
    );
  }
  function zr(M, L, F) {
    const u = new Uint8Array(32),
      O = [a(), a(), a(), a()],
      ae = [a(), a(), a(), a()];
    if (F.length !== s.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${s.SIGNATURE_LENGTH} bytes`);
    if (He(ae, M)) return !1;
    const ye = new r.SHA512();
    ye.update(F.subarray(0, 32)), ye.update(M), ye.update(L);
    const _e = ye.digest();
    return (
      Z(_e), E(O, ae, _e), T(ae, F.subarray(32)), ge(O, ae), qe(u, O), !pe(F, u)
    );
  }
  s.verify = zr;
  function Ie(M) {
    let L = [a(), a(), a(), a()];
    if (He(L, M)) throw new Error("Ed25519: invalid public key");
    let F = a(),
      u = a(),
      O = L[1];
    v(F, w, O), g(u, w, O), X(u, u), R(F, F, u);
    let ae = new Uint8Array(32);
    return oe(ae, F), ae;
  }
  s.convertPublicKeyToX25519 = Ie;
  function It(M) {
    const L = (0, r.hash)(M.subarray(0, 32));
    (L[0] &= 248), (L[31] &= 127), (L[31] |= 64);
    const F = new Uint8Array(L.subarray(0, 32));
    return (0, n.wipe)(L), F;
  }
  s.convertSecretKeyToX25519 = It;
})(Vc);
const bb = "EdDSA",
  wb = "JWT",
  Hf = ".",
  Bf = "base64url",
  _b = "utf8",
  Eb = "utf8",
  Ib = ":",
  Sb = "did",
  xb = "key",
  xl = "base58btc",
  Pb = "z",
  Ob = "K36",
  Ab = 32;
function xo(s) {
  return nr(gr(is(s), _b), Bf);
}
function Vf(s) {
  const t = gr(Ob, xl),
    r = Pb + nr(Oc([t, s]), xl);
  return [Sb, xb, r].join(Ib);
}
function Tb(s) {
  return nr(s, Bf);
}
function Rb(s) {
  return gr([xo(s.header), xo(s.payload)].join(Hf), Eb);
}
function Nb(s) {
  return [xo(s.header), xo(s.payload), Tb(s.signature)].join(Hf);
}
function Pl(s = No.randomBytes(Ab)) {
  return Vc.generateKeyPairFromSeed(s);
}
async function Cb(s, t, r, n, a = ue.fromMiliseconds(Date.now())) {
  const h = { alg: bb, typ: wb },
    d = Vf(n.publicKey),
    w = a + r,
    S = { iss: d, sub: s, aud: t, iat: a, exp: w },
    $ = Rb({ header: h, payload: S }),
    A = Vc.sign(n.secretKey, $);
  return Nb({ header: h, payload: S, signature: A });
}
var ns = {};
(function (s) {
  const t = qc,
    r = zc,
    n = Lc,
    a = Mc,
    h = (f) => f == null,
    d = Symbol("encodeFragmentIdentifier");
  function w(f) {
    switch (f.arrayFormat) {
      case "index":
        return (m) => (b, v) => {
          const g = b.length;
          return v === void 0 ||
            (f.skipNull && v === null) ||
            (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), "[", g, "]"].join("")]
            : [...b, [A(m, f), "[", A(g, f), "]=", A(v, f)].join("")];
        };
      case "bracket":
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), "[]"].join("")]
            : [...b, [A(m, f), "[]=", A(v, f)].join("")];
      case "colon-list-separator":
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), ":list="].join("")]
            : [...b, [A(m, f), ":list=", A(v, f)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const m = f.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (v, g) =>
          g === void 0 ||
          (f.skipNull && g === null) ||
          (f.skipEmptyString && g === "")
            ? v
            : ((g = g === null ? "" : g),
              v.length === 0
                ? [[A(b, f), m, A(g, f)].join("")]
                : [[v, A(g, f)].join(f.arrayFormatSeparator)]);
      }
      default:
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, A(m, f)]
            : [...b, [A(m, f), "=", A(v, f)].join("")];
    }
  }
  function S(f) {
    let m;
    switch (f.arrayFormat) {
      case "index":
        return (b, v, g) => {
          if (
            ((m = /\[(\d*)\]$/.exec(b)), (b = b.replace(/\[\d*\]$/, "")), !m)
          ) {
            g[b] = v;
            return;
          }
          g[b] === void 0 && (g[b] = {}), (g[b][m[1]] = v);
        };
      case "bracket":
        return (b, v, g) => {
          if (((m = /(\[\])$/.exec(b)), (b = b.replace(/\[\]$/, "")), !m)) {
            g[b] = v;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [v];
            return;
          }
          g[b] = [].concat(g[b], v);
        };
      case "colon-list-separator":
        return (b, v, g) => {
          if (((m = /(:list)$/.exec(b)), (b = b.replace(/:list$/, "")), !m)) {
            g[b] = v;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [v];
            return;
          }
          g[b] = [].concat(g[b], v);
        };
      case "comma":
      case "separator":
        return (b, v, g) => {
          const R = typeof v == "string" && v.includes(f.arrayFormatSeparator),
            P =
              typeof v == "string" &&
              !R &&
              U(v, f).includes(f.arrayFormatSeparator);
          v = P ? U(v, f) : v;
          const X =
            R || P
              ? v.split(f.arrayFormatSeparator).map((se) => U(se, f))
              : v === null
              ? v
              : U(v, f);
          g[b] = X;
        };
      case "bracket-separator":
        return (b, v, g) => {
          const R = /(\[\])$/.test(b);
          if (((b = b.replace(/\[\]$/, "")), !R)) {
            g[b] = v && U(v, f);
            return;
          }
          const P =
            v === null
              ? []
              : v.split(f.arrayFormatSeparator).map((X) => U(X, f));
          if (g[b] === void 0) {
            g[b] = P;
            return;
          }
          g[b] = [].concat(g[b], P);
        };
      default:
        return (b, v, g) => {
          if (g[b] === void 0) {
            g[b] = v;
            return;
          }
          g[b] = [].concat(g[b], v);
        };
    }
  }
  function $(f) {
    if (typeof f != "string" || f.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function A(f, m) {
    return m.encode ? (m.strict ? t(f) : encodeURIComponent(f)) : f;
  }
  function U(f, m) {
    return m.decode ? r(f) : f;
  }
  function G(f) {
    return Array.isArray(f)
      ? f.sort()
      : typeof f == "object"
      ? G(Object.keys(f))
          .sort((m, b) => Number(m) - Number(b))
          .map((m) => f[m])
      : f;
  }
  function J(f) {
    const m = f.indexOf("#");
    return m !== -1 && (f = f.slice(0, m)), f;
  }
  function H(f) {
    let m = "";
    const b = f.indexOf("#");
    return b !== -1 && (m = f.slice(b)), m;
  }
  function Q(f) {
    f = J(f);
    const m = f.indexOf("?");
    return m === -1 ? "" : f.slice(m + 1);
  }
  function oe(f, m) {
    return (
      m.parseNumbers &&
      !Number.isNaN(Number(f)) &&
      typeof f == "string" &&
      f.trim() !== ""
        ? (f = Number(f))
        : m.parseBooleans &&
          f !== null &&
          (f.toLowerCase() === "true" || f.toLowerCase() === "false") &&
          (f = f.toLowerCase() === "true"),
      f
    );
  }
  function pe(f, m) {
    (m = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      m
    )),
      $(m.arrayFormatSeparator);
    const b = S(m),
      v = Object.create(null);
    if (typeof f != "string" || ((f = f.trim().replace(/^[?#&]/, "")), !f))
      return v;
    for (const g of f.split("&")) {
      if (g === "") continue;
      let [R, P] = n(m.decode ? g.replace(/\+/g, " ") : g, "=");
      (P =
        P === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(m.arrayFormat)
          ? P
          : U(P, m)),
        b(U(R, m), P, v);
    }
    for (const g of Object.keys(v)) {
      const R = v[g];
      if (typeof R == "object" && R !== null)
        for (const P of Object.keys(R)) R[P] = oe(R[P], m);
      else v[g] = oe(R, m);
    }
    return m.sort === !1
      ? v
      : (m.sort === !0
          ? Object.keys(v).sort()
          : Object.keys(v).sort(m.sort)
        ).reduce((g, R) => {
          const P = v[R];
          return (
            Boolean(P) && typeof P == "object" && !Array.isArray(P)
              ? (g[R] = G(P))
              : (g[R] = P),
            g
          );
        }, Object.create(null));
  }
  (s.extract = Q),
    (s.parse = pe),
    (s.stringify = (f, m) => {
      if (!f) return "";
      (m = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        m
      )),
        $(m.arrayFormatSeparator);
      const b = (P) =>
          (m.skipNull && h(f[P])) || (m.skipEmptyString && f[P] === ""),
        v = w(m),
        g = {};
      for (const P of Object.keys(f)) b(P) || (g[P] = f[P]);
      const R = Object.keys(g);
      return (
        m.sort !== !1 && R.sort(m.sort),
        R.map((P) => {
          const X = f[P];
          return X === void 0
            ? ""
            : X === null
            ? A(P, m)
            : Array.isArray(X)
            ? X.length === 0 && m.arrayFormat === "bracket-separator"
              ? A(P, m) + "[]"
              : X.reduce(v(P), []).join("&")
            : A(P, m) + "=" + A(X, m);
        })
          .filter((P) => P.length > 0)
          .join("&")
      );
    }),
    (s.parseUrl = (f, m) => {
      m = Object.assign({ decode: !0 }, m);
      const [b, v] = n(f, "#");
      return Object.assign(
        { url: b.split("?")[0] || "", query: pe(Q(f), m) },
        m && m.parseFragmentIdentifier && v
          ? { fragmentIdentifier: U(v, m) }
          : {}
      );
    }),
    (s.stringifyUrl = (f, m) => {
      m = Object.assign({ encode: !0, strict: !0, [d]: !0 }, m);
      const b = J(f.url).split("?")[0] || "",
        v = s.extract(f.url),
        g = s.parse(v, { sort: !1 }),
        R = Object.assign(g, f.query);
      let P = s.stringify(R, m);
      P && (P = `?${P}`);
      let X = H(f.url);
      return (
        f.fragmentIdentifier &&
          (X = `#${m[d] ? A(f.fragmentIdentifier, m) : f.fragmentIdentifier}`),
        `${b}${P}${X}`
      );
    }),
    (s.pick = (f, m, b) => {
      b = Object.assign({ parseFragmentIdentifier: !0, [d]: !1 }, b);
      const { url: v, query: g, fragmentIdentifier: R } = s.parseUrl(f, b);
      return s.stringifyUrl(
        { url: v, query: a(g, m), fragmentIdentifier: R },
        b
      );
    }),
    (s.exclude = (f, m, b) => {
      const v = Array.isArray(m) ? (g) => !m.includes(g) : (g, R) => !m(g, R);
      return s.pick(f, v, b);
    });
})(ns);
function Kf(s, t) {
  return s.includes(":") ? [s] : t.chains || [];
}
const Wf = "base10",
  ir = "base16",
  Tc = "base64pad",
  Kc = "utf8",
  Gf = 0,
  Wi = 1,
  $b = 0,
  Ol = 1,
  Rc = 12,
  Wc = 32;
function Db() {
  const s = $f.generateKeyPair();
  return { privateKey: nr(s.secretKey, ir), publicKey: nr(s.publicKey, ir) };
}
function Nc() {
  const s = No.randomBytes(Wc);
  return nr(s, ir);
}
function Fb(s, t) {
  const r = $f.sharedKey(gr(s, ir), gr(t, ir), !0),
    n = new _1(kc.SHA256, r).expand(Wc);
  return nr(n, ir);
}
function Ub(s) {
  const t = kc.hash(gr(s, ir));
  return nr(t, ir);
}
function bn(s) {
  const t = kc.hash(gr(s, Kc));
  return nr(t, ir);
}
function jb(s) {
  return gr(`${s}`, Wf);
}
function as(s) {
  return Number(nr(s, Wf));
}
function Lb(s) {
  const t = jb(typeof s.type < "u" ? s.type : Gf);
  if (as(t) === Wi && typeof s.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof s.senderPublicKey < "u" ? gr(s.senderPublicKey, ir) : void 0,
    n = typeof s.iv < "u" ? gr(s.iv, ir) : No.randomBytes(Rc),
    a = new Df.ChaCha20Poly1305(gr(s.symKey, ir)).seal(n, gr(s.message, Kc));
  return qb({ type: t, sealed: a, iv: n, senderPublicKey: r });
}
function Mb(s) {
  const t = new Df.ChaCha20Poly1305(gr(s.symKey, ir)),
    { sealed: r, iv: n } = Po(s.encoded),
    a = t.open(n, r);
  if (a === null) throw new Error("Failed to decrypt");
  return nr(a, Kc);
}
function qb(s) {
  if (as(s.type) === Wi) {
    if (typeof s.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return nr(Oc([s.type, s.senderPublicKey, s.iv, s.sealed]), Tc);
  }
  return nr(Oc([s.type, s.iv, s.sealed]), Tc);
}
function Po(s) {
  const t = gr(s, Tc),
    r = t.slice($b, Ol),
    n = Ol;
  if (as(r) === Wi) {
    const w = n + Wc,
      S = w + Rc,
      $ = t.slice(n, w),
      A = t.slice(w, S),
      U = t.slice(S);
    return { type: r, sealed: U, iv: A, senderPublicKey: $ };
  }
  const a = n + Rc,
    h = t.slice(n, a),
    d = t.slice(a);
  return { type: r, sealed: d, iv: h };
}
function zb(s, t) {
  const r = Po(s);
  return Jf({
    type: as(r.type),
    senderPublicKey:
      typeof r.senderPublicKey < "u" ? nr(r.senderPublicKey, ir) : void 0,
    receiverPublicKey: t == null ? void 0 : t.receiverPublicKey,
  });
}
function Jf(s) {
  const t = (s == null ? void 0 : s.type) || Gf;
  if (t === Wi) {
    if (typeof (s == null ? void 0 : s.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (s == null ? void 0 : s.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: t,
    senderPublicKey: s == null ? void 0 : s.senderPublicKey,
    receiverPublicKey: s == null ? void 0 : s.receiverPublicKey,
  };
}
function Al(s) {
  return (
    s.type === Wi &&
    typeof s.senderPublicKey == "string" &&
    typeof s.receiverPublicKey == "string"
  );
}
var kb = Object.defineProperty,
  Tl = Object.getOwnPropertySymbols,
  Hb = Object.prototype.hasOwnProperty,
  Bb = Object.prototype.propertyIsEnumerable,
  Rl = (s, t, r) =>
    t in s
      ? kb(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  Nl = (s, t) => {
    for (var r in t || (t = {})) Hb.call(t, r) && Rl(s, r, t[r]);
    if (Tl) for (var r of Tl(t)) Bb.call(t, r) && Rl(s, r, t[r]);
    return s;
  };
const Vb = "ReactNative",
  Er = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  Kb = "js";
function Gc() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function $o() {
  return !w1() && !!Cf() && navigator.product === Vb;
}
function cs() {
  return !Gc() && !!Cf();
}
function us() {
  return $o()
    ? Er.reactNative
    : Gc()
    ? Er.node
    : cs()
    ? Er.browser
    : Er.unknown;
}
function Wb(s, t) {
  let r = ns.parse(s);
  return (r = Nl(Nl({}, r), t)), (s = ns.stringify(r)), s;
}
function Gb() {
  return b1() || { name: "", description: "", url: "", icons: [""] };
}
function Jb() {
  if (
    us() === Er.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const s = $1();
  if (s === null) return "unknown";
  const t = s.os ? s.os.replace(" ", "").toLowerCase() : "unknown";
  return s.type === "browser"
    ? [t, s.name, s.version].join("-")
    : [t, s.version].join("-");
}
function Qb() {
  var s;
  const t = us();
  return t === Er.browser
    ? [t, ((s = E1()) == null ? void 0 : s.host) || "unknown"].join(":")
    : t;
}
function Yb(s, t, r) {
  const n = Jb(),
    a = Qb();
  return [[s, t].join("-"), [Kb, r].join("-"), n, a].join("/");
}
function Xb({
  protocol: s,
  version: t,
  relayUrl: r,
  sdkVersion: n,
  auth: a,
  projectId: h,
  useOnCloseEvent: d,
}) {
  const w = r.split("?"),
    S = Yb(s, t, n),
    $ = { auth: a, ua: S, projectId: h, useOnCloseEvent: d || void 0 },
    A = Wb(w[1] || "", $);
  return w[0] + "?" + A;
}
function Vi(s, t) {
  return s.filter((r) => t.includes(r)).length === s.length;
}
function Qf(s) {
  return Object.fromEntries(s.entries());
}
function Yf(s) {
  return new Map(Object.entries(s));
}
function vn(s = ue.FIVE_MINUTES, t) {
  const r = ue.toMiliseconds(s || ue.FIVE_MINUTES);
  let n, a, h;
  return {
    resolve: (d) => {
      h && n && (clearTimeout(h), n(d));
    },
    reject: (d) => {
      h && a && (clearTimeout(h), a(d));
    },
    done: () =>
      new Promise((d, w) => {
        (h = setTimeout(() => {
          w(new Error(t));
        }, r)),
          (n = d),
          (a = w);
      }),
  };
}
function ss(s, t, r) {
  return new Promise(async (n, a) => {
    const h = setTimeout(() => a(new Error(r)), t);
    try {
      const d = await s;
      n(d);
    } catch (d) {
      a(d);
    }
    clearTimeout(h);
  });
}
function Xf(s, t) {
  if (typeof t == "string" && t.startsWith(`${s}:`)) return t;
  if (s.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (s.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${s}`);
}
function Zb(s) {
  return Xf("topic", s);
}
function ew(s) {
  return Xf("id", s);
}
function Zf(s) {
  const [t, r] = s.split(":"),
    n = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string") n.topic = r;
  else if (t === "id" && Number.isInteger(Number(r))) n.id = Number(r);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${t}:${r}`
    );
  return n;
}
function Mr(s, t) {
  return ue.fromMiliseconds((t || Date.now()) + ue.toMiliseconds(s));
}
function Si(s) {
  return Date.now() >= ue.toMiliseconds(s);
}
function $t(s, t) {
  return `${s}${t ? `:${t}` : ""}`;
}
async function tw({ id: s, topic: t, wcDeepLink: r }) {
  try {
    if (!r) return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let a = n == null ? void 0 : n.href;
    if (typeof a != "string") return;
    a.endsWith("/") && (a = a.slice(0, -1));
    const h = `${a}/wc?requestId=${s}&sessionTopic=${t}`,
      d = us();
    d === Er.browser
      ? h.startsWith("https://")
        ? window.open(h, "_blank", "noreferrer noopener")
        : window.open(h, "_self", "noreferrer noopener")
      : d === Er.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(h));
  } catch (n) {
    console.error(n);
  }
}
const rw = "irn";
function Cc(s) {
  return (s == null ? void 0 : s.relay) || { protocol: rw };
}
function _o(s) {
  const t = L1[s];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${s}`);
  return t;
}
var iw = Object.defineProperty,
  Cl = Object.getOwnPropertySymbols,
  nw = Object.prototype.hasOwnProperty,
  sw = Object.prototype.propertyIsEnumerable,
  $l = (s, t, r) =>
    t in s
      ? iw(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  ow = (s, t) => {
    for (var r in t || (t = {})) nw.call(t, r) && $l(s, r, t[r]);
    if (Cl) for (var r of Cl(t)) sw.call(t, r) && $l(s, r, t[r]);
    return s;
  };
function aw(s, t = "-") {
  const r = {},
    n = "relay" + t;
  return (
    Object.keys(s).forEach((a) => {
      if (a.startsWith(n)) {
        const h = a.replace(n, ""),
          d = s[a];
        r[h] = d;
      }
    }),
    r
  );
}
function cw(s) {
  const t = s.indexOf(":"),
    r = s.indexOf("?") !== -1 ? s.indexOf("?") : void 0,
    n = s.substring(0, t),
    a = s.substring(t + 1, r).split("@"),
    h = typeof r < "u" ? s.substring(r) : "",
    d = ns.parse(h);
  return {
    protocol: n,
    topic: uw(a[0]),
    version: parseInt(a[1], 10),
    symKey: d.symKey,
    relay: aw(d),
  };
}
function uw(s) {
  return s.startsWith("//") ? s.substring(2) : s;
}
function hw(s, t = "-") {
  const r = "relay",
    n = {};
  return (
    Object.keys(s).forEach((a) => {
      const h = r + t + a;
      s[a] && (n[h] = s[a]);
    }),
    n
  );
}
function lw(s) {
  return (
    `${s.protocol}:${s.topic}@${s.version}?` +
    ns.stringify(ow({ symKey: s.symKey }, hw(s.relay)))
  );
}
function En(s) {
  const t = [];
  return (
    s.forEach((r) => {
      const [n, a] = r.split(":");
      t.push(`${n}:${a}`);
    }),
    t
  );
}
function fw(s) {
  const t = [];
  return (
    Object.values(s).forEach((r) => {
      t.push(...En(r.accounts));
    }),
    t
  );
}
function dw(s, t) {
  const r = [];
  return (
    Object.values(s).forEach((n) => {
      En(n.accounts).includes(t) && r.push(...n.methods);
    }),
    r
  );
}
function pw(s, t) {
  const r = [];
  return (
    Object.values(s).forEach((n) => {
      En(n.accounts).includes(t) && r.push(...n.events);
    }),
    r
  );
}
function gw(s, t) {
  const r = Eo(s, t);
  if (r) throw new Error(r.message);
  const n = {};
  for (const [a, h] of Object.entries(s))
    n[a] = {
      methods: h.methods,
      events: h.events,
      chains: h.accounts.map((d) => `${d.split(":")[0]}:${d.split(":")[1]}`),
    };
  return n;
}
const yw = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  mw = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function te(s, t) {
  const { message: r, code: n } = mw[s];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function qt(s, t) {
  const { message: r, code: n } = yw[s];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function hs(s, t) {
  return Array.isArray(s) ? (typeof t < "u" && s.length ? s.every(t) : !0) : !1;
}
function ts(s) {
  return Object.getPrototypeOf(s) === Object.prototype && Object.keys(s).length;
}
function rr(s) {
  return typeof s > "u";
}
function zt(s, t) {
  return t && rr(s) ? !0 : typeof s == "string" && !!s.trim().length;
}
function Jc(s, t) {
  return t && rr(s) ? !0 : typeof s == "number" && !isNaN(s);
}
function vw(s, t) {
  const { requiredNamespaces: r } = t,
    n = Object.keys(s.namespaces),
    a = Object.keys(r);
  let h = !0;
  return Vi(a, n)
    ? (n.forEach((d) => {
        const { accounts: w, methods: S, events: $ } = s.namespaces[d],
          A = En(w),
          U = r[d];
        (!Vi(Kf(d, U), A) || !Vi(U.methods, S) || !Vi(U.events, $)) && (h = !1);
      }),
      h)
    : !1;
}
function Oo(s) {
  return zt(s, !1) && s.includes(":") ? s.split(":").length === 2 : !1;
}
function bw(s) {
  if (zt(s, !1) && s.includes(":")) {
    const t = s.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && Oo(r);
    }
  }
  return !1;
}
function ww(s) {
  if (zt(s, !1))
    try {
      return typeof new URL(s) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function _w(s) {
  var t;
  return (t = s == null ? void 0 : s.proposer) == null ? void 0 : t.publicKey;
}
function Ew(s) {
  return s == null ? void 0 : s.topic;
}
function Iw(s, t) {
  let r = null;
  return (
    zt(s == null ? void 0 : s.publicKey, !1) ||
      (r = te(
        "MISSING_OR_INVALID",
        `${t} controller public key should be a string`
      )),
    r
  );
}
function Dl(s) {
  let t = !0;
  return hs(s) ? s.length && (t = s.every((r) => zt(r, !1))) : (t = !1), t;
}
function Sw(s, t, r) {
  let n = null;
  return (
    hs(t) && t.length
      ? t.forEach((a) => {
          n ||
            Oo(a) ||
            (n = qt(
              "UNSUPPORTED_CHAINS",
              `${r}, chain ${a} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Oo(s) ||
        (n = qt(
          "UNSUPPORTED_CHAINS",
          `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    n
  );
}
function xw(s, t, r) {
  let n = null;
  return (
    Object.entries(s).forEach(([a, h]) => {
      if (n) return;
      const d = Sw(a, Kf(a, h), `${t} ${r}`);
      d && (n = d);
    }),
    n
  );
}
function Pw(s, t) {
  let r = null;
  return (
    hs(s)
      ? s.forEach((n) => {
          r ||
            bw(n) ||
            (r = qt(
              "UNSUPPORTED_ACCOUNTS",
              `${t}, account ${n} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (r = qt(
          "UNSUPPORTED_ACCOUNTS",
          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    r
  );
}
function Ow(s, t) {
  let r = null;
  return (
    Object.values(s).forEach((n) => {
      if (r) return;
      const a = Pw(n == null ? void 0 : n.accounts, `${t} namespace`);
      a && (r = a);
    }),
    r
  );
}
function Aw(s, t) {
  let r = null;
  return (
    Dl(s == null ? void 0 : s.methods)
      ? Dl(s == null ? void 0 : s.events) ||
        (r = qt(
          "UNSUPPORTED_EVENTS",
          `${t}, events should be an array of strings or empty array for no events`
        ))
      : (r = qt(
          "UNSUPPORTED_METHODS",
          `${t}, methods should be an array of strings or empty array for no methods`
        )),
    r
  );
}
function ed(s, t) {
  let r = null;
  return (
    Object.values(s).forEach((n) => {
      if (r) return;
      const a = Aw(n, `${t}, namespace`);
      a && (r = a);
    }),
    r
  );
}
function Tw(s, t, r) {
  let n = null;
  if (s && ts(s)) {
    const a = ed(s, t);
    a && (n = a);
    const h = xw(s, t, r);
    h && (n = h);
  } else
    n = te("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return n;
}
function Eo(s, t) {
  let r = null;
  if (s && ts(s)) {
    const n = ed(s, t);
    n && (r = n);
    const a = Ow(s, t);
    a && (r = a);
  } else
    r = te(
      "MISSING_OR_INVALID",
      `${t}, namespaces should be an object with data`
    );
  return r;
}
function td(s) {
  return zt(s.protocol, !0);
}
function Rw(s, t) {
  let r = !1;
  return (
    t && !s
      ? (r = !0)
      : s &&
        hs(s) &&
        s.length &&
        s.forEach((n) => {
          r = td(n);
        }),
    r
  );
}
function Nw(s) {
  return typeof s == "number";
}
function dr(s) {
  return typeof s < "u" && typeof s !== null;
}
function Cw(s) {
  return !(
    !s ||
    typeof s != "object" ||
    !s.code ||
    !Jc(s.code, !1) ||
    !s.message ||
    !zt(s.message, !1)
  );
}
function $w(s) {
  return !(rr(s) || !zt(s.method, !1));
}
function Dw(s) {
  return !(
    rr(s) ||
    (rr(s.result) && rr(s.error)) ||
    !Jc(s.id, !1) ||
    !zt(s.jsonrpc, !1)
  );
}
function Fw(s) {
  return !(rr(s) || !zt(s.name, !1));
}
function Fl(s, t) {
  return !(!Oo(t) || !fw(s).includes(t));
}
function Uw(s, t, r) {
  return zt(r, !1) ? dw(s, t).includes(r) : !1;
}
function jw(s, t, r) {
  return zt(r, !1) ? pw(s, t).includes(r) : !1;
}
function Ul(s, t, r) {
  let n = null;
  const a = Lw(s),
    h = Mw(t),
    d = Object.keys(a),
    w = Object.keys(h),
    S = jl(Object.keys(s)),
    $ = jl(Object.keys(t)),
    A = S.filter((U) => !$.includes(U));
  return (
    A.length &&
      (n = te(
        "NON_CONFORMING_NAMESPACES",
        `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${A.toString()}
      Received: ${Object.keys(t).toString()}`
      )),
    Vi(d, w) ||
      (n = te(
        "NON_CONFORMING_NAMESPACES",
        `${r} namespaces chains don't satisfy required namespaces.
      Required: ${d.toString()}
      Approved: ${w.toString()}`
      )),
    Object.keys(t).forEach((U) => {
      if (!U.includes(":") || n) return;
      const G = En(t[U].accounts);
      G.includes(U) ||
        (n = te(
          "NON_CONFORMING_NAMESPACES",
          `${r} namespaces accounts don't satisfy namespace accounts for ${U}
        Required: ${U}
        Approved: ${G.toString()}`
        ));
    }),
    d.forEach((U) => {
      n ||
        (Vi(a[U].methods, h[U].methods)
          ? Vi(a[U].events, h[U].events) ||
            (n = te(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces events don't satisfy namespace events for ${U}`
            ))
          : (n = te(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces methods don't satisfy namespace methods for ${U}`
            )));
    }),
    n
  );
}
function Lw(s) {
  const t = {};
  return (
    Object.keys(s).forEach((r) => {
      var n;
      r.includes(":")
        ? (t[r] = s[r])
        : (n = s[r].chains) == null ||
          n.forEach((a) => {
            t[a] = { methods: s[r].methods, events: s[r].events };
          });
    }),
    t
  );
}
function jl(s) {
  return [...new Set(s.map((t) => (t.includes(":") ? t.split(":")[0] : t)))];
}
function Mw(s) {
  const t = {};
  return (
    Object.keys(s).forEach((r) => {
      if (r.includes(":")) t[r] = s[r];
      else {
        const n = En(s[r].accounts);
        n == null ||
          n.forEach((a) => {
            t[a] = {
              accounts: s[r].accounts.filter((h) => h.includes(`${a}:`)),
              methods: s[r].methods,
              events: s[r].events,
            };
          });
      }
    }),
    t
  );
}
function qw(s, t) {
  return Jc(s, !1) && s <= t.max && s >= t.min;
}
function Ll() {
  const s = us();
  return new Promise((t) => {
    switch (s) {
      case Er.browser:
        t(zw());
        break;
      case Er.reactNative:
        t(kw());
        break;
      case Er.node:
        t(Hw());
        break;
      default:
        t(!0);
    }
  });
}
function zw() {
  return cs() && (navigator == null ? void 0 : navigator.onLine);
}
async function kw() {
  if ($o() && typeof global < "u" && global != null && global.NetInfo) {
    const s = await (global == null ? void 0 : global.NetInfo.fetch());
    return s == null ? void 0 : s.isConnected;
  }
  return !0;
}
function Hw() {
  return !0;
}
function Bw(s) {
  switch (us()) {
    case Er.browser:
      Vw(s);
      break;
    case Er.reactNative:
      Kw(s);
      break;
  }
}
function Vw(s) {
  cs() &&
    (window.addEventListener("online", () => s(!0)),
    window.addEventListener("offline", () => s(!1)));
}
function Kw(s) {
  $o() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((t) =>
        s(t == null ? void 0 : t.isConnected)
      ));
}
const gc = {};
let mo = class {
  static get(t) {
    return gc[t];
  }
  static set(t, r) {
    gc[t] = r;
  }
  static delete(t) {
    delete gc[t];
  }
};
const Ww = "PARSE_ERROR",
  Gw = "INVALID_REQUEST",
  Jw = "METHOD_NOT_FOUND",
  Qw = "INVALID_PARAMS",
  rd = "INTERNAL_ERROR",
  Qc = "SERVER_ERROR",
  Yw = [-32700, -32600, -32601, -32602, -32603],
  rs = {
    [Ww]: { code: -32700, message: "Parse error" },
    [Gw]: { code: -32600, message: "Invalid Request" },
    [Jw]: { code: -32601, message: "Method not found" },
    [Qw]: { code: -32602, message: "Invalid params" },
    [rd]: { code: -32603, message: "Internal error" },
    [Qc]: { code: -32e3, message: "Server error" },
  },
  id = Qc;
function Xw(s) {
  return Yw.includes(s);
}
function Ml(s) {
  return Object.keys(rs).includes(s) ? rs[s] : rs[id];
}
function Zw(s) {
  const t = Object.values(rs).find((r) => r.code === s);
  return t || rs[id];
}
function nd(s, t, r) {
  return s.message.includes("getaddrinfo ENOTFOUND") ||
    s.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${r} RPC url at ${t}`)
    : s;
}
var sd = {},
  ci = {},
  ql;
function e_() {
  if (ql) return ci;
  (ql = 1),
    Object.defineProperty(ci, "__esModule", { value: !0 }),
    (ci.isBrowserCryptoAvailable =
      ci.getSubtleCrypto =
      ci.getBrowerCrypto =
        void 0);
  function s() {
    return (
      (pr === null || pr === void 0 ? void 0 : pr.crypto) ||
      (pr === null || pr === void 0 ? void 0 : pr.msCrypto) ||
      {}
    );
  }
  ci.getBrowerCrypto = s;
  function t() {
    const n = s();
    return n.subtle || n.webkitSubtle;
  }
  ci.getSubtleCrypto = t;
  function r() {
    return !!s() && !!t();
  }
  return (ci.isBrowserCryptoAvailable = r), ci;
}
var ui = {},
  zl;
function t_() {
  if (zl) return ui;
  (zl = 1),
    Object.defineProperty(ui, "__esModule", { value: !0 }),
    (ui.isBrowser = ui.isNode = ui.isReactNative = void 0);
  function s() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  ui.isReactNative = s;
  function t() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  ui.isNode = t;
  function r() {
    return !s() && !t();
  }
  return (ui.isBrowser = r), ui;
}
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  const t = Pi;
  t.__exportStar(e_(), s), t.__exportStar(t_(), s);
})(sd);
function Yc(s = 3) {
  const t = Date.now() * Math.pow(10, s),
    r = Math.floor(Math.random() * Math.pow(10, s));
  return t + r;
}
function od(s = 6) {
  return BigInt(Yc(s));
}
function wn(s, t, r) {
  return { id: r || Yc(), jsonrpc: "2.0", method: s, params: t };
}
function Xc(s, t) {
  return { id: s, jsonrpc: "2.0", result: t };
}
function Do(s, t, r) {
  return { id: s, jsonrpc: "2.0", error: r_(t, r) };
}
function r_(s, t) {
  return typeof s > "u"
    ? Ml(rd)
    : (typeof s == "string" &&
        (s = Object.assign(Object.assign({}, Ml(Qc)), { message: s })),
      typeof t < "u" && (s.data = t),
      Xw(s.code) && (s = Zw(s.code)),
      s);
}
class i_ {}
class n_ extends i_ {
  constructor() {
    super();
  }
}
class s_ extends n_ {
  constructor(t) {
    super();
  }
}
const o_ = "^https?:",
  a_ = "^wss?:";
function c_(s) {
  const t = s.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length)) return t[0];
}
function ad(s, t) {
  const r = c_(s);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function kl(s) {
  return ad(s, o_);
}
function Hl(s) {
  return ad(s, a_);
}
function u_(s) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(s);
}
function cd(s) {
  return (
    typeof s == "object" && "id" in s && "jsonrpc" in s && s.jsonrpc === "2.0"
  );
}
function Zc(s) {
  return cd(s) && "method" in s;
}
function Fo(s) {
  return cd(s) && (fi(s) || qr(s));
}
function fi(s) {
  return "result" in s;
}
function qr(s) {
  return "error" in s;
}
class Oi extends s_ {
  constructor(t) {
    super(t),
      (this.events = new sr.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(t)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(
      wn(t.method, t.params || [], t.id || od().toString()),
      r
    );
  }
  async requestStrict(t, r) {
    return new Promise(async (n, a) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (h) {
          a(h);
        }
      this.events.on(`${t.id}`, (h) => {
        qr(h) ? a(h.error) : n(h.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (h) {
        a(h);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t),
      Fo(t)
        ? this.events.emit(`${t.id}`, t)
        : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t &&
      t.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${t.code} ${
            t.reason ? `(${t.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    (this.connection === t && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof t == "string" &&
        (await this.connection.open(t), (t = this.connection)),
      (this.connection = this.setConnection(t)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (t) => this.onPayload(t)),
      this.connection.on("close", (t) => this.onClose(t)),
      this.connection.on("error", (t) => this.events.emit("error", t)),
      this.connection.on("register_error", (t) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
var yc, Bl;
function h_() {
  return (
    Bl ||
      ((Bl = 1),
      (yc = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      })),
    yc
  );
}
const l_ = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : h_(),
  f_ = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  Vl = (s) => s.split("?")[0],
  Kl = 10,
  d_ = l_();
class p_ {
  constructor(t) {
    if (
      ((this.url = t),
      (this.events = new sr.EventEmitter()),
      (this.registering = !1),
      !Hl(t))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    return new Promise((t, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (n) => {
        this.onClose(n), t();
      }),
        this.socket.close();
    });
  }
  async send(t, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(is(t));
    } catch (n) {
      this.onError(t.id, n);
    }
  }
  register(t = this.url) {
    if (!Hl(t))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((n, a) => {
          this.events.once("register_error", (h) => {
            this.resetMaxListeners(), a(h);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return a(
                  new Error("WebSocket connection is missing or invalid")
                );
              n(this.socket);
            });
        })
      );
    }
    return (
      (this.url = t),
      (this.registering = !0),
      new Promise((r, n) => {
        const a = sd.isReactNative() ? void 0 : { rejectUnauthorized: !u_(t) },
          h = new d_(t, [], a);
        f_()
          ? (h.onerror = (d) => {
              const w = d;
              n(this.emitError(w.error));
            })
          : h.on("error", (d) => {
              n(this.emitError(d));
            }),
          (h.onopen = () => {
            this.onOpen(h), r(h);
          });
      })
    );
  }
  onOpen(t) {
    (t.onmessage = (r) => this.onPayload(r)),
      (t.onclose = (r) => this.onClose(r)),
      (this.socket = t),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(t) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? Bc(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const n = this.parseError(r),
      a = n.message || n.toString(),
      h = Do(t, a);
    this.events.emit("payload", h);
  }
  parseError(t, r = this.url) {
    return nd(t, Vl(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Kl && this.events.setMaxListeners(Kl);
  }
  emitError(t) {
    const r = this.parseError(
      new Error(
        (t == null ? void 0 : t.message) ||
          `WebSocket connection failed for host: ${Vl(this.url)}`
      )
    );
    return this.events.emit("register_error", r), r;
  }
}
var Ao = {},
  g_ = {
    get exports() {
      return Ao;
    },
    set exports(s) {
      Ao = s;
    },
  };
(function (s, t) {
  var r = 200,
    n = "__lodash_hash_undefined__",
    a = 1,
    h = 2,
    d = 9007199254740991,
    w = "[object Arguments]",
    S = "[object Array]",
    $ = "[object AsyncFunction]",
    A = "[object Boolean]",
    U = "[object Date]",
    G = "[object Error]",
    J = "[object Function]",
    H = "[object GeneratorFunction]",
    Q = "[object Map]",
    oe = "[object Number]",
    pe = "[object Null]",
    f = "[object Object]",
    m = "[object Promise]",
    b = "[object Proxy]",
    v = "[object RegExp]",
    g = "[object Set]",
    R = "[object String]",
    P = "[object Symbol]",
    X = "[object Undefined]",
    se = "[object WeakMap]",
    ge = "[object ArrayBuffer]",
    Ne = "[object DataView]",
    qe = "[object Float32Array]",
    E = "[object Float64Array]",
    T = "[object Int8Array]",
    ie = "[object Int16Array]",
    de = "[object Int32Array]",
    Y = "[object Uint8Array]",
    V = "[object Uint8ClampedArray]",
    W = "[object Uint16Array]",
    Z = "[object Uint32Array]",
    Je = /[\\^$.*+?()[\]{}|]/g,
    He = /^\[object .+?Constructor\]$/,
    zr = /^(?:0|[1-9]\d*)$/,
    Ie = {};
  (Ie[qe] =
    Ie[E] =
    Ie[T] =
    Ie[ie] =
    Ie[de] =
    Ie[Y] =
    Ie[V] =
    Ie[W] =
    Ie[Z] =
      !0),
    (Ie[w] =
      Ie[S] =
      Ie[ge] =
      Ie[A] =
      Ie[Ne] =
      Ie[U] =
      Ie[G] =
      Ie[J] =
      Ie[Q] =
      Ie[oe] =
      Ie[f] =
      Ie[v] =
      Ie[g] =
      Ie[R] =
      Ie[se] =
        !1);
  var It = typeof pr == "object" && pr && pr.Object === Object && pr,
    M = typeof self == "object" && self && self.Object === Object && self,
    L = It || M || Function("return this")(),
    F = t && !t.nodeType && t,
    u = F && !0 && s && !s.nodeType && s,
    O = u && u.exports === F,
    ae = O && It.process,
    ye = (function () {
      try {
        return ae && ae.binding && ae.binding("util");
      } catch {}
    })(),
    _e = ye && ye.isTypedArray;
  function Ce(_, N) {
    for (
      var B = -1, re = _ == null ? 0 : _.length, Ke = 0, ve = [];
      ++B < re;

    ) {
      var et = _[B];
      N(et, B, _) && (ve[Ke++] = et);
    }
    return ve;
  }
  function De(_, N) {
    for (var B = -1, re = N.length, Ke = _.length; ++B < re; ) _[Ke + B] = N[B];
    return _;
  }
  function Pe(_, N) {
    for (var B = -1, re = _ == null ? 0 : _.length; ++B < re; )
      if (N(_[B], B, _)) return !0;
    return !1;
  }
  function St(_, N) {
    for (var B = -1, re = Array(_); ++B < _; ) re[B] = N(B);
    return re;
  }
  function mt(_) {
    return function (N) {
      return _(N);
    };
  }
  function st(_, N) {
    return _.has(N);
  }
  function Ue(_, N) {
    return _ == null ? void 0 : _[N];
  }
  function Ye(_) {
    var N = -1,
      B = Array(_.size);
    return (
      _.forEach(function (re, Ke) {
        B[++N] = [Ke, re];
      }),
      B
    );
  }
  function Xe(_, N) {
    return function (B) {
      return _(N(B));
    };
  }
  function ot(_) {
    var N = -1,
      B = Array(_.size);
    return (
      _.forEach(function (re) {
        B[++N] = re;
      }),
      B
    );
  }
  var ze = Array.prototype,
    Ze = Function.prototype,
    $e = Object.prototype,
    Be = L["__core-js_shared__"],
    ut = Ze.toString,
    Le = $e.hasOwnProperty,
    xt = (function () {
      var _ = /[^.]+$/.exec((Be && Be.keys && Be.keys.IE_PROTO) || "");
      return _ ? "Symbol(src)_1." + _ : "";
    })(),
    Dt = $e.toString,
    kt = RegExp(
      "^" +
        ut
          .call(Le)
          .replace(Je, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ht = O ? L.Buffer : void 0,
    jt = L.Symbol,
    Jt = L.Uint8Array,
    or = $e.propertyIsEnumerable,
    kr = ze.splice,
    Qt = jt ? jt.toStringTag : void 0,
    Qr = Object.getOwnPropertySymbols,
    di = Ht ? Ht.isBuffer : void 0,
    Ti = Xe(Object.keys, Object),
    ht = yr(L, "DataView"),
    rt = yr(L, "Map"),
    lt = yr(L, "Promise"),
    ft = yr(L, "Set"),
    at = yr(L, "WeakMap"),
    it = yr(Object, "create"),
    Pt = Xr(ht),
    Ot = Xr(rt),
    dt = Xr(lt),
    At = Xr(ft),
    pt = Xr(at),
    vt = jt ? jt.prototype : void 0,
    gt = vt ? vt.valueOf : void 0;
  function Qe(_) {
    var N = -1,
      B = _ == null ? 0 : _.length;
    for (this.clear(); ++N < B; ) {
      var re = _[N];
      this.set(re[0], re[1]);
    }
  }
  function Tt() {
    (this.__data__ = it ? it(null) : {}), (this.size = 0);
  }
  function Rt(_) {
    var N = this.has(_) && delete this.__data__[_];
    return (this.size -= N ? 1 : 0), N;
  }
  function Lo(_) {
    var N = this.__data__;
    if (it) {
      var B = N[_];
      return B === n ? void 0 : B;
    }
    return Le.call(N, _) ? N[_] : void 0;
  }
  function Mo(_) {
    var N = this.__data__;
    return it ? N[_] !== void 0 : Le.call(N, _);
  }
  function qo(_, N) {
    var B = this.__data__;
    return (
      (this.size += this.has(_) ? 0 : 1),
      (B[_] = it && N === void 0 ? n : N),
      this
    );
  }
  (Qe.prototype.clear = Tt),
    (Qe.prototype.delete = Rt),
    (Qe.prototype.get = Lo),
    (Qe.prototype.has = Mo),
    (Qe.prototype.set = qo);
  function Ir(_) {
    var N = -1,
      B = _ == null ? 0 : _.length;
    for (this.clear(); ++N < B; ) {
      var re = _[N];
      this.set(re[0], re[1]);
    }
  }
  function zo() {
    (this.__data__ = []), (this.size = 0);
  }
  function ko(_) {
    var N = this.__data__,
      B = Ri(N, _);
    if (B < 0) return !1;
    var re = N.length - 1;
    return B == re ? N.pop() : kr.call(N, B, 1), --this.size, !0;
  }
  function Ho(_) {
    var N = this.__data__,
      B = Ri(N, _);
    return B < 0 ? void 0 : N[B][1];
  }
  function Bo(_) {
    return Ri(this.__data__, _) > -1;
  }
  function Vo(_, N) {
    var B = this.__data__,
      re = Ri(B, _);
    return re < 0 ? (++this.size, B.push([_, N])) : (B[re][1] = N), this;
  }
  (Ir.prototype.clear = zo),
    (Ir.prototype.delete = ko),
    (Ir.prototype.get = Ho),
    (Ir.prototype.has = Bo),
    (Ir.prototype.set = Vo);
  function Yr(_) {
    var N = -1,
      B = _ == null ? 0 : _.length;
    for (this.clear(); ++N < B; ) {
      var re = _[N];
      this.set(re[0], re[1]);
    }
  }
  function Qi() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Qe(),
        map: new (rt || Ir)(),
        string: new Qe(),
      });
  }
  function Ko(_) {
    var N = pi(this, _).delete(_);
    return (this.size -= N ? 1 : 0), N;
  }
  function Yi(_) {
    return pi(this, _).get(_);
  }
  function Wo(_) {
    return pi(this, _).has(_);
  }
  function Go(_, N) {
    var B = pi(this, _),
      re = B.size;
    return B.set(_, N), (this.size += B.size == re ? 0 : 1), this;
  }
  (Yr.prototype.clear = Qi),
    (Yr.prototype.delete = Ko),
    (Yr.prototype.get = Yi),
    (Yr.prototype.has = Wo),
    (Yr.prototype.set = Go);
  function Xi(_) {
    var N = -1,
      B = _ == null ? 0 : _.length;
    for (this.__data__ = new Yr(); ++N < B; ) this.add(_[N]);
  }
  function fs(_) {
    return this.__data__.set(_, n), this;
  }
  function ds(_) {
    return this.__data__.has(_);
  }
  (Xi.prototype.add = Xi.prototype.push = fs), (Xi.prototype.has = ds);
  function $r(_) {
    var N = (this.__data__ = new Ir(_));
    this.size = N.size;
  }
  function Jo() {
    (this.__data__ = new Ir()), (this.size = 0);
  }
  function Qo(_) {
    var N = this.__data__,
      B = N.delete(_);
    return (this.size = N.size), B;
  }
  function Yo(_) {
    return this.__data__.get(_);
  }
  function Xo(_) {
    return this.__data__.has(_);
  }
  function ps(_, N) {
    var B = this.__data__;
    if (B instanceof Ir) {
      var re = B.__data__;
      if (!rt || re.length < r - 1)
        return re.push([_, N]), (this.size = ++B.size), this;
      B = this.__data__ = new Yr(re);
    }
    return B.set(_, N), (this.size = B.size), this;
  }
  ($r.prototype.clear = Jo),
    ($r.prototype.delete = Qo),
    ($r.prototype.get = Yo),
    ($r.prototype.has = Xo),
    ($r.prototype.set = ps);
  function gs(_, N) {
    var B = tn(_),
      re = !B && Os(_),
      Ke = !B && !re && Pn(_),
      ve = !B && !re && !Ke && Rs(_),
      et = B || re || Ke || ve,
      Nt = et ? St(_.length, String) : [],
      Ae = Nt.length;
    for (var We in _)
      (N || Le.call(_, We)) &&
        !(
          et &&
          (We == "length" ||
            (Ke && (We == "offset" || We == "parent")) ||
            (ve &&
              (We == "buffer" || We == "byteLength" || We == "byteOffset")) ||
            Es(We, Ae))
        ) &&
        Nt.push(We);
    return Nt;
  }
  function Ri(_, N) {
    for (var B = _.length; B--; ) if (Ps(_[B][0], N)) return B;
    return -1;
  }
  function Sn(_, N, B) {
    var re = N(_);
    return tn(_) ? re : De(re, B(_));
  }
  function Ni(_) {
    return _ == null
      ? _ === void 0
        ? X
        : pe
      : Qt && Qt in Object(_)
      ? ws(_)
      : ta(_);
  }
  function xn(_) {
    return $i(_) && Ni(_) == w;
  }
  function Ci(_, N, B, re, Ke) {
    return _ === N
      ? !0
      : _ == null || N == null || (!$i(_) && !$i(N))
      ? _ !== _ && N !== N
      : ys(_, N, B, re, Ci, Ke);
  }
  function ys(_, N, B, re, Ke, ve) {
    var et = tn(_),
      Nt = tn(N),
      Ae = et ? S : Hr(_),
      We = Nt ? S : Hr(N);
    (Ae = Ae == w ? f : Ae), (We = We == w ? f : We);
    var bt = Ae == f,
      ar = We == f,
      Ct = Ae == We;
    if (Ct && Pn(_)) {
      if (!Pn(N)) return !1;
      (et = !0), (bt = !1);
    }
    if (Ct && !bt)
      return (
        ve || (ve = new $r()),
        et || Rs(_) ? Zi(_, N, B, re, Ke, ve) : ea(_, N, Ae, B, re, Ke, ve)
      );
    if (!(B & a)) {
      var tt = bt && Le.call(_, "__wrapped__"),
        Yt = ar && Le.call(N, "__wrapped__");
      if (tt || Yt) {
        var Dr = tt ? _.value() : _,
          Sr = Yt ? N.value() : N;
        return ve || (ve = new $r()), Ke(Dr, Sr, B, re, ve);
      }
    }
    return Ct ? (ve || (ve = new $r()), bs(_, N, B, re, Ke, ve)) : !1;
  }
  function Zo(_) {
    if (!Ts(_) || Ss(_)) return !1;
    var N = rn(_) ? kt : He;
    return N.test(Xr(_));
  }
  function ms(_) {
    return $i(_) && As(_.length) && !!Ie[Ni(_)];
  }
  function vs(_) {
    if (!xs(_)) return Ti(_);
    var N = [];
    for (var B in Object(_)) Le.call(_, B) && B != "constructor" && N.push(B);
    return N;
  }
  function Zi(_, N, B, re, Ke, ve) {
    var et = B & a,
      Nt = _.length,
      Ae = N.length;
    if (Nt != Ae && !(et && Ae > Nt)) return !1;
    var We = ve.get(_);
    if (We && ve.get(N)) return We == N;
    var bt = -1,
      ar = !0,
      Ct = B & h ? new Xi() : void 0;
    for (ve.set(_, N), ve.set(N, _); ++bt < Nt; ) {
      var tt = _[bt],
        Yt = N[bt];
      if (re) var Dr = et ? re(Yt, tt, bt, N, _, ve) : re(tt, Yt, bt, _, N, ve);
      if (Dr !== void 0) {
        if (Dr) continue;
        ar = !1;
        break;
      }
      if (Ct) {
        if (
          !Pe(N, function (Sr, Br) {
            if (!st(Ct, Br) && (tt === Sr || Ke(tt, Sr, B, re, ve)))
              return Ct.push(Br);
          })
        ) {
          ar = !1;
          break;
        }
      } else if (!(tt === Yt || Ke(tt, Yt, B, re, ve))) {
        ar = !1;
        break;
      }
    }
    return ve.delete(_), ve.delete(N), ar;
  }
  function ea(_, N, B, re, Ke, ve, et) {
    switch (B) {
      case Ne:
        if (_.byteLength != N.byteLength || _.byteOffset != N.byteOffset)
          return !1;
        (_ = _.buffer), (N = N.buffer);
      case ge:
        return !(_.byteLength != N.byteLength || !ve(new Jt(_), new Jt(N)));
      case A:
      case U:
      case oe:
        return Ps(+_, +N);
      case G:
        return _.name == N.name && _.message == N.message;
      case v:
      case R:
        return _ == N + "";
      case Q:
        var Nt = Ye;
      case g:
        var Ae = re & a;
        if ((Nt || (Nt = ot), _.size != N.size && !Ae)) return !1;
        var We = et.get(_);
        if (We) return We == N;
        (re |= h), et.set(_, N);
        var bt = Zi(Nt(_), Nt(N), re, Ke, ve, et);
        return et.delete(_), bt;
      case P:
        if (gt) return gt.call(_) == gt.call(N);
    }
    return !1;
  }
  function bs(_, N, B, re, Ke, ve) {
    var et = B & a,
      Nt = en(_),
      Ae = Nt.length,
      We = en(N),
      bt = We.length;
    if (Ae != bt && !et) return !1;
    for (var ar = Ae; ar--; ) {
      var Ct = Nt[ar];
      if (!(et ? Ct in N : Le.call(N, Ct))) return !1;
    }
    var tt = ve.get(_);
    if (tt && ve.get(N)) return tt == N;
    var Yt = !0;
    ve.set(_, N), ve.set(N, _);
    for (var Dr = et; ++ar < Ae; ) {
      Ct = Nt[ar];
      var Sr = _[Ct],
        Br = N[Ct];
      if (re) var On = et ? re(Br, Sr, Ct, N, _, ve) : re(Sr, Br, Ct, _, N, ve);
      if (!(On === void 0 ? Sr === Br || Ke(Sr, Br, B, re, ve) : On)) {
        Yt = !1;
        break;
      }
      Dr || (Dr = Ct == "constructor");
    }
    if (Yt && !Dr) {
      var Di = _.constructor,
        Lt = N.constructor;
      Di != Lt &&
        "constructor" in _ &&
        "constructor" in N &&
        !(
          typeof Di == "function" &&
          Di instanceof Di &&
          typeof Lt == "function" &&
          Lt instanceof Lt
        ) &&
        (Yt = !1);
    }
    return ve.delete(_), ve.delete(N), Yt;
  }
  function en(_) {
    return Sn(_, na, _s);
  }
  function pi(_, N) {
    var B = _.__data__;
    return Is(N) ? B[typeof N == "string" ? "string" : "hash"] : B.map;
  }
  function yr(_, N) {
    var B = Ue(_, N);
    return Zo(B) ? B : void 0;
  }
  function ws(_) {
    var N = Le.call(_, Qt),
      B = _[Qt];
    try {
      _[Qt] = void 0;
      var re = !0;
    } catch {}
    var Ke = Dt.call(_);
    return re && (N ? (_[Qt] = B) : delete _[Qt]), Ke;
  }
  var _s = Qr
      ? function (_) {
          return _ == null
            ? []
            : ((_ = Object(_)),
              Ce(Qr(_), function (N) {
                return or.call(_, N);
              }));
        }
      : Ve,
    Hr = Ni;
  ((ht && Hr(new ht(new ArrayBuffer(1))) != Ne) ||
    (rt && Hr(new rt()) != Q) ||
    (lt && Hr(lt.resolve()) != m) ||
    (ft && Hr(new ft()) != g) ||
    (at && Hr(new at()) != se)) &&
    (Hr = function (_) {
      var N = Ni(_),
        B = N == f ? _.constructor : void 0,
        re = B ? Xr(B) : "";
      if (re)
        switch (re) {
          case Pt:
            return Ne;
          case Ot:
            return Q;
          case dt:
            return m;
          case At:
            return g;
          case pt:
            return se;
        }
      return N;
    });
  function Es(_, N) {
    return (
      (N = N ?? d),
      !!N &&
        (typeof _ == "number" || zr.test(_)) &&
        _ > -1 &&
        _ % 1 == 0 &&
        _ < N
    );
  }
  function Is(_) {
    var N = typeof _;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean"
      ? _ !== "__proto__"
      : _ === null;
  }
  function Ss(_) {
    return !!xt && xt in _;
  }
  function xs(_) {
    var N = _ && _.constructor,
      B = (typeof N == "function" && N.prototype) || $e;
    return _ === B;
  }
  function ta(_) {
    return Dt.call(_);
  }
  function Xr(_) {
    if (_ != null) {
      try {
        return ut.call(_);
      } catch {}
      try {
        return _ + "";
      } catch {}
    }
    return "";
  }
  function Ps(_, N) {
    return _ === N || (_ !== _ && N !== N);
  }
  var Os = xn(
      (function () {
        return arguments;
      })()
    )
      ? xn
      : function (_) {
          return $i(_) && Le.call(_, "callee") && !or.call(_, "callee");
        },
    tn = Array.isArray;
  function ra(_) {
    return _ != null && As(_.length) && !rn(_);
  }
  var Pn = di || ke;
  function ia(_, N) {
    return Ci(_, N);
  }
  function rn(_) {
    if (!Ts(_)) return !1;
    var N = Ni(_);
    return N == J || N == H || N == $ || N == b;
  }
  function As(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= d;
  }
  function Ts(_) {
    var N = typeof _;
    return _ != null && (N == "object" || N == "function");
  }
  function $i(_) {
    return _ != null && typeof _ == "object";
  }
  var Rs = _e ? mt(_e) : ms;
  function na(_) {
    return ra(_) ? gs(_) : vs(_);
  }
  function Ve() {
    return [];
  }
  function ke() {
    return !1;
  }
  s.exports = ia;
})(g_, Ao);
function y_(s, t) {
  if (s.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
  for (var a = 0; a < s.length; a++) {
    var h = s.charAt(a),
      d = h.charCodeAt(0);
    if (r[d] !== 255) throw new TypeError(h + " is ambiguous");
    r[d] = a;
  }
  var w = s.length,
    S = s.charAt(0),
    $ = Math.log(w) / Math.log(256),
    A = Math.log(256) / Math.log(w);
  function U(H) {
    if (
      (H instanceof Uint8Array ||
        (ArrayBuffer.isView(H)
          ? (H = new Uint8Array(H.buffer, H.byteOffset, H.byteLength))
          : Array.isArray(H) && (H = Uint8Array.from(H))),
      !(H instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (H.length === 0) return "";
    for (var Q = 0, oe = 0, pe = 0, f = H.length; pe !== f && H[pe] === 0; )
      pe++, Q++;
    for (var m = ((f - pe) * A + 1) >>> 0, b = new Uint8Array(m); pe !== f; ) {
      for (
        var v = H[pe], g = 0, R = m - 1;
        (v !== 0 || g < oe) && R !== -1;
        R--, g++
      )
        (v += (256 * b[R]) >>> 0), (b[R] = v % w >>> 0), (v = (v / w) >>> 0);
      if (v !== 0) throw new Error("Non-zero carry");
      (oe = g), pe++;
    }
    for (var P = m - oe; P !== m && b[P] === 0; ) P++;
    for (var X = S.repeat(Q); P < m; ++P) X += s.charAt(b[P]);
    return X;
  }
  function G(H) {
    if (typeof H != "string") throw new TypeError("Expected String");
    if (H.length === 0) return new Uint8Array();
    var Q = 0;
    if (H[Q] !== " ") {
      for (var oe = 0, pe = 0; H[Q] === S; ) oe++, Q++;
      for (
        var f = ((H.length - Q) * $ + 1) >>> 0, m = new Uint8Array(f);
        H[Q];

      ) {
        var b = r[H.charCodeAt(Q)];
        if (b === 255) return;
        for (var v = 0, g = f - 1; (b !== 0 || v < pe) && g !== -1; g--, v++)
          (b += (w * m[g]) >>> 0),
            (m[g] = b % 256 >>> 0),
            (b = (b / 256) >>> 0);
        if (b !== 0) throw new Error("Non-zero carry");
        (pe = v), Q++;
      }
      if (H[Q] !== " ") {
        for (var R = f - pe; R !== f && m[R] === 0; ) R++;
        for (var P = new Uint8Array(oe + (f - R)), X = oe; R !== f; )
          P[X++] = m[R++];
        return P;
      }
    }
  }
  function J(H) {
    var Q = G(H);
    if (Q) return Q;
    throw new Error(`Non-${t} character`);
  }
  return { encode: U, decodeUnsafe: G, decode: J };
}
var m_ = y_,
  v_ = m_;
const ud = (s) => {
    if (s instanceof Uint8Array && s.constructor.name === "Uint8Array")
      return s;
    if (s instanceof ArrayBuffer) return new Uint8Array(s);
    if (ArrayBuffer.isView(s))
      return new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  b_ = (s) => new TextEncoder().encode(s),
  w_ = (s) => new TextDecoder().decode(s);
class __ {
  constructor(t, r, n) {
    (this.name = t), (this.prefix = r), (this.baseEncode = n);
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class E_ {
  constructor(t, r, n) {
    if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = n);
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(t)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(t) {
    return hd(this, t);
  }
}
class I_ {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return hd(this, t);
  }
  decode(t) {
    const r = t[0],
      n = this.decoders[r];
    if (n) return n.decode(t);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        t
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const hd = (s, t) =>
  new I_({
    ...(s.decoders || { [s.prefix]: s }),
    ...(t.decoders || { [t.prefix]: t }),
  });
class S_ {
  constructor(t, r, n, a) {
    (this.name = t),
      (this.prefix = r),
      (this.baseEncode = n),
      (this.baseDecode = a),
      (this.encoder = new __(t, r, n)),
      (this.decoder = new E_(t, r, a));
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Uo = ({ name: s, prefix: t, encode: r, decode: n }) => new S_(s, t, r, n),
  ls = ({ prefix: s, name: t, alphabet: r }) => {
    const { encode: n, decode: a } = v_(r, t);
    return Uo({ prefix: s, name: t, encode: n, decode: (h) => ud(a(h)) });
  },
  x_ = (s, t, r, n) => {
    const a = {};
    for (let A = 0; A < t.length; ++A) a[t[A]] = A;
    let h = s.length;
    for (; s[h - 1] === "="; ) --h;
    const d = new Uint8Array(((h * r) / 8) | 0);
    let w = 0,
      S = 0,
      $ = 0;
    for (let A = 0; A < h; ++A) {
      const U = a[s[A]];
      if (U === void 0) throw new SyntaxError(`Non-${n} character`);
      (S = (S << r) | U),
        (w += r),
        w >= 8 && ((w -= 8), (d[$++] = 255 & (S >> w)));
    }
    if (w >= r || 255 & (S << (8 - w)))
      throw new SyntaxError("Unexpected end of data");
    return d;
  },
  P_ = (s, t, r) => {
    const n = t[t.length - 1] === "=",
      a = (1 << r) - 1;
    let h = "",
      d = 0,
      w = 0;
    for (let S = 0; S < s.length; ++S)
      for (w = (w << 8) | s[S], d += 8; d > r; )
        (d -= r), (h += t[a & (w >> d)]);
    if ((d && (h += t[a & (w << (r - d))]), n))
      for (; (h.length * r) & 7; ) h += "=";
    return h;
  },
  Vt = ({ name: s, prefix: t, bitsPerChar: r, alphabet: n }) =>
    Uo({
      prefix: t,
      name: s,
      encode(a) {
        return P_(a, n, r);
      },
      decode(a) {
        return x_(a, n, r, s);
      },
    }),
  O_ = Uo({
    prefix: "\0",
    name: "identity",
    encode: (s) => w_(s),
    decode: (s) => b_(s),
  });
var A_ = Object.freeze({ __proto__: null, identity: O_ });
const T_ = Vt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var R_ = Object.freeze({ __proto__: null, base2: T_ });
const N_ = Vt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var C_ = Object.freeze({ __proto__: null, base8: N_ });
const $_ = ls({ prefix: "9", name: "base10", alphabet: "0123456789" });
var D_ = Object.freeze({ __proto__: null, base10: $_ });
const F_ = Vt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  U_ = Vt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var j_ = Object.freeze({ __proto__: null, base16: F_, base16upper: U_ });
const L_ = Vt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  M_ = Vt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  q_ = Vt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  z_ = Vt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  k_ = Vt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  H_ = Vt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  B_ = Vt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  V_ = Vt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  K_ = Vt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var W_ = Object.freeze({
  __proto__: null,
  base32: L_,
  base32upper: M_,
  base32pad: q_,
  base32padupper: z_,
  base32hex: k_,
  base32hexupper: H_,
  base32hexpad: B_,
  base32hexpadupper: V_,
  base32z: K_,
});
const G_ = ls({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  J_ = ls({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var Q_ = Object.freeze({ __proto__: null, base36: G_, base36upper: J_ });
const Y_ = ls({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  X_ = ls({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var Z_ = Object.freeze({ __proto__: null, base58btc: Y_, base58flickr: X_ });
const eE = Vt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  tE = Vt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  rE = Vt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  iE = Vt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var nE = Object.freeze({
  __proto__: null,
  base64: eE,
  base64pad: tE,
  base64url: rE,
  base64urlpad: iE,
});
const ld = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  sE = ld.reduce((s, t, r) => ((s[r] = t), s), []),
  oE = ld.reduce((s, t, r) => ((s[t.codePointAt(0)] = r), s), []);
function aE(s) {
  return s.reduce((t, r) => ((t += sE[r]), t), "");
}
function cE(s) {
  const t = [];
  for (const r of s) {
    const n = oE[r.codePointAt(0)];
    if (n === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
const uE = Uo({ prefix: "🚀", name: "base256emoji", encode: aE, decode: cE });
var hE = Object.freeze({ __proto__: null, base256emoji: uE }),
  lE = fd,
  Wl = 128,
  fE = 127,
  dE = ~fE,
  pE = Math.pow(2, 31);
function fd(s, t, r) {
  (t = t || []), (r = r || 0);
  for (var n = r; s >= pE; ) (t[r++] = (s & 255) | Wl), (s /= 128);
  for (; s & dE; ) (t[r++] = (s & 255) | Wl), (s >>>= 7);
  return (t[r] = s | 0), (fd.bytes = r - n + 1), t;
}
var gE = $c,
  yE = 128,
  Gl = 127;
function $c(s, n) {
  var r = 0,
    n = n || 0,
    a = 0,
    h = n,
    d,
    w = s.length;
  do {
    if (h >= w)
      throw (($c.bytes = 0), new RangeError("Could not decode varint"));
    (d = s[h++]),
      (r += a < 28 ? (d & Gl) << a : (d & Gl) * Math.pow(2, a)),
      (a += 7);
  } while (d >= yE);
  return ($c.bytes = h - n), r;
}
var mE = Math.pow(2, 7),
  vE = Math.pow(2, 14),
  bE = Math.pow(2, 21),
  wE = Math.pow(2, 28),
  _E = Math.pow(2, 35),
  EE = Math.pow(2, 42),
  IE = Math.pow(2, 49),
  SE = Math.pow(2, 56),
  xE = Math.pow(2, 63),
  PE = function (s) {
    return s < mE
      ? 1
      : s < vE
      ? 2
      : s < bE
      ? 3
      : s < wE
      ? 4
      : s < _E
      ? 5
      : s < EE
      ? 6
      : s < IE
      ? 7
      : s < SE
      ? 8
      : s < xE
      ? 9
      : 10;
  },
  OE = { encode: lE, decode: gE, encodingLength: PE },
  dd = OE;
const Jl = (s, t, r = 0) => (dd.encode(s, t, r), t),
  Ql = (s) => dd.encodingLength(s),
  Dc = (s, t) => {
    const r = t.byteLength,
      n = Ql(s),
      a = n + Ql(r),
      h = new Uint8Array(a + r);
    return Jl(s, h, 0), Jl(r, h, n), h.set(t, a), new AE(s, r, t, h);
  };
class AE {
  constructor(t, r, n, a) {
    (this.code = t), (this.size = r), (this.digest = n), (this.bytes = a);
  }
}
const pd = ({ name: s, code: t, encode: r }) => new TE(s, t, r);
class TE {
  constructor(t, r, n) {
    (this.name = t), (this.code = r), (this.encode = n);
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array
        ? Dc(this.code, r)
        : r.then((n) => Dc(this.code, n));
    } else throw Error("Unknown type, must be binary type");
  }
}
const gd = (s) => async (t) => new Uint8Array(await crypto.subtle.digest(s, t)),
  RE = pd({ name: "sha2-256", code: 18, encode: gd("SHA-256") }),
  NE = pd({ name: "sha2-512", code: 19, encode: gd("SHA-512") });
var CE = Object.freeze({ __proto__: null, sha256: RE, sha512: NE });
const yd = 0,
  $E = "identity",
  md = ud,
  DE = (s) => Dc(yd, md(s)),
  FE = { code: yd, name: $E, encode: md, digest: DE };
var UE = Object.freeze({ __proto__: null, identity: FE });
new TextEncoder(), new TextDecoder();
const Yl = {
  ...A_,
  ...R_,
  ...C_,
  ...D_,
  ...j_,
  ...W_,
  ...Q_,
  ...Z_,
  ...nE,
  ...hE,
};
({ ...CE, ...UE });
function vd(s) {
  return globalThis.Buffer != null
    ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength)
    : s;
}
function jE(s = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? vd(globalThis.Buffer.allocUnsafe(s))
    : new Uint8Array(s);
}
function bd(s, t, r, n) {
  return {
    name: s,
    prefix: t,
    encoder: { name: s, prefix: t, encode: r },
    decoder: { decode: n },
  };
}
const Xl = bd(
    "utf8",
    "u",
    (s) => "u" + new TextDecoder("utf8").decode(s),
    (s) => new TextEncoder().encode(s.substring(1))
  ),
  mc = bd(
    "ascii",
    "a",
    (s) => {
      let t = "a";
      for (let r = 0; r < s.length; r++) t += String.fromCharCode(s[r]);
      return t;
    },
    (s) => {
      s = s.substring(1);
      const t = jE(s.length);
      for (let r = 0; r < s.length; r++) t[r] = s.charCodeAt(r);
      return t;
    }
  ),
  LE = {
    utf8: Xl,
    "utf-8": Xl,
    hex: Yl.base16,
    latin1: mc,
    ascii: mc,
    binary: mc,
    ...Yl,
  };
function ME(s, t = "utf8") {
  const r = LE[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? vd(globalThis.Buffer.from(s, "utf-8"))
    : r.decoder.decode(`${r.prefix}${s}`);
}
const wd = "wc",
  qE = 2,
  eu = "core",
  xi = `${wd}@2:${eu}:`,
  zE = { name: eu, logger: "error" },
  kE = { database: ":memory:" },
  HE = "crypto",
  Zl = "client_ed25519_seed",
  BE = ue.ONE_DAY,
  VE = "keychain",
  KE = "0.3",
  WE = "messages",
  GE = "0.3",
  JE = ue.SIX_HOURS,
  QE = "publisher",
  _d = "irn",
  YE = "error",
  Ed = "wss://relay.walletconnect.com",
  ef = "wss://relay.walletconnect.org",
  XE = "relayer",
  Gt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  ZE = "_subscription",
  hi = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  eI = ue.ONE_SECOND,
  tI = "2.10.1",
  rI = 1e4,
  iI = "0.3",
  nI = "WALLETCONNECT_CLIENT_ID",
  Jr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  sI = "subscription",
  oI = "0.3",
  aI = ue.FIVE_SECONDS * 1e3,
  cI = "pairing",
  uI = "0.3",
  Wn = {
    wc_pairingDelete: {
      req: { ttl: ue.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: ue.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: ue.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: ue.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: ue.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: ue.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Xn = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Gr = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  hI = "history",
  lI = "0.3",
  fI = "expirer",
  Cr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  dI = "0.3",
  vc = "verify-api",
  Io = "https://verify.walletconnect.com",
  tf = "https://verify.walletconnect.org";
class pI {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.keychain = new Map()),
      (this.name = VE),
      (this.version = KE),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        if (!this.initialized) {
          const n = await this.getKeyChain();
          typeof n < "u" && (this.keychain = n), (this.initialized = !0);
        }
      }),
      (this.has = (n) => (this.isInitialized(), this.keychain.has(n))),
      (this.set = async (n, a) => {
        this.isInitialized(), this.keychain.set(n, a), await this.persist();
      }),
      (this.get = (n) => {
        this.isInitialized();
        const a = this.keychain.get(n);
        if (typeof a > "u") {
          const { message: h } = te("NO_MATCHING_KEY", `${this.name}: ${n}`);
          throw new Error(h);
        }
        return a;
      }),
      (this.del = async (n) => {
        this.isInitialized(), this.keychain.delete(n), await this.persist();
      }),
      (this.core = t),
      (this.logger = Re.generateChildLogger(r, this.name));
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, Qf(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? Yf(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
let gI = class {
  constructor(t, r, n) {
    (this.core = t),
      (this.logger = r),
      (this.name = HE),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (a) => (this.isInitialized(), this.keychain.has(a))),
      (this.getClientId = async () => {
        this.isInitialized();
        const a = await this.getClientSeed(),
          h = Pl(a);
        return Vf(h.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const a = Db();
        return this.setPrivateKey(a.publicKey, a.privateKey);
      }),
      (this.signJWT = async (a) => {
        this.isInitialized();
        const h = await this.getClientSeed(),
          d = Pl(h),
          w = Nc();
        return await Cb(w, a, BE, d);
      }),
      (this.generateSharedKey = (a, h, d) => {
        this.isInitialized();
        const w = this.getPrivateKey(a),
          S = Fb(w, h);
        return this.setSymKey(S, d);
      }),
      (this.setSymKey = async (a, h) => {
        this.isInitialized();
        const d = h || Ub(a);
        return await this.keychain.set(d, a), d;
      }),
      (this.deleteKeyPair = async (a) => {
        this.isInitialized(), await this.keychain.del(a);
      }),
      (this.deleteSymKey = async (a) => {
        this.isInitialized(), await this.keychain.del(a);
      }),
      (this.encode = async (a, h, d) => {
        this.isInitialized();
        const w = Jf(d),
          S = is(h);
        if (Al(w)) {
          const G = w.senderPublicKey,
            J = w.receiverPublicKey;
          a = await this.generateSharedKey(G, J);
        }
        const $ = this.getSymKey(a),
          { type: A, senderPublicKey: U } = w;
        return Lb({ type: A, symKey: $, message: S, senderPublicKey: U });
      }),
      (this.decode = async (a, h, d) => {
        this.isInitialized();
        const w = zb(h, d);
        if (Al(w)) {
          const S = w.receiverPublicKey,
            $ = w.senderPublicKey;
          a = await this.generateSharedKey(S, $);
        }
        try {
          const S = this.getSymKey(a),
            $ = Mb({ symKey: S, encoded: h });
          return Bc($);
        } catch (S) {
          this.logger.error(
            `Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(S);
        }
      }),
      (this.getPayloadType = (a) => {
        const h = Po(a);
        return as(h.type);
      }),
      (this.getPayloadSenderPublicKey = (a) => {
        const h = Po(a);
        return h.senderPublicKey ? nr(h.senderPublicKey, ir) : void 0;
      }),
      (this.core = t),
      (this.logger = Re.generateChildLogger(r, this.name)),
      (this.keychain = n || new pI(this.core, this.logger));
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(Zl);
    } catch {
      (t = Nc()), await this.keychain.set(Zl, t);
    }
    return ME(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
};
class yI extends cb {
  constructor(t, r) {
    super(t, r),
      (this.logger = t),
      (this.core = r),
      (this.messages = new Map()),
      (this.name = WE),
      (this.version = GE),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const n = await this.getRelayerMessages();
            typeof n < "u" && (this.messages = n),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (n) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(n);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (n, a) => {
        this.isInitialized();
        const h = bn(a);
        let d = this.messages.get(n);
        return (
          typeof d > "u" && (d = {}),
          typeof d[h] < "u" ||
            ((d[h] = a), this.messages.set(n, d), await this.persist()),
          h
        );
      }),
      (this.get = (n) => {
        this.isInitialized();
        let a = this.messages.get(n);
        return typeof a > "u" && (a = {}), a;
      }),
      (this.has = (n, a) => {
        this.isInitialized();
        const h = this.get(n),
          d = bn(a);
        return typeof h[d] < "u";
      }),
      (this.del = async (n) => {
        this.isInitialized(), this.messages.delete(n), await this.persist();
      }),
      (this.logger = Re.generateChildLogger(t, this.name)),
      (this.core = r);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, Qf(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? Yf(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class mI extends ub {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.events = new sr.EventEmitter()),
      (this.name = QE),
      (this.queue = new Map()),
      (this.publishTimeout = ue.toMiliseconds(ue.TEN_SECONDS)),
      (this.needsTransportRestart = !1),
      (this.publish = async (n, a, h) => {
        var d;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: n, message: a, opts: h },
          });
        try {
          const w = (h == null ? void 0 : h.ttl) || JE,
            S = Cc(h),
            $ = (h == null ? void 0 : h.prompt) || !1,
            A = (h == null ? void 0 : h.tag) || 0,
            U = (h == null ? void 0 : h.id) || od().toString(),
            G = {
              topic: n,
              message: a,
              opts: { ttl: w, relay: S, prompt: $, tag: A, id: U },
            },
            J = setTimeout(() => this.queue.set(U, G), this.publishTimeout);
          try {
            await await ss(
              this.rpcPublish(n, a, w, S, $, A, U),
              this.publishTimeout,
              "Failed to publish payload, please try again."
            ),
              this.removeRequestFromQueue(U),
              this.relayer.events.emit(Gt.publish, G);
          } catch (H) {
            if (
              (this.logger.debug("Publishing Payload stalled"),
              (this.needsTransportRestart = !0),
              (d = h == null ? void 0 : h.internal) != null &&
                d.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(U), H);
            return;
          } finally {
            clearTimeout(J);
          }
          this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: n, message: a, opts: h },
            });
        } catch (w) {
          throw (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(w),
            w)
          );
        }
      }),
      (this.on = (n, a) => {
        this.events.on(n, a);
      }),
      (this.once = (n, a) => {
        this.events.once(n, a);
      }),
      (this.off = (n, a) => {
        this.events.off(n, a);
      }),
      (this.removeListener = (n, a) => {
        this.events.removeListener(n, a);
      }),
      (this.relayer = t),
      (this.logger = Re.generateChildLogger(r, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, n, a, h, d, w) {
    var S, $, A, U;
    const G = {
      method: _o(a.protocol).publish,
      params: { topic: t, message: r, ttl: n, prompt: h, tag: d },
      id: w,
    };
    return (
      rr((S = G.params) == null ? void 0 : S.prompt) &&
        (($ = G.params) == null || delete $.prompt),
      rr((A = G.params) == null ? void 0 : A.tag) &&
        ((U = G.params) == null || delete U.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: G }),
      this.relayer.request(G)
    );
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: n, opts: a } = t;
      await this.publish(r, n, a);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(_n.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(Gt.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(Gt.message_ack, (t) => {
        this.removeRequestFromQueue(t.id.toString());
      });
  }
}
class vI {
  constructor() {
    (this.map = new Map()),
      (this.set = (t, r) => {
        const n = this.get(t);
        this.exists(t, r) || this.map.set(t, [...n, r]);
      }),
      (this.get = (t) => this.map.get(t) || []),
      (this.exists = (t, r) => this.get(t).includes(r)),
      (this.delete = (t, r) => {
        if (typeof r > "u") {
          this.map.delete(t);
          return;
        }
        if (!this.map.has(t)) return;
        const n = this.get(t);
        if (!this.exists(t, r)) return;
        const a = n.filter((h) => h !== r);
        if (!a.length) {
          this.map.delete(t);
          return;
        }
        this.map.set(t, a);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var bI = Object.defineProperty,
  wI = Object.defineProperties,
  _I = Object.getOwnPropertyDescriptors,
  rf = Object.getOwnPropertySymbols,
  EI = Object.prototype.hasOwnProperty,
  II = Object.prototype.propertyIsEnumerable,
  nf = (s, t, r) =>
    t in s
      ? bI(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  Gn = (s, t) => {
    for (var r in t || (t = {})) EI.call(t, r) && nf(s, r, t[r]);
    if (rf) for (var r of rf(t)) II.call(t, r) && nf(s, r, t[r]);
    return s;
  },
  bc = (s, t) => wI(s, _I(t));
class SI extends fb {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.subscriptions = new Map()),
      (this.topicMap = new vI()),
      (this.events = new sr.EventEmitter()),
      (this.name = sI),
      (this.version = oI),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = xi),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (n, a) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: n, opts: a },
          });
        try {
          const h = Cc(a),
            d = { topic: n, relay: h };
          this.pending.set(n, d);
          const w = await this.rpcSubscribe(n, h);
          return (
            this.onSubscribe(w, d),
            this.logger.debug("Successfully Subscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: n, opts: a },
            }),
            w
          );
        } catch (h) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(h),
            h)
          );
        }
      }),
      (this.unsubscribe = async (n, a) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (a == null ? void 0 : a.id) < "u"
            ? await this.unsubscribeById(n, a.id, a)
            : await this.unsubscribeByTopic(n, a);
      }),
      (this.isSubscribed = async (n) =>
        this.topics.includes(n)
          ? !0
          : await new Promise((a, h) => {
              const d = new ue.Watch();
              d.start(this.pendingSubscriptionWatchLabel);
              const w = setInterval(() => {
                !this.pending.has(n) &&
                  this.topics.includes(n) &&
                  (clearInterval(w),
                  d.stop(this.pendingSubscriptionWatchLabel),
                  a(!0)),
                  d.elapsed(this.pendingSubscriptionWatchLabel) >= aI &&
                    (clearInterval(w),
                    d.stop(this.pendingSubscriptionWatchLabel),
                    h(new Error("Subscription resolution timeout")));
              }, this.pollingInterval);
            }).catch(() => !1)),
      (this.on = (n, a) => {
        this.events.on(n, a);
      }),
      (this.once = (n, a) => {
        this.events.once(n, a);
      }),
      (this.off = (n, a) => {
        this.events.off(n, a);
      }),
      (this.removeListener = (n, a) => {
        this.events.removeListener(n, a);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = t),
      (this.logger = Re.generateChildLogger(r, this.name)),
      (this.clientId = "");
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, r) {
    let n = !1;
    try {
      n = this.getSubscription(t).topic === r;
    } catch {}
    return n;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const n = this.topicMap.get(t);
    await Promise.all(n.map(async (a) => await this.unsubscribeById(t, a, r)));
  }
  async unsubscribeById(t, r, n) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: t, id: r, opts: n },
      });
    try {
      const a = Cc(n);
      await this.rpcUnsubscribe(t, r, a);
      const h = qt("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, h),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: t, id: r, opts: n },
        });
    } catch (a) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(a),
        a)
      );
    }
  }
  async rpcSubscribe(t, r) {
    const n = { method: _o(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await ss(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(Gt.connection_stalled);
    }
    return bn(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length) return;
    const r = t[0].relay,
      n = {
        method: _o(r.protocol).batchSubscribe,
        params: { topics: t.map((a) => a.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await ss(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"),
        this.relayer.events.emit(Gt.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, n) {
    const a = {
      method: _o(n.protocol).unsubscribe,
      params: { topic: t, id: r },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: a }),
      this.relayer.request(a)
    );
  }
  onSubscribe(t, r) {
    this.setSubscription(t, bc(Gn({}, r), { id: t })),
      this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length &&
      t.forEach((r) => {
        this.setSubscription(r.id, Gn({}, r)), this.pending.delete(r.topic);
      });
  }
  async onUnsubscribe(t, r, n) {
    this.events.removeAllListeners(r),
      this.hasSubscription(r, t) && this.deleteSubscription(r, n),
      await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) ||
      (this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: t,
        subscription: r,
      }),
      this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, Gn({}, r)),
      this.topicMap.set(r.topic, t),
      this.events.emit(Jr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: n } = te("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: t,
        reason: r,
      });
    const n = this.getSubscription(t);
    this.subscriptions.delete(t),
      this.topicMap.delete(n.topic, t),
      this.events.emit(Jr.deleted, bc(Gn({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Jr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Jr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length) return;
      if (this.subscriptions.size) {
        const { message: r } = te("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(r),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(r))
        );
      }
      (this.cached = t),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length) return;
    const r = await this.rpcBatchSubscribe(t);
    hs(r) &&
      this.onBatchSubscribe(r.map((n, a) => bc(Gn({}, t[a]), { id: n })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }),
      await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(_n.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(Gt.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(Gt.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(Jr.created, async (t) => {
        const r = Jr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          await this.persist();
      }),
      this.events.on(Jr.deleted, async (t) => {
        const r = Jr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.restartInProgress || (clearInterval(r), t());
        }, this.pollingInterval);
      }));
  }
}
var xI = Object.defineProperty,
  sf = Object.getOwnPropertySymbols,
  PI = Object.prototype.hasOwnProperty,
  OI = Object.prototype.propertyIsEnumerable,
  of = (s, t, r) =>
    t in s
      ? xI(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  AI = (s, t) => {
    for (var r in t || (t = {})) PI.call(t, r) && of(s, r, t[r]);
    if (sf) for (var r of sf(t)) OI.call(t, r) && of(s, r, t[r]);
    return s;
  };
class TI extends hb {
  constructor(t) {
    super(t),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new sr.EventEmitter()),
      (this.name = XE),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.request = async (r) => {
        this.logger.debug("Publishing Request Payload");
        try {
          return (
            await this.toEstablishConnection(), await this.provider.request(r)
          );
        } catch (n) {
          throw (
            (this.logger.debug("Failed to Publish Request"),
            this.logger.error(n),
            n)
          );
        }
      }),
      (this.onPayloadHandler = (r) => {
        this.onProviderPayload(r);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(Gt.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (r) => {
        this.logger.error(r),
          this.events.emit(Gt.error, r),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(hi.payload, this.onPayloadHandler),
          this.provider.on(hi.connect, this.onConnectHandler),
          this.provider.on(hi.disconnect, this.onDisconnectHandler),
          this.provider.on(hi.error, this.onProviderErrorHandler);
      }),
      (this.core = t.core),
      (this.logger =
        typeof t.logger < "u" && typeof t.logger != "string"
          ? Re.generateChildLogger(t.logger, this.name)
          : Re.pino(Re.getDefaultLoggerOptions({ level: t.logger || YE }))),
      (this.messages = new yI(this.logger, t.core)),
      (this.subscriber = new SI(this, this.logger)),
      (this.publisher = new mI(this, this.logger)),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || Ed),
      (this.projectId = t.projectId),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ef}...`
      ),
        await this.restartTransport(ef);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, rI);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, n) {
    this.isInitialized(),
      await this.publisher.publish(t, r, n),
      await this.recordMessageEvent({
        topic: t,
        message: r,
        publishedAt: Date.now(),
      });
  }
  async subscribe(t, r) {
    var n;
    this.isInitialized();
    let a =
      ((n = this.subscriber.topicMap.get(t)) == null ? void 0 : n[0]) || "";
    return (
      a ||
      (await Promise.all([
        new Promise((h) => {
          this.subscriber.once(Jr.created, (d) => {
            d.topic === t && h();
          });
        }),
        new Promise(async (h) => {
          (a = await this.subscriber.subscribe(t, r)), h();
        }),
      ]),
      a)
    );
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await ss(
            this.provider.disconnect(),
            1e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(t) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      t &&
        t !== this.relayUrl &&
        ((this.relayUrl = t),
        await this.transportClose(),
        await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((r) => {
            if (!this.initialized) return r();
            this.subscriber.once(Jr.resubscribed, () => {
              r();
            });
          }),
          new Promise(async (r, n) => {
            try {
              await ss(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`
              );
            } catch (a) {
              n(a);
              return;
            }
            r();
          }),
        ]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message)) throw r;
        this.provider.events.emit(hi.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1),
          (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = t || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await Ll()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new Oi(
      new p_(
        Xb({
          sdkVersion: tI,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: t,
          useOnCloseEvent: !0,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: n } = t;
    await this.messages.set(r, n);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: n } = t;
    if (!n || n.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
    if (!(await this.subscriber.isSubscribed(r)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0
      );
    const a = this.messages.has(r, n);
    return a && this.logger.debug(`Ignoring duplicate message: ${n}`), a;
  }
  async onProviderPayload(t) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: t }),
      Zc(t))
    ) {
      if (!t.method.endsWith(ZE)) return;
      const r = t.params,
        { topic: n, message: a, publishedAt: h } = r.data,
        d = { topic: n, message: a, publishedAt: h };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(AI({ type: "event", event: r.id }, d)),
        this.events.emit(r.id, d),
        await this.acknowledgePayload(t),
        await this.onMessageEvent(d);
    } else Fo(t) && this.events.emit(Gt.message_ack, t);
  }
  async onMessageEvent(t) {
    (await this.shouldIgnoreMessageEvent(t)) ||
      (this.events.emit(Gt.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Xc(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(hi.payload, this.onPayloadHandler),
      this.provider.off(hi.connect, this.onConnectHandler),
      this.provider.off(hi.disconnect, this.onDisconnectHandler),
      this.provider.off(hi.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Gt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await Ll();
    Bw(async (r) => {
      this.initialized &&
        t !== r &&
        ((t = r),
        r
          ? await this.restartTransport().catch((n) => this.logger.error(n))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Gt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info("attemptToReconnect called. Connecting..."),
      setTimeout(async () => {
        await this.restartTransport().catch((t) => this.logger.error(t));
      }, ue.toMiliseconds(eI)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var RI = Object.defineProperty,
  af = Object.getOwnPropertySymbols,
  NI = Object.prototype.hasOwnProperty,
  CI = Object.prototype.propertyIsEnumerable,
  cf = (s, t, r) =>
    t in s
      ? RI(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  uf = (s, t) => {
    for (var r in t || (t = {})) NI.call(t, r) && cf(s, r, t[r]);
    if (af) for (var r of af(t)) CI.call(t, r) && cf(s, r, t[r]);
    return s;
  };
class jo extends lb {
  constructor(t, r, n, a = xi, h = void 0) {
    super(t, r, n, a),
      (this.core = t),
      (this.logger = r),
      (this.name = n),
      (this.map = new Map()),
      (this.version = iI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((d) => {
            this.getKey && d !== null && !rr(d)
              ? this.map.set(this.getKey(d), d)
              : _w(d)
              ? this.map.set(d.id, d)
              : Ew(d) && this.map.set(d.topic, d);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (d, w) => {
        this.isInitialized(),
          this.map.has(d)
            ? await this.update(d, w)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: d,
                value: w,
              }),
              this.map.set(d, w),
              await this.persist());
      }),
      (this.get = (d) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: d }),
        this.getData(d)
      )),
      (this.getAll = (d) => (
        this.isInitialized(),
        d
          ? this.values.filter((w) =>
              Object.keys(d).every((S) => Ao(w[S], d[S]))
            )
          : this.values
      )),
      (this.update = async (d, w) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: d,
            update: w,
          });
        const S = uf(uf({}, this.getData(d)), w);
        this.map.set(d, S), await this.persist();
      }),
      (this.delete = async (d, w) => {
        this.isInitialized(),
          this.map.has(d) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: d,
              reason: w,
            }),
            this.map.delete(d),
            await this.persist());
      }),
      (this.logger = Re.generateChildLogger(r, this.name)),
      (this.storagePrefix = a),
      (this.getKey = h);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: n } = te("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(n), new Error(n));
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length) return;
      if (this.map.size) {
        const { message: r } = te("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class $I {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.name = cI),
      (this.version = uI),
      (this.events = new sr()),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.ignoredPayloadTypes = [Wi]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: n }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...n]),
          ]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const n = Nc(),
          a = await this.core.crypto.setSymKey(n),
          h = Mr(ue.FIVE_MINUTES),
          d = { protocol: _d },
          w = { topic: a, expiry: h, relay: d, active: !1 },
          S = lw({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: a,
            symKey: n,
            relay: d,
          });
        return (
          await this.pairings.set(a, w),
          await this.core.relayer.subscribe(a),
          this.core.expirer.set(a, h),
          { topic: a, uri: S }
        );
      }),
      (this.pair = async (n) => {
        this.isInitialized(), this.isValidPair(n);
        const { topic: a, symKey: h, relay: d } = cw(n.uri);
        let w;
        if (
          this.pairings.keys.includes(a) &&
          ((w = this.pairings.get(a)), w.active)
        )
          throw new Error(
            `Pairing already exists: ${a}. Please try again with a new connection URI.`
          );
        this.core.crypto.keychain.has(a) ||
          (await this.core.crypto.setSymKey(h, a),
          await this.core.relayer.subscribe(a, { relay: d }));
        const S = Mr(ue.FIVE_MINUTES),
          $ = { topic: a, relay: d, expiry: S, active: !1 };
        return (
          await this.pairings.set(a, $),
          this.core.expirer.set(a, S),
          n.activatePairing && (await this.activate({ topic: a })),
          this.events.emit(Xn.create, $),
          $
        );
      }),
      (this.activate = async ({ topic: n }) => {
        this.isInitialized();
        const a = Mr(ue.THIRTY_DAYS);
        await this.pairings.update(n, { active: !0, expiry: a }),
          this.core.expirer.set(n, a);
      }),
      (this.ping = async (n) => {
        this.isInitialized(), await this.isValidPing(n);
        const { topic: a } = n;
        if (this.pairings.keys.includes(a)) {
          const h = await this.sendRequest(a, "wc_pairingPing", {}),
            { done: d, resolve: w, reject: S } = vn();
          this.events.once($t("pairing_ping", h), ({ error: $ }) => {
            $ ? S($) : w();
          }),
            await d();
        }
      }),
      (this.updateExpiry = async ({ topic: n, expiry: a }) => {
        this.isInitialized(), await this.pairings.update(n, { expiry: a });
      }),
      (this.updateMetadata = async ({ topic: n, metadata: a }) => {
        this.isInitialized(),
          await this.pairings.update(n, { peerMetadata: a });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (n) => {
        this.isInitialized(), await this.isValidDisconnect(n);
        const { topic: a } = n;
        this.pairings.keys.includes(a) &&
          (await this.sendRequest(
            a,
            "wc_pairingDelete",
            qt("USER_DISCONNECTED")
          ),
          await this.deletePairing(a));
      }),
      (this.sendRequest = async (n, a, h) => {
        const d = wn(a, h),
          w = await this.core.crypto.encode(n, d),
          S = Wn[a].req;
        return (
          this.core.history.set(n, d), this.core.relayer.publish(n, w, S), d.id
        );
      }),
      (this.sendResult = async (n, a, h) => {
        const d = Xc(n, h),
          w = await this.core.crypto.encode(a, d),
          S = await this.core.history.get(a, n),
          $ = Wn[S.request.method].res;
        await this.core.relayer.publish(a, w, $),
          await this.core.history.resolve(d);
      }),
      (this.sendError = async (n, a, h) => {
        const d = Do(n, h),
          w = await this.core.crypto.encode(a, d),
          S = await this.core.history.get(a, n),
          $ = Wn[S.request.method]
            ? Wn[S.request.method].res
            : Wn.unregistered_method.res;
        await this.core.relayer.publish(a, w, $),
          await this.core.history.resolve(d);
      }),
      (this.deletePairing = async (n, a) => {
        await this.core.relayer.unsubscribe(n),
          await Promise.all([
            this.pairings.delete(n, qt("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(n),
            a ? Promise.resolve() : this.core.expirer.del(n),
          ]);
      }),
      (this.cleanup = async () => {
        const n = this.pairings.getAll().filter((a) => Si(a.expiry));
        await Promise.all(n.map((a) => this.deletePairing(a.topic)));
      }),
      (this.onRelayEventRequest = (n) => {
        const { topic: a, payload: h } = n;
        switch (h.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(a, h);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(a, h);
          default:
            return this.onUnknownRpcMethodRequest(a, h);
        }
      }),
      (this.onRelayEventResponse = async (n) => {
        const { topic: a, payload: h } = n,
          d = (await this.core.history.get(a, h.id)).request.method;
        switch (d) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(a, h);
          default:
            return this.onUnknownRpcMethodResponse(d);
        }
      }),
      (this.onPairingPingRequest = async (n, a) => {
        const { id: h } = a;
        try {
          this.isValidPing({ topic: n }),
            await this.sendResult(h, n, !0),
            this.events.emit(Xn.ping, { id: h, topic: n });
        } catch (d) {
          await this.sendError(h, n, d), this.logger.error(d);
        }
      }),
      (this.onPairingPingResponse = (n, a) => {
        const { id: h } = a;
        setTimeout(() => {
          fi(a)
            ? this.events.emit($t("pairing_ping", h), {})
            : qr(a) &&
              this.events.emit($t("pairing_ping", h), { error: a.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (n, a) => {
        const { id: h } = a;
        try {
          this.isValidDisconnect({ topic: n }),
            await this.deletePairing(n),
            this.events.emit(Xn.delete, { id: h, topic: n });
        } catch (d) {
          await this.sendError(h, n, d), this.logger.error(d);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (n, a) => {
        const { id: h, method: d } = a;
        try {
          if (this.registeredMethods.includes(d)) return;
          const w = qt("WC_METHOD_UNSUPPORTED", d);
          await this.sendError(h, n, w), this.logger.error(w);
        } catch (w) {
          await this.sendError(h, n, w), this.logger.error(w);
        }
      }),
      (this.onUnknownRpcMethodResponse = (n) => {
        this.registeredMethods.includes(n) ||
          this.logger.error(qt("WC_METHOD_UNSUPPORTED", n));
      }),
      (this.isValidPair = (n) => {
        if (!dr(n)) {
          const { message: a } = te(
            "MISSING_OR_INVALID",
            `pair() params: ${n}`
          );
          throw new Error(a);
        }
        if (!ww(n.uri)) {
          const { message: a } = te(
            "MISSING_OR_INVALID",
            `pair() uri: ${n.uri}`
          );
          throw new Error(a);
        }
      }),
      (this.isValidPing = async (n) => {
        if (!dr(n)) {
          const { message: h } = te(
            "MISSING_OR_INVALID",
            `ping() params: ${n}`
          );
          throw new Error(h);
        }
        const { topic: a } = n;
        await this.isValidPairingTopic(a);
      }),
      (this.isValidDisconnect = async (n) => {
        if (!dr(n)) {
          const { message: h } = te(
            "MISSING_OR_INVALID",
            `disconnect() params: ${n}`
          );
          throw new Error(h);
        }
        const { topic: a } = n;
        await this.isValidPairingTopic(a);
      }),
      (this.isValidPairingTopic = async (n) => {
        if (!zt(n, !1)) {
          const { message: a } = te(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${n}`
          );
          throw new Error(a);
        }
        if (!this.pairings.keys.includes(n)) {
          const { message: a } = te(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${n}`
          );
          throw new Error(a);
        }
        if (Si(this.pairings.get(n).expiry)) {
          await this.deletePairing(n);
          const { message: a } = te("EXPIRED", `pairing topic: ${n}`);
          throw new Error(a);
        }
      }),
      (this.core = t),
      (this.logger = Re.generateChildLogger(r, this.name)),
      (this.pairings = new jo(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Gt.message, async (t) => {
      const { topic: r, message: n } = t;
      if (
        !this.pairings.keys.includes(r) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))
      )
        return;
      const a = await this.core.crypto.decode(r, n);
      try {
        Zc(a)
          ? (this.core.history.set(r, a),
            this.onRelayEventRequest({ topic: r, payload: a }))
          : Fo(a) &&
            (await this.core.history.resolve(a),
            await this.onRelayEventResponse({ topic: r, payload: a }),
            this.core.history.delete(r, a.id));
      } catch (h) {
        this.logger.error(h);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Cr.expired, async (t) => {
      const { topic: r } = Zf(t.target);
      r &&
        this.pairings.keys.includes(r) &&
        (await this.deletePairing(r, !0),
        this.events.emit(Xn.expire, { topic: r }));
    });
  }
}
class DI extends ab {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.records = new Map()),
      (this.events = new sr.EventEmitter()),
      (this.name = hI),
      (this.version = lI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((n) => this.records.set(n.id, n)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (n, a, h) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: n,
            request: a,
            chainId: h,
          }),
          this.records.has(a.id))
        )
          return;
        const d = {
          id: a.id,
          topic: n,
          request: { method: a.method, params: a.params || null },
          chainId: h,
          expiry: Mr(ue.THIRTY_DAYS),
        };
        this.records.set(d.id, d), this.events.emit(Gr.created, d);
      }),
      (this.resolve = async (n) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: n }),
          !this.records.has(n.id))
        )
          return;
        const a = await this.getRecord(n.id);
        typeof a.response > "u" &&
          ((a.response = qr(n) ? { error: n.error } : { result: n.result }),
          this.records.set(a.id, a),
          this.events.emit(Gr.updated, a));
      }),
      (this.get = async (n, a) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: n, id: a }),
        await this.getRecord(a)
      )),
      (this.delete = (n, a) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: a }),
          this.values.forEach((h) => {
            if (h.topic === n) {
              if (typeof a < "u" && h.id !== a) return;
              this.records.delete(h.id), this.events.emit(Gr.deleted, h);
            }
          });
      }),
      (this.exists = async (n, a) => (
        this.isInitialized(),
        this.records.has(a) ? (await this.getRecord(a)).topic === n : !1
      )),
      (this.on = (n, a) => {
        this.events.on(n, a);
      }),
      (this.once = (n, a) => {
        this.events.once(n, a);
      }),
      (this.off = (n, a) => {
        this.events.off(n, a);
      }),
      (this.removeListener = (n, a) => {
        this.events.removeListener(n, a);
      }),
      (this.logger = Re.generateChildLogger(r, this.name));
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return (
      this.values.forEach((r) => {
        if (typeof r.response < "u") return;
        const n = {
          topic: r.topic,
          request: wn(r.request.method, r.request.params, r.id),
          chainId: r.chainId,
        };
        return t.push(n);
      }),
      t
    );
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: n } = te("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Gr.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length) return;
      if (this.records.size) {
        const { message: r } = te("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(Gr.created, (t) => {
      const r = Gr.created;
      this.logger.info(`Emitting ${r}`),
        this.logger.debug({ type: "event", event: r, record: t }),
        this.persist();
    }),
      this.events.on(Gr.updated, (t) => {
        const r = Gr.updated;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t }),
          this.persist();
      }),
      this.events.on(Gr.deleted, (t) => {
        const r = Gr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t }),
          this.persist();
      }),
      this.core.heartbeat.on(_n.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        ue.toMiliseconds(t.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${t.id}`),
          this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class FI extends db {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.expirations = new Map()),
      (this.events = new sr.EventEmitter()),
      (this.name = fI),
      (this.version = dI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = xi),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((n) => this.expirations.set(n.target, n)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (n) => {
        try {
          const a = this.formatTarget(n);
          return typeof this.getExpiration(a) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (n, a) => {
        this.isInitialized();
        const h = this.formatTarget(n),
          d = { target: h, expiry: a };
        this.expirations.set(h, d),
          this.checkExpiry(h, d),
          this.events.emit(Cr.created, { target: h, expiration: d });
      }),
      (this.get = (n) => {
        this.isInitialized();
        const a = this.formatTarget(n);
        return this.getExpiration(a);
      }),
      (this.del = (n) => {
        if ((this.isInitialized(), this.has(n))) {
          const a = this.formatTarget(n),
            h = this.getExpiration(a);
          this.expirations.delete(a),
            this.events.emit(Cr.deleted, { target: a, expiration: h });
        }
      }),
      (this.on = (n, a) => {
        this.events.on(n, a);
      }),
      (this.once = (n, a) => {
        this.events.once(n, a);
      }),
      (this.off = (n, a) => {
        this.events.off(n, a);
      }),
      (this.removeListener = (n, a) => {
        this.events.removeListener(n, a);
      }),
      (this.logger = Re.generateChildLogger(r, this.name));
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == "string") return Zb(t);
    if (typeof t == "number") return ew(t);
    const { message: r } = te("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Cr.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length) return;
      if (this.expirations.size) {
        const { message: r } = te("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: n } = te("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(n), new Error(n));
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: n } = r;
    ue.toMiliseconds(n) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t),
      this.events.emit(Cr.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(_n.HEARTBEAT_EVENTS.pulse, () =>
      this.checkExpirations()
    ),
      this.events.on(Cr.created, (t) => {
        const r = Cr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on(Cr.expired, (t) => {
        const r = Cr.expired;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on(Cr.deleted, (t) => {
        const r = Cr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class UI extends pb {
  constructor(t, r) {
    super(t, r),
      (this.projectId = t),
      (this.logger = r),
      (this.name = vc),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (n) => {
        if (this.verifyDisabled || $o() || !cs()) return;
        const a = (n == null ? void 0 : n.verifyUrl) || Io;
        this.verifyUrl !== a && this.removeIframe(), (this.verifyUrl = a);
        try {
          await this.createIframe();
        } catch (h) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(h);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = tf);
          try {
            await this.createIframe();
          } catch (h) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(h),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (n) => {
        this.initialized
          ? this.sendPost(n.attestationId)
          : (this.addToQueue(n.attestationId), await this.init());
      }),
      (this.resolve = async (n) => {
        if (this.isDevEnv) return "";
        const a = (n == null ? void 0 : n.verifyUrl) || Io;
        let h;
        try {
          h = await this.fetchAttestation(n.attestationId, a);
        } catch (d) {
          this.logger.info(
            `failed to resolve attestation: ${n.attestationId} from url: ${a}`
          ),
            this.logger.info(d),
            (h = await this.fetchAttestation(n.attestationId, tf));
        }
        return h;
      }),
      (this.fetchAttestation = async (n, a) => {
        this.logger.info(`resolving attestation: ${n} from url: ${a}`);
        const h = this.startAbortTimer(ue.ONE_SECOND * 2),
          d = await fetch(`${a}/attestation/${n}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(h), d.status === 200 ? await d.json() : void 0;
      }),
      (this.addToQueue = (n) => {
        this.queue.push(n);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((n) => this.sendPost(n)), (this.queue = []));
      }),
      (this.sendPost = (n) => {
        var a;
        try {
          if (!this.iframe) return;
          (a = this.iframe.contentWindow) == null || a.postMessage(n, "*"),
            this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let n;
        const a = (h) => {
          h.data === "verify_ready" &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener("message", a),
            n());
        };
        await Promise.race([
          new Promise((h) => {
            if (document.getElementById(vc)) return h();
            window.addEventListener("message", a);
            const d = document.createElement("iframe");
            (d.id = vc),
              (d.src = `${this.verifyUrl}/${this.projectId}`),
              (d.style.display = "none"),
              document.body.append(d),
              (this.iframe = d),
              (n = h);
          }),
          new Promise((h, d) =>
            setTimeout(() => {
              window.removeEventListener("message", a),
                d("verify iframe load timeout");
            }, ue.toMiliseconds(ue.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.logger = Re.generateChildLogger(r, this.name)),
      (this.verifyUrl = Io),
      (this.abortController = new AbortController()),
      (this.isDevEnv = Gc() && {}.IS_VITEST);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), ue.toMiliseconds(t))
    );
  }
}
var jI = Object.defineProperty,
  hf = Object.getOwnPropertySymbols,
  LI = Object.prototype.hasOwnProperty,
  MI = Object.prototype.propertyIsEnumerable,
  lf = (s, t, r) =>
    t in s
      ? jI(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  ff = (s, t) => {
    for (var r in t || (t = {})) LI.call(t, r) && lf(s, r, t[r]);
    if (hf) for (var r of hf(t)) MI.call(t, r) && lf(s, r, t[r]);
    return s;
  };
class tu extends ob {
  constructor(t) {
    super(t),
      (this.protocol = wd),
      (this.version = qE),
      (this.name = eu),
      (this.events = new sr.EventEmitter()),
      (this.initialized = !1),
      (this.on = (n, a) => this.events.on(n, a)),
      (this.once = (n, a) => this.events.once(n, a)),
      (this.off = (n, a) => this.events.off(n, a)),
      (this.removeListener = (n, a) => this.events.removeListener(n, a)),
      (this.projectId = t == null ? void 0 : t.projectId),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || Ed);
    const r =
      typeof (t == null ? void 0 : t.logger) < "u" &&
      typeof (t == null ? void 0 : t.logger) != "string"
        ? t.logger
        : Re.pino(
            Re.getDefaultLoggerOptions({
              level: (t == null ? void 0 : t.logger) || zE.logger,
            })
          );
    (this.logger = Re.generateChildLogger(r, this.name)),
      (this.heartbeat = new _n.HeartBeat()),
      (this.crypto = new gI(
        this,
        this.logger,
        t == null ? void 0 : t.keychain
      )),
      (this.history = new DI(this, this.logger)),
      (this.expirer = new FI(this, this.logger)),
      (this.storage =
        t != null && t.storage
          ? t.storage
          : new Y1(ff(ff({}, kE), t == null ? void 0 : t.storageOptions))),
      (this.relayer = new TI({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new $I(this, this.logger)),
      (this.verify = new UI(this.projectId || "", this.logger));
  }
  static async init(t) {
    const r = new tu(t);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(nI, n), r;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (t) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          t
        ),
        this.logger.error(t.message),
        t)
      );
    }
  }
}
const qI = tu,
  Id = "wc",
  Sd = 2,
  xd = "client",
  ru = `${Id}@${Sd}:${xd}:`,
  wc = {
    name: xd,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  df = "WALLETCONNECT_DEEPLINK_CHOICE",
  zI = "proposal",
  Pd = "Proposal expired",
  kI = "session",
  vo = ue.SEVEN_DAYS,
  HI = "engine",
  Jn = {
    wc_sessionPropose: {
      req: { ttl: ue.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: ue.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: ue.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: ue.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: ue.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: ue.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: ue.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: ue.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: ue.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: ue.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: ue.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: ue.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  _c = { min: ue.FIVE_MINUTES, max: ue.SEVEN_DAYS },
  li = { idle: "IDLE", active: "ACTIVE" },
  BI = "request",
  VI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var KI = Object.defineProperty,
  WI = Object.defineProperties,
  GI = Object.getOwnPropertyDescriptors,
  pf = Object.getOwnPropertySymbols,
  JI = Object.prototype.hasOwnProperty,
  QI = Object.prototype.propertyIsEnumerable,
  gf = (s, t, r) =>
    t in s
      ? KI(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  fr = (s, t) => {
    for (var r in t || (t = {})) JI.call(t, r) && gf(s, r, t[r]);
    if (pf) for (var r of pf(t)) QI.call(t, r) && gf(s, r, t[r]);
    return s;
  },
  Qn = (s, t) => WI(s, GI(t));
class YI extends yb {
  constructor(t) {
    super(t),
      (this.name = HI),
      (this.events = new sr()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [Wi]),
      (this.requestQueue = { state: li.idle, queue: [] }),
      (this.sessionRequestQueue = { state: li.idle, queue: [] }),
      (this.requestQueueDelay = ue.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(Jn) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, ue.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (r) => {
        await this.isInitialized();
        const n = Qn(fr({}, r), {
          requiredNamespaces: r.requiredNamespaces || {},
          optionalNamespaces: r.optionalNamespaces || {},
        });
        await this.isValidConnect(n);
        const {
          pairingTopic: a,
          requiredNamespaces: h,
          optionalNamespaces: d,
          sessionProperties: w,
          relays: S,
        } = n;
        let $ = a,
          A,
          U = !1;
        if (
          ($ && (U = this.client.core.pairing.pairings.get($).active), !$ || !U)
        ) {
          const { topic: m, uri: b } = await this.client.core.pairing.create();
          ($ = m), (A = b);
        }
        const G = await this.client.core.crypto.generateKeyPair(),
          J = fr(
            {
              requiredNamespaces: h,
              optionalNamespaces: d,
              relays: S ?? [{ protocol: _d }],
              proposer: { publicKey: G, metadata: this.client.metadata },
            },
            w && { sessionProperties: w }
          ),
          { reject: H, resolve: Q, done: oe } = vn(ue.FIVE_MINUTES, Pd);
        if (
          (this.events.once(
            $t("session_connect"),
            async ({ error: m, session: b }) => {
              if (m) H(m);
              else if (b) {
                b.self.publicKey = G;
                const v = Qn(fr({}, b), {
                  requiredNamespaces: b.requiredNamespaces,
                  optionalNamespaces: b.optionalNamespaces,
                });
                await this.client.session.set(b.topic, v),
                  await this.setExpiry(b.topic, b.expiry),
                  $ &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: $,
                      metadata: b.peer.metadata,
                    })),
                  Q(v);
              }
            }
          ),
          !$)
        ) {
          const { message: m } = te(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${$}`
          );
          throw new Error(m);
        }
        const pe = await this.sendRequest({
            topic: $,
            method: "wc_sessionPropose",
            params: J,
          }),
          f = Mr(ue.FIVE_MINUTES);
        return (
          await this.setProposal(pe, fr({ id: pe, expiry: f }, J)),
          { uri: A, approval: oe }
        );
      }),
      (this.pair = async (r) => (
        await this.isInitialized(), await this.client.core.pairing.pair(r)
      )),
      (this.approve = async (r) => {
        await this.isInitialized(), await this.isValidApprove(r);
        const {
            id: n,
            relayProtocol: a,
            namespaces: h,
            sessionProperties: d,
          } = r,
          w = this.client.proposal.get(n);
        let {
          pairingTopic: S,
          proposer: $,
          requiredNamespaces: A,
          optionalNamespaces: U,
        } = w;
        (S = S || ""), ts(A) || (A = gw(h, "approve()"));
        const G = await this.client.core.crypto.generateKeyPair(),
          J = $.publicKey,
          H = await this.client.core.crypto.generateSharedKey(G, J);
        S &&
          n &&
          (await this.client.core.pairing.updateMetadata({
            topic: S,
            metadata: $.metadata,
          }),
          await this.sendResult({
            id: n,
            topic: S,
            result: { relay: { protocol: a ?? "irn" }, responderPublicKey: G },
          }),
          await this.client.proposal.delete(n, qt("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: S }));
        const Q = fr(
          {
            relay: { protocol: a ?? "irn" },
            namespaces: h,
            requiredNamespaces: A,
            optionalNamespaces: U,
            pairingTopic: S,
            controller: { publicKey: G, metadata: this.client.metadata },
            expiry: Mr(vo),
          },
          d && { sessionProperties: d }
        );
        await this.client.core.relayer.subscribe(H),
          await this.sendRequest({
            topic: H,
            method: "wc_sessionSettle",
            params: Q,
            throwOnFailedPublish: !0,
          });
        const oe = Qn(fr({}, Q), {
          topic: H,
          pairingTopic: S,
          acknowledged: !1,
          self: Q.controller,
          peer: { publicKey: $.publicKey, metadata: $.metadata },
          controller: G,
        });
        return (
          await this.client.session.set(H, oe),
          await this.setExpiry(H, Mr(vo)),
          {
            topic: H,
            acknowledged: () =>
              new Promise((pe) =>
                setTimeout(() => pe(this.client.session.get(H)), 500)
              ),
          }
        );
      }),
      (this.reject = async (r) => {
        await this.isInitialized(), await this.isValidReject(r);
        const { id: n, reason: a } = r,
          { pairingTopic: h } = this.client.proposal.get(n);
        h &&
          (await this.sendError(n, h, a),
          await this.client.proposal.delete(n, qt("USER_DISCONNECTED")));
      }),
      (this.update = async (r) => {
        await this.isInitialized(), await this.isValidUpdate(r);
        const { topic: n, namespaces: a } = r,
          h = await this.sendRequest({
            topic: n,
            method: "wc_sessionUpdate",
            params: { namespaces: a },
          }),
          { done: d, resolve: w, reject: S } = vn();
        return (
          this.events.once($t("session_update", h), ({ error: $ }) => {
            $ ? S($) : w();
          }),
          await this.client.session.update(n, { namespaces: a }),
          { acknowledged: d }
        );
      }),
      (this.extend = async (r) => {
        await this.isInitialized(), await this.isValidExtend(r);
        const { topic: n } = r,
          a = await this.sendRequest({
            topic: n,
            method: "wc_sessionExtend",
            params: {},
          }),
          { done: h, resolve: d, reject: w } = vn();
        return (
          this.events.once($t("session_extend", a), ({ error: S }) => {
            S ? w(S) : d();
          }),
          await this.setExpiry(n, Mr(vo)),
          { acknowledged: h }
        );
      }),
      (this.request = async (r) => {
        await this.isInitialized(), await this.isValidRequest(r);
        const { chainId: n, request: a, topic: h, expiry: d } = r,
          w = Yc(),
          { done: S, resolve: $, reject: A } = vn(d);
        return (
          this.events.once(
            $t("session_request", w),
            ({ error: U, result: G }) => {
              U ? A(U) : $(G);
            }
          ),
          await Promise.all([
            new Promise(async (U) => {
              await this.sendRequest({
                clientRpcId: w,
                topic: h,
                method: "wc_sessionRequest",
                params: { request: a, chainId: n },
                expiry: d,
                throwOnFailedPublish: !0,
              }).catch((G) => A(G)),
                this.client.events.emit("session_request_sent", {
                  topic: h,
                  request: a,
                  chainId: n,
                  id: w,
                }),
                U();
            }),
            new Promise(async (U) => {
              const G = await this.client.core.storage.getItem(df);
              tw({ id: w, topic: h, wcDeepLink: G }), U();
            }),
            S(),
          ]).then((U) => U[2])
        );
      }),
      (this.respond = async (r) => {
        await this.isInitialized(), await this.isValidRespond(r);
        const { topic: n, response: a } = r,
          { id: h } = a;
        fi(a)
          ? await this.sendResult({
              id: h,
              topic: n,
              result: a.result,
              throwOnFailedPublish: !0,
            })
          : qr(a) && (await this.sendError(h, n, a.error)),
          this.cleanupAfterResponse(r);
      }),
      (this.ping = async (r) => {
        await this.isInitialized(), await this.isValidPing(r);
        const { topic: n } = r;
        if (this.client.session.keys.includes(n)) {
          const a = await this.sendRequest({
              topic: n,
              method: "wc_sessionPing",
              params: {},
            }),
            { done: h, resolve: d, reject: w } = vn();
          this.events.once($t("session_ping", a), ({ error: S }) => {
            S ? w(S) : d();
          }),
            await h();
        } else
          this.client.core.pairing.pairings.keys.includes(n) &&
            (await this.client.core.pairing.ping({ topic: n }));
      }),
      (this.emit = async (r) => {
        await this.isInitialized(), await this.isValidEmit(r);
        const { topic: n, event: a, chainId: h } = r;
        await this.sendRequest({
          topic: n,
          method: "wc_sessionEvent",
          params: { event: a, chainId: h },
        });
      }),
      (this.disconnect = async (r) => {
        await this.isInitialized(), await this.isValidDisconnect(r);
        const { topic: n } = r;
        this.client.session.keys.includes(n)
          ? (await this.sendRequest({
              topic: n,
              method: "wc_sessionDelete",
              params: qt("USER_DISCONNECTED"),
              throwOnFailedPublish: !0,
            }),
            await this.deleteSession(n))
          : await this.client.core.pairing.disconnect({ topic: n });
      }),
      (this.find = (r) => (
        this.isInitialized(),
        this.client.session.getAll().filter((n) => vw(n, r))
      )),
      (this.getPendingSessionRequests = () => (
        this.isInitialized(), this.client.pendingRequest.getAll()
      )),
      (this.cleanupDuplicatePairings = async (r) => {
        if (r.pairingTopic)
          try {
            const n = this.client.core.pairing.pairings.get(r.pairingTopic),
              a = this.client.core.pairing.pairings.getAll().filter((h) => {
                var d, w;
                return (
                  ((d = h.peerMetadata) == null ? void 0 : d.url) &&
                  ((w = h.peerMetadata) == null ? void 0 : w.url) ===
                    r.peer.metadata.url &&
                  h.topic &&
                  h.topic !== n.topic
                );
              });
            if (a.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${a.length} duplicate pairing(s)`
            ),
              await Promise.all(
                a.map((h) =>
                  this.client.core.pairing.disconnect({ topic: h.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (n) {
            this.client.logger.error(n);
          }
      }),
      (this.deleteSession = async (r, n) => {
        const { self: a } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r),
          this.client.session.delete(r, qt("USER_DISCONNECTED")),
          this.client.core.crypto.keychain.has(a.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(a.publicKey)),
          this.client.core.crypto.keychain.has(r) &&
            (await this.client.core.crypto.deleteSymKey(r)),
          n || this.client.core.expirer.del(r),
          this.client.core.storage
            .removeItem(df)
            .catch((h) => this.client.logger.warn(h));
      }),
      (this.deleteProposal = async (r, n) => {
        await Promise.all([
          this.client.proposal.delete(r, qt("USER_DISCONNECTED")),
          n ? Promise.resolve() : this.client.core.expirer.del(r),
        ]);
      }),
      (this.deletePendingSessionRequest = async (r, n, a = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(r, n),
          a ? Promise.resolve() : this.client.core.expirer.del(r),
        ]),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((h) => h.id !== r)),
          a && (this.sessionRequestQueue.state = li.idle);
      }),
      (this.setExpiry = async (r, n) => {
        this.client.session.keys.includes(r) &&
          (await this.client.session.update(r, { expiry: n })),
          this.client.core.expirer.set(r, n);
      }),
      (this.setProposal = async (r, n) => {
        await this.client.proposal.set(r, n),
          this.client.core.expirer.set(r, n.expiry);
      }),
      (this.setPendingSessionRequest = async (r) => {
        const n = Jn.wc_sessionRequest.req.ttl,
          { id: a, topic: h, params: d, verifyContext: w } = r;
        await this.client.pendingRequest.set(a, {
          id: a,
          topic: h,
          params: d,
          verifyContext: w,
        }),
          n && this.client.core.expirer.set(a, Mr(n));
      }),
      (this.sendRequest = async (r) => {
        const {
            topic: n,
            method: a,
            params: h,
            expiry: d,
            relayRpcId: w,
            clientRpcId: S,
            throwOnFailedPublish: $,
          } = r,
          A = wn(a, h, S);
        if (cs() && VI.includes(a)) {
          const J = bn(JSON.stringify(A));
          this.client.core.verify.register({ attestationId: J });
        }
        const U = await this.client.core.crypto.encode(n, A),
          G = Jn[a].req;
        return (
          d && (G.ttl = d),
          w && (G.id = w),
          this.client.core.history.set(n, A),
          $
            ? ((G.internal = Qn(fr({}, G.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(n, U, G))
            : this.client.core.relayer
                .publish(n, U, G)
                .catch((J) => this.client.logger.error(J)),
          A.id
        );
      }),
      (this.sendResult = async (r) => {
        const { id: n, topic: a, result: h, throwOnFailedPublish: d } = r,
          w = Xc(n, h),
          S = await this.client.core.crypto.encode(a, w),
          $ = await this.client.core.history.get(a, n),
          A = Jn[$.request.method].res;
        d
          ? ((A.internal = Qn(fr({}, A.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(a, S, A))
          : this.client.core.relayer
              .publish(a, S, A)
              .catch((U) => this.client.logger.error(U)),
          await this.client.core.history.resolve(w);
      }),
      (this.sendError = async (r, n, a) => {
        const h = Do(r, a),
          d = await this.client.core.crypto.encode(n, h),
          w = await this.client.core.history.get(n, r),
          S = Jn[w.request.method].res;
        this.client.core.relayer.publish(n, d, S),
          await this.client.core.history.resolve(h);
      }),
      (this.cleanup = async () => {
        const r = [],
          n = [];
        this.client.session.getAll().forEach((a) => {
          Si(a.expiry) && r.push(a.topic);
        }),
          this.client.proposal.getAll().forEach((a) => {
            Si(a.expiry) && n.push(a.id);
          }),
          await Promise.all([
            ...r.map((a) => this.deleteSession(a)),
            ...n.map((a) => this.deleteProposal(a)),
          ]);
      }),
      (this.onRelayEventRequest = async (r) => {
        this.requestQueue.queue.push(r), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === li.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = li.active;
          const r = this.requestQueue.queue.shift();
          if (r)
            try {
              this.processRequest(r),
                await new Promise((n) => setTimeout(n, 300));
            } catch (n) {
              this.client.logger.warn(n);
            }
        }
        this.requestQueue.state = li.idle;
      }),
      (this.processRequest = (r) => {
        const { topic: n, payload: a } = r,
          h = a.method;
        switch (h) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(n, a);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(n, a);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(n, a);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(n, a);
          case "wc_sessionPing":
            return this.onSessionPingRequest(n, a);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(n, a);
          case "wc_sessionRequest":
            return this.onSessionRequest(n, a);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(n, a);
          default:
            return this.client.logger.info(`Unsupported request method ${h}`);
        }
      }),
      (this.onRelayEventResponse = async (r) => {
        const { topic: n, payload: a } = r,
          h = (await this.client.core.history.get(n, a.id)).request.method;
        switch (h) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(n, a);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(n, a);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(n, a);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(n, a);
          case "wc_sessionPing":
            return this.onSessionPingResponse(n, a);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(n, a);
          default:
            return this.client.logger.info(`Unsupported response method ${h}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (r) => {
        const { topic: n } = r,
          { message: a } = te(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(a);
      }),
      (this.onSessionProposeRequest = async (r, n) => {
        const { params: a, id: h } = n;
        try {
          this.isValidConnect(fr({}, n.params));
          const d = Mr(ue.FIVE_MINUTES),
            w = fr({ id: h, pairingTopic: r, expiry: d }, a);
          await this.setProposal(h, w);
          const S = bn(JSON.stringify(n)),
            $ = await this.getVerifyContext(S, w.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: h,
            params: w,
            verifyContext: $,
          });
        } catch (d) {
          await this.sendError(h, r, d), this.client.logger.error(d);
        }
      }),
      (this.onSessionProposeResponse = async (r, n) => {
        const { id: a } = n;
        if (fi(n)) {
          const { result: h } = n;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: h,
          });
          const d = this.client.proposal.get(a);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: d,
          });
          const w = d.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: w,
          });
          const S = h.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: S,
          });
          const $ = await this.client.core.crypto.generateSharedKey(w, S);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: $,
          });
          const A = await this.client.core.relayer.subscribe($);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: A,
          }),
            await this.client.core.pairing.activate({ topic: r });
        } else
          qr(n) &&
            (await this.client.proposal.delete(a, qt("USER_DISCONNECTED")),
            this.events.emit($t("session_connect"), { error: n.error }));
      }),
      (this.onSessionSettleRequest = async (r, n) => {
        const { id: a, params: h } = n;
        try {
          this.isValidSessionSettleRequest(h);
          const {
              relay: d,
              controller: w,
              expiry: S,
              namespaces: $,
              requiredNamespaces: A,
              optionalNamespaces: U,
              sessionProperties: G,
              pairingTopic: J,
            } = n.params,
            H = fr(
              {
                topic: r,
                relay: d,
                expiry: S,
                namespaces: $,
                acknowledged: !0,
                pairingTopic: J,
                requiredNamespaces: A,
                optionalNamespaces: U,
                controller: w.publicKey,
                self: { publicKey: "", metadata: this.client.metadata },
                peer: { publicKey: w.publicKey, metadata: w.metadata },
              },
              G && { sessionProperties: G }
            );
          await this.sendResult({ id: n.id, topic: r, result: !0 }),
            this.events.emit($t("session_connect"), { session: H }),
            this.cleanupDuplicatePairings(H);
        } catch (d) {
          await this.sendError(a, r, d), this.client.logger.error(d);
        }
      }),
      (this.onSessionSettleResponse = async (r, n) => {
        const { id: a } = n;
        fi(n)
          ? (await this.client.session.update(r, { acknowledged: !0 }),
            this.events.emit($t("session_approve", a), {}))
          : qr(n) &&
            (await this.client.session.delete(r, qt("USER_DISCONNECTED")),
            this.events.emit($t("session_approve", a), { error: n.error }));
      }),
      (this.onSessionUpdateRequest = async (r, n) => {
        const { params: a, id: h } = n;
        try {
          const d = `${r}_session_update`,
            w = mo.get(d);
          if (w && this.isRequestOutOfSync(w, h)) {
            this.client.logger.info(`Discarding out of sync request - ${h}`);
            return;
          }
          this.isValidUpdate(fr({ topic: r }, a)),
            await this.client.session.update(r, { namespaces: a.namespaces }),
            await this.sendResult({ id: h, topic: r, result: !0 }),
            this.client.events.emit("session_update", {
              id: h,
              topic: r,
              params: a,
            }),
            mo.set(d, h);
        } catch (d) {
          await this.sendError(h, r, d), this.client.logger.error(d);
        }
      }),
      (this.isRequestOutOfSync = (r, n) =>
        parseInt(n.toString().slice(0, -3)) <=
        parseInt(r.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (r, n) => {
        const { id: a } = n;
        fi(n)
          ? this.events.emit($t("session_update", a), {})
          : qr(n) &&
            this.events.emit($t("session_update", a), { error: n.error });
      }),
      (this.onSessionExtendRequest = async (r, n) => {
        const { id: a } = n;
        try {
          this.isValidExtend({ topic: r }),
            await this.setExpiry(r, Mr(vo)),
            await this.sendResult({ id: a, topic: r, result: !0 }),
            this.client.events.emit("session_extend", { id: a, topic: r });
        } catch (h) {
          await this.sendError(a, r, h), this.client.logger.error(h);
        }
      }),
      (this.onSessionExtendResponse = (r, n) => {
        const { id: a } = n;
        fi(n)
          ? this.events.emit($t("session_extend", a), {})
          : qr(n) &&
            this.events.emit($t("session_extend", a), { error: n.error });
      }),
      (this.onSessionPingRequest = async (r, n) => {
        const { id: a } = n;
        try {
          this.isValidPing({ topic: r }),
            await this.sendResult({ id: a, topic: r, result: !0 }),
            this.client.events.emit("session_ping", { id: a, topic: r });
        } catch (h) {
          await this.sendError(a, r, h), this.client.logger.error(h);
        }
      }),
      (this.onSessionPingResponse = (r, n) => {
        const { id: a } = n;
        setTimeout(() => {
          fi(n)
            ? this.events.emit($t("session_ping", a), {})
            : qr(n) &&
              this.events.emit($t("session_ping", a), { error: n.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (r, n) => {
        const { id: a } = n;
        try {
          this.isValidDisconnect({ topic: r, reason: n.params }),
            await Promise.all([
              new Promise((h) => {
                this.client.core.relayer.once(Gt.publish, async () => {
                  h(await this.deleteSession(r));
                });
              }),
              this.sendResult({ id: a, topic: r, result: !0 }),
            ]),
            this.client.events.emit("session_delete", { id: a, topic: r });
        } catch (h) {
          this.client.logger.error(h);
        }
      }),
      (this.onSessionRequest = async (r, n) => {
        const { id: a, params: h } = n;
        try {
          this.isValidRequest(fr({ topic: r }, h));
          const d = bn(JSON.stringify(wn("wc_sessionRequest", h, a))),
            w = this.client.session.get(r),
            S = await this.getVerifyContext(d, w.peer.metadata),
            $ = { id: a, topic: r, params: h, verifyContext: S };
          await this.setPendingSessionRequest($),
            this.addSessionRequestToSessionRequestQueue($),
            this.processSessionRequestQueue();
        } catch (d) {
          await this.sendError(a, r, d), this.client.logger.error(d);
        }
      }),
      (this.onSessionRequestResponse = (r, n) => {
        const { id: a } = n;
        fi(n)
          ? this.events.emit($t("session_request", a), { result: n.result })
          : qr(n) &&
            this.events.emit($t("session_request", a), { error: n.error });
      }),
      (this.onSessionEventRequest = async (r, n) => {
        const { id: a, params: h } = n;
        try {
          const d = `${r}_session_event_${h.event.name}`,
            w = mo.get(d);
          if (w && this.isRequestOutOfSync(w, a)) {
            this.client.logger.info(`Discarding out of sync request - ${a}`);
            return;
          }
          this.isValidEmit(fr({ topic: r }, h)),
            this.client.events.emit("session_event", {
              id: a,
              topic: r,
              params: h,
            }),
            mo.set(d, a);
        } catch (d) {
          await this.sendError(a, r, d), this.client.logger.error(d);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (r) => {
        this.sessionRequestQueue.queue.push(r);
      }),
      (this.cleanupAfterResponse = (r) => {
        this.deletePendingSessionRequest(r.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = li.idle),
              this.processSessionRequestQueue();
          }, ue.toMiliseconds(this.requestQueueDelay));
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === li.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const r = this.sessionRequestQueue.queue[0];
        if (!r) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = li.active),
            this.client.events.emit("session_request", r);
        } catch (n) {
          this.client.logger.error(n);
        }
      }),
      (this.onPairingCreated = (r) => {
        if (r.active) return;
        const n = this.client.proposal
          .getAll()
          .find((a) => a.pairingTopic === r.topic);
        n &&
          this.onSessionProposeRequest(
            r.topic,
            wn(
              "wc_sessionPropose",
              {
                requiredNamespaces: n.requiredNamespaces,
                optionalNamespaces: n.optionalNamespaces,
                relays: n.relays,
                proposer: n.proposer,
              },
              n.id
            )
          );
      }),
      (this.isValidConnect = async (r) => {
        if (!dr(r)) {
          const { message: S } = te(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(r)}`
          );
          throw new Error(S);
        }
        const {
          pairingTopic: n,
          requiredNamespaces: a,
          optionalNamespaces: h,
          sessionProperties: d,
          relays: w,
        } = r;
        if ((rr(n) || (await this.isValidPairingTopic(n)), !Rw(w, !0))) {
          const { message: S } = te(
            "MISSING_OR_INVALID",
            `connect() relays: ${w}`
          );
          throw new Error(S);
        }
        !rr(a) &&
          ts(a) !== 0 &&
          this.validateNamespaces(a, "requiredNamespaces"),
          !rr(h) &&
            ts(h) !== 0 &&
            this.validateNamespaces(h, "optionalNamespaces"),
          rr(d) || this.validateSessionProps(d, "sessionProperties");
      }),
      (this.validateNamespaces = (r, n) => {
        const a = Tw(r, "connect()", n);
        if (a) throw new Error(a.message);
      }),
      (this.isValidApprove = async (r) => {
        if (!dr(r))
          throw new Error(
            te("MISSING_OR_INVALID", `approve() params: ${r}`).message
          );
        const {
          id: n,
          namespaces: a,
          relayProtocol: h,
          sessionProperties: d,
        } = r;
        await this.isValidProposalId(n);
        const w = this.client.proposal.get(n),
          S = Eo(a, "approve()");
        if (S) throw new Error(S.message);
        const $ = Ul(w.requiredNamespaces, a, "approve()");
        if ($) throw new Error($.message);
        if (!zt(h, !0)) {
          const { message: A } = te(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${h}`
          );
          throw new Error(A);
        }
        rr(d) || this.validateSessionProps(d, "sessionProperties");
      }),
      (this.isValidReject = async (r) => {
        if (!dr(r)) {
          const { message: h } = te(
            "MISSING_OR_INVALID",
            `reject() params: ${r}`
          );
          throw new Error(h);
        }
        const { id: n, reason: a } = r;
        if ((await this.isValidProposalId(n), !Cw(a))) {
          const { message: h } = te(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(a)}`
          );
          throw new Error(h);
        }
      }),
      (this.isValidSessionSettleRequest = (r) => {
        if (!dr(r)) {
          const { message: $ } = te(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${r}`
          );
          throw new Error($);
        }
        const { relay: n, controller: a, namespaces: h, expiry: d } = r;
        if (!td(n)) {
          const { message: $ } = te(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error($);
        }
        const w = Iw(a, "onSessionSettleRequest()");
        if (w) throw new Error(w.message);
        const S = Eo(h, "onSessionSettleRequest()");
        if (S) throw new Error(S.message);
        if (Si(d)) {
          const { message: $ } = te("EXPIRED", "onSessionSettleRequest()");
          throw new Error($);
        }
      }),
      (this.isValidUpdate = async (r) => {
        if (!dr(r)) {
          const { message: S } = te(
            "MISSING_OR_INVALID",
            `update() params: ${r}`
          );
          throw new Error(S);
        }
        const { topic: n, namespaces: a } = r;
        await this.isValidSessionTopic(n);
        const h = this.client.session.get(n),
          d = Eo(a, "update()");
        if (d) throw new Error(d.message);
        const w = Ul(h.requiredNamespaces, a, "update()");
        if (w) throw new Error(w.message);
      }),
      (this.isValidExtend = async (r) => {
        if (!dr(r)) {
          const { message: a } = te(
            "MISSING_OR_INVALID",
            `extend() params: ${r}`
          );
          throw new Error(a);
        }
        const { topic: n } = r;
        await this.isValidSessionTopic(n);
      }),
      (this.isValidRequest = async (r) => {
        if (!dr(r)) {
          const { message: S } = te(
            "MISSING_OR_INVALID",
            `request() params: ${r}`
          );
          throw new Error(S);
        }
        const { topic: n, request: a, chainId: h, expiry: d } = r;
        await this.isValidSessionTopic(n);
        const { namespaces: w } = this.client.session.get(n);
        if (!Fl(w, h)) {
          const { message: S } = te(
            "MISSING_OR_INVALID",
            `request() chainId: ${h}`
          );
          throw new Error(S);
        }
        if (!$w(a)) {
          const { message: S } = te(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(a)}`
          );
          throw new Error(S);
        }
        if (!Uw(w, h, a.method)) {
          const { message: S } = te(
            "MISSING_OR_INVALID",
            `request() method: ${a.method}`
          );
          throw new Error(S);
        }
        if (d && !qw(d, _c)) {
          const { message: S } = te(
            "MISSING_OR_INVALID",
            `request() expiry: ${d}. Expiry must be a number (in seconds) between ${_c.min} and ${_c.max}`
          );
          throw new Error(S);
        }
      }),
      (this.isValidRespond = async (r) => {
        if (!dr(r)) {
          const { message: h } = te(
            "MISSING_OR_INVALID",
            `respond() params: ${r}`
          );
          throw new Error(h);
        }
        const { topic: n, response: a } = r;
        if ((await this.isValidSessionTopic(n), !Dw(a))) {
          const { message: h } = te(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(a)}`
          );
          throw new Error(h);
        }
      }),
      (this.isValidPing = async (r) => {
        if (!dr(r)) {
          const { message: a } = te(
            "MISSING_OR_INVALID",
            `ping() params: ${r}`
          );
          throw new Error(a);
        }
        const { topic: n } = r;
        await this.isValidSessionOrPairingTopic(n);
      }),
      (this.isValidEmit = async (r) => {
        if (!dr(r)) {
          const { message: w } = te(
            "MISSING_OR_INVALID",
            `emit() params: ${r}`
          );
          throw new Error(w);
        }
        const { topic: n, event: a, chainId: h } = r;
        await this.isValidSessionTopic(n);
        const { namespaces: d } = this.client.session.get(n);
        if (!Fl(d, h)) {
          const { message: w } = te(
            "MISSING_OR_INVALID",
            `emit() chainId: ${h}`
          );
          throw new Error(w);
        }
        if (!Fw(a)) {
          const { message: w } = te(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(a)}`
          );
          throw new Error(w);
        }
        if (!jw(d, h, a.name)) {
          const { message: w } = te(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(a)}`
          );
          throw new Error(w);
        }
      }),
      (this.isValidDisconnect = async (r) => {
        if (!dr(r)) {
          const { message: a } = te(
            "MISSING_OR_INVALID",
            `disconnect() params: ${r}`
          );
          throw new Error(a);
        }
        const { topic: n } = r;
        await this.isValidSessionOrPairingTopic(n);
      }),
      (this.getVerifyContext = async (r, n) => {
        const a = {
          verified: {
            verifyUrl: n.verifyUrl || Io,
            validation: "UNKNOWN",
            origin: n.url || "",
          },
        };
        try {
          const h = await this.client.core.verify.resolve({
            attestationId: r,
            verifyUrl: n.verifyUrl,
          });
          h &&
            ((a.verified.origin = h.origin),
            (a.verified.isScam = h.isScam),
            (a.verified.validation =
              h.origin === new URL(n.url).origin ? "VALID" : "INVALID"));
        } catch (h) {
          this.client.logger.info(h);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a
        );
      }),
      (this.validateSessionProps = (r, n) => {
        Object.values(r).forEach((a) => {
          if (!zt(a, !1)) {
            const { message: h } = te(
              "MISSING_OR_INVALID",
              `${n} must be in Record<string, string> format. Received: ${JSON.stringify(
                a
              )}`
            );
            throw new Error(h);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = te("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Gt.message, async (t) => {
      const { topic: r, message: n } = t;
      if (
        this.ignoredPayloadTypes.includes(
          this.client.core.crypto.getPayloadType(n)
        )
      )
        return;
      const a = await this.client.core.crypto.decode(r, n);
      try {
        Zc(a)
          ? (this.client.core.history.set(r, a),
            this.onRelayEventRequest({ topic: r, payload: a }))
          : Fo(a)
          ? (await this.client.core.history.resolve(a),
            await this.onRelayEventResponse({ topic: r, payload: a }),
            this.client.core.history.delete(r, a.id))
          : this.onRelayEventUnknownPayload({ topic: r, payload: a });
      } catch (h) {
        this.client.logger.error(h);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Cr.expired, async (t) => {
      const { topic: r, id: n } = Zf(t.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, te("EXPIRED"), !0);
      r
        ? this.client.session.keys.includes(r) &&
          (await this.deleteSession(r, !0),
          this.client.events.emit("session_expire", { topic: r }))
        : n &&
          (await this.deleteProposal(n, !0),
          this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Xn.create, (t) =>
      this.onPairingCreated(t)
    );
  }
  isValidPairingTopic(t) {
    if (!zt(t, !1)) {
      const { message: r } = te(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = te(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Si(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = te("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!zt(t, !1)) {
      const { message: r } = te(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = te(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Si(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = te("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (zt(t, !1)) {
      const { message: r } = te(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    } else {
      const { message: r } = te(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!Nw(t)) {
      const { message: r } = te(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = te(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Si(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = te("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class XI extends jo {
  constructor(t, r) {
    super(t, r, zI, ru), (this.core = t), (this.logger = r);
  }
}
class ZI extends jo {
  constructor(t, r) {
    super(t, r, kI, ru), (this.core = t), (this.logger = r);
  }
}
class eS extends jo {
  constructor(t, r) {
    super(t, r, BI, ru, (n) => n.id), (this.core = t), (this.logger = r);
  }
}
let tS = class Od extends gb {
  constructor(t) {
    super(t),
      (this.protocol = Id),
      (this.version = Sd),
      (this.name = wc.name),
      (this.events = new sr.EventEmitter()),
      (this.on = (n, a) => this.events.on(n, a)),
      (this.once = (n, a) => this.events.once(n, a)),
      (this.off = (n, a) => this.events.off(n, a)),
      (this.removeListener = (n, a) => this.events.removeListener(n, a)),
      (this.removeAllListeners = (n) => this.events.removeAllListeners(n)),
      (this.connect = async (n) => {
        try {
          return await this.engine.connect(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.pair = async (n) => {
        try {
          return await this.engine.pair(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.approve = async (n) => {
        try {
          return await this.engine.approve(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.reject = async (n) => {
        try {
          return await this.engine.reject(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.update = async (n) => {
        try {
          return await this.engine.update(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.extend = async (n) => {
        try {
          return await this.engine.extend(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.request = async (n) => {
        try {
          return await this.engine.request(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.respond = async (n) => {
        try {
          return await this.engine.respond(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.ping = async (n) => {
        try {
          return await this.engine.ping(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.emit = async (n) => {
        try {
          return await this.engine.emit(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.disconnect = async (n) => {
        try {
          return await this.engine.disconnect(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.find = (n) => {
        try {
          return this.engine.find(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (n) {
          throw (this.logger.error(n.message), n);
        }
      }),
      (this.name = (t == null ? void 0 : t.name) || wc.name),
      (this.metadata = (t == null ? void 0 : t.metadata) || Gb());
    const r =
      typeof (t == null ? void 0 : t.logger) < "u" &&
      typeof (t == null ? void 0 : t.logger) != "string"
        ? t.logger
        : Re.pino(
            Re.getDefaultLoggerOptions({
              level: (t == null ? void 0 : t.logger) || wc.logger,
            })
          );
    (this.core = (t == null ? void 0 : t.core) || new qI(t)),
      (this.logger = Re.generateChildLogger(r, this.name)),
      (this.session = new ZI(this.core, this.logger)),
      (this.proposal = new XI(this.core, this.logger)),
      (this.pendingRequest = new eS(this.core, this.logger)),
      (this.engine = new YI(this));
  }
  static async init(t) {
    const r = new Od(t);
    return await r.initialize(), r;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(t.message),
        t)
      );
    }
  }
};
var rS = {};
(function (s) {
  const t = qc,
    r = zc,
    n = Lc,
    a = Mc,
    h = (f) => f == null,
    d = Symbol("encodeFragmentIdentifier");
  function w(f) {
    switch (f.arrayFormat) {
      case "index":
        return (m) => (b, v) => {
          const g = b.length;
          return v === void 0 ||
            (f.skipNull && v === null) ||
            (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), "[", g, "]"].join("")]
            : [...b, [A(m, f), "[", A(g, f), "]=", A(v, f)].join("")];
        };
      case "bracket":
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), "[]"].join("")]
            : [...b, [A(m, f), "[]=", A(v, f)].join("")];
      case "colon-list-separator":
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, [A(m, f), ":list="].join("")]
            : [...b, [A(m, f), ":list=", A(v, f)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const m = f.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (v, g) =>
          g === void 0 ||
          (f.skipNull && g === null) ||
          (f.skipEmptyString && g === "")
            ? v
            : ((g = g === null ? "" : g),
              v.length === 0
                ? [[A(b, f), m, A(g, f)].join("")]
                : [[v, A(g, f)].join(f.arrayFormatSeparator)]);
      }
      default:
        return (m) => (b, v) =>
          v === void 0 ||
          (f.skipNull && v === null) ||
          (f.skipEmptyString && v === "")
            ? b
            : v === null
            ? [...b, A(m, f)]
            : [...b, [A(m, f), "=", A(v, f)].join("")];
    }
  }
  function S(f) {
    let m;
    switch (f.arrayFormat) {
      case "index":
        return (b, v, g) => {
          if (
            ((m = /\[(\d*)\]$/.exec(b)), (b = b.replace(/\[\d*\]$/, "")), !m)
          ) {
            g[b] = v;
            return;
          }
          g[b] === void 0 && (g[b] = {}), (g[b][m[1]] = v);
        };
      case "bracket":
        return (b, v, g) => {
          if (((m = /(\[\])$/.exec(b)), (b = b.replace(/\[\]$/, "")), !m)) {
            g[b] = v;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [v];
            return;
          }
          g[b] = [].concat(g[b], v);
        };
      case "colon-list-separator":
        return (b, v, g) => {
          if (((m = /(:list)$/.exec(b)), (b = b.replace(/:list$/, "")), !m)) {
            g[b] = v;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [v];
            return;
          }
          g[b] = [].concat(g[b], v);
        };
      case "comma":
      case "separator":
        return (b, v, g) => {
          const R = typeof v == "string" && v.includes(f.arrayFormatSeparator),
            P =
              typeof v == "string" &&
              !R &&
              U(v, f).includes(f.arrayFormatSeparator);
          v = P ? U(v, f) : v;
          const X =
            R || P
              ? v.split(f.arrayFormatSeparator).map((se) => U(se, f))
              : v === null
              ? v
              : U(v, f);
          g[b] = X;
        };
      case "bracket-separator":
        return (b, v, g) => {
          const R = /(\[\])$/.test(b);
          if (((b = b.replace(/\[\]$/, "")), !R)) {
            g[b] = v && U(v, f);
            return;
          }
          const P =
            v === null
              ? []
              : v.split(f.arrayFormatSeparator).map((X) => U(X, f));
          if (g[b] === void 0) {
            g[b] = P;
            return;
          }
          g[b] = [].concat(g[b], P);
        };
      default:
        return (b, v, g) => {
          if (g[b] === void 0) {
            g[b] = v;
            return;
          }
          g[b] = [].concat(g[b], v);
        };
    }
  }
  function $(f) {
    if (typeof f != "string" || f.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function A(f, m) {
    return m.encode ? (m.strict ? t(f) : encodeURIComponent(f)) : f;
  }
  function U(f, m) {
    return m.decode ? r(f) : f;
  }
  function G(f) {
    return Array.isArray(f)
      ? f.sort()
      : typeof f == "object"
      ? G(Object.keys(f))
          .sort((m, b) => Number(m) - Number(b))
          .map((m) => f[m])
      : f;
  }
  function J(f) {
    const m = f.indexOf("#");
    return m !== -1 && (f = f.slice(0, m)), f;
  }
  function H(f) {
    let m = "";
    const b = f.indexOf("#");
    return b !== -1 && (m = f.slice(b)), m;
  }
  function Q(f) {
    f = J(f);
    const m = f.indexOf("?");
    return m === -1 ? "" : f.slice(m + 1);
  }
  function oe(f, m) {
    return (
      m.parseNumbers &&
      !Number.isNaN(Number(f)) &&
      typeof f == "string" &&
      f.trim() !== ""
        ? (f = Number(f))
        : m.parseBooleans &&
          f !== null &&
          (f.toLowerCase() === "true" || f.toLowerCase() === "false") &&
          (f = f.toLowerCase() === "true"),
      f
    );
  }
  function pe(f, m) {
    (m = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      m
    )),
      $(m.arrayFormatSeparator);
    const b = S(m),
      v = Object.create(null);
    if (typeof f != "string" || ((f = f.trim().replace(/^[?#&]/, "")), !f))
      return v;
    for (const g of f.split("&")) {
      if (g === "") continue;
      let [R, P] = n(m.decode ? g.replace(/\+/g, " ") : g, "=");
      (P =
        P === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(m.arrayFormat)
          ? P
          : U(P, m)),
        b(U(R, m), P, v);
    }
    for (const g of Object.keys(v)) {
      const R = v[g];
      if (typeof R == "object" && R !== null)
        for (const P of Object.keys(R)) R[P] = oe(R[P], m);
      else v[g] = oe(R, m);
    }
    return m.sort === !1
      ? v
      : (m.sort === !0
          ? Object.keys(v).sort()
          : Object.keys(v).sort(m.sort)
        ).reduce((g, R) => {
          const P = v[R];
          return (
            Boolean(P) && typeof P == "object" && !Array.isArray(P)
              ? (g[R] = G(P))
              : (g[R] = P),
            g
          );
        }, Object.create(null));
  }
  (s.extract = Q),
    (s.parse = pe),
    (s.stringify = (f, m) => {
      if (!f) return "";
      (m = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        m
      )),
        $(m.arrayFormatSeparator);
      const b = (P) =>
          (m.skipNull && h(f[P])) || (m.skipEmptyString && f[P] === ""),
        v = w(m),
        g = {};
      for (const P of Object.keys(f)) b(P) || (g[P] = f[P]);
      const R = Object.keys(g);
      return (
        m.sort !== !1 && R.sort(m.sort),
        R.map((P) => {
          const X = f[P];
          return X === void 0
            ? ""
            : X === null
            ? A(P, m)
            : Array.isArray(X)
            ? X.length === 0 && m.arrayFormat === "bracket-separator"
              ? A(P, m) + "[]"
              : X.reduce(v(P), []).join("&")
            : A(P, m) + "=" + A(X, m);
        })
          .filter((P) => P.length > 0)
          .join("&")
      );
    }),
    (s.parseUrl = (f, m) => {
      m = Object.assign({ decode: !0 }, m);
      const [b, v] = n(f, "#");
      return Object.assign(
        { url: b.split("?")[0] || "", query: pe(Q(f), m) },
        m && m.parseFragmentIdentifier && v
          ? { fragmentIdentifier: U(v, m) }
          : {}
      );
    }),
    (s.stringifyUrl = (f, m) => {
      m = Object.assign({ encode: !0, strict: !0, [d]: !0 }, m);
      const b = J(f.url).split("?")[0] || "",
        v = s.extract(f.url),
        g = s.parse(v, { sort: !1 }),
        R = Object.assign(g, f.query);
      let P = s.stringify(R, m);
      P && (P = `?${P}`);
      let X = H(f.url);
      return (
        f.fragmentIdentifier &&
          (X = `#${m[d] ? A(f.fragmentIdentifier, m) : f.fragmentIdentifier}`),
        `${b}${P}${X}`
      );
    }),
    (s.pick = (f, m, b) => {
      b = Object.assign({ parseFragmentIdentifier: !0, [d]: !1 }, b);
      const { url: v, query: g, fragmentIdentifier: R } = s.parseUrl(f, b);
      return s.stringifyUrl(
        { url: v, query: a(g, m), fragmentIdentifier: R },
        b
      );
    }),
    (s.exclude = (f, m, b) => {
      const v = Array.isArray(m) ? (g) => !m.includes(g) : (g, R) => !m(g, R);
      return s.pick(f, v, b);
    });
})(rS);
const iS = ":";
function nS(s) {
  const [t, r] = s.split(iS);
  return { namespace: t, reference: r };
}
function Ec(s = [], t = []) {
  return [...new Set([...s, ...t])];
}
function iu(s) {
  return s.includes(":");
}
function Zn(s) {
  return iu(s) ? s.split(":")[0] : s;
}
const sS = {
  INVALID_METHOD: { message: "Invalid method.", code: 1001 },
  INVALID_EVENT: { message: "Invalid event.", code: 1002 },
  INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
  INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
  INVALID_SESSION_SETTLE_REQUEST: {
    message: "Invalid session settle request.",
    code: 1005,
  },
  UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
  UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
  UNAUTHORIZED_UPDATE_REQUEST: {
    message: "Unauthorized update request.",
    code: 3003,
  },
  UNAUTHORIZED_EXTEND_REQUEST: {
    message: "Unauthorized extend request.",
    code: 3004,
  },
  USER_REJECTED: { message: "User rejected.", code: 5e3 },
  USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
  USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
  USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
  UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
  UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
  UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
  UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
  UNSUPPORTED_NAMESPACE_KEY: {
    message: "Unsupported namespace key.",
    code: 5104,
  },
  USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
  SESSION_SETTLEMENT_FAILED: {
    message: "Session settlement failed.",
    code: 7e3,
  },
  WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
};
function yf(s, t) {
  const { message: r, code: n } = sS[s];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function mf(s, t) {
  return Array.isArray(s) ? (typeof t < "u" && s.length ? s.every(t) : !0) : !1;
}
function oS(s) {
  return Object.getPrototypeOf(s) === Object.prototype && Object.keys(s).length;
}
var To = {},
  aS = {
    get exports() {
      return To;
    },
    set exports(s) {
      To = s;
    },
  };
(function (s, t) {
  var r = typeof self < "u" ? self : pr,
    n = (function () {
      function h() {
        (this.fetch = !1), (this.DOMException = r.DOMException);
      }
      return (h.prototype = r), new h();
    })();
  (function (h) {
    (function (d) {
      var w = {
        searchParams: "URLSearchParams" in h,
        iterable: "Symbol" in h && "iterator" in Symbol,
        blob:
          "FileReader" in h &&
          "Blob" in h &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in h,
        arrayBuffer: "ArrayBuffer" in h,
      };
      function S(E) {
        return E && DataView.prototype.isPrototypeOf(E);
      }
      if (w.arrayBuffer)
        var $ = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          A =
            ArrayBuffer.isView ||
            function (E) {
              return E && $.indexOf(Object.prototype.toString.call(E)) > -1;
            };
      function U(E) {
        if (
          (typeof E != "string" && (E = String(E)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(E))
        )
          throw new TypeError("Invalid character in header field name");
        return E.toLowerCase();
      }
      function G(E) {
        return typeof E != "string" && (E = String(E)), E;
      }
      function J(E) {
        var T = {
          next: function () {
            var ie = E.shift();
            return { done: ie === void 0, value: ie };
          },
        };
        return (
          w.iterable &&
            (T[Symbol.iterator] = function () {
              return T;
            }),
          T
        );
      }
      function H(E) {
        (this.map = {}),
          E instanceof H
            ? E.forEach(function (T, ie) {
                this.append(ie, T);
              }, this)
            : Array.isArray(E)
            ? E.forEach(function (T) {
                this.append(T[0], T[1]);
              }, this)
            : E &&
              Object.getOwnPropertyNames(E).forEach(function (T) {
                this.append(T, E[T]);
              }, this);
      }
      (H.prototype.append = function (E, T) {
        (E = U(E)), (T = G(T));
        var ie = this.map[E];
        this.map[E] = ie ? ie + ", " + T : T;
      }),
        (H.prototype.delete = function (E) {
          delete this.map[U(E)];
        }),
        (H.prototype.get = function (E) {
          return (E = U(E)), this.has(E) ? this.map[E] : null;
        }),
        (H.prototype.has = function (E) {
          return this.map.hasOwnProperty(U(E));
        }),
        (H.prototype.set = function (E, T) {
          this.map[U(E)] = G(T);
        }),
        (H.prototype.forEach = function (E, T) {
          for (var ie in this.map)
            this.map.hasOwnProperty(ie) && E.call(T, this.map[ie], ie, this);
        }),
        (H.prototype.keys = function () {
          var E = [];
          return (
            this.forEach(function (T, ie) {
              E.push(ie);
            }),
            J(E)
          );
        }),
        (H.prototype.values = function () {
          var E = [];
          return (
            this.forEach(function (T) {
              E.push(T);
            }),
            J(E)
          );
        }),
        (H.prototype.entries = function () {
          var E = [];
          return (
            this.forEach(function (T, ie) {
              E.push([ie, T]);
            }),
            J(E)
          );
        }),
        w.iterable && (H.prototype[Symbol.iterator] = H.prototype.entries);
      function Q(E) {
        if (E.bodyUsed) return Promise.reject(new TypeError("Already read"));
        E.bodyUsed = !0;
      }
      function oe(E) {
        return new Promise(function (T, ie) {
          (E.onload = function () {
            T(E.result);
          }),
            (E.onerror = function () {
              ie(E.error);
            });
        });
      }
      function pe(E) {
        var T = new FileReader(),
          ie = oe(T);
        return T.readAsArrayBuffer(E), ie;
      }
      function f(E) {
        var T = new FileReader(),
          ie = oe(T);
        return T.readAsText(E), ie;
      }
      function m(E) {
        for (
          var T = new Uint8Array(E), ie = new Array(T.length), de = 0;
          de < T.length;
          de++
        )
          ie[de] = String.fromCharCode(T[de]);
        return ie.join("");
      }
      function b(E) {
        if (E.slice) return E.slice(0);
        var T = new Uint8Array(E.byteLength);
        return T.set(new Uint8Array(E)), T.buffer;
      }
      function v() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (E) {
            (this._bodyInit = E),
              E
                ? typeof E == "string"
                  ? (this._bodyText = E)
                  : w.blob && Blob.prototype.isPrototypeOf(E)
                  ? (this._bodyBlob = E)
                  : w.formData && FormData.prototype.isPrototypeOf(E)
                  ? (this._bodyFormData = E)
                  : w.searchParams && URLSearchParams.prototype.isPrototypeOf(E)
                  ? (this._bodyText = E.toString())
                  : w.arrayBuffer && w.blob && S(E)
                  ? ((this._bodyArrayBuffer = b(E.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : w.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(E) || A(E))
                  ? (this._bodyArrayBuffer = b(E))
                  : (this._bodyText = E = Object.prototype.toString.call(E))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof E == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : w.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(E) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          w.blob &&
            ((this.blob = function () {
              var E = Q(this);
              if (E) return E;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? Q(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(pe);
            })),
          (this.text = function () {
            var E = Q(this);
            if (E) return E;
            if (this._bodyBlob) return f(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(m(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          w.formData &&
            (this.formData = function () {
              return this.text().then(X);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function R(E) {
        var T = E.toUpperCase();
        return g.indexOf(T) > -1 ? T : E;
      }
      function P(E, T) {
        T = T || {};
        var ie = T.body;
        if (E instanceof P) {
          if (E.bodyUsed) throw new TypeError("Already read");
          (this.url = E.url),
            (this.credentials = E.credentials),
            T.headers || (this.headers = new H(E.headers)),
            (this.method = E.method),
            (this.mode = E.mode),
            (this.signal = E.signal),
            !ie &&
              E._bodyInit != null &&
              ((ie = E._bodyInit), (E.bodyUsed = !0));
        } else this.url = String(E);
        if (
          ((this.credentials =
            T.credentials || this.credentials || "same-origin"),
          (T.headers || !this.headers) && (this.headers = new H(T.headers)),
          (this.method = R(T.method || this.method || "GET")),
          (this.mode = T.mode || this.mode || null),
          (this.signal = T.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && ie)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(ie);
      }
      P.prototype.clone = function () {
        return new P(this, { body: this._bodyInit });
      };
      function X(E) {
        var T = new FormData();
        return (
          E.trim()
            .split("&")
            .forEach(function (ie) {
              if (ie) {
                var de = ie.split("="),
                  Y = de.shift().replace(/\+/g, " "),
                  V = de.join("=").replace(/\+/g, " ");
                T.append(decodeURIComponent(Y), decodeURIComponent(V));
              }
            }),
          T
        );
      }
      function se(E) {
        var T = new H(),
          ie = E.replace(/\r?\n[\t ]+/g, " ");
        return (
          ie.split(/\r?\n/).forEach(function (de) {
            var Y = de.split(":"),
              V = Y.shift().trim();
            if (V) {
              var W = Y.join(":").trim();
              T.append(V, W);
            }
          }),
          T
        );
      }
      v.call(P.prototype);
      function ge(E, T) {
        T || (T = {}),
          (this.type = "default"),
          (this.status = T.status === void 0 ? 200 : T.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in T ? T.statusText : "OK"),
          (this.headers = new H(T.headers)),
          (this.url = T.url || ""),
          this._initBody(E);
      }
      v.call(ge.prototype),
        (ge.prototype.clone = function () {
          return new ge(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new H(this.headers),
            url: this.url,
          });
        }),
        (ge.error = function () {
          var E = new ge(null, { status: 0, statusText: "" });
          return (E.type = "error"), E;
        });
      var Ne = [301, 302, 303, 307, 308];
      (ge.redirect = function (E, T) {
        if (Ne.indexOf(T) === -1) throw new RangeError("Invalid status code");
        return new ge(null, { status: T, headers: { location: E } });
      }),
        (d.DOMException = h.DOMException);
      try {
        new d.DOMException();
      } catch {
        (d.DOMException = function (T, ie) {
          (this.message = T), (this.name = ie);
          var de = Error(T);
          this.stack = de.stack;
        }),
          (d.DOMException.prototype = Object.create(Error.prototype)),
          (d.DOMException.prototype.constructor = d.DOMException);
      }
      function qe(E, T) {
        return new Promise(function (ie, de) {
          var Y = new P(E, T);
          if (Y.signal && Y.signal.aborted)
            return de(new d.DOMException("Aborted", "AbortError"));
          var V = new XMLHttpRequest();
          function W() {
            V.abort();
          }
          (V.onload = function () {
            var Z = {
              status: V.status,
              statusText: V.statusText,
              headers: se(V.getAllResponseHeaders() || ""),
            };
            Z.url =
              "responseURL" in V
                ? V.responseURL
                : Z.headers.get("X-Request-URL");
            var Je = "response" in V ? V.response : V.responseText;
            ie(new ge(Je, Z));
          }),
            (V.onerror = function () {
              de(new TypeError("Network request failed"));
            }),
            (V.ontimeout = function () {
              de(new TypeError("Network request failed"));
            }),
            (V.onabort = function () {
              de(new d.DOMException("Aborted", "AbortError"));
            }),
            V.open(Y.method, Y.url, !0),
            Y.credentials === "include"
              ? (V.withCredentials = !0)
              : Y.credentials === "omit" && (V.withCredentials = !1),
            "responseType" in V && w.blob && (V.responseType = "blob"),
            Y.headers.forEach(function (Z, Je) {
              V.setRequestHeader(Je, Z);
            }),
            Y.signal &&
              (Y.signal.addEventListener("abort", W),
              (V.onreadystatechange = function () {
                V.readyState === 4 && Y.signal.removeEventListener("abort", W);
              })),
            V.send(typeof Y._bodyInit > "u" ? null : Y._bodyInit);
        });
      }
      return (
        (qe.polyfill = !0),
        h.fetch ||
          ((h.fetch = qe), (h.Headers = H), (h.Request = P), (h.Response = ge)),
        (d.Headers = H),
        (d.Request = P),
        (d.Response = ge),
        (d.fetch = qe),
        Object.defineProperty(d, "__esModule", { value: !0 }),
        d
      );
    })({});
  })(n),
    (n.fetch.ponyfill = !0),
    delete n.fetch.polyfill;
  var a = n;
  (t = a.fetch),
    (t.default = a.fetch),
    (t.fetch = a.fetch),
    (t.Headers = a.Headers),
    (t.Request = a.Request),
    (t.Response = a.Response),
    (s.exports = t);
})(aS, To);
const vf = I1(To),
  cS = { Accept: "application/json", "Content-Type": "application/json" },
  uS = "POST",
  bf = { headers: cS, method: uS },
  wf = 10;
class Gi {
  constructor(t, r = !1) {
    if (
      ((this.url = t),
      (this.disableProviderPing = r),
      (this.events = new sr.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !kl(t))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${t}`
      );
    (this.url = t), (this.disableProviderPing = r);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t, r) {
    this.isAvailable || (await this.register());
    try {
      const n = is(t),
        h = await (
          await vf(this.url, Object.assign(Object.assign({}, bf), { body: n }))
        ).json();
      this.onPayload({ data: h });
    } catch (n) {
      this.onError(t.id, n);
    }
  }
  async register(t = this.url) {
    if (!kl(t))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((n, a) => {
          this.events.once("register_error", (h) => {
            this.resetMaxListeners(), a(h);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return a(new Error("HTTP connection is missing or invalid"));
              n();
            });
        })
      );
    }
    (this.url = t), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const r = is({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await vf(t, Object.assign(Object.assign({}, bf), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const n = this.parseError(r);
      throw (this.events.emit("register_error", n), this.onClose(), n);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? Bc(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const n = this.parseError(r),
      a = n.message || n.toString(),
      h = Do(t, a);
    this.events.emit("payload", h);
  }
  parseError(t, r = this.url) {
    return nd(t, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > wf && this.events.setMaxListeners(wf);
  }
}
const _f = "error",
  hS = "wss://relay.walletconnect.com",
  lS = "wc",
  fS = "universal_provider",
  Ef = `${lS}@2:${fS}:`,
  dS = "https://rpc.walletconnect.com/v1/",
  Ai = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var Yn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Fc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (s, t) {
  (function () {
    var r,
      n = "4.17.21",
      a = 200,
      h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      d = "Expected a function",
      w = "Invalid `variable` option passed into `_.template`",
      S = "__lodash_hash_undefined__",
      $ = 500,
      A = "__lodash_placeholder__",
      U = 1,
      G = 2,
      J = 4,
      H = 1,
      Q = 2,
      oe = 1,
      pe = 2,
      f = 4,
      m = 8,
      b = 16,
      v = 32,
      g = 64,
      R = 128,
      P = 256,
      X = 512,
      se = 30,
      ge = "...",
      Ne = 800,
      qe = 16,
      E = 1,
      T = 2,
      ie = 3,
      de = 1 / 0,
      Y = 9007199254740991,
      V = 17976931348623157e292,
      W = 0 / 0,
      Z = 4294967295,
      Je = Z - 1,
      He = Z >>> 1,
      zr = [
        ["ary", R],
        ["bind", oe],
        ["bindKey", pe],
        ["curry", m],
        ["curryRight", b],
        ["flip", X],
        ["partial", v],
        ["partialRight", g],
        ["rearg", P],
      ],
      Ie = "[object Arguments]",
      It = "[object Array]",
      M = "[object AsyncFunction]",
      L = "[object Boolean]",
      F = "[object Date]",
      u = "[object DOMException]",
      O = "[object Error]",
      ae = "[object Function]",
      ye = "[object GeneratorFunction]",
      _e = "[object Map]",
      Ce = "[object Number]",
      De = "[object Null]",
      Pe = "[object Object]",
      St = "[object Promise]",
      mt = "[object Proxy]",
      st = "[object RegExp]",
      Ue = "[object Set]",
      Ye = "[object String]",
      Xe = "[object Symbol]",
      ot = "[object Undefined]",
      ze = "[object WeakMap]",
      Ze = "[object WeakSet]",
      $e = "[object ArrayBuffer]",
      Be = "[object DataView]",
      ut = "[object Float32Array]",
      Le = "[object Float64Array]",
      xt = "[object Int8Array]",
      Dt = "[object Int16Array]",
      kt = "[object Int32Array]",
      Ht = "[object Uint8Array]",
      jt = "[object Uint8ClampedArray]",
      Jt = "[object Uint16Array]",
      or = "[object Uint32Array]",
      kr = /\b__p \+= '';/g,
      Qt = /\b(__p \+=) '' \+/g,
      Qr = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      di = /&(?:amp|lt|gt|quot|#39);/g,
      Ti = /[&<>"']/g,
      ht = RegExp(di.source),
      rt = RegExp(Ti.source),
      lt = /<%-([\s\S]+?)%>/g,
      ft = /<%([\s\S]+?)%>/g,
      at = /<%=([\s\S]+?)%>/g,
      it = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Pt = /^\w*$/,
      Ot =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      dt = /[\\^$.*+?()[\]{}|]/g,
      At = RegExp(dt.source),
      pt = /^\s+/,
      vt = /\s/,
      gt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Qe = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Tt = /,? & /,
      Rt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Lo = /[()=,{}\[\]\/\s]/,
      Mo = /\\(\\)?/g,
      qo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Ir = /\w*$/,
      zo = /^[-+]0x[0-9a-f]+$/i,
      ko = /^0b[01]+$/i,
      Ho = /^\[object .+?Constructor\]$/,
      Bo = /^0o[0-7]+$/i,
      Vo = /^(?:0|[1-9]\d*)$/,
      Yr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Qi = /($^)/,
      Ko = /['\n\r\u2028\u2029\\]/g,
      Yi = "\\ud800-\\udfff",
      Wo = "\\u0300-\\u036f",
      Go = "\\ufe20-\\ufe2f",
      Xi = "\\u20d0-\\u20ff",
      fs = Wo + Go + Xi,
      ds = "\\u2700-\\u27bf",
      $r = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Jo = "\\xac\\xb1\\xd7\\xf7",
      Qo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Yo = "\\u2000-\\u206f",
      Xo =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      ps = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      gs = "\\ufe0e\\ufe0f",
      Ri = Jo + Qo + Yo + Xo,
      Sn = "['’]",
      Ni = "[" + Yi + "]",
      xn = "[" + Ri + "]",
      Ci = "[" + fs + "]",
      ys = "\\d+",
      Zo = "[" + ds + "]",
      ms = "[" + $r + "]",
      vs = "[^" + Yi + Ri + ys + ds + $r + ps + "]",
      Zi = "\\ud83c[\\udffb-\\udfff]",
      ea = "(?:" + Ci + "|" + Zi + ")",
      bs = "[^" + Yi + "]",
      en = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      pi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      yr = "[" + ps + "]",
      ws = "\\u200d",
      _s = "(?:" + ms + "|" + vs + ")",
      Hr = "(?:" + yr + "|" + vs + ")",
      Es = "(?:" + Sn + "(?:d|ll|m|re|s|t|ve))?",
      Is = "(?:" + Sn + "(?:D|LL|M|RE|S|T|VE))?",
      Ss = ea + "?",
      xs = "[" + gs + "]?",
      ta = "(?:" + ws + "(?:" + [bs, en, pi].join("|") + ")" + xs + Ss + ")*",
      Xr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      Ps = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Os = xs + Ss + ta,
      tn = "(?:" + [Zo, en, pi].join("|") + ")" + Os,
      ra = "(?:" + [bs + Ci + "?", Ci, en, pi, Ni].join("|") + ")",
      Pn = RegExp(Sn, "g"),
      ia = RegExp(Ci, "g"),
      rn = RegExp(Zi + "(?=" + Zi + ")|" + ra + Os, "g"),
      As = RegExp(
        [
          yr + "?" + ms + "+" + Es + "(?=" + [xn, yr, "$"].join("|") + ")",
          Hr + "+" + Is + "(?=" + [xn, yr + _s, "$"].join("|") + ")",
          yr + "?" + _s + "+" + Es,
          yr + "+" + Is,
          Ps,
          Xr,
          ys,
          tn,
        ].join("|"),
        "g"
      ),
      Ts = RegExp("[" + ws + Yi + fs + gs + "]"),
      $i = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Rs = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      na = -1,
      Ve = {};
    (Ve[ut] =
      Ve[Le] =
      Ve[xt] =
      Ve[Dt] =
      Ve[kt] =
      Ve[Ht] =
      Ve[jt] =
      Ve[Jt] =
      Ve[or] =
        !0),
      (Ve[Ie] =
        Ve[It] =
        Ve[$e] =
        Ve[L] =
        Ve[Be] =
        Ve[F] =
        Ve[O] =
        Ve[ae] =
        Ve[_e] =
        Ve[Ce] =
        Ve[Pe] =
        Ve[st] =
        Ve[Ue] =
        Ve[Ye] =
        Ve[ze] =
          !1);
    var ke = {};
    (ke[Ie] =
      ke[It] =
      ke[$e] =
      ke[Be] =
      ke[L] =
      ke[F] =
      ke[ut] =
      ke[Le] =
      ke[xt] =
      ke[Dt] =
      ke[kt] =
      ke[_e] =
      ke[Ce] =
      ke[Pe] =
      ke[st] =
      ke[Ue] =
      ke[Ye] =
      ke[Xe] =
      ke[Ht] =
      ke[jt] =
      ke[Jt] =
      ke[or] =
        !0),
      (ke[O] = ke[ae] = ke[ze] = !1);
    var _ = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      N = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      B = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      re = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Ke = parseFloat,
      ve = parseInt,
      et = typeof Yn == "object" && Yn && Yn.Object === Object && Yn,
      Nt = typeof self == "object" && self && self.Object === Object && self,
      Ae = et || Nt || Function("return this")(),
      We = t && !t.nodeType && t,
      bt = We && !0 && s && !s.nodeType && s,
      ar = bt && bt.exports === We,
      Ct = ar && et.process,
      tt = (function () {
        try {
          var C = bt && bt.require && bt.require("util").types;
          return C || (Ct && Ct.binding && Ct.binding("util"));
        } catch {}
      })(),
      Yt = tt && tt.isArrayBuffer,
      Dr = tt && tt.isDate,
      Sr = tt && tt.isMap,
      Br = tt && tt.isRegExp,
      On = tt && tt.isSet,
      Di = tt && tt.isTypedArray;
    function Lt(C, q, j) {
      switch (j.length) {
        case 0:
          return C.call(q);
        case 1:
          return C.call(q, j[0]);
        case 2:
          return C.call(q, j[0], j[1]);
        case 3:
          return C.call(q, j[0], j[1], j[2]);
      }
      return C.apply(q, j);
    }
    function Rd(C, q, j, ne) {
      for (var me = -1, Fe = C == null ? 0 : C.length; ++me < Fe; ) {
        var Ft = C[me];
        q(ne, Ft, j(Ft), C);
      }
      return ne;
    }
    function xr(C, q) {
      for (
        var j = -1, ne = C == null ? 0 : C.length;
        ++j < ne && q(C[j], j, C) !== !1;

      );
      return C;
    }
    function Nd(C, q) {
      for (var j = C == null ? 0 : C.length; j-- && q(C[j], j, C) !== !1; );
      return C;
    }
    function ou(C, q) {
      for (var j = -1, ne = C == null ? 0 : C.length; ++j < ne; )
        if (!q(C[j], j, C)) return !1;
      return !0;
    }
    function gi(C, q) {
      for (
        var j = -1, ne = C == null ? 0 : C.length, me = 0, Fe = [];
        ++j < ne;

      ) {
        var Ft = C[j];
        q(Ft, j, C) && (Fe[me++] = Ft);
      }
      return Fe;
    }
    function Ns(C, q) {
      var j = C == null ? 0 : C.length;
      return !!j && nn(C, q, 0) > -1;
    }
    function sa(C, q, j) {
      for (var ne = -1, me = C == null ? 0 : C.length; ++ne < me; )
        if (j(q, C[ne])) return !0;
      return !1;
    }
    function nt(C, q) {
      for (
        var j = -1, ne = C == null ? 0 : C.length, me = Array(ne);
        ++j < ne;

      )
        me[j] = q(C[j], j, C);
      return me;
    }
    function yi(C, q) {
      for (var j = -1, ne = q.length, me = C.length; ++j < ne; )
        C[me + j] = q[j];
      return C;
    }
    function oa(C, q, j, ne) {
      var me = -1,
        Fe = C == null ? 0 : C.length;
      for (ne && Fe && (j = C[++me]); ++me < Fe; ) j = q(j, C[me], me, C);
      return j;
    }
    function Cd(C, q, j, ne) {
      var me = C == null ? 0 : C.length;
      for (ne && me && (j = C[--me]); me--; ) j = q(j, C[me], me, C);
      return j;
    }
    function aa(C, q) {
      for (var j = -1, ne = C == null ? 0 : C.length; ++j < ne; )
        if (q(C[j], j, C)) return !0;
      return !1;
    }
    var $d = ca("length");
    function Dd(C) {
      return C.split("");
    }
    function Fd(C) {
      return C.match(Rt) || [];
    }
    function au(C, q, j) {
      var ne;
      return (
        j(C, function (me, Fe, Ft) {
          if (q(me, Fe, Ft)) return (ne = Fe), !1;
        }),
        ne
      );
    }
    function Cs(C, q, j, ne) {
      for (var me = C.length, Fe = j + (ne ? 1 : -1); ne ? Fe-- : ++Fe < me; )
        if (q(C[Fe], Fe, C)) return Fe;
      return -1;
    }
    function nn(C, q, j) {
      return q === q ? Wd(C, q, j) : Cs(C, cu, j);
    }
    function Ud(C, q, j, ne) {
      for (var me = j - 1, Fe = C.length; ++me < Fe; )
        if (ne(C[me], q)) return me;
      return -1;
    }
    function cu(C) {
      return C !== C;
    }
    function uu(C, q) {
      var j = C == null ? 0 : C.length;
      return j ? ha(C, q) / j : W;
    }
    function ca(C) {
      return function (q) {
        return q == null ? r : q[C];
      };
    }
    function ua(C) {
      return function (q) {
        return C == null ? r : C[q];
      };
    }
    function hu(C, q, j, ne, me) {
      return (
        me(C, function (Fe, Ft, Ge) {
          j = ne ? ((ne = !1), Fe) : q(j, Fe, Ft, Ge);
        }),
        j
      );
    }
    function jd(C, q) {
      var j = C.length;
      for (C.sort(q); j--; ) C[j] = C[j].value;
      return C;
    }
    function ha(C, q) {
      for (var j, ne = -1, me = C.length; ++ne < me; ) {
        var Fe = q(C[ne]);
        Fe !== r && (j = j === r ? Fe : j + Fe);
      }
      return j;
    }
    function la(C, q) {
      for (var j = -1, ne = Array(C); ++j < C; ) ne[j] = q(j);
      return ne;
    }
    function Ld(C, q) {
      return nt(q, function (j) {
        return [j, C[j]];
      });
    }
    function lu(C) {
      return C && C.slice(0, gu(C) + 1).replace(pt, "");
    }
    function mr(C) {
      return function (q) {
        return C(q);
      };
    }
    function fa(C, q) {
      return nt(q, function (j) {
        return C[j];
      });
    }
    function An(C, q) {
      return C.has(q);
    }
    function fu(C, q) {
      for (var j = -1, ne = C.length; ++j < ne && nn(q, C[j], 0) > -1; );
      return j;
    }
    function du(C, q) {
      for (var j = C.length; j-- && nn(q, C[j], 0) > -1; );
      return j;
    }
    function Md(C, q) {
      for (var j = C.length, ne = 0; j--; ) C[j] === q && ++ne;
      return ne;
    }
    var qd = ua(_),
      zd = ua(N);
    function kd(C) {
      return "\\" + re[C];
    }
    function Hd(C, q) {
      return C == null ? r : C[q];
    }
    function sn(C) {
      return Ts.test(C);
    }
    function Bd(C) {
      return $i.test(C);
    }
    function Vd(C) {
      for (var q, j = []; !(q = C.next()).done; ) j.push(q.value);
      return j;
    }
    function da(C) {
      var q = -1,
        j = Array(C.size);
      return (
        C.forEach(function (ne, me) {
          j[++q] = [me, ne];
        }),
        j
      );
    }
    function pu(C, q) {
      return function (j) {
        return C(q(j));
      };
    }
    function mi(C, q) {
      for (var j = -1, ne = C.length, me = 0, Fe = []; ++j < ne; ) {
        var Ft = C[j];
        (Ft === q || Ft === A) && ((C[j] = A), (Fe[me++] = j));
      }
      return Fe;
    }
    function $s(C) {
      var q = -1,
        j = Array(C.size);
      return (
        C.forEach(function (ne) {
          j[++q] = ne;
        }),
        j
      );
    }
    function Kd(C) {
      var q = -1,
        j = Array(C.size);
      return (
        C.forEach(function (ne) {
          j[++q] = [ne, ne];
        }),
        j
      );
    }
    function Wd(C, q, j) {
      for (var ne = j - 1, me = C.length; ++ne < me; )
        if (C[ne] === q) return ne;
      return -1;
    }
    function Gd(C, q, j) {
      for (var ne = j + 1; ne--; ) if (C[ne] === q) return ne;
      return ne;
    }
    function on(C) {
      return sn(C) ? Qd(C) : $d(C);
    }
    function Fr(C) {
      return sn(C) ? Yd(C) : Dd(C);
    }
    function gu(C) {
      for (var q = C.length; q-- && vt.test(C.charAt(q)); );
      return q;
    }
    var Jd = ua(B);
    function Qd(C) {
      for (var q = (rn.lastIndex = 0); rn.test(C); ) ++q;
      return q;
    }
    function Yd(C) {
      return C.match(rn) || [];
    }
    function Xd(C) {
      return C.match(As) || [];
    }
    var Zd = function C(q) {
        q = q == null ? Ae : an.defaults(Ae.Object(), q, an.pick(Ae, Rs));
        var j = q.Array,
          ne = q.Date,
          me = q.Error,
          Fe = q.Function,
          Ft = q.Math,
          Ge = q.Object,
          pa = q.RegExp,
          ep = q.String,
          Pr = q.TypeError,
          Ds = j.prototype,
          tp = Fe.prototype,
          cn = Ge.prototype,
          Fs = q["__core-js_shared__"],
          Us = tp.toString,
          Me = cn.hasOwnProperty,
          rp = 0,
          yu = (function () {
            var e = /[^.]+$/.exec((Fs && Fs.keys && Fs.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          js = cn.toString,
          ip = Us.call(Ge),
          np = Ae._,
          sp = pa(
            "^" +
              Us.call(Me)
                .replace(dt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Ls = ar ? q.Buffer : r,
          vi = q.Symbol,
          Ms = q.Uint8Array,
          mu = Ls ? Ls.allocUnsafe : r,
          qs = pu(Ge.getPrototypeOf, Ge),
          vu = Ge.create,
          bu = cn.propertyIsEnumerable,
          zs = Ds.splice,
          wu = vi ? vi.isConcatSpreadable : r,
          Tn = vi ? vi.iterator : r,
          Fi = vi ? vi.toStringTag : r,
          ks = (function () {
            try {
              var e = qi(Ge, "defineProperty");
              return e({}, "", {}), e;
            } catch {}
          })(),
          op = q.clearTimeout !== Ae.clearTimeout && q.clearTimeout,
          ap = ne && ne.now !== Ae.Date.now && ne.now,
          cp = q.setTimeout !== Ae.setTimeout && q.setTimeout,
          Hs = Ft.ceil,
          Bs = Ft.floor,
          ga = Ge.getOwnPropertySymbols,
          up = Ls ? Ls.isBuffer : r,
          _u = q.isFinite,
          hp = Ds.join,
          lp = pu(Ge.keys, Ge),
          Ut = Ft.max,
          Kt = Ft.min,
          fp = ne.now,
          dp = q.parseInt,
          Eu = Ft.random,
          pp = Ds.reverse,
          ya = qi(q, "DataView"),
          Rn = qi(q, "Map"),
          ma = qi(q, "Promise"),
          un = qi(q, "Set"),
          Nn = qi(q, "WeakMap"),
          Cn = qi(Ge, "create"),
          Vs = Nn && new Nn(),
          hn = {},
          gp = zi(ya),
          yp = zi(Rn),
          mp = zi(ma),
          vp = zi(un),
          bp = zi(Nn),
          Ks = vi ? vi.prototype : r,
          $n = Ks ? Ks.valueOf : r,
          Iu = Ks ? Ks.toString : r;
        function p(e) {
          if (yt(e) && !be(e) && !(e instanceof Oe)) {
            if (e instanceof Or) return e;
            if (Me.call(e, "__wrapped__")) return Sh(e);
          }
          return new Or(e);
        }
        var ln = (function () {
          function e() {}
          return function (i) {
            if (!ct(i)) return {};
            if (vu) return vu(i);
            e.prototype = i;
            var o = new e();
            return (e.prototype = r), o;
          };
        })();
        function Ws() {}
        function Or(e, i) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!i),
            (this.__index__ = 0),
            (this.__values__ = r);
        }
        (p.templateSettings = {
          escape: lt,
          evaluate: ft,
          interpolate: at,
          variable: "",
          imports: { _: p },
        }),
          (p.prototype = Ws.prototype),
          (p.prototype.constructor = p),
          (Or.prototype = ln(Ws.prototype)),
          (Or.prototype.constructor = Or);
        function Oe(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = Z),
            (this.__views__ = []);
        }
        function wp() {
          var e = new Oe(this.__wrapped__);
          return (
            (e.__actions__ = cr(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = cr(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = cr(this.__views__)),
            e
          );
        }
        function _p() {
          if (this.__filtered__) {
            var e = new Oe(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function Ep() {
          var e = this.__wrapped__.value(),
            i = this.__dir__,
            o = be(e),
            c = i < 0,
            l = o ? e.length : 0,
            y = Dg(0, l, this.__views__),
            I = y.start,
            x = y.end,
            D = x - I,
            z = c ? x : I - 1,
            k = this.__iteratees__,
            K = k.length,
            ee = 0,
            ce = Kt(D, this.__takeCount__);
          if (!o || (!c && l == D && ce == D)) return Wu(e, this.__actions__);
          var le = [];
          e: for (; D-- && ee < ce; ) {
            z += i;
            for (var Ee = -1, fe = e[z]; ++Ee < K; ) {
              var xe = k[Ee],
                Te = xe.iteratee,
                wr = xe.type,
                er = Te(fe);
              if (wr == T) fe = er;
              else if (!er) {
                if (wr == E) continue e;
                break e;
              }
            }
            le[ee++] = fe;
          }
          return le;
        }
        (Oe.prototype = ln(Ws.prototype)), (Oe.prototype.constructor = Oe);
        function Ui(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function Ip() {
          (this.__data__ = Cn ? Cn(null) : {}), (this.size = 0);
        }
        function Sp(e) {
          var i = this.has(e) && delete this.__data__[e];
          return (this.size -= i ? 1 : 0), i;
        }
        function xp(e) {
          var i = this.__data__;
          if (Cn) {
            var o = i[e];
            return o === S ? r : o;
          }
          return Me.call(i, e) ? i[e] : r;
        }
        function Pp(e) {
          var i = this.__data__;
          return Cn ? i[e] !== r : Me.call(i, e);
        }
        function Op(e, i) {
          var o = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (o[e] = Cn && i === r ? S : i),
            this
          );
        }
        (Ui.prototype.clear = Ip),
          (Ui.prototype.delete = Sp),
          (Ui.prototype.get = xp),
          (Ui.prototype.has = Pp),
          (Ui.prototype.set = Op);
        function Zr(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function Ap() {
          (this.__data__ = []), (this.size = 0);
        }
        function Tp(e) {
          var i = this.__data__,
            o = Gs(i, e);
          if (o < 0) return !1;
          var c = i.length - 1;
          return o == c ? i.pop() : zs.call(i, o, 1), --this.size, !0;
        }
        function Rp(e) {
          var i = this.__data__,
            o = Gs(i, e);
          return o < 0 ? r : i[o][1];
        }
        function Np(e) {
          return Gs(this.__data__, e) > -1;
        }
        function Cp(e, i) {
          var o = this.__data__,
            c = Gs(o, e);
          return c < 0 ? (++this.size, o.push([e, i])) : (o[c][1] = i), this;
        }
        (Zr.prototype.clear = Ap),
          (Zr.prototype.delete = Tp),
          (Zr.prototype.get = Rp),
          (Zr.prototype.has = Np),
          (Zr.prototype.set = Cp);
        function ei(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function $p() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Ui(),
              map: new (Rn || Zr)(),
              string: new Ui(),
            });
        }
        function Dp(e) {
          var i = oo(this, e).delete(e);
          return (this.size -= i ? 1 : 0), i;
        }
        function Fp(e) {
          return oo(this, e).get(e);
        }
        function Up(e) {
          return oo(this, e).has(e);
        }
        function jp(e, i) {
          var o = oo(this, e),
            c = o.size;
          return o.set(e, i), (this.size += o.size == c ? 0 : 1), this;
        }
        (ei.prototype.clear = $p),
          (ei.prototype.delete = Dp),
          (ei.prototype.get = Fp),
          (ei.prototype.has = Up),
          (ei.prototype.set = jp);
        function ji(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.__data__ = new ei(); ++i < o; ) this.add(e[i]);
        }
        function Lp(e) {
          return this.__data__.set(e, S), this;
        }
        function Mp(e) {
          return this.__data__.has(e);
        }
        (ji.prototype.add = ji.prototype.push = Lp), (ji.prototype.has = Mp);
        function Ur(e) {
          var i = (this.__data__ = new Zr(e));
          this.size = i.size;
        }
        function qp() {
          (this.__data__ = new Zr()), (this.size = 0);
        }
        function zp(e) {
          var i = this.__data__,
            o = i.delete(e);
          return (this.size = i.size), o;
        }
        function kp(e) {
          return this.__data__.get(e);
        }
        function Hp(e) {
          return this.__data__.has(e);
        }
        function Bp(e, i) {
          var o = this.__data__;
          if (o instanceof Zr) {
            var c = o.__data__;
            if (!Rn || c.length < a - 1)
              return c.push([e, i]), (this.size = ++o.size), this;
            o = this.__data__ = new ei(c);
          }
          return o.set(e, i), (this.size = o.size), this;
        }
        (Ur.prototype.clear = qp),
          (Ur.prototype.delete = zp),
          (Ur.prototype.get = kp),
          (Ur.prototype.has = Hp),
          (Ur.prototype.set = Bp);
        function Su(e, i) {
          var o = be(e),
            c = !o && ki(e),
            l = !o && !c && Ii(e),
            y = !o && !c && !l && gn(e),
            I = o || c || l || y,
            x = I ? la(e.length, ep) : [],
            D = x.length;
          for (var z in e)
            (i || Me.call(e, z)) &&
              !(
                I &&
                (z == "length" ||
                  (l && (z == "offset" || z == "parent")) ||
                  (y &&
                    (z == "buffer" ||
                      z == "byteLength" ||
                      z == "byteOffset")) ||
                  ni(z, D))
              ) &&
              x.push(z);
          return x;
        }
        function xu(e) {
          var i = e.length;
          return i ? e[Aa(0, i - 1)] : r;
        }
        function Vp(e, i) {
          return ao(cr(e), Li(i, 0, e.length));
        }
        function Kp(e) {
          return ao(cr(e));
        }
        function va(e, i, o) {
          ((o !== r && !jr(e[i], o)) || (o === r && !(i in e))) && ti(e, i, o);
        }
        function Dn(e, i, o) {
          var c = e[i];
          (!(Me.call(e, i) && jr(c, o)) || (o === r && !(i in e))) &&
            ti(e, i, o);
        }
        function Gs(e, i) {
          for (var o = e.length; o--; ) if (jr(e[o][0], i)) return o;
          return -1;
        }
        function Wp(e, i, o, c) {
          return (
            bi(e, function (l, y, I) {
              i(c, l, o(l), I);
            }),
            c
          );
        }
        function Pu(e, i) {
          return e && Kr(i, Mt(i), e);
        }
        function Gp(e, i) {
          return e && Kr(i, hr(i), e);
        }
        function ti(e, i, o) {
          i == "__proto__" && ks
            ? ks(e, i, {
                configurable: !0,
                enumerable: !0,
                value: o,
                writable: !0,
              })
            : (e[i] = o);
        }
        function ba(e, i) {
          for (var o = -1, c = i.length, l = j(c), y = e == null; ++o < c; )
            l[o] = y ? r : Za(e, i[o]);
          return l;
        }
        function Li(e, i, o) {
          return (
            e === e &&
              (o !== r && (e = e <= o ? e : o),
              i !== r && (e = e >= i ? e : i)),
            e
          );
        }
        function Ar(e, i, o, c, l, y) {
          var I,
            x = i & U,
            D = i & G,
            z = i & J;
          if ((o && (I = l ? o(e, c, l, y) : o(e)), I !== r)) return I;
          if (!ct(e)) return e;
          var k = be(e);
          if (k) {
            if (((I = Ug(e)), !x)) return cr(e, I);
          } else {
            var K = Wt(e),
              ee = K == ae || K == ye;
            if (Ii(e)) return Qu(e, x);
            if (K == Pe || K == Ie || (ee && !l)) {
              if (((I = D || ee ? {} : gh(e)), !x))
                return D ? xg(e, Gp(I, e)) : Sg(e, Pu(I, e));
            } else {
              if (!ke[K]) return l ? e : {};
              I = jg(e, K, x);
            }
          }
          y || (y = new Ur());
          var ce = y.get(e);
          if (ce) return ce;
          y.set(e, I),
            Bh(e)
              ? e.forEach(function (fe) {
                  I.add(Ar(fe, i, o, fe, e, y));
                })
              : kh(e) &&
                e.forEach(function (fe, xe) {
                  I.set(xe, Ar(fe, i, o, xe, e, y));
                });
          var le = z ? (D ? Ma : La) : D ? hr : Mt,
            Ee = k ? r : le(e);
          return (
            xr(Ee || e, function (fe, xe) {
              Ee && ((xe = fe), (fe = e[xe])),
                Dn(I, xe, Ar(fe, i, o, xe, e, y));
            }),
            I
          );
        }
        function Jp(e) {
          var i = Mt(e);
          return function (o) {
            return Ou(o, e, i);
          };
        }
        function Ou(e, i, o) {
          var c = o.length;
          if (e == null) return !c;
          for (e = Ge(e); c--; ) {
            var l = o[c],
              y = i[l],
              I = e[l];
            if ((I === r && !(l in e)) || !y(I)) return !1;
          }
          return !0;
        }
        function Au(e, i, o) {
          if (typeof e != "function") throw new Pr(d);
          return zn(function () {
            e.apply(r, o);
          }, i);
        }
        function Fn(e, i, o, c) {
          var l = -1,
            y = Ns,
            I = !0,
            x = e.length,
            D = [],
            z = i.length;
          if (!x) return D;
          o && (i = nt(i, mr(o))),
            c
              ? ((y = sa), (I = !1))
              : i.length >= a && ((y = An), (I = !1), (i = new ji(i)));
          e: for (; ++l < x; ) {
            var k = e[l],
              K = o == null ? k : o(k);
            if (((k = c || k !== 0 ? k : 0), I && K === K)) {
              for (var ee = z; ee--; ) if (i[ee] === K) continue e;
              D.push(k);
            } else y(i, K, c) || D.push(k);
          }
          return D;
        }
        var bi = th(Vr),
          Tu = th(_a, !0);
        function Qp(e, i) {
          var o = !0;
          return (
            bi(e, function (c, l, y) {
              return (o = !!i(c, l, y)), o;
            }),
            o
          );
        }
        function Js(e, i, o) {
          for (var c = -1, l = e.length; ++c < l; ) {
            var y = e[c],
              I = i(y);
            if (I != null && (x === r ? I === I && !br(I) : o(I, x)))
              var x = I,
                D = y;
          }
          return D;
        }
        function Yp(e, i, o, c) {
          var l = e.length;
          for (
            o = we(o),
              o < 0 && (o = -o > l ? 0 : l + o),
              c = c === r || c > l ? l : we(c),
              c < 0 && (c += l),
              c = o > c ? 0 : Kh(c);
            o < c;

          )
            e[o++] = i;
          return e;
        }
        function Ru(e, i) {
          var o = [];
          return (
            bi(e, function (c, l, y) {
              i(c, l, y) && o.push(c);
            }),
            o
          );
        }
        function Bt(e, i, o, c, l) {
          var y = -1,
            I = e.length;
          for (o || (o = Mg), l || (l = []); ++y < I; ) {
            var x = e[y];
            i > 0 && o(x)
              ? i > 1
                ? Bt(x, i - 1, o, c, l)
                : yi(l, x)
              : c || (l[l.length] = x);
          }
          return l;
        }
        var wa = rh(),
          Nu = rh(!0);
        function Vr(e, i) {
          return e && wa(e, i, Mt);
        }
        function _a(e, i) {
          return e && Nu(e, i, Mt);
        }
        function Qs(e, i) {
          return gi(i, function (o) {
            return si(e[o]);
          });
        }
        function Mi(e, i) {
          i = _i(i, e);
          for (var o = 0, c = i.length; e != null && o < c; ) e = e[Wr(i[o++])];
          return o && o == c ? e : r;
        }
        function Cu(e, i, o) {
          var c = i(e);
          return be(e) ? c : yi(c, o(e));
        }
        function Xt(e) {
          return e == null
            ? e === r
              ? ot
              : De
            : Fi && Fi in Ge(e)
            ? $g(e)
            : Kg(e);
        }
        function Ea(e, i) {
          return e > i;
        }
        function Xp(e, i) {
          return e != null && Me.call(e, i);
        }
        function Zp(e, i) {
          return e != null && i in Ge(e);
        }
        function eg(e, i, o) {
          return e >= Kt(i, o) && e < Ut(i, o);
        }
        function Ia(e, i, o) {
          for (
            var c = o ? sa : Ns,
              l = e[0].length,
              y = e.length,
              I = y,
              x = j(y),
              D = 1 / 0,
              z = [];
            I--;

          ) {
            var k = e[I];
            I && i && (k = nt(k, mr(i))),
              (D = Kt(k.length, D)),
              (x[I] =
                !o && (i || (l >= 120 && k.length >= 120))
                  ? new ji(I && k)
                  : r);
          }
          k = e[0];
          var K = -1,
            ee = x[0];
          e: for (; ++K < l && z.length < D; ) {
            var ce = k[K],
              le = i ? i(ce) : ce;
            if (
              ((ce = o || ce !== 0 ? ce : 0), !(ee ? An(ee, le) : c(z, le, o)))
            ) {
              for (I = y; --I; ) {
                var Ee = x[I];
                if (!(Ee ? An(Ee, le) : c(e[I], le, o))) continue e;
              }
              ee && ee.push(le), z.push(ce);
            }
          }
          return z;
        }
        function tg(e, i, o, c) {
          return (
            Vr(e, function (l, y, I) {
              i(c, o(l), y, I);
            }),
            c
          );
        }
        function Un(e, i, o) {
          (i = _i(i, e)), (e = bh(e, i));
          var c = e == null ? e : e[Wr(Rr(i))];
          return c == null ? r : Lt(c, e, o);
        }
        function $u(e) {
          return yt(e) && Xt(e) == Ie;
        }
        function rg(e) {
          return yt(e) && Xt(e) == $e;
        }
        function ig(e) {
          return yt(e) && Xt(e) == F;
        }
        function jn(e, i, o, c, l) {
          return e === i
            ? !0
            : e == null || i == null || (!yt(e) && !yt(i))
            ? e !== e && i !== i
            : ng(e, i, o, c, jn, l);
        }
        function ng(e, i, o, c, l, y) {
          var I = be(e),
            x = be(i),
            D = I ? It : Wt(e),
            z = x ? It : Wt(i);
          (D = D == Ie ? Pe : D), (z = z == Ie ? Pe : z);
          var k = D == Pe,
            K = z == Pe,
            ee = D == z;
          if (ee && Ii(e)) {
            if (!Ii(i)) return !1;
            (I = !0), (k = !1);
          }
          if (ee && !k)
            return (
              y || (y = new Ur()),
              I || gn(e) ? fh(e, i, o, c, l, y) : Ng(e, i, D, o, c, l, y)
            );
          if (!(o & H)) {
            var ce = k && Me.call(e, "__wrapped__"),
              le = K && Me.call(i, "__wrapped__");
            if (ce || le) {
              var Ee = ce ? e.value() : e,
                fe = le ? i.value() : i;
              return y || (y = new Ur()), l(Ee, fe, o, c, y);
            }
          }
          return ee ? (y || (y = new Ur()), Cg(e, i, o, c, l, y)) : !1;
        }
        function sg(e) {
          return yt(e) && Wt(e) == _e;
        }
        function Sa(e, i, o, c) {
          var l = o.length,
            y = l,
            I = !c;
          if (e == null) return !y;
          for (e = Ge(e); l--; ) {
            var x = o[l];
            if (I && x[2] ? x[1] !== e[x[0]] : !(x[0] in e)) return !1;
          }
          for (; ++l < y; ) {
            x = o[l];
            var D = x[0],
              z = e[D],
              k = x[1];
            if (I && x[2]) {
              if (z === r && !(D in e)) return !1;
            } else {
              var K = new Ur();
              if (c) var ee = c(z, k, D, e, i, K);
              if (!(ee === r ? jn(k, z, H | Q, c, K) : ee)) return !1;
            }
          }
          return !0;
        }
        function Du(e) {
          if (!ct(e) || zg(e)) return !1;
          var i = si(e) ? sp : Ho;
          return i.test(zi(e));
        }
        function og(e) {
          return yt(e) && Xt(e) == st;
        }
        function ag(e) {
          return yt(e) && Wt(e) == Ue;
        }
        function cg(e) {
          return yt(e) && po(e.length) && !!Ve[Xt(e)];
        }
        function Fu(e) {
          return typeof e == "function"
            ? e
            : e == null
            ? lr
            : typeof e == "object"
            ? be(e)
              ? Lu(e[0], e[1])
              : ju(e)
            : il(e);
        }
        function xa(e) {
          if (!qn(e)) return lp(e);
          var i = [];
          for (var o in Ge(e)) Me.call(e, o) && o != "constructor" && i.push(o);
          return i;
        }
        function ug(e) {
          if (!ct(e)) return Vg(e);
          var i = qn(e),
            o = [];
          for (var c in e)
            (c == "constructor" && (i || !Me.call(e, c))) || o.push(c);
          return o;
        }
        function Pa(e, i) {
          return e < i;
        }
        function Uu(e, i) {
          var o = -1,
            c = ur(e) ? j(e.length) : [];
          return (
            bi(e, function (l, y, I) {
              c[++o] = i(l, y, I);
            }),
            c
          );
        }
        function ju(e) {
          var i = za(e);
          return i.length == 1 && i[0][2]
            ? mh(i[0][0], i[0][1])
            : function (o) {
                return o === e || Sa(o, e, i);
              };
        }
        function Lu(e, i) {
          return Ha(e) && yh(i)
            ? mh(Wr(e), i)
            : function (o) {
                var c = Za(o, e);
                return c === r && c === i ? ec(o, e) : jn(i, c, H | Q);
              };
        }
        function Ys(e, i, o, c, l) {
          e !== i &&
            wa(
              i,
              function (y, I) {
                if ((l || (l = new Ur()), ct(y))) hg(e, i, I, o, Ys, c, l);
                else {
                  var x = c ? c(Va(e, I), y, I + "", e, i, l) : r;
                  x === r && (x = y), va(e, I, x);
                }
              },
              hr
            );
        }
        function hg(e, i, o, c, l, y, I) {
          var x = Va(e, o),
            D = Va(i, o),
            z = I.get(D);
          if (z) {
            va(e, o, z);
            return;
          }
          var k = y ? y(x, D, o + "", e, i, I) : r,
            K = k === r;
          if (K) {
            var ee = be(D),
              ce = !ee && Ii(D),
              le = !ee && !ce && gn(D);
            (k = D),
              ee || ce || le
                ? be(x)
                  ? (k = x)
                  : wt(x)
                  ? (k = cr(x))
                  : ce
                  ? ((K = !1), (k = Qu(D, !0)))
                  : le
                  ? ((K = !1), (k = Yu(D, !0)))
                  : (k = [])
                : kn(D) || ki(D)
                ? ((k = x),
                  ki(x) ? (k = Wh(x)) : (!ct(x) || si(x)) && (k = gh(D)))
                : (K = !1);
          }
          K && (I.set(D, k), l(k, D, c, y, I), I.delete(D)), va(e, o, k);
        }
        function Mu(e, i) {
          var o = e.length;
          if (o) return (i += i < 0 ? o : 0), ni(i, o) ? e[i] : r;
        }
        function qu(e, i, o) {
          i.length
            ? (i = nt(i, function (y) {
                return be(y)
                  ? function (I) {
                      return Mi(I, y.length === 1 ? y[0] : y);
                    }
                  : y;
              }))
            : (i = [lr]);
          var c = -1;
          i = nt(i, mr(he()));
          var l = Uu(e, function (y, I, x) {
            var D = nt(i, function (z) {
              return z(y);
            });
            return { criteria: D, index: ++c, value: y };
          });
          return jd(l, function (y, I) {
            return Ig(y, I, o);
          });
        }
        function lg(e, i) {
          return zu(e, i, function (o, c) {
            return ec(e, c);
          });
        }
        function zu(e, i, o) {
          for (var c = -1, l = i.length, y = {}; ++c < l; ) {
            var I = i[c],
              x = Mi(e, I);
            o(x, I) && Ln(y, _i(I, e), x);
          }
          return y;
        }
        function fg(e) {
          return function (i) {
            return Mi(i, e);
          };
        }
        function Oa(e, i, o, c) {
          var l = c ? Ud : nn,
            y = -1,
            I = i.length,
            x = e;
          for (e === i && (i = cr(i)), o && (x = nt(e, mr(o))); ++y < I; )
            for (
              var D = 0, z = i[y], k = o ? o(z) : z;
              (D = l(x, k, D, c)) > -1;

            )
              x !== e && zs.call(x, D, 1), zs.call(e, D, 1);
          return e;
        }
        function ku(e, i) {
          for (var o = e ? i.length : 0, c = o - 1; o--; ) {
            var l = i[o];
            if (o == c || l !== y) {
              var y = l;
              ni(l) ? zs.call(e, l, 1) : Na(e, l);
            }
          }
          return e;
        }
        function Aa(e, i) {
          return e + Bs(Eu() * (i - e + 1));
        }
        function dg(e, i, o, c) {
          for (var l = -1, y = Ut(Hs((i - e) / (o || 1)), 0), I = j(y); y--; )
            (I[c ? y : ++l] = e), (e += o);
          return I;
        }
        function Ta(e, i) {
          var o = "";
          if (!e || i < 1 || i > Y) return o;
          do i % 2 && (o += e), (i = Bs(i / 2)), i && (e += e);
          while (i);
          return o;
        }
        function Se(e, i) {
          return Ka(vh(e, i, lr), e + "");
        }
        function pg(e) {
          return xu(yn(e));
        }
        function gg(e, i) {
          var o = yn(e);
          return ao(o, Li(i, 0, o.length));
        }
        function Ln(e, i, o, c) {
          if (!ct(e)) return e;
          i = _i(i, e);
          for (
            var l = -1, y = i.length, I = y - 1, x = e;
            x != null && ++l < y;

          ) {
            var D = Wr(i[l]),
              z = o;
            if (D === "__proto__" || D === "constructor" || D === "prototype")
              return e;
            if (l != I) {
              var k = x[D];
              (z = c ? c(k, D, x) : r),
                z === r && (z = ct(k) ? k : ni(i[l + 1]) ? [] : {});
            }
            Dn(x, D, z), (x = x[D]);
          }
          return e;
        }
        var Hu = Vs
            ? function (e, i) {
                return Vs.set(e, i), e;
              }
            : lr,
          yg = ks
            ? function (e, i) {
                return ks(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: rc(i),
                  writable: !0,
                });
              }
            : lr;
        function mg(e) {
          return ao(yn(e));
        }
        function Tr(e, i, o) {
          var c = -1,
            l = e.length;
          i < 0 && (i = -i > l ? 0 : l + i),
            (o = o > l ? l : o),
            o < 0 && (o += l),
            (l = i > o ? 0 : (o - i) >>> 0),
            (i >>>= 0);
          for (var y = j(l); ++c < l; ) y[c] = e[c + i];
          return y;
        }
        function vg(e, i) {
          var o;
          return (
            bi(e, function (c, l, y) {
              return (o = i(c, l, y)), !o;
            }),
            !!o
          );
        }
        function Xs(e, i, o) {
          var c = 0,
            l = e == null ? c : e.length;
          if (typeof i == "number" && i === i && l <= He) {
            for (; c < l; ) {
              var y = (c + l) >>> 1,
                I = e[y];
              I !== null && !br(I) && (o ? I <= i : I < i)
                ? (c = y + 1)
                : (l = y);
            }
            return l;
          }
          return Ra(e, i, lr, o);
        }
        function Ra(e, i, o, c) {
          var l = 0,
            y = e == null ? 0 : e.length;
          if (y === 0) return 0;
          i = o(i);
          for (
            var I = i !== i, x = i === null, D = br(i), z = i === r;
            l < y;

          ) {
            var k = Bs((l + y) / 2),
              K = o(e[k]),
              ee = K !== r,
              ce = K === null,
              le = K === K,
              Ee = br(K);
            if (I) var fe = c || le;
            else
              z
                ? (fe = le && (c || ee))
                : x
                ? (fe = le && ee && (c || !ce))
                : D
                ? (fe = le && ee && !ce && (c || !Ee))
                : ce || Ee
                ? (fe = !1)
                : (fe = c ? K <= i : K < i);
            fe ? (l = k + 1) : (y = k);
          }
          return Kt(y, Je);
        }
        function Bu(e, i) {
          for (var o = -1, c = e.length, l = 0, y = []; ++o < c; ) {
            var I = e[o],
              x = i ? i(I) : I;
            if (!o || !jr(x, D)) {
              var D = x;
              y[l++] = I === 0 ? 0 : I;
            }
          }
          return y;
        }
        function Vu(e) {
          return typeof e == "number" ? e : br(e) ? W : +e;
        }
        function vr(e) {
          if (typeof e == "string") return e;
          if (be(e)) return nt(e, vr) + "";
          if (br(e)) return Iu ? Iu.call(e) : "";
          var i = e + "";
          return i == "0" && 1 / e == -de ? "-0" : i;
        }
        function wi(e, i, o) {
          var c = -1,
            l = Ns,
            y = e.length,
            I = !0,
            x = [],
            D = x;
          if (o) (I = !1), (l = sa);
          else if (y >= a) {
            var z = i ? null : Tg(e);
            if (z) return $s(z);
            (I = !1), (l = An), (D = new ji());
          } else D = i ? [] : x;
          e: for (; ++c < y; ) {
            var k = e[c],
              K = i ? i(k) : k;
            if (((k = o || k !== 0 ? k : 0), I && K === K)) {
              for (var ee = D.length; ee--; ) if (D[ee] === K) continue e;
              i && D.push(K), x.push(k);
            } else l(D, K, o) || (D !== x && D.push(K), x.push(k));
          }
          return x;
        }
        function Na(e, i) {
          return (
            (i = _i(i, e)), (e = bh(e, i)), e == null || delete e[Wr(Rr(i))]
          );
        }
        function Ku(e, i, o, c) {
          return Ln(e, i, o(Mi(e, i)), c);
        }
        function Zs(e, i, o, c) {
          for (
            var l = e.length, y = c ? l : -1;
            (c ? y-- : ++y < l) && i(e[y], y, e);

          );
          return o
            ? Tr(e, c ? 0 : y, c ? y + 1 : l)
            : Tr(e, c ? y + 1 : 0, c ? l : y);
        }
        function Wu(e, i) {
          var o = e;
          return (
            o instanceof Oe && (o = o.value()),
            oa(
              i,
              function (c, l) {
                return l.func.apply(l.thisArg, yi([c], l.args));
              },
              o
            )
          );
        }
        function Ca(e, i, o) {
          var c = e.length;
          if (c < 2) return c ? wi(e[0]) : [];
          for (var l = -1, y = j(c); ++l < c; )
            for (var I = e[l], x = -1; ++x < c; )
              x != l && (y[l] = Fn(y[l] || I, e[x], i, o));
          return wi(Bt(y, 1), i, o);
        }
        function Gu(e, i, o) {
          for (var c = -1, l = e.length, y = i.length, I = {}; ++c < l; ) {
            var x = c < y ? i[c] : r;
            o(I, e[c], x);
          }
          return I;
        }
        function $a(e) {
          return wt(e) ? e : [];
        }
        function Da(e) {
          return typeof e == "function" ? e : lr;
        }
        function _i(e, i) {
          return be(e) ? e : Ha(e, i) ? [e] : Ih(je(e));
        }
        var bg = Se;
        function Ei(e, i, o) {
          var c = e.length;
          return (o = o === r ? c : o), !i && o >= c ? e : Tr(e, i, o);
        }
        var Ju =
          op ||
          function (e) {
            return Ae.clearTimeout(e);
          };
        function Qu(e, i) {
          if (i) return e.slice();
          var o = e.length,
            c = mu ? mu(o) : new e.constructor(o);
          return e.copy(c), c;
        }
        function Fa(e) {
          var i = new e.constructor(e.byteLength);
          return new Ms(i).set(new Ms(e)), i;
        }
        function wg(e, i) {
          var o = i ? Fa(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.byteLength);
        }
        function _g(e) {
          var i = new e.constructor(e.source, Ir.exec(e));
          return (i.lastIndex = e.lastIndex), i;
        }
        function Eg(e) {
          return $n ? Ge($n.call(e)) : {};
        }
        function Yu(e, i) {
          var o = i ? Fa(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.length);
        }
        function Xu(e, i) {
          if (e !== i) {
            var o = e !== r,
              c = e === null,
              l = e === e,
              y = br(e),
              I = i !== r,
              x = i === null,
              D = i === i,
              z = br(i);
            if (
              (!x && !z && !y && e > i) ||
              (y && I && D && !x && !z) ||
              (c && I && D) ||
              (!o && D) ||
              !l
            )
              return 1;
            if (
              (!c && !y && !z && e < i) ||
              (z && o && l && !c && !y) ||
              (x && o && l) ||
              (!I && l) ||
              !D
            )
              return -1;
          }
          return 0;
        }
        function Ig(e, i, o) {
          for (
            var c = -1,
              l = e.criteria,
              y = i.criteria,
              I = l.length,
              x = o.length;
            ++c < I;

          ) {
            var D = Xu(l[c], y[c]);
            if (D) {
              if (c >= x) return D;
              var z = o[c];
              return D * (z == "desc" ? -1 : 1);
            }
          }
          return e.index - i.index;
        }
        function Zu(e, i, o, c) {
          for (
            var l = -1,
              y = e.length,
              I = o.length,
              x = -1,
              D = i.length,
              z = Ut(y - I, 0),
              k = j(D + z),
              K = !c;
            ++x < D;

          )
            k[x] = i[x];
          for (; ++l < I; ) (K || l < y) && (k[o[l]] = e[l]);
          for (; z--; ) k[x++] = e[l++];
          return k;
        }
        function eh(e, i, o, c) {
          for (
            var l = -1,
              y = e.length,
              I = -1,
              x = o.length,
              D = -1,
              z = i.length,
              k = Ut(y - x, 0),
              K = j(k + z),
              ee = !c;
            ++l < k;

          )
            K[l] = e[l];
          for (var ce = l; ++D < z; ) K[ce + D] = i[D];
          for (; ++I < x; ) (ee || l < y) && (K[ce + o[I]] = e[l++]);
          return K;
        }
        function cr(e, i) {
          var o = -1,
            c = e.length;
          for (i || (i = j(c)); ++o < c; ) i[o] = e[o];
          return i;
        }
        function Kr(e, i, o, c) {
          var l = !o;
          o || (o = {});
          for (var y = -1, I = i.length; ++y < I; ) {
            var x = i[y],
              D = c ? c(o[x], e[x], x, o, e) : r;
            D === r && (D = e[x]), l ? ti(o, x, D) : Dn(o, x, D);
          }
          return o;
        }
        function Sg(e, i) {
          return Kr(e, ka(e), i);
        }
        function xg(e, i) {
          return Kr(e, dh(e), i);
        }
        function eo(e, i) {
          return function (o, c) {
            var l = be(o) ? Rd : Wp,
              y = i ? i() : {};
            return l(o, e, he(c, 2), y);
          };
        }
        function fn(e) {
          return Se(function (i, o) {
            var c = -1,
              l = o.length,
              y = l > 1 ? o[l - 1] : r,
              I = l > 2 ? o[2] : r;
            for (
              y = e.length > 3 && typeof y == "function" ? (l--, y) : r,
                I && Zt(o[0], o[1], I) && ((y = l < 3 ? r : y), (l = 1)),
                i = Ge(i);
              ++c < l;

            ) {
              var x = o[c];
              x && e(i, x, c, y);
            }
            return i;
          });
        }
        function th(e, i) {
          return function (o, c) {
            if (o == null) return o;
            if (!ur(o)) return e(o, c);
            for (
              var l = o.length, y = i ? l : -1, I = Ge(o);
              (i ? y-- : ++y < l) && c(I[y], y, I) !== !1;

            );
            return o;
          };
        }
        function rh(e) {
          return function (i, o, c) {
            for (var l = -1, y = Ge(i), I = c(i), x = I.length; x--; ) {
              var D = I[e ? x : ++l];
              if (o(y[D], D, y) === !1) break;
            }
            return i;
          };
        }
        function Pg(e, i, o) {
          var c = i & oe,
            l = Mn(e);
          function y() {
            var I = this && this !== Ae && this instanceof y ? l : e;
            return I.apply(c ? o : this, arguments);
          }
          return y;
        }
        function ih(e) {
          return function (i) {
            i = je(i);
            var o = sn(i) ? Fr(i) : r,
              c = o ? o[0] : i.charAt(0),
              l = o ? Ei(o, 1).join("") : i.slice(1);
            return c[e]() + l;
          };
        }
        function dn(e) {
          return function (i) {
            return oa(tl(el(i).replace(Pn, "")), e, "");
          };
        }
        function Mn(e) {
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new e();
              case 1:
                return new e(i[0]);
              case 2:
                return new e(i[0], i[1]);
              case 3:
                return new e(i[0], i[1], i[2]);
              case 4:
                return new e(i[0], i[1], i[2], i[3]);
              case 5:
                return new e(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var o = ln(e.prototype),
              c = e.apply(o, i);
            return ct(c) ? c : o;
          };
        }
        function Og(e, i, o) {
          var c = Mn(e);
          function l() {
            for (var y = arguments.length, I = j(y), x = y, D = pn(l); x--; )
              I[x] = arguments[x];
            var z = y < 3 && I[0] !== D && I[y - 1] !== D ? [] : mi(I, D);
            if (((y -= z.length), y < o))
              return ch(e, i, to, l.placeholder, r, I, z, r, r, o - y);
            var k = this && this !== Ae && this instanceof l ? c : e;
            return Lt(k, this, I);
          }
          return l;
        }
        function nh(e) {
          return function (i, o, c) {
            var l = Ge(i);
            if (!ur(i)) {
              var y = he(o, 3);
              (i = Mt(i)),
                (o = function (x) {
                  return y(l[x], x, l);
                });
            }
            var I = e(i, o, c);
            return I > -1 ? l[y ? i[I] : I] : r;
          };
        }
        function sh(e) {
          return ii(function (i) {
            var o = i.length,
              c = o,
              l = Or.prototype.thru;
            for (e && i.reverse(); c--; ) {
              var y = i[c];
              if (typeof y != "function") throw new Pr(d);
              if (l && !I && so(y) == "wrapper") var I = new Or([], !0);
            }
            for (c = I ? c : o; ++c < o; ) {
              y = i[c];
              var x = so(y),
                D = x == "wrapper" ? qa(y) : r;
              D &&
              Ba(D[0]) &&
              D[1] == (R | m | v | P) &&
              !D[4].length &&
              D[9] == 1
                ? (I = I[so(D[0])].apply(I, D[3]))
                : (I = y.length == 1 && Ba(y) ? I[x]() : I.thru(y));
            }
            return function () {
              var z = arguments,
                k = z[0];
              if (I && z.length == 1 && be(k)) return I.plant(k).value();
              for (var K = 0, ee = o ? i[K].apply(this, z) : k; ++K < o; )
                ee = i[K].call(this, ee);
              return ee;
            };
          });
        }
        function to(e, i, o, c, l, y, I, x, D, z) {
          var k = i & R,
            K = i & oe,
            ee = i & pe,
            ce = i & (m | b),
            le = i & X,
            Ee = ee ? r : Mn(e);
          function fe() {
            for (var xe = arguments.length, Te = j(xe), wr = xe; wr--; )
              Te[wr] = arguments[wr];
            if (ce)
              var er = pn(fe),
                _r = Md(Te, er);
            if (
              (c && (Te = Zu(Te, c, l, ce)),
              y && (Te = eh(Te, y, I, ce)),
              (xe -= _r),
              ce && xe < z)
            ) {
              var _t = mi(Te, er);
              return ch(e, i, to, fe.placeholder, o, Te, _t, x, D, z - xe);
            }
            var Lr = K ? o : this,
              ai = ee ? Lr[e] : e;
            return (
              (xe = Te.length),
              x ? (Te = Wg(Te, x)) : le && xe > 1 && Te.reverse(),
              k && D < xe && (Te.length = D),
              this && this !== Ae && this instanceof fe && (ai = Ee || Mn(ai)),
              ai.apply(Lr, Te)
            );
          }
          return fe;
        }
        function oh(e, i) {
          return function (o, c) {
            return tg(o, e, i(c), {});
          };
        }
        function ro(e, i) {
          return function (o, c) {
            var l;
            if (o === r && c === r) return i;
            if ((o !== r && (l = o), c !== r)) {
              if (l === r) return c;
              typeof o == "string" || typeof c == "string"
                ? ((o = vr(o)), (c = vr(c)))
                : ((o = Vu(o)), (c = Vu(c))),
                (l = e(o, c));
            }
            return l;
          };
        }
        function Ua(e) {
          return ii(function (i) {
            return (
              (i = nt(i, mr(he()))),
              Se(function (o) {
                var c = this;
                return e(i, function (l) {
                  return Lt(l, c, o);
                });
              })
            );
          });
        }
        function io(e, i) {
          i = i === r ? " " : vr(i);
          var o = i.length;
          if (o < 2) return o ? Ta(i, e) : i;
          var c = Ta(i, Hs(e / on(i)));
          return sn(i) ? Ei(Fr(c), 0, e).join("") : c.slice(0, e);
        }
        function Ag(e, i, o, c) {
          var l = i & oe,
            y = Mn(e);
          function I() {
            for (
              var x = -1,
                D = arguments.length,
                z = -1,
                k = c.length,
                K = j(k + D),
                ee = this && this !== Ae && this instanceof I ? y : e;
              ++z < k;

            )
              K[z] = c[z];
            for (; D--; ) K[z++] = arguments[++x];
            return Lt(ee, l ? o : this, K);
          }
          return I;
        }
        function ah(e) {
          return function (i, o, c) {
            return (
              c && typeof c != "number" && Zt(i, o, c) && (o = c = r),
              (i = oi(i)),
              o === r ? ((o = i), (i = 0)) : (o = oi(o)),
              (c = c === r ? (i < o ? 1 : -1) : oi(c)),
              dg(i, o, c, e)
            );
          };
        }
        function no(e) {
          return function (i, o) {
            return (
              (typeof i == "string" && typeof o == "string") ||
                ((i = Nr(i)), (o = Nr(o))),
              e(i, o)
            );
          };
        }
        function ch(e, i, o, c, l, y, I, x, D, z) {
          var k = i & m,
            K = k ? I : r,
            ee = k ? r : I,
            ce = k ? y : r,
            le = k ? r : y;
          (i |= k ? v : g), (i &= ~(k ? g : v)), i & f || (i &= ~(oe | pe));
          var Ee = [e, i, l, ce, K, le, ee, x, D, z],
            fe = o.apply(r, Ee);
          return Ba(e) && wh(fe, Ee), (fe.placeholder = c), _h(fe, e, i);
        }
        function ja(e) {
          var i = Ft[e];
          return function (o, c) {
            if (
              ((o = Nr(o)), (c = c == null ? 0 : Kt(we(c), 292)), c && _u(o))
            ) {
              var l = (je(o) + "e").split("e"),
                y = i(l[0] + "e" + (+l[1] + c));
              return (
                (l = (je(y) + "e").split("e")), +(l[0] + "e" + (+l[1] - c))
              );
            }
            return i(o);
          };
        }
        var Tg =
          un && 1 / $s(new un([, -0]))[1] == de
            ? function (e) {
                return new un(e);
              }
            : sc;
        function uh(e) {
          return function (i) {
            var o = Wt(i);
            return o == _e ? da(i) : o == Ue ? Kd(i) : Ld(i, e(i));
          };
        }
        function ri(e, i, o, c, l, y, I, x) {
          var D = i & pe;
          if (!D && typeof e != "function") throw new Pr(d);
          var z = c ? c.length : 0;
          if (
            (z || ((i &= ~(v | g)), (c = l = r)),
            (I = I === r ? I : Ut(we(I), 0)),
            (x = x === r ? x : we(x)),
            (z -= l ? l.length : 0),
            i & g)
          ) {
            var k = c,
              K = l;
            c = l = r;
          }
          var ee = D ? r : qa(e),
            ce = [e, i, o, c, l, k, K, y, I, x];
          if (
            (ee && Bg(ce, ee),
            (e = ce[0]),
            (i = ce[1]),
            (o = ce[2]),
            (c = ce[3]),
            (l = ce[4]),
            (x = ce[9] = ce[9] === r ? (D ? 0 : e.length) : Ut(ce[9] - z, 0)),
            !x && i & (m | b) && (i &= ~(m | b)),
            !i || i == oe)
          )
            var le = Pg(e, i, o);
          else
            i == m || i == b
              ? (le = Og(e, i, x))
              : (i == v || i == (oe | v)) && !l.length
              ? (le = Ag(e, i, o, c))
              : (le = to.apply(r, ce));
          var Ee = ee ? Hu : wh;
          return _h(Ee(le, ce), e, i);
        }
        function hh(e, i, o, c) {
          return e === r || (jr(e, cn[o]) && !Me.call(c, o)) ? i : e;
        }
        function lh(e, i, o, c, l, y) {
          return (
            ct(e) && ct(i) && (y.set(i, e), Ys(e, i, r, lh, y), y.delete(i)), e
          );
        }
        function Rg(e) {
          return kn(e) ? r : e;
        }
        function fh(e, i, o, c, l, y) {
          var I = o & H,
            x = e.length,
            D = i.length;
          if (x != D && !(I && D > x)) return !1;
          var z = y.get(e),
            k = y.get(i);
          if (z && k) return z == i && k == e;
          var K = -1,
            ee = !0,
            ce = o & Q ? new ji() : r;
          for (y.set(e, i), y.set(i, e); ++K < x; ) {
            var le = e[K],
              Ee = i[K];
            if (c) var fe = I ? c(Ee, le, K, i, e, y) : c(le, Ee, K, e, i, y);
            if (fe !== r) {
              if (fe) continue;
              ee = !1;
              break;
            }
            if (ce) {
              if (
                !aa(i, function (xe, Te) {
                  if (!An(ce, Te) && (le === xe || l(le, xe, o, c, y)))
                    return ce.push(Te);
                })
              ) {
                ee = !1;
                break;
              }
            } else if (!(le === Ee || l(le, Ee, o, c, y))) {
              ee = !1;
              break;
            }
          }
          return y.delete(e), y.delete(i), ee;
        }
        function Ng(e, i, o, c, l, y, I) {
          switch (o) {
            case Be:
              if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
                return !1;
              (e = e.buffer), (i = i.buffer);
            case $e:
              return !(
                e.byteLength != i.byteLength || !y(new Ms(e), new Ms(i))
              );
            case L:
            case F:
            case Ce:
              return jr(+e, +i);
            case O:
              return e.name == i.name && e.message == i.message;
            case st:
            case Ye:
              return e == i + "";
            case _e:
              var x = da;
            case Ue:
              var D = c & H;
              if ((x || (x = $s), e.size != i.size && !D)) return !1;
              var z = I.get(e);
              if (z) return z == i;
              (c |= Q), I.set(e, i);
              var k = fh(x(e), x(i), c, l, y, I);
              return I.delete(e), k;
            case Xe:
              if ($n) return $n.call(e) == $n.call(i);
          }
          return !1;
        }
        function Cg(e, i, o, c, l, y) {
          var I = o & H,
            x = La(e),
            D = x.length,
            z = La(i),
            k = z.length;
          if (D != k && !I) return !1;
          for (var K = D; K--; ) {
            var ee = x[K];
            if (!(I ? ee in i : Me.call(i, ee))) return !1;
          }
          var ce = y.get(e),
            le = y.get(i);
          if (ce && le) return ce == i && le == e;
          var Ee = !0;
          y.set(e, i), y.set(i, e);
          for (var fe = I; ++K < D; ) {
            ee = x[K];
            var xe = e[ee],
              Te = i[ee];
            if (c) var wr = I ? c(Te, xe, ee, i, e, y) : c(xe, Te, ee, e, i, y);
            if (!(wr === r ? xe === Te || l(xe, Te, o, c, y) : wr)) {
              Ee = !1;
              break;
            }
            fe || (fe = ee == "constructor");
          }
          if (Ee && !fe) {
            var er = e.constructor,
              _r = i.constructor;
            er != _r &&
              "constructor" in e &&
              "constructor" in i &&
              !(
                typeof er == "function" &&
                er instanceof er &&
                typeof _r == "function" &&
                _r instanceof _r
              ) &&
              (Ee = !1);
          }
          return y.delete(e), y.delete(i), Ee;
        }
        function ii(e) {
          return Ka(vh(e, r, Oh), e + "");
        }
        function La(e) {
          return Cu(e, Mt, ka);
        }
        function Ma(e) {
          return Cu(e, hr, dh);
        }
        var qa = Vs
          ? function (e) {
              return Vs.get(e);
            }
          : sc;
        function so(e) {
          for (
            var i = e.name + "", o = hn[i], c = Me.call(hn, i) ? o.length : 0;
            c--;

          ) {
            var l = o[c],
              y = l.func;
            if (y == null || y == e) return l.name;
          }
          return i;
        }
        function pn(e) {
          var i = Me.call(p, "placeholder") ? p : e;
          return i.placeholder;
        }
        function he() {
          var e = p.iteratee || ic;
          return (
            (e = e === ic ? Fu : e),
            arguments.length ? e(arguments[0], arguments[1]) : e
          );
        }
        function oo(e, i) {
          var o = e.__data__;
          return qg(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map;
        }
        function za(e) {
          for (var i = Mt(e), o = i.length; o--; ) {
            var c = i[o],
              l = e[c];
            i[o] = [c, l, yh(l)];
          }
          return i;
        }
        function qi(e, i) {
          var o = Hd(e, i);
          return Du(o) ? o : r;
        }
        function $g(e) {
          var i = Me.call(e, Fi),
            o = e[Fi];
          try {
            e[Fi] = r;
            var c = !0;
          } catch {}
          var l = js.call(e);
          return c && (i ? (e[Fi] = o) : delete e[Fi]), l;
        }
        var ka = ga
            ? function (e) {
                return e == null
                  ? []
                  : ((e = Ge(e)),
                    gi(ga(e), function (i) {
                      return bu.call(e, i);
                    }));
              }
            : oc,
          dh = ga
            ? function (e) {
                for (var i = []; e; ) yi(i, ka(e)), (e = qs(e));
                return i;
              }
            : oc,
          Wt = Xt;
        ((ya && Wt(new ya(new ArrayBuffer(1))) != Be) ||
          (Rn && Wt(new Rn()) != _e) ||
          (ma && Wt(ma.resolve()) != St) ||
          (un && Wt(new un()) != Ue) ||
          (Nn && Wt(new Nn()) != ze)) &&
          (Wt = function (e) {
            var i = Xt(e),
              o = i == Pe ? e.constructor : r,
              c = o ? zi(o) : "";
            if (c)
              switch (c) {
                case gp:
                  return Be;
                case yp:
                  return _e;
                case mp:
                  return St;
                case vp:
                  return Ue;
                case bp:
                  return ze;
              }
            return i;
          });
        function Dg(e, i, o) {
          for (var c = -1, l = o.length; ++c < l; ) {
            var y = o[c],
              I = y.size;
            switch (y.type) {
              case "drop":
                e += I;
                break;
              case "dropRight":
                i -= I;
                break;
              case "take":
                i = Kt(i, e + I);
                break;
              case "takeRight":
                e = Ut(e, i - I);
                break;
            }
          }
          return { start: e, end: i };
        }
        function Fg(e) {
          var i = e.match(Qe);
          return i ? i[1].split(Tt) : [];
        }
        function ph(e, i, o) {
          i = _i(i, e);
          for (var c = -1, l = i.length, y = !1; ++c < l; ) {
            var I = Wr(i[c]);
            if (!(y = e != null && o(e, I))) break;
            e = e[I];
          }
          return y || ++c != l
            ? y
            : ((l = e == null ? 0 : e.length),
              !!l && po(l) && ni(I, l) && (be(e) || ki(e)));
        }
        function Ug(e) {
          var i = e.length,
            o = new e.constructor(i);
          return (
            i &&
              typeof e[0] == "string" &&
              Me.call(e, "index") &&
              ((o.index = e.index), (o.input = e.input)),
            o
          );
        }
        function gh(e) {
          return typeof e.constructor == "function" && !qn(e) ? ln(qs(e)) : {};
        }
        function jg(e, i, o) {
          var c = e.constructor;
          switch (i) {
            case $e:
              return Fa(e);
            case L:
            case F:
              return new c(+e);
            case Be:
              return wg(e, o);
            case ut:
            case Le:
            case xt:
            case Dt:
            case kt:
            case Ht:
            case jt:
            case Jt:
            case or:
              return Yu(e, o);
            case _e:
              return new c();
            case Ce:
            case Ye:
              return new c(e);
            case st:
              return _g(e);
            case Ue:
              return new c();
            case Xe:
              return Eg(e);
          }
        }
        function Lg(e, i) {
          var o = i.length;
          if (!o) return e;
          var c = o - 1;
          return (
            (i[c] = (o > 1 ? "& " : "") + i[c]),
            (i = i.join(o > 2 ? ", " : " ")),
            e.replace(
              gt,
              `{
/* [wrapped with ` +
                i +
                `] */
`
            )
          );
        }
        function Mg(e) {
          return be(e) || ki(e) || !!(wu && e && e[wu]);
        }
        function ni(e, i) {
          var o = typeof e;
          return (
            (i = i ?? Y),
            !!i &&
              (o == "number" || (o != "symbol" && Vo.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < i
          );
        }
        function Zt(e, i, o) {
          if (!ct(o)) return !1;
          var c = typeof i;
          return (
            c == "number" ? ur(o) && ni(i, o.length) : c == "string" && i in o
          )
            ? jr(o[i], e)
            : !1;
        }
        function Ha(e, i) {
          if (be(e)) return !1;
          var o = typeof e;
          return o == "number" ||
            o == "symbol" ||
            o == "boolean" ||
            e == null ||
            br(e)
            ? !0
            : Pt.test(e) || !it.test(e) || (i != null && e in Ge(i));
        }
        function qg(e) {
          var i = typeof e;
          return i == "string" ||
            i == "number" ||
            i == "symbol" ||
            i == "boolean"
            ? e !== "__proto__"
            : e === null;
        }
        function Ba(e) {
          var i = so(e),
            o = p[i];
          if (typeof o != "function" || !(i in Oe.prototype)) return !1;
          if (e === o) return !0;
          var c = qa(o);
          return !!c && e === c[0];
        }
        function zg(e) {
          return !!yu && yu in e;
        }
        var kg = Fs ? si : ac;
        function qn(e) {
          var i = e && e.constructor,
            o = (typeof i == "function" && i.prototype) || cn;
          return e === o;
        }
        function yh(e) {
          return e === e && !ct(e);
        }
        function mh(e, i) {
          return function (o) {
            return o == null ? !1 : o[e] === i && (i !== r || e in Ge(o));
          };
        }
        function Hg(e) {
          var i = lo(e, function (c) {
              return o.size === $ && o.clear(), c;
            }),
            o = i.cache;
          return i;
        }
        function Bg(e, i) {
          var o = e[1],
            c = i[1],
            l = o | c,
            y = l < (oe | pe | R),
            I =
              (c == R && o == m) ||
              (c == R && o == P && e[7].length <= i[8]) ||
              (c == (R | P) && i[7].length <= i[8] && o == m);
          if (!(y || I)) return e;
          c & oe && ((e[2] = i[2]), (l |= o & oe ? 0 : f));
          var x = i[3];
          if (x) {
            var D = e[3];
            (e[3] = D ? Zu(D, x, i[4]) : x), (e[4] = D ? mi(e[3], A) : i[4]);
          }
          return (
            (x = i[5]),
            x &&
              ((D = e[5]),
              (e[5] = D ? eh(D, x, i[6]) : x),
              (e[6] = D ? mi(e[5], A) : i[6])),
            (x = i[7]),
            x && (e[7] = x),
            c & R && (e[8] = e[8] == null ? i[8] : Kt(e[8], i[8])),
            e[9] == null && (e[9] = i[9]),
            (e[0] = i[0]),
            (e[1] = l),
            e
          );
        }
        function Vg(e) {
          var i = [];
          if (e != null) for (var o in Ge(e)) i.push(o);
          return i;
        }
        function Kg(e) {
          return js.call(e);
        }
        function vh(e, i, o) {
          return (
            (i = Ut(i === r ? e.length - 1 : i, 0)),
            function () {
              for (
                var c = arguments, l = -1, y = Ut(c.length - i, 0), I = j(y);
                ++l < y;

              )
                I[l] = c[i + l];
              l = -1;
              for (var x = j(i + 1); ++l < i; ) x[l] = c[l];
              return (x[i] = o(I)), Lt(e, this, x);
            }
          );
        }
        function bh(e, i) {
          return i.length < 2 ? e : Mi(e, Tr(i, 0, -1));
        }
        function Wg(e, i) {
          for (var o = e.length, c = Kt(i.length, o), l = cr(e); c--; ) {
            var y = i[c];
            e[c] = ni(y, o) ? l[y] : r;
          }
          return e;
        }
        function Va(e, i) {
          if (
            !(i === "constructor" && typeof e[i] == "function") &&
            i != "__proto__"
          )
            return e[i];
        }
        var wh = Eh(Hu),
          zn =
            cp ||
            function (e, i) {
              return Ae.setTimeout(e, i);
            },
          Ka = Eh(yg);
        function _h(e, i, o) {
          var c = i + "";
          return Ka(e, Lg(c, Gg(Fg(c), o)));
        }
        function Eh(e) {
          var i = 0,
            o = 0;
          return function () {
            var c = fp(),
              l = qe - (c - o);
            if (((o = c), l > 0)) {
              if (++i >= Ne) return arguments[0];
            } else i = 0;
            return e.apply(r, arguments);
          };
        }
        function ao(e, i) {
          var o = -1,
            c = e.length,
            l = c - 1;
          for (i = i === r ? c : i; ++o < i; ) {
            var y = Aa(o, l),
              I = e[y];
            (e[y] = e[o]), (e[o] = I);
          }
          return (e.length = i), e;
        }
        var Ih = Hg(function (e) {
          var i = [];
          return (
            e.charCodeAt(0) === 46 && i.push(""),
            e.replace(Ot, function (o, c, l, y) {
              i.push(l ? y.replace(Mo, "$1") : c || o);
            }),
            i
          );
        });
        function Wr(e) {
          if (typeof e == "string" || br(e)) return e;
          var i = e + "";
          return i == "0" && 1 / e == -de ? "-0" : i;
        }
        function zi(e) {
          if (e != null) {
            try {
              return Us.call(e);
            } catch {}
            try {
              return e + "";
            } catch {}
          }
          return "";
        }
        function Gg(e, i) {
          return (
            xr(zr, function (o) {
              var c = "_." + o[0];
              i & o[1] && !Ns(e, c) && e.push(c);
            }),
            e.sort()
          );
        }
        function Sh(e) {
          if (e instanceof Oe) return e.clone();
          var i = new Or(e.__wrapped__, e.__chain__);
          return (
            (i.__actions__ = cr(e.__actions__)),
            (i.__index__ = e.__index__),
            (i.__values__ = e.__values__),
            i
          );
        }
        function Jg(e, i, o) {
          (o ? Zt(e, i, o) : i === r) ? (i = 1) : (i = Ut(we(i), 0));
          var c = e == null ? 0 : e.length;
          if (!c || i < 1) return [];
          for (var l = 0, y = 0, I = j(Hs(c / i)); l < c; )
            I[y++] = Tr(e, l, (l += i));
          return I;
        }
        function Qg(e) {
          for (
            var i = -1, o = e == null ? 0 : e.length, c = 0, l = [];
            ++i < o;

          ) {
            var y = e[i];
            y && (l[c++] = y);
          }
          return l;
        }
        function Yg() {
          var e = arguments.length;
          if (!e) return [];
          for (var i = j(e - 1), o = arguments[0], c = e; c--; )
            i[c - 1] = arguments[c];
          return yi(be(o) ? cr(o) : [o], Bt(i, 1));
        }
        var Xg = Se(function (e, i) {
            return wt(e) ? Fn(e, Bt(i, 1, wt, !0)) : [];
          }),
          Zg = Se(function (e, i) {
            var o = Rr(i);
            return (
              wt(o) && (o = r), wt(e) ? Fn(e, Bt(i, 1, wt, !0), he(o, 2)) : []
            );
          }),
          ey = Se(function (e, i) {
            var o = Rr(i);
            return wt(o) && (o = r), wt(e) ? Fn(e, Bt(i, 1, wt, !0), r, o) : [];
          });
        function ty(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = o || i === r ? 1 : we(i)), Tr(e, i < 0 ? 0 : i, c))
            : [];
        }
        function ry(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = o || i === r ? 1 : we(i)),
              (i = c - i),
              Tr(e, 0, i < 0 ? 0 : i))
            : [];
        }
        function iy(e, i) {
          return e && e.length ? Zs(e, he(i, 3), !0, !0) : [];
        }
        function ny(e, i) {
          return e && e.length ? Zs(e, he(i, 3), !0) : [];
        }
        function sy(e, i, o, c) {
          var l = e == null ? 0 : e.length;
          return l
            ? (o && typeof o != "number" && Zt(e, i, o) && ((o = 0), (c = l)),
              Yp(e, i, o, c))
            : [];
        }
        function xh(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = o == null ? 0 : we(o);
          return l < 0 && (l = Ut(c + l, 0)), Cs(e, he(i, 3), l);
        }
        function Ph(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c - 1;
          return (
            o !== r && ((l = we(o)), (l = o < 0 ? Ut(c + l, 0) : Kt(l, c - 1))),
            Cs(e, he(i, 3), l, !0)
          );
        }
        function Oh(e) {
          var i = e == null ? 0 : e.length;
          return i ? Bt(e, 1) : [];
        }
        function oy(e) {
          var i = e == null ? 0 : e.length;
          return i ? Bt(e, de) : [];
        }
        function ay(e, i) {
          var o = e == null ? 0 : e.length;
          return o ? ((i = i === r ? 1 : we(i)), Bt(e, i)) : [];
        }
        function cy(e) {
          for (var i = -1, o = e == null ? 0 : e.length, c = {}; ++i < o; ) {
            var l = e[i];
            c[l[0]] = l[1];
          }
          return c;
        }
        function Ah(e) {
          return e && e.length ? e[0] : r;
        }
        function uy(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = o == null ? 0 : we(o);
          return l < 0 && (l = Ut(c + l, 0)), nn(e, i, l);
        }
        function hy(e) {
          var i = e == null ? 0 : e.length;
          return i ? Tr(e, 0, -1) : [];
        }
        var ly = Se(function (e) {
            var i = nt(e, $a);
            return i.length && i[0] === e[0] ? Ia(i) : [];
          }),
          fy = Se(function (e) {
            var i = Rr(e),
              o = nt(e, $a);
            return (
              i === Rr(o) ? (i = r) : o.pop(),
              o.length && o[0] === e[0] ? Ia(o, he(i, 2)) : []
            );
          }),
          dy = Se(function (e) {
            var i = Rr(e),
              o = nt(e, $a);
            return (
              (i = typeof i == "function" ? i : r),
              i && o.pop(),
              o.length && o[0] === e[0] ? Ia(o, r, i) : []
            );
          });
        function py(e, i) {
          return e == null ? "" : hp.call(e, i);
        }
        function Rr(e) {
          var i = e == null ? 0 : e.length;
          return i ? e[i - 1] : r;
        }
        function gy(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c;
          return (
            o !== r && ((l = we(o)), (l = l < 0 ? Ut(c + l, 0) : Kt(l, c - 1))),
            i === i ? Gd(e, i, l) : Cs(e, cu, l, !0)
          );
        }
        function yy(e, i) {
          return e && e.length ? Mu(e, we(i)) : r;
        }
        var my = Se(Th);
        function Th(e, i) {
          return e && e.length && i && i.length ? Oa(e, i) : e;
        }
        function vy(e, i, o) {
          return e && e.length && i && i.length ? Oa(e, i, he(o, 2)) : e;
        }
        function by(e, i, o) {
          return e && e.length && i && i.length ? Oa(e, i, r, o) : e;
        }
        var wy = ii(function (e, i) {
          var o = e == null ? 0 : e.length,
            c = ba(e, i);
          return (
            ku(
              e,
              nt(i, function (l) {
                return ni(l, o) ? +l : l;
              }).sort(Xu)
            ),
            c
          );
        });
        function _y(e, i) {
          var o = [];
          if (!(e && e.length)) return o;
          var c = -1,
            l = [],
            y = e.length;
          for (i = he(i, 3); ++c < y; ) {
            var I = e[c];
            i(I, c, e) && (o.push(I), l.push(c));
          }
          return ku(e, l), o;
        }
        function Wa(e) {
          return e == null ? e : pp.call(e);
        }
        function Ey(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? (o && typeof o != "number" && Zt(e, i, o)
                ? ((i = 0), (o = c))
                : ((i = i == null ? 0 : we(i)), (o = o === r ? c : we(o))),
              Tr(e, i, o))
            : [];
        }
        function Iy(e, i) {
          return Xs(e, i);
        }
        function Sy(e, i, o) {
          return Ra(e, i, he(o, 2));
        }
        function xy(e, i) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var c = Xs(e, i);
            if (c < o && jr(e[c], i)) return c;
          }
          return -1;
        }
        function Py(e, i) {
          return Xs(e, i, !0);
        }
        function Oy(e, i, o) {
          return Ra(e, i, he(o, 2), !0);
        }
        function Ay(e, i) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var c = Xs(e, i, !0) - 1;
            if (jr(e[c], i)) return c;
          }
          return -1;
        }
        function Ty(e) {
          return e && e.length ? Bu(e) : [];
        }
        function Ry(e, i) {
          return e && e.length ? Bu(e, he(i, 2)) : [];
        }
        function Ny(e) {
          var i = e == null ? 0 : e.length;
          return i ? Tr(e, 1, i) : [];
        }
        function Cy(e, i, o) {
          return e && e.length
            ? ((i = o || i === r ? 1 : we(i)), Tr(e, 0, i < 0 ? 0 : i))
            : [];
        }
        function $y(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = o || i === r ? 1 : we(i)),
              (i = c - i),
              Tr(e, i < 0 ? 0 : i, c))
            : [];
        }
        function Dy(e, i) {
          return e && e.length ? Zs(e, he(i, 3), !1, !0) : [];
        }
        function Fy(e, i) {
          return e && e.length ? Zs(e, he(i, 3)) : [];
        }
        var Uy = Se(function (e) {
            return wi(Bt(e, 1, wt, !0));
          }),
          jy = Se(function (e) {
            var i = Rr(e);
            return wt(i) && (i = r), wi(Bt(e, 1, wt, !0), he(i, 2));
          }),
          Ly = Se(function (e) {
            var i = Rr(e);
            return (
              (i = typeof i == "function" ? i : r), wi(Bt(e, 1, wt, !0), r, i)
            );
          });
        function My(e) {
          return e && e.length ? wi(e) : [];
        }
        function qy(e, i) {
          return e && e.length ? wi(e, he(i, 2)) : [];
        }
        function zy(e, i) {
          return (
            (i = typeof i == "function" ? i : r),
            e && e.length ? wi(e, r, i) : []
          );
        }
        function Ga(e) {
          if (!(e && e.length)) return [];
          var i = 0;
          return (
            (e = gi(e, function (o) {
              if (wt(o)) return (i = Ut(o.length, i)), !0;
            })),
            la(i, function (o) {
              return nt(e, ca(o));
            })
          );
        }
        function Rh(e, i) {
          if (!(e && e.length)) return [];
          var o = Ga(e);
          return i == null
            ? o
            : nt(o, function (c) {
                return Lt(i, r, c);
              });
        }
        var ky = Se(function (e, i) {
            return wt(e) ? Fn(e, i) : [];
          }),
          Hy = Se(function (e) {
            return Ca(gi(e, wt));
          }),
          By = Se(function (e) {
            var i = Rr(e);
            return wt(i) && (i = r), Ca(gi(e, wt), he(i, 2));
          }),
          Vy = Se(function (e) {
            var i = Rr(e);
            return (i = typeof i == "function" ? i : r), Ca(gi(e, wt), r, i);
          }),
          Ky = Se(Ga);
        function Wy(e, i) {
          return Gu(e || [], i || [], Dn);
        }
        function Gy(e, i) {
          return Gu(e || [], i || [], Ln);
        }
        var Jy = Se(function (e) {
          var i = e.length,
            o = i > 1 ? e[i - 1] : r;
          return (o = typeof o == "function" ? (e.pop(), o) : r), Rh(e, o);
        });
        function Nh(e) {
          var i = p(e);
          return (i.__chain__ = !0), i;
        }
        function Qy(e, i) {
          return i(e), e;
        }
        function co(e, i) {
          return i(e);
        }
        var Yy = ii(function (e) {
          var i = e.length,
            o = i ? e[0] : 0,
            c = this.__wrapped__,
            l = function (y) {
              return ba(y, e);
            };
          return i > 1 ||
            this.__actions__.length ||
            !(c instanceof Oe) ||
            !ni(o)
            ? this.thru(l)
            : ((c = c.slice(o, +o + (i ? 1 : 0))),
              c.__actions__.push({ func: co, args: [l], thisArg: r }),
              new Or(c, this.__chain__).thru(function (y) {
                return i && !y.length && y.push(r), y;
              }));
        });
        function Xy() {
          return Nh(this);
        }
        function Zy() {
          return new Or(this.value(), this.__chain__);
        }
        function e0() {
          this.__values__ === r && (this.__values__ = Vh(this.value()));
          var e = this.__index__ >= this.__values__.length,
            i = e ? r : this.__values__[this.__index__++];
          return { done: e, value: i };
        }
        function t0() {
          return this;
        }
        function r0(e) {
          for (var i, o = this; o instanceof Ws; ) {
            var c = Sh(o);
            (c.__index__ = 0),
              (c.__values__ = r),
              i ? (l.__wrapped__ = c) : (i = c);
            var l = c;
            o = o.__wrapped__;
          }
          return (l.__wrapped__ = e), i;
        }
        function i0() {
          var e = this.__wrapped__;
          if (e instanceof Oe) {
            var i = e;
            return (
              this.__actions__.length && (i = new Oe(this)),
              (i = i.reverse()),
              i.__actions__.push({ func: co, args: [Wa], thisArg: r }),
              new Or(i, this.__chain__)
            );
          }
          return this.thru(Wa);
        }
        function n0() {
          return Wu(this.__wrapped__, this.__actions__);
        }
        var s0 = eo(function (e, i, o) {
          Me.call(e, o) ? ++e[o] : ti(e, o, 1);
        });
        function o0(e, i, o) {
          var c = be(e) ? ou : Qp;
          return o && Zt(e, i, o) && (i = r), c(e, he(i, 3));
        }
        function a0(e, i) {
          var o = be(e) ? gi : Ru;
          return o(e, he(i, 3));
        }
        var c0 = nh(xh),
          u0 = nh(Ph);
        function h0(e, i) {
          return Bt(uo(e, i), 1);
        }
        function l0(e, i) {
          return Bt(uo(e, i), de);
        }
        function f0(e, i, o) {
          return (o = o === r ? 1 : we(o)), Bt(uo(e, i), o);
        }
        function Ch(e, i) {
          var o = be(e) ? xr : bi;
          return o(e, he(i, 3));
        }
        function $h(e, i) {
          var o = be(e) ? Nd : Tu;
          return o(e, he(i, 3));
        }
        var d0 = eo(function (e, i, o) {
          Me.call(e, o) ? e[o].push(i) : ti(e, o, [i]);
        });
        function p0(e, i, o, c) {
          (e = ur(e) ? e : yn(e)), (o = o && !c ? we(o) : 0);
          var l = e.length;
          return (
            o < 0 && (o = Ut(l + o, 0)),
            go(e) ? o <= l && e.indexOf(i, o) > -1 : !!l && nn(e, i, o) > -1
          );
        }
        var g0 = Se(function (e, i, o) {
            var c = -1,
              l = typeof i == "function",
              y = ur(e) ? j(e.length) : [];
            return (
              bi(e, function (I) {
                y[++c] = l ? Lt(i, I, o) : Un(I, i, o);
              }),
              y
            );
          }),
          y0 = eo(function (e, i, o) {
            ti(e, o, i);
          });
        function uo(e, i) {
          var o = be(e) ? nt : Uu;
          return o(e, he(i, 3));
        }
        function m0(e, i, o, c) {
          return e == null
            ? []
            : (be(i) || (i = i == null ? [] : [i]),
              (o = c ? r : o),
              be(o) || (o = o == null ? [] : [o]),
              qu(e, i, o));
        }
        var v0 = eo(
          function (e, i, o) {
            e[o ? 0 : 1].push(i);
          },
          function () {
            return [[], []];
          }
        );
        function b0(e, i, o) {
          var c = be(e) ? oa : hu,
            l = arguments.length < 3;
          return c(e, he(i, 4), o, l, bi);
        }
        function w0(e, i, o) {
          var c = be(e) ? Cd : hu,
            l = arguments.length < 3;
          return c(e, he(i, 4), o, l, Tu);
        }
        function _0(e, i) {
          var o = be(e) ? gi : Ru;
          return o(e, fo(he(i, 3)));
        }
        function E0(e) {
          var i = be(e) ? xu : pg;
          return i(e);
        }
        function I0(e, i, o) {
          (o ? Zt(e, i, o) : i === r) ? (i = 1) : (i = we(i));
          var c = be(e) ? Vp : gg;
          return c(e, i);
        }
        function S0(e) {
          var i = be(e) ? Kp : mg;
          return i(e);
        }
        function x0(e) {
          if (e == null) return 0;
          if (ur(e)) return go(e) ? on(e) : e.length;
          var i = Wt(e);
          return i == _e || i == Ue ? e.size : xa(e).length;
        }
        function P0(e, i, o) {
          var c = be(e) ? aa : vg;
          return o && Zt(e, i, o) && (i = r), c(e, he(i, 3));
        }
        var O0 = Se(function (e, i) {
            if (e == null) return [];
            var o = i.length;
            return (
              o > 1 && Zt(e, i[0], i[1])
                ? (i = [])
                : o > 2 && Zt(i[0], i[1], i[2]) && (i = [i[0]]),
              qu(e, Bt(i, 1), [])
            );
          }),
          ho =
            ap ||
            function () {
              return Ae.Date.now();
            };
        function A0(e, i) {
          if (typeof i != "function") throw new Pr(d);
          return (
            (e = we(e)),
            function () {
              if (--e < 1) return i.apply(this, arguments);
            }
          );
        }
        function Dh(e, i, o) {
          return (
            (i = o ? r : i),
            (i = e && i == null ? e.length : i),
            ri(e, R, r, r, r, r, i)
          );
        }
        function Fh(e, i) {
          var o;
          if (typeof i != "function") throw new Pr(d);
          return (
            (e = we(e)),
            function () {
              return (
                --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o
              );
            }
          );
        }
        var Ja = Se(function (e, i, o) {
            var c = oe;
            if (o.length) {
              var l = mi(o, pn(Ja));
              c |= v;
            }
            return ri(e, c, i, o, l);
          }),
          Uh = Se(function (e, i, o) {
            var c = oe | pe;
            if (o.length) {
              var l = mi(o, pn(Uh));
              c |= v;
            }
            return ri(i, c, e, o, l);
          });
        function jh(e, i, o) {
          i = o ? r : i;
          var c = ri(e, m, r, r, r, r, r, i);
          return (c.placeholder = jh.placeholder), c;
        }
        function Lh(e, i, o) {
          i = o ? r : i;
          var c = ri(e, b, r, r, r, r, r, i);
          return (c.placeholder = Lh.placeholder), c;
        }
        function Mh(e, i, o) {
          var c,
            l,
            y,
            I,
            x,
            D,
            z = 0,
            k = !1,
            K = !1,
            ee = !0;
          if (typeof e != "function") throw new Pr(d);
          (i = Nr(i) || 0),
            ct(o) &&
              ((k = !!o.leading),
              (K = "maxWait" in o),
              (y = K ? Ut(Nr(o.maxWait) || 0, i) : y),
              (ee = "trailing" in o ? !!o.trailing : ee));
          function ce(_t) {
            var Lr = c,
              ai = l;
            return (c = l = r), (z = _t), (I = e.apply(ai, Lr)), I;
          }
          function le(_t) {
            return (z = _t), (x = zn(xe, i)), k ? ce(_t) : I;
          }
          function Ee(_t) {
            var Lr = _t - D,
              ai = _t - z,
              nl = i - Lr;
            return K ? Kt(nl, y - ai) : nl;
          }
          function fe(_t) {
            var Lr = _t - D,
              ai = _t - z;
            return D === r || Lr >= i || Lr < 0 || (K && ai >= y);
          }
          function xe() {
            var _t = ho();
            if (fe(_t)) return Te(_t);
            x = zn(xe, Ee(_t));
          }
          function Te(_t) {
            return (x = r), ee && c ? ce(_t) : ((c = l = r), I);
          }
          function wr() {
            x !== r && Ju(x), (z = 0), (c = D = l = x = r);
          }
          function er() {
            return x === r ? I : Te(ho());
          }
          function _r() {
            var _t = ho(),
              Lr = fe(_t);
            if (((c = arguments), (l = this), (D = _t), Lr)) {
              if (x === r) return le(D);
              if (K) return Ju(x), (x = zn(xe, i)), ce(D);
            }
            return x === r && (x = zn(xe, i)), I;
          }
          return (_r.cancel = wr), (_r.flush = er), _r;
        }
        var T0 = Se(function (e, i) {
            return Au(e, 1, i);
          }),
          R0 = Se(function (e, i, o) {
            return Au(e, Nr(i) || 0, o);
          });
        function N0(e) {
          return ri(e, X);
        }
        function lo(e, i) {
          if (typeof e != "function" || (i != null && typeof i != "function"))
            throw new Pr(d);
          var o = function () {
            var c = arguments,
              l = i ? i.apply(this, c) : c[0],
              y = o.cache;
            if (y.has(l)) return y.get(l);
            var I = e.apply(this, c);
            return (o.cache = y.set(l, I) || y), I;
          };
          return (o.cache = new (lo.Cache || ei)()), o;
        }
        lo.Cache = ei;
        function fo(e) {
          if (typeof e != "function") throw new Pr(d);
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, i[0]);
              case 2:
                return !e.call(this, i[0], i[1]);
              case 3:
                return !e.call(this, i[0], i[1], i[2]);
            }
            return !e.apply(this, i);
          };
        }
        function C0(e) {
          return Fh(2, e);
        }
        var $0 = bg(function (e, i) {
            i =
              i.length == 1 && be(i[0])
                ? nt(i[0], mr(he()))
                : nt(Bt(i, 1), mr(he()));
            var o = i.length;
            return Se(function (c) {
              for (var l = -1, y = Kt(c.length, o); ++l < y; )
                c[l] = i[l].call(this, c[l]);
              return Lt(e, this, c);
            });
          }),
          Qa = Se(function (e, i) {
            var o = mi(i, pn(Qa));
            return ri(e, v, r, i, o);
          }),
          qh = Se(function (e, i) {
            var o = mi(i, pn(qh));
            return ri(e, g, r, i, o);
          }),
          D0 = ii(function (e, i) {
            return ri(e, P, r, r, r, i);
          });
        function F0(e, i) {
          if (typeof e != "function") throw new Pr(d);
          return (i = i === r ? i : we(i)), Se(e, i);
        }
        function U0(e, i) {
          if (typeof e != "function") throw new Pr(d);
          return (
            (i = i == null ? 0 : Ut(we(i), 0)),
            Se(function (o) {
              var c = o[i],
                l = Ei(o, 0, i);
              return c && yi(l, c), Lt(e, this, l);
            })
          );
        }
        function j0(e, i, o) {
          var c = !0,
            l = !0;
          if (typeof e != "function") throw new Pr(d);
          return (
            ct(o) &&
              ((c = "leading" in o ? !!o.leading : c),
              (l = "trailing" in o ? !!o.trailing : l)),
            Mh(e, i, { leading: c, maxWait: i, trailing: l })
          );
        }
        function L0(e) {
          return Dh(e, 1);
        }
        function M0(e, i) {
          return Qa(Da(i), e);
        }
        function q0() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return be(e) ? e : [e];
        }
        function z0(e) {
          return Ar(e, J);
        }
        function k0(e, i) {
          return (i = typeof i == "function" ? i : r), Ar(e, J, i);
        }
        function H0(e) {
          return Ar(e, U | J);
        }
        function B0(e, i) {
          return (i = typeof i == "function" ? i : r), Ar(e, U | J, i);
        }
        function V0(e, i) {
          return i == null || Ou(e, i, Mt(i));
        }
        function jr(e, i) {
          return e === i || (e !== e && i !== i);
        }
        var K0 = no(Ea),
          W0 = no(function (e, i) {
            return e >= i;
          }),
          ki = $u(
            (function () {
              return arguments;
            })()
          )
            ? $u
            : function (e) {
                return yt(e) && Me.call(e, "callee") && !bu.call(e, "callee");
              },
          be = j.isArray,
          G0 = Yt ? mr(Yt) : rg;
        function ur(e) {
          return e != null && po(e.length) && !si(e);
        }
        function wt(e) {
          return yt(e) && ur(e);
        }
        function J0(e) {
          return e === !0 || e === !1 || (yt(e) && Xt(e) == L);
        }
        var Ii = up || ac,
          Q0 = Dr ? mr(Dr) : ig;
        function Y0(e) {
          return yt(e) && e.nodeType === 1 && !kn(e);
        }
        function X0(e) {
          if (e == null) return !0;
          if (
            ur(e) &&
            (be(e) ||
              typeof e == "string" ||
              typeof e.splice == "function" ||
              Ii(e) ||
              gn(e) ||
              ki(e))
          )
            return !e.length;
          var i = Wt(e);
          if (i == _e || i == Ue) return !e.size;
          if (qn(e)) return !xa(e).length;
          for (var o in e) if (Me.call(e, o)) return !1;
          return !0;
        }
        function Z0(e, i) {
          return jn(e, i);
        }
        function em(e, i, o) {
          o = typeof o == "function" ? o : r;
          var c = o ? o(e, i) : r;
          return c === r ? jn(e, i, r, o) : !!c;
        }
        function Ya(e) {
          if (!yt(e)) return !1;
          var i = Xt(e);
          return (
            i == O ||
            i == u ||
            (typeof e.message == "string" &&
              typeof e.name == "string" &&
              !kn(e))
          );
        }
        function tm(e) {
          return typeof e == "number" && _u(e);
        }
        function si(e) {
          if (!ct(e)) return !1;
          var i = Xt(e);
          return i == ae || i == ye || i == M || i == mt;
        }
        function zh(e) {
          return typeof e == "number" && e == we(e);
        }
        function po(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y;
        }
        function ct(e) {
          var i = typeof e;
          return e != null && (i == "object" || i == "function");
        }
        function yt(e) {
          return e != null && typeof e == "object";
        }
        var kh = Sr ? mr(Sr) : sg;
        function rm(e, i) {
          return e === i || Sa(e, i, za(i));
        }
        function im(e, i, o) {
          return (o = typeof o == "function" ? o : r), Sa(e, i, za(i), o);
        }
        function nm(e) {
          return Hh(e) && e != +e;
        }
        function sm(e) {
          if (kg(e)) throw new me(h);
          return Du(e);
        }
        function om(e) {
          return e === null;
        }
        function am(e) {
          return e == null;
        }
        function Hh(e) {
          return typeof e == "number" || (yt(e) && Xt(e) == Ce);
        }
        function kn(e) {
          if (!yt(e) || Xt(e) != Pe) return !1;
          var i = qs(e);
          if (i === null) return !0;
          var o = Me.call(i, "constructor") && i.constructor;
          return typeof o == "function" && o instanceof o && Us.call(o) == ip;
        }
        var Xa = Br ? mr(Br) : og;
        function cm(e) {
          return zh(e) && e >= -Y && e <= Y;
        }
        var Bh = On ? mr(On) : ag;
        function go(e) {
          return typeof e == "string" || (!be(e) && yt(e) && Xt(e) == Ye);
        }
        function br(e) {
          return typeof e == "symbol" || (yt(e) && Xt(e) == Xe);
        }
        var gn = Di ? mr(Di) : cg;
        function um(e) {
          return e === r;
        }
        function hm(e) {
          return yt(e) && Wt(e) == ze;
        }
        function lm(e) {
          return yt(e) && Xt(e) == Ze;
        }
        var fm = no(Pa),
          dm = no(function (e, i) {
            return e <= i;
          });
        function Vh(e) {
          if (!e) return [];
          if (ur(e)) return go(e) ? Fr(e) : cr(e);
          if (Tn && e[Tn]) return Vd(e[Tn]());
          var i = Wt(e),
            o = i == _e ? da : i == Ue ? $s : yn;
          return o(e);
        }
        function oi(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = Nr(e)), e === de || e === -de)) {
            var i = e < 0 ? -1 : 1;
            return i * V;
          }
          return e === e ? e : 0;
        }
        function we(e) {
          var i = oi(e),
            o = i % 1;
          return i === i ? (o ? i - o : i) : 0;
        }
        function Kh(e) {
          return e ? Li(we(e), 0, Z) : 0;
        }
        function Nr(e) {
          if (typeof e == "number") return e;
          if (br(e)) return W;
          if (ct(e)) {
            var i = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = ct(i) ? i + "" : i;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = lu(e);
          var o = ko.test(e);
          return o || Bo.test(e)
            ? ve(e.slice(2), o ? 2 : 8)
            : zo.test(e)
            ? W
            : +e;
        }
        function Wh(e) {
          return Kr(e, hr(e));
        }
        function pm(e) {
          return e ? Li(we(e), -Y, Y) : e === 0 ? e : 0;
        }
        function je(e) {
          return e == null ? "" : vr(e);
        }
        var gm = fn(function (e, i) {
            if (qn(i) || ur(i)) {
              Kr(i, Mt(i), e);
              return;
            }
            for (var o in i) Me.call(i, o) && Dn(e, o, i[o]);
          }),
          Gh = fn(function (e, i) {
            Kr(i, hr(i), e);
          }),
          yo = fn(function (e, i, o, c) {
            Kr(i, hr(i), e, c);
          }),
          ym = fn(function (e, i, o, c) {
            Kr(i, Mt(i), e, c);
          }),
          mm = ii(ba);
        function vm(e, i) {
          var o = ln(e);
          return i == null ? o : Pu(o, i);
        }
        var bm = Se(function (e, i) {
            e = Ge(e);
            var o = -1,
              c = i.length,
              l = c > 2 ? i[2] : r;
            for (l && Zt(i[0], i[1], l) && (c = 1); ++o < c; )
              for (var y = i[o], I = hr(y), x = -1, D = I.length; ++x < D; ) {
                var z = I[x],
                  k = e[z];
                (k === r || (jr(k, cn[z]) && !Me.call(e, z))) && (e[z] = y[z]);
              }
            return e;
          }),
          wm = Se(function (e) {
            return e.push(r, lh), Lt(Jh, r, e);
          });
        function _m(e, i) {
          return au(e, he(i, 3), Vr);
        }
        function Em(e, i) {
          return au(e, he(i, 3), _a);
        }
        function Im(e, i) {
          return e == null ? e : wa(e, he(i, 3), hr);
        }
        function Sm(e, i) {
          return e == null ? e : Nu(e, he(i, 3), hr);
        }
        function xm(e, i) {
          return e && Vr(e, he(i, 3));
        }
        function Pm(e, i) {
          return e && _a(e, he(i, 3));
        }
        function Om(e) {
          return e == null ? [] : Qs(e, Mt(e));
        }
        function Am(e) {
          return e == null ? [] : Qs(e, hr(e));
        }
        function Za(e, i, o) {
          var c = e == null ? r : Mi(e, i);
          return c === r ? o : c;
        }
        function Tm(e, i) {
          return e != null && ph(e, i, Xp);
        }
        function ec(e, i) {
          return e != null && ph(e, i, Zp);
        }
        var Rm = oh(function (e, i, o) {
            i != null && typeof i.toString != "function" && (i = js.call(i)),
              (e[i] = o);
          }, rc(lr)),
          Nm = oh(function (e, i, o) {
            i != null && typeof i.toString != "function" && (i = js.call(i)),
              Me.call(e, i) ? e[i].push(o) : (e[i] = [o]);
          }, he),
          Cm = Se(Un);
        function Mt(e) {
          return ur(e) ? Su(e) : xa(e);
        }
        function hr(e) {
          return ur(e) ? Su(e, !0) : ug(e);
        }
        function $m(e, i) {
          var o = {};
          return (
            (i = he(i, 3)),
            Vr(e, function (c, l, y) {
              ti(o, i(c, l, y), c);
            }),
            o
          );
        }
        function Dm(e, i) {
          var o = {};
          return (
            (i = he(i, 3)),
            Vr(e, function (c, l, y) {
              ti(o, l, i(c, l, y));
            }),
            o
          );
        }
        var Fm = fn(function (e, i, o) {
            Ys(e, i, o);
          }),
          Jh = fn(function (e, i, o, c) {
            Ys(e, i, o, c);
          }),
          Um = ii(function (e, i) {
            var o = {};
            if (e == null) return o;
            var c = !1;
            (i = nt(i, function (y) {
              return (y = _i(y, e)), c || (c = y.length > 1), y;
            })),
              Kr(e, Ma(e), o),
              c && (o = Ar(o, U | G | J, Rg));
            for (var l = i.length; l--; ) Na(o, i[l]);
            return o;
          });
        function jm(e, i) {
          return Qh(e, fo(he(i)));
        }
        var Lm = ii(function (e, i) {
          return e == null ? {} : lg(e, i);
        });
        function Qh(e, i) {
          if (e == null) return {};
          var o = nt(Ma(e), function (c) {
            return [c];
          });
          return (
            (i = he(i)),
            zu(e, o, function (c, l) {
              return i(c, l[0]);
            })
          );
        }
        function Mm(e, i, o) {
          i = _i(i, e);
          var c = -1,
            l = i.length;
          for (l || ((l = 1), (e = r)); ++c < l; ) {
            var y = e == null ? r : e[Wr(i[c])];
            y === r && ((c = l), (y = o)), (e = si(y) ? y.call(e) : y);
          }
          return e;
        }
        function qm(e, i, o) {
          return e == null ? e : Ln(e, i, o);
        }
        function zm(e, i, o, c) {
          return (
            (c = typeof c == "function" ? c : r), e == null ? e : Ln(e, i, o, c)
          );
        }
        var Yh = uh(Mt),
          Xh = uh(hr);
        function km(e, i, o) {
          var c = be(e),
            l = c || Ii(e) || gn(e);
          if (((i = he(i, 4)), o == null)) {
            var y = e && e.constructor;
            l
              ? (o = c ? new y() : [])
              : ct(e)
              ? (o = si(y) ? ln(qs(e)) : {})
              : (o = {});
          }
          return (
            (l ? xr : Vr)(e, function (I, x, D) {
              return i(o, I, x, D);
            }),
            o
          );
        }
        function Hm(e, i) {
          return e == null ? !0 : Na(e, i);
        }
        function Bm(e, i, o) {
          return e == null ? e : Ku(e, i, Da(o));
        }
        function Vm(e, i, o, c) {
          return (
            (c = typeof c == "function" ? c : r),
            e == null ? e : Ku(e, i, Da(o), c)
          );
        }
        function yn(e) {
          return e == null ? [] : fa(e, Mt(e));
        }
        function Km(e) {
          return e == null ? [] : fa(e, hr(e));
        }
        function Wm(e, i, o) {
          return (
            o === r && ((o = i), (i = r)),
            o !== r && ((o = Nr(o)), (o = o === o ? o : 0)),
            i !== r && ((i = Nr(i)), (i = i === i ? i : 0)),
            Li(Nr(e), i, o)
          );
        }
        function Gm(e, i, o) {
          return (
            (i = oi(i)),
            o === r ? ((o = i), (i = 0)) : (o = oi(o)),
            (e = Nr(e)),
            eg(e, i, o)
          );
        }
        function Jm(e, i, o) {
          if (
            (o && typeof o != "boolean" && Zt(e, i, o) && (i = o = r),
            o === r &&
              (typeof i == "boolean"
                ? ((o = i), (i = r))
                : typeof e == "boolean" && ((o = e), (e = r))),
            e === r && i === r
              ? ((e = 0), (i = 1))
              : ((e = oi(e)), i === r ? ((i = e), (e = 0)) : (i = oi(i))),
            e > i)
          ) {
            var c = e;
            (e = i), (i = c);
          }
          if (o || e % 1 || i % 1) {
            var l = Eu();
            return Kt(e + l * (i - e + Ke("1e-" + ((l + "").length - 1))), i);
          }
          return Aa(e, i);
        }
        var Qm = dn(function (e, i, o) {
          return (i = i.toLowerCase()), e + (o ? Zh(i) : i);
        });
        function Zh(e) {
          return tc(je(e).toLowerCase());
        }
        function el(e) {
          return (e = je(e)), e && e.replace(Yr, qd).replace(ia, "");
        }
        function Ym(e, i, o) {
          (e = je(e)), (i = vr(i));
          var c = e.length;
          o = o === r ? c : Li(we(o), 0, c);
          var l = o;
          return (o -= i.length), o >= 0 && e.slice(o, l) == i;
        }
        function Xm(e) {
          return (e = je(e)), e && rt.test(e) ? e.replace(Ti, zd) : e;
        }
        function Zm(e) {
          return (e = je(e)), e && At.test(e) ? e.replace(dt, "\\$&") : e;
        }
        var ev = dn(function (e, i, o) {
            return e + (o ? "-" : "") + i.toLowerCase();
          }),
          tv = dn(function (e, i, o) {
            return e + (o ? " " : "") + i.toLowerCase();
          }),
          rv = ih("toLowerCase");
        function iv(e, i, o) {
          (e = je(e)), (i = we(i));
          var c = i ? on(e) : 0;
          if (!i || c >= i) return e;
          var l = (i - c) / 2;
          return io(Bs(l), o) + e + io(Hs(l), o);
        }
        function nv(e, i, o) {
          (e = je(e)), (i = we(i));
          var c = i ? on(e) : 0;
          return i && c < i ? e + io(i - c, o) : e;
        }
        function sv(e, i, o) {
          (e = je(e)), (i = we(i));
          var c = i ? on(e) : 0;
          return i && c < i ? io(i - c, o) + e : e;
        }
        function ov(e, i, o) {
          return (
            o || i == null ? (i = 0) : i && (i = +i),
            dp(je(e).replace(pt, ""), i || 0)
          );
        }
        function av(e, i, o) {
          return (
            (o ? Zt(e, i, o) : i === r) ? (i = 1) : (i = we(i)), Ta(je(e), i)
          );
        }
        function cv() {
          var e = arguments,
            i = je(e[0]);
          return e.length < 3 ? i : i.replace(e[1], e[2]);
        }
        var uv = dn(function (e, i, o) {
          return e + (o ? "_" : "") + i.toLowerCase();
        });
        function hv(e, i, o) {
          return (
            o && typeof o != "number" && Zt(e, i, o) && (i = o = r),
            (o = o === r ? Z : o >>> 0),
            o
              ? ((e = je(e)),
                e &&
                (typeof i == "string" || (i != null && !Xa(i))) &&
                ((i = vr(i)), !i && sn(e))
                  ? Ei(Fr(e), 0, o)
                  : e.split(i, o))
              : []
          );
        }
        var lv = dn(function (e, i, o) {
          return e + (o ? " " : "") + tc(i);
        });
        function fv(e, i, o) {
          return (
            (e = je(e)),
            (o = o == null ? 0 : Li(we(o), 0, e.length)),
            (i = vr(i)),
            e.slice(o, o + i.length) == i
          );
        }
        function dv(e, i, o) {
          var c = p.templateSettings;
          o && Zt(e, i, o) && (i = r), (e = je(e)), (i = yo({}, i, c, hh));
          var l = yo({}, i.imports, c.imports, hh),
            y = Mt(l),
            I = fa(l, y),
            x,
            D,
            z = 0,
            k = i.interpolate || Qi,
            K = "__p += '",
            ee = pa(
              (i.escape || Qi).source +
                "|" +
                k.source +
                "|" +
                (k === at ? qo : Qi).source +
                "|" +
                (i.evaluate || Qi).source +
                "|$",
              "g"
            ),
            ce =
              "//# sourceURL=" +
              (Me.call(i, "sourceURL")
                ? (i.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++na + "]") +
              `
`;
          e.replace(ee, function (fe, xe, Te, wr, er, _r) {
            return (
              Te || (Te = wr),
              (K += e.slice(z, _r).replace(Ko, kd)),
              xe &&
                ((x = !0),
                (K +=
                  `' +
__e(` +
                  xe +
                  `) +
'`)),
              er &&
                ((D = !0),
                (K +=
                  `';
` +
                  er +
                  `;
__p += '`)),
              Te &&
                (K +=
                  `' +
((__t = (` +
                  Te +
                  `)) == null ? '' : __t) +
'`),
              (z = _r + fe.length),
              fe
            );
          }),
            (K += `';
`);
          var le = Me.call(i, "variable") && i.variable;
          if (!le)
            K =
              `with (obj) {
` +
              K +
              `
}
`;
          else if (Lo.test(le)) throw new me(w);
          (K = (D ? K.replace(kr, "") : K)
            .replace(Qt, "$1")
            .replace(Qr, "$1;")),
            (K =
              "function(" +
              (le || "obj") +
              `) {
` +
              (le
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (x ? ", __e = _.escape" : "") +
              (D
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              K +
              `return __p
}`);
          var Ee = rl(function () {
            return Fe(y, ce + "return " + K).apply(r, I);
          });
          if (((Ee.source = K), Ya(Ee))) throw Ee;
          return Ee;
        }
        function pv(e) {
          return je(e).toLowerCase();
        }
        function gv(e) {
          return je(e).toUpperCase();
        }
        function yv(e, i, o) {
          if (((e = je(e)), e && (o || i === r))) return lu(e);
          if (!e || !(i = vr(i))) return e;
          var c = Fr(e),
            l = Fr(i),
            y = fu(c, l),
            I = du(c, l) + 1;
          return Ei(c, y, I).join("");
        }
        function mv(e, i, o) {
          if (((e = je(e)), e && (o || i === r))) return e.slice(0, gu(e) + 1);
          if (!e || !(i = vr(i))) return e;
          var c = Fr(e),
            l = du(c, Fr(i)) + 1;
          return Ei(c, 0, l).join("");
        }
        function vv(e, i, o) {
          if (((e = je(e)), e && (o || i === r))) return e.replace(pt, "");
          if (!e || !(i = vr(i))) return e;
          var c = Fr(e),
            l = fu(c, Fr(i));
          return Ei(c, l).join("");
        }
        function bv(e, i) {
          var o = se,
            c = ge;
          if (ct(i)) {
            var l = "separator" in i ? i.separator : l;
            (o = "length" in i ? we(i.length) : o),
              (c = "omission" in i ? vr(i.omission) : c);
          }
          e = je(e);
          var y = e.length;
          if (sn(e)) {
            var I = Fr(e);
            y = I.length;
          }
          if (o >= y) return e;
          var x = o - on(c);
          if (x < 1) return c;
          var D = I ? Ei(I, 0, x).join("") : e.slice(0, x);
          if (l === r) return D + c;
          if ((I && (x += D.length - x), Xa(l))) {
            if (e.slice(x).search(l)) {
              var z,
                k = D;
              for (
                l.global || (l = pa(l.source, je(Ir.exec(l)) + "g")),
                  l.lastIndex = 0;
                (z = l.exec(k));

              )
                var K = z.index;
              D = D.slice(0, K === r ? x : K);
            }
          } else if (e.indexOf(vr(l), x) != x) {
            var ee = D.lastIndexOf(l);
            ee > -1 && (D = D.slice(0, ee));
          }
          return D + c;
        }
        function wv(e) {
          return (e = je(e)), e && ht.test(e) ? e.replace(di, Jd) : e;
        }
        var _v = dn(function (e, i, o) {
            return e + (o ? " " : "") + i.toUpperCase();
          }),
          tc = ih("toUpperCase");
        function tl(e, i, o) {
          return (
            (e = je(e)),
            (i = o ? r : i),
            i === r ? (Bd(e) ? Xd(e) : Fd(e)) : e.match(i) || []
          );
        }
        var rl = Se(function (e, i) {
            try {
              return Lt(e, r, i);
            } catch (o) {
              return Ya(o) ? o : new me(o);
            }
          }),
          Ev = ii(function (e, i) {
            return (
              xr(i, function (o) {
                (o = Wr(o)), ti(e, o, Ja(e[o], e));
              }),
              e
            );
          });
        function Iv(e) {
          var i = e == null ? 0 : e.length,
            o = he();
          return (
            (e = i
              ? nt(e, function (c) {
                  if (typeof c[1] != "function") throw new Pr(d);
                  return [o(c[0]), c[1]];
                })
              : []),
            Se(function (c) {
              for (var l = -1; ++l < i; ) {
                var y = e[l];
                if (Lt(y[0], this, c)) return Lt(y[1], this, c);
              }
            })
          );
        }
        function Sv(e) {
          return Jp(Ar(e, U));
        }
        function rc(e) {
          return function () {
            return e;
          };
        }
        function xv(e, i) {
          return e == null || e !== e ? i : e;
        }
        var Pv = sh(),
          Ov = sh(!0);
        function lr(e) {
          return e;
        }
        function ic(e) {
          return Fu(typeof e == "function" ? e : Ar(e, U));
        }
        function Av(e) {
          return ju(Ar(e, U));
        }
        function Tv(e, i) {
          return Lu(e, Ar(i, U));
        }
        var Rv = Se(function (e, i) {
            return function (o) {
              return Un(o, e, i);
            };
          }),
          Nv = Se(function (e, i) {
            return function (o) {
              return Un(e, o, i);
            };
          });
        function nc(e, i, o) {
          var c = Mt(i),
            l = Qs(i, c);
          o == null &&
            !(ct(i) && (l.length || !c.length)) &&
            ((o = i), (i = e), (e = this), (l = Qs(i, Mt(i))));
          var y = !(ct(o) && "chain" in o) || !!o.chain,
            I = si(e);
          return (
            xr(l, function (x) {
              var D = i[x];
              (e[x] = D),
                I &&
                  (e.prototype[x] = function () {
                    var z = this.__chain__;
                    if (y || z) {
                      var k = e(this.__wrapped__),
                        K = (k.__actions__ = cr(this.__actions__));
                      return (
                        K.push({ func: D, args: arguments, thisArg: e }),
                        (k.__chain__ = z),
                        k
                      );
                    }
                    return D.apply(e, yi([this.value()], arguments));
                  });
            }),
            e
          );
        }
        function Cv() {
          return Ae._ === this && (Ae._ = np), this;
        }
        function sc() {}
        function $v(e) {
          return (
            (e = we(e)),
            Se(function (i) {
              return Mu(i, e);
            })
          );
        }
        var Dv = Ua(nt),
          Fv = Ua(ou),
          Uv = Ua(aa);
        function il(e) {
          return Ha(e) ? ca(Wr(e)) : fg(e);
        }
        function jv(e) {
          return function (i) {
            return e == null ? r : Mi(e, i);
          };
        }
        var Lv = ah(),
          Mv = ah(!0);
        function oc() {
          return [];
        }
        function ac() {
          return !1;
        }
        function qv() {
          return {};
        }
        function zv() {
          return "";
        }
        function kv() {
          return !0;
        }
        function Hv(e, i) {
          if (((e = we(e)), e < 1 || e > Y)) return [];
          var o = Z,
            c = Kt(e, Z);
          (i = he(i)), (e -= Z);
          for (var l = la(c, i); ++o < e; ) i(o);
          return l;
        }
        function Bv(e) {
          return be(e) ? nt(e, Wr) : br(e) ? [e] : cr(Ih(je(e)));
        }
        function Vv(e) {
          var i = ++rp;
          return je(e) + i;
        }
        var Kv = ro(function (e, i) {
            return e + i;
          }, 0),
          Wv = ja("ceil"),
          Gv = ro(function (e, i) {
            return e / i;
          }, 1),
          Jv = ja("floor");
        function Qv(e) {
          return e && e.length ? Js(e, lr, Ea) : r;
        }
        function Yv(e, i) {
          return e && e.length ? Js(e, he(i, 2), Ea) : r;
        }
        function Xv(e) {
          return uu(e, lr);
        }
        function Zv(e, i) {
          return uu(e, he(i, 2));
        }
        function e1(e) {
          return e && e.length ? Js(e, lr, Pa) : r;
        }
        function t1(e, i) {
          return e && e.length ? Js(e, he(i, 2), Pa) : r;
        }
        var r1 = ro(function (e, i) {
            return e * i;
          }, 1),
          i1 = ja("round"),
          n1 = ro(function (e, i) {
            return e - i;
          }, 0);
        function s1(e) {
          return e && e.length ? ha(e, lr) : 0;
        }
        function o1(e, i) {
          return e && e.length ? ha(e, he(i, 2)) : 0;
        }
        return (
          (p.after = A0),
          (p.ary = Dh),
          (p.assign = gm),
          (p.assignIn = Gh),
          (p.assignInWith = yo),
          (p.assignWith = ym),
          (p.at = mm),
          (p.before = Fh),
          (p.bind = Ja),
          (p.bindAll = Ev),
          (p.bindKey = Uh),
          (p.castArray = q0),
          (p.chain = Nh),
          (p.chunk = Jg),
          (p.compact = Qg),
          (p.concat = Yg),
          (p.cond = Iv),
          (p.conforms = Sv),
          (p.constant = rc),
          (p.countBy = s0),
          (p.create = vm),
          (p.curry = jh),
          (p.curryRight = Lh),
          (p.debounce = Mh),
          (p.defaults = bm),
          (p.defaultsDeep = wm),
          (p.defer = T0),
          (p.delay = R0),
          (p.difference = Xg),
          (p.differenceBy = Zg),
          (p.differenceWith = ey),
          (p.drop = ty),
          (p.dropRight = ry),
          (p.dropRightWhile = iy),
          (p.dropWhile = ny),
          (p.fill = sy),
          (p.filter = a0),
          (p.flatMap = h0),
          (p.flatMapDeep = l0),
          (p.flatMapDepth = f0),
          (p.flatten = Oh),
          (p.flattenDeep = oy),
          (p.flattenDepth = ay),
          (p.flip = N0),
          (p.flow = Pv),
          (p.flowRight = Ov),
          (p.fromPairs = cy),
          (p.functions = Om),
          (p.functionsIn = Am),
          (p.groupBy = d0),
          (p.initial = hy),
          (p.intersection = ly),
          (p.intersectionBy = fy),
          (p.intersectionWith = dy),
          (p.invert = Rm),
          (p.invertBy = Nm),
          (p.invokeMap = g0),
          (p.iteratee = ic),
          (p.keyBy = y0),
          (p.keys = Mt),
          (p.keysIn = hr),
          (p.map = uo),
          (p.mapKeys = $m),
          (p.mapValues = Dm),
          (p.matches = Av),
          (p.matchesProperty = Tv),
          (p.memoize = lo),
          (p.merge = Fm),
          (p.mergeWith = Jh),
          (p.method = Rv),
          (p.methodOf = Nv),
          (p.mixin = nc),
          (p.negate = fo),
          (p.nthArg = $v),
          (p.omit = Um),
          (p.omitBy = jm),
          (p.once = C0),
          (p.orderBy = m0),
          (p.over = Dv),
          (p.overArgs = $0),
          (p.overEvery = Fv),
          (p.overSome = Uv),
          (p.partial = Qa),
          (p.partialRight = qh),
          (p.partition = v0),
          (p.pick = Lm),
          (p.pickBy = Qh),
          (p.property = il),
          (p.propertyOf = jv),
          (p.pull = my),
          (p.pullAll = Th),
          (p.pullAllBy = vy),
          (p.pullAllWith = by),
          (p.pullAt = wy),
          (p.range = Lv),
          (p.rangeRight = Mv),
          (p.rearg = D0),
          (p.reject = _0),
          (p.remove = _y),
          (p.rest = F0),
          (p.reverse = Wa),
          (p.sampleSize = I0),
          (p.set = qm),
          (p.setWith = zm),
          (p.shuffle = S0),
          (p.slice = Ey),
          (p.sortBy = O0),
          (p.sortedUniq = Ty),
          (p.sortedUniqBy = Ry),
          (p.split = hv),
          (p.spread = U0),
          (p.tail = Ny),
          (p.take = Cy),
          (p.takeRight = $y),
          (p.takeRightWhile = Dy),
          (p.takeWhile = Fy),
          (p.tap = Qy),
          (p.throttle = j0),
          (p.thru = co),
          (p.toArray = Vh),
          (p.toPairs = Yh),
          (p.toPairsIn = Xh),
          (p.toPath = Bv),
          (p.toPlainObject = Wh),
          (p.transform = km),
          (p.unary = L0),
          (p.union = Uy),
          (p.unionBy = jy),
          (p.unionWith = Ly),
          (p.uniq = My),
          (p.uniqBy = qy),
          (p.uniqWith = zy),
          (p.unset = Hm),
          (p.unzip = Ga),
          (p.unzipWith = Rh),
          (p.update = Bm),
          (p.updateWith = Vm),
          (p.values = yn),
          (p.valuesIn = Km),
          (p.without = ky),
          (p.words = tl),
          (p.wrap = M0),
          (p.xor = Hy),
          (p.xorBy = By),
          (p.xorWith = Vy),
          (p.zip = Ky),
          (p.zipObject = Wy),
          (p.zipObjectDeep = Gy),
          (p.zipWith = Jy),
          (p.entries = Yh),
          (p.entriesIn = Xh),
          (p.extend = Gh),
          (p.extendWith = yo),
          nc(p, p),
          (p.add = Kv),
          (p.attempt = rl),
          (p.camelCase = Qm),
          (p.capitalize = Zh),
          (p.ceil = Wv),
          (p.clamp = Wm),
          (p.clone = z0),
          (p.cloneDeep = H0),
          (p.cloneDeepWith = B0),
          (p.cloneWith = k0),
          (p.conformsTo = V0),
          (p.deburr = el),
          (p.defaultTo = xv),
          (p.divide = Gv),
          (p.endsWith = Ym),
          (p.eq = jr),
          (p.escape = Xm),
          (p.escapeRegExp = Zm),
          (p.every = o0),
          (p.find = c0),
          (p.findIndex = xh),
          (p.findKey = _m),
          (p.findLast = u0),
          (p.findLastIndex = Ph),
          (p.findLastKey = Em),
          (p.floor = Jv),
          (p.forEach = Ch),
          (p.forEachRight = $h),
          (p.forIn = Im),
          (p.forInRight = Sm),
          (p.forOwn = xm),
          (p.forOwnRight = Pm),
          (p.get = Za),
          (p.gt = K0),
          (p.gte = W0),
          (p.has = Tm),
          (p.hasIn = ec),
          (p.head = Ah),
          (p.identity = lr),
          (p.includes = p0),
          (p.indexOf = uy),
          (p.inRange = Gm),
          (p.invoke = Cm),
          (p.isArguments = ki),
          (p.isArray = be),
          (p.isArrayBuffer = G0),
          (p.isArrayLike = ur),
          (p.isArrayLikeObject = wt),
          (p.isBoolean = J0),
          (p.isBuffer = Ii),
          (p.isDate = Q0),
          (p.isElement = Y0),
          (p.isEmpty = X0),
          (p.isEqual = Z0),
          (p.isEqualWith = em),
          (p.isError = Ya),
          (p.isFinite = tm),
          (p.isFunction = si),
          (p.isInteger = zh),
          (p.isLength = po),
          (p.isMap = kh),
          (p.isMatch = rm),
          (p.isMatchWith = im),
          (p.isNaN = nm),
          (p.isNative = sm),
          (p.isNil = am),
          (p.isNull = om),
          (p.isNumber = Hh),
          (p.isObject = ct),
          (p.isObjectLike = yt),
          (p.isPlainObject = kn),
          (p.isRegExp = Xa),
          (p.isSafeInteger = cm),
          (p.isSet = Bh),
          (p.isString = go),
          (p.isSymbol = br),
          (p.isTypedArray = gn),
          (p.isUndefined = um),
          (p.isWeakMap = hm),
          (p.isWeakSet = lm),
          (p.join = py),
          (p.kebabCase = ev),
          (p.last = Rr),
          (p.lastIndexOf = gy),
          (p.lowerCase = tv),
          (p.lowerFirst = rv),
          (p.lt = fm),
          (p.lte = dm),
          (p.max = Qv),
          (p.maxBy = Yv),
          (p.mean = Xv),
          (p.meanBy = Zv),
          (p.min = e1),
          (p.minBy = t1),
          (p.stubArray = oc),
          (p.stubFalse = ac),
          (p.stubObject = qv),
          (p.stubString = zv),
          (p.stubTrue = kv),
          (p.multiply = r1),
          (p.nth = yy),
          (p.noConflict = Cv),
          (p.noop = sc),
          (p.now = ho),
          (p.pad = iv),
          (p.padEnd = nv),
          (p.padStart = sv),
          (p.parseInt = ov),
          (p.random = Jm),
          (p.reduce = b0),
          (p.reduceRight = w0),
          (p.repeat = av),
          (p.replace = cv),
          (p.result = Mm),
          (p.round = i1),
          (p.runInContext = C),
          (p.sample = E0),
          (p.size = x0),
          (p.snakeCase = uv),
          (p.some = P0),
          (p.sortedIndex = Iy),
          (p.sortedIndexBy = Sy),
          (p.sortedIndexOf = xy),
          (p.sortedLastIndex = Py),
          (p.sortedLastIndexBy = Oy),
          (p.sortedLastIndexOf = Ay),
          (p.startCase = lv),
          (p.startsWith = fv),
          (p.subtract = n1),
          (p.sum = s1),
          (p.sumBy = o1),
          (p.template = dv),
          (p.times = Hv),
          (p.toFinite = oi),
          (p.toInteger = we),
          (p.toLength = Kh),
          (p.toLower = pv),
          (p.toNumber = Nr),
          (p.toSafeInteger = pm),
          (p.toString = je),
          (p.toUpper = gv),
          (p.trim = yv),
          (p.trimEnd = mv),
          (p.trimStart = vv),
          (p.truncate = bv),
          (p.unescape = wv),
          (p.uniqueId = Vv),
          (p.upperCase = _v),
          (p.upperFirst = tc),
          (p.each = Ch),
          (p.eachRight = $h),
          (p.first = Ah),
          nc(
            p,
            (function () {
              var e = {};
              return (
                Vr(p, function (i, o) {
                  Me.call(p.prototype, o) || (e[o] = i);
                }),
                e
              );
            })(),
            { chain: !1 }
          ),
          (p.VERSION = n),
          xr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (e) {
              p[e].placeholder = p;
            }
          ),
          xr(["drop", "take"], function (e, i) {
            (Oe.prototype[e] = function (o) {
              o = o === r ? 1 : Ut(we(o), 0);
              var c = this.__filtered__ && !i ? new Oe(this) : this.clone();
              return (
                c.__filtered__
                  ? (c.__takeCount__ = Kt(o, c.__takeCount__))
                  : c.__views__.push({
                      size: Kt(o, Z),
                      type: e + (c.__dir__ < 0 ? "Right" : ""),
                    }),
                c
              );
            }),
              (Oe.prototype[e + "Right"] = function (o) {
                return this.reverse()[e](o).reverse();
              });
          }),
          xr(["filter", "map", "takeWhile"], function (e, i) {
            var o = i + 1,
              c = o == E || o == ie;
            Oe.prototype[e] = function (l) {
              var y = this.clone();
              return (
                y.__iteratees__.push({ iteratee: he(l, 3), type: o }),
                (y.__filtered__ = y.__filtered__ || c),
                y
              );
            };
          }),
          xr(["head", "last"], function (e, i) {
            var o = "take" + (i ? "Right" : "");
            Oe.prototype[e] = function () {
              return this[o](1).value()[0];
            };
          }),
          xr(["initial", "tail"], function (e, i) {
            var o = "drop" + (i ? "" : "Right");
            Oe.prototype[e] = function () {
              return this.__filtered__ ? new Oe(this) : this[o](1);
            };
          }),
          (Oe.prototype.compact = function () {
            return this.filter(lr);
          }),
          (Oe.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (Oe.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (Oe.prototype.invokeMap = Se(function (e, i) {
            return typeof e == "function"
              ? new Oe(this)
              : this.map(function (o) {
                  return Un(o, e, i);
                });
          })),
          (Oe.prototype.reject = function (e) {
            return this.filter(fo(he(e)));
          }),
          (Oe.prototype.slice = function (e, i) {
            e = we(e);
            var o = this;
            return o.__filtered__ && (e > 0 || i < 0)
              ? new Oe(o)
              : (e < 0 ? (o = o.takeRight(-e)) : e && (o = o.drop(e)),
                i !== r &&
                  ((i = we(i)), (o = i < 0 ? o.dropRight(-i) : o.take(i - e))),
                o);
          }),
          (Oe.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (Oe.prototype.toArray = function () {
            return this.take(Z);
          }),
          Vr(Oe.prototype, function (e, i) {
            var o = /^(?:filter|find|map|reject)|While$/.test(i),
              c = /^(?:head|last)$/.test(i),
              l = p[c ? "take" + (i == "last" ? "Right" : "") : i],
              y = c || /^find/.test(i);
            l &&
              (p.prototype[i] = function () {
                var I = this.__wrapped__,
                  x = c ? [1] : arguments,
                  D = I instanceof Oe,
                  z = x[0],
                  k = D || be(I),
                  K = function (xe) {
                    var Te = l.apply(p, yi([xe], x));
                    return c && ee ? Te[0] : Te;
                  };
                k &&
                  o &&
                  typeof z == "function" &&
                  z.length != 1 &&
                  (D = k = !1);
                var ee = this.__chain__,
                  ce = !!this.__actions__.length,
                  le = y && !ee,
                  Ee = D && !ce;
                if (!y && k) {
                  I = Ee ? I : new Oe(this);
                  var fe = e.apply(I, x);
                  return (
                    fe.__actions__.push({ func: co, args: [K], thisArg: r }),
                    new Or(fe, ee)
                  );
                }
                return le && Ee
                  ? e.apply(this, x)
                  : ((fe = this.thru(K)),
                    le ? (c ? fe.value()[0] : fe.value()) : fe);
              });
          }),
          xr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (e) {
              var i = Ds[e],
                o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                c = /^(?:pop|shift)$/.test(e);
              p.prototype[e] = function () {
                var l = arguments;
                if (c && !this.__chain__) {
                  var y = this.value();
                  return i.apply(be(y) ? y : [], l);
                }
                return this[o](function (I) {
                  return i.apply(be(I) ? I : [], l);
                });
              };
            }
          ),
          Vr(Oe.prototype, function (e, i) {
            var o = p[i];
            if (o) {
              var c = o.name + "";
              Me.call(hn, c) || (hn[c] = []), hn[c].push({ name: i, func: o });
            }
          }),
          (hn[to(r, pe).name] = [{ name: "wrapper", func: r }]),
          (Oe.prototype.clone = wp),
          (Oe.prototype.reverse = _p),
          (Oe.prototype.value = Ep),
          (p.prototype.at = Yy),
          (p.prototype.chain = Xy),
          (p.prototype.commit = Zy),
          (p.prototype.next = e0),
          (p.prototype.plant = r0),
          (p.prototype.reverse = i0),
          (p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = n0),
          (p.prototype.first = p.prototype.head),
          Tn && (p.prototype[Tn] = t0),
          p
        );
      },
      an = Zd();
    bt ? (((bt.exports = an)._ = an), (We._ = an)) : (Ae._ = an);
  }.call(Yn));
})(Fc, Fc.exports);
var pS = Object.defineProperty,
  gS = Object.defineProperties,
  yS = Object.getOwnPropertyDescriptors,
  If = Object.getOwnPropertySymbols,
  mS = Object.prototype.hasOwnProperty,
  vS = Object.prototype.propertyIsEnumerable,
  Sf = (s, t, r) =>
    t in s
      ? pS(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  bo = (s, t) => {
    for (var r in t || (t = {})) mS.call(t, r) && Sf(s, r, t[r]);
    if (If) for (var r of If(t)) vS.call(t, r) && Sf(s, r, t[r]);
    return s;
  },
  bS = (s, t) => gS(s, yS(t));
function In(s, t, r) {
  var n;
  const a = nS(s);
  return (
    ((n = t.rpcMap) == null ? void 0 : n[a.reference]) ||
    `${dS}?chainId=${a.namespace}:${a.reference}&projectId=${r}`
  );
}
function Ji(s) {
  return s.includes(":") ? s.split(":")[1] : s;
}
function Ad(s) {
  return s.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function wS(s, t) {
  const r = Object.keys(t.namespaces).filter((a) => a.includes(s));
  if (!r.length) return [];
  const n = [];
  return (
    r.forEach((a) => {
      const h = t.namespaces[a].accounts;
      n.push(...h);
    }),
    n
  );
}
function _S(s = {}, t = {}) {
  const r = xf(s),
    n = xf(t);
  return Fc.exports.merge(r, n);
}
function xf(s) {
  var t, r, n, a;
  const h = {};
  if (!oS(s)) return h;
  for (const [d, w] of Object.entries(s)) {
    const S = iu(d) ? [d] : w.chains,
      $ = w.methods || [],
      A = w.events || [],
      U = w.rpcMap || {},
      G = Zn(d);
    h[G] = bS(bo(bo({}, h[G]), w), {
      chains: Ec(S, (t = h[G]) == null ? void 0 : t.chains),
      methods: Ec($, (r = h[G]) == null ? void 0 : r.methods),
      events: Ec(A, (n = h[G]) == null ? void 0 : n.events),
      rpcMap: bo(bo({}, U), (a = h[G]) == null ? void 0 : a.rpcMap),
    });
  }
  return h;
}
function ES(s) {
  return s.includes(":") ? s.split(":")[2] : s;
}
function IS(s) {
  const t = {};
  for (const [r, n] of Object.entries(s)) {
    const a = n.methods || [],
      h = n.events || [],
      d = n.accounts || [],
      w = iu(r) ? [r] : n.chains ? n.chains : Ad(n.accounts);
    t[r] = { chains: w, methods: a, events: h, accounts: d };
  }
  return t;
}
function Ic(s) {
  return typeof s == "number"
    ? s
    : s.includes("0x")
    ? parseInt(s, 16)
    : s.includes(":")
    ? Number(s.split(":")[1])
    : Number(s);
}
const Td = {},
  Et = (s) => Td[s],
  Sc = (s, t) => {
    Td[s] = t;
  };
class SS {
  constructor(t) {
    (this.name = "polkadot"),
      (this.namespace = t.namespace),
      (this.events = Et("events")),
      (this.client = Et("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(Ai.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t
          .filter((r) => r.split(":")[1] === this.chainId.toString())
          .map((r) => r.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = Ji(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || In(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Oi(new Gi(n, Et("disableProviderPing")));
  }
}
class xS {
  constructor(t) {
    (this.name = "eip155"),
      (this.namespace = t.namespace),
      (this.events = Et("events")),
      (this.client = Et("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(t.request.method)
      ? await this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r),
      (this.chainId = parseInt(t)),
      this.events.emit(Ai.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, r) {
    const n =
      r || In(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Oi(new Gi(n, Et("disableProviderPing")));
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = parseInt(Ji(r));
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const t = this.chainId,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  async handleSwitchChain(t) {
    var r, n;
    let a = t.request.params
      ? (r = t.request.params[0]) == null
        ? void 0
        : r.chainId
      : "0x0";
    a = a.startsWith("0x") ? a : `0x${a}`;
    const h = parseInt(a, 16);
    if (this.isChainApproved(h)) this.setDefaultChain(`${h}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: t.topic,
        request: { method: t.request.method, params: [{ chainId: a }] },
        chainId: (n = this.namespace.chains) == null ? void 0 : n[0],
      }),
        this.setDefaultChain(`${h}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${h}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
}
class PS {
  constructor(t) {
    (this.name = "solana"),
      (this.namespace = t.namespace),
      (this.events = Et("events")),
      (this.client = Et("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(Ai.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = Ji(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || In(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Oi(new Gi(n, Et("disableProviderPing")));
  }
}
class OS {
  constructor(t) {
    (this.name = "cosmos"),
      (this.namespace = t.namespace),
      (this.events = Et("events")),
      (this.client = Et("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(
        Ai.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = Ji(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || In(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Oi(new Gi(n, Et("disableProviderPing")));
  }
}
class AS {
  constructor(t) {
    (this.name = "cip34"),
      (this.namespace = t.namespace),
      (this.events = Et("events")),
      (this.client = Et("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(
        Ai.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        const n = this.getCardanoRPCUrl(r),
          a = Ji(r);
        t[a] = this.createHttpProvider(a, n);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  getCardanoRPCUrl(t) {
    const r = this.namespace.rpcMap;
    if (r) return r[t];
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || this.getCardanoRPCUrl(t);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Oi(new Gi(n, Et("disableProviderPing")));
  }
}
class TS {
  constructor(t) {
    (this.name = "elrond"),
      (this.namespace = t.namespace),
      (this.events = Et("events")),
      (this.client = Et("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(Ai.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = Ji(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || In(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Oi(new Gi(n, Et("disableProviderPing")));
  }
}
class RS {
  constructor(t) {
    (this.name = "multiversx"),
      (this.namespace = t.namespace),
      (this.events = Et("events")),
      (this.client = Et("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(Ai.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = Ji(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || In(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new Oi(new Gi(n, Et("disableProviderPing")));
  }
}
var NS = Object.defineProperty,
  CS = Object.defineProperties,
  $S = Object.getOwnPropertyDescriptors,
  Pf = Object.getOwnPropertySymbols,
  DS = Object.prototype.hasOwnProperty,
  FS = Object.prototype.propertyIsEnumerable,
  Of = (s, t, r) =>
    t in s
      ? NS(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  wo = (s, t) => {
    for (var r in t || (t = {})) DS.call(t, r) && Of(s, r, t[r]);
    if (Pf) for (var r of Pf(t)) FS.call(t, r) && Of(s, r, t[r]);
    return s;
  },
  xc = (s, t) => CS(s, $S(t));
class nu {
  constructor(t) {
    (this.events = new sr()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = t),
      (this.logger =
        typeof (t == null ? void 0 : t.logger) < "u" &&
        typeof (t == null ? void 0 : t.logger) != "string"
          ? t.logger
          : Re.pino(
              Re.getDefaultLoggerOptions({
                level: (t == null ? void 0 : t.logger) || _f,
              })
            )),
      (this.disableProviderPing =
        (t == null ? void 0 : t.disableProviderPing) || !1);
  }
  static async init(t) {
    const r = new nu(t);
    return await r.initialize(), r;
  }
  async request(t, r) {
    const [n, a] = this.validateChain(r);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(n).request({
      request: wo({}, t),
      chainId: `${n}:${a}`,
      topic: this.session.topic,
    });
  }
  sendAsync(t, r, n) {
    this.request(t, n)
      .then((a) => r(null, a))
      .catch((a) => r(a, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (t = this.session) == null ? void 0 : t.topic,
      reason: yf("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(t),
      await this.cleanupPendingPairings(),
      !t.skipPairing)
    )
      return await this.pair(t.pairingTopic);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (r >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: n, approval: a } = await this.client.connect({
        pairingTopic: t,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      n && ((this.uri = n), this.events.emit("display_uri", n)),
        await a()
          .then((h) => {
            (this.session = h),
              this.namespaces ||
                ((this.namespaces = IS(h.namespaces)),
                this.persist("namespaces", this.namespaces));
          })
          .catch((h) => {
            if (h.message !== Pd) throw h;
            r++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, r) {
    try {
      if (!this.session) return;
      const [n, a] = this.validateChain(t);
      this.getProvider(n).setDefaultChain(a, r);
    } catch (n) {
      if (!/Please call connect/.test(n.message)) throw n;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (mf(r)) {
      for (const n of r)
        t.deletePairings
          ? this.client.core.expirer.set(n.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const t = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[t])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await tS.init({
        logger: this.providerOpts.logger || _f,
        relayUrl: this.providerOpts.relayUrl || hS,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const t = [
      ...new Set(Object.keys(this.session.namespaces).map((r) => Zn(r))),
    ];
    Sc("client", this.client),
      Sc("events", this.events),
      Sc("disableProviderPing", this.disableProviderPing),
      t.forEach((r) => {
        if (!this.session) return;
        const n = wS(r, this.session),
          a = Ad(n),
          h = _S(this.namespaces, this.optionalNamespaces),
          d = xc(wo({}, h[r]), { accounts: n, chains: a });
        switch (r) {
          case "eip155":
            this.rpcProviders[r] = new xS({ namespace: d });
            break;
          case "solana":
            this.rpcProviders[r] = new PS({ namespace: d });
            break;
          case "cosmos":
            this.rpcProviders[r] = new OS({ namespace: d });
            break;
          case "polkadot":
            this.rpcProviders[r] = new SS({ namespace: d });
            break;
          case "cip34":
            this.rpcProviders[r] = new AS({ namespace: d });
            break;
          case "elrond":
            this.rpcProviders[r] = new TS({ namespace: d });
            break;
          case "multiversx":
            this.rpcProviders[r] = new RS({ namespace: d });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }),
      this.client.on("session_event", (t) => {
        const { params: r } = t,
          { event: n } = r;
        if (n.name === "accountsChanged") {
          const a = n.data;
          a && mf(a) && this.events.emit("accountsChanged", a.map(ES));
        } else if (n.name === "chainChanged") {
          const a = r.chainId,
            h = r.event.data,
            d = Zn(a),
            w = Ic(a) !== Ic(h) ? `${d}:${Ic(h)}` : a;
          this.onChainChanged(w);
        } else this.events.emit(n.name, n.data);
        this.events.emit("session_event", t);
      }),
      this.client.on("session_update", ({ topic: t, params: r }) => {
        var n;
        const { namespaces: a } = r,
          h = (n = this.client) == null ? void 0 : n.session.get(t);
        (this.session = xc(wo({}, h), { namespaces: a })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: t, params: r });
      }),
      this.client.on("session_delete", async (t) => {
        await this.cleanup(),
          this.events.emit("session_delete", t),
          this.events.emit(
            "disconnect",
            xc(wo({}, yf("USER_DISCONNECTED")), { data: t.topic })
          );
      }),
      this.on(Ai.DEFAULT_CHAIN_CHANGED, (t) => {
        this.onChainChanged(t, !0);
      });
  }
  getProvider(t) {
    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var r;
      this.getProvider(t).updateNamespace(
        (r = this.session) == null ? void 0 : r.namespaces[t]
      );
    });
  }
  setNamespaces(t) {
    const { namespaces: r, optionalNamespaces: n, sessionProperties: a } = t;
    r && Object.keys(r).length && (this.namespaces = r),
      n && Object.keys(n).length && (this.optionalNamespaces = n),
      (this.sessionProperties = a),
      this.persist("namespaces", r),
      this.persist("optionalNamespaces", n);
  }
  validateChain(t) {
    const [r, n] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, n];
    if (
      r &&
      !Object.keys(this.namespaces || {})
        .map((d) => Zn(d))
        .includes(r)
    )
      throw new Error(
        `Namespace '${r}' is not configured. Please call connect() first with namespace config.`
      );
    if (r && n) return [r, n];
    const a = Zn(Object.keys(this.namespaces)[0]),
      h = this.rpcProviders[a].getDefaultChain();
    return [a, h];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, r = !1) {
    var n;
    if (!this.namespaces) return;
    const [a, h] = this.validateChain(t);
    r || this.getProvider(a).setDefaultChain(h),
      (((n = this.namespaces[a]) != null
        ? n
        : this.namespaces[`${a}:${h}`]
      ).defaultChain = h),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", h);
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, r) {
    this.client.core.storage.setItem(`${Ef}/${t}`, r);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${Ef}/${t}`);
  }
}
const US = nu,
  jS = "wc",
  LS = "ethereum_provider",
  MS = `${jS}@2:${LS}:`,
  qS = "https://rpc.walletconnect.com/v1/",
  Uc = ["eth_sendTransaction", "personal_sign"],
  zS = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  jc = ["chainChanged", "accountsChanged"],
  kS = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var HS = Object.defineProperty,
  BS = Object.defineProperties,
  VS = Object.getOwnPropertyDescriptors,
  Af = Object.getOwnPropertySymbols,
  KS = Object.prototype.hasOwnProperty,
  WS = Object.prototype.propertyIsEnumerable,
  Tf = (s, t, r) =>
    t in s
      ? HS(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  es = (s, t) => {
    for (var r in t || (t = {})) KS.call(t, r) && Tf(s, r, t[r]);
    if (Af) for (var r of Af(t)) WS.call(t, r) && Tf(s, r, t[r]);
    return s;
  },
  Rf = (s, t) => BS(s, VS(t));
function Ro(s) {
  return Number(s[0].split(":")[1]);
}
function Pc(s) {
  return `0x${s.toString(16)}`;
}
function GS(s) {
  const {
    chains: t,
    optionalChains: r,
    methods: n,
    optionalMethods: a,
    events: h,
    optionalEvents: d,
    rpcMap: w,
  } = s;
  if (!Ac(t)) throw new Error("Invalid chains");
  const S = {
      chains: t,
      methods: n || Uc,
      events: h || jc,
      rpcMap: es({}, t.length ? { [Ro(t)]: w[Ro(t)] } : {}),
    },
    $ = h == null ? void 0 : h.filter((J) => !jc.includes(J)),
    A = n == null ? void 0 : n.filter((J) => !Uc.includes(J));
  if (!r && !d && !a && !($ != null && $.length) && !(A != null && A.length))
    return { required: t.length ? S : void 0 };
  const U =
      (($ == null ? void 0 : $.length) && (A == null ? void 0 : A.length)) ||
      !r,
    G = {
      chains: [...new Set(U ? S.chains.concat(r || []) : r)],
      methods: [...new Set(S.methods.concat(a != null && a.length ? a : zS))],
      events: [...new Set(S.events.concat(d != null && d.length ? d : kS))],
      rpcMap: w,
    };
  return { required: t.length ? S : void 0, optional: r.length ? G : void 0 };
}
class su {
  constructor() {
    (this.events = new sr.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = MS),
      (this.on = (t, r) => (this.events.on(t, r), this)),
      (this.once = (t, r) => (this.events.once(t, r), this)),
      (this.removeListener = (t, r) => (
        this.events.removeListener(t, r), this
      )),
      (this.off = (t, r) => (this.events.off(t, r), this)),
      (this.parseAccount = (t) =>
        this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(t) {
    const r = new su();
    return await r.initialize(t), r;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, r) {
    this.signer.sendAsync(t, r, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: r, optional: n } = GS(this.rpc);
    try {
      const a = await new Promise(async (d, w) => {
        var S;
        this.rpc.showQrModal &&
          ((S = this.modal) == null ||
            S.subscribeModal(($) => {
              !$.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                w(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              Rf(
                es(
                  { namespaces: es({}, r && { [this.namespace]: r }) },
                  n && { optionalNamespaces: { [this.namespace]: n } }
                ),
                { pairingTopic: t == null ? void 0 : t.pairingTopic }
              )
            )
            .then(($) => {
              d($);
            })
            .catch(($) => {
              w(new Error($.message));
            });
      });
      if (!a) return;
      const h = q1(a.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : h),
        this.setAccounts(h),
        this.events.emit("connect", { chainId: Pc(this.chainId) });
    } catch (a) {
      throw (this.signer.logger.error(a), a);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: r } = t,
        { event: n } = r;
      n.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(n.data)),
          this.events.emit("accountsChanged", this.accounts))
        : n.name === "chainChanged"
        ? this.setChainId(this.formatChainId(n.data))
        : this.events.emit(n.name, n.data),
        this.events.emit("session_event", t);
    }),
      this.signer.on("chainChanged", (t) => {
        const r = parseInt(t);
        (this.chainId = r),
          this.events.emit("chainChanged", Pc(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (t) => {
        this.events.emit("session_update", t);
      }),
      this.signer.on("session_delete", (t) => {
        this.reset(),
          this.events.emit("session_delete", t),
          this.events.emit(
            "disconnect",
            Rf(es({}, k1("USER_DISCONNECTED")), {
              data: t.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (t) => {
        var r, n;
        this.rpc.showQrModal &&
          ((r = this.modal) == null || r.closeModal(),
          (n = this.modal) == null || n.openModal({ uri: t })),
          this.events.emit("display_uri", t);
      });
  }
  switchEthereumChain(t) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: t.toString(16) }],
    });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const r = t
      .filter((n) => this.isCompatibleChainId(n))
      .map((n) => this.parseChainId(n));
    r.length &&
      ((this.chainId = r[0]),
      this.events.emit("chainChanged", Pc(this.chainId)),
      this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const r = this.parseChainId(t);
      (this.chainId = r), this.switchEthereumChain(r);
    }
  }
  parseAccountId(t) {
    const [r, n, a] = t.split(":");
    return { chainId: `${r}:${n}`, address: a };
  }
  setAccounts(t) {
    (this.accounts = t
      .filter(
        (r) =>
          this.parseChainId(this.parseAccountId(r).chainId) === this.chainId
      )
      .map((r) => this.parseAccountId(r).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var r, n;
    const a = (r = t == null ? void 0 : t.chains) != null ? r : [],
      h = (n = t == null ? void 0 : t.optionalChains) != null ? n : [],
      d = a.concat(h);
    if (!d.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const w = a.length ? (t == null ? void 0 : t.methods) || Uc : [],
      S = a.length ? (t == null ? void 0 : t.events) || jc : [],
      $ = (t == null ? void 0 : t.optionalMethods) || [],
      A = (t == null ? void 0 : t.optionalEvents) || [],
      U = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(d, t.projectId),
      G = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return {
      chains: a == null ? void 0 : a.map((J) => this.formatChainId(J)),
      optionalChains: h.map((J) => this.formatChainId(J)),
      methods: w,
      events: S,
      optionalMethods: $,
      optionalEvents: A,
      rpcMap: U,
      showQrModal: !!(t != null && t.showQrModal),
      qrModalOptions: G,
      projectId: t.projectId,
      metadata: t.metadata,
    };
  }
  buildRpcMap(t, r) {
    const n = {};
    return (
      t.forEach((a) => {
        n[a] = this.getRpcUrl(a, r);
      }),
      n
    );
  }
  async initialize(t) {
    if (
      ((this.rpc = this.getRpcConfig(t)),
      (this.chainId = this.rpc.chains.length
        ? Ro(this.rpc.chains)
        : Ro(this.rpc.optionalChains)),
      (this.signer = await US.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: t.disableProviderPing,
        relayUrl: t.relayUrl,
        storageOptions: t.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let r;
      try {
        const { WalletConnectModal: n } = await S1(
          () => import("./index-dc034d21.js").then((a) => a.i),
          [
            "assets/index-dc034d21.js",
            "assets/index-2e2b0cd7.js",
            "assets/index-92c1c2ef.css",
          ]
        );
        r = n;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (r)
        try {
          this.modal = new r(
            es(
              {
                walletConnectVersion: 2,
                projectId: this.rpc.projectId,
                standaloneChains: this.rpc.chains,
              },
              this.rpc.qrModalOptions
            )
          );
        } catch (n) {
          throw (
            (this.signer.logger.error(n),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: r, optionalChains: n, rpcMap: a } = t;
    r &&
      Ac(r) &&
      ((this.rpc.chains = r.map((h) => this.formatChainId(h))),
      r.forEach((h) => {
        this.rpc.rpcMap[h] = (a == null ? void 0 : a[h]) || this.getRpcUrl(h);
      })),
      n &&
        Ac(n) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains =
          n == null ? void 0 : n.map((h) => this.formatChainId(h))),
        n.forEach((h) => {
          this.rpc.rpcMap[h] = (a == null ? void 0 : a[h]) || this.getRpcUrl(h);
        }));
  }
  getRpcUrl(t, r) {
    var n;
    return (
      ((n = this.rpc.rpcMap) == null ? void 0 : n[t]) ||
      `${qS}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const t = await this.signer.client.core.storage.getItem(
        `${this.STORAGE_KEY}/chainId`
      ),
      r = this.session.namespaces[`${this.namespace}:${t}`]
        ? this.session.namespaces[`${this.namespace}:${t}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(
      t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts
    ),
      this.setAccounts(r == null ? void 0 : r.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String
      ? [this.parseAccount(t)]
      : t.map((r) => this.parseAccount(r));
  }
}
const cx = su;
export {
  cx as EthereumProvider,
  kS as OPTIONAL_EVENTS,
  zS as OPTIONAL_METHODS,
  jc as REQUIRED_EVENTS,
  Uc as REQUIRED_METHODS,
  su as default,
};
