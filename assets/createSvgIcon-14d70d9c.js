var b=Object.defineProperty;var r=(o,e)=>b(o,"name",{value:e,configurable:!0});import{r as s}from"./index-f47a0ae4.js";import{g as $,f as C,_ as y}from"./defaultTheme-968d66a4.js";import{a as R,j as z}from"./jsx-runtime-b19c866b.js";import{a as E,g as T,s as N,c as B,b as M}from"./styled-e2b1244e.js";import{u as j}from"./useThemeProps-6d10ab63.js";function K(o,e=166){let t;function n(...i){const a=r(()=>{o.apply(this,i)},"later");clearTimeout(t),t=setTimeout(a,e)}return r(n,"debounced"),n.clear=()=>{clearTimeout(t)},n}r(K,"debounce");function k(o){return o&&o.ownerDocument||document}r(k,"ownerDocument");function O(o){return k(o).defaultView||window}r(O,"ownerWindow");const U=typeof window<"u"?s.exports.useLayoutEffect:s.exports.useEffect,A=U;function Q(o){const e=s.exports.useRef(o);return A(()=>{e.current=o}),s.exports.useCallback((...t)=>(0,e.current)(...t),[])}r(Q,"useEventCallback");function D(o){return E("MuiSvgIcon",o)}r(D,"getSvgIconUtilityClass");T("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const L=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],V=r(o=>{const{color:e,fontSize:t,classes:n}=o,i={root:["root",e!=="inherit"&&`color${$(e)}`,`fontSize${$(t)}`]};return M(i,D,n)},"useUtilityClasses"),P=N("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${$(t.color)}`],e[`fontSize${$(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,n,i,a,u,d,p,h,c,l,f,S,m,v,g,x,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(n=t.create)==null?void 0:n.call(t,"fill",{duration:(i=o.transitions)==null||(a=i.duration)==null?void 0:a.shorter}),fontSize:{inherit:"inherit",small:((u=o.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,20))||"1.25rem",medium:((p=o.typography)==null||(h=p.pxToRem)==null?void 0:h.call(p,24))||"1.5rem",large:((c=o.typography)==null||(l=c.pxToRem)==null?void 0:l.call(c,35))||"2.1875rem"}[e.fontSize],color:(f=(S=(o.vars||o).palette)==null||(m=S[e.color])==null?void 0:m.main)!=null?f:{action:(v=(o.vars||o).palette)==null||(g=v.action)==null?void 0:g.active,disabled:(x=(o.vars||o).palette)==null||(_=x.action)==null?void 0:_.disabled,inherit:void 0}[e.color]}}),I=s.exports.forwardRef(r(function(e,t){const n=j({props:e,name:"MuiSvgIcon"}),{children:i,className:a,color:u="inherit",component:d="svg",fontSize:p="medium",htmlColor:h,inheritViewBox:c=!1,titleAccess:l,viewBox:f="0 0 24 24"}=n,S=C(n,L),m=y({},n,{color:u,component:d,fontSize:p,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:f}),v={};c||(v.viewBox=f);const g=V(m);return R(P,y({as:d,className:B(g.root,a),focusable:"false",color:h,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:t},v,S,{ownerState:m,children:[i,l?z("title",{children:l}):null]}))},"SvgIcon"));I.muiName="SvgIcon";const w=I;function X(o,e){function t(n,i){return z(w,y({"data-testid":`${e}Icon`,ref:i},n,{children:o}))}return r(t,"Component"),t.muiName=w.muiName,s.exports.memo(s.exports.forwardRef(t))}r(X,"createSvgIcon");export{O as a,Q as b,X as c,K as d,k as o,A as u};
//# sourceMappingURL=createSvgIcon-14d70d9c.js.map