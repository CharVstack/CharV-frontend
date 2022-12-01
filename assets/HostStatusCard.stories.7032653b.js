var p=Object.defineProperty;var r=(t,o)=>p(t,"name",{value:o,configurable:!0});import{C as i,_ as m}from"./CardContent.52a1f8fc.js";import{L as c}from"./index.d4b3e9eb.js";import{a as d}from"./apiClient.7c1b656f.js";import{C as u}from"./Card.0d54218b.js";import"./CardAsideContent.6614b037.js";import{B as l}from"./BarChart.c05659fd.js";import"./DoughnutChart.c61656ec.js";import{j as e}from"./jsx-runtime.93e7005f.js";import"./iframe.75042046.js";import"./jsx-runtime_commonjs-proxy.ccb85df3.js";import"./Box.f7bdc38c.js";import"./defaultTheme.d7b01292.js";import"./styled.f0615474.js";import"./useThemeProps.a0280046.js";import"./extendSxProp.ba4be037.js";import"./Backdrop.651f2de4.js";import"./useTheme.685fc1ed.js";import"./TransitionGroupContext.0ef3aaf8.js";import"./index.ab340f95.js";import"./emotion-react.browser.esm.dceae3ea.js";import"./CardTitle.db018db5.js";import"./Typography.e99e3ea9.js";import"./Paper.65ee23f9.js";import"./Stack.8040661d.js";import"./index.cde09e87.js";const a=r(({cpuUsageRate:t,memoryUsageRate:o,storageUsageRate:s})=>e(u,{title:"Host",children:e(i,{children:e(l,{data:{CPU:{value:t},Memory:{value:o},Storage:{value:s}}})})}),"HostStatusCard");try{a.displayName="HostStatusCard",a.__docgenInfo={description:"",displayName:"HostStatusCard",props:{cpuUsageRate:{defaultValue:null,description:"",name:"cpuUsageRate",required:!0,type:{name:"number"}},memoryUsageRate:{defaultValue:null,description:"",name:"memoryUsageRate",required:!0,type:{name:"number"}},storageUsageRate:{defaultValue:null,description:"",name:"storageUsageRate",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"]={docgenInfo:a.__docgenInfo,name:"HostStatusCard",path:"src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"})}catch{}const F={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { HostStatusCard } from './HostStatusCard';

export default { component: HostStatusCard } as ComponentMeta<typeof HostStatusCard>;

export const Default: ComponentStoryFn<typeof HostStatusCard> = () => {
  const { data: hostData } = useAspidaSWR(apiClient.api.v1.host);

  if (hostData === undefined) {
    return <LoadingSpinner open />;
  }
  const cpuUsageRate = Math.ceil(hostData.host.cpu.percent);
  const memoryUsageRate = Math.ceil(hostData.host.memory.percent);
  const storageUsageRate = Math.ceil(
    hostData.host.storage_pools[0].used_size / hostData.host.storage_pools[0].total_size
  );

  return (
    <HostStatusCard cpuUsageRate={cpuUsageRate} memoryUsageRate={memoryUsageRate} storageUsageRate={storageUsageRate} />
  );
};
`,locationsMap:{default:{startLoc:{col:64,line:11},endLoc:{col:1,line:26},startBody:{col:64,line:11},endBody:{col:1,line:26}}}}},component:a},K=r(()=>{const{data:t}=m(d.api.v1.host);if(t===void 0)return e(c,{open:!0});const o=Math.ceil(t.host.cpu.percent),s=Math.ceil(t.host.memory.percent),n=Math.ceil(t.host.storage_pools[0].used_size/t.host.storage_pools[0].total_size);return e(a,{cpuUsageRate:o,memoryUsageRate:s,storageUsageRate:n})},"Default"),N=["Default"];export{K as Default,N as __namedExportsOrder,F as default};
