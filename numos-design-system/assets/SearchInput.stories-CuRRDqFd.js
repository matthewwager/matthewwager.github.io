import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as C}from"./index-ClcD9ViR.js";import{ai as r,j as w}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";import B from"./apple-ClKgFGh2.js";import G from"./banana-V6DKv7TY.js";import $ from"./cherry-DBSC7OKt.js";import Z from"./grape-fsmgPOZP.js";import H from"./carrot-CasE05fa.js";const a=[{value:"apple",label:"Apple",leadingIcon:e.jsx(B,{size:16})},{value:"banana",label:"Banana",leadingIcon:e.jsx(G,{size:16})},{value:"cherry",label:"Cherry",leadingIcon:e.jsx($,{size:16})},{value:"grape",label:"Grape",leadingIcon:e.jsx(Z,{size:16})},{value:"grapefruit",label:"Grapefruit"},{value:"carrot",label:"Carrot (not a fruit)",leadingIcon:e.jsx(H,{size:16}),disabled:!0}],J={title:"Components/SearchInput",component:r,argTypes:{status:{control:"select",options:["default","error","success"]},size:{control:"select",options:["sm","md","lg"]},label:{control:"text"},placeholder:{control:"text"},helpText:{control:"text"},disabled:{control:"boolean"}},args:{label:"Fruit",placeholder:"Search fruit",status:"default",size:"lg",disabled:!1,options:a}},t={width:"20rem",minHeight:"22rem"},o={render:s=>e.jsx("div",{style:t,children:e.jsx(r,{...s})})},n={render:()=>e.jsxs("div",{style:{...t,display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(r,{size:"sm",label:"Size sm",placeholder:"Search fruit",options:a}),e.jsx(r,{size:"md",label:"Size md",placeholder:"Search fruit",options:a}),e.jsx(r,{size:"lg",label:"Size lg",placeholder:"Search fruit",options:a})]})},l={render:()=>e.jsxs("div",{style:{...t,display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(r,{label:"Fruit",defaultValue:"Zucchini",status:"error",helpText:"No fruit named that",options:a}),e.jsx(r,{label:"Fruit",defaultValue:"Apple",status:"success",helpText:"Looks good",options:a})]})},i={render:()=>e.jsx("div",{style:t,children:e.jsx(r,{label:"Fruit",defaultValue:"Apple",disabled:!0,options:a})})},c={name:"With prefix and suffix",render:()=>e.jsx("div",{style:t,children:e.jsx(r,{label:"Amount",placeholder:"0.00",prefix:"$",suffix:"USD"})})},d={name:"Without options (plain search box)",render:()=>e.jsx("div",{style:t,children:e.jsx(r,{label:"Search",placeholder:"Search anything"})})};function M(){const[s,m]=C.useState(null);return e.jsxs("div",{style:{...t,display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx(r,{label:"Fruit",placeholder:"Search fruit",options:a,onSelect:S=>m(S.value)}),e.jsx("p",{style:{margin:0,font:"var(--type-paragraph-s-regular)",color:"var(--content-subtle)"},children:s?`Selected: ${s}`:"Nothing selected yet"})]})}const p={name:"onSelect",render:()=>e.jsx(M,{})};function q(){const[s,m]=C.useState(null);function S(f){f.preventDefault();const k=new FormData(f.currentTarget);m(JSON.stringify(Object.fromEntries(k),null,2))}return e.jsxs("form",{onSubmit:S,style:{...t,display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(r,{name:"fruit",label:"Fruit",placeholder:"Search fruit",options:a}),e.jsx(w,{type:"submit",children:"Submit"}),s&&e.jsx("pre",{style:{padding:"1rem",background:"var(--background-element)",borderRadius:"var(--radius-md)",fontSize:"0.75rem"},children:s})]})}const u={name:"Inside a <form>",render:()=>e.jsx(q,{})};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={PREVIEW_STYLE}>
      <SearchInput {...args} />
    </div>
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,I,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    ...PREVIEW_STYLE,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }}>
      <SearchInput size="sm" label="Size sm" placeholder="Search fruit" options={FRUIT_OPTIONS} />
      <SearchInput size="md" label="Size md" placeholder="Search fruit" options={FRUIT_OPTIONS} />
      <SearchInput size="lg" label="Size lg" placeholder="Search fruit" options={FRUIT_OPTIONS} />
    </div>
}`,...(j=(I=n.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var y,v,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    ...PREVIEW_STYLE,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }}>
      <SearchInput label="Fruit" defaultValue="Zucchini" status="error" helpText="No fruit named that" options={FRUIT_OPTIONS} />
      <SearchInput label="Fruit" defaultValue="Apple" status="success" helpText="Looks good" options={FRUIT_OPTIONS} />
    </div>
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var T,z,O;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_STYLE}>
      <SearchInput label="Fruit" defaultValue="Apple" disabled options={FRUIT_OPTIONS} />
    </div>
}`,...(O=(z=i.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var F,_,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "With prefix and suffix",
  render: () => <div style={PREVIEW_STYLE}>
      <SearchInput label="Amount" placeholder="0.00" prefix="$" suffix="USD" />
    </div>
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,R,N;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Without options (plain search box)",
  render: () => <div style={PREVIEW_STYLE}>
      <SearchInput label="Search" placeholder="Search anything" />
    </div>
}`,...(N=(R=d.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var W,V,A;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "onSelect",
  render: () => <SelectionExample />
}`,...(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var L,U,Y;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Inside a <form>",
  render: () => <InFormExample />
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const K=["Default","Sizes","Status","Disabled","WithPrefixAndSuffix","NoDropdown","OnSelect","InForm"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Disabled:i,InForm:u,NoDropdown:d,OnSelect:p,Sizes:n,Status:l,WithPrefixAndSuffix:c,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{o as D,u as I,d as N,p as O,le as S,c as W,i as a,n as b,l as c};
