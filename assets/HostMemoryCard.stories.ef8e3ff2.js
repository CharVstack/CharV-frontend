var l=Object.defineProperty;var n=(o,r)=>l(o,"name",{value:r,configurable:!0});import{C as u,_ as y}from"./CardContent.dd49a17d.js";import{L as C}from"./index.5fc40648.js";import{a as f}from"./apiClient.1c5dac2e.js";import{C as h}from"./Card.c40157b1.js";import{C as M}from"./CardAsideContent.d92e8c43.js";import{D as _}from"./DoughnutChart.360e5a95.js";import{c as g}from"./CalcUnitSize.77147361.js";import{a as s,j as t}from"./jsx-runtime.746f98b6.js";import{G as a}from"./Grid.2391dd1e.js";import{T as m}from"./Typography.7d7c451a.js";import{u as H}from"./useTheme.f98ef1cc.js";import"./iframe.7e7793fd.js";import"./Box.1afe7f47.js";import"./useThemeProps.9442f15b.js";import"./styled.f0f80617.js";import"./extendSxProp.965797ad.js";import"./index.f876de21.js";import"./emotion-react.browser.esm.aed2fb67.js";import"./CardTitle.a0b1c1e8.js";const S=""+new URL("memory-image.d7fed24e.jpg",import.meta.url).href,e=n(({total:o,used:r})=>{const i=H().palette.grey[800],d={Used:{value:r},Free:{value:o-r,color:i}},[p,c]=g(o);return s(h,{hasAsideContent:!0,title:"Memory",children:[t(M,{bgImg:S,children:s(a,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[t(a,{item:!0,children:t(m,{variant:"h3",component:"div",children:c})}),t(a,{item:!0,children:t(m,{children:p})})]})}),t(u,{children:t(_,{data:d})})]})},"HostMemoryCard");try{e.displayName="HostMemoryCard",e.__docgenInfo={description:"",displayName:"HostMemoryCard",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},used:{defaultValue:null,description:"",name:"used",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"]={docgenInfo:e.__docgenInfo,name:"HostMemoryCard",path:"src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"})}catch{}const W={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { HostMemoryCard } from './HostMemoryCard';

export default { component: HostMemoryCard } as ComponentMeta<typeof HostMemoryCard>;

export const HostMemory: ComponentStoryFn<typeof HostMemoryCard> = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  if (hostData === undefined) {
    return <LoadingSpinner open />;
  }

  return <HostMemoryCard total={hostData.host.memory.total} used={hostData.host.memory.used} />;
};
`,locationsMap:{"host-memory":{startLoc:{col:67,line:11},endLoc:{col:1,line:19},startBody:{col:67,line:11},endBody:{col:1,line:19}}}}},component:e},Y=n(()=>{const{data:o}=y(f.api.v1.host);return o===void 0?t(C,{open:!0}):t(e,{total:o.host.memory.total,used:o.host.memory.used})},"HostMemory"),k=["HostMemory"];export{Y as HostMemory,k as __namedExportsOrder,W as default};
