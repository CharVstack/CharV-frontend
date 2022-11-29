var d=Object.defineProperty;var e=(o,r)=>d(o,"name",{value:r,configurable:!0});import{C as u,_ as l}from"./CardContent.37bbec17.js";import{L as c}from"./index.0dd84a12.js";import{a as C}from"./apiClient.4da25a6e.js";import{C as g}from"./Card.0d1d5687.js";import{C as f}from"./CardAsideContent.7149e3e6.js";import{D as V}from"./DoughnutChart.68d44ee8.js";import{a,j as n}from"./jsx-runtime.2fdf4e3b.js";import{G as s}from"./Grid.1daf969f.js";import{T as i}from"./Typography.c135d4c6.js";import{u as R}from"./useTheme.2df75fa3.js";import"./iframe.ba0abcc7.js";import"./Box.846713b7.js";import"./useThemeProps.0dc8a905.js";import"./styled.ce183e64.js";import"./extendSxProp.271025b5.js";import"./index.8b8ea649.js";import"./emotion-react.browser.esm.e1fddd83.js";import"./CardTitle.3e58cc70.js";const h=""+new URL("host-image.7af8bbef.jpg",import.meta.url).href,t=e(({allVms:o,runningVms:r})=>{const m=R().palette.grey[800],p={running:{value:r},stopped:{value:o-r,color:m}};return a(g,{hasAsideContent:!0,title:"VM",children:[n(f,{bgImg:h,children:a(s,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[n(s,{item:!0,children:n(i,{variant:"h3",component:"div",children:r})}),n(s,{item:!0,children:n(i,{children:"VMs"})})]})}),n(u,{children:n(V,{data:p})})]})},"RunningVmsCard");try{t.displayName="RunningVmsCard",t.__docgenInfo={description:"",displayName:"RunningVmsCard",props:{allVms:{defaultValue:null,description:"",name:"allVms",required:!0,type:{name:"number"}},runningVms:{defaultValue:null,description:"",name:"runningVms",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"]={docgenInfo:t.__docgenInfo,name:"RunningVmsCard",path:"src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"})}catch{}const G={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { RunningVmsCard, RunningVmsCardProps } from './RunningVmsCard';

export default { args: { allVms: 10, runningVms: 5 }, component: RunningVmsCard } as ComponentMeta<
  typeof RunningVmsCard
>;

export const RunningVms: ComponentStoryFn<typeof RunningVmsCard> = (props: RunningVmsCardProps) => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  if (hostData === undefined) {
    return <LoadingSpinner open />;
  }

  return <RunningVmsCard {...props} />;
};
`,locationsMap:{"running-vms":{startLoc:{col:67,line:13},endLoc:{col:1,line:21},startBody:{col:67,line:13},endBody:{col:1,line:21}}}}},args:{allVms:10,runningVms:5},component:t},K=e(o=>{const{data:r}=l(C.api.v1.host);return r===void 0?n(c,{open:!0}):n(t,{...o})},"RunningVms"),N=["RunningVms"];export{K as RunningVms,N as __namedExportsOrder,G as default};
