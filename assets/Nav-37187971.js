import{_ as Ve,r as ae,d as Xe,o as U,c as L,a as G,F as Ke,f as We,n as Ge,e as ce,g as le,j as ue,t as fe,k as Qe,p as Ye,h as $e}from"./index-21498c1d.js";const Tn="/votemap/assets/main_logo-110bbc71.png";function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ze}=Object.prototype,{getPrototypeOf:te}=Object,M=(e=>t=>{const n=Ze.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>M(t)===e),q=e=>t=>typeof t===e,{isArray:P}=Array,B=q("undefined");function et(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ge=O("ArrayBuffer");function tt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ge(e.buffer),t}const nt=q("string"),S=q("function"),Ne=q("number"),J=e=>e!==null&&typeof e=="object",rt=e=>e===!0||e===!1,k=e=>{if(M(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},st=O("Date"),ot=O("File"),it=O("Blob"),at=O("FileList"),ct=e=>J(e)&&S(e.pipe),lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=M(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},ut=O("URLSearchParams"),ft=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const xe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!B(e)&&e!==xe;function Q(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const i=e&&Te(t,s)||s;k(t[i])&&k(r)?t[i]=Q(t[i],r):k(r)?t[i]=Q({},r):P(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&F(arguments[r],n);return t}const dt=(e,t,n,{allOwnKeys:r}={})=>(F(t,(s,i)=>{n&&S(s)?e[i]=Oe(s,n):e[i]=s},{allOwnKeys:r}),e),pt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},mt=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},yt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bt=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Ne(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Et=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),At=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},wt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},St=O("HTMLFormElement"),Rt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ot=O("RegExp"),Pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},gt=e=>{Pe(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Nt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return P(e)?r(e):r(String(e).split(t)),n},Tt=()=>{},xt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),V="abcdefghijklmnopqrstuvwxyz",pe="0123456789",_e={DIGIT:pe,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+pe},Ct=(e=16,t=_e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Pt(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const _t=e=>{const t=new Array(10),n=(r,s)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=P(r)?[]:{};return F(r,(o,c)=>{const p=n(o,s+1);!B(p)&&(i[c]=p)}),t[s]=void 0,i}}return r};return n(e,0)},Bt=O("AsyncFunction"),Ft=e=>e&&(J(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:P,isArrayBuffer:ge,isBuffer:et,isFormData:lt,isArrayBufferView:tt,isString:nt,isNumber:Ne,isBoolean:rt,isObject:J,isPlainObject:k,isUndefined:B,isDate:st,isFile:ot,isBlob:it,isRegExp:Ot,isFunction:S,isStream:ct,isURLSearchParams:ut,isTypedArray:Et,isFileList:at,forEach:F,merge:Q,extend:dt,trim:ft,stripBOM:pt,inherits:ht,toFlatObject:mt,kindOf:M,kindOfTest:O,endsWith:yt,toArray:bt,forEachEntry:At,matchAll:wt,isHTMLForm:St,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Pe,freezeMethods:gt,toObjectSet:Nt,toCamelCase:Rt,noop:Tt,toFiniteNumber:xt,findKey:Te,global:xe,isContextDefined:Ce,ALPHABET:_e,generateString:Ct,isSpecCompliantForm:Pt,toJSONObject:_t,isAsyncFn:Bt,isThenable:Ft};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Be=m.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fe[e]={value:e}});Object.defineProperties(m,Fe);Object.defineProperty(Be,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Be);return a.toFlatObject(e,o,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Dt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function De(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(s,i){return s=De(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Ut(e){return a.isArray(e)&&!e.some(Y)}const Lt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,E){return!a.isUndefined(E[d])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,E){let A=f;if(f&&!E&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Ut(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(A=a.toArray(f)))return d=De(d),A.forEach(function(T,ve){!(a.isUndefined(T)||T===null)&&t.append(o===!0?he([d],ve,i):o===null?d:d+"[]",h(T))}),!1}return Y(f)?!0:(t.append(he(E,d,i),h(f)),!1)}const l=[],b=Object.assign(Lt,{defaultVisitor:u,convertValue:h,isVisitable:Y});function w(f,d){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));l.push(f),a.forEach(f,function(A,N){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(N)?N.trim():N,d,b))===!0&&w(A,d?d.concat(N):[N])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&z(e,this,t)}const Ue=ne.prototype;Ue.append=function(t,n){this._pairs.push([t,n])};Ue.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||kt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ye=jt,ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},It=typeof URLSearchParams<"u"?URLSearchParams:ne,Ht=typeof FormData<"u"?FormData:null,Mt=typeof Blob<"u"?Blob:null,qt={isBrowser:!0,classes:{URLSearchParams:It,FormData:Ht,Blob:Mt},protocols:["http","https","file","blob","url","data"]},je=typeof window<"u"&&typeof document<"u",Jt=(e=>je&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),zt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),vt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:je,hasStandardBrowserEnv:Jt,hasStandardBrowserWebWorkerEnv:zt},Symbol.toStringTag,{value:"Module"})),R={...vt,...qt};function Vt(e,t){return z(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Kt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ie(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),p=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,p?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Kt(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Xt(r),s,n,0)}),n}return null}function Wt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:ke,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return z(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Wt(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const se=re,Gt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Gt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},be=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Yt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const $t=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function X(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function en(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class v{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,p,h){const u=_(p);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(s,u);(!l||s[l]===void 0||h===!0||h===void 0&&s[l]!==!1)&&(s[l||p]=j(c))}const o=(c,p)=>a.forEach(c,(h,u)=>i(h,u,p));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!$t(t)?o(Qt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=_(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Yt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||X(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=_(o),o){const c=a.findKey(r,o);c&&(!n||X(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||X(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=j(s),delete n[i];return}const c=t?Zt(i):String(i).trim();c!==i&&delete n[i],n[c]=j(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[be]=this[be]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=_(o);r[c]||(en(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}v.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(v.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(v);const g=v;function K(e,t){const n=this||se,r=t||n,s=g.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function He(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,m,{__CANCEL__:!0});function tn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const nn=R.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function rn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!rn(t)?sn(e,t):t}const on=R.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function an(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function cn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),u=r[i];o||(o=h),n[s]=p,r[s]=h;let l=i,b=0;for(;l!==s;)b+=n[l++],l=l%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),h-o<t)return;const w=u&&h-u;return w?Math.round(b*1e3/w):void 0}}function Ee(e,t){let n=0;const r=cn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,p=r(c),h=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:p||void 0,estimated:p&&o&&h?(o-i)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const ln=typeof XMLHttpRequest<"u",un=ln&&function(e){return new Promise(function(n,r){let s=e.data;const i=g.from(e.headers).normalize();let{responseType:o,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let u;if(a.isFormData(s)){if(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[d,...E]=u?u.split(";").map(A=>A.trim()).filter(Boolean):[];i.setContentType([d||"multipart/form-data",...E].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(d+":"+E))}const b=Me(e.baseURL,e.url);l.open(e.method.toUpperCase(),Le(b,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function w(){if(!l)return;const d=g.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),A={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};tn(function(T){n(T),h()},function(T){r(T),h()},A),l=null}if("onloadend"in l?l.onloadend=w:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(w)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const A=e.transitional||ke;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new m(E,A.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},R.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&on(b))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&nn.read(e.xsrfCookieName);d&&i.set(e.xsrfHeaderName,d)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(E,A){l.setRequestHeader(A,E)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Ee(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ee(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{l&&(r(!d||d.type?new D(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=an(b);if(f&&R.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},$={http:Dt,xhr:un};a.forEach($,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,fn=e=>a.isFunction(e)||e===null||e===!1,qe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!fn(n)&&(r=$[(o=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Ae).join(`
`):" "+Ae(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:$};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function we(e){return W(e),e.headers=g.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),qe.getAdapter(e.adapter||se.adapter)(e).then(function(r){return W(e),r.data=K.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return He(r)||(W(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof g?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(h,u,l){return a.isPlainObject(h)&&a.isPlainObject(u)?a.merge.call({caseless:l},h,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(h,u,l){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h,l)}else return r(h,u,l)}function i(h,u){if(!a.isUndefined(u))return r(void 0,u)}function o(h,u){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,u)}function c(h,u,l){if(l in t)return r(h,u);if(l in e)return r(void 0,h)}const p={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(h,u)=>s(Se(h),Se(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=p[u]||s,b=l(e[u],t[u],u);a.isUndefined(b)&&l!==c||(n[u]=b)}),n}const Je="1.6.2",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Re={};oe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Je+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Re[o]&&(Re[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function dn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],p=c===void 0||o(c,i,e);if(p!==!0)throw new m("option "+i+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const Z={assertOptions:dn,validators:oe},x=Z.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new ye,response:new ye}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Z.assertOptions(s,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=g.concat(o,i);const c=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let u,l=0,b;if(!p){const f=[we.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,h),b=f.length,u=Promise.resolve(n);l<b;)u=u.then(f[l++],f[l++]);return u}b=c.length;let w=n;for(l=0;l<b;){const f=c[l++],d=c[l++];try{w=f(w)}catch(E){d.call(this,E);break}}try{u=we.call(this,w)}catch(f){return Promise.reject(f)}for(l=0,b=h.length;l<b;)u=u.then(h[l++],h[l++]);return u}getUri(t){t=C(this.defaults,t);const n=Me(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(C(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const I=H;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new D(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const pn=ie;function hn(e){return function(n){return e.apply(null,n)}}function mn(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const yn=ee;function ze(e){const t=new I(e),n=Oe(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ze(C(e,s))},n}const y=ze(se);y.Axios=I;y.CanceledError=D;y.CancelToken=pn;y.isCancel=He;y.VERSION=Je;y.toFormData=z;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=hn;y.isAxiosError=mn;y.mergeConfig=C;y.AxiosHeaders=g;y.formToJSON=e=>Ie(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=qe.getAdapter;y.HttpStatusCode=yn;y.default=y;const xn=y,bn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAqCAYAAAAnH9IiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT/SURBVHgB7VnPayNVHP8mTZNtu20nsbVQ22X6w4M9yLCpFw9uBA+eahB6KpigoCBI078gqXhZEGxO4inJigcFSeupyEJixUNBTAul9FA3UXZBlJLUdaFbama/38l7zctkJplMJu1lP/DhTea9+b7P+77v9/uSCYB1KMgcsoxU2bUMzkBCxgXbBWQEukRYMKhnHLqDjCya2E5BFzAzyhkDe5At2A6BDYTaGCXSLkgGgkICFQPbKQu2bXlbsWCYezvEJim3WFwW6vFqxa4t0VILEXpBage0Oj4CNhHrUJBTLEKXSANcuWAZHEAC4EoE58G5M0CDDL3zeh5sljgroosAPRFNVKBTqKrqwsbFW5HsXqKHgok5Nh8IrSW4EomEG1v38vJyH7bE95GbyFKPRfMknNE5qxmiZ5lgDzEYDPb7fL6X8fpeq4kkSVIHBgacFL6GDJDjwMzjKBpYp5t5th/pQ95A/tBukv39fXVnZ6et8JmZGbVcLqsrKytWhbv1nnbrtLsE4RonJib6UMjHeP0nmAD7YXd3F46OjmBychJaYWpqCg4PD2F6ehra4GtG1/r6umlsUwd5mMLCixxE3kSOQu0ovwstvLK4uKgR2niPdmJpaUmdm5trN3aZ6SBNbkPFbAuok4fFUCAQGMHWjxxDHrQT5DB/WlhYINEeyjGzZHSxSkGiKY5vYnJJw8PDJPiTKxbM+RbUdt40GXl49MuyfGN8fJxCg4v+pdMJqZrE43E1l8tpDIVCdkRv4XMtRYNQ6sjTQ36/n+KZys57yIreaDQaVXGBhhMWCgVVj0gk0jROURTD+2y+D7how/DgMU2DWCzxRKQkfMNIWLFYNBRNiyFQ/+rqqppOp7XPVOpoB8SxtAN0H8zDow/qVa1JNLCOPjpQ5ufnfUz4MPIbvUESm81mDbd9Y2NDEykuiAsnz4pjKYSoT78YxgzUQ+NStFhK+E11dna2enx8XMXr/4ler/czbH8WF1kqlWBrawtwa0EPFKC1lUqlYbzYx4GL1vrEsQx0oH0qfFabRLtcLnGFfFAVQ+Xi/Pz8AV7f0lulCc2EE9CLmkgaZzSG+pPJpJFgwijmWFEUawgeIhTf/AsT0sOSoQQGcUfxm0qlGu7xUCBQ+IhJKYbT5uamivOYxXORdDBNDWg4adDbmnZqBWNVnKg6MjJyG6//0BvAuNW8ZQbaevxeYtiHsW/mZXrgNulgmjoGPympLQG0r6+xWEyrCLRw2gXyLlUSopXnwYEftCIoi9JWJqYDhUTy0keVJhwOWxG8Ac0vfhrQB53hDGpFn4x+hXzbbGAmk4HT01Nt+yk86PP29nYr2/Q1lA61b5F70CMozHinL2n0LDPKcIXIQneiU3ANkKH2s78Idc9ZEVtgz0lwfXhN+RymsrMwhKIHRXF79etBNYj993BcEOQw2IS9ItiEL2U0lQMhLoPBHysnJ78lsXKUsfSF798/kB49elcplR7zqTGhXW8CfNhx0nnAAfwKd5XH4JUvb+DR/dKLr1T824fv4CcFRYNc+Q7kJ9+DUBgkH1xEX7fxQt4R0Q8gID3RfqExoA//+dsn3fr9XxgbG6jdw6/mNS+/cDnsKXhG6elO4VB4pDCZnlIiXibV2tqryYcP/0vfuTP5xdnZReXg4GQ/n/8rXg8PbfoowEcZuC5glsnIHHJPrb06MxoTZWPyau3Pp+d4DqfxDBOAQgGSBOrIAAAAAElFTkSuQmCC",En="/votemap/assets/vote_line-10bee982.png";const An=e=>(Ye("data-v-5987ef9f"),e=e(),$e(),e),wn={class:"nav_container"},Sn={class:"nav_wrap"},Rn={key:0,src:bn,alt:"nav_bear"},On=An(()=>G("img",{src:En,alt:"vote_line"},null,-1)),gn={__name:"Nav",setup(e){const t=ae([{year:2020,number:15},{year:2016,number:14},{year:2012,number:13},{year:2008,number:12}]),n=ae(null);return(r,s)=>{const i=Xe("router-link");return U(),L("div",wn,[G("div",Sn,[(U(!0),L(Ke,null,We(t.value,(o,c)=>(U(),L("ol",{key:c},[G("li",{class:Ge({selected:n.value===c})},[ce(i,{class:"nav_link_top",to:`/${o.year}_vote`,onClick:p=>n.value=c},{default:le(()=>[ue(fe(o.year)+" 年",1)]),_:2},1032,["to","onClick"]),ce(i,{class:"nav_link_bottom",to:`/${o.year}_vote`,onClick:p=>n.value=c},{default:le(()=>[ue("第"+fe(o.number)+"任總統選舉",1)]),_:2},1032,["to","onClick"])],2),r.$route.path.indexOf(o.year)!=-1?(U(),L("img",Rn)):Qe("",!0)]))),128))]),On])}}},Cn=Ve(gn,[["__scopeId","data-v-5987ef9f"]]);export{Cn as N,Tn as _,xn as a};
