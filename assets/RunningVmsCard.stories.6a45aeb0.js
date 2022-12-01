var d=Object.defineProperty;var e=(t,r)=>d(t,"name",{value:r,configurable:!0});import{C as u,_ as l}from"./CardContent.52a1f8fc.js";import{L as c}from"./index.d4b3e9eb.js";import{a as C}from"./apiClient.7c1b656f.js";import{C as f}from"./Card.0d54218b.js";import{C as g}from"./CardAsideContent.6614b037.js";import"./BarChart.c05659fd.js";import{D as V}from"./DoughnutChart.c61656ec.js";import{a as i,j as n}from"./jsx-runtime.93e7005f.js";import{G as a}from"./Grid.15a4af72.js";import{T as s}from"./Typography.e99e3ea9.js";import{u as h}from"./useTheme.685fc1ed.js";import"./iframe.75042046.js";import"./jsx-runtime_commonjs-proxy.ccb85df3.js";import"./Box.f7bdc38c.js";import"./defaultTheme.d7b01292.js";import"./styled.f0615474.js";import"./useThemeProps.a0280046.js";import"./extendSxProp.ba4be037.js";import"./Backdrop.651f2de4.js";import"./TransitionGroupContext.0ef3aaf8.js";import"./index.ab340f95.js";import"./emotion-react.browser.esm.dceae3ea.js";import"./CardTitle.db018db5.js";import"./Paper.65ee23f9.js";import"./Stack.8040661d.js";import"./index.cde09e87.js";const R=""+new URL("host-image.7af8bbef.jpg",import.meta.url).href,o=e(({allVms:t,runningVms:r})=>{const m=h().palette.grey[800],p={running:{value:r},stopped:{value:t-r,color:m}};return i(f,{hasAsideContent:!0,title:"VM",children:[n(g,{bgImg:R,children:i(a,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[n(a,{item:!0,children:n(s,{variant:"h3",component:"div",children:r})}),n(a,{item:!0,children:n(s,{children:"VMs"})})]})}),n(u,{children:n(V,{data:p})})]})},"RunningVmsCard");try{o.displayName="RunningVmsCard",o.__docgenInfo={description:"",displayName:"RunningVmsCard",props:{allVms:{defaultValue:null,description:"",name:"allVms",required:!0,type:{name:"number"}},runningVms:{defaultValue:null,description:"",name:"runningVms",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"]={docgenInfo:o.__docgenInfo,name:"RunningVmsCard",path:"src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"})}catch{}const H={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { RunningVmsCard, RunningVmsCardProps } from './RunningVmsCard';

export default { args: { allVms: 10, runningVms: 5 }, component: RunningVmsCard } as ComponentMeta<
  typeof RunningVmsCard
>;

export const Default: ComponentStoryFn<typeof RunningVmsCard> = (props: RunningVmsCardProps) => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  if (hostData === undefined) {
    return <LoadingSpinner open />;
  }

  return <RunningVmsCard {...props} />;
};
`,locationsMap:{default:{startLoc:{col:64,line:13},endLoc:{col:1,line:21},startBody:{col:64,line:13},endBody:{col:1,line:21}}}}},args:{allVms:10,runningVms:5},component:o},J=e(t=>{const{data:r}=l(C.api.v1.host);return r===void 0?n(c,{open:!0}):n(o,{...t})},"Default"),Q=["Default"];export{J as Default,Q as __namedExportsOrder,H as default};
