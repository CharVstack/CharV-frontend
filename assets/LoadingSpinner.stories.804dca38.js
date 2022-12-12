var N=Object.defineProperty;var t=(r,e)=>N(r,"name",{value:e,configurable:!0});import{r as O,j as i}from"./jsx-runtime.9222852a.js";import{B as E}from"./Backdrop.a25470b6.js";import{e as p,_ as n,g as z}from"./defaultTheme.0ede05cf.js";import{a as B,g as T,s as v,c as A,b as K}from"./styled.961efbd7.js";import{u as U}from"./useThemeProps.34e19be6.js";import{k as R,c as D}from"./emotion-react.browser.esm.111a1090.js";import"./iframe.f2647276.js";import"./useTheme.41d28743.js";import"./TransitionGroupContext.64b1059b.js";import"./index.95155234.js";function j(r){return B("MuiCircularProgress",r)}t(j,"getCircularProgressUtilityClass");T("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const F=["className","color","disableShrink","size","style","thickness","value","variant"];let m=t(r=>r,"_"),P,b,L,$;const s=44,V=R(P||(P=m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=R(b||(b=m`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Y=t(r=>{const{classes:e,variant:o,color:a,disableShrink:u}=r,g={root:["root",o,`color${p(a)}`],svg:["svg"],circle:["circle",`circle${p(o)}`,u&&"circleDisableShrink"]};return K(g,j,e)},"useUtilityClasses"),q=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.root,e[o.variant],e[`color${p(o.color)}`]]}})(({ownerState:r,theme:e})=>n({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(L||(L=m`
      animation: ${0} 1.4s linear infinite;
    `),V)),G=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.circle,e[`circle${p(o.variant)}`],o.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>n({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D($||($=m`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),H=O.exports.forwardRef(t(function(e,o){const a=U({props:e,name:"MuiCircularProgress"}),{className:u,color:g="primary",disableShrink:w=!1,size:f=40,style:I,thickness:c=3.6,value:h=0,variant:x="indeterminate"}=a,M=z(a,F),l=n({},a,{color:g,disableShrink:w,size:f,thickness:c,value:h,variant:x}),S=Y(l),k={},y={},C={};if(x==="determinate"){const _=2*Math.PI*((s-c)/2);k.strokeDasharray=_.toFixed(3),C["aria-valuenow"]=Math.round(h),k.strokeDashoffset=`${((100-h)/100*_).toFixed(3)}px`,y.transform="rotate(-90deg)"}return i(q,n({className:A(S.root,u),style:n({width:f,height:f},y,I),ownerState:l,ref:o,role:"progressbar"},C,M,{children:i(G,{className:S.svg,ownerState:l,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:i(Z,{className:S.circle,style:k,ownerState:l,cx:s,cy:s,r:(s-c)/2,fill:"none",strokeWidth:c})})}))},"CircularProgress")),J=H,d=t(({open:r})=>i(E,{sx:{color:e=>e.palette.common.white,zIndex:e=>e.zIndex.drawer+1},open:r,children:i(J,{color:"inherit"})}),"LoadingSpinner");try{d.displayName="LoadingSpinner",d.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Progress/Circular/LoadingSpinner.tsx#LoadingSpinner"]={docgenInfo:d.__docgenInfo,name:"LoadingSpinner",path:"src/components/molecules/Progress/Circular/LoadingSpinner.tsx#LoadingSpinner"})}catch{}const lr={component:d},dr={args:{open:!0}},pr=["Loading"];export{dr as Loading,pr as __namedExportsOrder,lr as default};
