var u=Object.defineProperty;var a=(o,r)=>u(o,"name",{value:r,configurable:!0});import{C,_ as g}from"./CardContent.37bbec17.js";import{L as S}from"./index.0dd84a12.js";import{a as f}from"./apiClient.4da25a6e.js";import{C as h,S as p}from"./Card.0d1d5687.js";import{C as _}from"./CardAsideContent.7149e3e6.js";import{c as m}from"./CalcUnitSize.77147361.js";import{a as e,j as t}from"./jsx-runtime.2fdf4e3b.js";import{B as c}from"./Box.846713b7.js";import{T as n}from"./Typography.c135d4c6.js";import"./iframe.ba0abcc7.js";import"./useThemeProps.0dc8a905.js";import"./styled.ce183e64.js";import"./useTheme.2df75fa3.js";import"./index.8b8ea649.js";import"./emotion-react.browser.esm.e1fddd83.js";import"./CardTitle.3e58cc70.js";import"./extendSxProp.271025b5.js";const y=""+new URL("pool-image.61ea3941.jpg",import.meta.url).href,P=a(({total_size:o,name:r,status:i})=>{const[l,d]=m(o);return t(c,{height:"100%",width:"100%",sx:{display:"flex",alignItems:"center",textAlign:"center"},children:e(p,{sx:{m:"0 auto"},children:[t(n,{variant:"h3",children:r}),e(n,{children:["Size: ",d," ",l]}),e(n,{children:["State: ",i]})]})})},"AsideContent"),H=a(({total_size:o,used_size:r,path:i})=>{const[l,d]=m(o-r);return t(c,{width:"100%",children:e(p,{spacing:2,textAlign:"center",children:[e(n,{children:["Path: ",i]}),e(n,{children:["Free: ",d," ",l]})]})})},"CardContent"),s=a(o=>e(h,{hasAsideContent:!0,title:"Pool",children:[t(_,{bgImg:y,children:t(P,{...o})}),t(C,{children:t(H,{...o})})]}),"HostStoragePoolCard");try{s.displayName="HostStoragePoolCard",s.__docgenInfo={description:"",displayName:"HostStoragePoolCard",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},total_size:{defaultValue:null,description:"",name:"total_size",required:!0,type:{name:"number"}},used_size:{defaultValue:null,description:"",name:"used_size",required:!0,type:{name:"number"}},path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"ACTIVE"'},{value:'"ERROR"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStoragePoolCard.tsx#HostStoragePoolCard"]={docgenInfo:s.__docgenInfo,name:"HostStoragePoolCard",path:"src/components/organisms/Cards/InstanceCards/HostStoragePoolCard.tsx#HostStoragePoolCard"})}catch{}const M={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { HostStoragePoolCard } from './HostStoragePoolCard';

export default { component: HostStoragePoolCard } as ComponentMeta<typeof HostStoragePoolCard>;

export const HostStoragePool: ComponentStoryFn<typeof HostStoragePoolCard> = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  if (hostData === undefined) {
    return <LoadingSpinner open />;
  }

  return <HostStoragePoolCard {...hostData.host.storage_pools[0]} />;
};
`,locationsMap:{"host-storage-pool":{startLoc:{col:77,line:11},endLoc:{col:1,line:19},startBody:{col:77,line:11},endBody:{col:1,line:19}}}}},component:s},k=a(()=>{const{data:o}=g(f.api.v1.host);return o===void 0?t(S,{open:!0}):t(s,{...o.host.storage_pools[0]})},"HostStoragePool"),K=["HostStoragePool"];export{k as HostStoragePool,K as __namedExportsOrder,M as default};
