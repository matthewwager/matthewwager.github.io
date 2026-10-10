import{j as e}from"./jsx-runtime-BYYWji4R.js";import{C as t}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const _={title:"Components/Calendar",component:t,parameters:{layout:"padded"}},n=new Date(2026,0,1),B={6:"negative",7:"negative",8:"negative",9:"negative",11:"negative",12:"notice",13:"notice",14:"notice",15:"notice",16:"positive",19:"positive",20:"positive"};function s(a){return B[a.getDate()]}const W={6:"Bank feed import overdue — 2 accounts haven't synced since the 4th.",7:"Bank feed import overdue — 2 accounts haven't synced since the 4th.",8:"Bank feed import overdue — 2 accounts haven't synced since the 4th.",9:"Bank feed import overdue — 2 accounts haven't synced since the 4th.",11:"Payroll journal entry needs review before it can post.",12:"Reconciliation in progress — 3 of 5 accounts matched.",13:"Reconciliation in progress — 3 of 5 accounts matched.",14:"Reconciliation in progress — 3 of 5 accounts matched.",15:"Reconciliation in progress — 3 of 5 accounts matched.",16:"Books closed for this period.",19:"Books closed for this period.",20:"Books closed for this period."};function N(a){return W[a.getDate()]}const r={render:()=>e.jsx("div",{style:{width:"20rem"},children:e.jsx(t,{month:n})})},o={name:"With date statuses",render:()=>e.jsx("div",{style:{width:"20rem"},children:e.jsx(t,{month:n,getDateStatus:s})})},i={name:"Flexes with its container",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx("div",{style:{width:"48rem"},children:e.jsx(t,{month:n,getDateStatus:s})}),e.jsx("div",{style:{width:"26rem"},children:e.jsx(t,{month:n,getDateStatus:s})}),e.jsx("div",{style:{width:"16rem"},children:e.jsx(t,{month:n,getDateStatus:s})})]})},d={name:"Clickable — with date details",render:()=>e.jsx("div",{style:{width:"20rem",minHeight:"18rem"},children:e.jsx(t,{month:n,getDateStatus:s,getDateDetails:N})})};function b(a){const l=new Date;return a.getFullYear()===l.getFullYear()&&a.getMonth()===l.getMonth()&&a.getDate()===l.getDate()?"notice":void 0}const c={name:"Highlights today",render:()=>e.jsx("div",{style:{width:"20rem"},children:e.jsx(t,{getDateStatus:b})})},m={name:"weekStartsOn={1}",render:()=>e.jsx("div",{style:{width:"20rem"},children:e.jsx(t,{month:n,getDateStatus:s,weekStartsOn:1})})};var u,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "20rem"
  }}>
      <Calendar month={MONTH} />
    </div>
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var p,v,D;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With date statuses",
  render: () => <div style={{
    width: "20rem"
  }}>
      <Calendar month={MONTH} getDateStatus={getDemoStatus} />
    </div>
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var S,y,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Flexes with its container",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <div style={{
      width: "48rem"
    }}>
        <Calendar month={MONTH} getDateStatus={getDemoStatus} />
      </div>
      <div style={{
      width: "26rem"
    }}>
        <Calendar month={MONTH} getDateStatus={getDemoStatus} />
      </div>
      <div style={{
      width: "16rem"
    }}>
        <Calendar month={MONTH} getDateStatus={getDemoStatus} />
      </div>
    </div>
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,f,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Clickable — with date details",
  render: () => <div style={{
    width: "20rem",
    minHeight: "18rem"
  }}>
      <Calendar month={MONTH} getDateStatus={getDemoStatus} getDateDetails={getDemoDetails} />
    </div>
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var T,C,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Highlights today",
  render: () => <div style={{
    width: "20rem"
  }}>
      <Calendar getDateStatus={getTodayStatus} />
    </div>
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var O,M,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "weekStartsOn={1}",
  render: () => <div style={{
    width: "20rem"
  }}>
      <Calendar month={MONTH} getDateStatus={getDemoStatus} weekStartsOn={1} />
    </div>
}`,...(H=(M=m.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const F=["Default","WithStatuses","Fluid","WithDetails","Today","WeekStartsMonday"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Fluid:i,Today:c,WeekStartsMonday:m,WithDetails:d,WithStatuses:o,__namedExportsOrder:F,default:_},Symbol.toStringTag,{value:"Module"}));export{z as C,r as D,i as F,c as T,m as W,d as a,o as b};
