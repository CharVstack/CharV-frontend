var u=Object.defineProperty;var a=(o,r)=>u(o,"name",{value:r,configurable:!0});import{C,_ as f}from"./CardContent.fab29474.js";import{L as g}from"./index.6024fea1.js";import{a as S}from"./apiClient.10396346.js";import{C as h}from"./Card.94f0ad59.js";import{C as _}from"./CardAsideContent.e22309eb.js";import{c as d}from"./CalcUnitSize.8b032730.js";import{a as e,j as t}from"./jsx-runtime.8cb9d8e5.js";import{B as m}from"./Box.bbe80da5.js";import{S as c}from"./Stack.db1f11b8.js";import{T as n}from"./Typography.32ecac0a.js";import"./iframe.32ac3e54.js";import"./jsx-runtime_commonjs-proxy.85c5b885.js";import"./Backdrop.229c9d13.js";import"./defaultTheme.a7448125.js";import"./styled.c50209b5.js";import"./useThemeProps.0b96e38f.js";import"./useTheme.3c3d2fe3.js";import"./TransitionGroupContext.edb9c6a2.js";import"./index.5f565a24.js";import"./emotion-react.browser.esm.9bac15d7.js";import"./CardTitle.466d67a0.js";import"./Paper.83b34fbd.js";import"./extendSxProp.60212891.js";const y=""+new URL("pool-image.61ea3941.jpg",import.meta.url).href,P=a(({total_size:o,name:r,status:i})=>{const[l,p]=d(o);return t(m,{height:"100%",width:"100%",sx:{display:"flex",alignItems:"center",textAlign:"center"},children:e(c,{sx:{m:"0 auto"},children:[t(n,{variant:"h3",children:r}),e(n,{children:["Size: ",p," ",l]}),e(n,{children:["State: ",i]})]})})},"AsideContent"),x=a(({total_size:o,used_size:r,path:i})=>{const[l,p]=d(o-r);return t(m,{width:"100%",children:e(c,{spacing:2,textAlign:"center",children:[e(n,{children:["Path: ",i]}),e(n,{children:["Free: ",p," ",l]})]})})},"CardContent"),s=a(o=>e(h,{hasAsideContent:!0,title:"Pool",children:[t(_,{bgImg:y,children:t(P,{...o})}),t(C,{children:t(x,{...o})})]}),"HostStoragePoolCard");try{s.displayName="HostStoragePoolCard",s.__docgenInfo={description:"",displayName:"HostStoragePoolCard",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},total_size:{defaultValue:null,description:"",name:"total_size",required:!0,type:{name:"number"}},used_size:{defaultValue:null,description:"",name:"used_size",required:!0,type:{name:"number"}},path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"ACTIVE"'},{value:'"ERROR"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStoragePoolCard.tsx#HostStoragePoolCard"]={docgenInfo:s.__docgenInfo,name:"HostStoragePoolCard",path:"src/components/organisms/Cards/InstanceCards/HostStoragePoolCard.tsx#HostStoragePoolCard"})}catch{}const Y={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { HostStoragePoolCard } from './HostStoragePoolCard';

export default { component: HostStoragePoolCard } as ComponentMeta<typeof HostStoragePoolCard>;

export const Default: ComponentStoryFn<typeof HostStoragePoolCard> = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  if (hostData === undefined) {
    return <LoadingSpinner open />;
  }

  return <HostStoragePoolCard {...hostData.host.storage_pools[0]} />;
};
`,locationsMap:{default:{startLoc:{col:69,line:11},endLoc:{col:1,line:19},startBody:{col:69,line:11},endBody:{col:1,line:19}}}}},component:s},G=a(()=>{const{data:o}=f(S.api.v1.host);return o===void 0?t(g,{open:!0}):t(s,{...o.host.storage_pools[0]})},"Default"),J=["Default"];export{G as Default,J as __namedExportsOrder,Y as default};
