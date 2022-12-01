var h=Object.defineProperty;var n=(o,r)=>h(o,"name",{value:r,configurable:!0});import{C as g,_}from"./CardContent.52a1f8fc.js";import{L as M}from"./index.d4b3e9eb.js";import{a as S}from"./apiClient.7c1b656f.js";import{C as H}from"./Card.0d54218b.js";import{C as x}from"./CardAsideContent.6614b037.js";import"./BarChart.c05659fd.js";import{D}from"./DoughnutChart.c61656ec.js";import{c as s}from"./CalcUnitSize.8b032730.js";import{a as m,j as t}from"./jsx-runtime.93e7005f.js";import{G as a}from"./Grid.15a4af72.js";import{T as i}from"./Typography.e99e3ea9.js";import{u as L}from"./useTheme.685fc1ed.js";import"./iframe.75042046.js";import"./jsx-runtime_commonjs-proxy.ccb85df3.js";import"./Box.f7bdc38c.js";import"./defaultTheme.d7b01292.js";import"./styled.f0615474.js";import"./useThemeProps.a0280046.js";import"./extendSxProp.ba4be037.js";import"./Backdrop.651f2de4.js";import"./TransitionGroupContext.0ef3aaf8.js";import"./index.ab340f95.js";import"./emotion-react.browser.esm.dceae3ea.js";import"./CardTitle.db018db5.js";import"./Paper.65ee23f9.js";import"./Stack.8040661d.js";import"./index.cde09e87.js";const b=""+new URL("memory-image.d7fed24e.jpg",import.meta.url).href,e=n(({total:o,used:r})=>{const p=L().palette.grey[800],d={Used:{value:r},Free:{value:o-r,color:p}},l={plugins:{tooltip:{callbacks:{label:C=>{const[y,f]=s(C.parsed,4);return`${f} ${y}`}}},legend:{display:!0,position:"bottom"}}},[c,u]=s(o);return m(H,{hasAsideContent:!0,title:"Memory",children:[t(x,{bgImg:b,children:m(a,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[t(a,{item:!0,children:t(i,{variant:"h3",component:"div",children:u})}),t(a,{item:!0,children:t(i,{children:c})})]})}),t(g,{children:t(D,{options:l,data:d})})]})},"HostMemoryCard");try{e.displayName="HostMemoryCard",e.__docgenInfo={description:"",displayName:"HostMemoryCard",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},used:{defaultValue:null,description:"",name:"used",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"]={docgenInfo:e.__docgenInfo,name:"HostMemoryCard",path:"src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"})}catch{}const eo={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
