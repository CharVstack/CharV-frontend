var p=Object.defineProperty;var o=(a,e)=>p(a,"name",{value:e,configurable:!0});import{C as c,B as d,p as m,a as C,b as u,c as h}from"./index-5c6b901e.js";import{j as f}from"./jsx-runtime-b19c866b.js";import{u as y}from"./useTheme-ff8042f4.js";c.register(d,m,C,u);const s=o(({data:a,options:e})=>{const t=y(),n=t.palette.success.main,l={labels:Object.keys(a),datasets:[{data:Object.values(a).map(r=>r.value),backgroundColor:Object.values(a).map(r=>r.color??n),barPercentage:.6,categoryPercentage:.8}]},i={indexAxis:"y",scales:{xAxes:{display:!1,max:100,min:0},yAxes:{display:!1,ticks:{font:{size:t.typography.fontSize},color:t.palette.text.primary}}},maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return f(h,{data:l,options:e??i})},"BarChart");try{s.displayName="BarChart",s.__docgenInfo={description:"",displayName:"BarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Charts"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:'_DeepPartialObject<CoreChartOptions<"bar"> & ElementChartOptions<"bar"> & PluginChartOptions<"bar"> & DatasetChartOptions<"bar"> & ScaleChartOptions<...> & BarControllerChartOptions>'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Charts/Bar/BarChart.tsx#BarChart"]={docgenInfo:s.__docgenInfo,name:"BarChart",path:"src/components/molecules/Charts/Bar/BarChart.tsx#BarChart"})}catch{}export{s as B};
//# sourceMappingURL=BarChart-915c222b.js.map
