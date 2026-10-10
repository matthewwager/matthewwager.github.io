import{j as e}from"./jsx-runtime-BYYWji4R.js";import{j as l}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import q from"./download-B-7_ipn_.js";import G from"./check-CNzaN5mj.js";import H from"./arrow-right-CSI71RkN.js";import J from"./trash-2-CtCsxZDL.js";import K from"./save-Cc8TSHU4.js";const p=["none","save","trash","arrow-right","check","download"],u={none:void 0,save:e.jsx(K,{size:16}),trash:e.jsx(J,{size:16}),"arrow-right":e.jsx(H,{size:16}),check:e.jsx(G,{size:16}),download:e.jsx(q,{size:16})},N={title:"Components/Button",component:l,argTypes:{variant:{control:"select",options:["primary","secondary","accent","destructive","link"]},size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"},children:{control:"text"},leadingIcon:{control:"select",options:p,mapping:u},trailingIcon:{control:"select",options:p,mapping:u}},args:{children:"Save changes",variant:"primary",size:"md"}},r={},a={args:{variant:"secondary"}},s={args:{variant:"accent"}},t={args:{variant:"destructive",children:"Delete project"}},o={args:{variant:"link"}},n={args:{leadingIcon:"save",children:"Save changes"}},c={render:m=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(l,{...m,size:"sm",children:"Small"}),e.jsx(l,{...m,size:"md",children:"Medium"}),e.jsx(l,{...m,size:"lg",children:"Large"})]})},i={args:{disabled:!0,children:"Can't click me"}},d={args:{fullWidth:!0,children:"Full-width button"},parameters:{layout:"padded"}};var g,h,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,y,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var x,z,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "accent"
  }
}`,...(f=(z=s.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var b,k,B;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Delete project"
  }
}`,...(B=(k=t.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var w,D,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "link"
  }
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var W,_,L;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    leadingIcon: "save",
    children: "Save changes"
  }
}`,...(L=(_=n.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var A,C,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "var(--space-3)",
    alignItems: "center"
  }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var M,O,P;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Can't click me"
  }
}`,...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var T,E,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: "Full-width button"
  },
  parameters: {
    layout: "padded"
  }
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const Q=["Primary","Secondary","Accent","Destructive","Link","WithIcon","Sizes","Disabled","FullWidth"],se=Object.freeze(Object.defineProperty({__proto__:null,Accent:s,Destructive:t,Disabled:i,FullWidth:d,Link:o,Primary:r,Secondary:a,Sizes:c,WithIcon:n,__namedExportsOrder:Q,default:N},Symbol.toStringTag,{value:"Module"}));export{s as A,se as B,t as D,o as L,r as P,a as S,n as W,c as a};
