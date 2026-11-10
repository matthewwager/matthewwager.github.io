import{j as e}from"./jsx-runtime-BYYWji4R.js";import{g as a}from"./DiagramCell-D01BibyM.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const Y=[{label:"First",value:58},{label:"Second",value:73},{label:"Third",value:94},{label:"Fourth",value:73},{label:"Fifth",value:96}],N=[{key:"gmail",label:"Gmail"},{key:"stripe",label:"Stripe"},{key:"ramp",label:"Ramp"},{key:"snowflake",label:"Snowflake"},{key:"netsuite",label:"NetSuite"}],W=[{category:"Dec 15",values:{gmail:4,stripe:0,ramp:4,snowflake:0,netsuite:3}},{category:"Dec 22",values:{gmail:4,stripe:2,ramp:2,snowflake:2,netsuite:8}},{category:"Dec 29",values:{gmail:8,stripe:4,ramp:8,snowflake:4,netsuite:3}},{category:"Jan 5",values:{gmail:8,stripe:4,ramp:2,snowflake:8,netsuite:1}},{category:"Jan 12",values:{gmail:2,stripe:0,ramp:0,snowflake:1,netsuite:0}}],M=[{key:"scheduled",label:"Scheduled payments"},{key:"unscheduled",label:"Due, not scheduled",color:"var(--chart-4)"},{key:"available",label:"Cash available",color:"var(--chart-2)"}],R=[{category:"Mon",values:{scheduled:35127,unscheduled:0,available:160300}},{category:"Tue",values:{scheduled:0,unscheduled:114509,available:133923}},{category:"Wed",values:{scheduled:27208,unscheduled:24018,available:155323}},{category:"Thu",values:{scheduled:19289,unscheduled:4990,available:135015}},{category:"Fri",values:{scheduled:33532,unscheduled:6585,available:130926}}],z=["xs","s","m","l","xl"],F={margin:"0 0 var(--space-2)",font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},J=s=>s===0?"$0":`$${Math.round(s/1e3)}K`,O={title:"Components/Chart-Bar",component:a,argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},thickness:{control:"select",options:["xs","s","m","l","xl"]},data:{control:!1}},args:{data:Y,orientation:"vertical",showLegend:!1,showGridLines:!0,showAxisLabels:!0,showCategoryLabels:!0}},t={render:s=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(a,{...s})})},n={args:{orientation:"horizontal"},render:s=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(a,{...s})})},l={name:"Grid lines & axis labels hidden",args:{showGridLines:!1,showAxisLabels:!1},render:s=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(a,{...s})})},i={name:"Legend, when there's no room for labels",args:{showCategoryLabels:!1,showLegend:!0},render:s=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(a,{...s})})},o={name:"Just the bars",args:{showLegend:!1,showGridLines:!1,showAxisLabels:!1,showCategoryLabels:!1},render:s=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(a,{...s})})},d={name:"Clustered (several series per category)",render:()=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(a,{variant:"clustered",data:R,series:M,formatValue:J,height:180})})},c={name:"Stacked (several series per category)",render:()=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(a,{variant:"stacked",data:W,series:N,height:180})})},r={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-5)"},children:z.map(s=>e.jsxs("div",{style:{width:"12rem"},children:[e.jsxs("p",{style:F,children:['thickness="',s,'"']}),e.jsx(a,{variant:"stacked",data:W.slice(0,4),series:N,thickness:s,height:140,showLegend:!1,showAxisLabels:!1})]},s))})};var h,m,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,w,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,b,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var L,k,E;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var C,A,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Clustered (several series per category)",
  // A separate render rather than \`args\`, since this variant's \`data\`/
  // \`series\` shape is structurally different from the single-bar variant
  // the rest of this file's \`args\` are typed for.
  render: () => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="clustered" data={CASH_BY_DAY} series={CASH_SERIES} formatValue={formatUsdK} height={180} />
    </div>
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var j,B,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Stacked (several series per category)",
  render: () => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="stacked" data={INTAKE_BY_WEEK} series={INTAKE_SERIES} height={180} />
    </div>
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var K,I,G,H,D;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-5)"
  }}>
      {THICKNESSES.map(thickness => <div key={thickness} style={{
      width: "12rem"
    }}>
          <p style={LABEL_STYLE}>thickness="{thickness}"</p>
          <BarChart variant="stacked" data={INTAKE_BY_WEEK.slice(0, 4)} series={INTAKE_SERIES} thickness={thickness} height={140} showLegend={false} showAxisLabels={false} />
        </div>)}
    </div>
}`,...(G=(I=r.parameters)==null?void 0:I.docs)==null?void 0:G.source},description:{story:"Every `thickness`, on the stacked variant (whose segments also show the 1px gaps).",...(D=(H=r.parameters)==null?void 0:H.docs)==null?void 0:D.description}}};const $=["Default","Horizontal","GridLinesHidden","WithLegend","Minimal","Clustered","Stacked","Thickness"],Q=Object.freeze(Object.defineProperty({__proto__:null,Clustered:d,Default:t,GridLinesHidden:l,Horizontal:n,Minimal:o,Stacked:c,Thickness:r,WithLegend:i,__namedExportsOrder:$,default:O},Symbol.toStringTag,{value:"Module"}));export{Q as B,d as C,t as D,l as G,n as H,o as M,c as S,r as T,i as W};
