var h=Object.defineProperty;var n=(o,r)=>h(o,"name",{value:r,configurable:!0});import{C as g,_}from"./CardContent.fab29474.js";import{L as M}from"./index.6024fea1.js";import{a as S}from"./apiClient.10396346.js";import{C as H}from"./Card.94f0ad59.js";import{C as x}from"./CardAsideContent.e22309eb.js";import"./BarChart.372eda72.js";import{D}from"./DoughnutChart.02bf9733.js";import{c as s}from"./CalcUnitSize.8b032730.js";import{a as m,j as t}from"./jsx-runtime.8cb9d8e5.js";import{G as a}from"./Grid.386086b1.js";import{T as i}from"./Typography.32ecac0a.js";import{u as L}from"./useTheme.3c3d2fe3.js";import"./iframe.32ac3e54.js";import"./jsx-runtime_commonjs-proxy.85c5b885.js";import"./Box.bbe80da5.js";import"./defaultTheme.a7448125.js";import"./styled.c50209b5.js";import"./useThemeProps.0b96e38f.js";import"./extendSxProp.60212891.js";import"./Backdrop.229c9d13.js";import"./TransitionGroupContext.edb9c6a2.js";import"./index.5f565a24.js";import"./emotion-react.browser.esm.9bac15d7.js";import"./CardTitle.466d67a0.js";import"./Paper.83b34fbd.js";import"./Stack.db1f11b8.js";import"./index.a78d3c86.js";const b=""+new URL("memory-image.d7fed24e.jpg",import.meta.url).href,e=n(({total:o,used:r})=>{const p=L().palette.grey[800],d={Used:{value:r},Free:{value:o-r,color:p}},l={plugins:{tooltip:{callbacks:{label:C=>{const[y,f]=s(C.parsed,4);return`${f} ${y}`}}},legend:{display:!0,position:"bottom"}}},[c,u]=s(o);return m(H,{hasAsideContent:!0,title:"Memory",children:[t(x,{bgImg:b,children:m(a,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[t(a,{item:!0,children:t(i,{variant:"h3",component:"div",children:u})}),t(a,{item:!0,children:t(i,{children:c})})]})}),t(g,{children:t(D,{options:l,data:d})})]})},"HostMemoryCard");try{e.displayName="HostMemoryCard",e.__docgenInfo={description:"",displayName:"HostMemoryCard",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},used:{defaultValue:null,description:"",name:"used",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"]={docgenInfo:e.__docgenInfo,name:"HostMemoryCard",path:"src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"})}catch{}const eo={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { HostMemoryCard } from './HostMemoryCard';

export default { component: HostMemoryCard } as ComponentMeta<typeof HostMemoryCard>;

export const Default: ComponentStoryFn<typeof HostMemoryCard> = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  if (hostData === undefined) {
    return <LoadingSpinner open />;
  }

  return <HostMemoryCard total={hostData.host.memory.total} used={hostData.host.memory.used} />;
};
`,locationsMap:{default:{startLoc:{col:64,line:11},endLoc:{col:1,line:19},startBody:{col:64,line:11},endBody:{col:1,line:19}}}}},component:e},ro=n(()=>{const{data:o}=_(S.api.v1.host);return o===void 0?t(M,{open:!0}):t(e,{total:o.host.memory.total,used:o.host.memory.used})},"Default"),no=["Default"];export{ro as Default,no as __namedExportsOrder,eo as default};
