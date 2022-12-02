var h=Object.defineProperty;var n=(o,r)=>h(o,"name",{value:r,configurable:!0});import{C as g,_}from"./CardContent.e4147b67.js";import{L as M}from"./index.3db5ec54.js";import{a as S}from"./apiClient.5f628342.js";import{C as H}from"./Card.58b2169b.js";import{C as x}from"./CardAsideContent.c27f40ad.js";import"./BarChart.329973bc.js";import{D}from"./DoughnutChart.0a3903ff.js";import{c as s}from"./CalcUnitSize.8b032730.js";import{a as m,j as t}from"./jsx-runtime.6405de22.js";import{G as a}from"./Grid.03d3127a.js";import{T as i}from"./Typography.8cb78f3c.js";import{u as L}from"./useTheme.63fe0775.js";import"./iframe.c1791624.js";import"./jsx-runtime_commonjs-proxy.7ac7c09b.js";import"./Box.802887a6.js";import"./defaultTheme.0a05fb97.js";import"./styled.564cbc19.js";import"./useThemeProps.b880cdbb.js";import"./extendSxProp.5964d137.js";import"./Backdrop.d2aba16d.js";import"./TransitionGroupContext.038eb24b.js";import"./index.bb18b1e3.js";import"./emotion-react.browser.esm.67a16015.js";import"./CardTitle.d423c4c6.js";import"./Paper.561465b6.js";import"./Stack.17ea2a17.js";import"./index.8d2b3a85.js";const b=""+new URL("memory-image.d7fed24e.jpg",import.meta.url).href,e=n(({total:o,used:r})=>{const p=L().palette.grey[800],d={Used:{value:r},Free:{value:o-r,color:p}},l={plugins:{tooltip:{callbacks:{label:C=>{const[y,f]=s(C.parsed,4);return`${f} ${y}`}}},legend:{display:!0,position:"bottom"}}},[c,u]=s(o);return m(H,{hasAsideContent:!0,title:"Memory",children:[t(x,{bgImg:b,children:m(a,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[t(a,{item:!0,children:t(i,{variant:"h3",component:"div",children:u})}),t(a,{item:!0,children:t(i,{children:c})})]})}),t(g,{children:t(D,{options:l,data:d})})]})},"HostMemoryCard");try{e.displayName="HostMemoryCard",e.__docgenInfo={description:"",displayName:"HostMemoryCard",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},used:{defaultValue:null,description:"",name:"used",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"]={docgenInfo:e.__docgenInfo,name:"HostMemoryCard",path:"src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"})}catch{}const eo={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
