import{j as e}from"./jsx-runtime-BYYWji4R.js";import{U as a}from"./DiagramCell-BVBcLmyd.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const D={title:"Components/Chart-Gauge",component:a,argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},mode:{control:"select",options:["negative-to-positive","positive-to-negative","info","positive","notice","negative"]},size:{control:"select",options:["xs","sm","md","xl"]},label:{control:"text"},showValue:{control:"boolean"}},args:{value:50,label:"CPU usage",mode:"negative-to-positive",size:"xl"}},s={},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end"},children:[e.jsx(a,{value:0,label:"Empty"}),e.jsx(a,{value:25,label:"Low"}),e.jsx(a,{value:50,label:"Medium"}),e.jsx(a,{value:75,label:"High"}),e.jsx(a,{value:100,label:"Complete"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end"},children:[e.jsx(a,{mode:"positive-to-negative",value:10,label:"Error rate"}),e.jsx(a,{mode:"positive-to-negative",value:40,label:"Error rate"}),e.jsx(a,{mode:"positive-to-negative",value:80,label:"Error rate"})]})},t={args:{mode:"info",value:40,label:"Signal"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end"},children:[e.jsx(a,{mode:"info",value:40,label:"info"}),e.jsx(a,{mode:"positive",value:40,label:"positive"}),e.jsx(a,{mode:"notice",value:40,label:"notice"}),e.jsx(a,{mode:"negative",value:40,label:"negative"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end"},children:[e.jsx(a,{size:"xs",value:65}),e.jsx(a,{size:"sm",value:65}),e.jsx(a,{size:"md",value:65,label:"Storage"}),e.jsx(a,{size:"xl",value:65,label:"Storage"})]})},d={args:{showValue:!1}},p={args:{label:void 0}},r={render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap",alignItems:"flex-end"},children:[0,-45,80].map(u=>e.jsx(a,{variant:"balance",value:u,label:"Balance"},u))})};var c,v,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(v=s.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var g,x,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-4)",
    alignItems: "flex-end"
  }}>
      <GaugeChart value={0} label="Empty" />
      <GaugeChart value={25} label="Low" />
      <GaugeChart value={50} label="Medium" />
      <GaugeChart value={75} label="High" />
      <GaugeChart value={100} label="Complete" />
    </div>
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,h,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-4)",
    alignItems: "flex-end"
  }}>
      <GaugeChart mode="positive-to-negative" value={10} label="Error rate" />
      <GaugeChart mode="positive-to-negative" value={40} label="Error rate" />
      <GaugeChart mode="positive-to-negative" value={80} label="Error rate" />
    </div>
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var y,j,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mode: "info",
    value: 40,
    label: "Signal"
  }
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var G,z,E;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-4)",
    alignItems: "flex-end"
  }}>
      <GaugeChart mode="info" value={40} label="info" />
      <GaugeChart mode="positive" value={40} label="positive" />
      <GaugeChart mode="notice" value={40} label="notice" />
      <GaugeChart mode="negative" value={40} label="negative" />
    </div>
}`,...(E=(z=n.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var I,w,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-4)",
    alignItems: "flex-end"
  }}>
      <GaugeChart size="xs" value={65} />
      <GaugeChart size="sm" value={65} />
      <GaugeChart size="md" value={65} label="Storage" />
      <GaugeChart size="xl" value={65} label="Storage" />
    </div>
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var W,T,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    showValue: false
  }
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var B,F,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,A,L,M,O;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    flexWrap: "wrap",
    alignItems: "flex-end"
  }}>
      {[0, -45, 80].map(value => <GaugeChart key={value} variant="balance" value={value} label="Balance" />)}
    </div>
}`,...(L=(A=r.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:"A center-zero gauge: 0 straight up, the zone the reading falls in at full color.",...(O=(M=r.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};const H=["Default","NegativeToPositive","PositiveToNegative","FixedColor","AllFixedColors","Sizes","WithoutValue","WithoutLabel","Balance"],J=Object.freeze(Object.defineProperty({__proto__:null,AllFixedColors:n,Balance:r,Default:s,FixedColor:t,NegativeToPositive:l,PositiveToNegative:o,Sizes:i,WithoutLabel:p,WithoutValue:d,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{n as A,r as B,J as C,t as F,l as N,o as P,i as S,p as W,d as a};
