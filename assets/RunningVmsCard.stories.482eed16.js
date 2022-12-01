var d=Object.defineProperty;var e=(t,r)=>d(t,"name",{value:r,configurable:!0});import{C as u,_ as l}from"./CardContent.fab29474.js";import{L as c}from"./index.6024fea1.js";import{a as C}from"./apiClient.10396346.js";import{C as f}from"./Card.94f0ad59.js";import{C as g}from"./CardAsideContent.e22309eb.js";import"./BarChart.372eda72.js";import{D as V}from"./DoughnutChart.02bf9733.js";import{a as i,j as n}from"./jsx-runtime.8cb9d8e5.js";import{G as a}from"./Grid.386086b1.js";import{T as s}from"./Typography.32ecac0a.js";import{u as h}from"./useTheme.3c3d2fe3.js";import"./iframe.32ac3e54.js";import"./jsx-runtime_commonjs-proxy.85c5b885.js";import"./Box.bbe80da5.js";import"./defaultTheme.a7448125.js";import"./styled.c50209b5.js";import"./useThemeProps.0b96e38f.js";import"./extendSxProp.60212891.js";import"./Backdrop.229c9d13.js";import"./TransitionGroupContext.edb9c6a2.js";import"./index.5f565a24.js";import"./emotion-react.browser.esm.9bac15d7.js";import"./CardTitle.466d67a0.js";import"./Paper.83b34fbd.js";import"./Stack.db1f11b8.js";import"./index.a78d3c86.js";const R=""+new URL("host-image.7af8bbef.jpg",import.meta.url).href,o=e(({allVms:t,runningVms:r})=>{const m=h().palette.grey[800],p={running:{value:r},stopped:{value:t-r,color:m}};return i(f,{hasAsideContent:!0,title:"VM",children:[n(g,{bgImg:R,children:i(a,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[n(a,{item:!0,children:n(s,{variant:"h3",component:"div",children:r})}),n(a,{item:!0,children:n(s,{children:"VMs"})})]})}),n(u,{children:n(V,{data:p})})]})},"RunningVmsCard");try{o.displayName="RunningVmsCard",o.__docgenInfo={description:"",displayName:"RunningVmsCard",props:{allVms:{defaultValue:null,description:"",name:"allVms",required:!0,type:{name:"number"}},runningVms:{defaultValue:null,description:"",name:"runningVms",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"]={docgenInfo:o.__docgenInfo,name:"RunningVmsCard",path:"src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"})}catch{}const H={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
