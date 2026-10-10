import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as F}from"./index-ClcD9ViR.js";import{a9 as a}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const L={title:"Components/Pagination",component:a,parameters:{layout:"padded"},argTypes:{totalPages:{control:"number"},disabled:{control:"boolean"}},args:{totalPages:25,disabled:!1}},r={render:d=>e.jsx(a,{...d})},s={name:"First page (Prev disabled)",render:()=>e.jsx(a,{defaultPage:1,totalPages:25})},t={name:"Last page (Next disabled)",render:()=>e.jsx(a,{defaultPage:25,totalPages:25})},o={name:"Single page (both disabled)",render:()=>e.jsx(a,{defaultPage:1,totalPages:1})},n={render:()=>e.jsx(a,{defaultPage:4,totalPages:25,disabled:!0})};function O(){const[d,E]=F.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",alignItems:"flex-start"},children:[e.jsx(a,{page:d,totalPages:25,onPageChange:E}),e.jsxs("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["Page ",d," of 25 (owned by the parent)"]})]})}const l={render:()=>e.jsx(O,{})};var i,g,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Pagination {...args} />
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "First page (Prev disabled)",
  render: () => <Pagination defaultPage={1} totalPages={25} />
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var P,f,b;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Last page (Next disabled)",
  render: () => <Pagination defaultPage={25} totalPages={25} />
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,S,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Single page (both disabled)",
  render: () => <Pagination defaultPage={1} totalPages={1} />
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var y,h,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Pagination defaultPage={4} totalPages={25} disabled />
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,D,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ControlledExample />
}`,...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const N=["Default","FirstPage","LastPage","SinglePage","Disabled","Controlled"],M=Object.freeze(Object.defineProperty({__proto__:null,Controlled:l,Default:r,Disabled:n,FirstPage:s,LastPage:t,SinglePage:o,__namedExportsOrder:N,default:L},Symbol.toStringTag,{value:"Module"}));export{l as C,r as D,s as F,t as L,M as P,o as S,n as a};
