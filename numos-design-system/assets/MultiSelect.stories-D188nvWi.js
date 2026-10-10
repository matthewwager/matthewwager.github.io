import{j as e}from"./jsx-runtime-BYYWji4R.js";import{a4 as c}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const _=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"durian",label:"Durian",disabled:!0},{value:"elderberry",label:"Elderberry"}],M={minHeight:280,width:"16rem"},W={title:"Components/MultiSelect",component:c,argTypes:{options:{control:!1},status:{control:"select",options:["default","error","success"]},size:{control:"select",options:["sm","md","lg"]},label:{control:"text"},placeholder:{control:"text"},helpText:{control:"text"},disabled:{control:"boolean"}},args:{options:_,label:"Fruit",placeholder:"Select fruit",status:"default",size:"lg"},render:a=>e.jsx("div",{style:M,children:e.jsx(c,{...a})})},s={},r={name:"With a selection (closed)",args:{defaultValue:["banana","cherry"]}},t={args:{status:"error",helpText:"Please choose at least one fruit."}},l={args:{status:"success",defaultValue:["cherry"],helpText:"Good choices!"}},o={args:{disabled:!0,defaultValue:["banana"]}},n={render:a=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",...M,width:"auto"},children:[e.jsx(c,{...a,size:"sm",label:"Small",defaultValue:["banana"]}),e.jsx(c,{...a,size:"md",label:"Medium",defaultValue:["banana"]}),e.jsx(c,{...a,size:"lg",label:"Large",defaultValue:["banana"]})]})};var u,i,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With a selection (closed)",
  args: {
    defaultValue: ["banana", "cherry"]
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,S,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: "error",
    helpText: "Please choose at least one fruit."
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var h,x,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: "success",
    defaultValue: ["cherry"],
    helpText: "Good choices!"
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var V,v,E;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: ["banana"]
  }
}`,...(E=(v=o.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var z,T,j;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "var(--space-6)",
    ...PREVIEW_STYLE,
    width: "auto"
  }}>
      <MultiSelect {...args} size="sm" label="Small" defaultValue={["banana"]} />
      <MultiSelect {...args} size="md" label="Medium" defaultValue={["banana"]} />
      <MultiSelect {...args} size="lg" label="Large" defaultValue={["banana"]} />
    </div>
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const D=["Default","WithSelection","Error","Success","Disabled","Sizes"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:o,Error:t,Sizes:n,Success:l,WithSelection:r,__namedExportsOrder:D,default:W},Symbol.toStringTag,{value:"Module"}));export{s as D,t as E,R as M,n as S,r as W,o as a,l as b};
