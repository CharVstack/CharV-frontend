var d=Object.defineProperty;var e=(o,r)=>d(o,"name",{value:r,configurable:!0});import{C as u,_ as l}from"./CardContent.dd49a17d.js";import{L as c}from"./index.5fc40648.js";import{a as C}from"./apiClient.1c5dac2e.js";import{C as g}from"./Card.c40157b1.js";import{C as f}from"./CardAsideContent.d92e8c43.js";import{D as V}from"./DoughnutChart.360e5a95.js";import{a,j as n}from"./jsx-runtime.746f98b6.js";import{G as s}from"./Grid.2391dd1e.js";import{T as i}from"./Typography.7d7c451a.js";import{u as R}from"./useTheme.f98ef1cc.js";import"./iframe.7e7793fd.js";import"./Box.1afe7f47.js";import"./useThemeProps.9442f15b.js";import"./styled.f0f80617.js";import"./extendSxProp.965797ad.js";import"./index.f876de21.js";import"./emotion-react.browser.esm.aed2fb67.js";import"./CardTitle.a0b1c1e8.js";const h=""+new URL("host-image.7af8bbef.jpg",import.meta.url).href,t=e(({allVms:o,runningVms:r})=>{const m=R().palette.grey[800],p={running:{value:r},stopped:{value:o-r,color:m}};return a(g,{hasAsideContent:!0,title:"VM",children:[n(f,{bgImg:h,children:a(s,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[n(s,{item:!0,children:n(i,{variant:"h3",component:"div",children:r})}),n(s,{item:!0,children:n(i,{children:"VMs"})})]})}),n(u,{children:n(V,{data:p})})]})},"RunningVmsCard");try{t.displayName="RunningVmsCard",t.__docgenInfo={description:"",displayName:"RunningVmsCard",props:{allVms:{defaultValue:null,description:"",name:"allVms",required:!0,type:{name:"number"}},runningVms:{defaultValue:null,description:"",name:"runningVms",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"]={docgenInfo:t.__docgenInfo,name:"RunningVmsCard",path:"src/components/organisms/Cards/InstanceCards/RunningVmsCard.tsx#RunningVmsCard"})}catch{}const G={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
