import{j as r}from"./jsx-runtime-BYYWji4R.js";import{r as Q}from"./index-ClcD9ViR.js";import{o as h}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const F=["var(--chart-1)","var(--chart-2)","var(--chart-3)","var(--chart-4)","var(--chart-5)"];function U({label:e,color:s}){return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:216,background:s,color:"var(--content-emphasis-inverse)",font:"var(--type-heading-m)"},children:e})}const g=F.map((e,s)=>r.jsx(U,{label:`Slide ${s+1}`,color:e},s));function W({label:e,color:s,height:K}){return r.jsx("div",{style:{display:"flex",alignItems:"flex-end",height:K,boxSizing:"border-box",padding:"var(--space-4)",background:s,color:"var(--content-emphasis-inverse)",font:"var(--type-heading-m)"},children:e})}const J=F.map((e,s)=>r.jsx(W,{label:`Photo ${s+1}`,color:e,height:160+s*40},s)),X={title:"Components/Carousel",component:h,parameters:{layout:"padded"},argTypes:{slides:{control:!1},itemsPerView:{control:{type:"number",min:1,max:5,step:1}},loop:{control:"boolean"},showButtons:{control:"boolean"},buttonPlacement:{control:"select",options:["perimeter","overlay"]},showDots:{control:"boolean"},dotPlacement:{control:"select",options:["perimeter","overlay"]}},args:{slides:g,itemsPerView:1,loop:!1,showButtons:!0,buttonPlacement:"perimeter",showDots:!0,dotPlacement:"perimeter"}};function o(e){return r.jsx("div",{style:{width:480},children:r.jsx(h,{...e})})}const a={render:e=>r.jsx(o,{...e})},t={name:"loop (arrows never disable)",args:{loop:!0},render:e=>r.jsx(o,{...e})},n={name:"Dots hidden",args:{showDots:!1},render:e=>r.jsx(o,{...e})},l={name:"Multiple slides in view (itemsPerView)",args:{itemsPerView:3},render:e=>r.jsx(o,{...e})},d={name:"Buttons hidden (swipe/drag only — mobile-style)",args:{showButtons:!1},render:e=>r.jsx(o,{...e})},i={name:"Overlay buttons + dots (full-bleed content)",args:{slides:J,buttonPlacement:"overlay",dotPlacement:"overlay"},render:e=>r.jsx(o,{...e})},c={name:"Height follows the active slide",args:{slides:J},render:e=>r.jsx(o,{...e})},m={name:"Two slides",args:{slides:g.slice(0,2)},render:e=>r.jsx(o,{...e})},u={name:"One slide (dots hidden automatically, both arrows disabled)",args:{slides:g.slice(0,1)},render:e=>r.jsx(o,{...e})};function Z(){const[e,s]=Q.useState(0);return r.jsxs("div",{style:{width:480,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[r.jsx(h,{slides:g,index:e,onIndexChange:s}),r.jsxs("p",{style:{font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["Current slide: ",e+1]})]})}const p={name:"Controlled index",render:()=>r.jsx(Z,{})};var S,x,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <CarouselDemo {...args} />
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,w,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "loop (arrows never disable)",
  args: {
    loop: true
  },
  render: args => <CarouselDemo {...args} />
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var f,D,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Dots hidden",
  args: {
    showDots: false
  },
  render: args => <CarouselDemo {...args} />
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var j,P,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Multiple slides in view (itemsPerView)",
  args: {
    itemsPerView: 3
  },
  render: args => <CarouselDemo {...args} />
}`,...(I=(P=l.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var E,H,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Buttons hidden (swipe/drag only — mobile-style)",
  args: {
    showButtons: false
  },
  render: args => <CarouselDemo {...args} />
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var _,V,L;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Overlay buttons + dots (full-bleed content)",
  args: {
    slides: VARYING_HEIGHT_SLIDES,
    buttonPlacement: "overlay",
    dotPlacement: "overlay"
  },
  render: args => <CarouselDemo {...args} />
}`,...(L=(V=i.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var T,B,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Height follows the active slide",
  args: {
    slides: VARYING_HEIGHT_SLIDES
  },
  render: args => <CarouselDemo {...args} />
}`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var G,M,N;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Two slides",
  args: {
    slides: SLIDES.slice(0, 2)
  },
  render: args => <CarouselDemo {...args} />
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var R,Y,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "One slide (dots hidden automatically, both arrows disabled)",
  args: {
    slides: SLIDES.slice(0, 1)
  },
  render: args => <CarouselDemo {...args} />
}`,...(k=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:k.source}}};var z,$,q;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Controlled index",
  render: () => <ControlledDemo />
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const ee=["Default","Loop","NoDots","MultipleItemsPerView","ButtonsHidden","OverlayControls","AutoHeight","TwoSlides","SingleSlide","Controlled"],te=Object.freeze(Object.defineProperty({__proto__:null,AutoHeight:c,ButtonsHidden:d,Controlled:p,Default:a,Loop:t,MultipleItemsPerView:l,NoDots:n,OverlayControls:i,SingleSlide:u,TwoSlides:m,__namedExportsOrder:ee,default:X},Symbol.toStringTag,{value:"Module"}));export{c as A,d as B,te as C,a as D,t as L,l as M,n as N,i as O,u as S,m as T,p as a};
