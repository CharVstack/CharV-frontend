var k=Object.defineProperty;var a=(e,r)=>k(e,"name",{value:r,configurable:!0});import{f as h,_ as y,p as f,r as u,q as x,t as j,v as V,w as b}from"./defaultTheme-968d66a4.js";import{r as d}from"./index-f47a0ae4.js";import{s as P}from"./styled-e2b1244e.js";import{u as B}from"./useThemeProps-6d10ab63.js";import{j as R}from"./jsx-runtime-b19c866b.js";import{e as S}from"./extendSxProp-8eacf561.js";const D=["component","direction","spacing","divider","children"];function _(e,r){const t=d.exports.Children.toArray(e).filter(Boolean);return t.reduce((i,c,s)=>(i.push(c),s<t.length-1&&i.push(d.exports.cloneElement(r,{key:`separator-${s}`})),i),[])}a(_,"joinChildren");const F=a(e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],"getSideFromDirection"),O=a(({ownerState:e,theme:r})=>{let t=y({display:"flex",flexDirection:"column"},f({theme:r},u({values:e.direction,breakpoints:r.breakpoints.values}),i=>({flexDirection:i})));if(e.spacing){const i=x(r),c=Object.keys(r.breakpoints.values).reduce((n,o)=>((typeof e.spacing=="object"&&e.spacing[o]!=null||typeof e.direction=="object"&&e.direction[o]!=null)&&(n[o]=!0),n),{}),s=u({values:e.direction,base:c}),l=u({values:e.spacing,base:c});typeof s=="object"&&Object.keys(s).forEach((n,o,p)=>{if(!s[n]){const v=o>0?s[p[o-1]]:"column";s[n]=v}}),t=j(t,f({theme:r},l,a((n,o)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${F(o?s[o]:e.direction)}`]:b(i,n)}}),"styleFromPropValue")))}return t=V(r.breakpoints,t),t},"style"),$=P("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>[r.root]})(O),A=d.exports.forwardRef(a(function(r,t){const i=B({props:r,name:"MuiStack"}),c=S(i),{component:s="div",direction:l="column",spacing:m=0,divider:n,children:o}=c,p=h(c,D);return R($,y({as:s,ownerState:{direction:l,spacing:m},ref:t},p,{children:n?_(o,n):o}))},"Stack")),U=A;export{U as S};
//# sourceMappingURL=Stack-32a6d020.js.map