var g=Object.defineProperty;var r=(e,t)=>g(e,"name",{value:t,configurable:!0});import{s as x}from"./v1-747d17d9.js";import{u as S,g as b,B as y,d as R,M as l}from"./InstanceTable-71fdfb7d.js";import{r as B,i as w,a as V}from"./listItemTextClasses-85bd1b9f.js";import{r as f}from"./index-f47a0ae4.js";import{a as _}from"./apiClient-d99a83e4.js";import{a as m,j as o}from"./jsx-runtime-b19c866b.js";import{B as C}from"./Box-06b475e8.js";import{M as A}from"./Form-0db20d58.js";import"./es.object.get-own-property-descriptor-c4a71770.js";import"./index-6ed2bdb3.js";import"./LoadingSpinner-5f6fd5e8.js";import"./Backdrop-403a6c48.js";import"./defaultTheme-d93b2be1.js";import"./styled-e1899894.js";import"./useThemeProps-4ec0a315.js";import"./useTheme-6b3d56eb.js";import"./TransitionGroupContext-8ec6baf2.js";import"./index-110bb8ac.js";import"./emotion-react.browser.esm-748cbab0.js";import"./Stack-e24e23e1.js";import"./extendSxProp-65c86f81.js";import"./TabPanel-e3e99039.js";import"./index-927af580.js";import"./createSvgIcon-e3b92d28.js";import"./ButtonBase-2df873bb.js";import"./List-fcace79f.js";import"./ListContext-8125bde0.js";import"./Paper-364b70d5.js";import"./Typography-1428fd09.js";import"./Toolbar-4c03c3cf.js";import"./index-a2f37619.js";import"./GlobalStyles-5416cf7a.js";var p={},D=w.exports;Object.defineProperty(p,"__esModule",{value:!0});var h=p.default=void 0,I=D(B()),O=V,j=(0,I.default)((0,O.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");h=p.default=j;const a=r(({vms:e})=>{const{mutate:t}=S(),n=f.exports.useCallback(i=>async()=>{await Promise.all(e.map(async d=>{await _.api.v1.vms._vmId(d).power.$post({body:{action:i}}).then(async()=>{await t(b(_.api.v1.vms._vmId(d))),s()}).catch(()=>{s()})}))},[e,t]),[c,u]=f.exports.useState(null),v=Boolean(c),M=r(i=>{u(i.currentTarget)},"handleClick"),s=r(()=>{u(null)},"handleClose");return m(C,{sx:{ml:1,mb:1},children:[m(y,{disabled:e.length===0,variant:"contained",onClick:M,color:"success",endIcon:o(h,{}),children:[o(R,{}),"Actions"]}),o(A,{anchorEl:c,open:v,onClose:s,children:m(C,{sx:{width:180},children:[o(l,{onClick:n("start"),disableRipple:!0,children:"Start"}),o(l,{onClick:n("shutdown"),disableRipple:!0,children:"Shutdown"}),o(l,{onClick:n("reboot"),disableRipple:!0,children:"Restart"})]})})]})},"BaseVmControlMenu");try{a.displayName="BaseVmControlMenu",a.__docgenInfo={description:"",displayName:"BaseVmControlMenu",props:{vms:{defaultValue:null,description:"",name:"vms",required:!0,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Menu/VmControlMenu.tsx#BaseVmControlMenu"]={docgenInfo:a.__docgenInfo,name:"BaseVmControlMenu",path:"src/components/organisms/Menu/VmControlMenu.tsx#BaseVmControlMenu"})}catch{}const de={component:a},fe={args:{vms:[x.components.responses.GetAllVMsList200Response.content["application/json"].examples["example-1"].value.vms[0].metadata.id]}},_e={args:{vms:[]}},Ce=["Default","Disabled"];export{fe as Default,_e as Disabled,Ce as __namedExportsOrder,de as default};