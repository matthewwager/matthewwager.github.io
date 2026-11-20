import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a2 as le,a3 as d,b as we,d as Ce,c as Ae,m as y}from"./DiagramCell-Dfzt8eBQ.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import ve from"./arrow-right-CSI71RkN.js";const de=["brand","positive","notice","alt"],he=["topLeft","topRight","bottomLeft","bottomRight"],Se=["barChart","pieChart","areaChart","histogram","windingArrows","earthAndMoon"],h=(l,u)=>e.jsxs(e.Fragment,{children:[e.jsx(y,{variant:"primary",size:"lg",children:l}),e.jsx(y,{variant:"link",trailingIcon:e.jsx(ve,{size:16}),children:u})]}),xe=[{align:"start",accent:"brand",shape:"barChart",label:e.jsx(d,{accent:"brand",children:"Analyze"}),title:"Every entity, side by side.",description:"Compare spend, revenue and margin across entities and periods — no exports, no pivot tables.",actions:h("Open Analyze","See a sample report")},{align:"end",accent:"positive",shape:"pieChart",label:e.jsx(d,{accent:"positive",children:"Collect"}),title:"Know who owes what.",description:"Every open invoice by customer and age, with the follow-ups already drafted for the ones slipping.",actions:h("Open Collect","How collections work")},{align:"start",accent:"notice",shape:"windingArrows",label:e.jsx(d,{accent:"notice",children:"Forecast"}),title:"See cash before it moves.",description:"Scheduled payments, expected receipts and what's still unscheduled, rolled into the weeks ahead.",actions:h("Open Forecast","See the forecast model")},{align:"end",accent:"alt",shape:"earthAndMoon",label:e.jsx(d,{accent:"alt",children:"Close"}),title:"Find the outliers first.",description:"Variance across every account, at a glance — the few that need a look stand out before review does.",actions:h("Open Close","How variance review works")}];function ke({corners:l,topLeftColor:u,topRightColor:ge,bottomLeftColor:me,bottomRightColor:ue,background:g,carousel:be,...b}){const fe={topLeft:u,topRight:ge,bottomLeft:me,bottomRight:ue},ye=Object.fromEntries(l.map(f=>[f,fe[f]]));return e.jsx(le,{...b,glow:ye,shape:g==="shape"?b.shape:void 0,particles:g==="particles",graphic:g==="app icon grid"?e.jsx(Ce,{}):g==="app icon cubes"?e.jsx(Ae,{}):void 0,icon:e.jsx(we,{app:"pay",size:"lg"}),label:e.jsx(d,{accent:b.accent,children:"Accounts Payable"}),title:e.jsxs(e.Fragment,{children:["Bills paid on time.",e.jsx("br",{}),"Books that reconcile themselves."]}),description:"Numos Pay reads every invoice as it lands, routes it for approval, schedules payment by its due date, and matches it in NetSuite — so nothing slips past due, and nothing waits for month-end.",actions:h("Set up Pay","Explore the demo"),slides:be?xe:void 0,"aria-label":"Numos, app by app"})}const m=l=>({control:"inline-radio",options:de,name:`${l} color`,table:{category:"Glow"}}),je={title:"Components/Hero",component:le,parameters:{layout:"padded",noThemeSplit:!0},render:ke,argTypes:{align:{control:"inline-radio",options:["center","start","end"],description:"Where the text sits: centered, or in the start / end half.",table:{category:"Layout"}},corners:{control:"check",options:he,description:"The corners with a glow.",table:{category:"Glow"}},topLeftColor:m("topLeft"),topRightColor:m("topRight"),bottomLeftColor:m("bottomLeft"),bottomRightColor:m("bottomRight"),background:{control:"select",options:["none","particles","shape","app icon grid","app icon cubes"],description:"Behind the content: the particle motif drifting (`particles`), particles formed into a chart shape (`shape`), or a `graphic`.",table:{category:"Background"}},shape:{control:"select",options:Se,if:{arg:"background",eq:"shape"},table:{category:"Background"}},accent:{control:"inline-radio",options:de,description:"The shape's color, the label's, and a carousel's active dot.",table:{category:"Background"}},carousel:{control:"boolean",description:"`slides`: four pitches in turn, each with its own alignment, accent and shape.",table:{category:"Layout"}},titleAs:{control:"inline-radio",options:["h1","h2"],table:{category:"Layout"}},theme:{control:"inline-radio",options:["dark","inherit"],table:{category:"Layout"}}},args:{align:"center",corners:["topRight"],topLeftColor:"notice",topRightColor:"brand",bottomLeftColor:"positive",bottomRightColor:"alt",background:"none",shape:"barChart",accent:"brand",carousel:!1,titleAs:"h1",theme:"dark"}},t={},o={name:"Two glows",args:{corners:["topRight","bottomLeft"]}},r={name:"Four corners",args:{corners:he}},a={name:"With particles",args:{background:"particles"}},s={name:"Aligned, with a shape",args:{align:"start",background:"shape",shape:"barChart",accent:"positive",corners:[]}},n={name:"Aligned to the end",args:{align:"end",background:"shape",shape:"pieChart",accent:"alt",corners:[]}},i={name:"App icon grid",args:{background:"app icon grid",corners:[]}},c={name:"App icon cubes",args:{background:"app icon cubes"}},p={args:{carousel:!0,corners:[]}};var w,C,A,v,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(A=(C=t.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:"As in Figma: a dark panel, centered, a dithered glow from the top right.",...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var x,k,j,R,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Two glows",
  args: {
    corners: ["topRight", "bottomLeft"]
  }
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source},description:{story:'Two glows: brand blue from the top right, green from the bottom left (`glow="both"`).',...(L=(R=o.parameters)==null?void 0:R.docs)==null?void 0:L.description}}};var T,E,F,I,O;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Four corners",
  args: {
    corners: CORNERS
  }
}`,...(F=(E=r.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"A glow in every corner, each its own accent.",...(O=(I=r.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var H,G,W,B,P;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With particles",
  args: {
    background: "particles"
  }
}`,...(W=(G=a.parameters)==null?void 0:G.docs)==null?void 0:W.source},description:{story:"The brand's particle motif behind it — gathering into a spiral, a wave, a galaxy — faded where the text is.",...(P=(B=a.parameters)==null?void 0:B.docs)==null?void 0:P.description}}};var z,N,_,D,M;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Aligned, with a shape",
  args: {
    align: "start",
    background: "shape",
    shape: "barChart",
    accent: "positive",
    corners: []
  }
}`,...(_=(N=s.parameters)==null?void 0:N.docs)==null?void 0:_.source},description:{story:"The text in the start half; across from it, particles formed into a chart shape in the accent.",...(M=(D=s.parameters)==null?void 0:D.docs)==null?void 0:M.description}}};var q,K,V,$,J;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Aligned to the end",
  args: {
    align: "end",
    background: "shape",
    shape: "pieChart",
    accent: "alt",
    corners: []
  }
}`,...(V=(K=n.parameters)==null?void 0:K.docs)==null?void 0:V.source},description:{story:"To the end: the text right-aligned, the link before the button so the button's at the edge.",...(J=($=n.parameters)==null?void 0:$.docs)==null?void 0:J.description}}};var Q,U,X,Y,Z;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "App icon grid",
  args: {
    background: "app icon grid",
    corners: []
  }
}`,...(X=(U=i.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:"`graphic`: every app's icon, tiles turning over — and on hover (`<AppIconFlipGrid>`).",...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,te,oe,re,ae;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "App icon cubes",
  args: {
    background: "app icon cubes"
  }
}`,...(oe=(te=c.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"`graphic`: cubes of app icons, tumbling (`<AppIconCubes>`).",...(ae=(re=c.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var se,ne,ie,ce,pe;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    carousel: true,
    corners: []
  }
}`,...(ie=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"`slides`: four pitches in turn, sides alternating — the particles scatter and form each slide's shape in its accent, then its words fade in.",...(pe=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};const Re=["Default","TwoGlows","FourCorners","WithParticles","AlignedWithShape","AlignedEnd","AppIconGrid","AppIconCubesStory","Carousel"],Oe=Object.freeze(Object.defineProperty({__proto__:null,AlignedEnd:n,AlignedWithShape:s,AppIconCubesStory:c,AppIconGrid:i,Carousel:p,Default:t,FourCorners:r,TwoGlows:o,WithParticles:a,__namedExportsOrder:Re,default:je},Symbol.toStringTag,{value:"Module"}));export{n as A,p as C,r as F,Oe as H,o as T,a as W,s as a,c as b,i as c};
