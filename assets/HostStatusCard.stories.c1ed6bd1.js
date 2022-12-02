var p=Object.defineProperty;var r=(t,o)=>p(t,"name",{value:o,configurable:!0});import{C as i,_ as m}from"./CardContent.e4147b67.js";import{L as c}from"./index.3db5ec54.js";import{a as d}from"./apiClient.5f628342.js";import{C as u}from"./Card.58b2169b.js";import"./CardAsideContent.c27f40ad.js";import{B as l}from"./BarChart.329973bc.js";import"./DoughnutChart.0a3903ff.js";import{j as e}from"./jsx-runtime.6405de22.js";import"./iframe.c1791624.js";import"./jsx-runtime_commonjs-proxy.7ac7c09b.js";import"./Box.802887a6.js";import"./defaultTheme.0a05fb97.js";import"./styled.564cbc19.js";import"./useThemeProps.b880cdbb.js";import"./extendSxProp.5964d137.js";import"./Backdrop.d2aba16d.js";import"./useTheme.63fe0775.js";import"./TransitionGroupContext.038eb24b.js";import"./index.bb18b1e3.js";import"./emotion-react.browser.esm.67a16015.js";import"./CardTitle.d423c4c6.js";import"./Typography.8cb78f3c.js";import"./Paper.561465b6.js";import"./Stack.17ea2a17.js";import"./index.8d2b3a85.js";const a=r(({cpuUsageRate:t,memoryUsageRate:o,storageUsageRate:s})=>e(u,{title:"Host",children:e(i,{children:e(l,{data:{CPU:{value:t},Memory:{value:o},Storage:{value:s}}})})}),"HostStatusCard");try{a.displayName="HostStatusCard",a.__docgenInfo={description:"",displayName:"HostStatusCard",props:{cpuUsageRate:{defaultValue:null,description:"",name:"cpuUsageRate",required:!0,type:{name:"number"}},memoryUsageRate:{defaultValue:null,description:"",name:"memoryUsageRate",required:!0,type:{name:"number"}},storageUsageRate:{defaultValue:null,description:"",name:"storageUsageRate",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"]={docgenInfo:a.__docgenInfo,name:"HostStatusCard",path:"src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"})}catch{}const F={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
