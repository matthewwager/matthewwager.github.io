import{j as e}from"./jsx-runtime-BYYWji4R.js";import{Y as c}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import W from"./triangle-alert-DP5nfbtP.js";import C from"./info-M8l_MGNq.js";import D from"./x-8M16RbwM.js";import E from"./check-CNzaN5mj.js";const p=["none","check","x","info","alert-triangle"],d={none:void 0,check:e.jsx(E,{size:16}),x:e.jsx(D,{size:16}),info:e.jsx(C,{size:16}),"alert-triangle":e.jsx(W,{size:16})},F={title:"Components/Label",component:c,argTypes:{status:{control:"select",options:["neutral","positive","negative","notice","info"]},size:{control:"select",options:["md","lg"]},children:{control:"text"},leadingIcon:{control:"select",options:p,mapping:d},trailingIcon:{control:"select",options:p,mapping:d}},args:{children:"Label",status:"neutral",size:"md"}},s={},r={args:{status:"positive",children:"Active"}},a={args:{status:"negative",children:"Failed"}},t={args:{status:"notice",children:"Pending"}},o={args:{status:"info",children:"Draft"}},n={args:{status:"positive",children:"Verified",leadingIcon:"check"}},i={render:l=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(c,{...l,size:"md"}),e.jsx(c,{...l,size:"lg"})]})};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,v,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: "positive",
    children: "Active"
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,z,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "negative",
    children: "Failed"
  }
}`,...(S=(z=a.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,j,b;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: "notice",
    children: "Pending"
  }
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,L,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: "info",
    children: "Draft"
  }
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,_,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    status: "positive",
    children: "Verified",
    leadingIcon: "check"
  }
}`,...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var O,A,T;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "var(--space-3)",
    alignItems: "center"
  }}>
      <Label {...args} size="md" />
      <Label {...args} size="lg" />
    </div>
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const M=["Neutral","Positive","Negative","Notice","Info","WithIcon","Sizes"],G=Object.freeze(Object.defineProperty({__proto__:null,Info:o,Negative:a,Neutral:s,Notice:t,Positive:r,Sizes:i,WithIcon:n,__namedExportsOrder:M,default:F},Symbol.toStringTag,{value:"Module"}));export{o as I,G as L,a as N,r as P,i as S,n as W,s as a,t as b};
