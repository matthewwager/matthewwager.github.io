import{j as e}from"./jsx-runtime-BYYWji4R.js";import{ac as r}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const y={title:"Components/ProgressIndicator",component:r,parameters:{layout:"padded"}},l=[{label:"Account",state:"completed"},{label:"Profile",state:"completed"},{label:"Team"},{label:"Billing"},{label:"Preferences"},{label:"Integrations"},{label:"Review"},{label:"Done"}],t={render:()=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{steps:l})})},s={render:()=>e.jsx("div",{style:{height:"24rem"},children:e.jsx(r,{orientation:"vertical",steps:l})})},o={name:"With an error step",render:()=>e.jsx("div",{style:{width:"24rem"},children:e.jsx(r,{steps:[{label:"Account",state:"completed"},{label:"Profile",state:"completed"},{label:"Payment",state:"error"},{label:"Review"}]})})},a={name:"Vertical, without labels",render:()=>e.jsx("div",{style:{height:"16rem"},children:e.jsx(r,{orientation:"vertical",showStepTitle:!1,steps:l.slice(0,4)})})},n={name:"showTooltips={false}",render:()=>e.jsx("div",{style:{width:"28rem"},children:e.jsx(r,{showTooltips:!1,steps:l})})};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "28rem"
  }}>
      <ProgressIndicator steps={EIGHT_STEPS} />
    </div>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    height: "24rem"
  }}>
      <ProgressIndicator orientation="vertical" steps={EIGHT_STEPS} />
    </div>
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,b,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,P,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Vertical, without labels",
  render: () => <div style={{
    height: "16rem"
  }}>
      <ProgressIndicator orientation="vertical" showStepTitle={false} steps={EIGHT_STEPS.slice(0, 4)} />
    </div>
}`,...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var T,f,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "showTooltips={false}",
  render: () => <div style={{
    width: "28rem"
  }}>
      <ProgressIndicator showTooltips={false} steps={EIGHT_STEPS} />
    </div>
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const j=["Default","Vertical","WithError","WithoutLabels","WithoutTooltips"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Vertical:s,WithError:o,WithoutLabels:a,WithoutTooltips:n,__namedExportsOrder:j,default:y},Symbol.toStringTag,{value:"Module"}));export{t as D,W as P,s as V,o as W,a,n as b};
