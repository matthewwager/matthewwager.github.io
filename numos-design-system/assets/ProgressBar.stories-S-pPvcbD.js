import{j as e}from"./jsx-runtime-BYYWji4R.js";import{ab as a}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const K={title:"Components/ProgressBar",component:a,argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},mode:{control:"select",options:["negative-to-positive","positive-to-negative","info","positive","notice","negative"]},label:{control:"text"},showValue:{control:"boolean"},inline:{control:"boolean"}},args:{value:50,label:"Profile completion",mode:"negative-to-positive"},render:v=>e.jsx("div",{style:{width:"16rem"},children:e.jsx(a,{...v})})},r={},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",width:"16rem"},children:[e.jsx(a,{value:0,label:"Empty"}),e.jsx(a,{value:25,label:"Low"}),e.jsx(a,{value:50,label:"Medium"}),e.jsx(a,{value:75,label:"High"}),e.jsx(a,{value:100,label:"Complete"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",width:"16rem"},children:[e.jsx(a,{mode:"positive-to-negative",value:10,label:"Error rate"}),e.jsx(a,{mode:"positive-to-negative",value:40,label:"Error rate"}),e.jsx(a,{mode:"positive-to-negative",value:80,label:"Error rate"})]})},t={args:{mode:"info",value:40,label:"Uploading…"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",width:"16rem"},children:[e.jsx(a,{mode:"info",value:40,label:"info"}),e.jsx(a,{mode:"positive",value:40,label:"positive"}),e.jsx(a,{mode:"notice",value:40,label:"notice"}),e.jsx(a,{mode:"negative",value:40,label:"negative"})]})},n={args:{inline:!0,value:62,label:"Storage"}},i={args:{showValue:!1}},d={args:{label:void 0}},J=[{value:9,status:"negative",label:"Blocked"},{value:13,status:"info",label:"In progress"},{value:25,status:"notice",label:"In review"},{value:25,status:"positive",label:"Done"}],c={args:{label:"Status",segments:[...J]}},u={render:()=>e.jsx("div",{style:{width:"16rem"},children:e.jsx(a,{label:"Invoices",segments:[{value:20,status:"negative",label:"Overdue"},{value:30,status:"notice",label:"Due soon"},{value:50,status:"positive",label:"Paid"}]})})},m={args:{inline:!0,label:"Status",segments:[...J]},render:v=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(a,{...v})})};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,f,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)",
    width: "16rem"
  }}>
      <ProgressBar value={0} label="Empty" />
      <ProgressBar value={25} label="Low" />
      <ProgressBar value={50} label="Medium" />
      <ProgressBar value={75} label="High" />
      <ProgressBar value={100} label="Complete" />
    </div>
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,P,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)",
    width: "16rem"
  }}>
      <ProgressBar mode="positive-to-negative" value={10} label="Error rate" />
      <ProgressBar mode="positive-to-negative" value={40} label="Error rate" />
      <ProgressBar mode="positive-to-negative" value={80} label="Error rate" />
    </div>
}`,...(j=(P=o.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var y,B,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mode: "info",
    value: 40,
    label: "Uploading…"
  }
}`,...(w=(B=t.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var D,E,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)",
    width: "16rem"
  }}>
      <ProgressBar mode="info" value={40} label="info" />
      <ProgressBar mode="positive" value={40} label="positive" />
      <ProgressBar mode="notice" value={40} label="notice" />
      <ProgressBar mode="negative" value={40} label="negative" />
    </div>
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var C,F,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    inline: true,
    value: 62,
    label: "Storage"
  }
}`,...(T=(F=n.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var _,N,O;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showValue: false
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,W,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(L=(W=d.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var A,M,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Status",
    segments: [...statusSegments]
  }
}`,...(H=(M=c.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var U,k,z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "16rem"
  }}>
      <ProgressBar label="Invoices" segments={[{
      value: 20,
      status: "negative",
      label: "Overdue"
    }, {
      value: 30,
      status: "notice",
      label: "Due soon"
    }, {
      value: 50,
      status: "positive",
      label: "Paid"
    }]} />
    </div>
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var R,q,G;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    inline: true,
    label: "Status",
    segments: [...statusSegments]
  },
  render: args => <div style={{
    width: "24rem"
  }}>
      <ProgressBar {...args} />
    </div>
}`,...(G=(q=m.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Q=["Default","NegativeToPositive","PositiveToNegative","FixedColor","AllFixedColors","Inline","WithoutValue","WithoutLabel","Segmented","SegmentedFull","SegmentedInline"],ee=Object.freeze(Object.defineProperty({__proto__:null,AllFixedColors:l,Default:r,FixedColor:t,Inline:n,NegativeToPositive:s,PositiveToNegative:o,Segmented:c,SegmentedFull:u,SegmentedInline:m,WithoutLabel:d,WithoutValue:i,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{l as A,t as F,n as I,s as N,o as P,c as S,d as W,ee as a,u as b,m as c,i as d};
