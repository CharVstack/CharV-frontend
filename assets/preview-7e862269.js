var X=Object.defineProperty;var l=(t,e)=>X(t,"name",{value:e,configurable:!0});import{w as S,o as J}from"./es.object.get-own-property-descriptor-c4a71770.js";import{a as W,F as j,g as K,h as q,I as Q}from"./iframe-d1ea210b.js";import{M as Z}from"./index-662f8f5f.js";import"./web.url.constructor-7730067a.js";import"./es.map.constructor-c67d3884.js";import"./es.number.is-integer-335f0c7b.js";var I;(function(t){t.DONE="done",t.ERROR="error",t.ACTIVE="active",t.WAITING="waiting"})(I||(I={}));var A;function E(t){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(t)}l(E,"_typeof");function tt(t,e){if(t==null)return{};var n=et(t,e),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}l(tt,"_objectWithoutProperties");function et(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,s;for(s=0;s<r.length;s++)a=r[s],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}l(et,"_objectWithoutPropertiesLoose");function nt(t){var e=rt(t,"string");return E(e)==="symbol"?e:String(e)}l(nt,"_toPropertyKey");function rt(t,e){if(E(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(E(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}l(rt,"_toPrimitive");function R(t){return st(t)||at(t)||F(t)||it()}l(R,"_toConsumableArray");function it(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}l(it,"_nonIterableSpread");function at(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}l(at,"_iterableToArray");function st(t){if(Array.isArray(t))return D(t)}l(st,"_arrayWithoutHoles");function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}l(N,"_defineProperty");function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}l(ot,"_classCallCheck");function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}l(x,"_defineProperties");function ut(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}l(ut,"_createClass");function G(t,e){return ct(t)||ft(t,e)||F(t,e)||lt()}l(G,"_slicedToArray$1");function lt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}l(lt,"_nonIterableRest$1");function F(t,e){if(!!t){if(typeof t=="string")return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}}l(F,"_unsupportedIterableToArray$1");function D(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}l(D,"_arrayLikeToArray$1");function ft(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,s=!1,d,c;try{for(n=n.call(t);!(a=(d=n.next()).done)&&(r.push(d.value),!(e&&r.length===e));a=!0);}catch(f){s=!0,c=f}finally{try{!a&&n.return!=null&&n.return()}finally{if(s)throw c}}return r}}l(ft,"_iterableToArrayLimit$1");function ct(t){if(Array.isArray(t))return t}l(ct,"_arrayWithHoles$1");var T={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},H=((A=S.FEATURES)===null||A===void 0?void 0:A.interactionsDebugger)!==!0,U={debugger:!H,start:!1,back:!1,goto:!1,next:!1,end:!1},M=new Error("This function ran after the play function completed. Did you forget to `await` it?"),B=l(function(e){return Object.prototype.toString.call(e)==="[object Object]"},"isObject"),dt=l(function(e){return Object.prototype.toString.call(e)==="[object Module]"},"isModule"),vt=l(function(e){if(!B(e)&&!dt(e))return!1;if(e.constructor===void 0)return!0;var n=e.constructor.prototype;return!(!B(n)||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)},"isInstrumentable"),yt=l(function(e){try{return new e.constructor}catch{return{}}},"construct"),C=l(function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},"getInitialState"),L=l(function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=(n?e.shadowCalls:e.calls).filter(function(s){return s.retain});if(!!r.length){var a=new Map(Array.from(e.callRefsByResult.entries()).filter(function(s){var d=G(s,2),c=d[1];return c.retain}));return{cursor:r.length,calls:r,callRefsByResult:a}}},"getRetainedState"),ht=function(){function t(){var e=this;ot(this,t),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=W.getChannel(),this.state=S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var n=l(function(u){var i=u.storyId,v=u.isPlaying,g=v===void 0?!0:v,h=u.isDebugging,o=h===void 0?!1:h,y=e.getState(i);e.setState(i,Object.assign({},C(),L(y,o),{shadowCalls:o?y.shadowCalls:[],chainedCallIds:o?y.chainedCallIds:new Set,playUntil:o?y.playUntil:void 0,isPlaying:g,isDebugging:o})),o||e.sync(i)},"resetState");this.channel.on(j,n),this.channel.on(K,function(f){var u=f.storyId,i=f.newPhase,v=e.getState(u),g=v.isDebugging,h=v.forwardedException;if(e.setState(u,{renderPhase:i}),i==="playing"&&n({storyId:u,isDebugging:g}),i==="played"&&(e.setState(u,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),h))throw h}),this.channel.on(q,function(){e.initialized?e.cleanup():e.initialized=!0});var r=l(function(u){var i=u.storyId,v=u.playUntil;e.getState(i).isDebugging||e.setState(i,function(h){var o=h.calls;return{calls:[],shadowCalls:o.map(function(y){return Object.assign({},y,{status:I.WAITING})}),isDebugging:!0}});var g=e.getLog(i);e.setState(i,function(h){var o,y=h.shadowCalls,p=y.findIndex(function(_){return _.id===g[0].callId});return{playUntil:v||((o=y.slice(0,p).filter(function(_){return _.interceptable}).slice(-1)[0])===null||o===void 0?void 0:o.id)}}),e.channel.emit(j,{storyId:i,isDebugging:!0})},"start"),a=l(function(u){var i,v=u.storyId,g=e.getState(v),h=g.isDebugging,o=e.getLog(v),y=h?o.findIndex(function(p){var _=p.status;return _===I.WAITING}):o.length;r({storyId:v,playUntil:(i=o[y-2])===null||i===void 0?void 0:i.callId})},"back"),s=l(function(u){var i=u.storyId,v=u.callId,g=e.getState(i),h=g.calls,o=g.shadowCalls,y=g.resolvers,p=h.find(function(b){var w=b.id;return w===v}),_=o.find(function(b){var w=b.id;return w===v});if(!p&&_&&Object.values(y).length>0){var m,O=(m=e.getLog(i).find(function(b){return b.status===I.WAITING}))===null||m===void 0?void 0:m.callId;_.id!==O&&e.setState(i,{playUntil:_.id}),Object.values(y).forEach(function(b){return b()})}else r({storyId:i,playUntil:v})},"goto"),d=l(function(u){var i=u.storyId,v=e.getState(i),g=v.resolvers;if(Object.values(g).length>0)Object.values(g).forEach(function(y){return y()});else{var h,o=(h=e.getLog(i).find(function(y){return y.status===I.WAITING}))===null||h===void 0?void 0:h.callId;o?r({storyId:i,playUntil:o}):c({storyId:i})}},"next"),c=l(function(u){var i=u.storyId;e.setState(i,{playUntil:void 0,isDebugging:!1}),Object.values(e.getState(i).resolvers).forEach(function(v){return v()})},"end");this.channel.on(T.START,r),this.channel.on(T.BACK,a),this.channel.on(T.GOTO,s),this.channel.on(T.NEXT,d),this.channel.on(T.END,c)}return l(t,"Instrumenter"),ut(t,[{key:"getState",value:l(function(n){return this.state[n]||C()},"getState")},{key:"setState",value:l(function(n,r){var a=this.getState(n),s=typeof r=="function"?r(a):r;this.state=Object.assign({},this.state,N({},n,Object.assign({},a,s))),S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"setState")},{key:"cleanup",value:l(function(){this.state=Object.entries(this.state).reduce(function(n,r){var a=G(r,2),s=a[0],d=a[1],c=L(d);return c&&(n[s]=Object.assign(C(),c)),n},{}),this.channel.emit(T.SYNC,{controlStates:U,logItems:[]}),S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"cleanup")},{key:"getLog",value:l(function(n){var r=this.getState(n),a=r.calls,s=r.shadowCalls,d=R(s);a.forEach(function(f,u){d[u]=f});var c=new Set;return d.reduceRight(function(f,u){return u.args.forEach(function(i){i!=null&&i.__callId__&&c.add(i.__callId__)}),u.path.forEach(function(i){i.__callId__&&c.add(i.__callId__)}),u.interceptable&&!c.has(u.id)&&(f.unshift({callId:u.id,status:u.status}),c.add(u.id)),f},[])},"getLog")},{key:"instrument",value:l(function(n,r){var a=this;if(!vt(n))return n;var s=r.mutate,d=s===void 0?!1:s,c=r.path,f=c===void 0?[]:c;return Object.keys(n).reduce(function(u,i){var v=n[i];return typeof v!="function"?(u[i]=a.instrument(v,Object.assign({},r,{path:f.concat(i)})),u):typeof v.__originalFn__=="function"?(u[i]=v,u):(u[i]=function(){for(var g=arguments.length,h=new Array(g),o=0;o<g;o++)h[o]=arguments[o];return a.track(i,v,h,r)},u[i].__originalFn__=v,Object.defineProperty(u[i],"name",{value:i,writable:!1}),Object.keys(v).length>0&&Object.assign(u[i],a.instrument(Object.assign({},v),Object.assign({},r,{path:f.concat(i)}))),u)},d?n:yt(n))},"instrument")},{key:"track",value:l(function(n,r,a,s){var d,c,f,u,i=(a==null||(d=a[0])===null||d===void 0?void 0:d.__storyId__)||((c=S.window.__STORYBOOK_PREVIEW__)===null||c===void 0||(f=c.urlStore)===null||f===void 0||(u=f.selection)===null||u===void 0?void 0:u.storyId),v=this.getState(i),g=v.cursor,h=v.parentId;this.setState(i,{cursor:g+1});var o="".concat(h||i," [").concat(g,"] ").concat(n),y=s.path,p=y===void 0?[]:y,_=s.intercept,m=_===void 0?!1:_,O=s.retain,b=O===void 0?!1:O,w=typeof m=="function"?m(n,p):m,k={id:o,parentId:h,storyId:i,cursor:g,path:p,method:n,args:a,interceptable:w,retain:b},z=(w?this.intercept:this.invoke).call(this,r,k,s);return this.instrument(z,Object.assign({},s,{mutate:!0,path:[{__callId__:k.id}]}))},"track")},{key:"intercept",value:l(function(n,r,a){var s=this,d=this.getState(r.storyId),c=d.chainedCallIds,f=d.isDebugging,u=d.playUntil,i=c.has(r.id);return!f||i||u?(u===r.id&&this.setState(r.storyId,{playUntil:void 0}),this.invoke(n,r,a)):new Promise(function(v){s.setState(r.storyId,function(g){var h=g.resolvers;return{isLocked:!1,resolvers:Object.assign({},h,N({},r.id,v))}})}).then(function(){return s.setState(r.storyId,function(v){var g=v.resolvers,h=r.id;g[h];var o=tt(g,[h].map(nt));return{isLocked:!0,resolvers:o}}),s.invoke(n,r,a)})},"intercept")},{key:"invoke",value:l(function(n,r,a){var s=this,d=this.getState(r.storyId),c=d.callRefsByResult,f=d.forwardedException,u=d.renderPhase,i=Object.assign({},r,{args:r.args.map(function(o){if(c.has(o))return c.get(o);if(o instanceof S.window.HTMLElement){var y=o.prefix,p=o.localName,_=o.id,m=o.classList,O=o.innerText,b=Array.from(m);return{__element__:{prefix:y,localName:p,id:_,classNames:b,innerText:O}}}return o})});r.path.forEach(function(o){o!=null&&o.__callId__&&s.setState(r.storyId,function(y){var p=y.chainedCallIds;return{chainedCallIds:new Set(Array.from(p).concat(o.__callId__))}})});var v=l(function(y){if(y instanceof Error){var p=y.name,_=y.message,m=y.stack,O={name:p,message:_,stack:m};if(s.update(Object.assign({},i,{status:I.ERROR,exception:O})),s.setState(r.storyId,function(b){return{callRefsByResult:new Map([].concat(R(Array.from(b.callRefsByResult.entries())),[[y,{__callId__:r.id,retain:r.retain}]]))}}),r.interceptable&&y!==M)throw Q;return s.setState(r.storyId,{forwardedException:y}),y}throw y},"handleException");try{if(f)throw this.setState(r.storyId,{forwardedException:void 0}),f;if(u==="played"&&!r.retain)throw M;var g=a.getArgs?a.getArgs(r,this.getState(r.storyId)):r.args,h=n.apply(void 0,R(g.map(function(o){return typeof o!="function"||Object.keys(o).length?o:function(){var y=s.getState(r.storyId),p=y.cursor,_=y.parentId;s.setState(r.storyId,{cursor:0,parentId:r.id});var m=l(function(){return s.setState(r.storyId,{cursor:p,parentId:_})},"restore"),O=o.apply(void 0,arguments);return O instanceof Promise?O.then(m,m):m(),O}})));return h&&["object","function","symbol"].includes(E(h))&&this.setState(r.storyId,function(o){return{callRefsByResult:new Map([].concat(R(Array.from(o.callRefsByResult.entries())),[[h,{__callId__:r.id,retain:r.retain}]]))}}),this.update(Object.assign({},i,{status:h instanceof Promise?I.ACTIVE:I.DONE})),h instanceof Promise?h.then(function(o){return s.update(Object.assign({},i,{status:I.DONE})),o},v):h}catch(o){return v(o)}},"invoke")},{key:"update",value:l(function(n){var r=this;clearTimeout(this.getState(n.storyId).syncTimeout),this.channel.emit(T.CALL,n),this.setState(n.storyId,function(a){var s=a.calls,d=s.concat(n).reduce(function(c,f){return Object.assign(c,N({},f.id,f))},{});return{calls:Object.values(d).sort(function(c,f){return c.id.localeCompare(f.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return r.sync(n.storyId)},0)}})},"update")},{key:"sync",value:l(function(n){var r=this.getState(n),a=r.isLocked,s=r.isPlaying,d=this.getLog(n),c=d.some(function(i){return i.status===I.ACTIVE});if(H||a||c||d.length===0){this.channel.emit(T.SYNC,{controlStates:U,logItems:d});return}var f=d.some(function(i){return[I.DONE,I.ERROR].includes(i.status)}),u={debugger:!0,start:f,back:f,goto:!0,next:s,end:s};this.channel.emit(T.SYNC,{controlStates:u,logItems:d})},"sync")}]),t}();function gt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var n,r,a,s,d=!1,c=!1;if(((n=S.window.location)===null||n===void 0||(r=n.search)===null||r===void 0?void 0:r.indexOf("instrument=true"))!==-1?d=!0:((a=S.window.location)===null||a===void 0||(s=a.search)===null||s===void 0?void 0:s.indexOf("instrument=false"))!==-1&&(c=!0),S.window.parent===S.window&&!d||c)return t;S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new ht);var f=S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return f.instrument(t,e)}catch(u){return J.warn(u),t}}l(gt,"instrument");function _t(t,e){return It(t)||bt(t,e)||mt(t,e)||pt()}l(_t,"_slicedToArray");function pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}l(pt,"_nonIterableRest");function mt(t,e){if(!!t){if(typeof t=="string")return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(t,e)}}l(mt,"_unsupportedIterableToArray");function $(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}l($,"_arrayLikeToArray");function bt(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,s=!1,d,c;try{for(n=n.call(t);!(a=(d=n.next()).done)&&(r.push(d.value),!(e&&r.length===e));a=!0);}catch(f){s=!0,c=f}finally{try{!a&&n.return!=null&&n.return()}finally{if(s)throw c}}return r}}l(bt,"_iterableToArrayLimit");function It(t){if(Array.isArray(t))return t}l(It,"_arrayWithHoles");var Y=new Z(global),St=Y.fn.bind(Y),Ot=gt({action:St},{retain:!0}),Tt=Ot.action,V=W.getChannel(),P=[];V.on(j,function(){return P.forEach(function(t){var e;return t==null||(e=t.mockClear)===null||e===void 0?void 0:e.call(t)})});V.on(K,function(t){var e=t.newPhase;e==="loading"&&P.forEach(function(n){var r;return n==null||(r=n.mockClear)===null||r===void 0?void 0:r.call(n)})});var wt=l(function(e){var n=e.id,r=e.initialArgs;return Object.entries(r).reduce(function(a,s){var d=_t(s,2),c=d[0],f=d[1];return typeof f=="function"&&f.name==="actionHandler"?(Object.defineProperty(f,"name",{value:c,writable:!1}),Object.defineProperty(f,"__storyId__",{value:n,writable:!1}),a[c]=Tt(f),P.push(a[c]),a):(a[c]=f,a)},{})},"addActionsFromArgTypes"),Pt=[wt];export{Pt as argsEnhancers};