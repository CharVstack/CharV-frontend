var B=Object.defineProperty;var n=(t,a)=>B(t,"name",{value:a,configurable:!0});import{g as d,_ as p,c as W,h as C}from"./useThemeProps.0dc8a905.js";import{r as M,j as P}from"./jsx-runtime.2fdf4e3b.js";import{g as R,a as U,s as _,c as j,b as N}from"./styled.ce183e64.js";import{e as $}from"./extendSxProp.271025b5.js";function L(t){return R("MuiTypography",t)}n(L,"getTypographyUtilityClass");U("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const w=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],z=n(t=>{const{align:a,gutterBottom:r,noWrap:e,paragraph:i,variant:o,classes:g}=t,s={root:["root",o,t.align!=="inherit"&&`align${d(a)}`,r&&"gutterBottom",e&&"noWrap",i&&"paragraph"]};return N(s,L,g)},"useUtilityClasses"),A=_("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${d(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>p({margin:0},a.variant&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},D={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},J=n(t=>D[t]||t,"transformDeprecatedColors"),O=M.exports.forwardRef(n(function(a,r){const e=W({props:a,name:"MuiTypography"}),i=J(e.color),o=$(p({},e,{color:i})),{align:g="inherit",className:s,component:l,gutterBottom:f=!1,noWrap:v=!1,paragraph:c=!1,variant:h="body1",variantMapping:m=u}=o,x=C(o,w),y=p({},o,{align:g,color:i,className:s,component:l,gutterBottom:f,noWrap:v,paragraph:c,variant:h,variantMapping:m}),b=l||(c?"p":m[h]||u[h])||"span",T=z(y);return P(A,p({as:b,ref:r,ownerState:y,className:j(T.root,s)},x))},"Typography")),G=O;export{G as T};