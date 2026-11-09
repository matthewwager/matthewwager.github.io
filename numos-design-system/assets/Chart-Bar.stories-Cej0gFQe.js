import{j as e}from"./jsx-runtime-BYYWji4R.js";import{g as r}from"./DiagramCell-BoDqalDD.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const G=[{label:"First",value:58},{label:"Second",value:73},{label:"Third",value:94},{label:"Fourth",value:73},{label:"Fifth",value:96}],D=[{key:"gmail",label:"Gmail"},{key:"stripe",label:"Stripe"},{key:"ramp",label:"Ramp"},{key:"snowflake",label:"Snowflake"},{key:"netsuite",label:"NetSuite"}],T=[{category:"Dec 15",values:{gmail:4,stripe:0,ramp:4,snowflake:0,netsuite:3}},{category:"Dec 22",values:{gmail:4,stripe:2,ramp:2,snowflake:2,netsuite:8}},{category:"Dec 29",values:{gmail:8,stripe:4,ramp:8,snowflake:4,netsuite:3}},{category:"Jan 5",values:{gmail:8,stripe:4,ramp:2,snowflake:8,netsuite:1}},{category:"Jan 12",values:{gmail:2,stripe:0,ramp:0,snowflake:1,netsuite:0}}],H=[{key:"scheduled",label:"Scheduled payments"},{key:"unscheduled",label:"Due, not scheduled",color:"var(--chart-4)"},{key:"available",label:"Cash available",color:"var(--chart-2)"}],K=[{category:"Mon",values:{scheduled:35127,unscheduled:0,available:160300}},{category:"Tue",values:{scheduled:0,unscheduled:114509,available:133923}},{category:"Wed",values:{scheduled:27208,unscheduled:24018,available:155323}},{category:"Thu",values:{scheduled:19289,unscheduled:4990,available:135015}},{category:"Fri",values:{scheduled:33532,unscheduled:6585,available:130926}}],I=a=>a===0?"$0":`$${Math.round(a/1e3)}K`,M={title:"Components/Chart-Bar",component:r,argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},data:{control:!1}},args:{data:G,orientation:"vertical",showLegend:!1,showGridLines:!0,showAxisLabels:!0,showCategoryLabels:!0}},s={render:a=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{...a})})},t={args:{orientation:"horizontal"},render:a=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{...a})})},n={name:"Grid lines & axis labels hidden",args:{showGridLines:!1,showAxisLabels:!1},render:a=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{...a})})},l={name:"Legend, when there's no room for labels",args:{showCategoryLabels:!1,showLegend:!0},render:a=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{...a})})},o={name:"Just the bars",args:{showLegend:!1,showGridLines:!1,showAxisLabels:!1,showCategoryLabels:!1},render:a=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{...a})})},i={name:"Clustered (several series per category)",render:()=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{variant:"clustered",data:K,series:H,formatValue:I,height:180})})},d={name:"Stacked (several series per category)",render:()=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{variant:"stacked",data:T,series:D,height:180})})};var c,h,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,g,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,y,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Grid lines & axis labels hidden",
  args: {
    showGridLines: false,
    showAxisLabels: false
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,b,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Legend, when there's no room for labels",
  args: {
    showCategoryLabels: false,
    showLegend: true
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var L,C,x;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Just the bars",
  args: {
    showLegend: false,
    showGridLines: false,
    showAxisLabels: false,
    showCategoryLabels: false
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var k,A,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Clustered (several series per category)",
  // A separate render rather than \`args\`, since this variant's \`data\`/
  // \`series\` shape is structurally different from the single-bar variant
  // the rest of this file's \`args\` are typed for.
  render: () => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="clustered" data={CASH_BY_DAY} series={CASH_SERIES} formatValue={formatUsdK} height={180} />
    </div>
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var _,j,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Stacked (several series per category)",
  render: () => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="stacked" data={INTAKE_BY_WEEK} series={INTAKE_SERIES} height={180} />
    </div>
}`,...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const z=["Default","Horizontal","GridLinesHidden","WithLegend","Minimal","Clustered","Stacked"],F=Object.freeze(Object.defineProperty({__proto__:null,Clustered:i,Default:s,GridLinesHidden:n,Horizontal:t,Minimal:o,Stacked:d,WithLegend:l,__namedExportsOrder:z,default:M},Symbol.toStringTag,{value:"Module"}));export{F as B,i as C,s as D,n as G,t as H,o as M,d as S,l as W};
