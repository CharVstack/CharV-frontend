var A=Object.defineProperty;var u=(l,r)=>A(l,"name",{value:r,configurable:!0});import{w as R,j as H,q as O,S as b}from"./iframe.a1b11e42.js";var m="storybook/a11y",N="a11yHighlight",k="".concat(m,"/result"),$="".concat(m,"/request"),P="".concat(m,"/running"),D="".concat(m,"/error"),q="".concat(m,"/manual"),C="".concat(m,"/highlight"),h={RESULT:k,REQUEST:$,RUNNING:P,ERROR:D,MANUAL:q,HIGHLIGHT:C};function y(l,r,n,i,a,o,e){try{var c=l[o](e),s=c.value}catch(d){n(d);return}c.done?r(s):Promise.resolve(s).then(i,a)}u(y,"asyncGeneratorStep");function E(l){return function(){var r=this,n=arguments;return new Promise(function(i,a){var o=l.apply(r,n);function e(s){y(o,i,a,e,c,"next",s)}u(e,"_next");function c(s){y(o,i,a,e,c,"throw",s)}u(c,"_throw"),e(void 0)})}}u(E,"_asyncToGenerator");var M=R.document,Y=R.window;module&&module.hot&&module.hot.decline&&module.hot.decline();var v=H.getChannel(),f=!1,g,_=function(){var l=E(regeneratorRuntime.mark(u(function r(n){var i,a;return regeneratorRuntime.wrap(u(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n);case 2:if(i=e.sent,a=i.manual,a){e.next=7;break}return e.next=7,S(n);case 7:case"end":return e.stop()}},"_callee$"),r)},"_callee")));return u(function(n){return l.apply(this,arguments)},"handleRequest")}(),S=function(){var l=E(regeneratorRuntime.mark(u(function r(n){var i,a,o,e,c,s,d,w,T;return regeneratorRuntime.wrap(u(function(t){for(;;)switch(t.prev=t.next){case 0:return g=n,t.prev=1,t.next=4,G(n);case 4:if(i=t.sent,f){t.next=19;break}return f=!0,v.emit(h.RUNNING),t.next=10,O(()=>import("./axe.e88dea02.js").then(U=>U.a),["./axe.e88dea02.js","./iframe.a1b11e42.js"],import.meta.url);case 10:return a=t.sent.default,o=i.element,e=o===void 0?"#root":o,c=i.config,s=i.options,d=s===void 0?{}:s,w=M.querySelector(e),a.reset(),c&&a.configure(c),t.next=17,a.run(w,d);case 17:T=t.sent,g===n?v.emit(h.RESULT,T):(f=!1,S(g));case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),v.emit(h.ERROR,t.t0);case 24:return t.prev=24,f=!1,t.finish(24);case 27:case"end":return t.stop()}},"_callee2$"),r,null,[[1,21,24,27]])},"_callee2")));return u(function(n){return l.apply(this,arguments)},"run")}(),G=function(){var l=E(regeneratorRuntime.mark(u(function r(n){var i,a;return regeneratorRuntime.wrap(u(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.__STORYBOOK_STORY_STORE__.loadStory({storyId:n});case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return i=e.t0,a=i.parameters,e.abrupt("return",a.a11y||{config:{},options:{restoreScroll:!0}});case 8:case"end":return e.stop()}},"_callee3$"),r)},"_callee3")));return u(function(n){return l.apply(this,arguments)},"getParams")}();v.on(h.REQUEST,_);v.on(h.MANUAL,S);var B=u(function(r){return`
  outline: 2px dashed `.concat(r,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)},"highlightStyle"),p=R.document;module&&module.hot&&module.hot.decline&&module.hot.decline();var I=H.getChannel(),Q=u(function(r){var n=N;L();var i=Array.from(new Set(r.elements)),a=p.createElement("style");a.setAttribute("id",n),a.innerHTML=i.map(function(o){return"".concat(o,`{
          `).concat(B(r.color),`
         }`)}).join(" "),p.head.appendChild(a)},"highlight"),L=u(function(){var r=N,n=p.getElementById(r);n&&n.parentNode.removeChild(n)},"resetHighlight");I.on(b,L);I.on(h.HIGHLIGHT,Q);