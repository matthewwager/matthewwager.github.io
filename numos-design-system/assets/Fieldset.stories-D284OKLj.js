import{j as e}from"./jsx-runtime-BYYWji4R.js";import{K as i,av as r,L as j,al as f}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const v={title:"Components/Fieldset",component:i},b=[{value:"ca",label:"California"},{value:"ny",label:"New York"},{value:"tx",label:"Texas"}];function l({size:a}){return e.jsxs(i,{label:"Address",size:a,children:[e.jsx(r,{size:a,placeholder:"Street Address 1","aria-label":"Street address 1"}),e.jsx(r,{size:a,placeholder:"Street Address 2","aria-label":"Street address 2"}),e.jsx(r,{size:a,placeholder:"City","aria-label":"City"}),e.jsxs(j,{children:[e.jsx(f,{size:a,options:b,placeholder:"State or Province"}),e.jsx(r,{size:a,placeholder:"Zip or Postal Code","aria-label":"Zip or postal code"})]})]})}const s={name:"Address (medium)",render:()=>e.jsx("div",{style:{width:"20rem",maxWidth:"100%"},children:e.jsx(l,{size:"md"})})},d={render:()=>e.jsxs("div",{style:{width:"20rem",maxWidth:"100%",display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsx(l,{size:"sm"}),e.jsx(l,{size:"md"}),e.jsx(l,{size:"lg"})]})},t={name:"Error (one field)",render:()=>e.jsx("div",{style:{width:"20rem",maxWidth:"100%"},children:e.jsxs(i,{label:"Address",size:"md",children:[e.jsx(r,{size:"md",placeholder:"Street Address 1","aria-label":"Street address 1",defaultValue:"1 Market St"}),e.jsx(r,{size:"md",placeholder:"Street Address 2","aria-label":"Street address 2"}),e.jsx(r,{size:"md",placeholder:"City","aria-label":"City",defaultValue:"San Francisco"}),e.jsxs(j,{children:[e.jsx(f,{size:"md",options:b,placeholder:"State or Province",defaultValue:"ca"}),e.jsx(r,{size:"md",placeholder:"Zip or Postal Code","aria-label":"Zip or postal code",defaultValue:"941",status:"error",helpText:"Enter a valid ZIP code"})]})]})})};var o,n,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Address (medium)",
  render: () => <div style={{
    width: "20rem",
    maxWidth: "100%"
  }}>
      <AddressExample size="md" />
    </div>
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,p,x;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "20rem",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)"
  }}>
      <AddressExample size="sm" />
      <AddressExample size="md" />
      <AddressExample size="lg" />
    </div>
}`,...(x=(p=d.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,h,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Error (one field)",
  render: () => <div style={{
    width: "20rem",
    maxWidth: "100%"
  }}>
      <Fieldset label="Address" size="md">
        <TextInput size="md" placeholder="Street Address 1" aria-label="Street address 1" defaultValue="1 Market St" />
        <TextInput size="md" placeholder="Street Address 2" aria-label="Street address 2" />
        <TextInput size="md" placeholder="City" aria-label="City" defaultValue="San Francisco" />
        <FieldsetRow>
          <Select size="md" options={STATE_OPTIONS} placeholder="State or Province" defaultValue="ca" />
          <TextInput size="md" placeholder="Zip or Postal Code" aria-label="Zip or postal code" defaultValue="941" status="error" helpText="Enter a valid ZIP code" />
        </FieldsetRow>
      </Fieldset>
    </div>
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const z=["Default","Sizes","ErrorState"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ErrorState:t,Sizes:d,__namedExportsOrder:z,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,t as E,C as F,d as S};
