var x=Object.defineProperty;var i=(e,r)=>x(e,"name",{value:r,configurable:!0});import{_ as u,U as b,d as h,D as j,M as $,Q as I,T as p,E as D,ak as w,al as E,Y as S,s as y,am as N,an as P}from"./es.object.get-own-property-descriptor-c4a71770.js";import{F as M}from"./web.url.constructor-7730067a.js";var _=u,F=h.findIndex,L=b,v="findIndex",m=!0;v in[]&&Array(1)[v](function(){m=!1});_({target:"Array",proto:!0,forced:m},{findIndex:i(function(r){return F(this,r,arguments.length>1?arguments[1]:void 0)},"findIndex")});L(v);var T=u,U=M,A=b;T({target:"Array",proto:!0},{fill:U});A("fill");var c=j,R=i(function(e){return e!==void 0&&(c(e,"value")||c(e,"writable"))},"isDataDescriptor$1"),q=u,C=$,G=I,V=p,W=R,k=D,K=w;function O(e,r){var t=arguments.length<3?e:arguments[2],n,a;if(V(e)===t)return e[r];if(n=k.f(e,r),n)return W(n)?n.value:n.get===void 0?void 0:C(n.get,t);if(G(a=K(e)))return O(a,r,t)}i(O,"get");q({target:"Reflect",stat:!0},{get:O});var Q=Object.is||i(function(r,t){return r===t?r!==0||1/r===1/t:r!=r&&t!=t},"is"),X=$,Y=E,z=p,B=S,d=Q,g=y,H=N,J=P;Y("search",function(e,r,t){return[i(function(a){var s=B(this),o=a==null?void 0:H(a,e);return o?X(o,a,s):new RegExp(a)[e](g(s))},"search"),function(n){var a=z(this),s=g(n),o=t(r,a,s);if(o.done)return o.value;var l=a.lastIndex;d(l,0)||(a.lastIndex=0);var f=J(a,s);return d(a.lastIndex,l)||(a.lastIndex=l),f===null?-1:f.index}]});var Z=I,rr=Math.floor,er=Number.isInteger||i(function(r){return!Z(r)&&isFinite(r)&&rr(r)===r},"isInteger"),ar=u,tr=er;ar({target:"Number",stat:!0},{isInteger:tr});export{er as i};
//# sourceMappingURL=es.number.is-integer-335f0c7b.js.map
