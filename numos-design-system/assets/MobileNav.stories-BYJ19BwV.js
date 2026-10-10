import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a0 as s,a6 as d,a5 as r,a7 as E,G as t}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import g from"./square-check-big-D0--LuaP.js";import v from"./credit-card-eje3g-yY.js";import T from"./lightbulb-CPIyNY1X.js";import C from"./receipt-STmIF1Op.js";import S from"./activity-DoVuY_Pe.js";import W from"./chart-column-CZtiMpn9.js";import b from"./message-circle-IvCFfBmD.js";import w from"./mail-WW_jGw0C.js";import y from"./workflow-DuG2DCt7.js";import _ from"./bell-dJEDpyJq.js";import k from"./settings-5LyT_Gvo.js";import z from"./log-out-K7g2kBzm.js";const O={title:"Components/MobileNav",component:s,parameters:{layout:"padded"}},a={width:"24rem",maxWidth:"100%"},c=e.jsxs(e.Fragment,{children:[e.jsxs(d,{grow:!0,children:[e.jsx(r,{icon:e.jsx(g,{size:24}),href:"#tasks",children:"Tasks"}),e.jsx(r,{icon:e.jsx(v,{size:24}),href:"#reconciliations",children:"Reconciliations"}),e.jsx(r,{icon:e.jsx(T,{size:24}),href:"#transactions",children:"Transactions"}),e.jsx(r,{icon:e.jsx(C,{size:24}),href:"#accruals",selected:!0,children:"Accruals"}),e.jsx(r,{icon:e.jsx(S,{size:24}),href:"#variance",children:"Variance"}),e.jsx(r,{icon:e.jsx(W,{size:24}),href:"#reports",children:"Reports"}),e.jsx(r,{icon:e.jsx(b,{size:24}),href:"#chat",children:"Chat"}),e.jsx(r,{icon:e.jsx(w,{size:24}),href:"#helpdesk",children:"Helpdesk"}),e.jsx(r,{icon:e.jsx(y,{size:24}),href:"#workflows",children:"Workflows"})]}),e.jsxs(d,{children:[e.jsxs(E,{name:"Matthew Wager",children:[e.jsx(t,{children:"Profile"}),e.jsx(t,{children:"Preferences"}),e.jsx(t,{children:"Sign out"})]}),e.jsx(r,{icon:e.jsx(_,{size:24}),children:"Notifications"}),e.jsx(r,{icon:e.jsx(k,{size:24}),children:"Settings"}),e.jsx(r,{icon:e.jsx(z,{size:24}),children:"Sign Out"})]})]}),M=e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Profile"}),e.jsx(t,{children:"Preferences"}),e.jsx(t,{children:"Sign out"})]}),o={render:()=>e.jsx("div",{style:a,children:e.jsx(s,{name:"Matthew Wager",accountMenu:M,onNotificationsClick:()=>{},children:c})})},n={name:"Expanded (open by default)",parameters:{noThemeSplit:!0},render:()=>e.jsx("div",{style:a,children:e.jsx(s,{name:"Matthew Wager",accountMenu:M,onNotificationsClick:()=>{},defaultExpanded:!0,children:c})})},i={name:"Without accountMenu",parameters:{noThemeSplit:!0},render:()=>e.jsx("div",{style:a,children:e.jsx(s,{name:"Matthew Wager",defaultExpanded:!0,children:c})})};var l,m,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <MobileNav name="Matthew Wager" accountMenu={ACCOUNT_MENU} onNotificationsClick={() => {}}>
        {NAV_CONTENT}
      </MobileNav>
    </div>
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,u,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Expanded (open by default)",
  // defaultExpanded renders a real position:fixed, portaled overlay — under
  // the usual light/dark split decorator that'd mount two of them at once
  // (one per half), fighting over the same document.body scroll-lock/focus
  // trap. noThemeSplit keeps this story to a single copy, the same fix
  // used for Wizard's own "full viewport" story.
  parameters: {
    noThemeSplit: true
  },
  render: () => <div style={PREVIEW_STYLE}>
      <MobileNav name="Matthew Wager" accountMenu={ACCOUNT_MENU} onNotificationsClick={() => {}} defaultExpanded>
        {NAV_CONTENT}
      </MobileNav>
    </div>
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,j,N;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Without accountMenu",
  parameters: {
    noThemeSplit: true
  },
  render: () => <div style={PREVIEW_STYLE}>
      <MobileNav name="Matthew Wager" defaultExpanded>
        {NAV_CONTENT}
      </MobileNav>
    </div>
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const A=["Default","Expanded","WithoutAccountMenu"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Expanded:n,WithoutAccountMenu:i,__namedExportsOrder:A,default:O},Symbol.toStringTag,{value:"Module"}));export{o as D,n as E,X as M,i as W};
