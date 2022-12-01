var k=Object.defineProperty;var a=(e,r)=>k(e,"name",{value:r,configurable:!0});import{r as T}from"./jsx-runtime.93e7005f.js";import{w as I,s as E,T as z,a as _,i as O}from"./useThemeProps.a0280046.js";var A={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,x=o?Symbol.for("react.element"):60103,C=o?Symbol.for("react.portal"):60106,y=o?Symbol.for("react.fragment"):60107,m=o?Symbol.for("react.strict_mode"):60108,p=o?Symbol.for("react.profiler"):60114,d=o?Symbol.for("react.provider"):60109,S=o?Symbol.for("react.context"):60110,M=o?Symbol.for("react.async_mode"):60111,b=o?Symbol.for("react.concurrent_mode"):60111,$=o?Symbol.for("react.forward_ref"):60112,v=o?Symbol.for("react.suspense"):60113,j=o?Symbol.for("react.suspense_list"):60120,g=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,L=o?Symbol.for("react.block"):60121,q=o?Symbol.for("react.fundamental"):60117,G=o?Symbol.for("react.responder"):60118,N=o?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case x:switch(e=e.type,e){case M:case b:case y:case p:case m:case v:return e;default:switch(e=e&&e.$$typeof,e){case S:case $:case h:case g:case d:return e;default:return r}}case C:return r}}}a(n,"z");function P(e){return n(e)===b}a(P,"A");t.AsyncMode=M;t.ConcurrentMode=b;t.ContextConsumer=S;t.ContextProvider=d;t.Element=x;t.ForwardRef=$;t.Fragment=y;t.Lazy=h;t.Memo=g;t.Portal=C;t.Profiler=p;t.StrictMode=m;t.Suspense=v;t.isAsyncMode=function(e){return P(e)||n(e)===M};t.isConcurrentMode=P;t.isContextConsumer=function(e){return n(e)===S};t.isContextProvider=function(e){return n(e)===d};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===x};t.isForwardRef=function(e){return n(e)===$};t.isFragment=function(e){return n(e)===y};t.isLazy=function(e){return n(e)===h};t.isMemo=function(e){return n(e)===g};t.isPortal=function(e){return n(e)===C};t.isProfiler=function(e){return n(e)===p};t.isStrictMode=function(e){return n(e)===m};t.isSuspense=function(e){return n(e)===v};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===y||e===b||e===p||e===m||e===v||e===j||typeof e=="object"&&e!==null&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===d||e.$$typeof===S||e.$$typeof===$||e.$$typeof===q||e.$$typeof===G||e.$$typeof===N||e.$$typeof===L)};t.typeOf=n;(function(e){e.exports=t})(A);var R=A.exports,W={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F={};F[R.ForwardRef]=W;F[R.Memo]=D;var J=I(function(e,r){var f=e.styles,u=E([f],void 0,T.exports.useContext(z)),w=T.exports.useRef();return _(function(){var i=r.key+"-global",s=new r.sheet.constructor({key:i,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),c=!1,l=document.querySelector('style[data-emotion="'+i+" "+u.name+'"]');return r.sheet.tags.length&&(s.before=r.sheet.tags[0]),l!==null&&(c=!0,l.setAttribute("data-emotion",i),s.hydrate([l])),w.current=[s,c],function(){s.flush()}},[r]),_(function(){var i=w.current,s=i[0],c=i[1];if(c){i[1]=!1;return}if(u.next!==void 0&&O(r,u.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}r.insert("",u,s,!1)},[r,u.name]),null});function V(){for(var e=arguments.length,r=new Array(e),f=0;f<e;f++)r[f]=arguments[f];return E(r)}a(V,"css");var K=a(function(){var r=V.apply(void 0,arguments),f="animation-"+r.name;return{name:f,styles:"@keyframes "+f+"{"+r.styles+"}",anim:1,toString:a(function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"},"toString")}},"keyframes");export{J as G,V as c,K as k};
