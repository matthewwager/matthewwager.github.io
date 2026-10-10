import{j as e}from"./jsx-runtime-BYYWji4R.js";import{ag as r}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const N=[{id:"visits",stage:0},{id:"signups",stage:1},{id:"bounced",stage:1},{id:"customers",stage:2},{id:"churned",stage:2}],j=[{source:"visits",target:"signups",value:60,label:"Visits → Signups"},{source:"visits",target:"bounced",value:40,label:"Visits → Bounced"},{source:"signups",target:"customers",value:45,label:"Signups → Customers"},{source:"signups",target:"churned",value:15,label:"Signups → Churned"}],x=[{label:"Visits → Signups",color:"var(--chart-1)"},{label:"Visits → Bounced",color:"var(--chart-2)"},{label:"Signups → Customers",color:"var(--chart-3)"},{label:"Signups → Churned",color:"var(--chart-4)"}],D={title:"Components/Chart-Sankey",component:r,argTypes:{nodes:{control:!1},links:{control:!1},legend:{control:!1}},args:{nodes:N,links:j,legend:x,stageLabels:["Visits","Converted","Outcome"],showStageLabels:!0,showLegend:!0}},n={render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{...s})})},a={name:"Stage labels hidden",args:{showStageLabels:!1},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{...s})})},t={name:"Legend hidden",args:{showLegend:!1},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{...s})})},d={name:"Default numeric stage labels",args:{stageLabels:void 0},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{...s})})},o={name:"One color",args:{color:"var(--chart-1)",legend:void 0,showLegend:!1},render:s=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{...s})})},R=[{id:"backlog",stage:0},{id:"assigned",stage:1},{id:"droppedAfterBacklog",stage:1,hidden:!0},{id:"inProgress",stage:2},{id:"droppedAfterAssigned",stage:2,hidden:!0},{id:"inReview",stage:3},{id:"droppedAfterInProgress",stage:3,hidden:!0},{id:"reconciled",stage:4},{id:"droppedAfterInReview",stage:4,hidden:!0}],B=[{source:"backlog",target:"assigned",value:20,label:"Backlog → Assigned"},{source:"backlog",target:"droppedAfterBacklog",value:5,label:"Dropped after Backlog"},{source:"assigned",target:"inProgress",value:15,label:"Assigned → In Progress"},{source:"assigned",target:"droppedAfterAssigned",value:5,label:"Dropped after Assigned"},{source:"inProgress",target:"inReview",value:10,label:"In Progress → In Review"},{source:"inProgress",target:"droppedAfterInProgress",value:5,label:"Dropped after In Progress"},{source:"inReview",target:"reconciled",value:5,label:"In Review → Reconciled"},{source:"inReview",target:"droppedAfterInReview",value:5,label:"Dropped after In Review"}],i={name:"Branching drop-off funnel (hidden nodes)",args:{nodes:R,links:B,legend:void 0,showLegend:!1,showStageLabels:!0,stageLabels:["Backlog","Assigned","In Progress","In Review","Reconciled"],color:"var(--chart-2)",nodeWidth:8,stageAlign:"centers"},render:s=>e.jsx("div",{style:{width:"40rem"},children:e.jsx(r,{...s})})};var l,g,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "28rem"
  }}>
      <SankeyChart {...args} />
    </div>
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var u,p,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Stage labels hidden",
  args: {
    showStageLabels: false
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <SankeyChart {...args} />
    </div>
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,v,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Legend hidden",
  args: {
    showLegend: false
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <SankeyChart {...args} />
    </div>
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,S,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Default numeric stage labels",
  args: {
    stageLabels: undefined
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <SankeyChart {...args} />
    </div>
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var L,y,k;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "One color",
  args: {
    color: "var(--chart-1)",
    legend: undefined,
    showLegend: false
  },
  render: args => <div style={{
    width: "28rem"
  }}>
      <SankeyChart {...args} />
    </div>
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var A,C,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Branching drop-off funnel (hidden nodes)",
  args: {
    nodes: FUNNEL_NODES,
    links: FUNNEL_LINKS,
    legend: undefined,
    showLegend: false,
    showStageLabels: true,
    stageLabels: ["Backlog", "Assigned", "In Progress", "In Review", "Reconciled"],
    color: "var(--chart-2)",
    nodeWidth: 8,
    stageAlign: "centers"
  },
  render: args => <div style={{
    width: "40rem"
  }}>
      <SankeyChart {...args} />
    </div>
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const O=["Default","StageLabelsHidden","LegendHidden","DefaultStageNumbers","OneColor","BranchingFunnel"],V=Object.freeze(Object.defineProperty({__proto__:null,BranchingFunnel:i,Default:n,DefaultStageNumbers:d,LegendHidden:t,OneColor:o,StageLabelsHidden:a,__namedExportsOrder:O,default:D},Symbol.toStringTag,{value:"Module"}));export{i as B,n as D,t as L,o as O,V as S,d as a,a as b};
