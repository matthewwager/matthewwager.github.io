import{j as r}from"./jsx-runtime-BYYWji4R.js";import{r as ae}from"./index-ClcD9ViR.js";import{t as h}from"./DiagramCell-Dfzt8eBQ.js";import"./index-Brl4xq4Y.js";const Z=["var(--chart-1)","var(--chart-2)","var(--chart-3)","var(--chart-4)","var(--chart-5)"];function se({label:e,color:a}){return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:216,background:a,color:"var(--content-emphasis-inverse)",font:"var(--type-heading-m)"},children:e})}const v=Z.map((e,a)=>r.jsx(se,{label:`Slide ${a+1}`,color:e},a));function oe({label:e,color:a,height:re}){return r.jsx("div",{style:{display:"flex",alignItems:"flex-end",height:re,boxSizing:"border-box",padding:"var(--space-4)",background:a,color:"var(--content-emphasis-inverse)",font:"var(--type-heading-m)"},children:e})}const ee=Z.map((e,a)=>r.jsx(oe,{label:`Photo ${a+1}`,color:e,height:160+a*40},a)),te={title:"Components/Carousel",component:h,parameters:{layout:"padded"},argTypes:{slides:{control:!1},itemsPerView:{control:{type:"number",min:1,max:5,step:1}},loop:{control:"boolean"},showButtons:{control:"boolean"},buttonPlacement:{control:"select",options:["perimeter","overlay"]},showDots:{control:"boolean"},dotPlacement:{control:"select",options:["perimeter","overlay"]}},args:{slides:v,itemsPerView:1,loop:!1,showButtons:!0,buttonPlacement:"perimeter",showDots:!0,dotPlacement:"perimeter"}};function s(e){return r.jsx("div",{style:{width:480},children:r.jsx(h,{...e})})}const t={render:e=>r.jsx(s,{...e})},n={name:"loop (arrows never disable)",args:{loop:!0},render:e=>r.jsx(s,{...e})},i={name:"Dots hidden",args:{showDots:!1},render:e=>r.jsx(s,{...e})},l={name:"Multiple slides in view (itemsPerView)",args:{itemsPerView:3},render:e=>r.jsx(s,{...e})},d={name:"Buttons hidden (swipe/drag only — mobile-style)",args:{showButtons:!1},render:e=>r.jsx(s,{...e})},c={name:"Overlay buttons + dots (full-bleed content)",args:{slides:ee,buttonPlacement:"overlay",dotPlacement:"overlay"},render:e=>r.jsx(s,{...e})},m={name:"Height follows the active slide",args:{slides:ee},render:e=>r.jsx(s,{...e})},p={name:"Two slides",args:{slides:v.slice(0,2)},render:e=>r.jsx(s,{...e})},u={name:"One slide (dots hidden automatically, both arrows disabled)",args:{slides:v.slice(0,1)},render:e=>r.jsx(s,{...e})};function ne(){const[e,a]=ae.useState(0);return r.jsxs("div",{style:{width:480,display:"flex",flexDirection:"column",gap:"var(--space-3)"},children:[r.jsx(h,{slides:v,index:e,onIndexChange:a}),r.jsxs("p",{style:{font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:["Current slide: ",e+1]})]})}const g={name:"Controlled index",render:()=>r.jsx(ne,{})},y=["var(--brand-400)","var(--green-700)","var(--yellow-700)","var(--magenta-600)"],ie=["Every entity, side by side.","Know who owes what.","See cash before it moves.","Find the outliers first."],o={name:"Fade, playing on its own, with a backdrop",render:()=>r.jsx("div",{"data-theme":"dark",style:{width:560,borderRadius:"var(--radius-md)",overflow:"hidden",background:"var(--background-default)"},children:r.jsx(h,{"aria-label":"Pitches",transition:"fade",autoPlay:4e3,fadeInDelay:300,showButtons:!1,dotPlacement:"overlay",accent:e=>y[e],backdrop:e=>r.jsx("div",{style:{position:"absolute",inset:0,background:`radial-gradient(circle at ${e%2===0?"80%":"20%"} 50%, color-mix(in srgb, ${y[e]} 45%, transparent), transparent 55%)`,transition:"background 600ms"}}),slides:ie.map((e,a)=>r.jsx("div",{style:{display:"flex",justifyContent:a%2===0?"flex-start":"flex-end",padding:"var(--space-8) var(--space-6)",minHeight:220},children:r.jsx("p",{style:{margin:0,maxWidth:240,font:"var(--type-heading-xl)",color:"var(--content-emphasis)",textAlign:a%2===0?"left":"right"},children:e})},e))})})};var f,b,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <CarouselDemo {...args} />
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,S,C;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "loop (arrows never disable)",
  args: {
    loop: true
  },
  render: args => <CarouselDemo {...args} />
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,j,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Dots hidden",
  args: {
    showDots: false
  },
  render: args => <CarouselDemo {...args} />
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var I,k,E;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Multiple slides in view (itemsPerView)",
  args: {
    itemsPerView: 3
  },
  render: args => <CarouselDemo {...args} />
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var H,T,A;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Buttons hidden (swipe/drag only — mobile-style)",
  args: {
    showButtons: false
  },
  render: args => <CarouselDemo {...args} />
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var O,_,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Overlay buttons + dots (full-bleed content)",
  args: {
    slides: VARYING_HEIGHT_SLIDES,
    buttonPlacement: "overlay",
    dotPlacement: "overlay"
  },
  render: args => <CarouselDemo {...args} />
}`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var L,V,N;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Height follows the active slide",
  args: {
    slides: VARYING_HEIGHT_SLIDES
  },
  render: args => <CarouselDemo {...args} />
}`,...(N=(V=m.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var R,G,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Two slides",
  args: {
    slides: SLIDES.slice(0, 2)
  },
  render: args => <CarouselDemo {...args} />
}`,...(M=(G=p.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var $,F,Y;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "One slide (dots hidden automatically, both arrows disabled)",
  args: {
    slides: SLIDES.slice(0, 1)
  },
  render: args => <CarouselDemo {...args} />
}`,...(Y=(F=u.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var z,W,K;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Controlled index",
  render: () => <ControlledDemo />
}`,...(K=(W=g.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var q,J,Q,U,X;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Fade, playing on its own, with a backdrop",
  render: () => <div data-theme="dark" style={{
    width: 560,
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
    background: "var(--background-default)"
  }}>
      <Carousel aria-label="Pitches" transition="fade" autoPlay={4000} fadeInDelay={300} showButtons={false} dotPlacement="overlay" accent={i => ACCENTS[i]!} backdrop={i => <div style={{
      position: "absolute",
      inset: 0,
      background: \`radial-gradient(circle at \${i % 2 === 0 ? "80%" : "20%"} 50%, color-mix(in srgb, \${ACCENTS[i]} 45%, transparent), transparent 55%)\`,
      transition: "background 600ms"
    }} />} slides={PITCHES.map((pitch, i) => <div key={pitch} style={{
      display: "flex",
      justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
      padding: "var(--space-8) var(--space-6)",
      minHeight: 220
    }}>
            <p style={{
        margin: 0,
        maxWidth: 240,
        font: "var(--type-heading-xl)",
        color: "var(--content-emphasis)",
        textAlign: i % 2 === 0 ? "left" : "right"
      }}>{pitch}</p>
          </div>)} />
    </div>
}`,...(Q=(J=o.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"`transition=\"fade\"` with `autoPlay`, a `backdrop` and an `accent`: the\nslides stacked in place, fading from one to the next on their own every\n4s (pause button by the dots; held while hovered or focused), one\nbackdrop behind them all that changes with each — here a glow in the\nslide's accent, moving side to side; in the Laboratory's rotating hero,\nparticles flying from one chart into the next. The dot takes the accent.",...(X=(U=o.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};const le=["Default","Loop","NoDots","MultipleItemsPerView","ButtonsHidden","OverlayControls","AutoHeight","TwoSlides","SingleSlide","Controlled","FadeAutoPlay"],ue=Object.freeze(Object.defineProperty({__proto__:null,AutoHeight:m,ButtonsHidden:d,Controlled:g,Default:t,FadeAutoPlay:o,Loop:n,MultipleItemsPerView:l,NoDots:i,OverlayControls:c,SingleSlide:u,TwoSlides:p,__namedExportsOrder:le,default:te},Symbol.toStringTag,{value:"Module"}));export{m as A,d as B,ue as C,t as D,n as L,l as M,i as N,c as O,u as S,p as T,g as a};
