import{j as t}from"./jsx-runtime-BYYWji4R.js";import{k as o,j as r}from"./DiagramConnector-DY1AhLDR.js";import"./index-ClcD9ViR.js";import"./index-Brl4xq4Y.js";const v={title:"Components/ButtonGroup",component:o,parameters:{layout:"padded"}},e={render:()=>t.jsxs(o,{children:[t.jsx(r,{variant:"secondary",children:"Cancel"}),t.jsx(r,{variant:"primary",children:"Submit"})]})},n={name:'orientation="vertical"',render:()=>t.jsx("div",{style:{width:"12rem"},children:t.jsxs(o,{orientation:"vertical",children:[t.jsx(r,{variant:"secondary",children:"Cancel"}),t.jsx(r,{variant:"primary",children:"Submit"})]})})},a={name:"Three buttons",render:()=>t.jsxs(o,{children:[t.jsx(r,{variant:"link",children:"Reset"}),t.jsx(r,{variant:"secondary",children:"Save draft"}),t.jsx(r,{variant:"primary",children:"Publish"})]})};var s,i,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </ButtonGroup>
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'orientation="vertical"',
  render: () => <div style={{
    width: "12rem"
  }}>
      <ButtonGroup orientation="vertical">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </ButtonGroup>
    </div>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,B;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Three buttons",
  render: () => <ButtonGroup>
      <Button variant="link">Reset</Button>
      <Button variant="secondary">Save draft</Button>
      <Button variant="primary">Publish</Button>
    </ButtonGroup>
}`,...(B=(p=a.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};const h=["Default","Vertical","ThreeButtons"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,ThreeButtons:a,Vertical:n,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{b as B,e as D,a as T,n as V};
