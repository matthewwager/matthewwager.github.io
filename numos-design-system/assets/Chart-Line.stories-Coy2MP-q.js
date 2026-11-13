import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a0 as n}from"./DiagramCell-BVBcLmyd.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const C=["Jan","Feb","Mar","Apr","May","Jun"],d=[{label:"Revenue",values:[40,55,48,62,70,66]},{label:"Expenses",values:[30,32,38,35,42,40]},{label:"Profit",values:[10,23,10,27,28,26]}],k={title:"Components/Chart-Line",component:n,argTypes:{categories:{control:!1},series:{control:!1},thickness:{control:"select",options:["s","l"]}},args:{categories:C,series:d,showLegend:!0,showGridLines:!0,showAxisLabels:!0,showCategoryLabels:!0}},a={render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(n,{...s})})},i={args:{series:[d[0]]},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(n,{...s})})},t={name:"Grid lines & axis labels hidden",args:{showGridLines:!1,showAxisLabels:!1},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(n,{...s})})},o={name:"Legend hidden",args:{showLegend:!1},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(n,{...s})})},r={render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:["s","l"].map(s=>e.jsxs("div",{style:{width:"22rem"},children:[e.jsxs("p",{style:{margin:"0 0 var(--space-2)",font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},children:['thickness="',s,'"']}),e.jsx(n,{categories:C,series:d,thickness:s,showLegend:!1})]},s))})};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "28rem"
  }}>
      <LineChart {...args} />
    </div>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,m,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    series: [SERIES[0]!]
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <LineChart {...args} />
    </div>
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var L,w,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Legend hidden",
  args: {
    showLegend: false
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <LineChart {...args} />
    </div>
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var f,S,j,b,E;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    flexWrap: "wrap"
  }}>
      {(["s", "l"] as const).map(thickness => <div key={thickness} style={{
      width: "22rem"
    }}>
          <p style={{
        margin: "0 0 var(--space-2)",
        font: "var(--type-paragraph-xs-regular)",
        color: "var(--content-subtle)"
      }}>thickness="{thickness}"</p>
          <LineChart categories={CATEGORIES} series={SERIES} thickness={thickness} showLegend={false} />
        </div>)}
    </div>
}`,...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:"Both `thickness` sizes: 2px lines with 4px points, and 4px lines with 8px points.",...(E=(b=r.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};const G=["Default","SingleSeries","GridLinesHidden","LegendHidden","Thickness"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:a,GridLinesHidden:t,LegendHidden:o,SingleSeries:i,Thickness:r,__namedExportsOrder:G,default:k},Symbol.toStringTag,{value:"Module"}));export{a as D,t as G,o as L,i as S,r as T,I as a};
