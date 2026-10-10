import{j as e}from"./jsx-runtime-BYYWji4R.js";import{g as s}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const P=[{label:"First",value:58},{label:"Second",value:73},{label:"Third",value:94},{label:"Fourth",value:73},{label:"Fifth",value:96}],k=[{key:"first",label:"First"},{key:"second",label:"Second"},{key:"third",label:"Third"},{key:"fourth",label:"Fourth"},{key:"fifth",label:"Fifth"}],B=[{category:"Jan",values:{first:58,second:73,third:94,fourth:73,fifth:96}},{category:"Feb",values:{first:40,second:45,third:62,fourth:66,fifth:60}},{category:"Mar",values:{first:58,second:73,third:94,fourth:73,fifth:96}},{category:"Apr",values:{first:24,second:45,third:55,fourth:45,fifth:60}}],D={title:"Components/Chart-Bar",component:s,argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},data:{control:!1}},args:{data:P,orientation:"vertical",showLegend:!1,showGridLines:!0,showAxisLabels:!0,showCategoryLabels:!0}},a={render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(s,{...r})})},t={args:{orientation:"horizontal"},render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(s,{...r})})},n={name:"Grid lines & axis labels hidden",args:{showGridLines:!1,showAxisLabels:!1},render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(s,{...r})})},o={name:"Legend, when there's no room for labels",args:{showCategoryLabels:!1,showLegend:!0},render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(s,{...r})})},i={name:"Just the bars",args:{showLegend:!1,showGridLines:!1,showAxisLabels:!1,showCategoryLabels:!1},render:r=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(s,{...r})})},d={name:"Clustered (several series per category)",render:()=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(s,{variant:"clustered",data:B,series:k,height:180})})},l={name:"Stacked (several series per category)",render:()=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(s,{variant:"stacked",data:B,series:k,height:180})})};var h,c,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,u,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <BarChart {...args} />
    </div>
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var p,v,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,L,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(b=(L=o.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var S,x,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(x=i.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var C,j,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Clustered (several series per category)",
  // A separate render rather than \`args\`, since this variant's \`data\`/
  // \`series\` shape is structurally different from the single-bar variant
  // the rest of this file's \`args\` are typed for.
  render: () => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="clustered" data={SAMPLE_GROUPED_DATA} series={SAMPLE_SERIES} height={180} />
    </div>
}`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var _,G,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Stacked (several series per category)",
  render: () => <div style={{
    width: "24rem"
  }}>
      <BarChart variant="stacked" data={SAMPLE_GROUPED_DATA} series={SAMPLE_SERIES} height={180} />
    </div>
}`,...(M=(G=l.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const T=["Default","Horizontal","GridLinesHidden","WithLegend","Minimal","Clustered","Stacked"],H=Object.freeze(Object.defineProperty({__proto__:null,Clustered:d,Default:a,GridLinesHidden:n,Horizontal:t,Minimal:i,Stacked:l,WithLegend:o,__namedExportsOrder:T,default:D},Symbol.toStringTag,{value:"Module"}));export{H as B,d as C,a as D,n as G,t as H,i as M,l as S,o as W};
