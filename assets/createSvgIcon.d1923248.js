var b=Object.defineProperty;var n=(e,t)=>b(e,"name",{value:t,configurable:!0});import{b as g}from"./iframe.75042046.js";import{c as _,d as h,a as v,o as x,b as C,u as N,e as S}from"./ButtonBase.e22fabad.js";import{C as y}from"./styled.f0615474.js";import{s as E,u as R}from"./TransitionGroupContext.0ef3aaf8.js";import{r as a,b as q}from"./jsx-runtime.93e7005f.js";import{e as F}from"./defaultTheme.d7b01292.js";function M(...e){return e.reduce((t,r)=>r==null?t:n(function(...u){t.apply(this,u),r.apply(this,u)},"chainedFunction"),()=>{})}n(M,"createChainedFunction");function P(e,t){return()=>null}n(P,"deprecatedPropType");function G(e,t){return a.exports.isValidElement(e)&&t.indexOf(e.type.muiName)!==-1}n(G,"isMuiElement");function w(e,t){return()=>null}n(w,"requirePropFactory");let i=0;function D(e){const[t,r]=a.exports.useState(e),o=e||t;return a.exports.useEffect(()=>{t==null&&(i+=1,r(`mui-${i}`))},[t]),o}n(D,"useGlobalId");const c=q["useId"];function T(e){if(c!==void 0){const t=c();return e!=null?e:t}return D(e)}n(T,"useId");function V(e,t,r,o,u){return null}n(V,"unsupportedProp");function $({controlled:e,default:t,name:r,state:o="value"}){const{current:u}=a.exports.useRef(e!==void 0),[f,p]=a.exports.useState(t),m=u?e:f,d=a.exports.useCallback(I=>{u||p(I)},[]);return[m,d]}n($,"useControlled");const k={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),y.configure(e)}},U=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:k,capitalize:F,createChainedFunction:M,createSvgIcon:_,debounce:h,deprecatedPropType:P,isMuiElement:G,ownerDocument:v,ownerWindow:x,requirePropFactory:w,setRef:E,unstable_useEnhancedEffect:C,unstable_useId:T,unsupportedProp:V,useControlled:$,useEventCallback:N,useForkRef:R,useIsFocusVisible:S},Symbol.toStringTag,{value:"Module"}));var j={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}n(t,"_interopRequireDefault"),e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(j);var s={};const z=g(U);var l;function K(){return l||(l=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=z}(s)),s}n(K,"requireCreateSvgIcon");export{j as a,M as c,G as i,K as r};
