import{j as e}from"./jsx-runtime-BYYWji4R.js";import{V as s}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";import d from"./trash-2-CtCsxZDL.js";import M from"./settings-5LyT_Gvo.js";import m from"./plus-CFQ8fSZr.js";const C=["plus","trash","settings"],R={plus:e.jsx(m,{size:24}),trash:e.jsx(d,{size:24}),settings:e.jsx(M,{size:24})},q={title:"Components/IconButton",component:s,argTypes:{variant:{control:"select",options:["primary","secondary","ghost","accent"]},size:{control:"select",options:["sm","md","lg"]},icon:{control:"select",options:C,mapping:R},disabled:{control:"boolean"}},args:{variant:"primary",size:"md",icon:"plus","aria-label":"Add"}},r={},n={args:{variant:"secondary"}},t={args:{variant:"ghost"}},i={args:{variant:"accent"}},o={render:a=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx(s,{...a,size:"sm",icon:e.jsx(m,{size:16})}),e.jsx(s,{...a,size:"md",icon:e.jsx(m,{size:24})}),e.jsx(s,{...a,size:"lg",icon:e.jsx(m,{size:24})})]})},c={name:"All variants × sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:["primary","secondary","ghost","accent"].map(a=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:[e.jsx("span",{style:{width:80,font:"var(--type-paragraph-xs-regular)",color:"var(--content-subtle)"},children:a}),e.jsx(s,{variant:a,size:"sm",icon:e.jsx(d,{size:16}),"aria-label":"Delete"}),e.jsx(s,{variant:a,size:"md",icon:e.jsx(d,{size:24}),"aria-label":"Delete"}),e.jsx(s,{variant:a,size:"lg",icon:e.jsx(d,{size:24}),"aria-label":"Delete"})]},a))})},l={args:{disabled:!0}},p={name:"Disabled, all variants",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--space-3)",alignItems:"center"},children:["primary","secondary","ghost","accent"].map(a=>e.jsx(s,{variant:a,disabled:!0,icon:e.jsx(M,{size:24}),"aria-label":"Settings"},a))})};var g,u,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var y,x,z;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(z=(x=n.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var b,j,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(h=(j=t.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var f,S,I;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "accent"
  }
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var D,A,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "var(--space-3)",
    alignItems: "center"
  }}>
      <IconButton {...args} size="sm" icon={<Plus size={16} />} />
      <IconButton {...args} size="md" icon={<Plus size={24} />} />
      <IconButton {...args} size="lg" icon={<Plus size={24} />} />
    </div>
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var P,T,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "All variants × sizes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)"
  }}>
      {(["primary", "secondary", "ghost", "accent"] as const).map(variant => <div key={variant} style={{
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }}>
          <span style={{
        width: 80,
        font: "var(--type-paragraph-xs-regular)",
        color: "var(--content-subtle)"
      }}>{variant}</span>
          <IconButton variant={variant} size="sm" icon={<Trash2 size={16} />} aria-label="Delete" />
          <IconButton variant={variant} size="md" icon={<Trash2 size={24} />} aria-label="Delete" />
          <IconButton variant={variant} size="lg" icon={<Trash2 size={24} />} aria-label="Delete" />
        </div>)}
    </div>
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var V,O,G;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(G=(O=l.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var k,w,E;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Disabled, all variants",
  render: () => <div style={{
    display: "flex",
    gap: "var(--space-3)",
    alignItems: "center"
  }}>
      {(["primary", "secondary", "ghost", "accent"] as const).map(variant => <IconButton key={variant} variant={variant} disabled icon={<Settings size={24} />} aria-label="Settings" />)}
    </div>
}`,...(E=(w=p.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const F=["Primary","Secondary","Ghost","Accent","Sizes","AllVariants","Disabled","DisabledAllVariants"],W=Object.freeze(Object.defineProperty({__proto__:null,Accent:i,AllVariants:c,Disabled:l,DisabledAllVariants:p,Ghost:t,Primary:r,Secondary:n,Sizes:o,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{i as A,l as D,t as G,W as I,r as P,n as S,c as a,p as b,o as c};
