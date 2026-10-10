import{j as e}from"./jsx-runtime-BYYWji4R.js";import{Z as t}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const S=["Jan","Feb","Mar","Apr","May","Jun"],v=[{label:"Revenue",values:[40,55,48,62,70,66]},{label:"Expenses",values:[30,32,38,35,42,40]},{label:"Profit",values:[10,23,10,27,28,26]}],f={title:"Components/Chart-Line",component:t,argTypes:{categories:{control:!1},series:{control:!1}},args:{categories:S,series:v,showLegend:!0,showGridLines:!0,showAxisLabels:!0,showCategoryLabels:!0}},r={render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(t,{...s})})},n={args:{series:[v[0]]},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(t,{...s})})},a={name:"Grid lines & axis labels hidden",args:{showGridLines:!1,showAxisLabels:!1},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(t,{...s})})},i={name:"Legend hidden",args:{showLegend:!1},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(t,{...s})})};var d,o,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "28rem"
  }}>
      <LineChart {...args} />
    </div>
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    series: [SERIES[0]!]
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <LineChart {...args} />
    </div>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,p,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Grid lines & axis labels hidden",
  args: {
    showGridLines: false,
    showAxisLabels: false
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <LineChart {...args} />
    </div>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var L,w,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Legend hidden",
  args: {
    showLegend: false
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <LineChart {...args} />
    </div>
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const b=["Default","SingleSeries","GridLinesHidden","LegendHidden"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:r,GridLinesHidden:a,LegendHidden:i,SingleSeries:n,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{r as D,a as G,i as L,n as S,G as a};
