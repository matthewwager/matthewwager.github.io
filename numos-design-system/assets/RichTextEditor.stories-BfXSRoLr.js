import{j as c}from"./jsx-runtime-BYYWji4R.js";import{af as _}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const U={title:"Components/RichTextEditor",component:_,argTypes:{size:{control:"select",options:["sm","md","lg"]},status:{control:"select",options:["default","error","success"]},label:{control:"text"},helpText:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"}},args:{size:"lg",status:"default",label:"Description",placeholder:"This is placeholder text that is multiline."}},e={},r={args:{label:"Update",defaultValue:"<div><b>Renewal confirmed.</b> The vendor accepted our terms — invoice due <i>Net 30</i>.</div>"}},s={render:I=>c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:["sm","md","lg"].map(l=>c.jsx(_,{...I,size:l,label:`Size: ${l}`},l))})},a={name:"With lead/trailing icons",args:{label:"Comment",leadingIcon:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":!0,children:[c.jsx("circle",{cx:"12",cy:"8",r:"4"}),c.jsx("path",{d:"M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"})]})}},t={name:"With prefix and suffix",args:{label:"Amount",prefix:"$",suffix:"USD",defaultValue:"15.00"}},o={name:"Error",args:{status:"error",helpText:"A comment is required"}},n={name:"Success",args:{status:"success",helpText:"Looks good",defaultValue:"Reviewed and approved."}},i={args:{disabled:!0,defaultValue:"This field can't be edited right now."}};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Update",
    defaultValue: "<div><b>Renewal confirmed.</b> The vendor accepted our terms — invoice due <i>Net 30</i>.</div>"
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,x,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      {(["sm", "md", "lg"] as const).map(size => <RichTextEditor key={size} {...args} size={size} label={\`Size: \${size}\`} />)}
    </div>
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var b,v,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With lead/trailing icons",
  args: {
    label: "Comment",
    leadingIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var W,E,w;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "With prefix and suffix",
  args: {
    label: "Amount",
    prefix: "$",
    suffix: "USD",
    defaultValue: "15.00"
  }
}`,...(w=(E=t.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var y,z,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Error",
  args: {
    status: "error",
    helpText: "A comment is required"
  }
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var R,j,V;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Success",
  args: {
    status: "success",
    helpText: "Looks good",
    defaultValue: "Reviewed and approved."
  }
}`,...(V=(j=n.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var k,C,A;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "This field can't be edited right now."
  }
}`,...(A=(C=i.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const $=["Default","WithContent","Sizes","WithIcons","WithPrefixAndSuffix","ErrorState","SuccessState","Disabled"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:i,ErrorState:o,Sizes:s,SuccessState:n,WithContent:r,WithIcons:a,WithPrefixAndSuffix:t,__namedExportsOrder:$,default:U},Symbol.toStringTag,{value:"Module"}));export{e as D,o as E,B as R,s as S,r as W,i as a,n as b,a as c,t as d};
