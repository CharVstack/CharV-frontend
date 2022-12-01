var u=Object.defineProperty;var a=(o,r)=>u(o,"name",{value:r,configurable:!0});import{C,_ as f}from"./CardContent.52a1f8fc.js";import{L as g}from"./index.d4b3e9eb.js";import{a as S}from"./apiClient.7c1b656f.js";import{C as h}from"./Card.0d54218b.js";import{C as _}from"./CardAsideContent.6614b037.js";import{c as d}from"./CalcUnitSize.8b032730.js";import{a as e,j as t}from"./jsx-runtime.93e7005f.js";import{B as m}from"./Box.f7bdc38c.js";import{S as c}from"./Stack.8040661d.js";import{T as n}from"./Typography.e99e3ea9.js";import"./iframe.75042046.js";import"./jsx-runtime_commonjs-proxy.ccb85df3.js";import"./Backdrop.651f2de4.js";import"./defaultTheme.d7b01292.js";import"./styled.f0615474.js";import"./useThemeProps.a0280046.js";import"./useTheme.685fc1ed.js";import"./TransitionGroupContext.0ef3aaf8.js";import"./index.ab340f95.js";import"./emotion-react.browser.esm.dceae3ea.js";import"./CardTitle.db018db5.js";import"./Paper.65ee23f9.js";import"./extendSxProp.ba4be037.js";const y=""+new URL("pool-image.61ea3941.jpg",import.meta.url).href,P=a(({total_size:o,name:r,status:i})=>{const[l,p]=d(o);return t(m,{height:"100%",width:"100%",sx:{display:"flex",alignItems:"center",textAlign:"center"},children:e(c,{sx:{m:"0 auto"},children:[t(n,{variant:"h3",children:r}),e(n,{children:["Size: ",p," ",l]}),e(n,{children:["State: ",i]})]})})},"AsideContent"),x=a(({total_size:o,used_size:r,path:i})=>{const[l,p]=d(o-r);return t(m,{width:"100%",children:e(c,{spacing:2,textAlign:"center",children:[e(n,{children:["Path: ",i]}),e(n,{children:["Free: ",p," ",l]})]})})},"CardContent"),s=a(o=>e(h,{hasAsideContent:!0,title:"Pool",children:[t(_,{bgImg:y,children:t(P,{...o})}),t(C,{children:t(x,{...o})})]}),"HostStoragePoolCard");try{s.displayName="HostStoragePoolCard",s.__docgenInfo={description:"",displayName:"HostStoragePoolCard",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},total_size:{defaultValue:null,description:"",name:"total_size",required:!0,type:{name:"number"}},used_size:{defaultValue:null,description:"",name:"used_size",required:!0,type:{name:"number"}},path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"ACTIVE"'},{value:'"ERROR"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStoragePoolCard.tsx#HostStoragePoolCard"]={docgenInfo:s.__docgenInfo,name:"HostStoragePoolCard",path:"src/components/organisms/Cards/InstanceCards/HostStoragePoolCard.tsx#HostStoragePoolCard"})}catch{}const Y={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
