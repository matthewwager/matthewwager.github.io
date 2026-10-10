import{j as e}from"./jsx-runtime-BYYWji4R.js";import{av as c}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import k from"./eye-ugpUS8T7.js";import q from"./mail-WW_jGw0C.js";import H from"./search-Cpengdub.js";const m=["none","search","mail","eye"],d={none:void 0,search:e.jsx(H,{size:16}),mail:e.jsx(q,{size:16}),eye:e.jsx(k,{size:16})},U={title:"Components/TextInput",component:c,argTypes:{status:{control:"select",options:["default","error","success"]},size:{control:"select",options:["sm","md","lg"]},label:{control:"text"},placeholder:{control:"text"},helpText:{control:"text"},disabled:{control:"boolean"},leadingIcon:{control:"select",options:m,mapping:d},trailingIcon:{control:"select",options:m,mapping:d}},args:{label:"Label",placeholder:"Text",status:"default",size:"lg"}},s={},r={args:{helpText:"We'll never share this with anyone."}},a={args:{label:"Email",placeholder:"you@example.com",leadingIcon:"mail"}},o={name:"With prefix and suffix",args:{label:"Amount",prefix:"$",suffix:"USD",defaultValue:"15.00"}},t={args:{status:"error",helpText:"This field is required."}},n={args:{status:"success",helpText:"Looks good!"}},l={args:{disabled:!0,placeholder:"Can't edit this"}},i={render:p=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)",width:"16rem"},children:[e.jsx(c,{...p,size:"sm",label:"Small"}),e.jsx(c,{...p,size:"md",label:"Medium"}),e.jsx(c,{...p,size:"lg",label:"Large"})]})};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,h,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    helpText: "We'll never share this with anyone."
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,T,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "you@example.com",
    leadingIcon: "mail"
  }
}`,...(y=(T=a.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var z,I,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "With prefix and suffix",
  args: {
    label: "Amount",
    prefix: "$",
    suffix: "USD",
    defaultValue: "15.00"
  }
}`,...(j=(I=o.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var W,v,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    status: "error",
    helpText: "This field is required."
  }
}`,...(D=(v=t.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var E,_,L;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: "success",
    helpText: "Looks good!"
  }
}`,...(L=(_=n.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var M,w,A;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Can't edit this"
  }
}`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,C,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    width: "16rem"
  }}>
      <TextInput {...args} size="sm" label="Small" />
      <TextInput {...args} size="md" label="Medium" />
      <TextInput {...args} size="lg" label="Large" />
    </div>
}`,...(P=(C=i.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const V=["Default","WithHelpText","WithIcon","WithPrefixAndSuffix","Error","Success","Disabled","Sizes"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:l,Error:t,Sizes:i,Success:n,WithHelpText:r,WithIcon:a,WithPrefixAndSuffix:o,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{s as D,t as E,i as S,N as T,r as W,l as a,n as b,a as c,o as d};
