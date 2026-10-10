import{j as o}from"./jsx-runtime-BYYWji4R.js";import{y as t}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const f=[{label:"First",value:38},{label:"Second",value:27},{label:"Third",value:18},{label:"Fourth",value:11},{label:"Fifth",value:6}],D={title:"Components/Chart-Donut",component:t,argTypes:{data:{control:!1}},args:{data:f,centerLabel:"Total",showLegend:!0,showCenterLabel:!0}},r={render:e=>o.jsx(t,{...e})},a={name:"Center label hidden",args:{showCenterLabel:!1},render:e=>o.jsx(t,{...e})},n={name:"Legend hidden",args:{showLegend:!1},render:e=>o.jsx(t,{...e})},s={name:"Custom center value",args:{centerValue:"$142k",centerLabel:"Revenue"},render:e=>o.jsx(t,{...e})};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <DonutChart {...args} />
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,m,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Center label hidden",
  args: {
    showCenterLabel: false
  },
  render: args => <DonutChart {...args} />
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var i,p,C;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Legend hidden",
  args: {
    showLegend: false
  },
  render: args => <DonutChart {...args} />
}`,...(C=(p=n.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var h,b,L;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Custom center value",
  args: {
    centerValue: "$142k",
    centerLabel: "Revenue"
  },
  render: args => <DonutChart {...args} />
}`,...(L=(b=s.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const v=["Default","CenterLabelHidden","LegendHidden","CustomCenterValue"],_=Object.freeze(Object.defineProperty({__proto__:null,CenterLabelHidden:a,CustomCenterValue:s,Default:r,LegendHidden:n,__namedExportsOrder:v,default:D},Symbol.toStringTag,{value:"Module"}));export{a as C,r as D,n as L,s as a,_ as b};
