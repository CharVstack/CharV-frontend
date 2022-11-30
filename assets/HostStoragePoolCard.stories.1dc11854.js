var u=Object.defineProperty;var a=(o,r)=>u(o,"name",{value:r,configurable:!0});import{C,_ as g}from"./CardContent.dd49a17d.js";import{L as S}from"./index.5fc40648.js";import{a as f}from"./apiClient.1c5dac2e.js";import{C as h,S as p}from"./Card.c40157b1.js";import{C as _}from"./CardAsideContent.d92e8c43.js";import{c as m}from"./CalcUnitSize.77147361.js";import{a as e,j as t}from"./jsx-runtime.746f98b6.js";import{B as c}from"./Box.1afe7f47.js";import{T as n}from"./Typography.7d7c451a.js";import"./iframe.7e7793fd.js";import"./useThemeProps.9442f15b.js";import"./styled.f0f80617.js";import"./useTheme.f98ef1cc.js";import"./index.f876de21.js";import"./emotion-react.browser.esm.aed2fb67.js";import"./CardTitle.a0b1c1e8.js";import"./extendSxProp.965797ad.js";const y=""+new URL("pool-image.61ea3941.jpg",import.meta.url).href,P=a(({total_size:o,name:r,status:i})=>{const[l,d]=m(o);return t(c,{height:"100%",width:"100%",sx:{display:"flex",alignItems:"center",textAlign:"center"},children:e(p,{sx:{m:"0 auto"},children:[t(n,{variant:"h3",children:r}),e(n,{children:["Size: ",d," ",l]}),e(n,{children:["State: ",i]})]})})},"AsideContent"),H=a(({total_size:o,used_size:r,path:i})=>{const[l,d]=m(o-r);return t(c,{width:"100%",children:e(p,{spacing:2,textAlign:"center",children:[e(n,{children:["Path: ",i]}),e(n,{children:["Free: ",d," ",l]})]})})},"CardContent"),s=a(o=>e(h,{hasAsideContent:!0,title:"Pool",children:[t(_,{bgImg:y,children:t(P,{...o})}),t(C,{children:t(H,{...o})})]}),"HostStoragePoolCard");try{s.displayName="HostStoragePoolCard",s.__docgenInfo={description:"",displayName:"HostStoragePoolCard",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},total_size:{defaultValue:null,description:"",name:"total_size",required:!0,type:{name:"number"}},used_size:{defaultValue:null,description:"",name:"used_size",required:!0,type:{name:"number"}},path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"ACTIVE"'},{value:'"ERROR"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStoragePoolCard.tsx#HostStoragePoolCard"]={docgenInfo:s.__docgenInfo,name:"HostStoragePoolCard",path:"src/components/organisms/Cards/InstanceCards/HostStoragePoolCard.tsx#HostStoragePoolCard"})}catch{}const M={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
