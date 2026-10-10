import{j as e}from"./jsx-runtime-BYYWji4R.js";import{S as a}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const V={title:"Components/Chart-Gauge",component:a,argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},mode:{control:"select",options:["negative-to-positive","positive-to-negative","info","positive","notice","negative"]},size:{control:"select",options:["xs","sm","md","xl"]},label:{control:"text"},showValue:{control:"boolean"}},args:{value:50,label:"CPU usage",mode:"negative-to-positive",size:"xl"}},s={},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end"},children:[e.jsx(a,{value:0,label:"Empty"}),e.jsx(a,{value:25,label:"Low"}),e.jsx(a,{value:50,label:"Medium"}),e.jsx(a,{value:75,label:"High"}),e.jsx(a,{value:100,label:"Complete"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end"},children:[e.jsx(a,{mode:"positive-to-negative",value:10,label:"Error rate"}),e.jsx(a,{mode:"positive-to-negative",value:40,label:"Error rate"}),e.jsx(a,{mode:"positive-to-negative",value:80,label:"Error rate"})]})},o={args:{mode:"info",value:40,label:"Signal"}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end"},children:[e.jsx(a,{mode:"info",value:40,label:"info"}),e.jsx(a,{mode:"positive",value:40,label:"positive"}),e.jsx(a,{mode:"notice",value:40,label:"notice"}),e.jsx(a,{mode:"negative",value:40,label:"negative"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end"},children:[e.jsx(a,{size:"xs",value:65}),e.jsx(a,{size:"sm",value:65}),e.jsx(a,{size:"md",value:65,label:"Storage"}),e.jsx(a,{size:"xl",value:65,label:"Storage"})]})},n={args:{showValue:!1}},d={args:{label:void 0}};var u,v,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(p=(v=s.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var c,m,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,b,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-4)",
    alignItems: "flex-end"
  }}>
      <GaugeChart mode="positive-to-negative" value={10} label="Error rate" />
      <GaugeChart mode="positive-to-negative" value={40} label="Error rate" />
      <GaugeChart mode="positive-to-negative" value={80} label="Error rate" />
    </div>
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,C,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mode: "info",
    value: 40,
    label: "Signal"
  }
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var y,S,G;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(G=(S=t.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var z,E,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,T,_;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    showValue: false
  }
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,F,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(N=(F=d.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const W=["Default","NegativeToPositive","PositiveToNegative","FixedColor","AllFixedColors","Sizes","WithoutValue","WithoutLabel"],D=Object.freeze(Object.defineProperty({__proto__:null,AllFixedColors:t,Default:s,FixedColor:o,NegativeToPositive:r,PositiveToNegative:l,Sizes:i,WithoutLabel:d,WithoutValue:n,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{t as A,D as C,o as F,r as N,l as P,i as S,d as W,n as a};
