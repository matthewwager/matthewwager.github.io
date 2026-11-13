import{j as e}from"./jsx-runtime-BYYWji4R.js";import{af as r}from"./DiagramCell-BVBcLmyd.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const E={title:"Components/ProgressIndicator",component:r,parameters:{layout:"padded"}},i=[{label:"Account",state:"completed"},{label:"Profile",state:"completed"},{label:"Team"},{label:"Billing"},{label:"Preferences"},{label:"Integrations"},{label:"Review"},{label:"Done"}],t={render:()=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{steps:i})})},s={render:()=>e.jsx("div",{style:{height:"24rem"},children:e.jsx(r,{orientation:"vertical",steps:i})})},a={name:"With an error step",render:()=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{steps:[{label:"Account",state:"completed"},{label:"Profile",state:"completed"},{label:"Payment",state:"error"},{label:"Review"}]})})},o={name:"Vertical, without labels",render:()=>e.jsx("div",{style:{height:"16rem"},children:e.jsx(r,{orientation:"vertical",showStepTitle:!1,steps:i.slice(0,4)})})},n={name:"showTooltips={false}",render:()=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{showTooltips:!1,steps:i})})},l={name:"Horizontal with labels",render:()=>e.jsx("div",{style:{width:"40rem"},children:e.jsx(r,{showStepTitle:!0,steps:[{label:"Received",state:"completed"},{label:"Captured",state:"completed"},{label:"Verified"},{label:"Approved"},{label:"Paid"}]})})};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "28rem"
  }}>
      <ProgressIndicator steps={EIGHT_STEPS} />
    </div>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,h,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "24rem"
  }}>
      <ProgressIndicator orientation="vertical" steps={EIGHT_STEPS} />
    </div>
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var u,v,P;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "With an error step",
  render: () => <div style={{
    width: "24rem"
  }}>
      <ProgressIndicator steps={[{
      label: "Account",
      state: "completed"
    }, {
      label: "Profile",
      state: "completed"
    }, {
      label: "Payment",
      state: "error"
    }, {
      label: "Review"
    }]} />
    </div>
}`,...(P=(v=a.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var g,w,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Vertical, without labels",
  render: () => <div style={{
    height: "16rem"
  }}>
      <ProgressIndicator orientation="vertical" showStepTitle={false} steps={EIGHT_STEPS.slice(0, 4)} />
    </div>
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,f,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "showTooltips={false}",
  render: () => <div style={{
    width: "28rem"
  }}>
      <ProgressIndicator showTooltips={false} steps={EIGHT_STEPS} />
    </div>
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,x,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Horizontal with labels",
  render: () => <div style={{
    width: "40rem"
  }}>
      <ProgressIndicator showStepTitle steps={[{
      label: "Received",
      state: "completed"
    }, {
      label: "Captured",
      state: "completed"
    }, {
      label: "Verified"
    }, {
      label: "Approved"
    }, {
      label: "Paid"
    }]} />
    </div>
}`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const W=["Default","Vertical","WithError","WithoutLabels","WithoutTooltips","HorizontalWithLabels"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:t,HorizontalWithLabels:l,Vertical:s,WithError:a,WithoutLabels:o,WithoutTooltips:n,__namedExportsOrder:W,default:E},Symbol.toStringTag,{value:"Module"}));export{t as D,l as H,z as P,s as V,a as W,o as a,n as b};
