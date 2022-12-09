var c=Object.defineProperty;var n=(e,t)=>c(e,"name",{value:t,configurable:!0});import{s}from"./v1.9934ae09.js";import{C as u}from"./Card.27be3fa2.js";import{C as d}from"./CardContent.6b90fa7a.js";import"./CardAsideContent.f682629e.js";import{B as _}from"./BarChart.dc3a1bc9.js";import"./DoughnutChart.1f48de9a.js";import{j as o}from"./jsx-runtime.df599d8d.js";import{u as f}from"./useTheme.925aaa90.js";import"./CardTitle.c0a1d8a2.js";import"./Box.48a97d3d.js";import"./defaultTheme.ac04cac0.js";import"./styled.7de5d41c.js";import"./useThemeProps.adeba102.js";import"./extendSxProp.b0cd4fbf.js";import"./Typography.34074cf6.js";import"./Paper.507ee7b9.js";import"./Stack.0dedbdea.js";import"./index.9ee048e0.js";import"./iframe.0297972d.js";const a=n(({cpuUsageRate:e,memoryUsageRate:t,storageUsageRate:p})=>{const r=f(),i={CPU:{value:e},Memory:{value:t},Storage:{value:p}},m={indexAxis:"y",scales:{xAxes:{display:!1,max:100,min:0},yAxes:{display:!1,ticks:{font:{size:r.typography.fontSize},color:r.palette.text.primary}}},maintainAspectRatio:!1,plugins:{tooltip:{callbacks:{label:l=>Intl.NumberFormat([],{style:"unit",unit:"percent"}).format(l.parsed.x)}},legend:{display:!1}}};return o(u,{title:"Host",children:o(d,{children:o(_,{options:m,data:i})})})},"HostStatusCard");try{a.displayName="HostStatusCard",a.__docgenInfo={description:"",displayName:"HostStatusCard",props:{cpuUsageRate:{defaultValue:null,description:"",name:"cpuUsageRate",required:!0,type:{name:"number"}},memoryUsageRate:{defaultValue:null,description:"",name:"memoryUsageRate",required:!0,type:{name:"number"}},storageUsageRate:{defaultValue:null,description:"",name:"storageUsageRate",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"]={docgenInfo:a.__docgenInfo,name:"HostStatusCard",path:"src/components/organisms/Cards/InstanceCards/HostStatusCard.tsx#HostStatusCard"})}catch{}const M={component:a},q={args:{cpuUsageRate:Math.ceil(s.components.responses.GetHost200Response.content["application/json"].examples["example-1"].value.host.cpu.percent),memoryUsageRate:Math.ceil(s.components.responses.GetHost200Response.content["application/json"].examples["example-1"].value.host.memory.percent),storageUsageRate:Math.ceil(s.components.responses.GetHost200Response.content["application/json"].examples["example-1"].value.host.storage_pools.reduce((e,t)=>({...e,used_size:e.used_size+t.used_size})).used_size/s.components.responses.GetHost200Response.content["application/json"].examples["example-1"].value.host.storage_pools.reduce((e,t)=>({...e,total_size:e.total_size+t.total_size})).total_size)}},D=["Default"];export{q as Default,D as __namedExportsOrder,M as default};