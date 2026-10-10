import{j as e}from"./jsx-runtime-BYYWji4R.js";import{f as t}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const I={title:"Components/Banner",component:t,argTypes:{status:{control:"select",options:["neutral","positive","negative","notice","info"]},title:{control:"text"},description:{control:"text"},dismissible:{control:"boolean"}},args:{status:"neutral",title:"Title",description:"Description"},render:T=>e.jsx("div",{style:{width:"16rem"},children:e.jsx(t,{...T})})},s={},i={args:{status:"positive",title:"Payment received",description:"Your invoice has been paid in full."}},r={args:{status:"negative",title:"Payment failed",description:"Your card was declined."}},n={args:{status:"notice",title:"Trial ending soon",description:"Your trial ends in 3 days."}},a={args:{status:"info",title:"New feature",description:"Dark mode is now available in settings."}},o={args:{dismissible:!1}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-2)",width:"16rem"},children:[e.jsx(t,{status:"neutral",title:"Neutral",description:"Description"}),e.jsx(t,{status:"positive",title:"Positive",description:"Description"}),e.jsx(t,{status:"negative",title:"Negative",description:"Description"}),e.jsx(t,{status:"notice",title:"Notice",description:"Description"}),e.jsx(t,{status:"info",title:"Info",description:"Description"})]})};var l,p,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "positive",
    title: "Payment received",
    description: "Your invoice has been paid in full."
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,f,D;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    status: "negative",
    title: "Payment failed",
    description: "Your card was declined."
  }
}`,...(D=(f=r.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var x,y,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "notice",
    title: "Trial ending soon",
    description: "Your trial ends in 3 days."
  }
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var N,S,b;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: "info",
    title: "New feature",
    description: "Dark mode is now available in settings."
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,w,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    dismissible: false
  }
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var P,Y,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const A=["Default","Positive","Negative","Notice","Info","WithoutDismiss","AllStatuses"],z=Object.freeze(Object.defineProperty({__proto__:null,AllStatuses:c,Default:s,Info:a,Negative:r,Notice:n,Positive:i,WithoutDismiss:o,__namedExportsOrder:A,default:I},Symbol.toStringTag,{value:"Module"}));export{c as A,z as B};
