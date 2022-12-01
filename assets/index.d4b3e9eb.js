var N=Object.defineProperty;var t=(r,e)=>N(r,"name",{value:e,configurable:!0});import{r as O,j as i}from"./jsx-runtime.93e7005f.js";import{B as z}from"./Backdrop.651f2de4.js";import{e as d,_ as n,f as B}from"./defaultTheme.d7b01292.js";import{g as E,a as T,s as v,c as A,b as K}from"./styled.f0615474.js";import{u as U}from"./useThemeProps.a0280046.js";import{k as L,c as D}from"./emotion-react.browser.esm.dceae3ea.js";function j(r){return E("MuiCircularProgress",r)}t(j,"getCircularProgressUtilityClass");T("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const F=["className","color","disableShrink","size","style","thickness","value","variant"];let p=t(r=>r,"_"),P,b,$,R;const o=44,V=L(P||(P=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=L(b||(b=p`
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
`)),Y=t(r=>{const{classes:e,variant:s,color:a,disableShrink:m}=r,u={root:["root",s,`color${d(a)}`],svg:["svg"],circle:["circle",`circle${d(s)}`,m&&"circleDisableShrink"]};return K(u,j,e)},"useUtilityClasses"),q=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${d(s.color)}`]]}})(({ownerState:r,theme:e})=>n({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D($||($=p`
      animation: ${0} 1.4s linear infinite;
    `),V)),G=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${d(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>n({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D(R||(R=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),H=O.exports.forwardRef(t(function(e,s){const a=U({props:e,name:"MuiCircularProgress"}),{className:m,color:u="primary",disableShrink:w=!1,size:f=40,style:I,thickness:c=3.6,value:g=0,variant:x="indeterminate"}=a,M=B(a,F),l=n({},a,{color:u,disableShrink:w,size:f,thickness:c,value:g,variant:x}),h=Y(l),S={},y={},C={};if(x==="determinate"){const _=2*Math.PI*((o-c)/2);S.strokeDasharray=_.toFixed(3),C["aria-valuenow"]=Math.round(g),S.strokeDashoffset=`${((100-g)/100*_).toFixed(3)}px`,y.transform="rotate(-90deg)"}return i(q,n({className:A(h.root,m),style:n({width:f,height:f},y,I),ownerState:l,ref:s,role:"progressbar"},C,M,{children:i(G,{className:h.svg,ownerState:l,viewBox:`${o/2} ${o/2} ${o} ${o}`,children:i(Z,{className:h.circle,style:S,ownerState:l,cx:o,cy:o,r:(o-c)/2,fill:"none",strokeWidth:c})})}))},"CircularProgress")),J=H,k=t(({open:r})=>i(z,{sx:{color:e=>e.palette.common.white,zIndex:e=>e.zIndex.drawer+1},open:r,children:i(J,{color:"inherit"})}),"LoadingSpinner");try{k.displayName="LoadingSpinner",k.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Progress/Circular/index.tsx#LoadingSpinner"]={docgenInfo:k.__docgenInfo,name:"LoadingSpinner",path:"src/components/molecules/Progress/Circular/index.tsx#LoadingSpinner"})}catch{}export{k as L};
