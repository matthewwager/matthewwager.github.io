import{j as e}from"./jsx-runtime-BYYWji4R.js";import{f as s}from"./DiagramCell-BoDqalDD.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import k from"./sparkles-BGkPd9R1.js";const z={title:"Components/Banner",component:s,argTypes:{status:{control:"select",options:["neutral","positive","negative","notice","info"]},title:{control:"text"},description:{control:"text"},dismissible:{control:"boolean"}},args:{status:"neutral",title:"Title",description:"Description"},render:_=>e.jsx("div",{style:{width:"16rem"},children:e.jsx(s,{..._})})},t={},i={args:{status:"positive",title:"Payment received",description:"Your invoice has been paid in full."}},r={args:{status:"negative",title:"Payment failed",description:"Your card was declined."}},n={args:{status:"notice",title:"Trial ending soon",description:"Your trial ends in 3 days."}},o={args:{status:"info",title:"New feature",description:"Dark mode is now available in settings."}},a={args:{dismissible:!1}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)",width:"16rem"},children:[e.jsx(s,{status:"neutral",title:"Neutral",description:"Description"}),e.jsx(s,{status:"positive",title:"Positive",description:"Description"}),e.jsx(s,{status:"negative",title:"Negative",description:"Description"}),e.jsx(s,{status:"notice",title:"Notice",description:"Description"}),e.jsx(s,{status:"info",title:"Info",description:"Description"})]})},d={name:"Custom icon",render:()=>e.jsx(s,{status:"info",icon:e.jsx(k,{size:16}),title:"Summary & Analysis",description:"An urgent payment request was received for an outstanding consulting invoice. The sender's domain differs from the purported vendor's, so the request requires independent verification before approval.",dismissible:!1,role:"note"})};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,f,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: "positive",
    title: "Payment received",
    description: "Your invoice has been paid in full."
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,x,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    status: "negative",
    title: "Payment failed",
    description: "Your card was declined."
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,S,b;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    status: "notice",
    title: "Trial ending soon",
    description: "Your trial ends in 3 days."
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,j,N;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: "info",
    title: "New feature",
    description: "Dark mode is now available in settings."
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,B,P;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    dismissible: false
  }
}`,...(P=(B=a.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var A,T,q;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-2)",
    width: "16rem"
  }}>
      <Banner status="neutral" title="Neutral" description="Description" />
      <Banner status="positive" title="Positive" description="Description" />
      <Banner status="negative" title="Negative" description="Description" />
      <Banner status="notice" title="Notice" description="Description" />
      <Banner status="info" title="Info" description="Description" />
    </div>
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var C,I,Y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Custom icon",
  render: () => <Banner status="info" icon={<Sparkles size={16} />} title="Summary & Analysis" description="An urgent payment request was received for an outstanding consulting invoice. The sender's domain differs from the purported vendor's, so the request requires independent verification before approval." dismissible={false} role="note" />
}`,...(Y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};const O=["Default","Positive","Negative","Notice","Info","WithoutDismiss","AllStatuses","CustomIcon"],G=Object.freeze(Object.defineProperty({__proto__:null,AllStatuses:c,CustomIcon:d,Default:t,Info:o,Negative:r,Notice:n,Positive:i,WithoutDismiss:a,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{c as A,G as B,d as C};
