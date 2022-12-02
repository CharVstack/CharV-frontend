var d=Object.defineProperty;var e=(t,r)=>d(t,"name",{value:r,configurable:!0});import{C as u,_ as l}from"./CardContent.e4147b67.js";import{L as c}from"./index.3db5ec54.js";import{a as C}from"./apiClient.5f628342.js";import{C as f}from"./Card.58b2169b.js";import{C as g}from"./CardAsideContent.c27f40ad.js";import"./BarChart.329973bc.js";import{D as V}from"./DoughnutChart.0a3903ff.js";import{a as i,j as n}from"./jsx-runtime.6405de22.js";import{G as a}from"./Grid.03d3127a.js";import{T as s}from"./Typography.8cb78f3c.js";import{u as h}from"./useTheme.63fe0775.js";import"./iframe.c1791624.js";import"./jsx-runtime_commonjs-proxy.7ac7c09b.js";import"./Box.802887a6.js";import"./defaultTheme.0a05fb97.js";import"./styled.564cbc19.js";import"./useThemeProps.b880cdbb.js";import"./extendSxProp.5964d137.js";import"./Backdrop.d2aba16d.js";import"./TransitionGroupContext.038eb24b.js";import"./index.bb18b1e3.js";import"./emotion-react.browser.esm.67a16015.js";import"./CardTitle.d423c4c6.js";import"./Paper.561465b6.js";import"./Stack.17ea2a17.js";import"./index.8d2b3a85.js";const R=""+new URL("host-image.7af8bbef.jpg",import.meta.url).href,o=e(({allVms:t,runningVms:r})=>{const m=h().palette.grey[800],p={running:{value:r},stopped:{value:t-r,color:m}};return i(f,{hasAsideContent:!0,title:"VM",children:[n(g,{bgImg:R,children:i(a,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[n(a,{item:!0,children:n(s,{variant:"h3",component:"div",children:r})}),n(a,{item:!0,children:n(s,{children:"VMs"})})]})}),n(u,{children:n(V,{data:p})})]})},"RunningVmsCard");try{o.displayName="RunningVmsCard",o.__docgenInfo={description:"",displayName:"RunningVmsCard",props:{allVms:{defaultValue:null,description:"",name:"allVms",required:!0,type:{name:"number"}},runningVms:{defaultValue:null,description:"",name:"runningVms",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"]={docgenInfo:o.__docgenInfo,name:"RunningVmsCard",path:"src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"})}catch{}const H={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
