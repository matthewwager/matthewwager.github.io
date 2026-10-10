import{j as e}from"./jsx-runtime-BYYWji4R.js";import{al as n}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const P=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"durian",label:"Durian",disabled:!0},{value:"elderberry",label:"Elderberry"}],D={minHeight:220,width:"16rem"},V={title:"Components/Select",component:n,argTypes:{options:{control:!1},status:{control:"select",options:["default","error","success"]},size:{control:"select",options:["sm","md","lg"]},label:{control:"text"},placeholder:{control:"text"},helpText:{control:"text"},disabled:{control:"boolean"}},args:{options:P,label:"Fruit",placeholder:"Select a fruit",status:"default",size:"lg"},render:a=>e.jsx("div",{style:D,children:e.jsx(n,{...a})})},r={},s={args:{defaultValue:"banana"}},t={args:{status:"error",helpText:"Please choose a fruit."}},o={args:{status:"success",defaultValue:"cherry",helpText:"Good choice!"}},l={args:{disabled:!0}},c={render:a=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",...D,width:"auto"},children:[e.jsx(n,{...a,size:"sm",label:"Small"}),e.jsx(n,{...a,size:"md",label:"Medium"}),e.jsx(n,{...a,size:"lg",label:"Large"})]})};var i,d,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: "banana"
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,S,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: "error",
    helpText: "Please choose a fruit."
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,f,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "success",
    defaultValue: "cherry",
    helpText: "Good choice!"
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,E,z;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(E=l.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var T,j,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    ...PREVIEW_STYLE,
    width: "auto"
  }}>
      <Select {...args} size="sm" label="Small" />
      <Select {...args} size="md" label="Medium" />
      <Select {...args} size="lg" label="Large" />
    </div>
}`,...(_=(j=c.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const O=["Default","WithSelection","Error","Success","Disabled","Sizes"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:l,Error:t,Sizes:c,Success:o,WithSelection:s,__namedExportsOrder:O,default:V},Symbol.toStringTag,{value:"Module"}));export{r as D,t as E,w as S,s as W,l as a,c as b,o as c};
