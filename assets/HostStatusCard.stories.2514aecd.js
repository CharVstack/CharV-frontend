var p=Object.defineProperty;var r=(t,o)=>p(t,"name",{value:o,configurable:!0});import{C as i,_ as m}from"./CardContent.fab29474.js";import{L as c}from"./index.6024fea1.js";import{a as d}from"./apiClient.10396346.js";import{C as u}from"./Card.94f0ad59.js";import"./CardAsideContent.e22309eb.js";import{B as l}from"./BarChart.372eda72.js";import"./DoughnutChart.02bf9733.js";import{j as e}from"./jsx-runtime.8cb9d8e5.js";import"./iframe.32ac3e54.js";import"./jsx-runtime_commonjs-proxy.85c5b885.js";import"./Box.bbe80da5.js";import"./defaultTheme.a7448125.js";import"./styled.c50209b5.js";import"./useThemeProps.0b96e38f.js";import"./extendSxProp.60212891.js";import"./Backdrop.229c9d13.js";import"./useTheme.3c3d2fe3.js";import"./TransitionGroupContext.edb9c6a2.js";import"./index.5f565a24.js";import"./emotion-react.browser.esm.9bac15d7.js";import"./CardTitle.466d67a0.js";import"./Typography.32ecac0a.js";import"./Paper.83b34fbd.js";import"./Stack.db1f11b8.js";import"./index.a78d3c86.js";const a=r(({cpuUsageRate:t,memoryUsageRate:o,storageUsageRate:s})=>e(u,{title:"Host",children:e(i,{children:e(l,{data:{CPU:{value:t},Memory:{value:o},Storage:{value:s}}})})}),"HostStatusCard");try{a.displayName="HostStatusCard",a.__docgenInfo={description:"",displayName:"HostStatusCard",props:{cpuUsageRate:{defaultValue:null,description:"",name:"cpuUsageRate",required:!0,type:{name:"number"}},memoryUsageRate:{defaultValue:null,description:"",name:"memoryUsageRate",required:!0,type:{name:"number"}},storageUsageRate:{defaultValue:null,description:"",name:"storageUsageRate",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"]={docgenInfo:a.__docgenInfo,name:"HostStatusCard",path:"src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"})}catch{}const F={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
