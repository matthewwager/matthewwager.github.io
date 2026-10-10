import{j as r}from"./jsx-runtime-BYYWji4R.js";import{c as a}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const T=[62e3,78e3,71e3,54e3,41e3,48e3,66e3,82e3,74e3,68e3,79e3,91e3,84e3,77e3,89e3,96e3,88e3,81e3,93e3,102e3,95e3,87e3,79e3,86e3,94e3,101e3,108e3,99e3,91e3,11e4,123456],S=T.map((e,t)=>({date:new Date(2026,0,t+1),value:e})),b={title:"Components/Chart-Area",component:a,parameters:{layout:"padded"},argTypes:{data:{control:!1},height:{control:{type:"number",min:80,max:320,step:8}}},args:{data:S,"aria-label":"Revenue over the last 31 days"}},s={render:e=>r.jsx("div",{style:{width:"20rem"},children:r.jsx(a,{...e})})},o={name:"Custom value/date formatting",render:e=>r.jsx("div",{style:{width:"20rem"},children:r.jsx(a,{...e,formatValue:t=>`$${t.toLocaleString()}`})})},n={name:"Custom color",render:e=>r.jsx("div",{style:{width:"20rem"},children:r.jsx(a,{...e,color:"var(--chart-3)",fillColor:"color-mix(in srgb, var(--chart-3) 15%, transparent)"})})},i={name:"Taller plot (height)",args:{height:240},render:e=>r.jsx("div",{style:{width:"24rem"},children:r.jsx(a,{...e})})},d={name:"Few data points",args:{data:S.filter((e,t)=>t%6===0)},render:e=>r.jsx("div",{style:{width:"20rem"},children:r.jsx(a,{...e})})};var l,m,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "20rem"
  }}>
      <AreaChart {...args} />
    </div>
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Custom value/date formatting",
  render: args => <div style={{
    width: "20rem"
  }}>
      <AreaChart {...args} formatValue={value => \`$\${value.toLocaleString()}\`} />
    </div>
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Custom color",
  render: args => <div style={{
    width: "20rem"
  }}>
      <AreaChart {...args} color="var(--chart-3)" fillColor="color-mix(in srgb, var(--chart-3) 15%, transparent)" />
    </div>
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var x,f,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Taller plot (height)",
  args: {
    height: 240
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <AreaChart {...args} />
    </div>
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,j,A;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Few data points",
  args: {
    data: DATA.filter((_, i) => i % 6 === 0)
  },
  render: args => <div style={{
    width: "20rem"
  }}>
      <AreaChart {...args} />
    </div>
}`,...(A=(j=d.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const _=["Default","CustomFormatting","CustomColor","TallerPlot","FewPoints"],E=Object.freeze(Object.defineProperty({__proto__:null,CustomColor:n,CustomFormatting:o,Default:s,FewPoints:d,TallerPlot:i,__namedExportsOrder:_,default:b},Symbol.toStringTag,{value:"Module"}));export{E as C,s as D,d as F,i as T,n as a,o as b};
