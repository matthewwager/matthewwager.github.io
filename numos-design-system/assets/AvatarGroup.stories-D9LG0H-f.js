import{j as r}from"./jsx-runtime-BYYWji4R.js";import{e as p,d as i}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const G=["Maya Chen","Sam Ortiz","Priya Nair","Jonah Lee","Elena Petrova"],M={title:"Components/AvatarGroup",component:p,argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},overlap:{control:{type:"range",min:-8,max:24,step:1}},randomizeColors:{control:"boolean"}},args:{orientation:"horizontal",overlap:8,randomizeColors:!1},render:c=>r.jsx(p,{...c,children:G.map(m=>r.jsx(i,{name:m,size:"md"},m))})},a={},e={args:{orientation:"vertical"}},o={name:"No overlap (spaced out)",args:{overlap:-8}},s={args:{overlap:20}},t={args:{randomizeColors:!0}},n={name:"Explicit avatar colors take priority",args:{randomizeColors:!0},render:c=>r.jsxs(p,{...c,children:[r.jsx(i,{name:"Maya Chen",size:"md",color:"positive"}),r.jsx(i,{name:"Sam Ortiz",size:"md"}),r.jsx(i,{name:"Priya Nair",size:"md"})]})};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,g,z;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  }
}`,...(z=(g=e.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var x,y,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "No overlap (spaced out)",
  args: {
    overlap: -8
  }
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,A,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    overlap: 20
  }
}`,...(j=(A=s.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var O,E,N;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    randomizeColors: true
  }
}`,...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var f,h,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Explicit avatar colors take priority",
  args: {
    randomizeColors: true
  },
  render: args => <AvatarGroup {...args}>
      <Avatar name="Maya Chen" size="md" color="positive" />
      <Avatar name="Sam Ortiz" size="md" />
      <Avatar name="Priya Nair" size="md" />
    </AvatarGroup>
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const P=["Default","Vertical","NoOverlap","HeavyOverlap","RandomizedColors","ExplicitColorsWin"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ExplicitColorsWin:n,HeavyOverlap:s,NoOverlap:o,RandomizedColors:t,Vertical:e,__namedExportsOrder:P,default:M},Symbol.toStringTag,{value:"Module"}));export{k as A,n as E,s as H,o as N,t as R,e as V};
