import {
  r as po,
  e as J,
  f as go,
  i as Qt,
  h as mi,
  t as F,
  j as F0,
} from "./index-2e2b0cd7.js";
import { e as Fu } from "./events-5f626723.js";
function H0(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => n[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
var Hu = {},
  Zi = {},
  vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.walletLogo = void 0;
const W0 = (t, e) => {
  let r;
  switch (t) {
    case "standard":
      return (
        (r = e),
        `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
    case "circle":
      return (
        (r = e),
        `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
      );
    case "text":
      return (
        (r = (0.1 * e).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogo":
      return (
        (r = (0.25 * e).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    case "textLight":
      return (
        (r = (0.1 * e).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogoLight":
      return (
        (r = (0.25 * e).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    default:
      return (
        (r = e),
        `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
  }
};
vo.walletLogo = W0;
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.LINK_API_URL = void 0;
bo.LINK_API_URL = "https://www.walletlink.org";
var yo = {};
Object.defineProperty(yo, "__esModule", { value: !0 });
yo.ScopedLocalStorage = void 0;
class V0 {
  constructor(e) {
    this.scope = e;
  }
  setItem(e, r) {
    localStorage.setItem(this.scopedKey(e), r);
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e));
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e));
  }
  clear() {
    const e = this.scopedKey(""),
      r = [];
    for (let n = 0; n < localStorage.length; n++) {
      const i = localStorage.key(n);
      typeof i == "string" && i.startsWith(e) && r.push(i);
    }
    r.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(e) {
    return `${this.scope}:${e}`;
  }
}
yo.ScopedLocalStorage = V0;
var ni = {},
  wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
const U0 = Fu;
function Xc(t, e, r) {
  try {
    Reflect.apply(t, e, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function z0(t) {
  const e = t.length,
    r = new Array(e);
  for (let n = 0; n < e; n += 1) r[n] = t[n];
  return r;
}
let q0 = class extends U0.EventEmitter {
  emit(e, ...r) {
    let n = e === "error";
    const i = this._events;
    if (i !== void 0) n = n && i.error === void 0;
    else if (!n) return !1;
    if (n) {
      let o;
      if ((r.length > 0 && ([o] = r), o instanceof Error)) throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw ((a.context = o), a);
    }
    const s = i[e];
    if (s === void 0) return !1;
    if (typeof s == "function") Xc(s, this, r);
    else {
      const o = s.length,
        a = z0(s);
      for (let c = 0; c < o; c += 1) Xc(a[c], this, r);
    }
    return !0;
  }
};
wn.default = q0;
var ii = {},
  G0 = {
    get exports() {
      return ii;
    },
    set exports(t) {
      ii = t;
    },
  };
(function (t) {
  (function (e, r) {
    function n(w, u) {
      if (!w) throw new Error(u || "Assertion failed");
    }
    function i(w, u) {
      w.super_ = u;
      var h = function () {};
      (h.prototype = u.prototype),
        (w.prototype = new h()),
        (w.prototype.constructor = w);
    }
    function s(w, u, h) {
      if (s.isBN(w)) return w;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        w !== null &&
          ((u === "le" || u === "be") && ((h = u), (u = 10)),
          this._init(w || 0, u || 10, h || "be"));
    }
    typeof e == "object" ? (e.exports = s) : (r.BN = s),
      (s.BN = s),
      (s.wordSize = 26);
    var o;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (o = window.Buffer)
        : (o = po.Buffer);
    } catch {}
    (s.isBN = function (u) {
      return u instanceof s
        ? !0
        : u !== null &&
            typeof u == "object" &&
            u.constructor.wordSize === s.wordSize &&
            Array.isArray(u.words);
    }),
      (s.max = function (u, h) {
        return u.cmp(h) > 0 ? u : h;
      }),
      (s.min = function (u, h) {
        return u.cmp(h) < 0 ? u : h;
      }),
      (s.prototype._init = function (u, h, m) {
        if (typeof u == "number") return this._initNumber(u, h, m);
        if (typeof u == "object") return this._initArray(u, h, m);
        h === "hex" && (h = 16),
          n(h === (h | 0) && h >= 2 && h <= 36),
          (u = u.toString().replace(/\s+/g, ""));
        var g = 0;
        u[0] === "-" && (g++, (this.negative = 1)),
          g < u.length &&
            (h === 16
              ? this._parseHex(u, g, m)
              : (this._parseBase(u, h, g),
                m === "le" && this._initArray(this.toArray(), h, m)));
      }),
      (s.prototype._initNumber = function (u, h, m) {
        u < 0 && ((this.negative = 1), (u = -u)),
          u < 67108864
            ? ((this.words = [u & 67108863]), (this.length = 1))
            : u < 4503599627370496
            ? ((this.words = [u & 67108863, (u / 67108864) & 67108863]),
              (this.length = 2))
            : (n(u < 9007199254740992),
              (this.words = [u & 67108863, (u / 67108864) & 67108863, 1]),
              (this.length = 3)),
          m === "le" && this._initArray(this.toArray(), h, m);
      }),
      (s.prototype._initArray = function (u, h, m) {
        if ((n(typeof u.length == "number"), u.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(u.length / 3)),
          (this.words = new Array(this.length));
        for (var g = 0; g < this.length; g++) this.words[g] = 0;
        var v,
          _,
          M = 0;
        if (m === "be")
          for (g = u.length - 1, v = 0; g >= 0; g -= 3)
            (_ = u[g] | (u[g - 1] << 8) | (u[g - 2] << 16)),
              (this.words[v] |= (_ << M) & 67108863),
              (this.words[v + 1] = (_ >>> (26 - M)) & 67108863),
              (M += 24),
              M >= 26 && ((M -= 26), v++);
        else if (m === "le")
          for (g = 0, v = 0; g < u.length; g += 3)
            (_ = u[g] | (u[g + 1] << 8) | (u[g + 2] << 16)),
              (this.words[v] |= (_ << M) & 67108863),
              (this.words[v + 1] = (_ >>> (26 - M)) & 67108863),
              (M += 24),
              M >= 26 && ((M -= 26), v++);
        return this._strip();
      });
    function a(w, u) {
      var h = w.charCodeAt(u);
      if (h >= 48 && h <= 57) return h - 48;
      if (h >= 65 && h <= 70) return h - 55;
      if (h >= 97 && h <= 102) return h - 87;
      n(!1, "Invalid character in " + w);
    }
    function c(w, u, h) {
      var m = a(w, h);
      return h - 1 >= u && (m |= a(w, h - 1) << 4), m;
    }
    s.prototype._parseHex = function (u, h, m) {
      (this.length = Math.ceil((u.length - h) / 6)),
        (this.words = new Array(this.length));
      for (var g = 0; g < this.length; g++) this.words[g] = 0;
      var v = 0,
        _ = 0,
        M;
      if (m === "be")
        for (g = u.length - 1; g >= h; g -= 2)
          (M = c(u, h, g) << v),
            (this.words[_] |= M & 67108863),
            v >= 18
              ? ((v -= 18), (_ += 1), (this.words[_] |= M >>> 26))
              : (v += 8);
      else {
        var y = u.length - h;
        for (g = y % 2 === 0 ? h + 1 : h; g < u.length; g += 2)
          (M = c(u, h, g) << v),
            (this.words[_] |= M & 67108863),
            v >= 18
              ? ((v -= 18), (_ += 1), (this.words[_] |= M >>> 26))
              : (v += 8);
      }
      this._strip();
    };
    function f(w, u, h, m) {
      for (var g = 0, v = 0, _ = Math.min(w.length, h), M = u; M < _; M++) {
        var y = w.charCodeAt(M) - 48;
        (g *= m),
          y >= 49 ? (v = y - 49 + 10) : y >= 17 ? (v = y - 17 + 10) : (v = y),
          n(y >= 0 && v < m, "Invalid character"),
          (g += v);
      }
      return g;
    }
    (s.prototype._parseBase = function (u, h, m) {
      (this.words = [0]), (this.length = 1);
      for (var g = 0, v = 1; v <= 67108863; v *= h) g++;
      g--, (v = (v / h) | 0);
      for (
        var _ = u.length - m,
          M = _ % g,
          y = Math.min(_, _ - M) + m,
          l = 0,
          S = m;
        S < y;
        S += g
      )
        (l = f(u, S, S + g, h)),
          this.imuln(v),
          this.words[0] + l < 67108864 ? (this.words[0] += l) : this._iaddn(l);
      if (M !== 0) {
        var B = 1;
        for (l = f(u, S, u.length, h), S = 0; S < M; S++) B *= h;
        this.imuln(B),
          this.words[0] + l < 67108864 ? (this.words[0] += l) : this._iaddn(l);
      }
      this._strip();
    }),
      (s.prototype.copy = function (u) {
        u.words = new Array(this.length);
        for (var h = 0; h < this.length; h++) u.words[h] = this.words[h];
        (u.length = this.length),
          (u.negative = this.negative),
          (u.red = this.red);
      });
    function d(w, u) {
      (w.words = u.words),
        (w.length = u.length),
        (w.negative = u.negative),
        (w.red = u.red);
    }
    if (
      ((s.prototype._move = function (u) {
        d(u, this);
      }),
      (s.prototype.clone = function () {
        var u = new s(null);
        return this.copy(u), u;
      }),
      (s.prototype._expand = function (u) {
        for (; this.length < u; ) this.words[this.length++] = 0;
        return this;
      }),
      (s.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (s.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        s.prototype[Symbol.for("nodejs.util.inspect.custom")] = p;
      } catch {
        s.prototype.inspect = p;
      }
    else s.prototype.inspect = p;
    function p() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var b = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      E = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      R = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (s.prototype.toString = function (u, h) {
      (u = u || 10), (h = h | 0 || 1);
      var m;
      if (u === 16 || u === "hex") {
        m = "";
        for (var g = 0, v = 0, _ = 0; _ < this.length; _++) {
          var M = this.words[_],
            y = (((M << g) | v) & 16777215).toString(16);
          (v = (M >>> (24 - g)) & 16777215),
            (g += 2),
            g >= 26 && ((g -= 26), _--),
            v !== 0 || _ !== this.length - 1
              ? (m = b[6 - y.length] + y + m)
              : (m = y + m);
        }
        for (v !== 0 && (m = v.toString(16) + m); m.length % h !== 0; )
          m = "0" + m;
        return this.negative !== 0 && (m = "-" + m), m;
      }
      if (u === (u | 0) && u >= 2 && u <= 36) {
        var l = E[u],
          S = R[u];
        m = "";
        var B = this.clone();
        for (B.negative = 0; !B.isZero(); ) {
          var z = B.modrn(S).toString(u);
          (B = B.idivn(S)),
            B.isZero() ? (m = z + m) : (m = b[l - z.length] + z + m);
        }
        for (this.isZero() && (m = "0" + m); m.length % h !== 0; ) m = "0" + m;
        return this.negative !== 0 && (m = "-" + m), m;
      }
      n(!1, "Base should be between 2 and 36");
    }),
      (s.prototype.toNumber = function () {
        var u = this.words[0];
        return (
          this.length === 2
            ? (u += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (u += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              n(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -u : u
        );
      }),
      (s.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      o &&
        (s.prototype.toBuffer = function (u, h) {
          return this.toArrayLike(o, u, h);
        }),
      (s.prototype.toArray = function (u, h) {
        return this.toArrayLike(Array, u, h);
      });
    var O = function (u, h) {
      return u.allocUnsafe ? u.allocUnsafe(h) : new u(h);
    };
    (s.prototype.toArrayLike = function (u, h, m) {
      this._strip();
      var g = this.byteLength(),
        v = m || Math.max(1, g);
      n(g <= v, "byte array longer than desired length"),
        n(v > 0, "Requested array length <= 0");
      var _ = O(u, v),
        M = h === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M](_, g), _;
    }),
      (s.prototype._toArrayLikeLE = function (u, h) {
        for (var m = 0, g = 0, v = 0, _ = 0; v < this.length; v++) {
          var M = (this.words[v] << _) | g;
          (u[m++] = M & 255),
            m < u.length && (u[m++] = (M >> 8) & 255),
            m < u.length && (u[m++] = (M >> 16) & 255),
            _ === 6
              ? (m < u.length && (u[m++] = (M >> 24) & 255), (g = 0), (_ = 0))
              : ((g = M >>> 24), (_ += 2));
        }
        if (m < u.length) for (u[m++] = g; m < u.length; ) u[m++] = 0;
      }),
      (s.prototype._toArrayLikeBE = function (u, h) {
        for (var m = u.length - 1, g = 0, v = 0, _ = 0; v < this.length; v++) {
          var M = (this.words[v] << _) | g;
          (u[m--] = M & 255),
            m >= 0 && (u[m--] = (M >> 8) & 255),
            m >= 0 && (u[m--] = (M >> 16) & 255),
            _ === 6
              ? (m >= 0 && (u[m--] = (M >> 24) & 255), (g = 0), (_ = 0))
              : ((g = M >>> 24), (_ += 2));
        }
        if (m >= 0) for (u[m--] = g; m >= 0; ) u[m--] = 0;
      }),
      Math.clz32
        ? (s.prototype._countBits = function (u) {
            return 32 - Math.clz32(u);
          })
        : (s.prototype._countBits = function (u) {
            var h = u,
              m = 0;
            return (
              h >= 4096 && ((m += 13), (h >>>= 13)),
              h >= 64 && ((m += 7), (h >>>= 7)),
              h >= 8 && ((m += 4), (h >>>= 4)),
              h >= 2 && ((m += 2), (h >>>= 2)),
              m + h
            );
          }),
      (s.prototype._zeroBits = function (u) {
        if (u === 0) return 26;
        var h = u,
          m = 0;
        return (
          h & 8191 || ((m += 13), (h >>>= 13)),
          h & 127 || ((m += 7), (h >>>= 7)),
          h & 15 || ((m += 4), (h >>>= 4)),
          h & 3 || ((m += 2), (h >>>= 2)),
          h & 1 || m++,
          m
        );
      }),
      (s.prototype.bitLength = function () {
        var u = this.words[this.length - 1],
          h = this._countBits(u);
        return (this.length - 1) * 26 + h;
      });
    function $(w) {
      for (var u = new Array(w.bitLength()), h = 0; h < u.length; h++) {
        var m = (h / 26) | 0,
          g = h % 26;
        u[h] = (w.words[m] >>> g) & 1;
      }
      return u;
    }
    (s.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var u = 0, h = 0; h < this.length; h++) {
        var m = this._zeroBits(this.words[h]);
        if (((u += m), m !== 26)) break;
      }
      return u;
    }),
      (s.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (s.prototype.toTwos = function (u) {
        return this.negative !== 0
          ? this.abs().inotn(u).iaddn(1)
          : this.clone();
      }),
      (s.prototype.fromTwos = function (u) {
        return this.testn(u - 1) ? this.notn(u).iaddn(1).ineg() : this.clone();
      }),
      (s.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (s.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (s.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (s.prototype.iuor = function (u) {
        for (; this.length < u.length; ) this.words[this.length++] = 0;
        for (var h = 0; h < u.length; h++)
          this.words[h] = this.words[h] | u.words[h];
        return this._strip();
      }),
      (s.prototype.ior = function (u) {
        return n((this.negative | u.negative) === 0), this.iuor(u);
      }),
      (s.prototype.or = function (u) {
        return this.length > u.length
          ? this.clone().ior(u)
          : u.clone().ior(this);
      }),
      (s.prototype.uor = function (u) {
        return this.length > u.length
          ? this.clone().iuor(u)
          : u.clone().iuor(this);
      }),
      (s.prototype.iuand = function (u) {
        var h;
        this.length > u.length ? (h = u) : (h = this);
        for (var m = 0; m < h.length; m++)
          this.words[m] = this.words[m] & u.words[m];
        return (this.length = h.length), this._strip();
      }),
      (s.prototype.iand = function (u) {
        return n((this.negative | u.negative) === 0), this.iuand(u);
      }),
      (s.prototype.and = function (u) {
        return this.length > u.length
          ? this.clone().iand(u)
          : u.clone().iand(this);
      }),
      (s.prototype.uand = function (u) {
        return this.length > u.length
          ? this.clone().iuand(u)
          : u.clone().iuand(this);
      }),
      (s.prototype.iuxor = function (u) {
        var h, m;
        this.length > u.length ? ((h = this), (m = u)) : ((h = u), (m = this));
        for (var g = 0; g < m.length; g++)
          this.words[g] = h.words[g] ^ m.words[g];
        if (this !== h) for (; g < h.length; g++) this.words[g] = h.words[g];
        return (this.length = h.length), this._strip();
      }),
      (s.prototype.ixor = function (u) {
        return n((this.negative | u.negative) === 0), this.iuxor(u);
      }),
      (s.prototype.xor = function (u) {
        return this.length > u.length
          ? this.clone().ixor(u)
          : u.clone().ixor(this);
      }),
      (s.prototype.uxor = function (u) {
        return this.length > u.length
          ? this.clone().iuxor(u)
          : u.clone().iuxor(this);
      }),
      (s.prototype.inotn = function (u) {
        n(typeof u == "number" && u >= 0);
        var h = Math.ceil(u / 26) | 0,
          m = u % 26;
        this._expand(h), m > 0 && h--;
        for (var g = 0; g < h; g++) this.words[g] = ~this.words[g] & 67108863;
        return (
          m > 0 && (this.words[g] = ~this.words[g] & (67108863 >> (26 - m))),
          this._strip()
        );
      }),
      (s.prototype.notn = function (u) {
        return this.clone().inotn(u);
      }),
      (s.prototype.setn = function (u, h) {
        n(typeof u == "number" && u >= 0);
        var m = (u / 26) | 0,
          g = u % 26;
        return (
          this._expand(m + 1),
          h
            ? (this.words[m] = this.words[m] | (1 << g))
            : (this.words[m] = this.words[m] & ~(1 << g)),
          this._strip()
        );
      }),
      (s.prototype.iadd = function (u) {
        var h;
        if (this.negative !== 0 && u.negative === 0)
          return (
            (this.negative = 0),
            (h = this.isub(u)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && u.negative !== 0)
          return (
            (u.negative = 0),
            (h = this.isub(u)),
            (u.negative = 1),
            h._normSign()
          );
        var m, g;
        this.length > u.length ? ((m = this), (g = u)) : ((m = u), (g = this));
        for (var v = 0, _ = 0; _ < g.length; _++)
          (h = (m.words[_] | 0) + (g.words[_] | 0) + v),
            (this.words[_] = h & 67108863),
            (v = h >>> 26);
        for (; v !== 0 && _ < m.length; _++)
          (h = (m.words[_] | 0) + v),
            (this.words[_] = h & 67108863),
            (v = h >>> 26);
        if (((this.length = m.length), v !== 0))
          (this.words[this.length] = v), this.length++;
        else if (m !== this)
          for (; _ < m.length; _++) this.words[_] = m.words[_];
        return this;
      }),
      (s.prototype.add = function (u) {
        var h;
        return u.negative !== 0 && this.negative === 0
          ? ((u.negative = 0), (h = this.sub(u)), (u.negative ^= 1), h)
          : u.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (h = u.sub(this)), (this.negative = 1), h)
          : this.length > u.length
          ? this.clone().iadd(u)
          : u.clone().iadd(this);
      }),
      (s.prototype.isub = function (u) {
        if (u.negative !== 0) {
          u.negative = 0;
          var h = this.iadd(u);
          return (u.negative = 1), h._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(u),
            (this.negative = 1),
            this._normSign()
          );
        var m = this.cmp(u);
        if (m === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var g, v;
        m > 0 ? ((g = this), (v = u)) : ((g = u), (v = this));
        for (var _ = 0, M = 0; M < v.length; M++)
          (h = (g.words[M] | 0) - (v.words[M] | 0) + _),
            (_ = h >> 26),
            (this.words[M] = h & 67108863);
        for (; _ !== 0 && M < g.length; M++)
          (h = (g.words[M] | 0) + _),
            (_ = h >> 26),
            (this.words[M] = h & 67108863);
        if (_ === 0 && M < g.length && g !== this)
          for (; M < g.length; M++) this.words[M] = g.words[M];
        return (
          (this.length = Math.max(this.length, M)),
          g !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (s.prototype.sub = function (u) {
        return this.clone().isub(u);
      });
    function I(w, u, h) {
      h.negative = u.negative ^ w.negative;
      var m = (w.length + u.length) | 0;
      (h.length = m), (m = (m - 1) | 0);
      var g = w.words[0] | 0,
        v = u.words[0] | 0,
        _ = g * v,
        M = _ & 67108863,
        y = (_ / 67108864) | 0;
      h.words[0] = M;
      for (var l = 1; l < m; l++) {
        for (
          var S = y >>> 26,
            B = y & 67108863,
            z = Math.min(l, u.length - 1),
            A = Math.max(0, l - w.length + 1);
          A <= z;
          A++
        ) {
          var T = (l - A) | 0;
          (g = w.words[T] | 0),
            (v = u.words[A] | 0),
            (_ = g * v + B),
            (S += (_ / 67108864) | 0),
            (B = _ & 67108863);
        }
        (h.words[l] = B | 0), (y = S | 0);
      }
      return y !== 0 ? (h.words[l] = y | 0) : h.length--, h._strip();
    }
    var k = function (u, h, m) {
      var g = u.words,
        v = h.words,
        _ = m.words,
        M = 0,
        y,
        l,
        S,
        B = g[0] | 0,
        z = B & 8191,
        A = B >>> 13,
        T = g[1] | 0,
        P = T & 8191,
        W = T >>> 13,
        ee = g[2] | 0,
        x = ee & 8191,
        C = ee >>> 13,
        j = g[3] | 0,
        V = j & 8191,
        ne = j >>> 13,
        oe = g[4] | 0,
        te = oe & 8191,
        pe = oe >>> 13,
        Xt = g[5] | 0,
        Se = Xt & 8191,
        xe = Xt >>> 13,
        xr = g[6] | 0,
        ye = xr & 8191,
        me = xr >>> 13,
        dr = g[7] | 0,
        be = dr & 8191,
        ge = dr >>> 13,
        Rt = g[8] | 0,
        Me = Rt & 8191,
        Ce = Rt >>> 13,
        An = g[9] | 0,
        Re = An & 8191,
        Ie = An >>> 13,
        kn = v[0] | 0,
        Ae = kn & 8191,
        ke = kn >>> 13,
        Tn = v[1] | 0,
        Te = Tn & 8191,
        Oe = Tn >>> 13,
        On = v[2] | 0,
        Ne = On & 8191,
        Le = On >>> 13,
        Nn = v[3] | 0,
        Pe = Nn & 8191,
        $e = Nn >>> 13,
        Ln = v[4] | 0,
        De = Ln & 8191,
        je = Ln >>> 13,
        Pn = v[5] | 0,
        Be = Pn & 8191,
        Fe = Pn >>> 13,
        $n = v[6] | 0,
        He = $n & 8191,
        We = $n >>> 13,
        Dn = v[7] | 0,
        Ve = Dn & 8191,
        Ue = Dn >>> 13,
        jn = v[8] | 0,
        ze = jn & 8191,
        qe = jn >>> 13,
        Bn = v[9] | 0,
        Ge = Bn & 8191,
        Je = Bn >>> 13;
      (m.negative = u.negative ^ h.negative),
        (m.length = 19),
        (y = Math.imul(z, Ae)),
        (l = Math.imul(z, ke)),
        (l = (l + Math.imul(A, Ae)) | 0),
        (S = Math.imul(A, ke));
      var Wr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Wr >>> 26)) | 0),
        (Wr &= 67108863),
        (y = Math.imul(P, Ae)),
        (l = Math.imul(P, ke)),
        (l = (l + Math.imul(W, Ae)) | 0),
        (S = Math.imul(W, ke)),
        (y = (y + Math.imul(z, Te)) | 0),
        (l = (l + Math.imul(z, Oe)) | 0),
        (l = (l + Math.imul(A, Te)) | 0),
        (S = (S + Math.imul(A, Oe)) | 0);
      var Vr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Vr >>> 26)) | 0),
        (Vr &= 67108863),
        (y = Math.imul(x, Ae)),
        (l = Math.imul(x, ke)),
        (l = (l + Math.imul(C, Ae)) | 0),
        (S = Math.imul(C, ke)),
        (y = (y + Math.imul(P, Te)) | 0),
        (l = (l + Math.imul(P, Oe)) | 0),
        (l = (l + Math.imul(W, Te)) | 0),
        (S = (S + Math.imul(W, Oe)) | 0),
        (y = (y + Math.imul(z, Ne)) | 0),
        (l = (l + Math.imul(z, Le)) | 0),
        (l = (l + Math.imul(A, Ne)) | 0),
        (S = (S + Math.imul(A, Le)) | 0);
      var Ur = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Ur >>> 26)) | 0),
        (Ur &= 67108863),
        (y = Math.imul(V, Ae)),
        (l = Math.imul(V, ke)),
        (l = (l + Math.imul(ne, Ae)) | 0),
        (S = Math.imul(ne, ke)),
        (y = (y + Math.imul(x, Te)) | 0),
        (l = (l + Math.imul(x, Oe)) | 0),
        (l = (l + Math.imul(C, Te)) | 0),
        (S = (S + Math.imul(C, Oe)) | 0),
        (y = (y + Math.imul(P, Ne)) | 0),
        (l = (l + Math.imul(P, Le)) | 0),
        (l = (l + Math.imul(W, Ne)) | 0),
        (S = (S + Math.imul(W, Le)) | 0),
        (y = (y + Math.imul(z, Pe)) | 0),
        (l = (l + Math.imul(z, $e)) | 0),
        (l = (l + Math.imul(A, Pe)) | 0),
        (S = (S + Math.imul(A, $e)) | 0);
      var zr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (zr >>> 26)) | 0),
        (zr &= 67108863),
        (y = Math.imul(te, Ae)),
        (l = Math.imul(te, ke)),
        (l = (l + Math.imul(pe, Ae)) | 0),
        (S = Math.imul(pe, ke)),
        (y = (y + Math.imul(V, Te)) | 0),
        (l = (l + Math.imul(V, Oe)) | 0),
        (l = (l + Math.imul(ne, Te)) | 0),
        (S = (S + Math.imul(ne, Oe)) | 0),
        (y = (y + Math.imul(x, Ne)) | 0),
        (l = (l + Math.imul(x, Le)) | 0),
        (l = (l + Math.imul(C, Ne)) | 0),
        (S = (S + Math.imul(C, Le)) | 0),
        (y = (y + Math.imul(P, Pe)) | 0),
        (l = (l + Math.imul(P, $e)) | 0),
        (l = (l + Math.imul(W, Pe)) | 0),
        (S = (S + Math.imul(W, $e)) | 0),
        (y = (y + Math.imul(z, De)) | 0),
        (l = (l + Math.imul(z, je)) | 0),
        (l = (l + Math.imul(A, De)) | 0),
        (S = (S + Math.imul(A, je)) | 0);
      var qr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (qr >>> 26)) | 0),
        (qr &= 67108863),
        (y = Math.imul(Se, Ae)),
        (l = Math.imul(Se, ke)),
        (l = (l + Math.imul(xe, Ae)) | 0),
        (S = Math.imul(xe, ke)),
        (y = (y + Math.imul(te, Te)) | 0),
        (l = (l + Math.imul(te, Oe)) | 0),
        (l = (l + Math.imul(pe, Te)) | 0),
        (S = (S + Math.imul(pe, Oe)) | 0),
        (y = (y + Math.imul(V, Ne)) | 0),
        (l = (l + Math.imul(V, Le)) | 0),
        (l = (l + Math.imul(ne, Ne)) | 0),
        (S = (S + Math.imul(ne, Le)) | 0),
        (y = (y + Math.imul(x, Pe)) | 0),
        (l = (l + Math.imul(x, $e)) | 0),
        (l = (l + Math.imul(C, Pe)) | 0),
        (S = (S + Math.imul(C, $e)) | 0),
        (y = (y + Math.imul(P, De)) | 0),
        (l = (l + Math.imul(P, je)) | 0),
        (l = (l + Math.imul(W, De)) | 0),
        (S = (S + Math.imul(W, je)) | 0),
        (y = (y + Math.imul(z, Be)) | 0),
        (l = (l + Math.imul(z, Fe)) | 0),
        (l = (l + Math.imul(A, Be)) | 0),
        (S = (S + Math.imul(A, Fe)) | 0);
      var Gr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Gr >>> 26)) | 0),
        (Gr &= 67108863),
        (y = Math.imul(ye, Ae)),
        (l = Math.imul(ye, ke)),
        (l = (l + Math.imul(me, Ae)) | 0),
        (S = Math.imul(me, ke)),
        (y = (y + Math.imul(Se, Te)) | 0),
        (l = (l + Math.imul(Se, Oe)) | 0),
        (l = (l + Math.imul(xe, Te)) | 0),
        (S = (S + Math.imul(xe, Oe)) | 0),
        (y = (y + Math.imul(te, Ne)) | 0),
        (l = (l + Math.imul(te, Le)) | 0),
        (l = (l + Math.imul(pe, Ne)) | 0),
        (S = (S + Math.imul(pe, Le)) | 0),
        (y = (y + Math.imul(V, Pe)) | 0),
        (l = (l + Math.imul(V, $e)) | 0),
        (l = (l + Math.imul(ne, Pe)) | 0),
        (S = (S + Math.imul(ne, $e)) | 0),
        (y = (y + Math.imul(x, De)) | 0),
        (l = (l + Math.imul(x, je)) | 0),
        (l = (l + Math.imul(C, De)) | 0),
        (S = (S + Math.imul(C, je)) | 0),
        (y = (y + Math.imul(P, Be)) | 0),
        (l = (l + Math.imul(P, Fe)) | 0),
        (l = (l + Math.imul(W, Be)) | 0),
        (S = (S + Math.imul(W, Fe)) | 0),
        (y = (y + Math.imul(z, He)) | 0),
        (l = (l + Math.imul(z, We)) | 0),
        (l = (l + Math.imul(A, He)) | 0),
        (S = (S + Math.imul(A, We)) | 0);
      var Jr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Jr >>> 26)) | 0),
        (Jr &= 67108863),
        (y = Math.imul(be, Ae)),
        (l = Math.imul(be, ke)),
        (l = (l + Math.imul(ge, Ae)) | 0),
        (S = Math.imul(ge, ke)),
        (y = (y + Math.imul(ye, Te)) | 0),
        (l = (l + Math.imul(ye, Oe)) | 0),
        (l = (l + Math.imul(me, Te)) | 0),
        (S = (S + Math.imul(me, Oe)) | 0),
        (y = (y + Math.imul(Se, Ne)) | 0),
        (l = (l + Math.imul(Se, Le)) | 0),
        (l = (l + Math.imul(xe, Ne)) | 0),
        (S = (S + Math.imul(xe, Le)) | 0),
        (y = (y + Math.imul(te, Pe)) | 0),
        (l = (l + Math.imul(te, $e)) | 0),
        (l = (l + Math.imul(pe, Pe)) | 0),
        (S = (S + Math.imul(pe, $e)) | 0),
        (y = (y + Math.imul(V, De)) | 0),
        (l = (l + Math.imul(V, je)) | 0),
        (l = (l + Math.imul(ne, De)) | 0),
        (S = (S + Math.imul(ne, je)) | 0),
        (y = (y + Math.imul(x, Be)) | 0),
        (l = (l + Math.imul(x, Fe)) | 0),
        (l = (l + Math.imul(C, Be)) | 0),
        (S = (S + Math.imul(C, Fe)) | 0),
        (y = (y + Math.imul(P, He)) | 0),
        (l = (l + Math.imul(P, We)) | 0),
        (l = (l + Math.imul(W, He)) | 0),
        (S = (S + Math.imul(W, We)) | 0),
        (y = (y + Math.imul(z, Ve)) | 0),
        (l = (l + Math.imul(z, Ue)) | 0),
        (l = (l + Math.imul(A, Ve)) | 0),
        (S = (S + Math.imul(A, Ue)) | 0);
      var Zr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Zr >>> 26)) | 0),
        (Zr &= 67108863),
        (y = Math.imul(Me, Ae)),
        (l = Math.imul(Me, ke)),
        (l = (l + Math.imul(Ce, Ae)) | 0),
        (S = Math.imul(Ce, ke)),
        (y = (y + Math.imul(be, Te)) | 0),
        (l = (l + Math.imul(be, Oe)) | 0),
        (l = (l + Math.imul(ge, Te)) | 0),
        (S = (S + Math.imul(ge, Oe)) | 0),
        (y = (y + Math.imul(ye, Ne)) | 0),
        (l = (l + Math.imul(ye, Le)) | 0),
        (l = (l + Math.imul(me, Ne)) | 0),
        (S = (S + Math.imul(me, Le)) | 0),
        (y = (y + Math.imul(Se, Pe)) | 0),
        (l = (l + Math.imul(Se, $e)) | 0),
        (l = (l + Math.imul(xe, Pe)) | 0),
        (S = (S + Math.imul(xe, $e)) | 0),
        (y = (y + Math.imul(te, De)) | 0),
        (l = (l + Math.imul(te, je)) | 0),
        (l = (l + Math.imul(pe, De)) | 0),
        (S = (S + Math.imul(pe, je)) | 0),
        (y = (y + Math.imul(V, Be)) | 0),
        (l = (l + Math.imul(V, Fe)) | 0),
        (l = (l + Math.imul(ne, Be)) | 0),
        (S = (S + Math.imul(ne, Fe)) | 0),
        (y = (y + Math.imul(x, He)) | 0),
        (l = (l + Math.imul(x, We)) | 0),
        (l = (l + Math.imul(C, He)) | 0),
        (S = (S + Math.imul(C, We)) | 0),
        (y = (y + Math.imul(P, Ve)) | 0),
        (l = (l + Math.imul(P, Ue)) | 0),
        (l = (l + Math.imul(W, Ve)) | 0),
        (S = (S + Math.imul(W, Ue)) | 0),
        (y = (y + Math.imul(z, ze)) | 0),
        (l = (l + Math.imul(z, qe)) | 0),
        (l = (l + Math.imul(A, ze)) | 0),
        (S = (S + Math.imul(A, qe)) | 0);
      var Qr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Qr >>> 26)) | 0),
        (Qr &= 67108863),
        (y = Math.imul(Re, Ae)),
        (l = Math.imul(Re, ke)),
        (l = (l + Math.imul(Ie, Ae)) | 0),
        (S = Math.imul(Ie, ke)),
        (y = (y + Math.imul(Me, Te)) | 0),
        (l = (l + Math.imul(Me, Oe)) | 0),
        (l = (l + Math.imul(Ce, Te)) | 0),
        (S = (S + Math.imul(Ce, Oe)) | 0),
        (y = (y + Math.imul(be, Ne)) | 0),
        (l = (l + Math.imul(be, Le)) | 0),
        (l = (l + Math.imul(ge, Ne)) | 0),
        (S = (S + Math.imul(ge, Le)) | 0),
        (y = (y + Math.imul(ye, Pe)) | 0),
        (l = (l + Math.imul(ye, $e)) | 0),
        (l = (l + Math.imul(me, Pe)) | 0),
        (S = (S + Math.imul(me, $e)) | 0),
        (y = (y + Math.imul(Se, De)) | 0),
        (l = (l + Math.imul(Se, je)) | 0),
        (l = (l + Math.imul(xe, De)) | 0),
        (S = (S + Math.imul(xe, je)) | 0),
        (y = (y + Math.imul(te, Be)) | 0),
        (l = (l + Math.imul(te, Fe)) | 0),
        (l = (l + Math.imul(pe, Be)) | 0),
        (S = (S + Math.imul(pe, Fe)) | 0),
        (y = (y + Math.imul(V, He)) | 0),
        (l = (l + Math.imul(V, We)) | 0),
        (l = (l + Math.imul(ne, He)) | 0),
        (S = (S + Math.imul(ne, We)) | 0),
        (y = (y + Math.imul(x, Ve)) | 0),
        (l = (l + Math.imul(x, Ue)) | 0),
        (l = (l + Math.imul(C, Ve)) | 0),
        (S = (S + Math.imul(C, Ue)) | 0),
        (y = (y + Math.imul(P, ze)) | 0),
        (l = (l + Math.imul(P, qe)) | 0),
        (l = (l + Math.imul(W, ze)) | 0),
        (S = (S + Math.imul(W, qe)) | 0),
        (y = (y + Math.imul(z, Ge)) | 0),
        (l = (l + Math.imul(z, Je)) | 0),
        (l = (l + Math.imul(A, Ge)) | 0),
        (S = (S + Math.imul(A, Je)) | 0);
      var Yr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Yr >>> 26)) | 0),
        (Yr &= 67108863),
        (y = Math.imul(Re, Te)),
        (l = Math.imul(Re, Oe)),
        (l = (l + Math.imul(Ie, Te)) | 0),
        (S = Math.imul(Ie, Oe)),
        (y = (y + Math.imul(Me, Ne)) | 0),
        (l = (l + Math.imul(Me, Le)) | 0),
        (l = (l + Math.imul(Ce, Ne)) | 0),
        (S = (S + Math.imul(Ce, Le)) | 0),
        (y = (y + Math.imul(be, Pe)) | 0),
        (l = (l + Math.imul(be, $e)) | 0),
        (l = (l + Math.imul(ge, Pe)) | 0),
        (S = (S + Math.imul(ge, $e)) | 0),
        (y = (y + Math.imul(ye, De)) | 0),
        (l = (l + Math.imul(ye, je)) | 0),
        (l = (l + Math.imul(me, De)) | 0),
        (S = (S + Math.imul(me, je)) | 0),
        (y = (y + Math.imul(Se, Be)) | 0),
        (l = (l + Math.imul(Se, Fe)) | 0),
        (l = (l + Math.imul(xe, Be)) | 0),
        (S = (S + Math.imul(xe, Fe)) | 0),
        (y = (y + Math.imul(te, He)) | 0),
        (l = (l + Math.imul(te, We)) | 0),
        (l = (l + Math.imul(pe, He)) | 0),
        (S = (S + Math.imul(pe, We)) | 0),
        (y = (y + Math.imul(V, Ve)) | 0),
        (l = (l + Math.imul(V, Ue)) | 0),
        (l = (l + Math.imul(ne, Ve)) | 0),
        (S = (S + Math.imul(ne, Ue)) | 0),
        (y = (y + Math.imul(x, ze)) | 0),
        (l = (l + Math.imul(x, qe)) | 0),
        (l = (l + Math.imul(C, ze)) | 0),
        (S = (S + Math.imul(C, qe)) | 0),
        (y = (y + Math.imul(P, Ge)) | 0),
        (l = (l + Math.imul(P, Je)) | 0),
        (l = (l + Math.imul(W, Ge)) | 0),
        (S = (S + Math.imul(W, Je)) | 0);
      var Kr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Kr >>> 26)) | 0),
        (Kr &= 67108863),
        (y = Math.imul(Re, Ne)),
        (l = Math.imul(Re, Le)),
        (l = (l + Math.imul(Ie, Ne)) | 0),
        (S = Math.imul(Ie, Le)),
        (y = (y + Math.imul(Me, Pe)) | 0),
        (l = (l + Math.imul(Me, $e)) | 0),
        (l = (l + Math.imul(Ce, Pe)) | 0),
        (S = (S + Math.imul(Ce, $e)) | 0),
        (y = (y + Math.imul(be, De)) | 0),
        (l = (l + Math.imul(be, je)) | 0),
        (l = (l + Math.imul(ge, De)) | 0),
        (S = (S + Math.imul(ge, je)) | 0),
        (y = (y + Math.imul(ye, Be)) | 0),
        (l = (l + Math.imul(ye, Fe)) | 0),
        (l = (l + Math.imul(me, Be)) | 0),
        (S = (S + Math.imul(me, Fe)) | 0),
        (y = (y + Math.imul(Se, He)) | 0),
        (l = (l + Math.imul(Se, We)) | 0),
        (l = (l + Math.imul(xe, He)) | 0),
        (S = (S + Math.imul(xe, We)) | 0),
        (y = (y + Math.imul(te, Ve)) | 0),
        (l = (l + Math.imul(te, Ue)) | 0),
        (l = (l + Math.imul(pe, Ve)) | 0),
        (S = (S + Math.imul(pe, Ue)) | 0),
        (y = (y + Math.imul(V, ze)) | 0),
        (l = (l + Math.imul(V, qe)) | 0),
        (l = (l + Math.imul(ne, ze)) | 0),
        (S = (S + Math.imul(ne, qe)) | 0),
        (y = (y + Math.imul(x, Ge)) | 0),
        (l = (l + Math.imul(x, Je)) | 0),
        (l = (l + Math.imul(C, Ge)) | 0),
        (S = (S + Math.imul(C, Je)) | 0);
      var Xr = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Xr >>> 26)) | 0),
        (Xr &= 67108863),
        (y = Math.imul(Re, Pe)),
        (l = Math.imul(Re, $e)),
        (l = (l + Math.imul(Ie, Pe)) | 0),
        (S = Math.imul(Ie, $e)),
        (y = (y + Math.imul(Me, De)) | 0),
        (l = (l + Math.imul(Me, je)) | 0),
        (l = (l + Math.imul(Ce, De)) | 0),
        (S = (S + Math.imul(Ce, je)) | 0),
        (y = (y + Math.imul(be, Be)) | 0),
        (l = (l + Math.imul(be, Fe)) | 0),
        (l = (l + Math.imul(ge, Be)) | 0),
        (S = (S + Math.imul(ge, Fe)) | 0),
        (y = (y + Math.imul(ye, He)) | 0),
        (l = (l + Math.imul(ye, We)) | 0),
        (l = (l + Math.imul(me, He)) | 0),
        (S = (S + Math.imul(me, We)) | 0),
        (y = (y + Math.imul(Se, Ve)) | 0),
        (l = (l + Math.imul(Se, Ue)) | 0),
        (l = (l + Math.imul(xe, Ve)) | 0),
        (S = (S + Math.imul(xe, Ue)) | 0),
        (y = (y + Math.imul(te, ze)) | 0),
        (l = (l + Math.imul(te, qe)) | 0),
        (l = (l + Math.imul(pe, ze)) | 0),
        (S = (S + Math.imul(pe, qe)) | 0),
        (y = (y + Math.imul(V, Ge)) | 0),
        (l = (l + Math.imul(V, Je)) | 0),
        (l = (l + Math.imul(ne, Ge)) | 0),
        (S = (S + Math.imul(ne, Je)) | 0);
      var en = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (en >>> 26)) | 0),
        (en &= 67108863),
        (y = Math.imul(Re, De)),
        (l = Math.imul(Re, je)),
        (l = (l + Math.imul(Ie, De)) | 0),
        (S = Math.imul(Ie, je)),
        (y = (y + Math.imul(Me, Be)) | 0),
        (l = (l + Math.imul(Me, Fe)) | 0),
        (l = (l + Math.imul(Ce, Be)) | 0),
        (S = (S + Math.imul(Ce, Fe)) | 0),
        (y = (y + Math.imul(be, He)) | 0),
        (l = (l + Math.imul(be, We)) | 0),
        (l = (l + Math.imul(ge, He)) | 0),
        (S = (S + Math.imul(ge, We)) | 0),
        (y = (y + Math.imul(ye, Ve)) | 0),
        (l = (l + Math.imul(ye, Ue)) | 0),
        (l = (l + Math.imul(me, Ve)) | 0),
        (S = (S + Math.imul(me, Ue)) | 0),
        (y = (y + Math.imul(Se, ze)) | 0),
        (l = (l + Math.imul(Se, qe)) | 0),
        (l = (l + Math.imul(xe, ze)) | 0),
        (S = (S + Math.imul(xe, qe)) | 0),
        (y = (y + Math.imul(te, Ge)) | 0),
        (l = (l + Math.imul(te, Je)) | 0),
        (l = (l + Math.imul(pe, Ge)) | 0),
        (S = (S + Math.imul(pe, Je)) | 0);
      var tn = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (tn >>> 26)) | 0),
        (tn &= 67108863),
        (y = Math.imul(Re, Be)),
        (l = Math.imul(Re, Fe)),
        (l = (l + Math.imul(Ie, Be)) | 0),
        (S = Math.imul(Ie, Fe)),
        (y = (y + Math.imul(Me, He)) | 0),
        (l = (l + Math.imul(Me, We)) | 0),
        (l = (l + Math.imul(Ce, He)) | 0),
        (S = (S + Math.imul(Ce, We)) | 0),
        (y = (y + Math.imul(be, Ve)) | 0),
        (l = (l + Math.imul(be, Ue)) | 0),
        (l = (l + Math.imul(ge, Ve)) | 0),
        (S = (S + Math.imul(ge, Ue)) | 0),
        (y = (y + Math.imul(ye, ze)) | 0),
        (l = (l + Math.imul(ye, qe)) | 0),
        (l = (l + Math.imul(me, ze)) | 0),
        (S = (S + Math.imul(me, qe)) | 0),
        (y = (y + Math.imul(Se, Ge)) | 0),
        (l = (l + Math.imul(Se, Je)) | 0),
        (l = (l + Math.imul(xe, Ge)) | 0),
        (S = (S + Math.imul(xe, Je)) | 0);
      var _a = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (_a >>> 26)) | 0),
        (_a &= 67108863),
        (y = Math.imul(Re, He)),
        (l = Math.imul(Re, We)),
        (l = (l + Math.imul(Ie, He)) | 0),
        (S = Math.imul(Ie, We)),
        (y = (y + Math.imul(Me, Ve)) | 0),
        (l = (l + Math.imul(Me, Ue)) | 0),
        (l = (l + Math.imul(Ce, Ve)) | 0),
        (S = (S + Math.imul(Ce, Ue)) | 0),
        (y = (y + Math.imul(be, ze)) | 0),
        (l = (l + Math.imul(be, qe)) | 0),
        (l = (l + Math.imul(ge, ze)) | 0),
        (S = (S + Math.imul(ge, qe)) | 0),
        (y = (y + Math.imul(ye, Ge)) | 0),
        (l = (l + Math.imul(ye, Je)) | 0),
        (l = (l + Math.imul(me, Ge)) | 0),
        (S = (S + Math.imul(me, Je)) | 0);
      var wa = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (wa >>> 26)) | 0),
        (wa &= 67108863),
        (y = Math.imul(Re, Ve)),
        (l = Math.imul(Re, Ue)),
        (l = (l + Math.imul(Ie, Ve)) | 0),
        (S = Math.imul(Ie, Ue)),
        (y = (y + Math.imul(Me, ze)) | 0),
        (l = (l + Math.imul(Me, qe)) | 0),
        (l = (l + Math.imul(Ce, ze)) | 0),
        (S = (S + Math.imul(Ce, qe)) | 0),
        (y = (y + Math.imul(be, Ge)) | 0),
        (l = (l + Math.imul(be, Je)) | 0),
        (l = (l + Math.imul(ge, Ge)) | 0),
        (S = (S + Math.imul(ge, Je)) | 0);
      var Sa = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Sa >>> 26)) | 0),
        (Sa &= 67108863),
        (y = Math.imul(Re, ze)),
        (l = Math.imul(Re, qe)),
        (l = (l + Math.imul(Ie, ze)) | 0),
        (S = Math.imul(Ie, qe)),
        (y = (y + Math.imul(Me, Ge)) | 0),
        (l = (l + Math.imul(Me, Je)) | 0),
        (l = (l + Math.imul(Ce, Ge)) | 0),
        (S = (S + Math.imul(Ce, Je)) | 0);
      var Ea = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      (M = (((S + (l >>> 13)) | 0) + (Ea >>> 26)) | 0),
        (Ea &= 67108863),
        (y = Math.imul(Re, Ge)),
        (l = Math.imul(Re, Je)),
        (l = (l + Math.imul(Ie, Ge)) | 0),
        (S = Math.imul(Ie, Je));
      var xa = (((M + y) | 0) + ((l & 8191) << 13)) | 0;
      return (
        (M = (((S + (l >>> 13)) | 0) + (xa >>> 26)) | 0),
        (xa &= 67108863),
        (_[0] = Wr),
        (_[1] = Vr),
        (_[2] = Ur),
        (_[3] = zr),
        (_[4] = qr),
        (_[5] = Gr),
        (_[6] = Jr),
        (_[7] = Zr),
        (_[8] = Qr),
        (_[9] = Yr),
        (_[10] = Kr),
        (_[11] = Xr),
        (_[12] = en),
        (_[13] = tn),
        (_[14] = _a),
        (_[15] = wa),
        (_[16] = Sa),
        (_[17] = Ea),
        (_[18] = xa),
        M !== 0 && ((_[19] = M), m.length++),
        m
      );
    };
    Math.imul || (k = I);
    function N(w, u, h) {
      (h.negative = u.negative ^ w.negative), (h.length = w.length + u.length);
      for (var m = 0, g = 0, v = 0; v < h.length - 1; v++) {
        var _ = g;
        g = 0;
        for (
          var M = m & 67108863,
            y = Math.min(v, u.length - 1),
            l = Math.max(0, v - w.length + 1);
          l <= y;
          l++
        ) {
          var S = v - l,
            B = w.words[S] | 0,
            z = u.words[l] | 0,
            A = B * z,
            T = A & 67108863;
          (_ = (_ + ((A / 67108864) | 0)) | 0),
            (T = (T + M) | 0),
            (M = T & 67108863),
            (_ = (_ + (T >>> 26)) | 0),
            (g += _ >>> 26),
            (_ &= 67108863);
        }
        (h.words[v] = M), (m = _), (_ = g);
      }
      return m !== 0 ? (h.words[v] = m) : h.length--, h._strip();
    }
    function D(w, u, h) {
      return N(w, u, h);
    }
    (s.prototype.mulTo = function (u, h) {
      var m,
        g = this.length + u.length;
      return (
        this.length === 10 && u.length === 10
          ? (m = k(this, u, h))
          : g < 63
          ? (m = I(this, u, h))
          : g < 1024
          ? (m = N(this, u, h))
          : (m = D(this, u, h)),
        m
      );
    }),
      (s.prototype.mul = function (u) {
        var h = new s(null);
        return (h.words = new Array(this.length + u.length)), this.mulTo(u, h);
      }),
      (s.prototype.mulf = function (u) {
        var h = new s(null);
        return (h.words = new Array(this.length + u.length)), D(this, u, h);
      }),
      (s.prototype.imul = function (u) {
        return this.clone().mulTo(u, this);
      }),
      (s.prototype.imuln = function (u) {
        var h = u < 0;
        h && (u = -u), n(typeof u == "number"), n(u < 67108864);
        for (var m = 0, g = 0; g < this.length; g++) {
          var v = (this.words[g] | 0) * u,
            _ = (v & 67108863) + (m & 67108863);
          (m >>= 26),
            (m += (v / 67108864) | 0),
            (m += _ >>> 26),
            (this.words[g] = _ & 67108863);
        }
        return (
          m !== 0 && ((this.words[g] = m), this.length++),
          h ? this.ineg() : this
        );
      }),
      (s.prototype.muln = function (u) {
        return this.clone().imuln(u);
      }),
      (s.prototype.sqr = function () {
        return this.mul(this);
      }),
      (s.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (s.prototype.pow = function (u) {
        var h = $(u);
        if (h.length === 0) return new s(1);
        for (var m = this, g = 0; g < h.length && h[g] === 0; g++, m = m.sqr());
        if (++g < h.length)
          for (var v = m.sqr(); g < h.length; g++, v = v.sqr())
            h[g] !== 0 && (m = m.mul(v));
        return m;
      }),
      (s.prototype.iushln = function (u) {
        n(typeof u == "number" && u >= 0);
        var h = u % 26,
          m = (u - h) / 26,
          g = (67108863 >>> (26 - h)) << (26 - h),
          v;
        if (h !== 0) {
          var _ = 0;
          for (v = 0; v < this.length; v++) {
            var M = this.words[v] & g,
              y = ((this.words[v] | 0) - M) << h;
            (this.words[v] = y | _), (_ = M >>> (26 - h));
          }
          _ && ((this.words[v] = _), this.length++);
        }
        if (m !== 0) {
          for (v = this.length - 1; v >= 0; v--)
            this.words[v + m] = this.words[v];
          for (v = 0; v < m; v++) this.words[v] = 0;
          this.length += m;
        }
        return this._strip();
      }),
      (s.prototype.ishln = function (u) {
        return n(this.negative === 0), this.iushln(u);
      }),
      (s.prototype.iushrn = function (u, h, m) {
        n(typeof u == "number" && u >= 0);
        var g;
        h ? (g = (h - (h % 26)) / 26) : (g = 0);
        var v = u % 26,
          _ = Math.min((u - v) / 26, this.length),
          M = 67108863 ^ ((67108863 >>> v) << v),
          y = m;
        if (((g -= _), (g = Math.max(0, g)), y)) {
          for (var l = 0; l < _; l++) y.words[l] = this.words[l];
          y.length = _;
        }
        if (_ !== 0)
          if (this.length > _)
            for (this.length -= _, l = 0; l < this.length; l++)
              this.words[l] = this.words[l + _];
          else (this.words[0] = 0), (this.length = 1);
        var S = 0;
        for (l = this.length - 1; l >= 0 && (S !== 0 || l >= g); l--) {
          var B = this.words[l] | 0;
          (this.words[l] = (S << (26 - v)) | (B >>> v)), (S = B & M);
        }
        return (
          y && S !== 0 && (y.words[y.length++] = S),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (s.prototype.ishrn = function (u, h, m) {
        return n(this.negative === 0), this.iushrn(u, h, m);
      }),
      (s.prototype.shln = function (u) {
        return this.clone().ishln(u);
      }),
      (s.prototype.ushln = function (u) {
        return this.clone().iushln(u);
      }),
      (s.prototype.shrn = function (u) {
        return this.clone().ishrn(u);
      }),
      (s.prototype.ushrn = function (u) {
        return this.clone().iushrn(u);
      }),
      (s.prototype.testn = function (u) {
        n(typeof u == "number" && u >= 0);
        var h = u % 26,
          m = (u - h) / 26,
          g = 1 << h;
        if (this.length <= m) return !1;
        var v = this.words[m];
        return !!(v & g);
      }),
      (s.prototype.imaskn = function (u) {
        n(typeof u == "number" && u >= 0);
        var h = u % 26,
          m = (u - h) / 26;
        if (
          (n(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= m)
        )
          return this;
        if (
          (h !== 0 && m++, (this.length = Math.min(m, this.length)), h !== 0)
        ) {
          var g = 67108863 ^ ((67108863 >>> h) << h);
          this.words[this.length - 1] &= g;
        }
        return this._strip();
      }),
      (s.prototype.maskn = function (u) {
        return this.clone().imaskn(u);
      }),
      (s.prototype.iaddn = function (u) {
        return (
          n(typeof u == "number"),
          n(u < 67108864),
          u < 0
            ? this.isubn(-u)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= u
              ? ((this.words[0] = u - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(u), (this.negative = 1), this)
            : this._iaddn(u)
        );
      }),
      (s.prototype._iaddn = function (u) {
        this.words[0] += u;
        for (var h = 0; h < this.length && this.words[h] >= 67108864; h++)
          (this.words[h] -= 67108864),
            h === this.length - 1
              ? (this.words[h + 1] = 1)
              : this.words[h + 1]++;
        return (this.length = Math.max(this.length, h + 1)), this;
      }),
      (s.prototype.isubn = function (u) {
        if ((n(typeof u == "number"), n(u < 67108864), u < 0))
          return this.iaddn(-u);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(u), (this.negative = 1), this;
        if (((this.words[0] -= u), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var h = 0; h < this.length && this.words[h] < 0; h++)
            (this.words[h] += 67108864), (this.words[h + 1] -= 1);
        return this._strip();
      }),
      (s.prototype.addn = function (u) {
        return this.clone().iaddn(u);
      }),
      (s.prototype.subn = function (u) {
        return this.clone().isubn(u);
      }),
      (s.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (s.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (s.prototype._ishlnsubmul = function (u, h, m) {
        var g = u.length + m,
          v;
        this._expand(g);
        var _,
          M = 0;
        for (v = 0; v < u.length; v++) {
          _ = (this.words[v + m] | 0) + M;
          var y = (u.words[v] | 0) * h;
          (_ -= y & 67108863),
            (M = (_ >> 26) - ((y / 67108864) | 0)),
            (this.words[v + m] = _ & 67108863);
        }
        for (; v < this.length - m; v++)
          (_ = (this.words[v + m] | 0) + M),
            (M = _ >> 26),
            (this.words[v + m] = _ & 67108863);
        if (M === 0) return this._strip();
        for (n(M === -1), M = 0, v = 0; v < this.length; v++)
          (_ = -(this.words[v] | 0) + M),
            (M = _ >> 26),
            (this.words[v] = _ & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (s.prototype._wordDiv = function (u, h) {
        var m = this.length - u.length,
          g = this.clone(),
          v = u,
          _ = v.words[v.length - 1] | 0,
          M = this._countBits(_);
        (m = 26 - M),
          m !== 0 &&
            ((v = v.ushln(m)), g.iushln(m), (_ = v.words[v.length - 1] | 0));
        var y = g.length - v.length,
          l;
        if (h !== "mod") {
          (l = new s(null)),
            (l.length = y + 1),
            (l.words = new Array(l.length));
          for (var S = 0; S < l.length; S++) l.words[S] = 0;
        }
        var B = g.clone()._ishlnsubmul(v, 1, y);
        B.negative === 0 && ((g = B), l && (l.words[y] = 1));
        for (var z = y - 1; z >= 0; z--) {
          var A =
            (g.words[v.length + z] | 0) * 67108864 +
            (g.words[v.length + z - 1] | 0);
          for (
            A = Math.min((A / _) | 0, 67108863), g._ishlnsubmul(v, A, z);
            g.negative !== 0;

          )
            A--,
              (g.negative = 0),
              g._ishlnsubmul(v, 1, z),
              g.isZero() || (g.negative ^= 1);
          l && (l.words[z] = A);
        }
        return (
          l && l._strip(),
          g._strip(),
          h !== "div" && m !== 0 && g.iushrn(m),
          { div: l || null, mod: g }
        );
      }),
      (s.prototype.divmod = function (u, h, m) {
        if ((n(!u.isZero()), this.isZero()))
          return { div: new s(0), mod: new s(0) };
        var g, v, _;
        return this.negative !== 0 && u.negative === 0
          ? ((_ = this.neg().divmod(u, h)),
            h !== "mod" && (g = _.div.neg()),
            h !== "div" &&
              ((v = _.mod.neg()), m && v.negative !== 0 && v.iadd(u)),
            { div: g, mod: v })
          : this.negative === 0 && u.negative !== 0
          ? ((_ = this.divmod(u.neg(), h)),
            h !== "mod" && (g = _.div.neg()),
            { div: g, mod: _.mod })
          : this.negative & u.negative
          ? ((_ = this.neg().divmod(u.neg(), h)),
            h !== "div" &&
              ((v = _.mod.neg()), m && v.negative !== 0 && v.isub(u)),
            { div: _.div, mod: v })
          : u.length > this.length || this.cmp(u) < 0
          ? { div: new s(0), mod: this }
          : u.length === 1
          ? h === "div"
            ? { div: this.divn(u.words[0]), mod: null }
            : h === "mod"
            ? { div: null, mod: new s(this.modrn(u.words[0])) }
            : { div: this.divn(u.words[0]), mod: new s(this.modrn(u.words[0])) }
          : this._wordDiv(u, h);
      }),
      (s.prototype.div = function (u) {
        return this.divmod(u, "div", !1).div;
      }),
      (s.prototype.mod = function (u) {
        return this.divmod(u, "mod", !1).mod;
      }),
      (s.prototype.umod = function (u) {
        return this.divmod(u, "mod", !0).mod;
      }),
      (s.prototype.divRound = function (u) {
        var h = this.divmod(u);
        if (h.mod.isZero()) return h.div;
        var m = h.div.negative !== 0 ? h.mod.isub(u) : h.mod,
          g = u.ushrn(1),
          v = u.andln(1),
          _ = m.cmp(g);
        return _ < 0 || (v === 1 && _ === 0)
          ? h.div
          : h.div.negative !== 0
          ? h.div.isubn(1)
          : h.div.iaddn(1);
      }),
      (s.prototype.modrn = function (u) {
        var h = u < 0;
        h && (u = -u), n(u <= 67108863);
        for (var m = (1 << 26) % u, g = 0, v = this.length - 1; v >= 0; v--)
          g = (m * g + (this.words[v] | 0)) % u;
        return h ? -g : g;
      }),
      (s.prototype.modn = function (u) {
        return this.modrn(u);
      }),
      (s.prototype.idivn = function (u) {
        var h = u < 0;
        h && (u = -u), n(u <= 67108863);
        for (var m = 0, g = this.length - 1; g >= 0; g--) {
          var v = (this.words[g] | 0) + m * 67108864;
          (this.words[g] = (v / u) | 0), (m = v % u);
        }
        return this._strip(), h ? this.ineg() : this;
      }),
      (s.prototype.divn = function (u) {
        return this.clone().idivn(u);
      }),
      (s.prototype.egcd = function (u) {
        n(u.negative === 0), n(!u.isZero());
        var h = this,
          m = u.clone();
        h.negative !== 0 ? (h = h.umod(u)) : (h = h.clone());
        for (
          var g = new s(1), v = new s(0), _ = new s(0), M = new s(1), y = 0;
          h.isEven() && m.isEven();

        )
          h.iushrn(1), m.iushrn(1), ++y;
        for (var l = m.clone(), S = h.clone(); !h.isZero(); ) {
          for (var B = 0, z = 1; !(h.words[0] & z) && B < 26; ++B, z <<= 1);
          if (B > 0)
            for (h.iushrn(B); B-- > 0; )
              (g.isOdd() || v.isOdd()) && (g.iadd(l), v.isub(S)),
                g.iushrn(1),
                v.iushrn(1);
          for (var A = 0, T = 1; !(m.words[0] & T) && A < 26; ++A, T <<= 1);
          if (A > 0)
            for (m.iushrn(A); A-- > 0; )
              (_.isOdd() || M.isOdd()) && (_.iadd(l), M.isub(S)),
                _.iushrn(1),
                M.iushrn(1);
          h.cmp(m) >= 0
            ? (h.isub(m), g.isub(_), v.isub(M))
            : (m.isub(h), _.isub(g), M.isub(v));
        }
        return { a: _, b: M, gcd: m.iushln(y) };
      }),
      (s.prototype._invmp = function (u) {
        n(u.negative === 0), n(!u.isZero());
        var h = this,
          m = u.clone();
        h.negative !== 0 ? (h = h.umod(u)) : (h = h.clone());
        for (
          var g = new s(1), v = new s(0), _ = m.clone();
          h.cmpn(1) > 0 && m.cmpn(1) > 0;

        ) {
          for (var M = 0, y = 1; !(h.words[0] & y) && M < 26; ++M, y <<= 1);
          if (M > 0)
            for (h.iushrn(M); M-- > 0; ) g.isOdd() && g.iadd(_), g.iushrn(1);
          for (var l = 0, S = 1; !(m.words[0] & S) && l < 26; ++l, S <<= 1);
          if (l > 0)
            for (m.iushrn(l); l-- > 0; ) v.isOdd() && v.iadd(_), v.iushrn(1);
          h.cmp(m) >= 0 ? (h.isub(m), g.isub(v)) : (m.isub(h), v.isub(g));
        }
        var B;
        return (
          h.cmpn(1) === 0 ? (B = g) : (B = v), B.cmpn(0) < 0 && B.iadd(u), B
        );
      }),
      (s.prototype.gcd = function (u) {
        if (this.isZero()) return u.abs();
        if (u.isZero()) return this.abs();
        var h = this.clone(),
          m = u.clone();
        (h.negative = 0), (m.negative = 0);
        for (var g = 0; h.isEven() && m.isEven(); g++) h.iushrn(1), m.iushrn(1);
        do {
          for (; h.isEven(); ) h.iushrn(1);
          for (; m.isEven(); ) m.iushrn(1);
          var v = h.cmp(m);
          if (v < 0) {
            var _ = h;
            (h = m), (m = _);
          } else if (v === 0 || m.cmpn(1) === 0) break;
          h.isub(m);
        } while (!0);
        return m.iushln(g);
      }),
      (s.prototype.invm = function (u) {
        return this.egcd(u).a.umod(u);
      }),
      (s.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (s.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (s.prototype.andln = function (u) {
        return this.words[0] & u;
      }),
      (s.prototype.bincn = function (u) {
        n(typeof u == "number");
        var h = u % 26,
          m = (u - h) / 26,
          g = 1 << h;
        if (this.length <= m)
          return this._expand(m + 1), (this.words[m] |= g), this;
        for (var v = g, _ = m; v !== 0 && _ < this.length; _++) {
          var M = this.words[_] | 0;
          (M += v), (v = M >>> 26), (M &= 67108863), (this.words[_] = M);
        }
        return v !== 0 && ((this.words[_] = v), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (s.prototype.cmpn = function (u) {
        var h = u < 0;
        if (this.negative !== 0 && !h) return -1;
        if (this.negative === 0 && h) return 1;
        this._strip();
        var m;
        if (this.length > 1) m = 1;
        else {
          h && (u = -u), n(u <= 67108863, "Number is too big");
          var g = this.words[0] | 0;
          m = g === u ? 0 : g < u ? -1 : 1;
        }
        return this.negative !== 0 ? -m | 0 : m;
      }),
      (s.prototype.cmp = function (u) {
        if (this.negative !== 0 && u.negative === 0) return -1;
        if (this.negative === 0 && u.negative !== 0) return 1;
        var h = this.ucmp(u);
        return this.negative !== 0 ? -h | 0 : h;
      }),
      (s.prototype.ucmp = function (u) {
        if (this.length > u.length) return 1;
        if (this.length < u.length) return -1;
        for (var h = 0, m = this.length - 1; m >= 0; m--) {
          var g = this.words[m] | 0,
            v = u.words[m] | 0;
          if (g !== v) {
            g < v ? (h = -1) : g > v && (h = 1);
            break;
          }
        }
        return h;
      }),
      (s.prototype.gtn = function (u) {
        return this.cmpn(u) === 1;
      }),
      (s.prototype.gt = function (u) {
        return this.cmp(u) === 1;
      }),
      (s.prototype.gten = function (u) {
        return this.cmpn(u) >= 0;
      }),
      (s.prototype.gte = function (u) {
        return this.cmp(u) >= 0;
      }),
      (s.prototype.ltn = function (u) {
        return this.cmpn(u) === -1;
      }),
      (s.prototype.lt = function (u) {
        return this.cmp(u) === -1;
      }),
      (s.prototype.lten = function (u) {
        return this.cmpn(u) <= 0;
      }),
      (s.prototype.lte = function (u) {
        return this.cmp(u) <= 0;
      }),
      (s.prototype.eqn = function (u) {
        return this.cmpn(u) === 0;
      }),
      (s.prototype.eq = function (u) {
        return this.cmp(u) === 0;
      }),
      (s.red = function (u) {
        return new Q(u);
      }),
      (s.prototype.toRed = function (u) {
        return (
          n(!this.red, "Already a number in reduction context"),
          n(this.negative === 0, "red works only with positives"),
          u.convertTo(this)._forceRed(u)
        );
      }),
      (s.prototype.fromRed = function () {
        return (
          n(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (s.prototype._forceRed = function (u) {
        return (this.red = u), this;
      }),
      (s.prototype.forceRed = function (u) {
        return (
          n(!this.red, "Already a number in reduction context"),
          this._forceRed(u)
        );
      }),
      (s.prototype.redAdd = function (u) {
        return (
          n(this.red, "redAdd works only with red numbers"),
          this.red.add(this, u)
        );
      }),
      (s.prototype.redIAdd = function (u) {
        return (
          n(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, u)
        );
      }),
      (s.prototype.redSub = function (u) {
        return (
          n(this.red, "redSub works only with red numbers"),
          this.red.sub(this, u)
        );
      }),
      (s.prototype.redISub = function (u) {
        return (
          n(this.red, "redISub works only with red numbers"),
          this.red.isub(this, u)
        );
      }),
      (s.prototype.redShl = function (u) {
        return (
          n(this.red, "redShl works only with red numbers"),
          this.red.shl(this, u)
        );
      }),
      (s.prototype.redMul = function (u) {
        return (
          n(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, u),
          this.red.mul(this, u)
        );
      }),
      (s.prototype.redIMul = function (u) {
        return (
          n(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, u),
          this.red.imul(this, u)
        );
      }),
      (s.prototype.redSqr = function () {
        return (
          n(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (s.prototype.redISqr = function () {
        return (
          n(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (s.prototype.redSqrt = function () {
        return (
          n(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (s.prototype.redInvm = function () {
        return (
          n(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (s.prototype.redNeg = function () {
        return (
          n(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (s.prototype.redPow = function (u) {
        return (
          n(this.red && !u.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, u)
        );
      });
    var L = { k256: null, p224: null, p192: null, p25519: null };
    function U(w, u) {
      (this.name = w),
        (this.p = new s(u, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (U.prototype._tmp = function () {
      var u = new s(null);
      return (u.words = new Array(Math.ceil(this.n / 13))), u;
    }),
      (U.prototype.ireduce = function (u) {
        var h = u,
          m;
        do
          this.split(h, this.tmp),
            (h = this.imulK(h)),
            (h = h.iadd(this.tmp)),
            (m = h.bitLength());
        while (m > this.n);
        var g = m < this.n ? -1 : h.ucmp(this.p);
        return (
          g === 0
            ? ((h.words[0] = 0), (h.length = 1))
            : g > 0
            ? h.isub(this.p)
            : h.strip !== void 0
            ? h.strip()
            : h._strip(),
          h
        );
      }),
      (U.prototype.split = function (u, h) {
        u.iushrn(this.n, 0, h);
      }),
      (U.prototype.imulK = function (u) {
        return u.imul(this.k);
      });
    function G() {
      U.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    i(G, U),
      (G.prototype.split = function (u, h) {
        for (var m = 4194303, g = Math.min(u.length, 9), v = 0; v < g; v++)
          h.words[v] = u.words[v];
        if (((h.length = g), u.length <= 9)) {
          (u.words[0] = 0), (u.length = 1);
          return;
        }
        var _ = u.words[9];
        for (h.words[h.length++] = _ & m, v = 10; v < u.length; v++) {
          var M = u.words[v] | 0;
          (u.words[v - 10] = ((M & m) << 4) | (_ >>> 22)), (_ = M);
        }
        (_ >>>= 22),
          (u.words[v - 10] = _),
          _ === 0 && u.length > 10 ? (u.length -= 10) : (u.length -= 9);
      }),
      (G.prototype.imulK = function (u) {
        (u.words[u.length] = 0), (u.words[u.length + 1] = 0), (u.length += 2);
        for (var h = 0, m = 0; m < u.length; m++) {
          var g = u.words[m] | 0;
          (h += g * 977),
            (u.words[m] = h & 67108863),
            (h = g * 64 + ((h / 67108864) | 0));
        }
        return (
          u.words[u.length - 1] === 0 &&
            (u.length--, u.words[u.length - 1] === 0 && u.length--),
          u
        );
      });
    function q() {
      U.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    i(q, U);
    function H() {
      U.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    i(H, U);
    function Y() {
      U.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    i(Y, U),
      (Y.prototype.imulK = function (u) {
        for (var h = 0, m = 0; m < u.length; m++) {
          var g = (u.words[m] | 0) * 19 + h,
            v = g & 67108863;
          (g >>>= 26), (u.words[m] = v), (h = g);
        }
        return h !== 0 && (u.words[u.length++] = h), u;
      }),
      (s._prime = function (u) {
        if (L[u]) return L[u];
        var h;
        if (u === "k256") h = new G();
        else if (u === "p224") h = new q();
        else if (u === "p192") h = new H();
        else if (u === "p25519") h = new Y();
        else throw new Error("Unknown prime " + u);
        return (L[u] = h), h;
      });
    function Q(w) {
      if (typeof w == "string") {
        var u = s._prime(w);
        (this.m = u.p), (this.prime = u);
      } else
        n(w.gtn(1), "modulus must be greater than 1"),
          (this.m = w),
          (this.prime = null);
    }
    (Q.prototype._verify1 = function (u) {
      n(u.negative === 0, "red works only with positives"),
        n(u.red, "red works only with red numbers");
    }),
      (Q.prototype._verify2 = function (u, h) {
        n((u.negative | h.negative) === 0, "red works only with positives"),
          n(u.red && u.red === h.red, "red works only with red numbers");
      }),
      (Q.prototype.imod = function (u) {
        return this.prime
          ? this.prime.ireduce(u)._forceRed(this)
          : (d(u, u.umod(this.m)._forceRed(this)), u);
      }),
      (Q.prototype.neg = function (u) {
        return u.isZero() ? u.clone() : this.m.sub(u)._forceRed(this);
      }),
      (Q.prototype.add = function (u, h) {
        this._verify2(u, h);
        var m = u.add(h);
        return m.cmp(this.m) >= 0 && m.isub(this.m), m._forceRed(this);
      }),
      (Q.prototype.iadd = function (u, h) {
        this._verify2(u, h);
        var m = u.iadd(h);
        return m.cmp(this.m) >= 0 && m.isub(this.m), m;
      }),
      (Q.prototype.sub = function (u, h) {
        this._verify2(u, h);
        var m = u.sub(h);
        return m.cmpn(0) < 0 && m.iadd(this.m), m._forceRed(this);
      }),
      (Q.prototype.isub = function (u, h) {
        this._verify2(u, h);
        var m = u.isub(h);
        return m.cmpn(0) < 0 && m.iadd(this.m), m;
      }),
      (Q.prototype.shl = function (u, h) {
        return this._verify1(u), this.imod(u.ushln(h));
      }),
      (Q.prototype.imul = function (u, h) {
        return this._verify2(u, h), this.imod(u.imul(h));
      }),
      (Q.prototype.mul = function (u, h) {
        return this._verify2(u, h), this.imod(u.mul(h));
      }),
      (Q.prototype.isqr = function (u) {
        return this.imul(u, u.clone());
      }),
      (Q.prototype.sqr = function (u) {
        return this.mul(u, u);
      }),
      (Q.prototype.sqrt = function (u) {
        if (u.isZero()) return u.clone();
        var h = this.m.andln(3);
        if ((n(h % 2 === 1), h === 3)) {
          var m = this.m.add(new s(1)).iushrn(2);
          return this.pow(u, m);
        }
        for (var g = this.m.subn(1), v = 0; !g.isZero() && g.andln(1) === 0; )
          v++, g.iushrn(1);
        n(!g.isZero());
        var _ = new s(1).toRed(this),
          M = _.redNeg(),
          y = this.m.subn(1).iushrn(1),
          l = this.m.bitLength();
        for (l = new s(2 * l * l).toRed(this); this.pow(l, y).cmp(M) !== 0; )
          l.redIAdd(M);
        for (
          var S = this.pow(l, g),
            B = this.pow(u, g.addn(1).iushrn(1)),
            z = this.pow(u, g),
            A = v;
          z.cmp(_) !== 0;

        ) {
          for (var T = z, P = 0; T.cmp(_) !== 0; P++) T = T.redSqr();
          n(P < A);
          var W = this.pow(S, new s(1).iushln(A - P - 1));
          (B = B.redMul(W)), (S = W.redSqr()), (z = z.redMul(S)), (A = P);
        }
        return B;
      }),
      (Q.prototype.invm = function (u) {
        var h = u._invmp(this.m);
        return h.negative !== 0
          ? ((h.negative = 0), this.imod(h).redNeg())
          : this.imod(h);
      }),
      (Q.prototype.pow = function (u, h) {
        if (h.isZero()) return new s(1).toRed(this);
        if (h.cmpn(1) === 0) return u.clone();
        var m = 4,
          g = new Array(1 << m);
        (g[0] = new s(1).toRed(this)), (g[1] = u);
        for (var v = 2; v < g.length; v++) g[v] = this.mul(g[v - 1], u);
        var _ = g[0],
          M = 0,
          y = 0,
          l = h.bitLength() % 26;
        for (l === 0 && (l = 26), v = h.length - 1; v >= 0; v--) {
          for (var S = h.words[v], B = l - 1; B >= 0; B--) {
            var z = (S >> B) & 1;
            if ((_ !== g[0] && (_ = this.sqr(_)), z === 0 && M === 0)) {
              y = 0;
              continue;
            }
            (M <<= 1),
              (M |= z),
              y++,
              !(y !== m && (v !== 0 || B !== 0)) &&
                ((_ = this.mul(_, g[M])), (y = 0), (M = 0));
          }
          l = 26;
        }
        return _;
      }),
      (Q.prototype.convertTo = function (u) {
        var h = u.umod(this.m);
        return h === u ? h.clone() : h;
      }),
      (Q.prototype.convertFrom = function (u) {
        var h = u.clone();
        return (h.red = null), h;
      }),
      (s.mont = function (u) {
        return new K(u);
      });
    function K(w) {
      Q.call(this, w),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new s(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    i(K, Q),
      (K.prototype.convertTo = function (u) {
        return this.imod(u.ushln(this.shift));
      }),
      (K.prototype.convertFrom = function (u) {
        var h = this.imod(u.mul(this.rinv));
        return (h.red = null), h;
      }),
      (K.prototype.imul = function (u, h) {
        if (u.isZero() || h.isZero())
          return (u.words[0] = 0), (u.length = 1), u;
        var m = u.imul(h),
          g = m.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          v = m.isub(g).iushrn(this.shift),
          _ = v;
        return (
          v.cmp(this.m) >= 0
            ? (_ = v.isub(this.m))
            : v.cmpn(0) < 0 && (_ = v.iadd(this.m)),
          _._forceRed(this)
        );
      }),
      (K.prototype.mul = function (u, h) {
        if (u.isZero() || h.isZero()) return new s(0)._forceRed(this);
        var m = u.mul(h),
          g = m.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          v = m.isub(g).iushrn(this.shift),
          _ = v;
        return (
          v.cmp(this.m) >= 0
            ? (_ = v.isub(this.m))
            : v.cmpn(0) < 0 && (_ = v.iadd(this.m)),
          _._forceRed(this)
        );
      }),
      (K.prototype.invm = function (u) {
        var h = this.imod(u._invmp(this.m).mul(this.r2));
        return h._forceRed(this);
      });
  })(t, J);
})(G0);
var _i = {};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.EVENTS = void 0;
_i.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered",
};
var ss = {},
  Sh = {},
  Nr = {},
  Eh = Qi;
Qi.default = Qi;
Qi.stable = Ch;
Qi.stableStringify = Ch;
var Ys = "[...]",
  xh = "[Circular]",
  vn = [],
  fn = [];
function Mh() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER,
  };
}
function Qi(t, e, r, n) {
  typeof n > "u" && (n = Mh()), gu(t, "", 0, [], void 0, 0, n);
  var i;
  try {
    fn.length === 0
      ? (i = JSON.stringify(t, e, r))
      : (i = JSON.stringify(t, Rh(e), r));
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; vn.length !== 0; ) {
      var s = vn.pop();
      s.length === 4
        ? Object.defineProperty(s[0], s[1], s[3])
        : (s[0][s[1]] = s[2]);
    }
  }
  return i;
}
function Qn(t, e, r, n) {
  var i = Object.getOwnPropertyDescriptor(n, r);
  i.get !== void 0
    ? i.configurable
      ? (Object.defineProperty(n, r, { value: t }), vn.push([n, r, e, i]))
      : fn.push([e, r, t])
    : ((n[r] = t), vn.push([n, r, e]));
}
function gu(t, e, r, n, i, s, o) {
  s += 1;
  var a;
  if (typeof t == "object" && t !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === t) {
        Qn(xh, t, e, i);
        return;
      }
    if (typeof o.depthLimit < "u" && s > o.depthLimit) {
      Qn(Ys, t, e, i);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      Qn(Ys, t, e, i);
      return;
    }
    if ((n.push(t), Array.isArray(t)))
      for (a = 0; a < t.length; a++) gu(t[a], a, a, n, t, s, o);
    else {
      var c = Object.keys(t);
      for (a = 0; a < c.length; a++) {
        var f = c[a];
        gu(t[f], f, a, n, t, s, o);
      }
    }
    n.pop();
  }
}
function J0(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ch(t, e, r, n) {
  typeof n > "u" && (n = Mh());
  var i = vu(t, "", 0, [], void 0, 0, n) || t,
    s;
  try {
    fn.length === 0
      ? (s = JSON.stringify(i, e, r))
      : (s = JSON.stringify(i, Rh(e), r));
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; vn.length !== 0; ) {
      var o = vn.pop();
      o.length === 4
        ? Object.defineProperty(o[0], o[1], o[3])
        : (o[0][o[1]] = o[2]);
    }
  }
  return s;
}
function vu(t, e, r, n, i, s, o) {
  s += 1;
  var a;
  if (typeof t == "object" && t !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === t) {
        Qn(xh, t, e, i);
        return;
      }
    try {
      if (typeof t.toJSON == "function") return;
    } catch {
      return;
    }
    if (typeof o.depthLimit < "u" && s > o.depthLimit) {
      Qn(Ys, t, e, i);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      Qn(Ys, t, e, i);
      return;
    }
    if ((n.push(t), Array.isArray(t)))
      for (a = 0; a < t.length; a++) vu(t[a], a, a, n, t, s, o);
    else {
      var c = {},
        f = Object.keys(t).sort(J0);
      for (a = 0; a < f.length; a++) {
        var d = f[a];
        vu(t[d], d, a, n, t, s, o), (c[d] = t[d]);
      }
      if (typeof i < "u") vn.push([i, e, t]), (i[e] = c);
      else return c;
    }
    n.pop();
  }
}
function Rh(t) {
  return (
    (t =
      typeof t < "u"
        ? t
        : function (e, r) {
            return r;
          }),
    function (e, r) {
      if (fn.length > 0)
        for (var n = 0; n < fn.length; n++) {
          var i = fn[n];
          if (i[1] === e && i[0] === r) {
            (r = i[2]), fn.splice(n, 1);
            break;
          }
        }
      return t.call(this, e, r);
    }
  );
}
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.EthereumProviderError = Nr.EthereumRpcError = void 0;
const Z0 = Eh;
let Ih = class extends Error {
  constructor(e, r, n) {
    if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), (this.code = e), n !== void 0 && (this.data = n);
  }
  serialize() {
    const e = { code: this.code, message: this.message };
    return (
      this.data !== void 0 && (e.data = this.data),
      this.stack && (e.stack = this.stack),
      e
    );
  }
  toString() {
    return Z0.default(this.serialize(), K0, 2);
  }
};
Nr.EthereumRpcError = Ih;
let Q0 = class extends Ih {
  constructor(e, r, n) {
    if (!Y0(e))
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      );
    super(e, r, n);
  }
};
Nr.EthereumProviderError = Q0;
function Y0(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function K0(t, e) {
  if (e !== "[Circular]") return e;
}
var Wu = {},
  Lr = {};
Object.defineProperty(Lr, "__esModule", { value: !0 });
Lr.errorValues = Lr.errorCodes = void 0;
Lr.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603,
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
  },
};
Lr.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
  "-32000": { standard: "EIP-1474", message: "Invalid input." },
  "-32001": { standard: "EIP-1474", message: "Resource not found." },
  "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
  "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
  "-32004": { standard: "EIP-1474", message: "Method not supported." },
  "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
  4001: { standard: "EIP-1193", message: "User rejected the request." },
  4100: {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.serializeError =
      t.isValidCode =
      t.getMessageFromCode =
      t.JSON_RPC_SERVER_ERROR_MESSAGE =
        void 0);
  const e = Lr,
    r = Nr,
    n = e.errorCodes.rpc.internal,
    i = "Unspecified error message. This is a bug, please report it.",
    s = { code: n, message: o(n) };
  t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(b, E = i) {
    if (Number.isInteger(b)) {
      const R = b.toString();
      if (p(e.errorValues, R)) return e.errorValues[R].message;
      if (f(b)) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return E;
  }
  t.getMessageFromCode = o;
  function a(b) {
    if (!Number.isInteger(b)) return !1;
    const E = b.toString();
    return !!(e.errorValues[E] || f(b));
  }
  t.isValidCode = a;
  function c(b, { fallbackError: E = s, shouldIncludeStack: R = !1 } = {}) {
    var O, $;
    if (!E || !Number.isInteger(E.code) || typeof E.message != "string")
      throw new Error(
        "Must provide fallback error with integer number code and string message."
      );
    if (b instanceof r.EthereumRpcError) return b.serialize();
    const I = {};
    if (
      b &&
      typeof b == "object" &&
      !Array.isArray(b) &&
      p(b, "code") &&
      a(b.code)
    ) {
      const N = b;
      (I.code = N.code),
        N.message && typeof N.message == "string"
          ? ((I.message = N.message), p(N, "data") && (I.data = N.data))
          : ((I.message = o(I.code)), (I.data = { originalError: d(b) }));
    } else {
      I.code = E.code;
      const N = (O = b) === null || O === void 0 ? void 0 : O.message;
      (I.message = N && typeof N == "string" ? N : E.message),
        (I.data = { originalError: d(b) });
    }
    const k = ($ = b) === null || $ === void 0 ? void 0 : $.stack;
    return R && b && k && typeof k == "string" && (I.stack = k), I;
  }
  t.serializeError = c;
  function f(b) {
    return b >= -32099 && b <= -32e3;
  }
  function d(b) {
    return b && typeof b == "object" && !Array.isArray(b)
      ? Object.assign({}, b)
      : b;
  }
  function p(b, E) {
    return Object.prototype.hasOwnProperty.call(b, E);
  }
})(Wu);
var mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.ethErrors = void 0;
const Vu = Nr,
  Ah = Wu,
  gt = Lr;
mo.ethErrors = {
  rpc: {
    parse: (t) => Ot(gt.errorCodes.rpc.parse, t),
    invalidRequest: (t) => Ot(gt.errorCodes.rpc.invalidRequest, t),
    invalidParams: (t) => Ot(gt.errorCodes.rpc.invalidParams, t),
    methodNotFound: (t) => Ot(gt.errorCodes.rpc.methodNotFound, t),
    internal: (t) => Ot(gt.errorCodes.rpc.internal, t),
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error(
          "Ethereum RPC Server errors must provide single object argument."
        );
      const { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return Ot(e, t);
    },
    invalidInput: (t) => Ot(gt.errorCodes.rpc.invalidInput, t),
    resourceNotFound: (t) => Ot(gt.errorCodes.rpc.resourceNotFound, t),
    resourceUnavailable: (t) => Ot(gt.errorCodes.rpc.resourceUnavailable, t),
    transactionRejected: (t) => Ot(gt.errorCodes.rpc.transactionRejected, t),
    methodNotSupported: (t) => Ot(gt.errorCodes.rpc.methodNotSupported, t),
    limitExceeded: (t) => Ot(gt.errorCodes.rpc.limitExceeded, t),
  },
  provider: {
    userRejectedRequest: (t) =>
      Ni(gt.errorCodes.provider.userRejectedRequest, t),
    unauthorized: (t) => Ni(gt.errorCodes.provider.unauthorized, t),
    unsupportedMethod: (t) => Ni(gt.errorCodes.provider.unsupportedMethod, t),
    disconnected: (t) => Ni(gt.errorCodes.provider.disconnected, t),
    chainDisconnected: (t) => Ni(gt.errorCodes.provider.chainDisconnected, t),
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error(
          "Ethereum Provider custom errors must provide single object argument."
        );
      const { code: e, message: r, data: n } = t;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new Vu.EthereumProviderError(e, r, n);
    },
  },
};
function Ot(t, e) {
  const [r, n] = kh(e);
  return new Vu.EthereumRpcError(t, r || Ah.getMessageFromCode(t), n);
}
function Ni(t, e) {
  const [r, n] = kh(e);
  return new Vu.EthereumProviderError(t, r || Ah.getMessageFromCode(t), n);
}
function kh(t) {
  if (t) {
    if (typeof t == "string") return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const { message: e, data: r } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, r];
    }
  }
  return [];
}
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.getMessageFromCode =
      t.serializeError =
      t.EthereumProviderError =
      t.EthereumRpcError =
      t.ethErrors =
      t.errorCodes =
        void 0);
  const e = Nr;
  Object.defineProperty(t, "EthereumRpcError", {
    enumerable: !0,
    get: function () {
      return e.EthereumRpcError;
    },
  }),
    Object.defineProperty(t, "EthereumProviderError", {
      enumerable: !0,
      get: function () {
        return e.EthereumProviderError;
      },
    });
  const r = Wu;
  Object.defineProperty(t, "serializeError", {
    enumerable: !0,
    get: function () {
      return r.serializeError;
    },
  }),
    Object.defineProperty(t, "getMessageFromCode", {
      enumerable: !0,
      get: function () {
        return r.getMessageFromCode;
      },
    });
  const n = mo;
  Object.defineProperty(t, "ethErrors", {
    enumerable: !0,
    get: function () {
      return n.ethErrors;
    },
  });
  const i = Lr;
  Object.defineProperty(t, "errorCodes", {
    enumerable: !0,
    get: function () {
      return i.errorCodes;
    },
  });
})(Sh);
var Ee = {},
  _o = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.Web3Method = void 0),
    (function (e) {
      (e.requestEthereumAccounts = "requestEthereumAccounts"),
        (e.signEthereumMessage = "signEthereumMessage"),
        (e.signEthereumTransaction = "signEthereumTransaction"),
        (e.submitEthereumTransaction = "submitEthereumTransaction"),
        (e.ethereumAddressFromSignedMessage =
          "ethereumAddressFromSignedMessage"),
        (e.scanQRCode = "scanQRCode"),
        (e.generic = "generic"),
        (e.childRequestEthereumAccounts = "childRequestEthereumAccounts"),
        (e.addEthereumChain = "addEthereumChain"),
        (e.switchEthereumChain = "switchEthereumChain"),
        (e.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest"),
        (e.watchAsset = "watchAsset"),
        (e.selectProvider = "selectProvider");
    })(t.Web3Method || (t.Web3Method = {}));
})(_o);
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.EthereumAddressFromSignedMessageResponse =
  Ee.SubmitEthereumTransactionResponse =
  Ee.SignEthereumTransactionResponse =
  Ee.SignEthereumMessageResponse =
  Ee.isRequestEthereumAccountsResponse =
  Ee.SelectProviderResponse =
  Ee.WatchAssetReponse =
  Ee.RequestEthereumAccountsResponse =
  Ee.SwitchEthereumChainResponse =
  Ee.AddEthereumChainResponse =
  Ee.isErrorResponse =
    void 0;
const hr = _o;
function X0(t) {
  var e, r;
  return (
    ((e = t) === null || e === void 0 ? void 0 : e.method) !== void 0 &&
    ((r = t) === null || r === void 0 ? void 0 : r.errorMessage) !== void 0
  );
}
Ee.isErrorResponse = X0;
function eg(t) {
  return { method: hr.Web3Method.addEthereumChain, result: t };
}
Ee.AddEthereumChainResponse = eg;
function tg(t) {
  return { method: hr.Web3Method.switchEthereumChain, result: t };
}
Ee.SwitchEthereumChainResponse = tg;
function rg(t) {
  return { method: hr.Web3Method.requestEthereumAccounts, result: t };
}
Ee.RequestEthereumAccountsResponse = rg;
function ng(t) {
  return { method: hr.Web3Method.watchAsset, result: t };
}
Ee.WatchAssetReponse = ng;
function ig(t) {
  return { method: hr.Web3Method.selectProvider, result: t };
}
Ee.SelectProviderResponse = ig;
function sg(t) {
  return t && t.method === hr.Web3Method.requestEthereumAccounts;
}
Ee.isRequestEthereumAccountsResponse = sg;
function og(t) {
  return { method: hr.Web3Method.signEthereumMessage, result: t };
}
Ee.SignEthereumMessageResponse = og;
function ag(t) {
  return { method: hr.Web3Method.signEthereumTransaction, result: t };
}
Ee.SignEthereumTransactionResponse = ag;
function ug(t) {
  return { method: hr.Web3Method.submitEthereumTransaction, result: t };
}
Ee.SubmitEthereumTransactionResponse = ug;
function cg(t) {
  return { method: hr.Web3Method.ethereumAddressFromSignedMessage, result: t };
}
Ee.EthereumAddressFromSignedMessageResponse = cg;
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.LIB_VERSION = void 0;
wi.LIB_VERSION = "3.7.2";
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.getErrorCode =
      t.serializeError =
      t.standardErrors =
      t.standardErrorMessage =
      t.standardErrorCodes =
        void 0);
  const e = Sh,
    r = Ee,
    n = wi;
  t.standardErrorCodes = Object.freeze(
    Object.assign(Object.assign({}, e.errorCodes), {
      provider: Object.freeze(
        Object.assign(Object.assign({}, e.errorCodes.provider), {
          unsupportedChain: 4902,
        })
      ),
    })
  );
  function i(d) {
    return d !== void 0 ? (0, e.getMessageFromCode)(d) : "Unknown error";
  }
  (t.standardErrorMessage = i),
    (t.standardErrors = Object.freeze(
      Object.assign(Object.assign({}, e.ethErrors), {
        provider: Object.freeze(
          Object.assign(Object.assign({}, e.ethErrors.provider), {
            unsupportedChain: (d = "") =>
              e.ethErrors.provider.custom({
                code: t.standardErrorCodes.provider.unsupportedChain,
                message: `Unrecognized chain ID ${d}. Try adding the chain using wallet_addEthereumChain first.`,
              }),
          })
        ),
      })
    ));
  function s(d, p) {
    const b = (0, e.serializeError)(o(d), { shouldIncludeStack: !0 }),
      E = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
    E.searchParams.set("version", n.LIB_VERSION),
      E.searchParams.set("code", b.code.toString());
    const R = a(b.data, p);
    return (
      R && E.searchParams.set("method", R),
      E.searchParams.set("message", b.message),
      Object.assign(Object.assign({}, b), { docUrl: E.href })
    );
  }
  t.serializeError = s;
  function o(d) {
    return typeof d == "string"
      ? { message: d, code: t.standardErrorCodes.rpc.internal }
      : (0, r.isErrorResponse)(d)
      ? Object.assign(Object.assign({}, d), {
          message: d.errorMessage,
          code: d.errorCode,
          data: { method: d.method, result: d.result },
        })
      : d;
  }
  function a(d, p) {
    var b;
    const E = (b = d) === null || b === void 0 ? void 0 : b.method;
    if (E) return E;
    if (p !== void 0)
      return typeof p == "string"
        ? p
        : Array.isArray(p)
        ? p.length > 0
          ? p[0].method
          : void 0
        : p.method;
  }
  function c(d) {
    var p;
    if (typeof d == "number") return d;
    if (f(d)) return (p = d.code) !== null && p !== void 0 ? p : d.errorCode;
  }
  t.getErrorCode = c;
  function f(d) {
    return (
      typeof d == "object" &&
      d !== null &&
      (typeof d.code == "number" || typeof d.errorCode == "number")
    );
  }
})(ss);
var Si = {},
  bu = {},
  lg = {
    get exports() {
      return bu;
    },
    set exports(t) {
      bu = t;
    },
  },
  Zt = {},
  fg = {
    get exports() {
      return Zt;
    },
    set exports(t) {
      Zt = t;
    },
  };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ (function (
  t,
  e
) {
  var r = go,
    n = r.Buffer;
  function i(o, a) {
    for (var c in o) a[c] = o[c];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
    ? (t.exports = r)
    : (i(r, e), (e.Buffer = s));
  function s(o, a, c) {
    return n(o, a, c);
  }
  (s.prototype = Object.create(n.prototype)),
    i(n, s),
    (s.from = function (o, a, c) {
      if (typeof o == "number")
        throw new TypeError("Argument must not be a number");
      return n(o, a, c);
    }),
    (s.alloc = function (o, a, c) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      var f = n(o);
      return (
        a !== void 0
          ? typeof c == "string"
            ? f.fill(a, c)
            : f.fill(a)
          : f.fill(0),
        f
      );
    }),
    (s.allocUnsafe = function (o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return n(o);
    }),
    (s.allocUnsafeSlow = function (o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(o);
    });
})(fg, Zt);
var Th = Zt.Buffer;
function wo(t, e) {
  (this._block = Th.alloc(t)),
    (this._finalSize = e),
    (this._blockSize = t),
    (this._len = 0);
}
wo.prototype.update = function (t, e) {
  typeof t == "string" && ((e = e || "utf8"), (t = Th.from(t, e)));
  for (
    var r = this._block,
      n = this._blockSize,
      i = t.length,
      s = this._len,
      o = 0;
    o < i;

  ) {
    for (var a = s % n, c = Math.min(i - o, n - a), f = 0; f < c; f++)
      r[a + f] = t[o + f];
    (s += c), (o += c), s % n === 0 && this._update(r);
  }
  return (this._len += i), this;
};
wo.prototype.digest = function (t) {
  var e = this._len % this._blockSize;
  (this._block[e] = 128),
    this._block.fill(0, e + 1),
    e >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var n = (r & 4294967295) >>> 0,
      i = (r - n) / 4294967296;
    this._block.writeUInt32BE(i, this._blockSize - 8),
      this._block.writeUInt32BE(n, this._blockSize - 4);
  }
  this._update(this._block);
  var s = this._hash();
  return t ? s.toString(t) : s;
};
wo.prototype._update = function () {
  throw new Error("_update must be implemented by subclass");
};
var Ei = wo,
  hg = Qt,
  Oh = Ei,
  dg = Zt.Buffer,
  pg = [1518500249, 1859775393, -1894007588, -899497514],
  gg = new Array(80);
function os() {
  this.init(), (this._w = gg), Oh.call(this, 64, 56);
}
hg(os, Oh);
os.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function vg(t) {
  return (t << 5) | (t >>> 27);
}
function bg(t) {
  return (t << 30) | (t >>> 2);
}
function yg(t, e, r, n) {
  return t === 0
    ? (e & r) | (~e & n)
    : t === 2
    ? (e & r) | (e & n) | (r & n)
    : e ^ r ^ n;
}
os.prototype._update = function (t) {
  for (
    var e = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      o = this._e | 0,
      a = 0;
    a < 16;
    ++a
  )
    e[a] = t.readInt32BE(a * 4);
  for (; a < 80; ++a) e[a] = e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16];
  for (var c = 0; c < 80; ++c) {
    var f = ~~(c / 20),
      d = (vg(r) + yg(f, n, i, s) + o + e[c] + pg[f]) | 0;
    (o = s), (s = i), (i = bg(n)), (n = r), (r = d);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (o + this._e) | 0);
};
os.prototype._hash = function () {
  var t = dg.allocUnsafe(20);
  return (
    t.writeInt32BE(this._a | 0, 0),
    t.writeInt32BE(this._b | 0, 4),
    t.writeInt32BE(this._c | 0, 8),
    t.writeInt32BE(this._d | 0, 12),
    t.writeInt32BE(this._e | 0, 16),
    t
  );
};
var mg = os,
  _g = Qt,
  Nh = Ei,
  wg = Zt.Buffer,
  Sg = [1518500249, 1859775393, -1894007588, -899497514],
  Eg = new Array(80);
function as() {
  this.init(), (this._w = Eg), Nh.call(this, 64, 56);
}
_g(as, Nh);
as.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function xg(t) {
  return (t << 1) | (t >>> 31);
}
function Mg(t) {
  return (t << 5) | (t >>> 27);
}
function Cg(t) {
  return (t << 30) | (t >>> 2);
}
function Rg(t, e, r, n) {
  return t === 0
    ? (e & r) | (~e & n)
    : t === 2
    ? (e & r) | (e & n) | (r & n)
    : e ^ r ^ n;
}
as.prototype._update = function (t) {
  for (
    var e = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      o = this._e | 0,
      a = 0;
    a < 16;
    ++a
  )
    e[a] = t.readInt32BE(a * 4);
  for (; a < 80; ++a) e[a] = xg(e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16]);
  for (var c = 0; c < 80; ++c) {
    var f = ~~(c / 20),
      d = (Mg(r) + Rg(f, n, i, s) + o + e[c] + Sg[f]) | 0;
    (o = s), (s = i), (i = Cg(n)), (n = r), (r = d);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (o + this._e) | 0);
};
as.prototype._hash = function () {
  var t = wg.allocUnsafe(20);
  return (
    t.writeInt32BE(this._a | 0, 0),
    t.writeInt32BE(this._b | 0, 4),
    t.writeInt32BE(this._c | 0, 8),
    t.writeInt32BE(this._d | 0, 12),
    t.writeInt32BE(this._e | 0, 16),
    t
  );
};
var Ig = as,
  Ag = Qt,
  Lh = Ei,
  kg = Zt.Buffer,
  Tg = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ],
  Og = new Array(64);
function us() {
  this.init(), (this._w = Og), Lh.call(this, 64, 56);
}
Ag(us, Lh);
us.prototype.init = function () {
  return (
    (this._a = 1779033703),
    (this._b = 3144134277),
    (this._c = 1013904242),
    (this._d = 2773480762),
    (this._e = 1359893119),
    (this._f = 2600822924),
    (this._g = 528734635),
    (this._h = 1541459225),
    this
  );
};
function Ng(t, e, r) {
  return r ^ (t & (e ^ r));
}
function Lg(t, e, r) {
  return (t & e) | (r & (t | e));
}
function Pg(t) {
  return (
    ((t >>> 2) | (t << 30)) ^
    ((t >>> 13) | (t << 19)) ^
    ((t >>> 22) | (t << 10))
  );
}
function $g(t) {
  return (
    ((t >>> 6) | (t << 26)) ^ ((t >>> 11) | (t << 21)) ^ ((t >>> 25) | (t << 7))
  );
}
function Dg(t) {
  return ((t >>> 7) | (t << 25)) ^ ((t >>> 18) | (t << 14)) ^ (t >>> 3);
}
function jg(t) {
  return ((t >>> 17) | (t << 15)) ^ ((t >>> 19) | (t << 13)) ^ (t >>> 10);
}
us.prototype._update = function (t) {
  for (
    var e = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      o = this._e | 0,
      a = this._f | 0,
      c = this._g | 0,
      f = this._h | 0,
      d = 0;
    d < 16;
    ++d
  )
    e[d] = t.readInt32BE(d * 4);
  for (; d < 64; ++d)
    e[d] = (jg(e[d - 2]) + e[d - 7] + Dg(e[d - 15]) + e[d - 16]) | 0;
  for (var p = 0; p < 64; ++p) {
    var b = (f + $g(o) + Ng(o, a, c) + Tg[p] + e[p]) | 0,
      E = (Pg(r) + Lg(r, n, i)) | 0;
    (f = c),
      (c = a),
      (a = o),
      (o = (s + b) | 0),
      (s = i),
      (i = n),
      (n = r),
      (r = (b + E) | 0);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (o + this._e) | 0),
    (this._f = (a + this._f) | 0),
    (this._g = (c + this._g) | 0),
    (this._h = (f + this._h) | 0);
};
us.prototype._hash = function () {
  var t = kg.allocUnsafe(32);
  return (
    t.writeInt32BE(this._a, 0),
    t.writeInt32BE(this._b, 4),
    t.writeInt32BE(this._c, 8),
    t.writeInt32BE(this._d, 12),
    t.writeInt32BE(this._e, 16),
    t.writeInt32BE(this._f, 20),
    t.writeInt32BE(this._g, 24),
    t.writeInt32BE(this._h, 28),
    t
  );
};
var Ph = us,
  Bg = Qt,
  Fg = Ph,
  Hg = Ei,
  Wg = Zt.Buffer,
  Vg = new Array(64);
function So() {
  this.init(), (this._w = Vg), Hg.call(this, 64, 56);
}
Bg(So, Fg);
So.prototype.init = function () {
  return (
    (this._a = 3238371032),
    (this._b = 914150663),
    (this._c = 812702999),
    (this._d = 4144912697),
    (this._e = 4290775857),
    (this._f = 1750603025),
    (this._g = 1694076839),
    (this._h = 3204075428),
    this
  );
};
So.prototype._hash = function () {
  var t = Wg.allocUnsafe(28);
  return (
    t.writeInt32BE(this._a, 0),
    t.writeInt32BE(this._b, 4),
    t.writeInt32BE(this._c, 8),
    t.writeInt32BE(this._d, 12),
    t.writeInt32BE(this._e, 16),
    t.writeInt32BE(this._f, 20),
    t.writeInt32BE(this._g, 24),
    t
  );
};
var Ug = So,
  zg = Qt,
  $h = Ei,
  qg = Zt.Buffer,
  el = [
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
  ],
  Gg = new Array(160);
function cs() {
  this.init(), (this._w = Gg), $h.call(this, 128, 112);
}
zg(cs, $h);
cs.prototype.init = function () {
  return (
    (this._ah = 1779033703),
    (this._bh = 3144134277),
    (this._ch = 1013904242),
    (this._dh = 2773480762),
    (this._eh = 1359893119),
    (this._fh = 2600822924),
    (this._gh = 528734635),
    (this._hh = 1541459225),
    (this._al = 4089235720),
    (this._bl = 2227873595),
    (this._cl = 4271175723),
    (this._dl = 1595750129),
    (this._el = 2917565137),
    (this._fl = 725511199),
    (this._gl = 4215389547),
    (this._hl = 327033209),
    this
  );
};
function tl(t, e, r) {
  return r ^ (t & (e ^ r));
}
function rl(t, e, r) {
  return (t & e) | (r & (t | e));
}
function nl(t, e) {
  return (
    ((t >>> 28) | (e << 4)) ^ ((e >>> 2) | (t << 30)) ^ ((e >>> 7) | (t << 25))
  );
}
function il(t, e) {
  return (
    ((t >>> 14) | (e << 18)) ^
    ((t >>> 18) | (e << 14)) ^
    ((e >>> 9) | (t << 23))
  );
}
function Jg(t, e) {
  return ((t >>> 1) | (e << 31)) ^ ((t >>> 8) | (e << 24)) ^ (t >>> 7);
}
function Zg(t, e) {
  return (
    ((t >>> 1) | (e << 31)) ^ ((t >>> 8) | (e << 24)) ^ ((t >>> 7) | (e << 25))
  );
}
function Qg(t, e) {
  return ((t >>> 19) | (e << 13)) ^ ((e >>> 29) | (t << 3)) ^ (t >>> 6);
}
function Yg(t, e) {
  return (
    ((t >>> 19) | (e << 13)) ^ ((e >>> 29) | (t << 3)) ^ ((t >>> 6) | (e << 26))
  );
}
function ot(t, e) {
  return t >>> 0 < e >>> 0 ? 1 : 0;
}
cs.prototype._update = function (t) {
  for (
    var e = this._w,
      r = this._ah | 0,
      n = this._bh | 0,
      i = this._ch | 0,
      s = this._dh | 0,
      o = this._eh | 0,
      a = this._fh | 0,
      c = this._gh | 0,
      f = this._hh | 0,
      d = this._al | 0,
      p = this._bl | 0,
      b = this._cl | 0,
      E = this._dl | 0,
      R = this._el | 0,
      O = this._fl | 0,
      $ = this._gl | 0,
      I = this._hl | 0,
      k = 0;
    k < 32;
    k += 2
  )
    (e[k] = t.readInt32BE(k * 4)), (e[k + 1] = t.readInt32BE(k * 4 + 4));
  for (; k < 160; k += 2) {
    var N = e[k - 30],
      D = e[k - 15 * 2 + 1],
      L = Jg(N, D),
      U = Zg(D, N);
    (N = e[k - 2 * 2]), (D = e[k - 2 * 2 + 1]);
    var G = Qg(N, D),
      q = Yg(D, N),
      H = e[k - 7 * 2],
      Y = e[k - 7 * 2 + 1],
      Q = e[k - 16 * 2],
      K = e[k - 16 * 2 + 1],
      w = (U + Y) | 0,
      u = (L + H + ot(w, U)) | 0;
    (w = (w + q) | 0),
      (u = (u + G + ot(w, q)) | 0),
      (w = (w + K) | 0),
      (u = (u + Q + ot(w, K)) | 0),
      (e[k] = u),
      (e[k + 1] = w);
  }
  for (var h = 0; h < 160; h += 2) {
    (u = e[h]), (w = e[h + 1]);
    var m = rl(r, n, i),
      g = rl(d, p, b),
      v = nl(r, d),
      _ = nl(d, r),
      M = il(o, R),
      y = il(R, o),
      l = el[h],
      S = el[h + 1],
      B = tl(o, a, c),
      z = tl(R, O, $),
      A = (I + y) | 0,
      T = (f + M + ot(A, I)) | 0;
    (A = (A + z) | 0),
      (T = (T + B + ot(A, z)) | 0),
      (A = (A + S) | 0),
      (T = (T + l + ot(A, S)) | 0),
      (A = (A + w) | 0),
      (T = (T + u + ot(A, w)) | 0);
    var P = (_ + g) | 0,
      W = (v + m + ot(P, _)) | 0;
    (f = c),
      (I = $),
      (c = a),
      ($ = O),
      (a = o),
      (O = R),
      (R = (E + A) | 0),
      (o = (s + T + ot(R, E)) | 0),
      (s = i),
      (E = b),
      (i = n),
      (b = p),
      (n = r),
      (p = d),
      (d = (A + P) | 0),
      (r = (T + W + ot(d, A)) | 0);
  }
  (this._al = (this._al + d) | 0),
    (this._bl = (this._bl + p) | 0),
    (this._cl = (this._cl + b) | 0),
    (this._dl = (this._dl + E) | 0),
    (this._el = (this._el + R) | 0),
    (this._fl = (this._fl + O) | 0),
    (this._gl = (this._gl + $) | 0),
    (this._hl = (this._hl + I) | 0),
    (this._ah = (this._ah + r + ot(this._al, d)) | 0),
    (this._bh = (this._bh + n + ot(this._bl, p)) | 0),
    (this._ch = (this._ch + i + ot(this._cl, b)) | 0),
    (this._dh = (this._dh + s + ot(this._dl, E)) | 0),
    (this._eh = (this._eh + o + ot(this._el, R)) | 0),
    (this._fh = (this._fh + a + ot(this._fl, O)) | 0),
    (this._gh = (this._gh + c + ot(this._gl, $)) | 0),
    (this._hh = (this._hh + f + ot(this._hl, I)) | 0);
};
cs.prototype._hash = function () {
  var t = qg.allocUnsafe(64);
  function e(r, n, i) {
    t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
  }
  return (
    e(this._ah, this._al, 0),
    e(this._bh, this._bl, 8),
    e(this._ch, this._cl, 16),
    e(this._dh, this._dl, 24),
    e(this._eh, this._el, 32),
    e(this._fh, this._fl, 40),
    e(this._gh, this._gl, 48),
    e(this._hh, this._hl, 56),
    t
  );
};
var Dh = cs,
  Kg = Qt,
  Xg = Dh,
  ev = Ei,
  tv = Zt.Buffer,
  rv = new Array(160);
function Eo() {
  this.init(), (this._w = rv), ev.call(this, 128, 112);
}
Kg(Eo, Xg);
Eo.prototype.init = function () {
  return (
    (this._ah = 3418070365),
    (this._bh = 1654270250),
    (this._ch = 2438529370),
    (this._dh = 355462360),
    (this._eh = 1731405415),
    (this._fh = 2394180231),
    (this._gh = 3675008525),
    (this._hh = 1203062813),
    (this._al = 3238371032),
    (this._bl = 914150663),
    (this._cl = 812702999),
    (this._dl = 4144912697),
    (this._el = 4290775857),
    (this._fl = 1750603025),
    (this._gl = 1694076839),
    (this._hl = 3204075428),
    this
  );
};
Eo.prototype._hash = function () {
  var t = tv.allocUnsafe(48);
  function e(r, n, i) {
    t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
  }
  return (
    e(this._ah, this._al, 0),
    e(this._bh, this._bl, 8),
    e(this._ch, this._cl, 16),
    e(this._dh, this._dl, 24),
    e(this._eh, this._el, 32),
    e(this._fh, this._fl, 40),
    t
  );
};
var nv = Eo,
  Sn = (lg.exports = function (e) {
    e = e.toLowerCase();
    var r = Sn[e];
    if (!r) throw new Error(e + " is not supported (we accept pull requests)");
    return new r();
  });
Sn.sha = mg;
Sn.sha1 = Ig;
Sn.sha224 = Ug;
Sn.sha256 = Ph;
Sn.sha384 = nv;
Sn.sha512 = Dh;
var Z = {},
  iv = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var e = {},
      r = Symbol("test"),
      n = Object(r);
    if (
      typeof r == "string" ||
      Object.prototype.toString.call(r) !== "[object Symbol]" ||
      Object.prototype.toString.call(n) !== "[object Symbol]"
    )
      return !1;
    var i = 42;
    e[r] = i;
    for (r in e) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(e).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(e).length !== 0)
    )
      return !1;
    var s = Object.getOwnPropertySymbols(e);
    if (
      s.length !== 1 ||
      s[0] !== r ||
      !Object.prototype.propertyIsEnumerable.call(e, r)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = Object.getOwnPropertyDescriptor(e, r);
      if (o.value !== i || o.enumerable !== !0) return !1;
    }
    return !0;
  },
  sl = typeof Symbol < "u" && Symbol,
  sv = iv,
  ov = function () {
    return typeof sl != "function" ||
      typeof Symbol != "function" ||
      typeof sl("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : sv();
  },
  ol = { foo: {} },
  av = Object,
  uv = function () {
    return (
      { __proto__: ol }.foo === ol.foo && !({ __proto__: null } instanceof av)
    );
  },
  cv = "Function.prototype.bind called on incompatible ",
  Ma = Array.prototype.slice,
  lv = Object.prototype.toString,
  fv = "[object Function]",
  hv = function (e) {
    var r = this;
    if (typeof r != "function" || lv.call(r) !== fv)
      throw new TypeError(cv + r);
    for (
      var n = Ma.call(arguments, 1),
        i,
        s = function () {
          if (this instanceof i) {
            var d = r.apply(this, n.concat(Ma.call(arguments)));
            return Object(d) === d ? d : this;
          } else return r.apply(e, n.concat(Ma.call(arguments)));
        },
        o = Math.max(0, r.length - n.length),
        a = [],
        c = 0;
      c < o;
      c++
    )
      a.push("$" + c);
    if (
      ((i = Function(
        "binder",
        "return function (" +
          a.join(",") +
          "){ return binder.apply(this,arguments); }"
      )(s)),
      r.prototype)
    ) {
      var f = function () {};
      (f.prototype = r.prototype),
        (i.prototype = new f()),
        (f.prototype = null);
    }
    return i;
  },
  dv = hv,
  Uu = Function.prototype.bind || dv,
  pv = Uu,
  gv = pv.call(Function.call, Object.prototype.hasOwnProperty),
  le,
  si = SyntaxError,
  jh = Function,
  Yn = TypeError,
  Ca = function (t) {
    try {
      return jh('"use strict"; return (' + t + ").constructor;")();
    } catch {}
  },
  pn = Object.getOwnPropertyDescriptor;
if (pn)
  try {
    pn({}, "");
  } catch {
    pn = null;
  }
var Ra = function () {
    throw new Yn();
  },
  vv = pn
    ? (function () {
        try {
          return arguments.callee, Ra;
        } catch {
          try {
            return pn(arguments, "callee").get;
          } catch {
            return Ra;
          }
        }
      })()
    : Ra,
  Fn = ov(),
  bv = uv(),
  ct =
    Object.getPrototypeOf ||
    (bv
      ? function (t) {
          return t.__proto__;
        }
      : null),
  qn = {},
  yv = typeof Uint8Array > "u" || !ct ? le : ct(Uint8Array),
  gn = {
    "%AggregateError%": typeof AggregateError > "u" ? le : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? le : ArrayBuffer,
    "%ArrayIteratorPrototype%": Fn && ct ? ct([][Symbol.iterator]()) : le,
    "%AsyncFromSyncIteratorPrototype%": le,
    "%AsyncFunction%": qn,
    "%AsyncGenerator%": qn,
    "%AsyncGeneratorFunction%": qn,
    "%AsyncIteratorPrototype%": qn,
    "%Atomics%": typeof Atomics > "u" ? le : Atomics,
    "%BigInt%": typeof BigInt > "u" ? le : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? le : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? le : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? le : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? le : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? le : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry > "u" ? le : FinalizationRegistry,
    "%Function%": jh,
    "%GeneratorFunction%": qn,
    "%Int8Array%": typeof Int8Array > "u" ? le : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? le : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? le : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": Fn && ct ? ct(ct([][Symbol.iterator]())) : le,
    "%JSON%": typeof JSON == "object" ? JSON : le,
    "%Map%": typeof Map > "u" ? le : Map,
    "%MapIteratorPrototype%":
      typeof Map > "u" || !Fn || !ct ? le : ct(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? le : Promise,
    "%Proxy%": typeof Proxy > "u" ? le : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? le : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? le : Set,
    "%SetIteratorPrototype%":
      typeof Set > "u" || !Fn || !ct ? le : ct(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer > "u" ? le : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": Fn && ct ? ct(""[Symbol.iterator]()) : le,
    "%Symbol%": Fn ? Symbol : le,
    "%SyntaxError%": si,
    "%ThrowTypeError%": vv,
    "%TypedArray%": yv,
    "%TypeError%": Yn,
    "%Uint8Array%": typeof Uint8Array > "u" ? le : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray > "u" ? le : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? le : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? le : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? le : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? le : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? le : WeakSet,
  };
if (ct)
  try {
    null.error;
  } catch (t) {
    var mv = ct(ct(t));
    gn["%Error.prototype%"] = mv;
  }
var _v = function t(e) {
    var r;
    if (e === "%AsyncFunction%") r = Ca("async function () {}");
    else if (e === "%GeneratorFunction%") r = Ca("function* () {}");
    else if (e === "%AsyncGeneratorFunction%") r = Ca("async function* () {}");
    else if (e === "%AsyncGenerator%") {
      var n = t("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (e === "%AsyncIteratorPrototype%") {
      var i = t("%AsyncGenerator%");
      i && ct && (r = ct(i.prototype));
    }
    return (gn[e] = r), r;
  },
  al = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  ls = Uu,
  Ks = gv,
  wv = ls.call(Function.call, Array.prototype.concat),
  Sv = ls.call(Function.apply, Array.prototype.splice),
  ul = ls.call(Function.call, String.prototype.replace),
  Xs = ls.call(Function.call, String.prototype.slice),
  Ev = ls.call(Function.call, RegExp.prototype.exec),
  xv =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  Mv = /\\(\\)?/g,
  Cv = function (e) {
    var r = Xs(e, 0, 1),
      n = Xs(e, -1);
    if (r === "%" && n !== "%")
      throw new si("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%")
      throw new si("invalid intrinsic syntax, expected opening `%`");
    var i = [];
    return (
      ul(e, xv, function (s, o, a, c) {
        i[i.length] = a ? ul(c, Mv, "$1") : o || s;
      }),
      i
    );
  },
  Rv = function (e, r) {
    var n = e,
      i;
    if ((Ks(al, n) && ((i = al[n]), (n = "%" + i[0] + "%")), Ks(gn, n))) {
      var s = gn[n];
      if ((s === qn && (s = _v(n)), typeof s > "u" && !r))
        throw new Yn(
          "intrinsic " +
            e +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: i, name: n, value: s };
    }
    throw new si("intrinsic " + e + " does not exist!");
  },
  zu = function (e, r) {
    if (typeof e != "string" || e.length === 0)
      throw new Yn("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
      throw new Yn('"allowMissing" argument must be a boolean');
    if (Ev(/^%?[^%]*%?$/, e) === null)
      throw new si(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var n = Cv(e),
      i = n.length > 0 ? n[0] : "",
      s = Rv("%" + i + "%", r),
      o = s.name,
      a = s.value,
      c = !1,
      f = s.alias;
    f && ((i = f[0]), Sv(n, wv([0, 1], f)));
    for (var d = 1, p = !0; d < n.length; d += 1) {
      var b = n[d],
        E = Xs(b, 0, 1),
        R = Xs(b, -1);
      if (
        (E === '"' ||
          E === "'" ||
          E === "`" ||
          R === '"' ||
          R === "'" ||
          R === "`") &&
        E !== R
      )
        throw new si("property names with quotes must have matching quotes");
      if (
        ((b === "constructor" || !p) && (c = !0),
        (i += "." + b),
        (o = "%" + i + "%"),
        Ks(gn, o))
      )
        a = gn[o];
      else if (a != null) {
        if (!(b in a)) {
          if (!r)
            throw new Yn(
              "base intrinsic for " +
                e +
                " exists, but the property is not available."
            );
          return;
        }
        if (pn && d + 1 >= n.length) {
          var O = pn(a, b);
          (p = !!O),
            p && "get" in O && !("originalValue" in O.get)
              ? (a = O.get)
              : (a = a[b]);
        } else (p = Ks(a, b)), (a = a[b]);
        p && !c && (gn[o] = a);
      }
    }
    return a;
  },
  yu = {},
  Iv = {
    get exports() {
      return yu;
    },
    set exports(t) {
      yu = t;
    },
  };
(function (t) {
  var e = Uu,
    r = zu,
    n = r("%Function.prototype.apply%"),
    i = r("%Function.prototype.call%"),
    s = r("%Reflect.apply%", !0) || e.call(i, n),
    o = r("%Object.getOwnPropertyDescriptor%", !0),
    a = r("%Object.defineProperty%", !0),
    c = r("%Math.max%");
  if (a)
    try {
      a({}, "a", { value: 1 });
    } catch {
      a = null;
    }
  t.exports = function (p) {
    var b = s(e, i, arguments);
    if (o && a) {
      var E = o(b, "length");
      E.configurable &&
        a(b, "length", { value: 1 + c(0, p.length - (arguments.length - 1)) });
    }
    return b;
  };
  var f = function () {
    return s(e, n, arguments);
  };
  a ? a(t.exports, "apply", { value: f }) : (t.exports.apply = f);
})(Iv);
var Bh = zu,
  Fh = yu,
  Av = Fh(Bh("String.prototype.indexOf")),
  kv = function (e, r) {
    var n = Bh(e, !!r);
    return typeof n == "function" && Av(e, ".prototype.") > -1 ? Fh(n) : n;
  },
  qu = typeof Map == "function" && Map.prototype,
  Ia =
    Object.getOwnPropertyDescriptor && qu
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  eo = qu && Ia && typeof Ia.get == "function" ? Ia.get : null,
  cl = qu && Map.prototype.forEach,
  Gu = typeof Set == "function" && Set.prototype,
  Aa =
    Object.getOwnPropertyDescriptor && Gu
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  to = Gu && Aa && typeof Aa.get == "function" ? Aa.get : null,
  ll = Gu && Set.prototype.forEach,
  Tv = typeof WeakMap == "function" && WeakMap.prototype,
  Hi = Tv ? WeakMap.prototype.has : null,
  Ov = typeof WeakSet == "function" && WeakSet.prototype,
  Wi = Ov ? WeakSet.prototype.has : null,
  Nv = typeof WeakRef == "function" && WeakRef.prototype,
  fl = Nv ? WeakRef.prototype.deref : null,
  Lv = Boolean.prototype.valueOf,
  Pv = Object.prototype.toString,
  $v = Function.prototype.toString,
  Dv = String.prototype.match,
  Ju = String.prototype.slice,
  Tr = String.prototype.replace,
  jv = String.prototype.toUpperCase,
  hl = String.prototype.toLowerCase,
  Hh = RegExp.prototype.test,
  dl = Array.prototype.concat,
  or = Array.prototype.join,
  Bv = Array.prototype.slice,
  pl = Math.floor,
  mu = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  ka = Object.getOwnPropertySymbols,
  _u =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  oi = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  mt =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === oi || "symbol")
      ? Symbol.toStringTag
      : null,
  Wh = Object.prototype.propertyIsEnumerable,
  gl =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (t) {
          return t.__proto__;
        }
      : null);
function vl(t, e) {
  if (
    t === 1 / 0 ||
    t === -1 / 0 ||
    t !== t ||
    (t && t > -1e3 && t < 1e3) ||
    Hh.call(/e/, e)
  )
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -pl(-t) : pl(t);
    if (n !== t) {
      var i = String(n),
        s = Ju.call(e, i.length + 1);
      return (
        Tr.call(i, r, "$&_") +
        "." +
        Tr.call(Tr.call(s, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return Tr.call(e, r, "$&_");
}
var wu = po,
  bl = wu.custom,
  yl = Uh(bl) ? bl : null,
  Fv = function t(e, r, n, i) {
    var s = r || {};
    if (
      Ir(s, "quoteStyle") &&
      s.quoteStyle !== "single" &&
      s.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      Ir(s, "maxStringLength") &&
      (typeof s.maxStringLength == "number"
        ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0
        : s.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var o = Ir(s, "customInspect") ? s.customInspect : !0;
    if (typeof o != "boolean" && o !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      Ir(s, "indent") &&
      s.indent !== null &&
      s.indent !== "	" &&
      !(parseInt(s.indent, 10) === s.indent && s.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (Ir(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var a = s.numericSeparator;
    if (typeof e > "u") return "undefined";
    if (e === null) return "null";
    if (typeof e == "boolean") return e ? "true" : "false";
    if (typeof e == "string") return qh(e, s);
    if (typeof e == "number") {
      if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
      var c = String(e);
      return a ? vl(e, c) : c;
    }
    if (typeof e == "bigint") {
      var f = String(e) + "n";
      return a ? vl(e, f) : f;
    }
    var d = typeof s.depth > "u" ? 5 : s.depth;
    if ((typeof n > "u" && (n = 0), n >= d && d > 0 && typeof e == "object"))
      return Su(e) ? "[Array]" : "[Object]";
    var p = ib(s, n);
    if (typeof i > "u") i = [];
    else if (zh(i, e) >= 0) return "[Circular]";
    function b(w, u, h) {
      if ((u && ((i = Bv.call(i)), i.push(u)), h)) {
        var m = { depth: s.depth };
        return (
          Ir(s, "quoteStyle") && (m.quoteStyle = s.quoteStyle),
          t(w, m, n + 1, i)
        );
      }
      return t(w, s, n + 1, i);
    }
    if (typeof e == "function" && !ml(e)) {
      var E = Zv(e),
        R = ks(e, b);
      return (
        "[Function" +
        (E ? ": " + E : " (anonymous)") +
        "]" +
        (R.length > 0 ? " { " + or.call(R, ", ") + " }" : "")
      );
    }
    if (Uh(e)) {
      var O = oi
        ? Tr.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : _u.call(e);
      return typeof e == "object" && !oi ? Li(O) : O;
    }
    if (tb(e)) {
      for (
        var $ = "<" + hl.call(String(e.nodeName)),
          I = e.attributes || [],
          k = 0;
        k < I.length;
        k++
      )
        $ += " " + I[k].name + "=" + Vh(Hv(I[k].value), "double", s);
      return (
        ($ += ">"),
        e.childNodes && e.childNodes.length && ($ += "..."),
        ($ += "</" + hl.call(String(e.nodeName)) + ">"),
        $
      );
    }
    if (Su(e)) {
      if (e.length === 0) return "[]";
      var N = ks(e, b);
      return p && !nb(N)
        ? "[" + Eu(N, p) + "]"
        : "[ " + or.call(N, ", ") + " ]";
    }
    if (Vv(e)) {
      var D = ks(e, b);
      return !("cause" in Error.prototype) &&
        "cause" in e &&
        !Wh.call(e, "cause")
        ? "{ [" +
            String(e) +
            "] " +
            or.call(dl.call("[cause]: " + b(e.cause), D), ", ") +
            " }"
        : D.length === 0
        ? "[" + String(e) + "]"
        : "{ [" + String(e) + "] " + or.call(D, ", ") + " }";
    }
    if (typeof e == "object" && o) {
      if (yl && typeof e[yl] == "function" && wu)
        return wu(e, { depth: d - n });
      if (o !== "symbol" && typeof e.inspect == "function") return e.inspect();
    }
    if (Qv(e)) {
      var L = [];
      return (
        cl &&
          cl.call(e, function (w, u) {
            L.push(b(u, e, !0) + " => " + b(w, e));
          }),
        _l("Map", eo.call(e), L, p)
      );
    }
    if (Xv(e)) {
      var U = [];
      return (
        ll &&
          ll.call(e, function (w) {
            U.push(b(w, e));
          }),
        _l("Set", to.call(e), U, p)
      );
    }
    if (Yv(e)) return Ta("WeakMap");
    if (eb(e)) return Ta("WeakSet");
    if (Kv(e)) return Ta("WeakRef");
    if (zv(e)) return Li(b(Number(e)));
    if (Gv(e)) return Li(b(mu.call(e)));
    if (qv(e)) return Li(Lv.call(e));
    if (Uv(e)) return Li(b(String(e)));
    if (!Wv(e) && !ml(e)) {
      var G = ks(e, b),
        q = gl
          ? gl(e) === Object.prototype
          : e instanceof Object || e.constructor === Object,
        H = e instanceof Object ? "" : "null prototype",
        Y =
          !q && mt && Object(e) === e && mt in e
            ? Ju.call(Hr(e), 8, -1)
            : H
            ? "Object"
            : "",
        Q =
          q || typeof e.constructor != "function"
            ? ""
            : e.constructor.name
            ? e.constructor.name + " "
            : "",
        K =
          Q +
          (Y || H
            ? "[" + or.call(dl.call([], Y || [], H || []), ": ") + "] "
            : "");
      return G.length === 0
        ? K + "{}"
        : p
        ? K + "{" + Eu(G, p) + "}"
        : K + "{ " + or.call(G, ", ") + " }";
    }
    return String(e);
  };
function Vh(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Hv(t) {
  return Tr.call(String(t), /"/g, "&quot;");
}
function Su(t) {
  return (
    Hr(t) === "[object Array]" && (!mt || !(typeof t == "object" && mt in t))
  );
}
function Wv(t) {
  return (
    Hr(t) === "[object Date]" && (!mt || !(typeof t == "object" && mt in t))
  );
}
function ml(t) {
  return (
    Hr(t) === "[object RegExp]" && (!mt || !(typeof t == "object" && mt in t))
  );
}
function Vv(t) {
  return (
    Hr(t) === "[object Error]" && (!mt || !(typeof t == "object" && mt in t))
  );
}
function Uv(t) {
  return (
    Hr(t) === "[object String]" && (!mt || !(typeof t == "object" && mt in t))
  );
}
function zv(t) {
  return (
    Hr(t) === "[object Number]" && (!mt || !(typeof t == "object" && mt in t))
  );
}
function qv(t) {
  return (
    Hr(t) === "[object Boolean]" && (!mt || !(typeof t == "object" && mt in t))
  );
}
function Uh(t) {
  if (oi) return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol") return !0;
  if (!t || typeof t != "object" || !_u) return !1;
  try {
    return _u.call(t), !0;
  } catch {}
  return !1;
}
function Gv(t) {
  if (!t || typeof t != "object" || !mu) return !1;
  try {
    return mu.call(t), !0;
  } catch {}
  return !1;
}
var Jv =
  Object.prototype.hasOwnProperty ||
  function (t) {
    return t in this;
  };
function Ir(t, e) {
  return Jv.call(t, e);
}
function Hr(t) {
  return Pv.call(t);
}
function Zv(t) {
  if (t.name) return t.name;
  var e = Dv.call($v.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function zh(t, e) {
  if (t.indexOf) return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
  return -1;
}
function Qv(t) {
  if (!eo || !t || typeof t != "object") return !1;
  try {
    eo.call(t);
    try {
      to.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {}
  return !1;
}
function Yv(t) {
  if (!Hi || !t || typeof t != "object") return !1;
  try {
    Hi.call(t, Hi);
    try {
      Wi.call(t, Wi);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {}
  return !1;
}
function Kv(t) {
  if (!fl || !t || typeof t != "object") return !1;
  try {
    return fl.call(t), !0;
  } catch {}
  return !1;
}
function Xv(t) {
  if (!to || !t || typeof t != "object") return !1;
  try {
    to.call(t);
    try {
      eo.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {}
  return !1;
}
function eb(t) {
  if (!Wi || !t || typeof t != "object") return !1;
  try {
    Wi.call(t, Wi);
    try {
      Hi.call(t, Hi);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {}
  return !1;
}
function tb(t) {
  return !t || typeof t != "object"
    ? !1
    : typeof HTMLElement < "u" && t instanceof HTMLElement
    ? !0
    : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function qh(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength,
      n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return qh(Ju.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = Tr.call(Tr.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, rb);
  return Vh(i, "single", e);
}
function rb(t) {
  var e = t.charCodeAt(0),
    r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + jv.call(e.toString(16));
}
function Li(t) {
  return "Object(" + t + ")";
}
function Ta(t) {
  return t + " { ? }";
}
function _l(t, e, r, n) {
  var i = n ? Eu(r, n) : or.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function nb(t) {
  for (var e = 0; e < t.length; e++)
    if (
      zh(
        t[e],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function ib(t, e) {
  var r;
  if (t.indent === "	") r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = or.call(Array(t.indent + 1), " ");
  else return null;
  return { base: r, prev: or.call(Array(e + 1), r) };
}
function Eu(t, e) {
  if (t.length === 0) return "";
  var r =
    `
` +
    e.prev +
    e.base;
  return (
    r +
    or.call(t, "," + r) +
    `
` +
    e.prev
  );
}
function ks(t, e) {
  var r = Su(t),
    n = [];
  if (r) {
    n.length = t.length;
    for (var i = 0; i < t.length; i++) n[i] = Ir(t, i) ? e(t[i], t) : "";
  }
  var s = typeof ka == "function" ? ka(t) : [],
    o;
  if (oi) {
    o = {};
    for (var a = 0; a < s.length; a++) o["$" + s[a]] = s[a];
  }
  for (var c in t)
    Ir(t, c) &&
      ((r && String(Number(c)) === c && c < t.length) ||
        (oi && o["$" + c] instanceof Symbol) ||
        (Hh.call(/[^\w$]/, c)
          ? n.push(e(c, t) + ": " + e(t[c], t))
          : n.push(c + ": " + e(t[c], t))));
  if (typeof ka == "function")
    for (var f = 0; f < s.length; f++)
      Wh.call(t, s[f]) && n.push("[" + e(s[f]) + "]: " + e(t[s[f]], t));
  return n;
}
var Zu = zu,
  xi = kv,
  sb = Fv,
  ob = Zu("%TypeError%"),
  Ts = Zu("%WeakMap%", !0),
  Os = Zu("%Map%", !0),
  ab = xi("WeakMap.prototype.get", !0),
  ub = xi("WeakMap.prototype.set", !0),
  cb = xi("WeakMap.prototype.has", !0),
  lb = xi("Map.prototype.get", !0),
  fb = xi("Map.prototype.set", !0),
  hb = xi("Map.prototype.has", !0),
  Qu = function (t, e) {
    for (var r = t, n; (n = r.next) !== null; r = n)
      if (n.key === e)
        return (r.next = n.next), (n.next = t.next), (t.next = n), n;
  },
  db = function (t, e) {
    var r = Qu(t, e);
    return r && r.value;
  },
  pb = function (t, e, r) {
    var n = Qu(t, e);
    n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
  },
  gb = function (t, e) {
    return !!Qu(t, e);
  },
  vb = function () {
    var e,
      r,
      n,
      i = {
        assert: function (s) {
          if (!i.has(s)) throw new ob("Side channel does not contain " + sb(s));
        },
        get: function (s) {
          if (Ts && s && (typeof s == "object" || typeof s == "function")) {
            if (e) return ab(e, s);
          } else if (Os) {
            if (r) return lb(r, s);
          } else if (n) return db(n, s);
        },
        has: function (s) {
          if (Ts && s && (typeof s == "object" || typeof s == "function")) {
            if (e) return cb(e, s);
          } else if (Os) {
            if (r) return hb(r, s);
          } else if (n) return gb(n, s);
          return !1;
        },
        set: function (s, o) {
          Ts && s && (typeof s == "object" || typeof s == "function")
            ? (e || (e = new Ts()), ub(e, s, o))
            : Os
            ? (r || (r = new Os()), fb(r, s, o))
            : (n || (n = { key: {}, next: null }), pb(n, s, o));
        },
      };
    return i;
  },
  bb = String.prototype.replace,
  yb = /%20/g,
  Oa = { RFC1738: "RFC1738", RFC3986: "RFC3986" },
  Yu = {
    default: Oa.RFC3986,
    formatters: {
      RFC1738: function (t) {
        return bb.call(t, yb, "+");
      },
      RFC3986: function (t) {
        return String(t);
      },
    },
    RFC1738: Oa.RFC1738,
    RFC3986: Oa.RFC3986,
  },
  mb = Yu,
  Na = Object.prototype.hasOwnProperty,
  on = Array.isArray,
  er = (function () {
    for (var t = [], e = 0; e < 256; ++e)
      t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
    return t;
  })(),
  _b = function (e) {
    for (; e.length > 1; ) {
      var r = e.pop(),
        n = r.obj[r.prop];
      if (on(n)) {
        for (var i = [], s = 0; s < n.length; ++s)
          typeof n[s] < "u" && i.push(n[s]);
        r.obj[r.prop] = i;
      }
    }
  },
  Gh = function (e, r) {
    for (
      var n = r && r.plainObjects ? Object.create(null) : {}, i = 0;
      i < e.length;
      ++i
    )
      typeof e[i] < "u" && (n[i] = e[i]);
    return n;
  },
  wb = function t(e, r, n) {
    if (!r) return e;
    if (typeof r != "object") {
      if (on(e)) e.push(r);
      else if (e && typeof e == "object")
        ((n && (n.plainObjects || n.allowPrototypes)) ||
          !Na.call(Object.prototype, r)) &&
          (e[r] = !0);
      else return [e, r];
      return e;
    }
    if (!e || typeof e != "object") return [e].concat(r);
    var i = e;
    return (
      on(e) && !on(r) && (i = Gh(e, n)),
      on(e) && on(r)
        ? (r.forEach(function (s, o) {
            if (Na.call(e, o)) {
              var a = e[o];
              a && typeof a == "object" && s && typeof s == "object"
                ? (e[o] = t(a, s, n))
                : e.push(s);
            } else e[o] = s;
          }),
          e)
        : Object.keys(r).reduce(function (s, o) {
            var a = r[o];
            return Na.call(s, o) ? (s[o] = t(s[o], a, n)) : (s[o] = a), s;
          }, i)
    );
  },
  Sb = function (e, r) {
    return Object.keys(r).reduce(function (n, i) {
      return (n[i] = r[i]), n;
    }, e);
  },
  Eb = function (t, e, r) {
    var n = t.replace(/\+/g, " ");
    if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch {
      return n;
    }
  },
  xb = function (e, r, n, i, s) {
    if (e.length === 0) return e;
    var o = e;
    if (
      (typeof e == "symbol"
        ? (o = Symbol.prototype.toString.call(e))
        : typeof e != "string" && (o = String(e)),
      n === "iso-8859-1")
    )
      return escape(o).replace(/%u[0-9a-f]{4}/gi, function (d) {
        return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
      });
    for (var a = "", c = 0; c < o.length; ++c) {
      var f = o.charCodeAt(c);
      if (
        f === 45 ||
        f === 46 ||
        f === 95 ||
        f === 126 ||
        (f >= 48 && f <= 57) ||
        (f >= 65 && f <= 90) ||
        (f >= 97 && f <= 122) ||
        (s === mb.RFC1738 && (f === 40 || f === 41))
      ) {
        a += o.charAt(c);
        continue;
      }
      if (f < 128) {
        a = a + er[f];
        continue;
      }
      if (f < 2048) {
        a = a + (er[192 | (f >> 6)] + er[128 | (f & 63)]);
        continue;
      }
      if (f < 55296 || f >= 57344) {
        a =
          a +
          (er[224 | (f >> 12)] +
            er[128 | ((f >> 6) & 63)] +
            er[128 | (f & 63)]);
        continue;
      }
      (c += 1),
        (f = 65536 + (((f & 1023) << 10) | (o.charCodeAt(c) & 1023))),
        (a +=
          er[240 | (f >> 18)] +
          er[128 | ((f >> 12) & 63)] +
          er[128 | ((f >> 6) & 63)] +
          er[128 | (f & 63)]);
    }
    return a;
  },
  Mb = function (e) {
    for (
      var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0;
      i < r.length;
      ++i
    )
      for (
        var s = r[i], o = s.obj[s.prop], a = Object.keys(o), c = 0;
        c < a.length;
        ++c
      ) {
        var f = a[c],
          d = o[f];
        typeof d == "object" &&
          d !== null &&
          n.indexOf(d) === -1 &&
          (r.push({ obj: o, prop: f }), n.push(d));
      }
    return _b(r), e;
  },
  Cb = function (e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  },
  Rb = function (e) {
    return !e || typeof e != "object"
      ? !1
      : !!(
          e.constructor &&
          e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
  },
  Ib = function (e, r) {
    return [].concat(e, r);
  },
  Ab = function (e, r) {
    if (on(e)) {
      for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
      return n;
    }
    return r(e);
  },
  Jh = {
    arrayToObject: Gh,
    assign: Sb,
    combine: Ib,
    compact: Mb,
    decode: Eb,
    encode: xb,
    isBuffer: Rb,
    isRegExp: Cb,
    maybeMap: Ab,
    merge: wb,
  },
  Zh = vb,
  zs = Jh,
  Vi = Yu,
  kb = Object.prototype.hasOwnProperty,
  wl = {
    brackets: function (e) {
      return e + "[]";
    },
    comma: "comma",
    indices: function (e, r) {
      return e + "[" + r + "]";
    },
    repeat: function (e) {
      return e;
    },
  },
  vr = Array.isArray,
  Tb = Array.prototype.push,
  Qh = function (t, e) {
    Tb.apply(t, vr(e) ? e : [e]);
  },
  Ob = Date.prototype.toISOString,
  Sl = Vi.default,
  yt = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: zs.encode,
    encodeValuesOnly: !1,
    format: Sl,
    formatter: Vi.formatters[Sl],
    indices: !1,
    serializeDate: function (e) {
      return Ob.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Nb = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "number" ||
      typeof e == "boolean" ||
      typeof e == "symbol" ||
      typeof e == "bigint"
    );
  },
  La = {},
  Lb = function t(e, r, n, i, s, o, a, c, f, d, p, b, E, R, O, $) {
    for (var I = e, k = $, N = 0, D = !1; (k = k.get(La)) !== void 0 && !D; ) {
      var L = k.get(e);
      if (((N += 1), typeof L < "u")) {
        if (L === N) throw new RangeError("Cyclic object value");
        D = !0;
      }
      typeof k.get(La) > "u" && (N = 0);
    }
    if (
      (typeof c == "function"
        ? (I = c(r, I))
        : I instanceof Date
        ? (I = p(I))
        : n === "comma" &&
          vr(I) &&
          (I = zs.maybeMap(I, function (m) {
            return m instanceof Date ? p(m) : m;
          })),
      I === null)
    ) {
      if (s) return a && !R ? a(r, yt.encoder, O, "key", b) : r;
      I = "";
    }
    if (Nb(I) || zs.isBuffer(I)) {
      if (a) {
        var U = R ? r : a(r, yt.encoder, O, "key", b);
        return [E(U) + "=" + E(a(I, yt.encoder, O, "value", b))];
      }
      return [E(r) + "=" + E(String(I))];
    }
    var G = [];
    if (typeof I > "u") return G;
    var q;
    if (n === "comma" && vr(I))
      R && a && (I = zs.maybeMap(I, a)),
        (q = [{ value: I.length > 0 ? I.join(",") || null : void 0 }]);
    else if (vr(c)) q = c;
    else {
      var H = Object.keys(I);
      q = f ? H.sort(f) : H;
    }
    for (
      var Y = i && vr(I) && I.length === 1 ? r + "[]" : r, Q = 0;
      Q < q.length;
      ++Q
    ) {
      var K = q[Q],
        w = typeof K == "object" && typeof K.value < "u" ? K.value : I[K];
      if (!(o && w === null)) {
        var u = vr(I)
          ? typeof n == "function"
            ? n(Y, K)
            : Y
          : Y + (d ? "." + K : "[" + K + "]");
        $.set(e, N);
        var h = Zh();
        h.set(La, $),
          Qh(
            G,
            t(
              w,
              u,
              n,
              i,
              s,
              o,
              n === "comma" && R && vr(I) ? null : a,
              c,
              f,
              d,
              p,
              b,
              E,
              R,
              O,
              h
            )
          );
      }
    }
    return G;
  },
  Pb = function (e) {
    if (!e) return yt;
    if (
      e.encoder !== null &&
      typeof e.encoder < "u" &&
      typeof e.encoder != "function"
    )
      throw new TypeError("Encoder has to be a function.");
    var r = e.charset || yt.charset;
    if (
      typeof e.charset < "u" &&
      e.charset !== "utf-8" &&
      e.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var n = Vi.default;
    if (typeof e.format < "u") {
      if (!kb.call(Vi.formatters, e.format))
        throw new TypeError("Unknown format option provided.");
      n = e.format;
    }
    var i = Vi.formatters[n],
      s = yt.filter;
    return (
      (typeof e.filter == "function" || vr(e.filter)) && (s = e.filter),
      {
        addQueryPrefix:
          typeof e.addQueryPrefix == "boolean"
            ? e.addQueryPrefix
            : yt.addQueryPrefix,
        allowDots: typeof e.allowDots > "u" ? yt.allowDots : !!e.allowDots,
        charset: r,
        charsetSentinel:
          typeof e.charsetSentinel == "boolean"
            ? e.charsetSentinel
            : yt.charsetSentinel,
        delimiter: typeof e.delimiter > "u" ? yt.delimiter : e.delimiter,
        encode: typeof e.encode == "boolean" ? e.encode : yt.encode,
        encoder: typeof e.encoder == "function" ? e.encoder : yt.encoder,
        encodeValuesOnly:
          typeof e.encodeValuesOnly == "boolean"
            ? e.encodeValuesOnly
            : yt.encodeValuesOnly,
        filter: s,
        format: n,
        formatter: i,
        serializeDate:
          typeof e.serializeDate == "function"
            ? e.serializeDate
            : yt.serializeDate,
        skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : yt.skipNulls,
        sort: typeof e.sort == "function" ? e.sort : null,
        strictNullHandling:
          typeof e.strictNullHandling == "boolean"
            ? e.strictNullHandling
            : yt.strictNullHandling,
      }
    );
  },
  $b = function (t, e) {
    var r = t,
      n = Pb(e),
      i,
      s;
    typeof n.filter == "function"
      ? ((s = n.filter), (r = s("", r)))
      : vr(n.filter) && ((s = n.filter), (i = s));
    var o = [];
    if (typeof r != "object" || r === null) return "";
    var a;
    e && e.arrayFormat in wl
      ? (a = e.arrayFormat)
      : e && "indices" in e
      ? (a = e.indices ? "indices" : "repeat")
      : (a = "indices");
    var c = wl[a];
    if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var f = c === "comma" && e && e.commaRoundTrip;
    i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
    for (var d = Zh(), p = 0; p < i.length; ++p) {
      var b = i[p];
      (n.skipNulls && r[b] === null) ||
        Qh(
          o,
          Lb(
            r[b],
            b,
            c,
            f,
            n.strictNullHandling,
            n.skipNulls,
            n.encode ? n.encoder : null,
            n.filter,
            n.sort,
            n.allowDots,
            n.serializeDate,
            n.format,
            n.formatter,
            n.encodeValuesOnly,
            n.charset,
            d
          )
        );
    }
    var E = o.join(n.delimiter),
      R = n.addQueryPrefix === !0 ? "?" : "";
    return (
      n.charsetSentinel &&
        (n.charset === "iso-8859-1"
          ? (R += "utf8=%26%2310003%3B&")
          : (R += "utf8=%E2%9C%93&")),
      E.length > 0 ? R + E : ""
    );
  },
  ai = Jh,
  xu = Object.prototype.hasOwnProperty,
  Db = Array.isArray,
  at = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: ai.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  jb = function (t) {
    return t.replace(/&#(\d+);/g, function (e, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  Yh = function (t, e) {
    return t && typeof t == "string" && e.comma && t.indexOf(",") > -1
      ? t.split(",")
      : t;
  },
  Bb = "utf8=%26%2310003%3B",
  Fb = "utf8=%E2%9C%93",
  Hb = function (e, r) {
    var n = { __proto__: null },
      i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
      s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      o = i.split(r.delimiter, s),
      a = -1,
      c,
      f = r.charset;
    if (r.charsetSentinel)
      for (c = 0; c < o.length; ++c)
        o[c].indexOf("utf8=") === 0 &&
          (o[c] === Fb ? (f = "utf-8") : o[c] === Bb && (f = "iso-8859-1"),
          (a = c),
          (c = o.length));
    for (c = 0; c < o.length; ++c)
      if (c !== a) {
        var d = o[c],
          p = d.indexOf("]="),
          b = p === -1 ? d.indexOf("=") : p + 1,
          E,
          R;
        b === -1
          ? ((E = r.decoder(d, at.decoder, f, "key")),
            (R = r.strictNullHandling ? null : ""))
          : ((E = r.decoder(d.slice(0, b), at.decoder, f, "key")),
            (R = ai.maybeMap(Yh(d.slice(b + 1), r), function (O) {
              return r.decoder(O, at.decoder, f, "value");
            }))),
          R && r.interpretNumericEntities && f === "iso-8859-1" && (R = jb(R)),
          d.indexOf("[]=") > -1 && (R = Db(R) ? [R] : R),
          xu.call(n, E) ? (n[E] = ai.combine(n[E], R)) : (n[E] = R);
      }
    return n;
  },
  Wb = function (t, e, r, n) {
    for (var i = n ? e : Yh(e, r), s = t.length - 1; s >= 0; --s) {
      var o,
        a = t[s];
      if (a === "[]" && r.parseArrays) o = [].concat(i);
      else {
        o = r.plainObjects ? Object.create(null) : {};
        var c =
            a.charAt(0) === "[" && a.charAt(a.length - 1) === "]"
              ? a.slice(1, -1)
              : a,
          f = parseInt(c, 10);
        !r.parseArrays && c === ""
          ? (o = { 0: i })
          : !isNaN(f) &&
            a !== c &&
            String(f) === c &&
            f >= 0 &&
            r.parseArrays &&
            f <= r.arrayLimit
          ? ((o = []), (o[f] = i))
          : c !== "__proto__" && (o[c] = i);
      }
      i = o;
    }
    return i;
  },
  Vb = function (e, r, n, i) {
    if (e) {
      var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        o = /(\[[^[\]]*])/,
        a = /(\[[^[\]]*])/g,
        c = n.depth > 0 && o.exec(s),
        f = c ? s.slice(0, c.index) : s,
        d = [];
      if (f) {
        if (
          !n.plainObjects &&
          xu.call(Object.prototype, f) &&
          !n.allowPrototypes
        )
          return;
        d.push(f);
      }
      for (
        var p = 0;
        n.depth > 0 && (c = a.exec(s)) !== null && p < n.depth;

      ) {
        if (
          ((p += 1),
          !n.plainObjects &&
            xu.call(Object.prototype, c[1].slice(1, -1)) &&
            !n.allowPrototypes)
        )
          return;
        d.push(c[1]);
      }
      return c && d.push("[" + s.slice(c.index) + "]"), Wb(d, r, n, i);
    }
  },
  Ub = function (e) {
    if (!e) return at;
    if (
      e.decoder !== null &&
      e.decoder !== void 0 &&
      typeof e.decoder != "function"
    )
      throw new TypeError("Decoder has to be a function.");
    if (
      typeof e.charset < "u" &&
      e.charset !== "utf-8" &&
      e.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var r = typeof e.charset > "u" ? at.charset : e.charset;
    return {
      allowDots: typeof e.allowDots > "u" ? at.allowDots : !!e.allowDots,
      allowPrototypes:
        typeof e.allowPrototypes == "boolean"
          ? e.allowPrototypes
          : at.allowPrototypes,
      allowSparse:
        typeof e.allowSparse == "boolean" ? e.allowSparse : at.allowSparse,
      arrayLimit:
        typeof e.arrayLimit == "number" ? e.arrayLimit : at.arrayLimit,
      charset: r,
      charsetSentinel:
        typeof e.charsetSentinel == "boolean"
          ? e.charsetSentinel
          : at.charsetSentinel,
      comma: typeof e.comma == "boolean" ? e.comma : at.comma,
      decoder: typeof e.decoder == "function" ? e.decoder : at.decoder,
      delimiter:
        typeof e.delimiter == "string" || ai.isRegExp(e.delimiter)
          ? e.delimiter
          : at.delimiter,
      depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : at.depth,
      ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof e.interpretNumericEntities == "boolean"
          ? e.interpretNumericEntities
          : at.interpretNumericEntities,
      parameterLimit:
        typeof e.parameterLimit == "number"
          ? e.parameterLimit
          : at.parameterLimit,
      parseArrays: e.parseArrays !== !1,
      plainObjects:
        typeof e.plainObjects == "boolean" ? e.plainObjects : at.plainObjects,
      strictNullHandling:
        typeof e.strictNullHandling == "boolean"
          ? e.strictNullHandling
          : at.strictNullHandling,
    };
  },
  zb = function (t, e) {
    var r = Ub(e);
    if (t === "" || t === null || typeof t > "u")
      return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof t == "string" ? Hb(t, r) : t,
        i = r.plainObjects ? Object.create(null) : {},
        s = Object.keys(n),
        o = 0;
      o < s.length;
      ++o
    ) {
      var a = s[o],
        c = Vb(a, n[a], r, typeof t == "string");
      i = ai.merge(i, c, r);
    }
    return r.allowSparse === !0 ? i : ai.compact(i);
  },
  qb = $b,
  Gb = zb,
  Jb = Yu,
  Zb = { formats: Jb, parse: Gb, stringify: qb },
  fs = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ProviderType =
      t.RegExpString =
      t.IntNumber =
      t.BigIntString =
      t.AddressString =
      t.HexString =
      t.OpaqueType =
        void 0);
  function e() {
    return (n) => n;
  }
  (t.OpaqueType = e),
    (t.HexString = e()),
    (t.AddressString = e()),
    (t.BigIntString = e());
  function r(n) {
    return Math.floor(n);
  }
  (t.IntNumber = r),
    (t.RegExpString = e()),
    (function (n) {
      (n.CoinbaseWallet = "CoinbaseWallet"),
        (n.MetaMask = "MetaMask"),
        (n.Unselected = "");
    })(t.ProviderType || (t.ProviderType = {}));
})(fs);
var Qb =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.isInIFrame =
  Z.createQrUrl =
  Z.getFavicon =
  Z.range =
  Z.isBigNumber =
  Z.ensureParsedJSONObject =
  Z.ensureBN =
  Z.ensureRegExpString =
  Z.ensureIntNumber =
  Z.ensureBuffer =
  Z.ensureAddressString =
  Z.ensureEvenLengthHexString =
  Z.ensureHexString =
  Z.isHexString =
  Z.prepend0x =
  Z.strip0x =
  Z.has0xPrefix =
  Z.hexStringFromIntNumber =
  Z.intNumberFromHexString =
  Z.bigIntStringFromBN =
  Z.hexStringFromBuffer =
  Z.hexStringToUint8Array =
  Z.uint8ArrayToHex =
  Z.randomBytesHex =
    void 0;
const Ar = Qb(ii),
  Yb = Zb,
  En = ss,
  Bt = fs,
  Kh = /^[0-9]*$/,
  Xh = /^[a-f0-9]*$/;
function Kb(t) {
  return ed(crypto.getRandomValues(new Uint8Array(t)));
}
Z.randomBytesHex = Kb;
function ed(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
Z.uint8ArrayToHex = ed;
function Xb(t) {
  return new Uint8Array(t.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
Z.hexStringToUint8Array = Xb;
function ey(t, e = !1) {
  const r = t.toString("hex");
  return (0, Bt.HexString)(e ? "0x" + r : r);
}
Z.hexStringFromBuffer = ey;
function ty(t) {
  return (0, Bt.BigIntString)(t.toString(10));
}
Z.bigIntStringFromBN = ty;
function ry(t) {
  return (0, Bt.IntNumber)(new Ar.default(ds(t, !1), 16).toNumber());
}
Z.intNumberFromHexString = ry;
function ny(t) {
  return (0, Bt.HexString)("0x" + new Ar.default(t).toString(16));
}
Z.hexStringFromIntNumber = ny;
function Ku(t) {
  return t.startsWith("0x") || t.startsWith("0X");
}
Z.has0xPrefix = Ku;
function xo(t) {
  return Ku(t) ? t.slice(2) : t;
}
Z.strip0x = xo;
function td(t) {
  return Ku(t) ? "0x" + t.slice(2) : "0x" + t;
}
Z.prepend0x = td;
function hs(t) {
  if (typeof t != "string") return !1;
  const e = xo(t).toLowerCase();
  return Xh.test(e);
}
Z.isHexString = hs;
function rd(t, e = !1) {
  if (typeof t == "string") {
    const r = xo(t).toLowerCase();
    if (Xh.test(r)) return (0, Bt.HexString)(e ? "0x" + r : r);
  }
  throw En.standardErrors.rpc.invalidParams(
    `"${String(t)}" is not a hexadecimal string`
  );
}
Z.ensureHexString = rd;
function ds(t, e = !1) {
  let r = rd(t, !1);
  return (
    r.length % 2 === 1 && (r = (0, Bt.HexString)("0" + r)),
    e ? (0, Bt.HexString)("0x" + r) : r
  );
}
Z.ensureEvenLengthHexString = ds;
function iy(t) {
  if (typeof t == "string") {
    const e = xo(t).toLowerCase();
    if (hs(e) && e.length === 40) return (0, Bt.AddressString)(td(e));
  }
  throw En.standardErrors.rpc.invalidParams(
    `Invalid Ethereum address: ${String(t)}`
  );
}
Z.ensureAddressString = iy;
function sy(t) {
  if (Buffer.isBuffer(t)) return t;
  if (typeof t == "string")
    if (hs(t)) {
      const e = ds(t, !1);
      return Buffer.from(e, "hex");
    } else return Buffer.from(t, "utf8");
  throw En.standardErrors.rpc.invalidParams(`Not binary data: ${String(t)}`);
}
Z.ensureBuffer = sy;
function nd(t) {
  if (typeof t == "number" && Number.isInteger(t)) return (0, Bt.IntNumber)(t);
  if (typeof t == "string") {
    if (Kh.test(t)) return (0, Bt.IntNumber)(Number(t));
    if (hs(t))
      return (0, Bt.IntNumber)(new Ar.default(ds(t, !1), 16).toNumber());
  }
  throw En.standardErrors.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
Z.ensureIntNumber = nd;
function oy(t) {
  if (t instanceof RegExp) return (0, Bt.RegExpString)(t.toString());
  throw En.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(t)}`);
}
Z.ensureRegExpString = oy;
function ay(t) {
  if (t !== null && (Ar.default.isBN(t) || id(t)))
    return new Ar.default(t.toString(10), 10);
  if (typeof t == "number") return new Ar.default(nd(t));
  if (typeof t == "string") {
    if (Kh.test(t)) return new Ar.default(t, 10);
    if (hs(t)) return new Ar.default(ds(t, !1), 16);
  }
  throw En.standardErrors.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
Z.ensureBN = ay;
function uy(t) {
  if (typeof t == "string") return JSON.parse(t);
  if (typeof t == "object") return t;
  throw En.standardErrors.rpc.invalidParams(
    `Not a JSON string or an object: ${String(t)}`
  );
}
Z.ensureParsedJSONObject = uy;
function id(t) {
  if (t == null || typeof t.constructor != "function") return !1;
  const { constructor: e } = t;
  return typeof e.config == "function" && typeof e.EUCLID == "number";
}
Z.isBigNumber = id;
function cy(t, e) {
  return Array.from({ length: e - t }, (r, n) => t + n);
}
Z.range = cy;
function ly() {
  const t =
      document.querySelector('link[sizes="192x192"]') ||
      document.querySelector('link[sizes="180x180"]') ||
      document.querySelector('link[rel="icon"]') ||
      document.querySelector('link[rel="shortcut icon"]'),
    { protocol: e, host: r } = document.location,
    n = t ? t.getAttribute("href") : null;
  return !n || n.startsWith("javascript:")
    ? null
    : n.startsWith("http://") ||
      n.startsWith("https://") ||
      n.startsWith("data:")
    ? n
    : n.startsWith("//")
    ? e + n
    : `${e}//${r}${n}`;
}
Z.getFavicon = ly;
function fy(t, e, r, n, i, s) {
  const o = n ? "parent-id" : "id",
    a = (0, Yb.stringify)({ [o]: t, secret: e, server: r, v: i, chainId: s });
  return `${r}/#/link?${a}`;
}
Z.createQrUrl = fy;
function hy() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
Z.isInIFrame = hy;
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.Session = void 0;
const El = bu,
  xl = Z,
  Ml = "session:id",
  Cl = "session:secret",
  Rl = "session:linked";
class Xu {
  constructor(e, r, n, i) {
    (this._storage = e),
      (this._id = r || (0, xl.randomBytesHex)(16)),
      (this._secret = n || (0, xl.randomBytesHex)(32)),
      (this._key = new El.sha256()
        .update(`${this._id}, ${this._secret} WalletLink`)
        .digest("hex")),
      (this._linked = !!i);
  }
  static load(e) {
    const r = e.getItem(Ml),
      n = e.getItem(Rl),
      i = e.getItem(Cl);
    return r && i ? new Xu(e, r, i, n === "1") : null;
  }
  static hash(e) {
    return new El.sha256().update(e).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    (this._linked = e), this.persistLinked();
  }
  save() {
    return (
      this._storage.setItem(Ml, this._id),
      this._storage.setItem(Cl, this._secret),
      this.persistLinked(),
      this
    );
  }
  persistLinked() {
    this._storage.setItem(Rl, this._linked ? "1" : "0");
  }
}
Si.Session = Xu;
var Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.WalletSDKRelayAbstract =
  Jt.APP_VERSION_KEY =
  Jt.LOCAL_STORAGE_ADDRESSES_KEY =
  Jt.WALLET_USER_NAME_KEY =
    void 0;
const Il = ss;
Jt.WALLET_USER_NAME_KEY = "walletUsername";
Jt.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
Jt.APP_VERSION_KEY = "AppVersion";
class dy {
  async makeEthereumJSONRPCRequest(e, r) {
    if (!r) throw new Error("Error: No jsonRpcUrl provided");
    return window
      .fetch(r, {
        method: "POST",
        body: JSON.stringify(e),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      })
      .then((n) => n.json())
      .then((n) => {
        if (!n) throw Il.standardErrors.rpc.parse({});
        const i = n,
          { error: s } = i;
        if (s) throw (0, Il.serializeError)(s, e.method);
        return i;
      });
  }
}
Jt.WalletSDKRelayAbstract = dy;
var Yi = {},
  py = {
    get exports() {
      return Yi;
    },
    set exports(t) {
      Yi = t;
    },
  },
  sd = Fu.EventEmitter,
  Pa,
  Al;
function gy() {
  if (Al) return Pa;
  Al = 1;
  function t(b, E) {
    var R = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(b);
      E &&
        (O = O.filter(function ($) {
          return Object.getOwnPropertyDescriptor(b, $).enumerable;
        })),
        R.push.apply(R, O);
    }
    return R;
  }
  function e(b) {
    for (var E = 1; E < arguments.length; E++) {
      var R = arguments[E] != null ? arguments[E] : {};
      E % 2
        ? t(Object(R), !0).forEach(function (O) {
            r(b, O, R[O]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(R))
        : t(Object(R)).forEach(function (O) {
            Object.defineProperty(b, O, Object.getOwnPropertyDescriptor(R, O));
          });
    }
    return b;
  }
  function r(b, E, R) {
    return (
      E in b
        ? Object.defineProperty(b, E, {
            value: R,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (b[E] = R),
      b
    );
  }
  function n(b, E) {
    if (!(b instanceof E))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(b, E) {
    for (var R = 0; R < E.length; R++) {
      var O = E[R];
      (O.enumerable = O.enumerable || !1),
        (O.configurable = !0),
        "value" in O && (O.writable = !0),
        Object.defineProperty(b, O.key, O);
    }
  }
  function s(b, E, R) {
    return E && i(b.prototype, E), R && i(b, R), b;
  }
  var o = go,
    a = o.Buffer,
    c = po,
    f = c.inspect,
    d = (f && f.custom) || "inspect";
  function p(b, E, R) {
    a.prototype.copy.call(b, E, R);
  }
  return (
    (Pa = (function () {
      function b() {
        n(this, b), (this.head = null), (this.tail = null), (this.length = 0);
      }
      return (
        s(b, [
          {
            key: "push",
            value: function (R) {
              var O = { data: R, next: null };
              this.length > 0 ? (this.tail.next = O) : (this.head = O),
                (this.tail = O),
                ++this.length;
            },
          },
          {
            key: "unshift",
            value: function (R) {
              var O = { data: R, next: this.head };
              this.length === 0 && (this.tail = O),
                (this.head = O),
                ++this.length;
            },
          },
          {
            key: "shift",
            value: function () {
              if (this.length !== 0) {
                var R = this.head.data;
                return (
                  this.length === 1
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  R
                );
              }
            },
          },
          {
            key: "clear",
            value: function () {
              (this.head = this.tail = null), (this.length = 0);
            },
          },
          {
            key: "join",
            value: function (R) {
              if (this.length === 0) return "";
              for (var O = this.head, $ = "" + O.data; (O = O.next); )
                $ += R + O.data;
              return $;
            },
          },
          {
            key: "concat",
            value: function (R) {
              if (this.length === 0) return a.alloc(0);
              for (var O = a.allocUnsafe(R >>> 0), $ = this.head, I = 0; $; )
                p($.data, O, I), (I += $.data.length), ($ = $.next);
              return O;
            },
          },
          {
            key: "consume",
            value: function (R, O) {
              var $;
              return (
                R < this.head.data.length
                  ? (($ = this.head.data.slice(0, R)),
                    (this.head.data = this.head.data.slice(R)))
                  : R === this.head.data.length
                  ? ($ = this.shift())
                  : ($ = O ? this._getString(R) : this._getBuffer(R)),
                $
              );
            },
          },
          {
            key: "first",
            value: function () {
              return this.head.data;
            },
          },
          {
            key: "_getString",
            value: function (R) {
              var O = this.head,
                $ = 1,
                I = O.data;
              for (R -= I.length; (O = O.next); ) {
                var k = O.data,
                  N = R > k.length ? k.length : R;
                if (
                  (N === k.length ? (I += k) : (I += k.slice(0, R)),
                  (R -= N),
                  R === 0)
                ) {
                  N === k.length
                    ? (++$,
                      O.next
                        ? (this.head = O.next)
                        : (this.head = this.tail = null))
                    : ((this.head = O), (O.data = k.slice(N)));
                  break;
                }
                ++$;
              }
              return (this.length -= $), I;
            },
          },
          {
            key: "_getBuffer",
            value: function (R) {
              var O = a.allocUnsafe(R),
                $ = this.head,
                I = 1;
              for ($.data.copy(O), R -= $.data.length; ($ = $.next); ) {
                var k = $.data,
                  N = R > k.length ? k.length : R;
                if ((k.copy(O, O.length - R, 0, N), (R -= N), R === 0)) {
                  N === k.length
                    ? (++I,
                      $.next
                        ? (this.head = $.next)
                        : (this.head = this.tail = null))
                    : ((this.head = $), ($.data = k.slice(N)));
                  break;
                }
                ++I;
              }
              return (this.length -= I), O;
            },
          },
          {
            key: d,
            value: function (R, O) {
              return f(this, e({}, O, { depth: 0, customInspect: !1 }));
            },
          },
        ]),
        b
      );
    })()),
    Pa
  );
}
function vy(t, e) {
  var r = this,
    n = this._readableState && this._readableState.destroyed,
    i = this._writableState && this._writableState.destroyed;
  return n || i
    ? (e
        ? e(t)
        : t &&
          (this._writableState
            ? this._writableState.errorEmitted ||
              ((this._writableState.errorEmitted = !0),
              process.nextTick(Mu, this, t))
            : process.nextTick(Mu, this, t)),
      this)
    : (this._readableState && (this._readableState.destroyed = !0),
      this._writableState && (this._writableState.destroyed = !0),
      this._destroy(t || null, function (s) {
        !e && s
          ? r._writableState
            ? r._writableState.errorEmitted
              ? process.nextTick(qs, r)
              : ((r._writableState.errorEmitted = !0),
                process.nextTick(kl, r, s))
            : process.nextTick(kl, r, s)
          : e
          ? (process.nextTick(qs, r), e(s))
          : process.nextTick(qs, r);
      }),
      this);
}
function kl(t, e) {
  Mu(t, e), qs(t);
}
function qs(t) {
  (t._writableState && !t._writableState.emitClose) ||
    (t._readableState && !t._readableState.emitClose) ||
    t.emit("close");
}
function by() {
  this._readableState &&
    ((this._readableState.destroyed = !1),
    (this._readableState.reading = !1),
    (this._readableState.ended = !1),
    (this._readableState.endEmitted = !1)),
    this._writableState &&
      ((this._writableState.destroyed = !1),
      (this._writableState.ended = !1),
      (this._writableState.ending = !1),
      (this._writableState.finalCalled = !1),
      (this._writableState.prefinished = !1),
      (this._writableState.finished = !1),
      (this._writableState.errorEmitted = !1));
}
function Mu(t, e) {
  t.emit("error", e);
}
function yy(t, e) {
  var r = t._readableState,
    n = t._writableState;
  (r && r.autoDestroy) || (n && n.autoDestroy)
    ? t.destroy(e)
    : t.emit("error", e);
}
var od = { destroy: vy, undestroy: by, errorOrDestroy: yy },
  xn = {};
function my(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
var ad = {};
function Ht(t, e, r) {
  r || (r = Error);
  function n(s, o, a) {
    return typeof e == "string" ? e : e(s, o, a);
  }
  var i = (function (s) {
    my(o, s);
    function o(a, c, f) {
      return s.call(this, n(a, c, f)) || this;
    }
    return o;
  })(r);
  (i.prototype.name = r.name), (i.prototype.code = t), (ad[t] = i);
}
function Tl(t, e) {
  if (Array.isArray(t)) {
    var r = t.length;
    return (
      (t = t.map(function (n) {
        return String(n);
      })),
      r > 2
        ? "one of "
            .concat(e, " ")
            .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
        : r === 2
        ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
        : "of ".concat(e, " ").concat(t[0])
    );
  } else return "of ".concat(e, " ").concat(String(t));
}
function _y(t, e, r) {
  return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
}
function wy(t, e, r) {
  return (
    (r === void 0 || r > t.length) && (r = t.length),
    t.substring(r - e.length, r) === e
  );
}
function Sy(t, e, r) {
  return (
    typeof r != "number" && (r = 0),
    r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1
  );
}
Ht(
  "ERR_INVALID_OPT_VALUE",
  function (t, e) {
    return 'The value "' + e + '" is invalid for option "' + t + '"';
  },
  TypeError
);
Ht(
  "ERR_INVALID_ARG_TYPE",
  function (t, e, r) {
    var n;
    typeof e == "string" && _y(e, "not ")
      ? ((n = "must not be"), (e = e.replace(/^not /, "")))
      : (n = "must be");
    var i;
    if (wy(t, " argument"))
      i = "The ".concat(t, " ").concat(n, " ").concat(Tl(e, "type"));
    else {
      var s = Sy(t, ".") ? "property" : "argument";
      i = 'The "'
        .concat(t, '" ')
        .concat(s, " ")
        .concat(n, " ")
        .concat(Tl(e, "type"));
    }
    return (i += ". Received type ".concat(typeof r)), i;
  },
  TypeError
);
Ht("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
Ht("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
  return "The " + t + " method is not implemented";
});
Ht("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
Ht("ERR_STREAM_DESTROYED", function (t) {
  return "Cannot call " + t + " after a stream was destroyed";
});
Ht("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
Ht("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
Ht("ERR_STREAM_WRITE_AFTER_END", "write after end");
Ht("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Ht(
  "ERR_UNKNOWN_ENCODING",
  function (t) {
    return "Unknown encoding: " + t;
  },
  TypeError
);
Ht("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
xn.codes = ad;
var Ey = xn.codes.ERR_INVALID_OPT_VALUE;
function xy(t, e, r) {
  return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
}
function My(t, e, r, n) {
  var i = xy(e, n, r);
  if (i != null) {
    if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
      var s = n ? r : "highWaterMark";
      throw new Ey(s, i);
    }
    return Math.floor(i);
  }
  return t.objectMode ? 16 : 16 * 1024;
}
var ud = { getHighWaterMark: My },
  Cy = Ry;
function Ry(t, e) {
  if ($a("noDeprecation")) return t;
  var r = !1;
  function n() {
    if (!r) {
      if ($a("throwDeprecation")) throw new Error(e);
      $a("traceDeprecation") ? console.trace(e) : console.warn(e), (r = !0);
    }
    return t.apply(this, arguments);
  }
  return n;
}
function $a(t) {
  try {
    if (!J.localStorage) return !1;
  } catch {
    return !1;
  }
  var e = J.localStorage[t];
  return e == null ? !1 : String(e).toLowerCase() === "true";
}
var Da, Ol;
function cd() {
  if (Ol) return Da;
  (Ol = 1), (Da = q);
  function t(A) {
    var T = this;
    (this.next = null),
      (this.entry = null),
      (this.finish = function () {
        z(T, A);
      });
  }
  var e;
  q.WritableState = U;
  var r = { deprecate: Cy },
    n = sd,
    i = go.Buffer,
    s = J.Uint8Array || function () {};
  function o(A) {
    return i.from(A);
  }
  function a(A) {
    return i.isBuffer(A) || A instanceof s;
  }
  var c = od,
    f = ud,
    d = f.getHighWaterMark,
    p = xn.codes,
    b = p.ERR_INVALID_ARG_TYPE,
    E = p.ERR_METHOD_NOT_IMPLEMENTED,
    R = p.ERR_MULTIPLE_CALLBACK,
    O = p.ERR_STREAM_CANNOT_PIPE,
    $ = p.ERR_STREAM_DESTROYED,
    I = p.ERR_STREAM_NULL_VALUES,
    k = p.ERR_STREAM_WRITE_AFTER_END,
    N = p.ERR_UNKNOWN_ENCODING,
    D = c.errorOrDestroy;
  Qt(q, n);
  function L() {}
  function U(A, T, P) {
    (e = e || ui()),
      (A = A || {}),
      typeof P != "boolean" && (P = T instanceof e),
      (this.objectMode = !!A.objectMode),
      P && (this.objectMode = this.objectMode || !!A.writableObjectMode),
      (this.highWaterMark = d(this, A, "writableHighWaterMark", P)),
      (this.finalCalled = !1),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1),
      (this.destroyed = !1);
    var W = A.decodeStrings === !1;
    (this.decodeStrings = !W),
      (this.defaultEncoding = A.defaultEncoding || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function (ee) {
        m(T, ee);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.emitClose = A.emitClose !== !1),
      (this.autoDestroy = !!A.autoDestroy),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new t(this));
  }
  (U.prototype.getBuffer = function () {
    for (var T = this.bufferedRequest, P = []; T; ) P.push(T), (T = T.next);
    return P;
  }),
    (function () {
      try {
        Object.defineProperty(U.prototype, "buffer", {
          get: r.deprecate(
            function () {
              return this.getBuffer();
            },
            "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
            "DEP0003"
          ),
        });
      } catch {}
    })();
  var G;
  typeof Symbol == "function" &&
  Symbol.hasInstance &&
  typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((G = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(q, Symbol.hasInstance, {
        value: function (T) {
          return G.call(this, T)
            ? !0
            : this !== q
            ? !1
            : T && T._writableState instanceof U;
        },
      }))
    : (G = function (T) {
        return T instanceof this;
      });
  function q(A) {
    e = e || ui();
    var T = this instanceof e;
    if (!T && !G.call(q, this)) return new q(A);
    (this._writableState = new U(A, this, T)),
      (this.writable = !0),
      A &&
        (typeof A.write == "function" && (this._write = A.write),
        typeof A.writev == "function" && (this._writev = A.writev),
        typeof A.destroy == "function" && (this._destroy = A.destroy),
        typeof A.final == "function" && (this._final = A.final)),
      n.call(this);
  }
  q.prototype.pipe = function () {
    D(this, new O());
  };
  function H(A, T) {
    var P = new k();
    D(A, P), process.nextTick(T, P);
  }
  function Y(A, T, P, W) {
    var ee;
    return (
      P === null
        ? (ee = new I())
        : typeof P != "string" &&
          !T.objectMode &&
          (ee = new b("chunk", ["string", "Buffer"], P)),
      ee ? (D(A, ee), process.nextTick(W, ee), !1) : !0
    );
  }
  (q.prototype.write = function (A, T, P) {
    var W = this._writableState,
      ee = !1,
      x = !W.objectMode && a(A);
    return (
      x && !i.isBuffer(A) && (A = o(A)),
      typeof T == "function" && ((P = T), (T = null)),
      x ? (T = "buffer") : T || (T = W.defaultEncoding),
      typeof P != "function" && (P = L),
      W.ending
        ? H(this, P)
        : (x || Y(this, W, A, P)) &&
          (W.pendingcb++, (ee = K(this, W, x, A, T, P))),
      ee
    );
  }),
    (q.prototype.cork = function () {
      this._writableState.corked++;
    }),
    (q.prototype.uncork = function () {
      var A = this._writableState;
      A.corked &&
        (A.corked--,
        !A.writing &&
          !A.corked &&
          !A.bufferProcessing &&
          A.bufferedRequest &&
          _(this, A));
    }),
    (q.prototype.setDefaultEncoding = function (T) {
      if (
        (typeof T == "string" && (T = T.toLowerCase()),
        !(
          [
            "hex",
            "utf8",
            "utf-8",
            "ascii",
            "binary",
            "base64",
            "ucs2",
            "ucs-2",
            "utf16le",
            "utf-16le",
            "raw",
          ].indexOf((T + "").toLowerCase()) > -1
        ))
      )
        throw new N(T);
      return (this._writableState.defaultEncoding = T), this;
    }),
    Object.defineProperty(q.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    });
  function Q(A, T, P) {
    return (
      !A.objectMode &&
        A.decodeStrings !== !1 &&
        typeof T == "string" &&
        (T = i.from(T, P)),
      T
    );
  }
  Object.defineProperty(q.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function K(A, T, P, W, ee, x) {
    if (!P) {
      var C = Q(T, W, ee);
      W !== C && ((P = !0), (ee = "buffer"), (W = C));
    }
    var j = T.objectMode ? 1 : W.length;
    T.length += j;
    var V = T.length < T.highWaterMark;
    if ((V || (T.needDrain = !0), T.writing || T.corked)) {
      var ne = T.lastBufferedRequest;
      (T.lastBufferedRequest = {
        chunk: W,
        encoding: ee,
        isBuf: P,
        callback: x,
        next: null,
      }),
        ne
          ? (ne.next = T.lastBufferedRequest)
          : (T.bufferedRequest = T.lastBufferedRequest),
        (T.bufferedRequestCount += 1);
    } else w(A, T, !1, j, W, ee, x);
    return V;
  }
  function w(A, T, P, W, ee, x, C) {
    (T.writelen = W),
      (T.writecb = C),
      (T.writing = !0),
      (T.sync = !0),
      T.destroyed
        ? T.onwrite(new $("write"))
        : P
        ? A._writev(ee, T.onwrite)
        : A._write(ee, x, T.onwrite),
      (T.sync = !1);
  }
  function u(A, T, P, W, ee) {
    --T.pendingcb,
      P
        ? (process.nextTick(ee, W),
          process.nextTick(S, A, T),
          (A._writableState.errorEmitted = !0),
          D(A, W))
        : (ee(W), (A._writableState.errorEmitted = !0), D(A, W), S(A, T));
  }
  function h(A) {
    (A.writing = !1),
      (A.writecb = null),
      (A.length -= A.writelen),
      (A.writelen = 0);
  }
  function m(A, T) {
    var P = A._writableState,
      W = P.sync,
      ee = P.writecb;
    if (typeof ee != "function") throw new R();
    if ((h(P), T)) u(A, P, W, T, ee);
    else {
      var x = M(P) || A.destroyed;
      !x && !P.corked && !P.bufferProcessing && P.bufferedRequest && _(A, P),
        W ? process.nextTick(g, A, P, x, ee) : g(A, P, x, ee);
    }
  }
  function g(A, T, P, W) {
    P || v(A, T), T.pendingcb--, W(), S(A, T);
  }
  function v(A, T) {
    T.length === 0 && T.needDrain && ((T.needDrain = !1), A.emit("drain"));
  }
  function _(A, T) {
    T.bufferProcessing = !0;
    var P = T.bufferedRequest;
    if (A._writev && P && P.next) {
      var W = T.bufferedRequestCount,
        ee = new Array(W),
        x = T.corkedRequestsFree;
      x.entry = P;
      for (var C = 0, j = !0; P; )
        (ee[C] = P), P.isBuf || (j = !1), (P = P.next), (C += 1);
      (ee.allBuffers = j),
        w(A, T, !0, T.length, ee, "", x.finish),
        T.pendingcb++,
        (T.lastBufferedRequest = null),
        x.next
          ? ((T.corkedRequestsFree = x.next), (x.next = null))
          : (T.corkedRequestsFree = new t(T)),
        (T.bufferedRequestCount = 0);
    } else {
      for (; P; ) {
        var V = P.chunk,
          ne = P.encoding,
          oe = P.callback,
          te = T.objectMode ? 1 : V.length;
        if (
          (w(A, T, !1, te, V, ne, oe),
          (P = P.next),
          T.bufferedRequestCount--,
          T.writing)
        )
          break;
      }
      P === null && (T.lastBufferedRequest = null);
    }
    (T.bufferedRequest = P), (T.bufferProcessing = !1);
  }
  (q.prototype._write = function (A, T, P) {
    P(new E("_write()"));
  }),
    (q.prototype._writev = null),
    (q.prototype.end = function (A, T, P) {
      var W = this._writableState;
      return (
        typeof A == "function"
          ? ((P = A), (A = null), (T = null))
          : typeof T == "function" && ((P = T), (T = null)),
        A != null && this.write(A, T),
        W.corked && ((W.corked = 1), this.uncork()),
        W.ending || B(this, W, P),
        this
      );
    }),
    Object.defineProperty(q.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function M(A) {
    return (
      A.ending &&
      A.length === 0 &&
      A.bufferedRequest === null &&
      !A.finished &&
      !A.writing
    );
  }
  function y(A, T) {
    A._final(function (P) {
      T.pendingcb--,
        P && D(A, P),
        (T.prefinished = !0),
        A.emit("prefinish"),
        S(A, T);
    });
  }
  function l(A, T) {
    !T.prefinished &&
      !T.finalCalled &&
      (typeof A._final == "function" && !T.destroyed
        ? (T.pendingcb++, (T.finalCalled = !0), process.nextTick(y, A, T))
        : ((T.prefinished = !0), A.emit("prefinish")));
  }
  function S(A, T) {
    var P = M(T);
    if (
      P &&
      (l(A, T),
      T.pendingcb === 0 && ((T.finished = !0), A.emit("finish"), T.autoDestroy))
    ) {
      var W = A._readableState;
      (!W || (W.autoDestroy && W.endEmitted)) && A.destroy();
    }
    return P;
  }
  function B(A, T, P) {
    (T.ending = !0),
      S(A, T),
      P && (T.finished ? process.nextTick(P) : A.once("finish", P)),
      (T.ended = !0),
      (A.writable = !1);
  }
  function z(A, T, P) {
    var W = A.entry;
    for (A.entry = null; W; ) {
      var ee = W.callback;
      T.pendingcb--, ee(P), (W = W.next);
    }
    T.corkedRequestsFree.next = A;
  }
  return (
    Object.defineProperty(q.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._writableState === void 0
          ? !1
          : this._writableState.destroyed;
      },
      set: function (T) {
        this._writableState && (this._writableState.destroyed = T);
      },
    }),
    (q.prototype.destroy = c.destroy),
    (q.prototype._undestroy = c.undestroy),
    (q.prototype._destroy = function (A, T) {
      T(A);
    }),
    Da
  );
}
var ja, Nl;
function ui() {
  if (Nl) return ja;
  Nl = 1;
  var t =
    Object.keys ||
    function (f) {
      var d = [];
      for (var p in f) d.push(p);
      return d;
    };
  ja = o;
  var e = fd(),
    r = cd();
  Qt(o, e);
  for (var n = t(r.prototype), i = 0; i < n.length; i++) {
    var s = n[i];
    o.prototype[s] || (o.prototype[s] = r.prototype[s]);
  }
  function o(f) {
    if (!(this instanceof o)) return new o(f);
    e.call(this, f),
      r.call(this, f),
      (this.allowHalfOpen = !0),
      f &&
        (f.readable === !1 && (this.readable = !1),
        f.writable === !1 && (this.writable = !1),
        f.allowHalfOpen === !1 &&
          ((this.allowHalfOpen = !1), this.once("end", a)));
  }
  Object.defineProperty(o.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  }),
    Object.defineProperty(o.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    }),
    Object.defineProperty(o.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function a() {
    this._writableState.ended || process.nextTick(c, this);
  }
  function c(f) {
    f.end();
  }
  return (
    Object.defineProperty(o.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._readableState === void 0 || this._writableState === void 0
          ? !1
          : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (d) {
        this._readableState === void 0 ||
          this._writableState === void 0 ||
          ((this._readableState.destroyed = d),
          (this._writableState.destroyed = d));
      },
    }),
    ja
  );
}
var Ba = {},
  Ll;
function Pl() {
  if (Ll) return Ba;
  Ll = 1;
  var t = Zt.Buffer,
    e =
      t.isEncoding ||
      function (I) {
        switch (((I = "" + I), I && I.toLowerCase())) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;
          default:
            return !1;
        }
      };
  function r(I) {
    if (!I) return "utf8";
    for (var k; ; )
      switch (I) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return I;
        default:
          if (k) return;
          (I = ("" + I).toLowerCase()), (k = !0);
      }
  }
  function n(I) {
    var k = r(I);
    if (typeof k != "string" && (t.isEncoding === e || !e(I)))
      throw new Error("Unknown encoding: " + I);
    return k || I;
  }
  Ba.StringDecoder = i;
  function i(I) {
    this.encoding = n(I);
    var k;
    switch (this.encoding) {
      case "utf16le":
        (this.text = p), (this.end = b), (k = 4);
        break;
      case "utf8":
        (this.fillLast = c), (k = 4);
        break;
      case "base64":
        (this.text = E), (this.end = R), (k = 3);
        break;
      default:
        (this.write = O), (this.end = $);
        return;
    }
    (this.lastNeed = 0),
      (this.lastTotal = 0),
      (this.lastChar = t.allocUnsafe(k));
  }
  (i.prototype.write = function (I) {
    if (I.length === 0) return "";
    var k, N;
    if (this.lastNeed) {
      if (((k = this.fillLast(I)), k === void 0)) return "";
      (N = this.lastNeed), (this.lastNeed = 0);
    } else N = 0;
    return N < I.length ? (k ? k + this.text(I, N) : this.text(I, N)) : k || "";
  }),
    (i.prototype.end = d),
    (i.prototype.text = f),
    (i.prototype.fillLast = function (I) {
      if (this.lastNeed <= I.length)
        return (
          I.copy(
            this.lastChar,
            this.lastTotal - this.lastNeed,
            0,
            this.lastNeed
          ),
          this.lastChar.toString(this.encoding, 0, this.lastTotal)
        );
      I.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, I.length),
        (this.lastNeed -= I.length);
    });
  function s(I) {
    return I <= 127
      ? 0
      : I >> 5 === 6
      ? 2
      : I >> 4 === 14
      ? 3
      : I >> 3 === 30
      ? 4
      : I >> 6 === 2
      ? -1
      : -2;
  }
  function o(I, k, N) {
    var D = k.length - 1;
    if (D < N) return 0;
    var L = s(k[D]);
    return L >= 0
      ? (L > 0 && (I.lastNeed = L - 1), L)
      : --D < N || L === -2
      ? 0
      : ((L = s(k[D])),
        L >= 0
          ? (L > 0 && (I.lastNeed = L - 2), L)
          : --D < N || L === -2
          ? 0
          : ((L = s(k[D])),
            L >= 0
              ? (L > 0 && (L === 2 ? (L = 0) : (I.lastNeed = L - 3)), L)
              : 0));
  }
  function a(I, k, N) {
    if ((k[0] & 192) !== 128) return (I.lastNeed = 0), "�";
    if (I.lastNeed > 1 && k.length > 1) {
      if ((k[1] & 192) !== 128) return (I.lastNeed = 1), "�";
      if (I.lastNeed > 2 && k.length > 2 && (k[2] & 192) !== 128)
        return (I.lastNeed = 2), "�";
    }
  }
  function c(I) {
    var k = this.lastTotal - this.lastNeed,
      N = a(this, I);
    if (N !== void 0) return N;
    if (this.lastNeed <= I.length)
      return (
        I.copy(this.lastChar, k, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)
      );
    I.copy(this.lastChar, k, 0, I.length), (this.lastNeed -= I.length);
  }
  function f(I, k) {
    var N = o(this, I, k);
    if (!this.lastNeed) return I.toString("utf8", k);
    this.lastTotal = N;
    var D = I.length - (N - this.lastNeed);
    return I.copy(this.lastChar, 0, D), I.toString("utf8", k, D);
  }
  function d(I) {
    var k = I && I.length ? this.write(I) : "";
    return this.lastNeed ? k + "�" : k;
  }
  function p(I, k) {
    if ((I.length - k) % 2 === 0) {
      var N = I.toString("utf16le", k);
      if (N) {
        var D = N.charCodeAt(N.length - 1);
        if (D >= 55296 && D <= 56319)
          return (
            (this.lastNeed = 2),
            (this.lastTotal = 4),
            (this.lastChar[0] = I[I.length - 2]),
            (this.lastChar[1] = I[I.length - 1]),
            N.slice(0, -1)
          );
      }
      return N;
    }
    return (
      (this.lastNeed = 1),
      (this.lastTotal = 2),
      (this.lastChar[0] = I[I.length - 1]),
      I.toString("utf16le", k, I.length - 1)
    );
  }
  function b(I) {
    var k = I && I.length ? this.write(I) : "";
    if (this.lastNeed) {
      var N = this.lastTotal - this.lastNeed;
      return k + this.lastChar.toString("utf16le", 0, N);
    }
    return k;
  }
  function E(I, k) {
    var N = (I.length - k) % 3;
    return N === 0
      ? I.toString("base64", k)
      : ((this.lastNeed = 3 - N),
        (this.lastTotal = 3),
        N === 1
          ? (this.lastChar[0] = I[I.length - 1])
          : ((this.lastChar[0] = I[I.length - 2]),
            (this.lastChar[1] = I[I.length - 1])),
        I.toString("base64", k, I.length - N));
  }
  function R(I) {
    var k = I && I.length ? this.write(I) : "";
    return this.lastNeed
      ? k + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
      : k;
  }
  function O(I) {
    return I.toString(this.encoding);
  }
  function $(I) {
    return I && I.length ? this.write(I) : "";
  }
  return Ba;
}
var $l = xn.codes.ERR_STREAM_PREMATURE_CLOSE;
function Iy(t) {
  var e = !1;
  return function () {
    if (!e) {
      e = !0;
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      t.apply(this, n);
    }
  };
}
function Ay() {}
function ky(t) {
  return t.setHeader && typeof t.abort == "function";
}
function ld(t, e, r) {
  if (typeof e == "function") return ld(t, null, e);
  e || (e = {}), (r = Iy(r || Ay));
  var n = e.readable || (e.readable !== !1 && t.readable),
    i = e.writable || (e.writable !== !1 && t.writable),
    s = function () {
      t.writable || a();
    },
    o = t._writableState && t._writableState.finished,
    a = function () {
      (i = !1), (o = !0), n || r.call(t);
    },
    c = t._readableState && t._readableState.endEmitted,
    f = function () {
      (n = !1), (c = !0), i || r.call(t);
    },
    d = function (R) {
      r.call(t, R);
    },
    p = function () {
      var R;
      if (n && !c)
        return (
          (!t._readableState || !t._readableState.ended) && (R = new $l()),
          r.call(t, R)
        );
      if (i && !o)
        return (
          (!t._writableState || !t._writableState.ended) && (R = new $l()),
          r.call(t, R)
        );
    },
    b = function () {
      t.req.on("finish", a);
    };
  return (
    ky(t)
      ? (t.on("complete", a),
        t.on("abort", p),
        t.req ? b() : t.on("request", b))
      : i && !t._writableState && (t.on("end", s), t.on("close", s)),
    t.on("end", f),
    t.on("finish", a),
    e.error !== !1 && t.on("error", d),
    t.on("close", p),
    function () {
      t.removeListener("complete", a),
        t.removeListener("abort", p),
        t.removeListener("request", b),
        t.req && t.req.removeListener("finish", a),
        t.removeListener("end", s),
        t.removeListener("close", s),
        t.removeListener("finish", a),
        t.removeListener("end", f),
        t.removeListener("error", d),
        t.removeListener("close", p);
    }
  );
}
var ec = ld,
  Fa,
  Dl;
function Ty() {
  if (Dl) return Fa;
  Dl = 1;
  var t;
  function e(I, k, N) {
    return (
      k in I
        ? Object.defineProperty(I, k, {
            value: N,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (I[k] = N),
      I
    );
  }
  var r = ec,
    n = Symbol("lastResolve"),
    i = Symbol("lastReject"),
    s = Symbol("error"),
    o = Symbol("ended"),
    a = Symbol("lastPromise"),
    c = Symbol("handlePromise"),
    f = Symbol("stream");
  function d(I, k) {
    return { value: I, done: k };
  }
  function p(I) {
    var k = I[n];
    if (k !== null) {
      var N = I[f].read();
      N !== null && ((I[a] = null), (I[n] = null), (I[i] = null), k(d(N, !1)));
    }
  }
  function b(I) {
    process.nextTick(p, I);
  }
  function E(I, k) {
    return function (N, D) {
      I.then(function () {
        if (k[o]) {
          N(d(void 0, !0));
          return;
        }
        k[c](N, D);
      }, D);
    };
  }
  var R = Object.getPrototypeOf(function () {}),
    O = Object.setPrototypeOf(
      ((t = {
        get stream() {
          return this[f];
        },
        next: function () {
          var k = this,
            N = this[s];
          if (N !== null) return Promise.reject(N);
          if (this[o]) return Promise.resolve(d(void 0, !0));
          if (this[f].destroyed)
            return new Promise(function (G, q) {
              process.nextTick(function () {
                k[s] ? q(k[s]) : G(d(void 0, !0));
              });
            });
          var D = this[a],
            L;
          if (D) L = new Promise(E(D, this));
          else {
            var U = this[f].read();
            if (U !== null) return Promise.resolve(d(U, !1));
            L = new Promise(this[c]);
          }
          return (this[a] = L), L;
        },
      }),
      e(t, Symbol.asyncIterator, function () {
        return this;
      }),
      e(t, "return", function () {
        var k = this;
        return new Promise(function (N, D) {
          k[f].destroy(null, function (L) {
            if (L) {
              D(L);
              return;
            }
            N(d(void 0, !0));
          });
        });
      }),
      t),
      R
    ),
    $ = function (k) {
      var N,
        D = Object.create(
          O,
          ((N = {}),
          e(N, f, { value: k, writable: !0 }),
          e(N, n, { value: null, writable: !0 }),
          e(N, i, { value: null, writable: !0 }),
          e(N, s, { value: null, writable: !0 }),
          e(N, o, { value: k._readableState.endEmitted, writable: !0 }),
          e(N, c, {
            value: function (U, G) {
              var q = D[f].read();
              q
                ? ((D[a] = null), (D[n] = null), (D[i] = null), U(d(q, !1)))
                : ((D[n] = U), (D[i] = G));
            },
            writable: !0,
          }),
          N)
        );
      return (
        (D[a] = null),
        r(k, function (L) {
          if (L && L.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var U = D[i];
            U !== null && ((D[a] = null), (D[n] = null), (D[i] = null), U(L)),
              (D[s] = L);
            return;
          }
          var G = D[n];
          G !== null &&
            ((D[a] = null), (D[n] = null), (D[i] = null), G(d(void 0, !0))),
            (D[o] = !0);
        }),
        k.on("readable", b.bind(null, D)),
        D
      );
    };
  return (Fa = $), Fa;
}
var Ha, jl;
function Oy() {
  return (
    jl ||
      ((jl = 1),
      (Ha = function () {
        throw new Error("Readable.from is not available in the browser");
      })),
    Ha
  );
}
var Wa, Bl;
function fd() {
  if (Bl) return Wa;
  (Bl = 1), (Wa = H);
  var t;
  (H.ReadableState = q), Fu.EventEmitter;
  var e = function (C, j) {
      return C.listeners(j).length;
    },
    r = sd,
    n = go.Buffer,
    i = J.Uint8Array || function () {};
  function s(x) {
    return n.from(x);
  }
  function o(x) {
    return n.isBuffer(x) || x instanceof i;
  }
  var a = po,
    c;
  a && a.debuglog ? (c = a.debuglog("stream")) : (c = function () {});
  var f = gy(),
    d = od,
    p = ud,
    b = p.getHighWaterMark,
    E = xn.codes,
    R = E.ERR_INVALID_ARG_TYPE,
    O = E.ERR_STREAM_PUSH_AFTER_EOF,
    $ = E.ERR_METHOD_NOT_IMPLEMENTED,
    I = E.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
    k,
    N,
    D;
  Qt(H, r);
  var L = d.errorOrDestroy,
    U = ["error", "close", "destroy", "pause", "resume"];
  function G(x, C, j) {
    if (typeof x.prependListener == "function") return x.prependListener(C, j);
    !x._events || !x._events[C]
      ? x.on(C, j)
      : Array.isArray(x._events[C])
      ? x._events[C].unshift(j)
      : (x._events[C] = [j, x._events[C]]);
  }
  function q(x, C, j) {
    (t = t || ui()),
      (x = x || {}),
      typeof j != "boolean" && (j = C instanceof t),
      (this.objectMode = !!x.objectMode),
      j && (this.objectMode = this.objectMode || !!x.readableObjectMode),
      (this.highWaterMark = b(this, x, "readableHighWaterMark", j)),
      (this.buffer = new f()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.paused = !0),
      (this.emitClose = x.emitClose !== !1),
      (this.autoDestroy = !!x.autoDestroy),
      (this.destroyed = !1),
      (this.defaultEncoding = x.defaultEncoding || "utf8"),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      x.encoding &&
        (k || (k = Pl().StringDecoder),
        (this.decoder = new k(x.encoding)),
        (this.encoding = x.encoding));
  }
  function H(x) {
    if (((t = t || ui()), !(this instanceof H))) return new H(x);
    var C = this instanceof t;
    (this._readableState = new q(x, this, C)),
      (this.readable = !0),
      x &&
        (typeof x.read == "function" && (this._read = x.read),
        typeof x.destroy == "function" && (this._destroy = x.destroy)),
      r.call(this);
  }
  Object.defineProperty(H.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return this._readableState === void 0
        ? !1
        : this._readableState.destroyed;
    },
    set: function (C) {
      this._readableState && (this._readableState.destroyed = C);
    },
  }),
    (H.prototype.destroy = d.destroy),
    (H.prototype._undestroy = d.undestroy),
    (H.prototype._destroy = function (x, C) {
      C(x);
    }),
    (H.prototype.push = function (x, C) {
      var j = this._readableState,
        V;
      return (
        j.objectMode
          ? (V = !0)
          : typeof x == "string" &&
            ((C = C || j.defaultEncoding),
            C !== j.encoding && ((x = n.from(x, C)), (C = "")),
            (V = !0)),
        Y(this, x, C, !1, V)
      );
    }),
    (H.prototype.unshift = function (x) {
      return Y(this, x, null, !0, !1);
    });
  function Y(x, C, j, V, ne) {
    c("readableAddChunk", C);
    var oe = x._readableState;
    if (C === null) (oe.reading = !1), m(x, oe);
    else {
      var te;
      if ((ne || (te = K(oe, C)), te)) L(x, te);
      else if (oe.objectMode || (C && C.length > 0))
        if (
          (typeof C != "string" &&
            !oe.objectMode &&
            Object.getPrototypeOf(C) !== n.prototype &&
            (C = s(C)),
          V)
        )
          oe.endEmitted ? L(x, new I()) : Q(x, oe, C, !0);
        else if (oe.ended) L(x, new O());
        else {
          if (oe.destroyed) return !1;
          (oe.reading = !1),
            oe.decoder && !j
              ? ((C = oe.decoder.write(C)),
                oe.objectMode || C.length !== 0 ? Q(x, oe, C, !1) : _(x, oe))
              : Q(x, oe, C, !1);
        }
      else V || ((oe.reading = !1), _(x, oe));
    }
    return !oe.ended && (oe.length < oe.highWaterMark || oe.length === 0);
  }
  function Q(x, C, j, V) {
    C.flowing && C.length === 0 && !C.sync
      ? ((C.awaitDrain = 0), x.emit("data", j))
      : ((C.length += C.objectMode ? 1 : j.length),
        V ? C.buffer.unshift(j) : C.buffer.push(j),
        C.needReadable && g(x)),
      _(x, C);
  }
  function K(x, C) {
    var j;
    return (
      !o(C) &&
        typeof C != "string" &&
        C !== void 0 &&
        !x.objectMode &&
        (j = new R("chunk", ["string", "Buffer", "Uint8Array"], C)),
      j
    );
  }
  (H.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  }),
    (H.prototype.setEncoding = function (x) {
      k || (k = Pl().StringDecoder);
      var C = new k(x);
      (this._readableState.decoder = C),
        (this._readableState.encoding = this._readableState.decoder.encoding);
      for (var j = this._readableState.buffer.head, V = ""; j !== null; )
        (V += C.write(j.data)), (j = j.next);
      return (
        this._readableState.buffer.clear(),
        V !== "" && this._readableState.buffer.push(V),
        (this._readableState.length = V.length),
        this
      );
    });
  var w = 1073741824;
  function u(x) {
    return (
      x >= w
        ? (x = w)
        : (x--,
          (x |= x >>> 1),
          (x |= x >>> 2),
          (x |= x >>> 4),
          (x |= x >>> 8),
          (x |= x >>> 16),
          x++),
      x
    );
  }
  function h(x, C) {
    return x <= 0 || (C.length === 0 && C.ended)
      ? 0
      : C.objectMode
      ? 1
      : x !== x
      ? C.flowing && C.length
        ? C.buffer.head.data.length
        : C.length
      : (x > C.highWaterMark && (C.highWaterMark = u(x)),
        x <= C.length ? x : C.ended ? C.length : ((C.needReadable = !0), 0));
  }
  H.prototype.read = function (x) {
    c("read", x), (x = parseInt(x, 10));
    var C = this._readableState,
      j = x;
    if (
      (x !== 0 && (C.emittedReadable = !1),
      x === 0 &&
        C.needReadable &&
        ((C.highWaterMark !== 0 ? C.length >= C.highWaterMark : C.length > 0) ||
          C.ended))
    )
      return (
        c("read: emitReadable", C.length, C.ended),
        C.length === 0 && C.ended ? P(this) : g(this),
        null
      );
    if (((x = h(x, C)), x === 0 && C.ended))
      return C.length === 0 && P(this), null;
    var V = C.needReadable;
    c("need readable", V),
      (C.length === 0 || C.length - x < C.highWaterMark) &&
        ((V = !0), c("length less than watermark", V)),
      C.ended || C.reading
        ? ((V = !1), c("reading or ended", V))
        : V &&
          (c("do read"),
          (C.reading = !0),
          (C.sync = !0),
          C.length === 0 && (C.needReadable = !0),
          this._read(C.highWaterMark),
          (C.sync = !1),
          C.reading || (x = h(j, C)));
    var ne;
    return (
      x > 0 ? (ne = T(x, C)) : (ne = null),
      ne === null
        ? ((C.needReadable = C.length <= C.highWaterMark), (x = 0))
        : ((C.length -= x), (C.awaitDrain = 0)),
      C.length === 0 &&
        (C.ended || (C.needReadable = !0), j !== x && C.ended && P(this)),
      ne !== null && this.emit("data", ne),
      ne
    );
  };
  function m(x, C) {
    if ((c("onEofChunk"), !C.ended)) {
      if (C.decoder) {
        var j = C.decoder.end();
        j &&
          j.length &&
          (C.buffer.push(j), (C.length += C.objectMode ? 1 : j.length));
      }
      (C.ended = !0),
        C.sync
          ? g(x)
          : ((C.needReadable = !1),
            C.emittedReadable || ((C.emittedReadable = !0), v(x)));
    }
  }
  function g(x) {
    var C = x._readableState;
    c("emitReadable", C.needReadable, C.emittedReadable),
      (C.needReadable = !1),
      C.emittedReadable ||
        (c("emitReadable", C.flowing),
        (C.emittedReadable = !0),
        process.nextTick(v, x));
  }
  function v(x) {
    var C = x._readableState;
    c("emitReadable_", C.destroyed, C.length, C.ended),
      !C.destroyed &&
        (C.length || C.ended) &&
        (x.emit("readable"), (C.emittedReadable = !1)),
      (C.needReadable = !C.flowing && !C.ended && C.length <= C.highWaterMark),
      A(x);
  }
  function _(x, C) {
    C.readingMore || ((C.readingMore = !0), process.nextTick(M, x, C));
  }
  function M(x, C) {
    for (
      ;
      !C.reading &&
      !C.ended &&
      (C.length < C.highWaterMark || (C.flowing && C.length === 0));

    ) {
      var j = C.length;
      if ((c("maybeReadMore read 0"), x.read(0), j === C.length)) break;
    }
    C.readingMore = !1;
  }
  (H.prototype._read = function (x) {
    L(this, new $("_read()"));
  }),
    (H.prototype.pipe = function (x, C) {
      var j = this,
        V = this._readableState;
      switch (V.pipesCount) {
        case 0:
          V.pipes = x;
          break;
        case 1:
          V.pipes = [V.pipes, x];
          break;
        default:
          V.pipes.push(x);
          break;
      }
      (V.pipesCount += 1), c("pipe count=%d opts=%j", V.pipesCount, C);
      var ne =
          (!C || C.end !== !1) && x !== process.stdout && x !== process.stderr,
        oe = ne ? pe : be;
      V.endEmitted ? process.nextTick(oe) : j.once("end", oe),
        x.on("unpipe", te);
      function te(ge, Rt) {
        c("onunpipe"),
          ge === j &&
            Rt &&
            Rt.hasUnpiped === !1 &&
            ((Rt.hasUnpiped = !0), xe());
      }
      function pe() {
        c("onend"), x.end();
      }
      var Xt = y(j);
      x.on("drain", Xt);
      var Se = !1;
      function xe() {
        c("cleanup"),
          x.removeListener("close", me),
          x.removeListener("finish", dr),
          x.removeListener("drain", Xt),
          x.removeListener("error", ye),
          x.removeListener("unpipe", te),
          j.removeListener("end", pe),
          j.removeListener("end", be),
          j.removeListener("data", xr),
          (Se = !0),
          V.awaitDrain &&
            (!x._writableState || x._writableState.needDrain) &&
            Xt();
      }
      j.on("data", xr);
      function xr(ge) {
        c("ondata");
        var Rt = x.write(ge);
        c("dest.write", Rt),
          Rt === !1 &&
            (((V.pipesCount === 1 && V.pipes === x) ||
              (V.pipesCount > 1 && ee(V.pipes, x) !== -1)) &&
              !Se &&
              (c("false write response, pause", V.awaitDrain), V.awaitDrain++),
            j.pause());
      }
      function ye(ge) {
        c("onerror", ge),
          be(),
          x.removeListener("error", ye),
          e(x, "error") === 0 && L(x, ge);
      }
      G(x, "error", ye);
      function me() {
        x.removeListener("finish", dr), be();
      }
      x.once("close", me);
      function dr() {
        c("onfinish"), x.removeListener("close", me), be();
      }
      x.once("finish", dr);
      function be() {
        c("unpipe"), j.unpipe(x);
      }
      return x.emit("pipe", j), V.flowing || (c("pipe resume"), j.resume()), x;
    });
  function y(x) {
    return function () {
      var j = x._readableState;
      c("pipeOnDrain", j.awaitDrain),
        j.awaitDrain && j.awaitDrain--,
        j.awaitDrain === 0 && e(x, "data") && ((j.flowing = !0), A(x));
    };
  }
  (H.prototype.unpipe = function (x) {
    var C = this._readableState,
      j = { hasUnpiped: !1 };
    if (C.pipesCount === 0) return this;
    if (C.pipesCount === 1)
      return x && x !== C.pipes
        ? this
        : (x || (x = C.pipes),
          (C.pipes = null),
          (C.pipesCount = 0),
          (C.flowing = !1),
          x && x.emit("unpipe", this, j),
          this);
    if (!x) {
      var V = C.pipes,
        ne = C.pipesCount;
      (C.pipes = null), (C.pipesCount = 0), (C.flowing = !1);
      for (var oe = 0; oe < ne; oe++)
        V[oe].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var te = ee(C.pipes, x);
    return te === -1
      ? this
      : (C.pipes.splice(te, 1),
        (C.pipesCount -= 1),
        C.pipesCount === 1 && (C.pipes = C.pipes[0]),
        x.emit("unpipe", this, j),
        this);
  }),
    (H.prototype.on = function (x, C) {
      var j = r.prototype.on.call(this, x, C),
        V = this._readableState;
      return (
        x === "data"
          ? ((V.readableListening = this.listenerCount("readable") > 0),
            V.flowing !== !1 && this.resume())
          : x === "readable" &&
            !V.endEmitted &&
            !V.readableListening &&
            ((V.readableListening = V.needReadable = !0),
            (V.flowing = !1),
            (V.emittedReadable = !1),
            c("on readable", V.length, V.reading),
            V.length ? g(this) : V.reading || process.nextTick(S, this)),
        j
      );
    }),
    (H.prototype.addListener = H.prototype.on),
    (H.prototype.removeListener = function (x, C) {
      var j = r.prototype.removeListener.call(this, x, C);
      return x === "readable" && process.nextTick(l, this), j;
    }),
    (H.prototype.removeAllListeners = function (x) {
      var C = r.prototype.removeAllListeners.apply(this, arguments);
      return (x === "readable" || x === void 0) && process.nextTick(l, this), C;
    });
  function l(x) {
    var C = x._readableState;
    (C.readableListening = x.listenerCount("readable") > 0),
      C.resumeScheduled && !C.paused
        ? (C.flowing = !0)
        : x.listenerCount("data") > 0 && x.resume();
  }
  function S(x) {
    c("readable nexttick read 0"), x.read(0);
  }
  H.prototype.resume = function () {
    var x = this._readableState;
    return (
      x.flowing ||
        (c("resume"), (x.flowing = !x.readableListening), B(this, x)),
      (x.paused = !1),
      this
    );
  };
  function B(x, C) {
    C.resumeScheduled || ((C.resumeScheduled = !0), process.nextTick(z, x, C));
  }
  function z(x, C) {
    c("resume", C.reading),
      C.reading || x.read(0),
      (C.resumeScheduled = !1),
      x.emit("resume"),
      A(x),
      C.flowing && !C.reading && x.read(0);
  }
  H.prototype.pause = function () {
    return (
      c("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 &&
        (c("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      (this._readableState.paused = !0),
      this
    );
  };
  function A(x) {
    var C = x._readableState;
    for (c("flow", C.flowing); C.flowing && x.read() !== null; );
  }
  (H.prototype.wrap = function (x) {
    var C = this,
      j = this._readableState,
      V = !1;
    x.on("end", function () {
      if ((c("wrapped end"), j.decoder && !j.ended)) {
        var te = j.decoder.end();
        te && te.length && C.push(te);
      }
      C.push(null);
    }),
      x.on("data", function (te) {
        if (
          (c("wrapped data"),
          j.decoder && (te = j.decoder.write(te)),
          !(j.objectMode && te == null) &&
            !(!j.objectMode && (!te || !te.length)))
        ) {
          var pe = C.push(te);
          pe || ((V = !0), x.pause());
        }
      });
    for (var ne in x)
      this[ne] === void 0 &&
        typeof x[ne] == "function" &&
        (this[ne] = (function (pe) {
          return function () {
            return x[pe].apply(x, arguments);
          };
        })(ne));
    for (var oe = 0; oe < U.length; oe++)
      x.on(U[oe], this.emit.bind(this, U[oe]));
    return (
      (this._read = function (te) {
        c("wrapped _read", te), V && ((V = !1), x.resume());
      }),
      this
    );
  }),
    typeof Symbol == "function" &&
      (H.prototype[Symbol.asyncIterator] = function () {
        return N === void 0 && (N = Ty()), N(this);
      }),
    Object.defineProperty(H.prototype, "readableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._readableState.highWaterMark;
      },
    }),
    Object.defineProperty(H.prototype, "readableBuffer", {
      enumerable: !1,
      get: function () {
        return this._readableState && this._readableState.buffer;
      },
    }),
    Object.defineProperty(H.prototype, "readableFlowing", {
      enumerable: !1,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (C) {
        this._readableState && (this._readableState.flowing = C);
      },
    }),
    (H._fromList = T),
    Object.defineProperty(H.prototype, "readableLength", {
      enumerable: !1,
      get: function () {
        return this._readableState.length;
      },
    });
  function T(x, C) {
    if (C.length === 0) return null;
    var j;
    return (
      C.objectMode
        ? (j = C.buffer.shift())
        : !x || x >= C.length
        ? (C.decoder
            ? (j = C.buffer.join(""))
            : C.buffer.length === 1
            ? (j = C.buffer.first())
            : (j = C.buffer.concat(C.length)),
          C.buffer.clear())
        : (j = C.buffer.consume(x, C.decoder)),
      j
    );
  }
  function P(x) {
    var C = x._readableState;
    c("endReadable", C.endEmitted),
      C.endEmitted || ((C.ended = !0), process.nextTick(W, C, x));
  }
  function W(x, C) {
    if (
      (c("endReadableNT", x.endEmitted, x.length),
      !x.endEmitted &&
        x.length === 0 &&
        ((x.endEmitted = !0), (C.readable = !1), C.emit("end"), x.autoDestroy))
    ) {
      var j = C._writableState;
      (!j || (j.autoDestroy && j.finished)) && C.destroy();
    }
  }
  typeof Symbol == "function" &&
    (H.from = function (x, C) {
      return D === void 0 && (D = Oy()), D(H, x, C);
    });
  function ee(x, C) {
    for (var j = 0, V = x.length; j < V; j++) if (x[j] === C) return j;
    return -1;
  }
  return Wa;
}
var hd = _r,
  Mo = xn.codes,
  Ny = Mo.ERR_METHOD_NOT_IMPLEMENTED,
  Ly = Mo.ERR_MULTIPLE_CALLBACK,
  Py = Mo.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  $y = Mo.ERR_TRANSFORM_WITH_LENGTH_0,
  Co = ui();
Qt(_r, Co);
function Dy(t, e) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null) return this.emit("error", new Ly());
  (r.writechunk = null), (r.writecb = null), e != null && this.push(e), n(t);
  var i = this._readableState;
  (i.reading = !1),
    (i.needReadable || i.length < i.highWaterMark) &&
      this._read(i.highWaterMark);
}
function _r(t) {
  if (!(this instanceof _r)) return new _r(t);
  Co.call(this, t),
    (this._transformState = {
      afterTransform: Dy.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null,
    }),
    (this._readableState.needReadable = !0),
    (this._readableState.sync = !1),
    t &&
      (typeof t.transform == "function" && (this._transform = t.transform),
      typeof t.flush == "function" && (this._flush = t.flush)),
    this.on("prefinish", jy);
}
function jy() {
  var t = this;
  typeof this._flush == "function" && !this._readableState.destroyed
    ? this._flush(function (e, r) {
        Fl(t, e, r);
      })
    : Fl(this, null, null);
}
_r.prototype.push = function (t, e) {
  return (
    (this._transformState.needTransform = !1),
    Co.prototype.push.call(this, t, e)
  );
};
_r.prototype._transform = function (t, e, r) {
  r(new Ny("_transform()"));
};
_r.prototype._write = function (t, e, r) {
  var n = this._transformState;
  if (
    ((n.writecb = r),
    (n.writechunk = t),
    (n.writeencoding = e),
    !n.transforming)
  ) {
    var i = this._readableState;
    (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
      this._read(i.highWaterMark);
  }
};
_r.prototype._read = function (t) {
  var e = this._transformState;
  e.writechunk !== null && !e.transforming
    ? ((e.transforming = !0),
      this._transform(e.writechunk, e.writeencoding, e.afterTransform))
    : (e.needTransform = !0);
};
_r.prototype._destroy = function (t, e) {
  Co.prototype._destroy.call(this, t, function (r) {
    e(r);
  });
};
function Fl(t, e, r) {
  if (e) return t.emit("error", e);
  if ((r != null && t.push(r), t._writableState.length)) throw new $y();
  if (t._transformState.transforming) throw new Py();
  return t.push(null);
}
var By = Ki,
  dd = hd;
Qt(Ki, dd);
function Ki(t) {
  if (!(this instanceof Ki)) return new Ki(t);
  dd.call(this, t);
}
Ki.prototype._transform = function (t, e, r) {
  r(null, t);
};
var Va;
function Fy(t) {
  var e = !1;
  return function () {
    e || ((e = !0), t.apply(void 0, arguments));
  };
}
var pd = xn.codes,
  Hy = pd.ERR_MISSING_ARGS,
  Wy = pd.ERR_STREAM_DESTROYED;
function Hl(t) {
  if (t) throw t;
}
function Vy(t) {
  return t.setHeader && typeof t.abort == "function";
}
function Uy(t, e, r, n) {
  n = Fy(n);
  var i = !1;
  t.on("close", function () {
    i = !0;
  }),
    Va === void 0 && (Va = ec),
    Va(t, { readable: e, writable: r }, function (o) {
      if (o) return n(o);
      (i = !0), n();
    });
  var s = !1;
  return function (o) {
    if (!i && !s) {
      if (((s = !0), Vy(t))) return t.abort();
      if (typeof t.destroy == "function") return t.destroy();
      n(o || new Wy("pipe"));
    }
  };
}
function Wl(t) {
  t();
}
function zy(t, e) {
  return t.pipe(e);
}
function qy(t) {
  return !t.length || typeof t[t.length - 1] != "function" ? Hl : t.pop();
}
function Gy() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var n = qy(e);
  if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
    throw new Hy("streams");
  var i,
    s = e.map(function (o, a) {
      var c = a < e.length - 1,
        f = a > 0;
      return Uy(o, c, f, function (d) {
        i || (i = d), d && s.forEach(Wl), !c && (s.forEach(Wl), n(i));
      });
    });
  return e.reduce(zy);
}
var Jy = Gy;
(function (t, e) {
  (e = t.exports = fd()),
    (e.Stream = e),
    (e.Readable = e),
    (e.Writable = cd()),
    (e.Duplex = ui()),
    (e.Transform = hd),
    (e.PassThrough = By),
    (e.finished = ec),
    (e.pipeline = Jy);
})(py, Yi);
const { Transform: Zy } = Yi;
var Qy = (t) =>
  class gd extends Zy {
    constructor(r, n, i, s, o) {
      super(o),
        (this._rate = r),
        (this._capacity = n),
        (this._delimitedSuffix = i),
        (this._hashBitLength = s),
        (this._options = o),
        (this._state = new t()),
        this._state.initialize(r, n),
        (this._finalized = !1);
    }
    _transform(r, n, i) {
      let s = null;
      try {
        this.update(r, n);
      } catch (o) {
        s = o;
      }
      i(s);
    }
    _flush(r) {
      let n = null;
      try {
        this.push(this.digest());
      } catch (i) {
        n = i;
      }
      r(n);
    }
    update(r, n) {
      if (!Buffer.isBuffer(r) && typeof r != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Digest already called");
      return (
        Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
      );
    }
    digest(r) {
      if (this._finalized) throw new Error("Digest already called");
      (this._finalized = !0),
        this._delimitedSuffix &&
          this._state.absorbLastFewBits(this._delimitedSuffix);
      let n = this._state.squeeze(this._hashBitLength / 8);
      return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const r = new gd(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._hashBitLength,
        this._options
      );
      return this._state.copy(r._state), (r._finalized = this._finalized), r;
    }
  };
const { Transform: Yy } = Yi;
var Ky = (t) =>
  class vd extends Yy {
    constructor(r, n, i, s) {
      super(s),
        (this._rate = r),
        (this._capacity = n),
        (this._delimitedSuffix = i),
        (this._options = s),
        (this._state = new t()),
        this._state.initialize(r, n),
        (this._finalized = !1);
    }
    _transform(r, n, i) {
      let s = null;
      try {
        this.update(r, n);
      } catch (o) {
        s = o;
      }
      i(s);
    }
    _flush() {}
    _read(r) {
      this.push(this.squeeze(r));
    }
    update(r, n) {
      if (!Buffer.isBuffer(r) && typeof r != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Squeeze already called");
      return (
        Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
      );
    }
    squeeze(r, n) {
      this._finalized ||
        ((this._finalized = !0),
        this._state.absorbLastFewBits(this._delimitedSuffix));
      let i = this._state.squeeze(r);
      return n !== void 0 && (i = i.toString(n)), i;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const r = new vd(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._options
      );
      return this._state.copy(r._state), (r._finalized = this._finalized), r;
    }
  };
const Xy = Qy,
  em = Ky;
var tm = function (t) {
    const e = Xy(t),
      r = em(t);
    return function (n, i) {
      switch (typeof n == "string" ? n.toLowerCase() : n) {
        case "keccak224":
          return new e(1152, 448, null, 224, i);
        case "keccak256":
          return new e(1088, 512, null, 256, i);
        case "keccak384":
          return new e(832, 768, null, 384, i);
        case "keccak512":
          return new e(576, 1024, null, 512, i);
        case "sha3-224":
          return new e(1152, 448, 6, 224, i);
        case "sha3-256":
          return new e(1088, 512, 6, 256, i);
        case "sha3-384":
          return new e(832, 768, 6, 384, i);
        case "sha3-512":
          return new e(576, 1024, 6, 512, i);
        case "shake128":
          return new r(1344, 256, 31, i);
        case "shake256":
          return new r(1088, 512, 31, i);
        default:
          throw new Error("Invald algorithm: " + n);
      }
    };
  },
  bd = {};
const Vl = [
  1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
  2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0,
  2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
  2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
  2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649,
  0, 2147516424, 2147483648,
];
bd.p1600 = function (t) {
  for (let e = 0; e < 24; ++e) {
    const r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
      n = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
      i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
      s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
      o = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
      a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
      c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
      f = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
      d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
      p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
    let b = d ^ ((i << 1) | (s >>> 31)),
      E = p ^ ((s << 1) | (i >>> 31));
    const R = t[0] ^ b,
      O = t[1] ^ E,
      $ = t[10] ^ b,
      I = t[11] ^ E,
      k = t[20] ^ b,
      N = t[21] ^ E,
      D = t[30] ^ b,
      L = t[31] ^ E,
      U = t[40] ^ b,
      G = t[41] ^ E;
    (b = r ^ ((o << 1) | (a >>> 31))), (E = n ^ ((a << 1) | (o >>> 31)));
    const q = t[2] ^ b,
      H = t[3] ^ E,
      Y = t[12] ^ b,
      Q = t[13] ^ E,
      K = t[22] ^ b,
      w = t[23] ^ E,
      u = t[32] ^ b,
      h = t[33] ^ E,
      m = t[42] ^ b,
      g = t[43] ^ E;
    (b = i ^ ((c << 1) | (f >>> 31))), (E = s ^ ((f << 1) | (c >>> 31)));
    const v = t[4] ^ b,
      _ = t[5] ^ E,
      M = t[14] ^ b,
      y = t[15] ^ E,
      l = t[24] ^ b,
      S = t[25] ^ E,
      B = t[34] ^ b,
      z = t[35] ^ E,
      A = t[44] ^ b,
      T = t[45] ^ E;
    (b = o ^ ((d << 1) | (p >>> 31))), (E = a ^ ((p << 1) | (d >>> 31)));
    const P = t[6] ^ b,
      W = t[7] ^ E,
      ee = t[16] ^ b,
      x = t[17] ^ E,
      C = t[26] ^ b,
      j = t[27] ^ E,
      V = t[36] ^ b,
      ne = t[37] ^ E,
      oe = t[46] ^ b,
      te = t[47] ^ E;
    (b = c ^ ((r << 1) | (n >>> 31))), (E = f ^ ((n << 1) | (r >>> 31)));
    const pe = t[8] ^ b,
      Xt = t[9] ^ E,
      Se = t[18] ^ b,
      xe = t[19] ^ E,
      xr = t[28] ^ b,
      ye = t[29] ^ E,
      me = t[38] ^ b,
      dr = t[39] ^ E,
      be = t[48] ^ b,
      ge = t[49] ^ E,
      Rt = R,
      Me = O,
      Ce = (I << 4) | ($ >>> 28),
      An = ($ << 4) | (I >>> 28),
      Re = (k << 3) | (N >>> 29),
      Ie = (N << 3) | (k >>> 29),
      kn = (L << 9) | (D >>> 23),
      Ae = (D << 9) | (L >>> 23),
      ke = (U << 18) | (G >>> 14),
      Tn = (G << 18) | (U >>> 14),
      Te = (q << 1) | (H >>> 31),
      Oe = (H << 1) | (q >>> 31),
      On = (Q << 12) | (Y >>> 20),
      Ne = (Y << 12) | (Q >>> 20),
      Le = (K << 10) | (w >>> 22),
      Nn = (w << 10) | (K >>> 22),
      Pe = (h << 13) | (u >>> 19),
      $e = (u << 13) | (h >>> 19),
      Ln = (m << 2) | (g >>> 30),
      De = (g << 2) | (m >>> 30),
      je = (_ << 30) | (v >>> 2),
      Pn = (v << 30) | (_ >>> 2),
      Be = (M << 6) | (y >>> 26),
      Fe = (y << 6) | (M >>> 26),
      $n = (S << 11) | (l >>> 21),
      He = (l << 11) | (S >>> 21),
      We = (B << 15) | (z >>> 17),
      Dn = (z << 15) | (B >>> 17),
      Ve = (T << 29) | (A >>> 3),
      Ue = (A << 29) | (T >>> 3),
      jn = (P << 28) | (W >>> 4),
      ze = (W << 28) | (P >>> 4),
      qe = (x << 23) | (ee >>> 9),
      Bn = (ee << 23) | (x >>> 9),
      Ge = (C << 25) | (j >>> 7),
      Je = (j << 25) | (C >>> 7),
      Wr = (V << 21) | (ne >>> 11),
      Vr = (ne << 21) | (V >>> 11),
      Ur = (te << 24) | (oe >>> 8),
      zr = (oe << 24) | (te >>> 8),
      qr = (pe << 27) | (Xt >>> 5),
      Gr = (Xt << 27) | (pe >>> 5),
      Jr = (Se << 20) | (xe >>> 12),
      Zr = (xe << 20) | (Se >>> 12),
      Qr = (ye << 7) | (xr >>> 25),
      Yr = (xr << 7) | (ye >>> 25),
      Kr = (me << 8) | (dr >>> 24),
      Xr = (dr << 8) | (me >>> 24),
      en = (be << 14) | (ge >>> 18),
      tn = (ge << 14) | (be >>> 18);
    (t[0] = Rt ^ (~On & $n)),
      (t[1] = Me ^ (~Ne & He)),
      (t[10] = jn ^ (~Jr & Re)),
      (t[11] = ze ^ (~Zr & Ie)),
      (t[20] = Te ^ (~Be & Ge)),
      (t[21] = Oe ^ (~Fe & Je)),
      (t[30] = qr ^ (~Ce & Le)),
      (t[31] = Gr ^ (~An & Nn)),
      (t[40] = je ^ (~qe & Qr)),
      (t[41] = Pn ^ (~Bn & Yr)),
      (t[2] = On ^ (~$n & Wr)),
      (t[3] = Ne ^ (~He & Vr)),
      (t[12] = Jr ^ (~Re & Pe)),
      (t[13] = Zr ^ (~Ie & $e)),
      (t[22] = Be ^ (~Ge & Kr)),
      (t[23] = Fe ^ (~Je & Xr)),
      (t[32] = Ce ^ (~Le & We)),
      (t[33] = An ^ (~Nn & Dn)),
      (t[42] = qe ^ (~Qr & kn)),
      (t[43] = Bn ^ (~Yr & Ae)),
      (t[4] = $n ^ (~Wr & en)),
      (t[5] = He ^ (~Vr & tn)),
      (t[14] = Re ^ (~Pe & Ve)),
      (t[15] = Ie ^ (~$e & Ue)),
      (t[24] = Ge ^ (~Kr & ke)),
      (t[25] = Je ^ (~Xr & Tn)),
      (t[34] = Le ^ (~We & Ur)),
      (t[35] = Nn ^ (~Dn & zr)),
      (t[44] = Qr ^ (~kn & Ln)),
      (t[45] = Yr ^ (~Ae & De)),
      (t[6] = Wr ^ (~en & Rt)),
      (t[7] = Vr ^ (~tn & Me)),
      (t[16] = Pe ^ (~Ve & jn)),
      (t[17] = $e ^ (~Ue & ze)),
      (t[26] = Kr ^ (~ke & Te)),
      (t[27] = Xr ^ (~Tn & Oe)),
      (t[36] = We ^ (~Ur & qr)),
      (t[37] = Dn ^ (~zr & Gr)),
      (t[46] = kn ^ (~Ln & je)),
      (t[47] = Ae ^ (~De & Pn)),
      (t[8] = en ^ (~Rt & On)),
      (t[9] = tn ^ (~Me & Ne)),
      (t[18] = Ve ^ (~jn & Jr)),
      (t[19] = Ue ^ (~ze & Zr)),
      (t[28] = ke ^ (~Te & Be)),
      (t[29] = Tn ^ (~Oe & Fe)),
      (t[38] = Ur ^ (~qr & Ce)),
      (t[39] = zr ^ (~Gr & An)),
      (t[48] = Ln ^ (~je & qe)),
      (t[49] = De ^ (~Pn & Bn)),
      (t[0] ^= Vl[e * 2]),
      (t[1] ^= Vl[e * 2 + 1]);
  }
};
const ro = bd;
function Mi() {
  (this.state = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
    (this.blockSize = null),
    (this.count = 0),
    (this.squeezing = !1);
}
Mi.prototype.initialize = function (t, e) {
  for (let r = 0; r < 50; ++r) this.state[r] = 0;
  (this.blockSize = t / 8), (this.count = 0), (this.squeezing = !1);
};
Mi.prototype.absorb = function (t) {
  for (let e = 0; e < t.length; ++e)
    (this.state[~~(this.count / 4)] ^= t[e] << (8 * (this.count % 4))),
      (this.count += 1),
      this.count === this.blockSize && (ro.p1600(this.state), (this.count = 0));
};
Mi.prototype.absorbLastFewBits = function (t) {
  (this.state[~~(this.count / 4)] ^= t << (8 * (this.count % 4))),
    t & 128 && this.count === this.blockSize - 1 && ro.p1600(this.state),
    (this.state[~~((this.blockSize - 1) / 4)] ^=
      128 << (8 * ((this.blockSize - 1) % 4))),
    ro.p1600(this.state),
    (this.count = 0),
    (this.squeezing = !0);
};
Mi.prototype.squeeze = function (t) {
  this.squeezing || this.absorbLastFewBits(1);
  const e = Buffer.alloc(t);
  for (let r = 0; r < t; ++r)
    (e[r] = (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 255),
      (this.count += 1),
      this.count === this.blockSize && (ro.p1600(this.state), (this.count = 0));
  return e;
};
Mi.prototype.copy = function (t) {
  for (let e = 0; e < 50; ++e) t.state[e] = this.state[e];
  (t.blockSize = this.blockSize),
    (t.count = this.count),
    (t.squeezing = this.squeezing);
};
var rm = Mi,
  nm = tm(rm);
const im = nm,
  sm = ii;
function yd(t) {
  return Buffer.allocUnsafe(t).fill(0);
}
function md(t, e, r) {
  const n = yd(e);
  return (
    (t = Ro(t)),
    r
      ? t.length < e
        ? (t.copy(n), n)
        : t.slice(0, e)
      : t.length < e
      ? (t.copy(n, e - t.length), n)
      : t.slice(-e)
  );
}
function om(t, e) {
  return md(t, e, !0);
}
function Ro(t) {
  if (!Buffer.isBuffer(t))
    if (Array.isArray(t)) t = Buffer.from(t);
    else if (typeof t == "string")
      _d(t) ? (t = Buffer.from(cm(wd(t)), "hex")) : (t = Buffer.from(t));
    else if (typeof t == "number") t = intToBuffer(t);
    else if (t == null) t = Buffer.allocUnsafe(0);
    else if (sm.isBN(t)) t = t.toArrayLike(Buffer);
    else if (t.toArray) t = Buffer.from(t.toArray());
    else throw new Error("invalid type");
  return t;
}
function am(t) {
  return (t = Ro(t)), "0x" + t.toString("hex");
}
function um(t, e) {
  return (
    (t = Ro(t)),
    e || (e = 256),
    im("keccak" + e)
      .update(t)
      .digest()
  );
}
function cm(t) {
  return t.length % 2 ? "0" + t : t;
}
function _d(t) {
  return typeof t == "string" && t.match(/^0x[0-9A-Fa-f]*$/);
}
function wd(t) {
  return typeof t == "string" && t.startsWith("0x") ? t.slice(2) : t;
}
var Sd = {
  zeros: yd,
  setLength: md,
  setLengthRight: om,
  isHexString: _d,
  stripHexPrefix: wd,
  toBuffer: Ro,
  bufferToHex: am,
  keccak: um,
};
const bn = Sd,
  hn = ii;
function Ed(t) {
  return t.startsWith("int[")
    ? "int256" + t.slice(3)
    : t === "int"
    ? "int256"
    : t.startsWith("uint[")
    ? "uint256" + t.slice(4)
    : t === "uint"
    ? "uint256"
    : t.startsWith("fixed[")
    ? "fixed128x128" + t.slice(5)
    : t === "fixed"
    ? "fixed128x128"
    : t.startsWith("ufixed[")
    ? "ufixed128x128" + t.slice(6)
    : t === "ufixed"
    ? "ufixed128x128"
    : t;
}
function Kn(t) {
  return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
}
function Ul(t) {
  var e = /^\D+(\d+)x(\d+)$/.exec(t);
  return [parseInt(e[1], 10), parseInt(e[2], 10)];
}
function xd(t) {
  var e = t.match(/(.*)\[(.*?)\]$/);
  return e ? (e[2] === "" ? "dynamic" : parseInt(e[2], 10)) : null;
}
function an(t) {
  var e = typeof t;
  if (e === "string")
    return bn.isHexString(t) ? new hn(bn.stripHexPrefix(t), 16) : new hn(t, 10);
  if (e === "number") return new hn(t);
  if (t.toArray) return t;
  throw new Error("Argument is not a number");
}
function ir(t, e) {
  var r, n, i, s;
  if (t === "address") return ir("uint160", an(e));
  if (t === "bool") return ir("uint8", e ? 1 : 0);
  if (t === "string") return ir("bytes", new Buffer(e, "utf8"));
  if (fm(t)) {
    if (typeof e.length > "u") throw new Error("Not an array?");
    if (((r = xd(t)), r !== "dynamic" && r !== 0 && e.length > r))
      throw new Error("Elements exceed array size: " + r);
    (i = []),
      (t = t.slice(0, t.lastIndexOf("["))),
      typeof e == "string" && (e = JSON.parse(e));
    for (s in e) i.push(ir(t, e[s]));
    if (r === "dynamic") {
      var o = ir("uint256", e.length);
      i.unshift(o);
    }
    return Buffer.concat(i);
  } else {
    if (t === "bytes")
      return (
        (e = new Buffer(e)),
        (i = Buffer.concat([ir("uint256", e.length), e])),
        e.length % 32 !== 0 &&
          (i = Buffer.concat([i, bn.zeros(32 - (e.length % 32))])),
        i
      );
    if (t.startsWith("bytes")) {
      if (((r = Kn(t)), r < 1 || r > 32))
        throw new Error("Invalid bytes<N> width: " + r);
      return bn.setLengthRight(e, 32);
    } else if (t.startsWith("uint")) {
      if (((r = Kn(t)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid uint<N> width: " + r);
      if (((n = an(e)), n.bitLength() > r))
        throw new Error(
          "Supplied uint exceeds width: " + r + " vs " + n.bitLength()
        );
      if (n < 0) throw new Error("Supplied uint is negative");
      return n.toArrayLike(Buffer, "be", 32);
    } else if (t.startsWith("int")) {
      if (((r = Kn(t)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid int<N> width: " + r);
      if (((n = an(e)), n.bitLength() > r))
        throw new Error(
          "Supplied int exceeds width: " + r + " vs " + n.bitLength()
        );
      return n.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (t.startsWith("ufixed")) {
      if (((r = Ul(t)), (n = an(e)), n < 0))
        throw new Error("Supplied ufixed is negative");
      return ir("uint256", n.mul(new hn(2).pow(new hn(r[1]))));
    } else if (t.startsWith("fixed"))
      return (r = Ul(t)), ir("int256", an(e).mul(new hn(2).pow(new hn(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + t);
}
function lm(t) {
  return t === "string" || t === "bytes" || xd(t) === "dynamic";
}
function fm(t) {
  return t.lastIndexOf("]") === t.length - 1;
}
function hm(t, e) {
  var r = [],
    n = [],
    i = 32 * t.length;
  for (var s in t) {
    var o = Ed(t[s]),
      a = e[s],
      c = ir(o, a);
    lm(o) ? (r.push(ir("uint256", i)), n.push(c), (i += c.length)) : r.push(c);
  }
  return Buffer.concat(r.concat(n));
}
function Md(t, e) {
  if (t.length !== e.length)
    throw new Error("Number of types are not matching the values");
  for (var r, n, i = [], s = 0; s < t.length; s++) {
    var o = Ed(t[s]),
      a = e[s];
    if (o === "bytes") i.push(a);
    else if (o === "string") i.push(new Buffer(a, "utf8"));
    else if (o === "bool") i.push(new Buffer(a ? "01" : "00", "hex"));
    else if (o === "address") i.push(bn.setLength(a, 20));
    else if (o.startsWith("bytes")) {
      if (((r = Kn(o)), r < 1 || r > 32))
        throw new Error("Invalid bytes<N> width: " + r);
      i.push(bn.setLengthRight(a, r));
    } else if (o.startsWith("uint")) {
      if (((r = Kn(o)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid uint<N> width: " + r);
      if (((n = an(a)), n.bitLength() > r))
        throw new Error(
          "Supplied uint exceeds width: " + r + " vs " + n.bitLength()
        );
      i.push(n.toArrayLike(Buffer, "be", r / 8));
    } else if (o.startsWith("int")) {
      if (((r = Kn(o)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid int<N> width: " + r);
      if (((n = an(a)), n.bitLength() > r))
        throw new Error(
          "Supplied int exceeds width: " + r + " vs " + n.bitLength()
        );
      i.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8));
    } else throw new Error("Unsupported or invalid type: " + o);
  }
  return Buffer.concat(i);
}
function dm(t, e) {
  return bn.keccak(Md(t, e));
}
var pm = { rawEncode: hm, solidityPack: Md, soliditySHA3: dm };
const zt = Sd,
  Ui = pm,
  Cd = {
    type: "object",
    properties: {
      types: {
        type: "object",
        additionalProperties: {
          type: "array",
          items: {
            type: "object",
            properties: { name: { type: "string" }, type: { type: "string" } },
            required: ["name", "type"],
          },
        },
      },
      primaryType: { type: "string" },
      domain: { type: "object" },
      message: { type: "object" },
    },
    required: ["types", "primaryType", "domain", "message"],
  },
  Ua = {
    encodeData(t, e, r, n = !0) {
      const i = ["bytes32"],
        s = [this.hashType(t, r)];
      if (n) {
        const o = (a, c, f) => {
          if (r[c] !== void 0)
            return [
              "bytes32",
              f == null
                ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                : zt.keccak(this.encodeData(c, f, r, n)),
            ];
          if (f === void 0)
            throw new Error(`missing value for field ${a} of type ${c}`);
          if (c === "bytes") return ["bytes32", zt.keccak(f)];
          if (c === "string")
            return (
              typeof f == "string" && (f = Buffer.from(f, "utf8")),
              ["bytes32", zt.keccak(f)]
            );
          if (c.lastIndexOf("]") === c.length - 1) {
            const d = c.slice(0, c.lastIndexOf("[")),
              p = f.map((b) => o(a, d, b));
            return [
              "bytes32",
              zt.keccak(
                Ui.rawEncode(
                  p.map(([b]) => b),
                  p.map(([, b]) => b)
                )
              ),
            ];
          }
          return [c, f];
        };
        for (const a of r[t]) {
          const [c, f] = o(a.name, a.type, e[a.name]);
          i.push(c), s.push(f);
        }
      } else
        for (const o of r[t]) {
          let a = e[o.name];
          if (a !== void 0)
            if (o.type === "bytes")
              i.push("bytes32"), (a = zt.keccak(a)), s.push(a);
            else if (o.type === "string")
              i.push("bytes32"),
                typeof a == "string" && (a = Buffer.from(a, "utf8")),
                (a = zt.keccak(a)),
                s.push(a);
            else if (r[o.type] !== void 0)
              i.push("bytes32"),
                (a = zt.keccak(this.encodeData(o.type, a, r, n))),
                s.push(a);
            else {
              if (o.type.lastIndexOf("]") === o.type.length - 1)
                throw new Error("Arrays currently unimplemented in encodeData");
              i.push(o.type), s.push(a);
            }
        }
      return Ui.rawEncode(i, s);
    },
    encodeType(t, e) {
      let r = "",
        n = this.findTypeDependencies(t, e).filter((i) => i !== t);
      n = [t].concat(n.sort());
      for (const i of n) {
        if (!e[i]) throw new Error("No type definition specified: " + i);
        r +=
          i +
          "(" +
          e[i].map(({ name: o, type: a }) => a + " " + o).join(",") +
          ")";
      }
      return r;
    },
    findTypeDependencies(t, e, r = []) {
      if (((t = t.match(/^\w*/)[0]), r.includes(t) || e[t] === void 0))
        return r;
      r.push(t);
      for (const n of e[t])
        for (const i of this.findTypeDependencies(n.type, e, r))
          !r.includes(i) && r.push(i);
      return r;
    },
    hashStruct(t, e, r, n = !0) {
      return zt.keccak(this.encodeData(t, e, r, n));
    },
    hashType(t, e) {
      return zt.keccak(this.encodeType(t, e));
    },
    sanitizeData(t) {
      const e = {};
      for (const r in Cd.properties) t[r] && (e[r] = t[r]);
      return (
        e.types && (e.types = Object.assign({ EIP712Domain: [] }, e.types)), e
      );
    },
    hash(t, e = !0) {
      const r = this.sanitizeData(t),
        n = [Buffer.from("1901", "hex")];
      return (
        n.push(this.hashStruct("EIP712Domain", r.domain, r.types, e)),
        r.primaryType !== "EIP712Domain" &&
          n.push(this.hashStruct(r.primaryType, r.message, r.types, e)),
        zt.keccak(Buffer.concat(n))
      );
    },
  };
var gm = {
  TYPED_MESSAGE_SCHEMA: Cd,
  TypedDataUtils: Ua,
  hashForSignTypedDataLegacy: function (t) {
    return vm(t.data);
  },
  hashForSignTypedData_v3: function (t) {
    return Ua.hash(t.data, !1);
  },
  hashForSignTypedData_v4: function (t) {
    return Ua.hash(t.data);
  },
};
function vm(t) {
  const e = new Error("Expect argument to be non-empty array");
  if (typeof t != "object" || !t.length) throw e;
  const r = t.map(function (s) {
      return s.type === "bytes" ? zt.toBuffer(s.value) : s.value;
    }),
    n = t.map(function (s) {
      return s.type;
    }),
    i = t.map(function (s) {
      if (!s.name) throw e;
      return s.type + " " + s.name;
    });
  return Ui.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      Ui.soliditySHA3(new Array(t.length).fill("string"), i),
      Ui.soliditySHA3(n, r),
    ]
  );
}
var ci = {};
Object.defineProperty(ci, "__esModule", { value: !0 });
ci.filterFromParam = ci.FilterPolyfill = void 0;
const Gn = fs,
  _t = Z,
  bm = 5 * 60 * 1e3,
  un = { jsonrpc: "2.0", id: 0 };
class ym {
  constructor(e) {
    (this.logFilters = new Map()),
      (this.blockFilters = new Set()),
      (this.pendingTransactionFilters = new Set()),
      (this.cursors = new Map()),
      (this.timeouts = new Map()),
      (this.nextFilterId = (0, Gn.IntNumber)(1)),
      (this.provider = e);
  }
  async newFilter(e) {
    const r = Rd(e),
      n = this.makeFilterId(),
      i = await this.setInitialCursorPosition(n, r.fromBlock);
    return (
      console.log(
        `Installing new log filter(${n}):`,
        r,
        "initial cursor position:",
        i
      ),
      this.logFilters.set(n, r),
      this.setFilterTimeout(n),
      (0, _t.hexStringFromIntNumber)(n)
    );
  }
  async newBlockFilter() {
    const e = this.makeFilterId(),
      r = await this.setInitialCursorPosition(e, "latest");
    return (
      console.log(
        `Installing new block filter (${e}) with initial cursor position:`,
        r
      ),
      this.blockFilters.add(e),
      this.setFilterTimeout(e),
      (0, _t.hexStringFromIntNumber)(e)
    );
  }
  async newPendingTransactionFilter() {
    const e = this.makeFilterId(),
      r = await this.setInitialCursorPosition(e, "latest");
    return (
      console.log(
        `Installing new block filter (${e}) with initial cursor position:`,
        r
      ),
      this.pendingTransactionFilters.add(e),
      this.setFilterTimeout(e),
      (0, _t.hexStringFromIntNumber)(e)
    );
  }
  uninstallFilter(e) {
    const r = (0, _t.intNumberFromHexString)(e);
    return console.log(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
  }
  getFilterChanges(e) {
    const r = (0, _t.intNumberFromHexString)(e);
    return (
      this.timeouts.has(r) && this.setFilterTimeout(r),
      this.logFilters.has(r)
        ? this.getLogFilterChanges(r)
        : this.blockFilters.has(r)
        ? this.getBlockFilterChanges(r)
        : this.pendingTransactionFilters.has(r)
        ? this.getPendingTransactionFilterChanges(r)
        : Promise.resolve(Ns())
    );
  }
  async getFilterLogs(e) {
    const r = (0, _t.intNumberFromHexString)(e),
      n = this.logFilters.get(r);
    return n
      ? this.sendAsyncPromise(
          Object.assign(Object.assign({}, un), {
            method: "eth_getLogs",
            params: [zl(n)],
          })
        )
      : Ns();
  }
  makeFilterId() {
    return (0, Gn.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(e) {
    return new Promise((r, n) => {
      this.provider.sendAsync(e, (i, s) => {
        if (i) return n(i);
        if (Array.isArray(s) || s == null)
          return n(
            new Error(`unexpected response received: ${JSON.stringify(s)}`)
          );
        r(s);
      });
    });
  }
  deleteFilter(e) {
    console.log(`Deleting filter (${e})`),
      this.logFilters.delete(e),
      this.blockFilters.delete(e),
      this.pendingTransactionFilters.delete(e),
      this.cursors.delete(e),
      this.timeouts.delete(e);
  }
  async getLogFilterChanges(e) {
    const r = this.logFilters.get(e),
      n = this.cursors.get(e);
    if (!n || !r) return Ns();
    const i = await this.getCurrentBlockHeight(),
      s = r.toBlock === "latest" ? i : r.toBlock;
    if (n > i || n > r.toBlock) return Ls();
    console.log(`Fetching logs from ${n} to ${s} for filter ${e}`);
    const o = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, un), {
        method: "eth_getLogs",
        params: [
          zl(Object.assign(Object.assign({}, r), { fromBlock: n, toBlock: s })),
        ],
      })
    );
    if (Array.isArray(o.result)) {
      const a = o.result.map((f) =>
          (0, _t.intNumberFromHexString)(f.blockNumber || "0x0")
        ),
        c = Math.max(...a);
      if (c && c > n) {
        const f = (0, Gn.IntNumber)(c + 1);
        console.log(
          `Moving cursor position for filter (${e}) from ${n} to ${f}`
        ),
          this.cursors.set(e, f);
      }
    }
    return o;
  }
  async getBlockFilterChanges(e) {
    const r = this.cursors.get(e);
    if (!r) return Ns();
    const n = await this.getCurrentBlockHeight();
    if (r > n) return Ls();
    console.log(`Fetching blocks from ${r} to ${n} for filter (${e})`);
    const i = (
        await Promise.all(
          (0, _t.range)(r, n + 1).map((o) =>
            this.getBlockHashByNumber((0, Gn.IntNumber)(o))
          )
        )
      ).filter((o) => !!o),
      s = (0, Gn.IntNumber)(r + i.length);
    return (
      console.log(`Moving cursor position for filter (${e}) from ${r} to ${s}`),
      this.cursors.set(e, s),
      Object.assign(Object.assign({}, un), { result: i })
    );
  }
  async getPendingTransactionFilterChanges(e) {
    return Promise.resolve(Ls());
  }
  async setInitialCursorPosition(e, r) {
    const n = await this.getCurrentBlockHeight(),
      i = typeof r == "number" && r > n ? r : n;
    return this.cursors.set(e, i), i;
  }
  setFilterTimeout(e) {
    const r = this.timeouts.get(e);
    r && window.clearTimeout(r);
    const n = window.setTimeout(() => {
      console.log(`Filter (${e}) timed out`), this.deleteFilter(e);
    }, bm);
    this.timeouts.set(e, n);
  }
  async getCurrentBlockHeight() {
    const { result: e } = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, un), {
        method: "eth_blockNumber",
        params: [],
      })
    );
    return (0, _t.intNumberFromHexString)((0, _t.ensureHexString)(e));
  }
  async getBlockHashByNumber(e) {
    const r = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, un), {
        method: "eth_getBlockByNumber",
        params: [(0, _t.hexStringFromIntNumber)(e), !1],
      })
    );
    return r.result && typeof r.result.hash == "string"
      ? (0, _t.ensureHexString)(r.result.hash)
      : null;
  }
}
ci.FilterPolyfill = ym;
function Rd(t) {
  return {
    fromBlock: ql(t.fromBlock),
    toBlock: ql(t.toBlock),
    addresses:
      t.address === void 0
        ? null
        : Array.isArray(t.address)
        ? t.address
        : [t.address],
    topics: t.topics || [],
  };
}
ci.filterFromParam = Rd;
function zl(t) {
  const e = {
    fromBlock: Gl(t.fromBlock),
    toBlock: Gl(t.toBlock),
    topics: t.topics,
  };
  return t.addresses !== null && (e.address = t.addresses), e;
}
function ql(t) {
  if (t === void 0 || t === "latest" || t === "pending") return "latest";
  if (t === "earliest") return (0, Gn.IntNumber)(0);
  if ((0, _t.isHexString)(t)) return (0, _t.intNumberFromHexString)(t);
  throw new Error(`Invalid block option: ${String(t)}`);
}
function Gl(t) {
  return t === "latest" ? t : (0, _t.hexStringFromIntNumber)(t);
}
function Ns() {
  return Object.assign(Object.assign({}, un), {
    error: { code: -32e3, message: "filter not found" },
  });
}
function Ls() {
  return Object.assign(Object.assign({}, un), { result: [] });
}
var Id = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.JSONRPCMethod = void 0),
    (function (e) {
      (e.eth_accounts = "eth_accounts"),
        (e.eth_coinbase = "eth_coinbase"),
        (e.net_version = "net_version"),
        (e.eth_chainId = "eth_chainId"),
        (e.eth_uninstallFilter = "eth_uninstallFilter"),
        (e.eth_requestAccounts = "eth_requestAccounts"),
        (e.eth_sign = "eth_sign"),
        (e.eth_ecRecover = "eth_ecRecover"),
        (e.personal_sign = "personal_sign"),
        (e.personal_ecRecover = "personal_ecRecover"),
        (e.eth_signTransaction = "eth_signTransaction"),
        (e.eth_sendRawTransaction = "eth_sendRawTransaction"),
        (e.eth_sendTransaction = "eth_sendTransaction"),
        (e.eth_signTypedData_v1 = "eth_signTypedData_v1"),
        (e.eth_signTypedData_v2 = "eth_signTypedData_v2"),
        (e.eth_signTypedData_v3 = "eth_signTypedData_v3"),
        (e.eth_signTypedData_v4 = "eth_signTypedData_v4"),
        (e.eth_signTypedData = "eth_signTypedData"),
        (e.cbWallet_arbitrary = "walletlink_arbitrary"),
        (e.wallet_addEthereumChain = "wallet_addEthereumChain"),
        (e.wallet_switchEthereumChain = "wallet_switchEthereumChain"),
        (e.wallet_watchAsset = "wallet_watchAsset"),
        (e.eth_subscribe = "eth_subscribe"),
        (e.eth_unsubscribe = "eth_unsubscribe"),
        (e.eth_newFilter = "eth_newFilter"),
        (e.eth_newBlockFilter = "eth_newBlockFilter"),
        (e.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter"),
        (e.eth_getFilterChanges = "eth_getFilterChanges"),
        (e.eth_getFilterLogs = "eth_getFilterLogs");
    })(t.JSONRPCMethod || (t.JSONRPCMethod = {}));
})(Id);
var Io = {},
  Ad = {},
  Ao = {},
  tc = mm;
function mm(t) {
  t = t || {};
  var e = t.max || Number.MAX_SAFE_INTEGER,
    r = typeof t.start < "u" ? t.start : Math.floor(Math.random() * e);
  return function () {
    return (r = r % e), r++;
  };
}
const Jl = (t, e) =>
  function () {
    const r = e.promiseModule,
      n = new Array(arguments.length);
    for (let i = 0; i < arguments.length; i++) n[i] = arguments[i];
    return new r((i, s) => {
      e.errorFirst
        ? n.push(function (o, a) {
            if (e.multiArgs) {
              const c = new Array(arguments.length - 1);
              for (let f = 1; f < arguments.length; f++)
                c[f - 1] = arguments[f];
              o ? (c.unshift(o), s(c)) : i(c);
            } else o ? s(o) : i(a);
          })
        : n.push(function (o) {
            if (e.multiArgs) {
              const a = new Array(arguments.length - 1);
              for (let c = 0; c < arguments.length; c++) a[c] = arguments[c];
              i(a);
            } else i(o);
          }),
        t.apply(this, n);
    });
  };
var _m = (t, e) => {
    e = Object.assign(
      { exclude: [/.+(Sync|Stream)$/], errorFirst: !0, promiseModule: Promise },
      e
    );
    const r = (i) => {
      const s = (o) => (typeof o == "string" ? i === o : o.test(i));
      return e.include ? e.include.some(s) : !e.exclude.some(s);
    };
    let n;
    typeof t == "function"
      ? (n = function () {
          return e.excludeMain
            ? t.apply(this, arguments)
            : Jl(t, e).apply(this, arguments);
        })
      : (n = Object.create(Object.getPrototypeOf(t)));
    for (const i in t) {
      const s = t[i];
      n[i] = typeof s == "function" && r(i) ? Jl(s, e) : s;
    }
    return n;
  },
  ps = {},
  wm =
    (J && J.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.BaseBlockTracker = void 0;
const Sm = wm(wn),
  Em = 1e3,
  xm = (t, e) => t + e,
  Zl = ["sync", "latest"];
class Mm extends Sm.default {
  constructor(e) {
    super(),
      (this._blockResetDuration = e.blockResetDuration || 20 * Em),
      (this._currentBlock = null),
      (this._isRunning = !1),
      (this._onNewListener = this._onNewListener.bind(this)),
      (this._onRemoveListener = this._onRemoveListener.bind(this)),
      (this._resetCurrentBlock = this._resetCurrentBlock.bind(this)),
      this._setupInternalEvents();
  }
  async destroy() {
    this._cancelBlockResetTimeout(),
      await this._maybeEnd(),
      super.removeAllListeners();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock
      ? this._currentBlock
      : await new Promise((r) => this.once("latest", r));
  }
  removeAllListeners(e) {
    return (
      e ? super.removeAllListeners(e) : super.removeAllListeners(),
      this._setupInternalEvents(),
      this._onRemoveListener(),
      this
    );
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener),
      this.removeListener("removeListener", this._onRemoveListener),
      this.on("newListener", this._onNewListener),
      this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(e) {
    Zl.includes(e) && this._maybeStart();
  }
  _onRemoveListener() {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  async _maybeStart() {
    this._isRunning ||
      ((this._isRunning = !0),
      this._cancelBlockResetTimeout(),
      await this._start(),
      this.emit("_started"));
  }
  async _maybeEnd() {
    this._isRunning &&
      ((this._isRunning = !1),
      this._setupBlockResetTimeout(),
      await this._end(),
      this.emit("_ended"));
  }
  _getBlockTrackerEventCount() {
    return Zl.map((e) => this.listenerCount(e)).reduce(xm);
  }
  _newPotentialLatest(e) {
    const r = this._currentBlock;
    (r && Ql(e) <= Ql(r)) || this._setCurrentBlock(e);
  }
  _setCurrentBlock(e) {
    const r = this._currentBlock;
    (this._currentBlock = e),
      this.emit("latest", e),
      this.emit("sync", { oldBlock: r, newBlock: e });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(),
      (this._blockResetTimeout = setTimeout(
        this._resetCurrentBlock,
        this._blockResetDuration
      )),
      this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
ps.BaseBlockTracker = Mm;
function Ql(t) {
  return Number.parseInt(t, 16);
}
var kd = {},
  Td = {},
  pt = {};
class Od extends TypeError {
  constructor(e, r) {
    let n;
    const { message: i, explanation: s, ...o } = e,
      { path: a } = e,
      c = a.length === 0 ? i : `At path: ${a.join(".")} -- ${i}`;
    super(s ?? c),
      s != null && (this.cause = c),
      Object.assign(this, o),
      (this.name = this.constructor.name),
      (this.failures = () => n ?? (n = [e, ...r()]));
  }
}
function Cm(t) {
  return Ft(t) && typeof t[Symbol.iterator] == "function";
}
function Ft(t) {
  return typeof t == "object" && t != null;
}
function Yl(t) {
  if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function st(t) {
  return typeof t == "symbol"
    ? t.toString()
    : typeof t == "string"
    ? JSON.stringify(t)
    : `${t}`;
}
function Rm(t) {
  const { done: e, value: r } = t.next();
  return e ? void 0 : r;
}
function Im(t, e, r, n) {
  if (t === !0) return;
  t === !1 ? (t = {}) : typeof t == "string" && (t = { message: t });
  const { path: i, branch: s } = e,
    { type: o } = r,
    {
      refinement: a,
      message: c = `Expected a value of type \`${o}\`${
        a ? ` with refinement \`${a}\`` : ""
      }, but received: \`${st(n)}\``,
    } = t;
  return {
    value: n,
    type: o,
    refinement: a,
    key: i[i.length - 1],
    path: i,
    branch: s,
    ...t,
    message: c,
  };
}
function* Cu(t, e, r, n) {
  Cm(t) || (t = [t]);
  for (const i of t) {
    const s = Im(i, e, r, n);
    s && (yield s);
  }
}
function* rc(t, e, r = {}) {
  const { path: n = [], branch: i = [t], coerce: s = !1, mask: o = !1 } = r,
    a = { path: n, branch: i };
  if (
    s &&
    ((t = e.coercer(t, a)),
    o && e.type !== "type" && Ft(e.schema) && Ft(t) && !Array.isArray(t))
  )
    for (const f in t) e.schema[f] === void 0 && delete t[f];
  let c = "valid";
  for (const f of e.validator(t, a))
    (f.explanation = r.message), (c = "not_valid"), yield [f, void 0];
  for (let [f, d, p] of e.entries(t, a)) {
    const b = rc(d, p, {
      path: f === void 0 ? n : [...n, f],
      branch: f === void 0 ? i : [...i, d],
      coerce: s,
      mask: o,
      message: r.message,
    });
    for (const E of b)
      E[0]
        ? ((c = E[0].refinement != null ? "not_refined" : "not_valid"),
          yield [E[0], void 0])
        : s &&
          ((d = E[1]),
          f === void 0
            ? (t = d)
            : t instanceof Map
            ? t.set(f, d)
            : t instanceof Set
            ? t.add(d)
            : Ft(t) && (d !== void 0 || f in t) && (t[f] = d));
  }
  if (c !== "not_valid")
    for (const f of e.refiner(t, a))
      (f.explanation = r.message), (c = "not_refined"), yield [f, void 0];
  c === "valid" && (yield [void 0, t]);
}
class rt {
  constructor(e) {
    const {
      type: r,
      schema: n,
      validator: i,
      refiner: s,
      coercer: o = (c) => c,
      entries: a = function* () {},
    } = e;
    (this.type = r),
      (this.schema = n),
      (this.entries = a),
      (this.coercer = o),
      i
        ? (this.validator = (c, f) => {
            const d = i(c, f);
            return Cu(d, f, this, c);
          })
        : (this.validator = () => []),
      s
        ? (this.refiner = (c, f) => {
            const d = s(c, f);
            return Cu(d, f, this, c);
          })
        : (this.refiner = () => []);
  }
  assert(e, r) {
    return Nd(e, this, r);
  }
  create(e, r) {
    return Ld(e, this, r);
  }
  is(e) {
    return nc(e, this);
  }
  mask(e, r) {
    return Pd(e, this, r);
  }
  validate(e, r = {}) {
    return Ci(e, this, r);
  }
}
function Nd(t, e, r) {
  const n = Ci(t, e, { message: r });
  if (n[0]) throw n[0];
}
function Ld(t, e, r) {
  const n = Ci(t, e, { coerce: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function Pd(t, e, r) {
  const n = Ci(t, e, { coerce: !0, mask: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function nc(t, e) {
  return !Ci(t, e)[0];
}
function Ci(t, e, r = {}) {
  const n = rc(t, e, r),
    i = Rm(n);
  return i[0]
    ? [
        new Od(i[0], function* () {
          for (const o of n) o[0] && (yield o[0]);
        }),
        void 0,
      ]
    : [void 0, i[1]];
}
function Am(...t) {
  const e = t[0].type === "type",
    r = t.map((i) => i.schema),
    n = Object.assign({}, ...r);
  return e ? sc(n) : gs(n);
}
function Ct(t, e) {
  return new rt({ type: t, schema: null, validator: e });
}
function km(t, e) {
  return new rt({
    ...t,
    refiner: (r, n) => r === void 0 || t.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (e(r, n), t.validator(r, n));
    },
  });
}
function Tm(t) {
  return new rt({
    type: "dynamic",
    schema: null,
    *entries(e, r) {
      yield* t(e, r).entries(e, r);
    },
    validator(e, r) {
      return t(e, r).validator(e, r);
    },
    coercer(e, r) {
      return t(e, r).coercer(e, r);
    },
    refiner(e, r) {
      return t(e, r).refiner(e, r);
    },
  });
}
function Om(t) {
  let e;
  return new rt({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      e ?? (e = t()), yield* e.entries(r, n);
    },
    validator(r, n) {
      return e ?? (e = t()), e.validator(r, n);
    },
    coercer(r, n) {
      return e ?? (e = t()), e.coercer(r, n);
    },
    refiner(r, n) {
      return e ?? (e = t()), e.refiner(r, n);
    },
  });
}
function Nm(t, e) {
  const { schema: r } = t,
    n = { ...r };
  for (const i of e) delete n[i];
  switch (t.type) {
    case "type":
      return sc(n);
    default:
      return gs(n);
  }
}
function Lm(t) {
  const e = t instanceof rt ? { ...t.schema } : { ...t };
  for (const r in e) e[r] = $d(e[r]);
  return gs(e);
}
function Pm(t, e) {
  const { schema: r } = t,
    n = {};
  for (const i of e) n[i] = r[i];
  return gs(n);
}
function $m(t, e) {
  return (
    console.warn(
      "superstruct@0.11 - The `struct` helper has been renamed to `define`."
    ),
    Ct(t, e)
  );
}
function Dm() {
  return Ct("any", () => !0);
}
function jm(t) {
  return new rt({
    type: "array",
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e))
        for (const [r, n] of e.entries()) yield [r, n, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return (
        Array.isArray(e) || `Expected an array value, but received: ${st(e)}`
      );
    },
  });
}
function Bm() {
  return Ct("bigint", (t) => typeof t == "bigint");
}
function Fm() {
  return Ct("boolean", (t) => typeof t == "boolean");
}
function Hm() {
  return Ct(
    "date",
    (t) =>
      (t instanceof Date && !isNaN(t.getTime())) ||
      `Expected a valid \`Date\` object, but received: ${st(t)}`
  );
}
function Wm(t) {
  const e = {},
    r = t.map((n) => st(n)).join();
  for (const n of t) e[n] = n;
  return new rt({
    type: "enums",
    schema: e,
    validator(n) {
      return (
        t.includes(n) || `Expected one of \`${r}\`, but received: ${st(n)}`
      );
    },
  });
}
function Vm() {
  return Ct(
    "func",
    (t) =>
      typeof t == "function" || `Expected a function, but received: ${st(t)}`
  );
}
function Um(t) {
  return Ct(
    "instance",
    (e) =>
      e instanceof t ||
      `Expected a \`${t.name}\` instance, but received: ${st(e)}`
  );
}
function zm() {
  return Ct(
    "integer",
    (t) =>
      (typeof t == "number" && !isNaN(t) && Number.isInteger(t)) ||
      `Expected an integer, but received: ${st(t)}`
  );
}
function qm(t) {
  return new rt({
    type: "intersection",
    schema: null,
    *entries(e, r) {
      for (const n of t) yield* n.entries(e, r);
    },
    *validator(e, r) {
      for (const n of t) yield* n.validator(e, r);
    },
    *refiner(e, r) {
      for (const n of t) yield* n.refiner(e, r);
    },
  });
}
function Gm(t) {
  const e = st(t),
    r = typeof t;
  return new rt({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? t : null,
    validator(n) {
      return n === t || `Expected the literal \`${e}\`, but received: ${st(n)}`;
    },
  });
}
function Jm(t, e) {
  return new rt({
    type: "map",
    schema: null,
    *entries(r) {
      if (t && e && r instanceof Map)
        for (const [n, i] of r.entries()) yield [n, n, t], yield [n, i, e];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return (
        r instanceof Map || `Expected a \`Map\` object, but received: ${st(r)}`
      );
    },
  });
}
function ic() {
  return Ct("never", () => !1);
}
function Zm(t) {
  return new rt({
    ...t,
    validator: (e, r) => e === null || t.validator(e, r),
    refiner: (e, r) => e === null || t.refiner(e, r),
  });
}
function Qm() {
  return Ct(
    "number",
    (t) =>
      (typeof t == "number" && !isNaN(t)) ||
      `Expected a number, but received: ${st(t)}`
  );
}
function gs(t) {
  const e = t ? Object.keys(t) : [],
    r = ic();
  return new rt({
    type: "object",
    schema: t || null,
    *entries(n) {
      if (t && Ft(n)) {
        const i = new Set(Object.keys(n));
        for (const s of e) i.delete(s), yield [s, n[s], t[s]];
        for (const s of i) yield [s, n[s], r];
      }
    },
    validator(n) {
      return Ft(n) || `Expected an object, but received: ${st(n)}`;
    },
    coercer(n) {
      return Ft(n) ? { ...n } : n;
    },
  });
}
function $d(t) {
  return new rt({
    ...t,
    validator: (e, r) => e === void 0 || t.validator(e, r),
    refiner: (e, r) => e === void 0 || t.refiner(e, r),
  });
}
function Ym(t, e) {
  return new rt({
    type: "record",
    schema: null,
    *entries(r) {
      if (Ft(r))
        for (const n in r) {
          const i = r[n];
          yield [n, n, t], yield [n, i, e];
        }
    },
    validator(r) {
      return Ft(r) || `Expected an object, but received: ${st(r)}`;
    },
  });
}
function Km() {
  return Ct("regexp", (t) => t instanceof RegExp);
}
function Xm(t) {
  return new rt({
    type: "set",
    schema: null,
    *entries(e) {
      if (t && e instanceof Set) for (const r of e) yield [r, r, t];
    },
    coercer(e) {
      return e instanceof Set ? new Set(e) : e;
    },
    validator(e) {
      return (
        e instanceof Set || `Expected a \`Set\` object, but received: ${st(e)}`
      );
    },
  });
}
function Dd() {
  return Ct(
    "string",
    (t) => typeof t == "string" || `Expected a string, but received: ${st(t)}`
  );
}
function e1(t) {
  const e = ic();
  return new rt({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(t.length, r.length);
        for (let i = 0; i < n; i++) yield [i, r[i], t[i] || e];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${st(r)}`;
    },
  });
}
function sc(t) {
  const e = Object.keys(t);
  return new rt({
    type: "type",
    schema: t,
    *entries(r) {
      if (Ft(r)) for (const n of e) yield [n, r[n], t[n]];
    },
    validator(r) {
      return Ft(r) || `Expected an object, but received: ${st(r)}`;
    },
    coercer(r) {
      return Ft(r) ? { ...r } : r;
    },
  });
}
function t1(t) {
  const e = t.map((r) => r.type).join(" | ");
  return new rt({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of t) {
        const [i, s] = n.validate(r, { coerce: !0 });
        if (!i) return s;
      }
      return r;
    },
    validator(r, n) {
      const i = [];
      for (const s of t) {
        const [...o] = rc(r, s, n),
          [a] = o;
        if (a[0]) for (const [c] of o) c && i.push(c);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${st(
          r
        )}`,
        ...i,
      ];
    },
  });
}
function jd() {
  return Ct("unknown", () => !0);
}
function oc(t, e, r) {
  return new rt({
    ...t,
    coercer: (n, i) => (nc(n, e) ? t.coercer(r(n, i), i) : t.coercer(n, i)),
  });
}
function r1(t, e, r = {}) {
  return oc(t, jd(), (n) => {
    const i = typeof e == "function" ? e() : e;
    if (n === void 0) return i;
    if (!r.strict && Yl(n) && Yl(i)) {
      const s = { ...n };
      let o = !1;
      for (const a in i) s[a] === void 0 && ((s[a] = i[a]), (o = !0));
      if (o) return s;
    }
    return n;
  });
}
function n1(t) {
  return oc(t, Dd(), (e) => e.trim());
}
function i1(t) {
  return Mn(t, "empty", (e) => {
    const r = Bd(e);
    return (
      r === 0 ||
      `Expected an empty ${t.type} but received one with a size of \`${r}\``
    );
  });
}
function Bd(t) {
  return t instanceof Map || t instanceof Set ? t.size : t.length;
}
function s1(t, e, r = {}) {
  const { exclusive: n } = r;
  return Mn(t, "max", (i) =>
    n
      ? i < e
      : i <= e ||
        `Expected a ${t.type} less than ${
          n ? "" : "or equal to "
        }${e} but received \`${i}\``
  );
}
function o1(t, e, r = {}) {
  const { exclusive: n } = r;
  return Mn(t, "min", (i) =>
    n
      ? i > e
      : i >= e ||
        `Expected a ${t.type} greater than ${
          n ? "" : "or equal to "
        }${e} but received \`${i}\``
  );
}
function a1(t) {
  return Mn(
    t,
    "nonempty",
    (e) =>
      Bd(e) > 0 || `Expected a nonempty ${t.type} but received an empty one`
  );
}
function u1(t, e) {
  return Mn(
    t,
    "pattern",
    (r) =>
      e.test(r) ||
      `Expected a ${t.type} matching \`/${e.source}/\` but received "${r}"`
  );
}
function c1(t, e, r = e) {
  const n = `Expected a ${t.type}`,
    i = e === r ? `of \`${e}\`` : `between \`${e}\` and \`${r}\``;
  return Mn(t, "size", (s) => {
    if (typeof s == "number" || s instanceof Date)
      return (e <= s && s <= r) || `${n} ${i} but received \`${s}\``;
    if (s instanceof Map || s instanceof Set) {
      const { size: o } = s;
      return (
        (e <= o && o <= r) ||
        `${n} with a size ${i} but received one with a size of \`${o}\``
      );
    } else {
      const { length: o } = s;
      return (
        (e <= o && o <= r) ||
        `${n} with a length ${i} but received one with a length of \`${o}\``
      );
    }
  });
}
function Mn(t, e, r) {
  return new rt({
    ...t,
    *refiner(n, i) {
      yield* t.refiner(n, i);
      const s = r(n, i),
        o = Cu(s, i, t, n);
      for (const a of o) yield { ...a, refinement: e };
    },
  });
}
const l1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Struct: rt,
        StructError: Od,
        any: Dm,
        array: jm,
        assert: Nd,
        assign: Am,
        bigint: Bm,
        boolean: Fm,
        coerce: oc,
        create: Ld,
        date: Hm,
        defaulted: r1,
        define: Ct,
        deprecated: km,
        dynamic: Tm,
        empty: i1,
        enums: Wm,
        func: Vm,
        instance: Um,
        integer: zm,
        intersection: qm,
        is: nc,
        lazy: Om,
        literal: Gm,
        map: Jm,
        mask: Pd,
        max: s1,
        min: o1,
        never: ic,
        nonempty: a1,
        nullable: Zm,
        number: Qm,
        object: gs,
        omit: Nm,
        optional: $d,
        partial: Lm,
        pattern: u1,
        pick: Pm,
        record: Ym,
        refine: Mn,
        regexp: Km,
        set: Xm,
        size: c1,
        string: Dd,
        struct: $m,
        trimmed: n1,
        tuple: e1,
        type: sc,
        union: t1,
        unknown: jd,
        validate: Ci,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Cn = mi(l1);
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.assertExhaustive = pt.assertStruct = pt.assert = pt.AssertionError = void 0;
const f1 = Cn;
function h1(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function d1(t) {
  var e, r;
  return Boolean(
    typeof ((r =
      (e = t == null ? void 0 : t.prototype) === null || e === void 0
        ? void 0
        : e.constructor) === null || r === void 0
      ? void 0
      : r.name) == "string"
  );
}
function p1(t) {
  const e = h1(t) ? t.message : String(t);
  return e.endsWith(".") ? e.slice(0, -1) : e;
}
function Fd(t, e) {
  return d1(t) ? new t({ message: e }) : t({ message: e });
}
class ac extends Error {
  constructor(e) {
    super(e.message), (this.code = "ERR_ASSERTION");
  }
}
pt.AssertionError = ac;
function g1(t, e = "Assertion failed.", r = ac) {
  if (!t) throw e instanceof Error ? e : Fd(r, e);
}
pt.assert = g1;
function v1(t, e, r = "Assertion failed", n = ac) {
  try {
    (0, f1.assert)(t, e);
  } catch (i) {
    throw Fd(n, `${r}: ${p1(i)}.`);
  }
}
pt.assertStruct = v1;
function b1(t) {
  throw new Error(
    "Invalid branch reached. Should be detected during compilation."
  );
}
pt.assertExhaustive = b1;
var vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.base64 = void 0;
const y1 = Cn,
  m1 = pt,
  _1 = (t, e = {}) => {
    var r, n;
    const i = (r = e.paddingRequired) !== null && r !== void 0 ? r : !1,
      s = (n = e.characterSet) !== null && n !== void 0 ? n : "base64";
    let o;
    s === "base64"
      ? (o = String.raw`[A-Za-z0-9+\/]`)
      : ((0, m1.assert)(s === "base64url"), (o = String.raw`[-_A-Za-z0-9]`));
    let a;
    return (
      i
        ? (a = new RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`, "u"))
        : (a = new RegExp(
            `^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`,
            "u"
          )),
      (0, y1.pattern)(t, a)
    );
  };
vs.base64 = _1;
var he = {},
  bs = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.remove0x =
      t.add0x =
      t.assertIsStrictHexString =
      t.assertIsHexString =
      t.isStrictHexString =
      t.isHexString =
      t.StrictHexStruct =
      t.HexStruct =
        void 0);
  const e = Cn,
    r = pt;
  (t.HexStruct = (0, e.pattern)((0, e.string)(), /^(?:0x)?[0-9a-f]+$/iu)),
    (t.StrictHexStruct = (0, e.pattern)((0, e.string)(), /^0x[0-9a-f]+$/iu));
  function n(f) {
    return (0, e.is)(f, t.HexStruct);
  }
  t.isHexString = n;
  function i(f) {
    return (0, e.is)(f, t.StrictHexStruct);
  }
  t.isStrictHexString = i;
  function s(f) {
    (0, r.assert)(n(f), "Value must be a hexadecimal string.");
  }
  t.assertIsHexString = s;
  function o(f) {
    (0, r.assert)(
      i(f),
      'Value must be a hexadecimal string, starting with "0x".'
    );
  }
  t.assertIsStrictHexString = o;
  function a(f) {
    return f.startsWith("0x")
      ? f
      : f.startsWith("0X")
      ? `0x${f.substring(2)}`
      : `0x${f}`;
  }
  t.add0x = a;
  function c(f) {
    return f.startsWith("0x") || f.startsWith("0X") ? f.substring(2) : f;
  }
  t.remove0x = c;
})(bs);
Object.defineProperty(he, "__esModule", { value: !0 });
he.createDataView =
  he.concatBytes =
  he.valueToBytes =
  he.stringToBytes =
  he.numberToBytes =
  he.signedBigIntToBytes =
  he.bigIntToBytes =
  he.hexToBytes =
  he.bytesToString =
  he.bytesToNumber =
  he.bytesToSignedBigInt =
  he.bytesToBigInt =
  he.bytesToHex =
  he.assertIsBytes =
  he.isBytes =
    void 0;
const At = pt,
  Ru = bs,
  Kl = 48,
  Xl = 58,
  ef = 87;
function w1() {
  const t = [];
  return () => {
    if (t.length === 0)
      for (let e = 0; e < 256; e++) t.push(e.toString(16).padStart(2, "0"));
    return t;
  };
}
const S1 = w1();
function uc(t) {
  return t instanceof Uint8Array;
}
he.isBytes = uc;
function Ri(t) {
  (0, At.assert)(uc(t), "Value must be a Uint8Array.");
}
he.assertIsBytes = Ri;
function Hd(t) {
  if ((Ri(t), t.length === 0)) return "0x";
  const e = S1(),
    r = new Array(t.length);
  for (let n = 0; n < t.length; n++) r[n] = e[t[n]];
  return (0, Ru.add0x)(r.join(""));
}
he.bytesToHex = Hd;
function Wd(t) {
  Ri(t);
  const e = Hd(t);
  return BigInt(e);
}
he.bytesToBigInt = Wd;
function E1(t) {
  Ri(t);
  let e = BigInt(0);
  for (const r of t) e = (e << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(t.length * 8, e);
}
he.bytesToSignedBigInt = E1;
function x1(t) {
  Ri(t);
  const e = Wd(t);
  return (
    (0, At.assert)(
      e <= BigInt(Number.MAX_SAFE_INTEGER),
      "Number is not a safe integer. Use `bytesToBigInt` instead."
    ),
    Number(e)
  );
}
he.bytesToNumber = x1;
function M1(t) {
  return Ri(t), new TextDecoder().decode(t);
}
he.bytesToString = M1;
function ko(t) {
  var e;
  if (
    ((e = t == null ? void 0 : t.toLowerCase) === null || e === void 0
      ? void 0
      : e.call(t)) === "0x"
  )
    return new Uint8Array();
  (0, Ru.assertIsHexString)(t);
  const r = (0, Ru.remove0x)(t).toLowerCase(),
    n = r.length % 2 === 0 ? r : `0${r}`,
    i = new Uint8Array(n.length / 2);
  for (let s = 0; s < i.length; s++) {
    const o = n.charCodeAt(s * 2),
      a = n.charCodeAt(s * 2 + 1),
      c = o - (o < Xl ? Kl : ef),
      f = a - (a < Xl ? Kl : ef);
    i[s] = c * 16 + f;
  }
  return i;
}
he.hexToBytes = ko;
function Vd(t) {
  (0, At.assert)(typeof t == "bigint", "Value must be a bigint."),
    (0, At.assert)(t >= BigInt(0), "Value must be a non-negative bigint.");
  const e = t.toString(16);
  return ko(e);
}
he.bigIntToBytes = Vd;
function C1(t, e) {
  (0, At.assert)(e > 0);
  const r = t >> BigInt(31);
  return !(((~t & r) + (t & ~r)) >> BigInt(e * 8 + -1));
}
function R1(t, e) {
  (0, At.assert)(typeof t == "bigint", "Value must be a bigint."),
    (0, At.assert)(typeof e == "number", "Byte length must be a number."),
    (0, At.assert)(e > 0, "Byte length must be greater than 0."),
    (0, At.assert)(
      C1(t, e),
      "Byte length is too small to represent the given value."
    );
  let r = t;
  const n = new Uint8Array(e);
  for (let i = 0; i < n.length; i++)
    (n[i] = Number(BigInt.asUintN(8, r))), (r >>= BigInt(8));
  return n.reverse();
}
he.signedBigIntToBytes = R1;
function Ud(t) {
  (0, At.assert)(typeof t == "number", "Value must be a number."),
    (0, At.assert)(t >= 0, "Value must be a non-negative number."),
    (0, At.assert)(
      Number.isSafeInteger(t),
      "Value is not a safe integer. Use `bigIntToBytes` instead."
    );
  const e = t.toString(16);
  return ko(e);
}
he.numberToBytes = Ud;
function zd(t) {
  return (
    (0, At.assert)(typeof t == "string", "Value must be a string."),
    new TextEncoder().encode(t)
  );
}
he.stringToBytes = zd;
function qd(t) {
  if (typeof t == "bigint") return Vd(t);
  if (typeof t == "number") return Ud(t);
  if (typeof t == "string") return t.startsWith("0x") ? ko(t) : zd(t);
  if (uc(t)) return t;
  throw new TypeError(`Unsupported value type: "${typeof t}".`);
}
he.valueToBytes = qd;
function I1(t) {
  const e = new Array(t.length);
  let r = 0;
  for (let i = 0; i < t.length; i++) {
    const s = qd(t[i]);
    (e[i] = s), (r += s.length);
  }
  const n = new Uint8Array(r);
  for (let i = 0, s = 0; i < e.length; i++) n.set(e[i], s), (s += e[i].length);
  return n;
}
he.concatBytes = I1;
function A1(t) {
  if (typeof Buffer < "u" && t instanceof Buffer) {
    const e = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return new DataView(e);
  }
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
he.createDataView = A1;
var To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
To.ChecksumStruct = void 0;
const tf = Cn,
  k1 = vs;
To.ChecksumStruct = (0, tf.size)(
  (0, k1.base64)((0, tf.string)(), { paddingRequired: !0 }),
  44,
  44
);
var ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.createHex = ur.createBytes = ur.createBigInt = ur.createNumber = void 0;
const Ye = Cn,
  T1 = pt,
  Gd = he,
  Oo = bs,
  Jd = (0, Ye.union)([
    (0, Ye.number)(),
    (0, Ye.bigint)(),
    (0, Ye.string)(),
    Oo.StrictHexStruct,
  ]),
  O1 = (0, Ye.coerce)((0, Ye.number)(), Jd, Number),
  N1 = (0, Ye.coerce)((0, Ye.bigint)(), Jd, BigInt);
(0, Ye.union)([Oo.StrictHexStruct, (0, Ye.instance)(Uint8Array)]);
const L1 = (0, Ye.coerce)(
    (0, Ye.instance)(Uint8Array),
    (0, Ye.union)([Oo.StrictHexStruct]),
    Gd.hexToBytes
  ),
  P1 = (0, Ye.coerce)(
    Oo.StrictHexStruct,
    (0, Ye.instance)(Uint8Array),
    Gd.bytesToHex
  );
function $1(t) {
  try {
    const e = (0, Ye.create)(t, O1);
    return (
      (0, T1.assert)(
        Number.isFinite(e),
        `Expected a number-like value, got "${t}".`
      ),
      e
    );
  } catch (e) {
    throw e instanceof Ye.StructError
      ? new Error(`Expected a number-like value, got "${t}".`)
      : e;
  }
}
ur.createNumber = $1;
function D1(t) {
  try {
    return (0, Ye.create)(t, N1);
  } catch (e) {
    throw e instanceof Ye.StructError
      ? new Error(`Expected a number-like value, got "${String(e.value)}".`)
      : e;
  }
}
ur.createBigInt = D1;
function j1(t) {
  if (typeof t == "string" && t.toLowerCase() === "0x") return new Uint8Array();
  try {
    return (0, Ye.create)(t, L1);
  } catch (e) {
    throw e instanceof Ye.StructError
      ? new Error(`Expected a bytes-like value, got "${String(e.value)}".`)
      : e;
  }
}
ur.createBytes = j1;
function B1(t) {
  if (
    (t instanceof Uint8Array && t.length === 0) ||
    (typeof t == "string" && t.toLowerCase() === "0x")
  )
    return "0x";
  try {
    return (0, Ye.create)(t, P1);
  } catch (e) {
    throw e instanceof Ye.StructError
      ? new Error(`Expected a bytes-like value, got "${String(e.value)}".`)
      : e;
  }
}
ur.createHex = B1;
var li = {},
  Zd =
    (J && J.__classPrivateFieldSet) ||
    function (t, e, r, n, i) {
      if (n === "m") throw new TypeError("Private method is not writable");
      if (n === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !i : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return n === "a" ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
    },
  wt =
    (J && J.__classPrivateFieldGet) ||
    function (t, e, r, n) {
      if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !n : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
    },
  Vt,
  tr;
Object.defineProperty(li, "__esModule", { value: !0 });
li.FrozenSet = li.FrozenMap = void 0;
class cc {
  constructor(e) {
    Vt.set(this, void 0), Zd(this, Vt, new Map(e), "f"), Object.freeze(this);
  }
  get size() {
    return wt(this, Vt, "f").size;
  }
  [((Vt = new WeakMap()), Symbol.iterator)]() {
    return wt(this, Vt, "f")[Symbol.iterator]();
  }
  entries() {
    return wt(this, Vt, "f").entries();
  }
  forEach(e, r) {
    return wt(this, Vt, "f").forEach((n, i, s) => e.call(r, n, i, this));
  }
  get(e) {
    return wt(this, Vt, "f").get(e);
  }
  has(e) {
    return wt(this, Vt, "f").has(e);
  }
  keys() {
    return wt(this, Vt, "f").keys();
  }
  values() {
    return wt(this, Vt, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${
      this.size > 0
        ? ` ${[...this.entries()]
            .map(([e, r]) => `${String(e)} => ${String(r)}`)
            .join(", ")} `
        : ""
    }}`;
  }
}
li.FrozenMap = cc;
class lc {
  constructor(e) {
    tr.set(this, void 0), Zd(this, tr, new Set(e), "f"), Object.freeze(this);
  }
  get size() {
    return wt(this, tr, "f").size;
  }
  [((tr = new WeakMap()), Symbol.iterator)]() {
    return wt(this, tr, "f")[Symbol.iterator]();
  }
  entries() {
    return wt(this, tr, "f").entries();
  }
  forEach(e, r) {
    return wt(this, tr, "f").forEach((n, i, s) => e.call(r, n, i, this));
  }
  has(e) {
    return wt(this, tr, "f").has(e);
  }
  keys() {
    return wt(this, tr, "f").keys();
  }
  values() {
    return wt(this, tr, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${
      this.size > 0
        ? ` ${[...this.values()].map((e) => String(e)).join(", ")} `
        : ""
    }}`;
  }
}
li.FrozenSet = lc;
Object.freeze(cc);
Object.freeze(cc.prototype);
Object.freeze(lc);
Object.freeze(lc.prototype);
var Qd = {},
  fc = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.calculateNumberSize =
      t.calculateStringSize =
      t.isASCII =
      t.isPlainObject =
      t.ESCAPE_CHARACTERS_REGEXP =
      t.JsonSize =
      t.hasProperty =
      t.isObject =
      t.isNullOrUndefined =
      t.isNonEmptyArray =
        void 0);
  function e(f) {
    return Array.isArray(f) && f.length > 0;
  }
  t.isNonEmptyArray = e;
  function r(f) {
    return f == null;
  }
  t.isNullOrUndefined = r;
  function n(f) {
    return Boolean(f) && typeof f == "object" && !Array.isArray(f);
  }
  t.isObject = n;
  const i = (f, d) => Object.hasOwnProperty.call(f, d);
  (t.hasProperty = i),
    (function (f) {
      (f[(f.Null = 4)] = "Null"),
        (f[(f.Comma = 1)] = "Comma"),
        (f[(f.Wrapper = 1)] = "Wrapper"),
        (f[(f.True = 4)] = "True"),
        (f[(f.False = 5)] = "False"),
        (f[(f.Quote = 1)] = "Quote"),
        (f[(f.Colon = 1)] = "Colon"),
        (f[(f.Date = 24)] = "Date");
    })(t.JsonSize || (t.JsonSize = {})),
    (t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu);
  function s(f) {
    if (typeof f != "object" || f === null) return !1;
    try {
      let d = f;
      for (; Object.getPrototypeOf(d) !== null; ) d = Object.getPrototypeOf(d);
      return Object.getPrototypeOf(f) === d;
    } catch {
      return !1;
    }
  }
  t.isPlainObject = s;
  function o(f) {
    return f.charCodeAt(0) <= 127;
  }
  t.isASCII = o;
  function a(f) {
    var d;
    return (
      f.split("").reduce((b, E) => (o(E) ? b + 1 : b + 2), 0) +
      ((d = f.match(t.ESCAPE_CHARACTERS_REGEXP)) !== null && d !== void 0
        ? d
        : []
      ).length
    );
  }
  t.calculateStringSize = a;
  function c(f) {
    return f.toString().length;
  }
  t.calculateNumberSize = c;
})(fc);
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.validateJsonAndGetSize =
      t.getJsonRpcIdValidator =
      t.assertIsJsonRpcError =
      t.isJsonRpcError =
      t.assertIsJsonRpcFailure =
      t.isJsonRpcFailure =
      t.assertIsJsonRpcSuccess =
      t.isJsonRpcSuccess =
      t.assertIsJsonRpcResponse =
      t.isJsonRpcResponse =
      t.assertIsPendingJsonRpcResponse =
      t.isPendingJsonRpcResponse =
      t.JsonRpcResponseStruct =
      t.JsonRpcFailureStruct =
      t.JsonRpcSuccessStruct =
      t.PendingJsonRpcResponseStruct =
      t.assertIsJsonRpcRequest =
      t.isJsonRpcRequest =
      t.assertIsJsonRpcNotification =
      t.isJsonRpcNotification =
      t.JsonRpcNotificationStruct =
      t.JsonRpcRequestStruct =
      t.JsonRpcParamsStruct =
      t.JsonRpcErrorStruct =
      t.JsonRpcIdStruct =
      t.JsonRpcVersionStruct =
      t.jsonrpc2 =
      t.isValidJson =
      t.JsonStruct =
        void 0);
  const e = Cn,
    r = pt,
    n = fc;
  t.JsonStruct = (0, e.define)("Json", (L) => {
    const [U] = D(L, !0);
    return U ? !0 : "Expected a valid JSON-serializable value";
  });
  function i(L) {
    return (0, e.is)(L, t.JsonStruct);
  }
  (t.isValidJson = i),
    (t.jsonrpc2 = "2.0"),
    (t.JsonRpcVersionStruct = (0, e.literal)(t.jsonrpc2)),
    (t.JsonRpcIdStruct = (0, e.nullable)(
      (0, e.union)([(0, e.number)(), (0, e.string)()])
    )),
    (t.JsonRpcErrorStruct = (0, e.object)({
      code: (0, e.integer)(),
      message: (0, e.string)(),
      data: (0, e.optional)(t.JsonStruct),
      stack: (0, e.optional)((0, e.string)()),
    })),
    (t.JsonRpcParamsStruct = (0, e.optional)(
      (0, e.union)([
        (0, e.record)((0, e.string)(), t.JsonStruct),
        (0, e.array)(t.JsonStruct),
      ])
    )),
    (t.JsonRpcRequestStruct = (0, e.object)({
      id: t.JsonRpcIdStruct,
      jsonrpc: t.JsonRpcVersionStruct,
      method: (0, e.string)(),
      params: t.JsonRpcParamsStruct,
    })),
    (t.JsonRpcNotificationStruct = (0, e.omit)(t.JsonRpcRequestStruct, ["id"]));
  function s(L) {
    return (0, e.is)(L, t.JsonRpcNotificationStruct);
  }
  t.isJsonRpcNotification = s;
  function o(L, U) {
    (0, r.assertStruct)(
      L,
      t.JsonRpcNotificationStruct,
      "Invalid JSON-RPC notification",
      U
    );
  }
  t.assertIsJsonRpcNotification = o;
  function a(L) {
    return (0, e.is)(L, t.JsonRpcRequestStruct);
  }
  t.isJsonRpcRequest = a;
  function c(L, U) {
    (0, r.assertStruct)(
      L,
      t.JsonRpcRequestStruct,
      "Invalid JSON-RPC request",
      U
    );
  }
  (t.assertIsJsonRpcRequest = c),
    (t.PendingJsonRpcResponseStruct = (0, e.object)({
      id: t.JsonRpcIdStruct,
      jsonrpc: t.JsonRpcVersionStruct,
      result: (0, e.optional)((0, e.unknown)()),
      error: (0, e.optional)(t.JsonRpcErrorStruct),
    })),
    (t.JsonRpcSuccessStruct = (0, e.object)({
      id: t.JsonRpcIdStruct,
      jsonrpc: t.JsonRpcVersionStruct,
      result: t.JsonStruct,
    })),
    (t.JsonRpcFailureStruct = (0, e.object)({
      id: t.JsonRpcIdStruct,
      jsonrpc: t.JsonRpcVersionStruct,
      error: t.JsonRpcErrorStruct,
    })),
    (t.JsonRpcResponseStruct = (0, e.union)([
      t.JsonRpcSuccessStruct,
      t.JsonRpcFailureStruct,
    ]));
  function f(L) {
    return (0, e.is)(L, t.PendingJsonRpcResponseStruct);
  }
  t.isPendingJsonRpcResponse = f;
  function d(L, U) {
    (0, r.assertStruct)(
      L,
      t.PendingJsonRpcResponseStruct,
      "Invalid pending JSON-RPC response",
      U
    );
  }
  t.assertIsPendingJsonRpcResponse = d;
  function p(L) {
    return (0, e.is)(L, t.JsonRpcResponseStruct);
  }
  t.isJsonRpcResponse = p;
  function b(L, U) {
    (0, r.assertStruct)(
      L,
      t.JsonRpcResponseStruct,
      "Invalid JSON-RPC response",
      U
    );
  }
  t.assertIsJsonRpcResponse = b;
  function E(L) {
    return (0, e.is)(L, t.JsonRpcSuccessStruct);
  }
  t.isJsonRpcSuccess = E;
  function R(L, U) {
    (0, r.assertStruct)(
      L,
      t.JsonRpcSuccessStruct,
      "Invalid JSON-RPC success response",
      U
    );
  }
  t.assertIsJsonRpcSuccess = R;
  function O(L) {
    return (0, e.is)(L, t.JsonRpcFailureStruct);
  }
  t.isJsonRpcFailure = O;
  function $(L, U) {
    (0, r.assertStruct)(
      L,
      t.JsonRpcFailureStruct,
      "Invalid JSON-RPC failure response",
      U
    );
  }
  t.assertIsJsonRpcFailure = $;
  function I(L) {
    return (0, e.is)(L, t.JsonRpcErrorStruct);
  }
  t.isJsonRpcError = I;
  function k(L, U) {
    (0, r.assertStruct)(L, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", U);
  }
  t.assertIsJsonRpcError = k;
  function N(L) {
    const {
      permitEmptyString: U,
      permitFractions: G,
      permitNull: q,
    } = Object.assign(
      { permitEmptyString: !0, permitFractions: !1, permitNull: !0 },
      L
    );
    return (Y) =>
      Boolean(
        (typeof Y == "number" && (G || Number.isInteger(Y))) ||
          (typeof Y == "string" && (U || Y.length > 0)) ||
          (q && Y === null)
      );
  }
  t.getJsonRpcIdValidator = N;
  function D(L, U = !1) {
    const G = new Set();
    function q(H, Y) {
      if (H === void 0) return [!1, 0];
      if (H === null) return [!0, Y ? 0 : n.JsonSize.Null];
      const Q = typeof H;
      try {
        if (Q === "function") return [!1, 0];
        if (Q === "string" || H instanceof String)
          return [
            !0,
            Y ? 0 : (0, n.calculateStringSize)(H) + n.JsonSize.Quote * 2,
          ];
        if (Q === "boolean" || H instanceof Boolean)
          return Y
            ? [!0, 0]
            : [!0, H == !0 ? n.JsonSize.True : n.JsonSize.False];
        if (Q === "number" || H instanceof Number)
          return Y ? [!0, 0] : [!0, (0, n.calculateNumberSize)(H)];
        if (H instanceof Date)
          return Y
            ? [!0, 0]
            : [
                !0,
                isNaN(H.getDate())
                  ? n.JsonSize.Null
                  : n.JsonSize.Date + n.JsonSize.Quote * 2,
              ];
      } catch {
        return [!1, 0];
      }
      if (!(0, n.isPlainObject)(H) && !Array.isArray(H)) return [!1, 0];
      if (G.has(H)) return [!1, 0];
      G.add(H);
      try {
        return [
          !0,
          Object.entries(H).reduce(
            (K, [w, u], h, m) => {
              let [g, v] = q(u, Y);
              if (!g)
                throw new Error(
                  "JSON validation did not pass. Validation process stopped."
                );
              if ((G.delete(H), Y)) return 0;
              const _ = Array.isArray(H)
                  ? 0
                  : w.length + n.JsonSize.Comma + n.JsonSize.Colon * 2,
                M = h < m.length - 1 ? n.JsonSize.Comma : 0;
              return K + _ + v + M;
            },
            Y ? 0 : n.JsonSize.Wrapper * 2
          ),
        ];
      } catch {
        return [!1, 0];
      }
    }
    return q(L, U);
  }
  t.validateJsonAndGetSize = D;
})(Qd);
var fi = {},
  no = {},
  F1 = {
    get exports() {
      return no;
    },
    set exports(t) {
      no = t;
    },
  },
  za,
  rf;
function H1() {
  if (rf) return za;
  rf = 1;
  var t = 1e3,
    e = t * 60,
    r = e * 60,
    n = r * 24,
    i = n * 7,
    s = n * 365.25;
  za = function (d, p) {
    p = p || {};
    var b = typeof d;
    if (b === "string" && d.length > 0) return o(d);
    if (b === "number" && isFinite(d)) return p.long ? c(d) : a(d);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(d)
    );
  };
  function o(d) {
    if (((d = String(d)), !(d.length > 100))) {
      var p =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          d
        );
      if (p) {
        var b = parseFloat(p[1]),
          E = (p[2] || "ms").toLowerCase();
        switch (E) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return b * s;
          case "weeks":
          case "week":
          case "w":
            return b * i;
          case "days":
          case "day":
          case "d":
            return b * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return b * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return b * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return b * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function a(d) {
    var p = Math.abs(d);
    return p >= n
      ? Math.round(d / n) + "d"
      : p >= r
      ? Math.round(d / r) + "h"
      : p >= e
      ? Math.round(d / e) + "m"
      : p >= t
      ? Math.round(d / t) + "s"
      : d + "ms";
  }
  function c(d) {
    var p = Math.abs(d);
    return p >= n
      ? f(d, p, n, "day")
      : p >= r
      ? f(d, p, r, "hour")
      : p >= e
      ? f(d, p, e, "minute")
      : p >= t
      ? f(d, p, t, "second")
      : d + " ms";
  }
  function f(d, p, b, E) {
    var R = p >= b * 1.5;
    return Math.round(d / b) + " " + E + (R ? "s" : "");
  }
  return za;
}
function W1(t) {
  (r.debug = r),
    (r.default = r),
    (r.coerce = c),
    (r.disable = s),
    (r.enable = i),
    (r.enabled = o),
    (r.humanize = H1()),
    (r.destroy = f),
    Object.keys(t).forEach((d) => {
      r[d] = t[d];
    }),
    (r.names = []),
    (r.skips = []),
    (r.formatters = {});
  function e(d) {
    let p = 0;
    for (let b = 0; b < d.length; b++)
      (p = (p << 5) - p + d.charCodeAt(b)), (p |= 0);
    return r.colors[Math.abs(p) % r.colors.length];
  }
  r.selectColor = e;
  function r(d) {
    let p,
      b = null,
      E,
      R;
    function O(...$) {
      if (!O.enabled) return;
      const I = O,
        k = Number(new Date()),
        N = k - (p || k);
      (I.diff = N),
        (I.prev = p),
        (I.curr = k),
        (p = k),
        ($[0] = r.coerce($[0])),
        typeof $[0] != "string" && $.unshift("%O");
      let D = 0;
      ($[0] = $[0].replace(/%([a-zA-Z%])/g, (U, G) => {
        if (U === "%%") return "%";
        D++;
        const q = r.formatters[G];
        if (typeof q == "function") {
          const H = $[D];
          (U = q.call(I, H)), $.splice(D, 1), D--;
        }
        return U;
      })),
        r.formatArgs.call(I, $),
        (I.log || r.log).apply(I, $);
    }
    return (
      (O.namespace = d),
      (O.useColors = r.useColors()),
      (O.color = r.selectColor(d)),
      (O.extend = n),
      (O.destroy = r.destroy),
      Object.defineProperty(O, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          b !== null
            ? b
            : (E !== r.namespaces && ((E = r.namespaces), (R = r.enabled(d))),
              R),
        set: ($) => {
          b = $;
        },
      }),
      typeof r.init == "function" && r.init(O),
      O
    );
  }
  function n(d, p) {
    const b = r(this.namespace + (typeof p > "u" ? ":" : p) + d);
    return (b.log = this.log), b;
  }
  function i(d) {
    r.save(d), (r.namespaces = d), (r.names = []), (r.skips = []);
    let p;
    const b = (typeof d == "string" ? d : "").split(/[\s,]+/),
      E = b.length;
    for (p = 0; p < E; p++)
      b[p] &&
        ((d = b[p].replace(/\*/g, ".*?")),
        d[0] === "-"
          ? r.skips.push(new RegExp("^" + d.slice(1) + "$"))
          : r.names.push(new RegExp("^" + d + "$")));
  }
  function s() {
    const d = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(
      ","
    );
    return r.enable(""), d;
  }
  function o(d) {
    if (d[d.length - 1] === "*") return !0;
    let p, b;
    for (p = 0, b = r.skips.length; p < b; p++)
      if (r.skips[p].test(d)) return !1;
    for (p = 0, b = r.names.length; p < b; p++)
      if (r.names[p].test(d)) return !0;
    return !1;
  }
  function a(d) {
    return d
      .toString()
      .substring(2, d.toString().length - 2)
      .replace(/\.\*\?$/, "*");
  }
  function c(d) {
    return d instanceof Error ? d.stack || d.message : d;
  }
  function f() {
    console.warn(
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
  }
  return r.enable(r.load()), r;
}
var V1 = W1;
(function (t, e) {
  (e.formatArgs = n),
    (e.save = i),
    (e.load = s),
    (e.useColors = r),
    (e.storage = o()),
    (e.destroy = (() => {
      let c = !1;
      return () => {
        c ||
          ((c = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          ));
      };
    })()),
    (e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ]);
  function r() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < "u" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function n(c) {
    if (
      ((c[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        c[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        t.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    const f = "color: " + this.color;
    c.splice(1, 0, f, "color: inherit");
    let d = 0,
      p = 0;
    c[0].replace(/%[a-zA-Z%]/g, (b) => {
      b !== "%%" && (d++, b === "%c" && (p = d));
    }),
      c.splice(p, 0, f);
  }
  e.log = console.debug || console.log || (() => {});
  function i(c) {
    try {
      c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
    } catch {}
  }
  function s() {
    let c;
    try {
      c = e.storage.getItem("debug");
    } catch {}
    return !c && typeof process < "u" && "env" in process && (c = {}.DEBUG), c;
  }
  function o() {
    try {
      return localStorage;
    } catch {}
  }
  t.exports = V1(e);
  const { formatters: a } = t.exports;
  a.j = function (c) {
    try {
      return JSON.stringify(c);
    } catch (f) {
      return "[UnexpectedJSONParseError]: " + f.message;
    }
  };
})(F1, no);
var U1 =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.createModuleLogger = fi.createProjectLogger = void 0;
const z1 = U1(no),
  q1 = (0, z1.default)("metamask");
function G1(t) {
  return q1.extend(t);
}
fi.createProjectLogger = G1;
function J1(t, e) {
  return t.extend(e);
}
fi.createModuleLogger = J1;
var cr = {};
Object.defineProperty(cr, "__esModule", { value: !0 });
cr.hexToBigInt = cr.hexToNumber = cr.bigIntToHex = cr.numberToHex = void 0;
const Xn = pt,
  Xi = bs,
  Z1 = (t) => (
    (0, Xn.assert)(typeof t == "number", "Value must be a number."),
    (0, Xn.assert)(t >= 0, "Value must be a non-negative number."),
    (0, Xn.assert)(
      Number.isSafeInteger(t),
      "Value is not a safe integer. Use `bigIntToHex` instead."
    ),
    (0, Xi.add0x)(t.toString(16))
  );
cr.numberToHex = Z1;
const Q1 = (t) => (
  (0, Xn.assert)(typeof t == "bigint", "Value must be a bigint."),
  (0, Xn.assert)(t >= 0, "Value must be a non-negative bigint."),
  (0, Xi.add0x)(t.toString(16))
);
cr.bigIntToHex = Q1;
const Y1 = (t) => {
  (0, Xi.assertIsHexString)(t);
  const e = parseInt(t, 16);
  return (
    (0, Xn.assert)(
      Number.isSafeInteger(e),
      "Value is not a safe integer. Use `hexToBigInt` instead."
    ),
    e
  );
};
cr.hexToNumber = Y1;
const K1 = (t) => ((0, Xi.assertIsHexString)(t), BigInt((0, Xi.add0x)(t)));
cr.hexToBigInt = K1;
var Yd = {};
Object.defineProperty(Yd, "__esModule", { value: !0 });
var Kd = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.timeSince = t.inMilliseconds = t.Duration = void 0),
    (function (s) {
      (s[(s.Millisecond = 1)] = "Millisecond"),
        (s[(s.Second = 1e3)] = "Second"),
        (s[(s.Minute = 6e4)] = "Minute"),
        (s[(s.Hour = 36e5)] = "Hour"),
        (s[(s.Day = 864e5)] = "Day"),
        (s[(s.Week = 6048e5)] = "Week"),
        (s[(s.Year = 31536e6)] = "Year");
    })(t.Duration || (t.Duration = {}));
  const e = (s) => Number.isInteger(s) && s >= 0,
    r = (s, o) => {
      if (!e(s))
        throw new Error(
          `"${o}" must be a non-negative integer. Received: "${s}".`
        );
    };
  function n(s, o) {
    return r(s, "count"), s * o;
  }
  t.inMilliseconds = n;
  function i(s) {
    return r(s, "timestamp"), Date.now() - s;
  }
  t.timeSince = i;
})(Kd);
var Xd = {},
  Pr = {},
  X1 = {
    get exports() {
      return Pr;
    },
    set exports(t) {
      Pr = t;
    },
  };
const e_ = "2.0.0",
  ep = 256,
  t_ = Number.MAX_SAFE_INTEGER || 9007199254740991,
  r_ = 16,
  n_ = ep - 6,
  i_ = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease",
  ];
var No = {
  MAX_LENGTH: ep,
  MAX_SAFE_COMPONENT_LENGTH: r_,
  MAX_SAFE_BUILD_LENGTH: n_,
  MAX_SAFE_INTEGER: t_,
  RELEASE_TYPES: i_,
  SEMVER_SPEC_VERSION: e_,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2,
};
const s_ =
  typeof process == "object" &&
  process.env &&
  {}.NODE_DEBUG &&
  /\bsemver\b/i.test({}.NODE_DEBUG)
    ? (...t) => console.error("SEMVER", ...t)
    : () => {};
var Lo = s_;
(function (t, e) {
  const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: i,
    } = No,
    s = Lo;
  e = t.exports = {};
  const o = (e.re = []),
    a = (e.safeRe = []),
    c = (e.src = []),
    f = (e.t = {});
  let d = 0;
  const p = "[a-zA-Z0-9-]",
    b = [
      ["\\s", 1],
      ["\\d", i],
      [p, n],
    ],
    E = (O) => {
      for (const [$, I] of b)
        O = O.split(`${$}*`)
          .join(`${$}{0,${I}}`)
          .split(`${$}+`)
          .join(`${$}{1,${I}}`);
      return O;
    },
    R = (O, $, I) => {
      const k = E($),
        N = d++;
      s(O, N, $),
        (f[O] = N),
        (c[N] = $),
        (o[N] = new RegExp($, I ? "g" : void 0)),
        (a[N] = new RegExp(k, I ? "g" : void 0));
    };
  R("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
    R("NUMERICIDENTIFIERLOOSE", "\\d+"),
    R("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`),
    R(
      "MAINVERSION",
      `(${c[f.NUMERICIDENTIFIER]})\\.(${c[f.NUMERICIDENTIFIER]})\\.(${
        c[f.NUMERICIDENTIFIER]
      })`
    ),
    R(
      "MAINVERSIONLOOSE",
      `(${c[f.NUMERICIDENTIFIERLOOSE]})\\.(${c[f.NUMERICIDENTIFIERLOOSE]})\\.(${
        c[f.NUMERICIDENTIFIERLOOSE]
      })`
    ),
    R(
      "PRERELEASEIDENTIFIER",
      `(?:${c[f.NUMERICIDENTIFIER]}|${c[f.NONNUMERICIDENTIFIER]})`
    ),
    R(
      "PRERELEASEIDENTIFIERLOOSE",
      `(?:${c[f.NUMERICIDENTIFIERLOOSE]}|${c[f.NONNUMERICIDENTIFIER]})`
    ),
    R(
      "PRERELEASE",
      `(?:-(${c[f.PRERELEASEIDENTIFIER]}(?:\\.${c[f.PRERELEASEIDENTIFIER]})*))`
    ),
    R(
      "PRERELEASELOOSE",
      `(?:-?(${c[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
        c[f.PRERELEASEIDENTIFIERLOOSE]
      })*))`
    ),
    R("BUILDIDENTIFIER", `${p}+`),
    R(
      "BUILD",
      `(?:\\+(${c[f.BUILDIDENTIFIER]}(?:\\.${c[f.BUILDIDENTIFIER]})*))`
    ),
    R("FULLPLAIN", `v?${c[f.MAINVERSION]}${c[f.PRERELEASE]}?${c[f.BUILD]}?`),
    R("FULL", `^${c[f.FULLPLAIN]}$`),
    R(
      "LOOSEPLAIN",
      `[v=\\s]*${c[f.MAINVERSIONLOOSE]}${c[f.PRERELEASELOOSE]}?${c[f.BUILD]}?`
    ),
    R("LOOSE", `^${c[f.LOOSEPLAIN]}$`),
    R("GTLT", "((?:<|>)?=?)"),
    R("XRANGEIDENTIFIERLOOSE", `${c[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
    R("XRANGEIDENTIFIER", `${c[f.NUMERICIDENTIFIER]}|x|X|\\*`),
    R(
      "XRANGEPLAIN",
      `[v=\\s]*(${c[f.XRANGEIDENTIFIER]})(?:\\.(${
        c[f.XRANGEIDENTIFIER]
      })(?:\\.(${c[f.XRANGEIDENTIFIER]})(?:${c[f.PRERELEASE]})?${
        c[f.BUILD]
      }?)?)?`
    ),
    R(
      "XRANGEPLAINLOOSE",
      `[v=\\s]*(${c[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
        c[f.XRANGEIDENTIFIERLOOSE]
      })(?:\\.(${c[f.XRANGEIDENTIFIERLOOSE]})(?:${c[f.PRERELEASELOOSE]})?${
        c[f.BUILD]
      }?)?)?`
    ),
    R("XRANGE", `^${c[f.GTLT]}\\s*${c[f.XRANGEPLAIN]}$`),
    R("XRANGELOOSE", `^${c[f.GTLT]}\\s*${c[f.XRANGEPLAINLOOSE]}$`),
    R(
      "COERCE",
      `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`
    ),
    R("COERCERTL", c[f.COERCE], !0),
    R("LONETILDE", "(?:~>?)"),
    R("TILDETRIM", `(\\s*)${c[f.LONETILDE]}\\s+`, !0),
    (e.tildeTrimReplace = "$1~"),
    R("TILDE", `^${c[f.LONETILDE]}${c[f.XRANGEPLAIN]}$`),
    R("TILDELOOSE", `^${c[f.LONETILDE]}${c[f.XRANGEPLAINLOOSE]}$`),
    R("LONECARET", "(?:\\^)"),
    R("CARETTRIM", `(\\s*)${c[f.LONECARET]}\\s+`, !0),
    (e.caretTrimReplace = "$1^"),
    R("CARET", `^${c[f.LONECARET]}${c[f.XRANGEPLAIN]}$`),
    R("CARETLOOSE", `^${c[f.LONECARET]}${c[f.XRANGEPLAINLOOSE]}$`),
    R("COMPARATORLOOSE", `^${c[f.GTLT]}\\s*(${c[f.LOOSEPLAIN]})$|^$`),
    R("COMPARATOR", `^${c[f.GTLT]}\\s*(${c[f.FULLPLAIN]})$|^$`),
    R(
      "COMPARATORTRIM",
      `(\\s*)${c[f.GTLT]}\\s*(${c[f.LOOSEPLAIN]}|${c[f.XRANGEPLAIN]})`,
      !0
    ),
    (e.comparatorTrimReplace = "$1$2$3"),
    R(
      "HYPHENRANGE",
      `^\\s*(${c[f.XRANGEPLAIN]})\\s+-\\s+(${c[f.XRANGEPLAIN]})\\s*$`
    ),
    R(
      "HYPHENRANGELOOSE",
      `^\\s*(${c[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[f.XRANGEPLAINLOOSE]})\\s*$`
    ),
    R("STAR", "(<|>)?=?\\s*\\*"),
    R("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
    R("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(X1, Pr);
const o_ = Object.freeze({ loose: !0 }),
  a_ = Object.freeze({}),
  u_ = (t) => (t ? (typeof t != "object" ? o_ : t) : a_);
var hc = u_;
const nf = /^[0-9]+$/,
  tp = (t, e) => {
    const r = nf.test(t),
      n = nf.test(e);
    return (
      r && n && ((t = +t), (e = +e)),
      t === e ? 0 : r && !n ? -1 : n && !r ? 1 : t < e ? -1 : 1
    );
  },
  c_ = (t, e) => tp(e, t);
var rp = { compareIdentifiers: tp, rcompareIdentifiers: c_ };
const Ps = Lo,
  { MAX_LENGTH: sf, MAX_SAFE_INTEGER: $s } = No,
  { safeRe: of, t: af } = Pr,
  l_ = hc,
  { compareIdentifiers: Hn } = rp;
let f_ = class nr {
  constructor(e, r) {
    if (((r = l_(r)), e instanceof nr)) {
      if (
        e.loose === !!r.loose &&
        e.includePrerelease === !!r.includePrerelease
      )
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(
        `Invalid version. Must be a string. Got type "${typeof e}".`
      );
    if (e.length > sf)
      throw new TypeError(`version is longer than ${sf} characters`);
    Ps("SemVer", e, r),
      (this.options = r),
      (this.loose = !!r.loose),
      (this.includePrerelease = !!r.includePrerelease);
    const n = e.trim().match(r.loose ? of[af.LOOSE] : of[af.FULL]);
    if (!n) throw new TypeError(`Invalid Version: ${e}`);
    if (
      ((this.raw = e),
      (this.major = +n[1]),
      (this.minor = +n[2]),
      (this.patch = +n[3]),
      this.major > $s || this.major < 0)
    )
      throw new TypeError("Invalid major version");
    if (this.minor > $s || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > $s || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4]
      ? (this.prerelease = n[4].split(".").map((i) => {
          if (/^[0-9]+$/.test(i)) {
            const s = +i;
            if (s >= 0 && s < $s) return s;
          }
          return i;
        }))
      : (this.prerelease = []),
      (this.build = n[5] ? n[5].split(".") : []),
      this.format();
  }
  format() {
    return (
      (this.version = `${this.major}.${this.minor}.${this.patch}`),
      this.prerelease.length &&
        (this.version += `-${this.prerelease.join(".")}`),
      this.version
    );
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (
      (Ps("SemVer.compare", this.version, this.options, e), !(e instanceof nr))
    ) {
      if (typeof e == "string" && e === this.version) return 0;
      e = new nr(e, this.options);
    }
    return e.version === this.version
      ? 0
      : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return (
      e instanceof nr || (e = new nr(e, this.options)),
      Hn(this.major, e.major) ||
        Hn(this.minor, e.minor) ||
        Hn(this.patch, e.patch)
    );
  }
  comparePre(e) {
    if (
      (e instanceof nr || (e = new nr(e, this.options)),
      this.prerelease.length && !e.prerelease.length)
    )
      return -1;
    if (!this.prerelease.length && e.prerelease.length) return 1;
    if (!this.prerelease.length && !e.prerelease.length) return 0;
    let r = 0;
    do {
      const n = this.prerelease[r],
        i = e.prerelease[r];
      if ((Ps("prerelease compare", r, n, i), n === void 0 && i === void 0))
        return 0;
      if (i === void 0) return 1;
      if (n === void 0) return -1;
      if (n === i) continue;
      return Hn(n, i);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof nr || (e = new nr(e, this.options));
    let r = 0;
    do {
      const n = this.build[r],
        i = e.build[r];
      if ((Ps("prerelease compare", r, n, i), n === void 0 && i === void 0))
        return 0;
      if (i === void 0) return 1;
      if (n === void 0) return -1;
      if (n === i) continue;
      return Hn(n, i);
    } while (++r);
  }
  inc(e, r, n) {
    switch (e) {
      case "premajor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          (this.minor = 0),
          this.major++,
          this.inc("pre", r, n);
        break;
      case "preminor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          this.minor++,
          this.inc("pre", r, n);
        break;
      case "prepatch":
        (this.prerelease.length = 0),
          this.inc("patch", r, n),
          this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n),
          this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) &&
          this.major++,
          (this.minor = 0),
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
        break;
      case "pre": {
        const i = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0) this.prerelease = [i];
        else {
          let s = this.prerelease.length;
          for (; --s >= 0; )
            typeof this.prerelease[s] == "number" &&
              (this.prerelease[s]++, (s = -2));
          if (s === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error(
                "invalid increment argument: identifier already exists"
              );
            this.prerelease.push(i);
          }
        }
        if (r) {
          let s = [r, i];
          n === !1 && (s = [r]),
            Hn(this.prerelease[0], r) === 0
              ? isNaN(this.prerelease[1]) && (this.prerelease = s)
              : (this.prerelease = s);
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return (
      (this.raw = this.format()),
      this.build.length && (this.raw += `+${this.build.join(".")}`),
      this
    );
  }
};
var xt = f_;
const uf = xt,
  h_ = (t, e, r = !1) => {
    if (t instanceof uf) return t;
    try {
      return new uf(t, e);
    } catch (n) {
      if (!r) return null;
      throw n;
    }
  };
var Ii = h_;
const d_ = Ii,
  p_ = (t, e) => {
    const r = d_(t, e);
    return r ? r.version : null;
  };
var g_ = p_;
const v_ = Ii,
  b_ = (t, e) => {
    const r = v_(t.trim().replace(/^[=v]+/, ""), e);
    return r ? r.version : null;
  };
var y_ = b_;
const cf = xt,
  m_ = (t, e, r, n, i) => {
    typeof r == "string" && ((i = n), (n = r), (r = void 0));
    try {
      return new cf(t instanceof cf ? t.version : t, r).inc(e, n, i).version;
    } catch {
      return null;
    }
  };
var __ = m_;
const lf = Ii,
  w_ = (t, e) => {
    const r = lf(t, null, !0),
      n = lf(e, null, !0),
      i = r.compare(n);
    if (i === 0) return null;
    const s = i > 0,
      o = s ? r : n,
      a = s ? n : r,
      c = !!o.prerelease.length;
    if (!!a.prerelease.length && !c)
      return !a.patch && !a.minor
        ? "major"
        : o.patch
        ? "patch"
        : o.minor
        ? "minor"
        : "major";
    const d = c ? "pre" : "";
    return r.major !== n.major
      ? d + "major"
      : r.minor !== n.minor
      ? d + "minor"
      : r.patch !== n.patch
      ? d + "patch"
      : "prerelease";
  };
var S_ = w_;
const E_ = xt,
  x_ = (t, e) => new E_(t, e).major;
var M_ = x_;
const C_ = xt,
  R_ = (t, e) => new C_(t, e).minor;
var I_ = R_;
const A_ = xt,
  k_ = (t, e) => new A_(t, e).patch;
var T_ = k_;
const O_ = Ii,
  N_ = (t, e) => {
    const r = O_(t, e);
    return r && r.prerelease.length ? r.prerelease : null;
  };
var L_ = N_;
const ff = xt,
  P_ = (t, e, r) => new ff(t, r).compare(new ff(e, r));
var Yt = P_;
const $_ = Yt,
  D_ = (t, e, r) => $_(e, t, r);
var j_ = D_;
const B_ = Yt,
  F_ = (t, e) => B_(t, e, !0);
var H_ = F_;
const hf = xt,
  W_ = (t, e, r) => {
    const n = new hf(t, r),
      i = new hf(e, r);
    return n.compare(i) || n.compareBuild(i);
  };
var dc = W_;
const V_ = dc,
  U_ = (t, e) => t.sort((r, n) => V_(r, n, e));
var z_ = U_;
const q_ = dc,
  G_ = (t, e) => t.sort((r, n) => q_(n, r, e));
var J_ = G_;
const Z_ = Yt,
  Q_ = (t, e, r) => Z_(t, e, r) > 0;
var Po = Q_;
const Y_ = Yt,
  K_ = (t, e, r) => Y_(t, e, r) < 0;
var pc = K_;
const X_ = Yt,
  ew = (t, e, r) => X_(t, e, r) === 0;
var np = ew;
const tw = Yt,
  rw = (t, e, r) => tw(t, e, r) !== 0;
var ip = rw;
const nw = Yt,
  iw = (t, e, r) => nw(t, e, r) >= 0;
var gc = iw;
const sw = Yt,
  ow = (t, e, r) => sw(t, e, r) <= 0;
var vc = ow;
const aw = np,
  uw = ip,
  cw = Po,
  lw = gc,
  fw = pc,
  hw = vc,
  dw = (t, e, r, n) => {
    switch (e) {
      case "===":
        return (
          typeof t == "object" && (t = t.version),
          typeof r == "object" && (r = r.version),
          t === r
        );
      case "!==":
        return (
          typeof t == "object" && (t = t.version),
          typeof r == "object" && (r = r.version),
          t !== r
        );
      case "":
      case "=":
      case "==":
        return aw(t, r, n);
      case "!=":
        return uw(t, r, n);
      case ">":
        return cw(t, r, n);
      case ">=":
        return lw(t, r, n);
      case "<":
        return fw(t, r, n);
      case "<=":
        return hw(t, r, n);
      default:
        throw new TypeError(`Invalid operator: ${e}`);
    }
  };
var sp = dw;
const pw = xt,
  gw = Ii,
  { safeRe: Ds, t: js } = Pr,
  vw = (t, e) => {
    if (t instanceof pw) return t;
    if ((typeof t == "number" && (t = String(t)), typeof t != "string"))
      return null;
    e = e || {};
    let r = null;
    if (!e.rtl) r = t.match(Ds[js.COERCE]);
    else {
      let n;
      for (
        ;
        (n = Ds[js.COERCERTL].exec(t)) &&
        (!r || r.index + r[0].length !== t.length);

      )
        (!r || n.index + n[0].length !== r.index + r[0].length) && (r = n),
          (Ds[js.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
      Ds[js.COERCERTL].lastIndex = -1;
    }
    return r === null ? null : gw(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, e);
  };
var bw = vw,
  qa,
  df;
function yw() {
  return (
    df ||
      ((df = 1),
      (qa = function (t) {
        t.prototype[Symbol.iterator] = function* () {
          for (let e = this.head; e; e = e.next) yield e.value;
        };
      })),
    qa
  );
}
var mw = de;
de.Node = yn;
de.create = de;
function de(t) {
  var e = this;
  if (
    (e instanceof de || (e = new de()),
    (e.tail = null),
    (e.head = null),
    (e.length = 0),
    t && typeof t.forEach == "function")
  )
    t.forEach(function (i) {
      e.push(i);
    });
  else if (arguments.length > 0)
    for (var r = 0, n = arguments.length; r < n; r++) e.push(arguments[r]);
  return e;
}
de.prototype.removeNode = function (t) {
  if (t.list !== this)
    throw new Error("removing node which does not belong to this list");
  var e = t.next,
    r = t.prev;
  return (
    e && (e.prev = r),
    r && (r.next = e),
    t === this.head && (this.head = e),
    t === this.tail && (this.tail = r),
    t.list.length--,
    (t.next = null),
    (t.prev = null),
    (t.list = null),
    e
  );
};
de.prototype.unshiftNode = function (t) {
  if (t !== this.head) {
    t.list && t.list.removeNode(t);
    var e = this.head;
    (t.list = this),
      (t.next = e),
      e && (e.prev = t),
      (this.head = t),
      this.tail || (this.tail = t),
      this.length++;
  }
};
de.prototype.pushNode = function (t) {
  if (t !== this.tail) {
    t.list && t.list.removeNode(t);
    var e = this.tail;
    (t.list = this),
      (t.prev = e),
      e && (e.next = t),
      (this.tail = t),
      this.head || (this.head = t),
      this.length++;
  }
};
de.prototype.push = function () {
  for (var t = 0, e = arguments.length; t < e; t++) ww(this, arguments[t]);
  return this.length;
};
de.prototype.unshift = function () {
  for (var t = 0, e = arguments.length; t < e; t++) Sw(this, arguments[t]);
  return this.length;
};
de.prototype.pop = function () {
  if (this.tail) {
    var t = this.tail.value;
    return (
      (this.tail = this.tail.prev),
      this.tail ? (this.tail.next = null) : (this.head = null),
      this.length--,
      t
    );
  }
};
de.prototype.shift = function () {
  if (this.head) {
    var t = this.head.value;
    return (
      (this.head = this.head.next),
      this.head ? (this.head.prev = null) : (this.tail = null),
      this.length--,
      t
    );
  }
};
de.prototype.forEach = function (t, e) {
  e = e || this;
  for (var r = this.head, n = 0; r !== null; n++)
    t.call(e, r.value, n, this), (r = r.next);
};
de.prototype.forEachReverse = function (t, e) {
  e = e || this;
  for (var r = this.tail, n = this.length - 1; r !== null; n--)
    t.call(e, r.value, n, this), (r = r.prev);
};
de.prototype.get = function (t) {
  for (var e = 0, r = this.head; r !== null && e < t; e++) r = r.next;
  if (e === t && r !== null) return r.value;
};
de.prototype.getReverse = function (t) {
  for (var e = 0, r = this.tail; r !== null && e < t; e++) r = r.prev;
  if (e === t && r !== null) return r.value;
};
de.prototype.map = function (t, e) {
  e = e || this;
  for (var r = new de(), n = this.head; n !== null; )
    r.push(t.call(e, n.value, this)), (n = n.next);
  return r;
};
de.prototype.mapReverse = function (t, e) {
  e = e || this;
  for (var r = new de(), n = this.tail; n !== null; )
    r.push(t.call(e, n.value, this)), (n = n.prev);
  return r;
};
de.prototype.reduce = function (t, e) {
  var r,
    n = this.head;
  if (arguments.length > 1) r = e;
  else if (this.head) (n = this.head.next), (r = this.head.value);
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var i = 0; n !== null; i++) (r = t(r, n.value, i)), (n = n.next);
  return r;
};
de.prototype.reduceReverse = function (t, e) {
  var r,
    n = this.tail;
  if (arguments.length > 1) r = e;
  else if (this.tail) (n = this.tail.prev), (r = this.tail.value);
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var i = this.length - 1; n !== null; i--)
    (r = t(r, n.value, i)), (n = n.prev);
  return r;
};
de.prototype.toArray = function () {
  for (var t = new Array(this.length), e = 0, r = this.head; r !== null; e++)
    (t[e] = r.value), (r = r.next);
  return t;
};
de.prototype.toArrayReverse = function () {
  for (var t = new Array(this.length), e = 0, r = this.tail; r !== null; e++)
    (t[e] = r.value), (r = r.prev);
  return t;
};
de.prototype.slice = function (t, e) {
  (e = e || this.length),
    e < 0 && (e += this.length),
    (t = t || 0),
    t < 0 && (t += this.length);
  var r = new de();
  if (e < t || e < 0) return r;
  t < 0 && (t = 0), e > this.length && (e = this.length);
  for (var n = 0, i = this.head; i !== null && n < t; n++) i = i.next;
  for (; i !== null && n < e; n++, i = i.next) r.push(i.value);
  return r;
};
de.prototype.sliceReverse = function (t, e) {
  (e = e || this.length),
    e < 0 && (e += this.length),
    (t = t || 0),
    t < 0 && (t += this.length);
  var r = new de();
  if (e < t || e < 0) return r;
  t < 0 && (t = 0), e > this.length && (e = this.length);
  for (var n = this.length, i = this.tail; i !== null && n > e; n--) i = i.prev;
  for (; i !== null && n > t; n--, i = i.prev) r.push(i.value);
  return r;
};
de.prototype.splice = function (t, e, ...r) {
  t > this.length && (t = this.length - 1), t < 0 && (t = this.length + t);
  for (var n = 0, i = this.head; i !== null && n < t; n++) i = i.next;
  for (var s = [], n = 0; i && n < e; n++)
    s.push(i.value), (i = this.removeNode(i));
  i === null && (i = this.tail),
    i !== this.head && i !== this.tail && (i = i.prev);
  for (var n = 0; n < r.length; n++) i = _w(this, i, r[n]);
  return s;
};
de.prototype.reverse = function () {
  for (var t = this.head, e = this.tail, r = t; r !== null; r = r.prev) {
    var n = r.prev;
    (r.prev = r.next), (r.next = n);
  }
  return (this.head = e), (this.tail = t), this;
};
function _w(t, e, r) {
  var n = e === t.head ? new yn(r, null, e, t) : new yn(r, e, e.next, t);
  return (
    n.next === null && (t.tail = n),
    n.prev === null && (t.head = n),
    t.length++,
    n
  );
}
function ww(t, e) {
  (t.tail = new yn(e, t.tail, null, t)),
    t.head || (t.head = t.tail),
    t.length++;
}
function Sw(t, e) {
  (t.head = new yn(e, null, t.head, t)),
    t.tail || (t.tail = t.head),
    t.length++;
}
function yn(t, e, r, n) {
  if (!(this instanceof yn)) return new yn(t, e, r, n);
  (this.list = n),
    (this.value = t),
    e ? ((e.next = this), (this.prev = e)) : (this.prev = null),
    r ? ((r.prev = this), (this.next = r)) : (this.next = null);
}
try {
  yw()(de);
} catch {}
const Ew = mw,
  cn = Symbol("max"),
  br = Symbol("length"),
  Wn = Symbol("lengthCalculator"),
  zi = Symbol("allowStale"),
  dn = Symbol("maxAge"),
  pr = Symbol("dispose"),
  pf = Symbol("noDisposeOnSet"),
  ut = Symbol("lruList"),
  qt = Symbol("cache"),
  op = Symbol("updateAgeOnGet"),
  Ga = () => 1;
class xw {
  constructor(e) {
    if (
      (typeof e == "number" && (e = { max: e }),
      e || (e = {}),
      e.max && (typeof e.max != "number" || e.max < 0))
    )
      throw new TypeError("max must be a non-negative number");
    this[cn] = e.max || 1 / 0;
    const r = e.length || Ga;
    if (
      ((this[Wn] = typeof r != "function" ? Ga : r),
      (this[zi] = e.stale || !1),
      e.maxAge && typeof e.maxAge != "number")
    )
      throw new TypeError("maxAge must be a number");
    (this[dn] = e.maxAge || 0),
      (this[pr] = e.dispose),
      (this[pf] = e.noDisposeOnSet || !1),
      (this[op] = e.updateAgeOnGet || !1),
      this.reset();
  }
  set max(e) {
    if (typeof e != "number" || e < 0)
      throw new TypeError("max must be a non-negative number");
    (this[cn] = e || 1 / 0), Pi(this);
  }
  get max() {
    return this[cn];
  }
  set allowStale(e) {
    this[zi] = !!e;
  }
  get allowStale() {
    return this[zi];
  }
  set maxAge(e) {
    if (typeof e != "number")
      throw new TypeError("maxAge must be a non-negative number");
    (this[dn] = e), Pi(this);
  }
  get maxAge() {
    return this[dn];
  }
  set lengthCalculator(e) {
    typeof e != "function" && (e = Ga),
      e !== this[Wn] &&
        ((this[Wn] = e),
        (this[br] = 0),
        this[ut].forEach((r) => {
          (r.length = this[Wn](r.value, r.key)), (this[br] += r.length);
        })),
      Pi(this);
  }
  get lengthCalculator() {
    return this[Wn];
  }
  get length() {
    return this[br];
  }
  get itemCount() {
    return this[ut].length;
  }
  rforEach(e, r) {
    r = r || this;
    for (let n = this[ut].tail; n !== null; ) {
      const i = n.prev;
      gf(this, e, n, r), (n = i);
    }
  }
  forEach(e, r) {
    r = r || this;
    for (let n = this[ut].head; n !== null; ) {
      const i = n.next;
      gf(this, e, n, r), (n = i);
    }
  }
  keys() {
    return this[ut].toArray().map((e) => e.key);
  }
  values() {
    return this[ut].toArray().map((e) => e.value);
  }
  reset() {
    this[pr] &&
      this[ut] &&
      this[ut].length &&
      this[ut].forEach((e) => this[pr](e.key, e.value)),
      (this[qt] = new Map()),
      (this[ut] = new Ew()),
      (this[br] = 0);
  }
  dump() {
    return this[ut]
      .map((e) =>
        io(this, e) ? !1 : { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) }
      )
      .toArray()
      .filter((e) => e);
  }
  dumpLru() {
    return this[ut];
  }
  set(e, r, n) {
    if (((n = n || this[dn]), n && typeof n != "number"))
      throw new TypeError("maxAge must be a number");
    const i = n ? Date.now() : 0,
      s = this[Wn](r, e);
    if (this[qt].has(e)) {
      if (s > this[cn]) return ei(this, this[qt].get(e)), !1;
      const c = this[qt].get(e).value;
      return (
        this[pr] && (this[pf] || this[pr](e, c.value)),
        (c.now = i),
        (c.maxAge = n),
        (c.value = r),
        (this[br] += s - c.length),
        (c.length = s),
        this.get(e),
        Pi(this),
        !0
      );
    }
    const o = new Mw(e, r, s, i, n);
    return o.length > this[cn]
      ? (this[pr] && this[pr](e, r), !1)
      : ((this[br] += o.length),
        this[ut].unshift(o),
        this[qt].set(e, this[ut].head),
        Pi(this),
        !0);
  }
  has(e) {
    if (!this[qt].has(e)) return !1;
    const r = this[qt].get(e).value;
    return !io(this, r);
  }
  get(e) {
    return Ja(this, e, !0);
  }
  peek(e) {
    return Ja(this, e, !1);
  }
  pop() {
    const e = this[ut].tail;
    return e ? (ei(this, e), e.value) : null;
  }
  del(e) {
    ei(this, this[qt].get(e));
  }
  load(e) {
    this.reset();
    const r = Date.now();
    for (let n = e.length - 1; n >= 0; n--) {
      const i = e[n],
        s = i.e || 0;
      if (s === 0) this.set(i.k, i.v);
      else {
        const o = s - r;
        o > 0 && this.set(i.k, i.v, o);
      }
    }
  }
  prune() {
    this[qt].forEach((e, r) => Ja(this, r, !1));
  }
}
const Ja = (t, e, r) => {
    const n = t[qt].get(e);
    if (n) {
      const i = n.value;
      if (io(t, i)) {
        if ((ei(t, n), !t[zi])) return;
      } else r && (t[op] && (n.value.now = Date.now()), t[ut].unshiftNode(n));
      return i.value;
    }
  },
  io = (t, e) => {
    if (!e || (!e.maxAge && !t[dn])) return !1;
    const r = Date.now() - e.now;
    return e.maxAge ? r > e.maxAge : t[dn] && r > t[dn];
  },
  Pi = (t) => {
    if (t[br] > t[cn])
      for (let e = t[ut].tail; t[br] > t[cn] && e !== null; ) {
        const r = e.prev;
        ei(t, e), (e = r);
      }
  },
  ei = (t, e) => {
    if (e) {
      const r = e.value;
      t[pr] && t[pr](r.key, r.value),
        (t[br] -= r.length),
        t[qt].delete(r.key),
        t[ut].removeNode(e);
    }
  };
class Mw {
  constructor(e, r, n, i, s) {
    (this.key = e),
      (this.value = r),
      (this.length = n),
      (this.now = i),
      (this.maxAge = s || 0);
  }
}
const gf = (t, e, r, n) => {
  let i = r.value;
  io(t, i) && (ei(t, r), t[zi] || (i = void 0)),
    i && e.call(n, i.value, i.key, t);
};
var Cw = xw,
  Za,
  vf;
function Kt() {
  if (vf) return Za;
  vf = 1;
  class t {
    constructor(u, h) {
      if (((h = n(h)), u instanceof t))
        return u.loose === !!h.loose &&
          u.includePrerelease === !!h.includePrerelease
          ? u
          : new t(u.raw, h);
      if (u instanceof i)
        return (this.raw = u.value), (this.set = [[u]]), this.format(), this;
      if (
        ((this.options = h),
        (this.loose = !!h.loose),
        (this.includePrerelease = !!h.includePrerelease),
        (this.raw = u.trim().split(/\s+/).join(" ")),
        (this.set = this.raw
          .split("||")
          .map((m) => this.parseRange(m.trim()))
          .filter((m) => m.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const m = this.set[0];
        if (
          ((this.set = this.set.filter((g) => !R(g[0]))), this.set.length === 0)
        )
          this.set = [m];
        else if (this.set.length > 1) {
          for (const g of this.set)
            if (g.length === 1 && O(g[0])) {
              this.set = [g];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return (
        (this.range = this.set
          .map((u) => u.join(" ").trim())
          .join("||")
          .trim()),
        this.range
      );
    }
    toString() {
      return this.range;
    }
    parseRange(u) {
      const m =
          ((this.options.includePrerelease && b) | (this.options.loose && E)) +
          ":" +
          u,
        g = r.get(m);
      if (g) return g;
      const v = this.options.loose,
        _ = v ? a[c.HYPHENRANGELOOSE] : a[c.HYPHENRANGE];
      (u = u.replace(_, Q(this.options.includePrerelease))),
        s("hyphen replace", u),
        (u = u.replace(a[c.COMPARATORTRIM], f)),
        s("comparator trim", u),
        (u = u.replace(a[c.TILDETRIM], d)),
        s("tilde trim", u),
        (u = u.replace(a[c.CARETTRIM], p)),
        s("caret trim", u);
      let M = u
        .split(" ")
        .map((B) => I(B, this.options))
        .join(" ")
        .split(/\s+/)
        .map((B) => Y(B, this.options));
      v &&
        (M = M.filter(
          (B) => (
            s("loose invalid filter", B, this.options),
            !!B.match(a[c.COMPARATORLOOSE])
          )
        )),
        s("range list", M);
      const y = new Map(),
        l = M.map((B) => new i(B, this.options));
      for (const B of l) {
        if (R(B)) return [B];
        y.set(B.value, B);
      }
      y.size > 1 && y.has("") && y.delete("");
      const S = [...y.values()];
      return r.set(m, S), S;
    }
    intersects(u, h) {
      if (!(u instanceof t)) throw new TypeError("a Range is required");
      return this.set.some(
        (m) =>
          $(m, h) &&
          u.set.some(
            (g) => $(g, h) && m.every((v) => g.every((_) => v.intersects(_, h)))
          )
      );
    }
    test(u) {
      if (!u) return !1;
      if (typeof u == "string")
        try {
          u = new o(u, this.options);
        } catch {
          return !1;
        }
      for (let h = 0; h < this.set.length; h++)
        if (K(this.set[h], u, this.options)) return !0;
      return !1;
    }
  }
  Za = t;
  const e = Cw,
    r = new e({ max: 1e3 }),
    n = hc,
    i = $o(),
    s = Lo,
    o = xt,
    {
      safeRe: a,
      t: c,
      comparatorTrimReplace: f,
      tildeTrimReplace: d,
      caretTrimReplace: p,
    } = Pr,
    { FLAG_INCLUDE_PRERELEASE: b, FLAG_LOOSE: E } = No,
    R = (w) => w.value === "<0.0.0-0",
    O = (w) => w.value === "",
    $ = (w, u) => {
      let h = !0;
      const m = w.slice();
      let g = m.pop();
      for (; h && m.length; )
        (h = m.every((v) => g.intersects(v, u))), (g = m.pop());
      return h;
    },
    I = (w, u) => (
      s("comp", w, u),
      (w = L(w, u)),
      s("caret", w),
      (w = N(w, u)),
      s("tildes", w),
      (w = G(w, u)),
      s("xrange", w),
      (w = H(w, u)),
      s("stars", w),
      w
    ),
    k = (w) => !w || w.toLowerCase() === "x" || w === "*",
    N = (w, u) =>
      w
        .trim()
        .split(/\s+/)
        .map((h) => D(h, u))
        .join(" "),
    D = (w, u) => {
      const h = u.loose ? a[c.TILDELOOSE] : a[c.TILDE];
      return w.replace(h, (m, g, v, _, M) => {
        s("tilde", w, m, g, v, _, M);
        let y;
        return (
          k(g)
            ? (y = "")
            : k(v)
            ? (y = `>=${g}.0.0 <${+g + 1}.0.0-0`)
            : k(_)
            ? (y = `>=${g}.${v}.0 <${g}.${+v + 1}.0-0`)
            : M
            ? (s("replaceTilde pr", M),
              (y = `>=${g}.${v}.${_}-${M} <${g}.${+v + 1}.0-0`))
            : (y = `>=${g}.${v}.${_} <${g}.${+v + 1}.0-0`),
          s("tilde return", y),
          y
        );
      });
    },
    L = (w, u) =>
      w
        .trim()
        .split(/\s+/)
        .map((h) => U(h, u))
        .join(" "),
    U = (w, u) => {
      s("caret", w, u);
      const h = u.loose ? a[c.CARETLOOSE] : a[c.CARET],
        m = u.includePrerelease ? "-0" : "";
      return w.replace(h, (g, v, _, M, y) => {
        s("caret", w, g, v, _, M, y);
        let l;
        return (
          k(v)
            ? (l = "")
            : k(_)
            ? (l = `>=${v}.0.0${m} <${+v + 1}.0.0-0`)
            : k(M)
            ? v === "0"
              ? (l = `>=${v}.${_}.0${m} <${v}.${+_ + 1}.0-0`)
              : (l = `>=${v}.${_}.0${m} <${+v + 1}.0.0-0`)
            : y
            ? (s("replaceCaret pr", y),
              v === "0"
                ? _ === "0"
                  ? (l = `>=${v}.${_}.${M}-${y} <${v}.${_}.${+M + 1}-0`)
                  : (l = `>=${v}.${_}.${M}-${y} <${v}.${+_ + 1}.0-0`)
                : (l = `>=${v}.${_}.${M}-${y} <${+v + 1}.0.0-0`))
            : (s("no pr"),
              v === "0"
                ? _ === "0"
                  ? (l = `>=${v}.${_}.${M}${m} <${v}.${_}.${+M + 1}-0`)
                  : (l = `>=${v}.${_}.${M}${m} <${v}.${+_ + 1}.0-0`)
                : (l = `>=${v}.${_}.${M} <${+v + 1}.0.0-0`)),
          s("caret return", l),
          l
        );
      });
    },
    G = (w, u) => (
      s("replaceXRanges", w, u),
      w
        .split(/\s+/)
        .map((h) => q(h, u))
        .join(" ")
    ),
    q = (w, u) => {
      w = w.trim();
      const h = u.loose ? a[c.XRANGELOOSE] : a[c.XRANGE];
      return w.replace(h, (m, g, v, _, M, y) => {
        s("xRange", w, m, g, v, _, M, y);
        const l = k(v),
          S = l || k(_),
          B = S || k(M),
          z = B;
        return (
          g === "=" && z && (g = ""),
          (y = u.includePrerelease ? "-0" : ""),
          l
            ? g === ">" || g === "<"
              ? (m = "<0.0.0-0")
              : (m = "*")
            : g && z
            ? (S && (_ = 0),
              (M = 0),
              g === ">"
                ? ((g = ">="),
                  S
                    ? ((v = +v + 1), (_ = 0), (M = 0))
                    : ((_ = +_ + 1), (M = 0)))
                : g === "<=" && ((g = "<"), S ? (v = +v + 1) : (_ = +_ + 1)),
              g === "<" && (y = "-0"),
              (m = `${g + v}.${_}.${M}${y}`))
            : S
            ? (m = `>=${v}.0.0${y} <${+v + 1}.0.0-0`)
            : B && (m = `>=${v}.${_}.0${y} <${v}.${+_ + 1}.0-0`),
          s("xRange return", m),
          m
        );
      });
    },
    H = (w, u) => (s("replaceStars", w, u), w.trim().replace(a[c.STAR], "")),
    Y = (w, u) => (
      s("replaceGTE0", w, u),
      w.trim().replace(a[u.includePrerelease ? c.GTE0PRE : c.GTE0], "")
    ),
    Q = (w) => (u, h, m, g, v, _, M, y, l, S, B, z, A) => (
      k(m)
        ? (h = "")
        : k(g)
        ? (h = `>=${m}.0.0${w ? "-0" : ""}`)
        : k(v)
        ? (h = `>=${m}.${g}.0${w ? "-0" : ""}`)
        : _
        ? (h = `>=${h}`)
        : (h = `>=${h}${w ? "-0" : ""}`),
      k(l)
        ? (y = "")
        : k(S)
        ? (y = `<${+l + 1}.0.0-0`)
        : k(B)
        ? (y = `<${l}.${+S + 1}.0-0`)
        : z
        ? (y = `<=${l}.${S}.${B}-${z}`)
        : w
        ? (y = `<${l}.${S}.${+B + 1}-0`)
        : (y = `<=${y}`),
      `${h} ${y}`.trim()
    ),
    K = (w, u, h) => {
      for (let m = 0; m < w.length; m++) if (!w[m].test(u)) return !1;
      if (u.prerelease.length && !h.includePrerelease) {
        for (let m = 0; m < w.length; m++)
          if (
            (s(w[m].semver),
            w[m].semver !== i.ANY && w[m].semver.prerelease.length > 0)
          ) {
            const g = w[m].semver;
            if (
              g.major === u.major &&
              g.minor === u.minor &&
              g.patch === u.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    };
  return Za;
}
var Qa, bf;
function $o() {
  if (bf) return Qa;
  bf = 1;
  const t = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return t;
    }
    constructor(d, p) {
      if (((p = r(p)), d instanceof e)) {
        if (d.loose === !!p.loose) return d;
        d = d.value;
      }
      (d = d.trim().split(/\s+/).join(" ")),
        o("comparator", d, p),
        (this.options = p),
        (this.loose = !!p.loose),
        this.parse(d),
        this.semver === t
          ? (this.value = "")
          : (this.value = this.operator + this.semver.version),
        o("comp", this);
    }
    parse(d) {
      const p = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR],
        b = d.match(p);
      if (!b) throw new TypeError(`Invalid comparator: ${d}`);
      (this.operator = b[1] !== void 0 ? b[1] : ""),
        this.operator === "=" && (this.operator = ""),
        b[2]
          ? (this.semver = new a(b[2], this.options.loose))
          : (this.semver = t);
    }
    toString() {
      return this.value;
    }
    test(d) {
      if (
        (o("Comparator.test", d, this.options.loose),
        this.semver === t || d === t)
      )
        return !0;
      if (typeof d == "string")
        try {
          d = new a(d, this.options);
        } catch {
          return !1;
        }
      return s(d, this.operator, this.semver, this.options);
    }
    intersects(d, p) {
      if (!(d instanceof e)) throw new TypeError("a Comparator is required");
      return this.operator === ""
        ? this.value === ""
          ? !0
          : new c(d.value, p).test(this.value)
        : d.operator === ""
        ? d.value === ""
          ? !0
          : new c(this.value, p).test(d.semver)
        : ((p = r(p)),
          (p.includePrerelease &&
            (this.value === "<0.0.0-0" || d.value === "<0.0.0-0")) ||
          (!p.includePrerelease &&
            (this.value.startsWith("<0.0.0") || d.value.startsWith("<0.0.0")))
            ? !1
            : !!(
                (this.operator.startsWith(">") && d.operator.startsWith(">")) ||
                (this.operator.startsWith("<") && d.operator.startsWith("<")) ||
                (this.semver.version === d.semver.version &&
                  this.operator.includes("=") &&
                  d.operator.includes("=")) ||
                (s(this.semver, "<", d.semver, p) &&
                  this.operator.startsWith(">") &&
                  d.operator.startsWith("<")) ||
                (s(this.semver, ">", d.semver, p) &&
                  this.operator.startsWith("<") &&
                  d.operator.startsWith(">"))
              ));
    }
  }
  Qa = e;
  const r = hc,
    { safeRe: n, t: i } = Pr,
    s = sp,
    o = Lo,
    a = xt,
    c = Kt();
  return Qa;
}
const Rw = Kt(),
  Iw = (t, e, r) => {
    try {
      e = new Rw(e, r);
    } catch {
      return !1;
    }
    return e.test(t);
  };
var Do = Iw;
const Aw = Kt(),
  kw = (t, e) =>
    new Aw(t, e).set.map((r) =>
      r
        .map((n) => n.value)
        .join(" ")
        .trim()
        .split(" ")
    );
var Tw = kw;
const Ow = xt,
  Nw = Kt(),
  Lw = (t, e, r) => {
    let n = null,
      i = null,
      s = null;
    try {
      s = new Nw(e, r);
    } catch {
      return null;
    }
    return (
      t.forEach((o) => {
        s.test(o) &&
          (!n || i.compare(o) === -1) &&
          ((n = o), (i = new Ow(n, r)));
      }),
      n
    );
  };
var Pw = Lw;
const $w = xt,
  Dw = Kt(),
  jw = (t, e, r) => {
    let n = null,
      i = null,
      s = null;
    try {
      s = new Dw(e, r);
    } catch {
      return null;
    }
    return (
      t.forEach((o) => {
        s.test(o) &&
          (!n || i.compare(o) === 1) &&
          ((n = o), (i = new $w(n, r)));
      }),
      n
    );
  };
var Bw = jw;
const Ya = xt,
  Fw = Kt(),
  yf = Po,
  Hw = (t, e) => {
    t = new Fw(t, e);
    let r = new Ya("0.0.0");
    if (t.test(r) || ((r = new Ya("0.0.0-0")), t.test(r))) return r;
    r = null;
    for (let n = 0; n < t.set.length; ++n) {
      const i = t.set[n];
      let s = null;
      i.forEach((o) => {
        const a = new Ya(o.semver.version);
        switch (o.operator) {
          case ">":
            a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0),
              (a.raw = a.format());
          case "":
          case ">=":
            (!s || yf(a, s)) && (s = a);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${o.operator}`);
        }
      }),
        s && (!r || yf(r, s)) && (r = s);
    }
    return r && t.test(r) ? r : null;
  };
var Ww = Hw;
const Vw = Kt(),
  Uw = (t, e) => {
    try {
      return new Vw(t, e).range || "*";
    } catch {
      return null;
    }
  };
var zw = Uw;
const qw = xt,
  ap = $o(),
  { ANY: Gw } = ap,
  Jw = Kt(),
  Zw = Do,
  mf = Po,
  _f = pc,
  Qw = vc,
  Yw = gc,
  Kw = (t, e, r, n) => {
    (t = new qw(t, n)), (e = new Jw(e, n));
    let i, s, o, a, c;
    switch (r) {
      case ">":
        (i = mf), (s = Qw), (o = _f), (a = ">"), (c = ">=");
        break;
      case "<":
        (i = _f), (s = Yw), (o = mf), (a = "<"), (c = "<=");
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (Zw(t, e, n)) return !1;
    for (let f = 0; f < e.set.length; ++f) {
      const d = e.set[f];
      let p = null,
        b = null;
      if (
        (d.forEach((E) => {
          E.semver === Gw && (E = new ap(">=0.0.0")),
            (p = p || E),
            (b = b || E),
            i(E.semver, p.semver, n)
              ? (p = E)
              : o(E.semver, b.semver, n) && (b = E);
        }),
        p.operator === a ||
          p.operator === c ||
          ((!b.operator || b.operator === a) && s(t, b.semver)))
      )
        return !1;
      if (b.operator === c && o(t, b.semver)) return !1;
    }
    return !0;
  };
var bc = Kw;
const Xw = bc,
  e2 = (t, e, r) => Xw(t, e, ">", r);
var t2 = e2;
const r2 = bc,
  n2 = (t, e, r) => r2(t, e, "<", r);
var i2 = n2;
const wf = Kt(),
  s2 = (t, e, r) => (
    (t = new wf(t, r)), (e = new wf(e, r)), t.intersects(e, r)
  );
var o2 = s2;
const a2 = Do,
  u2 = Yt;
var c2 = (t, e, r) => {
  const n = [];
  let i = null,
    s = null;
  const o = t.sort((d, p) => u2(d, p, r));
  for (const d of o)
    a2(d, e, r)
      ? ((s = d), i || (i = d))
      : (s && n.push([i, s]), (s = null), (i = null));
  i && n.push([i, null]);
  const a = [];
  for (const [d, p] of n)
    d === p
      ? a.push(d)
      : !p && d === o[0]
      ? a.push("*")
      : p
      ? d === o[0]
        ? a.push(`<=${p}`)
        : a.push(`${d} - ${p}`)
      : a.push(`>=${d}`);
  const c = a.join(" || "),
    f = typeof e.raw == "string" ? e.raw : String(e);
  return c.length < f.length ? c : e;
};
const Sf = Kt(),
  yc = $o(),
  { ANY: Ka } = yc,
  $i = Do,
  mc = Yt,
  l2 = (t, e, r = {}) => {
    if (t === e) return !0;
    (t = new Sf(t, r)), (e = new Sf(e, r));
    let n = !1;
    e: for (const i of t.set) {
      for (const s of e.set) {
        const o = h2(i, s, r);
        if (((n = n || o !== null), o)) continue e;
      }
      if (n) return !1;
    }
    return !0;
  },
  f2 = [new yc(">=0.0.0-0")],
  Ef = [new yc(">=0.0.0")],
  h2 = (t, e, r) => {
    if (t === e) return !0;
    if (t.length === 1 && t[0].semver === Ka) {
      if (e.length === 1 && e[0].semver === Ka) return !0;
      r.includePrerelease ? (t = f2) : (t = Ef);
    }
    if (e.length === 1 && e[0].semver === Ka) {
      if (r.includePrerelease) return !0;
      e = Ef;
    }
    const n = new Set();
    let i, s;
    for (const E of t)
      E.operator === ">" || E.operator === ">="
        ? (i = xf(i, E, r))
        : E.operator === "<" || E.operator === "<="
        ? (s = Mf(s, E, r))
        : n.add(E.semver);
    if (n.size > 1) return null;
    let o;
    if (i && s) {
      if (((o = mc(i.semver, s.semver, r)), o > 0)) return null;
      if (o === 0 && (i.operator !== ">=" || s.operator !== "<=")) return null;
    }
    for (const E of n) {
      if ((i && !$i(E, String(i), r)) || (s && !$i(E, String(s), r)))
        return null;
      for (const R of e) if (!$i(E, String(R), r)) return !1;
      return !0;
    }
    let a,
      c,
      f,
      d,
      p =
        s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1,
      b =
        i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
    p &&
      p.prerelease.length === 1 &&
      s.operator === "<" &&
      p.prerelease[0] === 0 &&
      (p = !1);
    for (const E of e) {
      if (
        ((d = d || E.operator === ">" || E.operator === ">="),
        (f = f || E.operator === "<" || E.operator === "<="),
        i)
      ) {
        if (
          (b &&
            E.semver.prerelease &&
            E.semver.prerelease.length &&
            E.semver.major === b.major &&
            E.semver.minor === b.minor &&
            E.semver.patch === b.patch &&
            (b = !1),
          E.operator === ">" || E.operator === ">=")
        ) {
          if (((a = xf(i, E, r)), a === E && a !== i)) return !1;
        } else if (i.operator === ">=" && !$i(i.semver, String(E), r))
          return !1;
      }
      if (s) {
        if (
          (p &&
            E.semver.prerelease &&
            E.semver.prerelease.length &&
            E.semver.major === p.major &&
            E.semver.minor === p.minor &&
            E.semver.patch === p.patch &&
            (p = !1),
          E.operator === "<" || E.operator === "<=")
        ) {
          if (((c = Mf(s, E, r)), c === E && c !== s)) return !1;
        } else if (s.operator === "<=" && !$i(s.semver, String(E), r))
          return !1;
      }
      if (!E.operator && (s || i) && o !== 0) return !1;
    }
    return !((i && f && !s && o !== 0) || (s && d && !i && o !== 0) || b || p);
  },
  xf = (t, e, r) => {
    if (!t) return e;
    const n = mc(t.semver, e.semver, r);
    return n > 0
      ? t
      : n < 0 || (e.operator === ">" && t.operator === ">=")
      ? e
      : t;
  },
  Mf = (t, e, r) => {
    if (!t) return e;
    const n = mc(t.semver, e.semver, r);
    return n < 0
      ? t
      : n > 0 || (e.operator === "<" && t.operator === "<=")
      ? e
      : t;
  };
var d2 = l2;
const Xa = Pr,
  Cf = No,
  p2 = xt,
  Rf = rp,
  g2 = Ii,
  v2 = g_,
  b2 = y_,
  y2 = __,
  m2 = S_,
  _2 = M_,
  w2 = I_,
  S2 = T_,
  E2 = L_,
  x2 = Yt,
  M2 = j_,
  C2 = H_,
  R2 = dc,
  I2 = z_,
  A2 = J_,
  k2 = Po,
  T2 = pc,
  O2 = np,
  N2 = ip,
  L2 = gc,
  P2 = vc,
  $2 = sp,
  D2 = bw,
  j2 = $o(),
  B2 = Kt(),
  F2 = Do,
  H2 = Tw,
  W2 = Pw,
  V2 = Bw,
  U2 = Ww,
  z2 = zw,
  q2 = bc,
  G2 = t2,
  J2 = i2,
  Z2 = o2,
  Q2 = c2,
  Y2 = d2;
var K2 = {
  parse: g2,
  valid: v2,
  clean: b2,
  inc: y2,
  diff: m2,
  major: _2,
  minor: w2,
  patch: S2,
  prerelease: E2,
  compare: x2,
  rcompare: M2,
  compareLoose: C2,
  compareBuild: R2,
  sort: I2,
  rsort: A2,
  gt: k2,
  lt: T2,
  eq: O2,
  neq: N2,
  gte: L2,
  lte: P2,
  cmp: $2,
  coerce: D2,
  Comparator: j2,
  Range: B2,
  satisfies: F2,
  toComparators: H2,
  maxSatisfying: W2,
  minSatisfying: V2,
  minVersion: U2,
  validRange: z2,
  outside: q2,
  gtr: G2,
  ltr: J2,
  intersects: Z2,
  simplifyRange: Q2,
  subset: Y2,
  SemVer: p2,
  re: Xa.re,
  src: Xa.src,
  tokens: Xa.t,
  SEMVER_SPEC_VERSION: Cf.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Cf.RELEASE_TYPES,
  compareIdentifiers: Rf.compareIdentifiers,
  rcompareIdentifiers: Rf.rcompareIdentifiers,
};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.satisfiesVersionRange =
      t.gtRange =
      t.gtVersion =
      t.assertIsSemVerRange =
      t.assertIsSemVerVersion =
      t.isValidSemVerRange =
      t.isValidSemVerVersion =
      t.VersionRangeStruct =
      t.VersionStruct =
        void 0);
  const e = K2,
    r = Cn,
    n = pt;
  (t.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (p) =>
    (0, e.valid)(p) === null ? `Expected SemVer version, got "${p}"` : !0
  )),
    (t.VersionRangeStruct = (0, r.refine)(
      (0, r.string)(),
      "Version range",
      (p) =>
        (0, e.validRange)(p) === null ? `Expected SemVer range, got "${p}"` : !0
    ));
  function i(p) {
    return (0, r.is)(p, t.VersionStruct);
  }
  t.isValidSemVerVersion = i;
  function s(p) {
    return (0, r.is)(p, t.VersionRangeStruct);
  }
  t.isValidSemVerRange = s;
  function o(p) {
    (0, n.assertStruct)(p, t.VersionStruct);
  }
  t.assertIsSemVerVersion = o;
  function a(p) {
    (0, n.assertStruct)(p, t.VersionRangeStruct);
  }
  t.assertIsSemVerRange = a;
  function c(p, b) {
    return (0, e.gt)(p, b);
  }
  t.gtVersion = c;
  function f(p, b) {
    return (0, e.gtr)(p, b);
  }
  t.gtRange = f;
  function d(p, b) {
    return (0, e.satisfies)(p, b, { includePrerelease: !0 });
  }
  t.satisfiesVersionRange = d;
})(Xd);
(function (t) {
  var e =
      (J && J.__createBinding) ||
      (Object.create
        ? function (n, i, s, o) {
            o === void 0 && (o = s);
            var a = Object.getOwnPropertyDescriptor(i, s);
            (!a ||
              ("get" in a ? !i.__esModule : a.writable || a.configurable)) &&
              (a = {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              }),
              Object.defineProperty(n, o, a);
          }
        : function (n, i, s, o) {
            o === void 0 && (o = s), (n[o] = i[s]);
          }),
    r =
      (J && J.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            e(i, n, s);
      };
  Object.defineProperty(t, "__esModule", { value: !0 }),
    r(pt, t),
    r(vs, t),
    r(he, t),
    r(To, t),
    r(ur, t),
    r(li, t),
    r(bs, t),
    r(Qd, t),
    r(fi, t),
    r(fc, t),
    r(cr, t),
    r(Yd, t),
    r(Kd, t),
    r(Xd, t);
})(Td);
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.createModuleLogger = t.projectLogger = void 0);
  const e = Td;
  Object.defineProperty(t, "createModuleLogger", {
    enumerable: !0,
    get: function () {
      return e.createModuleLogger;
    },
  }),
    (t.projectLogger = (0, e.createProjectLogger)("eth-block-tracker"));
})(kd);
var up =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.PollingBlockTracker = void 0;
const X2 = up(tc),
  eS = up(_m),
  tS = ps,
  If = kd,
  Af = (0, If.createModuleLogger)(If.projectLogger, "polling-block-tracker"),
  rS = (0, X2.default)(),
  nS = 1e3;
class iS extends tS.BaseBlockTracker {
  constructor(e = {}) {
    var r;
    if (!e.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    super({
      blockResetDuration:
        (r = e.blockResetDuration) !== null && r !== void 0
          ? r
          : e.pollingInterval,
    }),
      (this._provider = e.provider),
      (this._pollingInterval = e.pollingInterval || 20 * nS),
      (this._retryTimeout = e.retryTimeout || this._pollingInterval / 10),
      (this._keepEventLoopActive =
        e.keepEventLoopActive === void 0 ? !0 : e.keepEventLoopActive),
      (this._setSkipCacheFlag = e.setSkipCacheFlag || !1);
  }
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  async _start() {
    this._synchronize();
  }
  async _end() {}
  async _synchronize() {
    for (var e; this._isRunning; )
      try {
        await this._updateLatestBlock();
        const r = kf(this._pollingInterval, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await r;
      } catch (r) {
        const n =
          new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(e = r.stack) !== null && e !== void 0 ? e : r}`);
        try {
          this.emit("error", n);
        } catch {
          console.error(n);
        }
        const i = kf(this._retryTimeout, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await i;
      }
  }
  async _updateLatestBlock() {
    const e = await this._fetchLatestBlock();
    this._newPotentialLatest(e);
  }
  async _fetchLatestBlock() {
    const e = {
      jsonrpc: "2.0",
      id: rS(),
      method: "eth_blockNumber",
      params: [],
    };
    this._setSkipCacheFlag && (e.skipCache = !0), Af("Making request", e);
    const r = await (0, eS.default)((n) => this._provider.sendAsync(e, n))();
    if ((Af("Got response", r), r.error))
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
    return r.result;
  }
}
Ao.PollingBlockTracker = iS;
function kf(t, e) {
  return new Promise((r) => {
    const n = setTimeout(r, t);
    n.unref && e && n.unref();
  });
}
var jo = {},
  sS =
    (J && J.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.SubscribeBlockTracker = void 0;
const oS = sS(tc),
  aS = ps,
  uS = (0, oS.default)();
class cS extends aS.BaseBlockTracker {
  constructor(e = {}) {
    if (!e.provider)
      throw new Error("SubscribeBlockTracker - no provider specified.");
    super(e), (this._provider = e.provider), (this._subscriptionId = null);
  }
  async checkForLatestBlock() {
    return await this.getLatestBlock();
  }
  async _start() {
    if (this._subscriptionId === void 0 || this._subscriptionId === null)
      try {
        const e = await this._call("eth_blockNumber");
        (this._subscriptionId = await this._call("eth_subscribe", "newHeads")),
          this._provider.on("data", this._handleSubData.bind(this)),
          this._newPotentialLatest(e);
      } catch (e) {
        this.emit("error", e);
      }
  }
  async _end() {
    if (this._subscriptionId !== null && this._subscriptionId !== void 0)
      try {
        await this._call("eth_unsubscribe", this._subscriptionId),
          (this._subscriptionId = null);
      } catch (e) {
        this.emit("error", e);
      }
  }
  _call(e, ...r) {
    return new Promise((n, i) => {
      this._provider.sendAsync(
        { id: uS(), method: e, params: r, jsonrpc: "2.0" },
        (s, o) => {
          s ? i(s) : n(o.result);
        }
      );
    });
  }
  _handleSubData(e, r) {
    var n;
    r.method === "eth_subscription" &&
      ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) ===
        this._subscriptionId &&
      this._newPotentialLatest(r.params.result.number);
  }
}
jo.SubscribeBlockTracker = cS;
var cp = {};
Object.defineProperty(cp, "__esModule", { value: !0 });
(function (t) {
  var e =
      (J && J.__createBinding) ||
      (Object.create
        ? function (n, i, s, o) {
            o === void 0 && (o = s),
              Object.defineProperty(n, o, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              });
          }
        : function (n, i, s, o) {
            o === void 0 && (o = s), (n[o] = i[s]);
          }),
    r =
      (J && J.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            e(i, n, s);
      };
  Object.defineProperty(t, "__esModule", { value: !0 }),
    r(Ao, t),
    r(jo, t),
    r(cp, t);
})(Ad);
var _c = {},
  Bo = {},
  ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.getUniqueId = void 0;
const lp = 4294967295;
let eu = Math.floor(Math.random() * lp);
function lS() {
  return (eu = (eu + 1) % lp), eu;
}
ys.getUniqueId = lS;
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.createIdRemapMiddleware = void 0;
const fS = ys;
function hS() {
  return (t, e, r, n) => {
    const i = t.id,
      s = fS.getUniqueId();
    (t.id = s),
      (e.id = s),
      r((o) => {
        (t.id = i), (e.id = i), o();
      });
  };
}
Bo.createIdRemapMiddleware = hS;
var Fo = {};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.createAsyncMiddleware = void 0;
function dS(t) {
  return async (e, r, n, i) => {
    let s;
    const o = new Promise((d) => {
      s = d;
    });
    let a = null,
      c = !1;
    const f = async () => {
      (c = !0),
        n((d) => {
          (a = d), s();
        }),
        await o;
    };
    try {
      await t(e, r, f), c ? (await o, a(null)) : i(null);
    } catch (d) {
      a ? a(d) : i(d);
    }
  };
}
Fo.createAsyncMiddleware = dS;
var Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.createScaffoldMiddleware = void 0;
function pS(t) {
  return (e, r, n, i) => {
    const s = t[e.method];
    return s === void 0
      ? n()
      : typeof s == "function"
      ? s(e, r, n, i)
      : ((r.result = s), i());
  };
}
Ho.createScaffoldMiddleware = pS;
var ms = {},
  fp = {},
  $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
$r.EthereumProviderError = $r.EthereumRpcError = void 0;
const gS = Eh;
class hp extends Error {
  constructor(e, r, n) {
    if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), (this.code = e), n !== void 0 && (this.data = n);
  }
  serialize() {
    const e = { code: this.code, message: this.message };
    return (
      this.data !== void 0 && (e.data = this.data),
      this.stack && (e.stack = this.stack),
      e
    );
  }
  toString() {
    return gS.default(this.serialize(), yS, 2);
  }
}
$r.EthereumRpcError = hp;
class vS extends hp {
  constructor(e, r, n) {
    if (!bS(e))
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      );
    super(e, r, n);
  }
}
$r.EthereumProviderError = vS;
function bS(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function yS(t, e) {
  if (e !== "[Circular]") return e;
}
var wc = {},
  Dr = {};
Object.defineProperty(Dr, "__esModule", { value: !0 });
Dr.errorValues = Dr.errorCodes = void 0;
Dr.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603,
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
  },
};
Dr.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
  "-32000": { standard: "EIP-1474", message: "Invalid input." },
  "-32001": { standard: "EIP-1474", message: "Resource not found." },
  "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
  "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
  "-32004": { standard: "EIP-1474", message: "Method not supported." },
  "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
  4001: { standard: "EIP-1193", message: "User rejected the request." },
  4100: {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.serializeError =
      t.isValidCode =
      t.getMessageFromCode =
      t.JSON_RPC_SERVER_ERROR_MESSAGE =
        void 0);
  const e = Dr,
    r = $r,
    n = e.errorCodes.rpc.internal,
    i = "Unspecified error message. This is a bug, please report it.",
    s = { code: n, message: o(n) };
  t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(b, E = i) {
    if (Number.isInteger(b)) {
      const R = b.toString();
      if (p(e.errorValues, R)) return e.errorValues[R].message;
      if (f(b)) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return E;
  }
  t.getMessageFromCode = o;
  function a(b) {
    if (!Number.isInteger(b)) return !1;
    const E = b.toString();
    return !!(e.errorValues[E] || f(b));
  }
  t.isValidCode = a;
  function c(b, { fallbackError: E = s, shouldIncludeStack: R = !1 } = {}) {
    var O, $;
    if (!E || !Number.isInteger(E.code) || typeof E.message != "string")
      throw new Error(
        "Must provide fallback error with integer number code and string message."
      );
    if (b instanceof r.EthereumRpcError) return b.serialize();
    const I = {};
    if (
      b &&
      typeof b == "object" &&
      !Array.isArray(b) &&
      p(b, "code") &&
      a(b.code)
    ) {
      const N = b;
      (I.code = N.code),
        N.message && typeof N.message == "string"
          ? ((I.message = N.message), p(N, "data") && (I.data = N.data))
          : ((I.message = o(I.code)), (I.data = { originalError: d(b) }));
    } else {
      I.code = E.code;
      const N = (O = b) === null || O === void 0 ? void 0 : O.message;
      (I.message = N && typeof N == "string" ? N : E.message),
        (I.data = { originalError: d(b) });
    }
    const k = ($ = b) === null || $ === void 0 ? void 0 : $.stack;
    return R && b && k && typeof k == "string" && (I.stack = k), I;
  }
  t.serializeError = c;
  function f(b) {
    return b >= -32099 && b <= -32e3;
  }
  function d(b) {
    return b && typeof b == "object" && !Array.isArray(b)
      ? Object.assign({}, b)
      : b;
  }
  function p(b, E) {
    return Object.prototype.hasOwnProperty.call(b, E);
  }
})(wc);
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.ethErrors = void 0;
const Sc = $r,
  dp = wc,
  vt = Dr;
Wo.ethErrors = {
  rpc: {
    parse: (t) => Nt(vt.errorCodes.rpc.parse, t),
    invalidRequest: (t) => Nt(vt.errorCodes.rpc.invalidRequest, t),
    invalidParams: (t) => Nt(vt.errorCodes.rpc.invalidParams, t),
    methodNotFound: (t) => Nt(vt.errorCodes.rpc.methodNotFound, t),
    internal: (t) => Nt(vt.errorCodes.rpc.internal, t),
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error(
          "Ethereum RPC Server errors must provide single object argument."
        );
      const { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return Nt(e, t);
    },
    invalidInput: (t) => Nt(vt.errorCodes.rpc.invalidInput, t),
    resourceNotFound: (t) => Nt(vt.errorCodes.rpc.resourceNotFound, t),
    resourceUnavailable: (t) => Nt(vt.errorCodes.rpc.resourceUnavailable, t),
    transactionRejected: (t) => Nt(vt.errorCodes.rpc.transactionRejected, t),
    methodNotSupported: (t) => Nt(vt.errorCodes.rpc.methodNotSupported, t),
    limitExceeded: (t) => Nt(vt.errorCodes.rpc.limitExceeded, t),
  },
  provider: {
    userRejectedRequest: (t) =>
      Di(vt.errorCodes.provider.userRejectedRequest, t),
    unauthorized: (t) => Di(vt.errorCodes.provider.unauthorized, t),
    unsupportedMethod: (t) => Di(vt.errorCodes.provider.unsupportedMethod, t),
    disconnected: (t) => Di(vt.errorCodes.provider.disconnected, t),
    chainDisconnected: (t) => Di(vt.errorCodes.provider.chainDisconnected, t),
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error(
          "Ethereum Provider custom errors must provide single object argument."
        );
      const { code: e, message: r, data: n } = t;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new Sc.EthereumProviderError(e, r, n);
    },
  },
};
function Nt(t, e) {
  const [r, n] = pp(e);
  return new Sc.EthereumRpcError(t, r || dp.getMessageFromCode(t), n);
}
function Di(t, e) {
  const [r, n] = pp(e);
  return new Sc.EthereumProviderError(t, r || dp.getMessageFromCode(t), n);
}
function pp(t) {
  if (t) {
    if (typeof t == "string") return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const { message: e, data: r } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, r];
    }
  }
  return [];
}
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.getMessageFromCode =
      t.serializeError =
      t.EthereumProviderError =
      t.EthereumRpcError =
      t.ethErrors =
      t.errorCodes =
        void 0);
  const e = $r;
  Object.defineProperty(t, "EthereumRpcError", {
    enumerable: !0,
    get: function () {
      return e.EthereumRpcError;
    },
  }),
    Object.defineProperty(t, "EthereumProviderError", {
      enumerable: !0,
      get: function () {
        return e.EthereumProviderError;
      },
    });
  const r = wc;
  Object.defineProperty(t, "serializeError", {
    enumerable: !0,
    get: function () {
      return r.serializeError;
    },
  }),
    Object.defineProperty(t, "getMessageFromCode", {
      enumerable: !0,
      get: function () {
        return r.getMessageFromCode;
      },
    });
  const n = Wo;
  Object.defineProperty(t, "ethErrors", {
    enumerable: !0,
    get: function () {
      return n.ethErrors;
    },
  });
  const i = Dr;
  Object.defineProperty(t, "errorCodes", {
    enumerable: !0,
    get: function () {
      return i.errorCodes;
    },
  });
})(fp);
var mS =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.JsonRpcEngine = void 0;
const _S = mS(wn),
  Lt = fp;
class gr extends _S.default {
  constructor() {
    super(), (this._middleware = []);
  }
  push(e) {
    this._middleware.push(e);
  }
  handle(e, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(e)
      ? r
        ? this._handleBatch(e, r)
        : this._handleBatch(e)
      : r
      ? this._handle(e, r)
      : this._promiseHandle(e);
  }
  asMiddleware() {
    return async (e, r, n, i) => {
      try {
        const [s, o, a] = await gr._runAllMiddleware(e, r, this._middleware);
        return o
          ? (await gr._runReturnHandlers(a), i(s))
          : n(async (c) => {
              try {
                await gr._runReturnHandlers(a);
              } catch (f) {
                return c(f);
              }
              return c();
            });
      } catch (s) {
        return i(s);
      }
    };
  }
  async _handleBatch(e, r) {
    try {
      const n = await Promise.all(e.map(this._promiseHandle.bind(this)));
      return r ? r(null, n) : n;
    } catch (n) {
      if (r) return r(n);
      throw n;
    }
  }
  _promiseHandle(e) {
    return new Promise((r) => {
      this._handle(e, (n, i) => {
        r(i);
      });
    });
  }
  async _handle(e, r) {
    if (!e || Array.isArray(e) || typeof e != "object") {
      const o = new Lt.EthereumRpcError(
        Lt.errorCodes.rpc.invalidRequest,
        `Requests must be plain objects. Received: ${typeof e}`,
        { request: e }
      );
      return r(o, { id: void 0, jsonrpc: "2.0", error: o });
    }
    if (typeof e.method != "string") {
      const o = new Lt.EthereumRpcError(
        Lt.errorCodes.rpc.invalidRequest,
        `Must specify a string method. Received: ${typeof e.method}`,
        { request: e }
      );
      return r(o, { id: e.id, jsonrpc: "2.0", error: o });
    }
    const n = Object.assign({}, e),
      i = { id: n.id, jsonrpc: n.jsonrpc };
    let s = null;
    try {
      await this._processRequest(n, i);
    } catch (o) {
      s = o;
    }
    return (
      s && (delete i.result, i.error || (i.error = Lt.serializeError(s))),
      r(s, i)
    );
  }
  async _processRequest(e, r) {
    const [n, i, s] = await gr._runAllMiddleware(e, r, this._middleware);
    if ((gr._checkForCompletion(e, r, i), await gr._runReturnHandlers(s), n))
      throw n;
  }
  static async _runAllMiddleware(e, r, n) {
    const i = [];
    let s = null,
      o = !1;
    for (const a of n)
      if ((([s, o] = await gr._runMiddleware(e, r, a, i)), o)) break;
    return [s, o, i.reverse()];
  }
  static _runMiddleware(e, r, n, i) {
    return new Promise((s) => {
      const o = (c) => {
          const f = c || r.error;
          f && (r.error = Lt.serializeError(f)), s([f, !0]);
        },
        a = (c) => {
          r.error
            ? o(r.error)
            : (c &&
                (typeof c != "function" &&
                  o(
                    new Lt.EthereumRpcError(
                      Lt.errorCodes.rpc.internal,
                      `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof c}" for request:
${tu(e)}`,
                      { request: e }
                    )
                  ),
                i.push(c)),
              s([null, !1]));
        };
      try {
        n(e, r, a, o);
      } catch (c) {
        o(c);
      }
    });
  }
  static async _runReturnHandlers(e) {
    for (const r of e)
      await new Promise((n, i) => {
        r((s) => (s ? i(s) : n()));
      });
  }
  static _checkForCompletion(e, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new Lt.EthereumRpcError(
        Lt.errorCodes.rpc.internal,
        `JsonRpcEngine: Response has no error or result for request:
${tu(e)}`,
        { request: e }
      );
    if (!n)
      throw new Lt.EthereumRpcError(
        Lt.errorCodes.rpc.internal,
        `JsonRpcEngine: Nothing ended request:
${tu(e)}`,
        { request: e }
      );
  }
}
ms.JsonRpcEngine = gr;
function tu(t) {
  return JSON.stringify(t, null, 2);
}
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.mergeMiddleware = void 0;
const wS = ms;
function SS(t) {
  const e = new wS.JsonRpcEngine();
  return t.forEach((r) => e.push(r)), e.asMiddleware();
}
Vo.mergeMiddleware = SS;
(function (t) {
  var e =
      (J && J.__createBinding) ||
      (Object.create
        ? function (n, i, s, o) {
            o === void 0 && (o = s),
              Object.defineProperty(n, o, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              });
          }
        : function (n, i, s, o) {
            o === void 0 && (o = s), (n[o] = i[s]);
          }),
    r =
      (J && J.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            e(i, n, s);
      };
  Object.defineProperty(t, "__esModule", { value: !0 }),
    r(Bo, t),
    r(Fo, t),
    r(Ho, t),
    r(ys, t),
    r(ms, t),
    r(Vo, t);
})(_c);
var gp = {},
  Ec = {},
  es = {},
  ES = {
    get exports() {
      return es;
    },
    set exports(t) {
      es = t;
    },
  };
(function (t) {
  var e,
    r,
    n,
    i,
    s,
    o,
    a,
    c,
    f,
    d,
    p,
    b,
    E,
    R,
    O,
    $,
    I,
    k,
    N,
    D,
    L,
    U,
    G,
    q,
    H,
    Y,
    Q,
    K,
    w;
  (function (u) {
    var h =
      typeof J == "object"
        ? J
        : typeof self == "object"
        ? self
        : typeof this == "object"
        ? this
        : {};
    u(m(h, m(t.exports)));
    function m(g, v) {
      return (
        g !== h &&
          (typeof Object.create == "function"
            ? Object.defineProperty(g, "__esModule", { value: !0 })
            : (g.__esModule = !0)),
        function (_, M) {
          return (g[_] = v ? v(_, M) : M);
        }
      );
    }
  })(function (u) {
    var h =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (g, v) {
          g.__proto__ = v;
        }) ||
      function (g, v) {
        for (var _ in v)
          Object.prototype.hasOwnProperty.call(v, _) && (g[_] = v[_]);
      };
    (e = function (g, v) {
      if (typeof v != "function" && v !== null)
        throw new TypeError(
          "Class extends value " + String(v) + " is not a constructor or null"
        );
      h(g, v);
      function _() {
        this.constructor = g;
      }
      g.prototype =
        v === null ? Object.create(v) : ((_.prototype = v.prototype), new _());
    }),
      (r =
        Object.assign ||
        function (g) {
          for (var v, _ = 1, M = arguments.length; _ < M; _++) {
            v = arguments[_];
            for (var y in v)
              Object.prototype.hasOwnProperty.call(v, y) && (g[y] = v[y]);
          }
          return g;
        }),
      (n = function (g, v) {
        var _ = {};
        for (var M in g)
          Object.prototype.hasOwnProperty.call(g, M) &&
            v.indexOf(M) < 0 &&
            (_[M] = g[M]);
        if (g != null && typeof Object.getOwnPropertySymbols == "function")
          for (
            var y = 0, M = Object.getOwnPropertySymbols(g);
            y < M.length;
            y++
          )
            v.indexOf(M[y]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(g, M[y]) &&
              (_[M[y]] = g[M[y]]);
        return _;
      }),
      (i = function (g, v, _, M) {
        var y = arguments.length,
          l =
            y < 3
              ? v
              : M === null
              ? (M = Object.getOwnPropertyDescriptor(v, _))
              : M,
          S;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          l = Reflect.decorate(g, v, _, M);
        else
          for (var B = g.length - 1; B >= 0; B--)
            (S = g[B]) &&
              (l = (y < 3 ? S(l) : y > 3 ? S(v, _, l) : S(v, _)) || l);
        return y > 3 && l && Object.defineProperty(v, _, l), l;
      }),
      (s = function (g, v) {
        return function (_, M) {
          v(_, M, g);
        };
      }),
      (o = function (g, v, _, M, y, l) {
        function S(V) {
          if (V !== void 0 && typeof V != "function")
            throw new TypeError("Function expected");
          return V;
        }
        for (
          var B = M.kind,
            z = B === "getter" ? "get" : B === "setter" ? "set" : "value",
            A = !v && g ? (M.static ? g : g.prototype) : null,
            T = v || (A ? Object.getOwnPropertyDescriptor(A, M.name) : {}),
            P,
            W = !1,
            ee = _.length - 1;
          ee >= 0;
          ee--
        ) {
          var x = {};
          for (var C in M) x[C] = C === "access" ? {} : M[C];
          for (var C in M.access) x.access[C] = M.access[C];
          x.addInitializer = function (V) {
            if (W)
              throw new TypeError(
                "Cannot add initializers after decoration has completed"
              );
            l.push(S(V || null));
          };
          var j = (0, _[ee])(
            B === "accessor" ? { get: T.get, set: T.set } : T[z],
            x
          );
          if (B === "accessor") {
            if (j === void 0) continue;
            if (j === null || typeof j != "object")
              throw new TypeError("Object expected");
            (P = S(j.get)) && (T.get = P),
              (P = S(j.set)) && (T.set = P),
              (P = S(j.init)) && y.push(P);
          } else (P = S(j)) && (B === "field" ? y.push(P) : (T[z] = P));
        }
        A && Object.defineProperty(A, M.name, T), (W = !0);
      }),
      (a = function (g, v, _) {
        for (var M = arguments.length > 2, y = 0; y < v.length; y++)
          _ = M ? v[y].call(g, _) : v[y].call(g);
        return M ? _ : void 0;
      }),
      (c = function (g) {
        return typeof g == "symbol" ? g : "".concat(g);
      }),
      (f = function (g, v, _) {
        return (
          typeof v == "symbol" &&
            (v = v.description ? "[".concat(v.description, "]") : ""),
          Object.defineProperty(g, "name", {
            configurable: !0,
            value: _ ? "".concat(_, " ", v) : v,
          })
        );
      }),
      (d = function (g, v) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(g, v);
      }),
      (p = function (g, v, _, M) {
        function y(l) {
          return l instanceof _
            ? l
            : new _(function (S) {
                S(l);
              });
        }
        return new (_ || (_ = Promise))(function (l, S) {
          function B(T) {
            try {
              A(M.next(T));
            } catch (P) {
              S(P);
            }
          }
          function z(T) {
            try {
              A(M.throw(T));
            } catch (P) {
              S(P);
            }
          }
          function A(T) {
            T.done ? l(T.value) : y(T.value).then(B, z);
          }
          A((M = M.apply(g, v || [])).next());
        });
      }),
      (b = function (g, v) {
        var _ = {
            label: 0,
            sent: function () {
              if (l[0] & 1) throw l[1];
              return l[1];
            },
            trys: [],
            ops: [],
          },
          M,
          y,
          l,
          S;
        return (
          (S = { next: B(0), throw: B(1), return: B(2) }),
          typeof Symbol == "function" &&
            (S[Symbol.iterator] = function () {
              return this;
            }),
          S
        );
        function B(A) {
          return function (T) {
            return z([A, T]);
          };
        }
        function z(A) {
          if (M) throw new TypeError("Generator is already executing.");
          for (; S && ((S = 0), A[0] && (_ = 0)), _; )
            try {
              if (
                ((M = 1),
                y &&
                  (l =
                    A[0] & 2
                      ? y.return
                      : A[0]
                      ? y.throw || ((l = y.return) && l.call(y), 0)
                      : y.next) &&
                  !(l = l.call(y, A[1])).done)
              )
                return l;
              switch (((y = 0), l && (A = [A[0] & 2, l.value]), A[0])) {
                case 0:
                case 1:
                  l = A;
                  break;
                case 4:
                  return _.label++, { value: A[1], done: !1 };
                case 5:
                  _.label++, (y = A[1]), (A = [0]);
                  continue;
                case 7:
                  (A = _.ops.pop()), _.trys.pop();
                  continue;
                default:
                  if (
                    ((l = _.trys),
                    !(l = l.length > 0 && l[l.length - 1]) &&
                      (A[0] === 6 || A[0] === 2))
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (A[0] === 3 && (!l || (A[1] > l[0] && A[1] < l[3]))) {
                    _.label = A[1];
                    break;
                  }
                  if (A[0] === 6 && _.label < l[1]) {
                    (_.label = l[1]), (l = A);
                    break;
                  }
                  if (l && _.label < l[2]) {
                    (_.label = l[2]), _.ops.push(A);
                    break;
                  }
                  l[2] && _.ops.pop(), _.trys.pop();
                  continue;
              }
              A = v.call(g, _);
            } catch (T) {
              (A = [6, T]), (y = 0);
            } finally {
              M = l = 0;
            }
          if (A[0] & 5) throw A[1];
          return { value: A[0] ? A[1] : void 0, done: !0 };
        }
      }),
      (E = function (g, v) {
        for (var _ in g)
          _ !== "default" &&
            !Object.prototype.hasOwnProperty.call(v, _) &&
            w(v, g, _);
      }),
      (w = Object.create
        ? function (g, v, _, M) {
            M === void 0 && (M = _);
            var y = Object.getOwnPropertyDescriptor(v, _);
            (!y ||
              ("get" in y ? !v.__esModule : y.writable || y.configurable)) &&
              (y = {
                enumerable: !0,
                get: function () {
                  return v[_];
                },
              }),
              Object.defineProperty(g, M, y);
          }
        : function (g, v, _, M) {
            M === void 0 && (M = _), (g[M] = v[_]);
          }),
      (R = function (g) {
        var v = typeof Symbol == "function" && Symbol.iterator,
          _ = v && g[v],
          M = 0;
        if (_) return _.call(g);
        if (g && typeof g.length == "number")
          return {
            next: function () {
              return (
                g && M >= g.length && (g = void 0),
                { value: g && g[M++], done: !g }
              );
            },
          };
        throw new TypeError(
          v ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }),
      (O = function (g, v) {
        var _ = typeof Symbol == "function" && g[Symbol.iterator];
        if (!_) return g;
        var M = _.call(g),
          y,
          l = [],
          S;
        try {
          for (; (v === void 0 || v-- > 0) && !(y = M.next()).done; )
            l.push(y.value);
        } catch (B) {
          S = { error: B };
        } finally {
          try {
            y && !y.done && (_ = M.return) && _.call(M);
          } finally {
            if (S) throw S.error;
          }
        }
        return l;
      }),
      ($ = function () {
        for (var g = [], v = 0; v < arguments.length; v++)
          g = g.concat(O(arguments[v]));
        return g;
      }),
      (I = function () {
        for (var g = 0, v = 0, _ = arguments.length; v < _; v++)
          g += arguments[v].length;
        for (var M = Array(g), y = 0, v = 0; v < _; v++)
          for (var l = arguments[v], S = 0, B = l.length; S < B; S++, y++)
            M[y] = l[S];
        return M;
      }),
      (k = function (g, v, _) {
        if (_ || arguments.length === 2)
          for (var M = 0, y = v.length, l; M < y; M++)
            (l || !(M in v)) &&
              (l || (l = Array.prototype.slice.call(v, 0, M)), (l[M] = v[M]));
        return g.concat(l || Array.prototype.slice.call(v));
      }),
      (N = function (g) {
        return this instanceof N ? ((this.v = g), this) : new N(g);
      }),
      (D = function (g, v, _) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var M = _.apply(g, v || []),
          y,
          l = [];
        return (
          (y = {}),
          S("next"),
          S("throw"),
          S("return"),
          (y[Symbol.asyncIterator] = function () {
            return this;
          }),
          y
        );
        function S(W) {
          M[W] &&
            (y[W] = function (ee) {
              return new Promise(function (x, C) {
                l.push([W, ee, x, C]) > 1 || B(W, ee);
              });
            });
        }
        function B(W, ee) {
          try {
            z(M[W](ee));
          } catch (x) {
            P(l[0][3], x);
          }
        }
        function z(W) {
          W.value instanceof N
            ? Promise.resolve(W.value.v).then(A, T)
            : P(l[0][2], W);
        }
        function A(W) {
          B("next", W);
        }
        function T(W) {
          B("throw", W);
        }
        function P(W, ee) {
          W(ee), l.shift(), l.length && B(l[0][0], l[0][1]);
        }
      }),
      (L = function (g) {
        var v, _;
        return (
          (v = {}),
          M("next"),
          M("throw", function (y) {
            throw y;
          }),
          M("return"),
          (v[Symbol.iterator] = function () {
            return this;
          }),
          v
        );
        function M(y, l) {
          v[y] = g[y]
            ? function (S) {
                return (_ = !_)
                  ? { value: N(g[y](S)), done: !1 }
                  : l
                  ? l(S)
                  : S;
              }
            : l;
        }
      }),
      (U = function (g) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var v = g[Symbol.asyncIterator],
          _;
        return v
          ? v.call(g)
          : ((g = typeof R == "function" ? R(g) : g[Symbol.iterator]()),
            (_ = {}),
            M("next"),
            M("throw"),
            M("return"),
            (_[Symbol.asyncIterator] = function () {
              return this;
            }),
            _);
        function M(l) {
          _[l] =
            g[l] &&
            function (S) {
              return new Promise(function (B, z) {
                (S = g[l](S)), y(B, z, S.done, S.value);
              });
            };
        }
        function y(l, S, B, z) {
          Promise.resolve(z).then(function (A) {
            l({ value: A, done: B });
          }, S);
        }
      }),
      (G = function (g, v) {
        return (
          Object.defineProperty
            ? Object.defineProperty(g, "raw", { value: v })
            : (g.raw = v),
          g
        );
      });
    var m = Object.create
      ? function (g, v) {
          Object.defineProperty(g, "default", { enumerable: !0, value: v });
        }
      : function (g, v) {
          g.default = v;
        };
    (q = function (g) {
      if (g && g.__esModule) return g;
      var v = {};
      if (g != null)
        for (var _ in g)
          _ !== "default" &&
            Object.prototype.hasOwnProperty.call(g, _) &&
            w(v, g, _);
      return m(v, g), v;
    }),
      (H = function (g) {
        return g && g.__esModule ? g : { default: g };
      }),
      (Y = function (g, v, _, M) {
        if (_ === "a" && !M)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof v == "function" ? g !== v || !M : !v.has(g))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return _ === "m" ? M : _ === "a" ? M.call(g) : M ? M.value : v.get(g);
      }),
      (Q = function (g, v, _, M, y) {
        if (M === "m") throw new TypeError("Private method is not writable");
        if (M === "a" && !y)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof v == "function" ? g !== v || !y : !v.has(g))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return M === "a" ? y.call(g, _) : y ? (y.value = _) : v.set(g, _), _;
      }),
      (K = function (g, v) {
        if (v === null || (typeof v != "object" && typeof v != "function"))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof g == "function" ? v === g : g.has(v);
      }),
      u("__extends", e),
      u("__assign", r),
      u("__rest", n),
      u("__decorate", i),
      u("__param", s),
      u("__esDecorate", o),
      u("__runInitializers", a),
      u("__propKey", c),
      u("__setFunctionName", f),
      u("__metadata", d),
      u("__awaiter", p),
      u("__generator", b),
      u("__exportStar", E),
      u("__createBinding", w),
      u("__values", R),
      u("__read", O),
      u("__spread", $),
      u("__spreadArrays", I),
      u("__spreadArray", k),
      u("__await", N),
      u("__asyncGenerator", D),
      u("__asyncDelegator", L),
      u("__asyncValues", U),
      u("__makeTemplateObject", G),
      u("__importStar", q),
      u("__importDefault", H),
      u("__classPrivateFieldGet", Y),
      u("__classPrivateFieldSet", Q),
      u("__classPrivateFieldIn", K);
  });
})(ES);
var Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
var Tf = es,
  xS = (function () {
    function t(e) {
      if (((this._maxConcurrency = e), (this._queue = []), e <= 0))
        throw new Error("semaphore must be initialized to a positive value");
      this._value = e;
    }
    return (
      (t.prototype.acquire = function () {
        var e = this,
          r = this.isLocked(),
          n = new Promise(function (i) {
            return e._queue.push(i);
          });
        return r || this._dispatch(), n;
      }),
      (t.prototype.runExclusive = function (e) {
        return Tf.__awaiter(this, void 0, void 0, function () {
          var r, n, i;
          return Tf.__generator(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, this.acquire()];
              case 1:
                (r = s.sent()), (n = r[0]), (i = r[1]), (s.label = 2);
              case 2:
                return s.trys.push([2, , 4, 5]), [4, e(n)];
              case 3:
                return [2, s.sent()];
              case 4:
                return i(), [7];
              case 5:
                return [2];
            }
          });
        });
      }),
      (t.prototype.isLocked = function () {
        return this._value <= 0;
      }),
      (t.prototype.release = function () {
        if (this._maxConcurrency > 1)
          throw new Error(
            "this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"
          );
        if (this._currentReleaser) {
          var e = this._currentReleaser;
          (this._currentReleaser = void 0), e();
        }
      }),
      (t.prototype._dispatch = function () {
        var e = this,
          r = this._queue.shift();
        if (r) {
          var n = !1;
          (this._currentReleaser = function () {
            n || ((n = !0), e._value++, e._dispatch());
          }),
            r([this._value--, this._currentReleaser]);
        }
      }),
      t
    );
  })();
Uo.default = xS;
Object.defineProperty(Ec, "__esModule", { value: !0 });
var Of = es,
  MS = Uo,
  CS = (function () {
    function t() {
      this._semaphore = new MS.default(1);
    }
    return (
      (t.prototype.acquire = function () {
        return Of.__awaiter(this, void 0, void 0, function () {
          var e, r;
          return Of.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this._semaphore.acquire()];
              case 1:
                return (e = n.sent()), (r = e[1]), [2, r];
            }
          });
        });
      }),
      (t.prototype.runExclusive = function (e) {
        return this._semaphore.runExclusive(function () {
          return e();
        });
      }),
      (t.prototype.isLocked = function () {
        return this._semaphore.isLocked();
      }),
      (t.prototype.release = function () {
        this._semaphore.release();
      }),
      t
    );
  })();
Ec.default = CS;
var zo = {};
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.withTimeout = void 0;
var Bs = es;
function RS(t, e, r) {
  var n = this;
  return (
    r === void 0 && (r = new Error("timeout")),
    {
      acquire: function () {
        return new Promise(function (i, s) {
          return Bs.__awaiter(n, void 0, void 0, function () {
            var o, a, c;
            return Bs.__generator(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (o = !1),
                    setTimeout(function () {
                      (o = !0), s(r);
                    }, e),
                    [4, t.acquire()]
                  );
                case 1:
                  return (
                    (a = f.sent()),
                    o ? ((c = Array.isArray(a) ? a[1] : a), c()) : i(a),
                    [2]
                  );
              }
            });
          });
        });
      },
      runExclusive: function (i) {
        return Bs.__awaiter(this, void 0, void 0, function () {
          var s, o;
          return Bs.__generator(this, function (a) {
            switch (a.label) {
              case 0:
                (s = function () {}), (a.label = 1);
              case 1:
                return a.trys.push([1, , 7, 8]), [4, this.acquire()];
              case 2:
                return (
                  (o = a.sent()),
                  Array.isArray(o) ? ((s = o[1]), [4, i(o[0])]) : [3, 4]
                );
              case 3:
                return [2, a.sent()];
              case 4:
                return (s = o), [4, i()];
              case 5:
                return [2, a.sent()];
              case 6:
                return [3, 8];
              case 7:
                return s(), [7];
              case 8:
                return [2];
            }
          });
        });
      },
      release: function () {
        t.release();
      },
      isLocked: function () {
        return t.isLocked();
      },
    }
  );
}
zo.withTimeout = RS;
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.withTimeout = t.Semaphore = t.Mutex = void 0);
  var e = Ec;
  Object.defineProperty(t, "Mutex", {
    enumerable: !0,
    get: function () {
      return e.default;
    },
  });
  var r = Uo;
  Object.defineProperty(t, "Semaphore", {
    enumerable: !0,
    get: function () {
      return r.default;
    },
  });
  var n = zo;
  Object.defineProperty(t, "withTimeout", {
    enumerable: !0,
    get: function () {
      return n.withTimeout;
    },
  });
})(gp);
var IS = kS,
  AS = Object.prototype.hasOwnProperty;
function kS() {
  for (var t = {}, e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r) AS.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
const TS = IS,
  OS = tc();
var NS = ie;
function ie(t) {
  const e = this;
  e.currentProvider = t;
}
ie.prototype.getBalance = _s(2, "eth_getBalance");
ie.prototype.getCode = _s(2, "eth_getCode");
ie.prototype.getTransactionCount = _s(2, "eth_getTransactionCount");
ie.prototype.getStorageAt = _s(3, "eth_getStorageAt");
ie.prototype.call = _s(2, "eth_call");
ie.prototype.protocolVersion = ce("eth_protocolVersion");
ie.prototype.syncing = ce("eth_syncing");
ie.prototype.coinbase = ce("eth_coinbase");
ie.prototype.mining = ce("eth_mining");
ie.prototype.hashrate = ce("eth_hashrate");
ie.prototype.gasPrice = ce("eth_gasPrice");
ie.prototype.accounts = ce("eth_accounts");
ie.prototype.blockNumber = ce("eth_blockNumber");
ie.prototype.getBlockTransactionCountByHash = ce(
  "eth_getBlockTransactionCountByHash"
);
ie.prototype.getBlockTransactionCountByNumber = ce(
  "eth_getBlockTransactionCountByNumber"
);
ie.prototype.getUncleCountByBlockHash = ce("eth_getUncleCountByBlockHash");
ie.prototype.getUncleCountByBlockNumber = ce("eth_getUncleCountByBlockNumber");
ie.prototype.sign = ce("eth_sign");
ie.prototype.sendTransaction = ce("eth_sendTransaction");
ie.prototype.sendRawTransaction = ce("eth_sendRawTransaction");
ie.prototype.estimateGas = ce("eth_estimateGas");
ie.prototype.getBlockByHash = ce("eth_getBlockByHash");
ie.prototype.getBlockByNumber = ce("eth_getBlockByNumber");
ie.prototype.getTransactionByHash = ce("eth_getTransactionByHash");
ie.prototype.getTransactionByBlockHashAndIndex = ce(
  "eth_getTransactionByBlockHashAndIndex"
);
ie.prototype.getTransactionByBlockNumberAndIndex = ce(
  "eth_getTransactionByBlockNumberAndIndex"
);
ie.prototype.getTransactionReceipt = ce("eth_getTransactionReceipt");
ie.prototype.getUncleByBlockHashAndIndex = ce(
  "eth_getUncleByBlockHashAndIndex"
);
ie.prototype.getUncleByBlockNumberAndIndex = ce(
  "eth_getUncleByBlockNumberAndIndex"
);
ie.prototype.getCompilers = ce("eth_getCompilers");
ie.prototype.compileLLL = ce("eth_compileLLL");
ie.prototype.compileSolidity = ce("eth_compileSolidity");
ie.prototype.compileSerpent = ce("eth_compileSerpent");
ie.prototype.newFilter = ce("eth_newFilter");
ie.prototype.newBlockFilter = ce("eth_newBlockFilter");
ie.prototype.newPendingTransactionFilter = ce(
  "eth_newPendingTransactionFilter"
);
ie.prototype.uninstallFilter = ce("eth_uninstallFilter");
ie.prototype.getFilterChanges = ce("eth_getFilterChanges");
ie.prototype.getFilterLogs = ce("eth_getFilterLogs");
ie.prototype.getLogs = ce("eth_getLogs");
ie.prototype.getWork = ce("eth_getWork");
ie.prototype.submitWork = ce("eth_submitWork");
ie.prototype.submitHashrate = ce("eth_submitHashrate");
ie.prototype.sendAsync = function (t, e) {
  this.currentProvider.sendAsync(LS(t), function (n, i) {
    if (
      (!n &&
        i.error &&
        (n = new Error("EthQuery - RPC Error - " + i.error.message)),
      n)
    )
      return e(n);
    e(null, i.result);
  });
};
function ce(t) {
  return function () {
    const e = this;
    var r = [].slice.call(arguments),
      n = r.pop();
    e.sendAsync({ method: t, params: r }, n);
  };
}
function _s(t, e) {
  return function () {
    const r = this;
    var n = [].slice.call(arguments),
      i = n.pop();
    n.length < t && n.push("latest"), r.sendAsync({ method: e, params: n }, i);
  };
}
function LS(t) {
  return TS({ id: OS(), jsonrpc: "2.0", params: [] }, t);
}
const Nf = (t, e, r, n) =>
    function (...i) {
      const s = e.promiseModule;
      return new s((o, a) => {
        e.multiArgs
          ? i.push((...f) => {
              e.errorFirst ? (f[0] ? a(f) : (f.shift(), o(f))) : o(f);
            })
          : e.errorFirst
          ? i.push((f, d) => {
              f ? a(f) : o(d);
            })
          : i.push(o),
          Reflect.apply(t, this === r ? n : this, i);
      });
    },
  Lf = new WeakMap();
var PS = (t, e) => {
  e = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...e,
  };
  const r = typeof t;
  if (!(t !== null && (r === "object" || r === "function")))
    throw new TypeError(
      `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
        t === null ? "null" : r
      }\``
    );
  const n = (o, a) => {
      let c = Lf.get(o);
      if ((c || ((c = {}), Lf.set(o, c)), a in c)) return c[a];
      const f = (R) =>
          typeof R == "string" || typeof a == "symbol" ? a === R : R.test(a),
        d = Reflect.getOwnPropertyDescriptor(o, a),
        p = d === void 0 || d.writable || d.configurable,
        E = (e.include ? e.include.some(f) : !e.exclude.some(f)) && p;
      return (c[a] = E), E;
    },
    i = new WeakMap(),
    s = new Proxy(t, {
      apply(o, a, c) {
        const f = i.get(o);
        if (f) return Reflect.apply(f, a, c);
        const d = e.excludeMain ? o : Nf(o, e, s, o);
        return i.set(o, d), Reflect.apply(d, a, c);
      },
      get(o, a) {
        const c = o[a];
        if (!n(o, a) || c === Function.prototype[a]) return c;
        const f = i.get(c);
        if (f) return f;
        if (typeof c == "function") {
          const d = Nf(c, e, s, o);
          return i.set(c, d), d;
        }
        return c;
      },
    });
  return s;
};
const $S = wn.default;
let DS = class extends $S {
  constructor() {
    super(), (this.updates = []);
  }
  async initialize() {}
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(e) {
    (this.updates = this.updates.concat(e)),
      e.forEach((r) => this.emit("update", r));
  }
  addInitialResults(e) {}
  getChangesAndClear() {
    const e = this.updates;
    return (this.updates = []), e;
  }
};
var xc = DS;
const jS = xc;
let BS = class extends jS {
  constructor() {
    super(), (this.allResults = []);
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(e) {
    (this.allResults = this.allResults.concat(e)), super.addResults(e);
  }
  addInitialResults(e) {
    (this.allResults = this.allResults.concat(e)), super.addInitialResults(e);
  }
  getAllResults() {
    return this.allResults;
  }
};
var FS = BS,
  ws = {
    minBlockRef: HS,
    maxBlockRef: WS,
    sortBlockRefs: Mc,
    bnToHex: VS,
    blockRefIsNumber: US,
    hexToInt: so,
    incrementHexInt: zS,
    intToHex: vp,
    unsafeRandomBytes: qS,
  };
function HS(...t) {
  return Mc(t)[0];
}
function WS(...t) {
  const e = Mc(t);
  return e[e.length - 1];
}
function Mc(t) {
  return t.sort((e, r) =>
    e === "latest" || r === "earliest"
      ? 1
      : r === "latest" || e === "earliest"
      ? -1
      : so(e) - so(r)
  );
}
function VS(t) {
  return "0x" + t.toString(16);
}
function US(t) {
  return t && !["earliest", "latest", "pending"].includes(t);
}
function so(t) {
  return t == null ? t : Number.parseInt(t, 16);
}
function zS(t) {
  if (t == null) return t;
  const e = so(t);
  return vp(e + 1);
}
function vp(t) {
  if (t == null) return t;
  let e = t.toString(16);
  return e.length % 2 && (e = "0" + e), "0x" + e;
}
function qS(t) {
  let e = "0x";
  for (let r = 0; r < t; r++) (e += Pf()), (e += Pf());
  return e;
}
function Pf() {
  return Math.floor(Math.random() * 16).toString(16);
}
const GS = NS,
  JS = PS,
  ZS = FS,
  {
    bnToHex: y6,
    hexToInt: Fs,
    incrementHexInt: QS,
    minBlockRef: YS,
    blockRefIsNumber: KS,
  } = ws;
let XS = class extends ZS {
  constructor({ provider: e, params: r }) {
    super(),
      (this.type = "log"),
      (this.ethQuery = new GS(e)),
      (this.params = Object.assign(
        { fromBlock: "latest", toBlock: "latest", address: void 0, topics: [] },
        r
      )),
      this.params.address &&
        (Array.isArray(this.params.address) ||
          (this.params.address = [this.params.address]),
        (this.params.address = this.params.address.map((n) =>
          n.toLowerCase()
        )));
  }
  async initialize({ currentBlock: e }) {
    let r = this.params.fromBlock;
    ["latest", "pending"].includes(r) && (r = e),
      r === "earliest" && (r = "0x0"),
      (this.params.fromBlock = r);
    const n = YS(this.params.toBlock, e),
      i = Object.assign({}, this.params, { toBlock: n }),
      s = await this._fetchLogs(i);
    this.addInitialResults(s);
  }
  async update({ oldBlock: e, newBlock: r }) {
    const n = r;
    let i;
    e ? (i = QS(e)) : (i = r);
    const s = Object.assign({}, this.params, { fromBlock: i, toBlock: n }),
      a = (await this._fetchLogs(s)).filter((c) => this.matchLog(c));
    this.addResults(a);
  }
  async _fetchLogs(e) {
    return await JS((n) => this.ethQuery.getLogs(e, n))();
  }
  matchLog(e) {
    if (
      Fs(this.params.fromBlock) >= Fs(e.blockNumber) ||
      (KS(this.params.toBlock) && Fs(this.params.toBlock) <= Fs(e.blockNumber))
    )
      return !1;
    const r = e.address && e.address.toLowerCase();
    return this.params.address && r && !this.params.address.includes(r)
      ? !1
      : this.params.topics.every((i, s) => {
          let o = e.topics[s];
          if (!o) return !1;
          o = o.toLowerCase();
          let a = Array.isArray(i) ? i : [i];
          return a.includes(null)
            ? !0
            : ((a = a.map((d) => d.toLowerCase())), a.includes(o));
        });
  }
};
var eE = XS,
  Cc = tE;
async function tE({ provider: t, fromBlock: e, toBlock: r }) {
  e || (e = r);
  const n = $f(e),
    s = $f(r) - n + 1,
    o = Array(s)
      .fill()
      .map((c, f) => n + f)
      .map(rE);
  return await Promise.all(
    o.map((c) => iE(t, "eth_getBlockByNumber", [c, !1]))
  );
}
function $f(t) {
  return t == null ? t : Number.parseInt(t, 16);
}
function rE(t) {
  return t == null ? t : "0x" + t.toString(16);
}
function nE(t, e) {
  return new Promise((r, n) => {
    t.sendAsync(e, (i, s) => {
      i
        ? n(i)
        : s.error
        ? n(s.error)
        : s.result
        ? r(s.result)
        : n(new Error("Result was empty"));
    });
  });
}
async function iE(t, e, r) {
  for (let n = 0; n < 3; n++)
    try {
      return await nE(t, { id: 1, jsonrpc: "2.0", method: e, params: r });
    } catch (i) {
      console.error(`provider.sendAsync failed: ${i.stack || i.message || i}`);
    }
  throw new Error(`Block not found for params: ${JSON.stringify(r)}`);
}
const sE = xc,
  oE = Cc,
  { incrementHexInt: aE } = ws;
let uE = class extends sE {
  constructor({ provider: e, params: r }) {
    super(), (this.type = "block"), (this.provider = e);
  }
  async update({ oldBlock: e, newBlock: r }) {
    const n = r,
      i = aE(e),
      o = (await oE({ provider: this.provider, fromBlock: i, toBlock: n })).map(
        (a) => a.hash
      );
    this.addResults(o);
  }
};
var cE = uE;
const lE = xc,
  fE = Cc,
  { incrementHexInt: hE } = ws;
let dE = class extends lE {
  constructor({ provider: e }) {
    super(), (this.type = "tx"), (this.provider = e);
  }
  async update({ oldBlock: e }) {
    const r = e,
      n = hE(e),
      i = await fE({ provider: this.provider, fromBlock: n, toBlock: r }),
      s = [];
    for (const o of i) s.push(...o.transactions);
    this.addResults(s);
  }
};
var pE = dE;
const gE = gp.Mutex,
  { createAsyncMiddleware: vE, createScaffoldMiddleware: bE } = _c,
  yE = eE,
  mE = cE,
  _E = pE,
  { intToHex: bp, hexToInt: ru } = ws;
var wE = SE;
function SE({ blockTracker: t, provider: e }) {
  let r = 0,
    n = {};
  const i = new gE(),
    s = EE({ mutex: i }),
    o = bE({
      eth_newFilter: s(nu(c)),
      eth_newBlockFilter: s(nu(f)),
      eth_newPendingTransactionFilter: s(nu(d)),
      eth_uninstallFilter: s(Gs(E)),
      eth_getFilterChanges: s(Gs(p)),
      eth_getFilterLogs: s(Gs(b)),
    }),
    a = async ({ oldBlock: k, newBlock: N }) => {
      if (n.length === 0) return;
      const D = await i.acquire();
      try {
        await Promise.all(
          Vn(n).map(async (L) => {
            try {
              await L.update({ oldBlock: k, newBlock: N });
            } catch (U) {
              console.error(U);
            }
          })
        );
      } catch (L) {
        console.error(L);
      }
      D();
    };
  return (
    (o.newLogFilter = c),
    (o.newBlockFilter = f),
    (o.newPendingTransactionFilter = d),
    (o.uninstallFilter = E),
    (o.getFilterChanges = p),
    (o.getFilterLogs = b),
    (o.destroy = () => {
      $();
    }),
    o
  );
  async function c(k) {
    const N = new yE({ provider: e, params: k });
    return await R(N), N;
  }
  async function f() {
    const k = new mE({ provider: e });
    return await R(k), k;
  }
  async function d() {
    const k = new _E({ provider: e });
    return await R(k), k;
  }
  async function p(k) {
    const N = ru(k),
      D = n[N];
    if (!D) throw new Error(`No filter for index "${N}"`);
    return D.getChangesAndClear();
  }
  async function b(k) {
    const N = ru(k),
      D = n[N];
    if (!D) throw new Error(`No filter for index "${N}"`);
    let L = [];
    return D.type === "log" && (L = D.getAllResults()), L;
  }
  async function E(k) {
    const N = ru(k),
      D = n[N],
      L = Boolean(D);
    return L && (await O(N)), L;
  }
  async function R(k) {
    const N = Vn(n).length,
      D = await t.getLatestBlock();
    await k.initialize({ currentBlock: D }),
      r++,
      (n[r] = k),
      (k.id = r),
      (k.idHex = bp(r));
    const L = Vn(n).length;
    return I({ prevFilterCount: N, newFilterCount: L }), r;
  }
  async function O(k) {
    const N = Vn(n).length;
    delete n[k];
    const D = Vn(n).length;
    I({ prevFilterCount: N, newFilterCount: D });
  }
  async function $() {
    const k = Vn(n).length;
    (n = {}), I({ prevFilterCount: k, newFilterCount: 0 });
  }
  function I({ prevFilterCount: k, newFilterCount: N }) {
    if (k === 0 && N > 0) {
      t.on("sync", a);
      return;
    }
    if (k > 0 && N === 0) {
      t.removeListener("sync", a);
      return;
    }
  }
}
function nu(t) {
  return Gs(async (...e) => {
    const r = await t(...e);
    return bp(r.id);
  });
}
function Gs(t) {
  return vE(async (e, r) => {
    const n = await t.apply(null, e.params);
    r.result = n;
  });
}
function EE({ mutex: t }) {
  return (e) => async (r, n, i, s) => {
    (await t.acquire())(), e(r, n, i, s);
  };
}
function Vn(t, e) {
  const r = [];
  for (let n in t) r.push(t[n]);
  return r;
}
const xE = wn.default,
  { createAsyncMiddleware: Df, createScaffoldMiddleware: ME } = _c,
  CE = wE,
  { unsafeRandomBytes: RE, incrementHexInt: IE } = ws,
  AE = Cc;
var kE = TE;
function TE({ blockTracker: t, provider: e }) {
  const r = {},
    n = CE({ blockTracker: t, provider: e });
  let i = !1;
  const s = new xE(),
    o = ME({ eth_subscribe: Df(a), eth_unsubscribe: Df(c) });
  return (o.destroy = d), { events: s, middleware: o };
  async function a(p, b) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const E = p.params[0],
      R = RE(16);
    let O;
    switch (E) {
      case "newHeads":
        O = $({ subId: R });
        break;
      case "logs":
        const k = p.params[1],
          N = await n.newLogFilter(k);
        O = I({ subId: R, filter: N });
        break;
      default:
        throw new Error(
          `SubscriptionManager - unsupported subscription type "${E}"`
        );
    }
    (r[R] = O), (b.result = R);
    return;
    function $({ subId: k }) {
      const N = {
        type: E,
        destroy: async () => {
          t.removeListener("sync", N.update);
        },
        update: async ({ oldBlock: D, newBlock: L }) => {
          const U = L,
            G = IE(D);
          (await AE({ provider: e, fromBlock: G, toBlock: U }))
            .map(OE)
            .filter((Y) => Y !== null)
            .forEach((Y) => {
              f(k, Y);
            });
        },
      };
      return t.on("sync", N.update), N;
    }
    function I({ subId: k, filter: N }) {
      return (
        N.on("update", (L) => f(k, L)),
        { type: E, destroy: async () => await n.uninstallFilter(N.idHex) }
      );
    }
  }
  async function c(p, b) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const E = p.params[0],
      R = r[E];
    if (!R) {
      b.result = !1;
      return;
    }
    delete r[E], await R.destroy(), (b.result = !0);
  }
  function f(p, b) {
    s.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: { subscription: p, result: b },
    });
  }
  function d() {
    s.removeAllListeners();
    for (const p in r) r[p].destroy(), delete r[p];
    i = !0;
  }
}
function OE(t) {
  return t == null
    ? null
    : {
        hash: t.hash,
        parentHash: t.parentHash,
        sha3Uncles: t.sha3Uncles,
        miner: t.miner,
        stateRoot: t.stateRoot,
        transactionsRoot: t.transactionsRoot,
        receiptsRoot: t.receiptsRoot,
        logsBloom: t.logsBloom,
        difficulty: t.difficulty,
        number: t.number,
        gasLimit: t.gasLimit,
        gasUsed: t.gasUsed,
        nonce: t.nonce,
        mixHash: t.mixHash,
        timestamp: t.timestamp,
        extraData: t.extraData,
      };
}
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.SubscriptionManager = void 0;
const NE = Ad,
  LE = kE,
  jf = () => {};
class PE {
  constructor(e) {
    const r = new NE.PollingBlockTracker({
        provider: e,
        pollingInterval: 15e3,
        setSkipCacheFlag: !0,
      }),
      { events: n, middleware: i } = LE({ blockTracker: r, provider: e });
    (this.events = n), (this.subscriptionMiddleware = i);
  }
  async handleRequest(e) {
    const r = {};
    return await this.subscriptionMiddleware(e, r, jf, jf), r;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
Io.SubscriptionManager = PE;
var Rc =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.CoinbaseWalletProvider = void 0;
const $E = Rc(wn),
  DE = Rc(ii),
  iu = _i,
  _e = ss,
  Bf = Si,
  Ff = Jt,
  su = _o,
  jE = Ee,
  ae = Z,
  ou = Rc(gm),
  BE = ci,
  ve = Id,
  FE = Io,
  Hf = "DefaultChainId",
  Wf = "DefaultJsonRpcUrl";
class HE extends $E.default {
  constructor(e) {
    var r, n;
    super(),
      (this._filterPolyfill = new BE.FilterPolyfill(this)),
      (this._subscriptionManager = new FE.SubscriptionManager(this)),
      (this._relay = null),
      (this._addresses = []),
      (this.hasMadeFirstChainChangedEmission = !1),
      (this.setProviderInfo = this.setProviderInfo.bind(this)),
      (this.updateProviderInfo = this.updateProviderInfo.bind(this)),
      (this.getChainId = this.getChainId.bind(this)),
      (this.setAppInfo = this.setAppInfo.bind(this)),
      (this.enable = this.enable.bind(this)),
      (this.close = this.close.bind(this)),
      (this.send = this.send.bind(this)),
      (this.sendAsync = this.sendAsync.bind(this)),
      (this.request = this.request.bind(this)),
      (this._setAddresses = this._setAddresses.bind(this)),
      (this.scanQRCode = this.scanQRCode.bind(this)),
      (this.genericRequest = this.genericRequest.bind(this)),
      (this._chainIdFromOpts = e.chainId),
      (this._jsonRpcUrlFromOpts = e.jsonRpcUrl),
      (this._overrideIsMetaMask = e.overrideIsMetaMask),
      (this._relayProvider = e.relayProvider),
      (this._storage = e.storage),
      (this._relayEventManager = e.relayEventManager),
      (this.diagnostic = e.diagnosticLogger),
      (this.reloadOnDisconnect = !0),
      (this.isCoinbaseWallet =
        (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0),
      (this.isCoinbaseBrowser =
        (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1),
      (this.qrUrl = e.qrUrl);
    const i = this.getChainId(),
      s = (0, ae.prepend0x)(i.toString(16));
    this.emit("connect", { chainIdStr: s });
    const o = this._storage.getItem(Ff.LOCAL_STORAGE_ADDRESSES_KEY);
    if (o) {
      const a = o.split(" ");
      a[0] !== "" &&
        ((this._addresses = a.map((c) => (0, ae.ensureAddressString)(c))),
        this.emit("accountsChanged", a));
    }
    this._subscriptionManager.events.on("notification", (a) => {
      this.emit("message", { type: a.method, data: a.params });
    }),
      this._isAuthorized() && this.initializeRelay(),
      window.addEventListener("message", (a) => {
        var c;
        if (
          !(a.origin !== location.origin || a.source !== window) &&
          a.data.type === "walletLinkMessage"
        ) {
          if (a.data.data.action === "dappChainSwitched") {
            const f = a.data.data.chainId,
              d =
                (c = a.data.data.jsonRpcUrl) !== null && c !== void 0
                  ? c
                  : this.jsonRpcUrl;
            this.updateProviderInfo(d, Number(f));
          }
          a.data.data.action === "addressChanged" &&
            this._setAddresses([a.data.data.address]);
        }
      });
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  get chainId() {
    return (0, ae.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var e;
    return (e = this._storage.getItem(Wf)) !== null && e !== void 0
      ? e
      : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(e) {
    this._storage.setItem(Wf, e);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(e, r) {
    this.isCoinbaseBrowser ||
      ((this._chainIdFromOpts = r), (this._jsonRpcUrlFromOpts = e)),
      this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(e, r) {
    this.jsonRpcUrl = e;
    const n = this.getChainId();
    this._storage.setItem(Hf, r.toString(10)),
      ((0, ae.ensureIntNumber)(r) !== n ||
        !this.hasMadeFirstChainChangedEmission) &&
        (this.emit("chainChanged", this.getChainId()),
        (this.hasMadeFirstChainChangedEmission = !0));
  }
  async watchAsset(e, r, n, i, s, o) {
    return !!(
      await (
        await this.initializeRelay()
      ).watchAsset(e, r, n, i, s, o == null ? void 0 : o.toString()).promise
    ).result;
  }
  async addEthereumChain(e, r, n, i, s, o) {
    var a, c;
    if ((0, ae.ensureIntNumber)(e) === this.getChainId()) return !1;
    const f = await this.initializeRelay(),
      d = f.inlineAddEthereumChain(e.toString());
    !this._isAuthorized() && !d && (await f.requestEthereumAccounts().promise);
    const p = await f.addEthereumChain(e.toString(), r, s, n, i, o).promise;
    return (
      ((a = p.result) === null || a === void 0 ? void 0 : a.isApproved) ===
        !0 && this.updateProviderInfo(r[0], e),
      ((c = p.result) === null || c === void 0 ? void 0 : c.isApproved) === !0
    );
  }
  async switchEthereumChain(e) {
    const n = await (
      await this.initializeRelay()
    ).switchEthereumChain(e.toString(10), this.selectedAddress || void 0)
      .promise;
    if ((0, jE.isErrorResponse)(n) && n.errorCode)
      throw n.errorCode === _e.standardErrorCodes.provider.unsupportedChain
        ? _e.standardErrors.provider.unsupportedChain(e)
        : _e.standardErrors.provider.custom({
            message: n.errorMessage,
            code: n.errorCode,
          });
    const i = n.result;
    i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, e);
  }
  setAppInfo(e, r) {
    this.initializeRelay().then((n) => n.setAppInfo(e, r));
  }
  async enable() {
    var e;
    return (
      (e = this.diagnostic) === null ||
        e === void 0 ||
        e.log(iu.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::enable",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay
            ? Bf.Session.hash(this._relay.session.id)
            : void 0,
        }),
      this._isAuthorized()
        ? [...this._addresses]
        : await this.send(ve.JSONRPCMethod.eth_requestAccounts)
    );
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(e, r) {
    try {
      const n = this._send(e, r);
      if (n instanceof Promise)
        return n.catch((i) => {
          throw (0, _e.serializeError)(i, e);
        });
    } catch (n) {
      throw (0, _e.serializeError)(n, e);
    }
  }
  _send(e, r) {
    if (typeof e == "string") {
      const i = e,
        s = Array.isArray(r) ? r : r !== void 0 ? [r] : [],
        o = { jsonrpc: "2.0", id: 0, method: i, params: s };
      return this._sendRequestAsync(o).then((a) => a.result);
    }
    if (typeof r == "function") {
      const i = e,
        s = r;
      return this._sendAsync(i, s);
    }
    if (Array.isArray(e)) return e.map((s) => this._sendRequest(s));
    const n = e;
    return this._sendRequest(n);
  }
  async sendAsync(e, r) {
    try {
      return this._sendAsync(e, r).catch((n) => {
        throw (0, _e.serializeError)(n, e);
      });
    } catch (n) {
      return Promise.reject((0, _e.serializeError)(n, e));
    }
  }
  async _sendAsync(e, r) {
    if (typeof r != "function") throw new Error("callback is required");
    if (Array.isArray(e)) {
      const i = r;
      this._sendMultipleRequestsAsync(e)
        .then((s) => i(null, s))
        .catch((s) => i(s, null));
      return;
    }
    const n = r;
    return this._sendRequestAsync(e)
      .then((i) => n(null, i))
      .catch((i) => n(i, null));
  }
  async request(e) {
    try {
      return this._request(e).catch((r) => {
        throw (0, _e.serializeError)(r, e.method);
      });
    } catch (r) {
      return Promise.reject((0, _e.serializeError)(r, e.method));
    }
  }
  async _request(e) {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw _e.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: e,
      });
    const { method: r, params: n } = e;
    if (typeof r != "string" || r.length === 0)
      throw _e.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: e,
      });
    if (
      n !== void 0 &&
      !Array.isArray(n) &&
      (typeof n != "object" || n === null)
    )
      throw _e.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: e,
      });
    const i = n === void 0 ? [] : n,
      s = this._relayEventManager.makeRequestId();
    return (
      await this._sendRequestAsync({
        method: r,
        params: i,
        jsonrpc: "2.0",
        id: s,
      })
    ).result;
  }
  async scanQRCode(e) {
    var r;
    const i = await (
      await this.initializeRelay()
    ).scanQRCode((0, ae.ensureRegExpString)(e)).promise;
    if (typeof i.result != "string")
      throw (0, _e.serializeError)(
        (r = i.errorMessage) !== null && r !== void 0
          ? r
          : "result was not a string",
        su.Web3Method.scanQRCode
      );
    return i.result;
  }
  async genericRequest(e, r) {
    var n;
    const s = await (await this.initializeRelay()).genericRequest(e, r).promise;
    if (typeof s.result != "string")
      throw (0, _e.serializeError)(
        (n = s.errorMessage) !== null && n !== void 0
          ? n
          : "result was not a string",
        su.Web3Method.generic
      );
    return s.result;
  }
  async selectProvider(e) {
    var r;
    const i = await (await this.initializeRelay()).selectProvider(e).promise;
    if (typeof i.result != "string")
      throw (0, _e.serializeError)(
        (r = i.errorMessage) !== null && r !== void 0
          ? r
          : "result was not a string",
        su.Web3Method.selectProvider
      );
    return i.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(e) {
    const r = { jsonrpc: "2.0", id: e.id },
      { method: n } = e;
    if (((r.result = this._handleSynchronousMethods(e)), r.result === void 0))
      throw new Error(
        `Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`
      );
    return r;
  }
  _setAddresses(e, r) {
    if (!Array.isArray(e)) throw new Error("addresses is not an array");
    const n = e.map((i) => (0, ae.ensureAddressString)(i));
    JSON.stringify(n) !== JSON.stringify(this._addresses) &&
      ((this._addresses = n),
      this.emit("accountsChanged", this._addresses),
      this._storage.setItem(Ff.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
  }
  _sendRequestAsync(e) {
    return new Promise((r, n) => {
      try {
        const i = this._handleSynchronousMethods(e);
        if (i !== void 0) return r({ jsonrpc: "2.0", id: e.id, result: i });
        const s = this._handleAsynchronousFilterMethods(e);
        if (s !== void 0) {
          s.then((a) =>
            r(Object.assign(Object.assign({}, a), { id: e.id }))
          ).catch((a) => n(a));
          return;
        }
        const o = this._handleSubscriptionMethods(e);
        if (o !== void 0) {
          o.then((a) =>
            r({ jsonrpc: "2.0", id: e.id, result: a.result })
          ).catch((a) => n(a));
          return;
        }
      } catch (i) {
        return n(i);
      }
      this._handleAsynchronousMethods(e)
        .then((i) => i && r(Object.assign(Object.assign({}, i), { id: e.id })))
        .catch((i) => n(i));
    });
  }
  _sendMultipleRequestsAsync(e) {
    return Promise.all(e.map((r) => this._sendRequestAsync(r)));
  }
  _handleSynchronousMethods(e) {
    const { method: r } = e,
      n = e.params || [];
    switch (r) {
      case ve.JSONRPCMethod.eth_accounts:
        return this._eth_accounts();
      case ve.JSONRPCMethod.eth_coinbase:
        return this._eth_coinbase();
      case ve.JSONRPCMethod.eth_uninstallFilter:
        return this._eth_uninstallFilter(n);
      case ve.JSONRPCMethod.net_version:
        return this._net_version();
      case ve.JSONRPCMethod.eth_chainId:
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(e) {
    const { method: r } = e,
      n = e.params || [];
    switch (r) {
      case ve.JSONRPCMethod.eth_requestAccounts:
        return this._eth_requestAccounts();
      case ve.JSONRPCMethod.eth_sign:
        return this._eth_sign(n);
      case ve.JSONRPCMethod.eth_ecRecover:
        return this._eth_ecRecover(n);
      case ve.JSONRPCMethod.personal_sign:
        return this._personal_sign(n);
      case ve.JSONRPCMethod.personal_ecRecover:
        return this._personal_ecRecover(n);
      case ve.JSONRPCMethod.eth_signTransaction:
        return this._eth_signTransaction(n);
      case ve.JSONRPCMethod.eth_sendRawTransaction:
        return this._eth_sendRawTransaction(n);
      case ve.JSONRPCMethod.eth_sendTransaction:
        return this._eth_sendTransaction(n);
      case ve.JSONRPCMethod.eth_signTypedData_v1:
        return this._eth_signTypedData_v1(n);
      case ve.JSONRPCMethod.eth_signTypedData_v2:
        return this._throwUnsupportedMethodError();
      case ve.JSONRPCMethod.eth_signTypedData_v3:
        return this._eth_signTypedData_v3(n);
      case ve.JSONRPCMethod.eth_signTypedData_v4:
      case ve.JSONRPCMethod.eth_signTypedData:
        return this._eth_signTypedData_v4(n);
      case ve.JSONRPCMethod.cbWallet_arbitrary:
        return this._cbwallet_arbitrary(n);
      case ve.JSONRPCMethod.wallet_addEthereumChain:
        return this._wallet_addEthereumChain(n);
      case ve.JSONRPCMethod.wallet_switchEthereumChain:
        return this._wallet_switchEthereumChain(n);
      case ve.JSONRPCMethod.wallet_watchAsset:
        return this._wallet_watchAsset(n);
    }
    return (await this.initializeRelay()).makeEthereumJSONRPCRequest(
      e,
      this.jsonRpcUrl
    );
  }
  _handleAsynchronousFilterMethods(e) {
    const { method: r } = e,
      n = e.params || [];
    switch (r) {
      case ve.JSONRPCMethod.eth_newFilter:
        return this._eth_newFilter(n);
      case ve.JSONRPCMethod.eth_newBlockFilter:
        return this._eth_newBlockFilter();
      case ve.JSONRPCMethod.eth_newPendingTransactionFilter:
        return this._eth_newPendingTransactionFilter();
      case ve.JSONRPCMethod.eth_getFilterChanges:
        return this._eth_getFilterChanges(n);
      case ve.JSONRPCMethod.eth_getFilterLogs:
        return this._eth_getFilterLogs(n);
    }
  }
  _handleSubscriptionMethods(e) {
    switch (e.method) {
      case ve.JSONRPCMethod.eth_subscribe:
      case ve.JSONRPCMethod.eth_unsubscribe:
        return this._subscriptionManager.handleRequest(e);
    }
  }
  _isKnownAddress(e) {
    try {
      const r = (0, ae.ensureAddressString)(e);
      return this._addresses
        .map((i) => (0, ae.ensureAddressString)(i))
        .includes(r);
    } catch {}
    return !1;
  }
  _ensureKnownAddress(e) {
    var r;
    if (!this._isKnownAddress(e))
      throw (
        ((r = this.diagnostic) === null ||
          r === void 0 ||
          r.log(iu.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
        new Error("Unknown Ethereum address"))
      );
  }
  _prepareTransactionParams(e) {
    const r = e.from
      ? (0, ae.ensureAddressString)(e.from)
      : this.selectedAddress;
    if (!r) throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(r);
    const n = e.to ? (0, ae.ensureAddressString)(e.to) : null,
      i = e.value != null ? (0, ae.ensureBN)(e.value) : new DE.default(0),
      s = e.data ? (0, ae.ensureBuffer)(e.data) : Buffer.alloc(0),
      o = e.nonce != null ? (0, ae.ensureIntNumber)(e.nonce) : null,
      a = e.gasPrice != null ? (0, ae.ensureBN)(e.gasPrice) : null,
      c = e.maxFeePerGas != null ? (0, ae.ensureBN)(e.maxFeePerGas) : null,
      f =
        e.maxPriorityFeePerGas != null
          ? (0, ae.ensureBN)(e.maxPriorityFeePerGas)
          : null,
      d = e.gas != null ? (0, ae.ensureBN)(e.gas) : null,
      p = this.getChainId();
    return {
      fromAddress: r,
      toAddress: n,
      weiValue: i,
      data: s,
      nonce: o,
      gasPriceInWei: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: f,
      gasLimit: d,
      chainId: p,
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw _e.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw _e.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(e, r, n, i) {
    this._ensureKnownAddress(r);
    try {
      return {
        jsonrpc: "2.0",
        id: 0,
        result: (
          await (await this.initializeRelay()).signEthereumMessage(e, r, n, i)
            .promise
        ).result,
      };
    } catch (s) {
      throw typeof s.message == "string" &&
        s.message.match(/(denied|rejected)/i)
        ? _e.standardErrors.provider.userRejectedRequest(
            "User denied message signature"
          )
        : s;
    }
  }
  async _ethereumAddressFromSignedMessage(e, r, n) {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: (
        await (
          await this.initializeRelay()
        ).ethereumAddressFromSignedMessage(e, r, n).promise
      ).result,
    };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, ae.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const e = this._storage.getItem(Hf);
    if (!e) return (0, ae.ensureIntNumber)(this._chainIdFromOpts);
    const r = parseInt(e, 10);
    return (0, ae.ensureIntNumber)(r);
  }
  async _eth_requestAccounts() {
    var e;
    if (
      ((e = this.diagnostic) === null ||
        e === void 0 ||
        e.log(iu.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::_eth_requestAccounts",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay
            ? Bf.Session.hash(this._relay.session.id)
            : void 0,
        }),
      this._isAuthorized())
    )
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses,
      });
    let r;
    try {
      r = await (await this.initializeRelay()).requestEthereumAccounts()
        .promise;
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? _e.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          )
        : n;
    }
    if (!r.result) throw new Error("accounts received is empty");
    return (
      this._setAddresses(r.result),
      this.isCoinbaseBrowser ||
        (await this.switchEthereumChain(this.getChainId())),
      { jsonrpc: "2.0", id: 0, result: this._addresses }
    );
  }
  _eth_sign(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureAddressString)(e[0]),
      n = (0, ae.ensureBuffer)(e[1]);
    return this._signEthereumMessage(n, r, !1);
  }
  _eth_ecRecover(e) {
    const r = (0, ae.ensureBuffer)(e[0]),
      n = (0, ae.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !1);
  }
  _personal_sign(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureBuffer)(e[0]),
      n = (0, ae.ensureAddressString)(e[1]);
    return this._signEthereumMessage(r, n, !0);
  }
  _personal_ecRecover(e) {
    const r = (0, ae.ensureBuffer)(e[0]),
      n = (0, ae.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !0);
  }
  async _eth_signTransaction(e) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(e[0] || {});
    try {
      return {
        jsonrpc: "2.0",
        id: 0,
        result: (
          await (await this.initializeRelay()).signEthereumTransaction(r)
            .promise
        ).result,
      };
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? _e.standardErrors.provider.userRejectedRequest(
            "User denied transaction signature"
          )
        : n;
    }
  }
  async _eth_sendRawTransaction(e) {
    const r = (0, ae.ensureBuffer)(e[0]);
    return {
      jsonrpc: "2.0",
      id: 0,
      result: (
        await (
          await this.initializeRelay()
        ).submitEthereumTransaction(r, this.getChainId()).promise
      ).result,
    };
  }
  async _eth_sendTransaction(e) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(e[0] || {});
    try {
      return {
        jsonrpc: "2.0",
        id: 0,
        result: (
          await (
            await this.initializeRelay()
          ).signAndSubmitEthereumTransaction(r).promise
        ).result,
      };
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? _e.standardErrors.provider.userRejectedRequest(
            "User denied transaction signature"
          )
        : n;
    }
  }
  async _eth_signTypedData_v1(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureParsedJSONObject)(e[0]),
      n = (0, ae.ensureAddressString)(e[1]);
    this._ensureKnownAddress(n);
    const i = ou.default.hashForSignTypedDataLegacy({ data: r }),
      s = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(i, n, !1, s);
  }
  async _eth_signTypedData_v3(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureAddressString)(e[0]),
      n = (0, ae.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(r);
    const i = ou.default.hashForSignTypedData_v3({ data: n }),
      s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _eth_signTypedData_v4(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureAddressString)(e[0]),
      n = (0, ae.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(r);
    const i = ou.default.hashForSignTypedData_v4({ data: n }),
      s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _cbwallet_arbitrary(e) {
    const r = e[0],
      n = e[1];
    if (typeof n != "string") throw new Error("parameter must be a string");
    if (typeof r != "object" || r === null)
      throw new Error("parameter must be an object");
    return { jsonrpc: "2.0", id: 0, result: await this.genericRequest(r, n) };
  }
  async _wallet_addEthereumChain(e) {
    var r, n, i, s;
    const o = e[0];
    if (((r = o.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" },
      };
    if (!o.chainName || o.chainName.trim() === "")
      throw _e.standardErrors.rpc.invalidParams(
        "chainName is a required field"
      );
    if (!o.nativeCurrency)
      throw _e.standardErrors.rpc.invalidParams(
        "nativeCurrency is a required field"
      );
    const a = parseInt(o.chainId, 16);
    return (await this.addEthereumChain(
      a,
      (n = o.rpcUrls) !== null && n !== void 0 ? n : [],
      (i = o.blockExplorerUrls) !== null && i !== void 0 ? i : [],
      o.chainName,
      (s = o.iconUrls) !== null && s !== void 0 ? s : [],
      o.nativeCurrency
    ))
      ? { jsonrpc: "2.0", id: 0, result: null }
      : {
          jsonrpc: "2.0",
          id: 0,
          error: { code: 2, message: "unable to add ethereum chain" },
        };
  }
  async _wallet_switchEthereumChain(e) {
    const r = e[0];
    return (
      await this.switchEthereumChain(parseInt(r.chainId, 16)),
      { jsonrpc: "2.0", id: 0, result: null }
    );
  }
  async _wallet_watchAsset(e) {
    const r = Array.isArray(e) ? e[0] : e;
    if (!r.type) throw _e.standardErrors.rpc.invalidParams("Type is required");
    if ((r == null ? void 0 : r.type) !== "ERC20")
      throw _e.standardErrors.rpc.invalidParams(
        `Asset of type '${r.type}' is not supported`
      );
    if (!(r != null && r.options))
      throw _e.standardErrors.rpc.invalidParams("Options are required");
    if (!(r != null && r.options.address))
      throw _e.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(),
      { address: i, symbol: s, image: o, decimals: a } = r.options;
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this.watchAsset(r.type, i, s, a, o, n),
    };
  }
  _eth_uninstallFilter(e) {
    const r = (0, ae.ensureHexString)(e[0]);
    return this._filterPolyfill.uninstallFilter(r);
  }
  async _eth_newFilter(e) {
    const r = e[0];
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newFilter(r),
    };
  }
  async _eth_newBlockFilter() {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newBlockFilter(),
    };
  }
  async _eth_newPendingTransactionFilter() {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newPendingTransactionFilter(),
    };
  }
  _eth_getFilterChanges(e) {
    const r = (0, ae.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterChanges(r);
  }
  _eth_getFilterLogs(e) {
    const r = (0, ae.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterLogs(r);
  }
  initializeRelay() {
    return this._relay
      ? Promise.resolve(this._relay)
      : this._relayProvider().then(
          (e) => (
            e.setAccountsCallback((r, n) => this._setAddresses(r, n)),
            e.setChainCallback((r, n) => {
              this.updateProviderInfo(n, parseInt(r, 10));
            }),
            e.setDappDefaultChainCallback(this._chainIdFromOpts),
            (this._relay = e),
            e
          )
        );
  }
}
ni.CoinbaseWalletProvider = HE;
var qo = {},
  Go = {},
  Ss,
  se,
  yp,
  mp,
  ln,
  Vf,
  _p,
  Iu,
  wp,
  ti = {},
  Sp = [],
  WE = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  Jo = Array.isArray;
function yr(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function Ep(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Au(t, e, r) {
  var n,
    i,
    s,
    o = {};
  for (s in e)
    s == "key" ? (n = e[s]) : s == "ref" ? (i = e[s]) : (o[s] = e[s]);
  if (
    (arguments.length > 2 &&
      (o.children = arguments.length > 3 ? Ss.call(arguments, 2) : r),
    typeof t == "function" && t.defaultProps != null)
  )
    for (s in t.defaultProps) o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return qi(t, o, n, i, null);
}
function qi(t, e, r, n, i) {
  var s = {
    type: t,
    props: e,
    key: r,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: i ?? ++yp,
  };
  return i == null && se.vnode != null && se.vnode(s), s;
}
function VE() {
  return { current: null };
}
function Es(t) {
  return t.children;
}
function Gi(t, e) {
  (this.props = t), (this.context = e);
}
function ts(t, e) {
  if (e == null) return t.__ ? ts(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null) return r.__d || r.__e;
  return typeof t.type == "function" ? ts(t) : null;
}
function xp(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return xp(t);
  }
}
function ku(t) {
  ((!t.__d && (t.__d = !0) && ln.push(t) && !oo.__r++) ||
    Vf !== se.debounceRendering) &&
    ((Vf = se.debounceRendering) || _p)(oo);
}
function oo() {
  var t, e, r, n, i, s, o, a, c;
  for (ln.sort(Iu); (t = ln.shift()); )
    t.__d &&
      ((e = ln.length),
      (n = void 0),
      (i = void 0),
      (s = void 0),
      (a = (o = (r = t).__v).__e),
      (c = r.__P) &&
        ((n = []),
        (i = []),
        ((s = yr({}, o)).__v = o.__v + 1),
        Ic(
          c,
          o,
          s,
          r.__n,
          c.ownerSVGElement !== void 0,
          o.__h != null ? [a] : null,
          n,
          a ?? ts(o),
          o.__h,
          i
        ),
        Ap(n, o, i),
        o.__e != a && xp(o)),
      ln.length > e && ln.sort(Iu));
  oo.__r = 0;
}
function Mp(t, e, r, n, i, s, o, a, c, f, d) {
  var p,
    b,
    E,
    R,
    O,
    $,
    I,
    k,
    N,
    D = 0,
    L = (n && n.__k) || Sp,
    U = L.length,
    G = U,
    q = e.length;
  for (r.__k = [], p = 0; p < q; p++)
    (R = r.__k[p] =
      (R = e[p]) == null || typeof R == "boolean" || typeof R == "function"
        ? null
        : typeof R == "string" || typeof R == "number" || typeof R == "bigint"
        ? qi(null, R, null, null, R)
        : Jo(R)
        ? qi(Es, { children: R }, null, null, null)
        : R.__b > 0
        ? qi(R.type, R.props, R.key, R.ref ? R.ref : null, R.__v)
        : R) != null
      ? ((R.__ = r),
        (R.__b = r.__b + 1),
        (k = UE(R, L, (I = p + D), G)) === -1
          ? (E = ti)
          : ((E = L[k] || ti), (L[k] = void 0), G--),
        Ic(t, R, E, i, s, o, a, c, f, d),
        (O = R.__e),
        (b = R.ref) &&
          E.ref != b &&
          (E.ref && Ac(E.ref, null, R), d.push(b, R.__c || O, R)),
        O != null &&
          ($ == null && ($ = O),
          (N = E === ti || E.__v === null)
            ? k == -1 && D--
            : k !== I &&
              (k === I + 1
                ? D++
                : k > I
                ? G > q - I
                  ? (D += k - I)
                  : D--
                : (D = k < I && k == I - 1 ? k - I : 0)),
          (I = p + D),
          typeof R.type != "function" || (k === I && E.__k !== R.__k)
            ? typeof R.type == "function" || (k === I && !N)
              ? R.__d !== void 0
                ? ((c = R.__d), (R.__d = void 0))
                : (c = O.nextSibling)
              : (c = Ip(t, O, c))
            : (c = Cp(R, c, t)),
          typeof r.type == "function" && (r.__d = c)))
      : (E = L[p]) &&
        E.key == null &&
        E.__e &&
        (E.__e == c && ((E.__ = n), (c = ts(E))), Tu(E, E, !1), (L[p] = null));
  for (r.__e = $, p = U; p--; )
    L[p] != null &&
      (typeof r.type == "function" &&
        L[p].__e != null &&
        L[p].__e == r.__d &&
        (r.__d = L[p].__e.nextSibling),
      Tu(L[p], L[p]));
}
function Cp(t, e, r) {
  for (var n, i = t.__k, s = 0; i && s < i.length; s++)
    (n = i[s]) &&
      ((n.__ = t),
      (e = typeof n.type == "function" ? Cp(n, e, r) : Ip(r, n.__e, e)));
  return e;
}
function Rp(t, e) {
  return (
    (e = e || []),
    t == null ||
      typeof t == "boolean" ||
      (Jo(t)
        ? t.some(function (r) {
            Rp(r, e);
          })
        : e.push(t)),
    e
  );
}
function Ip(t, e, r) {
  return (
    r == null || r.parentNode !== t
      ? t.insertBefore(e, null)
      : (e == r && e.parentNode != null) || t.insertBefore(e, r),
    e.nextSibling
  );
}
function UE(t, e, r, n) {
  var i = t.key,
    s = t.type,
    o = r - 1,
    a = r + 1,
    c = e[r];
  if (c === null || (c && i == c.key && s === c.type)) return r;
  if (n > (c != null ? 1 : 0))
    for (; o >= 0 || a < e.length; ) {
      if (o >= 0) {
        if ((c = e[o]) && i == c.key && s === c.type) return o;
        o--;
      }
      if (a < e.length) {
        if ((c = e[a]) && i == c.key && s === c.type) return a;
        a++;
      }
    }
  return -1;
}
function zE(t, e, r, n, i) {
  var s;
  for (s in r)
    s === "children" || s === "key" || s in e || ao(t, s, null, r[s], n);
  for (s in e)
    (i && typeof e[s] != "function") ||
      s === "children" ||
      s === "key" ||
      s === "value" ||
      s === "checked" ||
      r[s] === e[s] ||
      ao(t, s, e[s], r[s], n);
}
function Uf(t, e, r) {
  e[0] === "-"
    ? t.setProperty(e, r ?? "")
    : (t[e] =
        r == null ? "" : typeof r != "number" || WE.test(e) ? r : r + "px");
}
function ao(t, e, r, n, i) {
  var s;
  e: if (e === "style")
    if (typeof r == "string") t.style.cssText = r;
    else {
      if ((typeof n == "string" && (t.style.cssText = n = ""), n))
        for (e in n) (r && e in r) || Uf(t.style, e, "");
      if (r) for (e in r) (n && r[e] === n[e]) || Uf(t.style, e, r[e]);
    }
  else if (e[0] === "o" && e[1] === "n")
    (s = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1"))),
      (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + s] = r),
      r
        ? n
          ? (r.u = n.u)
          : ((r.u = Date.now()), t.addEventListener(e, s ? qf : zf, s))
        : t.removeEventListener(e, s ? qf : zf, s);
  else if (e !== "dangerouslySetInnerHTML") {
    if (i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e !== "width" &&
      e !== "height" &&
      e !== "href" &&
      e !== "list" &&
      e !== "form" &&
      e !== "tabIndex" &&
      e !== "download" &&
      e !== "rowSpan" &&
      e !== "colSpan" &&
      e !== "role" &&
      e in t
    )
      try {
        t[e] = r ?? "";
        break e;
      } catch {}
    typeof r == "function" ||
      (r == null || (r === !1 && e[4] !== "-")
        ? t.removeAttribute(e)
        : t.setAttribute(e, r));
  }
}
function zf(t) {
  var e = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= e.u) return;
  } else t.t = Date.now();
  return e(se.event ? se.event(t) : t);
}
function qf(t) {
  return this.l[t.type + !0](se.event ? se.event(t) : t);
}
function Ic(t, e, r, n, i, s, o, a, c, f) {
  var d,
    p,
    b,
    E,
    R,
    O,
    $,
    I,
    k,
    N,
    D,
    L,
    U,
    G,
    q,
    H = e.type;
  if (e.constructor !== void 0) return null;
  r.__h != null &&
    ((c = r.__h), (a = e.__e = r.__e), (e.__h = null), (s = [a])),
    (d = se.__b) && d(e);
  e: if (typeof H == "function")
    try {
      if (
        ((I = e.props),
        (k = (d = H.contextType) && n[d.__c]),
        (N = d ? (k ? k.props.value : d.__) : n),
        r.__c
          ? ($ = (p = e.__c = r.__c).__ = p.__E)
          : ("prototype" in H && H.prototype.render
              ? (e.__c = p = new H(I, N))
              : ((e.__c = p = new Gi(I, N)),
                (p.constructor = H),
                (p.render = GE)),
            k && k.sub(p),
            (p.props = I),
            p.state || (p.state = {}),
            (p.context = N),
            (p.__n = n),
            (b = p.__d = !0),
            (p.__h = []),
            (p._sb = [])),
        p.__s == null && (p.__s = p.state),
        H.getDerivedStateFromProps != null &&
          (p.__s == p.state && (p.__s = yr({}, p.__s)),
          yr(p.__s, H.getDerivedStateFromProps(I, p.__s))),
        (E = p.props),
        (R = p.state),
        (p.__v = e),
        b)
      )
        H.getDerivedStateFromProps == null &&
          p.componentWillMount != null &&
          p.componentWillMount(),
          p.componentDidMount != null && p.__h.push(p.componentDidMount);
      else {
        if (
          (H.getDerivedStateFromProps == null &&
            I !== E &&
            p.componentWillReceiveProps != null &&
            p.componentWillReceiveProps(I, N),
          !p.__e &&
            ((p.shouldComponentUpdate != null &&
              p.shouldComponentUpdate(I, p.__s, N) === !1) ||
              e.__v === r.__v))
        ) {
          for (
            e.__v !== r.__v && ((p.props = I), (p.state = p.__s), (p.__d = !1)),
              e.__e = r.__e,
              e.__k = r.__k,
              e.__k.forEach(function (Y) {
                Y && (Y.__ = e);
              }),
              D = 0;
            D < p._sb.length;
            D++
          )
            p.__h.push(p._sb[D]);
          (p._sb = []), p.__h.length && o.push(p);
          break e;
        }
        p.componentWillUpdate != null && p.componentWillUpdate(I, p.__s, N),
          p.componentDidUpdate != null &&
            p.__h.push(function () {
              p.componentDidUpdate(E, R, O);
            });
      }
      if (
        ((p.context = N),
        (p.props = I),
        (p.__P = t),
        (p.__e = !1),
        (L = se.__r),
        (U = 0),
        "prototype" in H && H.prototype.render)
      ) {
        for (
          p.state = p.__s,
            p.__d = !1,
            L && L(e),
            d = p.render(p.props, p.state, p.context),
            G = 0;
          G < p._sb.length;
          G++
        )
          p.__h.push(p._sb[G]);
        p._sb = [];
      } else
        do
          (p.__d = !1),
            L && L(e),
            (d = p.render(p.props, p.state, p.context)),
            (p.state = p.__s);
        while (p.__d && ++U < 25);
      (p.state = p.__s),
        p.getChildContext != null && (n = yr(yr({}, n), p.getChildContext())),
        b ||
          p.getSnapshotBeforeUpdate == null ||
          (O = p.getSnapshotBeforeUpdate(E, R)),
        Mp(
          t,
          Jo(
            (q =
              d != null && d.type === Es && d.key == null
                ? d.props.children
                : d)
          )
            ? q
            : [q],
          e,
          r,
          n,
          i,
          s,
          o,
          a,
          c,
          f
        ),
        (p.base = e.__e),
        (e.__h = null),
        p.__h.length && o.push(p),
        $ && (p.__E = p.__ = null);
    } catch (Y) {
      (e.__v = null),
        (c || s != null) &&
          ((e.__e = a), (e.__h = !!c), (s[s.indexOf(a)] = null)),
        se.__e(Y, e, r);
    }
  else
    s == null && e.__v === r.__v
      ? ((e.__k = r.__k), (e.__e = r.__e))
      : (e.__e = qE(r.__e, e, r, n, i, s, o, c, f));
  (d = se.diffed) && d(e);
}
function Ap(t, e, r) {
  for (var n = 0; n < r.length; n++) Ac(r[n], r[++n], r[++n]);
  se.__c && se.__c(e, t),
    t.some(function (i) {
      try {
        (t = i.__h),
          (i.__h = []),
          t.some(function (s) {
            s.call(i);
          });
      } catch (s) {
        se.__e(s, i.__v);
      }
    });
}
function qE(t, e, r, n, i, s, o, a, c) {
  var f,
    d,
    p,
    b = r.props,
    E = e.props,
    R = e.type,
    O = 0;
  if ((R === "svg" && (i = !0), s != null)) {
    for (; O < s.length; O++)
      if (
        (f = s[O]) &&
        "setAttribute" in f == !!R &&
        (R ? f.localName === R : f.nodeType === 3)
      ) {
        (t = f), (s[O] = null);
        break;
      }
  }
  if (t == null) {
    if (R === null) return document.createTextNode(E);
    (t = i
      ? document.createElementNS("http://www.w3.org/2000/svg", R)
      : document.createElement(R, E.is && E)),
      (s = null),
      (a = !1);
  }
  if (R === null) b === E || (a && t.data === E) || (t.data = E);
  else {
    if (
      ((s = s && Ss.call(t.childNodes)),
      (d = (b = r.props || ti).dangerouslySetInnerHTML),
      (p = E.dangerouslySetInnerHTML),
      !a)
    ) {
      if (s != null)
        for (b = {}, O = 0; O < t.attributes.length; O++)
          b[t.attributes[O].name] = t.attributes[O].value;
      (p || d) &&
        ((p && ((d && p.__html == d.__html) || p.__html === t.innerHTML)) ||
          (t.innerHTML = (p && p.__html) || ""));
    }
    if ((zE(t, E, b, i, a), p)) e.__k = [];
    else if (
      (Mp(
        t,
        Jo((O = e.props.children)) ? O : [O],
        e,
        r,
        n,
        i && R !== "foreignObject",
        s,
        o,
        s ? s[0] : r.__k && ts(r, 0),
        a,
        c
      ),
      s != null)
    )
      for (O = s.length; O--; ) s[O] != null && Ep(s[O]);
    a ||
      ("value" in E &&
        (O = E.value) !== void 0 &&
        (O !== t.value ||
          (R === "progress" && !O) ||
          (R === "option" && O !== b.value)) &&
        ao(t, "value", O, b.value, !1),
      "checked" in E &&
        (O = E.checked) !== void 0 &&
        O !== t.checked &&
        ao(t, "checked", O, b.checked, !1));
  }
  return t;
}
function Ac(t, e, r) {
  try {
    typeof t == "function" ? t(e) : (t.current = e);
  } catch (n) {
    se.__e(n, r);
  }
}
function Tu(t, e, r) {
  var n, i;
  if (
    (se.unmount && se.unmount(t),
    (n = t.ref) && ((n.current && n.current !== t.__e) || Ac(n, null, e)),
    (n = t.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        se.__e(s, e);
      }
    (n.base = n.__P = null), (t.__c = void 0);
  }
  if ((n = t.__k))
    for (i = 0; i < n.length; i++)
      n[i] && Tu(n[i], e, r || typeof t.type != "function");
  r || t.__e == null || Ep(t.__e), (t.__ = t.__e = t.__d = void 0);
}
function GE(t, e, r) {
  return this.constructor(t, r);
}
function kp(t, e, r) {
  var n, i, s, o;
  se.__ && se.__(t, e),
    (i = (n = typeof r == "function") ? null : (r && r.__k) || e.__k),
    (s = []),
    (o = []),
    Ic(
      e,
      (t = ((!n && r) || e).__k = Au(Es, null, [t])),
      i || ti,
      ti,
      e.ownerSVGElement !== void 0,
      !n && r ? [r] : i ? null : e.firstChild ? Ss.call(e.childNodes) : null,
      s,
      !n && r ? r : i ? i.__e : e.firstChild,
      n,
      o
    ),
    Ap(s, t, o);
}
function Tp(t, e) {
  kp(t, e, Tp);
}
function JE(t, e, r) {
  var n,
    i,
    s,
    o,
    a = yr({}, t.props);
  for (s in (t.type && t.type.defaultProps && (o = t.type.defaultProps), e))
    s == "key"
      ? (n = e[s])
      : s == "ref"
      ? (i = e[s])
      : (a[s] = e[s] === void 0 && o !== void 0 ? o[s] : e[s]);
  return (
    arguments.length > 2 &&
      (a.children = arguments.length > 3 ? Ss.call(arguments, 2) : r),
    qi(t.type, a, n || t.key, i || t.ref, null)
  );
}
function ZE(t, e) {
  var r = {
    __c: (e = "__cC" + wp++),
    __: t,
    Consumer: function (n, i) {
      return n.children(i);
    },
    Provider: function (n) {
      var i, s;
      return (
        this.getChildContext ||
          ((i = []),
          ((s = {})[e] = this),
          (this.getChildContext = function () {
            return s;
          }),
          (this.shouldComponentUpdate = function (o) {
            this.props.value !== o.value &&
              i.some(function (a) {
                (a.__e = !0), ku(a);
              });
          }),
          (this.sub = function (o) {
            i.push(o);
            var a = o.componentWillUnmount;
            o.componentWillUnmount = function () {
              i.splice(i.indexOf(o), 1), a && a.call(o);
            };
          })),
        n.children
      );
    },
  };
  return (r.Provider.__ = r.Consumer.contextType = r);
}
(Ss = Sp.slice),
  (se = {
    __e: function (t, e, r, n) {
      for (var i, s, o; (e = e.__); )
        if ((i = e.__c) && !i.__)
          try {
            if (
              ((s = i.constructor) &&
                s.getDerivedStateFromError != null &&
                (i.setState(s.getDerivedStateFromError(t)), (o = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(t, n || {}), (o = i.__d)),
              o)
            )
              return (i.__E = i);
          } catch (a) {
            t = a;
          }
      throw t;
    },
  }),
  (yp = 0),
  (mp = function (t) {
    return t != null && t.constructor === void 0;
  }),
  (Gi.prototype.setState = function (t, e) {
    var r;
    (r =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = yr({}, this.state))),
      typeof t == "function" && (t = t(yr({}, r), this.props)),
      t && yr(r, t),
      t != null && this.__v && (e && this._sb.push(e), ku(this));
  }),
  (Gi.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), ku(this));
  }),
  (Gi.prototype.render = Es),
  (ln = []),
  (_p =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Iu = function (t, e) {
    return t.__v.__b - e.__v.__b;
  }),
  (oo.__r = 0),
  (wp = 0);
const QE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Component: Gi,
        Fragment: Es,
        cloneElement: JE,
        createContext: ZE,
        createElement: Au,
        createRef: VE,
        h: Au,
        hydrate: Tp,
        get isValidElement() {
          return mp;
        },
        get options() {
          return se;
        },
        render: kp,
        toChildArray: Rp,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tt = mi(QE);
function hi(t) {
  return typeof t == "function";
}
var Gf = !1,
  $t = {
    Promise: void 0,
    set useDeprecatedSynchronousErrorHandling(t) {
      if (t) {
        var e = new Error();
        "" + e.stack;
      }
      Gf = t;
    },
    get useDeprecatedSynchronousErrorHandling() {
      return Gf;
    },
  };
function Jn(t) {
  setTimeout(function () {
    throw t;
  }, 0);
}
var uo = {
    closed: !0,
    next: function (t) {},
    error: function (t) {
      if ($t.useDeprecatedSynchronousErrorHandling) throw t;
      Jn(t);
    },
    complete: function () {},
  },
  St = (function () {
    return (
      Array.isArray ||
      function (t) {
        return t && typeof t.length == "number";
      }
    );
  })();
function kc(t) {
  return t !== null && typeof t == "object";
}
var YE = (function () {
    function t(e) {
      return (
        Error.call(this),
        (this.message = e
          ? e.length +
            ` errors occurred during unsubscription:
` +
            e.map(function (r, n) {
              return n + 1 + ") " + r.toString();
            }).join(`
  `)
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = e),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  Ji = YE,
  Ke = (function () {
    function t(e) {
      (this.closed = !1),
        (this._parentOrParents = null),
        (this._subscriptions = null),
        e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
    }
    return (
      (t.prototype.unsubscribe = function () {
        var e;
        if (!this.closed) {
          var r = this,
            n = r._parentOrParents,
            i = r._ctorUnsubscribe,
            s = r._unsubscribe,
            o = r._subscriptions;
          if (
            ((this.closed = !0),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            n instanceof t)
          )
            n.remove(this);
          else if (n !== null)
            for (var a = 0; a < n.length; ++a) {
              var c = n[a];
              c.remove(this);
            }
          if (hi(s)) {
            i && (this._unsubscribe = void 0);
            try {
              s.call(this);
            } catch (p) {
              e = p instanceof Ji ? Jf(p.errors) : [p];
            }
          }
          if (St(o))
            for (var a = -1, f = o.length; ++a < f; ) {
              var d = o[a];
              if (kc(d))
                try {
                  d.unsubscribe();
                } catch (b) {
                  (e = e || []),
                    b instanceof Ji ? (e = e.concat(Jf(b.errors))) : e.push(b);
                }
            }
          if (e) throw new Ji(e);
        }
      }),
      (t.prototype.add = function (e) {
        var r = e;
        if (!e) return t.EMPTY;
        switch (typeof e) {
          case "function":
            r = new t(e);
          case "object":
            if (r === this || r.closed || typeof r.unsubscribe != "function")
              return r;
            if (this.closed) return r.unsubscribe(), r;
            if (!(r instanceof t)) {
              var n = r;
              (r = new t()), (r._subscriptions = [n]);
            }
            break;
          default:
            throw new Error(
              "unrecognized teardown " + e + " added to Subscription."
            );
        }
        var i = r._parentOrParents;
        if (i === null) r._parentOrParents = this;
        else if (i instanceof t) {
          if (i === this) return r;
          r._parentOrParents = [i, this];
        } else if (i.indexOf(this) === -1) i.push(this);
        else return r;
        var s = this._subscriptions;
        return s === null ? (this._subscriptions = [r]) : s.push(r), r;
      }),
      (t.prototype.remove = function (e) {
        var r = this._subscriptions;
        if (r) {
          var n = r.indexOf(e);
          n !== -1 && r.splice(n, 1);
        }
      }),
      (t.EMPTY = (function (e) {
        return (e.closed = !0), e;
      })(new t())),
      t
    );
  })();
function Jf(t) {
  return t.reduce(function (e, r) {
    return e.concat(r instanceof Ji ? r.errors : r);
  }, []);
}
var co = (function () {
    return typeof Symbol == "function"
      ? Symbol("rxSubscriber")
      : "@@rxSubscriber_" + Math.random();
  })(),
  X = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this) || this;
      switch (
        ((s.syncErrorValue = null),
        (s.syncErrorThrown = !1),
        (s.syncErrorThrowable = !1),
        (s.isStopped = !1),
        arguments.length)
      ) {
        case 0:
          s.destination = uo;
          break;
        case 1:
          if (!r) {
            s.destination = uo;
            break;
          }
          if (typeof r == "object") {
            r instanceof e
              ? ((s.syncErrorThrowable = r.syncErrorThrowable),
                (s.destination = r),
                r.add(s))
              : ((s.syncErrorThrowable = !0), (s.destination = new Zf(s, r)));
            break;
          }
        default:
          (s.syncErrorThrowable = !0), (s.destination = new Zf(s, r, n, i));
          break;
      }
      return s;
    }
    return (
      (e.prototype[co] = function () {
        return this;
      }),
      (e.create = function (r, n, i) {
        var s = new e(r, n, i);
        return (s.syncErrorThrowable = !1), s;
      }),
      (e.prototype.next = function (r) {
        this.isStopped || this._next(r);
      }),
      (e.prototype.error = function (r) {
        this.isStopped || ((this.isStopped = !0), this._error(r));
      }),
      (e.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
      }),
      (e.prototype._next = function (r) {
        this.destination.next(r);
      }),
      (e.prototype._error = function (r) {
        this.destination.error(r), this.unsubscribe();
      }),
      (e.prototype._complete = function () {
        this.destination.complete(), this.unsubscribe();
      }),
      (e.prototype._unsubscribeAndRecycle = function () {
        var r = this._parentOrParents;
        return (
          (this._parentOrParents = null),
          this.unsubscribe(),
          (this.closed = !1),
          (this.isStopped = !1),
          (this._parentOrParents = r),
          this
        );
      }),
      e
    );
  })(Ke),
  Zf = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s) {
      var o = t.call(this) || this;
      o._parentSubscriber = r;
      var a,
        c = o;
      return (
        hi(n)
          ? (a = n)
          : n &&
            ((a = n.next),
            (i = n.error),
            (s = n.complete),
            n !== uo &&
              ((c = Object.create(n)),
              hi(c.unsubscribe) && o.add(c.unsubscribe.bind(c)),
              (c.unsubscribe = o.unsubscribe.bind(o)))),
        (o._context = c),
        (o._next = a),
        (o._error = i),
        (o._complete = s),
        o
      );
    }
    return (
      (e.prototype.next = function (r) {
        if (!this.isStopped && this._next) {
          var n = this._parentSubscriber;
          !$t.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable
            ? this.__tryOrUnsub(this._next, r)
            : this.__tryOrSetError(n, this._next, r) && this.unsubscribe();
        }
      }),
      (e.prototype.error = function (r) {
        if (!this.isStopped) {
          var n = this._parentSubscriber,
            i = $t.useDeprecatedSynchronousErrorHandling;
          if (this._error)
            !i || !n.syncErrorThrowable
              ? (this.__tryOrUnsub(this._error, r), this.unsubscribe())
              : (this.__tryOrSetError(n, this._error, r), this.unsubscribe());
          else if (n.syncErrorThrowable)
            i ? ((n.syncErrorValue = r), (n.syncErrorThrown = !0)) : Jn(r),
              this.unsubscribe();
          else {
            if ((this.unsubscribe(), i)) throw r;
            Jn(r);
          }
        }
      }),
      (e.prototype.complete = function () {
        var r = this;
        if (!this.isStopped) {
          var n = this._parentSubscriber;
          if (this._complete) {
            var i = function () {
              return r._complete.call(r._context);
            };
            !$t.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable
              ? (this.__tryOrUnsub(i), this.unsubscribe())
              : (this.__tryOrSetError(n, i), this.unsubscribe());
          } else this.unsubscribe();
        }
      }),
      (e.prototype.__tryOrUnsub = function (r, n) {
        try {
          r.call(this._context, n);
        } catch (i) {
          if ((this.unsubscribe(), $t.useDeprecatedSynchronousErrorHandling))
            throw i;
          Jn(i);
        }
      }),
      (e.prototype.__tryOrSetError = function (r, n, i) {
        if (!$t.useDeprecatedSynchronousErrorHandling)
          throw new Error("bad call");
        try {
          n.call(this._context, i);
        } catch (s) {
          return $t.useDeprecatedSynchronousErrorHandling
            ? ((r.syncErrorValue = s), (r.syncErrorThrown = !0), !0)
            : (Jn(s), !0);
        }
        return !1;
      }),
      (e.prototype._unsubscribe = function () {
        var r = this._parentSubscriber;
        (this._context = null),
          (this._parentSubscriber = null),
          r.unsubscribe();
      }),
      e
    );
  })(X);
function Tc(t) {
  for (; t; ) {
    var e = t,
      r = e.closed,
      n = e.destination,
      i = e.isStopped;
    if (r || i) return !1;
    n && n instanceof X ? (t = n) : (t = null);
  }
  return !0;
}
function KE(t, e, r) {
  if (t) {
    if (t instanceof X) return t;
    if (t[co]) return t[co]();
  }
  return !t && !e && !r ? new X(uo) : new X(t, e, r);
}
var Ai = (function () {
  return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
})();
function jr(t) {
  return t;
}
function Ou() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return Op(t);
}
function Op(t) {
  return t.length === 0
    ? jr
    : t.length === 1
    ? t[0]
    : function (r) {
        return t.reduce(function (n, i) {
          return i(n);
        }, r);
      };
}
var ue = (function () {
  function t(e) {
    (this._isScalar = !1), e && (this._subscribe = e);
  }
  return (
    (t.prototype.lift = function (e) {
      var r = new t();
      return (r.source = this), (r.operator = e), r;
    }),
    (t.prototype.subscribe = function (e, r, n) {
      var i = this.operator,
        s = KE(e, r, n);
      if (
        (i
          ? s.add(i.call(s, this.source))
          : s.add(
              this.source ||
                ($t.useDeprecatedSynchronousErrorHandling &&
                  !s.syncErrorThrowable)
                ? this._subscribe(s)
                : this._trySubscribe(s)
            ),
        $t.useDeprecatedSynchronousErrorHandling &&
          s.syncErrorThrowable &&
          ((s.syncErrorThrowable = !1), s.syncErrorThrown))
      )
        throw s.syncErrorValue;
      return s;
    }),
    (t.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (r) {
        $t.useDeprecatedSynchronousErrorHandling &&
          ((e.syncErrorThrown = !0), (e.syncErrorValue = r)),
          Tc(e) ? e.error(r) : console.warn(r);
      }
    }),
    (t.prototype.forEach = function (e, r) {
      var n = this;
      return (
        (r = Qf(r)),
        new r(function (i, s) {
          var o;
          o = n.subscribe(
            function (a) {
              try {
                e(a);
              } catch (c) {
                s(c), o && o.unsubscribe();
              }
            },
            s,
            i
          );
        })
      );
    }),
    (t.prototype._subscribe = function (e) {
      var r = this.source;
      return r && r.subscribe(e);
    }),
    (t.prototype[Ai] = function () {
      return this;
    }),
    (t.prototype.pipe = function () {
      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
      return e.length === 0 ? this : Op(e)(this);
    }),
    (t.prototype.toPromise = function (e) {
      var r = this;
      return (
        (e = Qf(e)),
        new e(function (n, i) {
          var s;
          r.subscribe(
            function (o) {
              return (s = o);
            },
            function (o) {
              return i(o);
            },
            function () {
              return n(s);
            }
          );
        })
      );
    }),
    (t.create = function (e) {
      return new t(e);
    }),
    t
  );
})();
function Qf(t) {
  if ((t || (t = $t.Promise || Promise), !t))
    throw new Error("no Promise impl found");
  return t;
}
var XE = (function () {
    function t() {
      return (
        Error.call(this),
        (this.message = "object unsubscribed"),
        (this.name = "ObjectUnsubscribedError"),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  kr = XE,
  Np = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this) || this;
      return (i.subject = r), (i.subscriber = n), (i.closed = !1), i;
    }
    return (
      (e.prototype.unsubscribe = function () {
        if (!this.closed) {
          this.closed = !0;
          var r = this.subject,
            n = r.observers;
          if (
            ((this.subject = null),
            !(!n || n.length === 0 || r.isStopped || r.closed))
          ) {
            var i = n.indexOf(this.subscriber);
            i !== -1 && n.splice(i, 1);
          }
        }
      }),
      e
    );
  })(Ke),
  Lp = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return (n.destination = r), n;
    }
    return e;
  })(X),
  ft = (function (t) {
    F.__extends(e, t);
    function e() {
      var r = t.call(this) || this;
      return (
        (r.observers = []),
        (r.closed = !1),
        (r.isStopped = !1),
        (r.hasError = !1),
        (r.thrownError = null),
        r
      );
    }
    return (
      (e.prototype[co] = function () {
        return new Lp(this);
      }),
      (e.prototype.lift = function (r) {
        var n = new Yf(this, this);
        return (n.operator = r), n;
      }),
      (e.prototype.next = function (r) {
        if (this.closed) throw new kr();
        if (!this.isStopped)
          for (
            var n = this.observers, i = n.length, s = n.slice(), o = 0;
            o < i;
            o++
          )
            s[o].next(r);
      }),
      (e.prototype.error = function (r) {
        if (this.closed) throw new kr();
        (this.hasError = !0), (this.thrownError = r), (this.isStopped = !0);
        for (
          var n = this.observers, i = n.length, s = n.slice(), o = 0;
          o < i;
          o++
        )
          s[o].error(r);
        this.observers.length = 0;
      }),
      (e.prototype.complete = function () {
        if (this.closed) throw new kr();
        this.isStopped = !0;
        for (
          var r = this.observers, n = r.length, i = r.slice(), s = 0;
          s < n;
          s++
        )
          i[s].complete();
        this.observers.length = 0;
      }),
      (e.prototype.unsubscribe = function () {
        (this.isStopped = !0), (this.closed = !0), (this.observers = null);
      }),
      (e.prototype._trySubscribe = function (r) {
        if (this.closed) throw new kr();
        return t.prototype._trySubscribe.call(this, r);
      }),
      (e.prototype._subscribe = function (r) {
        if (this.closed) throw new kr();
        return this.hasError
          ? (r.error(this.thrownError), Ke.EMPTY)
          : this.isStopped
          ? (r.complete(), Ke.EMPTY)
          : (this.observers.push(r), new Np(this, r));
      }),
      (e.prototype.asObservable = function () {
        var r = new ue();
        return (r.source = this), r;
      }),
      (e.create = function (r, n) {
        return new Yf(r, n);
      }),
      e
    );
  })(ue),
  Yf = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this) || this;
      return (i.destination = r), (i.source = n), i;
    }
    return (
      (e.prototype.next = function (r) {
        var n = this.destination;
        n && n.next && n.next(r);
      }),
      (e.prototype.error = function (r) {
        var n = this.destination;
        n && n.error && this.destination.error(r);
      }),
      (e.prototype.complete = function () {
        var r = this.destination;
        r && r.complete && this.destination.complete();
      }),
      (e.prototype._subscribe = function (r) {
        var n = this.source;
        return n ? this.source.subscribe(r) : Ke.EMPTY;
      }),
      e
    );
  })(ft);
function Oc() {
  return function (e) {
    return e.lift(new e3(e));
  };
}
var e3 = (function () {
    function t(e) {
      this.connectable = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        var n = this.connectable;
        n._refCount++;
        var i = new t3(e, n),
          s = r.subscribe(i);
        return i.closed || (i.connection = n.connect()), s;
      }),
      t
    );
  })(),
  t3 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.connectable = n), i;
    }
    return (
      (e.prototype._unsubscribe = function () {
        var r = this.connectable;
        if (!r) {
          this.connection = null;
          return;
        }
        this.connectable = null;
        var n = r._refCount;
        if (n <= 0) {
          this.connection = null;
          return;
        }
        if (((r._refCount = n - 1), n > 1)) {
          this.connection = null;
          return;
        }
        var i = this.connection,
          s = r._connection;
        (this.connection = null), s && (!i || s === i) && s.unsubscribe();
      }),
      e
    );
  })(X),
  Pp = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this) || this;
      return (
        (i.source = r),
        (i.subjectFactory = n),
        (i._refCount = 0),
        (i._isComplete = !1),
        i
      );
    }
    return (
      (e.prototype._subscribe = function (r) {
        return this.getSubject().subscribe(r);
      }),
      (e.prototype.getSubject = function () {
        var r = this._subject;
        return (
          (!r || r.isStopped) && (this._subject = this.subjectFactory()),
          this._subject
        );
      }),
      (e.prototype.connect = function () {
        var r = this._connection;
        return (
          r ||
            ((this._isComplete = !1),
            (r = this._connection = new Ke()),
            r.add(this.source.subscribe(new n3(this.getSubject(), this))),
            r.closed && ((this._connection = null), (r = Ke.EMPTY))),
          r
        );
      }),
      (e.prototype.refCount = function () {
        return Oc()(this);
      }),
      e
    );
  })(ue),
  r3 = (function () {
    var t = Pp.prototype;
    return {
      operator: { value: null },
      _refCount: { value: 0, writable: !0 },
      _subject: { value: null, writable: !0 },
      _connection: { value: null, writable: !0 },
      _subscribe: { value: t._subscribe },
      _isComplete: { value: t._isComplete, writable: !0 },
      getSubject: { value: t.getSubject },
      connect: { value: t.connect },
      refCount: { value: t.refCount },
    };
  })(),
  n3 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.connectable = n), i;
    }
    return (
      (e.prototype._error = function (r) {
        this._unsubscribe(), t.prototype._error.call(this, r);
      }),
      (e.prototype._complete = function () {
        (this.connectable._isComplete = !0),
          this._unsubscribe(),
          t.prototype._complete.call(this);
      }),
      (e.prototype._unsubscribe = function () {
        var r = this.connectable;
        if (r) {
          this.connectable = null;
          var n = r._connection;
          (r._refCount = 0),
            (r._subject = null),
            (r._connection = null),
            n && n.unsubscribe();
        }
      }),
      e
    );
  })(Lp);
function i3(t, e, r, n) {
  return function (i) {
    return i.lift(new s3(t, e, r, n));
  };
}
var s3 = (function () {
    function t(e, r, n, i) {
      (this.keySelector = e),
        (this.elementSelector = r),
        (this.durationSelector = n),
        (this.subjectSelector = i);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new o3(
            e,
            this.keySelector,
            this.elementSelector,
            this.durationSelector,
            this.subjectSelector
          )
        );
      }),
      t
    );
  })(),
  o3 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s, o) {
      var a = t.call(this, r) || this;
      return (
        (a.keySelector = n),
        (a.elementSelector = i),
        (a.durationSelector = s),
        (a.subjectSelector = o),
        (a.groups = null),
        (a.attemptedToUnsubscribe = !1),
        (a.count = 0),
        a
      );
    }
    return (
      (e.prototype._next = function (r) {
        var n;
        try {
          n = this.keySelector(r);
        } catch (i) {
          this.error(i);
          return;
        }
        this._group(r, n);
      }),
      (e.prototype._group = function (r, n) {
        var i = this.groups;
        i || (i = this.groups = new Map());
        var s = i.get(n),
          o;
        if (this.elementSelector)
          try {
            o = this.elementSelector(r);
          } catch (f) {
            this.error(f);
          }
        else o = r;
        if (!s) {
          (s = this.subjectSelector ? this.subjectSelector() : new ft()),
            i.set(n, s);
          var a = new Nu(n, s, this);
          if ((this.destination.next(a), this.durationSelector)) {
            var c = void 0;
            try {
              c = this.durationSelector(new Nu(n, s));
            } catch (f) {
              this.error(f);
              return;
            }
            this.add(c.subscribe(new a3(n, s, this)));
          }
        }
        s.closed || s.next(o);
      }),
      (e.prototype._error = function (r) {
        var n = this.groups;
        n &&
          (n.forEach(function (i, s) {
            i.error(r);
          }),
          n.clear()),
          this.destination.error(r);
      }),
      (e.prototype._complete = function () {
        var r = this.groups;
        r &&
          (r.forEach(function (n, i) {
            n.complete();
          }),
          r.clear()),
          this.destination.complete();
      }),
      (e.prototype.removeGroup = function (r) {
        this.groups.delete(r);
      }),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.attemptedToUnsubscribe = !0),
          this.count === 0 && t.prototype.unsubscribe.call(this));
      }),
      e
    );
  })(X),
  a3 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, n) || this;
      return (s.key = r), (s.group = n), (s.parent = i), s;
    }
    return (
      (e.prototype._next = function (r) {
        this.complete();
      }),
      (e.prototype._unsubscribe = function () {
        var r = this,
          n = r.parent,
          i = r.key;
        (this.key = this.parent = null), n && n.removeGroup(i);
      }),
      e
    );
  })(X),
  Nu = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this) || this;
      return (s.key = r), (s.groupSubject = n), (s.refCountSubscription = i), s;
    }
    return (
      (e.prototype._subscribe = function (r) {
        var n = new Ke(),
          i = this,
          s = i.refCountSubscription,
          o = i.groupSubject;
        return s && !s.closed && n.add(new u3(s)), n.add(o.subscribe(r)), n;
      }),
      e
    );
  })(ue),
  u3 = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return (n.parent = r), r.count++, n;
    }
    return (
      (e.prototype.unsubscribe = function () {
        var r = this.parent;
        !r.closed &&
          !this.closed &&
          (t.prototype.unsubscribe.call(this),
          (r.count -= 1),
          r.count === 0 && r.attemptedToUnsubscribe && r.unsubscribe());
      }),
      e
    );
  })(Ke),
  $p = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return (n._value = r), n;
    }
    return (
      Object.defineProperty(e.prototype, "value", {
        get: function () {
          return this.getValue();
        },
        enumerable: !0,
        configurable: !0,
      }),
      (e.prototype._subscribe = function (r) {
        var n = t.prototype._subscribe.call(this, r);
        return n && !n.closed && r.next(this._value), n;
      }),
      (e.prototype.getValue = function () {
        if (this.hasError) throw this.thrownError;
        if (this.closed) throw new kr();
        return this._value;
      }),
      (e.prototype.next = function (r) {
        t.prototype.next.call(this, (this._value = r));
      }),
      e
    );
  })(ft),
  c3 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      return t.call(this) || this;
    }
    return (
      (e.prototype.schedule = function (r, n) {
        return this;
      }),
      e
    );
  })(Ke),
  xs = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return (i.scheduler = r), (i.work = n), (i.pending = !1), i;
    }
    return (
      (e.prototype.schedule = function (r, n) {
        if ((n === void 0 && (n = 0), this.closed)) return this;
        this.state = r;
        var i = this.id,
          s = this.scheduler;
        return (
          i != null && (this.id = this.recycleAsyncId(s, i, n)),
          (this.pending = !0),
          (this.delay = n),
          (this.id = this.id || this.requestAsyncId(s, this.id, n)),
          this
        );
      }),
      (e.prototype.requestAsyncId = function (r, n, i) {
        return i === void 0 && (i = 0), setInterval(r.flush.bind(r, this), i);
      }),
      (e.prototype.recycleAsyncId = function (r, n, i) {
        if (
          (i === void 0 && (i = 0),
          i !== null && this.delay === i && this.pending === !1)
        )
          return n;
        clearInterval(n);
      }),
      (e.prototype.execute = function (r, n) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var i = this._execute(r, n);
        if (i) return i;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (e.prototype._execute = function (r, n) {
        var i = !1,
          s = void 0;
        try {
          this.work(r);
        } catch (o) {
          (i = !0), (s = (!!o && o) || new Error(o));
        }
        if (i) return this.unsubscribe(), s;
      }),
      (e.prototype._unsubscribe = function () {
        var r = this.id,
          n = this.scheduler,
          i = n.actions,
          s = i.indexOf(this);
        (this.work = null),
          (this.state = null),
          (this.pending = !1),
          (this.scheduler = null),
          s !== -1 && i.splice(s, 1),
          r != null && (this.id = this.recycleAsyncId(n, r, null)),
          (this.delay = null);
      }),
      e
    );
  })(c3),
  l3 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return (i.scheduler = r), (i.work = n), i;
    }
    return (
      (e.prototype.schedule = function (r, n) {
        return (
          n === void 0 && (n = 0),
          n > 0
            ? t.prototype.schedule.call(this, r, n)
            : ((this.delay = n),
              (this.state = r),
              this.scheduler.flush(this),
              this)
        );
      }),
      (e.prototype.execute = function (r, n) {
        return n > 0 || this.closed
          ? t.prototype.execute.call(this, r, n)
          : this._execute(r, n);
      }),
      (e.prototype.requestAsyncId = function (r, n, i) {
        return (
          i === void 0 && (i = 0),
          (i !== null && i > 0) || (i === null && this.delay > 0)
            ? t.prototype.requestAsyncId.call(this, r, n, i)
            : r.flush(this)
        );
      }),
      e
    );
  })(xs),
  Lu = (function () {
    function t(e, r) {
      r === void 0 && (r = t.now), (this.SchedulerAction = e), (this.now = r);
    }
    return (
      (t.prototype.schedule = function (e, r, n) {
        return (
          r === void 0 && (r = 0),
          new this.SchedulerAction(this, e).schedule(n, r)
        );
      }),
      (t.now = function () {
        return Date.now();
      }),
      t
    );
  })(),
  Ms = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      n === void 0 && (n = Lu.now);
      var i =
        t.call(this, r, function () {
          return e.delegate && e.delegate !== i ? e.delegate.now() : n();
        }) || this;
      return (i.actions = []), (i.active = !1), (i.scheduled = void 0), i;
    }
    return (
      (e.prototype.schedule = function (r, n, i) {
        return (
          n === void 0 && (n = 0),
          e.delegate && e.delegate !== this
            ? e.delegate.schedule(r, n, i)
            : t.prototype.schedule.call(this, r, n, i)
        );
      }),
      (e.prototype.flush = function (r) {
        var n = this.actions;
        if (this.active) {
          n.push(r);
          return;
        }
        var i;
        this.active = !0;
        do if ((i = r.execute(r.state, r.delay))) break;
        while ((r = n.shift()));
        if (((this.active = !1), i)) {
          for (; (r = n.shift()); ) r.unsubscribe();
          throw i;
        }
      }),
      e
    );
  })(Lu),
  f3 = (function (t) {
    F.__extends(e, t);
    function e() {
      return (t !== null && t.apply(this, arguments)) || this;
    }
    return e;
  })(Ms),
  Dp = new f3(l3),
  jp = Dp,
  di = new ue(function (t) {
    return t.complete();
  });
function ki(t) {
  return t ? h3(t) : di;
}
function h3(t) {
  return new ue(function (e) {
    return t.schedule(function () {
      return e.complete();
    });
  });
}
function kt(t) {
  return t && typeof t.schedule == "function";
}
var Bp = function (t) {
  return function (e) {
    for (var r = 0, n = t.length; r < n && !e.closed; r++) e.next(t[r]);
    e.complete();
  };
};
function Nc(t, e) {
  return new ue(function (r) {
    var n = new Ke(),
      i = 0;
    return (
      n.add(
        e.schedule(function () {
          if (i === t.length) {
            r.complete();
            return;
          }
          r.next(t[i++]), r.closed || n.add(this.schedule());
        })
      ),
      n
    );
  });
}
function Cs(t, e) {
  return e ? Nc(t, e) : new ue(Bp(t));
}
function Zo() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = t[t.length - 1];
  return kt(r) ? (t.pop(), Nc(t, r)) : Cs(t);
}
function Lc(t, e) {
  return e
    ? new ue(function (r) {
        return e.schedule(d3, 0, { error: t, subscriber: r });
      })
    : new ue(function (r) {
        return r.error(t);
      });
}
function d3(t) {
  var e = t.error,
    r = t.subscriber;
  r.error(e);
}
var Pu;
Pu || (Pu = {});
var mr = (function () {
  function t(e, r, n) {
    (this.kind = e),
      (this.value = r),
      (this.error = n),
      (this.hasValue = e === "N");
  }
  return (
    (t.prototype.observe = function (e) {
      switch (this.kind) {
        case "N":
          return e.next && e.next(this.value);
        case "E":
          return e.error && e.error(this.error);
        case "C":
          return e.complete && e.complete();
      }
    }),
    (t.prototype.do = function (e, r, n) {
      var i = this.kind;
      switch (i) {
        case "N":
          return e && e(this.value);
        case "E":
          return r && r(this.error);
        case "C":
          return n && n();
      }
    }),
    (t.prototype.accept = function (e, r, n) {
      return e && typeof e.next == "function"
        ? this.observe(e)
        : this.do(e, r, n);
    }),
    (t.prototype.toObservable = function () {
      var e = this.kind;
      switch (e) {
        case "N":
          return Zo(this.value);
        case "E":
          return Lc(this.error);
        case "C":
          return ki();
      }
      throw new Error("unexpected notification kind value");
    }),
    (t.createNext = function (e) {
      return typeof e < "u" ? new t("N", e) : t.undefinedValueNotification;
    }),
    (t.createError = function (e) {
      return new t("E", void 0, e);
    }),
    (t.createComplete = function () {
      return t.completeNotification;
    }),
    (t.completeNotification = new t("C")),
    (t.undefinedValueNotification = new t("N", void 0)),
    t
  );
})();
function p3(t, e) {
  return (
    e === void 0 && (e = 0),
    function (n) {
      return n.lift(new g3(t, e));
    }
  );
}
var g3 = (function () {
    function t(e, r) {
      r === void 0 && (r = 0), (this.scheduler = e), (this.delay = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new Fp(e, this.scheduler, this.delay));
      }),
      t
    );
  })(),
  Fp = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      i === void 0 && (i = 0);
      var s = t.call(this, r) || this;
      return (s.scheduler = n), (s.delay = i), s;
    }
    return (
      (e.dispatch = function (r) {
        var n = r.notification,
          i = r.destination;
        n.observe(i), this.unsubscribe();
      }),
      (e.prototype.scheduleMessage = function (r) {
        var n = this.destination;
        n.add(
          this.scheduler.schedule(
            e.dispatch,
            this.delay,
            new v3(r, this.destination)
          )
        );
      }),
      (e.prototype._next = function (r) {
        this.scheduleMessage(mr.createNext(r));
      }),
      (e.prototype._error = function (r) {
        this.scheduleMessage(mr.createError(r)), this.unsubscribe();
      }),
      (e.prototype._complete = function () {
        this.scheduleMessage(mr.createComplete()), this.unsubscribe();
      }),
      e
    );
  })(X),
  v3 = (function () {
    function t(e, r) {
      (this.notification = e), (this.destination = r);
    }
    return t;
  })(),
  Pc = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      r === void 0 && (r = Number.POSITIVE_INFINITY),
        n === void 0 && (n = Number.POSITIVE_INFINITY);
      var s = t.call(this) || this;
      return (
        (s.scheduler = i),
        (s._events = []),
        (s._infiniteTimeWindow = !1),
        (s._bufferSize = r < 1 ? 1 : r),
        (s._windowTime = n < 1 ? 1 : n),
        n === Number.POSITIVE_INFINITY
          ? ((s._infiniteTimeWindow = !0), (s.next = s.nextInfiniteTimeWindow))
          : (s.next = s.nextTimeWindow),
        s
      );
    }
    return (
      (e.prototype.nextInfiniteTimeWindow = function (r) {
        if (!this.isStopped) {
          var n = this._events;
          n.push(r), n.length > this._bufferSize && n.shift();
        }
        t.prototype.next.call(this, r);
      }),
      (e.prototype.nextTimeWindow = function (r) {
        this.isStopped ||
          (this._events.push(new b3(this._getNow(), r)),
          this._trimBufferThenGetEvents()),
          t.prototype.next.call(this, r);
      }),
      (e.prototype._subscribe = function (r) {
        var n = this._infiniteTimeWindow,
          i = n ? this._events : this._trimBufferThenGetEvents(),
          s = this.scheduler,
          o = i.length,
          a;
        if (this.closed) throw new kr();
        if (
          (this.isStopped || this.hasError
            ? (a = Ke.EMPTY)
            : (this.observers.push(r), (a = new Np(this, r))),
          s && r.add((r = new Fp(r, s))),
          n)
        )
          for (var c = 0; c < o && !r.closed; c++) r.next(i[c]);
        else for (var c = 0; c < o && !r.closed; c++) r.next(i[c].value);
        return (
          this.hasError
            ? r.error(this.thrownError)
            : this.isStopped && r.complete(),
          a
        );
      }),
      (e.prototype._getNow = function () {
        return (this.scheduler || jp).now();
      }),
      (e.prototype._trimBufferThenGetEvents = function () {
        for (
          var r = this._getNow(),
            n = this._bufferSize,
            i = this._windowTime,
            s = this._events,
            o = s.length,
            a = 0;
          a < o && !(r - s[a].time < i);

        )
          a++;
        return o > n && (a = Math.max(a, o - n)), a > 0 && s.splice(0, a), s;
      }),
      e
    );
  })(ft),
  b3 = (function () {
    function t(e, r) {
      (this.time = e), (this.value = r);
    }
    return t;
  })(),
  Ti = (function (t) {
    F.__extends(e, t);
    function e() {
      var r = (t !== null && t.apply(this, arguments)) || this;
      return (r.value = null), (r.hasNext = !1), (r.hasCompleted = !1), r;
    }
    return (
      (e.prototype._subscribe = function (r) {
        return this.hasError
          ? (r.error(this.thrownError), Ke.EMPTY)
          : this.hasCompleted && this.hasNext
          ? (r.next(this.value), r.complete(), Ke.EMPTY)
          : t.prototype._subscribe.call(this, r);
      }),
      (e.prototype.next = function (r) {
        this.hasCompleted || ((this.value = r), (this.hasNext = !0));
      }),
      (e.prototype.error = function (r) {
        this.hasCompleted || t.prototype.error.call(this, r);
      }),
      (e.prototype.complete = function () {
        (this.hasCompleted = !0),
          this.hasNext && t.prototype.next.call(this, this.value),
          t.prototype.complete.call(this);
      }),
      e
    );
  })(ft),
  y3 = 1,
  m3 = (function () {
    return Promise.resolve();
  })(),
  $u = {};
function Kf(t) {
  return t in $u ? (delete $u[t], !0) : !1;
}
var Xf = {
    setImmediate: function (t) {
      var e = y3++;
      return (
        ($u[e] = !0),
        m3.then(function () {
          return Kf(e) && t();
        }),
        e
      );
    },
    clearImmediate: function (t) {
      Kf(t);
    },
  },
  _3 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return (i.scheduler = r), (i.work = n), i;
    }
    return (
      (e.prototype.requestAsyncId = function (r, n, i) {
        return (
          i === void 0 && (i = 0),
          i !== null && i > 0
            ? t.prototype.requestAsyncId.call(this, r, n, i)
            : (r.actions.push(this),
              r.scheduled ||
                (r.scheduled = Xf.setImmediate(r.flush.bind(r, null))))
        );
      }),
      (e.prototype.recycleAsyncId = function (r, n, i) {
        if (
          (i === void 0 && (i = 0),
          (i !== null && i > 0) || (i === null && this.delay > 0))
        )
          return t.prototype.recycleAsyncId.call(this, r, n, i);
        r.actions.length === 0 &&
          (Xf.clearImmediate(n), (r.scheduled = void 0));
      }),
      e
    );
  })(xs),
  w3 = (function (t) {
    F.__extends(e, t);
    function e() {
      return (t !== null && t.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.flush = function (r) {
        (this.active = !0), (this.scheduled = void 0);
        var n = this.actions,
          i,
          s = -1,
          o = n.length;
        r = r || n.shift();
        do if ((i = r.execute(r.state, r.delay))) break;
        while (++s < o && (r = n.shift()));
        if (((this.active = !1), i)) {
          for (; ++s < o && (r = n.shift()); ) r.unsubscribe();
          throw i;
        }
      }),
      e
    );
  })(Ms),
  Hp = new w3(_3),
  Js = Hp,
  Wp = new Ms(xs),
  Et = Wp,
  S3 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return (i.scheduler = r), (i.work = n), i;
    }
    return (
      (e.prototype.requestAsyncId = function (r, n, i) {
        return (
          i === void 0 && (i = 0),
          i !== null && i > 0
            ? t.prototype.requestAsyncId.call(this, r, n, i)
            : (r.actions.push(this),
              r.scheduled ||
                (r.scheduled = requestAnimationFrame(function () {
                  return r.flush(null);
                })))
        );
      }),
      (e.prototype.recycleAsyncId = function (r, n, i) {
        if (
          (i === void 0 && (i = 0),
          (i !== null && i > 0) || (i === null && this.delay > 0))
        )
          return t.prototype.recycleAsyncId.call(this, r, n, i);
        r.actions.length === 0 &&
          (cancelAnimationFrame(n), (r.scheduled = void 0));
      }),
      e
    );
  })(xs),
  E3 = (function (t) {
    F.__extends(e, t);
    function e() {
      return (t !== null && t.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.flush = function (r) {
        (this.active = !0), (this.scheduled = void 0);
        var n = this.actions,
          i,
          s = -1,
          o = n.length;
        r = r || n.shift();
        do if ((i = r.execute(r.state, r.delay))) break;
        while (++s < o && (r = n.shift()));
        if (((this.active = !1), i)) {
          for (; ++s < o && (r = n.shift()); ) r.unsubscribe();
          throw i;
        }
      }),
      e
    );
  })(Ms),
  Vp = new E3(S3),
  x3 = Vp,
  M3 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      r === void 0 && (r = Up), n === void 0 && (n = Number.POSITIVE_INFINITY);
      var i =
        t.call(this, r, function () {
          return i.frame;
        }) || this;
      return (i.maxFrames = n), (i.frame = 0), (i.index = -1), i;
    }
    return (
      (e.prototype.flush = function () {
        for (
          var r = this, n = r.actions, i = r.maxFrames, s, o;
          (o = n[0]) &&
          o.delay <= i &&
          (n.shift(),
          (this.frame = o.delay),
          !(s = o.execute(o.state, o.delay)));

        );
        if (s) {
          for (; (o = n.shift()); ) o.unsubscribe();
          throw s;
        }
      }),
      (e.frameTimeFactor = 10),
      e
    );
  })(Ms),
  Up = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      i === void 0 && (i = r.index += 1);
      var s = t.call(this, r, n) || this;
      return (
        (s.scheduler = r),
        (s.work = n),
        (s.index = i),
        (s.active = !0),
        (s.index = r.index = i),
        s
      );
    }
    return (
      (e.prototype.schedule = function (r, n) {
        if ((n === void 0 && (n = 0), !this.id))
          return t.prototype.schedule.call(this, r, n);
        this.active = !1;
        var i = new e(this.scheduler, this.work);
        return this.add(i), i.schedule(r, n);
      }),
      (e.prototype.requestAsyncId = function (r, n, i) {
        i === void 0 && (i = 0), (this.delay = r.frame + i);
        var s = r.actions;
        return s.push(this), s.sort(e.sortActions), !0;
      }),
      (e.prototype.recycleAsyncId = function (r, n, i) {}),
      (e.prototype._execute = function (r, n) {
        if (this.active === !0) return t.prototype._execute.call(this, r, n);
      }),
      (e.sortActions = function (r, n) {
        return r.delay === n.delay
          ? r.index === n.index
            ? 0
            : r.index > n.index
            ? 1
            : -1
          : r.delay > n.delay
          ? 1
          : -1;
      }),
      e
    );
  })(xs);
function sr() {}
function C3(t) {
  return (
    !!t &&
    (t instanceof ue ||
      (typeof t.lift == "function" && typeof t.subscribe == "function"))
  );
}
var R3 = (function () {
    function t() {
      return (
        Error.call(this),
        (this.message = "argument out of range"),
        (this.name = "ArgumentOutOfRangeError"),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  pi = R3,
  I3 = (function () {
    function t() {
      return (
        Error.call(this),
        (this.message = "no elements in sequence"),
        (this.name = "EmptyError"),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  Rs = I3,
  A3 = (function () {
    function t() {
      return (
        Error.call(this),
        (this.message = "Timeout has occurred"),
        (this.name = "TimeoutError"),
        this
      );
    }
    return (t.prototype = Object.create(Error.prototype)), t;
  })(),
  zp = A3;
function Wt(t, e) {
  return function (n) {
    if (typeof t != "function")
      throw new TypeError(
        "argument is not a function. Are you looking for `mapTo()`?"
      );
    return n.lift(new k3(t, e));
  };
}
var k3 = (function () {
    function t(e, r) {
      (this.project = e), (this.thisArg = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new T3(e, this.project, this.thisArg));
      }),
      t
    );
  })(),
  T3 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.project = n), (s.count = 0), (s.thisArg = i || s), s;
    }
    return (
      (e.prototype._next = function (r) {
        var n;
        try {
          n = this.project.call(this.thisArg, r, this.count++);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        this.destination.next(n);
      }),
      e
    );
  })(X);
function qp(t, e, r) {
  if (e)
    if (kt(e)) r = e;
    else
      return function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        return qp(t, r)
          .apply(void 0, n)
          .pipe(
            Wt(function (s) {
              return St(s) ? e.apply(void 0, s) : e(s);
            })
          );
      };
  return function () {
    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
    var s = this,
      o,
      a = { context: s, subject: o, callbackFunc: t, scheduler: r };
    return new ue(function (c) {
      if (r) {
        var d = { args: n, subscriber: c, params: a };
        return r.schedule(O3, 0, d);
      } else {
        if (!o) {
          o = new Ti();
          var f = function () {
            for (var p = [], b = 0; b < arguments.length; b++)
              p[b] = arguments[b];
            o.next(p.length <= 1 ? p[0] : p), o.complete();
          };
          try {
            t.apply(s, n.concat([f]));
          } catch (p) {
            Tc(o) ? o.error(p) : console.warn(p);
          }
        }
        return o.subscribe(c);
      }
    });
  };
}
function O3(t) {
  var e = this,
    r = t.args,
    n = t.subscriber,
    i = t.params,
    s = i.callbackFunc,
    o = i.context,
    a = i.scheduler,
    c = i.subject;
  if (!c) {
    c = i.subject = new Ti();
    var f = function () {
      for (var d = [], p = 0; p < arguments.length; p++) d[p] = arguments[p];
      var b = d.length <= 1 ? d[0] : d;
      e.add(a.schedule(N3, 0, { value: b, subject: c }));
    };
    try {
      s.apply(o, r.concat([f]));
    } catch (d) {
      c.error(d);
    }
  }
  this.add(c.subscribe(n));
}
function N3(t) {
  var e = t.value,
    r = t.subject;
  r.next(e), r.complete();
}
function Gp(t, e, r) {
  if (e)
    if (kt(e)) r = e;
    else
      return function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        return Gp(t, r)
          .apply(void 0, n)
          .pipe(
            Wt(function (s) {
              return St(s) ? e.apply(void 0, s) : e(s);
            })
          );
      };
  return function () {
    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
    var s = {
      subject: void 0,
      args: n,
      callbackFunc: t,
      scheduler: r,
      context: this,
    };
    return new ue(function (o) {
      var a = s.context,
        c = s.subject;
      if (r) return r.schedule(L3, 0, { params: s, subscriber: o, context: a });
      if (!c) {
        c = s.subject = new Ti();
        var f = function () {
          for (var d = [], p = 0; p < arguments.length; p++)
            d[p] = arguments[p];
          var b = d.shift();
          if (b) {
            c.error(b);
            return;
          }
          c.next(d.length <= 1 ? d[0] : d), c.complete();
        };
        try {
          t.apply(a, n.concat([f]));
        } catch (d) {
          Tc(c) ? c.error(d) : console.warn(d);
        }
      }
      return c.subscribe(o);
    });
  };
}
function L3(t) {
  var e = this,
    r = t.params,
    n = t.subscriber,
    i = t.context,
    s = r.callbackFunc,
    o = r.args,
    a = r.scheduler,
    c = r.subject;
  if (!c) {
    c = r.subject = new Ti();
    var f = function () {
      for (var d = [], p = 0; p < arguments.length; p++) d[p] = arguments[p];
      var b = d.shift();
      if (b) e.add(a.schedule(eh, 0, { err: b, subject: c }));
      else {
        var E = d.length <= 1 ? d[0] : d;
        e.add(a.schedule(P3, 0, { value: E, subject: c }));
      }
    };
    try {
      s.apply(i, o.concat([f]));
    } catch (d) {
      this.add(a.schedule(eh, 0, { err: d, subject: c }));
    }
  }
  this.add(c.subscribe(n));
}
function P3(t) {
  var e = t.value,
    r = t.subject;
  r.next(e), r.complete();
}
function eh(t) {
  var e = t.err,
    r = t.subject;
  r.error(e);
}
var Rn = (function (t) {
    F.__extends(e, t);
    function e() {
      return (t !== null && t.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.notifyNext = function (r, n, i, s, o) {
        this.destination.next(n);
      }),
      (e.prototype.notifyError = function (r, n) {
        this.destination.error(r);
      }),
      (e.prototype.notifyComplete = function (r) {
        this.destination.complete();
      }),
      e
    );
  })(X),
  $3 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this) || this;
      return (
        (s.parent = r), (s.outerValue = n), (s.outerIndex = i), (s.index = 0), s
      );
    }
    return (
      (e.prototype._next = function (r) {
        this.parent.notifyNext(
          this.outerValue,
          r,
          this.outerIndex,
          this.index++,
          this
        );
      }),
      (e.prototype._error = function (r) {
        this.parent.notifyError(r, this), this.unsubscribe();
      }),
      (e.prototype._complete = function () {
        this.parent.notifyComplete(this), this.unsubscribe();
      }),
      e
    );
  })(X),
  D3 = function (t) {
    return function (e) {
      return (
        t
          .then(
            function (r) {
              e.closed || (e.next(r), e.complete());
            },
            function (r) {
              return e.error(r);
            }
          )
          .then(null, Jn),
        e
      );
    };
  };
function j3() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Br = j3(),
  B3 = function (t) {
    return function (e) {
      var r = t[Br]();
      do {
        var n = void 0;
        try {
          n = r.next();
        } catch (i) {
          return e.error(i), e;
        }
        if (n.done) {
          e.complete();
          break;
        }
        if ((e.next(n.value), e.closed)) break;
      } while (!0);
      return (
        typeof r.return == "function" &&
          e.add(function () {
            r.return && r.return();
          }),
        e
      );
    };
  },
  F3 = function (t) {
    return function (e) {
      var r = t[Ai]();
      if (typeof r.subscribe != "function")
        throw new TypeError(
          "Provided object does not correctly implement Symbol.observable"
        );
      return r.subscribe(e);
    };
  },
  Jp = function (t) {
    return t && typeof t.length == "number" && typeof t != "function";
  };
function Zp(t) {
  return !!t && typeof t.subscribe != "function" && typeof t.then == "function";
}
var rs = function (t) {
  if (t && typeof t[Ai] == "function") return F3(t);
  if (Jp(t)) return Bp(t);
  if (Zp(t)) return D3(t);
  if (t && typeof t[Br] == "function") return B3(t);
  var e = kc(t) ? "an invalid object" : "'" + t + "'",
    r =
      "You provided " +
      e +
      " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
  throw new TypeError(r);
};
function wr(t, e, r, n, i) {
  if ((i === void 0 && (i = new $3(t, r, n)), !i.closed))
    return e instanceof ue ? e.subscribe(i) : rs(e)(i);
}
var th = {};
function H3() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = void 0,
    n = void 0;
  return (
    kt(t[t.length - 1]) && (n = t.pop()),
    typeof t[t.length - 1] == "function" && (r = t.pop()),
    t.length === 1 && St(t[0]) && (t = t[0]),
    Cs(t, n).lift(new $c(r))
  );
}
var $c = (function () {
    function t(e) {
      this.resultSelector = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new W3(e, this.resultSelector));
      }),
      t
    );
  })(),
  W3 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (
        (i.resultSelector = n),
        (i.active = 0),
        (i.values = []),
        (i.observables = []),
        i
      );
    }
    return (
      (e.prototype._next = function (r) {
        this.values.push(th), this.observables.push(r);
      }),
      (e.prototype._complete = function () {
        var r = this.observables,
          n = r.length;
        if (n === 0) this.destination.complete();
        else {
          (this.active = n), (this.toRespond = n);
          for (var i = 0; i < n; i++) {
            var s = r[i];
            this.add(wr(this, s, void 0, i));
          }
        }
      }),
      (e.prototype.notifyComplete = function (r) {
        (this.active -= 1) === 0 && this.destination.complete();
      }),
      (e.prototype.notifyNext = function (r, n, i) {
        var s = this.values,
          o = s[i],
          a = this.toRespond
            ? o === th
              ? --this.toRespond
              : this.toRespond
            : 0;
        (s[i] = n),
          a === 0 &&
            (this.resultSelector
              ? this._tryResultSelector(s)
              : this.destination.next(s.slice()));
      }),
      (e.prototype._tryResultSelector = function (r) {
        var n;
        try {
          n = this.resultSelector.apply(this, r);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        this.destination.next(n);
      }),
      e
    );
  })(Rn);
function V3(t, e) {
  return new ue(function (r) {
    var n = new Ke();
    return (
      n.add(
        e.schedule(function () {
          var i = t[Ai]();
          n.add(
            i.subscribe({
              next: function (s) {
                n.add(
                  e.schedule(function () {
                    return r.next(s);
                  })
                );
              },
              error: function (s) {
                n.add(
                  e.schedule(function () {
                    return r.error(s);
                  })
                );
              },
              complete: function () {
                n.add(
                  e.schedule(function () {
                    return r.complete();
                  })
                );
              },
            })
          );
        })
      ),
      n
    );
  });
}
function U3(t, e) {
  return new ue(function (r) {
    var n = new Ke();
    return (
      n.add(
        e.schedule(function () {
          return t.then(
            function (i) {
              n.add(
                e.schedule(function () {
                  r.next(i),
                    n.add(
                      e.schedule(function () {
                        return r.complete();
                      })
                    );
                })
              );
            },
            function (i) {
              n.add(
                e.schedule(function () {
                  return r.error(i);
                })
              );
            }
          );
        })
      ),
      n
    );
  });
}
function z3(t, e) {
  if (!t) throw new Error("Iterable cannot be null");
  return new ue(function (r) {
    var n = new Ke(),
      i;
    return (
      n.add(function () {
        i && typeof i.return == "function" && i.return();
      }),
      n.add(
        e.schedule(function () {
          (i = t[Br]()),
            n.add(
              e.schedule(function () {
                if (!r.closed) {
                  var s, o;
                  try {
                    var a = i.next();
                    (s = a.value), (o = a.done);
                  } catch (c) {
                    r.error(c);
                    return;
                  }
                  o ? r.complete() : (r.next(s), this.schedule());
                }
              })
            );
        })
      ),
      n
    );
  });
}
function q3(t) {
  return t && typeof t[Ai] == "function";
}
function G3(t) {
  return t && typeof t[Br] == "function";
}
function Qp(t, e) {
  if (t != null) {
    if (q3(t)) return V3(t, e);
    if (Zp(t)) return U3(t, e);
    if (Jp(t)) return Nc(t, e);
    if (G3(t) || typeof t == "string") return z3(t, e);
  }
  throw new TypeError(((t !== null && typeof t) || t) + " is not observable");
}
function Er(t, e) {
  return e ? Qp(t, e) : t instanceof ue ? t : new ue(rs(t));
}
var Xe = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return (n.parent = r), n;
    }
    return (
      (e.prototype._next = function (r) {
        this.parent.notifyNext(r);
      }),
      (e.prototype._error = function (r) {
        this.parent.notifyError(r), this.unsubscribe();
      }),
      (e.prototype._complete = function () {
        this.parent.notifyComplete(), this.unsubscribe();
      }),
      e
    );
  })(X),
  et = (function (t) {
    F.__extends(e, t);
    function e() {
      return (t !== null && t.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.notifyNext = function (r) {
        this.destination.next(r);
      }),
      (e.prototype.notifyError = function (r) {
        this.destination.error(r);
      }),
      (e.prototype.notifyComplete = function () {
        this.destination.complete();
      }),
      e
    );
  })(X);
function tt(t, e) {
  if (!e.closed) {
    if (t instanceof ue) return t.subscribe(e);
    var r;
    try {
      r = rs(t)(e);
    } catch (n) {
      e.error(n);
    }
    return r;
  }
}
function mn(t, e, r) {
  return (
    r === void 0 && (r = Number.POSITIVE_INFINITY),
    typeof e == "function"
      ? function (n) {
          return n.pipe(
            mn(function (i, s) {
              return Er(t(i, s)).pipe(
                Wt(function (o, a) {
                  return e(i, o, s, a);
                })
              );
            }, r)
          );
        }
      : (typeof e == "number" && (r = e),
        function (n) {
          return n.lift(new J3(t, r));
        })
  );
}
var J3 = (function () {
    function t(e, r) {
      r === void 0 && (r = Number.POSITIVE_INFINITY),
        (this.project = e),
        (this.concurrent = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new Z3(e, this.project, this.concurrent));
      }),
      t
    );
  })(),
  Z3 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      i === void 0 && (i = Number.POSITIVE_INFINITY);
      var s = t.call(this, r) || this;
      return (
        (s.project = n),
        (s.concurrent = i),
        (s.hasCompleted = !1),
        (s.buffer = []),
        (s.active = 0),
        (s.index = 0),
        s
      );
    }
    return (
      (e.prototype._next = function (r) {
        this.active < this.concurrent ? this._tryNext(r) : this.buffer.push(r);
      }),
      (e.prototype._tryNext = function (r) {
        var n,
          i = this.index++;
        try {
          n = this.project(r, i);
        } catch (s) {
          this.destination.error(s);
          return;
        }
        this.active++, this._innerSub(n);
      }),
      (e.prototype._innerSub = function (r) {
        var n = new Xe(this),
          i = this.destination;
        i.add(n);
        var s = tt(r, n);
        s !== n && i.add(s);
      }),
      (e.prototype._complete = function () {
        (this.hasCompleted = !0),
          this.active === 0 &&
            this.buffer.length === 0 &&
            this.destination.complete(),
          this.unsubscribe();
      }),
      (e.prototype.notifyNext = function (r) {
        this.destination.next(r);
      }),
      (e.prototype.notifyComplete = function () {
        var r = this.buffer;
        this.active--,
          r.length > 0
            ? this._next(r.shift())
            : this.active === 0 &&
              this.hasCompleted &&
              this.destination.complete();
      }),
      e
    );
  })(et),
  Q3 = mn;
function Dc(t) {
  return t === void 0 && (t = Number.POSITIVE_INFINITY), mn(jr, t);
}
function Yp() {
  return Dc(1);
}
function ns() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return Yp()(Zo.apply(void 0, t));
}
function jc(t) {
  return new ue(function (e) {
    var r;
    try {
      r = t();
    } catch (i) {
      e.error(i);
      return;
    }
    var n = r ? Er(r) : ki();
    return n.subscribe(e);
  });
}
function Y3() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  if (t.length === 1) {
    var r = t[0];
    if (St(r)) return Hs(r, null);
    if (kc(r) && Object.getPrototypeOf(r) === Object.prototype) {
      var n = Object.keys(r);
      return Hs(
        n.map(function (s) {
          return r[s];
        }),
        n
      );
    }
  }
  if (typeof t[t.length - 1] == "function") {
    var i = t.pop();
    return (
      (t = t.length === 1 && St(t[0]) ? t[0] : t),
      Hs(t, null).pipe(
        Wt(function (s) {
          return i.apply(void 0, s);
        })
      )
    );
  }
  return Hs(t, null);
}
function Hs(t, e) {
  return new ue(function (r) {
    var n = t.length;
    if (n === 0) {
      r.complete();
      return;
    }
    for (
      var i = new Array(n),
        s = 0,
        o = 0,
        a = function (f) {
          var d = Er(t[f]),
            p = !1;
          r.add(
            d.subscribe({
              next: function (b) {
                p || ((p = !0), o++), (i[f] = b);
              },
              error: function (b) {
                return r.error(b);
              },
              complete: function () {
                s++,
                  (s === n || !p) &&
                    (o === n &&
                      r.next(
                        e
                          ? e.reduce(function (b, E, R) {
                              return (b[E] = i[R]), b;
                            }, {})
                          : i
                      ),
                    r.complete());
              },
            })
          );
        },
        c = 0;
      c < n;
      c++
    )
      a(c);
  });
}
function Kp(t, e, r, n) {
  return (
    hi(r) && ((n = r), (r = void 0)),
    n
      ? Kp(t, e, r).pipe(
          Wt(function (i) {
            return St(i) ? n.apply(void 0, i) : n(i);
          })
        )
      : new ue(function (i) {
          function s(o) {
            arguments.length > 1
              ? i.next(Array.prototype.slice.call(arguments))
              : i.next(o);
          }
          Xp(t, e, s, i, r);
        })
  );
}
function Xp(t, e, r, n, i) {
  var s;
  if (e4(t)) {
    var o = t;
    t.addEventListener(e, r, i),
      (s = function () {
        return o.removeEventListener(e, r, i);
      });
  } else if (X3(t)) {
    var a = t;
    t.on(e, r),
      (s = function () {
        return a.off(e, r);
      });
  } else if (K3(t)) {
    var c = t;
    t.addListener(e, r),
      (s = function () {
        return c.removeListener(e, r);
      });
  } else if (t && t.length)
    for (var f = 0, d = t.length; f < d; f++) Xp(t[f], e, r, n, i);
  else throw new TypeError("Invalid event target");
  n.add(s);
}
function K3(t) {
  return (
    t &&
    typeof t.addListener == "function" &&
    typeof t.removeListener == "function"
  );
}
function X3(t) {
  return t && typeof t.on == "function" && typeof t.off == "function";
}
function e4(t) {
  return (
    t &&
    typeof t.addEventListener == "function" &&
    typeof t.removeEventListener == "function"
  );
}
function e0(t, e, r) {
  return r
    ? e0(t, e).pipe(
        Wt(function (n) {
          return St(n) ? r.apply(void 0, n) : r(n);
        })
      )
    : new ue(function (n) {
        var i = function () {
            for (var o = [], a = 0; a < arguments.length; a++)
              o[a] = arguments[a];
            return n.next(o.length === 1 ? o[0] : o);
          },
          s;
        try {
          s = t(i);
        } catch (o) {
          n.error(o);
          return;
        }
        if (hi(e))
          return function () {
            return e(i, s);
          };
      });
}
function t4(t, e, r, n, i) {
  var s, o;
  if (arguments.length == 1) {
    var a = t;
    (o = a.initialState),
      (e = a.condition),
      (r = a.iterate),
      (s = a.resultSelector || jr),
      (i = a.scheduler);
  } else
    n === void 0 || kt(n) ? ((o = t), (s = jr), (i = n)) : ((o = t), (s = n));
  return new ue(function (c) {
    var f = o;
    if (i)
      return i.schedule(r4, 0, {
        subscriber: c,
        iterate: r,
        condition: e,
        resultSelector: s,
        state: f,
      });
    do {
      if (e) {
        var d = void 0;
        try {
          d = e(f);
        } catch (b) {
          c.error(b);
          return;
        }
        if (!d) {
          c.complete();
          break;
        }
      }
      var p = void 0;
      try {
        p = s(f);
      } catch (b) {
        c.error(b);
        return;
      }
      if ((c.next(p), c.closed)) break;
      try {
        f = r(f);
      } catch (b) {
        c.error(b);
        return;
      }
    } while (!0);
  });
}
function r4(t) {
  var e = t.subscriber,
    r = t.condition;
  if (!e.closed) {
    if (t.needIterate)
      try {
        t.state = t.iterate(t.state);
      } catch (s) {
        e.error(s);
        return;
      }
    else t.needIterate = !0;
    if (r) {
      var n = void 0;
      try {
        n = r(t.state);
      } catch (s) {
        e.error(s);
        return;
      }
      if (!n) {
        e.complete();
        return;
      }
      if (e.closed) return;
    }
    var i;
    try {
      i = t.resultSelector(t.state);
    } catch (s) {
      e.error(s);
      return;
    }
    if (!e.closed && (e.next(i), !e.closed)) return this.schedule(t);
  }
}
function n4(t, e, r) {
  return (
    e === void 0 && (e = di),
    r === void 0 && (r = di),
    jc(function () {
      return t() ? e : r;
    })
  );
}
function gi(t) {
  return !St(t) && t - parseFloat(t) + 1 >= 0;
}
function i4(t, e) {
  return (
    t === void 0 && (t = 0),
    e === void 0 && (e = Et),
    (!gi(t) || t < 0) && (t = 0),
    (!e || typeof e.schedule != "function") && (e = Et),
    new ue(function (r) {
      return (
        r.add(e.schedule(s4, t, { subscriber: r, counter: 0, period: t })), r
      );
    })
  );
}
function s4(t) {
  var e = t.subscriber,
    r = t.counter,
    n = t.period;
  e.next(r), this.schedule({ subscriber: e, counter: r + 1, period: n }, n);
}
function t0() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = Number.POSITIVE_INFINITY,
    n = null,
    i = t[t.length - 1];
  return (
    kt(i)
      ? ((n = t.pop()),
        t.length > 1 && typeof t[t.length - 1] == "number" && (r = t.pop()))
      : typeof i == "number" && (r = t.pop()),
    n === null && t.length === 1 && t[0] instanceof ue ? t[0] : Dc(r)(Cs(t, n))
  );
}
var r0 = new ue(sr);
function o4() {
  return r0;
}
function Du() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  if (t.length === 0) return di;
  var r = t[0],
    n = t.slice(1);
  return t.length === 1 && St(r)
    ? Du.apply(void 0, r)
    : new ue(function (i) {
        var s = function () {
          return i.add(Du.apply(void 0, n).subscribe(i));
        };
        return Er(r).subscribe({
          next: function (o) {
            i.next(o);
          },
          error: s,
          complete: s,
        });
      });
}
function a4(t, e) {
  return e
    ? new ue(function (r) {
        var n = Object.keys(t),
          i = new Ke();
        return (
          i.add(
            e.schedule(u4, 0, {
              keys: n,
              index: 0,
              subscriber: r,
              subscription: i,
              obj: t,
            })
          ),
          i
        );
      })
    : new ue(function (r) {
        for (var n = Object.keys(t), i = 0; i < n.length && !r.closed; i++) {
          var s = n[i];
          t.hasOwnProperty(s) && r.next([s, t[s]]);
        }
        r.complete();
      });
}
function u4(t) {
  var e = t.keys,
    r = t.index,
    n = t.subscriber,
    i = t.subscription,
    s = t.obj;
  if (!n.closed)
    if (r < e.length) {
      var o = e[r];
      n.next([o, s[o]]),
        i.add(
          this.schedule({
            keys: e,
            index: r + 1,
            subscriber: n,
            subscription: i,
            obj: s,
          })
        );
    } else n.complete();
}
function n0(t, e) {
  function r() {
    return !r.pred.apply(r.thisArg, arguments);
  }
  return (r.pred = t), (r.thisArg = e), r;
}
function Fr(t, e) {
  return function (n) {
    return n.lift(new c4(t, e));
  };
}
var c4 = (function () {
    function t(e, r) {
      (this.predicate = e), (this.thisArg = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new l4(e, this.predicate, this.thisArg));
      }),
      t
    );
  })(),
  l4 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.predicate = n), (s.thisArg = i), (s.count = 0), s;
    }
    return (
      (e.prototype._next = function (r) {
        var n;
        try {
          n = this.predicate.call(this.thisArg, r, this.count++);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        n && this.destination.next(r);
      }),
      e
    );
  })(X);
function f4(t, e, r) {
  return [Fr(e, r)(new ue(rs(t))), Fr(n0(e, r))(new ue(rs(t)))];
}
function i0() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  if (t.length === 1)
    if (St(t[0])) t = t[0];
    else return t[0];
  return Cs(t, void 0).lift(new h4());
}
var h4 = (function () {
    function t() {}
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new d4(e));
      }),
      t
    );
  })(),
  d4 = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return (n.hasFirst = !1), (n.observables = []), (n.subscriptions = []), n;
    }
    return (
      (e.prototype._next = function (r) {
        this.observables.push(r);
      }),
      (e.prototype._complete = function () {
        var r = this.observables,
          n = r.length;
        if (n === 0) this.destination.complete();
        else {
          for (var i = 0; i < n && !this.hasFirst; i++) {
            var s = r[i],
              o = wr(this, s, void 0, i);
            this.subscriptions && this.subscriptions.push(o), this.add(o);
          }
          this.observables = null;
        }
      }),
      (e.prototype.notifyNext = function (r, n, i) {
        if (!this.hasFirst) {
          this.hasFirst = !0;
          for (var s = 0; s < this.subscriptions.length; s++)
            if (s !== i) {
              var o = this.subscriptions[s];
              o.unsubscribe(), this.remove(o);
            }
          this.subscriptions = null;
        }
        this.destination.next(n);
      }),
      e
    );
  })(Rn);
function p4(t, e, r) {
  return (
    t === void 0 && (t = 0),
    new ue(function (n) {
      e === void 0 && ((e = t), (t = 0));
      var i = 0,
        s = t;
      if (r)
        return r.schedule(g4, 0, {
          index: i,
          count: e,
          start: t,
          subscriber: n,
        });
      do {
        if (i++ >= e) {
          n.complete();
          break;
        }
        if ((n.next(s++), n.closed)) break;
      } while (!0);
    })
  );
}
function g4(t) {
  var e = t.start,
    r = t.index,
    n = t.count,
    i = t.subscriber;
  if (r >= n) {
    i.complete();
    return;
  }
  i.next(e),
    !i.closed && ((t.index = r + 1), (t.start = e + 1), this.schedule(t));
}
function s0(t, e, r) {
  t === void 0 && (t = 0);
  var n = -1;
  return (
    gi(e) ? (n = (Number(e) < 1 && 1) || Number(e)) : kt(e) && (r = e),
    kt(r) || (r = Et),
    new ue(function (i) {
      var s = gi(t) ? t : +t - r.now();
      return r.schedule(v4, s, { index: 0, period: n, subscriber: i });
    })
  );
}
function v4(t) {
  var e = t.index,
    r = t.period,
    n = t.subscriber;
  if ((n.next(e), !n.closed)) {
    if (r === -1) return n.complete();
    (t.index = e + 1), this.schedule(t, r);
  }
}
function b4(t, e) {
  return new ue(function (r) {
    var n;
    try {
      n = t();
    } catch (a) {
      r.error(a);
      return;
    }
    var i;
    try {
      i = e(n);
    } catch (a) {
      r.error(a);
      return;
    }
    var s = i ? Er(i) : di,
      o = s.subscribe(r);
    return function () {
      o.unsubscribe(), n && n.unsubscribe();
    };
  });
}
function o0() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = t[t.length - 1];
  return typeof r == "function" && t.pop(), Cs(t, void 0).lift(new a0(r));
}
var a0 = (function () {
    function t(e) {
      this.resultSelector = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new y4(e, this.resultSelector));
      }),
      t
    );
  })(),
  y4 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.resultSelector = n),
        (s.iterators = []),
        (s.active = 0),
        (s.resultSelector = typeof n == "function" ? n : void 0),
        s
      );
    }
    return (
      (e.prototype._next = function (r) {
        var n = this.iterators;
        St(r)
          ? n.push(new _4(r))
          : typeof r[Br] == "function"
          ? n.push(new m4(r[Br]()))
          : n.push(new w4(this.destination, this, r));
      }),
      (e.prototype._complete = function () {
        var r = this.iterators,
          n = r.length;
        if ((this.unsubscribe(), n === 0)) {
          this.destination.complete();
          return;
        }
        this.active = n;
        for (var i = 0; i < n; i++) {
          var s = r[i];
          if (s.stillUnsubscribed) {
            var o = this.destination;
            o.add(s.subscribe());
          } else this.active--;
        }
      }),
      (e.prototype.notifyInactive = function () {
        this.active--, this.active === 0 && this.destination.complete();
      }),
      (e.prototype.checkIterators = function () {
        for (
          var r = this.iterators, n = r.length, i = this.destination, s = 0;
          s < n;
          s++
        ) {
          var o = r[s];
          if (typeof o.hasValue == "function" && !o.hasValue()) return;
        }
        for (var a = !1, c = [], s = 0; s < n; s++) {
          var o = r[s],
            f = o.next();
          if ((o.hasCompleted() && (a = !0), f.done)) {
            i.complete();
            return;
          }
          c.push(f.value);
        }
        this.resultSelector ? this._tryresultSelector(c) : i.next(c),
          a && i.complete();
      }),
      (e.prototype._tryresultSelector = function (r) {
        var n;
        try {
          n = this.resultSelector.apply(this, r);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        this.destination.next(n);
      }),
      e
    );
  })(X),
  m4 = (function () {
    function t(e) {
      (this.iterator = e), (this.nextResult = e.next());
    }
    return (
      (t.prototype.hasValue = function () {
        return !0;
      }),
      (t.prototype.next = function () {
        var e = this.nextResult;
        return (this.nextResult = this.iterator.next()), e;
      }),
      (t.prototype.hasCompleted = function () {
        var e = this.nextResult;
        return Boolean(e && e.done);
      }),
      t
    );
  })(),
  _4 = (function () {
    function t(e) {
      (this.array = e),
        (this.index = 0),
        (this.length = 0),
        (this.length = e.length);
    }
    return (
      (t.prototype[Br] = function () {
        return this;
      }),
      (t.prototype.next = function (e) {
        var r = this.index++,
          n = this.array;
        return r < this.length
          ? { value: n[r], done: !1 }
          : { value: null, done: !0 };
      }),
      (t.prototype.hasValue = function () {
        return this.array.length > this.index;
      }),
      (t.prototype.hasCompleted = function () {
        return this.array.length === this.index;
      }),
      t
    );
  })(),
  w4 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.parent = n),
        (s.observable = i),
        (s.stillUnsubscribed = !0),
        (s.buffer = []),
        (s.isComplete = !1),
        s
      );
    }
    return (
      (e.prototype[Br] = function () {
        return this;
      }),
      (e.prototype.next = function () {
        var r = this.buffer;
        return r.length === 0 && this.isComplete
          ? { value: null, done: !0 }
          : { value: r.shift(), done: !1 };
      }),
      (e.prototype.hasValue = function () {
        return this.buffer.length > 0;
      }),
      (e.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
      }),
      (e.prototype.notifyComplete = function () {
        this.buffer.length > 0
          ? ((this.isComplete = !0), this.parent.notifyInactive())
          : this.destination.complete();
      }),
      (e.prototype.notifyNext = function (r) {
        this.buffer.push(r), this.parent.checkIterators();
      }),
      (e.prototype.subscribe = function () {
        return tt(this.observable, new Xe(this));
      }),
      e
    );
  })(et);
const S4 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ArgumentOutOfRangeError: pi,
        AsyncSubject: Ti,
        BehaviorSubject: $p,
        ConnectableObservable: Pp,
        EMPTY: di,
        EmptyError: Rs,
        GroupedObservable: Nu,
        NEVER: r0,
        Notification: mr,
        get NotificationKind() {
          return Pu;
        },
        ObjectUnsubscribedError: kr,
        Observable: ue,
        ReplaySubject: Pc,
        Scheduler: Lu,
        Subject: ft,
        Subscriber: X,
        Subscription: Ke,
        TimeoutError: zp,
        UnsubscriptionError: Ji,
        VirtualAction: Up,
        VirtualTimeScheduler: M3,
        animationFrame: x3,
        animationFrameScheduler: Vp,
        asap: Js,
        asapScheduler: Hp,
        async: Et,
        asyncScheduler: Wp,
        bindCallback: qp,
        bindNodeCallback: Gp,
        combineLatest: H3,
        concat: ns,
        config: $t,
        defer: jc,
        empty: ki,
        forkJoin: Y3,
        from: Er,
        fromEvent: Kp,
        fromEventPattern: e0,
        generate: t4,
        identity: jr,
        iif: n4,
        interval: i4,
        isObservable: C3,
        merge: t0,
        never: o4,
        noop: sr,
        observable: Ai,
        of: Zo,
        onErrorResumeNext: Du,
        pairs: a4,
        partition: f4,
        pipe: Ou,
        queue: jp,
        queueScheduler: Dp,
        race: i0,
        range: p4,
        scheduled: Qp,
        throwError: Lc,
        timer: s0,
        using: b4,
        zip: o0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Qo = mi(S4);
var Yo = {};
function u0(t) {
  var e,
    r,
    n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = u0(t[e])) && (n && (n += " "), (n += r));
    else for (e in t) t[e] && (n && (n += " "), (n += e));
  return n;
}
function rh() {
  for (var t, e, r = 0, n = ""; r < arguments.length; )
    (t = arguments[r++]) && (e = u0(t)) && (n && (n += " "), (n += e));
  return n;
}
const E4 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, clsx: rh, default: rh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ko = mi(E4);
var Sr,
  we,
  au,
  nh,
  vi = 0,
  c0 = [],
  Zs = [],
  ih = se.__b,
  sh = se.__r,
  oh = se.diffed,
  ah = se.__c,
  uh = se.unmount;
function In(t, e) {
  se.__h && se.__h(we, t, vi || e), (vi = 0);
  var r = we.__H || (we.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({ __V: Zs }), r.__[t];
}
function l0(t) {
  return (vi = 1), f0(d0, t);
}
function f0(t, e, r) {
  var n = In(Sr++, 2);
  if (
    ((n.t = t),
    !n.__c &&
      ((n.__ = [
        r ? r(e) : d0(void 0, e),
        function (a) {
          var c = n.__N ? n.__N[0] : n.__[0],
            f = n.t(c, a);
          c !== f && ((n.__N = [f, n.__[1]]), n.__c.setState({}));
        },
      ]),
      (n.__c = we),
      !we.u))
  ) {
    var i = function (a, c, f) {
      if (!n.__c.__H) return !0;
      var d = n.__c.__H.__.filter(function (b) {
        return b.__c;
      });
      if (
        d.every(function (b) {
          return !b.__N;
        })
      )
        return !s || s.call(this, a, c, f);
      var p = !1;
      return (
        d.forEach(function (b) {
          if (b.__N) {
            var E = b.__[0];
            (b.__ = b.__N), (b.__N = void 0), E !== b.__[0] && (p = !0);
          }
        }),
        !(!p && n.__c.props === a) && (!s || s.call(this, a, c, f))
      );
    };
    we.u = !0;
    var s = we.shouldComponentUpdate,
      o = we.componentWillUpdate;
    (we.componentWillUpdate = function (a, c, f) {
      if (this.__e) {
        var d = s;
        (s = void 0), i(a, c, f), (s = d);
      }
      o && o.call(this, a, c, f);
    }),
      (we.shouldComponentUpdate = i);
  }
  return n.__N || n.__;
}
function x4(t, e) {
  var r = In(Sr++, 3);
  !se.__s && Fc(r.__H, e) && ((r.__ = t), (r.i = e), we.__H.__h.push(r));
}
function h0(t, e) {
  var r = In(Sr++, 4);
  !se.__s && Fc(r.__H, e) && ((r.__ = t), (r.i = e), we.__h.push(r));
}
function M4(t) {
  return (
    (vi = 5),
    Bc(function () {
      return { current: t };
    }, [])
  );
}
function C4(t, e, r) {
  (vi = 6),
    h0(
      function () {
        return typeof t == "function"
          ? (t(e()),
            function () {
              return t(null);
            })
          : t
          ? ((t.current = e()),
            function () {
              return (t.current = null);
            })
          : void 0;
      },
      r == null ? r : r.concat(t)
    );
}
function Bc(t, e) {
  var r = In(Sr++, 7);
  return Fc(r.__H, e) ? ((r.__V = t()), (r.i = e), (r.__h = t), r.__V) : r.__;
}
function R4(t, e) {
  return (
    (vi = 8),
    Bc(function () {
      return t;
    }, e)
  );
}
function I4(t) {
  var e = we.context[t.__c],
    r = In(Sr++, 9);
  return (
    (r.c = t),
    e ? (r.__ == null && ((r.__ = !0), e.sub(we)), e.props.value) : t.__
  );
}
function A4(t, e) {
  se.useDebugValue && se.useDebugValue(e ? e(t) : t);
}
function k4(t) {
  var e = In(Sr++, 10),
    r = l0();
  return (
    (e.__ = t),
    we.componentDidCatch ||
      (we.componentDidCatch = function (n, i) {
        e.__ && e.__(n, i), r[1](n);
      }),
    [
      r[0],
      function () {
        r[1](void 0);
      },
    ]
  );
}
function T4() {
  var t = In(Sr++, 11);
  if (!t.__) {
    for (var e = we.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var r = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + r[0] + "-" + r[1]++;
  }
  return t.__;
}
function O4() {
  for (var t; (t = c0.shift()); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Qs), t.__H.__h.forEach(ju), (t.__H.__h = []);
      } catch (e) {
        (t.__H.__h = []), se.__e(e, t.__v);
      }
}
(se.__b = function (t) {
  (we = null), ih && ih(t);
}),
  (se.__r = function (t) {
    sh && sh(t), (Sr = 0);
    var e = (we = t.__c).__H;
    e &&
      (au === we
        ? ((e.__h = []),
          (we.__h = []),
          e.__.forEach(function (r) {
            r.__N && (r.__ = r.__N), (r.__V = Zs), (r.__N = r.i = void 0);
          }))
        : (e.__h.forEach(Qs), e.__h.forEach(ju), (e.__h = []), (Sr = 0))),
      (au = we);
  }),
  (se.diffed = function (t) {
    oh && oh(t);
    var e = t.__c;
    e &&
      e.__H &&
      (e.__H.__h.length &&
        ((c0.push(e) !== 1 && nh === se.requestAnimationFrame) ||
          ((nh = se.requestAnimationFrame) || N4)(O4)),
      e.__H.__.forEach(function (r) {
        r.i && (r.__H = r.i),
          r.__V !== Zs && (r.__ = r.__V),
          (r.i = void 0),
          (r.__V = Zs);
      })),
      (au = we = null);
  }),
  (se.__c = function (t, e) {
    e.some(function (r) {
      try {
        r.__h.forEach(Qs),
          (r.__h = r.__h.filter(function (n) {
            return !n.__ || ju(n);
          }));
      } catch (n) {
        e.some(function (i) {
          i.__h && (i.__h = []);
        }),
          (e = []),
          se.__e(n, r.__v);
      }
    }),
      ah && ah(t, e);
  }),
  (se.unmount = function (t) {
    uh && uh(t);
    var e,
      r = t.__c;
    r &&
      r.__H &&
      (r.__H.__.forEach(function (n) {
        try {
          Qs(n);
        } catch (i) {
          e = i;
        }
      }),
      (r.__H = void 0),
      e && se.__e(e, r.__v));
  });
var ch = typeof requestAnimationFrame == "function";
function N4(t) {
  var e,
    r = function () {
      clearTimeout(n), ch && cancelAnimationFrame(e), setTimeout(t);
    },
    n = setTimeout(r, 100);
  ch && (e = requestAnimationFrame(r));
}
function Qs(t) {
  var e = we,
    r = t.__c;
  typeof r == "function" && ((t.__c = void 0), r()), (we = e);
}
function ju(t) {
  var e = we;
  (t.__c = t.__()), (we = e);
}
function Fc(t, e) {
  return (
    !t ||
    t.length !== e.length ||
    e.some(function (r, n) {
      return r !== t[n];
    })
  );
}
function d0(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const L4 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        useCallback: R4,
        useContext: I4,
        useDebugValue: A4,
        useEffect: x4,
        useErrorBoundary: k4,
        useId: T4,
        useImperativeHandle: C4,
        useLayoutEffect: h0,
        useMemo: Bc,
        useReducer: f0,
        useRef: M4,
        useState: l0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Is = mi(L4);
var lr = {},
  Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.CloseIcon = void 0;
const lh = Tt;
function P4(t) {
  return (0, lh.h)(
    "svg",
    Object.assign(
      {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      t
    ),
    (0, lh.h)("path", {
      d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z",
    })
  );
}
Xo.CloseIcon = P4;
var Hc = {};
Object.defineProperty(Hc, "__esModule", { value: !0 });
Hc.default =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
var Wc = {};
Object.defineProperty(Wc, "__esModule", { value: !0 });
Wc.default =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==";
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.QRCodeIcon = void 0;
const rr = Tt;
function $4(t) {
  return (0, rr.h)(
    "svg",
    Object.assign(
      {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        xmlns: "http://www.w3.org/2000/svg",
      },
      t
    ),
    (0, rr.h)("path", {
      d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z",
    }),
    (0, rr.h)("path", {
      d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z",
    }),
    (0, rr.h)("path", {
      d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z",
    }),
    (0, rr.h)("path", {
      d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z",
    }),
    (0, rr.h)("path", {
      d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z",
    }),
    (0, rr.h)("path", {
      d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z",
    }),
    (0, rr.h)("path", {
      d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z",
    }),
    (0, rr.h)("path", {
      d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z",
    }),
    (0, rr.h)("path", {
      d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z",
    })
  );
}
ea.QRCodeIcon = $4;
var Vc = {};
Object.defineProperty(Vc, "__esModule", { value: !0 });
const D4 = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>
        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>
    </svg>
`;
Vc.default = D4;
var Uc = {};
Object.defineProperty(Uc, "__esModule", { value: !0 });
Uc.default = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
    </svg>
`;
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.StatusDotIcon = void 0;
const fh = Tt;
function j4(t) {
  return (0, fh.h)(
    "svg",
    Object.assign(
      {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        xmlns: "http://www.w3.org/2000/svg",
      },
      t
    ),
    (0, fh.h)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z",
    })
  );
}
ta.StatusDotIcon = j4;
var ra = {};
function p0(t) {
  (this.mode = It.MODE_8BIT_BYTE), (this.data = t), (this.parsedData = []);
  for (var e = 0, r = this.data.length; e < r; e++) {
    var n = [],
      i = this.data.charCodeAt(e);
    i > 65536
      ? ((n[0] = 240 | ((i & 1835008) >>> 18)),
        (n[1] = 128 | ((i & 258048) >>> 12)),
        (n[2] = 128 | ((i & 4032) >>> 6)),
        (n[3] = 128 | (i & 63)))
      : i > 2048
      ? ((n[0] = 224 | ((i & 61440) >>> 12)),
        (n[1] = 128 | ((i & 4032) >>> 6)),
        (n[2] = 128 | (i & 63)))
      : i > 128
      ? ((n[0] = 192 | ((i & 1984) >>> 6)), (n[1] = 128 | (i & 63)))
      : (n[0] = i),
      this.parsedData.push(n);
  }
  (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
    this.parsedData.length != this.data.length &&
      (this.parsedData.unshift(191),
      this.parsedData.unshift(187),
      this.parsedData.unshift(239));
}
p0.prototype = {
  getLength: function (t) {
    return this.parsedData.length;
  },
  write: function (t) {
    for (var e = 0, r = this.parsedData.length; e < r; e++)
      t.put(this.parsedData[e], 8);
  },
};
function fr(t, e) {
  (this.typeNumber = t),
    (this.errorCorrectLevel = e),
    (this.modules = null),
    (this.moduleCount = 0),
    (this.dataCache = null),
    (this.dataList = []);
}
fr.prototype = {
  addData: function (t) {
    var e = new p0(t);
    this.dataList.push(e), (this.dataCache = null);
  },
  isDark: function (t, e) {
    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
      throw new Error(t + "," + e);
    return this.modules[t][e];
  },
  getModuleCount: function () {
    return this.moduleCount;
  },
  make: function () {
    this.makeImpl(!1, this.getBestMaskPattern());
  },
  makeImpl: function (t, e) {
    (this.moduleCount = this.typeNumber * 4 + 17),
      (this.modules = new Array(this.moduleCount));
    for (var r = 0; r < this.moduleCount; r++) {
      this.modules[r] = new Array(this.moduleCount);
      for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null;
    }
    this.setupPositionProbePattern(0, 0),
      this.setupPositionProbePattern(this.moduleCount - 7, 0),
      this.setupPositionProbePattern(0, this.moduleCount - 7),
      this.setupPositionAdjustPattern(),
      this.setupTimingPattern(),
      this.setupTypeInfo(t, e),
      this.typeNumber >= 7 && this.setupTypeNumber(t),
      this.dataCache == null &&
        (this.dataCache = fr.createData(
          this.typeNumber,
          this.errorCorrectLevel,
          this.dataList
        )),
      this.mapData(this.dataCache, e);
  },
  setupPositionProbePattern: function (t, e) {
    for (var r = -1; r <= 7; r++)
      if (!(t + r <= -1 || this.moduleCount <= t + r))
        for (var n = -1; n <= 7; n++)
          e + n <= -1 ||
            this.moduleCount <= e + n ||
            ((0 <= r && r <= 6 && (n == 0 || n == 6)) ||
            (0 <= n && n <= 6 && (r == 0 || r == 6)) ||
            (2 <= r && r <= 4 && 2 <= n && n <= 4)
              ? (this.modules[t + r][e + n] = !0)
              : (this.modules[t + r][e + n] = !1));
  },
  getBestMaskPattern: function () {
    for (var t = 0, e = 0, r = 0; r < 8; r++) {
      this.makeImpl(!0, r);
      var n = Qe.getLostPoint(this);
      (r == 0 || t > n) && ((t = n), (e = r));
    }
    return e;
  },
  createMovieClip: function (t, e, r) {
    var n = t.createEmptyMovieClip(e, r),
      i = 1;
    this.make();
    for (var s = 0; s < this.modules.length; s++)
      for (var o = s * i, a = 0; a < this.modules[s].length; a++) {
        var c = a * i,
          f = this.modules[s][a];
        f &&
          (n.beginFill(0, 100),
          n.moveTo(c, o),
          n.lineTo(c + i, o),
          n.lineTo(c + i, o + i),
          n.lineTo(c, o + i),
          n.endFill());
      }
    return n;
  },
  setupTimingPattern: function () {
    for (var t = 8; t < this.moduleCount - 8; t++)
      this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
    for (var e = 8; e < this.moduleCount - 8; e++)
      this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
  },
  setupPositionAdjustPattern: function () {
    for (
      var t = Qe.getPatternPosition(this.typeNumber), e = 0;
      e < t.length;
      e++
    )
      for (var r = 0; r < t.length; r++) {
        var n = t[e],
          i = t[r];
        if (this.modules[n][i] == null)
          for (var s = -2; s <= 2; s++)
            for (var o = -2; o <= 2; o++)
              s == -2 || s == 2 || o == -2 || o == 2 || (s == 0 && o == 0)
                ? (this.modules[n + s][i + o] = !0)
                : (this.modules[n + s][i + o] = !1);
      }
  },
  setupTypeNumber: function (t) {
    for (var e = Qe.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
      var n = !t && ((e >> r) & 1) == 1;
      this.modules[Math.floor(r / 3)][(r % 3) + this.moduleCount - 8 - 3] = n;
    }
    for (var r = 0; r < 18; r++) {
      var n = !t && ((e >> r) & 1) == 1;
      this.modules[(r % 3) + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
    }
  },
  setupTypeInfo: function (t, e) {
    for (
      var r = (this.errorCorrectLevel << 3) | e,
        n = Qe.getBCHTypeInfo(r),
        i = 0;
      i < 15;
      i++
    ) {
      var s = !t && ((n >> i) & 1) == 1;
      i < 6
        ? (this.modules[i][8] = s)
        : i < 8
        ? (this.modules[i + 1][8] = s)
        : (this.modules[this.moduleCount - 15 + i][8] = s);
    }
    for (var i = 0; i < 15; i++) {
      var s = !t && ((n >> i) & 1) == 1;
      i < 8
        ? (this.modules[8][this.moduleCount - i - 1] = s)
        : i < 9
        ? (this.modules[8][15 - i - 1 + 1] = s)
        : (this.modules[8][15 - i - 1] = s);
    }
    this.modules[this.moduleCount - 8][8] = !t;
  },
  mapData: function (t, e) {
    for (
      var r = -1,
        n = this.moduleCount - 1,
        i = 7,
        s = 0,
        o = this.moduleCount - 1;
      o > 0;
      o -= 2
    )
      for (o == 6 && o--; ; ) {
        for (var a = 0; a < 2; a++)
          if (this.modules[n][o - a] == null) {
            var c = !1;
            s < t.length && (c = ((t[s] >>> i) & 1) == 1);
            var f = Qe.getMask(e, n, o - a);
            f && (c = !c),
              (this.modules[n][o - a] = c),
              i--,
              i == -1 && (s++, (i = 7));
          }
        if (((n += r), n < 0 || this.moduleCount <= n)) {
          (n -= r), (r = -r);
          break;
        }
      }
  },
};
fr.PAD0 = 236;
fr.PAD1 = 17;
fr.createData = function (t, e, r) {
  for (var n = ar.getRSBlocks(t, e), i = new g0(), s = 0; s < r.length; s++) {
    var o = r[s];
    i.put(o.mode, 4),
      i.put(o.getLength(), Qe.getLengthInBits(o.mode, t)),
      o.write(i);
  }
  for (var a = 0, s = 0; s < n.length; s++) a += n[s].dataCount;
  if (i.getLengthInBits() > a * 8)
    throw new Error(
      "code length overflow. (" + i.getLengthInBits() + ">" + a * 8 + ")"
    );
  for (
    i.getLengthInBits() + 4 <= a * 8 && i.put(0, 4);
    i.getLengthInBits() % 8 != 0;

  )
    i.putBit(!1);
  for (
    ;
    !(
      i.getLengthInBits() >= a * 8 ||
      (i.put(fr.PAD0, 8), i.getLengthInBits() >= a * 8)
    );

  )
    i.put(fr.PAD1, 8);
  return fr.createBytes(i, n);
};
fr.createBytes = function (t, e) {
  for (
    var r = 0,
      n = 0,
      i = 0,
      s = new Array(e.length),
      o = new Array(e.length),
      a = 0;
    a < e.length;
    a++
  ) {
    var c = e[a].dataCount,
      f = e[a].totalCount - c;
    (n = Math.max(n, c)), (i = Math.max(i, f)), (s[a] = new Array(c));
    for (var d = 0; d < s[a].length; d++) s[a][d] = 255 & t.buffer[d + r];
    r += c;
    var p = Qe.getErrorCorrectPolynomial(f),
      b = new ri(s[a], p.getLength() - 1),
      E = b.mod(p);
    o[a] = new Array(p.getLength() - 1);
    for (var d = 0; d < o[a].length; d++) {
      var R = d + E.getLength() - o[a].length;
      o[a][d] = R >= 0 ? E.get(R) : 0;
    }
  }
  for (var O = 0, d = 0; d < e.length; d++) O += e[d].totalCount;
  for (var $ = new Array(O), I = 0, d = 0; d < n; d++)
    for (var a = 0; a < e.length; a++) d < s[a].length && ($[I++] = s[a][d]);
  for (var d = 0; d < i; d++)
    for (var a = 0; a < e.length; a++) d < o[a].length && ($[I++] = o[a][d]);
  return $;
};
var It = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3,
  },
  Or = { L: 1, M: 0, Q: 3, H: 2 },
  Mr = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  },
  Qe = {
    PATTERN_POSITION_TABLE: [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170],
    ],
    G15:
      (1 << 10) |
      (1 << 8) |
      (1 << 5) |
      (1 << 4) |
      (1 << 2) |
      (1 << 1) |
      (1 << 0),
    G18:
      (1 << 12) |
      (1 << 11) |
      (1 << 10) |
      (1 << 9) |
      (1 << 8) |
      (1 << 5) |
      (1 << 2) |
      (1 << 0),
    G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
    getBCHTypeInfo: function (t) {
      for (var e = t << 10; Qe.getBCHDigit(e) - Qe.getBCHDigit(Qe.G15) >= 0; )
        e ^= Qe.G15 << (Qe.getBCHDigit(e) - Qe.getBCHDigit(Qe.G15));
      return ((t << 10) | e) ^ Qe.G15_MASK;
    },
    getBCHTypeNumber: function (t) {
      for (var e = t << 12; Qe.getBCHDigit(e) - Qe.getBCHDigit(Qe.G18) >= 0; )
        e ^= Qe.G18 << (Qe.getBCHDigit(e) - Qe.getBCHDigit(Qe.G18));
      return (t << 12) | e;
    },
    getBCHDigit: function (t) {
      for (var e = 0; t != 0; ) e++, (t >>>= 1);
      return e;
    },
    getPatternPosition: function (t) {
      return Qe.PATTERN_POSITION_TABLE[t - 1];
    },
    getMask: function (t, e, r) {
      switch (t) {
        case Mr.PATTERN000:
          return (e + r) % 2 == 0;
        case Mr.PATTERN001:
          return e % 2 == 0;
        case Mr.PATTERN010:
          return r % 3 == 0;
        case Mr.PATTERN011:
          return (e + r) % 3 == 0;
        case Mr.PATTERN100:
          return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
        case Mr.PATTERN101:
          return ((e * r) % 2) + ((e * r) % 3) == 0;
        case Mr.PATTERN110:
          return (((e * r) % 2) + ((e * r) % 3)) % 2 == 0;
        case Mr.PATTERN111:
          return (((e * r) % 3) + ((e + r) % 2)) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + t);
      }
    },
    getErrorCorrectPolynomial: function (t) {
      for (var e = new ri([1], 0), r = 0; r < t; r++)
        e = e.multiply(new ri([1, lt.gexp(r)], 0));
      return e;
    },
    getLengthInBits: function (t, e) {
      if (1 <= e && e < 10)
        switch (t) {
          case It.MODE_NUMBER:
            return 10;
          case It.MODE_ALPHA_NUM:
            return 9;
          case It.MODE_8BIT_BYTE:
            return 8;
          case It.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + t);
        }
      else if (e < 27)
        switch (t) {
          case It.MODE_NUMBER:
            return 12;
          case It.MODE_ALPHA_NUM:
            return 11;
          case It.MODE_8BIT_BYTE:
            return 16;
          case It.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + t);
        }
      else if (e < 41)
        switch (t) {
          case It.MODE_NUMBER:
            return 14;
          case It.MODE_ALPHA_NUM:
            return 13;
          case It.MODE_8BIT_BYTE:
            return 16;
          case It.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + t);
        }
      else throw new Error("type:" + e);
    },
    getLostPoint: function (t) {
      for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++)
        for (var i = 0; i < e; i++) {
          for (var s = 0, o = t.isDark(n, i), a = -1; a <= 1; a++)
            if (!(n + a < 0 || e <= n + a))
              for (var c = -1; c <= 1; c++)
                i + c < 0 ||
                  e <= i + c ||
                  (a == 0 && c == 0) ||
                  (o == t.isDark(n + a, i + c) && s++);
          s > 5 && (r += 3 + s - 5);
        }
      for (var n = 0; n < e - 1; n++)
        for (var i = 0; i < e - 1; i++) {
          var f = 0;
          t.isDark(n, i) && f++,
            t.isDark(n + 1, i) && f++,
            t.isDark(n, i + 1) && f++,
            t.isDark(n + 1, i + 1) && f++,
            (f == 0 || f == 4) && (r += 3);
        }
      for (var n = 0; n < e; n++)
        for (var i = 0; i < e - 6; i++)
          t.isDark(n, i) &&
            !t.isDark(n, i + 1) &&
            t.isDark(n, i + 2) &&
            t.isDark(n, i + 3) &&
            t.isDark(n, i + 4) &&
            !t.isDark(n, i + 5) &&
            t.isDark(n, i + 6) &&
            (r += 40);
      for (var i = 0; i < e; i++)
        for (var n = 0; n < e - 6; n++)
          t.isDark(n, i) &&
            !t.isDark(n + 1, i) &&
            t.isDark(n + 2, i) &&
            t.isDark(n + 3, i) &&
            t.isDark(n + 4, i) &&
            !t.isDark(n + 5, i) &&
            t.isDark(n + 6, i) &&
            (r += 40);
      for (var d = 0, i = 0; i < e; i++)
        for (var n = 0; n < e; n++) t.isDark(n, i) && d++;
      var p = Math.abs((100 * d) / e / e - 50) / 5;
      return (r += p * 10), r;
    },
  },
  lt = {
    glog: function (t) {
      if (t < 1) throw new Error("glog(" + t + ")");
      return lt.LOG_TABLE[t];
    },
    gexp: function (t) {
      for (; t < 0; ) t += 255;
      for (; t >= 256; ) t -= 255;
      return lt.EXP_TABLE[t];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256),
  };
for (var dt = 0; dt < 8; dt++) lt.EXP_TABLE[dt] = 1 << dt;
for (var dt = 8; dt < 256; dt++)
  lt.EXP_TABLE[dt] =
    lt.EXP_TABLE[dt - 4] ^
    lt.EXP_TABLE[dt - 5] ^
    lt.EXP_TABLE[dt - 6] ^
    lt.EXP_TABLE[dt - 8];
for (var dt = 0; dt < 255; dt++) lt.LOG_TABLE[lt.EXP_TABLE[dt]] = dt;
function ri(t, e) {
  if (t.length == null) throw new Error(t.length + "/" + e);
  for (var r = 0; r < t.length && t[r] == 0; ) r++;
  this.num = new Array(t.length - r + e);
  for (var n = 0; n < t.length - r; n++) this.num[n] = t[n + r];
}
ri.prototype = {
  get: function (t) {
    return this.num[t];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (t) {
    for (
      var e = new Array(this.getLength() + t.getLength() - 1), r = 0;
      r < this.getLength();
      r++
    )
      for (var n = 0; n < t.getLength(); n++)
        e[r + n] ^= lt.gexp(lt.glog(this.get(r)) + lt.glog(t.get(n)));
    return new ri(e, 0);
  },
  mod: function (t) {
    if (this.getLength() - t.getLength() < 0) return this;
    for (
      var e = lt.glog(this.get(0)) - lt.glog(t.get(0)),
        r = new Array(this.getLength()),
        n = 0;
      n < this.getLength();
      n++
    )
      r[n] = this.get(n);
    for (var n = 0; n < t.getLength(); n++)
      r[n] ^= lt.gexp(lt.glog(t.get(n)) + e);
    return new ri(r, 0).mod(t);
  },
};
function ar(t, e) {
  (this.totalCount = t), (this.dataCount = e);
}
ar.RS_BLOCK_TABLE = [
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16],
];
ar.getRSBlocks = function (t, e) {
  var r = ar.getRsBlockTable(t, e);
  if (r == null)
    throw new Error(
      "bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e
    );
  for (var n = r.length / 3, i = [], s = 0; s < n; s++)
    for (
      var o = r[s * 3 + 0], a = r[s * 3 + 1], c = r[s * 3 + 2], f = 0;
      f < o;
      f++
    )
      i.push(new ar(a, c));
  return i;
};
ar.getRsBlockTable = function (t, e) {
  switch (e) {
    case Or.L:
      return ar.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
    case Or.M:
      return ar.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
    case Or.Q:
      return ar.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
    case Or.H:
      return ar.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
    default:
      return;
  }
};
function g0() {
  (this.buffer = []), (this.length = 0);
}
g0.prototype = {
  get: function (t) {
    var e = Math.floor(t / 8);
    return ((this.buffer[e] >>> (7 - (t % 8))) & 1) == 1;
  },
  put: function (t, e) {
    for (var r = 0; r < e; r++) this.putBit(((t >>> (e - r - 1)) & 1) == 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (t) {
    var e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0),
      t && (this.buffer[e] |= 128 >>> this.length % 8),
      this.length++;
  },
};
var uu = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 44],
  [134, 106, 74, 58],
  [154, 122, 86, 64],
  [192, 152, 108, 84],
  [230, 180, 130, 98],
  [271, 213, 151, 119],
  [321, 251, 177, 137],
  [367, 287, 203, 155],
  [425, 331, 241, 177],
  [458, 362, 258, 194],
  [520, 412, 292, 220],
  [586, 450, 322, 250],
  [644, 504, 364, 280],
  [718, 560, 394, 310],
  [792, 624, 442, 338],
  [858, 666, 482, 382],
  [929, 711, 509, 403],
  [1003, 779, 565, 439],
  [1091, 857, 611, 461],
  [1171, 911, 661, 511],
  [1273, 997, 715, 535],
  [1367, 1059, 751, 593],
  [1465, 1125, 805, 625],
  [1528, 1190, 868, 658],
  [1628, 1264, 908, 698],
  [1732, 1370, 982, 742],
  [1840, 1452, 1030, 790],
  [1952, 1538, 1112, 842],
  [2068, 1628, 1168, 898],
  [2188, 1722, 1228, 958],
  [2303, 1809, 1283, 983],
  [2431, 1911, 1351, 1051],
  [2563, 1989, 1423, 1093],
  [2699, 2099, 1499, 1139],
  [2809, 2213, 1579, 1219],
  [2953, 2331, 1663, 1273],
];
function v0(t) {
  if (
    ((this.options = {
      padding: 4,
      width: 256,
      height: 256,
      typeNumber: 4,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
      image: { svg: "", width: 0, height: 0 },
    }),
    typeof t == "string" && (t = { content: t }),
    t)
  )
    for (var e in t) this.options[e] = t[e];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error(
      "Expected 'width' or 'height' value to be higher than zero!"
    );
  function r(c) {
    switch (c) {
      case "L":
        return Or.L;
      case "M":
        return Or.M;
      case "Q":
        return Or.Q;
      case "H":
        return Or.H;
      default:
        throw new Error("Unknwon error correction level: " + c);
    }
  }
  function n(c, f) {
    for (var d = i(c), p = 1, b = 0, E = 0, R = uu.length; E <= R; E++) {
      var O = uu[E];
      if (!O)
        throw new Error("Content too long: expected " + b + " but got " + d);
      switch (f) {
        case "L":
          b = O[0];
          break;
        case "M":
          b = O[1];
          break;
        case "Q":
          b = O[2];
          break;
        case "H":
          b = O[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + f);
      }
      if (d <= b) break;
      p++;
    }
    if (p > uu.length) throw new Error("Content too long");
    return p;
  }
  function i(c) {
    var f = encodeURI(c)
      .toString()
      .replace(/\%[0-9a-fA-F]{2}/g, "a");
    return f.length + (f.length != c ? 3 : 0);
  }
  var s = this.options.content,
    o = n(s, this.options.ecl),
    a = r(this.options.ecl);
  (this.qrcode = new fr(o, a)), this.qrcode.addData(s), this.qrcode.make();
}
v0.prototype.svg = function (t) {
  var e = this.options || {},
    r = this.qrcode.modules;
  typeof t > "u" && (t = { container: e.container || "svg" });
  for (
    var n = typeof e.pretty < "u" ? !!e.pretty : !0,
      i = n ? "  " : "",
      s = n
        ? `\r
`
        : "",
      o = e.width,
      a = e.height,
      c = r.length,
      f = o / (c + 2 * e.padding),
      d = a / (c + 2 * e.padding),
      p = typeof e.join < "u" ? !!e.join : !1,
      b = typeof e.swap < "u" ? !!e.swap : !1,
      E = typeof e.xmlDeclaration < "u" ? !!e.xmlDeclaration : !0,
      R = typeof e.predefined < "u" ? !!e.predefined : !1,
      O = R
        ? i +
          '<defs><path id="qrmodule" d="M0 0 h' +
          d +
          " v" +
          f +
          ' H0 z" style="fill:' +
          e.color +
          ';shape-rendering:crispEdges;" /></defs>' +
          s
        : "",
      $ =
        i +
        '<rect x="0" y="0" width="' +
        o +
        '" height="' +
        a +
        '" style="fill:' +
        e.background +
        ';shape-rendering:crispEdges;"/>' +
        s,
      I = "",
      k = "",
      N = 0;
    N < c;
    N++
  )
    for (var D = 0; D < c; D++) {
      var L = r[D][N];
      if (L) {
        var U = D * f + e.padding * f,
          G = N * d + e.padding * d;
        if (b) {
          var q = U;
          (U = G), (G = q);
        }
        if (p) {
          var H = f + U,
            Y = d + G;
          (U = Number.isInteger(U) ? Number(U) : U.toFixed(2)),
            (G = Number.isInteger(G) ? Number(G) : G.toFixed(2)),
            (H = Number.isInteger(H) ? Number(H) : H.toFixed(2)),
            (Y = Number.isInteger(Y) ? Number(Y) : Y.toFixed(2)),
            (k +=
              "M" +
              U +
              "," +
              G +
              " V" +
              Y +
              " H" +
              H +
              " V" +
              G +
              " H" +
              U +
              " Z ");
        } else
          R
            ? (I +=
                i +
                '<use x="' +
                U.toString() +
                '" y="' +
                G.toString() +
                '" href="#qrmodule" />' +
                s)
            : (I +=
                i +
                '<rect x="' +
                U.toString() +
                '" y="' +
                G.toString() +
                '" width="' +
                f +
                '" height="' +
                d +
                '" style="fill:' +
                e.color +
                ';shape-rendering:crispEdges;"/>' +
                s);
      }
    }
  p &&
    (I =
      i +
      '<path x="0" y="0" style="fill:' +
      e.color +
      ';shape-rendering:crispEdges;" d="' +
      k +
      '" />');
  let Q = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const w = (o * this.options.image.width) / 100,
      u = (a * this.options.image.height) / 100,
      h = o / 2 - w / 2,
      m = a / 2 - u / 2;
    (Q += `<svg x="${h}" y="${m}" width="${w}" height="${u}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`),
      (Q += this.options.image.svg + s),
      (Q += "</svg>");
  }
  var K = "";
  switch (t.container) {
    case "svg":
      E && (K += '<?xml version="1.0" standalone="yes"?>' + s),
        (K +=
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
          o +
          '" height="' +
          a +
          '">' +
          s),
        (K += O + $ + I),
        (K += Q),
        (K += "</svg>");
      break;
    case "svg-viewbox":
      E && (K += '<?xml version="1.0" standalone="yes"?>' + s),
        (K +=
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
          o +
          " " +
          a +
          '">' +
          s),
        (K += O + $ + I),
        (K += Q),
        (K += "</svg>");
      break;
    case "g":
      (K += '<g width="' + o + '" height="' + a + '">' + s),
        (K += O + $ + I),
        (K += Q),
        (K += "</g>");
      break;
    default:
      K += (O + $ + I + Q).replace(/^\s+/, "");
      break;
  }
  return K;
};
var B4 = v0,
  F4 =
    (J && J.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ra, "__esModule", { value: !0 });
ra.QRCode = void 0;
const H4 = Tt,
  hh = Is,
  W4 = F4(B4),
  V4 = (t) => {
    const [e, r] = (0, hh.useState)("");
    return (
      (0, hh.useEffect)(() => {
        var n, i;
        const s = new W4.default({
            content: t.content,
            background: t.bgColor || "#ffffff",
            color: t.fgColor || "#000000",
            container: "svg",
            ecl: "M",
            width: (n = t.width) !== null && n !== void 0 ? n : 256,
            height: (i = t.height) !== null && i !== void 0 ? i : 256,
            padding: 0,
            image: t.image,
          }),
          o = Buffer.from(s.svg(), "utf8").toString("base64");
        r(`data:image/svg+xml;base64,${o}`);
      }),
      e ? (0, H4.h)("img", { src: e, alt: "QR Code" }) : null
    );
  };
ra.QRCode = V4;
var na = {},
  zc = {};
Object.defineProperty(zc, "__esModule", { value: !0 });
zc.default =
  ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var U4 =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(na, "__esModule", { value: !0 });
na.Spinner = void 0;
const Ws = Tt,
  z4 = U4(zc),
  q4 = (t) => {
    var e;
    const r = (e = t.size) !== null && e !== void 0 ? e : 64,
      n = t.color || "#000";
    return (0, Ws.h)(
      "div",
      { class: "-cbwsdk-spinner" },
      (0, Ws.h)("style", null, z4.default),
      (0, Ws.h)(
        "svg",
        {
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          style: { width: r, height: r },
        },
        (0, Ws.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: n } })
      )
    );
  };
na.Spinner = q4;
var qc = {};
Object.defineProperty(qc, "__esModule", { value: !0 });
qc.default =
  ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var Oi =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.CoinbaseAppSteps =
  lr.CoinbaseWalletSteps =
  lr.ConnectItem =
  lr.ConnectContent =
    void 0;
const jt = Oi(Ko),
  re = Tt,
  dh = Is,
  G4 = Z,
  J4 = wi,
  Z4 = Xo,
  Q4 = Oi(Hc),
  Y4 = Oi(Wc),
  b0 = ea,
  K4 = Oi(Vc),
  X4 = Oi(Uc),
  ex = ta,
  tx = ra,
  rx = na,
  nx = Oi(qc),
  ph = {
    "coinbase-wallet-app": {
      title: "Coinbase Wallet app",
      description: "Connect with your self-custody wallet",
      icon: Y4.default,
      steps: m0,
    },
    "coinbase-app": {
      title: "Coinbase app",
      description: "Connect with your Coinbase account",
      icon: Q4.default,
      steps: _0,
    },
  },
  ix = (t) => {
    switch (t) {
      case "coinbase-app":
        return K4.default;
      case "coinbase-wallet-app":
      default:
        return X4.default;
    }
  },
  Bu = (t) => (t === "light" ? "#FFFFFF" : "#0A0B0D");
function sx(t) {
  const { theme: e } = t,
    [r, n] = (0, dh.useState)("coinbase-wallet-app"),
    i = (0, dh.useCallback)((f) => {
      n(f);
    }, []),
    s = (0, G4.createQrUrl)(
      t.sessionId,
      t.sessionSecret,
      t.linkAPIUrl,
      t.isParentConnection,
      t.version,
      t.chainId
    ),
    o = ph[r];
  if (!r) return null;
  const a = o.steps,
    c = r === "coinbase-app";
  return (0, re.h)(
    "div",
    {
      "data-testid": "connect-content",
      class: (0, jt.default)("-cbwsdk-connect-content", e),
    },
    (0, re.h)("style", null, nx.default),
    (0, re.h)(
      "div",
      { class: "-cbwsdk-connect-content-header" },
      (0, re.h)(
        "h2",
        { class: (0, jt.default)("-cbwsdk-connect-content-heading", e) },
        "Scan to connect with one of our mobile apps"
      ),
      t.onCancel &&
        (0, re.h)(
          "button",
          {
            type: "button",
            class: "-cbwsdk-cancel-button",
            onClick: t.onCancel,
          },
          (0, re.h)(Z4.CloseIcon, {
            fill: e === "light" ? "#0A0B0D" : "#FFFFFF",
          })
        )
    ),
    (0, re.h)(
      "div",
      { class: "-cbwsdk-connect-content-layout" },
      (0, re.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-left" },
        (0, re.h)(
          "div",
          null,
          Object.entries(ph).map(([f, d]) =>
            (0, re.h)(y0, {
              key: f,
              title: d.title,
              description: d.description,
              icon: d.icon,
              selected: r === f,
              onClick: () => i(f),
              theme: e,
            })
          )
        ),
        c &&
          (0, re.h)(
            "div",
            { class: (0, jt.default)("-cbwsdk-connect-content-update-app", e) },
            "Don’t see a ",
            (0, re.h)("strong", null, "Scan"),
            " option? Update your Coinbase app to the latest version and try again."
          )
      ),
      (0, re.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-right" },
        (0, re.h)(
          "div",
          { class: "-cbwsdk-connect-content-qr-wrapper" },
          (0, re.h)(tx.QRCode, {
            content: s,
            width: 200,
            height: 200,
            fgColor: "#000",
            bgColor: "transparent",
            image: { svg: ix(r), width: 25, height: 25 },
          }),
          (0, re.h)("input", {
            type: "hidden",
            name: "cbw-cbwsdk-version",
            value: J4.LIB_VERSION,
          }),
          (0, re.h)("input", { type: "hidden", value: s })
        ),
        (0, re.h)(a, { theme: e }),
        !t.isConnected &&
          (0, re.h)(
            "div",
            {
              "data-testid": "connecting-spinner",
              class: (0, jt.default)(
                "-cbwsdk-connect-content-qr-connecting",
                e
              ),
            },
            (0, re.h)(rx.Spinner, {
              size: 36,
              color: e === "dark" ? "#FFF" : "#000",
            }),
            (0, re.h)("p", null, "Connecting...")
          )
      )
    )
  );
}
lr.ConnectContent = sx;
function y0({
  title: t,
  description: e,
  icon: r,
  selected: n,
  theme: i,
  onClick: s,
}) {
  return (0, re.h)(
    "div",
    {
      onClick: s,
      class: (0, jt.default)("-cbwsdk-connect-item", i, { selected: n }),
    },
    (0, re.h)("div", null, (0, re.h)("img", { src: r, alt: t })),
    (0, re.h)(
      "div",
      { class: "-cbwsdk-connect-item-copy-wrapper" },
      (0, re.h)("h3", { class: "-cbwsdk-connect-item-title" }, t),
      (0, re.h)("p", { class: "-cbwsdk-connect-item-description" }, e)
    )
  );
}
lr.ConnectItem = y0;
function m0({ theme: t }) {
  return (0, re.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, re.h)(
      "li",
      { class: (0, jt.default)("-cbwsdk-wallet-steps-item", t) },
      (0, re.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        "Open Coinbase Wallet app"
      )
    ),
    (0, re.h)(
      "li",
      { class: (0, jt.default)("-cbwsdk-wallet-steps-item", t) },
      (0, re.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, re.h)("span", null, "Tap ", (0, re.h)("strong", null, "Scan"), " "),
        (0, re.h)(
          "span",
          {
            class: (0, jt.default)(
              "-cbwsdk-wallet-steps-pad-left",
              "-cbwsdk-wallet-steps-icon",
              t
            ),
          },
          (0, re.h)(b0.QRCodeIcon, { fill: Bu(t) })
        )
      )
    )
  );
}
lr.CoinbaseWalletSteps = m0;
function _0({ theme: t }) {
  return (0, re.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, re.h)(
      "li",
      { class: (0, jt.default)("-cbwsdk-wallet-steps-item", t) },
      (0, re.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        "Open Coinbase app"
      )
    ),
    (0, re.h)(
      "li",
      { class: (0, jt.default)("-cbwsdk-wallet-steps-item", t) },
      (0, re.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, re.h)("span", null, "Tap ", (0, re.h)("strong", null, "More")),
        (0, re.h)(
          "span",
          {
            class: (0, jt.default)(
              "-cbwsdk-wallet-steps-pad-left",
              "-cbwsdk-wallet-steps-icon",
              t
            ),
          },
          (0, re.h)(ex.StatusDotIcon, { fill: Bu(t) })
        ),
        (0, re.h)(
          "span",
          { class: "-cbwsdk-wallet-steps-pad-left" },
          "then ",
          (0, re.h)("strong", null, "Scan")
        ),
        (0, re.h)(
          "span",
          {
            class: (0, jt.default)(
              "-cbwsdk-wallet-steps-pad-left",
              "-cbwsdk-wallet-steps-icon",
              t
            ),
          },
          (0, re.h)(b0.QRCodeIcon, { fill: Bu(t) })
        )
      )
    )
  );
}
lr.CoinbaseAppSteps = _0;
var ia = {},
  sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.ArrowLeftIcon = void 0;
const gh = Tt;
function ox(t) {
  return (0, gh.h)(
    "svg",
    Object.assign(
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
      },
      t
    ),
    (0, gh.h)("path", {
      d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z",
    })
  );
}
sa.ArrowLeftIcon = ox;
var oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.LaptopIcon = void 0;
const cu = Tt;
function ax(t) {
  return (0, cu.h)(
    "svg",
    Object.assign(
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      t
    ),
    (0, cu.h)("path", {
      d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z",
    }),
    (0, cu.h)("path", {
      d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z",
    })
  );
}
oa.LaptopIcon = ax;
var aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.SafeIcon = void 0;
const vh = Tt;
function ux(t) {
  return (0, vh.h)(
    "svg",
    Object.assign(
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      t
    ),
    (0, vh.h)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z",
    })
  );
}
aa.SafeIcon = ux;
var Gc = {};
Object.defineProperty(Gc, "__esModule", { value: !0 });
Gc.default =
  ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var w0 =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.TryExtensionContent = void 0;
const rn = w0(Ko),
  nt = Tt,
  lu = Is,
  cx = sa,
  lx = oa,
  fx = aa,
  hx = w0(Gc);
function dx({ theme: t }) {
  const [e, r] = (0, lu.useState)(!1),
    n = (0, lu.useCallback)(() => {
      window.open(
        "https://api.wallet.coinbase.com/rpc/v2/desktop/chrome",
        "_blank"
      );
    }, []),
    i = (0, lu.useCallback)(() => {
      e ? window.location.reload() : (n(), r(!0));
    }, [n, e]);
  return (0, nt.h)(
    "div",
    { class: (0, rn.default)("-cbwsdk-try-extension", t) },
    (0, nt.h)("style", null, hx.default),
    (0, nt.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, nt.h)(
        "h3",
        { class: (0, rn.default)("-cbwsdk-try-extension-heading", t) },
        "Or try the Coinbase Wallet browser extension"
      ),
      (0, nt.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, nt.h)(
          "button",
          {
            class: (0, rn.default)("-cbwsdk-try-extension-cta", t),
            onClick: i,
          },
          e ? "Refresh" : "Install"
        ),
        (0, nt.h)(
          "div",
          null,
          !e &&
            (0, nt.h)(cx.ArrowLeftIcon, {
              class: "-cbwsdk-try-extension-cta-icon",
              fill: t === "light" ? "#0052FF" : "#588AF5",
            })
        )
      )
    ),
    (0, nt.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, nt.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, nt.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, nt.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, nt.h)(
              "span",
              {
                class: (0, rn.default)(
                  "-cbwsdk-try-extension-list-item-icon",
                  t
                ),
              },
              (0, nt.h)(lx.LaptopIcon, {
                fill: t === "light" ? "#0A0B0D" : "#FFFFFF",
              })
            )
          ),
          (0, nt.h)(
            "div",
            {
              class: (0, rn.default)("-cbwsdk-try-extension-list-item-copy", t),
            },
            "Connect with dapps with just one click on your desktop browser"
          )
        ),
        (0, nt.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, nt.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, nt.h)(
              "span",
              {
                class: (0, rn.default)(
                  "-cbwsdk-try-extension-list-item-icon",
                  t
                ),
              },
              (0, nt.h)(fx.SafeIcon, {
                fill: t === "light" ? "#0A0B0D" : "#FFFFFF",
              })
            )
          ),
          (0, nt.h)(
            "div",
            {
              class: (0, rn.default)("-cbwsdk-try-extension-list-item-copy", t),
            },
            "Add an additional layer of security by using a supported Ledger hardware wallet"
          )
        )
      )
    )
  );
}
ia.TryExtensionContent = dx;
var Jc = {};
Object.defineProperty(Jc, "__esModule", { value: !0 });
Jc.default =
  ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var S0 =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Yo, "__esModule", { value: !0 });
Yo.ConnectDialog = void 0;
const fu = S0(Ko),
  nn = Tt,
  hu = Is,
  px = lr,
  gx = ia,
  vx = S0(Jc),
  bx = (t) => {
    const { isOpen: e, darkMode: r } = t,
      [n, i] = (0, hu.useState)(!e),
      [s, o] = (0, hu.useState)(!e);
    (0, hu.useEffect)(() => {
      const c = [
        window.setTimeout(() => {
          o(!e);
        }, 10),
      ];
      return (
        e
          ? i(!1)
          : c.push(
              window.setTimeout(() => {
                i(!0);
              }, 360)
            ),
        () => {
          c.forEach(window.clearTimeout);
        }
      );
    }, [t.isOpen]);
    const a = r ? "dark" : "light";
    return (0, nn.h)(
      "div",
      {
        class: (0, fu.default)(
          "-cbwsdk-connect-dialog-container",
          n && "-cbwsdk-connect-dialog-container-hidden"
        ),
      },
      (0, nn.h)("style", null, vx.default),
      (0, nn.h)("div", {
        class: (0, fu.default)(
          "-cbwsdk-connect-dialog-backdrop",
          a,
          s && "-cbwsdk-connect-dialog-backdrop-hidden"
        ),
      }),
      (0, nn.h)(
        "div",
        { class: "-cbwsdk-connect-dialog" },
        (0, nn.h)(
          "div",
          {
            class: (0, fu.default)(
              "-cbwsdk-connect-dialog-box",
              s && "-cbwsdk-connect-dialog-box-hidden"
            ),
          },
          t.connectDisabled
            ? null
            : (0, nn.h)(px.ConnectContent, {
                theme: a,
                version: t.version,
                sessionId: t.sessionId,
                sessionSecret: t.sessionSecret,
                linkAPIUrl: t.linkAPIUrl,
                isConnected: t.isConnected,
                isParentConnection: t.isParentConnection,
                chainId: t.chainId,
                onCancel: t.onCancel,
              }),
          (0, nn.h)(gx.TryExtensionContent, { theme: a })
        )
      )
    );
  };
Yo.ConnectDialog = bx;
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.LinkFlow = void 0;
const du = Tt,
  bh = Qo,
  yx = Yo;
class mx {
  constructor(e) {
    (this.extensionUI$ = new bh.BehaviorSubject({})),
      (this.subscriptions = new bh.Subscription()),
      (this.isConnected = !1),
      (this.chainId = 1),
      (this.isOpen = !1),
      (this.onCancel = null),
      (this.root = null),
      (this.connectDisabled = !1),
      (this.darkMode = e.darkMode),
      (this.version = e.version),
      (this.sessionId = e.sessionId),
      (this.sessionSecret = e.sessionSecret),
      (this.linkAPIUrl = e.linkAPIUrl),
      (this.isParentConnection = e.isParentConnection),
      (this.connected$ = e.connected$),
      (this.chainId$ = e.chainId$);
  }
  attach(e) {
    (this.root = document.createElement("div")),
      (this.root.className = "-cbwsdk-link-flow-root"),
      e.appendChild(this.root),
      this.render(),
      this.subscriptions.add(
        this.connected$.subscribe((r) => {
          this.isConnected !== r && ((this.isConnected = r), this.render());
        })
      ),
      this.subscriptions.add(
        this.chainId$.subscribe((r) => {
          this.chainId !== r && ((this.chainId = r), this.render());
        })
      );
  }
  detach() {
    var e;
    this.root &&
      (this.subscriptions.unsubscribe(),
      (0, du.render)(null, this.root),
      (e = this.root.parentElement) === null ||
        e === void 0 ||
        e.removeChild(this.root));
  }
  setConnectDisabled(e) {
    this.connectDisabled = e;
  }
  open(e) {
    (this.isOpen = !0), (this.onCancel = e.onCancel), this.render();
  }
  close() {
    (this.isOpen = !1), (this.onCancel = null), this.render();
  }
  render() {
    if (!this.root) return;
    const e = this.extensionUI$.subscribe(() => {
      this.root &&
        (0, du.render)(
          (0, du.h)(yx.ConnectDialog, {
            darkMode: this.darkMode,
            version: this.version,
            sessionId: this.sessionId,
            sessionSecret: this.sessionSecret,
            linkAPIUrl: this.linkAPIUrl,
            isOpen: this.isOpen,
            isConnected: this.isConnected,
            isParentConnection: this.isParentConnection,
            chainId: this.chainId,
            onCancel: this.onCancel,
            connectDisabled: this.connectDisabled,
          }),
          this.root
        );
    });
    this.subscriptions.add(e);
  }
}
Go.LinkFlow = mx;
var E0 = {},
  Zc = {};
Object.defineProperty(Zc, "__esModule", { value: !0 });
Zc.default =
  ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function (t) {
  var e =
    (J && J.__importDefault) ||
    function (p) {
      return p && p.__esModule ? p : { default: p };
    };
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0);
  const r = e(Ko),
    n = Tt,
    i = Is,
    s = e(Zc),
    o =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  function a(p) {
    switch (p) {
      case "coinbase-app":
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+";
      case "coinbase-wallet-app":
      default:
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+";
    }
  }
  class c {
    constructor(b) {
      (this.items = new Map()),
        (this.nextItemKey = 0),
        (this.root = null),
        (this.darkMode = b.darkMode);
    }
    attach(b) {
      (this.root = document.createElement("div")),
        (this.root.className = "-cbwsdk-snackbar-root"),
        b.appendChild(this.root),
        this.render();
    }
    presentItem(b) {
      const E = this.nextItemKey++;
      return (
        this.items.set(E, b),
        this.render(),
        () => {
          this.items.delete(E), this.render();
        }
      );
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root &&
        (0, n.render)(
          (0, n.h)(
            "div",
            null,
            (0, n.h)(
              t.SnackbarContainer,
              { darkMode: this.darkMode },
              Array.from(this.items.entries()).map(([b, E]) =>
                (0, n.h)(t.SnackbarInstance, Object.assign({}, E, { key: b }))
              )
            )
          ),
          this.root
        );
    }
  }
  t.Snackbar = c;
  const f = (p) =>
    (0, n.h)(
      "div",
      { class: (0, r.default)("-cbwsdk-snackbar-container") },
      (0, n.h)("style", null, s.default),
      (0, n.h)("div", { class: "-cbwsdk-snackbar" }, p.children)
    );
  t.SnackbarContainer = f;
  const d = ({ autoExpand: p, message: b, menuItems: E, appSrc: R }) => {
    const [O, $] = (0, i.useState)(!0),
      [I, k] = (0, i.useState)(p ?? !1);
    (0, i.useEffect)(() => {
      const D = [
        window.setTimeout(() => {
          $(!1);
        }, 1),
        window.setTimeout(() => {
          k(!0);
        }, 1e4),
      ];
      return () => {
        D.forEach(window.clearTimeout);
      };
    });
    const N = () => {
      k(!I);
    };
    return (0, n.h)(
      "div",
      {
        class: (0, r.default)(
          "-cbwsdk-snackbar-instance",
          O && "-cbwsdk-snackbar-instance-hidden",
          I && "-cbwsdk-snackbar-instance-expanded"
        ),
      },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: N },
        (0, n.h)("img", {
          src: a(R),
          class: "-cbwsdk-snackbar-instance-header-cblogo",
        }),
        (0, n.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-header-message" },
          b
        ),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !I &&
            (0, n.h)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              (0, n.h)("circle", {
                cx: "12",
                cy: "12",
                r: "12",
                fill: "#F5F7F8",
              })
            ),
          (0, n.h)("img", { src: o, class: "-gear-icon", title: "Expand" })
        )
      ),
      E &&
        E.length > 0 &&
        (0, n.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-menu" },
          E.map((D, L) =>
            (0, n.h)(
              "div",
              {
                class: (0, r.default)(
                  "-cbwsdk-snackbar-instance-menu-item",
                  D.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"
                ),
                onClick: D.onClick,
                key: L,
              },
              (0, n.h)(
                "svg",
                {
                  width: D.svgWidth,
                  height: D.svgHeight,
                  viewBox: "0 0 10 11",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                (0, n.h)("path", {
                  "fill-rule": D.defaultFillRule,
                  "clip-rule": D.defaultClipRule,
                  d: D.path,
                  fill: "#AAAAAA",
                })
              ),
              (0, n.h)(
                "span",
                {
                  class: (0, r.default)(
                    "-cbwsdk-snackbar-instance-menu-item-info",
                    D.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                  ),
                },
                D.info
              )
            )
          )
        )
    );
  };
  t.SnackbarInstance = d;
})(E0);
var ua = {},
  Qc = {};
Object.defineProperty(Qc, "__esModule", { value: !0 });
Qc.default =
  '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var _x =
  (J && J.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(ua, "__esModule", { value: !0 });
ua.injectCssReset = void 0;
const wx = _x(Qc);
function Sx() {
  const t = document.createElement("style");
  (t.type = "text/css"),
    t.appendChild(document.createTextNode(wx.default)),
    document.documentElement.appendChild(t);
}
ua.injectCssReset = Sx;
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.WalletSDKUI = void 0;
const Ex = Go,
  xx = E0,
  Mx = ua;
class Cx {
  constructor(e) {
    (this.standalone = null),
      (this.attached = !1),
      (this.appSrc = null),
      (this.snackbar = new xx.Snackbar({ darkMode: e.darkMode })),
      (this.linkFlow = new Ex.LinkFlow({
        darkMode: e.darkMode,
        version: e.version,
        sessionId: e.session.id,
        sessionSecret: e.session.secret,
        linkAPIUrl: e.linkAPIUrl,
        connected$: e.connected$,
        chainId$: e.chainId$,
        isParentConnection: !1,
      }));
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const e = document.documentElement,
      r = document.createElement("div");
    (r.className = "-cbwsdk-css-reset"),
      e.appendChild(r),
      this.linkFlow.attach(r),
      this.snackbar.attach(r),
      (this.attached = !0),
      (0, Mx.injectCssReset)();
  }
  setConnectDisabled(e) {
    this.linkFlow.setConnectDisabled(e);
  }
  addEthereumChain(e) {}
  watchAsset(e) {}
  switchEthereumChain(e) {}
  requestEthereumAccounts(e) {
    this.linkFlow.open({ onCancel: e.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  signEthereumMessage(e) {}
  signEthereumTransaction(e) {}
  submitEthereumTransaction(e) {}
  ethereumAddressFromSignedMessage(e) {}
  showConnecting(e) {
    let r;
    return (
      e.isUnlinkedErrorState
        ? (r = {
            autoExpand: !0,
            message: "Connection lost",
            appSrc: this.appSrc,
            menuItems: [
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: e.onResetConnection,
              },
            ],
          })
        : (r = {
            message: "Confirm on phone",
            appSrc: this.appSrc,
            menuItems: [
              {
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: e.onCancel,
              },
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: e.onResetConnection,
              },
            ],
          }),
      this.snackbar.presentItem(r)
    );
  }
  setAppSrc(e) {
    this.appSrc = e;
  }
  reloadUI() {
    document.location.reload();
  }
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain(e) {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  setStandalone(e) {
    this.standalone = e;
  }
  isStandalone() {
    var e;
    return (e = this.standalone) !== null && e !== void 0 ? e : !1;
  }
}
qo.WalletSDKUI = Cx;
var ca = {},
  la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
var Zn;
(function (t) {
  (t.typeOfFunction = "function"), (t.boolTrue = !0);
})(Zn || (Zn = {}));
function x0(t, e, r) {
  if (!r || typeof r.value !== Zn.typeOfFunction)
    throw new TypeError(
      "Only methods can be decorated with @bind. <" + e + "> is not a method!"
    );
  return {
    configurable: Zn.boolTrue,
    get: function () {
      var n = r.value.bind(this);
      return (
        Object.defineProperty(this, e, {
          value: n,
          configurable: Zn.boolTrue,
          writable: Zn.boolTrue,
        }),
        n
      );
    },
  };
}
la.bind = x0;
la.default = x0;
function M0(t) {
  return function (r) {
    return r.lift(new Rx(t));
  };
}
var Rx = (function () {
    function t(e) {
      this.durationSelector = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new Ix(e, this.durationSelector));
      }),
      t
    );
  })(),
  Ix = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.durationSelector = n), (i.hasValue = !1), i;
    }
    return (
      (e.prototype._next = function (r) {
        if (((this.value = r), (this.hasValue = !0), !this.throttled)) {
          var n = void 0;
          try {
            var i = this.durationSelector;
            n = i(r);
          } catch (o) {
            return this.destination.error(o);
          }
          var s = tt(n, new Xe(this));
          !s || s.closed
            ? this.clearThrottle()
            : this.add((this.throttled = s));
        }
      }),
      (e.prototype.clearThrottle = function () {
        var r = this,
          n = r.value,
          i = r.hasValue,
          s = r.throttled;
        s && (this.remove(s), (this.throttled = void 0), s.unsubscribe()),
          i &&
            ((this.value = void 0),
            (this.hasValue = !1),
            this.destination.next(n));
      }),
      (e.prototype.notifyNext = function () {
        this.clearThrottle();
      }),
      (e.prototype.notifyComplete = function () {
        this.clearThrottle();
      }),
      e
    );
  })(et);
function Ax(t, e) {
  return (
    e === void 0 && (e = Et),
    M0(function () {
      return s0(t, e);
    })
  );
}
function kx(t) {
  return function (r) {
    return r.lift(new Tx(t));
  };
}
var Tx = (function () {
    function t(e) {
      this.closingNotifier = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new Ox(e, this.closingNotifier));
      }),
      t
    );
  })(),
  Ox = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.buffer = []), i.add(tt(n, new Xe(i))), i;
    }
    return (
      (e.prototype._next = function (r) {
        this.buffer.push(r);
      }),
      (e.prototype.notifyNext = function () {
        var r = this.buffer;
        (this.buffer = []), this.destination.next(r);
      }),
      e
    );
  })(et);
function Nx(t, e) {
  return (
    e === void 0 && (e = null),
    function (n) {
      return n.lift(new Lx(t, e));
    }
  );
}
var Lx = (function () {
    function t(e, r) {
      (this.bufferSize = e),
        (this.startBufferEvery = r),
        !r || e === r
          ? (this.subscriberClass = Px)
          : (this.subscriberClass = $x);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new this.subscriberClass(e, this.bufferSize, this.startBufferEvery)
        );
      }),
      t
    );
  })(),
  Px = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.bufferSize = n), (i.buffer = []), i;
    }
    return (
      (e.prototype._next = function (r) {
        var n = this.buffer;
        n.push(r),
          n.length == this.bufferSize &&
            (this.destination.next(n), (this.buffer = []));
      }),
      (e.prototype._complete = function () {
        var r = this.buffer;
        r.length > 0 && this.destination.next(r),
          t.prototype._complete.call(this);
      }),
      e
    );
  })(X),
  $x = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.bufferSize = n),
        (s.startBufferEvery = i),
        (s.buffers = []),
        (s.count = 0),
        s
      );
    }
    return (
      (e.prototype._next = function (r) {
        var n = this,
          i = n.bufferSize,
          s = n.startBufferEvery,
          o = n.buffers,
          a = n.count;
        this.count++, a % s === 0 && o.push([]);
        for (var c = o.length; c--; ) {
          var f = o[c];
          f.push(r),
            f.length === i && (o.splice(c, 1), this.destination.next(f));
        }
      }),
      (e.prototype._complete = function () {
        for (var r = this, n = r.buffers, i = r.destination; n.length > 0; ) {
          var s = n.shift();
          s.length > 0 && i.next(s);
        }
        t.prototype._complete.call(this);
      }),
      e
    );
  })(X);
function Dx(t) {
  var e = arguments.length,
    r = Et;
  kt(arguments[arguments.length - 1]) &&
    ((r = arguments[arguments.length - 1]), e--);
  var n = null;
  e >= 2 && (n = arguments[1]);
  var i = Number.POSITIVE_INFINITY;
  return (
    e >= 3 && (i = arguments[2]),
    function (o) {
      return o.lift(new jx(t, n, i, r));
    }
  );
}
var jx = (function () {
    function t(e, r, n, i) {
      (this.bufferTimeSpan = e),
        (this.bufferCreationInterval = r),
        (this.maxBufferSize = n),
        (this.scheduler = i);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new Fx(
            e,
            this.bufferTimeSpan,
            this.bufferCreationInterval,
            this.maxBufferSize,
            this.scheduler
          )
        );
      }),
      t
    );
  })(),
  Bx = (function () {
    function t() {
      this.buffer = [];
    }
    return t;
  })(),
  Fx = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s, o) {
      var a = t.call(this, r) || this;
      (a.bufferTimeSpan = n),
        (a.bufferCreationInterval = i),
        (a.maxBufferSize = s),
        (a.scheduler = o),
        (a.contexts = []);
      var c = a.openContext();
      if (((a.timespanOnly = i == null || i < 0), a.timespanOnly)) {
        var f = { subscriber: a, context: c, bufferTimeSpan: n };
        a.add((c.closeAction = o.schedule(yh, n, f)));
      } else {
        var d = { subscriber: a, context: c },
          p = {
            bufferTimeSpan: n,
            bufferCreationInterval: i,
            subscriber: a,
            scheduler: o,
          };
        a.add((c.closeAction = o.schedule(C0, n, d))),
          a.add(o.schedule(Hx, i, p));
      }
      return a;
    }
    return (
      (e.prototype._next = function (r) {
        for (var n = this.contexts, i = n.length, s, o = 0; o < i; o++) {
          var a = n[o],
            c = a.buffer;
          c.push(r), c.length == this.maxBufferSize && (s = a);
        }
        s && this.onBufferFull(s);
      }),
      (e.prototype._error = function (r) {
        (this.contexts.length = 0), t.prototype._error.call(this, r);
      }),
      (e.prototype._complete = function () {
        for (var r = this, n = r.contexts, i = r.destination; n.length > 0; ) {
          var s = n.shift();
          i.next(s.buffer);
        }
        t.prototype._complete.call(this);
      }),
      (e.prototype._unsubscribe = function () {
        this.contexts = null;
      }),
      (e.prototype.onBufferFull = function (r) {
        this.closeContext(r);
        var n = r.closeAction;
        if (
          (n.unsubscribe(), this.remove(n), !this.closed && this.timespanOnly)
        ) {
          r = this.openContext();
          var i = this.bufferTimeSpan,
            s = { subscriber: this, context: r, bufferTimeSpan: i };
          this.add((r.closeAction = this.scheduler.schedule(yh, i, s)));
        }
      }),
      (e.prototype.openContext = function () {
        var r = new Bx();
        return this.contexts.push(r), r;
      }),
      (e.prototype.closeContext = function (r) {
        this.destination.next(r.buffer);
        var n = this.contexts,
          i = n ? n.indexOf(r) : -1;
        i >= 0 && n.splice(n.indexOf(r), 1);
      }),
      e
    );
  })(X);
function yh(t) {
  var e = t.subscriber,
    r = t.context;
  r && e.closeContext(r),
    e.closed ||
      ((t.context = e.openContext()),
      (t.context.closeAction = this.schedule(t, t.bufferTimeSpan)));
}
function Hx(t) {
  var e = t.bufferCreationInterval,
    r = t.bufferTimeSpan,
    n = t.subscriber,
    i = t.scheduler,
    s = n.openContext(),
    o = this;
  n.closed ||
    (n.add((s.closeAction = i.schedule(C0, r, { subscriber: n, context: s }))),
    o.schedule(t, e));
}
function C0(t) {
  var e = t.subscriber,
    r = t.context;
  e.closeContext(r);
}
function Wx(t, e) {
  return function (n) {
    return n.lift(new Vx(t, e));
  };
}
var Vx = (function () {
    function t(e, r) {
      (this.openings = e), (this.closingSelector = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new Ux(e, this.openings, this.closingSelector));
      }),
      t
    );
  })(),
  Ux = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.closingSelector = i), (s.contexts = []), s.add(wr(s, n)), s;
    }
    return (
      (e.prototype._next = function (r) {
        for (var n = this.contexts, i = n.length, s = 0; s < i; s++)
          n[s].buffer.push(r);
      }),
      (e.prototype._error = function (r) {
        for (var n = this.contexts; n.length > 0; ) {
          var i = n.shift();
          i.subscription.unsubscribe(),
            (i.buffer = null),
            (i.subscription = null);
        }
        (this.contexts = null), t.prototype._error.call(this, r);
      }),
      (e.prototype._complete = function () {
        for (var r = this.contexts; r.length > 0; ) {
          var n = r.shift();
          this.destination.next(n.buffer),
            n.subscription.unsubscribe(),
            (n.buffer = null),
            (n.subscription = null);
        }
        (this.contexts = null), t.prototype._complete.call(this);
      }),
      (e.prototype.notifyNext = function (r, n) {
        r ? this.closeBuffer(r) : this.openBuffer(n);
      }),
      (e.prototype.notifyComplete = function (r) {
        this.closeBuffer(r.context);
      }),
      (e.prototype.openBuffer = function (r) {
        try {
          var n = this.closingSelector,
            i = n.call(this, r);
          i && this.trySubscribe(i);
        } catch (s) {
          this._error(s);
        }
      }),
      (e.prototype.closeBuffer = function (r) {
        var n = this.contexts;
        if (n && r) {
          var i = r.buffer,
            s = r.subscription;
          this.destination.next(i),
            n.splice(n.indexOf(r), 1),
            this.remove(s),
            s.unsubscribe();
        }
      }),
      (e.prototype.trySubscribe = function (r) {
        var n = this.contexts,
          i = [],
          s = new Ke(),
          o = { buffer: i, subscription: s };
        n.push(o);
        var a = wr(this, r, o);
        !a || a.closed
          ? this.closeBuffer(o)
          : ((a.context = o), this.add(a), s.add(a));
      }),
      e
    );
  })(Rn);
function zx(t) {
  return function (e) {
    return e.lift(new qx(t));
  };
}
var qx = (function () {
    function t(e) {
      this.closingSelector = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new Gx(e, this.closingSelector));
      }),
      t
    );
  })(),
  Gx = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.closingSelector = n), (i.subscribing = !1), i.openBuffer(), i;
    }
    return (
      (e.prototype._next = function (r) {
        this.buffer.push(r);
      }),
      (e.prototype._complete = function () {
        var r = this.buffer;
        r && this.destination.next(r), t.prototype._complete.call(this);
      }),
      (e.prototype._unsubscribe = function () {
        (this.buffer = void 0), (this.subscribing = !1);
      }),
      (e.prototype.notifyNext = function () {
        this.openBuffer();
      }),
      (e.prototype.notifyComplete = function () {
        this.subscribing ? this.complete() : this.openBuffer();
      }),
      (e.prototype.openBuffer = function () {
        var r = this.closingSubscription;
        r && (this.remove(r), r.unsubscribe());
        var n = this.buffer;
        this.buffer && this.destination.next(n), (this.buffer = []);
        var i;
        try {
          var s = this.closingSelector;
          i = s();
        } catch (o) {
          return this.error(o);
        }
        (r = new Ke()),
          (this.closingSubscription = r),
          this.add(r),
          (this.subscribing = !0),
          r.add(tt(i, new Xe(this))),
          (this.subscribing = !1);
      }),
      e
    );
  })(et);
function Jx(t) {
  return function (r) {
    var n = new Zx(t),
      i = r.lift(n);
    return (n.caught = i);
  };
}
var Zx = (function () {
    function t(e) {
      this.selector = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new Qx(e, this.selector, this.caught));
      }),
      t
    );
  })(),
  Qx = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.selector = n), (s.caught = i), s;
    }
    return (
      (e.prototype.error = function (r) {
        if (!this.isStopped) {
          var n = void 0;
          try {
            n = this.selector(r, this.caught);
          } catch (o) {
            t.prototype.error.call(this, o);
            return;
          }
          this._unsubscribeAndRecycle();
          var i = new Xe(this);
          this.add(i);
          var s = tt(n, i);
          s !== i && this.add(s);
        }
      }),
      e
    );
  })(et);
function Yx(t) {
  return function (e) {
    return e.lift(new $c(t));
  };
}
function Kx() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = null;
  return (
    typeof t[t.length - 1] == "function" && (r = t.pop()),
    t.length === 1 && St(t[0]) && (t = t[0].slice()),
    function (n) {
      return n.lift.call(Er([n].concat(t)), new $c(r));
    }
  );
}
function Xx() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return function (r) {
    return r.lift.call(ns.apply(void 0, [r].concat(t)));
  };
}
function R0(t, e) {
  return mn(t, e, 1);
}
function e5(t, e) {
  return R0(function () {
    return t;
  }, e);
}
function t5(t) {
  return function (e) {
    return e.lift(new r5(t, e));
  };
}
var r5 = (function () {
    function t(e, r) {
      (this.predicate = e), (this.source = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new n5(e, this.predicate, this.source));
      }),
      t
    );
  })(),
  n5 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.predicate = n), (s.source = i), (s.count = 0), (s.index = 0), s;
    }
    return (
      (e.prototype._next = function (r) {
        this.predicate ? this._tryPredicate(r) : this.count++;
      }),
      (e.prototype._tryPredicate = function (r) {
        var n;
        try {
          n = this.predicate(r, this.index++, this.source);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        n && this.count++;
      }),
      (e.prototype._complete = function () {
        this.destination.next(this.count), this.destination.complete();
      }),
      e
    );
  })(X);
function i5(t) {
  return function (e) {
    return e.lift(new s5(t));
  };
}
var s5 = (function () {
    function t(e) {
      this.durationSelector = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new o5(e, this.durationSelector));
      }),
      t
    );
  })(),
  o5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.durationSelector = n), (i.hasValue = !1), i;
    }
    return (
      (e.prototype._next = function (r) {
        try {
          var n = this.durationSelector.call(this, r);
          n && this._tryNext(r, n);
        } catch (i) {
          this.destination.error(i);
        }
      }),
      (e.prototype._complete = function () {
        this.emitValue(), this.destination.complete();
      }),
      (e.prototype._tryNext = function (r, n) {
        var i = this.durationSubscription;
        (this.value = r),
          (this.hasValue = !0),
          i && (i.unsubscribe(), this.remove(i)),
          (i = tt(n, new Xe(this))),
          i && !i.closed && this.add((this.durationSubscription = i));
      }),
      (e.prototype.notifyNext = function () {
        this.emitValue();
      }),
      (e.prototype.notifyComplete = function () {
        this.emitValue();
      }),
      (e.prototype.emitValue = function () {
        if (this.hasValue) {
          var r = this.value,
            n = this.durationSubscription;
          n &&
            ((this.durationSubscription = void 0),
            n.unsubscribe(),
            this.remove(n)),
            (this.value = void 0),
            (this.hasValue = !1),
            t.prototype._next.call(this, r);
        }
      }),
      e
    );
  })(et);
function a5(t, e) {
  return (
    e === void 0 && (e = Et),
    function (r) {
      return r.lift(new u5(t, e));
    }
  );
}
var u5 = (function () {
    function t(e, r) {
      (this.dueTime = e), (this.scheduler = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new c5(e, this.dueTime, this.scheduler));
      }),
      t
    );
  })(),
  c5 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.dueTime = n),
        (s.scheduler = i),
        (s.debouncedSubscription = null),
        (s.lastValue = null),
        (s.hasValue = !1),
        s
      );
    }
    return (
      (e.prototype._next = function (r) {
        this.clearDebounce(),
          (this.lastValue = r),
          (this.hasValue = !0),
          this.add(
            (this.debouncedSubscription = this.scheduler.schedule(
              l5,
              this.dueTime,
              this
            ))
          );
      }),
      (e.prototype._complete = function () {
        this.debouncedNext(), this.destination.complete();
      }),
      (e.prototype.debouncedNext = function () {
        if ((this.clearDebounce(), this.hasValue)) {
          var r = this.lastValue;
          (this.lastValue = null),
            (this.hasValue = !1),
            this.destination.next(r);
        }
      }),
      (e.prototype.clearDebounce = function () {
        var r = this.debouncedSubscription;
        r !== null &&
          (this.remove(r),
          r.unsubscribe(),
          (this.debouncedSubscription = null));
      }),
      e
    );
  })(X);
function l5(t) {
  t.debouncedNext();
}
function As(t) {
  return (
    t === void 0 && (t = null),
    function (e) {
      return e.lift(new f5(t));
    }
  );
}
var f5 = (function () {
    function t(e) {
      this.defaultValue = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new h5(e, this.defaultValue));
      }),
      t
    );
  })(),
  h5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.defaultValue = n), (i.isEmpty = !0), i;
    }
    return (
      (e.prototype._next = function (r) {
        (this.isEmpty = !1), this.destination.next(r);
      }),
      (e.prototype._complete = function () {
        this.isEmpty && this.destination.next(this.defaultValue),
          this.destination.complete();
      }),
      e
    );
  })(X);
function I0(t) {
  return t instanceof Date && !isNaN(+t);
}
function d5(t, e) {
  e === void 0 && (e = Et);
  var r = I0(t),
    n = r ? +t - e.now() : Math.abs(t);
  return function (i) {
    return i.lift(new p5(n, e));
  };
}
var p5 = (function () {
    function t(e, r) {
      (this.delay = e), (this.scheduler = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new g5(e, this.delay, this.scheduler));
      }),
      t
    );
  })(),
  g5 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.delay = n),
        (s.scheduler = i),
        (s.queue = []),
        (s.active = !1),
        (s.errored = !1),
        s
      );
    }
    return (
      (e.dispatch = function (r) {
        for (
          var n = r.source, i = n.queue, s = r.scheduler, o = r.destination;
          i.length > 0 && i[0].time - s.now() <= 0;

        )
          i.shift().notification.observe(o);
        if (i.length > 0) {
          var a = Math.max(0, i[0].time - s.now());
          this.schedule(r, a);
        } else this.unsubscribe(), (n.active = !1);
      }),
      (e.prototype._schedule = function (r) {
        this.active = !0;
        var n = this.destination;
        n.add(
          r.schedule(e.dispatch, this.delay, {
            source: this,
            destination: this.destination,
            scheduler: r,
          })
        );
      }),
      (e.prototype.scheduleNotification = function (r) {
        if (this.errored !== !0) {
          var n = this.scheduler,
            i = new v5(n.now() + this.delay, r);
          this.queue.push(i), this.active === !1 && this._schedule(n);
        }
      }),
      (e.prototype._next = function (r) {
        this.scheduleNotification(mr.createNext(r));
      }),
      (e.prototype._error = function (r) {
        (this.errored = !0),
          (this.queue = []),
          this.destination.error(r),
          this.unsubscribe();
      }),
      (e.prototype._complete = function () {
        this.scheduleNotification(mr.createComplete()), this.unsubscribe();
      }),
      e
    );
  })(X),
  v5 = (function () {
    function t(e, r) {
      (this.time = e), (this.notification = r);
    }
    return t;
  })();
function b5(t, e) {
  return e
    ? function (r) {
        return new m5(r, e).lift(new mh(t));
      }
    : function (r) {
        return r.lift(new mh(t));
      };
}
var mh = (function () {
    function t(e) {
      this.delayDurationSelector = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new y5(e, this.delayDurationSelector));
      }),
      t
    );
  })(),
  y5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (
        (i.delayDurationSelector = n),
        (i.completed = !1),
        (i.delayNotifierSubscriptions = []),
        (i.index = 0),
        i
      );
    }
    return (
      (e.prototype.notifyNext = function (r, n, i, s, o) {
        this.destination.next(r),
          this.removeSubscription(o),
          this.tryComplete();
      }),
      (e.prototype.notifyError = function (r, n) {
        this._error(r);
      }),
      (e.prototype.notifyComplete = function (r) {
        var n = this.removeSubscription(r);
        n && this.destination.next(n), this.tryComplete();
      }),
      (e.prototype._next = function (r) {
        var n = this.index++;
        try {
          var i = this.delayDurationSelector(r, n);
          i && this.tryDelay(i, r);
        } catch (s) {
          this.destination.error(s);
        }
      }),
      (e.prototype._complete = function () {
        (this.completed = !0), this.tryComplete(), this.unsubscribe();
      }),
      (e.prototype.removeSubscription = function (r) {
        r.unsubscribe();
        var n = this.delayNotifierSubscriptions.indexOf(r);
        return (
          n !== -1 && this.delayNotifierSubscriptions.splice(n, 1), r.outerValue
        );
      }),
      (e.prototype.tryDelay = function (r, n) {
        var i = wr(this, r, n);
        if (i && !i.closed) {
          var s = this.destination;
          s.add(i), this.delayNotifierSubscriptions.push(i);
        }
      }),
      (e.prototype.tryComplete = function () {
        this.completed &&
          this.delayNotifierSubscriptions.length === 0 &&
          this.destination.complete();
      }),
      e
    );
  })(Rn),
  m5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this) || this;
      return (i.source = r), (i.subscriptionDelay = n), i;
    }
    return (
      (e.prototype._subscribe = function (r) {
        this.subscriptionDelay.subscribe(new _5(r, this.source));
      }),
      e
    );
  })(ue),
  _5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this) || this;
      return (i.parent = r), (i.source = n), (i.sourceSubscribed = !1), i;
    }
    return (
      (e.prototype._next = function (r) {
        this.subscribeToSource();
      }),
      (e.prototype._error = function (r) {
        this.unsubscribe(), this.parent.error(r);
      }),
      (e.prototype._complete = function () {
        this.unsubscribe(), this.subscribeToSource();
      }),
      (e.prototype.subscribeToSource = function () {
        this.sourceSubscribed ||
          ((this.sourceSubscribed = !0),
          this.unsubscribe(),
          this.source.subscribe(this.parent));
      }),
      e
    );
  })(X);
function w5() {
  return function (e) {
    return e.lift(new S5());
  };
}
var S5 = (function () {
    function t() {}
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new E5(e));
      }),
      t
    );
  })(),
  E5 = (function (t) {
    F.__extends(e, t);
    function e(r) {
      return t.call(this, r) || this;
    }
    return (
      (e.prototype._next = function (r) {
        r.observe(this.destination);
      }),
      e
    );
  })(X);
function x5(t, e) {
  return function (r) {
    return r.lift(new M5(t, e));
  };
}
var M5 = (function () {
    function t(e, r) {
      (this.keySelector = e), (this.flushes = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new C5(e, this.keySelector, this.flushes));
      }),
      t
    );
  })(),
  C5 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.keySelector = n),
        (s.values = new Set()),
        i && s.add(tt(i, new Xe(s))),
        s
      );
    }
    return (
      (e.prototype.notifyNext = function () {
        this.values.clear();
      }),
      (e.prototype.notifyError = function (r) {
        this._error(r);
      }),
      (e.prototype._next = function (r) {
        this.keySelector ? this._useKeySelector(r) : this._finalizeNext(r, r);
      }),
      (e.prototype._useKeySelector = function (r) {
        var n,
          i = this.destination;
        try {
          n = this.keySelector(r);
        } catch (s) {
          i.error(s);
          return;
        }
        this._finalizeNext(n, r);
      }),
      (e.prototype._finalizeNext = function (r, n) {
        var i = this.values;
        i.has(r) || (i.add(r), this.destination.next(n));
      }),
      e
    );
  })(et);
function A0(t, e) {
  return function (r) {
    return r.lift(new R5(t, e));
  };
}
var R5 = (function () {
    function t(e, r) {
      (this.compare = e), (this.keySelector = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new I5(e, this.compare, this.keySelector));
      }),
      t
    );
  })(),
  I5 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.keySelector = i),
        (s.hasKey = !1),
        typeof n == "function" && (s.compare = n),
        s
      );
    }
    return (
      (e.prototype.compare = function (r, n) {
        return r === n;
      }),
      (e.prototype._next = function (r) {
        var n;
        try {
          var i = this.keySelector;
          n = i ? i(r) : r;
        } catch (a) {
          return this.destination.error(a);
        }
        var s = !1;
        if (this.hasKey)
          try {
            var o = this.compare;
            s = o(this.key, n);
          } catch (a) {
            return this.destination.error(a);
          }
        else this.hasKey = !0;
        s || ((this.key = n), this.destination.next(r));
      }),
      e
    );
  })(X);
function A5(t, e) {
  return A0(function (r, n) {
    return e ? e(r[t], n[t]) : r[t] === n[t];
  });
}
function fa(t) {
  return (
    t === void 0 && (t = O5),
    function (e) {
      return e.lift(new k5(t));
    }
  );
}
var k5 = (function () {
    function t(e) {
      this.errorFactory = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new T5(e, this.errorFactory));
      }),
      t
    );
  })(),
  T5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.errorFactory = n), (i.hasValue = !1), i;
    }
    return (
      (e.prototype._next = function (r) {
        (this.hasValue = !0), this.destination.next(r);
      }),
      (e.prototype._complete = function () {
        if (this.hasValue) return this.destination.complete();
        var r = void 0;
        try {
          r = this.errorFactory();
        } catch (n) {
          r = n;
        }
        this.destination.error(r);
      }),
      e
    );
  })(X);
function O5() {
  return new Rs();
}
function Yc(t) {
  return function (e) {
    return t === 0 ? ki() : e.lift(new N5(t));
  };
}
var N5 = (function () {
    function t(e) {
      if (((this.total = e), this.total < 0)) throw new pi();
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new L5(e, this.total));
      }),
      t
    );
  })(),
  L5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.total = n), (i.count = 0), i;
    }
    return (
      (e.prototype._next = function (r) {
        var n = this.total,
          i = ++this.count;
        i <= n &&
          (this.destination.next(r),
          i === n && (this.destination.complete(), this.unsubscribe()));
      }),
      e
    );
  })(X);
function P5(t, e) {
  if (t < 0) throw new pi();
  var r = arguments.length >= 2;
  return function (n) {
    return n.pipe(
      Fr(function (i, s) {
        return s === t;
      }),
      Yc(1),
      r
        ? As(e)
        : fa(function () {
            return new pi();
          })
    );
  };
}
function $5() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return function (r) {
    return ns(r, Zo.apply(void 0, t));
  };
}
function D5(t, e) {
  return function (r) {
    return r.lift(new j5(t, e, r));
  };
}
var j5 = (function () {
    function t(e, r, n) {
      (this.predicate = e), (this.thisArg = r), (this.source = n);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new B5(e, this.predicate, this.thisArg, this.source)
        );
      }),
      t
    );
  })(),
  B5 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s) {
      var o = t.call(this, r) || this;
      return (
        (o.predicate = n),
        (o.thisArg = i),
        (o.source = s),
        (o.index = 0),
        (o.thisArg = i || o),
        o
      );
    }
    return (
      (e.prototype.notifyComplete = function (r) {
        this.destination.next(r), this.destination.complete();
      }),
      (e.prototype._next = function (r) {
        var n = !1;
        try {
          n = this.predicate.call(this.thisArg, r, this.index++, this.source);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        n || this.notifyComplete(!1);
      }),
      (e.prototype._complete = function () {
        this.notifyComplete(!0);
      }),
      e
    );
  })(X);
function F5() {
  return function (t) {
    return t.lift(new H5());
  };
}
var H5 = (function () {
    function t() {}
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new W5(e));
      }),
      t
    );
  })(),
  W5 = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return (n.hasCompleted = !1), (n.hasSubscription = !1), n;
    }
    return (
      (e.prototype._next = function (r) {
        this.hasSubscription ||
          ((this.hasSubscription = !0), this.add(tt(r, new Xe(this))));
      }),
      (e.prototype._complete = function () {
        (this.hasCompleted = !0),
          this.hasSubscription || this.destination.complete();
      }),
      (e.prototype.notifyComplete = function () {
        (this.hasSubscription = !1),
          this.hasCompleted && this.destination.complete();
      }),
      e
    );
  })(et);
function k0(t, e) {
  return e
    ? function (r) {
        return r.pipe(
          k0(function (n, i) {
            return Er(t(n, i)).pipe(
              Wt(function (s, o) {
                return e(n, s, i, o);
              })
            );
          })
        );
      }
    : function (r) {
        return r.lift(new V5(t));
      };
}
var V5 = (function () {
    function t(e) {
      this.project = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new U5(e, this.project));
      }),
      t
    );
  })(),
  U5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (
        (i.project = n),
        (i.hasSubscription = !1),
        (i.hasCompleted = !1),
        (i.index = 0),
        i
      );
    }
    return (
      (e.prototype._next = function (r) {
        this.hasSubscription || this.tryNext(r);
      }),
      (e.prototype.tryNext = function (r) {
        var n,
          i = this.index++;
        try {
          n = this.project(r, i);
        } catch (s) {
          this.destination.error(s);
          return;
        }
        (this.hasSubscription = !0), this._innerSub(n);
      }),
      (e.prototype._innerSub = function (r) {
        var n = new Xe(this),
          i = this.destination;
        i.add(n);
        var s = tt(r, n);
        s !== n && i.add(s);
      }),
      (e.prototype._complete = function () {
        (this.hasCompleted = !0),
          this.hasSubscription || this.destination.complete(),
          this.unsubscribe();
      }),
      (e.prototype.notifyNext = function (r) {
        this.destination.next(r);
      }),
      (e.prototype.notifyError = function (r) {
        this.destination.error(r);
      }),
      (e.prototype.notifyComplete = function () {
        (this.hasSubscription = !1),
          this.hasCompleted && this.destination.complete();
      }),
      e
    );
  })(et);
function z5(t, e, r) {
  return (
    e === void 0 && (e = Number.POSITIVE_INFINITY),
    (e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e),
    function (n) {
      return n.lift(new q5(t, e, r));
    }
  );
}
var q5 = (function () {
    function t(e, r, n) {
      (this.project = e), (this.concurrent = r), (this.scheduler = n);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new G5(e, this.project, this.concurrent, this.scheduler)
        );
      }),
      t
    );
  })(),
  G5 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s) {
      var o = t.call(this, r) || this;
      return (
        (o.project = n),
        (o.concurrent = i),
        (o.scheduler = s),
        (o.index = 0),
        (o.active = 0),
        (o.hasCompleted = !1),
        i < Number.POSITIVE_INFINITY && (o.buffer = []),
        o
      );
    }
    return (
      (e.dispatch = function (r) {
        var n = r.subscriber,
          i = r.result,
          s = r.value,
          o = r.index;
        n.subscribeToProjection(i, s, o);
      }),
      (e.prototype._next = function (r) {
        var n = this.destination;
        if (n.closed) {
          this._complete();
          return;
        }
        var i = this.index++;
        if (this.active < this.concurrent) {
          n.next(r);
          try {
            var s = this.project,
              o = s(r, i);
            if (!this.scheduler) this.subscribeToProjection(o, r, i);
            else {
              var a = { subscriber: this, result: o, value: r, index: i },
                c = this.destination;
              c.add(this.scheduler.schedule(e.dispatch, 0, a));
            }
          } catch (f) {
            n.error(f);
          }
        } else this.buffer.push(r);
      }),
      (e.prototype.subscribeToProjection = function (r, n, i) {
        this.active++;
        var s = this.destination;
        s.add(tt(r, new Xe(this)));
      }),
      (e.prototype._complete = function () {
        (this.hasCompleted = !0),
          this.hasCompleted && this.active === 0 && this.destination.complete(),
          this.unsubscribe();
      }),
      (e.prototype.notifyNext = function (r) {
        this._next(r);
      }),
      (e.prototype.notifyComplete = function () {
        var r = this.buffer;
        this.active--,
          r && r.length > 0 && this._next(r.shift()),
          this.hasCompleted && this.active === 0 && this.destination.complete();
      }),
      e
    );
  })(et);
function J5(t) {
  return function (e) {
    return e.lift(new Z5(t));
  };
}
var Z5 = (function () {
    function t(e) {
      this.callback = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new Q5(e, this.callback));
      }),
      t
    );
  })(),
  Q5 = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return i.add(new Ke(n)), i;
    }
    return e;
  })(X);
function Y5(t, e) {
  if (typeof t != "function")
    throw new TypeError("predicate is not a function");
  return function (r) {
    return r.lift(new T0(t, r, !1, e));
  };
}
var T0 = (function () {
    function t(e, r, n, i) {
      (this.predicate = e),
        (this.source = r),
        (this.yieldIndex = n),
        (this.thisArg = i);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new K5(e, this.predicate, this.source, this.yieldIndex, this.thisArg)
        );
      }),
      t
    );
  })(),
  K5 = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s, o) {
      var a = t.call(this, r) || this;
      return (
        (a.predicate = n),
        (a.source = i),
        (a.yieldIndex = s),
        (a.thisArg = o),
        (a.index = 0),
        a
      );
    }
    return (
      (e.prototype.notifyComplete = function (r) {
        var n = this.destination;
        n.next(r), n.complete(), this.unsubscribe();
      }),
      (e.prototype._next = function (r) {
        var n = this,
          i = n.predicate,
          s = n.thisArg,
          o = this.index++;
        try {
          var a = i.call(s || this, r, o, this.source);
          a && this.notifyComplete(this.yieldIndex ? o : r);
        } catch (c) {
          this.destination.error(c);
        }
      }),
      (e.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : void 0);
      }),
      e
    );
  })(X);
function X5(t, e) {
  return function (r) {
    return r.lift(new T0(t, r, !0, e));
  };
}
function eM(t, e) {
  var r = arguments.length >= 2;
  return function (n) {
    return n.pipe(
      t
        ? Fr(function (i, s) {
            return t(i, s, n);
          })
        : jr,
      Yc(1),
      r
        ? As(e)
        : fa(function () {
            return new Rs();
          })
    );
  };
}
function tM() {
  return function (e) {
    return e.lift(new rM());
  };
}
var rM = (function () {
    function t() {}
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new nM(e));
      }),
      t
    );
  })(),
  nM = (function (t) {
    F.__extends(e, t);
    function e() {
      return (t !== null && t.apply(this, arguments)) || this;
    }
    return (e.prototype._next = function (r) {}), e;
  })(X);
function iM() {
  return function (t) {
    return t.lift(new sM());
  };
}
var sM = (function () {
    function t() {}
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new oM(e));
      }),
      t
    );
  })(),
  oM = (function (t) {
    F.__extends(e, t);
    function e(r) {
      return t.call(this, r) || this;
    }
    return (
      (e.prototype.notifyComplete = function (r) {
        var n = this.destination;
        n.next(r), n.complete();
      }),
      (e.prototype._next = function (r) {
        this.notifyComplete(!1);
      }),
      (e.prototype._complete = function () {
        this.notifyComplete(!0);
      }),
      e
    );
  })(X);
function lo(t) {
  return function (r) {
    return t === 0 ? ki() : r.lift(new aM(t));
  };
}
var aM = (function () {
    function t(e) {
      if (((this.total = e), this.total < 0)) throw new pi();
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new uM(e, this.total));
      }),
      t
    );
  })(),
  uM = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.total = n), (i.ring = new Array()), (i.count = 0), i;
    }
    return (
      (e.prototype._next = function (r) {
        var n = this.ring,
          i = this.total,
          s = this.count++;
        if (n.length < i) n.push(r);
        else {
          var o = s % i;
          n[o] = r;
        }
      }),
      (e.prototype._complete = function () {
        var r = this.destination,
          n = this.count;
        if (n > 0)
          for (
            var i = this.count >= this.total ? this.total : this.count,
              s = this.ring,
              o = 0;
            o < i;
            o++
          ) {
            var a = n++ % i;
            r.next(s[a]);
          }
        r.complete();
      }),
      e
    );
  })(X);
function cM(t, e) {
  var r = arguments.length >= 2;
  return function (n) {
    return n.pipe(
      t
        ? Fr(function (i, s) {
            return t(i, s, n);
          })
        : jr,
      lo(1),
      r
        ? As(e)
        : fa(function () {
            return new Rs();
          })
    );
  };
}
function lM(t) {
  return function (e) {
    return e.lift(new fM(t));
  };
}
var fM = (function () {
    function t(e) {
      this.value = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new hM(e, this.value));
      }),
      t
    );
  })(),
  hM = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.value = n), i;
    }
    return (
      (e.prototype._next = function (r) {
        this.destination.next(this.value);
      }),
      e
    );
  })(X);
function dM() {
  return function (e) {
    return e.lift(new pM());
  };
}
var pM = (function () {
    function t() {}
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new gM(e));
      }),
      t
    );
  })(),
  gM = (function (t) {
    F.__extends(e, t);
    function e(r) {
      return t.call(this, r) || this;
    }
    return (
      (e.prototype._next = function (r) {
        this.destination.next(mr.createNext(r));
      }),
      (e.prototype._error = function (r) {
        var n = this.destination;
        n.next(mr.createError(r)), n.complete();
      }),
      (e.prototype._complete = function () {
        var r = this.destination;
        r.next(mr.createComplete()), r.complete();
      }),
      e
    );
  })(X);
function fo(t, e) {
  var r = !1;
  return (
    arguments.length >= 2 && (r = !0),
    function (i) {
      return i.lift(new vM(t, e, r));
    }
  );
}
var vM = (function () {
    function t(e, r, n) {
      n === void 0 && (n = !1),
        (this.accumulator = e),
        (this.seed = r),
        (this.hasSeed = n);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new bM(e, this.accumulator, this.seed, this.hasSeed)
        );
      }),
      t
    );
  })(),
  bM = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s) {
      var o = t.call(this, r) || this;
      return (
        (o.accumulator = n), (o._seed = i), (o.hasSeed = s), (o.index = 0), o
      );
    }
    return (
      Object.defineProperty(e.prototype, "seed", {
        get: function () {
          return this._seed;
        },
        set: function (r) {
          (this.hasSeed = !0), (this._seed = r);
        },
        enumerable: !0,
        configurable: !0,
      }),
      (e.prototype._next = function (r) {
        if (!this.hasSeed) (this.seed = r), this.destination.next(r);
        else return this._tryNext(r);
      }),
      (e.prototype._tryNext = function (r) {
        var n = this.index++,
          i;
        try {
          i = this.accumulator(this.seed, r, n);
        } catch (s) {
          this.destination.error(s);
        }
        (this.seed = i), this.destination.next(i);
      }),
      e
    );
  })(X);
function ha(t, e) {
  return arguments.length >= 2
    ? function (n) {
        return Ou(fo(t, e), lo(1), As(e))(n);
      }
    : function (n) {
        return Ou(
          fo(function (i, s, o) {
            return t(i, s, o + 1);
          }),
          lo(1)
        )(n);
      };
}
function yM(t) {
  var e =
    typeof t == "function"
      ? function (r, n) {
          return t(r, n) > 0 ? r : n;
        }
      : function (r, n) {
          return r > n ? r : n;
        };
  return ha(e);
}
function mM() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return function (r) {
    return r.lift.call(t0.apply(void 0, [r].concat(t)));
  };
}
function _M(t, e, r) {
  return (
    r === void 0 && (r = Number.POSITIVE_INFINITY),
    typeof e == "function"
      ? mn(
          function () {
            return t;
          },
          e,
          r
        )
      : (typeof e == "number" && (r = e),
        mn(function () {
          return t;
        }, r))
  );
}
function wM(t, e, r) {
  return (
    r === void 0 && (r = Number.POSITIVE_INFINITY),
    function (n) {
      return n.lift(new SM(t, e, r));
    }
  );
}
var SM = (function () {
    function t(e, r, n) {
      (this.accumulator = e), (this.seed = r), (this.concurrent = n);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new EM(e, this.accumulator, this.seed, this.concurrent)
        );
      }),
      t
    );
  })(),
  EM = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s) {
      var o = t.call(this, r) || this;
      return (
        (o.accumulator = n),
        (o.acc = i),
        (o.concurrent = s),
        (o.hasValue = !1),
        (o.hasCompleted = !1),
        (o.buffer = []),
        (o.active = 0),
        (o.index = 0),
        o
      );
    }
    return (
      (e.prototype._next = function (r) {
        if (this.active < this.concurrent) {
          var n = this.index++,
            i = this.destination,
            s = void 0;
          try {
            var o = this.accumulator;
            s = o(this.acc, r, n);
          } catch (a) {
            return i.error(a);
          }
          this.active++, this._innerSub(s);
        } else this.buffer.push(r);
      }),
      (e.prototype._innerSub = function (r) {
        var n = new Xe(this),
          i = this.destination;
        i.add(n);
        var s = tt(r, n);
        s !== n && i.add(s);
      }),
      (e.prototype._complete = function () {
        (this.hasCompleted = !0),
          this.active === 0 &&
            this.buffer.length === 0 &&
            (this.hasValue === !1 && this.destination.next(this.acc),
            this.destination.complete()),
          this.unsubscribe();
      }),
      (e.prototype.notifyNext = function (r) {
        var n = this.destination;
        (this.acc = r), (this.hasValue = !0), n.next(r);
      }),
      (e.prototype.notifyComplete = function () {
        var r = this.buffer;
        this.active--,
          r.length > 0
            ? this._next(r.shift())
            : this.active === 0 &&
              this.hasCompleted &&
              (this.hasValue === !1 && this.destination.next(this.acc),
              this.destination.complete());
      }),
      e
    );
  })(et);
function xM(t) {
  var e =
    typeof t == "function"
      ? function (r, n) {
          return t(r, n) < 0 ? r : n;
        }
      : function (r, n) {
          return r < n ? r : n;
        };
  return ha(e);
}
function _n(t, e) {
  return function (n) {
    var i;
    if (
      (typeof t == "function"
        ? (i = t)
        : (i = function () {
            return t;
          }),
      typeof e == "function")
    )
      return n.lift(new MM(i, e));
    var s = Object.create(n, r3);
    return (s.source = n), (s.subjectFactory = i), s;
  };
}
var MM = (function () {
  function t(e, r) {
    (this.subjectFactory = e), (this.selector = r);
  }
  return (
    (t.prototype.call = function (e, r) {
      var n = this.selector,
        i = this.subjectFactory(),
        s = n(i).subscribe(e);
      return s.add(r.subscribe(i)), s;
    }),
    t
  );
})();
function CM() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return (
    t.length === 1 && St(t[0]) && (t = t[0]),
    function (r) {
      return r.lift(new RM(t));
    }
  );
}
var RM = (function () {
    function t(e) {
      this.nextSources = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new IM(e, this.nextSources));
      }),
      t
    );
  })(),
  IM = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.destination = r), (i.nextSources = n), i;
    }
    return (
      (e.prototype.notifyError = function () {
        this.subscribeToNextSource();
      }),
      (e.prototype.notifyComplete = function () {
        this.subscribeToNextSource();
      }),
      (e.prototype._error = function (r) {
        this.subscribeToNextSource(), this.unsubscribe();
      }),
      (e.prototype._complete = function () {
        this.subscribeToNextSource(), this.unsubscribe();
      }),
      (e.prototype.subscribeToNextSource = function () {
        var r = this.nextSources.shift();
        if (r) {
          var n = new Xe(this),
            i = this.destination;
          i.add(n);
          var s = tt(r, n);
          s !== n && i.add(s);
        } else this.destination.complete();
      }),
      e
    );
  })(et);
function AM() {
  return function (t) {
    return t.lift(new kM());
  };
}
var kM = (function () {
    function t() {}
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new TM(e));
      }),
      t
    );
  })(),
  TM = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return (n.hasPrev = !1), n;
    }
    return (
      (e.prototype._next = function (r) {
        var n;
        this.hasPrev ? (n = [this.prev, r]) : (this.hasPrev = !0),
          (this.prev = r),
          n && this.destination.next(n);
      }),
      e
    );
  })(X);
function OM(t, e) {
  return function (r) {
    return [Fr(t, e)(r), Fr(n0(t, e))(r)];
  };
}
function NM() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = t.length;
  if (r === 0) throw new Error("list of properties cannot be empty.");
  return function (n) {
    return Wt(LM(t, r))(n);
  };
}
function LM(t, e) {
  var r = function (n) {
    for (var i = n, s = 0; s < e; s++) {
      var o = i != null ? i[t[s]] : void 0;
      if (o !== void 0) i = o;
      else return;
    }
    return i;
  };
  return r;
}
function PM(t) {
  return t
    ? _n(function () {
        return new ft();
      }, t)
    : _n(new ft());
}
function $M(t) {
  return function (e) {
    return _n(new $p(t))(e);
  };
}
function DM() {
  return function (t) {
    return _n(new Ti())(t);
  };
}
function jM(t, e, r, n) {
  r && typeof r != "function" && (n = r);
  var i = typeof r == "function" ? r : void 0,
    s = new Pc(t, e, n);
  return function (o) {
    return _n(function () {
      return s;
    }, i)(o);
  };
}
function BM() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return function (n) {
    return (
      t.length === 1 && St(t[0]) && (t = t[0]),
      n.lift.call(i0.apply(void 0, [n].concat(t)))
    );
  };
}
function FM(t) {
  return (
    t === void 0 && (t = -1),
    function (e) {
      return t === 0
        ? ki()
        : t < 0
        ? e.lift(new _h(-1, e))
        : e.lift(new _h(t - 1, e));
    }
  );
}
var _h = (function () {
    function t(e, r) {
      (this.count = e), (this.source = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new HM(e, this.count, this.source));
      }),
      t
    );
  })(),
  HM = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.count = n), (s.source = i), s;
    }
    return (
      (e.prototype.complete = function () {
        if (!this.isStopped) {
          var r = this,
            n = r.source,
            i = r.count;
          if (i === 0) return t.prototype.complete.call(this);
          i > -1 && (this.count = i - 1),
            n.subscribe(this._unsubscribeAndRecycle());
        }
      }),
      e
    );
  })(X);
function WM(t) {
  return function (e) {
    return e.lift(new VM(t));
  };
}
var VM = (function () {
    function t(e) {
      this.notifier = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new UM(e, this.notifier, r));
      }),
      t
    );
  })(),
  UM = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.notifier = n), (s.source = i), (s.sourceIsBeingSubscribedTo = !0), s
      );
    }
    return (
      (e.prototype.notifyNext = function () {
        (this.sourceIsBeingSubscribedTo = !0), this.source.subscribe(this);
      }),
      (e.prototype.notifyComplete = function () {
        if (this.sourceIsBeingSubscribedTo === !1)
          return t.prototype.complete.call(this);
      }),
      (e.prototype.complete = function () {
        if (((this.sourceIsBeingSubscribedTo = !1), !this.isStopped)) {
          if (
            (this.retries || this.subscribeToRetries(),
            !this.retriesSubscription || this.retriesSubscription.closed)
          )
            return t.prototype.complete.call(this);
          this._unsubscribeAndRecycle(), this.notifications.next(void 0);
        }
      }),
      (e.prototype._unsubscribe = function () {
        var r = this,
          n = r.notifications,
          i = r.retriesSubscription;
        n && (n.unsubscribe(), (this.notifications = void 0)),
          i && (i.unsubscribe(), (this.retriesSubscription = void 0)),
          (this.retries = void 0);
      }),
      (e.prototype._unsubscribeAndRecycle = function () {
        var r = this._unsubscribe;
        return (
          (this._unsubscribe = null),
          t.prototype._unsubscribeAndRecycle.call(this),
          (this._unsubscribe = r),
          this
        );
      }),
      (e.prototype.subscribeToRetries = function () {
        this.notifications = new ft();
        var r;
        try {
          var n = this.notifier;
          r = n(this.notifications);
        } catch {
          return t.prototype.complete.call(this);
        }
        (this.retries = r), (this.retriesSubscription = tt(r, new Xe(this)));
      }),
      e
    );
  })(et);
function zM(t) {
  return (
    t === void 0 && (t = -1),
    function (e) {
      return e.lift(new qM(t, e));
    }
  );
}
var qM = (function () {
    function t(e, r) {
      (this.count = e), (this.source = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new GM(e, this.count, this.source));
      }),
      t
    );
  })(),
  GM = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.count = n), (s.source = i), s;
    }
    return (
      (e.prototype.error = function (r) {
        if (!this.isStopped) {
          var n = this,
            i = n.source,
            s = n.count;
          if (s === 0) return t.prototype.error.call(this, r);
          s > -1 && (this.count = s - 1),
            i.subscribe(this._unsubscribeAndRecycle());
        }
      }),
      e
    );
  })(X);
function JM(t) {
  return function (e) {
    return e.lift(new ZM(t, e));
  };
}
var ZM = (function () {
    function t(e, r) {
      (this.notifier = e), (this.source = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new QM(e, this.notifier, this.source));
      }),
      t
    );
  })(),
  QM = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.notifier = n), (s.source = i), s;
    }
    return (
      (e.prototype.error = function (r) {
        if (!this.isStopped) {
          var n = this.errors,
            i = this.retries,
            s = this.retriesSubscription;
          if (i) (this.errors = void 0), (this.retriesSubscription = void 0);
          else {
            n = new ft();
            try {
              var o = this.notifier;
              i = o(n);
            } catch (a) {
              return t.prototype.error.call(this, a);
            }
            s = tt(i, new Xe(this));
          }
          this._unsubscribeAndRecycle(),
            (this.errors = n),
            (this.retries = i),
            (this.retriesSubscription = s),
            n.next(r);
        }
      }),
      (e.prototype._unsubscribe = function () {
        var r = this,
          n = r.errors,
          i = r.retriesSubscription;
        n && (n.unsubscribe(), (this.errors = void 0)),
          i && (i.unsubscribe(), (this.retriesSubscription = void 0)),
          (this.retries = void 0);
      }),
      (e.prototype.notifyNext = function () {
        var r = this._unsubscribe;
        (this._unsubscribe = null),
          this._unsubscribeAndRecycle(),
          (this._unsubscribe = r),
          this.source.subscribe(this);
      }),
      e
    );
  })(et);
function YM(t) {
  return function (e) {
    return e.lift(new KM(t));
  };
}
var KM = (function () {
    function t(e) {
      this.notifier = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        var n = new XM(e),
          i = r.subscribe(n);
        return i.add(tt(this.notifier, new Xe(n))), i;
      }),
      t
    );
  })(),
  XM = (function (t) {
    F.__extends(e, t);
    function e() {
      var r = (t !== null && t.apply(this, arguments)) || this;
      return (r.hasValue = !1), r;
    }
    return (
      (e.prototype._next = function (r) {
        (this.value = r), (this.hasValue = !0);
      }),
      (e.prototype.notifyNext = function () {
        this.emitValue();
      }),
      (e.prototype.notifyComplete = function () {
        this.emitValue();
      }),
      (e.prototype.emitValue = function () {
        this.hasValue &&
          ((this.hasValue = !1), this.destination.next(this.value));
      }),
      e
    );
  })(et);
function eC(t, e) {
  return (
    e === void 0 && (e = Et),
    function (r) {
      return r.lift(new tC(t, e));
    }
  );
}
var tC = (function () {
    function t(e, r) {
      (this.period = e), (this.scheduler = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new rC(e, this.period, this.scheduler));
      }),
      t
    );
  })(),
  rC = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.period = n),
        (s.scheduler = i),
        (s.hasValue = !1),
        s.add(i.schedule(nC, n, { subscriber: s, period: n })),
        s
      );
    }
    return (
      (e.prototype._next = function (r) {
        (this.lastValue = r), (this.hasValue = !0);
      }),
      (e.prototype.notifyNext = function () {
        this.hasValue &&
          ((this.hasValue = !1), this.destination.next(this.lastValue));
      }),
      e
    );
  })(X);
function nC(t) {
  var e = t.subscriber,
    r = t.period;
  e.notifyNext(), this.schedule(t, r);
}
function iC(t, e) {
  return function (r) {
    return r.lift(new sC(t, e));
  };
}
var sC = (function () {
    function t(e, r) {
      (this.compareTo = e), (this.comparator = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new oC(e, this.compareTo, this.comparator));
      }),
      t
    );
  })(),
  oC = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.compareTo = n),
        (s.comparator = i),
        (s._a = []),
        (s._b = []),
        (s._oneComplete = !1),
        s.destination.add(n.subscribe(new aC(r, s))),
        s
      );
    }
    return (
      (e.prototype._next = function (r) {
        this._oneComplete && this._b.length === 0
          ? this.emit(!1)
          : (this._a.push(r), this.checkValues());
      }),
      (e.prototype._complete = function () {
        this._oneComplete
          ? this.emit(this._a.length === 0 && this._b.length === 0)
          : (this._oneComplete = !0),
          this.unsubscribe();
      }),
      (e.prototype.checkValues = function () {
        for (
          var r = this, n = r._a, i = r._b, s = r.comparator;
          n.length > 0 && i.length > 0;

        ) {
          var o = n.shift(),
            a = i.shift(),
            c = !1;
          try {
            c = s ? s(o, a) : o === a;
          } catch (f) {
            this.destination.error(f);
          }
          c || this.emit(!1);
        }
      }),
      (e.prototype.emit = function (r) {
        var n = this.destination;
        n.next(r), n.complete();
      }),
      (e.prototype.nextB = function (r) {
        this._oneComplete && this._a.length === 0
          ? this.emit(!1)
          : (this._b.push(r), this.checkValues());
      }),
      (e.prototype.completeB = function () {
        this._oneComplete
          ? this.emit(this._a.length === 0 && this._b.length === 0)
          : (this._oneComplete = !0);
      }),
      e
    );
  })(X),
  aC = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.parent = n), i;
    }
    return (
      (e.prototype._next = function (r) {
        this.parent.nextB(r);
      }),
      (e.prototype._error = function (r) {
        this.parent.error(r), this.unsubscribe();
      }),
      (e.prototype._complete = function () {
        this.parent.completeB(), this.unsubscribe();
      }),
      e
    );
  })(X);
function uC() {
  return new ft();
}
function cC() {
  return function (t) {
    return Oc()(_n(uC)(t));
  };
}
function lC(t, e, r) {
  var n;
  return (
    t && typeof t == "object"
      ? (n = t)
      : (n = { bufferSize: t, windowTime: e, refCount: !1, scheduler: r }),
    function (i) {
      return i.lift(fC(n));
    }
  );
}
function fC(t) {
  var e = t.bufferSize,
    r = e === void 0 ? Number.POSITIVE_INFINITY : e,
    n = t.windowTime,
    i = n === void 0 ? Number.POSITIVE_INFINITY : n,
    s = t.refCount,
    o = t.scheduler,
    a,
    c = 0,
    f,
    d = !1,
    p = !1;
  return function (E) {
    c++;
    var R;
    !a || d
      ? ((d = !1),
        (a = new Pc(r, i, o)),
        (R = a.subscribe(this)),
        (f = E.subscribe({
          next: function (O) {
            a.next(O);
          },
          error: function (O) {
            (d = !0), a.error(O);
          },
          complete: function () {
            (p = !0), (f = void 0), a.complete();
          },
        })),
        p && (f = void 0))
      : (R = a.subscribe(this)),
      this.add(function () {
        c--,
          R.unsubscribe(),
          (R = void 0),
          f &&
            !p &&
            s &&
            c === 0 &&
            (f.unsubscribe(), (f = void 0), (a = void 0));
      });
  };
}
function hC(t) {
  return function (e) {
    return e.lift(new dC(t, e));
  };
}
var dC = (function () {
    function t(e, r) {
      (this.predicate = e), (this.source = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new pC(e, this.predicate, this.source));
      }),
      t
    );
  })(),
  pC = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.predicate = n), (s.source = i), (s.seenValue = !1), (s.index = 0), s
      );
    }
    return (
      (e.prototype.applySingleValue = function (r) {
        this.seenValue
          ? this.destination.error("Sequence contains more than one element")
          : ((this.seenValue = !0), (this.singleValue = r));
      }),
      (e.prototype._next = function (r) {
        var n = this.index++;
        this.predicate ? this.tryNext(r, n) : this.applySingleValue(r);
      }),
      (e.prototype.tryNext = function (r, n) {
        try {
          this.predicate(r, n, this.source) && this.applySingleValue(r);
        } catch (i) {
          this.destination.error(i);
        }
      }),
      (e.prototype._complete = function () {
        var r = this.destination;
        this.index > 0
          ? (r.next(this.seenValue ? this.singleValue : void 0), r.complete())
          : r.error(new Rs());
      }),
      e
    );
  })(X);
function gC(t) {
  return function (e) {
    return e.lift(new vC(t));
  };
}
var vC = (function () {
    function t(e) {
      this.total = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new bC(e, this.total));
      }),
      t
    );
  })(),
  bC = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.total = n), (i.count = 0), i;
    }
    return (
      (e.prototype._next = function (r) {
        ++this.count > this.total && this.destination.next(r);
      }),
      e
    );
  })(X);
function yC(t) {
  return function (e) {
    return e.lift(new mC(t));
  };
}
var mC = (function () {
    function t(e) {
      if (((this._skipCount = e), this._skipCount < 0)) throw new pi();
    }
    return (
      (t.prototype.call = function (e, r) {
        return this._skipCount === 0
          ? r.subscribe(new X(e))
          : r.subscribe(new _C(e, this._skipCount));
      }),
      t
    );
  })(),
  _C = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i._skipCount = n), (i._count = 0), (i._ring = new Array(n)), i;
    }
    return (
      (e.prototype._next = function (r) {
        var n = this._skipCount,
          i = this._count++;
        if (i < n) this._ring[i] = r;
        else {
          var s = i % n,
            o = this._ring,
            a = o[s];
          (o[s] = r), this.destination.next(a);
        }
      }),
      e
    );
  })(X);
function wC(t) {
  return function (e) {
    return e.lift(new SC(t));
  };
}
var SC = (function () {
    function t(e) {
      this.notifier = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new EC(e, this.notifier));
      }),
      t
    );
  })(),
  EC = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      i.hasValue = !1;
      var s = new Xe(i);
      i.add(s), (i.innerSubscription = s);
      var o = tt(n, s);
      return o !== s && (i.add(o), (i.innerSubscription = o)), i;
    }
    return (
      (e.prototype._next = function (r) {
        this.hasValue && t.prototype._next.call(this, r);
      }),
      (e.prototype.notifyNext = function () {
        (this.hasValue = !0),
          this.innerSubscription && this.innerSubscription.unsubscribe();
      }),
      (e.prototype.notifyComplete = function () {}),
      e
    );
  })(et);
function xC(t) {
  return function (e) {
    return e.lift(new MC(t));
  };
}
var MC = (function () {
    function t(e) {
      this.predicate = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new CC(e, this.predicate));
      }),
      t
    );
  })(),
  CC = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.predicate = n), (i.skipping = !0), (i.index = 0), i;
    }
    return (
      (e.prototype._next = function (r) {
        var n = this.destination;
        this.skipping && this.tryCallPredicate(r), this.skipping || n.next(r);
      }),
      (e.prototype.tryCallPredicate = function (r) {
        try {
          var n = this.predicate(r, this.index++);
          this.skipping = Boolean(n);
        } catch (i) {
          this.destination.error(i);
        }
      }),
      e
    );
  })(X);
function RC() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  var r = t[t.length - 1];
  return kt(r)
    ? (t.pop(),
      function (n) {
        return ns(t, n, r);
      })
    : function (n) {
        return ns(t, n);
      };
}
var IC = (function (t) {
  F.__extends(e, t);
  function e(r, n, i) {
    n === void 0 && (n = 0), i === void 0 && (i = Js);
    var s = t.call(this) || this;
    return (
      (s.source = r),
      (s.delayTime = n),
      (s.scheduler = i),
      (!gi(n) || n < 0) && (s.delayTime = 0),
      (!i || typeof i.schedule != "function") && (s.scheduler = Js),
      s
    );
  }
  return (
    (e.create = function (r, n, i) {
      return n === void 0 && (n = 0), i === void 0 && (i = Js), new e(r, n, i);
    }),
    (e.dispatch = function (r) {
      var n = r.source,
        i = r.subscriber;
      return this.add(n.subscribe(i));
    }),
    (e.prototype._subscribe = function (r) {
      var n = this.delayTime,
        i = this.source,
        s = this.scheduler;
      return s.schedule(e.dispatch, n, { source: i, subscriber: r });
    }),
    e
  );
})(ue);
function AC(t, e) {
  return (
    e === void 0 && (e = 0),
    function (n) {
      return n.lift(new kC(t, e));
    }
  );
}
var kC = (function () {
  function t(e, r) {
    (this.scheduler = e), (this.delay = r);
  }
  return (
    (t.prototype.call = function (e, r) {
      return new IC(r, this.delay, this.scheduler).subscribe(e);
    }),
    t
  );
})();
function is(t, e) {
  return typeof e == "function"
    ? function (r) {
        return r.pipe(
          is(function (n, i) {
            return Er(t(n, i)).pipe(
              Wt(function (s, o) {
                return e(n, s, i, o);
              })
            );
          })
        );
      }
    : function (r) {
        return r.lift(new TC(t));
      };
}
var TC = (function () {
    function t(e) {
      this.project = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new OC(e, this.project));
      }),
      t
    );
  })(),
  OC = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.project = n), (i.index = 0), i;
    }
    return (
      (e.prototype._next = function (r) {
        var n,
          i = this.index++;
        try {
          n = this.project(r, i);
        } catch (s) {
          this.destination.error(s);
          return;
        }
        this._innerSub(n);
      }),
      (e.prototype._innerSub = function (r) {
        var n = this.innerSubscription;
        n && n.unsubscribe();
        var i = new Xe(this),
          s = this.destination;
        s.add(i),
          (this.innerSubscription = tt(r, i)),
          this.innerSubscription !== i && s.add(this.innerSubscription);
      }),
      (e.prototype._complete = function () {
        var r = this.innerSubscription;
        (!r || r.closed) && t.prototype._complete.call(this),
          this.unsubscribe();
      }),
      (e.prototype._unsubscribe = function () {
        this.innerSubscription = void 0;
      }),
      (e.prototype.notifyComplete = function () {
        (this.innerSubscription = void 0),
          this.isStopped && t.prototype._complete.call(this);
      }),
      (e.prototype.notifyNext = function (r) {
        this.destination.next(r);
      }),
      e
    );
  })(et);
function NC() {
  return is(jr);
}
function LC(t, e) {
  return e
    ? is(function () {
        return t;
      }, e)
    : is(function () {
        return t;
      });
}
function PC(t) {
  return function (e) {
    return e.lift(new $C(t));
  };
}
var $C = (function () {
    function t(e) {
      this.notifier = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        var n = new DC(e),
          i = tt(this.notifier, new Xe(n));
        return i && !n.seenValue ? (n.add(i), r.subscribe(n)) : n;
      }),
      t
    );
  })(),
  DC = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return (n.seenValue = !1), n;
    }
    return (
      (e.prototype.notifyNext = function () {
        (this.seenValue = !0), this.complete();
      }),
      (e.prototype.notifyComplete = function () {}),
      e
    );
  })(et);
function jC(t, e) {
  return (
    e === void 0 && (e = !1),
    function (r) {
      return r.lift(new BC(t, e));
    }
  );
}
var BC = (function () {
    function t(e, r) {
      (this.predicate = e), (this.inclusive = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new FC(e, this.predicate, this.inclusive));
      }),
      t
    );
  })(),
  FC = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (s.predicate = n), (s.inclusive = i), (s.index = 0), s;
    }
    return (
      (e.prototype._next = function (r) {
        var n = this.destination,
          i;
        try {
          i = this.predicate(r, this.index++);
        } catch (s) {
          n.error(s);
          return;
        }
        this.nextOrComplete(r, i);
      }),
      (e.prototype.nextOrComplete = function (r, n) {
        var i = this.destination;
        Boolean(n) ? i.next(r) : (this.inclusive && i.next(r), i.complete());
      }),
      e
    );
  })(X);
function HC(t, e, r) {
  return function (i) {
    return i.lift(new WC(t, e, r));
  };
}
var WC = (function () {
    function t(e, r, n) {
      (this.nextOrObserver = e), (this.error = r), (this.complete = n);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new VC(e, this.nextOrObserver, this.error, this.complete)
        );
      }),
      t
    );
  })(),
  VC = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s) {
      var o = t.call(this, r) || this;
      return (
        (o._tapNext = sr),
        (o._tapError = sr),
        (o._tapComplete = sr),
        (o._tapError = i || sr),
        (o._tapComplete = s || sr),
        hi(n)
          ? ((o._context = o), (o._tapNext = n))
          : n &&
            ((o._context = n),
            (o._tapNext = n.next || sr),
            (o._tapError = n.error || sr),
            (o._tapComplete = n.complete || sr)),
        o
      );
    }
    return (
      (e.prototype._next = function (r) {
        try {
          this._tapNext.call(this._context, r);
        } catch (n) {
          this.destination.error(n);
          return;
        }
        this.destination.next(r);
      }),
      (e.prototype._error = function (r) {
        try {
          this._tapError.call(this._context, r);
        } catch (n) {
          this.destination.error(n);
          return;
        }
        this.destination.error(r);
      }),
      (e.prototype._complete = function () {
        try {
          this._tapComplete.call(this._context);
        } catch (r) {
          this.destination.error(r);
          return;
        }
        return this.destination.complete();
      }),
      e
    );
  })(X),
  O0 = { leading: !0, trailing: !1 };
function UC(t, e) {
  return (
    e === void 0 && (e = O0),
    function (r) {
      return r.lift(new zC(t, !!e.leading, !!e.trailing));
    }
  );
}
var zC = (function () {
    function t(e, r, n) {
      (this.durationSelector = e), (this.leading = r), (this.trailing = n);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new qC(e, this.durationSelector, this.leading, this.trailing)
        );
      }),
      t
    );
  })(),
  qC = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s) {
      var o = t.call(this, r) || this;
      return (
        (o.destination = r),
        (o.durationSelector = n),
        (o._leading = i),
        (o._trailing = s),
        (o._hasValue = !1),
        o
      );
    }
    return (
      (e.prototype._next = function (r) {
        (this._hasValue = !0),
          (this._sendValue = r),
          this._throttled || (this._leading ? this.send() : this.throttle(r));
      }),
      (e.prototype.send = function () {
        var r = this,
          n = r._hasValue,
          i = r._sendValue;
        n && (this.destination.next(i), this.throttle(i)),
          (this._hasValue = !1),
          (this._sendValue = void 0);
      }),
      (e.prototype.throttle = function (r) {
        var n = this.tryDurationSelector(r);
        n && this.add((this._throttled = tt(n, new Xe(this))));
      }),
      (e.prototype.tryDurationSelector = function (r) {
        try {
          return this.durationSelector(r);
        } catch (n) {
          return this.destination.error(n), null;
        }
      }),
      (e.prototype.throttlingDone = function () {
        var r = this,
          n = r._throttled,
          i = r._trailing;
        n && n.unsubscribe(), (this._throttled = void 0), i && this.send();
      }),
      (e.prototype.notifyNext = function () {
        this.throttlingDone();
      }),
      (e.prototype.notifyComplete = function () {
        this.throttlingDone();
      }),
      e
    );
  })(et);
function GC(t, e, r) {
  return (
    e === void 0 && (e = Et),
    r === void 0 && (r = O0),
    function (n) {
      return n.lift(new JC(t, e, r.leading, r.trailing));
    }
  );
}
var JC = (function () {
    function t(e, r, n, i) {
      (this.duration = e),
        (this.scheduler = r),
        (this.leading = n),
        (this.trailing = i);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new ZC(e, this.duration, this.scheduler, this.leading, this.trailing)
        );
      }),
      t
    );
  })(),
  ZC = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s, o) {
      var a = t.call(this, r) || this;
      return (
        (a.duration = n),
        (a.scheduler = i),
        (a.leading = s),
        (a.trailing = o),
        (a._hasTrailingValue = !1),
        (a._trailingValue = null),
        a
      );
    }
    return (
      (e.prototype._next = function (r) {
        this.throttled
          ? this.trailing &&
            ((this._trailingValue = r), (this._hasTrailingValue = !0))
          : (this.add(
              (this.throttled = this.scheduler.schedule(QC, this.duration, {
                subscriber: this,
              }))
            ),
            this.leading
              ? this.destination.next(r)
              : this.trailing &&
                ((this._trailingValue = r), (this._hasTrailingValue = !0)));
      }),
      (e.prototype._complete = function () {
        this._hasTrailingValue
          ? (this.destination.next(this._trailingValue),
            this.destination.complete())
          : this.destination.complete();
      }),
      (e.prototype.clearThrottle = function () {
        var r = this.throttled;
        r &&
          (this.trailing &&
            this._hasTrailingValue &&
            (this.destination.next(this._trailingValue),
            (this._trailingValue = null),
            (this._hasTrailingValue = !1)),
          r.unsubscribe(),
          this.remove(r),
          (this.throttled = null));
      }),
      e
    );
  })(X);
function QC(t) {
  var e = t.subscriber;
  e.clearThrottle();
}
function YC(t) {
  return (
    t === void 0 && (t = Et),
    function (e) {
      return jc(function () {
        return e.pipe(
          fo(
            function (r, n) {
              var i = r.current;
              return { value: n, current: t.now(), last: i };
            },
            { current: t.now(), value: void 0, last: void 0 }
          ),
          Wt(function (r) {
            var n = r.current,
              i = r.last,
              s = r.value;
            return new KC(s, n - i);
          })
        );
      });
    }
  );
}
var KC = (function () {
  function t(e, r) {
    (this.value = e), (this.interval = r);
  }
  return t;
})();
function N0(t, e, r) {
  return (
    r === void 0 && (r = Et),
    function (n) {
      var i = I0(t),
        s = i ? +t - r.now() : Math.abs(t);
      return n.lift(new XC(s, i, e, r));
    }
  );
}
var XC = (function () {
    function t(e, r, n, i) {
      (this.waitFor = e),
        (this.absoluteTimeout = r),
        (this.withObservable = n),
        (this.scheduler = i);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new eR(
            e,
            this.absoluteTimeout,
            this.waitFor,
            this.withObservable,
            this.scheduler
          )
        );
      }),
      t
    );
  })(),
  eR = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s, o) {
      var a = t.call(this, r) || this;
      return (
        (a.absoluteTimeout = n),
        (a.waitFor = i),
        (a.withObservable = s),
        (a.scheduler = o),
        a.scheduleTimeout(),
        a
      );
    }
    return (
      (e.dispatchTimeout = function (r) {
        var n = r.withObservable;
        r._unsubscribeAndRecycle(), r.add(tt(n, new Xe(r)));
      }),
      (e.prototype.scheduleTimeout = function () {
        var r = this.action;
        r
          ? (this.action = r.schedule(this, this.waitFor))
          : this.add(
              (this.action = this.scheduler.schedule(
                e.dispatchTimeout,
                this.waitFor,
                this
              ))
            );
      }),
      (e.prototype._next = function (r) {
        this.absoluteTimeout || this.scheduleTimeout(),
          t.prototype._next.call(this, r);
      }),
      (e.prototype._unsubscribe = function () {
        (this.action = void 0),
          (this.scheduler = null),
          (this.withObservable = null);
      }),
      e
    );
  })(et);
function tR(t, e) {
  return e === void 0 && (e = Et), N0(t, Lc(new zp()), e);
}
function rR(t) {
  return (
    t === void 0 && (t = Et),
    Wt(function (e) {
      return new nR(e, t.now());
    })
  );
}
var nR = (function () {
  function t(e, r) {
    (this.value = e), (this.timestamp = r);
  }
  return t;
})();
function iR(t, e, r) {
  return r === 0 ? [e] : (t.push(e), t);
}
function sR() {
  return ha(iR, []);
}
function oR(t) {
  return function (r) {
    return r.lift(new aR(t));
  };
}
var aR = (function () {
    function t(e) {
      this.windowBoundaries = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        var n = new uR(e),
          i = r.subscribe(n);
        return i.closed || n.add(tt(this.windowBoundaries, new Xe(n))), i;
      }),
      t
    );
  })(),
  uR = (function (t) {
    F.__extends(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return (n.window = new ft()), r.next(n.window), n;
    }
    return (
      (e.prototype.notifyNext = function () {
        this.openWindow();
      }),
      (e.prototype.notifyError = function (r) {
        this._error(r);
      }),
      (e.prototype.notifyComplete = function () {
        this._complete();
      }),
      (e.prototype._next = function (r) {
        this.window.next(r);
      }),
      (e.prototype._error = function (r) {
        this.window.error(r), this.destination.error(r);
      }),
      (e.prototype._complete = function () {
        this.window.complete(), this.destination.complete();
      }),
      (e.prototype._unsubscribe = function () {
        this.window = null;
      }),
      (e.prototype.openWindow = function () {
        var r = this.window;
        r && r.complete();
        var n = this.destination,
          i = (this.window = new ft());
        n.next(i);
      }),
      e
    );
  })(et);
function cR(t, e) {
  return (
    e === void 0 && (e = 0),
    function (n) {
      return n.lift(new lR(t, e));
    }
  );
}
var lR = (function () {
    function t(e, r) {
      (this.windowSize = e), (this.startWindowEvery = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new fR(e, this.windowSize, this.startWindowEvery));
      }),
      t
    );
  })(),
  fR = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.destination = r),
        (s.windowSize = n),
        (s.startWindowEvery = i),
        (s.windows = [new ft()]),
        (s.count = 0),
        r.next(s.windows[0]),
        s
      );
    }
    return (
      (e.prototype._next = function (r) {
        for (
          var n =
              this.startWindowEvery > 0
                ? this.startWindowEvery
                : this.windowSize,
            i = this.destination,
            s = this.windowSize,
            o = this.windows,
            a = o.length,
            c = 0;
          c < a && !this.closed;
          c++
        )
          o[c].next(r);
        var f = this.count - s + 1;
        if (
          (f >= 0 && f % n === 0 && !this.closed && o.shift().complete(),
          ++this.count % n === 0 && !this.closed)
        ) {
          var d = new ft();
          o.push(d), i.next(d);
        }
      }),
      (e.prototype._error = function (r) {
        var n = this.windows;
        if (n) for (; n.length > 0 && !this.closed; ) n.shift().error(r);
        this.destination.error(r);
      }),
      (e.prototype._complete = function () {
        var r = this.windows;
        if (r) for (; r.length > 0 && !this.closed; ) r.shift().complete();
        this.destination.complete();
      }),
      (e.prototype._unsubscribe = function () {
        (this.count = 0), (this.windows = null);
      }),
      e
    );
  })(X);
function hR(t) {
  var e = Et,
    r = null,
    n = Number.POSITIVE_INFINITY;
  return (
    kt(arguments[3]) && (e = arguments[3]),
    kt(arguments[2])
      ? (e = arguments[2])
      : gi(arguments[2]) && (n = Number(arguments[2])),
    kt(arguments[1])
      ? (e = arguments[1])
      : gi(arguments[1]) && (r = Number(arguments[1])),
    function (s) {
      return s.lift(new dR(t, r, n, e));
    }
  );
}
var dR = (function () {
    function t(e, r, n, i) {
      (this.windowTimeSpan = e),
        (this.windowCreationInterval = r),
        (this.maxWindowSize = n),
        (this.scheduler = i);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(
          new gR(
            e,
            this.windowTimeSpan,
            this.windowCreationInterval,
            this.maxWindowSize,
            this.scheduler
          )
        );
      }),
      t
    );
  })(),
  pR = (function (t) {
    F.__extends(e, t);
    function e() {
      var r = (t !== null && t.apply(this, arguments)) || this;
      return (r._numberOfNextedValues = 0), r;
    }
    return (
      (e.prototype.next = function (r) {
        this._numberOfNextedValues++, t.prototype.next.call(this, r);
      }),
      Object.defineProperty(e.prototype, "numberOfNextedValues", {
        get: function () {
          return this._numberOfNextedValues;
        },
        enumerable: !0,
        configurable: !0,
      }),
      e
    );
  })(ft),
  gR = (function (t) {
    F.__extends(e, t);
    function e(r, n, i, s, o) {
      var a = t.call(this, r) || this;
      (a.destination = r),
        (a.windowTimeSpan = n),
        (a.windowCreationInterval = i),
        (a.maxWindowSize = s),
        (a.scheduler = o),
        (a.windows = []);
      var c = a.openWindow();
      if (i !== null && i >= 0) {
        var f = { subscriber: a, window: c, context: null },
          d = {
            windowTimeSpan: n,
            windowCreationInterval: i,
            subscriber: a,
            scheduler: o,
          };
        a.add(o.schedule(L0, n, f)), a.add(o.schedule(bR, i, d));
      } else {
        var p = { subscriber: a, window: c, windowTimeSpan: n };
        a.add(o.schedule(vR, n, p));
      }
      return a;
    }
    return (
      (e.prototype._next = function (r) {
        for (var n = this.windows, i = n.length, s = 0; s < i; s++) {
          var o = n[s];
          o.closed ||
            (o.next(r),
            o.numberOfNextedValues >= this.maxWindowSize &&
              this.closeWindow(o));
        }
      }),
      (e.prototype._error = function (r) {
        for (var n = this.windows; n.length > 0; ) n.shift().error(r);
        this.destination.error(r);
      }),
      (e.prototype._complete = function () {
        for (var r = this.windows; r.length > 0; ) {
          var n = r.shift();
          n.closed || n.complete();
        }
        this.destination.complete();
      }),
      (e.prototype.openWindow = function () {
        var r = new pR();
        this.windows.push(r);
        var n = this.destination;
        return n.next(r), r;
      }),
      (e.prototype.closeWindow = function (r) {
        r.complete();
        var n = this.windows;
        n.splice(n.indexOf(r), 1);
      }),
      e
    );
  })(X);
function vR(t) {
  var e = t.subscriber,
    r = t.windowTimeSpan,
    n = t.window;
  n && e.closeWindow(n), (t.window = e.openWindow()), this.schedule(t, r);
}
function bR(t) {
  var e = t.windowTimeSpan,
    r = t.subscriber,
    n = t.scheduler,
    i = t.windowCreationInterval,
    s = r.openWindow(),
    o = this,
    a = { action: o, subscription: null },
    c = { subscriber: r, window: s, context: a };
  (a.subscription = n.schedule(L0, e, c)),
    o.add(a.subscription),
    o.schedule(t, i);
}
function L0(t) {
  var e = t.subscriber,
    r = t.window,
    n = t.context;
  n && n.action && n.subscription && n.action.remove(n.subscription),
    e.closeWindow(r);
}
function yR(t, e) {
  return function (r) {
    return r.lift(new mR(t, e));
  };
}
var mR = (function () {
    function t(e, r) {
      (this.openings = e), (this.closingSelector = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new _R(e, this.openings, this.closingSelector));
      }),
      t
    );
  })(),
  _R = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      return (
        (s.openings = n),
        (s.closingSelector = i),
        (s.contexts = []),
        s.add((s.openSubscription = wr(s, n, n))),
        s
      );
    }
    return (
      (e.prototype._next = function (r) {
        var n = this.contexts;
        if (n) for (var i = n.length, s = 0; s < i; s++) n[s].window.next(r);
      }),
      (e.prototype._error = function (r) {
        var n = this.contexts;
        if (((this.contexts = null), n))
          for (var i = n.length, s = -1; ++s < i; ) {
            var o = n[s];
            o.window.error(r), o.subscription.unsubscribe();
          }
        t.prototype._error.call(this, r);
      }),
      (e.prototype._complete = function () {
        var r = this.contexts;
        if (((this.contexts = null), r))
          for (var n = r.length, i = -1; ++i < n; ) {
            var s = r[i];
            s.window.complete(), s.subscription.unsubscribe();
          }
        t.prototype._complete.call(this);
      }),
      (e.prototype._unsubscribe = function () {
        var r = this.contexts;
        if (((this.contexts = null), r))
          for (var n = r.length, i = -1; ++i < n; ) {
            var s = r[i];
            s.window.unsubscribe(), s.subscription.unsubscribe();
          }
      }),
      (e.prototype.notifyNext = function (r, n, i, s, o) {
        if (r === this.openings) {
          var a = void 0;
          try {
            var c = this.closingSelector;
            a = c(n);
          } catch (E) {
            return this.error(E);
          }
          var f = new ft(),
            d = new Ke(),
            p = { window: f, subscription: d };
          this.contexts.push(p);
          var b = wr(this, a, p);
          b.closed
            ? this.closeWindow(this.contexts.length - 1)
            : ((b.context = p), d.add(b)),
            this.destination.next(f);
        } else this.closeWindow(this.contexts.indexOf(r));
      }),
      (e.prototype.notifyError = function (r) {
        this.error(r);
      }),
      (e.prototype.notifyComplete = function (r) {
        r !== this.openSubscription &&
          this.closeWindow(this.contexts.indexOf(r.context));
      }),
      (e.prototype.closeWindow = function (r) {
        if (r !== -1) {
          var n = this.contexts,
            i = n[r],
            s = i.window,
            o = i.subscription;
          n.splice(r, 1), s.complete(), o.unsubscribe();
        }
      }),
      e
    );
  })(Rn);
function wR(t) {
  return function (r) {
    return r.lift(new SR(t));
  };
}
var SR = (function () {
    function t(e) {
      this.closingSelector = e;
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new ER(e, this.closingSelector));
      }),
      t
    );
  })(),
  ER = (function (t) {
    F.__extends(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      return (i.destination = r), (i.closingSelector = n), i.openWindow(), i;
    }
    return (
      (e.prototype.notifyNext = function (r, n, i, s, o) {
        this.openWindow(o);
      }),
      (e.prototype.notifyError = function (r) {
        this._error(r);
      }),
      (e.prototype.notifyComplete = function (r) {
        this.openWindow(r);
      }),
      (e.prototype._next = function (r) {
        this.window.next(r);
      }),
      (e.prototype._error = function (r) {
        this.window.error(r),
          this.destination.error(r),
          this.unsubscribeClosingNotification();
      }),
      (e.prototype._complete = function () {
        this.window.complete(),
          this.destination.complete(),
          this.unsubscribeClosingNotification();
      }),
      (e.prototype.unsubscribeClosingNotification = function () {
        this.closingNotification && this.closingNotification.unsubscribe();
      }),
      (e.prototype.openWindow = function (r) {
        r === void 0 && (r = null), r && (this.remove(r), r.unsubscribe());
        var n = this.window;
        n && n.complete();
        var i = (this.window = new ft());
        this.destination.next(i);
        var s;
        try {
          var o = this.closingSelector;
          s = o();
        } catch (a) {
          this.destination.error(a), this.window.error(a);
          return;
        }
        this.add((this.closingNotification = wr(this, s)));
      }),
      e
    );
  })(Rn);
function xR() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return function (r) {
    var n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    var i = t;
    return r.lift(new MR(i, n));
  };
}
var MR = (function () {
    function t(e, r) {
      (this.observables = e), (this.project = r);
    }
    return (
      (t.prototype.call = function (e, r) {
        return r.subscribe(new CR(e, this.observables, this.project));
      }),
      t
    );
  })(),
  CR = (function (t) {
    F.__extends(e, t);
    function e(r, n, i) {
      var s = t.call(this, r) || this;
      (s.observables = n), (s.project = i), (s.toRespond = []);
      var o = n.length;
      s.values = new Array(o);
      for (var a = 0; a < o; a++) s.toRespond.push(a);
      for (var a = 0; a < o; a++) {
        var c = n[a];
        s.add(wr(s, c, void 0, a));
      }
      return s;
    }
    return (
      (e.prototype.notifyNext = function (r, n, i) {
        this.values[i] = n;
        var s = this.toRespond;
        if (s.length > 0) {
          var o = s.indexOf(i);
          o !== -1 && s.splice(o, 1);
        }
      }),
      (e.prototype.notifyComplete = function () {}),
      (e.prototype._next = function (r) {
        if (this.toRespond.length === 0) {
          var n = [r].concat(this.values);
          this.project ? this._tryProject(n) : this.destination.next(n);
        }
      }),
      (e.prototype._tryProject = function (r) {
        var n;
        try {
          n = this.project.apply(this, r);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        this.destination.next(n);
      }),
      e
    );
  })(Rn);
function RR() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return function (n) {
    return n.lift.call(o0.apply(void 0, [n].concat(t)));
  };
}
function IR(t) {
  return function (e) {
    return e.lift(new a0(t));
  };
}
const AR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        audit: M0,
        auditTime: Ax,
        buffer: kx,
        bufferCount: Nx,
        bufferTime: Dx,
        bufferToggle: Wx,
        bufferWhen: zx,
        catchError: Jx,
        combineAll: Yx,
        combineLatest: Kx,
        concat: Xx,
        concatAll: Yp,
        concatMap: R0,
        concatMapTo: e5,
        count: t5,
        debounce: i5,
        debounceTime: a5,
        defaultIfEmpty: As,
        delay: d5,
        delayWhen: b5,
        dematerialize: w5,
        distinct: x5,
        distinctUntilChanged: A0,
        distinctUntilKeyChanged: A5,
        elementAt: P5,
        endWith: $5,
        every: D5,
        exhaust: F5,
        exhaustMap: k0,
        expand: z5,
        filter: Fr,
        finalize: J5,
        find: Y5,
        findIndex: X5,
        first: eM,
        flatMap: Q3,
        groupBy: i3,
        ignoreElements: tM,
        isEmpty: iM,
        last: cM,
        map: Wt,
        mapTo: lM,
        materialize: dM,
        max: yM,
        merge: mM,
        mergeAll: Dc,
        mergeMap: mn,
        mergeMapTo: _M,
        mergeScan: wM,
        min: xM,
        multicast: _n,
        observeOn: p3,
        onErrorResumeNext: CM,
        pairwise: AM,
        partition: OM,
        pluck: NM,
        publish: PM,
        publishBehavior: $M,
        publishLast: DM,
        publishReplay: jM,
        race: BM,
        reduce: ha,
        refCount: Oc,
        repeat: FM,
        repeatWhen: WM,
        retry: zM,
        retryWhen: JM,
        sample: YM,
        sampleTime: eC,
        scan: fo,
        sequenceEqual: iC,
        share: cC,
        shareReplay: lC,
        single: hC,
        skip: gC,
        skipLast: yC,
        skipUntil: wC,
        skipWhile: xC,
        startWith: RC,
        subscribeOn: AC,
        switchAll: NC,
        switchMap: is,
        switchMapTo: LC,
        take: Yc,
        takeLast: lo,
        takeUntil: PC,
        takeWhile: jC,
        tap: HC,
        throttle: UC,
        throttleTime: GC,
        throwIfEmpty: fa,
        timeInterval: YC,
        timeout: tR,
        timeoutWith: N0,
        timestamp: rR,
        toArray: sR,
        window: oR,
        windowCount: cR,
        windowTime: hR,
        windowToggle: yR,
        windowWhen: wR,
        withLatestFrom: xR,
        zip: RR,
        zipAll: IR,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Kc = mi(AR);
var da = {},
  Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.ClientMessagePublishEvent =
  Dt.ClientMessageSetSessionConfig =
  Dt.ClientMessageGetSessionConfig =
  Dt.ClientMessageIsLinked =
  Dt.ClientMessageHostSession =
    void 0;
function kR(t) {
  return Object.assign({ type: "HostSession" }, t);
}
Dt.ClientMessageHostSession = kR;
function TR(t) {
  return Object.assign({ type: "IsLinked" }, t);
}
Dt.ClientMessageIsLinked = TR;
function OR(t) {
  return Object.assign({ type: "GetSessionConfig" }, t);
}
Dt.ClientMessageGetSessionConfig = OR;
function NR(t) {
  return Object.assign({ type: "SetSessionConfig" }, t);
}
Dt.ClientMessageSetSessionConfig = NR;
function LR(t) {
  return Object.assign({ type: "PublishEvent" }, t);
}
Dt.ClientMessagePublishEvent = LR;
var P0 = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.RxWebSocket = t.ConnectionState = void 0);
  const e = Qo,
    r = Kc;
  var n;
  (function (s) {
    (s[(s.DISCONNECTED = 0)] = "DISCONNECTED"),
      (s[(s.CONNECTING = 1)] = "CONNECTING"),
      (s[(s.CONNECTED = 2)] = "CONNECTED");
  })((n = t.ConnectionState || (t.ConnectionState = {})));
  class i {
    constructor(o, a = WebSocket) {
      (this.WebSocketClass = a),
        (this.webSocket = null),
        (this.connectionStateSubject = new e.BehaviorSubject(n.DISCONNECTED)),
        (this.incomingDataSubject = new e.Subject()),
        (this.url = o.replace(/^http/, "ws"));
    }
    connect() {
      return this.webSocket
        ? (0, e.throwError)(new Error("webSocket object is not null"))
        : new e.Observable((o) => {
            let a;
            try {
              this.webSocket = a = new this.WebSocketClass(this.url);
            } catch (c) {
              o.error(c);
              return;
            }
            this.connectionStateSubject.next(n.CONNECTING),
              (a.onclose = (c) => {
                this.clearWebSocket(),
                  o.error(new Error(`websocket error ${c.code}: ${c.reason}`)),
                  this.connectionStateSubject.next(n.DISCONNECTED);
              }),
              (a.onopen = (c) => {
                o.next(),
                  o.complete(),
                  this.connectionStateSubject.next(n.CONNECTED);
              }),
              (a.onmessage = (c) => {
                this.incomingDataSubject.next(c.data);
              });
          }).pipe((0, r.take)(1));
    }
    disconnect() {
      const { webSocket: o } = this;
      if (o) {
        this.clearWebSocket(), this.connectionStateSubject.next(n.DISCONNECTED);
        try {
          o.close();
        } catch {}
      }
    }
    get connectionState$() {
      return this.connectionStateSubject.asObservable();
    }
    get incomingData$() {
      return this.incomingDataSubject.asObservable();
    }
    get incomingJSONData$() {
      return this.incomingData$.pipe(
        (0, r.flatMap)((o) => {
          let a;
          try {
            a = JSON.parse(o);
          } catch {
            return (0, e.empty)();
          }
          return (0, e.of)(a);
        })
      );
    }
    sendData(o) {
      const { webSocket: a } = this;
      if (!a) throw new Error("websocket is not connected");
      a.send(o);
    }
    clearWebSocket() {
      const { webSocket: o } = this;
      o &&
        ((this.webSocket = null),
        (o.onclose = null),
        (o.onerror = null),
        (o.onmessage = null),
        (o.onopen = null));
    }
  }
  t.RxWebSocket = i;
})(P0);
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.isServerMessageFail = void 0;
function PR(t) {
  return (
    t &&
    t.type === "Fail" &&
    typeof t.id == "number" &&
    typeof t.sessionId == "string" &&
    typeof t.error == "string"
  );
}
pa.isServerMessageFail = PR;
Object.defineProperty(da, "__esModule", { value: !0 });
da.WalletSDKConnection = void 0;
const Ut = Qo,
  fe = Kc,
  ji = Si,
  Un = fs,
  Bi = Dt,
  Fi = _i,
  Vs = P0,
  pu = pa,
  wh = 1e4,
  $R = 6e4;
class DR {
  constructor(e, r, n, i, s = WebSocket) {
    (this.sessionId = e),
      (this.sessionKey = r),
      (this.diagnostic = i),
      (this.subscriptions = new Ut.Subscription()),
      (this.destroyed = !1),
      (this.lastHeartbeatResponse = 0),
      (this.nextReqId = (0, Un.IntNumber)(1)),
      (this.connectedSubject = new Ut.BehaviorSubject(!1)),
      (this.linkedSubject = new Ut.BehaviorSubject(!1)),
      (this.sessionConfigSubject = new Ut.ReplaySubject(1));
    const o = new Vs.RxWebSocket(n + "/rpc", s);
    (this.ws = o),
      this.subscriptions.add(
        o.connectionState$
          .pipe(
            (0, fe.tap)((a) => {
              var c;
              return (c = this.diagnostic) === null || c === void 0
                ? void 0
                : c.log(Fi.EVENTS.CONNECTED_STATE_CHANGE, {
                    state: a,
                    sessionIdHash: ji.Session.hash(e),
                  });
            }),
            (0, fe.skip)(1),
            (0, fe.filter)(
              (a) => a === Vs.ConnectionState.DISCONNECTED && !this.destroyed
            ),
            (0, fe.delay)(5e3),
            (0, fe.filter)((a) => !this.destroyed),
            (0, fe.flatMap)((a) => o.connect()),
            (0, fe.retry)()
          )
          .subscribe()
      ),
      this.subscriptions.add(
        o.connectionState$
          .pipe(
            (0, fe.skip)(2),
            (0, fe.switchMap)((a) =>
              (0, Ut.iif)(
                () => a === Vs.ConnectionState.CONNECTED,
                this.authenticate().pipe(
                  (0, fe.tap)((c) => this.sendIsLinked()),
                  (0, fe.tap)((c) => this.sendGetSessionConfig()),
                  (0, fe.map)((c) => !0)
                ),
                (0, Ut.of)(!1)
              )
            ),
            (0, fe.distinctUntilChanged)(),
            (0, fe.catchError)((a) => (0, Ut.of)(!1))
          )
          .subscribe((a) => this.connectedSubject.next(a))
      ),
      this.subscriptions.add(
        o.connectionState$
          .pipe(
            (0, fe.skip)(1),
            (0, fe.switchMap)((a) =>
              (0, Ut.iif)(
                () => a === Vs.ConnectionState.CONNECTED,
                (0, Ut.timer)(0, wh)
              )
            )
          )
          .subscribe((a) =>
            a === 0 ? this.updateLastHeartbeat() : this.heartbeat()
          )
      ),
      this.subscriptions.add(
        o.incomingData$
          .pipe((0, fe.filter)((a) => a === "h"))
          .subscribe((a) => this.updateLastHeartbeat())
      ),
      this.subscriptions.add(
        o.incomingJSONData$
          .pipe(
            (0, fe.filter)((a) => ["IsLinkedOK", "Linked"].includes(a.type))
          )
          .subscribe((a) => {
            var c;
            const f = a;
            (c = this.diagnostic) === null ||
              c === void 0 ||
              c.log(Fi.EVENTS.LINKED, {
                sessionIdHash: ji.Session.hash(e),
                linked: f.linked,
                type: a.type,
                onlineGuests: f.onlineGuests,
              }),
              this.linkedSubject.next(f.linked || f.onlineGuests > 0);
          })
      ),
      this.subscriptions.add(
        o.incomingJSONData$
          .pipe(
            (0, fe.filter)((a) =>
              ["GetSessionConfigOK", "SessionConfigUpdated"].includes(a.type)
            )
          )
          .subscribe((a) => {
            var c;
            const f = a;
            (c = this.diagnostic) === null ||
              c === void 0 ||
              c.log(Fi.EVENTS.SESSION_CONFIG_RECEIVED, {
                sessionIdHash: ji.Session.hash(e),
                metadata_keys:
                  f && f.metadata ? Object.keys(f.metadata) : void 0,
              }),
              this.sessionConfigSubject.next({
                webhookId: f.webhookId,
                webhookUrl: f.webhookUrl,
                metadata: f.metadata,
              });
          })
      );
  }
  connect() {
    var e;
    if (this.destroyed) throw new Error("instance is destroyed");
    (e = this.diagnostic) === null ||
      e === void 0 ||
      e.log(Fi.EVENTS.STARTED_CONNECTING, {
        sessionIdHash: ji.Session.hash(this.sessionId),
      }),
      this.ws.connect().subscribe();
  }
  destroy() {
    var e;
    this.subscriptions.unsubscribe(),
      this.ws.disconnect(),
      (e = this.diagnostic) === null ||
        e === void 0 ||
        e.log(Fi.EVENTS.DISCONNECTED, {
          sessionIdHash: ji.Session.hash(this.sessionId),
        }),
      (this.destroyed = !0);
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected$() {
    return this.connectedSubject.asObservable();
  }
  get onceConnected$() {
    return this.connected$.pipe(
      (0, fe.filter)((e) => e),
      (0, fe.take)(1),
      (0, fe.map)(() => {})
    );
  }
  get linked$() {
    return this.linkedSubject.asObservable();
  }
  get onceLinked$() {
    return this.linked$.pipe(
      (0, fe.filter)((e) => e),
      (0, fe.take)(1),
      (0, fe.map)(() => {})
    );
  }
  get sessionConfig$() {
    return this.sessionConfigSubject.asObservable();
  }
  get incomingEvent$() {
    return this.ws.incomingJSONData$.pipe(
      (0, fe.filter)((e) => {
        if (e.type !== "Event") return !1;
        const r = e;
        return (
          typeof r.sessionId == "string" &&
          typeof r.eventId == "string" &&
          typeof r.event == "string" &&
          typeof r.data == "string"
        );
      }),
      (0, fe.map)((e) => e)
    );
  }
  setSessionMetadata(e, r) {
    const n = (0, Bi.ClientMessageSetSessionConfig)({
      id: (0, Un.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      metadata: { [e]: r },
    });
    return this.onceConnected$.pipe(
      (0, fe.flatMap)((i) => this.makeRequest(n)),
      (0, fe.map)((i) => {
        if ((0, pu.isServerMessageFail)(i))
          throw new Error(i.error || "failed to set session metadata");
      })
    );
  }
  publishEvent(e, r, n = !1) {
    const i = (0, Bi.ClientMessagePublishEvent)({
      id: (0, Un.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      event: e,
      data: r,
      callWebhook: n,
    });
    return this.onceLinked$.pipe(
      (0, fe.flatMap)((s) => this.makeRequest(i)),
      (0, fe.map)((s) => {
        if ((0, pu.isServerMessageFail)(s))
          throw new Error(s.error || "failed to publish event");
        return s.eventId;
      })
    );
  }
  sendData(e) {
    this.ws.sendData(JSON.stringify(e));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > wh * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {}
  }
  makeRequest(e, r = $R) {
    const n = e.id;
    try {
      this.sendData(e);
    } catch (i) {
      return (0, Ut.throwError)(i);
    }
    return this.ws.incomingJSONData$.pipe(
      (0, fe.timeoutWith)(
        r,
        (0, Ut.throwError)(new Error(`request ${n} timed out`))
      ),
      (0, fe.filter)((i) => i.id === n),
      (0, fe.take)(1)
    );
  }
  authenticate() {
    const e = (0, Bi.ClientMessageHostSession)({
      id: (0, Un.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      sessionKey: this.sessionKey,
    });
    return this.makeRequest(e).pipe(
      (0, fe.map)((r) => {
        if ((0, pu.isServerMessageFail)(r))
          throw new Error(r.error || "failed to authentcate");
      })
    );
  }
  sendIsLinked() {
    const e = (0, Bi.ClientMessageIsLinked)({
      id: (0, Un.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
    });
    this.sendData(e);
  }
  sendGetSessionConfig() {
    const e = (0, Bi.ClientMessageGetSessionConfig)({
      id: (0, Un.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
    });
    this.sendData(e);
  }
}
da.WalletSDKConnection = DR;
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.decrypt = bi.encrypt = void 0;
const ho = Z;
async function jR(t, e) {
  if (e.length !== 64) throw Error("secret must be 256 bits");
  const r = crypto.getRandomValues(new Uint8Array(12)),
    n = await crypto.subtle.importKey(
      "raw",
      (0, ho.hexStringToUint8Array)(e),
      { name: "aes-gcm" },
      !1,
      ["encrypt", "decrypt"]
    ),
    i = new TextEncoder(),
    s = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: r },
      n,
      i.encode(t)
    ),
    o = 16,
    a = s.slice(s.byteLength - o),
    c = s.slice(0, s.byteLength - o),
    f = new Uint8Array(a),
    d = new Uint8Array(c),
    p = new Uint8Array([...r, ...f, ...d]);
  return (0, ho.uint8ArrayToHex)(p);
}
bi.encrypt = jR;
function BR(t, e) {
  if (e.length !== 64) throw Error("secret must be 256 bits");
  return new Promise((r, n) => {
    (async function () {
      const i = await crypto.subtle.importKey(
          "raw",
          (0, ho.hexStringToUint8Array)(e),
          { name: "aes-gcm" },
          !1,
          ["encrypt", "decrypt"]
        ),
        s = (0, ho.hexStringToUint8Array)(t),
        o = s.slice(0, 12),
        a = s.slice(12, 28),
        c = s.slice(28),
        f = new Uint8Array([...c, ...a]),
        d = { name: "AES-GCM", iv: new Uint8Array(o) };
      try {
        const p = await window.crypto.subtle.decrypt(d, i, f),
          b = new TextDecoder();
        r(b.decode(p));
      } catch (p) {
        n(p);
      }
    })();
  });
}
bi.decrypt = BR;
var ga = {},
  va = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.RelayMessageType = void 0),
    (function (e) {
      (e.SESSION_ID_REQUEST = "SESSION_ID_REQUEST"),
        (e.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE"),
        (e.LINKED = "LINKED"),
        (e.UNLINKED = "UNLINKED"),
        (e.WEB3_REQUEST = "WEB3_REQUEST"),
        (e.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED"),
        (e.WEB3_RESPONSE = "WEB3_RESPONSE");
    })(t.RelayMessageType || (t.RelayMessageType = {}));
})(va);
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.Web3RequestCanceledMessage = void 0;
const FR = va;
function HR(t) {
  return { type: FR.RelayMessageType.WEB3_REQUEST_CANCELED, id: t };
}
ga.Web3RequestCanceledMessage = HR;
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.Web3RequestMessage = void 0;
const WR = va;
function VR(t) {
  return Object.assign({ type: WR.RelayMessageType.WEB3_REQUEST }, t);
}
ba.Web3RequestMessage = VR;
var yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.isWeb3ResponseMessage = yi.Web3ResponseMessage = void 0;
const $0 = va;
function UR(t) {
  return Object.assign({ type: $0.RelayMessageType.WEB3_RESPONSE }, t);
}
yi.Web3ResponseMessage = UR;
function zR(t) {
  return t && t.type === $0.RelayMessageType.WEB3_RESPONSE;
}
yi.isWeb3ResponseMessage = zR;
var qR =
    (J && J.__createBinding) ||
    (Object.create
      ? function (t, e, r, n) {
          n === void 0 && (n = r),
            Object.defineProperty(t, n, {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            });
        }
      : function (t, e, r, n) {
          n === void 0 && (n = r), (t[n] = e[r]);
        }),
  GR =
    (J && J.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, "default", { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  D0 =
    (J && J.__decorate) ||
    function (t, e, r, n) {
      var i = arguments.length,
        s =
          i < 3
            ? e
            : n === null
            ? (n = Object.getOwnPropertyDescriptor(e, r))
            : n,
        o;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        s = Reflect.decorate(t, e, r, n);
      else
        for (var a = t.length - 1; a >= 0; a--)
          (o = t[a]) &&
            (s = (i < 3 ? o(s) : i > 3 ? o(e, r, s) : o(e, r)) || s);
      return i > 3 && s && Object.defineProperty(e, r, s), s;
    },
  JR =
    (J && J.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var r in t)
          r !== "default" &&
            Object.prototype.hasOwnProperty.call(t, r) &&
            qR(e, t, r);
      return GR(e, t), e;
    },
  ZR =
    (J && J.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.WalletSDKRelay = void 0;
const j0 = ZR(la),
  sn = Qo,
  it = Kc,
  bt = _i,
  QR = da,
  zn = ss,
  YR = fs,
  Ze = Z,
  Cr = JR(bi),
  Rr = Si,
  Us = Jt,
  ht = _o,
  KR = ga,
  XR = ba,
  Pt = Ee,
  Mt = yi;
class Gt extends Us.WalletSDKRelayAbstract {
  constructor(e) {
    var r;
    super(),
      (this.accountsCallback = null),
      (this.chainCallback = null),
      (this.dappDefaultChainSubject = new sn.BehaviorSubject(1)),
      (this.dappDefaultChain = 1),
      (this.appName = ""),
      (this.appLogoUrl = null),
      (this.subscriptions = new sn.Subscription()),
      (this.linkAPIUrl = e.linkAPIUrl),
      (this.storage = e.storage),
      (this.options = e);
    const { session: n, ui: i, connection: s } = this.subscribe();
    if (
      ((this._session = n),
      (this.connection = s),
      (this.relayEventManager = e.relayEventManager),
      e.diagnosticLogger && e.eventListener)
    )
      throw new Error(
        "Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger"
      );
    e.eventListener
      ? (this.diagnostic = { log: e.eventListener.onEvent })
      : (this.diagnostic = e.diagnosticLogger),
      (this._reloadOnDisconnect =
        (r = e.reloadOnDisconnect) !== null && r !== void 0 ? r : !0),
      (this.ui = i);
  }
  subscribe() {
    this.subscriptions.add(
      this.dappDefaultChainSubject.subscribe((i) => {
        this.dappDefaultChain !== i && (this.dappDefaultChain = i);
      })
    );
    const e =
        Rr.Session.load(this.storage) || new Rr.Session(this.storage).save(),
      r = new QR.WalletSDKConnection(
        e.id,
        e.key,
        this.linkAPIUrl,
        this.diagnostic
      );
    this.subscriptions.add(
      r.sessionConfig$.subscribe({
        next: (i) => {
          this.onSessionConfigChanged(i);
        },
        error: () => {
          var i;
          (i = this.diagnostic) === null ||
            i === void 0 ||
            i.log(bt.EVENTS.GENERAL_ERROR, {
              message: "error while invoking session config callback",
            });
        },
      })
    ),
      this.subscriptions.add(
        r.incomingEvent$
          .pipe((0, it.filter)((i) => i.event === "Web3Response"))
          .subscribe({ next: this.handleIncomingEvent })
      ),
      this.subscriptions.add(
        r.linked$
          .pipe(
            (0, it.skip)(1),
            (0, it.tap)((i) => {
              var s;
              this.isLinked = i;
              const o = this.storage.getItem(Us.LOCAL_STORAGE_ADDRESSES_KEY);
              if (
                (i && (this.session.linked = i),
                (this.isUnlinkedErrorState = !1),
                o)
              ) {
                const a = o.split(" "),
                  c = this.storage.getItem("IsStandaloneSigning") === "true";
                if (a[0] !== "" && !i && this.session.linked && !c) {
                  this.isUnlinkedErrorState = !0;
                  const f = this.getSessionIdHash();
                  (s = this.diagnostic) === null ||
                    s === void 0 ||
                    s.log(bt.EVENTS.UNLINKED_ERROR_STATE, { sessionIdHash: f });
                }
              }
            })
          )
          .subscribe()
      ),
      this.subscriptions.add(
        r.sessionConfig$
          .pipe(
            (0, it.filter)(
              (i) => !!i.metadata && i.metadata.__destroyed === "1"
            )
          )
          .subscribe(() => {
            var i;
            const s = r.isDestroyed;
            return (
              (i = this.diagnostic) === null ||
                i === void 0 ||
                i.log(bt.EVENTS.METADATA_DESTROYED, {
                  alreadyDestroyed: s,
                  sessionIdHash: this.getSessionIdHash(),
                }),
              this.resetAndReload()
            );
          })
      ),
      this.subscriptions.add(
        r.sessionConfig$
          .pipe(
            (0, it.filter)(
              (i) => i.metadata && i.metadata.WalletUsername !== void 0
            )
          )
          .pipe(
            (0, it.mergeMap)((i) =>
              Cr.decrypt(i.metadata.WalletUsername, e.secret)
            )
          )
          .subscribe({
            next: (i) => {
              this.storage.setItem(Us.WALLET_USER_NAME_KEY, i);
            },
            error: () => {
              var i;
              (i = this.diagnostic) === null ||
                i === void 0 ||
                i.log(bt.EVENTS.GENERAL_ERROR, {
                  message: "Had error decrypting",
                  value: "username",
                });
            },
          })
      ),
      this.subscriptions.add(
        r.sessionConfig$
          .pipe(
            (0, it.filter)(
              (i) => i.metadata && i.metadata.AppVersion !== void 0
            )
          )
          .pipe(
            (0, it.mergeMap)((i) => Cr.decrypt(i.metadata.AppVersion, e.secret))
          )
          .subscribe({
            next: (i) => {
              this.storage.setItem(Us.APP_VERSION_KEY, i);
            },
            error: () => {
              var i;
              (i = this.diagnostic) === null ||
                i === void 0 ||
                i.log(bt.EVENTS.GENERAL_ERROR, {
                  message: "Had error decrypting",
                  value: "appversion",
                });
            },
          })
      ),
      this.subscriptions.add(
        r.sessionConfig$
          .pipe(
            (0, it.filter)(
              (i) =>
                i.metadata &&
                i.metadata.ChainId !== void 0 &&
                i.metadata.JsonRpcUrl !== void 0
            )
          )
          .pipe(
            (0, it.mergeMap)((i) =>
              (0, sn.zip)(
                Cr.decrypt(i.metadata.ChainId, e.secret),
                Cr.decrypt(i.metadata.JsonRpcUrl, e.secret)
              )
            )
          )
          .pipe((0, it.distinctUntilChanged)())
          .subscribe({
            next: ([i, s]) => {
              this.chainCallback && this.chainCallback(i, s);
            },
            error: () => {
              var i;
              (i = this.diagnostic) === null ||
                i === void 0 ||
                i.log(bt.EVENTS.GENERAL_ERROR, {
                  message: "Had error decrypting",
                  value: "chainId|jsonRpcUrl",
                });
            },
          })
      ),
      this.subscriptions.add(
        r.sessionConfig$
          .pipe(
            (0, it.filter)(
              (i) => i.metadata && i.metadata.EthereumAddress !== void 0
            )
          )
          .pipe(
            (0, it.mergeMap)((i) =>
              Cr.decrypt(i.metadata.EthereumAddress, e.secret)
            )
          )
          .subscribe({
            next: (i) => {
              this.accountsCallback && this.accountsCallback([i]),
                Gt.accountRequestCallbackIds.size > 0 &&
                  (Array.from(Gt.accountRequestCallbackIds.values()).forEach(
                    (s) => {
                      const o = (0, Mt.Web3ResponseMessage)({
                        id: s,
                        response: (0, Pt.RequestEthereumAccountsResponse)([i]),
                      });
                      this.invokeCallback(
                        Object.assign(Object.assign({}, o), { id: s })
                      );
                    }
                  ),
                  Gt.accountRequestCallbackIds.clear());
            },
            error: () => {
              var i;
              (i = this.diagnostic) === null ||
                i === void 0 ||
                i.log(bt.EVENTS.GENERAL_ERROR, {
                  message: "Had error decrypting",
                  value: "selectedAddress",
                });
            },
          })
      ),
      this.subscriptions.add(
        r.sessionConfig$
          .pipe(
            (0, it.filter)((i) => i.metadata && i.metadata.AppSrc !== void 0)
          )
          .pipe(
            (0, it.mergeMap)((i) => Cr.decrypt(i.metadata.AppSrc, e.secret))
          )
          .subscribe({
            next: (i) => {
              this.ui.setAppSrc(i);
            },
            error: () => {
              var i;
              (i = this.diagnostic) === null ||
                i === void 0 ||
                i.log(bt.EVENTS.GENERAL_ERROR, {
                  message: "Had error decrypting",
                  value: "appSrc",
                });
            },
          })
      );
    const n = this.options.uiConstructor({
      linkAPIUrl: this.options.linkAPIUrl,
      version: this.options.version,
      darkMode: this.options.darkMode,
      session: e,
      connected$: r.connected$,
      chainId$: this.dappDefaultChainSubject,
    });
    return r.connect(), { session: e, ui: n, connection: r };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    this.connection
      .setSessionMetadata("__destroyed", "1")
      .pipe(
        (0, it.timeout)(1e3),
        (0, it.catchError)((e) => (0, sn.of)(null))
      )
      .subscribe(
        (e) => {
          var r, n, i;
          const s = this.ui.isStandalone();
          try {
            this.subscriptions.unsubscribe();
          } catch {
            (r = this.diagnostic) === null ||
              r === void 0 ||
              r.log(bt.EVENTS.GENERAL_ERROR, {
                message: "Had error unsubscribing",
              });
          }
          (n = this.diagnostic) === null ||
            n === void 0 ||
            n.log(bt.EVENTS.SESSION_STATE_CHANGE, {
              method: "relay::resetAndReload",
              sessionMetadataChange: "__destroyed, 1",
              sessionIdHash: this.getSessionIdHash(),
            }),
            this.connection.destroy();
          const o = Rr.Session.load(this.storage);
          if (
            ((o == null ? void 0 : o.id) === this._session.id
              ? this.storage.clear()
              : o &&
                ((i = this.diagnostic) === null ||
                  i === void 0 ||
                  i.log(bt.EVENTS.SKIPPED_CLEARING_SESSION, {
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: Rr.Session.hash(o.id),
                  })),
            this._reloadOnDisconnect)
          ) {
            this.ui.reloadUI();
            return;
          }
          this.accountsCallback && this.accountsCallback([], !0),
            (this.subscriptions = new sn.Subscription());
          const { session: a, ui: c, connection: f } = this.subscribe();
          (this._session = a),
            (this.connection = f),
            (this.ui = c),
            s && this.ui.setStandalone && this.ui.setStandalone(!0),
            this.attachUI();
        },
        (e) => {
          var r;
          (r = this.diagnostic) === null ||
            r === void 0 ||
            r.log(bt.EVENTS.FAILURE, {
              method: "relay::resetAndReload",
              message: `failed to reset and reload with ${e}`,
              sessionIdHash: this.getSessionIdHash(),
            });
        }
      );
  }
  setAppInfo(e, r) {
    (this.appName = e), (this.appLogoUrl = r);
  }
  getStorageItem(e) {
    return this.storage.getItem(e);
  }
  get session() {
    return this._session;
  }
  setStorageItem(e, r) {
    this.storage.setItem(e, r);
  }
  signEthereumMessage(e, r, n, i) {
    return this.sendRequest({
      method: ht.Web3Method.signEthereumMessage,
      params: {
        message: (0, Ze.hexStringFromBuffer)(e, !0),
        address: r,
        addPrefix: n,
        typedDataJson: i || null,
      },
    });
  }
  ethereumAddressFromSignedMessage(e, r, n) {
    return this.sendRequest({
      method: ht.Web3Method.ethereumAddressFromSignedMessage,
      params: {
        message: (0, Ze.hexStringFromBuffer)(e, !0),
        signature: (0, Ze.hexStringFromBuffer)(r, !0),
        addPrefix: n,
      },
    });
  }
  signEthereumTransaction(e) {
    return this.sendRequest({
      method: ht.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, Ze.bigIntStringFromBN)(e.weiValue),
        data: (0, Ze.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei
          ? (0, Ze.bigIntStringFromBN)(e.gasPriceInWei)
          : null,
        maxFeePerGas: e.gasPriceInWei
          ? (0, Ze.bigIntStringFromBN)(e.gasPriceInWei)
          : null,
        maxPriorityFeePerGas: e.gasPriceInWei
          ? (0, Ze.bigIntStringFromBN)(e.gasPriceInWei)
          : null,
        gasLimit: e.gasLimit ? (0, Ze.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !1,
      },
    });
  }
  signAndSubmitEthereumTransaction(e) {
    return this.sendRequest({
      method: ht.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, Ze.bigIntStringFromBN)(e.weiValue),
        data: (0, Ze.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei
          ? (0, Ze.bigIntStringFromBN)(e.gasPriceInWei)
          : null,
        maxFeePerGas: e.maxFeePerGas
          ? (0, Ze.bigIntStringFromBN)(e.maxFeePerGas)
          : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas
          ? (0, Ze.bigIntStringFromBN)(e.maxPriorityFeePerGas)
          : null,
        gasLimit: e.gasLimit ? (0, Ze.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0,
      },
    });
  }
  submitEthereumTransaction(e, r) {
    return this.sendRequest({
      method: ht.Web3Method.submitEthereumTransaction,
      params: {
        signedTransaction: (0, Ze.hexStringFromBuffer)(e, !0),
        chainId: r,
      },
    });
  }
  scanQRCode(e) {
    return this.sendRequest({
      method: ht.Web3Method.scanQRCode,
      params: { regExp: e },
    });
  }
  getQRCodeUrl() {
    return (0, Ze.createQrUrl)(
      this._session.id,
      this._session.secret,
      this.linkAPIUrl,
      !1,
      this.options.version,
      this.dappDefaultChain
    );
  }
  genericRequest(e, r) {
    return this.sendRequest({
      method: ht.Web3Method.generic,
      params: { action: r, data: e },
    });
  }
  sendGenericMessage(e) {
    return this.sendRequest(e);
  }
  sendRequest(e) {
    let r = null;
    const n = (0, Ze.randomBytesHex)(8),
      i = (o) => {
        this.publishWeb3RequestCanceledEvent(n),
          this.handleErrorResponse(n, e.method, o),
          r == null || r();
      };
    return {
      promise: new Promise((o, a) => {
        this.ui.isStandalone() ||
          (r = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: i,
            onResetConnection: this.resetAndReload,
          })),
          this.relayEventManager.callbacks.set(n, (c) => {
            if ((r == null || r(), c.errorMessage))
              return a(new Error(c.errorMessage));
            o(c);
          }),
          this.ui.isStandalone()
            ? this.sendRequestStandalone(n, e)
            : this.publishWeb3RequestEvent(n, e);
      }),
      cancel: i,
    };
  }
  setConnectDisabled(e) {
    this.ui.setConnectDisabled(e);
  }
  setAccountsCallback(e) {
    this.accountsCallback = e;
  }
  setChainCallback(e) {
    this.chainCallback = e;
  }
  setDappDefaultChainCallback(e) {
    this.dappDefaultChainSubject.next(e);
  }
  publishWeb3RequestEvent(e, r) {
    var n;
    const i = (0, XR.Web3RequestMessage)({ id: e, request: r }),
      s = Rr.Session.load(this.storage);
    (n = this.diagnostic) === null ||
      n === void 0 ||
      n.log(bt.EVENTS.WEB3_REQUEST, {
        eventId: i.id,
        method: `relay::${i.request.method}`,
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: s ? Rr.Session.hash(s.id) : "",
        isSessionMismatched: (
          (s == null ? void 0 : s.id) !== this._session.id
        ).toString(),
      }),
      this.subscriptions.add(
        this.publishEvent("Web3Request", i, !0).subscribe({
          next: (o) => {
            var a;
            (a = this.diagnostic) === null ||
              a === void 0 ||
              a.log(bt.EVENTS.WEB3_REQUEST_PUBLISHED, {
                eventId: i.id,
                method: `relay::${i.request.method}`,
                sessionIdHash: this.getSessionIdHash(),
                storedSessionIdHash: s ? Rr.Session.hash(s.id) : "",
                isSessionMismatched: (
                  (s == null ? void 0 : s.id) !== this._session.id
                ).toString(),
              });
          },
          error: (o) => {
            this.handleWeb3ResponseMessage(
              (0, Mt.Web3ResponseMessage)({
                id: i.id,
                response: { method: i.request.method, errorMessage: o.message },
              })
            );
          },
        })
      );
  }
  publishWeb3RequestCanceledEvent(e) {
    const r = (0, KR.Web3RequestCanceledMessage)(e);
    this.subscriptions.add(
      this.publishEvent("Web3RequestCanceled", r, !1).subscribe()
    );
  }
  publishEvent(e, r, n) {
    const i = this.session.secret;
    return new sn.Observable((s) => {
      Cr.encrypt(
        JSON.stringify(
          Object.assign(Object.assign({}, r), { origin: location.origin })
        ),
        i
      ).then((o) => {
        s.next(o), s.complete();
      });
    }).pipe((0, it.mergeMap)((s) => this.connection.publishEvent(e, s, n)));
  }
  handleIncomingEvent(e) {
    try {
      this.subscriptions.add(
        (0, sn.from)(Cr.decrypt(e.data, this.session.secret))
          .pipe((0, it.map)((r) => JSON.parse(r)))
          .subscribe({
            next: (r) => {
              const n = (0, Mt.isWeb3ResponseMessage)(r) ? r : null;
              n && this.handleWeb3ResponseMessage(n);
            },
            error: () => {
              var r;
              (r = this.diagnostic) === null ||
                r === void 0 ||
                r.log(bt.EVENTS.GENERAL_ERROR, {
                  message: "Had error decrypting",
                  value: "incomingEvent",
                });
            },
          })
      );
    } catch {
      return;
    }
  }
  handleWeb3ResponseMessage(e) {
    var r;
    const { response: n } = e;
    if (
      ((r = this.diagnostic) === null ||
        r === void 0 ||
        r.log(bt.EVENTS.WEB3_RESPONSE, {
          eventId: e.id,
          method: `relay::${n.method}`,
          sessionIdHash: this.getSessionIdHash(),
        }),
      (0, Pt.isRequestEthereumAccountsResponse)(n))
    ) {
      Gt.accountRequestCallbackIds.forEach((i) =>
        this.invokeCallback(Object.assign(Object.assign({}, e), { id: i }))
      ),
        Gt.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(e);
  }
  handleErrorResponse(e, r, n, i) {
    var s;
    const o =
      (s = n == null ? void 0 : n.message) !== null && s !== void 0
        ? s
        : (0, zn.standardErrorMessage)(i);
    this.handleWeb3ResponseMessage(
      (0, Mt.Web3ResponseMessage)({
        id: e,
        response: { method: r, errorMessage: o, errorCode: i },
      })
    );
  }
  invokeCallback(e) {
    const r = this.relayEventManager.callbacks.get(e.id);
    r && (r(e.response), this.relayEventManager.callbacks.delete(e.id));
  }
  requestEthereumAccounts() {
    const e = {
        method: ht.Web3Method.requestEthereumAccounts,
        params: { appName: this.appName, appLogoUrl: this.appLogoUrl || null },
      },
      r = (0, Ze.randomBytesHex)(8),
      n = (s) => {
        this.publishWeb3RequestCanceledEvent(r),
          this.handleErrorResponse(r, e.method, s);
      };
    return {
      promise: new Promise((s, o) => {
        var a;
        this.relayEventManager.callbacks.set(r, (f) => {
          if ((this.ui.hideRequestEthereumAccounts(), f.errorMessage))
            return o(new Error(f.errorMessage));
          s(f);
        });
        const c =
          ((a = window == null ? void 0 : window.navigator) === null ||
          a === void 0
            ? void 0
            : a.userAgent) || null;
        if (
          c &&
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            c
          )
        ) {
          let f;
          try {
            (0, Ze.isInIFrame)() && window.top
              ? (f = window.top.location)
              : (f = window.location);
          } catch {
            f = window.location;
          }
          f.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(
            f.href
          )}`;
          return;
        }
        if (this.ui.inlineAccountsResponse()) {
          const f = (d) => {
            this.handleWeb3ResponseMessage(
              (0, Mt.Web3ResponseMessage)({
                id: r,
                response: (0, Pt.RequestEthereumAccountsResponse)(d),
              })
            );
          };
          this.ui.requestEthereumAccounts({ onCancel: n, onAccounts: f });
        } else {
          const f = zn.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          );
          this.ui.requestEthereumAccounts({ onCancel: () => n(f) });
        }
        Gt.accountRequestCallbackIds.add(r),
          !this.ui.inlineAccountsResponse() &&
            !this.ui.isStandalone() &&
            this.publishWeb3RequestEvent(r, e);
      }),
      cancel: n,
    };
  }
  selectProvider(e) {
    const r = {
        method: ht.Web3Method.selectProvider,
        params: { providerOptions: e },
      },
      n = (0, Ze.randomBytesHex)(8),
      i = (o) => {
        this.publishWeb3RequestCanceledEvent(n),
          this.handleErrorResponse(n, r.method, o);
      },
      s = new Promise((o, a) => {
        this.relayEventManager.callbacks.set(n, (d) => {
          if (d.errorMessage) return a(new Error(d.errorMessage));
          o(d);
        });
        const c = (d) => {
            this.handleWeb3ResponseMessage(
              (0, Mt.Web3ResponseMessage)({
                id: n,
                response: (0, Pt.SelectProviderResponse)(
                  YR.ProviderType.Unselected
                ),
              })
            );
          },
          f = (d) => {
            this.handleWeb3ResponseMessage(
              (0, Mt.Web3ResponseMessage)({
                id: n,
                response: (0, Pt.SelectProviderResponse)(d),
              })
            );
          };
        this.ui.selectProvider &&
          this.ui.selectProvider({
            onApprove: f,
            onCancel: c,
            providerOptions: e,
          });
      });
    return { cancel: i, promise: s };
  }
  watchAsset(e, r, n, i, s, o) {
    const a = {
      method: ht.Web3Method.watchAsset,
      params: {
        type: e,
        options: { address: r, symbol: n, decimals: i, image: s },
        chainId: o,
      },
    };
    let c = null;
    const f = (0, Ze.randomBytesHex)(8),
      d = (b) => {
        this.publishWeb3RequestCanceledEvent(f),
          this.handleErrorResponse(f, a.method, b),
          c == null || c();
      };
    this.ui.inlineWatchAsset() ||
      (c = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: d,
        onResetConnection: this.resetAndReload,
      }));
    const p = new Promise((b, E) => {
      this.relayEventManager.callbacks.set(f, ($) => {
        if ((c == null || c(), $.errorMessage))
          return E(new Error($.errorMessage));
        b($);
      });
      const R = ($) => {
          this.handleWeb3ResponseMessage(
            (0, Mt.Web3ResponseMessage)({
              id: f,
              response: (0, Pt.WatchAssetReponse)(!1),
            })
          );
        },
        O = () => {
          this.handleWeb3ResponseMessage(
            (0, Mt.Web3ResponseMessage)({
              id: f,
              response: (0, Pt.WatchAssetReponse)(!0),
            })
          );
        };
      this.ui.inlineWatchAsset() &&
        this.ui.watchAsset({
          onApprove: O,
          onCancel: R,
          type: e,
          address: r,
          symbol: n,
          decimals: i,
          image: s,
          chainId: o,
        }),
        !this.ui.inlineWatchAsset() &&
          !this.ui.isStandalone() &&
          this.publishWeb3RequestEvent(f, a);
    });
    return { cancel: d, promise: p };
  }
  addEthereumChain(e, r, n, i, s, o) {
    const a = {
      method: ht.Web3Method.addEthereumChain,
      params: {
        chainId: e,
        rpcUrls: r,
        blockExplorerUrls: i,
        chainName: s,
        iconUrls: n,
        nativeCurrency: o,
      },
    };
    let c = null;
    const f = (0, Ze.randomBytesHex)(8),
      d = (b) => {
        this.publishWeb3RequestCanceledEvent(f),
          this.handleErrorResponse(f, a.method, b),
          c == null || c();
      };
    return (
      this.ui.inlineAddEthereumChain(e) ||
        (c = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: d,
          onResetConnection: this.resetAndReload,
        })),
      {
        promise: new Promise((b, E) => {
          this.relayEventManager.callbacks.set(f, ($) => {
            if ((c == null || c(), $.errorMessage))
              return E(new Error($.errorMessage));
            b($);
          });
          const R = ($) => {
              this.handleWeb3ResponseMessage(
                (0, Mt.Web3ResponseMessage)({
                  id: f,
                  response: (0, Pt.AddEthereumChainResponse)({
                    isApproved: !1,
                    rpcUrl: "",
                  }),
                })
              );
            },
            O = ($) => {
              this.handleWeb3ResponseMessage(
                (0, Mt.Web3ResponseMessage)({
                  id: f,
                  response: (0, Pt.AddEthereumChainResponse)({
                    isApproved: !0,
                    rpcUrl: $,
                  }),
                })
              );
            };
          this.ui.inlineAddEthereumChain(e) &&
            this.ui.addEthereumChain({
              onCancel: R,
              onApprove: O,
              chainId: a.params.chainId,
              rpcUrls: a.params.rpcUrls,
              blockExplorerUrls: a.params.blockExplorerUrls,
              chainName: a.params.chainName,
              iconUrls: a.params.iconUrls,
              nativeCurrency: a.params.nativeCurrency,
            }),
            !this.ui.inlineAddEthereumChain(e) &&
              !this.ui.isStandalone() &&
              this.publishWeb3RequestEvent(f, a);
        }),
        cancel: d,
      }
    );
  }
  switchEthereumChain(e, r) {
    const n = {
        method: ht.Web3Method.switchEthereumChain,
        params: Object.assign({ chainId: e }, { address: r }),
      },
      i = (0, Ze.randomBytesHex)(8),
      s = (a) => {
        this.publishWeb3RequestCanceledEvent(i),
          this.handleErrorResponse(i, n.method, a);
      };
    return {
      promise: new Promise((a, c) => {
        this.relayEventManager.callbacks.set(i, (p) => {
          if ((0, Pt.isErrorResponse)(p) && p.errorCode)
            return c(
              zn.standardErrors.provider.custom({
                code: p.errorCode,
                message:
                  "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
              })
            );
          if (p.errorMessage) return c(new Error(p.errorMessage));
          a(p);
        });
        const f = (p) => {
            var b;
            if (p) {
              const E =
                (b = (0, zn.getErrorCode)(p)) !== null && b !== void 0
                  ? b
                  : zn.standardErrorCodes.provider.unsupportedChain;
              this.handleErrorResponse(
                i,
                ht.Web3Method.switchEthereumChain,
                p instanceof Error
                  ? p
                  : zn.standardErrors.provider.unsupportedChain(e),
                E
              );
            } else
              this.handleWeb3ResponseMessage(
                (0, Mt.Web3ResponseMessage)({
                  id: i,
                  response: (0, Pt.SwitchEthereumChainResponse)({
                    isApproved: !1,
                    rpcUrl: "",
                  }),
                })
              );
          },
          d = (p) => {
            this.handleWeb3ResponseMessage(
              (0, Mt.Web3ResponseMessage)({
                id: i,
                response: (0, Pt.SwitchEthereumChainResponse)({
                  isApproved: !0,
                  rpcUrl: p,
                }),
              })
            );
          };
        this.ui.switchEthereumChain({
          onCancel: f,
          onApprove: d,
          chainId: n.params.chainId,
          address: n.params.address,
        }),
          !this.ui.inlineSwitchEthereumChain() &&
            !this.ui.isStandalone() &&
            this.publishWeb3RequestEvent(i, n);
      }),
      cancel: s,
    };
  }
  inlineAddEthereumChain(e) {
    return this.ui.inlineAddEthereumChain(e);
  }
  getSessionIdHash() {
    return Rr.Session.hash(this._session.id);
  }
  sendRequestStandalone(e, r) {
    const n = (s) => {
        this.handleErrorResponse(e, r.method, s);
      },
      i = (s) => {
        this.handleWeb3ResponseMessage(
          (0, Mt.Web3ResponseMessage)({ id: e, response: s })
        );
      };
    switch (r.method) {
      case ht.Web3Method.signEthereumMessage:
        this.ui.signEthereumMessage({ request: r, onSuccess: i, onCancel: n });
        break;
      case ht.Web3Method.signEthereumTransaction:
        this.ui.signEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n,
        });
        break;
      case ht.Web3Method.submitEthereumTransaction:
        this.ui.submitEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n,
        });
        break;
      case ht.Web3Method.ethereumAddressFromSignedMessage:
        this.ui.ethereumAddressFromSignedMessage({ request: r, onSuccess: i });
        break;
      default:
        n();
        break;
    }
  }
  onSessionConfigChanged(e) {}
}
Gt.accountRequestCallbackIds = new Set();
D0([j0.default], Gt.prototype, "resetAndReload", null);
D0([j0.default], Gt.prototype, "handleIncomingEvent", null);
ca.WalletSDKRelay = Gt;
var ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.WalletSDKRelayEventManager = void 0;
const e6 = Z;
class t6 {
  constructor() {
    (this._nextRequestId = 0), (this.callbacks = new Map());
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const e = this._nextRequestId,
      r = (0, e6.prepend0x)(e.toString(16));
    return this.callbacks.get(r) && this.callbacks.delete(r), e;
  }
}
ya.WalletSDKRelayEventManager = t6;
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.CoinbaseWalletSDK = void 0;
const r6 = vo,
  n6 = bo,
  i6 = yo,
  s6 = ni,
  o6 = qo,
  a6 = ca,
  u6 = ya,
  c6 = Z,
  B0 = wi;
class ma {
  constructor(e) {
    var r, n, i;
    (this._appName = ""),
      (this._appLogoUrl = null),
      (this._relay = null),
      (this._relayEventManager = null);
    const s = e.linkAPIUrl || n6.LINK_API_URL;
    let o;
    if (
      (e.uiConstructor
        ? (o = e.uiConstructor)
        : (o = (f) => new o6.WalletSDKUI(f)),
      typeof e.overrideIsMetaMask > "u"
        ? (this._overrideIsMetaMask = !1)
        : (this._overrideIsMetaMask = e.overrideIsMetaMask),
      (this._overrideIsCoinbaseWallet =
        (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0),
      (this._overrideIsCoinbaseBrowser =
        (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1),
      e.diagnosticLogger && e.eventListener)
    )
      throw new Error(
        "Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger"
      );
    e.eventListener
      ? (this._diagnosticLogger = { log: e.eventListener.onEvent })
      : (this._diagnosticLogger = e.diagnosticLogger),
      (this._reloadOnDisconnect =
        (i = e.reloadOnDisconnect) !== null && i !== void 0 ? i : !0);
    const a = new URL(s),
      c = `${a.protocol}//${a.host}`;
    (this._storage = new i6.ScopedLocalStorage(`-walletlink:${c}`)),
      this._storage.setItem("version", ma.VERSION),
      !(this.walletExtension || this.coinbaseBrowser) &&
        ((this._relayEventManager = new u6.WalletSDKRelayEventManager()),
        (this._relay = new a6.WalletSDKRelay({
          linkAPIUrl: s,
          version: B0.LIB_VERSION,
          darkMode: !!e.darkMode,
          uiConstructor: o,
          storage: this._storage,
          relayEventManager: this._relayEventManager,
          diagnosticLogger: this._diagnosticLogger,
          reloadOnDisconnect: this._reloadOnDisconnect,
        })),
        this.setAppInfo(e.appName, e.appLogoUrl),
        !e.headlessMode && this._relay.attachUI());
  }
  makeWeb3Provider(e = "", r = 1) {
    const n = this.walletExtension;
    if (n)
      return (
        this.isCipherProvider(n) || n.setProviderInfo(e, r),
        this._reloadOnDisconnect === !1 &&
          typeof n.disableReloadOnDisconnect == "function" &&
          n.disableReloadOnDisconnect(),
        n
      );
    const i = this.coinbaseBrowser;
    if (i) return i;
    const s = this._relay;
    if (!s || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return (
      e || s.setConnectDisabled(!0),
      new s6.CoinbaseWalletProvider({
        relayProvider: () => Promise.resolve(s),
        relayEventManager: this._relayEventManager,
        storage: this._storage,
        jsonRpcUrl: e,
        chainId: r,
        qrUrl: this.getQrUrl(),
        diagnosticLogger: this._diagnosticLogger,
        overrideIsMetaMask: this._overrideIsMetaMask,
        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser,
      })
    );
  }
  setAppInfo(e, r) {
    var n;
    (this._appName = e || "DApp"),
      (this._appLogoUrl = r || (0, c6.getFavicon)());
    const i = this.walletExtension;
    i
      ? this.isCipherProvider(i) ||
        i.setAppInfo(this._appName, this._appLogoUrl)
      : (n = this._relay) === null ||
        n === void 0 ||
        n.setAppInfo(this._appName, this._appLogoUrl);
  }
  disconnect() {
    var e;
    const r = this.walletExtension;
    r
      ? r.close()
      : (e = this._relay) === null || e === void 0 || e.resetAndReload();
  }
  getQrUrl() {
    var e, r;
    return (r =
      (e = this._relay) === null || e === void 0
        ? void 0
        : e.getQRCodeUrl()) !== null && r !== void 0
      ? r
      : null;
  }
  getCoinbaseWalletLogo(e, r = 240) {
    return (0, r6.walletLogo)(e, r);
  }
  get walletExtension() {
    var e;
    return (e = window.coinbaseWalletExtension) !== null && e !== void 0
      ? e
      : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var e, r;
    try {
      const n =
        (e = window.ethereum) !== null && e !== void 0
          ? e
          : (r = window.top) === null || r === void 0
          ? void 0
          : r.ethereum;
      return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(e) {
    return typeof e.isCipher == "boolean" && e.isCipher;
  }
}
Zi.CoinbaseWalletSDK = ma;
ma.VERSION = B0.LIB_VERSION;
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.CoinbaseWalletProvider = t.CoinbaseWalletSDK = void 0);
  const e = Zi,
    r = ni;
  var n = Zi;
  Object.defineProperty(t, "CoinbaseWalletSDK", {
    enumerable: !0,
    get: function () {
      return n.CoinbaseWalletSDK;
    },
  });
  var i = ni;
  Object.defineProperty(t, "CoinbaseWalletProvider", {
    enumerable: !0,
    get: function () {
      return i.CoinbaseWalletProvider;
    },
  }),
    (t.default = e.CoinbaseWalletSDK),
    typeof window < "u" &&
      ((window.CoinbaseWalletSDK = e.CoinbaseWalletSDK),
      (window.CoinbaseWalletProvider = r.CoinbaseWalletProvider),
      (window.WalletLink = e.CoinbaseWalletSDK),
      (window.WalletLinkProvider = r.CoinbaseWalletProvider));
})(Hu);
const l6 = F0(Hu),
  S6 = H0({ __proto__: null, default: l6 }, [Hu]);
export { S6 as i };
