var p=Object.defineProperty;var r=(t,o)=>p(t,"name",{value:o,configurable:!0});import{C as i,_ as m}from"./CardContent.dd49a17d.js";import{L as c}from"./index.5fc40648.js";import{a as u}from"./apiClient.1c5dac2e.js";import{C as d}from"./Card.c40157b1.js";import"./CardAsideContent.d92e8c43.js";import{B as l}from"./DoughnutChart.360e5a95.js";import{j as a}from"./jsx-runtime.746f98b6.js";import"./iframe.7e7793fd.js";import"./Box.1afe7f47.js";import"./useThemeProps.9442f15b.js";import"./styled.f0f80617.js";import"./extendSxProp.965797ad.js";import"./useTheme.f98ef1cc.js";import"./index.f876de21.js";import"./emotion-react.browser.esm.aed2fb67.js";import"./CardTitle.a0b1c1e8.js";import"./Typography.7d7c451a.js";const e=r(({cpuUsageRate:t,memoryUsageRate:o,storageUsageRate:s})=>a(d,{title:"Host",children:a(i,{children:a(l,{data:{CPU:{value:t},Memory:{value:o},Storage:{value:s}}})})}),"HostStatusCard");try{e.displayName="HostStatusCard",e.__docgenInfo={description:"",displayName:"HostStatusCard",props:{cpuUsageRate:{defaultValue:null,description:"",name:"cpuUsageRate",required:!0,type:{name:"number"}},memoryUsageRate:{defaultValue:null,description:"",name:"memoryUsageRate",required:!0,type:{name:"number"}},storageUsageRate:{defaultValue:null,description:"",name:"storageUsageRate",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"]={docgenInfo:e.__docgenInfo,name:"HostStatusCard",path:"src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"})}catch{}const b={parameters:{storySource:{source:`import useAspidaSWR from '@aspida/swr';
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
