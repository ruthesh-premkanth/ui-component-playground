(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))z(x);new MutationObserver(x=>{for(const W of x)if(W.type==="childList")for(const D of W.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&z(D)}).observe(document,{childList:!0,subtree:!0});function f(x){const W={};return x.integrity&&(W.integrity=x.integrity),x.referrerPolicy&&(W.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?W.credentials="include":x.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function z(x){if(x.ep)return;x.ep=!0;const W=f(x);fetch(x.href,W)}})();var Ql={exports:{}},_r={},Gl={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function xu(){if(Xd)return V;Xd=1;var a=Symbol.for("react.element"),p=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),D=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ae=Symbol.iterator;function oe(g){return g===null||typeof g!="object"?null:(g=ae&&g[ae]||g["@@iterator"],typeof g=="function"?g:null)}var Ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xe=Object.assign,ie={};function q(g,v,U){this.props=g,this.context=v,this.refs=ie,this.updater=U||Ge}q.prototype.isReactComponent={},q.prototype.setState=function(g,v){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,v,"setState")},q.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Rt(){}Rt.prototype=q.prototype;function vt(g,v,U){this.props=g,this.context=v,this.refs=ie,this.updater=U||Ge}var st=vt.prototype=new Rt;st.constructor=vt,Xe(st,q.prototype),st.isPureReactComponent=!0;var ke=Array.isArray,at=Object.prototype.hasOwnProperty,Ie={current:null},Ae={key:!0,ref:!0,__self:!0,__source:!0};function Ke(g,v,U){var O,$={},Y=null,ee=null;if(v!=null)for(O in v.ref!==void 0&&(ee=v.ref),v.key!==void 0&&(Y=""+v.key),v)at.call(v,O)&&!Ae.hasOwnProperty(O)&&($[O]=v[O]);var X=arguments.length-2;if(X===1)$.children=U;else if(1<X){for(var le=Array(X),Oe=0;Oe<X;Oe++)le[Oe]=arguments[Oe+2];$.children=le}if(g&&g.defaultProps)for(O in X=g.defaultProps,X)$[O]===void 0&&($[O]=X[O]);return{$$typeof:a,type:g,key:Y,ref:ee,props:$,_owner:Ie.current}}function Ft(g,v){return{$$typeof:a,type:g.type,key:v,ref:g.ref,props:g.props,_owner:g._owner}}function It(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function sn(g){var v={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(U){return v[U]})}var jt=/\/+/g;function Ve(g,v){return typeof g=="object"&&g!==null&&g.key!=null?sn(""+g.key):v.toString(36)}function dt(g,v,U,O,$){var Y=typeof g;(Y==="undefined"||Y==="boolean")&&(g=null);var ee=!1;if(g===null)ee=!0;else switch(Y){case"string":case"number":ee=!0;break;case"object":switch(g.$$typeof){case a:case p:ee=!0}}if(ee)return ee=g,$=$(ee),g=O===""?"."+Ve(ee,0):O,ke($)?(U="",g!=null&&(U=g.replace(jt,"$&/")+"/"),dt($,v,U,"",function(Oe){return Oe})):$!=null&&(It($)&&($=Ft($,U+(!$.key||ee&&ee.key===$.key?"":(""+$.key).replace(jt,"$&/")+"/")+g)),v.push($)),1;if(ee=0,O=O===""?".":O+":",ke(g))for(var X=0;X<g.length;X++){Y=g[X];var le=O+Ve(Y,X);ee+=dt(Y,v,U,le,$)}else if(le=oe(g),typeof le=="function")for(g=le.call(g),X=0;!(Y=g.next()).done;)Y=Y.value,le=O+Ve(Y,X++),ee+=dt(Y,v,U,le,$);else if(Y==="object")throw v=String(g),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return ee}function St(g,v,U){if(g==null)return g;var O=[],$=0;return dt(g,O,"","",function(Y){return v.call(U,Y,$++)}),O}function Me(g){if(g._status===-1){var v=g._result;v=v(),v.then(function(U){(g._status===0||g._status===-1)&&(g._status=1,g._result=U)},function(U){(g._status===0||g._status===-1)&&(g._status=2,g._result=U)}),g._status===-1&&(g._status=0,g._result=v)}if(g._status===1)return g._result.default;throw g._result}var pe={current:null},k={transition:null},N={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:k,ReactCurrentOwner:Ie};function I(){throw Error("act(...) is not supported in production builds of React.")}return V.Children={map:St,forEach:function(g,v,U){St(g,function(){v.apply(this,arguments)},U)},count:function(g){var v=0;return St(g,function(){v++}),v},toArray:function(g){return St(g,function(v){return v})||[]},only:function(g){if(!It(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},V.Component=q,V.Fragment=f,V.Profiler=x,V.PureComponent=vt,V.StrictMode=z,V.Suspense=G,V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,V.act=I,V.cloneElement=function(g,v,U){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var O=Xe({},g.props),$=g.key,Y=g.ref,ee=g._owner;if(v!=null){if(v.ref!==void 0&&(Y=v.ref,ee=Ie.current),v.key!==void 0&&($=""+v.key),g.type&&g.type.defaultProps)var X=g.type.defaultProps;for(le in v)at.call(v,le)&&!Ae.hasOwnProperty(le)&&(O[le]=v[le]===void 0&&X!==void 0?X[le]:v[le])}var le=arguments.length-2;if(le===1)O.children=U;else if(1<le){X=Array(le);for(var Oe=0;Oe<le;Oe++)X[Oe]=arguments[Oe+2];O.children=X}return{$$typeof:a,type:g.type,key:$,ref:Y,props:O,_owner:ee}},V.createContext=function(g){return g={$$typeof:D,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:W,_context:g},g.Consumer=g},V.createElement=Ke,V.createFactory=function(g){var v=Ke.bind(null,g);return v.type=g,v},V.createRef=function(){return{current:null}},V.forwardRef=function(g){return{$$typeof:Z,render:g}},V.isValidElement=It,V.lazy=function(g){return{$$typeof:ge,_payload:{_status:-1,_result:g},_init:Me}},V.memo=function(g,v){return{$$typeof:L,type:g,compare:v===void 0?null:v}},V.startTransition=function(g){var v=k.transition;k.transition={};try{g()}finally{k.transition=v}},V.unstable_act=I,V.useCallback=function(g,v){return pe.current.useCallback(g,v)},V.useContext=function(g){return pe.current.useContext(g)},V.useDebugValue=function(){},V.useDeferredValue=function(g){return pe.current.useDeferredValue(g)},V.useEffect=function(g,v){return pe.current.useEffect(g,v)},V.useId=function(){return pe.current.useId()},V.useImperativeHandle=function(g,v,U){return pe.current.useImperativeHandle(g,v,U)},V.useInsertionEffect=function(g,v){return pe.current.useInsertionEffect(g,v)},V.useLayoutEffect=function(g,v){return pe.current.useLayoutEffect(g,v)},V.useMemo=function(g,v){return pe.current.useMemo(g,v)},V.useReducer=function(g,v,U){return pe.current.useReducer(g,v,U)},V.useRef=function(g){return pe.current.useRef(g)},V.useState=function(g){return pe.current.useState(g)},V.useSyncExternalStore=function(g,v,U){return pe.current.useSyncExternalStore(g,v,U)},V.useTransition=function(){return pe.current.useTransition()},V.version="18.3.1",V}var Kd;function Zl(){return Kd||(Kd=1,Gl.exports=xu()),Gl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function gu(){if(Jd)return _r;Jd=1;var a=Zl(),p=Symbol.for("react.element"),f=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,x=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function D(Z,G,L){var ge,ae={},oe=null,Ge=null;L!==void 0&&(oe=""+L),G.key!==void 0&&(oe=""+G.key),G.ref!==void 0&&(Ge=G.ref);for(ge in G)z.call(G,ge)&&!W.hasOwnProperty(ge)&&(ae[ge]=G[ge]);if(Z&&Z.defaultProps)for(ge in G=Z.defaultProps,G)ae[ge]===void 0&&(ae[ge]=G[ge]);return{$$typeof:p,type:Z,key:oe,ref:Ge,props:ae,_owner:x.current}}return _r.Fragment=f,_r.jsx=D,_r.jsxs=D,_r}var Zd;function hu(){return Zd||(Zd=1,Ql.exports=gu()),Ql.exports}var n=hu(),Go={},Xl={exports:{}},De={},Kl={exports:{}},Jl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function yu(){return qd||(qd=1,(function(a){function p(k,N){var I=k.length;k.push(N);e:for(;0<I;){var g=I-1>>>1,v=k[g];if(0<x(v,N))k[g]=N,k[I]=v,I=g;else break e}}function f(k){return k.length===0?null:k[0]}function z(k){if(k.length===0)return null;var N=k[0],I=k.pop();if(I!==N){k[0]=I;e:for(var g=0,v=k.length,U=v>>>1;g<U;){var O=2*(g+1)-1,$=k[O],Y=O+1,ee=k[Y];if(0>x($,I))Y<v&&0>x(ee,$)?(k[g]=ee,k[Y]=I,g=Y):(k[g]=$,k[O]=I,g=O);else if(Y<v&&0>x(ee,I))k[g]=ee,k[Y]=I,g=Y;else break e}}return N}function x(k,N){var I=k.sortIndex-N.sortIndex;return I!==0?I:k.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var W=performance;a.unstable_now=function(){return W.now()}}else{var D=Date,Z=D.now();a.unstable_now=function(){return D.now()-Z}}var G=[],L=[],ge=1,ae=null,oe=3,Ge=!1,Xe=!1,ie=!1,q=typeof setTimeout=="function"?setTimeout:null,Rt=typeof clearTimeout=="function"?clearTimeout:null,vt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function st(k){for(var N=f(L);N!==null;){if(N.callback===null)z(L);else if(N.startTime<=k)z(L),N.sortIndex=N.expirationTime,p(G,N);else break;N=f(L)}}function ke(k){if(ie=!1,st(k),!Xe)if(f(G)!==null)Xe=!0,Me(at);else{var N=f(L);N!==null&&pe(ke,N.startTime-k)}}function at(k,N){Xe=!1,ie&&(ie=!1,Rt(Ke),Ke=-1),Ge=!0;var I=oe;try{for(st(N),ae=f(G);ae!==null&&(!(ae.expirationTime>N)||k&&!sn());){var g=ae.callback;if(typeof g=="function"){ae.callback=null,oe=ae.priorityLevel;var v=g(ae.expirationTime<=N);N=a.unstable_now(),typeof v=="function"?ae.callback=v:ae===f(G)&&z(G),st(N)}else z(G);ae=f(G)}if(ae!==null)var U=!0;else{var O=f(L);O!==null&&pe(ke,O.startTime-N),U=!1}return U}finally{ae=null,oe=I,Ge=!1}}var Ie=!1,Ae=null,Ke=-1,Ft=5,It=-1;function sn(){return!(a.unstable_now()-It<Ft)}function jt(){if(Ae!==null){var k=a.unstable_now();It=k;var N=!0;try{N=Ae(!0,k)}finally{N?Ve():(Ie=!1,Ae=null)}}else Ie=!1}var Ve;if(typeof vt=="function")Ve=function(){vt(jt)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,St=dt.port2;dt.port1.onmessage=jt,Ve=function(){St.postMessage(null)}}else Ve=function(){q(jt,0)};function Me(k){Ae=k,Ie||(Ie=!0,Ve())}function pe(k,N){Ke=q(function(){k(a.unstable_now())},N)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_continueExecution=function(){Xe||Ge||(Xe=!0,Me(at))},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ft=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return oe},a.unstable_getFirstCallbackNode=function(){return f(G)},a.unstable_next=function(k){switch(oe){case 1:case 2:case 3:var N=3;break;default:N=oe}var I=oe;oe=N;try{return k()}finally{oe=I}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(k,N){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var I=oe;oe=k;try{return N()}finally{oe=I}},a.unstable_scheduleCallback=function(k,N,I){var g=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?g+I:g):I=g,k){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=I+v,k={id:ge++,callback:N,priorityLevel:k,startTime:I,expirationTime:v,sortIndex:-1},I>g?(k.sortIndex=I,p(L,k),f(G)===null&&k===f(L)&&(ie?(Rt(Ke),Ke=-1):ie=!0,pe(ke,I-g))):(k.sortIndex=v,p(G,k),Xe||Ge||(Xe=!0,Me(at))),k},a.unstable_shouldYield=sn,a.unstable_wrapCallback=function(k){var N=oe;return function(){var I=oe;oe=N;try{return k.apply(this,arguments)}finally{oe=I}}}})(Jl)),Jl}var ec;function mu(){return ec||(ec=1,Kl.exports=yu()),Kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function bu(){if(tc)return De;tc=1;var a=Zl(),p=mu();function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z=new Set,x={};function W(e,t){D(e,t),D(e+"Capture",t)}function D(e,t){for(x[e]=t,e=0;e<t.length;e++)z.add(t[e])}var Z=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),G=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ge={},ae={};function oe(e){return G.call(ae,e)?!0:G.call(ge,e)?!1:L.test(e)?ae[e]=!0:(ge[e]=!0,!1)}function Ge(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xe(e,t,r,o){if(t===null||typeof t>"u"||Ge(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ie(e,t,r,o,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new ie(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new ie(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new ie(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new ie(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new ie(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new ie(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rt=/[\-:]([a-z])/g;function vt(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rt,vt);q[t]=new ie(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rt,vt);q[t]=new ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rt,vt);q[t]=new ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function st(e,t,r,o){var i=q.hasOwnProperty(t)?q[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xe(t,r,i,o)&&(r=null),o||i===null?oe(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,o=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var ke=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,at=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Ft=Symbol.for("react.profiler"),It=Symbol.for("react.provider"),sn=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),dt=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),k=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,g;function v(e){if(g===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var U=!1;function O(e,t){if(!e||U)return"";U=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var o=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){o=m}e.call(t.prototype)}else{try{throw Error()}catch(m){o=m}e()}}catch(m){if(m&&o&&typeof m.stack=="string"){for(var i=m.stack.split(`
`),l=o.stack.split(`
`),s=i.length-1,d=l.length-1;1<=s&&0<=d&&i[s]!==l[d];)d--;for(;1<=s&&0<=d;s--,d--)if(i[s]!==l[d]){if(s!==1||d!==1)do if(s--,d--,0>d||i[s]!==l[d]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=d);break}}}finally{U=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?v(e):""}function $(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ae:return"Fragment";case Ie:return"Portal";case Ft:return"Profiler";case Ke:return"StrictMode";case Ve:return"Suspense";case dt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sn:return(e.displayName||"Context")+".Consumer";case It:return(e._context.displayName||"Context")+".Provider";case jt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case St:return t=e.displayName||null,t!==null?t:Y(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return Y(e(t))}catch{}}return null}function ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function X(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oe(e){var t=le(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){o=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){e._valueTracker||(e._valueTracker=Oe(e))}function ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=le(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ei(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ns(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=X(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rs(e,t){t=t.checked,t!=null&&st(e,"checked",t,!1)}function ti(e,t){rs(e,t);var r=X(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ni(e,t.type,r):t.hasOwnProperty("defaultValue")&&ni(e,t.type,X(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function os(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ni(e,t,r){(t!=="number"||Pr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Kn=Array.isArray;function kn(e,t,r,o){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&o&&(e[r].defaultSelected=!0)}else{for(r=""+X(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ri(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(f(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function is(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(f(92));if(Kn(r)){if(1<r.length)throw Error(f(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:X(r)}}function ls(e,t){var r=X(t.value),o=X(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function as(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?as(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,ds=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mc=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(e){mc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zn[t]=Zn[e]})});function cs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Zn.hasOwnProperty(e)&&Zn[e]?(""+t).trim():t+"px"}function ps(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=cs(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,i):e[r]=i}}var bc=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ii(e,t){if(t){if(bc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(f(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(t.style!=null&&typeof t.style!="object")throw Error(f(62))}}function li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var di=null,zn=null,Cn=null;function us(e){if(e=vr(e)){if(typeof di!="function")throw Error(f(280));var t=e.stateNode;t&&(t=ao(t),di(e.stateNode,e.type,t))}}function fs(e){zn?Cn?Cn.push(e):Cn=[e]:zn=e}function xs(){if(zn){var e=zn,t=Cn;if(Cn=zn=null,us(e),t)for(e=0;e<t.length;e++)us(t[e])}}function gs(e,t){return e(t)}function hs(){}var ci=!1;function ys(e,t,r){if(ci)return e(t,r);ci=!0;try{return gs(e,t,r)}finally{ci=!1,(zn!==null||Cn!==null)&&(hs(),xs())}}function qn(e,t){var r=e.stateNode;if(r===null)return null;var o=ao(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(f(231,t,typeof r));return r}var pi=!1;if(Z)try{var er={};Object.defineProperty(er,"passive",{get:function(){pi=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{pi=!1}function vc(e,t,r,o,i,l,s,d,c){var m=Array.prototype.slice.call(arguments,3);try{t.apply(r,m)}catch(j){this.onError(j)}}var tr=!1,Dr=null,Ur=!1,ui=null,jc={onError:function(e){tr=!0,Dr=e}};function Sc(e,t,r,o,i,l,s,d,c){tr=!1,Dr=null,vc.apply(jc,arguments)}function wc(e,t,r,o,i,l,s,d,c){if(Sc.apply(this,arguments),tr){if(tr){var m=Dr;tr=!1,Dr=null}else throw Error(f(198));Ur||(Ur=!0,ui=m)}}function an(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ms(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bs(e){if(an(e)!==e)throw Error(f(188))}function kc(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(f(188));return t!==e?null:e}for(var r=e,o=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(o=i.return,o!==null){r=o;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return bs(i),e;if(l===o)return bs(i),t;l=l.sibling}throw Error(f(188))}if(r.return!==o.return)r=i,o=l;else{for(var s=!1,d=i.child;d;){if(d===r){s=!0,r=i,o=l;break}if(d===o){s=!0,o=i,r=l;break}d=d.sibling}if(!s){for(d=l.child;d;){if(d===r){s=!0,r=l,o=i;break}if(d===o){s=!0,o=l,r=i;break}d=d.sibling}if(!s)throw Error(f(189))}}if(r.alternate!==o)throw Error(f(190))}if(r.tag!==3)throw Error(f(188));return r.stateNode.current===r?e:t}function vs(e){return e=kc(e),e!==null?js(e):null}function js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=js(e);if(t!==null)return t;e=e.sibling}return null}var Ss=p.unstable_scheduleCallback,ws=p.unstable_cancelCallback,zc=p.unstable_shouldYield,Cc=p.unstable_requestPaint,fe=p.unstable_now,Bc=p.unstable_getCurrentPriorityLevel,fi=p.unstable_ImmediatePriority,ks=p.unstable_UserBlockingPriority,Vr=p.unstable_NormalPriority,Rc=p.unstable_LowPriority,zs=p.unstable_IdlePriority,Or=null,wt=null;function Ic(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Or,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Wc,Tc=Math.log,Ec=Math.LN2;function Wc(e){return e>>>=0,e===0?32:31-(Tc(e)/Ec|0)|0}var Hr=64,$r=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,i=e.suspendedLanes,l=e.pingedLanes,s=r&268435455;if(s!==0){var d=s&~i;d!==0?o=nr(d):(l&=s,l!==0&&(o=nr(l)))}else s=r&~i,s!==0?o=nr(s):l!==0&&(o=nr(l));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-ct(t),i=1<<r,o|=e[r],t&=~i;return o}function Ac(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mc(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-ct(l),d=1<<s,c=i[s];c===-1?((d&r)===0||(d&o)!==0)&&(i[s]=Ac(d,t)):c<=t&&(e.expiredLanes|=d),l&=~d}}function xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cs(){var e=Hr;return Hr<<=1,(Hr&4194240)===0&&(Hr=64),e}function gi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function rr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=r}function _c(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ct(r),l=1<<i;t[i]=0,o[i]=-1,e[i]=-1,r&=~l}}function hi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-ct(r),i=1<<o;i&t|e[o]&t&&(e[o]|=t),r&=~i}}var K=0;function Bs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rs,yi,Is,Ts,Es,mi=!1,Qr=[],Dt=null,Ut=null,Vt=null,or=new Map,ir=new Map,Ot=[],Nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ws(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function lr(e,t,r,o,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:l,targetContainers:[i]},t!==null&&(t=vr(t),t!==null&&yi(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lc(e,t,r,o,i){switch(t){case"focusin":return Dt=lr(Dt,e,t,r,o,i),!0;case"dragenter":return Ut=lr(Ut,e,t,r,o,i),!0;case"mouseover":return Vt=lr(Vt,e,t,r,o,i),!0;case"pointerover":var l=i.pointerId;return or.set(l,lr(or.get(l)||null,e,t,r,o,i)),!0;case"gotpointercapture":return l=i.pointerId,ir.set(l,lr(ir.get(l)||null,e,t,r,o,i)),!0}return!1}function As(e){var t=dn(e.target);if(t!==null){var r=an(t);if(r!==null){if(t=r.tag,t===13){if(t=ms(r),t!==null){e.blockedOn=t,Es(e.priority,function(){Is(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);si=o,r.target.dispatchEvent(o),si=null}else return t=vr(r),t!==null&&yi(t),e.blockedOn=r,!1;t.shift()}return!0}function Ms(e,t,r){Gr(e)&&r.delete(t)}function Pc(){mi=!1,Dt!==null&&Gr(Dt)&&(Dt=null),Ut!==null&&Gr(Ut)&&(Ut=null),Vt!==null&&Gr(Vt)&&(Vt=null),or.forEach(Ms),ir.forEach(Ms)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,mi||(mi=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Pc)))}function ar(e){function t(i){return sr(i,e)}if(0<Qr.length){sr(Qr[0],e);for(var r=1;r<Qr.length;r++){var o=Qr[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Dt!==null&&sr(Dt,e),Ut!==null&&sr(Ut,e),Vt!==null&&sr(Vt,e),or.forEach(t),ir.forEach(t),r=0;r<Ot.length;r++)o=Ot[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Ot.length&&(r=Ot[0],r.blockedOn===null);)As(r),r.blockedOn===null&&Ot.shift()}var Bn=ke.ReactCurrentBatchConfig,Xr=!0;function Fc(e,t,r,o){var i=K,l=Bn.transition;Bn.transition=null;try{K=1,bi(e,t,r,o)}finally{K=i,Bn.transition=l}}function Dc(e,t,r,o){var i=K,l=Bn.transition;Bn.transition=null;try{K=4,bi(e,t,r,o)}finally{K=i,Bn.transition=l}}function bi(e,t,r,o){if(Xr){var i=vi(e,t,r,o);if(i===null)Li(e,t,o,Kr,r),Ws(e,o);else if(Lc(i,e,t,r,o))o.stopPropagation();else if(Ws(e,o),t&4&&-1<Nc.indexOf(e)){for(;i!==null;){var l=vr(i);if(l!==null&&Rs(l),l=vi(e,t,r,o),l===null&&Li(e,t,o,Kr,r),l===i)break;i=l}i!==null&&o.stopPropagation()}else Li(e,t,o,null,r)}}var Kr=null;function vi(e,t,r,o){if(Kr=null,e=ai(o),e=dn(e),e!==null)if(t=an(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ms(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function _s(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bc()){case fi:return 1;case ks:return 4;case Vr:case Rc:return 16;case zs:return 536870912;default:return 16}default:return 16}}var Ht=null,ji=null,Jr=null;function Ns(){if(Jr)return Jr;var e,t=ji,r=t.length,o,i="value"in Ht?Ht.value:Ht.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(o=1;o<=s&&t[r-o]===i[l-o];o++);return Jr=i.slice(e,1<o?1-o:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function Ls(){return!1}function He(e){function t(r,o,i,l,s){this._reactName=r,this._targetInst=i,this.type=o,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(r=e[d],this[d]=r?r(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?qr:Ls,this.isPropagationStopped=Ls,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=He(Rn),dr=I({},Rn,{view:0,detail:0}),Uc=He(dr),wi,ki,cr,eo=I({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(wi=e.screenX-cr.screenX,ki=e.screenY-cr.screenY):ki=wi=0,cr=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:ki}}),Ps=He(eo),Vc=I({},eo,{dataTransfer:0}),Oc=He(Vc),Hc=I({},dr,{relatedTarget:0}),zi=He(Hc),$c=I({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yc=He($c),Qc=I({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gc=He(Qc),Xc=I({},Rn,{data:0}),Fs=He(Xc),Kc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zc[e])?!!t[e]:!1}function Ci(){return qc}var ep=I({},dr,{key:function(e){if(e.key){var t=Kc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ci,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tp=He(ep),np=I({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=He(np),rp=I({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ci}),op=He(rp),ip=I({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lp=He(ip),sp=I({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ap=He(sp),dp=[9,13,27,32],Bi=Z&&"CompositionEvent"in window,pr=null;Z&&"documentMode"in document&&(pr=document.documentMode);var cp=Z&&"TextEvent"in window&&!pr,Us=Z&&(!Bi||pr&&8<pr&&11>=pr),Vs=" ",Os=!1;function Hs(e,t){switch(e){case"keyup":return dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function pp(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(Os=!0,Vs);case"textInput":return e=t.data,e===Vs&&Os?null:e;default:return null}}function up(e,t){if(In)return e==="compositionend"||!Bi&&Hs(e,t)?(e=Ns(),Jr=ji=Ht=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fp[e.type]:t==="textarea"}function Qs(e,t,r,o){fs(o),t=io(t,"onChange"),0<t.length&&(r=new Si("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var ur=null,fr=null;function xp(e){pa(e,0)}function to(e){var t=Mn(e);if(ts(t))return e}function gp(e,t){if(e==="change")return t}var Gs=!1;if(Z){var Ri;if(Z){var Ii="oninput"in document;if(!Ii){var Xs=document.createElement("div");Xs.setAttribute("oninput","return;"),Ii=typeof Xs.oninput=="function"}Ri=Ii}else Ri=!1;Gs=Ri&&(!document.documentMode||9<document.documentMode)}function Ks(){ur&&(ur.detachEvent("onpropertychange",Js),fr=ur=null)}function Js(e){if(e.propertyName==="value"&&to(fr)){var t=[];Qs(t,fr,e,ai(e)),ys(xp,t)}}function hp(e,t,r){e==="focusin"?(Ks(),ur=t,fr=r,ur.attachEvent("onpropertychange",Js)):e==="focusout"&&Ks()}function yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(fr)}function mp(e,t){if(e==="click")return to(t)}function bp(e,t){if(e==="input"||e==="change")return to(t)}function vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:vp;function xr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!G.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qs(e,t){var r=Zs(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Zs(r)}}function ea(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ea(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ta(){for(var e=window,t=Pr();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Pr(e.document)}return t}function Ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jp(e){var t=ta(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ea(r.ownerDocument.documentElement,r)){if(o!==null&&Ti(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(o.start,i);o=o.end===void 0?l:Math.min(o.end,i),!e.extend&&l>o&&(i=o,o=l,l=i),i=qs(r,l);var s=qs(r,o);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sp=Z&&"documentMode"in document&&11>=document.documentMode,Tn=null,Ei=null,gr=null,Wi=!1;function na(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wi||Tn==null||Tn!==Pr(o)||(o=Tn,"selectionStart"in o&&Ti(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),gr&&xr(gr,o)||(gr=o,o=io(Ei,"onSelect"),0<o.length&&(t=new Si("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Tn)))}function no(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var En={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},Ai={},ra={};Z&&(ra=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function ro(e){if(Ai[e])return Ai[e];if(!En[e])return e;var t=En[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ra)return Ai[e]=t[r];return e}var oa=ro("animationend"),ia=ro("animationiteration"),la=ro("animationstart"),sa=ro("transitionend"),aa=new Map,da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){aa.set(e,t),W(t,[e])}for(var Mi=0;Mi<da.length;Mi++){var _i=da[Mi],wp=_i.toLowerCase(),kp=_i[0].toUpperCase()+_i.slice(1);$t(wp,"on"+kp)}$t(oa,"onAnimationEnd"),$t(ia,"onAnimationIteration"),$t(la,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(sa,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function ca(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,wc(o,t,void 0,e),e.currentTarget=null}function pa(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],i=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var s=o.length-1;0<=s;s--){var d=o[s],c=d.instance,m=d.currentTarget;if(d=d.listener,c!==l&&i.isPropagationStopped())break e;ca(i,d,m),l=c}else for(s=0;s<o.length;s++){if(d=o[s],c=d.instance,m=d.currentTarget,d=d.listener,c!==l&&i.isPropagationStopped())break e;ca(i,d,m),l=c}}}if(Ur)throw e=ui,Ur=!1,ui=null,e}function ne(e,t){var r=t[Oi];r===void 0&&(r=t[Oi]=new Set);var o=e+"__bubble";r.has(o)||(ua(t,e,2,!1),r.add(o))}function Ni(e,t,r){var o=0;t&&(o|=4),ua(r,e,o,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[oo]){e[oo]=!0,z.forEach(function(r){r!=="selectionchange"&&(zp.has(r)||Ni(r,!1,e),Ni(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,Ni("selectionchange",!1,t))}}function ua(e,t,r,o){switch(_s(t)){case 1:var i=Fc;break;case 4:i=Dc;break;default:i=bi}r=i.bind(null,t,r,e),i=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Li(e,t,r,o,i){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var d=o.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(s===4)for(s=o.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;d!==null;){if(s=dn(d),s===null)return;if(c=s.tag,c===5||c===6){o=l=s;continue e}d=d.parentNode}}o=o.return}ys(function(){var m=l,j=ai(r),S=[];e:{var b=aa.get(e);if(b!==void 0){var C=Si,T=e;switch(e){case"keypress":if(Zr(r)===0)break e;case"keydown":case"keyup":C=tp;break;case"focusin":T="focus",C=zi;break;case"focusout":T="blur",C=zi;break;case"beforeblur":case"afterblur":C=zi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Oc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=op;break;case oa:case ia:case la:C=Yc;break;case sa:C=lp;break;case"scroll":C=Uc;break;case"wheel":C=ap;break;case"copy":case"cut":case"paste":C=Gc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ds}var E=(t&4)!==0,xe=!E&&e==="scroll",h=E?b!==null?b+"Capture":null:b;E=[];for(var u=m,y;u!==null;){y=u;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,h!==null&&(w=qn(u,h),w!=null&&E.push(mr(u,w,y)))),xe)break;u=u.return}0<E.length&&(b=new C(b,T,null,r,j),S.push({event:b,listeners:E}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",b&&r!==si&&(T=r.relatedTarget||r.fromElement)&&(dn(T)||T[Tt]))break e;if((C||b)&&(b=j.window===j?j:(b=j.ownerDocument)?b.defaultView||b.parentWindow:window,C?(T=r.relatedTarget||r.toElement,C=m,T=T?dn(T):null,T!==null&&(xe=an(T),T!==xe||T.tag!==5&&T.tag!==6)&&(T=null)):(C=null,T=m),C!==T)){if(E=Ps,w="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ds,w="onPointerLeave",h="onPointerEnter",u="pointer"),xe=C==null?b:Mn(C),y=T==null?b:Mn(T),b=new E(w,u+"leave",C,r,j),b.target=xe,b.relatedTarget=y,w=null,dn(j)===m&&(E=new E(h,u+"enter",T,r,j),E.target=y,E.relatedTarget=xe,w=E),xe=w,C&&T)t:{for(E=C,h=T,u=0,y=E;y;y=Wn(y))u++;for(y=0,w=h;w;w=Wn(w))y++;for(;0<u-y;)E=Wn(E),u--;for(;0<y-u;)h=Wn(h),y--;for(;u--;){if(E===h||h!==null&&E===h.alternate)break t;E=Wn(E),h=Wn(h)}E=null}else E=null;C!==null&&fa(S,b,C,E,!1),T!==null&&xe!==null&&fa(S,xe,T,E,!0)}}e:{if(b=m?Mn(m):window,C=b.nodeName&&b.nodeName.toLowerCase(),C==="select"||C==="input"&&b.type==="file")var A=gp;else if(Ys(b))if(Gs)A=bp;else{A=yp;var M=hp}else(C=b.nodeName)&&C.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(A=mp);if(A&&(A=A(e,m))){Qs(S,A,r,j);break e}M&&M(e,b,m),e==="focusout"&&(M=b._wrapperState)&&M.controlled&&b.type==="number"&&ni(b,"number",b.value)}switch(M=m?Mn(m):window,e){case"focusin":(Ys(M)||M.contentEditable==="true")&&(Tn=M,Ei=m,gr=null);break;case"focusout":gr=Ei=Tn=null;break;case"mousedown":Wi=!0;break;case"contextmenu":case"mouseup":case"dragend":Wi=!1,na(S,r,j);break;case"selectionchange":if(Sp)break;case"keydown":case"keyup":na(S,r,j)}var _;if(Bi)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else In?Hs(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Us&&r.locale!=="ko"&&(In||P!=="onCompositionStart"?P==="onCompositionEnd"&&In&&(_=Ns()):(Ht=j,ji="value"in Ht?Ht.value:Ht.textContent,In=!0)),M=io(m,P),0<M.length&&(P=new Fs(P,e,null,r,j),S.push({event:P,listeners:M}),_?P.data=_:(_=$s(r),_!==null&&(P.data=_)))),(_=cp?pp(e,r):up(e,r))&&(m=io(m,"onBeforeInput"),0<m.length&&(j=new Fs("onBeforeInput","beforeinput",null,r,j),S.push({event:j,listeners:m}),j.data=_))}pa(S,t)})}function mr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function io(e,t){for(var r=t+"Capture",o=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=qn(e,r),l!=null&&o.unshift(mr(e,l,i)),l=qn(e,t),l!=null&&o.push(mr(e,l,i))),e=e.return}return o}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,r,o,i){for(var l=t._reactName,s=[];r!==null&&r!==o;){var d=r,c=d.alternate,m=d.stateNode;if(c!==null&&c===o)break;d.tag===5&&m!==null&&(d=m,i?(c=qn(r,l),c!=null&&s.unshift(mr(r,c,d))):i||(c=qn(r,l),c!=null&&s.push(mr(r,c,d)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Cp=/\r\n?/g,Bp=/\u0000|\uFFFD/g;function xa(e){return(typeof e=="string"?e:""+e).replace(Cp,`
`).replace(Bp,"")}function lo(e,t,r){if(t=xa(t),xa(e)!==t&&r)throw Error(f(425))}function so(){}var Pi=null,Fi=null;function Di(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ui=typeof setTimeout=="function"?setTimeout:void 0,Rp=typeof clearTimeout=="function"?clearTimeout:void 0,ga=typeof Promise=="function"?Promise:void 0,Ip=typeof queueMicrotask=="function"?queueMicrotask:typeof ga<"u"?function(e){return ga.resolve(null).then(e).catch(Tp)}:Ui;function Tp(e){setTimeout(function(){throw e})}function Vi(e,t){var r=t,o=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(o===0){e.removeChild(i),ar(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=i}while(r);ar(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),kt="__reactFiber$"+An,br="__reactProps$"+An,Tt="__reactContainer$"+An,Oi="__reactEvents$"+An,Ep="__reactListeners$"+An,Wp="__reactHandles$"+An;function dn(e){var t=e[kt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Tt]||r[kt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ha(e);e!==null;){if(r=e[kt])return r;e=ha(e)}return t}e=r,r=e.parentNode}return null}function vr(e){return e=e[kt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function ao(e){return e[br]||null}var Hi=[],_n=-1;function Qt(e){return{current:e}}function re(e){0>_n||(e.current=Hi[_n],Hi[_n]=null,_n--)}function te(e,t){_n++,Hi[_n]=e.current,e.current=t}var Gt={},ze=Qt(Gt),_e=Qt(!1),cn=Gt;function Nn(e,t){var r=e.type.contextTypes;if(!r)return Gt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function co(){re(_e),re(ze)}function ya(e,t,r){if(ze.current!==Gt)throw Error(f(168));te(ze,t),te(_e,r)}function ma(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(f(108,ee(e)||"Unknown",i));return I({},r,o)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,cn=ze.current,te(ze,e),te(_e,_e.current),!0}function ba(e,t,r){var o=e.stateNode;if(!o)throw Error(f(169));r?(e=ma(e,t,cn),o.__reactInternalMemoizedMergedChildContext=e,re(_e),re(ze),te(ze,e)):re(_e),te(_e,r)}var Et=null,uo=!1,$i=!1;function va(e){Et===null?Et=[e]:Et.push(e)}function Ap(e){uo=!0,va(e)}function Xt(){if(!$i&&Et!==null){$i=!0;var e=0,t=K;try{var r=Et;for(K=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Et=null,uo=!1}catch(i){throw Et!==null&&(Et=Et.slice(e+1)),Ss(fi,Xt),i}finally{K=t,$i=!1}}return null}var Ln=[],Pn=0,fo=null,xo=0,Je=[],Ze=0,pn=null,Wt=1,At="";function un(e,t){Ln[Pn++]=xo,Ln[Pn++]=fo,fo=e,xo=t}function ja(e,t,r){Je[Ze++]=Wt,Je[Ze++]=At,Je[Ze++]=pn,pn=e;var o=Wt;e=At;var i=32-ct(o)-1;o&=~(1<<i),r+=1;var l=32-ct(t)+i;if(30<l){var s=i-i%5;l=(o&(1<<s)-1).toString(32),o>>=s,i-=s,Wt=1<<32-ct(t)+i|r<<i|o,At=l+e}else Wt=1<<l|r<<i|o,At=e}function Yi(e){e.return!==null&&(un(e,1),ja(e,1,0))}function Qi(e){for(;e===fo;)fo=Ln[--Pn],Ln[Pn]=null,xo=Ln[--Pn],Ln[Pn]=null;for(;e===pn;)pn=Je[--Ze],Je[Ze]=null,At=Je[--Ze],Je[Ze]=null,Wt=Je[--Ze],Je[Ze]=null}var $e=null,Ye=null,se=!1,ut=null;function Sa(e,t){var r=nt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function wa(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ye=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=pn!==null?{id:Wt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=nt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,$e=e,Ye=null,!0):!1;default:return!1}}function Gi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xi(e){if(se){var t=Ye;if(t){var r=t;if(!wa(e,t)){if(Gi(e))throw Error(f(418));t=Yt(r.nextSibling);var o=$e;t&&wa(e,t)?Sa(o,r):(e.flags=e.flags&-4097|2,se=!1,$e=e)}}else{if(Gi(e))throw Error(f(418));e.flags=e.flags&-4097|2,se=!1,$e=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function go(e){if(e!==$e)return!1;if(!se)return ka(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Di(e.type,e.memoizedProps)),t&&(t=Ye)){if(Gi(e))throw za(),Error(f(418));for(;t;)Sa(e,t),t=Yt(t.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ye=Yt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=$e?Yt(e.stateNode.nextSibling):null;return!0}function za(){for(var e=Ye;e;)e=Yt(e.nextSibling)}function Fn(){Ye=$e=null,se=!1}function Ki(e){ut===null?ut=[e]:ut.push(e)}var Mp=ke.ReactCurrentBatchConfig;function jr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(f(309));var o=r.stateNode}if(!o)throw Error(f(147,e));var i=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var d=i.refs;s===null?delete d[l]:d[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(f(284));if(!r._owner)throw Error(f(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ca(e){var t=e._init;return t(e._payload)}function Ba(e){function t(h,u){if(e){var y=h.deletions;y===null?(h.deletions=[u],h.flags|=16):y.push(u)}}function r(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function o(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function i(h,u){return h=rn(h,u),h.index=0,h.sibling=null,h}function l(h,u,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<u?(h.flags|=2,u):y):(h.flags|=2,u)):(h.flags|=1048576,u)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function d(h,u,y,w){return u===null||u.tag!==6?(u=Ul(y,h.mode,w),u.return=h,u):(u=i(u,y),u.return=h,u)}function c(h,u,y,w){var A=y.type;return A===Ae?j(h,u,y.props.children,w,y.key):u!==null&&(u.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Me&&Ca(A)===u.type)?(w=i(u,y.props),w.ref=jr(h,u,y),w.return=h,w):(w=Do(y.type,y.key,y.props,null,h.mode,w),w.ref=jr(h,u,y),w.return=h,w)}function m(h,u,y,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==y.containerInfo||u.stateNode.implementation!==y.implementation?(u=Vl(y,h.mode,w),u.return=h,u):(u=i(u,y.children||[]),u.return=h,u)}function j(h,u,y,w,A){return u===null||u.tag!==7?(u=vn(y,h.mode,w,A),u.return=h,u):(u=i(u,y),u.return=h,u)}function S(h,u,y){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ul(""+u,h.mode,y),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case at:return y=Do(u.type,u.key,u.props,null,h.mode,y),y.ref=jr(h,null,u),y.return=h,y;case Ie:return u=Vl(u,h.mode,y),u.return=h,u;case Me:var w=u._init;return S(h,w(u._payload),y)}if(Kn(u)||N(u))return u=vn(u,h.mode,y,null),u.return=h,u;ho(h,u)}return null}function b(h,u,y,w){var A=u!==null?u.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:d(h,u,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case at:return y.key===A?c(h,u,y,w):null;case Ie:return y.key===A?m(h,u,y,w):null;case Me:return A=y._init,b(h,u,A(y._payload),w)}if(Kn(y)||N(y))return A!==null?null:j(h,u,y,w,null);ho(h,y)}return null}function C(h,u,y,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(y)||null,d(u,h,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case at:return h=h.get(w.key===null?y:w.key)||null,c(u,h,w,A);case Ie:return h=h.get(w.key===null?y:w.key)||null,m(u,h,w,A);case Me:var M=w._init;return C(h,u,y,M(w._payload),A)}if(Kn(w)||N(w))return h=h.get(y)||null,j(u,h,w,A,null);ho(u,w)}return null}function T(h,u,y,w){for(var A=null,M=null,_=u,P=u=0,je=null;_!==null&&P<y.length;P++){_.index>P?(je=_,_=null):je=_.sibling;var Q=b(h,_,y[P],w);if(Q===null){_===null&&(_=je);break}e&&_&&Q.alternate===null&&t(h,_),u=l(Q,u,P),M===null?A=Q:M.sibling=Q,M=Q,_=je}if(P===y.length)return r(h,_),se&&un(h,P),A;if(_===null){for(;P<y.length;P++)_=S(h,y[P],w),_!==null&&(u=l(_,u,P),M===null?A=_:M.sibling=_,M=_);return se&&un(h,P),A}for(_=o(h,_);P<y.length;P++)je=C(_,h,P,y[P],w),je!==null&&(e&&je.alternate!==null&&_.delete(je.key===null?P:je.key),u=l(je,u,P),M===null?A=je:M.sibling=je,M=je);return e&&_.forEach(function(on){return t(h,on)}),se&&un(h,P),A}function E(h,u,y,w){var A=N(y);if(typeof A!="function")throw Error(f(150));if(y=A.call(y),y==null)throw Error(f(151));for(var M=A=null,_=u,P=u=0,je=null,Q=y.next();_!==null&&!Q.done;P++,Q=y.next()){_.index>P?(je=_,_=null):je=_.sibling;var on=b(h,_,Q.value,w);if(on===null){_===null&&(_=je);break}e&&_&&on.alternate===null&&t(h,_),u=l(on,u,P),M===null?A=on:M.sibling=on,M=on,_=je}if(Q.done)return r(h,_),se&&un(h,P),A;if(_===null){for(;!Q.done;P++,Q=y.next())Q=S(h,Q.value,w),Q!==null&&(u=l(Q,u,P),M===null?A=Q:M.sibling=Q,M=Q);return se&&un(h,P),A}for(_=o(h,_);!Q.done;P++,Q=y.next())Q=C(_,h,P,Q.value,w),Q!==null&&(e&&Q.alternate!==null&&_.delete(Q.key===null?P:Q.key),u=l(Q,u,P),M===null?A=Q:M.sibling=Q,M=Q);return e&&_.forEach(function(fu){return t(h,fu)}),se&&un(h,P),A}function xe(h,u,y,w){if(typeof y=="object"&&y!==null&&y.type===Ae&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case at:e:{for(var A=y.key,M=u;M!==null;){if(M.key===A){if(A=y.type,A===Ae){if(M.tag===7){r(h,M.sibling),u=i(M,y.props.children),u.return=h,h=u;break e}}else if(M.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Me&&Ca(A)===M.type){r(h,M.sibling),u=i(M,y.props),u.ref=jr(h,M,y),u.return=h,h=u;break e}r(h,M);break}else t(h,M);M=M.sibling}y.type===Ae?(u=vn(y.props.children,h.mode,w,y.key),u.return=h,h=u):(w=Do(y.type,y.key,y.props,null,h.mode,w),w.ref=jr(h,u,y),w.return=h,h=w)}return s(h);case Ie:e:{for(M=y.key;u!==null;){if(u.key===M)if(u.tag===4&&u.stateNode.containerInfo===y.containerInfo&&u.stateNode.implementation===y.implementation){r(h,u.sibling),u=i(u,y.children||[]),u.return=h,h=u;break e}else{r(h,u);break}else t(h,u);u=u.sibling}u=Vl(y,h.mode,w),u.return=h,h=u}return s(h);case Me:return M=y._init,xe(h,u,M(y._payload),w)}if(Kn(y))return T(h,u,y,w);if(N(y))return E(h,u,y,w);ho(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,u!==null&&u.tag===6?(r(h,u.sibling),u=i(u,y),u.return=h,h=u):(r(h,u),u=Ul(y,h.mode,w),u.return=h,h=u),s(h)):r(h,u)}return xe}var Dn=Ba(!0),Ra=Ba(!1),yo=Qt(null),mo=null,Un=null,Ji=null;function Zi(){Ji=Un=mo=null}function qi(e){var t=yo.current;re(yo),e._currentValue=t}function el(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Vn(e,t){mo=e,Ji=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Le=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Ji!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(mo===null)throw Error(f(308));Un=e,mo.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var fn=null;function tl(e){fn===null?fn=[e]:fn.push(e)}function Ia(e,t,r,o){var i=t.interleaved;return i===null?(r.next=r,tl(t)):(r.next=i.next,i.next=r),t.interleaved=r,Mt(e,o)}function Mt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Kt=!1;function nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ta(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(H&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Mt(e,r)}return i=o.interleaved,i===null?(t.next=t,tl(o)):(t.next=i.next,i.next=t),o.interleaved=t,Mt(e,r)}function bo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,hi(e,r)}}function Ea(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=s:l=l.next=s,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function vo(e,t,r,o){var i=e.updateQueue;Kt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var c=d,m=c.next;c.next=null,s===null?l=m:s.next=m,s=c;var j=e.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==s&&(d===null?j.firstBaseUpdate=m:d.next=m,j.lastBaseUpdate=c))}if(l!==null){var S=i.baseState;s=0,j=m=c=null,d=l;do{var b=d.lane,C=d.eventTime;if((o&b)===b){j!==null&&(j=j.next={eventTime:C,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var T=e,E=d;switch(b=t,C=r,E.tag){case 1:if(T=E.payload,typeof T=="function"){S=T.call(C,S,b);break e}S=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=E.payload,b=typeof T=="function"?T.call(C,S,b):T,b==null)break e;S=I({},S,b);break e;case 2:Kt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,b=i.effects,b===null?i.effects=[d]:b.push(d))}else C={eventTime:C,lane:b,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(m=j=C,c=S):j=j.next=C,s|=b;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;b=d,d=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(j===null&&(c=S),i.baseState=c,i.firstBaseUpdate=m,i.lastBaseUpdate=j,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);hn|=s,e.lanes=s,e.memoizedState=S}}function Wa(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=r,typeof i!="function")throw Error(f(191,i));i.call(o)}}}var Sr={},zt=Qt(Sr),wr=Qt(Sr),kr=Qt(Sr);function xn(e){if(e===Sr)throw Error(f(174));return e}function rl(e,t){switch(te(kr,t),te(wr,e),te(zt,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oi(t,e)}re(zt),te(zt,t)}function On(){re(zt),re(wr),re(kr)}function Aa(e){xn(kr.current);var t=xn(zt.current),r=oi(t,e.type);t!==r&&(te(wr,e),te(zt,r))}function ol(e){wr.current===e&&(re(zt),re(wr))}var de=Qt(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function ll(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var So=ke.ReactCurrentDispatcher,sl=ke.ReactCurrentBatchConfig,gn=0,ce=null,ye=null,be=null,wo=!1,zr=!1,Cr=0,_p=0;function Ce(){throw Error(f(321))}function al(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!pt(e[r],t[r]))return!1;return!0}function dl(e,t,r,o,i,l){if(gn=l,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?Fp:Dp,e=r(o,i),zr){l=0;do{if(zr=!1,Cr=0,25<=l)throw Error(f(301));l+=1,be=ye=null,t.updateQueue=null,So.current=Up,e=r(o,i)}while(zr)}if(So.current=Co,t=ye!==null&&ye.next!==null,gn=0,be=ye=ce=null,wo=!1,t)throw Error(f(300));return e}function cl(){var e=Cr!==0;return Cr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=e:be=be.next=e,be}function et(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=be===null?ce.memoizedState:be.next;if(t!==null)be=t,ye=e;else{if(e===null)throw Error(f(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},be===null?ce.memoizedState=be=e:be=be.next=e}return be}function Br(e,t){return typeof t=="function"?t(e):t}function pl(e){var t=et(),r=t.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=e;var o=ye,i=o.baseQueue,l=r.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}o.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,o=o.baseState;var d=s=null,c=null,m=l;do{var j=m.lane;if((gn&j)===j)c!==null&&(c=c.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),o=m.hasEagerState?m.eagerState:e(o,m.action);else{var S={lane:j,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};c===null?(d=c=S,s=o):c=c.next=S,ce.lanes|=j,hn|=j}m=m.next}while(m!==null&&m!==l);c===null?s=o:c.next=d,pt(o,t.memoizedState)||(Le=!0),t.memoizedState=o,t.baseState=s,t.baseQueue=c,r.lastRenderedState=o}if(e=r.interleaved,e!==null){i=e;do l=i.lane,ce.lanes|=l,hn|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ul(e){var t=et(),r=t.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=e;var o=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);pt(l,t.memoizedState)||(Le=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,o]}function Ma(){}function _a(e,t){var r=ce,o=et(),i=t(),l=!pt(o.memoizedState,i);if(l&&(o.memoizedState=i,Le=!0),o=o.queue,fl(Pa.bind(null,r,o,e),[e]),o.getSnapshot!==t||l||be!==null&&be.memoizedState.tag&1){if(r.flags|=2048,Rr(9,La.bind(null,r,o,i,t),void 0,null),ve===null)throw Error(f(349));(gn&30)!==0||Na(r,t,i)}return i}function Na(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function La(e,t,r,o){t.value=r,t.getSnapshot=o,Fa(t)&&Da(e)}function Pa(e,t,r){return r(function(){Fa(t)&&Da(e)})}function Fa(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!pt(e,r)}catch{return!0}}function Da(e){var t=Mt(e,1);t!==null&&ht(t,e,1,-1)}function Ua(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Pp.bind(null,ce,e),[t.memoizedState,e]}function Rr(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Va(){return et().memoizedState}function ko(e,t,r,o){var i=Ct();ce.flags|=e,i.memoizedState=Rr(1|t,r,void 0,o===void 0?null:o)}function zo(e,t,r,o){var i=et();o=o===void 0?null:o;var l=void 0;if(ye!==null){var s=ye.memoizedState;if(l=s.destroy,o!==null&&al(o,s.deps)){i.memoizedState=Rr(t,r,l,o);return}}ce.flags|=e,i.memoizedState=Rr(1|t,r,l,o)}function Oa(e,t){return ko(8390656,8,e,t)}function fl(e,t){return zo(2048,8,e,t)}function Ha(e,t){return zo(4,2,e,t)}function $a(e,t){return zo(4,4,e,t)}function Ya(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qa(e,t,r){return r=r!=null?r.concat([e]):null,zo(4,4,Ya.bind(null,t,e),r)}function xl(){}function Ga(e,t){var r=et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&al(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Xa(e,t){var r=et();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&al(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Ka(e,t,r){return(gn&21)===0?(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=r):(pt(r,t)||(r=Cs(),ce.lanes|=r,hn|=r,e.baseState=!0),t)}function Np(e,t){var r=K;K=r!==0&&4>r?r:4,e(!0);var o=sl.transition;sl.transition={};try{e(!1),t()}finally{K=r,sl.transition=o}}function Ja(){return et().memoizedState}function Lp(e,t,r){var o=tn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Za(e))qa(t,r);else if(r=Ia(e,t,r,o),r!==null){var i=Ee();ht(r,e,o,i),ed(r,t,o)}}function Pp(e,t,r){var o=tn(e),i={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Za(e))qa(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,d=l(s,r);if(i.hasEagerState=!0,i.eagerState=d,pt(d,s)){var c=t.interleaved;c===null?(i.next=i,tl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Ia(e,t,i,o),r!==null&&(i=Ee(),ht(r,e,o,i),ed(r,t,o))}}function Za(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function qa(e,t){zr=wo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ed(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,hi(e,r)}}var Co={readContext:qe,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Fp={readContext:qe,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Oa,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ko(4194308,4,Ya.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var r=Ct();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Ct();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Lp.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Ua,useDebugValue:xl,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Ua(!1),t=e[0];return e=Np.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=ce,i=Ct();if(se){if(r===void 0)throw Error(f(407));r=r()}else{if(r=t(),ve===null)throw Error(f(349));(gn&30)!==0||Na(o,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,Oa(Pa.bind(null,o,l,e),[e]),o.flags|=2048,Rr(9,La.bind(null,o,l,r,t),void 0,null),r},useId:function(){var e=Ct(),t=ve.identifierPrefix;if(se){var r=At,o=Wt;r=(o&~(1<<32-ct(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Cr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=_p++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dp={readContext:qe,useCallback:Ga,useContext:qe,useEffect:fl,useImperativeHandle:Qa,useInsertionEffect:Ha,useLayoutEffect:$a,useMemo:Xa,useReducer:pl,useRef:Va,useState:function(){return pl(Br)},useDebugValue:xl,useDeferredValue:function(e){var t=et();return Ka(t,ye.memoizedState,e)},useTransition:function(){var e=pl(Br)[0],t=et().memoizedState;return[e,t]},useMutableSource:Ma,useSyncExternalStore:_a,useId:Ja,unstable_isNewReconciler:!1},Up={readContext:qe,useCallback:Ga,useContext:qe,useEffect:fl,useImperativeHandle:Qa,useInsertionEffect:Ha,useLayoutEffect:$a,useMemo:Xa,useReducer:ul,useRef:Va,useState:function(){return ul(Br)},useDebugValue:xl,useDeferredValue:function(e){var t=et();return ye===null?t.memoizedState=e:Ka(t,ye.memoizedState,e)},useTransition:function(){var e=ul(Br)[0],t=et().memoizedState;return[e,t]},useMutableSource:Ma,useSyncExternalStore:_a,useId:Ja,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=I({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function gl(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:I({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Bo={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Ee(),i=tn(e),l=_t(o,i);l.payload=t,r!=null&&(l.callback=r),t=Jt(e,l,i),t!==null&&(ht(t,e,i,o),bo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Ee(),i=tn(e),l=_t(o,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Jt(e,l,i),t!==null&&(ht(t,e,i,o),bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ee(),o=tn(e),i=_t(r,o);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,o),t!==null&&(ht(t,e,o,r),bo(t,e,o))}};function td(e,t,r,o,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,s):t.prototype&&t.prototype.isPureReactComponent?!xr(r,o)||!xr(i,l):!0}function nd(e,t,r){var o=!1,i=Gt,l=t.contextType;return typeof l=="object"&&l!==null?l=qe(l):(i=Ne(t)?cn:ze.current,o=t.contextTypes,l=(o=o!=null)?Nn(e,i):Gt),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bo,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function rd(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function hl(e,t,r,o){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},nl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=qe(l):(l=Ne(t)?cn:ze.current,i.context=Nn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(gl(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bo.enqueueReplaceState(i,i.state,null),vo(e,r,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var r="",o=t;do r+=$(o),o=o.return;while(o);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function yl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ml(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Vp=typeof WeakMap=="function"?WeakMap:Map;function od(e,t,r){r=_t(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Mo||(Mo=!0,Al=o),ml(e,t)},r}function id(e,t,r){r=_t(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;r.payload=function(){return o(i)},r.callback=function(){ml(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){ml(e,t),typeof o!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function ld(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Vp;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(r)||(i.add(r),e=nu.bind(null,e,t,r),t.then(e,e))}function sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,r,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=_t(-1,1),t.tag=2,Jt(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Op=ke.ReactCurrentOwner,Le=!1;function Te(e,t,r,o){t.child=e===null?Ra(t,null,r,o):Dn(t,e.child,r,o)}function dd(e,t,r,o,i){r=r.render;var l=t.ref;return Vn(t,i),o=dl(e,t,r,o,l,i),r=cl(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(se&&r&&Yi(t),t.flags|=1,Te(e,t,o,i),t.child)}function cd(e,t,r,o,i){if(e===null){var l=r.type;return typeof l=="function"&&!Dl(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,pd(e,t,l,o,i)):(e=Do(r.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var s=l.memoizedProps;if(r=r.compare,r=r!==null?r:xr,r(s,o)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=rn(l,o),e.ref=t.ref,e.return=t,t.child=e}function pd(e,t,r,o,i){if(e!==null){var l=e.memoizedProps;if(xr(l,o)&&e.ref===t.ref)if(Le=!1,t.pendingProps=o=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return bl(e,t,r,o,i)}function ud(e,t,r){var o=t.pendingProps,i=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Yn,Qe),Qe|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Yn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:r,te(Yn,Qe),Qe|=o}else l!==null?(o=l.baseLanes|r,t.memoizedState=null):o=r,te(Yn,Qe),Qe|=o;return Te(e,t,i,r),t.child}function fd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function bl(e,t,r,o,i){var l=Ne(r)?cn:ze.current;return l=Nn(t,l),Vn(t,i),r=dl(e,t,r,o,l,i),o=cl(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(se&&o&&Yi(t),t.flags|=1,Te(e,t,r,i),t.child)}function xd(e,t,r,o,i){if(Ne(r)){var l=!0;po(t)}else l=!1;if(Vn(t,i),t.stateNode===null)Io(e,t),nd(t,r,o),hl(t,r,o,i),o=!0;else if(e===null){var s=t.stateNode,d=t.memoizedProps;s.props=d;var c=s.context,m=r.contextType;typeof m=="object"&&m!==null?m=qe(m):(m=Ne(r)?cn:ze.current,m=Nn(t,m));var j=r.getDerivedStateFromProps,S=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function";S||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==o||c!==m)&&rd(t,s,o,m),Kt=!1;var b=t.memoizedState;s.state=b,vo(t,o,s,i),c=t.memoizedState,d!==o||b!==c||_e.current||Kt?(typeof j=="function"&&(gl(t,r,j,o),c=t.memoizedState),(d=Kt||td(t,r,d,o,b,c,m))?(S||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),s.props=o,s.state=c,s.context=m,o=d):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,Ta(e,t),d=t.memoizedProps,m=t.type===t.elementType?d:ft(t.type,d),s.props=m,S=t.pendingProps,b=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=qe(c):(c=Ne(r)?cn:ze.current,c=Nn(t,c));var C=r.getDerivedStateFromProps;(j=typeof C=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==S||b!==c)&&rd(t,s,o,c),Kt=!1,b=t.memoizedState,s.state=b,vo(t,o,s,i);var T=t.memoizedState;d!==S||b!==T||_e.current||Kt?(typeof C=="function"&&(gl(t,r,C,o),T=t.memoizedState),(m=Kt||td(t,r,m,o,b,T,c)||!1)?(j||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,T,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,T,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=T),s.props=o,s.state=T,s.context=c,o=m):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),o=!1)}return vl(e,t,r,o,l,i)}function vl(e,t,r,o,i,l){fd(e,t);var s=(t.flags&128)!==0;if(!o&&!s)return i&&ba(t,r,!1),Nt(e,t,l);o=t.stateNode,Op.current=t;var d=s&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&s?(t.child=Dn(t,e.child,null,l),t.child=Dn(t,null,d,l)):Te(e,t,d,l),t.memoizedState=o.state,i&&ba(t,r,!0),t.child}function gd(e){var t=e.stateNode;t.pendingContext?ya(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ya(e,t.context,!1),rl(e,t.containerInfo)}function hd(e,t,r,o,i){return Fn(),Ki(i),t.flags|=256,Te(e,t,r,o),t.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,t,r){var o=t.pendingProps,i=de.current,l=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(de,i&1),e===null)return Xi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},(o&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Uo(s,o,0,null),e=vn(e,o,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Sl(r),t.memoizedState=jl,e):wl(t,s));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Hp(e,t,s,o,d,i,r);if(l){l=o.fallback,s=t.mode,i=e.child,d=i.sibling;var c={mode:"hidden",children:o.children};return(s&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=rn(i,c),o.subtreeFlags=i.subtreeFlags&14680064),d!==null?l=rn(d,l):(l=vn(l,s,r,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=e.child.memoizedState,s=s===null?Sl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~r,t.memoizedState=jl,o}return l=e.child,e=l.sibling,o=rn(l,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function wl(e,t){return t=Uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,r,o){return o!==null&&Ki(o),Dn(t,e.child,null,r),e=wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hp(e,t,r,o,i,l,s){if(r)return t.flags&256?(t.flags&=-257,o=yl(Error(f(422))),Ro(e,t,s,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,i=t.mode,o=Uo({mode:"visible",children:o.children},i,0,null),l=vn(l,i,s,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,(t.mode&1)!==0&&Dn(t,e.child,null,s),t.child.memoizedState=Sl(s),t.memoizedState=jl,l);if((t.mode&1)===0)return Ro(e,t,s,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var d=o.dgst;return o=d,l=Error(f(419)),o=yl(l,o,void 0),Ro(e,t,s,o)}if(d=(s&e.childLanes)!==0,Le||d){if(o=ve,o!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|s))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Mt(e,i),ht(o,e,i,-1))}return Fl(),o=yl(Error(f(421))),Ro(e,t,s,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ru.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Ye=Yt(i.nextSibling),$e=t,se=!0,ut=null,e!==null&&(Je[Ze++]=Wt,Je[Ze++]=At,Je[Ze++]=pn,Wt=e.id,At=e.overflow,pn=t),t=wl(t,o.children),t.flags|=4096,t)}function md(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),el(e.return,t,r)}function kl(e,t,r,o,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=r,l.tailMode=i)}function bd(e,t,r){var o=t.pendingProps,i=o.revealOrder,l=o.tail;if(Te(e,t,o.children,r),o=de.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,r,t);else if(e.tag===19)md(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(te(de,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&jo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),kl(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}kl(t,!0,r,null,l);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,r=rn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=rn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function $p(e,t,r){switch(t.tag){case 3:gd(t),Fn();break;case 5:Aa(t);break;case 1:Ne(t.type)&&po(t);break;case 4:rl(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;te(yo,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(te(de,de.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?yd(e,t,r):(te(de,de.current&1),e=Nt(e,t,r),e!==null?e.sibling:null);te(de,de.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return bd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(de,de.current),o)break;return null;case 22:case 23:return t.lanes=0,ud(e,t,r)}return Nt(e,t,r)}var vd,zl,jd,Sd;vd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},zl=function(){},jd=function(e,t,r,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,xn(zt.current);var l=null;switch(r){case"input":i=ei(e,i),o=ei(e,o),l=[];break;case"select":i=I({},i,{value:void 0}),o=I({},o,{value:void 0}),l=[];break;case"textarea":i=ri(e,i),o=ri(e,o),l=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=so)}ii(r,o);var s;r=null;for(m in i)if(!o.hasOwnProperty(m)&&i.hasOwnProperty(m)&&i[m]!=null)if(m==="style"){var d=i[m];for(s in d)d.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(x.hasOwnProperty(m)?l||(l=[]):(l=l||[]).push(m,null));for(m in o){var c=o[m];if(d=i?.[m],o.hasOwnProperty(m)&&c!==d&&(c!=null||d!=null))if(m==="style")if(d){for(s in d)!d.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&d[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(l||(l=[]),l.push(m,r)),r=c;else m==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,d=d?d.__html:void 0,c!=null&&d!==c&&(l=l||[]).push(m,c)):m==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(m,""+c):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(x.hasOwnProperty(m)?(c!=null&&m==="onScroll"&&ne("scroll",e),l||d===c||(l=[])):(l=l||[]).push(m,c))}r&&(l=l||[]).push("style",r);var m=l;(t.updateQueue=m)&&(t.flags|=4)}},Sd=function(e,t,r,o){r!==o&&(t.flags|=4)};function Ir(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Yp(e,t,r){var o=t.pendingProps;switch(Qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Ne(t.type)&&co(),Be(t),null;case 3:return o=t.stateNode,On(),re(_e),re(ze),ll(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ut!==null&&(Nl(ut),ut=null))),zl(e,t),Be(t),null;case 5:ol(t);var i=xn(kr.current);if(r=t.type,e!==null&&t.stateNode!=null)jd(e,t,r,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(f(166));return Be(t),null}if(e=xn(zt.current),go(t)){o=t.stateNode,r=t.type;var l=t.memoizedProps;switch(o[kt]=t,o[br]=l,e=(t.mode&1)!==0,r){case"dialog":ne("cancel",o),ne("close",o);break;case"iframe":case"object":case"embed":ne("load",o);break;case"video":case"audio":for(i=0;i<hr.length;i++)ne(hr[i],o);break;case"source":ne("error",o);break;case"img":case"image":case"link":ne("error",o),ne("load",o);break;case"details":ne("toggle",o);break;case"input":ns(o,l),ne("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},ne("invalid",o);break;case"textarea":is(o,l),ne("invalid",o)}ii(r,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="children"?typeof d=="string"?o.textContent!==d&&(l.suppressHydrationWarning!==!0&&lo(o.textContent,d,e),i=["children",d]):typeof d=="number"&&o.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&lo(o.textContent,d,e),i=["children",""+d]):x.hasOwnProperty(s)&&d!=null&&s==="onScroll"&&ne("scroll",o)}switch(r){case"input":Lr(o),os(o,l,!0);break;case"textarea":Lr(o),ss(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=so)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=as(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=s.createElement(r,{is:o.is}):(e=s.createElement(r),r==="select"&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,r),e[kt]=t,e[br]=o,vd(e,t,!1,!1),t.stateNode=e;e:{switch(s=li(r,o),r){case"dialog":ne("cancel",e),ne("close",e),i=o;break;case"iframe":case"object":case"embed":ne("load",e),i=o;break;case"video":case"audio":for(i=0;i<hr.length;i++)ne(hr[i],e);i=o;break;case"source":ne("error",e),i=o;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=o;break;case"details":ne("toggle",e),i=o;break;case"input":ns(e,o),i=ei(e,o),ne("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=I({},o,{value:void 0}),ne("invalid",e);break;case"textarea":is(e,o),i=ri(e,o),ne("invalid",e);break;default:i=o}ii(r,i),d=i;for(l in d)if(d.hasOwnProperty(l)){var c=d[l];l==="style"?ps(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ds(e,c)):l==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Jn(e,c):typeof c=="number"&&Jn(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(x.hasOwnProperty(l)?c!=null&&l==="onScroll"&&ne("scroll",e):c!=null&&st(e,l,c,s))}switch(r){case"input":Lr(e),os(e,o,!1);break;case"textarea":Lr(e),ss(e);break;case"option":o.value!=null&&e.setAttribute("value",""+X(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?kn(e,!!o.multiple,l,!1):o.defaultValue!=null&&kn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=so)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)Sd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(f(166));if(r=xn(kr.current),xn(zt.current),go(t)){if(o=t.stateNode,r=t.memoizedProps,o[kt]=t,(l=o.nodeValue!==r)&&(e=$e,e!==null))switch(e.tag){case 3:lo(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(o.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[kt]=t,t.stateNode=o}return Be(t),null;case 13:if(re(de),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)za(),Fn(),t.flags|=98560,l=!1;else if(l=go(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(f(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[kt]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else ut!==null&&(Nl(ut),ut=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(de.current&1)!==0?me===0&&(me=3):Fl())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return On(),zl(e,t),e===null&&yr(t.stateNode.containerInfo),Be(t),null;case 10:return qi(t.type._context),Be(t),null;case 17:return Ne(t.type)&&co(),Be(t),null;case 19:if(re(de),l=t.memoizedState,l===null)return Be(t),null;if(o=(t.flags&128)!==0,s=l.rendering,s===null)if(o)Ir(l,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=jo(e),s!==null){for(t.flags|=128,Ir(l,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)l=r,e=o,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return te(de,de.current&1|2),t.child}e=e.sibling}l.tail!==null&&fe()>Qn&&(t.flags|=128,o=!0,Ir(l,!1),t.lanes=4194304)}else{if(!o)if(e=jo(s),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ir(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!se)return Be(t),null}else 2*fe()-l.renderingStartTime>Qn&&r!==1073741824&&(t.flags|=128,o=!0,Ir(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(r=l.last,r!==null?r.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=fe(),t.sibling=null,r=de.current,te(de,o?r&1|2:r&1),t):(Be(t),null);case 22:case 23:return Pl(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(Qe&1073741824)!==0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(f(156,t.tag))}function Qp(e,t){switch(Qi(t),t.tag){case 1:return Ne(t.type)&&co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),re(_e),re(ze),ll(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ol(t),null;case 13:if(re(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(de),null;case 4:return On(),null;case 10:return qi(t.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var To=!1,Re=!1,Gp=typeof WeakSet=="function"?WeakSet:Set,R=null;function $n(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){ue(e,t,o)}else r.current=null}function Cl(e,t,r){try{r()}catch(o){ue(e,t,o)}}var wd=!1;function Xp(e,t){if(Pi=Xr,e=ta(),Ti(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var i=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var s=0,d=-1,c=-1,m=0,j=0,S=e,b=null;t:for(;;){for(var C;S!==r||i!==0&&S.nodeType!==3||(d=s+i),S!==l||o!==0&&S.nodeType!==3||(c=s+o),S.nodeType===3&&(s+=S.nodeValue.length),(C=S.firstChild)!==null;)b=S,S=C;for(;;){if(S===e)break t;if(b===r&&++m===i&&(d=s),b===l&&++j===o&&(c=s),(C=S.nextSibling)!==null)break;S=b,b=S.parentNode}S=C}r=d===-1||c===-1?null:{start:d,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fi={focusedElem:e,selectionRange:r},Xr=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var T=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var E=T.memoizedProps,xe=T.memoizedState,h=t.stateNode,u=h.getSnapshotBeforeUpdate(t.elementType===t.type?E:ft(t.type,E),xe);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(w){ue(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return T=wd,wd=!1,T}function Tr(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Cl(t,r,l)}i=i.next}while(i!==o)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Bl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function kd(e){var t=e.alternate;t!==null&&(e.alternate=null,kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[br],delete t[Oi],delete t[Ep],delete t[Wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=so));else if(o!==4&&(e=e.child,e!==null))for(Rl(e,t,r),e=e.sibling;e!==null;)Rl(e,t,r),e=e.sibling}function Il(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Il(e,t,r),e=e.sibling;e!==null;)Il(e,t,r),e=e.sibling}var Se=null,xt=!1;function Zt(e,t,r){for(r=r.child;r!==null;)Bd(e,t,r),r=r.sibling}function Bd(e,t,r){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Or,r)}catch{}switch(r.tag){case 5:Re||$n(r,t);case 6:var o=Se,i=xt;Se=null,Zt(e,t,r),Se=o,xt=i,Se!==null&&(xt?(e=Se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(xt?(e=Se,r=r.stateNode,e.nodeType===8?Vi(e.parentNode,r):e.nodeType===1&&Vi(e,r),ar(e)):Vi(Se,r.stateNode));break;case 4:o=Se,i=xt,Se=r.stateNode.containerInfo,xt=!0,Zt(e,t,r),Se=o,xt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&((l&2)!==0||(l&4)!==0)&&Cl(r,t,s),i=i.next}while(i!==o)}Zt(e,t,r);break;case 1:if(!Re&&($n(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(d){ue(r,t,d)}Zt(e,t,r);break;case 21:Zt(e,t,r);break;case 22:r.mode&1?(Re=(o=Re)||r.memoizedState!==null,Zt(e,t,r),Re=o):Zt(e,t,r);break;default:Zt(e,t,r)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gp),t.forEach(function(o){var i=ou.bind(null,e,o);r.has(o)||(r.add(o),o.then(i,i))})}}function gt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{var l=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 5:Se=d.stateNode,xt=!1;break e;case 3:Se=d.stateNode.containerInfo,xt=!0;break e;case 4:Se=d.stateNode.containerInfo,xt=!0;break e}d=d.return}if(Se===null)throw Error(f(160));Bd(l,s,i),Se=null,xt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(m){ue(i,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Id(t,e),t=t.sibling}function Id(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Bt(e),o&4){try{Tr(3,e,e.return),Eo(3,e)}catch(E){ue(e,e.return,E)}try{Tr(5,e,e.return)}catch(E){ue(e,e.return,E)}}break;case 1:gt(t,e),Bt(e),o&512&&r!==null&&$n(r,r.return);break;case 5:if(gt(t,e),Bt(e),o&512&&r!==null&&$n(r,r.return),e.flags&32){var i=e.stateNode;try{Jn(i,"")}catch(E){ue(e,e.return,E)}}if(o&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=r!==null?r.memoizedProps:l,d=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&rs(i,l),li(d,s);var m=li(d,l);for(s=0;s<c.length;s+=2){var j=c[s],S=c[s+1];j==="style"?ps(i,S):j==="dangerouslySetInnerHTML"?ds(i,S):j==="children"?Jn(i,S):st(i,j,S,m)}switch(d){case"input":ti(i,l);break;case"textarea":ls(i,l);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var C=l.value;C!=null?kn(i,!!l.multiple,C,!1):b!==!!l.multiple&&(l.defaultValue!=null?kn(i,!!l.multiple,l.defaultValue,!0):kn(i,!!l.multiple,l.multiple?[]:"",!1))}i[br]=l}catch(E){ue(e,e.return,E)}}break;case 6:if(gt(t,e),Bt(e),o&4){if(e.stateNode===null)throw Error(f(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(E){ue(e,e.return,E)}}break;case 3:if(gt(t,e),Bt(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(E){ue(e,e.return,E)}break;case 4:gt(t,e),Bt(e);break;case 13:gt(t,e),Bt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Wl=fe())),o&4&&Rd(e);break;case 22:if(j=r!==null&&r.memoizedState!==null,e.mode&1?(Re=(m=Re)||j,gt(t,e),Re=m):gt(t,e),Bt(e),o&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!j&&(e.mode&1)!==0)for(R=e,j=e.child;j!==null;){for(S=R=j;R!==null;){switch(b=R,C=b.child,b.tag){case 0:case 11:case 14:case 15:Tr(4,b,b.return);break;case 1:$n(b,b.return);var T=b.stateNode;if(typeof T.componentWillUnmount=="function"){o=b,r=b.return;try{t=o,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(E){ue(o,r,E)}}break;case 5:$n(b,b.return);break;case 22:if(b.memoizedState!==null){Wd(S);continue}}C!==null?(C.return=b,R=C):Wd(S)}j=j.sibling}e:for(j=null,S=e;;){if(S.tag===5){if(j===null){j=S;try{i=S.stateNode,m?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=S.stateNode,c=S.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,d.style.display=cs("display",s))}catch(E){ue(e,e.return,E)}}}else if(S.tag===6){if(j===null)try{S.stateNode.nodeValue=m?"":S.memoizedProps}catch(E){ue(e,e.return,E)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;j===S&&(j=null),S=S.return}j===S&&(j=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:gt(t,e),Bt(e),o&4&&Rd(e);break;case 21:break;default:gt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(zd(r)){var o=r;break e}r=r.return}throw Error(f(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Jn(i,""),o.flags&=-33);var l=Cd(e);Il(e,l,i);break;case 3:case 4:var s=o.stateNode.containerInfo,d=Cd(e);Rl(e,d,s);break;default:throw Error(f(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kp(e,t,r){R=e,Td(e)}function Td(e,t,r){for(var o=(e.mode&1)!==0;R!==null;){var i=R,l=i.child;if(i.tag===22&&o){var s=i.memoizedState!==null||To;if(!s){var d=i.alternate,c=d!==null&&d.memoizedState!==null||Re;d=To;var m=Re;if(To=s,(Re=c)&&!m)for(R=i;R!==null;)s=R,c=s.child,s.tag===22&&s.memoizedState!==null?Ad(i):c!==null?(c.return=s,R=c):Ad(i);for(;l!==null;)R=l,Td(l),l=l.sibling;R=i,To=d,Re=m}Ed(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,R=l):Ed(e)}}function Ed(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Re||Eo(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Re)if(r===null)o.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:ft(t.type,r.memoizedProps);o.componentDidUpdate(i,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Wa(t,l,o);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wa(t,s,r)}break;case 5:var d=t.stateNode;if(r===null&&t.flags&4){r=d;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var j=m.memoizedState;if(j!==null){var S=j.dehydrated;S!==null&&ar(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}Re||t.flags&512&&Bl(t)}catch(b){ue(t,t.return,b)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function Wd(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function Ad(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Eo(4,t)}catch(c){ue(t,r,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(c){ue(t,i,c)}}var l=t.return;try{Bl(t)}catch(c){ue(t,l,c)}break;case 5:var s=t.return;try{Bl(t)}catch(c){ue(t,s,c)}}}catch(c){ue(t,t.return,c)}if(t===e){R=null;break}var d=t.sibling;if(d!==null){d.return=t.return,R=d;break}R=t.return}}var Jp=Math.ceil,Wo=ke.ReactCurrentDispatcher,Tl=ke.ReactCurrentOwner,tt=ke.ReactCurrentBatchConfig,H=0,ve=null,he=null,we=0,Qe=0,Yn=Qt(0),me=0,Er=null,hn=0,Ao=0,El=0,Wr=null,Pe=null,Wl=0,Qn=1/0,Lt=null,Mo=!1,Al=null,qt=null,_o=!1,en=null,No=0,Ar=0,Ml=null,Lo=-1,Po=0;function Ee(){return(H&6)!==0?fe():Lo!==-1?Lo:Lo=fe()}function tn(e){return(e.mode&1)===0?1:(H&2)!==0&&we!==0?we&-we:Mp.transition!==null?(Po===0&&(Po=Cs()),Po):(e=K,e!==0||(e=window.event,e=e===void 0?16:_s(e.type)),e)}function ht(e,t,r,o){if(50<Ar)throw Ar=0,Ml=null,Error(f(185));rr(e,r,o),((H&2)===0||e!==ve)&&(e===ve&&((H&2)===0&&(Ao|=r),me===4&&nn(e,we)),Fe(e,o),r===1&&H===0&&(t.mode&1)===0&&(Qn=fe()+500,uo&&Xt()))}function Fe(e,t){var r=e.callbackNode;Mc(e,t);var o=Yr(e,e===ve?we:0);if(o===0)r!==null&&ws(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&ws(r),t===1)e.tag===0?Ap(_d.bind(null,e)):va(_d.bind(null,e)),Ip(function(){(H&6)===0&&Xt()}),r=null;else{switch(Bs(o)){case 1:r=fi;break;case 4:r=ks;break;case 16:r=Vr;break;case 536870912:r=zs;break;default:r=Vr}r=Od(r,Md.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Md(e,t){if(Lo=-1,Po=0,(H&6)!==0)throw Error(f(327));var r=e.callbackNode;if(Gn()&&e.callbackNode!==r)return null;var o=Yr(e,e===ve?we:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Fo(e,o);else{t=o;var i=H;H|=2;var l=Ld();(ve!==e||we!==t)&&(Lt=null,Qn=fe()+500,mn(e,t));do try{eu();break}catch(d){Nd(e,d)}while(!0);Zi(),Wo.current=l,H=i,he!==null?t=0:(ve=null,we=0,t=me)}if(t!==0){if(t===2&&(i=xi(e),i!==0&&(o=i,t=_l(e,i))),t===1)throw r=Er,mn(e,0),nn(e,o),Fe(e,fe()),r;if(t===6)nn(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Zp(i)&&(t=Fo(e,o),t===2&&(l=xi(e),l!==0&&(o=l,t=_l(e,l))),t===1))throw r=Er,mn(e,0),nn(e,o),Fe(e,fe()),r;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(f(345));case 2:bn(e,Pe,Lt);break;case 3:if(nn(e,o),(o&130023424)===o&&(t=Wl+500-fe(),10<t)){if(Yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ui(bn.bind(null,e,Pe,Lt),t);break}bn(e,Pe,Lt);break;case 4:if(nn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var s=31-ct(o);l=1<<s,s=t[s],s>i&&(i=s),o&=~l}if(o=i,o=fe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Jp(o/1960))-o,10<o){e.timeoutHandle=Ui(bn.bind(null,e,Pe,Lt),o);break}bn(e,Pe,Lt);break;case 5:bn(e,Pe,Lt);break;default:throw Error(f(329))}}}return Fe(e,fe()),e.callbackNode===r?Md.bind(null,e):null}function _l(e,t){var r=Wr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Fo(e,t),e!==2&&(t=Pe,Pe=r,t!==null&&Nl(t)),e}function Nl(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Zp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var i=r[o],l=i.getSnapshot;i=i.value;try{if(!pt(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~El,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ct(t),o=1<<r;e[r]=-1,t&=~o}}function _d(e){if((H&6)!==0)throw Error(f(327));Gn();var t=Yr(e,0);if((t&1)===0)return Fe(e,fe()),null;var r=Fo(e,t);if(e.tag!==0&&r===2){var o=xi(e);o!==0&&(t=o,r=_l(e,o))}if(r===1)throw r=Er,mn(e,0),nn(e,t),Fe(e,fe()),r;if(r===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Pe,Lt),Fe(e,fe()),null}function Ll(e,t){var r=H;H|=1;try{return e(t)}finally{H=r,H===0&&(Qn=fe()+500,uo&&Xt())}}function yn(e){en!==null&&en.tag===0&&(H&6)===0&&Gn();var t=H;H|=1;var r=tt.transition,o=K;try{if(tt.transition=null,K=1,e)return e()}finally{K=o,tt.transition=r,H=t,(H&6)===0&&Xt()}}function Pl(){Qe=Yn.current,re(Yn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Rp(r)),he!==null)for(r=he.return;r!==null;){var o=r;switch(Qi(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&co();break;case 3:On(),re(_e),re(ze),ll();break;case 5:ol(o);break;case 4:On();break;case 13:re(de);break;case 19:re(de);break;case 10:qi(o.type._context);break;case 22:case 23:Pl()}r=r.return}if(ve=e,he=e=rn(e.current,null),we=Qe=t,me=0,Er=null,El=Ao=hn=0,Pe=Wr=null,fn!==null){for(t=0;t<fn.length;t++)if(r=fn[t],o=r.interleaved,o!==null){r.interleaved=null;var i=o.next,l=r.pending;if(l!==null){var s=l.next;l.next=i,o.next=s}r.pending=o}fn=null}return e}function Nd(e,t){do{var r=he;try{if(Zi(),So.current=Co,wo){for(var o=ce.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}wo=!1}if(gn=0,be=ye=ce=null,zr=!1,Cr=0,Tl.current=null,r===null||r.return===null){me=1,Er=t,he=null;break}e:{var l=e,s=r.return,d=r,c=t;if(t=we,d.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=c,j=d,S=j.tag;if((j.mode&1)===0&&(S===0||S===11||S===15)){var b=j.alternate;b?(j.updateQueue=b.updateQueue,j.memoizedState=b.memoizedState,j.lanes=b.lanes):(j.updateQueue=null,j.memoizedState=null)}var C=sd(s);if(C!==null){C.flags&=-257,ad(C,s,d,l,t),C.mode&1&&ld(l,m,t),t=C,c=m;var T=t.updateQueue;if(T===null){var E=new Set;E.add(c),t.updateQueue=E}else T.add(c);break e}else{if((t&1)===0){ld(l,m,t),Fl();break e}c=Error(f(426))}}else if(se&&d.mode&1){var xe=sd(s);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),ad(xe,s,d,l,t),Ki(Hn(c,d));break e}}l=c=Hn(c,d),me!==4&&(me=2),Wr===null?Wr=[l]:Wr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=od(l,c,t);Ea(l,h);break e;case 1:d=c;var u=l.type,y=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(qt===null||!qt.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=id(l,d,t);Ea(l,w);break e}}l=l.return}while(l!==null)}Fd(r)}catch(A){t=A,he===r&&r!==null&&(he=r=r.return);continue}break}while(!0)}function Ld(){var e=Wo.current;return Wo.current=Co,e===null?Co:e}function Fl(){(me===0||me===3||me===2)&&(me=4),ve===null||(hn&268435455)===0&&(Ao&268435455)===0||nn(ve,we)}function Fo(e,t){var r=H;H|=2;var o=Ld();(ve!==e||we!==t)&&(Lt=null,mn(e,t));do try{qp();break}catch(i){Nd(e,i)}while(!0);if(Zi(),H=r,Wo.current=o,he!==null)throw Error(f(261));return ve=null,we=0,me}function qp(){for(;he!==null;)Pd(he)}function eu(){for(;he!==null&&!zc();)Pd(he)}function Pd(e){var t=Vd(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Fd(e):he=t,Tl.current=null}function Fd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Yp(r,t,Qe),r!==null){he=r;return}}else{if(r=Qp(r,t),r!==null){r.flags&=32767,he=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,he=null;return}}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);me===0&&(me=5)}function bn(e,t,r){var o=K,i=tt.transition;try{tt.transition=null,K=1,tu(e,t,r,o)}finally{tt.transition=i,K=o}return null}function tu(e,t,r,o){do Gn();while(en!==null);if((H&6)!==0)throw Error(f(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(_c(e,l),e===ve&&(he=ve=null,we=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||_o||(_o=!0,Od(Vr,function(){return Gn(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=tt.transition,tt.transition=null;var s=K;K=1;var d=H;H|=4,Tl.current=null,Xp(e,r),Id(r,e),jp(Fi),Xr=!!Pi,Fi=Pi=null,e.current=r,Kp(r),Cc(),H=d,K=s,tt.transition=l}else e.current=r;if(_o&&(_o=!1,en=e,No=i),l=e.pendingLanes,l===0&&(qt=null),Ic(r.stateNode),Fe(e,fe()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],o(i.value,{componentStack:i.stack,digest:i.digest});if(Mo)throw Mo=!1,e=Al,Al=null,e;return(No&1)!==0&&e.tag!==0&&Gn(),l=e.pendingLanes,(l&1)!==0?e===Ml?Ar++:(Ar=0,Ml=e):Ar=0,Xt(),null}function Gn(){if(en!==null){var e=Bs(No),t=tt.transition,r=K;try{if(tt.transition=null,K=16>e?16:e,en===null)var o=!1;else{if(e=en,en=null,No=0,(H&6)!==0)throw Error(f(331));var i=H;for(H|=4,R=e.current;R!==null;){var l=R,s=l.child;if((R.flags&16)!==0){var d=l.deletions;if(d!==null){for(var c=0;c<d.length;c++){var m=d[c];for(R=m;R!==null;){var j=R;switch(j.tag){case 0:case 11:case 15:Tr(8,j,l)}var S=j.child;if(S!==null)S.return=j,R=S;else for(;R!==null;){j=R;var b=j.sibling,C=j.return;if(kd(j),j===m){R=null;break}if(b!==null){b.return=C,R=b;break}R=C}}}var T=l.alternate;if(T!==null){var E=T.child;if(E!==null){T.child=null;do{var xe=E.sibling;E.sibling=null,E=xe}while(E!==null)}}R=l}}if((l.subtreeFlags&2064)!==0&&s!==null)s.return=l,R=s;else e:for(;R!==null;){if(l=R,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Tr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,R=h;break e}R=l.return}}var u=e.current;for(R=u;R!==null;){s=R;var y=s.child;if((s.subtreeFlags&2064)!==0&&y!==null)y.return=s,R=y;else e:for(s=u;R!==null;){if(d=R,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Eo(9,d)}}catch(A){ue(d,d.return,A)}if(d===s){R=null;break e}var w=d.sibling;if(w!==null){w.return=d.return,R=w;break e}R=d.return}}if(H=i,Xt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Or,e)}catch{}o=!0}return o}finally{K=r,tt.transition=t}}return!1}function Dd(e,t,r){t=Hn(r,t),t=od(e,t,1),e=Jt(e,t,1),t=Ee(),e!==null&&(rr(e,1,t),Fe(e,t))}function ue(e,t,r){if(e.tag===3)Dd(e,e,r);else for(;t!==null;){if(t.tag===3){Dd(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qt===null||!qt.has(o))){e=Hn(r,e),e=id(t,e,1),t=Jt(t,e,1),e=Ee(),t!==null&&(rr(t,1,e),Fe(t,e));break}}t=t.return}}function nu(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&r,ve===e&&(we&r)===r&&(me===4||me===3&&(we&130023424)===we&&500>fe()-Wl?mn(e,0):El|=r),Fe(e,t)}function Ud(e,t){t===0&&((e.mode&1)===0?t=1:(t=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var r=Ee();e=Mt(e,t),e!==null&&(rr(e,t,r),Fe(e,r))}function ru(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ud(e,r)}function ou(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(f(314))}o!==null&&o.delete(t),Ud(e,r)}var Vd;Vd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Le=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Le=!1,$p(e,t,r);Le=(e.flags&131072)!==0}else Le=!1,se&&(t.flags&1048576)!==0&&ja(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Io(e,t),e=t.pendingProps;var i=Nn(t,ze.current);Vn(t,r),i=dl(null,t,o,e,i,r);var l=cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(o)?(l=!0,po(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nl(t),i.updater=Bo,t.stateNode=i,i._reactInternals=t,hl(t,o,e,r),t=vl(null,t,o,!0,l,r)):(t.tag=0,se&&l&&Yi(t),Te(null,t,i,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=lu(o),e=ft(o,e),i){case 0:t=bl(null,t,o,e,r);break e;case 1:t=xd(null,t,o,e,r);break e;case 11:t=dd(null,t,o,e,r);break e;case 14:t=cd(null,t,o,ft(o.type,e),r);break e}throw Error(f(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ft(o,i),bl(e,t,o,i,r);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ft(o,i),xd(e,t,o,i,r);case 3:e:{if(gd(t),e===null)throw Error(f(387));o=t.pendingProps,l=t.memoizedState,i=l.element,Ta(e,t),vo(t,o,null,r);var s=t.memoizedState;if(o=s.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Hn(Error(f(423)),t),t=hd(e,t,o,r,i);break e}else if(o!==i){i=Hn(Error(f(424)),t),t=hd(e,t,o,r,i);break e}else for(Ye=Yt(t.stateNode.containerInfo.firstChild),$e=t,se=!0,ut=null,r=Ra(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fn(),o===i){t=Nt(e,t,r);break e}Te(e,t,o,r)}t=t.child}return t;case 5:return Aa(t),e===null&&Xi(t),o=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Di(o,i)?s=null:l!==null&&Di(o,l)&&(t.flags|=32),fd(e,t),Te(e,t,s,r),t.child;case 6:return e===null&&Xi(t),null;case 13:return yd(e,t,r);case 4:return rl(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Dn(t,null,o,r):Te(e,t,o,r),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ft(o,i),dd(e,t,o,i,r);case 7:return Te(e,t,t.pendingProps,r),t.child;case 8:return Te(e,t,t.pendingProps.children,r),t.child;case 12:return Te(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,te(yo,o._currentValue),o._currentValue=s,l!==null)if(pt(l.value,s)){if(l.children===i.children&&!_e.current){t=Nt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){s=l.child;for(var c=d.firstContext;c!==null;){if(c.context===o){if(l.tag===1){c=_t(-1,r&-r),c.tag=2;var m=l.updateQueue;if(m!==null){m=m.shared;var j=m.pending;j===null?c.next=c:(c.next=j.next,j.next=c),m.pending=c}}l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),el(l.return,r,t),d.lanes|=r;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(f(341));s.lanes|=r,d=s.alternate,d!==null&&(d.lanes|=r),el(s,r,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Te(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,Vn(t,r),i=qe(i),o=o(i),t.flags|=1,Te(e,t,o,r),t.child;case 14:return o=t.type,i=ft(o,t.pendingProps),i=ft(o.type,i),cd(e,t,o,i,r);case 15:return pd(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ft(o,i),Io(e,t),t.tag=1,Ne(o)?(e=!0,po(t)):e=!1,Vn(t,r),nd(t,o,i),hl(t,o,i,r),vl(null,t,o,!0,e,r);case 19:return bd(e,t,r);case 22:return ud(e,t,r)}throw Error(f(156,t.tag))};function Od(e,t){return Ss(e,t)}function iu(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,r,o){return new iu(e,t,r,o)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lu(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jt)return 11;if(e===St)return 14}return 2}function rn(e,t){var r=e.alternate;return r===null?(r=nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Do(e,t,r,o,i,l){var s=2;if(o=e,typeof e=="function")Dl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ae:return vn(r.children,i,l,t);case Ke:s=8,i|=8;break;case Ft:return e=nt(12,r,t,i|2),e.elementType=Ft,e.lanes=l,e;case Ve:return e=nt(13,r,t,i),e.elementType=Ve,e.lanes=l,e;case dt:return e=nt(19,r,t,i),e.elementType=dt,e.lanes=l,e;case pe:return Uo(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case It:s=10;break e;case sn:s=9;break e;case jt:s=11;break e;case St:s=14;break e;case Me:s=16,o=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return t=nt(s,r,t,i),t.elementType=e,t.type=o,t.lanes=l,t}function vn(e,t,r,o){return e=nt(7,e,o,t),e.lanes=r,e}function Uo(e,t,r,o){return e=nt(22,e,o,t),e.elementType=pe,e.lanes=r,e.stateNode={isHidden:!1},e}function Ul(e,t,r){return e=nt(6,e,null,t),e.lanes=r,e}function Vl(e,t,r){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function su(e,t,r,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gi(0),this.expirationTimes=gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ol(e,t,r,o,i,l,s,d,c){return e=new su(e,t,r,d,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=nt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},nl(l),e}function au(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Hd(e){if(!e)return Gt;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(f(171))}if(e.tag===1){var r=e.type;if(Ne(r))return ma(e,r,t)}return t}function $d(e,t,r,o,i,l,s,d,c){return e=Ol(r,o,!0,e,i,l,s,d,c),e.context=Hd(null),r=e.current,o=Ee(),i=tn(r),l=_t(o,i),l.callback=t??null,Jt(r,l,i),e.current.lanes=i,rr(e,i,o),Fe(e,o),e}function Vo(e,t,r,o){var i=t.current,l=Ee(),s=tn(i);return r=Hd(r),t.context===null?t.context=r:t.pendingContext=r,t=_t(l,s),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Jt(i,t,s),e!==null&&(ht(e,i,s,l),bo(e,i,s)),s}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Hl(e,t){Yd(e,t),(e=e.alternate)&&Yd(e,t)}function du(){return null}var Qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}Ho.prototype.render=$l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));Vo(e,t,null,null)},Ho.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Vo(null,e,null,null)}),t[Tt]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ts();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ot.length&&t!==0&&t<Ot[r].priority;r++);Ot.splice(r,0,e),r===0&&As(e)}};function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gd(){}function cu(e,t,r,o,i){if(i){if(typeof o=="function"){var l=o;o=function(){var m=Oo(s);l.call(m)}}var s=$d(t,o,e,0,null,!1,!1,"",Gd);return e._reactRootContainer=s,e[Tt]=s.current,yr(e.nodeType===8?e.parentNode:e),yn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var d=o;o=function(){var m=Oo(c);d.call(m)}}var c=Ol(e,0,!1,null,null,!1,!1,"",Gd);return e._reactRootContainer=c,e[Tt]=c.current,yr(e.nodeType===8?e.parentNode:e),yn(function(){Vo(t,c,r,o)}),c}function Yo(e,t,r,o,i){var l=r._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var d=i;i=function(){var c=Oo(s);d.call(c)}}Vo(t,s,e,i)}else s=cu(r,t,e,i,o);return Oo(s)}Rs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=nr(t.pendingLanes);r!==0&&(hi(t,r|1),Fe(t,fe()),(H&6)===0&&(Qn=fe()+500,Xt()))}break;case 13:yn(function(){var o=Mt(e,1);if(o!==null){var i=Ee();ht(o,e,1,i)}}),Hl(e,1)}},yi=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var r=Ee();ht(t,e,134217728,r)}Hl(e,134217728)}},Is=function(e){if(e.tag===13){var t=tn(e),r=Mt(e,t);if(r!==null){var o=Ee();ht(r,e,t,o)}Hl(e,t)}},Ts=function(){return K},Es=function(e,t){var r=K;try{return K=e,t()}finally{K=r}},di=function(e,t,r){switch(t){case"input":if(ti(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var i=ao(o);if(!i)throw Error(f(90));ts(o),ti(o,i)}}}break;case"textarea":ls(e,r);break;case"select":t=r.value,t!=null&&kn(e,!!r.multiple,t,!1)}},gs=Ll,hs=yn;var pu={usingClientEntryPoint:!1,Events:[vr,Mn,ao,fs,xs,Ll]},Mr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uu={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vs(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||du,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Or=Qo.inject(uu),wt=Qo}catch{}}return De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pu,De.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yl(t))throw Error(f(200));return au(e,t,null,r)},De.createRoot=function(e,t){if(!Yl(e))throw Error(f(299));var r=!1,o="",i=Qd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ol(e,1,!1,null,null,r,!1,o,i),e[Tt]=t.current,yr(e.nodeType===8?e.parentNode:e),new $l(t)},De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=vs(t),e=e===null?null:e.stateNode,e},De.flushSync=function(e){return yn(e)},De.hydrate=function(e,t,r){if(!$o(t))throw Error(f(200));return Yo(null,e,t,!0,r)},De.hydrateRoot=function(e,t,r){if(!Yl(e))throw Error(f(405));var o=r!=null&&r.hydratedSources||null,i=!1,l="",s=Qd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=$d(t,null,e,1,r??null,i,!1,l,s),e[Tt]=t.current,yr(e),o)for(e=0;e<o.length;e++)r=o[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ho(t)},De.render=function(e,t,r){if(!$o(t))throw Error(f(200));return Yo(null,e,t,!1,r)},De.unmountComponentAtNode=function(e){if(!$o(e))throw Error(f(40));return e._reactRootContainer?(yn(function(){Yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1},De.unstable_batchedUpdates=Ll,De.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!$o(r))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return Yo(e,t,r,!1,o)},De.version="18.3.1-next-f1338f8080-20240426",De}var nc;function vu(){if(nc)return Xl.exports;nc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(p){console.error(p)}}return a(),Xl.exports=bu(),Xl.exports}var rc;function ju(){if(rc)return Go;rc=1;var a=vu();return Go.createRoot=a.createRoot,Go.hydrateRoot=a.hydrateRoot,Go}var Su=ju(),J=Zl();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ku=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(p,f,z)=>z?z.toUpperCase():f.toLowerCase()),oc=a=>{const p=ku(a);return p.charAt(0).toUpperCase()+p.slice(1)},dc=(...a)=>a.filter((p,f,z)=>!!p&&p.trim()!==""&&z.indexOf(p)===f).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=J.forwardRef(({color:a="currentColor",size:p=24,strokeWidth:f=2,absoluteStrokeWidth:z,className:x="",children:W,iconNode:D,...Z},G)=>J.createElement("svg",{ref:G,...zu,width:p,height:p,stroke:a,strokeWidth:z?Number(f)*24/Number(p):f,className:dc("lucide",x),...Z},[...D.map(([L,ge])=>J.createElement(L,ge)),...Array.isArray(W)?W:[W]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(a,p)=>{const f=J.forwardRef(({className:z,...x},W)=>J.createElement(Cu,{ref:W,iconNode:p,className:dc(`lucide-${wu(oc(a))}`,`lucide-${a}`,z),...x}));return f.displayName=oc(a),f};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Zo=F("arrow-right",Bu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],jn=F("bell",Ru);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],cc=F("calendar",Iu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]],Pt=F("chart-no-axes-column-increasing",Tu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],Wu=F("check-check",Eu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ln=F("check",Au);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],_u=F("chevron-down",Mu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Lu=F("chevron-right",Nu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ic=F("circle-alert",Pu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],pc=F("cloud",Fu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Uu=F("copy",Du);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],uc=F("database",Vu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Hu=F("dollar-sign",Ou);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Yu=F("external-link",$u);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Gu=F("eye-off",Qu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ql=F("eye",Xu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],fc=F("file-text",Ku);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Zu=F("folder",Ju);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],wn=F("heart",qu);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],lt=F("house",ef);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],nf=F("image",tf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],of=F("inbox",rf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Nr=F("info",lf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],xc=F("lock",sf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],qo=F("mail",af);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],cf=F("menu",df);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],uf=F("play",pf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],lc=F("plus",ff);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],bt=F("search",xf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],yt=F("settings",gf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],gc=F("shield",hf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],mf=F("shopping-bag",yf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],sc=F("shopping-cart",bf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],jf=F("sparkles",vf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],wf=F("square-pen",Sf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Xn=F("star",kf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],Ue=F("table",zf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],es=F("trash-2",Cf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Jo=F("triangle-alert",Bf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],If=F("upload",Rf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],hc=F("user",Tf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],mt=F("users",Ef);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Sn=F("x",Wf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],yc=F("zap",Af);function Mf(){const[a,p]=J.useState(""),[f,z]=J.useState(""),[x,W]=J.useState(!1),[D,Z]=J.useState(null),G=L=>{L.preventDefault(),console.log("Login clicked",{username:a,password:f})};return n.jsxs("div",{className:"w-full h-screen relative overflow-hidden",style:{maxHeight:"768px",background:"linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f5f7ff 100%)"},children:[n.jsx("div",{className:"absolute inset-0 opacity-30",children:n.jsx("div",{style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(105, 0, 239, 0.02) 2px, rgba(105, 0, 239, 0.02) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(105, 0, 239, 0.02) 2px, rgba(105, 0, 239, 0.02) 4px)
          `,width:"100%",height:"100%"}})}),n.jsx("div",{style:{position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle, rgba(105, 0, 239, 0.08) 0%, transparent 70%)",top:"-200px",right:"-200px",animation:"pulse 8s ease-in-out infinite"}}),n.jsx("div",{style:{position:"absolute",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(105, 0, 239, 0.06) 0%, transparent 70%)",bottom:"-150px",left:"-150px",animation:"pulse 10s ease-in-out infinite 2s"}}),n.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}),n.jsx("div",{className:"relative z-10 w-full h-full flex items-center justify-center px-8",children:n.jsxs("div",{className:"w-full max-w-6xl flex items-center gap-16",children:[n.jsxs("div",{className:"flex-1",style:{animation:"slideIn 0.6s ease-out"},children:[n.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[n.jsxs("div",{style:{width:"56px",height:"56px",background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 32px rgba(105, 0, 239, 0.3)",position:"relative",animation:"float 3s ease-in-out infinite"},children:[n.jsx(gc,{size:32,color:"white",strokeWidth:2.5}),n.jsx("div",{style:{position:"absolute",inset:"-4px",border:"2px solid rgba(105, 0, 239, 0.2)",borderRadius:"18px"}})]}),n.jsxs("div",{children:[n.jsx("h1",{style:{fontSize:"28px",fontWeight:"700",color:"#1a1a2e",letterSpacing:"-0.5px",lineHeight:"1.2"},children:"Dr.Reddy's"}),n.jsx("p",{style:{fontSize:"14px",color:"#6900ef",fontWeight:"600",letterSpacing:"0.5px"},children:"LABORATORIES"})]})]}),n.jsxs("h2",{style:{fontSize:"42px",fontWeight:"700",color:"#1a1a2e",lineHeight:"1.2",marginBottom:"16px",letterSpacing:"-1px"},children:["Smart Reporting",n.jsx("br",{}),n.jsx("span",{style:{color:"#6900ef"},children:"Platform"})]}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",lineHeight:"1.6",marginBottom:"32px",maxWidth:"450px"},children:"Access powerful analytics and insights with enterprise-grade security. Your data-driven decisions start here."}),n.jsx("div",{className:"space-y-3",children:["Real-time Analytics Dashboard","Secure Data Management","Advanced Reporting Tools"].map((L,ge)=>n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#6900ef",borderRadius:"50%",boxShadow:"0 0 10px rgba(105, 0, 239, 0.4)"}}),n.jsx("span",{style:{fontSize:"14px",color:"#4B5563",fontWeight:"500"},children:L})]},ge))}),n.jsxs("div",{style:{marginTop:"40px",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",maxWidth:"450px"},children:[n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"20px",border:"1px solid rgba(105, 0, 239, 0.12)",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.08)",transition:"transform 0.3s, box-shadow 0.3s",cursor:"default",textAlign:"center"},children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.25)"},children:n.jsx("span",{style:{fontSize:"24px"},children:"⚡"})}),n.jsx("h4",{style:{fontSize:"14px",fontWeight:"700",color:"#1a1a2e",marginBottom:"8px"},children:"Lightning Fast"}),n.jsx("p",{style:{fontSize:"12px",color:"#6B7280",lineHeight:"1.5"},children:"Generate reports in seconds"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"20px",border:"1px solid rgba(105, 0, 239, 0.12)",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.08)",transition:"transform 0.3s, box-shadow 0.3s",cursor:"default",textAlign:"center"},children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.25)"},children:n.jsx("span",{style:{fontSize:"24px"},children:"🌐"})}),n.jsx("h4",{style:{fontSize:"14px",fontWeight:"700",color:"#1a1a2e",marginBottom:"8px"},children:"Cloud Access"}),n.jsx("p",{style:{fontSize:"12px",color:"#6B7280",lineHeight:"1.5"},children:"Access anywhere"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"20px",border:"1px solid rgba(105, 0, 239, 0.12)",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.08)",transition:"transform 0.3s, box-shadow 0.3s",cursor:"default",textAlign:"center"},children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.25)"},children:n.jsx("span",{style:{fontSize:"24px"},children:"📊"})}),n.jsx("h4",{style:{fontSize:"14px",fontWeight:"700",color:"#1a1a2e",marginBottom:"8px"},children:"Smart Analytics"}),n.jsx("p",{style:{fontSize:"12px",color:"#6B7280",lineHeight:"1.5"},children:"AI-powered insights"})]})]})]}),n.jsxs("div",{style:{width:"480px",background:"rgba(255, 255, 255, 0.9)",backdropFilter:"blur(20px)",borderRadius:"24px",padding:"48px",boxShadow:"0 24px 48px rgba(105, 0, 239, 0.12), 0 0 0 1px rgba(105, 0, 239, 0.08)",border:"1px solid rgba(105, 0, 239, 0.1)",animation:"slideIn 0.6s ease-out 0.2s backwards"},children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h3",{style:{fontSize:"24px",fontWeight:"700",color:"#1a1a2e",marginBottom:"8px"},children:"Welcome Back"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280"},children:"Enter your credentials to access your account"})]}),n.jsxs("form",{onSubmit:G,children:[n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("label",{htmlFor:"username",style:{display:"block",fontSize:"13px",fontWeight:"600",color:"#374151",marginBottom:"10px",letterSpacing:"0.3px",textTransform:"uppercase"},children:"Username"}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("div",{style:{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:D==="username"?"#6900ef":"#9CA3AF",display:"flex",alignItems:"center",transition:"color 0.3s",zIndex:1},children:n.jsx(qo,{size:20})}),n.jsx("input",{id:"username",type:"text",value:a,onChange:L=>p(L.target.value),onFocus:()=>Z("username"),onBlur:()=>Z(null),placeholder:"Enter your username",style:{width:"100%",height:"56px",paddingLeft:"52px",paddingRight:"16px",fontSize:"15px",color:"#1a1a2e",backgroundColor:"white",border:`2px solid ${D==="username"?"#6900ef":"#E5E7EB"}`,borderRadius:"14px",outline:"none",transition:"all 0.3s",boxShadow:D==="username"?"0 0 0 4px rgba(105, 0, 239, 0.1)":"none"}})]})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("label",{htmlFor:"password",style:{display:"block",fontSize:"13px",fontWeight:"600",color:"#374151",marginBottom:"10px",letterSpacing:"0.3px",textTransform:"uppercase"},children:"Password"}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("div",{style:{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:D==="password"?"#6900ef":"#9CA3AF",display:"flex",alignItems:"center",transition:"color 0.3s",zIndex:1},children:n.jsx(xc,{size:20})}),n.jsx("input",{id:"password",type:x?"text":"password",value:f,onChange:L=>z(L.target.value),onFocus:()=>Z("password"),onBlur:()=>Z(null),placeholder:"Enter your password",style:{width:"100%",height:"56px",paddingLeft:"52px",paddingRight:"52px",fontSize:"15px",color:"#1a1a2e",backgroundColor:"white",border:`2px solid ${D==="password"?"#6900ef":"#E5E7EB"}`,borderRadius:"14px",outline:"none",transition:"all 0.3s",boxShadow:D==="password"?"0 0 0 4px rgba(105, 0, 239, 0.1)":"none"}}),n.jsx("button",{type:"button",onClick:()=>W(!x),style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9CA3AF",padding:"0",display:"flex",alignItems:"center",transition:"color 0.2s"},onMouseEnter:L=>L.currentTarget.style.color="#6900ef",onMouseLeave:L=>L.currentTarget.style.color="#9CA3AF",children:x?n.jsx(Gu,{size:20}):n.jsx(ql,{size:20})})]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"32px"},children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",color:"#6B7280",cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#6900ef"}}),"Remember me"]}),n.jsx("a",{href:"#",style:{fontSize:"14px",color:"#6900ef",textDecoration:"none",fontWeight:"600",transition:"color 0.2s"},onMouseEnter:L=>L.currentTarget.style.color="#8b3dff",onMouseLeave:L=>L.currentTarget.style.color="#6900ef",children:"Forgot Password?"})]}),n.jsxs("button",{type:"submit",style:{width:"100%",height:"56px",fontSize:"15px",fontWeight:"700",color:"white",background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",border:"none",borderRadius:"14px",cursor:"pointer",transition:"all 0.3s",boxShadow:"0 8px 24px rgba(105, 0, 239, 0.3)",marginBottom:"16px",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",position:"relative",overflow:"hidden"},onMouseEnter:L=>{L.currentTarget.style.transform="translateY(-2px)",L.currentTarget.style.boxShadow="0 12px 32px rgba(105, 0, 239, 0.4)"},onMouseLeave:L=>{L.currentTarget.style.transform="translateY(0)",L.currentTarget.style.boxShadow="0 8px 24px rgba(105, 0, 239, 0.3)"},children:["Login to Dashboard",n.jsx(Zo,{size:20})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"},children:[n.jsx("div",{style:{flex:1,height:"1px",background:"#E5E7EB"}}),n.jsx("span",{style:{fontSize:"12px",color:"#9CA3AF"},children:"OR"}),n.jsx("div",{style:{flex:1,height:"1px",background:"#E5E7EB"}})]}),n.jsx("button",{type:"button",onClick:()=>console.log("SSO Login"),style:{width:"100%",height:"56px",fontSize:"15px",fontWeight:"700",color:"#6900ef",backgroundColor:"rgba(105, 0, 239, 0.08)",border:"2px solid rgba(105, 0, 239, 0.2)",borderRadius:"14px",cursor:"pointer",transition:"all 0.3s"},onMouseEnter:L=>{L.currentTarget.style.backgroundColor="rgba(105, 0, 239, 0.12)",L.currentTarget.style.borderColor="#6900ef",L.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:L=>{L.currentTarget.style.backgroundColor="rgba(105, 0, 239, 0.08)",L.currentTarget.style.borderColor="rgba(105, 0, 239, 0.2)",L.currentTarget.style.transform="translateY(0)"},children:"Login With SSO"})]}),n.jsx("div",{style:{marginTop:"32px",paddingTop:"24px",borderTop:"1px solid #E5E7EB",textAlign:"center"},children:n.jsx("p",{style:{fontSize:"12px",color:"#9CA3AF"},children:"Copyrights © Dr.Reddy's 2020. All rights reserved."})})]})]})})]})}function B({code:a,variantId:p}){const[f,z]=J.useState(!1),x=()=>{const W=document.createElement("textarea");W.value=a,W.style.position="fixed",W.style.left="-999999px",W.style.top="-999999px",document.body.appendChild(W),W.focus(),W.select();try{document.execCommand("copy"),W.remove(),z(!0),setTimeout(()=>z(!1),2e3)}catch(D){console.error("Failed to copy:",D),W.remove()}};return n.jsx("button",{onClick:x,style:{padding:"6px 12px",fontSize:"12px",fontWeight:"500",color:f?"#10b981":"#6900ef",background:f?"#d1fae5":"#f3e8ff",border:"none",borderRadius:"6px",cursor:"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:f?n.jsxs(n.Fragment,{children:[n.jsx(Wu,{size:14}),"Copied"]}):n.jsxs(n.Fragment,{children:[n.jsx(Uu,{size:14}),"Copy code"]})})}function _f(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 1: Minimal Border"}),n.jsx(B,{variantId:"card-minimal-border",code:`<style>
.card-minimal-border {
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-minimal-border:hover {
  border-color: #6900ef;
}
.card-icon-box {
  width: 40px;
  height: 40px;
  background: #6900ef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-description {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
.card-link {
  font-size: 12px;
  color: #6900ef;
  font-weight: 600;
}
</style>

<div class="card-minimal-border">
  <div>
    <div class="card-icon-box">📊</div>
    <h3 class="card-title">Analytics</h3>
    <p class="card-description">Track performance and insights</p>
  </div>
  <div class="card-link">Learn more →</div>
</div>`})]}),n.jsxs("div",{style:{background:"white",border:"2px solid #e5e7eb",borderRadius:"8px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between"},onMouseEnter:a=>{a.currentTarget.style.borderColor="#6900ef"},onMouseLeave:a=>{a.currentTarget.style.borderColor="#e5e7eb"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{width:"40px",height:"40px",background:"#6900ef",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:24,color:"white"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]}),n.jsx("div",{style:{fontSize:"12px",color:"#6900ef",fontWeight:"600"},children:"Learn more →"})]})]})}function Nf(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 2: Soft Shadow"}),n.jsx(B,{variantId:"card-soft-shadow",code:`<style>
.card-shadow {
  background: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-shadow:hover {
  box-shadow: 0 8px 24px rgba(105, 0, 239, 0.15);
  transform: translateY(-4px);
}
.card-shadow .icon-box {
  width: 48px;
  height: 48px;
  background: #f3e8ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 24px;
}
.card-shadow h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-shadow p {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-shadow">
  <div>
    <div class="icon-box">📊</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
</div>`})]}),n.jsx("div",{style:{background:"white",border:"none",borderRadius:"12px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",justifyContent:"space-between"},onMouseEnter:a=>{a.currentTarget.style.boxShadow="0 8px 24px rgba(105, 0, 239, 0.15)",a.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:a=>{a.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.06)",a.currentTarget.style.transform="translateY(0)"},children:n.jsxs("div",{children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"#f3e8ff",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:24,color:"#6900ef"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})})]})}function Lf(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 3: Left Border Accent"}),n.jsx(B,{variantId:"card-left-border",code:`<style>
.card-left-border {
  background: #ffffff;
  border-left: 4px solid #6900ef;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-left-border:hover {
  background: #fafafa;
}
.card-left-border h3 {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-left-border p {
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 16px 0;
  line-height: 1.5;
}
.card-left-border .badge {
  display: inline-block;
  padding: 4px 12px;
  background: #f3e8ff;
  color: #6900ef;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
}
.card-left-border .arrow {
  display: flex;
  justify-content: flex-end;
  color: #6900ef;
}
</style>

<div class="card-left-border">
  <div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
    <span class="badge">Popular</span>
  </div>
  <div class="arrow">→</div>
</div>`})]}),n.jsxs("div",{style:{background:"white",borderLeft:"4px solid #6900ef",border:"1px solid #e5e7eb",borderRadius:"8px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between"},onMouseEnter:a=>{a.currentTarget.style.background="#fafafa"},onMouseLeave:a=>{a.currentTarget.style.background="white"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"#111827",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 16px 0",lineHeight:"1.5"},children:"Track performance and insights"}),n.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#f3e8ff",color:"#6900ef",borderRadius:"16px",fontSize:"12px",fontWeight:"600"},children:"Popular"})]}),n.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:n.jsx(Zo,{size:20,color:"#6900ef"})})]})]})}function Pf(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 4: Gradient Background"}),n.jsx(B,{variantId:"card-gradient",code:`<style>
.card-gradient {
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  border: none;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-gradient:hover {
  transform: scale(1.02);
}
.card-gradient .circle {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}
.card-gradient .icon-box {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 24px;
}
.card-gradient h3 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
}
.card-gradient p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-gradient">
  <div class="circle"></div>
  <div>
    <div class="icon-box">📊</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
</div>`})]}),n.jsxs("div",{style:{background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",border:"none",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.transform="scale(1.02)"},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)"},children:[n.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"150px",height:"150px",background:"rgba(255,255,255,0.1)",borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"rgba(255,255,255,0.2)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:24,color:"white"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"white",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"rgba(255,255,255,0.9)",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})]})]})}function Ff(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 5: Outlined Hover"}),n.jsx(B,{variantId:"card-outlined-hover",code:`<style>
.card-outlined {
  background: #ffffff;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-outlined:hover {
  border-color: #6900ef;
  background: #fafbff;
}
.card-outlined .header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.card-outlined .icon-circle {
  width: 56px;
  height: 56px;
  background: #6900ef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}
.card-outlined h3 {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin: 0;
}
.card-outlined p {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-outlined">
  <div>
    <div class="header">
      <div class="icon-circle">📊</div>
      <h3>Analytics</h3>
    </div>
    <p>Track performance and insights</p>
  </div>
</div>`})]}),n.jsx("div",{style:{background:"white",border:"2px solid transparent",borderRadius:"12px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},onMouseEnter:a=>{a.currentTarget.style.borderColor="#6900ef",a.currentTarget.style.background="#fafbff"},onMouseLeave:a=>{a.currentTarget.style.borderColor="transparent",a.currentTarget.style.background="white"},children:n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[n.jsx("div",{style:{width:"56px",height:"56px",background:"#6900ef",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Ue,{size:28,color:"white"})}),n.jsx("h3",{style:{fontSize:"22px",fontWeight:"700",color:"#111827",margin:0},children:"Analytics"})]}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})})]})}function Df(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 6: Top Stripe"}),n.jsx(B,{variantId:"card-top-stripe",code:`<style>
.card-top-stripe {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-top: 6px solid #6900ef;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-top-stripe:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.card-top-stripe h3 {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-top-stripe p {
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 16px 0;
  line-height: 1.5;
}
.card-top-stripe .action {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6900ef;
  font-size: 14px;
  font-weight: 600;
}
</style>

<div class="card-top-stripe">
  <div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
  <div class="action">
    <span>Select</span>
    <span>›</span>
  </div>
</div>`})]}),n.jsxs("div",{style:{background:"white",border:"1px solid #e5e7eb",borderTop:"6px solid #6900ef",borderRadius:"12px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between"},onMouseEnter:a=>{a.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.08)"},onMouseLeave:a=>{a.currentTarget.style.boxShadow="none"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"#111827",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 16px 0",lineHeight:"1.5"},children:"Track performance and insights"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#6900ef",fontSize:"14px",fontWeight:"600"},children:[n.jsx("span",{children:"Select"}),n.jsx(Lu,{size:18})]})]})]})}function Uf(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 7: Glass Morphism"}),n.jsx(B,{variantId:"card-glass-morphism",code:`<style>
.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 32px rgba(105, 0, 239, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-glass:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
}
.card-glass .icon-box {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #6900ef, #8b3dff);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 26px;
}
.card-glass h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-glass p {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-glass">
  <div>
    <div class="icon-box">📊</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
</div>`})]}),n.jsx("div",{style:{background:"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.8)",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 8px 32px rgba(105, 0, 239, 0.1)"},onMouseEnter:a=>{a.currentTarget.style.background="rgba(255, 255, 255, 0.9)",a.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:a=>{a.currentTarget.style.background="rgba(255, 255, 255, 0.7)",a.currentTarget.style.transform="translateY(0)"},children:n.jsxs("div",{children:[n.jsx("div",{style:{width:"52px",height:"52px",background:"linear-gradient(135deg, #6900ef, #8b3dff)",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:26,color:"white"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})})]})}function Vf(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 8: Compact Horizontal"}),n.jsx(B,{variantId:"card-compact-horizontal",code:`<style>
.card-compact {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-compact:hover {
  border-color: #6900ef;
  background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);
}
.card-compact .header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.card-compact .icon-box {
  width: 44px;
  height: 44px;
  background: #f3e8ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 22px;
}
.card-compact h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-compact p {
  font-size: 13px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
.card-compact .button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #6900ef;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}
</style>

<div class="card-compact">
  <div class="header">
    <div class="icon-box">📊</div>
    <div>
      <h3>Analytics</h3>
      <p>Track performance and insights</p>
    </div>
  </div>
  <div class="button">Access Now</div>
</div>`})]}),n.jsxs("div",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"20px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between"},onMouseEnter:a=>{a.currentTarget.style.borderColor="#6900ef",a.currentTarget.style.background="linear-gradient(135deg, #fafbff 0%, white 100%)"},onMouseLeave:a=>{a.currentTarget.style.borderColor="#e5e7eb",a.currentTarget.style.background="white"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[n.jsx("div",{style:{width:"44px",height:"44px",background:"#f3e8ff",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(Ue,{size:22,color:"#6900ef"})}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"13px",color:"#6B7280",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})]}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px",background:"#6900ef",borderRadius:"8px",color:"white",fontSize:"14px",fontWeight:"600"},children:"Access Now"})]})]})}function Of(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 9: Minimal Dark"}),n.jsx(B,{variantId:"card-minimal-dark",code:`<style>
.card-dark {
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-dark:hover {
  border-color: #6900ef;
  box-shadow: 0 0 20px rgba(105, 0, 239, 0.3);
}
.card-dark .icon-box {
  width: 40px;
  height: 40px;
  background: #6900ef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 22px;
}
.card-dark h3 {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
}
.card-dark p {
  font-size: 14px;
  color: #9CA3AF;
  margin: 0;
  line-height: 1.5;
}
.card-dark .arrow-circle {
  width: 32px;
  height: 32px;
  background: rgba(105, 0, 239, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
</style>

<div class="card-dark">
  <div>
    <div class="icon-box">📊</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
  <div class="arrow-circle">→</div>
</div>`})]}),n.jsxs("div",{style:{background:"#1a1a2e",border:"1px solid #2a2a3e",borderRadius:"12px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between"},onMouseEnter:a=>{a.currentTarget.style.borderColor="#6900ef",a.currentTarget.style.boxShadow="0 0 20px rgba(105, 0, 239, 0.3)"},onMouseLeave:a=>{a.currentTarget.style.borderColor="#2a2a3e",a.currentTarget.style.boxShadow="none"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{width:"40px",height:"40px",background:"#6900ef",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:22,color:"white"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"white",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#9CA3AF",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]}),n.jsx("div",{style:{width:"32px",height:"32px",background:"rgba(105, 0, 239, 0.2)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Zo,{size:16,color:"#6900ef"})})]})]})}function Hf(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 10: Badge Style"}),n.jsx(B,{variantId:"card-badge-style",code:`<style>
.card-badge {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-badge:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
.card-badge .badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #6900ef;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}
.card-badge .icon {
  font-size: 32px;
  margin-bottom: 16px;
}
.card-badge h3 {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-badge p {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-badge">
  <div class="badge">POPULAR</div>
  <div>
    <div class="icon">✨</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
</div>`})]}),n.jsxs("div",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-4px)",a.currentTarget.style.boxShadow="0 8px 16px rgba(0,0,0,0.1)"},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",background:"#6900ef",color:"white",padding:"4px 10px",borderRadius:"12px",fontSize:"11px",fontWeight:"700"},children:"POPULAR"}),n.jsxs("div",{children:[n.jsx(jf,{size:32,color:"#6900ef",strokeWidth:2,style:{marginBottom:"16px"}}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"#111827",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})]})]})}function $f(){return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 11: Icon Background"}),n.jsx(B,{variantId:"card-icon-background",code:`<style>
.card-icon-bg {
  background: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-icon-bg:hover {
  box-shadow: 0 8px 24px rgba(105, 0, 239, 0.12);
}
.card-icon-bg .bg-icon {
  position: absolute;
  bottom: -20px;
  right: -20px;
  opacity: 0.05;
  font-size: 120px;
}
.card-icon-bg .content {
  position: relative;
  z-index: 1;
}
.card-icon-bg h3 {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-icon-bg p {
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 16px 0;
  line-height: 1.5;
}
.card-icon-bg .link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #6900ef;
  font-size: 14px;
  font-weight: 600;
}
</style>

<div class="card-icon-bg">
  <div class="bg-icon">📊</div>
  <div class="content">
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
    <div class="link">
      <span>Get started</span>
      <span>→</span>
    </div>
  </div>
</div>`})]}),n.jsxs("div",{style:{background:"white",border:"none",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 4px 12px rgba(0,0,0,0.06)",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.boxShadow="0 8px 24px rgba(105, 0, 239, 0.12)"},onMouseLeave:a=>{a.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.06)"},children:[n.jsx("div",{style:{position:"absolute",bottom:"-20px",right:"-20px",opacity:.05},children:n.jsx(Ue,{size:120,color:"#6900ef",strokeWidth:1})}),n.jsxs("div",{style:{position:"relative",zIndex:1},children:[n.jsx("h3",{style:{fontSize:"22px",fontWeight:"700",color:"#111827",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 16px 0",lineHeight:"1.5"},children:"Track performance and insights"}),n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"#6900ef",fontSize:"14px",fontWeight:"600"},children:[n.jsx("span",{children:"Get started"}),n.jsx(Yu,{size:16})]})]})]})]})}function Yf(){return n.jsxs("div",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"0",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.borderColor="#6900ef"},onMouseLeave:a=>{a.currentTarget.style.borderColor="#e5e7eb"},children:[n.jsxs("div",{style:{background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"white",margin:0},children:"Analytics"}),n.jsx("div",{style:{width:"40px",height:"40px",background:"rgba(255,255,255,0.2)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Ue,{size:22,color:"white"})})]}),n.jsxs("div",{style:{padding:"24px",flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0,lineHeight:"1.5"},children:"Track performance and insights"}),n.jsx("div",{style:{padding:"8px 16px",border:"2px solid #6900ef",borderRadius:"8px",color:"#6900ef",fontSize:"14px",fontWeight:"600",textAlign:"center"},children:"Select Application"})]})]})}function Qf(){return n.jsxs("div",{style:{background:"linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)",border:"none",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.transform="scale(1.02)",a.currentTarget.style.boxShadow="0 8px 24px rgba(105, 0, 239, 0.15)"},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)",a.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"150px",height:"150px",background:"rgba(255,255,255,0.5)",borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"#6900ef",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:24,color:"white"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#7c3aed",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})]})}function Gf(){return n.jsxs("div",{style:{background:"linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",border:"none",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.transform="scale(1.02)",a.currentTarget.style.boxShadow="0 8px 24px rgba(59, 130, 246, 0.2)"},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)",a.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"150px",height:"150px",background:"rgba(255,255,255,0.6)",borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"#3b82f6",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:24,color:"white"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"#1e40af",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#2563eb",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})]})}function Xf(){return n.jsxs("div",{style:{background:"linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",border:"none",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.transform="scale(1.02)",a.currentTarget.style.boxShadow="0 8px 24px rgba(236, 72, 153, 0.2)"},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)",a.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"150px",height:"150px",background:"rgba(255,255,255,0.5)",borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"#ec4899",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:24,color:"white"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"#be185d",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#db2777",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})]})}function Kf(){return n.jsxs("div",{style:{background:"linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",border:"none",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.transform="scale(1.02)",a.currentTarget.style.boxShadow="0 8px 24px rgba(16, 185, 129, 0.2)"},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)",a.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"150px",height:"150px",background:"rgba(255,255,255,0.5)",borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"#10b981",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:24,color:"white"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"#047857",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#059669",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})]})}function Jf(){return n.jsxs("div",{style:{background:"linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",border:"none",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.3s",height:"220px",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden"},onMouseEnter:a=>{a.currentTarget.style.transform="scale(1.02)",a.currentTarget.style.boxShadow="0 8px 24px rgba(249, 115, 22, 0.2)"},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)",a.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{position:"absolute",top:"-50px",right:"-50px",width:"150px",height:"150px",background:"rgba(255,255,255,0.4)",borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"#f97316",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(Ue,{size:24,color:"white"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"700",color:"#c2410c",margin:"0 0 8px 0"},children:"Analytics"}),n.jsx("p",{style:{fontSize:"14px",color:"#ea580c",margin:0,lineHeight:"1.5"},children:"Track performance and insights"})]})]})}function ac(){return n.jsxs("div",{style:{background:"linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f5f7ff 100%)",minHeight:"100vh",padding:"40px 80px"},children:[n.jsxs("div",{style:{marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"36px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Card Design Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Choose your preferred card style (1-12)"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 1 - Minimal Border"}),n.jsx(_f,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 2 - Soft Shadow"}),n.jsx(Nf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 3 - Left Border Accent"}),n.jsx(Lf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 4 - Gradient Background"}),n.jsx(Pf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 5 - Outlined Hover"}),n.jsx(Ff,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 6 - Top Stripe"}),n.jsx(Df,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 7 - Glass Morphism"}),n.jsx(Uf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 8 - Compact Horizontal"}),n.jsx(Vf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 9 - Minimal Dark"}),n.jsx(Of,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 10 - Badge Style"}),n.jsx(Hf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 11 - Icon Background"}),n.jsx($f,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 12 - Split Design"}),n.jsx(Yf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 13 - Light Purple Gradient"}),n.jsx(Qf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 14 - Soft Blue Gradient"}),n.jsx(Gf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 15 - Pastel Gradient"}),n.jsx(Xf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 16 - Mint Gradient"}),n.jsx(Kf,{})]}),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:"700",color:"#6900ef"},children:"VARIANT 17 - Peach Gradient"}),n.jsx(Jf,{})]})]})]})}function Zf(){const[a,p]=J.useState(0),f=["Dashboard","Analytics","Reports","Settings"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 1: Underline Style"}),n.jsx(B,{variantId:"tab-underline",code:`<!-- Underline Style Tabs -->
<div class="tabs-underline">
  <button class="tab-underline-item active">Dashboard</button>
  <button class="tab-underline-item">Analytics</button>
  <button class="tab-underline-item">Reports</button>
  <button class="tab-underline-item">Settings</button>
</div>

<style>
.tabs-underline {
  display: flex;
  gap: 8px;
  border-bottom: 2px solid #e5e7eb;
  padding: 0 8px;
}

.tab-underline-item {
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: -2px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-underline-item:hover {
  color: #6900ef;
}

.tab-underline-item.active {
  font-weight: 600;
  color: #6900ef;
  border-bottom-color: #6900ef;
}
</style>`})]}),n.jsx("div",{style:{display:"flex",gap:"8px",borderBottom:"2px solid #e5e7eb",padding:"0 8px"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"12px 20px",fontSize:"14px",fontWeight:a===x?"600":"500",color:a===x?"#6900ef":"#6B7280",background:"transparent",border:"none",borderBottom:a===x?"3px solid #6900ef":"3px solid transparent",cursor:"pointer",transition:"all 0.3s",marginBottom:"-2px"},children:z},x))})]})}function qf(){const[a,p]=J.useState(0),f=["Overview","Activity","Team","Billing"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 2: Pill Style"}),n.jsx(B,{variantId:"tab-pill",code:`<!-- Pill Style Tabs -->
<div class="tabs-pill-container">
  <button class="tab-pill-item active">Overview</button>
  <button class="tab-pill-item">Activity</button>
  <button class="tab-pill-item">Team</button>
  <button class="tab-pill-item">Billing</button>
</div>

<style>
.tabs-pill-container {
  display: flex;
  gap: 8px;
  background: #f3f4f6;
  padding: 6px;
  border-radius: 12px;
  width: fit-content;
}

.tab-pill-item {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-pill-item:hover {
  color: #6900ef;
}

.tab-pill-item.active {
  color: #ffffff;
  background: #6900ef;
  box-shadow: 0 2px 8px rgba(105, 0, 239, 0.3);
}
</style>`})]}),n.jsx("div",{style:{display:"flex",gap:"8px",background:"#f3f4f6",padding:"6px",borderRadius:"12px",width:"fit-content"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:a===x?"white":"#6B7280",background:a===x?"#6900ef":"transparent",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",boxShadow:a===x?"0 2px 8px rgba(105, 0, 239, 0.3)":"none"},children:z},x))})]})}function e0(){const[a,p]=J.useState(0),f=["Projects","Tasks","Calendar","Files"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 3: Boxed Style"}),n.jsx(B,{variantId:"tab-boxed",code:`<!-- Boxed Style Tabs -->
<div class="tabs-boxed-container">
  <button class="tab-boxed-item active">Projects</button>
  <button class="tab-boxed-item">Tasks</button>
  <button class="tab-boxed-item">Calendar</button>
  <button class="tab-boxed-item">Files</button>
</div>

<style>
.tabs-boxed-container {
  display: flex;
  gap: 12px;
}

.tab-boxed-item {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-boxed-item:hover {
  border-color: #6900ef;
}

.tab-boxed-item.active {
  color: #6900ef;
  background: #f3e8ff;
  border-color: #6900ef;
}
</style>`})]}),n.jsx("div",{style:{display:"flex",gap:"12px"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:a===x?"#6900ef":"#6B7280",background:a===x?"#f3e8ff":"white",border:a===x?"2px solid #6900ef":"2px solid #e5e7eb",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s"},children:z},x))})]})}function t0(){const[a,p]=J.useState(0),f=["Home","Explore","Favorites","Profile"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 4: Minimal Dot Indicator"}),n.jsx(B,{variantId:"tab-dot",code:`<!-- Minimal Dot Indicator Tabs -->
<div class="tabs-dot-container">
  <button class="tab-dot-item active">
    Home
    <span class="tab-dot"></span>
  </button>
  <button class="tab-dot-item">
    Explore
  </button>
  <button class="tab-dot-item">
    Favorites
  </button>
  <button class="tab-dot-item">
    Profile
  </button>
</div>

<style>
.tabs-dot-container {
  display: flex;
  gap: 32px;
}

.tab-dot-item {
  padding: 8px 0;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-dot-item:hover {
  color: #6900ef;
}

.tab-dot-item.active {
  font-weight: 600;
  color: #6900ef;
}

.tab-dot {
  width: 6px;
  height: 6px;
  background: #6900ef;
  border-radius: 50%;
}
</style>`})]}),n.jsx("div",{style:{display:"flex",gap:"32px"},children:f.map((z,x)=>n.jsxs("button",{onClick:()=>p(x),style:{padding:"8px 0",fontSize:"14px",fontWeight:a===x?"600":"500",color:a===x?"#6900ef":"#6B7280",background:"transparent",border:"none",cursor:"pointer",transition:"all 0.3s",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[z,a===x&&n.jsx("div",{style:{width:"6px",height:"6px",background:"#6900ef",borderRadius:"50%"}})]},x))})]})}function n0(){const[a,p]=J.useState(0),f=[{label:"Home",icon:lt},{label:"Messages",icon:bt},{label:"Notifications",icon:wn},{label:"Settings",icon:Xn}];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 5: Icon + Text"}),n.jsx(B,{variantId:"tab-icon-text",code:`<!-- Icon + Text Tabs -->
<div class="tabs-icon-text">
  <button class="tab-icon-text-item active">
    🏠 Home
  </button>
  <button class="tab-icon-text-item">
    🔍 Messages
  </button>
  <button class="tab-icon-text-item">
    ❤️ Notifications
  </button>
  <button class="tab-icon-text-item">
    ⭐ Settings
  </button>
</div>

<style>
.tabs-icon-text {
  display: flex;
  gap: 8px;
}

.tab-icon-text-item {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-icon-text-item:hover {
  background: #f9fafb;
}

.tab-icon-text-item.active {
  color: #6900ef;
  background: #f3e8ff;
}
</style>`})]}),n.jsx("div",{style:{display:"flex",gap:"8px"},children:f.map((z,x)=>{const W=z.icon;return n.jsxs("button",{onClick:()=>p(x),style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:a===x?"#6900ef":"#6B7280",background:a===x?"#f3e8ff":"transparent",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(W,{size:18}),z.label]},x)})})]})}function r0(){const[a,p]=J.useState(0),f=["Stats","Charts","Trends","Summary"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 6: Gradient Active"}),n.jsx(B,{variantId:"tab-gradient",code:`<!-- Gradient Active Tabs -->
<div class="tabs-gradient">
  <button class="tab-gradient-item active">Stats</button>
  <button class="tab-gradient-item">Charts</button>
  <button class="tab-gradient-item">Trends</button>
  <button class="tab-gradient-item">Summary</button>
</div>

<style>
.tabs-gradient {
  display: flex;
  gap: 12px;
}

.tab-gradient-item {
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-gradient-item:hover {
  border-color: #6900ef;
}

.tab-gradient-item.active {
  color: #ffffff;
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(105, 0, 239, 0.3);
}
</style>`})]}),n.jsx("div",{style:{display:"flex",gap:"12px"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"12px 28px",fontSize:"14px",fontWeight:"600",color:a===x?"white":"#6B7280",background:a===x?"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)":"white",border:a===x?"none":"1px solid #e5e7eb",borderRadius:"10px",cursor:"pointer",transition:"all 0.3s",boxShadow:a===x?"0 4px 12px rgba(105, 0, 239, 0.3)":"none"},children:z},x))})]})}function o0(){const[a,p]=J.useState(0),f=[{label:"Dashboard",icon:lt},{label:"Search",icon:bt},{label:"Favorites",icon:wn},{label:"Account",icon:hc}];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 7: Vertical Pills"}),n.jsx(B,{variantId:"tab-vertical",code:`<style>
.tab-vertical-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 200px;
  background: #f9fafb;
  padding: 8px;
  border-radius: 12px;
}
.tab-vertical-item {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-vertical-item:hover {
  background: rgba(105, 0, 239, 0.05);
}
.tab-vertical-item.active {
  color: #6900ef;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>

<div class="tab-vertical-container">
  <button class="tab-vertical-item active">
    🏠 Dashboard
  </button>
  <button class="tab-vertical-item">
    🔍 Search
  </button>
  <button class="tab-vertical-item">
    ❤️ Favorites
  </button>
  <button class="tab-vertical-item">
    👤 Account
  </button>
</div>`})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",width:"200px",background:"#f9fafb",padding:"8px",borderRadius:"12px"},children:f.map((z,x)=>{const W=z.icon;return n.jsxs("button",{onClick:()=>p(x),style:{padding:"12px 16px",fontSize:"14px",fontWeight:"600",color:a===x?"#6900ef":"#6B7280",background:a===x?"white":"transparent",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"12px",textAlign:"left",boxShadow:a===x?"0 2px 8px rgba(0,0,0,0.08)":"none"},children:[n.jsx(W,{size:18}),z.label]},x)})})]})}function i0(){const[a,p]=J.useState(0),f=["All","Active","Completed","Archived"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 8: Border Shift"}),n.jsx(B,{variantId:"tab-border-shift",code:`<style>
.tab-border-shift-container {
  display: inline-flex;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  padding: 4px;
}
.tab-border-shift-item {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-border-shift-item.active {
  color: #ffffff;
  background: #6900ef;
}
</style>

<div class="tab-border-shift-container">
  <button class="tab-border-shift-item active">All</button>
  <button class="tab-border-shift-item">Active</button>
  <button class="tab-border-shift-item">Completed</button>
  <button class="tab-border-shift-item">Archived</button>
</div>`})]}),n.jsx("div",{style:{display:"inline-flex",border:"2px solid #e5e7eb",borderRadius:"10px",padding:"4px"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:a===x?"white":"#6B7280",background:a===x?"#6900ef":"transparent",border:"none",borderRadius:"6px",cursor:"pointer",transition:"all 0.3s"},children:z},x))})]})}function l0(){const[a,p]=J.useState(0),f=[{icon:Xn},{icon:cc},{icon:fc},{icon:uc}];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 9: Icon Only (Minimal)"}),n.jsx(B,{variantId:"tab-icon-only",code:`<style>
.tab-icon-only-container {
  display: flex;
  gap: 8px;
}
.tab-icon-only-item {
  width: 48px;
  height: 48px;
  color: #6B7280;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-icon-only-item:hover {
  border-color: #6900ef;
}
.tab-icon-only-item.active {
  color: #6900ef;
  background: #f3e8ff;
  border-color: #6900ef;
}
</style>

<div class="tab-icon-only-container">
  <button class="tab-icon-only-item active">⭐</button>
  <button class="tab-icon-only-item">📅</button>
  <button class="tab-icon-only-item">📄</button>
  <button class="tab-icon-only-item">💾</button>
</div>`})]}),n.jsx("div",{style:{display:"flex",gap:"8px"},children:f.map((z,x)=>{const W=z.icon;return n.jsx("button",{onClick:()=>p(x),style:{width:"48px",height:"48px",fontSize:"14px",fontWeight:"600",color:a===x?"#6900ef":"#6B7280",background:a===x?"#f3e8ff":"white",border:a===x?"2px solid #6900ef":"2px solid #e5e7eb",borderRadius:"12px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(W,{size:20})},x)})})]})}function s0(){const[a,p]=J.useState(0),f=["Week","Month","Quarter","Year"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 10: Segmented with Shadow"}),n.jsx(B,{variantId:"tab-segmented",code:`<style>
.tab-segmented-container {
  display: inline-flex;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 6px;
}
.tab-segmented-item {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-segmented-item.active {
  color: #ffffff;
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  box-shadow: 0 2px 8px rgba(105, 0, 239, 0.3);
}
</style>

<div class="tab-segmented-container">
  <button class="tab-segmented-item active">Week</button>
  <button class="tab-segmented-item">Month</button>
  <button class="tab-segmented-item">Quarter</button>
  <button class="tab-segmented-item">Year</button>
</div>`})]}),n.jsx("div",{style:{display:"inline-flex",background:"white",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",borderRadius:"12px",padding:"6px"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:a===x?"white":"#6B7280",background:a===x?"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)":"transparent",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",boxShadow:a===x?"0 2px 8px rgba(105, 0, 239, 0.3)":"none"},children:z},x))})]})}function a0(){const[a,p]=J.useState(0),f=[{label:"Inbox",count:12},{label:"Unread",count:5},{label:"Important",count:3},{label:"Sent",count:0}];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 11: Badge Count Style"}),n.jsx(B,{variantId:"tab-badge",code:`const [active, setActive] = useState(0);
const tabs = [
  { label: 'Inbox', count: 12 },
  { label: 'Unread', count: 5 },
  { label: 'Important', count: 3 },
  { label: 'Sent', count: 0 }
];

<div style={{ display: 'flex', gap: '8px' }}>
  {tabs.map((tab, idx) => (
    <button
      key={idx}
      onClick={() => setActive(idx)}
      style={{
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '600',
        color: active === idx ? '#6900ef' : '#6B7280',
        background: active === idx ? '#f3e8ff' : 'white',
        border: active === idx ? '2px solid #6900ef' : '2px solid #e5e7eb',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        position: 'relative'
      }}
    >
      {tab.label}
      {tab.count > 0 && (
        <span style={{
          background: active === idx ? '#6900ef' : '#e5e7eb',
          color: active === idx ? 'white' : '#6B7280',
          fontSize: '12px',
          fontWeight: '700',
          padding: '2px 8px',
          borderRadius: '12px',
          minWidth: '24px',
          textAlign: 'center'
        }}>
          {tab.count}
        </span>
      )}
    </button>
  ))}
</div>`})]}),n.jsx("div",{style:{display:"flex",gap:"8px"},children:f.map((z,x)=>n.jsxs("button",{onClick:()=>p(x),style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:a===x?"#6900ef":"#6B7280",background:a===x?"#f3e8ff":"white",border:a===x?"2px solid #6900ef":"2px solid #e5e7eb",borderRadius:"10px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"8px",position:"relative"},children:[z.label,z.count>0&&n.jsx("span",{style:{background:a===x?"#6900ef":"#e5e7eb",color:a===x?"white":"#6B7280",fontSize:"12px",fontWeight:"700",padding:"2px 8px",borderRadius:"12px",minWidth:"24px",textAlign:"center"},children:z.count})]},x))})]})}function d0(){const[a,p]=J.useState(0),f=["General","Security","Privacy","Advanced"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 12: Top Border Accent"}),n.jsx(B,{variantId:"tab-top-border",code:`<style>
.tab-top-border-container {
  display: flex;
  gap: 4px;
}
.tab-top-border-item {
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: #f9fafb;
  border: none;
  border-top: 3px solid transparent;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-top-border-item.active {
  color: #111827;
  background: #ffffff;
  border-top-color: #6900ef;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
}
</style>

<div class="tab-top-border-container">
  <button class="tab-top-border-item active">General</button>
  <button class="tab-top-border-item">Security</button>
  <button class="tab-top-border-item">Privacy</button>
  <button class="tab-top-border-item">Advanced</button>
</div>`})]}),n.jsx("div",{style:{display:"flex",gap:"4px"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"14px 24px",fontSize:"14px",fontWeight:"600",color:a===x?"#111827":"#6B7280",background:a===x?"white":"#f9fafb",border:"none",borderTop:a===x?"3px solid #6900ef":"3px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",transition:"all 0.3s",boxShadow:a===x?"0 -2px 8px rgba(0,0,0,0.05)":"none"},children:z},x))})]})}function c0(){const[a,p]=J.useState(0),f=["Photos","Videos","Documents","Music"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 13: Rounded Outline"}),n.jsx(B,{variantId:"tab-rounded-outline",code:`<style>
.tab-rounded-outline-container {
  display: flex;
  gap: 12px;
}
.tab-rounded-outline-item {
  padding: 10px 28px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: transparent;
  border: 2px solid #6900ef;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-rounded-outline-item.active {
  color: #ffffff;
  background: #6900ef;
}
</style>

<div class="tab-rounded-outline-container">
  <button class="tab-rounded-outline-item active">Photos</button>
  <button class="tab-rounded-outline-item">Videos</button>
  <button class="tab-rounded-outline-item">Documents</button>
  <button class="tab-rounded-outline-item">Music</button>
</div>`})]}),n.jsx("div",{style:{display:"flex",gap:"12px"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"10px 28px",fontSize:"14px",fontWeight:"600",color:a===x?"white":"#6900ef",background:a===x?"#6900ef":"transparent",border:"2px solid #6900ef",borderRadius:"24px",cursor:"pointer",transition:"all 0.3s"},children:z},x))})]})}function p0(){const[a,p]=J.useState(0),f=[{label:"Cloud",icon:pc},{label:"Lock",icon:xc},{label:"Zap",icon:yc},{label:"User",icon:hc}];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 14: Icon Top (Mobile Style)"}),n.jsx(B,{variantId:"tab-icon-top",code:`const [active, setActive] = useState(0);
const tabs = [
  { label: 'Cloud', icon: Cloud },
  { label: 'Lock', icon: Lock },
  { label: 'Zap', icon: Zap },
  { label: 'User', icon: User }
];

<div style={{ 
  display: 'flex', 
  gap: '8px',
  background: '#f9fafb',
  padding: '12px',
  borderRadius: '12px',
  width: 'fit-content'
}}>
  {tabs.map((tab, idx) => {
    const Icon = tab.icon;
    return (
      <button
        key={idx}
        onClick={() => setActive(idx)}
        style={{
          padding: '16px 20px',
          fontSize: '12px',
          fontWeight: '600',
          color: active === idx ? '#6900ef' : '#6B7280',
          background: active === idx ? 'white' : 'transparent',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          minWidth: '80px',
          boxShadow: active === idx ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
        }}
      >
        <Icon size={20} />
        {tab.label}
      </button>
    );
  })}
</div>`})]}),n.jsx("div",{style:{display:"flex",gap:"8px",background:"#f9fafb",padding:"12px",borderRadius:"12px",width:"fit-content"},children:f.map((z,x)=>{const W=z.icon;return n.jsxs("button",{onClick:()=>p(x),style:{padding:"16px 20px",fontSize:"12px",fontWeight:"600",color:a===x?"#6900ef":"#6B7280",background:a===x?"white":"transparent",border:"none",borderRadius:"10px",cursor:"pointer",transition:"all 0.3s",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",minWidth:"80px",boxShadow:a===x?"0 2px 8px rgba(0,0,0,0.08)":"none"},children:[n.jsx(W,{size:20}),z.label]},x)})})]})}function u0(){const[a,p]=J.useState(0),f=["Sales","Marketing","Support","Engineering"];return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 15: Sliding Background"}),n.jsx(B,{variantId:"tab-sliding-background",code:`const [active, setActive] = useState(0);
const tabs = ['Sales', 'Marketing', 'Support', 'Engineering'];

<div style={{ 
  display: 'inline-flex',
  position: 'relative',
  background: '#f3f4f6',
  borderRadius: '12px',
  padding: '4px'
}}>
  {tabs.map((tab, idx) => (
    <button
      key={idx}
      onClick={() => setActive(idx)}
      style={{
        padding: '10px 24px',
        fontSize: '14px',
        fontWeight: '600',
        color: active === idx ? 'white' : '#6B7280',
        background: active === idx ? '#6900ef' : 'transparent',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        zIndex: 1
      }}
    >
      {tab}
    </button>
  ))}
</div>`})]}),n.jsx("div",{style:{display:"inline-flex",position:"relative",background:"#f3f4f6",borderRadius:"12px",padding:"4px"},children:f.map((z,x)=>n.jsx("button",{onClick:()=>p(x),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:a===x?"white":"#6B7280",background:a===x?"#6900ef":"transparent",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",position:"relative",zIndex:1},children:z},x))})]})}function f0(){return n.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Tab Style Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Explore 15 different tab navigation styles for your interface"})]}),n.jsxs("div",{style:{display:"grid",gap:"32px"},children:[n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(Zf,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(qf,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(e0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(t0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(n0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(r0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(o0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(i0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(l0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(s0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(a0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(d0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(c0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(p0,{})}),n.jsx("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:n.jsx(u0,{})})]})]})})}function x0(){const a=[{id:"primary-solid",title:"Primary Solid",code:`<!-- Primary Solid Button -->
<button class="btn-primary-solid">
  Click Me
</button>

<style>
.btn-primary-solid {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-primary-solid:hover {
  background: #5500cc;
  transform: translateY(-1px);
}
</style>`,component:n.jsxs("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(uf,{size:16}),"Click Me"]})},{id:"gradient",title:"Gradient",code:`<!-- Gradient Button -->
<button class="btn-gradient">
  Gradient Button
</button>

<style>
.btn-gradient {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(105, 0, 239, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-gradient:hover {
  box-shadow: 0 6px 16px rgba(105, 0, 239, 0.4);
  transform: translateY(-2px);
}
</style>`,component:n.jsx("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.3)"},children:"Gradient Button"})},{id:"outline",title:"Outline",code:`<!-- Outline Button -->
<button class="btn-outline">
  Outline Button
</button>

<style>
.btn-outline {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: transparent;
  border: 2px solid #6900ef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-outline:hover {
  background: #6900ef;
  color: #ffffff;
}
</style>`,component:n.jsx("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"transparent",border:"2px solid #6900ef",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s"},children:"Outline Button"})},{id:"ghost",title:"Ghost",code:`<!-- Ghost Button -->
<button class="btn-ghost">
  Ghost Button
</button>

<style>
.btn-ghost {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-ghost:hover {
  background: rgba(105, 0, 239, 0.1);
}
</style>`,component:n.jsx("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"transparent",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s"},children:"Ghost Button"})},{id:"soft",title:"Soft",code:`<!-- Soft Button -->
<button class="btn-soft">
  Soft Button
</button>

<style>
.btn-soft {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: #f3e8ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-soft:hover {
  background: #e9d5ff;
}
</style>`,component:n.jsx("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"#f3e8ff",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s"},children:"Soft Button"})},{id:"elevated",title:"Elevated",code:`<!-- Elevated Button -->
<button class="btn-elevated">
  Elevated Button
</button>

<style>
.btn-elevated {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(105, 0, 239, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-elevated:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(105, 0, 239, 0.5);
}
</style>`,component:n.jsx("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"12px",cursor:"pointer",transition:"all 0.3s",boxShadow:"0 8px 24px rgba(105, 0, 239, 0.4)"},children:"Elevated Button"})},{id:"icon-only",title:"Icon Only",code:`<!-- Icon Only Buttons -->
<div class="btn-icon-group">
  <button class="btn-icon-primary">❤️</button>
  <button class="btn-icon-soft">⭐</button>
</div>

<style>
.btn-icon-group {
  display: flex;
  gap: 12px;
}

.btn-icon-primary,
.btn-icon-soft {
  width: 40px;
  height: 40px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon-primary {
  color: #ffffff;
  background: #6900ef;
}

.btn-icon-primary:hover {
  background: #5500cc;
  transform: scale(1.1);
}

.btn-icon-soft {
  color: #6900ef;
  background: #f3e8ff;
}

.btn-icon-soft:hover {
  background: #e9d5ff;
  transform: scale(1.1);
}
</style>`,component:n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{style:{width:"40px",height:"40px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(wn,{size:18})}),n.jsx("button",{style:{width:"40px",height:"40px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"#f3e8ff",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Xn,{size:18})})]})},{id:"rounded-full",title:"Rounded Full",code:`<!-- Rounded Full Button -->
<button class="btn-rounded-full">
  Rounded Button
</button>

<style>
.btn-rounded-full {
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-rounded-full:hover {
  background: #5500cc;
  transform: scale(1.05);
}
</style>`,component:n.jsx("button",{style:{padding:"12px 28px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"24px",cursor:"pointer",transition:"all 0.3s"},children:"Rounded Button"})},{id:"with-arrow",title:"With Arrow",code:`<!-- Button With Arrow -->
<button class="btn-with-arrow">
  Continue →
</button>

<style>
.btn-with-arrow {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-with-arrow:hover {
  background: #5500cc;
  transform: translateX(4px);
}
</style>`,component:n.jsxs("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"8px"},children:["Continue",n.jsx(Zo,{size:16})]})},{id:"loading",title:"Loading State",code:`<!-- Loading Button -->
<button class="btn-loading" disabled>
  <span class="btn-loading-spinner"></span>
  Loading...
</button>

<style>
.btn-loading {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: not-allowed;
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>`,component:n.jsxs("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"8px",opacity:.7},children:[n.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid white",borderTop:"2px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"Loading..."]})},{id:"destructive",title:"Destructive",code:`<!-- Destructive Button -->
<button class="btn-destructive">
  🗑️ Delete
</button>

<style>
.btn-destructive {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #ef4444;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-destructive:hover {
  background: #dc2626;
  transform: translateY(-1px);
}
</style>`,component:n.jsxs("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#ef4444",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(es,{size:16}),"Delete"]})},{id:"success",title:"Success",code:`<!-- Success Button -->
<button class="btn-success">
  ✓ Confirm
</button>

<style>
.btn-success {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #10b981;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-success:hover {
  background: #059669;
  transform: translateY(-1px);
}
</style>`,component:n.jsxs("button",{style:{padding:"12px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#10b981",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(ln,{size:16}),"Confirm"]})},{id:"large",title:"Large",code:`<!-- Large Button -->
<button class="btn-large">
  Large Button
</button>

<style>
.btn-large {
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-large:hover {
  background: #5500cc;
  transform: translateY(-2px);
}
</style>`,component:n.jsx("button",{style:{padding:"16px 32px",fontSize:"16px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"12px",cursor:"pointer",transition:"all 0.3s"},children:"Large Button"})},{id:"small",title:"Small",code:`<!-- Small Button -->
<button class="btn-small">
  Small Button
</button>

<style>
.btn-small {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-small:hover {
  background: #5500cc;
  transform: translateY(-1px);
}
</style>`,component:n.jsx("button",{style:{padding:"8px 16px",fontSize:"12px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"6px",cursor:"pointer",transition:"all 0.3s"},children:"Small Button"})},{id:"group",title:"Button Group",code:`<!-- Button Group -->
<div class="btn-group">
  <button class="btn-group-item">Left</button>
  <button class="btn-group-item active">Center</button>
  <button class="btn-group-item">Right</button>
</div>

<style>
.btn-group {
  display: inline-flex;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.btn-group-item {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: #ffffff;
  border: none;
  border-right: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-group-item:last-child {
  border-right: none;
}

.btn-group-item:hover {
  background: #f9fafb;
}

.btn-group-item.active {
  color: #ffffff;
  background: #6900ef;
}
</style>`,component:n.jsxs("div",{style:{display:"inline-flex",border:"2px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"white",border:"none",borderRight:"1px solid #e5e7eb",cursor:"pointer",transition:"all 0.3s"},children:"Left"}),n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRight:"1px solid #e5e7eb",cursor:"pointer",transition:"all 0.3s"},children:"Center"}),n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"white",border:"none",cursor:"pointer",transition:"all 0.3s"},children:"Right"})]})}];return n.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:[n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Button Style Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Explore 15 different button styles for your interface"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:a.map(p=>n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:p.title}),n.jsx(B,{code:p.code,variantId:p.id})]}),p.component]},p.id))})]}),n.jsx("style",{children:`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `})]})}function g0(){const a=[{id:"standard",title:"Standard Input",code:`<!-- Standard Input -->
<div class="input-group">
  <label class="input-label" for="email">Email Address</label>
  <input
    id="email"
    type="email"
    class="input-field"
    placeholder="Enter your email"
  />
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: system-ui, sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.input-field {
  padding: 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  outline: none;
}

.input-field:focus {
  border-color: #3b82f6;
}
</style>`,component:n.jsxs("div",{children:[n.jsx("label",{style:{fontSize:14,fontWeight:500},children:"Email Address"}),n.jsx("input",{placeholder:"Enter your email",style:{width:"100%",padding:12,marginTop:8,borderRadius:8,border:"1px solid #d1d5db"}})]})},{id:"icon-left",title:"Icon Left",code:`<!-- Input with Left Icon -->
<div class="input-group">
  <label class="input-label">Search</label>

  <div class="input-icon-left">
    <svg
      class="input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      stroke-width="2"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>

    <input
      type="text"
      class="input-field"
      placeholder="Search..."
    />
  </div>
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-icon-left {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.input-field {
  width: 100%;
  padding: 12px 12px 12px 40px;
  font-size: 14px;
  color: #111827;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #3b82f6;
}
</style>`,component:n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"8px"},children:"Search"}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx(bt,{size:18,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#6b7280"}}),n.jsx("input",{type:"text",placeholder:"Search...",style:{width:"100%",padding:"12px 12px 12px 40px",fontSize:"14px",color:"#111827",background:"#ffffff",border:"1px solid #d1d5db",borderRadius:"8px",outline:"none",boxSizing:"border-box",transition:"border-color 0.3s ease"}})]})]})},{id:"password-toggle",title:"Password with Icon Right",code:`<!-- Password Input -->
<div class="input-group">
  <label class="input-label">Password</label>

  <div class="input-icon-right">
    <input
      type="password"
      class="input-field"
      placeholder="Enter password"
    />

    <svg
      class="input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      stroke-width="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  </div>
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-icon-right {
  position: relative;
}

.input-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.input-field {
  width: 100%;
  padding: 12px 40px 12px 12px;
  font-size: 14px;
  color: #111827;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #3b82f6;
}
</style>`,component:n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"8px"},children:"Password"}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("input",{type:"password",placeholder:"Enter password",style:{width:"100%",padding:"12px 40px 12px 12px",fontSize:"14px",color:"#111827",background:"#ffffff",border:"1px solid #d1d5db",borderRadius:"8px",outline:"none",boxSizing:"border-box",transition:"border-color 0.3s ease"}}),n.jsx(ql,{size:18,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",color:"#6b7280",cursor:"pointer"}})]})]})},{id:"prefix",title:"Input with Prefix",code:`<!-- Input with Prefix -->
<div class="input-group">
  <label class="input-label">Amount</label>

  <div class="input-prefix">
    <span class="input-prefix-icon">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#374151"
        stroke-width="2"
      >
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    </span>

    <input
      type="number"
      class="input-field"
      placeholder="0.00"
    />
  </div>
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-prefix {
  display: flex;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  overflow: hidden;
}

.input-prefix-icon {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f3f4f6;
}

.input-field {
  flex: 1;
  padding: 12px;
  font-size: 14px;
  color: #111827;
  border: none;
  outline: none;
  box-sizing: border-box;
}
</style>`,component:n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"8px"},children:"Amount"}),n.jsxs("div",{style:{display:"flex",border:"1px solid #d1d5db",borderRadius:"8px"},children:[n.jsx("span",{style:{display:"flex",alignItems:"center",padding:"12px",background:"#f3f4f6"},children:n.jsx(Hu,{size:16,color:"#374151"})}),n.jsx("input",{type:"number",placeholder:"0.00",style:{flex:1,padding:"12px",fontSize:"14px",color:"#111827",border:"none",outline:"none",boxSizing:"border-box"}})]})]})},{id:"textarea",title:"Textarea",code:`<!-- Textarea -->
<div class="input-group">
  <label class="input-label">Message</label>

  <textarea
    class="input-textarea"
    rows="4"
    placeholder="Enter your message..."
  ></textarea>
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-textarea {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  color: #111827;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
}
</style>`,component:n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"8px"},children:"Message"}),n.jsx("textarea",{rows:4,placeholder:"Enter your message...",style:{width:"100%",padding:"12px",fontSize:"14px",color:"#111827",background:"#ffffff",border:"1px solid #d1d5db",borderRadius:"8px",outline:"none",resize:"vertical",boxSizing:"border-box",fontFamily:"inherit"}})]})}];return n.jsxs("div",{style:{padding:"80px"},children:[n.jsx("h1",{style:{fontSize:32,marginBottom:32},children:"Input Field Variants"}),n.jsx("div",{style:{display:"grid",gap:24},children:a.map(p=>n.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:32,boxShadow:"0 4px 16px rgba(0,0,0,0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:16},children:[n.jsx("h3",{children:p.title}),n.jsx(B,{code:p.code,variantId:p.id})]}),p.component]},p.id))})]})}const rt={basicBordered:`<!-- Basic Bordered Table -->
<div class="table-card">
  <table class="basic-bordered-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.basic-bordered-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e7eb;
}

.basic-bordered-table thead tr {
  background: #f9fafb;
}

.basic-bordered-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border: 1px solid #e5e7eb;
}

.basic-bordered-table td {
  padding: 12px;
  font-size: 14px;
  border: 1px solid #e5e7eb;
}

.basic-bordered-table td:nth-child(1),
.basic-bordered-table td:nth-child(3),
.basic-bordered-table td:nth-child(4) {
  color: #111827;
}

.basic-bordered-table td:nth-child(2) {
  color: #6B7280;
}
</style>`,stripedTableCode:`<!-- Striped Rows Table -->
<div class="table-card">
  <table class="striped-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
      <tr>
        <td>Robert Fox</td>
        <td>robert@example.com</td>
        <td>Editor</td>
        <td>Active</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.striped-table {
  width: 100%;
  border-collapse: collapse;
}

.striped-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.striped-table td {
  padding: 12px;
  font-size: 14px;
}

.striped-table td:nth-child(1),
.striped-table td:nth-child(3),
.striped-table td:nth-child(4) {
  color: #111827;
}

.striped-table td:nth-child(2) {
  color: #6B7280;
}

.striped-table tbody tr:nth-child(even) {
  background: #f9fafb;
}
</style>`,hoverableTableCode:`<!-- Hoverable Rows Table -->
<div class="table-card">
  <table class="hoverable-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
      <tr>
        <td>Robert Fox</td>
        <td>robert@example.com</td>
        <td>Editor</td>
        <td>Active</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.hoverable-table {
  width: 100%;
  border-collapse: collapse;
}

.hoverable-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.hoverable-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.hoverable-table td:nth-child(1),
.hoverable-table td:nth-child(3),
.hoverable-table td:nth-child(4) {
  color: #111827;
}

.hoverable-table td:nth-child(2) {
  color: #6B7280;
}

.hoverable-table tbody tr {
  cursor: pointer;
  transition: background 0.2s ease;
}

.hoverable-table tbody tr:hover {
  background: #f3e8ff;
}
</style>`,statusBadgeTableCode:`<!-- Table with Status Badges -->
<div class="table-card">
  <table class="status-badge-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>
          <span class="badge badge-active">Active</span>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>
          <span class="badge badge-inactive">Inactive</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.status-badge-table {
  width: 100%;
  border-collapse: collapse;
}

.status-badge-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.status-badge-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.status-badge-table td:nth-child(1),
.status-badge-table td:nth-child(3) {
  color: #111827;
}

.status-badge-table td:nth-child(2) {
  color: #6B7280;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
}

.badge-active {
  color: #10b981;
  background: #d1fae5;
}

.badge-inactive {
  color: #ef4444;
  background: #fee2e2;
}
</style>`,actionsTableCode:`<!-- Table with Actions -->
<div class="table-card">
  <table class="actions-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th class="actions-header">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td class="actions-cell">
          <div class="actions">
            <button class="action-btn action-view">👁</button>
            <button class="action-btn action-edit">✏️</button>
            <button class="action-btn action-delete">🗑</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td class="actions-cell">
          <div class="actions">
            <button class="action-btn action-view">👁</button>
            <button class="action-btn action-edit">✏️</button>
            <button class="action-btn action-delete">🗑</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.actions-table {
  width: 100%;
  border-collapse: collapse;
}

.actions-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.actions-header {
  text-align: right;
}

.actions-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.actions-table td:nth-child(1),
.actions-table td:nth-child(3) {
  color: #111827;
}

.actions-table td:nth-child(2) {
  color: #6B7280;
}

.actions-cell {
  text-align: right;
}

.actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.action-btn {
  padding: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.action-view,
.action-edit {
  color: #6900ef;
}

.action-delete {
  color: #ef4444;
}
</style>`,compactTableCode:`<!-- Compact Table -->
<div class="table-card">
  <table class="compact-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.compact-table {
  width: 100%;
  border-collapse: collapse;
}

.compact-table th {
  padding: 8px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.compact-table td {
  padding: 8px;
  font-size: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.compact-table td:nth-child(1),
.compact-table td:nth-child(3),
.compact-table td:nth-child(4) {
  color: #111827;
}

.compact-table td:nth-child(2) {
  color: #6B7280;
}
</style>`,cardStyleTableCode:`<!-- Card Style Table -->
<div class="table-card">
  <div class="card-table">
    <div class="card-row">
      <div class="card-item">
        <span class="label">Name</span>
        <span class="value">John Doe</span>
      </div>
      <div class="card-item">
        <span class="label">Email</span>
        <span class="value">john@example.com</span>
      </div>
      <div class="card-item">
        <span class="label">Role</span>
        <span class="value">Admin</span>
      </div>
      <div class="card-item">
        <span class="label">Status</span>
        <span class="value">Active</span>
      </div>
    </div>

    <div class="card-row">
      <div class="card-item">
        <span class="label">Name</span>
        <span class="value">Jane Smith</span>
      </div>
      <div class="card-item">
        <span class="label">Email</span>
        <span class="value">jane@example.com</span>
      </div>
      <div class="card-item">
        <span class="label">Role</span>
        <span class="value">User</span>
      </div>
      <div class="card-item">
        <span class="label">Status</span>
        <span class="value">Inactive</span>
      </div>
    </div>
  </div>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.card-table {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-row {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.label {
  font-size: 12px;
  color: #6B7280;
  margin-bottom: 4px;
  display: block;
}

.value {
  font-size: 14px;
  color: #111827;
  font-weight: 500;
}
</style>`,darkHeaderTableCode:`<!-- Dark Header Table -->
<div class="table-card">
  <table class="dark-header-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.dark-header-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}

.dark-header-table thead tr {
  background: #6900ef;
}

.dark-header-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.dark-header-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.dark-header-table td:nth-child(1),
.dark-header-table td:nth-child(3),
.dark-header-table td:nth-child(4) {
  color: #111827;
}

.dark-header-table td:nth-child(2) {
  color: #6B7280;
}
</style>`,checkboxTableCode:`<!-- Table with Checkbox -->
<div class="table-card">
  <table class="checkbox-table">
    <thead>
      <tr>
        <th class="checkbox-cell">
          <input type="checkbox" />
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="checkbox-cell">
          <input type="checkbox" />
        </td>
        <td>John Doe</td>
        <td class="muted">john@example.com</td>
        <td>Admin</td>
      </tr>
      <tr>
        <td class="checkbox-cell">
          <input type="checkbox" />
        </td>
        <td>Jane Smith</td>
        <td class="muted">jane@example.com</td>
        <td>User</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.checkbox-table {
  width: 100%;
  border-collapse: collapse;
}

.checkbox-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.checkbox-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
  color: #111827;
}

.checkbox-cell {
  width: 40px;
}

.checkbox-table input[type="checkbox"] {
  cursor: pointer;
}

.muted {
  color: #6B7280;
}
</style>`,minimalTableCode:`<!-- Minimal Table -->
<div class="table-card">
  <table class="minimal-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td class="muted">john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td class="muted">jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.minimal-table {
  width: 100%;
  border-collapse: collapse;
}

.minimal-table th {
  padding: 12px 0;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.minimal-table td {
  padding: 12px 0;
  font-size: 14px;
  border-top: 1px solid #f3f4f6;
  color: #111827;
}

.minimal-table tbody tr:first-child td {
  border-top: none;
}

.muted {
  color: #6B7280;
}
</style>`,roundedBorderedTableCode:`<!-- Rounded Bordered Table -->
<div class="table-card">
  <div class="rounded-wrapper">
    <table class="rounded-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td class="muted">john@example.com</td>
          <td>Admin</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td class="muted">jane@example.com</td>
          <td>User</td>
          <td>Inactive</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.rounded-wrapper {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.rounded-table {
  width: 100%;
  border-collapse: collapse;
}

.rounded-table thead tr {
  background: #f9fafb;
}

.rounded-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.rounded-table td {
  padding: 12px;
  font-size: 14px;
  border-top: 1px solid #e5e7eb;
  color: #111827;
}

.muted {
  color: #6B7280;
}
</style>`,colorfulHeaderTableCode:`<!-- Colorful Header Table -->
<div class="table-card">
  <table class="colorful-header-table">
    <thead>
      <tr>
        <th class="col-name">Name</th>
        <th class="col-email">Email</th>
        <th class="col-role">Role</th>
        <th class="col-status">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td class="muted">john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td class="muted">jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.colorful-header-table {
  width: 100%;
  border-collapse: collapse;
}

.colorful-header-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
}

.col-name {
  background: #f3e8ff;
  border-bottom: 3px solid #6900ef;
}

.col-email {
  background: #dbeafe;
  border-bottom: 3px solid #3b82f6;
}

.col-role {
  background: #d1fae5;
  border-bottom: 3px solid #10b981;
}

.col-status {
  background: #fee2e2;
  border-bottom: 3px solid #ef4444;
}

.colorful-header-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
  color: #111827;
}

.muted {
  color: #6B7280;
}
</style>`},ot=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Editor",status:"Inactive"}],Xo={padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",border:"1px solid #e5e7eb"},Ko={padding:"12px",fontSize:"14px",color:"#111827",border:"1px solid #e5e7eb"},h0={...Ko,color:"#6B7280"};function y0(){return n.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Table Style Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Explore 12 different table styles for displaying data"})]}),n.jsxs("div",{style:{display:"grid",gap:"32px"},children:[n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 1: Basic Bordered"}),n.jsx(B,{code:rt.basicBordered,variantId:"table-basic-bordered"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",border:"1px solid #e5e7eb"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{background:"#f9fafb"},children:[n.jsx("th",{style:Xo,children:"Name"}),n.jsx("th",{style:Xo,children:"Email"}),n.jsx("th",{style:Xo,children:"Role"}),n.jsx("th",{style:Xo,children:"Status"})]})}),n.jsx("tbody",{children:ot.map(a=>n.jsxs("tr",{children:[n.jsx("td",{style:Ko,children:a.name}),n.jsx("td",{style:h0,children:a.email}),n.jsx("td",{style:Ko,children:a.role}),n.jsx("td",{style:Ko,children:a.status})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 2: Striped Rows"}),n.jsx(B,{code:rt.stripedTableCode,variantId:"table-striped"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Name"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Email"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Role"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Status"})]})}),n.jsx("tbody",{children:ot.map((a,p)=>n.jsxs("tr",{style:{background:p%2===0?"white":"#f9fafb"},children:[n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827"},children:a.name}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#6B7280"},children:a.email}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827"},children:a.role}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827"},children:a.status})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 3: Hoverable Rows"}),n.jsx(B,{code:rt.hoverableTableCode,variantId:"table-hoverable"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Name"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Email"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Role"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Status"})]})}),n.jsx("tbody",{children:ot.map(a=>n.jsxs("tr",{style:{cursor:"pointer",transition:"background 0.2s"},onMouseEnter:p=>p.currentTarget.style.background="#f3e8ff",onMouseLeave:p=>p.currentTarget.style.background="white",children:[n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.name}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#6B7280",borderBottom:"1px solid #e5e7eb"},children:a.email}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.role}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.status})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 4: With Status Badges"}),n.jsx(B,{code:rt.statusBadgeTableCode,variantId:"table-status-badges"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Name"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Email"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Role"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Status"})]})}),n.jsx("tbody",{children:ot.map(a=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.name}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#6B7280",borderBottom:"1px solid #e5e7eb"},children:a.email}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.role}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",borderBottom:"1px solid #e5e7eb"},children:n.jsx("span",{style:{display:"inline-block",padding:"4px 12px",fontSize:"12px",fontWeight:"600",color:a.status==="Active"?"#10b981":"#ef4444",background:a.status==="Active"?"#d1fae5":"#fee2e2",borderRadius:"12px"},children:a.status})})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 5: With Actions"}),n.jsx(B,{code:rt.actionsTableCode,variantId:"table-actions"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Name"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Email"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Role"}),n.jsx("th",{style:{padding:"12px",textAlign:"right",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Actions"})]})}),n.jsx("tbody",{children:ot.map(a=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.name}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#6B7280",borderBottom:"1px solid #e5e7eb"},children:a.email}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.role}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",borderBottom:"1px solid #e5e7eb",textAlign:"right"},children:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[n.jsx("button",{style:{padding:"6px",background:"transparent",border:"none",cursor:"pointer",color:"#6900ef"},children:n.jsx(ql,{size:16})}),n.jsx("button",{style:{padding:"6px",background:"transparent",border:"none",cursor:"pointer",color:"#6900ef"},children:n.jsx(wf,{size:16})}),n.jsx("button",{style:{padding:"6px",background:"transparent",border:"none",cursor:"pointer",color:"#ef4444"},children:n.jsx(es,{size:16})})]})})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 6: Compact"}),n.jsx(B,{code:rt.compactTableCode,variantId:"table-compact"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"8px",textAlign:"left",fontSize:"12px",fontWeight:"600",color:"#374151",borderBottom:"1px solid #e5e7eb"},children:"Name"}),n.jsx("th",{style:{padding:"8px",textAlign:"left",fontSize:"12px",fontWeight:"600",color:"#374151",borderBottom:"1px solid #e5e7eb"},children:"Email"}),n.jsx("th",{style:{padding:"8px",textAlign:"left",fontSize:"12px",fontWeight:"600",color:"#374151",borderBottom:"1px solid #e5e7eb"},children:"Role"}),n.jsx("th",{style:{padding:"8px",textAlign:"left",fontSize:"12px",fontWeight:"600",color:"#374151",borderBottom:"1px solid #e5e7eb"},children:"Status"})]})}),n.jsx("tbody",{children:ot.map(a=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"8px",fontSize:"12px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.name}),n.jsx("td",{style:{padding:"8px",fontSize:"12px",color:"#6B7280",borderBottom:"1px solid #e5e7eb"},children:a.email}),n.jsx("td",{style:{padding:"8px",fontSize:"12px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.role}),n.jsx("td",{style:{padding:"8px",fontSize:"12px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.status})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 7: Card Style"}),n.jsx(B,{code:rt.cardStyleTableCode,variantId:"table-card-style"})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:ot.map(a=>n.jsxs("div",{style:{padding:"16px",border:"1px solid #e5e7eb",borderRadius:"8px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",color:"#6B7280",marginBottom:"4px"},children:"Name"}),n.jsx("div",{style:{fontSize:"14px",color:"#111827",fontWeight:"500"},children:a.name})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",color:"#6B7280",marginBottom:"4px"},children:"Email"}),n.jsx("div",{style:{fontSize:"14px",color:"#111827"},children:a.email})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",color:"#6B7280",marginBottom:"4px"},children:"Role"}),n.jsx("div",{style:{fontSize:"14px",color:"#111827"},children:a.role})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",color:"#6B7280",marginBottom:"4px"},children:"Status"}),n.jsx("div",{style:{fontSize:"14px",color:"#111827"},children:a.status})]})]},a.id))})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 8: Dark Header"}),n.jsx(B,{code:rt.darkHeaderTableCode,variantId:"table-dark-header"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",overflow:"hidden",borderRadius:"8px"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{background:"#6900ef"},children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"white"},children:"Name"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"white"},children:"Email"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"white"},children:"Role"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"white"},children:"Status"})]})}),n.jsx("tbody",{children:ot.map(a=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.name}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#6B7280",borderBottom:"1px solid #e5e7eb"},children:a.email}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.role}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.status})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 9: With Checkbox"}),n.jsx(B,{code:rt.checkboxTableCode,variantId:"table-checkbox"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb",width:"40px"},children:n.jsx("input",{type:"checkbox",style:{cursor:"pointer"}})}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Name"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Email"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151",borderBottom:"2px solid #e5e7eb"},children:"Role"})]})}),n.jsx("tbody",{children:ot.map(a=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"12px",borderBottom:"1px solid #e5e7eb"},children:n.jsx("input",{type:"checkbox",style:{cursor:"pointer"}})}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.name}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#6B7280",borderBottom:"1px solid #e5e7eb"},children:a.email}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.role})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 10: Minimal"}),n.jsx(B,{code:rt.minimalTableCode,variantId:"table-minimal"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"12px 0",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151"},children:"Name"}),n.jsx("th",{style:{padding:"12px 0",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151"},children:"Email"}),n.jsx("th",{style:{padding:"12px 0",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151"},children:"Role"}),n.jsx("th",{style:{padding:"12px 0",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151"},children:"Status"})]})}),n.jsx("tbody",{children:ot.map((a,p)=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"12px 0",fontSize:"14px",color:"#111827",borderTop:p===0?"none":"1px solid #f3f4f6"},children:a.name}),n.jsx("td",{style:{padding:"12px 0",fontSize:"14px",color:"#6B7280",borderTop:p===0?"none":"1px solid #f3f4f6"},children:a.email}),n.jsx("td",{style:{padding:"12px 0",fontSize:"14px",color:"#111827",borderTop:p===0?"none":"1px solid #f3f4f6"},children:a.role}),n.jsx("td",{style:{padding:"12px 0",fontSize:"14px",color:"#111827",borderTop:p===0?"none":"1px solid #f3f4f6"},children:a.status})]},a.id))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 11: Rounded Bordered"}),n.jsx(B,{code:rt.roundedBorderedTableCode,variantId:"table-rounded-bordered"})]}),n.jsx("div",{style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{background:"#f9fafb"},children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151"},children:"Name"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151"},children:"Email"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151"},children:"Role"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#374151"},children:"Status"})]})}),n.jsx("tbody",{children:ot.map((a,p)=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderTop:"1px solid #e5e7eb"},children:a.name}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#6B7280",borderTop:"1px solid #e5e7eb"},children:a.email}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderTop:"1px solid #e5e7eb"},children:a.role}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderTop:"1px solid #e5e7eb"},children:a.status})]},a.id))})]})})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Variant 12: Colorful Headers"}),n.jsx(B,{code:rt.colorfulHeaderTableCode,variantId:"table-colorful-headers"})]}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#111827",background:"#f3e8ff",borderBottom:"3px solid #6900ef"},children:"Name"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#111827",background:"#dbeafe",borderBottom:"3px solid #3b82f6"},children:"Email"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#111827",background:"#d1fae5",borderBottom:"3px solid #10b981"},children:"Role"}),n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:"600",color:"#111827",background:"#fee2e2",borderBottom:"3px solid #ef4444"},children:"Status"})]})}),n.jsx("tbody",{children:ot.map(a=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.name}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#6B7280",borderBottom:"1px solid #e5e7eb"},children:a.email}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.role}),n.jsx("td",{style:{padding:"12px",fontSize:"14px",color:"#111827",borderBottom:"1px solid #e5e7eb"},children:a.status})]},a.id))})]})]})]})]})})}function m0(){const[a,p]=J.useState(null),f=({isOpen:z,onClose:x,children:W})=>z?n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px"},onClick:x,children:n.jsx("div",{onClick:D=>D.stopPropagation(),children:W})}):null;return n.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:[n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Modal Style Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Explore 12 different modal dialog styles"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:[n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Basic Modal"}),n.jsx("button",{onClick:()=>p(1),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Centered"}),n.jsx("button",{onClick:()=>p(2),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Confirmation"}),n.jsx("button",{onClick:()=>p(3),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Warning"}),n.jsx("button",{onClick:()=>p(4),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Success"}),n.jsx("button",{onClick:()=>p(5),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Form"}),n.jsx("button",{onClick:()=>p(6),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Large"}),n.jsx("button",{onClick:()=>p(7),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Small"}),n.jsx("button",{onClick:()=>p(8),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"With Icon"}),n.jsx("button",{onClick:()=>p(9),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Destructive"}),n.jsx("button",{onClick:()=>p(10),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Bottom Sheet"}),n.jsx("button",{onClick:()=>p(11),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Full Screen"}),n.jsx("button",{onClick:()=>p(12),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Open Modal"})]})]})]}),n.jsx(f,{isOpen:a===1,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"16px",width:"400px",padding:"0",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"24px",borderBottom:"1px solid #e5e7eb",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:0},children:"Modal Title"}),n.jsx("button",{onClick:()=>p(null),style:{background:"none",border:"none",cursor:"pointer",padding:"4px"},children:n.jsx(Sn,{size:20,color:"#6B7280"})})]}),n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 24px 0",lineHeight:"1.6"},children:"This is a basic modal dialog. You can add any content here."}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>p(null),style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"#6B7280",background:"#f3f4f6",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Confirm"})]})]})]})}),n.jsx(f,{isOpen:a===2,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"16px",width:"400px",padding:"32px",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",color:"#111827",margin:"0 0 12px 0"},children:"Centered Modal"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 24px 0",lineHeight:"1.6"},children:"This modal has centered content with no header border."}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center"},children:[n.jsx("button",{onClick:()=>p(null),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"transparent",border:"2px solid #6900ef",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Continue"})]})]})}),n.jsx(f,{isOpen:a===3,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"12px",width:"400px",padding:"24px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 12px 0"},children:"Confirm Action"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 24px 0",lineHeight:"1.6"},children:"Are you sure you want to perform this action? This cannot be undone."}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:()=>p(null),style:{flex:1,padding:"12px",fontSize:"14px",fontWeight:"600",color:"#6B7280",background:"white",border:"1px solid #e5e7eb",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{style:{flex:1,padding:"12px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Confirm"})]})]})}),n.jsx(f,{isOpen:a===4,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"12px",width:"400px",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[n.jsx("div",{style:{width:"40px",height:"40px",background:"#fef3c7",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Jo,{size:20,color:"#f59e0b"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:0},children:"Warning"})]}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 24px 0",lineHeight:"1.6"},children:"This action may have consequences. Please review before continuing."}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>p(null),style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"#6B7280",background:"#f3f4f6",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"white",background:"#f59e0b",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Proceed"})]})]})}),n.jsx(f,{isOpen:a===5,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"16px",width:"400px",padding:"32px",textAlign:"center"},children:[n.jsx("div",{style:{width:"64px",height:"64px",background:"#d1fae5",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:n.jsx(ln,{size:32,color:"#10b981"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",color:"#111827",margin:"0 0 12px 0"},children:"Success!"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 24px 0",lineHeight:"1.6"},children:"Your action has been completed successfully."}),n.jsx("button",{onClick:()=>p(null),style:{padding:"12px 32px",fontSize:"14px",fontWeight:"600",color:"white",background:"#10b981",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Done"})]})}),n.jsx(f,{isOpen:a===6,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"16px",width:"480px",padding:"0",overflow:"hidden"},children:[n.jsx("div",{style:{padding:"24px",borderBottom:"1px solid #e5e7eb"},children:n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:0},children:"Add New User"})}),n.jsxs("div",{style:{padding:"24px"},children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"8px"},children:"Name"}),n.jsx("input",{type:"text",placeholder:"Enter name",style:{width:"100%",padding:"10px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",boxSizing:"border-box"}})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"8px"},children:"Email"}),n.jsx("input",{type:"email",placeholder:"Enter email",style:{width:"100%",padding:"10px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",boxSizing:"border-box"}})]}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>p(null),style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"#6B7280",background:"#f3f4f6",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Save"})]})]})]})}),n.jsx(f,{isOpen:a===7,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"16px",width:"700px",maxHeight:"80vh",overflow:"auto"},children:[n.jsxs("div",{style:{padding:"24px",borderBottom:"1px solid #e5e7eb",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,background:"white"},children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",color:"#111827",margin:0},children:"Large Modal"}),n.jsx("button",{onClick:()=>p(null),style:{background:"none",border:"none",cursor:"pointer",padding:"4px"},children:n.jsx(Sn,{size:24,color:"#6B7280"})})]}),n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 16px 0",lineHeight:"1.6"},children:"This is a large modal with more space for content. You can add forms, tables, or any other content here."}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 16px 0",lineHeight:"1.6"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"24px"},children:[n.jsx("button",{onClick:()=>p(null),style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"#6B7280",background:"#f3f4f6",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Continue"})]})]})]})}),n.jsx(f,{isOpen:a===8,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"12px",width:"320px",padding:"20px",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"Small Modal"}),n.jsx("p",{style:{fontSize:"13px",color:"#6B7280",margin:"0 0 20px 0"},children:"Compact modal for simple messages."}),n.jsx("button",{onClick:()=>p(null),style:{width:"100%",padding:"10px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Got it"})]})}),n.jsx(f,{isOpen:a===9,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"16px",width:"400px",padding:"32px",textAlign:"center"},children:[n.jsx("div",{style:{width:"56px",height:"56px",background:"#f3e8ff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:n.jsx(Nr,{size:28,color:"#6900ef"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 12px 0"},children:"Information"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 24px 0",lineHeight:"1.6"},children:"Here's some important information you should know about this action."}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:()=>p(null),style:{flex:1,padding:"12px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"#f3e8ff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{style:{flex:1,padding:"12px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Understood"})]})]})}),n.jsx(f,{isOpen:a===10,onClose:()=>p(null),children:n.jsxs("div",{style:{background:"white",borderRadius:"12px",width:"400px",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[n.jsx("div",{style:{width:"40px",height:"40px",background:"#fee2e2",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(es,{size:20,color:"#ef4444"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:0},children:"Delete Item"})]}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 24px 0",lineHeight:"1.6"},children:"Are you sure you want to delete this item? This action cannot be undone."}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:()=>p(null),style:{flex:1,padding:"12px",fontSize:"14px",fontWeight:"600",color:"#6B7280",background:"#f3f4f6",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{style:{flex:1,padding:"12px",fontSize:"14px",fontWeight:"600",color:"white",background:"#ef4444",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Delete"})]})]})}),a===11&&n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.5)",zIndex:9999,display:"flex",alignItems:"flex-end"},onClick:()=>p(null),children:n.jsxs("div",{onClick:z=>z.stopPropagation(),style:{background:"white",borderRadius:"16px 16px 0 0",width:"100%",padding:"24px",animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{style:{width:"40px",height:"4px",background:"#e5e7eb",borderRadius:"2px",margin:"0 auto 20px"}}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 12px 0"},children:"Bottom Sheet"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 24px 0",lineHeight:"1.6"},children:"This modal slides up from the bottom. Great for mobile interfaces."}),n.jsx("button",{onClick:()=>p(null),style:{width:"100%",padding:"12px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Close"})]})}),a===12&&n.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"white",zIndex:9999,overflow:"auto"},children:[n.jsxs("div",{style:{padding:"24px",borderBottom:"1px solid #e5e7eb",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",color:"#111827",margin:0},children:"Full Screen Modal"}),n.jsx("button",{onClick:()=>p(null),style:{background:"none",border:"none",cursor:"pointer",padding:"8px"},children:n.jsx(Sn,{size:24,color:"#6B7280"})})]}),n.jsx("div",{style:{padding:"24px",maxWidth:"800px",margin:"0 auto"},children:n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",lineHeight:"1.6"},children:"This modal takes up the entire screen. Perfect for complex forms or detailed content."})})]}),n.jsx("style",{children:`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `})]})}function b0(){const a=[{id:"info-basic",title:"Variant 1: Info - Basic",code:`<!-- Info Alert - Basic -->
<div class="alert-info-basic">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
  <p class="alert-message">This is an informational alert message.</p>
</div>

<style>
.alert-info-basic {
  padding: 16px;
  background: #dbeafe;
  border: 1px solid #3b82f6;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-info-basic .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-info-basic .alert-message {
  font-size: 14px;
  color: #1e40af;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#dbeafe",border:"1px solid #3b82f6",borderRadius:"8px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(Nr,{size:20,color:"#3b82f6",style:{flexShrink:0,marginTop:"2px"}}),n.jsx("div",{style:{flex:1},children:n.jsx("p",{style:{fontSize:"14px",color:"#1e40af",margin:0,fontWeight:"500"},children:"This is an informational alert message."})})]})},{id:"success-title",title:"Variant 2: Success - With Title",code:`<!-- Success Alert - With Title -->
<div class="alert-success-title">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Success!</h4>
    <p class="alert-message">Your changes have been saved successfully.</p>
  </div>
</div>

<style>
.alert-success-title {
  padding: 16px;
  background: #d1fae5;
  border: 1px solid #10b981;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-success-title .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-success-title .alert-content {
  flex: 1;
}

.alert-success-title .alert-title {
  font-size: 14px;
  color: #047857;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-success-title .alert-message {
  font-size: 14px;
  color: #059669;
  margin: 0;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#d1fae5",border:"1px solid #10b981",borderRadius:"8px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(ln,{size:20,color:"#10b981",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#047857",margin:"0 0 4px 0",fontWeight:"600"},children:"Success!"}),n.jsx("p",{style:{fontSize:"14px",color:"#059669",margin:0},children:"Your changes have been saved successfully."})]})]})},{id:"warning-left-border",title:"Variant 3: Warning - Left Border",code:`<!-- Warning Alert - Left Border -->
<div class="alert-warning-border">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
  <p class="alert-message">Please review your information before proceeding.</p>
</div>

<style>
.alert-warning-border {
  padding: 16px;
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-warning-border .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-warning-border .alert-message {
  font-size: 14px;
  color: #92400e;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#fef3c7",borderLeft:"4px solid #f59e0b",borderRadius:"4px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(Jo,{size:20,color:"#f59e0b",style:{flexShrink:0,marginTop:"2px"}}),n.jsx("div",{style:{flex:1},children:n.jsx("p",{style:{fontSize:"14px",color:"#92400e",margin:0,fontWeight:"500"},children:"Please review your information before proceeding."})})]})},{id:"error-dismissible",title:"Variant 4: Error - Dismissible",code:`<!-- Error Alert - Dismissible -->
<div class="alert-error-dismissible">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
  <p class="alert-message">An error occurred while processing your request.</p>
  <button class="alert-close" onclick="this.parentElement.remove()">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#991b1b" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
</div>

<style>
.alert-error-dismissible {
  padding: 16px;
  background: #fee2e2;
  border: 1px solid #ef4444;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-error-dismissible .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-error-dismissible .alert-message {
  font-size: 14px;
  color: #991b1b;
  margin: 0;
  font-weight: 500;
  flex: 1;
}

.alert-error-dismissible .alert-close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.alert-error-dismissible .alert-close:hover {
  transform: scale(1.1);
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#fee2e2",border:"1px solid #ef4444",borderRadius:"8px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(ic,{size:20,color:"#ef4444",style:{flexShrink:0,marginTop:"2px"}}),n.jsx("div",{style:{flex:1},children:n.jsx("p",{style:{fontSize:"14px",color:"#991b1b",margin:0,fontWeight:"500"},children:"An error occurred while processing your request."})}),n.jsx("button",{style:{background:"transparent",border:"none",cursor:"pointer",padding:0,flexShrink:0},children:n.jsx(Sn,{size:20,color:"#991b1b"})})]})},{id:"info-solid",title:"Variant 5: Info - Solid",code:`<!-- Info Alert - Solid -->
<div class="alert-info-solid">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
  <p class="alert-message">Check out the latest updates and features.</p>
</div>

<style>
.alert-info-solid {
  padding: 16px;
  background: #3b82f6;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-info-solid .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-info-solid .alert-message {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#3b82f6",borderRadius:"8px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(Nr,{size:20,color:"#ffffff",style:{flexShrink:0,marginTop:"2px"}}),n.jsx("div",{style:{flex:1},children:n.jsx("p",{style:{fontSize:"14px",color:"#ffffff",margin:0,fontWeight:"500"},children:"Check out the latest updates and features."})})]})},{id:"success-minimal",title:"Variant 6: Success - Minimal",code:`<!-- Success Alert - Minimal -->
<div class="alert-success-minimal">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Payment Successful</h4>
    <p class="alert-message">Your payment has been processed. Reference: #12345</p>
    <button class="alert-action">View Receipt</button>
  </div>
</div>

<style>
.alert-success-minimal {
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-success-minimal .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-success-minimal .alert-content {
  flex: 1;
}

.alert-success-minimal .alert-title {
  font-size: 14px;
  color: #111827;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-success-minimal .alert-message {
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 12px 0;
}

.alert-success-minimal .alert-action {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #10b981;
  background: transparent;
  border: 1px solid #10b981;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-success-minimal .alert-action:hover {
  background: #d1fae5;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:"8px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(ln,{size:20,color:"#10b981",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#111827",margin:"0 0 4px 0",fontWeight:"600"},children:"Payment Successful"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 12px 0"},children:"Your payment has been processed. Reference: #12345"}),n.jsx("button",{style:{padding:"6px 12px",fontSize:"13px",fontWeight:"600",color:"#10b981",background:"transparent",border:"1px solid #10b981",borderRadius:"6px",cursor:"pointer",transition:"all 0.3s"},children:"View Receipt"})]})]})},{id:"warning-top-border",title:"Variant 7: Warning - Top Border",code:`<!-- Warning Alert - Top Border -->
<div class="alert-warning-top">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Storage Almost Full</h4>
    <p class="alert-message">You're using 95% of your storage. Consider upgrading your plan.</p>
  </div>
</div>

<style>
.alert-warning-top {
  padding: 16px;
  background: #fffbeb;
  border-top: 3px solid #f59e0b;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-warning-top .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-warning-top .alert-content {
  flex: 1;
}

.alert-warning-top .alert-title {
  font-size: 14px;
  color: #78350f;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-warning-top .alert-message {
  font-size: 14px;
  color: #92400e;
  margin: 0;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#fffbeb",borderTop:"3px solid #f59e0b",borderRadius:"4px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(Jo,{size:20,color:"#f59e0b",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#78350f",margin:"0 0 4px 0",fontWeight:"600"},children:"Storage Almost Full"}),n.jsx("p",{style:{fontSize:"14px",color:"#92400e",margin:0},children:"You're using 95% of your storage. Consider upgrading your plan."})]})]})},{id:"error-outlined",title:"Variant 8: Error - Outlined",code:`<!-- Error Alert - Outlined -->
<div class="alert-error-outlined">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Connection Failed</h4>
    <p class="alert-message">Unable to connect to the server. Please try again.</p>
  </div>
</div>

<style>
.alert-error-outlined {
  padding: 16px;
  background: #ffffff;
  border: 2px solid #ef4444;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-error-outlined .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-error-outlined .alert-content {
  flex: 1;
}

.alert-error-outlined .alert-title {
  font-size: 14px;
  color: #991b1b;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-error-outlined .alert-message {
  font-size: 14px;
  color: #dc2626;
  margin: 0;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#ffffff",border:"2px solid #ef4444",borderRadius:"8px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(ic,{size:20,color:"#ef4444",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#991b1b",margin:"0 0 4px 0",fontWeight:"600"},children:"Connection Failed"}),n.jsx("p",{style:{fontSize:"14px",color:"#dc2626",margin:0},children:"Unable to connect to the server. Please try again."})]})]})},{id:"purple-info",title:"Variant 9: Purple Info",code:`<!-- Purple Info Alert -->
<div class="alert-purple-info">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6900ef" stroke-width="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">New Feature Available</h4>
    <p class="alert-message">Try our new dashboard with enhanced analytics.</p>
  </div>
</div>

<style>
.alert-purple-info {
  padding: 16px;
  background: #f3e8ff;
  border: 1px solid #6900ef;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-purple-info .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-purple-info .alert-content {
  flex: 1;
}

.alert-purple-info .alert-title {
  font-size: 14px;
  color: #5500cc;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-purple-info .alert-message {
  font-size: 14px;
  color: #6900ef;
  margin: 0;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#f3e8ff",border:"1px solid #6900ef",borderRadius:"8px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(jn,{size:20,color:"#6900ef",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#5500cc",margin:"0 0 4px 0",fontWeight:"600"},children:"New Feature Available"}),n.jsx("p",{style:{fontSize:"14px",color:"#6900ef",margin:0},children:"Try our new dashboard with enhanced analytics."})]})]})},{id:"gradient-bg",title:"Variant 10: Gradient Background",code:`<!-- Gradient Background Alert -->
<div class="alert-gradient">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Premium Feature</h4>
    <p class="alert-message">Upgrade to unlock advanced analytics and reporting.</p>
  </div>
</div>

<style>
.alert-gradient {
  padding: 16px;
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(105, 0, 239, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-gradient .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-gradient .alert-content {
  flex: 1;
}

.alert-gradient .alert-title {
  font-size: 14px;
  color: #ffffff;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-gradient .alert-message {
  font-size: 14px;
  color: #f3e8ff;
  margin: 0;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",borderRadius:"12px",display:"flex",alignItems:"start",gap:"12px",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.3)"},children:[n.jsx(yc,{size:20,color:"#ffffff",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#ffffff",margin:"0 0 4px 0",fontWeight:"600"},children:"Premium Feature"}),n.jsx("p",{style:{fontSize:"14px",color:"#f3e8ff",margin:0},children:"Upgrade to unlock advanced analytics and reporting."})]})]})},{id:"soft-elevated",title:"Variant 11: Soft Elevated",code:`<!-- Soft Elevated Alert -->
<div class="alert-soft-elevated">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
  <p class="alert-message">Your profile has been updated successfully!</p>
</div>

<style>
.alert-soft-elevated {
  padding: 16px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-soft-elevated .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-soft-elevated .alert-message {
  font-size: 14px;
  color: #111827;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#ffffff",borderRadius:"12px",display:"flex",alignItems:"start",gap:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.12)"},children:[n.jsx(wn,{size:20,color:"#10b981",style:{flexShrink:0,marginTop:"2px"}}),n.jsx("div",{style:{flex:1},children:n.jsx("p",{style:{fontSize:"14px",color:"#111827",margin:0,fontWeight:"500"},children:"Your profile has been updated successfully!"})})]})},{id:"compact",title:"Variant 12: Compact",code:`<!-- Compact Alert -->
<div class="alert-compact">
  <svg class="alert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
  <p class="alert-message">You have 3 new notifications</p>
</div>

<style>
.alert-compact {
  padding: 12px 16px;
  background: #dbeafe;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-compact .alert-icon {
  flex-shrink: 0;
}

.alert-compact .alert-message {
  font-size: 13px;
  color: #1e40af;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,component:n.jsxs("div",{style:{padding:"12px 16px",background:"#dbeafe",borderRadius:"6px",display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(Xn,{size:16,color:"#3b82f6",style:{flexShrink:0}}),n.jsx("div",{style:{flex:1},children:n.jsx("p",{style:{fontSize:"13px",color:"#1e40af",margin:0,fontWeight:"500"},children:"You have 3 new notifications"})})]})},{id:"icon-badge",title:"Variant 13: Icon Badge Style",code:`<!-- Icon Badge Alert -->
<div class="alert-icon-badge">
  <div class="alert-badge">
    <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
  <div class="alert-content">
    <h4 class="alert-title">Verification Complete</h4>
    <p class="alert-message">Your account has been verified successfully.</p>
  </div>
</div>

<style>
.alert-icon-badge {
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-icon-badge .alert-badge {
  width: 40px;
  height: 40px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.alert-icon-badge .alert-badge .alert-icon {
  stroke: #ffffff;
}

.alert-icon-badge .alert-content {
  flex: 1;
  padding-top: 4px;
}

.alert-icon-badge .alert-title {
  font-size: 14px;
  color: #111827;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-icon-badge .alert-message {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#f9fafb",borderRadius:"12px",display:"flex",alignItems:"start",gap:"16px"},children:[n.jsx("div",{style:{width:"40px",height:"40px",background:"#10b981",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(ln,{size:20,color:"#ffffff"})}),n.jsxs("div",{style:{flex:1,paddingTop:"4px"},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#111827",margin:"0 0 4px 0",fontWeight:"600"},children:"Verification Complete"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0},children:"Your account has been verified successfully."})]})]})},{id:"security",title:"Variant 14: Security Alert",code:`<!-- Security Alert -->
<div class="alert-security">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Security Alert</h4>
    <p class="alert-message">New login detected from Chrome on Windows. If this wasn't you, please change your password immediately.</p>
  </div>
</div>

<style>
.alert-security {
  padding: 16px;
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-security .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-security .alert-content {
  flex: 1;
}

.alert-security .alert-title {
  font-size: 14px;
  color: #78350f;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-security .alert-message {
  font-size: 14px;
  color: #92400e;
  margin: 0;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#fffbeb",borderLeft:"4px solid #f59e0b",borderRadius:"4px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(gc,{size:20,color:"#f59e0b",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#78350f",margin:"0 0 4px 0",fontWeight:"600"},children:"Security Alert"}),n.jsx("p",{style:{fontSize:"14px",color:"#92400e",margin:0},children:"New login detected from Chrome on Windows. If this wasn't you, please change your password immediately."})]})]})},{id:"dark-mode",title:"Variant 15: Dark Mode",code:`<!-- Dark Mode Alert -->
<div class="alert-dark-mode">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">System Maintenance</h4>
    <p class="alert-message">Scheduled maintenance on Sunday, 2AM - 4AM UTC.</p>
  </div>
</div>

<style>
.alert-dark-mode {
  padding: 16px;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-dark-mode .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-dark-mode .alert-content {
  flex: 1;
}

.alert-dark-mode .alert-title {
  font-size: 14px;
  color: #f9fafb;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-dark-mode .alert-message {
  font-size: 14px;
  color: #d1d5db;
  margin: 0;
}
</style>`,component:n.jsxs("div",{style:{padding:"16px",background:"#1f2937",border:"1px solid #374151",borderRadius:"8px",display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx(Nr,{size:20,color:"#60a5fa",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"14px",color:"#f9fafb",margin:"0 0 4px 0",fontWeight:"600"},children:"System Maintenance"}),n.jsx("p",{style:{fontSize:"14px",color:"#d1d5db",margin:0},children:"Scheduled maintenance on Sunday, 2AM - 4AM UTC."})]})]})}];return n.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Alert Style Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Explore 15 different alert and notification styles"})]}),n.jsx("div",{style:{display:"grid",gap:"24px"},children:a.map(p=>n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:p.title}),n.jsx(B,{code:p.code,variantId:p.id})]}),p.component]},p.id))})]})})}const it={successBasicToastCode:`<!-- Success Toast -->
<div class="toast-container">
  <div class="toast toast-success">
    <span class="icon">✔</span>
    <p class="toast-message">Changes saved successfully</p>
    <button class="toast-close">✕</button>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  background: #ffffff;
  border: 1px solid #10b981;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-success .icon {
  color: #10b981;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #111827;
  margin: 0;
  flex: 1;
}

.toast-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #6B7280;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>`,errorSolidToastCode:`<!-- Error Toast - Solid -->
<div class="toast-container">
  <div class="toast toast-error-solid">
    <span class="icon">✖</span>
    <p class="toast-message">Error: Action failed</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-error-solid {
  background: #ef4444;
}

.toast-error-solid .icon {
  color: #ffffff;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  flex: 1;
  font-weight: 500;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>`,infoLightToastCode:`<!-- Info Toast - Light -->
<div class="toast-container">
  <div class="toast toast-info-light">
    <span class="icon">ℹ</span>
    <p class="toast-message">New update available</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-info-light {
  background: #dbeafe;
  border: 1px solid #3b82f6;
}

.toast-info-light .icon {
  color: #3b82f6;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #1e40af;
  margin: 0;
  flex: 1;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>`,warningOutlinedToastCode:`<!-- Warning Toast - Outlined -->
<div class="toast-container">
  <div class="toast toast-warning-outlined">
    <span class="icon">⚠</span>
    <p class="toast-message">Warning: Low storage space</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-warning-outlined {
  background: #ffffff;
  border: 2px solid #f59e0b;
}

.toast-warning-outlined .icon {
  color: #f59e0b;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #92400e;
  margin: 0;
  flex: 1;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>`,purpleGradientToastCode:`<!-- Purple Gradient Toast -->
<div class="toast-container">
  <div class="toast toast-purple-gradient">
    <span class="icon">🔔</span>
    <p class="toast-message">Welcome to premium!</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 24px rgba(105, 0, 239, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-purple-gradient {
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
}

.toast-purple-gradient .icon {
  color: #ffffff;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  flex: 1;
  font-weight: 500;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>`,darkToastCode:`<!-- Dark Toast -->
<div class="toast-container">
  <div class="toast toast-dark">
    <span class="icon">✔</span>
    <p class="toast-message">Task completed</p>
    <span class="close">✖</span>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-dark {
  background: #1f2937;
}

.toast-dark .icon {
  color: #10b981;
}

.toast-dark .close {
  color: #9ca3af;
  cursor: pointer;
}

.toast-message {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  flex: 1;
}

@keyframes slideIn {
  from { transform: translateX(400px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>`,actionToastCode:`<!-- Toast With Action -->
<div class="toast-container">
  <div class="toast toast-action">
    <div class="toast-row">
      <span class="icon">✉</span>
      <p class="toast-message">New message received</p>
    </div>
    <button class="toast-action-btn">View Message</button>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-action {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.toast-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.toast-action .icon {
  color: #6900ef;
}

.toast-message {
  font-size: 14px;
  color: #111827;
  margin: 0;
  font-weight: 500;
  flex: 1;
}

.toast-action-btn {
  width: 100%;
  padding: 8px;
  background: #f3e8ff;
  color: #6900ef;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
</style>`,notificationToastCode:`<!-- Notification Toast -->
<div class="toast-container">
  <div class="toast toast-notification">
    <div class="icon-wrap">🔔</div>
    <div>
      <p class="title">New Notification</p>
      <p class="desc">You have a new notification</p>
    </div>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-notification {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 12px;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon-wrap {
  width: 40px;
  height: 40px;
  background: #f3e8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px;
}

.desc {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}
</style>`,uploadToastCode:`<!-- Upload Progress Toast -->
<div class="toast-container">
  <div class="toast toast-upload">
    <div class="upload-row">
      <span class="icon">⬆</span>
      <p class="toast-message">Uploading file...</p>
      <span class="percent">75%</span>
    </div>
    <div class="progress">
      <div class="bar"></div>
    </div>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-upload {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.upload-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.icon {
  color: #6900ef;
}

.percent {
  font-size: 13px;
  color: #6b7280;
}

.progress {
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
}

.bar {
  width: 75%;
  height: 100%;
  background: #6900ef;
}
</style>`,compactToastCode:`<!-- Compact Toast -->
<div class="toast-container">
  <div class="toast toast-compact">
    <span class="icon">✔</span>
    <p class="toast-message">Saved</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-compact {
  background: #111827;
  border-radius: 6px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.toast-compact .icon {
  color: #10b981;
}

.toast-message {
  font-size: 13px;
  color: #ffffff;
  margin: 0;
}
</style>`,likeToastCode:`<!-- Like Toast -->
<div class="toast-container">
  <div class="toast toast-like">
    <div class="heart">♥</div>
    <p class="toast-message">Someone liked your post</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-like {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.heart {
  width: 36px;
  height: 36px;
  background: #fee2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
}

.toast-message {
  font-size: 14px;
  color: #111827;
  margin: 0;
}
</style>`,achievementToastCode:`<!-- Achievement Toast -->
<div class="toast-container">
  <div class="toast toast-achievement">
    <span class="icon">★</span>
    <div class="content">
      <p class="title">Achievement Unlocked!</p>
      <p class="desc">First milestone reached</p>
    </div>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-achievement {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.toast-achievement .icon {
  font-size: 20px;
  color: #ffffff;
}

.toast-achievement .title {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 2px 0;
}

.toast-achievement .desc {
  font-size: 13px;
  color: rgba(255,255,255,0.9);
  margin: 0;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>`};function v0(){const[a,p]=J.useState([]),f=x=>{const W=Date.now();p(D=>[...D,{id:W,type:x}]),setTimeout(()=>{p(D=>D.filter(Z=>Z.id!==W))},3e3)},z=({children:x})=>n.jsx("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:1e4,display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:x});return n.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:[n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Toast Notification Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Click buttons to preview 12 different toast notification styles"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:[n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Success - Basic"}),n.jsx(B,{code:it.successBasicToastCode,variantId:"toast-success-basic"})]}),n.jsx("button",{onClick:()=>f("success-basic"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#10b981",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Error - Solid"}),n.jsx(B,{code:it.errorSolidToastCode,variantId:"toast-error-solid"})]}),n.jsx("button",{onClick:()=>f("error-solid"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#ef4444",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Info - Light"}),n.jsx(B,{code:it.infoLightToastCode,variantId:"toast-info-light"})]}),n.jsx("button",{onClick:()=>f("info-light"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#3b82f6",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Warning - Outlined"}),n.jsx(B,{code:it.warningOutlinedToastCode,variantId:"toast-warning-outlined"})]}),n.jsx("button",{onClick:()=>f("warning-outlined"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#f59e0b",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Purple - Gradient"}),n.jsx(B,{code:it.purpleGradientToastCode,variantId:"toast-purple-gradient"})]}),n.jsx("button",{onClick:()=>f("purple-gradient"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Dark Theme"}),n.jsx(B,{code:it.darkToastCode,variantId:"toast-dark-theme"})]}),n.jsx("button",{onClick:()=>f("dark"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#111827",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"With Action"}),n.jsx(B,{code:it.actionToastCode,variantId:"toast-with-action"})]}),n.jsx("button",{onClick:()=>f("with-action"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Notification"}),n.jsx(B,{code:it.notificationToastCode,variantId:"toast-notification"})]}),n.jsx("button",{onClick:()=>f("notification"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Upload Progress"}),n.jsx(B,{code:it.uploadToastCode,variantId:"toast-success-basic"})]}),n.jsx("button",{onClick:()=>f("upload"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Compact"}),n.jsx(B,{code:it.compactToastCode,variantId:"toast-compact"})]}),n.jsx("button",{onClick:()=>f("compact"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Like Notification"}),n.jsx(B,{code:it.likeToastCode,variantId:"toast-like"})]}),n.jsx("button",{onClick:()=>f("like"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",margin:0},children:"Achievement"}),n.jsx(B,{code:it.achievementToastCode,variantId:"toast-achievement"})]}),n.jsx("button",{onClick:()=>f("achievement"),style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Show Toast"})]})]})]}),n.jsx(z,{children:a.map(x=>x.type==="success-basic"?n.jsxs("div",{style:{background:"white",border:"1px solid #10b981",borderRadius:"8px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx(ln,{size:20,color:"#10b981"}),n.jsx("p",{style:{fontSize:"14px",color:"#111827",margin:0,flex:1},children:"Changes saved successfully"}),n.jsx("button",{onClick:()=>p(W=>W.filter(D=>D.id!==x.id)),style:{background:"none",border:"none",cursor:"pointer",padding:"4px"},children:n.jsx(Sn,{size:16,color:"#6B7280"})})]},x.id):x.type==="error-solid"?n.jsxs("div",{style:{background:"#ef4444",borderRadius:"8px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx(Sn,{size:20,color:"white"}),n.jsx("p",{style:{fontSize:"14px",color:"white",margin:0,flex:1,fontWeight:"500"},children:"Error: Action failed"})]},x.id):x.type==="info-light"?n.jsxs("div",{style:{background:"#dbeafe",border:"1px solid #3b82f6",borderRadius:"8px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx(Nr,{size:20,color:"#3b82f6"}),n.jsx("p",{style:{fontSize:"14px",color:"#1e40af",margin:0,flex:1},children:"New update available"})]},x.id):x.type==="warning-outlined"?n.jsxs("div",{style:{background:"white",border:"2px solid #f59e0b",borderRadius:"8px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx(Jo,{size:20,color:"#f59e0b"}),n.jsx("p",{style:{fontSize:"14px",color:"#92400e",margin:0,flex:1},children:"Warning: Low storage space"})]},x.id):x.type==="purple-gradient"?n.jsxs("div",{style:{background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",borderRadius:"12px",padding:"16px",boxShadow:"0 8px 24px rgba(105, 0, 239, 0.3)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx(jn,{size:20,color:"white"}),n.jsx("p",{style:{fontSize:"14px",color:"white",margin:0,flex:1,fontWeight:"500"},children:"Welcome to premium!"})]},x.id):x.type==="dark"?n.jsxs("div",{style:{background:"#1f2937",borderRadius:"8px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx(ln,{size:20,color:"#10b981"}),n.jsx("p",{style:{fontSize:"14px",color:"white",margin:0,flex:1},children:"Task completed"}),n.jsx("button",{onClick:()=>p(W=>W.filter(D=>D.id!==x.id)),style:{background:"none",border:"none",cursor:"pointer",padding:"4px"},children:n.jsx(Sn,{size:16,color:"#9CA3AF"})})]},x.id):x.type==="with-action"?n.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",animation:"slideIn 0.3s ease-out"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[n.jsx(qo,{size:20,color:"#6900ef"}),n.jsx("p",{style:{fontSize:"14px",color:"#111827",margin:0,flex:1,fontWeight:"500"},children:"New message received"})]}),n.jsx("button",{style:{padding:"8px 16px",fontSize:"13px",fontWeight:"600",color:"#6900ef",background:"#f3e8ff",border:"none",borderRadius:"6px",cursor:"pointer",width:"100%"},children:"View Message"})]},x.id):x.type==="notification"?n.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",display:"flex",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx("div",{style:{width:"40px",height:"40px",background:"#f3e8ff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(jn,{size:20,color:"#6900ef"})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{fontSize:"14px",color:"#111827",margin:"0 0 4px 0",fontWeight:"600"},children:"New Notification"}),n.jsx("p",{style:{fontSize:"13px",color:"#6B7280",margin:0},children:"You have a new notification"})]})]},x.id):x.type==="upload"?n.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",animation:"slideIn 0.3s ease-out"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px"},children:[n.jsx(If,{size:20,color:"#6900ef"}),n.jsx("p",{style:{fontSize:"14px",color:"#111827",margin:0,flex:1,fontWeight:"500"},children:"Uploading file..."}),n.jsx("span",{style:{fontSize:"13px",color:"#6B7280"},children:"75%"})]}),n.jsx("div",{style:{height:"4px",background:"#e5e7eb",borderRadius:"2px",overflow:"hidden"},children:n.jsx("div",{style:{width:"75%",height:"100%",background:"#6900ef",transition:"width 0.3s"}})})]},x.id):x.type==="compact"?n.jsxs("div",{style:{background:"#111827",borderRadius:"6px",padding:"10px 16px",boxShadow:"0 4px 12px rgba(0,0,0,0.2)",display:"flex",alignItems:"center",gap:"8px",animation:"slideIn 0.3s ease-out"},children:[n.jsx(ln,{size:16,color:"#10b981"}),n.jsx("p",{style:{fontSize:"13px",color:"white",margin:0},children:"Saved"})]},x.id):x.type==="like"?n.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"16px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx("div",{style:{width:"36px",height:"36px",background:"#fee2e2",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(wn,{size:18,color:"#ef4444"})}),n.jsx("p",{style:{fontSize:"14px",color:"#111827",margin:0,flex:1},children:"Someone liked your post"})]},x.id):x.type==="achievement"?n.jsxs("div",{style:{background:"linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",borderRadius:"12px",padding:"16px",boxShadow:"0 8px 24px rgba(245, 158, 11, 0.3)",display:"flex",alignItems:"center",gap:"12px",animation:"slideIn 0.3s ease-out"},children:[n.jsx(Xn,{size:20,color:"white",fill:"white"}),n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{fontSize:"14px",color:"white",margin:"0 0 2px 0",fontWeight:"600"},children:"Achievement Unlocked!"}),n.jsx("p",{style:{fontSize:"13px",color:"rgba(255,255,255,0.9)",margin:0},children:"First milestone reached"})]})]},x.id):null)}),n.jsx("style",{children:`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `})]})}function j0(){return n.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Sidebar Navigation Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Explore 10 different sidebar navigation styles"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px"},children:[n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 1: Light Minimal"}),n.jsxs("div",{style:{width:"240px",background:"#f9fafb",borderRadius:"12px",padding:"16px"},children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef",margin:0},children:"Logo"})}),[{icon:lt,label:"Dashboard"},{icon:Pt,label:"Analytics"},{icon:mt,label:"Team"},{icon:yt,label:"Settings"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"8px",cursor:"pointer",marginBottom:"4px",background:p===0?"#f3e8ff":"transparent",color:p===0?"#6900ef":"#6B7280"},children:[n.jsx(a.icon,{size:20}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500"},children:a.label})]},p))]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 2: Dark Theme"}),n.jsxs("div",{style:{width:"240px",background:"#1f2937",borderRadius:"12px",padding:"16px"},children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"white",margin:0},children:"Logo"})}),[{icon:lt,label:"Dashboard"},{icon:Pt,label:"Analytics"},{icon:mt,label:"Team"},{icon:yt,label:"Settings"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"8px",cursor:"pointer",marginBottom:"4px",background:p===0?"#6900ef":"transparent",color:p===0?"white":"#9CA3AF"},children:[n.jsx(a.icon,{size:20}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500"},children:a.label})]},p))]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 3: Icons Only (Collapsed)"}),n.jsxs("div",{style:{width:"72px",background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px 12px"},children:[n.jsx("div",{style:{marginBottom:"24px",textAlign:"center"},children:n.jsx("div",{style:{width:"40px",height:"40px",background:"#6900ef",borderRadius:"8px",margin:"0 auto"}})}),[lt,Pt,mt,yt].map((a,p)=>n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"12px",borderRadius:"8px",cursor:"pointer",marginBottom:"8px",background:p===0?"#f3e8ff":"transparent",color:p===0?"#6900ef":"#6B7280"},children:n.jsx(a,{size:20})},p))]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 4: With Badges"}),n.jsxs("div",{style:{width:"240px",background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px"},children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef",margin:0},children:"Logo"})}),[{icon:lt,label:"Dashboard",badge:null},{icon:qo,label:"Messages",badge:"12"},{icon:mt,label:"Team",badge:"3"},{icon:yt,label:"Settings",badge:null}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"8px",cursor:"pointer",marginBottom:"4px",background:p===0?"#f3e8ff":"transparent",color:p===0?"#6900ef":"#6B7280",position:"relative"},children:[n.jsx(a.icon,{size:20}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500",flex:1},children:a.label}),a.badge&&n.jsx("span",{style:{padding:"2px 8px",fontSize:"12px",fontWeight:"600",color:"white",background:"#ef4444",borderRadius:"12px"},children:a.badge})]},p))]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 5: Gradient Accent"}),n.jsxs("div",{style:{width:"240px",background:"linear-gradient(180deg, #6900ef 0%, #8b3dff 100%)",borderRadius:"12px",padding:"16px"},children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"white",margin:0},children:"Logo"})}),[{icon:lt,label:"Dashboard"},{icon:Pt,label:"Analytics"},{icon:mt,label:"Team"},{icon:yt,label:"Settings"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"8px",cursor:"pointer",marginBottom:"4px",background:p===0?"rgba(255,255,255,0.2)":"transparent",color:"white"},children:[n.jsx(a.icon,{size:20}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500"},children:a.label})]},p))]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 6: Left Border Accent"}),n.jsxs("div",{style:{width:"240px",background:"#f9fafb",borderRadius:"12px",padding:"16px"},children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef",margin:0},children:"Logo"})}),[{icon:lt,label:"Dashboard"},{icon:Pt,label:"Analytics"},{icon:mt,label:"Team"},{icon:yt,label:"Settings"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"8px",borderLeft:p===0?"3px solid #6900ef":"3px solid transparent",cursor:"pointer",marginBottom:"4px",background:p===0?"white":"transparent",color:p===0?"#6900ef":"#6B7280"},children:[n.jsx(a.icon,{size:20}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500"},children:a.label})]},p))]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 7: With Dividers"}),n.jsxs("div",{style:{width:"240px",background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px"},children:[n.jsx("div",{style:{marginBottom:"16px",paddingBottom:"16px",borderBottom:"1px solid #e5e7eb"},children:n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef",margin:0},children:"Logo"})}),n.jsxs("div",{style:{marginBottom:"16px",paddingBottom:"16px",borderBottom:"1px solid #e5e7eb"},children:[n.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"#6B7280",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Main"}),[{icon:lt,label:"Dashboard"},{icon:Pt,label:"Analytics"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px",borderRadius:"8px",cursor:"pointer",marginBottom:"4px",background:p===0?"#f3e8ff":"transparent",color:p===0?"#6900ef":"#6B7280"},children:[n.jsx(a.icon,{size:18}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500"},children:a.label})]},p))]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"#6B7280",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Other"}),[{icon:mt,label:"Team"},{icon:yt,label:"Settings"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"10px",borderRadius:"8px",cursor:"pointer",marginBottom:"4px",color:"#6B7280"},children:[n.jsx(a.icon,{size:18}),n.jsx("span",{style:{fontSize:"14px",fontWeight:"500"},children:a.label})]},p))]})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 8: Floating"}),n.jsxs("div",{style:{width:"240px",background:"white",borderRadius:"16px",padding:"20px",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.12)"},children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef",margin:0},children:"Logo"})}),[{icon:lt,label:"Dashboard"},{icon:Pt,label:"Analytics"},{icon:mt,label:"Team"},{icon:yt,label:"Settings"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"10px",cursor:"pointer",marginBottom:"8px",background:p===0?"#6900ef":"transparent",color:p===0?"white":"#6B7280",boxShadow:p===0?"0 4px 12px rgba(105, 0, 239, 0.3)":"none"},children:[n.jsx(a.icon,{size:20}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500"},children:a.label})]},p))]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 9: With Search"}),n.jsxs("div",{style:{width:"240px",background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px"},children:[n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef",margin:"0 0 16px 0"},children:"Logo"}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx(bt,{size:16,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#6B7280"}}),n.jsx("input",{type:"text",placeholder:"Search...",style:{width:"100%",padding:"8px 12px 8px 36px",fontSize:"13px",border:"1px solid #e5e7eb",borderRadius:"8px",outline:"none",boxSizing:"border-box"}})]})]}),[{icon:lt,label:"Dashboard"},{icon:Pt,label:"Analytics"},{icon:mt,label:"Team"},{icon:yt,label:"Settings"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"8px",cursor:"pointer",marginBottom:"4px",background:p===0?"#f3e8ff":"transparent",color:p===0?"#6900ef":"#6B7280"},children:[n.jsx(a.icon,{size:20}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500"},children:a.label})]},p))]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 10: Bottom Profile"}),n.jsxs("div",{style:{width:"240px",background:"#f9fafb",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",height:"400px"},children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("h2",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef",margin:0},children:"Logo"})}),n.jsx("div",{style:{flex:1},children:[{icon:lt,label:"Dashboard"},{icon:Pt,label:"Analytics"},{icon:mt,label:"Team"},{icon:yt,label:"Settings"}].map((a,p)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"8px",cursor:"pointer",marginBottom:"4px",background:p===0?"#f3e8ff":"transparent",color:p===0?"#6900ef":"#6B7280"},children:[n.jsx(a.icon,{size:20}),n.jsx("span",{style:{fontSize:"14px",fontWeight:p===0?"600":"500"},children:a.label})]},p))}),n.jsxs("div",{style:{marginTop:"auto",padding:"12px",background:"white",borderRadius:"8px",display:"flex",alignItems:"center",gap:"12px",cursor:"pointer"},children:[n.jsx("div",{style:{width:"36px",height:"36px",background:"#6900ef",borderRadius:"50%"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:"600",color:"#111827"},children:"John Doe"}),n.jsx("div",{style:{fontSize:"12px",color:"#6B7280"},children:"john@example.com"})]})]})]})]})]})]})})}function S0(){return n.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Navbar Style Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Explore 12 different navigation bar styles"})]}),n.jsxs("div",{style:{display:"grid",gap:"32px"},children:[n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 1: Simple Light"}),n.jsxs("nav",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsx("div",{style:{display:"flex",gap:"24px"},children:["Home","About","Services","Contact"].map(a=>n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"#6B7280",textDecoration:"none",cursor:"pointer"},children:a},a))}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Get Started"})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 2: Dark Solid"}),n.jsxs("nav",{style:{background:"#1f2937",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"white"},children:"Logo"}),n.jsx("div",{style:{display:"flex",gap:"24px"},children:["Home","About","Services","Contact"].map(a=>n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"#9CA3AF",textDecoration:"none",cursor:"pointer"},children:a},a))}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#9CA3AF"},children:n.jsx(bt,{size:20})}),n.jsxs("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#9CA3AF",position:"relative"},children:[n.jsx(jn,{size:20}),n.jsx("span",{style:{position:"absolute",top:"-4px",right:"-4px",width:"8px",height:"8px",background:"#ef4444",borderRadius:"50%"}})]})]})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 3: Gradient"}),n.jsxs("nav",{style:{background:"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 8px 24px rgba(105, 0, 239, 0.3)"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"white"},children:"Logo"}),n.jsx("div",{style:{display:"flex",gap:"24px"},children:["Home","About","Services","Contact"].map(a=>n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"rgba(255,255,255,0.9)",textDecoration:"none",cursor:"pointer"},children:a},a))}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"white",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Sign In"})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 4: With Search Bar"}),n.jsxs("nav",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"24px"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsxs("div",{style:{flex:1,maxWidth:"400px",position:"relative"},children:[n.jsx(bt,{size:18,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#6B7280"}}),n.jsx("input",{type:"text",placeholder:"Search...",style:{width:"100%",padding:"10px 12px 10px 40px",fontSize:"14px",border:"1px solid #e5e7eb",borderRadius:"8px",outline:"none",boxSizing:"border-box"}})]}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#6B7280"},children:n.jsx(jn,{size:20})}),n.jsx("div",{style:{width:"32px",height:"32px",background:"#6900ef",borderRadius:"50%",cursor:"pointer"}})]})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 5: With Icons"}),n.jsxs("nav",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.jsxs("button",{style:{padding:"10px 16px",fontSize:"14px",fontWeight:"500",color:"#6B7280",background:"transparent",border:"none",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(bt,{size:16}),"Search"]}),n.jsxs("button",{style:{padding:"10px 16px",fontSize:"14px",fontWeight:"500",color:"#6B7280",background:"transparent",border:"none",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",position:"relative"},children:[n.jsx(jn,{size:16}),"Notifications",n.jsx("span",{style:{padding:"2px 6px",fontSize:"11px",fontWeight:"600",color:"white",background:"#ef4444",borderRadius:"10px"},children:"3"})]}),n.jsxs("button",{style:{padding:"10px 16px",fontSize:"14px",fontWeight:"500",color:"#6B7280",background:"transparent",border:"none",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(yt,{size:16}),"Settings"]})]})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 6: Minimal Bottom Border"}),n.jsxs("nav",{style:{background:"white",borderBottom:"1px solid #e5e7eb",borderRadius:"12px 12px 0 0",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsx("div",{style:{display:"flex",gap:"0"},children:["Home","About","Services","Contact"].map((a,p)=>n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:p===0?"#6900ef":"#6B7280",textDecoration:"none",cursor:"pointer",padding:"12px 16px",borderBottom:p===0?"2px solid #6900ef":"2px solid transparent",marginBottom:"-17px"},children:a},a))}),n.jsx("div",{style:{width:"100px"}})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 7: Two-Row Layout"}),n.jsxs("nav",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid #e5e7eb",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#6B7280"},children:n.jsx(bt,{size:20})}),n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#6B7280"},children:n.jsx(sc,{size:20})}),n.jsx("div",{style:{width:"32px",height:"32px",background:"#6900ef",borderRadius:"50%",cursor:"pointer"}})]})]}),n.jsx("div",{style:{padding:"12px 24px",display:"flex",gap:"24px"},children:["Home","Shop","About","Contact"].map(a=>n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"#6B7280",textDecoration:"none",cursor:"pointer"},children:a},a))})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 8: E-commerce"}),n.jsxs("nav",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"24px"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Store"}),n.jsxs("div",{style:{flex:1,maxWidth:"500px",position:"relative"},children:[n.jsx(bt,{size:18,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#6B7280"}}),n.jsx("input",{type:"text",placeholder:"Search products...",style:{width:"100%",padding:"10px 12px 10px 40px",fontSize:"14px",border:"1px solid #e5e7eb",borderRadius:"8px",outline:"none",boxSizing:"border-box"}})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#6B7280",position:"relative"},children:n.jsx(wn,{size:22})}),n.jsxs("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#6B7280",position:"relative"},children:[n.jsx(sc,{size:22}),n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",padding:"2px 6px",fontSize:"11px",fontWeight:"600",color:"white",background:"#6900ef",borderRadius:"10px"},children:"2"})]}),n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"transparent",border:"2px solid #6900ef",borderRadius:"8px",cursor:"pointer"},children:"Sign In"})]})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 9: With Dropdown Menu"}),n.jsxs("nav",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"#6B7280",textDecoration:"none",cursor:"pointer"},children:"Home"}),n.jsxs("button",{style:{fontSize:"14px",fontWeight:"500",color:"#6B7280",background:"transparent",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:["Products",n.jsx(_u,{size:16})]}),n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"#6B7280",textDecoration:"none",cursor:"pointer"},children:"About"}),n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"#6B7280",textDecoration:"none",cursor:"pointer"},children:"Contact"})]}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Sign Up"})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 10: Mobile-Friendly"}),n.jsxs("nav",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#6B7280"},children:n.jsx(cf,{size:24})}),n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#6B7280"},children:n.jsx(bt,{size:20})}),n.jsx("div",{style:{width:"32px",height:"32px",background:"#6900ef",borderRadius:"50%",cursor:"pointer"}})]})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 11: Transparent/Glass"}),n.jsxs("nav",{style:{background:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.8)",borderRadius:"12px",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 4px 24px rgba(0, 0, 0, 0.1)"},children:[n.jsx("div",{style:{fontSize:"20px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsx("div",{style:{display:"flex",gap:"24px"},children:["Home","About","Services","Contact"].map(a=>n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"#374151",textDecoration:"none",cursor:"pointer"},children:a},a))}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer",boxShadow:"0 4px 12px rgba(105, 0, 239, 0.3)"},children:"Get Started"})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#111827",marginBottom:"16px"},children:"Variant 12: Centered Layout"}),n.jsxs("nav",{style:{background:"white",border:"1px solid #e5e7eb",borderRadius:"12px",padding:"20px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[n.jsx("div",{style:{fontSize:"24px",fontWeight:"700",color:"#6900ef"},children:"Logo"}),n.jsx("div",{style:{display:"flex",gap:"32px"},children:["Home","About","Services","Portfolio","Contact"].map(a=>n.jsx("a",{style:{fontSize:"14px",fontWeight:"500",color:"#6B7280",textDecoration:"none",cursor:"pointer"},children:a},a))})]})]})]})]})})}const We={simpleInboxEmptyCode:`<!-- Empty State: Simple Inbox -->
<div class="empty-card">
  <div class="icon">📥</div>
  <h3>No Messages</h3>
  <p>Your inbox is empty</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.empty-card .icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

.empty-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

.empty-card p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,documentEmptyCode:`<!-- Empty State: Documents -->
<div class="empty-card">
  <div class="icon">📄</div>
  <h3>No Documents</h3>
  <p>Get started by creating a new document</p>
  <button class="primary-btn">Create Document</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px 0;
}

.primary-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,teamEmptyCode:`<!-- Empty State: Team -->
<div class="empty-card">
  <div class="icon-wrap">👥</div>
  <h3>No Team Members</h3>
  <p>Invite people to collaborate</p>
  <button class="secondary-btn">Invite Team</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon-wrap {
  width: 80px;
  height: 80px;
  background: #f3e8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px 0;
}

.secondary-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: #f3e8ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,searchEmptyCode:`<!-- Empty State: Search -->
<div class="empty-card">
  <div class="icon">🔍</div>
  <h3>No Results Found</h3>
  <p>Try adjusting your search to find what you're looking for</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,galleryEmptyCode:`<!-- Empty State: Gallery -->
<div class="empty-card">
  <div class="image-wrap">🖼️</div>
  <h3>No Photos Yet</h3>
  <p>Upload your first photo to get started</p>
  <button class="primary-blue-btn">➕ Upload Photo</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.image-wrap {
  width: 80px;
  height: 80px;
  background: #dbeafe;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px 0;
}

.primary-blue-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,cartEmptyCode:`<!-- Empty State: Shopping Cart -->
<div class="empty-card">
  <div class="icon">🛍️</div>
  <h3>Your Cart is Empty</h3>
  <p>Add items to get started</p>
  <button class="primary-green-btn">Start Shopping</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px;
}

.primary-green-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #10b981;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,minimalEmptyCode:`<!-- Empty State: Minimal -->
<div class="empty-card minimal">
  <h3>No data available</h3>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.minimal h3 {
  font-size: 16px;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
}
</style>`,mailIllustrationEmptyCode:`<!-- Empty State: Illustration -->
<div class="empty-card">
  <div class="illustration">✉️</div>
  <h3>No Messages</h3>
  <p>When you receive messages, they'll appear here</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.illustration {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  margin: 0 auto 20px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,calendarEmptyCode:`<!-- Empty State: Calendar -->
<div class="empty-card">
  <div class="icon">📅</div>
  <h3>No Events Scheduled</h3>
  <p>Create your first event to get started</p>
  <button class="primary-btn">➕ Add Event</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px;
}

.primary-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,folderEmptyCode:`<!-- Empty State: Folder -->
<div class="empty-card">
  <div class="folder-wrap">📁</div>
  <h3>Folder is Empty</h3>
  <p>Drag and drop files here or click to upload</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.folder-wrap {
  width: 80px;
  height: 80px;
  background: #fef3c7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,databaseEmptyCode:`<!-- Empty State: Database -->
<div class="empty-card">
  <div class="icon">🗄️</div>
  <h3>No Data</h3>
  <p>Start by importing or creating new records</p>
  <div class="btn-row">
    <button class="secondary-btn">Import</button>
    <button class="primary-btn">Create New</button>
  </div>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px;
}

.btn-row {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.primary-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.secondary-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: #f3e8ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,cloudEmptyCode:`<!-- Empty State: Cloud -->
<div class="empty-card">
  <div class="cloud-wrap">☁️</div>
  <h3>Nothing in Cloud</h3>
  <p>Your cloud storage is empty</p>
  <small>Upload files to access them anywhere</small>
  <button class="primary-blue-btn">Upload Files</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.cloud-wrap {
  width: 80px;
  height: 80px;
  background: #dbeafe;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 4px;
}

small {
  display: block;
  font-size: 12px;
  color: #9ca3af;
  margin-bottom: 20px;
}

.primary-blue-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,favoritesEmptyCode:`<!-- Empty State: Favorites -->
<div class="empty-card">
  <div class="icon heart">❤️</div>
  <h3>No Favorites Yet</h3>
  <p>Items you favorite will appear here</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.heart {
  color: #ef4444;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,reviewsEmptyCode:`<!-- Empty State: Reviews -->
<div class="empty-card">
  <div class="review-wrap">⭐</div>
  <h3>No Reviews</h3>
  <p>Be the first to leave a review</p>
  <button class="primary-yellow-btn">Write Review</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.review-wrap {
  width: 80px;
  height: 80px;
  background: #fef3c7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px;
}

.primary-yellow-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #f59e0b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,notificationsEmptyCode:`<!-- Empty State: Notifications -->
<div class="empty-card">
  <div class="notify-wrap">🔔</div>
  <h3>All Caught Up!</h3>
  <p>You have no new notifications</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.notify-wrap {
  width: 80px;
  height: 80px;
  background: #f3e8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`};function w0(){return n.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"100px 80px 80px 80px"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[n.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"#111827",margin:"0 0 12px 0"},children:"Empty State Variants"}),n.jsx("p",{style:{fontSize:"16px",color:"#6B7280",margin:0},children:"Explore 15 different empty state designs for when there's no content"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:[n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.simpleInboxEmptyCode,variantId:"empty-state-simple-inbox"}),n.jsx(of,{size:48,color:"#d1d5db",style:{margin:"0 auto 16px"}}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Messages"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0},children:"Your inbox is empty"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.documentEmptyCode,variantId:"empty-state-simple-file"}),n.jsx(fc,{size:48,color:"#d1d5db",style:{margin:"0 auto 16px"}}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Documents"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 20px 0"},children:"Get started by creating a new document"}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Create Document"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.teamEmptyCode,variantId:"empty-state-team"}),n.jsx("div",{style:{width:"80px",height:"80px",background:"#f3e8ff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:n.jsx(mt,{size:40,color:"#6900ef"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Team Members"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 20px 0"},children:"Invite people to collaborate"}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"#f3e8ff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Invite Team"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.searchEmptyCode,variantId:"empty-state-search"}),n.jsx(bt,{size:48,color:"#d1d5db",style:{margin:"0 auto 16px"}}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Results Found"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0},children:"Try adjusting your search to find what you're looking for"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.galleryEmptyCode,variantId:"empty-state-gallery"}),n.jsx("div",{style:{width:"80px",height:"80px",background:"#dbeafe",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:n.jsx(nf,{size:40,color:"#3b82f6"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Photos Yet"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 20px 0"},children:"Upload your first photo to get started"}),n.jsxs("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#3b82f6",border:"none",borderRadius:"8px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx(lc,{size:16}),"Upload Photo"]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.cartEmptyCode,variantId:"empty-state-cart"}),n.jsx(mf,{size:48,color:"#d1d5db",style:{margin:"0 auto 16px"}}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"Your Cart is Empty"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 20px 0"},children:"Add items to get started"}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#10b981",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Start Shopping"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.minimalEmptyCode,variantId:"empty-state-minimal"}),n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",color:"#6B7280",margin:0},children:"No data available"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.mailIllustrationEmptyCode,variantId:"empty-state-simple-inbox"}),n.jsx("div",{style:{width:"120px",height:"120px",background:"linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"},children:n.jsx(qo,{size:60,color:"#6900ef"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Messages"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0},children:"When you receive messages, they'll appear here"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.calendarEmptyCode,variantId:"empty-state-calendar"}),n.jsx(cc,{size:48,color:"#d1d5db",style:{margin:"0 auto 16px"}}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Events Scheduled"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 20px 0"},children:"Create your first event to get started"}),n.jsxs("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx(lc,{size:16}),"Add Event"]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.folderEmptyCode,variantId:"empty-state-folder"}),n.jsx("div",{style:{width:"80px",height:"80px",background:"#fef3c7",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:n.jsx(Zu,{size:40,color:"#f59e0b"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"Folder is Empty"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0},children:"Drag and drop files here or click to upload"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.databaseEmptyCode,variantId:"empty-state-database"}),n.jsx(uc,{size:48,color:"#d1d5db",style:{margin:"0 auto 16px"}}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Data"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 20px 0"},children:"Start by importing or creating new records"}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center"},children:[n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"#6900ef",background:"#f3e8ff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Import"}),n.jsx("button",{style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:"white",background:"#6900ef",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Create New"})]})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.cloudEmptyCode,variantId:"empty-state-cloud"}),n.jsx("div",{style:{width:"80px",height:"80px",background:"#dbeafe",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:n.jsx(pc,{size:40,color:"#3b82f6"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"Nothing in Cloud"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 4px 0"},children:"Your cloud storage is empty"}),n.jsx("p",{style:{fontSize:"12px",color:"#9CA3AF",margin:"0 0 20px 0"},children:"Upload files to access them anywhere"}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#3b82f6",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Upload Files"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.favoritesEmptyCode,variantId:"empty-state-favorites"}),n.jsx(wn,{size:48,color:"#fee2e2",style:{margin:"0 auto 16px"}}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Favorites Yet"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0},children:"Items you favorite will appear here"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.reviewsEmptyCode,variantId:"empty-state-reviews"}),n.jsx("div",{style:{width:"80px",height:"80px",background:"#fef3c7",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:n.jsx(Xn,{size:40,color:"#f59e0b"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"No Reviews"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:"0 0 20px 0"},children:"Be the first to leave a review"}),n.jsx("button",{style:{padding:"10px 24px",fontSize:"14px",fontWeight:"600",color:"white",background:"#f59e0b",border:"none",borderRadius:"8px",cursor:"pointer"},children:"Write Review"})]}),n.jsxs("div",{style:{background:"white",borderRadius:"16px",padding:"48px 32px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx(B,{code:We.notificationsEmptyCode,variantId:"empty-state-notifications"}),n.jsx("div",{style:{width:"80px",height:"80px",background:"#f3e8ff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:n.jsx(jn,{size:40,color:"#6900ef"})}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#111827",margin:"0 0 8px 0"},children:"All Caught Up!"}),n.jsx("p",{style:{fontSize:"14px",color:"#6B7280",margin:0},children:"You have no new notifications"})]})]})]})})}function k0(){const[a,p]=J.useState("cards"),f=[{id:"cards",label:"Cards"},{id:"tabs",label:"Tabs"},{id:"buttons",label:"Buttons"},{id:"inputs",label:"Inputs"},{id:"tables",label:"Tables"},{id:"modals",label:"Modals"},{id:"alerts",label:"Alerts"},{id:"toasts",label:"Toasts"},{id:"empty",label:"Empty States"}],z=()=>{switch(a){case"login":return n.jsx(Mf,{});case"cards":return n.jsx(ac,{});case"tabs":return n.jsx(f0,{});case"buttons":return n.jsx(x0,{});case"inputs":return n.jsx(g0,{});case"tables":return n.jsx(y0,{});case"modals":return n.jsx(m0,{});case"alerts":return n.jsx(b0,{});case"toasts":return n.jsx(v0,{});case"sidebars":return n.jsx(j0,{});case"navbars":return n.jsx(S0,{});case"empty":return n.jsx(w0,{});default:return n.jsx(ac,{})}};return n.jsxs("div",{children:[n.jsx("div",{className:"nav-bar",children:f.map(x=>n.jsx("button",{onClick:()=>p(x.id),style:{padding:"10px 20px",fontSize:"14px",fontWeight:"600",color:a===x.id?"white":"#6900ef",background:a===x.id?"linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)":"transparent",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s",boxShadow:a===x.id?"0 4px 12px rgba(105, 0, 239, 0.3)":"none",whiteSpace:"nowrap"},children:x.label},x.id))}),z()]})}Su.createRoot(document.getElementById("root")).render(n.jsx(k0,{}));
