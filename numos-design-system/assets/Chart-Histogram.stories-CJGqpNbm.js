import{j as c}from"./jsx-runtime-BYYWji4R.js";import{X as m}from"./DiagramCell-BVBcLmyd.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import N from"./banknote-B6xn6vQX.js";import Y from"./user-CssntHaa.js";function Z(e){let r=e;return()=>(r=(r*1664525+1013904223)%4294967296,r/4294967296)}const ee=(()=>{const e=Z(7);return Array.from({length:240},(r,X)=>{const G=Math.sqrt(-2*Math.log(e()||1e-9))*Math.cos(2*Math.PI*e()),J=X%12===0?40+e()*60:0;return Math.round(82+G*16+J)})})(),re=e=>`$${Math.round(e)}K`,se={title:"Components/Chart-Histogram",component:m,argTypes:{values:{control:!1},icon:{control:!1},bins:{control:"select",options:["auto",6,12,"std"]},quantiles:{control:"select",options:[void 0,"quartiles","quintiles","deciles"]},shape:{control:"select",options:[void 0,"square","circle"]},fillWidth:{control:"boolean"},iconSize:{control:"radio",options:[16,24]}},args:{values:ee,itemLabel:"employees",formatValue:re,markers:["median"]},render:e=>c.jsx("div",{style:{width:"28rem"},children:c.jsx(m,{...e})})},s={},a={name:"Standard deviations",args:{bins:"std",markers:["mean"],shape:"circle"}},n={name:"Custom bins",args:{bins:[40,60,80,100,130,200],markers:["mean","median"],fillWidth:!0}},t={args:{quantiles:[1,25,50,75,99],icon:N,iconSize:24,gap:-8,unitValue:20,color:"var(--chart-3)",markers:[]}},l={args:{quantiles:"quintiles",unitValue:10,markers:[]}},d={args:{quantiles:"deciles",unitValue:10,markers:[]}},o={name:"With an icon",args:{icon:Y,bins:8,markers:["mean"]}},i={name:"Fill width",render:e=>c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-6)"},children:["square","circle"].map(r=>c.jsxs("div",{style:{width:"24rem"},children:[c.jsxs("p",{style:{margin:"0 0 var(--space-2)",font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},children:['shape="',r,'" fillWidth']}),c.jsx(m,{...e,shape:r,fillWidth:!0,bins:10})]},r))})};var p,u,h,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Equal-width bins chosen from the data, the median marked.",...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var b,v,y,S,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Standard deviations",
  args: {
    bins: "std",
    markers: ["mean"],
    shape: "circle"
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Bands one standard deviation wide either side of the mean, open-ended past ±2σ.",...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var q,W,x,j,C;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Custom bins",
  args: {
    bins: [40, 60, 80, 100, 130, 200],
    markers: ["mean", "median"],
    fillWidth: true
  }
}`,...(x=(W=n.parameters)==null?void 0:W.docs)==null?void 0:x.source},description:{story:"Custom bin edges — e.g. the company's pay bands. Values outside them count in the end bins.",...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var w,V,D,M,_;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    quantiles: [1, 25, 50, 75, 99],
    icon: Banknote,
    iconSize: 24,
    gap: -8,
    unitValue: 20,
    color: "var(--chart-3)",
    markers: []
  }
}`,...(D=(V=t.parameters)==null?void 0:V.docs)==null?void 0:D.source},description:{story:"The Figma reference: labor cost at five percentiles, in stacked banknotes, one per $10K.",...(_=(M=t.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};var F,B,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    quantiles: "quintiles",
    unitValue: 10,
    markers: []
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var P,z,A;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    quantiles: "deciles",
    unitValue: 10,
    markers: []
  }
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var E,I,K,O,Q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "With an icon",
  args: {
    icon: User,
    bins: 8,
    markers: ["mean"]
  }
}`,...(K=(I=o.parameters)==null?void 0:I.docs)==null?void 0:K.source},description:{story:"Any icon in place of a shape.",...(Q=(O=o.parameters)==null?void 0:O.docs)==null?void 0:Q.description}}};var T,$,L,R,U;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Fill width",
  render: args => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-6)"
  }}>
      {(["square", "circle"] as const).map(shape => <div key={shape} style={{
      width: "24rem"
    }}>
          <p style={{
        margin: "0 0 var(--space-2)",
        font: "var(--type-paragraph-xs-regular)",
        color: "var(--content-subtle)"
      }}>shape="{shape}" fillWidth</p>
          <HistogramChart {...args} shape={shape} fillWidth bins={10} />
        </div>)}
    </div>
}`,...(L=($=i.parameters)==null?void 0:$.docs)==null?void 0:L.source},description:{story:"`fillWidth`: each glyph a brick across its bin — squares become bars, circles pills.",...(U=(R=i.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};const ae=["Default","StandardDeviations","CustomBins","Percentiles","Quintiles","Deciles","WithIcon","FillWidth"],de=Object.freeze(Object.defineProperty({__proto__:null,CustomBins:n,Deciles:d,Default:s,FillWidth:i,Percentiles:t,Quintiles:l,StandardDeviations:a,WithIcon:o,__namedExportsOrder:ae,default:se},Symbol.toStringTag,{value:"Module"}));export{n as C,d as D,i as F,de as H,t as P,l as Q,a as S,o as W};
