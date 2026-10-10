import{j as c}from"./jsx-runtime-BYYWji4R.js";import{aw as k}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const E={title:"Components/Textarea",component:k,argTypes:{size:{control:"select",options:["sm","md","lg"]},status:{control:"select",options:["default","error","success"]},label:{control:"text"},helpText:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"}},args:{size:"lg",status:"default",label:"Description",placeholder:"This is placeholder text that is multiline"}},e={},r={render:v=>c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:["sm","md","lg"].map(l=>c.jsx(k,{...v,size:l,label:`Size: ${l}`},l))})},s={name:"With prefix and suffix",args:{label:"Ticket",prefix:"#",defaultValue:"4471",placeholder:void 0}},a={name:"Error",args:{status:"error",helpText:"Description is required",defaultValue:""}},t={name:"Success",args:{status:"success",helpText:"Looks good",defaultValue:"This project tracks quarterly OKRs."}},o={args:{disabled:!0,defaultValue:"This field can't be edited right now."}};var n,i,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      {(["sm", "md", "lg"] as const).map(size => <Textarea key={size} {...args} size={size} label={\`Size: \${size}\`} />)}
    </div>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,x,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "With prefix and suffix",
  args: {
    label: "Ticket",
    prefix: "#",
    defaultValue: "4471",
    placeholder: undefined
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var S,h,T;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Error",
  args: {
    status: "error",
    helpText: "Description is required",
    defaultValue: ""
  }
}`,...(T=(h=a.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var b,y,z;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Success",
  args: {
    status: "success",
    helpText: "Looks good",
    defaultValue: "This project tracks quarterly OKRs."
  }
}`,...(z=(y=t.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var D,j,V;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "This field can't be edited right now."
  }
}`,...(V=(j=o.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const _=["Default","Sizes","WithPrefixAndSuffix","ErrorState","SuccessState","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:o,ErrorState:a,Sizes:r,SuccessState:t,WithPrefixAndSuffix:s,__namedExportsOrder:_,default:E},Symbol.toStringTag,{value:"Module"}));export{e as D,a as E,r as S,P as T,s as W,o as a,t as b};
