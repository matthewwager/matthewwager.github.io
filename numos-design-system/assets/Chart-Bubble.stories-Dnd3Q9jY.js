import{j as e}from"./jsx-runtime-BYYWji4R.js";import{i as t}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const y=[{label:"First",x:78,y:82,size:58},{label:"Second",x:43,y:88,size:34},{label:"Third",x:47,y:28,size:44},{label:"Fourth",x:50,y:92,size:22},{label:"Fifth",x:62,y:32,size:24}],L={title:"Components/Chart-Bubble",component:t,argTypes:{data:{control:!1}},args:{data:y,showLegend:!0,showGridLines:!0,showAxisLabels:!0}},s={render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(t,{...r})})},a={name:"Grid lines & axis labels hidden",args:{showGridLines:!1,showAxisLabels:!1},render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(t,{...r})})},n={name:"Legend hidden",args:{showLegend:!1},render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(t,{...r})})},i={name:"Custom diameter range",args:{minDiameter:8,maxDiameter:96},render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(t,{...r})})};var d,o,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "24rem"
  }}>
      <BubbleChart {...args} />
    </div>
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var m,c,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Grid lines & axis labels hidden",
  args: {
    showGridLines: false,
    showAxisLabels: false
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BubbleChart {...args} />
    </div>
}`,...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var g,u,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Legend hidden",
  args: {
    showLegend: false
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BubbleChart {...args} />
    </div>
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,x,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Custom diameter range",
  args: {
    minDiameter: 8,
    maxDiameter: 96
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BubbleChart {...args} />
    </div>
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const f=["Default","GridLinesHidden","LegendHidden","SizeRange"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,GridLinesHidden:a,LegendHidden:n,SizeRange:i,__namedExportsOrder:f,default:L},Symbol.toStringTag,{value:"Module"}));export{z as C,s as D,a as G,n as L,i as S};
