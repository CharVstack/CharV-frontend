var g=Object.defineProperty;var n=(t,o)=>g(t,"name",{value:o,configurable:!0});import{s as a}from"./v1.b2dac0b6.js";import{C as _}from"./Card.07a4d5ff.js";import{C as x}from"./CardContent.7c404162.js";import{C as H}from"./CardAsideContent.a2848355.js";import"./BarChart.971d5d23.js";import{D as M}from"./DoughnutChart.9b16a30e.js";import{c as m}from"./CalcUnitSize.8b032730.js";import{a as i,j as e}from"./jsx-runtime.dd1bf313.js";import{G as s}from"./Grid.50110ad6.js";import{T as p}from"./Typography.7f629d01.js";import{u as S}from"./useTheme.9f42af5e.js";import"./CardTitle.7bc77ba0.js";import"./Box.8a3481cc.js";import"./defaultTheme.3c8fff4a.js";import"./styled.bb546e2f.js";import"./useThemeProps.84bf84f6.js";import"./extendSxProp.b52f3979.js";import"./Paper.3bffa7a2.js";import"./Stack.dbf3f70f.js";import"./index.35c9a1df.js";import"./iframe.deaecad4.js";const O=""+new URL("memory-image.d7fed24e.jpg",import.meta.url).href,r=n(({total:t,used:o})=>{const d=S().palette.grey[800],c={Used:{value:o},Free:{value:t-o,color:d}},l={plugins:{tooltip:{callbacks:{label:f=>{const[y,h]=m(f.parsed,4);return`${h} ${y}`}}},legend:{display:!0,position:"bottom"}}},[u,C]=m(t);return i(_,{hasAsideContent:!0,title:"Memory",children:[e(H,{bgImg:O,children:i(s,{container:!0,justifyContent:"center",alignItems:"flex-end",children:[e(s,{item:!0,children:e(p,{variant:"h3",component:"div",children:C})}),e(s,{item:!0,children:e(p,{children:u})})]})}),e(x,{children:e(M,{options:l,data:c})})]})},"HostMemoryCard");try{r.displayName="HostMemoryCard",r.__docgenInfo={description:"",displayName:"HostMemoryCard",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},used:{defaultValue:null,description:"",name:"used",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"]={docgenInfo:r.__docgenInfo,name:"HostMemoryCard",path:"src/components/organisms/Cards/InstanceCards/HostMemoryCard.tsx#HostMemoryCard"})}catch{}const J={component:r},P={args:{total:a.components.responses.GetHost200Response.content["application/json"].examples["example-1"].value.host.memory.total,used:a.components.responses.GetHost200Response.content["application/json"].examples["example-1"].value.host.memory.used}},Q=["Default"];export{P as Default,Q as __namedExportsOrder,J as default};
