var p=Object.defineProperty;var n=(a,e)=>p(a,"name",{value:e,configurable:!0});import{B as d}from"./index.e5928dc5.js";import{j as m}from"./jsx-runtime.9dae1947.js";import{u as C}from"./useTheme.f06f625d.js";const s=n(({data:a,options:e})=>{const t=C(),l=t.palette.success.main,c={labels:Object.keys(a),datasets:[{data:Object.values(a).map(r=>r.value),backgroundColor:Object.values(a).map(r=>{var o;return(o=r.color)!=null?o:l}),barPercentage:.6,categoryPercentage:.8}]},i={indexAxis:"y",scales:{xAxes:{display:!1,max:100,min:0},yAxes:{display:!1,ticks:{font:{size:t.typography.fontSize},color:t.palette.text.primary}}},maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return m(d,{data:c,options:e!=null?e:i})},"BarChart");try{s.displayName="BarChart",s.__docgenInfo={description:"",displayName:"BarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Charts"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:'_DeepPartialObject<CoreChartOptions<"bar"> & ElementChartOptions<"bar"> & PluginChartOptions<"bar"> & DatasetChartOptions<"bar"> & ScaleChartOptions<...> & BarControllerChartOptions>'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Charts/Bar/BarChart.tsx#BarChart"]={docgenInfo:s.__docgenInfo,name:"BarChart",path:"src/components/molecules/Charts/Bar/BarChart.tsx#BarChart"})}catch{}export{s as B};