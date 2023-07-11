import{r as Q3,o as Y1,c as Kr,a as J3,b as Yr,d as Z3,e as Qr,f as Jr,g as Zr,h as cs,i as e2,w as as,j as es,k as rs}from"./vue-1b723e54.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const Q1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},ss={};function is(c,a){const e=Q3("router-view");return Y1(),Kr(e)}const ns=Q1(ss,[["render",is]]);const fs={setup(){return{}}};const ls={class:"main-layout"};function os(c,a,e,r,s,i){const n=Q3("router-view");return Y1(),J3("div",ls,[Yr(n)])}const ts=Q1(fs,[["render",os]]),ms=Z3({setup(){return{}}});function Hs(c,a,e,r,s,i){return Y1(),J3("div")}const zs=Q1(ms,[["render",Hs]]),vs=[{path:"/",component:ts,children:[]},{path:"/:pathMatch(.*)*",component:zs}],c6=Qr({history:Jr(),routes:[...vs]});function a6(c,a){return function(){return c.apply(a,arguments)}}const{toString:Vs}=Object.prototype,{getPrototypeOf:J1}=Object,Y2=(c=>a=>{const e=Vs.call(a);return c[e]||(c[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),O=c=>(c=c.toLowerCase(),a=>Y2(a)===c),Q2=c=>a=>typeof a===c,{isArray:l2}=Array,v2=Q2("undefined");function hs(c){return c!==null&&!v2(c)&&c.constructor!==null&&!v2(c.constructor)&&T(c.constructor.isBuffer)&&c.constructor.isBuffer(c)}const e6=O("ArrayBuffer");function Ms(c){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(c):a=c&&c.buffer&&e6(c.buffer),a}const us=Q2("string"),T=Q2("function"),r6=Q2("number"),J2=c=>c!==null&&typeof c=="object",ps=c=>c===!0||c===!1,O2=c=>{if(Y2(c)!=="object")return!1;const a=J1(c);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in c)&&!(Symbol.iterator in c)},Cs=O("Date"),ds=O("File"),Ls=O("Blob"),gs=O("FileList"),xs=c=>J2(c)&&T(c.pipe),Ns=c=>{let a;return c&&(typeof FormData=="function"&&c instanceof FormData||T(c.append)&&((a=Y2(c))==="formdata"||a==="object"&&T(c.toString)&&c.toString()==="[object FormData]"))},bs=O("URLSearchParams"),Ss=c=>c.trim?c.trim():c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function C2(c,a,{allOwnKeys:e=!1}={}){if(c===null||typeof c>"u")return;let r,s;if(typeof c!="object"&&(c=[c]),l2(c))for(r=0,s=c.length;r<s;r++)a.call(null,c[r],r,c);else{const i=e?Object.getOwnPropertyNames(c):Object.keys(c),n=i.length;let f;for(r=0;r<n;r++)f=i[r],a.call(null,c[f],f,c)}}function s6(c,a){a=a.toLowerCase();const e=Object.keys(c);let r=e.length,s;for(;r-- >0;)if(s=e[r],a===s.toLowerCase())return s;return null}const i6=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),n6=c=>!v2(c)&&c!==i6;function F1(){const{caseless:c}=n6(this)&&this||{},a={},e=(r,s)=>{const i=c&&s6(a,s)||s;O2(a[i])&&O2(r)?a[i]=F1(a[i],r):O2(r)?a[i]=F1({},r):l2(r)?a[i]=r.slice():a[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&C2(arguments[r],e);return a}const ws=(c,a,e,{allOwnKeys:r}={})=>(C2(a,(s,i)=>{e&&T(s)?c[i]=a6(s,e):c[i]=s},{allOwnKeys:r}),c),ks=c=>(c.charCodeAt(0)===65279&&(c=c.slice(1)),c),ys=(c,a,e,r)=>{c.prototype=Object.create(a.prototype,r),c.prototype.constructor=c,Object.defineProperty(c,"super",{value:a.prototype}),e&&Object.assign(c.prototype,e)},As=(c,a,e,r)=>{let s,i,n;const f={};if(a=a||{},c==null)return a;do{for(s=Object.getOwnPropertyNames(c),i=s.length;i-- >0;)n=s[i],(!r||r(n,c,a))&&!f[n]&&(a[n]=c[n],f[n]=!0);c=e!==!1&&J1(c)}while(c&&(!e||e(c,a))&&c!==Object.prototype);return a},Ps=(c,a,e)=>{c=String(c),(e===void 0||e>c.length)&&(e=c.length),e-=a.length;const r=c.indexOf(a,e);return r!==-1&&r===e},Ts=c=>{if(!c)return null;if(l2(c))return c;let a=c.length;if(!r6(a))return null;const e=new Array(a);for(;a-- >0;)e[a]=c[a];return e},Fs=(c=>a=>c&&a instanceof c)(typeof Uint8Array<"u"&&J1(Uint8Array)),Bs=(c,a)=>{const r=(c&&c[Symbol.iterator]).call(c);let s;for(;(s=r.next())&&!s.done;){const i=s.value;a.call(c,i[0],i[1])}},Rs=(c,a)=>{let e;const r=[];for(;(e=c.exec(a))!==null;)r.push(e);return r},Ds=O("HTMLFormElement"),Es=c=>c.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,r,s){return r.toUpperCase()+s}),v3=(({hasOwnProperty:c})=>(a,e)=>c.call(a,e))(Object.prototype),Os=O("RegExp"),f6=(c,a)=>{const e=Object.getOwnPropertyDescriptors(c),r={};C2(e,(s,i)=>{a(s,i,c)!==!1&&(r[i]=s)}),Object.defineProperties(c,r)},Us=c=>{f6(c,(a,e)=>{if(T(c)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const r=c[e];if(T(r)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},qs=(c,a)=>{const e={},r=s=>{s.forEach(i=>{e[i]=!0})};return l2(c)?r(c):r(String(c).split(a)),e},$s=()=>{},Gs=(c,a)=>(c=+c,Number.isFinite(c)?c:a),N1="abcdefghijklmnopqrstuvwxyz",V3="0123456789",l6={DIGIT:V3,ALPHA:N1,ALPHA_DIGIT:N1+N1.toUpperCase()+V3},Ws=(c=16,a=l6.ALPHA_DIGIT)=>{let e="";const{length:r}=a;for(;c--;)e+=a[Math.random()*r|0];return e};function Is(c){return!!(c&&T(c.append)&&c[Symbol.toStringTag]==="FormData"&&c[Symbol.iterator])}const _s=c=>{const a=new Array(10),e=(r,s)=>{if(J2(r)){if(a.indexOf(r)>=0)return;if(!("toJSON"in r)){a[s]=r;const i=l2(r)?[]:{};return C2(r,(n,f)=>{const l=e(n,s+1);!v2(l)&&(i[f]=l)}),a[s]=void 0,i}}return r};return e(c,0)},js=O("AsyncFunction"),Xs=c=>c&&(J2(c)||T(c))&&T(c.then)&&T(c.catch),m={isArray:l2,isArrayBuffer:e6,isBuffer:hs,isFormData:Ns,isArrayBufferView:Ms,isString:us,isNumber:r6,isBoolean:ps,isObject:J2,isPlainObject:O2,isUndefined:v2,isDate:Cs,isFile:ds,isBlob:Ls,isRegExp:Os,isFunction:T,isStream:xs,isURLSearchParams:bs,isTypedArray:Fs,isFileList:gs,forEach:C2,merge:F1,extend:ws,trim:Ss,stripBOM:ks,inherits:ys,toFlatObject:As,kindOf:Y2,kindOfTest:O,endsWith:Ps,toArray:Ts,forEachEntry:Bs,matchAll:Rs,isHTMLForm:Ds,hasOwnProperty:v3,hasOwnProp:v3,reduceDescriptors:f6,freezeMethods:Us,toObjectSet:qs,toCamelCase:Es,noop:$s,toFiniteNumber:Gs,findKey:s6,global:i6,isContextDefined:n6,ALPHABET:l6,generateString:Ws,isSpecCompliantForm:Is,toJSONObject:_s,isAsyncFn:js,isThenable:Xs};function d(c,a,e,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=c,this.name="AxiosError",a&&(this.code=a),e&&(this.config=e),r&&(this.request=r),s&&(this.response=s)}m.inherits(d,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:m.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const o6=d.prototype,t6={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(c=>{t6[c]={value:c}});Object.defineProperties(d,t6);Object.defineProperty(o6,"isAxiosError",{value:!0});d.from=(c,a,e,r,s,i)=>{const n=Object.create(o6);return m.toFlatObject(c,n,function(l){return l!==Error.prototype},f=>f!=="isAxiosError"),d.call(n,c.message,a,e,r,s),n.cause=c,n.name=c.name,i&&Object.assign(n,i),n};const Ks=null;function B1(c){return m.isPlainObject(c)||m.isArray(c)}function m6(c){return m.endsWith(c,"[]")?c.slice(0,-2):c}function h3(c,a,e){return c?c.concat(a).map(function(s,i){return s=m6(s),!e&&i?"["+s+"]":s}).join(e?".":""):a}function Ys(c){return m.isArray(c)&&!c.some(B1)}const Qs=m.toFlatObject(m,{},null,function(a){return/^is[A-Z]/.test(a)});function Z2(c,a,e){if(!m.isObject(c))throw new TypeError("target must be an object");a=a||new FormData,e=m.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,N){return!m.isUndefined(N[C])});const r=e.metaTokens,s=e.visitor||t,i=e.dots,n=e.indexes,l=(e.Blob||typeof Blob<"u"&&Blob)&&m.isSpecCompliantForm(a);if(!m.isFunction(s))throw new TypeError("visitor must be a function");function o(z){if(z===null)return"";if(m.isDate(z))return z.toISOString();if(!l&&m.isBlob(z))throw new d("Blob is not supported. Use a Buffer instead.");return m.isArrayBuffer(z)||m.isTypedArray(z)?l&&typeof Blob=="function"?new Blob([z]):Buffer.from(z):z}function t(z,C,N){let V=z;if(z&&!N&&typeof z=="object"){if(m.endsWith(C,"{}"))C=r?C:C.slice(0,-2),z=JSON.stringify(z);else if(m.isArray(z)&&Ys(z)||(m.isFileList(z)||m.endsWith(C,"[]"))&&(V=m.toArray(z)))return C=m6(C),V.forEach(function(L,b){!(m.isUndefined(L)||L===null)&&a.append(n===!0?h3([C],b,i):n===null?C:C+"[]",o(L))}),!1}return B1(z)?!0:(a.append(h3(N,C,i),o(z)),!1)}const H=[],p=Object.assign(Qs,{defaultVisitor:t,convertValue:o,isVisitable:B1});function u(z,C){if(!m.isUndefined(z)){if(H.indexOf(z)!==-1)throw Error("Circular reference detected in "+C.join("."));H.push(z),m.forEach(z,function(V,M){(!(m.isUndefined(V)||V===null)&&s.call(a,V,m.isString(M)?M.trim():M,C,p))===!0&&u(V,C?C.concat(M):[M])}),H.pop()}}if(!m.isObject(c))throw new TypeError("data must be an object");return u(c),a}function M3(c){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(c).replace(/[!'()~]|%20|%00/g,function(r){return a[r]})}function Z1(c,a){this._pairs=[],c&&Z2(c,this,a)}const H6=Z1.prototype;H6.append=function(a,e){this._pairs.push([a,e])};H6.toString=function(a){const e=a?function(r){return a.call(this,r,M3)}:M3;return this._pairs.map(function(s){return e(s[0])+"="+e(s[1])},"").join("&")};function Js(c){return encodeURIComponent(c).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function z6(c,a,e){if(!a)return c;const r=e&&e.encode||Js,s=e&&e.serialize;let i;if(s?i=s(a,e):i=m.isURLSearchParams(a)?a.toString():new Z1(a,e).toString(r),i){const n=c.indexOf("#");n!==-1&&(c=c.slice(0,n)),c+=(c.indexOf("?")===-1?"?":"&")+i}return c}class Zs{constructor(){this.handlers=[]}use(a,e,r){return this.handlers.push({fulfilled:a,rejected:e,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){m.forEach(this.handlers,function(r){r!==null&&a(r)})}}const u3=Zs,v6={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ci=typeof URLSearchParams<"u"?URLSearchParams:Z1,ai=typeof FormData<"u"?FormData:null,ei=typeof Blob<"u"?Blob:null,ri=(()=>{let c;return typeof navigator<"u"&&((c=navigator.product)==="ReactNative"||c==="NativeScript"||c==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),si=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),D={isBrowser:!0,classes:{URLSearchParams:ci,FormData:ai,Blob:ei},isStandardBrowserEnv:ri,isStandardBrowserWebWorkerEnv:si,protocols:["http","https","file","blob","url","data"]};function ii(c,a){return Z2(c,new D.classes.URLSearchParams,Object.assign({visitor:function(e,r,s,i){return D.isNode&&m.isBuffer(e)?(this.append(r,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},a))}function ni(c){return m.matchAll(/\w+|\[(\w*)]/g,c).map(a=>a[0]==="[]"?"":a[1]||a[0])}function fi(c){const a={},e=Object.keys(c);let r;const s=e.length;let i;for(r=0;r<s;r++)i=e[r],a[i]=c[i];return a}function V6(c){function a(e,r,s,i){let n=e[i++];const f=Number.isFinite(+n),l=i>=e.length;return n=!n&&m.isArray(s)?s.length:n,l?(m.hasOwnProp(s,n)?s[n]=[s[n],r]:s[n]=r,!f):((!s[n]||!m.isObject(s[n]))&&(s[n]=[]),a(e,r,s[n],i)&&m.isArray(s[n])&&(s[n]=fi(s[n])),!f)}if(m.isFormData(c)&&m.isFunction(c.entries)){const e={};return m.forEachEntry(c,(r,s)=>{a(ni(r),s,e,0)}),e}return null}const li={"Content-Type":void 0};function oi(c,a,e){if(m.isString(c))try{return(a||JSON.parse)(c),m.trim(c)}catch(r){if(r.name!=="SyntaxError")throw r}return(e||JSON.stringify)(c)}const c1={transitional:v6,adapter:["xhr","http"],transformRequest:[function(a,e){const r=e.getContentType()||"",s=r.indexOf("application/json")>-1,i=m.isObject(a);if(i&&m.isHTMLForm(a)&&(a=new FormData(a)),m.isFormData(a))return s&&s?JSON.stringify(V6(a)):a;if(m.isArrayBuffer(a)||m.isBuffer(a)||m.isStream(a)||m.isFile(a)||m.isBlob(a))return a;if(m.isArrayBufferView(a))return a.buffer;if(m.isURLSearchParams(a))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let f;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ii(a,this.formSerializer).toString();if((f=m.isFileList(a))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Z2(f?{"files[]":a}:a,l&&new l,this.formSerializer)}}return i||s?(e.setContentType("application/json",!1),oi(a)):a}],transformResponse:[function(a){const e=this.transitional||c1.transitional,r=e&&e.forcedJSONParsing,s=this.responseType==="json";if(a&&m.isString(a)&&(r&&!this.responseType||s)){const n=!(e&&e.silentJSONParsing)&&s;try{return JSON.parse(a)}catch(f){if(n)throw f.name==="SyntaxError"?d.from(f,d.ERR_BAD_RESPONSE,this,null,this.response):f}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:D.classes.FormData,Blob:D.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};m.forEach(["delete","get","head"],function(a){c1.headers[a]={}});m.forEach(["post","put","patch"],function(a){c1.headers[a]=m.merge(li)});const c4=c1,ti=m.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mi=c=>{const a={};let e,r,s;return c&&c.split(`
`).forEach(function(n){s=n.indexOf(":"),e=n.substring(0,s).trim().toLowerCase(),r=n.substring(s+1).trim(),!(!e||a[e]&&ti[e])&&(e==="set-cookie"?a[e]?a[e].push(r):a[e]=[r]:a[e]=a[e]?a[e]+", "+r:r)}),a},p3=Symbol("internals");function t2(c){return c&&String(c).trim().toLowerCase()}function U2(c){return c===!1||c==null?c:m.isArray(c)?c.map(U2):String(c)}function Hi(c){const a=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=e.exec(c);)a[r[1]]=r[2];return a}const zi=c=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(c.trim());function b1(c,a,e,r,s){if(m.isFunction(r))return r.call(this,a,e);if(s&&(a=e),!!m.isString(a)){if(m.isString(r))return a.indexOf(r)!==-1;if(m.isRegExp(r))return r.test(a)}}function vi(c){return c.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,e,r)=>e.toUpperCase()+r)}function Vi(c,a){const e=m.toCamelCase(" "+a);["get","set","has"].forEach(r=>{Object.defineProperty(c,r+e,{value:function(s,i,n){return this[r].call(this,a,s,i,n)},configurable:!0})})}class a1{constructor(a){a&&this.set(a)}set(a,e,r){const s=this;function i(f,l,o){const t=t2(l);if(!t)throw new Error("header name must be a non-empty string");const H=m.findKey(s,t);(!H||s[H]===void 0||o===!0||o===void 0&&s[H]!==!1)&&(s[H||l]=U2(f))}const n=(f,l)=>m.forEach(f,(o,t)=>i(o,t,l));return m.isPlainObject(a)||a instanceof this.constructor?n(a,e):m.isString(a)&&(a=a.trim())&&!zi(a)?n(mi(a),e):a!=null&&i(e,a,r),this}get(a,e){if(a=t2(a),a){const r=m.findKey(this,a);if(r){const s=this[r];if(!e)return s;if(e===!0)return Hi(s);if(m.isFunction(e))return e.call(this,s,r);if(m.isRegExp(e))return e.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,e){if(a=t2(a),a){const r=m.findKey(this,a);return!!(r&&this[r]!==void 0&&(!e||b1(this,this[r],r,e)))}return!1}delete(a,e){const r=this;let s=!1;function i(n){if(n=t2(n),n){const f=m.findKey(r,n);f&&(!e||b1(r,r[f],f,e))&&(delete r[f],s=!0)}}return m.isArray(a)?a.forEach(i):i(a),s}clear(a){const e=Object.keys(this);let r=e.length,s=!1;for(;r--;){const i=e[r];(!a||b1(this,this[i],i,a,!0))&&(delete this[i],s=!0)}return s}normalize(a){const e=this,r={};return m.forEach(this,(s,i)=>{const n=m.findKey(r,i);if(n){e[n]=U2(s),delete e[i];return}const f=a?vi(i):String(i).trim();f!==i&&delete e[i],e[f]=U2(s),r[f]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const e=Object.create(null);return m.forEach(this,(r,s)=>{r!=null&&r!==!1&&(e[s]=a&&m.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,e])=>a+": "+e).join(`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b3=function(){},e3={},ur={},pr=null,Cr={mark:b3,measure:b3};try{typeof window<"u"&&(e3=window),typeof document<"u"&&(ur=document),typeof MutationObserver<"u"&&(pr=MutationObserver),typeof performance<"u"&&(Cr=performance)}catch{}var PR=e3.navigator||{},S3=PR.userAgent,w3=S3===void 0?"":S3,K=e3,x=ur,k3=pr,y2=Cr;K.document;var I=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",dr=~w3.indexOf("MSIE")||~w3.indexOf("Trident/"),A2,P2,T2,F2,B2,$="___FONT_AWESOME___",O1=16,Lr="fa",gr="svg-inline--fa",c2="data-fa-i2svg",U1="data-fa-pseudo-element",TR="data-fa-pseudo-element-pending",r3="data-prefix",s3="data-icon",y3="fontawesome-i2svg",FR="async",BR=["HTML","HEAD","STYLE","SCRIPT"],xr=function(){try{return!0}catch{return!1}}(),g="classic",S="sharp",i3=[g,S];function w2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[g]}})}var V2=w2((A2={},y(A2,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),y(A2,S,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),A2)),h2=w2((P2={},y(P2,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(P2,S,{solid:"fass",regular:"fasr",light:"fasl"}),P2)),M2=w2((T2={},y(T2,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(T2,S,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),T2)),RR=w2((F2={},y(F2,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(F2,S,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),F2)),DR=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Nr="fa-layers-text",ER=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,OR=w2((B2={},y(B2,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(B2,S,{900:"fass",400:"fasr",300:"fasl"}),B2)),br=[1,2,3,4,5,6,7,8,9,10],UR=br.concat([11,12,13,14,15,16,17,18,19,20]),qR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},u2=new Set;Object.keys(h2[g]).map(u2.add.bind(u2));Object.keys(h2[S]).map(u2.add.bind(u2));var $R=[].concat(i3,S2(u2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(br.map(function(c){return"".concat(c,"x")})).concat(UR.map(function(c){return"w-".concat(c)})),H2=K.FontAwesomeConfig||{};function GR(c){var a=x.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function WR(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(x&&typeof x.querySelector=="function"){var IR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];IR.forEach(function(c){var a=a3(c,2),e=a[0],r=a[1],s=WR(GR(e));s!=null&&(H2[r]=s)})}var Sr={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lr,replacementClass:gr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};H2.familyPrefix&&(H2.cssPrefix=H2.familyPrefix);var f2=v(v({},Sr),H2);f2.autoReplaceSvg||(f2.observeMutations=!1);var h={};Object.keys(Sr).forEach(function(c){Object.defineProperty(h,c,{enumerable:!0,set:function(e){f2[c]=e,z2.forEach(function(r){return r(h)})},get:function(){return f2[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(a){f2.cssPrefix=a,z2.forEach(function(e){return e(h)})},get:function(){return f2.cssPrefix}});K.FontAwesomeConfig=h;var z2=[];function _R(c){return z2.push(c),function(){z2.splice(z2.indexOf(c),1)}}var X=O1,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jR(c){if(!(!c||!I)){var a=x.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=x.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return x.head.insertBefore(a,r),c}}var XR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function p2(){for(var c=12,a="";c-- >0;)a+=XR[Math.random()*62|0];return a}function o2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function n3(c){return c.classList?o2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function wr(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function KR(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(wr(c[e]),'" ')},"").trim()}function p1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function f3(c){return c.size!==E.size||c.x!==E.x||c.y!==E.y||c.rotate!==E.rotate||c.flipX||c.flipY}function YR(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:o}}function QR(c){var a=c.transform,e=c.width,r=e===void 0?O1:e,s=c.height,i=s===void 0?O1:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&dr?l+="translate(".concat(a.x/X-r/2,"em, ").concat(a.y/X-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/X,"em), calc(-50% + ").concat(a.y/X,"em)) "):l+="translate(".concat(a.x/X,"em, ").concat(a.y/X,"em) "),l+="scale(".concat(a.size/X*(a.flipX?-1:1),", ").concat(a.size/X*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var JR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function kr(){var c=Lr,a=gr,e=h.cssPrefix,r=h.replacementClass,s=JR;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return s}var A3=!1;function k1(){h.autoAddCss&&!A3&&(jR(kr()),A3=!0)}var ZR={mixout:function(){return{dom:{css:kr,insertCss:k1}}},hooks:function(){return{beforeDOMElementCreation:function(){k1()},beforeI2svg:function(){k1()}}}},G=K||{};G[$]||(G[$]={});G[$].styles||(G[$].styles={});G[$].hooks||(G[$].hooks={});G[$].shims||(G[$].shims=[]);var B=G[$],yr=[],cD=function c(){x.removeEventListener("DOMContentLoaded",c),j2=1,yr.map(function(a){return a()})},j2=!1;I&&(j2=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),j2||x.addEventListener("DOMContentLoaded",cD));function aD(c){I&&(j2?setTimeout(c,0):yr.push(c))}function k2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?wr(c):"<".concat(a," ").concat(KR(r),">").concat(i.map(k2).join(""),"</").concat(a,">")}function P3(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var eD=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},y1=function(a,e,r,s){var i=Object.keys(a),n=i.length,f=s!==void 0?eD(e,s):e,l,o,t;for(r===void 0?(l=1,t=a[i[0]]):(l=0,t=r);l<n;l++)o=i[l],t=f(t,a[o],o,a);return t};function rD(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function q1(c){var a=rD(c);return a.length===1?a[0].toString(16):null}function sD(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function T3(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function $1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=T3(a);typeof B.hooks.addPack=="function"&&!s?B.hooks.addPack(c,T3(a)):B.styles[c]=v(v({},B.styles[c]||{}),i),c==="fas"&&$1("fa",a)}var R2,D2,E2,r2=B.styles,iD=B.shims,nD=(R2={},y(R2,g,Object.values(M2[g])),y(R2,S,Object.values(M2[S])),R2),l3=null,Ar={},Pr={},Tr={},Fr={},Br={},fD=(D2={},y(D2,g,Object.keys(V2[g])),y(D2,S,Object.keys(V2[S])),D2);function lD(c){return~$R.indexOf(c)}function oD(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!lD(s)?s:null}var Rr=function(){var a=function(i){return y1(r2,function(n,f,l){return n[l]=y1(f,i,{}),n},{})};Ar=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),Pr=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),Br=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var e="far"in r2||h.autoFetchSvg,r=y1(iD,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});Tr=r.names,Fr=r.unicodes,l3=C1(h.styleDefault,{family:h.familyDefault})};_R(function(c){l3=C1(c.styleDefault,{family:h.familyDefault})});Rr();function o3(c,a){return(Ar[c]||{})[a]}function tD(c,a){return(Pr[c]||{})[a]}function Z(c,a){return(Br[c]||{})[a]}function Dr(c){return Tr[c]||{prefix:null,iconName:null}}function mD(c){var a=Fr[c],e=o3("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function Y(){return l3}var t3=function(){return{prefix:null,iconName:null,rest:[]}};function C1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?g:e,s=V2[r][c],i=h2[r][c]||h2[r][s],n=c in B.styles?c:null;return i||n||null}var F3=(E2={},y(E2,g,Object.keys(M2[g])),y(E2,S,Object.keys(M2[S])),E2);function d1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},y(a,g,"".concat(h.cssPrefix,"-").concat(g)),y(a,S,"".concat(h.cssPrefix,"-").concat(S)),a),n=null,f=g;(c.includes(i[g])||c.some(function(o){return F3[g].includes(o)}))&&(f=g),(c.includes(i[S])||c.some(function(o){return F3[S].includes(o)}))&&(f=S);var l=c.reduce(function(o,t){var H=oD(h.cssPrefix,t);if(r2[t]?(t=nD[f].includes(t)?RR[f][t]:t,n=t,o.prefix=t):fD[f].indexOf(t)>-1?(n=t,o.prefix=C1(t,{family:f})):H?o.iconName=H:t!==h.replacementClass&&t!==i[g]&&t!==i[S]&&o.rest.push(t),!s&&o.prefix&&o.iconName){var p=n==="fa"?Dr(o.iconName):{},u=Z(o.prefix,o.iconName);p.prefix&&(n=null),o.iconName=p.iconName||u||o.iconName,o.prefix=p.prefix||o.prefix,o.prefix==="far"&&!r2.far&&r2.fas&&!h.autoFetchSvg&&(o.prefix="fas")}return o},t3());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===S&&(r2.fass||h.autoFetchSvg)&&(l.prefix="fass",l.iconName=Z(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=Y()||"fas"),l}var HD=function(){function c(){xR(this,c),this.definitions={}}return NR(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=v(v({},e.definitions[f]||{}),n[f]),$1(f,n[f]);var l=M2[g][f];l&&$1(l,n[f]),Rr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,o=n.icon,t=o[2];e[f]||(e[f]={}),t.length>0&&t.forEach(function(H){typeof H=="string"&&(e[f][H]=o)}),e[f][l]=o}),e}}]),c}(),B3=[],s2={},i2={},zD=Object.keys(i2);function vD(c,a){var e=a.mixoutsTo;return B3=c,s2={},Object.keys(i2).forEach(function(r){zD.indexOf(r)===-1&&delete i2[r]}),B3.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),_2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=s[n][f]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){s2[n]||(s2[n]=[]),s2[n].push(i[n])})}r.provides&&r.provides(i2)}),e}function G1(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=s2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function a2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=s2[c]||[];s.forEach(function(i){i.apply(null,e)})}function W(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return i2[c]?i2[c].apply(null,a):void 0}function W1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||Y();if(a)return a=Z(e,a)||a,P3(Er.definitions,e,a)||P3(B.styles,e,a)}var Er=new HD,VD=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,a2("noAuto")},hD={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(a2("beforeI2svg",a),W("pseudoElements2svg",a),W("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,aD(function(){uD({autoReplaceSvgRoot:e}),a2("watch",a)})}},MD={icon:function(a){if(a===null)return null;if(_2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=C1(a[0]);return{prefix:r,iconName:Z(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(h.cssPrefix,"-"))>-1||a.match(DR))){var s=d1(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||Y(),iconName:Z(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=Y();return{prefix:i,iconName:Z(i,a)||a}}}},P={noAuto:VD,config:h,dom:hD,parse:MD,library:Er,findIconDefinition:W1,toHtml:k2},uD=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?x:e;(Object.keys(B.styles).length>0||h.autoFetchSvg)&&I&&h.autoReplaceSvg&&P.dom.i2svg({node:r})};function L1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return k2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(I){var r=x.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function pD(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(f3(n)&&e.found&&!r.found){var f=e.width,l=e.height,o={x:f/l/2,y:.5};s.style=p1(v(v({},i),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function CD(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(h.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},s),{},{id:n}),children:r}]}]}function m3(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,o=c.maskId,t=c.titleId,H=c.extra,p=c.watchable,u=p===void 0?!1:p,z=r.found?r:e,C=z.width,N=z.height,V=s==="fak",M=[h.replacementClass,i?"".concat(h.cssPrefix,"-").concat(i):""].filter(function(_){return H.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(H.classes).join(" "),L={children:[],attributes:v(v({},H.attributes),{},{"data-prefix":s,"data-icon":i,class:M,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(N)})},b=V&&!~H.classes.indexOf("fa-fw")?{width:"".concat(C/N*16*.0625,"em")}:{};u&&(L.attributes[c2]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(t||p2())},children:[l]}),delete L.attributes.title);var w=v(v({},L),{},{prefix:s,iconName:i,main:e,mask:r,maskId:o,transform:n,symbol:f,styles:v(v({},b),H.styles)}),R=r.found&&e.found?W("generateAbstractMask",w)||{children:[],attributes:{}}:W("generateAbstractIcon",w)||{children:[],attributes:{}},F=R.children,x1=R.attributes;return w.children=F,w.attributes=x1,f?CD(w):pD(w)}function R3(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,o=v(v(v({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(o[c2]="");var t=v({},n.styles);f3(s)&&(t.transform=QR({transform:s,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var H=p1(t);H.length>0&&(o.style=H);var p=[];return p.push({tag:"span",attributes:o,children:[a]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function dD(c){var a=c.content,e=c.title,r=c.extra,s=v(v(v({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=p1(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var A1=B.styles;function I1(c){var a=c[0],e=c[1],r=c.slice(4),s=a3(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var LD={found:!1,width:512,height:512};function gD(c,a){!xr&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function _1(c,a){var e=a;return a==="fa"&&h.styleDefault!==null&&(a=Y()),new Promise(function(r,s){if(W("missingIconAbstract"),e==="fa"){var i=Dr(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&A1[a]&&A1[a][c]){var n=A1[a][c];return r(I1(n))}gD(c,a),r(v(v({},LD),{},{icon:h.showMissingIcons&&c?W("missingIconAbstract")||{}:{}}))})}var D3=function(){},j1=h.measurePerformance&&y2&&y2.mark&&y2.measure?y2:{mark:D3,measure:D3},m2='FA "6.4.0"',xD=function(a){return j1.mark("".concat(m2," ").concat(a," begins")),function(){return Or(a)}},Or=function(a){j1.mark("".concat(m2," ").concat(a," ends")),j1.measure("".concat(m2," ").concat(a),"".concat(m2," ").concat(a," begins"),"".concat(m2," ").concat(a," ends"))},H3={begin:xD,end:Or},G2=function(){};function E3(c){var a=c.getAttribute?c.getAttribute(c2):null;return typeof a=="string"}function ND(c){var a=c.getAttribute?c.getAttribute(r3):null,e=c.getAttribute?c.getAttribute(s3):null;return a&&e}function bD(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function SD(){if(h.autoReplaceSvg===!0)return W2.replace;var c=W2[h.autoReplaceSvg];return c||W2.replace}function wD(c){return x.createElementNS("http://www.w3.org/2000/svg",c)}function kD(c){return x.createElement(c)}function Ur(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?wD:kD:e;if(typeof c=="string")return x.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(Ur(n,{ceFn:r}))}),s}function yD(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var W2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(Ur(s),e)}),e.getAttribute(c2)===null&&h.keepOriginalSource){var r=x.createComment(yD(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~n3(e).indexOf(h.replacementClass))return W2.replace(a);var s=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(f,l){return l===h.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(f){return k2(f)}).join(`
`);e.setAttribute(c2,""),e.innerHTML=n}};function O3(c){c()}function qr(c,a){var e=typeof a=="function"?a:G2;if(c.length===0)e();else{var r=O3;h.mutateApproach===FR&&(r=K.requestAnimationFrame||O3),r(function(){var s=SD(),i=H3.begin("mutate");c.map(s),i(),e()})}}var z3=!1;function $r(){z3=!0}function X1(){z3=!1}var X2=null;function U3(c){if(k3&&h.observeMutations){var a=c.treeCallback,e=a===void 0?G2:a,r=c.nodeCallback,s=r===void 0?G2:r,i=c.pseudoElementsCallback,n=i===void 0?G2:i,f=c.observeMutationsRoot,l=f===void 0?x:f;X2=new k3(function(o){if(!z3){var t=Y();o2(o).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!E3(H.addedNodes[0])&&(h.searchPseudoElements&&n(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&h.searchPseudoElements&&n(H.target.parentNode),H.type==="attributes"&&E3(H.target)&&~qR.indexOf(H.attributeName))if(H.attributeName==="class"&&ND(H.target)){var p=d1(n3(H.target)),u=p.prefix,z=p.iconName;H.target.setAttribute(r3,u||t),z&&H.target.setAttribute(s3,z)}else bD(H.target)&&s(H.target)})}}),I&&X2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function AD(){X2&&X2.disconnect()}function PD(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function TD(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=d1(n3(c));return s.prefix||(s.prefix=Y()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=tD(s.prefix,c.innerText)||o3(s.prefix,q1(c.innerText))),!s.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function FD(c){var a=o2(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return h.autoA11y&&(e?a["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(r||p2()):(a["aria-hidden"]="true",a.focusable="false")),a}function BD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function q3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=TD(c),r=e.iconName,s=e.prefix,i=e.rest,n=FD(c),f=G1("parseNodeAttributes",{},c),l=a.styleParser?PD(c):[];return v({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var RD=B.styles;function Gr(c){var a=h.autoReplaceSvg==="nest"?q3(c,{styleParser:!1}):q3(c);return~a.extra.classes.indexOf(Nr)?W("generateLayersText",c,a):W("generateSvgReplacementMutation",c,a)}var Q=new Set;i3.map(function(c){Q.add("fa-".concat(c))});Object.keys(V2[g]).map(Q.add.bind(Q));Object.keys(V2[S]).map(Q.add.bind(Q));Q=S2(Q);function $3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var e=x.documentElement.classList,r=function(H){return e.add("".concat(y3,"-").concat(H))},s=function(H){return e.remove("".concat(y3,"-").concat(H))},i=h.autoFetchSvg?Q:i3.map(function(t){return"fa-".concat(t)}).concat(Object.keys(RD));i.includes("fa")||i.push("fa");var n=[".".concat(Nr,":not([").concat(c2,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(c2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=o2(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),s("complete");else return Promise.resolve();var l=H3.begin("onTree"),o=f.reduce(function(t,H){try{var p=Gr(H);p&&t.push(p)}catch(u){xr||u.name==="MissingIcon"&&console.error(u)}return t},[]);return new Promise(function(t,H){Promise.all(o).then(function(p){qr(p,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),t()})}).catch(function(p){l(),H(p)})})}function DD(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gr(c).then(function(e){e&&qr([e],a)})}function ED(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:W1(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:W1(s||{})),c(r,v(v({},e),{},{mask:s}))}}var OD=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?E:r,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,o=e.maskId,t=o===void 0?null:o,H=e.title,p=H===void 0?null:H,u=e.titleId,z=u===void 0?null:u,C=e.classes,N=C===void 0?[]:C,V=e.attributes,M=V===void 0?{}:V,L=e.styles,b=L===void 0?{}:L;if(a){var w=a.prefix,R=a.iconName,F=a.icon;return L1(v({type:"icon"},a),function(){return a2("beforeDOMElementCreation",{iconDefinition:a,params:e}),h.autoA11y&&(p?M["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(z||p2()):(M["aria-hidden"]="true",M.focusable="false")),m3({icons:{main:I1(F),mask:l?I1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:R,transform:v(v({},E),s),symbol:n,title:p,maskId:t,titleId:z,extra:{attributes:M,styles:b,classes:N}})})}},UD={mixout:function(){return{icon:ED(OD)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=$3,e.nodeCallback=DD,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?x:r,i=e.callback,n=i===void 0?function(){}:i;return $3(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,f=r.prefix,l=r.transform,o=r.symbol,t=r.mask,H=r.maskId,p=r.extra;return new Promise(function(u,z){Promise.all([_1(s,f),t.iconName?_1(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var N=a3(C,2),V=N[0],M=N[1];u([e,m3({icons:{main:V,mask:M},prefix:f,iconName:s,transform:l,symbol:o,maskId:H,title:i,titleId:n,extra:p,watchable:!0})])}).catch(z)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,f=e.styles,l=p1(f);l.length>0&&(s.style=l);var o;return f3(n)&&(o=W("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(o||i.icon),{children:r,attributes:s}}}},qD={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return L1({type:"layer"},function(){a2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(S2(i)).join(" ")},children:n}]})}}}},$D={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,f=n===void 0?[]:n,l=r.attributes,o=l===void 0?{}:l,t=r.styles,H=t===void 0?{}:t;return L1({type:"counter",content:e},function(){return a2("beforeDOMElementCreation",{content:e,params:r}),dD({content:e.toString(),title:i,extra:{attributes:o,styles:H,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(S2(f))}})})}}}},GD={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?E:s,n=r.title,f=n===void 0?null:n,l=r.classes,o=l===void 0?[]:l,t=r.attributes,H=t===void 0?{}:t,p=r.styles,u=p===void 0?{}:p;return L1({type:"text",content:e},function(){return a2("beforeDOMElementCreation",{content:e,params:r}),R3({content:e,transform:v(v({},E),i),title:f,extra:{attributes:H,styles:u,classes:["".concat(h.cssPrefix,"-layers-text")].concat(S2(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,f=null,l=null;if(dr){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();f=t.width/o,l=t.height/o}return h.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,R3({content:e.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},WD=new RegExp('"',"ug"),G3=[1105920,1112319];function ID(c){var a=c.replace(WD,""),e=sD(a,0),r=e>=G3[0]&&e<=G3[1],s=a.length===2?a[0]===a[1]:!1;return{value:q1(s?a[0]:a),isSecondary:r||s}}function W3(c,a){var e="".concat(TR).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=o2(c.children),n=i.filter(function(F){return F.getAttribute(U1)===a})[0],f=K.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(ER),o=f.getPropertyValue("font-weight"),t=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&t!=="none"&&t!==""){var H=f.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?S:g,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?h2[p][l[2].toLowerCase()]:OR[p][o],z=ID(H),C=z.value,N=z.isSecondary,V=l[0].startsWith("FontAwesome"),M=o3(u,C),L=M;if(V){var b=mD(C);b.iconName&&b.prefix&&(M=b.iconName,u=b.prefix)}if(M&&!N&&(!n||n.getAttribute(r3)!==u||n.getAttribute(s3)!==L)){c.setAttribute(e,L),n&&c.removeChild(n);var w=BD(),R=w.extra;R.attributes[U1]=a,_1(M,u).then(function(F){var x1=m3(v(v({},w),{},{icons:{main:F,mask:t3()},prefix:u,iconName:L,extra:R,watchable:!0})),_=x.createElement("svg");a==="::before"?c.insertBefore(_,c.firstChild):c.appendChild(_),_.outerHTML=x1.map(function(Xr){return k2(Xr)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function _D(c){return Promise.all([W3(c,"::before"),W3(c,"::after")])}function jD(c){return c.parentNode!==document.head&&!~BR.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(U1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function I3(c){if(I)return new Promise(function(a,e){var r=o2(c.querySelectorAll("*")).filter(jD).map(_D),s=H3.begin("searchPseudoElements");$r(),Promise.all(r).then(function(){s(),X1(),a()}).catch(function(){s(),X1(),e()})})}var XD={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=I3,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?x:r;h.searchPseudoElements&&I3(s)}}},_3=!1,KD={mixout:function(){return{dom:{unwatch:function(){$r(),_3=!0}}}},hooks:function(){return{bootstrap:function(){U3(G1("mutationObserverCallbacks",{}))},noAuto:function(){AD()},watch:function(e){var r=e.observeMutationsRoot;_3?X1():U3(G1("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},j3=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return r.flipX=!0,r;if(n&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(n){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},YD={mixout:function(){return{parse:{transform:function(e){return j3(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=j3(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),o="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),t="rotate(".concat(s.rotate," 0 0)"),H={transform:"".concat(l," ").concat(o," ").concat(t)},p={transform:"translate(".concat(n/2*-1," -256)")},u={outer:f,inner:H,path:p};return{tag:"g",attributes:v({},u.outer),children:[{tag:"g",attributes:v({},u.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:v(v({},r.icon.attributes),u.path)}]}]}}}},P1={x:0,y:0,width:"100%",height:"100%"};function X3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function QD(c){return c.tag==="g"?c.children:[c]}var JD={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),i=s?d1(s.split(" ").map(function(n){return n.trim()})):t3();return i.prefix||(i.prefix=Y()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,o=i.width,t=i.icon,H=n.width,p=n.icon,u=YR({transform:l,containerWidth:H,iconWidth:o}),z={tag:"rect",attributes:v(v({},P1),{},{fill:"white"})},C=t.children?{children:t.children.map(X3)}:{},N={tag:"g",attributes:v({},u.inner),children:[X3(v({tag:t.tag,attributes:v(v({},t.attributes),u.path)},C))]},V={tag:"g",attributes:v({},u.outer),children:[N]},M="mask-".concat(f||p2()),L="clip-".concat(f||p2()),b={tag:"mask",attributes:v(v({},P1),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,V]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:QD(p)},b]};return r.push(w,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(M,")")},P1)}),{children:r,attributes:s}}}},ZD={provides:function(a){var e=!1;K.matchMedia&&(e=K.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:v(v({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=v(v({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:v(v({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},n),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:v(v({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:v(v({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:v(v({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},cE={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return e.symbol=i,e}}}},aE=[ZR,UD,qD,$D,GD,XD,KD,YD,JD,ZD,cE];vD(aE,{mixoutsTo:P});P.noAuto;P.config;var Wr=P.library;P.dom;var K1=P.parse;P.findIconDefinition;P.toHtml;var eE=P.icon;P.layer;P.text;P.counter;function K3(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function U(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?K3(Object(e),!0).forEach(function(r){A(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):K3(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function K2(c){"@babel/helpers - typeof";return K2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},K2(c)}function A(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function rE(c,a){if(c==null)return{};var e={},r=Object.keys(c),s,i;for(i=0;i<r.length;i++)s=r[i],!(a.indexOf(s)>=0)&&(e[s]=c[s]);return e}function sE(c,a){if(c==null)return{};var e=rE(c,a),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(s=0;s<i.length;s++)r=i[s],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(c,r)&&(e[r]=c[r])}return e}var iE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ir={exports:{}};(function(c){(function(a){var e=function(V,M,L){if(!o(M)||H(M)||p(M)||u(M)||l(M))return M;var b,w=0,R=0;if(t(M))for(b=[],R=M.length;w<R;w++)b.push(e(V,M[w],L));else{b={};for(var F in M)Object.prototype.hasOwnProperty.call(M,F)&&(b[V(F,L)]=e(V,M[F],L))}return b},r=function(V,M){M=M||{};var L=M.separator||"_",b=M.split||/(?=[A-Z])/;return V.split(b).join(L)},s=function(V){return z(V)?V:(V=V.replace(/[\-_\s]+(.)?/g,function(M,L){return L?L.toUpperCase():""}),V.substr(0,1).toLowerCase()+V.substr(1))},i=function(V){var M=s(V);return M.substr(0,1).toUpperCase()+M.substr(1)},n=function(V,M){return r(V,M).toLowerCase()},f=Object.prototype.toString,l=function(V){return typeof V=="function"},o=function(V){return V===Object(V)},t=function(V){return f.call(V)=="[object Array]"},H=function(V){return f.call(V)=="[object Date]"},p=function(V){return f.call(V)=="[object RegExp]"},u=function(V){return f.call(V)=="[object Boolean]"},z=function(V){return V=V-0,V===V},C=function(V,M){var L=M&&"process"in M?M.process:M;return typeof L!="function"?V:function(b,w){return L(b,V,w)}},N={camelize:s,decamelize:n,pascalize:i,depascalize:n,camelizeKeys:function(V,M){return e(C(s,M),V)},decamelizeKeys:function(V,M){return e(C(n,M),V,M)},pascalizeKeys:function(V,M){return e(C(i,M),V)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=N:a.humps=N})(iE)})(Ir);var nE=Ir.exports,fE=["class","style"];function lE(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),s=nE.camelize(e.slice(0,r)),i=e.slice(r+1).trim();return a[s]=i,a},{})}function oE(c){return c.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function _r(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var r=(c.children||[]).map(function(l){return _r(l)}),s=Object.keys(c.attributes||{}).reduce(function(l,o){var t=c.attributes[o];switch(o){case"class":l.class=oE(t);break;case"style":l.style=lE(t);break;default:l.attrs[o]=t}return l},{attrs:{},class:{},style:{}});e.class;var i=e.style,n=i===void 0?{}:i,f=sE(e,fE);return es(c.tag,U(U(U({},a),{},{class:s.class,style:U(U({},s.style),n)},s.attrs),f),r)}var jr=!1;try{jr=!0}catch{}function tE(){if(!jr&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function T1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?A({},c,a):{}}function mE(c){var a,e=(a={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},A(a,"fa-".concat(c.size),c.size!==null),A(a,"fa-rotate-".concat(c.rotation),c.rotation!==null),A(a,"fa-pull-".concat(c.pull),c.pull!==null),A(a,"fa-swap-opacity",c.swapOpacity),A(a,"fa-bounce",c.bounce),A(a,"fa-shake",c.shake),A(a,"fa-beat",c.beat),A(a,"fa-fade",c.fade),A(a,"fa-beat-fade",c.beatFade),A(a,"fa-flash",c.flash),A(a,"fa-spin-pulse",c.spinPulse),A(a,"fa-spin-reverse",c.spinReverse),a);return Object.keys(e).map(function(r){return e[r]?r:null}).filter(function(r){return r})}function Y3(c){if(c&&K2(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(K1.icon)return K1.icon(c);if(c===null)return null;if(K2(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var HE=Z3({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var r=e.attrs,s=e2(function(){return Y3(a.icon)}),i=e2(function(){return T1("classes",mE(a))}),n=e2(function(){return T1("transform",typeof a.transform=="string"?K1.transform(a.transform):a.transform)}),f=e2(function(){return T1("mask",Y3(a.mask))}),l=e2(function(){return eE(s.value,U(U(U(U({},i.value),n.value),f.value),{},{symbol:a.symbol,title:a.title}))});as(l,function(t){if(!t)return tE("Could not find one or more icon(s)",s.value,f.value)},{immediate:!0});var o=e2(function(){return l.value?_r(l.value.abstract[0],{},r):null});return function(){return o.value}}});Wr.add(Yl);Wr.add(gR);const g1=rs(ns);g1.component("font-awesome-icon",HE);g1.use(c6);g1.use(Ei);g1.mount("#app");