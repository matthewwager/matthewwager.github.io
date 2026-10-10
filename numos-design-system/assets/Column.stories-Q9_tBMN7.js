import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as w}from"./index-ClcD9ViR.js";import{s as o,p as t}from"./DiagramConnector-DY1AhLDR.js";import"./index-Brl4xq4Y.js";const k={title:"Components/Column",component:o,parameters:{layout:"padded"}},s=["Acme Corp","Globex","Initech","Umbrella Inc","Soylent Corp"],l={render:()=>e.jsx("div",{style:{width:"16rem",border:"1px solid var(--border-subtle)"},children:e.jsx(o,{header:e.jsx(t,{type:"columnHead",children:"Company"}),children:s.map(n=>e.jsx(t,{type:"text",children:n},n))})})},a={render:()=>e.jsx("div",{style:{width:"16rem",border:"1px solid var(--border-subtle)"},children:e.jsx(o,{header:e.jsx(t,{type:"sorted",direction:"asc",children:"Company"}),children:[...s].sort().map(n=>e.jsx(t,{type:"text",children:n},n))})})},E=[49,82,12,100,67];function M(){const[n,p]=w.useState(new Set),m=n.size===s.length;function g(){p(m?new Set:new Set(s))}function v(r){p(i=>{const c=new Set(i);return c.has(r)?c.delete(r):c.add(r),c})}return e.jsxs("div",{style:{display:"flex",border:"1px solid var(--border-subtle)"},children:[e.jsx(o,{header:e.jsx(t,{type:"checkboxColumnHead",checked:m,onCheckedChange:g,"aria-label":"Select all rows"}),width:56,children:s.map(r=>e.jsx(t,{type:"checkbox",checked:n.has(r),onCheckedChange:()=>v(r),"aria-label":`Select ${r}`},r))}),e.jsx(o,{header:e.jsx(t,{type:"sorted",children:"Company"}),children:s.map(r=>e.jsx(t,{type:"emphasis",children:r},r))}),e.jsx(o,{header:e.jsx(t,{type:"columnHead",children:"Renewal"}),width:140,children:E.map((r,i)=>e.jsx(t,{type:"progress",value:r},s[i]))})]})}const d={name:"Side by side",render:()=>e.jsx(M,{})};var u,h,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "16rem",
    border: "1px solid var(--border-subtle)"
  }}>
      <Column header={<Cell type="columnHead">Company</Cell>}>
        {COMPANIES.map(name => <Cell key={name} type="text">
            {name}
          </Cell>)}
      </Column>
    </div>
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var C,y,b;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "16rem",
    border: "1px solid var(--border-subtle)"
  }}>
      <Column header={<Cell type="sorted" direction="asc">
            Company
          </Cell>}>
        {[...COMPANIES].sort().map(name => <Cell key={name} type="text">
            {name}
          </Cell>)}
      </Column>
    </div>
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,j,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Side by side",
  render: () => <SelectableTable />
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const O=["Default","Sorted","MultipleColumns"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:l,MultipleColumns:d,Sorted:a,__namedExportsOrder:O,default:k},Symbol.toStringTag,{value:"Module"}));export{N as C,l as D,d as M,a as S};
