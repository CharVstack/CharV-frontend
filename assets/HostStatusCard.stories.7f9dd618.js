var p=Object.defineProperty;var r=(t,o)=>p(t,"name",{value:o,configurable:!0});import{C as i,_ as m}from"./CardContent.37bbec17.js";import{L as c}from"./index.0dd84a12.js";import{a as u}from"./apiClient.4da25a6e.js";import{C as d}from"./Card.0d1d5687.js";import"./CardAsideContent.7149e3e6.js";import{B as l}from"./DoughnutChart.68d44ee8.js";import{j as a}from"./jsx-runtime.2fdf4e3b.js";import"./iframe.ba0abcc7.js";import"./Box.846713b7.js";import"./useThemeProps.0dc8a905.js";import"./styled.ce183e64.js";import"./extendSxProp.271025b5.js";import"./useTheme.2df75fa3.js";import"./index.8b8ea649.js";import"./emotion-react.browser.esm.e1fddd83.js";import"./CardTitle.3e58cc70.js";import"./Typography.c135d4c6.js";const e=r(({cpuUsageRate:t,memoryUsageRate:o,storageUsageRate:s})=>a(d,{title:"Host",children:a(i,{children:a(l,{data:{CPU:{value:t},Memory:{value:o},Storage:{value:s}}})})}),"HostStatusCard");try{e.displayName="HostStatusCard",e.__docgenInfo={description:"",displayName:"HostStatusCard",props:{cpuUsageRate:{defaultValue:null,description:"",name:"cpuUsageRate",required:!0,type:{name:"number"}},memoryUsageRate:{defaultValue:null,description:"",name:"memoryUsageRate",required:!0,type:{name:"number"}},storageUsageRate:{defaultValue:null,description:"",name:"storageUsageRate",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"]={docgenInfo:e.__docgenInfo,name:"HostStatusCard",path:"src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"})}catch{}const b={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { LoadingSpinner } from '@components/molecules/Progress';
import { apiClient } from '@lib/apiClient';

import { HostStatusCard } from './HostStatusCard';

export default { component: HostStatusCard } as ComponentMeta<typeof HostStatusCard>;

export const HostStatus: ComponentStoryFn<typeof HostStatusCard> = () => {
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
`,locationsMap:{"host-status":{startLoc:{col:67,line:11},endLoc:{col:1,line:26},startBody:{col:67,line:11},endBody:{col:1,line:26}}}}},component:e},E=r(()=>{const{data:t}=m(u.api.v1.host);if(t===void 0)return a(c,{open:!0});const o=Math.ceil(t.host.cpu.percent),s=Math.ceil(t.host.memory.percent),n=Math.ceil(t.host.storage_pools[0].used_size/t.host.storage_pools[0].total_size);return a(e,{cpuUsageRate:o,memoryUsageRate:s,storageUsageRate:n})},"HostStatus"),I=["HostStatus"];export{E as HostStatus,I as __namedExportsOrder,b as default};
