function Wg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var If={exports:{}},Os={},Rf={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=Symbol.for("react.element"),Hg=Symbol.for("react.portal"),Kg=Symbol.for("react.fragment"),Gg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Qg=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),ev=Symbol.for("react.lazy"),qc=Symbol.iterator;function tv(e){return e===null||typeof e!="object"?null:(e=qc&&e[qc]||e["@@iterator"],typeof e=="function"?e:null)}var Vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Of=Object.assign,Ff={};function rr(e,t,n){this.props=e,this.context=t,this.refs=Ff,this.updater=n||Vf}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bf(){}Bf.prototype=rr.prototype;function fl(e,t,n){this.props=e,this.context=t,this.refs=Ff,this.updater=n||Vf}var pl=fl.prototype=new Bf;pl.constructor=fl;Of(pl,rr.prototype);pl.isPureReactComponent=!0;var Xc=Array.isArray,Uf=Object.prototype.hasOwnProperty,ml={current:null},Wf={key:!0,ref:!0,__self:!0,__source:!0};function $f(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Uf.call(t,r)&&!Wf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ci,type:e,key:s,ref:a,props:i,_owner:ml.current}}function nv(e,t){return{$$typeof:ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ci}function rv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qc=/\/+/g;function co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rv(""+e.key):t.toString(36)}function Hi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ci:case Hg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+co(a,0):r,Xc(i)?(n="",e!=null&&(n=e.replace(Qc,"$&/")+"/"),Hi(i,t,n,"",function(u){return u})):i!=null&&(hl(i)&&(i=nv(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Qc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Xc(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+co(s,l);a+=Hi(s,t,n,c,i)}else if(c=tv(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+co(s,l++),a+=Hi(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ki(e,t,n){if(e==null)return e;var r=[],i=0;return Hi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function iv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ki={transition:null},sv={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:ml};function Hf(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:ki,forEach:function(e,t,n){ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ki(e,function(){t++}),t},toArray:function(e){return ki(e,function(t){return t})||[]},only:function(e){if(!hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=rr;R.Fragment=Kg;R.Profiler=Yg;R.PureComponent=fl;R.StrictMode=Gg;R.Suspense=Zg;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;R.act=Hf;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Of({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=ml.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Uf.call(t,c)&&!Wf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ci,type:e.type,key:i,ref:s,props:r,_owner:a}};R.createContext=function(e){return e={$$typeof:Xg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qg,_context:e},e.Consumer=e};R.createElement=$f;R.createFactory=function(e){var t=$f.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Qg,render:e}};R.isValidElement=hl;R.lazy=function(e){return{$$typeof:ev,_payload:{_status:-1,_result:e},_init:iv}};R.memo=function(e,t){return{$$typeof:Jg,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=t}};R.unstable_act=Hf;R.useCallback=function(e,t){return Se.current.useCallback(e,t)};R.useContext=function(e){return Se.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};R.useEffect=function(e,t){return Se.current.useEffect(e,t)};R.useId=function(){return Se.current.useId()};R.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return Se.current.useMemo(e,t)};R.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};R.useRef=function(e){return Se.current.useRef(e)};R.useState=function(e){return Se.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return Se.current.useTransition()};R.version="18.3.1";Rf.exports=R;var w=Rf.exports;const Kf=$g(w),ov=Wg({__proto__:null,default:Kf},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=w,lv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,dv=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fv={key:!0,ref:!0,__self:!0,__source:!0};function Gf(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)uv.call(t,r)&&!fv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lv,type:e,key:s,ref:a,props:i,_owner:dv.current}}Os.Fragment=cv;Os.jsx=Gf;Os.jsxs=Gf;If.exports=Os;var o=If.exports,Xo={},Yf={exports:{}},Re={},qf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var D=T.length;T.push(z);e:for(;0<D;){var Z=D-1>>>1,ae=T[Z];if(0<i(ae,z))T[Z]=z,T[D]=ae,D=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],D=T.pop();if(D!==z){T[0]=D;e:for(var Z=0,ae=T.length,ji=ae>>>1;Z<ji;){var Qt=2*(Z+1)-1,lo=T[Qt],Zt=Qt+1,bi=T[Zt];if(0>i(lo,D))Zt<ae&&0>i(bi,lo)?(T[Z]=bi,T[Zt]=D,Z=Zt):(T[Z]=lo,T[Qt]=D,Z=Qt);else if(Zt<ae&&0>i(bi,D))T[Z]=bi,T[Zt]=D,Z=Zt;else break e}}return z}function i(T,z){var D=T.sortIndex-z.sortIndex;return D!==0?D:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,v=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function b(T){if(x=!1,g(T),!y)if(n(c)!==null)y=!0,wi(k);else{var z=n(u);z!==null&&re(b,z.startTime-T)}}function k(T,z){y=!1,x&&(x=!1,m(S),S=-1),v=!0;var D=p;try{for(g(z),f=n(c);f!==null&&(!(f.expirationTime>z)||T&&!oe());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,p=f.priorityLevel;var ae=Z(f.expirationTime<=z);z=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(c)&&r(c),g(z)}else r(c);f=n(c)}if(f!==null)var ji=!0;else{var Qt=n(u);Qt!==null&&re(b,Qt.startTime-z),ji=!1}return ji}finally{f=null,p=D,v=!1}}var P=!1,C=null,S=-1,I=5,A=-1;function oe(){return!(e.unstable_now()-A<I)}function bt(){if(C!==null){var T=e.unstable_now();A=T;var z=!0;try{z=C(!0,T)}finally{z?Xt():(P=!1,C=null)}}else P=!1}var Xt;if(typeof h=="function")Xt=function(){h(bt)};else if(typeof MessageChannel<"u"){var cr=new MessageChannel,Yc=cr.port2;cr.port1.onmessage=bt,Xt=function(){Yc.postMessage(null)}}else Xt=function(){j(bt,0)};function wi(T){C=T,P||(P=!0,Xt())}function re(T,z){S=j(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,wi(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var D=p;p=z;try{return T()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=p;p=T;try{return z()}finally{p=D}},e.unstable_scheduleCallback=function(T,z,D){var Z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,T){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=D+ae,T={id:d++,callback:z,priorityLevel:T,startTime:D,expirationTime:ae,sortIndex:-1},D>Z?(T.sortIndex=D,t(u,T),n(c)===null&&T===n(u)&&(x?(m(S),S=-1):x=!0,re(b,D-Z))):(T.sortIndex=ae,t(c,T),y||v||(y=!0,wi(k))),T},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(T){var z=p;return function(){var D=p;p=z;try{return T.apply(this,arguments)}finally{p=D}}}})(Xf);qf.exports=Xf;var pv=qf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=w,De=pv;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qf=new Set,Or={};function vn(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(Or[e]=t,e=0;e<t.length;e++)Qf.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qo=Object.prototype.hasOwnProperty,hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zc={},Jc={};function gv(e){return Qo.call(Jc,e)?!0:Qo.call(Zc,e)?!1:hv.test(e)?Jc[e]=!0:(Zc[e]=!0,!1)}function vv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yv(e,t,n,r){if(t===null||typeof t>"u"||vv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gl,vl);pe[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gl,vl);pe[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gl,vl);pe[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yv(t,n,i,r)&&(n=null),r||i===null?gv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Si=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),Zo=Symbol.for("react.profiler"),Zf=Symbol.for("react.provider"),Jf=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),Jo=Symbol.for("react.suspense"),ea=Symbol.for("react.suspense_list"),jl=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),ep=Symbol.for("react.offscreen"),eu=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,uo;function xr(e){if(uo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uo=t&&t[1]||""}return`
`+uo+e}var fo=!1;function po(e,t){if(!e||fo)return"";fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{fo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function xv(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=po(e.type,!1),e;case 11:return e=po(e.type.render,!1),e;case 1:return e=po(e.type,!0),e;default:return""}}function ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case Zo:return"Profiler";case xl:return"StrictMode";case Jo:return"Suspense";case ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jf:return(e.displayName||"Context")+".Consumer";case Zf:return(e._context.displayName||"Context")+".Provider";case wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jl:return t=e.displayName||null,t!==null?t:ta(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return ta(e(t))}catch{}}return null}function wv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ta(t);case 8:return t===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jv(e){var t=tp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ni(e){e._valueTracker||(e._valueTracker=jv(e))}function np(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function na(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rp(e,t){t=t.checked,t!=null&&yl(e,"checked",t,!1)}function ra(e,t){rp(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&ia(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ia(e,t,n){(t!=="number"||os(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ru(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(wr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function ip(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,op=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bv=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){bv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function ap(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function lp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ap(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kv=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(e,t){if(t){if(kv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function la(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,Bn=null,Un=null;function su(e){if(e=fi(e)){if(typeof ua!="function")throw Error(N(280));var t=e.stateNode;t&&(t=$s(t),ua(e.stateNode,e.type,t))}}function cp(e){Bn?Un?Un.push(e):Un=[e]:Bn=e}function up(){if(Bn){var e=Bn,t=Un;if(Un=Bn=null,su(e),t)for(e=0;e<t.length;e++)su(t[e])}}function dp(e,t){return e(t)}function fp(){}var mo=!1;function pp(e,t,n){if(mo)return e(t,n);mo=!0;try{return dp(e,t,n)}finally{mo=!1,(Bn!==null||Un!==null)&&(fp(),up())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=$s(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var da=!1;if(gt)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){da=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{da=!1}function Sv(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Cr=!1,as=null,ls=!1,fa=null,Nv={onError:function(e){Cr=!0,as=e}};function Pv(e,t,n,r,i,s,a,l,c){Cr=!1,as=null,Sv.apply(Nv,arguments)}function Cv(e,t,n,r,i,s,a,l,c){if(Pv.apply(this,arguments),Cr){if(Cr){var u=as;Cr=!1,as=null}else throw Error(N(198));ls||(ls=!0,fa=u)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(yn(e)!==e)throw Error(N(188))}function Tv(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ou(i),e;if(s===r)return ou(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function hp(e){return e=Tv(e),e!==null?gp(e):null}function gp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gp(e);if(t!==null)return t;e=e.sibling}return null}var vp=De.unstable_scheduleCallback,au=De.unstable_cancelCallback,Ev=De.unstable_shouldYield,_v=De.unstable_requestPaint,ee=De.unstable_now,Mv=De.unstable_getCurrentPriorityLevel,kl=De.unstable_ImmediatePriority,yp=De.unstable_UserBlockingPriority,cs=De.unstable_NormalPriority,Av=De.unstable_LowPriority,xp=De.unstable_IdlePriority,Fs=null,st=null;function zv(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Fs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Iv,Lv=Math.log,Dv=Math.LN2;function Iv(e){return e>>>=0,e===0?32:31-(Lv(e)/Dv|0)|0}var Ci=64,Ti=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function us(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=jr(l):(s&=a,s!==0&&(r=jr(s)))}else a=n&~i,a!==0?r=jr(a):s!==0&&(r=jr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Rv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Ze(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Rv(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wp(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function Ov(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function jp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bp,Nl,kp,Sp,Np,ma=!1,Ei=[],At=null,zt=null,Lt=null,Ur=new Map,Wr=new Map,Ct=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function fr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=fi(t),t!==null&&Nl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bv(e,t,n,r,i){switch(t){case"focusin":return At=fr(At,e,t,n,r,i),!0;case"dragenter":return zt=fr(zt,e,t,n,r,i),!0;case"mouseover":return Lt=fr(Lt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ur.set(s,fr(Ur.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wr.set(s,fr(Wr.get(s)||null,e,t,n,r,i)),!0}return!1}function Pp(e){var t=sn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=mp(n),t!==null){e.blockedOn=t,Np(e.priority,function(){kp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ca=r,n.target.dispatchEvent(r),ca=null}else return t=fi(n),t!==null&&Nl(t),e.blockedOn=n,!1;t.shift()}return!0}function cu(e,t,n){Gi(e)&&n.delete(t)}function Uv(){ma=!1,At!==null&&Gi(At)&&(At=null),zt!==null&&Gi(zt)&&(zt=null),Lt!==null&&Gi(Lt)&&(Lt=null),Ur.forEach(cu),Wr.forEach(cu)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,ma||(ma=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Uv)))}function $r(e){function t(i){return pr(i,e)}if(0<Ei.length){pr(Ei[0],e);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&pr(At,e),zt!==null&&pr(zt,e),Lt!==null&&pr(Lt,e),Ur.forEach(t),Wr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Pp(n),n.blockedOn===null&&Ct.shift()}var Wn=jt.ReactCurrentBatchConfig,ds=!0;function Wv(e,t,n,r){var i=F,s=Wn.transition;Wn.transition=null;try{F=1,Pl(e,t,n,r)}finally{F=i,Wn.transition=s}}function $v(e,t,n,r){var i=F,s=Wn.transition;Wn.transition=null;try{F=4,Pl(e,t,n,r)}finally{F=i,Wn.transition=s}}function Pl(e,t,n,r){if(ds){var i=ha(e,t,n,r);if(i===null)No(e,t,r,fs,n),lu(e,r);else if(Bv(i,e,t,n,r))r.stopPropagation();else if(lu(e,r),t&4&&-1<Fv.indexOf(e)){for(;i!==null;){var s=fi(i);if(s!==null&&bp(s),s=ha(e,t,n,r),s===null&&No(e,t,r,fs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else No(e,t,r,null,n)}}var fs=null;function ha(e,t,n,r){if(fs=null,e=bl(r),e=sn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fs=e,null}function Cp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mv()){case kl:return 1;case yp:return 4;case cs:case Av:return 16;case xp:return 536870912;default:return 16}default:return 16}}var Et=null,Cl=null,Yi=null;function Tp(){if(Yi)return Yi;var e,t=Cl,n=t.length,r,i="value"in Et?Et.value:Et.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Yi=i.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function uu(){return!1}function Ve(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_i:uu,this.isPropagationStopped=uu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Ve(ir),di=q({},ir,{view:0,detail:0}),Hv=Ve(di),go,vo,mr,Bs=q({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:El,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(go=e.screenX-mr.screenX,vo=e.screenY-mr.screenY):vo=go=0,mr=e),go)},movementY:function(e){return"movementY"in e?e.movementY:vo}}),du=Ve(Bs),Kv=q({},Bs,{dataTransfer:0}),Gv=Ve(Kv),Yv=q({},di,{relatedTarget:0}),yo=Ve(Yv),qv=q({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Ve(qv),Qv=q({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zv=Ve(Qv),Jv=q({},ir,{data:0}),fu=Ve(Jv),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ny[e])?!!t[e]:!1}function El(){return ry}var iy=q({},di,{key:function(e){if(e.key){var t=ey[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ty[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:El,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sy=Ve(iy),oy=q({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pu=Ve(oy),ay=q({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:El}),ly=Ve(ay),cy=q({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=Ve(cy),dy=q({},Bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fy=Ve(dy),py=[9,13,27,32],_l=gt&&"CompositionEvent"in window,Tr=null;gt&&"documentMode"in document&&(Tr=document.documentMode);var my=gt&&"TextEvent"in window&&!Tr,Ep=gt&&(!_l||Tr&&8<Tr&&11>=Tr),mu=" ",hu=!1;function _p(e,t){switch(e){case"keyup":return py.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function hy(e,t){switch(e){case"compositionend":return Mp(t);case"keypress":return t.which!==32?null:(hu=!0,mu);case"textInput":return e=t.data,e===mu&&hu?null:e;default:return null}}function gy(e,t){if(Nn)return e==="compositionend"||!_l&&_p(e,t)?(e=Tp(),Yi=Cl=Et=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ep&&t.locale!=="ko"?null:t.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vy[e.type]:t==="textarea"}function Ap(e,t,n,r){cp(r),t=ps(t,"onChange"),0<t.length&&(n=new Tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Hr=null;function yy(e){Wp(e,0)}function Us(e){var t=Tn(e);if(np(t))return e}function xy(e,t){if(e==="change")return t}var zp=!1;if(gt){var xo;if(gt){var wo="oninput"in document;if(!wo){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),wo=typeof vu.oninput=="function"}xo=wo}else xo=!1;zp=xo&&(!document.documentMode||9<document.documentMode)}function yu(){Er&&(Er.detachEvent("onpropertychange",Lp),Hr=Er=null)}function Lp(e){if(e.propertyName==="value"&&Us(Hr)){var t=[];Ap(t,Hr,e,bl(e)),pp(yy,t)}}function wy(e,t,n){e==="focusin"?(yu(),Er=t,Hr=n,Er.attachEvent("onpropertychange",Lp)):e==="focusout"&&yu()}function jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(Hr)}function by(e,t){if(e==="click")return Us(t)}function ky(e,t){if(e==="input"||e==="change")return Us(t)}function Sy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Sy;function Kr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qo.call(t,i)||!et(e[i],t[i]))return!1}return!0}function xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wu(e,t){var n=xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xu(n)}}function Dp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ip(){for(var e=window,t=os();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=os(e.document)}return t}function Ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ny(e){var t=Ip(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dp(n.ownerDocument.documentElement,n)){if(r!==null&&Ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=wu(n,s);var a=wu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Py=gt&&"documentMode"in document&&11>=document.documentMode,Pn=null,ga=null,_r=null,va=!1;function ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;va||Pn==null||Pn!==os(r)||(r=Pn,"selectionStart"in r&&Ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&Kr(_r,r)||(_r=r,r=ps(ga,"onSelect"),0<r.length&&(t=new Tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function Mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionend:Mi("Transition","TransitionEnd")},jo={},Rp={};gt&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Ws(e){if(jo[e])return jo[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rp)return jo[e]=t[n];return e}var Vp=Ws("animationend"),Op=Ws("animationiteration"),Fp=Ws("animationstart"),Bp=Ws("transitionend"),Up=new Map,bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Up.set(e,t),vn(t,[e])}for(var bo=0;bo<bu.length;bo++){var ko=bu[bo],Cy=ko.toLowerCase(),Ty=ko[0].toUpperCase()+ko.slice(1);Ht(Cy,"on"+Ty)}Ht(Vp,"onAnimationEnd");Ht(Op,"onAnimationIteration");Ht(Fp,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Bp,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cv(r,t,void 0,e),e.currentTarget=null}function Wp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;ku(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;ku(i,l,u),s=c}}}if(ls)throw e=fa,ls=!1,fa=null,e}function U(e,t){var n=t[ba];n===void 0&&(n=t[ba]=new Set);var r=e+"__bubble";n.has(r)||($p(t,e,2,!1),n.add(r))}function So(e,t,n){var r=0;t&&(r|=4),$p(n,e,r,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Ai]){e[Ai]=!0,Qf.forEach(function(n){n!=="selectionchange"&&(Ey.has(n)||So(n,!1,e),So(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,So("selectionchange",!1,t))}}function $p(e,t,n,r){switch(Cp(t)){case 1:var i=Wv;break;case 4:i=$v;break;default:i=Pl}n=i.bind(null,t,n,e),i=void 0,!da||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function No(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=sn(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}pp(function(){var u=s,d=bl(n),f=[];e:{var p=Up.get(e);if(p!==void 0){var v=Tl,y=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":v=sy;break;case"focusin":y="focus",v=yo;break;case"focusout":y="blur",v=yo;break;case"beforeblur":case"afterblur":v=yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ly;break;case Vp:case Op:case Fp:v=Xv;break;case Bp:v=uy;break;case"scroll":v=Hv;break;case"wheel":v=fy;break;case"copy":case"cut":case"paste":v=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=pu}var x=(t&4)!==0,j=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var h=u,g;h!==null;){g=h;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,m!==null&&(b=Br(h,m),b!=null&&x.push(Yr(h,b,g)))),j)break;h=h.return}0<x.length&&(p=new v(p,y,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==ca&&(y=n.relatedTarget||n.fromElement)&&(sn(y)||y[vt]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?sn(y):null,y!==null&&(j=yn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=du,b="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=pu,b="onPointerLeave",m="onPointerEnter",h="pointer"),j=v==null?p:Tn(v),g=y==null?p:Tn(y),p=new x(b,h+"leave",v,n,d),p.target=j,p.relatedTarget=g,b=null,sn(d)===u&&(x=new x(m,h+"enter",y,n,d),x.target=g,x.relatedTarget=j,b=x),j=b,v&&y)t:{for(x=v,m=y,h=0,g=x;g;g=bn(g))h++;for(g=0,b=m;b;b=bn(b))g++;for(;0<h-g;)x=bn(x),h--;for(;0<g-h;)m=bn(m),g--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=bn(x),m=bn(m)}x=null}else x=null;v!==null&&Su(f,p,v,x,!1),y!==null&&j!==null&&Su(f,j,y,x,!0)}}e:{if(p=u?Tn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=xy;else if(gu(p))if(zp)k=ky;else{k=jy;var P=wy}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=by);if(k&&(k=k(e,u))){Ap(f,k,n,d);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&ia(p,"number",p.value)}switch(P=u?Tn(u):window,e){case"focusin":(gu(P)||P.contentEditable==="true")&&(Pn=P,ga=u,_r=null);break;case"focusout":_r=ga=Pn=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,ju(f,n,d);break;case"selectionchange":if(Py)break;case"keydown":case"keyup":ju(f,n,d)}var C;if(_l)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Nn?_p(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Ep&&n.locale!=="ko"&&(Nn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Nn&&(C=Tp()):(Et=d,Cl="value"in Et?Et.value:Et.textContent,Nn=!0)),P=ps(u,S),0<P.length&&(S=new fu(S,e,null,n,d),f.push({event:S,listeners:P}),C?S.data=C:(C=Mp(n),C!==null&&(S.data=C)))),(C=my?hy(e,n):gy(e,n))&&(u=ps(u,"onBeforeInput"),0<u.length&&(d=new fu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}Wp(f,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Br(e,n),s!=null&&r.unshift(Yr(e,s,i)),s=Br(e,t),s!=null&&r.push(Yr(e,s,i))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Su(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Br(n,s),c!=null&&a.unshift(Yr(n,c,l))):i||(c=Br(n,s),c!=null&&a.push(Yr(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var _y=/\r\n?/g,My=/\u0000|\uFFFD/g;function Nu(e){return(typeof e=="string"?e:""+e).replace(_y,`
`).replace(My,"")}function zi(e,t,n){if(t=Nu(t),Nu(e)!==t&&n)throw Error(N(425))}function ms(){}var ya=null,xa=null;function wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ja=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(Ly)}:ja;function Ly(e){setTimeout(function(){throw e})}function Po(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$r(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),it="__reactFiber$"+sr,qr="__reactProps$"+sr,vt="__reactContainer$"+sr,ba="__reactEvents$"+sr,Dy="__reactListeners$"+sr,Iy="__reactHandles$"+sr;function sn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cu(e);e!==null;){if(n=e[it])return n;e=Cu(e)}return t}e=n,n=e.parentNode}return null}function fi(e){return e=e[it]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function $s(e){return e[qr]||null}var ka=[],En=-1;function Kt(e){return{current:e}}function W(e){0>En||(e.current=ka[En],ka[En]=null,En--)}function B(e,t){En++,ka[En]=e.current,e.current=t}var Ut={},we=Kt(Ut),Te=Kt(!1),fn=Ut;function Gn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function hs(){W(Te),W(we)}function Tu(e,t,n){if(we.current!==Ut)throw Error(N(168));B(we,t),B(Te,n)}function Hp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,wv(e)||"Unknown",i));return q({},n,r)}function gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,fn=we.current,B(we,e),B(Te,Te.current),!0}function Eu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Hp(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,W(Te),W(we),B(we,e)):W(Te),B(Te,n)}var ut=null,Hs=!1,Co=!1;function Kp(e){ut===null?ut=[e]:ut.push(e)}function Ry(e){Hs=!0,Kp(e)}function Gt(){if(!Co&&ut!==null){Co=!0;var e=0,t=F;try{var n=ut;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,Hs=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),vp(kl,Gt),i}finally{F=t,Co=!1}}return null}var _n=[],Mn=0,vs=null,ys=0,Be=[],Ue=0,pn=null,dt=1,ft="";function en(e,t){_n[Mn++]=ys,_n[Mn++]=vs,vs=e,ys=t}function Gp(e,t,n){Be[Ue++]=dt,Be[Ue++]=ft,Be[Ue++]=pn,pn=e;var r=dt;e=ft;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var s=32-Ze(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dt=1<<32-Ze(t)+i|n<<i|r,ft=s+e}else dt=1<<s|n<<i|r,ft=e}function Al(e){e.return!==null&&(en(e,1),Gp(e,1,0))}function zl(e){for(;e===vs;)vs=_n[--Mn],_n[Mn]=null,ys=_n[--Mn],_n[Mn]=null;for(;e===pn;)pn=Be[--Ue],Be[Ue]=null,ft=Be[--Ue],Be[Ue]=null,dt=Be[--Ue],Be[Ue]=null}var ze=null,Ae=null,H=!1,Qe=null;function Yp(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ae=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ae=null,!0):!1;default:return!1}}function Sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(H){var t=Ae;if(t){var n=t;if(!_u(e,t)){if(Sa(e))throw Error(N(418));t=Dt(n.nextSibling);var r=ze;t&&_u(e,t)?Yp(r,n):(e.flags=e.flags&-4097|2,H=!1,ze=e)}}else{if(Sa(e))throw Error(N(418));e.flags=e.flags&-4097|2,H=!1,ze=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Li(e){if(e!==ze)return!1;if(!H)return Mu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wa(e.type,e.memoizedProps)),t&&(t=Ae)){if(Sa(e))throw qp(),Error(N(418));for(;t;)Yp(e,t),t=Dt(t.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=ze?Dt(e.stateNode.nextSibling):null;return!0}function qp(){for(var e=Ae;e;)e=Dt(e.nextSibling)}function Yn(){Ae=ze=null,H=!1}function Ll(e){Qe===null?Qe=[e]:Qe.push(e)}var Vy=jt.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Di(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Au(e){var t=e._init;return t(e._payload)}function Xp(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Ot(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,h,g,b){return h===null||h.tag!==6?(h=Lo(g,m.mode,b),h.return=m,h):(h=i(h,g),h.return=m,h)}function c(m,h,g,b){var k=g.type;return k===Sn?d(m,h,g.props.children,b,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Au(k)===h.type)?(b=i(h,g.props),b.ref=hr(m,h,g),b.return=m,b):(b=ns(g.type,g.key,g.props,null,m.mode,b),b.ref=hr(m,h,g),b.return=m,b)}function u(m,h,g,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Do(g,m.mode,b),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,b,k){return h===null||h.tag!==7?(h=un(g,m.mode,b,k),h.return=m,h):(h=i(h,g),h.return=m,h)}function f(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Lo(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Si:return g=ns(h.type,h.key,h.props,null,m.mode,g),g.ref=hr(m,null,h),g.return=m,g;case kn:return h=Do(h,m.mode,g),h.return=m,h;case Nt:var b=h._init;return f(m,b(h._payload),g)}if(wr(h)||ur(h))return h=un(h,m.mode,g,null),h.return=m,h;Di(m,h)}return null}function p(m,h,g,b){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,h,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Si:return g.key===k?c(m,h,g,b):null;case kn:return g.key===k?u(m,h,g,b):null;case Nt:return k=g._init,p(m,h,k(g._payload),b)}if(wr(g)||ur(g))return k!==null?null:d(m,h,g,b,null);Di(m,g)}return null}function v(m,h,g,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(g)||null,l(h,m,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Si:return m=m.get(b.key===null?g:b.key)||null,c(h,m,b,k);case kn:return m=m.get(b.key===null?g:b.key)||null,u(h,m,b,k);case Nt:var P=b._init;return v(m,h,g,P(b._payload),k)}if(wr(b)||ur(b))return m=m.get(g)||null,d(h,m,b,k,null);Di(h,b)}return null}function y(m,h,g,b){for(var k=null,P=null,C=h,S=h=0,I=null;C!==null&&S<g.length;S++){C.index>S?(I=C,C=null):I=C.sibling;var A=p(m,C,g[S],b);if(A===null){C===null&&(C=I);break}e&&C&&A.alternate===null&&t(m,C),h=s(A,h,S),P===null?k=A:P.sibling=A,P=A,C=I}if(S===g.length)return n(m,C),H&&en(m,S),k;if(C===null){for(;S<g.length;S++)C=f(m,g[S],b),C!==null&&(h=s(C,h,S),P===null?k=C:P.sibling=C,P=C);return H&&en(m,S),k}for(C=r(m,C);S<g.length;S++)I=v(C,m,S,g[S],b),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?S:I.key),h=s(I,h,S),P===null?k=I:P.sibling=I,P=I);return e&&C.forEach(function(oe){return t(m,oe)}),H&&en(m,S),k}function x(m,h,g,b){var k=ur(g);if(typeof k!="function")throw Error(N(150));if(g=k.call(g),g==null)throw Error(N(151));for(var P=k=null,C=h,S=h=0,I=null,A=g.next();C!==null&&!A.done;S++,A=g.next()){C.index>S?(I=C,C=null):I=C.sibling;var oe=p(m,C,A.value,b);if(oe===null){C===null&&(C=I);break}e&&C&&oe.alternate===null&&t(m,C),h=s(oe,h,S),P===null?k=oe:P.sibling=oe,P=oe,C=I}if(A.done)return n(m,C),H&&en(m,S),k;if(C===null){for(;!A.done;S++,A=g.next())A=f(m,A.value,b),A!==null&&(h=s(A,h,S),P===null?k=A:P.sibling=A,P=A);return H&&en(m,S),k}for(C=r(m,C);!A.done;S++,A=g.next())A=v(C,m,S,A.value,b),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?S:A.key),h=s(A,h,S),P===null?k=A:P.sibling=A,P=A);return e&&C.forEach(function(bt){return t(m,bt)}),H&&en(m,S),k}function j(m,h,g,b){if(typeof g=="object"&&g!==null&&g.type===Sn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Si:e:{for(var k=g.key,P=h;P!==null;){if(P.key===k){if(k=g.type,k===Sn){if(P.tag===7){n(m,P.sibling),h=i(P,g.props.children),h.return=m,m=h;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Au(k)===P.type){n(m,P.sibling),h=i(P,g.props),h.ref=hr(m,P,g),h.return=m,m=h;break e}n(m,P);break}else t(m,P);P=P.sibling}g.type===Sn?(h=un(g.props.children,m.mode,b,g.key),h.return=m,m=h):(b=ns(g.type,g.key,g.props,null,m.mode,b),b.ref=hr(m,h,g),b.return=m,m=b)}return a(m);case kn:e:{for(P=g.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Do(g,m.mode,b),h.return=m,m=h}return a(m);case Nt:return P=g._init,j(m,h,P(g._payload),b)}if(wr(g))return y(m,h,g,b);if(ur(g))return x(m,h,g,b);Di(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=Lo(g,m.mode,b),h.return=m,m=h),a(m)):n(m,h)}return j}var qn=Xp(!0),Qp=Xp(!1),xs=Kt(null),ws=null,An=null,Dl=null;function Il(){Dl=An=ws=null}function Rl(e){var t=xs.current;W(xs),e._currentValue=t}function Pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){ws=e,Dl=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Dl!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(ws===null)throw Error(N(308));An=e,ws.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var on=null;function Vl(e){on===null?on=[e]:on.push(e)}function Zp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Vl(t)):(n.next=i.next,i.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yt(e,n)}return i=r.interleaved,i===null?(t.next=t,Vl(r)):(t.next=i.next,i.next=t),r.interleaved=t,yt(e,n)}function Xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}function zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function js(e,t,n,r){var i=e.updateQueue;Pt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;a=0,d=u=c=null,l=s;do{var p=l.lane,v=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(p=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(v,f,p):y,p==null)break e;f=q({},f,p);break e;case 2:Pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=f):d=d.next=v,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);hn|=a,e.lanes=a,e.memoizedState=f}}function Lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var pi={},ot=Kt(pi),Xr=Kt(pi),Qr=Kt(pi);function an(e){if(e===pi)throw Error(N(174));return e}function Fl(e,t){switch(B(Qr,t),B(Xr,e),B(ot,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e)}W(ot),B(ot,t)}function Xn(){W(ot),W(Xr),W(Qr)}function em(e){an(Qr.current);var t=an(ot.current),n=oa(t,e.type);t!==n&&(B(Xr,e),B(ot,n))}function Bl(e){Xr.current===e&&(W(ot),W(Xr))}var K=Kt(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var To=[];function Ul(){for(var e=0;e<To.length;e++)To[e]._workInProgressVersionPrimary=null;To.length=0}var Qi=jt.ReactCurrentDispatcher,Eo=jt.ReactCurrentBatchConfig,mn=0,Y=null,ie=null,le=null,ks=!1,Mr=!1,Zr=0,Oy=0;function me(){throw Error(N(321))}function Wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function $l(e,t,n,r,i,s){if(mn=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qi.current=e===null||e.memoizedState===null?Wy:$y,e=n(r,i),Mr){s=0;do{if(Mr=!1,Zr=0,25<=s)throw Error(N(301));s+=1,le=ie=null,t.updateQueue=null,Qi.current=Hy,e=n(r,i)}while(Mr)}if(Qi.current=Ss,t=ie!==null&&ie.next!==null,mn=0,le=ie=Y=null,ks=!1,t)throw Error(N(300));return e}function Hl(){var e=Zr!==0;return Zr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Ke(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(N(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function Jr(e,t){return typeof t=="function"?t(e):t}function _o(e){var t=Ke(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((mn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,Y.lanes|=d,hn|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,et(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,hn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mo(e){var t=Ke(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);et(s,t.memoizedState)||(Ce=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function tm(){}function nm(e,t){var n=Y,r=Ke(),i=t(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Ce=!0),r=r.queue,Kl(sm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ei(9,im.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(N(349));mn&30||rm(n,t,i)}return i}function rm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function im(e,t,n,r){t.value=n,t.getSnapshot=r,om(t)&&am(e)}function sm(e,t,n){return n(function(){om(t)&&am(e)})}function om(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function am(e){var t=yt(e,1);t!==null&&Je(t,e,1,-1)}function Du(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Uy.bind(null,Y,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lm(){return Ke().memoizedState}function Zi(e,t,n,r){var i=rt();Y.flags|=e,i.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function Ks(e,t,n,r){var i=Ke();r=r===void 0?null:r;var s=void 0;if(ie!==null){var a=ie.memoizedState;if(s=a.destroy,r!==null&&Wl(r,a.deps)){i.memoizedState=ei(t,n,s,r);return}}Y.flags|=e,i.memoizedState=ei(1|t,n,s,r)}function Iu(e,t){return Zi(8390656,8,e,t)}function Kl(e,t){return Ks(2048,8,e,t)}function cm(e,t){return Ks(4,2,e,t)}function um(e,t){return Ks(4,4,e,t)}function dm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fm(e,t,n){return n=n!=null?n.concat([e]):null,Ks(4,4,dm.bind(null,t,e),n)}function Gl(){}function pm(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mm(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hm(e,t,n){return mn&21?(et(n,t)||(n=wp(),Y.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Fy(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Eo.transition;Eo.transition={};try{e(!1),t()}finally{F=n,Eo.transition=r}}function gm(){return Ke().memoizedState}function By(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vm(e))ym(t,n);else if(n=Zp(e,t,n,r),n!==null){var i=ke();Je(n,e,r,i),xm(n,t,r)}}function Uy(e,t,n){var r=Vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vm(e))ym(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,et(l,a)){var c=t.interleaved;c===null?(i.next=i,Vl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Zp(e,t,i,r),n!==null&&(i=ke(),Je(n,e,r,i),xm(n,t,r))}}function vm(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function ym(e,t){Mr=ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}var Ss={readContext:He,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Wy={readContext:He,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4194308,4,dm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=By.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Du,useDebugValue:Gl,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Du(!1),t=e[0];return e=Fy.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=rt();if(H){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ce===null)throw Error(N(349));mn&30||rm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Iu(sm.bind(null,r,s,e),[e]),r.flags|=2048,ei(9,im.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=rt(),t=ce.identifierPrefix;if(H){var n=ft,r=dt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Oy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$y={readContext:He,useCallback:pm,useContext:He,useEffect:Kl,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:mm,useReducer:_o,useRef:lm,useState:function(){return _o(Jr)},useDebugValue:Gl,useDeferredValue:function(e){var t=Ke();return hm(t,ie.memoizedState,e)},useTransition:function(){var e=_o(Jr)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:tm,useSyncExternalStore:nm,useId:gm,unstable_isNewReconciler:!1},Hy={readContext:He,useCallback:pm,useContext:He,useEffect:Kl,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:mm,useReducer:Mo,useRef:lm,useState:function(){return Mo(Jr)},useDebugValue:Gl,useDeferredValue:function(e){var t=Ke();return ie===null?t.memoizedState=e:hm(t,ie.memoizedState,e)},useTransition:function(){var e=Mo(Jr)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:tm,useSyncExternalStore:nm,useId:gm,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Vt(e),s=pt(r,i);s.payload=t,n!=null&&(s.callback=n),t=It(e,s,i),t!==null&&(Je(t,e,i,r),Xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Vt(e),s=pt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=It(e,s,i),t!==null&&(Je(t,e,i,r),Xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Vt(e),i=pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=It(e,i,r),t!==null&&(Je(t,e,r,n),Xi(t,e,r))}};function Ru(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,s):!0}function wm(e,t,n){var r=!1,i=Ut,s=t.contextType;return typeof s=="object"&&s!==null?s=He(s):(i=Ee(t)?fn:we.current,r=t.contextTypes,s=(r=r!=null)?Gn(e,i):Ut),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ol(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=He(s):(s=Ee(t)?fn:we.current,i.context=Gn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ca(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Gs.enqueueReplaceState(i,i.state,null),js(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=xv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ao(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ky=typeof WeakMap=="function"?WeakMap:Map;function jm(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ps||(Ps=!0,Oa=r),Ea(e,t)},n}function bm(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ea(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ea(e,t),typeof r!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ou(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ky;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=o0.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var Gy=jt.ReactCurrentOwner,Ce=!1;function be(e,t,n,r){t.child=e===null?Qp(t,null,n,r):qn(t,e.child,n,r)}function Uu(e,t,n,r,i){n=n.render;var s=t.ref;return $n(t,i),r=$l(e,t,n,r,s,i),n=Hl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(H&&n&&Al(t),t.flags|=1,be(e,t,r,i),t.child)}function Wu(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!tc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,km(e,t,s,r,i)):(e=ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(a,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=Ot(s,r),e.ref=t.ref,e.return=t,t.child=e}function km(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Kr(s,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,xt(e,t,i)}return _a(e,t,n,r,i)}function Sm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Ln,Me),Me|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Ln,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(Ln,Me),Me|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,B(Ln,Me),Me|=r;return be(e,t,i,n),t.child}function Nm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var s=Ee(n)?fn:we.current;return s=Gn(t,s),$n(t,i),n=$l(e,t,n,r,s,i),r=Hl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(H&&r&&Al(t),t.flags|=1,be(e,t,n,i),t.child)}function $u(e,t,n,r,i){if(Ee(n)){var s=!0;gs(t)}else s=!1;if($n(t,i),t.stateNode===null)Ji(e,t),wm(t,n,r),Ta(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Ee(n)?fn:we.current,u=Gn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Vu(t,a,r,u),Pt=!1;var p=t.memoizedState;a.state=p,js(t,r,a,i),c=t.memoizedState,l!==r||p!==c||Te.current||Pt?(typeof d=="function"&&(Ca(t,n,d,r),c=t.memoizedState),(l=Pt||Ru(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Jp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:qe(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=He(c):(c=Ee(n)?fn:we.current,c=Gn(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Vu(t,a,r,c),Pt=!1,p=t.memoizedState,a.state=p,js(t,r,a,i);var y=t.memoizedState;l!==f||p!==y||Te.current||Pt?(typeof v=="function"&&(Ca(t,n,v,r),y=t.memoizedState),(u=Pt||Ru(t,n,u,r,p,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ma(e,t,n,r,s,i)}function Ma(e,t,n,r,i,s){Nm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Eu(t,n,!1),xt(e,t,s);r=t.stateNode,Gy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=qn(t,e.child,null,s),t.child=qn(t,null,l,s)):be(e,t,l,s),t.memoizedState=r.state,i&&Eu(t,n,!0),t.child}function Pm(e){var t=e.stateNode;t.pendingContext?Tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tu(e,t.context,!1),Fl(e,t.containerInfo)}function Hu(e,t,n,r,i){return Yn(),Ll(i),t.flags|=256,be(e,t,n,r),t.child}var Aa={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cm(e,t,n){var r=t.pendingProps,i=K.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(K,i&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Xs(a,r,0,null),e=un(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=za(n),t.memoizedState=Aa,e):Yl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Yy(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ot(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ot(l,s):(s=un(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?za(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Aa,r}return s=e.child,e=s.sibling,r=Ot(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yl(e,t){return t=Xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&Ll(r),qn(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yy(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Ao(Error(N(422))),Ii(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Xs({mode:"visible",children:r.children},i,0,null),s=un(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&qn(t,e.child,null,a),t.child.memoizedState=za(a),t.memoizedState=Aa,s);if(!(t.mode&1))return Ii(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(N(419)),r=Ao(s,r,void 0),Ii(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ce||l){if(r=ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yt(e,i),Je(r,e,i,-1))}return ec(),r=Ao(Error(N(421))),Ii(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=a0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ae=Dt(i.nextSibling),ze=t,H=!0,Qe=null,e!==null&&(Be[Ue++]=dt,Be[Ue++]=ft,Be[Ue++]=pn,dt=e.id,ft=e.overflow,pn=t),t=Yl(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pa(e.return,t,n)}function zo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Tm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(be(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zo(t,!0,n,null,s);break;case"together":zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qy(e,t,n){switch(t.tag){case 3:Pm(t),Yn();break;case 5:em(t);break;case 1:Ee(t.type)&&gs(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(xs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Cm(e,t,n):(B(K,K.current&1),e=xt(e,t,n),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Sm(e,t,n)}return xt(e,t,n)}var Em,La,_m,Mm;Em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};La=function(){};_m=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(ot.current);var s=null;switch(n){case"input":i=na(e,i),r=na(e,r),s=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":i=sa(e,i),r=sa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ms)}aa(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Or.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Or.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&U("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Mm=function(e,t,n,r){n!==r&&(t.flags|=4)};function gr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xy(e,t,n){var r=t.pendingProps;switch(zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ee(t.type)&&hs(),he(t),null;case 3:return r=t.stateNode,Xn(),W(Te),W(we),Ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Ua(Qe),Qe=null))),La(e,t),he(t),null;case 5:Bl(t);var i=an(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)_m(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return he(t),null}if(e=an(ot.current),Li(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[it]=t,r[qr]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<br.length;i++)U(br[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":tu(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":ru(r,s),U("invalid",r)}aa(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",""+l]):Or.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&U("scroll",r)}switch(n){case"input":Ni(r),nu(r,s,!0);break;case"textarea":Ni(r),iu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ms)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[it]=t,e[qr]=r,Em(e,t,!1,!1),t.stateNode=e;e:{switch(a=la(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<br.length;i++)U(br[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":tu(e,r),i=na(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),U("invalid",e);break;case"textarea":ru(e,r),i=sa(e,r),U("invalid",e);break;default:i=r}aa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?lp(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&op(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fr(e,c):typeof c=="number"&&Fr(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Or.hasOwnProperty(s)?c!=null&&s==="onScroll"&&U("scroll",e):c!=null&&yl(e,s,c,a))}switch(n){case"input":Ni(e),nu(e,r,!1);break;case"textarea":Ni(e),iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Fn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ms)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Mm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=an(Qr.current),an(ot.current),Li(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(s=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return he(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ae!==null&&t.mode&1&&!(t.flags&128))qp(),Yn(),t.flags|=98560,s=!1;else if(s=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[it]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),s=!1}else Qe!==null&&(Ua(Qe),Qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?se===0&&(se=3):ec())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Xn(),La(e,t),e===null&&Gr(t.stateNode.containerInfo),he(t),null;case 10:return Rl(t.type._context),he(t),null;case 17:return Ee(t.type)&&hs(),he(t),null;case 19:if(W(K),s=t.memoizedState,s===null)return he(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)gr(s,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=bs(e),a!==null){for(t.flags|=128,gr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(K,K.current&1|2),t.child}e=e.sibling}s.tail!==null&&ee()>Zn&&(t.flags|=128,r=!0,gr(s,!1),t.lanes=4194304)}else{if(!r)if(e=bs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!H)return he(t),null}else 2*ee()-s.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,gr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ee(),t.sibling=null,n=K.current,B(K,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Jl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Qy(e,t){switch(zl(t),t.tag){case 1:return Ee(t.type)&&hs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),W(Te),W(we),Ul(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bl(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return Xn(),null;case 10:return Rl(t.type._context),null;case 22:case 23:return Jl(),null;case 24:return null;default:return null}}var Ri=!1,ye=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,E=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Da(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Gu=!1;function Jy(e,t){if(ya=ds,e=Ip(),Ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==s||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===s&&++d===r&&(c=a),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(xa={focusedElem:e,selectionRange:n},ds=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:qe(t.type,x),j);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){Q(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=Gu,Gu=!1,y}function Ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Da(t,n,s)}i=i.next}while(i!==r)}}function Ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Am(e){var t=e.alternate;t!==null&&(e.alternate=null,Am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[qr],delete t[ba],delete t[Dy],delete t[Iy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zm(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ms));else if(r!==4&&(e=e.child,e!==null))for(Ra(e,t,n),e=e.sibling;e!==null;)Ra(e,t,n),e=e.sibling}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}var ue=null,Xe=!1;function kt(e,t,n){for(n=n.child;n!==null;)Lm(e,t,n),n=n.sibling}function Lm(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Fs,n)}catch{}switch(n.tag){case 5:ye||zn(n,t);case 6:var r=ue,i=Xe;ue=null,kt(e,t,n),ue=r,Xe=i,ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?Po(e.parentNode,n):e.nodeType===1&&Po(e,n),$r(e)):Po(ue,n.stateNode));break;case 4:r=ue,i=Xe,ue=n.stateNode.containerInfo,Xe=!0,kt(e,t,n),ue=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Da(n,t,a),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!ye&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,kt(e,t,n),ye=r):kt(e,t,n);break;default:kt(e,t,n)}}function qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zy),t.forEach(function(r){var i=l0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Xe=!1;break e;case 3:ue=l.stateNode.containerInfo,Xe=!0;break e;case 4:ue=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(ue===null)throw Error(N(160));Lm(s,a,i),ue=null,Xe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dm(t,e),t=t.sibling}function Dm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),nt(e),r&4){try{Ar(3,e,e.return),Ys(3,e)}catch(x){Q(e,e.return,x)}try{Ar(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Ge(t,e),nt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(Ge(t,e),nt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&rp(i,s),la(l,a);var u=la(l,s);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?lp(i,f):d==="dangerouslySetInnerHTML"?op(i,f):d==="children"?Fr(i,f):yl(i,d,f,u)}switch(l){case"input":ra(i,s);break;case"textarea":ip(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Fn(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?Fn(i,!!s.multiple,s.defaultValue,!0):Fn(i,!!s.multiple,s.multiple?[]:"",!1))}i[qr]=s}catch(x){Q(e,e.return,x)}}break;case 6:if(Ge(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){Q(e,e.return,x)}}break;case 3:if(Ge(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Ge(t,e),nt(e);break;case 13:Ge(t,e),nt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ql=ee())),r&4&&qu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||d,Ge(t,e),ye=u):Ge(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(f=E=d;E!==null;){switch(p=E,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ar(4,p,p.return);break;case 1:zn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:zn(p,p.return);break;case 22:if(p.memoizedState!==null){Qu(f);continue}}v!==null?(v.return=p,E=v):Qu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ap("display",a))}catch(x){Q(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Q(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),nt(e),r&4&&qu(e);break;case 21:break;default:Ge(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zm(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fr(i,""),r.flags&=-33);var s=Yu(e);Va(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Yu(e);Ra(e,l,a);break;default:throw Error(N(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function e0(e,t,n){E=e,Im(e)}function Im(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ri;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ye;l=Ri;var u=ye;if(Ri=a,(ye=c)&&!u)for(E=i;E!==null;)a=E,c=a.child,a.tag===22&&a.memoizedState!==null?Zu(i):c!==null?(c.return=a,E=c):Zu(i);for(;s!==null;)E=s,Im(s),s=s.sibling;E=i,Ri=l,ye=u}Xu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):Xu(e)}}function Xu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ys(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Lu(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&$r(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ye||t.flags&512&&Ia(t)}catch(p){Q(t,t.return,p)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Qu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Zu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ys(4,t)}catch(c){Q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Q(t,i,c)}}var s=t.return;try{Ia(t)}catch(c){Q(t,s,c)}break;case 5:var a=t.return;try{Ia(t)}catch(c){Q(t,a,c)}}}catch(c){Q(t,t.return,c)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var t0=Math.ceil,Ns=jt.ReactCurrentDispatcher,ql=jt.ReactCurrentOwner,$e=jt.ReactCurrentBatchConfig,O=0,ce=null,te=null,fe=0,Me=0,Ln=Kt(0),se=0,ti=null,hn=0,qs=0,Xl=0,zr=null,Pe=null,Ql=0,Zn=1/0,ct=null,Ps=!1,Oa=null,Rt=null,Vi=!1,_t=null,Cs=0,Lr=0,Fa=null,es=-1,ts=0;function ke(){return O&6?ee():es!==-1?es:es=ee()}function Vt(e){return e.mode&1?O&2&&fe!==0?fe&-fe:Vy.transition!==null?(ts===0&&(ts=wp()),ts):(e=F,e!==0||(e=window.event,e=e===void 0?16:Cp(e.type)),e):1}function Je(e,t,n,r){if(50<Lr)throw Lr=0,Fa=null,Error(N(185));ui(e,n,r),(!(O&2)||e!==ce)&&(e===ce&&(!(O&2)&&(qs|=n),se===4&&Tt(e,fe)),_e(e,r),n===1&&O===0&&!(t.mode&1)&&(Zn=ee()+500,Hs&&Gt()))}function _e(e,t){var n=e.callbackNode;Vv(e,t);var r=us(e,e===ce?fe:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?Ry(Ju.bind(null,e)):Kp(Ju.bind(null,e)),zy(function(){!(O&6)&&Gt()}),n=null;else{switch(jp(r)){case 1:n=kl;break;case 4:n=yp;break;case 16:n=cs;break;case 536870912:n=xp;break;default:n=cs}n=$m(n,Rm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rm(e,t){if(es=-1,ts=0,O&6)throw Error(N(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=us(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ts(e,r);else{t=r;var i=O;O|=2;var s=Om();(ce!==e||fe!==t)&&(ct=null,Zn=ee()+500,cn(e,t));do try{i0();break}catch(l){Vm(e,l)}while(!0);Il(),Ns.current=s,O=i,te!==null?t=0:(ce=null,fe=0,t=se)}if(t!==0){if(t===2&&(i=pa(e),i!==0&&(r=i,t=Ba(e,i))),t===1)throw n=ti,cn(e,0),Tt(e,r),_e(e,ee()),n;if(t===6)Tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!n0(i)&&(t=Ts(e,r),t===2&&(s=pa(e),s!==0&&(r=s,t=Ba(e,s))),t===1))throw n=ti,cn(e,0),Tt(e,r),_e(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:tn(e,Pe,ct);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=Ql+500-ee(),10<t)){if(us(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ja(tn.bind(null,e,Pe,ct),t);break}tn(e,Pe,ct);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ze(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t0(r/1960))-r,10<r){e.timeoutHandle=ja(tn.bind(null,e,Pe,ct),r);break}tn(e,Pe,ct);break;case 5:tn(e,Pe,ct);break;default:throw Error(N(329))}}}return _e(e,ee()),e.callbackNode===n?Rm.bind(null,e):null}function Ba(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Ua(t)),e}function Ua(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function n0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Xl,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Ju(e){if(O&6)throw Error(N(327));Hn();var t=us(e,0);if(!(t&1))return _e(e,ee()),null;var n=Ts(e,t);if(e.tag!==0&&n===2){var r=pa(e);r!==0&&(t=r,n=Ba(e,r))}if(n===1)throw n=ti,cn(e,0),Tt(e,t),_e(e,ee()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Pe,ct),_e(e,ee()),null}function Zl(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Zn=ee()+500,Hs&&Gt())}}function gn(e){_t!==null&&_t.tag===0&&!(O&6)&&Hn();var t=O;O|=1;var n=$e.transition,r=F;try{if($e.transition=null,F=1,e)return e()}finally{F=r,$e.transition=n,O=t,!(O&6)&&Gt()}}function Jl(){Me=Ln.current,W(Ln)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ay(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hs();break;case 3:Xn(),W(Te),W(we),Ul();break;case 5:Bl(r);break;case 4:Xn();break;case 13:W(K);break;case 19:W(K);break;case 10:Rl(r.type._context);break;case 22:case 23:Jl()}n=n.return}if(ce=e,te=e=Ot(e.current,null),fe=Me=t,se=0,ti=null,Xl=qs=hn=0,Pe=zr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}on=null}return e}function Vm(e,t){do{var n=te;try{if(Il(),Qi.current=Ss,ks){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ks=!1}if(mn=0,le=ie=Y=null,Mr=!1,Zr=0,ql.current=null,n===null||n.return===null){se=1,ti=t,te=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=fe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Fu(a);if(v!==null){v.flags&=-257,Bu(v,a,l,s,t),v.mode&1&&Ou(s,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){Ou(s,u,t),ec();break e}c=Error(N(426))}}else if(H&&l.mode&1){var j=Fu(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Bu(j,a,l,s,t),Ll(Qn(c,l));break e}}s=c=Qn(c,l),se!==4&&(se=2),zr===null?zr=[s]:zr.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=jm(s,c,t);zu(s,m);break e;case 1:l=c;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Rt===null||!Rt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=bm(s,l,t);zu(s,b);break e}}s=s.return}while(s!==null)}Bm(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Om(){var e=Ns.current;return Ns.current=Ss,e===null?Ss:e}function ec(){(se===0||se===3||se===2)&&(se=4),ce===null||!(hn&268435455)&&!(qs&268435455)||Tt(ce,fe)}function Ts(e,t){var n=O;O|=2;var r=Om();(ce!==e||fe!==t)&&(ct=null,cn(e,t));do try{r0();break}catch(i){Vm(e,i)}while(!0);if(Il(),O=n,Ns.current=r,te!==null)throw Error(N(261));return ce=null,fe=0,se}function r0(){for(;te!==null;)Fm(te)}function i0(){for(;te!==null&&!Ev();)Fm(te)}function Fm(e){var t=Wm(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Bm(e):te=t,ql.current=null}function Bm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qy(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,te=null;return}}else if(n=Xy(n,t,Me),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);se===0&&(se=5)}function tn(e,t,n){var r=F,i=$e.transition;try{$e.transition=null,F=1,s0(e,t,n,r)}finally{$e.transition=i,F=r}return null}function s0(e,t,n,r){do Hn();while(_t!==null);if(O&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ov(e,s),e===ce&&(te=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vi||(Vi=!0,$m(cs,function(){return Hn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$e.transition,$e.transition=null;var a=F;F=1;var l=O;O|=4,ql.current=null,Jy(e,n),Dm(n,e),Ny(xa),ds=!!ya,xa=ya=null,e.current=n,e0(n),_v(),O=l,F=a,$e.transition=s}else e.current=n;if(Vi&&(Vi=!1,_t=e,Cs=i),s=e.pendingLanes,s===0&&(Rt=null),zv(n.stateNode),_e(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ps)throw Ps=!1,e=Oa,Oa=null,e;return Cs&1&&e.tag!==0&&Hn(),s=e.pendingLanes,s&1?e===Fa?Lr++:(Lr=0,Fa=e):Lr=0,Gt(),null}function Hn(){if(_t!==null){var e=jp(Cs),t=$e.transition,n=F;try{if($e.transition=null,F=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,Cs=0,O&6)throw Error(N(331));var i=O;for(O|=4,E=e.current;E!==null;){var s=E,a=s.child;if(E.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:Ar(8,d,s)}var f=d.child;if(f!==null)f.return=d,E=f;else for(;E!==null;){d=E;var p=d.sibling,v=d.return;if(Am(d),d===u){E=null;break}if(p!==null){p.return=v,E=p;break}E=v}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}E=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,E=a;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ar(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,E=m;break e}E=s.return}}var h=e.current;for(E=h;E!==null;){a=E;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,E=g;else e:for(a=h;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ys(9,l)}}catch(k){Q(l,l.return,k)}if(l===a){E=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,E=b;break e}E=l.return}}if(O=i,Gt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Fs,e)}catch{}r=!0}return r}finally{F=n,$e.transition=t}}return!1}function ed(e,t,n){t=Qn(n,t),t=jm(e,t,1),e=It(e,t,1),t=ke(),e!==null&&(ui(e,1,t),_e(e,t))}function Q(e,t,n){if(e.tag===3)ed(e,e,n);else for(;t!==null;){if(t.tag===3){ed(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))){e=Qn(n,e),e=bm(t,e,1),t=It(t,e,1),e=ke(),t!==null&&(ui(t,1,e),_e(t,e));break}}t=t.return}}function o0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(se===4||se===3&&(fe&130023424)===fe&&500>ee()-Ql?cn(e,0):Xl|=n),_e(e,t)}function Um(e,t){t===0&&(e.mode&1?(t=Ti,Ti<<=1,!(Ti&130023424)&&(Ti=4194304)):t=1);var n=ke();e=yt(e,t),e!==null&&(ui(e,t,n),_e(e,n))}function a0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Um(e,n)}function l0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Um(e,n)}var Wm;Wm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,qy(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,H&&t.flags&1048576&&Gp(t,ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ji(e,t),e=t.pendingProps;var i=Gn(t,we.current);$n(t,n),i=$l(null,t,r,e,i,n);var s=Hl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(s=!0,gs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ol(t),i.updater=Gs,t.stateNode=i,i._reactInternals=t,Ta(t,r,e,n),t=Ma(null,t,r,!0,s,n)):(t.tag=0,H&&s&&Al(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=u0(r),e=qe(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=$u(null,t,r,e,n);break e;case 11:t=Uu(null,t,r,e,n);break e;case 14:t=Wu(null,t,r,qe(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),$u(e,t,r,i,n);case 3:e:{if(Pm(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Jp(e,t),js(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Qn(Error(N(423)),t),t=Hu(e,t,r,n,i);break e}else if(r!==i){i=Qn(Error(N(424)),t),t=Hu(e,t,r,n,i);break e}else for(Ae=Dt(t.stateNode.containerInfo.firstChild),ze=t,H=!0,Qe=null,n=Qp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===i){t=xt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return em(t),e===null&&Na(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,wa(r,i)?a=null:s!==null&&wa(r,s)&&(t.flags|=32),Nm(e,t),be(e,t,a,n),t.child;case 6:return e===null&&Na(t),null;case 13:return Cm(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Uu(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,B(xs,r._currentValue),r._currentValue=a,s!==null)if(et(s.value,a)){if(s.children===i.children&&!Te.current){t=xt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=pt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Pa(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(N(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Pa(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=He(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),Wu(e,t,r,i,n);case 15:return km(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Ji(e,t),t.tag=1,Ee(r)?(e=!0,gs(t)):e=!1,$n(t,n),wm(t,r,i),Ta(t,r,i,n),Ma(null,t,r,!0,e,n);case 19:return Tm(e,t,n);case 22:return Sm(e,t,n)}throw Error(N(156,t.tag))};function $m(e,t){return vp(e,t)}function c0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new c0(e,t,n,r)}function tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u0(e){if(typeof e=="function")return tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wl)return 11;if(e===jl)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ns(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")tc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Sn:return un(n.children,i,s,t);case xl:a=8,i|=8;break;case Zo:return e=We(12,n,t,i|2),e.elementType=Zo,e.lanes=s,e;case Jo:return e=We(13,n,t,i),e.elementType=Jo,e.lanes=s,e;case ea:return e=We(19,n,t,i),e.elementType=ea,e.lanes=s,e;case ep:return Xs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zf:a=10;break e;case Jf:a=9;break e;case wl:a=11;break e;case jl:a=14;break e;case Nt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=We(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function un(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Xs(e,t,n,r){return e=We(22,e,r,t),e.elementType=ep,e.lanes=n,e.stateNode={isHidden:!1},e}function Lo(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Do(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function d0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ho(0),this.expirationTimes=ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nc(e,t,n,r,i,s,a,l,c){return e=new d0(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=We(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(s),e}function f0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hm(e){if(!e)return Ut;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Hp(e,n,t)}return t}function Km(e,t,n,r,i,s,a,l,c){return e=nc(n,r,!0,e,i,s,a,l,c),e.context=Hm(null),n=e.current,r=ke(),i=Vt(n),s=pt(r,i),s.callback=t??null,It(n,s,i),e.current.lanes=i,ui(e,i,r),_e(e,r),e}function Qs(e,t,n,r){var i=t.current,s=ke(),a=Vt(i);return n=Hm(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(i,t,a),e!==null&&(Je(e,i,a,s),Xi(e,i,a)),a}function Es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rc(e,t){td(e,t),(e=e.alternate)&&td(e,t)}function p0(){return null}var Gm=typeof reportError=="function"?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}Zs.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Qs(e,t,null,null)};Zs.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){Qs(null,e,null,null)}),t[vt]=null}};function Zs(e){this._internalRoot=e}Zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Pp(e)}};function sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function m0(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Es(a);s.call(u)}}var a=Km(t,r,e,0,null,!1,!1,"",nd);return e._reactRootContainer=a,e[vt]=a.current,Gr(e.nodeType===8?e.parentNode:e),gn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Es(c);l.call(u)}}var c=nc(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=c,e[vt]=c.current,Gr(e.nodeType===8?e.parentNode:e),gn(function(){Qs(t,c,n,r)}),c}function eo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Es(a);l.call(c)}}Qs(t,a,e,i)}else a=m0(n,t,e,i,r);return Es(a)}bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jr(t.pendingLanes);n!==0&&(Sl(t,n|1),_e(t,ee()),!(O&6)&&(Zn=ee()+500,Gt()))}break;case 13:gn(function(){var r=yt(e,1);if(r!==null){var i=ke();Je(r,e,1,i)}}),rc(e,1)}};Nl=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=ke();Je(t,e,134217728,n)}rc(e,134217728)}};kp=function(e){if(e.tag===13){var t=Vt(e),n=yt(e,t);if(n!==null){var r=ke();Je(n,e,t,r)}rc(e,t)}};Sp=function(){return F};Np=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ua=function(e,t,n){switch(t){case"input":if(ra(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$s(r);if(!i)throw Error(N(90));np(r),ra(r,i)}}}break;case"textarea":ip(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};dp=Zl;fp=gn;var h0={usingClientEntryPoint:!1,Events:[fi,Tn,$s,cp,up,Zl]},vr={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g0={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hp(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||p0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Fs=Oi.inject(g0),st=Oi}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(t))throw Error(N(200));return f0(e,t,null,n)};Re.createRoot=function(e,t){if(!sc(e))throw Error(N(299));var n=!1,r="",i=Gm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nc(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new ic(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=hp(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return gn(e)};Re.hydrate=function(e,t,n){if(!Js(t))throw Error(N(200));return eo(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!sc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Gm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Km(t,null,e,1,n??null,i,!1,s,a),e[vt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zs(t)};Re.render=function(e,t,n){if(!Js(t))throw Error(N(200));return eo(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Js(e))throw Error(N(40));return e._reactRootContainer?(gn(function(){eo(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Re.unstable_batchedUpdates=Zl;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Js(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return eo(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ym)}catch(e){console.error(e)}}Ym(),Yf.exports=Re;var v0=Yf.exports,rd=v0;Xo.createRoot=rd.createRoot,Xo.hydrateRoot=rd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const id="popstate";function y0(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return Wa("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_s(i)}return w0(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function oc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function x0(){return Math.random().toString(36).substr(2,8)}function sd(e,t){return{usr:e.state,key:e.key,idx:t}}function Wa(e,t,n,r){return n===void 0&&(n=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?or(t):t,{state:n,key:t&&t.key||r||x0()})}function _s(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function or(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function w0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Mt.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ni({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=Mt.Pop;let j=d(),m=j==null?null:j-u;u=j,c&&c({action:l,location:x.location,delta:m})}function p(j,m){l=Mt.Push;let h=Wa(x.location,j,m);u=d()+1;let g=sd(h,u),b=x.createHref(h);try{a.pushState(g,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(b)}s&&c&&c({action:l,location:x.location,delta:1})}function v(j,m){l=Mt.Replace;let h=Wa(x.location,j,m);u=d();let g=sd(h,u),b=x.createHref(h);a.replaceState(g,"",b),s&&c&&c({action:l,location:x.location,delta:0})}function y(j){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof j=="string"?j:_s(j);return h=h.replace(/ $/,"%20"),ne(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let x={get action(){return l},get location(){return e(i,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(id,f),c=j,()=>{i.removeEventListener(id,f),c=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let m=y(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:v,go(j){return a.go(j)}};return x}var od;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(od||(od={}));function j0(e,t,n){return n===void 0&&(n="/"),b0(e,t,n)}function b0(e,t,n,r){let i=typeof t=="string"?or(t):t,s=ac(i.pathname||"/",n);if(s==null)return null;let a=qm(e);k0(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=D0(s);l=A0(a[c],u)}return l}function qm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(ne(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ft([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qm(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:_0(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of Xm(s.path))i(s,a,c)}),t}function Xm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Xm(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function k0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:M0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S0=/^:[\w-]+$/,N0=3,P0=2,C0=1,T0=10,E0=-2,ad=e=>e==="*";function _0(e,t){let n=e.split("/"),r=n.length;return n.some(ad)&&(r+=E0),t&&(r+=P0),n.filter(i=>!ad(i)).reduce((i,s)=>i+(S0.test(s)?N0:s===""?C0:T0),r)}function M0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function A0(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=z0({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Ft([s,f.pathname]),pathnameBase:F0(Ft([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ft([s,f.pathnameBase]))}return a}function z0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let x=l[f]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[f];return v&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function L0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),oc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function D0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return oc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ac(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R0=e=>I0.test(e);function V0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?or(e):e,s;if(n)if(R0(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),oc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=ld(n.substring(1),"/"):s=ld(n,t)}else s=t;return{pathname:s,search:B0(r),hash:U0(i)}}function ld(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Io(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function O0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qm(e,t){let n=O0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=or(e):(i=ni({},e),ne(!i.pathname||!i.pathname.includes("?"),Io("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Io("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Io("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=V0(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),F0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function W0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jm=["post","put","patch","delete"];new Set(Jm);const $0=["get",...Jm];new Set($0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(this,arguments)}const lc=w.createContext(null),H0=w.createContext(null),xn=w.createContext(null),to=w.createContext(null),Yt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),eh=w.createContext(null);function K0(e,t){let{relative:n}=t===void 0?{}:t;mi()||ne(!1);let{basename:r,navigator:i}=w.useContext(xn),{hash:s,pathname:a,search:l}=nh(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Ft([r,a])),i.createHref({pathname:c,search:l,hash:s})}function mi(){return w.useContext(to)!=null}function wn(){return mi()||ne(!1),w.useContext(to).location}function th(e){w.useContext(xn).static||w.useLayoutEffect(e)}function cc(){let{isDataRoute:e}=w.useContext(Yt);return e?ox():G0()}function G0(){mi()||ne(!1);let e=w.useContext(lc),{basename:t,future:n,navigator:r}=w.useContext(xn),{matches:i}=w.useContext(Yt),{pathname:s}=wn(),a=JSON.stringify(Qm(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return th(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Zm(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ft([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,s,e])}function Y0(){let{matches:e}=w.useContext(Yt),t=e[e.length-1];return t?t.params:{}}function nh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(xn),{matches:i}=w.useContext(Yt),{pathname:s}=wn(),a=JSON.stringify(Qm(i,r.v7_relativeSplatPath));return w.useMemo(()=>Zm(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function q0(e,t){return X0(e,t)}function X0(e,t,n,r){mi()||ne(!1);let{navigator:i}=w.useContext(xn),{matches:s}=w.useContext(Yt),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=wn(),d;if(t){var f;let j=typeof t=="string"?or(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||ne(!1),d=j}else d=u;let p=d.pathname||"/",v=p;if(c!=="/"){let j=c.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=j0(e,{pathname:v}),x=tx(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Ft([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Ft([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,r);return t&&x?w.createElement(to.Provider,{value:{location:ri({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mt.Pop}},x):x}function Q0(){let e=sx(),t=W0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const Z0=w.createElement(Q0,null);class J0 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Yt.Provider,{value:this.props.routeContext},w.createElement(eh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ex(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(lc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Yt.Provider,{value:t},r)}function tx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ne(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:v}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let v,y=!1,x=null,j=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||Z0,c&&(u<0&&p===0?(ax("route-fallback"),y=!0,j=null):u===p&&(y=!0,j=f.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,p+1)),h=()=>{let g;return v?g=x:y?g=j:f.route.Component?g=w.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,w.createElement(ex,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?w.createElement(J0,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var rh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rh||{}),ih=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ih||{});function nx(e){let t=w.useContext(lc);return t||ne(!1),t}function rx(e){let t=w.useContext(H0);return t||ne(!1),t}function ix(e){let t=w.useContext(Yt);return t||ne(!1),t}function sh(e){let t=ix(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function sx(){var e;let t=w.useContext(eh),n=rx(),r=sh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ox(){let{router:e}=nx(rh.UseNavigateStable),t=sh(ih.UseNavigateStable),n=w.useRef(!1);return th(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ri({fromRouteId:t},s)))},[e,t])}const cd={};function ax(e,t,n){cd[e]||(cd[e]=!0)}function lx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function je(e){ne(!1)}function cx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mt.Pop,navigator:s,static:a=!1,future:l}=e;mi()&&ne(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:s,static:a,future:ri({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=or(r));let{pathname:d="/",search:f="",hash:p="",state:v=null,key:y="default"}=r,x=w.useMemo(()=>{let j=ac(d,c);return j==null?null:{location:{pathname:j,search:f,hash:p,state:v,key:y},navigationType:i}},[c,d,f,p,v,y,i]);return x==null?null:w.createElement(xn.Provider,{value:u},w.createElement(to.Provider,{children:n,value:x}))}function oh(e){let{children:t,location:n}=e;return q0($a(t),n)}new Promise(()=>{});function $a(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,$a(r.props.children,s));return}r.type!==je&&ne(!1),!r.props.index||!r.props.children||ne(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=$a(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ha.apply(this,arguments)}function ux(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fx(e,t){return e.button===0&&(!t||t==="_self")&&!dx(e)}const px=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mx="6";try{window.__reactRouterVersion=mx}catch{}const hx="startTransition",ud=ov[hx];function gx(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=y0({window:i,v5Compat:!0}));let a=s.current,[l,c]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=w.useCallback(f=>{u&&ud?ud(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>a.listen(d),[a,d]),w.useEffect(()=>lx(r),[r]),w.createElement(cx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const vx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=ux(t,px),{basename:v}=w.useContext(xn),y,x=!1;if(typeof u=="string"&&yx.test(u)&&(y=u,vx))try{let g=new URL(window.location.href),b=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=ac(b.pathname,v);b.origin===g.origin&&k!=null?u=k+b.search+b.hash:x=!0}catch{}let j=K0(u,{relative:i}),m=xx(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function h(g){r&&r(g),g.defaultPrevented||m(g)}return w.createElement("a",Ha({},p,{href:y||j,onClick:x||s?r:h,ref:n,target:c}))});var dd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dd||(dd={}));var fd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fd||(fd={}));function xx(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:l}=t===void 0?{}:t,c=cc(),u=wn(),d=nh(e,{relative:a});return w.useCallback(f=>{if(fx(f,n)){f.preventDefault();let p=r!==void 0?r:_s(u)===_s(d);c(e,{replace:p,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,s,a,l])}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_=(e,t)=>{const n=w.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>w.createElement("svg",{ref:d,...wx,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${jx(e)}`,l].join(" "),...u},[...t.map(([f,p])=>w.createElement(f,p)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=_("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=_("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=_("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=_("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=_("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=_("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=_("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=_("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=_("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=_("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=_("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=_("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=_("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=_("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=_("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=_("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=_("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=_("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=_("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=_("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=_("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=_("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=_("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=_("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=_("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=_("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=_("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=_("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=_("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=_("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=_("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=_("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=_("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=_("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=_("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=_("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=_("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=_("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=_("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=_("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=_("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=_("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=_("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=_("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=_("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=_("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=_("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=_("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=_("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=_("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=_("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=_("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=_("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=_("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=_("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=_("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=_("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),mc=w.createContext({});function hc(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const no=w.createContext(null),gc=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class i1 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function s1({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=w.useContext(gc);return w.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:u}=i.current;if(t||!r.current||!a||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),o.jsx(i1,{isPresent:t,childRef:r,sizeRef:i,children:w.cloneElement(e,{ref:r})})}const o1=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:a})=>{const l=hc(a1),c=w.useId(),u=w.useCallback(f=>{l.set(f,!0);for(const p of l.values())if(!p)return;r&&r()},[l,r]),d=w.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(l.set(f,!1),()=>l.delete(f))}),s?[Math.random(),u]:[n,u]);return w.useMemo(()=>{l.forEach((f,p)=>l.set(p,!1))},[n]),w.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=o.jsx(s1,{isPresent:n,children:e})),o.jsx(no.Provider,{value:d,children:e})};function a1(){return new Map}function fh(e=!0){const t=w.useContext(no);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=w.useId();w.useEffect(()=>{e&&i(s)},[e]);const a=w.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const Bi=e=>e.key||"";function xd(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const vc=typeof window<"u",ph=vc?w.useLayoutEffect:w.useEffect,Ya=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:a=!1})=>{const[l,c]=fh(a),u=w.useMemo(()=>xd(e),[e]),d=a&&!l?[]:u.map(Bi),f=w.useRef(!0),p=w.useRef(u),v=hc(()=>new Map),[y,x]=w.useState(u),[j,m]=w.useState(u);ph(()=>{f.current=!1,p.current=u;for(let b=0;b<j.length;b++){const k=Bi(j[b]);d.includes(k)?v.delete(k):v.get(k)!==!0&&v.set(k,!1)}},[j,d.length,d.join("-")]);const h=[];if(u!==y){let b=[...u];for(let k=0;k<j.length;k++){const P=j[k],C=Bi(P);d.includes(C)||(b.splice(k,0,P),h.push(P))}s==="wait"&&h.length&&(b=h),m(xd(b)),x(u);return}const{forceRender:g}=w.useContext(mc);return o.jsx(o.Fragment,{children:j.map(b=>{const k=Bi(b),P=a&&!l?!1:u===j||d.includes(k),C=()=>{if(v.has(k))v.set(k,!0);else return;let S=!0;v.forEach(I=>{I||(S=!1)}),S&&(g==null||g(),m(p.current),a&&(c==null||c()),r&&r())};return o.jsx(o1,{isPresent:P,initial:!f.current||n?void 0:!1,custom:P?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:P?void 0:C,children:b},k)})})},Le=e=>e;let mh=Le;function yc(e){let t;return()=>(t===void 0&&(t=e()),t)}const er=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},mt=e=>e*1e3,ht=e=>e/1e3,l1={useManualTiming:!1};function c1(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){s.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const v=f&&r?t:n;return d&&s.add(u),v.has(u)||v.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const Ui=["read","resolveKeyframes","update","preRender","render","postRender"],u1=40;function hh(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=Ui.reduce((m,h)=>(m[h]=c1(s),m),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:p}=a,v=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,u1),1),i.timestamp=m,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},y=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Ui.reduce((m,h)=>{const g=a[h];return m[h]=(b,k=!1,P=!1)=>(n||y(),g.schedule(b,k,P)),m},{}),cancel:m=>{for(let h=0;h<Ui.length;h++)a[Ui[h]].cancel(m)},state:i,steps:a}}const{schedule:$,cancel:Wt,state:de,steps:Ro}=hh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0),gh=w.createContext({strict:!1}),wd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},tr={};for(const e in wd)tr[e]={isEnabled:t=>wd[e].some(n=>!!t[n])};function d1(e){for(const t in e)tr[t]={...tr[t],...e[t]}}const f1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function As(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||f1.has(e)}let vh=e=>!As(e);function p1(e){e&&(vh=t=>t.startsWith("on")?!As(t):e(t))}try{p1(require("@emotion/is-prop-valid").default)}catch{}function m1(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(vh(i)||n===!0&&As(i)||!t&&!As(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function h1(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const ro=w.createContext({});function ii(e){return typeof e=="string"||Array.isArray(e)}function io(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const xc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wc=["initial",...xc];function so(e){return io(e.animate)||wc.some(t=>ii(e[t]))}function yh(e){return!!(so(e)||e.variants)}function g1(e,t){if(so(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ii(n)?n:void 0,animate:ii(r)?r:void 0}}return e.inherit!==!1?t:{}}function v1(e){const{initial:t,animate:n}=g1(e,w.useContext(ro));return w.useMemo(()=>({initial:t,animate:n}),[jd(t),jd(n)])}function jd(e){return Array.isArray(e)?e.join(" "):e}const y1=Symbol.for("motionComponentSymbol");function Dn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function x1(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Dn(n)&&(n.current=r))},[t])}const jc=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),w1="framerAppearId",xh="data-"+jc(w1),{schedule:bc}=hh(queueMicrotask,!1),wh=w.createContext({});function j1(e,t,n,r,i){var s,a;const{visualElement:l}=w.useContext(ro),c=w.useContext(gh),u=w.useContext(no),d=w.useContext(gc).reducedMotion,f=w.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,v=w.useContext(wh);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&b1(f.current,n,i,v);const y=w.useRef(!1);w.useInsertionEffect(()=>{p&&y.current&&p.update(n,u)});const x=n[xh],j=w.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,x)));return ph(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),bc.render(p.render),j.current&&p.animationState&&p.animationState.animateChanges())}),w.useEffect(()=>{p&&(!j.current&&p.animationState&&p.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,x)}),j.current=!1))}),p}function b1(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:jh(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||l&&Dn(l),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function jh(e){if(e)return e.options.allowProjection!==!1?e.projection:jh(e.parent)}function k1({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,a;e&&d1(e);function l(u,d){let f;const p={...w.useContext(gc),...u,layoutId:S1(u)},{isStatic:v}=p,y=v1(u),x=r(u,v);if(!v&&vc){N1();const j=P1(p);f=j.MeasureLayout,y.visualElement=j1(i,x,p,t,j.ProjectionNode)}return o.jsxs(ro.Provider,{value:y,children:[f&&y.visualElement?o.jsx(f,{visualElement:y.visualElement,...p}):null,n(i,u,x1(x,y.visualElement,d),x,v,y.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(a=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&a!==void 0?a:""})`}`;const c=w.forwardRef(l);return c[y1]=i,c}function S1({layoutId:e}){const t=w.useContext(mc).id;return t&&e!==void 0?t+"-"+e:e}function N1(e,t){w.useContext(gh).strict}function P1(e){const{drag:t,layout:n}=tr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const C1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kc(e){return typeof e!="string"||e.includes("-")?!1:!!(C1.indexOf(e)>-1||/[A-Z]/u.test(e))}function bd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Sc(e,t,n,r){if(typeof t=="function"){const[i,s]=bd(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=bd(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const qa=e=>Array.isArray(e),T1=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),E1=e=>qa(e)?e[e.length-1]||0:e,xe=e=>!!(e&&e.getVelocity);function rs(e){const t=xe(e)?e.get():e;return T1(t)?t.toValue():t}function _1({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const a={latestValues:M1(r,i,s,e),renderState:t()};return n&&(a.onMount=l=>n({props:r,current:l,...a}),a.onUpdate=l=>n(l)),a}const bh=e=>(t,n)=>{const r=w.useContext(ro),i=w.useContext(no),s=()=>_1(e,t,r,i);return n?s():hc(s)};function M1(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=rs(s[p]);let{initial:a,animate:l}=e;const c=so(e),u=yh(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?l:a;if(f&&typeof f!="boolean"&&!io(f)){const p=Array.isArray(f)?f:[f];for(let v=0;v<p.length;v++){const y=Sc(e,p[v]);if(y){const{transitionEnd:x,transition:j,...m}=y;for(const h in m){let g=m[h];if(Array.isArray(g)){const b=d?g.length-1:0;g=g[b]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}}}return i}const ar=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jn=new Set(ar),kh=e=>t=>typeof t=="string"&&t.startsWith(e),Sh=kh("--"),A1=kh("var(--"),Nc=e=>A1(e)?z1.test(e.split("/*")[0].trim()):!1,z1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Nh=(e,t)=>t&&typeof e=="number"?t.transform(e):e,wt=(e,t,n)=>n>t?t:n<e?e:n,lr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},si={...lr,transform:e=>wt(0,1,e)},Wi={...lr,default:1},hi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),St=hi("deg"),at=hi("%"),M=hi("px"),L1=hi("vh"),D1=hi("vw"),kd={...at,parse:e=>at.parse(e)/100,transform:e=>at.transform(e*100)},I1={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,radius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,backgroundPositionX:M,backgroundPositionY:M},R1={rotate:St,rotateX:St,rotateY:St,rotateZ:St,scale:Wi,scaleX:Wi,scaleY:Wi,scaleZ:Wi,skew:St,skewX:St,skewY:St,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:si,originX:kd,originY:kd,originZ:M},Sd={...lr,transform:Math.round},Pc={...I1,...R1,zIndex:Sd,size:M,fillOpacity:si,strokeOpacity:si,numOctaves:Sd},V1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},O1=ar.length;function F1(e,t,n){let r="",i=!0;for(let s=0;s<O1;s++){const a=ar[s],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(a.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=Nh(l,Pc[a]);if(!c){i=!1;const d=V1[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Cc(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(jn.has(c)){a=!0;continue}else if(Sh(c)){i[c]=u;continue}else{const d=Nh(u,Pc[c]);c.startsWith("origin")?(l=!0,s[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=F1(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${c} ${u} ${d}`}}const B1={offset:"stroke-dashoffset",array:"stroke-dasharray"},U1={offset:"strokeDashoffset",array:"strokeDasharray"};function W1(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?B1:U1;e[s.offset]=M.transform(-r);const a=M.transform(t),l=M.transform(n);e[s.array]=`${a} ${l}`}function Nd(e,t,n){return typeof e=="string"?e:M.transform(t+n*e)}function $1(e,t,n){const r=Nd(t,e.x,e.width),i=Nd(n,e.y,e.height);return`${r} ${i}`}function Tc(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:l=1,pathOffset:c=0,...u},d,f){if(Cc(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:y}=e;p.transform&&(y&&(v.transform=p.transform),delete p.transform),y&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=$1(y,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),a!==void 0&&W1(p,a,l,c,!1)}const Ec=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ph=()=>({...Ec(),attrs:{}}),_c=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Ch(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Th=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Eh(e,t,n,r){Ch(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Th.has(i)?i:jc(i),t.attrs[i])}const zs={};function H1(e){Object.assign(zs,e)}function _h(e,{layout:t,layoutId:n}){return jn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!zs[e]||e==="opacity")}function Mc(e,t,n){var r;const{style:i}=e,s={};for(const a in i)(xe(i[a])||t.style&&xe(t.style[a])||_h(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function Mh(e,t,n){const r=Mc(e,t,n);for(const i in e)if(xe(e[i])||xe(t[i])){const s=ar.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function K1(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Pd=["x","y","width","height","cx","cy","r"],G1={useVisualState:bh({scrapeMotionValuesFromProps:Mh,createRenderState:Ph,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const l in i)if(jn.has(l)){s=!0;break}}if(!s)return;let a=!t;if(t)for(let l=0;l<Pd.length;l++){const c=Pd[l];e[c]!==t[c]&&(a=!0)}a&&$.read(()=>{K1(n,r),$.render(()=>{Tc(r,i,_c(n.tagName),e.transformTemplate),Eh(n,r)})})}})},Y1={useVisualState:bh({scrapeMotionValuesFromProps:Mc,createRenderState:Ec})};function Ah(e,t,n){for(const r in t)!xe(t[r])&&!_h(r,n)&&(e[r]=t[r])}function q1({transformTemplate:e},t){return w.useMemo(()=>{const n=Ec();return Cc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function X1(e,t){const n=e.style||{},r={};return Ah(r,n,e),Object.assign(r,q1(e,t)),r}function Q1(e,t){const n={},r=X1(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function Z1(e,t,n,r){const i=w.useMemo(()=>{const s=Ph();return Tc(s,t,_c(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Ah(s,e.style,e),i.style={...s,...i.style}}return i}function J1(e=!1){return(n,r,i,{latestValues:s},a)=>{const c=(kc(n)?Z1:Q1)(r,s,a,n),u=m1(r,typeof n=="string",e),d=n!==w.Fragment?{...u,...c,ref:i}:{},{children:f}=r,p=w.useMemo(()=>xe(f)?f.get():f,[f]);return w.createElement(n,{...d,children:p})}}function ew(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...kc(r)?G1:Y1,preloadedFeatures:e,useRender:J1(i),createVisualElement:t,Component:r};return k1(a)}}function zh(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function oo(e,t,n){const r=e.getProps();return Sc(r,t,n!==void 0?n:r.custom,e)}const tw=yc(()=>window.ScrollTimeline!==void 0);class nw{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(tw()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class rw extends nw{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Ac(e,t){return e?e[t]||e.default||e:void 0}const Xa=2e4;function Lh(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xa;)t+=n,r=e.next(t);return t>=Xa?1/0:t}function zc(e){return typeof e=="function"}function Cd(e,t){e.timeline=t,e.onfinish=null}const Lc=e=>Array.isArray(e)&&typeof e[0]=="number",iw={linearEasing:void 0};function sw(e,t){const n=yc(e);return()=>{var r;return(r=iw[t])!==null&&r!==void 0?r:n()}}const Ls=sw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Dh=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(er(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function Ih(e){return!!(typeof e=="function"&&Ls()||!e||typeof e=="string"&&(e in Qa||Ls())||Lc(e)||Array.isArray(e)&&e.every(Ih))}const kr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Qa={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:kr([0,.65,.55,1]),circOut:kr([.55,0,1,.45]),backIn:kr([.31,.01,.66,-.59]),backOut:kr([.33,1.53,.69,.99])};function Rh(e,t){if(e)return typeof e=="function"&&Ls()?Dh(e,t):Lc(e)?kr(e):Array.isArray(e)?e.map(n=>Rh(n,t)||Qa.easeOut):Qa[e]}const Ye={x:!1,y:!1};function Vh(){return Ye.x||Ye.y}function ow(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Oh(e,t){const n=ow(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Td(e){return t=>{t.pointerType==="touch"||Vh()||e(t)}}function aw(e,t,n={}){const[r,i,s]=Oh(e,n),a=Td(l=>{const{target:c}=l,u=t(l);if(typeof u!="function"||!c)return;const d=Td(f=>{u(f),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(l=>{l.addEventListener("pointerenter",a,i)}),s}const Fh=(e,t)=>t?e===t?!0:Fh(e,t.parentElement):!1,Dc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,lw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function cw(e){return lw.has(e.tagName)||e.tabIndex!==-1}const Sr=new WeakSet;function Ed(e){return t=>{t.key==="Enter"&&e(t)}}function Vo(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const uw=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Ed(()=>{if(Sr.has(n))return;Vo(n,"down");const i=Ed(()=>{Vo(n,"up")}),s=()=>Vo(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function _d(e){return Dc(e)&&!Vh()}function dw(e,t,n={}){const[r,i,s]=Oh(e,n),a=l=>{const c=l.currentTarget;if(!_d(l)||Sr.has(c))return;Sr.add(c);const u=t(l),d=(v,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!_d(v)||!Sr.has(c))&&(Sr.delete(c),typeof u=="function"&&u(v,{success:y}))},f=v=>{d(v,n.useGlobalTarget||Fh(c,v.target))},p=v=>{d(v,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(l=>{!cw(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,i),l.addEventListener("focus",u=>uw(u,i),i)}),s}function fw(e){return e==="x"||e==="y"?Ye[e]?null:(Ye[e]=!0,()=>{Ye[e]=!1}):Ye.x||Ye.y?null:(Ye.x=Ye.y=!0,()=>{Ye.x=Ye.y=!1})}const Bh=new Set(["width","height","top","left","right","bottom",...ar]);let is;function pw(){is=void 0}const lt={now:()=>(is===void 0&&lt.set(de.isProcessing||l1.useManualTiming?de.timestamp:performance.now()),is),set:e=>{is=e,queueMicrotask(pw)}};function Ic(e,t){e.indexOf(t)===-1&&e.push(t)}function Rc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Vc{constructor(){this.subscriptions=[]}add(t){return Ic(this.subscriptions,t),()=>Rc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Uh(e,t){return t?e*(1e3/t):0}const Md=30,mw=e=>!isNaN(parseFloat(e));class hw{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=lt.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=lt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=mw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Vc);const r=this.events[t].add(n);return t==="change"?()=>{r(),$.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Md)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Md);return Uh(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function oi(e,t){return new hw(e,t)}function gw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,oi(n))}function vw(e,t){const n=oo(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const l=E1(s[a]);gw(e,a,l)}}function yw(e){return!!(xe(e)&&e.add)}function Za(e,t){const n=e.getValue("willChange");if(yw(n))return n.add(t)}function Wh(e){return e.props[xh]}const $h=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,xw=1e-7,ww=12;function jw(e,t,n,r,i){let s,a,l=0;do a=t+(n-t)/2,s=$h(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>xw&&++l<ww);return a}function gi(e,t,n,r){if(e===t&&n===r)return Le;const i=s=>jw(s,0,1,e,n);return s=>s===0||s===1?s:$h(i(s),t,r)}const Hh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Kh=e=>t=>1-e(1-t),Gh=gi(.33,1.53,.69,.99),Oc=Kh(Gh),Yh=Hh(Oc),qh=e=>(e*=2)<1?.5*Oc(e):.5*(2-Math.pow(2,-10*(e-1))),Fc=e=>1-Math.sin(Math.acos(e)),Xh=Kh(Fc),Qh=Hh(Fc),Zh=e=>/^0[^.\s]+$/u.test(e);function bw(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Zh(e):!0}const Dr=e=>Math.round(e*1e5)/1e5,Bc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function kw(e){return e==null}const Sw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Uc=(e,t)=>n=>!!(typeof n=="string"&&Sw.test(n)&&n.startsWith(e)||t&&!kw(n)&&Object.prototype.hasOwnProperty.call(n,t)),Jh=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,l]=r.match(Bc);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},Nw=e=>wt(0,255,e),Oo={...lr,transform:e=>Math.round(Nw(e))},ln={test:Uc("rgb","red"),parse:Jh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Oo.transform(e)+", "+Oo.transform(t)+", "+Oo.transform(n)+", "+Dr(si.transform(r))+")"};function Pw(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ja={test:Uc("#"),parse:Pw,transform:ln.transform},In={test:Uc("hsl","hue"),parse:Jh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+at.transform(Dr(t))+", "+at.transform(Dr(n))+", "+Dr(si.transform(r))+")"},ge={test:e=>ln.test(e)||Ja.test(e)||In.test(e),parse:e=>ln.test(e)?ln.parse(e):In.test(e)?In.parse(e):Ja.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ln.transform(e):In.transform(e)},Cw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Tw(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Bc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Cw))===null||n===void 0?void 0:n.length)||0)>0}const eg="number",tg="color",Ew="var",_w="var(",Ad="${}",Mw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ai(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=t.replace(Mw,c=>(ge.test(c)?(r.color.push(s),i.push(tg),n.push(ge.parse(c))):c.startsWith(_w)?(r.var.push(s),i.push(Ew),n.push(c)):(r.number.push(s),i.push(eg),n.push(parseFloat(c))),++s,Ad)).split(Ad);return{values:n,split:l,indexes:r,types:i}}function ng(e){return ai(e).values}function rg(e){const{split:t,types:n}=ai(e),r=t.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=t[a],i[a]!==void 0){const l=n[a];l===eg?s+=Dr(i[a]):l===tg?s+=ge.transform(i[a]):s+=i[a]}return s}}const Aw=e=>typeof e=="number"?0:e;function zw(e){const t=ng(e);return rg(e)(t.map(Aw))}const $t={test:Tw,parse:ng,createTransformer:rg,getAnimatableNone:zw},Lw=new Set(["brightness","contrast","saturate","opacity"]);function Dw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Bc)||[];if(!r)return e;const i=n.replace(r,"");let s=Lw.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Iw=/\b([a-z-]*)\(.*?\)/gu,el={...$t,getAnimatableNone:e=>{const t=e.match(Iw);return t?t.map(Dw).join(" "):e}},Rw={...Pc,color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,filter:el,WebkitFilter:el},Wc=e=>Rw[e];function ig(e,t){let n=Wc(e);return n!==el&&(n=$t),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Vw=new Set(["auto","none","0"]);function Ow(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!Vw.has(s)&&ai(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=ig(n,i)}const zd=e=>e===lr||e===M,Ld=(e,t)=>parseFloat(e.split(", ")[t]),Dd=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Ld(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Ld(s[1],e):0}},Fw=new Set(["x","y","z"]),Bw=ar.filter(e=>!Fw.has(e));function Uw(e){const t=[];return Bw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const nr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Dd(4,13),y:Dd(5,14)};nr.translateX=nr.x;nr.translateY=nr.y;const dn=new Set;let tl=!1,nl=!1;function sg(){if(nl){const e=Array.from(dn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Uw(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var l;(l=r.getValue(s))===null||l===void 0||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}nl=!1,tl=!1,dn.forEach(e=>e.complete()),dn.clear()}function og(){dn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(nl=!0)})}function Ww(){og(),sg()}class $c{constructor(t,n,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(dn.add(this),tl||(tl=!0,$.read(og),$.resolveKeyframes(sg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const a=i==null?void 0:i.get(),l=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&a===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),dn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,dn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ag=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),$w=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Hw(e){const t=$w.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function lg(e,t,n=1){const[r,i]=Hw(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return ag(a)?parseFloat(a):a}return Nc(i)?lg(i,t,n+1):i}const cg=e=>t=>t.test(e),Kw={test:e=>e==="auto",parse:e=>e},ug=[lr,M,at,St,D1,L1,Kw],Id=e=>ug.find(cg(e));class dg extends $c{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Nc(u))){const d=lg(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Bh.has(r)||t.length!==2)return;const[i,s]=t,a=Id(i),l=Id(s);if(a!==l)if(zd(a)&&zd(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)bw(t[i])&&r.push(i);r.length&&Ow(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=nr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,l=i[a];i[a]=nr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Rd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($t.test(e)||e==="0")&&!e.startsWith("url("));function Gw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Yw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=Rd(i,t),l=Rd(s,t);return!a||!l?!1:Gw(e)||(n==="spring"||zc(n))&&r}const qw=e=>e!==null;function ao(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(qw),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const Xw=40;class fg{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=lt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Xw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Ww(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=lt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!Yw(t,r,i,s))if(a)this.options.duration=0;else{c&&c(ao(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const G=(e,t,n)=>e+(t-e)*n;function Fo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Qw({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Fo(c,l,e+1/3),s=Fo(c,l,e),a=Fo(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function Ds(e,t){return n=>n>0?t:e}const Bo=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Zw=[Ja,ln,In],Jw=e=>Zw.find(t=>t.test(e));function Vd(e){const t=Jw(e);if(!t)return!1;let n=t.parse(e);return t===In&&(n=Qw(n)),n}const Od=(e,t)=>{const n=Vd(e),r=Vd(t);if(!n||!r)return Ds(e,t);const i={...n};return s=>(i.red=Bo(n.red,r.red,s),i.green=Bo(n.green,r.green,s),i.blue=Bo(n.blue,r.blue,s),i.alpha=G(n.alpha,r.alpha,s),ln.transform(i))},e2=(e,t)=>n=>t(e(n)),vi=(...e)=>e.reduce(e2),rl=new Set(["none","hidden"]);function t2(e,t){return rl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function n2(e,t){return n=>G(e,t,n)}function Hc(e){return typeof e=="number"?n2:typeof e=="string"?Nc(e)?Ds:ge.test(e)?Od:s2:Array.isArray(e)?pg:typeof e=="object"?ge.test(e)?Od:r2:Ds}function pg(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>Hc(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function r2(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Hc(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function i2(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const a=t.types[s],l=e.indexes[a][i[a]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[s]=c,i[a]++}return r}const s2=(e,t)=>{const n=$t.createTransformer(t),r=ai(e),i=ai(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?rl.has(e)&&!i.values.length||rl.has(t)&&!r.values.length?t2(e,t):vi(pg(i2(r,i),i.values),n):Ds(e,t)};function mg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?G(e,t,n):Hc(e)(e,t)}const o2=5;function hg(e,t,n){const r=Math.max(t-o2,0);return Uh(n-e(r),t-r)}const X={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Uo=.001;function a2({duration:e=X.duration,bounce:t=X.bounce,velocity:n=X.velocity,mass:r=X.mass}){let i,s,a=1-t;a=wt(X.minDamping,X.maxDamping,a),e=wt(X.minDuration,X.maxDuration,ht(e)),a<1?(i=u=>{const d=u*a,f=d*e,p=d-n,v=il(u,a),y=Math.exp(-f);return Uo-p/v*y},s=u=>{const f=u*a*e,p=f*n+n,v=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-f),x=il(Math.pow(u,2),a);return(-i(u)+Uo>0?-1:1)*((p-v)*y)/x}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Uo+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=c2(i,s,l);if(e=mt(e),isNaN(c))return{stiffness:X.stiffness,damping:X.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const l2=12;function c2(e,t,n){let r=n;for(let i=1;i<l2;i++)r=r-e(r)/t(r);return r}function il(e,t){return e*Math.sqrt(1-t*t)}const u2=["duration","bounce"],d2=["stiffness","damping","mass"];function Fd(e,t){return t.some(n=>e[n]!==void 0)}function f2(e){let t={velocity:X.velocity,stiffness:X.stiffness,damping:X.damping,mass:X.mass,isResolvedFromDuration:!1,...e};if(!Fd(e,d2)&&Fd(e,u2))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*wt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:X.mass,stiffness:i,damping:s}}else{const n=a2(e);t={...t,...n,mass:X.mass},t.isResolvedFromDuration=!0}return t}function gg(e=X.visualDuration,t=X.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:v}=f2({...n,velocity:-ht(n.velocity||0)}),y=p||0,x=u/(2*Math.sqrt(c*d)),j=a-s,m=ht(Math.sqrt(c/d)),h=Math.abs(j)<5;r||(r=h?X.restSpeed.granular:X.restSpeed.default),i||(i=h?X.restDelta.granular:X.restDelta.default);let g;if(x<1){const k=il(m,x);g=P=>{const C=Math.exp(-x*m*P);return a-C*((y+x*m*j)/k*Math.sin(k*P)+j*Math.cos(k*P))}}else if(x===1)g=k=>a-Math.exp(-m*k)*(j+(y+m*j)*k);else{const k=m*Math.sqrt(x*x-1);g=P=>{const C=Math.exp(-x*m*P),S=Math.min(k*P,300);return a-C*((y+x*m*j)*Math.sinh(S)+k*j*Math.cosh(S))/k}}const b={calculatedDuration:v&&f||null,next:k=>{const P=g(k);if(v)l.done=k>=f;else{let C=0;x<1&&(C=k===0?mt(y):hg(g,k,P));const S=Math.abs(C)<=r,I=Math.abs(a-P)<=i;l.done=S&&I}return l.value=l.done?a:P,l},toString:()=>{const k=Math.min(Lh(b),Xa),P=Dh(C=>b.next(k*C).value,k,30);return k+"ms "+P}};return b}function Bd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},v=S=>l!==void 0&&S<l||c!==void 0&&S>c,y=S=>l===void 0?c:c===void 0||Math.abs(l-S)<Math.abs(c-S)?l:c;let x=n*t;const j=f+x,m=a===void 0?j:a(j);m!==j&&(x=m-f);const h=S=>-x*Math.exp(-S/r),g=S=>m+h(S),b=S=>{const I=h(S),A=g(S);p.done=Math.abs(I)<=u,p.value=p.done?m:A};let k,P;const C=S=>{v(p.value)&&(k=S,P=gg({keyframes:[p.value,y(p.value)],velocity:hg(g,S,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:S=>{let I=!1;return!P&&k===void 0&&(I=!0,b(S),C(S)),k!==void 0&&S>=k?P.next(S-k):(!I&&b(S),p)}}}const p2=gi(.42,0,1,1),m2=gi(0,0,.58,1),vg=gi(.42,0,.58,1),h2=e=>Array.isArray(e)&&typeof e[0]!="number",g2={linear:Le,easeIn:p2,easeInOut:vg,easeOut:m2,circIn:Fc,circInOut:Qh,circOut:Xh,backIn:Oc,backInOut:Yh,backOut:Gh,anticipate:qh},Ud=e=>{if(Lc(e)){mh(e.length===4);const[t,n,r,i]=e;return gi(t,n,r,i)}else if(typeof e=="string")return g2[e];return e};function v2(e,t,n){const r=[],i=n||mg,s=e.length-1;for(let a=0;a<s;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||Le:t;l=vi(c,l)}r.push(l)}return r}function y2(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(mh(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=v2(t,r,i),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=er(e[f],e[f+1],d);return l[f](p)};return n?d=>u(wt(e[0],e[s-1],d)):u}function x2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=er(0,t,r);e.push(G(n,1,i))}}function w2(e){const t=[0];return x2(t,e.length-1),t}function j2(e,t){return e.map(n=>n*t)}function b2(e,t){return e.map(()=>t||vg).splice(0,e.length-1)}function Is({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=h2(r)?r.map(Ud):Ud(r),s={done:!1,value:t[0]},a=j2(n&&n.length===t.length?n:w2(t),e),l=y2(a,t,{ease:Array.isArray(i)?i:b2(t,i)});return{calculatedDuration:e,next:c=>(s.value=l(c),s.done=c>=e,s)}}const k2=e=>{const t=({timestamp:n})=>e(n);return{start:()=>$.update(t,!0),stop:()=>Wt(t),now:()=>de.isProcessing?de.timestamp:lt.now()}},S2={decay:Bd,inertia:Bd,tween:Is,keyframes:Is,spring:gg},N2=e=>e/100;class Kc extends fg{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||$c,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new a(s,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,l=zc(n)?n:S2[n]||Is;let c,u;l!==Is&&typeof t[0]!="number"&&(c=vi(N2,mg(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});s==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=Lh(d));const{calculatedDuration:f}=d,p=f+i,v=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:p,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:S}=this.options;return{done:!0,value:S[S.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:v,repeatType:y,repeatDelay:x,onUpdate:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let g=this.currentTime,b=s;if(v){const S=Math.min(this.currentTime,d)/f;let I=Math.floor(S),A=S%1;!A&&S>=1&&(A=1),A===1&&I--,I=Math.min(I,v+1),!!(I%2)&&(y==="reverse"?(A=1-A,x&&(A-=x/f)):y==="mirror"&&(b=a)),g=wt(0,1,A)*f}const k=h?{done:!1,value:c[0]}:b.next(g);l&&(k.value=l(k.value));let{done:P}=k;!h&&u!==null&&(P=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return C&&i!==void 0&&(k.value=ao(c,this.options,i)),j&&j(k.value),C&&this.finish(),k}get duration(){const{resolved:t}=this;return t?ht(t.calculatedDuration):0}get time(){return ht(this.currentTime)}set time(t){t=mt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=ht(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=k2,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const P2=new Set(["opacity","clipPath","filter","transform"]);function C2(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=Rh(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const T2=yc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Rs=10,E2=2e4;function _2(e){return zc(e.type)||e.type==="spring"||!Ih(e.ease)}function M2(e,t){const n=new Kc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<E2;)r=n.sample(s),i.push(r.value),s+=Rs;return{times:void 0,keyframes:i,duration:s-Rs,ease:"linear"}}const yg={anticipate:qh,backInOut:Yh,circInOut:Qh};function A2(e){return e in yg}class Wd extends fg{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new dg(s,(a,l)=>this.onKeyframesResolved(a,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof s=="string"&&Ls()&&A2(s)&&(s=yg[s]),_2(this.options)){const{onComplete:f,onUpdate:p,motionValue:v,element:y,...x}=this.options,j=M2(t,x);t=j.keyframes,t.length===1&&(t[1]=t[0]),r=j.duration,i=j.times,s=j.ease,a="keyframes"}const d=C2(l.owner.current,c,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(Cd(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(ao(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return ht(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return ht(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=mt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Le;const{animation:r}=n;Cd(r,t)}return Le}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:a,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...v}=this.options,y=new Kc({...v,keyframes:r,duration:i,type:s,ease:a,times:l,isGenerator:!0}),x=mt(this.time);u.setWithVelocity(y.sample(x-Rs).value,y.sample(x).value,Rs)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:a,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return T2()&&r&&P2.has(r)&&!c&&!u&&!i&&s!=="mirror"&&a!==0&&l!=="inertia"}}const z2={type:"spring",stiffness:500,damping:25,restSpeed:10},L2=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),D2={type:"keyframes",duration:.8},I2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},R2=(e,{keyframes:t})=>t.length>2?D2:jn.has(e)?e.startsWith("scale")?L2(t[1]):z2:I2;function V2({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Gc=(e,t,n,r={},i,s)=>a=>{const l=Ac(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-mt(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:i};V2(l)||(d={...d,...R2(e,d)}),d.duration&&(d.duration=mt(d.duration)),d.repeatDelay&&(d.repeatDelay=mt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=ao(d.keyframes,l);if(p!==void 0)return $.update(()=>{d.onUpdate(p),d.onComplete()}),new rw([])}return!s&&Wd.supports(d)?new Wd(d):new Kc(d)};function O2({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function xg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),v=c[f];if(v===void 0||d&&O2(d,f))continue;const y={delay:n,...Ac(a||{},f)};let x=!1;if(window.MotionHandoffAnimation){const m=Wh(e);if(m){const h=window.MotionHandoffAnimation(m,f,$);h!==null&&(y.startTime=h,x=!0)}}Za(e,f),p.start(Gc(f,p,v,e.shouldReduceMotion&&Bh.has(f)?{type:!1}:y,e,x));const j=p.animation;j&&u.push(j)}return l&&Promise.all(u).then(()=>{$.update(()=>{l&&vw(e,l)})}),u}function sl(e,t,n={}){var r;const i=oo(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(xg(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return F2(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:c}=s;if(c){const[u,d]=c==="beforeChildren"?[a,l]:[l,a];return u().then(()=>d())}else return Promise.all([a(),l(n.delay)])}function F2(e,t,n=0,r=0,i=1,s){const a=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(B2).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(sl(u,t,{...s,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function B2(e,t){return e.sortNodePosition(t)}function U2(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>sl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=sl(e,t,n);else{const i=typeof t=="function"?oo(e,t,n.custom):t;r=Promise.all(xg(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const W2=wc.length;function wg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?wg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<W2;n++){const r=wc[n],i=e.props[r];(ii(i)||i===!1)&&(t[r]=i)}return t}const $2=[...xc].reverse(),H2=xc.length;function K2(e){return t=>Promise.all(t.map(({animation:n,options:r})=>U2(e,n,r)))}function G2(e){let t=K2(e),n=$d(),r=!0;const i=c=>(u,d)=>{var f;const p=oo(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:v,transitionEnd:y,...x}=p;u={...u,...x,...y}}return u};function s(c){t=c(e)}function a(c){const{props:u}=e,d=wg(e.parent)||{},f=[],p=new Set;let v={},y=1/0;for(let j=0;j<H2;j++){const m=$2[j],h=n[m],g=u[m]!==void 0?u[m]:d[m],b=ii(g),k=m===c?h.isActive:null;k===!1&&(y=j);let P=g===d[m]&&g!==u[m]&&b;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),h.protectedKeys={...v},!h.isActive&&k===null||!g&&!h.prevProp||io(g)||typeof g=="boolean")continue;const C=Y2(h.prevProp,g);let S=C||m===c&&h.isActive&&!P&&b||j>y&&b,I=!1;const A=Array.isArray(g)?g:[g];let oe=A.reduce(i(m),{});k===!1&&(oe={});const{prevResolvedValues:bt={}}=h,Xt={...bt,...oe},cr=re=>{S=!0,p.has(re)&&(I=!0,p.delete(re)),h.needsAnimating[re]=!0;const T=e.getValue(re);T&&(T.liveStyle=!1)};for(const re in Xt){const T=oe[re],z=bt[re];if(v.hasOwnProperty(re))continue;let D=!1;qa(T)&&qa(z)?D=!zh(T,z):D=T!==z,D?T!=null?cr(re):p.add(re):T!==void 0&&p.has(re)?cr(re):h.protectedKeys[re]=!0}h.prevProp=g,h.prevResolvedValues=oe,h.isActive&&(v={...v,...oe}),r&&e.blockInitialAnimation&&(S=!1),S&&(!(P&&C)||I)&&f.push(...A.map(re=>({animation:re,options:{type:m}})))}if(p.size){const j={};p.forEach(m=>{const h=e.getBaseTarget(m),g=e.getValue(m);g&&(g.liveStyle=!0),j[m]=h??null}),f.push({animation:j})}let x=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var v;return(v=p.animationState)===null||v===void 0?void 0:v.setActive(c,u)}),n[c].isActive=u;const f=a(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=$d(),r=!0}}}function Y2(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!zh(t,e):!1}function Jt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $d(){return{animate:Jt(!0),whileInView:Jt(),whileHover:Jt(),whileTap:Jt(),whileDrag:Jt(),whileFocus:Jt(),exit:Jt()}}class qt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class q2 extends qt{constructor(t){super(t),t.animationState||(t.animationState=G2(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();io(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let X2=0;class Q2 extends qt{constructor(){super(...arguments),this.id=X2++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Z2={animation:{Feature:q2},exit:{Feature:Q2}};function li(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function yi(e){return{point:{x:e.pageX,y:e.pageY}}}const J2=e=>t=>Dc(t)&&e(t,yi(t));function Ir(e,t,n,r){return li(e,t,J2(n),r)}const Hd=(e,t)=>Math.abs(e-t);function ej(e,t){const n=Hd(e.x,t.x),r=Hd(e.y,t.y);return Math.sqrt(n**2+r**2)}class jg{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=$o(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,v=ej(f.offset,{x:0,y:0})>=3;if(!p&&!v)return;const{point:y}=f,{timestamp:x}=de;this.history.push({...y,timestamp:x});const{onStart:j,onMove:m}=this.handlers;p||(j&&j(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Wo(p,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:v,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=$o(f.type==="pointercancel"?this.lastMoveEventInfo:Wo(p,this.transformPagePoint),this.history);this.startEvent&&v&&v(f,j),y&&y(f,j)},!Dc(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=yi(t),l=Wo(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=de;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,$o(l,this.history)),this.removeListeners=vi(Ir(this.contextWindow,"pointermove",this.handlePointerMove),Ir(this.contextWindow,"pointerup",this.handlePointerUp),Ir(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Wt(this.updatePoint)}}function Wo(e,t){return t?{point:t(e.point)}:e}function Kd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function $o({point:e},t){return{point:e,delta:Kd(e,bg(t)),offset:Kd(e,tj(t)),velocity:nj(t,.1)}}function tj(e){return e[0]}function bg(e){return e[e.length-1]}function nj(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=bg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>mt(t)));)n--;if(!r)return{x:0,y:0};const s=ht(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const kg=1e-4,rj=1-kg,ij=1+kg,Sg=.01,sj=0-Sg,oj=0+Sg;function Ie(e){return e.max-e.min}function aj(e,t,n){return Math.abs(e-t)<=n}function Gd(e,t,n,r=.5){e.origin=r,e.originPoint=G(t.min,t.max,e.origin),e.scale=Ie(n)/Ie(t),e.translate=G(n.min,n.max,e.origin)-e.originPoint,(e.scale>=rj&&e.scale<=ij||isNaN(e.scale))&&(e.scale=1),(e.translate>=sj&&e.translate<=oj||isNaN(e.translate))&&(e.translate=0)}function Rr(e,t,n,r){Gd(e.x,t.x,n.x,r?r.originX:void 0),Gd(e.y,t.y,n.y,r?r.originY:void 0)}function Yd(e,t,n){e.min=n.min+t.min,e.max=e.min+Ie(t)}function lj(e,t,n){Yd(e.x,t.x,n.x),Yd(e.y,t.y,n.y)}function qd(e,t,n){e.min=t.min-n.min,e.max=e.min+Ie(t)}function Vr(e,t,n){qd(e.x,t.x,n.x),qd(e.y,t.y,n.y)}function cj(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?G(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?G(n,e,r.max):Math.min(e,n)),e}function Xd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function uj(e,{top:t,left:n,bottom:r,right:i}){return{x:Xd(e.x,n,i),y:Xd(e.y,t,r)}}function Qd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function dj(e,t){return{x:Qd(e.x,t.x),y:Qd(e.y,t.y)}}function fj(e,t){let n=.5;const r=Ie(e),i=Ie(t);return i>r?n=er(t.min,t.max-r,e.min):r>i&&(n=er(e.min,e.max-i,t.min)),wt(0,1,n)}function pj(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ol=.35;function mj(e=ol){return e===!1?e=0:e===!0&&(e=ol),{x:Zd(e,"left","right"),y:Zd(e,"top","bottom")}}function Zd(e,t,n){return{min:Jd(e,t),max:Jd(e,n)}}function Jd(e,t){return typeof e=="number"?e:e[t]||0}const ef=()=>({translate:0,scale:1,origin:0,originPoint:0}),Rn=()=>({x:ef(),y:ef()}),tf=()=>({min:0,max:0}),J=()=>({x:tf(),y:tf()});function Fe(e){return[e("x"),e("y")]}function Ng({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function hj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function gj(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ho(e){return e===void 0||e===1}function al({scale:e,scaleX:t,scaleY:n}){return!Ho(e)||!Ho(t)||!Ho(n)}function nn(e){return al(e)||Pg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Pg(e){return nf(e.x)||nf(e.y)}function nf(e){return e&&e!=="0%"}function Vs(e,t,n){const r=e-n,i=t*r;return n+i}function rf(e,t,n,r,i){return i!==void 0&&(e=Vs(e,i,r)),Vs(e,n,r)+t}function ll(e,t=0,n=1,r,i){e.min=rf(e.min,t,n,r,i),e.max=rf(e.max,t,n,r,i)}function Cg(e,{x:t,y:n}){ll(e.x,t.translate,t.scale,t.originPoint),ll(e.y,n.translate,n.scale,n.originPoint)}const sf=.999999999999,of=1.0000000000001;function vj(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let l=0;l<i;l++){s=n[l],a=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&On(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Cg(e,a)),r&&nn(s.latestValues)&&On(e,s.latestValues))}t.x<of&&t.x>sf&&(t.x=1),t.y<of&&t.y>sf&&(t.y=1)}function Vn(e,t){e.min=e.min+t,e.max=e.max+t}function af(e,t,n,r,i=.5){const s=G(e.min,e.max,i);ll(e,t,n,s,r)}function On(e,t){af(e.x,t.x,t.scaleX,t.scale,t.originX),af(e.y,t.y,t.scaleY,t.scale,t.originY)}function Tg(e,t){return Ng(gj(e.getBoundingClientRect(),t))}function yj(e,t,n){const r=Tg(e,n),{scroll:i}=t;return i&&(Vn(r.x,i.offset.x),Vn(r.y,i.offset.y)),r}const Eg=({current:e})=>e?e.ownerDocument.defaultView:null,xj=new WeakMap;class wj{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=J(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(yi(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:v,onDragStart:y}=this.getProps();if(p&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=fw(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fe(j=>{let m=this.getAxisMotionValue(j).get()||0;if(at.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[j];g&&(m=Ie(g)*(parseFloat(m)/100))}}this.originPoint[j]=m}),y&&$.postRender(()=>y(d,f)),Za(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:j}=f;if(v&&this.currentDirection===null){this.currentDirection=jj(j),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,j),this.updateAxis("y",f.point,j),this.visualElement.render(),x&&x(d,f)},l=(d,f)=>this.stop(d,f),c=()=>Fe(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new jg(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Eg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&$.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!$i(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=cj(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Dn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=uj(i.layoutBox,n):this.constraints=!1,this.elastic=mj(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Fe(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=pj(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Dn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=yj(r,i.root,this.visualElement.getTransformPagePoint());let a=dj(i.layout.layoutBox,s);if(n){const l=n(hj(a));this.hasMutatedConstraints=!!l,l&&(a=Ng(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=Fe(d=>{if(!$i(d,n,this.currentDirection))return;let f=c&&c[d]||{};a&&(f={min:0,max:0});const p=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Za(this.visualElement,t),r.start(Gc(t,r,0,n,this.visualElement,!1))}stopAnimation(){Fe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Fe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Fe(n=>{const{drag:r}=this.getProps();if(!$i(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:l}=i.layout.layoutBox[n];s.set(t[n]-G(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Dn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Fe(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();i[a]=fj({min:c,max:c},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Fe(a=>{if(!$i(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(G(c,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;xj.set(this.visualElement,this);const t=this.visualElement.current,n=Ir(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Dn(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),$.read(r);const a=li(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Fe(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=ol,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:l}}}function $i(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function jj(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class bj extends qt{constructor(t){super(t),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new wj(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}unmount(){this.removeGroupControls(),this.removeListeners()}}const lf=e=>(t,n)=>{e&&$.postRender(()=>e(t,n))};class kj extends qt{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(t){this.session=new jg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Eg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:lf(t),onStart:lf(n),onMove:r,onEnd:(s,a)=>{delete this.session,i&&$.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=Ir(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ss={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function cf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const n=cf(e,t.target.x),r=cf(e,t.target.y);return`${n}% ${r}%`}},Sj={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=$t.parse(e);if(i.length>5)return r;const s=$t.createTransformer(e),a=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=l,i[1+a]/=c;const u=G(l,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class Nj extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;H1(Pj),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ss.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||$.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),bc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function _g(e){const[t,n]=fh(),r=w.useContext(mc);return o.jsx(Nj,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(wh),isPresent:t,safeToRemove:n})}const Pj={borderRadius:{...yr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yr,borderTopRightRadius:yr,borderBottomLeftRadius:yr,borderBottomRightRadius:yr,boxShadow:Sj};function Cj(e,t,n){const r=xe(e)?e:oi(e);return r.start(Gc("",r,t,n)),r.animation}function Tj(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Ej=(e,t)=>e.depth-t.depth;class _j{constructor(){this.children=[],this.isDirty=!1}add(t){Ic(this.children,t),this.isDirty=!0}remove(t){Rc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Ej),this.isDirty=!1,this.children.forEach(t)}}function Mj(e,t){const n=lt.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Wt(r),e(s-t))};return $.read(r,!0),()=>Wt(r)}const Mg=["TopLeft","TopRight","BottomLeft","BottomRight"],Aj=Mg.length,uf=e=>typeof e=="string"?parseFloat(e):e,df=e=>typeof e=="number"||M.test(e);function zj(e,t,n,r,i,s){i?(e.opacity=G(0,n.opacity!==void 0?n.opacity:1,Lj(r)),e.opacityExit=G(t.opacity!==void 0?t.opacity:1,0,Dj(r))):s&&(e.opacity=G(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<Aj;a++){const l=`border${Mg[a]}Radius`;let c=ff(t,l),u=ff(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||df(c)===df(u)?(e[l]=Math.max(G(uf(c),uf(u),r),0),(at.test(u)||at.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=G(t.rotate||0,n.rotate||0,r))}function ff(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Lj=Ag(0,.5,Xh),Dj=Ag(.5,.95,Le);function Ag(e,t,n){return r=>r<e?0:r>t?1:n(er(e,t,r))}function pf(e,t){e.min=t.min,e.max=t.max}function Oe(e,t){pf(e.x,t.x),pf(e.y,t.y)}function mf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function hf(e,t,n,r,i){return e-=t,e=Vs(e,1/n,r),i!==void 0&&(e=Vs(e,1/i,r)),e}function Ij(e,t=0,n=1,r=.5,i,s=e,a=e){if(at.test(t)&&(t=parseFloat(t),t=G(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=G(s.min,s.max,r);e===s&&(l-=t),e.min=hf(e.min,t,n,l,i),e.max=hf(e.max,t,n,l,i)}function gf(e,t,[n,r,i],s,a){Ij(e,t[n],t[r],t[i],t.scale,s,a)}const Rj=["x","scaleX","originX"],Vj=["y","scaleY","originY"];function vf(e,t,n,r){gf(e.x,t,Rj,n?n.x:void 0,r?r.x:void 0),gf(e.y,t,Vj,n?n.y:void 0,r?r.y:void 0)}function yf(e){return e.translate===0&&e.scale===1}function zg(e){return yf(e.x)&&yf(e.y)}function xf(e,t){return e.min===t.min&&e.max===t.max}function Oj(e,t){return xf(e.x,t.x)&&xf(e.y,t.y)}function wf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Lg(e,t){return wf(e.x,t.x)&&wf(e.y,t.y)}function jf(e){return Ie(e.x)/Ie(e.y)}function bf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Fj{constructor(){this.members=[]}add(t){Ic(this.members,t),t.scheduleRender()}remove(t){if(Rc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Bj(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:v,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),v&&(r+=`skewX(${v}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const rn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Nr=typeof window<"u"&&window.MotionDebug!==void 0,Ko=["","X","Y","Z"],Uj={visibility:"hidden"},kf=1e3;let Wj=0;function Go(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Dg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Wh(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",$,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Dg(r)}function Ig({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},l=t==null?void 0:t()){this.id=Wj++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Nr&&(rn.totalNodes=rn.resolvedTargetDeltas=rn.recalculatedProjection=0),this.nodes.forEach(Kj),this.nodes.forEach(Qj),this.nodes.forEach(Zj),this.nodes.forEach(Gj),Nr&&window.MotionDebug.record(rn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new _j)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Vc),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Tj(a),this.instance=a;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Mj(p,250),ss.hasAnimatedSinceResize&&(ss.hasAnimatedSinceResize=!1,this.nodes.forEach(Nf))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||rb,{onLayoutAnimationStart:j,onLayoutAnimationComplete:m}=d.getProps(),h=!this.targetLayout||!Lg(this.targetLayout,y)||v,g=!p&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const b={...Ac(x,"layout"),onPlay:j,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||Nf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Wt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Jj),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Dg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Sf);return}this.isUpdating||this.nodes.forEach(qj),this.isUpdating=!1,this.nodes.forEach(Xj),this.nodes.forEach($j),this.nodes.forEach(Hj),this.clearAllSnapshots();const l=lt.now();de.delta=wt(0,1e3/60,l-de.timestamp),de.timestamp=l,de.isProcessing=!0,Ro.update.process(de),Ro.preRender.process(de),Ro.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Yj),this.sharedNodes.forEach(eb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=J(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!zg(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(l||nn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),ib(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:l}=this.options;if(!l)return J();const c=l.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(sb))){const{scroll:d}=this.root;d&&(Vn(c.x,d.offset.x),Vn(c.y,d.offset.y))}return c}removeElementScroll(a){var l;const c=J();if(Oe(c,a),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Oe(c,a),Vn(c.x,f.offset.x),Vn(c.y,f.offset.y))}return c}applyTransform(a,l=!1){const c=J();Oe(c,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&On(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),nn(d.latestValues)&&On(c,d.latestValues)}return nn(this.latestValues)&&On(c,this.latestValues),c}removeTransform(a){const l=J();Oe(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!nn(u.latestValues))continue;al(u.latestValues)&&u.updateSnapshot();const d=J(),f=u.measurePageBox();Oe(d,f),vf(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return nn(this.latestValues)&&vf(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=de.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=J(),this.relativeTargetOrigin=J(),Vr(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=J(),this.targetWithTransforms=J()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),lj(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Oe(this.target,this.layout.layoutBox),Cg(this.target,this.targetDelta)):Oe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=J(),this.relativeTargetOrigin=J(),Vr(this.relativeTargetOrigin,this.target,v.target),Oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Nr&&rn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||al(this.parent.latestValues)||Pg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===de.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Oe(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;vj(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=J());const{target:y}=l;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(mf(this.prevProjectionDelta.x,this.projectionDelta.x),mf(this.prevProjectionDelta.y,this.projectionDelta.y)),Rr(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!bf(this.projectionDelta.x,this.prevProjectionDelta.x)||!bf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Nr&&rn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Rn(),this.projectionDelta=Rn(),this.projectionDeltaWithTransform=Rn()}setAnimationOrigin(a,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=Rn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=J(),v=c?c.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,j=this.getStack(),m=!j||j.members.length<=1,h=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(nb));this.animationProgress=0;let g;this.mixTargetDelta=b=>{const k=b/1e3;Pf(f.x,a.x,k),Pf(f.y,a.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vr(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tb(this.relativeTarget,this.relativeTargetOrigin,p,k),g&&Oj(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=J()),Oe(g,this.relativeTarget)),x&&(this.animationValues=d,zj(d,u,this.latestValues,k,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Wt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{ss.hasAnimatedSinceResize=!0,this.currentAnimation=Cj(0,kf,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(kf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&Rg(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||J();const f=Ie(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+f;const p=Ie(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}Oe(l,c),On(l,d),Rr(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Fj),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&Go("z",a,u,this.animationValues);for(let d=0;d<Ko.length;d++)Go(`rotate${Ko[d]}`,a,u,this.animationValues),Go(`skew${Ko[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Uj;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=rs(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=rs(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!nn(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Bj(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:v,y}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in zs){if(p[x]===void 0)continue;const{correct:j,applyTo:m}=zs[x],h=u.transform==="none"?p[x]:j(p[x],f);if(m){const g=m.length;for(let b=0;b<g;b++)u[m[b]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=f===this?rs(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Sf),this.root.sharedNodes.clear()}}}function $j(e){e.updateLayout()}function Hj(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?Fe(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],v=Ie(p);p.min=r[f].min,p.max=p.min+v}):Rg(s,n.layoutBox,r)&&Fe(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],v=Ie(r[f]);p.max=p.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const l=Rn();Rr(l,r,n.layoutBox);const c=Rn();a?Rr(c,e.applyTransform(i,!0),n.measuredBox):Rr(c,r,n.layoutBox);const u=!zg(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:v}=f;if(p&&v){const y=J();Vr(y,n.layoutBox,p.layoutBox);const x=J();Vr(x,r,v.layoutBox),Lg(y,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Kj(e){Nr&&rn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Gj(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Yj(e){e.clearSnapshot()}function Sf(e){e.clearMeasurements()}function qj(e){e.isLayoutDirty=!1}function Xj(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Nf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Qj(e){e.resolveTargetDelta()}function Zj(e){e.calcProjection()}function Jj(e){e.resetSkewAndRotation()}function eb(e){e.removeLeadSnapshot()}function Pf(e,t,n){e.translate=G(t.translate,0,n),e.scale=G(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Cf(e,t,n,r){e.min=G(t.min,n.min,r),e.max=G(t.max,n.max,r)}function tb(e,t,n,r){Cf(e.x,t.x,n.x,r),Cf(e.y,t.y,n.y,r)}function nb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const rb={duration:.45,ease:[.4,0,.1,1]},Tf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ef=Tf("applewebkit/")&&!Tf("chrome/")?Math.round:Le;function _f(e){e.min=Ef(e.min),e.max=Ef(e.max)}function ib(e){_f(e.x),_f(e.y)}function Rg(e,t,n){return e==="position"||e==="preserve-aspect"&&!aj(jf(t),jf(n),.2)}function sb(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const ob=Ig({attachResizeListener:(e,t)=>li(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Yo={current:void 0},Vg=Ig({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Yo.current){const e=new ob({});e.mount(window),e.setOptions({layoutScroll:!0}),Yo.current=e}return Yo.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),ab={pan:{Feature:kj},drag:{Feature:bj,ProjectionNode:Vg,MeasureLayout:_g}};function Mf(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&$.postRender(()=>s(t,yi(t)))}class lb extends qt{mount(){const{current:t}=this.node;t&&(this.unmount=aw(t,n=>(Mf(this.node,n,"Start"),r=>Mf(this.node,r,"End"))))}unmount(){}}class cb extends qt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vi(li(this.node.current,"focus",()=>this.onFocus()),li(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Af(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&$.postRender(()=>s(t,yi(t)))}class ub extends qt{mount(){const{current:t}=this.node;t&&(this.unmount=dw(t,n=>(Af(this.node,n,"Start"),(r,{success:i})=>Af(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const cl=new WeakMap,qo=new WeakMap,db=e=>{const t=cl.get(e.target);t&&t(e)},fb=e=>{e.forEach(db)};function pb({root:e,...t}){const n=e||document;qo.has(n)||qo.set(n,{});const r=qo.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(fb,{root:e,...t})),r[i]}function mb(e,t,n){const r=pb(t);return cl.set(e,n),r.observe(e),()=>{cl.delete(e),r.unobserve(e)}}const hb={some:0,all:1};class gb extends qt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:hb[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};return mb(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(vb(t,n))&&this.startObserver()}unmount(){}}function vb({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const yb={inView:{Feature:gb},tap:{Feature:ub},focus:{Feature:cb},hover:{Feature:lb}},xb={layout:{ProjectionNode:Vg,MeasureLayout:_g}},ul={current:null},Og={current:!1};function wb(){if(Og.current=!0,!!vc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ul.current=e.matches;e.addListener(t),t()}else ul.current=!1}const jb=[...ug,ge,$t],bb=e=>jb.find(cg(e)),zf=new WeakMap;function kb(e,t,n){for(const r in t){const i=t[r],s=n[r];if(xe(i))e.addValue(r,i);else if(xe(s))e.addValue(r,oi(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,oi(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Lf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Sb{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=$c,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=lt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,$.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=so(n),this.isVariantNode=yh(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const v in p){const y=p[v];c[v]!==void 0&&xe(y)&&y.set(c[v],!1)}}mount(t){this.current=t,zf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Og.current||wb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ul.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){zf.delete(this.current),this.projection&&this.projection.unmount(),Wt(this.notifyUpdate),Wt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=jn.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&$.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in tr){const n=tr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):J()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Lf.length;r++){const i=Lf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=kb(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=oi(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(ag(i)||Zh(i))?i=parseFloat(i):!bb(i)&&$t.test(n)&&(i=ig(t,n)),this.setBaseTarget(t,xe(i)?i.get():i)),xe(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=Sc(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!xe(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Vc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Fg extends Sb{constructor(){super(...arguments),this.KeyframeResolver=dg}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;xe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Nb(e){return window.getComputedStyle(e)}class Pb extends Fg{constructor(){super(...arguments),this.type="html",this.renderInstance=Ch}readValueFromInstance(t,n){if(jn.has(n)){const r=Wc(n);return r&&r.default||0}else{const r=Nb(t),i=(Sh(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Tg(t,n)}build(t,n,r){Cc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Mc(t,n,r)}}class Cb extends Fg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=J}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(jn.has(n)){const r=Wc(n);return r&&r.default||0}return n=Th.has(n)?n:jc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Mh(t,n,r)}build(t,n,r){Tc(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Eh(t,n,r,i)}mount(t){this.isSVGTag=_c(t.tagName),super.mount(t)}}const Tb=(e,t)=>kc(e)?new Cb(t):new Pb(t,{allowProjection:e!==w.Fragment}),Eb=ew({...Z2,...yb,...ab,...xb},Tb),L=h1(Eb),dl="/assets/logo-DdNgWUHM.png",xi=[{title:"VsDox ECM",slug:"enterprise-content-management",externalLink:"https://vsdox.com",description:"Secure, scalable, and cloud-ready platform for managing your enterprise content lifecycle.",longDescription:"VsDox ECM is a robust, open-source based capabilities built on the DSpace platform, designed to manage the entire lifecycle of your organization's content. From digitizing physical documents to managing born-digital assets, VsDox ensures your information is secure, accessible, and compliant. Whether deployed on-premise, on AWS, or Microsoft Azure, it scales effortlessly to meet the demands of large data archives.",features:["Advanced Content Capture: Multilingual OCR, image enhancement, and automated metadata indexing.","Smart Retrieval: Full-text indexing, structured folders, and granular access controls.","Workflow Automation: Configurable workflows for review, approval, and document routing.","Enterprise Security: OWASP compliant, digital signatures, encryption, and comprehensive audit trails.","Seamless Integration: Interoperable with SAP, Google Enterprise, and other core business systems."],benefits:["Reduce Total Cost of Ownership (TCO) with no proprietary licensing fees.","Enhance operational efficiency by eliminating manual paper handling.","Ensure regulatory compliance and data security.","Enable remote access to critical business documents."],content:"Our Enterprise Content Management (ECM) solutions empower organizations to capture, store, activate, analyze, and automate business content. By leveraging advanced OCR, metadata tagging, and workflow automation, we turn your documents into a powerful knowledge base. Whether it's digitizing physical archives or managing born-digital assets, our VsDox platform ensures security, compliance, and accessibility."},{title:"eVAL Education Suite",slug:"eval-educational-solution-suite",externalLink:"https://evalexam.com",description:"A comprehensive ecosystem for modern education and assessment.",longDescription:"The Eval Suite addresses the end-to-end needs of educational institutions, examination bodies, and recruitment agencies. We provide a modular ecosystem that digitizes every stage of the assessment lifecycle—from candidate registration to result declaration—ensuring integrity, speed, and accuracy.",features:["Modular Architecture: Choose only the components you need (OMR, CBT, LMS, etc.).","Scalable: Proven to handle millions of candidates.","Secure: End-to-end encryption and role-based access control.","Analytics: Deep insights into student performance and exam trends."],content:"The Eval Suite is designed to address the end-to-end needs of educational institutions and examination bodies. From candidate registration to result declaration, our modular solutions ensure integrity, efficiency, and scalability in the assessment process.",subItems:[{title:"OMR Software",slug:"omr-software",externalLink:"https://evalexam.com/omr-software"},{title:"On-Screen Marking",slug:"on-screen-marking",externalLink:"https://evalexam.com/on-screen-marking"},{title:"Question Paper Management",slug:"question-paper-management",externalLink:"https://evalexam.com/question-paper-management"},{title:"AI Proctoring",slug:"ai-proctoring",externalLink:"https://evalexam.com/ai-proctoring"},{title:"CBT Platform",slug:"cbt-platform",externalLink:"https://evalexam.com/cbt-platform"},{title:"Olympiad Portal",slug:"olympiad-portal",externalLink:"https://evalexam.com/olympiad-portal"}]},{title:"Print Product Engineering",slug:"print-product-engineering",description:"Your go-to partner for IT-led process transformation for product life-cycle management, development or workflow optimization needs, with a special focus on print.",longDescription:"In today's dynamic economy, print and publishing companies must rapidly introduce new products and features to gain competitive advantage. Vir Softech is the ideal value-added software service provider for print and publishing companies that need to move quickly without sacrificing quality while maintaining a profit margin. We have a world-class team of computer scientists with decades of experience in managing all aspects of Imaging technologies and replacing RIP technologies with comparable or improved performance and quality.",features:["Print Technology Expertise: Proven experience in RIP, color management, job management & settings, printer & cutter workflows, half-toning, VDP, and imposition.","Advanced Functions: Deep knowledge of bands generation, nesting, tiling, step & repeat.","Market Segment Focus: Target RFPs for specific market segments, such as production, industrial, commercial, large format and enterprise printing.","Global OEM Engagement: Strong partnerships with print OEMs across geographies such as Japan, USA, and Europe.","Core Competencies: Super-strong expertise on PostScript, PDF, PCL & XPS, and implementation partner for Harlequin & Mako."]},{title:"Custom Product Engineering",slug:"custom-product-engineering",externalLink:"/solutions/print-product-engineering#customm_services",description:"Offload your end-to-end software development for business-leading transformation.",longDescription:"With Vir Softech engineering services you can offload your end-to-end software development for business-leading transformation in managing documents, optimizing education, bringing new age printing services, or workflow management of artwork and design in print and packaging setups. You can rely on us to meet all of your current and future engineering and technology needs in multiple models: solution-level, module-level, or skill-level.",features:["New Product Development: Product ideation, conceptualization, Prototyping, Beta testing & go-to-market.","Product Transformation: Legacy transformation and regular upgrades, Technology assessment & migration, Mobile, Cloud, SaaS enablement.","Maintenance & Testing: Life-cycle management, Product enhancements, Product maintenance & testing.","UI/UX Development: Visual design and asset creation, Front-end engineering, HTML/CSS, Wireframes, Concept prototype."]},{title:"Design & Artwork Automation",slug:"design-artwork-automation",description:"Reduce significant time and effort in designing artwork and manage design processes using automation.",longDescription:"Automate the artwork design process with Vir Softech's custom plugins for desktop and digital publishing to create high quality artwork with 100% accuracy. For regulated industries, such as pharma and consumer durables, there is a need to customize the product packaging to cover the regulatory aspects of countries where the product is being sold. Designing multiple versions of product designs for folding boxes, blisters, packets, and leaflets is complex, error-prone and costly. With our custom plugins, you can automate this process and get it all at a much lower time, money, and review effort.",features:["Custom Plugins: Developed in C++, scripts, VBA, VSTA & HTML for Windows and Mac OS across Adobe (InDesign, Illustrator, Photoshop, Acrobat) and CorelDraw.","Workflow Optimization: Manage and enhance PDF workflows, optimize web documents for printing and content for various market segments.","Automated Layouts: Automated placement of text, images and tables, multi-column alignment, multi-language support, font and paragraph styling.","Variable Data Printing: Improve printing and packaging workflows with powerful VDP and imposition capabilities."],benefits:["Nearly 75% reduction in time for designing artwork compared to manual processes.","Create high quality artwork with 100% accuracy, eliminating costly errors.","Significantly reduce investment in time, cost, and review effort.","Seamlessly replace legacy Flash-based extensions with modern CEP HTML-based plugins."]}],_b=e=>{for(const t of xi){if(t.slug===e)return t;if(t.subItems){const n=t.subItems.find(r=>r.slug===e);if(n)return n}}return null},Mb=()=>xi,Ab=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),[i,s]=w.useState(null),a=wn();w.useEffect(()=>{const c=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),w.useEffect(()=>{r(!1),s(null)},[a]);const l=[{name:"Home",path:"/"},{name:"Solutions",path:"/solutions",dropdown:xi.map(c=>({name:c.title,path:`/solutions/${c.slug}`,externalLink:c.externalLink,subItems:c.subItems?c.subItems.map(u=>({name:u.title,path:`/solutions/${u.slug}`,externalLink:u.externalLink})):null}))},{name:"Careers",path:"/careers"},{name:"Blog",path:"/blog"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}];return o.jsxs("nav",{className:`navbar-new ${e?"scrolled":""}`,children:[o.jsxs("div",{className:"container nav-wrapper",children:[o.jsx(V,{to:"/",className:"nav-logo",children:o.jsx("img",{src:dl,alt:"Vir Softech"})}),o.jsx("div",{className:"nav-menu desktop-only",children:l.map(c=>o.jsxs("div",{className:"nav-item",onMouseEnter:()=>c.dropdown&&s(c.name),onMouseLeave:()=>s(null),children:[o.jsxs(V,{to:c.path,className:`nav-link-new ${a.pathname===c.path?"active":""}`,children:[c.name,c.dropdown&&o.jsx(_x,{size:14,className:`chevron ${i===c.name?"rotate":""}`})]}),o.jsx(Ya,{children:c.dropdown&&i===c.name&&o.jsx(L.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"dropdown-container glass",children:o.jsx("div",{className:"dropdown-grid",children:c.dropdown.map(u=>o.jsxs("div",{className:"dropdown-item-wrapper",children:[u.externalLink?o.jsxs("a",{href:u.externalLink,target:"_blank",rel:"noopener noreferrer",className:"dropdown-item",children:[o.jsx("div",{className:"item-info",children:o.jsx("span",{className:"item-name",children:u.name})}),u.subItems&&o.jsx(md,{size:14})]}):o.jsxs(V,{to:u.path,className:"dropdown-item",children:[o.jsx("div",{className:"item-info",children:o.jsx("span",{className:"item-name",children:u.name})}),u.subItems&&o.jsx(md,{size:14})]}),u.subItems&&o.jsx("div",{className:"dropdown-sub-menu",children:u.subItems.map(d=>d.externalLink?o.jsx("a",{href:d.externalLink,target:"_blank",rel:"noopener noreferrer",className:"sub-item",children:d.name},d.name):o.jsx(V,{to:d.path,className:"sub-item",children:d.name},d.name))})]},u.name))})})})]},c.name))}),o.jsx("button",{className:"mobile-toggle-btn",onClick:()=>r(!n),"aria-label":"Toggle Menu",children:n?o.jsx(yd,{size:24}):o.jsx(Wx,{size:24})})]}),o.jsx(Ya,{children:n&&o.jsxs(L.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"mobile-sidebar glass",children:[o.jsxs("div",{className:"mobile-sidebar-header",children:[o.jsx("img",{src:dl,alt:"Vir Softech",className:"mobile-logo"}),o.jsx("button",{onClick:()=>r(!1),children:o.jsx(yd,{size:24})})]}),o.jsx("div",{className:"mobile-nav-links",children:l.map(c=>o.jsxs("div",{className:"mobile-nav-item",children:[o.jsx(V,{to:c.path,className:"mobile-nav-link",children:c.name}),c.dropdown&&o.jsx("div",{className:"mobile-dropdown",children:c.dropdown.map(u=>o.jsxs("div",{className:"mobile-sub-item-group",children:[u.externalLink?o.jsx("a",{href:u.externalLink,target:"_blank",rel:"noopener noreferrer",className:"mobile-sub-link",children:u.name}):o.jsx(V,{to:u.path,className:"mobile-sub-link",children:u.name}),u.subItems&&o.jsx("div",{className:"mobile-nested-dropdown",children:u.subItems.map(d=>d.externalLink?o.jsx("a",{href:d.externalLink,target:"_blank",rel:"noopener noreferrer",className:"mobile-nested-link",children:d.name},d.name):o.jsx(V,{to:d.path,className:"mobile-nested-link",children:d.name},d.name))})]},u.name))})]},c.name))}),o.jsx("div",{className:"mobile-sidebar-footer",children:o.jsx(V,{to:"/contact",className:"btn btn-primary w-full",children:"Contact Us"})})]})}),o.jsx("style",{jsx:!0,children:`
                .navbar-new {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    padding: 2rem 0;
                    transition: var(--transition-normal);
                    background: transparent;
                }

                .navbar-new.scrolled {
                    padding: 1rem 0;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(25px);
                    box-shadow: var(--shadow-lg);
                    border-bottom: 1px solid rgba(2, 48, 71, 0.05);
                }

                .nav-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .nav-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .nav-logo img {
                    height: 54px;
                    width: auto;
                    transition: var(--transition-normal);
                    filter: brightness(0) invert(1);
                }

                .navbar-new.scrolled .nav-logo img {
                    height: 44px;
                    filter: none;
                }

                .nav-menu {
                    display: flex;
                    align-items: center;
                    gap: 2.5rem;
                }

                .nav-item {
                    position: relative;
                }

                .nav-link-new {
                    font-weight: 600;
                    font-size: 1rem;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    padding: 0.5rem 0;
                    transition: var(--transition-normal);
                }

                .navbar-new.scrolled .nav-link-new {
                    color: var(--primary);
                }

                .nav-link-new:hover, .nav-link-new.active {
                    color: var(--accent) !important;
                }

                .chevron {
                    transition: transform 0.3s ease;
                }

                .chevron.rotate {
                    transform: rotate(180deg);
                }

                .dropdown-container {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    min-width: 350px;
                    max-height: 70vh;
                    overflow-y: auto;
                    padding: 0;
                    border-radius: var(--radius-lg);
                    margin-top: 1.5rem;
                    box-shadow: var(--shadow-xl);
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                }

                /* Custom Scrollbar for Dropdown */
                .dropdown-container::-webkit-scrollbar {
                    width: 6px;
                }
                .dropdown-container::-webkit-scrollbar-track {
                    background: transparent;
                }
                .dropdown-container::-webkit-scrollbar-thumb {
                    background: rgba(2, 48, 71, 0.2);
                    border-radius: 10px;
                }
                .dropdown-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(2, 48, 71, 0.5);
                }

                .dropdown-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    padding: 1.5rem;
                }

                .dropdown-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.6rem 1rem;
                    border-radius: var(--radius-md);
                    transition: var(--transition-normal);
                    color: var(--primary);
                    font-weight: 600;
                    background: transparent;
                }

                .dropdown-item:hover {
                    background: var(--background-alt);
                    color: var(--accent-hover);
                    transform: translateX(5px);
                }

                .dropdown-sub-menu {
                    padding-left: 1.25rem;
                    margin-top: 0.2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    border-left: 3px solid var(--background-alt);
                    margin-left: 1.25rem;
                }

                .sub-item {
                    padding: 0.4rem 1rem;
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    border-radius: var(--radius-sm);
                    font-weight: 500;
                    display: block;
                    transition: var(--transition-fast);
                }

                .sub-item:hover {
                    color: var(--primary);
                    background: var(--background-alt);
                    padding-left: 1.5rem;
                }

                .mobile-toggle-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    transition: var(--transition-normal);
                }

                .navbar-new.scrolled .mobile-toggle-btn {
                    color: var(--primary);
                }

                .mobile-sidebar {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 85%;
                    height: 100vh;
                    background: var(--white);
                    z-index: 1001;
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    box-shadow: var(--shadow-xl);
                }

                .mobile-sidebar-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 4rem;
                }

                .mobile-logo {
                    height: 48px;
                }

                .mobile-nav-links {
                    flex: 1;
                    overflow-y: auto;
                }

                .mobile-nav-item {
                    margin-bottom: 2rem;
                }

                .mobile-nav-link {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    display: block;
                    margin-bottom: 1rem;
                }

                .mobile-dropdown {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    padding-left: 1.5rem;
                    border-left: 3px solid var(--background-alt);
                }

                .mobile-sub-link {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    display: block;
                }

                .mobile-nested-dropdown {
                    padding-left: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    margin-bottom: 1.5rem;
                    border-left: 1px solid rgba(2, 48, 71, 0.1);
                }

                .mobile-nested-link {
                    font-size: 1rem;
                    color: var(--text);
padding: 0.4rem 0;
                    display: block;
                }

                .desktop-only {
                    display: flex;
                }

                @media (max-width: 1024px) {
                    .desktop-only {
                        display: none;
                    }
                    .mobile-toggle-btn {
                        display: block;
                    }
                }
            `})]})},zb="/assets/gem-yMJUU59S.png",Lb="/assets/cmmi%20logo-D4rcOpyI.png",Bg=({position:e="bottom",color:t="var(--background-alt)",flip:n=!1})=>{const r={position:"absolute",[e]:0,left:0,width:"100%",overflow:"hidden",lineHeight:0,transform:n?"scaleX(-1)":"none",zIndex:1};return o.jsx("div",{style:r,children:o.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",style:{position:"relative",display:"block",width:"calc(135% + 1.3px)",height:"80px"},children:o.jsx("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0V0Z",style:{fill:t}})})})},Db=()=>{const e=new Date().getFullYear();return o.jsxs("footer",{className:"footer-new",children:[o.jsx(Bg,{position:"top",color:"var(--white)",flip:!0}),o.jsxs("div",{className:"container footer-container",children:[o.jsxs("div",{className:"footer-grid",children:[o.jsxs("div",{className:"footer-col brand-col",children:[o.jsx(V,{to:"/",className:"footer-logo",children:o.jsx("img",{src:dl,alt:"Vir Softech"})}),o.jsx("p",{className:"footer-description",children:"Engineering the future through innovative Imaging, Computer Vision, and Enterprise Content Management solutions. Global excellence from Noida to Tokyo."}),o.jsxs("div",{className:"social-links",children:[o.jsx("a",{href:"https://in.linkedin.com/company/virsoftech",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"LinkedIn",children:o.jsx(Fx,{size:20})}),o.jsx("a",{href:"https://twitter.com/virsoftech",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Twitter",children:o.jsx(t1,{size:20})}),o.jsx("a",{href:"https://www.facebook.com/virsoftech.official/",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Facebook",children:o.jsx(Lx,{size:20})}),o.jsx("a",{href:"https://www.instagram.com/virsoftech/",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Instagram",children:o.jsx(Rx,{size:20})}),o.jsx("a",{href:"https://www.youtube.com/c/VirSoftech",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"YouTube",children:o.jsx(r1,{size:20})})]})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{className:"footer-title",children:"Solutions"}),o.jsxs("ul",{className:"footer-links",children:[o.jsx("li",{children:o.jsx("a",{href:"https://vsdox.com",target:"_blank",rel:"noopener noreferrer",children:"VsDox ECM"})}),o.jsx("li",{children:o.jsx("a",{href:"https://evalexam.com",target:"_blank",rel:"noopener noreferrer",children:"eVAL Education Suite"})}),o.jsx("li",{children:o.jsx(V,{to:"/solutions/print-product-engineering",children:"Print Engineering"})}),o.jsx("li",{children:o.jsx(V,{to:"/solutions/custom-product-engineering",children:"Custom Software"})}),o.jsx("li",{children:o.jsx(V,{to:"/solutions/design-artwork-automation",children:"Design Automation"})})]})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{className:"footer-title",children:"Company"}),o.jsxs("ul",{className:"footer-links",children:[o.jsx("li",{children:o.jsx(V,{to:"/about",children:"About Us"})}),o.jsx("li",{children:o.jsx(V,{to:"/careers",children:"Careers"})}),o.jsx("li",{children:o.jsx(V,{to:"/blog",children:"Our Blog"})}),o.jsx("li",{children:o.jsx(V,{to:"/contact",children:"Contact Us"})}),o.jsx("li",{children:o.jsx(V,{to:"/privacy",children:"Privacy Policy"})}),o.jsx("li",{children:o.jsx(V,{to:"/terms",children:"Terms & Conditions"})})]})]}),o.jsxs("div",{className:"footer-col contact-col",children:[o.jsx("h4",{className:"footer-title",children:"Contact Us"}),o.jsxs("div",{className:"contact-details",children:[o.jsxs("div",{className:"contact-item",children:[o.jsx(dc,{size:18,className:"contact-icon"}),o.jsxs("div",{children:[o.jsx("p",{className:"contact-label",children:"Email"}),o.jsx("a",{href:"mailto:corp@virsoftech.com",className:"contact-value",children:"corp@virsoftech.com"})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx(uh,{size:18,className:"contact-icon"}),o.jsxs("div",{children:[o.jsx("p",{className:"contact-label",children:"Phone"}),o.jsxs("div",{className:"contact-values-col",children:[o.jsx("a",{href:"tel:+919319275051",className:"contact-value",children:"+91-9319275051"}),o.jsx("a",{href:"tel:+919871258989",className:"contact-value",children:"+91-9871258989"})]})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx(lh,{size:18,className:"contact-icon"}),o.jsxs("div",{children:[o.jsx("p",{className:"contact-label",children:"Headquarters"}),o.jsx("p",{className:"contact-value",children:"A 306, The I Thum, Sector 62, Noida, UP 201309"})]})]})]}),o.jsxs("div",{className:"footer-certifications",children:[o.jsx("div",{className:"cert-card",children:o.jsx("img",{src:zb,alt:"GeM Logo"})}),o.jsx("div",{className:"cert-card",children:o.jsx("img",{src:Lb,alt:"CMMI ML3 Logo"})})]})]})]}),o.jsx("div",{className:"footer-bottom",children:o.jsxs("div",{className:"footer-bottom-content",children:[o.jsxs("p",{className:"copyright",children:["© ",e," Vir Softech Pvt. Ltd. All rights reserved."]}),o.jsxs("div",{className:"footer-bottom-links",children:[o.jsx(V,{to:"/terms",children:"Terms of Service"}),o.jsx(V,{to:"/privacy",children:"Privacy Policy"}),o.jsx(V,{to:"/sitemap",children:"Sitemap"})]})]})})]}),o.jsx("style",{jsx:!0,children:`
                .footer-new {
                    background: var(--primary);
                    color: var(--white);
                    padding: 100px 0 40px;
                    position: relative;
                }

                .footer-container {
                    position: relative;
                    z-index: 2;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 0.8fr 0.8fr 1.2fr;
                    gap: 3rem;
                    margin-bottom: 50px;
                }

                .footer-logo img {
                    height: 50px;
                    filter: brightness(0) invert(1);
                    margin-bottom: 2rem;
                }

                .footer-description {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 2.5rem;
                    max-width: 350px;
                }

                .social-links {
                    display: flex;
                    gap: 1.25rem;
                }

                .social-link {
                    width: 44px;
                    height: 44px;
                    border-radius: var(--radius-full);
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--white);
                    transition: var(--transition-normal);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .social-link:hover {
                    background: var(--accent);
                    color: var(--primary);
                    transform: translateY(-5px);
                    border-color: var(--accent);
                }

                .footer-title {
                    color: var(--white);
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    font-family: var(--font-heading);
                }

                .footer-links {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .footer-links a {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 1.05rem;
                    transition: var(--transition-normal);
                    font-weight: 500;
                }

                .footer-links a:hover {
                    color: var(--accent);
                    transform: translateX(8px);
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 2.5rem;
                }

                .contact-item {
                    display: flex;
                    gap: 1.25rem;
                }

                .contact-icon {
                    color: var(--accent);
                    flex-shrink: 0;
                    margin-top: 0.3rem;
                }

                .contact-label {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 4px;
                    font-weight: 700;
                }

                .contact-value {
                    color: var(--white);
                    font-size: 1rem;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .contact-values-col {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .footer-certifications {
                    display: flex;
                    gap: 1.25rem;
                }

                .cert-card {
                    background: rgba(255, 255, 255, 0.95);
                    padding: 0.6rem;
                    border-radius: var(--radius-md);
                    width: 110px;
                    height: 55px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                .cert-card:hover {
                    transform: scale(1.05);
                }

                .cert-card img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }

                .footer-bottom {
                    padding-top: 3rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .footer-bottom-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .copyright {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .footer-bottom-links {
                    display: flex;
                    gap: 2.5rem;
                }

                .footer-bottom-links a {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                    font-weight: 500;
                }

                .footer-bottom-links a:hover {
                    color: var(--accent);
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 4rem;
                    }
                }

                @media (max-width: 768px) {
                    .footer-new {
                        padding: 120px 0 40px;
                    }
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 3.5rem;
                    }
                    .footer-bottom-content {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `})]})},Ib=()=>{const{pathname:e}=wn();return w.useEffect(()=>{window.scrollTo(0,0)},[e]),null},Rb=()=>{const[e,t]=w.useState(!1),n=()=>{window.scrollY>300?t(!0):t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return w.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),o.jsxs(o.Fragment,{children:[o.jsx(Ya,{children:e&&o.jsx(L.button,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:r,className:"back-to-top-btn","aria-label":"Scroll to top",children:o.jsx(kx,{size:24})})}),o.jsx("style",{jsx:!0,children:`
                .back-to-top-btn {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: var(--gradient-accent);
                    color: white;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 10px 20px rgba(13, 148, 136, 0.3);
                    z-index: 999;
                    transition: box-shadow 0.3s ease;
                }

                .back-to-top-btn:hover {
                    box-shadow: 0 15px 25px rgba(13, 148, 136, 0.5);
                }

                @media (max-width: 768px) {
                    .back-to-top-btn {
                        bottom: 20px;
                        right: 20px;
                        width: 45px;
                        height: 45px;
                    }
                }
            `})]})},Vb=()=>o.jsxs("section",{className:"hero-premium",children:[o.jsx("div",{className:"hero-grid-bg"}),o.jsxs("div",{className:"hero-container",children:[o.jsxs("div",{className:"hero-content",children:[o.jsxs(L.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"hero-badge",children:[o.jsx("span",{className:"badge-dot"}),o.jsx("span",{className:"badge-text",children:"Pioneering Digital Transformation"})]}),o.jsxs(L.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"hero-title",children:["STRIDE to ",o.jsx("span",{className:"text-gradient-hero",children:"Success"})," ",o.jsx("br",{}),"with Vir Softech"]}),o.jsxs(L.p,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"hero-subtitle",children:["We deliver superior technology for revolutionizing ",o.jsx("strong",{children:"Imaging"}),",",o.jsx("strong",{children:" Digital"}),", and ",o.jsx("strong",{children:"Educational"})," transformation. Engineering robust solutions for global enterprises."]}),o.jsxs(L.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"hero-actions",children:[o.jsxs(V,{to:"/solutions",className:"btn btn-primary btn-glow",children:["Explore Solutions ",o.jsx(Jn,{size:18})]}),o.jsx(V,{to:"/about",className:"btn btn-outline-light",children:"Learn More"})]}),o.jsxs(L.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1},className:"hero-stats-row",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("h4",{className:"stat-num",children:"500+"}),o.jsx("p",{className:"stat-label",children:"Clients"})]}),o.jsx("div",{className:"stat-divider"}),o.jsxs("div",{className:"stat-item",children:[o.jsx("h4",{className:"stat-num",children:"10+"}),o.jsx("p",{className:"stat-label",children:"Years Exp"})]}),o.jsx("div",{className:"stat-divider"}),o.jsxs("div",{className:"stat-item",children:[o.jsx("h4",{className:"stat-num",children:"Global"}),o.jsx("p",{className:"stat-label",children:"Presence"})]})]})]}),o.jsx("div",{className:"hero-visual",children:o.jsxs("div",{className:"cards-wrapper",children:[o.jsxs(L.a,{href:"solutions/print-product-engineering",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},className:"floating-card card-1",children:[o.jsx("div",{className:"card-icon icon-purple",children:o.jsx(dh,{size:24})}),o.jsxs("div",{className:"card-info",children:[o.jsx("h5",{children:"Print Engineering"}),o.jsx("span",{children:"Innovative software solutions for the print industry."})]})]}),o.jsxs(L.a,{href:"https://vsdox.com",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.8},className:"floating-card card-2",children:[o.jsx("div",{className:"card-icon icon-blue",children:o.jsx(uc,{size:24})}),o.jsxs("div",{className:"card-info",children:[o.jsx("h5",{children:"VsDox ECM"}),o.jsx("span",{children:"Enterprise Document Management"})]})]}),o.jsxs(L.a,{href:"https://evalexam.com",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,delay:1},className:"floating-card card-3",children:[o.jsx("div",{className:"card-icon icon-teal",children:o.jsx(Ix,{size:24})}),o.jsxs("div",{className:"card-info",children:[o.jsx("h5",{children:"eVAL Suite"}),o.jsx("span",{children:"Examination Evaluation System"})]})]})]})})]})]}),Ob=()=>{const e=t=>{switch(t){case"enterprise-content-management":return o.jsx(zx,{size:32});case"eval-educational-solution-suite":return o.jsx(Px,{size:32});case"print-product-engineering":return o.jsx(Yx,{size:32});case"custom-product-engineering":return o.jsx(Ka,{size:32});case"design-artwork-automation":return o.jsx(Hx,{size:32});default:return o.jsx(Ka,{size:32})}};return o.jsxs("section",{className:"services-new",id:"services",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header-new",children:[o.jsx(L.span,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"badge-accent",children:"Our Core Expertise"}),o.jsxs(L.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:"section-title",children:["Comprehensive ",o.jsx("span",{className:"text-gradient",children:"Solutions"})," for ",o.jsx("br",{}),"Modern Enterprises"]}),o.jsx(L.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.3},className:"section-subtitle",children:"From intelligent content management to automated artwork generation, we engineer the tools that drive global business growth."})]}),o.jsx("div",{className:"services-grid-new",children:xi.map((t,n)=>o.jsx(L.div,{className:"service-card-new",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.1},children:o.jsxs("div",{className:"card-inner",children:[o.jsxs("div",{className:"card-icon-wrapper",children:[o.jsx("div",{className:"icon-bg"}),o.jsx("div",{className:"icon-main",children:e(t.slug)})]}),o.jsxs("div",{className:"card-content",children:[o.jsx("h3",{className:"card-title",children:t.title}),o.jsx("p",{className:"card-description",children:t.description}),o.jsx("ul",{className:"card-features",children:t.features.slice(0,3).map((r,i)=>o.jsxs("li",{children:[o.jsx(ve,{size:16,className:"feature-icon"}),o.jsx("span",{children:r.split(":")[0]})]},i))})]}),o.jsx("div",{className:"card-footer",children:t.externalLink?o.jsxs("a",{href:t.externalLink,target:"_blank",rel:"noopener noreferrer",className:"learn-more-link",children:["Explore Solution ",o.jsx(pd,{size:18})]}):o.jsxs(V,{to:`/solutions/${t.slug}`,className:"learn-more-link",children:["Explore Solution ",o.jsx(pd,{size:18})]})})]})},t.slug))}),o.jsx("div",{className:"services-cta",children:o.jsx(V,{to:"/solutions",className:"btn btn-primary",children:"View All Specialized Services"})})]}),o.jsx("style",{jsx:!0,children:`
                .services-new {
                    padding: var(--spacing-xl) 0;
                    background: var(--background-alt);
                    position: relative;
                }

                .section-header-new {
                    text-align: center;
                    margin-bottom: 5rem;
                }

                .badge-accent {
                    display: inline-block;
                    padding: 0.6rem 1.5rem;
                    background: rgba(33, 158, 188, 0.1);
                    color: var(--primary-light);
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1.5rem;
                }

                .section-title {
                    margin-bottom: 1.5rem;
                    color: var(--primary);
                }

                .section-subtitle {
                    max-width: 700px;
                    margin: 0 auto;
                    color: var(--text-muted);
                    font-size: 1.25rem;
                }

                .services-grid-new {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 3rem;
                    margin-bottom: 5rem;
                }

                .service-card-new {
                    background: var(--white);
                    border-radius: var(--radius-lg);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    transition: var(--transition-normal);
                    height: 100%;
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                }

                .service-card-new:hover {
                    transform: translateY(-12px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--accent);
                }

                .card-inner {
                    padding: 3rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card-icon-wrapper {
                    position: relative;
                    width: 72px;
                    height: 72px;
                    margin-bottom: 2.5rem;
                }

                .icon-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--primary);
                    opacity: 0.05;
                    border-radius: 20px;
                    transform: rotate(-12deg);
                    transition: var(--transition-normal);
                }

                .service-card-new:hover .icon-bg {
                    transform: rotate(0deg);
                    opacity: 0.15;
                    background: var(--accent);
                }

                .icon-main {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                }

                .service-card-new:hover .icon-main {
                    color: var(--accent-hover);
                }

                .card-title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-bottom: 1.25rem;
                    color: var(--primary);
                }

                .card-description {
                    color: var(--text-muted);
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 2.5rem;
                }

                .card-features {
                    list-style: none;
                    margin-bottom: 3rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .card-features li {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--text);
                }

                .feature-icon {
                    color: var(--accent);
                }

                .card-footer {
                    margin-top: auto;
                    padding-top: 2rem;
                    border-top: 1px solid var(--background-alt);
                }

                .learn-more-link {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-weight: 700;
                    color: var(--primary);
                    font-size: 1.05rem;
                }

                .learn-more-link:hover {
                    color: var(--accent);
                }

                .services-cta {
                    text-align: center;
                }

                @media (max-width: 768px) {
                    .services-grid-new {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .service-card-new {
                        max-width: 100%;
                    }
                    .card-inner {
                        padding: 2rem;
                    }
                }
            `})]})},Fb=()=>{const e=[{icon:o.jsx(Ga,{size:32}),title:"Strategic Consulting",desc:"We align technology with your business goals to ensure long-term scalability and success.",color:"var(--primary)"},{icon:o.jsx(pc,{size:32}),title:"Rapid Innovation",desc:"Agile development cycles that turn complex requirements into functional products faster.",color:"var(--accent)"},{icon:o.jsx(fc,{size:32}),title:"Enterprise Security",desc:"Robust security protocols ensuring your data remains protected and compliant with global standards.",color:"var(--primary)"},{icon:o.jsx(Dx,{size:32}),title:"Global Excellence",desc:"Leveraging synergies between our India and Japan offices to deliver world-class solutions.",color:"var(--accent)"},{icon:o.jsx(Ax,{size:32}),title:"Advanced Tech Stack",desc:"Expertise in AI, Computer Vision, and Cloud-native architectures for future-ready systems.",color:"var(--primary)"},{icon:o.jsx(Nx,{size:32}),title:"Data-Driven Insights",desc:"Transforming raw data into actionable intelligence through advanced analytics and reporting.",color:"var(--accent)"}];return o.jsxs("section",{className:"advantage-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header-new",children:[o.jsx("span",{className:"badge-accent",children:"The Vir Softech Edge"}),o.jsxs("h2",{className:"section-title",children:["Why Global Leaders ",o.jsx("br",{}),"Trust ",o.jsx("span",{className:"text-gradient",children:"Our Expertise"})]}),o.jsx("p",{className:"section-subtitle",children:"We don't just build software; we engineer competitive advantages that help you stay ahead in an ever-evolving digital landscape."})]}),o.jsx("div",{className:"advantage-grid",children:e.map((t,n)=>o.jsxs(L.div,{className:"advantage-card glass",initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:n*.1},children:[o.jsxs("div",{className:"advantage-icon-box",style:{color:t.color},children:[t.icon,o.jsx("div",{className:"icon-glow",style:{background:t.color}})]}),o.jsx("h3",{className:"advantage-title",children:t.title}),o.jsx("p",{className:"advantage-desc",children:t.desc})]},n))}),o.jsx("div",{className:"stride-highlight",children:o.jsxs(L.div,{className:"stride-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[o.jsxs("div",{className:"stride-content",children:[o.jsx("h3",{children:"STRIDE to Success"}),o.jsx("p",{children:"Our core philosophy of Strategic Technology Revolutionizing Imaging, Digital, and Education."})]}),o.jsx("div",{className:"stride-cta",children:o.jsx("button",{className:"btn btn-primary",children:"Download Corporate Brochure"})})]})})]}),o.jsx("style",{jsx:!0,children:`
                .advantage-section {
                    padding: var(--spacing-xl) 0;
                    background: var(--background);
                    color: var(--text);
                    position: relative;
                    overflow: hidden;
                }

                .advantage-section .section-title {
                    color: var(--text) !important;
                }

                .advantage-section .text-gradient {
                    background: var(--gradient-primary) !important;
                    -webkit-background-clip: text !important;
                    background-clip: text !important;
                    color: transparent !important;
                    display: inline !important;
                }

                .advantage-section .section-subtitle {
                    color: var(--text-muted) !important;
                    opacity: 0.95 !important;
                    font-weight: 500 !important;
                }

                .badge-accent {
                    display: inline-block;
                    padding: 0.5rem 1.25rem;
                    background: rgba(255, 183, 3, 0.15);
                    color: #FB8500;
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 183, 3, 0.3);
                }

                .advantage-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 5rem;
                }

                .advantage-card {
                    padding: 3rem 2rem;
                    border-radius: var(--radius-xl);
                    background: var(--white);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    box-shadow: var(--shadow-md);
                    transition: var(--transition-normal);
                    text-align: center;
                }

                .advantage-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--accent);
                    box-shadow: var(--shadow-xl);
                }

                .advantage-icon-box {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .icon-glow {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    filter: blur(25px);
                    opacity: 0.6;
                    z-index: 1;
                    border-radius: 50%;
                }

                .advantage-title {
                    color: var(--text);
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }

                .advantage-desc {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.7;
                }

                .stride-highlight {
                    margin-top: 4rem;
                }

                .stride-card {
                    background: var(--gradient-primary);
                    padding: 3rem 4rem;
                    border-radius: var(--radius-xl);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 3rem;
                    box-shadow: 0 20px 40px rgba(2, 48, 71, 0.3);
                }

                .stride-content h3 {
                    color: white;
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                }

                .stride-content p {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 1.1rem;
                    margin: 0;
                }

                .stride-cta .btn {
                    background: white;
                    color: var(--secondary);
                    white-space: nowrap;
                }

                .stride-cta .btn:hover {
                    background: var(--primary);
                    color: white;
                }

                @media (max-width: 1024px) {
                    .stride-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 3rem 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .advantage-grid {
                        grid-template-columns: 1fr;
                    }
                    .stride-content h3 {
                        font-size: 2rem;
                    }
                }
            `})]})},Bb=()=>{const e=[{label:"Years of Excellence",value:"10+",icon:o.jsx(Sx,{className:"stat-icon"})},{label:"Global Clients",value:"200+",icon:o.jsx(vd,{className:"stat-icon"})},{label:"Projects Delivered",value:"500+",icon:o.jsx(pc,{className:"stat-icon"})}],t=[{title:"Innovation First",description:"We constantly push the boundaries of what's possible in imaging and digital transformation.",icon:o.jsx(Ox,{size:24})},{title:"Integrity",description:"Building trust through transparency and unwavering commitment to quality.",icon:o.jsx(Jx,{size:24})},{title:"Customer Success",description:"Our solutions are engineered to ensure our partners achieve their strategic goals.",icon:o.jsx(vd,{size:24})}];return o.jsxs("section",{className:"about-section",id:"about",children:[o.jsx("div",{className:"container",children:o.jsxs("div",{className:"about-grid",children:[o.jsxs(L.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"about-content",children:[o.jsx("span",{className:"badge-primary",children:"Our Story"}),o.jsxs("h2",{className:"section-title",children:["Bridging ",o.jsx("span",{className:"text-accent",children:"Technology"})," and Vision"]}),o.jsxs("p",{className:"about-text",children:["Founded in 2015, Vir Softech has emerged as a powerhouse in",o.jsx("strong",{children:" Imaging"}),", ",o.jsx("strong",{children:"Computer Vision"}),", and",o.jsx("strong",{children:" Enterprise Content Management"}),"."]}),o.jsx("p",{className:"about-text",children:"With offices in India and Japan, we bridge the gap between complex engineering challenges and intuitive digital solutions, serving Fortune 500 companies and government institutions alike."}),o.jsx("div",{className:"stats-grid",children:e.map((n,r)=>o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon-wrapper",children:n.icon}),o.jsxs("div",{className:"stat-info",children:[o.jsx("h3",{className:"stat-value",children:n.value}),o.jsx("p",{className:"stat-label",children:n.label})]})]},r))})]}),o.jsxs(L.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"about-image-container",children:[o.jsxs("div",{className:"main-image-wrapper",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",alt:"Team Collaboration",className:"about-main-image"}),o.jsx("div",{className:"image-accent-blob"})]}),o.jsx("div",{className:"values-overlay-grid",children:t.map((n,r)=>o.jsxs("div",{className:"value-mini-card glass",children:[o.jsx("div",{className:"value-icon",children:n.icon}),o.jsxs("div",{children:[o.jsx("h4",{children:n.title}),o.jsx("p",{children:n.description})]})]},r))})]})]})}),o.jsx(Bg,{position:"bottom",color:"var(--background-alt)"}),o.jsx("style",{jsx:!0,children:`
                .about-section {
                    padding: var(--spacing-xl) 0 160px;
                    background: var(--white);
                    position: relative;
                    overflow: hidden;
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }

                .badge-primary {
                    display: inline-block;
                    padding: 0.6rem 1.5rem;
                    background: rgba(33, 158, 188, 0.1);
                    color: var(--primary-light);
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 2rem;
                }

                .section-title {
                    margin-bottom: 2rem;
                    color: var(--primary);
                    font-size: clamp(2.5rem, 5vw, 3.5rem);
                    line-height: 1.1;
                }

                .text-accent {
                    color: var(--accent);
                }

                .about-text {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 2rem;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    margin-top: 4rem;
                }

                .stat-card {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    padding: 2rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-lg);
                    transition: var(--transition-normal);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                }

                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--accent);
                }

                .stat-icon-wrapper {
                    color: var(--primary);
                }

                .stat-value {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 0.25rem;
                    font-family: var(--font-heading);
                }

                .stat-label {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    font-weight: 600;
                }

                .about-image-container {
                    position: relative;
                }

                .main-image-wrapper {
                    position: relative;
                    z-index: 2;
                }

                .about-main-image {
                    width: 100%;
                    height: 550px;
                    object-fit: cover;
                    border-radius: var(--radius-xl);
                    box-shadow: var(--shadow-xl);
                }

                .image-accent-blob {
                    position: absolute;
                    top: -30px;
                    right: -30px;
                    width: 200px;
                    height: 200px;
                    background: var(--accent);
                    opacity: 0.2;
                    border-radius: 50%;
                    z-index: -1;
                    filter: blur(40px);
                }

                .values-overlay-grid {
                    position: absolute;
                    bottom: -40px;
                    left: -40px;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    max-width: 380px;
                    z-index: 10;
                }

                .value-mini-card {
                    display: flex;
                    gap: 1.25rem;
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(20px);
                    box-shadow: var(--shadow-lg);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                }

                .value-icon {
                    width: 48px;
                    height: 48px;
                    background: var(--primary);
                    color: white;
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .value-mini-card h4 {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 0.4rem;
                }

                .value-mini-card p {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    margin: 0;
                    line-height: 1.5;
                }

                @media (max-width: 1024px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 5rem;
                    }
                    .about-image-container {
                        max-width: 600px;
                        margin: 0 auto;
                    }
                    .values-overlay-grid {
                        position: static;
                        margin-top: 3rem;
                        max-width: 100%;
                    }
                }

                @media (max-width: 640px) {
                    .stats-grid {
                        grid-template-columns: 1fr;
                    }
                    .about-main-image {
                        height: 400px;
                    }
                }
            `})]})},Ub="/assets/Atmiya%20University-DrZGkebP.png",Wb=Object.freeze(Object.defineProperty({__proto__:null,default:Ub},Symbol.toStringTag,{value:"Module"})),$b="/assets/Council%20of%20Scientific%20and%20Industrial%20Research-hbyBegUv.png",Hb=Object.freeze(Object.defineProperty({__proto__:null,default:$b},Symbol.toStringTag,{value:"Module"})),Kb="/assets/DAV%20School-Out_H-SG.avif",Gb=Object.freeze(Object.defineProperty({__proto__:null,default:Kb},Symbol.toStringTag,{value:"Module"})),Yb="/assets/IIT%20Goa-Dhi6IS5g.png",qb=Object.freeze(Object.defineProperty({__proto__:null,default:Yb},Symbol.toStringTag,{value:"Module"})),Xb="/assets/IIT_Bhubaneswar_Logo-1-BvPKRhNi.png",Qb=Object.freeze(Object.defineProperty({__proto__:null,default:Xb},Symbol.toStringTag,{value:"Module"})),Zb="/assets/Indian%20Post-Cgf2RkVs.png",Jb=Object.freeze(Object.defineProperty({__proto__:null,default:Zb},Symbol.toStringTag,{value:"Module"})),ek="/assets/Indian%20Railway-lEUww2Kd.png",tk=Object.freeze(Object.defineProperty({__proto__:null,default:ek},Symbol.toStringTag,{value:"Module"})),nk="/assets/Jawahar%20Navodaya%20Vidyalaya-D_q_UGop.png",rk=Object.freeze(Object.defineProperty({__proto__:null,default:nk},Symbol.toStringTag,{value:"Module"})),ik="/assets/Lady%20Hardinge%20Medical%20College-B2Vit6W1.png",sk=Object.freeze(Object.defineProperty({__proto__:null,default:ik},Symbol.toStringTag,{value:"Module"})),ok="/assets/NIT%20Goa--g0VntX0.png",ak=Object.freeze(Object.defineProperty({__proto__:null,default:ok},Symbol.toStringTag,{value:"Module"})),lk="/assets/National%20Cadet%20Corps-DGnfGLZS.png",ck=Object.freeze(Object.defineProperty({__proto__:null,default:lk},Symbol.toStringTag,{value:"Module"})),uk="/assets/National%20Forensic%20Sciences%20University-_G9xdGbq.png",dk=Object.freeze(Object.defineProperty({__proto__:null,default:uk},Symbol.toStringTag,{value:"Module"})),fk="/assets/Nuclear%20Power%20Corporation%20Of%20India%20Ltd-BXlB__P7.png",pk=Object.freeze(Object.defineProperty({__proto__:null,default:fk},Symbol.toStringTag,{value:"Module"})),mk="/assets/OASIS%20International%20School-NlEaaZIx.png",hk=Object.freeze(Object.defineProperty({__proto__:null,default:mk},Symbol.toStringTag,{value:"Module"})),gk="/assets/Parul%20University-BmC3NPpW.png",vk=Object.freeze(Object.defineProperty({__proto__:null,default:gk},Symbol.toStringTag,{value:"Module"})),yk="/assets/RAJIV%20GANDHI%20NATIONAL%20AVIATION%20UNIVERSITY-747mi23x.png",xk=Object.freeze(Object.defineProperty({__proto__:null,default:yk},Symbol.toStringTag,{value:"Module"})),wk="/assets/RMS-Bn4Du4XR.jpg",jk=Object.freeze(Object.defineProperty({__proto__:null,default:wk},Symbol.toStringTag,{value:"Module"})),bk="/assets/RPS%20International%20School-leUe-s4o.png",kk=Object.freeze(Object.defineProperty({__proto__:null,default:bk},Symbol.toStringTag,{value:"Module"})),Sk="/assets/Sainik%20School-Cdy7DnPQ.png",Nk=Object.freeze(Object.defineProperty({__proto__:null,default:Sk},Symbol.toStringTag,{value:"Module"})),Pk="/assets/Silver%20Oak%20University-YVV8IqwT.png",Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Pk},Symbol.toStringTag,{value:"Module"})),Tk="/assets/Union%20Public%20Service%20Commission-B5-L3w-G.png",Ek=Object.freeze(Object.defineProperty({__proto__:null,default:Tk},Symbol.toStringTag,{value:"Module"})),_k="/assets/United%20University-BQYOuXDH.png",Mk=Object.freeze(Object.defineProperty({__proto__:null,default:_k},Symbol.toStringTag,{value:"Module"})),Ak="/assets/aakash%20logo-rhiT8kpZ.png",zk=Object.freeze(Object.defineProperty({__proto__:null,default:Ak},Symbol.toStringTag,{value:"Module"})),Lk="/assets/career%20launcher-D-c3FpFx.png",Dk=Object.freeze(Object.defineProperty({__proto__:null,default:Lk},Symbol.toStringTag,{value:"Module"})),Ik="/assets/city%20montesarri%20school-AJ1L3Nev.jpg",Rk=Object.freeze(Object.defineProperty({__proto__:null,default:Ik},Symbol.toStringTag,{value:"Module"})),Vk="/assets/dps-KImhiC5Y.png",Ok=Object.freeze(Object.defineProperty({__proto__:null,default:Vk},Symbol.toStringTag,{value:"Module"})),Fk="/assets/narayana-BnUQMCj_.png",Bk=Object.freeze(Object.defineProperty({__proto__:null,default:Fk},Symbol.toStringTag,{value:"Module"})),Uk="/assets/nios-Dj5BJVJJ.png",Wk=Object.freeze(Object.defineProperty({__proto__:null,default:Uk},Symbol.toStringTag,{value:"Module"})),$k="/assets/pes-CncRfeJ4.jpg",Hk=Object.freeze(Object.defineProperty({__proto__:null,default:$k},Symbol.toStringTag,{value:"Module"})),Kk="/assets/physics%20wallah-C7pbK_pI.webp",Gk=Object.freeze(Object.defineProperty({__proto__:null,default:Kk},Symbol.toStringTag,{value:"Module"})),Yk="/assets/shaheen-C6Yd7GEe.png",qk=Object.freeze(Object.defineProperty({__proto__:null,default:Yk},Symbol.toStringTag,{value:"Module"})),Xk="/assets/sri%20chaitanya-J-2yY3GQ.png",Qk=Object.freeze(Object.defineProperty({__proto__:null,default:Xk},Symbol.toStringTag,{value:"Module"})),Zk=Object.assign({"../assets/clients/Atmiya University.png":Wb,"../assets/clients/Council of Scientific and Industrial Research.png":Hb,"../assets/clients/DAV School.avif":Gb,"../assets/clients/IIT Goa.png":qb,"../assets/clients/IIT_Bhubaneswar_Logo-1.png":Qb,"../assets/clients/Indian Post.png":Jb,"../assets/clients/Indian Railway.png":tk,"../assets/clients/Jawahar Navodaya Vidyalaya.png":rk,"../assets/clients/Lady Hardinge Medical College.png":sk,"../assets/clients/NIT Goa.png":ak,"../assets/clients/National Cadet Corps.png":ck,"../assets/clients/National Forensic Sciences University.png":dk,"../assets/clients/Nuclear Power Corporation Of India Ltd.png":pk,"../assets/clients/OASIS International School.png":hk,"../assets/clients/Parul University.png":vk,"../assets/clients/RAJIV GANDHI NATIONAL AVIATION UNIVERSITY.png":xk,"../assets/clients/RMS.jpg":jk,"../assets/clients/RPS International School.png":kk,"../assets/clients/Sainik School.png":Nk,"../assets/clients/Silver Oak University.png":Ck,"../assets/clients/Union Public Service Commission.png":Ek,"../assets/clients/United University.png":Mk,"../assets/clients/aakash logo.png":zk,"../assets/clients/career launcher.png":Dk,"../assets/clients/city montesarri school.jpg":Rk,"../assets/clients/dps.png":Ok,"../assets/clients/narayana.png":Bk,"../assets/clients/nios.png":Wk,"../assets/clients/pes.jpg":Hk,"../assets/clients/physics wallah.webp":Gk,"../assets/clients/shaheen.png":qk,"../assets/clients/sri chaitanya.png":Qk}),Df=Object.values(Zk).map(e=>e.default),Jk=()=>o.jsxs("section",{className:"clients-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"clients-header",children:[o.jsx("p",{className:"clients-label",children:"Trusted by Industry Pioneers"}),o.jsx("div",{className:"clients-divider"})]}),o.jsx("div",{className:"slider-container",children:o.jsx("div",{className:"logo-track",children:[...Df,...Df].map((e,t)=>o.jsx("div",{className:"logo-slide",children:o.jsx("img",{src:e,alt:`Client ${t}`})},t))})}),o.jsxs("div",{className:"trust-metrics",children:[o.jsxs("div",{className:"metric-item",children:[o.jsx("span",{className:"metric-value",children:"500+"}),o.jsx("span",{className:"metric-label",children:"Successful Deployments"})]}),o.jsxs("div",{className:"metric-item",children:[o.jsx("span",{className:"metric-value",children:"250M+"}),o.jsx("span",{className:"metric-label",children:"Documents Processed"})]}),o.jsxs("div",{className:"metric-item",children:[o.jsx("span",{className:"metric-value",children:"99.9%"}),o.jsx("span",{className:"metric-label",children:"Client Satisfaction"})]})]})]}),o.jsx("style",{jsx:!0,children:`
                .clients-section {
                    padding: var(--spacing-xl) 0;
                    background: var(--white);
                    position: relative;
                    overflow: hidden;
                }

                .clients-header {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    margin-bottom: 5rem;
                }

                .clients-label {
                    white-space: nowrap;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .clients-divider {
                    height: 2px;
                    background: var(--background-alt);
                    flex: 1;
                    border-radius: var(--radius-full);
                }

                /* Slider Styles */
                .slider-container {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    padding: 40px 0;
                    margin-bottom: 6rem;
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }

                .logo-track {
                    display: flex;
                    width: max-content;
                    animation: scroll 80s linear infinite;
                    align-items: center;
                }

                .logo-track:hover {
                    animation-play-state: paused;
                }

                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .logo-slide {
                    flex-shrink: 0;
                    width: 200px;
                    height: 120px;
                    margin: 0 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    background: var(--background-alt);
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                }

                .logo-slide:hover {
                    transform: scale(1.05) translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    background: var(--white);
                }

                .logo-slide img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    filter: grayscale(1);
                    opacity: 0.7;
                    transition: all 0.3s ease;
                }

                .logo-slide:hover img {
                    filter: grayscale(0);
                    opacity: 1;
                }

                .trust-metrics {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 3rem;
                    text-align: center;
                    padding: 5rem 2rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-xl);
                }

                .metric-value {
                    display: block;
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    font-family: var(--font-heading);
                    margin-bottom: 0.5rem;
                    letter-spacing: -1px;
                }

                .metric-label {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .trust-metrics {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                        padding: 3rem 1.5rem;
                    }
                    .logo-slide {
                        width: 160px;
                        height: 100px;
                        margin: 0 20px;
                    }
                    .metric-value {
                        font-size: 2.75rem;
                    }
                }
            `})]}),Ug=()=>{const[e,t]=w.useState({name:"",email:"",subject:"",message:""}),[n,r]=w.useState({type:"",message:""}),i=a=>{t({...e,[a.target.name]:a.target.value})},s=async a=>{a.preventDefault(),r({type:"sending",message:"Sending message..."});try{(await fetch("https://formsubmit.co/ajax/corp@virsoftech.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e.name,email:e.email,subject:e.subject,message:e.message,_subject:"New Website Enquiry from "+e.name})})).ok?(r({type:"success",message:"Message sent successfully! Our team will contact you shortly."}),t({name:"",email:"",subject:"",message:""})):r({type:"error",message:"Failed to send message. Please try again later."})}catch{r({type:"error",message:"An error occurred. Please try again or email us directly."})}};return o.jsxs("section",{className:"contact-home",id:"contact",children:[o.jsx("div",{className:"container",children:o.jsxs("div",{className:"contact-grid-wrapper",children:[o.jsxs(L.div,{className:"contact-info-col",initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[o.jsx("span",{className:"badge-accent",children:"Get In Touch"}),o.jsxs("h2",{className:"section-title",children:["Let's Build the ",o.jsx("br",{}),o.jsx("span",{className:"text-gradient",children:"Future Together"})]}),o.jsx("p",{className:"contact-intro",children:"Ready to transform your digital ecosystem? Our experts are here to help you navigate the complexities of imaging and automation."}),o.jsxs("div",{className:"contact-cards-grid",children:[o.jsxs("div",{className:"info-card-small",children:[o.jsx("div",{className:"card-icon",children:o.jsx(dc,{size:20})}),o.jsxs("div",{className:"card-text",children:[o.jsx("p",{className:"label",children:"General Inquiries"}),o.jsx("p",{className:"value",children:"corp@virsoftech.com"})]})]}),o.jsxs("div",{className:"info-card-small",children:[o.jsx("div",{className:"card-icon",children:o.jsx(uh,{size:20})}),o.jsxs("div",{className:"card-text",children:[o.jsx("p",{className:"label",children:"Call Us"}),o.jsx("p",{className:"value",children:"+91-9871258989"})]})]})]}),o.jsxs("div",{className:"locations-wrapper",children:[o.jsxs("div",{className:"location-item",children:[o.jsxs("div",{className:"loc-header",children:[o.jsx(Ms,{size:18,className:"text-secondary"}),o.jsx("h4",{children:"India Headquarters"})]}),o.jsx("p",{children:"A-306, The I Thum, Sector 62, Noida, UP - 201301"})]}),o.jsxs("div",{className:"location-item",children:[o.jsxs("div",{className:"loc-header",children:[o.jsx(Ms,{size:18,className:"text-accent"}),o.jsx("h4",{children:"Japan Operations"})]}),o.jsx("p",{children:"Tokyo, Japan - Serving our East Asian partners with precision."})]})]})]}),o.jsx(L.div,{className:"contact-form-col",initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},children:o.jsxs("form",{className:"contact-form-premium card",onSubmit:s,children:[o.jsxs("div",{className:"form-header",children:[o.jsx(ch,{size:24,className:"text-secondary"}),o.jsx("h3",{children:"Send us a Message"})]}),o.jsxs("div",{className:"form-grid-row",children:[o.jsxs("div",{className:"form-group-new",children:[o.jsx("label",{children:"Full Name"}),o.jsx("input",{type:"text",name:"name",value:e.name,onChange:i,placeholder:"John Doe",required:!0})]}),o.jsxs("div",{className:"form-group-new",children:[o.jsx("label",{children:"Email Address"}),o.jsx("input",{type:"email",name:"email",value:e.email,onChange:i,placeholder:"john@company.com",required:!0})]})]}),o.jsxs("div",{className:"form-group-new",children:[o.jsx("label",{children:"Subject"}),o.jsx("input",{type:"text",name:"subject",value:e.subject,onChange:i,placeholder:"How can we help?",required:!0})]}),o.jsxs("div",{className:"form-group-new",children:[o.jsx("label",{children:"Message"}),o.jsx("textarea",{name:"message",value:e.message,onChange:i,rows:"5",placeholder:"Tell us about your project requirements...",required:!0})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary w-full",children:["Send Message ",o.jsx(qx,{size:18})]}),n.message&&o.jsx(L.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`form-status ${n.type}`,children:n.message})]})})]})}),o.jsx("style",{jsx:!0,children:`
                .contact-home {
                    padding: var(--spacing-xl) 0;
                    background: var(--white);
                    position: relative;
                    overflow: hidden;
                }

                .contact-grid-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }

                .contact-info-col {
                    max-width: 500px;
                }

                .contact-intro {
                    font-size: 1.15rem;
                    color: var(--text-muted);
                    margin-bottom: 3rem;
                    line-height: 1.6;
                }

                .contact-cards-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                .info-card-small {
                    padding: 1.5rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-lg);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .card-icon {
                    width: 40px;
                    height: 40px;
                    background: var(--white);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                    box-shadow: var(--shadow-sm);
                }

                .card-text .label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-light);
                    text-transform: uppercase;
                    margin-bottom: 2px;
                }

                .card-text .value {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--primary);
                }

                .locations-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .location-item {
                    padding-left: 1.5rem;
                    border-left: 3px solid var(--background-alt);
                }

                .loc-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.5rem;
                }

                .loc-header h4 {
                    font-size: 1.1rem;
                    margin: 0;
                }

                .location-item p {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    margin: 0;
                }

                .contact-form-premium {
                    padding: 3rem;
                    border-radius: var(--radius-xl);
                    box-shadow: var(--shadow-xl);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                }

                .form-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2.5rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--background-alt);
                }

                .form-header h3 {
                    font-size: 1.5rem;
                    margin: 0;
                }

                .form-grid-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group-new {
                    margin-bottom: 1.5rem;
                }

                .form-group-new label {
                    display: block;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .form-group-new input, 
                .form-group-new textarea {
                    width: 100%;
                    padding: 0.85rem 1rem;
                    background: var(--background-alt);
                    border: 1px solid transparent;
                    border-radius: var(--radius-md);
                    font-family: inherit;
                    font-size: 0.95rem;
                    transition: var(--transition-fast);
                    outline: none;
                }

                .form-group-new input:focus, 
                .form-group-new textarea:focus {
                    background: var(--white);
                    border-color: var(--secondary);
                    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
                }

                .form-status {
                    margin-top: 1.5rem;
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    font-size: 0.9rem;
                    text-align: center;
                }

                .form-status.success {
                    background: rgba(16, 185, 129, 0.1);
                    color: #065f46;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }

                .form-status.error {
                    background: rgba(239, 68, 68, 0.1);
                    color: #991b1b;
                    border: 1px solid rgba(239, 68, 68, 0.2);
                }

                .form-status.sending {
                    background: rgba(59, 130, 246, 0.1);
                    color: #1e40af;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                }

                @media (max-width: 1024px) {
                    .contact-grid-wrapper {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .contact-info-col {
                        max-width: 100%;
                    }
                }

                @media (max-width: 640px) {
                    .form-grid-row {
                        grid-template-columns: 1fr;
                    }
                    .contact-form-premium {
                        padding: 2rem 1.5rem;
                    }
                }
            `})]})},eS=()=>o.jsxs(o.Fragment,{children:[o.jsx("section",{id:"home",children:o.jsx(Vb,{})}),o.jsx("section",{id:"services",children:o.jsx(Ob,{})}),o.jsx(Fb,{}),o.jsx("section",{id:"about",children:o.jsx(Bb,{})}),o.jsx(Jk,{}),o.jsx(Ug,{})]}),tt=({title:e,subtitle:t,bgImage:n})=>o.jsxs("section",{className:"internal-hero",children:[o.jsxs("div",{className:"hero-background",children:[o.jsx("div",{className:"hero-overlay"}),o.jsx("img",{src:n||"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop",alt:e,className:"hero-img"})]}),o.jsx("div",{className:"container hero-container",children:o.jsxs(L.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"hero-content-internal",children:[o.jsx("h1",{className:"internal-title",children:e}),t&&o.jsx("p",{className:"internal-subtitle",children:t}),o.jsx("div",{className:"hero-divider"})]})}),o.jsx("style",{jsx:!0,children:`
                .internal-hero {
                    position: relative;
                    padding: 180px 0 100px;
                    background: var(--primary);
                    color: white;
                    overflow: hidden;
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .hero-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.5;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(0deg, var(--primary) 0%, rgba(15, 23, 42, 0.6) 100%);
                    z-index: 2;
                }

                .hero-container {
                    position: relative;
                    z-index: 10;
                }

                .hero-content-internal {
                    max-width: 800px;
                }

                .internal-title {
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 900;
                    color: white;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }

                .internal-subtitle {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }

                .hero-divider {
                    width: 80px;
                    height: 4px;
                    background: var(--gradient-accent);
                    border-radius: var(--radius-full);
                }

                @media (max-width: 768px) {
                    .internal-hero {
                        padding: 140px 0 80px;
                        text-align: center;
                    }
                    .hero-divider {
                        margin: 0 auto;
                    }
                }
            `})]}),tS=()=>{const e=[{icon:o.jsx(pc,{size:32}),title:"Innovation First",desc:"We constantly push the boundaries of what's possible with Imaging and AI."},{icon:o.jsx(fc,{size:32}),title:"Trust & Integrity",desc:"Building long-term partnerships through transparency and reliable engineering."},{icon:o.jsx(Ga,{size:32}),title:"Customer Centric",desc:"Your business challenges are our primary focus. We engineer for your success."}],t=[{year:"2025",event:"Achieved CMMI Level 3 (Software Development), eVAL OMR deployed across 1000 locations in India for large-scale defence sector assessments, emerging as one of the most widely adopted OMR evaluation solutions in the country."},{year:"2024",event:"Delivered digital repository for Indian Pharmacopoeia Commission (Ministry of Health) - https://iponline.ipc.gov.in/jspui, implemented NPS workflow for a largest POP in India, executed nationwide school leaving exam evaluation in Africa using eVAL OMR."},{year:"2023",event:"Implemented Paperless Court solutions and Document Management solutions across multiple High Courts & District Courts, delivered Deccan Virasat digital platform - https://virasat.dcpune.ac.in , conducted large-scale school assessments (40 lakh students) in Nigeria using eVAL OMR."},{year:"2022",event:"Delivered IIC DigiLib digital repository – https://digilib.iicdelhi.in/jspui/ , successfully evaluated 30 lakh OMR sheets for a major education board in India."},{year:"2021",event:"Implemented headless DMS for one of India’s largest private life insurance companies, eVAL OMR used by the United Nations for successfully evaluating nationwide school assessments."},{year:"2020",event:"Launched eVAL CBT platform, conducted CBT exams for a most prestigious Dental College in India."},{year:"2019",event:"Implemented enterprise DMS for the world’s largest two-wheeler manufacturing company."},{year:"2018",event:"Conducted large-scale census education survey for a major Indian state using eVAL OMR."},{year:"2017",event:"Deployed eVAL OMR across 600+ districts in India, enabling release of NAS 2017 results within one month."},{year:"2016",event:"Launched the eVAL product suite in the market."},{year:"2015",event:"Company incorporated to deliver innovative software solutions."}];return o.jsxs("div",{className:"page-about-full",children:[o.jsx(tt,{title:"Engineering the Future",subtitle:"We are a global technology powerhouse specializing in Imaging, Computer Vision, and Digital Transformation.",bgImage:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"}),o.jsx("section",{className:"section about-story",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"story-grid",children:[o.jsxs(L.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"story-text",children:[o.jsx("span",{className:"badge-accent",children:"Our Story"}),o.jsxs("h2",{className:"section-title",children:["A Journey of ",o.jsx("span",{className:"text-gradient",children:"Technological Excellence"})]}),o.jsx("p",{className:"lead-text",children:"Vir Softech was founded with a singular mission: to simplify complex enterprise content ecosystems through intelligent automation."}),o.jsx("p",{children:"What started as a boutique engineering firm in New Delhi has evolved into a global innovation hub. Today, we serve institutional and enterprise clients across three continents, delivering solutions that are both high-performing and cost-efficient."}),o.jsxs("p",{children:["Our unique presence in both ",o.jsx("strong",{children:"India"})," and ",o.jsx("strong",{children:"Japan"})," allows us to combine the meticulous quality standards of Japanese engineering with the vast technological scale of the Indian software ecosystem."]})]}),o.jsx(L.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"story-visual",children:o.jsxs("div",{className:"mission-card-premium card",children:[o.jsx("h3",{children:"Our Mission"}),o.jsx("p",{children:"To empower global enterprises with intelligent, scalable, and secure technology products that automate the complex and simplify the digital."}),o.jsx("div",{className:"mission-icon",children:o.jsx(Ga,{size:48,className:"text-secondary"})})]})})]})})}),o.jsx("section",{className:"section bg-alt",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header-new text-center",children:[o.jsxs("h2",{className:"section-title",children:["Our ",o.jsx("span",{className:"text-gradient",children:"Core Values"})]}),o.jsx("p",{className:"section-subtitle",children:"The principles that guide every line of code we write."})]}),o.jsx("div",{className:"values-grid-full",children:e.map((n,r)=>o.jsxs(L.div,{className:"value-card-full card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:r*.1},children:[o.jsx("div",{className:"value-icon-box",children:n.icon}),o.jsx("h3",{children:n.title}),o.jsx("p",{children:n.desc})]},r))})]})}),o.jsx("section",{className:"section about-timeline-modern",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header-new text-center",children:[o.jsx("span",{className:"badge-accent",children:"Our Evolution"}),o.jsxs("h2",{className:"section-title",children:["Milestones of ",o.jsx("span",{className:"text-gradient",children:"Impact"})]}),o.jsx("p",{className:"section-subtitle",children:"A decade of engineering excellence and digital transformation."})]}),o.jsxs("div",{className:"modern-timeline",children:[o.jsx("div",{className:"timeline-line"}),t.map((n,r)=>o.jsxs(L.div,{className:`timeline-block ${r%2===0?"left":"right"}`,initial:{opacity:0,x:r%2===0?-50:50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,delay:.1},children:[o.jsxs("div",{className:"timeline-marker",children:[o.jsx("div",{className:"marker-dot"}),o.jsx("div",{className:"marker-year",children:n.year})]}),o.jsxs("div",{className:"timeline-card glass-card",children:[o.jsx("div",{className:"card-year-mobile",children:n.year}),o.jsx("p",{dangerouslySetInnerHTML:{__html:n.event.replace(/(https?:\/\/[^\s,]+)/g,'<a href="$1" target="_blank" rel="noopener noreferrer" class="timeline-link">$1</a>')}})]})]},r))]})]})}),o.jsx("section",{className:"section global-presence",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"global-card glass",children:o.jsxs("div",{className:"global-content",children:[o.jsx(Ms,{size:48,className:"text-accent"}),o.jsx("h2",{children:"Global Footprint"}),o.jsx("p",{children:"From our engineering center in Noida to our strategic operations in Tokyo, we are positioned to serve the global market with localized expertise."}),o.jsxs("div",{className:"presence-locations",children:[o.jsx("span",{children:"Noida, India"}),o.jsx("span",{className:"sep",children:"|"}),o.jsx("span",{children:"Tokyo, Japan"})]})]})})})}),o.jsx("style",{jsx:!0,children:`
                .story-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 5rem;
                    align-items: center;
                }

                .story-text p {
                    margin-bottom: 1.5rem;
                    color: var(--text-muted);
                    line-height: 1.8;
                }

                .mission-card-premium {
                    padding: 4rem;
                    background: var(--primary);
                    color: white;
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                }

                .mission-card-premium h3 {
                    color: white;
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                }

                .mission-card-premium p {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    opacity: 0.9;
                }

                .mission-icon {
                    margin-top: 2rem;
                    opacity: 0.3;
                }

                .bg-alt {
                    background: var(--background-alt);
                }

                .values-grid-full {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }

                .value-card-full {
                    padding: 3rem;
                    text-align: center;
                }

                .value-icon-box {
                    color: var(--secondary);
                    margin-bottom: 1.5rem;
                }

                .about-timeline-modern {
                    padding: var(--spacing-xl) 0;
                    background: var(--background-alt);
                    position: relative;
                }

                .modern-timeline {
                    position: relative;
                    max-width: 1200px;
                    margin: 5rem auto 0;
                    padding: 2rem 0;
                }

                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, transparent, var(--secondary) 10%, var(--secondary) 90%, transparent);
                    transform: translateX(-50%);
                    opacity: 0.3;
                }

                .timeline-block {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 4rem;
                    position: relative;
                }

                .timeline-block.left {
                    flex-direction: row-reverse;
                }

                .timeline-card {
                    width: 45%;
                    padding: 2.5rem;
                    border-radius: var(--radius-xl);
                    background: var(--white);
                    box-shadow: var(--shadow-lg);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    position: relative;
                    transition: var(--transition-normal);
                }

                .timeline-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--secondary);
                }

                .timeline-card p {
                    margin: 0;
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--text);
                    font-weight: 500;
                }

                :global(.timeline-link) {
                    color: var(--secondary);
                    text-decoration: underline;
                    word-break: break-all;
                }

                .timeline-marker {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 10;
                }

                .marker-dot {
                    width: 20px;
                    height: 20px;
                    background: var(--secondary);
                    border: 4px solid var(--white);
                    border-radius: 50%;
                    box-shadow: 0 0 15px rgba(20, 184, 166, 0.4);
                }

                .marker-year {
                    margin-top: 10px;
                    font-weight: 900;
                    font-size: 1.25rem;
                    color: var(--primary);
                    background: var(--white);
                    padding: 4px 12px;
                    border-radius: var(--radius-sm);
                    box-shadow: var(--shadow-sm);
                }

                .card-year-mobile {
                    display: none;
                }

                .global-presence {
                    padding-bottom: var(--spacing-xl);
                }

                .global-card {
                    padding: 6rem 3rem;
                    border-radius: var(--radius-xl);
                    text-align: center;
                    background: var(--gradient-primary);
                    color: white;
                }

                .global-content h2 {
                    color: white;
                    font-size: 3rem;
                    margin: 1.5rem 0;
                }

                .global-content p {
                    max-width: 600px;
                    margin: 0 auto 2rem;
                    font-size: 1.25rem;
                    opacity: 0.9;
                }

                .presence-locations {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--accent);
                }

                @media (max-width: 1024px) {
                    .story-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .values-grid-full {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 992px) {
                    .timeline-line {
                        left: 30px;
                        transform: none;
                    }
                    .timeline-block {
                        flex-direction: row !important;
                        justify-content: flex-start;
                        padding-left: 70px;
                        margin-bottom: 3rem;
                    }
                    .timeline-card {
                        width: 100%;
                        padding: 2rem;
                    }
                    .timeline-marker {
                        left: 30px;
                        transform: translateX(-50%);
                    }
                    .marker-year {
                        display: none;
                    }
                    .card-year-mobile {
                        display: inline-block;
                        font-weight: 900;
                        font-size: 1.5rem;
                        color: var(--secondary);
                        margin-bottom: 1rem;
                    }
                }
            `})]})},nS=()=>o.jsxs("div",{className:"page-solutions",children:[o.jsx(tt,{title:"Our Expert Solutions",subtitle:"Technological excellence tailored for your enterprise needs across various sectors.",bgImage:"https://images.unsplash.com/photo-1454165833467-03a669d96971?q=80&w=2400&auto=format&fit=crop"}),o.jsx("section",{className:"section solutions-list",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"solutions-grid-large",children:xi.map((e,t)=>o.jsxs(L.div,{className:"solution-item-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1},children:[o.jsxs("div",{className:"solution-card-body",children:[o.jsx("h3",{className:"solution-card-title",children:e.title}),o.jsx("p",{className:"solution-card-desc",children:e.description}),o.jsx("div",{className:"solution-features-mini",children:e.features.slice(0,3).map((n,r)=>o.jsxs("div",{className:"mini-feature",children:[o.jsx(ve,{size:18,className:"feature-icon"}),o.jsx("span",{children:n.split(":")[0]})]},r))}),o.jsx("div",{className:"solution-card-footer",children:e.externalLink?o.jsxs("a",{href:e.externalLink,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:["Learn More ",o.jsx(Jn,{size:18})]}):o.jsxs(V,{to:`/solutions/${e.slug}`,className:"btn btn-primary",children:["Learn More ",o.jsx(Jn,{size:18})]})})]}),e.subItems&&o.jsxs("div",{className:"solution-card-subitems",children:[o.jsx("h4",{className:"subitems-title",children:"Comprehensive Suite Includes:"}),o.jsx("div",{className:"subitems-list",children:e.subItems.map(n=>n.externalLink?o.jsx("a",{href:n.externalLink,target:"_blank",rel:"noopener noreferrer",className:"sub-pill",children:n.title},n.slug):o.jsx(V,{to:`/solutions/${n.slug}`,className:"sub-pill",children:n.title},n.slug))})]})]},e.slug))})})}),o.jsx("style",{jsx:!0,children:`
                .solutions-list {
                    background: var(--background-alt);
                    padding: var(--spacing-xl) 0;
                }

                .solutions-grid-large {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                    gap: 4rem;
                }

                .solution-item-card {
                    display: flex;
                    flex-direction: column;
                    background: var(--white);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    height: 100%;
                    box-shadow: var(--shadow-lg);
                    border: 1px solid rgba(13, 148, 136, 0.05);
                    transition: var(--transition-normal);
                }

                .solution-item-card:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--accent);
                }

                .solution-card-body {
                    padding: 4rem;
                    flex: 1;
                }

                .solution-card-title {
                    font-size: 2.25rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: var(--primary);
                    font-family: var(--font-heading);
                }

                .solution-card-desc {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    margin-bottom: 2.5rem;
                    line-height: 1.7;
                }

                .solution-features-mini {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                .mini-feature {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text);
                }

                .feature-icon {
                    color: var(--accent);
                }

                .solution-card-subitems {
                    padding: 3rem 4rem;
                    background: var(--background-alt);
                    border-top: 1px solid rgba(13, 148, 136, 0.1);
                }

                .subitems-title {
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 1.5rem;
                }

                .subitems-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .sub-pill {
                    padding: 0.6rem 1.25rem;
                    background: var(--white);
                    border: 1px solid rgba(13, 148, 136, 0.1);
                    border-radius: var(--radius-full);
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--primary);
                    transition: var(--transition-normal);
                }

                .sub-pill:hover {
                    background: var(--accent);
                    border-color: var(--accent);
                    color: var(--primary);
                    transform: translateY(-3px);
                }

                @media (max-width: 1024px) {
                    .solutions-grid-large {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .solution-card-body {
                        padding: 3rem;
                    }
                    .solution-card-subitems {
                        padding: 2.5rem 3rem;
                    }
                }

                @media (max-width: 640px) {
                    .solution-card-body {
                        padding: 2rem;
                    }
                    .solution-card-subitems {
                        padding: 2rem;
                    }
                    .solution-features-mini {
                        grid-template-columns: 1fr;
                    }
                }
            `})]}),rS=()=>o.jsxs("div",{className:"page-contact-full",children:[o.jsx(tt,{title:"Let's Connect",subtitle:"Whether you have a question about our solutions, pricing, or a custom project, our team is ready to assist you.",bgImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop"}),o.jsx("div",{className:"contact-page-wrapper",children:o.jsx(Ug,{})}),o.jsx("section",{className:"section bg-alt global-support",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header-new text-center",children:[o.jsxs("h2",{className:"section-title",children:["Support & ",o.jsx("span",{className:"text-gradient",children:"Presence"})]}),o.jsx("p",{className:"section-subtitle",children:"We provide enterprise-grade support across multiple time zones."})]}),o.jsxs("div",{className:"grid-3",children:[o.jsxs(L.div,{className:"support-card card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[o.jsx("div",{className:"support-icon",children:o.jsx(Ms,{size:32})}),o.jsx("h3",{children:"Global Operations"}),o.jsx("p",{children:"Headquartered in Noida with strategic presence in Tokyo to serve our international partners."})]}),o.jsxs(L.div,{className:"support-card card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},children:[o.jsx("div",{className:"support-icon",children:o.jsx(fc,{size:32})}),o.jsx("h3",{children:"Enterprise Security"}),o.jsx("p",{children:"Your data is safe with our ISO compliant processes and high-security deployment models."})]}),o.jsxs(L.div,{className:"support-card card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:[o.jsx("div",{className:"support-icon",children:o.jsx(ah,{size:32})}),o.jsx("h3",{children:"Expert Support"}),o.jsx("p",{children:"Dedicated account managers and technical support teams available for enterprise SLAs."})]})]})]})}),o.jsx("style",{jsx:!0,children:`
                .contact-page-wrapper {
                    margin-top: -60px;
                    position: relative;
                    z-index: 20;
                }

                .bg-alt {
                    background: var(--background-alt);
                }

                .global-support {
                    padding: var(--spacing-xl) 0;
                }

                .support-card {
                    padding: 3rem 2rem;
                    text-align: center;
                }

                .support-icon {
                    color: var(--secondary);
                    margin-bottom: 1.5rem;
                    display: flex;
                    justify-content: center;
                }

                .support-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    color: var(--primary);
                }

                .support-card p {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                }

                @media (max-width: 1024px) {
                    .contact-page-wrapper {
                        margin-top: 0;
                    }
                }
            `})]}),iS=()=>{const{slug:e}=Y0(),t=_b(e);return w.useEffect(()=>{t&&t.externalLink&&(window.location.href=t.externalLink),window.scrollTo(0,0)},[e,t]),t?o.jsxs("div",{className:"page-solution-detail",children:[o.jsx(tt,{title:t.title,subtitle:t.description}),o.jsx("section",{className:"section solution-content",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"solution-layout",children:[o.jsxs("div",{className:"solution-main",children:[o.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"content-block",children:[o.jsx("h2",{className:"content-title",children:"Overview"}),o.jsx("p",{className:"lead-text",children:t.longDescription||t.content})]}),t.features&&o.jsxs(L.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"content-block",children:[o.jsx("h2",{className:"content-title",children:"Key Capabilities"}),o.jsx("div",{className:"features-grid-detail",children:t.features.map((n,r)=>o.jsxs("div",{className:"feature-detail-card glass",children:[o.jsx("div",{className:"feature-icon-circle",children:o.jsx(ve,{size:20,className:"text-success"})}),o.jsx("p",{className:"feature-text",children:n})]},r))})]}),t.benefits&&o.jsxs(L.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"content-block",children:[o.jsx("h2",{className:"content-title",children:"Business Benefits"}),o.jsx("div",{className:"benefits-list-detail",children:t.benefits.map((n,r)=>o.jsxs("div",{className:"benefit-detail-item",children:[o.jsx("div",{className:"benefit-marker"}),o.jsx("p",{children:n})]},r))})]}),t.subItems&&o.jsxs("div",{className:"content-block subitems-block",children:[o.jsx("h2",{className:"content-title",children:"Explore the Suite"}),o.jsx("div",{className:"subitems-grid",children:t.subItems.map(n=>o.jsxs(V,{to:`/solutions/${n.slug}`,className:"subitem-card-mini card",children:[o.jsx("h4",{children:n.title}),o.jsx("p",{children:n.description}),o.jsxs("div",{className:"subitem-link",children:["Explore ",o.jsx(Jn,{size:14})]})]},n.slug))})]})]}),o.jsxs("aside",{className:"solution-sidebar",children:[o.jsxs("div",{className:"sidebar-card contact-cta card",children:[o.jsx("div",{className:"card-header-icon",children:o.jsx(ch,{size:32,className:"text-secondary"})}),o.jsxs("h3",{children:["Interested in ",t.title,"?"]}),o.jsx("p",{children:"Get a personalized demo tailored to your organization's needs."}),o.jsx(V,{to:"/contact",className:"btn btn-primary w-full",children:"Request a Demo"})]}),o.jsxs("div",{className:"sidebar-links card",children:[o.jsx("h3",{children:"Resources"}),o.jsxs("ul",{className:"resource-list",children:[o.jsx("li",{children:o.jsxs("a",{href:"#",children:[o.jsx(hd,{size:18})," Product Brochure"]})}),o.jsx("li",{children:o.jsxs("a",{href:"#",children:[o.jsx(hd,{size:18})," Technical Specs"]})}),o.jsx("li",{children:o.jsxs("a",{href:"#",children:[o.jsx(Zx,{size:18})," Case Study"]})})]})]}),o.jsxs("div",{className:"sidebar-nav card",children:[o.jsx("h3",{children:"Other Solutions"}),o.jsx("div",{className:"sidebar-nav-links",children:Mb().filter(n=>n.slug!==e).map(n=>n.externalLink?o.jsx("a",{href:n.externalLink,target:"_blank",rel:"noopener noreferrer",children:n.title},n.slug):o.jsx(V,{to:`/solutions/${n.slug}`,children:n.title},n.slug))})]})]})]})})}),o.jsx("style",{jsx:!0,children:`
                .solution-layout {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                    align-items: start;
                }

                .content-block {
                    margin-bottom: 4rem;
                }

                .content-title {
                    font-size: 1.75rem;
                    margin-bottom: 2rem;
                    color: var(--primary);
                    position: relative;
                    padding-bottom: 1rem;
                }

                .content-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 3px;
                    background: var(--gradient-accent);
                    border-radius: var(--radius-full);
                }

                .lead-text {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-muted);
                }

                .features-grid-detail {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .feature-detail-card {
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    background: var(--white);
                    border: 1px solid var(--background-alt);
                    display: flex;
                    gap: 1rem;
                }

                .feature-icon-circle {
                    width: 32px;
                    height: 32px;
                    background: rgba(16, 185, 129, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .feature-text {
                    font-size: 0.95rem;
                    color: var(--text);
                    font-weight: 500;
                    line-height: 1.5;
                }

                .benefits-list-detail {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .benefit-detail-item {
                    display: flex;
                    align-items: start;
                    gap: 1.25rem;
                    padding: 1.5rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-md);
                }

                .benefit-marker {
                    width: 6px;
                    height: 6px;
                    background: var(--secondary);
                    border-radius: 50%;
                    margin-top: 0.65rem;
                    flex-shrink: 0;
                }

                .benefit-detail-item p {
                    margin: 0;
                    font-size: 1rem;
                    color: var(--text);
                    font-weight: 500;
                }

                .subitems-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .subitem-card-mini {
                    padding: 1.5rem;
                }

                .subitem-card-mini h4 {
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                    color: var(--primary);
                }

                .subitem-card-mini p {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    margin-bottom: 1rem;
                }

                .subitem-link {
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--secondary);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .solution-sidebar {
                    position: sticky;
                    top: 120px;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .sidebar-card {
                    padding: 2rem;
                }

                .contact-cta {
                    background: var(--primary);
                    color: white;
                    text-align: center;
                }

                .contact-cta h3 {
                    color: white;
                    margin-bottom: 1rem;
                }

                .contact-cta p {
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 2rem;
                }

                .card-header-icon {
                    margin-bottom: 1.5rem;
                }

                .sidebar-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1.5rem;
                    color: var(--primary);
                }

                .contact-cta h3 {
                    color: white;
                }

                .resource-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .resource-list a {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: var(--text);
                    font-weight: 600;
                    font-size: 0.95rem;
                }

                .resource-list a:hover {
                    color: var(--secondary);
                }

                .sidebar-nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .sidebar-nav-links a {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid var(--background-alt);
                }

                .sidebar-nav-links a:hover {
                    color: var(--secondary);
                }

                @media (max-width: 1024px) {
                    .solution-layout {
                        grid-template-columns: 1fr;
                    }
                    .solution-sidebar {
                        position: static;
                        order: 2;
                    }
                }

                @media (max-width: 640px) {
                    .features-grid-detail, .subitems-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `})]}):o.jsxs("div",{className:"container section",children:[o.jsx(tt,{title:"Solution Not Found",subtitle:"The requested solution could not be located in our system."}),o.jsx("div",{className:"error-actions",children:o.jsxs(V,{to:"/solutions",className:"btn btn-primary",children:[o.jsx(bx,{size:18})," Back to Solutions"]})})]})},sS=()=>{const e=wn();return w.useEffect(()=>{if(e.hash){const t=e.hash.replace("#",""),n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth"})}else window.scrollTo(0,0)},[e]),o.jsxs("div",{className:"page-product-engineering",children:[o.jsx(tt,{title:"Product Engineering Services",subtitle:"Your go-to partner for IT-led process transformation for product life-cycle management, development or workflow optimization needs, with a special focus on print."}),o.jsx("section",{className:"section bg-white",id:"print-products",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"content-grid",children:[o.jsxs(L.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"content-main",children:[o.jsx("h2",{className:"section-title text-primary mb-4",children:"Print Products"}),o.jsx("p",{className:"lead-text mb-6",children:"In today's dynamic economy, print and publishing companies must rapidly introduce new products and features to gain competitive advantage. The expected speed of change puts massive pressure on internal R&D teams to address fast high-priority customer reported issues."}),o.jsx("p",{className:"mb-6",children:"Vir Softech is the ideal value-added software service provider for print and publishing companies that need to move quickly without sacrificing quality while maintaining a profit margin. We assist customers in enhancing their business by providing high-quality software services at affordable prices, whether they are developing new software products, enhancing existing products, or supporting legacy products."}),o.jsx("p",{className:"mb-8",children:"At Vir Softech, we have a world-class team of computer scientists with decades of experience in managing all aspects of Imaging technologies and replacing RIP technologies with comparable/improved performance and quality."}),o.jsx("h3",{className:"text-2xl font-bold text-primary mb-4",children:"Why should you trust us?"}),o.jsxs("ul",{className:"custom-list mb-8",children:[o.jsx("li",{children:"Proven experience in print areas such as RIP, color management, job management & settings, printer & cutter workflows, half-toning, VDP, imposition, bands generation and advanced functions such as nesting, tiling, step & repeat, and so on."}),o.jsx("li",{children:"We help you target RFPs for specific market segments, such as production, industrial, commercial, large format and enterprise printing."}),o.jsx("li",{children:"Having engagement with print OEMs across geographies such as Japan, USA, Europe, you can trust us to provide solutions across production, enterprise, graphic cards and large format printing segments."})]})]}),o.jsx(L.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"content-sidebar",children:o.jsxs("div",{className:"card glass-card p-6",children:[o.jsx("h3",{className:"text-xl font-bold text-primary mb-4",children:"Why OEMs and ODMs choose us for RIP Replacement Services"}),o.jsxs("ul",{className:"feature-list",children:[o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," About 100 person-years of combined print technology and domain experience"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Super-strong expertise on PostScript, PDF, PCL & XPS"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Experience of working across enterprise, production and large format printers"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Member of Global Graphics software Partner Network - Implementation partner for Harlequin & Mako"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Hands-on experience of working on all the major RIP technologies available in market including Harlequin RIP, Adobe RIP and GhostScript"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Comprehensive training & consulting support"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Experience of developing PDF applications using 3rd party PDF libraries"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Expertise in developing Plug-ins for Adobe - Illustrator, InDesign, Acrobat, Photoshop & CorelDraw"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Track record of successfully working with multiple print OEMs worldwide"]})]})]})})]})})}),o.jsx("section",{className:"section bg-light",id:"customm_services",children:o.jsxs("div",{className:"container",children:[o.jsxs(L.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-12",children:[o.jsx("h2",{className:"section-title text-primary mb-4",children:"Custom Services"}),o.jsx("p",{className:"lead-text max-w-3xl mx-auto",children:"With Vir Softech engineering services you can offload your end-to-end software development for business-leading transformation in managing documents, optimizing education, bringing new age printing services, or workflow management of artwork and design in print and packaging setups."}),o.jsx("p",{className:"mt-4 max-w-3xl mx-auto",children:"You can rely on us to meet all of your current and future engineering and technology needs. You can work with us in multiple models - you can outsource your engineering needs at a solution-level, module-level, or skill-level."})]}),o.jsxs("div",{className:"services-grid mb-16",children:[o.jsxs("div",{className:"service-card card p-6",children:[o.jsx("div",{className:"icon-wrapper mb-4",children:o.jsx(Ka,{className:"text-primary",size:32})}),o.jsx("h3",{className:"text-xl font-bold mb-3",children:"New Product Development"}),o.jsxs("ul",{className:"simple-list",children:[o.jsx("li",{children:"Product ideation, conceptualization"}),o.jsx("li",{children:"Prototyping"}),o.jsx("li",{children:"Beta testing & go-to-market"})]})]}),o.jsxs("div",{className:"service-card card p-6",children:[o.jsx("div",{className:"icon-wrapper mb-4",children:o.jsx(Mx,{className:"text-primary",size:32})}),o.jsx("h3",{className:"text-xl font-bold mb-3",children:"Product Transformation"}),o.jsxs("ul",{className:"simple-list",children:[o.jsx("li",{children:"Legacy transformation and regular upgrades"}),o.jsx("li",{children:"Technology assessment & migration"}),o.jsx("li",{children:"Mobile, Cloud, SaaS enablement"})]})]}),o.jsxs("div",{className:"service-card card p-6",children:[o.jsx("div",{className:"icon-wrapper mb-4",children:o.jsx(Xx,{className:"text-primary",size:32})}),o.jsx("h3",{className:"text-xl font-bold mb-3",children:"Maintenance & Testing"}),o.jsxs("ul",{className:"simple-list",children:[o.jsx("li",{children:"Life-cycle management"}),o.jsx("li",{children:"Product enhancements"}),o.jsx("li",{children:"Product maintenance & testing"})]})]}),o.jsxs("div",{className:"service-card card p-6",children:[o.jsx("div",{className:"icon-wrapper mb-4",children:o.jsx($x,{className:"text-primary",size:32})}),o.jsx("h3",{className:"text-xl font-bold mb-3",children:"UI/UX Development"}),o.jsxs("ul",{className:"simple-list",children:[o.jsx("li",{children:"Visual design and asset creation"}),o.jsx("li",{children:"Front-end engineering (HTML/CSS)"}),o.jsx("li",{children:"Wireframes & Concept prototyping"})]})]})]}),o.jsxs("div",{className:"tech-stack-container card p-8 glass-card",children:[o.jsx("h3",{className:"text-2xl font-bold text-primary mb-6 text-center",children:"Our Technology Stack & Domains"}),o.jsxs("div",{className:"tech-grid",children:[o.jsxs("div",{className:"tech-col",children:[o.jsx("h4",{className:"text-lg font-bold mb-3 text-secondary border-b pb-2",children:"Programming Languages & Frameworks"}),o.jsxs("ul",{className:"tech-list",children:[o.jsx("li",{children:"C, C++, Java, C#"}),o.jsx("li",{children:"PDLs - PostScript, PDF, XPS"}),o.jsx("li",{children:"HTML5, JavaScript, JSP, HTTP, REST, J2EE, Node.js"}),o.jsx("li",{children:"ReactJS, Angular, Google Flutter"})]})]}),o.jsxs("div",{className:"tech-col",children:[o.jsx("h4",{className:"text-lg font-bold mb-3 text-secondary border-b pb-2",children:"Databases & Cloud Platforms"}),o.jsxs("ul",{className:"tech-list",children:[o.jsx("li",{children:"Oracle, PostgreSQL"}),o.jsx("li",{children:"NoSQL DB - Mongo DB"}),o.jsx("li",{children:"AWS, Azure"})]})]}),o.jsxs("div",{className:"tech-col",children:[o.jsx("h4",{className:"text-lg font-bold mb-3 text-secondary border-b pb-2",children:"Operating Systems"}),o.jsxs("ul",{className:"tech-list",children:[o.jsx("li",{children:"Linux - RHEL, CentOS"}),o.jsx("li",{children:"Monta Vista, WindRiver"}),o.jsx("li",{children:"microITRON, ThreadX (ARM)"}),o.jsx("li",{children:"Windows / Mac"})]})]}),o.jsxs("div",{className:"tech-col",children:[o.jsx("h4",{className:"text-lg font-bold mb-3 text-secondary border-b pb-2",children:"Domains"}),o.jsxs("ul",{className:"tech-list",children:[o.jsx("li",{children:"Print & Publishing workflows"}),o.jsx("li",{children:"Production/Enterprise Printing / Graphic Arts / Large Format"}),o.jsx("li",{children:"Digitization workflows"}),o.jsx("li",{children:"Plug-ins for Acrobat, Indesign, Illustrator, Corel Draw"}),o.jsx("li",{children:"Print Drivers - Win (V3/V4 architecture) and Mac"})]})]})]})]})]})}),o.jsx("style",{jsx:!0,children:`
                .content-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                }
                .mb-3 { margin-bottom: 0.75rem; }
                .mb-4 { margin-bottom: 1rem; }
                .mb-6 { margin-bottom: 1.5rem; }
                .mb-8 { margin-bottom: 2rem; }
                .mb-12 { margin-bottom: 3rem; }
                .mb-16 { margin-bottom: 4rem; }
                .pb-2 { padding-bottom: 0.5rem; }
                .p-6 { padding: 1.5rem; }
                .p-8 { padding: 2rem; }
                .mx-auto { margin-left: auto; margin-right: auto; }
                .max-w-3xl { max-width: 48rem; }
                .text-2xl { font-size: 1.5rem; }
                .text-xl { font-size: 1.25rem; }
                .text-lg { font-size: 1.125rem; }
                .font-bold { font-weight: 700; }
                .text-primary { color: var(--primary); }
                .text-secondary { color: var(--secondary); }
                .text-accent { color: var(--accent); }
                .text-center { text-align: center; }
                .border-b { border-bottom: 1px solid rgba(2, 48, 71, 0.1); }
                .bg-light { background: var(--background-alt); }
                .bg-white { background: var(--white); }

                .custom-list {
                    list-style: disc;
                    padding-left: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .custom-list li {
                    color: var(--text-muted);
                    line-height: 1.6;
                }

                .feature-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .feature-list li {
                    display: flex;
                    gap: 0.75rem;
                    align-items: flex-start;
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
                
                .feature-list li svg {
                    margin-top: 0.2rem;
                    flex-shrink: 0;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .service-card {
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--accent);
                }

                .icon-wrapper {
                    display: inline-flex;
                    padding: 1rem;
                    background: rgba(33, 158, 188, 0.1);
                    border-radius: var(--radius-md);
                }

                .simple-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .simple-list li {
                    position: relative;
                    padding-left: 1.25rem;
                    color: var(--text-muted);
                    font-size: 0.95rem;
                }

                .simple-list li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--secondary);
                    font-weight: bold;
                }

                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }

                .tech-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .tech-list li {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    box-shadow: var(--shadow-md);
                }

                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `})]})},oS=()=>(w.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs("div",{className:"page-design-automation",children:[o.jsx(tt,{title:"Design & Artwork Automation",subtitle:"Reduce significant time and effort in designing artwork and manage design processes using automation."}),o.jsx("section",{className:"section bg-white",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"content-grid",children:[o.jsxs(L.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"content-main",children:[o.jsx("h2",{className:"section-title text-primary mb-4",children:"Design and Artwork Automation"}),o.jsx("p",{className:"lead-text mb-6",children:"You can now automate the artwork design process with Vir Softech's custom plugins for desktop and digital publishing to create high quality artwork with 100% accuracy. You get it all at a much lower time, money, and review effort."}),o.jsx("p",{className:"mb-6",children:"Traditional artwork creation for packaging workflow is often based on digital publishing apps such as InDesign, CorelDraw, Photoshop, Acrobat, Illustrator, etc. For regulated industries, such as pharma and consumer durables, there is a need to customize the product packaging to cover the regulatory aspects of countries where the product is being sold."}),o.jsx("p",{className:"mb-6",children:"As a product owner, you may now need to design multiple versions of product designs for folding boxes, blisters, packets, leaflets and a variety of packages. This is complex, error-prone and costly."}),o.jsxs("div",{className:"case-study-box card p-6 mt-8 border-l-4",children:[o.jsx("h3",{className:"text-xl font-bold text-primary mb-3",children:"Client Success Story"}),o.jsx("p",{className:"mb-4",children:"One of the global pharma companies uses our custom InDesign plug-in to automate the designing of leaflets and folding boxes for various medicine brands. The customization includes features such as:"}),o.jsxs("ul",{className:"simple-list mb-4",children:[o.jsx("li",{children:"Automated placement of content (text, images, and tables)"}),o.jsx("li",{children:"Multi-column alignment and multi-language support"}),o.jsx("li",{children:"Font style and paragraph style application"}),o.jsx("li",{children:"Blank space adjustment"})]}),o.jsx("p",{className:"font-bold text-accent",children:"Our automation has resulted in almost 75% reduction in time for designing of a leaflet as compared to the current manual process."})]})]}),o.jsxs(L.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"content-sidebar",children:[o.jsxs("div",{className:"card glass-card p-6 mb-6",children:[o.jsx("h3",{className:"text-xl font-bold text-primary mb-4",children:"Custom Plugins"}),o.jsx("p",{className:"mb-4 text-sm text-muted",children:"Various desktop publishing software such as InDesign, CorelDraw, Photoshop, Acrobat, Illustrator have advanced digital publishing capabilities. Publishers need to manage and enhance PDF workflows, optimize web documents for printing and optimize content for various market segments."}),o.jsx("p",{className:"mb-4 text-sm font-bold text-secondary",children:"We develop plug-ins in C++, scripts, VBA, VSTA & HTML for Windows and Mac OS. Our specialization is across industrial segments such as print, imaging, graphics, and publishing."})]}),o.jsxs("div",{className:"card glass-card p-6",children:[o.jsx("h3",{className:"text-xl font-bold text-primary mb-4",children:"Scripting Models"}),o.jsxs("ul",{className:"feature-list",children:[o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Workflow automation and optimization"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Web to print solutions"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," Variable data printing"]}),o.jsxs("li",{children:[o.jsx(ve,{size:18,className:"text-accent"})," InDesign Server integration"]})]})]})]})]})})}),o.jsx("section",{className:"section bg-light",children:o.jsxs("div",{className:"container",children:[o.jsxs(L.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-12",children:[o.jsx("h2",{className:"section-title text-primary mb-4",children:"Our Recent Work"}),o.jsx("p",{className:"lead-text max-w-3xl mx-auto",children:"We have successfully delivered automated solutions that significantly improve efficiency and accuracy in the printing and packaging workflows."})]}),o.jsxs("div",{className:"work-grid",children:[o.jsxs("div",{className:"work-card card p-6 text-center",children:[o.jsx("div",{className:"icon-wrapper mb-4 mx-auto",children:o.jsx(uc,{className:"text-primary",size:32})}),o.jsx("h4",{className:"font-bold mb-2",children:"Modern Plugins"}),o.jsx("p",{className:"text-sm text-muted",children:"Help customers replace Flash based extensions with modern CEP HTML based plugins."})]}),o.jsxs("div",{className:"work-card card p-6 text-center",children:[o.jsx("div",{className:"icon-wrapper mb-4 mx-auto",children:o.jsx(Vx,{className:"text-primary",size:32})}),o.jsx("h4",{className:"font-bold mb-2",children:"Variable Data Printing"}),o.jsx("p",{className:"text-sm text-muted",children:"Improve printing and packaging workflows, with efficient variable data printing."})]}),o.jsxs("div",{className:"work-card card p-6 text-center",children:[o.jsx("div",{className:"icon-wrapper mb-4 mx-auto",children:o.jsx(Qx,{className:"text-primary",size:32})}),o.jsx("h4",{className:"font-bold mb-2",children:"Color Management"}),o.jsx("p",{className:"text-sm text-muted",children:"Improve color management and imposition for better print consistency."})]}),o.jsxs("div",{className:"work-card card p-6 text-center",children:[o.jsx("div",{className:"icon-wrapper mb-4 mx-auto",children:o.jsx(Cx,{className:"text-primary",size:32})}),o.jsx("h4",{className:"font-bold mb-2",children:"3D & CAD Integration"}),o.jsx("p",{className:"text-sm text-muted",children:"Incorporate 3D visualization and CAD functionality into existing tools."})]}),o.jsxs("div",{className:"work-card card p-6 text-center",children:[o.jsx("div",{className:"icon-wrapper mb-4 mx-auto",children:o.jsx(dh,{className:"text-primary",size:32})}),o.jsx("h4",{className:"font-bold mb-2",children:"Powerful UI Components"}),o.jsx("p",{className:"text-sm text-muted",children:"Create powerful UI components using wxWidgets that integrates seamlessly with SDKs."})]})]})]})}),o.jsx("style",{jsx:!0,children:`
                .content-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                }
                .mb-2 { margin-bottom: 0.5rem; }
                .mb-3 { margin-bottom: 0.75rem; }
                .mb-4 { margin-bottom: 1rem; }
                .mb-6 { margin-bottom: 1.5rem; }
                .mb-8 { margin-bottom: 2rem; }
                .mb-12 { margin-bottom: 3rem; }
                .mt-8 { margin-top: 2rem; }
                .p-6 { padding: 1.5rem; }
                .mx-auto { margin-left: auto; margin-right: auto; }
                .max-w-3xl { max-width: 48rem; }
                .text-xl { font-size: 1.25rem; }
                .text-sm { font-size: 0.875rem; }
                .font-bold { font-weight: 700; }
                .text-primary { color: var(--primary); }
                .text-secondary { color: var(--secondary); }
                .text-accent { color: var(--accent); }
                .text-muted { color: var(--text-muted); }
                .text-center { text-align: center; }
                .bg-light { background: var(--background-alt); }
                .bg-white { background: var(--white); }
                .border-l-4 { border-left: 4px solid var(--accent); }

                .lead-text {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-muted);
                }

                .feature-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .feature-list li {
                    display: flex;
                    gap: 0.75rem;
                    align-items: flex-start;
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
                
                .feature-list li svg {
                    margin-top: 0.2rem;
                    flex-shrink: 0;
                }

                .simple-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .simple-list li {
                    position: relative;
                    padding-left: 1.25rem;
                    color: var(--text-muted);
                    font-size: 0.95rem;
                }

                .simple-list li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--secondary);
                    font-weight: bold;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    box-shadow: var(--shadow-md);
                }

                .work-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }

                .work-card {
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .work-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--accent);
                }

                .icon-wrapper {
                    display: inline-flex;
                    padding: 1rem;
                    background: rgba(33, 158, 188, 0.1);
                    border-radius: var(--radius-md);
                }

                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `})]})),aS=()=>{const e=[{title:"Senior Full Stack Developer",department:"Engineering",location:"Noida, India",type:"Full-time",tags:["React","Node.js","Python"]},{title:"AI / Computer Vision Engineer",department:"R&D",location:"Noida / Remote",type:"Full-time",tags:["OpenCV","PyTorch","C++"]},{title:"UX/UI Designer",department:"Design",location:"Hybrid",type:"Full-time",tags:["Figma","Design Systems"]}];return o.jsxs("div",{className:"page-careers",children:[o.jsx(tt,{title:"Join Our Mission",subtitle:"Build the future of digital transformation and imaging intelligence with a global team.",bgImage:"https://images.unsplash.com/photo-1522071823991-b99c223c7483?q=80&w=2400&auto=format&fit=crop"}),o.jsx("section",{className:"section careers-intro",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"grid-2 align-center",children:[o.jsxs(L.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[o.jsxs("h2",{className:"section-title",children:["Why Work at ",o.jsx("span",{className:"text-gradient",children:"Vir Softech?"})]}),o.jsx("p",{className:"lead-text",children:"We foster a culture of innovation, continuous learning, and global collaboration."}),o.jsx("p",{children:"At Vir Softech, you're not just a number. You're a key contributor to products that millions of people use every day. From digitizing national archives to revolutionizing examination systems, your work has a real-world impact."})]}),o.jsxs("div",{className:"benefits-sidebar card",children:[o.jsxs("div",{className:"benefit-pill",children:[o.jsx(Fi,{size:16})," Global Exposure"]}),o.jsxs("div",{className:"benefit-pill",children:[o.jsx(Fi,{size:16})," Continuous Learning"]}),o.jsxs("div",{className:"benefit-pill",children:[o.jsx(Fi,{size:16})," Innovative Projects"]}),o.jsxs("div",{className:"benefit-pill",children:[o.jsx(Fi,{size:16})," Hybrid Work Culture"]})]})]})})}),o.jsx("section",{className:"section bg-alt open-positions",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header-new text-center",children:[o.jsxs("h2",{className:"section-title",children:["Open ",o.jsx("span",{className:"text-gradient",children:"Positions"})]}),o.jsx("p",{className:"section-subtitle",children:"Find your next challenge in our growing team."})]}),o.jsx("div",{className:"jobs-container-new",children:e.map((t,n)=>o.jsxs(L.div,{className:"job-row-card card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.1},children:[o.jsxs("div",{className:"job-main-info",children:[o.jsxs("div",{className:"job-title-group",children:[o.jsx("h3",{children:t.title}),o.jsxs("div",{className:"job-meta-pills",children:[o.jsxs("span",{className:"meta-pill",children:[o.jsx(Tx,{size:14})," ",t.department]}),o.jsxs("span",{className:"meta-pill",children:[o.jsx(lh,{size:14})," ",t.location]}),o.jsxs("span",{className:"meta-pill",children:[o.jsx(ah,{size:14})," ",t.type]})]})]}),o.jsx("div",{className:"job-tags",children:t.tags.map(r=>o.jsx("span",{className:"tag-pill",children:r},r))})]}),o.jsx("div",{className:"job-action-new",children:o.jsxs(V,{to:"/contact",className:"btn btn-primary-outline",children:["Apply Now ",o.jsx(Jn,{size:18})]})})]},n))}),o.jsxs("div",{className:"careers-footer text-center",children:[o.jsx("p",{children:"Don't see a fitting role? We're always looking for talent."}),o.jsx("a",{href:"mailto:career@virsoftech.com",className:"email-link",children:"career@virsoftech.com"})]})]})}),o.jsx("style",{jsx:!0,children:`
                .careers-intro {
                    padding: var(--spacing-xl) 0;
                }

                .align-center {
                    align-items: center;
                }

                .benefits-sidebar {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    padding: 2rem;
                }

                .benefit-pill {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-md);
                    font-weight: 700;
                    font-size: 0.85rem;
                    color: var(--primary);
                }

                .benefit-pill :global(svg) {
                    color: var(--secondary);
                }

                .open-positions {
                    padding: var(--spacing-xl) 0;
                }

                .jobs-container-new {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin: 3rem 0;
                }

                .job-row-card {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2.5rem;
                    transition: var(--transition-normal);
                }

                .job-row-card:hover {
                    transform: translateX(10px);
                    border-color: var(--secondary);
                }

                .job-title-group h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.75rem;
                }

                .job-meta-pills {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .meta-pill {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--text-muted);
                }

                .job-tags {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1.25rem;
                }

                .tag-pill {
                    padding: 0.25rem 0.75rem;
                    background: rgba(99, 102, 241, 0.05);
                    color: var(--secondary);
                    border-radius: var(--radius-full);
                    font-size: 0.75rem;
                    font-weight: 700;
                    border: 1px solid rgba(99, 102, 241, 0.1);
                }

                .job-action-new {
                    flex-shrink: 0;
                }

                .btn-primary-outline {
                    border: 2px solid var(--secondary);
                    color: var(--secondary);
                    background: transparent;
                    padding: 0.75rem 2rem;
                    font-weight: 700;
                    border-radius: var(--radius-md);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .btn-primary-outline:hover {
                    background: var(--secondary);
                    color: white;
                }

                .careers-footer {
                    margin-top: 4rem;
                }

                .email-link {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--secondary);
                    font-family: var(--font-heading);
                    text-decoration: underline;
                }

                @media (max-width: 900px) {
                    .job-row-card {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 2rem;
                    }
                    .job-action-new {
                        width: 100%;
                    }
                    .job-action-new .btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `})]})},lS=()=>{const e=[{title:"The Future of ECM in Higher Education",date:"May 15, 2024",category:"Enterprise",excerpt:"Discover how intelligent content management is transforming university administration and student record keeping.",image:"https://images.unsplash.com/photo-1523050335392-9bc5675e0971?q=80&w=800&auto=format&fit=crop",slug:"future-of-ecm"},{title:"Artwork Automation: Scaling Your Design Operations",date:"April 28, 2024",category:"Automation",excerpt:"Learn how global CPG brands are reducing design cycle times by up to 70% using custom Adobe CC plugins.",image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",slug:"automating-packaging-artwork"},{title:"Securing Digital Examinations in the AI Era",date:"April 10, 2024",category:"Education",excerpt:"A deep dive into the security measures that ensure integrity in high-stakes computer-based testing.",image:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",slug:"secure-on-screen-marking"}];return o.jsxs("div",{className:"page-blog",children:[o.jsx(tt,{title:"Knowledge Hub",subtitle:"Insights, trends, and innovation updates from our global engineering teams.",bgImage:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2400&auto=format&fit=crop"}),o.jsx("section",{className:"section blog-list-full",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"blog-grid-modern",children:e.map((t,n)=>o.jsxs(L.article,{className:"blog-card-modern card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.1},children:[o.jsxs("div",{className:"post-thumb",children:[o.jsx("img",{src:t.image,alt:t.title}),o.jsx("span",{className:"post-category",children:t.category})]}),o.jsxs("div",{className:"post-content-new",children:[o.jsxs("div",{className:"post-meta-new",children:[o.jsxs("span",{className:"meta-item",children:[o.jsx(Ex,{size:14})," ",t.date]}),o.jsxs("span",{className:"meta-item",children:[o.jsx(n1,{size:14})," Vir Editor"]})]}),o.jsx("h3",{children:t.title}),o.jsx("p",{children:t.excerpt}),o.jsxs(V,{to:`/blog/${t.slug}`,className:"blog-link-more",children:["Read More ",o.jsx(Jn,{size:18})]})]})]},n))})})}),o.jsx("style",{jsx:!0,children:`
                .blog-list-full {
                    background: var(--background-alt);
                    padding: var(--spacing-xl) 0;
                }

                .blog-grid-modern {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 3rem;
                }

                .blog-card-modern {
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    border: none;
                    background: var(--white);
                }

                .blog-card-modern:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-xl);
                }

                .post-thumb {
                    position: relative;
                    height: 240px;
                    overflow: hidden;
                }

                .post-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .blog-card-modern:hover .post-thumb img {
                    transform: scale(1.1);
                }

                .post-category {
                    position: absolute;
                    top: 1.5rem;
                    left: 1.5rem;
                    background: var(--secondary);
                    color: white;
                    padding: 0.4rem 1rem;
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .post-content-new {
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .post-meta-new {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 1.25rem;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    color: var(--text-light);
                    font-weight: 600;
                }

                .post-content-new h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                    color: var(--primary);
                }

                .post-content-new p {
                    color: var(--text-muted);
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    flex: 1;
                }

                .blog-link-more {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 800;
                    color: var(--secondary);
                    font-size: 0.95rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                @media (max-width: 768px) {
                    .blog-grid-modern {
                        grid-template-columns: 1fr;
                        max-width: 450px;
                        margin: 0 auto;
                    }
                }
            `})]})},cS=()=>o.jsxs("div",{className:"page-legal",children:[o.jsx(tt,{title:"Privacy Policy",subtitle:"How we collect, use, and protect your personal data."}),o.jsx("section",{className:"section legal-content",children:o.jsx("div",{className:"container",children:o.jsxs(L.div,{className:"card legal-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[o.jsx("p",{className:"last-updated",children:"Last Updated: January 1, 2025"}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"1. Information Collection"}),o.jsx("p",{children:"We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or when you contact us."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Personal Data: Name, email address, company name, phone number."}),o.jsx("li",{children:"Technical Data: IP address, cookies, browser type, and usage patterns collected automatically."})]})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"2. How We Use Your Information"}),o.jsx("p",{children:"We use the information we collect or receive for various purposes, including:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"To respond to user inquiries and provide support."}),o.jsx("li",{children:"To send product updates, security alerts, and administrative information."}),o.jsx("li",{children:"To personalize user experience and improve our platforms."}),o.jsx("li",{children:"To analyze usage patterns and optimize our website performance."})]})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"3. Data Sharing and Disclosure"}),o.jsx("p",{children:"We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We share data only with trusted service providers (CRM, analytics) under strict confidentiality contracts. We never sell your data to third parties."})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"4. Data Security"}),o.jsx("p",{children:"We implement robust technical and organizational security measures designed to protect the security of any personal information we process. This includes TLS/SSL encryption for data in transit and AES-256 for data at rest. Our processes are ISO 27001-aligned."})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"5. Your Privacy Rights"}),o.jsx("p",{children:"Depending on your location, you may have the right to access, correct, or delete your personal data. You can exercise these rights by contacting us at the email provided below."})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"6. Contact Us"}),o.jsxs("p",{children:["If you have questions or comments about this policy, you may email our Data Protection Officer at ",o.jsx("strong",{children:"corp@virsoftech.com"}),"."]})]})]})})}),o.jsx("style",{jsx:!0,children:`
                .legal-content {
                    padding: var(--spacing-xl) 0;
                    background: var(--background-alt);
                }
                .legal-card {
                    padding: 4rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .last-updated {
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                }
                .legal-section {
                    margin-bottom: 3rem;
                }
                .legal-section h2 {
                    font-size: 1.5rem;
                    color: var(--primary);
                    margin-bottom: 1.25rem;
                }
                .legal-section p {
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 1rem;
                }
                .legal-section ul {
                    padding-left: 1.5rem;
                    color: var(--text-muted);
                }
                .legal-section li {
                    margin-bottom: 0.5rem;
                    line-height: 1.6;
                }
                @media (max-width: 768px) {
                    .legal-card {
                        padding: 2rem 1.5rem;
                    }
                }
            `})]}),uS=()=>o.jsxs("div",{className:"page-legal",children:[o.jsx(tt,{title:"Terms & Conditions",subtitle:"Governing the use of Vir Softech platforms and services."}),o.jsx("section",{className:"section legal-content",children:o.jsx("div",{className:"container",children:o.jsxs(L.div,{className:"card legal-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[o.jsx("p",{className:"last-updated",children:"Last Updated: January 1, 2025"}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"1. Acceptance of Terms"}),o.jsx("p",{children:"By accessing or using any Vir Softech platform, website, or service (including VSDOX and eVAL), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services."})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"2. Acceptable Use"}),o.jsx("p",{children:"You agree not to use our services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use our services in any way that could damage our platforms, services, or general business."}),o.jsx("p",{children:"Prohibited actions include: reverse engineering, web scraping without authorization, uploading malicious content, or attempting to breach security protocols."})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"3. Intellectual Property"}),o.jsxs("p",{children:["All software, technology, branding, and content provided through our services are the exclusive property of ",o.jsx("strong",{children:"Vir Softech Pvt. Ltd."})," Customer data remains the exclusive property of the customer, and Vir Softech claims no ownership over user-provided data."]})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"4. Limitation of Liability"}),o.jsx("p",{children:"To the maximum extent permitted by law, Vir Softech's cumulative liability is limited to the fees paid by the user in the 12 months preceding a claim. We shall not be liable for any indirect, incidental, or consequential damages."})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"5. Service Level Agreement (SLA)"}),o.jsx("p",{children:"We commit to a 99.9% platform uptime for our professional and enterprise tiers. Scheduled maintenance will be communicated in advance."})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"6. Governing Law"}),o.jsxs("p",{children:["These terms shall be governed by and construed in accordance with the laws of ",o.jsx("strong",{children:"India"}),". Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh."]})]}),o.jsxs("div",{className:"legal-section",children:[o.jsx("h2",{children:"7. Contact Information"}),o.jsxs("p",{children:["For any questions regarding these Terms, please contact us at ",o.jsx("strong",{children:"corp@virsoftech.com"}),"."]})]})]})})}),o.jsx("style",{jsx:!0,children:`
                .legal-content {
                    padding: var(--spacing-xl) 0;
                    background: var(--background-alt);
                }
                .legal-card {
                    padding: 4rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .last-updated {
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                }
                .legal-section {
                    margin-bottom: 3rem;
                }
                .legal-section h2 {
                    font-size: 1.5rem;
                    color: var(--primary);
                    margin-bottom: 1.25rem;
                }
                .legal-section p {
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 1rem;
                }
                @media (max-width: 768px) {
                    .legal-card {
                        padding: 2rem 1.5rem;
                    }
                }
            `})]}),dS=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState(""),a=cc(),l=c=>{c.preventDefault(),e==="corp@virsoftech.com"&&n==="admin123"?(localStorage.setItem("adminToken","demo-token"),a("/admin/dashboard")):s("Invalid credentials. For demo use corp@virsoftech.com / admin123")};return o.jsxs("div",{className:"admin-login-container",children:[o.jsxs("div",{className:"login-card",children:[o.jsxs("div",{className:"login-header",children:[o.jsx("h2",{children:"Admin Portal"}),o.jsx("p",{children:"Login to manage website content"})]}),o.jsxs("form",{onSubmit:l,className:"login-form",children:[i&&o.jsx("div",{className:"error-message",children:i}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Email Address"}),o.jsxs("div",{className:"input-with-icon",children:[o.jsx(dc,{size:18,className:"input-icon"}),o.jsx("input",{type:"email",value:e,onChange:c=>t(c.target.value),placeholder:"corp@virsoftech.com",required:!0})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Password"}),o.jsxs("div",{className:"input-with-icon",children:[o.jsx(Bx,{size:18,className:"input-icon"}),o.jsx("input",{type:"password",value:n,onChange:c=>r(c.target.value),placeholder:"••••••••",required:!0})]})]}),o.jsx("button",{type:"submit",className:"btn btn-primary w-full",children:"Secure Login"})]})]}),o.jsx("style",{jsx:!0,children:`
                .admin-login-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--background-alt);
                    padding: 2rem;
                }

                .login-card {
                    background: white;
                    padding: 3rem;
                    border-radius: var(--radius-xl);
                    box-shadow: var(--shadow-xl);
                    width: 100%;
                    max-width: 450px;
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .login-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .login-header h2 {
                    font-size: 2rem;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                }

                .login-header p {
                    color: var(--text-muted);
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: var(--text);
                    font-size: 0.9rem;
                }

                .input-with-icon {
                    position: relative;
                }

                .input-icon {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-light);
                }

                .input-with-icon input {
                    width: 100%;
                    padding: 0.85rem 1rem 0.85rem 3rem;
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius-md);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .input-with-icon input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
                }

                .error-message {
                    background: rgba(239, 68, 68, 0.1);
                    color: #b91c1c;
                    padding: 0.75rem;
                    border-radius: var(--radius-sm);
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                    text-align: center;
                }

                .w-full {
                    width: 100%;
                }
            `})]})},fS=()=>{const e=cc(),[t,n]=w.useState([{id:1,title:"The Future of ECM",published:!0,date:"2026-05-20",coverImage:null},{id:2,title:"Automating Artwork Generation",published:!1,date:"2026-05-22",coverImage:null}]),[r,i]=w.useState(!1),[s,a]=w.useState({title:"",content:"",coverImage:null}),[l,c]=w.useState(null),[u,d]=w.useState(null);w.useEffect(()=>{localStorage.getItem("adminToken")||e("/admin/login")},[e]);const f=()=>{localStorage.removeItem("adminToken"),e("/")},p=m=>{const h=m.target.files[0];if(h){a({...s,coverImage:h});const g=new FileReader;g.onloadend=()=>{c(g.result)},g.readAsDataURL(h)}},v=m=>{if(m.preventDefault(),u)n(t.map(h=>h.id===u?{...h,title:s.title,content:s.content,coverImage:l||h.coverImage}:h));else{const h={id:t.length>0?Math.max(...t.map(g=>g.id))+1:1,title:s.title,content:s.content,published:!0,date:new Date().toISOString().split("T")[0],coverImage:l};n([h,...t])}j()},y=m=>{a({title:m.title,content:m.content||"",coverImage:m.coverImage}),c(m.coverImage),d(m.id),i(!0),window.scrollTo(0,0)},x=m=>{window.confirm("Are you sure you want to delete this blog post?")&&n(t.filter(h=>h.id!==m))},j=()=>{i(!1),d(null),a({title:"",content:"",coverImage:null}),c(null)};return o.jsxs("div",{className:"dashboard-container",children:[o.jsxs("aside",{className:"dashboard-sidebar",children:[o.jsx("div",{className:"sidebar-header",children:o.jsx("h2",{children:"Admin Panel"})}),o.jsxs("nav",{className:"sidebar-nav",children:[o.jsxs("button",{className:"nav-item active",children:[o.jsx(uc,{size:18})," Manage Blogs"]}),o.jsxs("button",{className:"nav-item text-danger",onClick:f,children:[o.jsx(Ux,{size:18})," Logout"]})]})]}),o.jsxs("main",{className:"dashboard-main",children:[o.jsxs("div",{className:"main-header",children:[o.jsx("h1",{children:"Blog Posts"}),o.jsxs("button",{className:"btn btn-primary",onClick:()=>{j(),i(!0)},children:[o.jsx(Gx,{size:18})," Add New Blog"]})]}),r&&o.jsxs("div",{className:"card add-blog-form",children:[o.jsx("h3",{children:u?"Edit Post":"Create New Post"}),o.jsxs("form",{onSubmit:v,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Post Title"}),o.jsx("input",{type:"text",value:s.title,onChange:m=>a({...s,title:m.target.value}),required:!0,placeholder:"Enter blog title..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Cover Image"}),o.jsxs("div",{className:"image-upload-wrapper",children:[o.jsx("input",{type:"file",accept:"image/*",onChange:p,className:"file-input",id:"coverImageUpload"}),o.jsxs("label",{htmlFor:"coverImageUpload",className:"upload-label",children:[o.jsx(gd,{size:20}),o.jsx("span",{children:s.coverImage?s.coverImage.name:"Choose an image..."})]})]}),l&&o.jsx("div",{className:"image-preview",children:o.jsx("img",{src:l,alt:"Preview"})})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Content (Markdown/HTML)"}),o.jsx("textarea",{rows:"10",value:s.content,onChange:m=>a({...s,content:m.target.value}),required:!0,placeholder:"Write your blog post here..."})]}),o.jsxs("div",{className:"form-actions",children:[o.jsx("button",{type:"button",className:"btn btn-outline",onClick:j,children:"Cancel"}),o.jsx("button",{type:"submit",className:"btn btn-primary",children:u?"Update Post":"Publish Post"})]})]})]}),o.jsx("div",{className:"card blogs-table-card",children:o.jsxs("table",{className:"blogs-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Image"}),o.jsx("th",{children:"Title"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Date"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:t.map(m=>o.jsxs("tr",{children:[o.jsx("td",{children:m.coverImage?o.jsx("img",{src:m.coverImage,alt:"Cover",className:"table-img"}):o.jsx("div",{className:"table-img-placeholder",children:o.jsx(gd,{size:16})})}),o.jsx("td",{className:"font-bold",children:m.title}),o.jsx("td",{children:o.jsx("span",{className:`status-badge ${m.published?"published":"draft"}`,children:m.published?"Published":"Draft"})}),o.jsx("td",{children:m.date}),o.jsx("td",{children:o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"icon-btn edit",onClick:()=>y(m),title:"Edit",children:o.jsx(Kx,{size:16})}),o.jsx("button",{className:"icon-btn delete",onClick:()=>x(m.id),title:"Delete",children:o.jsx(e1,{size:16})})]})})]},m.id))})]})})]}),o.jsx("style",{jsx:!0,children:`
                .dashboard-container {
                    display: flex;
                    min-height: 100vh;
                    background: #f8fafc;
                }

                .dashboard-sidebar {
                    width: 250px;
                    background: #0f172a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }

                .sidebar-header {
                    padding: 2rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }

                .sidebar-header h2 {
                    color: white;
                    font-size: 1.5rem;
                }

                .sidebar-nav {
                    padding: 1.5rem 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .nav-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: transparent;
                    border: none;
                    color: rgba(255,255,255,0.7);
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    border-radius: var(--radius-md);
                    transition: all 0.2s;
                    text-align: left;
                }

                .nav-item:hover, .nav-item.active {
                    background: rgba(255,255,255,0.1);
                    color: white;
                }

                .nav-item.text-danger:hover {
                    background: rgba(239, 68, 68, 0.1);
                    color: #ef4444;
                }

                .dashboard-main {
                    flex: 1;
                    padding: 3rem;
                }

                .main-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2.5rem;
                }

                .main-header h1 {
                    font-size: 2rem;
                    color: #0f172a;
                }

                .add-blog-form {
                    margin-bottom: 2.5rem;
                    background: white;
                }

                .add-blog-form h3 {
                    margin-bottom: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }

                .form-group input[type="text"], .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius-md);
                    font-family: inherit;
                }

                .form-group input:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                }

                .image-upload-wrapper {
                    position: relative;
                    margin-bottom: 1rem;
                }

                .file-input {
                    display: none;
                }

                .upload-label {
                    display: inline-flex !important;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1.5rem;
                    background: #f1f5f9;
                    border: 1px dashed #cbd5e1;
                    border-radius: var(--radius-md);
                    cursor: pointer;
                    color: var(--text-muted);
                    font-weight: 500 !important;
                    transition: all 0.2s ease;
                }

                .upload-label:hover {
                    background: #e2e8f0;
                    border-color: var(--primary);
                    color: var(--primary);
                }

                .image-preview {
                    margin-top: 1rem;
                    max-width: 300px;
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                }

                .image-preview img {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }

                .form-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: flex-end;
                }

                .blogs-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .blogs-table th, .blogs-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #e2e8f0;
                    vertical-align: middle;
                }

                .blogs-table th {
                    font-weight: 600;
                    color: var(--text-muted);
                    background: #f8fafc;
                }

                .table-img {
                    width: 48px;
                    height: 32px;
                    border-radius: 4px;
                    object-fit: cover;
                }

                .table-img-placeholder {
                    width: 48px;
                    height: 32px;
                    border-radius: 4px;
                    background: #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                }

                .font-bold {
                    font-weight: 600;
                    color: var(--text);
                }

                .status-badge {
                    padding: 0.25rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .status-badge.published {
                    background: #dcfce7;
                    color: #166534;
                }

                .status-badge.draft {
                    background: #fef9c3;
                    color: #854d0e;
                }

                .action-buttons {
                    display: flex;
                    gap: 0.5rem;
                }

                .icon-btn {
                    background: #f1f5f9;
                    border: none;
                    width: 32px;
                    height: 32px;
                    border-radius: var(--radius-sm);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .icon-btn.edit { color: #3b82f6; }
                .icon-btn.edit:hover { background: #dbeafe; }

                .icon-btn.delete { color: #ef4444; }
                .icon-btn.delete:hover { background: #fee2e2; }
            `})]})},pS=()=>o.jsxs("div",{className:"app",children:[o.jsx(Ab,{}),o.jsx("main",{children:o.jsxs(oh,{children:[o.jsx(je,{path:"/",element:o.jsx(eS,{})}),o.jsx(je,{path:"/about",element:o.jsx(tS,{})}),o.jsx(je,{path:"/solutions",element:o.jsx(nS,{})}),o.jsx(je,{path:"/solutions/print-product-engineering",element:o.jsx(sS,{})}),o.jsx(je,{path:"/solutions/design-artwork-automation",element:o.jsx(oS,{})}),o.jsx(je,{path:"/solutions/:slug",element:o.jsx(iS,{})}),o.jsx(je,{path:"/careers",element:o.jsx(aS,{})}),o.jsx(je,{path:"/blog",element:o.jsx(lS,{})}),o.jsx(je,{path:"/contact",element:o.jsx(rS,{})}),o.jsx(je,{path:"/privacy",element:o.jsx(cS,{})}),o.jsx(je,{path:"/terms",element:o.jsx(uS,{})})]})}),o.jsx(Db,{}),o.jsx(Rb,{})]});function mS(){return o.jsxs(gx,{children:[o.jsx(Ib,{}),o.jsxs(oh,{children:[o.jsx(je,{path:"/admin/login",element:o.jsx(dS,{})}),o.jsx(je,{path:"/admin/dashboard",element:o.jsx(fS,{})}),o.jsx(je,{path:"/*",element:o.jsx(pS,{})})]})]})}Xo.createRoot(document.getElementById("root")).render(o.jsx(Kf.StrictMode,{children:o.jsx(mS,{})}));
